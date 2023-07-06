import type { NitroApp } from "nitropack";

import { defineNitroPlugin } from "#nitro";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.push("<!-- Something -->");
  });
});
