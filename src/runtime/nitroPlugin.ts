import type { NitroApp } from "nitropack";

// Cannot find module '#nitro' or its corresponding type declarations.ts(2307)
import { defineNitroPlugin } from "#nitro";

export default defineNitroPlugin((nitroApp: NitroApp) => {
  // Argument of type '"render:html"' is not assignable to parameter of type 'HookKeys<NitroRuntimeHooks>'.ts(2345)
  nitroApp.hooks.hook("render:html", (html) => {
    // Property 'head' does not exist on type 'Partial<RenderResponse>'.ts(2339)
    html.head.push("<!-- Something -->");
  });
});
