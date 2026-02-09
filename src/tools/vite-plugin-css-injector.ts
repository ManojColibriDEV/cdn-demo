import { Plugin } from "vite";

/**
 * Vite plugin to inline CSS into JavaScript bundle
 * Perfect for widget distribution - only need one .js file!
 * Supports both light DOM and shadow DOM injection
 *
 * Follows bloom-elements standard pattern
 */
export function cssInjectedByJsPlugin(): Plugin {
  return {
    name: "vite-plugin-css-injector",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      const cssFiles = Object.keys(bundle).filter((i) => i.endsWith(".css"));
      const jsFiles = Object.keys(bundle).filter(
        (i) => i.endsWith(".js") && !i.includes("polyfill")
      );

      if (cssFiles.length === 0 || jsFiles.length === 0) {
        return;
      }

      // Get CSS content
      const cssCode = cssFiles.map((file) => bundle[file].source).join("\n");

      // Find the main JS file
      const mainJsFile = jsFiles[0];
      const jsBundle = bundle[mainJsFile];

      // Inject CSS that works with both light DOM and shadow DOM
      // For shadow DOM, the widget will use __widgetStyles
      const cssInjectionCode = `
(function(){
  var cssContent=${JSON.stringify(cssCode)};
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();`;

      if (jsBundle.type === "chunk") {
        jsBundle.code = cssInjectionCode + jsBundle.code;
      }

      // Remove CSS files from bundle
      cssFiles.forEach((file) => {
        delete bundle[file];
      });
    },
  };
}
