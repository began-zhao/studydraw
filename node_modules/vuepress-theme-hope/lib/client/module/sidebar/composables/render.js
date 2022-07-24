import { h, resolveComponent } from "vue";
import { useRoute } from "vue-router";
import AutoLink from "@theme-hope/components/AutoLink";
import { isActiveSidebarItem } from "@theme-hope/module/sidebar/utils";
export const renderItem = (config, props) => config.link
    ? // if the item has link, render it as `<AutoLink>`
        h(AutoLink, {
            ...props,
            config: config,
        })
    : // if the item only has text, render it as `<p>`
        h("p", props, [
            h(resolveComponent("FontIcon"), { icon: config.icon }),
            config.text,
        ]);
export const renderChildren = (children) => {
    const route = useRoute();
    if (!children)
        return null;
    return h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
        const active = isActiveSidebarItem(route, child, true);
        return h("li", { class: "sidebar-sub-header" }, [
            renderItem(child, {
                class: ["sidebar-link", "heading", { active }],
            }),
            renderChildren(child.children),
        ]);
    }));
};
//# sourceMappingURL=render.js.map