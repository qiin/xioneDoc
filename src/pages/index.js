import {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

// The whole site is docs (routeBasePath: '/' in docusaurus.config.js), so the
// homepage just forwards visitors straight into the first real page instead
// of duplicating a landing page.
export default function Home() {
  const history = useHistory();
  const target = useBaseUrl('/docs/getting-started/intro');

  useEffect(() => {
    history.replace(target);
  }, [history, target]);

  return null;
}
