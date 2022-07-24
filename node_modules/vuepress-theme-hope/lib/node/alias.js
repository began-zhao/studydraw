"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAlias = void 0;
const utils_1 = require("@vuepress/utils");
const getDirAlias = (dir) => utils_1.fs
    .readdirSync(utils_1.path.resolve(__dirname, "../client", dir))
    .filter((file) => file.endsWith(".js") || file.endsWith(".vue") || !file.includes("."))
    .map((file) => [
    `@theme-hope/${dir}/${file.endsWith(".js") ? file.replace(/(?:\/index)?\.js$/, "") : file}`,
    utils_1.path.resolve(__dirname, "../client", dir, file),
]);
const getEntryAlias = (entry) => utils_1.fs.existsSync(utils_1.path.resolve(__dirname, "../client", entry, "index.js"))
    ? [
        `@theme-hope/${entry}`,
        utils_1.path.resolve(__dirname, "../client", entry, "index.js"),
    ]
    : null;
const resolveAlias = (isDebug = false) => {
    // use alias to make all components replaceable
    const alias = Object.fromEntries([
        // define components
        ...getDirAlias("components"),
        // define composables and utils
        ...["composables", "utils"]
            .map(getEntryAlias)
            .filter((item) => item !== null),
        // define modules
        ...utils_1.fs
            .readdirSync(utils_1.path.resolve(__dirname, "../client/module"))
            .map((folder) => `module/${folder}`)
            .map((file) => [
            // define module components
            ...getDirAlias(`${file}/components`),
            // define module composables and utils
            ...["composables", "utils"]
                .map((folder) => `${file}/${folder}`)
                .map(getEntryAlias)
                .filter((item) => item !== null),
        ])
            .flat(),
        ["crypto", utils_1.path.resolve(__dirname, "./empty-chunk")],
    ]);
    if (isDebug)
        console.log("Theme alias config:", alias);
    return alias;
};
exports.resolveAlias = resolveAlias;
//# sourceMappingURL=alias.js.map