// Minimal self-hosted OAuth proxy for Decap CMS's GitHub backend.
//
// Decap CMS only ships GitHub-backend auth wired up for Netlify's Git
// Gateway. Self-hosting it means running the two routes GitHub's OAuth
// flow needs (/auth, /callback) ourselves and speaking Decap's documented
// popup handshake: https://decapcms.org/docs/external-oauth-clients/
//
// Required env vars: GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, ALLOWED_ORIGIN
// (the docs site origin, e.g. https://doc.xione.ai). Optional: PORT (default 8081).
import express from 'express'

const {
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  ALLOWED_ORIGIN,
  PORT = 8081,
} = process.env

for (const [name, value] of Object.entries({
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  ALLOWED_ORIGIN,
})) {
  if (!value) {
    throw new Error(`Missing required env var: ${name}`)
  }
}

const app = express()

app.get('/auth', (req, res) => {
  const redirectUri = `${req.protocol}://${req.get('host')}/callback`
  const params = new URLSearchParams({
    client_id: GITHUB_CLIENT_ID,
    scope: 'repo,user',
    redirect_uri: redirectUri,
  })
  res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`)
})

app.get('/callback', async (req, res) => {
  const { code, error, error_description: errorDescription } = req.query

  let message
  if (error) {
    message = `authorization:github:error:${JSON.stringify({ message: errorDescription || error })}`
  } else {
    try {
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        }),
      })
      const data = await tokenResponse.json()

      message = data.access_token
        ? `authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}`
        : `authorization:github:error:${JSON.stringify({ message: data.error_description || 'GitHub did not return an access token' })}`
    } catch {
      message = `authorization:github:error:${JSON.stringify({ message: 'OAuth token exchange failed' })}`
    }
  }

  // Decap's login popup listens for this exact handshake: it posts
  // "authorizing:github" to us (its opener), we reply once with the
  // success/error payload above, scoped to the docs site's own origin.
  res.set('Content-Type', 'text/html')
  res.send(`<!doctype html>
<html><body><script>
(function () {
  function receiveMessage(e) {
    window.opener.postMessage(
      ${JSON.stringify(message)},
      ${JSON.stringify(ALLOWED_ORIGIN)}
    )
    window.removeEventListener('message', receiveMessage, false)
  }
  window.addEventListener('message', receiveMessage, false)
  window.opener.postMessage('authorizing:github', ${JSON.stringify(ALLOWED_ORIGIN)})
})()
</script></body></html>`)
})

app.listen(PORT, () => {
  console.log(`Decap CMS OAuth proxy listening on :${PORT}`)
})
