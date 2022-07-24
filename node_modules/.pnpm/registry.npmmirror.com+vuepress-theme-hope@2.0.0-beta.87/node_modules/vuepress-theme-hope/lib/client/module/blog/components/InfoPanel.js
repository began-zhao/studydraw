import { h } from "vue";
import DropTransition from "@theme-hope/components/transitions/DropTransition";
import BloggerInfo from "@theme-hope/module/blog/components/BloggerInfo";
import InfoList from "@theme-hope/module/blog/components/InfoList";
import "../styles/info-panel.scss";
const InfoPanel = () => h("aside", { class: "blog-info-wrapper" }, [
    h(DropTransition, () => h(BloggerInfo)),
    h(DropTransition, { delay: 0.04 }, () => h(InfoList)),
]);
InfoPanel.displayName = "InfoPanel";
export default InfoPanel;
//# sourceMappingURL=InfoPanel.js.map