const { description } = require("../../package");

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "Virtual Station Wiki✨",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: "virtualstation/wiki.vstation.m86.work",
        editLinks: true,
        docsDir: "src",
        docsBranch: "develop",
        editLinkText: "このページをGithubで編集",
        lastUpdated: "最終更新",
        nav: [
            {
                text: "参加する",
                link: "/join/",
            },
            {
                text: "創る",
                items: [{ text: "VRChat", link: "/create/" }],
            },
        ],
        sidebar: {
            "/join/": [
                {
                    title: "参加する",
                    collapsable: false,
                    children: ["", "install-steam", "join-vrchat", ['https://is.gd/ktbQMV', "NeosVRに参加する"]],
                },
            ],
            "/create/": [
                {
                    title: "創る",
                    collapsable: false,
                    children: [""],
                },
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
