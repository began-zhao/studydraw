import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { renderChildren, renderItem, } from "@theme-hope/module/sidebar/composables";
import { isActiveSidebarItem } from "@theme-hope/module/sidebar/utils";
import "../styles/sidebar-child.scss";
export default defineComponent({
    name: "SidebarChild",
    props: {
        config: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        return () => [
            renderItem(props.config, {
                class: [
                    "sidebar-link",
                    `sidebar-${props.config.type}`,
                    { active: isActiveSidebarItem(route, props.config, true) },
                ],
                exact: true,
            }),
            renderChildren(props.config.children),
        ];
    },
});
//# sourceMappingURL=SidebarChild.js.map