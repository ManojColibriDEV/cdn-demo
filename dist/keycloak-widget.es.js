
(function() {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode("@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.visible{visibility:visible}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-\\[2000\\]\\!{z-index:2000!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#17a2b8\\]{border-color:#17a2b8}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-red-200{border-color:var(--color-red-200)}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#17a2b8\\]{background-color:#17a2b8}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-red-50{background-color:var(--color-red-50)}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#17a2b8\\]{color:#17a2b8}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-blue-600{color:var(--color-blue-600)}.text-blue-600\\!{color:var(--color-blue-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#138496\\]:hover{background-color:#138496}.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-blue-700\\!:hover{color:var(--color-blue-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#17a2b8\\]:enabled{background-color:#17a2b8}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}\n"));
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector', e);
  }
})();
var lf = { exports: {} }, Za = {};
var Mh;
function Np() {
  if (Mh) return Za;
  Mh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(s, f, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), f.key !== void 0 && (h = "" + f.key), "key" in f) {
      d = {};
      for (var p in f)
        p !== "key" && (d[p] = f[p]);
    } else d = f;
    return f = d.ref, {
      $$typeof: u,
      type: s,
      key: h,
      ref: f !== void 0 ? f : null,
      props: d
    };
  }
  return Za.Fragment = c, Za.jsx = r, Za.jsxs = r, Za;
}
var wh;
function Dp() {
  return wh || (wh = 1, lf.exports = Np()), lf.exports;
}
var q = Dp(), nf = { exports: {} }, te = {}, jh;
function Up() {
  if (jh) return te;
  jh = 1;
  var u = {};
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), A = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), V = Symbol.iterator;
  function O(E) {
    return E === null || typeof E != "object" ? null : (E = V && E[V] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var H = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, U = Object.assign, Z = {};
  function Y(E, B, Q) {
    this.props = E, this.context = B, this.refs = Z, this.updater = Q || H;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, Y.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function J() {
  }
  J.prototype = Y.prototype;
  function ee(E, B, Q) {
    this.props = E, this.context = B, this.refs = Z, this.updater = Q || H;
  }
  var P = ee.prototype = new J();
  P.constructor = ee, U(P, Y.prototype), P.isPureReactComponent = !0;
  var ie = Array.isArray;
  function ce() {
  }
  var I = { H: null, A: null, T: null, S: null }, be = Object.prototype.hasOwnProperty;
  function re(E, B, Q) {
    var k = Q.ref;
    return {
      $$typeof: c,
      type: E,
      key: B,
      ref: k !== void 0 ? k : null,
      props: Q
    };
  }
  function Ne(E, B) {
    return re(E.type, B, E.props);
  }
  function le(E) {
    return typeof E == "object" && E !== null && E.$$typeof === c;
  }
  function _e(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(Q) {
      return B[Q];
    });
  }
  var $e = /\/+/g;
  function ut(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? _e("" + E.key) : B.toString(36);
  }
  function G(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ce, ce) : (E.status = "pending", E.then(
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
  function L(E, B, Q, k, fe) {
    var se = typeof E;
    (se === "undefined" || se === "boolean") && (E = null);
    var Ee = !1;
    if (E === null) Ee = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          Ee = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case c:
            case r:
              Ee = !0;
              break;
            case A:
              return Ee = E._init, L(
                Ee(E._payload),
                B,
                Q,
                k,
                fe
              );
          }
      }
    if (Ee)
      return fe = fe(E), Ee = k === "" ? "." + ut(E, 0) : k, ie(fe) ? (Q = "", Ee != null && (Q = Ee.replace($e, "$&/") + "/"), L(fe, B, Q, "", function(Pn) {
        return Pn;
      })) : fe != null && (le(fe) && (fe = Ne(
        fe,
        Q + (fe.key == null || E && E.key === fe.key ? "" : ("" + fe.key).replace(
          $e,
          "$&/"
        ) + "/") + Ee
      )), B.push(fe)), 1;
    Ee = 0;
    var nt = k === "" ? "." : k + ":";
    if (ie(E))
      for (var Le = 0; Le < E.length; Le++)
        k = E[Le], se = nt + ut(k, Le), Ee += L(
          k,
          B,
          Q,
          se,
          fe
        );
    else if (Le = O(E), typeof Le == "function")
      for (E = Le.call(E), Le = 0; !(k = E.next()).done; )
        k = k.value, se = nt + ut(k, Le++), Ee += L(
          k,
          B,
          Q,
          se,
          fe
        );
    else if (se === "object") {
      if (typeof E.then == "function")
        return L(
          G(E),
          B,
          Q,
          k,
          fe
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Ee;
  }
  function X(E, B, Q) {
    if (E == null) return E;
    var k = [], fe = 0;
    return L(E, k, "", "", function(se) {
      return B.call(Q, se, fe++);
    }), k;
  }
  function pe(E) {
    if (E._status === -1) {
      var B = E._result;
      B = B(), B.then(
        function(Q) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = Q);
        },
        function(Q) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = Q);
        }
      ), E._status === -1 && (E._status = 0, E._result = B);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ze = typeof reportError == "function" ? reportError : function(E) {
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
  }, je = {
    map: X,
    forEach: function(E, B, Q) {
      X(
        E,
        function() {
          B.apply(this, arguments);
        },
        Q
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
      if (!le(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return te.Activity = D, te.Children = je, te.Component = Y, te.Fragment = s, te.Profiler = d, te.PureComponent = ee, te.StrictMode = f, te.Suspense = y, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return I.H.useMemoCache(E);
    }
  }, te.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, te.cacheSignal = function() {
    return null;
  }, te.cloneElement = function(E, B, Q) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var k = U({}, E.props), fe = E.key;
    if (B != null)
      for (se in B.key !== void 0 && (fe = "" + B.key), B)
        !be.call(B, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && B.ref === void 0 || (k[se] = B[se]);
    var se = arguments.length - 2;
    if (se === 1) k.children = Q;
    else if (1 < se) {
      for (var Ee = Array(se), nt = 0; nt < se; nt++)
        Ee[nt] = arguments[nt + 2];
      k.children = Ee;
    }
    return re(E.type, fe, k);
  }, te.createContext = function(E) {
    return E = {
      $$typeof: p,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, te.createElement = function(E, B, Q) {
    var k, fe = {}, se = null;
    if (B != null)
      for (k in B.key !== void 0 && (se = "" + B.key), B)
        be.call(B, k) && k !== "key" && k !== "__self" && k !== "__source" && (fe[k] = B[k]);
    var Ee = arguments.length - 2;
    if (Ee === 1) fe.children = Q;
    else if (1 < Ee) {
      for (var nt = Array(Ee), Le = 0; Le < Ee; Le++)
        nt[Le] = arguments[Le + 2];
      fe.children = nt;
    }
    if (E && E.defaultProps)
      for (k in Ee = E.defaultProps, Ee)
        fe[k] === void 0 && (fe[k] = Ee[k]);
    return re(E, se, fe);
  }, te.createRef = function() {
    return { current: null };
  }, te.forwardRef = function(E) {
    return { $$typeof: v, render: E };
  }, te.isValidElement = le, te.lazy = function(E) {
    return {
      $$typeof: A,
      _payload: { _status: -1, _result: E },
      _init: pe
    };
  }, te.memo = function(E, B) {
    return {
      $$typeof: b,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, te.startTransition = function(E) {
    var B = I.T, Q = {};
    I.T = Q;
    try {
      var k = E(), fe = I.S;
      fe !== null && fe(Q, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(ce, ze);
    } catch (se) {
      ze(se);
    } finally {
      B !== null && Q.types !== null && (B.types = Q.types), I.T = B;
    }
  }, te.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, te.use = function(E) {
    return I.H.use(E);
  }, te.useActionState = function(E, B, Q) {
    return I.H.useActionState(E, B, Q);
  }, te.useCallback = function(E, B) {
    return I.H.useCallback(E, B);
  }, te.useContext = function(E) {
    return I.H.useContext(E);
  }, te.useDebugValue = function() {
  }, te.useDeferredValue = function(E, B) {
    return I.H.useDeferredValue(E, B);
  }, te.useEffect = function(E, B) {
    return I.H.useEffect(E, B);
  }, te.useEffectEvent = function(E) {
    return I.H.useEffectEvent(E);
  }, te.useId = function() {
    return I.H.useId();
  }, te.useImperativeHandle = function(E, B, Q) {
    return I.H.useImperativeHandle(E, B, Q);
  }, te.useInsertionEffect = function(E, B) {
    return I.H.useInsertionEffect(E, B);
  }, te.useLayoutEffect = function(E, B) {
    return I.H.useLayoutEffect(E, B);
  }, te.useMemo = function(E, B) {
    return I.H.useMemo(E, B);
  }, te.useOptimistic = function(E, B) {
    return I.H.useOptimistic(E, B);
  }, te.useReducer = function(E, B, Q) {
    return I.H.useReducer(E, B, Q);
  }, te.useRef = function(E) {
    return I.H.useRef(E);
  }, te.useState = function(E) {
    return I.H.useState(E);
  }, te.useSyncExternalStore = function(E, B, Q) {
    return I.H.useSyncExternalStore(
      E,
      B,
      Q
    );
  }, te.useTransition = function() {
    return I.H.useTransition();
  }, te.version = "19.2.3", te;
}
var Bh;
function Ef() {
  return Bh || (Bh = 1, nf.exports = Up()), nf.exports;
}
var C = Ef();
var Hh = "popstate";
function Mp(u = {}) {
  function c(s, f) {
    let { pathname: d, search: h, hash: p } = s.location;
    return yf(
      "",
      { pathname: d, search: h, hash: p },
      // state defaults to `null` because `window.history.state` does
      f.state && f.state.usr || null,
      f.state && f.state.key || "default"
    );
  }
  function r(s, f) {
    return typeof f == "string" ? f : Fa(f);
  }
  return jp(
    c,
    r,
    null,
    u
  );
}
function we(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function qt(u, c) {
  if (!u) {
    typeof console < "u" && console.warn(c);
    try {
      throw new Error(c);
    } catch {
    }
  }
}
function wp() {
  return Math.random().toString(36).substring(2, 10);
}
function Lh(u, c) {
  return {
    usr: u.state,
    key: u.key,
    idx: c
  };
}
function yf(u, c, r = null, s) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof c == "string" ? kn(c) : c,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: c && c.key || s || wp()
  };
}
function Fa({
  pathname: u = "/",
  search: c = "",
  hash: r = ""
}) {
  return c && c !== "?" && (u += c.charAt(0) === "?" ? c : "?" + c), r && r !== "#" && (u += r.charAt(0) === "#" ? r : "#" + r), u;
}
function kn(u) {
  let c = {};
  if (u) {
    let r = u.indexOf("#");
    r >= 0 && (c.hash = u.substring(r), u = u.substring(0, r));
    let s = u.indexOf("?");
    s >= 0 && (c.search = u.substring(s), u = u.substring(0, s)), u && (c.pathname = u);
  }
  return c;
}
function jp(u, c, r, s = {}) {
  let { window: f = document.defaultView, v5Compat: d = !1 } = s, h = f.history, p = "POP", v = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function A() {
    p = "POP";
    let U = b(), Z = U == null ? null : U - y;
    y = U, v && v({ action: p, location: H.location, delta: Z });
  }
  function D(U, Z) {
    p = "PUSH";
    let Y = yf(H.location, U, Z);
    y = b() + 1;
    let J = Lh(Y, y), ee = H.createHref(Y);
    try {
      h.pushState(J, "", ee);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError")
        throw P;
      f.location.assign(ee);
    }
    d && v && v({ action: p, location: H.location, delta: 1 });
  }
  function V(U, Z) {
    p = "REPLACE";
    let Y = yf(H.location, U, Z);
    y = b();
    let J = Lh(Y, y), ee = H.createHref(Y);
    h.replaceState(J, "", ee), d && v && v({ action: p, location: H.location, delta: 0 });
  }
  function O(U) {
    return Bp(U);
  }
  let H = {
    get action() {
      return p;
    },
    get location() {
      return u(f, h);
    },
    listen(U) {
      if (v)
        throw new Error("A history only accepts one active listener");
      return f.addEventListener(Hh, A), v = U, () => {
        f.removeEventListener(Hh, A), v = null;
      };
    },
    createHref(U) {
      return c(f, U);
    },
    createURL: O,
    encodeLocation(U) {
      let Z = O(U);
      return {
        pathname: Z.pathname,
        search: Z.search,
        hash: Z.hash
      };
    },
    push: D,
    replace: V,
    go(U) {
      return h.go(U);
    }
  };
  return H;
}
function Bp(u, c = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), we(r, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : Fa(u);
  return s = s.replace(/ $/, "%20"), !c && s.startsWith("//") && (s = r + s), new URL(s, r);
}
function hm(u, c, r = "/") {
  return Hp(u, c, r, !1);
}
function Hp(u, c, r, s) {
  let f = typeof c == "string" ? kn(c) : c, d = ol(f.pathname || "/", r);
  if (d == null)
    return null;
  let h = mm(u);
  Lp(h);
  let p = null;
  for (let v = 0; p == null && v < h.length; ++v) {
    let y = $p(d);
    p = Jp(
      h[v],
      y,
      s
    );
  }
  return p;
}
function mm(u, c = [], r = [], s = "", f = !1) {
  let d = (h, p, v = f, y) => {
    let b = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: p,
      route: h
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(s) && v)
        return;
      we(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(s.length);
    }
    let A = sl([s, b.relativePath]), D = r.concat(b);
    h.children && h.children.length > 0 && (we(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${A}".`
    ), mm(
      h.children,
      c,
      D,
      A,
      v
    )), !(h.path == null && !h.index) && c.push({
      path: A,
      score: Zp(A, h.index),
      routesMeta: D
    });
  };
  return u.forEach((h, p) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, p);
    else
      for (let v of ym(h.path))
        d(h, p, !0, v);
  }), c;
}
function ym(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [r, ...s] = c, f = r.endsWith("?"), d = r.replace(/\?$/, "");
  if (s.length === 0)
    return f ? [d, ""] : [d];
  let h = ym(s.join("/")), p = [];
  return p.push(
    ...h.map(
      (v) => v === "" ? d : [d, v].join("/")
    )
  ), f && p.push(...h), p.map(
    (v) => u.startsWith("/") && v === "" ? "/" : v
  );
}
function Lp(u) {
  u.sort(
    (c, r) => c.score !== r.score ? r.score - c.score : Kp(
      c.routesMeta.map((s) => s.childrenIndex),
      r.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var qp = /^:[\w-]+$/, Yp = 3, Gp = 2, Xp = 1, Qp = 10, Vp = -2, qh = (u) => u === "*";
function Zp(u, c) {
  let r = u.split("/"), s = r.length;
  return r.some(qh) && (s += Vp), c && (s += Gp), r.filter((f) => !qh(f)).reduce(
    (f, d) => f + (qp.test(d) ? Yp : d === "" ? Xp : Qp),
    s
  );
}
function Kp(u, c) {
  return u.length === c.length && u.slice(0, -1).every((s, f) => s === c[f]) ? (
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
function Jp(u, c, r = !1) {
  let { routesMeta: s } = u, f = {}, d = "/", h = [];
  for (let p = 0; p < s.length; ++p) {
    let v = s[p], y = p === s.length - 1, b = d === "/" ? c : c.slice(d.length) || "/", A = Ci(
      { path: v.relativePath, caseSensitive: v.caseSensitive, end: y },
      b
    ), D = v.route;
    if (!A && y && r && !s[s.length - 1].route.index && (A = Ci(
      {
        path: v.relativePath,
        caseSensitive: v.caseSensitive,
        end: !1
      },
      b
    )), !A)
      return null;
    Object.assign(f, A.params), h.push({
      // TODO: Can this as be avoided?
      params: f,
      pathname: sl([d, A.pathname]),
      pathnameBase: Ip(
        sl([d, A.pathnameBase])
      ),
      route: D
    }), A.pathnameBase !== "/" && (d = sl([d, A.pathnameBase]));
  }
  return h;
}
function Ci(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [r, s] = kp(
    u.path,
    u.caseSensitive,
    u.end
  ), f = c.match(r);
  if (!f) return null;
  let d = f[0], h = d.replace(/(.)\/+$/, "$1"), p = f.slice(1);
  return {
    params: s.reduce(
      (y, { paramName: b, isOptional: A }, D) => {
        if (b === "*") {
          let O = p[D] || "";
          h = d.slice(0, d.length - O.length).replace(/(.)\/+$/, "$1");
        }
        const V = p[D];
        return A && !V ? y[b] = void 0 : y[b] = (V || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: u
  };
}
function kp(u, c = !1, r = !0) {
  qt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let s = [], f = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, p, v) => (s.push({ paramName: p, isOptional: v != null }), v ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (s.push({ paramName: "*" }), f += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? f += "\\/*$" : u !== "" && u !== "/" && (f += "(?:(?=\\/|$))"), [new RegExp(f, c ? void 0 : "i"), s];
}
function $p(u) {
  try {
    return u.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return qt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
    ), u;
  }
}
function ol(u, c) {
  if (c === "/") return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase()))
    return null;
  let r = c.endsWith("/") ? c.length - 1 : c.length, s = u.charAt(r);
  return s && s !== "/" ? null : u.slice(r) || "/";
}
var pm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Fp = (u) => pm.test(u);
function Wp(u, c = "/") {
  let {
    pathname: r,
    search: s = "",
    hash: f = ""
  } = typeof u == "string" ? kn(u) : u, d;
  if (r)
    if (Fp(r))
      d = r;
    else {
      if (r.includes("//")) {
        let h = r;
        r = r.replace(/\/\/+/g, "/"), qt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${r}`
        );
      }
      r.startsWith("/") ? d = Yh(r.substring(1), "/") : d = Yh(r, c);
    }
  else
    d = c;
  return {
    pathname: d,
    search: ev(s),
    hash: tv(f)
  };
}
function Yh(u, c) {
  let r = c.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((f) => {
    f === ".." ? r.length > 1 && r.pop() : f !== "." && r.push(f);
  }), r.length > 1 ? r.join("/") : "/";
}
function af(u, c, r, s) {
  return `Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Pp(u) {
  return u.filter(
    (c, r) => r === 0 || c.route.path && c.route.path.length > 0
  );
}
function vm(u) {
  let c = Pp(u);
  return c.map(
    (r, s) => s === c.length - 1 ? r.pathname : r.pathnameBase
  );
}
function gm(u, c, r, s = !1) {
  let f;
  typeof u == "string" ? f = kn(u) : (f = { ...u }, we(
    !f.pathname || !f.pathname.includes("?"),
    af("?", "pathname", "search", f)
  ), we(
    !f.pathname || !f.pathname.includes("#"),
    af("#", "pathname", "hash", f)
  ), we(
    !f.search || !f.search.includes("#"),
    af("#", "search", "hash", f)
  ));
  let d = u === "" || f.pathname === "", h = d ? "/" : f.pathname, p;
  if (h == null)
    p = r;
  else {
    let A = c.length - 1;
    if (!s && h.startsWith("..")) {
      let D = h.split("/");
      for (; D[0] === ".."; )
        D.shift(), A -= 1;
      f.pathname = D.join("/");
    }
    p = A >= 0 ? c[A] : "/";
  }
  let v = Wp(f, p), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && r.endsWith("/");
  return !v.pathname.endsWith("/") && (y || b) && (v.pathname += "/"), v;
}
var sl = (u) => u.join("/").replace(/\/\/+/g, "/"), Ip = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), ev = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, tv = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, lv = class {
  constructor(u, c, r, s = !1) {
    this.status = u, this.statusText = c || "", this.internal = s, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function nv(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function av(u) {
  return u.map((c) => c.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var bm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Sm(u, c) {
  let r = u;
  if (typeof r != "string" || !pm.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let s = r, f = !1;
  if (bm)
    try {
      let d = new URL(window.location.href), h = r.startsWith("//") ? new URL(d.protocol + r) : new URL(r), p = ol(h.pathname, c);
      h.origin === d.origin && p != null ? r = p + h.search + h.hash : f = !0;
    } catch {
      qt(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: s,
    isExternal: f,
    to: r
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
var uv = [
  "GET",
  ...Em
];
new Set(uv);
var $n = C.createContext(null);
$n.displayName = "DataRouter";
var Di = C.createContext(null);
Di.displayName = "DataRouterState";
var iv = C.createContext(!1), Tm = C.createContext({
  isTransitioning: !1
});
Tm.displayName = "ViewTransition";
var cv = C.createContext(
  /* @__PURE__ */ new Map()
);
cv.displayName = "Fetchers";
var rv = C.createContext(null);
rv.displayName = "Await";
var jt = C.createContext(
  null
);
jt.displayName = "Navigation";
var Wa = C.createContext(
  null
);
Wa.displayName = "Location";
var dl = C.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
dl.displayName = "Route";
var Tf = C.createContext(null);
Tf.displayName = "RouteError";
var Am = "REACT_ROUTER_ERROR", fv = "REDIRECT", sv = "ROUTE_ERROR_RESPONSE";
function ov(u) {
  if (u.startsWith(`${Am}:${fv}:{`))
    try {
      let c = JSON.parse(u.slice(28));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.location == "string" && typeof c.reloadDocument == "boolean" && typeof c.replace == "boolean")
        return c;
    } catch {
    }
}
function dv(u) {
  if (u.startsWith(
    `${Am}:${sv}:{`
  ))
    try {
      let c = JSON.parse(u.slice(40));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string")
        return new lv(
          c.status,
          c.statusText,
          c.data
        );
    } catch {
    }
}
function hv(u, { relative: c } = {}) {
  we(
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: s } = C.useContext(jt), { hash: f, pathname: d, search: h } = Ia(u, { relative: c }), p = d;
  return r !== "/" && (p = d === "/" ? r : sl([r, d])), s.createHref({ pathname: p, search: h, hash: f });
}
function Pa() {
  return C.useContext(Wa) != null;
}
function cn() {
  return we(
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), C.useContext(Wa).location;
}
var Rm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function xm(u) {
  C.useContext(jt).static || C.useLayoutEffect(u);
}
function mv() {
  let { isDataRoute: u } = C.useContext(dl);
  return u ? _v() : yv();
}
function yv() {
  we(
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = C.useContext($n), { basename: c, navigator: r } = C.useContext(jt), { matches: s } = C.useContext(dl), { pathname: f } = cn(), d = JSON.stringify(vm(s)), h = C.useRef(!1);
  return xm(() => {
    h.current = !0;
  }), C.useCallback(
    (v, y = {}) => {
      if (qt(h.current, Rm), !h.current) return;
      if (typeof v == "number") {
        r.go(v);
        return;
      }
      let b = gm(
        v,
        JSON.parse(d),
        f,
        y.relative === "path"
      );
      u == null && c !== "/" && (b.pathname = b.pathname === "/" ? c : sl([c, b.pathname])), (y.replace ? r.replace : r.push)(
        b,
        y.state,
        y
      );
    },
    [
      c,
      r,
      d,
      f,
      u
    ]
  );
}
C.createContext(null);
function Ia(u, { relative: c } = {}) {
  let { matches: r } = C.useContext(dl), { pathname: s } = cn(), f = JSON.stringify(vm(r));
  return C.useMemo(
    () => gm(
      u,
      JSON.parse(f),
      s,
      c === "path"
    ),
    [u, f, s, c]
  );
}
function pv(u, c) {
  return Om(u, c);
}
function Om(u, c, r, s, f) {
  we(
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = C.useContext(jt), { matches: h } = C.useContext(dl), p = h[h.length - 1], v = p ? p.params : {}, y = p ? p.pathname : "/", b = p ? p.pathnameBase : "/", A = p && p.route;
  {
    let Y = A && A.path || "";
    zm(
      y,
      !A || Y.endsWith("*") || Y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y === "/" ? "*" : `${Y}/*`}">.`
    );
  }
  let D = cn(), V;
  if (c) {
    let Y = typeof c == "string" ? kn(c) : c;
    we(
      b === "/" || Y.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Y.pathname}" was given in the \`location\` prop.`
    ), V = Y;
  } else
    V = D;
  let O = V.pathname || "/", H = O;
  if (b !== "/") {
    let Y = b.replace(/^\//, "").split("/");
    H = "/" + O.replace(/^\//, "").split("/").slice(Y.length).join("/");
  }
  let U = hm(u, { pathname: H });
  qt(
    A || U != null,
    `No routes matched location "${V.pathname}${V.search}${V.hash}" `
  ), qt(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${V.pathname}${V.search}${V.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Z = Ev(
    U && U.map(
      (Y) => Object.assign({}, Y, {
        params: Object.assign({}, v, Y.params),
        pathname: sl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Y.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Y.pathname
        ]),
        pathnameBase: Y.pathnameBase === "/" ? b : sl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Y.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Y.pathnameBase
        ])
      })
    ),
    h,
    r,
    s,
    f
  );
  return c && Z ? /* @__PURE__ */ C.createElement(
    Wa.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...V
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    Z
  ) : Z;
}
function vv() {
  let u = Ov(), c = nv(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), r = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", f = { padding: "0.5rem", backgroundColor: s }, d = { padding: "2px 4px", backgroundColor: s }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), h = /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ C.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ C.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ C.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ C.createElement(C.Fragment, null, /* @__PURE__ */ C.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ C.createElement("h3", { style: { fontStyle: "italic" } }, c), r ? /* @__PURE__ */ C.createElement("pre", { style: f }, r) : null, h);
}
var gv = /* @__PURE__ */ C.createElement(vv, null), _m = class extends C.Component {
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
      const r = dv(u.digest);
      r && (u = r);
    }
    let c = u !== void 0 ? /* @__PURE__ */ C.createElement(dl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ C.createElement(
      Tf.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ C.createElement(bv, { error: u }, c) : c;
  }
};
_m.contextType = iv;
var uf = /* @__PURE__ */ new WeakMap();
function bv({
  children: u,
  error: c
}) {
  let { basename: r } = C.useContext(jt);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let s = ov(c.digest);
    if (s) {
      let f = uf.get(c);
      if (f) throw f;
      let d = Sm(s.location, r);
      if (bm && !uf.get(c))
        if (d.isExternal || s.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: s.replace
            })
          );
          throw uf.set(c, h), h;
        }
      return /* @__PURE__ */ C.createElement(
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
function Sv({ routeContext: u, match: c, children: r }) {
  let s = C.useContext($n);
  return s && s.static && s.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = c.route.id), /* @__PURE__ */ C.createElement(dl.Provider, { value: u }, r);
}
function Ev(u, c = [], r = null, s = null, f = null) {
  if (u == null) {
    if (!r)
      return null;
    if (r.errors)
      u = r.matches;
    else if (c.length === 0 && !r.initialized && r.matches.length > 0)
      u = r.matches;
    else
      return null;
  }
  let d = u, h = r?.errors;
  if (h != null) {
    let b = d.findIndex(
      (A) => A.route.id && h?.[A.route.id] !== void 0
    );
    we(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, b + 1)
    );
  }
  let p = !1, v = -1;
  if (r)
    for (let b = 0; b < d.length; b++) {
      let A = d[b];
      if ((A.route.HydrateFallback || A.route.hydrateFallbackElement) && (v = b), A.route.id) {
        let { loaderData: D, errors: V } = r, O = A.route.loader && !D.hasOwnProperty(A.route.id) && (!V || V[A.route.id] === void 0);
        if (A.route.lazy || O) {
          p = !0, v >= 0 ? d = d.slice(0, v + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = r && s ? (b, A) => {
    s(b, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      unstable_pattern: av(r.matches),
      errorInfo: A
    });
  } : void 0;
  return d.reduceRight(
    (b, A, D) => {
      let V, O = !1, H = null, U = null;
      r && (V = h && A.route.id ? h[A.route.id] : void 0, H = A.route.errorElement || gv, p && (v < 0 && D === 0 ? (zm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), O = !0, U = null) : v === D && (O = !0, U = A.route.hydrateFallbackElement || null)));
      let Z = c.concat(d.slice(0, D + 1)), Y = () => {
        let J;
        return V ? J = H : O ? J = U : A.route.Component ? J = /* @__PURE__ */ C.createElement(A.route.Component, null) : A.route.element ? J = A.route.element : J = b, /* @__PURE__ */ C.createElement(
          Sv,
          {
            match: A,
            routeContext: {
              outlet: b,
              matches: Z,
              isDataRoute: r != null
            },
            children: J
          }
        );
      };
      return r && (A.route.ErrorBoundary || A.route.errorElement || D === 0) ? /* @__PURE__ */ C.createElement(
        _m,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: H,
          error: V,
          children: Y(),
          routeContext: { outlet: null, matches: Z, isDataRoute: !0 },
          onError: y
        }
      ) : Y();
    },
    null
  );
}
function Af(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tv(u) {
  let c = C.useContext($n);
  return we(c, Af(u)), c;
}
function Av(u) {
  let c = C.useContext(Di);
  return we(c, Af(u)), c;
}
function Rv(u) {
  let c = C.useContext(dl);
  return we(c, Af(u)), c;
}
function Rf(u) {
  let c = Rv(u), r = c.matches[c.matches.length - 1];
  return we(
    r.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function xv() {
  return Rf(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ov() {
  let u = C.useContext(Tf), c = Av(
    "useRouteError"
    /* UseRouteError */
  ), r = Rf(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : c.errors?.[r];
}
function _v() {
  let { router: u } = Tv(
    "useNavigate"
    /* UseNavigateStable */
  ), c = Rf(
    "useNavigate"
    /* UseNavigateStable */
  ), r = C.useRef(!1);
  return xm(() => {
    r.current = !0;
  }), C.useCallback(
    async (f, d = {}) => {
      qt(r.current, Rm), r.current && (typeof f == "number" ? await u.navigate(f) : await u.navigate(f, { fromRouteId: c, ...d }));
    },
    [u, c]
  );
}
var Gh = {};
function zm(u, c, r) {
  !c && !Gh[u] && (Gh[u] = !0, qt(!1, r));
}
C.memo(zv);
function zv({
  routes: u,
  future: c,
  state: r,
  onError: s
}) {
  return Om(u, void 0, r, s, c);
}
function Cm(u) {
  we(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Cv({
  basename: u = "/",
  children: c = null,
  location: r,
  navigationType: s = "POP",
  navigator: f,
  static: d = !1,
  unstable_useTransitions: h
}) {
  we(
    !Pa(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = u.replace(/^\/*/, "/"), v = C.useMemo(
    () => ({
      basename: p,
      navigator: f,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [p, f, d, h]
  );
  typeof r == "string" && (r = kn(r));
  let {
    pathname: y = "/",
    search: b = "",
    hash: A = "",
    state: D = null,
    key: V = "default"
  } = r, O = C.useMemo(() => {
    let H = ol(y, p);
    return H == null ? null : {
      location: {
        pathname: H,
        search: b,
        hash: A,
        state: D,
        key: V
      },
      navigationType: s
    };
  }, [p, y, b, A, D, V, s]);
  return qt(
    O != null,
    `<Router basename="${p}"> is not able to match the URL "${y}${b}${A}" because it does not start with the basename, so the <Router> won't render anything.`
  ), O == null ? null : /* @__PURE__ */ C.createElement(jt.Provider, { value: v }, /* @__PURE__ */ C.createElement(Wa.Provider, { children: c, value: O }));
}
function Nv({
  children: u,
  location: c
}) {
  return pv(pf(u), c);
}
function pf(u, c = []) {
  let r = [];
  return C.Children.forEach(u, (s, f) => {
    if (!C.isValidElement(s))
      return;
    let d = [...c, f];
    if (s.type === C.Fragment) {
      r.push.apply(
        r,
        pf(s.props.children, d)
      );
      return;
    }
    we(
      s.type === Cm,
      `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), we(
      !s.props.index || !s.props.children,
      "An index route cannot have child routes."
    );
    let h = {
      id: s.props.id || d.join("-"),
      caseSensitive: s.props.caseSensitive,
      element: s.props.element,
      Component: s.props.Component,
      index: s.props.index,
      path: s.props.path,
      middleware: s.props.middleware,
      loader: s.props.loader,
      action: s.props.action,
      hydrateFallbackElement: s.props.hydrateFallbackElement,
      HydrateFallback: s.props.HydrateFallback,
      errorElement: s.props.errorElement,
      ErrorBoundary: s.props.ErrorBoundary,
      hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
      shouldRevalidate: s.props.shouldRevalidate,
      handle: s.props.handle,
      lazy: s.props.lazy
    };
    s.props.children && (h.children = pf(
      s.props.children,
      d
    )), r.push(h);
  }), r;
}
var Ri = "get", xi = "application/x-www-form-urlencoded";
function Ui(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Dv(u) {
  return Ui(u) && u.tagName.toLowerCase() === "button";
}
function Uv(u) {
  return Ui(u) && u.tagName.toLowerCase() === "form";
}
function Mv(u) {
  return Ui(u) && u.tagName.toLowerCase() === "input";
}
function wv(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function jv(u, c) {
  return u.button === 0 && // Ignore everything but left clicks
  (!c || c === "_self") && // Let browser handle "target=_blank" etc.
  !wv(u);
}
var Ti = null;
function Bv() {
  if (Ti === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ti = !1;
    } catch {
      Ti = !0;
    }
  return Ti;
}
var Hv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function cf(u) {
  return u != null && !Hv.has(u) ? (qt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xi}"`
  ), null) : u;
}
function Lv(u, c) {
  let r, s, f, d, h;
  if (Uv(u)) {
    let p = u.getAttribute("action");
    s = p ? ol(p, c) : null, r = u.getAttribute("method") || Ri, f = cf(u.getAttribute("enctype")) || xi, d = new FormData(u);
  } else if (Dv(u) || Mv(u) && (u.type === "submit" || u.type === "image")) {
    let p = u.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = u.getAttribute("formaction") || p.getAttribute("action");
    if (s = v ? ol(v, c) : null, r = u.getAttribute("formmethod") || p.getAttribute("method") || Ri, f = cf(u.getAttribute("formenctype")) || cf(p.getAttribute("enctype")) || xi, d = new FormData(p, u), !Bv()) {
      let { name: y, type: b, value: A } = u;
      if (b === "image") {
        let D = y ? `${y}.` : "";
        d.append(`${D}x`, "0"), d.append(`${D}y`, "0");
      } else y && d.append(y, A);
    }
  } else {
    if (Ui(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = Ri, s = null, f = xi, h = u;
  }
  return d && f === "text/plain" && (h = d, d = void 0), { action: s, method: r.toLowerCase(), encType: f, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function xf(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function qv(u, c, r) {
  let s = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return s.pathname === "/" ? s.pathname = `_root.${r}` : c && ol(s.pathname, c) === "/" ? s.pathname = `${c.replace(/\/$/, "")}/_root.${r}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${r}`, s;
}
async function Yv(u, c) {
  if (u.id in c)
    return c[u.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      u.module
    );
    return c[u.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${u.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Gv(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Xv(u, c, r) {
  let s = await Promise.all(
    u.map(async (f) => {
      let d = c.routes[f.route.id];
      if (d) {
        let h = await Yv(d, r);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Kv(
    s.flat(1).filter(Gv).filter((f) => f.rel === "stylesheet" || f.rel === "preload").map(
      (f) => f.rel === "stylesheet" ? { ...f, rel: "prefetch", as: "style" } : { ...f, rel: "prefetch" }
    )
  );
}
function Xh(u, c, r, s, f, d) {
  let h = (v, y) => r[y] ? v.route.id !== r[y].route.id : !0, p = (v, y) => (
    // param change, /users/123 -> /users/456
    r[y].pathname !== v.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[y].route.path?.endsWith("*") && r[y].params["*"] !== v.params["*"]
  );
  return d === "assets" ? c.filter(
    (v, y) => h(v, y) || p(v, y)
  ) : d === "data" ? c.filter((v, y) => {
    let b = s.routes[v.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (h(v, y) || p(v, y))
      return !0;
    if (v.route.shouldRevalidate) {
      let A = v.route.shouldRevalidate({
        currentUrl: new URL(
          f.pathname + f.search + f.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: v.params,
        defaultShouldRevalidate: !0
      });
      if (typeof A == "boolean")
        return A;
    }
    return !0;
  }) : [];
}
function Qv(u, c, { includeHydrateFallback: r } = {}) {
  return Vv(
    u.map((s) => {
      let f = c.routes[s.route.id];
      if (!f) return [];
      let d = [f.module];
      return f.clientActionModule && (d = d.concat(f.clientActionModule)), f.clientLoaderModule && (d = d.concat(f.clientLoaderModule)), r && f.hydrateFallbackModule && (d = d.concat(f.hydrateFallbackModule)), f.imports && (d = d.concat(f.imports)), d;
    }).flat(1)
  );
}
function Vv(u) {
  return [...new Set(u)];
}
function Zv(u) {
  let c = {}, r = Object.keys(u).sort();
  for (let s of r)
    c[s] = u[s];
  return c;
}
function Kv(u, c) {
  let r = /* @__PURE__ */ new Set();
  return new Set(c), u.reduce((s, f) => {
    let d = JSON.stringify(Zv(f));
    return r.has(d) || (r.add(d), s.push({ key: d, link: f })), s;
  }, []);
}
function Nm() {
  let u = C.useContext($n);
  return xf(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function Jv() {
  let u = C.useContext(Di);
  return xf(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Of = C.createContext(void 0);
Of.displayName = "FrameworkContext";
function Dm() {
  let u = C.useContext(Of);
  return xf(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function kv(u, c) {
  let r = C.useContext(Of), [s, f] = C.useState(!1), [d, h] = C.useState(!1), { onFocus: p, onBlur: v, onMouseEnter: y, onMouseLeave: b, onTouchStart: A } = c, D = C.useRef(null);
  C.useEffect(() => {
    if (u === "render" && h(!0), u === "viewport") {
      let H = (Z) => {
        Z.forEach((Y) => {
          h(Y.isIntersecting);
        });
      }, U = new IntersectionObserver(H, { threshold: 0.5 });
      return D.current && U.observe(D.current), () => {
        U.disconnect();
      };
    }
  }, [u]), C.useEffect(() => {
    if (s) {
      let H = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(H);
      };
    }
  }, [s]);
  let V = () => {
    f(!0);
  }, O = () => {
    f(!1), h(!1);
  };
  return r ? u !== "intent" ? [d, D, {}] : [
    d,
    D,
    {
      onFocus: Ka(p, V),
      onBlur: Ka(v, O),
      onMouseEnter: Ka(y, V),
      onMouseLeave: Ka(b, O),
      onTouchStart: Ka(A, V)
    }
  ] : [!1, D, {}];
}
function Ka(u, c) {
  return (r) => {
    u && u(r), r.defaultPrevented || c(r);
  };
}
function $v({ page: u, ...c }) {
  let { router: r } = Nm(), s = C.useMemo(
    () => hm(r.routes, u, r.basename),
    [r.routes, u, r.basename]
  );
  return s ? /* @__PURE__ */ C.createElement(Wv, { page: u, matches: s, ...c }) : null;
}
function Fv(u) {
  let { manifest: c, routeModules: r } = Dm(), [s, f] = C.useState([]);
  return C.useEffect(() => {
    let d = !1;
    return Xv(u, c, r).then(
      (h) => {
        d || f(h);
      }
    ), () => {
      d = !0;
    };
  }, [u, c, r]), s;
}
function Wv({
  page: u,
  matches: c,
  ...r
}) {
  let s = cn(), { manifest: f, routeModules: d } = Dm(), { basename: h } = Nm(), { loaderData: p, matches: v } = Jv(), y = C.useMemo(
    () => Xh(
      u,
      c,
      v,
      f,
      s,
      "data"
    ),
    [u, c, v, f, s]
  ), b = C.useMemo(
    () => Xh(
      u,
      c,
      v,
      f,
      s,
      "assets"
    ),
    [u, c, v, f, s]
  ), A = C.useMemo(() => {
    if (u === s.pathname + s.search + s.hash)
      return [];
    let O = /* @__PURE__ */ new Set(), H = !1;
    if (c.forEach((Z) => {
      let Y = f.routes[Z.route.id];
      !Y || !Y.hasLoader || (!y.some((J) => J.route.id === Z.route.id) && Z.route.id in p && d[Z.route.id]?.shouldRevalidate || Y.hasClientLoader ? H = !0 : O.add(Z.route.id));
    }), O.size === 0)
      return [];
    let U = qv(u, h, "data");
    return H && O.size > 0 && U.searchParams.set(
      "_routes",
      c.filter((Z) => O.has(Z.route.id)).map((Z) => Z.route.id).join(",")
    ), [U.pathname + U.search];
  }, [
    h,
    p,
    s,
    f,
    y,
    c,
    u,
    d
  ]), D = C.useMemo(
    () => Qv(b, f),
    [b, f]
  ), V = Fv(b);
  return /* @__PURE__ */ C.createElement(C.Fragment, null, A.map((O) => /* @__PURE__ */ C.createElement("link", { key: O, rel: "prefetch", as: "fetch", href: O, ...r })), D.map((O) => /* @__PURE__ */ C.createElement("link", { key: O, rel: "modulepreload", href: O, ...r })), V.map(({ key: O, link: H }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ C.createElement("link", { key: O, nonce: r.nonce, ...H })
  )));
}
function Pv(...u) {
  return (c) => {
    u.forEach((r) => {
      typeof r == "function" ? r(c) : r != null && (r.current = c);
    });
  };
}
var Iv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Iv && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function eg({
  basename: u,
  children: c,
  unstable_useTransitions: r,
  window: s
}) {
  let f = C.useRef();
  f.current == null && (f.current = Mp({ window: s, v5Compat: !0 }));
  let d = f.current, [h, p] = C.useState({
    action: d.action,
    location: d.location
  }), v = C.useCallback(
    (y) => {
      r === !1 ? p(y) : C.startTransition(() => p(y));
    },
    [r]
  );
  return C.useLayoutEffect(() => d.listen(v), [d, v]), /* @__PURE__ */ C.createElement(
    Cv,
    {
      basename: u,
      children: c,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      unstable_useTransitions: r
    }
  );
}
var Um = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Mm = C.forwardRef(
  function({
    onClick: c,
    discover: r = "render",
    prefetch: s = "none",
    relative: f,
    reloadDocument: d,
    replace: h,
    state: p,
    target: v,
    to: y,
    preventScrollReset: b,
    viewTransition: A,
    unstable_defaultShouldRevalidate: D,
    ...V
  }, O) {
    let { basename: H, unstable_useTransitions: U } = C.useContext(jt), Z = typeof y == "string" && Um.test(y), Y = Sm(y, H);
    y = Y.to;
    let J = hv(y, { relative: f }), [ee, P, ie] = kv(
      s,
      V
    ), ce = ag(y, {
      replace: h,
      state: p,
      target: v,
      preventScrollReset: b,
      relative: f,
      viewTransition: A,
      unstable_defaultShouldRevalidate: D,
      unstable_useTransitions: U
    });
    function I(re) {
      c && c(re), re.defaultPrevented || ce(re);
    }
    let be = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ C.createElement(
        "a",
        {
          ...V,
          ...ie,
          href: Y.absoluteURL || J,
          onClick: Y.isExternal || d ? c : I,
          ref: Pv(O, P),
          target: v,
          "data-discover": !Z && r === "render" ? "true" : void 0
        }
      )
    );
    return ee && !Z ? /* @__PURE__ */ C.createElement(C.Fragment, null, be, /* @__PURE__ */ C.createElement($v, { page: J })) : be;
  }
);
Mm.displayName = "Link";
var tg = C.forwardRef(
  function({
    "aria-current": c = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: f = !1,
    style: d,
    to: h,
    viewTransition: p,
    children: v,
    ...y
  }, b) {
    let A = Ia(h, { relative: y.relative }), D = cn(), V = C.useContext(Di), { navigator: O, basename: H } = C.useContext(jt), U = V != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fg(A) && p === !0, Z = O.encodeLocation ? O.encodeLocation(A).pathname : A.pathname, Y = D.pathname, J = V && V.navigation && V.navigation.location ? V.navigation.location.pathname : null;
    r || (Y = Y.toLowerCase(), J = J ? J.toLowerCase() : null, Z = Z.toLowerCase()), J && H && (J = ol(J, H) || J);
    const ee = Z !== "/" && Z.endsWith("/") ? Z.length - 1 : Z.length;
    let P = Y === Z || !f && Y.startsWith(Z) && Y.charAt(ee) === "/", ie = J != null && (J === Z || !f && J.startsWith(Z) && J.charAt(Z.length) === "/"), ce = {
      isActive: P,
      isPending: ie,
      isTransitioning: U
    }, I = P ? c : void 0, be;
    typeof s == "function" ? be = s(ce) : be = [
      s,
      P ? "active" : null,
      ie ? "pending" : null,
      U ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let re = typeof d == "function" ? d(ce) : d;
    return /* @__PURE__ */ C.createElement(
      Mm,
      {
        ...y,
        "aria-current": I,
        className: be,
        ref: b,
        style: re,
        to: h,
        viewTransition: p
      },
      typeof v == "function" ? v(ce) : v
    );
  }
);
tg.displayName = "NavLink";
var lg = C.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: c,
    navigate: r,
    reloadDocument: s,
    replace: f,
    state: d,
    method: h = Ri,
    action: p,
    onSubmit: v,
    relative: y,
    preventScrollReset: b,
    viewTransition: A,
    unstable_defaultShouldRevalidate: D,
    ...V
  }, O) => {
    let { unstable_useTransitions: H } = C.useContext(jt), U = cg(), Z = rg(p, { relative: y }), Y = h.toLowerCase() === "get" ? "get" : "post", J = typeof p == "string" && Um.test(p), ee = (P) => {
      if (v && v(P), P.defaultPrevented) return;
      P.preventDefault();
      let ie = P.nativeEvent.submitter, ce = ie?.getAttribute("formmethod") || h, I = () => U(ie || P.currentTarget, {
        fetcherKey: c,
        method: ce,
        navigate: r,
        replace: f,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: A,
        unstable_defaultShouldRevalidate: D
      });
      H && r !== !1 ? C.startTransition(() => I()) : I();
    };
    return /* @__PURE__ */ C.createElement(
      "form",
      {
        ref: O,
        method: Y,
        action: Z,
        onSubmit: s ? v : ee,
        ...V,
        "data-discover": !J && u === "render" ? "true" : void 0
      }
    );
  }
);
lg.displayName = "Form";
function ng(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wm(u) {
  let c = C.useContext($n);
  return we(c, ng(u)), c;
}
function ag(u, {
  target: c,
  replace: r,
  state: s,
  preventScrollReset: f,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: p,
  unstable_useTransitions: v
} = {}) {
  let y = mv(), b = cn(), A = Ia(u, { relative: d });
  return C.useCallback(
    (D) => {
      if (jv(D, c)) {
        D.preventDefault();
        let V = r !== void 0 ? r : Fa(b) === Fa(A), O = () => y(u, {
          replace: V,
          state: s,
          preventScrollReset: f,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: p
        });
        v ? C.startTransition(() => O()) : O();
      }
    },
    [
      b,
      y,
      A,
      r,
      s,
      c,
      u,
      f,
      d,
      h,
      p,
      v
    ]
  );
}
var ug = 0, ig = () => `__${String(++ug)}__`;
function cg() {
  let { router: u } = wm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: c } = C.useContext(jt), r = xv(), s = u.fetch, f = u.navigate;
  return C.useCallback(
    async (d, h = {}) => {
      let { action: p, method: v, encType: y, formData: b, body: A } = Lv(
        d,
        c
      );
      if (h.navigate === !1) {
        let D = h.fetcherKey || ig();
        await s(D, r, h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: A,
          formMethod: h.method || v,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await f(h.action || p, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: A,
          formMethod: h.method || v,
          formEncType: h.encType || y,
          replace: h.replace,
          state: h.state,
          fromRouteId: r,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition
        });
    },
    [s, f, c, r]
  );
}
function rg(u, { relative: c } = {}) {
  let { basename: r } = C.useContext(jt), s = C.useContext(dl);
  we(s, "useFormAction must be used inside a RouteContext");
  let [f] = s.matches.slice(-1), d = { ...Ia(u || ".", { relative: c }) }, h = cn();
  if (u == null) {
    d.search = h.search;
    let p = new URLSearchParams(d.search), v = p.getAll("index");
    if (v.some((b) => b === "")) {
      p.delete("index"), v.filter((A) => A).forEach((A) => p.append("index", A));
      let b = p.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && f.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (d.pathname = d.pathname === "/" ? r : sl([r, d.pathname])), Fa(d);
}
function fg(u, { relative: c } = {}) {
  let r = C.useContext(Tm);
  we(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = wm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), f = Ia(u, { relative: c });
  if (!r.isTransitioning)
    return !1;
  let d = ol(r.currentLocation.pathname, s) || r.currentLocation.pathname, h = ol(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return Ci(f.pathname, h) != null || Ci(f.pathname, d) != null;
}
var rf = { exports: {} }, tt = {};
var Qh;
function sg() {
  if (Qh) return tt;
  Qh = 1;
  var u = Ef();
  function c(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var s = {
    d: {
      f: r,
      r: function() {
        throw Error(c(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, f = /* @__PURE__ */ Symbol.for("react.portal");
  function d(v, y, b) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: A == null ? null : "" + A,
      children: v,
      containerInfo: y,
      implementation: b
    };
  }
  var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(v, y) {
    if (v === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, tt.createPortal = function(v, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return d(v, y, null, b);
  }, tt.flushSync = function(v) {
    var y = h.T, b = s.p;
    try {
      if (h.T = null, s.p = 2, v) return v();
    } finally {
      h.T = y, s.p = b, s.d.f();
    }
  }, tt.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(v, y));
  }, tt.prefetchDNS = function(v) {
    typeof v == "string" && s.d.D(v);
  }, tt.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var b = y.as, A = p(b, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, V = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? s.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: A,
          integrity: D,
          fetchPriority: V
        }
      ) : b === "script" && s.d.X(v, {
        crossOrigin: A,
        integrity: D,
        fetchPriority: V,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, tt.preinitModule = function(v, y) {
    if (typeof v == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = p(
            y.as,
            y.crossOrigin
          );
          s.d.M(v, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(v);
  }, tt.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, A = p(b, y.crossOrigin);
      s.d.L(v, b, {
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
  }, tt.preloadModule = function(v, y) {
    if (typeof v == "string")
      if (y) {
        var b = p(y.as, y.crossOrigin);
        s.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(v);
  }, tt.requestFormReset = function(v) {
    s.d.r(v);
  }, tt.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, tt.useFormState = function(v, y, b) {
    return h.H.useFormState(v, y, b);
  }, tt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, tt.version = "19.2.3", tt;
}
var Vh;
function og() {
  if (Vh) return rf.exports;
  Vh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), rf.exports = sg(), rf.exports;
}
var ff = { exports: {} }, Ja = {}, sf = { exports: {} }, of = {};
var Zh;
function dg() {
  return Zh || (Zh = 1, (function(u) {
    function c(G, L) {
      var X = G.length;
      G.push(L);
      e: for (; 0 < X; ) {
        var pe = X - 1 >>> 1, ze = G[pe];
        if (0 < f(ze, L))
          G[pe] = L, G[X] = ze, X = pe;
        else break e;
      }
    }
    function r(G) {
      return G.length === 0 ? null : G[0];
    }
    function s(G) {
      if (G.length === 0) return null;
      var L = G[0], X = G.pop();
      if (X !== L) {
        G[0] = X;
        e: for (var pe = 0, ze = G.length, je = ze >>> 1; pe < je; ) {
          var E = 2 * (pe + 1) - 1, B = G[E], Q = E + 1, k = G[Q];
          if (0 > f(B, X))
            Q < ze && 0 > f(k, B) ? (G[pe] = k, G[Q] = X, pe = Q) : (G[pe] = B, G[E] = X, pe = E);
          else if (Q < ze && 0 > f(k, X))
            G[pe] = k, G[Q] = X, pe = Q;
          else break e;
        }
      }
      return L;
    }
    function f(G, L) {
      var X = G.sortIndex - L.sortIndex;
      return X !== 0 ? X : G.id - L.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, p = h.now();
      u.unstable_now = function() {
        return h.now() - p;
      };
    }
    var v = [], y = [], b = 1, A = null, D = 3, V = !1, O = !1, H = !1, U = !1, Z = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function ee(G) {
      for (var L = r(y); L !== null; ) {
        if (L.callback === null) s(y);
        else if (L.startTime <= G)
          s(y), L.sortIndex = L.expirationTime, c(v, L);
        else break;
        L = r(y);
      }
    }
    function P(G) {
      if (H = !1, ee(G), !O)
        if (r(v) !== null)
          O = !0, ie || (ie = !0, le());
        else {
          var L = r(y);
          L !== null && ut(P, L.startTime - G);
        }
    }
    var ie = !1, ce = -1, I = 5, be = -1;
    function re() {
      return U ? !0 : !(u.unstable_now() - be < I);
    }
    function Ne() {
      if (U = !1, ie) {
        var G = u.unstable_now();
        be = G;
        var L = !0;
        try {
          e: {
            O = !1, H && (H = !1, Y(ce), ce = -1), V = !0;
            var X = D;
            try {
              t: {
                for (ee(G), A = r(v); A !== null && !(A.expirationTime > G && re()); ) {
                  var pe = A.callback;
                  if (typeof pe == "function") {
                    A.callback = null, D = A.priorityLevel;
                    var ze = pe(
                      A.expirationTime <= G
                    );
                    if (G = u.unstable_now(), typeof ze == "function") {
                      A.callback = ze, ee(G), L = !0;
                      break t;
                    }
                    A === r(v) && s(v), ee(G);
                  } else s(v);
                  A = r(v);
                }
                if (A !== null) L = !0;
                else {
                  var je = r(y);
                  je !== null && ut(
                    P,
                    je.startTime - G
                  ), L = !1;
                }
              }
              break e;
            } finally {
              A = null, D = X, V = !1;
            }
            L = void 0;
          }
        } finally {
          L ? le() : ie = !1;
        }
      }
    }
    var le;
    if (typeof J == "function")
      le = function() {
        J(Ne);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), $e = _e.port2;
      _e.port1.onmessage = Ne, le = function() {
        $e.postMessage(null);
      };
    } else
      le = function() {
        Z(Ne, 0);
      };
    function ut(G, L) {
      ce = Z(function() {
        G(u.unstable_now());
      }, L);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, u.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < G ? Math.floor(1e3 / G) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, u.unstable_next = function(G) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = D;
      }
      var X = D;
      D = L;
      try {
        return G();
      } finally {
        D = X;
      }
    }, u.unstable_requestPaint = function() {
      U = !0;
    }, u.unstable_runWithPriority = function(G, L) {
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
        return L();
      } finally {
        D = X;
      }
    }, u.unstable_scheduleCallback = function(G, L, X) {
      var pe = u.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? pe + X : pe) : X = pe, G) {
        case 1:
          var ze = -1;
          break;
        case 2:
          ze = 250;
          break;
        case 5:
          ze = 1073741823;
          break;
        case 4:
          ze = 1e4;
          break;
        default:
          ze = 5e3;
      }
      return ze = X + ze, G = {
        id: b++,
        callback: L,
        priorityLevel: G,
        startTime: X,
        expirationTime: ze,
        sortIndex: -1
      }, X > pe ? (G.sortIndex = X, c(y, G), r(v) === null && G === r(y) && (H ? (Y(ce), ce = -1) : H = !0, ut(P, X - pe))) : (G.sortIndex = ze, c(v, G), O || V || (O = !0, ie || (ie = !0, le()))), G;
    }, u.unstable_shouldYield = re, u.unstable_wrapCallback = function(G) {
      var L = D;
      return function() {
        var X = D;
        D = L;
        try {
          return G.apply(this, arguments);
        } finally {
          D = X;
        }
      };
    };
  })(of)), of;
}
var Kh;
function hg() {
  return Kh || (Kh = 1, sf.exports = dg()), sf.exports;
}
var Jh;
function mg() {
  if (Jh) return Ja;
  Jh = 1;
  var u = {};
  var c = hg(), r = Ef(), s = og();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function h(e) {
    var t = e, l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function v(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (h(e) !== e)
      throw Error(f(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
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
          if (i === l) return y(a), e;
          if (i === n) return y(a), t;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var o = !1, m = a.child; m; ) {
          if (m === l) {
            o = !0, l = a, n = i;
            break;
          }
          if (m === n) {
            o = !0, n = a, l = i;
            break;
          }
          m = m.sibling;
        }
        if (!o) {
          for (m = i.child; m; ) {
            if (m === l) {
              o = !0, l = i, n = a;
              break;
            }
            if (m === n) {
              o = !0, n = i, l = a;
              break;
            }
            m = m.sibling;
          }
          if (!o) throw Error(f(189));
        }
      }
      if (l.alternate !== n) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function A(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = A(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, V = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), Z = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), P = /* @__PURE__ */ Symbol.for("react.forward_ref"), ie = /* @__PURE__ */ Symbol.for("react.suspense"), ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), Ne = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var $e = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ut(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === $e ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case Y:
        return "Profiler";
      case Z:
        return "StrictMode";
      case ie:
        return "Suspense";
      case ce:
        return "SuspenseList";
      case re:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case H:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case J:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case I:
          return t = e.displayName || null, t !== null ? t : ut(e.type) || "Memo";
        case be:
          t = e._payload, e = e._init;
          try {
            return ut(e(t));
          } catch {
          }
      }
    return null;
  }
  var G = Array.isArray, L = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ze = [], je = -1;
  function E(e) {
    return { current: e };
  }
  function B(e) {
    0 > je || (e.current = ze[je], ze[je] = null, je--);
  }
  function Q(e, t) {
    je++, ze[je] = e.current, e.current = t;
  }
  var k = E(null), fe = E(null), se = E(null), Ee = E(null);
  function nt(e, t) {
    switch (Q(se, t), Q(fe, e), Q(k, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? lh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = lh(t), e = nh(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    B(k), Q(k, e);
  }
  function Le() {
    B(k), B(fe), B(se);
  }
  function Pn(e) {
    e.memoizedState !== null && Q(Ee, e);
    var t = k.current, l = nh(t, e.type);
    t !== l && (Q(fe, e), Q(k, l));
  }
  function au(e) {
    fe.current === e && (B(k), B(fe)), Ee.current === e && (B(Ee), Ga._currentValue = pe);
  }
  var Li, Df;
  function Ll(e) {
    if (Li === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Li = t && t[1] || "", Df = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Li + e + Df;
  }
  var qi = !1;
  function Yi(e, t) {
    if (!e || qi) return "";
    qi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (N) {
                  var _ = N;
                }
                Reflect.construct(e, [], j);
              } else {
                try {
                  j.call();
                } catch (N) {
                  _ = N;
                }
                e.call(j.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                _ = N;
              }
              (j = e()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (N) {
            if (N && _ && typeof N.stack == "string")
              return [N.stack, _.stack];
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
      var i = n.DetermineComponentFrameRoot(), o = i[0], m = i[1];
      if (o && m) {
        var g = o.split(`
`), x = m.split(`
`);
        for (a = n = 0; n < g.length && !g[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < x.length && !x[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === g.length || a === x.length)
          for (n = g.length - 1, a = x.length - 1; 1 <= n && 0 <= a && g[n] !== x[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (g[n] !== x[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || g[n] !== x[a]) {
                  var M = `
` + g[n].replace(" at new ", " at ");
                  return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), M;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      qi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Ll(l) : "";
  }
  function cy(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ll(e.type);
      case 16:
        return Ll("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ll("Suspense Fallback") : Ll("Suspense");
      case 19:
        return Ll("SuspenseList");
      case 0:
      case 15:
        return Yi(e.type, !1);
      case 11:
        return Yi(e.type.render, !1);
      case 1:
        return Yi(e.type, !0);
      case 31:
        return Ll("Activity");
      default:
        return "";
    }
  }
  function Uf(e) {
    try {
      var t = "", l = null;
      do
        t += cy(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Gi = Object.prototype.hasOwnProperty, Xi = c.unstable_scheduleCallback, Qi = c.unstable_cancelCallback, ry = c.unstable_shouldYield, fy = c.unstable_requestPaint, yt = c.unstable_now, sy = c.unstable_getCurrentPriorityLevel, Mf = c.unstable_ImmediatePriority, wf = c.unstable_UserBlockingPriority, uu = c.unstable_NormalPriority, oy = c.unstable_LowPriority, jf = c.unstable_IdlePriority, dy = c.log, hy = c.unstable_setDisableYieldValue, In = null, pt = null;
  function hl(e) {
    if (typeof dy == "function" && hy(e), pt && typeof pt.setStrictMode == "function")
      try {
        pt.setStrictMode(In, e);
      } catch {
      }
  }
  var vt = Math.clz32 ? Math.clz32 : py, my = Math.log, yy = Math.LN2;
  function py(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (my(e) / yy | 0) | 0;
  }
  var iu = 256, cu = 262144, ru = 4194304;
  function ql(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function fu(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, o = e.pingedLanes;
    e = e.warmLanes;
    var m = n & 134217727;
    return m !== 0 ? (n = m & ~i, n !== 0 ? a = ql(n) : (o &= m, o !== 0 ? a = ql(o) : l || (l = m & ~e, l !== 0 && (a = ql(l))))) : (m = n & ~i, m !== 0 ? a = ql(m) : o !== 0 ? a = ql(o) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function vy(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
  function Bf() {
    var e = ru;
    return ru <<= 1, (ru & 62914560) === 0 && (ru = 4194304), e;
  }
  function Vi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ta(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function gy(e, t, l, n, a, i) {
    var o = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, g = e.expirationTimes, x = e.hiddenUpdates;
    for (l = o & ~l; 0 < l; ) {
      var M = 31 - vt(l), j = 1 << M;
      m[M] = 0, g[M] = -1;
      var _ = x[M];
      if (_ !== null)
        for (x[M] = null, M = 0; M < _.length; M++) {
          var N = _[M];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~j;
    }
    n !== 0 && Hf(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(o & ~t));
  }
  function Hf(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - vt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Lf(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - vt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function qf(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Zi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Zi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ki(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Yf() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Oh(e.type));
  }
  function Gf(e, t) {
    var l = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = l;
    }
  }
  var ml = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + ml, it = "__reactProps$" + ml, rn = "__reactContainer$" + ml, Ji = "__reactEvents$" + ml, by = "__reactListeners$" + ml, Sy = "__reactHandles$" + ml, Xf = "__reactResources$" + ml, la = "__reactMarker$" + ml;
  function ki(e) {
    delete e[Fe], delete e[it], delete e[Ji], delete e[by], delete e[Sy];
  }
  function fn(e) {
    var t = e[Fe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[rn] || l[Fe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = sh(e); e !== null; ) {
            if (l = e[Fe]) return l;
            e = sh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function sn(e) {
    if (e = e[Fe] || e[rn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function na(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function on(e) {
    var t = e[Xf];
    return t || (t = e[Xf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Je(e) {
    e[la] = !0;
  }
  var Qf = /* @__PURE__ */ new Set(), Vf = {};
  function Yl(e, t) {
    dn(e, t), dn(e + "Capture", t);
  }
  function dn(e, t) {
    for (Vf[e] = t, e = 0; e < t.length; e++)
      Qf.add(t[e]);
  }
  var Ey = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zf = {}, Kf = {};
  function Ty(e) {
    return Gi.call(Kf, e) ? !0 : Gi.call(Zf, e) ? !1 : Ey.test(e) ? Kf[e] = !0 : (Zf[e] = !0, !1);
  }
  function su(e, t, l) {
    if (Ty(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var n = t.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function ou(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Kt(e, t, l, n) {
    if (n === null) e.removeAttribute(l);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + n);
    }
  }
  function xt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Jf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ay(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var a = n.get, i = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(o) {
          l = "" + o, i.call(this, o);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(o) {
          l = "" + o;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function $i(e) {
    if (!e._valueTracker) {
      var t = Jf(e) ? "checked" : "value";
      e._valueTracker = Ay(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function kf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Jf(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function du(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ry = /[\n"\\]/g;
  function Ot(e) {
    return e.replace(
      Ry,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fi(e, t, l, n, a, i, o, m) {
    e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t != null ? o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xt(t)) : e.value !== "" + xt(t) && (e.value = "" + xt(t)) : o !== "submit" && o !== "reset" || e.removeAttribute("value"), t != null ? Wi(e, o, xt(t)) : l != null ? Wi(e, o, xt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + xt(m) : e.removeAttribute("name");
  }
  function $f(e, t, l, n, a, i, o, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        $i(e);
        return;
      }
      l = l != null ? "" + xt(l) : "", t = t != null ? "" + xt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), $i(e);
  }
  function Wi(e, t, l) {
    t === "number" && du(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function hn(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + xt(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ff(e, t, l) {
    if (t != null && (t = "" + xt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + xt(l) : "";
  }
  function Wf(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(f(92));
        if (G(n)) {
          if (1 < n.length) throw Error(f(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = xt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), $i(e);
  }
  function mn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Pf(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || xy.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function If(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(f(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && Pf(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Pf(e, i, t[i]);
  }
  function Pi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
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
  function hu(e) {
    return _y.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Jt() {
  }
  var Ii = null;
  function ec(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var yn = null, pn = null;
  function es(e) {
    var t = sn(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Fi(
            e,
            l.value,
            l.defaultValue,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name
          ), t = l.name, l.type === "radio" && t != null) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (l = l.querySelectorAll(
              'input[name="' + Ot(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[it] || null;
                if (!a) throw Error(f(90));
                Fi(
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
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && kf(n);
          }
          break e;
        case "textarea":
          Ff(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && hn(e, !!l.multiple, t, !1);
      }
    }
  }
  var tc = !1;
  function ts(e, t, l) {
    if (tc) return e(t, l);
    tc = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (tc = !1, (yn !== null || pn !== null) && (ei(), yn && (t = yn, e = pn, pn = yn = null, es(t), e)))
        for (t = 0; t < e.length; t++) es(e[t]);
    }
  }
  function aa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[it] || null;
    if (n === null) return null;
    l = n[t];
    e: switch (t) {
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
        (n = !n.disabled) || (e = e.type, n = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !n;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function")
      throw Error(
        f(231, t, typeof l)
      );
    return l;
  }
  var kt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lc = !1;
  if (kt)
    try {
      var ua = {};
      Object.defineProperty(ua, "passive", {
        get: function() {
          lc = !0;
        }
      }), window.addEventListener("test", ua, ua), window.removeEventListener("test", ua, ua);
    } catch {
      lc = !1;
    }
  var yl = null, nc = null, mu = null;
  function ls() {
    if (mu) return mu;
    var e, t = nc, l = t.length, n, a = "value" in yl ? yl.value : yl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var o = l - e;
    for (n = 1; n <= o && t[l - n] === a[i - n]; n++) ;
    return mu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function yu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pu() {
    return !0;
  }
  function ns() {
    return !1;
  }
  function ct(e) {
    function t(l, n, a, i, o) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pu : ns, this.isPropagationStopped = ns, this;
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = pu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = pu);
      },
      persist: function() {
      },
      isPersistent: pu
    }), t;
  }
  var Gl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vu = ct(Gl), ia = D({}, Gl, { view: 0, detail: 0 }), zy = ct(ia), ac, uc, ca, gu = D({}, ia, {
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
    getModifierState: cc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ca && (ca && e.type === "mousemove" ? (ac = e.screenX - ca.screenX, uc = e.screenY - ca.screenY) : uc = ac = 0, ca = e), ac);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : uc;
    }
  }), as = ct(gu), Cy = D({}, gu, { dataTransfer: 0 }), Ny = ct(Cy), Dy = D({}, ia, { relatedTarget: 0 }), ic = ct(Dy), Uy = D({}, Gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), My = ct(Uy), wy = D({}, Gl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), jy = ct(wy), By = D({}, Gl, { data: 0 }), us = ct(By), Hy = {
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
  }, Ly = {
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
  }, qy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Yy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qy[e]) ? !!t[e] : !1;
  }
  function cc() {
    return Yy;
  }
  var Gy = D({}, ia, {
    key: function(e) {
      if (e.key) {
        var t = Hy[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ly[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: cc,
    charCode: function(e) {
      return e.type === "keypress" ? yu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Xy = ct(Gy), Qy = D({}, gu, {
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
  }), is = ct(Qy), Vy = D({}, ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cc
  }), Zy = ct(Vy), Ky = D({}, Gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jy = ct(Ky), ky = D({}, gu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $y = ct(ky), Fy = D({}, Gl, {
    newState: 0,
    oldState: 0
  }), Wy = ct(Fy), Py = [9, 13, 27, 32], rc = kt && "CompositionEvent" in window, ra = null;
  kt && "documentMode" in document && (ra = document.documentMode);
  var Iy = kt && "TextEvent" in window && !ra, cs = kt && (!rc || ra && 8 < ra && 11 >= ra), rs = " ", fs = !1;
  function ss(e, t) {
    switch (e) {
      case "keyup":
        return Py.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function os(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function e0(e, t) {
    switch (e) {
      case "compositionend":
        return os(t);
      case "keypress":
        return t.which !== 32 ? null : (fs = !0, rs);
      case "textInput":
        return e = t.data, e === rs && fs ? null : e;
      default:
        return null;
    }
  }
  function t0(e, t) {
    if (vn)
      return e === "compositionend" || !rc && ss(e, t) ? (e = ls(), mu = nc = yl = null, vn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return cs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var l0 = {
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
  function ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!l0[e.type] : t === "textarea";
  }
  function hs(e, t, l, n) {
    yn ? pn ? pn.push(n) : pn = [n] : yn = n, t = ci(t, "onChange"), 0 < t.length && (l = new vu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, sa = null;
  function n0(e) {
    Fd(e, 0);
  }
  function bu(e) {
    var t = na(e);
    if (kf(t)) return e;
  }
  function ms(e, t) {
    if (e === "change") return t;
  }
  var ys = !1;
  if (kt) {
    var fc;
    if (kt) {
      var sc = "oninput" in document;
      if (!sc) {
        var ps = document.createElement("div");
        ps.setAttribute("oninput", "return;"), sc = typeof ps.oninput == "function";
      }
      fc = sc;
    } else fc = !1;
    ys = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function vs() {
    fa && (fa.detachEvent("onpropertychange", gs), sa = fa = null);
  }
  function gs(e) {
    if (e.propertyName === "value" && bu(sa)) {
      var t = [];
      hs(
        t,
        sa,
        e,
        ec(e)
      ), ts(n0, t);
    }
  }
  function a0(e, t, l) {
    e === "focusin" ? (vs(), fa = t, sa = l, fa.attachEvent("onpropertychange", gs)) : e === "focusout" && vs();
  }
  function u0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bu(sa);
  }
  function i0(e, t) {
    if (e === "click") return bu(t);
  }
  function c0(e, t) {
    if (e === "input" || e === "change")
      return bu(t);
  }
  function r0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var gt = typeof Object.is == "function" ? Object.is : r0;
  function oa(e, t) {
    if (gt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Gi.call(t, a) || !gt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function bs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ss(e, t) {
    var l = bs(e);
    e = 0;
    for (var n; l; ) {
      if (l.nodeType === 3) {
        if (n = e + l.textContent.length, e <= t && n >= t)
          return { node: l, offset: t - e };
        e = n;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = bs(l);
    }
  }
  function Es(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Es(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ts(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = du(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = du(e.document);
    }
    return t;
  }
  function oc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var f0 = kt && "documentMode" in document && 11 >= document.documentMode, gn = null, dc = null, da = null, hc = !1;
  function As(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    hc || gn == null || gn !== du(n) || (n = gn, "selectionStart" in n && oc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), da && oa(da, n) || (da = n, n = ci(dc, "onSelect"), 0 < n.length && (t = new vu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = gn)));
  }
  function Xl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var bn = {
    animationend: Xl("Animation", "AnimationEnd"),
    animationiteration: Xl("Animation", "AnimationIteration"),
    animationstart: Xl("Animation", "AnimationStart"),
    transitionrun: Xl("Transition", "TransitionRun"),
    transitionstart: Xl("Transition", "TransitionStart"),
    transitioncancel: Xl("Transition", "TransitionCancel"),
    transitionend: Xl("Transition", "TransitionEnd")
  }, mc = {}, Rs = {};
  kt && (Rs = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);
  function Ql(e) {
    if (mc[e]) return mc[e];
    if (!bn[e]) return e;
    var t = bn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Rs)
        return mc[e] = t[l];
    return e;
  }
  var xs = Ql("animationend"), Os = Ql("animationiteration"), _s = Ql("animationstart"), s0 = Ql("transitionrun"), o0 = Ql("transitionstart"), d0 = Ql("transitioncancel"), zs = Ql("transitionend"), Cs = /* @__PURE__ */ new Map(), yc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yc.push("scrollEnd");
  function Bt(e, t) {
    Cs.set(e, t), Yl(t, [e]);
  }
  var Su = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, _t = [], Sn = 0, pc = 0;
  function Eu() {
    for (var e = Sn, t = pc = Sn = 0; t < e; ) {
      var l = _t[t];
      _t[t++] = null;
      var n = _t[t];
      _t[t++] = null;
      var a = _t[t];
      _t[t++] = null;
      var i = _t[t];
      if (_t[t++] = null, n !== null && a !== null) {
        var o = n.pending;
        o === null ? a.next = a : (a.next = o.next, o.next = a), n.pending = a;
      }
      i !== 0 && Ns(l, a, i);
    }
  }
  function Tu(e, t, l, n) {
    _t[Sn++] = e, _t[Sn++] = t, _t[Sn++] = l, _t[Sn++] = n, pc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function vc(e, t, l, n) {
    return Tu(e, t, l, n), Au(e);
  }
  function Vl(e, t) {
    return Tu(e, null, null, t), Au(e);
  }
  function Ns(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - vt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Au(e) {
    if (50 < wa)
      throw wa = 0, Or = null, Error(f(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var En = {};
  function h0(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new h0(e, t, l, n);
  }
  function gc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $t(e, t) {
    var l = e.alternate;
    return l === null ? (l = bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Ds(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ru(e, t, l, n, a, i) {
    var o = 0;
    if (n = e, typeof e == "function") gc(e) && (o = 1);
    else if (typeof e == "string")
      o = gp(
        e,
        l,
        k.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case re:
          return e = bt(31, l, t, a), e.elementType = re, e.lanes = i, e;
        case U:
          return Zl(l.children, a, i, t);
        case Z:
          o = 8, a |= 24;
          break;
        case Y:
          return e = bt(12, l, t, a | 2), e.elementType = Y, e.lanes = i, e;
        case ie:
          return e = bt(13, l, t, a), e.elementType = ie, e.lanes = i, e;
        case ce:
          return e = bt(19, l, t, a), e.elementType = ce, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                o = 10;
                break e;
              case J:
                o = 9;
                break e;
              case P:
                o = 11;
                break e;
              case I:
                o = 14;
                break e;
              case be:
                o = 16, n = null;
                break e;
            }
          o = 29, l = Error(
            f(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = bt(o, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Zl(e, t, l, n) {
    return e = bt(7, e, n, t), e.lanes = l, e;
  }
  function bc(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e;
  }
  function Us(e) {
    var t = bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Sc(e, t, l) {
    return t = bt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = l, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Ms = /* @__PURE__ */ new WeakMap();
  function zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ms.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Uf(t)
      }, Ms.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Uf(t)
    };
  }
  var Tn = [], An = 0, xu = null, ha = 0, Ct = [], Nt = 0, pl = null, Gt = 1, Xt = "";
  function Ft(e, t) {
    Tn[An++] = ha, Tn[An++] = xu, xu = e, ha = t;
  }
  function ws(e, t, l) {
    Ct[Nt++] = Gt, Ct[Nt++] = Xt, Ct[Nt++] = pl, pl = e;
    var n = Gt;
    e = Xt;
    var a = 32 - vt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - vt(t) + a;
    if (30 < i) {
      var o = a - a % 5;
      i = (n & (1 << o) - 1).toString(32), n >>= o, a -= o, Gt = 1 << 32 - vt(t) + a | l << a | n, Xt = i + e;
    } else
      Gt = 1 << i | l << a | n, Xt = e;
  }
  function Ec(e) {
    e.return !== null && (Ft(e, 1), ws(e, 1, 0));
  }
  function Tc(e) {
    for (; e === xu; )
      xu = Tn[--An], Tn[An] = null, ha = Tn[--An], Tn[An] = null;
    for (; e === pl; )
      pl = Ct[--Nt], Ct[Nt] = null, Xt = Ct[--Nt], Ct[Nt] = null, Gt = Ct[--Nt], Ct[Nt] = null;
  }
  function js(e, t) {
    Ct[Nt++] = Gt, Ct[Nt++] = Xt, Ct[Nt++] = pl, Gt = t.id, Xt = t.overflow, pl = e;
  }
  var We = null, De = null, ye = !1, vl = null, Dt = !1, Ac = Error(f(519));
  function gl(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ma(zt(t, e)), Ac;
  }
  function Bs(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[Fe] = e, t[it] = n, l) {
      case "dialog":
        de("cancel", t), de("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        de("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ba.length; l++)
          de(Ba[l], t);
        break;
      case "source":
        de("error", t);
        break;
      case "img":
      case "image":
      case "link":
        de("error", t), de("load", t);
        break;
      case "details":
        de("toggle", t);
        break;
      case "input":
        de("invalid", t), $f(
          t,
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
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), Wf(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || eh(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = Jt), t = !0) : t = !1, t || gl(e, !0);
  }
  function Hs(e) {
    for (We = e.return; We; )
      switch (We.tag) {
        case 5:
        case 31:
        case 13:
          Dt = !1;
          return;
        case 27:
        case 3:
          Dt = !0;
          return;
        default:
          We = We.return;
      }
  }
  function Rn(e) {
    if (e !== We) return !1;
    if (!ye) return Hs(e), ye = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Gr(e.type, e.memoizedProps)), l = !l), l && De && gl(e), Hs(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      De = fh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
      De = fh(e);
    } else
      t === 27 ? (t = De, Ul(e.type) ? (e = Kr, Kr = null, De = e) : De = t) : De = We ? Mt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Kl() {
    De = We = null, ye = !1;
  }
  function Rc() {
    var e = vl;
    return e !== null && (ot === null ? ot = e : ot.push.apply(
      ot,
      e
    ), vl = null), e;
  }
  function ma(e) {
    vl === null ? vl = [e] : vl.push(e);
  }
  var xc = E(null), Jl = null, Wt = null;
  function bl(e, t, l) {
    Q(xc, t._currentValue), t._currentValue = l;
  }
  function Pt(e) {
    e._currentValue = xc.current, B(xc);
  }
  function Oc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function _c(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var o = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var m = i;
          i = a;
          for (var g = 0; g < t.length; g++)
            if (m.context === t[g]) {
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), Oc(
                i.return,
                l,
                e
              ), n || (o = null);
              break e;
            }
          i = m.next;
        }
      } else if (a.tag === 18) {
        if (o = a.return, o === null) throw Error(f(341));
        o.lanes |= l, i = o.alternate, i !== null && (i.lanes |= l), Oc(o, l, e), o = null;
      } else o = a.child;
      if (o !== null) o.return = a;
      else
        for (o = a; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (a = o.sibling, a !== null) {
            a.return = o.return, o = a;
            break;
          }
          o = o.return;
        }
      a = o;
    }
  }
  function xn(e, t, l, n) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var o = a.alternate;
        if (o === null) throw Error(f(387));
        if (o = o.memoizedProps, o !== null) {
          var m = a.type;
          gt(a.pendingProps.value, o.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (a === Ee.current) {
        if (o = a.alternate, o === null) throw Error(f(387));
        o.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ga) : e = [Ga]);
      }
      a = a.return;
    }
    e !== null && _c(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function Ou(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!gt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function kl(e) {
    Jl = e, Wt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pe(e) {
    return Ls(Jl, e);
  }
  function _u(e, t) {
    return Jl === null && kl(e), Ls(e, t);
  }
  function Ls(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Wt === null) {
      if (e === null) throw Error(f(308));
      Wt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Wt = Wt.next = t;
    return l;
  }
  var m0 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, n) {
        e.push(n);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, y0 = c.unstable_scheduleCallback, p0 = c.unstable_NormalPriority, Xe = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zc() {
    return {
      controller: new m0(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ya(e) {
    e.refCount--, e.refCount === 0 && y0(p0, function() {
      e.controller.abort();
    });
  }
  var pa = null, Cc = 0, On = 0, _n = null;
  function v0(e, t) {
    if (pa === null) {
      var l = pa = [];
      Cc = 0, On = Ur(), _n = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Cc++, t.then(qs, qs), t;
  }
  function qs() {
    if (--Cc === 0 && pa !== null) {
      _n !== null && (_n.status = "fulfilled");
      var e = pa;
      pa = null, On = 0, _n = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function g0(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        l.push(a);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var a = 0; a < l.length; a++) (0, l[a])(t);
      },
      function(a) {
        for (n.status = "rejected", n.reason = a, a = 0; a < l.length; a++)
          (0, l[a])(void 0);
      }
    ), n;
  }
  var Ys = L.S;
  L.S = function(e, t) {
    Rd = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && v0(e, t), Ys !== null && Ys(e, t);
  };
  var $l = E(null);
  function Nc() {
    var e = $l.current;
    return e !== null ? e : Ce.pooledCache;
  }
  function zu(e, t) {
    t === null ? Q($l, $l.current) : Q($l, t.pool);
  }
  function Gs() {
    var e = Nc();
    return e === null ? null : { parent: Xe._currentValue, pool: e };
  }
  var zn = Error(f(460)), Dc = Error(f(474)), Cu = Error(f(542)), Nu = { then: function() {
  } };
  function Xs(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Qs(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Jt, Jt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Zs(e), e;
      default:
        if (typeof t.status == "string") t.then(Jt, Jt);
        else {
          if (e = Ce, e !== null && 100 < e.shellSuspendCounter)
            throw Error(f(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = n;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Zs(e), e;
        }
        throw Wl = t, zn;
    }
  }
  function Fl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, zn) : l;
    }
  }
  var Wl = null;
  function Vs() {
    if (Wl === null) throw Error(f(459));
    var e = Wl;
    return Wl = null, e;
  }
  function Zs(e) {
    if (e === zn || e === Cu)
      throw Error(f(483));
  }
  var Cn = null, va = 0;
  function Du(e) {
    var t = va;
    return va += 1, Cn === null && (Cn = []), Qs(Cn, e, t);
  }
  function ga(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Uu(e, t) {
    throw t.$$typeof === V ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(
      f(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ks(e) {
    function t(T, S) {
      if (e) {
        var R = T.deletions;
        R === null ? (T.deletions = [S], T.flags |= 16) : R.push(S);
      }
    }
    function l(T, S) {
      if (!e) return null;
      for (; S !== null; )
        t(T, S), S = S.sibling;
      return null;
    }
    function n(T) {
      for (var S = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? S.set(T.key, T) : S.set(T.index, T), T = T.sibling;
      return S;
    }
    function a(T, S) {
      return T = $t(T, S), T.index = 0, T.sibling = null, T;
    }
    function i(T, S, R) {
      return T.index = R, e ? (R = T.alternate, R !== null ? (R = R.index, R < S ? (T.flags |= 67108866, S) : R) : (T.flags |= 67108866, S)) : (T.flags |= 1048576, S);
    }
    function o(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function m(T, S, R, w) {
      return S === null || S.tag !== 6 ? (S = bc(R, T.mode, w), S.return = T, S) : (S = a(S, R), S.return = T, S);
    }
    function g(T, S, R, w) {
      var F = R.type;
      return F === U ? M(
        T,
        S,
        R.props.children,
        w,
        R.key
      ) : S !== null && (S.elementType === F || typeof F == "object" && F !== null && F.$$typeof === be && Fl(F) === S.type) ? (S = a(S, R.props), ga(S, R), S.return = T, S) : (S = Ru(
        R.type,
        R.key,
        R.props,
        null,
        T.mode,
        w
      ), ga(S, R), S.return = T, S);
    }
    function x(T, S, R, w) {
      return S === null || S.tag !== 4 || S.stateNode.containerInfo !== R.containerInfo || S.stateNode.implementation !== R.implementation ? (S = Sc(R, T.mode, w), S.return = T, S) : (S = a(S, R.children || []), S.return = T, S);
    }
    function M(T, S, R, w, F) {
      return S === null || S.tag !== 7 ? (S = Zl(
        R,
        T.mode,
        w,
        F
      ), S.return = T, S) : (S = a(S, R), S.return = T, S);
    }
    function j(T, S, R) {
      if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
        return S = bc(
          "" + S,
          T.mode,
          R
        ), S.return = T, S;
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case O:
            return R = Ru(
              S.type,
              S.key,
              S.props,
              null,
              T.mode,
              R
            ), ga(R, S), R.return = T, R;
          case H:
            return S = Sc(
              S,
              T.mode,
              R
            ), S.return = T, S;
          case be:
            return S = Fl(S), j(T, S, R);
        }
        if (G(S) || _e(S))
          return S = Zl(
            S,
            T.mode,
            R,
            null
          ), S.return = T, S;
        if (typeof S.then == "function")
          return j(T, Du(S), R);
        if (S.$$typeof === ee)
          return j(
            T,
            _u(T, S),
            R
          );
        Uu(T, S);
      }
      return null;
    }
    function _(T, S, R, w) {
      var F = S !== null ? S.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return F !== null ? null : m(T, S, "" + R, w);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case O:
            return R.key === F ? g(T, S, R, w) : null;
          case H:
            return R.key === F ? x(T, S, R, w) : null;
          case be:
            return R = Fl(R), _(T, S, R, w);
        }
        if (G(R) || _e(R))
          return F !== null ? null : M(T, S, R, w, null);
        if (typeof R.then == "function")
          return _(
            T,
            S,
            Du(R),
            w
          );
        if (R.$$typeof === ee)
          return _(
            T,
            S,
            _u(T, R),
            w
          );
        Uu(T, R);
      }
      return null;
    }
    function N(T, S, R, w, F) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return T = T.get(R) || null, m(S, T, "" + w, F);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case O:
            return T = T.get(
              w.key === null ? R : w.key
            ) || null, g(S, T, w, F);
          case H:
            return T = T.get(
              w.key === null ? R : w.key
            ) || null, x(S, T, w, F);
          case be:
            return w = Fl(w), N(
              T,
              S,
              R,
              w,
              F
            );
        }
        if (G(w) || _e(w))
          return T = T.get(R) || null, M(S, T, w, F, null);
        if (typeof w.then == "function")
          return N(
            T,
            S,
            R,
            Du(w),
            F
          );
        if (w.$$typeof === ee)
          return N(
            T,
            S,
            R,
            _u(S, w),
            F
          );
        Uu(S, w);
      }
      return null;
    }
    function K(T, S, R, w) {
      for (var F = null, ve = null, $ = S, ue = S = 0, me = null; $ !== null && ue < R.length; ue++) {
        $.index > ue ? (me = $, $ = null) : me = $.sibling;
        var ge = _(
          T,
          $,
          R[ue],
          w
        );
        if (ge === null) {
          $ === null && ($ = me);
          break;
        }
        e && $ && ge.alternate === null && t(T, $), S = i(ge, S, ue), ve === null ? F = ge : ve.sibling = ge, ve = ge, $ = me;
      }
      if (ue === R.length)
        return l(T, $), ye && Ft(T, ue), F;
      if ($ === null) {
        for (; ue < R.length; ue++)
          $ = j(T, R[ue], w), $ !== null && (S = i(
            $,
            S,
            ue
          ), ve === null ? F = $ : ve.sibling = $, ve = $);
        return ye && Ft(T, ue), F;
      }
      for ($ = n($); ue < R.length; ue++)
        me = N(
          $,
          T,
          ue,
          R[ue],
          w
        ), me !== null && (e && me.alternate !== null && $.delete(
          me.key === null ? ue : me.key
        ), S = i(
          me,
          S,
          ue
        ), ve === null ? F = me : ve.sibling = me, ve = me);
      return e && $.forEach(function(Hl) {
        return t(T, Hl);
      }), ye && Ft(T, ue), F;
    }
    function W(T, S, R, w) {
      if (R == null) throw Error(f(151));
      for (var F = null, ve = null, $ = S, ue = S = 0, me = null, ge = R.next(); $ !== null && !ge.done; ue++, ge = R.next()) {
        $.index > ue ? (me = $, $ = null) : me = $.sibling;
        var Hl = _(T, $, ge.value, w);
        if (Hl === null) {
          $ === null && ($ = me);
          break;
        }
        e && $ && Hl.alternate === null && t(T, $), S = i(Hl, S, ue), ve === null ? F = Hl : ve.sibling = Hl, ve = Hl, $ = me;
      }
      if (ge.done)
        return l(T, $), ye && Ft(T, ue), F;
      if ($ === null) {
        for (; !ge.done; ue++, ge = R.next())
          ge = j(T, ge.value, w), ge !== null && (S = i(ge, S, ue), ve === null ? F = ge : ve.sibling = ge, ve = ge);
        return ye && Ft(T, ue), F;
      }
      for ($ = n($); !ge.done; ue++, ge = R.next())
        ge = N($, T, ue, ge.value, w), ge !== null && (e && ge.alternate !== null && $.delete(ge.key === null ? ue : ge.key), S = i(ge, S, ue), ve === null ? F = ge : ve.sibling = ge, ve = ge);
      return e && $.forEach(function(Cp) {
        return t(T, Cp);
      }), ye && Ft(T, ue), F;
    }
    function Oe(T, S, R, w) {
      if (typeof R == "object" && R !== null && R.type === U && R.key === null && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case O:
            e: {
              for (var F = R.key; S !== null; ) {
                if (S.key === F) {
                  if (F = R.type, F === U) {
                    if (S.tag === 7) {
                      l(
                        T,
                        S.sibling
                      ), w = a(
                        S,
                        R.props.children
                      ), w.return = T, T = w;
                      break e;
                    }
                  } else if (S.elementType === F || typeof F == "object" && F !== null && F.$$typeof === be && Fl(F) === S.type) {
                    l(
                      T,
                      S.sibling
                    ), w = a(S, R.props), ga(w, R), w.return = T, T = w;
                    break e;
                  }
                  l(T, S);
                  break;
                } else t(T, S);
                S = S.sibling;
              }
              R.type === U ? (w = Zl(
                R.props.children,
                T.mode,
                w,
                R.key
              ), w.return = T, T = w) : (w = Ru(
                R.type,
                R.key,
                R.props,
                null,
                T.mode,
                w
              ), ga(w, R), w.return = T, T = w);
            }
            return o(T);
          case H:
            e: {
              for (F = R.key; S !== null; ) {
                if (S.key === F)
                  if (S.tag === 4 && S.stateNode.containerInfo === R.containerInfo && S.stateNode.implementation === R.implementation) {
                    l(
                      T,
                      S.sibling
                    ), w = a(S, R.children || []), w.return = T, T = w;
                    break e;
                  } else {
                    l(T, S);
                    break;
                  }
                else t(T, S);
                S = S.sibling;
              }
              w = Sc(R, T.mode, w), w.return = T, T = w;
            }
            return o(T);
          case be:
            return R = Fl(R), Oe(
              T,
              S,
              R,
              w
            );
        }
        if (G(R))
          return K(
            T,
            S,
            R,
            w
          );
        if (_e(R)) {
          if (F = _e(R), typeof F != "function") throw Error(f(150));
          return R = F.call(R), W(
            T,
            S,
            R,
            w
          );
        }
        if (typeof R.then == "function")
          return Oe(
            T,
            S,
            Du(R),
            w
          );
        if (R.$$typeof === ee)
          return Oe(
            T,
            S,
            _u(T, R),
            w
          );
        Uu(T, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, S !== null && S.tag === 6 ? (l(T, S.sibling), w = a(S, R), w.return = T, T = w) : (l(T, S), w = bc(R, T.mode, w), w.return = T, T = w), o(T)) : l(T, S);
    }
    return function(T, S, R, w) {
      try {
        va = 0;
        var F = Oe(
          T,
          S,
          R,
          w
        );
        return Cn = null, F;
      } catch ($) {
        if ($ === zn || $ === Cu) throw $;
        var ve = bt(29, $, null, T.mode);
        return ve.lanes = w, ve.return = T, ve;
      }
    };
  }
  var Pl = Ks(!0), Js = Ks(!1), Sl = !1;
  function Uc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Mc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function El(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Se & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), Ns(e, null, l), t;
    }
    return Tu(e, n, t, l), Au(e);
  }
  function ba(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Lf(e, l);
    }
  }
  function wc(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var o = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = o : i = i.next = o, l = l.next;
        } while (l !== null);
        i === null ? a = i = t : i = i.next = t;
      } else a = i = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: i,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var jc = !1;
  function Sa() {
    if (jc) {
      var e = _n;
      if (e !== null) throw e;
    }
  }
  function Ea(e, t, l, n) {
    jc = !1;
    var a = e.updateQueue;
    Sl = !1;
    var i = a.firstBaseUpdate, o = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var g = m, x = g.next;
      g.next = null, o === null ? i = x : o.next = x, o = g;
      var M = e.alternate;
      M !== null && (M = M.updateQueue, m = M.lastBaseUpdate, m !== o && (m === null ? M.firstBaseUpdate = x : m.next = x, M.lastBaseUpdate = g));
    }
    if (i !== null) {
      var j = a.baseState;
      o = 0, M = x = g = null, m = i;
      do {
        var _ = m.lane & -536870913, N = _ !== m.lane;
        if (N ? (he & _) === _ : (n & _) === _) {
          _ !== 0 && _ === On && (jc = !0), M !== null && (M = M.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var K = e, W = m;
            _ = t;
            var Oe = l;
            switch (W.tag) {
              case 1:
                if (K = W.payload, typeof K == "function") {
                  j = K.call(Oe, j, _);
                  break e;
                }
                j = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = W.payload, _ = typeof K == "function" ? K.call(Oe, j, _) : K, _ == null) break e;
                j = D({}, j, _);
                break e;
              case 2:
                Sl = !0;
            }
          }
          _ = m.callback, _ !== null && (e.flags |= 64, N && (e.flags |= 8192), N = a.callbacks, N === null ? a.callbacks = [_] : N.push(_));
        } else
          N = {
            lane: _,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, M === null ? (x = M = N, g = j) : M = M.next = N, o |= _;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          N = m, m = N.next, N.next = null, a.lastBaseUpdate = N, a.shared.pending = null;
        }
      } while (!0);
      M === null && (g = j), a.baseState = g, a.firstBaseUpdate = x, a.lastBaseUpdate = M, i === null && (a.shared.lanes = 0), _l |= o, e.lanes = o, e.memoizedState = j;
    }
  }
  function ks(e, t) {
    if (typeof e != "function")
      throw Error(f(191, e));
    e.call(t);
  }
  function $s(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        ks(l[e], t);
  }
  var Nn = E(null), Mu = E(0);
  function Fs(e, t) {
    e = cl, Q(Mu, e), Q(Nn, t), cl = e | t.baseLanes;
  }
  function Bc() {
    Q(Mu, cl), Q(Nn, Nn.current);
  }
  function Hc() {
    cl = Mu.current, B(Nn), B(Mu);
  }
  var St = E(null), Ut = null;
  function Al(e) {
    var t = e.alternate;
    Q(qe, qe.current & 1), Q(St, e), Ut === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (Ut = e);
  }
  function Lc(e) {
    Q(qe, qe.current), Q(St, e), Ut === null && (Ut = e);
  }
  function Ws(e) {
    e.tag === 22 ? (Q(qe, qe.current), Q(St, e), Ut === null && (Ut = e)) : Rl();
  }
  function Rl() {
    Q(qe, qe.current), Q(St, St.current);
  }
  function Et(e) {
    B(St), Ut === e && (Ut = null), B(qe);
  }
  var qe = E(0);
  function wu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Vr(l) || Zr(l)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var It = 0, ne = null, Re = null, Qe = null, ju = !1, Dn = !1, Il = !1, Bu = 0, Ta = 0, Un = null, b0 = 0;
  function Be() {
    throw Error(f(321));
  }
  function qc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!gt(e[l], t[l])) return !1;
    return !0;
  }
  function Yc(e, t, l, n, a, i) {
    return It = i, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, L.H = e === null || e.memoizedState === null ? jo : tr, Il = !1, i = l(n, a), Il = !1, Dn && (i = Is(
      t,
      l,
      n,
      a
    )), Ps(e), i;
  }
  function Ps(e) {
    L.H = xa;
    var t = Re !== null && Re.next !== null;
    if (It = 0, Qe = Re = ne = null, ju = !1, Ta = 0, Un = null, t) throw Error(f(300));
    e === null || Ve || (e = e.dependencies, e !== null && Ou(e) && (Ve = !0));
  }
  function Is(e, t, l, n) {
    ne = e;
    var a = 0;
    do {
      if (Dn && (Un = null), Ta = 0, Dn = !1, 25 <= a) throw Error(f(301));
      if (a += 1, Qe = Re = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      L.H = Bo, i = t(l, n);
    } while (Dn);
    return i;
  }
  function S0() {
    var e = L.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Aa(t) : t, e = e.useState()[0], (Re !== null ? Re.memoizedState : null) !== e && (ne.flags |= 1024), t;
  }
  function Gc() {
    var e = Bu !== 0;
    return Bu = 0, e;
  }
  function Xc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Qc(e) {
    if (ju) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ju = !1;
    }
    It = 0, Qe = Re = ne = null, Dn = !1, Ta = Bu = 0, Un = null;
  }
  function at() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? ne.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ye() {
    if (Re === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Re.next;
    var t = Qe === null ? ne.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, Re = e;
    else {
      if (e === null)
        throw ne.alternate === null ? Error(f(467)) : Error(f(310));
      Re = e, e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null
      }, Qe === null ? ne.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Aa(e) {
    var t = Ta;
    return Ta += 1, Un === null && (Un = []), e = Qs(Un, e, t), t = ne, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, L.H = t === null || t.memoizedState === null ? jo : tr), e;
  }
  function Lu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Aa(e);
      if (e.$$typeof === ee) return Pe(e);
    }
    throw Error(f(438, String(e)));
  }
  function Vc(e) {
    var t = null, l = ne.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ne.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Hu(), ne.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Ne;
    return t.index++, l;
  }
  function el(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qu(e) {
    var t = Ye();
    return Zc(t, Re, e);
  }
  function Zc(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var o = a.next;
        a.next = i.next, i.next = o;
      }
      t.baseQueue = a = i, n.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var m = o = null, g = null, x = t, M = !1;
      do {
        var j = x.lane & -536870913;
        if (j !== x.lane ? (he & j) === j : (It & j) === j) {
          var _ = x.revertLane;
          if (_ === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), j === On && (M = !0);
          else if ((It & _) === _) {
            x = x.next, _ === On && (M = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, g === null ? (m = g = j, o = i) : g = g.next = j, ne.lanes |= _, _l |= _;
          j = x.action, Il && l(i, j), i = x.hasEagerState ? x.eagerState : l(i, j);
        } else
          _ = {
            lane: j,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, g === null ? (m = g = _, o = i) : g = g.next = _, ne.lanes |= j, _l |= j;
        x = x.next;
      } while (x !== null && x !== t);
      if (g === null ? o = i : g.next = m, !gt(i, e.memoizedState) && (Ve = !0, M && (l = _n, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = o, e.baseQueue = g, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Kc(e) {
    var t = Ye(), l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, i = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var o = a = a.next;
      do
        i = e(i, o.action), o = o.next;
      while (o !== a);
      gt(i, t.memoizedState) || (Ve = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function eo(e, t, l) {
    var n = ne, a = Ye(), i = ye;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var o = !gt(
      (Re || a).memoizedState,
      l
    );
    if (o && (a.memoizedState = l, Ve = !0), a = a.queue, $c(no.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || o || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Mn(
        9,
        { destroy: void 0 },
        lo.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Ce === null) throw Error(f(349));
      i || (It & 127) !== 0 || to(n, t, l);
    }
    return l;
  }
  function to(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ne.updateQueue, t === null ? (t = Hu(), ne.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function lo(e, t, l, n) {
    t.value = l, t.getSnapshot = n, ao(t) && uo(e);
  }
  function no(e, t, l) {
    return l(function() {
      ao(t) && uo(e);
    });
  }
  function ao(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !gt(e, l);
    } catch {
      return !0;
    }
  }
  function uo(e) {
    var t = Vl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Jc(e) {
    var t = at();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Il) {
        hl(!0);
        try {
          l();
        } finally {
          hl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: el,
      lastRenderedState: e
    }, t;
  }
  function io(e, t, l, n) {
    return e.baseState = l, Zc(
      e,
      Re,
      typeof n == "function" ? n : el
    );
  }
  function E0(e, t, l, n, a) {
    if (Xu(e)) throw Error(f(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(o) {
          i.listeners.push(o);
        }
      };
      L.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, co(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function co(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = L.T, o = {};
      L.T = o;
      try {
        var m = l(a, n), g = L.S;
        g !== null && g(o, m), ro(e, t, m);
      } catch (x) {
        kc(e, t, x);
      } finally {
        i !== null && o.types !== null && (i.types = o.types), L.T = i;
      }
    } else
      try {
        i = l(a, n), ro(e, t, i);
      } catch (x) {
        kc(e, t, x);
      }
  }
  function ro(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        fo(e, t, n);
      },
      function(n) {
        return kc(e, t, n);
      }
    ) : fo(e, t, l);
  }
  function fo(e, t, l) {
    t.status = "fulfilled", t.value = l, so(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, co(e, l)));
  }
  function kc(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, so(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function so(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function oo(e, t) {
    return t;
  }
  function ho(e, t) {
    if (ye) {
      var l = Ce.formState;
      if (l !== null) {
        e: {
          var n = ne;
          if (ye) {
            if (De) {
              t: {
                for (var a = De, i = Dt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Mt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                De = Mt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            gl(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = at(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: t
    }, l.queue = n, l = Uo.bind(
      null,
      ne,
      n
    ), n.dispatch = l, n = Jc(!1), i = er.bind(
      null,
      ne,
      !1,
      n.queue
    ), n = at(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = E0.bind(
      null,
      ne,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function mo(e) {
    var t = Ye();
    return yo(t, Re, e);
  }
  function yo(e, t, l) {
    if (t = Zc(
      e,
      t,
      oo
    )[0], e = qu(el)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Aa(t);
      } catch (o) {
        throw o === zn ? Cu : o;
      }
    else n = t;
    t = Ye();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ne.flags |= 2048, Mn(
      9,
      { destroy: void 0 },
      T0.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function T0(e, t) {
    e.action = t;
  }
  function po(e) {
    var t = Ye(), l = Re;
    if (l !== null)
      return yo(t, l, e);
    Ye(), t = t.memoizedState, l = Ye();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Mn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ne.updateQueue, t === null && (t = Hu(), ne.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function vo() {
    return Ye().memoizedState;
  }
  function Yu(e, t, l, n) {
    var a = at();
    ne.flags |= e, a.memoizedState = Mn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Gu(e, t, l, n) {
    var a = Ye();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Re !== null && n !== null && qc(n, Re.memoizedState.deps) ? a.memoizedState = Mn(t, i, l, n) : (ne.flags |= e, a.memoizedState = Mn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function go(e, t) {
    Yu(8390656, 8, e, t);
  }
  function $c(e, t) {
    Gu(2048, 8, e, t);
  }
  function A0(e) {
    ne.flags |= 4;
    var t = ne.updateQueue;
    if (t === null)
      t = Hu(), ne.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function bo(e) {
    var t = Ye().memoizedState;
    return A0({ ref: t, nextImpl: e }), function() {
      if ((Se & 2) !== 0) throw Error(f(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function So(e, t) {
    return Gu(4, 2, e, t);
  }
  function Eo(e, t) {
    return Gu(4, 4, e, t);
  }
  function To(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function() {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Ao(e, t, l) {
    l = l != null ? l.concat([e]) : null, Gu(4, 4, To.bind(null, t, e), l);
  }
  function Fc() {
  }
  function Ro(e, t) {
    var l = Ye();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && qc(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function xo(e, t) {
    var l = Ye();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && qc(t, n[1]))
      return n[0];
    if (n = e(), Il) {
      hl(!0);
      try {
        e();
      } finally {
        hl(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function Wc(e, t, l) {
    return l === void 0 || (It & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Od(), ne.lanes |= e, _l |= e, l);
  }
  function Oo(e, t, l, n) {
    return gt(l, t) ? l : Nn.current !== null ? (e = Wc(e, l, n), gt(e, t) || (Ve = !0), e) : (It & 42) === 0 || (It & 1073741824) !== 0 && (he & 261930) === 0 ? (Ve = !0, e.memoizedState = l) : (e = Od(), ne.lanes |= e, _l |= e, t);
  }
  function _o(e, t, l, n, a) {
    var i = X.p;
    X.p = i !== 0 && 8 > i ? i : 8;
    var o = L.T, m = {};
    L.T = m, er(e, !1, t, l);
    try {
      var g = a(), x = L.S;
      if (x !== null && x(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var M = g0(
          g,
          n
        );
        Ra(
          e,
          t,
          M,
          Rt(e)
        );
      } else
        Ra(
          e,
          t,
          n,
          Rt(e)
        );
    } catch (j) {
      Ra(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: j },
        Rt()
      );
    } finally {
      X.p = i, o !== null && m.types !== null && (o.types = m.types), L.T = o;
    }
  }
  function R0() {
  }
  function Pc(e, t, l, n) {
    if (e.tag !== 5) throw Error(f(476));
    var a = zo(e).queue;
    _o(
      e,
      a,
      t,
      pe,
      l === null ? R0 : function() {
        return Co(e), l(n);
      }
    );
  }
  function zo(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: pe,
      baseState: pe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: pe
      },
      next: null
    };
    var l = {};
    return t.next = {
      memoizedState: l,
      baseState: l,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Co(e) {
    var t = zo(e);
    t.next === null && (t = e.alternate.memoizedState), Ra(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function Ic() {
    return Pe(Ga);
  }
  function No() {
    return Ye().memoizedState;
  }
  function Do() {
    return Ye().memoizedState;
  }
  function x0(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Rt();
          e = El(l);
          var n = Tl(t, e, l);
          n !== null && (dt(n, t, l), ba(n, t, l)), t = { cache: zc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function O0(e, t, l) {
    var n = Rt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xu(e) ? Mo(t, l) : (l = vc(e, t, l, n), l !== null && (dt(l, e, n), wo(l, t, n)));
  }
  function Uo(e, t, l) {
    var n = Rt();
    Ra(e, t, l, n);
  }
  function Ra(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xu(e)) Mo(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var o = t.lastRenderedState, m = i(o, l);
          if (a.hasEagerState = !0, a.eagerState = m, gt(m, o))
            return Tu(e, t, a, 0), Ce === null && Eu(), !1;
        } catch {
        }
      if (l = vc(e, t, a, n), l !== null)
        return dt(l, e, n), wo(l, t, n), !0;
    }
    return !1;
  }
  function er(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Ur(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xu(e)) {
      if (t) throw Error(f(479));
    } else
      t = vc(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Xu(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne;
  }
  function Mo(e, t) {
    Dn = ju = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function wo(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Lf(e, l);
    }
  }
  var xa = {
    readContext: Pe,
    use: Lu,
    useCallback: Be,
    useContext: Be,
    useEffect: Be,
    useImperativeHandle: Be,
    useLayoutEffect: Be,
    useInsertionEffect: Be,
    useMemo: Be,
    useReducer: Be,
    useRef: Be,
    useState: Be,
    useDebugValue: Be,
    useDeferredValue: Be,
    useTransition: Be,
    useSyncExternalStore: Be,
    useId: Be,
    useHostTransitionStatus: Be,
    useFormState: Be,
    useActionState: Be,
    useOptimistic: Be,
    useMemoCache: Be,
    useCacheRefresh: Be
  };
  xa.useEffectEvent = Be;
  var jo = {
    readContext: Pe,
    use: Lu,
    useCallback: function(e, t) {
      return at().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Pe,
    useEffect: go,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Yu(
        4194308,
        4,
        To.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Yu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Yu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = at();
      t = t === void 0 ? null : t;
      var n = e();
      if (Il) {
        hl(!0);
        try {
          e();
        } finally {
          hl(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = at();
      if (l !== void 0) {
        var a = l(t);
        if (Il) {
          hl(!0);
          try {
            l(t);
          } finally {
            hl(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = O0.bind(
        null,
        ne,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = at();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Jc(e);
      var t = e.queue, l = Uo.bind(null, ne, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, t) {
      var l = at();
      return Wc(l, e, t);
    },
    useTransition: function() {
      var e = Jc(!1);
      return e = _o.bind(
        null,
        ne,
        e.queue,
        !0,
        !1
      ), at().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ne, a = at();
      if (ye) {
        if (l === void 0)
          throw Error(f(407));
        l = l();
      } else {
        if (l = t(), Ce === null)
          throw Error(f(349));
        (he & 127) !== 0 || to(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, go(no.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Mn(
        9,
        { destroy: void 0 },
        lo.bind(
          null,
          n,
          i,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = at(), t = Ce.identifierPrefix;
      if (ye) {
        var l = Xt, n = Gt;
        l = (n & ~(1 << 32 - vt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Bu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = b0++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ic,
    useFormState: ho,
    useActionState: ho,
    useOptimistic: function(e) {
      var t = at();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = er.bind(
        null,
        ne,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Vc,
    useCacheRefresh: function() {
      return at().memoizedState = x0.bind(
        null,
        ne
      );
    },
    useEffectEvent: function(e) {
      var t = at(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Se & 2) !== 0)
          throw Error(f(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, tr = {
    readContext: Pe,
    use: Lu,
    useCallback: Ro,
    useContext: Pe,
    useEffect: $c,
    useImperativeHandle: Ao,
    useInsertionEffect: So,
    useLayoutEffect: Eo,
    useMemo: xo,
    useReducer: qu,
    useRef: vo,
    useState: function() {
      return qu(el);
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, t) {
      var l = Ye();
      return Oo(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qu(el)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: eo,
    useId: No,
    useHostTransitionStatus: Ic,
    useFormState: mo,
    useActionState: mo,
    useOptimistic: function(e, t) {
      var l = Ye();
      return io(l, Re, e, t);
    },
    useMemoCache: Vc,
    useCacheRefresh: Do
  };
  tr.useEffectEvent = bo;
  var Bo = {
    readContext: Pe,
    use: Lu,
    useCallback: Ro,
    useContext: Pe,
    useEffect: $c,
    useImperativeHandle: Ao,
    useInsertionEffect: So,
    useLayoutEffect: Eo,
    useMemo: xo,
    useReducer: Kc,
    useRef: vo,
    useState: function() {
      return Kc(el);
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, t) {
      var l = Ye();
      return Re === null ? Wc(l, e, t) : Oo(
        l,
        Re.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Kc(el)[0], t = Ye().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: eo,
    useId: No,
    useHostTransitionStatus: Ic,
    useFormState: po,
    useActionState: po,
    useOptimistic: function(e, t) {
      var l = Ye();
      return Re !== null ? io(l, Re, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Vc,
    useCacheRefresh: Do
  };
  Bo.useEffectEvent = bo;
  function lr(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : D({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var nr = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = El(n);
      a.payload = t, l != null && (a.callback = l), t = Tl(e, a, n), t !== null && (dt(t, e, n), ba(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = El(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Tl(e, a, n), t !== null && (dt(t, e, n), ba(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Rt(), n = El(l);
      n.tag = 2, t != null && (n.callback = t), t = Tl(e, n, l), t !== null && (dt(t, e, l), ba(t, e, l));
    }
  };
  function Ho(e, t, l, n, a, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, o) : t.prototype && t.prototype.isPureReactComponent ? !oa(l, n) || !oa(a, i) : !0;
  }
  function Lo(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && nr.enqueueReplaceState(t, t.state, null);
  }
  function en(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = D({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function qo(e) {
    Su(e);
  }
  function Yo(e) {
    console.error(e);
  }
  function Go(e) {
    Su(e);
  }
  function Qu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Xo(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ar(e, t, l) {
    return l = El(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Qu(e, t);
    }, l;
  }
  function Qo(e) {
    return e = El(e), e.tag = 3, e;
  }
  function Vo(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Xo(t, l, n);
      };
    }
    var o = l.stateNode;
    o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
      Xo(t, l, n), typeof a != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function _0(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && xn(
        t,
        l,
        a,
        !0
      ), l = St.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ut === null ? ti() : l.alternate === null && He === 0 && (He = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Cr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Cr(e, n, a)), !1;
        }
        throw Error(f(435, l.tag));
      }
      return Cr(e, n, a), ti(), !1;
    }
    if (ye)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Ac && (e = Error(f(422), { cause: n }), ma(zt(e, l)))) : (n !== Ac && (t = Error(f(423), {
        cause: n
      }), ma(
        zt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = zt(n, l), a = ar(
        e.stateNode,
        n,
        a
      ), wc(e, a), He !== 4 && (He = 2)), !1;
    var i = Error(f(520), { cause: n });
    if (i = zt(i, l), Ma === null ? Ma = [i] : Ma.push(i), He !== 4 && (He = 2), t === null) return !0;
    n = zt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ar(l.stateNode, n, e), wc(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (zl === null || !zl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Qo(a), Vo(
              a,
              e,
              l,
              n
            ), wc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ur = Error(f(461)), Ve = !1;
  function Ie(e, t, l, n) {
    t.child = e === null ? Js(t, null, l, n) : Pl(
      t,
      e.child,
      l,
      n
    );
  }
  function Zo(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var o = {};
      for (var m in n)
        m !== "ref" && (o[m] = n[m]);
    } else o = n;
    return kl(t), n = Yc(
      e,
      t,
      l,
      o,
      i,
      a
    ), m = Gc(), e !== null && !Ve ? (Xc(e, t, a), tl(e, t, a)) : (ye && m && Ec(t), t.flags |= 1, Ie(e, t, n, a), t.child);
  }
  function Ko(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !gc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Jo(
        e,
        t,
        i,
        n,
        a
      )) : (e = Ru(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !hr(e, a)) {
      var o = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : oa, l(o, n) && e.ref === t.ref)
        return tl(e, t, a);
    }
    return t.flags |= 1, e = $t(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Jo(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (oa(i, n) && e.ref === t.ref)
        if (Ve = !1, t.pendingProps = n = i, hr(e, a))
          (e.flags & 131072) !== 0 && (Ve = !0);
        else
          return t.lanes = e.lanes, tl(e, t, a);
    }
    return ir(
      e,
      t,
      l,
      n,
      a
    );
  }
  function ko(e, t, l, n) {
    var a = n.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, a = 0; n !== null; )
            a = a | n.lanes | n.childLanes, n = n.sibling;
          n = a & ~i;
        } else n = 0, t.child = null;
        return $o(
          e,
          t,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && zu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Fs(t, i) : Bc(), Ws(t);
      else
        return n = t.lanes = 536870912, $o(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (zu(t, i.cachePool), Fs(t, i), Rl(), t.memoizedState = null) : (e !== null && zu(t, null), Bc(), Rl());
    return Ie(e, t, a, l), t.child;
  }
  function Oa(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function $o(e, t, l, n, a) {
    var i = Nc();
    return i = i === null ? null : { parent: Xe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && zu(t, null), Bc(), Ws(t), e !== null && xn(e, t, n, !0), t.childLanes = a, null;
  }
  function Vu(e, t) {
    return t = Ku(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Fo(e, t, l) {
    return Pl(t, e.child, null, l), e = Vu(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function z0(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (n.mode === "hidden")
          return e = Vu(t, n), t.lanes = 536870912, Oa(null, e);
        if (Lc(t), (e = De) ? (e = rh(
          e,
          Dt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: pl !== null ? { id: Gt, overflow: Xt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Us(e), l.return = t, t.child = l, We = t, De = null)) : e = null, e === null) throw gl(t);
        return t.lanes = 536870912, null;
      }
      return Vu(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var o = i.dehydrated;
      if (Lc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Fo(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
      else if (Ve || xn(e, t, l, !1), a = (l & e.childLanes) !== 0, Ve || a) {
        if (n = Ce, n !== null && (o = qf(n, l), o !== 0 && o !== i.retryLane))
          throw i.retryLane = o, Vl(e, o), dt(n, e, o), ur;
        ti(), t = Fo(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, De = Mt(o.nextSibling), We = t, ye = !0, vl = null, Dt = !1, e !== null && js(t, e), t = Vu(t, n), t.flags |= 4096;
      return t;
    }
    return e = $t(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Zu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function ir(e, t, l, n, a) {
    return kl(t), l = Yc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Gc(), e !== null && !Ve ? (Xc(e, t, a), tl(e, t, a)) : (ye && n && Ec(t), t.flags |= 1, Ie(e, t, l, a), t.child);
  }
  function Wo(e, t, l, n, a, i) {
    return kl(t), t.updateQueue = null, l = Is(
      t,
      n,
      l,
      a
    ), Ps(e), n = Gc(), e !== null && !Ve ? (Xc(e, t, i), tl(e, t, i)) : (ye && n && Ec(t), t.flags |= 1, Ie(e, t, l, i), t.child);
  }
  function Po(e, t, l, n, a) {
    if (kl(t), t.stateNode === null) {
      var i = En, o = l.contextType;
      typeof o == "object" && o !== null && (i = Pe(o)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = nr, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Uc(t), o = l.contextType, i.context = typeof o == "object" && o !== null ? Pe(o) : En, i.state = t.memoizedState, o = l.getDerivedStateFromProps, typeof o == "function" && (lr(
        t,
        l,
        o,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (o = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), o !== i.state && nr.enqueueReplaceState(i, i.state, null), Ea(t, n, i, a), Sa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, g = en(l, m);
      i.props = g;
      var x = i.context, M = l.contextType;
      o = En, typeof M == "object" && M !== null && (o = Pe(M));
      var j = l.getDerivedStateFromProps;
      M = typeof j == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, M || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || x !== o) && Lo(
        t,
        i,
        n,
        o
      ), Sl = !1;
      var _ = t.memoizedState;
      i.state = _, Ea(t, n, i, a), Sa(), x = t.memoizedState, m || _ !== x || Sl ? (typeof j == "function" && (lr(
        t,
        l,
        j,
        n
      ), x = t.memoizedState), (g = Sl || Ho(
        t,
        l,
        g,
        n,
        _,
        x,
        o
      )) ? (M || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = x), i.props = n, i.state = x, i.context = o, n = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Mc(e, t), o = t.memoizedProps, M = en(l, o), i.props = M, j = t.pendingProps, _ = i.context, x = l.contextType, g = En, typeof x == "object" && x !== null && (g = Pe(x)), m = l.getDerivedStateFromProps, (x = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== j || _ !== g) && Lo(
        t,
        i,
        n,
        g
      ), Sl = !1, _ = t.memoizedState, i.state = _, Ea(t, n, i, a), Sa();
      var N = t.memoizedState;
      o !== j || _ !== N || Sl || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof m == "function" && (lr(
        t,
        l,
        m,
        n
      ), N = t.memoizedState), (M = Sl || Ho(
        t,
        l,
        M,
        n,
        _,
        N,
        g
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, N, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        N,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = N), i.props = n, i.state = N, i.context = g, n = M) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Zu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Pl(
      t,
      e.child,
      null,
      a
    ), t.child = Pl(
      t,
      null,
      l,
      a
    )) : Ie(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = tl(
      e,
      t,
      a
    ), e;
  }
  function Io(e, t, l, n) {
    return Kl(), t.flags |= 256, Ie(e, t, l, n), t.child;
  }
  var cr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function rr(e) {
    return { baseLanes: e, cachePool: Gs() };
  }
  function fr(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= At), e;
  }
  function ed(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (qe.current & 2) !== 0), o && (a = !0, t.flags &= -129), o = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (a ? Al(t) : Rl(), (e = De) ? (e = rh(
          e,
          Dt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: pl !== null ? { id: Gt, overflow: Xt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Us(e), l.return = t, t.child = l, We = t, De = null)) : e = null, e === null) throw gl(t);
        return Zr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = n.children;
      return n = n.fallback, a ? (Rl(), a = t.mode, m = Ku(
        { mode: "hidden", children: m },
        a
      ), n = Zl(
        n,
        a,
        l,
        null
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = rr(l), n.childLanes = fr(
        e,
        o,
        l
      ), t.memoizedState = cr, Oa(null, n)) : (Al(t), sr(t, m));
    }
    var g = e.memoizedState;
    if (g !== null && (m = g.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (Al(t), t.flags &= -257, t = or(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Rl(), t.child = e.child, t.flags |= 128, t = null) : (Rl(), m = n.fallback, a = t.mode, n = Ku(
          { mode: "visible", children: n.children },
          a
        ), m = Zl(
          m,
          a,
          l,
          null
        ), m.flags |= 2, n.return = t, m.return = t, n.sibling = m, t.child = n, Pl(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = rr(l), n.childLanes = fr(
          e,
          o,
          l
        ), t.memoizedState = cr, t = Oa(null, n));
      else if (Al(t), Zr(m)) {
        if (o = m.nextSibling && m.nextSibling.dataset, o) var x = o.dgst;
        o = x, n = Error(f(419)), n.stack = "", n.digest = o, ma({ value: n, source: null, stack: null }), t = or(
          e,
          t,
          l
        );
      } else if (Ve || xn(e, t, l, !1), o = (l & e.childLanes) !== 0, Ve || o) {
        if (o = Ce, o !== null && (n = qf(o, l), n !== 0 && n !== g.retryLane))
          throw g.retryLane = n, Vl(e, n), dt(o, e, n), ur;
        Vr(m) || ti(), t = or(
          e,
          t,
          l
        );
      } else
        Vr(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, De = Mt(
          m.nextSibling
        ), We = t, ye = !0, vl = null, Dt = !1, e !== null && js(t, e), t = sr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Rl(), m = n.fallback, a = t.mode, g = e.child, x = g.sibling, n = $t(g, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = g.subtreeFlags & 65011712, x !== null ? m = $t(
      x,
      m
    ) : (m = Zl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, Oa(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = rr(l) : (a = m.cachePool, a !== null ? (g = Xe._currentValue, a = a.parent !== g ? { parent: g, pool: g } : a) : a = Gs(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = fr(
      e,
      o,
      l
    ), t.memoizedState = cr, Oa(e.child, n)) : (Al(t), l = e.child, e = l.sibling, l = $t(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function sr(e, t) {
    return t = Ku(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ku(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function or(e, t, l) {
    return Pl(t, e.child, null, l), e = sr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function td(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Oc(e.return, t, l);
  }
  function dr(e, t, l, n, a, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = n, o.tail = l, o.tailMode = a, o.treeForkCount = i);
  }
  function ld(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var o = qe.current, m = (o & 2) !== 0;
    if (m ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Q(qe, o), Ie(e, t, n, l), n = ye ? ha : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && td(e, l, t);
        else if (e.tag === 19)
          td(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "forwards":
        for (l = t.child, a = null; l !== null; )
          e = l.alternate, e !== null && wu(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), dr(
          t,
          !1,
          a,
          l,
          i,
          n
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && wu(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        dr(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        dr(
          t,
          !1,
          null,
          null,
          void 0,
          n
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function tl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), _l |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (xn(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(f(153));
    if (t.child !== null) {
      for (e = t.child, l = $t(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = $t(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function hr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function C0(e, t, l) {
    switch (t.tag) {
      case 3:
        nt(t, t.stateNode.containerInfo), bl(t, Xe, e.memoizedState.cache), Kl();
        break;
      case 27:
      case 5:
        Pn(t);
        break;
      case 4:
        nt(t, t.stateNode.containerInfo);
        break;
      case 10:
        bl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Lc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Al(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ed(e, t, l) : (Al(t), e = tl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Al(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (xn(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return ld(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Q(qe, qe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, ko(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        bl(t, Xe, e.memoizedState.cache);
    }
    return tl(e, t, l);
  }
  function nd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ve = !0;
      else {
        if (!hr(e, l) && (t.flags & 128) === 0)
          return Ve = !1, C0(
            e,
            t,
            l
          );
        Ve = (e.flags & 131072) !== 0;
      }
    else
      Ve = !1, ye && (t.flags & 1048576) !== 0 && ws(t, ha, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Fl(t.elementType), t.type = e, typeof e == "function")
            gc(e) ? (n = en(e, n), t.tag = 1, t = Po(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = ir(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === P) {
                t.tag = 11, t = Zo(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === I) {
                t.tag = 14, t = Ko(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = ut(e) || e, Error(f(306, t, ""));
          }
        }
        return t;
      case 0:
        return ir(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = en(
          n,
          t.pendingProps
        ), Po(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (nt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(f(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Mc(e, t), Ea(t, n, null, l);
          var o = t.memoizedState;
          if (n = o.cache, bl(t, Xe, n), n !== i.cache && _c(
            t,
            [Xe],
            l,
            !0
          ), Sa(), n = o.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: o.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Io(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = zt(
                Error(f(424)),
                t
              ), ma(a), t = Io(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, De = Mt(e.firstChild), We = t, ye = !0, vl = null, Dt = !0, l = Js(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Kl(), n === a) {
              t = tl(
                e,
                t,
                l
              );
              break e;
            }
            Ie(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Zu(e, t), e === null ? (l = mh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = ri(
          se.current
        ).createElement(l), n[Fe] = t, n[it] = e, et(n, l, e), Je(n), t.stateNode = n) : t.memoizedState = mh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Pn(t), e === null && ye && (n = t.stateNode = oh(
          t.type,
          t.pendingProps,
          se.current
        ), We = t, Dt = !0, a = De, Ul(t.type) ? (Kr = a, De = Mt(n.firstChild)) : De = a), Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), Zu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((a = n = De) && (n = up(
          n,
          t.type,
          t.pendingProps,
          Dt
        ), n !== null ? (t.stateNode = n, We = t, De = Mt(n.firstChild), Dt = !1, a = !0) : a = !1), a || gl(t)), Pn(t), a = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, n = i.children, Gr(a, i) ? n = null : o !== null && Gr(a, o) && (t.flags |= 32), t.memoizedState !== null && (a = Yc(
          e,
          t,
          S0,
          null,
          null,
          l
        ), Ga._currentValue = a), Zu(e, t), Ie(e, t, n, l), t.child;
      case 6:
        return e === null && ye && ((e = l = De) && (l = ip(
          l,
          t.pendingProps,
          Dt
        ), l !== null ? (t.stateNode = l, We = t, De = null, e = !0) : e = !1), e || gl(t)), null;
      case 13:
        return ed(e, t, l);
      case 4:
        return nt(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = Pl(
          t,
          null,
          n,
          l
        ) : Ie(e, t, n, l), t.child;
      case 11:
        return Zo(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return Ie(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, bl(t, t.type, n.value), Ie(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, kl(t), a = Pe(a), n = n(a), t.flags |= 1, Ie(e, t, n, l), t.child;
      case 14:
        return Ko(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Jo(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return ld(e, t, l);
      case 31:
        return z0(e, t, l);
      case 22:
        return ko(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return kl(t), n = Pe(Xe), e === null ? (a = Nc(), a === null && (a = Ce, i = zc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Uc(t), bl(t, Xe, a)) : ((e.lanes & l) !== 0 && (Mc(e, t), Ea(t, null, null, l), Sa()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), bl(t, Xe, n)) : (n = i.cache, bl(t, Xe, n), n !== a.cache && _c(
          t,
          [Xe],
          l,
          !0
        ))), Ie(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function ll(e) {
    e.flags |= 4;
  }
  function mr(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Nd()) e.flags |= 8192;
        else
          throw Wl = Nu, Dc;
    } else e.flags &= -16777217;
  }
  function ad(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !bh(t))
      if (Nd()) e.flags |= 8192;
      else
        throw Wl = Nu, Dc;
  }
  function Ju(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Bf() : 536870912, e.lanes |= t, Hn |= t);
  }
  function _a(e, t) {
    if (!ye)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var n = null; l !== null; )
            l.alternate !== null && (n = l), l = l.sibling;
          n === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : n.sibling = null;
      }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function N0(e, t, l) {
    var n = t.pendingProps;
    switch (Tc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Ue(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Pt(Xe), Le(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Rn(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Rc())), Ue(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (ll(t), i !== null ? (Ue(t), ad(t, i)) : (Ue(t), mr(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (ll(t), Ue(t), ad(t, i)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ll(t), Ue(t), mr(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (au(t), l = se.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ue(t), null;
          }
          e = k.current, Rn(t) ? Bs(t) : (e = oh(a, n, l), t.stateNode = e, ll(t));
        }
        return Ue(t), null;
      case 5:
        if (au(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(f(166));
            return Ue(t), null;
          }
          if (i = k.current, Rn(t))
            Bs(t);
          else {
            var o = ri(
              se.current
            );
            switch (i) {
              case 1:
                i = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = o.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? o.createElement("select", {
                      is: n.is
                    }) : o.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? o.createElement(a, { is: n.is }) : o.createElement(a);
                }
            }
            i[Fe] = t, i[it] = n;
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                i.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t)
                  break e;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            t.stateNode = i;
            e: switch (et(i, a, n), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && ll(t);
          }
        }
        return Ue(t), mr(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(f(166));
          if (e = se.current, Rn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = We, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Fe] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || eh(e.nodeValue, l)), e || gl(t, !0);
          } else
            e = ri(e).createTextNode(
              n
            ), e[Fe] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Rn(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
              e[Fe] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            l = Rc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(f(558));
        }
        return Ue(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Rn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(f(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(f(317));
              a[Fe] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), a = !1;
          } else
            a = Rc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return Et(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ju(t, t.updateQueue), Ue(t), null);
      case 4:
        return Le(), e === null && Br(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return Pt(t.type), Ue(t), null;
      case 19:
        if (B(qe), n = t.memoizedState, n === null) return Ue(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) _a(n, !1);
          else {
            if (He !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = wu(e), i !== null) {
                  for (t.flags |= 128, _a(n, !1), e = i.updateQueue, t.updateQueue = e, Ju(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Ds(l, e), l = l.sibling;
                  return Q(
                    qe,
                    qe.current & 1 | 2
                  ), ye && Ft(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > Pu && (t.flags |= 128, a = !0, _a(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = wu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ju(t, e), _a(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ye)
                return Ue(t), null;
            } else
              2 * yt() - n.renderingStartTime > Pu && l !== 536870912 && (t.flags |= 128, a = !0, _a(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = qe.current, Q(
          qe,
          a ? l & 1 | 2 : l & 1
        ), ye && Ft(t, n.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Et(t), Hc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), l = t.updateQueue, l !== null && Ju(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && B($l), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Pt(Xe), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function D0(e, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Pt(Xe), Le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return au(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(f(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(f(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(qe), null;
      case 4:
        return Le(), null;
      case 10:
        return Pt(t.type), null;
      case 22:
      case 23:
        return Et(t), Hc(), e !== null && B($l), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Pt(Xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ud(e, t) {
    switch (Tc(t), t.tag) {
      case 3:
        Pt(Xe), Le();
        break;
      case 26:
      case 27:
      case 5:
        au(t);
        break;
      case 4:
        Le();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        B(qe);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        Et(t), Hc(), e !== null && B($l);
        break;
      case 24:
        Pt(Xe);
    }
  }
  function za(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var a = n.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var i = l.create, o = l.inst;
            n = i(), o.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (m) {
      Ae(t, t.return, m);
    }
  }
  function xl(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var o = n.inst, m = o.destroy;
            if (m !== void 0) {
              o.destroy = void 0, a = t;
              var g = l, x = m;
              try {
                x();
              } catch (M) {
                Ae(
                  a,
                  g,
                  M
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (M) {
      Ae(t, t.return, M);
    }
  }
  function id(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        $s(t, l);
      } catch (n) {
        Ae(e, e.return, n);
      }
    }
  }
  function cd(e, t, l) {
    l.props = en(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Ae(e, t, n);
    }
  }
  function Ca(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(n) : l.current = n;
      }
    } catch (a) {
      Ae(e, t, a);
    }
  }
  function Qt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Ae(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Ae(e, t, a);
        }
      else l.current = null;
  }
  function rd(e) {
    var t = e.type, l = e.memoizedProps, n = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && n.focus();
          break e;
        case "img":
          l.src ? n.src = l.src : l.srcSet && (n.srcset = l.srcSet);
      }
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function yr(e, t, l) {
    try {
      var n = e.stateNode;
      I0(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Ae(e, e.return, a);
    }
  }
  function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function pr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Jt));
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (vr(e, t, l), e = e.sibling; e !== null; )
        vr(e, t, l), e = e.sibling;
  }
  function ku(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (ku(e, t, l), e = e.sibling; e !== null; )
        ku(e, t, l), e = e.sibling;
  }
  function sd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      et(t, n, l), t[Fe] = e, t[it] = l;
    } catch (i) {
      Ae(e, e.return, i);
    }
  }
  var nl = !1, Ze = !1, gr = !1, od = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
  function U0(e, t) {
    if (e = e.containerInfo, qr = yi, e = Ts(e), oc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var a = n.anchorOffset, i = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var o = 0, m = -1, g = -1, x = 0, M = 0, j = e, _ = null;
            t: for (; ; ) {
              for (var N; j !== l || a !== 0 && j.nodeType !== 3 || (m = o + a), j !== i || n !== 0 && j.nodeType !== 3 || (g = o + n), j.nodeType === 3 && (o += j.nodeValue.length), (N = j.firstChild) !== null; )
                _ = j, j = N;
              for (; ; ) {
                if (j === e) break t;
                if (_ === l && ++x === a && (m = o), _ === i && ++M === n && (g = o), (N = j.nextSibling) !== null) break;
                j = _, _ = j.parentNode;
              }
              j = N;
            }
            l = m === -1 || g === -1 ? null : { start: m, end: g };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Yr = { focusedElem: e, selectionRange: l }, yi = !1, ke = t; ke !== null; )
      if (t = ke, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ke = e;
      else
        for (; ke !== null; ) {
          switch (t = ke, i = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  a = e[l], a.ref.impl = a.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                e = void 0, l = t, a = i.memoizedProps, i = i.memoizedState, n = l.stateNode;
                try {
                  var K = en(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    K,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (W) {
                  Ae(
                    l,
                    l.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Qr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qr(e);
                      break;
                    default:
                      e.textContent = "";
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
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ke = e;
            break;
          }
          ke = t.return;
        }
  }
  function dd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ul(e, l), n & 4 && za(5, l);
        break;
      case 1:
        if (ul(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (o) {
              Ae(l, l.return, o);
            }
          else {
            var a = en(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (o) {
              Ae(
                l,
                l.return,
                o
              );
            }
          }
        n & 64 && id(l), n & 512 && Ca(l, l.return);
        break;
      case 3:
        if (ul(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
          if (t = null, l.child !== null)
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            $s(e, t);
          } catch (o) {
            Ae(l, l.return, o);
          }
        }
        break;
      case 27:
        t === null && n & 4 && sd(l);
      case 26:
      case 5:
        ul(e, l), t === null && n & 4 && rd(l), n & 512 && Ca(l, l.return);
        break;
      case 12:
        ul(e, l);
        break;
      case 31:
        ul(e, l), n & 4 && yd(e, l);
        break;
      case 13:
        ul(e, l), n & 4 && pd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = G0.bind(
          null,
          l
        ), cp(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || nl, !n) {
          t = t !== null && t.memoizedState !== null || Ze, a = nl;
          var i = Ze;
          nl = n, (Ze = t) && !i ? il(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(e, l), nl = a, Ze = i;
        }
        break;
      case 30:
        break;
      default:
        ul(e, l);
    }
  }
  function hd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, hd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ki(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Me = null, rt = !1;
  function al(e, t, l) {
    for (l = l.child; l !== null; )
      md(e, t, l), l = l.sibling;
  }
  function md(e, t, l) {
    if (pt && typeof pt.onCommitFiberUnmount == "function")
      try {
        pt.onCommitFiberUnmount(In, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ze || Qt(l, t), al(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ze || Qt(l, t);
        var n = Me, a = rt;
        Ul(l.type) && (Me = l.stateNode, rt = !1), al(
          e,
          t,
          l
        ), La(l.stateNode), Me = n, rt = a;
        break;
      case 5:
        Ze || Qt(l, t);
      case 6:
        if (n = Me, a = rt, Me = null, al(
          e,
          t,
          l
        ), Me = n, rt = a, Me !== null)
          if (rt)
            try {
              (Me.nodeType === 9 ? Me.body : Me.nodeName === "HTML" ? Me.ownerDocument.body : Me).removeChild(l.stateNode);
            } catch (i) {
              Ae(
                l,
                t,
                i
              );
            }
          else
            try {
              Me.removeChild(l.stateNode);
            } catch (i) {
              Ae(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Me !== null && (rt ? (e = Me, ih(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Zn(e)) : ih(Me, l.stateNode));
        break;
      case 4:
        n = Me, a = rt, Me = l.stateNode.containerInfo, rt = !0, al(
          e,
          t,
          l
        ), Me = n, rt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xl(2, l, t), Ze || xl(4, l, t), al(
          e,
          t,
          l
        );
        break;
      case 1:
        Ze || (Qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && cd(
          l,
          t,
          n
        )), al(
          e,
          t,
          l
        );
        break;
      case 21:
        al(
          e,
          t,
          l
        );
        break;
      case 22:
        Ze = (n = Ze) || l.memoizedState !== null, al(
          e,
          t,
          l
        ), Ze = n;
        break;
      default:
        al(
          e,
          t,
          l
        );
    }
  }
  function yd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Zn(e);
      } catch (l) {
        Ae(t, t.return, l);
      }
    }
  }
  function pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Zn(e);
      } catch (l) {
        Ae(t, t.return, l);
      }
  }
  function M0(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new od()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new od()), t;
      default:
        throw Error(f(435, e.tag));
    }
  }
  function $u(e, t) {
    var l = M0(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = X0.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function ft(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, o = t, m = o;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ul(m.type)) {
                Me = m.stateNode, rt = !1;
                break e;
              }
              break;
            case 5:
              Me = m.stateNode, rt = !1;
              break e;
            case 3:
            case 4:
              Me = m.stateNode.containerInfo, rt = !0;
              break e;
          }
          m = m.return;
        }
        if (Me === null) throw Error(f(160));
        md(i, o, a), Me = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        vd(t, e), t = t.sibling;
  }
  var Ht = null;
  function vd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, e), st(e), n & 4 && (xl(3, e, e.return), za(3, e), xl(5, e, e.return));
        break;
      case 1:
        ft(t, e), st(e), n & 512 && (Ze || l === null || Qt(l, l.return)), n & 64 && nl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Ht;
        if (ft(t, e), st(e), n & 512 && (Ze || l === null || Qt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[la] || i[Fe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), et(i, n, l), i[Fe] = e, Je(i), n = i;
                      break e;
                    case "link":
                      var o = vh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (o) {
                        for (var m = 0; m < o.length; m++)
                          if (i = o[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            o.splice(m, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), et(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (o = vh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (m = 0; m < o.length; m++)
                          if (i = o[m], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            o.splice(m, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), et(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, n));
                  }
                  i[Fe] = e, Je(i), n = i;
                }
                e.stateNode = n;
              } else
                gh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = ph(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? gh(
              a,
              e.type,
              e.stateNode
            ) : ph(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && yr(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ft(t, e), st(e), n & 512 && (Ze || l === null || Qt(l, l.return)), l !== null && n & 4 && yr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ft(t, e), st(e), n & 512 && (Ze || l === null || Qt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            mn(a, "");
          } catch (K) {
            Ae(e, e.return, K);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, yr(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (gr = !0);
        break;
      case 6:
        if (ft(t, e), st(e), n & 4) {
          if (e.stateNode === null)
            throw Error(f(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (K) {
            Ae(e, e.return, K);
          }
        }
        break;
      case 3:
        if (oi = null, a = Ht, Ht = fi(t.containerInfo), ft(t, e), Ht = a, st(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zn(t.containerInfo);
          } catch (K) {
            Ae(e, e.return, K);
          }
        gr && (gr = !1, gd(e));
        break;
      case 4:
        n = Ht, Ht = fi(
          e.stateNode.containerInfo
        ), ft(t, e), st(e), Ht = n;
        break;
      case 12:
        ft(t, e), st(e);
        break;
      case 31:
        ft(t, e), st(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, $u(e, n)));
        break;
      case 13:
        ft(t, e), st(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Wu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, $u(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var g = l !== null && l.memoizedState !== null, x = nl, M = Ze;
        if (nl = x || a, Ze = M || g, ft(t, e), Ze = M, nl = x, st(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || g || nl || Ze || tn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                g = l = t;
                try {
                  if (i = g.stateNode, a)
                    o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none";
                  else {
                    m = g.stateNode;
                    var j = g.memoizedProps.style, _ = j != null && j.hasOwnProperty("display") ? j.display : null;
                    m.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (K) {
                  Ae(g, g.return, K);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = a ? "" : g.memoizedProps;
                } catch (K) {
                  Ae(g, g.return, K);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                g = t;
                try {
                  var N = g.stateNode;
                  a ? ch(N, !0) : ch(g.stateNode, !1);
                } catch (K) {
                  Ae(g, g.return, K);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, $u(e, l))));
        break;
      case 19:
        ft(t, e), st(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, $u(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, e), st(e);
    }
  }
  function st(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (fd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(f(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = pr(e);
            ku(e, i, a);
            break;
          case 5:
            var o = l.stateNode;
            l.flags & 32 && (mn(o, ""), l.flags &= -33);
            var m = pr(e);
            ku(e, m, o);
            break;
          case 3:
          case 4:
            var g = l.stateNode.containerInfo, x = pr(e);
            vr(
              e,
              x,
              g
            );
            break;
          default:
            throw Error(f(161));
        }
      } catch (M) {
        Ae(e, e.return, M);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function gd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        gd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        dd(e, t.alternate, t), t = t.sibling;
  }
  function tn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xl(4, t, t.return), tn(t);
          break;
        case 1:
          Qt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && cd(
            t,
            t.return,
            l
          ), tn(t);
          break;
        case 27:
          La(t.stateNode);
        case 26:
        case 5:
          Qt(t, t.return), tn(t);
          break;
        case 22:
          t.memoizedState === null && tn(t);
          break;
        case 30:
          tn(t);
          break;
        default:
          tn(t);
      }
      e = e.sibling;
    }
  }
  function il(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, o = i.flags;
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
            } catch (x) {
              Ae(n, n.return, x);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var m = n.stateNode;
            try {
              var g = a.shared.hiddenCallbacks;
              if (g !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < g.length; a++)
                  ks(g[a], m);
            } catch (x) {
              Ae(n, n.return, x);
            }
          }
          l && o & 64 && id(i), Ca(i, i.return);
          break;
        case 27:
          sd(i);
        case 26:
        case 5:
          il(
            a,
            i,
            l
          ), l && n === null && o & 4 && rd(i), Ca(i, i.return);
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
          ), l && o & 4 && yd(a, i);
          break;
        case 13:
          il(
            a,
            i,
            l
          ), l && o & 4 && pd(a, i);
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
      t = t.sibling;
    }
  }
  function br(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ya(l));
  }
  function Sr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ya(e));
  }
  function Lt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        bd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function bd(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && za(9, t);
        break;
      case 1:
        Lt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ya(e)));
        break;
      case 12:
        if (a & 2048) {
          Lt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, o = i.id, m = i.onPostCommit;
            typeof m == "function" && m(
              o,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Ae(t, t.return, g);
          }
        } else
          Lt(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Lt(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Lt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, o = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : Na(e, t) : i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, wn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && br(o, t);
        break;
      case 24:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && Sr(t.alternate, t);
        break;
      default:
        Lt(
          e,
          t,
          l,
          n
        );
    }
  }
  function wn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, o = t, m = l, g = n, x = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            i,
            o,
            m,
            g,
            a
          ), za(8, o);
          break;
        case 23:
          break;
        case 22:
          var M = o.stateNode;
          o.memoizedState !== null ? M._visibility & 2 ? wn(
            i,
            o,
            m,
            g,
            a
          ) : Na(
            i,
            o
          ) : (M._visibility |= 2, wn(
            i,
            o,
            m,
            g,
            a
          )), a && x & 2048 && br(
            o.alternate,
            o
          );
          break;
        case 24:
          wn(
            i,
            o,
            m,
            g,
            a
          ), a && x & 2048 && Sr(o.alternate, o);
          break;
        default:
          wn(
            i,
            o,
            m,
            g,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Na(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Na(l, n), a & 2048 && br(
              n.alternate,
              n
            );
            break;
          case 24:
            Na(l, n), a & 2048 && Sr(n.alternate, n);
            break;
          default:
            Na(l, n);
        }
        t = t.sibling;
      }
  }
  var Da = 8192;
  function jn(e, t, l) {
    if (e.subtreeFlags & Da)
      for (e = e.child; e !== null; )
        Sd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Sd(e, t, l) {
    switch (e.tag) {
      case 26:
        jn(
          e,
          t,
          l
        ), e.flags & Da && e.memoizedState !== null && bp(
          l,
          Ht,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        jn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Ht;
        Ht = fi(e.stateNode.containerInfo), jn(
          e,
          t,
          l
        ), Ht = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Da, Da = 16777216, jn(
          e,
          t,
          l
        ), Da = n) : jn(
          e,
          t,
          l
        ));
        break;
      default:
        jn(
          e,
          t,
          l
        );
    }
  }
  function Ed(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ua(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ke = n, Ad(
            n,
            e
          );
        }
      Ed(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Td(e), e = e.sibling;
  }
  function Td(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ua(e), e.flags & 2048 && xl(9, e, e.return);
        break;
      case 3:
        Ua(e);
        break;
      case 12:
        Ua(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Fu(e)) : Ua(e);
        break;
      default:
        Ua(e);
    }
  }
  function Fu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          ke = n, Ad(
            n,
            e
          );
        }
      Ed(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, t, t.return), Fu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Fu(t));
          break;
        default:
          Fu(t);
      }
      e = e.sibling;
    }
  }
  function Ad(e, t) {
    for (; ke !== null; ) {
      var l = ke;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          xl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ya(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, ke = n;
      else
        e: for (l = e; ke !== null; ) {
          n = ke;
          var a = n.sibling, i = n.return;
          if (hd(n), n === l) {
            ke = null;
            break e;
          }
          if (a !== null) {
            a.return = i, ke = a;
            break e;
          }
          ke = i;
        }
    }
  }
  var w0 = {
    getCacheForType: function(e) {
      var t = Pe(Xe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Pe(Xe).controller.signal;
    }
  }, j0 = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, Ce = null, oe = null, he = 0, Te = 0, Tt = null, Ol = !1, Bn = !1, Er = !1, cl = 0, He = 0, _l = 0, ln = 0, Tr = 0, At = 0, Hn = 0, Ma = null, ot = null, Ar = !1, Wu = 0, Rd = 0, Pu = 1 / 0, Iu = null, zl = null, Ke = 0, Cl = null, Ln = null, rl = 0, Rr = 0, xr = null, xd = null, wa = 0, Or = null;
  function Rt() {
    return (Se & 2) !== 0 && he !== 0 ? he & -he : L.T !== null ? Ur() : Yf();
  }
  function Od() {
    if (At === 0)
      if ((he & 536870912) === 0 || ye) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), At = e;
      } else At = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), At;
  }
  function dt(e, t, l) {
    (e === Ce && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (qn(e, 0), Nl(
      e,
      he,
      At,
      !1
    )), ta(e, l), ((Se & 2) === 0 || e !== Ce) && (e === Ce && ((Se & 2) === 0 && (ln |= l), He === 4 && Nl(
      e,
      he,
      At,
      !1
    )), Vt(e));
  }
  function _d(e, t, l) {
    if ((Se & 6) !== 0) throw Error(f(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ea(e, t), a = n ? L0(e, t) : zr(e, t, !0), i = n;
    do {
      if (a === 0) {
        Bn && !n && Nl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !B0(l)) {
          a = zr(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var o = 0;
          else
            o = e.pendingLanes & -536870913, o = o !== 0 ? o : o & 536870912 ? 536870912 : 0;
          if (o !== 0) {
            t = o;
            e: {
              var m = e;
              a = Ma;
              var g = m.current.memoizedState.isDehydrated;
              if (g && (qn(m, o).flags |= 256), o = zr(
                m,
                o,
                !1
              ), o !== 2) {
                if (Er && !g) {
                  m.errorRecoveryDisabledLanes |= i, ln |= i, a = 4;
                  break e;
                }
                i = ot, ot = a, i !== null && (ot === null ? ot = i : ot.push.apply(
                  ot,
                  i
                ));
              }
              a = o;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          qn(e, 0), Nl(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = a, i) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Nl(
                n,
                t,
                At,
                !Ol
              );
              break e;
            case 2:
              ot = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && (a = Wu + 300 - yt(), 10 < a)) {
            if (Nl(
              n,
              t,
              At,
              !Ol
            ), fu(n, 0, !0) !== 0) break e;
            rl = t, n.timeoutHandle = ah(
              zd.bind(
                null,
                n,
                l,
                ot,
                Iu,
                Ar,
                t,
                At,
                ln,
                Hn,
                Ol,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          zd(
            n,
            l,
            ot,
            Iu,
            Ar,
            t,
            At,
            ln,
            Hn,
            Ol,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Vt(e);
  }
  function zd(e, t, l, n, a, i, o, m, g, x, M, j, _, N) {
    if (e.timeoutHandle = -1, j = t.subtreeFlags, j & 8192 || (j & 16785408) === 16785408) {
      j = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Jt
      }, Sd(
        t,
        i,
        j
      );
      var K = (i & 62914560) === i ? Wu - yt() : (i & 4194048) === i ? Rd - yt() : 0;
      if (K = Sp(
        j,
        K
      ), K !== null) {
        rl = i, e.cancelPendingCommit = K(
          Bd.bind(
            null,
            e,
            t,
            i,
            l,
            n,
            a,
            o,
            m,
            g,
            M,
            j,
            null,
            _,
            N
          )
        ), Nl(e, i, o, !x);
        return;
      }
    }
    Bd(
      e,
      t,
      i,
      l,
      n,
      a,
      o,
      m,
      g
    );
  }
  function B0(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!gt(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (l = t.child, t.subtreeFlags & 16384 && l !== null)
        l.return = t, t = l;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Nl(e, t, l, n) {
    t &= ~Tr, t &= ~ln, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - vt(a), o = 1 << i;
      n[i] = -1, a &= ~o;
    }
    l !== 0 && Hf(e, l, t);
  }
  function ei() {
    return (Se & 6) === 0 ? (ja(0), !1) : !0;
  }
  function _r() {
    if (oe !== null) {
      if (Te === 0)
        var e = oe.return;
      else
        e = oe, Wt = Jl = null, Qc(e), Cn = null, va = 0, e = oe;
      for (; e !== null; )
        ud(e.alternate, e), e = e.return;
      oe = null;
    }
  }
  function qn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, lp(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), rl = 0, _r(), Ce = e, oe = l = $t(e.current, null), he = t, Te = 0, Tt = null, Ol = !1, Bn = ea(e, t), Er = !1, Hn = At = Tr = ln = _l = He = 0, ot = Ma = null, Ar = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - vt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return cl = t, Eu(), l;
  }
  function Cd(e, t) {
    ne = null, L.H = xa, t === zn || t === Cu ? (t = Vs(), Te = 3) : t === Dc ? (t = Vs(), Te = 4) : Te = t === ur ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, oe === null && (He = 1, Qu(
      e,
      zt(t, e.current)
    ));
  }
  function Nd() {
    var e = St.current;
    return e === null ? !0 : (he & 4194048) === he ? Ut === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === Ut : !1;
  }
  function Dd() {
    var e = L.H;
    return L.H = xa, e === null ? xa : e;
  }
  function Ud() {
    var e = L.A;
    return L.A = w0, e;
  }
  function ti() {
    He = 4, Ol || (he & 4194048) !== he && St.current !== null || (Bn = !0), (_l & 134217727) === 0 && (ln & 134217727) === 0 || Ce === null || Nl(
      Ce,
      he,
      At,
      !1
    );
  }
  function zr(e, t, l) {
    var n = Se;
    Se |= 2;
    var a = Dd(), i = Ud();
    (Ce !== e || he !== t) && (Iu = null, qn(e, t)), t = !1;
    var o = He;
    e: do
      try {
        if (Te !== 0 && oe !== null) {
          var m = oe, g = Tt;
          switch (Te) {
            case 8:
              _r(), o = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var x = Te;
              if (Te = 0, Tt = null, Yn(e, m, g, x), l && Bn) {
                o = 0;
                break e;
              }
              break;
            default:
              x = Te, Te = 0, Tt = null, Yn(e, m, g, x);
          }
        }
        H0(), o = He;
        break;
      } catch (M) {
        Cd(e, M);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Wt = Jl = null, Se = n, L.H = a, L.A = i, oe === null && (Ce = null, he = 0, Eu()), o;
  }
  function H0() {
    for (; oe !== null; ) Md(oe);
  }
  function L0(e, t) {
    var l = Se;
    Se |= 2;
    var n = Dd(), a = Ud();
    Ce !== e || he !== t ? (Iu = null, Pu = yt() + 500, qn(e, t)) : Bn = ea(
      e,
      t
    );
    e: do
      try {
        if (Te !== 0 && oe !== null) {
          t = oe;
          var i = Tt;
          t: switch (Te) {
            case 1:
              Te = 0, Tt = null, Yn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Xs(i)) {
                Te = 0, Tt = null, wd(t);
                break;
              }
              t = function() {
                Te !== 2 && Te !== 9 || Ce !== e || (Te = 7), Vt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              Xs(i) ? (Te = 0, Tt = null, wd(t)) : (Te = 0, Tt = null, Yn(e, t, i, 7));
              break;
            case 5:
              var o = null;
              switch (oe.tag) {
                case 26:
                  o = oe.memoizedState;
                case 5:
                case 27:
                  var m = oe;
                  if (o ? bh(o) : m.stateNode.complete) {
                    Te = 0, Tt = null;
                    var g = m.sibling;
                    if (g !== null) oe = g;
                    else {
                      var x = m.return;
                      x !== null ? (oe = x, li(x)) : oe = null;
                    }
                    break t;
                  }
              }
              Te = 0, Tt = null, Yn(e, t, i, 5);
              break;
            case 6:
              Te = 0, Tt = null, Yn(e, t, i, 6);
              break;
            case 8:
              _r(), He = 6;
              break e;
            default:
              throw Error(f(462));
          }
        }
        q0();
        break;
      } catch (M) {
        Cd(e, M);
      }
    while (!0);
    return Wt = Jl = null, L.H = n, L.A = a, Se = l, oe !== null ? 0 : (Ce = null, he = 0, Eu(), He);
  }
  function q0() {
    for (; oe !== null && !ry(); )
      Md(oe);
  }
  function Md(e) {
    var t = nd(e.alternate, e, cl);
    e.memoizedProps = e.pendingProps, t === null ? li(e) : oe = t;
  }
  function wd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Wo(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = Wo(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        Qc(t);
      default:
        ud(l, t), t = oe = Ds(t, cl), t = nd(l, t, cl);
    }
    e.memoizedProps = e.pendingProps, t === null ? li(e) : oe = t;
  }
  function Yn(e, t, l, n) {
    Wt = Jl = null, Qc(t), Cn = null, va = 0;
    var a = t.return;
    try {
      if (_0(
        e,
        a,
        t,
        l,
        he
      )) {
        He = 1, Qu(
          e,
          zt(l, e.current)
        ), oe = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw oe = a, i;
      He = 1, Qu(
        e,
        zt(l, e.current)
      ), oe = null;
      return;
    }
    t.flags & 32768 ? (ye || n === 1 ? e = !0 : Bn || (he & 536870912) !== 0 ? e = !1 : (Ol = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), jd(t, e)) : li(t);
  }
  function li(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        jd(
          t,
          Ol
        );
        return;
      }
      e = t.return;
      var l = N0(
        t.alternate,
        t,
        cl
      );
      if (l !== null) {
        oe = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        oe = t;
        return;
      }
      oe = t = e;
    } while (t !== null);
    He === 0 && (He = 5);
  }
  function jd(e, t) {
    do {
      var l = D0(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, oe = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        oe = e;
        return;
      }
      oe = e = l;
    } while (e !== null);
    He = 6, oe = null;
  }
  function Bd(e, t, l, n, a, i, o, m, g) {
    e.cancelPendingCommit = null;
    do
      ni();
    while (Ke !== 0);
    if ((Se & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (i = t.lanes | t.childLanes, i |= pc, gy(
        e,
        l,
        i,
        o,
        m,
        g
      ), e === Ce && (oe = Ce = null, he = 0), Ln = t, Cl = e, rl = l, Rr = i, xr = a, xd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Q0(uu, function() {
        return Gd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = L.T, L.T = null, a = X.p, X.p = 2, o = Se, Se |= 4;
        try {
          U0(e, t, l);
        } finally {
          Se = o, X.p = a, L.T = n;
        }
      }
      Ke = 1, Hd(), Ld(), qd();
    }
  }
  function Hd() {
    if (Ke === 1) {
      Ke = 0;
      var e = Cl, t = Ln, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = L.T, L.T = null;
        var n = X.p;
        X.p = 2;
        var a = Se;
        Se |= 4;
        try {
          vd(t, e);
          var i = Yr, o = Ts(e.containerInfo), m = i.focusedElem, g = i.selectionRange;
          if (o !== m && m && m.ownerDocument && Es(
            m.ownerDocument.documentElement,
            m
          )) {
            if (g !== null && oc(m)) {
              var x = g.start, M = g.end;
              if (M === void 0 && (M = x), "selectionStart" in m)
                m.selectionStart = x, m.selectionEnd = Math.min(
                  M,
                  m.value.length
                );
              else {
                var j = m.ownerDocument || document, _ = j && j.defaultView || window;
                if (_.getSelection) {
                  var N = _.getSelection(), K = m.textContent.length, W = Math.min(g.start, K), Oe = g.end === void 0 ? W : Math.min(g.end, K);
                  !N.extend && W > Oe && (o = Oe, Oe = W, W = o);
                  var T = Ss(
                    m,
                    W
                  ), S = Ss(
                    m,
                    Oe
                  );
                  if (T && S && (N.rangeCount !== 1 || N.anchorNode !== T.node || N.anchorOffset !== T.offset || N.focusNode !== S.node || N.focusOffset !== S.offset)) {
                    var R = j.createRange();
                    R.setStart(T.node, T.offset), N.removeAllRanges(), W > Oe ? (N.addRange(R), N.extend(S.node, S.offset)) : (R.setEnd(S.node, S.offset), N.addRange(R));
                  }
                }
              }
            }
            for (j = [], N = m; N = N.parentNode; )
              N.nodeType === 1 && j.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < j.length; m++) {
              var w = j[m];
              w.element.scrollLeft = w.left, w.element.scrollTop = w.top;
            }
          }
          yi = !!qr, Yr = qr = null;
        } finally {
          Se = a, X.p = n, L.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function Ld() {
    if (Ke === 2) {
      Ke = 0;
      var e = Cl, t = Ln, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = L.T, L.T = null;
        var n = X.p;
        X.p = 2;
        var a = Se;
        Se |= 4;
        try {
          dd(e, t.alternate, t);
        } finally {
          Se = a, X.p = n, L.T = l;
        }
      }
      Ke = 3;
    }
  }
  function qd() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, fy();
      var e = Cl, t = Ln, l = rl, n = xd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Ln = Cl = null, Yd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (zl = null), Ki(l), t = t.stateNode, pt && typeof pt.onCommitFiberRoot == "function")
        try {
          pt.onCommitFiberRoot(
            In,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = L.T, a = X.p, X.p = 2, L.T = null;
        try {
          for (var i = e.onRecoverableError, o = 0; o < n.length; o++) {
            var m = n[o];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          L.T = t, X.p = a;
        }
      }
      (rl & 3) !== 0 && ni(), Vt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Or ? wa++ : (wa = 0, Or = e) : wa = 0, ja(0);
    }
  }
  function Yd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ya(t)));
  }
  function ni() {
    return Hd(), Ld(), qd(), Gd();
  }
  function Gd() {
    if (Ke !== 5) return !1;
    var e = Cl, t = Rr;
    Rr = 0;
    var l = Ki(rl), n = L.T, a = X.p;
    try {
      X.p = 32 > l ? 32 : l, L.T = null, l = xr, xr = null;
      var i = Cl, o = rl;
      if (Ke = 0, Ln = Cl = null, rl = 0, (Se & 6) !== 0) throw Error(f(331));
      var m = Se;
      if (Se |= 4, Td(i.current), bd(
        i,
        i.current,
        o,
        l
      ), Se = m, ja(0, !1), pt && typeof pt.onPostCommitFiberRoot == "function")
        try {
          pt.onPostCommitFiberRoot(In, i);
        } catch {
        }
      return !0;
    } finally {
      X.p = a, L.T = n, Yd(e, t);
    }
  }
  function Xd(e, t, l) {
    t = zt(l, t), t = ar(e.stateNode, t, 2), e = Tl(e, t, 2), e !== null && (ta(e, 2), Vt(e));
  }
  function Ae(e, t, l) {
    if (e.tag === 3)
      Xd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (zl === null || !zl.has(n))) {
            e = zt(l, e), l = Qo(2), n = Tl(t, l, 2), n !== null && (Vo(
              l,
              n,
              t,
              e
            ), ta(n, 2), Vt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new j0();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Er = !0, a.add(l), e = Y0.bind(null, e, t, l), t.then(e, e));
  }
  function Y0(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ce === e && (he & l) === l && (He === 4 || He === 3 && (he & 62914560) === he && 300 > yt() - Wu ? (Se & 2) === 0 && qn(e, 0) : Tr |= l, Hn === he && (Hn = 0)), Vt(e);
  }
  function Qd(e, t) {
    t === 0 && (t = Bf()), e = Vl(e, t), e !== null && (ta(e, t), Vt(e));
  }
  function G0(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Qd(e, l);
  }
  function X0(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, a = e.memoizedState;
        a !== null && (l = a.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    n !== null && n.delete(t), Qd(e, l);
  }
  function Q0(e, t) {
    return Xi(e, t);
  }
  var ai = null, Gn = null, Nr = !1, ui = !1, Dr = !1, Dl = 0;
  function Vt(e) {
    e !== Gn && e.next === null && (Gn === null ? ai = Gn = e : Gn = Gn.next = e), ui = !0, Nr || (Nr = !0, Z0());
  }
  function ja(e, t) {
    if (!Dr && ui) {
      Dr = !0;
      do
        for (var l = !1, n = ai; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var o = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - vt(42 | e) + 1) - 1, i &= a & ~(o & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Jd(n, i));
          } else
            i = he, i = fu(
              n,
              n === Ce ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || ea(n, i) || (l = !0, Jd(n, i));
          n = n.next;
        }
      while (l);
      Dr = !1;
    }
  }
  function V0() {
    Vd();
  }
  function Vd() {
    ui = Nr = !1;
    var e = 0;
    Dl !== 0 && tp() && (e = Dl);
    for (var t = yt(), l = null, n = ai; n !== null; ) {
      var a = n.next, i = Zd(n, t);
      i === 0 ? (n.next = null, l === null ? ai = a : l.next = a, a === null && (Gn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ui = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || ja(e), Dl !== 0 && (Dl = 0);
  }
  function Zd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var o = 31 - vt(i), m = 1 << o, g = a[o];
      g === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[o] = vy(m, t)) : g <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = Ce, l = he, l = fu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Qi(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ea(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Qi(n), Ki(l)) {
        case 2:
        case 8:
          l = wf;
          break;
        case 32:
          l = uu;
          break;
        case 268435456:
          l = jf;
          break;
        default:
          l = uu;
      }
      return n = Kd.bind(null, e), l = Xi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Qi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Kd(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ni() && e.callbackNode !== l)
      return null;
    var n = he;
    return n = fu(
      e,
      e === Ce ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (_d(e, n, t), Zd(e, yt()), e.callbackNode != null && e.callbackNode === l ? Kd.bind(null, e) : null);
  }
  function Jd(e, t) {
    if (ni()) return null;
    _d(e, t, !0);
  }
  function Z0() {
    np(function() {
      (Se & 6) !== 0 ? Xi(
        Mf,
        V0
      ) : Vd();
    });
  }
  function Ur() {
    if (Dl === 0) {
      var e = On;
      e === 0 && (e = iu, iu <<= 1, (iu & 261888) === 0 && (iu = 256)), Dl = e;
    }
    return Dl;
  }
  function kd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : hu("" + e);
  }
  function $d(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function K0(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = kd(
        (a[it] || null).action
      ), o = n.submitter;
      o && (t = (t = o[it] || null) ? kd(t.formAction) : o.getAttribute("formAction"), t !== null && (i = t, o = null));
      var m = new vu(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Dl !== 0) {
                  var g = o ? $d(a, o) : new FormData(a);
                  Pc(
                    l,
                    {
                      pending: !0,
                      data: g,
                      method: a.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (m.preventDefault(), g = o ? $d(a, o) : new FormData(a), Pc(
                  l,
                  {
                    pending: !0,
                    data: g,
                    method: a.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Mr = 0; Mr < yc.length; Mr++) {
    var wr = yc[Mr], J0 = wr.toLowerCase(), k0 = wr[0].toUpperCase() + wr.slice(1);
    Bt(
      J0,
      "on" + k0
    );
  }
  Bt(xs, "onAnimationEnd"), Bt(Os, "onAnimationIteration"), Bt(_s, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(s0, "onTransitionRun"), Bt(o0, "onTransitionStart"), Bt(d0, "onTransitionCancel"), Bt(zs, "onTransitionEnd"), dn("onMouseEnter", ["mouseout", "mouseover"]), dn("onMouseLeave", ["mouseout", "mouseover"]), dn("onPointerEnter", ["pointerout", "pointerover"]), dn("onPointerLeave", ["pointerout", "pointerover"]), Yl(
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
  var Ba = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ba)
  );
  function Fd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var o = n.length - 1; 0 <= o; o--) {
            var m = n[o], g = m.instance, x = m.currentTarget;
            if (m = m.listener, g !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = x;
            try {
              i(a);
            } catch (M) {
              Su(M);
            }
            a.currentTarget = null, i = g;
          }
        else
          for (o = 0; o < n.length; o++) {
            if (m = n[o], g = m.instance, x = m.currentTarget, m = m.listener, g !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = x;
            try {
              i(a);
            } catch (M) {
              Su(M);
            }
            a.currentTarget = null, i = g;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[Ji];
    l === void 0 && (l = t[Ji] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Wd(t, e, 2, !1), l.add(n));
  }
  function jr(e, t, l) {
    var n = 0;
    t && (n |= 4), Wd(
      l,
      e,
      n,
      t
    );
  }
  var ii = "_reactListening" + Math.random().toString(36).slice(2);
  function Br(e) {
    if (!e[ii]) {
      e[ii] = !0, Qf.forEach(function(l) {
        l !== "selectionchange" && ($0.has(l) || jr(l, !1, e), jr(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ii] || (t[ii] = !0, jr("selectionchange", !1, t));
    }
  }
  function Wd(e, t, l, n) {
    switch (Oh(t)) {
      case 2:
        var a = Ap;
        break;
      case 8:
        a = Rp;
        break;
      default:
        a = Wr;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !lc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function Hr(e, t, l, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var o = n.tag;
        if (o === 3 || o === 4) {
          var m = n.stateNode.containerInfo;
          if (m === a) break;
          if (o === 4)
            for (o = n.return; o !== null; ) {
              var g = o.tag;
              if ((g === 3 || g === 4) && o.stateNode.containerInfo === a)
                return;
              o = o.return;
            }
          for (; m !== null; ) {
            if (o = fn(m), o === null) return;
            if (g = o.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              n = i = o;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    ts(function() {
      var x = i, M = ec(l), j = [];
      e: {
        var _ = Cs.get(e);
        if (_ !== void 0) {
          var N = vu, K = e;
          switch (e) {
            case "keypress":
              if (yu(l) === 0) break e;
            case "keydown":
            case "keyup":
              N = Xy;
              break;
            case "focusin":
              K = "focus", N = ic;
              break;
            case "focusout":
              K = "blur", N = ic;
              break;
            case "beforeblur":
            case "afterblur":
              N = ic;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = as;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Ny;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Zy;
              break;
            case xs:
            case Os:
            case _s:
              N = My;
              break;
            case zs:
              N = Jy;
              break;
            case "scroll":
            case "scrollend":
              N = zy;
              break;
            case "wheel":
              N = $y;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = jy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = is;
              break;
            case "toggle":
            case "beforetoggle":
              N = Wy;
          }
          var W = (t & 4) !== 0, Oe = !W && (e === "scroll" || e === "scrollend"), T = W ? _ !== null ? _ + "Capture" : null : _;
          W = [];
          for (var S = x, R; S !== null; ) {
            var w = S;
            if (R = w.stateNode, w = w.tag, w !== 5 && w !== 26 && w !== 27 || R === null || T === null || (w = aa(S, T), w != null && W.push(
              Ha(S, w, R)
            )), Oe) break;
            S = S.return;
          }
          0 < W.length && (_ = new N(
            _,
            K,
            null,
            l,
            M
          ), j.push({ event: _, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", _ && l !== Ii && (K = l.relatedTarget || l.fromElement) && (fn(K) || K[rn]))
            break e;
          if ((N || _) && (_ = M.window === M ? M : (_ = M.ownerDocument) ? _.defaultView || _.parentWindow : window, N ? (K = l.relatedTarget || l.toElement, N = x, K = K ? fn(K) : null, K !== null && (Oe = h(K), W = K.tag, K !== Oe || W !== 5 && W !== 27 && W !== 6) && (K = null)) : (N = null, K = x), N !== K)) {
            if (W = as, w = "onMouseLeave", T = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (W = is, w = "onPointerLeave", T = "onPointerEnter", S = "pointer"), Oe = N == null ? _ : na(N), R = K == null ? _ : na(K), _ = new W(
              w,
              S + "leave",
              N,
              l,
              M
            ), _.target = Oe, _.relatedTarget = R, w = null, fn(M) === x && (W = new W(
              T,
              S + "enter",
              K,
              l,
              M
            ), W.target = R, W.relatedTarget = Oe, w = W), Oe = w, N && K)
              t: {
                for (W = F0, T = N, S = K, R = 0, w = T; w; w = W(w))
                  R++;
                w = 0;
                for (var F = S; F; F = W(F))
                  w++;
                for (; 0 < R - w; )
                  T = W(T), R--;
                for (; 0 < w - R; )
                  S = W(S), w--;
                for (; R--; ) {
                  if (T === S || S !== null && T === S.alternate) {
                    W = T;
                    break t;
                  }
                  T = W(T), S = W(S);
                }
                W = null;
              }
            else W = null;
            N !== null && Pd(
              j,
              _,
              N,
              W,
              !1
            ), K !== null && Oe !== null && Pd(
              j,
              Oe,
              K,
              W,
              !0
            );
          }
        }
        e: {
          if (_ = x ? na(x) : window, N = _.nodeName && _.nodeName.toLowerCase(), N === "select" || N === "input" && _.type === "file")
            var ve = ms;
          else if (ds(_))
            if (ys)
              ve = c0;
            else {
              ve = u0;
              var $ = a0;
            }
          else
            N = _.nodeName, !N || N.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? x && Pi(x.elementType) && (ve = ms) : ve = i0;
          if (ve && (ve = ve(e, x))) {
            hs(
              j,
              ve,
              l,
              M
            );
            break e;
          }
          $ && $(e, _, x), e === "focusout" && x && _.type === "number" && x.memoizedProps.value != null && Wi(_, "number", _.value);
        }
        switch ($ = x ? na(x) : window, e) {
          case "focusin":
            (ds($) || $.contentEditable === "true") && (gn = $, dc = x, da = null);
            break;
          case "focusout":
            da = dc = gn = null;
            break;
          case "mousedown":
            hc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hc = !1, As(j, l, M);
            break;
          case "selectionchange":
            if (f0) break;
          case "keydown":
          case "keyup":
            As(j, l, M);
        }
        var ue;
        if (rc)
          e: {
            switch (e) {
              case "compositionstart":
                var me = "onCompositionStart";
                break e;
              case "compositionend":
                me = "onCompositionEnd";
                break e;
              case "compositionupdate":
                me = "onCompositionUpdate";
                break e;
            }
            me = void 0;
          }
        else
          vn ? ss(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
        me && (cs && l.locale !== "ko" && (vn || me !== "onCompositionStart" ? me === "onCompositionEnd" && vn && (ue = ls()) : (yl = M, nc = "value" in yl ? yl.value : yl.textContent, vn = !0)), $ = ci(x, me), 0 < $.length && (me = new us(
          me,
          e,
          null,
          l,
          M
        ), j.push({ event: me, listeners: $ }), ue ? me.data = ue : (ue = os(l), ue !== null && (me.data = ue)))), (ue = Iy ? e0(e, l) : t0(e, l)) && (me = ci(x, "onBeforeInput"), 0 < me.length && ($ = new us(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          M
        ), j.push({
          event: $,
          listeners: me
        }), $.data = ue)), K0(
          j,
          e,
          x,
          l,
          M
        );
      }
      Fd(j, t);
    });
  }
  function Ha(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ci(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = aa(e, l), a != null && n.unshift(
        Ha(e, a, i)
      ), a = aa(e, t), a != null && n.push(
        Ha(e, a, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function F0(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Pd(e, t, l, n, a) {
    for (var i = t._reactName, o = []; l !== null && l !== n; ) {
      var m = l, g = m.alternate, x = m.stateNode;
      if (m = m.tag, g !== null && g === n) break;
      m !== 5 && m !== 26 && m !== 27 || x === null || (g = x, a ? (x = aa(l, i), x != null && o.unshift(
        Ha(l, x, g)
      )) : a || (x = aa(l, i), x != null && o.push(
        Ha(l, x, g)
      ))), l = l.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var W0 = /\r\n?/g, P0 = /\u0000|\uFFFD/g;
  function Id(e) {
    return (typeof e == "string" ? e : "" + e).replace(W0, `
`).replace(P0, "");
  }
  function eh(e, t) {
    return t = Id(t), Id(e) === t;
  }
  function xe(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || mn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && mn(e, "" + n);
        break;
      case "className":
        ou(e, "class", n);
        break;
      case "tabIndex":
        ou(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ou(e, l, n);
        break;
      case "style":
        If(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          ou(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (n == null || typeof n == "function" || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = hu("" + n), e.setAttribute(l, n);
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (l === "formAction" ? (t !== "input" && xe(e, t, "name", a.name, a, null), xe(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), xe(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), xe(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (xe(e, t, "encType", a.encType, a, null), xe(e, t, "method", a.method, a, null), xe(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = hu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Jt);
        break;
      case "onScroll":
        n != null && de("scroll", e);
        break;
      case "onScrollEnd":
        n != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
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
          e.removeAttribute("xlink:href");
          break;
        }
        l = hu("" + n), e.setAttributeNS(
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
        n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "" + n) : e.removeAttribute(l);
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
        n && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        n === !0 ? e.setAttribute(l, "") : n !== !1 && n != null && typeof n != "function" && typeof n != "symbol" ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null && typeof n != "function" && typeof n != "symbol" && !isNaN(n) && 1 <= n ? e.setAttribute(l, n) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n) ? e.removeAttribute(l) : e.setAttribute(l, n);
        break;
      case "popover":
        de("beforetoggle", e), de("toggle", e), su(e, "popover", n);
        break;
      case "xlinkActuate":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        su(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Oy.get(l) || l, su(e, l, n));
    }
  }
  function Lr(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        If(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(f(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? mn(e, n) : (typeof n == "number" || typeof n == "bigint") && mn(e, "" + n);
        break;
      case "onScroll":
        n != null && de("scroll", e);
        break;
      case "onScrollEnd":
        n != null && de("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Jt);
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
        if (!Vf.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[it] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : su(e, l, n);
          }
    }
  }
  function et(e, t, l) {
    switch (t) {
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
        de("error", e), de("load", e);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var o = l[i];
            if (o != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  xe(e, t, i, o, l, null);
              }
          }
        a && xe(e, t, "srcSet", l.srcSet, l, null), n && xe(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var m = i = o = a = null, g = null, x = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var M = l[n];
            if (M != null)
              switch (n) {
                case "name":
                  a = M;
                  break;
                case "type":
                  o = M;
                  break;
                case "checked":
                  g = M;
                  break;
                case "defaultChecked":
                  x = M;
                  break;
                case "value":
                  i = M;
                  break;
                case "defaultValue":
                  m = M;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (M != null)
                    throw Error(f(137, t));
                  break;
                default:
                  xe(e, t, n, M, l, null);
              }
          }
        $f(
          e,
          i,
          m,
          g,
          x,
          o,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), n = o = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (m = l[a], m != null))
            switch (a) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                o = m;
                break;
              case "multiple":
                n = m;
              default:
                xe(e, t, a, m, l, null);
            }
        t = i, l = o, e.multiple = !!n, t != null ? hn(e, !!n, t, !1) : l != null && hn(e, !!n, l, !0);
        return;
      case "textarea":
        de("invalid", e), i = a = n = null;
        for (o in l)
          if (l.hasOwnProperty(o) && (m = l[o], m != null))
            switch (o) {
              case "value":
                n = m;
                break;
              case "defaultValue":
                a = m;
                break;
              case "children":
                i = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(f(91));
                break;
              default:
                xe(e, t, o, m, l, null);
            }
        Wf(e, n, a, i);
        return;
      case "option":
        for (g in l)
          l.hasOwnProperty(g) && (n = l[g], n != null) && (g === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : xe(e, t, g, n, l, null));
        return;
      case "dialog":
        de("beforetoggle", e), de("toggle", e), de("cancel", e), de("close", e);
        break;
      case "iframe":
      case "object":
        de("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ba.length; n++)
          de(Ba[n], e);
        break;
      case "image":
        de("error", e), de("load", e);
        break;
      case "details":
        de("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        de("error", e), de("load", e);
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
        for (x in l)
          if (l.hasOwnProperty(x) && (n = l[x], n != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                xe(e, t, x, n, l, null);
            }
        return;
      default:
        if (Pi(t)) {
          for (M in l)
            l.hasOwnProperty(M) && (n = l[M], n !== void 0 && Lr(
              e,
              t,
              M,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && (n = l[m], n != null && xe(e, t, m, n, l, null));
  }
  function I0(e, t, l, n) {
    switch (t) {
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
        var a = null, i = null, o = null, m = null, g = null, x = null, M = null;
        for (N in l) {
          var j = l[N];
          if (l.hasOwnProperty(N) && j != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = j;
              default:
                n.hasOwnProperty(N) || xe(e, t, N, null, n, j);
            }
        }
        for (var _ in n) {
          var N = n[_];
          if (j = l[_], n.hasOwnProperty(_) && (N != null || j != null))
            switch (_) {
              case "type":
                i = N;
                break;
              case "name":
                a = N;
                break;
              case "checked":
                x = N;
                break;
              case "defaultChecked":
                M = N;
                break;
              case "value":
                o = N;
                break;
              case "defaultValue":
                m = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(f(137, t));
                break;
              default:
                N !== j && xe(
                  e,
                  t,
                  _,
                  N,
                  n,
                  j
                );
            }
        }
        Fi(
          e,
          o,
          m,
          g,
          x,
          M,
          i,
          a
        );
        return;
      case "select":
        N = o = m = _ = null;
        for (i in l)
          if (g = l[i], l.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                N = g;
              default:
                n.hasOwnProperty(i) || xe(
                  e,
                  t,
                  i,
                  null,
                  n,
                  g
                );
            }
        for (a in n)
          if (i = n[a], g = l[a], n.hasOwnProperty(a) && (i != null || g != null))
            switch (a) {
              case "value":
                _ = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                o = i;
              default:
                i !== g && xe(
                  e,
                  t,
                  a,
                  i,
                  n,
                  g
                );
            }
        t = m, l = o, n = N, _ != null ? hn(e, !!l, _, !1) : !!n != !!l && (t != null ? hn(e, !!l, t, !0) : hn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = _ = null;
        for (m in l)
          if (a = l[m], l.hasOwnProperty(m) && a != null && !n.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                xe(e, t, m, null, n, a);
            }
        for (o in n)
          if (a = n[o], i = l[o], n.hasOwnProperty(o) && (a != null || i != null))
            switch (o) {
              case "value":
                _ = a;
                break;
              case "defaultValue":
                N = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(f(91));
                break;
              default:
                a !== i && xe(e, t, o, a, n, i);
            }
        Ff(e, _, N);
        return;
      case "option":
        for (var K in l)
          _ = l[K], l.hasOwnProperty(K) && _ != null && !n.hasOwnProperty(K) && (K === "selected" ? e.selected = !1 : xe(
            e,
            t,
            K,
            null,
            n,
            _
          ));
        for (g in n)
          _ = n[g], N = l[g], n.hasOwnProperty(g) && _ !== N && (_ != null || N != null) && (g === "selected" ? e.selected = _ && typeof _ != "function" && typeof _ != "symbol" : xe(
            e,
            t,
            g,
            _,
            n,
            N
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
          _ = l[W], l.hasOwnProperty(W) && _ != null && !n.hasOwnProperty(W) && xe(e, t, W, null, n, _);
        for (x in n)
          if (_ = n[x], N = l[x], n.hasOwnProperty(x) && _ !== N && (_ != null || N != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(f(137, t));
                break;
              default:
                xe(
                  e,
                  t,
                  x,
                  _,
                  n,
                  N
                );
            }
        return;
      default:
        if (Pi(t)) {
          for (var Oe in l)
            _ = l[Oe], l.hasOwnProperty(Oe) && _ !== void 0 && !n.hasOwnProperty(Oe) && Lr(
              e,
              t,
              Oe,
              void 0,
              n,
              _
            );
          for (M in n)
            _ = n[M], N = l[M], !n.hasOwnProperty(M) || _ === N || _ === void 0 && N === void 0 || Lr(
              e,
              t,
              M,
              _,
              n,
              N
            );
          return;
        }
    }
    for (var T in l)
      _ = l[T], l.hasOwnProperty(T) && _ != null && !n.hasOwnProperty(T) && xe(e, t, T, null, n, _);
    for (j in n)
      _ = n[j], N = l[j], !n.hasOwnProperty(j) || _ === N || _ == null && N == null || xe(e, t, j, _, n, N);
  }
  function th(e) {
    switch (e) {
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
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, o = a.initiatorType, m = a.duration;
        if (i && m && th(o)) {
          for (o = 0, m = a.responseEnd, n += 1; n < l.length; n++) {
            var g = l[n], x = g.startTime;
            if (x > m) break;
            var M = g.transferSize, j = g.initiatorType;
            M && th(j) && (g = g.responseEnd, o += M * (g < m ? 1 : (m - x) / (g - x)));
          }
          if (--n, t += 8 * (i + o) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var qr = null, Yr = null;
  function ri(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function lh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function nh(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Gr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xr = null;
  function tp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xr ? !1 : (Xr = e, !0) : (Xr = null, !1);
  }
  var ah = typeof setTimeout == "function" ? setTimeout : void 0, lp = typeof clearTimeout == "function" ? clearTimeout : void 0, uh = typeof Promise == "function" ? Promise : void 0, np = typeof queueMicrotask == "function" ? queueMicrotask : typeof uh < "u" ? function(e) {
    return uh.resolve(null).then(e).catch(ap);
  } : ah;
  function ap(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ul(e) {
    return e === "head";
  }
  function ih(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), Zn(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          La(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, La(l);
          for (var i = l.firstChild; i; ) {
            var o = i.nextSibling, m = i.nodeName;
            i[la] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = o;
          }
        } else
          l === "body" && La(e.ownerDocument.body);
      l = a;
    } while (l);
    Zn(t);
  }
  function ch(e, t) {
    var l = e;
    e = 0;
    do {
      var n = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), n && n.nodeType === 8)
        if (l = n.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = n;
    } while (l);
  }
  function Qr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qr(l), ki(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function up(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[la])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = Mt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ip(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Mt(e.nextSibling), e === null)) return null;
    return e;
  }
  function rh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Mt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Vr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Zr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function cp(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var n = function() {
        t(), l.removeEventListener("DOMContentLoaded", n);
      };
      l.addEventListener("DOMContentLoaded", n), e._reactRetry = n;
    }
  }
  function Mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Kr = null;
  function fh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Mt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function sh(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (t === 0) return e;
          t--;
        } else l !== "/$" && l !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function oh(e, t, l) {
    switch (t = ri(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(f(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(f(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function La(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ki(e);
  }
  var wt = /* @__PURE__ */ new Map(), dh = /* @__PURE__ */ new Set();
  function fi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fl = X.d;
  X.d = {
    f: rp,
    r: fp,
    D: sp,
    C: op,
    L: dp,
    m: hp,
    X: yp,
    S: mp,
    M: pp
  };
  function rp() {
    var e = fl.f(), t = ei();
    return e || t;
  }
  function fp(e) {
    var t = sn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Co(t) : fl.r(e);
  }
  var Xn = typeof document > "u" ? null : document;
  function hh(e, t, l) {
    var n = Xn;
    if (n && typeof t == "string" && t) {
      var a = Ot(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), dh.has(a) || (dh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), et(t, "link", e), Je(t), n.head.appendChild(t)));
    }
  }
  function sp(e) {
    fl.D(e), hh("dns-prefetch", e, null);
  }
  function op(e, t) {
    fl.C(e, t), hh("preconnect", e, t);
  }
  function dp(e, t, l) {
    fl.L(e, t, l);
    var n = Xn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Ot(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ot(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ot(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Ot(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Qn(e);
          break;
        case "script":
          i = Vn(e);
      }
      wt.has(i) || (e = D(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), wt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(qa(i)) || t === "script" && n.querySelector(Ya(i)) || (t = n.createElement("link"), et(t, "link", e), Je(t), n.head.appendChild(t)));
    }
  }
  function hp(e, t) {
    fl.m(e, t);
    var l = Xn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Ot(n) + '"][href="' + Ot(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Vn(e);
      }
      if (!wt.has(i) && (e = D({ rel: "modulepreload", href: e }, t), wt.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ya(i)))
              return;
        }
        n = l.createElement("link"), et(n, "link", e), Je(n), l.head.appendChild(n);
      }
    }
  }
  function mp(e, t, l) {
    fl.S(e, t, l);
    var n = Xn;
    if (n && e) {
      var a = on(n).hoistableStyles, i = Qn(e);
      t = t || "default";
      var o = a.get(i);
      if (!o) {
        var m = { loading: 0, preload: null };
        if (o = n.querySelector(
          qa(i)
        ))
          m.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = wt.get(i)) && Jr(e, l);
          var g = o = n.createElement("link");
          Je(g), et(g, "link", e), g._p = new Promise(function(x, M) {
            g.onload = x, g.onerror = M;
          }), g.addEventListener("load", function() {
            m.loading |= 1;
          }), g.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, si(o, t, n);
        }
        o = {
          type: "stylesheet",
          instance: o,
          count: 1,
          state: m
        }, a.set(i, o);
      }
    }
  }
  function yp(e, t) {
    fl.X(e, t);
    var l = Xn;
    if (l && e) {
      var n = on(l).hoistableScripts, a = Vn(e), i = n.get(a);
      i || (i = l.querySelector(Ya(a)), i || (e = D({ src: e, async: !0 }, t), (t = wt.get(a)) && kr(e, t), i = l.createElement("script"), Je(i), et(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function pp(e, t) {
    fl.M(e, t);
    var l = Xn;
    if (l && e) {
      var n = on(l).hoistableScripts, a = Vn(e), i = n.get(a);
      i || (i = l.querySelector(Ya(a)), i || (e = D({ src: e, async: !0, type: "module" }, t), (t = wt.get(a)) && kr(e, t), i = l.createElement("script"), Je(i), et(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function mh(e, t, l, n) {
    var a = (a = se.current) ? fi(a) : null;
    if (!a) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Qn(l.href), l = on(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Qn(l.href);
          var i = on(
            a
          ).hoistableStyles, o = i.get(e);
          if (o || (a = a.ownerDocument || a, o = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, o), (i = a.querySelector(
            qa(e)
          )) && !i._p && (o.instance = i, o.state.loading = 5), wt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, wt.set(e, l), i || vp(
            a,
            e,
            l,
            o.state
          ))), t && n === null)
            throw Error(f(528, ""));
          return o;
        }
        if (t && n !== null)
          throw Error(f(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Vn(l), l = on(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(f(444, e));
    }
  }
  function Qn(e) {
    return 'href="' + Ot(e) + '"';
  }
  function qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function yh(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function vp(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), et(t, "link", l), Je(t), e.head.appendChild(t));
  }
  function Vn(e) {
    return '[src="' + Ot(e) + '"]';
  }
  function Ya(e) {
    return "script[async]" + e;
  }
  function ph(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Ot(l.href) + '"]'
          );
          if (n)
            return t.instance = n, Je(n), n;
          var a = D({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Je(n), et(n, "style", a), si(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Qn(l.href);
          var i = e.querySelector(
            qa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Je(i), i;
          n = yh(l), (a = wt.get(a)) && Jr(n, a), i = (e.ownerDocument || e).createElement("link"), Je(i);
          var o = i;
          return o._p = new Promise(function(m, g) {
            o.onload = m, o.onerror = g;
          }), et(i, "link", n), t.state.loading |= 4, si(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Vn(l.src), (a = e.querySelector(
            Ya(i)
          )) ? (t.instance = a, Je(a), a) : (n = l, (a = wt.get(i)) && (n = D({}, l), kr(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Je(a), et(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, si(n, l.precedence, e));
    return t.instance;
  }
  function si(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, o = 0; o < n.length; o++) {
      var m = n[o];
      if (m.dataset.precedence === t) i = m;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Jr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function kr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var oi = null;
  function vh(e, t, l) {
    if (oi === null) {
      var n = /* @__PURE__ */ new Map(), a = oi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = oi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[la] || i[Fe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var o = i.getAttribute(t) || "";
        o = e + o;
        var m = n.get(o);
        m ? m.push(i) : n.set(o, [i]);
      }
    }
    return n;
  }
  function gh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function gp(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function bh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function bp(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Qn(n.href), i = t.querySelector(
          qa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = di.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Je(i);
          return;
        }
        i = t.ownerDocument || t, n = yh(n), (a = wt.get(a)) && Jr(n, a), i = i.createElement("link"), Je(i);
        var o = i;
        o._p = new Promise(function(m, g) {
          o.onload = m, o.onerror = g;
        }), et(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = di.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var $r = 0;
  function Sp(e, t) {
    return e.stylesheets && e.count === 0 && mi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && mi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && $r === 0 && ($r = 62500 * ep());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && mi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > $r ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function di() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) mi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var hi = null;
  function mi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hi = /* @__PURE__ */ new Map(), t.forEach(Ep, e), hi = null, di.call(e));
  }
  function Ep(e, t) {
    if (!(t.state.loading & 4)) {
      var l = hi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), hi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var o = a[i];
          (o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (l.set(o.dataset.precedence, o), n = o);
        }
        n && l.set(null, n);
      }
      a = t.instance, o = a.getAttribute("data-precedence"), i = l.get(o) || n, i === n && l.set(null, a), l.set(o, a), this.count++, n = di.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ga = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: pe,
    _currentValue2: pe,
    _threadCount: 0
  };
  function Tp(e, t, l, n, a, i, o, m, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vi(0), this.hiddenUpdates = Vi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Sh(e, t, l, n, a, i, o, m, g, x, M, j) {
    return e = new Tp(
      e,
      t,
      l,
      o,
      g,
      x,
      M,
      j,
      m
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = zc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Uc(i), e;
  }
  function Eh(e) {
    return e ? (e = En, e) : En;
  }
  function Th(e, t, l, n, a, i) {
    a = Eh(a), n.context === null ? n.context = a : n.pendingContext = a, n = El(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Tl(e, n, t), l !== null && (dt(l, e, t), ba(l, e, t));
  }
  function Ah(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Fr(e, t) {
    Ah(e, t), (e = e.alternate) && Ah(e, t);
  }
  function Rh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Vl(e, 67108864);
      t !== null && dt(t, e, 67108864), Fr(e, 67108864);
    }
  }
  function xh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = Zi(t);
      var l = Vl(e, t);
      l !== null && dt(l, e, t), Fr(e, t);
    }
  }
  var yi = !0;
  function Ap(e, t, l, n) {
    var a = L.T;
    L.T = null;
    var i = X.p;
    try {
      X.p = 2, Wr(e, t, l, n);
    } finally {
      X.p = i, L.T = a;
    }
  }
  function Rp(e, t, l, n) {
    var a = L.T;
    L.T = null;
    var i = X.p;
    try {
      X.p = 8, Wr(e, t, l, n);
    } finally {
      X.p = i, L.T = a;
    }
  }
  function Wr(e, t, l, n) {
    if (yi) {
      var a = Pr(n);
      if (a === null)
        Hr(
          e,
          t,
          n,
          pi,
          l
        ), _h(e, n);
      else if (Op(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (_h(e, n), t & 4 && -1 < xp.indexOf(e)) {
        for (; a !== null; ) {
          var i = sn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var o = ql(i.pendingLanes);
                  if (o !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; o; ) {
                      var g = 1 << 31 - vt(o);
                      m.entanglements[1] |= g, o &= ~g;
                    }
                    Vt(i), (Se & 6) === 0 && (Pu = yt() + 500, ja(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Vl(i, 2), m !== null && dt(m, i, 2), ei(), Fr(i, 2);
            }
          if (i = Pr(n), i === null && Hr(
            e,
            t,
            n,
            pi,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Hr(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function Pr(e) {
    return e = ec(e), Ir(e);
  }
  var pi = null;
  function Ir(e) {
    if (pi = null, e = fn(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = v(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return pi = e, null;
  }
  function Oh(e) {
    switch (e) {
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
          case Mf:
            return 2;
          case wf:
            return 8;
          case uu:
          case oy:
            return 32;
          case jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ef = !1, Ml = null, wl = null, jl = null, Xa = /* @__PURE__ */ new Map(), Qa = /* @__PURE__ */ new Map(), Bl = [], xp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function _h(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ml = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        jl = null;
        break;
      case "pointerover":
      case "pointerout":
        Xa.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qa.delete(t.pointerId);
    }
  }
  function Va(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = sn(t), t !== null && Rh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Op(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Ml = Va(
          Ml,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return wl = Va(
          wl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return jl = Va(
          jl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Xa.set(
          i,
          Va(
            Xa.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Qa.set(
          i,
          Va(
            Qa.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
    }
    return !1;
  }
  function zh(e) {
    var t = fn(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Gf(e.priority, function() {
              xh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = v(l), t !== null) {
            e.blockedOn = t, Gf(e.priority, function() {
              xh(l);
            });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function vi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Pr(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        Ii = n, l.target.dispatchEvent(n), Ii = null;
      } else
        return t = sn(l), t !== null && Rh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Ch(e, t, l) {
    vi(e) && l.delete(t);
  }
  function _p() {
    ef = !1, Ml !== null && vi(Ml) && (Ml = null), wl !== null && vi(wl) && (wl = null), jl !== null && vi(jl) && (jl = null), Xa.forEach(Ch), Qa.forEach(Ch);
  }
  function gi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ef || (ef = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      _p
    )));
  }
  var bi = null;
  function Nh(e) {
    bi !== e && (bi = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        bi === e && (bi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (Ir(n || l) === null)
              continue;
            break;
          }
          var i = sn(l);
          i !== null && (e.splice(t, 3), t -= 3, Pc(
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
  function Zn(e) {
    function t(g) {
      return gi(g, e);
    }
    Ml !== null && gi(Ml, e), wl !== null && gi(wl, e), jl !== null && gi(jl, e), Xa.forEach(t), Qa.forEach(t);
    for (var l = 0; l < Bl.length; l++) {
      var n = Bl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Bl.length && (l = Bl[0], l.blockedOn === null); )
      zh(l), l.blockedOn === null && Bl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], o = a[it] || null;
        if (typeof i == "function")
          o || Nh(l);
        else if (o) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, o = i[it] || null)
              m = o.formAction;
            else if (Ir(a) !== null) continue;
          } else m = o.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Nh(l);
        }
      }
  }
  function Dh() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(o) {
            return a = o;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
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
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function tf(e) {
    this._internalRoot = e;
  }
  Si.prototype.render = tf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(f(409));
    var l = t.current, n = Rt();
    Th(l, n, e, t, null, null);
  }, Si.prototype.unmount = tf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Th(e.current, 2, null, e, null, null), ei(), t[rn] = null;
    }
  };
  function Si(e) {
    this._internalRoot = e;
  }
  Si.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Yf();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++) ;
      Bl.splice(l, 0, e), l === 0 && zh(e);
    }
  };
  var Uh = r.version;
  if (Uh !== "19.2.3")
    throw Error(
      f(
        527,
        Uh,
        "19.2.3"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
    return e = b(t), e = e !== null ? A(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var zp = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: L,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber)
      try {
        In = Ei.inject(
          zp
        ), pt = Ei;
      } catch {
      }
  }
  return Ja.createRoot = function(e, t) {
    if (!d(e)) throw Error(f(299));
    var l = !1, n = "", a = qo, i = Yo, o = Go;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Sh(
      e,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      a,
      i,
      o,
      Dh
    ), e[rn] = t.current, Br(e), new tf(t);
  }, Ja.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(f(299));
    var n = !1, a = "", i = qo, o = Yo, m = Go, g = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (o = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (g = l.formState)), t = Sh(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      g,
      i,
      o,
      m,
      Dh
    ), t.context = Eh(null), l = t.current, n = Rt(), n = Zi(n), a = El(n), a.callback = null, Tl(l, a, n), l = n, t.current.lanes = l, ta(t, l), Vt(t), e[rn] = t.current, Br(e), new Si(t);
  }, Ja.version = "19.2.3", Ja;
}
var kh;
function yg() {
  if (kh) return ff.exports;
  kh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), ff.exports = mg(), ff.exports;
}
var pg = yg();
class $a extends Error {
}
$a.prototype.name = "InvalidTokenError";
function vg(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (c, r) => {
    let s = r.charCodeAt(0).toString(16).toUpperCase();
    return s.length < 2 && (s = "0" + s), "%" + s;
  }));
}
function gg(u) {
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
    return vg(c);
  } catch {
    return atob(c);
  }
}
function bg(u, c) {
  if (typeof u != "string")
    throw new $a("Invalid token specified: must be a string");
  c || (c = {});
  const r = c.header === !0 ? 0 : 1, s = u.split(".")[r];
  if (typeof s != "string")
    throw new $a(`Invalid token specified: missing part #${r + 1}`);
  let f;
  try {
    f = gg(s);
  } catch (d) {
    throw new $a(`Invalid token specified: invalid base64 for part #${r + 1} (${d.message})`);
  }
  try {
    return JSON.parse(f);
  } catch (d) {
    throw new $a(`Invalid token specified: invalid json for part #${r + 1} (${d.message})`);
  }
}
const jm = ({ label: u, onClick: c, disabled: r, type: s = "button", className: f, children: d, mainButtonStyle: h }) => /* @__PURE__ */ q.jsx(
  "button",
  {
    className: f || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: c,
    disabled: r,
    type: s,
    style: h,
    children: d || u
  }
), Kn = C.forwardRef((u, c) => {
  const { label: r, startIcon: s, endIcon: f, error: d, helperText: h, optional: p, className: v, options: y, ...b } = u, A = !!d || !!h, D = b.type === "select" || !!y;
  return /* @__PURE__ */ q.jsxs("div", { className: `flex! flex-col! ${v || ""}`, children: [
    r && /* @__PURE__ */ q.jsxs("label", { className: "block! mb-1.5! font-semibold! text-left!", children: [
      r,
      " ",
      p && /* @__PURE__ */ q.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
    ] }),
    /* @__PURE__ */ q.jsxs("div", { className: "flex! items-center! relative!", children: [
      s && /* @__PURE__ */ q.jsx("span", { className: "flex! items-center! justify-center! px-2! mr-1.5!", "aria-hidden": !0, children: s }),
      D ? /* @__PURE__ */ q.jsx(
        "select",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${A ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...b,
          children: y && y.map((V) => /* @__PURE__ */ q.jsx("option", { value: V.value, children: V.label }, V.value))
        }
      ) : /* @__PURE__ */ q.jsx(
        "input",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${A ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...b
        }
      ),
      f && /* @__PURE__ */ q.jsx("span", { className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!", "aria-hidden": !0, children: f })
    ] }),
    d && typeof d == "string" && /* @__PURE__ */ q.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
    !d && h && /* @__PURE__ */ q.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h })
  ] });
});
function Bm(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
var $h = {};
const { toString: Sg } = Object.prototype, { getPrototypeOf: _f } = Object, { iterator: Mi, toStringTag: Hm } = Symbol, wi = /* @__PURE__ */ ((u) => (c) => {
  const r = Sg.call(c);
  return u[r] || (u[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (u) => (u = u.toLowerCase(), (c) => wi(c) === u), ji = (u) => (c) => typeof c === u, { isArray: Fn } = Array, Jn = ji("undefined");
function eu(u) {
  return u !== null && !Jn(u) && u.constructor !== null && !Jn(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Lm = Yt("ArrayBuffer");
function Eg(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && Lm(u.buffer), c;
}
const Tg = ji("string"), ht = ji("function"), qm = ji("number"), tu = (u) => u !== null && typeof u == "object", Ag = (u) => u === !0 || u === !1, Oi = (u) => {
  if (wi(u) !== "object")
    return !1;
  const c = _f(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Hm in u) && !(Mi in u);
}, Rg = (u) => {
  if (!tu(u) || eu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, xg = Yt("Date"), Og = Yt("File"), _g = Yt("Blob"), zg = Yt("FileList"), Cg = (u) => tu(u) && ht(u.pipe), Ng = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((c = wi(u)) === "formdata" || // detect form-data instance
  c === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, Dg = Yt("URLSearchParams"), [Ug, Mg, wg, jg] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt), Bg = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lu(u, c, { allOwnKeys: r = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let s, f;
  if (typeof u != "object" && (u = [u]), Fn(u))
    for (s = 0, f = u.length; s < f; s++)
      c.call(null, u[s], s, u);
  else {
    if (eu(u))
      return;
    const d = r ? Object.getOwnPropertyNames(u) : Object.keys(u), h = d.length;
    let p;
    for (s = 0; s < h; s++)
      p = d[s], c.call(null, u[p], p, u);
  }
}
function Ym(u, c) {
  if (eu(u))
    return null;
  c = c.toLowerCase();
  const r = Object.keys(u);
  let s = r.length, f;
  for (; s-- > 0; )
    if (f = r[s], c === f.toLowerCase())
      return f;
  return null;
}
const nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Gm = (u) => !Jn(u) && u !== nn;
function vf() {
  const { caseless: u, skipUndefined: c } = Gm(this) && this || {}, r = {}, s = (f, d) => {
    const h = u && Ym(r, d) || d;
    Oi(r[h]) && Oi(f) ? r[h] = vf(r[h], f) : Oi(f) ? r[h] = vf({}, f) : Fn(f) ? r[h] = f.slice() : (!c || !Jn(f)) && (r[h] = f);
  };
  for (let f = 0, d = arguments.length; f < d; f++)
    arguments[f] && lu(arguments[f], s);
  return r;
}
const Hg = (u, c, r, { allOwnKeys: s } = {}) => (lu(c, (f, d) => {
  r && ht(f) ? u[d] = Bm(f, r) : u[d] = f;
}, { allOwnKeys: s }), u), Lg = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), qg = (u, c, r, s) => {
  u.prototype = Object.create(c.prototype, s), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), r && Object.assign(u.prototype, r);
}, Yg = (u, c, r, s) => {
  let f, d, h;
  const p = {};
  if (c = c || {}, u == null) return c;
  do {
    for (f = Object.getOwnPropertyNames(u), d = f.length; d-- > 0; )
      h = f[d], (!s || s(h, u, c)) && !p[h] && (c[h] = u[h], p[h] = !0);
    u = r !== !1 && _f(u);
  } while (u && (!r || r(u, c)) && u !== Object.prototype);
  return c;
}, Gg = (u, c, r) => {
  u = String(u), (r === void 0 || r > u.length) && (r = u.length), r -= c.length;
  const s = u.indexOf(c, r);
  return s !== -1 && s === r;
}, Xg = (u) => {
  if (!u) return null;
  if (Fn(u)) return u;
  let c = u.length;
  if (!qm(c)) return null;
  const r = new Array(c);
  for (; c-- > 0; )
    r[c] = u[c];
  return r;
}, Qg = /* @__PURE__ */ ((u) => (c) => u && c instanceof u)(typeof Uint8Array < "u" && _f(Uint8Array)), Vg = (u, c) => {
  const s = (u && u[Mi]).call(u);
  let f;
  for (; (f = s.next()) && !f.done; ) {
    const d = f.value;
    c.call(u, d[0], d[1]);
  }
}, Zg = (u, c) => {
  let r;
  const s = [];
  for (; (r = u.exec(c)) !== null; )
    s.push(r);
  return s;
}, Kg = Yt("HTMLFormElement"), Jg = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, s, f) {
    return s.toUpperCase() + f;
  }
), Fh = (({ hasOwnProperty: u }) => (c, r) => u.call(c, r))(Object.prototype), kg = Yt("RegExp"), Xm = (u, c) => {
  const r = Object.getOwnPropertyDescriptors(u), s = {};
  lu(r, (f, d) => {
    let h;
    (h = c(f, d, u)) !== !1 && (s[d] = h || f);
  }), Object.defineProperties(u, s);
}, $g = (u) => {
  Xm(u, (c, r) => {
    if (ht(u) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const s = u[r];
    if (ht(s)) {
      if (c.enumerable = !1, "writable" in c) {
        c.writable = !1;
        return;
      }
      c.set || (c.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Fg = (u, c) => {
  const r = {}, s = (f) => {
    f.forEach((d) => {
      r[d] = !0;
    });
  };
  return Fn(u) ? s(u) : s(String(u).split(c)), r;
}, Wg = () => {
}, Pg = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function Ig(u) {
  return !!(u && ht(u.append) && u[Hm] === "FormData" && u[Mi]);
}
const e1 = (u) => {
  const c = new Array(10), r = (s, f) => {
    if (tu(s)) {
      if (c.indexOf(s) >= 0)
        return;
      if (eu(s))
        return s;
      if (!("toJSON" in s)) {
        c[f] = s;
        const d = Fn(s) ? [] : {};
        return lu(s, (h, p) => {
          const v = r(h, f + 1);
          !Jn(v) && (d[p] = v);
        }), c[f] = void 0, d;
      }
    }
    return s;
  };
  return r(u, 0);
}, t1 = Yt("AsyncFunction"), l1 = (u) => u && (tu(u) || ht(u)) && ht(u.then) && ht(u.catch), Qm = ((u, c) => u ? setImmediate : c ? ((r, s) => (nn.addEventListener("message", ({ source: f, data: d }) => {
  f === nn && d === r && s.length && s.shift()();
}, !1), (f) => {
  s.push(f), nn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ht(nn.postMessage)
), n1 = typeof queueMicrotask < "u" ? queueMicrotask.bind(nn) : typeof $h < "u" && $h.nextTick || Qm, a1 = (u) => u != null && ht(u[Mi]), z = {
  isArray: Fn,
  isArrayBuffer: Lm,
  isBuffer: eu,
  isFormData: Ng,
  isArrayBufferView: Eg,
  isString: Tg,
  isNumber: qm,
  isBoolean: Ag,
  isObject: tu,
  isPlainObject: Oi,
  isEmptyObject: Rg,
  isReadableStream: Ug,
  isRequest: Mg,
  isResponse: wg,
  isHeaders: jg,
  isUndefined: Jn,
  isDate: xg,
  isFile: Og,
  isBlob: _g,
  isRegExp: kg,
  isFunction: ht,
  isStream: Cg,
  isURLSearchParams: Dg,
  isTypedArray: Qg,
  isFileList: zg,
  forEach: lu,
  merge: vf,
  extend: Hg,
  trim: Bg,
  stripBOM: Lg,
  inherits: qg,
  toFlatObject: Yg,
  kindOf: wi,
  kindOfTest: Yt,
  endsWith: Gg,
  toArray: Xg,
  forEachEntry: Vg,
  matchAll: Zg,
  isHTMLForm: Kg,
  hasOwnProperty: Fh,
  hasOwnProp: Fh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xm,
  freezeMethods: $g,
  toObjectSet: Fg,
  toCamelCase: Jg,
  noop: Wg,
  toFiniteNumber: Pg,
  findKey: Ym,
  global: nn,
  isContextDefined: Gm,
  isSpecCompliantForm: Ig,
  toJSONObject: e1,
  isAsyncFn: t1,
  isThenable: l1,
  setImmediate: Qm,
  asap: n1,
  isIterable: a1
};
function ae(u, c, r, s, f) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), r && (this.config = r), s && (this.request = s), f && (this.response = f, this.status = f.status ? f.status : null);
}
z.inherits(ae, Error, {
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
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Vm = ae.prototype, Zm = {};
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
Object.defineProperties(ae, Zm);
Object.defineProperty(Vm, "isAxiosError", { value: !0 });
ae.from = (u, c, r, s, f, d) => {
  const h = Object.create(Vm);
  z.toFlatObject(u, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const p = u && u.message ? u.message : "Error", v = c == null && u ? u.code : c;
  return ae.call(h, p, v, r, s, f), u && h.cause == null && Object.defineProperty(h, "cause", { value: u, configurable: !0 }), h.name = u && u.name || "Error", d && Object.assign(h, d), h;
};
const u1 = null;
function gf(u) {
  return z.isPlainObject(u) || z.isArray(u);
}
function Km(u) {
  return z.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Wh(u, c, r) {
  return u ? u.concat(c).map(function(f, d) {
    return f = Km(f), !r && d ? "[" + f + "]" : f;
  }).join(r ? "." : "") : c;
}
function i1(u) {
  return z.isArray(u) && !u.some(gf);
}
const c1 = z.toFlatObject(z, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Bi(u, c, r) {
  if (!z.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), r = z.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(H, U) {
    return !z.isUndefined(U[H]);
  });
  const s = r.metaTokens, f = r.visitor || b, d = r.dots, h = r.indexes, v = (r.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(c);
  if (!z.isFunction(f))
    throw new TypeError("visitor must be a function");
  function y(O) {
    if (O === null) return "";
    if (z.isDate(O))
      return O.toISOString();
    if (z.isBoolean(O))
      return O.toString();
    if (!v && z.isBlob(O))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(O) || z.isTypedArray(O) ? v && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function b(O, H, U) {
    let Z = O;
    if (O && !U && typeof O == "object") {
      if (z.endsWith(H, "{}"))
        H = s ? H : H.slice(0, -2), O = JSON.stringify(O);
      else if (z.isArray(O) && i1(O) || (z.isFileList(O) || z.endsWith(H, "[]")) && (Z = z.toArray(O)))
        return H = Km(H), Z.forEach(function(J, ee) {
          !(z.isUndefined(J) || J === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Wh([H], ee, d) : h === null ? H : H + "[]",
            y(J)
          );
        }), !1;
    }
    return gf(O) ? !0 : (c.append(Wh(U, H, d), y(O)), !1);
  }
  const A = [], D = Object.assign(c1, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: gf
  });
  function V(O, H) {
    if (!z.isUndefined(O)) {
      if (A.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + H.join("."));
      A.push(O), z.forEach(O, function(Z, Y) {
        (!(z.isUndefined(Z) || Z === null) && f.call(
          c,
          Z,
          z.isString(Y) ? Y.trim() : Y,
          H,
          D
        )) === !0 && V(Z, H ? H.concat(Y) : [Y]);
      }), A.pop();
    }
  }
  if (!z.isObject(u))
    throw new TypeError("data must be an object");
  return V(u), c;
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
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(s) {
    return c[s];
  });
}
function zf(u, c) {
  this._pairs = [], u && Bi(u, this, c);
}
const Jm = zf.prototype;
Jm.append = function(c, r) {
  this._pairs.push([c, r]);
};
Jm.toString = function(c) {
  const r = c ? function(s) {
    return c.call(this, s, Ph);
  } : Ph;
  return this._pairs.map(function(f) {
    return r(f[0]) + "=" + r(f[1]);
  }, "").join("&");
};
function r1(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function km(u, c, r) {
  if (!c)
    return u;
  const s = r && r.encode || r1;
  z.isFunction(r) && (r = {
    serialize: r
  });
  const f = r && r.serialize;
  let d;
  if (f ? d = f(c, r) : d = z.isURLSearchParams(c) ? c.toString() : new zf(c, r).toString(s), d) {
    const h = u.indexOf("#");
    h !== -1 && (u = u.slice(0, h)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class Ih {
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
  use(c, r, s) {
    return this.handlers.push({
      fulfilled: c,
      rejected: r,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    z.forEach(this.handlers, function(s) {
      s !== null && c(s);
    });
  }
}
const $m = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, f1 = typeof URLSearchParams < "u" ? URLSearchParams : zf, s1 = typeof FormData < "u" ? FormData : null, o1 = typeof Blob < "u" ? Blob : null, d1 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: f1,
    FormData: s1,
    Blob: o1
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Cf = typeof window < "u" && typeof document < "u", bf = typeof navigator == "object" && navigator || void 0, h1 = Cf && (!bf || ["ReactNative", "NativeScript", "NS"].indexOf(bf.product) < 0), m1 = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", y1 = Cf && window.location.href || "http://localhost", p1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Cf,
  hasStandardBrowserEnv: h1,
  hasStandardBrowserWebWorkerEnv: m1,
  navigator: bf,
  origin: y1
}, Symbol.toStringTag, { value: "Module" })), lt = {
  ...p1,
  ...d1
};
function v1(u, c) {
  return Bi(u, new lt.classes.URLSearchParams(), {
    visitor: function(r, s, f, d) {
      return lt.isNode && z.isBuffer(r) ? (this.append(s, r.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function g1(u) {
  return z.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function b1(u) {
  const c = {}, r = Object.keys(u);
  let s;
  const f = r.length;
  let d;
  for (s = 0; s < f; s++)
    d = r[s], c[d] = u[d];
  return c;
}
function Fm(u) {
  function c(r, s, f, d) {
    let h = r[d++];
    if (h === "__proto__") return !0;
    const p = Number.isFinite(+h), v = d >= r.length;
    return h = !h && z.isArray(f) ? f.length : h, v ? (z.hasOwnProp(f, h) ? f[h] = [f[h], s] : f[h] = s, !p) : ((!f[h] || !z.isObject(f[h])) && (f[h] = []), c(r, s, f[h], d) && z.isArray(f[h]) && (f[h] = b1(f[h])), !p);
  }
  if (z.isFormData(u) && z.isFunction(u.entries)) {
    const r = {};
    return z.forEachEntry(u, (s, f) => {
      c(g1(s), f, r, 0);
    }), r;
  }
  return null;
}
function S1(u, c, r) {
  if (z.isString(u))
    try {
      return (c || JSON.parse)(u), z.trim(u);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(u);
}
const nu = {
  transitional: $m,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, r) {
    const s = r.getContentType() || "", f = s.indexOf("application/json") > -1, d = z.isObject(c);
    if (d && z.isHTMLForm(c) && (c = new FormData(c)), z.isFormData(c))
      return f ? JSON.stringify(Fm(c)) : c;
    if (z.isArrayBuffer(c) || z.isBuffer(c) || z.isStream(c) || z.isFile(c) || z.isBlob(c) || z.isReadableStream(c))
      return c;
    if (z.isArrayBufferView(c))
      return c.buffer;
    if (z.isURLSearchParams(c))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let p;
    if (d) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return v1(c, this.formSerializer).toString();
      if ((p = z.isFileList(c)) || s.indexOf("multipart/form-data") > -1) {
        const v = this.env && this.env.FormData;
        return Bi(
          p ? { "files[]": c } : c,
          v && new v(),
          this.formSerializer
        );
      }
    }
    return d || f ? (r.setContentType("application/json", !1), S1(c)) : c;
  }],
  transformResponse: [function(c) {
    const r = this.transitional || nu.transitional, s = r && r.forcedJSONParsing, f = this.responseType === "json";
    if (z.isResponse(c) || z.isReadableStream(c))
      return c;
    if (c && z.isString(c) && (s && !this.responseType || f)) {
      const h = !(r && r.silentJSONParsing) && f;
      try {
        return JSON.parse(c, this.parseReviver);
      } catch (p) {
        if (h)
          throw p.name === "SyntaxError" ? ae.from(p, ae.ERR_BAD_RESPONSE, this, null, this.response) : p;
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
    FormData: lt.classes.FormData,
    Blob: lt.classes.Blob
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
z.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  nu.headers[u] = {};
});
const E1 = z.toObjectSet([
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
]), T1 = (u) => {
  const c = {};
  let r, s, f;
  return u && u.split(`
`).forEach(function(h) {
    f = h.indexOf(":"), r = h.substring(0, f).trim().toLowerCase(), s = h.substring(f + 1).trim(), !(!r || c[r] && E1[r]) && (r === "set-cookie" ? c[r] ? c[r].push(s) : c[r] = [s] : c[r] = c[r] ? c[r] + ", " + s : s);
  }), c;
}, em = /* @__PURE__ */ Symbol("internals");
function ka(u) {
  return u && String(u).trim().toLowerCase();
}
function _i(u) {
  return u === !1 || u == null ? u : z.isArray(u) ? u.map(_i) : String(u);
}
function A1(u) {
  const c = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = r.exec(u); )
    c[s[1]] = s[2];
  return c;
}
const R1 = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function df(u, c, r, s, f) {
  if (z.isFunction(s))
    return s.call(this, c, r);
  if (f && (c = r), !!z.isString(c)) {
    if (z.isString(s))
      return c.indexOf(s) !== -1;
    if (z.isRegExp(s))
      return s.test(c);
  }
}
function x1(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, r, s) => r.toUpperCase() + s);
}
function O1(u, c) {
  const r = z.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + r, {
      value: function(f, d, h) {
        return this[s].call(this, c, f, d, h);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, r, s) {
    const f = this;
    function d(p, v, y) {
      const b = ka(v);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const A = z.findKey(f, b);
      (!A || f[A] === void 0 || y === !0 || y === void 0 && f[A] !== !1) && (f[A || v] = _i(p));
    }
    const h = (p, v) => z.forEach(p, (y, b) => d(y, b, v));
    if (z.isPlainObject(c) || c instanceof this.constructor)
      h(c, r);
    else if (z.isString(c) && (c = c.trim()) && !R1(c))
      h(T1(c), r);
    else if (z.isObject(c) && z.isIterable(c)) {
      let p = {}, v, y;
      for (const b of c) {
        if (!z.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        p[y = b[0]] = (v = p[y]) ? z.isArray(v) ? [...v, b[1]] : [v, b[1]] : b[1];
      }
      h(p, r);
    } else
      c != null && d(r, c, s);
    return this;
  }
  get(c, r) {
    if (c = ka(c), c) {
      const s = z.findKey(this, c);
      if (s) {
        const f = this[s];
        if (!r)
          return f;
        if (r === !0)
          return A1(f);
        if (z.isFunction(r))
          return r.call(this, f, s);
        if (z.isRegExp(r))
          return r.exec(f);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, r) {
    if (c = ka(c), c) {
      const s = z.findKey(this, c);
      return !!(s && this[s] !== void 0 && (!r || df(this, this[s], s, r)));
    }
    return !1;
  }
  delete(c, r) {
    const s = this;
    let f = !1;
    function d(h) {
      if (h = ka(h), h) {
        const p = z.findKey(s, h);
        p && (!r || df(s, s[p], p, r)) && (delete s[p], f = !0);
      }
    }
    return z.isArray(c) ? c.forEach(d) : d(c), f;
  }
  clear(c) {
    const r = Object.keys(this);
    let s = r.length, f = !1;
    for (; s--; ) {
      const d = r[s];
      (!c || df(this, this[d], d, c, !0)) && (delete this[d], f = !0);
    }
    return f;
  }
  normalize(c) {
    const r = this, s = {};
    return z.forEach(this, (f, d) => {
      const h = z.findKey(s, d);
      if (h) {
        r[h] = _i(f), delete r[d];
        return;
      }
      const p = c ? x1(d) : String(d).trim();
      p !== d && delete r[d], r[p] = _i(f), s[p] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (s, f) => {
      s != null && s !== !1 && (r[f] = c && z.isArray(s) ? s.join(", ") : s);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([c, r]) => c + ": " + r).join(`
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
  static concat(c, ...r) {
    const s = new this(c);
    return r.forEach((f) => s.set(f)), s;
  }
  static accessor(c) {
    const s = (this[em] = this[em] = {
      accessors: {}
    }).accessors, f = this.prototype;
    function d(h) {
      const p = ka(h);
      s[p] || (O1(f, h), s[p] = !0);
    }
    return z.isArray(c) ? c.forEach(d) : d(c), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(mt.prototype, ({ value: u }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(s) {
      this[r] = s;
    }
  };
});
z.freezeMethods(mt);
function hf(u, c) {
  const r = this || nu, s = c || r, f = mt.from(s.headers);
  let d = s.data;
  return z.forEach(u, function(p) {
    d = p.call(r, d, f.normalize(), c ? c.status : void 0);
  }), f.normalize(), d;
}
function Wm(u) {
  return !!(u && u.__CANCEL__);
}
function Wn(u, c, r) {
  ae.call(this, u ?? "canceled", ae.ERR_CANCELED, c, r), this.name = "CanceledError";
}
z.inherits(Wn, ae, {
  __CANCEL__: !0
});
function Pm(u, c, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status) ? u(r) : c(new ae(
    "Request failed with status code " + r.status,
    [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function _1(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return c && c[1] || "";
}
function z1(u, c) {
  u = u || 10;
  const r = new Array(u), s = new Array(u);
  let f = 0, d = 0, h;
  return c = c !== void 0 ? c : 1e3, function(v) {
    const y = Date.now(), b = s[d];
    h || (h = y), r[f] = v, s[f] = y;
    let A = d, D = 0;
    for (; A !== f; )
      D += r[A++], A = A % u;
    if (f = (f + 1) % u, f === d && (d = (d + 1) % u), y - h < c)
      return;
    const V = b && y - b;
    return V ? Math.round(D * 1e3 / V) : void 0;
  };
}
function C1(u, c) {
  let r = 0, s = 1e3 / c, f, d;
  const h = (y, b = Date.now()) => {
    r = b, f = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), A = b - r;
    A >= s ? h(y, b) : (f = y, d || (d = setTimeout(() => {
      d = null, h(f);
    }, s - A)));
  }, () => f && h(f)];
}
const Ni = (u, c, r = 3) => {
  let s = 0;
  const f = z1(50, 250);
  return C1((d) => {
    const h = d.loaded, p = d.lengthComputable ? d.total : void 0, v = h - s, y = f(v), b = h <= p;
    s = h;
    const A = {
      loaded: h,
      total: p,
      progress: p ? h / p : void 0,
      bytes: v,
      rate: y || void 0,
      estimated: y && p && b ? (p - h) / y : void 0,
      event: d,
      lengthComputable: p != null,
      [c ? "download" : "upload"]: !0
    };
    u(A);
  }, r);
}, tm = (u, c) => {
  const r = u != null;
  return [(s) => c[0]({
    lengthComputable: r,
    total: u,
    loaded: s
  }), c[1]];
}, lm = (u) => (...c) => z.asap(() => u(...c)), N1 = lt.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (r) => (r = new URL(r, lt.origin), u.protocol === r.protocol && u.host === r.host && (c || u.port === r.port)))(
  new URL(lt.origin),
  lt.navigator && /(msie|trident)/i.test(lt.navigator.userAgent)
) : () => !0, D1 = lt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, r, s, f, d, h) {
      if (typeof document > "u") return;
      const p = [`${u}=${encodeURIComponent(c)}`];
      z.isNumber(r) && p.push(`expires=${new Date(r).toUTCString()}`), z.isString(s) && p.push(`path=${s}`), z.isString(f) && p.push(`domain=${f}`), d === !0 && p.push("secure"), z.isString(h) && p.push(`SameSite=${h}`), document.cookie = p.join("; ");
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
function U1(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function M1(u, c) {
  return c ? u.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : u;
}
function Im(u, c, r) {
  let s = !U1(c);
  return u && (s || r == !1) ? M1(u, c) : c;
}
const nm = (u) => u instanceof mt ? { ...u } : u;
function un(u, c) {
  c = c || {};
  const r = {};
  function s(y, b, A, D) {
    return z.isPlainObject(y) && z.isPlainObject(b) ? z.merge.call({ caseless: D }, y, b) : z.isPlainObject(b) ? z.merge({}, b) : z.isArray(b) ? b.slice() : b;
  }
  function f(y, b, A, D) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return s(void 0, y, A, D);
    } else return s(y, b, A, D);
  }
  function d(y, b) {
    if (!z.isUndefined(b))
      return s(void 0, b);
  }
  function h(y, b) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return s(void 0, y);
    } else return s(void 0, b);
  }
  function p(y, b, A) {
    if (A in c)
      return s(y, b);
    if (A in u)
      return s(void 0, y);
  }
  const v = {
    url: d,
    method: d,
    data: d,
    baseURL: h,
    transformRequest: h,
    transformResponse: h,
    paramsSerializer: h,
    timeout: h,
    timeoutMessage: h,
    withCredentials: h,
    withXSRFToken: h,
    adapter: h,
    responseType: h,
    xsrfCookieName: h,
    xsrfHeaderName: h,
    onUploadProgress: h,
    onDownloadProgress: h,
    decompress: h,
    maxContentLength: h,
    maxBodyLength: h,
    beforeRedirect: h,
    transport: h,
    httpAgent: h,
    httpsAgent: h,
    cancelToken: h,
    socketPath: h,
    responseEncoding: h,
    validateStatus: p,
    headers: (y, b, A) => f(nm(y), nm(b), A, !0)
  };
  return z.forEach(Object.keys({ ...u, ...c }), function(b) {
    const A = v[b] || f, D = A(u[b], c[b], b);
    z.isUndefined(D) && A !== p || (r[b] = D);
  }), r;
}
const ey = (u) => {
  const c = un({}, u);
  let { data: r, withXSRFToken: s, xsrfHeaderName: f, xsrfCookieName: d, headers: h, auth: p } = c;
  if (c.headers = h = mt.from(h), c.url = km(Im(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer), p && h.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  ), z.isFormData(r)) {
    if (lt.hasStandardBrowserEnv || lt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (z.isFunction(r.getHeaders)) {
      const v = r.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(v).forEach(([b, A]) => {
        y.includes(b.toLowerCase()) && h.set(b, A);
      });
    }
  }
  if (lt.hasStandardBrowserEnv && (s && z.isFunction(s) && (s = s(c)), s || s !== !1 && N1(c.url))) {
    const v = f && d && D1.read(d);
    v && h.set(f, v);
  }
  return c;
}, w1 = typeof XMLHttpRequest < "u", j1 = w1 && function(u) {
  return new Promise(function(r, s) {
    const f = ey(u);
    let d = f.data;
    const h = mt.from(f.headers).normalize();
    let { responseType: p, onUploadProgress: v, onDownloadProgress: y } = f, b, A, D, V, O;
    function H() {
      V && V(), O && O(), f.cancelToken && f.cancelToken.unsubscribe(b), f.signal && f.signal.removeEventListener("abort", b);
    }
    let U = new XMLHttpRequest();
    U.open(f.method.toUpperCase(), f.url, !0), U.timeout = f.timeout;
    function Z() {
      if (!U)
        return;
      const J = mt.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), P = {
        data: !p || p === "text" || p === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: J,
        config: u,
        request: U
      };
      Pm(function(ce) {
        r(ce), H();
      }, function(ce) {
        s(ce), H();
      }, P), U = null;
    }
    "onloadend" in U ? U.onloadend = Z : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(Z);
    }, U.onabort = function() {
      U && (s(new ae("Request aborted", ae.ECONNABORTED, u, U)), U = null);
    }, U.onerror = function(ee) {
      const P = ee && ee.message ? ee.message : "Network Error", ie = new ae(P, ae.ERR_NETWORK, u, U);
      ie.event = ee || null, s(ie), U = null;
    }, U.ontimeout = function() {
      let ee = f.timeout ? "timeout of " + f.timeout + "ms exceeded" : "timeout exceeded";
      const P = f.transitional || $m;
      f.timeoutErrorMessage && (ee = f.timeoutErrorMessage), s(new ae(
        ee,
        P.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
        u,
        U
      )), U = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in U && z.forEach(h.toJSON(), function(ee, P) {
      U.setRequestHeader(P, ee);
    }), z.isUndefined(f.withCredentials) || (U.withCredentials = !!f.withCredentials), p && p !== "json" && (U.responseType = f.responseType), y && ([D, O] = Ni(y, !0), U.addEventListener("progress", D)), v && U.upload && ([A, V] = Ni(v), U.upload.addEventListener("progress", A), U.upload.addEventListener("loadend", V)), (f.cancelToken || f.signal) && (b = (J) => {
      U && (s(!J || J.type ? new Wn(null, u, U) : J), U.abort(), U = null);
    }, f.cancelToken && f.cancelToken.subscribe(b), f.signal && (f.signal.aborted ? b() : f.signal.addEventListener("abort", b)));
    const Y = _1(f.url);
    if (Y && lt.protocols.indexOf(Y) === -1) {
      s(new ae("Unsupported protocol " + Y + ":", ae.ERR_BAD_REQUEST, u));
      return;
    }
    U.send(d || null);
  });
}, B1 = (u, c) => {
  const { length: r } = u = u ? u.filter(Boolean) : [];
  if (c || r) {
    let s = new AbortController(), f;
    const d = function(y) {
      if (!f) {
        f = !0, p();
        const b = y instanceof Error ? y : this.reason;
        s.abort(b instanceof ae ? b : new Wn(b instanceof Error ? b.message : b));
      }
    };
    let h = c && setTimeout(() => {
      h = null, d(new ae(`timeout ${c} of ms exceeded`, ae.ETIMEDOUT));
    }, c);
    const p = () => {
      u && (h && clearTimeout(h), h = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: v } = s;
    return v.unsubscribe = () => z.asap(p), v;
  }
}, H1 = function* (u, c) {
  let r = u.byteLength;
  if (r < c) {
    yield u;
    return;
  }
  let s = 0, f;
  for (; s < r; )
    f = s + c, yield u.slice(s, f), s = f;
}, L1 = async function* (u, c) {
  for await (const r of q1(u))
    yield* H1(r, c);
}, q1 = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const c = u.getReader();
  try {
    for (; ; ) {
      const { done: r, value: s } = await c.read();
      if (r)
        break;
      yield s;
    }
  } finally {
    await c.cancel();
  }
}, am = (u, c, r, s) => {
  const f = L1(u, c);
  let d = 0, h, p = (v) => {
    h || (h = !0, s && s(v));
  };
  return new ReadableStream({
    async pull(v) {
      try {
        const { done: y, value: b } = await f.next();
        if (y) {
          p(), v.close();
          return;
        }
        let A = b.byteLength;
        if (r) {
          let D = d += A;
          r(D);
        }
        v.enqueue(new Uint8Array(b));
      } catch (y) {
        throw p(y), y;
      }
    },
    cancel(v) {
      return p(v), f.return();
    }
  }, {
    highWaterMark: 2
  });
}, um = 64 * 1024, { isFunction: Ai } = z, Y1 = (({ Request: u, Response: c }) => ({
  Request: u,
  Response: c
}))(z.global), {
  ReadableStream: im,
  TextEncoder: cm
} = z.global, rm = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, G1 = (u) => {
  u = z.merge.call({
    skipUndefined: !0
  }, Y1, u);
  const { fetch: c, Request: r, Response: s } = u, f = c ? Ai(c) : typeof fetch == "function", d = Ai(r), h = Ai(s);
  if (!f)
    return !1;
  const p = f && Ai(im), v = f && (typeof cm == "function" ? /* @__PURE__ */ ((O) => (H) => O.encode(H))(new cm()) : async (O) => new Uint8Array(await new r(O).arrayBuffer())), y = d && p && rm(() => {
    let O = !1;
    const H = new r(lt.origin, {
      body: new im(),
      method: "POST",
      get duplex() {
        return O = !0, "half";
      }
    }).headers.has("Content-Type");
    return O && !H;
  }), b = h && p && rm(() => z.isReadableStream(new s("").body)), A = {
    stream: b && ((O) => O.body)
  };
  f && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((O) => {
    !A[O] && (A[O] = (H, U) => {
      let Z = H && H[O];
      if (Z)
        return Z.call(H);
      throw new ae(`Response type '${O}' is not supported`, ae.ERR_NOT_SUPPORT, U);
    });
  });
  const D = async (O) => {
    if (O == null)
      return 0;
    if (z.isBlob(O))
      return O.size;
    if (z.isSpecCompliantForm(O))
      return (await new r(lt.origin, {
        method: "POST",
        body: O
      }).arrayBuffer()).byteLength;
    if (z.isArrayBufferView(O) || z.isArrayBuffer(O))
      return O.byteLength;
    if (z.isURLSearchParams(O) && (O = O + ""), z.isString(O))
      return (await v(O)).byteLength;
  }, V = async (O, H) => {
    const U = z.toFiniteNumber(O.getContentLength());
    return U ?? D(H);
  };
  return async (O) => {
    let {
      url: H,
      method: U,
      data: Z,
      signal: Y,
      cancelToken: J,
      timeout: ee,
      onDownloadProgress: P,
      onUploadProgress: ie,
      responseType: ce,
      headers: I,
      withCredentials: be = "same-origin",
      fetchOptions: re
    } = ey(O), Ne = c || fetch;
    ce = ce ? (ce + "").toLowerCase() : "text";
    let le = B1([Y, J && J.toAbortSignal()], ee), _e = null;
    const $e = le && le.unsubscribe && (() => {
      le.unsubscribe();
    });
    let ut;
    try {
      if (ie && y && U !== "get" && U !== "head" && (ut = await V(I, Z)) !== 0) {
        let je = new r(H, {
          method: "POST",
          body: Z,
          duplex: "half"
        }), E;
        if (z.isFormData(Z) && (E = je.headers.get("content-type")) && I.setContentType(E), je.body) {
          const [B, Q] = tm(
            ut,
            Ni(lm(ie))
          );
          Z = am(je.body, um, B, Q);
        }
      }
      z.isString(be) || (be = be ? "include" : "omit");
      const G = d && "credentials" in r.prototype, L = {
        ...re,
        signal: le,
        method: U.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: Z,
        duplex: "half",
        credentials: G ? be : void 0
      };
      _e = d && new r(H, L);
      let X = await (d ? Ne(_e, re) : Ne(H, L));
      const pe = b && (ce === "stream" || ce === "response");
      if (b && (P || pe && $e)) {
        const je = {};
        ["status", "statusText", "headers"].forEach((k) => {
          je[k] = X[k];
        });
        const E = z.toFiniteNumber(X.headers.get("content-length")), [B, Q] = P && tm(
          E,
          Ni(lm(P), !0)
        ) || [];
        X = new s(
          am(X.body, um, B, () => {
            Q && Q(), $e && $e();
          }),
          je
        );
      }
      ce = ce || "text";
      let ze = await A[z.findKey(A, ce) || "text"](X, O);
      return !pe && $e && $e(), await new Promise((je, E) => {
        Pm(je, E, {
          data: ze,
          headers: mt.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: O,
          request: _e
        });
      });
    } catch (G) {
      throw $e && $e(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new ae("Network Error", ae.ERR_NETWORK, O, _e),
        {
          cause: G.cause || G
        }
      ) : ae.from(G, G && G.code, O, _e);
    }
  };
}, X1 = /* @__PURE__ */ new Map(), ty = (u) => {
  let c = u && u.env || {};
  const { fetch: r, Request: s, Response: f } = c, d = [
    s,
    f,
    r
  ];
  let h = d.length, p = h, v, y, b = X1;
  for (; p--; )
    v = d[p], y = b.get(v), y === void 0 && b.set(v, y = p ? /* @__PURE__ */ new Map() : G1(c)), b = y;
  return y;
};
ty();
const Nf = {
  http: u1,
  xhr: j1,
  fetch: {
    get: ty
  }
};
z.forEach(Nf, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const fm = (u) => `- ${u}`, Q1 = (u) => z.isFunction(u) || u === null || u === !1;
function V1(u, c) {
  u = z.isArray(u) ? u : [u];
  const { length: r } = u;
  let s, f;
  const d = {};
  for (let h = 0; h < r; h++) {
    s = u[h];
    let p;
    if (f = s, !Q1(s) && (f = Nf[(p = String(s)).toLowerCase()], f === void 0))
      throw new ae(`Unknown adapter '${p}'`);
    if (f && (z.isFunction(f) || (f = f.get(c))))
      break;
    d[p || "#" + h] = f;
  }
  if (!f) {
    const h = Object.entries(d).map(
      ([v, y]) => `adapter ${v} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let p = r ? h.length > 1 ? `since :
` + h.map(fm).join(`
`) : " " + fm(h[0]) : "as no adapter specified";
    throw new ae(
      "There is no suitable adapter to dispatch the request " + p,
      "ERR_NOT_SUPPORT"
    );
  }
  return f;
}
const ly = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: V1,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Nf
};
function mf(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Wn(null, u);
}
function sm(u) {
  return mf(u), u.headers = mt.from(u.headers), u.data = hf.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), ly.getAdapter(u.adapter || nu.adapter, u)(u).then(function(s) {
    return mf(u), s.data = hf.call(
      u,
      u.transformResponse,
      s
    ), s.headers = mt.from(s.headers), s;
  }, function(s) {
    return Wm(s) || (mf(u), s && s.response && (s.response.data = hf.call(
      u,
      u.transformResponse,
      s.response
    ), s.response.headers = mt.from(s.response.headers))), Promise.reject(s);
  });
}
const ny = "1.13.2", Hi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  Hi[u] = function(s) {
    return typeof s === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const om = {};
Hi.transitional = function(c, r, s) {
  function f(d, h) {
    return "[Axios v" + ny + "] Transitional option '" + d + "'" + h + (s ? ". " + s : "");
  }
  return (d, h, p) => {
    if (c === !1)
      throw new ae(
        f(h, " has been removed" + (r ? " in " + r : "")),
        ae.ERR_DEPRECATED
      );
    return r && !om[h] && (om[h] = !0, console.warn(
      f(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), c ? c(d, h, p) : !0;
  };
};
Hi.spelling = function(c) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${c}`), !0);
};
function Z1(u, c, r) {
  if (typeof u != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let f = s.length;
  for (; f-- > 0; ) {
    const d = s[f], h = c[d];
    if (h) {
      const p = u[d], v = p === void 0 || h(p, d, u);
      if (v !== !0)
        throw new ae("option " + d + " must be " + v, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ae("Unknown option " + d, ae.ERR_BAD_OPTION);
  }
}
const zi = {
  assertOptions: Z1,
  validators: Hi
}, Zt = zi.validators;
let an = class {
  constructor(c) {
    this.defaults = c || {}, this.interceptors = {
      request: new Ih(),
      response: new Ih()
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
  async request(c, r) {
    try {
      return await this._request(c, r);
    } catch (s) {
      if (s instanceof Error) {
        let f = {};
        Error.captureStackTrace ? Error.captureStackTrace(f) : f = new Error();
        const d = f.stack ? f.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? d && !String(s.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + d) : s.stack = d;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(c, r) {
    typeof c == "string" ? (r = r || {}, r.url = c) : r = c || {}, r = un(this.defaults, r);
    const { transitional: s, paramsSerializer: f, headers: d } = r;
    s !== void 0 && zi.assertOptions(s, {
      silentJSONParsing: Zt.transitional(Zt.boolean),
      forcedJSONParsing: Zt.transitional(Zt.boolean),
      clarifyTimeoutError: Zt.transitional(Zt.boolean)
    }, !1), f != null && (z.isFunction(f) ? r.paramsSerializer = {
      serialize: f
    } : zi.assertOptions(f, {
      encode: Zt.function,
      serialize: Zt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), zi.assertOptions(r, {
      baseUrl: Zt.spelling("baseURL"),
      withXsrfToken: Zt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let h = d && z.merge(
      d.common,
      d[r.method]
    );
    d && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete d[O];
      }
    ), r.headers = mt.concat(h, d);
    const p = [];
    let v = !0;
    this.interceptors.request.forEach(function(H) {
      typeof H.runWhen == "function" && H.runWhen(r) === !1 || (v = v && H.synchronous, p.unshift(H.fulfilled, H.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(H) {
      y.push(H.fulfilled, H.rejected);
    });
    let b, A = 0, D;
    if (!v) {
      const O = [sm.bind(this), void 0];
      for (O.unshift(...p), O.push(...y), D = O.length, b = Promise.resolve(r); A < D; )
        b = b.then(O[A++], O[A++]);
      return b;
    }
    D = p.length;
    let V = r;
    for (; A < D; ) {
      const O = p[A++], H = p[A++];
      try {
        V = O(V);
      } catch (U) {
        H.call(this, U);
        break;
      }
    }
    try {
      b = sm.call(this, V);
    } catch (O) {
      return Promise.reject(O);
    }
    for (A = 0, D = y.length; A < D; )
      b = b.then(y[A++], y[A++]);
    return b;
  }
  getUri(c) {
    c = un(this.defaults, c);
    const r = Im(c.baseURL, c.url, c.allowAbsoluteUrls);
    return km(r, c.params, c.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function(c) {
  an.prototype[c] = function(r, s) {
    return this.request(un(s || {}, {
      method: c,
      url: r,
      data: (s || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(c) {
  function r(s) {
    return function(d, h, p) {
      return this.request(un(p || {}, {
        method: c,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  an.prototype[c] = r(), an.prototype[c + "Form"] = r(!0);
});
let K1 = class ay {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(d) {
      r = d;
    });
    const s = this;
    this.promise.then((f) => {
      if (!s._listeners) return;
      let d = s._listeners.length;
      for (; d-- > 0; )
        s._listeners[d](f);
      s._listeners = null;
    }), this.promise.then = (f) => {
      let d;
      const h = new Promise((p) => {
        s.subscribe(p), d = p;
      }).then(f);
      return h.cancel = function() {
        s.unsubscribe(d);
      }, h;
    }, c(function(d, h, p) {
      s.reason || (s.reason = new Wn(d, h, p), r(s.reason));
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
    const r = this._listeners.indexOf(c);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const c = new AbortController(), r = (s) => {
      c.abort(s);
    };
    return this.subscribe(r), c.signal.unsubscribe = () => this.unsubscribe(r), c.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let c;
    return {
      token: new ay(function(f) {
        c = f;
      }),
      cancel: c
    };
  }
};
function J1(u) {
  return function(r) {
    return u.apply(null, r);
  };
}
function k1(u) {
  return z.isObject(u) && u.isAxiosError === !0;
}
const Sf = {
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
Object.entries(Sf).forEach(([u, c]) => {
  Sf[c] = u;
});
function uy(u) {
  const c = new an(u), r = Bm(an.prototype.request, c);
  return z.extend(r, an.prototype, c, { allOwnKeys: !0 }), z.extend(r, c, null, { allOwnKeys: !0 }), r.create = function(f) {
    return uy(un(u, f));
  }, r;
}
const Ge = uy(nu);
Ge.Axios = an;
Ge.CanceledError = Wn;
Ge.CancelToken = K1;
Ge.isCancel = Wm;
Ge.VERSION = ny;
Ge.toFormData = Bi;
Ge.AxiosError = ae;
Ge.Cancel = Ge.CanceledError;
Ge.all = function(c) {
  return Promise.all(c);
};
Ge.spread = J1;
Ge.isAxiosError = k1;
Ge.mergeConfig = un;
Ge.AxiosHeaders = mt;
Ge.formToJSON = (u) => Fm(z.isHTMLForm(u) ? new FormData(u) : u);
Ge.getAdapter = ly.getAdapter;
Ge.HttpStatusCode = Sf;
Ge.default = Ge;
const {
  Axios: cb,
  AxiosError: rb,
  CanceledError: fb,
  isCancel: sb,
  CancelToken: ob,
  VERSION: db,
  all: hb,
  Cancel: mb,
  isAxiosError: yb,
  spread: pb,
  toFormData: vb,
  AxiosHeaders: gb,
  HttpStatusCode: bb,
  formToJSON: Sb,
  getAdapter: Eb,
  mergeConfig: Tb
} = Ge, $1 = "https://dev-demo-env.colibricore.io", F1 = (u) => {
  const c = u.startsWith("/") ? u : `/${u}`;
  return `${$1}${c}`;
}, W1 = async (u, c) => {
  const r = F1("api/auth"), s = { username: u, password: c };
  try {
    return (await Ge.post(r, s)).data;
  } catch (f) {
    throw console.error("Error during auth login:", f), f.response?.data?.error ? new Error(f.response.data.error) : f.response?.data?.message ? new Error(f.response.data.message) : f.response?.status === 401 ? new Error("Invalid credentials") : f.message ? new Error(f.message) : new Error("Authentication failed");
  }
};
function iy(u, c) {
  const r = {
    length: u.length >= 9 && u.length <= 15,
    upper: /[A-Z]/.test(u),
    lower: /[a-z]/.test(u),
    number: /[0-9]/.test(u),
    noSpaces: !/\s/.test(u),
    noTriple: !/(.)\1\1/.test(u),
    special: /[@.$%^_\-]/.test(u) && /^[A-Za-z0-9@.$%^_\-]+$/.test(u),
    noNameParts: !0,
    noEmailParts: !0
  }, s = u.toLowerCase();
  if (c && c.displayName) {
    const f = c.displayName.split(/\s+/).filter((d) => d.length >= 2);
    for (const d of f)
      if (d && s.includes(d.toLowerCase())) {
        r.noNameParts = !1;
        break;
      }
  }
  if (c && c.email) {
    const d = ((c.email || "").split("@")[0] || "").split(/[^A-Za-z0-9]+/).filter((h) => h.length >= 3);
    for (const h of d)
      if (h && s.includes(h.toLowerCase())) {
        r.noEmailParts = !1;
        break;
      }
  }
  return r;
}
const P1 = (u) => {
  try {
    if (!document.cookie.split(";").find((d) => d.trim().startsWith("X-Credential=")))
      return !1;
    const r = localStorage.getItem("decoded");
    if (!r)
      return !1;
    const s = JSON.parse(r), f = Math.floor(Date.now() / 1e3);
    return !s.exp || f >= s.exp ? !1 : (u && (window.location.href = u), !0);
  } catch (c) {
    return console.error("[checkTokenAndRedirect] Error:", c), !1;
  }
};
function I1() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const c = u.split(".");
  return c.length >= 2 ? "." + c.slice(-2).join(".") : "";
}
function dm(u, c, r) {
  const s = /* @__PURE__ */ new Date();
  s.setSeconds(s.getSeconds() + r);
  const f = I1(), d = f ? `; domain=${f}` : "", h = window.location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${u}=${encodeURIComponent(c)}; expires=${s.toUTCString()}; path=/${d}${h}; SameSite=Lax`;
}
const eb = ({
  onSuccess: u,
  onError: c,
  onClose: r,
  onSignIn: s,
  title: f = "Create your account",
  subtitle: d = "Create an account to continue to checkout"
}) => {
  const [h, p] = C.useState(""), [v, y] = C.useState(""), [b, A] = C.useState(""), [D, V] = C.useState(""), [O, H] = C.useState(!1), [U, Z] = C.useState(!1), [Y, J] = C.useState(null), [ee, P] = C.useState(""), [ie, ce] = C.useState(!1), I = C.useRef(null);
  C.useEffect(() => {
    if (D) {
      const le = h || v || b ? {
        email: h,
        displayName: `${v} ${b}`.trim()
      } : null, _e = iy(D, le);
      J(_e);
    } else
      J(null);
  }, [D, h, v, b]);
  const be = Y ? Y.length && Y.upper && Y.lower && Y.number && Y.noSpaces && Y.noTriple && Y.special && Y.noNameParts && Y.noEmailParts : !1;
  C.useEffect(() => {
    const le = (_e) => {
      _e.key === "Escape" && r();
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [r]);
  const re = (le) => {
    le.target === I.current && r();
  }, Ne = async (le) => {
    if (le.preventDefault(), ce(!0), !h || !v || !b || !D) {
      P("Please fill in all required fields"), c("Please fill in all required fields");
      return;
    }
    if (!be) {
      P("Password does not meet requirements"), c("Password does not meet requirements");
      return;
    }
    H(!0), P("");
    try {
      console.log("Registration data:", { email: h, firstName: v, lastName: b, password: D }), u({ email: h, firstName: v, lastName: b });
    } catch (_e) {
      console.error("[CreateAccount] Registration failed:", _e);
      const $e = _e instanceof Error ? _e.message : "Registration failed";
      P($e), c($e);
    } finally {
      H(!1);
    }
  };
  return /* @__PURE__ */ q.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-[2000]! p-4",
      ref: I,
      onMouseDown: re,
      children: /* @__PURE__ */ q.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: r,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none!",
            type: "button",
            children: /* @__PURE__ */ q.jsx("svg", { className: "w-6! h-6!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ q.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ q.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: f }),
          /* @__PURE__ */ q.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ q.jsxs("form", { onSubmit: Ne, className: "space-y-4!", children: [
          /* @__PURE__ */ q.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
            /* @__PURE__ */ q.jsx("label", { htmlFor: "email", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Email Address" }),
            /* @__PURE__ */ q.jsx(
              Kn,
              {
                id: "email",
                type: "email",
                value: h,
                onChange: (le) => p(le.target.value),
                placeholder: "Enter email",
                disabled: O,
                className: "w-full!",
                autoComplete: "email",
                error: ie && !h ? "Required" : ""
              }
            )
          ] }),
          /* @__PURE__ */ q.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
            /* @__PURE__ */ q.jsxs("div", { children: [
              /* @__PURE__ */ q.jsx("label", { htmlFor: "firstName", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "First Name" }),
              /* @__PURE__ */ q.jsx(
                Kn,
                {
                  id: "firstName",
                  type: "text",
                  value: v,
                  onChange: (le) => y(le.target.value),
                  placeholder: "First Name",
                  disabled: O,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ie && !v ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ q.jsxs("div", { children: [
              /* @__PURE__ */ q.jsx("label", { htmlFor: "lastName", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Last Name" }),
              /* @__PURE__ */ q.jsx(
                Kn,
                {
                  id: "lastName",
                  type: "text",
                  value: b,
                  onChange: (le) => A(le.target.value),
                  placeholder: "First Name",
                  disabled: O,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ie && !b ? "Required" : ""
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ q.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
            /* @__PURE__ */ q.jsx("label", { htmlFor: "password", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Password" }),
            /* @__PURE__ */ q.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ q.jsx(
              Kn,
              {
                id: "password",
                type: U ? "text" : "password",
                value: D,
                onChange: (le) => {
                  V(le.target.value), P("");
                },
                placeholder: "Enter Password...",
                disabled: O,
                className: "w-full!",
                autoComplete: "new-password",
                error: ie && !D ? "Required" : ie && D && !be ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                endIcon: /* @__PURE__ */ q.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => Z(!U),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: U ? /* @__PURE__ */ q.jsx("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) }) : /* @__PURE__ */ q.jsxs("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                      /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                    ] })
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ q.jsx(
            jm,
            {
              type: "submit",
              disabled: O,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
              children: O ? /* @__PURE__ */ q.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ q.jsxs("svg", { className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ q.jsx("circle", { className: "opacity-25!", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ q.jsx("path", { className: "opacity-75!", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Creating Account..."
              ] }) : "Create Account"
            }
          ),
          /* @__PURE__ */ q.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
            /* @__PURE__ */ q.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ q.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
            /* @__PURE__ */ q.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ q.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
          ] }),
          /* @__PURE__ */ q.jsx(
            "button",
            {
              type: "button",
              onClick: s,
              disabled: O,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-white border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
              children: /* @__PURE__ */ q.jsx("span", { children: "Sign In" })
            }
          )
        ] })
      ] })
    }
  );
}, tb = ({
  onSuccess: u,
  onError: c,
  onClose: r,
  authority: s,
  title: f = "Continue to login",
  subtitle: d = "Continue by signing in."
}) => {
  const [h, p] = C.useState(""), [v, y] = C.useState(""), [b, A] = C.useState(!1), [D, V] = C.useState(!1), [O, H] = C.useState(null), [U, Z] = C.useState(""), [Y, J] = C.useState(!0), [ee, P] = C.useState(!1), ie = C.useRef(null);
  C.useEffect(() => {
    if (v) {
      const re = iy(v, null);
      H(re);
    } else
      H(null);
  }, [v]);
  const ce = O ? O.length && O.upper && O.lower && O.number && O.noSpaces && O.noTriple && O.special : !1;
  C.useEffect(() => {
    const re = (Ne) => {
      Ne.key === "Escape" && r();
    };
    return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
  }, [r]);
  const I = (re) => {
    re.target === ie.current && r();
  }, be = async (re) => {
    if (re.preventDefault(), !h || !v) {
      Z("Please enter both username and password"), c("Please enter both username and password");
      return;
    }
    A(!0), Z("");
    try {
      const { tokens: Ne } = await W1(h, v);
      if (Ne.access_token) {
        const le = bg(Ne.access_token), _e = (le.exp || 0) - Math.floor(Date.now() / 1e3);
        dm("access_token", Ne.access_token, _e), le.x_credentials && dm("X-Credential", le.x_credentials, _e), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("decoded", JSON.stringify(le) || ""), Ne.refresh_token && localStorage.setItem("refresh_token", Ne.refresh_token);
      }
      u(Ne);
    } catch (Ne) {
      console.error("[EmbeddedLogin] Login failed:", Ne);
      const le = Ne instanceof Error ? Ne.message : "Authentication failed";
      Z(le), c(le);
    } finally {
      A(!1);
    }
  };
  return ee ? /* @__PURE__ */ q.jsx(
    eb,
    {
      onSuccess: (re) => {
        P(!1), u(re);
      },
      onError: c,
      onClose: r,
      onSignIn: () => P(!1),
      authority: s
    }
  ) : /* @__PURE__ */ q.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-[2000]! p-4",
      ref: ie,
      onMouseDown: I,
      children: /* @__PURE__ */ q.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ q.jsx(
          "button",
          {
            onClick: r,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ q.jsx("svg", { className: "w-6! h-6!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ q.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ q.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: f }),
          /* @__PURE__ */ q.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ q.jsxs("form", { onSubmit: be, className: "space-y-2!", children: [
          /* @__PURE__ */ q.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
            /* @__PURE__ */ q.jsx("label", { htmlFor: "username", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Email Address or Username" }),
            /* @__PURE__ */ q.jsx(
              Kn,
              {
                id: "username",
                type: "text",
                value: h,
                onChange: (re) => p(re.target.value),
                placeholder: "Enter email or username",
                disabled: b,
                className: "w-full!",
                autoComplete: "username"
              }
            )
          ] }),
          /* @__PURE__ */ q.jsxs("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: [
            /* @__PURE__ */ q.jsx("label", { htmlFor: "password", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Password" }),
            /* @__PURE__ */ q.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ q.jsx(
              Kn,
              {
                id: "password",
                type: D ? "text" : "password",
                value: v,
                onChange: (re) => {
                  y(re.target.value), Z("");
                },
                placeholder: "Enter Password...",
                disabled: b,
                className: "w-full!",
                autoComplete: "current-password",
                error: U,
                endIcon: /* @__PURE__ */ q.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => V(!D),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: D ? /* @__PURE__ */ q.jsx("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) }) : /* @__PURE__ */ q.jsxs("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                      /* @__PURE__ */ q.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                    ] })
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ q.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ q.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ q.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: Y,
                  onChange: (re) => J(re.target.checked),
                  className: "mr-2! rounded! border-gray-300!"
                }
              ),
              /* @__PURE__ */ q.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            /* @__PURE__ */ q.jsx("a", { href: "#", className: "text-blue-600! hover:text-blue-700! no-underline!", children: "Forgot Password?" })
          ] }),
          /* @__PURE__ */ q.jsx(
            jm,
            {
              type: "submit",
              disabled: b || !h || !v || !ce || !Y,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
              children: b ? /* @__PURE__ */ q.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ q.jsxs("svg", { className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ q.jsx("circle", { className: "opacity-25!", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ q.jsx("path", { className: "opacity-75!", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Signing in..."
              ] }) : "Sign In"
            }
          ),
          !1
        ] })
      ] })
    }
  );
}, lb = (u) => {
  const { authority: c, subsidiary: r, callbackUrl: s, onRedirect: f } = u, [d, h] = C.useState(!1);
  C.useEffect(() => {
    if (u.redirectUrl) {
      const b = P1(u.redirectUrl);
      h(b);
    }
  }, [u.redirectUrl]), C.useEffect(() => {
    c && localStorage.setItem("authority", c), r && localStorage.setItem("subsidiary", r), s ? localStorage.setItem("callbackUrl", s) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [c, r, s]);
  const p = (b) => {
    u.onClose && u.onClose(), h(!0);
    const A = u.redirectUrl || s;
    f && f(A, b), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, v = (b) => {
    console.log("[App] Embedded login error:", b);
  }, y = () => {
    u.onClose && u.onClose();
  };
  return /* @__PURE__ */ q.jsx(Nv, { children: /* @__PURE__ */ q.jsx(Cm, { path: "*", element: /* @__PURE__ */ q.jsx(q.Fragment, { children: !d && u.showLogin && /* @__PURE__ */ q.jsx(
    tb,
    {
      onSuccess: p,
      onError: v,
      onClose: y,
      authority: c,
      title: u.loginTitle,
      subtitle: u.loginSubtitle
    }
  ) }) }) });
}, nb = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1, VITE_API_BASE_URL: "https://dev-demo-env.colibricore.io", VITE_RENDER_MODE: "WEBCOMPONENT", VITE_WIDGET_LOGIN_URL: "https://dev-idb.colibrirealestate.com/widget/loginprepare?targetUrl=%2Froute%2Fcheckoutsignin&returnUrl=%2Fwp&idpsource=local5173widget" }, ab = "WEBCOMPONENT";
console.log("[main.tsx] VITE_RENDER_MODE:", ab);
console.log("[main.tsx] All env vars:", nb);
{
  class u extends HTMLElement {
    root;
    mountPoint;
    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle", "loginTitle", "loginSubtitle", "show-login"];
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
    handleRedirect = (r, s) => {
      const f = new CustomEvent("redirect", {
        detail: {
          url: r,
          userSession: s,
          tokens: { access_token: s?.access_token },
          userInfo: s?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(f), r && (console.log("[Widget] Redirecting to:", r), window.location.href = r);
    };
    handleClose = () => {
      const r = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(r), this.removeAttribute("show-login");
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
        showLogin: this.getAttribute("show-login") === "true",
        onRedirect: this.handleRedirect,
        onClose: this.handleClose
      };
    }
    // Public API methods
    login() {
      console.log("[Widget] login() called"), this.setAttribute("show-login", "true");
    }
    logout() {
      console.log("[Widget] logout() called"), localStorage.removeItem("user_state"), localStorage.removeItem("decoded"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), document.cookie.split(";").forEach((s) => {
        document.cookie = s.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
      }), this.removeAttribute("show-login");
      const r = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(r);
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = pg.createRoot(this.mountPoint));
      const r = this.getProps();
      console.log("[Widget] Rendering with props:", r), this.root.render(
        /* @__PURE__ */ q.jsx(eg, { children: /* @__PURE__ */ q.jsx(C.StrictMode, { children: /* @__PURE__ */ q.jsx(lb, { ...r }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
