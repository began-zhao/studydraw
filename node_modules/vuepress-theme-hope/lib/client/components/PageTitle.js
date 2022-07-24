import { usePageData, usePageFrontmatter } from "@vuepress/client";
import { defineComponent, h, resolveComponent, unref } from "vue";
import PageInfo from "@theme-hope/module/info/components/PageInfo";
import { usePageInfo, useThemeLocaleData } from "@theme-hope/composables";
import "../styles/page-title.scss";
export default defineComponent({
    name: "PageTitle",
    setup() {
        const page = usePageData();
        const frontmatter = usePageFrontmatter();
        const themeLocale = useThemeLocaleData();
        const { config, items } = usePageInfo();
        return () => h("div", { class: "page-title" }, [
            h("h1", [
                themeLocale.value.titleIcon !== false
                    ? h(resolveComponent("FontIcon"), { icon: frontmatter.value.icon })
                    : null,
                page.value.title,
            ]),
            h(PageInfo, {
                config: unref(config),
                ...(items.value === null ? {} : { items: items.value }),
            }),
            h("hr"),
        ]);
    },
});
//# sourceMappingURL=PageTitle.js.map