import { Plugin } from 'vite';

export function cssInjectedByJsPlugin(): Plugin {
  return {
    name: 'vite-plugin-css-injector',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const cssFiles: string[] = [];
      let jsFile: any = null;

      // Find CSS and JS files
      for (const fileName in bundle) {
        const file = bundle[fileName];
        if (file.type === 'asset' && fileName.endsWith('.css')) {
          cssFiles.push(fileName);
        } else if (file.type === 'chunk' && fileName.endsWith('.js')) {
          jsFile = file;
        }
      }

      // Inject CSS into JS
      if (cssFiles.length > 0 && jsFile) {
        const cssContent = cssFiles
          .map((fileName) => {
            const cssFile = bundle[fileName] as any;
            return cssFile.source;
          })
          .join('\n');

        // Create the CSS injection code
        const cssInjectionCode = `
(function() {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(${JSON.stringify(cssContent)}));
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector', e);
  }
})();
`;

        // Prepend CSS injection to JS
        jsFile.code = cssInjectionCode + jsFile.code;

        // Remove CSS files from bundle
        cssFiles.forEach((fileName) => {
          delete bundle[fileName];
        });
      }
    },
  };
}
