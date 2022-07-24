import { defineComponent, resolveComponent, h } from "vue";
import { usePure } from "@theme-hope/composables";
import AuthorInfo from "@theme-hope/module/info/components/AuthorInfo";
import CategoryInfo from "@theme-hope/module/info/components/CategoryInfo";
import DateInfo from "@theme-hope/module/info/components/DateInfo";
import PageViewInfo from "@theme-hope/module/info/components/PageViewInfo";
import ReadingTimeInfo from "@theme-hope/module/info/components/ReadingTimeInfo";
import TagInfo from "@theme-hope/module/info/components/TagInfo";
import OriginalInfo from "@theme-hope/module/info/components/OriginalMark";
import WordInfo from "@theme-hope/module/info/components/WordInfo";
import "balloon-css/balloon.css";
import "../styles/page-info.scss";
export default defineComponent({
    name: "PageInfo",
    components: {
        AuthorInfo,
        CategoryInfo,
        DateInfo,
        OriginalInfo,
        PageViewInfo,
        ReadingTimeInfo,
        TagInfo,
        WordInfo,
    },
    props: {
        items: {
            type: [Array, Boolean],
            default: () => [
                "Author",
                "Original",
                "Date",
                "Category",
                "Tag",
                "ReadingTime",
            ],
        },
        config: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const pure = usePure();
        return () => props.items
            ? h("div", { class: "page-info" }, props.items.map((item) => h(resolveComponent(`${item}Info`), {
                ...props.config,
                pure: pure.value,
            })))
            : null;
    },
});
//# sourceMappingURL=PageInfo.js.map