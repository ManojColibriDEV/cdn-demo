
(function() {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode("@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.visible{visibility:visible}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-\\[2000\\]\\!{z-index:2000!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.mx-auto\\!{margin-inline:auto!important}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-7xl\\!{max-width:var(--container-7xl)!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#17a2b8\\]{border-color:#17a2b8}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#17a2b8\\]{background-color:#17a2b8}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#17a2b8\\]{color:#17a2b8}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-blue-600{color:var(--color-blue-600)}.text-blue-600\\!{color:var(--color-blue-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#138496\\]:hover{background-color:#138496}.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-blue-700\\!:hover{color:var(--color-blue-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#17a2b8\\]:enabled{background-color:#17a2b8}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}\n"));
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector', e);
  }
})();
var lr = { exports: {} }, Va = {};
var Mh;
function Cp() {
  if (Mh) return Va;
  Mh = 1;
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
var Nh;
function Up() {
  return Nh || (Nh = 1, lr.exports = Cp()), lr.exports;
}
var W = Up(), nr = { exports: {} }, et = {}, wh;
function Dp() {
  if (wh) return et;
  wh = 1;
  var u = {};
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function z(E) {
    return E === null || typeof E != "object" ? null : (E = q && E[q] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, M = Object.assign, Q = {};
  function V(E, B, X) {
    this.props = E, this.context = B, this.refs = Q, this.updater = X || j;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, V.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function J() {
  }
  J.prototype = V.prototype;
  function tt(E, B, X) {
    this.props = E, this.context = B, this.refs = Q, this.updater = X || j;
  }
  var at = tt.prototype = new J();
  at.constructor = tt, M(at, V.prototype), at.isPureReactComponent = !0;
  var vt = Array.isArray;
  function P() {
  }
  var $ = { H: null, A: null, T: null, S: null }, ht = Object.prototype.hasOwnProperty;
  function Dt(E, B, X) {
    var K = X.ref;
    return {
      $$typeof: c,
      type: E,
      key: B,
      ref: K !== void 0 ? K : null,
      props: X
    };
  }
  function Ye(E, B) {
    return Dt(E.type, B, E.props);
  }
  function Vt(E) {
    return typeof E == "object" && E !== null && E.$$typeof === c;
  }
  function It(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(X) {
      return B[X];
    });
  }
  var ne = /\/+/g;
  function ae(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? It("" + E.key) : B.toString(36);
  }
  function Y(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(P, P) : (E.status = "pending", E.then(
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
  function L(E, B, X, K, it) {
    var ct = typeof E;
    (ct === "undefined" || ct === "boolean") && (E = null);
    var bt = !1;
    if (E === null) bt = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          bt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case c:
            case f:
              bt = !0;
              break;
            case A:
              return bt = E._init, L(
                bt(E._payload),
                B,
                X,
                K,
                it
              );
          }
      }
    if (bt)
      return it = it(E), bt = K === "" ? "." + ae(E, 0) : K, vt(it) ? (X = "", bt != null && (X = bt.replace(ne, "$&/") + "/"), L(it, B, X, "", function(Wn) {
        return Wn;
      })) : it != null && (Vt(it) && (it = Ye(
        it,
        X + (it.key == null || E && E.key === it.key ? "" : ("" + it.key).replace(
          ne,
          "$&/"
        ) + "/") + bt
      )), B.push(it)), 1;
    bt = 0;
    var ee = K === "" ? "." : K + ":";
    if (vt(E))
      for (var Ht = 0; Ht < E.length; Ht++)
        K = E[Ht], ct = ee + ae(K, Ht), bt += L(
          K,
          B,
          X,
          ct,
          it
        );
    else if (Ht = z(E), typeof Ht == "function")
      for (E = Ht.call(E), Ht = 0; !(K = E.next()).done; )
        K = K.value, ct = ee + ae(K, Ht++), bt += L(
          K,
          B,
          X,
          ct,
          it
        );
    else if (ct === "object") {
      if (typeof E.then == "function")
        return L(
          Y(E),
          B,
          X,
          K,
          it
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return bt;
  }
  function G(E, B, X) {
    if (E == null) return E;
    var K = [], it = 0;
    return L(E, K, "", "", function(ct) {
      return B.call(X, ct, it++);
    }), K;
  }
  function mt(E) {
    if (E._status === -1) {
      var B = E._result;
      B = B(), B.then(
        function(X) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = X);
        },
        function(X) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = X);
        }
      ), E._status === -1 && (E._status = 0, E._result = B);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Ot = typeof reportError == "function" ? reportError : function(E) {
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
  }, Mt = {
    map: G,
    forEach: function(E, B, X) {
      G(
        E,
        function() {
          B.apply(this, arguments);
        },
        X
      );
    },
    count: function(E) {
      var B = 0;
      return G(E, function() {
        B++;
      }), B;
    },
    toArray: function(E) {
      return G(E, function(B) {
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
  return et.Activity = U, et.Children = Mt, et.Component = V, et.Fragment = o, et.Profiler = d, et.PureComponent = tt, et.StrictMode = r, et.Suspense = y, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return $.H.useMemoCache(E);
    }
  }, et.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, et.cacheSignal = function() {
    return null;
  }, et.cloneElement = function(E, B, X) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var K = M({}, E.props), it = E.key;
    if (B != null)
      for (ct in B.key !== void 0 && (it = "" + B.key), B)
        !ht.call(B, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && B.ref === void 0 || (K[ct] = B[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) K.children = X;
    else if (1 < ct) {
      for (var bt = Array(ct), ee = 0; ee < ct; ee++)
        bt[ee] = arguments[ee + 2];
      K.children = bt;
    }
    return Dt(E.type, it, K);
  }, et.createContext = function(E) {
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
  }, et.createElement = function(E, B, X) {
    var K, it = {}, ct = null;
    if (B != null)
      for (K in B.key !== void 0 && (ct = "" + B.key), B)
        ht.call(B, K) && K !== "key" && K !== "__self" && K !== "__source" && (it[K] = B[K]);
    var bt = arguments.length - 2;
    if (bt === 1) it.children = X;
    else if (1 < bt) {
      for (var ee = Array(bt), Ht = 0; Ht < bt; Ht++)
        ee[Ht] = arguments[Ht + 2];
      it.children = ee;
    }
    if (E && E.defaultProps)
      for (K in bt = E.defaultProps, bt)
        it[K] === void 0 && (it[K] = bt[K]);
    return Dt(E, ct, it);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(E) {
    return { $$typeof: g, render: E };
  }, et.isValidElement = Vt, et.lazy = function(E) {
    return {
      $$typeof: A,
      _payload: { _status: -1, _result: E },
      _init: mt
    };
  }, et.memo = function(E, B) {
    return {
      $$typeof: b,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, et.startTransition = function(E) {
    var B = $.T, X = {};
    $.T = X;
    try {
      var K = E(), it = $.S;
      it !== null && it(X, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(P, Ot);
    } catch (ct) {
      Ot(ct);
    } finally {
      B !== null && X.types !== null && (B.types = X.types), $.T = B;
    }
  }, et.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, et.use = function(E) {
    return $.H.use(E);
  }, et.useActionState = function(E, B, X) {
    return $.H.useActionState(E, B, X);
  }, et.useCallback = function(E, B) {
    return $.H.useCallback(E, B);
  }, et.useContext = function(E) {
    return $.H.useContext(E);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(E, B) {
    return $.H.useDeferredValue(E, B);
  }, et.useEffect = function(E, B) {
    return $.H.useEffect(E, B);
  }, et.useEffectEvent = function(E) {
    return $.H.useEffectEvent(E);
  }, et.useId = function() {
    return $.H.useId();
  }, et.useImperativeHandle = function(E, B, X) {
    return $.H.useImperativeHandle(E, B, X);
  }, et.useInsertionEffect = function(E, B) {
    return $.H.useInsertionEffect(E, B);
  }, et.useLayoutEffect = function(E, B) {
    return $.H.useLayoutEffect(E, B);
  }, et.useMemo = function(E, B) {
    return $.H.useMemo(E, B);
  }, et.useOptimistic = function(E, B) {
    return $.H.useOptimistic(E, B);
  }, et.useReducer = function(E, B, X) {
    return $.H.useReducer(E, B, X);
  }, et.useRef = function(E) {
    return $.H.useRef(E);
  }, et.useState = function(E) {
    return $.H.useState(E);
  }, et.useSyncExternalStore = function(E, B, X) {
    return $.H.useSyncExternalStore(
      E,
      B,
      X
    );
  }, et.useTransition = function() {
    return $.H.useTransition();
  }, et.version = "19.2.3", et;
}
var Hh;
function Sr() {
  return Hh || (Hh = 1, nr.exports = Dp()), nr.exports;
}
var D = Sr();
var Bh = "popstate";
function Mp(u = {}) {
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
  return wp(
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
function Le(u, c) {
  if (!u) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {
    }
  }
}
function Np() {
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
    key: c && c.key || o || Np()
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
function wp(u, c, f, o = {}) {
  let { window: r = document.defaultView, v5Compat: d = !1 } = o, m = r.history, p = "POP", g = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function A() {
    p = "POP";
    let M = b(), Q = M == null ? null : M - y;
    y = M, g && g({ action: p, location: j.location, delta: Q });
  }
  function U(M, Q) {
    p = "PUSH";
    let V = mr(j.location, M, Q);
    y = b() + 1;
    let J = jh(V, y), tt = j.createHref(V);
    try {
      m.pushState(J, "", tt);
    } catch (at) {
      if (at instanceof DOMException && at.name === "DataCloneError")
        throw at;
      r.location.assign(tt);
    }
    d && g && g({ action: p, location: j.location, delta: 1 });
  }
  function q(M, Q) {
    p = "REPLACE";
    let V = mr(j.location, M, Q);
    y = b();
    let J = jh(V, y), tt = j.createHref(V);
    m.replaceState(J, "", tt), d && g && g({ action: p, location: j.location, delta: 0 });
  }
  function z(M) {
    return Hp(M);
  }
  let j = {
    get action() {
      return p;
    },
    get location() {
      return u(r, m);
    },
    listen(M) {
      if (g)
        throw new Error("A history only accepts one active listener");
      return r.addEventListener(Bh, A), g = M, () => {
        r.removeEventListener(Bh, A), g = null;
      };
    },
    createHref(M) {
      return c(r, M);
    },
    createURL: z,
    encodeLocation(M) {
      let Q = z(M);
      return {
        pathname: Q.pathname,
        search: Q.search,
        hash: Q.hash
      };
    },
    push: U,
    replace: q,
    go(M) {
      return m.go(M);
    }
  };
  return j;
}
function Hp(u, c = !1) {
  let f = "http://localhost";
  typeof window < "u" && (f = window.location.origin !== "null" ? window.location.origin : window.location.href), Ut(f, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : $a(u);
  return o = o.replace(/ $/, "%20"), !c && o.startsWith("//") && (o = f + o), new URL(o, f);
}
function hm(u, c, f = "/") {
  return Bp(u, c, f, !1);
}
function Bp(u, c, f, o) {
  let r = typeof c == "string" ? Jn(c) : c, d = sl(r.pathname || "/", f);
  if (d == null)
    return null;
  let m = mm(u);
  jp(m);
  let p = null;
  for (let g = 0; p == null && g < m.length; ++g) {
    let y = kp(d);
    p = Kp(
      m[g],
      y,
      o
    );
  }
  return p;
}
function mm(u, c = [], f = [], o = "", r = !1) {
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
    let A = ol([o, b.relativePath]), U = f.concat(b);
    m.children && m.children.length > 0 && (Ut(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${A}".`
    ), mm(
      m.children,
      c,
      U,
      A,
      g
    )), !(m.path == null && !m.index) && c.push({
      path: A,
      score: Vp(A, m.index),
      routesMeta: U
    });
  };
  return u.forEach((m, p) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, p);
    else
      for (let g of ym(m.path))
        d(m, p, !0, g);
  }), c;
}
function ym(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [f, ...o] = c, r = f.endsWith("?"), d = f.replace(/\?$/, "");
  if (o.length === 0)
    return r ? [d, ""] : [d];
  let m = ym(o.join("/")), p = [];
  return p.push(
    ...m.map(
      (g) => g === "" ? d : [d, g].join("/")
    )
  ), r && p.push(...m), p.map(
    (g) => u.startsWith("/") && g === "" ? "/" : g
  );
}
function jp(u) {
  u.sort(
    (c, f) => c.score !== f.score ? f.score - c.score : Zp(
      c.routesMeta.map((o) => o.childrenIndex),
      f.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Lp = /^:[\w-]+$/, qp = 3, Yp = 2, Gp = 1, Xp = 10, Qp = -2, Lh = (u) => u === "*";
function Vp(u, c) {
  let f = u.split("/"), o = f.length;
  return f.some(Lh) && (o += Qp), c && (o += Yp), f.filter((r) => !Lh(r)).reduce(
    (r, d) => r + (Lp.test(d) ? qp : d === "" ? Gp : Xp),
    o
  );
}
function Zp(u, c) {
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
function Kp(u, c, f = !1) {
  let { routesMeta: o } = u, r = {}, d = "/", m = [];
  for (let p = 0; p < o.length; ++p) {
    let g = o[p], y = p === o.length - 1, b = d === "/" ? c : c.slice(d.length) || "/", A = xi(
      { path: g.relativePath, caseSensitive: g.caseSensitive, end: y },
      b
    ), U = g.route;
    if (!A && y && f && !o[o.length - 1].route.index && (A = xi(
      {
        path: g.relativePath,
        caseSensitive: g.caseSensitive,
        end: !1
      },
      b
    )), !A)
      return null;
    Object.assign(r, A.params), m.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: ol([d, A.pathname]),
      pathnameBase: Ip(
        ol([d, A.pathnameBase])
      ),
      route: U
    }), A.pathnameBase !== "/" && (d = ol([d, A.pathnameBase]));
  }
  return m;
}
function xi(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [f, o] = Jp(
    u.path,
    u.caseSensitive,
    u.end
  ), r = c.match(f);
  if (!r) return null;
  let d = r[0], m = d.replace(/(.)\/+$/, "$1"), p = r.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: b, isOptional: A }, U) => {
        if (b === "*") {
          let z = p[U] || "";
          m = d.slice(0, d.length - z.length).replace(/(.)\/+$/, "$1");
        }
        const q = p[U];
        return A && !q ? y[b] = void 0 : y[b] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: u
  };
}
function Jp(u, c = !1, f = !0) {
  Le(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let o = [], r = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, p, g) => (o.push({ paramName: p, isOptional: g != null }), g ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (o.push({ paramName: "*" }), r += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : f ? r += "\\/*$" : u !== "" && u !== "/" && (r += "(?:(?=\\/|$))"), [new RegExp(r, c ? void 0 : "i"), o];
}
function kp(u) {
  try {
    return u.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return Le(
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
var pm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $p = (u) => pm.test(u);
function Fp(u, c = "/") {
  let {
    pathname: f,
    search: o = "",
    hash: r = ""
  } = typeof u == "string" ? Jn(u) : u, d;
  if (f)
    if ($p(f))
      d = f;
    else {
      if (f.includes("//")) {
        let m = f;
        f = f.replace(/\/\/+/g, "/"), Le(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${f}`
        );
      }
      f.startsWith("/") ? d = qh(f.substring(1), "/") : d = qh(f, c);
    }
  else
    d = c;
  return {
    pathname: d,
    search: Pp(o),
    hash: tv(r)
  };
}
function qh(u, c) {
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
function Wp(u) {
  return u.filter(
    (c, f) => f === 0 || c.route.path && c.route.path.length > 0
  );
}
function vm(u) {
  let c = Wp(u);
  return c.map(
    (f, o) => o === c.length - 1 ? f.pathname : f.pathnameBase
  );
}
function gm(u, c, f, o = !1) {
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
    let A = c.length - 1;
    if (!o && m.startsWith("..")) {
      let U = m.split("/");
      for (; U[0] === ".."; )
        U.shift(), A -= 1;
      r.pathname = U.join("/");
    }
    p = A >= 0 ? c[A] : "/";
  }
  let g = Fp(r, p), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && f.endsWith("/");
  return !g.pathname.endsWith("/") && (y || b) && (g.pathname += "/"), g;
}
var ol = (u) => u.join("/").replace(/\/\/+/g, "/"), Ip = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), Pp = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, tv = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, ev = class {
  constructor(u, c, f, o = !1) {
    this.status = u, this.statusText = c || "", this.internal = o, f instanceof Error ? (this.data = f.toString(), this.error = f) : this.data = f;
  }
};
function lv(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function nv(u) {
  return u.map((c) => c.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var bm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Sm(u, c) {
  let f = u;
  if (typeof f != "string" || !pm.test(f))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: f
    };
  let o = f, r = !1;
  if (bm)
    try {
      let d = new URL(window.location.href), m = f.startsWith("//") ? new URL(d.protocol + f) : new URL(f), p = sl(m.pathname, c);
      m.origin === d.origin && p != null ? f = p + m.search + m.hash : r = !0;
    } catch {
      Le(
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
var Em = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Em
);
var av = [
  "GET",
  ...Em
];
new Set(av);
var kn = D.createContext(null);
kn.displayName = "DataRouter";
var Ui = D.createContext(null);
Ui.displayName = "DataRouterState";
var uv = D.createContext(!1), Tm = D.createContext({
  isTransitioning: !1
});
Tm.displayName = "ViewTransition";
var iv = D.createContext(
  /* @__PURE__ */ new Map()
);
iv.displayName = "Fetchers";
var cv = D.createContext(null);
cv.displayName = "Await";
var we = D.createContext(
  null
);
we.displayName = "Navigation";
var Fa = D.createContext(
  null
);
Fa.displayName = "Location";
var dl = D.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
dl.displayName = "Route";
var Er = D.createContext(null);
Er.displayName = "RouteError";
var Am = "REACT_ROUTER_ERROR", fv = "REDIRECT", rv = "ROUTE_ERROR_RESPONSE";
function ov(u) {
  if (u.startsWith(`${Am}:${fv}:{`))
    try {
      let c = JSON.parse(u.slice(28));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.location == "string" && typeof c.reloadDocument == "boolean" && typeof c.replace == "boolean")
        return c;
    } catch {
    }
}
function sv(u) {
  if (u.startsWith(
    `${Am}:${rv}:{`
  ))
    try {
      let c = JSON.parse(u.slice(40));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string")
        return new ev(
          c.status,
          c.statusText,
          c.data
        );
    } catch {
    }
}
function dv(u, { relative: c } = {}) {
  Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: f, navigator: o } = D.useContext(we), { hash: r, pathname: d, search: m } = Ia(u, { relative: c }), p = d;
  return f !== "/" && (p = d === "/" ? f : ol([f, d])), o.createHref({ pathname: p, search: m, hash: r });
}
function Wa() {
  return D.useContext(Fa) != null;
}
function cn() {
  return Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), D.useContext(Fa).location;
}
var Rm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Om(u) {
  D.useContext(we).static || D.useLayoutEffect(u);
}
function hv() {
  let { isDataRoute: u } = D.useContext(dl);
  return u ? _v() : mv();
}
function mv() {
  Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = D.useContext(kn), { basename: c, navigator: f } = D.useContext(we), { matches: o } = D.useContext(dl), { pathname: r } = cn(), d = JSON.stringify(vm(o)), m = D.useRef(!1);
  return Om(() => {
    m.current = !0;
  }), D.useCallback(
    (g, y = {}) => {
      if (Le(m.current, Rm), !m.current) return;
      if (typeof g == "number") {
        f.go(g);
        return;
      }
      let b = gm(
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
D.createContext(null);
function Ia(u, { relative: c } = {}) {
  let { matches: f } = D.useContext(dl), { pathname: o } = cn(), r = JSON.stringify(vm(f));
  return D.useMemo(
    () => gm(
      u,
      JSON.parse(r),
      o,
      c === "path"
    ),
    [u, r, o, c]
  );
}
function yv(u, c) {
  return _m(u, c);
}
function _m(u, c, f, o, r) {
  Ut(
    Wa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = D.useContext(we), { matches: m } = D.useContext(dl), p = m[m.length - 1], g = p ? p.params : {}, y = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", A = p && p.route;
  {
    let V = A && A.path || "";
    xm(
      y,
      !A || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let U = cn(), q;
  if (c) {
    let V = typeof c == "string" ? Jn(c) : c;
    Ut(
      b === "/" || V.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), q = V;
  } else
    q = U;
  let z = q.pathname || "/", j = z;
  if (b !== "/") {
    let V = b.replace(/^\//, "").split("/");
    j = "/" + z.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let M = hm(u, { pathname: j });
  Le(
    A || M != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), Le(
    M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Q = Sv(
    M && M.map(
      (V) => Object.assign({}, V, {
        params: Object.assign({}, g, V.params),
        pathname: ol([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathname
        ]),
        pathnameBase: V.pathnameBase === "/" ? b : ol([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathnameBase
        ])
      })
    ),
    m,
    f,
    o,
    r
  );
  return c && Q ? /* @__PURE__ */ D.createElement(
    Fa.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...q
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    Q
  ) : Q;
}
function pv() {
  let u = Ov(), c = lv(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), f = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", r = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), m = /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ D.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ D.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ D.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ D.createElement(D.Fragment, null, /* @__PURE__ */ D.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ D.createElement("h3", { style: { fontStyle: "italic" } }, c), f ? /* @__PURE__ */ D.createElement("pre", { style: r }, f) : null, m);
}
var vv = /* @__PURE__ */ D.createElement(pv, null), zm = class extends D.Component {
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
      const f = sv(u.digest);
      f && (u = f);
    }
    let c = u !== void 0 ? /* @__PURE__ */ D.createElement(dl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ D.createElement(
      Er.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ D.createElement(gv, { error: u }, c) : c;
  }
};
zm.contextType = uv;
var ur = /* @__PURE__ */ new WeakMap();
function gv({
  children: u,
  error: c
}) {
  let { basename: f } = D.useContext(we);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let o = ov(c.digest);
    if (o) {
      let r = ur.get(c);
      if (r) throw r;
      let d = Sm(o.location, f);
      if (bm && !ur.get(c))
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
      return /* @__PURE__ */ D.createElement(
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
function bv({ routeContext: u, match: c, children: f }) {
  let o = D.useContext(kn);
  return o && o.static && o.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = c.route.id), /* @__PURE__ */ D.createElement(dl.Provider, { value: u }, f);
}
function Sv(u, c = [], f = null, o = null, r = null) {
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
      (A) => A.route.id && m?.[A.route.id] !== void 0
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
      let A = d[b];
      if ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (g = b), A.route.id) {
        let { loaderData: U, errors: q } = f, z = A.route.loader && !U.hasOwnProperty(A.route.id) && (!q || q[A.route.id] === void 0);
        if (A.route.lazy || z) {
          p = !0, g >= 0 ? d = d.slice(0, g + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = f && o ? (b, A) => {
    o(b, {
      location: f.location,
      params: f.matches?.[0]?.params ?? {},
      unstable_pattern: nv(f.matches),
      errorInfo: A
    });
  } : void 0;
  return d.reduceRight(
    (b, A, U) => {
      let q, z = !1, j = null, M = null;
      f && (q = m && A.route.id ? m[A.route.id] : void 0, j = A.route.errorElement || vv, p && (g < 0 && U === 0 ? (xm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), z = !0, M = null) : g === U && (z = !0, M = A.route.hydrateFallbackElement || null)));
      let Q = c.concat(d.slice(0, U + 1)), V = () => {
        let J;
        return q ? J = j : z ? J = M : A.route.Component ? J = /* @__PURE__ */ D.createElement(A.route.Component, null) : A.route.element ? J = A.route.element : J = b, /* @__PURE__ */ D.createElement(
          bv,
          {
            match: A,
            routeContext: {
              outlet: b,
              matches: Q,
              isDataRoute: f != null
            },
            children: J
          }
        );
      };
      return f && (A.route.ErrorBoundary || A.route.errorElement || U === 0) ? /* @__PURE__ */ D.createElement(
        zm,
        {
          location: f.location,
          revalidation: f.revalidation,
          component: j,
          error: q,
          children: V(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          onError: y
        }
      ) : V();
    },
    null
  );
}
function Tr(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ev(u) {
  let c = D.useContext(kn);
  return Ut(c, Tr(u)), c;
}
function Tv(u) {
  let c = D.useContext(Ui);
  return Ut(c, Tr(u)), c;
}
function Av(u) {
  let c = D.useContext(dl);
  return Ut(c, Tr(u)), c;
}
function Ar(u) {
  let c = Av(u), f = c.matches[c.matches.length - 1];
  return Ut(
    f.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), f.route.id;
}
function Rv() {
  return Ar(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ov() {
  let u = D.useContext(Er), c = Tv(
    "useRouteError"
    /* UseRouteError */
  ), f = Ar(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : c.errors?.[f];
}
function _v() {
  let { router: u } = Ev(
    "useNavigate"
    /* UseNavigateStable */
  ), c = Ar(
    "useNavigate"
    /* UseNavigateStable */
  ), f = D.useRef(!1);
  return Om(() => {
    f.current = !0;
  }), D.useCallback(
    async (r, d = {}) => {
      Le(f.current, Rm), f.current && (typeof r == "number" ? await u.navigate(r) : await u.navigate(r, { fromRouteId: c, ...d }));
    },
    [u, c]
  );
}
var Yh = {};
function xm(u, c, f) {
  !c && !Yh[u] && (Yh[u] = !0, Le(!1, f));
}
D.memo(zv);
function zv({
  routes: u,
  future: c,
  state: f,
  onError: o
}) {
  return _m(u, void 0, f, o, c);
}
function Cm(u) {
  Ut(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function xv({
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
  let p = u.replace(/^\/*/, "/"), g = D.useMemo(
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
    hash: A = "",
    state: U = null,
    key: q = "default"
  } = f, z = D.useMemo(() => {
    let j = sl(y, p);
    return j == null ? null : {
      location: {
        pathname: j,
        search: b,
        hash: A,
        state: U,
        key: q
      },
      navigationType: o
    };
  }, [p, y, b, A, U, q, o]);
  return Le(
    z != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${b}${A}" because it does not start with the basename, so the <Router> won't render anything.`
  ), z == null ? null : /* @__PURE__ */ D.createElement(we.Provider, { value: g }, /* @__PURE__ */ D.createElement(Fa.Provider, { children: c, value: z }));
}
function Cv({
  children: u,
  location: c
}) {
  return yv(yr(u), c);
}
function yr(u, c = []) {
  let f = [];
  return D.Children.forEach(u, (o, r) => {
    if (!D.isValidElement(o))
      return;
    let d = [...c, r];
    if (o.type === D.Fragment) {
      f.push.apply(
        f,
        yr(o.props.children, d)
      );
      return;
    }
    Ut(
      o.type === Cm,
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
function Uv(u) {
  return Di(u) && u.tagName.toLowerCase() === "button";
}
function Dv(u) {
  return Di(u) && u.tagName.toLowerCase() === "form";
}
function Mv(u) {
  return Di(u) && u.tagName.toLowerCase() === "input";
}
function Nv(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function wv(u, c) {
  return u.button === 0 && // Ignore everything but left clicks
  (!c || c === "_self") && // Let browser handle "target=_blank" etc.
  !Nv(u);
}
var Ei = null;
function Hv() {
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
var Bv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ir(u) {
  return u != null && !Bv.has(u) ? (Le(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ri}"`
  ), null) : u;
}
function jv(u, c) {
  let f, o, r, d, m;
  if (Dv(u)) {
    let p = u.getAttribute("action");
    o = p ? sl(p, c) : null, f = u.getAttribute("method") || Ai, r = ir(u.getAttribute("enctype")) || Ri, d = new FormData(u);
  } else if (Uv(u) || Mv(u) && (u.type === "submit" || u.type === "image")) {
    let p = u.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let g = u.getAttribute("formaction") || p.getAttribute("action");
    if (o = g ? sl(g, c) : null, f = u.getAttribute("formmethod") || p.getAttribute("method") || Ai, r = ir(u.getAttribute("formenctype")) || ir(p.getAttribute("enctype")) || Ri, d = new FormData(p, u), !Hv()) {
      let { name: y, type: b, value: A } = u;
      if (b === "image") {
        let U = y ? `${y}.` : "";
        d.append(`${U}x`, "0"), d.append(`${U}y`, "0");
      } else y && d.append(y, A);
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
function Rr(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function Lv(u, c, f) {
  let o = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return o.pathname === "/" ? o.pathname = `_root.${f}` : c && sl(o.pathname, c) === "/" ? o.pathname = `${c.replace(/\/$/, "")}/_root.${f}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${f}`, o;
}
async function qv(u, c) {
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
function Yv(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Gv(u, c, f) {
  let o = await Promise.all(
    u.map(async (r) => {
      let d = c.routes[r.route.id];
      if (d) {
        let m = await qv(d, f);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return Zv(
    o.flat(1).filter(Yv).filter((r) => r.rel === "stylesheet" || r.rel === "preload").map(
      (r) => r.rel === "stylesheet" ? { ...r, rel: "prefetch", as: "style" } : { ...r, rel: "prefetch" }
    )
  );
}
function Gh(u, c, f, o, r, d) {
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
      let A = g.route.shouldRevalidate({
        currentUrl: new URL(
          r.pathname + r.search + r.hash,
          window.origin
        ),
        currentParams: f[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: g.params,
        defaultShouldRevalidate: !0
      });
      if (typeof A == "boolean")
        return A;
    }
    return !0;
  }) : [];
}
function Xv(u, c, { includeHydrateFallback: f } = {}) {
  return Qv(
    u.map((o) => {
      let r = c.routes[o.route.id];
      if (!r) return [];
      let d = [r.module];
      return r.clientActionModule && (d = d.concat(r.clientActionModule)), r.clientLoaderModule && (d = d.concat(r.clientLoaderModule)), f && r.hydrateFallbackModule && (d = d.concat(r.hydrateFallbackModule)), r.imports && (d = d.concat(r.imports)), d;
    }).flat(1)
  );
}
function Qv(u) {
  return [...new Set(u)];
}
function Vv(u) {
  let c = {}, f = Object.keys(u).sort();
  for (let o of f)
    c[o] = u[o];
  return c;
}
function Zv(u, c) {
  let f = /* @__PURE__ */ new Set();
  return new Set(c), u.reduce((o, r) => {
    let d = JSON.stringify(Vv(r));
    return f.has(d) || (f.add(d), o.push({ key: d, link: r })), o;
  }, []);
}
function Um() {
  let u = D.useContext(kn);
  return Rr(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function Kv() {
  let u = D.useContext(Ui);
  return Rr(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Or = D.createContext(void 0);
Or.displayName = "FrameworkContext";
function Dm() {
  let u = D.useContext(Or);
  return Rr(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function Jv(u, c) {
  let f = D.useContext(Or), [o, r] = D.useState(!1), [d, m] = D.useState(!1), { onFocus: p, onBlur: g, onMouseEnter: y, onMouseLeave: b, onTouchStart: A } = c, U = D.useRef(null);
  D.useEffect(() => {
    if (u === "render" && m(!0), u === "viewport") {
      let j = (Q) => {
        Q.forEach((V) => {
          m(V.isIntersecting);
        });
      }, M = new IntersectionObserver(j, { threshold: 0.5 });
      return U.current && M.observe(U.current), () => {
        M.disconnect();
      };
    }
  }, [u]), D.useEffect(() => {
    if (o) {
      let j = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [o]);
  let q = () => {
    r(!0);
  }, z = () => {
    r(!1), m(!1);
  };
  return f ? u !== "intent" ? [d, U, {}] : [
    d,
    U,
    {
      onFocus: Za(p, q),
      onBlur: Za(g, z),
      onMouseEnter: Za(y, q),
      onMouseLeave: Za(b, z),
      onTouchStart: Za(A, q)
    }
  ] : [!1, U, {}];
}
function Za(u, c) {
  return (f) => {
    u && u(f), f.defaultPrevented || c(f);
  };
}
function kv({ page: u, ...c }) {
  let { router: f } = Um(), o = D.useMemo(
    () => hm(f.routes, u, f.basename),
    [f.routes, u, f.basename]
  );
  return o ? /* @__PURE__ */ D.createElement(Fv, { page: u, matches: o, ...c }) : null;
}
function $v(u) {
  let { manifest: c, routeModules: f } = Dm(), [o, r] = D.useState([]);
  return D.useEffect(() => {
    let d = !1;
    return Gv(u, c, f).then(
      (m) => {
        d || r(m);
      }
    ), () => {
      d = !0;
    };
  }, [u, c, f]), o;
}
function Fv({
  page: u,
  matches: c,
  ...f
}) {
  let o = cn(), { manifest: r, routeModules: d } = Dm(), { basename: m } = Um(), { loaderData: p, matches: g } = Kv(), y = D.useMemo(
    () => Gh(
      u,
      c,
      g,
      r,
      o,
      "data"
    ),
    [u, c, g, r, o]
  ), b = D.useMemo(
    () => Gh(
      u,
      c,
      g,
      r,
      o,
      "assets"
    ),
    [u, c, g, r, o]
  ), A = D.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let z = /* @__PURE__ */ new Set(), j = !1;
    if (c.forEach((Q) => {
      let V = r.routes[Q.route.id];
      !V || !V.hasLoader || (!y.some((J) => J.route.id === Q.route.id) && Q.route.id in p && d[Q.route.id]?.shouldRevalidate || V.hasClientLoader ? j = !0 : z.add(Q.route.id));
    }), z.size === 0)
      return [];
    let M = Lv(u, m, "data");
    return j && z.size > 0 && M.searchParams.set(
      "_routes",
      c.filter((Q) => z.has(Q.route.id)).map((Q) => Q.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    m,
    p,
    o,
    r,
    y,
    c,
    u,
    d
  ]), U = D.useMemo(
    () => Xv(b, r),
    [b, r]
  ), q = $v(b);
  return /* @__PURE__ */ D.createElement(D.Fragment, null, A.map((z) => /* @__PURE__ */ D.createElement("link", { key: z, rel: "prefetch", as: "fetch", href: z, ...f })), U.map((z) => /* @__PURE__ */ D.createElement("link", { key: z, rel: "modulepreload", href: z, ...f })), q.map(({ key: z, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ D.createElement("link", { key: z, nonce: f.nonce, ...j })
  )));
}
function Wv(...u) {
  return (c) => {
    u.forEach((f) => {
      typeof f == "function" ? f(c) : f != null && (f.current = c);
    });
  };
}
var Iv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Iv && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function Pv({
  basename: u,
  children: c,
  unstable_useTransitions: f,
  window: o
}) {
  let r = D.useRef();
  r.current == null && (r.current = Mp({ window: o, v5Compat: !0 }));
  let d = r.current, [m, p] = D.useState({
    action: d.action,
    location: d.location
  }), g = D.useCallback(
    (y) => {
      f === !1 ? p(y) : D.startTransition(() => p(y));
    },
    [f]
  );
  return D.useLayoutEffect(() => d.listen(g), [d, g]), /* @__PURE__ */ D.createElement(
    xv,
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
var Mm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Nm = D.forwardRef(
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
    viewTransition: A,
    unstable_defaultShouldRevalidate: U,
    ...q
  }, z) {
    let { basename: j, unstable_useTransitions: M } = D.useContext(we), Q = typeof y == "string" && Mm.test(y), V = Sm(y, j);
    y = V.to;
    let J = dv(y, { relative: r }), [tt, at, vt] = Jv(
      o,
      q
    ), P = ng(y, {
      replace: m,
      state: p,
      target: g,
      preventScrollReset: b,
      relative: r,
      viewTransition: A,
      unstable_defaultShouldRevalidate: U,
      unstable_useTransitions: M
    });
    function $(Dt) {
      c && c(Dt), Dt.defaultPrevented || P(Dt);
    }
    let ht = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ D.createElement(
        "a",
        {
          ...q,
          ...vt,
          href: V.absoluteURL || J,
          onClick: V.isExternal || d ? c : $,
          ref: Wv(z, at),
          target: g,
          "data-discover": !Q && f === "render" ? "true" : void 0
        }
      )
    );
    return tt && !Q ? /* @__PURE__ */ D.createElement(D.Fragment, null, ht, /* @__PURE__ */ D.createElement(kv, { page: J })) : ht;
  }
);
Nm.displayName = "Link";
var tg = D.forwardRef(
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
    let A = Ia(m, { relative: y.relative }), U = cn(), q = D.useContext(Ui), { navigator: z, basename: j } = D.useContext(we), M = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fg(A) && p === !0, Q = z.encodeLocation ? z.encodeLocation(A).pathname : A.pathname, V = U.pathname, J = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    f || (V = V.toLowerCase(), J = J ? J.toLowerCase() : null, Q = Q.toLowerCase()), J && j && (J = sl(J, j) || J);
    const tt = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let at = V === Q || !r && V.startsWith(Q) && V.charAt(tt) === "/", vt = J != null && (J === Q || !r && J.startsWith(Q) && J.charAt(Q.length) === "/"), P = {
      isActive: at,
      isPending: vt,
      isTransitioning: M
    }, $ = at ? c : void 0, ht;
    typeof o == "function" ? ht = o(P) : ht = [
      o,
      at ? "active" : null,
      vt ? "pending" : null,
      M ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Dt = typeof d == "function" ? d(P) : d;
    return /* @__PURE__ */ D.createElement(
      Nm,
      {
        ...y,
        "aria-current": $,
        className: ht,
        ref: b,
        style: Dt,
        to: m,
        viewTransition: p
      },
      typeof g == "function" ? g(P) : g
    );
  }
);
tg.displayName = "NavLink";
var eg = D.forwardRef(
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
    viewTransition: A,
    unstable_defaultShouldRevalidate: U,
    ...q
  }, z) => {
    let { unstable_useTransitions: j } = D.useContext(we), M = ig(), Q = cg(p, { relative: y }), V = m.toLowerCase() === "get" ? "get" : "post", J = typeof p == "string" && Mm.test(p), tt = (at) => {
      if (g && g(at), at.defaultPrevented) return;
      at.preventDefault();
      let vt = at.nativeEvent.submitter, P = vt?.getAttribute("formmethod") || m, $ = () => M(vt || at.currentTarget, {
        fetcherKey: c,
        method: P,
        navigate: f,
        replace: r,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: A,
        unstable_defaultShouldRevalidate: U
      });
      j && f !== !1 ? D.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ D.createElement(
      "form",
      {
        ref: z,
        method: V,
        action: Q,
        onSubmit: o ? g : tt,
        ...q,
        "data-discover": !J && u === "render" ? "true" : void 0
      }
    );
  }
);
eg.displayName = "Form";
function lg(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wm(u) {
  let c = D.useContext(kn);
  return Ut(c, lg(u)), c;
}
function ng(u, {
  target: c,
  replace: f,
  state: o,
  preventScrollReset: r,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: g
} = {}) {
  let y = hv(), b = cn(), A = Ia(u, { relative: d });
  return D.useCallback(
    (U) => {
      if (wv(U, c)) {
        U.preventDefault();
        let q = f !== void 0 ? f : $a(b) === $a(A), z = () => y(u, {
          replace: q,
          state: o,
          preventScrollReset: r,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: p
        });
        g ? D.startTransition(() => z()) : z();
      }
    },
    [
      b,
      y,
      A,
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
var ag = 0, ug = () => `__${String(++ag)}__`;
function ig() {
  let { router: u } = wm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: c } = D.useContext(we), f = Rv(), o = u.fetch, r = u.navigate;
  return D.useCallback(
    async (d, m = {}) => {
      let { action: p, method: g, encType: y, formData: b, body: A } = jv(
        d,
        c
      );
      if (m.navigate === !1) {
        let U = m.fetcherKey || ug();
        await o(U, f, m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: A,
          formMethod: m.method || g,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await r(m.action || p, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: A,
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
function cg(u, { relative: c } = {}) {
  let { basename: f } = D.useContext(we), o = D.useContext(dl);
  Ut(o, "useFormAction must be used inside a RouteContext");
  let [r] = o.matches.slice(-1), d = { ...Ia(u || ".", { relative: c }) }, m = cn();
  if (u == null) {
    d.search = m.search;
    let p = new URLSearchParams(d.search), g = p.getAll("index");
    if (g.some((b) => b === "")) {
      p.delete("index"), g.filter((A) => A).forEach((A) => p.append("index", A));
      let b = p.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && r.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), f !== "/" && (d.pathname = d.pathname === "/" ? f : ol([f, d.pathname])), $a(d);
}
function fg(u, { relative: c } = {}) {
  let f = D.useContext(Tm);
  Ut(
    f != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = wm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), r = Ia(u, { relative: c });
  if (!f.isTransitioning)
    return !1;
  let d = sl(f.currentLocation.pathname, o) || f.currentLocation.pathname, m = sl(f.nextLocation.pathname, o) || f.nextLocation.pathname;
  return xi(r.pathname, m) != null || xi(r.pathname, d) != null;
}
var cr = { exports: {} }, Pt = {};
var Xh;
function rg() {
  if (Xh) return Pt;
  Xh = 1;
  var u = Sr();
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
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: A == null ? null : "" + A,
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
      var b = y.as, A = p(b, y.crossOrigin), U = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? o.d.S(
        g,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: A,
          integrity: U,
          fetchPriority: q
        }
      ) : b === "script" && o.d.X(g, {
        crossOrigin: A,
        integrity: U,
        fetchPriority: q,
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
      var b = y.as, A = p(b, y.crossOrigin);
      o.d.L(g, b, {
        crossOrigin: A,
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
var Qh;
function og() {
  if (Qh) return cr.exports;
  Qh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), cr.exports = rg(), cr.exports;
}
var fr = { exports: {} }, Ka = {}, rr = { exports: {} }, or = {};
var Vh;
function sg() {
  return Vh || (Vh = 1, (function(u) {
    function c(Y, L) {
      var G = Y.length;
      Y.push(L);
      t: for (; 0 < G; ) {
        var mt = G - 1 >>> 1, Ot = Y[mt];
        if (0 < r(Ot, L))
          Y[mt] = L, Y[G] = Ot, G = mt;
        else break t;
      }
    }
    function f(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function o(Y) {
      if (Y.length === 0) return null;
      var L = Y[0], G = Y.pop();
      if (G !== L) {
        Y[0] = G;
        t: for (var mt = 0, Ot = Y.length, Mt = Ot >>> 1; mt < Mt; ) {
          var E = 2 * (mt + 1) - 1, B = Y[E], X = E + 1, K = Y[X];
          if (0 > r(B, G))
            X < Ot && 0 > r(K, B) ? (Y[mt] = K, Y[X] = G, mt = X) : (Y[mt] = B, Y[E] = G, mt = E);
          else if (X < Ot && 0 > r(K, G))
            Y[mt] = K, Y[X] = G, mt = X;
          else break t;
        }
      }
      return L;
    }
    function r(Y, L) {
      var G = Y.sortIndex - L.sortIndex;
      return G !== 0 ? G : Y.id - L.id;
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
    var g = [], y = [], b = 1, A = null, U = 3, q = !1, z = !1, j = !1, M = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function tt(Y) {
      for (var L = f(y); L !== null; ) {
        if (L.callback === null) o(y);
        else if (L.startTime <= Y)
          o(y), L.sortIndex = L.expirationTime, c(g, L);
        else break;
        L = f(y);
      }
    }
    function at(Y) {
      if (j = !1, tt(Y), !z)
        if (f(g) !== null)
          z = !0, vt || (vt = !0, Vt());
        else {
          var L = f(y);
          L !== null && ae(at, L.startTime - Y);
        }
    }
    var vt = !1, P = -1, $ = 5, ht = -1;
    function Dt() {
      return M ? !0 : !(u.unstable_now() - ht < $);
    }
    function Ye() {
      if (M = !1, vt) {
        var Y = u.unstable_now();
        ht = Y;
        var L = !0;
        try {
          t: {
            z = !1, j && (j = !1, V(P), P = -1), q = !0;
            var G = U;
            try {
              e: {
                for (tt(Y), A = f(g); A !== null && !(A.expirationTime > Y && Dt()); ) {
                  var mt = A.callback;
                  if (typeof mt == "function") {
                    A.callback = null, U = A.priorityLevel;
                    var Ot = mt(
                      A.expirationTime <= Y
                    );
                    if (Y = u.unstable_now(), typeof Ot == "function") {
                      A.callback = Ot, tt(Y), L = !0;
                      break e;
                    }
                    A === f(g) && o(g), tt(Y);
                  } else o(g);
                  A = f(g);
                }
                if (A !== null) L = !0;
                else {
                  var Mt = f(y);
                  Mt !== null && ae(
                    at,
                    Mt.startTime - Y
                  ), L = !1;
                }
              }
              break t;
            } finally {
              A = null, U = G, q = !1;
            }
            L = void 0;
          }
        } finally {
          L ? Vt() : vt = !1;
        }
      }
    }
    var Vt;
    if (typeof J == "function")
      Vt = function() {
        J(Ye);
      };
    else if (typeof MessageChannel < "u") {
      var It = new MessageChannel(), ne = It.port2;
      It.port1.onmessage = Ye, Vt = function() {
        ne.postMessage(null);
      };
    } else
      Vt = function() {
        Q(Ye, 0);
      };
    function ae(Y, L) {
      P = Q(function() {
        Y(u.unstable_now());
      }, L);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, u.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, u.unstable_next = function(Y) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = U;
      }
      var G = U;
      U = L;
      try {
        return Y();
      } finally {
        U = G;
      }
    }, u.unstable_requestPaint = function() {
      M = !0;
    }, u.unstable_runWithPriority = function(Y, L) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var G = U;
      U = Y;
      try {
        return L();
      } finally {
        U = G;
      }
    }, u.unstable_scheduleCallback = function(Y, L, G) {
      var mt = u.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? mt + G : mt) : G = mt, Y) {
        case 1:
          var Ot = -1;
          break;
        case 2:
          Ot = 250;
          break;
        case 5:
          Ot = 1073741823;
          break;
        case 4:
          Ot = 1e4;
          break;
        default:
          Ot = 5e3;
      }
      return Ot = G + Ot, Y = {
        id: b++,
        callback: L,
        priorityLevel: Y,
        startTime: G,
        expirationTime: Ot,
        sortIndex: -1
      }, G > mt ? (Y.sortIndex = G, c(y, Y), f(g) === null && Y === f(y) && (j ? (V(P), P = -1) : j = !0, ae(at, G - mt))) : (Y.sortIndex = Ot, c(g, Y), z || q || (z = !0, vt || (vt = !0, Vt()))), Y;
    }, u.unstable_shouldYield = Dt, u.unstable_wrapCallback = function(Y) {
      var L = U;
      return function() {
        var G = U;
        U = L;
        try {
          return Y.apply(this, arguments);
        } finally {
          U = G;
        }
      };
    };
  })(or)), or;
}
var Zh;
function dg() {
  return Zh || (Zh = 1, rr.exports = sg()), rr.exports;
}
var Kh;
function hg() {
  if (Kh) return Ka;
  Kh = 1;
  var u = {};
  var c = dg(), f = Sr(), o = og();
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
  function A(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = A(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  var U = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), z = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), tt = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), vt = /* @__PURE__ */ Symbol.for("react.suspense"), P = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), ht = /* @__PURE__ */ Symbol.for("react.lazy"), Dt = /* @__PURE__ */ Symbol.for("react.activity"), Ye = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Vt = Symbol.iterator;
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
      case M:
        return "Fragment";
      case V:
        return "Profiler";
      case Q:
        return "StrictMode";
      case vt:
        return "Suspense";
      case P:
        return "SuspenseList";
      case Dt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case j:
          return "Portal";
        case tt:
          return t.displayName || "Context";
        case J:
          return (t._context.displayName || "Context") + ".Consumer";
        case at:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case $:
          return e = t.displayName || null, e !== null ? e : ae(t.type) || "Memo";
        case ht:
          e = t._payload, t = t._init;
          try {
            return ae(t(e));
          } catch {
          }
      }
    return null;
  }
  var Y = Array.isArray, L = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, mt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ot = [], Mt = -1;
  function E(t) {
    return { current: t };
  }
  function B(t) {
    0 > Mt || (t.current = Ot[Mt], Ot[Mt] = null, Mt--);
  }
  function X(t, e) {
    Mt++, Ot[Mt] = t.current, t.current = e;
  }
  var K = E(null), it = E(null), ct = E(null), bt = E(null);
  function ee(t, e) {
    switch (X(ct, e), X(it, t), X(K, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? eh(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = eh(e), t = lh(e, t);
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
    B(K), X(K, t);
  }
  function Ht() {
    B(K), B(it), B(ct);
  }
  function Wn(t) {
    t.memoizedState !== null && X(bt, t);
    var e = K.current, l = lh(e, t.type);
    e !== l && (X(it, t), X(K, l));
  }
  function nu(t) {
    it.current === t && (B(K), B(it)), bt.current === t && (B(bt), Ya._currentValue = mt);
  }
  var ji, Ur;
  function Ll(t) {
    if (ji === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ji = e && e[1] || "", Ur = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ji + t + Ur;
  }
  var Li = !1;
  function qi(t, e) {
    if (!t || Li) return "";
    Li = !0;
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
                } catch (C) {
                  var _ = C;
                }
                Reflect.construct(t, [], H);
              } else {
                try {
                  H.call();
                } catch (C) {
                  _ = C;
                }
                t.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                _ = C;
              }
              (H = t()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (C) {
            if (C && _ && typeof C.stack == "string")
              return [C.stack, _.stack];
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
                  var N = `
` + v[n].replace(" at new ", " at ");
                  return t.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", t.displayName)), N;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Li = !1, Error.prepareStackTrace = l;
    }
    return (l = t ? t.displayName || t.name : "") ? Ll(l) : "";
  }
  function iy(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Ll(t.type);
      case 16:
        return Ll("Lazy");
      case 13:
        return t.child !== e && e !== null ? Ll("Suspense Fallback") : Ll("Suspense");
      case 19:
        return Ll("SuspenseList");
      case 0:
      case 15:
        return qi(t.type, !1);
      case 11:
        return qi(t.type.render, !1);
      case 1:
        return qi(t.type, !0);
      case 31:
        return Ll("Activity");
      default:
        return "";
    }
  }
  function Dr(t) {
    try {
      var e = "", l = null;
      do
        e += iy(t, l), l = t, t = t.return;
      while (t);
      return e;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Yi = Object.prototype.hasOwnProperty, Gi = c.unstable_scheduleCallback, Xi = c.unstable_cancelCallback, cy = c.unstable_shouldYield, fy = c.unstable_requestPaint, me = c.unstable_now, ry = c.unstable_getCurrentPriorityLevel, Mr = c.unstable_ImmediatePriority, Nr = c.unstable_UserBlockingPriority, au = c.unstable_NormalPriority, oy = c.unstable_LowPriority, wr = c.unstable_IdlePriority, sy = c.log, dy = c.unstable_setDisableYieldValue, In = null, ye = null;
  function hl(t) {
    if (typeof sy == "function" && dy(t), ye && typeof ye.setStrictMode == "function")
      try {
        ye.setStrictMode(In, t);
      } catch {
      }
  }
  var pe = Math.clz32 ? Math.clz32 : yy, hy = Math.log, my = Math.LN2;
  function yy(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (hy(t) / my | 0) | 0;
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
  function py(t, e) {
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
  function Hr() {
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
  function vy(t, e, l, n, a, i) {
    var s = t.pendingLanes;
    t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
    var h = t.entanglements, v = t.expirationTimes, O = t.hiddenUpdates;
    for (l = s & ~l; 0 < l; ) {
      var N = 31 - pe(l), H = 1 << N;
      h[N] = 0, v[N] = -1;
      var _ = O[N];
      if (_ !== null)
        for (O[N] = null, N = 0; N < _.length; N++) {
          var C = _[N];
          C !== null && (C.lane &= -536870913);
        }
      l &= ~H;
    }
    n !== 0 && Br(t, n, 0), i !== 0 && a === 0 && t.tag !== 0 && (t.suspendedLanes |= i & ~(s & ~e));
  }
  function Br(t, e, l) {
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
  function Lr(t, e) {
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
  function qr() {
    var t = G.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Oh(t.type));
  }
  function Yr(t, e) {
    var l = G.p;
    try {
      return G.p = t, e();
    } finally {
      G.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + ml, ue = "__reactProps$" + ml, fn = "__reactContainer$" + ml, Ki = "__reactEvents$" + ml, gy = "__reactListeners$" + ml, by = "__reactHandles$" + ml, Gr = "__reactResources$" + ml, ea = "__reactMarker$" + ml;
  function Ji(t) {
    delete t[Jt], delete t[ue], delete t[Ki], delete t[gy], delete t[by];
  }
  function rn(t) {
    var e = t[Jt];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if (e = l[fn] || l[Jt]) {
        if (l = e.alternate, e.child !== null || l !== null && l.child !== null)
          for (t = rh(t); t !== null; ) {
            if (l = t[Jt]) return l;
            t = rh(t);
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
    var e = t[Gr];
    return e || (e = t[Gr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function Zt(t) {
    t[ea] = !0;
  }
  var Xr = /* @__PURE__ */ new Set(), Qr = {};
  function Yl(t, e) {
    dn(t, e), dn(t + "Capture", e);
  }
  function dn(t, e) {
    for (Qr[t] = e, t = 0; t < e.length; t++)
      Xr.add(e[t]);
  }
  var Sy = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Vr = {}, Zr = {};
  function Ey(t) {
    return Yi.call(Zr, t) ? !0 : Yi.call(Vr, t) ? !1 : Sy.test(t) ? Zr[t] = !0 : (Vr[t] = !0, !1);
  }
  function ru(t, e, l) {
    if (Ey(e))
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
  function Kr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function Ty(t, e, l) {
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
      var e = Kr(t) ? "checked" : "value";
      t._valueTracker = Ty(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Jr(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(), n = "";
    return t && (n = Kr(t) ? t.checked ? "true" : "false" : t.value), t = n, t !== l ? (e.setValue(t), !0) : !1;
  }
  function su(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Ay = /[\n"\\]/g;
  function Oe(t) {
    return t.replace(
      Ay,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $i(t, e, l, n, a, i, s, h) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Re(e)) : t.value !== "" + Re(e) && (t.value = "" + Re(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? Fi(t, s, Re(e)) : l != null ? Fi(t, s, Re(l)) : n != null && t.removeAttribute("value"), a == null && i != null && (t.defaultChecked = !!i), a != null && (t.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.name = "" + Re(h) : t.removeAttribute("name");
  }
  function kr(t, e, l, n, a, i, s, h) {
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
  function $r(t, e, l) {
    if (e != null && (e = "" + Re(e), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + Re(l) : "";
  }
  function Fr(t, e, l, n) {
    if (e == null) {
      if (n != null) {
        if (l != null) throw Error(r(92));
        if (Y(n)) {
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
  var Ry = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Wr(t, e, l) {
    var n = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : n ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Ry.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
  }
  function Ir(t, e, l) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || e != null && e.hasOwnProperty(n) || (n.indexOf("--") === 0 ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "");
      for (var a in e)
        n = e[a], e.hasOwnProperty(a) && l[a] !== n && Wr(t, a, n);
    } else
      for (var i in e)
        e.hasOwnProperty(i) && Wr(t, i, e[i]);
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
  var Oy = /* @__PURE__ */ new Map([
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
  ]), _y = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function du(t) {
    return _y.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Je() {
  }
  var Ii = null;
  function Pi(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var yn = null, pn = null;
  function Pr(t) {
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
              n = l[e], n.form === t.form && Jr(n);
          }
          break t;
        case "textarea":
          $r(t, l.value, l.defaultValue);
          break t;
        case "select":
          e = l.value, e != null && hn(t, !!l.multiple, e, !1);
      }
    }
  }
  var tc = !1;
  function to(t, e, l) {
    if (tc) return t(e, l);
    tc = !0;
    try {
      var n = t(e);
      return n;
    } finally {
      if (tc = !1, (yn !== null || pn !== null) && (Pu(), yn && (e = yn, t = pn, pn = yn = null, Pr(e), t)))
        for (e = 0; e < t.length; e++) Pr(t[e]);
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
  function eo() {
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
  function lo() {
    return !1;
  }
  function ie(t) {
    function e(l, n, a, i, s) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var h in t)
        t.hasOwnProperty(h) && (l = t[h], this[h] = l ? l(i) : i[h]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yu : lo, this.isPropagationStopped = lo, this;
    }
    return U(e.prototype, {
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
  }, pu = ie(Gl), ua = U({}, Gl, { view: 0, detail: 0 }), zy = ie(ua), nc, ac, ia, vu = U({}, ua, {
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
  }), no = ie(vu), xy = U({}, vu, { dataTransfer: 0 }), Cy = ie(xy), Uy = U({}, ua, { relatedTarget: 0 }), uc = ie(Uy), Dy = U({}, Gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), My = ie(Dy), Ny = U({}, Gl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), wy = ie(Ny), Hy = U({}, Gl, { data: 0 }), ao = ie(Hy), By = {
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
  }, jy = {
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
  }, Ly = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qy(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = Ly[t]) ? !!e[t] : !1;
  }
  function ic() {
    return qy;
  }
  var Yy = U({}, ua, {
    key: function(t) {
      if (t.key) {
        var e = By[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = mu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? jy[t.keyCode] || "Unidentified" : "";
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
  }), Gy = ie(Yy), Xy = U({}, vu, {
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
  }), uo = ie(Xy), Qy = U({}, ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic
  }), Vy = ie(Qy), Zy = U({}, Gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ky = ie(Zy), Jy = U({}, vu, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ky = ie(Jy), $y = U({}, Gl, {
    newState: 0,
    oldState: 0
  }), Fy = ie($y), Wy = [9, 13, 27, 32], cc = ke && "CompositionEvent" in window, ca = null;
  ke && "documentMode" in document && (ca = document.documentMode);
  var Iy = ke && "TextEvent" in window && !ca, io = ke && (!cc || ca && 8 < ca && 11 >= ca), co = " ", fo = !1;
  function ro(t, e) {
    switch (t) {
      case "keyup":
        return Wy.indexOf(e.keyCode) !== -1;
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
  function oo(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var vn = !1;
  function Py(t, e) {
    switch (t) {
      case "compositionend":
        return oo(e);
      case "keypress":
        return e.which !== 32 ? null : (fo = !0, co);
      case "textInput":
        return t = e.data, t === co && fo ? null : t;
      default:
        return null;
    }
  }
  function t0(t, e) {
    if (vn)
      return t === "compositionend" || !cc && ro(t, e) ? (t = eo(), hu = lc = yl = null, vn = !1, t) : null;
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
        return io && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var e0 = {
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
  function so(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!e0[t.type] : e === "textarea";
  }
  function ho(t, e, l, n) {
    yn ? pn ? pn.push(n) : pn = [n] : yn = n, e = ii(e, "onChange"), 0 < e.length && (l = new pu(
      "onChange",
      "change",
      null,
      l,
      n
    ), t.push({ event: l, listeners: e }));
  }
  var fa = null, ra = null;
  function l0(t) {
    $d(t, 0);
  }
  function gu(t) {
    var e = la(t);
    if (Jr(e)) return t;
  }
  function mo(t, e) {
    if (t === "change") return e;
  }
  var yo = !1;
  if (ke) {
    var fc;
    if (ke) {
      var rc = "oninput" in document;
      if (!rc) {
        var po = document.createElement("div");
        po.setAttribute("oninput", "return;"), rc = typeof po.oninput == "function";
      }
      fc = rc;
    } else fc = !1;
    yo = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function vo() {
    fa && (fa.detachEvent("onpropertychange", go), ra = fa = null);
  }
  function go(t) {
    if (t.propertyName === "value" && gu(ra)) {
      var e = [];
      ho(
        e,
        ra,
        t,
        Pi(t)
      ), to(l0, e);
    }
  }
  function n0(t, e, l) {
    t === "focusin" ? (vo(), fa = e, ra = l, fa.attachEvent("onpropertychange", go)) : t === "focusout" && vo();
  }
  function a0(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return gu(ra);
  }
  function u0(t, e) {
    if (t === "click") return gu(e);
  }
  function i0(t, e) {
    if (t === "input" || t === "change")
      return gu(e);
  }
  function c0(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ve = typeof Object.is == "function" ? Object.is : c0;
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
  function bo(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function So(t, e) {
    var l = bo(t);
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
      l = bo(l);
    }
  }
  function Eo(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Eo(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function To(t) {
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
  var f0 = ke && "documentMode" in document && 11 >= document.documentMode, gn = null, sc = null, sa = null, dc = !1;
  function Ao(t, e, l) {
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
  }, hc = {}, Ro = {};
  ke && (Ro = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Ql(t) {
    if (hc[t]) return hc[t];
    if (!bn[t]) return t;
    var e = bn[t], l;
    for (l in e)
      if (e.hasOwnProperty(l) && l in Ro)
        return hc[t] = e[l];
    return t;
  }
  var Oo = Ql("animationend"), _o = Ql("animationiteration"), zo = Ql("animationstart"), r0 = Ql("transitionrun"), o0 = Ql("transitionstart"), s0 = Ql("transitioncancel"), xo = Ql("transitionend"), Co = /* @__PURE__ */ new Map(), mc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mc.push("scrollEnd");
  function He(t, e) {
    Co.set(t, e), Yl(e, [t]);
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
      i !== 0 && Uo(l, a, i);
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
  function Uo(t, e, l) {
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
  function d0(t, e, l, n) {
    this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ge(t, e, l, n) {
    return new d0(t, e, l, n);
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
  function Do(t, e) {
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
      s = vp(
        t,
        l,
        K.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case Dt:
          return t = ge(31, l, e, a), t.elementType = Dt, t.lanes = i, t;
        case M:
          return Zl(l.children, a, i, e);
        case Q:
          s = 8, a |= 24;
          break;
        case V:
          return t = ge(12, l, e, a | 2), t.elementType = V, t.lanes = i, t;
        case vt:
          return t = ge(13, l, e, a), t.elementType = vt, t.lanes = i, t;
        case P:
          return t = ge(19, l, e, a), t.elementType = P, t.lanes = i, t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case tt:
                s = 10;
                break t;
              case J:
                s = 9;
                break t;
              case at:
                s = 11;
                break t;
              case $:
                s = 14;
                break t;
              case ht:
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
  function Mo(t) {
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
  var No = /* @__PURE__ */ new WeakMap();
  function ze(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = No.get(t);
      return l !== void 0 ? l : (e = {
        value: t,
        source: e,
        stack: Dr(e)
      }, No.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Dr(e)
    };
  }
  var Tn = [], An = 0, Ru = null, da = 0, xe = [], Ce = 0, pl = null, Ge = 1, Xe = "";
  function Fe(t, e) {
    Tn[An++] = da, Tn[An++] = Ru, Ru = t, da = e;
  }
  function wo(t, e, l) {
    xe[Ce++] = Ge, xe[Ce++] = Xe, xe[Ce++] = pl, pl = t;
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
    t.return !== null && (Fe(t, 1), wo(t, 1, 0));
  }
  function Ec(t) {
    for (; t === Ru; )
      Ru = Tn[--An], Tn[An] = null, da = Tn[--An], Tn[An] = null;
    for (; t === pl; )
      pl = xe[--Ce], xe[Ce] = null, Xe = xe[--Ce], xe[Ce] = null, Ge = xe[--Ce], xe[Ce] = null;
  }
  function Ho(t, e) {
    xe[Ce++] = Ge, xe[Ce++] = Xe, xe[Ce++] = pl, Ge = e.id, Xe = e.overflow, pl = t;
  }
  var kt = null, zt = null, dt = !1, vl = null, Ue = !1, Tc = Error(r(519));
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
  function Bo(t) {
    var e = t.stateNode, l = t.type, n = t.memoizedProps;
    switch (e[Jt] = t, e[ue] = n, l) {
      case "dialog":
        rt("cancel", e), rt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        rt("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ha.length; l++)
          rt(Ha[l], e);
        break;
      case "source":
        rt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        rt("error", e), rt("load", e);
        break;
      case "details":
        rt("toggle", e);
        break;
      case "input":
        rt("invalid", e), kr(
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
        rt("invalid", e);
        break;
      case "textarea":
        rt("invalid", e), Fr(e, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || n.suppressHydrationWarning === !0 || Pd(e.textContent, l) ? (n.popover != null && (rt("beforetoggle", e), rt("toggle", e)), n.onScroll != null && rt("scroll", e), n.onScrollEnd != null && rt("scrollend", e), n.onClick != null && (e.onclick = Je), e = !0) : e = !1, e || gl(t, !0);
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
    if (!dt) return jo(t), dt = !0, !1;
    var e = t.tag, l;
    if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || Gf(t.type, t.memoizedProps)), l = !l), l && zt && gl(t), jo(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = fh(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      zt = fh(t);
    } else
      e === 27 ? (e = zt, Ml(t.type) ? (t = Kf, Kf = null, zt = t) : zt = e) : zt = kt ? Me(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Kl() {
    zt = kt = null, dt = !1;
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
    X(Rc, e._currentValue), e._currentValue = l;
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
      } else if (a === bt.current) {
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
    return Lo(Jl, t);
  }
  function _u(t, e) {
    return Jl === null && kl(t), Lo(t, e);
  }
  function Lo(t, e) {
    var l = e._currentValue;
    if (e = { context: e, memoizedValue: l, next: null }, We === null) {
      if (t === null) throw Error(r(308));
      We = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else We = We.next = e;
    return l;
  }
  var h0 = typeof AbortController < "u" ? AbortController : function() {
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
  }, m0 = c.unstable_scheduleCallback, y0 = c.unstable_NormalPriority, qt = {
    $$typeof: tt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zc() {
    return {
      controller: new h0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ma(t) {
    t.refCount--, t.refCount === 0 && m0(y0, function() {
      t.controller.abort();
    });
  }
  var ya = null, xc = 0, _n = 0, zn = null;
  function p0(t, e) {
    if (ya === null) {
      var l = ya = [];
      xc = 0, _n = Mf(), zn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return xc++, e.then(qo, qo), e;
  }
  function qo() {
    if (--xc === 0 && ya !== null) {
      zn !== null && (zn.status = "fulfilled");
      var t = ya;
      ya = null, _n = 0, zn = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function v0(t, e) {
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
  var Yo = L.S;
  L.S = function(t, e) {
    Ad = me(), typeof e == "object" && e !== null && typeof e.then == "function" && p0(t, e), Yo !== null && Yo(t, e);
  };
  var $l = E(null);
  function Cc() {
    var t = $l.current;
    return t !== null ? t : _t.pooledCache;
  }
  function zu(t, e) {
    e === null ? X($l, $l.current) : X($l, e.pool);
  }
  function Go() {
    var t = Cc();
    return t === null ? null : { parent: qt._currentValue, pool: t };
  }
  var xn = Error(r(460)), Uc = Error(r(474)), xu = Error(r(542)), Cu = { then: function() {
  } };
  function Xo(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Qo(t, e, l) {
    switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Je, Je), e = l), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Zo(t), t;
      default:
        if (typeof e.status == "string") e.then(Je, Je);
        else {
          if (t = _t, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, Zo(t), t;
        }
        throw Wl = e, xn;
    }
  }
  function Fl(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, xn) : l;
    }
  }
  var Wl = null;
  function Vo() {
    if (Wl === null) throw Error(r(459));
    var t = Wl;
    return Wl = null, t;
  }
  function Zo(t) {
    if (t === xn || t === xu)
      throw Error(r(483));
  }
  var Cn = null, pa = 0;
  function Uu(t) {
    var e = pa;
    return pa += 1, Cn === null && (Cn = []), Qo(Cn, t, e);
  }
  function va(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Du(t, e) {
    throw e.$$typeof === q ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Ko(t) {
    function e(T, S) {
      if (t) {
        var R = T.deletions;
        R === null ? (T.deletions = [S], T.flags |= 16) : R.push(S);
      }
    }
    function l(T, S) {
      if (!t) return null;
      for (; S !== null; )
        e(T, S), S = S.sibling;
      return null;
    }
    function n(T) {
      for (var S = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), T = T.sibling;
      return S;
    }
    function a(T, S) {
      return T = $e(T, S), T.index = 0, T.sibling = null, T;
    }
    function i(T, S, R) {
      return T.index = R, t ? (R = T.alternate, R !== null ? (R = R.index, R < S ? (T.flags |= 67108866, S) : R) : (T.flags |= 67108866, S)) : (T.flags |= 1048576, S);
    }
    function s(T) {
      return t && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, S, R, w) {
      return S === null || S.tag !== 6 ? (S = gc(R, T.mode, w), S.return = T, S) : (S = a(S, R), S.return = T, S);
    }
    function v(T, S, R, w) {
      var F = R.type;
      return F === M ? N(
        T,
        S,
        R.props.children,
        w,
        R.key
      ) : S !== null && (S.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ht && Fl(F) === S.type) ? (S = a(S, R.props), va(S, R), S.return = T, S) : (S = Au(
        R.type,
        R.key,
        R.props,
        null,
        T.mode,
        w
      ), va(S, R), S.return = T, S);
    }
    function O(T, S, R, w) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== R.containerInfo || S.stateNode.implementation !== R.implementation ? (S = bc(R, T.mode, w), S.return = T, S) : (S = a(S, R.children || []), S.return = T, S);
    }
    function N(T, S, R, w, F) {
      return S === null || S.tag !== 7 ? (S = Zl(
        R,
        T.mode,
        w,
        F
      ), S.return = T, S) : (S = a(S, R), S.return = T, S);
    }
    function H(T, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return S = gc(
          "" + S,
          T.mode,
          R
        ), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case z:
            return R = Au(
              S.type,
              S.key,
              S.props,
              null,
              T.mode,
              R
            ), va(R, S), R.return = T, R;
          case j:
            return S = bc(
              S,
              T.mode,
              R
            ), S.return = T, S;
          case ht:
            return S = Fl(S), H(T, S, R);
        }
        if (Y(S) || It(S))
          return S = Zl(
            S,
            T.mode,
            R,
            null
          ), S.return = T, S;
        if (typeof S.then == "function")
          return H(T, Uu(S), R);
        if (S.$$typeof === tt)
          return H(
            T,
            _u(T, S),
            R
          );
        Du(T, S);
      }
      return null;
    }
    function _(T, S, R, w) {
      var F = S !== null ? S.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return F !== null ? null : h(T, S, "" + R, w);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            return R.key === F ? v(T, S, R, w) : null;
          case j:
            return R.key === F ? O(T, S, R, w) : null;
          case ht:
            return R = Fl(R), _(T, S, R, w);
        }
        if (Y(R) || It(R))
          return F !== null ? null : N(T, S, R, w, null);
        if (typeof R.then == "function")
          return _(
            T,
            S,
            Uu(R),
            w
          );
        if (R.$$typeof === tt)
          return _(
            T,
            S,
            _u(T, R),
            w
          );
        Du(T, R);
      }
      return null;
    }
    function C(T, S, R, w, F) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return T = T.get(R) || null, h(S, T, "" + w, F);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case z:
            return T = T.get(
              w.key === null ? R : w.key
            ) || null, v(S, T, w, F);
          case j:
            return T = T.get(
              w.key === null ? R : w.key
            ) || null, O(S, T, w, F);
          case ht:
            return w = Fl(w), C(
              T,
              S,
              R,
              w,
              F
            );
        }
        if (Y(w) || It(w))
          return T = T.get(R) || null, N(S, T, w, F, null);
        if (typeof w.then == "function")
          return C(
            T,
            S,
            R,
            Uu(w),
            F
          );
        if (w.$$typeof === tt)
          return C(
            T,
            S,
            R,
            _u(S, w),
            F
          );
        Du(S, w);
      }
      return null;
    }
    function Z(T, S, R, w) {
      for (var F = null, yt = null, k = S, ut = S = 0, st = null; k !== null && ut < R.length; ut++) {
        k.index > ut ? (st = k, k = null) : st = k.sibling;
        var pt = _(
          T,
          k,
          R[ut],
          w
        );
        if (pt === null) {
          k === null && (k = st);
          break;
        }
        t && k && pt.alternate === null && e(T, k), S = i(pt, S, ut), yt === null ? F = pt : yt.sibling = pt, yt = pt, k = st;
      }
      if (ut === R.length)
        return l(T, k), dt && Fe(T, ut), F;
      if (k === null) {
        for (; ut < R.length; ut++)
          k = H(T, R[ut], w), k !== null && (S = i(
            k,
            S,
            ut
          ), yt === null ? F = k : yt.sibling = k, yt = k);
        return dt && Fe(T, ut), F;
      }
      for (k = n(k); ut < R.length; ut++)
        st = C(
          k,
          T,
          ut,
          R[ut],
          w
        ), st !== null && (t && st.alternate !== null && k.delete(
          st.key === null ? ut : st.key
        ), S = i(
          st,
          S,
          ut
        ), yt === null ? F = st : yt.sibling = st, yt = st);
      return t && k.forEach(function(jl) {
        return e(T, jl);
      }), dt && Fe(T, ut), F;
    }
    function I(T, S, R, w) {
      if (R == null) throw Error(r(151));
      for (var F = null, yt = null, k = S, ut = S = 0, st = null, pt = R.next(); k !== null && !pt.done; ut++, pt = R.next()) {
        k.index > ut ? (st = k, k = null) : st = k.sibling;
        var jl = _(T, k, pt.value, w);
        if (jl === null) {
          k === null && (k = st);
          break;
        }
        t && k && jl.alternate === null && e(T, k), S = i(jl, S, ut), yt === null ? F = jl : yt.sibling = jl, yt = jl, k = st;
      }
      if (pt.done)
        return l(T, k), dt && Fe(T, ut), F;
      if (k === null) {
        for (; !pt.done; ut++, pt = R.next())
          pt = H(T, pt.value, w), pt !== null && (S = i(pt, S, ut), yt === null ? F = pt : yt.sibling = pt, yt = pt);
        return dt && Fe(T, ut), F;
      }
      for (k = n(k); !pt.done; ut++, pt = R.next())
        pt = C(k, T, ut, pt.value, w), pt !== null && (t && pt.alternate !== null && k.delete(pt.key === null ? ut : pt.key), S = i(pt, S, ut), yt === null ? F = pt : yt.sibling = pt, yt = pt);
      return t && k.forEach(function(xp) {
        return e(T, xp);
      }), dt && Fe(T, ut), F;
    }
    function Rt(T, S, R, w) {
      if (typeof R == "object" && R !== null && R.type === M && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case z:
            t: {
              for (var F = R.key; S !== null; ) {
                if (S.key === F) {
                  if (F = R.type, F === M) {
                    if (S.tag === 7) {
                      l(
                        T,
                        S.sibling
                      ), w = a(
                        S,
                        R.props.children
                      ), w.return = T, T = w;
                      break t;
                    }
                  } else if (S.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ht && Fl(F) === S.type) {
                    l(
                      T,
                      S.sibling
                    ), w = a(S, R.props), va(w, R), w.return = T, T = w;
                    break t;
                  }
                  l(T, S);
                  break;
                } else e(T, S);
                S = S.sibling;
              }
              R.type === M ? (w = Zl(
                R.props.children,
                T.mode,
                w,
                R.key
              ), w.return = T, T = w) : (w = Au(
                R.type,
                R.key,
                R.props,
                null,
                T.mode,
                w
              ), va(w, R), w.return = T, T = w);
            }
            return s(T);
          case j:
            t: {
              for (F = R.key; S !== null; ) {
                if (S.key === F)
                  if (S.tag === 4 && S.stateNode.containerInfo === R.containerInfo && S.stateNode.implementation === R.implementation) {
                    l(
                      T,
                      S.sibling
                    ), w = a(S, R.children || []), w.return = T, T = w;
                    break t;
                  } else {
                    l(T, S);
                    break;
                  }
                else e(T, S);
                S = S.sibling;
              }
              w = bc(R, T.mode, w), w.return = T, T = w;
            }
            return s(T);
          case ht:
            return R = Fl(R), Rt(
              T,
              S,
              R,
              w
            );
        }
        if (Y(R))
          return Z(
            T,
            S,
            R,
            w
          );
        if (It(R)) {
          if (F = It(R), typeof F != "function") throw Error(r(150));
          return R = F.call(R), I(
            T,
            S,
            R,
            w
          );
        }
        if (typeof R.then == "function")
          return Rt(
            T,
            S,
            Uu(R),
            w
          );
        if (R.$$typeof === tt)
          return Rt(
            T,
            S,
            _u(T, R),
            w
          );
        Du(T, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, S !== null && S.tag === 6 ? (l(T, S.sibling), w = a(S, R), w.return = T, T = w) : (l(T, S), w = gc(R, T.mode, w), w.return = T, T = w), s(T)) : l(T, S);
    }
    return function(T, S, R, w) {
      try {
        pa = 0;
        var F = Rt(
          T,
          S,
          R,
          w
        );
        return Cn = null, F;
      } catch (k) {
        if (k === xn || k === xu) throw k;
        var yt = ge(29, k, null, T.mode);
        return yt.lanes = w, yt.return = T, yt;
      }
    };
  }
  var Il = Ko(!0), Jo = Ko(!1), Sl = !1;
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
    if (n = n.shared, (gt & 2) !== 0) {
      var a = n.pending;
      return a === null ? e.next = e : (e.next = a.next, a.next = e), n.pending = e, e = Tu(t), Uo(t, null, l), e;
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
      var N = t.alternate;
      N !== null && (N = N.updateQueue, h = N.lastBaseUpdate, h !== s && (h === null ? N.firstBaseUpdate = O : h.next = O, N.lastBaseUpdate = v));
    }
    if (i !== null) {
      var H = a.baseState;
      s = 0, N = O = v = null, h = i;
      do {
        var _ = h.lane & -536870913, C = _ !== h.lane;
        if (C ? (ot & _) === _ : (n & _) === _) {
          _ !== 0 && _ === _n && (wc = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          t: {
            var Z = t, I = h;
            _ = e;
            var Rt = l;
            switch (I.tag) {
              case 1:
                if (Z = I.payload, typeof Z == "function") {
                  H = Z.call(Rt, H, _);
                  break t;
                }
                H = Z;
                break t;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = I.payload, _ = typeof Z == "function" ? Z.call(Rt, H, _) : Z, _ == null) break t;
                H = U({}, H, _);
                break t;
              case 2:
                Sl = !0;
            }
          }
          _ = h.callback, _ !== null && (t.flags |= 64, C && (t.flags |= 8192), C = a.callbacks, C === null ? a.callbacks = [_] : C.push(_));
        } else
          C = {
            lane: _,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, N === null ? (O = N = C, v = H) : N = N.next = C, s |= _;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null)
            break;
          C = h, h = C.next, C.next = null, a.lastBaseUpdate = C, a.shared.pending = null;
        }
      } while (!0);
      N === null && (v = H), a.baseState = v, a.firstBaseUpdate = O, a.lastBaseUpdate = N, i === null && (a.shared.lanes = 0), zl |= s, t.lanes = s, t.memoizedState = H;
    }
  }
  function ko(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function $o(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++)
        ko(l[t], e);
  }
  var Un = E(null), Mu = E(0);
  function Fo(t, e) {
    t = cl, X(Mu, t), X(Un, e), cl = t | e.baseLanes;
  }
  function Hc() {
    X(Mu, cl), X(Un, Un.current);
  }
  function Bc() {
    cl = Mu.current, B(Un), B(Mu);
  }
  var be = E(null), De = null;
  function Al(t) {
    var e = t.alternate;
    X(Bt, Bt.current & 1), X(be, t), De === null && (e === null || Un.current !== null || e.memoizedState !== null) && (De = t);
  }
  function jc(t) {
    X(Bt, Bt.current), X(be, t), De === null && (De = t);
  }
  function Wo(t) {
    t.tag === 22 ? (X(Bt, Bt.current), X(be, t), De === null && (De = t)) : Rl();
  }
  function Rl() {
    X(Bt, Bt.current), X(be, be.current);
  }
  function Se(t) {
    B(be), De === t && (De = null), B(Bt);
  }
  var Bt = E(0);
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
  var Pe = 0, lt = null, Tt = null, Yt = null, wu = !1, Dn = !1, Pl = !1, Hu = 0, Ea = 0, Mn = null, g0 = 0;
  function Nt() {
    throw Error(r(321));
  }
  function Lc(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!ve(t[l], e[l])) return !1;
    return !0;
  }
  function qc(t, e, l, n, a, i) {
    return Pe = i, lt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, L.H = t === null || t.memoizedState === null ? ws : tf, Pl = !1, i = l(n, a), Pl = !1, Dn && (i = Po(
      e,
      l,
      n,
      a
    )), Io(t), i;
  }
  function Io(t) {
    L.H = Ra;
    var e = Tt !== null && Tt.next !== null;
    if (Pe = 0, Yt = Tt = lt = null, wu = !1, Ea = 0, Mn = null, e) throw Error(r(300));
    t === null || Gt || (t = t.dependencies, t !== null && Ou(t) && (Gt = !0));
  }
  function Po(t, e, l, n) {
    lt = t;
    var a = 0;
    do {
      if (Dn && (Mn = null), Ea = 0, Dn = !1, 25 <= a) throw Error(r(301));
      if (a += 1, Yt = Tt = null, t.updateQueue != null) {
        var i = t.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      L.H = Hs, i = e(l, n);
    } while (Dn);
    return i;
  }
  function b0() {
    var t = L.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Ta(e) : e, t = t.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== t && (lt.flags |= 1024), e;
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
    Pe = 0, Yt = Tt = lt = null, Dn = !1, Ea = Hu = 0, Mn = null;
  }
  function le() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? lt.memoizedState = Yt = t : Yt = Yt.next = t, Yt;
  }
  function jt() {
    if (Tt === null) {
      var t = lt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Tt.next;
    var e = Yt === null ? lt.memoizedState : Yt.next;
    if (e !== null)
      Yt = e, Tt = t;
    else {
      if (t === null)
        throw lt.alternate === null ? Error(r(467)) : Error(r(310));
      Tt = t, t = {
        memoizedState: Tt.memoizedState,
        baseState: Tt.baseState,
        baseQueue: Tt.baseQueue,
        queue: Tt.queue,
        next: null
      }, Yt === null ? lt.memoizedState = Yt = t : Yt = Yt.next = t;
    }
    return Yt;
  }
  function Bu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ta(t) {
    var e = Ea;
    return Ea += 1, Mn === null && (Mn = []), t = Qo(Mn, t, e), e = lt, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, L.H = e === null || e.memoizedState === null ? ws : tf), t;
  }
  function ju(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Ta(t);
      if (t.$$typeof === tt) return $t(t);
    }
    throw Error(r(438, String(t)));
  }
  function Qc(t) {
    var e = null, l = lt.updateQueue;
    if (l !== null && (e = l.memoCache), e == null) {
      var n = lt.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (e = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), l === null && (l = Bu(), lt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0)
      for (l = e.data[e.index] = Array(t), n = 0; n < t; n++)
        l[n] = Ye;
    return e.index++, l;
  }
  function tl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Lu(t) {
    var e = jt();
    return Vc(e, Tt, t);
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
      var h = s = null, v = null, O = e, N = !1;
      do {
        var H = O.lane & -536870913;
        if (H !== O.lane ? (ot & H) === H : (Pe & H) === H) {
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
            }), H === _n && (N = !0);
          else if ((Pe & _) === _) {
            O = O.next, _ === _n && (N = !0);
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
            }, v === null ? (h = v = H, s = i) : v = v.next = H, lt.lanes |= _, zl |= _;
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
          }, v === null ? (h = v = _, s = i) : v = v.next = _, lt.lanes |= H, zl |= H;
        O = O.next;
      } while (O !== null && O !== e);
      if (v === null ? s = i : v.next = h, !ve(i, t.memoizedState) && (Gt = !0, N && (l = zn, l !== null)))
        throw l;
      t.memoizedState = i, t.baseState = s, t.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [t.memoizedState, n.dispatch];
  }
  function Zc(t) {
    var e = jt(), l = e.queue;
    if (l === null) throw Error(r(311));
    l.lastRenderedReducer = t;
    var n = l.dispatch, a = l.pending, i = e.memoizedState;
    if (a !== null) {
      l.pending = null;
      var s = a = a.next;
      do
        i = t(i, s.action), s = s.next;
      while (s !== a);
      ve(i, e.memoizedState) || (Gt = !0), e.memoizedState = i, e.baseQueue === null && (e.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function ts(t, e, l) {
    var n = lt, a = jt(), i = dt;
    if (i) {
      if (l === void 0) throw Error(r(407));
      l = l();
    } else l = e();
    var s = !ve(
      (Tt || a).memoizedState,
      l
    );
    if (s && (a.memoizedState = l, Gt = !0), a = a.queue, kc(ns.bind(null, n, a, t), [
      t
    ]), a.getSnapshot !== e || s || Yt !== null && Yt.memoizedState.tag & 1) {
      if (n.flags |= 2048, Nn(
        9,
        { destroy: void 0 },
        ls.bind(
          null,
          n,
          a,
          l,
          e
        ),
        null
      ), _t === null) throw Error(r(349));
      i || (Pe & 127) !== 0 || es(n, e, l);
    }
    return l;
  }
  function es(t, e, l) {
    t.flags |= 16384, t = { getSnapshot: e, value: l }, e = lt.updateQueue, e === null ? (e = Bu(), lt.updateQueue = e, e.stores = [t]) : (l = e.stores, l === null ? e.stores = [t] : l.push(t));
  }
  function ls(t, e, l, n) {
    e.value = l, e.getSnapshot = n, as(e) && us(t);
  }
  function ns(t, e, l) {
    return l(function() {
      as(e) && us(t);
    });
  }
  function as(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !ve(t, l);
    } catch {
      return !0;
    }
  }
  function us(t) {
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
  function is(t, e, l, n) {
    return t.baseState = l, Vc(
      t,
      Tt,
      typeof n == "function" ? n : tl
    );
  }
  function S0(t, e, l, n, a) {
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
      L.T !== null ? l(!0) : i.isTransition = !1, n(i), l = e.pending, l === null ? (i.next = e.pending = i, cs(e, i)) : (i.next = l.next, e.pending = l.next = i);
    }
  }
  function cs(t, e) {
    var l = e.action, n = e.payload, a = t.state;
    if (e.isTransition) {
      var i = L.T, s = {};
      L.T = s;
      try {
        var h = l(a, n), v = L.S;
        v !== null && v(s, h), fs(t, e, h);
      } catch (O) {
        Jc(t, e, O);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), L.T = i;
      }
    } else
      try {
        i = l(a, n), fs(t, e, i);
      } catch (O) {
        Jc(t, e, O);
      }
  }
  function fs(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        rs(t, e, n);
      },
      function(n) {
        return Jc(t, e, n);
      }
    ) : rs(t, e, l);
  }
  function rs(t, e, l) {
    e.status = "fulfilled", e.value = l, os(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, cs(t, l)));
  }
  function Jc(t, e, l) {
    var n = t.pending;
    if (t.pending = null, n !== null) {
      n = n.next;
      do
        e.status = "rejected", e.reason = l, os(e), e = e.next;
      while (e !== n);
    }
    t.action = null;
  }
  function os(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ss(t, e) {
    return e;
  }
  function ds(t, e) {
    if (dt) {
      var l = _t.formState;
      if (l !== null) {
        t: {
          var n = lt;
          if (dt) {
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
      lastRenderedReducer: ss,
      lastRenderedState: e
    }, l.queue = n, l = Ds.bind(
      null,
      lt,
      n
    ), n.dispatch = l, n = Kc(!1), i = Pc.bind(
      null,
      lt,
      !1,
      n.queue
    ), n = le(), a = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, n.queue = a, l = S0.bind(
      null,
      lt,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = t, [e, l, !1];
  }
  function hs(t) {
    var e = jt();
    return ms(e, Tt, t);
  }
  function ms(t, e, l) {
    if (e = Vc(
      t,
      e,
      ss
    )[0], t = Lu(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var n = Ta(e);
      } catch (s) {
        throw s === xn ? xu : s;
      }
    else n = e;
    e = jt();
    var a = e.queue, i = a.dispatch;
    return l !== e.memoizedState && (lt.flags |= 2048, Nn(
      9,
      { destroy: void 0 },
      E0.bind(null, a, l),
      null
    )), [n, i, t];
  }
  function E0(t, e) {
    t.action = e;
  }
  function ys(t) {
    var e = jt(), l = Tt;
    if (l !== null)
      return ms(e, l, t);
    jt(), e = e.memoizedState, l = jt();
    var n = l.queue.dispatch;
    return l.memoizedState = t, [e, n, !1];
  }
  function Nn(t, e, l, n) {
    return t = { tag: t, create: l, deps: n, inst: e, next: null }, e = lt.updateQueue, e === null && (e = Bu(), lt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (n = l.next, l.next = t, t.next = n, e.lastEffect = t), t;
  }
  function ps() {
    return jt().memoizedState;
  }
  function qu(t, e, l, n) {
    var a = le();
    lt.flags |= t, a.memoizedState = Nn(
      1 | e,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Yu(t, e, l, n) {
    var a = jt();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Tt !== null && n !== null && Lc(n, Tt.memoizedState.deps) ? a.memoizedState = Nn(e, i, l, n) : (lt.flags |= t, a.memoizedState = Nn(
      1 | e,
      i,
      l,
      n
    ));
  }
  function vs(t, e) {
    qu(8390656, 8, t, e);
  }
  function kc(t, e) {
    Yu(2048, 8, t, e);
  }
  function T0(t) {
    lt.flags |= 4;
    var e = lt.updateQueue;
    if (e === null)
      e = Bu(), lt.updateQueue = e, e.events = [t];
    else {
      var l = e.events;
      l === null ? e.events = [t] : l.push(t);
    }
  }
  function gs(t) {
    var e = jt().memoizedState;
    return T0({ ref: e, nextImpl: t }), function() {
      if ((gt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function bs(t, e) {
    return Yu(4, 2, t, e);
  }
  function Ss(t, e) {
    return Yu(4, 4, t, e);
  }
  function Es(t, e) {
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
  function Ts(t, e, l) {
    l = l != null ? l.concat([t]) : null, Yu(4, 4, Es.bind(null, e, t), l);
  }
  function $c() {
  }
  function As(t, e) {
    var l = jt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    return e !== null && Lc(e, n[1]) ? n[0] : (l.memoizedState = [t, e], t);
  }
  function Rs(t, e) {
    var l = jt();
    e = e === void 0 ? null : e;
    var n = l.memoizedState;
    if (e !== null && Lc(e, n[1]))
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
    return l === void 0 || (Pe & 1073741824) !== 0 && (ot & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Od(), lt.lanes |= t, zl |= t, l);
  }
  function Os(t, e, l, n) {
    return ve(l, e) ? l : Un.current !== null ? (t = Fc(t, l, n), ve(t, e) || (Gt = !0), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (ot & 261930) === 0 ? (Gt = !0, t.memoizedState = l) : (t = Od(), lt.lanes |= t, zl |= t, e);
  }
  function _s(t, e, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var s = L.T, h = {};
    L.T = h, Pc(t, !1, e, l);
    try {
      var v = a(), O = L.S;
      if (O !== null && O(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var N = v0(
          v,
          n
        );
        Aa(
          t,
          e,
          N,
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
      G.p = i, s !== null && h.types !== null && (s.types = h.types), L.T = s;
    }
  }
  function A0() {
  }
  function Wc(t, e, l, n) {
    if (t.tag !== 5) throw Error(r(476));
    var a = zs(t).queue;
    _s(
      t,
      a,
      e,
      mt,
      l === null ? A0 : function() {
        return xs(t), l(n);
      }
    );
  }
  function zs(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: mt,
      baseState: mt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: mt
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
    var e = zs(t);
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
  function Cs() {
    return jt().memoizedState;
  }
  function Us() {
    return jt().memoizedState;
  }
  function R0(t) {
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
  function O0(t, e, l) {
    var n = Ae();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Gu(t) ? Ms(e, l) : (l = pc(t, e, l, n), l !== null && (se(l, t, n), Ns(l, e, n)));
  }
  function Ds(t, e, l) {
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
    if (Gu(t)) Ms(e, a);
    else {
      var i = t.alternate;
      if (t.lanes === 0 && (i === null || i.lanes === 0) && (i = e.lastRenderedReducer, i !== null))
        try {
          var s = e.lastRenderedState, h = i(s, l);
          if (a.hasEagerState = !0, a.eagerState = h, ve(h, s))
            return Eu(t, e, a, 0), _t === null && Su(), !1;
        } catch {
        }
      if (l = pc(t, e, a, n), l !== null)
        return se(l, t, n), Ns(l, e, n), !0;
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
    return t === lt || e !== null && e === lt;
  }
  function Ms(t, e) {
    Dn = wu = !0;
    var l = t.pending;
    l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
  }
  function Ns(t, e, l) {
    if ((l & 4194048) !== 0) {
      var n = e.lanes;
      n &= t.pendingLanes, l |= n, e.lanes = l, jr(t, l);
    }
  }
  var Ra = {
    readContext: $t,
    use: ju,
    useCallback: Nt,
    useContext: Nt,
    useEffect: Nt,
    useImperativeHandle: Nt,
    useLayoutEffect: Nt,
    useInsertionEffect: Nt,
    useMemo: Nt,
    useReducer: Nt,
    useRef: Nt,
    useState: Nt,
    useDebugValue: Nt,
    useDeferredValue: Nt,
    useTransition: Nt,
    useSyncExternalStore: Nt,
    useId: Nt,
    useHostTransitionStatus: Nt,
    useFormState: Nt,
    useActionState: Nt,
    useOptimistic: Nt,
    useMemoCache: Nt,
    useCacheRefresh: Nt
  };
  Ra.useEffectEvent = Nt;
  var ws = {
    readContext: $t,
    use: ju,
    useCallback: function(t, e) {
      return le().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: $t,
    useEffect: vs,
    useImperativeHandle: function(t, e, l) {
      l = l != null ? l.concat([t]) : null, qu(
        4194308,
        4,
        Es.bind(null, e, t),
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
      }, n.queue = t, t = t.dispatch = O0.bind(
        null,
        lt,
        t
      ), [n.memoizedState, t];
    },
    useRef: function(t) {
      var e = le();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Kc(t);
      var e = t.queue, l = Ds.bind(null, lt, e);
      return e.dispatch = l, [t.memoizedState, l];
    },
    useDebugValue: $c,
    useDeferredValue: function(t, e) {
      var l = le();
      return Fc(l, t, e);
    },
    useTransition: function() {
      var t = Kc(!1);
      return t = _s.bind(
        null,
        lt,
        t.queue,
        !0,
        !1
      ), le().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, l) {
      var n = lt, a = le();
      if (dt) {
        if (l === void 0)
          throw Error(r(407));
        l = l();
      } else {
        if (l = e(), _t === null)
          throw Error(r(349));
        (ot & 127) !== 0 || es(n, e, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: e };
      return a.queue = i, vs(ns.bind(null, n, i, t), [
        t
      ]), n.flags |= 2048, Nn(
        9,
        { destroy: void 0 },
        ls.bind(
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
      var t = le(), e = _t.identifierPrefix;
      if (dt) {
        var l = Xe, n = Ge;
        l = (n & ~(1 << 32 - pe(n) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Hu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
      } else
        l = g0++, e = "_" + e + "r_" + l.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ic,
    useFormState: ds,
    useActionState: ds,
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
        lt,
        !0,
        l
      ), l.dispatch = e, [t, e];
    },
    useMemoCache: Qc,
    useCacheRefresh: function() {
      return le().memoizedState = R0.bind(
        null,
        lt
      );
    },
    useEffectEvent: function(t) {
      var e = le(), l = { impl: t };
      return e.memoizedState = l, function() {
        if ((gt & 2) !== 0)
          throw Error(r(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, tf = {
    readContext: $t,
    use: ju,
    useCallback: As,
    useContext: $t,
    useEffect: kc,
    useImperativeHandle: Ts,
    useInsertionEffect: bs,
    useLayoutEffect: Ss,
    useMemo: Rs,
    useReducer: Lu,
    useRef: ps,
    useState: function() {
      return Lu(tl);
    },
    useDebugValue: $c,
    useDeferredValue: function(t, e) {
      var l = jt();
      return Os(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Lu(tl)[0], e = jt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ta(t),
        e
      ];
    },
    useSyncExternalStore: ts,
    useId: Cs,
    useHostTransitionStatus: Ic,
    useFormState: hs,
    useActionState: hs,
    useOptimistic: function(t, e) {
      var l = jt();
      return is(l, Tt, t, e);
    },
    useMemoCache: Qc,
    useCacheRefresh: Us
  };
  tf.useEffectEvent = gs;
  var Hs = {
    readContext: $t,
    use: ju,
    useCallback: As,
    useContext: $t,
    useEffect: kc,
    useImperativeHandle: Ts,
    useInsertionEffect: bs,
    useLayoutEffect: Ss,
    useMemo: Rs,
    useReducer: Zc,
    useRef: ps,
    useState: function() {
      return Zc(tl);
    },
    useDebugValue: $c,
    useDeferredValue: function(t, e) {
      var l = jt();
      return Tt === null ? Fc(l, t, e) : Os(
        l,
        Tt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Zc(tl)[0], e = jt().memoizedState;
      return [
        typeof t == "boolean" ? t : Ta(t),
        e
      ];
    },
    useSyncExternalStore: ts,
    useId: Cs,
    useHostTransitionStatus: Ic,
    useFormState: ys,
    useActionState: ys,
    useOptimistic: function(t, e) {
      var l = jt();
      return Tt !== null ? is(l, Tt, t, e) : (l.baseState = t, [t, l.queue.dispatch]);
    },
    useMemoCache: Qc,
    useCacheRefresh: Us
  };
  Hs.useEffectEvent = gs;
  function ef(t, e, l, n) {
    e = t.memoizedState, l = l(n, e), l = l == null ? e : U({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
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
  function Bs(t, e, l, n, a, i, s) {
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
      l === e && (l = U({}, l));
      for (var a in t)
        l[a] === void 0 && (l[a] = t[a]);
    }
    return l;
  }
  function Ls(t) {
    bu(t);
  }
  function qs(t) {
    console.error(t);
  }
  function Ys(t) {
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
  function Gs(t, e, l) {
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
  function Xs(t) {
    return t = El(t), t.tag = 3, t;
  }
  function Qs(t, e, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      t.payload = function() {
        return a(i);
      }, t.callback = function() {
        Gs(e, l, n);
      };
    }
    var s = l.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Gs(e, l, n), typeof a != "function" && (xl === null ? xl = /* @__PURE__ */ new Set([this]) : xl.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function _0(t, e, l, n, a) {
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
            return De === null ? ti() : l.alternate === null && wt === 0 && (wt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Cu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : e.add(n), Cf(t, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Cu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Cf(t, n, a)), !1;
        }
        throw Error(r(435, l.tag));
      }
      return Cf(t, n, a), ti(), !1;
    }
    if (dt)
      return e = be.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = a, n !== Tc && (t = Error(r(422), { cause: n }), ha(ze(t, l)))) : (n !== Tc && (e = Error(r(423), {
        cause: n
      }), ha(
        ze(e, l)
      )), t = t.current.alternate, t.flags |= 65536, a &= -a, t.lanes |= a, n = ze(n, l), a = nf(
        t.stateNode,
        n,
        a
      ), Nc(t, a), wt !== 4 && (wt = 2)), !1;
    var i = Error(r(520), { cause: n });
    if (i = ze(i, l), Ma === null ? Ma = [i] : Ma.push(i), wt !== 4 && (wt = 2), e === null) return !0;
    n = ze(n, l), l = e;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, t = a & -a, l.lanes |= t, t = nf(l.stateNode, n, t), Nc(l, t), !1;
        case 1:
          if (e = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (xl === null || !xl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Xs(a), Qs(
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
  var af = Error(r(461)), Gt = !1;
  function Ft(t, e, l, n) {
    e.child = t === null ? Jo(e, null, l, n) : Il(
      e,
      t.child,
      l,
      n
    );
  }
  function Vs(t, e, l, n, a) {
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
    ), h = Yc(), t !== null && !Gt ? (Gc(t, e, a), el(t, e, a)) : (dt && h && Sc(e), e.flags |= 1, Ft(t, e, n, a), e.child);
  }
  function Zs(t, e, l, n, a) {
    if (t === null) {
      var i = l.type;
      return typeof i == "function" && !vc(i) && i.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = i, Ks(
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
  function Ks(t, e, l, n, a) {
    if (t !== null) {
      var i = t.memoizedProps;
      if (oa(i, n) && t.ref === e.ref)
        if (Gt = !1, e.pendingProps = n = i, hf(t, a))
          (t.flags & 131072) !== 0 && (Gt = !0);
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
  function Js(t, e, l, n) {
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
        return ks(
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
        ), i !== null ? Fo(e, i) : Hc(), Wo(e);
      else
        return n = e.lanes = 536870912, ks(
          t,
          e,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (zu(e, i.cachePool), Fo(e, i), Rl(), e.memoizedState = null) : (t !== null && zu(e, null), Hc(), Rl());
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
  function ks(t, e, l, n, a) {
    var i = Cc();
    return i = i === null ? null : { parent: qt._currentValue, pool: i }, e.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, t !== null && zu(e, null), Hc(), Wo(e), t !== null && On(t, e, n, !0), e.childLanes = a, null;
  }
  function Qu(t, e) {
    return e = Zu(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function $s(t, e, l) {
    return Il(e, t.child, null, l), t = Qu(e, e.pendingProps), t.flags |= 2, Se(e), e.memoizedState = null, t;
  }
  function z0(t, e, l) {
    var n = e.pendingProps, a = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (dt) {
        if (n.mode === "hidden")
          return t = Qu(e, n), e.lanes = 536870912, Oa(null, t);
        if (jc(e), (t = zt) ? (t = ch(
          t,
          Ue
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Ge, overflow: Xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Mo(t), l.return = e, e.child = l, kt = e, zt = null)) : t = null, t === null) throw gl(e);
        return e.lanes = 536870912, null;
      }
      return Qu(e, n);
    }
    var i = t.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (jc(e), a)
        if (e.flags & 256)
          e.flags &= -257, e = $s(
            t,
            e,
            l
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (Gt || On(t, e, l, !1), a = (l & t.childLanes) !== 0, Gt || a) {
        if (n = _t, n !== null && (s = Lr(n, l), s !== 0 && s !== i.retryLane))
          throw i.retryLane = s, Vl(t, s), se(n, t, s), af;
        ti(), e = $s(
          t,
          e,
          l
        );
      } else
        t = i.treeContext, zt = Me(s.nextSibling), kt = e, dt = !0, vl = null, Ue = !1, t !== null && Ho(e, t), e = Qu(e, n), e.flags |= 4096;
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
    ), n = Yc(), t !== null && !Gt ? (Gc(t, e, a), el(t, e, a)) : (dt && n && Sc(e), e.flags |= 1, Ft(t, e, l, a), e.child);
  }
  function Fs(t, e, l, n, a, i) {
    return kl(e), e.updateQueue = null, l = Po(
      e,
      n,
      l,
      a
    ), Io(t), n = Yc(), t !== null && !Gt ? (Gc(t, e, i), el(t, e, i)) : (dt && n && Sc(e), e.flags |= 1, Ft(t, e, l, i), e.child);
  }
  function Ws(t, e, l, n, a) {
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
      var O = i.context, N = l.contextType;
      s = En, typeof N == "object" && N !== null && (s = $t(N));
      var H = l.getDerivedStateFromProps;
      N = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = e.pendingProps !== h, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || O !== s) && js(
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
      ), O = e.memoizedState), (v = Sl || Bs(
        e,
        l,
        v,
        n,
        _,
        O,
        s
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = n, e.memoizedState = O), i.props = n, i.state = O, i.context = s, n = v) : (typeof i.componentDidMount == "function" && (e.flags |= 4194308), n = !1);
    } else {
      i = e.stateNode, Mc(t, e), s = e.memoizedProps, N = tn(l, s), i.props = N, H = e.pendingProps, _ = i.context, O = l.contextType, v = En, typeof O == "object" && O !== null && (v = $t(O)), h = l.getDerivedStateFromProps, (O = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== H || _ !== v) && js(
        e,
        i,
        n,
        v
      ), Sl = !1, _ = e.memoizedState, i.state = _, Sa(e, n, i, a), ba();
      var C = e.memoizedState;
      s !== H || _ !== C || Sl || t !== null && t.dependencies !== null && Ou(t.dependencies) ? (typeof h == "function" && (ef(
        e,
        l,
        h,
        n
      ), C = e.memoizedState), (N = Sl || Bs(
        e,
        l,
        N,
        n,
        _,
        C,
        v
      ) || t !== null && t.dependencies !== null && Ou(t.dependencies)) ? (O || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, C, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        C,
        v
      )), typeof i.componentDidUpdate == "function" && (e.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = n, e.memoizedState = C), i.props = n, i.state = C, i.context = v, n = N) : (typeof i.componentDidUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), n = !1);
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
  function Is(t, e, l, n) {
    return Kl(), e.flags |= 256, Ft(t, e, l, n), e.child;
  }
  var cf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ff(t) {
    return { baseLanes: t, cachePool: Go() };
  }
  function rf(t, e, l) {
    return t = t !== null ? t.childLanes & ~l : 0, e && (t |= Te), t;
  }
  function Ps(t, e, l) {
    var n = e.pendingProps, a = !1, i = (e.flags & 128) !== 0, s;
    if ((s = i) || (s = t !== null && t.memoizedState === null ? !1 : (Bt.current & 2) !== 0), s && (a = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (dt) {
        if (a ? Al(e) : Rl(), (t = zt) ? (t = ch(
          t,
          Ue
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: pl !== null ? { id: Ge, overflow: Xe } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Mo(t), l.return = e, e.child = l, kt = e, zt = null)) : t = null, t === null) throw gl(e);
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
      } else if (Gt || On(t, e, l, !1), s = (l & t.childLanes) !== 0, Gt || s) {
        if (s = _t, s !== null && (n = Lr(s, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Vl(t, n), se(s, t, n), af;
        Vf(h) || ti(), e = sf(
          t,
          e,
          l
        );
      } else
        Vf(h) ? (e.flags |= 192, e.child = t.child, e = null) : (t = v.treeContext, zt = Me(
          h.nextSibling
        ), kt = e, dt = !0, vl = null, Ue = !1, t !== null && Ho(e, t), e = of(
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
    ), h.flags |= 2), h.return = e, n.return = e, n.sibling = h, e.child = n, Oa(null, n), n = e.child, h = t.child.memoizedState, h === null ? h = ff(l) : (a = h.cachePool, a !== null ? (v = qt._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Go(), h = {
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
  function td(t, e, l) {
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
  function ed(t, e, l) {
    var n = e.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var s = Bt.current, h = (s & 2) !== 0;
    if (h ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, X(Bt, s), Ft(t, e, n, l), n = dt ? da : 0, !h && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && td(t, l, e);
        else if (t.tag === 19)
          td(t, l, e);
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
  function x0(t, e, l) {
    switch (e.tag) {
      case 3:
        ee(e, e.stateNode.containerInfo), bl(e, qt, t.memoizedState.cache), Kl();
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
          return e.flags |= 128, jc(e), null;
        break;
      case 13:
        var n = e.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Al(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? Ps(t, e, l) : (Al(e), t = el(
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
            return ed(
              t,
              e,
              l
            );
          e.flags |= 128;
        }
        if (a = e.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), X(Bt, Bt.current), n) break;
        return null;
      case 22:
        return e.lanes = 0, Js(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        bl(e, qt, t.memoizedState.cache);
    }
    return el(t, e, l);
  }
  function ld(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Gt = !0;
      else {
        if (!hf(t, l) && (e.flags & 128) === 0)
          return Gt = !1, x0(
            t,
            e,
            l
          );
        Gt = (t.flags & 131072) !== 0;
      }
    else
      Gt = !1, dt && (e.flags & 1048576) !== 0 && wo(e, da, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var n = e.pendingProps;
          if (t = Fl(e.elementType), e.type = t, typeof t == "function")
            vc(t) ? (n = tn(t, n), e.tag = 1, e = Ws(
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
                e.tag = 11, e = Vs(
                  null,
                  e,
                  t,
                  n,
                  l
                );
                break t;
              } else if (a === $) {
                e.tag = 14, e = Zs(
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
        ), Ws(
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
          if (n = s.cache, bl(e, qt, n), n !== i.cache && _c(
            e,
            [qt],
            l,
            !0
          ), ba(), n = s.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = i, e.memoizedState = i, e.flags & 256) {
              e = Is(
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
              ), ha(a), e = Is(
                t,
                e,
                n,
                l
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, zt = Me(t.firstChild), kt = e, dt = !0, vl = null, Ue = !0, l = Jo(
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
        return Vu(t, e), t === null ? (l = hh(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = l : dt || (l = e.type, t = e.pendingProps, n = ci(
          ct.current
        ).createElement(l), n[Jt] = e, n[ue] = t, Wt(n, l, t), Zt(n), e.stateNode = n) : e.memoizedState = hh(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Wn(e), t === null && dt && (n = e.stateNode = oh(
          e.type,
          e.pendingProps,
          ct.current
        ), kt = e, Ue = !0, a = zt, Ml(e.type) ? (Kf = a, zt = Me(n.firstChild)) : zt = a), Ft(
          t,
          e,
          e.pendingProps.children,
          l
        ), Vu(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && dt && ((a = n = zt) && (n = ap(
          n,
          e.type,
          e.pendingProps,
          Ue
        ), n !== null ? (e.stateNode = n, kt = e, zt = Me(n.firstChild), Ue = !1, a = !0) : a = !1), a || gl(e)), Wn(e), a = e.type, i = e.pendingProps, s = t !== null ? t.memoizedProps : null, n = i.children, Gf(a, i) ? n = null : s !== null && Gf(a, s) && (e.flags |= 32), e.memoizedState !== null && (a = qc(
          t,
          e,
          b0,
          null,
          null,
          l
        ), Ya._currentValue = a), Vu(t, e), Ft(t, e, n, l), e.child;
      case 6:
        return t === null && dt && ((t = l = zt) && (l = up(
          l,
          e.pendingProps,
          Ue
        ), l !== null ? (e.stateNode = l, kt = e, zt = null, t = !0) : t = !1), t || gl(e)), null;
      case 13:
        return Ps(t, e, l);
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
        return Vs(
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
        return Zs(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 15:
        return Ks(
          t,
          e,
          e.type,
          e.pendingProps,
          l
        );
      case 19:
        return ed(t, e, l);
      case 31:
        return z0(t, e, l);
      case 22:
        return Js(
          t,
          e,
          l,
          e.pendingProps
        );
      case 24:
        return kl(e), n = $t(qt), t === null ? (a = Cc(), a === null && (a = _t, i = zc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), e.memoizedState = { parent: n, cache: a }, Dc(e), bl(e, qt, a)) : ((t.lanes & l) !== 0 && (Mc(t, e), Sa(e, null, null, l), ba()), a = t.memoizedState, i = e.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, e.memoizedState = a, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = a), bl(e, qt, n)) : (n = i.cache, bl(e, qt, n), n !== a.cache && _c(
          e,
          [qt],
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
        else if (Cd()) t.flags |= 8192;
        else
          throw Wl = Cu, Uc;
    } else t.flags &= -16777217;
  }
  function nd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !gh(e))
      if (Cd()) t.flags |= 8192;
      else
        throw Wl = Cu, Uc;
  }
  function Ku(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Hr() : 536870912, t.lanes |= e, jn |= e);
  }
  function _a(t, e) {
    if (!dt)
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
  function xt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, l = 0, n = 0;
    if (e)
      for (var a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = t, a = a.sibling;
    else
      for (a = t.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = t, a = a.sibling;
    return t.subtreeFlags |= n, t.childLanes = l, e;
  }
  function C0(t, e, l) {
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
        return xt(e), null;
      case 1:
        return xt(e), null;
      case 3:
        return l = e.stateNode, n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Ie(qt), Ht(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (Rn(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Ac())), xt(e), null;
      case 26:
        var a = e.type, i = e.memoizedState;
        return t === null ? (ll(e), i !== null ? (xt(e), nd(e, i)) : (xt(e), mf(
          e,
          a,
          null,
          n,
          l
        ))) : i ? i !== t.memoizedState ? (ll(e), xt(e), nd(e, i)) : (xt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== n && ll(e), xt(e), mf(
          e,
          a,
          t,
          n,
          l
        )), null;
      case 27:
        if (nu(e), l = ct.current, a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ll(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return xt(e), null;
          }
          t = K.current, Rn(e) ? Bo(e) : (t = oh(a, n, l), e.stateNode = t, ll(e));
        }
        return xt(e), null;
      case 5:
        if (nu(e), a = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== n && ll(e);
        else {
          if (!n) {
            if (e.stateNode === null)
              throw Error(r(166));
            return xt(e), null;
          }
          if (i = K.current, Rn(e))
            Bo(e);
          else {
            var s = ci(
              ct.current
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
        return xt(e), mf(
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
          if (t = ct.current, Rn(e)) {
            if (t = e.stateNode, l = e.memoizedProps, n = null, a = kt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            t[Jt] = e, t = !!(t.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || Pd(t.nodeValue, l)), t || gl(e, !0);
          } else
            t = ci(t).createTextNode(
              n
            ), t[Jt] = e, e.stateNode = t;
        }
        return xt(e), null;
      case 31:
        if (l = e.memoizedState, t === null || t.memoizedState !== null) {
          if (n = Rn(e), l !== null) {
            if (t === null) {
              if (!n) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[Jt] = e;
            } else
              Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xt(e), t = !1;
          } else
            l = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = !0;
          if (!t)
            return e.flags & 256 ? (Se(e), e) : (Se(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return xt(e), null;
      case 13:
        if (n = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (a = Rn(e), n !== null && n.dehydrated !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (a = e.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(r(317));
              a[Jt] = e;
            } else
              Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            xt(e), a = !1;
          } else
            a = Ac(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return e.flags & 256 ? (Se(e), e) : (Se(e), null);
        }
        return Se(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = n !== null, t = t !== null && t.memoizedState !== null, l && (n = e.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ku(e, e.updateQueue), xt(e), null);
      case 4:
        return Ht(), t === null && Bf(e.stateNode.containerInfo), xt(e), null;
      case 10:
        return Ie(e.type), xt(e), null;
      case 19:
        if (B(Bt), n = e.memoizedState, n === null) return xt(e), null;
        if (a = (e.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) _a(n, !1);
          else {
            if (wt !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (i = Nu(t), i !== null) {
                  for (e.flags |= 128, _a(n, !1), t = i.updateQueue, e.updateQueue = t, Ku(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; )
                    Do(l, t), l = l.sibling;
                  return X(
                    Bt,
                    Bt.current & 1 | 2
                  ), dt && Fe(e, n.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            n.tail !== null && me() > Wu && (e.flags |= 128, a = !0, _a(n, !1), e.lanes = 4194304);
          }
        else {
          if (!a)
            if (t = Nu(i), t !== null) {
              if (e.flags |= 128, a = !0, t = t.updateQueue, e.updateQueue = t, Ku(e, t), _a(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !dt)
                return xt(e), null;
            } else
              2 * me() - n.renderingStartTime > Wu && l !== 536870912 && (e.flags |= 128, a = !0, _a(n, !1), e.lanes = 4194304);
          n.isBackwards ? (i.sibling = e.child, e.child = i) : (t = n.last, t !== null ? t.sibling = i : e.child = i, n.last = i);
        }
        return n.tail !== null ? (t = n.tail, n.rendering = t, n.tail = t.sibling, n.renderingStartTime = me(), t.sibling = null, l = Bt.current, X(
          Bt,
          a ? l & 1 | 2 : l & 1
        ), dt && Fe(e, n.treeForkCount), t) : (xt(e), null);
      case 22:
      case 23:
        return Se(e), Bc(), n = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== n && (e.flags |= 8192) : n && (e.flags |= 8192), n ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (xt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : xt(e), l = e.updateQueue, l !== null && Ku(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== l && (e.flags |= 2048), t !== null && B($l), null;
      case 24:
        return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(qt), xt(e), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function U0(t, e) {
    switch (Ec(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Ie(qt), Ht(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
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
        return B(Bt), null;
      case 4:
        return Ht(), null;
      case 10:
        return Ie(e.type), null;
      case 22:
      case 23:
        return Se(e), Bc(), t !== null && B($l), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Ie(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ad(t, e) {
    switch (Ec(e), e.tag) {
      case 3:
        Ie(qt), Ht();
        break;
      case 26:
      case 27:
      case 5:
        nu(e);
        break;
      case 4:
        Ht();
        break;
      case 31:
        e.memoizedState !== null && Se(e);
        break;
      case 13:
        Se(e);
        break;
      case 19:
        B(Bt);
        break;
      case 10:
        Ie(e.type);
        break;
      case 22:
      case 23:
        Se(e), Bc(), t !== null && B($l);
        break;
      case 24:
        Ie(qt);
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
      Et(e, e.return, h);
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
              } catch (N) {
                Et(
                  a,
                  v,
                  N
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (N) {
      Et(e, e.return, N);
    }
  }
  function ud(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        $o(e, l);
      } catch (n) {
        Et(t, t.return, n);
      }
    }
  }
  function id(t, e, l) {
    l.props = tn(
      t.type,
      t.memoizedProps
    ), l.state = t.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Et(t, e, n);
    }
  }
  function xa(t, e) {
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
      Et(t, e, a);
    }
  }
  function Qe(t, e) {
    var l = t.ref, n = t.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Et(t, e, a);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Et(t, e, a);
        }
      else l.current = null;
  }
  function cd(t) {
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
      Et(t, t.return, a);
    }
  }
  function yf(t, e, l) {
    try {
      var n = t.stateNode;
      I0(n, t.type, l, e), n[ue] = e;
    } catch (a) {
      Et(t, t.return, a);
    }
  }
  function fd(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ml(t.type) || t.tag === 4;
  }
  function pf(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || fd(t.return)) return null;
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
  function rd(t) {
    var e = t.stateNode, l = t.memoizedProps;
    try {
      for (var n = t.type, a = e.attributes; a.length; )
        e.removeAttributeNode(a[0]);
      Wt(e, n, l), e[Jt] = t, e[ue] = l;
    } catch (i) {
      Et(t, t.return, i);
    }
  }
  var nl = !1, Xt = !1, gf = !1, od = typeof WeakSet == "function" ? WeakSet : Set, Kt = null;
  function D0(t, e) {
    if (t = t.containerInfo, qf = mi, t = To(t), oc(t)) {
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
            var s = 0, h = -1, v = -1, O = 0, N = 0, H = t, _ = null;
            e: for (; ; ) {
              for (var C; H !== l || a !== 0 && H.nodeType !== 3 || (h = s + a), H !== i || n !== 0 && H.nodeType !== 3 || (v = s + n), H.nodeType === 3 && (s += H.nodeValue.length), (C = H.firstChild) !== null; )
                _ = H, H = C;
              for (; ; ) {
                if (H === t) break e;
                if (_ === l && ++O === a && (h = s), _ === i && ++N === n && (v = s), (C = H.nextSibling) !== null) break;
                H = _, _ = H.parentNode;
              }
              H = C;
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
                } catch (I) {
                  Et(
                    l,
                    l.return,
                    I
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
  function sd(t, e, l) {
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
              Et(l, l.return, s);
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
              Et(
                l,
                l.return,
                s
              );
            }
          }
        n & 64 && ud(l), n & 512 && xa(l, l.return);
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
            $o(t, e);
          } catch (s) {
            Et(l, l.return, s);
          }
        }
        break;
      case 27:
        e === null && n & 4 && rd(l);
      case 26:
      case 5:
        ul(t, l), e === null && n & 4 && cd(l), n & 512 && xa(l, l.return);
        break;
      case 12:
        ul(t, l);
        break;
      case 31:
        ul(t, l), n & 4 && md(t, l);
        break;
      case 13:
        ul(t, l), n & 4 && yd(t, l), n & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = Y0.bind(
          null,
          l
        ), ip(t, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || nl, !n) {
          e = e !== null && e.memoizedState !== null || Xt, a = nl;
          var i = Xt;
          nl = n, (Xt = e) && !i ? il(
            t,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(t, l), nl = a, Xt = i;
        }
        break;
      case 30:
        break;
      default:
        ul(t, l);
    }
  }
  function dd(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, dd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Ji(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Ct = null, ce = !1;
  function al(t, e, l) {
    for (l = l.child; l !== null; )
      hd(t, e, l), l = l.sibling;
  }
  function hd(t, e, l) {
    if (ye && typeof ye.onCommitFiberUnmount == "function")
      try {
        ye.onCommitFiberUnmount(In, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Xt || Qe(l, e), al(
          t,
          e,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Xt || Qe(l, e);
        var n = Ct, a = ce;
        Ml(l.type) && (Ct = l.stateNode, ce = !1), al(
          t,
          e,
          l
        ), ja(l.stateNode), Ct = n, ce = a;
        break;
      case 5:
        Xt || Qe(l, e);
      case 6:
        if (n = Ct, a = ce, Ct = null, al(
          t,
          e,
          l
        ), Ct = n, ce = a, Ct !== null)
          if (ce)
            try {
              (Ct.nodeType === 9 ? Ct.body : Ct.nodeName === "HTML" ? Ct.ownerDocument.body : Ct).removeChild(l.stateNode);
            } catch (i) {
              Et(
                l,
                e,
                i
              );
            }
          else
            try {
              Ct.removeChild(l.stateNode);
            } catch (i) {
              Et(
                l,
                e,
                i
              );
            }
        break;
      case 18:
        Ct !== null && (ce ? (t = Ct, uh(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          l.stateNode
        ), Zn(t)) : uh(Ct, l.stateNode));
        break;
      case 4:
        n = Ct, a = ce, Ct = l.stateNode.containerInfo, ce = !0, al(
          t,
          e,
          l
        ), Ct = n, ce = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, e), Xt || Ol(4, l, e), al(
          t,
          e,
          l
        );
        break;
      case 1:
        Xt || (Qe(l, e), n = l.stateNode, typeof n.componentWillUnmount == "function" && id(
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
        Xt = (n = Xt) || l.memoizedState !== null, al(
          t,
          e,
          l
        ), Xt = n;
        break;
      default:
        al(
          t,
          e,
          l
        );
    }
  }
  function md(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Zn(t);
      } catch (l) {
        Et(e, e.return, l);
      }
    }
  }
  function yd(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Zn(t);
      } catch (l) {
        Et(e, e.return, l);
      }
  }
  function M0(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new od()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new od()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function ku(t, e) {
    var l = M0(t);
    e.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = G0.bind(null, t, n);
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
                Ct = h.stateNode, ce = !1;
                break t;
              }
              break;
            case 5:
              Ct = h.stateNode, ce = !1;
              break t;
            case 3:
            case 4:
              Ct = h.stateNode.containerInfo, ce = !0;
              break t;
          }
          h = h.return;
        }
        if (Ct === null) throw Error(r(160));
        hd(i, s, a), Ct = null, ce = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        pd(e, t), e = e.sibling;
  }
  var Be = null;
  function pd(t, e) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        fe(e, t), re(t), n & 4 && (Ol(3, t, t.return), za(3, t), Ol(5, t, t.return));
        break;
      case 1:
        fe(e, t), re(t), n & 512 && (Xt || l === null || Qe(l, l.return)), n & 64 && nl && (t = t.updateQueue, t !== null && (n = t.callbacks, n !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Be;
        if (fe(e, t), re(t), n & 512 && (Xt || l === null || Qe(l, l.return)), n & 4) {
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
                      var s = ph(
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
                      if (s = ph(
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
                vh(
                  a,
                  t.type,
                  t.stateNode
                );
            else
              t.stateNode = yh(
                a,
                n,
                t.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? vh(
              a,
              t.type,
              t.stateNode
            ) : yh(
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
        fe(e, t), re(t), n & 512 && (Xt || l === null || Qe(l, l.return)), l !== null && n & 4 && yf(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (fe(e, t), re(t), n & 512 && (Xt || l === null || Qe(l, l.return)), t.flags & 32) {
          a = t.stateNode;
          try {
            mn(a, "");
          } catch (Z) {
            Et(t, t.return, Z);
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
            Et(t, t.return, Z);
          }
        }
        break;
      case 3:
        if (oi = null, a = Be, Be = fi(e.containerInfo), fe(e, t), Be = a, re(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zn(e.containerInfo);
          } catch (Z) {
            Et(t, t.return, Z);
          }
        gf && (gf = !1, vd(t));
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
        var v = l !== null && l.memoizedState !== null, O = nl, N = Xt;
        if (nl = O || a, Xt = N || v, fe(e, t), Xt = N, nl = O, re(t), n & 8192)
          t: for (e = t.stateNode, e._visibility = a ? e._visibility & -2 : e._visibility | 1, a && (l === null || v || nl || Xt || en(t)), l = null, e = t; ; ) {
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
                  Et(v, v.return, Z);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                v = e;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (Z) {
                  Et(v, v.return, Z);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                v = e;
                try {
                  var C = v.stateNode;
                  a ? ih(C, !0) : ih(v.stateNode, !1);
                } catch (Z) {
                  Et(v, v.return, Z);
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
          if (fd(n)) {
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
      } catch (N) {
        Et(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function vd(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        vd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
  }
  function ul(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        sd(t, e.alternate, e), e = e.sibling;
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
          typeof l.componentWillUnmount == "function" && id(
            e,
            e.return,
            l
          ), en(e);
          break;
        case 27:
          ja(e.stateNode);
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
              Et(n, n.return, O);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var h = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  ko(v[a], h);
            } catch (O) {
              Et(n, n.return, O);
            }
          }
          l && s & 64 && ud(i), xa(i, i.return);
          break;
        case 27:
          rd(i);
        case 26:
        case 5:
          il(
            a,
            i,
            l
          ), l && n === null && s & 4 && cd(i), xa(i, i.return);
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
          ), l && s & 4 && md(a, i);
          break;
        case 13:
          il(
            a,
            i,
            l
          ), l && s & 4 && yd(a, i);
          break;
        case 22:
          i.memoizedState === null && il(
            a,
            i,
            l
          ), xa(i, i.return);
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
  function je(t, e, l, n) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        gd(
          t,
          e,
          l,
          n
        ), e = e.sibling;
  }
  function gd(t, e, l, n) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        je(
          t,
          e,
          l,
          n
        ), a & 2048 && za(9, e);
        break;
      case 1:
        je(
          t,
          e,
          l,
          n
        );
        break;
      case 3:
        je(
          t,
          e,
          l,
          n
        ), a & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && ma(t)));
        break;
      case 12:
        if (a & 2048) {
          je(
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
            Et(e, e.return, v);
          }
        } else
          je(
            t,
            e,
            l,
            n
          );
        break;
      case 31:
        je(
          t,
          e,
          l,
          n
        );
        break;
      case 13:
        je(
          t,
          e,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = e.stateNode, s = e.alternate, e.memoizedState !== null ? i._visibility & 2 ? je(
          t,
          e,
          l,
          n
        ) : Ca(t, e) : i._visibility & 2 ? je(
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
        je(
          t,
          e,
          l,
          n
        ), a & 2048 && Sf(e.alternate, e);
        break;
      default:
        je(
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
          var N = s.stateNode;
          s.memoizedState !== null ? N._visibility & 2 ? wn(
            i,
            s,
            h,
            v,
            a
          ) : Ca(
            i,
            s
          ) : (N._visibility |= 2, wn(
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
  function Ca(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t, n = e, a = n.flags;
        switch (n.tag) {
          case 22:
            Ca(l, n), a & 2048 && bf(
              n.alternate,
              n
            );
            break;
          case 24:
            Ca(l, n), a & 2048 && Sf(n.alternate, n);
            break;
          default:
            Ca(l, n);
        }
        e = e.sibling;
      }
  }
  var Ua = 8192;
  function Hn(t, e, l) {
    if (t.subtreeFlags & Ua)
      for (t = t.child; t !== null; )
        bd(
          t,
          e,
          l
        ), t = t.sibling;
  }
  function bd(t, e, l) {
    switch (t.tag) {
      case 26:
        Hn(
          t,
          e,
          l
        ), t.flags & Ua && t.memoizedState !== null && gp(
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
  function Sd(t) {
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
          Kt = n, Td(
            n,
            t
          );
        }
      Sd(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ed(t), t = t.sibling;
  }
  function Ed(t) {
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
          Kt = n, Td(
            n,
            t
          );
        }
      Sd(t);
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
  function Td(t, e) {
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
          if (dd(n), n === l) {
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
  var N0 = {
    getCacheForType: function(t) {
      var e = $t(qt), l = e.data.get(t);
      return l === void 0 && (l = t(), e.data.set(t, l)), l;
    },
    cacheSignal: function() {
      return $t(qt).controller.signal;
    }
  }, w0 = typeof WeakMap == "function" ? WeakMap : Map, gt = 0, _t = null, ft = null, ot = 0, St = 0, Ee = null, _l = !1, Bn = !1, Ef = !1, cl = 0, wt = 0, zl = 0, ln = 0, Tf = 0, Te = 0, jn = 0, Ma = null, oe = null, Af = !1, Fu = 0, Ad = 0, Wu = 1 / 0, Iu = null, xl = null, Qt = 0, Cl = null, Ln = null, fl = 0, Rf = 0, Of = null, Rd = null, Na = 0, _f = null;
  function Ae() {
    return (gt & 2) !== 0 && ot !== 0 ? ot & -ot : L.T !== null ? Mf() : qr();
  }
  function Od() {
    if (Te === 0)
      if ((ot & 536870912) === 0 || dt) {
        var t = iu;
        iu <<= 1, (iu & 3932160) === 0 && (iu = 262144), Te = t;
      } else Te = 536870912;
    return t = be.current, t !== null && (t.flags |= 32), Te;
  }
  function se(t, e, l) {
    (t === _t && (St === 2 || St === 9) || t.cancelPendingCommit !== null) && (qn(t, 0), Ul(
      t,
      ot,
      Te,
      !1
    )), ta(t, l), ((gt & 2) === 0 || t !== _t) && (t === _t && ((gt & 2) === 0 && (ln |= l), wt === 4 && Ul(
      t,
      ot,
      Te,
      !1
    )), Ve(t));
  }
  function _d(t, e, l) {
    if ((gt & 6) !== 0) throw Error(r(327));
    var n = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Pn(t, e), a = n ? j0(t, e) : xf(t, e, !0), i = n;
    do {
      if (a === 0) {
        Bn && !n && Ul(t, e, 0, !1);
        break;
      } else {
        if (l = t.current.alternate, i && !H0(l)) {
          a = xf(t, e, !1), i = !1;
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
              if (v && (qn(h, s).flags |= 256), s = xf(
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
            fl = e, n.timeoutHandle = nh(
              zd.bind(
                null,
                n,
                l,
                oe,
                Iu,
                Af,
                e,
                Te,
                ln,
                jn,
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
          zd(
            n,
            l,
            oe,
            Iu,
            Af,
            e,
            Te,
            ln,
            jn,
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
  function zd(t, e, l, n, a, i, s, h, v, O, N, H, _, C) {
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
      }, bd(
        e,
        i,
        H
      );
      var Z = (i & 62914560) === i ? Fu - me() : (i & 4194048) === i ? Ad - me() : 0;
      if (Z = bp(
        H,
        Z
      ), Z !== null) {
        fl = i, t.cancelPendingCommit = Z(
          Hd.bind(
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
            N,
            H,
            null,
            _,
            C
          )
        ), Ul(t, i, s, !O);
        return;
      }
    }
    Hd(
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
  function H0(t) {
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
    l !== 0 && Br(t, l, e);
  }
  function Pu() {
    return (gt & 6) === 0 ? (wa(0), !1) : !0;
  }
  function zf() {
    if (ft !== null) {
      if (St === 0)
        var t = ft.return;
      else
        t = ft, We = Jl = null, Xc(t), Cn = null, pa = 0, t = ft;
      for (; t !== null; )
        ad(t.alternate, t), t = t.return;
      ft = null;
    }
  }
  function qn(t, e) {
    var l = t.timeoutHandle;
    l !== -1 && (t.timeoutHandle = -1, ep(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), fl = 0, zf(), _t = t, ft = l = $e(t.current, null), ot = e, St = 0, Ee = null, _l = !1, Bn = Pn(t, e), Ef = !1, jn = Te = Tf = ln = zl = wt = 0, oe = Ma = null, Af = !1, (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - pe(n), i = 1 << a;
        e |= t[a], n &= ~i;
      }
    return cl = e, Su(), l;
  }
  function xd(t, e) {
    lt = null, L.H = Ra, e === xn || e === xu ? (e = Vo(), St = 3) : e === Uc ? (e = Vo(), St = 4) : St = e === af ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ee = e, ft === null && (wt = 1, Xu(
      t,
      ze(e, t.current)
    ));
  }
  function Cd() {
    var t = be.current;
    return t === null ? !0 : (ot & 4194048) === ot ? De === null : (ot & 62914560) === ot || (ot & 536870912) !== 0 ? t === De : !1;
  }
  function Ud() {
    var t = L.H;
    return L.H = Ra, t === null ? Ra : t;
  }
  function Dd() {
    var t = L.A;
    return L.A = N0, t;
  }
  function ti() {
    wt = 4, _l || (ot & 4194048) !== ot && be.current !== null || (Bn = !0), (zl & 134217727) === 0 && (ln & 134217727) === 0 || _t === null || Ul(
      _t,
      ot,
      Te,
      !1
    );
  }
  function xf(t, e, l) {
    var n = gt;
    gt |= 2;
    var a = Ud(), i = Dd();
    (_t !== t || ot !== e) && (Iu = null, qn(t, e)), e = !1;
    var s = wt;
    t: do
      try {
        if (St !== 0 && ft !== null) {
          var h = ft, v = Ee;
          switch (St) {
            case 8:
              zf(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              be.current === null && (e = !0);
              var O = St;
              if (St = 0, Ee = null, Yn(t, h, v, O), l && Bn) {
                s = 0;
                break t;
              }
              break;
            default:
              O = St, St = 0, Ee = null, Yn(t, h, v, O);
          }
        }
        B0(), s = wt;
        break;
      } catch (N) {
        xd(t, N);
      }
    while (!0);
    return e && t.shellSuspendCounter++, We = Jl = null, gt = n, L.H = a, L.A = i, ft === null && (_t = null, ot = 0, Su()), s;
  }
  function B0() {
    for (; ft !== null; ) Md(ft);
  }
  function j0(t, e) {
    var l = gt;
    gt |= 2;
    var n = Ud(), a = Dd();
    _t !== t || ot !== e ? (Iu = null, Wu = me() + 500, qn(t, e)) : Bn = Pn(
      t,
      e
    );
    t: do
      try {
        if (St !== 0 && ft !== null) {
          e = ft;
          var i = Ee;
          e: switch (St) {
            case 1:
              St = 0, Ee = null, Yn(t, e, i, 1);
              break;
            case 2:
            case 9:
              if (Xo(i)) {
                St = 0, Ee = null, Nd(e);
                break;
              }
              e = function() {
                St !== 2 && St !== 9 || _t !== t || (St = 7), Ve(t);
              }, i.then(e, e);
              break t;
            case 3:
              St = 7;
              break t;
            case 4:
              St = 5;
              break t;
            case 7:
              Xo(i) ? (St = 0, Ee = null, Nd(e)) : (St = 0, Ee = null, Yn(t, e, i, 7));
              break;
            case 5:
              var s = null;
              switch (ft.tag) {
                case 26:
                  s = ft.memoizedState;
                case 5:
                case 27:
                  var h = ft;
                  if (s ? gh(s) : h.stateNode.complete) {
                    St = 0, Ee = null;
                    var v = h.sibling;
                    if (v !== null) ft = v;
                    else {
                      var O = h.return;
                      O !== null ? (ft = O, ei(O)) : ft = null;
                    }
                    break e;
                  }
              }
              St = 0, Ee = null, Yn(t, e, i, 5);
              break;
            case 6:
              St = 0, Ee = null, Yn(t, e, i, 6);
              break;
            case 8:
              zf(), wt = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        L0();
        break;
      } catch (N) {
        xd(t, N);
      }
    while (!0);
    return We = Jl = null, L.H = n, L.A = a, gt = l, ft !== null ? 0 : (_t = null, ot = 0, Su(), wt);
  }
  function L0() {
    for (; ft !== null && !cy(); )
      Md(ft);
  }
  function Md(t) {
    var e = ld(t.alternate, t, cl);
    t.memoizedProps = t.pendingProps, e === null ? ei(t) : ft = e;
  }
  function Nd(t) {
    var e = t, l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Fs(
          l,
          e,
          e.pendingProps,
          e.type,
          void 0,
          ot
        );
        break;
      case 11:
        e = Fs(
          l,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          ot
        );
        break;
      case 5:
        Xc(e);
      default:
        ad(l, e), e = ft = Do(e, cl), e = ld(l, e, cl);
    }
    t.memoizedProps = t.pendingProps, e === null ? ei(t) : ft = e;
  }
  function Yn(t, e, l, n) {
    We = Jl = null, Xc(e), Cn = null, pa = 0;
    var a = e.return;
    try {
      if (_0(
        t,
        a,
        e,
        l,
        ot
      )) {
        wt = 1, Xu(
          t,
          ze(l, t.current)
        ), ft = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw ft = a, i;
      wt = 1, Xu(
        t,
        ze(l, t.current)
      ), ft = null;
      return;
    }
    e.flags & 32768 ? (dt || n === 1 ? t = !0 : Bn || (ot & 536870912) !== 0 ? t = !1 : (_l = t = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = be.current, n !== null && n.tag === 13 && (n.flags |= 16384))), wd(e, t)) : ei(e);
  }
  function ei(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        wd(
          e,
          _l
        );
        return;
      }
      t = e.return;
      var l = C0(
        e.alternate,
        e,
        cl
      );
      if (l !== null) {
        ft = l;
        return;
      }
      if (e = e.sibling, e !== null) {
        ft = e;
        return;
      }
      ft = e = t;
    } while (e !== null);
    wt === 0 && (wt = 5);
  }
  function wd(t, e) {
    do {
      var l = U0(t.alternate, t);
      if (l !== null) {
        l.flags &= 32767, ft = l;
        return;
      }
      if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
        ft = t;
        return;
      }
      ft = t = l;
    } while (t !== null);
    wt = 6, ft = null;
  }
  function Hd(t, e, l, n, a, i, s, h, v) {
    t.cancelPendingCommit = null;
    do
      li();
    while (Qt !== 0);
    if ((gt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (i = e.lanes | e.childLanes, i |= yc, vy(
        t,
        l,
        i,
        s,
        h,
        v
      ), t === _t && (ft = _t = null, ot = 0), Ln = e, Cl = t, fl = l, Rf = i, Of = a, Rd = n, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, X0(au, function() {
        return Yd(), null;
      })) : (t.callbackNode = null, t.callbackPriority = 0), n = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || n) {
        n = L.T, L.T = null, a = G.p, G.p = 2, s = gt, gt |= 4;
        try {
          D0(t, e, l);
        } finally {
          gt = s, G.p = a, L.T = n;
        }
      }
      Qt = 1, Bd(), jd(), Ld();
    }
  }
  function Bd() {
    if (Qt === 1) {
      Qt = 0;
      var t = Cl, e = Ln, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = L.T, L.T = null;
        var n = G.p;
        G.p = 2;
        var a = gt;
        gt |= 4;
        try {
          pd(e, t);
          var i = Yf, s = To(t.containerInfo), h = i.focusedElem, v = i.selectionRange;
          if (s !== h && h && h.ownerDocument && Eo(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && oc(h)) {
              var O = v.start, N = v.end;
              if (N === void 0 && (N = O), "selectionStart" in h)
                h.selectionStart = O, h.selectionEnd = Math.min(
                  N,
                  h.value.length
                );
              else {
                var H = h.ownerDocument || document, _ = H && H.defaultView || window;
                if (_.getSelection) {
                  var C = _.getSelection(), Z = h.textContent.length, I = Math.min(v.start, Z), Rt = v.end === void 0 ? I : Math.min(v.end, Z);
                  !C.extend && I > Rt && (s = Rt, Rt = I, I = s);
                  var T = So(
                    h,
                    I
                  ), S = So(
                    h,
                    Rt
                  );
                  if (T && S && (C.rangeCount !== 1 || C.anchorNode !== T.node || C.anchorOffset !== T.offset || C.focusNode !== S.node || C.focusOffset !== S.offset)) {
                    var R = H.createRange();
                    R.setStart(T.node, T.offset), C.removeAllRanges(), I > Rt ? (C.addRange(R), C.extend(S.node, S.offset)) : (R.setEnd(S.node, S.offset), C.addRange(R));
                  }
                }
              }
            }
            for (H = [], C = h; C = C.parentNode; )
              C.nodeType === 1 && H.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < H.length; h++) {
              var w = H[h];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          mi = !!qf, Yf = qf = null;
        } finally {
          gt = a, G.p = n, L.T = l;
        }
      }
      t.current = e, Qt = 2;
    }
  }
  function jd() {
    if (Qt === 2) {
      Qt = 0;
      var t = Cl, e = Ln, l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        l = L.T, L.T = null;
        var n = G.p;
        G.p = 2;
        var a = gt;
        gt |= 4;
        try {
          sd(t, e.alternate, e);
        } finally {
          gt = a, G.p = n, L.T = l;
        }
      }
      Qt = 3;
    }
  }
  function Ld() {
    if (Qt === 4 || Qt === 3) {
      Qt = 0, fy();
      var t = Cl, e = Ln, l = fl, n = Rd;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qt = 5 : (Qt = 0, Ln = Cl = null, qd(t, t.pendingLanes));
      var a = t.pendingLanes;
      if (a === 0 && (xl = null), Zi(l), e = e.stateNode, ye && typeof ye.onCommitFiberRoot == "function")
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
        e = L.T, a = G.p, G.p = 2, L.T = null;
        try {
          for (var i = t.onRecoverableError, s = 0; s < n.length; s++) {
            var h = n[s];
            i(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          L.T = e, G.p = a;
        }
      }
      (fl & 3) !== 0 && li(), Ve(t), a = t.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? t === _f ? Na++ : (Na = 0, _f = t) : Na = 0, wa(0);
    }
  }
  function qd(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, ma(e)));
  }
  function li() {
    return Bd(), jd(), Ld(), Yd();
  }
  function Yd() {
    if (Qt !== 5) return !1;
    var t = Cl, e = Rf;
    Rf = 0;
    var l = Zi(fl), n = L.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, L.T = null, l = Of, Of = null;
      var i = Cl, s = fl;
      if (Qt = 0, Ln = Cl = null, fl = 0, (gt & 6) !== 0) throw Error(r(331));
      var h = gt;
      if (gt |= 4, Ed(i.current), gd(
        i,
        i.current,
        s,
        l
      ), gt = h, wa(0, !1), ye && typeof ye.onPostCommitFiberRoot == "function")
        try {
          ye.onPostCommitFiberRoot(In, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, L.T = n, qd(t, e);
    }
  }
  function Gd(t, e, l) {
    e = ze(l, e), e = nf(t.stateNode, e, 2), t = Tl(t, e, 2), t !== null && (ta(t, 2), Ve(t));
  }
  function Et(t, e, l) {
    if (t.tag === 3)
      Gd(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Gd(
            e,
            t,
            l
          );
          break;
        } else if (e.tag === 1) {
          var n = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (xl === null || !xl.has(n))) {
            t = ze(l, t), l = Xs(2), n = Tl(e, l, 2), n !== null && (Qs(
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
  function Cf(t, e, l) {
    var n = t.pingCache;
    if (n === null) {
      n = t.pingCache = new w0();
      var a = /* @__PURE__ */ new Set();
      n.set(e, a);
    } else
      a = n.get(e), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(e, a));
    a.has(l) || (Ef = !0, a.add(l), t = q0.bind(null, t, e, l), e.then(t, t));
  }
  function q0(t, e, l) {
    var n = t.pingCache;
    n !== null && n.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, _t === t && (ot & l) === l && (wt === 4 || wt === 3 && (ot & 62914560) === ot && 300 > me() - Fu ? (gt & 2) === 0 && qn(t, 0) : Tf |= l, jn === ot && (jn = 0)), Ve(t);
  }
  function Xd(t, e) {
    e === 0 && (e = Hr()), t = Vl(t, e), t !== null && (ta(t, e), Ve(t));
  }
  function Y0(t) {
    var e = t.memoizedState, l = 0;
    e !== null && (l = e.retryLane), Xd(t, l);
  }
  function G0(t, e) {
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
    n !== null && n.delete(e), Xd(t, l);
  }
  function X0(t, e) {
    return Gi(t, e);
  }
  var ni = null, Gn = null, Uf = !1, ai = !1, Df = !1, Dl = 0;
  function Ve(t) {
    t !== Gn && t.next === null && (Gn === null ? ni = Gn = t : Gn = Gn.next = t), ai = !0, Uf || (Uf = !0, V0());
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
            i !== 0 && (l = !0, Kd(n, i));
          } else
            i = ot, i = fu(
              n,
              n === _t ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || Pn(n, i) || (l = !0, Kd(n, i));
          n = n.next;
        }
      while (l);
      Df = !1;
    }
  }
  function Q0() {
    Qd();
  }
  function Qd() {
    ai = Uf = !1;
    var t = 0;
    Dl !== 0 && tp() && (t = Dl);
    for (var e = me(), l = null, n = ni; n !== null; ) {
      var a = n.next, i = Vd(n, e);
      i === 0 ? (n.next = null, l === null ? ni = a : l.next = a, a === null && (Gn = l)) : (l = n, (t !== 0 || (i & 3) !== 0) && (ai = !0)), n = a;
    }
    Qt !== 0 && Qt !== 5 || wa(t), Dl !== 0 && (Dl = 0);
  }
  function Vd(t, e) {
    for (var l = t.suspendedLanes, n = t.pingedLanes, a = t.expirationTimes, i = t.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - pe(i), h = 1 << s, v = a[s];
      v === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[s] = py(h, e)) : v <= e && (t.expiredLanes |= h), i &= ~h;
    }
    if (e = _t, l = ot, l = fu(
      t,
      t === e ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n = t.callbackNode, l === 0 || t === e && (St === 2 || St === 9) || t.cancelPendingCommit !== null)
      return n !== null && n !== null && Xi(n), t.callbackNode = null, t.callbackPriority = 0;
    if ((l & 3) === 0 || Pn(t, l)) {
      if (e = l & -l, e === t.callbackPriority) return e;
      switch (n !== null && Xi(n), Zi(l)) {
        case 2:
        case 8:
          l = Nr;
          break;
        case 32:
          l = au;
          break;
        case 268435456:
          l = wr;
          break;
        default:
          l = au;
      }
      return n = Zd.bind(null, t), l = Gi(l, n), t.callbackPriority = e, t.callbackNode = l, e;
    }
    return n !== null && n !== null && Xi(n), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Zd(t, e) {
    if (Qt !== 0 && Qt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var l = t.callbackNode;
    if (li() && t.callbackNode !== l)
      return null;
    var n = ot;
    return n = fu(
      t,
      t === _t ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), n === 0 ? null : (_d(t, n, e), Vd(t, me()), t.callbackNode != null && t.callbackNode === l ? Zd.bind(null, t) : null);
  }
  function Kd(t, e) {
    if (li()) return null;
    _d(t, e, !0);
  }
  function V0() {
    lp(function() {
      (gt & 6) !== 0 ? Gi(
        Mr,
        Q0
      ) : Qd();
    });
  }
  function Mf() {
    if (Dl === 0) {
      var t = _n;
      t === 0 && (t = uu, uu <<= 1, (uu & 261888) === 0 && (uu = 256)), Dl = t;
    }
    return Dl;
  }
  function Jd(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : du("" + t);
  }
  function kd(t, e) {
    var l = e.ownerDocument.createElement("input");
    return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
  }
  function Z0(t, e, l, n, a) {
    if (e === "submit" && l && l.stateNode === a) {
      var i = Jd(
        (a[ue] || null).action
      ), s = n.submitter;
      s && (e = (e = s[ue] || null) ? Jd(e.formAction) : s.getAttribute("formAction"), e !== null && (i = e, s = null));
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
                  var v = s ? kd(a, s) : new FormData(a);
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
                typeof i == "function" && (h.preventDefault(), v = s ? kd(a, s) : new FormData(a), Wc(
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
    var wf = mc[Nf], K0 = wf.toLowerCase(), J0 = wf[0].toUpperCase() + wf.slice(1);
    He(
      K0,
      "on" + J0
    );
  }
  He(Oo, "onAnimationEnd"), He(_o, "onAnimationIteration"), He(zo, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(r0, "onTransitionRun"), He(o0, "onTransitionStart"), He(s0, "onTransitionCancel"), He(xo, "onTransitionEnd"), dn("onMouseEnter", ["mouseout", "mouseover"]), dn("onMouseLeave", ["mouseout", "mouseover"]), dn("onPointerEnter", ["pointerout", "pointerover"]), dn("onPointerLeave", ["pointerout", "pointerover"]), Yl(
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
  ), k0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha)
  );
  function $d(t, e) {
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
            } catch (N) {
              bu(N);
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
            } catch (N) {
              bu(N);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function rt(t, e) {
    var l = e[Ki];
    l === void 0 && (l = e[Ki] = /* @__PURE__ */ new Set());
    var n = t + "__bubble";
    l.has(n) || (Fd(e, t, 2, !1), l.add(n));
  }
  function Hf(t, e, l) {
    var n = 0;
    e && (n |= 4), Fd(
      l,
      t,
      n,
      e
    );
  }
  var ui = "_reactListening" + Math.random().toString(36).slice(2);
  function Bf(t) {
    if (!t[ui]) {
      t[ui] = !0, Xr.forEach(function(l) {
        l !== "selectionchange" && (k0.has(l) || Hf(l, !1, t), Hf(l, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ui] || (e[ui] = !0, Hf("selectionchange", !1, e));
    }
  }
  function Fd(t, e, l, n) {
    switch (Oh(e)) {
      case 2:
        var a = Tp;
        break;
      case 8:
        a = Ap;
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
  function jf(t, e, l, n, a) {
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
    to(function() {
      var O = i, N = Pi(l), H = [];
      t: {
        var _ = Co.get(t);
        if (_ !== void 0) {
          var C = pu, Z = t;
          switch (t) {
            case "keypress":
              if (mu(l) === 0) break t;
            case "keydown":
            case "keyup":
              C = Gy;
              break;
            case "focusin":
              Z = "focus", C = uc;
              break;
            case "focusout":
              Z = "blur", C = uc;
              break;
            case "beforeblur":
            case "afterblur":
              C = uc;
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
              C = no;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Cy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Vy;
              break;
            case Oo:
            case _o:
            case zo:
              C = My;
              break;
            case xo:
              C = Ky;
              break;
            case "scroll":
            case "scrollend":
              C = zy;
              break;
            case "wheel":
              C = ky;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = wy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = uo;
              break;
            case "toggle":
            case "beforetoggle":
              C = Fy;
          }
          var I = (e & 4) !== 0, Rt = !I && (t === "scroll" || t === "scrollend"), T = I ? _ !== null ? _ + "Capture" : null : _;
          I = [];
          for (var S = O, R; S !== null; ) {
            var w = S;
            if (R = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || R === null || T === null || (w = na(S, T), w != null && I.push(
              Ba(S, w, R)
            )), Rt) break;
            S = S.return;
          }
          0 < I.length && (_ = new C(
            _,
            Z,
            null,
            l,
            N
          ), H.push({ event: _, listeners: I }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (_ = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", _ && l !== Ii && (Z = l.relatedTarget || l.fromElement) && (rn(Z) || Z[fn]))
            break t;
          if ((C || _) && (_ = N.window === N ? N : (_ = N.ownerDocument) ? _.defaultView || _.parentWindow : window, C ? (Z = l.relatedTarget || l.toElement, C = O, Z = Z ? rn(Z) : null, Z !== null && (Rt = m(Z), I = Z.tag, Z !== Rt || I !== 5 && I !== 27 && I !== 6) && (Z = null)) : (C = null, Z = O), C !== Z)) {
            if (I = no, w = "onMouseLeave", T = "onMouseEnter", S = "mouse", (t === "pointerout" || t === "pointerover") && (I = uo, w = "onPointerLeave", T = "onPointerEnter", S = "pointer"), Rt = C == null ? _ : la(C), R = Z == null ? _ : la(Z), _ = new I(
              w,
              S + "leave",
              C,
              l,
              N
            ), _.target = Rt, _.relatedTarget = R, w = null, rn(N) === O && (I = new I(
              T,
              S + "enter",
              Z,
              l,
              N
            ), I.target = R, I.relatedTarget = Rt, w = I), Rt = w, C && Z)
              e: {
                for (I = $0, T = C, S = Z, R = 0, w = T; w; w = I(w))
                  R++;
                w = 0;
                for (var F = S; F; F = I(F))
                  w++;
                for (; 0 < R - w; )
                  T = I(T), R--;
                for (; 0 < w - R; )
                  S = I(S), w--;
                for (; R--; ) {
                  if (T === S || S !== null && T === S.alternate) {
                    I = T;
                    break e;
                  }
                  T = I(T), S = I(S);
                }
                I = null;
              }
            else I = null;
            C !== null && Wd(
              H,
              _,
              C,
              I,
              !1
            ), Z !== null && Rt !== null && Wd(
              H,
              Rt,
              Z,
              I,
              !0
            );
          }
        }
        t: {
          if (_ = O ? la(O) : window, C = _.nodeName && _.nodeName.toLowerCase(), C === "select" || C === "input" && _.type === "file")
            var yt = mo;
          else if (so(_))
            if (yo)
              yt = i0;
            else {
              yt = a0;
              var k = n0;
            }
          else
            C = _.nodeName, !C || C.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? O && Wi(O.elementType) && (yt = mo) : yt = u0;
          if (yt && (yt = yt(t, O))) {
            ho(
              H,
              yt,
              l,
              N
            );
            break t;
          }
          k && k(t, _, O), t === "focusout" && O && _.type === "number" && O.memoizedProps.value != null && Fi(_, "number", _.value);
        }
        switch (k = O ? la(O) : window, t) {
          case "focusin":
            (so(k) || k.contentEditable === "true") && (gn = k, sc = O, sa = null);
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
            dc = !1, Ao(H, l, N);
            break;
          case "selectionchange":
            if (f0) break;
          case "keydown":
          case "keyup":
            Ao(H, l, N);
        }
        var ut;
        if (cc)
          t: {
            switch (t) {
              case "compositionstart":
                var st = "onCompositionStart";
                break t;
              case "compositionend":
                st = "onCompositionEnd";
                break t;
              case "compositionupdate":
                st = "onCompositionUpdate";
                break t;
            }
            st = void 0;
          }
        else
          vn ? ro(t, l) && (st = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (st = "onCompositionStart");
        st && (io && l.locale !== "ko" && (vn || st !== "onCompositionStart" ? st === "onCompositionEnd" && vn && (ut = eo()) : (yl = N, lc = "value" in yl ? yl.value : yl.textContent, vn = !0)), k = ii(O, st), 0 < k.length && (st = new ao(
          st,
          t,
          null,
          l,
          N
        ), H.push({ event: st, listeners: k }), ut ? st.data = ut : (ut = oo(l), ut !== null && (st.data = ut)))), (ut = Iy ? Py(t, l) : t0(t, l)) && (st = ii(O, "onBeforeInput"), 0 < st.length && (k = new ao(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          N
        ), H.push({
          event: k,
          listeners: st
        }), k.data = ut)), Z0(
          H,
          t,
          O,
          l,
          N
        );
      }
      $d(H, e);
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
  function $0(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Wd(t, e, l, n, a) {
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
  var F0 = /\r\n?/g, W0 = /\u0000|\uFFFD/g;
  function Id(t) {
    return (typeof t == "string" ? t : "" + t).replace(F0, `
`).replace(W0, "");
  }
  function Pd(t, e) {
    return e = Id(e), Id(t) === e;
  }
  function At(t, e, l, n, a, i) {
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
        Ir(t, n, i);
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
          typeof i == "function" && (l === "formAction" ? (e !== "input" && At(t, e, "name", a.name, a, null), At(
            t,
            e,
            "formEncType",
            a.formEncType,
            a,
            null
          ), At(
            t,
            e,
            "formMethod",
            a.formMethod,
            a,
            null
          ), At(
            t,
            e,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (At(t, e, "encType", a.encType, a, null), At(t, e, "method", a.method, a, null), At(t, e, "target", a.target, a, null)));
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
        n != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && rt("scrollend", t);
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
        rt("beforetoggle", t), rt("toggle", t), ru(t, "popover", n);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Oy.get(l) || l, ru(t, l, n));
    }
  }
  function Lf(t, e, l, n, a, i) {
    switch (l) {
      case "style":
        Ir(t, n, i);
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
        n != null && rt("scroll", t);
        break;
      case "onScrollEnd":
        n != null && rt("scrollend", t);
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
        if (!Qr.hasOwnProperty(l))
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
        rt("error", t), rt("load", t);
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
                  At(t, e, i, s, l, null);
              }
          }
        a && At(t, e, "srcSet", l.srcSet, l, null), n && At(t, e, "src", l.src, l, null);
        return;
      case "input":
        rt("invalid", t);
        var h = i = s = a = null, v = null, O = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var N = l[n];
            if (N != null)
              switch (n) {
                case "name":
                  a = N;
                  break;
                case "type":
                  s = N;
                  break;
                case "checked":
                  v = N;
                  break;
                case "defaultChecked":
                  O = N;
                  break;
                case "value":
                  i = N;
                  break;
                case "defaultValue":
                  h = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null)
                    throw Error(r(137, e));
                  break;
                default:
                  At(t, e, n, N, l, null);
              }
          }
        kr(
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
        rt("invalid", t), n = s = i = null;
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
                At(t, e, a, h, l, null);
            }
        e = i, l = s, t.multiple = !!n, e != null ? hn(t, !!n, e, !1) : l != null && hn(t, !!n, l, !0);
        return;
      case "textarea":
        rt("invalid", t), i = a = n = null;
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
                At(t, e, s, h, l, null);
            }
        Fr(t, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? t.selected = n && typeof n != "function" && typeof n != "symbol" : At(t, e, v, n, l, null));
        return;
      case "dialog":
        rt("beforetoggle", t), rt("toggle", t), rt("cancel", t), rt("close", t);
        break;
      case "iframe":
      case "object":
        rt("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ha.length; n++)
          rt(Ha[n], t);
        break;
      case "image":
        rt("error", t), rt("load", t);
        break;
      case "details":
        rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        rt("error", t), rt("load", t);
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
                At(t, e, O, n, l, null);
            }
        return;
      default:
        if (Wi(e)) {
          for (N in l)
            l.hasOwnProperty(N) && (n = l[N], n !== void 0 && Lf(
              t,
              e,
              N,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && (n = l[h], n != null && At(t, e, h, n, l, null));
  }
  function I0(t, e, l, n) {
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
        var a = null, i = null, s = null, h = null, v = null, O = null, N = null;
        for (C in l) {
          var H = l[C];
          if (l.hasOwnProperty(C) && H != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = H;
              default:
                n.hasOwnProperty(C) || At(t, e, C, null, n, H);
            }
        }
        for (var _ in n) {
          var C = n[_];
          if (H = l[_], n.hasOwnProperty(_) && (C != null || H != null))
            switch (_) {
              case "type":
                i = C;
                break;
              case "name":
                a = C;
                break;
              case "checked":
                O = C;
                break;
              case "defaultChecked":
                N = C;
                break;
              case "value":
                s = C;
                break;
              case "defaultValue":
                h = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(r(137, e));
                break;
              default:
                C !== H && At(
                  t,
                  e,
                  _,
                  C,
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
          N,
          i,
          a
        );
        return;
      case "select":
        C = s = h = _ = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                C = v;
              default:
                n.hasOwnProperty(i) || At(
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
                i !== v && At(
                  t,
                  e,
                  a,
                  i,
                  n,
                  v
                );
            }
        e = h, l = s, n = C, _ != null ? hn(t, !!l, _, !1) : !!n != !!l && (e != null ? hn(t, !!l, e, !0) : hn(t, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        C = _ = null;
        for (h in l)
          if (a = l[h], l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                At(t, e, h, null, n, a);
            }
        for (s in n)
          if (a = n[s], i = l[s], n.hasOwnProperty(s) && (a != null || i != null))
            switch (s) {
              case "value":
                _ = a;
                break;
              case "defaultValue":
                C = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(r(91));
                break;
              default:
                a !== i && At(t, e, s, a, n, i);
            }
        $r(t, _, C);
        return;
      case "option":
        for (var Z in l)
          _ = l[Z], l.hasOwnProperty(Z) && _ != null && !n.hasOwnProperty(Z) && (Z === "selected" ? t.selected = !1 : At(
            t,
            e,
            Z,
            null,
            n,
            _
          ));
        for (v in n)
          _ = n[v], C = l[v], n.hasOwnProperty(v) && _ !== C && (_ != null || C != null) && (v === "selected" ? t.selected = _ && typeof _ != "function" && typeof _ != "symbol" : At(
            t,
            e,
            v,
            _,
            n,
            C
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
        for (var I in l)
          _ = l[I], l.hasOwnProperty(I) && _ != null && !n.hasOwnProperty(I) && At(t, e, I, null, n, _);
        for (O in n)
          if (_ = n[O], C = l[O], n.hasOwnProperty(O) && _ !== C && (_ != null || C != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(r(137, e));
                break;
              default:
                At(
                  t,
                  e,
                  O,
                  _,
                  n,
                  C
                );
            }
        return;
      default:
        if (Wi(e)) {
          for (var Rt in l)
            _ = l[Rt], l.hasOwnProperty(Rt) && _ !== void 0 && !n.hasOwnProperty(Rt) && Lf(
              t,
              e,
              Rt,
              void 0,
              n,
              _
            );
          for (N in n)
            _ = n[N], C = l[N], !n.hasOwnProperty(N) || _ === C || _ === void 0 && C === void 0 || Lf(
              t,
              e,
              N,
              _,
              n,
              C
            );
          return;
        }
    }
    for (var T in l)
      _ = l[T], l.hasOwnProperty(T) && _ != null && !n.hasOwnProperty(T) && At(t, e, T, null, n, _);
    for (H in n)
      _ = n[H], C = l[H], !n.hasOwnProperty(H) || _ === C || _ == null && C == null || At(t, e, H, _, n, C);
  }
  function th(t) {
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
  function P0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, s = a.initiatorType, h = a.duration;
        if (i && h && th(s)) {
          for (s = 0, h = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], O = v.startTime;
            if (O > h) break;
            var N = v.transferSize, H = v.initiatorType;
            N && th(H) && (v = v.responseEnd, s += N * (v < h ? 1 : (h - O) / (v - O)));
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
  function eh(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function lh(t, e) {
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
  function tp() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Xf ? !1 : (Xf = t, !0) : (Xf = null, !1);
  }
  var nh = typeof setTimeout == "function" ? setTimeout : void 0, ep = typeof clearTimeout == "function" ? clearTimeout : void 0, ah = typeof Promise == "function" ? Promise : void 0, lp = typeof queueMicrotask == "function" ? queueMicrotask : typeof ah < "u" ? function(t) {
    return ah.resolve(null).then(t).catch(np);
  } : nh;
  function np(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ml(t) {
    return t === "head";
  }
  function uh(t, e) {
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
          ja(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, ja(l);
          for (var i = l.firstChild; i; ) {
            var s = i.nextSibling, h = i.nodeName;
            i[ea] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = s;
          }
        } else
          l === "body" && ja(t.ownerDocument.body);
      l = a;
    } while (l);
    Zn(e);
  }
  function ih(t, e) {
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
  function ap(t, e, l, n) {
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
  function up(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Me(t.nextSibling), t === null)) return null;
    return t;
  }
  function ch(t, e) {
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
  function ip(t, e) {
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
  function fh(t) {
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
  function rh(t) {
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
  function oh(t, e, l) {
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
  function ja(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Ji(t);
  }
  var Ne = /* @__PURE__ */ new Map(), sh = /* @__PURE__ */ new Set();
  function fi(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
  }
  var rl = G.d;
  G.d = {
    f: cp,
    r: fp,
    D: rp,
    C: op,
    L: sp,
    m: dp,
    X: mp,
    S: hp,
    M: yp
  };
  function cp() {
    var t = rl.f(), e = Pu();
    return t || e;
  }
  function fp(t) {
    var e = on(t);
    e !== null && e.tag === 5 && e.type === "form" ? xs(e) : rl.r(t);
  }
  var Xn = typeof document > "u" ? null : document;
  function dh(t, e, l) {
    var n = Xn;
    if (n && typeof e == "string" && e) {
      var a = Oe(e);
      a = 'link[rel="' + t + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), sh.has(a) || (sh.add(a), t = { rel: t, crossOrigin: l, href: e }, n.querySelector(a) === null && (e = n.createElement("link"), Wt(e, "link", t), Zt(e), n.head.appendChild(e)));
    }
  }
  function rp(t) {
    rl.D(t), dh("dns-prefetch", t, null);
  }
  function op(t, e) {
    rl.C(t, e), dh("preconnect", t, e);
  }
  function sp(t, e, l) {
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
      Ne.has(i) || (t = U(
        {
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        },
        l
      ), Ne.set(i, t), n.querySelector(a) !== null || e === "style" && n.querySelector(La(i)) || e === "script" && n.querySelector(qa(i)) || (e = n.createElement("link"), Wt(e, "link", t), Zt(e), n.head.appendChild(e)));
    }
  }
  function dp(t, e) {
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
      if (!Ne.has(i) && (t = U({ rel: "modulepreload", href: t }, e), Ne.set(i, t), l.querySelector(a) === null)) {
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
  function hp(t, e, l) {
    rl.S(t, e, l);
    var n = Xn;
    if (n && t) {
      var a = sn(n).hoistableStyles, i = Qn(t);
      e = e || "default";
      var s = a.get(i);
      if (!s) {
        var h = { loading: 0, preload: null };
        if (s = n.querySelector(
          La(i)
        ))
          h.loading = 5;
        else {
          t = U(
            { rel: "stylesheet", href: t, "data-precedence": e },
            l
          ), (l = Ne.get(i)) && Jf(t, l);
          var v = s = n.createElement("link");
          Zt(v), Wt(v, "link", t), v._p = new Promise(function(O, N) {
            v.onload = O, v.onerror = N;
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
  function mp(t, e) {
    rl.X(t, e);
    var l = Xn;
    if (l && t) {
      var n = sn(l).hoistableScripts, a = Vn(t), i = n.get(a);
      i || (i = l.querySelector(qa(a)), i || (t = U({ src: t, async: !0 }, e), (e = Ne.get(a)) && kf(t, e), i = l.createElement("script"), Zt(i), Wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function yp(t, e) {
    rl.M(t, e);
    var l = Xn;
    if (l && t) {
      var n = sn(l).hoistableScripts, a = Vn(t), i = n.get(a);
      i || (i = l.querySelector(qa(a)), i || (t = U({ src: t, async: !0, type: "module" }, e), (e = Ne.get(a)) && kf(t, e), i = l.createElement("script"), Zt(i), Wt(i, "link", t), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function hh(t, e, l, n) {
    var a = (a = ct.current) ? fi(a) : null;
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
            La(t)
          )) && !i._p && (s.instance = i, s.state.loading = 5), Ne.has(t) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ne.set(t, l), i || pp(
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
  function La(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function mh(t) {
    return U({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function pp(t, e, l, n) {
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
  function yh(t, e, l) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var n = t.querySelector(
            'style[data-href~="' + Oe(l.href) + '"]'
          );
          if (n)
            return e.instance = n, Zt(n), n;
          var a = U({}, l, {
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
            La(a)
          );
          if (i)
            return e.state.loading |= 4, e.instance = i, Zt(i), i;
          n = mh(l), (a = Ne.get(a)) && Jf(n, a), i = (t.ownerDocument || t).createElement("link"), Zt(i);
          var s = i;
          return s._p = new Promise(function(h, v) {
            s.onload = h, s.onerror = v;
          }), Wt(i, "link", n), e.state.loading |= 4, ri(i, l.precedence, t), e.instance = i;
        case "script":
          return i = Vn(l.src), (a = t.querySelector(
            qa(i)
          )) ? (e.instance = a, Zt(a), a) : (n = l, (a = Ne.get(i)) && (n = U({}, l), kf(n, a)), t = t.ownerDocument || t, a = t.createElement("script"), Zt(a), Wt(a, "link", n), t.head.appendChild(a), e.instance = a);
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
  function ph(t, e, l) {
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
  function vh(t, e, l) {
    t = t.ownerDocument || t, t.head.insertBefore(
      l,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function vp(t, e, l) {
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
  function gh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function gp(t, e, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Qn(n.href), i = e.querySelector(
          La(a)
        );
        if (i) {
          e = i._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = si.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = i, Zt(i);
          return;
        }
        i = e.ownerDocument || e, n = mh(n), (a = Ne.get(a)) && Jf(n, a), i = i.createElement("link"), Zt(i);
        var s = i;
        s._p = new Promise(function(h, v) {
          s.onload = h, s.onerror = v;
        }), Wt(i, "link", n), l.instance = i;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = si.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
    }
  }
  var $f = 0;
  function bp(t, e) {
    return t.stylesheets && t.count === 0 && hi(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (t.stylesheets && hi(t, t.stylesheets), t.unsuspend) {
          var i = t.unsuspend;
          t.unsuspend = null, i();
        }
      }, 6e4 + e);
      0 < t.imgBytes && $f === 0 && ($f = 62500 * P0());
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
    t.stylesheets = null, t.unsuspend !== null && (t.count++, di = /* @__PURE__ */ new Map(), e.forEach(Sp, t), di = null, si.call(t));
  }
  function Sp(t, e) {
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
    $$typeof: tt,
    Provider: null,
    Consumer: null,
    _currentValue: mt,
    _currentValue2: mt,
    _threadCount: 0
  };
  function Ep(t, e, l, n, a, i, s, h, v) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qi(0), this.hiddenUpdates = Qi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function bh(t, e, l, n, a, i, s, h, v, O, N, H) {
    return t = new Ep(
      t,
      e,
      l,
      s,
      v,
      O,
      N,
      H,
      h
    ), e = 1, i === !0 && (e |= 24), i = ge(3, null, null, e), t.current = i, i.stateNode = t, e = zc(), e.refCount++, t.pooledCache = e, e.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: e
    }, Dc(i), t;
  }
  function Sh(t) {
    return t ? (t = En, t) : En;
  }
  function Eh(t, e, l, n, a, i) {
    a = Sh(a), n.context === null ? n.context = a : n.pendingContext = a, n = El(e), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Tl(t, n, e), l !== null && (se(l, t, e), ga(l, t, e));
  }
  function Th(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function Ff(t, e) {
    Th(t, e), (t = t.alternate) && Th(t, e);
  }
  function Ah(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Vl(t, 67108864);
      e !== null && se(e, t, 67108864), Ff(t, 67108864);
    }
  }
  function Rh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ae();
      e = Vi(e);
      var l = Vl(t, e);
      l !== null && se(l, t, e), Ff(t, e);
    }
  }
  var mi = !0;
  function Tp(t, e, l, n) {
    var a = L.T;
    L.T = null;
    var i = G.p;
    try {
      G.p = 2, Wf(t, e, l, n);
    } finally {
      G.p = i, L.T = a;
    }
  }
  function Ap(t, e, l, n) {
    var a = L.T;
    L.T = null;
    var i = G.p;
    try {
      G.p = 8, Wf(t, e, l, n);
    } finally {
      G.p = i, L.T = a;
    }
  }
  function Wf(t, e, l, n) {
    if (mi) {
      var a = If(n);
      if (a === null)
        jf(
          t,
          e,
          n,
          yi,
          l
        ), _h(t, n);
      else if (Op(
        a,
        t,
        e,
        l,
        n
      ))
        n.stopPropagation();
      else if (_h(t, n), e & 4 && -1 < Rp.indexOf(t)) {
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
                    Ve(i), (gt & 6) === 0 && (Wu = me() + 500, wa(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = Vl(i, 2), h !== null && se(h, i, 2), Pu(), Ff(i, 2);
            }
          if (i = If(n), i === null && jf(
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
        jf(
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
  function Oh(t) {
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
        switch (ry()) {
          case Mr:
            return 2;
          case Nr:
            return 8;
          case au:
          case oy:
            return 32;
          case wr:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var tr = !1, Nl = null, wl = null, Hl = null, Ga = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), Bl = [], Rp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _h(t, e) {
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
    }, e !== null && (e = on(e), e !== null && Ah(e)), t) : (t.eventSystemFlags |= n, e = t.targetContainers, a !== null && e.indexOf(a) === -1 && e.push(a), t);
  }
  function Op(t, e, l, n, a) {
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
  function zh(t) {
    var e = rn(t.target);
    if (e !== null) {
      var l = m(e);
      if (l !== null) {
        if (e = l.tag, e === 13) {
          if (e = p(l), e !== null) {
            t.blockedOn = e, Yr(t.priority, function() {
              Rh(l);
            });
            return;
          }
        } else if (e === 31) {
          if (e = g(l), e !== null) {
            t.blockedOn = e, Yr(t.priority, function() {
              Rh(l);
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
        return e = on(l), e !== null && Ah(e), t.blockedOn = l, !1;
      e.shift();
    }
    return !0;
  }
  function xh(t, e, l) {
    pi(t) && l.delete(e);
  }
  function _p() {
    tr = !1, Nl !== null && pi(Nl) && (Nl = null), wl !== null && pi(wl) && (wl = null), Hl !== null && pi(Hl) && (Hl = null), Ga.forEach(xh), Xa.forEach(xh);
  }
  function vi(t, e) {
    t.blockedOn === e && (t.blockedOn = null, tr || (tr = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      _p
    )));
  }
  var gi = null;
  function Ch(t) {
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
      zh(l), l.blockedOn === null && Bl.shift();
    if (l = (t.ownerDocument || t).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], s = a[ue] || null;
        if (typeof i == "function")
          s || Ch(l);
        else if (s) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, s = i[ue] || null)
              h = s.formAction;
            else if (Pf(a) !== null) continue;
          } else h = s.action;
          typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), Ch(l);
        }
      }
  }
  function Uh() {
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
    Eh(l, n, t, e, null, null);
  }, bi.prototype.unmount = er.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Eh(t.current, 2, null, t, null, null), Pu(), e[fn] = null;
    }
  };
  function bi(t) {
    this._internalRoot = t;
  }
  bi.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = qr();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Bl.length && e !== 0 && e < Bl[l].priority; l++) ;
      Bl.splice(l, 0, t), l === 0 && zh(t);
    }
  };
  var Dh = f.version;
  if (Dh !== "19.2.3")
    throw Error(
      r(
        527,
        Dh,
        "19.2.3"
      )
    );
  G.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = b(e), t = t !== null ? A(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var zp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Si = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Si.isDisabled && Si.supportsFiber)
      try {
        In = Si.inject(
          zp
        ), ye = Si;
      } catch {
      }
  }
  return Ka.createRoot = function(t, e) {
    if (!d(t)) throw Error(r(299));
    var l = !1, n = "", a = Ls, i = qs, s = Ys;
    return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (a = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = bh(
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
      Uh
    ), t[fn] = e.current, Bf(t), new er(e);
  }, Ka.hydrateRoot = function(t, e, l) {
    if (!d(t)) throw Error(r(299));
    var n = !1, a = "", i = Ls, s = qs, h = Ys, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (s = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), e = bh(
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
      Uh
    ), e.context = Sh(null), l = e.current, n = Ae(), n = Vi(n), a = El(n), a.callback = null, Tl(l, a, n), l = n, e.current.lanes = l, ta(e, l), Ve(e), t[fn] = e.current, Bf(t), new bi(e);
  }, Ka.version = "19.2.3", Ka;
}
var Jh;
function mg() {
  if (Jh) return fr.exports;
  Jh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), fr.exports = hg(), fr.exports;
}
var yg = mg();
const Hm = ({ label: u, onClick: c, disabled: f, type: o = "button", className: r, children: d, mainButtonStyle: m }) => /* @__PURE__ */ W.jsx(
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
function pg(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (c, f) => {
    let o = f.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function vg(u) {
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
    return pg(c);
  } catch {
    return atob(c);
  }
}
function gg(u, c) {
  if (typeof u != "string")
    throw new ka("Invalid token specified: must be a string");
  c || (c = {});
  const f = c.header === !0 ? 0 : 1, o = u.split(".")[f];
  if (typeof o != "string")
    throw new ka(`Invalid token specified: missing part #${f + 1}`);
  let r;
  try {
    r = vg(o);
  } catch (d) {
    throw new ka(`Invalid token specified: invalid base64 for part #${f + 1} (${d.message})`);
  }
  try {
    return JSON.parse(r);
  } catch (d) {
    throw new ka(`Invalid token specified: invalid json for part #${f + 1} (${d.message})`);
  }
}
const kh = D.forwardRef((u, c) => {
  const { label: f, startIcon: o, endIcon: r, error: d, helperText: m, optional: p, className: g, options: y, ...b } = u, A = !!d || !!m, U = b.type === "select" || !!y;
  return /* @__PURE__ */ W.jsxs("div", { className: `flex! flex-col! ${g || ""}`, children: [
    f && /* @__PURE__ */ W.jsxs("label", { className: "block! mb-1.5! font-semibold! text-left!", children: [
      f,
      " ",
      p && /* @__PURE__ */ W.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
    ] }),
    /* @__PURE__ */ W.jsxs("div", { className: "flex! items-center! relative!", children: [
      o && /* @__PURE__ */ W.jsx("span", { className: "flex! items-center! justify-center! px-2! mr-1.5!", "aria-hidden": !0, children: o }),
      U ? /* @__PURE__ */ W.jsx(
        "select",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${A ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...b,
          children: y && y.map((q) => /* @__PURE__ */ W.jsx("option", { value: q.value, children: q.label }, q.value))
        }
      ) : /* @__PURE__ */ W.jsx(
        "input",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${A ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...b
        }
      ),
      r && /* @__PURE__ */ W.jsx("span", { className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!", "aria-hidden": !0, children: r })
    ] }),
    d && typeof d == "string" && /* @__PURE__ */ W.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
    !d && m && /* @__PURE__ */ W.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: m })
  ] });
});
function Bm(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
var $h = {};
const { toString: bg } = Object.prototype, { getPrototypeOf: _r } = Object, { iterator: Mi, toStringTag: jm } = Symbol, Ni = /* @__PURE__ */ ((u) => (c) => {
  const f = bg.call(c);
  return u[f] || (u[f] = f.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qe = (u) => (u = u.toLowerCase(), (c) => Ni(c) === u), wi = (u) => (c) => typeof c === u, { isArray: $n } = Array, Kn = wi("undefined");
function Pa(u) {
  return u !== null && !Kn(u) && u.constructor !== null && !Kn(u.constructor) && de(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Lm = qe("ArrayBuffer");
function Sg(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && Lm(u.buffer), c;
}
const Eg = wi("string"), de = wi("function"), qm = wi("number"), tu = (u) => u !== null && typeof u == "object", Tg = (u) => u === !0 || u === !1, Oi = (u) => {
  if (Ni(u) !== "object")
    return !1;
  const c = _r(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(jm in u) && !(Mi in u);
}, Ag = (u) => {
  if (!tu(u) || Pa(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Rg = qe("Date"), Og = qe("File"), _g = qe("Blob"), zg = qe("FileList"), xg = (u) => tu(u) && de(u.pipe), Cg = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || de(u.append) && ((c = Ni(u)) === "formdata" || // detect form-data instance
  c === "object" && de(u.toString) && u.toString() === "[object FormData]"));
}, Ug = qe("URLSearchParams"), [Dg, Mg, Ng, wg] = ["ReadableStream", "Request", "Response", "Headers"].map(qe), Hg = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function Ym(u, c) {
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
const nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Gm = (u) => !Kn(u) && u !== nn;
function pr() {
  const { caseless: u, skipUndefined: c } = Gm(this) && this || {}, f = {}, o = (r, d) => {
    const m = u && Ym(f, d) || d;
    Oi(f[m]) && Oi(r) ? f[m] = pr(f[m], r) : Oi(r) ? f[m] = pr({}, r) : $n(r) ? f[m] = r.slice() : (!c || !Kn(r)) && (f[m] = r);
  };
  for (let r = 0, d = arguments.length; r < d; r++)
    arguments[r] && eu(arguments[r], o);
  return f;
}
const Bg = (u, c, f, { allOwnKeys: o } = {}) => (eu(c, (r, d) => {
  f && de(r) ? u[d] = Bm(r, f) : u[d] = r;
}, { allOwnKeys: o }), u), jg = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Lg = (u, c, f, o) => {
  u.prototype = Object.create(c.prototype, o), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), f && Object.assign(u.prototype, f);
}, qg = (u, c, f, o) => {
  let r, d, m;
  const p = {};
  if (c = c || {}, u == null) return c;
  do {
    for (r = Object.getOwnPropertyNames(u), d = r.length; d-- > 0; )
      m = r[d], (!o || o(m, u, c)) && !p[m] && (c[m] = u[m], p[m] = !0);
    u = f !== !1 && _r(u);
  } while (u && (!f || f(u, c)) && u !== Object.prototype);
  return c;
}, Yg = (u, c, f) => {
  u = String(u), (f === void 0 || f > u.length) && (f = u.length), f -= c.length;
  const o = u.indexOf(c, f);
  return o !== -1 && o === f;
}, Gg = (u) => {
  if (!u) return null;
  if ($n(u)) return u;
  let c = u.length;
  if (!qm(c)) return null;
  const f = new Array(c);
  for (; c-- > 0; )
    f[c] = u[c];
  return f;
}, Xg = /* @__PURE__ */ ((u) => (c) => u && c instanceof u)(typeof Uint8Array < "u" && _r(Uint8Array)), Qg = (u, c) => {
  const o = (u && u[Mi]).call(u);
  let r;
  for (; (r = o.next()) && !r.done; ) {
    const d = r.value;
    c.call(u, d[0], d[1]);
  }
}, Vg = (u, c) => {
  let f;
  const o = [];
  for (; (f = u.exec(c)) !== null; )
    o.push(f);
  return o;
}, Zg = qe("HTMLFormElement"), Kg = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(f, o, r) {
    return o.toUpperCase() + r;
  }
), Fh = (({ hasOwnProperty: u }) => (c, f) => u.call(c, f))(Object.prototype), Jg = qe("RegExp"), Xm = (u, c) => {
  const f = Object.getOwnPropertyDescriptors(u), o = {};
  eu(f, (r, d) => {
    let m;
    (m = c(r, d, u)) !== !1 && (o[d] = m || r);
  }), Object.defineProperties(u, o);
}, kg = (u) => {
  Xm(u, (c, f) => {
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
}, $g = (u, c) => {
  const f = {}, o = (r) => {
    r.forEach((d) => {
      f[d] = !0;
    });
  };
  return $n(u) ? o(u) : o(String(u).split(c)), f;
}, Fg = () => {
}, Wg = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function Ig(u) {
  return !!(u && de(u.append) && u[jm] === "FormData" && u[Mi]);
}
const Pg = (u) => {
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
}, t1 = qe("AsyncFunction"), e1 = (u) => u && (tu(u) || de(u)) && de(u.then) && de(u.catch), Qm = ((u, c) => u ? setImmediate : c ? ((f, o) => (nn.addEventListener("message", ({ source: r, data: d }) => {
  r === nn && d === f && o.length && o.shift()();
}, !1), (r) => {
  o.push(r), nn.postMessage(f, "*");
}))(`axios@${Math.random()}`, []) : (f) => setTimeout(f))(
  typeof setImmediate == "function",
  de(nn.postMessage)
), l1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(nn) : typeof $h < "u" && $h.nextTick || Qm, n1 = (u) => u != null && de(u[Mi]), x = {
  isArray: $n,
  isArrayBuffer: Lm,
  isBuffer: Pa,
  isFormData: Cg,
  isArrayBufferView: Sg,
  isString: Eg,
  isNumber: qm,
  isBoolean: Tg,
  isObject: tu,
  isPlainObject: Oi,
  isEmptyObject: Ag,
  isReadableStream: Dg,
  isRequest: Mg,
  isResponse: Ng,
  isHeaders: wg,
  isUndefined: Kn,
  isDate: Rg,
  isFile: Og,
  isBlob: _g,
  isRegExp: Jg,
  isFunction: de,
  isStream: xg,
  isURLSearchParams: Ug,
  isTypedArray: Xg,
  isFileList: zg,
  forEach: eu,
  merge: pr,
  extend: Bg,
  trim: Hg,
  stripBOM: jg,
  inherits: Lg,
  toFlatObject: qg,
  kindOf: Ni,
  kindOfTest: qe,
  endsWith: Yg,
  toArray: Gg,
  forEachEntry: Qg,
  matchAll: Vg,
  isHTMLForm: Zg,
  hasOwnProperty: Fh,
  hasOwnProp: Fh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xm,
  freezeMethods: kg,
  toObjectSet: $g,
  toCamelCase: Kg,
  noop: Fg,
  toFiniteNumber: Wg,
  findKey: Ym,
  global: nn,
  isContextDefined: Gm,
  isSpecCompliantForm: Ig,
  toJSONObject: Pg,
  isAsyncFn: t1,
  isThenable: e1,
  setImmediate: Qm,
  asap: l1,
  isIterable: n1
};
function nt(u, c, f, o, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), f && (this.config = f), o && (this.request = o), r && (this.response = r, this.status = r.status ? r.status : null);
}
x.inherits(nt, Error, {
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
      config: x.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Vm = nt.prototype, Zm = {};
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
  Zm[u] = { value: u };
});
Object.defineProperties(nt, Zm);
Object.defineProperty(Vm, "isAxiosError", { value: !0 });
nt.from = (u, c, f, o, r, d) => {
  const m = Object.create(Vm);
  x.toFlatObject(u, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = u && u.message ? u.message : "Error", g = c == null && u ? u.code : c;
  return nt.call(m, p, g, f, o, r), u && m.cause == null && Object.defineProperty(m, "cause", { value: u, configurable: !0 }), m.name = u && u.name || "Error", d && Object.assign(m, d), m;
};
const a1 = null;
function vr(u) {
  return x.isPlainObject(u) || x.isArray(u);
}
function Km(u) {
  return x.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Wh(u, c, f) {
  return u ? u.concat(c).map(function(r, d) {
    return r = Km(r), !f && d ? "[" + r + "]" : r;
  }).join(f ? "." : "") : c;
}
function u1(u) {
  return x.isArray(u) && !u.some(vr);
}
const i1 = x.toFlatObject(x, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Hi(u, c, f) {
  if (!x.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), f = x.toFlatObject(f, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, M) {
    return !x.isUndefined(M[j]);
  });
  const o = f.metaTokens, r = f.visitor || b, d = f.dots, m = f.indexes, g = (f.Blob || typeof Blob < "u" && Blob) && x.isSpecCompliantForm(c);
  if (!x.isFunction(r))
    throw new TypeError("visitor must be a function");
  function y(z) {
    if (z === null) return "";
    if (x.isDate(z))
      return z.toISOString();
    if (x.isBoolean(z))
      return z.toString();
    if (!g && x.isBlob(z))
      throw new nt("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(z) || x.isTypedArray(z) ? g && typeof Blob == "function" ? new Blob([z]) : Buffer.from(z) : z;
  }
  function b(z, j, M) {
    let Q = z;
    if (z && !M && typeof z == "object") {
      if (x.endsWith(j, "{}"))
        j = o ? j : j.slice(0, -2), z = JSON.stringify(z);
      else if (x.isArray(z) && u1(z) || (x.isFileList(z) || x.endsWith(j, "[]")) && (Q = x.toArray(z)))
        return j = Km(j), Q.forEach(function(J, tt) {
          !(x.isUndefined(J) || J === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? Wh([j], tt, d) : m === null ? j : j + "[]",
            y(J)
          );
        }), !1;
    }
    return vr(z) ? !0 : (c.append(Wh(M, j, d), y(z)), !1);
  }
  const A = [], U = Object.assign(i1, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: vr
  });
  function q(z, j) {
    if (!x.isUndefined(z)) {
      if (A.indexOf(z) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      A.push(z), x.forEach(z, function(Q, V) {
        (!(x.isUndefined(Q) || Q === null) && r.call(
          c,
          Q,
          x.isString(V) ? V.trim() : V,
          j,
          U
        )) === !0 && q(Q, j ? j.concat(V) : [V]);
      }), A.pop();
    }
  }
  if (!x.isObject(u))
    throw new TypeError("data must be an object");
  return q(u), c;
}
function Ih(u) {
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
function zr(u, c) {
  this._pairs = [], u && Hi(u, this, c);
}
const Jm = zr.prototype;
Jm.append = function(c, f) {
  this._pairs.push([c, f]);
};
Jm.toString = function(c) {
  const f = c ? function(o) {
    return c.call(this, o, Ih);
  } : Ih;
  return this._pairs.map(function(r) {
    return f(r[0]) + "=" + f(r[1]);
  }, "").join("&");
};
function c1(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function km(u, c, f) {
  if (!c)
    return u;
  const o = f && f.encode || c1;
  x.isFunction(f) && (f = {
    serialize: f
  });
  const r = f && f.serialize;
  let d;
  if (r ? d = r(c, f) : d = x.isURLSearchParams(c) ? c.toString() : new zr(c, f).toString(o), d) {
    const m = u.indexOf("#");
    m !== -1 && (u = u.slice(0, m)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class Ph {
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
    x.forEach(this.handlers, function(o) {
      o !== null && c(o);
    });
  }
}
const $m = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, f1 = typeof URLSearchParams < "u" ? URLSearchParams : zr, r1 = typeof FormData < "u" ? FormData : null, o1 = typeof Blob < "u" ? Blob : null, s1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: f1,
    FormData: r1,
    Blob: o1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xr = typeof window < "u" && typeof document < "u", gr = typeof navigator == "object" && navigator || void 0, d1 = xr && (!gr || ["ReactNative", "NativeScript", "NS"].indexOf(gr.product) < 0), h1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", m1 = xr && window.location.href || "http://localhost", y1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xr,
  hasStandardBrowserEnv: d1,
  hasStandardBrowserWebWorkerEnv: h1,
  navigator: gr,
  origin: m1
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...y1,
  ...s1
};
function p1(u, c) {
  return Hi(u, new te.classes.URLSearchParams(), {
    visitor: function(f, o, r, d) {
      return te.isNode && x.isBuffer(f) ? (this.append(o, f.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function v1(u) {
  return x.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function g1(u) {
  const c = {}, f = Object.keys(u);
  let o;
  const r = f.length;
  let d;
  for (o = 0; o < r; o++)
    d = f[o], c[d] = u[d];
  return c;
}
function Fm(u) {
  function c(f, o, r, d) {
    let m = f[d++];
    if (m === "__proto__") return !0;
    const p = Number.isFinite(+m), g = d >= f.length;
    return m = !m && x.isArray(r) ? r.length : m, g ? (x.hasOwnProp(r, m) ? r[m] = [r[m], o] : r[m] = o, !p) : ((!r[m] || !x.isObject(r[m])) && (r[m] = []), c(f, o, r[m], d) && x.isArray(r[m]) && (r[m] = g1(r[m])), !p);
  }
  if (x.isFormData(u) && x.isFunction(u.entries)) {
    const f = {};
    return x.forEachEntry(u, (o, r) => {
      c(v1(o), r, f, 0);
    }), f;
  }
  return null;
}
function b1(u, c, f) {
  if (x.isString(u))
    try {
      return (c || JSON.parse)(u), x.trim(u);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (f || JSON.stringify)(u);
}
const lu = {
  transitional: $m,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, f) {
    const o = f.getContentType() || "", r = o.indexOf("application/json") > -1, d = x.isObject(c);
    if (d && x.isHTMLForm(c) && (c = new FormData(c)), x.isFormData(c))
      return r ? JSON.stringify(Fm(c)) : c;
    if (x.isArrayBuffer(c) || x.isBuffer(c) || x.isStream(c) || x.isFile(c) || x.isBlob(c) || x.isReadableStream(c))
      return c;
    if (x.isArrayBufferView(c))
      return c.buffer;
    if (x.isURLSearchParams(c))
      return f.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let p;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return p1(c, this.formSerializer).toString();
      if ((p = x.isFileList(c)) || o.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return Hi(
          p ? { "files[]": c } : c,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return d || r ? (f.setContentType("application/json", !1), b1(c)) : c;
  }],
  transformResponse: [function(c) {
    const f = this.transitional || lu.transitional, o = f && f.forcedJSONParsing, r = this.responseType === "json";
    if (x.isResponse(c) || x.isReadableStream(c))
      return c;
    if (c && x.isString(c) && (o && !this.responseType || r)) {
      const m = !(f && f.silentJSONParsing) && r;
      try {
        return JSON.parse(c, this.parseReviver);
      } catch (p) {
        if (m)
          throw p.name === "SyntaxError" ? nt.from(p, nt.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
x.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  lu.headers[u] = {};
});
const S1 = x.toObjectSet([
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
]), E1 = (u) => {
  const c = {};
  let f, o, r;
  return u && u.split(`
`).forEach(function(m) {
    r = m.indexOf(":"), f = m.substring(0, r).trim().toLowerCase(), o = m.substring(r + 1).trim(), !(!f || c[f] && S1[f]) && (f === "set-cookie" ? c[f] ? c[f].push(o) : c[f] = [o] : c[f] = c[f] ? c[f] + ", " + o : o);
  }), c;
}, tm = /* @__PURE__ */ Symbol("internals");
function Ja(u) {
  return u && String(u).trim().toLowerCase();
}
function _i(u) {
  return u === !1 || u == null ? u : x.isArray(u) ? u.map(_i) : String(u);
}
function T1(u) {
  const c = /* @__PURE__ */ Object.create(null), f = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = f.exec(u); )
    c[o[1]] = o[2];
  return c;
}
const A1 = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function sr(u, c, f, o, r) {
  if (x.isFunction(o))
    return o.call(this, c, f);
  if (r && (c = f), !!x.isString(c)) {
    if (x.isString(o))
      return c.indexOf(o) !== -1;
    if (x.isRegExp(o))
      return o.test(c);
  }
}
function R1(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, f, o) => f.toUpperCase() + o);
}
function O1(u, c) {
  const f = x.toCamelCase(" " + c);
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
      const A = x.findKey(r, b);
      (!A || r[A] === void 0 || y === !0 || y === void 0 && r[A] !== !1) && (r[A || g] = _i(p));
    }
    const m = (p, g) => x.forEach(p, (y, b) => d(y, b, g));
    if (x.isPlainObject(c) || c instanceof this.constructor)
      m(c, f);
    else if (x.isString(c) && (c = c.trim()) && !A1(c))
      m(E1(c), f);
    else if (x.isObject(c) && x.isIterable(c)) {
      let p = {}, g, y;
      for (const b of c) {
        if (!x.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = b[0]] = (g = p[y]) ? x.isArray(g) ? [...g, b[1]] : [g, b[1]] : b[1];
      }
      m(p, f);
    } else
      c != null && d(f, c, o);
    return this;
  }
  get(c, f) {
    if (c = Ja(c), c) {
      const o = x.findKey(this, c);
      if (o) {
        const r = this[o];
        if (!f)
          return r;
        if (f === !0)
          return T1(r);
        if (x.isFunction(f))
          return f.call(this, r, o);
        if (x.isRegExp(f))
          return f.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, f) {
    if (c = Ja(c), c) {
      const o = x.findKey(this, c);
      return !!(o && this[o] !== void 0 && (!f || sr(this, this[o], o, f)));
    }
    return !1;
  }
  delete(c, f) {
    const o = this;
    let r = !1;
    function d(m) {
      if (m = Ja(m), m) {
        const p = x.findKey(o, m);
        p && (!f || sr(o, o[p], p, f)) && (delete o[p], r = !0);
      }
    }
    return x.isArray(c) ? c.forEach(d) : d(c), r;
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
    return x.forEach(this, (r, d) => {
      const m = x.findKey(o, d);
      if (m) {
        f[m] = _i(r), delete f[d];
        return;
      }
      const p = c ? R1(d) : String(d).trim();
      p !== d && delete f[d], f[p] = _i(r), o[p] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const f = /* @__PURE__ */ Object.create(null);
    return x.forEach(this, (o, r) => {
      o != null && o !== !1 && (f[r] = c && x.isArray(o) ? o.join(", ") : o);
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
    const o = (this[tm] = this[tm] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function d(m) {
      const p = Ja(m);
      o[p] || (O1(r, m), o[p] = !0);
    }
    return x.isArray(c) ? c.forEach(d) : d(c), this;
  }
};
he.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
x.reduceDescriptors(he.prototype, ({ value: u }, c) => {
  let f = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(o) {
      this[f] = o;
    }
  };
});
x.freezeMethods(he);
function dr(u, c) {
  const f = this || lu, o = c || f, r = he.from(o.headers);
  let d = o.data;
  return x.forEach(u, function(p) {
    d = p.call(f, d, r.normalize(), c ? c.status : void 0);
  }), r.normalize(), d;
}
function Wm(u) {
  return !!(u && u.__CANCEL__);
}
function Fn(u, c, f) {
  nt.call(this, u ?? "canceled", nt.ERR_CANCELED, c, f), this.name = "CanceledError";
}
x.inherits(Fn, nt, {
  __CANCEL__: !0
});
function Im(u, c, f) {
  const o = f.config.validateStatus;
  !f.status || !o || o(f.status) ? u(f) : c(new nt(
    "Request failed with status code " + f.status,
    [nt.ERR_BAD_REQUEST, nt.ERR_BAD_RESPONSE][Math.floor(f.status / 100) - 4],
    f.config,
    f.request,
    f
  ));
}
function _1(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return c && c[1] || "";
}
function z1(u, c) {
  u = u || 10;
  const f = new Array(u), o = new Array(u);
  let r = 0, d = 0, m;
  return c = c !== void 0 ? c : 1e3, function(g) {
    const y = Date.now(), b = o[d];
    m || (m = y), f[r] = g, o[r] = y;
    let A = d, U = 0;
    for (; A !== r; )
      U += f[A++], A = A % u;
    if (r = (r + 1) % u, r === d && (d = (d + 1) % u), y - m < c)
      return;
    const q = b && y - b;
    return q ? Math.round(U * 1e3 / q) : void 0;
  };
}
function x1(u, c) {
  let f = 0, o = 1e3 / c, r, d;
  const m = (y, b = Date.now()) => {
    f = b, r = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), A = b - f;
    A >= o ? m(y, b) : (r = y, d || (d = setTimeout(() => {
      d = null, m(r);
    }, o - A)));
  }, () => r && m(r)];
}
const Ci = (u, c, f = 3) => {
  let o = 0;
  const r = z1(50, 250);
  return x1((d) => {
    const m = d.loaded, p = d.lengthComputable ? d.total : void 0, g = m - o, y = r(g), b = m <= p;
    o = m;
    const A = {
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
    u(A);
  }, f);
}, em = (u, c) => {
  const f = u != null;
  return [(o) => c[0]({
    lengthComputable: f,
    total: u,
    loaded: o
  }), c[1]];
}, lm = (u) => (...c) => x.asap(() => u(...c)), C1 = te.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (f) => (f = new URL(f, te.origin), u.protocol === f.protocol && u.host === f.host && (c || u.port === f.port)))(
  new URL(te.origin),
  te.navigator && /(msie|trident)/i.test(te.navigator.userAgent)
) : () => !0, U1 = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, f, o, r, d, m) {
      if (typeof document > "u") return;
      const p = [`${u}=${encodeURIComponent(c)}`];
      x.isNumber(f) && p.push(`expires=${new Date(f).toUTCString()}`), x.isString(o) && p.push(`path=${o}`), x.isString(r) && p.push(`domain=${r}`), d === !0 && p.push("secure"), x.isString(m) && p.push(`SameSite=${m}`), document.cookie = p.join("; ");
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
function D1(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function M1(u, c) {
  return c ? u.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : u;
}
function Pm(u, c, f) {
  let o = !D1(c);
  return u && (o || f == !1) ? M1(u, c) : c;
}
const nm = (u) => u instanceof he ? { ...u } : u;
function un(u, c) {
  c = c || {};
  const f = {};
  function o(y, b, A, U) {
    return x.isPlainObject(y) && x.isPlainObject(b) ? x.merge.call({ caseless: U }, y, b) : x.isPlainObject(b) ? x.merge({}, b) : x.isArray(b) ? b.slice() : b;
  }
  function r(y, b, A, U) {
    if (x.isUndefined(b)) {
      if (!x.isUndefined(y))
        return o(void 0, y, A, U);
    } else return o(y, b, A, U);
  }
  function d(y, b) {
    if (!x.isUndefined(b))
      return o(void 0, b);
  }
  function m(y, b) {
    if (x.isUndefined(b)) {
      if (!x.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, b);
  }
  function p(y, b, A) {
    if (A in c)
      return o(y, b);
    if (A in u)
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
    headers: (y, b, A) => r(nm(y), nm(b), A, !0)
  };
  return x.forEach(Object.keys({ ...u, ...c }), function(b) {
    const A = g[b] || r, U = A(u[b], c[b], b);
    x.isUndefined(U) && A !== p || (f[b] = U);
  }), f;
}
const ty = (u) => {
  const c = un({}, u);
  let { data: f, withXSRFToken: o, xsrfHeaderName: r, xsrfCookieName: d, headers: m, auth: p } = c;
  if (c.headers = m = he.from(m), c.url = km(Pm(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer), p && m.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), x.isFormData(f)) {
    if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (x.isFunction(f.getHeaders)) {
      const g = f.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(g).forEach(([b, A]) => {
        y.includes(b.toLowerCase()) && m.set(b, A);
      });
    }
  }
  if (te.hasStandardBrowserEnv && (o && x.isFunction(o) && (o = o(c)), o || o !== !1 && C1(c.url))) {
    const g = r && d && U1.read(d);
    g && m.set(r, g);
  }
  return c;
}, N1 = typeof XMLHttpRequest < "u", w1 = N1 && function(u) {
  return new Promise(function(f, o) {
    const r = ty(u);
    let d = r.data;
    const m = he.from(r.headers).normalize();
    let { responseType: p, onUploadProgress: g, onDownloadProgress: y } = r, b, A, U, q, z;
    function j() {
      q && q(), z && z(), r.cancelToken && r.cancelToken.unsubscribe(b), r.signal && r.signal.removeEventListener("abort", b);
    }
    let M = new XMLHttpRequest();
    M.open(r.method.toUpperCase(), r.url, !0), M.timeout = r.timeout;
    function Q() {
      if (!M)
        return;
      const J = he.from(
        "getAllResponseHeaders" in M && M.getAllResponseHeaders()
      ), at = {
        data: !p || p === "text" || p === "json" ? M.responseText : M.response,
        status: M.status,
        statusText: M.statusText,
        headers: J,
        config: u,
        request: M
      };
      Im(function(P) {
        f(P), j();
      }, function(P) {
        o(P), j();
      }, at), M = null;
    }
    "onloadend" in M ? M.onloadend = Q : M.onreadystatechange = function() {
      !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, M.onabort = function() {
      M && (o(new nt("Request aborted", nt.ECONNABORTED, u, M)), M = null);
    }, M.onerror = function(tt) {
      const at = tt && tt.message ? tt.message : "Network Error", vt = new nt(at, nt.ERR_NETWORK, u, M);
      vt.event = tt || null, o(vt), M = null;
    }, M.ontimeout = function() {
      let tt = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const at = r.transitional || $m;
      r.timeoutErrorMessage && (tt = r.timeoutErrorMessage), o(new nt(
        tt,
        at.clarifyTimeoutError ? nt.ETIMEDOUT : nt.ECONNABORTED,
        u,
        M
      )), M = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in M && x.forEach(m.toJSON(), function(tt, at) {
      M.setRequestHeader(at, tt);
    }), x.isUndefined(r.withCredentials) || (M.withCredentials = !!r.withCredentials), p && p !== "json" && (M.responseType = r.responseType), y && ([U, z] = Ci(y, !0), M.addEventListener("progress", U)), g && M.upload && ([A, q] = Ci(g), M.upload.addEventListener("progress", A), M.upload.addEventListener("loadend", q)), (r.cancelToken || r.signal) && (b = (J) => {
      M && (o(!J || J.type ? new Fn(null, u, M) : J), M.abort(), M = null);
    }, r.cancelToken && r.cancelToken.subscribe(b), r.signal && (r.signal.aborted ? b() : r.signal.addEventListener("abort", b)));
    const V = _1(r.url);
    if (V && te.protocols.indexOf(V) === -1) {
      o(new nt("Unsupported protocol " + V + ":", nt.ERR_BAD_REQUEST, u));
      return;
    }
    M.send(d || null);
  });
}, H1 = (u, c) => {
  const { length: f } = u = u ? u.filter(Boolean) : [];
  if (c || f) {
    let o = new AbortController(), r;
    const d = function(y) {
      if (!r) {
        r = !0, p();
        const b = y instanceof Error ? y : this.reason;
        o.abort(b instanceof nt ? b : new Fn(b instanceof Error ? b.message : b));
      }
    };
    let m = c && setTimeout(() => {
      m = null, d(new nt(`timeout ${c} of ms exceeded`, nt.ETIMEDOUT));
    }, c);
    const p = () => {
      u && (m && clearTimeout(m), m = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: g } = o;
    return g.unsubscribe = () => x.asap(p), g;
  }
}, B1 = function* (u, c) {
  let f = u.byteLength;
  if (f < c) {
    yield u;
    return;
  }
  let o = 0, r;
  for (; o < f; )
    r = o + c, yield u.slice(o, r), o = r;
}, j1 = async function* (u, c) {
  for await (const f of L1(u))
    yield* B1(f, c);
}, L1 = async function* (u) {
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
}, am = (u, c, f, o) => {
  const r = j1(u, c);
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
        let A = b.byteLength;
        if (f) {
          let U = d += A;
          f(U);
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
}, um = 64 * 1024, { isFunction: Ti } = x, q1 = (({ Request: u, Response: c }) => ({
  Request: u,
  Response: c
}))(x.global), {
  ReadableStream: im,
  TextEncoder: cm
} = x.global, fm = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, Y1 = (u) => {
  u = x.merge.call({
    skipUndefined: !0
  }, q1, u);
  const { fetch: c, Request: f, Response: o } = u, r = c ? Ti(c) : typeof fetch == "function", d = Ti(f), m = Ti(o);
  if (!r)
    return !1;
  const p = r && Ti(im), g = r && (typeof cm == "function" ? /* @__PURE__ */ ((z) => (j) => z.encode(j))(new cm()) : async (z) => new Uint8Array(await new f(z).arrayBuffer())), y = d && p && fm(() => {
    let z = !1;
    const j = new f(te.origin, {
      body: new im(),
      method: "POST",
      get duplex() {
        return z = !0, "half";
      }
    }).headers.has("Content-Type");
    return z && !j;
  }), b = m && p && fm(() => x.isReadableStream(new o("").body)), A = {
    stream: b && ((z) => z.body)
  };
  r && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((z) => {
    !A[z] && (A[z] = (j, M) => {
      let Q = j && j[z];
      if (Q)
        return Q.call(j);
      throw new nt(`Response type '${z}' is not supported`, nt.ERR_NOT_SUPPORT, M);
    });
  });
  const U = async (z) => {
    if (z == null)
      return 0;
    if (x.isBlob(z))
      return z.size;
    if (x.isSpecCompliantForm(z))
      return (await new f(te.origin, {
        method: "POST",
        body: z
      }).arrayBuffer()).byteLength;
    if (x.isArrayBufferView(z) || x.isArrayBuffer(z))
      return z.byteLength;
    if (x.isURLSearchParams(z) && (z = z + ""), x.isString(z))
      return (await g(z)).byteLength;
  }, q = async (z, j) => {
    const M = x.toFiniteNumber(z.getContentLength());
    return M ?? U(j);
  };
  return async (z) => {
    let {
      url: j,
      method: M,
      data: Q,
      signal: V,
      cancelToken: J,
      timeout: tt,
      onDownloadProgress: at,
      onUploadProgress: vt,
      responseType: P,
      headers: $,
      withCredentials: ht = "same-origin",
      fetchOptions: Dt
    } = ty(z), Ye = c || fetch;
    P = P ? (P + "").toLowerCase() : "text";
    let Vt = H1([V, J && J.toAbortSignal()], tt), It = null;
    const ne = Vt && Vt.unsubscribe && (() => {
      Vt.unsubscribe();
    });
    let ae;
    try {
      if (vt && y && M !== "get" && M !== "head" && (ae = await q($, Q)) !== 0) {
        let Mt = new f(j, {
          method: "POST",
          body: Q,
          duplex: "half"
        }), E;
        if (x.isFormData(Q) && (E = Mt.headers.get("content-type")) && $.setContentType(E), Mt.body) {
          const [B, X] = em(
            ae,
            Ci(lm(vt))
          );
          Q = am(Mt.body, um, B, X);
        }
      }
      x.isString(ht) || (ht = ht ? "include" : "omit");
      const Y = d && "credentials" in f.prototype, L = {
        ...Dt,
        signal: Vt,
        method: M.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: Q,
        duplex: "half",
        credentials: Y ? ht : void 0
      };
      It = d && new f(j, L);
      let G = await (d ? Ye(It, Dt) : Ye(j, L));
      const mt = b && (P === "stream" || P === "response");
      if (b && (at || mt && ne)) {
        const Mt = {};
        ["status", "statusText", "headers"].forEach((K) => {
          Mt[K] = G[K];
        });
        const E = x.toFiniteNumber(G.headers.get("content-length")), [B, X] = at && em(
          E,
          Ci(lm(at), !0)
        ) || [];
        G = new o(
          am(G.body, um, B, () => {
            X && X(), ne && ne();
          }),
          Mt
        );
      }
      P = P || "text";
      let Ot = await A[x.findKey(A, P) || "text"](G, z);
      return !mt && ne && ne(), await new Promise((Mt, E) => {
        Im(Mt, E, {
          data: Ot,
          headers: he.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: z,
          request: It
        });
      });
    } catch (Y) {
      throw ne && ne(), Y && Y.name === "TypeError" && /Load failed|fetch/i.test(Y.message) ? Object.assign(
        new nt("Network Error", nt.ERR_NETWORK, z, It),
        {
          cause: Y.cause || Y
        }
      ) : nt.from(Y, Y && Y.code, z, It);
    }
  };
}, G1 = /* @__PURE__ */ new Map(), ey = (u) => {
  let c = u && u.env || {};
  const { fetch: f, Request: o, Response: r } = c, d = [
    o,
    r,
    f
  ];
  let m = d.length, p = m, g, y, b = G1;
  for (; p--; )
    g = d[p], y = b.get(g), y === void 0 && b.set(g, y = p ? /* @__PURE__ */ new Map() : Y1(c)), b = y;
  return y;
};
ey();
const Cr = {
  http: a1,
  xhr: w1,
  fetch: {
    get: ey
  }
};
x.forEach(Cr, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const rm = (u) => `- ${u}`, X1 = (u) => x.isFunction(u) || u === null || u === !1;
function Q1(u, c) {
  u = x.isArray(u) ? u : [u];
  const { length: f } = u;
  let o, r;
  const d = {};
  for (let m = 0; m < f; m++) {
    o = u[m];
    let p;
    if (r = o, !X1(o) && (r = Cr[(p = String(o)).toLowerCase()], r === void 0))
      throw new nt(`Unknown adapter '${p}'`);
    if (r && (x.isFunction(r) || (r = r.get(c))))
      break;
    d[p || "#" + m] = r;
  }
  if (!r) {
    const m = Object.entries(d).map(
      ([g, y]) => `adapter ${g} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = f ? m.length > 1 ? `since :
` + m.map(rm).join(`
`) : " " + rm(m[0]) : "as no adapter specified";
    throw new nt(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return r;
}
const ly = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Q1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Cr
};
function hr(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Fn(null, u);
}
function om(u) {
  return hr(u), u.headers = he.from(u.headers), u.data = dr.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), ly.getAdapter(u.adapter || lu.adapter, u)(u).then(function(o) {
    return hr(u), o.data = dr.call(
      u,
      u.transformResponse,
      o
    ), o.headers = he.from(o.headers), o;
  }, function(o) {
    return Wm(o) || (hr(u), o && o.response && (o.response.data = dr.call(
      u,
      u.transformResponse,
      o.response
    ), o.response.headers = he.from(o.response.headers))), Promise.reject(o);
  });
}
const ny = "1.13.2", Bi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  Bi[u] = function(o) {
    return typeof o === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const sm = {};
Bi.transitional = function(c, f, o) {
  function r(d, m) {
    return "[Axios v" + ny + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, p) => {
    if (c === !1)
      throw new nt(
        r(m, " has been removed" + (f ? " in " + f : "")),
        nt.ERR_DEPRECATED
      );
    return f && !sm[m] && (sm[m] = !0, console.warn(
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
function V1(u, c, f) {
  if (typeof u != "object")
    throw new nt("options must be an object", nt.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(u);
  let r = o.length;
  for (; r-- > 0; ) {
    const d = o[r], m = c[d];
    if (m) {
      const p = u[d], g = p === void 0 || m(p, d, u);
      if (g !== !0)
        throw new nt("option " + d + " must be " + g, nt.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (f !== !0)
      throw new nt("Unknown option " + d, nt.ERR_BAD_OPTION);
  }
}
const zi = {
  assertOptions: V1,
  validators: Bi
}, Ze = zi.validators;
let an = class {
  constructor(c) {
    this.defaults = c || {}, this.interceptors = {
      request: new Ph(),
      response: new Ph()
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
    }, !1), r != null && (x.isFunction(r) ? f.paramsSerializer = {
      serialize: r
    } : zi.assertOptions(r, {
      encode: Ze.function,
      serialize: Ze.function
    }, !0)), f.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? f.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : f.allowAbsoluteUrls = !0), zi.assertOptions(f, {
      baseUrl: Ze.spelling("baseURL"),
      withXsrfToken: Ze.spelling("withXSRFToken")
    }, !0), f.method = (f.method || this.defaults.method || "get").toLowerCase();
    let m = d && x.merge(
      d.common,
      d[f.method]
    );
    d && x.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (z) => {
        delete d[z];
      }
    ), f.headers = he.concat(m, d);
    const p = [];
    let g = !0;
    this.interceptors.request.forEach(function(j) {
      typeof j.runWhen == "function" && j.runWhen(f) === !1 || (g = g && j.synchronous, p.unshift(j.fulfilled, j.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let b, A = 0, U;
    if (!g) {
      const z = [om.bind(this), void 0];
      for (z.unshift(...p), z.push(...y), U = z.length, b = Promise.resolve(f); A < U; )
        b = b.then(z[A++], z[A++]);
      return b;
    }
    U = p.length;
    let q = f;
    for (; A < U; ) {
      const z = p[A++], j = p[A++];
      try {
        q = z(q);
      } catch (M) {
        j.call(this, M);
        break;
      }
    }
    try {
      b = om.call(this, q);
    } catch (z) {
      return Promise.reject(z);
    }
    for (A = 0, U = y.length; A < U; )
      b = b.then(y[A++], y[A++]);
    return b;
  }
  getUri(c) {
    c = un(this.defaults, c);
    const f = Pm(c.baseURL, c.url, c.allowAbsoluteUrls);
    return km(f, c.params, c.paramsSerializer);
  }
};
x.forEach(["delete", "get", "head", "options"], function(c) {
  an.prototype[c] = function(f, o) {
    return this.request(un(o || {}, {
      method: c,
      url: f,
      data: (o || {}).data
    }));
  };
});
x.forEach(["post", "put", "patch"], function(c) {
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
let Z1 = class ay {
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
      token: new ay(function(r) {
        c = r;
      }),
      cancel: c
    };
  }
};
function K1(u) {
  return function(f) {
    return u.apply(null, f);
  };
}
function J1(u) {
  return x.isObject(u) && u.isAxiosError === !0;
}
const br = {
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
Object.entries(br).forEach(([u, c]) => {
  br[c] = u;
});
function uy(u) {
  const c = new an(u), f = Bm(an.prototype.request, c);
  return x.extend(f, an.prototype, c, { allOwnKeys: !0 }), x.extend(f, c, null, { allOwnKeys: !0 }), f.create = function(r) {
    return uy(un(u, r));
  }, f;
}
const Lt = uy(lu);
Lt.Axios = an;
Lt.CanceledError = Fn;
Lt.CancelToken = Z1;
Lt.isCancel = Wm;
Lt.VERSION = ny;
Lt.toFormData = Hi;
Lt.AxiosError = nt;
Lt.Cancel = Lt.CanceledError;
Lt.all = function(c) {
  return Promise.all(c);
};
Lt.spread = K1;
Lt.isAxiosError = J1;
Lt.mergeConfig = un;
Lt.AxiosHeaders = he;
Lt.formToJSON = (u) => Fm(x.isHTMLForm(u) ? new FormData(u) : u);
Lt.getAdapter = ly.getAdapter;
Lt.HttpStatusCode = br;
Lt.default = Lt;
const {
  Axios: ib,
  AxiosError: cb,
  CanceledError: fb,
  isCancel: rb,
  CancelToken: ob,
  VERSION: sb,
  all: db,
  Cancel: hb,
  isAxiosError: mb,
  spread: yb,
  toFormData: pb,
  AxiosHeaders: vb,
  HttpStatusCode: gb,
  formToJSON: bb,
  getAdapter: Sb,
  mergeConfig: Eb
} = Lt, k1 = "https://dev-demo-env.colibricore.io", $1 = (u) => {
  const c = u.startsWith("/") ? u : `/${u}`;
  return `${k1}${c}`;
}, F1 = async (u, c) => {
  const f = $1("api/auth"), o = { username: u, password: c };
  try {
    return (await Lt.post(f, o)).data;
  } catch (r) {
    throw console.error("Error during auth login:", r), r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.message ? new Error(r.response.data.message) : r.response?.status === 401 ? new Error("Invalid credentials") : r.message ? new Error(r.message) : new Error("Authentication failed");
  }
};
function W1(u, c) {
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
const I1 = (u) => {
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
function P1() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const c = u.split(".");
  return c.length >= 2 ? "." + c.slice(-2).join(".") : "";
}
function dm(u, c, f) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + f);
  const r = P1(), d = r ? `; domain=${r}` : "", m = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${u}=${encodeURIComponent(c)}; expires=${o.toUTCString()}; path=/${d}${m}; SameSite=Lax`;
}
const tb = ({
  onSuccess: u,
  onError: c,
  onClose: f,
  title: o = "Continue to login",
  subtitle: r = "Continue by signing in."
}) => {
  const [d, m] = D.useState(""), [p, g] = D.useState(""), [y, b] = D.useState(!1), [A, U] = D.useState(!1), [q, z] = D.useState(null), [j, M] = D.useState(""), [Q, V] = D.useState(!0), J = D.useRef(null);
  D.useEffect(() => {
    if (p) {
      const P = W1(p);
      z(P);
    } else
      z(null);
  }, [p]);
  const tt = q ? q.length && q.upper && q.lower && q.number && q.noSpaces && q.noTriple && q.special : !1;
  D.useEffect(() => {
    const P = ($) => {
      $.key === "Escape" && f();
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [f]);
  const at = (P) => {
    P.target === J.current && f();
  }, vt = async (P) => {
    if (P.preventDefault(), !d || !p) {
      M("Please enter both username and password"), c("Please enter both username and password");
      return;
    }
    b(!0), M("");
    try {
      const { tokens: $ } = await F1(d, p);
      if ($.access_token) {
        const ht = gg($.access_token), Dt = (ht.exp || 0) - Math.floor(Date.now() / 1e3);
        dm("access_token", $.access_token, Dt), ht.x_credentials && dm("X-Credential", ht.x_credentials, Dt), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("decoded", JSON.stringify(ht) || ""), $.refresh_token && localStorage.setItem("refresh_token", $.refresh_token);
      }
      u($);
    } catch ($) {
      console.error("[EmbeddedLogin] Login failed:", $);
      const ht = $ instanceof Error ? $.message : "Authentication failed";
      M(ht), c(ht);
    } finally {
      b(!1);
    }
  };
  return /* @__PURE__ */ W.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-[2000]! p-4",
      ref: J,
      onMouseDown: at,
      children: /* @__PURE__ */ W.jsxs("div", { className: "bg-white! rounded-lg! shadow-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ W.jsx(
          "button",
          {
            onClick: f,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! ",
            type: "button",
            children: /* @__PURE__ */ W.jsx("svg", { className: "w-6! h-6!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ W.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ W.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ W.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
          /* @__PURE__ */ W.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: r })
        ] }),
        /* @__PURE__ */ W.jsxs("form", { onSubmit: vt, className: "space-y-2!", children: [
          /* @__PURE__ */ W.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
            /* @__PURE__ */ W.jsx("label", { htmlFor: "username", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Email Address or Username" }),
            /* @__PURE__ */ W.jsx(
              kh,
              {
                id: "username",
                type: "text",
                value: d,
                onChange: (P) => m(P.target.value),
                placeholder: "Enter email or username",
                disabled: y,
                className: "w-full!",
                autoComplete: "username"
              }
            )
          ] }),
          /* @__PURE__ */ W.jsxs("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: [
            /* @__PURE__ */ W.jsx("label", { htmlFor: "password", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Password" }),
            /* @__PURE__ */ W.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ W.jsx(
              kh,
              {
                id: "password",
                type: A ? "text" : "password",
                value: p,
                onChange: (P) => {
                  g(P.target.value), M("");
                },
                placeholder: "Enter Password...",
                disabled: y,
                className: "w-full!",
                autoComplete: "current-password",
                error: j,
                endIcon: /* @__PURE__ */ W.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => U(!A),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: A ? /* @__PURE__ */ W.jsx("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ W.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) }) : /* @__PURE__ */ W.jsxs("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ W.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                      /* @__PURE__ */ W.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                    ] })
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ W.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ W.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ W.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: Q,
                  onChange: (P) => V(P.target.checked),
                  className: "mr-2! rounded! border-gray-300!"
                }
              ),
              /* @__PURE__ */ W.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            !1
          ] }),
          /* @__PURE__ */ W.jsx(
            Hm,
            {
              type: "submit",
              disabled: y || !d || !p || !tt || !Q,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
              children: y ? /* @__PURE__ */ W.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ W.jsxs("svg", { className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ W.jsx("circle", { className: "opacity-25!", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ W.jsx("path", { className: "opacity-75!", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
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
}, eb = (u) => {
  const { authority: c, subsidiary: f, callbackUrl: o, onRedirect: r } = u, [d, m] = D.useState(!1), [p, g] = D.useState(!1);
  D.useEffect(() => {
    if (u.redirectUrl) {
      const U = I1(u.redirectUrl);
      g(U);
    }
  }, [u.redirectUrl]), D.useEffect(() => {
    c && localStorage.setItem("authority", c), f && localStorage.setItem("subsidiary", f), o ? localStorage.setItem("callbackUrl", o) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [c, f, o]);
  const y = () => {
    m(!0);
  }, b = (U) => {
    m(!1), g(!0);
    const q = u.redirectUrl || o;
    r && r(q, U), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, A = (U) => {
    console.log("[App] Embedded login error:", U);
  };
  return /* @__PURE__ */ W.jsx(Cv, { children: /* @__PURE__ */ W.jsx(Cm, { path: "*", element: /* @__PURE__ */ W.jsxs("div", { className: "max-w-7xl! mx-auto! p-8! text-center!", children: [
    p && !1,
    !p && /* @__PURE__ */ W.jsx(W.Fragment, { children: d ? /* @__PURE__ */ W.jsx(
      tb,
      {
        onSuccess: b,
        onError: A,
        onClose: () => m(!1),
        authority: c,
        title: u.loginTitle,
        subtitle: u.loginSubtitle
      }
    ) : /* @__PURE__ */ W.jsx(
      Hm,
      {
        label: "Login with Colibri Identity",
        onClick: y,
        disabled: !1
      }
    ) })
  ] }) }) });
}, lb = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_BASE_URL: "https://dev-demo-env.colibricore.io", VITE_RENDER_MODE: "WEBCOMPONENT", VITE_WIDGET_LOGIN_URL: "https://dev-idb.colibrirealestate.com/widget/loginprepare?targetUrl=%2Froute%2Fcheckoutsignin&returnUrl=%2Fwp&idpsource=local5173widget" }, nb = "WEBCOMPONENT";
console.log("[main.tsx] VITE_RENDER_MODE:", nb);
console.log("[main.tsx] All env vars:", lb);
{
  class u extends HTMLElement {
    root;
    mountPoint;
    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle", "loginTitle", "loginSubtitle"];
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
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        onRedirect: this.handleRedirect
      };
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = yg.createRoot(this.mountPoint));
      const f = this.getProps();
      this.root.render(
        /* @__PURE__ */ W.jsx(Pv, { children: /* @__PURE__ */ W.jsx(D.StrictMode, { children: /* @__PURE__ */ W.jsx(eb, { ...f }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
