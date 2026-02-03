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

        // Create the CSS injection code for Shadow DOM
        // Export CSS content as a variable that can be injected into Shadow DOM
        const cssInjectionCode = `
// CSS content for Shadow DOM injection
var __WIDGET_CSS__ = ${JSON.stringify(cssContent)};

// Function to inject CSS into Shadow DOM - exposed globally for web component
window.injectWidgetStyles = function(shadowRoot) {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(__WIDGET_CSS__));
    shadowRoot.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector: Shadow DOM injection failed', e);
  }
};

// DO NOT inject into document head - this would pollute global scope and override
// CSS variables from other widgets on the page. Shadow DOM provides isolation.
// In TEST mode, Vite dev server handles CSS automatically via HMR.
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
