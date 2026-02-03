
// CSS content for Shadow DOM injection
var __WIDGET_CSS__ = "@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-black{background-color:var(--color-black)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-600{color:var(--color-blue-600)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";

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
var rs = { exports: {} }, Ka = {};
var Xm;
function Y1() {
  if (Xm) return Ka;
  Xm = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(s, o, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: u,
      type: s,
      key: m,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return Ka.Fragment = r, Ka.jsx = c, Ka.jsxs = c, Ka;
}
var Gm;
function X1() {
  return Gm || (Gm = 1, rs.exports = Y1()), rs.exports;
}
var x = X1(), cs = { exports: {} }, ue = {}, Vm;
function G1() {
  if (Vm) return ue;
  Vm = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object" ? null : (S = Y && S[Y] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, D = Object.assign, V = {};
  function Q(S, H, Z) {
    this.props = S, this.context = H, this.refs = V, this.updater = Z || U;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(S, H) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, H, "setState");
  }, Q.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function K() {
  }
  K.prototype = Q.prototype;
  function te(S, H, Z) {
    this.props = S, this.context = H, this.refs = V, this.updater = Z || U;
  }
  var W = te.prototype = new K();
  W.constructor = te, D(W, Q.prototype), W.isPureReactComponent = !0;
  var ne = Array.isArray;
  function ae() {
  }
  var F = { H: null, A: null, T: null, S: null }, Se = Object.prototype.hasOwnProperty;
  function xe(S, H, Z) {
    var J = Z.ref;
    return {
      $$typeof: r,
      type: S,
      key: H,
      ref: J !== void 0 ? J : null,
      props: Z
    };
  }
  function lt(S, H) {
    return xe(S.type, H, S.props);
  }
  function pe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Le(S) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(Z) {
      return H[Z];
    });
  }
  var je = /\/+/g;
  function Je(S, H) {
    return typeof S == "object" && S !== null && S.key != null ? Le("" + S.key) : H.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ae, ae) : (S.status = "pending", S.then(
          function(H) {
            S.status === "pending" && (S.status = "fulfilled", S.value = H);
          },
          function(H) {
            S.status === "pending" && (S.status = "rejected", S.reason = H);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function q(S, H, Z, J, oe) {
    var fe = typeof S;
    (fe === "undefined" || fe === "boolean") && (S = null);
    var P = !1;
    if (S === null) P = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case c:
              P = !0;
              break;
            case R:
              return P = S._init, q(
                P(S._payload),
                H,
                Z,
                J,
                oe
              );
          }
      }
    if (P)
      return oe = oe(S), P = J === "" ? "." + Je(S, 0) : J, ne(oe) ? (Z = "", P != null && (Z = P.replace(je, "$&/") + "/"), q(oe, H, Z, "", function(Bt) {
        return Bt;
      })) : oe != null && (pe(oe) && (oe = lt(
        oe,
        Z + (oe.key == null || S && S.key === oe.key ? "" : ("" + oe.key).replace(
          je,
          "$&/"
        ) + "/") + P
      )), H.push(oe)), 1;
    P = 0;
    var ze = J === "" ? "." : J + ":";
    if (ne(S))
      for (var Be = 0; Be < S.length; Be++)
        J = S[Be], fe = ze + Je(J, Be), P += q(
          J,
          H,
          Z,
          fe,
          oe
        );
    else if (Be = _(S), typeof Be == "function")
      for (S = Be.call(S), Be = 0; !(J = S.next()).done; )
        J = J.value, fe = ze + Je(J, Be++), P += q(
          J,
          H,
          Z,
          fe,
          oe
        );
    else if (fe === "object") {
      if (typeof S.then == "function")
        return q(
          X(S),
          H,
          Z,
          J,
          oe
        );
      throw H = String(S), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function G(S, H, Z) {
    if (S == null) return S;
    var J = [], oe = 0;
    return q(S, J, "", "", function(fe) {
      return H.call(Z, fe, oe++);
    }), J;
  }
  function I(S) {
    if (S._status === -1) {
      var H = S._result;
      H = H(), H.then(
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = Z);
        },
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = Z);
        }
      ), S._status === -1 && (S._status = 0, S._result = H);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var se = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ae = {
    map: G,
    forEach: function(S, H, Z) {
      G(
        S,
        function() {
          H.apply(this, arguments);
        },
        Z
      );
    },
    count: function(S) {
      var H = 0;
      return G(S, function() {
        H++;
      }), H;
    },
    toArray: function(S) {
      return G(S, function(H) {
        return H;
      }) || [];
    },
    only: function(S) {
      if (!pe(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = N, ue.Children = Ae, ue.Component = Q, ue.Fragment = s, ue.Profiler = d, ue.PureComponent = te, ue.StrictMode = o, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return F.H.useMemoCache(S);
    }
  }, ue.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(S, H, Z) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var J = D({}, S.props), oe = S.key;
    if (H != null)
      for (fe in H.key !== void 0 && (oe = "" + H.key), H)
        !Se.call(H, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && H.ref === void 0 || (J[fe] = H[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) J.children = Z;
    else if (1 < fe) {
      for (var P = Array(fe), ze = 0; ze < fe; ze++)
        P[ze] = arguments[ze + 2];
      J.children = P;
    }
    return xe(S.type, oe, J);
  }, ue.createContext = function(S) {
    return S = {
      $$typeof: g,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: m,
      _context: S
    }, S;
  }, ue.createElement = function(S, H, Z) {
    var J, oe = {}, fe = null;
    if (H != null)
      for (J in H.key !== void 0 && (fe = "" + H.key), H)
        Se.call(H, J) && J !== "key" && J !== "__self" && J !== "__source" && (oe[J] = H[J]);
    var P = arguments.length - 2;
    if (P === 1) oe.children = Z;
    else if (1 < P) {
      for (var ze = Array(P), Be = 0; Be < P; Be++)
        ze[Be] = arguments[Be + 2];
      oe.children = ze;
    }
    if (S && S.defaultProps)
      for (J in P = S.defaultProps, P)
        oe[J] === void 0 && (oe[J] = P[J]);
    return xe(S, fe, oe);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ue.isValidElement = pe, ue.lazy = function(S) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: S },
      _init: I
    };
  }, ue.memo = function(S, H) {
    return {
      $$typeof: b,
      type: S,
      compare: H === void 0 ? null : H
    };
  }, ue.startTransition = function(S) {
    var H = F.T, Z = {};
    F.T = Z;
    try {
      var J = S(), oe = F.S;
      oe !== null && oe(Z, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ae, se);
    } catch (fe) {
      se(fe);
    } finally {
      H !== null && Z.types !== null && (H.types = Z.types), F.T = H;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, ue.use = function(S) {
    return F.H.use(S);
  }, ue.useActionState = function(S, H, Z) {
    return F.H.useActionState(S, H, Z);
  }, ue.useCallback = function(S, H) {
    return F.H.useCallback(S, H);
  }, ue.useContext = function(S) {
    return F.H.useContext(S);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(S, H) {
    return F.H.useDeferredValue(S, H);
  }, ue.useEffect = function(S, H) {
    return F.H.useEffect(S, H);
  }, ue.useEffectEvent = function(S) {
    return F.H.useEffectEvent(S);
  }, ue.useId = function() {
    return F.H.useId();
  }, ue.useImperativeHandle = function(S, H, Z) {
    return F.H.useImperativeHandle(S, H, Z);
  }, ue.useInsertionEffect = function(S, H) {
    return F.H.useInsertionEffect(S, H);
  }, ue.useLayoutEffect = function(S, H) {
    return F.H.useLayoutEffect(S, H);
  }, ue.useMemo = function(S, H) {
    return F.H.useMemo(S, H);
  }, ue.useOptimistic = function(S, H) {
    return F.H.useOptimistic(S, H);
  }, ue.useReducer = function(S, H, Z) {
    return F.H.useReducer(S, H, Z);
  }, ue.useRef = function(S) {
    return F.H.useRef(S);
  }, ue.useState = function(S) {
    return F.H.useState(S);
  }, ue.useSyncExternalStore = function(S, H, Z) {
    return F.H.useSyncExternalStore(
      S,
      H,
      Z
    );
  }, ue.useTransition = function() {
    return F.H.useTransition();
  }, ue.version = "19.2.3", ue;
}
var Qm;
function ws() {
  return Qm || (Qm = 1, cs.exports = G1()), cs.exports;
}
var A = ws();
var Zm = "popstate";
function V1(u = {}) {
  function r(s, o) {
    let { pathname: d, search: m, hash: g } = s.location;
    return Ss(
      "",
      { pathname: d, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function c(s, o) {
    return typeof o == "string" ? o : Ia(o);
  }
  return Z1(
    r,
    c,
    null,
    u
  );
}
function He(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function Yt(u, r) {
  if (!u) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Q1() {
  return Math.random().toString(36).substring(2, 10);
}
function km(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function Ss(u, r, c = null, s) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Fn(r) : r,
    state: c,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || s || Q1()
  };
}
function Ia({
  pathname: u = "/",
  search: r = "",
  hash: c = ""
}) {
  return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
}
function Fn(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
    let s = u.indexOf("?");
    s >= 0 && (r.search = u.substring(s), u = u.substring(0, s)), u && (r.pathname = u);
  }
  return r;
}
function Z1(u, r, c, s = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = s, m = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function R() {
    g = "POP";
    let D = b(), V = D == null ? null : D - y;
    y = D, p && p({ action: g, location: U.location, delta: V });
  }
  function N(D, V) {
    g = "PUSH";
    let Q = Ss(U.location, D, V);
    y = b() + 1;
    let K = km(Q, y), te = U.createHref(Q);
    try {
      m.pushState(K, "", te);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      o.location.assign(te);
    }
    d && p && p({ action: g, location: U.location, delta: 1 });
  }
  function Y(D, V) {
    g = "REPLACE";
    let Q = Ss(U.location, D, V);
    y = b();
    let K = km(Q, y), te = U.createHref(Q);
    m.replaceState(K, "", te), d && p && p({ action: g, location: U.location, delta: 0 });
  }
  function _(D) {
    return k1(D);
  }
  let U = {
    get action() {
      return g;
    },
    get location() {
      return u(o, m);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Zm, R), p = D, () => {
        o.removeEventListener(Zm, R), p = null;
      };
    },
    createHref(D) {
      return r(o, D);
    },
    createURL: _,
    encodeLocation(D) {
      let V = _(D);
      return {
        pathname: V.pathname,
        search: V.search,
        hash: V.hash
      };
    },
    push: N,
    replace: Y,
    go(D) {
      return m.go(D);
    }
  };
  return U;
}
function k1(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), He(c, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : Ia(u);
  return s = s.replace(/ $/, "%20"), !r && s.startsWith("//") && (s = c + s), new URL(s, c);
}
function Rh(u, r, c = "/") {
  return K1(u, r, c, !1);
}
function K1(u, r, c, s) {
  let o = typeof r == "string" ? Fn(r) : r, d = hl(o.pathname || "/", c);
  if (d == null)
    return null;
  let m = Th(u);
  J1(m);
  let g = null;
  for (let p = 0; g == null && p < m.length; ++p) {
    let y = ug(d);
    g = ng(
      m[p],
      y,
      s
    );
  }
  return g;
}
function Th(u, r = [], c = [], s = "", o = !1) {
  let d = (m, g, p = o, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(s) && p)
        return;
      He(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(s.length);
    }
    let R = ml([s, b.relativePath]), N = c.concat(b);
    m.children && m.children.length > 0 && (He(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), Th(
      m.children,
      r,
      N,
      R,
      p
    )), !(m.path == null && !m.index) && r.push({
      path: R,
      score: tg(R, m.index),
      routesMeta: N
    });
  };
  return u.forEach((m, g) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, g);
    else
      for (let p of Ah(m.path))
        d(m, g, !0, p);
  }), r;
}
function Ah(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...s] = r, o = c.endsWith("?"), d = c.replace(/\?$/, "");
  if (s.length === 0)
    return o ? [d, ""] : [d];
  let m = Ah(s.join("/")), g = [];
  return g.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...m), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function J1(u) {
  u.sort(
    (r, c) => r.score !== c.score ? c.score - r.score : lg(
      r.routesMeta.map((s) => s.childrenIndex),
      c.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var $1 = /^:[\w-]+$/, W1 = 3, F1 = 2, I1 = 1, P1 = 10, eg = -2, Km = (u) => u === "*";
function tg(u, r) {
  let c = u.split("/"), s = c.length;
  return c.some(Km) && (s += eg), r && (s += F1), c.filter((o) => !Km(o)).reduce(
    (o, d) => o + ($1.test(d) ? W1 : d === "" ? I1 : P1),
    s
  );
}
function lg(u, r) {
  return u.length === r.length && u.slice(0, -1).every((s, o) => s === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    u[u.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ng(u, r, c = !1) {
  let { routesMeta: s } = u, o = {}, d = "/", m = [];
  for (let g = 0; g < s.length; ++g) {
    let p = s[g], y = g === s.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", R = Mi(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), N = p.route;
    if (!R && y && c && !s[s.length - 1].route.index && (R = Mi(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !R)
      return null;
    Object.assign(o, R.params), m.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: ml([d, R.pathname]),
      pathnameBase: sg(
        ml([d, R.pathnameBase])
      ),
      route: N
    }), R.pathnameBase !== "/" && (d = ml([d, R.pathnameBase]));
  }
  return m;
}
function Mi(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, s] = ag(
    u.path,
    u.caseSensitive,
    u.end
  ), o = r.match(c);
  if (!o) return null;
  let d = o[0], m = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: s.reduce(
      (y, { paramName: b, isOptional: R }, N) => {
        if (b === "*") {
          let _ = g[N] || "";
          m = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const Y = g[N];
        return R && !Y ? y[b] = void 0 : y[b] = (Y || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: u
  };
}
function ag(u, r = !1, c = !0) {
  Yt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let s = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, g, p) => (s.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (s.push({ paramName: "*" }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), s];
}
function ug(u) {
  try {
    return u.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Yt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), u;
  }
}
function hl(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length, s = u.charAt(c);
  return s && s !== "/" ? null : u.slice(c) || "/";
}
var wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ig = (u) => wh.test(u);
function rg(u, r = "/") {
  let {
    pathname: c,
    search: s = "",
    hash: o = ""
  } = typeof u == "string" ? Fn(u) : u, d;
  if (c)
    if (ig(c))
      d = c;
    else {
      if (c.includes("//")) {
        let m = c;
        c = c.replace(/\/\/+/g, "/"), Yt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${c}`
        );
      }
      c.startsWith("/") ? d = Jm(c.substring(1), "/") : d = Jm(c, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: og(s),
    hash: fg(o)
  };
}
function Jm(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((o) => {
    o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
  }), c.length > 1 ? c.join("/") : "/";
}
function ss(u, r, c, s) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function cg(u) {
  return u.filter(
    (r, c) => c === 0 || r.route.path && r.route.path.length > 0
  );
}
function Ch(u) {
  let r = cg(u);
  return r.map(
    (c, s) => s === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function _h(u, r, c, s = !1) {
  let o;
  typeof u == "string" ? o = Fn(u) : (o = { ...u }, He(
    !o.pathname || !o.pathname.includes("?"),
    ss("?", "pathname", "search", o)
  ), He(
    !o.pathname || !o.pathname.includes("#"),
    ss("#", "pathname", "hash", o)
  ), He(
    !o.search || !o.search.includes("#"),
    ss("#", "search", "hash", o)
  ));
  let d = u === "" || o.pathname === "", m = d ? "/" : o.pathname, g;
  if (m == null)
    g = c;
  else {
    let R = r.length - 1;
    if (!s && m.startsWith("..")) {
      let N = m.split("/");
      for (; N[0] === ".."; )
        N.shift(), R -= 1;
      o.pathname = N.join("/");
    }
    g = R >= 0 ? r[R] : "/";
  }
  let p = rg(o, g), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && c.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var ml = (u) => u.join("/").replace(/\/\/+/g, "/"), sg = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), og = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, fg = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, dg = class {
  constructor(u, r, c, s = !1) {
    this.status = u, this.statusText = r || "", this.internal = s, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function mg(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function hg(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Oh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zh(u, r) {
  let c = u;
  if (typeof c != "string" || !wh.test(c))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: c
    };
  let s = c, o = !1;
  if (Oh)
    try {
      let d = new URL(window.location.href), m = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c), g = hl(m.pathname, r);
      m.origin === d.origin && g != null ? c = g + m.search + m.hash : o = !0;
    } catch {
      Yt(
        !1,
        `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: s,
    isExternal: o,
    to: c
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Nh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Nh
);
var yg = [
  "GET",
  ...Nh
];
new Set(yg);
var In = A.createContext(null);
In.displayName = "DataRouter";
var ji = A.createContext(null);
ji.displayName = "DataRouterState";
var gg = A.createContext(!1), Mh = A.createContext({
  isTransitioning: !1
});
Mh.displayName = "ViewTransition";
var pg = A.createContext(
  /* @__PURE__ */ new Map()
);
pg.displayName = "Fetchers";
var vg = A.createContext(null);
vg.displayName = "Await";
var jt = A.createContext(
  null
);
jt.displayName = "Navigation";
var Pa = A.createContext(
  null
);
Pa.displayName = "Location";
var yl = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
yl.displayName = "Route";
var Cs = A.createContext(null);
Cs.displayName = "RouteError";
var Dh = "REACT_ROUTER_ERROR", bg = "REDIRECT", Sg = "ROUTE_ERROR_RESPONSE";
function Eg(u) {
  if (u.startsWith(`${Dh}:${bg}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function xg(u) {
  if (u.startsWith(
    `${Dh}:${Sg}:{`
  ))
    try {
      let r = JSON.parse(u.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new dg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function Rg(u, { relative: r } = {}) {
  He(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: s } = A.useContext(jt), { hash: o, pathname: d, search: m } = tu(u, { relative: r }), g = d;
  return c !== "/" && (g = d === "/" ? c : ml([c, d])), s.createHref({ pathname: g, search: m, hash: o });
}
function eu() {
  return A.useContext(Pa) != null;
}
function fn() {
  return He(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(Pa).location;
}
var Uh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jh(u) {
  A.useContext(jt).static || A.useLayoutEffect(u);
}
function Tg() {
  let { isDataRoute: u } = A.useContext(yl);
  return u ? Hg() : Ag();
}
function Ag() {
  He(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext(In), { basename: r, navigator: c } = A.useContext(jt), { matches: s } = A.useContext(yl), { pathname: o } = fn(), d = JSON.stringify(Ch(s)), m = A.useRef(!1);
  return jh(() => {
    m.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (Yt(m.current, Uh), !m.current) return;
      if (typeof p == "number") {
        c.go(p);
        return;
      }
      let b = _h(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : ml([r, b.pathname])), (y.replace ? c.replace : c.push)(
        b,
        y.state,
        y
      );
    },
    [
      r,
      c,
      d,
      o,
      u
    ]
  );
}
A.createContext(null);
function tu(u, { relative: r } = {}) {
  let { matches: c } = A.useContext(yl), { pathname: s } = fn(), o = JSON.stringify(Ch(c));
  return A.useMemo(
    () => _h(
      u,
      JSON.parse(o),
      s,
      r === "path"
    ),
    [u, o, s, r]
  );
}
function wg(u, r) {
  return Bh(u, r);
}
function Bh(u, r, c, s, o) {
  He(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(jt), { matches: m } = A.useContext(yl), g = m[m.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", R = g && g.route;
  {
    let Q = R && R.path || "";
    Lh(
      y,
      !R || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let N = fn(), Y;
  if (r) {
    let Q = typeof r == "string" ? Fn(r) : r;
    He(
      b === "/" || Q.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ), Y = Q;
  } else
    Y = N;
  let _ = Y.pathname || "/", U = _;
  if (b !== "/") {
    let Q = b.replace(/^\//, "").split("/");
    U = "/" + _.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let D = Rh(u, { pathname: U });
  Yt(
    R || D != null,
    `No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `
  ), Yt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let V = Ng(
    D && D.map(
      (Q) => Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: ml([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathname
        ]),
        pathnameBase: Q.pathnameBase === "/" ? b : ml([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Q.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathnameBase
        ])
      })
    ),
    m,
    c,
    s,
    o
  );
  return r && V ? /* @__PURE__ */ A.createElement(
    Pa.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...Y
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    V
  ) : V;
}
function Cg() {
  let u = Bg(), r = mg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: s }, d = { padding: "2px 4px", backgroundColor: s }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), m = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ A.createElement("pre", { style: o }, c) : null, m);
}
var _g = /* @__PURE__ */ A.createElement(Cg, null), Hh = class extends A.Component {
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
  static getDerivedStateFromProps(u, r) {
    return r.location !== u.location || r.revalidation !== "idle" && u.revalidation === "idle" ? {
      error: u.error,
      location: u.location,
      revalidation: u.revalidation
    } : {
      error: u.error !== void 0 ? u.error : r.error,
      location: r.location,
      revalidation: u.revalidation || r.revalidation
    };
  }
  componentDidCatch(u, r) {
    this.props.onError ? this.props.onError(u, r) : console.error(
      "React Router caught the following error during render",
      u
    );
  }
  render() {
    let u = this.state.error;
    if (this.context && typeof u == "object" && u && "digest" in u && typeof u.digest == "string") {
      const c = xg(u.digest);
      c && (u = c);
    }
    let r = u !== void 0 ? /* @__PURE__ */ A.createElement(yl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      Cs.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(Og, { error: u }, r) : r;
  }
};
Hh.contextType = gg;
var os = /* @__PURE__ */ new WeakMap();
function Og({
  children: u,
  error: r
}) {
  let { basename: c } = A.useContext(jt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let s = Eg(r.digest);
    if (s) {
      let o = os.get(r);
      if (o) throw o;
      let d = zh(s.location, c);
      if (Oh && !os.get(r))
        if (d.isExternal || s.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: s.replace
            })
          );
          throw os.set(r, m), m;
        }
      return /* @__PURE__ */ A.createElement(
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
function zg({ routeContext: u, match: r, children: c }) {
  let s = A.useContext(In);
  return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(yl.Provider, { value: u }, c);
}
function Ng(u, r = [], c = null, s = null, o = null) {
  if (u == null) {
    if (!c)
      return null;
    if (c.errors)
      u = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0)
      u = c.matches;
    else
      return null;
  }
  let d = u, m = c?.errors;
  if (m != null) {
    let b = d.findIndex(
      (R) => R.route.id && m?.[R.route.id] !== void 0
    );
    He(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, b + 1)
    );
  }
  let g = !1, p = -1;
  if (c)
    for (let b = 0; b < d.length; b++) {
      let R = d[b];
      if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (p = b), R.route.id) {
        let { loaderData: N, errors: Y } = c, _ = R.route.loader && !N.hasOwnProperty(R.route.id) && (!Y || Y[R.route.id] === void 0);
        if (R.route.lazy || _) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = c && s ? (b, R) => {
    s(b, {
      location: c.location,
      params: c.matches?.[0]?.params ?? {},
      unstable_pattern: hg(c.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (b, R, N) => {
      let Y, _ = !1, U = null, D = null;
      c && (Y = m && R.route.id ? m[R.route.id] : void 0, U = R.route.errorElement || _g, g && (p < 0 && N === 0 ? (Lh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), _ = !0, D = null) : p === N && (_ = !0, D = R.route.hydrateFallbackElement || null)));
      let V = r.concat(d.slice(0, N + 1)), Q = () => {
        let K;
        return Y ? K = U : _ ? K = D : R.route.Component ? K = /* @__PURE__ */ A.createElement(R.route.Component, null) : R.route.element ? K = R.route.element : K = b, /* @__PURE__ */ A.createElement(
          zg,
          {
            match: R,
            routeContext: {
              outlet: b,
              matches: V,
              isDataRoute: c != null
            },
            children: K
          }
        );
      };
      return c && (R.route.ErrorBoundary || R.route.errorElement || N === 0) ? /* @__PURE__ */ A.createElement(
        Hh,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: U,
          error: Y,
          children: Q(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
          onError: y
        }
      ) : Q();
    },
    null
  );
}
function _s(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mg(u) {
  let r = A.useContext(In);
  return He(r, _s(u)), r;
}
function Dg(u) {
  let r = A.useContext(ji);
  return He(r, _s(u)), r;
}
function Ug(u) {
  let r = A.useContext(yl);
  return He(r, _s(u)), r;
}
function Os(u) {
  let r = Ug(u), c = r.matches[r.matches.length - 1];
  return He(
    c.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), c.route.id;
}
function jg() {
  return Os(
    "useRouteId"
    /* UseRouteId */
  );
}
function Bg() {
  let u = A.useContext(Cs), r = Dg(
    "useRouteError"
    /* UseRouteError */
  ), c = Os(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[c];
}
function Hg() {
  let { router: u } = Mg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Os(
    "useNavigate"
    /* UseNavigateStable */
  ), c = A.useRef(!1);
  return jh(() => {
    c.current = !0;
  }), A.useCallback(
    async (o, d = {}) => {
      Yt(c.current, Uh), c.current && (typeof o == "number" ? await u.navigate(o) : await u.navigate(o, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var $m = {};
function Lh(u, r, c) {
  !r && !$m[u] && ($m[u] = !0, Yt(!1, c));
}
A.memo(Lg);
function Lg({
  routes: u,
  future: r,
  state: c,
  onError: s
}) {
  return Bh(u, void 0, c, s, r);
}
function qh(u) {
  He(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function qg({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: s = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: m
}) {
  He(
    !eu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = A.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [g, o, d, m]
  );
  typeof c == "string" && (c = Fn(c));
  let {
    pathname: y = "/",
    search: b = "",
    hash: R = "",
    state: N = null,
    key: Y = "default"
  } = c, _ = A.useMemo(() => {
    let U = hl(y, g);
    return U == null ? null : {
      location: {
        pathname: U,
        search: b,
        hash: R,
        state: N,
        key: Y
      },
      navigationType: s
    };
  }, [g, y, b, R, N, Y, s]);
  return Yt(
    _ != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ A.createElement(jt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Pa.Provider, { children: r, value: _ }));
}
function Yg({
  children: u,
  location: r
}) {
  return wg(Es(u), r);
}
function Es(u, r = []) {
  let c = [];
  return A.Children.forEach(u, (s, o) => {
    if (!A.isValidElement(s))
      return;
    let d = [...r, o];
    if (s.type === A.Fragment) {
      c.push.apply(
        c,
        Es(s.props.children, d)
      );
      return;
    }
    He(
      s.type === qh,
      `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), He(
      !s.props.index || !s.props.children,
      "An index route cannot have child routes."
    );
    let m = {
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
    s.props.children && (m.children = Es(
      s.props.children,
      d
    )), c.push(m);
  }), c;
}
var Ci = "get", _i = "application/x-www-form-urlencoded";
function Bi(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Xg(u) {
  return Bi(u) && u.tagName.toLowerCase() === "button";
}
function Gg(u) {
  return Bi(u) && u.tagName.toLowerCase() === "form";
}
function Vg(u) {
  return Bi(u) && u.tagName.toLowerCase() === "input";
}
function Qg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Zg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Qg(u);
}
var Ai = null;
function kg() {
  if (Ai === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ai = !1;
    } catch {
      Ai = !0;
    }
  return Ai;
}
var Kg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function fs(u) {
  return u != null && !Kg.has(u) ? (Yt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${_i}"`
  ), null) : u;
}
function Jg(u, r) {
  let c, s, o, d, m;
  if (Gg(u)) {
    let g = u.getAttribute("action");
    s = g ? hl(g, r) : null, c = u.getAttribute("method") || Ci, o = fs(u.getAttribute("enctype")) || _i, d = new FormData(u);
  } else if (Xg(u) || Vg(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (s = p ? hl(p, r) : null, c = u.getAttribute("formmethod") || g.getAttribute("method") || Ci, o = fs(u.getAttribute("formenctype")) || fs(g.getAttribute("enctype")) || _i, d = new FormData(g, u), !kg()) {
      let { name: y, type: b, value: R } = u;
      if (b === "image") {
        let N = y ? `${y}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else y && d.append(y, R);
    }
  } else {
    if (Bi(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = Ci, s = null, o = _i, m = u;
  }
  return d && o === "text/plain" && (m = d, d = void 0), { action: s, method: c.toLowerCase(), encType: o, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function zs(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function $g(u, r, c) {
  let s = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return s.pathname === "/" ? s.pathname = `_root.${c}` : r && hl(s.pathname, r) === "/" ? s.pathname = `${r.replace(/\/$/, "")}/_root.${c}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${c}`, s;
}
async function Wg(u, r) {
  if (u.id in r)
    return r[u.id];
  try {
    let c = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      u.module
    );
    return r[u.id] = c, c;
  } catch (c) {
    return console.error(
      `Error loading route module \`${u.module}\`, reloading page...`
    ), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Fg(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Ig(u, r, c) {
  let s = await Promise.all(
    u.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let m = await Wg(d, c);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return lp(
    s.flat(1).filter(Fg).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function Wm(u, r, c, s, o, d) {
  let m = (p, y) => c[y] ? p.route.id !== c[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    c[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c[y].route.path?.endsWith("*") && c[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => m(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let b = s.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (m(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let R = p.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: c[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof R == "boolean")
        return R;
    }
    return !0;
  }) : [];
}
function Pg(u, r, { includeHydrateFallback: c } = {}) {
  return ep(
    u.map((s) => {
      let o = r.routes[s.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function ep(u) {
  return [...new Set(u)];
}
function tp(u) {
  let r = {}, c = Object.keys(u).sort();
  for (let s of c)
    r[s] = u[s];
  return r;
}
function lp(u, r) {
  let c = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((s, o) => {
    let d = JSON.stringify(tp(o));
    return c.has(d) || (c.add(d), s.push({ key: d, link: o })), s;
  }, []);
}
function Yh() {
  let u = A.useContext(In);
  return zs(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function np() {
  let u = A.useContext(ji);
  return zs(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Ns = A.createContext(void 0);
Ns.displayName = "FrameworkContext";
function Xh() {
  let u = A.useContext(Ns);
  return zs(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function ap(u, r) {
  let c = A.useContext(Ns), [s, o] = A.useState(!1), [d, m] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: R } = r, N = A.useRef(null);
  A.useEffect(() => {
    if (u === "render" && m(!0), u === "viewport") {
      let U = (V) => {
        V.forEach((Q) => {
          m(Q.isIntersecting);
        });
      }, D = new IntersectionObserver(U, { threshold: 0.5 });
      return N.current && D.observe(N.current), () => {
        D.disconnect();
      };
    }
  }, [u]), A.useEffect(() => {
    if (s) {
      let U = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(U);
      };
    }
  }, [s]);
  let Y = () => {
    o(!0);
  }, _ = () => {
    o(!1), m(!1);
  };
  return c ? u !== "intent" ? [d, N, {}] : [
    d,
    N,
    {
      onFocus: Ja(g, Y),
      onBlur: Ja(p, _),
      onMouseEnter: Ja(y, Y),
      onMouseLeave: Ja(b, _),
      onTouchStart: Ja(R, Y)
    }
  ] : [!1, N, {}];
}
function Ja(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function up({ page: u, ...r }) {
  let { router: c } = Yh(), s = A.useMemo(
    () => Rh(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return s ? /* @__PURE__ */ A.createElement(rp, { page: u, matches: s, ...r }) : null;
}
function ip(u) {
  let { manifest: r, routeModules: c } = Xh(), [s, o] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Ig(u, r, c).then(
      (m) => {
        d || o(m);
      }
    ), () => {
      d = !0;
    };
  }, [u, r, c]), s;
}
function rp({
  page: u,
  matches: r,
  ...c
}) {
  let s = fn(), { manifest: o, routeModules: d } = Xh(), { basename: m } = Yh(), { loaderData: g, matches: p } = np(), y = A.useMemo(
    () => Wm(
      u,
      r,
      p,
      o,
      s,
      "data"
    ),
    [u, r, p, o, s]
  ), b = A.useMemo(
    () => Wm(
      u,
      r,
      p,
      o,
      s,
      "assets"
    ),
    [u, r, p, o, s]
  ), R = A.useMemo(() => {
    if (u === s.pathname + s.search + s.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), U = !1;
    if (r.forEach((V) => {
      let Q = o.routes[V.route.id];
      !Q || !Q.hasLoader || (!y.some((K) => K.route.id === V.route.id) && V.route.id in g && d[V.route.id]?.shouldRevalidate || Q.hasClientLoader ? U = !0 : _.add(V.route.id));
    }), _.size === 0)
      return [];
    let D = $g(u, m, "data");
    return U && _.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((V) => _.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    g,
    s,
    o,
    y,
    r,
    u,
    d
  ]), N = A.useMemo(
    () => Pg(b, o),
    [b, o]
  ), Y = ip(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, R.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...c })), N.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "modulepreload", href: _, ...c })), Y.map(({ key: _, link: U }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: _, nonce: c.nonce, ...U })
  )));
}
function cp(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var sp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  sp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function op({
  basename: u,
  children: r,
  unstable_useTransitions: c,
  window: s
}) {
  let o = A.useRef();
  o.current == null && (o.current = V1({ window: s, v5Compat: !0 }));
  let d = o.current, [m, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      c === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [c]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    qg,
    {
      basename: u,
      children: r,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: c
    }
  );
}
var Gh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Vh = A.forwardRef(
  function({
    onClick: r,
    discover: c = "render",
    prefetch: s = "none",
    relative: o,
    reloadDocument: d,
    replace: m,
    state: g,
    target: p,
    to: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) {
    let { basename: U, unstable_useTransitions: D } = A.useContext(jt), V = typeof y == "string" && Gh.test(y), Q = zh(y, U);
    y = Q.to;
    let K = Rg(y, { relative: o }), [te, W, ne] = ap(
      s,
      Y
    ), ae = hp(y, {
      replace: m,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: R,
      unstable_defaultShouldRevalidate: N,
      unstable_useTransitions: D
    });
    function F(xe) {
      r && r(xe), xe.defaultPrevented || ae(xe);
    }
    let Se = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ A.createElement(
        "a",
        {
          ...Y,
          ...ne,
          href: Q.absoluteURL || K,
          onClick: Q.isExternal || d ? r : F,
          ref: cp(_, W),
          target: p,
          "data-discover": !V && c === "render" ? "true" : void 0
        }
      )
    );
    return te && !V ? /* @__PURE__ */ A.createElement(A.Fragment, null, Se, /* @__PURE__ */ A.createElement(up, { page: K })) : Se;
  }
);
Vh.displayName = "Link";
var fp = A.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: s = "",
    end: o = !1,
    style: d,
    to: m,
    viewTransition: g,
    children: p,
    ...y
  }, b) {
    let R = tu(m, { relative: y.relative }), N = fn(), Y = A.useContext(ji), { navigator: _, basename: U } = A.useContext(jt), D = Y != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    bp(R) && g === !0, V = _.encodeLocation ? _.encodeLocation(R).pathname : R.pathname, Q = N.pathname, K = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null;
    c || (Q = Q.toLowerCase(), K = K ? K.toLowerCase() : null, V = V.toLowerCase()), K && U && (K = hl(K, U) || K);
    const te = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let W = Q === V || !o && Q.startsWith(V) && Q.charAt(te) === "/", ne = K != null && (K === V || !o && K.startsWith(V) && K.charAt(V.length) === "/"), ae = {
      isActive: W,
      isPending: ne,
      isTransitioning: D
    }, F = W ? r : void 0, Se;
    typeof s == "function" ? Se = s(ae) : Se = [
      s,
      W ? "active" : null,
      ne ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let xe = typeof d == "function" ? d(ae) : d;
    return /* @__PURE__ */ A.createElement(
      Vh,
      {
        ...y,
        "aria-current": F,
        className: Se,
        ref: b,
        style: xe,
        to: m,
        viewTransition: g
      },
      typeof p == "function" ? p(ae) : p
    );
  }
);
fp.displayName = "NavLink";
var dp = A.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: s,
    replace: o,
    state: d,
    method: m = Ci,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) => {
    let { unstable_useTransitions: U } = A.useContext(jt), D = pp(), V = vp(g, { relative: y }), Q = m.toLowerCase() === "get" ? "get" : "post", K = typeof g == "string" && Gh.test(g), te = (W) => {
      if (p && p(W), W.defaultPrevented) return;
      W.preventDefault();
      let ne = W.nativeEvent.submitter, ae = ne?.getAttribute("formmethod") || m, F = () => D(ne || W.currentTarget, {
        fetcherKey: r,
        method: ae,
        navigate: c,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: R,
        unstable_defaultShouldRevalidate: N
      });
      U && c !== !1 ? A.startTransition(() => F()) : F();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: _,
        method: Q,
        action: V,
        onSubmit: s ? p : te,
        ...Y,
        "data-discover": !K && u === "render" ? "true" : void 0
      }
    );
  }
);
dp.displayName = "Form";
function mp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qh(u) {
  let r = A.useContext(In);
  return He(r, mp(u)), r;
}
function hp(u, {
  target: r,
  replace: c,
  state: s,
  preventScrollReset: o,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Tg(), b = fn(), R = tu(u, { relative: d });
  return A.useCallback(
    (N) => {
      if (Zg(N, r)) {
        N.preventDefault();
        let Y = c !== void 0 ? c : Ia(b) === Ia(R), _ = () => y(u, {
          replace: Y,
          state: s,
          preventScrollReset: o,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: g
        });
        p ? A.startTransition(() => _()) : _();
      }
    },
    [
      b,
      y,
      R,
      c,
      s,
      r,
      u,
      o,
      d,
      m,
      g,
      p
    ]
  );
}
var yp = 0, gp = () => `__${String(++yp)}__`;
function pp() {
  let { router: u } = Qh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(jt), c = jg(), s = u.fetch, o = u.navigate;
  return A.useCallback(
    async (d, m = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: R } = Jg(
        d,
        r
      );
      if (m.navigate === !1) {
        let N = m.fetcherKey || gp();
        await s(N, c, m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || p,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await o(m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || p,
          formEncType: m.encType || y,
          replace: m.replace,
          state: m.state,
          fromRouteId: c,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [s, o, r, c]
  );
}
function vp(u, { relative: r } = {}) {
  let { basename: c } = A.useContext(jt), s = A.useContext(yl);
  He(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1), d = { ...tu(u || ".", { relative: r }) }, m = fn();
  if (u == null) {
    d.search = m.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((R) => R).forEach((R) => g.append("index", R));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : ml([c, d.pathname])), Ia(d);
}
function bp(u, { relative: r } = {}) {
  let c = A.useContext(Mh);
  He(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = Qh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = tu(u, { relative: r });
  if (!c.isTransitioning)
    return !1;
  let d = hl(c.currentLocation.pathname, s) || c.currentLocation.pathname, m = hl(c.nextLocation.pathname, s) || c.nextLocation.pathname;
  return Mi(o.pathname, m) != null || Mi(o.pathname, d) != null;
}
var ds = { exports: {} }, nt = {};
var Fm;
function Sp() {
  if (Fm) return nt;
  Fm = 1;
  var u = ws();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var s = {
    d: {
      f: c,
      r: function() {
        throw Error(r(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, y, b) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: R == null ? null : "" + R,
      children: p,
      containerInfo: y,
      implementation: b
    };
  }
  var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, nt.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, nt.flushSync = function(p) {
    var y = m.T, b = s.p;
    try {
      if (m.T = null, s.p = 2, p) return p();
    } finally {
      m.T = y, s.p = b, s.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, R = g(b, y.crossOrigin), N = typeof y.integrity == "string" ? y.integrity : void 0, Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? s.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: R,
          integrity: N,
          fetchPriority: Y
        }
      ) : b === "script" && s.d.X(p, {
        crossOrigin: R,
        integrity: N,
        fetchPriority: Y,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, nt.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = g(
            y.as,
            y.crossOrigin
          );
          s.d.M(p, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(p);
  }, nt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, R = g(b, y.crossOrigin);
      s.d.L(p, b, {
        crossOrigin: R,
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
  }, nt.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        s.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(p);
  }, nt.requestFormReset = function(p) {
    s.d.r(p);
  }, nt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, nt.useFormState = function(p, y, b) {
    return m.H.useFormState(p, y, b);
  }, nt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Im;
function Ep() {
  if (Im) return ds.exports;
  Im = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), ds.exports = Sp(), ds.exports;
}
var ms = { exports: {} }, $a = {}, hs = { exports: {} }, ys = {};
var Pm;
function xp() {
  return Pm || (Pm = 1, (function(u) {
    function r(X, q) {
      var G = X.length;
      X.push(q);
      e: for (; 0 < G; ) {
        var I = G - 1 >>> 1, se = X[I];
        if (0 < o(se, q))
          X[I] = q, X[G] = se, G = I;
        else break e;
      }
    }
    function c(X) {
      return X.length === 0 ? null : X[0];
    }
    function s(X) {
      if (X.length === 0) return null;
      var q = X[0], G = X.pop();
      if (G !== q) {
        X[0] = G;
        e: for (var I = 0, se = X.length, Ae = se >>> 1; I < Ae; ) {
          var S = 2 * (I + 1) - 1, H = X[S], Z = S + 1, J = X[Z];
          if (0 > o(H, G))
            Z < se && 0 > o(J, H) ? (X[I] = J, X[Z] = G, I = Z) : (X[I] = H, X[S] = G, I = S);
          else if (Z < se && 0 > o(J, G))
            X[I] = J, X[Z] = G, I = Z;
          else break e;
        }
      }
      return q;
    }
    function o(X, q) {
      var G = X.sortIndex - q.sortIndex;
      return G !== 0 ? G : X.id - q.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, g = m.now();
      u.unstable_now = function() {
        return m.now() - g;
      };
    }
    var p = [], y = [], b = 1, R = null, N = 3, Y = !1, _ = !1, U = !1, D = !1, V = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function te(X) {
      for (var q = c(y); q !== null; ) {
        if (q.callback === null) s(y);
        else if (q.startTime <= X)
          s(y), q.sortIndex = q.expirationTime, r(p, q);
        else break;
        q = c(y);
      }
    }
    function W(X) {
      if (U = !1, te(X), !_)
        if (c(p) !== null)
          _ = !0, ne || (ne = !0, pe());
        else {
          var q = c(y);
          q !== null && Je(W, q.startTime - X);
        }
    }
    var ne = !1, ae = -1, F = 5, Se = -1;
    function xe() {
      return D ? !0 : !(u.unstable_now() - Se < F);
    }
    function lt() {
      if (D = !1, ne) {
        var X = u.unstable_now();
        Se = X;
        var q = !0;
        try {
          e: {
            _ = !1, U && (U = !1, Q(ae), ae = -1), Y = !0;
            var G = N;
            try {
              t: {
                for (te(X), R = c(p); R !== null && !(R.expirationTime > X && xe()); ) {
                  var I = R.callback;
                  if (typeof I == "function") {
                    R.callback = null, N = R.priorityLevel;
                    var se = I(
                      R.expirationTime <= X
                    );
                    if (X = u.unstable_now(), typeof se == "function") {
                      R.callback = se, te(X), q = !0;
                      break t;
                    }
                    R === c(p) && s(p), te(X);
                  } else s(p);
                  R = c(p);
                }
                if (R !== null) q = !0;
                else {
                  var Ae = c(y);
                  Ae !== null && Je(
                    W,
                    Ae.startTime - X
                  ), q = !1;
                }
              }
              break e;
            } finally {
              R = null, N = G, Y = !1;
            }
            q = void 0;
          }
        } finally {
          q ? pe() : ne = !1;
        }
      }
    }
    var pe;
    if (typeof K == "function")
      pe = function() {
        K(lt);
      };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), je = Le.port2;
      Le.port1.onmessage = lt, pe = function() {
        je.postMessage(null);
      };
    } else
      pe = function() {
        V(lt, 0);
      };
    function Je(X, q) {
      ae = V(function() {
        X(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, u.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < X ? Math.floor(1e3 / X) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, u.unstable_next = function(X) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = N;
      }
      var G = N;
      N = q;
      try {
        return X();
      } finally {
        N = G;
      }
    }, u.unstable_requestPaint = function() {
      D = !0;
    }, u.unstable_runWithPriority = function(X, q) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var G = N;
      N = X;
      try {
        return q();
      } finally {
        N = G;
      }
    }, u.unstable_scheduleCallback = function(X, q, G) {
      var I = u.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? I + G : I) : G = I, X) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = G + se, X = {
        id: b++,
        callback: q,
        priorityLevel: X,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > I ? (X.sortIndex = G, r(y, X), c(p) === null && X === c(y) && (U ? (Q(ae), ae = -1) : U = !0, Je(W, G - I))) : (X.sortIndex = se, r(p, X), _ || Y || (_ = !0, ne || (ne = !0, pe()))), X;
    }, u.unstable_shouldYield = xe, u.unstable_wrapCallback = function(X) {
      var q = N;
      return function() {
        var G = N;
        N = q;
        try {
          return X.apply(this, arguments);
        } finally {
          N = G;
        }
      };
    };
  })(ys)), ys;
}
var eh;
function Rp() {
  return eh || (eh = 1, hs.exports = xp()), hs.exports;
}
var th;
function Tp() {
  if (th) return $a;
  th = 1;
  var u = {};
  var r = Rp(), c = ws(), s = Ep();
  function o(e) {
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
  function m(e) {
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
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (m(e) !== e)
      throw Error(o(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(o(188));
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
        throw Error(o(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var f = !1, h = a.child; h; ) {
          if (h === l) {
            f = !0, l = a, n = i;
            break;
          }
          if (h === n) {
            f = !0, n = a, l = i;
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = i.child; h; ) {
            if (h === l) {
              f = !0, l = i, n = a;
              break;
            }
            if (h === n) {
              f = !0, n = i, l = a;
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (l.alternate !== n) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function R(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = R(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign, Y = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), te = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), ne = /* @__PURE__ */ Symbol.for("react.suspense"), ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), Se = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.activity"), lt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
  function Le(e) {
    return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === je ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case Q:
        return "Profiler";
      case V:
        return "StrictMode";
      case ne:
        return "Suspense";
      case ae:
        return "SuspenseList";
      case xe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case U:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : Je(e.type) || "Memo";
        case Se:
          t = e._payload, e = e._init;
          try {
            return Je(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, q = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], Ae = -1;
  function S(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ae || (e.current = se[Ae], se[Ae] = null, Ae--);
  }
  function Z(e, t) {
    Ae++, se[Ae] = e.current, e.current = t;
  }
  var J = S(null), oe = S(null), fe = S(null), P = S(null);
  function ze(e, t) {
    switch (Z(fe, t), Z(oe, e), Z(J, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? om(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = om(t), e = fm(t, e);
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
    H(J), Z(J, e);
  }
  function Be() {
    H(J), H(oe), H(fe);
  }
  function Bt(e) {
    e.memoizedState !== null && Z(P, e);
    var t = J.current, l = fm(t, e.type);
    t !== l && (Z(oe, e), Z(J, l));
  }
  function Kt(e) {
    oe.current === e && (H(J), H(oe)), P.current === e && (H(P), Va._currentValue = I);
  }
  var Jt, ru;
  function Xl(e) {
    if (Jt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Jt = t && t[1] || "", ru = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Jt + e + ru;
  }
  var Qi = !1;
  function Zi(e, t) {
    if (!e || Qi) return "";
    Qi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch (M) {
                  var O = M;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (M) {
                  O = M;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                O = M;
              }
              (L = e()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (M) {
            if (M && O && typeof M.stack == "string")
              return [M.stack, O.stack];
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
      var i = n.DetermineComponentFrameRoot(), f = i[0], h = i[1];
      if (f && h) {
        var v = f.split(`
`), C = h.split(`
`);
        for (a = n = 0; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < C.length && !C[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === v.length || a === C.length)
          for (n = v.length - 1, a = C.length - 1; 1 <= n && 0 <= a && v[n] !== C[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (v[n] !== C[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || v[n] !== C[a]) {
                  var j = `
` + v[n].replace(" at new ", " at ");
                  return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Qi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Xl(l) : "";
  }
  function p0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Xl(e.type);
      case 16:
        return Xl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Xl("Suspense Fallback") : Xl("Suspense");
      case 19:
        return Xl("SuspenseList");
      case 0:
      case 15:
        return Zi(e.type, !1);
      case 11:
        return Zi(e.type.render, !1);
      case 1:
        return Zi(e.type, !0);
      case 31:
        return Xl("Activity");
      default:
        return "";
    }
  }
  function qs(e) {
    try {
      var t = "", l = null;
      do
        t += p0(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var ki = Object.prototype.hasOwnProperty, Ki = r.unstable_scheduleCallback, Ji = r.unstable_cancelCallback, v0 = r.unstable_shouldYield, b0 = r.unstable_requestPaint, yt = r.unstable_now, S0 = r.unstable_getCurrentPriorityLevel, Ys = r.unstable_ImmediatePriority, Xs = r.unstable_UserBlockingPriority, cu = r.unstable_NormalPriority, E0 = r.unstable_LowPriority, Gs = r.unstable_IdlePriority, x0 = r.log, R0 = r.unstable_setDisableYieldValue, ta = null, gt = null;
  function gl(e) {
    if (typeof x0 == "function" && R0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ta, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : w0, T0 = Math.log, A0 = Math.LN2;
  function w0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (T0(e) / A0 | 0) | 0;
  }
  var su = 256, ou = 262144, fu = 4194304;
  function Gl(e) {
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
  function du(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = n & 134217727;
    return h !== 0 ? (n = h & ~i, n !== 0 ? a = Gl(n) : (f &= h, f !== 0 ? a = Gl(f) : l || (l = h & ~e, l !== 0 && (a = Gl(l))))) : (h = n & ~i, h !== 0 ? a = Gl(h) : f !== 0 ? a = Gl(f) : l || (l = n & ~e, l !== 0 && (a = Gl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function la(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function C0(e, t) {
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
  function Vs() {
    var e = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), e;
  }
  function $i(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function na(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function _0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var h = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var j = 31 - pt(l), L = 1 << j;
      h[j] = 0, v[j] = -1;
      var O = C[j];
      if (O !== null)
        for (C[j] = null, j = 0; j < O.length; j++) {
          var M = O[j];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~L;
    }
    n !== 0 && Qs(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Qs(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Zs(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function ks(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Wi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Wi(e) {
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
  function Fi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ks() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Um(e.type));
  }
  function Js(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var pl = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + pl, it = "__reactProps$" + pl, dn = "__reactContainer$" + pl, Ii = "__reactEvents$" + pl, O0 = "__reactListeners$" + pl, z0 = "__reactHandles$" + pl, $s = "__reactResources$" + pl, aa = "__reactMarker$" + pl;
  function Pi(e) {
    delete e[Fe], delete e[it], delete e[Ii], delete e[O0], delete e[z0];
  }
  function mn(e) {
    var t = e[Fe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[dn] || l[Fe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = vm(e); e !== null; ) {
            if (l = e[Fe]) return l;
            e = vm(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function hn(e) {
    if (e = e[Fe] || e[dn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ua(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function yn(e) {
    var t = e[$s];
    return t || (t = e[$s] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[aa] = !0;
  }
  var Ws = /* @__PURE__ */ new Set(), Fs = {};
  function Vl(e, t) {
    gn(e, t), gn(e + "Capture", t);
  }
  function gn(e, t) {
    for (Fs[e] = t, e = 0; e < t.length; e++)
      Ws.add(t[e]);
  }
  var N0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Is = {}, Ps = {};
  function M0(e) {
    return ki.call(Ps, e) ? !0 : ki.call(Is, e) ? !1 : N0.test(e) ? Ps[e] = !0 : (Is[e] = !0, !1);
  }
  function mu(e, t, l) {
    if (M0(t))
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
  function hu(e, t, l) {
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
  function $t(e, t, l, n) {
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
  function At(e) {
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
  function eo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function D0(e, t, l) {
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
        set: function(f) {
          l = "" + f, i.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(f) {
          l = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function er(e) {
    if (!e._valueTracker) {
      var t = eo(e) ? "checked" : "value";
      e._valueTracker = D0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function to(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = eo(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function yu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var U0 = /[\n"\\]/g;
  function wt(e) {
    return e.replace(
      U0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tr(e, t, l, n, a, i, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? lr(e, f, At(t)) : l != null ? lr(e, f, At(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + At(h) : e.removeAttribute("name");
  }
  function lo(e, t, l, n, a, i, f, h) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        er(e);
        return;
      }
      l = l != null ? "" + At(l) : "", t = t != null ? "" + At(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = h ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), er(e);
  }
  function lr(e, t, l) {
    t === "number" && yu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function pn(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + At(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function no(e, t, l) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + At(l) : "";
  }
  function ao(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(o(92));
        if (X(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = At(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), er(e);
  }
  function vn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var j0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function uo(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || j0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function io(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && uo(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && uo(e, i, t[i]);
  }
  function nr(e) {
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
  var B0 = /* @__PURE__ */ new Map([
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
  ]), H0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gu(e) {
    return H0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Wt() {
  }
  var ar = null;
  function ur(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var bn = null, Sn = null;
  function ro(e) {
    var t = hn(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (tr(
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
              'input[name="' + wt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[it] || null;
                if (!a) throw Error(o(90));
                tr(
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
              n = l[t], n.form === e.form && to(n);
          }
          break e;
        case "textarea":
          no(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && pn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ir = !1;
  function co(e, t, l) {
    if (ir) return e(t, l);
    ir = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ir = !1, (bn !== null || Sn !== null) && (ni(), bn && (t = bn, e = Sn, Sn = bn = null, ro(t), e)))
        for (t = 0; t < e.length; t++) ro(e[t]);
    }
  }
  function ia(e, t) {
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
        o(231, t, typeof l)
      );
    return l;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rr = !1;
  if (Ft)
    try {
      var ra = {};
      Object.defineProperty(ra, "passive", {
        get: function() {
          rr = !0;
        }
      }), window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
    } catch {
      rr = !1;
    }
  var vl = null, cr = null, pu = null;
  function so() {
    if (pu) return pu;
    var e, t = cr, l = t.length, n, a = "value" in vl ? vl.value : vl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === a[i - n]; n++) ;
    return pu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function vu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bu() {
    return !0;
  }
  function oo() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(i) : i[h]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : oo, this.isPropagationStopped = oo, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = bu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = bu);
      },
      persist: function() {
      },
      isPersistent: bu
    }), t;
  }
  var Ql = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Su = rt(Ql), ca = N({}, Ql, { view: 0, detail: 0 }), L0 = rt(ca), sr, or, sa, Eu = N({}, ca, {
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
    getModifierState: dr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== sa && (sa && e.type === "mousemove" ? (sr = e.screenX - sa.screenX, or = e.screenY - sa.screenY) : or = sr = 0, sa = e), sr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : or;
    }
  }), fo = rt(Eu), q0 = N({}, Eu, { dataTransfer: 0 }), Y0 = rt(q0), X0 = N({}, ca, { relatedTarget: 0 }), fr = rt(X0), G0 = N({}, Ql, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V0 = rt(G0), Q0 = N({}, Ql, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Z0 = rt(Q0), k0 = N({}, Ql, { data: 0 }), mo = rt(k0), K0 = {
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
  }, J0 = {
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
  }, $0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function W0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $0[e]) ? !!t[e] : !1;
  }
  function dr() {
    return W0;
  }
  var F0 = N({}, ca, {
    key: function(e) {
      if (e.key) {
        var t = K0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dr,
    charCode: function(e) {
      return e.type === "keypress" ? vu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), I0 = rt(F0), P0 = N({}, Eu, {
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
  }), ho = rt(P0), ey = N({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dr
  }), ty = rt(ey), ly = N({}, Ql, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ny = rt(ly), ay = N({}, Eu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uy = rt(ay), iy = N({}, Ql, {
    newState: 0,
    oldState: 0
  }), ry = rt(iy), cy = [9, 13, 27, 32], mr = Ft && "CompositionEvent" in window, oa = null;
  Ft && "documentMode" in document && (oa = document.documentMode);
  var sy = Ft && "TextEvent" in window && !oa, yo = Ft && (!mr || oa && 8 < oa && 11 >= oa), go = " ", po = !1;
  function vo(e, t) {
    switch (e) {
      case "keyup":
        return cy.indexOf(t.keyCode) !== -1;
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
  function bo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var En = !1;
  function oy(e, t) {
    switch (e) {
      case "compositionend":
        return bo(t);
      case "keypress":
        return t.which !== 32 ? null : (po = !0, go);
      case "textInput":
        return e = t.data, e === go && po ? null : e;
      default:
        return null;
    }
  }
  function fy(e, t) {
    if (En)
      return e === "compositionend" || !mr && vo(e, t) ? (e = so(), pu = cr = vl = null, En = !1, e) : null;
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
        return yo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var dy = {
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
  function So(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dy[e.type] : t === "textarea";
  }
  function Eo(e, t, l, n) {
    bn ? Sn ? Sn.push(n) : Sn = [n] : bn = n, t = oi(t, "onChange"), 0 < t.length && (l = new Su(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, da = null;
  function my(e) {
    am(e, 0);
  }
  function xu(e) {
    var t = ua(e);
    if (to(t)) return e;
  }
  function xo(e, t) {
    if (e === "change") return t;
  }
  var Ro = !1;
  if (Ft) {
    var hr;
    if (Ft) {
      var yr = "oninput" in document;
      if (!yr) {
        var To = document.createElement("div");
        To.setAttribute("oninput", "return;"), yr = typeof To.oninput == "function";
      }
      hr = yr;
    } else hr = !1;
    Ro = hr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    fa && (fa.detachEvent("onpropertychange", wo), da = fa = null);
  }
  function wo(e) {
    if (e.propertyName === "value" && xu(da)) {
      var t = [];
      Eo(
        t,
        da,
        e,
        ur(e)
      ), co(my, t);
    }
  }
  function hy(e, t, l) {
    e === "focusin" ? (Ao(), fa = t, da = l, fa.attachEvent("onpropertychange", wo)) : e === "focusout" && Ao();
  }
  function yy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return xu(da);
  }
  function gy(e, t) {
    if (e === "click") return xu(t);
  }
  function py(e, t) {
    if (e === "input" || e === "change")
      return xu(t);
  }
  function vy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : vy;
  function ma(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!ki.call(t, a) || !vt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Co(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function _o(e, t) {
    var l = Co(e);
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
      l = Co(l);
    }
  }
  function Oo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = yu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = yu(e.document);
    }
    return t;
  }
  function gr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var by = Ft && "documentMode" in document && 11 >= document.documentMode, xn = null, pr = null, ha = null, vr = !1;
  function No(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vr || xn == null || xn !== yu(n) || (n = xn, "selectionStart" in n && gr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ha && ma(ha, n) || (ha = n, n = oi(pr, "onSelect"), 0 < n.length && (t = new Su(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = xn)));
  }
  function Zl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Rn = {
    animationend: Zl("Animation", "AnimationEnd"),
    animationiteration: Zl("Animation", "AnimationIteration"),
    animationstart: Zl("Animation", "AnimationStart"),
    transitionrun: Zl("Transition", "TransitionRun"),
    transitionstart: Zl("Transition", "TransitionStart"),
    transitioncancel: Zl("Transition", "TransitionCancel"),
    transitionend: Zl("Transition", "TransitionEnd")
  }, br = {}, Mo = {};
  Ft && (Mo = document.createElement("div").style, "AnimationEvent" in window || (delete Rn.animationend.animation, delete Rn.animationiteration.animation, delete Rn.animationstart.animation), "TransitionEvent" in window || delete Rn.transitionend.transition);
  function kl(e) {
    if (br[e]) return br[e];
    if (!Rn[e]) return e;
    var t = Rn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Mo)
        return br[e] = t[l];
    return e;
  }
  var Do = kl("animationend"), Uo = kl("animationiteration"), jo = kl("animationstart"), Sy = kl("transitionrun"), Ey = kl("transitionstart"), xy = kl("transitioncancel"), Bo = kl("transitionend"), Ho = /* @__PURE__ */ new Map(), Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sr.push("scrollEnd");
  function Ht(e, t) {
    Ho.set(e, t), Vl(t, [e]);
  }
  var Ru = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ct = [], Tn = 0, Er = 0;
  function Tu() {
    for (var e = Tn, t = Er = Tn = 0; t < e; ) {
      var l = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var i = Ct[t];
      if (Ct[t++] = null, n !== null && a !== null) {
        var f = n.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), n.pending = a;
      }
      i !== 0 && Lo(l, a, i);
    }
  }
  function Au(e, t, l, n) {
    Ct[Tn++] = e, Ct[Tn++] = t, Ct[Tn++] = l, Ct[Tn++] = n, Er |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function xr(e, t, l, n) {
    return Au(e, t, l, n), wu(e);
  }
  function Kl(e, t) {
    return Au(e, null, null, t), wu(e);
  }
  function Lo(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function wu(e) {
    if (50 < Ba)
      throw Ba = 0, Nc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var An = {};
  function Ry(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new Ry(e, t, l, n);
  }
  function Rr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function It(e, t) {
    var l = e.alternate;
    return l === null ? (l = bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function qo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Cu(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") Rr(e) && (f = 1);
    else if (typeof e == "string")
      f = _1(
        e,
        l,
        J.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case xe:
          return e = bt(31, l, t, a), e.elementType = xe, e.lanes = i, e;
        case D:
          return Jl(l.children, a, i, t);
        case V:
          f = 8, a |= 24;
          break;
        case Q:
          return e = bt(12, l, t, a | 2), e.elementType = Q, e.lanes = i, e;
        case ne:
          return e = bt(13, l, t, a), e.elementType = ne, e.lanes = i, e;
        case ae:
          return e = bt(19, l, t, a), e.elementType = ae, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case te:
                f = 10;
                break e;
              case K:
                f = 9;
                break e;
              case W:
                f = 11;
                break e;
              case F:
                f = 14;
                break e;
              case Se:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = bt(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Jl(e, t, l, n) {
    return e = bt(7, e, n, t), e.lanes = l, e;
  }
  function Tr(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e;
  }
  function Yo(e) {
    var t = bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ar(e, t, l) {
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
  var Xo = /* @__PURE__ */ new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Xo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: qs(t)
      }, Xo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: qs(t)
    };
  }
  var wn = [], Cn = 0, _u = null, ya = 0, Ot = [], zt = 0, bl = null, Gt = 1, Vt = "";
  function Pt(e, t) {
    wn[Cn++] = ya, wn[Cn++] = _u, _u = e, ya = t;
  }
  function Go(e, t, l) {
    Ot[zt++] = Gt, Ot[zt++] = Vt, Ot[zt++] = bl, bl = e;
    var n = Gt;
    e = Vt;
    var a = 32 - pt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pt(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Gt = 1 << 32 - pt(t) + a | l << a | n, Vt = i + e;
    } else
      Gt = 1 << i | l << a | n, Vt = e;
  }
  function wr(e) {
    e.return !== null && (Pt(e, 1), Go(e, 1, 0));
  }
  function Cr(e) {
    for (; e === _u; )
      _u = wn[--Cn], wn[Cn] = null, ya = wn[--Cn], wn[Cn] = null;
    for (; e === bl; )
      bl = Ot[--zt], Ot[zt] = null, Vt = Ot[--zt], Ot[zt] = null, Gt = Ot[--zt], Ot[zt] = null;
  }
  function Vo(e, t) {
    Ot[zt++] = Gt, Ot[zt++] = Vt, Ot[zt++] = bl, Gt = t.id, Vt = t.overflow, bl = e;
  }
  var Ie = null, Ne = null, ge = !1, Sl = null, Nt = !1, _r = Error(o(519));
  function El(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ga(_t(t, e)), _r;
  }
  function Qo(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[Fe] = e, t[it] = n, l) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < La.length; l++)
          me(La[l], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t), lo(
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
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), ao(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || cm(t.textContent, l) ? (n.popover != null && (me("beforetoggle", t), me("toggle", t)), n.onScroll != null && me("scroll", t), n.onScrollEnd != null && me("scrollend", t), n.onClick != null && (t.onclick = Wt), t = !0) : t = !1, t || El(e, !0);
  }
  function Zo(e) {
    for (Ie = e.return; Ie; )
      switch (Ie.tag) {
        case 5:
        case 31:
        case 13:
          Nt = !1;
          return;
        case 27:
        case 3:
          Nt = !0;
          return;
        default:
          Ie = Ie.return;
      }
  }
  function _n(e) {
    if (e !== Ie) return !1;
    if (!ge) return Zo(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || kc(e.type, e.memoizedProps)), l = !l), l && Ne && El(e), Zo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ne = pm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ne = pm(e);
    } else
      t === 27 ? (t = Ne, jl(e.type) ? (e = Fc, Fc = null, Ne = e) : Ne = t) : Ne = Ie ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function $l() {
    Ne = Ie = null, ge = !1;
  }
  function Or() {
    var e = Sl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), Sl = null), e;
  }
  function ga(e) {
    Sl === null ? Sl = [e] : Sl.push(e);
  }
  var zr = S(null), Wl = null, el = null;
  function xl(e, t, l) {
    Z(zr, t._currentValue), t._currentValue = l;
  }
  function tl(e) {
    e._currentValue = zr.current, H(zr);
  }
  function Nr(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Mr(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var h = i;
          i = a;
          for (var v = 0; v < t.length; v++)
            if (h.context === t[v]) {
              i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), Nr(
                i.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          i = h.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(o(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), Nr(f, l, e), f = null;
      } else f = a.child;
      if (f !== null) f.return = a;
      else
        for (f = a; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (a = f.sibling, a !== null) {
            a.return = f.return, f = a;
            break;
          }
          f = f.return;
        }
      a = f;
    }
  }
  function On(e, t, l, n) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var h = a.type;
          vt(a.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (a === P.current) {
        if (f = a.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Va) : e = [Va]);
      }
      a = a.return;
    }
    e !== null && Mr(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function Ou(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!vt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Fl(e) {
    Wl = e, el = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pe(e) {
    return ko(Wl, e);
  }
  function zu(e, t) {
    return Wl === null && Fl(e), ko(e, t);
  }
  function ko(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, el === null) {
      if (e === null) throw Error(o(308));
      el = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else el = el.next = t;
    return l;
  }
  var Ty = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ay = r.unstable_scheduleCallback, wy = r.unstable_NormalPriority, Ve = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dr() {
    return {
      controller: new Ty(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && Ay(wy, function() {
      e.controller.abort();
    });
  }
  var va = null, Ur = 0, zn = 0, Nn = null;
  function Cy(e, t) {
    if (va === null) {
      var l = va = [];
      Ur = 0, zn = Hc(), Nn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Ur++, t.then(Ko, Ko), t;
  }
  function Ko() {
    if (--Ur === 0 && va !== null) {
      Nn !== null && (Nn.status = "fulfilled");
      var e = va;
      va = null, zn = 0, Nn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function _y(e, t) {
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
  var Jo = q.S;
  q.S = function(e, t) {
    Md = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && Cy(e, t), Jo !== null && Jo(e, t);
  };
  var Il = S(null);
  function jr() {
    var e = Il.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function Nu(e, t) {
    t === null ? Z(Il, Il.current) : Z(Il, t.pool);
  }
  function $o() {
    var e = jr();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Mn = Error(o(460)), Br = Error(o(474)), Mu = Error(o(542)), Du = { then: function() {
  } };
  function Wo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Fo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Wt, Wt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Po(e), e;
      default:
        if (typeof t.status == "string") t.then(Wt, Wt);
        else {
          if (e = Oe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
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
            throw e = t.reason, Po(e), e;
        }
        throw en = t, Mn;
    }
  }
  function Pl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (en = l, Mn) : l;
    }
  }
  var en = null;
  function Io() {
    if (en === null) throw Error(o(459));
    var e = en;
    return en = null, e;
  }
  function Po(e) {
    if (e === Mn || e === Mu)
      throw Error(o(483));
  }
  var Dn = null, ba = 0;
  function Uu(e) {
    var t = ba;
    return ba += 1, Dn === null && (Dn = []), Fo(Dn, e, t);
  }
  function Sa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ju(e, t) {
    throw t.$$typeof === Y ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ef(e) {
    function t(T, E) {
      if (e) {
        var w = T.deletions;
        w === null ? (T.deletions = [E], T.flags |= 16) : w.push(E);
      }
    }
    function l(T, E) {
      if (!e) return null;
      for (; E !== null; )
        t(T, E), E = E.sibling;
      return null;
    }
    function n(T) {
      for (var E = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
      return E;
    }
    function a(T, E) {
      return T = It(T, E), T.index = 0, T.sibling = null, T;
    }
    function i(T, E, w) {
      return T.index = w, e ? (w = T.alternate, w !== null ? (w = w.index, w < E ? (T.flags |= 67108866, E) : w) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, E, w, B) {
      return E === null || E.tag !== 6 ? (E = Tr(w, T.mode, B), E.return = T, E) : (E = a(E, w), E.return = T, E);
    }
    function v(T, E, w, B) {
      var ee = w.type;
      return ee === D ? j(
        T,
        E,
        w.props.children,
        B,
        w.key
      ) : E !== null && (E.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Se && Pl(ee) === E.type) ? (E = a(E, w.props), Sa(E, w), E.return = T, E) : (E = Cu(
        w.type,
        w.key,
        w.props,
        null,
        T.mode,
        B
      ), Sa(E, w), E.return = T, E);
    }
    function C(T, E, w, B) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== w.containerInfo || E.stateNode.implementation !== w.implementation ? (E = Ar(w, T.mode, B), E.return = T, E) : (E = a(E, w.children || []), E.return = T, E);
    }
    function j(T, E, w, B, ee) {
      return E === null || E.tag !== 7 ? (E = Jl(
        w,
        T.mode,
        B,
        ee
      ), E.return = T, E) : (E = a(E, w), E.return = T, E);
    }
    function L(T, E, w) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Tr(
          "" + E,
          T.mode,
          w
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case _:
            return w = Cu(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              w
            ), Sa(w, E), w.return = T, w;
          case U:
            return E = Ar(
              E,
              T.mode,
              w
            ), E.return = T, E;
          case Se:
            return E = Pl(E), L(T, E, w);
        }
        if (X(E) || Le(E))
          return E = Jl(
            E,
            T.mode,
            w,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return L(T, Uu(E), w);
        if (E.$$typeof === te)
          return L(
            T,
            zu(T, E),
            w
          );
        ju(T, E);
      }
      return null;
    }
    function O(T, E, w, B) {
      var ee = E !== null ? E.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return ee !== null ? null : h(T, E, "" + w, B);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return w.key === ee ? v(T, E, w, B) : null;
          case U:
            return w.key === ee ? C(T, E, w, B) : null;
          case Se:
            return w = Pl(w), O(T, E, w, B);
        }
        if (X(w) || Le(w))
          return ee !== null ? null : j(T, E, w, B, null);
        if (typeof w.then == "function")
          return O(
            T,
            E,
            Uu(w),
            B
          );
        if (w.$$typeof === te)
          return O(
            T,
            E,
            zu(T, w),
            B
          );
        ju(T, w);
      }
      return null;
    }
    function M(T, E, w, B, ee) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return T = T.get(w) || null, h(E, T, "" + B, ee);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _:
            return T = T.get(
              B.key === null ? w : B.key
            ) || null, v(E, T, B, ee);
          case U:
            return T = T.get(
              B.key === null ? w : B.key
            ) || null, C(E, T, B, ee);
          case Se:
            return B = Pl(B), M(
              T,
              E,
              w,
              B,
              ee
            );
        }
        if (X(B) || Le(B))
          return T = T.get(w) || null, j(E, T, B, ee, null);
        if (typeof B.then == "function")
          return M(
            T,
            E,
            w,
            Uu(B),
            ee
          );
        if (B.$$typeof === te)
          return M(
            T,
            E,
            w,
            zu(E, B),
            ee
          );
        ju(E, B);
      }
      return null;
    }
    function k(T, E, w, B) {
      for (var ee = null, ve = null, $ = E, ce = E = 0, ye = null; $ !== null && ce < w.length; ce++) {
        $.index > ce ? (ye = $, $ = null) : ye = $.sibling;
        var be = O(
          T,
          $,
          w[ce],
          B
        );
        if (be === null) {
          $ === null && ($ = ye);
          break;
        }
        e && $ && be.alternate === null && t(T, $), E = i(be, E, ce), ve === null ? ee = be : ve.sibling = be, ve = be, $ = ye;
      }
      if (ce === w.length)
        return l(T, $), ge && Pt(T, ce), ee;
      if ($ === null) {
        for (; ce < w.length; ce++)
          $ = L(T, w[ce], B), $ !== null && (E = i(
            $,
            E,
            ce
          ), ve === null ? ee = $ : ve.sibling = $, ve = $);
        return ge && Pt(T, ce), ee;
      }
      for ($ = n($); ce < w.length; ce++)
        ye = M(
          $,
          T,
          ce,
          w[ce],
          B
        ), ye !== null && (e && ye.alternate !== null && $.delete(
          ye.key === null ? ce : ye.key
        ), E = i(
          ye,
          E,
          ce
        ), ve === null ? ee = ye : ve.sibling = ye, ve = ye);
      return e && $.forEach(function(Yl) {
        return t(T, Yl);
      }), ge && Pt(T, ce), ee;
    }
    function le(T, E, w, B) {
      if (w == null) throw Error(o(151));
      for (var ee = null, ve = null, $ = E, ce = E = 0, ye = null, be = w.next(); $ !== null && !be.done; ce++, be = w.next()) {
        $.index > ce ? (ye = $, $ = null) : ye = $.sibling;
        var Yl = O(T, $, be.value, B);
        if (Yl === null) {
          $ === null && ($ = ye);
          break;
        }
        e && $ && Yl.alternate === null && t(T, $), E = i(Yl, E, ce), ve === null ? ee = Yl : ve.sibling = Yl, ve = Yl, $ = ye;
      }
      if (be.done)
        return l(T, $), ge && Pt(T, ce), ee;
      if ($ === null) {
        for (; !be.done; ce++, be = w.next())
          be = L(T, be.value, B), be !== null && (E = i(be, E, ce), ve === null ? ee = be : ve.sibling = be, ve = be);
        return ge && Pt(T, ce), ee;
      }
      for ($ = n($); !be.done; ce++, be = w.next())
        be = M($, T, ce, be.value, B), be !== null && (e && be.alternate !== null && $.delete(be.key === null ? ce : be.key), E = i(be, E, ce), ve === null ? ee = be : ve.sibling = be, ve = be);
      return e && $.forEach(function(q1) {
        return t(T, q1);
      }), ge && Pt(T, ce), ee;
    }
    function _e(T, E, w, B) {
      if (typeof w == "object" && w !== null && w.type === D && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            e: {
              for (var ee = w.key; E !== null; ) {
                if (E.key === ee) {
                  if (ee = w.type, ee === D) {
                    if (E.tag === 7) {
                      l(
                        T,
                        E.sibling
                      ), B = a(
                        E,
                        w.props.children
                      ), B.return = T, T = B;
                      break e;
                    }
                  } else if (E.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Se && Pl(ee) === E.type) {
                    l(
                      T,
                      E.sibling
                    ), B = a(E, w.props), Sa(B, w), B.return = T, T = B;
                    break e;
                  }
                  l(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              w.type === D ? (B = Jl(
                w.props.children,
                T.mode,
                B,
                w.key
              ), B.return = T, T = B) : (B = Cu(
                w.type,
                w.key,
                w.props,
                null,
                T.mode,
                B
              ), Sa(B, w), B.return = T, T = B);
            }
            return f(T);
          case U:
            e: {
              for (ee = w.key; E !== null; ) {
                if (E.key === ee)
                  if (E.tag === 4 && E.stateNode.containerInfo === w.containerInfo && E.stateNode.implementation === w.implementation) {
                    l(
                      T,
                      E.sibling
                    ), B = a(E, w.children || []), B.return = T, T = B;
                    break e;
                  } else {
                    l(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              B = Ar(w, T.mode, B), B.return = T, T = B;
            }
            return f(T);
          case Se:
            return w = Pl(w), _e(
              T,
              E,
              w,
              B
            );
        }
        if (X(w))
          return k(
            T,
            E,
            w,
            B
          );
        if (Le(w)) {
          if (ee = Le(w), typeof ee != "function") throw Error(o(150));
          return w = ee.call(w), le(
            T,
            E,
            w,
            B
          );
        }
        if (typeof w.then == "function")
          return _e(
            T,
            E,
            Uu(w),
            B
          );
        if (w.$$typeof === te)
          return _e(
            T,
            E,
            zu(T, w),
            B
          );
        ju(T, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, E !== null && E.tag === 6 ? (l(T, E.sibling), B = a(E, w), B.return = T, T = B) : (l(T, E), B = Tr(w, T.mode, B), B.return = T, T = B), f(T)) : l(T, E);
    }
    return function(T, E, w, B) {
      try {
        ba = 0;
        var ee = _e(
          T,
          E,
          w,
          B
        );
        return Dn = null, ee;
      } catch ($) {
        if ($ === Mn || $ === Mu) throw $;
        var ve = bt(29, $, null, T.mode);
        return ve.lanes = B, ve.return = T, ve;
      }
    };
  }
  var tn = ef(!0), tf = ef(!1), Rl = !1;
  function Hr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Lr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Tl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Al(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ee & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = wu(e), Lo(e, null, l), t;
    }
    return Au(e, n, t, l), wu(e);
  }
  function Ea(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Zs(e, l);
    }
  }
  function qr(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var a = null, i = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          i === null ? a = i = f : i = i.next = f, l = l.next;
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
  var Yr = !1;
  function xa() {
    if (Yr) {
      var e = Nn;
      if (e !== null) throw e;
    }
  }
  function Ra(e, t, l, n) {
    Yr = !1;
    var a = e.updateQueue;
    Rl = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var v = h, C = v.next;
      v.next = null, f === null ? i = C : f.next = C, f = v;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, h = j.lastBaseUpdate, h !== f && (h === null ? j.firstBaseUpdate = C : h.next = C, j.lastBaseUpdate = v));
    }
    if (i !== null) {
      var L = a.baseState;
      f = 0, j = C = v = null, h = i;
      do {
        var O = h.lane & -536870913, M = O !== h.lane;
        if (M ? (he & O) === O : (n & O) === O) {
          O !== 0 && O === zn && (Yr = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, le = h;
            O = t;
            var _e = l;
            switch (le.tag) {
              case 1:
                if (k = le.payload, typeof k == "function") {
                  L = k.call(_e, L, O);
                  break e;
                }
                L = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = le.payload, O = typeof k == "function" ? k.call(_e, L, O) : k, O == null) break e;
                L = N({}, L, O);
                break e;
              case 2:
                Rl = !0;
            }
          }
          O = h.callback, O !== null && (e.flags |= 64, M && (e.flags |= 8192), M = a.callbacks, M === null ? a.callbacks = [O] : M.push(O));
        } else
          M = {
            lane: O,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, j === null ? (C = j = M, v = L) : j = j.next = M, f |= O;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      j === null && (v = L), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = j, i === null && (a.shared.lanes = 0), zl |= f, e.lanes = f, e.memoizedState = L;
    }
  }
  function lf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function nf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        lf(l[e], t);
  }
  var Un = S(null), Bu = S(0);
  function af(e, t) {
    e = ol, Z(Bu, e), Z(Un, t), ol = e | t.baseLanes;
  }
  function Xr() {
    Z(Bu, ol), Z(Un, Un.current);
  }
  function Gr() {
    ol = Bu.current, H(Un), H(Bu);
  }
  var St = S(null), Mt = null;
  function wl(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(St, e), Mt === null && (t === null || Un.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Vr(e) {
    Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e);
  }
  function uf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e)) : Cl();
  }
  function Cl() {
    Z(Xe, Xe.current), Z(St, St.current);
  }
  function Et(e) {
    H(St), Mt === e && (Mt = null), H(Xe);
  }
  var Xe = S(0);
  function Hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || $c(l) || Wc(l)))
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
  var ll = 0, ie = null, we = null, Qe = null, Lu = !1, jn = !1, ln = !1, qu = 0, Ta = 0, Bn = null, Oy = 0;
  function qe() {
    throw Error(o(321));
  }
  function Qr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Zr(e, t, l, n, a, i) {
    return ll = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? Vf : ic, ln = !1, i = l(n, a), ln = !1, jn && (i = cf(
      t,
      l,
      n,
      a
    )), rf(e), i;
  }
  function rf(e) {
    q.H = Ca;
    var t = we !== null && we.next !== null;
    if (ll = 0, Qe = we = ie = null, Lu = !1, Ta = 0, Bn = null, t) throw Error(o(300));
    e === null || Ze || (e = e.dependencies, e !== null && Ou(e) && (Ze = !0));
  }
  function cf(e, t, l, n) {
    ie = e;
    var a = 0;
    do {
      if (jn && (Bn = null), Ta = 0, jn = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Qe = we = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      q.H = Qf, i = t(l, n);
    } while (jn);
    return i;
  }
  function zy() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Aa(t) : t, e = e.useState()[0], (we !== null ? we.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function kr() {
    var e = qu !== 0;
    return qu = 0, e;
  }
  function Kr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Jr(e) {
    if (Lu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Lu = !1;
    }
    ll = 0, Qe = we = ie = null, jn = !1, Ta = qu = 0, Bn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? ie.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ge() {
    if (we === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = Qe === null ? ie.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, we = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(o(467)) : Error(o(310));
      we = e, e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null
      }, Qe === null ? ie.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Aa(e) {
    var t = Ta;
    return Ta += 1, Bn === null && (Bn = []), e = Fo(Bn, e, t), t = ie, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? Vf : ic), e;
  }
  function Xu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Aa(e);
      if (e.$$typeof === te) return Pe(e);
    }
    throw Error(o(438, String(e)));
  }
  function $r(e) {
    var t = null, l = ie.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ie.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Yu(), ie.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = lt;
    return t.index++, l;
  }
  function nl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Gu(e) {
    var t = Ge();
    return Wr(t, we, e);
  }
  function Wr(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = l;
    var a = e.baseQueue, i = n.pending;
    if (i !== null) {
      if (a !== null) {
        var f = a.next;
        a.next = i.next, i.next = f;
      }
      t.baseQueue = a = i, n.pending = null;
    }
    if (i = e.baseState, a === null) e.memoizedState = i;
    else {
      t = a.next;
      var h = f = null, v = null, C = t, j = !1;
      do {
        var L = C.lane & -536870913;
        if (L !== C.lane ? (he & L) === L : (ll & L) === L) {
          var O = C.revertLane;
          if (O === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), L === zn && (j = !0);
          else if ((ll & O) === O) {
            C = C.next, O === zn && (j = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, v === null ? (h = v = L, f = i) : v = v.next = L, ie.lanes |= O, zl |= O;
          L = C.action, ln && l(i, L), i = C.hasEagerState ? C.eagerState : l(i, L);
        } else
          O = {
            lane: L,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (h = v = O, f = i) : v = v.next = O, ie.lanes |= L, zl |= L;
        C = C.next;
      } while (C !== null && C !== t);
      if (v === null ? f = i : v.next = h, !vt(i, e.memoizedState) && (Ze = !0, j && (l = Nn, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Fr(e) {
    var t = Ge(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, i = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var f = a = a.next;
      do
        i = e(i, f.action), f = f.next;
      while (f !== a);
      vt(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function sf(e, t, l) {
    var n = ie, a = Ge(), i = ge;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !vt(
      (we || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, Ze = !0), a = a.queue, ec(df.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Hn(
        9,
        { destroy: void 0 },
        ff.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Oe === null) throw Error(o(349));
      i || (ll & 127) !== 0 || of(n, t, l);
    }
    return l;
  }
  function of(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = Yu(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function ff(e, t, l, n) {
    t.value = l, t.getSnapshot = n, mf(t) && hf(e);
  }
  function df(e, t, l) {
    return l(function() {
      mf(t) && hf(e);
    });
  }
  function mf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l);
    } catch {
      return !0;
    }
  }
  function hf(e) {
    var t = Kl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Ir(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ln) {
        gl(!0);
        try {
          l();
        } finally {
          gl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e
    }, t;
  }
  function yf(e, t, l, n) {
    return e.baseState = l, Wr(
      e,
      we,
      typeof n == "function" ? n : nl
    );
  }
  function Ny(e, t, l, n, a) {
    if (Zu(e)) throw Error(o(485));
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
        then: function(f) {
          i.listeners.push(f);
        }
      };
      q.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, gf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function gf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = q.T, f = {};
      q.T = f;
      try {
        var h = l(a, n), v = q.S;
        v !== null && v(f, h), pf(e, t, h);
      } catch (C) {
        Pr(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
      }
    } else
      try {
        i = l(a, n), pf(e, t, i);
      } catch (C) {
        Pr(e, t, C);
      }
  }
  function pf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        vf(e, t, n);
      },
      function(n) {
        return Pr(e, t, n);
      }
    ) : vf(e, t, l);
  }
  function vf(e, t, l) {
    t.status = "fulfilled", t.value = l, bf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, gf(e, l)));
  }
  function Pr(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, bf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function bf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sf(e, t) {
    return t;
  }
  function Ef(e, t) {
    if (ge) {
      var l = Oe.formState;
      if (l !== null) {
        e: {
          var n = ie;
          if (ge) {
            if (Ne) {
              t: {
                for (var a = Ne, i = Nt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Dt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Ne = Dt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            El(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = ut(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sf,
      lastRenderedState: t
    }, l.queue = n, l = Yf.bind(
      null,
      ie,
      n
    ), n.dispatch = l, n = Ir(!1), i = uc.bind(
      null,
      ie,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = Ny.bind(
      null,
      ie,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function xf(e) {
    var t = Ge();
    return Rf(t, we, e);
  }
  function Rf(e, t, l) {
    if (t = Wr(
      e,
      t,
      Sf
    )[0], e = Gu(nl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Aa(t);
      } catch (f) {
        throw f === Mn ? Mu : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ie.flags |= 2048, Hn(
      9,
      { destroy: void 0 },
      My.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function My(e, t) {
    e.action = t;
  }
  function Tf(e) {
    var t = Ge(), l = we;
    if (l !== null)
      return Rf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Hn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ie.updateQueue, t === null && (t = Yu(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Af() {
    return Ge().memoizedState;
  }
  function Vu(e, t, l, n) {
    var a = ut();
    ie.flags |= e, a.memoizedState = Hn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Qu(e, t, l, n) {
    var a = Ge();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    we !== null && n !== null && Qr(n, we.memoizedState.deps) ? a.memoizedState = Hn(t, i, l, n) : (ie.flags |= e, a.memoizedState = Hn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function wf(e, t) {
    Vu(8390656, 8, e, t);
  }
  function ec(e, t) {
    Qu(2048, 8, e, t);
  }
  function Dy(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = Yu(), ie.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Cf(e) {
    var t = Ge().memoizedState;
    return Dy({ ref: t, nextImpl: e }), function() {
      if ((Ee & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function _f(e, t) {
    return Qu(4, 2, e, t);
  }
  function Of(e, t) {
    return Qu(4, 4, e, t);
  }
  function zf(e, t) {
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
  function Nf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Qu(4, 4, zf.bind(null, t, e), l);
  }
  function tc() {
  }
  function Mf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Qr(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Df(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Qr(t, n[1]))
      return n[0];
    if (n = e(), ln) {
      gl(!0);
      try {
        e();
      } finally {
        gl(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function lc(e, t, l) {
    return l === void 0 || (ll & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ud(), ie.lanes |= e, zl |= e, l);
  }
  function Uf(e, t, l, n) {
    return vt(l, t) ? l : Un.current !== null ? (e = lc(e, l, n), vt(e, t) || (Ze = !0), e) : (ll & 42) === 0 || (ll & 1073741824) !== 0 && (he & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = Ud(), ie.lanes |= e, zl |= e, t);
  }
  function jf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var f = q.T, h = {};
    q.T = h, uc(e, !1, t, l);
    try {
      var v = a(), C = q.S;
      if (C !== null && C(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var j = _y(
          v,
          n
        );
        wa(
          e,
          t,
          j,
          Tt(e)
        );
      } else
        wa(
          e,
          t,
          n,
          Tt(e)
        );
    } catch (L) {
      wa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        Tt()
      );
    } finally {
      G.p = i, f !== null && h.types !== null && (f.types = h.types), q.T = f;
    }
  }
  function Uy() {
  }
  function nc(e, t, l, n) {
    if (e.tag !== 5) throw Error(o(476));
    var a = Bf(e).queue;
    jf(
      e,
      a,
      t,
      I,
      l === null ? Uy : function() {
        return Hf(e), l(n);
      }
    );
  }
  function Bf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nl,
        lastRenderedState: I
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
        lastRenderedReducer: nl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Hf(e) {
    var t = Bf(e);
    t.next === null && (t = e.alternate.memoizedState), wa(
      e,
      t.next.queue,
      {},
      Tt()
    );
  }
  function ac() {
    return Pe(Va);
  }
  function Lf() {
    return Ge().memoizedState;
  }
  function qf() {
    return Ge().memoizedState;
  }
  function jy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = Tl(l);
          var n = Al(t, e, l);
          n !== null && (dt(n, t, l), Ea(n, t, l)), t = { cache: Dr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function By(e, t, l) {
    var n = Tt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e) ? Xf(t, l) : (l = xr(e, t, l, n), l !== null && (dt(l, e, n), Gf(l, t, n)));
  }
  function Yf(e, t, l) {
    var n = Tt();
    wa(e, t, l, n);
  }
  function wa(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zu(e)) Xf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, h = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = h, vt(h, f))
            return Au(e, t, a, 0), Oe === null && Tu(), !1;
        } catch {
        }
      if (l = xr(e, t, a, n), l !== null)
        return dt(l, e, n), Gf(l, t, n), !0;
    }
    return !1;
  }
  function uc(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Hc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e)) {
      if (t) throw Error(o(479));
    } else
      t = xr(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Zu(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Xf(e, t) {
    jn = Lu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Gf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Zs(e, l);
    }
  }
  var Ca = {
    readContext: Pe,
    use: Xu,
    useCallback: qe,
    useContext: qe,
    useEffect: qe,
    useImperativeHandle: qe,
    useLayoutEffect: qe,
    useInsertionEffect: qe,
    useMemo: qe,
    useReducer: qe,
    useRef: qe,
    useState: qe,
    useDebugValue: qe,
    useDeferredValue: qe,
    useTransition: qe,
    useSyncExternalStore: qe,
    useId: qe,
    useHostTransitionStatus: qe,
    useFormState: qe,
    useActionState: qe,
    useOptimistic: qe,
    useMemoCache: qe,
    useCacheRefresh: qe
  };
  Ca.useEffectEvent = qe;
  var Vf = {
    readContext: Pe,
    use: Xu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Pe,
    useEffect: wf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Vu(
        4194308,
        4,
        zf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Vu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Vu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ut();
      t = t === void 0 ? null : t;
      var n = e();
      if (ln) {
        gl(!0);
        try {
          e();
        } finally {
          gl(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ut();
      if (l !== void 0) {
        var a = l(t);
        if (ln) {
          gl(!0);
          try {
            l(t);
          } finally {
            gl(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = By.bind(
        null,
        ie,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ir(e);
      var t = e.queue, l = Yf.bind(null, ie, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return lc(l, e, t);
    },
    useTransition: function() {
      var e = Ir(!1);
      return e = jf.bind(
        null,
        ie,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ie, a = ut();
      if (ge) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Oe === null)
          throw Error(o(349));
        (he & 127) !== 0 || of(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, wf(df.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Hn(
        9,
        { destroy: void 0 },
        ff.bind(
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
      var e = ut(), t = Oe.identifierPrefix;
      if (ge) {
        var l = Vt, n = Gt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = qu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Oy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: Ef,
    useActionState: Ef,
    useOptimistic: function(e) {
      var t = ut();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = uc.bind(
        null,
        ie,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: $r,
    useCacheRefresh: function() {
      return ut().memoizedState = jy.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ee & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ic = {
    readContext: Pe,
    use: Xu,
    useCallback: Mf,
    useContext: Pe,
    useEffect: ec,
    useImperativeHandle: Nf,
    useInsertionEffect: _f,
    useLayoutEffect: Of,
    useMemo: Df,
    useReducer: Gu,
    useRef: Af,
    useState: function() {
      return Gu(nl);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Uf(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gu(nl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: sf,
    useId: Lf,
    useHostTransitionStatus: ac,
    useFormState: xf,
    useActionState: xf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return yf(l, we, e, t);
    },
    useMemoCache: $r,
    useCacheRefresh: qf
  };
  ic.useEffectEvent = Cf;
  var Qf = {
    readContext: Pe,
    use: Xu,
    useCallback: Mf,
    useContext: Pe,
    useEffect: ec,
    useImperativeHandle: Nf,
    useInsertionEffect: _f,
    useLayoutEffect: Of,
    useMemo: Df,
    useReducer: Fr,
    useRef: Af,
    useState: function() {
      return Fr(nl);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return we === null ? lc(l, e, t) : Uf(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fr(nl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: sf,
    useId: Lf,
    useHostTransitionStatus: ac,
    useFormState: Tf,
    useActionState: Tf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return we !== null ? yf(l, we, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: $r,
    useCacheRefresh: qf
  };
  Qf.useEffectEvent = Cf;
  function rc(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : N({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var cc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = Tl(n);
      a.payload = t, l != null && (a.callback = l), t = Al(e, a, n), t !== null && (dt(t, e, n), Ea(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = Tl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Al(e, a, n), t !== null && (dt(t, e, n), Ea(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Tt(), n = Tl(l);
      n.tag = 2, t != null && (n.callback = t), t = Al(e, n, l), t !== null && (dt(t, e, l), Ea(t, e, l));
    }
  };
  function Zf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ma(l, n) || !ma(a, i) : !0;
  }
  function kf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && cc.enqueueReplaceState(t, t.state, null);
  }
  function nn(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = N({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function Kf(e) {
    Ru(e);
  }
  function Jf(e) {
    console.error(e);
  }
  function $f(e) {
    Ru(e);
  }
  function ku(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Wf(e, t, l) {
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
  function sc(e, t, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      ku(e, t);
    }, l;
  }
  function Ff(e) {
    return e = Tl(e), e.tag = 3, e;
  }
  function If(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Wf(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Wf(t, l, n), typeof a != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Hy(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && On(
        t,
        l,
        a,
        !0
      ), l = St.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Mt === null ? ai() : l.alternate === null && Ye === 0 && (Ye = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Du ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Uc(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Du ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Uc(e, n, a)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Uc(e, n, a), ai(), !1;
    }
    if (ge)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== _r && (e = Error(o(422), { cause: n }), ga(_t(e, l)))) : (n !== _r && (t = Error(o(423), {
        cause: n
      }), ga(
        _t(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = sc(
        e.stateNode,
        n,
        a
      ), qr(e, a), Ye !== 4 && (Ye = 2)), !1;
    var i = Error(o(520), { cause: n });
    if (i = _t(i, l), ja === null ? ja = [i] : ja.push(i), Ye !== 4 && (Ye = 2), t === null) return !0;
    n = _t(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = sc(l.stateNode, n, e), qr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Nl === null || !Nl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Ff(a), If(
              a,
              e,
              l,
              n
            ), qr(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var oc = Error(o(461)), Ze = !1;
  function et(e, t, l, n) {
    t.child = e === null ? tf(t, null, l, n) : tn(
      t,
      e.child,
      l,
      n
    );
  }
  function Pf(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var h in n)
        h !== "ref" && (f[h] = n[h]);
    } else f = n;
    return Fl(t), n = Zr(
      e,
      t,
      l,
      f,
      i,
      a
    ), h = kr(), e !== null && !Ze ? (Kr(e, t, a), al(e, t, a)) : (ge && h && wr(t), t.flags |= 1, et(e, t, n, a), t.child);
  }
  function ed(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !Rr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, td(
        e,
        t,
        i,
        n,
        a
      )) : (e = Cu(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !vc(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ma, l(f, n) && e.ref === t.ref)
        return al(e, t, a);
    }
    return t.flags |= 1, e = It(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function td(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ma(i, n) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = n = i, vc(e, a))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else
          return t.lanes = e.lanes, al(e, t, a);
    }
    return fc(
      e,
      t,
      l,
      n,
      a
    );
  }
  function ld(e, t, l, n) {
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
        return nd(
          e,
          t,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Nu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? af(t, i) : Xr(), uf(t);
      else
        return n = t.lanes = 536870912, nd(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Nu(t, i.cachePool), af(t, i), Cl(), t.memoizedState = null) : (e !== null && Nu(t, null), Xr(), Cl());
    return et(e, t, a, l), t.child;
  }
  function _a(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function nd(e, t, l, n, a) {
    var i = jr();
    return i = i === null ? null : { parent: Ve._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Nu(t, null), Xr(), uf(t), e !== null && On(e, t, n, !0), t.childLanes = a, null;
  }
  function Ku(e, t) {
    return t = $u(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ad(e, t, l) {
    return tn(t, e.child, null, l), e = Ku(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function Ly(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = Ku(t, n), t.lanes = 536870912, _a(null, e);
        if (Vr(t), (e = Ne) ? (e = gm(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: bl !== null ? { id: Gt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Yo(e), l.return = t, t.child = l, Ie = t, Ne = null)) : e = null, e === null) throw El(t);
        return t.lanes = 536870912, null;
      }
      return Ku(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Vr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = ad(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Ze || On(e, t, l, !1), a = (l & e.childLanes) !== 0, Ze || a) {
        if (n = Oe, n !== null && (f = ks(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Kl(e, f), dt(n, e, f), oc;
        ai(), t = ad(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Ne = Dt(f.nextSibling), Ie = t, ge = !0, Sl = null, Nt = !1, e !== null && Vo(t, e), t = Ku(t, n), t.flags |= 4096;
      return t;
    }
    return e = It(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ju(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function fc(e, t, l, n, a) {
    return Fl(t), l = Zr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = kr(), e !== null && !Ze ? (Kr(e, t, a), al(e, t, a)) : (ge && n && wr(t), t.flags |= 1, et(e, t, l, a), t.child);
  }
  function ud(e, t, l, n, a, i) {
    return Fl(t), t.updateQueue = null, l = cf(
      t,
      n,
      l,
      a
    ), rf(e), n = kr(), e !== null && !Ze ? (Kr(e, t, i), al(e, t, i)) : (ge && n && wr(t), t.flags |= 1, et(e, t, l, i), t.child);
  }
  function id(e, t, l, n, a) {
    if (Fl(t), t.stateNode === null) {
      var i = An, f = l.contextType;
      typeof f == "object" && f !== null && (i = Pe(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = cc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Hr(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? Pe(f) : An, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (rc(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && cc.enqueueReplaceState(i, i.state, null), Ra(t, n, i, a), xa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var h = t.memoizedProps, v = nn(l, h);
      i.props = v;
      var C = i.context, j = l.contextType;
      f = An, typeof j == "object" && j !== null && (f = Pe(j));
      var L = l.getDerivedStateFromProps;
      j = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, j || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || C !== f) && kf(
        t,
        i,
        n,
        f
      ), Rl = !1;
      var O = t.memoizedState;
      i.state = O, Ra(t, n, i, a), xa(), C = t.memoizedState, h || O !== C || Rl ? (typeof L == "function" && (rc(
        t,
        l,
        L,
        n
      ), C = t.memoizedState), (v = Rl || Zf(
        t,
        l,
        v,
        n,
        O,
        C,
        f
      )) ? (j || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Lr(e, t), f = t.memoizedProps, j = nn(l, f), i.props = j, L = t.pendingProps, O = i.context, C = l.contextType, v = An, typeof C == "object" && C !== null && (v = Pe(C)), h = l.getDerivedStateFromProps, (C = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== L || O !== v) && kf(
        t,
        i,
        n,
        v
      ), Rl = !1, O = t.memoizedState, i.state = O, Ra(t, n, i, a), xa();
      var M = t.memoizedState;
      f !== L || O !== M || Rl || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof h == "function" && (rc(
        t,
        l,
        h,
        n
      ), M = t.memoizedState), (j = Rl || Zf(
        t,
        l,
        j,
        n,
        O,
        M,
        v
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, M, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        M,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = v, n = j) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Ju(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = tn(
      t,
      e.child,
      null,
      a
    ), t.child = tn(
      t,
      null,
      l,
      a
    )) : et(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = al(
      e,
      t,
      a
    ), e;
  }
  function rd(e, t, l, n) {
    return $l(), t.flags |= 256, et(e, t, l, n), t.child;
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(e) {
    return { baseLanes: e, cachePool: $o() };
  }
  function hc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Rt), e;
  }
  function cd(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? wl(t) : Cl(), (e = Ne) ? (e = gm(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: bl !== null ? { id: Gt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Yo(e), l.return = t, t.child = l, Ie = t, Ne = null)) : e = null, e === null) throw El(t);
        return Wc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = n.children;
      return n = n.fallback, a ? (Cl(), a = t.mode, h = $u(
        { mode: "hidden", children: h },
        a
      ), n = Jl(
        n,
        a,
        l,
        null
      ), h.return = t, n.return = t, h.sibling = n, t.child = h, n = t.child, n.memoizedState = mc(l), n.childLanes = hc(
        e,
        f,
        l
      ), t.memoizedState = dc, _a(null, n)) : (wl(t), yc(t, h));
    }
    var v = e.memoizedState;
    if (v !== null && (h = v.dehydrated, h !== null)) {
      if (i)
        t.flags & 256 ? (wl(t), t.flags &= -257, t = gc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Cl(), t.child = e.child, t.flags |= 128, t = null) : (Cl(), h = n.fallback, a = t.mode, n = $u(
          { mode: "visible", children: n.children },
          a
        ), h = Jl(
          h,
          a,
          l,
          null
        ), h.flags |= 2, n.return = t, h.return = t, n.sibling = h, t.child = n, tn(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = mc(l), n.childLanes = hc(
          e,
          f,
          l
        ), t.memoizedState = dc, t = _a(null, n));
      else if (wl(t), Wc(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(o(419)), n.stack = "", n.digest = f, ga({ value: n, source: null, stack: null }), t = gc(
          e,
          t,
          l
        );
      } else if (Ze || On(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
        if (f = Oe, f !== null && (n = ks(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Kl(e, n), dt(f, e, n), oc;
        $c(h) || ai(), t = gc(
          e,
          t,
          l
        );
      } else
        $c(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Ne = Dt(
          h.nextSibling
        ), Ie = t, ge = !0, Sl = null, Nt = !1, e !== null && Vo(t, e), t = yc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Cl(), h = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = It(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? h = It(
      C,
      h
    ) : (h = Jl(
      h,
      a,
      l,
      null
    ), h.flags |= 2), h.return = t, n.return = t, n.sibling = h, t.child = n, _a(null, n), n = t.child, h = e.child.memoizedState, h === null ? h = mc(l) : (a = h.cachePool, a !== null ? (v = Ve._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = $o(), h = {
      baseLanes: h.baseLanes | l,
      cachePool: a
    }), n.memoizedState = h, n.childLanes = hc(
      e,
      f,
      l
    ), t.memoizedState = dc, _a(e.child, n)) : (wl(t), l = e.child, e = l.sibling, l = It(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function yc(e, t) {
    return t = $u(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function $u(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function gc(e, t, l) {
    return tn(t, e.child, null, l), e = yc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function sd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Nr(e.return, t, l);
  }
  function pc(e, t, l, n, a, i) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: a,
      treeForkCount: i
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = l, f.tailMode = a, f.treeForkCount = i);
  }
  function od(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = Xe.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Z(Xe, f), et(e, t, n, l), n = ge ? ya : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && sd(e, l, t);
        else if (e.tag === 19)
          sd(e, l, t);
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
          e = l.alternate, e !== null && Hu(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), pc(
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
          if (e = a.alternate, e !== null && Hu(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        pc(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        pc(
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
  function al(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), zl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (On(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, l = It(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = It(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function vc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function qy(e, t, l) {
    switch (t.tag) {
      case 3:
        ze(t, t.stateNode.containerInfo), xl(t, Ve, e.memoizedState.cache), $l();
        break;
      case 27:
      case 5:
        Bt(t);
        break;
      case 4:
        ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        xl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Vr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (wl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? cd(e, t, l) : (wl(t), e = al(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        wl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (On(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return od(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Z(Xe, Xe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, ld(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        xl(t, Ve, e.memoizedState.cache);
    }
    return al(e, t, l);
  }
  function fd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!vc(e, l) && (t.flags & 128) === 0)
          return Ze = !1, qy(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, ge && (t.flags & 1048576) !== 0 && Go(t, ya, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Pl(t.elementType), t.type = e, typeof e == "function")
            Rr(e) ? (n = nn(e, n), t.tag = 1, t = id(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = fc(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === W) {
                t.tag = 11, t = Pf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === F) {
                t.tag = 14, t = ed(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = Je(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return fc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = nn(
          n,
          t.pendingProps
        ), id(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (ze(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Lr(e, t), Ra(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, xl(t, Ve, n), n !== i.cache && Mr(
            t,
            [Ve],
            l,
            !0
          ), xa(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = rd(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = _t(
                Error(o(424)),
                t
              ), ga(a), t = rd(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ne = Dt(e.firstChild), Ie = t, ge = !0, Sl = null, Nt = !0, l = tf(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if ($l(), n === a) {
              t = al(
                e,
                t,
                l
              );
              break e;
            }
            et(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ju(e, t), e === null ? (l = xm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = fi(
          fe.current
        ).createElement(l), n[Fe] = t, n[it] = e, tt(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = xm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Bt(t), e === null && ge && (n = t.stateNode = bm(
          t.type,
          t.pendingProps,
          fe.current
        ), Ie = t, Nt = !0, a = Ne, jl(t.type) ? (Fc = a, Ne = Dt(n.firstChild)) : Ne = a), et(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ju(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = Ne) && (n = y1(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Ie = t, Ne = Dt(n.firstChild), Nt = !1, a = !0) : a = !1), a || El(t)), Bt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, kc(a, i) ? n = null : f !== null && kc(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Zr(
          e,
          t,
          zy,
          null,
          null,
          l
        ), Va._currentValue = a), Ju(e, t), et(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = Ne) && (l = g1(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Ie = t, Ne = null, e = !0) : e = !1), e || El(t)), null;
      case 13:
        return cd(e, t, l);
      case 4:
        return ze(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = tn(
          t,
          null,
          n,
          l
        ) : et(e, t, n, l), t.child;
      case 11:
        return Pf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return et(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return et(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return et(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, xl(t, t.type, n.value), et(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Fl(t), a = Pe(a), n = n(a), t.flags |= 1, et(e, t, n, l), t.child;
      case 14:
        return ed(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return td(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return od(e, t, l);
      case 31:
        return Ly(e, t, l);
      case 22:
        return ld(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Fl(t), n = Pe(Ve), e === null ? (a = jr(), a === null && (a = Oe, i = Dr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Hr(t), xl(t, Ve, a)) : ((e.lanes & l) !== 0 && (Lr(e, t), Ra(t, null, null, l), xa()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), xl(t, Ve, n)) : (n = i.cache, xl(t, Ve, n), n !== a.cache && Mr(
          t,
          [Ve],
          l,
          !0
        ))), et(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function ul(e) {
    e.flags |= 4;
  }
  function bc(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Ld()) e.flags |= 8192;
        else
          throw en = Du, Br;
    } else e.flags &= -16777217;
  }
  function dd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Cm(t))
      if (Ld()) e.flags |= 8192;
      else
        throw en = Du, Br;
  }
  function Wu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Vs() : 536870912, e.lanes |= t, Xn |= t);
  }
  function Oa(e, t) {
    if (!ge)
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
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function Yy(e, t, l) {
    var n = t.pendingProps;
    switch (Cr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Me(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), tl(Ve), Be(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (_n(t) ? ul(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Or())), Me(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (ul(t), i !== null ? (Me(t), dd(t, i)) : (Me(t), bc(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (ul(t), Me(t), dd(t, i)) : (Me(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ul(t), Me(t), bc(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (Kt(t), l = fe.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Me(t), null;
          }
          e = J.current, _n(t) ? Qo(t) : (e = bm(a, n, l), t.stateNode = e, ul(t));
        }
        return Me(t), null;
      case 5:
        if (Kt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Me(t), null;
          }
          if (i = J.current, _n(t))
            Qo(t);
          else {
            var f = fi(
              fe.current
            );
            switch (i) {
              case 1:
                i = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                i = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    i = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    i = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    i = f.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof n.is == "string" ? f.createElement("select", {
                      is: n.is
                    }) : f.createElement("select"), n.multiple ? i.multiple = !0 : n.size && (i.size = n.size);
                    break;
                  default:
                    i = typeof n.is == "string" ? f.createElement(a, { is: n.is }) : f.createElement(a);
                }
            }
            i[Fe] = t, i[it] = n;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                i.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break e;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break e;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = i;
            e: switch (tt(i, a, n), a) {
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
            n && ul(t);
          }
        }
        return Me(t), bc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = fe.current, _n(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Ie, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Fe] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || cm(e.nodeValue, l)), e || El(t, !0);
          } else
            e = fi(e).createTextNode(
              n
            ), e[Fe] = t, t.stateNode = e;
        }
        return Me(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = _n(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Fe] = t;
            } else
              $l(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), e = !1;
          } else
            l = Or(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Me(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = _n(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Fe] = t;
            } else
              $l(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), a = !1;
          } else
            a = Or(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return Et(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Wu(t, t.updateQueue), Me(t), null);
      case 4:
        return Be(), e === null && Xc(t.stateNode.containerInfo), Me(t), null;
      case 10:
        return tl(t.type), Me(t), null;
      case 19:
        if (H(Xe), n = t.memoizedState, n === null) return Me(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Oa(n, !1);
          else {
            if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Hu(e), i !== null) {
                  for (t.flags |= 128, Oa(n, !1), e = i.updateQueue, t.updateQueue = e, Wu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    qo(l, e), l = l.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && Pt(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > ti && (t.flags |= 128, a = !0, Oa(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Hu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Wu(t, e), Oa(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ge)
                return Me(t), null;
            } else
              2 * yt() - n.renderingStartTime > ti && l !== 536870912 && (t.flags |= 128, a = !0, Oa(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Xe.current, Z(
          Xe,
          a ? l & 1 | 2 : l & 1
        ), ge && Pt(t, n.treeForkCount), e) : (Me(t), null);
      case 22:
      case 23:
        return Et(t), Gr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && Wu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && H(Il), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), tl(Ve), Me(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Xy(e, t) {
    switch (Cr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tl(Ve), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Kt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(o(340));
          $l();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          $l();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Xe), null;
      case 4:
        return Be(), null;
      case 10:
        return tl(t.type), null;
      case 22:
      case 23:
        return Et(t), Gr(), e !== null && H(Il), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return tl(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function md(e, t) {
    switch (Cr(t), t.tag) {
      case 3:
        tl(Ve), Be();
        break;
      case 26:
      case 27:
      case 5:
        Kt(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        H(Xe);
        break;
      case 10:
        tl(t.type);
        break;
      case 22:
      case 23:
        Et(t), Gr(), e !== null && H(Il);
        break;
      case 24:
        tl(Ve);
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
            var i = l.create, f = l.inst;
            n = i(), f.destroy = n;
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (h) {
      Te(t, t.return, h);
    }
  }
  function _l(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, h = f.destroy;
            if (h !== void 0) {
              f.destroy = void 0, a = t;
              var v = l, C = h;
              try {
                C();
              } catch (j) {
                Te(
                  a,
                  v,
                  j
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (j) {
      Te(t, t.return, j);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        nf(t, l);
      } catch (n) {
        Te(e, e.return, n);
      }
    }
  }
  function yd(e, t, l) {
    l.props = nn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Te(e, t, n);
    }
  }
  function Na(e, t) {
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
      Te(e, t, a);
    }
  }
  function Qt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Te(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Te(e, t, a);
        }
      else l.current = null;
  }
  function gd(e) {
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
      Te(e, e.return, a);
    }
  }
  function Sc(e, t, l) {
    try {
      var n = e.stateNode;
      s1(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function pd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jl(e.type) || e.tag === 4;
  }
  function Ec(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || pd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xc(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Wt));
    else if (n !== 4 && (n === 27 && jl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (xc(e, t, l), e = e.sibling; e !== null; )
        xc(e, t, l), e = e.sibling;
  }
  function Fu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && jl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Fu(e, t, l), e = e.sibling; e !== null; )
        Fu(e, t, l), e = e.sibling;
  }
  function vd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      tt(t, n, l), t[Fe] = e, t[it] = l;
    } catch (i) {
      Te(e, e.return, i);
    }
  }
  var il = !1, ke = !1, Rc = !1, bd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Gy(e, t) {
    if (e = e.containerInfo, Qc = vi, e = zo(e), gr(e)) {
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
            var f = 0, h = -1, v = -1, C = 0, j = 0, L = e, O = null;
            t: for (; ; ) {
              for (var M; L !== l || a !== 0 && L.nodeType !== 3 || (h = f + a), L !== i || n !== 0 && L.nodeType !== 3 || (v = f + n), L.nodeType === 3 && (f += L.nodeValue.length), (M = L.firstChild) !== null; )
                O = L, L = M;
              for (; ; ) {
                if (L === e) break t;
                if (O === l && ++C === a && (h = f), O === i && ++j === n && (v = f), (M = L.nextSibling) !== null) break;
                L = O, O = L.parentNode;
              }
              L = M;
            }
            l = h === -1 || v === -1 ? null : { start: h, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zc = { focusedElem: e, selectionRange: l }, vi = !1, We = t; We !== null; )
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, We = e;
      else
        for (; We !== null; ) {
          switch (t = We, i = t.alternate, e = t.flags, t.tag) {
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
                  var k = nn(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    k,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  Te(
                    l,
                    l.return,
                    le
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Jc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(e);
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
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, We = e;
            break;
          }
          We = t.return;
        }
  }
  function Sd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        cl(e, l), n & 4 && za(5, l);
        break;
      case 1:
        if (cl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Te(l, l.return, f);
            }
          else {
            var a = nn(
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
            } catch (f) {
              Te(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && hd(l), n & 512 && Na(l, l.return);
        break;
      case 3:
        if (cl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
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
            nf(e, t);
          } catch (f) {
            Te(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && vd(l);
      case 26:
      case 5:
        cl(e, l), t === null && n & 4 && gd(l), n & 512 && Na(l, l.return);
        break;
      case 12:
        cl(e, l);
        break;
      case 31:
        cl(e, l), n & 4 && Rd(e, l);
        break;
      case 13:
        cl(e, l), n & 4 && Td(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Fy.bind(
          null,
          l
        ), p1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || il, !n) {
          t = t !== null && t.memoizedState !== null || ke, a = il;
          var i = ke;
          il = n, (ke = t) && !i ? sl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : cl(e, l), il = a, ke = i;
        }
        break;
      case 30:
        break;
      default:
        cl(e, l);
    }
  }
  function Ed(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, ct = !1;
  function rl(e, t, l) {
    for (l = l.child; l !== null; )
      xd(e, t, l), l = l.sibling;
  }
  function xd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(ta, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        ke || Qt(l, t), rl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        ke || Qt(l, t);
        var n = Ue, a = ct;
        jl(l.type) && (Ue = l.stateNode, ct = !1), rl(
          e,
          t,
          l
        ), Ya(l.stateNode), Ue = n, ct = a;
        break;
      case 5:
        ke || Qt(l, t);
      case 6:
        if (n = Ue, a = ct, Ue = null, rl(
          e,
          t,
          l
        ), Ue = n, ct = a, Ue !== null)
          if (ct)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
            } catch (i) {
              Te(
                l,
                t,
                i
              );
            }
          else
            try {
              Ue.removeChild(l.stateNode);
            } catch (i) {
              Te(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Ue !== null && (ct ? (e = Ue, hm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), $n(e)) : hm(Ue, l.stateNode));
        break;
      case 4:
        n = Ue, a = ct, Ue = l.stateNode.containerInfo, ct = !0, rl(
          e,
          t,
          l
        ), Ue = n, ct = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _l(2, l, t), ke || _l(4, l, t), rl(
          e,
          t,
          l
        );
        break;
      case 1:
        ke || (Qt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && yd(
          l,
          t,
          n
        )), rl(
          e,
          t,
          l
        );
        break;
      case 21:
        rl(
          e,
          t,
          l
        );
        break;
      case 22:
        ke = (n = ke) || l.memoizedState !== null, rl(
          e,
          t,
          l
        ), ke = n;
        break;
      default:
        rl(
          e,
          t,
          l
        );
    }
  }
  function Rd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        $n(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function Td(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        $n(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function Vy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new bd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new bd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Iu(e, t) {
    var l = Vy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Iy.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (jl(h.type)) {
                Ue = h.stateNode, ct = !1;
                break e;
              }
              break;
            case 5:
              Ue = h.stateNode, ct = !1;
              break e;
            case 3:
            case 4:
              Ue = h.stateNode.containerInfo, ct = !0;
              break e;
          }
          h = h.return;
        }
        if (Ue === null) throw Error(o(160));
        xd(i, f, a), Ue = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ad(t, e), t = t.sibling;
  }
  var Lt = null;
  function Ad(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, e), ot(e), n & 4 && (_l(3, e, e.return), za(3, e), _l(5, e, e.return));
        break;
      case 1:
        st(t, e), ot(e), n & 512 && (ke || l === null || Qt(l, l.return)), n & 64 && il && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Lt;
        if (st(t, e), ot(e), n & 512 && (ke || l === null || Qt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[aa] || i[Fe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), tt(i, n, l), i[Fe] = e, $e(i), n = i;
                      break e;
                    case "link":
                      var f = Am(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (i = f[h], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), tt(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = Am(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (h = 0; h < f.length; h++)
                          if (i = f[h], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), tt(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, n));
                  }
                  i[Fe] = e, $e(i), n = i;
                }
                e.stateNode = n;
              } else
                wm(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Tm(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? wm(
              a,
              e.type,
              e.stateNode
            ) : Tm(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Sc(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        st(t, e), ot(e), n & 512 && (ke || l === null || Qt(l, l.return)), l !== null && n & 4 && Sc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ot(e), n & 512 && (ke || l === null || Qt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            vn(a, "");
          } catch (k) {
            Te(e, e.return, k);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, Sc(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Rc = !0);
        break;
      case 6:
        if (st(t, e), ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (k) {
            Te(e, e.return, k);
          }
        }
        break;
      case 3:
        if (hi = null, a = Lt, Lt = di(t.containerInfo), st(t, e), Lt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            $n(t.containerInfo);
          } catch (k) {
            Te(e, e.return, k);
          }
        Rc && (Rc = !1, wd(e));
        break;
      case 4:
        n = Lt, Lt = di(
          e.stateNode.containerInfo
        ), st(t, e), ot(e), Lt = n;
        break;
      case 12:
        st(t, e), ot(e);
        break;
      case 31:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Iu(e, n)));
        break;
      case 13:
        st(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ei = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Iu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = il, j = ke;
        if (il = C || a, ke = j || v, st(t, e), ke = j, il = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || il || ke || an(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    h = v.stateNode;
                    var L = v.memoizedProps.style, O = L != null && L.hasOwnProperty("display") ? L.display : null;
                    h.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (k) {
                  Te(v, v.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (k) {
                  Te(v, v.return, k);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var M = v.stateNode;
                  a ? ym(M, !0) : ym(v.stateNode, !1);
                } catch (k) {
                  Te(v, v.return, k);
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
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Iu(e, l))));
        break;
      case 19:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Iu(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        st(t, e), ot(e);
    }
  }
  function ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (pd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Ec(e);
            Fu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (vn(f, ""), l.flags &= -33);
            var h = Ec(e);
            Fu(e, h, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, C = Ec(e);
            xc(
              e,
              C,
              v
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Te(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function wd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        wd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function cl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Sd(e, t.alternate, t), t = t.sibling;
  }
  function an(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          _l(4, t, t.return), an(t);
          break;
        case 1:
          Qt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && yd(
            t,
            t.return,
            l
          ), an(t);
          break;
        case 27:
          Ya(t.stateNode);
        case 26:
        case 5:
          Qt(t, t.return), an(t);
          break;
        case 22:
          t.memoizedState === null && an(t);
          break;
        case 30:
          an(t);
          break;
        default:
          an(t);
      }
      e = e.sibling;
    }
  }
  function sl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          sl(
            a,
            i,
            l
          ), za(4, i);
          break;
        case 1:
          if (sl(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (C) {
              Te(n, n.return, C);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var h = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  lf(v[a], h);
            } catch (C) {
              Te(n, n.return, C);
            }
          }
          l && f & 64 && hd(i), Na(i, i.return);
          break;
        case 27:
          vd(i);
        case 26:
        case 5:
          sl(
            a,
            i,
            l
          ), l && n === null && f & 4 && gd(i), Na(i, i.return);
          break;
        case 12:
          sl(
            a,
            i,
            l
          );
          break;
        case 31:
          sl(
            a,
            i,
            l
          ), l && f & 4 && Rd(a, i);
          break;
        case 13:
          sl(
            a,
            i,
            l
          ), l && f & 4 && Td(a, i);
          break;
        case 22:
          i.memoizedState === null && sl(
            a,
            i,
            l
          ), Na(i, i.return);
          break;
        case 30:
          break;
        default:
          sl(
            a,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Tc(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && pa(l));
  }
  function Ac(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function qt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Cd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function Cd(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(
          e,
          t,
          l,
          n
        ), a & 2048 && za(9, t);
        break;
      case 1:
        qt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        qt(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e)));
        break;
      case 12:
        if (a & 2048) {
          qt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, f = i.id, h = i.onPostCommit;
            typeof h == "function" && h(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (v) {
            Te(t, t.return, v);
          }
        } else
          qt(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        qt(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        qt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? qt(
          e,
          t,
          l,
          n
        ) : Ma(e, t) : i._visibility & 2 ? qt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, Ln(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Tc(f, t);
        break;
      case 24:
        qt(
          e,
          t,
          l,
          n
        ), a & 2048 && Ac(t.alternate, t);
        break;
      default:
        qt(
          e,
          t,
          l,
          n
        );
    }
  }
  function Ln(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, h = l, v = n, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ln(
            i,
            f,
            h,
            v,
            a
          ), za(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? Ln(
            i,
            f,
            h,
            v,
            a
          ) : Ma(
            i,
            f
          ) : (j._visibility |= 2, Ln(
            i,
            f,
            h,
            v,
            a
          )), a && C & 2048 && Tc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ln(
            i,
            f,
            h,
            v,
            a
          ), a && C & 2048 && Ac(f.alternate, f);
          break;
        default:
          Ln(
            i,
            f,
            h,
            v,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ma(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Ma(l, n), a & 2048 && Tc(
              n.alternate,
              n
            );
            break;
          case 24:
            Ma(l, n), a & 2048 && Ac(n.alternate, n);
            break;
          default:
            Ma(l, n);
        }
        t = t.sibling;
      }
  }
  var Da = 8192;
  function qn(e, t, l) {
    if (e.subtreeFlags & Da)
      for (e = e.child; e !== null; )
        _d(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function _d(e, t, l) {
    switch (e.tag) {
      case 26:
        qn(
          e,
          t,
          l
        ), e.flags & Da && e.memoizedState !== null && O1(
          l,
          Lt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        qn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Lt;
        Lt = di(e.stateNode.containerInfo), qn(
          e,
          t,
          l
        ), Lt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Da, Da = 16777216, qn(
          e,
          t,
          l
        ), Da = n) : qn(
          e,
          t,
          l
        ));
        break;
      default:
        qn(
          e,
          t,
          l
        );
    }
  }
  function Od(e) {
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
          We = n, Nd(
            n,
            e
          );
        }
      Od(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        zd(e), e = e.sibling;
  }
  function zd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ua(e), e.flags & 2048 && _l(9, e, e.return);
        break;
      case 3:
        Ua(e);
        break;
      case 12:
        Ua(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Pu(e)) : Ua(e);
        break;
      default:
        Ua(e);
    }
  }
  function Pu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          We = n, Nd(
            n,
            e
          );
        }
      Od(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, t, t.return), Pu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Pu(t));
          break;
        default:
          Pu(t);
      }
      e = e.sibling;
    }
  }
  function Nd(e, t) {
    for (; We !== null; ) {
      var l = We;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _l(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          pa(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, We = n;
      else
        e: for (l = e; We !== null; ) {
          n = We;
          var a = n.sibling, i = n.return;
          if (Ed(n), n === l) {
            We = null;
            break e;
          }
          if (a !== null) {
            a.return = i, We = a;
            break e;
          }
          We = i;
        }
    }
  }
  var Qy = {
    getCacheForType: function(e) {
      var t = Pe(Ve), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Pe(Ve).controller.signal;
    }
  }, Zy = typeof WeakMap == "function" ? WeakMap : Map, Ee = 0, Oe = null, de = null, he = 0, Re = 0, xt = null, Ol = !1, Yn = !1, wc = !1, ol = 0, Ye = 0, zl = 0, un = 0, Cc = 0, Rt = 0, Xn = 0, ja = null, ft = null, _c = !1, ei = 0, Md = 0, ti = 1 / 0, li = null, Nl = null, Ke = 0, Ml = null, Gn = null, fl = 0, Oc = 0, zc = null, Dd = null, Ba = 0, Nc = null;
  function Tt() {
    return (Ee & 2) !== 0 && he !== 0 ? he & -he : q.T !== null ? Hc() : Ks();
  }
  function Ud() {
    if (Rt === 0)
      if ((he & 536870912) === 0 || ge) {
        var e = ou;
        ou <<= 1, (ou & 3932160) === 0 && (ou = 262144), Rt = e;
      } else Rt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), Rt;
  }
  function dt(e, t, l) {
    (e === Oe && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (Vn(e, 0), Dl(
      e,
      he,
      Rt,
      !1
    )), na(e, l), ((Ee & 2) === 0 || e !== Oe) && (e === Oe && ((Ee & 2) === 0 && (un |= l), Ye === 4 && Dl(
      e,
      he,
      Rt,
      !1
    )), Zt(e));
  }
  function jd(e, t, l) {
    if ((Ee & 6) !== 0) throw Error(o(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || la(e, t), a = n ? Jy(e, t) : Dc(e, t, !0), i = n;
    do {
      if (a === 0) {
        Yn && !n && Dl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !ky(l)) {
          a = Dc(e, t, !1), i = !1;
          continue;
        }
        if (a === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var h = e;
              a = ja;
              var v = h.current.memoizedState.isDehydrated;
              if (v && (Vn(h, f).flags |= 256), f = Dc(
                h,
                f,
                !1
              ), f !== 2) {
                if (wc && !v) {
                  h.errorRecoveryDisabledLanes |= i, un |= i, a = 4;
                  break e;
                }
                i = ft, ft = a, i !== null && (ft === null ? ft = i : ft.push.apply(
                  ft,
                  i
                ));
              }
              a = f;
            }
            if (i = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          Vn(e, 0), Dl(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = a, i) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Dl(
                n,
                t,
                Rt,
                !Ol
              );
              break e;
            case 2:
              ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (a = ei + 300 - yt(), 10 < a)) {
            if (Dl(
              n,
              t,
              Rt,
              !Ol
            ), du(n, 0, !0) !== 0) break e;
            fl = t, n.timeoutHandle = dm(
              Bd.bind(
                null,
                n,
                l,
                ft,
                li,
                _c,
                t,
                Rt,
                un,
                Xn,
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
          Bd(
            n,
            l,
            ft,
            li,
            _c,
            t,
            Rt,
            un,
            Xn,
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
    Zt(e);
  }
  function Bd(e, t, l, n, a, i, f, h, v, C, j, L, O, M) {
    if (e.timeoutHandle = -1, L = t.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Wt
      }, _d(
        t,
        i,
        L
      );
      var k = (i & 62914560) === i ? ei - yt() : (i & 4194048) === i ? Md - yt() : 0;
      if (k = z1(
        L,
        k
      ), k !== null) {
        fl = i, e.cancelPendingCommit = k(
          Qd.bind(
            null,
            e,
            t,
            i,
            l,
            n,
            a,
            f,
            h,
            v,
            j,
            L,
            null,
            O,
            M
          )
        ), Dl(e, i, f, !C);
        return;
      }
    }
    Qd(
      e,
      t,
      i,
      l,
      n,
      a,
      f,
      h,
      v
    );
  }
  function ky(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var a = l[n], i = a.getSnapshot;
          a = a.value;
          try {
            if (!vt(i(), a)) return !1;
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
  function Dl(e, t, l, n) {
    t &= ~Cc, t &= ~un, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Qs(e, l, t);
  }
  function ni() {
    return (Ee & 6) === 0 ? (Ha(0), !1) : !0;
  }
  function Mc() {
    if (de !== null) {
      if (Re === 0)
        var e = de.return;
      else
        e = de, el = Wl = null, Jr(e), Dn = null, ba = 0, e = de;
      for (; e !== null; )
        md(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Vn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, d1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), fl = 0, Mc(), Oe = e, de = l = It(e.current, null), he = t, Re = 0, xt = null, Ol = !1, Yn = la(e, t), wc = !1, Xn = Rt = Cc = un = zl = Ye = 0, ft = ja = null, _c = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return ol = t, Tu(), l;
  }
  function Hd(e, t) {
    ie = null, q.H = Ca, t === Mn || t === Mu ? (t = Io(), Re = 3) : t === Br ? (t = Io(), Re = 4) : Re = t === oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, de === null && (Ye = 1, ku(
      e,
      _t(t, e.current)
    ));
  }
  function Ld() {
    var e = St.current;
    return e === null ? !0 : (he & 4194048) === he ? Mt === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === Mt : !1;
  }
  function qd() {
    var e = q.H;
    return q.H = Ca, e === null ? Ca : e;
  }
  function Yd() {
    var e = q.A;
    return q.A = Qy, e;
  }
  function ai() {
    Ye = 4, Ol || (he & 4194048) !== he && St.current !== null || (Yn = !0), (zl & 134217727) === 0 && (un & 134217727) === 0 || Oe === null || Dl(
      Oe,
      he,
      Rt,
      !1
    );
  }
  function Dc(e, t, l) {
    var n = Ee;
    Ee |= 2;
    var a = qd(), i = Yd();
    (Oe !== e || he !== t) && (li = null, Vn(e, t)), t = !1;
    var f = Ye;
    e: do
      try {
        if (Re !== 0 && de !== null) {
          var h = de, v = xt;
          switch (Re) {
            case 8:
              Mc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var C = Re;
              if (Re = 0, xt = null, Qn(e, h, v, C), l && Yn) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Re, Re = 0, xt = null, Qn(e, h, v, C);
          }
        }
        Ky(), f = Ye;
        break;
      } catch (j) {
        Hd(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, el = Wl = null, Ee = n, q.H = a, q.A = i, de === null && (Oe = null, he = 0, Tu()), f;
  }
  function Ky() {
    for (; de !== null; ) Xd(de);
  }
  function Jy(e, t) {
    var l = Ee;
    Ee |= 2;
    var n = qd(), a = Yd();
    Oe !== e || he !== t ? (li = null, ti = yt() + 500, Vn(e, t)) : Yn = la(
      e,
      t
    );
    e: do
      try {
        if (Re !== 0 && de !== null) {
          t = de;
          var i = xt;
          t: switch (Re) {
            case 1:
              Re = 0, xt = null, Qn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Wo(i)) {
                Re = 0, xt = null, Gd(t);
                break;
              }
              t = function() {
                Re !== 2 && Re !== 9 || Oe !== e || (Re = 7), Zt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Re = 7;
              break e;
            case 4:
              Re = 5;
              break e;
            case 7:
              Wo(i) ? (Re = 0, xt = null, Gd(t)) : (Re = 0, xt = null, Qn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var h = de;
                  if (f ? Cm(f) : h.stateNode.complete) {
                    Re = 0, xt = null;
                    var v = h.sibling;
                    if (v !== null) de = v;
                    else {
                      var C = h.return;
                      C !== null ? (de = C, ui(C)) : de = null;
                    }
                    break t;
                  }
              }
              Re = 0, xt = null, Qn(e, t, i, 5);
              break;
            case 6:
              Re = 0, xt = null, Qn(e, t, i, 6);
              break;
            case 8:
              Mc(), Ye = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        $y();
        break;
      } catch (j) {
        Hd(e, j);
      }
    while (!0);
    return el = Wl = null, q.H = n, q.A = a, Ee = l, de !== null ? 0 : (Oe = null, he = 0, Tu(), Ye);
  }
  function $y() {
    for (; de !== null && !v0(); )
      Xd(de);
  }
  function Xd(e) {
    var t = fd(e.alternate, e, ol);
    e.memoizedProps = e.pendingProps, t === null ? ui(e) : de = t;
  }
  function Gd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ud(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = ud(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        Jr(t);
      default:
        md(l, t), t = de = qo(t, ol), t = fd(l, t, ol);
    }
    e.memoizedProps = e.pendingProps, t === null ? ui(e) : de = t;
  }
  function Qn(e, t, l, n) {
    el = Wl = null, Jr(t), Dn = null, ba = 0;
    var a = t.return;
    try {
      if (Hy(
        e,
        a,
        t,
        l,
        he
      )) {
        Ye = 1, ku(
          e,
          _t(l, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw de = a, i;
      Ye = 1, ku(
        e,
        _t(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ge || n === 1 ? e = !0 : Yn || (he & 536870912) !== 0 ? e = !1 : (Ol = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Vd(t, e)) : ui(t);
  }
  function ui(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Vd(
          t,
          Ol
        );
        return;
      }
      e = t.return;
      var l = Yy(
        t.alternate,
        t,
        ol
      );
      if (l !== null) {
        de = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Ye === 0 && (Ye = 5);
  }
  function Vd(e, t) {
    do {
      var l = Xy(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, de = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = l;
    } while (e !== null);
    Ye = 6, de = null;
  }
  function Qd(e, t, l, n, a, i, f, h, v) {
    e.cancelPendingCommit = null;
    do
      ii();
    while (Ke !== 0);
    if ((Ee & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= Er, _0(
        e,
        l,
        i,
        f,
        h,
        v
      ), e === Oe && (de = Oe = null, he = 0), Gn = t, Ml = e, fl = l, Oc = i, zc = a, Dd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Py(cu, function() {
        return $d(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null, a = G.p, G.p = 2, f = Ee, Ee |= 4;
        try {
          Gy(e, t, l);
        } finally {
          Ee = f, G.p = a, q.T = n;
        }
      }
      Ke = 1, Zd(), kd(), Kd();
    }
  }
  function Zd() {
    if (Ke === 1) {
      Ke = 0;
      var e = Ml, t = Gn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Ee;
        Ee |= 4;
        try {
          Ad(t, e);
          var i = Zc, f = zo(e.containerInfo), h = i.focusedElem, v = i.selectionRange;
          if (f !== h && h && h.ownerDocument && Oo(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && gr(h)) {
              var C = v.start, j = v.end;
              if (j === void 0 && (j = C), "selectionStart" in h)
                h.selectionStart = C, h.selectionEnd = Math.min(
                  j,
                  h.value.length
                );
              else {
                var L = h.ownerDocument || document, O = L && L.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), k = h.textContent.length, le = Math.min(v.start, k), _e = v.end === void 0 ? le : Math.min(v.end, k);
                  !M.extend && le > _e && (f = _e, _e = le, le = f);
                  var T = _o(
                    h,
                    le
                  ), E = _o(
                    h,
                    _e
                  );
                  if (T && E && (M.rangeCount !== 1 || M.anchorNode !== T.node || M.anchorOffset !== T.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var w = L.createRange();
                    w.setStart(T.node, T.offset), M.removeAllRanges(), le > _e ? (M.addRange(w), M.extend(E.node, E.offset)) : (w.setEnd(E.node, E.offset), M.addRange(w));
                  }
                }
              }
            }
            for (L = [], M = h; M = M.parentNode; )
              M.nodeType === 1 && L.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < L.length; h++) {
              var B = L[h];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          vi = !!Qc, Zc = Qc = null;
        } finally {
          Ee = a, G.p = n, q.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function kd() {
    if (Ke === 2) {
      Ke = 0;
      var e = Ml, t = Gn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Ee;
        Ee |= 4;
        try {
          Sd(e, t.alternate, t);
        } finally {
          Ee = a, G.p = n, q.T = l;
        }
      }
      Ke = 3;
    }
  }
  function Kd() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, b0();
      var e = Ml, t = Gn, l = fl, n = Dd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Gn = Ml = null, Jd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Nl = null), Fi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            ta,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = q.T, a = G.p, G.p = 2, q.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var h = n[f];
            i(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          q.T = t, G.p = a;
        }
      }
      (fl & 3) !== 0 && ii(), Zt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Nc ? Ba++ : (Ba = 0, Nc = e) : Ba = 0, Ha(0);
    }
  }
  function Jd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ii() {
    return Zd(), kd(), Kd(), $d();
  }
  function $d() {
    if (Ke !== 5) return !1;
    var e = Ml, t = Oc;
    Oc = 0;
    var l = Fi(fl), n = q.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, q.T = null, l = zc, zc = null;
      var i = Ml, f = fl;
      if (Ke = 0, Gn = Ml = null, fl = 0, (Ee & 6) !== 0) throw Error(o(331));
      var h = Ee;
      if (Ee |= 4, zd(i.current), Cd(
        i,
        i.current,
        f,
        l
      ), Ee = h, Ha(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(ta, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, q.T = n, Jd(e, t);
    }
  }
  function Wd(e, t, l) {
    t = _t(l, t), t = sc(e.stateNode, t, 2), e = Al(e, t, 2), e !== null && (na(e, 2), Zt(e));
  }
  function Te(e, t, l) {
    if (e.tag === 3)
      Wd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Wd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Nl === null || !Nl.has(n))) {
            e = _t(l, e), l = Ff(2), n = Al(t, l, 2), n !== null && (If(
              l,
              n,
              t,
              e
            ), na(n, 2), Zt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Zy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (wc = !0, a.add(l), e = Wy.bind(null, e, t, l), t.then(e, e));
  }
  function Wy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (he & l) === l && (Ye === 4 || Ye === 3 && (he & 62914560) === he && 300 > yt() - ei ? (Ee & 2) === 0 && Vn(e, 0) : Cc |= l, Xn === he && (Xn = 0)), Zt(e);
  }
  function Fd(e, t) {
    t === 0 && (t = Vs()), e = Kl(e, t), e !== null && (na(e, t), Zt(e));
  }
  function Fy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Fd(e, l);
  }
  function Iy(e, t) {
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
        throw Error(o(314));
    }
    n !== null && n.delete(t), Fd(e, l);
  }
  function Py(e, t) {
    return Ki(e, t);
  }
  var ri = null, Zn = null, jc = !1, ci = !1, Bc = !1, Ul = 0;
  function Zt(e) {
    e !== Zn && e.next === null && (Zn === null ? ri = Zn = e : Zn = Zn.next = e), ci = !0, jc || (jc = !0, t1());
  }
  function Ha(e, t) {
    if (!Bc && ci) {
      Bc = !0;
      do
        for (var l = !1, n = ri; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, h = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, tm(n, i));
          } else
            i = he, i = du(
              n,
              n === Oe ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || la(n, i) || (l = !0, tm(n, i));
          n = n.next;
        }
      while (l);
      Bc = !1;
    }
  }
  function e1() {
    Id();
  }
  function Id() {
    ci = jc = !1;
    var e = 0;
    Ul !== 0 && f1() && (e = Ul);
    for (var t = yt(), l = null, n = ri; n !== null; ) {
      var a = n.next, i = Pd(n, t);
      i === 0 ? (n.next = null, l === null ? ri = a : l.next = a, a === null && (Zn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ci = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || Ha(e), Ul !== 0 && (Ul = 0);
  }
  function Pd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), h = 1 << f, v = a[f];
      v === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[f] = C0(h, t)) : v <= t && (e.expiredLanes |= h), i &= ~h;
    }
    if (t = Oe, l = he, l = du(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ji(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || la(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ji(n), Fi(l)) {
        case 2:
        case 8:
          l = Xs;
          break;
        case 32:
          l = cu;
          break;
        case 268435456:
          l = Gs;
          break;
        default:
          l = cu;
      }
      return n = em.bind(null, e), l = Ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ji(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function em(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ii() && e.callbackNode !== l)
      return null;
    var n = he;
    return n = du(
      e,
      e === Oe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (jd(e, n, t), Pd(e, yt()), e.callbackNode != null && e.callbackNode === l ? em.bind(null, e) : null);
  }
  function tm(e, t) {
    if (ii()) return null;
    jd(e, t, !0);
  }
  function t1() {
    m1(function() {
      (Ee & 6) !== 0 ? Ki(
        Ys,
        e1
      ) : Id();
    });
  }
  function Hc() {
    if (Ul === 0) {
      var e = zn;
      e === 0 && (e = su, su <<= 1, (su & 261888) === 0 && (su = 256)), Ul = e;
    }
    return Ul;
  }
  function lm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gu("" + e);
  }
  function nm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function l1(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = lm(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? lm(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var h = new Su(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Ul !== 0) {
                  var v = f ? nm(a, f) : new FormData(a);
                  nc(
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
                typeof i == "function" && (h.preventDefault(), v = f ? nm(a, f) : new FormData(a), nc(
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
  for (var Lc = 0; Lc < Sr.length; Lc++) {
    var qc = Sr[Lc], n1 = qc.toLowerCase(), a1 = qc[0].toUpperCase() + qc.slice(1);
    Ht(
      n1,
      "on" + a1
    );
  }
  Ht(Do, "onAnimationEnd"), Ht(Uo, "onAnimationIteration"), Ht(jo, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(Sy, "onTransitionRun"), Ht(Ey, "onTransitionStart"), Ht(xy, "onTransitionCancel"), Ht(Bo, "onTransitionEnd"), gn("onMouseEnter", ["mouseout", "mouseover"]), gn("onMouseLeave", ["mouseout", "mouseover"]), gn("onPointerEnter", ["pointerout", "pointerover"]), gn("onPointerLeave", ["pointerout", "pointerover"]), Vl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var La = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), u1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La)
  );
  function am(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var h = n[f], v = h.instance, C = h.currentTarget;
            if (h = h.listener, v !== i && a.isPropagationStopped())
              break e;
            i = h, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              Ru(j);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (h = n[f], v = h.instance, C = h.currentTarget, h = h.listener, v !== i && a.isPropagationStopped())
              break e;
            i = h, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              Ru(j);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function me(e, t) {
    var l = t[Ii];
    l === void 0 && (l = t[Ii] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (um(t, e, 2, !1), l.add(n));
  }
  function Yc(e, t, l) {
    var n = 0;
    t && (n |= 4), um(
      l,
      e,
      n,
      t
    );
  }
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function Xc(e) {
    if (!e[si]) {
      e[si] = !0, Ws.forEach(function(l) {
        l !== "selectionchange" && (u1.has(l) || Yc(l, !1, e), Yc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[si] || (t[si] = !0, Yc("selectionchange", !1, t));
    }
  }
  function um(e, t, l, n) {
    switch (Um(t)) {
      case 2:
        var a = D1;
        break;
      case 8:
        a = U1;
        break;
      default:
        a = ls;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !rr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function Gc(e, t, l, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var h = n.stateNode.containerInfo;
          if (h === a) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var v = f.tag;
              if ((v === 3 || v === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (f = mn(h), f === null) return;
            if (v = f.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              n = i = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        n = n.return;
      }
    co(function() {
      var C = i, j = ur(l), L = [];
      e: {
        var O = Ho.get(e);
        if (O !== void 0) {
          var M = Su, k = e;
          switch (e) {
            case "keypress":
              if (vu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = I0;
              break;
            case "focusin":
              k = "focus", M = fr;
              break;
            case "focusout":
              k = "blur", M = fr;
              break;
            case "beforeblur":
            case "afterblur":
              M = fr;
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
              M = fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Y0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ty;
              break;
            case Do:
            case Uo:
            case jo:
              M = V0;
              break;
            case Bo:
              M = ny;
              break;
            case "scroll":
            case "scrollend":
              M = L0;
              break;
            case "wheel":
              M = uy;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Z0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = ho;
              break;
            case "toggle":
            case "beforetoggle":
              M = ry;
          }
          var le = (t & 4) !== 0, _e = !le && (e === "scroll" || e === "scrollend"), T = le ? O !== null ? O + "Capture" : null : O;
          le = [];
          for (var E = C, w; E !== null; ) {
            var B = E;
            if (w = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || w === null || T === null || (B = ia(E, T), B != null && le.push(
              qa(E, B, w)
            )), _e) break;
            E = E.return;
          }
          0 < le.length && (O = new M(
            O,
            k,
            null,
            l,
            j
          ), L.push({ event: O, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && l !== ar && (k = l.relatedTarget || l.fromElement) && (mn(k) || k[dn]))
            break e;
          if ((M || O) && (O = j.window === j ? j : (O = j.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (k = l.relatedTarget || l.toElement, M = C, k = k ? mn(k) : null, k !== null && (_e = m(k), le = k.tag, k !== _e || le !== 5 && le !== 27 && le !== 6) && (k = null)) : (M = null, k = C), M !== k)) {
            if (le = fo, B = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (le = ho, B = "onPointerLeave", T = "onPointerEnter", E = "pointer"), _e = M == null ? O : ua(M), w = k == null ? O : ua(k), O = new le(
              B,
              E + "leave",
              M,
              l,
              j
            ), O.target = _e, O.relatedTarget = w, B = null, mn(j) === C && (le = new le(
              T,
              E + "enter",
              k,
              l,
              j
            ), le.target = w, le.relatedTarget = _e, B = le), _e = B, M && k)
              t: {
                for (le = i1, T = M, E = k, w = 0, B = T; B; B = le(B))
                  w++;
                B = 0;
                for (var ee = E; ee; ee = le(ee))
                  B++;
                for (; 0 < w - B; )
                  T = le(T), w--;
                for (; 0 < B - w; )
                  E = le(E), B--;
                for (; w--; ) {
                  if (T === E || E !== null && T === E.alternate) {
                    le = T;
                    break t;
                  }
                  T = le(T), E = le(E);
                }
                le = null;
              }
            else le = null;
            M !== null && im(
              L,
              O,
              M,
              le,
              !1
            ), k !== null && _e !== null && im(
              L,
              _e,
              k,
              le,
              !0
            );
          }
        }
        e: {
          if (O = C ? ua(C) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var ve = xo;
          else if (So(O))
            if (Ro)
              ve = py;
            else {
              ve = yy;
              var $ = hy;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? C && nr(C.elementType) && (ve = xo) : ve = gy;
          if (ve && (ve = ve(e, C))) {
            Eo(
              L,
              ve,
              l,
              j
            );
            break e;
          }
          $ && $(e, O, C), e === "focusout" && C && O.type === "number" && C.memoizedProps.value != null && lr(O, "number", O.value);
        }
        switch ($ = C ? ua(C) : window, e) {
          case "focusin":
            (So($) || $.contentEditable === "true") && (xn = $, pr = C, ha = null);
            break;
          case "focusout":
            ha = pr = xn = null;
            break;
          case "mousedown":
            vr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vr = !1, No(L, l, j);
            break;
          case "selectionchange":
            if (by) break;
          case "keydown":
          case "keyup":
            No(L, l, j);
        }
        var ce;
        if (mr)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          En ? vo(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (yo && l.locale !== "ko" && (En || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && En && (ce = so()) : (vl = j, cr = "value" in vl ? vl.value : vl.textContent, En = !0)), $ = oi(C, ye), 0 < $.length && (ye = new mo(
          ye,
          e,
          null,
          l,
          j
        ), L.push({ event: ye, listeners: $ }), ce ? ye.data = ce : (ce = bo(l), ce !== null && (ye.data = ce)))), (ce = sy ? oy(e, l) : fy(e, l)) && (ye = oi(C, "onBeforeInput"), 0 < ye.length && ($ = new mo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          j
        ), L.push({
          event: $,
          listeners: ye
        }), $.data = ce)), l1(
          L,
          e,
          C,
          l,
          j
        );
      }
      am(L, t);
    });
  }
  function qa(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function oi(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ia(e, l), a != null && n.unshift(
        qa(e, a, i)
      ), a = ia(e, t), a != null && n.push(
        qa(e, a, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function i1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function im(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var h = l, v = h.alternate, C = h.stateNode;
      if (h = h.tag, v !== null && v === n) break;
      h !== 5 && h !== 26 && h !== 27 || C === null || (v = C, a ? (C = ia(l, i), C != null && f.unshift(
        qa(l, C, v)
      )) : a || (C = ia(l, i), C != null && f.push(
        qa(l, C, v)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var r1 = /\r\n?/g, c1 = /\u0000|\uFFFD/g;
  function rm(e) {
    return (typeof e == "string" ? e : "" + e).replace(r1, `
`).replace(c1, "");
  }
  function cm(e, t) {
    return t = rm(t), rm(e) === t;
  }
  function Ce(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || vn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && vn(e, "" + n);
        break;
      case "className":
        hu(e, "class", n);
        break;
      case "tabIndex":
        hu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hu(e, l, n);
        break;
      case "style":
        io(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          hu(e, "data", n);
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
        n = gu("" + n), e.setAttribute(l, n);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && Ce(e, t, "name", a.name, a, null), Ce(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ce(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ce(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ce(e, t, "encType", a.encType, a, null), Ce(e, t, "method", a.method, a, null), Ce(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = gu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Wt);
        break;
      case "onScroll":
        n != null && me("scroll", e);
        break;
      case "onScrollEnd":
        n != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(o(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(o(60));
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
        l = gu("" + n), e.setAttributeNS(
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
        me("beforetoggle", e), me("toggle", e), mu(e, "popover", n);
        break;
      case "xlinkActuate":
        $t(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        $t(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        $t(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        $t(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        $t(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        $t(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        $t(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        $t(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        $t(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        mu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = B0.get(l) || l, mu(e, l, n));
    }
  }
  function Vc(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        io(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(o(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? vn(e, n) : (typeof n == "number" || typeof n == "bigint") && vn(e, "" + n);
        break;
      case "onScroll":
        n != null && me("scroll", e);
        break;
      case "onScrollEnd":
        n != null && me("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Wt);
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
        if (!Fs.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[it] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : mu(e, l, n);
          }
    }
  }
  function tt(e, t, l) {
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
        me("error", e), me("load", e);
        var n = !1, a = !1, i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ce(e, t, i, f, l, null);
              }
          }
        a && Ce(e, t, "srcSet", l.srcSet, l, null), n && Ce(e, t, "src", l.src, l, null);
        return;
      case "input":
        me("invalid", e);
        var h = i = f = a = null, v = null, C = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var j = l[n];
            if (j != null)
              switch (n) {
                case "name":
                  a = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  v = j;
                  break;
                case "defaultChecked":
                  C = j;
                  break;
                case "value":
                  i = j;
                  break;
                case "defaultValue":
                  h = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ce(e, t, n, j, l, null);
              }
          }
        lo(
          e,
          i,
          h,
          v,
          C,
          f,
          a,
          !1
        );
        return;
      case "select":
        me("invalid", e), n = f = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (h = l[a], h != null))
            switch (a) {
              case "value":
                i = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                n = h;
              default:
                Ce(e, t, a, h, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? pn(e, !!n, t, !1) : l != null && pn(e, !!n, l, !0);
        return;
      case "textarea":
        me("invalid", e), i = a = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (h = l[f], h != null))
            switch (f) {
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
                if (h != null) throw Error(o(91));
                break;
              default:
                Ce(e, t, f, h, l, null);
            }
        ao(e, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ce(e, t, v, n, l, null));
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < La.length; n++)
          me(La[n], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
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
        for (C in l)
          if (l.hasOwnProperty(C) && (n = l[C], n != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                Ce(e, t, C, n, l, null);
            }
        return;
      default:
        if (nr(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (n = l[j], n !== void 0 && Vc(
              e,
              t,
              j,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && (n = l[h], n != null && Ce(e, t, h, n, l, null));
  }
  function s1(e, t, l, n) {
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
        var a = null, i = null, f = null, h = null, v = null, C = null, j = null;
        for (M in l) {
          var L = l[M];
          if (l.hasOwnProperty(M) && L != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = L;
              default:
                n.hasOwnProperty(M) || Ce(e, t, M, null, n, L);
            }
        }
        for (var O in n) {
          var M = n[O];
          if (L = l[O], n.hasOwnProperty(O) && (M != null || L != null))
            switch (O) {
              case "type":
                i = M;
                break;
              case "name":
                a = M;
                break;
              case "checked":
                C = M;
                break;
              case "defaultChecked":
                j = M;
                break;
              case "value":
                f = M;
                break;
              case "defaultValue":
                h = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== L && Ce(
                  e,
                  t,
                  O,
                  M,
                  n,
                  L
                );
            }
        }
        tr(
          e,
          f,
          h,
          v,
          C,
          j,
          i,
          a
        );
        return;
      case "select":
        M = f = h = O = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                M = v;
              default:
                n.hasOwnProperty(i) || Ce(
                  e,
                  t,
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
                O = i;
                break;
              case "defaultValue":
                h = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== v && Ce(
                  e,
                  t,
                  a,
                  i,
                  n,
                  v
                );
            }
        t = h, l = f, n = M, O != null ? pn(e, !!l, O, !1) : !!n != !!l && (t != null ? pn(e, !!l, t, !0) : pn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = O = null;
        for (h in l)
          if (a = l[h], l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ce(e, t, h, null, n, a);
            }
        for (f in n)
          if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                O = a;
                break;
              case "defaultValue":
                M = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== i && Ce(e, t, f, a, n, i);
            }
        no(e, O, M);
        return;
      case "option":
        for (var k in l)
          O = l[k], l.hasOwnProperty(k) && O != null && !n.hasOwnProperty(k) && (k === "selected" ? e.selected = !1 : Ce(
            e,
            t,
            k,
            null,
            n,
            O
          ));
        for (v in n)
          O = n[v], M = l[v], n.hasOwnProperty(v) && O !== M && (O != null || M != null) && (v === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Ce(
            e,
            t,
            v,
            O,
            n,
            M
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
        for (var le in l)
          O = l[le], l.hasOwnProperty(le) && O != null && !n.hasOwnProperty(le) && Ce(e, t, le, null, n, O);
        for (C in n)
          if (O = n[C], M = l[C], n.hasOwnProperty(C) && O !== M && (O != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                Ce(
                  e,
                  t,
                  C,
                  O,
                  n,
                  M
                );
            }
        return;
      default:
        if (nr(t)) {
          for (var _e in l)
            O = l[_e], l.hasOwnProperty(_e) && O !== void 0 && !n.hasOwnProperty(_e) && Vc(
              e,
              t,
              _e,
              void 0,
              n,
              O
            );
          for (j in n)
            O = n[j], M = l[j], !n.hasOwnProperty(j) || O === M || O === void 0 && M === void 0 || Vc(
              e,
              t,
              j,
              O,
              n,
              M
            );
          return;
        }
    }
    for (var T in l)
      O = l[T], l.hasOwnProperty(T) && O != null && !n.hasOwnProperty(T) && Ce(e, t, T, null, n, O);
    for (L in n)
      O = n[L], M = l[L], !n.hasOwnProperty(L) || O === M || O == null && M == null || Ce(e, t, L, O, n, M);
  }
  function sm(e) {
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
  function o1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, h = a.duration;
        if (i && h && sm(f)) {
          for (f = 0, h = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], C = v.startTime;
            if (C > h) break;
            var j = v.transferSize, L = v.initiatorType;
            j && sm(L) && (v = v.responseEnd, f += j * (v < h ? 1 : (h - C) / (v - C)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Qc = null, Zc = null;
  function fi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function om(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fm(e, t) {
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
  function kc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function f1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Kc ? !1 : (Kc = e, !0) : (Kc = null, !1);
  }
  var dm = typeof setTimeout == "function" ? setTimeout : void 0, d1 = typeof clearTimeout == "function" ? clearTimeout : void 0, mm = typeof Promise == "function" ? Promise : void 0, m1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof mm < "u" ? function(e) {
    return mm.resolve(null).then(e).catch(h1);
  } : dm;
  function h1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function jl(e) {
    return e === "head";
  }
  function hm(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), $n(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Ya(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Ya(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, h = i.nodeName;
            i[aa] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && Ya(e.ownerDocument.body);
      l = a;
    } while (l);
    $n(t);
  }
  function ym(e, t) {
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
  function Jc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(l), Pi(l);
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
  function y1(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var a = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[aa])
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
      if (e = Dt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function g1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function gm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function $c(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Wc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function p1(e, t) {
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
  function Dt(e) {
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
  var Fc = null;
  function pm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Dt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function vm(e) {
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
  function bm(e, t, l) {
    switch (t = fi(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Ya(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Pi(e);
  }
  var Ut = /* @__PURE__ */ new Map(), Sm = /* @__PURE__ */ new Set();
  function di(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var dl = G.d;
  G.d = {
    f: v1,
    r: b1,
    D: S1,
    C: E1,
    L: x1,
    m: R1,
    X: A1,
    S: T1,
    M: w1
  };
  function v1() {
    var e = dl.f(), t = ni();
    return e || t;
  }
  function b1(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Hf(t) : dl.r(e);
  }
  var kn = typeof document > "u" ? null : document;
  function Em(e, t, l) {
    var n = kn;
    if (n && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Sm.has(a) || (Sm.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), tt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function S1(e) {
    dl.D(e), Em("dns-prefetch", e, null);
  }
  function E1(e, t) {
    dl.C(e, t), Em("preconnect", e, t);
  }
  function x1(e, t, l) {
    dl.L(e, t, l);
    var n = kn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + wt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + wt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + wt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + wt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Kn(e);
          break;
        case "script":
          i = Jn(e);
      }
      Ut.has(i) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Xa(i)) || t === "script" && n.querySelector(Ga(i)) || (t = n.createElement("link"), tt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function R1(e, t) {
    dl.m(e, t);
    var l = kn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + wt(n) + '"][href="' + wt(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Jn(e);
      }
      if (!Ut.has(i) && (e = N({ rel: "modulepreload", href: e }, t), Ut.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Ga(i)))
              return;
        }
        n = l.createElement("link"), tt(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function T1(e, t, l) {
    dl.S(e, t, l);
    var n = kn;
    if (n && e) {
      var a = yn(n).hoistableStyles, i = Kn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = n.querySelector(
          Xa(i)
        ))
          h.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ut.get(i)) && Ic(e, l);
          var v = f = n.createElement("link");
          $e(v), tt(v, "link", e), v._p = new Promise(function(C, j) {
            v.onload = C, v.onerror = j;
          }), v.addEventListener("load", function() {
            h.loading |= 1;
          }), v.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, mi(f, t, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: h
        }, a.set(i, f);
      }
    }
  }
  function A1(e, t) {
    dl.X(e, t);
    var l = kn;
    if (l && e) {
      var n = yn(l).hoistableScripts, a = Jn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = N({ src: e, async: !0 }, t), (t = Ut.get(a)) && Pc(e, t), i = l.createElement("script"), $e(i), tt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function w1(e, t) {
    dl.M(e, t);
    var l = kn;
    if (l && e) {
      var n = yn(l).hoistableScripts, a = Jn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = N({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Pc(e, t), i = l.createElement("script"), $e(i), tt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function xm(e, t, l, n) {
    var a = (a = fe.current) ? di(a) : null;
    if (!a) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Kn(l.href), l = yn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Kn(l.href);
          var i = yn(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            Xa(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ut.set(e, l), i || C1(
            a,
            e,
            l,
            f.state
          ))), t && n === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && n !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Jn(l), l = yn(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Kn(e) {
    return 'href="' + wt(e) + '"';
  }
  function Xa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Rm(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function C1(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), tt(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function Jn(e) {
    return '[src="' + wt(e) + '"]';
  }
  function Ga(e) {
    return "script[async]" + e;
  }
  function Tm(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + wt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, $e(n), n;
          var a = N({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), $e(n), tt(n, "style", a), mi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Kn(l.href);
          var i = e.querySelector(
            Xa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          n = Rm(l), (a = Ut.get(a)) && Ic(n, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var f = i;
          return f._p = new Promise(function(h, v) {
            f.onload = h, f.onerror = v;
          }), tt(i, "link", n), t.state.loading |= 4, mi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Jn(l.src), (a = e.querySelector(
            Ga(i)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = Ut.get(i)) && (n = N({}, l), Pc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), tt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, mi(n, l.precedence, e));
    return t.instance;
  }
  function mi(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var h = n[f];
      if (h.dataset.precedence === t) i = h;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Pc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hi = null;
  function Am(e, t, l) {
    if (hi === null) {
      var n = /* @__PURE__ */ new Map(), a = hi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = hi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[aa] || i[Fe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var h = n.get(f);
        h ? h.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function wm(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function _1(e, t, l) {
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
  function Cm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function O1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Kn(n.href), i = t.querySelector(
          Xa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = yi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, n = Rm(n), (a = Ut.get(a)) && Ic(n, a), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function(h, v) {
          f.onload = h, f.onerror = v;
        }), tt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = yi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var es = 0;
  function z1(e, t) {
    return e.stylesheets && e.count === 0 && pi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && pi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && es === 0 && (es = 62500 * o1());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && pi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > es ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function yi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) pi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var gi = null;
  function pi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, gi = /* @__PURE__ */ new Map(), t.forEach(N1, e), gi = null, yi.call(e));
  }
  function N1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = gi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), gi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = yi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Va = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function M1(e, t, l, n, a, i, f, h, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $i(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $i(0), this.hiddenUpdates = $i(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _m(e, t, l, n, a, i, f, h, v, C, j, L) {
    return e = new M1(
      e,
      t,
      l,
      f,
      v,
      C,
      j,
      L,
      h
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = Dr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Hr(i), e;
  }
  function Om(e) {
    return e ? (e = An, e) : An;
  }
  function zm(e, t, l, n, a, i) {
    a = Om(a), n.context === null ? n.context = a : n.pendingContext = a, n = Tl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Al(e, n, t), l !== null && (dt(l, e, t), Ea(l, e, t));
  }
  function Nm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ts(e, t) {
    Nm(e, t), (e = e.alternate) && Nm(e, t);
  }
  function Mm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Kl(e, 67108864);
      t !== null && dt(t, e, 67108864), ts(e, 67108864);
    }
  }
  function Dm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Wi(t);
      var l = Kl(e, t);
      l !== null && dt(l, e, t), ts(e, t);
    }
  }
  var vi = !0;
  function D1(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = G.p;
    try {
      G.p = 2, ls(e, t, l, n);
    } finally {
      G.p = i, q.T = a;
    }
  }
  function U1(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = G.p;
    try {
      G.p = 8, ls(e, t, l, n);
    } finally {
      G.p = i, q.T = a;
    }
  }
  function ls(e, t, l, n) {
    if (vi) {
      var a = ns(n);
      if (a === null)
        Gc(
          e,
          t,
          n,
          bi,
          l
        ), jm(e, n);
      else if (B1(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (jm(e, n), t & 4 && -1 < j1.indexOf(e)) {
        for (; a !== null; ) {
          var i = hn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Gl(i.pendingLanes);
                  if (f !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - pt(f);
                      h.entanglements[1] |= v, f &= ~v;
                    }
                    Zt(i), (Ee & 6) === 0 && (ti = yt() + 500, Ha(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = Kl(i, 2), h !== null && dt(h, i, 2), ni(), ts(i, 2);
            }
          if (i = ns(n), i === null && Gc(
            e,
            t,
            n,
            bi,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Gc(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function ns(e) {
    return e = ur(e), as(e);
  }
  var bi = null;
  function as(e) {
    if (bi = null, e = mn(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (l === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return bi = e, null;
  }
  function Um(e) {
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
        switch (S0()) {
          case Ys:
            return 2;
          case Xs:
            return 8;
          case cu:
          case E0:
            return 32;
          case Gs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var us = !1, Bl = null, Hl = null, Ll = null, Qa = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map(), ql = [], j1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bl = null;
        break;
      case "dragenter":
      case "dragleave":
        Hl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        Qa.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Za.delete(t.pointerId);
    }
  }
  function ka(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = hn(t), t !== null && Mm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function B1(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Bl = ka(
          Bl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Hl = ka(
          Hl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Ll = ka(
          Ll,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Qa.set(
          i,
          ka(
            Qa.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Za.set(
          i,
          ka(
            Za.get(i) || null,
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
  function Bm(e) {
    var t = mn(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
              Dm(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
              Dm(l);
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
  function Si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = ns(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        ar = n, l.target.dispatchEvent(n), ar = null;
      } else
        return t = hn(l), t !== null && Mm(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Hm(e, t, l) {
    Si(e) && l.delete(t);
  }
  function H1() {
    us = !1, Bl !== null && Si(Bl) && (Bl = null), Hl !== null && Si(Hl) && (Hl = null), Ll !== null && Si(Ll) && (Ll = null), Qa.forEach(Hm), Za.forEach(Hm);
  }
  function Ei(e, t) {
    e.blockedOn === t && (e.blockedOn = null, us || (us = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      H1
    )));
  }
  var xi = null;
  function Lm(e) {
    xi !== e && (xi = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        xi === e && (xi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (as(n || l) === null)
              continue;
            break;
          }
          var i = hn(l);
          i !== null && (e.splice(t, 3), t -= 3, nc(
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
  function $n(e) {
    function t(v) {
      return Ei(v, e);
    }
    Bl !== null && Ei(Bl, e), Hl !== null && Ei(Hl, e), Ll !== null && Ei(Ll, e), Qa.forEach(t), Za.forEach(t);
    for (var l = 0; l < ql.length; l++) {
      var n = ql[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < ql.length && (l = ql[0], l.blockedOn === null); )
      Bm(l), l.blockedOn === null && ql.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || Lm(l);
        else if (f) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              h = f.formAction;
            else if (as(a) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), Lm(l);
        }
      }
  }
  function qm() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(f) {
            return a = f;
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
  function is(e) {
    this._internalRoot = e;
  }
  Ri.prototype.render = is.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, n = Tt();
    zm(l, n, e, t, null, null);
  }, Ri.prototype.unmount = is.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zm(e.current, 2, null, e, null, null), ni(), t[dn] = null;
    }
  };
  function Ri(e) {
    this._internalRoot = e;
  }
  Ri.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ql.length && t !== 0 && t < ql[l].priority; l++) ;
      ql.splice(l, 0, e), l === 0 && Bm(e);
    }
  };
  var Ym = c.version;
  if (Ym !== "19.2.3")
    throw Error(
      o(
        527,
        Ym,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var L1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
      try {
        ta = Ti.inject(
          L1
        ), gt = Ti;
      } catch {
      }
  }
  return $a.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, n = "", a = Kf, i = Jf, f = $f;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = _m(
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
      f,
      qm
    ), e[dn] = t.current, Xc(e), new is(t);
  }, $a.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var n = !1, a = "", i = Kf, f = Jf, h = $f, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = _m(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      v,
      i,
      f,
      h,
      qm
    ), t.context = Om(null), l = t.current, n = Tt(), n = Wi(n), a = Tl(n), a.callback = null, Al(l, a, n), l = n, t.current.lanes = l, na(t, l), Zt(t), e[dn] = t.current, Xc(e), new Ri(t);
  }, $a.version = "19.2.3", $a;
}
var lh;
function Ap() {
  if (lh) return ms.exports;
  lh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), ms.exports = Tp(), ms.exports;
}
var wp = Ap();
const Hi = ({ label: u, onClick: r, disabled: c, type: s = "button", className: o, children: d, mainButtonStyle: m }) => /* @__PURE__ */ x.jsx(
  "button",
  {
    className: o || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: r,
    disabled: c,
    type: s,
    style: m,
    children: d || u
  }
), rn = A.forwardRef(
  (u, r) => {
    const {
      label: c,
      startIcon: s,
      endIcon: o,
      error: d,
      helperText: m,
      optional: g,
      className: p,
      options: y,
      ...b
    } = u, R = !!d || !!m, N = b.type === "select" || !!y;
    return /* @__PURE__ */ x.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      c && /* @__PURE__ */ x.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        c,
        " ",
        g && /* @__PURE__ */ x.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex! items-center! relative!", children: [
        s && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: s
          }
        ),
        N ? /* @__PURE__ */ x.jsx(
          "select",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${R ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b,
            children: y && y.map((Y) => /* @__PURE__ */ x.jsx("option", { value: Y.value, children: Y.label }, Y.value))
          }
        ) : /* @__PURE__ */ x.jsx(
          "input",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${R ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b
          }
        ),
        o && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!",
            "aria-hidden": !0,
            children: o
          }
        )
      ] }),
      d && typeof d == "string" && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
      !d && m && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: m })
    ] });
  }
), Cp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Ms = ({
  type: u,
  message: r,
  actionText: c,
  onActionClick: s,
  onClose: o,
  className: d = "",
  children: m
}) => {
  const g = () => {
    switch (u) {
      case "success":
        return {
          bg: "bg-green-50!",
          border: "border-green-200!",
          text: "text-green-800!",
          iconBg: "bg-green-100!",
          iconColor: "text-green-600!",
          actionColor: "text-green-700!",
          actionHover: "hover:text-green-800!",
          closeButtonHover: "hover:text-green-800!"
        };
      case "warning":
        return {
          bg: "bg-yellow-50!",
          border: "border-yellow-200!",
          text: "text-yellow-800!",
          iconBg: "bg-yellow-100!",
          iconColor: "text-yellow-600!",
          actionColor: "text-yellow-700!",
          actionHover: "hover:text-yellow-800!",
          closeButtonHover: "hover:text-yellow-800!"
        };
      case "error":
        return {
          bg: "bg-red-50!",
          border: "border-red-200!",
          text: "text-red-800!",
          iconBg: "bg-red-100!",
          iconColor: "text-red-600!",
          actionColor: "text-red-700!",
          actionHover: "hover:text-red-800!",
          closeButtonHover: "hover:text-red-800!"
        };
      default:
        return {
          bg: "bg-cyan-50!",
          border: "border-l-4! border-l-cyan-500!",
          text: "text-gray-700!",
          iconBg: "bg-cyan-100!",
          iconColor: "text-cyan-600!",
          actionColor: "text-cyan-600!",
          actionHover: "hover:text-cyan-700!",
          closeButtonHover: "hover:text-cyan-700!"
        };
    }
  }, p = () => {
    switch (u) {
      case "success":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ x.jsx("img", { src: Cp, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g();
  return /* @__PURE__ */ x.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ x.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ x.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
      c && s && /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          onClick: s,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: c
        }
      ),
      m
    ] }),
    o && /* @__PURE__ */ x.jsxs(
      "button",
      {
        type: "button",
        onClick: o,
        className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
        children: [
          /* @__PURE__ */ x.jsx("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    )
  ] });
}, Zh = () => /* @__PURE__ */ x.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Fa extends Error {
}
Fa.prototype.name = "InvalidTokenError";
function _p(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (r, c) => {
    let s = c.charCodeAt(0).toString(16).toUpperCase();
    return s.length < 2 && (s = "0" + s), "%" + s;
  }));
}
function Op(u) {
  let r = u.replace(/-/g, "+").replace(/_/g, "/");
  switch (r.length % 4) {
    case 0:
      break;
    case 2:
      r += "==";
      break;
    case 3:
      r += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return _p(r);
  } catch {
    return atob(r);
  }
}
function Ds(u, r) {
  if (typeof u != "string")
    throw new Fa("Invalid token specified: must be a string");
  r || (r = {});
  const c = r.header === !0 ? 0 : 1, s = u.split(".")[c];
  if (typeof s != "string")
    throw new Fa(`Invalid token specified: missing part #${c + 1}`);
  let o;
  try {
    o = Op(s);
  } catch (d) {
    throw new Fa(`Invalid token specified: invalid base64 for part #${c + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new Fa(`Invalid token specified: invalid json for part #${c + 1} (${d.message})`);
  }
}
function zp() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const r = u.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Np() {
  const u = window.location.hostname;
  return u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u) || u.startsWith("dev.") || u.startsWith("dev-") ? "dev" : u.startsWith("test.") || u.startsWith("test-") ? "test" : u.startsWith("stage.") || u.startsWith("stage-") ? "stage" : "prod";
}
function nh() {
  const u = window.location.href, r = new URL(u), c = r.hostname;
  if (c.startsWith("dev.")) {
    const s = c.replace("dev.", "dev-learn.");
    return `${r.protocol}//${s}/courses`;
  } else if (c.startsWith("test.")) {
    const s = c.replace("test.", "test-learn.");
    return `${r.protocol}//${s}/courses`;
  } else if (c.startsWith("stage.")) {
    const s = c.replace("stage.", "stage-learn.");
    return `${r.protocol}//${s}/courses`;
  } else if (c.split(".").length === 2) {
    const o = `learn.${c}`;
    return `${r.protocol}//${o}/courses`;
  } else
    return `${r.protocol}//${c}/courses`;
}
function Di(u, r, c, s = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + c);
  const d = zp(), m = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = s ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${o.toUTCString()}; path=/${m}${g}; SameSite=Lax`;
}
function kh(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var ah = {};
const { toString: Mp } = Object.prototype, { getPrototypeOf: Us } = Object, { iterator: Li, toStringTag: Kh } = Symbol, qi = /* @__PURE__ */ ((u) => (r) => {
  const c = Mp.call(r);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Xt = (u) => (u = u.toLowerCase(), (r) => qi(r) === u), Yi = (u) => (r) => typeof r === u, { isArray: Pn } = Array, Wn = Yi("undefined");
function lu(u) {
  return u !== null && !Wn(u) && u.constructor !== null && !Wn(u.constructor) && mt(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Jh = Xt("ArrayBuffer");
function Dp(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && Jh(u.buffer), r;
}
const Up = Yi("string"), mt = Yi("function"), $h = Yi("number"), nu = (u) => u !== null && typeof u == "object", jp = (u) => u === !0 || u === !1, Oi = (u) => {
  if (qi(u) !== "object")
    return !1;
  const r = Us(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Kh in u) && !(Li in u);
}, Bp = (u) => {
  if (!nu(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Hp = Xt("Date"), Lp = Xt("File"), qp = Xt("Blob"), Yp = Xt("FileList"), Xp = (u) => nu(u) && mt(u.pipe), Gp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || mt(u.append) && ((r = qi(u)) === "formdata" || // detect form-data instance
  r === "object" && mt(u.toString) && u.toString() === "[object FormData]"));
}, Vp = Xt("URLSearchParams"), [Qp, Zp, kp, Kp] = ["ReadableStream", "Request", "Response", "Headers"].map(Xt), Jp = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function au(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let s, o;
  if (typeof u != "object" && (u = [u]), Pn(u))
    for (s = 0, o = u.length; s < o; s++)
      r.call(null, u[s], s, u);
  else {
    if (lu(u))
      return;
    const d = c ? Object.getOwnPropertyNames(u) : Object.keys(u), m = d.length;
    let g;
    for (s = 0; s < m; s++)
      g = d[s], r.call(null, u[g], g, u);
  }
}
function Wh(u, r) {
  if (lu(u))
    return null;
  r = r.toLowerCase();
  const c = Object.keys(u);
  let s = c.length, o;
  for (; s-- > 0; )
    if (o = c[s], r === o.toLowerCase())
      return o;
  return null;
}
const cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Fh = (u) => !Wn(u) && u !== cn;
function xs() {
  const { caseless: u, skipUndefined: r } = Fh(this) && this || {}, c = {}, s = (o, d) => {
    const m = u && Wh(c, d) || d;
    Oi(c[m]) && Oi(o) ? c[m] = xs(c[m], o) : Oi(o) ? c[m] = xs({}, o) : Pn(o) ? c[m] = o.slice() : (!r || !Wn(o)) && (c[m] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && au(arguments[o], s);
  return c;
}
const $p = (u, r, c, { allOwnKeys: s } = {}) => (au(r, (o, d) => {
  c && mt(o) ? u[d] = kh(o, c) : u[d] = o;
}, { allOwnKeys: s }), u), Wp = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Fp = (u, r, c, s) => {
  u.prototype = Object.create(r.prototype, s), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), c && Object.assign(u.prototype, c);
}, Ip = (u, r, c, s) => {
  let o, d, m;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(u), d = o.length; d-- > 0; )
      m = o[d], (!s || s(m, u, r)) && !g[m] && (r[m] = u[m], g[m] = !0);
    u = c !== !1 && Us(u);
  } while (u && (!c || c(u, r)) && u !== Object.prototype);
  return r;
}, Pp = (u, r, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= r.length;
  const s = u.indexOf(r, c);
  return s !== -1 && s === c;
}, ev = (u) => {
  if (!u) return null;
  if (Pn(u)) return u;
  let r = u.length;
  if (!$h(r)) return null;
  const c = new Array(r);
  for (; r-- > 0; )
    c[r] = u[r];
  return c;
}, tv = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && Us(Uint8Array)), lv = (u, r) => {
  const s = (u && u[Li]).call(u);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const d = o.value;
    r.call(u, d[0], d[1]);
  }
}, nv = (u, r) => {
  let c;
  const s = [];
  for (; (c = u.exec(r)) !== null; )
    s.push(c);
  return s;
}, av = Xt("HTMLFormElement"), uv = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, s, o) {
    return s.toUpperCase() + o;
  }
), uh = (({ hasOwnProperty: u }) => (r, c) => u.call(r, c))(Object.prototype), iv = Xt("RegExp"), Ih = (u, r) => {
  const c = Object.getOwnPropertyDescriptors(u), s = {};
  au(c, (o, d) => {
    let m;
    (m = r(o, d, u)) !== !1 && (s[d] = m || o);
  }), Object.defineProperties(u, s);
}, rv = (u) => {
  Ih(u, (r, c) => {
    if (mt(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const s = u[c];
    if (mt(s)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, cv = (u, r) => {
  const c = {}, s = (o) => {
    o.forEach((d) => {
      c[d] = !0;
    });
  };
  return Pn(u) ? s(u) : s(String(u).split(r)), c;
}, sv = () => {
}, ov = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function fv(u) {
  return !!(u && mt(u.append) && u[Kh] === "FormData" && u[Li]);
}
const dv = (u) => {
  const r = new Array(10), c = (s, o) => {
    if (nu(s)) {
      if (r.indexOf(s) >= 0)
        return;
      if (lu(s))
        return s;
      if (!("toJSON" in s)) {
        r[o] = s;
        const d = Pn(s) ? [] : {};
        return au(s, (m, g) => {
          const p = c(m, o + 1);
          !Wn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return s;
  };
  return c(u, 0);
}, mv = Xt("AsyncFunction"), hv = (u) => u && (nu(u) || mt(u)) && mt(u.then) && mt(u.catch), Ph = ((u, r) => u ? setImmediate : r ? ((c, s) => (cn.addEventListener("message", ({ source: o, data: d }) => {
  o === cn && d === c && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), cn.postMessage(c, "*");
}))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(
  typeof setImmediate == "function",
  mt(cn.postMessage)
), yv = typeof queueMicrotask < "u" ? queueMicrotask.bind(cn) : typeof ah < "u" && ah.nextTick || Ph, gv = (u) => u != null && mt(u[Li]), z = {
  isArray: Pn,
  isArrayBuffer: Jh,
  isBuffer: lu,
  isFormData: Gp,
  isArrayBufferView: Dp,
  isString: Up,
  isNumber: $h,
  isBoolean: jp,
  isObject: nu,
  isPlainObject: Oi,
  isEmptyObject: Bp,
  isReadableStream: Qp,
  isRequest: Zp,
  isResponse: kp,
  isHeaders: Kp,
  isUndefined: Wn,
  isDate: Hp,
  isFile: Lp,
  isBlob: qp,
  isRegExp: iv,
  isFunction: mt,
  isStream: Xp,
  isURLSearchParams: Vp,
  isTypedArray: tv,
  isFileList: Yp,
  forEach: au,
  merge: xs,
  extend: $p,
  trim: Jp,
  stripBOM: Wp,
  inherits: Fp,
  toFlatObject: Ip,
  kindOf: qi,
  kindOfTest: Xt,
  endsWith: Pp,
  toArray: ev,
  forEachEntry: lv,
  matchAll: nv,
  isHTMLForm: av,
  hasOwnProperty: uh,
  hasOwnProp: uh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ih,
  freezeMethods: rv,
  toObjectSet: cv,
  toCamelCase: uv,
  noop: sv,
  toFiniteNumber: ov,
  findKey: Wh,
  global: cn,
  isContextDefined: Fh,
  isSpecCompliantForm: fv,
  toJSONObject: dv,
  isAsyncFn: mv,
  isThenable: hv,
  setImmediate: Ph,
  asap: yv,
  isIterable: gv
};
function re(u, r, c, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), c && (this.config = c), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
z.inherits(re, Error, {
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
const e0 = re.prototype, t0 = {};
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
  t0[u] = { value: u };
});
Object.defineProperties(re, t0);
Object.defineProperty(e0, "isAxiosError", { value: !0 });
re.from = (u, r, c, s, o, d) => {
  const m = Object.create(e0);
  z.toFlatObject(u, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return re.call(m, g, p, c, s, o), u && m.cause == null && Object.defineProperty(m, "cause", { value: u, configurable: !0 }), m.name = u && u.name || "Error", d && Object.assign(m, d), m;
};
const pv = null;
function Rs(u) {
  return z.isPlainObject(u) || z.isArray(u);
}
function l0(u) {
  return z.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function ih(u, r, c) {
  return u ? u.concat(r).map(function(o, d) {
    return o = l0(o), !c && d ? "[" + o + "]" : o;
  }).join(c ? "." : "") : r;
}
function vv(u) {
  return z.isArray(u) && !u.some(Rs);
}
const bv = z.toFlatObject(z, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Xi(u, r, c) {
  if (!z.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), c = z.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(U, D) {
    return !z.isUndefined(D[U]);
  });
  const s = c.metaTokens, o = c.visitor || b, d = c.dots, m = c.indexes, p = (c.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(r);
  if (!z.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(_) {
    if (_ === null) return "";
    if (z.isDate(_))
      return _.toISOString();
    if (z.isBoolean(_))
      return _.toString();
    if (!p && z.isBlob(_))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(_) || z.isTypedArray(_) ? p && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function b(_, U, D) {
    let V = _;
    if (_ && !D && typeof _ == "object") {
      if (z.endsWith(U, "{}"))
        U = s ? U : U.slice(0, -2), _ = JSON.stringify(_);
      else if (z.isArray(_) && vv(_) || (z.isFileList(_) || z.endsWith(U, "[]")) && (V = z.toArray(_)))
        return U = l0(U), V.forEach(function(K, te) {
          !(z.isUndefined(K) || K === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? ih([U], te, d) : m === null ? U : U + "[]",
            y(K)
          );
        }), !1;
    }
    return Rs(_) ? !0 : (r.append(ih(D, U, d), y(_)), !1);
  }
  const R = [], N = Object.assign(bv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Rs
  });
  function Y(_, U) {
    if (!z.isUndefined(_)) {
      if (R.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + U.join("."));
      R.push(_), z.forEach(_, function(V, Q) {
        (!(z.isUndefined(V) || V === null) && o.call(
          r,
          V,
          z.isString(Q) ? Q.trim() : Q,
          U,
          N
        )) === !0 && Y(V, U ? U.concat(Q) : [Q]);
      }), R.pop();
    }
  }
  if (!z.isObject(u))
    throw new TypeError("data must be an object");
  return Y(u), r;
}
function rh(u) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(s) {
    return r[s];
  });
}
function js(u, r) {
  this._pairs = [], u && Xi(u, this, r);
}
const n0 = js.prototype;
n0.append = function(r, c) {
  this._pairs.push([r, c]);
};
n0.toString = function(r) {
  const c = r ? function(s) {
    return r.call(this, s, rh);
  } : rh;
  return this._pairs.map(function(o) {
    return c(o[0]) + "=" + c(o[1]);
  }, "").join("&");
};
function Sv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function a0(u, r, c) {
  if (!r)
    return u;
  const s = c && c.encode || Sv;
  z.isFunction(c) && (c = {
    serialize: c
  });
  const o = c && c.serialize;
  let d;
  if (o ? d = o(r, c) : d = z.isURLSearchParams(r) ? r.toString() : new js(r, c).toString(s), d) {
    const m = u.indexOf("#");
    m !== -1 && (u = u.slice(0, m)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class ch {
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
  use(r, c, s) {
    return this.handlers.push({
      fulfilled: r,
      rejected: c,
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
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
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
  forEach(r) {
    z.forEach(this.handlers, function(s) {
      s !== null && r(s);
    });
  }
}
const u0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ev = typeof URLSearchParams < "u" ? URLSearchParams : js, xv = typeof FormData < "u" ? FormData : null, Rv = typeof Blob < "u" ? Blob : null, Tv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ev,
    FormData: xv,
    Blob: Rv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Bs = typeof window < "u" && typeof document < "u", Ts = typeof navigator == "object" && navigator || void 0, Av = Bs && (!Ts || ["ReactNative", "NativeScript", "NS"].indexOf(Ts.product) < 0), wv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cv = Bs && window.location.href || "http://localhost", _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Bs,
  hasStandardBrowserEnv: Av,
  hasStandardBrowserWebWorkerEnv: wv,
  navigator: Ts,
  origin: Cv
}, Symbol.toStringTag, { value: "Module" })), at = {
  ..._v,
  ...Tv
};
function Ov(u, r) {
  return Xi(u, new at.classes.URLSearchParams(), {
    visitor: function(c, s, o, d) {
      return at.isNode && z.isBuffer(c) ? (this.append(s, c.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function zv(u) {
  return z.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Nv(u) {
  const r = {}, c = Object.keys(u);
  let s;
  const o = c.length;
  let d;
  for (s = 0; s < o; s++)
    d = c[s], r[d] = u[d];
  return r;
}
function i0(u) {
  function r(c, s, o, d) {
    let m = c[d++];
    if (m === "__proto__") return !0;
    const g = Number.isFinite(+m), p = d >= c.length;
    return m = !m && z.isArray(o) ? o.length : m, p ? (z.hasOwnProp(o, m) ? o[m] = [o[m], s] : o[m] = s, !g) : ((!o[m] || !z.isObject(o[m])) && (o[m] = []), r(c, s, o[m], d) && z.isArray(o[m]) && (o[m] = Nv(o[m])), !g);
  }
  if (z.isFormData(u) && z.isFunction(u.entries)) {
    const c = {};
    return z.forEachEntry(u, (s, o) => {
      r(zv(s), o, c, 0);
    }), c;
  }
  return null;
}
function Mv(u, r, c) {
  if (z.isString(u))
    try {
      return (r || JSON.parse)(u), z.trim(u);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (c || JSON.stringify)(u);
}
const uu = {
  transitional: u0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, c) {
    const s = c.getContentType() || "", o = s.indexOf("application/json") > -1, d = z.isObject(r);
    if (d && z.isHTMLForm(r) && (r = new FormData(r)), z.isFormData(r))
      return o ? JSON.stringify(i0(r)) : r;
    if (z.isArrayBuffer(r) || z.isBuffer(r) || z.isStream(r) || z.isFile(r) || z.isBlob(r) || z.isReadableStream(r))
      return r;
    if (z.isArrayBufferView(r))
      return r.buffer;
    if (z.isURLSearchParams(r))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Ov(r, this.formSerializer).toString();
      if ((g = z.isFileList(r)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Xi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (c.setContentType("application/json", !1), Mv(r)) : r;
  }],
  transformResponse: [function(r) {
    const c = this.transitional || uu.transitional, s = c && c.forcedJSONParsing, o = this.responseType === "json";
    if (z.isResponse(r) || z.isReadableStream(r))
      return r;
    if (r && z.isString(r) && (s && !this.responseType || o)) {
      const m = !(c && c.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (g) {
        if (m)
          throw g.name === "SyntaxError" ? re.from(g, re.ERR_BAD_RESPONSE, this, null, this.response) : g;
      }
    }
    return r;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
z.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  uu.headers[u] = {};
});
const Dv = z.toObjectSet([
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
]), Uv = (u) => {
  const r = {};
  let c, s, o;
  return u && u.split(`
`).forEach(function(m) {
    o = m.indexOf(":"), c = m.substring(0, o).trim().toLowerCase(), s = m.substring(o + 1).trim(), !(!c || r[c] && Dv[c]) && (c === "set-cookie" ? r[c] ? r[c].push(s) : r[c] = [s] : r[c] = r[c] ? r[c] + ", " + s : s);
  }), r;
}, sh = /* @__PURE__ */ Symbol("internals");
function Wa(u) {
  return u && String(u).trim().toLowerCase();
}
function zi(u) {
  return u === !1 || u == null ? u : z.isArray(u) ? u.map(zi) : String(u);
}
function jv(u) {
  const r = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = c.exec(u); )
    r[s[1]] = s[2];
  return r;
}
const Bv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function gs(u, r, c, s, o) {
  if (z.isFunction(s))
    return s.call(this, r, c);
  if (o && (r = c), !!z.isString(r)) {
    if (z.isString(s))
      return r.indexOf(s) !== -1;
    if (z.isRegExp(s))
      return s.test(r);
  }
}
function Hv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, c, s) => c.toUpperCase() + s);
}
function Lv(u, r) {
  const c = z.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + c, {
      value: function(o, d, m) {
        return this[s].call(this, r, o, d, m);
      },
      configurable: !0
    });
  });
}
let ht = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, c, s) {
    const o = this;
    function d(g, p, y) {
      const b = Wa(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const R = z.findKey(o, b);
      (!R || o[R] === void 0 || y === !0 || y === void 0 && o[R] !== !1) && (o[R || p] = zi(g));
    }
    const m = (g, p) => z.forEach(g, (y, b) => d(y, b, p));
    if (z.isPlainObject(r) || r instanceof this.constructor)
      m(r, c);
    else if (z.isString(r) && (r = r.trim()) && !Bv(r))
      m(Uv(r), c);
    else if (z.isObject(r) && z.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!z.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? z.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      m(g, c);
    } else
      r != null && d(c, r, s);
    return this;
  }
  get(r, c) {
    if (r = Wa(r), r) {
      const s = z.findKey(this, r);
      if (s) {
        const o = this[s];
        if (!c)
          return o;
        if (c === !0)
          return jv(o);
        if (z.isFunction(c))
          return c.call(this, o, s);
        if (z.isRegExp(c))
          return c.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (r = Wa(r), r) {
      const s = z.findKey(this, r);
      return !!(s && this[s] !== void 0 && (!c || gs(this, this[s], s, c)));
    }
    return !1;
  }
  delete(r, c) {
    const s = this;
    let o = !1;
    function d(m) {
      if (m = Wa(m), m) {
        const g = z.findKey(s, m);
        g && (!c || gs(s, s[g], g, c)) && (delete s[g], o = !0);
      }
    }
    return z.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const c = Object.keys(this);
    let s = c.length, o = !1;
    for (; s--; ) {
      const d = c[s];
      (!r || gs(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const c = this, s = {};
    return z.forEach(this, (o, d) => {
      const m = z.findKey(s, d);
      if (m) {
        c[m] = zi(o), delete c[d];
        return;
      }
      const g = r ? Hv(d) : String(d).trim();
      g !== d && delete c[d], c[g] = zi(o), s[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const c = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (s, o) => {
      s != null && s !== !1 && (c[o] = r && z.isArray(s) ? s.join(", ") : s);
    }), c;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, c]) => r + ": " + c).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...c) {
    const s = new this(r);
    return c.forEach((o) => s.set(o)), s;
  }
  static accessor(r) {
    const s = (this[sh] = this[sh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(m) {
      const g = Wa(m);
      s[g] || (Lv(o, m), s[g] = !0);
    }
    return z.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(ht.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(s) {
      this[c] = s;
    }
  };
});
z.freezeMethods(ht);
function ps(u, r) {
  const c = this || uu, s = r || c, o = ht.from(s.headers);
  let d = s.data;
  return z.forEach(u, function(g) {
    d = g.call(c, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function r0(u) {
  return !!(u && u.__CANCEL__);
}
function ea(u, r, c) {
  re.call(this, u ?? "canceled", re.ERR_CANCELED, r, c), this.name = "CanceledError";
}
z.inherits(ea, re, {
  __CANCEL__: !0
});
function c0(u, r, c) {
  const s = c.config.validateStatus;
  !c.status || !s || s(c.status) ? u(c) : r(new re(
    "Request failed with status code " + c.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
function qv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function Yv(u, r) {
  u = u || 10;
  const c = new Array(u), s = new Array(u);
  let o = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = s[d];
    m || (m = y), c[o] = p, s[o] = y;
    let R = d, N = 0;
    for (; R !== o; )
      N += c[R++], R = R % u;
    if (o = (o + 1) % u, o === d && (d = (d + 1) % u), y - m < r)
      return;
    const Y = b && y - b;
    return Y ? Math.round(N * 1e3 / Y) : void 0;
  };
}
function Xv(u, r) {
  let c = 0, s = 1e3 / r, o, d;
  const m = (y, b = Date.now()) => {
    c = b, o = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), R = b - c;
    R >= s ? m(y, b) : (o = y, d || (d = setTimeout(() => {
      d = null, m(o);
    }, s - R)));
  }, () => o && m(o)];
}
const Ui = (u, r, c = 3) => {
  let s = 0;
  const o = Yv(50, 250);
  return Xv((d) => {
    const m = d.loaded, g = d.lengthComputable ? d.total : void 0, p = m - s, y = o(p), b = m <= g;
    s = m;
    const R = {
      loaded: m,
      total: g,
      progress: g ? m / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && b ? (g - m) / y : void 0,
      event: d,
      lengthComputable: g != null,
      [r ? "download" : "upload"]: !0
    };
    u(R);
  }, c);
}, oh = (u, r) => {
  const c = u != null;
  return [(s) => r[0]({
    lengthComputable: c,
    total: u,
    loaded: s
  }), r[1]];
}, fh = (u) => (...r) => z.asap(() => u(...r)), Gv = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (c) => (c = new URL(c, at.origin), u.protocol === c.protocol && u.host === c.host && (r || u.port === c.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Vv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, c, s, o, d, m) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      z.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`), z.isString(s) && g.push(`path=${s}`), z.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), z.isString(m) && g.push(`SameSite=${m}`), document.cookie = g.join("; ");
    },
    read(u) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + u + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
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
function Qv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Zv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function s0(u, r, c) {
  let s = !Qv(r);
  return u && (s || c == !1) ? Zv(u, r) : r;
}
const dh = (u) => u instanceof ht ? { ...u } : u;
function on(u, r) {
  r = r || {};
  const c = {};
  function s(y, b, R, N) {
    return z.isPlainObject(y) && z.isPlainObject(b) ? z.merge.call({ caseless: N }, y, b) : z.isPlainObject(b) ? z.merge({}, b) : z.isArray(b) ? b.slice() : b;
  }
  function o(y, b, R, N) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return s(void 0, y, R, N);
    } else return s(y, b, R, N);
  }
  function d(y, b) {
    if (!z.isUndefined(b))
      return s(void 0, b);
  }
  function m(y, b) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return s(void 0, y);
    } else return s(void 0, b);
  }
  function g(y, b, R) {
    if (R in r)
      return s(y, b);
    if (R in u)
      return s(void 0, y);
  }
  const p = {
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
    validateStatus: g,
    headers: (y, b, R) => o(dh(y), dh(b), R, !0)
  };
  return z.forEach(Object.keys({ ...u, ...r }), function(b) {
    const R = p[b] || o, N = R(u[b], r[b], b);
    z.isUndefined(N) && R !== g || (c[b] = N);
  }), c;
}
const o0 = (u) => {
  const r = on({}, u);
  let { data: c, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: d, headers: m, auth: g } = r;
  if (r.headers = m = ht.from(m), r.url = a0(s0(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && m.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), z.isFormData(c)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (z.isFunction(c.getHeaders)) {
      const p = c.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, R]) => {
        y.includes(b.toLowerCase()) && m.set(b, R);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (s && z.isFunction(s) && (s = s(r)), s || s !== !1 && Gv(r.url))) {
    const p = o && d && Vv.read(d);
    p && m.set(o, p);
  }
  return r;
}, kv = typeof XMLHttpRequest < "u", Kv = kv && function(u) {
  return new Promise(function(c, s) {
    const o = o0(u);
    let d = o.data;
    const m = ht.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, R, N, Y, _;
    function U() {
      Y && Y(), _ && _(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(o.method.toUpperCase(), o.url, !0), D.timeout = o.timeout;
    function V() {
      if (!D)
        return;
      const K = ht.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), W = {
        data: !g || g === "text" || g === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: K,
        config: u,
        request: D
      };
      c0(function(ae) {
        c(ae), U();
      }, function(ae) {
        s(ae), U();
      }, W), D = null;
    }
    "onloadend" in D ? D.onloadend = V : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, D.onabort = function() {
      D && (s(new re("Request aborted", re.ECONNABORTED, u, D)), D = null);
    }, D.onerror = function(te) {
      const W = te && te.message ? te.message : "Network Error", ne = new re(W, re.ERR_NETWORK, u, D);
      ne.event = te || null, s(ne), D = null;
    }, D.ontimeout = function() {
      let te = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const W = o.transitional || u0;
      o.timeoutErrorMessage && (te = o.timeoutErrorMessage), s(new re(
        te,
        W.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        u,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && z.forEach(m.toJSON(), function(te, W) {
      D.setRequestHeader(W, te);
    }), z.isUndefined(o.withCredentials) || (D.withCredentials = !!o.withCredentials), g && g !== "json" && (D.responseType = o.responseType), y && ([N, _] = Ui(y, !0), D.addEventListener("progress", N)), p && D.upload && ([R, Y] = Ui(p), D.upload.addEventListener("progress", R), D.upload.addEventListener("loadend", Y)), (o.cancelToken || o.signal) && (b = (K) => {
      D && (s(!K || K.type ? new ea(null, u, D) : K), D.abort(), D = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const Q = qv(o.url);
    if (Q && at.protocols.indexOf(Q) === -1) {
      s(new re("Unsupported protocol " + Q + ":", re.ERR_BAD_REQUEST, u));
      return;
    }
    D.send(d || null);
  });
}, Jv = (u, r) => {
  const { length: c } = u = u ? u.filter(Boolean) : [];
  if (r || c) {
    let s = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        s.abort(b instanceof re ? b : new ea(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new re(`timeout ${r} of ms exceeded`, re.ETIMEDOUT));
    }, r);
    const g = () => {
      u && (m && clearTimeout(m), m = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = s;
    return p.unsubscribe = () => z.asap(g), p;
  }
}, $v = function* (u, r) {
  let c = u.byteLength;
  if (c < r) {
    yield u;
    return;
  }
  let s = 0, o;
  for (; s < c; )
    o = s + r, yield u.slice(s, o), s = o;
}, Wv = async function* (u, r) {
  for await (const c of Fv(u))
    yield* $v(c, r);
}, Fv = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const r = u.getReader();
  try {
    for (; ; ) {
      const { done: c, value: s } = await r.read();
      if (c)
        break;
      yield s;
    }
  } finally {
    await r.cancel();
  }
}, mh = (u, r, c, s) => {
  const o = Wv(u, r);
  let d = 0, m, g = (p) => {
    m || (m = !0, s && s(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: b } = await o.next();
        if (y) {
          g(), p.close();
          return;
        }
        let R = b.byteLength;
        if (c) {
          let N = d += R;
          c(N);
        }
        p.enqueue(new Uint8Array(b));
      } catch (y) {
        throw g(y), y;
      }
    },
    cancel(p) {
      return g(p), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, hh = 64 * 1024, { isFunction: wi } = z, Iv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(z.global), {
  ReadableStream: yh,
  TextEncoder: gh
} = z.global, ph = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, Pv = (u) => {
  u = z.merge.call({
    skipUndefined: !0
  }, Iv, u);
  const { fetch: r, Request: c, Response: s } = u, o = r ? wi(r) : typeof fetch == "function", d = wi(c), m = wi(s);
  if (!o)
    return !1;
  const g = o && wi(yh), p = o && (typeof gh == "function" ? /* @__PURE__ */ ((_) => (U) => _.encode(U))(new gh()) : async (_) => new Uint8Array(await new c(_).arrayBuffer())), y = d && g && ph(() => {
    let _ = !1;
    const U = new c(at.origin, {
      body: new yh(),
      method: "POST",
      get duplex() {
        return _ = !0, "half";
      }
    }).headers.has("Content-Type");
    return _ && !U;
  }), b = m && g && ph(() => z.isReadableStream(new s("").body)), R = {
    stream: b && ((_) => _.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((_) => {
    !R[_] && (R[_] = (U, D) => {
      let V = U && U[_];
      if (V)
        return V.call(U);
      throw new re(`Response type '${_}' is not supported`, re.ERR_NOT_SUPPORT, D);
    });
  });
  const N = async (_) => {
    if (_ == null)
      return 0;
    if (z.isBlob(_))
      return _.size;
    if (z.isSpecCompliantForm(_))
      return (await new c(at.origin, {
        method: "POST",
        body: _
      }).arrayBuffer()).byteLength;
    if (z.isArrayBufferView(_) || z.isArrayBuffer(_))
      return _.byteLength;
    if (z.isURLSearchParams(_) && (_ = _ + ""), z.isString(_))
      return (await p(_)).byteLength;
  }, Y = async (_, U) => {
    const D = z.toFiniteNumber(_.getContentLength());
    return D ?? N(U);
  };
  return async (_) => {
    let {
      url: U,
      method: D,
      data: V,
      signal: Q,
      cancelToken: K,
      timeout: te,
      onDownloadProgress: W,
      onUploadProgress: ne,
      responseType: ae,
      headers: F,
      withCredentials: Se = "same-origin",
      fetchOptions: xe
    } = o0(_), lt = r || fetch;
    ae = ae ? (ae + "").toLowerCase() : "text";
    let pe = Jv([Q, K && K.toAbortSignal()], te), Le = null;
    const je = pe && pe.unsubscribe && (() => {
      pe.unsubscribe();
    });
    let Je;
    try {
      if (ne && y && D !== "get" && D !== "head" && (Je = await Y(F, V)) !== 0) {
        let Ae = new c(U, {
          method: "POST",
          body: V,
          duplex: "half"
        }), S;
        if (z.isFormData(V) && (S = Ae.headers.get("content-type")) && F.setContentType(S), Ae.body) {
          const [H, Z] = oh(
            Je,
            Ui(fh(ne))
          );
          V = mh(Ae.body, hh, H, Z);
        }
      }
      z.isString(Se) || (Se = Se ? "include" : "omit");
      const X = d && "credentials" in c.prototype, q = {
        ...xe,
        signal: pe,
        method: D.toUpperCase(),
        headers: F.normalize().toJSON(),
        body: V,
        duplex: "half",
        credentials: X ? Se : void 0
      };
      Le = d && new c(U, q);
      let G = await (d ? lt(Le, xe) : lt(U, q));
      const I = b && (ae === "stream" || ae === "response");
      if (b && (W || I && je)) {
        const Ae = {};
        ["status", "statusText", "headers"].forEach((J) => {
          Ae[J] = G[J];
        });
        const S = z.toFiniteNumber(G.headers.get("content-length")), [H, Z] = W && oh(
          S,
          Ui(fh(W), !0)
        ) || [];
        G = new s(
          mh(G.body, hh, H, () => {
            Z && Z(), je && je();
          }),
          Ae
        );
      }
      ae = ae || "text";
      let se = await R[z.findKey(R, ae) || "text"](G, _);
      return !I && je && je(), await new Promise((Ae, S) => {
        c0(Ae, S, {
          data: se,
          headers: ht.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: _,
          request: Le
        });
      });
    } catch (X) {
      throw je && je(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, _, Le),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, _, Le);
    }
  };
}, eb = /* @__PURE__ */ new Map(), f0 = (u) => {
  let r = u && u.env || {};
  const { fetch: c, Request: s, Response: o } = r, d = [
    s,
    o,
    c
  ];
  let m = d.length, g = m, p, y, b = eb;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : Pv(r)), b = y;
  return y;
};
f0();
const Hs = {
  http: pv,
  xhr: Kv,
  fetch: {
    get: f0
  }
};
z.forEach(Hs, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const vh = (u) => `- ${u}`, tb = (u) => z.isFunction(u) || u === null || u === !1;
function lb(u, r) {
  u = z.isArray(u) ? u : [u];
  const { length: c } = u;
  let s, o;
  const d = {};
  for (let m = 0; m < c; m++) {
    s = u[m];
    let g;
    if (o = s, !tb(s) && (o = Hs[(g = String(s)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (z.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + m] = o;
  }
  if (!o) {
    const m = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = c ? m.length > 1 ? `since :
` + m.map(vh).join(`
`) : " " + vh(m[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const d0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: lb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Hs
};
function vs(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new ea(null, u);
}
function bh(u) {
  return vs(u), u.headers = ht.from(u.headers), u.data = ps.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), d0.getAdapter(u.adapter || uu.adapter, u)(u).then(function(s) {
    return vs(u), s.data = ps.call(
      u,
      u.transformResponse,
      s
    ), s.headers = ht.from(s.headers), s;
  }, function(s) {
    return r0(s) || (vs(u), s && s.response && (s.response.data = ps.call(
      u,
      u.transformResponse,
      s.response
    ), s.response.headers = ht.from(s.response.headers))), Promise.reject(s);
  });
}
const m0 = "1.13.2", Gi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Gi[u] = function(s) {
    return typeof s === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const Sh = {};
Gi.transitional = function(r, c, s) {
  function o(d, m) {
    return "[Axios v" + m0 + "] Transitional option '" + d + "'" + m + (s ? ". " + s : "");
  }
  return (d, m, g) => {
    if (r === !1)
      throw new re(
        o(m, " has been removed" + (c ? " in " + c : "")),
        re.ERR_DEPRECATED
      );
    return c && !Sh[m] && (Sh[m] = !0, console.warn(
      o(
        m,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), r ? r(d, m, g) : !0;
  };
};
Gi.spelling = function(r) {
  return (c, s) => (console.warn(`${s} is likely a misspelling of ${r}`), !0);
};
function nb(u, r, c) {
  if (typeof u != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let o = s.length;
  for (; o-- > 0; ) {
    const d = s[o], m = r[d];
    if (m) {
      const g = u[d], p = g === void 0 || m(g, d, u);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Ni = {
  assertOptions: nb,
  validators: Gi
}, kt = Ni.validators;
let sn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new ch(),
      response: new ch()
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
  async request(r, c) {
    try {
      return await this._request(r, c);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const d = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? d && !String(s.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + d) : s.stack = d;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(r, c) {
    typeof r == "string" ? (c = c || {}, c.url = r) : c = r || {}, c = on(this.defaults, c);
    const { transitional: s, paramsSerializer: o, headers: d } = c;
    s !== void 0 && Ni.assertOptions(s, {
      silentJSONParsing: kt.transitional(kt.boolean),
      forcedJSONParsing: kt.transitional(kt.boolean),
      clarifyTimeoutError: kt.transitional(kt.boolean)
    }, !1), o != null && (z.isFunction(o) ? c.paramsSerializer = {
      serialize: o
    } : Ni.assertOptions(o, {
      encode: kt.function,
      serialize: kt.function
    }, !0)), c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = !0), Ni.assertOptions(c, {
      baseUrl: kt.spelling("baseURL"),
      withXsrfToken: kt.spelling("withXSRFToken")
    }, !0), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let m = d && z.merge(
      d.common,
      d[c.method]
    );
    d && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete d[_];
      }
    ), c.headers = ht.concat(m, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(U) {
      typeof U.runWhen == "function" && U.runWhen(c) === !1 || (p = p && U.synchronous, g.unshift(U.fulfilled, U.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(U) {
      y.push(U.fulfilled, U.rejected);
    });
    let b, R = 0, N;
    if (!p) {
      const _ = [bh.bind(this), void 0];
      for (_.unshift(...g), _.push(...y), N = _.length, b = Promise.resolve(c); R < N; )
        b = b.then(_[R++], _[R++]);
      return b;
    }
    N = g.length;
    let Y = c;
    for (; R < N; ) {
      const _ = g[R++], U = g[R++];
      try {
        Y = _(Y);
      } catch (D) {
        U.call(this, D);
        break;
      }
    }
    try {
      b = bh.call(this, Y);
    } catch (_) {
      return Promise.reject(_);
    }
    for (R = 0, N = y.length; R < N; )
      b = b.then(y[R++], y[R++]);
    return b;
  }
  getUri(r) {
    r = on(this.defaults, r);
    const c = s0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return a0(c, r.params, r.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function(r) {
  sn.prototype[r] = function(c, s) {
    return this.request(on(s || {}, {
      method: r,
      url: c,
      data: (s || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(r) {
  function c(s) {
    return function(d, m, g) {
      return this.request(on(g || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  sn.prototype[r] = c(), sn.prototype[r + "Form"] = c(!0);
});
let ab = class h0 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function(d) {
      c = d;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let d = s._listeners.length;
      for (; d-- > 0; )
        s._listeners[d](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let d;
      const m = new Promise((g) => {
        s.subscribe(g), d = g;
      }).then(o);
      return m.cancel = function() {
        s.unsubscribe(d);
      }, m;
    }, r(function(d, m, g) {
      s.reason || (s.reason = new ea(d, m, g), c(s.reason));
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
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const c = this._listeners.indexOf(r);
    c !== -1 && this._listeners.splice(c, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), c = (s) => {
      r.abort(s);
    };
    return this.subscribe(c), r.signal.unsubscribe = () => this.unsubscribe(c), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new h0(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function ub(u) {
  return function(c) {
    return u.apply(null, c);
  };
}
function ib(u) {
  return z.isObject(u) && u.isAxiosError === !0;
}
const As = {
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
Object.entries(As).forEach(([u, r]) => {
  As[r] = u;
});
function y0(u) {
  const r = new sn(u), c = kh(sn.prototype.request, r);
  return z.extend(c, sn.prototype, r, { allOwnKeys: !0 }), z.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(o) {
    return y0(on(u, o));
  }, c;
}
const De = y0(uu);
De.Axios = sn;
De.CanceledError = ea;
De.CancelToken = ab;
De.isCancel = r0;
De.VERSION = m0;
De.toFormData = Xi;
De.AxiosError = re;
De.Cancel = De.CanceledError;
De.all = function(r) {
  return Promise.all(r);
};
De.spread = ub;
De.isAxiosError = ib;
De.mergeConfig = on;
De.AxiosHeaders = ht;
De.formToJSON = (u) => i0(z.isHTMLForm(u) ? new FormData(u) : u);
De.getAdapter = d0.getAdapter;
De.HttpStatusCode = As;
De.default = De;
const {
  Axios: xb,
  AxiosError: Rb,
  CanceledError: Tb,
  isCancel: Ab,
  CancelToken: wb,
  VERSION: Cb,
  all: _b,
  Cancel: Ob,
  isAxiosError: zb,
  spread: Nb,
  toFormData: Mb,
  AxiosHeaders: Db,
  HttpStatusCode: Ub,
  formToJSON: jb,
  getAdapter: Bb,
  mergeConfig: Hb
} = De, rb = "https://dev-demo-env.colibrilearning.com", iu = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${rb}${r}`;
}, cb = async (u, r) => {
  const c = iu("api/auth"), s = { username: u, password: r };
  try {
    return (await De.post(c, s)).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, sb = async (u) => {
  const r = iu("api/register");
  try {
    return (await De.post(r, u)).data;
  } catch (c) {
    throw console.error("Error during registration:", c), c.response?.data?.details?.errorMessage ? new Error(c.response.data.details.errorMessage) : c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.details ? new Error(c.response.data.details) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 500 ? new Error("Registration failed. Please try again.") : c.message ? new Error(c.message) : new Error("Registration failed");
  }
}, Ls = async (u) => {
  const r = iu("api/check-email");
  try {
    return (await De.post(r, { email: u })).data;
  } catch (c) {
    return console.error("Error checking email:", c), c.response?.data ? c.response.data : { exists: !1 };
  }
}, Eh = async (u) => {
  const r = iu("api/forgot-password"), c = { email: u };
  try {
    return (await De.post(r, c)).data;
  } catch (s) {
    throw console.error("Error sending password reset:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 404 ? new Error("We couldn't find an account with that email.") : s.message ? new Error(s.message) : new Error("Failed to send password reset link");
  }
}, ob = async (u) => {
  const r = iu("api/refresh"), c = { refresh_token: u };
  try {
    return (await De.post(r, c)).data;
  } catch (s) {
    throw console.error("Error during token refresh:", s), s;
  }
}, bs = (u, r) => {
  if (r || (r = localStorage.getItem("x_credential") || localStorage.getItem("X-Credential")), !r)
    return u;
  try {
    const c = new URL(u);
    return c.searchParams.set("xcred", r), c.toString();
  } catch {
    const s = u.includes("?") ? "&" : "?";
    return `${u}${s}xcred=${encodeURIComponent(r)}`;
  }
}, fb = (u) => {
  try {
    const r = document.cookie.split(";").find((m) => m.trim().startsWith("X-Credential=")), c = document.cookie.split(";").find((m) => m.trim().startsWith("access_token="));
    let s = null, o = !1;
    if (c && (s = c.split("=")[1] || null), r && (o = !0), s || (s = localStorage.getItem("access_token")), o || (o = !!localStorage.getItem("x_credential")), !s || !o)
      return !1;
    const d = localStorage.getItem("access_token_expires");
    if (d && Date.now() >= parseInt(d))
      return !1;
    try {
      const m = Ds(s), g = Math.floor(Date.now() / 1e3);
      return !(!m.exp || g >= m.exp);
    } catch (m) {
      return console.error("[checkTokenAndRedirect] Token decode error:", m), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, db = () => {
  try {
    const u = localStorage.getItem("refresh_token"), r = localStorage.getItem("refresh_token_time");
    if (!u || !r)
      return !1;
    const c = 10080 * 60 * 1e3;
    return Date.now() - parseInt(r) < c;
  } catch (u) {
    return console.error("[isRefreshTokenValid] Error:", u), !1;
  }
}, g0 = async (u, r, c = !0) => {
  const s = await cb(u, r), { tokens: o, userinfo: d, x_credential: m } = s;
  if (o.access_token) {
    const g = Ds(o.access_token), p = (g.exp || 0) - Math.floor(Date.now() / 1e3);
    Di("access_token", o.access_token, p, !0);
    const y = m || g.x_credentials;
    y && Di("X-Credential", y, p, !1), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("access_token", o.access_token), localStorage.setItem("access_token_expires", (Date.now() + p * 1e3).toString()), y && localStorage.setItem("x_credential", y), d && localStorage.setItem("user_info", JSON.stringify({
      email: d.email,
      name: d.name || `${d.given_name || ""} ${d.family_name || ""}`.trim(),
      studentId: d.studentId || d.student_id
    })), c && o.refresh_token ? (localStorage.setItem("refresh_token", o.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return o;
}, mb = ({
  type: u,
  message: r,
  duration: c = 5e3,
  onClose: s,
  className: o = ""
}) => {
  const [d, m] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => m(!0), 10);
    const Y = setTimeout(() => {
      y();
    }, c);
    return () => clearTimeout(Y);
  }, [c]);
  const y = () => {
    p(!0), setTimeout(() => {
      m(!1), s();
    }, 300);
  }, b = () => {
    switch (u) {
      case "success":
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case "warning":
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case "error":
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, R = () => {
    switch (u) {
      case "success":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, N = b();
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ x.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${N.bg}`, children: [
        /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${N.icon}`, children: R() }),
        /* @__PURE__ */ x.jsx("div", { className: `ml-3! flex-1! ${N.text}`, children: /* @__PURE__ */ x.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${N.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ x.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, Vi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", hb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  onSignIn: s,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(m), [y, b] = A.useState(""), [R, N] = A.useState(""), [Y, _] = A.useState(""), [U, D] = A.useState(!1), [V, Q] = A.useState(""), [K, te] = A.useState(""), [W, ne] = A.useState(!1), [ae, F] = A.useState(!1), [Se, xe] = A.useState(!1), [lt, pe] = A.useState(!1), [Le, je] = A.useState(!1), [Je, X] = A.useState(!1), [q, G] = A.useState(""), [I, se] = A.useState("info"), Ae = A.useRef(null), S = A.useRef(null), H = (P) => P ? P.length < 9 || P.length > 15 ? { isValid: !1, error: "Password must be 9-15 characters long" } : /[A-Z]/.test(P) ? /[a-z]/.test(P) ? /[0-9]/.test(P) ? /[!@#$%^&*._-]/.test(P) ? /^[A-Za-z0-9!@#$%^&*._-]+$/.test(P) ? { isValid: !0, error: "" } : { isValid: !1, error: "Password contains invalid characters. Only !@#$%^&*._- are allowed" } : { isValid: !1, error: "Password must contain at least one special character (!@#$%^&*._-)" } : { isValid: !1, error: "Password must contain at least one number" } : { isValid: !1, error: "Password must contain at least one lowercase letter" } : { isValid: !1, error: "Password must contain at least one uppercase letter" } : { isValid: !1, error: "Password is required" };
  A.useEffect(() => {
    if (S.current && clearTimeout(S.current), !g) {
      xe(!1), pe(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      xe(!1), pe(!1);
      return;
    }
    return S.current = setTimeout(async () => {
      je(!0);
      try {
        (await Ls(g)).exists ? (pe(!0), xe(!0)) : (pe(!1), xe(!1));
      } catch (ze) {
        console.error("[CreateAccount] Email check failed:", ze), pe(!1), xe(!1);
      } finally {
        je(!1);
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [g]);
  const J = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const P = (ze) => {
      ze.key === "Escape" && c();
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [c]);
  const oe = (P) => {
    P.target === Ae.current && c();
  }, fe = async (P) => {
    if (P.preventDefault(), F(!0), !g || !y || !R) {
      r("Please fill in all required fields");
      return;
    }
    const ze = H(Y);
    if (!ze.isValid) {
      te(ze.error), r(ze.error), D(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Q("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    D(!0), Q(""), G("");
    try {
      const Bt = g.split("@")[0], Kt = await sb({
        username: Bt,
        email: g,
        firstName: y,
        lastName: R,
        password: Y
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Kt.message
      );
      try {
        const Jt = await g0(
          g,
          Y,
          Je
        );
        u(Jt);
      } catch (Jt) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Jt
        );
        const ru = Jt instanceof Error ? Jt.message : "Auto-login failed";
        r(ru);
      }
    } catch (Bt) {
      console.error("[CreateAccount] Registration failed:", Bt);
      const Kt = Bt instanceof Error ? Bt.message : "Registration failed";
      G(Kt), se("error"), r(Kt);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    q && /* @__PURE__ */ x.jsx(
      mb,
      {
        type: I,
        message: q,
        duration: 5e3,
        onClose: () => G("")
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Ae,
        onMouseDown: oe,
        children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: c,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
              type: "button",
              children: /* @__PURE__ */ x.jsx(
                "svg",
                {
                  className: "w-6! h-6!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ x.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M6 18L18 6M6 6l12 12"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ x.jsxs("div", { className: "mb-6! text-center!", children: [
            /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: o }),
            /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ x.jsxs("form", { onSubmit: fe, className: "space-y-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
              rn,
              {
                label: "Email Address",
                id: "email",
                type: "email",
                value: g,
                onChange: (P) => {
                  p(P.target.value), Q("");
                },
                placeholder: "Enter email address",
                disabled: U,
                className: "w-full!",
                autoComplete: "email",
                error: ae && !g ? "Required" : V || "",
                endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                  Le && /* @__PURE__ */ x.jsx(Zh, {}),
                  !Le && !lt && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ x.jsx(
                    "img",
                    {
                      src: Vi,
                      alt: "available",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Se && lt && /* @__PURE__ */ x.jsx(
              Ms,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  xe(!1), s(g);
                },
                onClose: () => xe(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ x.jsx(
                rn,
                {
                  label: "First Name",
                  id: "firstName",
                  type: "text",
                  value: y,
                  onChange: (P) => b(P.target.value),
                  placeholder: "First Name",
                  disabled: U,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ae && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ x.jsx(
                rn,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: R,
                  onChange: (P) => N(P.target.value),
                  placeholder: "Last Name",
                  disabled: U,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ae && !R ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
              rn,
              {
                label: "Password",
                id: "password",
                type: W ? "text" : "password",
                value: Y,
                onChange: (P) => {
                  _(P.target.value), te("");
                },
                placeholder: "Enter Password...",
                disabled: U,
                className: "w-full!",
                autoComplete: "new-password",
                error: K,
                endIcon: /* @__PURE__ */ x.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => ne(!W),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: W ? /* @__PURE__ */ x.jsx(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ x.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          }
                        )
                      }
                    ) : /* @__PURE__ */ x.jsxs(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ x.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }
                          ),
                          /* @__PURE__ */ x.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            }
                          )
                        ]
                      }
                    )
                  }
                )
              }
            ) }) }),
            /* @__PURE__ */ x.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: Je,
                  onChange: (P) => X(P.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ x.jsx(
              Hi,
              {
                type: "submit",
                disabled: U || lt || !J,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: U ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ x.jsxs(
                    "svg",
                    {
                      className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ x.jsx(
                          "circle",
                          {
                            className: "opacity-25!",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                          }
                        ),
                        /* @__PURE__ */ x.jsx(
                          "path",
                          {
                            className: "opacity-75!",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          }
                        )
                      ]
                    }
                  ),
                  "Creating Account..."
                ] }) : "Create Account"
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
              /* @__PURE__ */ x.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ x.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
              /* @__PURE__ */ x.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ x.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ x.jsx(
              "button",
              {
                type: "button",
                onClick: () => s(g),
                disabled: U,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ x.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, yb = ({
  email: u,
  loading: r,
  onResendLink: c,
  onBack: s,
  onClose: o
}) => {
  const d = A.useRef(null);
  A.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && o();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [o]);
  const m = (g) => {
    g.target === d.current && o();
  };
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: m,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: o,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ x.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ x.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ x.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ x.jsx(
          "img",
          {
            src: Vi,
            alt: "Success",
            className: "w-16! h-16!"
          }
        ) }),
        /* @__PURE__ */ x.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ x.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ x.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: u }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ x.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ x.jsx(
          Hi,
          {
            type: "button",
            onClick: c,
            disabled: r,
            className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
            children: r ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
              /* @__PURE__ */ x.jsxs(
                "svg",
                {
                  className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ x.jsx(
                      "circle",
                      {
                        className: "opacity-25!",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                      }
                    ),
                    /* @__PURE__ */ x.jsx(
                      "path",
                      {
                        className: "opacity-75!",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      }
                    )
                  ]
                }
              ),
              "Sending..."
            ] }) : "Resend link"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "button",
          {
            type: "button",
            onClick: s,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
            children: /* @__PURE__ */ x.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, gb = ({
  email: u,
  onBack: r,
  handleClose: c
}) => {
  const [s, o] = A.useState(u || ""), [d, m] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [R, N] = A.useState(!1), [Y, _] = A.useState(!1), [U, D] = A.useState(!1), V = A.useRef(null);
  A.useEffect(() => {
    const W = (ne) => {
      ne.key === "Escape" && c();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [c]), A.useEffect(() => {
    const ne = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    if (D(ne), !ne || !s) {
      _(!1);
      return;
    }
    const ae = setTimeout(async () => {
      N(!0);
      try {
        const F = await Ls(s);
        console.log("[ResetPassword] Email check response:", F), _(F.exists), console.log("[ResetPassword] Email exists:", F.exists);
      } catch (F) {
        console.error("[ResetPassword] Error checking email:", F), _(!1);
      } finally {
        N(!1);
      }
    }, 500);
    return () => clearTimeout(ae);
  }, [s]);
  const Q = (W) => {
    W.target === V.current && c();
  }, K = async (W) => {
    if (W.preventDefault(), !s) {
      b("Email is required");
      return;
    }
    m(!0), b("");
    try {
      await Eh(s), console.log("[ResetPassword] Reset link sent to:", s), p(!0);
    } catch (ne) {
      console.error("[ResetPassword] Failed to send reset link:", ne);
      const ae = ne instanceof Error ? ne.message : "Failed to send reset link. Please try again.";
      b(ae);
    } finally {
      m(!1);
    }
  }, te = async () => {
    m(!0), b("");
    try {
      await Eh(s), console.log("[ResetPassword] Reset link resent to:", s);
    } catch (W) {
      console.error("[ResetPassword] Failed to resend reset link:", W), p(!1);
      const ne = W instanceof Error ? W.message : "Failed to resend reset link. Please try again.";
      b(ne);
    } finally {
      m(!1);
    }
  };
  return g ? /* @__PURE__ */ x.jsx(
    yb,
    {
      email: s,
      loading: d,
      onResendLink: te,
      onBack: r,
      onClose: c
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: V,
      onMouseDown: Q,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: c,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ x.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ x.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-2!", children: "Reset your password" }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ x.jsxs("form", { onSubmit: K, className: "space-y-4!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            rn,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: s,
              onChange: (W) => {
                o(W.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                R && /* @__PURE__ */ x.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !R && Y && U && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: Vi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          y && /* @__PURE__ */ x.jsx(
            Ms,
            {
              type: "error",
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ x.jsx(
            Hi,
            {
              type: "submit",
              disabled: d || !s || !U || !Y,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: s, isEmailValid: U, emailExists: Y });
              },
              children: d ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ x.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ x.jsx(
                        "circle",
                        {
                          className: "opacity-25!",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4"
                        }
                      ),
                      /* @__PURE__ */ x.jsx(
                        "path",
                        {
                          className: "opacity-75!",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }
                      )
                    ]
                  }
                ),
                "Sending..."
              ] }) : "Send reset link"
            }
          ),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              type: "button",
              onClick: r,
              disabled: d,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! mt-4!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Back to sign in" })
            }
          )
        ] })
      ] })
    }
  );
}, pb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  authority: s,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(m), [y, b] = A.useState(""), [R, N] = A.useState(!1), [Y, _] = A.useState(!1), [U, D] = A.useState(""), [V, Q] = A.useState(!1), [K, te] = A.useState(!1), [W, ne] = A.useState(!1), [ae, F] = A.useState(!1), [Se, xe] = A.useState(!1), [lt, pe] = A.useState(!1), Le = A.useRef(null), je = A.useRef(null);
  A.useEffect(() => {
    if (je.current && clearTimeout(je.current), !g) {
      F(!1), pe(!1);
      return;
    }
    const I = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!g.includes("@")) {
      F(!0), pe(!1);
      return;
    }
    if (!I.test(g)) {
      F(!1), pe(!1);
      return;
    }
    return je.current = setTimeout(async () => {
      xe(!0);
      try {
        (await Ls(g)).exists ? (F(!0), pe(!1)) : (F(!1), pe(!0));
      } catch (se) {
        console.error("[EmbeddedLogin] Email check failed:", se), F(!0), pe(!1);
      } finally {
        xe(!1);
      }
    }, 500), () => {
      je.current && clearTimeout(je.current);
    };
  }, [g]);
  const X = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const I = (se) => {
      se.key === "Escape" && c();
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [c]);
  const q = (I) => {
    I.target === Le.current && c();
  }, G = async (I) => {
    if (I.preventDefault(), !g || !y) {
      D("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    N(!0), D("");
    try {
      const se = await g0(g, y, V);
      u(se);
    } catch (se) {
      console.error("[EmbeddedLogin] Login failed:", se);
      const Ae = se instanceof Error ? se.message : "Authentication failed";
      D(Ae), r(Ae);
    } finally {
      N(!1);
    }
  };
  return W ? /* @__PURE__ */ x.jsx(
    gb,
    {
      email: g,
      onBack: () => ne(!1),
      handleClose: c
    }
  ) : K ? /* @__PURE__ */ x.jsx(
    hb,
    {
      onSuccess: (I) => {
        te(!1), u(I);
      },
      onError: r,
      handleClose: c,
      onSignIn: (I) => {
        te(!1), I && p(I);
      },
      authority: s,
      initialEmail: g
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Le,
      onMouseDown: q,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: c,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ x.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ x.jsx(
                  "path",
                  {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M6 18L18 6M6 6l12 12"
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ x.jsxs("form", { onSubmit: G, className: "space-y-2!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            rn,
            {
              label: "Email or Username",
              id: "email",
              type: "text",
              value: g,
              onChange: (I) => p(I.target.value),
              placeholder: "Enter email or username",
              disabled: R,
              className: "w-full!",
              autoComplete: "username",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                Se && /* @__PURE__ */ x.jsx(Zh, {}),
                !Se && ae && X && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: Vi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          lt && !ae && X && /* @__PURE__ */ x.jsx(
            Ms,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                pe(!1), te(!0);
              },
              onClose: () => pe(!1),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
            rn,
            {
              label: "Password",
              id: "password",
              type: Y ? "text" : "password",
              value: y,
              onChange: (I) => {
                b(I.target.value), D("");
              },
              placeholder: "Enter Password...",
              disabled: R,
              className: "w-full!",
              autoComplete: "current-password",
              error: U,
              endIcon: /* @__PURE__ */ x.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => _(!Y),
                  className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                  tabIndex: -1,
                  children: Y ? /* @__PURE__ */ x.jsx(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ x.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }
                      )
                    }
                  ) : /* @__PURE__ */ x.jsxs(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ x.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }
                        ),
                        /* @__PURE__ */ x.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          }
                        )
                      ]
                    }
                  )
                }
              )
            }
          ) }) }),
          /* @__PURE__ */ x.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ x.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: V,
                  onChange: (I) => Q(I.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            /* @__PURE__ */ x.jsx(
              "a",
              {
                href: "#",
                className: "text-[--button-link-text]-700! hover:text-[--button-link-text]-700! no-underline!",
                onClick: (I) => {
                  I.preventDefault(), ne(!0);
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            Hi,
            {
              type: "submit",
              disabled: R || !g,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: R ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ x.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ x.jsx(
                        "circle",
                        {
                          className: "opacity-25!",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          strokeWidth: "4"
                        }
                      ),
                      /* @__PURE__ */ x.jsx(
                        "path",
                        {
                          className: "opacity-75!",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }
                      )
                    ]
                  }
                ),
                "Signing in..."
              ] }) : "Sign In"
            }
          ),
          /* @__PURE__ */ x.jsxs("div", { className: "relative! mt-4! mb-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ x.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
            /* @__PURE__ */ x.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ x.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
          ] }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              type: "button",
              onClick: () => te(!0),
              disabled: R,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, vb = (u) => {
  const { authority: r, subsidiary: c, onRedirect: s } = u, [o, d] = A.useState(!1);
  A.useEffect(() => {
    (async () => {
      try {
        if (fb()) {
          d(!0), u.redirectUrl && u.autoRedirection && (window.location.href = bs(u.redirectUrl));
          return;
        }
        if (db()) {
          const N = localStorage.getItem("refresh_token");
          if (N) {
            console.log("[App] Attempting auto-login with refresh token");
            const Y = await ob(N);
            if (Y && Y.tokens && Y.tokens.access_token) {
              const _ = Y.tokens, U = Ds(_.access_token), D = (U.exp || 0) - Math.floor(Date.now() / 1e3);
              Di("access_token", _.access_token, D, !0), U.x_credentials && Di("X-Credential", U.x_credentials, D, !1), _.refresh_token && (localStorage.setItem("refresh_token", _.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const V = u.redirectUrl || nh();
              if (s) {
                const Q = {
                  access_token: _.access_token,
                  userInfo: {
                    studentId: U.studentId,
                    sub: U.sub,
                    email_verified: U.email_verified,
                    x_credentials: U.x_credentials,
                    name: U.name,
                    preferred_username: U.preferred_username,
                    given_name: U.given_name,
                    family_name: U.family_name,
                    email: U.email
                  }
                };
                s(V, Q);
              }
              u.redirectUrl && u.autoRedirection && (window.location.href = bs(u.redirectUrl, U.x_credentials));
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (b) {
        console.error("[App] Auto-login failed:", b), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [u.redirectUrl]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), c && localStorage.setItem("subsidiary", c);
  }, [r, c]);
  const m = (y) => {
    u.handleClose && u.handleClose(), d(!0);
    const b = y?.userInfo?.x_credentials || y?.x_credentials, R = u.redirectUrl || nh();
    s && s(R, y), u.redirectUrl && u.autoRedirection && setTimeout(() => {
      window.location.href = bs(u.redirectUrl, b);
    }, 100);
  }, g = (y) => {
    console.log("[App] Embedded login error:", y);
  }, p = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ x.jsx(Yg, { children: /* @__PURE__ */ x.jsx(qh, { path: "*", element: /* @__PURE__ */ x.jsx(x.Fragment, { children: !o && u.showLogin && /* @__PURE__ */ x.jsx(
    pb,
    {
      onSuccess: m,
      onError: g,
      handleClose: p,
      authority: r,
      title: u.loginTitle,
      subtitle: u.loginSubtitle
    }
  ) }) }) });
};
class bb {
  cdnBaseUrl;
  currentBrand = null;
  styleElement = null;
  shadowRoot = null;
  constructor(r = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", c) {
    this.cdnBaseUrl = r.replace(/\/$/, ""), this.shadowRoot = c || null;
  }
  /**
   * Fetch all available brands from CDN
   */
  async getBrands() {
    try {
      const r = await fetch(`${this.cdnBaseUrl}/brands.json`);
      if (!r.ok)
        throw new Error(`Failed to fetch brands: ${r.statusText}`);
      return await r.json();
    } catch (r) {
      throw console.error("[ThemeWidget] Error fetching brands:", r), r;
    }
  }
  /**
   * Auto-detect brand based on current URL domain
   */
  async detectBrandFromDomain() {
    try {
      const r = await this.getBrands(), c = window.location.hostname, s = r.find(
        (o) => c.includes(o.domain) || o.domain.includes(c)
      );
      return s ? (console.log(`[ThemeWidget] Auto-detected brand from domain: ${s.name} (${s.token})`), localStorage.setItem("subsidiary", s.token), s.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${c}`), null);
    } catch (r) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", r), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(r) {
    try {
      const s = (await this.getBrands()).find(
        (p) => p.folder.toLowerCase() === r.toLowerCase() || p.token.toLowerCase() === r.toLowerCase()
      );
      if (!s) {
        console.warn(
          `[ThemeWidget] Brand not found: ${r}. Using default theme.`
        );
        return;
      }
      localStorage.setItem("subsidiary", s.token);
      const o = `${this.cdnBaseUrl}/${s.folder}/theme.json`, d = await fetch(o);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const m = await d.json(), g = document.documentElement;
      m.styles.forEach((p) => {
        let y = p.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), g.style.setProperty(`--${p.name}`, y);
      }), this.currentBrand = s, console.log(`[ThemeWidget] Theme loaded for brand: ${s.name}`);
    } catch (c) {
      throw console.error("[ThemeWidget] Error loading theme:", c), c;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const c = r.styles.map((o) => {
      const d = this.formatStyleValue(o.value);
      return `  --${o.name}: ${d};`;
    }).join(`
`), s = `@theme {
${c}
}

:host {
${c}
}`;
    this.removeTheme(), this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-theme-widget", "true"), this.styleElement.textContent = s, this.shadowRoot ? this.shadowRoot.appendChild(this.styleElement) : document.head.appendChild(this.styleElement);
  }
  /**
   * Format style values to proper CSS format
   */
  formatStyleValue(r) {
    return /^#?[0-9A-Fa-f]{6}$/.test(r) ? r.startsWith("#") ? r : `#${r}` : /^\d+\s+\d+\s+\d+$/.test(r) ? `rgba(${r.replace(/\s+/g, ", ")}, 1)` : r;
  }
  /**
   * Remove currently applied theme
   */
  removeTheme() {
    this.styleElement && (this.styleElement.remove(), this.styleElement = null), this.currentBrand = null;
  }
  /**
   * Get currently loaded brand
   */
  getCurrentBrand() {
    return this.currentBrand;
  }
}
async function xh(u) {
  const r = new bb(u.cdnBaseUrl, u.shadowRoot), c = u.brandFolder || u.brandToken;
  if (c)
    await r.loadTheme(c);
  else if (u.autoDetect) {
    const s = await r.detectBrandFromDomain();
    s && await r.loadTheme(s);
  }
  return r;
}
{
  class u extends HTMLElement {
    root;
    mountPoint;
    _shadowRoot;
    static get observedAttributes() {
      return ["authority", "subsidiary", "redirectUrl", "loginTitle", "loginSubtitle", "show-login", "custom-primary-color", "customPrimaryColor", "auto-redirection", "autoRedirection"];
    }
    // Store function props
    onRedirect;
    onClose;
    onLogout;
    connectedCallback() {
      if (!this._shadowRoot) {
        this._shadowRoot = this.attachShadow({ mode: "open" }), typeof window.injectWidgetStyles == "function" && window.injectWidgetStyles(this._shadowRoot), this.applyCustomPrimaryColor();
        const c = this.getAttribute("subsidiary");
        c && c.trim() !== "" ? this.loadTheme(c) : this.loadThemeFromDomain();
      }
      this.mountPoint = document.createElement("div"), this._shadowRoot.appendChild(this.mountPoint), this.render();
    }
    applyCustomPrimaryColor() {
      const c = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (c && c.trim() !== "") {
        console.log(`[Widget] Applying custom primary color: ${c}`);
        const s = document.createElement("style");
        let o = c.trim();
        /^[0-9A-Fa-f]{6}$/.test(o) && (o = `#${o}`), s.textContent = `
          :host {
            --color-primary: ${o};
            --color-primary-light: ${o};
            --button-primary-bg: ${o};
            --button-primary-bg-hover: ${o};
            --color-border-focus: ${o};
          }
          
          /* Apply to any elements using primary color */
          * {
            --color-primary: ${o} !important;
          }
        `, this._shadowRoot.appendChild(s), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(c) {
      try {
        console.log(`[Widget] Loading theme for subsidiary: ${c}`), await xh({
          brandFolder: c,
          shadowRoot: this._shadowRoot
        }), console.log(`[Widget] Theme loaded successfully for ${c}`);
      } catch (s) {
        console.error("[Widget] Failed to load theme:", s);
      }
    }
    async loadThemeFromDomain() {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await xh({
          shadowRoot: this._shadowRoot,
          autoDetect: !0
        });
      } catch (c) {
        console.error("[Widget] Failed to auto-detect theme:", c), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(c, s, o) {
      (c === "custom-primary-color" || c === "customPrimaryColor") && s !== o && this.applyCustomPrimaryColor(), this.render();
    }
    disconnectedCallback() {
      this.root?.unmount();
    }
    handleRedirect = (c, s) => {
      console.log("[Widget] handleRedirect called, url:", c), this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(c, s));
      const o = new CustomEvent("redirect", {
        detail: {
          url: c,
          userSession: s,
          tokens: { access_token: s?.access_token },
          userInfo: s?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o), console.log("[Widget] Redirect event dispatched"), c && !this.onRedirect && (console.log("[Widget] Will redirect to:", c, "in 200ms"), setTimeout(() => {
        window.location.href = c;
      }, 200));
    };
    handleClose = () => {
      this.onClose && (console.log("[Widget] Calling onClose function prop"), this.onClose());
      const c = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c), this.removeAttribute("show-login");
    };
    getProps() {
      const s = this.getAttribute("authority") || Np(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) === "true";
      return {
        authority: s,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: d,
        onRedirect: this.handleRedirect,
        handleClose: this.handleClose
      };
    }
    // Public API methods
    login() {
      console.log("[Widget] login() called"), this.setAttribute("show-login", "true");
    }
    logout() {
      console.log("[Widget] logout() called"), localStorage.removeItem("user_state"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"), document.cookie.split(";").forEach((s) => {
        document.cookie = s.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
      }), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
      const c = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c);
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = wp.createRoot(this.mountPoint));
      const c = this.getProps();
      console.log("[Widget] Rendering with props:", c), this.root.render(
        /* @__PURE__ */ x.jsx(op, { children: /* @__PURE__ */ x.jsx(A.StrictMode, { children: /* @__PURE__ */ x.jsx(vb, { ...c }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
