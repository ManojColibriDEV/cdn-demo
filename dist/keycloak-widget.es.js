
(function() {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode("@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.visible{visibility:visible}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-\\[2000\\]\\!{z-index:2000!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.mx-auto\\!{margin-inline:auto!important}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.my-6\\!{margin-block:calc(var(--spacing)*6)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.table{display:table}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-7xl\\!{max-width:var(--container-7xl)!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#17a2b8\\]{border-color:#17a2b8}.border-\\[\\#cbd5d5\\]{border-color:#cbd5d5}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]{border-color:#d64545}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-red-200{border-color:var(--color-red-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#17a2b8\\]{background-color:#17a2b8}.bg-\\[\\#17a2b8\\]\\!{background-color:#17a2b8!important}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#17a2b8\\]{color:#17a2b8}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-blue-600{color:var(--color-blue-600)}.text-blue-600\\!{color:var(--color-blue-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#138496\\]:hover{background-color:#138496}.hover\\:bg-\\[\\#138496\\]\\!:hover{background-color:#138496!important}.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-blue-700\\!:hover{color:var(--color-blue-700)!important}.hover\\:text-gray-600:hover{color:var(--color-gray-600)}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#17a2b8\\]:enabled{background-color:#17a2b8}.enabled\\:bg-\\[\\#17a2b8\\]\\!:enabled{background-color:#17a2b8!important}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}\n"));
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector', e);
  }
})();
var lr = { exports: {} }, Va = {};
var Nh;
function Dp() {
  if (Nh) return Va;
  Nh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function f(o, r, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), r.key !== void 0 && (m = "" + r.key), "key" in r) {
      d = {};
      for (var p in r)
        p !== "key" && (d[p] = r[p]);
    } else d = r;
    return r = d.ref, {
      $$typeof: u,
      type: o,
      key: m,
      ref: r !== void 0 ? r : null,
      props: d
    };
  }
  return Va.Fragment = c, Va.jsx = f, Va.jsxs = f, Va;
}
var wh;
function Mp() {
  return wh || (wh = 1, lr.exports = Dp()), lr.exports;
}
var F = Mp(), nr = { exports: {} }, P = {}, Hh;
function Np() {
  if (Hh) return P;
  Hh = 1;
  var u = {};
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), Q = Symbol.iterator;
  function z(E) {
    return E === null || typeof E != "object" ? null : (E = Q && E[Q] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var L = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, Y = {};
  function q(E, B, V) {
    this.props = E, this.context = B, this.refs = Y, this.updater = V || L;
  }
  q.prototype.isReactComponent = {}, q.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, q.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function K() {
  }
  K.prototype = q.prototype;
  function I(E, B, V) {
    this.props = E, this.context = B, this.refs = Y, this.updater = V || L;
  }
  var at = I.prototype = new K();
  at.constructor = I, N(at, q.prototype), at.isPureReactComponent = !0;
  var gt = Array.isArray;
  function dt() {
  }
  var tt = { H: null, A: null, T: null, S: null }, _t = Object.prototype.hasOwnProperty;
  function Xt(E, B, V) {
    var J = V.ref;
    return {
      $$typeof: c,
      type: E,
      key: B,
      ref: J !== void 0 ? J : null,
      props: V
    };
  }
  function Ye(E, B) {
    return Xt(E.type, B, E.props);
  }
  function Vt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === c;
  }
  function It(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(V) {
      return B[V];
    });
  }
  var ne = /\/+/g;
  function ae(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? It("" + E.key) : B.toString(36);
  }
  function G(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(dt, dt) : (E.status = "pending", E.then(
          function(B) {
            E.status === "pending" && (E.status = "fulfilled", E.value = B);
          },
          function(B) {
            E.status === "pending" && (E.status = "rejected", E.reason = B);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function j(E, B, V, J, ut) {
    var it = typeof E;
    (it === "undefined" || it === "boolean") && (E = null);
    var vt = !1;
    if (E === null) vt = !0;
    else
      switch (it) {
        case "bigint":
        case "string":
        case "number":
          vt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case c:
            case f:
              vt = !0;
              break;
            case T:
              return vt = E._init, j(
                vt(E._payload),
                B,
                V,
                J,
                ut
              );
          }
      }
    if (vt)
      return ut = ut(E), vt = J === "" ? "." + ae(E, 0) : J, gt(ut) ? (V = "", vt != null && (V = vt.replace(ne, "$&/") + "/"), j(ut, B, V, "", function(Wn) {
        return Wn;
      })) : ut != null && (Vt(ut) && (ut = Ye(
        ut,
        V + (ut.key == null || E && E.key === ut.key ? "" : ("" + ut.key).replace(
          ne,
          "$&/"
        ) + "/") + vt
      )), B.push(ut)), 1;
    vt = 0;
    var ee = J === "" ? "." : J + ":";
    if (gt(E))
      for (var wt = 0; wt < E.length; wt++)
        J = E[wt], it = ee + ae(J, wt), vt += j(
          J,
          B,
          V,
          it,
          ut
        );
    else if (wt = z(E), typeof wt == "function")
      for (E = wt.call(E), wt = 0; !(J = E.next()).done; )
        J = J.value, it = ee + ae(J, wt++), vt += j(
          J,
          B,
          V,
          it,
          ut
        );
    else if (it === "object") {
      if (typeof E.then == "function")
        return j(
          G(E),
          B,
          V,
          J,
          ut
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return vt;
  }
  function X(E, B, V) {
    if (E == null) return E;
    var J = [], ut = 0;
    return j(E, J, "", "", function(it) {
      return B.call(V, it, ut++);
    }), J;
  }
  function ht(E) {
    if (E._status === -1) {
      var B = E._result;
      B = B(), B.then(
        function(V) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = V);
        },
        function(V) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = V);
        }
      ), E._status === -1 && (E._status = 0, E._result = B);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Rt = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, Dt = {
    map: X,
    forEach: function(E, B, V) {
      X(
        E,
        function() {
          B.apply(this, arguments);
        },
        V
      );
    },
    count: function(E) {
      var B = 0;
      return X(E, function() {
        B++;
      }), B;
    },
    toArray: function(E) {
      return X(E, function(B) {
        return B;
      }) || [];
    },
    only: function(E) {
      if (!Vt(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return P.Activity = D, P.Children = Dt, P.Component = q, P.Fragment = o, P.Profiler = d, P.PureComponent = I, P.StrictMode = r, P.Suspense = y, P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tt, P.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return tt.H.useMemoCache(E);
    }
  }, P.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, P.cacheSignal = function() {
    return null;
  }, P.cloneElement = function(E, B, V) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var J = N({}, E.props), ut = E.key;
    if (B != null)
      for (it in B.key !== void 0 && (ut = "" + B.key), B)
        !_t.call(B, it) || it === "key" || it === "__self" || it === "__source" || it === "ref" && B.ref === void 0 || (J[it] = B[it]);
    var it = arguments.length - 2;
    if (it === 1) J.children = V;
    else if (1 < it) {
      for (var vt = Array(it), ee = 0; ee < it; ee++)
        vt[ee] = arguments[ee + 2];
      J.children = vt;
    }
    return Xt(E.type, ut, J);
  }, P.createContext = function(E) {
    return E = {
      $$typeof: p,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: m,
      _context: E
    }, E;
  }, P.createElement = function(E, B, V) {
    var J, ut = {}, it = null;
    if (B != null)
      for (J in B.key !== void 0 && (it = "" + B.key), B)
        _t.call(B, J) && J !== "key" && J !== "__self" && J !== "__source" && (ut[J] = B[J]);
    var vt = arguments.length - 2;
    if (vt === 1) ut.children = V;
    else if (1 < vt) {
      for (var ee = Array(vt), wt = 0; wt < vt; wt++)
        ee[wt] = arguments[wt + 2];
      ut.children = ee;
    }
    if (E && E.defaultProps)
      for (J in vt = E.defaultProps, vt)
        ut[J] === void 0 && (ut[J] = vt[J]);
    return Xt(E, it, ut);
  }, P.createRef = function() {
    return { current: null };
  }, P.forwardRef = function(E) {
    return { $$typeof: g, render: E };
  }, P.isValidElement = Vt, P.lazy = function(E) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: E },
      _init: ht
    };
  }, P.memo = function(E, B) {
    return {
      $$typeof: b,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, P.startTransition = function(E) {
    var B = tt.T, V = {};
    tt.T = V;
    try {
      var J = E(), ut = tt.S;
      ut !== null && ut(V, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(dt, Rt);
    } catch (it) {
      Rt(it);
    } finally {
      B !== null && V.types !== null && (B.types = V.types), tt.T = B;
    }
  }, P.unstable_useCacheRefresh = function() {
    return tt.H.useCacheRefresh();
  }, P.use = function(E) {
    return tt.H.use(E);
  }, P.useActionState = function(E, B, V) {
    return tt.H.useActionState(E, B, V);
  }, P.useCallback = function(E, B) {
    return tt.H.useCallback(E, B);
  }, P.useContext = function(E) {
    return tt.H.useContext(E);
  }, P.useDebugValue = function() {
  }, P.useDeferredValue = function(E, B) {
    return tt.H.useDeferredValue(E, B);
  }, P.useEffect = function(E, B) {
    return tt.H.useEffect(E, B);
  }, P.useEffectEvent = function(E) {
    return tt.H.useEffectEvent(E);
  }, P.useId = function() {
    return tt.H.useId();
  }, P.useImperativeHandle = function(E, B, V) {
    return tt.H.useImperativeHandle(E, B, V);
  }, P.useInsertionEffect = function(E, B) {
    return tt.H.useInsertionEffect(E, B);
  }, P.useLayoutEffect = function(E, B) {
    return tt.H.useLayoutEffect(E, B);
  }, P.useMemo = function(E, B) {
    return tt.H.useMemo(E, B);
  }, P.useOptimistic = function(E, B) {
    return tt.H.useOptimistic(E, B);
  }, P.useReducer = function(E, B, V) {
    return tt.H.useReducer(E, B, V);
  }, P.useRef = function(E) {
    return tt.H.useRef(E);
  }, P.useState = function(E) {
    return tt.H.useState(E);
  }, P.useSyncExternalStore = function(E, B, V) {
    return tt.H.useSyncExternalStore(
      E,
      B,
      V
    );
  }, P.useTransition = function() {
    return tt.H.useTransition();
  }, P.version = "19.2.3", P;
}
var Bh;
function Er() {
  return Bh || (Bh = 1, nr.exports = Np()), nr.exports;
}
var U = Er();
var Lh = "popstate";
function wp(u = {}) {
  function c(o, r) {
    let { pathname: d, search: m, hash: p } = o.location;
    return mr(
      "",
      { pathname: d, search: m, hash: p },
      // state defaults to `null` because `window.history.state` does
      r.state && r.state.usr || null,
      r.state && r.state.key || "default"
    );
  }
  function f(o, r) {
    return typeof r == "string" ? r : $a(r);
  }
  return Bp(
    c,
    f,
    null,
    u
  );
}
function Ut(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function je(u, c) {
  if (!u) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {
    }
  }
}
function Hp() {
  return Math.random().toString(36).substring(2, 10);
}
function jh(u, c) {
  return {
    usr: u.state,
    key: u.key,
    idx: c
  };
}
function mr(u, c, f = null, o) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof c == "string" ? Jn(c) : c,
    state: f,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: c && c.key || o || Hp()
  };
}
function $a({
  pathname: u = "/",
  search: c = "",
  hash: f = ""
}) {
  return c && c !== "?" && (u += c.charAt(0) === "?" ? c : "?" + c), f && f !== "#" && (u += f.charAt(0) === "#" ? f : "#" + f), u;
}
function Jn(u) {
  let c = {};
  if (u) {
    let f = u.indexOf("#");
    f >= 0 && (c.hash = u.substring(f), u = u.substring(0, f));
    let o = u.indexOf("?");
    o >= 0 && (c.search = u.substring(o), u = u.substring(0, o)), u && (c.pathname = u);
  }
  return c;
}
function Bp(u, c, f, o = {}) {
  let { window: r = document.defaultView, v5Compat: d = !1 } = o, m = r.history, p = "POP", g = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function T() {
    p = "POP";
    let N = b(), Y = N == null ? null : N - y;
    y = N, g && g({ action: p, location: L.location, delta: Y });
  }
  function D(N, Y) {
    p = "PUSH";
    let q = mr(L.location, N, Y);
    y = b() + 1;
    let K = jh(q, y), I = L.createHref(q);
    try {
      m.pushState(K, "", I);
    } catch (at) {
      if (at instanceof DOMException && at.name === "DataCloneError")
        throw at;
      r.location.assign(I);
    }
    d && g && g({ action: p, location: L.location, delta: 1 });
  }
  function Q(N, Y) {
    p = "REPLACE";
    let q = mr(L.location, N, Y);
    y = b();
    let K = jh(q, y), I = L.createHref(q);
    m.replaceState(K, "", I), d && g && g({ action: p, location: L.location, delta: 0 });
  }
  function z(N) {
    return Lp(N);
  }
  let L = {
    get action() {
      return p;
    },
    get location() {
      return u(r, m);
    },
    listen(N) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return r.addEventListener(Lh, T), g = N, () => {
        r.removeEventListener(Lh, T), g = null;
      };
    },
    createHref(N) {
      return c(r, N);
    },
    createURL: z,
    encodeLocation(N) {
      let Y = z(N);
      return {
        pathname: Y.pathname,
        search: Y.search,
        hash: Y.hash
      };
    },
    push: D,
    replace: Q,
    go(N) {
      return m.go(N);
    }
  };
  return L;
}
function Lp(u, c = !1) {
  let f = "http://localhost";
  typeof window < "u" && (f = window.location.origin !== "null" ? window.location.origin : window.location.href), Ut(f, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : $a(u);
  return o = o.replace(/ $/, "%20"), !c && o.startsWith("//") && (o = f + o), new URL(o, f);
}
function ym(u, c, f = "/") {
  return jp(u, c, f, !1);
}
function jp(u, c, f, o) {
  let r = typeof c == "string" ? Jn(c) : c, d = sl(r.pathname || "/", f);
  if (d == null)
    return null;
  let m = pm(u);
  qp(m);
  let p = null;
  for (let g = 0; p == null && g < m.length; ++g) {
    let y = Fp(d);
    p = kp(
      m[g],
      y,
      o
    );
  }
  return p;
}
function pm(u, c = [], f = [], o = "", r = !1) {
  let d = (m, p, g = r, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: p,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(o) && g)
        return;
      Ut(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(o.length);
    }
    let T = ol([o, b.relativePath]), D = f.concat(b);
    m.children && m.children.length > 0 && (Ut(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), pm(
      m.children,
      c,
      D,
      T,
      g
    )), !(m.path == null && !m.index) && c.push({
      path: T,
      score: Kp(T, m.index),
      routesMeta: D
    });
  };
  return u.forEach((m, p) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, p);
    else
      for (let g of vm(m.path))
        d(m, p, !0, g);
  }), c;
}
function vm(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [f, ...o] = c, r = f.endsWith("?"), d = f.replace(/\?$/, "");
  if (o.length === 0)
    return r ? [d, ""] : [d];
  let m = vm(o.join("/")), p = [];
  return p.push(
    ...m.map(
      (g) => g === "" ? d : [d, g].join("/")
    )
  ), r && p.push(...m), p.map(
    (g) => u.startsWith("/") && g === "" ? "/" : g
  );
}
function qp(u) {
  u.sort(
    (c, f) => c.score !== f.score ? f.score - c.score : Jp(
      c.routesMeta.map((o) => o.childrenIndex),
      f.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Yp = /^:[\w-]+$/, Gp = 3, Xp = 2, Qp = 1, Vp = 10, Zp = -2, qh = (u) => u === "*";
function Kp(u, c) {
  let f = u.split("/"), o = f.length;
  return f.some(qh) && (o += Zp), c && (o += Xp), f.filter((r) => !qh(r)).reduce(
    (r, d) => r + (Yp.test(d) ? Gp : d === "" ? Qp : Vp),
    o
  );
}
function Jp(u, c) {
  return u.length === c.length && u.slice(0, -1).every((o, r) => o === c[r]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    u[u.length - 1] - c[c.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function kp(u, c, f = !1) {
  let { routesMeta: o } = u, r = {}, d = "/", m = [];
  for (let p = 0; p < o.length; ++p) {
    let g = o[p], y = p === o.length - 1, b = d === "/" ? c : c.slice(d.length) || "/", T = Ci(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: y },
      b
    ), D = g.route;
    if (!T && y && f && !o[o.length - 1].route.index && (T = Ci(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      b
    )), !T)
      return null;
    Object.assign(r, T.params), m.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: ol([d, T.pathname]),
      pathnameBase: tv(
        ol([d, T.pathnameBase])
      ),
      route: D
    }), T.pathnameBase !== "/" && (d = ol([d, T.pathnameBase]));
  }
  return m;
}
function Ci(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [f, o] = $p(
    u.path,
    u.caseSensitive,
    u.end
  ), r = c.match(f);
  if (!r) return null;
  let d = r[0], m = d.replace(/(.)\/+$/, "$1"), p = r.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: b, isOptional: T }, D) => {
        if (b === "*") {
          let z = p[D] || "";
          m = d.slice(0, d.length - z.length).replace(/(.)\/+$/, "$1");
        }
        const Q = p[D];
        return T && !Q ? y[b] = void 0 : y[b] = (Q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: u
  };
}
function $p(u, c = !1, f = !0) {
  je(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let o = [], r = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, p, g) => (o.push({ paramName: p, isOptional: g != null }), g ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (o.push({ paramName: "*" }), r += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? r += "\\/*$" : u !== "" && u !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, c ? void 0 : "i"), o];
}
function Fp(u) {
  try {
    return u.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return je(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
    ), u;
  }
}
function sl(u, c) {
  if (c === "/") return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase()))
    return null;
  let f = c.endsWith("/") ? c.length - 1 : c.length, o = u.charAt(f);
  return o && o !== "/" ? null : u.slice(f) || "/";
}
var gm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Wp = (u) => gm.test(u);
function Ip(u, c = "/") {
  let {
    pathname: f,
    search: o = "",
    hash: r = ""
  } = typeof u == "string" ? Jn(u) : u, d;
  if (f)
    if (Wp(f))
      d = f;
    else {
      if (f.includes("//")) {
        let m = f;
        f = f.replace(/\/\/+/g, "/"), je(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${f}`
        );
      }
      f.startsWith("/") ? d = Yh(f.substring(1), "/") : d = Yh(f, c);
    }
  else
    d = c;
  return {
    pathname: d,
    search: ev(o),
    hash: lv(r)
  };
}
function Yh(u, c) {
  let f = c.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((r) => {
    r === ".." ? f.length > 1 && f.pop() : r !== "." && f.push(r);
  }), f.length > 1 ? f.join("/") : "/";
}
function ar(u, c, f, o) {
  return `Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${f}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Pp(u) {
  return u.filter(
    (c, f) => f === 0 || c.route.path && c.route.path.length > 0
  );
}
function bm(u) {
  let c = Pp(u);
  return c.map(
    (f, o) => o === c.length - 1 ? f.pathname : f.pathnameBase
  );
}
function Sm(u, c, f, o = !1) {
  let r;
  typeof u == "string" ? r = Jn(u) : (r = { ...u }, Ut(
    !r.pathname || !r.pathname.includes("?"),
    ar("?", "pathname", "search", r)
  ), Ut(
    !r.pathname || !r.pathname.includes("#"),
    ar("#", "pathname", "hash", r)
  ), Ut(
    !r.search || !r.search.includes("#"),
    ar("#", "search", "hash", r)
  ));
  let d = u === "" || r.pathname === "", m = d ? "/" : r.pathname, p;
  if (m == null)
    p = f;
  else {
    let T = c.length - 1;
    if (!o && m.startsWith("..")) {
      let D = m.split("/");
      for (; D[0] === ".."; )
        D.shift(), T -= 1;
      r.pathname = D.join("/");
    }
    p = T >= 0 ? c[T] : "/";
  }
  let g = Ip(r, p), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && f.endsWith("/");
  return !g.pathname.endsWith("/") && (y || b) && (g.pathname += "/"), g;
}
var ol = (u) => u.join("/").replace(/\/\/+/g, "/"), tv = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), ev = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, lv = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, nv = class {
  constructor(u, c, f, o = !1) {
    this.status = u, this.statusText = c || "", this.internal = o, f instanceof Error ? (this.data = f.toString(), this.error = f) : this.data = f;
  }
};
function av(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function uv(u) {
  return u.map((c) => c.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Em = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Tm(u, c) {
  let f = u;
  if (typeof f != "string" || !gm.test(f))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: f
    };
  let o = f, r = !1;
  if (Em)
    try {
      let d = new URL(window.location.href), m = f.startsWith("//") ? new URL(d.protocol + f) : new URL(f), p = sl(m.pathname, c);
      m.origin === d.origin && p != null ? f = p + m.search + m.hash : r = !0;
    } catch {
      je(
        !1,
        `<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: r,
    to: f
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Am = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Am
);
var iv = [
  "GET",
  ...Am
];
new Set(iv);
var kn = U.createContext(null);
kn.displayName = "DataRouter";
var Ui = U.createContext(null);
Ui.displayName = "DataRouterState";
var cv = U.createContext(!1), Rm = U.createContext({
  isTransitioning: !1
});
Rm.displayName = "ViewTransition";
var fv = U.createContext(
  /* @__PURE__ */ new Map()
);
fv.displayName = "Fetchers";
var rv = U.createContext(null);
rv.displayName = "Await";
var we = U.createContext(
  null
);
we.displayName = "Navigation";
var Fa = U.createContext(
  null
);
Fa.displayName = "Location";
var dl = U.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
dl.displayName = "Route";
var Tr = U.createContext(null);
Tr.displayName = "RouteError";
var Om = "REACT_ROUTER_ERROR", ov = "REDIRECT", sv = "ROUTE_ERROR_RESPONSE";
function dv(u) {
  if (u.startsWith(`${Om}:${ov}:{`))
    try {
      let c = JSON.parse(u.slice(28));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.location == "string" && typeof c.reloadDocument == "boolean" && typeof c.replace == "boolean")
        return c;
    } catch {
    }
}
function hv(u) {
  if (u.startsWith(
    `${Om}:${sv}:{`
  ))
    try {
      let c = JSON.parse(u.slice(40));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string")
        return new nv(
          c.status,
          c.statusText,
          c.data
        );
    } catch {
    }
}
function mv(u, { relative: c } = {}) {
  Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: o } = U.useContext(we), { hash: r, pathname: d, search: m } = Ia(u, { relative: c }), p = d;
  return f !== "/" && (p = d === "/" ? f : ol([f, d])), o.createHref({ pathname: p, search: m, hash: r });
}
function Wa() {
  return U.useContext(Fa) != null;
}
function cn() {
  return Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), U.useContext(Fa).location;
}
var _m = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function zm(u) {
  U.useContext(we).static || U.useLayoutEffect(u);
}
function yv() {
  let { isDataRoute: u } = U.useContext(dl);
  return u ? Cv() : pv();
}
function pv() {
  Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = U.useContext(kn), { basename: c, navigator: f } = U.useContext(we), { matches: o } = U.useContext(dl), { pathname: r } = cn(), d = JSON.stringify(bm(o)), m = U.useRef(!1);
  return zm(() => {
    m.current = !0;
  }), U.useCallback(
    (g, y = {}) => {
      if (je(m.current, _m), !m.current) return;
      if (typeof g == "number") {
        f.go(g);
        return;
      }
      let b = Sm(
        g,
        JSON.parse(d),
        r,
        y.relative === "path"
      );
      u == null && c !== "/" && (b.pathname = b.pathname === "/" ? c : ol([c, b.pathname])), (y.replace ? f.replace : f.push)(
        b,
        y.state,
        y
      );
    },
    [
      c,
      f,
      d,
      r,
      u
    ]
  );
}
U.createContext(null);
function Ia(u, { relative: c } = {}) {
  let { matches: f } = U.useContext(dl), { pathname: o } = cn(), r = JSON.stringify(bm(f));
  return U.useMemo(
    () => Sm(
      u,
      JSON.parse(r),
      o,
      c === "path"
    ),
    [u, r, o, c]
  );
}
function vv(u, c) {
  return Cm(u, c);
}
function Cm(u, c, f, o, r) {
  Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = U.useContext(we), { matches: m } = U.useContext(dl), p = m[m.length - 1], g = p ? p.params : {}, y = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", T = p && p.route;
  {
    let q = T && T.path || "";
    Um(
      y,
      !T || q.endsWith("*") || q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === "/" ? "*" : `${q}/*`}">.`
    );
  }
  let D = cn(), Q;
  if (c) {
    let q = typeof c == "string" ? Jn(c) : c;
    Ut(
      b === "/" || q.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${q.pathname}" was given in the \`location\` prop.`
    ), Q = q;
  } else
    Q = D;
  let z = Q.pathname || "/", L = z;
  if (b !== "/") {
    let q = b.replace(/^\//, "").split("/");
    L = "/" + z.replace(/^\//, "").split("/").slice(q.length).join("/");
  }
  let N = ym(u, { pathname: L });
  je(
    T || N != null,
    `No routes matched location "${Q.pathname}${Q.search}${Q.hash}" `
  ), je(
    N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${Q.pathname}${Q.search}${Q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Y = Tv(
    N && N.map(
      (q) => Object.assign({}, q, {
        params: Object.assign({}, g, q.params),
        pathname: ol([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : q.pathname
        ]),
        pathnameBase: q.pathnameBase === "/" ? b : ol([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            q.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : q.pathnameBase
        ])
      })
    ),
    m,
    f,
    o,
    r
  );
  return c && Y ? /* @__PURE__ */ U.createElement(
    Fa.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...Q
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    Y
  ) : Y;
}
function gv() {
  let u = zv(), c = av(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), f = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", r = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), m = /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ U.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ U.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ U.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ U.createElement(U.Fragment, null, /* @__PURE__ */ U.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ U.createElement("h3", { style: { fontStyle: "italic" } }, c), f ? /* @__PURE__ */ U.createElement("pre", { style: r }, f) : null, m);
}
var bv = /* @__PURE__ */ U.createElement(gv, null), xm = class extends U.Component {
  constructor(u) {
    super(u), this.state = {
      location: u.location,
      revalidation: u.revalidation,
      error: u.error
    };
  }
  static getDerivedStateFromError(u) {
    return { error: u };
  }
  static getDerivedStateFromProps(u, c) {
    return c.location !== u.location || c.revalidation !== "idle" && u.revalidation === "idle" ? {
      error: u.error,
      location: u.location,
      revalidation: u.revalidation
    } : {
      error: u.error !== void 0 ? u.error : c.error,
      location: c.location,
      revalidation: u.revalidation || c.revalidation
    };
  }
  componentDidCatch(u, c) {
    this.props.onError ? this.props.onError(u, c) : console.error(
      "React Router caught the following error during render",
      u
    );
  }
  render() {
    let u = this.state.error;
    if (this.context && typeof u == "object" && u && "digest" in u && typeof u.digest == "string") {
      const f = hv(u.digest);
      f && (u = f);
    }
    let c = u !== void 0 ? /* @__PURE__ */ U.createElement(dl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ U.createElement(
      Tr.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ U.createElement(Sv, { error: u }, c) : c;
  }
};
xm.contextType = cv;
var ur = /* @__PURE__ */ new WeakMap();
function Sv({
  children: u,
  error: c
}) {
  let { basename: f } = U.useContext(we);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let o = dv(c.digest);
    if (o) {
      let r = ur.get(c);
      if (r) throw r;
      let d = Tm(o.location, f);
      if (Em && !ur.get(c))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw ur.set(c, m), m;
        }
      return /* @__PURE__ */ U.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${d.absoluteURL || d.to}`
        }
      );
    }
  }
  return u;
}
function Ev({ routeContext: u, match: c, children: f }) {
  let o = U.useContext(kn);
  return o && o.static && o.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = c.route.id), /* @__PURE__ */ U.createElement(dl.Provider, { value: u }, f);
}
function Tv(u, c = [], f = null, o = null, r = null) {
  if (u == null) {
    if (!f)
      return null;
    if (f.errors)
      u = f.matches;
    else if (c.length === 0 && !f.initialized && f.matches.length > 0)
      u = f.matches;
    else
      return null;
  }
  let d = u, m = f?.errors;
  if (m != null) {
    let b = d.findIndex(
      (T) => T.route.id && m?.[T.route.id] !== void 0
    );
    Ut(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, b + 1)
    );
  }
  let p = !1, g = -1;
  if (f)
    for (let b = 0; b < d.length; b++) {
      let T = d[b];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (g = b), T.route.id) {
        let { loaderData: D, errors: Q } = f, z = T.route.loader && !D.hasOwnProperty(T.route.id) && (!Q || Q[T.route.id] === void 0);
        if (T.route.lazy || z) {
          p = !0, g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = f && o ? (b, T) => {
    o(b, {
      location: f.location,
      params: f.matches?.[0]?.params ?? {},
      unstable_pattern: uv(f.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (b, T, D) => {
      let Q, z = !1, L = null, N = null;
      f && (Q = m && T.route.id ? m[T.route.id] : void 0, L = T.route.errorElement || bv, p && (g < 0 && D === 0 ? (Um(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), z = !0, N = null) : g === D && (z = !0, N = T.route.hydrateFallbackElement || null)));
      let Y = c.concat(d.slice(0, D + 1)), q = () => {
        let K;
        return Q ? K = L : z ? K = N : T.route.Component ? K = /* @__PURE__ */ U.createElement(T.route.Component, null) : T.route.element ? K = T.route.element : K = b, /* @__PURE__ */ U.createElement(
          Ev,
          {
            match: T,
            routeContext: {
              outlet: b,
              matches: Y,
              isDataRoute: f != null
            },
            children: K
          }
        );
      };
      return f && (T.route.ErrorBoundary || T.route.errorElement || D === 0) ? /* @__PURE__ */ U.createElement(
        xm,
        {
          location: f.location,
          revalidation: f.revalidation,
          component: L,
          error: Q,
          children: q(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
          onError: y
        }
      ) : q();
    },
    null
  );
}
function Ar(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Av(u) {
  let c = U.useContext(kn);
  return Ut(c, Ar(u)), c;
}
function Rv(u) {
  let c = U.useContext(Ui);
  return Ut(c, Ar(u)), c;
}
function Ov(u) {
  let c = U.useContext(dl);
  return Ut(c, Ar(u)), c;
}
function Rr(u) {
  let c = Ov(u), f = c.matches[c.matches.length - 1];
  return Ut(
    f.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), f.route.id;
}
function _v() {
  return Rr(
    "useRouteId"
    /* UseRouteId */
  );
}
function zv() {
  let u = U.useContext(Tr), c = Rv(
    "useRouteError"
    /* UseRouteError */
  ), f = Rr(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : c.errors?.[f];
}
function Cv() {
  let { router: u } = Av(
    "useNavigate"
    /* UseNavigateStable */
  ), c = Rr(
    "useNavigate"
    /* UseNavigateStable */
  ), f = U.useRef(!1);
  return zm(() => {
    f.current = !0;
  }), U.useCallback(
    async (r, d = {}) => {
      je(f.current, _m), f.current && (typeof r == "number" ? await u.navigate(r) : await u.navigate(r, { fromRouteId: c, ...d }));
    },
    [u, c]
  );
}
var Gh = {};
function Um(u, c, f) {
  !c && !Gh[u] && (Gh[u] = !0, je(!1, f));
}
U.memo(xv);
function xv({
  routes: u,
  future: c,
  state: f,
  onError: o
}) {
  return Cm(u, void 0, f, o, c);
}
function Dm(u) {
  Ut(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Uv({
  basename: u = "/",
  children: c = null,
  location: f,
  navigationType: o = "POP",
  navigator: r,
  static: d = !1,
  unstable_useTransitions: m
}) {
  Ut(
    !Wa(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = u.replace(/^\/*/, "/"), g = U.useMemo(
    () => ({
      basename: p,
      navigator: r,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [p, r, d, m]
  );
  typeof f == "string" && (f = Jn(f));
  let {
    pathname: y = "/",
    search: b = "",
    hash: T = "",
    state: D = null,
    key: Q = "default"
  } = f, z = U.useMemo(() => {
    let L = sl(y, p);
    return L == null ? null : {
      location: {
        pathname: L,
        search: b,
        hash: T,
        state: D,
        key: Q
      },
      navigationType: o
    };
  }, [p, y, b, T, D, Q, o]);
  return je(
    z != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${b}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), z == null ? null : /* @__PURE__ */ U.createElement(we.Provider, { value: g }, /* @__PURE__ */ U.createElement(Fa.Provider, { children: c, value: z }));
}
function Dv({
  children: u,
  location: c
}) {
  return vv(yr(u), c);
}
function yr(u, c = []) {
  let f = [];
  return U.Children.forEach(u, (o, r) => {
    if (!U.isValidElement(o))
      return;
    let d = [...c, r];
    if (o.type === U.Fragment) {
      f.push.apply(
        f,
        yr(o.props.children, d)
      );
      return;
    }
    Ut(
      o.type === Dm,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ut(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let m = {
      id: o.props.id || d.join("-"),
      caseSensitive: o.props.caseSensitive,
      element: o.props.element,
      Component: o.props.Component,
      index: o.props.index,
      path: o.props.path,
      middleware: o.props.middleware,
      loader: o.props.loader,
      action: o.props.action,
      hydrateFallbackElement: o.props.hydrateFallbackElement,
      HydrateFallback: o.props.HydrateFallback,
      errorElement: o.props.errorElement,
      ErrorBoundary: o.props.ErrorBoundary,
      hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
      shouldRevalidate: o.props.shouldRevalidate,
      handle: o.props.handle,
      lazy: o.props.lazy
    };
    o.props.children && (m.children = yr(
      o.props.children,
      d
    )), f.push(m);
  }), f;
}
var Ai = "get", Ri = "application/x-www-form-urlencoded";
function Di(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Mv(u) {
  return Di(u) && u.tagName.toLowerCase() === "button";
}
function Nv(u) {
  return Di(u) && u.tagName.toLowerCase() === "form";
}
function wv(u) {
  return Di(u) && u.tagName.toLowerCase() === "input";
}
function Hv(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Bv(u, c) {
  return u.button === 0 && // Ignore everything but left clicks
  (!c || c === "_self") && // Let browser handle "target=_blank" etc.
  !Hv(u);
}
var Ei = null;
function Lv() {
  if (Ei === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ei = !1;
    } catch {
      Ei = !0;
    }
  return Ei;
}
var jv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ir(u) {
  return u != null && !jv.has(u) ? (je(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ri}"`
  ), null) : u;
}
function qv(u, c) {
  let f, o, r, d, m;
  if (Nv(u)) {
    let p = u.getAttribute("action");
    o = p ? sl(p, c) : null, f = u.getAttribute("method") || Ai, r = ir(u.getAttribute("enctype")) || Ri, d = new FormData(u);
  } else if (Mv(u) || wv(u) && (u.type === "submit" || u.type === "image")) {
    let p = u.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = u.getAttribute("formaction") || p.getAttribute("action");
    if (o = g ? sl(g, c) : null, f = u.getAttribute("formmethod") || p.getAttribute("method") || Ai, r = ir(u.getAttribute("formenctype")) || ir(p.getAttribute("enctype")) || Ri, d = new FormData(p, u), !Lv()) {
      let { name: y, type: b, value: T } = u;
      if (b === "image") {
        let D = y ? `${y}.` : "";
        d.append(`${D}x`, "0"), d.append(`${D}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (Di(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    f = Ai, o = null, r = Ri, m = u;
  }
  return d && r === "text/plain" && (m = d, d = void 0), { action: o, method: f.toLowerCase(), encType: r, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Or(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function Yv(u, c, f) {
  let o = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return o.pathname === "/" ? o.pathname = `_root.${f}` : c && sl(o.pathname, c) === "/" ? o.pathname = `${c.replace(/\/$/, "")}/_root.${f}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${f}`, o;
}
async function Gv(u, c) {
  if (u.id in c)
    return c[u.id];
  try {
    let f = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      u.module
    );
    return c[u.id] = f, f;
  } catch (f) {
    return console.error(
      `Error loading route module \`${u.module}\`, reloading page...`
    ), console.error(f), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Xv(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Qv(u, c, f) {
  let o = await Promise.all(
    u.map(async (r) => {
      let d = c.routes[r.route.id];
      if (d) {
        let m = await Gv(d, f);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return Jv(
    o.flat(1).filter(Xv).filter((r) => r.rel === "stylesheet" || r.rel === "preload").map(
      (r) => r.rel === "stylesheet" ? { ...r, rel: "prefetch", as: "style" } : { ...r, rel: "prefetch" }
    )
  );
}
function Xh(u, c, f, o, r, d) {
  let m = (g, y) => f[y] ? g.route.id !== f[y].route.id : !0, p = (g, y) => (
    // param change, /users/123 -> /users/456
    f[y].pathname !== g.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    f[y].route.path?.endsWith("*") && f[y].params["*"] !== g.params["*"]
  );
  return d === "assets" ? c.filter(
    (g, y) => m(g, y) || p(g, y)
  ) : d === "data" ? c.filter((g, y) => {
    let b = o.routes[g.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (m(g, y) || p(g, y))
      return !0;
    if (g.route.shouldRevalidate) {
      let T = g.route.shouldRevalidate({
        currentUrl: new URL(
          r.pathname + r.search + r.hash,
          window.origin
        ),
        currentParams: f[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean")
        return T;
    }
    return !0;
  }) : [];
}
function Vv(u, c, { includeHydrateFallback: f } = {}) {
  return Zv(
    u.map((o) => {
      let r = c.routes[o.route.id];
      if (!r) return [];
      let d = [r.module];
      return r.clientActionModule && (d = d.concat(r.clientActionModule)), r.clientLoaderModule && (d = d.concat(r.clientLoaderModule)), f && r.hydrateFallbackModule && (d = d.concat(r.hydrateFallbackModule)), r.imports && (d = d.concat(r.imports)), d;
    }).flat(1)
  );
}
function Zv(u) {
  return [...new Set(u)];
}
function Kv(u) {
  let c = {}, f = Object.keys(u).sort();
  for (let o of f)
    c[o] = u[o];
  return c;
}
function Jv(u, c) {
  let f = /* @__PURE__ */ new Set();
  return new Set(c), u.reduce((o, r) => {
    let d = JSON.stringify(Kv(r));
    return f.has(d) || (f.add(d), o.push({ key: d, link: r })), o;
  }, []);
}
function Mm() {
  let u = U.useContext(kn);
  return Or(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function kv() {
  let u = U.useContext(Ui);
  return Or(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var _r = U.createContext(void 0);
_r.displayName = "FrameworkContext";
function Nm() {
  let u = U.useContext(_r);
  return Or(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function $v(u, c) {
  let f = U.useContext(_r), [o, r] = U.useState(!1), [d, m] = U.useState(!1), { onFocus: p, onBlur: g, onMouseEnter: y, onMouseLeave: b, onTouchStart: T } = c, D = U.useRef(null);
  U.useEffect(() => {
    if (u === "render" && m(!0), u === "viewport") {
      let L = (Y) => {
        Y.forEach((q) => {
          m(q.isIntersecting);
        });
      }, N = new IntersectionObserver(L, { threshold: 0.5 });
      return D.current && N.observe(D.current), () => {
        N.disconnect();
      };
    }
  }, [u]), U.useEffect(() => {
    if (o) {
      let L = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [o]);
  let Q = () => {
    r(!0);
  }, z = () => {
    r(!1), m(!1);
  };
  return f ? u !== "intent" ? [d, D, {}] : [
    d,
    D,
    {
      onFocus: Za(p, Q),
      onBlur: Za(g, z),
      onMouseEnter: Za(y, Q),
      onMouseLeave: Za(b, z),
      onTouchStart: Za(T, Q)
    }
  ] : [!1, D, {}];
}
function Za(u, c) {
  return (f) => {
    u && u(f), f.defaultPrevented || c(f);
  };
}
function Fv({ page: u, ...c }) {
  let { router: f } = Mm(), o = U.useMemo(
    () => ym(f.routes, u, f.basename),
    [f.routes, u, f.basename]
  );
  return o ? /* @__PURE__ */ U.createElement(Iv, { page: u, matches: o, ...c }) : null;
}
function Wv(u) {
  let { manifest: c, routeModules: f } = Nm(), [o, r] = U.useState([]);
  return U.useEffect(() => {
    let d = !1;
    return Qv(u, c, f).then(
      (m) => {
        d || r(m);
      }
    ), () => {
      d = !0;
    };
  }, [u, c, f]), o;
}
function Iv({
  page: u,
  matches: c,
  ...f
}) {
  let o = cn(), { manifest: r, routeModules: d } = Nm(), { basename: m } = Mm(), { loaderData: p, matches: g } = kv(), y = U.useMemo(
    () => Xh(
      u,
      c,
      g,
      r,
      o,
      "data"
    ),
    [u, c, g, r, o]
  ), b = U.useMemo(
    () => Xh(
      u,
      c,
      g,
      r,
      o,
      "assets"
    ),
    [u, c, g, r, o]
  ), T = U.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let z = /* @__PURE__ */ new Set(), L = !1;
    if (c.forEach((Y) => {
      let q = r.routes[Y.route.id];
      !q || !q.hasLoader || (!y.some((K) => K.route.id === Y.route.id) && Y.route.id in p && d[Y.route.id]?.shouldRevalidate || q.hasClientLoader ? L = !0 : z.add(Y.route.id));
    }), z.size === 0)
      return [];
    let N = Yv(u, m, "data");
    return L && z.size > 0 && N.searchParams.set(
      "_routes",
      c.filter((Y) => z.has(Y.route.id)).map((Y) => Y.route.id).join(",")
    ), [N.pathname + N.search];
  }, [
    m,
    p,
    o,
    r,
    y,
    c,
    u,
    d
  ]), D = U.useMemo(
    () => Vv(b, r),
    [b, r]
  ), Q = Wv(b);
  return /* @__PURE__ */ U.createElement(U.Fragment, null, T.map((z) => /* @__PURE__ */ U.createElement("link", { key: z, rel: "prefetch", as: "fetch", href: z, ...f })), D.map((z) => /* @__PURE__ */ U.createElement("link", { key: z, rel: "modulepreload", href: z, ...f })), Q.map(({ key: z, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ U.createElement("link", { key: z, nonce: f.nonce, ...L })
  )));
}
function Pv(...u) {
  return (c) => {
    u.forEach((f) => {
      typeof f == "function" ? f(c) : f != null && (f.current = c);
    });
  };
}
var tg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  tg && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function eg({
  basename: u,
  children: c,
  unstable_useTransitions: f,
  window: o
}) {
  let r = U.useRef();
  r.current == null && (r.current = wp({ window: o, v5Compat: !0 }));
  let d = r.current, [m, p] = U.useState({
    action: d.action,
    location: d.location
  }), g = U.useCallback(
    (y) => {
      f === !1 ? p(y) : U.startTransition(() => p(y));
    },
    [f]
  );
  return U.useLayoutEffect(() => d.listen(g), [d, g]), /* @__PURE__ */ U.createElement(
    Uv,
    {
      basename: u,
      children: c,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: f
    }
  );
}
var wm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Hm = U.forwardRef(
  function({
    onClick: c,
    discover: f = "render",
    prefetch: o = "none",
    relative: r,
    reloadDocument: d,
    replace: m,
    state: p,
    target: g,
    to: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: D,
    ...Q
  }, z) {
    let { basename: L, unstable_useTransitions: N } = U.useContext(we), Y = typeof y == "string" && wm.test(y), q = Tm(y, L);
    y = q.to;
    let K = mv(y, { relative: r }), [I, at, gt] = $v(
      o,
      Q
    ), dt = ug(y, {
      replace: m,
      state: p,
      target: g,
      preventScrollReset: b,
      relative: r,
      viewTransition: T,
      unstable_defaultShouldRevalidate: D,
      unstable_useTransitions: N
    });
    function tt(Xt) {
      c && c(Xt), Xt.defaultPrevented || dt(Xt);
    }
    let _t = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ U.createElement(
        "a",
        {
          ...Q,
          ...gt,
          href: q.absoluteURL || K,
          onClick: q.isExternal || d ? c : tt,
          ref: Pv(z, at),
          target: g,
          "data-discover": !Y && f === "render" ? "true" : void 0
        }
      )
    );
    return I && !Y ? /* @__PURE__ */ U.createElement(U.Fragment, null, _t, /* @__PURE__ */ U.createElement(Fv, { page: K })) : _t;
  }
);
Hm.displayName = "Link";
var lg = U.forwardRef(
  function({
    "aria-current": c = "page",
    caseSensitive: f = !1,
    className: o = "",
    end: r = !1,
    style: d,
    to: m,
    viewTransition: p,
    children: g,
    ...y
  }, b) {
    let T = Ia(m, { relative: y.relative }), D = cn(), Q = U.useContext(Ui), { navigator: z, basename: L } = U.useContext(we), N = Q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    og(T) && p === !0, Y = z.encodeLocation ? z.encodeLocation(T).pathname : T.pathname, q = D.pathname, K = Q && Q.navigation && Q.navigation.location ? Q.navigation.location.pathname : null;
    f || (q = q.toLowerCase(), K = K ? K.toLowerCase() : null, Y = Y.toLowerCase()), K && L && (K = sl(K, L) || K);
    const I = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let at = q === Y || !r && q.startsWith(Y) && q.charAt(I) === "/", gt = K != null && (K === Y || !r && K.startsWith(Y) && K.charAt(Y.length) === "/"), dt = {
      isActive: at,
      isPending: gt,
      isTransitioning: N
    }, tt = at ? c : void 0, _t;
    typeof o == "function" ? _t = o(dt) : _t = [
      o,
      at ? "active" : null,
      gt ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Xt = typeof d == "function" ? d(dt) : d;
    return /* @__PURE__ */ U.createElement(
      Hm,
      {
        ...y,
        "aria-current": tt,
        className: _t,
        ref: b,
        style: Xt,
        to: m,
        viewTransition: p
      },
      typeof g == "function" ? g(dt) : g
    );
  }
);
lg.displayName = "NavLink";
var ng = U.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: c,
    navigate: f,
    reloadDocument: o,
    replace: r,
    state: d,
    method: m = Ai,
    action: p,
    onSubmit: g,
    relative: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: D,
    ...Q
  }, z) => {
    let { unstable_useTransitions: L } = U.useContext(we), N = fg(), Y = rg(p, { relative: y }), q = m.toLowerCase() === "get" ? "get" : "post", K = typeof p == "string" && wm.test(p), I = (at) => {
      if (g && g(at), at.defaultPrevented) return;
      at.preventDefault();
      let gt = at.nativeEvent.submitter, dt = gt?.getAttribute("formmethod") || m, tt = () => N(gt || at.currentTarget, {
        fetcherKey: c,
        method: dt,
        navigate: f,
        replace: r,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: T,
        unstable_defaultShouldRevalidate: D
      });
      L && f !== !1 ? U.startTransition(() => tt()) : tt();
    };
    return /* @__PURE__ */ U.createElement(
      "form",
      {
        ref: z,
        method: q,
        action: Y,
        onSubmit: o ? g : I,
        ...Q,
        "data-discover": !K && u === "render" ? "true" : void 0
      }
    );
  }
);
ng.displayName = "Form";
function ag(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Bm(u) {
  let c = U.useContext(kn);
  return Ut(c, ag(u)), c;
}
function ug(u, {
  target: c,
  replace: f,
  state: o,
  preventScrollReset: r,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: g
} = {}) {
  let y = yv(), b = cn(), T = Ia(u, { relative: d });
  return U.useCallback(
    (D) => {
      if (Bv(D, c)) {
        D.preventDefault();
        let Q = f !== void 0 ? f : $a(b) === $a(T), z = () => y(u, {
          replace: Q,
          state: o,
          preventScrollReset: r,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: p
        });
        g ? U.startTransition(() => z()) : z();
      }
    },
    [
      b,
      y,
      T,
      f,
      o,
      c,
      u,
      r,
      d,
      m,
      p,
      g
    ]
  );
}
var ig = 0, cg = () => `__${String(++ig)}__`;
function fg() {
  let { router: u } = Bm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: c } = U.useContext(we), f = _v(), o = u.fetch, r = u.navigate;
  return U.useCallback(
    async (d, m = {}) => {
      let { action: p, method: g, encType: y, formData: b, body: T } = qv(
        d,
        c
      );
      if (m.navigate === !1) {
        let D = m.fetcherKey || cg();
        await o(D, f, m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: T,
          formMethod: m.method || g,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await r(m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: T,
          formMethod: m.method || g,
          formEncType: m.encType || y,
          replace: m.replace,
          state: m.state,
          fromRouteId: f,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [o, r, c, f]
  );
}
function rg(u, { relative: c } = {}) {
  let { basename: f } = U.useContext(we), o = U.useContext(dl);
  Ut(o, "useFormAction must be used inside a RouteContext");
  let [r] = o.matches.slice(-1), d = { ...Ia(u || ".", { relative: c }) }, m = cn();
  if (u == null) {
    d.search = m.search;
    let p = new URLSearchParams(d.search), g = p.getAll("index");
    if (g.some((b) => b === "")) {
      p.delete("index"), g.filter((T) => T).forEach((T) => p.append("index", T));
      let b = p.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && r.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), f !== "/" && (d.pathname = d.pathname === "/" ? f : ol([f, d.pathname])), $a(d);
}
function og(u, { relative: c } = {}) {
  let f = U.useContext(Rm);
  Ut(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Bm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), r = Ia(u, { relative: c });
  if (!f.isTransitioning)
    return !1;
  let d = sl(f.currentLocation.pathname, o) || f.currentLocation.pathname, m = sl(f.nextLocation.pathname, o) || f.nextLocation.pathname;
  return Ci(r.pathname, m) != null || Ci(r.pathname, d) != null;
}
var cr = { exports: {} }, Pt = {};
var Qh;
function sg() {
  if (Qh) return Pt;
  Qh = 1;
  var u = Er();
  function c(g) {
    var y = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function f() {
  }
  var o = {
    d: {
      f,
      r: function() {
        throw Error(c(522));
      },
      D: f,
      C: f,
      L: f,
      m: f,
      X: f,
      S: f,
      M: f
    },
    p: 0,
    findDOMNode: null
  }, r = /* @__PURE__ */ Symbol.for("react.portal");
  function d(g, y, b) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: T == null ? null : "" + T,
      children: g,
      containerInfo: y,
      implementation: b
    };
  }
  var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(g, y) {
    if (g === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Pt.createPortal = function(g, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return d(g, y, null, b);
  }, Pt.flushSync = function(g) {
    var y = m.T, b = o.p;
    try {
      if (m.T = null, o.p = 2, g) return g();
    } finally {
      m.T = y, o.p = b, o.d.f();
    }
  }, Pt.preconnect = function(g, y) {
    typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(g, y));
  }, Pt.prefetchDNS = function(g) {
    typeof g == "string" && o.d.D(g);
  }, Pt.preinit = function(g, y) {
    if (typeof g == "string" && y && typeof y.as == "string") {
      var b = y.as, T = p(b, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, Q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? o.d.S(
        g,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: T,
          integrity: D,
          fetchPriority: Q
        }
      ) : b === "script" && o.d.X(g, {
        crossOrigin: T,
        integrity: D,
        fetchPriority: Q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Pt.preinitModule = function(g, y) {
    if (typeof g == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = p(
            y.as,
            y.crossOrigin
          );
          o.d.M(g, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(g);
  }, Pt.preload = function(g, y) {
    if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, T = p(b, y.crossOrigin);
      o.d.L(g, b, {
        crossOrigin: T,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, Pt.preloadModule = function(g, y) {
    if (typeof g == "string")
      if (y) {
        var b = p(y.as, y.crossOrigin);
        o.d.m(g, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(g);
  }, Pt.requestFormReset = function(g) {
    o.d.r(g);
  }, Pt.unstable_batchedUpdates = function(g, y) {
    return g(y);
  }, Pt.useFormState = function(g, y, b) {
    return m.H.useFormState(g, y, b);
  }, Pt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Pt.version = "19.2.3", Pt;
}
var Vh;
function dg() {
  if (Vh) return cr.exports;
  Vh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), cr.exports = sg(), cr.exports;
}
var fr = { exports: {} }, Ka = {}, rr = { exports: {} }, or = {};
var Zh;
function hg() {
  return Zh || (Zh = 1, (function(u) {
    function c(G, j) {
      var X = G.length;
      G.push(j);
      t: for (; 0 < X; ) {
        var ht = X - 1 >>> 1, Rt = G[ht];
        if (0 < r(Rt, j))
          G[ht] = j, G[X] = Rt, X = ht;
        else break t;
      }
    }
    function f(G) {
      return G.length === 0 ? null : G[0];
    }
    function o(G) {
      if (G.length === 0) return null;
      var j = G[0], X = G.pop();
      if (X !== j) {
        G[0] = X;
        t: for (var ht = 0, Rt = G.length, Dt = Rt >>> 1; ht < Dt; ) {
          var E = 2 * (ht + 1) - 1, B = G[E], V = E + 1, J = G[V];
          if (0 > r(B, X))
            V < Rt && 0 > r(J, B) ? (G[ht] = J, G[V] = X, ht = V) : (G[ht] = B, G[E] = X, ht = E);
          else if (V < Rt && 0 > r(J, X))
            G[ht] = J, G[V] = X, ht = V;
          else break t;
        }
      }
      return j;
    }
    function r(G, j) {
      var X = G.sortIndex - j.sortIndex;
      return X !== 0 ? X : G.id - j.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, p = m.now();
      u.unstable_now = function() {
        return m.now() - p;
      };
    }
    var g = [], y = [], b = 1, T = null, D = 3, Q = !1, z = !1, L = !1, N = !1, Y = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function I(G) {
      for (var j = f(y); j !== null; ) {
        if (j.callback === null) o(y);
        else if (j.startTime <= G)
          o(y), j.sortIndex = j.expirationTime, c(g, j);
        else break;
        j = f(y);
      }
    }
    function at(G) {
      if (L = !1, I(G), !z)
        if (f(g) !== null)
          z = !0, gt || (gt = !0, Vt());
        else {
          var j = f(y);
          j !== null && ae(at, j.startTime - G);
        }
    }
    var gt = !1, dt = -1, tt = 5, _t = -1;
    function Xt() {
      return N ? !0 : !(u.unstable_now() - _t < tt);
    }
    function Ye() {
      if (N = !1, gt) {
        var G = u.unstable_now();
        _t = G;
        var j = !0;
        try {
          t: {
            z = !1, L && (L = !1, q(dt), dt = -1), Q = !0;
            var X = D;
            try {
              e: {
                for (I(G), T = f(g); T !== null && !(T.expirationTime > G && Xt()); ) {
                  var ht = T.callback;
                  if (typeof ht == "function") {
                    T.callback = null, D = T.priorityLevel;
                    var Rt = ht(
                      T.expirationTime <= G
                    );
                    if (G = u.unstable_now(), typeof Rt == "function") {
                      T.callback = Rt, I(G), j = !0;
                      break e;
                    }
                    T === f(g) && o(g), I(G);
                  } else o(g);
                  T = f(g);
                }
                if (T !== null) j = !0;
                else {
                  var Dt = f(y);
                  Dt !== null && ae(
                    at,
                    Dt.startTime - G
                  ), j = !1;
                }
              }
              break t;
            } finally {
              T = null, D = X, Q = !1;
            }
            j = void 0;
          }
        } finally {
          j ? Vt() : gt = !1;
        }
      }
    }
    var Vt;
    if (typeof K == "function")
      Vt = function() {
        K(Ye);
      };
    else if (typeof MessageChannel < "u") {
      var It = new MessageChannel(), ne = It.port2;
      It.port1.onmessage = Ye, Vt = function() {
        ne.postMessage(null);
      };
    } else
      Vt = function() {
        Y(Ye, 0);
      };
    function ae(G, j) {
      dt = Y(function() {
        G(u.unstable_now());
      }, j);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, u.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : tt = 0 < G ? Math.floor(1e3 / G) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, u.unstable_next = function(G) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = D;
      }
      var X = D;
      D = j;
      try {
        return G();
      } finally {
        D = X;
      }
    }, u.unstable_requestPaint = function() {
      N = !0;
    }, u.unstable_runWithPriority = function(G, j) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var X = D;
      D = G;
      try {
        return j();
      } finally {
        D = X;
      }
    }, u.unstable_scheduleCallback = function(G, j, X) {
      var ht = u.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ht + X : ht) : X = ht, G) {
        case 1:
          var Rt = -1;
          break;
        case 2:
          Rt = 250;
          break;
        case 5:
          Rt = 1073741823;
          break;
        case 4:
          Rt = 1e4;
          break;
        default:
          Rt = 5e3;
      }
      return Rt = X + Rt, G = {
        id: b++,
        callback: j,
        priorityLevel: G,
        startTime: X,
        expirationTime: Rt,
        sortIndex: -1
      }, X > ht ? (G.sortIndex = X, c(y, G), f(g) === null && G === f(y) && (L ? (q(dt), dt = -1) : L = !0, ae(at, X - ht))) : (G.sortIndex = Rt, c(g, G), z || Q || (z = !0, gt || (gt = !0, Vt()))), G;
    }, u.unstable_shouldYield = Xt, u.unstable_wrapCallback = function(G) {
      var j = D;
      return function() {
        var X = D;
        D = j;
        try {
          return G.apply(this, arguments);
        } finally {
          D = X;
        }
      };
    };
  })(or)), or;
}
var Kh;
function mg() {
  return Kh || (Kh = 1, rr.exports = hg()), rr.exports;
}
var Jh;
function yg() {
  if (Jh) return Ka;
  Jh = 1;
  var u = {};
  var c = mg(), f = Er(), o = dg();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function m(t) {
    var e = t, l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do
        e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (m(t) !== t)
      throw Error(r(188));
  }
  function b(t) {
    var e = t.alternate;
    if (!e) {
      if (e = m(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var l = t, n = e; ; ) {
      var a = l.return;
      if (a === null) break;
      var i = a.alternate;
      if (i === null) {
        if (n = a.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (a.child === i.child) {
        for (i = a.child; i; ) {
          if (i === l) return y(a), t;
          if (i === n) return y(a), e;
          i = i.sibling;
        }
        throw Error(r(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var s = !1, h = a.child; h; ) {
          if (h === l) {
            s = !0, l = a, n = i;
            break;
          }
          if (h === n) {
            s = !0, n = a, l = i;
            break;
          }
          h = h.sibling;
        }
        if (!s) {
          for (h = i.child; h; ) {
            if (h === l) {
              s = !0, l = i, n = a;
              break;
            }
            if (h === n) {
              s = !0, n = i, l = a;
              break;
            }
            h = h.sibling;
          }
          if (!s) throw Error(r(189));
        }
      }
      if (l.alternate !== n) throw Error(r(190));
    }
    if (l.tag !== 3) throw Error(r(188));
    return l.stateNode.current === l ? t : e;
  }
  function T(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = T(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var D = Object.assign, Q = /* @__PURE__ */ Symbol.for("react.element"), z = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), q = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), gt = /* @__PURE__ */ Symbol.for("react.suspense"), dt = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), _t = /* @__PURE__ */ Symbol.for("react.lazy"), Xt = /* @__PURE__ */ Symbol.for("react.activity"), Ye = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Vt = Symbol.iterator;
  function It(t) {
    return t === null || typeof t != "object" ? null : (t = Vt && t[Vt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ae(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ne ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case N:
        return "Fragment";
      case q:
        return "Profiler";
      case Y:
        return "StrictMode";
      case gt:
        return "Suspense";
      case dt:
        return "SuspenseList";
      case Xt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case L:
          return "Portal";
        case I:
          return t.displayName || "Context";
        case K:
          return (t._context.displayName || "Context") + ".Consumer";
        case at:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : ae(t.type) || "Memo";
        case _t:
          e = t._payload, t = t._init;
          try {
            return ae(t(e));
          } catch {
          }
      }
    return null;
  }
  var G = Array.isArray, j = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Rt = [], Dt = -1;
  function E(t) {
    return { current: t };
  }
  function B(t) {
    0 > Dt || (t.current = Rt[Dt], Rt[Dt] = null, Dt--);
  }
  function V(t, e) {
    Dt++, Rt[Dt] = t.current, t.current = e;
  }
  var J = E(null), ut = E(null), it = E(null), vt = E(null);
  function ee(t, e) {
    switch (V(it, e), V(ut, t), V(J, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? lh(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = lh(e), t = nh(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    B(J), V(J, t);
  }
  function wt() {
    B(J), B(ut), B(it);
  }
  function Wn(t) {
    t.memoizedState !== null && V(vt, t);
    var e = J.current, l = nh(e, t.type);
    e !== l && (V(ut, t), V(J, l));
  }
  function nu(t) {
    ut.current === t && (B(J), B(ut)), vt.current === t && (B(vt), Ya._currentValue = ht);
  }
  var Li, Dr;
  function jl(t) {
    if (Li === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Li = e && e[1] || "", Dr = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Li + t + Dr;
  }
  var ji = !1;
  function qi(t, e) {
    if (!t || ji) return "";
    ji = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (x) {
                  var _ = x;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (x) {
                  _ = x;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                _ = x;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (x) {
            if (x && _ && typeof x.stack == "string")
              return [x.stack, _.stack];
          }
          return [null, null];
        }
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = n.DetermineComponentFrameRoot(), s = i[0], h = i[1];
      if (s && h) {
        var v = s.split(`
`), O = h.split(`
`);
        for (a = n = 0; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < O.length && !O[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === v.length || a === O.length)
          for (n = v.length - 1, a = O.length - 1; 1 <= n && 0 <= a && v[n] !== O[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (v[n] !== O[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || v[n] !== O[a]) {
                  var M = `
` + v[n].replace(" at new ", " at ");
                  return t.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", t.displayName)), M;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      ji = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? jl(l) : "";
  }
  function fy(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return jl(t.type);
      case 16:
        return jl("Lazy");
      case 13:
        return t.child !== e && e !== null ? jl("Suspense Fallback") : jl("Suspense");
      case 19:
        return jl("SuspenseList");
      case 0:
      case 15:
        return qi(t.type, !1);
      case 11:
        return qi(t.type.render, !1);
      case 1:
        return qi(t.type, !0);
      case 31:
        return jl("Activity");
      default:
        return "";
    }
  }
  function Mr(t) {
    try {
      var e = "", l = null;
      do
        e += fy(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Yi = Object.prototype.hasOwnProperty, Gi = c.unstable_scheduleCallback, Xi = c.unstable_cancelCallback, ry = c.unstable_shouldYield, oy = c.unstable_requestPaint, me = c.unstable_now, sy = c.unstable_getCurrentPriorityLevel, Nr = c.unstable_ImmediatePriority, wr = c.unstable_UserBlockingPriority, au = c.unstable_NormalPriority, dy = c.unstable_LowPriority, Hr = c.unstable_IdlePriority, hy = c.log, my = c.unstable_setDisableYieldValue, In = null, ye = null;
  function hl(t) {
    if (typeof hy == "function" && my(t), ye && typeof ye.setStrictMode == "function")
      try {
        ye.setStrictMode(In, t);
      } catch {
      }
  }
  var pe = Math.clz32 ? Math.clz32 : vy, yy = Math.log, py = Math.LN2;
  function vy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (yy(t) / py | 0) | 0;
  }
  var uu = 256, iu = 262144, cu = 4194304;
  function ql(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function fu(t, e, l) {
    var n = t.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var h = n & 134217727;
    return h !== 0 ? (n = h & ~i, n !== 0 ? a = ql(n) : (s &= h, s !== 0 ? a = ql(s) : l || (l = h & ~t, l !== 0 && (a = ql(l))))) : (h = n & ~i, h !== 0 ? a = ql(h) : s !== 0 ? a = ql(s) : l || (l = n & ~t, l !== 0 && (a = ql(l)))), a === 0 ? 0 : e !== 0 && e !== a && (e & i) === 0 && (i = a & -a, l = e & -e, i >= l || i === 32 && (l & 4194048) !== 0) ? e : a;
  }
  function Pn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function gy(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Br() {
    var t = cu;
    return cu <<= 1, (cu & 62914560) === 0 && (cu = 4194304), t;
  }
  function Qi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ta(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function by(t, e, l, n, a, i) {
    var s = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var h = t.entanglements, v = t.expirationTimes, O = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var M = 31 - pe(l), H = 1 << M;
      h[M] = 0, v[M] = -1;
      var _ = O[M];
      if (_ !== null)
        for (O[M] = null, M = 0; M < _.length; M++) {
          var x = _[M];
          x !== null && (x.lane &= -536870913);
        }
      l &= ~H;
    }
    n !== 0 && Lr(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(s & ~e));
  }
  function Lr(t, e, l) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var n = 31 - pe(e);
    t.entangledLanes |= e, t.entanglements[n] = t.entanglements[n] | 1073741824 | l & 261930;
  }
  function jr(t, e) {
    var l = t.entangledLanes |= e;
    for (t = t.entanglements; l; ) {
      var n = 31 - pe(l), a = 1 << n;
      a & e | t[n] & e && (t[n] |= e), l &= ~a;
    }
  }
  function qr(t, e) {
    var l = e & -e;
    return l = (l & 42) !== 0 ? 1 : Vi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
  }
  function Vi(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Zi(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yr() {
    var t = X.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : _h(t.type));
  }
  function Gr(t, e) {
    var l = X.p;
    try {
      return X.p = t, e();
    } finally {
      X.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + ml, ue = "__reactProps$" + ml, fn = "__reactContainer$" + ml, Ki = "__reactEvents$" + ml, Sy = "__reactListeners$" + ml, Ey = "__reactHandles$" + ml, Xr = "__reactResources$" + ml, ea = "__reactMarker$" + ml;
  function Ji(t) {
    delete t[Jt], delete t[ue], delete t[Ki], delete t[Sy], delete t[Ey];
  }
  function rn(t) {
    var e = t[Jt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[fn] || l[Jt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = oh(t); t !== null; ) {
            if (l = t[Jt]) return l;
            t = oh(t);
          }
        return e;
      }
      t = l, l = t.parentNode;
    }
    return null;
  }
  function on(t) {
    if (t = t[Jt] || t[fn]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function la(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function sn(t) {
    var e = t[Xr];
    return e || (e = t[Xr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Zt(t) {
    t[ea] = !0;
  }
  var Qr = /* @__PURE__ */ new Set(), Vr = {};
  function Yl(t, e) {
    dn(t, e), dn(t + "Capture", e);
  }
  function dn(t, e) {
    for (Vr[t] = e, t = 0; t < e.length; t++)
      Qr.add(e[t]);
  }
  var Ty = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zr = {}, Kr = {};
  function Ay(t) {
    return Yi.call(Kr, t) ? !0 : Yi.call(Zr, t) ? !1 : Ty.test(t) ? Kr[t] = !0 : (Zr[t] = !0, !1);
  }
  function ru(t, e, l) {
    if (Ay(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var n = e.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function ou(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function Ke(t, e, l, n) {
    if (n === null) t.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + n);
    }
  }
  function Re(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Jr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Ry(t, e, l) {
    var n = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(s) {
          l = "" + s, i.call(this, s);
        }
      }), Object.defineProperty(t, e, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(s) {
          l = "" + s;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function ki(t) {
    if (!t._valueTracker) {
      var e = Jr(t) ? "checked" : "value";
      t._valueTracker = Ry(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function kr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = Jr(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function su(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Oy = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(
      Oy,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $i(t, e, l, n, a, i, s, h) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Re(e)) : t.value !== "" + Re(e) && (t.value = "" + Re(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? Fi(t, s, Re(e)) : l != null ? Fi(t, s, Re(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Re(h) : t.removeAttribute("name");
  }
  function $r(t, e, l, n, a, i, s, h) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.type = i), e != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || e != null)) {
        ki(t);
        return;
      }
      l = l != null ? "" + Re(l) : "", e = e != null ? "" + Re(e) : l, h || e === t.value || (t.value = e), t.defaultValue = e;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, t.checked = h ? t.checked : !!n, t.defaultChecked = !!n, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), ki(t);
  }
  function Fi(t, e, l) {
    e === "number" && su(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
  }
  function hn(t, e, l, n) {
    if (t = t.options, e) {
      e = {};
      for (var a = 0; a < l.length; a++)
        e["$" + l[a]] = !0;
      for (l = 0; l < t.length; l++)
        a = e.hasOwnProperty("$" + t[l].value), t[l].selected !== a && (t[l].selected = a), a && n && (t[l].defaultSelected = !0);
    } else {
      for (l = "" + Re(l), e = null, a = 0; a < t.length; a++) {
        if (t[a].value === l) {
          t[a].selected = !0, n && (t[a].defaultSelected = !0);
          return;
        }
        e !== null || t[a].disabled || (e = t[a]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Fr(t, e, l) {
    if (e != null && (e = "" + Re(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Re(l) : "";
  }
  function Wr(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (G(n)) {
          if (1 < n.length) throw Error(r(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), e = l;
    }
    l = Re(e), t.defaultValue = l, n = t.textContent, n === l && n !== "" && n !== null && (t.value = n), ki(t);
  }
  function mn(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var _y = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ir(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || _y.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Pr(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && Ir(t, a, n);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Ir(t, i, e[i]);
  }
  function Wi(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var zy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Cy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function du(t) {
    return Cy.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Je() {
  }
  var Ii = null;
  function Pi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var yn = null, pn = null;
  function to(t) {
    var e = on(t);
    if (e && (t = e.stateNode)) {
      var l = t[ue] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if ($i(
            t,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), e = l.name, l.type === "radio" && e != null) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Oe(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < l.length; e++) {
              var n = l[e];
              if (n !== t && n.form === t.form) {
                var a = n[ue] || null;
                if (!a) throw Error(r(90));
                $i(
                  n,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (e = 0; e < l.length; e++)
              n = l[e], n.form === t.form && kr(n);
          }
          break t;
        case "textarea":
          Fr(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && hn(t, !!l.multiple, e, !1);
      }
    }
  }
  var tc = !1;
  function eo(t, e, l) {
    if (tc) return t(e, l);
    tc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (tc = !1, (yn !== null || pn !== null) && (Pu(), yn && (e = yn, t = pn, pn = yn = null, to(e), t)))
        for (e = 0; e < t.length; e++) to(t[e]);
    }
  }
  function na(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var n = l[ue] || null;
    if (n === null) return null;
    l = n[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (n = !n.disabled) || (t = t.type, n = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !n;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function")
      throw Error(
        r(231, e, typeof l)
      );
    return l;
  }
  var ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ec = !1;
  if (ke)
    try {
      var aa = {};
      Object.defineProperty(aa, "passive", {
        get: function() {
          ec = !0;
        }
      }), window.addEventListener("test", aa, aa), window.removeEventListener("test", aa, aa);
    } catch {
      ec = !1;
    }
  var yl = null, lc = null, hu = null;
  function lo() {
    if (hu) return hu;
    var t, e = lc, l = e.length, n, a = "value" in yl ? yl.value : yl.textContent, i = a.length;
    for (t = 0; t < l && e[t] === a[t]; t++) ;
    var s = l - t;
    for (n = 1; n <= s && e[l - n] === a[i - n]; n++) ;
    return hu = a.slice(t, 1 < n ? 1 - n : void 0);
  }
  function mu(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function yu() {
    return !0;
  }
  function no() {
    return !1;
  }
  function ie(t) {
    function e(l, n, a, i, s) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (l = t[h], this[h] = l ? l(i) : i[h]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yu : no, this.isPropagationStopped = no, this;
    }
    return D(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = yu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = yu);
      },
      persist: function() {
      },
      isPersistent: yu
    }), e;
  }
  var Gl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, pu = ie(Gl), ua = D({}, Gl, { view: 0, detail: 0 }), xy = ie(ua), nc, ac, ia, vu = D({}, ua, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ic,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ia && (ia && t.type === "mousemove" ? (nc = t.screenX - ia.screenX, ac = t.screenY - ia.screenY) : ac = nc = 0, ia = t), nc);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ac;
    }
  }), ao = ie(vu), Uy = D({}, vu, { dataTransfer: 0 }), Dy = ie(Uy), My = D({}, ua, { relatedTarget: 0 }), uc = ie(My), Ny = D({}, Gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wy = ie(Ny), Hy = D({}, Gl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), By = ie(Hy), Ly = D({}, Gl, { data: 0 }), uo = ie(Ly), jy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, qy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Yy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Yy[t]) ? !!e[t] : !1;
  }
  function ic() {
    return Gy;
  }
  var Xy = D({}, ua, {
    key: function(t) {
      if (t.key) {
        var e = jy[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = mu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? qy[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ic,
    charCode: function(t) {
      return t.type === "keypress" ? mu(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? mu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), Qy = ie(Xy), Vy = D({}, vu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), io = ie(Vy), Zy = D({}, ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic
  }), Ky = ie(Zy), Jy = D({}, Gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ky = ie(Jy), $y = D({}, vu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fy = ie($y), Wy = D({}, Gl, {
    newState: 0,
    oldState: 0
  }), Iy = ie(Wy), Py = [9, 13, 27, 32], cc = ke && "CompositionEvent" in window, ca = null;
  ke && "documentMode" in document && (ca = document.documentMode);
  var t0 = ke && "TextEvent" in window && !ca, co = ke && (!cc || ca && 8 < ca && 11 >= ca), fo = " ", ro = !1;
  function oo(t, e) {
    switch (t) {
      case "keyup":
        return Py.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function so(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var vn = !1;
  function e0(t, e) {
    switch (t) {
      case "compositionend":
        return so(e);
      case "keypress":
        return e.which !== 32 ? null : (ro = !0, fo);
      case "textInput":
        return t = e.data, t === fo && ro ? null : t;
      default:
        return null;
    }
  }
  function l0(t, e) {
    if (vn)
      return t === "compositionend" || !cc && oo(t, e) ? (t = lo(), hu = lc = yl = null, vn = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return co && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var n0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function ho(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!n0[t.type] : e === "textarea";
  }
  function mo(t, e, l, n) {
    yn ? pn ? pn.push(n) : pn = [n] : yn = n, e = ii(e, "onChange"), 0 < e.length && (l = new pu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var fa = null, ra = null;
  function a0(t) {
    Fd(t, 0);
  }
  function gu(t) {
    var e = la(t);
    if (kr(e)) return t;
  }
  function yo(t, e) {
    if (t === "change") return e;
  }
  var po = !1;
  if (ke) {
    var fc;
    if (ke) {
      var rc = "oninput" in document;
      if (!rc) {
        var vo = document.createElement("div");
        vo.setAttribute("oninput", "return;"), rc = typeof vo.oninput == "function";
      }
      fc = rc;
    } else fc = !1;
    po = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function go() {
    fa && (fa.detachEvent("onpropertychange", bo), ra = fa = null);
  }
  function bo(t) {
    if (t.propertyName === "value" && gu(ra)) {
      var e = [];
      mo(
        e,
        ra,
        t,
        Pi(t)
      ), eo(a0, e);
    }
  }
  function u0(t, e, l) {
    t === "focusin" ? (go(), fa = e, ra = l, fa.attachEvent("onpropertychange", bo)) : t === "focusout" && go();
  }
  function i0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return gu(ra);
  }
  function c0(t, e) {
    if (t === "click") return gu(e);
  }
  function f0(t, e) {
    if (t === "input" || t === "change")
      return gu(e);
  }
  function r0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ve = typeof Object.is == "function" ? Object.is : r0;
  function oa(t, e) {
    if (ve(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var l = Object.keys(t), n = Object.keys(e);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Yi.call(e, a) || !ve(t[a], e[a]))
        return !1;
    }
    return !0;
  }
  function So(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Eo(t, e) {
    var l = So(t);
    t = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = t + l.textContent.length, t <= e && n >= e)
          return { node: l, offset: e - t };
        t = n;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = So(l);
    }
  }
  function To(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? To(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ao(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = su(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = su(t.document);
    }
    return e;
  }
  function oc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var o0 = ke && "documentMode" in document && 11 >= document.documentMode, gn = null, sc = null, sa = null, dc = !1;
  function Ro(t, e, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    dc || gn == null || gn !== su(n) || (n = gn, "selectionStart" in n && oc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), sa && oa(sa, n) || (sa = n, n = ii(sc, "onSelect"), 0 < n.length && (e = new pu(
      "onSelect",
      "select",
      null,
      e,
      l
    ), t.push({ event: e, listeners: n }), e.target = gn)));
  }
  function Xl(t, e) {
    var l = {};
    return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
  }
  var bn = {
    animationend: Xl("Animation", "AnimationEnd"),
    animationiteration: Xl("Animation", "AnimationIteration"),
    animationstart: Xl("Animation", "AnimationStart"),
    transitionrun: Xl("Transition", "TransitionRun"),
    transitionstart: Xl("Transition", "TransitionStart"),
    transitioncancel: Xl("Transition", "TransitionCancel"),
    transitionend: Xl("Transition", "TransitionEnd")
  }, hc = {}, Oo = {};
  ke && (Oo = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Ql(t) {
    if (hc[t]) return hc[t];
    if (!bn[t]) return t;
    var e = bn[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Oo)
        return hc[t] = e[l];
    return t;
  }
  var _o = Ql("animationend"), zo = Ql("animationiteration"), Co = Ql("animationstart"), s0 = Ql("transitionrun"), d0 = Ql("transitionstart"), h0 = Ql("transitioncancel"), xo = Ql("transitionend"), Uo = /* @__PURE__ */ new Map(), mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mc.push("scrollEnd");
  function He(t, e) {
    Uo.set(t, e), Yl(e, [t]);
  }
  var bu = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, _e = [], Sn = 0, yc = 0;
  function Su() {
    for (var t = Sn, e = yc = Sn = 0; e < t; ) {
      var l = _e[e];
      _e[e++] = null;
      var n = _e[e];
      _e[e++] = null;
      var a = _e[e];
      _e[e++] = null;
      var i = _e[e];
      if (_e[e++] = null, n !== null && a !== null) {
        var s = n.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), n.pending = a;
      }
      i !== 0 && Do(l, a, i);
    }
  }
  function Eu(t, e, l, n) {
    _e[Sn++] = t, _e[Sn++] = e, _e[Sn++] = l, _e[Sn++] = n, yc |= n, t.lanes |= n, t = t.alternate, t !== null && (t.lanes |= n);
  }
  function pc(t, e, l, n) {
    return Eu(t, e, l, n), Tu(t);
  }
  function Vl(t, e) {
    return Eu(t, null, null, e), Tu(t);
  }
  function Do(t, e, l) {
    t.lanes |= l;
    var n = t.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = t.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (t = i.stateNode, t === null || t._visibility & 1 || (a = !0)), t = i, i = i.return;
    return t.tag === 3 ? (i = t.stateNode, a && e !== null && (a = 31 - pe(l), t = i.hiddenUpdates, n = t[a], n === null ? t[a] = [e] : n.push(e), e.lane = l | 536870912), i) : null;
  }
  function Tu(t) {
    if (50 < Na)
      throw Na = 0, _f = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var En = {};
  function m0(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ge(t, e, l, n) {
    return new m0(t, e, l, n);
  }
  function vc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $e(t, e) {
    var l = t.alternate;
    return l === null ? (l = ge(
      t.tag,
      e,
      t.key,
      t.mode
    ), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
  }
  function Mo(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Au(t, e, l, n, a, i) {
    var s = 0;
    if (n = t, typeof t == "function") vc(t) && (s = 1);
    else if (typeof t == "string")
      s = bp(
        t,
        l,
        J.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Xt:
          return t = ge(31, l, e, a), t.elementType = Xt, t.lanes = i, t;
        case N:
          return Zl(l.children, a, i, e);
        case Y:
          s = 8, a |= 24;
          break;
        case q:
          return t = ge(12, l, e, a | 2), t.elementType = q, t.lanes = i, t;
        case gt:
          return t = ge(13, l, e, a), t.elementType = gt, t.lanes = i, t;
        case dt:
          return t = ge(19, l, e, a), t.elementType = dt, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case I:
                s = 10;
                break t;
              case K:
                s = 9;
                break t;
              case at:
                s = 11;
                break t;
              case tt:
                s = 14;
                break t;
              case _t:
                s = 16, n = null;
                break t;
            }
          s = 29, l = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), n = null;
      }
    return e = ge(s, l, e, a), e.elementType = t, e.type = n, e.lanes = i, e;
  }
  function Zl(t, e, l, n) {
    return t = ge(7, t, n, e), t.lanes = l, t;
  }
  function gc(t, e, l) {
    return t = ge(6, t, null, e), t.lanes = l, t;
  }
  function No(t) {
    var e = ge(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function bc(t, e, l) {
    return e = ge(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = l, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var wo = /* @__PURE__ */ new WeakMap();
  function ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = wo.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Mr(e)
      }, wo.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Mr(e)
    };
  }
  var Tn = [], An = 0, Ru = null, da = 0, Ce = [], xe = 0, pl = null, Ge = 1, Xe = "";
  function Fe(t, e) {
    Tn[An++] = da, Tn[An++] = Ru, Ru = t, da = e;
  }
  function Ho(t, e, l) {
    Ce[xe++] = Ge, Ce[xe++] = Xe, Ce[xe++] = pl, pl = t;
    var n = Ge;
    t = Xe;
    var a = 32 - pe(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pe(e) + a;
    if (30 < i) {
      var s = a - a % 5;
      i = (n & (1 << s) - 1).toString(32), n >>= s, a -= s, Ge = 1 << 32 - pe(e) + a | l << a | n, Xe = i + t;
    } else
      Ge = 1 << i | l << a | n, Xe = t;
  }
  function Sc(t) {
    t.return !== null && (Fe(t, 1), Ho(t, 1, 0));
  }
  function Ec(t) {
    for (; t === Ru; )
      Ru = Tn[--An], Tn[An] = null, da = Tn[--An], Tn[An] = null;
    for (; t === pl; )
      pl = Ce[--xe], Ce[xe] = null, Xe = Ce[--xe], Ce[xe] = null, Ge = Ce[--xe], Ce[xe] = null;
  }
  function Bo(t, e) {
    Ce[xe++] = Ge, Ce[xe++] = Xe, Ce[xe++] = pl, Ge = e.id, Xe = e.overflow, pl = t;
  }
  var kt = null, zt = null, st = !1, vl = null, Ue = !1, Tc = Error(r(519));
  function gl(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ha(ze(e, t)), Tc;
  }
  function Lo(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Jt] = t, e[ue] = n, l) {
      case "dialog":
        ft("cancel", e), ft("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ha.length; l++)
          ft(Ha[l], e);
        break;
      case "source":
        ft("error", e);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", e), ft("load", e);
        break;
      case "details":
        ft("toggle", e);
        break;
      case "input":
        ft("invalid", e), $r(
          e,
          n.value,
          n.defaultValue,
          n.checked,
          n.defaultChecked,
          n.type,
          n.name,
          !0
        );
        break;
      case "select":
        ft("invalid", e);
        break;
      case "textarea":
        ft("invalid", e), Wr(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || th(e.textContent, l) ? (n.popover != null && (ft("beforetoggle", e), ft("toggle", e)), n.onScroll != null && ft("scroll", e), n.onScrollEnd != null && ft("scrollend", e), n.onClick != null && (e.onclick = Je), e = !0) : e = !1, e || gl(t, !0);
  }
  function jo(t) {
    for (kt = t.return; kt; )
      switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          Ue = !1;
          return;
        case 27:
        case 3:
          Ue = !0;
          return;
        default:
          kt = kt.return;
      }
  }
  function Rn(t) {
    if (t !== kt) return !1;
    if (!st) return jo(t), st = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Gf(t.type, t.memoizedProps)), l = !l), l && zt && gl(t), jo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = rh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = rh(t);
    } else
      e === 27 ? (e = zt, Ml(t.type) ? (t = Kf, Kf = null, zt = t) : zt = e) : zt = kt ? Me(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Kl() {
    zt = kt = null, st = !1;
  }
  function Ac() {
    var t = vl;
    return t !== null && (oe === null ? oe = t : oe.push.apply(
      oe,
      t
    ), vl = null), t;
  }
  function ha(t) {
    vl === null ? vl = [t] : vl.push(t);
  }
  var Rc = E(null), Jl = null, We = null;
  function bl(t, e, l) {
    V(Rc, e._currentValue), e._currentValue = l;
  }
  function Ie(t) {
    t._currentValue = Rc.current, B(Rc);
  }
  function Oc(t, e, l) {
    for (; t !== null; ) {
      var n = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, n !== null && (n.childLanes |= e)) : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e), t === l) break;
      t = t.return;
    }
  }
  function _c(t, e, l, n) {
    var a = t.child;
    for (a !== null && (a.return = t); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var s = a.child;
        i = i.firstContext;
        t: for (; i !== null; ) {
          var h = i;
          i = a;
          for (var v = 0; v < e.length; v++)
            if (h.context === e[v]) {
              i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), Oc(
                i.return,
                l,
                t
              ), n || (s = null);
              break t;
            }
          i = h.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(r(341));
        s.lanes |= l, i = s.alternate, i !== null && (i.lanes |= l), Oc(s, l, t), s = null;
      } else s = a.child;
      if (s !== null) s.return = a;
      else
        for (s = a; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return, s = a;
            break;
          }
          s = s.return;
        }
      a = s;
    }
  }
  function On(t, e, l, n) {
    t = null;
    for (var a = e, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(r(387));
        if (s = s.memoizedProps, s !== null) {
          var h = a.type;
          ve(a.pendingProps.value, s.value) || (t !== null ? t.push(h) : t = [h]);
        }
      } else if (a === vt.current) {
        if (s = a.alternate, s === null) throw Error(r(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (t !== null ? t.push(Ya) : t = [Ya]);
      }
      a = a.return;
    }
    t !== null && _c(
      e,
      t,
      l,
      n
    ), e.flags |= 262144;
  }
  function Ou(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ve(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function kl(t) {
    Jl = t, We = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function $t(t) {
    return qo(Jl, t);
  }
  function _u(t, e) {
    return Jl === null && kl(t), qo(t, e);
  }
  function qo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, We === null) {
      if (t === null) throw Error(r(308));
      We = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else We = We.next = e;
    return l;
  }
  var y0 = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        t.push(n);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(l) {
        return l();
      });
    };
  }, p0 = c.unstable_scheduleCallback, v0 = c.unstable_NormalPriority, jt = {
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zc() {
    return {
      controller: new y0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ma(t) {
    t.refCount--, t.refCount === 0 && p0(v0, function() {
      t.controller.abort();
    });
  }
  var ya = null, Cc = 0, _n = 0, zn = null;
  function g0(t, e) {
    if (ya === null) {
      var l = ya = [];
      Cc = 0, _n = Mf(), zn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Cc++, e.then(Yo, Yo), e;
  }
  function Yo() {
    if (--Cc === 0 && ya !== null) {
      zn !== null && (zn.status = "fulfilled");
      var t = ya;
      ya = null, _n = 0, zn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function b0(t, e) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return t.then(
      function() {
        n.status = "fulfilled", n.value = e;
        for (var a = 0; a < l.length; a++) (0, l[a])(e);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Go = j.S;
  j.S = function(t, e) {
    Rd = me(), typeof e == "object" && e !== null && typeof e.then == "function" && g0(t, e), Go !== null && Go(t, e);
  };
  var $l = E(null);
  function xc() {
    var t = $l.current;
    return t !== null ? t : Ot.pooledCache;
  }
  function zu(t, e) {
    e === null ? V($l, $l.current) : V($l, e.pool);
  }
  function Xo() {
    var t = xc();
    return t === null ? null : { parent: jt._currentValue, pool: t };
  }
  var Cn = Error(r(460)), Uc = Error(r(474)), Cu = Error(r(542)), xu = { then: function() {
  } };
  function Qo(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Vo(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Je, Je), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Ko(t), t;
      default:
        if (typeof e.status == "string") e.then(Je, Je);
        else {
          if (t = Ot, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (e.status === "pending") {
                var a = e;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Ko(t), t;
        }
        throw Wl = e, Cn;
    }
  }
  function Fl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, Cn) : l;
    }
  }
  var Wl = null;
  function Zo() {
    if (Wl === null) throw Error(r(459));
    var t = Wl;
    return Wl = null, t;
  }
  function Ko(t) {
    if (t === Cn || t === Cu)
      throw Error(r(483));
  }
  var xn = null, pa = 0;
  function Uu(t) {
    var e = pa;
    return pa += 1, xn === null && (xn = []), Vo(xn, t, e);
  }
  function va(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Du(t, e) {
    throw e.$$typeof === Q ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Jo(t) {
    function e(A, S) {
      if (t) {
        var R = A.deletions;
        R === null ? (A.deletions = [S], A.flags |= 16) : R.push(S);
      }
    }
    function l(A, S) {
      if (!t) return null;
      for (; S !== null; )
        e(A, S), S = S.sibling;
      return null;
    }
    function n(A) {
      for (var S = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? S.set(A.key, A) : S.set(A.index, A), A = A.sibling;
      return S;
    }
    function a(A, S) {
      return A = $e(A, S), A.index = 0, A.sibling = null, A;
    }
    function i(A, S, R) {
      return A.index = R, t ? (R = A.alternate, R !== null ? (R = R.index, R < S ? (A.flags |= 67108866, S) : R) : (A.flags |= 67108866, S)) : (A.flags |= 1048576, S);
    }
    function s(A) {
      return t && A.alternate === null && (A.flags |= 67108866), A;
    }
    function h(A, S, R, w) {
      return S === null || S.tag !== 6 ? (S = gc(R, A.mode, w), S.return = A, S) : (S = a(S, R), S.return = A, S);
    }
    function v(A, S, R, w) {
      var $ = R.type;
      return $ === N ? M(
        A,
        S,
        R.props.children,
        w,
        R.key
      ) : S !== null && (S.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === _t && Fl($) === S.type) ? (S = a(S, R.props), va(S, R), S.return = A, S) : (S = Au(
        R.type,
        R.key,
        R.props,
        null,
        A.mode,
        w
      ), va(S, R), S.return = A, S);
    }
    function O(A, S, R, w) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== R.containerInfo || S.stateNode.implementation !== R.implementation ? (S = bc(R, A.mode, w), S.return = A, S) : (S = a(S, R.children || []), S.return = A, S);
    }
    function M(A, S, R, w, $) {
      return S === null || S.tag !== 7 ? (S = Zl(
        R,
        A.mode,
        w,
        $
      ), S.return = A, S) : (S = a(S, R), S.return = A, S);
    }
    function H(A, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return S = gc(
          "" + S,
          A.mode,
          R
        ), S.return = A, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case z:
            return R = Au(
              S.type,
              S.key,
              S.props,
              null,
              A.mode,
              R
            ), va(R, S), R.return = A, R;
          case L:
            return S = bc(
              S,
              A.mode,
              R
            ), S.return = A, S;
          case _t:
            return S = Fl(S), H(A, S, R);
        }
        if (G(S) || It(S))
          return S = Zl(
            S,
            A.mode,
            R,
            null
          ), S.return = A, S;
        if (typeof S.then == "function")
          return H(A, Uu(S), R);
        if (S.$$typeof === I)
          return H(
            A,
            _u(A, S),
            R
          );
        Du(A, S);
      }
      return null;
    }
    function _(A, S, R, w) {
      var $ = S !== null ? S.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return $ !== null ? null : h(A, S, "" + R, w);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            return R.key === $ ? v(A, S, R, w) : null;
          case L:
            return R.key === $ ? O(A, S, R, w) : null;
          case _t:
            return R = Fl(R), _(A, S, R, w);
        }
        if (G(R) || It(R))
          return $ !== null ? null : M(A, S, R, w, null);
        if (typeof R.then == "function")
          return _(
            A,
            S,
            Uu(R),
            w
          );
        if (R.$$typeof === I)
          return _(
            A,
            S,
            _u(A, R),
            w
          );
        Du(A, R);
      }
      return null;
    }
    function x(A, S, R, w, $) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return A = A.get(R) || null, h(S, A, "" + w, $);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case z:
            return A = A.get(
              w.key === null ? R : w.key
            ) || null, v(S, A, w, $);
          case L:
            return A = A.get(
              w.key === null ? R : w.key
            ) || null, O(S, A, w, $);
          case _t:
            return w = Fl(w), x(
              A,
              S,
              R,
              w,
              $
            );
        }
        if (G(w) || It(w))
          return A = A.get(R) || null, M(S, A, w, $, null);
        if (typeof w.then == "function")
          return x(
            A,
            S,
            R,
            Uu(w),
            $
          );
        if (w.$$typeof === I)
          return x(
            A,
            S,
            R,
            _u(S, w),
            $
          );
        Du(S, w);
      }
      return null;
    }
    function Z(A, S, R, w) {
      for (var $ = null, mt = null, k = S, nt = S = 0, ot = null; k !== null && nt < R.length; nt++) {
        k.index > nt ? (ot = k, k = null) : ot = k.sibling;
        var yt = _(
          A,
          k,
          R[nt],
          w
        );
        if (yt === null) {
          k === null && (k = ot);
          break;
        }
        t && k && yt.alternate === null && e(A, k), S = i(yt, S, nt), mt === null ? $ = yt : mt.sibling = yt, mt = yt, k = ot;
      }
      if (nt === R.length)
        return l(A, k), st && Fe(A, nt), $;
      if (k === null) {
        for (; nt < R.length; nt++)
          k = H(A, R[nt], w), k !== null && (S = i(
            k,
            S,
            nt
          ), mt === null ? $ = k : mt.sibling = k, mt = k);
        return st && Fe(A, nt), $;
      }
      for (k = n(k); nt < R.length; nt++)
        ot = x(
          k,
          A,
          nt,
          R[nt],
          w
        ), ot !== null && (t && ot.alternate !== null && k.delete(
          ot.key === null ? nt : ot.key
        ), S = i(
          ot,
          S,
          nt
        ), mt === null ? $ = ot : mt.sibling = ot, mt = ot);
      return t && k.forEach(function(Ll) {
        return e(A, Ll);
      }), st && Fe(A, nt), $;
    }
    function W(A, S, R, w) {
      if (R == null) throw Error(r(151));
      for (var $ = null, mt = null, k = S, nt = S = 0, ot = null, yt = R.next(); k !== null && !yt.done; nt++, yt = R.next()) {
        k.index > nt ? (ot = k, k = null) : ot = k.sibling;
        var Ll = _(A, k, yt.value, w);
        if (Ll === null) {
          k === null && (k = ot);
          break;
        }
        t && k && Ll.alternate === null && e(A, k), S = i(Ll, S, nt), mt === null ? $ = Ll : mt.sibling = Ll, mt = Ll, k = ot;
      }
      if (yt.done)
        return l(A, k), st && Fe(A, nt), $;
      if (k === null) {
        for (; !yt.done; nt++, yt = R.next())
          yt = H(A, yt.value, w), yt !== null && (S = i(yt, S, nt), mt === null ? $ = yt : mt.sibling = yt, mt = yt);
        return st && Fe(A, nt), $;
      }
      for (k = n(k); !yt.done; nt++, yt = R.next())
        yt = x(k, A, nt, yt.value, w), yt !== null && (t && yt.alternate !== null && k.delete(yt.key === null ? nt : yt.key), S = i(yt, S, nt), mt === null ? $ = yt : mt.sibling = yt, mt = yt);
      return t && k.forEach(function(Up) {
        return e(A, Up);
      }), st && Fe(A, nt), $;
    }
    function At(A, S, R, w) {
      if (typeof R == "object" && R !== null && R.type === N && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            t: {
              for (var $ = R.key; S !== null; ) {
                if (S.key === $) {
                  if ($ = R.type, $ === N) {
                    if (S.tag === 7) {
                      l(
                        A,
                        S.sibling
                      ), w = a(
                        S,
                        R.props.children
                      ), w.return = A, A = w;
                      break t;
                    }
                  } else if (S.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === _t && Fl($) === S.type) {
                    l(
                      A,
                      S.sibling
                    ), w = a(S, R.props), va(w, R), w.return = A, A = w;
                    break t;
                  }
                  l(A, S);
                  break;
                } else e(A, S);
                S = S.sibling;
              }
              R.type === N ? (w = Zl(
                R.props.children,
                A.mode,
                w,
                R.key
              ), w.return = A, A = w) : (w = Au(
                R.type,
                R.key,
                R.props,
                null,
                A.mode,
                w
              ), va(w, R), w.return = A, A = w);
            }
            return s(A);
          case L:
            t: {
              for ($ = R.key; S !== null; ) {
                if (S.key === $)
                  if (S.tag === 4 && S.stateNode.containerInfo === R.containerInfo && S.stateNode.implementation === R.implementation) {
                    l(
                      A,
                      S.sibling
                    ), w = a(S, R.children || []), w.return = A, A = w;
                    break t;
                  } else {
                    l(A, S);
                    break;
                  }
                else e(A, S);
                S = S.sibling;
              }
              w = bc(R, A.mode, w), w.return = A, A = w;
            }
            return s(A);
          case _t:
            return R = Fl(R), At(
              A,
              S,
              R,
              w
            );
        }
        if (G(R))
          return Z(
            A,
            S,
            R,
            w
          );
        if (It(R)) {
          if ($ = It(R), typeof $ != "function") throw Error(r(150));
          return R = $.call(R), W(
            A,
            S,
            R,
            w
          );
        }
        if (typeof R.then == "function")
          return At(
            A,
            S,
            Uu(R),
            w
          );
        if (R.$$typeof === I)
          return At(
            A,
            S,
            _u(A, R),
            w
          );
        Du(A, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, S !== null && S.tag === 6 ? (l(A, S.sibling), w = a(S, R), w.return = A, A = w) : (l(A, S), w = gc(R, A.mode, w), w.return = A, A = w), s(A)) : l(A, S);
    }
    return function(A, S, R, w) {
      try {
        pa = 0;
        var $ = At(
          A,
          S,
          R,
          w
        );
        return xn = null, $;
      } catch (k) {
        if (k === Cn || k === Cu) throw k;
        var mt = ge(29, k, null, A.mode);
        return mt.lanes = w, mt.return = A, mt;
      }
    };
  }
  var Il = Jo(!0), ko = Jo(!1), Sl = !1;
  function Dc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Mc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function El(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(t, e, l) {
    var n = t.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (pt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Tu(t), Do(t, null, l), e;
    }
    return Eu(t, n, e, l), Tu(t);
  }
  function ga(t, e, l) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, jr(t, l);
    }
  }
  function Nc(t, e) {
    var l = t.updateQueue, n = t.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var s = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = s : i = i.next = s, l = l.next;
        } while (l !== null);
        i === null ? a = i = e : i = i.next = e;
      } else a = i = e;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, t.updateQueue = l;
      return;
    }
    t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
  }
  var wc = !1;
  function ba() {
    if (wc) {
      var t = zn;
      if (t !== null) throw t;
    }
  }
  function Sa(t, e, l, n) {
    wc = !1;
    var a = t.updateQueue;
    Sl = !1;
    var i = a.firstBaseUpdate, s = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var v = h, O = v.next;
      v.next = null, s === null ? i = O : s.next = O, s = v;
      var M = t.alternate;
      M !== null && (M = M.updateQueue, h = M.lastBaseUpdate, h !== s && (h === null ? M.firstBaseUpdate = O : h.next = O, M.lastBaseUpdate = v));
    }
    if (i !== null) {
      var H = a.baseState;
      s = 0, M = O = v = null, h = i;
      do {
        var _ = h.lane & -536870913, x = _ !== h.lane;
        if (x ? (rt & _) === _ : (n & _) === _) {
          _ !== 0 && _ === _n && (wc = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var Z = t, W = h;
            _ = e;
            var At = l;
            switch (W.tag) {
              case 1:
                if (Z = W.payload, typeof Z == "function") {
                  H = Z.call(At, H, _);
                  break t;
                }
                H = Z;
                break t;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = W.payload, _ = typeof Z == "function" ? Z.call(At, H, _) : Z, _ == null) break t;
                H = D({}, H, _);
                break t;
              case 2:
                Sl = !0;
            }
          }
          _ = h.callback, _ !== null && (t.flags |= 64, x && (t.flags |= 8192), x = a.callbacks, x === null ? a.callbacks = [_] : x.push(_));
        } else
          x = {
            lane: _,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, M === null ? (O = M = x, v = H) : M = M.next = x, s |= _;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null)
            break;
          x = h, h = x.next, x.next = null, a.lastBaseUpdate = x, a.shared.pending = null;
        }
      } while (!0);
      M === null && (v = H), a.baseState = v, a.firstBaseUpdate = O, a.lastBaseUpdate = M, i === null && (a.shared.lanes = 0), zl |= s, t.lanes = s, t.memoizedState = H;
    }
  }
  function $o(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Fo(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        $o(l[t], e);
  }
  var Un = E(null), Mu = E(0);
  function Wo(t, e) {
    t = cl, V(Mu, t), V(Un, e), cl = t | e.baseLanes;
  }
  function Hc() {
    V(Mu, cl), V(Un, Un.current);
  }
  function Bc() {
    cl = Mu.current, B(Un), B(Mu);
  }
  var be = E(null), De = null;
  function Al(t) {
    var e = t.alternate;
    V(Ht, Ht.current & 1), V(be, t), De === null && (e === null || Un.current !== null || e.memoizedState !== null) && (De = t);
  }
  function Lc(t) {
    V(Ht, Ht.current), V(be, t), De === null && (De = t);
  }
  function Io(t) {
    t.tag === 22 ? (V(Ht, Ht.current), V(be, t), De === null && (De = t)) : Rl();
  }
  function Rl() {
    V(Ht, Ht.current), V(be, be.current);
  }
  function Se(t) {
    B(be), De === t && (De = null), B(Ht);
  }
  var Ht = E(0);
  function Nu(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Vf(l) || Zf(l)))
          return e;
      } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Pe = 0, et = null, Et = null, qt = null, wu = !1, Dn = !1, Pl = !1, Hu = 0, Ea = 0, Mn = null, S0 = 0;
  function Mt() {
    throw Error(r(321));
  }
  function jc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ve(t[l], e[l])) return !1;
    return !0;
  }
  function qc(t, e, l, n, a, i) {
    return Pe = i, et = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, j.H = t === null || t.memoizedState === null ? Hs : tf, Pl = !1, i = l(n, a), Pl = !1, Dn && (i = ts(
      e,
      l,
      n,
      a
    )), Po(t), i;
  }
  function Po(t) {
    j.H = Ra;
    var e = Et !== null && Et.next !== null;
    if (Pe = 0, qt = Et = et = null, wu = !1, Ea = 0, Mn = null, e) throw Error(r(300));
    t === null || Yt || (t = t.dependencies, t !== null && Ou(t) && (Yt = !0));
  }
  function ts(t, e, l, n) {
    et = t;
    var a = 0;
    do {
      if (Dn && (Mn = null), Ea = 0, Dn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, qt = Et = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      j.H = Bs, i = e(l, n);
    } while (Dn);
    return i;
  }
  function E0() {
    var t = j.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ta(e) : e, t = t.useState()[0], (Et !== null ? Et.memoizedState : null) !== t && (et.flags |= 1024), e;
  }
  function Yc() {
    var t = Hu !== 0;
    return Hu = 0, t;
  }
  function Gc(t, e, l) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
  }
  function Xc(t) {
    if (wu) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      wu = !1;
    }
    Pe = 0, qt = Et = et = null, Dn = !1, Ea = Hu = 0, Mn = null;
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return qt === null ? et.memoizedState = qt = t : qt = qt.next = t, qt;
  }
  function Bt() {
    if (Et === null) {
      var t = et.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Et.next;
    var e = qt === null ? et.memoizedState : qt.next;
    if (e !== null)
      qt = e, Et = t;
    else {
      if (t === null)
        throw et.alternate === null ? Error(r(467)) : Error(r(310));
      Et = t, t = {
        memoizedState: Et.memoizedState,
        baseState: Et.baseState,
        baseQueue: Et.baseQueue,
        queue: Et.queue,
        next: null
      }, qt === null ? et.memoizedState = qt = t : qt = qt.next = t;
    }
    return qt;
  }
  function Bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ta(t) {
    var e = Ea;
    return Ea += 1, Mn === null && (Mn = []), t = Vo(Mn, t, e), e = et, (qt === null ? e.memoizedState : qt.next) === null && (e = e.alternate, j.H = e === null || e.memoizedState === null ? Hs : tf), t;
  }
  function Lu(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ta(t);
      if (t.$$typeof === I) return $t(t);
    }
    throw Error(r(438, String(t)));
  }
  function Qc(t) {
    var e = null, l = et.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = et.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Bu(), et.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = Ye;
    return e.index++, l;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ju(t) {
    var e = Bt();
    return Vc(e, Et, t);
  }
  function Vc(t, e, l) {
    var n = t.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = l;
    var a = t.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = i.next, i.next = s;
      }
      e.baseQueue = a = i, n.pending = null;
    }
    if (i = t.baseState, a === null) t.memoizedState = i;
    else {
      e = a.next;
      var h = s = null, v = null, O = e, M = !1;
      do {
        var H = O.lane & -536870913;
        if (H !== O.lane ? (rt & H) === H : (Pe & H) === H) {
          var _ = O.revertLane;
          if (_ === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), H === _n && (M = !0);
          else if ((Pe & _) === _) {
            O = O.next, _ === _n && (M = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, v === null ? (h = v = H, s = i) : v = v.next = H, et.lanes |= _, zl |= _;
          H = O.action, Pl && l(i, H), i = O.hasEagerState ? O.eagerState : l(i, H);
        } else
          _ = {
            lane: H,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, v === null ? (h = v = _, s = i) : v = v.next = _, et.lanes |= H, zl |= H;
        O = O.next;
      } while (O !== null && O !== e);
      if (v === null ? s = i : v.next = h, !ve(i, t.memoizedState) && (Yt = !0, M && (l = zn, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = s, t.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Zc(t) {
    var e = Bt(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var s = a = a.next;
      do
        i = t(i, s.action), s = s.next;
      while (s !== a);
      ve(i, e.memoizedState) || (Yt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function es(t, e, l) {
    var n = et, a = Bt(), i = st;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var s = !ve(
      (Et || a).memoizedState,
      l
    );
    if (s && (a.memoizedState = l, Yt = !0), a = a.queue, kc(as.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || s || qt !== null && qt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Nn(
        9,
        { destroy: void 0 },
        ns.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), Ot === null) throw Error(r(349));
      i || (Pe & 127) !== 0 || ls(n, e, l);
    }
    return l;
  }
  function ls(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = et.updateQueue, e === null ? (e = Bu(), et.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function ns(t, e, l, n) {
    e.value = l, e.getSnapshot = n, us(e) && is(t);
  }
  function as(t, e, l) {
    return l(function() {
      us(e) && is(t);
    });
  }
  function us(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ve(t, l);
    } catch {
      return !0;
    }
  }
  function is(t) {
    var e = Vl(t, 2);
    e !== null && se(e, t, 2);
  }
  function Kc(t) {
    var e = le();
    if (typeof t == "function") {
      var l = t;
      if (t = l(), Pl) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: tl,
      lastRenderedState: t
    }, e;
  }
  function cs(t, e, l, n) {
    return t.baseState = l, Vc(
      t,
      Et,
      typeof n == "function" ? n : tl
    );
  }
  function T0(t, e, l, n, a) {
    if (Gu(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var i = {
        payload: a,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          i.listeners.push(s);
        }
      };
      j.T !== null ? l(!0) : i.isTransition = !1, n(i), l = e.pending, l === null ? (i.next = e.pending = i, fs(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function fs(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var i = j.T, s = {};
      j.T = s;
      try {
        var h = l(a, n), v = j.S;
        v !== null && v(s, h), rs(t, e, h);
      } catch (O) {
        Jc(t, e, O);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), j.T = i;
      }
    } else
      try {
        i = l(a, n), rs(t, e, i);
      } catch (O) {
        Jc(t, e, O);
      }
  }
  function rs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        os(t, e, n);
      },
      function(n) {
        return Jc(t, e, n);
      }
    ) : os(t, e, l);
  }
  function os(t, e, l) {
    e.status = "fulfilled", e.value = l, ss(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, fs(t, l)));
  }
  function Jc(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, ss(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function ss(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ds(t, e) {
    return e;
  }
  function hs(t, e) {
    if (st) {
      var l = Ot.formState;
      if (l !== null) {
        t: {
          var n = et;
          if (st) {
            if (zt) {
              e: {
                for (var a = zt, i = Ue; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break e;
                  }
                  if (a = Me(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break e;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                zt = Me(
                  a.nextSibling
                ), n = a.data === "F!";
                break t;
              }
            }
            gl(n);
          }
          n = !1;
        }
        n && (e = l[0]);
      }
    }
    return l = le(), l.memoizedState = l.baseState = e, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ds,
      lastRenderedState: e
    }, l.queue = n, l = Ms.bind(
      null,
      et,
      n
    ), n.dispatch = l, n = Kc(!1), i = Pc.bind(
      null,
      et,
      !1,
      n.queue
    ), n = le(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = T0.bind(
      null,
      et,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function ms(t) {
    var e = Bt();
    return ys(e, Et, t);
  }
  function ys(t, e, l) {
    if (e = Vc(
      t,
      e,
      ds
    )[0], t = ju(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Ta(e);
      } catch (s) {
        throw s === Cn ? Cu : s;
      }
    else n = e;
    e = Bt();
    var a = e.queue, i = a.dispatch;
    return l !== e.memoizedState && (et.flags |= 2048, Nn(
      9,
      { destroy: void 0 },
      A0.bind(null, a, l),
      null
    )), [n, i, t];
  }
  function A0(t, e) {
    t.action = e;
  }
  function ps(t) {
    var e = Bt(), l = Et;
    if (l !== null)
      return ys(e, l, t);
    Bt(), e = e.memoizedState, l = Bt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Nn(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = et.updateQueue, e === null && (e = Bu(), et.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function vs() {
    return Bt().memoizedState;
  }
  function qu(t, e, l, n) {
    var a = le();
    et.flags |= t, a.memoizedState = Nn(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Yu(t, e, l, n) {
    var a = Bt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Et !== null && n !== null && jc(n, Et.memoizedState.deps) ? a.memoizedState = Nn(e, i, l, n) : (et.flags |= t, a.memoizedState = Nn(
      1 | e,
      i,
      l,
      n
    ));
  }
  function gs(t, e) {
    qu(8390656, 8, t, e);
  }
  function kc(t, e) {
    Yu(2048, 8, t, e);
  }
  function R0(t) {
    et.flags |= 4;
    var e = et.updateQueue;
    if (e === null)
      e = Bu(), et.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function bs(t) {
    var e = Bt().memoizedState;
    return R0({ ref: e, nextImpl: t }), function() {
      if ((pt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Ss(t, e) {
    return Yu(4, 2, t, e);
  }
  function Es(t, e) {
    return Yu(4, 4, t, e);
  }
  function Ts(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function() {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function As(t, e, l) {
    l = l != null ? l.concat([t]) : null, Yu(4, 4, Ts.bind(null, e, t), l);
  }
  function $c() {
  }
  function Rs(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && jc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function Os(t, e) {
    var l = Bt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && jc(e, n[1]))
      return n[0];
    if (n = t(), Pl) {
      hl(!0);
      try {
        t();
      } finally {
        hl(!1);
      }
    }
    return l.memoizedState = [n, e], n;
  }
  function Fc(t, e, l) {
    return l === void 0 || (Pe & 1073741824) !== 0 && (rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = _d(), et.lanes |= t, zl |= t, l);
  }
  function _s(t, e, l, n) {
    return ve(l, e) ? l : Un.current !== null ? (t = Fc(t, l, n), ve(t, e) || (Yt = !0), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (rt & 261930) === 0 ? (Yt = !0, t.memoizedState = l) : (t = _d(), et.lanes |= t, zl |= t, e);
  }
  function zs(t, e, l, n, a) {
    var i = X.p;
    X.p = i !== 0 && 8 > i ? i : 8;
    var s = j.T, h = {};
    j.T = h, Pc(t, !1, e, l);
    try {
      var v = a(), O = j.S;
      if (O !== null && O(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var M = b0(
          v,
          n
        );
        Aa(
          t,
          e,
          M,
          Ae(t)
        );
      } else
        Aa(
          t,
          e,
          n,
          Ae(t)
        );
    } catch (H) {
      Aa(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: H },
        Ae()
      );
    } finally {
      X.p = i, s !== null && h.types !== null && (s.types = h.types), j.T = s;
    }
  }
  function O0() {
  }
  function Wc(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = Cs(t).queue;
    zs(
      t,
      a,
      e,
      ht,
      l === null ? O0 : function() {
        return xs(t), l(n);
      }
    );
  }
  function Cs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ht,
      baseState: ht,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: ht
      },
      next: null
    };
    var l = {};
    return e.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: l
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function xs(t) {
    var e = Cs(t);
    e.next === null && (e = t.alternate.memoizedState), Aa(
      t,
      e.next.queue,
      {},
      Ae()
    );
  }
  function Ic() {
    return $t(Ya);
  }
  function Us() {
    return Bt().memoizedState;
  }
  function Ds() {
    return Bt().memoizedState;
  }
  function _0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = Ae();
          t = El(l);
          var n = Tl(e, t, l);
          n !== null && (se(n, e, l), ga(n, e, l)), e = { cache: zc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function z0(t, e, l) {
    var n = Ae();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gu(t) ? Ns(e, l) : (l = pc(t, e, l, n), l !== null && (se(l, t, n), ws(l, e, n)));
  }
  function Ms(t, e, l) {
    var n = Ae();
    Aa(t, e, l, n);
  }
  function Aa(t, e, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Gu(t)) Ns(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var s = e.lastRenderedState, h = i(s, l);
          if (a.hasEagerState = !0, a.eagerState = h, ve(h, s))
            return Eu(t, e, a, 0), Ot === null && Su(), !1;
        } catch {
        }
      if (l = pc(t, e, a, n), l !== null)
        return se(l, t, n), ws(l, e, n), !0;
    }
    return !1;
  }
  function Pc(t, e, l, n) {
    if (n = {
      lane: 2,
      revertLane: Mf(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gu(t)) {
      if (e) throw Error(r(479));
    } else
      e = pc(
        t,
        l,
        n,
        2
      ), e !== null && se(e, t, 2);
  }
  function Gu(t) {
    var e = t.alternate;
    return t === et || e !== null && e === et;
  }
  function Ns(t, e) {
    Dn = wu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function ws(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, jr(t, l);
    }
  }
  var Ra = {
    readContext: $t,
    use: Lu,
    useCallback: Mt,
    useContext: Mt,
    useEffect: Mt,
    useImperativeHandle: Mt,
    useLayoutEffect: Mt,
    useInsertionEffect: Mt,
    useMemo: Mt,
    useReducer: Mt,
    useRef: Mt,
    useState: Mt,
    useDebugValue: Mt,
    useDeferredValue: Mt,
    useTransition: Mt,
    useSyncExternalStore: Mt,
    useId: Mt,
    useHostTransitionStatus: Mt,
    useFormState: Mt,
    useActionState: Mt,
    useOptimistic: Mt,
    useMemoCache: Mt,
    useCacheRefresh: Mt
  };
  Ra.useEffectEvent = Mt;
  var Hs = {
    readContext: $t,
    use: Lu,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: $t,
    useEffect: gs,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, qu(
        4194308,
        4,
        Ts.bind(null, e, t),
        l
      );
    },
    useLayoutEffect: function(t, e) {
      return qu(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      qu(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var l = le();
      e = e === void 0 ? null : e;
      var n = t();
      if (Pl) {
        hl(!0);
        try {
          t();
        } finally {
          hl(!1);
        }
      }
      return l.memoizedState = [n, e], n;
    },
    useReducer: function(t, e, l) {
      var n = le();
      if (l !== void 0) {
        var a = l(e);
        if (Pl) {
          hl(!0);
          try {
            l(e);
          } finally {
            hl(!1);
          }
        }
      } else a = e;
      return n.memoizedState = n.baseState = a, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: a
      }, n.queue = t, t = t.dispatch = z0.bind(
        null,
        et,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = le();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Kc(t);
      var e = t.queue, l = Ms.bind(null, et, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: $c,
    useDeferredValue: function(t, e) {
      var l = le();
      return Fc(l, t, e);
    },
    useTransition: function() {
      var t = Kc(!1);
      return t = zs.bind(
        null,
        et,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = et, a = le();
      if (st) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), Ot === null)
          throw Error(r(349));
        (rt & 127) !== 0 || ls(n, e, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return a.queue = i, gs(as.bind(null, n, i, t), [
        t
      ]), n.flags |= 2048, Nn(
        9,
        { destroy: void 0 },
        ns.bind(
          null,
          n,
          i,
          l,
          e
        ),
        null
      ), l;
    },
    useId: function() {
      var t = le(), e = Ot.identifierPrefix;
      if (st) {
        var l = Xe, n = Ge;
        l = (n & ~(1 << 32 - pe(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Hu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = S0++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ic,
    useFormState: hs,
    useActionState: hs,
    useOptimistic: function(t) {
      var e = le();
      e.memoizedState = e.baseState = t;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = l, e = Pc.bind(
        null,
        et,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Qc,
    useCacheRefresh: function() {
      return le().memoizedState = _0.bind(
        null,
        et
      );
    },
    useEffectEvent: function(t) {
      var e = le(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((pt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, tf = {
    readContext: $t,
    use: Lu,
    useCallback: Rs,
    useContext: $t,
    useEffect: kc,
    useImperativeHandle: As,
    useInsertionEffect: Ss,
    useLayoutEffect: Es,
    useMemo: Os,
    useReducer: ju,
    useRef: vs,
    useState: function() {
      return ju(tl);
    },
    useDebugValue: $c,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return _s(
        l,
        Et.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ju(tl)[0], e = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ta(t),
        e
      ];
    },
    useSyncExternalStore: es,
    useId: Us,
    useHostTransitionStatus: Ic,
    useFormState: ms,
    useActionState: ms,
    useOptimistic: function(t, e) {
      var l = Bt();
      return cs(l, Et, t, e);
    },
    useMemoCache: Qc,
    useCacheRefresh: Ds
  };
  tf.useEffectEvent = bs;
  var Bs = {
    readContext: $t,
    use: Lu,
    useCallback: Rs,
    useContext: $t,
    useEffect: kc,
    useImperativeHandle: As,
    useInsertionEffect: Ss,
    useLayoutEffect: Es,
    useMemo: Os,
    useReducer: Zc,
    useRef: vs,
    useState: function() {
      return Zc(tl);
    },
    useDebugValue: $c,
    useDeferredValue: function(t, e) {
      var l = Bt();
      return Et === null ? Fc(l, t, e) : _s(
        l,
        Et.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Zc(tl)[0], e = Bt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ta(t),
        e
      ];
    },
    useSyncExternalStore: es,
    useId: Us,
    useHostTransitionStatus: Ic,
    useFormState: ps,
    useActionState: ps,
    useOptimistic: function(t, e) {
      var l = Bt();
      return Et !== null ? cs(l, Et, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Qc,
    useCacheRefresh: Ds
  };
  Bs.useEffectEvent = bs;
  function ef(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : D({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
  }
  var lf = {
    enqueueSetState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ae(), a = El(n);
      a.payload = e, l != null && (a.callback = l), e = Tl(t, a, n), e !== null && (se(e, t, n), ga(e, t, n));
    },
    enqueueReplaceState: function(t, e, l) {
      t = t._reactInternals;
      var n = Ae(), a = El(n);
      a.tag = 1, a.payload = e, l != null && (a.callback = l), e = Tl(t, a, n), e !== null && (se(e, t, n), ga(e, t, n));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var l = Ae(), n = El(l);
      n.tag = 2, e != null && (n.callback = e), e = Tl(t, n, l), e !== null && (se(e, t, l), ga(e, t, l));
    }
  };
  function Ls(t, e, l, n, a, i, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(n, i, s) : e.prototype && e.prototype.isPureReactComponent ? !oa(l, n) || !oa(a, i) : !0;
  }
  function js(t, e, l, n) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, n), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, n), e.state !== t && lf.enqueueReplaceState(e, e.state, null);
  }
  function tn(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var n in e)
        n !== "ref" && (l[n] = e[n]);
    }
    if (t = t.defaultProps) {
      l === e && (l = D({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function qs(t) {
    bu(t);
  }
  function Ys(t) {
    console.error(t);
  }
  function Gs(t) {
    bu(t);
  }
  function Xu(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Xs(t, e, l) {
    try {
      var n = t.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function nf(t, e, l) {
    return l = El(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Xu(t, e);
    }, l;
  }
  function Qs(t) {
    return t = El(t), t.tag = 3, t;
  }
  function Vs(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      t.payload = function() {
        return a(i);
      }, t.callback = function() {
        Xs(e, l, n);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Xs(e, l, n), typeof a != "function" && (Cl === null ? Cl = /* @__PURE__ */ new Set([this]) : Cl.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function C0(t, e, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (e = l.alternate, e !== null && On(
        e,
        l,
        a,
        !0
      ), l = be.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return De === null ? ti() : l.alternate === null && Nt === 0 && (Nt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === xu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), xf(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === xu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), xf(t, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return xf(t, n, a), ti(), !1;
    }
    if (st)
      return e = be.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Tc && (t = Error(r(422), { cause: n }), ha(ze(t, l)))) : (n !== Tc && (e = Error(r(423), {
        cause: n
      }), ha(
        ze(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = ze(n, l), a = nf(
        t.stateNode,
        n,
        a
      ), Nc(t, a), Nt !== 4 && (Nt = 2)), !1;
    var i = Error(r(520), { cause: n });
    if (i = ze(i, l), Ma === null ? Ma = [i] : Ma.push(i), Nt !== 4 && (Nt = 2), e === null) return !0;
    n = ze(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = nf(l.stateNode, n, t), Nc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Cl === null || !Cl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Qs(a), Vs(
              a,
              t,
              l,
              n
            ), Nc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var af = Error(r(461)), Yt = !1;
  function Ft(t, e, l, n) {
    e.child = t === null ? ko(e, null, l, n) : Il(
      e,
      t.child,
      l,
      n
    );
  }
  function Zs(t, e, l, n, a) {
    l = l.render;
    var i = e.ref;
    if ("ref" in n) {
      var s = {};
      for (var h in n)
        h !== "ref" && (s[h] = n[h]);
    } else s = n;
    return kl(e), n = qc(
      t,
      e,
      l,
      s,
      i,
      a
    ), h = Yc(), t !== null && !Yt ? (Gc(t, e, a), el(t, e, a)) : (st && h && Sc(e), e.flags |= 1, Ft(t, e, n, a), e.child);
  }
  function Ks(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !vc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, Js(
        t,
        e,
        i,
        n,
        a
      )) : (t = Au(
        l.type,
        null,
        n,
        e,
        e.mode,
        a
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (i = t.child, !hf(t, a)) {
      var s = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : oa, l(s, n) && t.ref === e.ref)
        return el(t, e, a);
    }
    return e.flags |= 1, t = $e(i, n), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Js(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (oa(i, n) && t.ref === e.ref)
        if (Yt = !1, e.pendingProps = n = i, hf(t, a))
          (t.flags & 131072) !== 0 && (Yt = !0);
        else
          return e.lanes = t.lanes, el(t, e, a);
    }
    return uf(
      t,
      e,
      l,
      n,
      a
    );
  }
  function ks(t, e, l, n) {
    var a = n.children, i = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, t !== null) {
          for (n = e.child = t.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, e.child = null;
        return $s(
          t,
          e,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && zu(
          e,
          i !== null ? i.cachePool : null
        ), i !== null ? Wo(e, i) : Hc(), Io(e);
      else
        return n = e.lanes = 536870912, $s(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (zu(e, i.cachePool), Wo(e, i), Rl(), e.memoizedState = null) : (t !== null && zu(e, null), Hc(), Rl());
    return Ft(t, e, a, l), e.child;
  }
  function Oa(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function $s(t, e, l, n, a) {
    var i = xc();
    return i = i === null ? null : { parent: jt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && zu(e, null), Hc(), Io(e), t !== null && On(t, e, n, !0), e.childLanes = a, null;
  }
  function Qu(t, e) {
    return e = Zu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Fs(t, e, l) {
    return Il(e, t.child, null, l), t = Qu(e, e.pendingProps), t.flags |= 2, Se(e), e.memoizedState = null, t;
  }
  function x0(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (st) {
        if (n.mode === "hidden")
          return t = Qu(e, n), e.lanes = 536870912, Oa(null, t);
        if (Lc(e), (t = zt) ? (t = fh(
          t,
          Ue
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Ge, overflow: Xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = No(t), l.return = e, e.child = l, kt = e, zt = null)) : t = null, t === null) throw gl(e);
        return e.lanes = 536870912, null;
      }
      return Qu(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (Lc(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = Fs(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Yt || On(t, e, l, !1), a = (l & t.childLanes) !== 0, Yt || a) {
        if (n = Ot, n !== null && (s = qr(n, l), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, Vl(t, s), se(n, t, s), af;
        ti(), e = Fs(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, zt = Me(s.nextSibling), kt = e, st = !0, vl = null, Ue = !1, t !== null && Bo(e, t), e = Qu(e, n), e.flags |= 4096;
      return e;
    }
    return t = $e(t.child, {
      mode: n.mode,
      children: n.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Vu(t, e) {
    var l = e.ref;
    if (l === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(r(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function uf(t, e, l, n, a) {
    return kl(e), l = qc(
      t,
      e,
      l,
      n,
      void 0,
      a
    ), n = Yc(), t !== null && !Yt ? (Gc(t, e, a), el(t, e, a)) : (st && n && Sc(e), e.flags |= 1, Ft(t, e, l, a), e.child);
  }
  function Ws(t, e, l, n, a, i) {
    return kl(e), e.updateQueue = null, l = ts(
      e,
      n,
      l,
      a
    ), Po(t), n = Yc(), t !== null && !Yt ? (Gc(t, e, i), el(t, e, i)) : (st && n && Sc(e), e.flags |= 1, Ft(t, e, l, i), e.child);
  }
  function Is(t, e, l, n, a) {
    if (kl(e), e.stateNode === null) {
      var i = En, s = l.contextType;
      typeof s == "object" && s !== null && (i = $t(s)), i = new l(n, i), e.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = lf, e.stateNode = i, i._reactInternals = e, i = e.stateNode, i.props = n, i.state = e.memoizedState, i.refs = {}, Dc(e), s = l.contextType, i.context = typeof s == "object" && s !== null ? $t(s) : En, i.state = e.memoizedState, s = l.getDerivedStateFromProps, typeof s == "function" && (ef(
        e,
        l,
        s,
        n
      ), i.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && lf.enqueueReplaceState(i, i.state, null), Sa(e, n, i, a), ba(), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !0;
    } else if (t === null) {
      i = e.stateNode;
      var h = e.memoizedProps, v = tn(l, h);
      i.props = v;
      var O = i.context, M = l.contextType;
      s = En, typeof M == "object" && M !== null && (s = $t(M));
      var H = l.getDerivedStateFromProps;
      M = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || O !== s) && js(
        e,
        i,
        n,
        s
      ), Sl = !1;
      var _ = e.memoizedState;
      i.state = _, Sa(e, n, i, a), ba(), O = e.memoizedState, h || _ !== O || Sl ? (typeof H == "function" && (ef(
        e,
        l,
        H,
        n
      ), O = e.memoizedState), (v = Sl || Ls(
        e,
        l,
        v,
        n,
        _,
        O,
        s
      )) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = O), i.props = n, i.state = O, i.context = s, n = v) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      i = e.stateNode, Mc(t, e), s = e.memoizedProps, M = tn(l, s), i.props = M, H = e.pendingProps, _ = i.context, O = l.contextType, v = En, typeof O == "object" && O !== null && (v = $t(O)), h = l.getDerivedStateFromProps, (O = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== H || _ !== v) && js(
        e,
        i,
        n,
        v
      ), Sl = !1, _ = e.memoizedState, i.state = _, Sa(e, n, i, a), ba();
      var x = e.memoizedState;
      s !== H || _ !== x || Sl || t !== null && t.dependencies !== null && Ou(t.dependencies) ? (typeof h == "function" && (ef(
        e,
        l,
        h,
        n
      ), x = e.memoizedState), (M = Sl || Ls(
        e,
        l,
        M,
        n,
        _,
        x,
        v
      ) || t !== null && t.dependencies !== null && Ou(t.dependencies)) ? (O || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, x, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        x,
        v
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = x), i.props = n, i.state = x, i.context = v, n = M) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), n = !1);
    }
    return i = n, Vu(t, e), n = (e.flags & 128) !== 0, i || n ? (i = e.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), e.flags |= 1, t !== null && n ? (e.child = Il(
      e,
      t.child,
      null,
      a
    ), e.child = Il(
      e,
      null,
      l,
      a
    )) : Ft(t, e, l, a), e.memoizedState = i.state, t = e.child) : t = el(
      t,
      e,
      a
    ), t;
  }
  function Ps(t, e, l, n) {
    return Kl(), e.flags |= 256, Ft(t, e, l, n), e.child;
  }
  var cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ff(t) {
    return { baseLanes: t, cachePool: Xo() };
  }
  function rf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Te), t;
  }
  function td(t, e, l) {
    var n = e.pendingProps, a = !1, i = (e.flags & 128) !== 0, s;
    if ((s = i) || (s = t !== null && t.memoizedState === null ? !1 : (Ht.current & 2) !== 0), s && (a = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (st) {
        if (a ? Al(e) : Rl(), (t = zt) ? (t = fh(
          t,
          Ue
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Ge, overflow: Xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = No(t), l.return = e, e.child = l, kt = e, zt = null)) : t = null, t === null) throw gl(e);
        return Zf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      var h = n.children;
      return n = n.fallback, a ? (Rl(), a = e.mode, h = Zu(
        { mode: "hidden", children: h },
        a
      ), n = Zl(
        n,
        a,
        l,
        null
      ), h.return = e, n.return = e, h.sibling = n, e.child = h, n = e.child, n.memoizedState = ff(l), n.childLanes = rf(
        t,
        s,
        l
      ), e.memoizedState = cf, Oa(null, n)) : (Al(e), of(e, h));
    }
    var v = t.memoizedState;
    if (v !== null && (h = v.dehydrated, h !== null)) {
      if (i)
        e.flags & 256 ? (Al(e), e.flags &= -257, e = sf(
          t,
          e,
          l
        )) : e.memoizedState !== null ? (Rl(), e.child = t.child, e.flags |= 128, e = null) : (Rl(), h = n.fallback, a = e.mode, n = Zu(
          { mode: "visible", children: n.children },
          a
        ), h = Zl(
          h,
          a,
          l,
          null
        ), h.flags |= 2, n.return = e, h.return = e, n.sibling = h, e.child = n, Il(
          e,
          t.child,
          null,
          l
        ), n = e.child, n.memoizedState = ff(l), n.childLanes = rf(
          t,
          s,
          l
        ), e.memoizedState = cf, e = Oa(null, n));
      else if (Al(e), Zf(h)) {
        if (s = h.nextSibling && h.nextSibling.dataset, s) var O = s.dgst;
        s = O, n = Error(r(419)), n.stack = "", n.digest = s, ha({ value: n, source: null, stack: null }), e = sf(
          t,
          e,
          l
        );
      } else if (Yt || On(t, e, l, !1), s = (l & t.childLanes) !== 0, Yt || s) {
        if (s = Ot, s !== null && (n = qr(s, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Vl(t, n), se(s, t, n), af;
        Vf(h) || ti(), e = sf(
          t,
          e,
          l
        );
      } else
        Vf(h) ? (e.flags |= 192, e.child = t.child, e = null) : (t = v.treeContext, zt = Me(
          h.nextSibling
        ), kt = e, st = !0, vl = null, Ue = !1, t !== null && Bo(e, t), e = of(
          e,
          n.children
        ), e.flags |= 4096);
      return e;
    }
    return a ? (Rl(), h = n.fallback, a = e.mode, v = t.child, O = v.sibling, n = $e(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, O !== null ? h = $e(
      O,
      h
    ) : (h = Zl(
      h,
      a,
      l,
      null
    ), h.flags |= 2), h.return = e, n.return = e, n.sibling = h, e.child = n, Oa(null, n), n = e.child, h = t.child.memoizedState, h === null ? h = ff(l) : (a = h.cachePool, a !== null ? (v = jt._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Xo(), h = {
      baseLanes: h.baseLanes | l,
      cachePool: a
    }), n.memoizedState = h, n.childLanes = rf(
      t,
      s,
      l
    ), e.memoizedState = cf, Oa(t.child, n)) : (Al(e), l = t.child, t = l.sibling, l = $e(l, {
      mode: "visible",
      children: n.children
    }), l.return = e, l.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = l, e.memoizedState = null, l);
  }
  function of(t, e) {
    return e = Zu(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Zu(t, e) {
    return t = ge(22, t, null, e), t.lanes = 0, t;
  }
  function sf(t, e, l) {
    return Il(e, t.child, null, l), t = of(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ed(t, e, l) {
    t.lanes |= e;
    var n = t.alternate;
    n !== null && (n.lanes |= e), Oc(t.return, e, l);
  }
  function df(t, e, l, n, a, i) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = l, s.tailMode = a, s.treeForkCount = i);
  }
  function ld(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var s = Ht.current, h = (s & 2) !== 0;
    if (h ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, V(Ht, s), Ft(t, e, n, l), n = st ? da : 0, !h && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && ed(t, l, e);
        else if (t.tag === 19)
          ed(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (a) {
      case "forwards":
        for (l = e.child, a = null; l !== null; )
          t = l.alternate, t !== null && Nu(t) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = e.child, e.child = null) : (a = l.sibling, l.sibling = null), df(
          e,
          !1,
          a,
          l,
          i,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = e.child, e.child = null; a !== null; ) {
          if (t = a.alternate, t !== null && Nu(t) === null) {
            e.child = a;
            break;
          }
          t = a.sibling, a.sibling = l, l = a, a = t;
        }
        df(
          e,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        df(
          e,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function el(t, e, l) {
    if (t !== null && (e.dependencies = t.dependencies), zl |= e.lanes, (l & e.childLanes) === 0)
      if (t !== null) {
        if (On(
          t,
          e,
          l,
          !1
        ), (l & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, l = $e(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; )
        t = t.sibling, l = l.sibling = $e(t, t.pendingProps), l.return = e;
      l.sibling = null;
    }
    return e.child;
  }
  function hf(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Ou(t)));
  }
  function U0(t, e, l) {
    switch (e.tag) {
      case 3:
        ee(e, e.stateNode.containerInfo), bl(e, jt, t.memoizedState.cache), Kl();
        break;
      case 27:
      case 5:
        Wn(e);
        break;
      case 4:
        ee(e, e.stateNode.containerInfo);
        break;
      case 10:
        bl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Lc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Al(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? td(t, e, l) : (Al(e), t = el(
            t,
            e,
            l
          ), t !== null ? t.sibling : null);
        Al(e);
        break;
      case 19:
        var a = (t.flags & 128) !== 0;
        if (n = (l & e.childLanes) !== 0, n || (On(
          t,
          e,
          l,
          !1
        ), n = (l & e.childLanes) !== 0), a) {
          if (n)
            return ld(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), V(Ht, Ht.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, ks(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        bl(e, jt, t.memoizedState.cache);
    }
    return el(t, e, l);
  }
  function nd(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Yt = !0;
      else {
        if (!hf(t, l) && (e.flags & 128) === 0)
          return Yt = !1, U0(
            t,
            e,
            l
          );
        Yt = (t.flags & 131072) !== 0;
      }
    else
      Yt = !1, st && (e.flags & 1048576) !== 0 && Ho(e, da, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = Fl(e.elementType), e.type = t, typeof t == "function")
            vc(t) ? (n = tn(t, n), e.tag = 1, e = Is(
              null,
              e,
              t,
              n,
              l
            )) : (e.tag = 0, e = uf(
              null,
              e,
              t,
              n,
              l
            ));
          else {
            if (t != null) {
              var a = t.$$typeof;
              if (a === at) {
                e.tag = 11, e = Zs(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === tt) {
                e.tag = 14, e = Ks(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              }
            }
            throw e = ae(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return uf(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 1:
        return n = e.type, a = tn(
          n,
          e.pendingProps
        ), Is(
          t,
          e,
          n,
          a,
          l
        );
      case 3:
        t: {
          if (ee(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          n = e.pendingProps;
          var i = e.memoizedState;
          a = i.element, Mc(t, e), Sa(e, n, null, l);
          var s = e.memoizedState;
          if (n = s.cache, bl(e, jt, n), n !== i.cache && _c(
            e,
            [jt],
            l,
            !0
          ), ba(), n = s.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Ps(
                t,
                e,
                n,
                l
              );
              break t;
            } else if (n !== a) {
              a = ze(
                Error(r(424)),
                e
              ), ha(a), e = Ps(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, zt = Me(t.firstChild), kt = e, st = !0, vl = null, Ue = !0, l = ko(
                e,
                null,
                n,
                l
              ), e.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Kl(), n === a) {
              e = el(
                t,
                e,
                l
              );
              break t;
            }
            Ft(t, e, n, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Vu(t, e), t === null ? (l = mh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : st || (l = e.type, t = e.pendingProps, n = ci(
          it.current
        ).createElement(l), n[Jt] = e, n[ue] = t, Wt(n, l, t), Zt(n), e.stateNode = n) : e.memoizedState = mh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Wn(e), t === null && st && (n = e.stateNode = sh(
          e.type,
          e.pendingProps,
          it.current
        ), kt = e, Ue = !0, a = zt, Ml(e.type) ? (Kf = a, zt = Me(n.firstChild)) : zt = a), Ft(
          t,
          e,
          e.pendingProps.children,
          l
        ), Vu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && st && ((a = n = zt) && (n = ip(
          n,
          e.type,
          e.pendingProps,
          Ue
        ), n !== null ? (e.stateNode = n, kt = e, zt = Me(n.firstChild), Ue = !1, a = !0) : a = !1), a || gl(e)), Wn(e), a = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, n = i.children, Gf(a, i) ? n = null : s !== null && Gf(a, s) && (e.flags |= 32), e.memoizedState !== null && (a = qc(
          t,
          e,
          E0,
          null,
          null,
          l
        ), Ya._currentValue = a), Vu(t, e), Ft(t, e, n, l), e.child;
      case 6:
        return t === null && st && ((t = l = zt) && (l = cp(
          l,
          e.pendingProps,
          Ue
        ), l !== null ? (e.stateNode = l, kt = e, zt = null, t = !0) : t = !1), t || gl(e)), null;
      case 13:
        return td(t, e, l);
      case 4:
        return ee(
          e,
          e.stateNode.containerInfo
        ), n = e.pendingProps, t === null ? e.child = Il(
          e,
          null,
          n,
          l
        ) : Ft(t, e, n, l), e.child;
      case 11:
        return Zs(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 7:
        return Ft(
          t,
          e,
          e.pendingProps,
          l
        ), e.child;
      case 8:
        return Ft(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 12:
        return Ft(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 10:
        return n = e.pendingProps, bl(e, e.type, n.value), Ft(t, e, n.children, l), e.child;
      case 9:
        return a = e.type._context, n = e.pendingProps.children, kl(e), a = $t(a), n = n(a), e.flags |= 1, Ft(t, e, n, l), e.child;
      case 14:
        return Ks(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Js(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return ld(t, e, l);
      case 31:
        return x0(t, e, l);
      case 22:
        return ks(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return kl(e), n = $t(jt), t === null ? (a = xc(), a === null && (a = Ot, i = zc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = { parent: n, cache: a }, Dc(e), bl(e, jt, a)) : ((t.lanes & l) !== 0 && (Mc(t, e), Sa(e, null, null, l), ba()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), bl(e, jt, n)) : (n = i.cache, bl(e, jt, n), n !== a.cache && _c(
          e,
          [jt],
          l,
          !0
        ))), Ft(
          t,
          e,
          e.pendingProps.children,
          l
        ), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ll(t) {
    t.flags |= 4;
  }
  function mf(t, e, l, n, a) {
    if ((e = (t.mode & 32) !== 0) && (e = !1), e) {
      if (t.flags |= 16777216, (a & 335544128) === a)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Ud()) t.flags |= 8192;
        else
          throw Wl = xu, Uc;
    } else t.flags &= -16777217;
  }
  function ad(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !bh(e))
      if (Ud()) t.flags |= 8192;
      else
        throw Wl = xu, Uc;
  }
  function Ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Br() : 536870912, t.lanes |= e, Ln |= e);
  }
  function _a(t, e) {
    if (!st)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : n.sibling = null;
      }
  }
  function Ct(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function D0(t, e, l) {
    var n = e.pendingProps;
    switch (Ec(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ct(e), null;
      case 1:
        return Ct(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Ie(jt), wt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Rn(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ac())), Ct(e), null;
      case 26:
        var a = e.type, i = e.memoizedState;
        return t === null ? (ll(e), i !== null ? (Ct(e), ad(e, i)) : (Ct(e), mf(
          e,
          a,
          null,
          n,
          l
        ))) : i ? i !== t.memoizedState ? (ll(e), Ct(e), ad(e, i)) : (Ct(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && ll(e), Ct(e), mf(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (nu(e), l = it.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ll(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Ct(e), null;
          }
          t = J.current, Rn(e) ? Lo(e) : (t = sh(a, n, l), e.stateNode = t, ll(e));
        }
        return Ct(e), null;
      case 5:
        if (nu(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ll(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Ct(e), null;
          }
          if (i = J.current, Rn(e))
            Lo(e);
          else {
            var s = ci(
              it.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? s.createElement("select", {
                      is: n.is
                    }) : s.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? s.createElement(a, { is: n.is }) : s.createElement(a);
                }
            }
            i[Jt] = e, i[ue] = n;
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e)
                  break t;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            e.stateNode = i;
            t: switch (Wt(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break t;
              case "img":
                n = !0;
                break t;
              default:
                n = !1;
            }
            n && ll(e);
          }
        }
        return Ct(e), mf(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          l
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== n && ll(e);
        else {
          if (typeof n != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = it.current, Rn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = kt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Jt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || th(t.nodeValue, l)), t || gl(e, !0);
          } else
            t = ci(t).createTextNode(
              n
            ), t[Jt] = e, e.stateNode = t;
        }
        return Ct(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Rn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Jt] = e;
            } else
              Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ct(e), t = !1;
          } else
            l = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Se(e), e) : (Se(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Ct(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Rn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Jt] = e;
            } else
              Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Ct(e), a = !1;
          } else
            a = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Se(e), e) : (Se(e), null);
        }
        return Se(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ku(e, e.updateQueue), Ct(e), null);
      case 4:
        return wt(), t === null && Bf(e.stateNode.containerInfo), Ct(e), null;
      case 10:
        return Ie(e.type), Ct(e), null;
      case 19:
        if (B(Ht), n = e.memoizedState, n === null) return Ct(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) _a(n, !1);
          else {
            if (Nt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Nu(t), i !== null) {
                  for (e.flags |= 128, _a(n, !1), t = i.updateQueue, e.updateQueue = t, Ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Mo(l, t), l = l.sibling;
                  return V(
                    Ht,
                    Ht.current & 1 | 2
                  ), st && Fe(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && me() > Wu && (e.flags |= 128, a = !0, _a(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Nu(i), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Ku(e, t), _a(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !st)
                return Ct(e), null;
            } else
              2 * me() - n.renderingStartTime > Wu && l !== 536870912 && (e.flags |= 128, a = !0, _a(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = me(), t.sibling = null, l = Ht.current, V(
          Ht,
          a ? l & 1 | 2 : l & 1
        ), st && Fe(e, n.treeForkCount), t) : (Ct(e), null);
      case 22:
      case 23:
        return Se(e), Bc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Ct(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ct(e), l = e.updateQueue, l !== null && Ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && B($l), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(jt), Ct(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function M0(t, e) {
    switch (Ec(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ie(jt), wt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return nu(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Se(e), e.alternate === null)
            throw Error(r(340));
          Kl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Se(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Kl();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return B(Ht), null;
      case 4:
        return wt(), null;
      case 10:
        return Ie(e.type), null;
      case 22:
      case 23:
        return Se(e), Bc(), t !== null && B($l), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ie(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ud(t, e) {
    switch (Ec(e), e.tag) {
      case 3:
        Ie(jt), wt();
        break;
      case 26:
      case 27:
      case 5:
        nu(e);
        break;
      case 4:
        wt();
        break;
      case 31:
        e.memoizedState !== null && Se(e);
        break;
      case 13:
        Se(e);
        break;
      case 19:
        B(Ht);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        Se(e), Bc(), t !== null && B($l);
        break;
      case 24:
        Ie(jt);
    }
  }
  function za(t, e) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & t) === t) {
            n = void 0;
            var i = l.create, s = l.inst;
            n = i(), s.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (h) {
      St(e, e.return, h);
    }
  }
  function Ol(t, e, l) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & t) === t) {
            var s = n.inst, h = s.destroy;
            if (h !== void 0) {
              s.destroy = void 0, a = e;
              var v = l, O = h;
              try {
                O();
              } catch (M) {
                St(
                  a,
                  v,
                  M
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (M) {
      St(e, e.return, M);
    }
  }
  function id(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Fo(e, l);
      } catch (n) {
        St(t, t.return, n);
      }
    }
  }
  function cd(t, e, l) {
    l.props = tn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      St(t, e, n);
    }
  }
  function Ca(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var n = t.stateNode;
            break;
          case 30:
            n = t.stateNode;
            break;
          default:
            n = t.stateNode;
        }
        typeof l == "function" ? t.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      St(t, e, a);
    }
  }
  function Qe(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          St(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          St(t, e, a);
        }
      else l.current = null;
  }
  function fd(t) {
    var e = t.type, l = t.memoizedProps, n = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break t;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      St(t, t.return, a);
    }
  }
  function yf(t, e, l) {
    try {
      var n = t.stateNode;
      tp(n, t.type, l, e), n[ue] = e;
    } catch (a) {
      St(t, t.return, a);
    }
  }
  function rd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ml(t.type) || t.tag === 4;
  }
  function pf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || rd(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ml(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function vf(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Je));
    else if (n !== 4 && (n === 27 && Ml(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null))
      for (vf(t, e, l), t = t.sibling; t !== null; )
        vf(t, e, l), t = t.sibling;
  }
  function Ju(t, e, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
    else if (n !== 4 && (n === 27 && Ml(t.type) && (l = t.stateNode), t = t.child, t !== null))
      for (Ju(t, e, l), t = t.sibling; t !== null; )
        Ju(t, e, l), t = t.sibling;
  }
  function od(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      Wt(e, n, l), e[Jt] = t, e[ue] = l;
    } catch (i) {
      St(t, t.return, i);
    }
  }
  var nl = !1, Gt = !1, gf = !1, sd = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function N0(t, e) {
    if (t = t.containerInfo, qf = mi, t = Ao(t), oc(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break t;
            }
            var s = 0, h = -1, v = -1, O = 0, M = 0, H = t, _ = null;
            e: for (; ; ) {
              for (var x; H !== l || a !== 0 && H.nodeType !== 3 || (h = s + a), H !== i || n !== 0 && H.nodeType !== 3 || (v = s + n), H.nodeType === 3 && (s += H.nodeValue.length), (x = H.firstChild) !== null; )
                _ = H, H = x;
              for (; ; ) {
                if (H === t) break e;
                if (_ === l && ++O === a && (h = s), _ === i && ++M === n && (v = s), (x = H.nextSibling) !== null) break;
                H = _, _ = H.parentNode;
              }
              H = x;
            }
            l = h === -1 || v === -1 ? null : { start: h, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Yf = { focusedElem: t, selectionRange: l }, mi = !1, Kt = e; Kt !== null; )
      if (e = Kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null)
        t.return = e, Kt = t;
      else
        for (; Kt !== null; ) {
          switch (e = Kt, i = e.alternate, t = e.flags, e.tag) {
            case 0:
              if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null))
                for (l = 0; l < t.length; l++)
                  a = t[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && i !== null) {
                t = void 0, l = e, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                try {
                  var Z = tn(
                    l.type,
                    a
                  );
                  t = n.getSnapshotBeforeUpdate(
                    Z,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = t;
                } catch (W) {
                  St(
                    l,
                    l.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9)
                  Qf(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qf(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (t = e.sibling, t !== null) {
            t.return = e.return, Kt = t;
            break;
          }
          Kt = e.return;
        }
  }
  function dd(t, e, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(t, l), n & 4 && za(5, l);
        break;
      case 1:
        if (ul(t, l), n & 4)
          if (t = l.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (s) {
              St(l, l.return, s);
            }
          else {
            var a = tn(
              l.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                a,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              St(
                l,
                l.return,
                s
              );
            }
          }
        n & 64 && id(l), n & 512 && Ca(l, l.return);
        break;
      case 3:
        if (ul(t, l), n & 64 && (t = l.updateQueue, t !== null)) {
          if (e = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Fo(t, e);
          } catch (s) {
            St(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && n & 4 && od(l);
      case 26:
      case 5:
        ul(t, l), e === null && n & 4 && fd(l), n & 512 && Ca(l, l.return);
        break;
      case 12:
        ul(t, l);
        break;
      case 31:
        ul(t, l), n & 4 && yd(t, l);
        break;
      case 13:
        ul(t, l), n & 4 && pd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = X0.bind(
          null,
          l
        ), fp(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || nl, !n) {
          e = e !== null && e.memoizedState !== null || Gt, a = nl;
          var i = Gt;
          nl = n, (Gt = e) && !i ? il(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(t, l), nl = a, Gt = i;
        }
        break;
      case 30:
        break;
      default:
        ul(t, l);
    }
  }
  function hd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, hd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ji(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var xt = null, ce = !1;
  function al(t, e, l) {
    for (l = l.child; l !== null; )
      md(t, e, l), l = l.sibling;
  }
  function md(t, e, l) {
    if (ye && typeof ye.onCommitFiberUnmount == "function")
      try {
        ye.onCommitFiberUnmount(In, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Gt || Qe(l, e), al(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Gt || Qe(l, e);
        var n = xt, a = ce;
        Ml(l.type) && (xt = l.stateNode, ce = !1), al(
          t,
          e,
          l
        ), La(l.stateNode), xt = n, ce = a;
        break;
      case 5:
        Gt || Qe(l, e);
      case 6:
        if (n = xt, a = ce, xt = null, al(
          t,
          e,
          l
        ), xt = n, ce = a, xt !== null)
          if (ce)
            try {
              (xt.nodeType === 9 ? xt.body : xt.nodeName === "HTML" ? xt.ownerDocument.body : xt).removeChild(l.stateNode);
            } catch (i) {
              St(
                l,
                e,
                i
              );
            }
          else
            try {
              xt.removeChild(l.stateNode);
            } catch (i) {
              St(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        xt !== null && (ce ? (t = xt, ih(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Zn(t)) : ih(xt, l.stateNode));
        break;
      case 4:
        n = xt, a = ce, xt = l.stateNode.containerInfo, ce = !0, al(
          t,
          e,
          l
        ), xt = n, ce = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, e), Gt || Ol(4, l, e), al(
          t,
          e,
          l
        );
        break;
      case 1:
        Gt || (Qe(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && cd(
          l,
          e,
          n
        )), al(
          t,
          e,
          l
        );
        break;
      case 21:
        al(
          t,
          e,
          l
        );
        break;
      case 22:
        Gt = (n = Gt) || l.memoizedState !== null, al(
          t,
          e,
          l
        ), Gt = n;
        break;
      default:
        al(
          t,
          e,
          l
        );
    }
  }
  function yd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Zn(t);
      } catch (l) {
        St(e, e.return, l);
      }
    }
  }
  function pd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Zn(t);
      } catch (l) {
        St(e, e.return, l);
      }
  }
  function w0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new sd()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new sd()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ku(t, e) {
    var l = w0(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Q0.bind(null, t, n);
        n.then(a, a);
      }
    });
  }
  function fe(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = t, s = e, h = s;
        t: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Ml(h.type)) {
                xt = h.stateNode, ce = !1;
                break t;
              }
              break;
            case 5:
              xt = h.stateNode, ce = !1;
              break t;
            case 3:
            case 4:
              xt = h.stateNode.containerInfo, ce = !0;
              break t;
          }
          h = h.return;
        }
        if (xt === null) throw Error(r(160));
        md(i, s, a), xt = null, ce = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        vd(e, t), e = e.sibling;
  }
  var Be = null;
  function vd(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fe(e, t), re(t), n & 4 && (Ol(3, t, t.return), za(3, t), Ol(5, t, t.return));
        break;
      case 1:
        fe(e, t), re(t), n & 512 && (Gt || l === null || Qe(l, l.return)), n & 64 && nl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Be;
        if (fe(e, t), re(t), n & 512 && (Gt || l === null || Qe(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = t.memoizedState, l === null)
            if (n === null)
              if (t.stateNode === null) {
                t: {
                  n = t.type, l = t.memoizedProps, a = a.ownerDocument || a;
                  e: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[ea] || i[Jt] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), Wt(i, n, l), i[Jt] = t, Zt(i), n = i;
                      break t;
                    case "link":
                      var s = vh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (s) {
                        for (var h = 0; h < s.length; h++)
                          if (i = s[h], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            s.splice(h, 1);
                            break e;
                          }
                      }
                      i = a.createElement(n), Wt(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (s = vh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (h = 0; h < s.length; h++)
                          if (i = s[h], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            s.splice(h, 1);
                            break e;
                          }
                      }
                      i = a.createElement(n), Wt(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(r(468, n));
                  }
                  i[Jt] = t, Zt(i), n = i;
                }
                t.stateNode = n;
              } else
                gh(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = ph(
                a,
                n,
                t.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? gh(
              a,
              t.type,
              t.stateNode
            ) : ph(
              a,
              n,
              t.memoizedProps
            )) : n === null && t.stateNode !== null && yf(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        fe(e, t), re(t), n & 512 && (Gt || l === null || Qe(l, l.return)), l !== null && n & 4 && yf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (fe(e, t), re(t), n & 512 && (Gt || l === null || Qe(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            mn(a, "");
          } catch (Z) {
            St(t, t.return, Z);
          }
        }
        n & 4 && t.stateNode != null && (a = t.memoizedProps, yf(
          t,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (gf = !0);
        break;
      case 6:
        if (fe(e, t), re(t), n & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          n = t.memoizedProps, l = t.stateNode;
          try {
            l.nodeValue = n;
          } catch (Z) {
            St(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (oi = null, a = Be, Be = fi(e.containerInfo), fe(e, t), Be = a, re(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zn(e.containerInfo);
          } catch (Z) {
            St(t, t.return, Z);
          }
        gf && (gf = !1, gd(t));
        break;
      case 4:
        n = Be, Be = fi(
          t.stateNode.containerInfo
        ), fe(e, t), re(t), Be = n;
        break;
      case 12:
        fe(e, t), re(t);
        break;
      case 31:
        fe(e, t), re(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 13:
        fe(e, t), re(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Fu = me()), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 22:
        a = t.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, O = nl, M = Gt;
        if (nl = O || a, Gt = M || v, fe(e, t), Gt = M, nl = O, re(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || v || nl || Gt || en(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                v = l = e;
                try {
                  if (i = v.stateNode, a)
                    s = i.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
                  else {
                    h = v.stateNode;
                    var H = v.memoizedProps.style, _ = H != null && H.hasOwnProperty("display") ? H.display : null;
                    h.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (Z) {
                  St(v, v.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (Z) {
                  St(v, v.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                v = e;
                try {
                  var x = v.stateNode;
                  a ? ch(x, !0) : ch(v.stateNode, !1);
                } catch (Z) {
                  St(v, v.return, Z);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
        n & 4 && (n = t.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, ku(t, l))));
        break;
      case 19:
        fe(e, t), re(t), n & 4 && (n = t.updateQueue, n !== null && (t.updateQueue = null, ku(t, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        fe(e, t), re(t);
    }
  }
  function re(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, n = t.return; n !== null; ) {
          if (rd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(r(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = pf(t);
            Ju(t, i, a);
            break;
          case 5:
            var s = l.stateNode;
            l.flags & 32 && (mn(s, ""), l.flags &= -33);
            var h = pf(t);
            Ju(t, h, s);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, O = pf(t);
            vf(
              t,
              O,
              v
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (M) {
        St(t, t.return, M);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function gd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        gd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ul(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        dd(t, e.alternate, e), e = e.sibling;
  }
  function en(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, e, e.return), en(e);
          break;
        case 1:
          Qe(e, e.return);
          var l = e.stateNode;
          typeof l.componentWillUnmount == "function" && cd(
            e,
            e.return,
            l
          ), en(e);
          break;
        case 27:
          La(e.stateNode);
        case 26:
        case 5:
          Qe(e, e.return), en(e);
          break;
        case 22:
          e.memoizedState === null && en(e);
          break;
        case 30:
          en(e);
          break;
        default:
          en(e);
      }
      t = t.sibling;
    }
  }
  function il(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var n = e.alternate, a = t, i = e, s = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          il(
            a,
            i,
            l
          ), za(4, i);
          break;
        case 1:
          if (il(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (O) {
              St(n, n.return, O);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var h = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  $o(v[a], h);
            } catch (O) {
              St(n, n.return, O);
            }
          }
          l && s & 64 && id(i), Ca(i, i.return);
          break;
        case 27:
          od(i);
        case 26:
        case 5:
          il(
            a,
            i,
            l
          ), l && n === null && s & 4 && fd(i), Ca(i, i.return);
          break;
        case 12:
          il(
            a,
            i,
            l
          );
          break;
        case 31:
          il(
            a,
            i,
            l
          ), l && s & 4 && yd(a, i);
          break;
        case 13:
          il(
            a,
            i,
            l
          ), l && s & 4 && pd(a, i);
          break;
        case 22:
          i.memoizedState === null && il(
            a,
            i,
            l
          ), Ca(i, i.return);
          break;
        case 30:
          break;
        default:
          il(
            a,
            i,
            l
          );
      }
      e = e.sibling;
    }
  }
  function bf(t, e) {
    var l = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && ma(l));
  }
  function Sf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ma(t));
  }
  function Le(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        bd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function bd(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Le(
          t,
          e,
          l,
          n
        ), a & 2048 && za(9, e);
        break;
      case 1:
        Le(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        Le(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ma(t)));
        break;
      case 12:
        if (a & 2048) {
          Le(
            t,
            e,
            l,
            n
          ), t = e.stateNode;
          try {
            var i = e.memoizedProps, s = i.id, h = i.onPostCommit;
            typeof h == "function" && h(
              s,
              e.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0
            );
          } catch (v) {
            St(e, e.return, v);
          }
        } else
          Le(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        Le(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        Le(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, s = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? Le(
          t,
          e,
          l,
          n
        ) : xa(t, e) : i._visibility & 2 ? Le(
          t,
          e,
          l,
          n
        ) : (i._visibility |= 2, wn(
          t,
          e,
          l,
          n,
          (e.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && bf(s, e);
        break;
      case 24:
        Le(
          t,
          e,
          l,
          n
        ), a & 2048 && Sf(e.alternate, e);
        break;
      default:
        Le(
          t,
          e,
          l,
          n
        );
    }
  }
  function wn(t, e, l, n, a) {
    for (a = a && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var i = t, s = e, h = l, v = n, O = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            i,
            s,
            h,
            v,
            a
          ), za(8, s);
          break;
        case 23:
          break;
        case 22:
          var M = s.stateNode;
          s.memoizedState !== null ? M._visibility & 2 ? wn(
            i,
            s,
            h,
            v,
            a
          ) : xa(
            i,
            s
          ) : (M._visibility |= 2, wn(
            i,
            s,
            h,
            v,
            a
          )), a && O & 2048 && bf(
            s.alternate,
            s
          );
          break;
        case 24:
          wn(
            i,
            s,
            h,
            v,
            a
          ), a && O & 2048 && Sf(s.alternate, s);
          break;
        default:
          wn(
            i,
            s,
            h,
            v,
            a
          );
      }
      e = e.sibling;
    }
  }
  function xa(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            xa(l, n), a & 2048 && bf(
              n.alternate,
              n
            );
            break;
          case 24:
            xa(l, n), a & 2048 && Sf(n.alternate, n);
            break;
          default:
            xa(l, n);
        }
        e = e.sibling;
      }
  }
  var Ua = 8192;
  function Hn(t, e, l) {
    if (t.subtreeFlags & Ua)
      for (t = t.child; t !== null; )
        Sd(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function Sd(t, e, l) {
    switch (t.tag) {
      case 26:
        Hn(
          t,
          e,
          l
        ), t.flags & Ua && t.memoizedState !== null && Sp(
          l,
          Be,
          t.memoizedState,
          t.memoizedProps
        );
        break;
      case 5:
        Hn(
          t,
          e,
          l
        );
        break;
      case 3:
      case 4:
        var n = Be;
        Be = fi(t.stateNode.containerInfo), Hn(
          t,
          e,
          l
        ), Be = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate, n !== null && n.memoizedState !== null ? (n = Ua, Ua = 16777216, Hn(
          t,
          e,
          l
        ), Ua = n) : Hn(
          t,
          e,
          l
        ));
        break;
      default:
        Hn(
          t,
          e,
          l
        );
    }
  }
  function Ed(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Da(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          Kt = n, Ad(
            n,
            t
          );
        }
      Ed(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Td(t), t = t.sibling;
  }
  function Td(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Da(t), t.flags & 2048 && Ol(9, t, t.return);
        break;
      case 3:
        Da(t);
        break;
      case 12:
        Da(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, $u(t)) : Da(t);
        break;
      default:
        Da(t);
    }
  }
  function $u(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var n = e[l];
          Kt = n, Ad(
            n,
            t
          );
        }
      Ed(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, e, e.return), $u(e);
          break;
        case 22:
          l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, $u(e));
          break;
        default:
          $u(e);
      }
      t = t.sibling;
    }
  }
  function Ad(t, e) {
    for (; Kt !== null; ) {
      var l = Kt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ma(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, Kt = n;
      else
        t: for (l = t; Kt !== null; ) {
          n = Kt;
          var a = n.sibling, i = n.return;
          if (hd(n), n === l) {
            Kt = null;
            break t;
          }
          if (a !== null) {
            a.return = i, Kt = a;
            break t;
          }
          Kt = i;
        }
    }
  }
  var H0 = {
    getCacheForType: function(t) {
      var e = $t(jt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return $t(jt).controller.signal;
    }
  }, B0 = typeof WeakMap == "function" ? WeakMap : Map, pt = 0, Ot = null, ct = null, rt = 0, bt = 0, Ee = null, _l = !1, Bn = !1, Ef = !1, cl = 0, Nt = 0, zl = 0, ln = 0, Tf = 0, Te = 0, Ln = 0, Ma = null, oe = null, Af = !1, Fu = 0, Rd = 0, Wu = 1 / 0, Iu = null, Cl = null, Qt = 0, xl = null, jn = null, fl = 0, Rf = 0, Of = null, Od = null, Na = 0, _f = null;
  function Ae() {
    return (pt & 2) !== 0 && rt !== 0 ? rt & -rt : j.T !== null ? Mf() : Yr();
  }
  function _d() {
    if (Te === 0)
      if ((rt & 536870912) === 0 || st) {
        var t = iu;
        iu <<= 1, (iu & 3932160) === 0 && (iu = 262144), Te = t;
      } else Te = 536870912;
    return t = be.current, t !== null && (t.flags |= 32), Te;
  }
  function se(t, e, l) {
    (t === Ot && (bt === 2 || bt === 9) || t.cancelPendingCommit !== null) && (qn(t, 0), Ul(
      t,
      rt,
      Te,
      !1
    )), ta(t, l), ((pt & 2) === 0 || t !== Ot) && (t === Ot && ((pt & 2) === 0 && (ln |= l), Nt === 4 && Ul(
      t,
      rt,
      Te,
      !1
    )), Ve(t));
  }
  function zd(t, e, l) {
    if ((pt & 6) !== 0) throw Error(r(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Pn(t, e), a = n ? q0(t, e) : Cf(t, e, !0), i = n;
    do {
      if (a === 0) {
        Bn && !n && Ul(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !L0(l)) {
          a = Cf(t, e, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = e, t.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var h = t;
              a = Ma;
              var v = h.current.memoizedState.isDehydrated;
              if (v && (qn(h, s).flags |= 256), s = Cf(
                h,
                s,
                !1
              ), s !== 2) {
                if (Ef && !v) {
                  h.errorRecoveryDisabledLanes |= i, ln |= i, a = 4;
                  break t;
                }
                i = oe, oe = a, i !== null && (oe === null ? oe = i : oe.push.apply(
                  oe,
                  i
                ));
              }
              a = s;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          qn(t, 0), Ul(t, e, 0, !0);
          break;
        }
        t: {
          switch (n = t, i = a, i) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              Ul(
                n,
                e,
                Te,
                !_l
              );
              break t;
            case 2:
              oe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (a = Fu + 300 - me(), 10 < a)) {
            if (Ul(
              n,
              e,
              Te,
              !_l
            ), fu(n, 0, !0) !== 0) break t;
            fl = e, n.timeoutHandle = ah(
              Cd.bind(
                null,
                n,
                l,
                oe,
                Iu,
                Af,
                e,
                Te,
                ln,
                Ln,
                _l,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break t;
          }
          Cd(
            n,
            l,
            oe,
            Iu,
            Af,
            e,
            Te,
            ln,
            Ln,
            _l,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ve(t);
  }
  function Cd(t, e, l, n, a, i, s, h, v, O, M, H, _, x) {
    if (t.timeoutHandle = -1, H = e.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Je
      }, Sd(
        e,
        i,
        H
      );
      var Z = (i & 62914560) === i ? Fu - me() : (i & 4194048) === i ? Rd - me() : 0;
      if (Z = Ep(
        H,
        Z
      ), Z !== null) {
        fl = i, t.cancelPendingCommit = Z(
          Bd.bind(
            null,
            t,
            e,
            i,
            l,
            n,
            a,
            s,
            h,
            v,
            M,
            H,
            null,
            _,
            x
          )
        ), Ul(t, i, s, !O);
        return;
      }
    }
    Bd(
      t,
      e,
      i,
      l,
      n,
      a,
      s,
      h,
      v
    );
  }
  function L0(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!ve(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = e.child, e.subtreeFlags & 16384 && l !== null)
        l.return = e, e = l;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Ul(t, e, l, n) {
    e &= ~Tf, e &= ~ln, t.suspendedLanes |= e, t.pingedLanes &= ~e, n && (t.warmLanes |= e), n = t.expirationTimes;
    for (var a = e; 0 < a; ) {
      var i = 31 - pe(a), s = 1 << i;
      n[i] = -1, a &= ~s;
    }
    l !== 0 && Lr(t, l, e);
  }
  function Pu() {
    return (pt & 6) === 0 ? (wa(0), !1) : !0;
  }
  function zf() {
    if (ct !== null) {
      if (bt === 0)
        var t = ct.return;
      else
        t = ct, We = Jl = null, Xc(t), xn = null, pa = 0, t = ct;
      for (; t !== null; )
        ud(t.alternate, t), t = t.return;
      ct = null;
    }
  }
  function qn(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, np(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), fl = 0, zf(), Ot = t, ct = l = $e(t.current, null), rt = e, bt = 0, Ee = null, _l = !1, Bn = Pn(t, e), Ef = !1, Ln = Te = Tf = ln = zl = Nt = 0, oe = Ma = null, Af = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - pe(n), i = 1 << a;
        e |= t[a], n &= ~i;
      }
    return cl = e, Su(), l;
  }
  function xd(t, e) {
    et = null, j.H = Ra, e === Cn || e === Cu ? (e = Zo(), bt = 3) : e === Uc ? (e = Zo(), bt = 4) : bt = e === af ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ee = e, ct === null && (Nt = 1, Xu(
      t,
      ze(e, t.current)
    ));
  }
  function Ud() {
    var t = be.current;
    return t === null ? !0 : (rt & 4194048) === rt ? De === null : (rt & 62914560) === rt || (rt & 536870912) !== 0 ? t === De : !1;
  }
  function Dd() {
    var t = j.H;
    return j.H = Ra, t === null ? Ra : t;
  }
  function Md() {
    var t = j.A;
    return j.A = H0, t;
  }
  function ti() {
    Nt = 4, _l || (rt & 4194048) !== rt && be.current !== null || (Bn = !0), (zl & 134217727) === 0 && (ln & 134217727) === 0 || Ot === null || Ul(
      Ot,
      rt,
      Te,
      !1
    );
  }
  function Cf(t, e, l) {
    var n = pt;
    pt |= 2;
    var a = Dd(), i = Md();
    (Ot !== t || rt !== e) && (Iu = null, qn(t, e)), e = !1;
    var s = Nt;
    t: do
      try {
        if (bt !== 0 && ct !== null) {
          var h = ct, v = Ee;
          switch (bt) {
            case 8:
              zf(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var O = bt;
              if (bt = 0, Ee = null, Yn(t, h, v, O), l && Bn) {
                s = 0;
                break t;
              }
              break;
            default:
              O = bt, bt = 0, Ee = null, Yn(t, h, v, O);
          }
        }
        j0(), s = Nt;
        break;
      } catch (M) {
        xd(t, M);
      }
    while (!0);
    return e && t.shellSuspendCounter++, We = Jl = null, pt = n, j.H = a, j.A = i, ct === null && (Ot = null, rt = 0, Su()), s;
  }
  function j0() {
    for (; ct !== null; ) Nd(ct);
  }
  function q0(t, e) {
    var l = pt;
    pt |= 2;
    var n = Dd(), a = Md();
    Ot !== t || rt !== e ? (Iu = null, Wu = me() + 500, qn(t, e)) : Bn = Pn(
      t,
      e
    );
    t: do
      try {
        if (bt !== 0 && ct !== null) {
          e = ct;
          var i = Ee;
          e: switch (bt) {
            case 1:
              bt = 0, Ee = null, Yn(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Qo(i)) {
                bt = 0, Ee = null, wd(e);
                break;
              }
              e = function() {
                bt !== 2 && bt !== 9 || Ot !== t || (bt = 7), Ve(t);
              }, i.then(e, e);
              break t;
            case 3:
              bt = 7;
              break t;
            case 4:
              bt = 5;
              break t;
            case 7:
              Qo(i) ? (bt = 0, Ee = null, wd(e)) : (bt = 0, Ee = null, Yn(t, e, i, 7));
              break;
            case 5:
              var s = null;
              switch (ct.tag) {
                case 26:
                  s = ct.memoizedState;
                case 5:
                case 27:
                  var h = ct;
                  if (s ? bh(s) : h.stateNode.complete) {
                    bt = 0, Ee = null;
                    var v = h.sibling;
                    if (v !== null) ct = v;
                    else {
                      var O = h.return;
                      O !== null ? (ct = O, ei(O)) : ct = null;
                    }
                    break e;
                  }
              }
              bt = 0, Ee = null, Yn(t, e, i, 5);
              break;
            case 6:
              bt = 0, Ee = null, Yn(t, e, i, 6);
              break;
            case 8:
              zf(), Nt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        Y0();
        break;
      } catch (M) {
        xd(t, M);
      }
    while (!0);
    return We = Jl = null, j.H = n, j.A = a, pt = l, ct !== null ? 0 : (Ot = null, rt = 0, Su(), Nt);
  }
  function Y0() {
    for (; ct !== null && !ry(); )
      Nd(ct);
  }
  function Nd(t) {
    var e = nd(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? ei(t) : ct = e;
  }
  function wd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Ws(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          rt
        );
        break;
      case 11:
        e = Ws(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          rt
        );
        break;
      case 5:
        Xc(e);
      default:
        ud(l, e), e = ct = Mo(e, cl), e = nd(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ei(t) : ct = e;
  }
  function Yn(t, e, l, n) {
    We = Jl = null, Xc(e), xn = null, pa = 0;
    var a = e.return;
    try {
      if (C0(
        t,
        a,
        e,
        l,
        rt
      )) {
        Nt = 1, Xu(
          t,
          ze(l, t.current)
        ), ct = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw ct = a, i;
      Nt = 1, Xu(
        t,
        ze(l, t.current)
      ), ct = null;
      return;
    }
    e.flags & 32768 ? (st || n === 1 ? t = !0 : Bn || (rt & 536870912) !== 0 ? t = !1 : (_l = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = be.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Hd(e, t)) : ei(e);
  }
  function ei(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Hd(
          e,
          _l
        );
        return;
      }
      t = e.return;
      var l = D0(
        e.alternate,
        e,
        cl
      );
      if (l !== null) {
        ct = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        ct = e;
        return;
      }
      ct = e = t;
    } while (e !== null);
    Nt === 0 && (Nt = 5);
  }
  function Hd(t, e) {
    do {
      var l = M0(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, ct = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        ct = t;
        return;
      }
      ct = t = l;
    } while (t !== null);
    Nt = 6, ct = null;
  }
  function Bd(t, e, l, n, a, i, s, h, v) {
    t.cancelPendingCommit = null;
    do
      li();
    while (Qt !== 0);
    if ((pt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (i = e.lanes | e.childLanes, i |= yc, by(
        t,
        l,
        i,
        s,
        h,
        v
      ), t === Ot && (ct = Ot = null, rt = 0), jn = e, xl = t, fl = l, Rf = i, Of = a, Od = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, V0(au, function() {
        return Gd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = j.T, j.T = null, a = X.p, X.p = 2, s = pt, pt |= 4;
        try {
          N0(t, e, l);
        } finally {
          pt = s, X.p = a, j.T = n;
        }
      }
      Qt = 1, Ld(), jd(), qd();
    }
  }
  function Ld() {
    if (Qt === 1) {
      Qt = 0;
      var t = xl, e = jn, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = j.T, j.T = null;
        var n = X.p;
        X.p = 2;
        var a = pt;
        pt |= 4;
        try {
          vd(e, t);
          var i = Yf, s = Ao(t.containerInfo), h = i.focusedElem, v = i.selectionRange;
          if (s !== h && h && h.ownerDocument && To(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && oc(h)) {
              var O = v.start, M = v.end;
              if (M === void 0 && (M = O), "selectionStart" in h)
                h.selectionStart = O, h.selectionEnd = Math.min(
                  M,
                  h.value.length
                );
              else {
                var H = h.ownerDocument || document, _ = H && H.defaultView || window;
                if (_.getSelection) {
                  var x = _.getSelection(), Z = h.textContent.length, W = Math.min(v.start, Z), At = v.end === void 0 ? W : Math.min(v.end, Z);
                  !x.extend && W > At && (s = At, At = W, W = s);
                  var A = Eo(
                    h,
                    W
                  ), S = Eo(
                    h,
                    At
                  );
                  if (A && S && (x.rangeCount !== 1 || x.anchorNode !== A.node || x.anchorOffset !== A.offset || x.focusNode !== S.node || x.focusOffset !== S.offset)) {
                    var R = H.createRange();
                    R.setStart(A.node, A.offset), x.removeAllRanges(), W > At ? (x.addRange(R), x.extend(S.node, S.offset)) : (R.setEnd(S.node, S.offset), x.addRange(R));
                  }
                }
              }
            }
            for (H = [], x = h; x = x.parentNode; )
              x.nodeType === 1 && H.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < H.length; h++) {
              var w = H[h];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          mi = !!qf, Yf = qf = null;
        } finally {
          pt = a, X.p = n, j.T = l;
        }
      }
      t.current = e, Qt = 2;
    }
  }
  function jd() {
    if (Qt === 2) {
      Qt = 0;
      var t = xl, e = jn, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = j.T, j.T = null;
        var n = X.p;
        X.p = 2;
        var a = pt;
        pt |= 4;
        try {
          dd(t, e.alternate, e);
        } finally {
          pt = a, X.p = n, j.T = l;
        }
      }
      Qt = 3;
    }
  }
  function qd() {
    if (Qt === 4 || Qt === 3) {
      Qt = 0, oy();
      var t = xl, e = jn, l = fl, n = Od;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qt = 5 : (Qt = 0, jn = xl = null, Yd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (Cl = null), Zi(l), e = e.stateNode, ye && typeof ye.onCommitFiberRoot == "function")
        try {
          ye.onCommitFiberRoot(
            In,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        e = j.T, a = X.p, X.p = 2, j.T = null;
        try {
          for (var i = t.onRecoverableError, s = 0; s < n.length; s++) {
            var h = n[s];
            i(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          j.T = e, X.p = a;
        }
      }
      (fl & 3) !== 0 && li(), Ve(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === _f ? Na++ : (Na = 0, _f = t) : Na = 0, wa(0);
    }
  }
  function Yd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ma(e)));
  }
  function li() {
    return Ld(), jd(), qd(), Gd();
  }
  function Gd() {
    if (Qt !== 5) return !1;
    var t = xl, e = Rf;
    Rf = 0;
    var l = Zi(fl), n = j.T, a = X.p;
    try {
      X.p = 32 > l ? 32 : l, j.T = null, l = Of, Of = null;
      var i = xl, s = fl;
      if (Qt = 0, jn = xl = null, fl = 0, (pt & 6) !== 0) throw Error(r(331));
      var h = pt;
      if (pt |= 4, Td(i.current), bd(
        i,
        i.current,
        s,
        l
      ), pt = h, wa(0, !1), ye && typeof ye.onPostCommitFiberRoot == "function")
        try {
          ye.onPostCommitFiberRoot(In, i);
        } catch {
        }
      return !0;
    } finally {
      X.p = a, j.T = n, Yd(t, e);
    }
  }
  function Xd(t, e, l) {
    e = ze(l, e), e = nf(t.stateNode, e, 2), t = Tl(t, e, 2), t !== null && (ta(t, 2), Ve(t));
  }
  function St(t, e, l) {
    if (t.tag === 3)
      Xd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Xd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Cl === null || !Cl.has(n))) {
            t = ze(l, t), l = Qs(2), n = Tl(e, l, 2), n !== null && (Vs(
              l,
              n,
              e,
              t
            ), ta(n, 2), Ve(n));
            break;
          }
        }
        e = e.return;
      }
  }
  function xf(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new B0();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Ef = !0, a.add(l), t = G0.bind(null, t, e, l), e.then(t, t));
  }
  function G0(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Ot === t && (rt & l) === l && (Nt === 4 || Nt === 3 && (rt & 62914560) === rt && 300 > me() - Fu ? (pt & 2) === 0 && qn(t, 0) : Tf |= l, Ln === rt && (Ln = 0)), Ve(t);
  }
  function Qd(t, e) {
    e === 0 && (e = Br()), t = Vl(t, e), t !== null && (ta(t, e), Ve(t));
  }
  function X0(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Qd(t, l);
  }
  function Q0(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var n = t.stateNode, a = t.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = t.stateNode;
        break;
      case 22:
        n = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    n !== null && n.delete(e), Qd(t, l);
  }
  function V0(t, e) {
    return Gi(t, e);
  }
  var ni = null, Gn = null, Uf = !1, ai = !1, Df = !1, Dl = 0;
  function Ve(t) {
    t !== Gn && t.next === null && (Gn === null ? ni = Gn = t : Gn = Gn.next = t), ai = !0, Uf || (Uf = !0, K0());
  }
  function wa(t, e) {
    if (!Df && ai) {
      Df = !0;
      do
        for (var l = !1, n = ni; n !== null; ) {
          if (t !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var s = n.suspendedLanes, h = n.pingedLanes;
              i = (1 << 31 - pe(42 | t) + 1) - 1, i &= a & ~(s & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Jd(n, i));
          } else
            i = rt, i = fu(
              n,
              n === Ot ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || Pn(n, i) || (l = !0, Jd(n, i));
          n = n.next;
        }
      while (l);
      Df = !1;
    }
  }
  function Z0() {
    Vd();
  }
  function Vd() {
    ai = Uf = !1;
    var t = 0;
    Dl !== 0 && lp() && (t = Dl);
    for (var e = me(), l = null, n = ni; n !== null; ) {
      var a = n.next, i = Zd(n, e);
      i === 0 ? (n.next = null, l === null ? ni = a : l.next = a, a === null && (Gn = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (ai = !0)), n = a;
    }
    Qt !== 0 && Qt !== 5 || wa(t), Dl !== 0 && (Dl = 0);
  }
  function Zd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - pe(i), h = 1 << s, v = a[s];
      v === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[s] = gy(h, e)) : v <= e && (t.expiredLanes |= h), i &= ~h;
    }
    if (e = Ot, l = rt, l = fu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (bt === 2 || bt === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Xi(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Pn(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Xi(n), Zi(l)) {
        case 2:
        case 8:
          l = wr;
          break;
        case 32:
          l = au;
          break;
        case 268435456:
          l = Hr;
          break;
        default:
          l = au;
      }
      return n = Kd.bind(null, t), l = Gi(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Xi(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Kd(t, e) {
    if (Qt !== 0 && Qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (li() && t.callbackNode !== l)
      return null;
    var n = rt;
    return n = fu(
      t,
      t === Ot ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (zd(t, n, e), Zd(t, me()), t.callbackNode != null && t.callbackNode === l ? Kd.bind(null, t) : null);
  }
  function Jd(t, e) {
    if (li()) return null;
    zd(t, e, !0);
  }
  function K0() {
    ap(function() {
      (pt & 6) !== 0 ? Gi(
        Nr,
        Z0
      ) : Vd();
    });
  }
  function Mf() {
    if (Dl === 0) {
      var t = _n;
      t === 0 && (t = uu, uu <<= 1, (uu & 261888) === 0 && (uu = 256)), Dl = t;
    }
    return Dl;
  }
  function kd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : du("" + t);
  }
  function $d(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function J0(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = kd(
        (a[ue] || null).action
      ), s = n.submitter;
      s && (e = (e = s[ue] || null) ? kd(e.formAction) : s.getAttribute("formAction"), e !== null && (i = e, s = null));
      var h = new pu(
        "action",
        "action",
        null,
        n,
        a
      );
      t.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Dl !== 0) {
                  var v = s ? $d(a, s) : new FormData(a);
                  Wc(
                    l,
                    {
                      pending: !0,
                      data: v,
                      method: a.method,
                      action: i
                    },
                    null,
                    v
                  );
                }
              } else
                typeof i == "function" && (h.preventDefault(), v = s ? $d(a, s) : new FormData(a), Wc(
                  l,
                  {
                    pending: !0,
                    data: v,
                    method: a.method,
                    action: i
                  },
                  i,
                  v
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Nf = 0; Nf < mc.length; Nf++) {
    var wf = mc[Nf], k0 = wf.toLowerCase(), $0 = wf[0].toUpperCase() + wf.slice(1);
    He(
      k0,
      "on" + $0
    );
  }
  He(_o, "onAnimationEnd"), He(zo, "onAnimationIteration"), He(Co, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(s0, "onTransitionRun"), He(d0, "onTransitionStart"), He(h0, "onTransitionCancel"), He(xo, "onTransitionEnd"), dn("onMouseEnter", ["mouseout", "mouseover"]), dn("onMouseLeave", ["mouseout", "mouseover"]), dn("onPointerEnter", ["pointerout", "pointerover"]), dn("onPointerLeave", ["pointerout", "pointerover"]), Yl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Yl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Yl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Yl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Yl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Yl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ha = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), F0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha)
  );
  function Fd(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var n = t[l], a = n.event;
      n = n.listeners;
      t: {
        var i = void 0;
        if (e)
          for (var s = n.length - 1; 0 <= s; s--) {
            var h = n[s], v = h.instance, O = h.currentTarget;
            if (h = h.listener, v !== i && a.isPropagationStopped())
              break t;
            i = h, a.currentTarget = O;
            try {
              i(a);
            } catch (M) {
              bu(M);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (s = 0; s < n.length; s++) {
            if (h = n[s], v = h.instance, O = h.currentTarget, h = h.listener, v !== i && a.isPropagationStopped())
              break t;
            i = h, a.currentTarget = O;
            try {
              i(a);
            } catch (M) {
              bu(M);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function ft(t, e) {
    var l = e[Ki];
    l === void 0 && (l = e[Ki] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (Wd(e, t, 2, !1), l.add(n));
  }
  function Hf(t, e, l) {
    var n = 0;
    e && (n |= 4), Wd(
      l,
      t,
      n,
      e
    );
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function Bf(t) {
    if (!t[ui]) {
      t[ui] = !0, Qr.forEach(function(l) {
        l !== "selectionchange" && (F0.has(l) || Hf(l, !1, t), Hf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ui] || (e[ui] = !0, Hf("selectionchange", !1, e));
    }
  }
  function Wd(t, e, l, n) {
    switch (_h(e)) {
      case 2:
        var a = Rp;
        break;
      case 8:
        a = Op;
        break;
      default:
        a = Wf;
    }
    l = a.bind(
      null,
      e,
      l,
      t
    ), a = void 0, !ec || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (a = !0), n ? a !== void 0 ? t.addEventListener(e, l, {
      capture: !0,
      passive: a
    }) : t.addEventListener(e, l, !0) : a !== void 0 ? t.addEventListener(e, l, {
      passive: a
    }) : t.addEventListener(e, l, !1);
  }
  function Lf(t, e, l, n, a) {
    var i = n;
    if ((e & 1) === 0 && (e & 2) === 0 && n !== null)
      t: for (; ; ) {
        if (n === null) return;
        var s = n.tag;
        if (s === 3 || s === 4) {
          var h = n.stateNode.containerInfo;
          if (h === a) break;
          if (s === 4)
            for (s = n.return; s !== null; ) {
              var v = s.tag;
              if ((v === 3 || v === 4) && s.stateNode.containerInfo === a)
                return;
              s = s.return;
            }
          for (; h !== null; ) {
            if (s = rn(h), s === null) return;
            if (v = s.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              n = i = s;
              continue t;
            }
            h = h.parentNode;
          }
        }
        n = n.return;
      }
    eo(function() {
      var O = i, M = Pi(l), H = [];
      t: {
        var _ = Uo.get(t);
        if (_ !== void 0) {
          var x = pu, Z = t;
          switch (t) {
            case "keypress":
              if (mu(l) === 0) break t;
            case "keydown":
            case "keyup":
              x = Qy;
              break;
            case "focusin":
              Z = "focus", x = uc;
              break;
            case "focusout":
              Z = "blur", x = uc;
              break;
            case "beforeblur":
            case "afterblur":
              x = uc;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = ao;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Dy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Ky;
              break;
            case _o:
            case zo:
            case Co:
              x = wy;
              break;
            case xo:
              x = ky;
              break;
            case "scroll":
            case "scrollend":
              x = xy;
              break;
            case "wheel":
              x = Fy;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = By;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = io;
              break;
            case "toggle":
            case "beforetoggle":
              x = Iy;
          }
          var W = (e & 4) !== 0, At = !W && (t === "scroll" || t === "scrollend"), A = W ? _ !== null ? _ + "Capture" : null : _;
          W = [];
          for (var S = O, R; S !== null; ) {
            var w = S;
            if (R = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || R === null || A === null || (w = na(S, A), w != null && W.push(
              Ba(S, w, R)
            )), At) break;
            S = S.return;
          }
          0 < W.length && (_ = new x(
            _,
            Z,
            null,
            l,
            M
          ), H.push({ event: _, listeners: W }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", _ && l !== Ii && (Z = l.relatedTarget || l.fromElement) && (rn(Z) || Z[fn]))
            break t;
          if ((x || _) && (_ = M.window === M ? M : (_ = M.ownerDocument) ? _.defaultView || _.parentWindow : window, x ? (Z = l.relatedTarget || l.toElement, x = O, Z = Z ? rn(Z) : null, Z !== null && (At = m(Z), W = Z.tag, Z !== At || W !== 5 && W !== 27 && W !== 6) && (Z = null)) : (x = null, Z = O), x !== Z)) {
            if (W = ao, w = "onMouseLeave", A = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (W = io, w = "onPointerLeave", A = "onPointerEnter", S = "pointer"), At = x == null ? _ : la(x), R = Z == null ? _ : la(Z), _ = new W(
              w,
              S + "leave",
              x,
              l,
              M
            ), _.target = At, _.relatedTarget = R, w = null, rn(M) === O && (W = new W(
              A,
              S + "enter",
              Z,
              l,
              M
            ), W.target = R, W.relatedTarget = At, w = W), At = w, x && Z)
              e: {
                for (W = W0, A = x, S = Z, R = 0, w = A; w; w = W(w))
                  R++;
                w = 0;
                for (var $ = S; $; $ = W($))
                  w++;
                for (; 0 < R - w; )
                  A = W(A), R--;
                for (; 0 < w - R; )
                  S = W(S), w--;
                for (; R--; ) {
                  if (A === S || S !== null && A === S.alternate) {
                    W = A;
                    break e;
                  }
                  A = W(A), S = W(S);
                }
                W = null;
              }
            else W = null;
            x !== null && Id(
              H,
              _,
              x,
              W,
              !1
            ), Z !== null && At !== null && Id(
              H,
              At,
              Z,
              W,
              !0
            );
          }
        }
        t: {
          if (_ = O ? la(O) : window, x = _.nodeName && _.nodeName.toLowerCase(), x === "select" || x === "input" && _.type === "file")
            var mt = yo;
          else if (ho(_))
            if (po)
              mt = f0;
            else {
              mt = i0;
              var k = u0;
            }
          else
            x = _.nodeName, !x || x.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? O && Wi(O.elementType) && (mt = yo) : mt = c0;
          if (mt && (mt = mt(t, O))) {
            mo(
              H,
              mt,
              l,
              M
            );
            break t;
          }
          k && k(t, _, O), t === "focusout" && O && _.type === "number" && O.memoizedProps.value != null && Fi(_, "number", _.value);
        }
        switch (k = O ? la(O) : window, t) {
          case "focusin":
            (ho(k) || k.contentEditable === "true") && (gn = k, sc = O, sa = null);
            break;
          case "focusout":
            sa = sc = gn = null;
            break;
          case "mousedown":
            dc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            dc = !1, Ro(H, l, M);
            break;
          case "selectionchange":
            if (o0) break;
          case "keydown":
          case "keyup":
            Ro(H, l, M);
        }
        var nt;
        if (cc)
          t: {
            switch (t) {
              case "compositionstart":
                var ot = "onCompositionStart";
                break t;
              case "compositionend":
                ot = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ot = "onCompositionUpdate";
                break t;
            }
            ot = void 0;
          }
        else
          vn ? oo(t, l) && (ot = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ot = "onCompositionStart");
        ot && (co && l.locale !== "ko" && (vn || ot !== "onCompositionStart" ? ot === "onCompositionEnd" && vn && (nt = lo()) : (yl = M, lc = "value" in yl ? yl.value : yl.textContent, vn = !0)), k = ii(O, ot), 0 < k.length && (ot = new uo(
          ot,
          t,
          null,
          l,
          M
        ), H.push({ event: ot, listeners: k }), nt ? ot.data = nt : (nt = so(l), nt !== null && (ot.data = nt)))), (nt = t0 ? e0(t, l) : l0(t, l)) && (ot = ii(O, "onBeforeInput"), 0 < ot.length && (k = new uo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          M
        ), H.push({
          event: k,
          listeners: ot
        }), k.data = nt)), J0(
          H,
          t,
          O,
          l,
          M
        );
      }
      Fd(H, e);
    });
  }
  function Ba(t, e, l) {
    return {
      instance: t,
      listener: e,
      currentTarget: l
    };
  }
  function ii(t, e) {
    for (var l = e + "Capture", n = []; t !== null; ) {
      var a = t, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = na(t, l), a != null && n.unshift(
        Ba(t, a, i)
      ), a = na(t, e), a != null && n.push(
        Ba(t, a, i)
      )), t.tag === 3) return n;
      t = t.return;
    }
    return [];
  }
  function W0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Id(t, e, l, n, a) {
    for (var i = e._reactName, s = []; l !== null && l !== n; ) {
      var h = l, v = h.alternate, O = h.stateNode;
      if (h = h.tag, v !== null && v === n) break;
      h !== 5 && h !== 26 && h !== 27 || O === null || (v = O, a ? (O = na(l, i), O != null && s.unshift(
        Ba(l, O, v)
      )) : a || (O = na(l, i), O != null && s.push(
        Ba(l, O, v)
      ))), l = l.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var I0 = /\r\n?/g, P0 = /\u0000|\uFFFD/g;
  function Pd(t) {
    return (typeof t == "string" ? t : "" + t).replace(I0, `
`).replace(P0, "");
  }
  function th(t, e) {
    return e = Pd(e), Pd(t) === e;
  }
  function Tt(t, e, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? e === "body" || e === "textarea" && n === "" || mn(t, n) : (typeof n == "number" || typeof n == "bigint") && e !== "body" && mn(t, "" + n);
        break;
      case "className":
        ou(t, "class", n);
        break;
      case "tabIndex":
        ou(t, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ou(t, l, n);
        break;
      case "style":
        Pr(t, n, i);
        break;
      case "data":
        if (e !== "object") {
          ou(t, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = du("" + n), t.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (e !== "input" && Tt(t, e, "name", a.name, a, null), Tt(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Tt(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Tt(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Tt(t, e, "encType", a.encType, a, null), Tt(t, e, "method", a.method, a, null), Tt(t, e, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          t.removeAttribute(l);
          break;
        }
        n = du("" + n), t.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (t.onclick = Je);
        break;
      case "onScroll":
        n != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        n != null && ft("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        t.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (n == null || typeof n == "function" || typeof n == "boolean" || typeof n == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        l = du("" + n), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          l
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "" + n) : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? t.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? t.setAttribute(l, n) : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? t.removeAttribute(l) : t.setAttribute(l, n);
        break;
      case "popover":
        ft("beforetoggle", t), ft("toggle", t), ru(t, "popover", n);
        break;
      case "xlinkActuate":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Ke(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Ke(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        ru(t, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = zy.get(l) || l, ru(t, l, n));
    }
  }
  function jf(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        Pr(t, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(r(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(r(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? mn(t, n) : (typeof n == "number" || typeof n == "bigint") && mn(t, "" + n);
        break;
      case "onScroll":
        n != null && ft("scroll", t);
        break;
      case "onScrollEnd":
        n != null && ft("scrollend", t);
        break;
      case "onClick":
        n != null && (t.onclick = Je);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Vr.hasOwnProperty(l))
          t: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), e = l.slice(2, a ? l.length - 7 : void 0), i = t[ue] || null, i = i != null ? i[l] : null, typeof i == "function" && t.removeEventListener(e, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, n, a);
              break t;
            }
            l in t ? t[l] = n : n === !0 ? t.setAttribute(l, "") : ru(t, l, n);
          }
    }
  }
  function Wt(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", t), ft("load", t);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var s = l[i];
            if (s != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Tt(t, e, i, s, l, null);
              }
          }
        a && Tt(t, e, "srcSet", l.srcSet, l, null), n && Tt(t, e, "src", l.src, l, null);
        return;
      case "input":
        ft("invalid", t);
        var h = i = s = a = null, v = null, O = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var M = l[n];
            if (M != null)
              switch (n) {
                case "name":
                  a = M;
                  break;
                case "type":
                  s = M;
                  break;
                case "checked":
                  v = M;
                  break;
                case "defaultChecked":
                  O = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  h = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Tt(t, e, n, M, l, null);
              }
          }
        $r(
          t,
          i,
          h,
          v,
          O,
          s,
          a,
          !1
        );
        return;
      case "select":
        ft("invalid", t), n = s = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (h = l[a], h != null))
            switch (a) {
              case "value":
                i = h;
                break;
              case "defaultValue":
                s = h;
                break;
              case "multiple":
                n = h;
              default:
                Tt(t, e, a, h, l, null);
            }
        e = i, l = s, t.multiple = !!n, e != null ? hn(t, !!n, e, !1) : l != null && hn(t, !!n, l, !0);
        return;
      case "textarea":
        ft("invalid", t), i = a = n = null;
        for (s in l)
          if (l.hasOwnProperty(s) && (h = l[s], h != null))
            switch (s) {
              case "value":
                n = h;
                break;
              case "defaultValue":
                a = h;
                break;
              case "children":
                i = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(r(91));
                break;
              default:
                Tt(t, e, s, h, l, null);
            }
        Wr(t, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : Tt(t, e, v, n, l, null));
        return;
      case "dialog":
        ft("beforetoggle", t), ft("toggle", t), ft("cancel", t), ft("close", t);
        break;
      case "iframe":
      case "object":
        ft("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ha.length; n++)
          ft(Ha[n], t);
        break;
      case "image":
        ft("error", t), ft("load", t);
        break;
      case "details":
        ft("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", t), ft("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in l)
          if (l.hasOwnProperty(O) && (n = l[O], n != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Tt(t, e, O, n, l, null);
            }
        return;
      default:
        if (Wi(e)) {
          for (M in l)
            l.hasOwnProperty(M) && (n = l[M], n !== void 0 && jf(
              t,
              e,
              M,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && (n = l[h], n != null && Tt(t, e, h, n, l, null));
  }
  function tp(t, e, l, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, i = null, s = null, h = null, v = null, O = null, M = null;
        for (x in l) {
          var H = l[x];
          if (l.hasOwnProperty(x) && H != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = H;
              default:
                n.hasOwnProperty(x) || Tt(t, e, x, null, n, H);
            }
        }
        for (var _ in n) {
          var x = n[_];
          if (H = l[_], n.hasOwnProperty(_) && (x != null || H != null))
            switch (_) {
              case "type":
                i = x;
                break;
              case "name":
                a = x;
                break;
              case "checked":
                O = x;
                break;
              case "defaultChecked":
                M = x;
                break;
              case "value":
                s = x;
                break;
              case "defaultValue":
                h = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(r(137, e));
                break;
              default:
                x !== H && Tt(
                  t,
                  e,
                  _,
                  x,
                  n,
                  H
                );
            }
        }
        $i(
          t,
          s,
          h,
          v,
          O,
          M,
          i,
          a
        );
        return;
      case "select":
        x = s = h = _ = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                x = v;
              default:
                n.hasOwnProperty(i) || Tt(
                  t,
                  e,
                  i,
                  null,
                  n,
                  v
                );
            }
        for (a in n)
          if (i = n[a], v = l[a], n.hasOwnProperty(a) && (i != null || v != null))
            switch (a) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                h = i;
                break;
              case "multiple":
                s = i;
              default:
                i !== v && Tt(
                  t,
                  e,
                  a,
                  i,
                  n,
                  v
                );
            }
        e = h, l = s, n = x, _ != null ? hn(t, !!l, _, !1) : !!n != !!l && (e != null ? hn(t, !!l, e, !0) : hn(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        x = _ = null;
        for (h in l)
          if (a = l[h], l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Tt(t, e, h, null, n, a);
            }
        for (s in n)
          if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null))
            switch (s) {
              case "value":
                _ = a;
                break;
              case "defaultValue":
                x = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && Tt(t, e, s, a, n, i);
            }
        Fr(t, _, x);
        return;
      case "option":
        for (var Z in l)
          _ = l[Z], l.hasOwnProperty(Z) && _ != null && !n.hasOwnProperty(Z) && (Z === "selected" ? t.selected = !1 : Tt(
            t,
            e,
            Z,
            null,
            n,
            _
          ));
        for (v in n)
          _ = n[v], x = l[v], n.hasOwnProperty(v) && _ !== x && (_ != null || x != null) && (v === "selected" ? t.selected = _ && typeof _ != "function" && typeof _ != "symbol" : Tt(
            t,
            e,
            v,
            _,
            n,
            x
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in l)
          _ = l[W], l.hasOwnProperty(W) && _ != null && !n.hasOwnProperty(W) && Tt(t, e, W, null, n, _);
        for (O in n)
          if (_ = n[O], x = l[O], n.hasOwnProperty(O) && _ !== x && (_ != null || x != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(r(137, e));
                break;
              default:
                Tt(
                  t,
                  e,
                  O,
                  _,
                  n,
                  x
                );
            }
        return;
      default:
        if (Wi(e)) {
          for (var At in l)
            _ = l[At], l.hasOwnProperty(At) && _ !== void 0 && !n.hasOwnProperty(At) && jf(
              t,
              e,
              At,
              void 0,
              n,
              _
            );
          for (M in n)
            _ = n[M], x = l[M], !n.hasOwnProperty(M) || _ === x || _ === void 0 && x === void 0 || jf(
              t,
              e,
              M,
              _,
              n,
              x
            );
          return;
        }
    }
    for (var A in l)
      _ = l[A], l.hasOwnProperty(A) && _ != null && !n.hasOwnProperty(A) && Tt(t, e, A, null, n, _);
    for (H in n)
      _ = n[H], x = l[H], !n.hasOwnProperty(H) || _ === x || _ == null && x == null || Tt(t, e, H, _, n, x);
  }
  function eh(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function ep() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, s = a.initiatorType, h = a.duration;
        if (i && h && eh(s)) {
          for (s = 0, h = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], O = v.startTime;
            if (O > h) break;
            var M = v.transferSize, H = v.initiatorType;
            M && eh(H) && (v = v.responseEnd, s += M * (v < h ? 1 : (h - O) / (v - O)));
          }
          if (--n, e += 8 * (i + s) / (a.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var qf = null, Yf = null;
  function ci(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function lh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function nh(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Gf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Xf = null;
  function lp() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Xf ? !1 : (Xf = t, !0) : (Xf = null, !1);
  }
  var ah = typeof setTimeout == "function" ? setTimeout : void 0, np = typeof clearTimeout == "function" ? clearTimeout : void 0, uh = typeof Promise == "function" ? Promise : void 0, ap = typeof queueMicrotask == "function" ? queueMicrotask : typeof uh < "u" ? function(t) {
    return uh.resolve(null).then(t).catch(up);
  } : ah;
  function up(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ml(t) {
    return t === "head";
  }
  function ih(t, e) {
    var l = e, n = 0;
    do {
      var a = l.nextSibling;
      if (t.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            t.removeChild(a), Zn(e);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          La(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, La(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling, h = i.nodeName;
            i[ea] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
          }
        } else
          l === "body" && La(t.ownerDocument.body);
      l = a;
    } while (l);
    Zn(e);
  }
  function ch(t, e) {
    var l = t;
    t = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
      l = n;
    } while (l);
  }
  function Qf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (e = e.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qf(l), Ji(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function ip(t, e, l, n) {
    for (; t.nodeType === 1; ) {
      var a = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!n && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (n) {
        if (!t[ea])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (i = t.getAttribute("rel"), i === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || t.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || t.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (i = t.getAttribute("src"), (i !== (a.src == null ? null : a.src) || t.getAttribute("type") !== (a.type == null ? null : a.type) || t.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && t.getAttribute("name") === i)
          return t;
      } else return t;
      if (t = Me(t.nextSibling), t === null) break;
    }
    return null;
  }
  function cp(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function fh(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function Vf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Zf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function fp(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading")
      e();
    else {
      var n = function() {
        e(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), t._reactRetry = n;
    }
  }
  function Me(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Kf = null;
  function rh(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0)
            return Me(t.nextSibling);
          e--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function oh(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else l !== "/$" && l !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function sh(t, e, l) {
    switch (e = ci(l), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function La(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ji(t);
  }
  var Ne = /* @__PURE__ */ new Map(), dh = /* @__PURE__ */ new Set();
  function fi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var rl = X.d;
  X.d = {
    f: rp,
    r: op,
    D: sp,
    C: dp,
    L: hp,
    m: mp,
    X: pp,
    S: yp,
    M: vp
  };
  function rp() {
    var t = rl.f(), e = Pu();
    return t || e;
  }
  function op(t) {
    var e = on(t);
    e !== null && e.tag === 5 && e.type === "form" ? xs(e) : rl.r(t);
  }
  var Xn = typeof document > "u" ? null : document;
  function hh(t, e, l) {
    var n = Xn;
    if (n && typeof e == "string" && e) {
      var a = Oe(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), dh.has(a) || (dh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), Wt(e, "link", t), Zt(e), n.head.appendChild(e)));
    }
  }
  function sp(t) {
    rl.D(t), hh("dns-prefetch", t, null);
  }
  function dp(t, e) {
    rl.C(t, e), hh("preconnect", t, e);
  }
  function hp(t, e, l) {
    rl.L(t, e, l);
    var n = Xn;
    if (n && t && e) {
      var a = 'link[rel="preload"][as="' + Oe(e) + '"]';
      e === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Oe(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Oe(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Oe(t) + '"]';
      var i = a;
      switch (e) {
        case "style":
          i = Qn(t);
          break;
        case "script":
          i = Vn(t);
      }
      Ne.has(i) || (t = D(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ne.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(ja(i)) || e === "script" && n.querySelector(qa(i)) || (e = n.createElement("link"), Wt(e, "link", t), Zt(e), n.head.appendChild(e)));
    }
  }
  function mp(t, e) {
    rl.m(t, e);
    var l = Xn;
    if (l && t) {
      var n = e && typeof e.as == "string" ? e.as : "script", a = 'link[rel="modulepreload"][as="' + Oe(n) + '"][href="' + Oe(t) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Vn(t);
      }
      if (!Ne.has(i) && (t = D({ rel: "modulepreload", href: t }, e), Ne.set(i, t), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(qa(i)))
              return;
        }
        n = l.createElement("link"), Wt(n, "link", t), Zt(n), l.head.appendChild(n);
      }
    }
  }
  function yp(t, e, l) {
    rl.S(t, e, l);
    var n = Xn;
    if (n && t) {
      var a = sn(n).hoistableStyles, i = Qn(t);
      e = e || "default";
      var s = a.get(i);
      if (!s) {
        var h = { loading: 0, preload: null };
        if (s = n.querySelector(
          ja(i)
        ))
          h.loading = 5;
        else {
          t = D(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ne.get(i)) && Jf(t, l);
          var v = s = n.createElement("link");
          Zt(v), Wt(v, "link", t), v._p = new Promise(function(O, M) {
            v.onload = O, v.onerror = M;
          }), v.addEventListener("load", function() {
            h.loading |= 1;
          }), v.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, ri(s, e, n);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: h
        }, a.set(i, s);
      }
    }
  }
  function pp(t, e) {
    rl.X(t, e);
    var l = Xn;
    if (l && t) {
      var n = sn(l).hoistableScripts, a = Vn(t), i = n.get(a);
      i || (i = l.querySelector(qa(a)), i || (t = D({ src: t, async: !0 }, e), (e = Ne.get(a)) && kf(t, e), i = l.createElement("script"), Zt(i), Wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function vp(t, e) {
    rl.M(t, e);
    var l = Xn;
    if (l && t) {
      var n = sn(l).hoistableScripts, a = Vn(t), i = n.get(a);
      i || (i = l.querySelector(qa(a)), i || (t = D({ src: t, async: !0, type: "module" }, e), (e = Ne.get(a)) && kf(t, e), i = l.createElement("script"), Zt(i), Wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function mh(t, e, l, n) {
    var a = (a = it.current) ? fi(a) : null;
    if (!a) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Qn(l.href), l = sn(
          a
        ).hoistableStyles, n = l.get(e), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          t = Qn(l.href);
          var i = sn(
            a
          ).hoistableStyles, s = i.get(t);
          if (s || (a = a.ownerDocument || a, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(t, s), (i = a.querySelector(
            ja(t)
          )) && !i._p && (s.instance = i, s.state.loading = 5), Ne.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ne.set(t, l), i || gp(
            a,
            t,
            l,
            s.state
          ))), e && n === null)
            throw Error(r(528, ""));
          return s;
        }
        if (e && n !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Vn(l), l = sn(
          a
        ).hoistableScripts, n = l.get(e), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(e, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function Qn(t) {
    return 'href="' + Oe(t) + '"';
  }
  function ja(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function yh(t) {
    return D({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function gp(t, e, l, n) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? n.loading = 1 : (e = t.createElement("link"), n.preload = e, e.addEventListener("load", function() {
      return n.loading |= 1;
    }), e.addEventListener("error", function() {
      return n.loading |= 2;
    }), Wt(e, "link", l), Zt(e), t.head.appendChild(e));
  }
  function Vn(t) {
    return '[src="' + Oe(t) + '"]';
  }
  function qa(t) {
    return "script[async]" + t;
  }
  function ph(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Oe(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Zt(n), n;
          var a = D({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (t.ownerDocument || t).createElement(
            "style"
          ), Zt(n), Wt(n, "style", a), ri(n, l.precedence, t), e.instance = n;
        case "stylesheet":
          a = Qn(l.href);
          var i = t.querySelector(
            ja(a)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Zt(i), i;
          n = yh(l), (a = Ne.get(a)) && Jf(n, a), i = (t.ownerDocument || t).createElement("link"), Zt(i);
          var s = i;
          return s._p = new Promise(function(h, v) {
            s.onload = h, s.onerror = v;
          }), Wt(i, "link", n), e.state.loading |= 4, ri(i, l.precedence, t), e.instance = i;
        case "script":
          return i = Vn(l.src), (a = t.querySelector(
            qa(i)
          )) ? (e.instance = a, Zt(a), a) : (n = l, (a = Ne.get(i)) && (n = D({}, l), kf(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Zt(a), Wt(a, "link", n), t.head.appendChild(a), e.instance = a);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (n = e.instance, e.state.loading |= 4, ri(n, l.precedence, t));
    return e.instance;
  }
  function ri(t, e, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, s = 0; s < n.length; s++) {
      var h = n[s];
      if (h.dataset.precedence === e) i = h;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(t, i.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
  }
  function Jf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function kf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var oi = null;
  function vh(t, e, l) {
    if (oi === null) {
      var n = /* @__PURE__ */ new Map(), a = oi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = oi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(t)) return n;
    for (n.set(t, null), l = l.getElementsByTagName(t), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[ea] || i[Jt] || t === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(e) || "";
        s = t + s;
        var h = n.get(s);
        h ? h.push(i) : n.set(s, [i]);
      }
    }
    return n;
  }
  function gh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function bp(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function bh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Sp(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Qn(n.href), i = e.querySelector(
          ja(a)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = si.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Zt(i);
          return;
        }
        i = e.ownerDocument || e, n = yh(n), (a = Ne.get(a)) && Jf(n, a), i = i.createElement("link"), Zt(i);
        var s = i;
        s._p = new Promise(function(h, v) {
          s.onload = h, s.onerror = v;
        }), Wt(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = si.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var $f = 0;
  function Ep(t, e) {
    return t.stylesheets && t.count === 0 && hi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && hi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && $f === 0 && ($f = 62500 * ep());
      var a = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && hi(t, t.stylesheets), t.unsuspend)) {
            var i = t.unsuspend;
            t.unsuspend = null, i();
          }
        },
        (t.imgBytes > $f ? 50 : 800) + e
      );
      return t.unsuspend = l, function() {
        t.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function si() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) hi(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null, t();
      }
    }
  }
  var di = null;
  function hi(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, di = /* @__PURE__ */ new Map(), e.forEach(Tp, t), di = null, si.call(t));
  }
  function Tp(t, e) {
    if (!(e.state.loading & 4)) {
      var l = di.get(t);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), di.set(t, l);
        for (var a = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var s = a[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (l.set(s.dataset.precedence, s), n = s);
        }
        n && l.set(null, n);
      }
      a = e.instance, s = a.getAttribute("data-precedence"), i = l.get(s) || n, i === n && l.set(null, a), l.set(s, a), this.count++, n = si.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(a, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Ya = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: ht,
    _currentValue2: ht,
    _threadCount: 0
  };
  function Ap(t, e, l, n, a, i, s, h, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qi(0), this.hiddenUpdates = Qi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Sh(t, e, l, n, a, i, s, h, v, O, M, H) {
    return t = new Ap(
      t,
      e,
      l,
      s,
      v,
      O,
      M,
      H,
      h
    ), e = 1, i === !0 && (e |= 24), i = ge(3, null, null, e), t.current = i, i.stateNode = t, e = zc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, Dc(i), t;
  }
  function Eh(t) {
    return t ? (t = En, t) : En;
  }
  function Th(t, e, l, n, a, i) {
    a = Eh(a), n.context === null ? n.context = a : n.pendingContext = a, n = El(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Tl(t, n, e), l !== null && (se(l, t, e), ga(l, t, e));
  }
  function Ah(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Ff(t, e) {
    Ah(t, e), (t = t.alternate) && Ah(t, e);
  }
  function Rh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vl(t, 67108864);
      e !== null && se(e, t, 67108864), Ff(t, 67108864);
    }
  }
  function Oh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ae();
      e = Vi(e);
      var l = Vl(t, e);
      l !== null && se(l, t, e), Ff(t, e);
    }
  }
  var mi = !0;
  function Rp(t, e, l, n) {
    var a = j.T;
    j.T = null;
    var i = X.p;
    try {
      X.p = 2, Wf(t, e, l, n);
    } finally {
      X.p = i, j.T = a;
    }
  }
  function Op(t, e, l, n) {
    var a = j.T;
    j.T = null;
    var i = X.p;
    try {
      X.p = 8, Wf(t, e, l, n);
    } finally {
      X.p = i, j.T = a;
    }
  }
  function Wf(t, e, l, n) {
    if (mi) {
      var a = If(n);
      if (a === null)
        Lf(
          t,
          e,
          n,
          yi,
          l
        ), zh(t, n);
      else if (zp(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (zh(t, n), e & 4 && -1 < _p.indexOf(t)) {
        for (; a !== null; ) {
          var i = on(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = ql(i.pendingLanes);
                  if (s !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; s; ) {
                      var v = 1 << 31 - pe(s);
                      h.entanglements[1] |= v, s &= ~v;
                    }
                    Ve(i), (pt & 6) === 0 && (Wu = me() + 500, wa(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = Vl(i, 2), h !== null && se(h, i, 2), Pu(), Ff(i, 2);
            }
          if (i = If(n), i === null && Lf(
            t,
            e,
            n,
            yi,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Lf(
          t,
          e,
          n,
          null,
          l
        );
    }
  }
  function If(t) {
    return t = Pi(t), Pf(t);
  }
  var yi = null;
  function Pf(t) {
    if (yi = null, t = rn(t), t !== null) {
      var e = m(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (l === 31) {
          if (t = g(e), t !== null) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return yi = t, null;
  }
  function _h(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (sy()) {
          case Nr:
            return 2;
          case wr:
            return 8;
          case au:
          case dy:
            return 32;
          case Hr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var tr = !1, Nl = null, wl = null, Hl = null, Ga = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), Bl = [], _p = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Nl = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Hl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ga.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xa.delete(e.pointerId);
    }
  }
  function Qa(t, e, l, n, a, i) {
    return t === null || t.nativeEvent !== i ? (t = {
      blockedOn: e,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, e !== null && (e = on(e), e !== null && Rh(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function zp(t, e, l, n, a) {
    switch (e) {
      case "focusin":
        return Nl = Qa(
          Nl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return wl = Qa(
          wl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Hl = Qa(
          Hl,
          t,
          e,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Ga.set(
          i,
          Qa(
            Ga.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Xa.set(
          i,
          Qa(
            Xa.get(i) || null,
            t,
            e,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function Ch(t) {
    var e = rn(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = p(l), e !== null) {
            t.blockedOn = e, Gr(t.priority, function() {
              Oh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(l), e !== null) {
            t.blockedOn = e, Gr(t.priority, function() {
              Oh(l);
            });
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function pi(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = If(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Ii = n, l.target.dispatchEvent(n), Ii = null;
      } else
        return e = on(l), e !== null && Rh(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function xh(t, e, l) {
    pi(t) && l.delete(e);
  }
  function Cp() {
    tr = !1, Nl !== null && pi(Nl) && (Nl = null), wl !== null && pi(wl) && (wl = null), Hl !== null && pi(Hl) && (Hl = null), Ga.forEach(xh), Xa.forEach(xh);
  }
  function vi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, tr || (tr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Cp
    )));
  }
  var gi = null;
  function Uh(t) {
    gi !== t && (gi = t, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        gi === t && (gi = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], n = t[e + 1], a = t[e + 2];
          if (typeof n != "function") {
            if (Pf(n || l) === null)
              continue;
            break;
          }
          var i = on(l);
          i !== null && (t.splice(e, 3), e -= 3, Wc(
            i,
            {
              pending: !0,
              data: a,
              method: l.method,
              action: n
            },
            n,
            a
          ));
        }
      }
    ));
  }
  function Zn(t) {
    function e(v) {
      return vi(v, t);
    }
    Nl !== null && vi(Nl, t), wl !== null && vi(wl, t), Hl !== null && vi(Hl, t), Ga.forEach(e), Xa.forEach(e);
    for (var l = 0; l < Bl.length; l++) {
      var n = Bl[l];
      n.blockedOn === t && (n.blockedOn = null);
    }
    for (; 0 < Bl.length && (l = Bl[0], l.blockedOn === null); )
      Ch(l), l.blockedOn === null && Bl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], s = a[ue] || null;
        if (typeof i == "function")
          s || Uh(l);
        else if (s) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, s = i[ue] || null)
              h = s.formAction;
            else if (Pf(a) !== null) continue;
          } else h = s.action;
          typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), Uh(l);
        }
      }
  }
  function Dh() {
    function t(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(s) {
            return a = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      a !== null && (a(), a = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, a = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), a !== null && (a(), a = null);
      };
    }
  }
  function er(t) {
    this._internalRoot = t;
  }
  bi.prototype.render = er.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var l = e.current, n = Ae();
    Th(l, n, t, e, null, null);
  }, bi.prototype.unmount = er.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Th(t.current, 2, null, t, null, null), Pu(), e[fn] = null;
    }
  };
  function bi(t) {
    this._internalRoot = t;
  }
  bi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Yr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Bl.length && e !== 0 && e < Bl[l].priority; l++) ;
      Bl.splice(l, 0, t), l === 0 && Ch(t);
    }
  };
  var Mh = f.version;
  if (Mh !== "19.2.3")
    throw Error(
      r(
        527,
        Mh,
        "19.2.3"
      )
    );
  X.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = b(e), t = t !== null ? T(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var xp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: j,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber)
      try {
        In = Si.inject(
          xp
        ), ye = Si;
      } catch {
      }
  }
  return Ka.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, n = "", a = qs, i = Ys, s = Gs;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = Sh(
      t,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      i,
      s,
      Dh
    ), t[fn] = e.current, Bf(t), new er(e);
  }, Ka.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var n = !1, a = "", i = qs, s = Ys, h = Gs, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), e = Sh(
      t,
      1,
      !0,
      e,
      l ?? null,
      n,
      a,
      v,
      i,
      s,
      h,
      Dh
    ), e.context = Eh(null), l = e.current, n = Ae(), n = Vi(n), a = El(n), a.callback = null, Tl(l, a, n), l = n, e.current.lanes = l, ta(e, l), Ve(e), t[fn] = e.current, Bf(t), new bi(e);
  }, Ka.version = "19.2.3", Ka;
}
var kh;
function pg() {
  if (kh) return fr.exports;
  kh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), fr.exports = yg(), fr.exports;
}
var vg = pg();
const pr = ({ label: u, onClick: c, disabled: f, type: o = "button", className: r, children: d, mainButtonStyle: m }) => /* @__PURE__ */ F.jsx(
  "button",
  {
    className: r || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: c,
    disabled: f,
    type: o,
    style: m,
    children: d || u
  }
);
class ka extends Error {
}
ka.prototype.name = "InvalidTokenError";
function gg(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (c, f) => {
    let o = f.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function bg(u) {
  let c = u.replace(/-/g, "+").replace(/_/g, "/");
  switch (c.length % 4) {
    case 0:
      break;
    case 2:
      c += "==";
      break;
    case 3:
      c += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return gg(c);
  } catch {
    return atob(c);
  }
}
function Sg(u, c) {
  if (typeof u != "string")
    throw new ka("Invalid token specified: must be a string");
  c || (c = {});
  const f = c.header === !0 ? 0 : 1, o = u.split(".")[f];
  if (typeof o != "string")
    throw new ka(`Invalid token specified: missing part #${f + 1}`);
  let r;
  try {
    r = bg(o);
  } catch (d) {
    throw new ka(`Invalid token specified: invalid base64 for part #${f + 1} (${d.message})`);
  }
  try {
    return JSON.parse(r);
  } catch (d) {
    throw new ka(`Invalid token specified: invalid json for part #${f + 1} (${d.message})`);
  }
}
const $h = U.forwardRef((u, c) => {
  const { label: f, startIcon: o, endIcon: r, error: d, helperText: m, optional: p, className: g, options: y, ...b } = u, T = !!d || !!m, D = b.type === "select" || !!y;
  return /* @__PURE__ */ F.jsxs("div", { className: `flex! flex-col! ${g || ""}`, children: [
    f && /* @__PURE__ */ F.jsxs("label", { className: "block! mb-1.5! font-semibold! text-left!", children: [
      f,
      " ",
      p && /* @__PURE__ */ F.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
    ] }),
    /* @__PURE__ */ F.jsxs("div", { className: "flex! items-center! relative!", children: [
      o && /* @__PURE__ */ F.jsx("span", { className: "flex! items-center! justify-center! px-2! mr-1.5!", "aria-hidden": !0, children: o }),
      D ? /* @__PURE__ */ F.jsx(
        "select",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${T ? "border-[#d64545]" : "border-[#cbd5d5]"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...b,
          children: y && y.map((Q) => /* @__PURE__ */ F.jsx("option", { value: Q.value, children: Q.label }, Q.value))
        }
      ) : /* @__PURE__ */ F.jsx(
        "input",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${T ? "border-[#d64545]" : "border-[#cbd5d5]"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...b
        }
      ),
      r && /* @__PURE__ */ F.jsx("span", { className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!", "aria-hidden": !0, children: r })
    ] }),
    d && typeof d == "string" && /* @__PURE__ */ F.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
    !d && m && /* @__PURE__ */ F.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: m })
  ] });
});
function Lm(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
var Fh = {};
const { toString: Eg } = Object.prototype, { getPrototypeOf: zr } = Object, { iterator: Mi, toStringTag: jm } = Symbol, Ni = /* @__PURE__ */ ((u) => (c) => {
  const f = Eg.call(c);
  return u[f] || (u[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qe = (u) => (u = u.toLowerCase(), (c) => Ni(c) === u), wi = (u) => (c) => typeof c === u, { isArray: $n } = Array, Kn = wi("undefined");
function Pa(u) {
  return u !== null && !Kn(u) && u.constructor !== null && !Kn(u.constructor) && de(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const qm = qe("ArrayBuffer");
function Tg(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && qm(u.buffer), c;
}
const Ag = wi("string"), de = wi("function"), Ym = wi("number"), tu = (u) => u !== null && typeof u == "object", Rg = (u) => u === !0 || u === !1, Oi = (u) => {
  if (Ni(u) !== "object")
    return !1;
  const c = zr(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(jm in u) && !(Mi in u);
}, Og = (u) => {
  if (!tu(u) || Pa(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, _g = qe("Date"), zg = qe("File"), Cg = qe("Blob"), xg = qe("FileList"), Ug = (u) => tu(u) && de(u.pipe), Dg = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || de(u.append) && ((c = Ni(u)) === "formdata" || // detect form-data instance
  c === "object" && de(u.toString) && u.toString() === "[object FormData]"));
}, Mg = qe("URLSearchParams"), [Ng, wg, Hg, Bg] = ["ReadableStream", "Request", "Response", "Headers"].map(qe), Lg = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function eu(u, c, { allOwnKeys: f = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let o, r;
  if (typeof u != "object" && (u = [u]), $n(u))
    for (o = 0, r = u.length; o < r; o++)
      c.call(null, u[o], o, u);
  else {
    if (Pa(u))
      return;
    const d = f ? Object.getOwnPropertyNames(u) : Object.keys(u), m = d.length;
    let p;
    for (o = 0; o < m; o++)
      p = d[o], c.call(null, u[p], p, u);
  }
}
function Gm(u, c) {
  if (Pa(u))
    return null;
  c = c.toLowerCase();
  const f = Object.keys(u);
  let o = f.length, r;
  for (; o-- > 0; )
    if (r = f[o], c === r.toLowerCase())
      return r;
  return null;
}
const nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Xm = (u) => !Kn(u) && u !== nn;
function vr() {
  const { caseless: u, skipUndefined: c } = Xm(this) && this || {}, f = {}, o = (r, d) => {
    const m = u && Gm(f, d) || d;
    Oi(f[m]) && Oi(r) ? f[m] = vr(f[m], r) : Oi(r) ? f[m] = vr({}, r) : $n(r) ? f[m] = r.slice() : (!c || !Kn(r)) && (f[m] = r);
  };
  for (let r = 0, d = arguments.length; r < d; r++)
    arguments[r] && eu(arguments[r], o);
  return f;
}
const jg = (u, c, f, { allOwnKeys: o } = {}) => (eu(c, (r, d) => {
  f && de(r) ? u[d] = Lm(r, f) : u[d] = r;
}, { allOwnKeys: o }), u), qg = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Yg = (u, c, f, o) => {
  u.prototype = Object.create(c.prototype, o), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), f && Object.assign(u.prototype, f);
}, Gg = (u, c, f, o) => {
  let r, d, m;
  const p = {};
  if (c = c || {}, u == null) return c;
  do {
    for (r = Object.getOwnPropertyNames(u), d = r.length; d-- > 0; )
      m = r[d], (!o || o(m, u, c)) && !p[m] && (c[m] = u[m], p[m] = !0);
    u = f !== !1 && zr(u);
  } while (u && (!f || f(u, c)) && u !== Object.prototype);
  return c;
}, Xg = (u, c, f) => {
  u = String(u), (f === void 0 || f > u.length) && (f = u.length), f -= c.length;
  const o = u.indexOf(c, f);
  return o !== -1 && o === f;
}, Qg = (u) => {
  if (!u) return null;
  if ($n(u)) return u;
  let c = u.length;
  if (!Ym(c)) return null;
  const f = new Array(c);
  for (; c-- > 0; )
    f[c] = u[c];
  return f;
}, Vg = /* @__PURE__ */ ((u) => (c) => u && c instanceof u)(typeof Uint8Array < "u" && zr(Uint8Array)), Zg = (u, c) => {
  const o = (u && u[Mi]).call(u);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const d = r.value;
    c.call(u, d[0], d[1]);
  }
}, Kg = (u, c) => {
  let f;
  const o = [];
  for (; (f = u.exec(c)) !== null; )
    o.push(f);
  return o;
}, Jg = qe("HTMLFormElement"), kg = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, o, r) {
    return o.toUpperCase() + r;
  }
), Wh = (({ hasOwnProperty: u }) => (c, f) => u.call(c, f))(Object.prototype), $g = qe("RegExp"), Qm = (u, c) => {
  const f = Object.getOwnPropertyDescriptors(u), o = {};
  eu(f, (r, d) => {
    let m;
    (m = c(r, d, u)) !== !1 && (o[d] = m || r);
  }), Object.defineProperties(u, o);
}, Fg = (u) => {
  Qm(u, (c, f) => {
    if (de(u) && ["arguments", "caller", "callee"].indexOf(f) !== -1)
      return !1;
    const o = u[f];
    if (de(o)) {
      if (c.enumerable = !1, "writable" in c) {
        c.writable = !1;
        return;
      }
      c.set || (c.set = () => {
        throw Error("Can not rewrite read-only method '" + f + "'");
      });
    }
  });
}, Wg = (u, c) => {
  const f = {}, o = (r) => {
    r.forEach((d) => {
      f[d] = !0;
    });
  };
  return $n(u) ? o(u) : o(String(u).split(c)), f;
}, Ig = () => {
}, Pg = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function t1(u) {
  return !!(u && de(u.append) && u[jm] === "FormData" && u[Mi]);
}
const e1 = (u) => {
  const c = new Array(10), f = (o, r) => {
    if (tu(o)) {
      if (c.indexOf(o) >= 0)
        return;
      if (Pa(o))
        return o;
      if (!("toJSON" in o)) {
        c[r] = o;
        const d = $n(o) ? [] : {};
        return eu(o, (m, p) => {
          const g = f(m, r + 1);
          !Kn(g) && (d[p] = g);
        }), c[r] = void 0, d;
      }
    }
    return o;
  };
  return f(u, 0);
}, l1 = qe("AsyncFunction"), n1 = (u) => u && (tu(u) || de(u)) && de(u.then) && de(u.catch), Vm = ((u, c) => u ? setImmediate : c ? ((f, o) => (nn.addEventListener("message", ({ source: r, data: d }) => {
  r === nn && d === f && o.length && o.shift()();
}, !1), (r) => {
  o.push(r), nn.postMessage(f, "*");
}))(`axios@${Math.random()}`, []) : (f) => setTimeout(f))(
  typeof setImmediate == "function",
  de(nn.postMessage)
), a1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(nn) : typeof Fh < "u" && Fh.nextTick || Vm, u1 = (u) => u != null && de(u[Mi]), C = {
  isArray: $n,
  isArrayBuffer: qm,
  isBuffer: Pa,
  isFormData: Dg,
  isArrayBufferView: Tg,
  isString: Ag,
  isNumber: Ym,
  isBoolean: Rg,
  isObject: tu,
  isPlainObject: Oi,
  isEmptyObject: Og,
  isReadableStream: Ng,
  isRequest: wg,
  isResponse: Hg,
  isHeaders: Bg,
  isUndefined: Kn,
  isDate: _g,
  isFile: zg,
  isBlob: Cg,
  isRegExp: $g,
  isFunction: de,
  isStream: Ug,
  isURLSearchParams: Mg,
  isTypedArray: Vg,
  isFileList: xg,
  forEach: eu,
  merge: vr,
  extend: jg,
  trim: Lg,
  stripBOM: qg,
  inherits: Yg,
  toFlatObject: Gg,
  kindOf: Ni,
  kindOfTest: qe,
  endsWith: Xg,
  toArray: Qg,
  forEachEntry: Zg,
  matchAll: Kg,
  isHTMLForm: Jg,
  hasOwnProperty: Wh,
  hasOwnProp: Wh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qm,
  freezeMethods: Fg,
  toObjectSet: Wg,
  toCamelCase: kg,
  noop: Ig,
  toFiniteNumber: Pg,
  findKey: Gm,
  global: nn,
  isContextDefined: Xm,
  isSpecCompliantForm: t1,
  toJSONObject: e1,
  isAsyncFn: l1,
  isThenable: n1,
  setImmediate: Vm,
  asap: a1,
  isIterable: u1
};
function lt(u, c, f, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), f && (this.config = f), o && (this.request = o), r && (this.response = r, this.status = r.status ? r.status : null);
}
C.inherits(lt, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Zm = lt.prototype, Km = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((u) => {
  Km[u] = { value: u };
});
Object.defineProperties(lt, Km);
Object.defineProperty(Zm, "isAxiosError", { value: !0 });
lt.from = (u, c, f, o, r, d) => {
  const m = Object.create(Zm);
  C.toFlatObject(u, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = u && u.message ? u.message : "Error", g = c == null && u ? u.code : c;
  return lt.call(m, p, g, f, o, r), u && m.cause == null && Object.defineProperty(m, "cause", { value: u, configurable: !0 }), m.name = u && u.name || "Error", d && Object.assign(m, d), m;
};
const i1 = null;
function gr(u) {
  return C.isPlainObject(u) || C.isArray(u);
}
function Jm(u) {
  return C.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Ih(u, c, f) {
  return u ? u.concat(c).map(function(r, d) {
    return r = Jm(r), !f && d ? "[" + r + "]" : r;
  }).join(f ? "." : "") : c;
}
function c1(u) {
  return C.isArray(u) && !u.some(gr);
}
const f1 = C.toFlatObject(C, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Hi(u, c, f) {
  if (!C.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), f = C.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, N) {
    return !C.isUndefined(N[L]);
  });
  const o = f.metaTokens, r = f.visitor || b, d = f.dots, m = f.indexes, g = (f.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(c);
  if (!C.isFunction(r))
    throw new TypeError("visitor must be a function");
  function y(z) {
    if (z === null) return "";
    if (C.isDate(z))
      return z.toISOString();
    if (C.isBoolean(z))
      return z.toString();
    if (!g && C.isBlob(z))
      throw new lt("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(z) || C.isTypedArray(z) ? g && typeof Blob == "function" ? new Blob([z]) : Buffer.from(z) : z;
  }
  function b(z, L, N) {
    let Y = z;
    if (z && !N && typeof z == "object") {
      if (C.endsWith(L, "{}"))
        L = o ? L : L.slice(0, -2), z = JSON.stringify(z);
      else if (C.isArray(z) && c1(z) || (C.isFileList(z) || C.endsWith(L, "[]")) && (Y = C.toArray(z)))
        return L = Jm(L), Y.forEach(function(K, I) {
          !(C.isUndefined(K) || K === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? Ih([L], I, d) : m === null ? L : L + "[]",
            y(K)
          );
        }), !1;
    }
    return gr(z) ? !0 : (c.append(Ih(N, L, d), y(z)), !1);
  }
  const T = [], D = Object.assign(f1, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: gr
  });
  function Q(z, L) {
    if (!C.isUndefined(z)) {
      if (T.indexOf(z) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      T.push(z), C.forEach(z, function(Y, q) {
        (!(C.isUndefined(Y) || Y === null) && r.call(
          c,
          Y,
          C.isString(q) ? q.trim() : q,
          L,
          D
        )) === !0 && Q(Y, L ? L.concat(q) : [q]);
      }), T.pop();
    }
  }
  if (!C.isObject(u))
    throw new TypeError("data must be an object");
  return Q(u), c;
}
function Ph(u) {
  const c = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(o) {
    return c[o];
  });
}
function Cr(u, c) {
  this._pairs = [], u && Hi(u, this, c);
}
const km = Cr.prototype;
km.append = function(c, f) {
  this._pairs.push([c, f]);
};
km.toString = function(c) {
  const f = c ? function(o) {
    return c.call(this, o, Ph);
  } : Ph;
  return this._pairs.map(function(r) {
    return f(r[0]) + "=" + f(r[1]);
  }, "").join("&");
};
function r1(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function $m(u, c, f) {
  if (!c)
    return u;
  const o = f && f.encode || r1;
  C.isFunction(f) && (f = {
    serialize: f
  });
  const r = f && f.serialize;
  let d;
  if (r ? d = r(c, f) : d = C.isURLSearchParams(c) ? c.toString() : new Cr(c, f).toString(o), d) {
    const m = u.indexOf("#");
    m !== -1 && (u = u.slice(0, m)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class tm {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(c, f, o) {
    return this.handlers.push({
      fulfilled: c,
      rejected: f,
      synchronous: o ? o.synchronous : !1,
      runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {void}
   */
  eject(c) {
    this.handlers[c] && (this.handlers[c] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(c) {
    C.forEach(this.handlers, function(o) {
      o !== null && c(o);
    });
  }
}
const Fm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, o1 = typeof URLSearchParams < "u" ? URLSearchParams : Cr, s1 = typeof FormData < "u" ? FormData : null, d1 = typeof Blob < "u" ? Blob : null, h1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: o1,
    FormData: s1,
    Blob: d1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xr = typeof window < "u" && typeof document < "u", br = typeof navigator == "object" && navigator || void 0, m1 = xr && (!br || ["ReactNative", "NativeScript", "NS"].indexOf(br.product) < 0), y1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", p1 = xr && window.location.href || "http://localhost", v1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xr,
  hasStandardBrowserEnv: m1,
  hasStandardBrowserWebWorkerEnv: y1,
  navigator: br,
  origin: p1
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...v1,
  ...h1
};
function g1(u, c) {
  return Hi(u, new te.classes.URLSearchParams(), {
    visitor: function(f, o, r, d) {
      return te.isNode && C.isBuffer(f) ? (this.append(o, f.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function b1(u) {
  return C.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function S1(u) {
  const c = {}, f = Object.keys(u);
  let o;
  const r = f.length;
  let d;
  for (o = 0; o < r; o++)
    d = f[o], c[d] = u[d];
  return c;
}
function Wm(u) {
  function c(f, o, r, d) {
    let m = f[d++];
    if (m === "__proto__") return !0;
    const p = Number.isFinite(+m), g = d >= f.length;
    return m = !m && C.isArray(r) ? r.length : m, g ? (C.hasOwnProp(r, m) ? r[m] = [r[m], o] : r[m] = o, !p) : ((!r[m] || !C.isObject(r[m])) && (r[m] = []), c(f, o, r[m], d) && C.isArray(r[m]) && (r[m] = S1(r[m])), !p);
  }
  if (C.isFormData(u) && C.isFunction(u.entries)) {
    const f = {};
    return C.forEachEntry(u, (o, r) => {
      c(b1(o), r, f, 0);
    }), f;
  }
  return null;
}
function E1(u, c, f) {
  if (C.isString(u))
    try {
      return (c || JSON.parse)(u), C.trim(u);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (f || JSON.stringify)(u);
}
const lu = {
  transitional: Fm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, f) {
    const o = f.getContentType() || "", r = o.indexOf("application/json") > -1, d = C.isObject(c);
    if (d && C.isHTMLForm(c) && (c = new FormData(c)), C.isFormData(c))
      return r ? JSON.stringify(Wm(c)) : c;
    if (C.isArrayBuffer(c) || C.isBuffer(c) || C.isStream(c) || C.isFile(c) || C.isBlob(c) || C.isReadableStream(c))
      return c;
    if (C.isArrayBufferView(c))
      return c.buffer;
    if (C.isURLSearchParams(c))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let p;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return g1(c, this.formSerializer).toString();
      if ((p = C.isFileList(c)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Hi(
          p ? { "files[]": c } : c,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return d || r ? (f.setContentType("application/json", !1), E1(c)) : c;
  }],
  transformResponse: [function(c) {
    const f = this.transitional || lu.transitional, o = f && f.forcedJSONParsing, r = this.responseType === "json";
    if (C.isResponse(c) || C.isReadableStream(c))
      return c;
    if (c && C.isString(c) && (o && !this.responseType || r)) {
      const m = !(f && f.silentJSONParsing) && r;
      try {
        return JSON.parse(c, this.parseReviver);
      } catch (p) {
        if (m)
          throw p.name === "SyntaxError" ? lt.from(p, lt.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    }
    return c;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: te.classes.FormData,
    Blob: te.classes.Blob
  },
  validateStatus: function(c) {
    return c >= 200 && c < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  lu.headers[u] = {};
});
const T1 = C.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), A1 = (u) => {
  const c = {};
  let f, o, r;
  return u && u.split(`
`).forEach(function(m) {
    r = m.indexOf(":"), f = m.substring(0, r).trim().toLowerCase(), o = m.substring(r + 1).trim(), !(!f || c[f] && T1[f]) && (f === "set-cookie" ? c[f] ? c[f].push(o) : c[f] = [o] : c[f] = c[f] ? c[f] + ", " + o : o);
  }), c;
}, em = /* @__PURE__ */ Symbol("internals");
function Ja(u) {
  return u && String(u).trim().toLowerCase();
}
function _i(u) {
  return u === !1 || u == null ? u : C.isArray(u) ? u.map(_i) : String(u);
}
function R1(u) {
  const c = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = f.exec(u); )
    c[o[1]] = o[2];
  return c;
}
const O1 = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function sr(u, c, f, o, r) {
  if (C.isFunction(o))
    return o.call(this, c, f);
  if (r && (c = f), !!C.isString(c)) {
    if (C.isString(o))
      return c.indexOf(o) !== -1;
    if (C.isRegExp(o))
      return o.test(c);
  }
}
function _1(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, f, o) => f.toUpperCase() + o);
}
function z1(u, c) {
  const f = C.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(u, o + f, {
      value: function(r, d, m) {
        return this[o].call(this, c, r, d, m);
      },
      configurable: !0
    });
  });
}
let he = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, f, o) {
    const r = this;
    function d(p, g, y) {
      const b = Ja(g);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = C.findKey(r, b);
      (!T || r[T] === void 0 || y === !0 || y === void 0 && r[T] !== !1) && (r[T || g] = _i(p));
    }
    const m = (p, g) => C.forEach(p, (y, b) => d(y, b, g));
    if (C.isPlainObject(c) || c instanceof this.constructor)
      m(c, f);
    else if (C.isString(c) && (c = c.trim()) && !O1(c))
      m(A1(c), f);
    else if (C.isObject(c) && C.isIterable(c)) {
      let p = {}, g, y;
      for (const b of c) {
        if (!C.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = b[0]] = (g = p[y]) ? C.isArray(g) ? [...g, b[1]] : [g, b[1]] : b[1];
      }
      m(p, f);
    } else
      c != null && d(f, c, o);
    return this;
  }
  get(c, f) {
    if (c = Ja(c), c) {
      const o = C.findKey(this, c);
      if (o) {
        const r = this[o];
        if (!f)
          return r;
        if (f === !0)
          return R1(r);
        if (C.isFunction(f))
          return f.call(this, r, o);
        if (C.isRegExp(f))
          return f.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, f) {
    if (c = Ja(c), c) {
      const o = C.findKey(this, c);
      return !!(o && this[o] !== void 0 && (!f || sr(this, this[o], o, f)));
    }
    return !1;
  }
  delete(c, f) {
    const o = this;
    let r = !1;
    function d(m) {
      if (m = Ja(m), m) {
        const p = C.findKey(o, m);
        p && (!f || sr(o, o[p], p, f)) && (delete o[p], r = !0);
      }
    }
    return C.isArray(c) ? c.forEach(d) : d(c), r;
  }
  clear(c) {
    const f = Object.keys(this);
    let o = f.length, r = !1;
    for (; o--; ) {
      const d = f[o];
      (!c || sr(this, this[d], d, c, !0)) && (delete this[d], r = !0);
    }
    return r;
  }
  normalize(c) {
    const f = this, o = {};
    return C.forEach(this, (r, d) => {
      const m = C.findKey(o, d);
      if (m) {
        f[m] = _i(r), delete f[d];
        return;
      }
      const p = c ? _1(d) : String(d).trim();
      p !== d && delete f[d], f[p] = _i(r), o[p] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const f = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (o, r) => {
      o != null && o !== !1 && (f[r] = c && C.isArray(o) ? o.join(", ") : o);
    }), f;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, f]) => c + ": " + f).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(c) {
    return c instanceof this ? c : new this(c);
  }
  static concat(c, ...f) {
    const o = new this(c);
    return f.forEach((r) => o.set(r)), o;
  }
  static accessor(c) {
    const o = (this[em] = this[em] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function d(m) {
      const p = Ja(m);
      o[p] || (z1(r, m), o[p] = !0);
    }
    return C.isArray(c) ? c.forEach(d) : d(c), this;
  }
};
he.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(he.prototype, ({ value: u }, c) => {
  let f = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(o) {
      this[f] = o;
    }
  };
});
C.freezeMethods(he);
function dr(u, c) {
  const f = this || lu, o = c || f, r = he.from(o.headers);
  let d = o.data;
  return C.forEach(u, function(p) {
    d = p.call(f, d, r.normalize(), c ? c.status : void 0);
  }), r.normalize(), d;
}
function Im(u) {
  return !!(u && u.__CANCEL__);
}
function Fn(u, c, f) {
  lt.call(this, u ?? "canceled", lt.ERR_CANCELED, c, f), this.name = "CanceledError";
}
C.inherits(Fn, lt, {
  __CANCEL__: !0
});
function Pm(u, c, f) {
  const o = f.config.validateStatus;
  !f.status || !o || o(f.status) ? u(f) : c(new lt(
    "Request failed with status code " + f.status,
    [lt.ERR_BAD_REQUEST, lt.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
function C1(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return c && c[1] || "";
}
function x1(u, c) {
  u = u || 10;
  const f = new Array(u), o = new Array(u);
  let r = 0, d = 0, m;
  return c = c !== void 0 ? c : 1e3, function(g) {
    const y = Date.now(), b = o[d];
    m || (m = y), f[r] = g, o[r] = y;
    let T = d, D = 0;
    for (; T !== r; )
      D += f[T++], T = T % u;
    if (r = (r + 1) % u, r === d && (d = (d + 1) % u), y - m < c)
      return;
    const Q = b && y - b;
    return Q ? Math.round(D * 1e3 / Q) : void 0;
  };
}
function U1(u, c) {
  let f = 0, o = 1e3 / c, r, d;
  const m = (y, b = Date.now()) => {
    f = b, r = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), T = b - f;
    T >= o ? m(y, b) : (r = y, d || (d = setTimeout(() => {
      d = null, m(r);
    }, o - T)));
  }, () => r && m(r)];
}
const xi = (u, c, f = 3) => {
  let o = 0;
  const r = x1(50, 250);
  return U1((d) => {
    const m = d.loaded, p = d.lengthComputable ? d.total : void 0, g = m - o, y = r(g), b = m <= p;
    o = m;
    const T = {
      loaded: m,
      total: p,
      progress: p ? m / p : void 0,
      bytes: g,
      rate: y || void 0,
      estimated: y && p && b ? (p - m) / y : void 0,
      event: d,
      lengthComputable: p != null,
      [c ? "download" : "upload"]: !0
    };
    u(T);
  }, f);
}, lm = (u, c) => {
  const f = u != null;
  return [(o) => c[0]({
    lengthComputable: f,
    total: u,
    loaded: o
  }), c[1]];
}, nm = (u) => (...c) => C.asap(() => u(...c)), D1 = te.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (f) => (f = new URL(f, te.origin), u.protocol === f.protocol && u.host === f.host && (c || u.port === f.port)))(
  new URL(te.origin),
  te.navigator && /(msie|trident)/i.test(te.navigator.userAgent)
) : () => !0, M1 = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, f, o, r, d, m) {
      if (typeof document > "u") return;
      const p = [`${u}=${encodeURIComponent(c)}`];
      C.isNumber(f) && p.push(`expires=${new Date(f).toUTCString()}`), C.isString(o) && p.push(`path=${o}`), C.isString(r) && p.push(`domain=${r}`), d === !0 && p.push("secure"), C.isString(m) && p.push(`SameSite=${m}`), document.cookie = p.join("; ");
    },
    read(u) {
      if (typeof document > "u") return null;
      const c = document.cookie.match(new RegExp("(?:^|; )" + u + "=([^;]*)"));
      return c ? decodeURIComponent(c[1]) : null;
    },
    remove(u) {
      this.write(u, "", Date.now() - 864e5, "/");
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function N1(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function w1(u, c) {
  return c ? u.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : u;
}
function ty(u, c, f) {
  let o = !N1(c);
  return u && (o || f == !1) ? w1(u, c) : c;
}
const am = (u) => u instanceof he ? { ...u } : u;
function un(u, c) {
  c = c || {};
  const f = {};
  function o(y, b, T, D) {
    return C.isPlainObject(y) && C.isPlainObject(b) ? C.merge.call({ caseless: D }, y, b) : C.isPlainObject(b) ? C.merge({}, b) : C.isArray(b) ? b.slice() : b;
  }
  function r(y, b, T, D) {
    if (C.isUndefined(b)) {
      if (!C.isUndefined(y))
        return o(void 0, y, T, D);
    } else return o(y, b, T, D);
  }
  function d(y, b) {
    if (!C.isUndefined(b))
      return o(void 0, b);
  }
  function m(y, b) {
    if (C.isUndefined(b)) {
      if (!C.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, b);
  }
  function p(y, b, T) {
    if (T in c)
      return o(y, b);
    if (T in u)
      return o(void 0, y);
  }
  const g = {
    url: d,
    method: d,
    data: d,
    baseURL: m,
    transformRequest: m,
    transformResponse: m,
    paramsSerializer: m,
    timeout: m,
    timeoutMessage: m,
    withCredentials: m,
    withXSRFToken: m,
    adapter: m,
    responseType: m,
    xsrfCookieName: m,
    xsrfHeaderName: m,
    onUploadProgress: m,
    onDownloadProgress: m,
    decompress: m,
    maxContentLength: m,
    maxBodyLength: m,
    beforeRedirect: m,
    transport: m,
    httpAgent: m,
    httpsAgent: m,
    cancelToken: m,
    socketPath: m,
    responseEncoding: m,
    validateStatus: p,
    headers: (y, b, T) => r(am(y), am(b), T, !0)
  };
  return C.forEach(Object.keys({ ...u, ...c }), function(b) {
    const T = g[b] || r, D = T(u[b], c[b], b);
    C.isUndefined(D) && T !== p || (f[b] = D);
  }), f;
}
const ey = (u) => {
  const c = un({}, u);
  let { data: f, withXSRFToken: o, xsrfHeaderName: r, xsrfCookieName: d, headers: m, auth: p } = c;
  if (c.headers = m = he.from(m), c.url = $m(ty(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer), p && m.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), C.isFormData(f)) {
    if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (C.isFunction(f.getHeaders)) {
      const g = f.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(g).forEach(([b, T]) => {
        y.includes(b.toLowerCase()) && m.set(b, T);
      });
    }
  }
  if (te.hasStandardBrowserEnv && (o && C.isFunction(o) && (o = o(c)), o || o !== !1 && D1(c.url))) {
    const g = r && d && M1.read(d);
    g && m.set(r, g);
  }
  return c;
}, H1 = typeof XMLHttpRequest < "u", B1 = H1 && function(u) {
  return new Promise(function(f, o) {
    const r = ey(u);
    let d = r.data;
    const m = he.from(r.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: y } = r, b, T, D, Q, z;
    function L() {
      Q && Q(), z && z(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let N = new XMLHttpRequest();
    N.open(r.method.toUpperCase(), r.url, !0), N.timeout = r.timeout;
    function Y() {
      if (!N)
        return;
      const K = he.from(
        "getAllResponseHeaders" in N && N.getAllResponseHeaders()
      ), at = {
        data: !p || p === "text" || p === "json" ? N.responseText : N.response,
        status: N.status,
        statusText: N.statusText,
        headers: K,
        config: u,
        request: N
      };
      Pm(function(dt) {
        f(dt), L();
      }, function(dt) {
        o(dt), L();
      }, at), N = null;
    }
    "onloadend" in N ? N.onloadend = Y : N.onreadystatechange = function() {
      !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(Y);
    }, N.onabort = function() {
      N && (o(new lt("Request aborted", lt.ECONNABORTED, u, N)), N = null);
    }, N.onerror = function(I) {
      const at = I && I.message ? I.message : "Network Error", gt = new lt(at, lt.ERR_NETWORK, u, N);
      gt.event = I || null, o(gt), N = null;
    }, N.ontimeout = function() {
      let I = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const at = r.transitional || Fm;
      r.timeoutErrorMessage && (I = r.timeoutErrorMessage), o(new lt(
        I,
        at.clarifyTimeoutError ? lt.ETIMEDOUT : lt.ECONNABORTED,
        u,
        N
      )), N = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in N && C.forEach(m.toJSON(), function(I, at) {
      N.setRequestHeader(at, I);
    }), C.isUndefined(r.withCredentials) || (N.withCredentials = !!r.withCredentials), p && p !== "json" && (N.responseType = r.responseType), y && ([D, z] = xi(y, !0), N.addEventListener("progress", D)), g && N.upload && ([T, Q] = xi(g), N.upload.addEventListener("progress", T), N.upload.addEventListener("loadend", Q)), (r.cancelToken || r.signal) && (b = (K) => {
      N && (o(!K || K.type ? new Fn(null, u, N) : K), N.abort(), N = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const q = C1(r.url);
    if (q && te.protocols.indexOf(q) === -1) {
      o(new lt("Unsupported protocol " + q + ":", lt.ERR_BAD_REQUEST, u));
      return;
    }
    N.send(d || null);
  });
}, L1 = (u, c) => {
  const { length: f } = u = u ? u.filter(Boolean) : [];
  if (c || f) {
    let o = new AbortController(), r;
    const d = function(y) {
      if (!r) {
        r = !0, p();
        const b = y instanceof Error ? y : this.reason;
        o.abort(b instanceof lt ? b : new Fn(b instanceof Error ? b.message : b));
      }
    };
    let m = c && setTimeout(() => {
      m = null, d(new lt(`timeout ${c} of ms exceeded`, lt.ETIMEDOUT));
    }, c);
    const p = () => {
      u && (m && clearTimeout(m), m = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: g } = o;
    return g.unsubscribe = () => C.asap(p), g;
  }
}, j1 = function* (u, c) {
  let f = u.byteLength;
  if (f < c) {
    yield u;
    return;
  }
  let o = 0, r;
  for (; o < f; )
    r = o + c, yield u.slice(o, r), o = r;
}, q1 = async function* (u, c) {
  for await (const f of Y1(u))
    yield* j1(f, c);
}, Y1 = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const c = u.getReader();
  try {
    for (; ; ) {
      const { done: f, value: o } = await c.read();
      if (f)
        break;
      yield o;
    }
  } finally {
    await c.cancel();
  }
}, um = (u, c, f, o) => {
  const r = q1(u, c);
  let d = 0, m, p = (g) => {
    m || (m = !0, o && o(g));
  };
  return new ReadableStream({
    async pull(g) {
      try {
        const { done: y, value: b } = await r.next();
        if (y) {
          p(), g.close();
          return;
        }
        let T = b.byteLength;
        if (f) {
          let D = d += T;
          f(D);
        }
        g.enqueue(new Uint8Array(b));
      } catch (y) {
        throw p(y), y;
      }
    },
    cancel(g) {
      return p(g), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, im = 64 * 1024, { isFunction: Ti } = C, G1 = (({ Request: u, Response: c }) => ({
  Request: u,
  Response: c
}))(C.global), {
  ReadableStream: cm,
  TextEncoder: fm
} = C.global, rm = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, X1 = (u) => {
  u = C.merge.call({
    skipUndefined: !0
  }, G1, u);
  const { fetch: c, Request: f, Response: o } = u, r = c ? Ti(c) : typeof fetch == "function", d = Ti(f), m = Ti(o);
  if (!r)
    return !1;
  const p = r && Ti(cm), g = r && (typeof fm == "function" ? /* @__PURE__ */ ((z) => (L) => z.encode(L))(new fm()) : async (z) => new Uint8Array(await new f(z).arrayBuffer())), y = d && p && rm(() => {
    let z = !1;
    const L = new f(te.origin, {
      body: new cm(),
      method: "POST",
      get duplex() {
        return z = !0, "half";
      }
    }).headers.has("Content-Type");
    return z && !L;
  }), b = m && p && rm(() => C.isReadableStream(new o("").body)), T = {
    stream: b && ((z) => z.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((z) => {
    !T[z] && (T[z] = (L, N) => {
      let Y = L && L[z];
      if (Y)
        return Y.call(L);
      throw new lt(`Response type '${z}' is not supported`, lt.ERR_NOT_SUPPORT, N);
    });
  });
  const D = async (z) => {
    if (z == null)
      return 0;
    if (C.isBlob(z))
      return z.size;
    if (C.isSpecCompliantForm(z))
      return (await new f(te.origin, {
        method: "POST",
        body: z
      }).arrayBuffer()).byteLength;
    if (C.isArrayBufferView(z) || C.isArrayBuffer(z))
      return z.byteLength;
    if (C.isURLSearchParams(z) && (z = z + ""), C.isString(z))
      return (await g(z)).byteLength;
  }, Q = async (z, L) => {
    const N = C.toFiniteNumber(z.getContentLength());
    return N ?? D(L);
  };
  return async (z) => {
    let {
      url: L,
      method: N,
      data: Y,
      signal: q,
      cancelToken: K,
      timeout: I,
      onDownloadProgress: at,
      onUploadProgress: gt,
      responseType: dt,
      headers: tt,
      withCredentials: _t = "same-origin",
      fetchOptions: Xt
    } = ey(z), Ye = c || fetch;
    dt = dt ? (dt + "").toLowerCase() : "text";
    let Vt = L1([q, K && K.toAbortSignal()], I), It = null;
    const ne = Vt && Vt.unsubscribe && (() => {
      Vt.unsubscribe();
    });
    let ae;
    try {
      if (gt && y && N !== "get" && N !== "head" && (ae = await Q(tt, Y)) !== 0) {
        let Dt = new f(L, {
          method: "POST",
          body: Y,
          duplex: "half"
        }), E;
        if (C.isFormData(Y) && (E = Dt.headers.get("content-type")) && tt.setContentType(E), Dt.body) {
          const [B, V] = lm(
            ae,
            xi(nm(gt))
          );
          Y = um(Dt.body, im, B, V);
        }
      }
      C.isString(_t) || (_t = _t ? "include" : "omit");
      const G = d && "credentials" in f.prototype, j = {
        ...Xt,
        signal: Vt,
        method: N.toUpperCase(),
        headers: tt.normalize().toJSON(),
        body: Y,
        duplex: "half",
        credentials: G ? _t : void 0
      };
      It = d && new f(L, j);
      let X = await (d ? Ye(It, Xt) : Ye(L, j));
      const ht = b && (dt === "stream" || dt === "response");
      if (b && (at || ht && ne)) {
        const Dt = {};
        ["status", "statusText", "headers"].forEach((J) => {
          Dt[J] = X[J];
        });
        const E = C.toFiniteNumber(X.headers.get("content-length")), [B, V] = at && lm(
          E,
          xi(nm(at), !0)
        ) || [];
        X = new o(
          um(X.body, im, B, () => {
            V && V(), ne && ne();
          }),
          Dt
        );
      }
      dt = dt || "text";
      let Rt = await T[C.findKey(T, dt) || "text"](X, z);
      return !ht && ne && ne(), await new Promise((Dt, E) => {
        Pm(Dt, E, {
          data: Rt,
          headers: he.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: z,
          request: It
        });
      });
    } catch (G) {
      throw ne && ne(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new lt("Network Error", lt.ERR_NETWORK, z, It),
        {
          cause: G.cause || G
        }
      ) : lt.from(G, G && G.code, z, It);
    }
  };
}, Q1 = /* @__PURE__ */ new Map(), ly = (u) => {
  let c = u && u.env || {};
  const { fetch: f, Request: o, Response: r } = c, d = [
    o,
    r,
    f
  ];
  let m = d.length, p = m, g, y, b = Q1;
  for (; p--; )
    g = d[p], y = b.get(g), y === void 0 && b.set(g, y = p ? /* @__PURE__ */ new Map() : X1(c)), b = y;
  return y;
};
ly();
const Ur = {
  http: i1,
  xhr: B1,
  fetch: {
    get: ly
  }
};
C.forEach(Ur, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const om = (u) => `- ${u}`, V1 = (u) => C.isFunction(u) || u === null || u === !1;
function Z1(u, c) {
  u = C.isArray(u) ? u : [u];
  const { length: f } = u;
  let o, r;
  const d = {};
  for (let m = 0; m < f; m++) {
    o = u[m];
    let p;
    if (r = o, !V1(o) && (r = Ur[(p = String(o)).toLowerCase()], r === void 0))
      throw new lt(`Unknown adapter '${p}'`);
    if (r && (C.isFunction(r) || (r = r.get(c))))
      break;
    d[p || "#" + m] = r;
  }
  if (!r) {
    const m = Object.entries(d).map(
      ([g, y]) => `adapter ${g} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = f ? m.length > 1 ? `since :
` + m.map(om).join(`
`) : " " + om(m[0]) : "as no adapter specified";
    throw new lt(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const ny = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Z1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ur
};
function hr(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Fn(null, u);
}
function sm(u) {
  return hr(u), u.headers = he.from(u.headers), u.data = dr.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), ny.getAdapter(u.adapter || lu.adapter, u)(u).then(function(o) {
    return hr(u), o.data = dr.call(
      u,
      u.transformResponse,
      o
    ), o.headers = he.from(o.headers), o;
  }, function(o) {
    return Im(o) || (hr(u), o && o.response && (o.response.data = dr.call(
      u,
      u.transformResponse,
      o.response
    ), o.response.headers = he.from(o.response.headers))), Promise.reject(o);
  });
}
const ay = "1.13.2", Bi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  Bi[u] = function(o) {
    return typeof o === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const dm = {};
Bi.transitional = function(c, f, o) {
  function r(d, m) {
    return "[Axios v" + ay + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, p) => {
    if (c === !1)
      throw new lt(
        r(m, " has been removed" + (f ? " in " + f : "")),
        lt.ERR_DEPRECATED
      );
    return f && !dm[m] && (dm[m] = !0, console.warn(
      r(
        m,
        " has been deprecated since v" + f + " and will be removed in the near future"
      )
    )), c ? c(d, m, p) : !0;
  };
};
Bi.spelling = function(c) {
  return (f, o) => (console.warn(`${o} is likely a misspelling of ${c}`), !0);
};
function K1(u, c, f) {
  if (typeof u != "object")
    throw new lt("options must be an object", lt.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(u);
  let r = o.length;
  for (; r-- > 0; ) {
    const d = o[r], m = c[d];
    if (m) {
      const p = u[d], g = p === void 0 || m(p, d, u);
      if (g !== !0)
        throw new lt("option " + d + " must be " + g, lt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new lt("Unknown option " + d, lt.ERR_BAD_OPTION);
  }
}
const zi = {
  assertOptions: K1,
  validators: Bi
}, Ze = zi.validators;
let an = class {
  constructor(c) {
    this.defaults = c || {}, this.interceptors = {
      request: new tm(),
      response: new tm()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(c, f) {
    try {
      return await this._request(c, f);
    } catch (o) {
      if (o instanceof Error) {
        let r = {};
        Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
        const d = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? d && !String(o.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + d) : o.stack = d;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(c, f) {
    typeof c == "string" ? (f = f || {}, f.url = c) : f = c || {}, f = un(this.defaults, f);
    const { transitional: o, paramsSerializer: r, headers: d } = f;
    o !== void 0 && zi.assertOptions(o, {
      silentJSONParsing: Ze.transitional(Ze.boolean),
      forcedJSONParsing: Ze.transitional(Ze.boolean),
      clarifyTimeoutError: Ze.transitional(Ze.boolean)
    }, !1), r != null && (C.isFunction(r) ? f.paramsSerializer = {
      serialize: r
    } : zi.assertOptions(r, {
      encode: Ze.function,
      serialize: Ze.function
    }, !0)), f.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? f.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : f.allowAbsoluteUrls = !0), zi.assertOptions(f, {
      baseUrl: Ze.spelling("baseURL"),
      withXsrfToken: Ze.spelling("withXSRFToken")
    }, !0), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let m = d && C.merge(
      d.common,
      d[f.method]
    );
    d && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (z) => {
        delete d[z];
      }
    ), f.headers = he.concat(m, d);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(L) {
      typeof L.runWhen == "function" && L.runWhen(f) === !1 || (g = g && L.synchronous, p.unshift(L.fulfilled, L.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(L) {
      y.push(L.fulfilled, L.rejected);
    });
    let b, T = 0, D;
    if (!g) {
      const z = [sm.bind(this), void 0];
      for (z.unshift(...p), z.push(...y), D = z.length, b = Promise.resolve(f); T < D; )
        b = b.then(z[T++], z[T++]);
      return b;
    }
    D = p.length;
    let Q = f;
    for (; T < D; ) {
      const z = p[T++], L = p[T++];
      try {
        Q = z(Q);
      } catch (N) {
        L.call(this, N);
        break;
      }
    }
    try {
      b = sm.call(this, Q);
    } catch (z) {
      return Promise.reject(z);
    }
    for (T = 0, D = y.length; T < D; )
      b = b.then(y[T++], y[T++]);
    return b;
  }
  getUri(c) {
    c = un(this.defaults, c);
    const f = ty(c.baseURL, c.url, c.allowAbsoluteUrls);
    return $m(f, c.params, c.paramsSerializer);
  }
};
C.forEach(["delete", "get", "head", "options"], function(c) {
  an.prototype[c] = function(f, o) {
    return this.request(un(o || {}, {
      method: c,
      url: f,
      data: (o || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(c) {
  function f(o) {
    return function(d, m, p) {
      return this.request(un(p || {}, {
        method: c,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  an.prototype[c] = f(), an.prototype[c + "Form"] = f(!0);
});
let J1 = class uy {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let f;
    this.promise = new Promise(function(d) {
      f = d;
    });
    const o = this;
    this.promise.then((r) => {
      if (!o._listeners) return;
      let d = o._listeners.length;
      for (; d-- > 0; )
        o._listeners[d](r);
      o._listeners = null;
    }), this.promise.then = (r) => {
      let d;
      const m = new Promise((p) => {
        o.subscribe(p), d = p;
      }).then(r);
      return m.cancel = function() {
        o.unsubscribe(d);
      }, m;
    }, c(function(d, m, p) {
      o.reason || (o.reason = new Fn(d, m, p), f(o.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(c) {
    if (this.reason) {
      c(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(c) : this._listeners = [c];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(c) {
    if (!this._listeners)
      return;
    const f = this._listeners.indexOf(c);
    f !== -1 && this._listeners.splice(f, 1);
  }
  toAbortSignal() {
    const c = new AbortController(), f = (o) => {
      c.abort(o);
    };
    return this.subscribe(f), c.signal.unsubscribe = () => this.unsubscribe(f), c.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let c;
    return {
      token: new uy(function(r) {
        c = r;
      }),
      cancel: c
    };
  }
};
function k1(u) {
  return function(f) {
    return u.apply(null, f);
  };
}
function $1(u) {
  return C.isObject(u) && u.isAxiosError === !0;
}
const Sr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
  WebServerIsDown: 521,
  ConnectionTimedOut: 522,
  OriginIsUnreachable: 523,
  TimeoutOccurred: 524,
  SslHandshakeFailed: 525,
  InvalidSslCertificate: 526
};
Object.entries(Sr).forEach(([u, c]) => {
  Sr[c] = u;
});
function iy(u) {
  const c = new an(u), f = Lm(an.prototype.request, c);
  return C.extend(f, an.prototype, c, { allOwnKeys: !0 }), C.extend(f, c, null, { allOwnKeys: !0 }), f.create = function(r) {
    return iy(un(u, r));
  }, f;
}
const Lt = iy(lu);
Lt.Axios = an;
Lt.CanceledError = Fn;
Lt.CancelToken = J1;
Lt.isCancel = Im;
Lt.VERSION = ay;
Lt.toFormData = Hi;
Lt.AxiosError = lt;
Lt.Cancel = Lt.CanceledError;
Lt.all = function(c) {
  return Promise.all(c);
};
Lt.spread = k1;
Lt.isAxiosError = $1;
Lt.mergeConfig = un;
Lt.AxiosHeaders = he;
Lt.formToJSON = (u) => Wm(C.isHTMLForm(u) ? new FormData(u) : u);
Lt.getAdapter = ny.getAdapter;
Lt.HttpStatusCode = Sr;
Lt.default = Lt;
const {
  Axios: fb,
  AxiosError: rb,
  CanceledError: ob,
  isCancel: sb,
  CancelToken: db,
  VERSION: hb,
  all: mb,
  Cancel: yb,
  isAxiosError: pb,
  spread: vb,
  toFormData: gb,
  AxiosHeaders: bb,
  HttpStatusCode: Sb,
  formToJSON: Eb,
  getAdapter: Tb,
  mergeConfig: Ab
} = Lt, F1 = "https://dev-demo-env.colibricore.io", W1 = (u) => {
  const c = u.startsWith("/") ? u : `/${u}`;
  return `${F1}${c}`;
}, I1 = async (u, c) => {
  const f = W1("api/auth"), o = { username: u, password: c };
  try {
    return (await Lt.post(f, o)).data;
  } catch (r) {
    throw console.error("Error during auth login:", r), r;
  }
};
function P1(u, c) {
  const f = {
    length: u.length >= 9 && u.length <= 15,
    upper: /[A-Z]/.test(u),
    lower: /[a-z]/.test(u),
    number: /[0-9]/.test(u),
    noSpaces: !/\s/.test(u),
    noTriple: !/(.)\1\1/.test(u),
    special: /[!@#$%^&*\-_.]/.test(u) && /^[A-Za-z0-9!@#$%^&*\-_.]+$/.test(u),
    noNameParts: !0,
    noEmailParts: !0
  };
  return u.toLowerCase(), f;
}
const tb = (u) => {
  try {
    if (!document.cookie.split(";").find((d) => d.trim().startsWith("X-Credential=")))
      return !1;
    const f = localStorage.getItem("decoded");
    if (!f)
      return !1;
    const o = JSON.parse(f), r = Math.floor(Date.now() / 1e3);
    return !o.exp || r >= o.exp ? !1 : (u && (window.location.href = u), !0);
  } catch (c) {
    return console.error("[checkTokenAndRedirect] Error:", c), !1;
  }
};
function cy() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const c = u.split(".");
  return c.length >= 2 ? "." + c.slice(-2).join(".") : "";
}
function hm(u, c, f) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + f);
  const r = cy(), d = r ? `; domain=${r}` : "", m = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${u}=${encodeURIComponent(c)}; expires=${o.toUTCString()}; path=/${d}${m}; SameSite=Lax`;
}
function mm(u) {
  const c = cy(), f = c ? `; domain=${c}` : "";
  document.cookie = `${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${f}`, console.log(`[Cookie] Cleared: ${u}`);
}
const eb = ({ onSuccess: u, onError: c, onClose: f }) => {
  const [o, r] = U.useState(""), [d, m] = U.useState(""), [p, g] = U.useState(!1), [y, b] = U.useState(!1), [T, D] = U.useState(null), Q = U.useRef(null);
  U.useEffect(() => {
    if (d) {
      const Y = P1(d);
      D(Y);
    } else
      D(null);
  }, [d]);
  const z = T ? T.length && T.upper && T.lower && T.number && T.noSpaces && T.noTriple && T.special : !1;
  U.useEffect(() => {
    const Y = (q) => {
      q.key === "Escape" && f();
    };
    return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
  }, [f]);
  const L = (Y) => {
    Y.target === Q.current && f();
  }, N = async (Y) => {
    if (Y.preventDefault(), !o || !d) {
      c("Please enter both username and password");
      return;
    }
    g(!0);
    try {
      const { tokens: q } = await I1(o, d);
      if (console.log("[EmbeddedLogin] Login successful:", q), q.access_token) {
        const K = Sg(q.access_token), I = (K.exp || 0) - Math.floor(Date.now() / 1e3);
        console.log("decoded", K), hm("access_token", q.access_token, I), K.x_credentials && hm("X-Credential", K.x_credentials, I), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("decoded", JSON.stringify(K) || ""), q.refresh_token && localStorage.setItem("refresh_token", q.refresh_token);
      }
      u(q);
    } catch (q) {
      console.error("[EmbeddedLogin] Login failed:", q), c(q instanceof Error ? q.message : "Authentication failed");
    } finally {
      g(!1);
    }
  };
  return /* @__PURE__ */ F.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-[2000]! p-4",
      ref: Q,
      onMouseDown: L,
      children: /* @__PURE__ */ F.jsxs("div", { className: "bg-white! rounded-lg! shadow-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ F.jsx(
          "button",
          {
            onClick: f,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! ",
            type: "button",
            children: /* @__PURE__ */ F.jsx("svg", { className: "w-6! h-6!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ F.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ F.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ F.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: "Continue to login" }),
          /* @__PURE__ */ F.jsx("p", { className: "text-sm! text-gray-600! mt-2!", children: "Continue by signing in." })
        ] }),
        /* @__PURE__ */ F.jsxs("form", { onSubmit: N, className: "space-y-4!", children: [
          /* @__PURE__ */ F.jsxs("div", { children: [
            /* @__PURE__ */ F.jsx("label", { htmlFor: "username", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Email Address or Username" }),
            /* @__PURE__ */ F.jsx(
              $h,
              {
                id: "username",
                type: "text",
                value: o,
                onChange: (Y) => r(Y.target.value),
                placeholder: "Enter email or username",
                disabled: p,
                className: "w-full!",
                autoComplete: "username"
              }
            )
          ] }),
          /* @__PURE__ */ F.jsxs("div", { children: [
            /* @__PURE__ */ F.jsx("label", { htmlFor: "password", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Password" }),
            /* @__PURE__ */ F.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ F.jsx(
              $h,
              {
                id: "password",
                type: y ? "text" : "password",
                value: d,
                onChange: (Y) => m(Y.target.value),
                placeholder: "Enter Password...",
                disabled: p,
                className: "w-full!",
                autoComplete: "current-password",
                endIcon: /* @__PURE__ */ F.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => b(!y),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: y ? /* @__PURE__ */ F.jsx("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ F.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) }) : /* @__PURE__ */ F.jsxs("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ F.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                      /* @__PURE__ */ F.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                    ] })
                  }
                )
              }
            ) })
          ] }),
          !1,
          /* @__PURE__ */ F.jsx(
            pr,
            {
              type: "submit",
              disabled: p || !o || !d || !z,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
              children: p ? /* @__PURE__ */ F.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ F.jsxs("svg", { className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ F.jsx("circle", { className: "opacity-25!", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ F.jsx("path", { className: "opacity-75!", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Signing in..."
              ] }) : "Sign In"
            }
          ),
          !1,
          !1
        ] })
      ] })
    }
  );
}, lb = () => {
  try {
    localStorage.removeItem("user_state"), localStorage.removeItem("decoded"), mm("access_token"), mm("X-Credential"), console.log("[TokenStorage] Tokens and cookies cleared");
  } catch (u) {
    console.error("[TokenStorage] Error clearing tokens:", u);
  }
}, nb = (u) => {
  const { authority: c, subsidiary: f, callbackUrl: o, onRedirect: r } = u, [d, m] = U.useState(!1), [p, g] = U.useState(null), [y, b] = U.useState(!1);
  U.useEffect(() => {
    if (u.redirectUrl) {
      const L = tb(u.redirectUrl);
      b(L);
    }
  }, [u.redirectUrl]), U.useEffect(() => {
    c && localStorage.setItem("authority", c), f && localStorage.setItem("subsidiary", f), o ? localStorage.setItem("callbackUrl", o) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [c, f, o]);
  const T = () => {
    m(!0);
  }, D = (L) => {
    m(!1), b(!0);
    const N = u.redirectUrl || o;
    r && r(N, L), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, Q = (L) => {
    g(L);
  }, z = () => {
    lb(), b(!1), window.location.href = o || window.location.origin;
  };
  return /* @__PURE__ */ F.jsx(Dv, { children: /* @__PURE__ */ F.jsx(Dm, { path: "*", element: /* @__PURE__ */ F.jsxs("div", { className: "max-w-7xl! mx-auto! p-8! text-center!", children: [
    p && /* @__PURE__ */ F.jsx("div", { className: "mb-4! p-4! bg-red-50 border! border-red-200 rounded-lg! text-red-600", children: p }),
    y && /* @__PURE__ */ F.jsxs("div", { className: "mb-4!", children: [
      /* @__PURE__ */ F.jsx("p", { className: "mb-2! text-gray-700", children: "You are logged in!" }),
      /* @__PURE__ */ F.jsx(
        pr,
        {
          label: "Logout",
          onClick: z,
          disabled: !1
        }
      )
    ] }),
    !y && /* @__PURE__ */ F.jsx(F.Fragment, { children: d ? /* @__PURE__ */ F.jsx(
      eb,
      {
        onSuccess: D,
        onError: Q,
        onClose: () => m(!1),
        authority: c
      }
    ) : /* @__PURE__ */ F.jsx(
      pr,
      {
        label: "Login with Colibri Identity",
        onClick: T,
        disabled: !1
      }
    ) })
  ] }) }) });
}, ab = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_BASE_URL: "https://dev-demo-env.colibricore.io", VITE_RENDER_MODE: "WEBCOMPONENT", VITE_WIDGET_LOGIN_URL: "https://dev-idb.colibrirealestate.com/widget/loginprepare?targetUrl=%2Froute%2Fcheckoutsignin&returnUrl=%2Fwp&idpsource=local5173widget" }, ub = "WEBCOMPONENT";
console.log("[main.tsx] VITE_RENDER_MODE:", ub);
console.log("[main.tsx] All env vars:", ab);
{
  class u extends HTMLElement {
    root;
    mountPoint;
    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle"];
    }
    connectedCallback() {
      this.mountPoint = document.createElement("div"), this.appendChild(this.mountPoint), this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    disconnectedCallback() {
      this.root?.unmount();
    }
    handleRedirect = (f, o) => {
      const r = new CustomEvent("redirect", {
        detail: {
          url: f,
          userSession: o,
          tokens: { access_token: o?.access_token },
          userInfo: o?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(r), f && (console.log("[Widget] Redirecting to:", f), window.location.href = f);
    };
    getProps() {
      return {
        authority: this.getAttribute("authority") || "dev",
        subsidiary: this.getAttribute("subsidiary") || "allied",
        isShowToggle: this.getAttribute("isShowToggle") || "true",
        callbackUrl: this.getAttribute("callbackUrl") || `${window.location.origin}`,
        redirectUrl: this.getAttribute("redirectUrl") || "",
        onRedirect: this.handleRedirect
      };
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = vg.createRoot(this.mountPoint));
      const f = this.getProps();
      this.root.render(
        /* @__PURE__ */ F.jsx(eg, { children: /* @__PURE__ */ F.jsx(U.StrictMode, { children: /* @__PURE__ */ F.jsx(nb, { ...f }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
