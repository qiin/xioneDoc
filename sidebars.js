// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: '快速开始',
      items: ['getting-started/intro'],
    },
    {
      type: 'category',
      label: '部署方式',
      items: ['deployment/docker', 'deployment/from-source'],
    },
    {
      type: 'category',
      label: '支付网关',
      items: ['payments/overview', 'payments/payerscan'],
    },
    {
      type: 'category',
      label: '管理后台配置',
      items: [
        'admin-settings/sidebar-personalization',
        'admin-settings/docs-link',
      ],
    },
    {
      type: 'category',
      label: '常见问题',
      items: ['faq/faq'],
    },
  ],
};

export default sidebars;
