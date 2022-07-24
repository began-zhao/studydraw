"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareConfigFile = void 0;
const shared_1 = require("@vuepress/shared");
const utils_1 = require("@vuepress/utils");
const CLIENT_FOLDER = (0, shared_1.ensureEndingSlash)(utils_1.path.resolve(__dirname, "../../client"));
const prepareConfigFile = (app, { enableBlog, enableEncrypt }) => {
    let configImport = "";
    let enhance = "";
    let setup = "";
    if (enableBlog) {
        configImport += `
import BloggerInfo from "@theme-hope/module/blog/components/BloggerInfo";
import BlogHome from "@theme-hope/module/blog/components/BlogHome";
import BlogPage from "@theme-hope/module/blog/components/BlogPage";
import { setupBlog } from "@theme-hope/module/blog/composables";
import "${CLIENT_FOLDER}module/blog/styles/layout.scss";
`;
        enhance += `
app.component("BloggerInfo", BloggerInfo);
app.component("BlogHome", BlogHome);
app.component("BlogPage", BlogPage);
`;
        setup += `setupBlog();\n`;
    }
    if (enableEncrypt) {
        configImport += `
import GloablEncrypt from "@theme-hope/module/encrypt/components/GloablEncrypt";
import LocalEncrypt from "@theme-hope/module/encrypt/components/LocalEncrypt";
`;
        enhance += `
app.component("GloablEncrypt", GloablEncrypt);
app.component("LocalEncrypt", LocalEncrypt);
`;
    }
    return app.writeTemp(`theme-hope/config.js`, `import { defineClientConfig } from "@vuepress/client";

import CommonWrapper from "@theme-hope/components/CommonWrapper";
import HomePage from "@theme-hope/components/HomePage";
import NormalPage from "@theme-hope/components/NormalPage";
import Navbar from "@theme-hope/module/navbar/components/Navbar";
import Sidebar from "@theme-hope/module/sidebar/components/Sidebar";

import { useScrollPromise } from "@theme-hope/composables";
import { injectDarkMode, setupDarkMode } from "@theme-hope/module/outlook/composables";
import { setupSidebarItems } from "@theme-hope/module/sidebar/composables";

import "${CLIENT_FOLDER}styles/index.scss";

${configImport}

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    // register to inject styles
    app.component("CommonWrapper", CommonWrapper);
    app.component("HomePage", HomePage);
    app.component("NormalPage", NormalPage);
    app.component("Navbar", Navbar);
    app.component("Sidebar", Sidebar);

${enhance
        .split("\n")
        .map((item) => `    ${item}`)
        .join("\n")}
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
${setup
        .split("\n")
        .map((item) => `    ${item}`)
        .join("\n")}
  },
});`);
};
exports.prepareConfigFile = prepareConfigFile;
//# sourceMappingURL=config.js.map