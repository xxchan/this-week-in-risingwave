// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'This Week in RisingWave',
    tagline: 'Brining you news about the development of RisingWave and its open and inclusive community.',
    url: 'https://this-week-in-risingwave.vercel.app',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    path: 'newsletter',
                    routeBasePath: 'newsletter',
                    blogSidebarTitle: 'Issues',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    editUrl: 'https://github.com/xxchan/this-week-in-risingwave/tree/main',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'This Week in RisingWave',
                items: [
                    {to: '/newsletter', label: 'Newsletter', position: 'right'},
                    {
                        type: 'dropdown',
                        position: 'right',
                        label: 'Feed',
                        items: [
                            { href: '/newsletter/atom.xml', target: "_blank", label: 'Atom' },
                            { href: '/newsletter/rss.xml', target: "_blank", label: 'RSS' },
                        ],
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [],
                copyright: `Copyright © ${new Date().getFullYear()} xxchan &lt;xxchan22f@gmail.com&gt;. Built with Docusaurus.<br/>`
                    ,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['rust'],
            },
        }),
    scripts: [
        {defer: true, 'data-domain': "this-week-in-risingwave.vercel.app", src: "https://plausible.io/js/script.js"},
    ]
};

module.exports = config;
