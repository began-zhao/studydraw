import type { App } from "@vuepress/core";
import type { ThemeStatus } from "../status";
export declare const prepareConfigFile: (app: App, { enableBlog, enableEncrypt }: ThemeStatus) => Promise<string>;
