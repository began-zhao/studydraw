import { sidebar } from "vuepress-theme-hope";
import { basic } from "./basic";
import { code } from "./code";
import { design } from "./design";
import { interview } from "./interview";
import { github } from "./github";
import { linux } from "./linux";
import { note } from "./note";
import { open } from "./openSourceProject";
import { author } from "./author";


export const sidebarConig = sidebar({

  "/note/innenu/": ["", "yaml", "tag-list", "get-started"],

  "/note/": note,

  "/linux/": linux,

  "/design/": design,

  "/interview/": interview,

  "/code/windows/": [
    "",
    "shortcut-key",
    "hidden-file",
    "add-path",
    "cmd",
    "notepad",
  ],

  // "/code/vue/": vue,

  // "/code/node-js/": "structure",

  "/code/github/": github,

  "/code/basic/": basic,

  // "/code/Android/": ["", "intro", "base", "resource"],

  "/code/": code,

  "/about/openSourceProject": open,
  
  "/about/author": author,

  // "/about/": ["", "site"],

  // fallback
  "/": ["", "note/", "code/", "software/", "about/"],
});

// export const enSidebarConfig = sidebar({
//   "/en/note/": [""],

//   "/en/code/": [""],

//   "/en/about/": ["", "site"],

//   // fallback
//   "/en/": ["", "code/", "about/"],
// });
