
// CSS content for Shadow DOM injection
var __WIDGET_CSS__ = "@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-600{color:var(--color-blue-600)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";

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

// Also inject into document head for TEST mode (non-Shadow DOM)
(function() {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode(__WIDGET_CSS__));
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector: Document head injection failed', e);
  }
})();
var ic = { exports: {} }, Ka = {};
var Yh;
function Y1() {
  if (Yh) return Ka;
  Yh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(c, o, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: u,
      type: c,
      key: h,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return Ka.Fragment = r, Ka.jsx = s, Ka.jsxs = s, Ka;
}
var Xh;
function X1() {
  return Xh || (Xh = 1, ic.exports = Y1()), ic.exports;
}
var x = X1(), rc = { exports: {} }, ue = {}, Gh;
function G1() {
  if (Gh) return ue;
  Gh = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var D = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, U = Object.assign, Q = {};
  function V(S, B, Z) {
    this.props = S, this.context = B, this.refs = Q, this.updater = Z || D;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(S, B) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, B, "setState");
  }, V.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function k() {
  }
  k.prototype = V.prototype;
  function ee(S, B, Z) {
    this.props = S, this.context = B, this.refs = Q, this.updater = Z || D;
  }
  var K = ee.prototype = new k();
  K.constructor = ee, U(K, V.prototype), K.isPureReactComponent = !0;
  var le = Array.isArray;
  function ae() {
  }
  var I = { H: null, A: null, T: null, S: null }, Se = Object.prototype.hasOwnProperty;
  function pe(S, B, Z) {
    var $ = Z.ref;
    return {
      $$typeof: r,
      type: S,
      key: B,
      ref: $ !== void 0 ? $ : null,
      props: Z
    };
  }
  function Fe(S, B) {
    return pe(S.type, B, S.props);
  }
  function _e(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Ye(S) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(Z) {
      return B[Z];
    });
  }
  var Ne = /\/+/g;
  function Ve(S, B) {
    return typeof S == "object" && S !== null && S.key != null ? Ye("" + S.key) : B.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ae, ae) : (S.status = "pending", S.then(
          function(B) {
            S.status === "pending" && (S.status = "fulfilled", S.value = B);
          },
          function(B) {
            S.status === "pending" && (S.status = "rejected", S.reason = B);
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
  function Y(S, B, Z, $, ce) {
    var oe = typeof S;
    (oe === "undefined" || oe === "boolean") && (S = null);
    var te = !1;
    if (S === null) te = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case s:
              te = !0;
              break;
            case T:
              return te = S._init, Y(
                te(S._payload),
                B,
                Z,
                $,
                ce
              );
          }
      }
    if (te)
      return ce = ce(S), te = $ === "" ? "." + Ve(S, 0) : $, le(ce) ? (Z = "", te != null && (Z = te.replace(Ne, "$&/") + "/"), Y(ce, B, Z, "", function(Xt) {
        return Xt;
      })) : ce != null && (_e(ce) && (ce = Fe(
        ce,
        Z + (ce.key == null || S && S.key === ce.key ? "" : ("" + ce.key).replace(
          Ne,
          "$&/"
        ) + "/") + te
      )), B.push(ce)), 1;
    te = 0;
    var Be = $ === "" ? "." : $ + ":";
    if (le(S))
      for (var ze = 0; ze < S.length; ze++)
        $ = S[ze], oe = Be + Ve($, ze), te += Y(
          $,
          B,
          Z,
          oe,
          ce
        );
    else if (ze = _(S), typeof ze == "function")
      for (S = ze.call(S), ze = 0; !($ = S.next()).done; )
        $ = $.value, oe = Be + Ve($, ze++), te += Y(
          $,
          B,
          Z,
          oe,
          ce
        );
    else if (oe === "object") {
      if (typeof S.then == "function")
        return Y(
          X(S),
          B,
          Z,
          $,
          ce
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function G(S, B, Z) {
    if (S == null) return S;
    var $ = [], ce = 0;
    return Y(S, $, "", "", function(oe) {
      return B.call(Z, oe, ce++);
    }), $;
  }
  function fe(S) {
    if (S._status === -1) {
      var B = S._result;
      B = B(), B.then(
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = Z);
        },
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = Z);
        }
      ), S._status === -1 && (S._status = 0, S._result = B);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Ee = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, ne = {
    map: G,
    forEach: function(S, B, Z) {
      G(
        S,
        function() {
          B.apply(this, arguments);
        },
        Z
      );
    },
    count: function(S) {
      var B = 0;
      return G(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return G(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!_e(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = N, ue.Children = ne, ue.Component = V, ue.Fragment = c, ue.Profiler = d, ue.PureComponent = ee, ue.StrictMode = o, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return I.H.useMemoCache(S);
    }
  }, ue.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(S, B, Z) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var $ = U({}, S.props), ce = S.key;
    if (B != null)
      for (oe in B.key !== void 0 && (ce = "" + B.key), B)
        !Se.call(B, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && B.ref === void 0 || ($[oe] = B[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) $.children = Z;
    else if (1 < oe) {
      for (var te = Array(oe), Be = 0; Be < oe; Be++)
        te[Be] = arguments[Be + 2];
      $.children = te;
    }
    return pe(S.type, ce, $);
  }, ue.createContext = function(S) {
    return S = {
      $$typeof: g,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: h,
      _context: S
    }, S;
  }, ue.createElement = function(S, B, Z) {
    var $, ce = {}, oe = null;
    if (B != null)
      for ($ in B.key !== void 0 && (oe = "" + B.key), B)
        Se.call(B, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ce[$] = B[$]);
    var te = arguments.length - 2;
    if (te === 1) ce.children = Z;
    else if (1 < te) {
      for (var Be = Array(te), ze = 0; ze < te; ze++)
        Be[ze] = arguments[ze + 2];
      ce.children = Be;
    }
    if (S && S.defaultProps)
      for ($ in te = S.defaultProps, te)
        ce[$] === void 0 && (ce[$] = te[$]);
    return pe(S, oe, ce);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ue.isValidElement = _e, ue.lazy = function(S) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: S },
      _init: fe
    };
  }, ue.memo = function(S, B) {
    return {
      $$typeof: b,
      type: S,
      compare: B === void 0 ? null : B
    };
  }, ue.startTransition = function(S) {
    var B = I.T, Z = {};
    I.T = Z;
    try {
      var $ = S(), ce = I.S;
      ce !== null && ce(Z, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ae, Ee);
    } catch (oe) {
      Ee(oe);
    } finally {
      B !== null && Z.types !== null && (B.types = Z.types), I.T = B;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return I.H.useCacheRefresh();
  }, ue.use = function(S) {
    return I.H.use(S);
  }, ue.useActionState = function(S, B, Z) {
    return I.H.useActionState(S, B, Z);
  }, ue.useCallback = function(S, B) {
    return I.H.useCallback(S, B);
  }, ue.useContext = function(S) {
    return I.H.useContext(S);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(S, B) {
    return I.H.useDeferredValue(S, B);
  }, ue.useEffect = function(S, B) {
    return I.H.useEffect(S, B);
  }, ue.useEffectEvent = function(S) {
    return I.H.useEffectEvent(S);
  }, ue.useId = function() {
    return I.H.useId();
  }, ue.useImperativeHandle = function(S, B, Z) {
    return I.H.useImperativeHandle(S, B, Z);
  }, ue.useInsertionEffect = function(S, B) {
    return I.H.useInsertionEffect(S, B);
  }, ue.useLayoutEffect = function(S, B) {
    return I.H.useLayoutEffect(S, B);
  }, ue.useMemo = function(S, B) {
    return I.H.useMemo(S, B);
  }, ue.useOptimistic = function(S, B) {
    return I.H.useOptimistic(S, B);
  }, ue.useReducer = function(S, B, Z) {
    return I.H.useReducer(S, B, Z);
  }, ue.useRef = function(S) {
    return I.H.useRef(S);
  }, ue.useState = function(S) {
    return I.H.useState(S);
  }, ue.useSyncExternalStore = function(S, B, Z) {
    return I.H.useSyncExternalStore(
      S,
      B,
      Z
    );
  }, ue.useTransition = function() {
    return I.H.useTransition();
  }, ue.version = "19.2.3", ue;
}
var Vh;
function Rc() {
  return Vh || (Vh = 1, rc.exports = G1()), rc.exports;
}
var A = Rc();
var Qh = "popstate";
function V1(u = {}) {
  function r(c, o) {
    let { pathname: d, search: h, hash: g } = c.location;
    return vc(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : Ia(o);
  }
  return Z1(
    r,
    s,
    null,
    u
  );
}
function Le(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function qt(u, r) {
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
function Zh(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function vc(u, r, s = null, c) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Wn(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || c || Q1()
  };
}
function Ia({
  pathname: u = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (u += s.charAt(0) === "#" ? s : "#" + s), u;
}
function Wn(u) {
  let r = {};
  if (u) {
    let s = u.indexOf("#");
    s >= 0 && (r.hash = u.substring(s), u = u.substring(0, s));
    let c = u.indexOf("?");
    c >= 0 && (r.search = u.substring(c), u = u.substring(0, c)), u && (r.pathname = u);
  }
  return r;
}
function Z1(u, r, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c, h = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    g = "POP";
    let U = b(), Q = U == null ? null : U - y;
    y = U, p && p({ action: g, location: D.location, delta: Q });
  }
  function N(U, Q) {
    g = "PUSH";
    let V = vc(D.location, U, Q);
    y = b() + 1;
    let k = Zh(V, y), ee = D.createHref(V);
    try {
      h.pushState(k, "", ee);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError")
        throw K;
      o.location.assign(ee);
    }
    d && p && p({ action: g, location: D.location, delta: 1 });
  }
  function q(U, Q) {
    g = "REPLACE";
    let V = vc(D.location, U, Q);
    y = b();
    let k = Zh(V, y), ee = D.createHref(V);
    h.replaceState(k, "", ee), d && p && p({ action: g, location: D.location, delta: 0 });
  }
  function _(U) {
    return k1(U);
  }
  let D = {
    get action() {
      return g;
    },
    get location() {
      return u(o, h);
    },
    listen(U) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Qh, T), p = U, () => {
        o.removeEventListener(Qh, T), p = null;
      };
    },
    createHref(U) {
      return r(o, U);
    },
    createURL: _,
    encodeLocation(U) {
      let Q = _(U);
      return {
        pathname: Q.pathname,
        search: Q.search,
        hash: Q.hash
      };
    },
    push: N,
    replace: q,
    go(U) {
      return h.go(U);
    }
  };
  return D;
}
function k1(u, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(s, "No window.location.(origin|href) available to create URL");
  let c = typeof u == "string" ? u : Ia(u);
  return c = c.replace(/ $/, "%20"), !r && c.startsWith("//") && (c = s + c), new URL(c, s);
}
function xm(u, r, s = "/") {
  return K1(u, r, s, !1);
}
function K1(u, r, s, c) {
  let o = typeof r == "string" ? Wn(r) : r, d = hl(o.pathname || "/", s);
  if (d == null)
    return null;
  let h = Tm(u);
  J1(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = ug(d);
    g = ng(
      h[p],
      y,
      c
    );
  }
  return g;
}
function Tm(u, r = [], s = [], c = "", o = !1) {
  let d = (h, g, p = o, y) => {
    let b = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(c) && p)
        return;
      Le(
        b.relativePath.startsWith(c),
        `Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(c.length);
    }
    let T = dl([c, b.relativePath]), N = s.concat(b);
    h.children && h.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), Tm(
      h.children,
      r,
      N,
      T,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: T,
      score: tg(T, h.index),
      routesMeta: N
    });
  };
  return u.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of Rm(h.path))
        d(h, g, !0, p);
  }), r;
}
function Rm(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [s, ...c] = r, o = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (c.length === 0)
    return o ? [d, ""] : [d];
  let h = Rm(c.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...h), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function J1(u) {
  u.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : lg(
      r.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var $1 = /^:[\w-]+$/, W1 = 3, F1 = 2, I1 = 1, P1 = 10, eg = -2, kh = (u) => u === "*";
function tg(u, r) {
  let s = u.split("/"), c = s.length;
  return s.some(kh) && (c += eg), r && (c += F1), s.filter((o) => !kh(o)).reduce(
    (o, d) => o + ($1.test(d) ? W1 : d === "" ? I1 : P1),
    c
  );
}
function lg(u, r) {
  return u.length === r.length && u.slice(0, -1).every((c, o) => c === r[o]) ? (
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
function ng(u, r, s = !1) {
  let { routesMeta: c } = u, o = {}, d = "/", h = [];
  for (let g = 0; g < c.length; ++g) {
    let p = c[g], y = g === c.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", T = Ni(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), N = p.route;
    if (!T && y && s && !c[c.length - 1].route.index && (T = Ni(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !T)
      return null;
    Object.assign(o, T.params), h.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: dl([d, T.pathname]),
      pathnameBase: cg(
        dl([d, T.pathnameBase])
      ),
      route: N
    }), T.pathnameBase !== "/" && (d = dl([d, T.pathnameBase]));
  }
  return h;
}
function Ni(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [s, c] = ag(
    u.path,
    u.caseSensitive,
    u.end
  ), o = r.match(s);
  if (!o) return null;
  let d = o[0], h = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: c.reduce(
      (y, { paramName: b, isOptional: T }, N) => {
        if (b === "*") {
          let _ = g[N] || "";
          h = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[N];
        return T && !q ? y[b] = void 0 : y[b] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: u
  };
}
function ag(u, r = !1, s = !0) {
  qt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let c = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (c.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (c.push({ paramName: "*" }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), c];
}
function ug(u) {
  try {
    return u.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return qt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), u;
  }
}
function hl(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, c = u.charAt(s);
  return c && c !== "/" ? null : u.slice(s) || "/";
}
var Am = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ig = (u) => Am.test(u);
function rg(u, r = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: o = ""
  } = typeof u == "string" ? Wn(u) : u, d;
  if (s)
    if (ig(s))
      d = s;
    else {
      if (s.includes("//")) {
        let h = s;
        s = s.replace(/\/\/+/g, "/"), qt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`
        );
      }
      s.startsWith("/") ? d = Kh(s.substring(1), "/") : d = Kh(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: og(c),
    hash: fg(o)
  };
}
function Kh(u, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((o) => {
    o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
  }), s.length > 1 ? s.join("/") : "/";
}
function sc(u, r, s, c) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function sg(u) {
  return u.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function wm(u) {
  let r = sg(u);
  return r.map(
    (s, c) => c === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Cm(u, r, s, c = !1) {
  let o;
  typeof u == "string" ? o = Wn(u) : (o = { ...u }, Le(
    !o.pathname || !o.pathname.includes("?"),
    sc("?", "pathname", "search", o)
  ), Le(
    !o.pathname || !o.pathname.includes("#"),
    sc("#", "pathname", "hash", o)
  ), Le(
    !o.search || !o.search.includes("#"),
    sc("#", "search", "hash", o)
  ));
  let d = u === "" || o.pathname === "", h = d ? "/" : o.pathname, g;
  if (h == null)
    g = s;
  else {
    let T = r.length - 1;
    if (!c && h.startsWith("..")) {
      let N = h.split("/");
      for (; N[0] === ".."; )
        N.shift(), T -= 1;
      o.pathname = N.join("/");
    }
    g = T >= 0 ? r[T] : "/";
  }
  let p = rg(o, g), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var dl = (u) => u.join("/").replace(/\/\/+/g, "/"), cg = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), og = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, fg = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, dg = class {
  constructor(u, r, s, c = !1) {
    this.status = u, this.statusText = r || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function hg(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function mg(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var _m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function zm(u, r) {
  let s = u;
  if (typeof s != "string" || !Am.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, o = !1;
  if (_m)
    try {
      let d = new URL(window.location.href), h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = hl(h.pathname, r);
      h.origin === d.origin && g != null ? s = g + h.search + h.hash : o = !0;
    } catch {
      qt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: c,
    isExternal: o,
    to: s
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Om = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Om
);
var yg = [
  "GET",
  ...Om
];
new Set(yg);
var Fn = A.createContext(null);
Fn.displayName = "DataRouter";
var Ui = A.createContext(null);
Ui.displayName = "DataRouterState";
var gg = A.createContext(!1), Nm = A.createContext({
  isTransitioning: !1
});
Nm.displayName = "ViewTransition";
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
var ml = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ml.displayName = "Route";
var Ac = A.createContext(null);
Ac.displayName = "RouteError";
var Mm = "REACT_ROUTER_ERROR", bg = "REDIRECT", Sg = "ROUTE_ERROR_RESPONSE";
function Eg(u) {
  if (u.startsWith(`${Mm}:${bg}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function xg(u) {
  if (u.startsWith(
    `${Mm}:${Sg}:{`
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
function Tg(u, { relative: r } = {}) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = A.useContext(jt), { hash: o, pathname: d, search: h } = tu(u, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : dl([s, d])), c.createHref({ pathname: g, search: h, hash: o });
}
function eu() {
  return A.useContext(Pa) != null;
}
function on() {
  return Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(Pa).location;
}
var Dm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Um(u) {
  A.useContext(jt).static || A.useLayoutEffect(u);
}
function Rg() {
  let { isDataRoute: u } = A.useContext(ml);
  return u ? Lg() : Ag();
}
function Ag() {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext(Fn), { basename: r, navigator: s } = A.useContext(jt), { matches: c } = A.useContext(ml), { pathname: o } = on(), d = JSON.stringify(wm(c)), h = A.useRef(!1);
  return Um(() => {
    h.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (qt(h.current, Dm), !h.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let b = Cm(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : dl([r, b.pathname])), (y.replace ? s.replace : s.push)(
        b,
        y.state,
        y
      );
    },
    [
      r,
      s,
      d,
      o,
      u
    ]
  );
}
A.createContext(null);
function tu(u, { relative: r } = {}) {
  let { matches: s } = A.useContext(ml), { pathname: c } = on(), o = JSON.stringify(wm(s));
  return A.useMemo(
    () => Cm(
      u,
      JSON.parse(o),
      c,
      r === "path"
    ),
    [u, o, c, r]
  );
}
function wg(u, r) {
  return jm(u, r);
}
function jm(u, r, s, c, o) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(jt), { matches: h } = A.useContext(ml), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", T = g && g.route;
  {
    let V = T && T.path || "";
    Lm(
      y,
      !T || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let N = on(), q;
  if (r) {
    let V = typeof r == "string" ? Wn(r) : r;
    Le(
      b === "/" || V.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), q = V;
  } else
    q = N;
  let _ = q.pathname || "/", D = _;
  if (b !== "/") {
    let V = b.replace(/^\//, "").split("/");
    D = "/" + _.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let U = xm(u, { pathname: D });
  qt(
    T || U != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), qt(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Q = Ng(
    U && U.map(
      (V) => Object.assign({}, V, {
        params: Object.assign({}, p, V.params),
        pathname: dl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathname
        ]),
        pathnameBase: V.pathnameBase === "/" ? b : dl([
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
    h,
    s,
    c,
    o
  );
  return r && Q ? /* @__PURE__ */ A.createElement(
    Pa.Provider,
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
function Cg() {
  let u = Bg(), r = hg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), s = u instanceof Error ? u.stack : null, c = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: c }, d = { padding: "2px 4px", backgroundColor: c }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), h = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ A.createElement("pre", { style: o }, s) : null, h);
}
var _g = /* @__PURE__ */ A.createElement(Cg, null), Bm = class extends A.Component {
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
      const s = xg(u.digest);
      s && (u = s);
    }
    let r = u !== void 0 ? /* @__PURE__ */ A.createElement(ml.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      Ac.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(zg, { error: u }, r) : r;
  }
};
Bm.contextType = gg;
var cc = /* @__PURE__ */ new WeakMap();
function zg({
  children: u,
  error: r
}) {
  let { basename: s } = A.useContext(jt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = Eg(r.digest);
    if (c) {
      let o = cc.get(r);
      if (o) throw o;
      let d = zm(c.location, s);
      if (_m && !cc.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw cc.set(r, h), h;
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
function Og({ routeContext: u, match: r, children: s }) {
  let c = A.useContext(Fn);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(ml.Provider, { value: u }, s);
}
function Ng(u, r = [], s = null, c = null, o = null) {
  if (u == null) {
    if (!s)
      return null;
    if (s.errors)
      u = s.matches;
    else if (r.length === 0 && !s.initialized && s.matches.length > 0)
      u = s.matches;
    else
      return null;
  }
  let d = u, h = s?.errors;
  if (h != null) {
    let b = d.findIndex(
      (T) => T.route.id && h?.[T.route.id] !== void 0
    );
    Le(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, b + 1)
    );
  }
  let g = !1, p = -1;
  if (s)
    for (let b = 0; b < d.length; b++) {
      let T = d[b];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (p = b), T.route.id) {
        let { loaderData: N, errors: q } = s, _ = T.route.loader && !N.hasOwnProperty(T.route.id) && (!q || q[T.route.id] === void 0);
        if (T.route.lazy || _) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && c ? (b, T) => {
    c(b, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: mg(s.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (b, T, N) => {
      let q, _ = !1, D = null, U = null;
      s && (q = h && T.route.id ? h[T.route.id] : void 0, D = T.route.errorElement || _g, g && (p < 0 && N === 0 ? (Lm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), _ = !0, U = null) : p === N && (_ = !0, U = T.route.hydrateFallbackElement || null)));
      let Q = r.concat(d.slice(0, N + 1)), V = () => {
        let k;
        return q ? k = D : _ ? k = U : T.route.Component ? k = /* @__PURE__ */ A.createElement(T.route.Component, null) : T.route.element ? k = T.route.element : k = b, /* @__PURE__ */ A.createElement(
          Og,
          {
            match: T,
            routeContext: {
              outlet: b,
              matches: Q,
              isDataRoute: s != null
            },
            children: k
          }
        );
      };
      return s && (T.route.ErrorBoundary || T.route.errorElement || N === 0) ? /* @__PURE__ */ A.createElement(
        Bm,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: D,
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
function wc(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mg(u) {
  let r = A.useContext(Fn);
  return Le(r, wc(u)), r;
}
function Dg(u) {
  let r = A.useContext(Ui);
  return Le(r, wc(u)), r;
}
function Ug(u) {
  let r = A.useContext(ml);
  return Le(r, wc(u)), r;
}
function Cc(u) {
  let r = Ug(u), s = r.matches[r.matches.length - 1];
  return Le(
    s.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function jg() {
  return Cc(
    "useRouteId"
    /* UseRouteId */
  );
}
function Bg() {
  let u = A.useContext(Ac), r = Dg(
    "useRouteError"
    /* UseRouteError */
  ), s = Cc(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[s];
}
function Lg() {
  let { router: u } = Mg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Cc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = A.useRef(!1);
  return Um(() => {
    s.current = !0;
  }), A.useCallback(
    async (o, d = {}) => {
      qt(s.current, Dm), s.current && (typeof o == "number" ? await u.navigate(o) : await u.navigate(o, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var Jh = {};
function Lm(u, r, s) {
  !r && !Jh[u] && (Jh[u] = !0, qt(!1, s));
}
A.memo(Hg);
function Hg({
  routes: u,
  future: r,
  state: s,
  onError: c
}) {
  return jm(u, void 0, s, c, r);
}
function Hm(u) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function qg({
  basename: u = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h
}) {
  Le(
    !eu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = A.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, o, d, h]
  );
  typeof s == "string" && (s = Wn(s));
  let {
    pathname: y = "/",
    search: b = "",
    hash: T = "",
    state: N = null,
    key: q = "default"
  } = s, _ = A.useMemo(() => {
    let D = hl(y, g);
    return D == null ? null : {
      location: {
        pathname: D,
        search: b,
        hash: T,
        state: N,
        key: q
      },
      navigationType: c
    };
  }, [g, y, b, T, N, q, c]);
  return qt(
    _ != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ A.createElement(jt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Pa.Provider, { children: r, value: _ }));
}
function Yg({
  children: u,
  location: r
}) {
  return wg(bc(u), r);
}
function bc(u, r = []) {
  let s = [];
  return A.Children.forEach(u, (c, o) => {
    if (!A.isValidElement(c))
      return;
    let d = [...r, o];
    if (c.type === A.Fragment) {
      s.push.apply(
        s,
        bc(c.props.children, d)
      );
      return;
    }
    Le(
      c.type === Hm,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
      !c.props.index || !c.props.children,
      "An index route cannot have child routes."
    );
    let h = {
      id: c.props.id || d.join("-"),
      caseSensitive: c.props.caseSensitive,
      element: c.props.element,
      Component: c.props.Component,
      index: c.props.index,
      path: c.props.path,
      middleware: c.props.middleware,
      loader: c.props.loader,
      action: c.props.action,
      hydrateFallbackElement: c.props.hydrateFallbackElement,
      HydrateFallback: c.props.HydrateFallback,
      errorElement: c.props.errorElement,
      ErrorBoundary: c.props.ErrorBoundary,
      hasErrorBoundary: c.props.hasErrorBoundary === !0 || c.props.ErrorBoundary != null || c.props.errorElement != null,
      shouldRevalidate: c.props.shouldRevalidate,
      handle: c.props.handle,
      lazy: c.props.lazy
    };
    c.props.children && (h.children = bc(
      c.props.children,
      d
    )), s.push(h);
  }), s;
}
var wi = "get", Ci = "application/x-www-form-urlencoded";
function ji(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Xg(u) {
  return ji(u) && u.tagName.toLowerCase() === "button";
}
function Gg(u) {
  return ji(u) && u.tagName.toLowerCase() === "form";
}
function Vg(u) {
  return ji(u) && u.tagName.toLowerCase() === "input";
}
function Qg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Zg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Qg(u);
}
var Ri = null;
function kg() {
  if (Ri === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ri = !1;
    } catch {
      Ri = !0;
    }
  return Ri;
}
var Kg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function oc(u) {
  return u != null && !Kg.has(u) ? (qt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`
  ), null) : u;
}
function Jg(u, r) {
  let s, c, o, d, h;
  if (Gg(u)) {
    let g = u.getAttribute("action");
    c = g ? hl(g, r) : null, s = u.getAttribute("method") || wi, o = oc(u.getAttribute("enctype")) || Ci, d = new FormData(u);
  } else if (Xg(u) || Vg(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (c = p ? hl(p, r) : null, s = u.getAttribute("formmethod") || g.getAttribute("method") || wi, o = oc(u.getAttribute("formenctype")) || oc(g.getAttribute("enctype")) || Ci, d = new FormData(g, u), !kg()) {
      let { name: y, type: b, value: T } = u;
      if (b === "image") {
        let N = y ? `${y}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (ji(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = wi, c = null, o = Ci, h = u;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: c, method: s.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function _c(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function $g(u, r, s) {
  let c = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return c.pathname === "/" ? c.pathname = `_root.${s}` : r && hl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`, c;
}
async function Wg(u, r) {
  if (u.id in r)
    return r[u.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      u.module
    );
    return r[u.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${u.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Fg(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Ig(u, r, s) {
  let c = await Promise.all(
    u.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let h = await Wg(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return lp(
    c.flat(1).filter(Fg).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function $h(u, r, s, c, o, d) {
  let h = (p, y) => s[y] ? p.route.id !== s[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => h(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let b = c.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (h(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let T = p.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean")
        return T;
    }
    return !0;
  }) : [];
}
function Pg(u, r, { includeHydrateFallback: s } = {}) {
  return ep(
    u.map((c) => {
      let o = r.routes[c.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function ep(u) {
  return [...new Set(u)];
}
function tp(u) {
  let r = {}, s = Object.keys(u).sort();
  for (let c of s)
    r[c] = u[c];
  return r;
}
function lp(u, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((c, o) => {
    let d = JSON.stringify(tp(o));
    return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
  }, []);
}
function qm() {
  let u = A.useContext(Fn);
  return _c(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function np() {
  let u = A.useContext(Ui);
  return _c(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var zc = A.createContext(void 0);
zc.displayName = "FrameworkContext";
function Ym() {
  let u = A.useContext(zc);
  return _c(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function ap(u, r) {
  let s = A.useContext(zc), [c, o] = A.useState(!1), [d, h] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: T } = r, N = A.useRef(null);
  A.useEffect(() => {
    if (u === "render" && h(!0), u === "viewport") {
      let D = (Q) => {
        Q.forEach((V) => {
          h(V.isIntersecting);
        });
      }, U = new IntersectionObserver(D, { threshold: 0.5 });
      return N.current && U.observe(N.current), () => {
        U.disconnect();
      };
    }
  }, [u]), A.useEffect(() => {
    if (c) {
      let D = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(D);
      };
    }
  }, [c]);
  let q = () => {
    o(!0);
  }, _ = () => {
    o(!1), h(!1);
  };
  return s ? u !== "intent" ? [d, N, {}] : [
    d,
    N,
    {
      onFocus: Ja(g, q),
      onBlur: Ja(p, _),
      onMouseEnter: Ja(y, q),
      onMouseLeave: Ja(b, _),
      onTouchStart: Ja(T, q)
    }
  ] : [!1, N, {}];
}
function Ja(u, r) {
  return (s) => {
    u && u(s), s.defaultPrevented || r(s);
  };
}
function up({ page: u, ...r }) {
  let { router: s } = qm(), c = A.useMemo(
    () => xm(s.routes, u, s.basename),
    [s.routes, u, s.basename]
  );
  return c ? /* @__PURE__ */ A.createElement(rp, { page: u, matches: c, ...r }) : null;
}
function ip(u) {
  let { manifest: r, routeModules: s } = Ym(), [c, o] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Ig(u, r, s).then(
      (h) => {
        d || o(h);
      }
    ), () => {
      d = !0;
    };
  }, [u, r, s]), c;
}
function rp({
  page: u,
  matches: r,
  ...s
}) {
  let c = on(), { manifest: o, routeModules: d } = Ym(), { basename: h } = qm(), { loaderData: g, matches: p } = np(), y = A.useMemo(
    () => $h(
      u,
      r,
      p,
      o,
      c,
      "data"
    ),
    [u, r, p, o, c]
  ), b = A.useMemo(
    () => $h(
      u,
      r,
      p,
      o,
      c,
      "assets"
    ),
    [u, r, p, o, c]
  ), T = A.useMemo(() => {
    if (u === c.pathname + c.search + c.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), D = !1;
    if (r.forEach((Q) => {
      let V = o.routes[Q.route.id];
      !V || !V.hasLoader || (!y.some((k) => k.route.id === Q.route.id) && Q.route.id in g && d[Q.route.id]?.shouldRevalidate || V.hasClientLoader ? D = !0 : _.add(Q.route.id));
    }), _.size === 0)
      return [];
    let U = $g(u, h, "data");
    return D && _.size > 0 && U.searchParams.set(
      "_routes",
      r.filter((Q) => _.has(Q.route.id)).map((Q) => Q.route.id).join(",")
    ), [U.pathname + U.search];
  }, [
    h,
    g,
    c,
    o,
    y,
    r,
    u,
    d
  ]), N = A.useMemo(
    () => Pg(b, o),
    [b, o]
  ), q = ip(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, T.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...s })), N.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "modulepreload", href: _, ...s })), q.map(({ key: _, link: D }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: _, nonce: s.nonce, ...D })
  )));
}
function sp(...u) {
  return (r) => {
    u.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var cp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  cp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function op({
  basename: u,
  children: r,
  unstable_useTransitions: s,
  window: c
}) {
  let o = A.useRef();
  o.current == null && (o.current = V1({ window: c, v5Compat: !0 }));
  let d = o.current, [h, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      s === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [s]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    qg,
    {
      basename: u,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      unstable_useTransitions: s
    }
  );
}
var Xm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gm = A.forwardRef(
  function({
    onClick: r,
    discover: s = "render",
    prefetch: c = "none",
    relative: o,
    reloadDocument: d,
    replace: h,
    state: g,
    target: p,
    to: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: N,
    ...q
  }, _) {
    let { basename: D, unstable_useTransitions: U } = A.useContext(jt), Q = typeof y == "string" && Xm.test(y), V = zm(y, D);
    y = V.to;
    let k = Tg(y, { relative: o }), [ee, K, le] = ap(
      c,
      q
    ), ae = mp(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: T,
      unstable_defaultShouldRevalidate: N,
      unstable_useTransitions: U
    });
    function I(pe) {
      r && r(pe), pe.defaultPrevented || ae(pe);
    }
    let Se = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ A.createElement(
        "a",
        {
          ...q,
          ...le,
          href: V.absoluteURL || k,
          onClick: V.isExternal || d ? r : I,
          ref: sp(_, K),
          target: p,
          "data-discover": !Q && s === "render" ? "true" : void 0
        }
      )
    );
    return ee && !Q ? /* @__PURE__ */ A.createElement(A.Fragment, null, Se, /* @__PURE__ */ A.createElement(up, { page: k })) : Se;
  }
);
Gm.displayName = "Link";
var fp = A.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: o = !1,
    style: d,
    to: h,
    viewTransition: g,
    children: p,
    ...y
  }, b) {
    let T = tu(h, { relative: y.relative }), N = on(), q = A.useContext(Ui), { navigator: _, basename: D } = A.useContext(jt), U = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    bp(T) && g === !0, Q = _.encodeLocation ? _.encodeLocation(T).pathname : T.pathname, V = N.pathname, k = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (V = V.toLowerCase(), k = k ? k.toLowerCase() : null, Q = Q.toLowerCase()), k && D && (k = hl(k, D) || k);
    const ee = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let K = V === Q || !o && V.startsWith(Q) && V.charAt(ee) === "/", le = k != null && (k === Q || !o && k.startsWith(Q) && k.charAt(Q.length) === "/"), ae = {
      isActive: K,
      isPending: le,
      isTransitioning: U
    }, I = K ? r : void 0, Se;
    typeof c == "function" ? Se = c(ae) : Se = [
      c,
      K ? "active" : null,
      le ? "pending" : null,
      U ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof d == "function" ? d(ae) : d;
    return /* @__PURE__ */ A.createElement(
      Gm,
      {
        ...y,
        "aria-current": I,
        className: Se,
        ref: b,
        style: pe,
        to: h,
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
    navigate: s,
    reloadDocument: c,
    replace: o,
    state: d,
    method: h = wi,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: N,
    ...q
  }, _) => {
    let { unstable_useTransitions: D } = A.useContext(jt), U = pp(), Q = vp(g, { relative: y }), V = h.toLowerCase() === "get" ? "get" : "post", k = typeof g == "string" && Xm.test(g), ee = (K) => {
      if (p && p(K), K.defaultPrevented) return;
      K.preventDefault();
      let le = K.nativeEvent.submitter, ae = le?.getAttribute("formmethod") || h, I = () => U(le || K.currentTarget, {
        fetcherKey: r,
        method: ae,
        navigate: s,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: T,
        unstable_defaultShouldRevalidate: N
      });
      D && s !== !1 ? A.startTransition(() => I()) : I();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: _,
        method: V,
        action: Q,
        onSubmit: c ? p : ee,
        ...q,
        "data-discover": !k && u === "render" ? "true" : void 0
      }
    );
  }
);
dp.displayName = "Form";
function hp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vm(u) {
  let r = A.useContext(Fn);
  return Le(r, hp(u)), r;
}
function mp(u, {
  target: r,
  replace: s,
  state: c,
  preventScrollReset: o,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Rg(), b = on(), T = tu(u, { relative: d });
  return A.useCallback(
    (N) => {
      if (Zg(N, r)) {
        N.preventDefault();
        let q = s !== void 0 ? s : Ia(b) === Ia(T), _ = () => y(u, {
          replace: q,
          state: c,
          preventScrollReset: o,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? A.startTransition(() => _()) : _();
      }
    },
    [
      b,
      y,
      T,
      s,
      c,
      r,
      u,
      o,
      d,
      h,
      g,
      p
    ]
  );
}
var yp = 0, gp = () => `__${String(++yp)}__`;
function pp() {
  let { router: u } = Vm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(jt), s = jg(), c = u.fetch, o = u.navigate;
  return A.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: T } = Jg(
        d,
        r
      );
      if (h.navigate === !1) {
        let N = h.fetcherKey || gp();
        await c(N, s, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: T,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await o(h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: T,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          replace: h.replace,
          state: h.state,
          fromRouteId: s,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition
        });
    },
    [c, o, r, s]
  );
}
function vp(u, { relative: r } = {}) {
  let { basename: s } = A.useContext(jt), c = A.useContext(ml);
  Le(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1), d = { ...tu(u || ".", { relative: r }) }, h = on();
  if (u == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((T) => T).forEach((T) => g.append("index", T));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : dl([s, d.pathname])), Ia(d);
}
function bp(u, { relative: r } = {}) {
  let s = A.useContext(Nm);
  Le(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Vm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = tu(u, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = hl(s.currentLocation.pathname, c) || s.currentLocation.pathname, h = hl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Ni(o.pathname, h) != null || Ni(o.pathname, d) != null;
}
var fc = { exports: {} }, nt = {};
var Wh;
function Sp() {
  if (Wh) return nt;
  Wh = 1;
  var u = Rc();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var c = {
    d: {
      f: s,
      r: function() {
        throw Error(r(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, y, b) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: y,
      implementation: b
    };
  }
  var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, nt.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, nt.flushSync = function(p) {
    var y = h.T, b = c.p;
    try {
      if (h.T = null, c.p = 2, p) return p();
    } finally {
      h.T = y, c.p = b, c.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && c.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, T = g(b, y.crossOrigin), N = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? c.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: T,
          integrity: N,
          fetchPriority: q
        }
      ) : b === "script" && c.d.X(p, {
        crossOrigin: T,
        integrity: N,
        fetchPriority: q,
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
          c.d.M(p, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && c.d.M(p);
  }, nt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, T = g(b, y.crossOrigin);
      c.d.L(p, b, {
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
  }, nt.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        c.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(p);
  }, nt.requestFormReset = function(p) {
    c.d.r(p);
  }, nt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, nt.useFormState = function(p, y, b) {
    return h.H.useFormState(p, y, b);
  }, nt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Fh;
function Ep() {
  if (Fh) return fc.exports;
  Fh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), fc.exports = Sp(), fc.exports;
}
var dc = { exports: {} }, $a = {}, hc = { exports: {} }, mc = {};
var Ih;
function xp() {
  return Ih || (Ih = 1, (function(u) {
    function r(X, Y) {
      var G = X.length;
      X.push(Y);
      e: for (; 0 < G; ) {
        var fe = G - 1 >>> 1, Ee = X[fe];
        if (0 < o(Ee, Y))
          X[fe] = Y, X[G] = Ee, G = fe;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function c(X) {
      if (X.length === 0) return null;
      var Y = X[0], G = X.pop();
      if (G !== Y) {
        X[0] = G;
        e: for (var fe = 0, Ee = X.length, ne = Ee >>> 1; fe < ne; ) {
          var S = 2 * (fe + 1) - 1, B = X[S], Z = S + 1, $ = X[Z];
          if (0 > o(B, G))
            Z < Ee && 0 > o($, B) ? (X[fe] = $, X[Z] = G, fe = Z) : (X[fe] = B, X[S] = G, fe = S);
          else if (Z < Ee && 0 > o($, G))
            X[fe] = $, X[Z] = G, fe = Z;
          else break e;
        }
      }
      return Y;
    }
    function o(X, Y) {
      var G = X.sortIndex - Y.sortIndex;
      return G !== 0 ? G : X.id - Y.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, g = h.now();
      u.unstable_now = function() {
        return h.now() - g;
      };
    }
    var p = [], y = [], b = 1, T = null, N = 3, q = !1, _ = !1, D = !1, U = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function ee(X) {
      for (var Y = s(y); Y !== null; ) {
        if (Y.callback === null) c(y);
        else if (Y.startTime <= X)
          c(y), Y.sortIndex = Y.expirationTime, r(p, Y);
        else break;
        Y = s(y);
      }
    }
    function K(X) {
      if (D = !1, ee(X), !_)
        if (s(p) !== null)
          _ = !0, le || (le = !0, _e());
        else {
          var Y = s(y);
          Y !== null && Ve(K, Y.startTime - X);
        }
    }
    var le = !1, ae = -1, I = 5, Se = -1;
    function pe() {
      return U ? !0 : !(u.unstable_now() - Se < I);
    }
    function Fe() {
      if (U = !1, le) {
        var X = u.unstable_now();
        Se = X;
        var Y = !0;
        try {
          e: {
            _ = !1, D && (D = !1, V(ae), ae = -1), q = !0;
            var G = N;
            try {
              t: {
                for (ee(X), T = s(p); T !== null && !(T.expirationTime > X && pe()); ) {
                  var fe = T.callback;
                  if (typeof fe == "function") {
                    T.callback = null, N = T.priorityLevel;
                    var Ee = fe(
                      T.expirationTime <= X
                    );
                    if (X = u.unstable_now(), typeof Ee == "function") {
                      T.callback = Ee, ee(X), Y = !0;
                      break t;
                    }
                    T === s(p) && c(p), ee(X);
                  } else c(p);
                  T = s(p);
                }
                if (T !== null) Y = !0;
                else {
                  var ne = s(y);
                  ne !== null && Ve(
                    K,
                    ne.startTime - X
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              T = null, N = G, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? _e() : le = !1;
        }
      }
    }
    var _e;
    if (typeof k == "function")
      _e = function() {
        k(Fe);
      };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), Ne = Ye.port2;
      Ye.port1.onmessage = Fe, _e = function() {
        Ne.postMessage(null);
      };
    } else
      _e = function() {
        Q(Fe, 0);
      };
    function Ve(X, Y) {
      ae = Q(function() {
        X(u.unstable_now());
      }, Y);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, u.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < X ? Math.floor(1e3 / X) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, u.unstable_next = function(X) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = N;
      }
      var G = N;
      N = Y;
      try {
        return X();
      } finally {
        N = G;
      }
    }, u.unstable_requestPaint = function() {
      U = !0;
    }, u.unstable_runWithPriority = function(X, Y) {
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
        return Y();
      } finally {
        N = G;
      }
    }, u.unstable_scheduleCallback = function(X, Y, G) {
      var fe = u.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? fe + G : fe) : G = fe, X) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return Ee = G + Ee, X = {
        id: b++,
        callback: Y,
        priorityLevel: X,
        startTime: G,
        expirationTime: Ee,
        sortIndex: -1
      }, G > fe ? (X.sortIndex = G, r(y, X), s(p) === null && X === s(y) && (D ? (V(ae), ae = -1) : D = !0, Ve(K, G - fe))) : (X.sortIndex = Ee, r(p, X), _ || q || (_ = !0, le || (le = !0, _e()))), X;
    }, u.unstable_shouldYield = pe, u.unstable_wrapCallback = function(X) {
      var Y = N;
      return function() {
        var G = N;
        N = Y;
        try {
          return X.apply(this, arguments);
        } finally {
          N = G;
        }
      };
    };
  })(mc)), mc;
}
var Ph;
function Tp() {
  return Ph || (Ph = 1, hc.exports = xp()), hc.exports;
}
var em;
function Rp() {
  if (em) return $a;
  em = 1;
  var u = {};
  var r = Tp(), s = Rc(), c = Ep();
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
    if (h(e) !== e)
      throw Error(o(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(o(188));
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
        for (var f = !1, m = a.child; m; ) {
          if (m === l) {
            f = !0, l = a, n = i;
            break;
          }
          if (m === n) {
            f = !0, n = a, l = i;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = i.child; m; ) {
            if (m === l) {
              f = !0, l = i, n = a;
              break;
            }
            if (m === n) {
              f = !0, n = i, l = a;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (l.alternate !== n) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function T(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = T(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), Se = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.activity"), Fe = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), _e = Symbol.iterator;
  function Ye(e) {
    return e === null || typeof e != "object" ? null : (e = _e && e[_e] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ve(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case V:
        return "Profiler";
      case Q:
        return "StrictMode";
      case le:
        return "Suspense";
      case ae:
        return "SuspenseList";
      case pe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case D:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case k:
          return (e._context.displayName || "Context") + ".Consumer";
        case K:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case I:
          return t = e.displayName || null, t !== null ? t : Ve(e.type) || "Memo";
        case Se:
          t = e._payload, e = e._init;
          try {
            return Ve(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, Y = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ee = [], ne = -1;
  function S(e) {
    return { current: e };
  }
  function B(e) {
    0 > ne || (e.current = Ee[ne], Ee[ne] = null, ne--);
  }
  function Z(e, t) {
    ne++, Ee[ne] = e.current, e.current = t;
  }
  var $ = S(null), ce = S(null), oe = S(null), te = S(null);
  function Be(e, t) {
    switch (Z(oe, t), Z(ce, e), Z($, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ch(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = ch(t), e = oh(t, e);
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
    B($), Z($, e);
  }
  function ze() {
    B($), B(ce), B(oe);
  }
  function Xt(e) {
    e.memoizedState !== null && Z(te, e);
    var t = $.current, l = oh(t, e.type);
    t !== l && (Z(ce, e), Z($, l));
  }
  function Gt(e) {
    ce.current === e && (B($), B(ce)), te.current === e && (B(te), Va._currentValue = fe);
  }
  var ea, Lc;
  function Yl(e) {
    if (ea === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ea = t && t[1] || "", Lc = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ea + e + Lc;
  }
  var Vi = !1;
  function Qi(e, t) {
    if (!e || Vi) return "";
    Vi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
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
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (M) {
                  z = M;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (M) {
            if (M && z && typeof M.stack == "string")
              return [M.stack, z.stack];
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
      var i = n.DetermineComponentFrameRoot(), f = i[0], m = i[1];
      if (f && m) {
        var v = f.split(`
`), C = m.split(`
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
      Vi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Yl(l) : "";
  }
  function p0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Yl(e.type);
      case 16:
        return Yl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Yl("Suspense Fallback") : Yl("Suspense");
      case 19:
        return Yl("SuspenseList");
      case 0:
      case 15:
        return Qi(e.type, !1);
      case 11:
        return Qi(e.type.render, !1);
      case 1:
        return Qi(e.type, !0);
      case 31:
        return Yl("Activity");
      default:
        return "";
    }
  }
  function Hc(e) {
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
  var Zi = Object.prototype.hasOwnProperty, ki = r.unstable_scheduleCallback, Ki = r.unstable_cancelCallback, v0 = r.unstable_shouldYield, b0 = r.unstable_requestPaint, yt = r.unstable_now, S0 = r.unstable_getCurrentPriorityLevel, qc = r.unstable_ImmediatePriority, Yc = r.unstable_UserBlockingPriority, ru = r.unstable_NormalPriority, E0 = r.unstable_LowPriority, Xc = r.unstable_IdlePriority, x0 = r.log, T0 = r.unstable_setDisableYieldValue, ta = null, gt = null;
  function yl(e) {
    if (typeof x0 == "function" && T0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ta, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : w0, R0 = Math.log, A0 = Math.LN2;
  function w0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (R0(e) / A0 | 0) | 0;
  }
  var su = 256, cu = 262144, ou = 4194304;
  function Xl(e) {
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
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var m = n & 134217727;
    return m !== 0 ? (n = m & ~i, n !== 0 ? a = Xl(n) : (f &= m, f !== 0 ? a = Xl(f) : l || (l = m & ~e, l !== 0 && (a = Xl(l))))) : (m = n & ~i, m !== 0 ? a = Xl(m) : f !== 0 ? a = Xl(f) : l || (l = n & ~e, l !== 0 && (a = Xl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
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
  function Gc() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Ji(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function na(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function _0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var j = 31 - pt(l), H = 1 << j;
      m[j] = 0, v[j] = -1;
      var z = C[j];
      if (z !== null)
        for (C[j] = null, j = 0; j < z.length; j++) {
          var M = z[j];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~H;
    }
    n !== 0 && Vc(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Vc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Qc(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Zc(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : $i(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function $i(e) {
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
  function Wi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function kc() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Dh(e.type));
  }
  function Kc(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var gl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + gl, it = "__reactProps$" + gl, fn = "__reactContainer$" + gl, Fi = "__reactEvents$" + gl, z0 = "__reactListeners$" + gl, O0 = "__reactHandles$" + gl, Jc = "__reactResources$" + gl, aa = "__reactMarker$" + gl;
  function Ii(e) {
    delete e[Ie], delete e[it], delete e[Fi], delete e[z0], delete e[O0];
  }
  function dn(e) {
    var t = e[Ie];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[fn] || l[Ie]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = ph(e); e !== null; ) {
            if (l = e[Ie]) return l;
            e = ph(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function hn(e) {
    if (e = e[Ie] || e[fn]) {
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
  function mn(e) {
    var t = e[Jc];
    return t || (t = e[Jc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[aa] = !0;
  }
  var $c = /* @__PURE__ */ new Set(), Wc = {};
  function Gl(e, t) {
    yn(e, t), yn(e + "Capture", t);
  }
  function yn(e, t) {
    for (Wc[e] = t, e = 0; e < t.length; e++)
      $c.add(t[e]);
  }
  var N0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fc = {}, Ic = {};
  function M0(e) {
    return Zi.call(Ic, e) ? !0 : Zi.call(Fc, e) ? !1 : N0.test(e) ? Ic[e] = !0 : (Fc[e] = !0, !1);
  }
  function du(e, t, l) {
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
  function Jt(e, t, l, n) {
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
  function Pc(e) {
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
  function Pi(e) {
    if (!e._valueTracker) {
      var t = Pc(e) ? "checked" : "value";
      e._valueTracker = D0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function eo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Pc(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function mu(e) {
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
  function er(e, t, l, n, a, i, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? tr(e, f, At(t)) : l != null ? tr(e, f, At(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + At(m) : e.removeAttribute("name");
  }
  function to(e, t, l, n, a, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Pi(e);
        return;
      }
      l = l != null ? "" + At(l) : "", t = t != null ? "" + At(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Pi(e);
  }
  function tr(e, t, l) {
    t === "number" && mu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function gn(e, t, l, n) {
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
  function lo(e, t, l) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + At(l) : "";
  }
  function no(e, t, l, n) {
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
    l = At(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Pi(e);
  }
  function pn(e, t) {
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
  function ao(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || j0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function uo(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && ao(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && ao(e, i, t[i]);
  }
  function lr(e) {
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
  ]), L0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yu(e) {
    return L0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $t() {
  }
  var nr = null;
  function ar(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vn = null, bn = null;
  function io(e) {
    var t = hn(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (er(
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
                er(
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
              n = l[t], n.form === e.form && eo(n);
          }
          break e;
        case "textarea":
          lo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && gn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ur = !1;
  function ro(e, t, l) {
    if (ur) return e(t, l);
    ur = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ur = !1, (vn !== null || bn !== null) && (li(), vn && (t = vn, e = bn, bn = vn = null, io(t), e)))
        for (t = 0; t < e.length; t++) io(e[t]);
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
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ir = !1;
  if (Wt)
    try {
      var ra = {};
      Object.defineProperty(ra, "passive", {
        get: function() {
          ir = !0;
        }
      }), window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
    } catch {
      ir = !1;
    }
  var pl = null, rr = null, gu = null;
  function so() {
    if (gu) return gu;
    var e, t = rr, l = t.length, n, a = "value" in pl ? pl.value : pl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === a[i - n]; n++) ;
    return gu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function pu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vu() {
    return !0;
  }
  function co() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vu : co, this.isPropagationStopped = co, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = vu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = vu);
      },
      persist: function() {
      },
      isPersistent: vu
    }), t;
  }
  var Vl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bu = rt(Vl), sa = N({}, Vl, { view: 0, detail: 0 }), H0 = rt(sa), sr, cr, ca, Su = N({}, sa, {
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
    getModifierState: fr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ca && (ca && e.type === "mousemove" ? (sr = e.screenX - ca.screenX, cr = e.screenY - ca.screenY) : cr = sr = 0, ca = e), sr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : cr;
    }
  }), oo = rt(Su), q0 = N({}, Su, { dataTransfer: 0 }), Y0 = rt(q0), X0 = N({}, sa, { relatedTarget: 0 }), or = rt(X0), G0 = N({}, Vl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), V0 = rt(G0), Q0 = N({}, Vl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Z0 = rt(Q0), k0 = N({}, Vl, { data: 0 }), fo = rt(k0), K0 = {
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
  function fr() {
    return W0;
  }
  var F0 = N({}, sa, {
    key: function(e) {
      if (e.key) {
        var t = K0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fr,
    charCode: function(e) {
      return e.type === "keypress" ? pu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), I0 = rt(F0), P0 = N({}, Su, {
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
  }), ho = rt(P0), ey = N({}, sa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fr
  }), ty = rt(ey), ly = N({}, Vl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ny = rt(ly), ay = N({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uy = rt(ay), iy = N({}, Vl, {
    newState: 0,
    oldState: 0
  }), ry = rt(iy), sy = [9, 13, 27, 32], dr = Wt && "CompositionEvent" in window, oa = null;
  Wt && "documentMode" in document && (oa = document.documentMode);
  var cy = Wt && "TextEvent" in window && !oa, mo = Wt && (!dr || oa && 8 < oa && 11 >= oa), yo = " ", go = !1;
  function po(e, t) {
    switch (e) {
      case "keyup":
        return sy.indexOf(t.keyCode) !== -1;
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
  function vo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function oy(e, t) {
    switch (e) {
      case "compositionend":
        return vo(t);
      case "keypress":
        return t.which !== 32 ? null : (go = !0, yo);
      case "textInput":
        return e = t.data, e === yo && go ? null : e;
      default:
        return null;
    }
  }
  function fy(e, t) {
    if (Sn)
      return e === "compositionend" || !dr && po(e, t) ? (e = so(), gu = rr = pl = null, Sn = !1, e) : null;
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
        return mo && t.locale !== "ko" ? null : t.data;
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
  function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dy[e.type] : t === "textarea";
  }
  function So(e, t, l, n) {
    vn ? bn ? bn.push(n) : bn = [n] : vn = n, t = ci(t, "onChange"), 0 < t.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, da = null;
  function hy(e) {
    nh(e, 0);
  }
  function Eu(e) {
    var t = ua(e);
    if (eo(t)) return e;
  }
  function Eo(e, t) {
    if (e === "change") return t;
  }
  var xo = !1;
  if (Wt) {
    var hr;
    if (Wt) {
      var mr = "oninput" in document;
      if (!mr) {
        var To = document.createElement("div");
        To.setAttribute("oninput", "return;"), mr = typeof To.oninput == "function";
      }
      hr = mr;
    } else hr = !1;
    xo = hr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ro() {
    fa && (fa.detachEvent("onpropertychange", Ao), da = fa = null);
  }
  function Ao(e) {
    if (e.propertyName === "value" && Eu(da)) {
      var t = [];
      So(
        t,
        da,
        e,
        ar(e)
      ), ro(hy, t);
    }
  }
  function my(e, t, l) {
    e === "focusin" ? (Ro(), fa = t, da = l, fa.attachEvent("onpropertychange", Ao)) : e === "focusout" && Ro();
  }
  function yy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Eu(da);
  }
  function gy(e, t) {
    if (e === "click") return Eu(t);
  }
  function py(e, t) {
    if (e === "input" || e === "change")
      return Eu(t);
  }
  function vy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : vy;
  function ha(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Zi.call(t, a) || !vt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function wo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Co(e, t) {
    var l = wo(e);
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
      l = wo(l);
    }
  }
  function _o(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? _o(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = mu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = mu(e.document);
    }
    return t;
  }
  function yr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var by = Wt && "documentMode" in document && 11 >= document.documentMode, En = null, gr = null, ma = null, pr = !1;
  function Oo(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pr || En == null || En !== mu(n) || (n = En, "selectionStart" in n && yr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ma && ha(ma, n) || (ma = n, n = ci(gr, "onSelect"), 0 < n.length && (t = new bu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = En)));
  }
  function Ql(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var xn = {
    animationend: Ql("Animation", "AnimationEnd"),
    animationiteration: Ql("Animation", "AnimationIteration"),
    animationstart: Ql("Animation", "AnimationStart"),
    transitionrun: Ql("Transition", "TransitionRun"),
    transitionstart: Ql("Transition", "TransitionStart"),
    transitioncancel: Ql("Transition", "TransitionCancel"),
    transitionend: Ql("Transition", "TransitionEnd")
  }, vr = {}, No = {};
  Wt && (No = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
  function Zl(e) {
    if (vr[e]) return vr[e];
    if (!xn[e]) return e;
    var t = xn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in No)
        return vr[e] = t[l];
    return e;
  }
  var Mo = Zl("animationend"), Do = Zl("animationiteration"), Uo = Zl("animationstart"), Sy = Zl("transitionrun"), Ey = Zl("transitionstart"), xy = Zl("transitioncancel"), jo = Zl("transitionend"), Bo = /* @__PURE__ */ new Map(), br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  br.push("scrollEnd");
  function Bt(e, t) {
    Bo.set(e, t), Gl(t, [e]);
  }
  var xu = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ct = [], Tn = 0, Sr = 0;
  function Tu() {
    for (var e = Tn, t = Sr = Tn = 0; t < e; ) {
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
  function Ru(e, t, l, n) {
    Ct[Tn++] = e, Ct[Tn++] = t, Ct[Tn++] = l, Ct[Tn++] = n, Sr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Er(e, t, l, n) {
    return Ru(e, t, l, n), Au(e);
  }
  function kl(e, t) {
    return Ru(e, null, null, t), Au(e);
  }
  function Lo(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Au(e) {
    if (50 < Ba)
      throw Ba = 0, Os = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Rn = {};
  function Ty(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new Ty(e, t, l, n);
  }
  function xr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ft(e, t) {
    var l = e.alternate;
    return l === null ? (l = bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Ho(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function wu(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") xr(e) && (f = 1);
    else if (typeof e == "string")
      f = _1(
        e,
        l,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case pe:
          return e = bt(31, l, t, a), e.elementType = pe, e.lanes = i, e;
        case U:
          return Kl(l.children, a, i, t);
        case Q:
          f = 8, a |= 24;
          break;
        case V:
          return e = bt(12, l, t, a | 2), e.elementType = V, e.lanes = i, e;
        case le:
          return e = bt(13, l, t, a), e.elementType = le, e.lanes = i, e;
        case ae:
          return e = bt(19, l, t, a), e.elementType = ae, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                f = 10;
                break e;
              case k:
                f = 9;
                break e;
              case K:
                f = 11;
                break e;
              case I:
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
  function Kl(e, t, l, n) {
    return e = bt(7, e, n, t), e.lanes = l, e;
  }
  function Tr(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e;
  }
  function qo(e) {
    var t = bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Rr(e, t, l) {
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
  var Yo = /* @__PURE__ */ new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Yo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Hc(t)
      }, Yo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Hc(t)
    };
  }
  var An = [], wn = 0, Cu = null, ya = 0, zt = [], Ot = 0, vl = null, Vt = 1, Qt = "";
  function It(e, t) {
    An[wn++] = ya, An[wn++] = Cu, Cu = e, ya = t;
  }
  function Xo(e, t, l) {
    zt[Ot++] = Vt, zt[Ot++] = Qt, zt[Ot++] = vl, vl = e;
    var n = Vt;
    e = Qt;
    var a = 32 - pt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pt(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Vt = 1 << 32 - pt(t) + a | l << a | n, Qt = i + e;
    } else
      Vt = 1 << i | l << a | n, Qt = e;
  }
  function Ar(e) {
    e.return !== null && (It(e, 1), Xo(e, 1, 0));
  }
  function wr(e) {
    for (; e === Cu; )
      Cu = An[--wn], An[wn] = null, ya = An[--wn], An[wn] = null;
    for (; e === vl; )
      vl = zt[--Ot], zt[Ot] = null, Qt = zt[--Ot], zt[Ot] = null, Vt = zt[--Ot], zt[Ot] = null;
  }
  function Go(e, t) {
    zt[Ot++] = Vt, zt[Ot++] = Qt, zt[Ot++] = vl, Vt = t.id, Qt = t.overflow, vl = e;
  }
  var Pe = null, Me = null, ge = !1, bl = null, Nt = !1, Cr = Error(o(519));
  function Sl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ga(_t(t, e)), Cr;
  }
  function Vo(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[Ie] = e, t[it] = n, l) {
      case "dialog":
        he("cancel", t), he("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        he("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Ha.length; l++)
          he(Ha[l], t);
        break;
      case "source":
        he("error", t);
        break;
      case "img":
      case "image":
      case "link":
        he("error", t), he("load", t);
        break;
      case "details":
        he("toggle", t);
        break;
      case "input":
        he("invalid", t), to(
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
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), no(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || rh(t.textContent, l) ? (n.popover != null && (he("beforetoggle", t), he("toggle", t)), n.onScroll != null && he("scroll", t), n.onScrollEnd != null && he("scrollend", t), n.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || Sl(e, !0);
  }
  function Qo(e) {
    for (Pe = e.return; Pe; )
      switch (Pe.tag) {
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
          Pe = Pe.return;
      }
  }
  function Cn(e) {
    if (e !== Pe) return !1;
    if (!ge) return Qo(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Zs(e.type, e.memoizedProps)), l = !l), l && Me && Sl(e), Qo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = gh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = gh(e);
    } else
      t === 27 ? (t = Me, Ul(e.type) ? (e = Ws, Ws = null, Me = e) : Me = t) : Me = Pe ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Jl() {
    Me = Pe = null, ge = !1;
  }
  function _r() {
    var e = bl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), bl = null), e;
  }
  function ga(e) {
    bl === null ? bl = [e] : bl.push(e);
  }
  var zr = S(null), $l = null, Pt = null;
  function El(e, t, l) {
    Z(zr, t._currentValue), t._currentValue = l;
  }
  function el(e) {
    e._currentValue = zr.current, B(zr);
  }
  function Or(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Nr(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var m = i;
          i = a;
          for (var v = 0; v < t.length; v++)
            if (m.context === t[v]) {
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), Or(
                i.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          i = m.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(o(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), Or(f, l, e), f = null;
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
  function _n(e, t, l, n) {
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
          var m = a.type;
          vt(a.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (a === te.current) {
        if (f = a.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Va) : e = [Va]);
      }
      a = a.return;
    }
    e !== null && Nr(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function _u(e) {
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
  function Wl(e) {
    $l = e, Pt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return Zo($l, e);
  }
  function zu(e, t) {
    return $l === null && Wl(e), Zo(e, t);
  }
  function Zo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Pt === null) {
      if (e === null) throw Error(o(308));
      Pt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Pt = Pt.next = t;
    return l;
  }
  var Ry = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ay = r.unstable_scheduleCallback, wy = r.unstable_NormalPriority, Qe = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mr() {
    return {
      controller: new Ry(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && Ay(wy, function() {
      e.controller.abort();
    });
  }
  var va = null, Dr = 0, zn = 0, On = null;
  function Cy(e, t) {
    if (va === null) {
      var l = va = [];
      Dr = 0, zn = Bs(), On = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Dr++, t.then(ko, ko), t;
  }
  function ko() {
    if (--Dr === 0 && va !== null) {
      On !== null && (On.status = "fulfilled");
      var e = va;
      va = null, zn = 0, On = null;
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
  var Ko = Y.S;
  Y.S = function(e, t) {
    Nd = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && Cy(e, t), Ko !== null && Ko(e, t);
  };
  var Fl = S(null);
  function Ur() {
    var e = Fl.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function Ou(e, t) {
    t === null ? Z(Fl, Fl.current) : Z(Fl, t.pool);
  }
  function Jo() {
    var e = Ur();
    return e === null ? null : { parent: Qe._currentValue, pool: e };
  }
  var Nn = Error(o(460)), jr = Error(o(474)), Nu = Error(o(542)), Mu = { then: function() {
  } };
  function $o(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Wo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then($t, $t), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Io(e), e;
      default:
        if (typeof t.status == "string") t.then($t, $t);
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
            throw e = t.reason, Io(e), e;
        }
        throw Pl = t, Nn;
    }
  }
  function Il(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Pl = l, Nn) : l;
    }
  }
  var Pl = null;
  function Fo() {
    if (Pl === null) throw Error(o(459));
    var e = Pl;
    return Pl = null, e;
  }
  function Io(e) {
    if (e === Nn || e === Nu)
      throw Error(o(483));
  }
  var Mn = null, ba = 0;
  function Du(e) {
    var t = ba;
    return ba += 1, Mn === null && (Mn = []), Wo(Mn, e, t);
  }
  function Sa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Uu(e, t) {
    throw t.$$typeof === q ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Po(e) {
    function t(R, E) {
      if (e) {
        var w = R.deletions;
        w === null ? (R.deletions = [E], R.flags |= 16) : w.push(E);
      }
    }
    function l(R, E) {
      if (!e) return null;
      for (; E !== null; )
        t(R, E), E = E.sibling;
      return null;
    }
    function n(R) {
      for (var E = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? E.set(R.key, R) : E.set(R.index, R), R = R.sibling;
      return E;
    }
    function a(R, E) {
      return R = Ft(R, E), R.index = 0, R.sibling = null, R;
    }
    function i(R, E, w) {
      return R.index = w, e ? (w = R.alternate, w !== null ? (w = w.index, w < E ? (R.flags |= 67108866, E) : w) : (R.flags |= 67108866, E)) : (R.flags |= 1048576, E);
    }
    function f(R) {
      return e && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, E, w, L) {
      return E === null || E.tag !== 6 ? (E = Tr(w, R.mode, L), E.return = R, E) : (E = a(E, w), E.return = R, E);
    }
    function v(R, E, w, L) {
      var F = w.type;
      return F === U ? j(
        R,
        E,
        w.props.children,
        L,
        w.key
      ) : E !== null && (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Se && Il(F) === E.type) ? (E = a(E, w.props), Sa(E, w), E.return = R, E) : (E = wu(
        w.type,
        w.key,
        w.props,
        null,
        R.mode,
        L
      ), Sa(E, w), E.return = R, E);
    }
    function C(R, E, w, L) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== w.containerInfo || E.stateNode.implementation !== w.implementation ? (E = Rr(w, R.mode, L), E.return = R, E) : (E = a(E, w.children || []), E.return = R, E);
    }
    function j(R, E, w, L, F) {
      return E === null || E.tag !== 7 ? (E = Kl(
        w,
        R.mode,
        L,
        F
      ), E.return = R, E) : (E = a(E, w), E.return = R, E);
    }
    function H(R, E, w) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Tr(
          "" + E,
          R.mode,
          w
        ), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case _:
            return w = wu(
              E.type,
              E.key,
              E.props,
              null,
              R.mode,
              w
            ), Sa(w, E), w.return = R, w;
          case D:
            return E = Rr(
              E,
              R.mode,
              w
            ), E.return = R, E;
          case Se:
            return E = Il(E), H(R, E, w);
        }
        if (X(E) || Ye(E))
          return E = Kl(
            E,
            R.mode,
            w,
            null
          ), E.return = R, E;
        if (typeof E.then == "function")
          return H(R, Du(E), w);
        if (E.$$typeof === ee)
          return H(
            R,
            zu(R, E),
            w
          );
        Uu(R, E);
      }
      return null;
    }
    function z(R, E, w, L) {
      var F = E !== null ? E.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return F !== null ? null : m(R, E, "" + w, L);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return w.key === F ? v(R, E, w, L) : null;
          case D:
            return w.key === F ? C(R, E, w, L) : null;
          case Se:
            return w = Il(w), z(R, E, w, L);
        }
        if (X(w) || Ye(w))
          return F !== null ? null : j(R, E, w, L, null);
        if (typeof w.then == "function")
          return z(
            R,
            E,
            Du(w),
            L
          );
        if (w.$$typeof === ee)
          return z(
            R,
            E,
            zu(R, w),
            L
          );
        Uu(R, w);
      }
      return null;
    }
    function M(R, E, w, L, F) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return R = R.get(w) || null, m(E, R, "" + L, F);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _:
            return R = R.get(
              L.key === null ? w : L.key
            ) || null, v(E, R, L, F);
          case D:
            return R = R.get(
              L.key === null ? w : L.key
            ) || null, C(E, R, L, F);
          case Se:
            return L = Il(L), M(
              R,
              E,
              w,
              L,
              F
            );
        }
        if (X(L) || Ye(L))
          return R = R.get(w) || null, j(E, R, L, F, null);
        if (typeof L.then == "function")
          return M(
            R,
            E,
            w,
            Du(L),
            F
          );
        if (L.$$typeof === ee)
          return M(
            R,
            E,
            w,
            zu(E, L),
            F
          );
        Uu(E, L);
      }
      return null;
    }
    function J(R, E, w, L) {
      for (var F = null, ve = null, W = E, se = E = 0, ye = null; W !== null && se < w.length; se++) {
        W.index > se ? (ye = W, W = null) : ye = W.sibling;
        var be = z(
          R,
          W,
          w[se],
          L
        );
        if (be === null) {
          W === null && (W = ye);
          break;
        }
        e && W && be.alternate === null && t(R, W), E = i(be, E, se), ve === null ? F = be : ve.sibling = be, ve = be, W = ye;
      }
      if (se === w.length)
        return l(R, W), ge && It(R, se), F;
      if (W === null) {
        for (; se < w.length; se++)
          W = H(R, w[se], L), W !== null && (E = i(
            W,
            E,
            se
          ), ve === null ? F = W : ve.sibling = W, ve = W);
        return ge && It(R, se), F;
      }
      for (W = n(W); se < w.length; se++)
        ye = M(
          W,
          R,
          se,
          w[se],
          L
        ), ye !== null && (e && ye.alternate !== null && W.delete(
          ye.key === null ? se : ye.key
        ), E = i(
          ye,
          E,
          se
        ), ve === null ? F = ye : ve.sibling = ye, ve = ye);
      return e && W.forEach(function(ql) {
        return t(R, ql);
      }), ge && It(R, se), F;
    }
    function P(R, E, w, L) {
      if (w == null) throw Error(o(151));
      for (var F = null, ve = null, W = E, se = E = 0, ye = null, be = w.next(); W !== null && !be.done; se++, be = w.next()) {
        W.index > se ? (ye = W, W = null) : ye = W.sibling;
        var ql = z(R, W, be.value, L);
        if (ql === null) {
          W === null && (W = ye);
          break;
        }
        e && W && ql.alternate === null && t(R, W), E = i(ql, E, se), ve === null ? F = ql : ve.sibling = ql, ve = ql, W = ye;
      }
      if (be.done)
        return l(R, W), ge && It(R, se), F;
      if (W === null) {
        for (; !be.done; se++, be = w.next())
          be = H(R, be.value, L), be !== null && (E = i(be, E, se), ve === null ? F = be : ve.sibling = be, ve = be);
        return ge && It(R, se), F;
      }
      for (W = n(W); !be.done; se++, be = w.next())
        be = M(W, R, se, be.value, L), be !== null && (e && be.alternate !== null && W.delete(be.key === null ? se : be.key), E = i(be, E, se), ve === null ? F = be : ve.sibling = be, ve = be);
      return e && W.forEach(function(q1) {
        return t(R, q1);
      }), ge && It(R, se), F;
    }
    function Ce(R, E, w, L) {
      if (typeof w == "object" && w !== null && w.type === U && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            e: {
              for (var F = w.key; E !== null; ) {
                if (E.key === F) {
                  if (F = w.type, F === U) {
                    if (E.tag === 7) {
                      l(
                        R,
                        E.sibling
                      ), L = a(
                        E,
                        w.props.children
                      ), L.return = R, R = L;
                      break e;
                    }
                  } else if (E.elementType === F || typeof F == "object" && F !== null && F.$$typeof === Se && Il(F) === E.type) {
                    l(
                      R,
                      E.sibling
                    ), L = a(E, w.props), Sa(L, w), L.return = R, R = L;
                    break e;
                  }
                  l(R, E);
                  break;
                } else t(R, E);
                E = E.sibling;
              }
              w.type === U ? (L = Kl(
                w.props.children,
                R.mode,
                L,
                w.key
              ), L.return = R, R = L) : (L = wu(
                w.type,
                w.key,
                w.props,
                null,
                R.mode,
                L
              ), Sa(L, w), L.return = R, R = L);
            }
            return f(R);
          case D:
            e: {
              for (F = w.key; E !== null; ) {
                if (E.key === F)
                  if (E.tag === 4 && E.stateNode.containerInfo === w.containerInfo && E.stateNode.implementation === w.implementation) {
                    l(
                      R,
                      E.sibling
                    ), L = a(E, w.children || []), L.return = R, R = L;
                    break e;
                  } else {
                    l(R, E);
                    break;
                  }
                else t(R, E);
                E = E.sibling;
              }
              L = Rr(w, R.mode, L), L.return = R, R = L;
            }
            return f(R);
          case Se:
            return w = Il(w), Ce(
              R,
              E,
              w,
              L
            );
        }
        if (X(w))
          return J(
            R,
            E,
            w,
            L
          );
        if (Ye(w)) {
          if (F = Ye(w), typeof F != "function") throw Error(o(150));
          return w = F.call(w), P(
            R,
            E,
            w,
            L
          );
        }
        if (typeof w.then == "function")
          return Ce(
            R,
            E,
            Du(w),
            L
          );
        if (w.$$typeof === ee)
          return Ce(
            R,
            E,
            zu(R, w),
            L
          );
        Uu(R, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, E !== null && E.tag === 6 ? (l(R, E.sibling), L = a(E, w), L.return = R, R = L) : (l(R, E), L = Tr(w, R.mode, L), L.return = R, R = L), f(R)) : l(R, E);
    }
    return function(R, E, w, L) {
      try {
        ba = 0;
        var F = Ce(
          R,
          E,
          w,
          L
        );
        return Mn = null, F;
      } catch (W) {
        if (W === Nn || W === Nu) throw W;
        var ve = bt(29, W, null, R.mode);
        return ve.lanes = L, ve.return = R, ve;
      }
    };
  }
  var en = Po(!0), ef = Po(!1), xl = !1;
  function Br(e) {
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
  function Rl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (xe & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), Lo(e, null, l), t;
    }
    return Ru(e, n, t, l), Au(e);
  }
  function Ea(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Qc(e, l);
    }
  }
  function Hr(e, t) {
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
  var qr = !1;
  function xa() {
    if (qr) {
      var e = On;
      if (e !== null) throw e;
    }
  }
  function Ta(e, t, l, n) {
    qr = !1;
    var a = e.updateQueue;
    xl = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var v = m, C = v.next;
      v.next = null, f === null ? i = C : f.next = C, f = v;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, m = j.lastBaseUpdate, m !== f && (m === null ? j.firstBaseUpdate = C : m.next = C, j.lastBaseUpdate = v));
    }
    if (i !== null) {
      var H = a.baseState;
      f = 0, j = C = v = null, m = i;
      do {
        var z = m.lane & -536870913, M = z !== m.lane;
        if (M ? (me & z) === z : (n & z) === z) {
          z !== 0 && z === zn && (qr = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, P = m;
            z = t;
            var Ce = l;
            switch (P.tag) {
              case 1:
                if (J = P.payload, typeof J == "function") {
                  H = J.call(Ce, H, z);
                  break e;
                }
                H = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = P.payload, z = typeof J == "function" ? J.call(Ce, H, z) : J, z == null) break e;
                H = N({}, H, z);
                break e;
              case 2:
                xl = !0;
            }
          }
          z = m.callback, z !== null && (e.flags |= 64, M && (e.flags |= 8192), M = a.callbacks, M === null ? a.callbacks = [z] : M.push(z));
        } else
          M = {
            lane: z,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, j === null ? (C = j = M, v = H) : j = j.next = M, f |= z;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          M = m, m = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      j === null && (v = H), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = j, i === null && (a.shared.lanes = 0), zl |= f, e.lanes = f, e.memoizedState = H;
    }
  }
  function tf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function lf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        tf(l[e], t);
  }
  var Dn = S(null), ju = S(0);
  function nf(e, t) {
    e = cl, Z(ju, e), Z(Dn, t), cl = e | t.baseLanes;
  }
  function Yr() {
    Z(ju, cl), Z(Dn, Dn.current);
  }
  function Xr() {
    cl = ju.current, B(Dn), B(ju);
  }
  var St = S(null), Mt = null;
  function Al(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(St, e), Mt === null && (t === null || Dn.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Gr(e) {
    Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e);
  }
  function af(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e)) : wl();
  }
  function wl() {
    Z(Xe, Xe.current), Z(St, St.current);
  }
  function Et(e) {
    B(St), Mt === e && (Mt = null), B(Xe);
  }
  var Xe = S(0);
  function Bu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Js(l) || $s(l)))
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
  var tl = 0, ie = null, Ae = null, Ze = null, Lu = !1, Un = !1, tn = !1, Hu = 0, Ra = 0, jn = null, zy = 0;
  function He() {
    throw Error(o(321));
  }
  function Vr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Qr(e, t, l, n, a, i) {
    return tl = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Gf : us, tn = !1, i = l(n, a), tn = !1, Un && (i = rf(
      t,
      l,
      n,
      a
    )), uf(e), i;
  }
  function uf(e) {
    Y.H = Ca;
    var t = Ae !== null && Ae.next !== null;
    if (tl = 0, Ze = Ae = ie = null, Lu = !1, Ra = 0, jn = null, t) throw Error(o(300));
    e === null || ke || (e = e.dependencies, e !== null && _u(e) && (ke = !0));
  }
  function rf(e, t, l, n) {
    ie = e;
    var a = 0;
    do {
      if (Un && (jn = null), Ra = 0, Un = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Ze = Ae = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      Y.H = Vf, i = t(l, n);
    } while (Un);
    return i;
  }
  function Oy() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Aa(t) : t, e = e.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function Zr() {
    var e = Hu !== 0;
    return Hu = 0, e;
  }
  function kr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Kr(e) {
    if (Lu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Lu = !1;
    }
    tl = 0, Ze = Ae = ie = null, Un = !1, Ra = Hu = 0, jn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ze === null ? ie.memoizedState = Ze = e : Ze = Ze.next = e, Ze;
  }
  function Ge() {
    if (Ae === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ae.next;
    var t = Ze === null ? ie.memoizedState : Ze.next;
    if (t !== null)
      Ze = t, Ae = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(o(467)) : Error(o(310));
      Ae = e, e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null
      }, Ze === null ? ie.memoizedState = Ze = e : Ze = Ze.next = e;
    }
    return Ze;
  }
  function qu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Aa(e) {
    var t = Ra;
    return Ra += 1, jn === null && (jn = []), e = Wo(jn, e, t), t = ie, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Gf : us), e;
  }
  function Yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Aa(e);
      if (e.$$typeof === ee) return et(e);
    }
    throw Error(o(438, String(e)));
  }
  function Jr(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = qu(), ie.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Fe;
    return t.index++, l;
  }
  function ll(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xu(e) {
    var t = Ge();
    return $r(t, Ae, e);
  }
  function $r(e, t, l) {
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
      var m = f = null, v = null, C = t, j = !1;
      do {
        var H = C.lane & -536870913;
        if (H !== C.lane ? (me & H) === H : (tl & H) === H) {
          var z = C.revertLane;
          if (z === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), H === zn && (j = !0);
          else if ((tl & z) === z) {
            C = C.next, z === zn && (j = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, v === null ? (m = v = H, f = i) : v = v.next = H, ie.lanes |= z, zl |= z;
          H = C.action, tn && l(i, H), i = C.hasEagerState ? C.eagerState : l(i, H);
        } else
          z = {
            lane: H,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (m = v = z, f = i) : v = v.next = z, ie.lanes |= H, zl |= H;
        C = C.next;
      } while (C !== null && C !== t);
      if (v === null ? f = i : v.next = m, !vt(i, e.memoizedState) && (ke = !0, j && (l = On, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Wr(e) {
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
      vt(i, t.memoizedState) || (ke = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
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
      (Ae || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, ke = !0), a = a.queue, Pr(ff.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ze !== null && Ze.memoizedState.tag & 1) {
      if (n.flags |= 2048, Bn(
        9,
        { destroy: void 0 },
        of.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Oe === null) throw Error(o(349));
      i || (tl & 127) !== 0 || cf(n, t, l);
    }
    return l;
  }
  function cf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = qu(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function of(e, t, l, n) {
    t.value = l, t.getSnapshot = n, df(t) && hf(e);
  }
  function ff(e, t, l) {
    return l(function() {
      df(t) && hf(e);
    });
  }
  function df(e) {
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
    var t = kl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Fr(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), tn) {
        yl(!0);
        try {
          l();
        } finally {
          yl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ll,
      lastRenderedState: e
    }, t;
  }
  function mf(e, t, l, n) {
    return e.baseState = l, $r(
      e,
      Ae,
      typeof n == "function" ? n : ll
    );
  }
  function Ny(e, t, l, n, a) {
    if (Qu(e)) throw Error(o(485));
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
      Y.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, yf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function yf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = Y.T, f = {};
      Y.T = f;
      try {
        var m = l(a, n), v = Y.S;
        v !== null && v(f, m), gf(e, t, m);
      } catch (C) {
        Ir(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), Y.T = i;
      }
    } else
      try {
        i = l(a, n), gf(e, t, i);
      } catch (C) {
        Ir(e, t, C);
      }
  }
  function gf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        pf(e, t, n);
      },
      function(n) {
        return Ir(e, t, n);
      }
    ) : pf(e, t, l);
  }
  function pf(e, t, l) {
    t.status = "fulfilled", t.value = l, vf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, yf(e, l)));
  }
  function Ir(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, vf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function vf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function bf(e, t) {
    return t;
  }
  function Sf(e, t) {
    if (ge) {
      var l = Oe.formState;
      if (l !== null) {
        e: {
          var n = ie;
          if (ge) {
            if (Me) {
              t: {
                for (var a = Me, i = Nt; a.nodeType !== 8; ) {
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
                Me = Dt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Sl(n);
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
      lastRenderedReducer: bf,
      lastRenderedState: t
    }, l.queue = n, l = qf.bind(
      null,
      ie,
      n
    ), n.dispatch = l, n = Fr(!1), i = as.bind(
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
  function Ef(e) {
    var t = Ge();
    return xf(t, Ae, e);
  }
  function xf(e, t, l) {
    if (t = $r(
      e,
      t,
      bf
    )[0], e = Xu(ll)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Aa(t);
      } catch (f) {
        throw f === Nn ? Nu : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ie.flags |= 2048, Bn(
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
    var t = Ge(), l = Ae;
    if (l !== null)
      return xf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Bn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ie.updateQueue, t === null && (t = qu(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Rf() {
    return Ge().memoizedState;
  }
  function Gu(e, t, l, n) {
    var a = ut();
    ie.flags |= e, a.memoizedState = Bn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Vu(e, t, l, n) {
    var a = Ge();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Ae !== null && n !== null && Vr(n, Ae.memoizedState.deps) ? a.memoizedState = Bn(t, i, l, n) : (ie.flags |= e, a.memoizedState = Bn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function Af(e, t) {
    Gu(8390656, 8, e, t);
  }
  function Pr(e, t) {
    Vu(2048, 8, e, t);
  }
  function Dy(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = qu(), ie.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function wf(e) {
    var t = Ge().memoizedState;
    return Dy({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Cf(e, t) {
    return Vu(4, 2, e, t);
  }
  function _f(e, t) {
    return Vu(4, 4, e, t);
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
  function Of(e, t, l) {
    l = l != null ? l.concat([e]) : null, Vu(4, 4, zf.bind(null, t, e), l);
  }
  function es() {
  }
  function Nf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Vr(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Mf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Vr(t, n[1]))
      return n[0];
    if (n = e(), tn) {
      yl(!0);
      try {
        e();
      } finally {
        yl(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function ts(e, t, l) {
    return l === void 0 || (tl & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Dd(), ie.lanes |= e, zl |= e, l);
  }
  function Df(e, t, l, n) {
    return vt(l, t) ? l : Dn.current !== null ? (e = ts(e, l, n), vt(e, t) || (ke = !0), e) : (tl & 42) === 0 || (tl & 1073741824) !== 0 && (me & 261930) === 0 ? (ke = !0, e.memoizedState = l) : (e = Dd(), ie.lanes |= e, zl |= e, t);
  }
  function Uf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var f = Y.T, m = {};
    Y.T = m, as(e, !1, t, l);
    try {
      var v = a(), C = Y.S;
      if (C !== null && C(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var j = _y(
          v,
          n
        );
        wa(
          e,
          t,
          j,
          Rt(e)
        );
      } else
        wa(
          e,
          t,
          n,
          Rt(e)
        );
    } catch (H) {
      wa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Rt()
      );
    } finally {
      G.p = i, f !== null && m.types !== null && (f.types = m.types), Y.T = f;
    }
  }
  function Uy() {
  }
  function ls(e, t, l, n) {
    if (e.tag !== 5) throw Error(o(476));
    var a = jf(e).queue;
    Uf(
      e,
      a,
      t,
      fe,
      l === null ? Uy : function() {
        return Bf(e), l(n);
      }
    );
  }
  function jf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: fe,
      baseState: fe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: fe
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
        lastRenderedReducer: ll,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Bf(e) {
    var t = jf(e);
    t.next === null && (t = e.alternate.memoizedState), wa(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function ns() {
    return et(Va);
  }
  function Lf() {
    return Ge().memoizedState;
  }
  function Hf() {
    return Ge().memoizedState;
  }
  function jy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Rt();
          e = Tl(l);
          var n = Rl(t, e, l);
          n !== null && (dt(n, t, l), Ea(n, t, l)), t = { cache: Mr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function By(e, t, l) {
    var n = Rt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qu(e) ? Yf(t, l) : (l = Er(e, t, l, n), l !== null && (dt(l, e, n), Xf(l, t, n)));
  }
  function qf(e, t, l) {
    var n = Rt();
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
    if (Qu(e)) Yf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, m = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = m, vt(m, f))
            return Ru(e, t, a, 0), Oe === null && Tu(), !1;
        } catch {
        }
      if (l = Er(e, t, a, n), l !== null)
        return dt(l, e, n), Xf(l, t, n), !0;
    }
    return !1;
  }
  function as(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Bs(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Er(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Qu(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Yf(e, t) {
    Un = Lu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Xf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Qc(e, l);
    }
  }
  var Ca = {
    readContext: et,
    use: Yu,
    useCallback: He,
    useContext: He,
    useEffect: He,
    useImperativeHandle: He,
    useLayoutEffect: He,
    useInsertionEffect: He,
    useMemo: He,
    useReducer: He,
    useRef: He,
    useState: He,
    useDebugValue: He,
    useDeferredValue: He,
    useTransition: He,
    useSyncExternalStore: He,
    useId: He,
    useHostTransitionStatus: He,
    useFormState: He,
    useActionState: He,
    useOptimistic: He,
    useMemoCache: He,
    useCacheRefresh: He
  };
  Ca.useEffectEvent = He;
  var Gf = {
    readContext: et,
    use: Yu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: et,
    useEffect: Af,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Gu(
        4194308,
        4,
        zf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Gu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Gu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ut();
      t = t === void 0 ? null : t;
      var n = e();
      if (tn) {
        yl(!0);
        try {
          e();
        } finally {
          yl(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ut();
      if (l !== void 0) {
        var a = l(t);
        if (tn) {
          yl(!0);
          try {
            l(t);
          } finally {
            yl(!1);
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
      e = Fr(e);
      var t = e.queue, l = qf.bind(null, ie, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: es,
    useDeferredValue: function(e, t) {
      var l = ut();
      return ts(l, e, t);
    },
    useTransition: function() {
      var e = Fr(!1);
      return e = Uf.bind(
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
        (me & 127) !== 0 || cf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, Af(ff.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Bn(
        9,
        { destroy: void 0 },
        of.bind(
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
        var l = Qt, n = Vt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Hu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = zy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ns,
    useFormState: Sf,
    useActionState: Sf,
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
      return t.queue = l, t = as.bind(
        null,
        ie,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Jr,
    useCacheRefresh: function() {
      return ut().memoizedState = jy.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((xe & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, us = {
    readContext: et,
    use: Yu,
    useCallback: Nf,
    useContext: et,
    useEffect: Pr,
    useImperativeHandle: Of,
    useInsertionEffect: Cf,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Xu,
    useRef: Rf,
    useState: function() {
      return Xu(ll);
    },
    useDebugValue: es,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Df(
        l,
        Ae.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xu(ll)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: sf,
    useId: Lf,
    useHostTransitionStatus: ns,
    useFormState: Ef,
    useActionState: Ef,
    useOptimistic: function(e, t) {
      var l = Ge();
      return mf(l, Ae, e, t);
    },
    useMemoCache: Jr,
    useCacheRefresh: Hf
  };
  us.useEffectEvent = wf;
  var Vf = {
    readContext: et,
    use: Yu,
    useCallback: Nf,
    useContext: et,
    useEffect: Pr,
    useImperativeHandle: Of,
    useInsertionEffect: Cf,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Wr,
    useRef: Rf,
    useState: function() {
      return Wr(ll);
    },
    useDebugValue: es,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ae === null ? ts(l, e, t) : Df(
        l,
        Ae.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Wr(ll)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: sf,
    useId: Lf,
    useHostTransitionStatus: ns,
    useFormState: Tf,
    useActionState: Tf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ae !== null ? mf(l, Ae, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Jr,
    useCacheRefresh: Hf
  };
  Vf.useEffectEvent = wf;
  function is(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : N({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var rs = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = Tl(n);
      a.payload = t, l != null && (a.callback = l), t = Rl(e, a, n), t !== null && (dt(t, e, n), Ea(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = Tl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Rl(e, a, n), t !== null && (dt(t, e, n), Ea(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Rt(), n = Tl(l);
      n.tag = 2, t != null && (n.callback = t), t = Rl(e, n, l), t !== null && (dt(t, e, l), Ea(t, e, l));
    }
  };
  function Qf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function Zf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && rs.enqueueReplaceState(t, t.state, null);
  }
  function ln(e, t) {
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
  function kf(e) {
    xu(e);
  }
  function Kf(e) {
    console.error(e);
  }
  function Jf(e) {
    xu(e);
  }
  function Zu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function $f(e, t, l) {
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
  function ss(e, t, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Zu(e, t);
    }, l;
  }
  function Wf(e) {
    return e = Tl(e), e.tag = 3, e;
  }
  function Ff(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        $f(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      $f(t, l, n), typeof a != "function" && (Ol === null ? Ol = /* @__PURE__ */ new Set([this]) : Ol.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function Ly(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && _n(
        t,
        l,
        a,
        !0
      ), l = St.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Mt === null ? ni() : l.alternate === null && qe === 0 && (qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Ds(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Ds(e, n, a)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Ds(e, n, a), ni(), !1;
    }
    if (ge)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Cr && (e = Error(o(422), { cause: n }), ga(_t(e, l)))) : (n !== Cr && (t = Error(o(423), {
        cause: n
      }), ga(
        _t(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = ss(
        e.stateNode,
        n,
        a
      ), Hr(e, a), qe !== 4 && (qe = 2)), !1;
    var i = Error(o(520), { cause: n });
    if (i = _t(i, l), ja === null ? ja = [i] : ja.push(i), qe !== 4 && (qe = 2), t === null) return !0;
    n = _t(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ss(l.stateNode, n, e), Hr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ol === null || !Ol.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Wf(a), Ff(
              a,
              e,
              l,
              n
            ), Hr(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var cs = Error(o(461)), ke = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? ef(t, null, l, n) : en(
      t,
      e.child,
      l,
      n
    );
  }
  function If(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var m in n)
        m !== "ref" && (f[m] = n[m]);
    } else f = n;
    return Wl(t), n = Qr(
      e,
      t,
      l,
      f,
      i,
      a
    ), m = Zr(), e !== null && !ke ? (kr(e, t, a), nl(e, t, a)) : (ge && m && Ar(t), t.flags |= 1, tt(e, t, n, a), t.child);
  }
  function Pf(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !xr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, ed(
        e,
        t,
        i,
        n,
        a
      )) : (e = wu(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !ps(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ha, l(f, n) && e.ref === t.ref)
        return nl(e, t, a);
    }
    return t.flags |= 1, e = Ft(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ed(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (ke = !1, t.pendingProps = n = i, ps(e, a))
          (e.flags & 131072) !== 0 && (ke = !0);
        else
          return t.lanes = e.lanes, nl(e, t, a);
    }
    return os(
      e,
      t,
      l,
      n,
      a
    );
  }
  function td(e, t, l, n) {
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
        return ld(
          e,
          t,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ou(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? nf(t, i) : Yr(), af(t);
      else
        return n = t.lanes = 536870912, ld(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Ou(t, i.cachePool), nf(t, i), wl(), t.memoizedState = null) : (e !== null && Ou(t, null), Yr(), wl());
    return tt(e, t, a, l), t.child;
  }
  function _a(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ld(e, t, l, n, a) {
    var i = Ur();
    return i = i === null ? null : { parent: Qe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ou(t, null), Yr(), af(t), e !== null && _n(e, t, n, !0), t.childLanes = a, null;
  }
  function ku(e, t) {
    return t = Ju(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function nd(e, t, l) {
    return en(t, e.child, null, l), e = ku(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function Hy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = ku(t, n), t.lanes = 536870912, _a(null, e);
        if (Gr(t), (e = Me) ? (e = yh(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Vt, overflow: Qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = qo(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return t.lanes = 536870912, null;
      }
      return ku(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Gr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = nd(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (ke || _n(e, t, l, !1), a = (l & e.childLanes) !== 0, ke || a) {
        if (n = Oe, n !== null && (f = Zc(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, kl(e, f), dt(n, e, f), cs;
        ni(), t = nd(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Me = Dt(f.nextSibling), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && Go(t, e), t = ku(t, n), t.flags |= 4096;
      return t;
    }
    return e = Ft(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ku(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function os(e, t, l, n, a) {
    return Wl(t), l = Qr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Zr(), e !== null && !ke ? (kr(e, t, a), nl(e, t, a)) : (ge && n && Ar(t), t.flags |= 1, tt(e, t, l, a), t.child);
  }
  function ad(e, t, l, n, a, i) {
    return Wl(t), t.updateQueue = null, l = rf(
      t,
      n,
      l,
      a
    ), uf(e), n = Zr(), e !== null && !ke ? (kr(e, t, i), nl(e, t, i)) : (ge && n && Ar(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function ud(e, t, l, n, a) {
    if (Wl(t), t.stateNode === null) {
      var i = Rn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rs, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Br(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : Rn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (is(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && rs.enqueueReplaceState(i, i.state, null), Ta(t, n, i, a), xa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, v = ln(l, m);
      i.props = v;
      var C = i.context, j = l.contextType;
      f = Rn, typeof j == "object" && j !== null && (f = et(j));
      var H = l.getDerivedStateFromProps;
      j = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, j || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || C !== f) && Zf(
        t,
        i,
        n,
        f
      ), xl = !1;
      var z = t.memoizedState;
      i.state = z, Ta(t, n, i, a), xa(), C = t.memoizedState, m || z !== C || xl ? (typeof H == "function" && (is(
        t,
        l,
        H,
        n
      ), C = t.memoizedState), (v = xl || Qf(
        t,
        l,
        v,
        n,
        z,
        C,
        f
      )) ? (j || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Lr(e, t), f = t.memoizedProps, j = ln(l, f), i.props = j, H = t.pendingProps, z = i.context, C = l.contextType, v = Rn, typeof C == "object" && C !== null && (v = et(C)), m = l.getDerivedStateFromProps, (C = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== H || z !== v) && Zf(
        t,
        i,
        n,
        v
      ), xl = !1, z = t.memoizedState, i.state = z, Ta(t, n, i, a), xa();
      var M = t.memoizedState;
      f !== H || z !== M || xl || e !== null && e.dependencies !== null && _u(e.dependencies) ? (typeof m == "function" && (is(
        t,
        l,
        m,
        n
      ), M = t.memoizedState), (j = xl || Qf(
        t,
        l,
        j,
        n,
        z,
        M,
        v
      ) || e !== null && e.dependencies !== null && _u(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, M, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        M,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = v, n = j) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Ku(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = en(
      t,
      e.child,
      null,
      a
    ), t.child = en(
      t,
      null,
      l,
      a
    )) : tt(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = nl(
      e,
      t,
      a
    ), e;
  }
  function id(e, t, l, n) {
    return Jl(), t.flags |= 256, tt(e, t, l, n), t.child;
  }
  var fs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ds(e) {
    return { baseLanes: e, cachePool: Jo() };
  }
  function hs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Tt), e;
  }
  function rd(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Al(t) : wl(), (e = Me) ? (e = yh(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Vt, overflow: Qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = qo(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return $s(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = n.children;
      return n = n.fallback, a ? (wl(), a = t.mode, m = Ju(
        { mode: "hidden", children: m },
        a
      ), n = Kl(
        n,
        a,
        l,
        null
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = ds(l), n.childLanes = hs(
        e,
        f,
        l
      ), t.memoizedState = fs, _a(null, n)) : (Al(t), ms(t, m));
    }
    var v = e.memoizedState;
    if (v !== null && (m = v.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (Al(t), t.flags &= -257, t = ys(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (wl(), t.child = e.child, t.flags |= 128, t = null) : (wl(), m = n.fallback, a = t.mode, n = Ju(
          { mode: "visible", children: n.children },
          a
        ), m = Kl(
          m,
          a,
          l,
          null
        ), m.flags |= 2, n.return = t, m.return = t, n.sibling = m, t.child = n, en(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = ds(l), n.childLanes = hs(
          e,
          f,
          l
        ), t.memoizedState = fs, t = _a(null, n));
      else if (Al(t), $s(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(o(419)), n.stack = "", n.digest = f, ga({ value: n, source: null, stack: null }), t = ys(
          e,
          t,
          l
        );
      } else if (ke || _n(e, t, l, !1), f = (l & e.childLanes) !== 0, ke || f) {
        if (f = Oe, f !== null && (n = Zc(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, kl(e, n), dt(f, e, n), cs;
        Js(m) || ni(), t = ys(
          e,
          t,
          l
        );
      } else
        Js(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Me = Dt(
          m.nextSibling
        ), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && Go(t, e), t = ms(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (wl(), m = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = Ft(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? m = Ft(
      C,
      m
    ) : (m = Kl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, _a(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = ds(l) : (a = m.cachePool, a !== null ? (v = Qe._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Jo(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = hs(
      e,
      f,
      l
    ), t.memoizedState = fs, _a(e.child, n)) : (Al(t), l = e.child, e = l.sibling, l = Ft(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function ms(e, t) {
    return t = Ju(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ju(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function ys(e, t, l) {
    return en(t, e.child, null, l), e = ms(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function sd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Or(e.return, t, l);
  }
  function gs(e, t, l, n, a, i) {
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
  function cd(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = Xe.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Z(Xe, f), tt(e, t, n, l), n = ge ? ya : 0, !m && e !== null && (e.flags & 128) !== 0)
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
          e = l.alternate, e !== null && Bu(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), gs(
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
          if (e = a.alternate, e !== null && Bu(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        gs(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        gs(
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
  function nl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), zl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (_n(
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
      for (e = t.child, l = Ft(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Ft(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function ps(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _u(e)));
  }
  function qy(e, t, l) {
    switch (t.tag) {
      case 3:
        Be(t, t.stateNode.containerInfo), El(t, Qe, e.memoizedState.cache), Jl();
        break;
      case 27:
      case 5:
        Xt(t);
        break;
      case 4:
        Be(t, t.stateNode.containerInfo);
        break;
      case 10:
        El(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Gr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Al(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? rd(e, t, l) : (Al(t), e = nl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Al(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (_n(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return cd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Z(Xe, Xe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, td(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        El(t, Qe, e.memoizedState.cache);
    }
    return nl(e, t, l);
  }
  function od(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ke = !0;
      else {
        if (!ps(e, l) && (t.flags & 128) === 0)
          return ke = !1, qy(
            e,
            t,
            l
          );
        ke = (e.flags & 131072) !== 0;
      }
    else
      ke = !1, ge && (t.flags & 1048576) !== 0 && Xo(t, ya, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Il(t.elementType), t.type = e, typeof e == "function")
            xr(e) ? (n = ln(e, n), t.tag = 1, t = ud(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = os(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === K) {
                t.tag = 11, t = If(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === I) {
                t.tag = 14, t = Pf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = Ve(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return os(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = ln(
          n,
          t.pendingProps
        ), ud(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (Be(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Lr(e, t), Ta(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, El(t, Qe, n), n !== i.cache && Nr(
            t,
            [Qe],
            l,
            !0
          ), xa(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = id(
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
              ), ga(a), t = id(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Dt(e.firstChild), Pe = t, ge = !0, bl = null, Nt = !0, l = ef(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Jl(), n === a) {
              t = nl(
                e,
                t,
                l
              );
              break e;
            }
            tt(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ku(e, t), e === null ? (l = Eh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = oi(
          oe.current
        ).createElement(l), n[Ie] = t, n[it] = e, lt(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = Eh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Xt(t), e === null && ge && (n = t.stateNode = vh(
          t.type,
          t.pendingProps,
          oe.current
        ), Pe = t, Nt = !0, a = Me, Ul(t.type) ? (Ws = a, Me = Dt(n.firstChild)) : Me = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ku(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = Me) && (n = y1(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Pe = t, Me = Dt(n.firstChild), Nt = !1, a = !0) : a = !1), a || Sl(t)), Xt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Zs(a, i) ? n = null : f !== null && Zs(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Qr(
          e,
          t,
          Oy,
          null,
          null,
          l
        ), Va._currentValue = a), Ku(e, t), tt(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = Me) && (l = g1(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Pe = t, Me = null, e = !0) : e = !1), e || Sl(t)), null;
      case 13:
        return rd(e, t, l);
      case 4:
        return Be(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = en(
          t,
          null,
          n,
          l
        ) : tt(e, t, n, l), t.child;
      case 11:
        return If(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return tt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, El(t, t.type, n.value), tt(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Wl(t), a = et(a), n = n(a), t.flags |= 1, tt(e, t, n, l), t.child;
      case 14:
        return Pf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return ed(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return cd(e, t, l);
      case 31:
        return Hy(e, t, l);
      case 22:
        return td(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Wl(t), n = et(Qe), e === null ? (a = Ur(), a === null && (a = Oe, i = Mr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Br(t), El(t, Qe, a)) : ((e.lanes & l) !== 0 && (Lr(e, t), Ta(t, null, null, l), xa()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), El(t, Qe, n)) : (n = i.cache, El(t, Qe, n), n !== a.cache && Nr(
          t,
          [Qe],
          l,
          !0
        ))), tt(
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
  function al(e) {
    e.flags |= 4;
  }
  function vs(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Ld()) e.flags |= 8192;
        else
          throw Pl = Mu, jr;
    } else e.flags &= -16777217;
  }
  function fd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !wh(t))
      if (Ld()) e.flags |= 8192;
      else
        throw Pl = Mu, jr;
  }
  function $u(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gc() : 536870912, e.lanes |= t, Yn |= t);
  }
  function za(e, t) {
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
  function De(e) {
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
    switch (wr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return De(t), null;
      case 1:
        return De(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), el(Qe), ze(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Cn(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _r())), De(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (al(t), i !== null ? (De(t), fd(t, i)) : (De(t), vs(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (al(t), De(t), fd(t, i)) : (De(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && al(t), De(t), vs(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (Gt(t), l = oe.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return De(t), null;
          }
          e = $.current, Cn(t) ? Vo(t) : (e = vh(a, n, l), t.stateNode = e, al(t));
        }
        return De(t), null;
      case 5:
        if (Gt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return De(t), null;
          }
          if (i = $.current, Cn(t))
            Vo(t);
          else {
            var f = oi(
              oe.current
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
            i[Ie] = t, i[it] = n;
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
            e: switch (lt(i, a, n), a) {
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
            n && al(t);
          }
        }
        return De(t), vs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = oe.current, Cn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Pe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || rh(e.nodeValue, l)), e || Sl(t, !0);
          } else
            e = oi(e).createTextNode(
              n
            ), e[Ie] = t, t.stateNode = e;
        }
        return De(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Cn(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Ie] = t;
            } else
              Jl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            De(t), e = !1;
          } else
            l = _r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return De(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Cn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Ie] = t;
            } else
              Jl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            De(t), a = !1;
          } else
            a = _r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return Et(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), $u(t, t.updateQueue), De(t), null);
      case 4:
        return ze(), e === null && Ys(t.stateNode.containerInfo), De(t), null;
      case 10:
        return el(t.type), De(t), null;
      case 19:
        if (B(Xe), n = t.memoizedState, n === null) return De(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) za(n, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, za(n, !1), e = i.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Ho(l, e), l = l.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && It(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > ei && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Bu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, $u(t, e), za(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ge)
                return De(t), null;
            } else
              2 * yt() - n.renderingStartTime > ei && l !== 536870912 && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Xe.current, Z(
          Xe,
          a ? l & 1 | 2 : l & 1
        ), ge && It(t, n.treeForkCount), e) : (De(t), null);
      case 22:
      case 23:
        return Et(t), Xr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), l = t.updateQueue, l !== null && $u(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && B(Fl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), el(Qe), De(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Xy(e, t) {
    switch (wr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return el(Qe), ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Gt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(o(340));
          Jl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Jl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(Xe), null;
      case 4:
        return ze(), null;
      case 10:
        return el(t.type), null;
      case 22:
      case 23:
        return Et(t), Xr(), e !== null && B(Fl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return el(Qe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dd(e, t) {
    switch (wr(t), t.tag) {
      case 3:
        el(Qe), ze();
        break;
      case 26:
      case 27:
      case 5:
        Gt(t);
        break;
      case 4:
        ze();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        B(Xe);
        break;
      case 10:
        el(t.type);
        break;
      case 22:
      case 23:
        Et(t), Xr(), e !== null && B(Fl);
        break;
      case 24:
        el(Qe);
    }
  }
  function Oa(e, t) {
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
    } catch (m) {
      Re(t, t.return, m);
    }
  }
  function Cl(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, a = t;
              var v = l, C = m;
              try {
                C();
              } catch (j) {
                Re(
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
      Re(t, t.return, j);
    }
  }
  function hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        lf(t, l);
      } catch (n) {
        Re(e, e.return, n);
      }
    }
  }
  function md(e, t, l) {
    l.props = ln(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Re(e, t, n);
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
      Re(e, t, a);
    }
  }
  function Zt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Re(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Re(e, t, a);
        }
      else l.current = null;
  }
  function yd(e) {
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
      Re(e, e.return, a);
    }
  }
  function bs(e, t, l) {
    try {
      var n = e.stateNode;
      c1(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function gd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function Ss(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Es(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = $t));
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Es(e, t, l), e = e.sibling; e !== null; )
        Es(e, t, l), e = e.sibling;
  }
  function Wu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Wu(e, t, l), e = e.sibling; e !== null; )
        Wu(e, t, l), e = e.sibling;
  }
  function pd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      lt(t, n, l), t[Ie] = e, t[it] = l;
    } catch (i) {
      Re(e, e.return, i);
    }
  }
  var ul = !1, Ke = !1, xs = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Gy(e, t) {
    if (e = e.containerInfo, Vs = pi, e = zo(e), yr(e)) {
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
            var f = 0, m = -1, v = -1, C = 0, j = 0, H = e, z = null;
            t: for (; ; ) {
              for (var M; H !== l || a !== 0 && H.nodeType !== 3 || (m = f + a), H !== i || n !== 0 && H.nodeType !== 3 || (v = f + n), H.nodeType === 3 && (f += H.nodeValue.length), (M = H.firstChild) !== null; )
                z = H, H = M;
              for (; ; ) {
                if (H === e) break t;
                if (z === l && ++C === a && (m = f), z === i && ++j === n && (v = f), (M = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = M;
            }
            l = m === -1 || v === -1 ? null : { start: m, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Qs = { focusedElem: e, selectionRange: l }, pi = !1, We = t; We !== null; )
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
                  var J = ln(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    J,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (P) {
                  Re(
                    l,
                    l.return,
                    P
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Ks(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ks(e);
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
  function bd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        rl(e, l), n & 4 && Oa(5, l);
        break;
      case 1:
        if (rl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Re(l, l.return, f);
            }
          else {
            var a = ln(
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
              Re(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && hd(l), n & 512 && Na(l, l.return);
        break;
      case 3:
        if (rl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
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
            lf(e, t);
          } catch (f) {
            Re(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && pd(l);
      case 26:
      case 5:
        rl(e, l), t === null && n & 4 && yd(l), n & 512 && Na(l, l.return);
        break;
      case 12:
        rl(e, l);
        break;
      case 31:
        rl(e, l), n & 4 && xd(e, l);
        break;
      case 13:
        rl(e, l), n & 4 && Td(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Fy.bind(
          null,
          l
        ), p1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ul, !n) {
          t = t !== null && t.memoizedState !== null || Ke, a = ul;
          var i = Ke;
          ul = n, (Ke = t) && !i ? sl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : rl(e, l), ul = a, Ke = i;
        }
        break;
      case 30:
        break;
      default:
        rl(e, l);
    }
  }
  function Sd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, st = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; )
      Ed(e, t, l), l = l.sibling;
  }
  function Ed(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(ta, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ke || Zt(l, t), il(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ke || Zt(l, t);
        var n = je, a = st;
        Ul(l.type) && (je = l.stateNode, st = !1), il(
          e,
          t,
          l
        ), Ya(l.stateNode), je = n, st = a;
        break;
      case 5:
        Ke || Zt(l, t);
      case 6:
        if (n = je, a = st, je = null, il(
          e,
          t,
          l
        ), je = n, st = a, je !== null)
          if (st)
            try {
              (je.nodeType === 9 ? je.body : je.nodeName === "HTML" ? je.ownerDocument.body : je).removeChild(l.stateNode);
            } catch (i) {
              Re(
                l,
                t,
                i
              );
            }
          else
            try {
              je.removeChild(l.stateNode);
            } catch (i) {
              Re(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        je !== null && (st ? (e = je, hh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Jn(e)) : hh(je, l.stateNode));
        break;
      case 4:
        n = je, a = st, je = l.stateNode.containerInfo, st = !0, il(
          e,
          t,
          l
        ), je = n, st = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Cl(2, l, t), Ke || Cl(4, l, t), il(
          e,
          t,
          l
        );
        break;
      case 1:
        Ke || (Zt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && md(
          l,
          t,
          n
        )), il(
          e,
          t,
          l
        );
        break;
      case 21:
        il(
          e,
          t,
          l
        );
        break;
      case 22:
        Ke = (n = Ke) || l.memoizedState !== null, il(
          e,
          t,
          l
        ), Ke = n;
        break;
      default:
        il(
          e,
          t,
          l
        );
    }
  }
  function xd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Jn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
    }
  }
  function Td(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Jn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function Vy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new vd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new vd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Fu(e, t) {
    var l = Vy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Iy.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function ct(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ul(m.type)) {
                je = m.stateNode, st = !1;
                break e;
              }
              break;
            case 5:
              je = m.stateNode, st = !1;
              break e;
            case 3:
            case 4:
              je = m.stateNode.containerInfo, st = !0;
              break e;
          }
          m = m.return;
        }
        if (je === null) throw Error(o(160));
        Ed(i, f, a), je = null, st = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Rd(t, e), t = t.sibling;
  }
  var Lt = null;
  function Rd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ct(t, e), ot(e), n & 4 && (Cl(3, e, e.return), Oa(3, e), Cl(5, e, e.return));
        break;
      case 1:
        ct(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), n & 64 && ul && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Lt;
        if (ct(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[aa] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), lt(i, n, l), i[Ie] = e, $e(i), n = i;
                      break e;
                    case "link":
                      var f = Rh(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (i = f[m], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), lt(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = Rh(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (i = f[m], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), lt(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, n));
                  }
                  i[Ie] = e, $e(i), n = i;
                }
                e.stateNode = n;
              } else
                Ah(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Th(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Ah(
              a,
              e.type,
              e.stateNode
            ) : Th(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && bs(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ct(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), l !== null && n & 4 && bs(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ct(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            pn(a, "");
          } catch (J) {
            Re(e, e.return, J);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, bs(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (xs = !0);
        break;
      case 6:
        if (ct(t, e), ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (J) {
            Re(e, e.return, J);
          }
        }
        break;
      case 3:
        if (hi = null, a = Lt, Lt = fi(t.containerInfo), ct(t, e), Lt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Jn(t.containerInfo);
          } catch (J) {
            Re(e, e.return, J);
          }
        xs && (xs = !1, Ad(e));
        break;
      case 4:
        n = Lt, Lt = fi(
          e.stateNode.containerInfo
        ), ct(t, e), ot(e), Lt = n;
        break;
      case 12:
        ct(t, e), ot(e);
        break;
      case 31:
        ct(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 13:
        ct(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Pu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = ul, j = Ke;
        if (ul = C || a, Ke = j || v, ct(t, e), Ke = j, ul = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || ul || Ke || nn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = v.stateNode;
                    var H = v.memoizedProps.style, z = H != null && H.hasOwnProperty("display") ? H.display : null;
                    m.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (J) {
                  Re(v, v.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (J) {
                  Re(v, v.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var M = v.stateNode;
                  a ? mh(M, !0) : mh(v.stateNode, !1);
                } catch (J) {
                  Re(v, v.return, J);
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
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Fu(e, l))));
        break;
      case 19:
        ct(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ct(t, e), ot(e);
    }
  }
  function ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, n = e.return; n !== null; ) {
          if (gd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Ss(e);
            Wu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (pn(f, ""), l.flags &= -33);
            var m = Ss(e);
            Wu(e, m, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, C = Ss(e);
            Es(
              e,
              C,
              v
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Re(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ad(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ad(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function rl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        bd(e, t.alternate, t), t = t.sibling;
  }
  function nn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Cl(4, t, t.return), nn(t);
          break;
        case 1:
          Zt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && md(
            t,
            t.return,
            l
          ), nn(t);
          break;
        case 27:
          Ya(t.stateNode);
        case 26:
        case 5:
          Zt(t, t.return), nn(t);
          break;
        case 22:
          t.memoizedState === null && nn(t);
          break;
        case 30:
          nn(t);
          break;
        default:
          nn(t);
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
          ), Oa(4, i);
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
              Re(n, n.return, C);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var m = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  tf(v[a], m);
            } catch (C) {
              Re(n, n.return, C);
            }
          }
          l && f & 64 && hd(i), Na(i, i.return);
          break;
        case 27:
          pd(i);
        case 26:
        case 5:
          sl(
            a,
            i,
            l
          ), l && n === null && f & 4 && yd(i), Na(i, i.return);
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
          ), l && f & 4 && xd(a, i);
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
  function Ts(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && pa(l));
  }
  function Rs(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function Ht(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        wd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function wd(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ht(
          e,
          t,
          l,
          n
        ), a & 2048 && Oa(9, t);
        break;
      case 1:
        Ht(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Ht(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e)));
        break;
      case 12:
        if (a & 2048) {
          Ht(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, f = i.id, m = i.onPostCommit;
            typeof m == "function" && m(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (v) {
            Re(t, t.return, v);
          }
        } else
          Ht(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Ht(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Ht(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Ht(
          e,
          t,
          l,
          n
        ) : Ma(e, t) : i._visibility & 2 ? Ht(
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
        )), a & 2048 && Ts(f, t);
        break;
      case 24:
        Ht(
          e,
          t,
          l,
          n
        ), a & 2048 && Rs(t.alternate, t);
        break;
      default:
        Ht(
          e,
          t,
          l,
          n
        );
    }
  }
  function Ln(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, m = l, v = n, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ln(
            i,
            f,
            m,
            v,
            a
          ), Oa(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? Ln(
            i,
            f,
            m,
            v,
            a
          ) : Ma(
            i,
            f
          ) : (j._visibility |= 2, Ln(
            i,
            f,
            m,
            v,
            a
          )), a && C & 2048 && Ts(
            f.alternate,
            f
          );
          break;
        case 24:
          Ln(
            i,
            f,
            m,
            v,
            a
          ), a && C & 2048 && Rs(f.alternate, f);
          break;
        default:
          Ln(
            i,
            f,
            m,
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
            Ma(l, n), a & 2048 && Ts(
              n.alternate,
              n
            );
            break;
          case 24:
            Ma(l, n), a & 2048 && Rs(n.alternate, n);
            break;
          default:
            Ma(l, n);
        }
        t = t.sibling;
      }
  }
  var Da = 8192;
  function Hn(e, t, l) {
    if (e.subtreeFlags & Da)
      for (e = e.child; e !== null; )
        Cd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Cd(e, t, l) {
    switch (e.tag) {
      case 26:
        Hn(
          e,
          t,
          l
        ), e.flags & Da && e.memoizedState !== null && z1(
          l,
          Lt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Hn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Lt;
        Lt = fi(e.stateNode.containerInfo), Hn(
          e,
          t,
          l
        ), Lt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Da, Da = 16777216, Hn(
          e,
          t,
          l
        ), Da = n) : Hn(
          e,
          t,
          l
        ));
        break;
      default:
        Hn(
          e,
          t,
          l
        );
    }
  }
  function _d(e) {
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
          We = n, Od(
            n,
            e
          );
        }
      _d(e);
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
        Ua(e), e.flags & 2048 && Cl(9, e, e.return);
        break;
      case 3:
        Ua(e);
        break;
      case 12:
        Ua(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Iu(e)) : Ua(e);
        break;
      default:
        Ua(e);
    }
  }
  function Iu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          We = n, Od(
            n,
            e
          );
        }
      _d(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, t, t.return), Iu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Iu(t));
          break;
        default:
          Iu(t);
      }
      e = e.sibling;
    }
  }
  function Od(e, t) {
    for (; We !== null; ) {
      var l = We;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, l, t);
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
          if (Sd(n), n === l) {
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
      var t = et(Qe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return et(Qe).controller.signal;
    }
  }, Zy = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, Oe = null, de = null, me = 0, Te = 0, xt = null, _l = !1, qn = !1, As = !1, cl = 0, qe = 0, zl = 0, an = 0, ws = 0, Tt = 0, Yn = 0, ja = null, ft = null, Cs = !1, Pu = 0, Nd = 0, ei = 1 / 0, ti = null, Ol = null, Je = 0, Nl = null, Xn = null, ol = 0, _s = 0, zs = null, Md = null, Ba = 0, Os = null;
  function Rt() {
    return (xe & 2) !== 0 && me !== 0 ? me & -me : Y.T !== null ? Bs() : kc();
  }
  function Dd() {
    if (Tt === 0)
      if ((me & 536870912) === 0 || ge) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Tt = e;
      } else Tt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), Tt;
  }
  function dt(e, t, l) {
    (e === Oe && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (Gn(e, 0), Ml(
      e,
      me,
      Tt,
      !1
    )), na(e, l), ((xe & 2) === 0 || e !== Oe) && (e === Oe && ((xe & 2) === 0 && (an |= l), qe === 4 && Ml(
      e,
      me,
      Tt,
      !1
    )), kt(e));
  }
  function Ud(e, t, l) {
    if ((xe & 6) !== 0) throw Error(o(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || la(e, t), a = n ? Jy(e, t) : Ms(e, t, !0), i = n;
    do {
      if (a === 0) {
        qn && !n && Ml(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !ky(l)) {
          a = Ms(e, t, !1), i = !1;
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
              var m = e;
              a = ja;
              var v = m.current.memoizedState.isDehydrated;
              if (v && (Gn(m, f).flags |= 256), f = Ms(
                m,
                f,
                !1
              ), f !== 2) {
                if (As && !v) {
                  m.errorRecoveryDisabledLanes |= i, an |= i, a = 4;
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
          Gn(e, 0), Ml(e, t, 0, !0);
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
              Ml(
                n,
                t,
                Tt,
                !_l
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
          if ((t & 62914560) === t && (a = Pu + 300 - yt(), 10 < a)) {
            if (Ml(
              n,
              t,
              Tt,
              !_l
            ), fu(n, 0, !0) !== 0) break e;
            ol = t, n.timeoutHandle = fh(
              jd.bind(
                null,
                n,
                l,
                ft,
                ti,
                Cs,
                t,
                Tt,
                an,
                Yn,
                _l,
                i,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          jd(
            n,
            l,
            ft,
            ti,
            Cs,
            t,
            Tt,
            an,
            Yn,
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
    kt(e);
  }
  function jd(e, t, l, n, a, i, f, m, v, C, j, H, z, M) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: $t
      }, Cd(
        t,
        i,
        H
      );
      var J = (i & 62914560) === i ? Pu - yt() : (i & 4194048) === i ? Nd - yt() : 0;
      if (J = O1(
        H,
        J
      ), J !== null) {
        ol = i, e.cancelPendingCommit = J(
          Vd.bind(
            null,
            e,
            t,
            i,
            l,
            n,
            a,
            f,
            m,
            v,
            j,
            H,
            null,
            z,
            M
          )
        ), Ml(e, i, f, !C);
        return;
      }
    }
    Vd(
      e,
      t,
      i,
      l,
      n,
      a,
      f,
      m,
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
  function Ml(e, t, l, n) {
    t &= ~ws, t &= ~an, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Vc(e, l, t);
  }
  function li() {
    return (xe & 6) === 0 ? (La(0), !1) : !0;
  }
  function Ns() {
    if (de !== null) {
      if (Te === 0)
        var e = de.return;
      else
        e = de, Pt = $l = null, Kr(e), Mn = null, ba = 0, e = de;
      for (; e !== null; )
        dd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Gn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, d1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ol = 0, Ns(), Oe = e, de = l = Ft(e.current, null), me = t, Te = 0, xt = null, _l = !1, qn = la(e, t), As = !1, Yn = Tt = ws = an = zl = qe = 0, ft = ja = null, Cs = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return cl = t, Tu(), l;
  }
  function Bd(e, t) {
    ie = null, Y.H = Ca, t === Nn || t === Nu ? (t = Fo(), Te = 3) : t === jr ? (t = Fo(), Te = 4) : Te = t === cs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, de === null && (qe = 1, Zu(
      e,
      _t(t, e.current)
    ));
  }
  function Ld() {
    var e = St.current;
    return e === null ? !0 : (me & 4194048) === me ? Mt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Mt : !1;
  }
  function Hd() {
    var e = Y.H;
    return Y.H = Ca, e === null ? Ca : e;
  }
  function qd() {
    var e = Y.A;
    return Y.A = Qy, e;
  }
  function ni() {
    qe = 4, _l || (me & 4194048) !== me && St.current !== null || (qn = !0), (zl & 134217727) === 0 && (an & 134217727) === 0 || Oe === null || Ml(
      Oe,
      me,
      Tt,
      !1
    );
  }
  function Ms(e, t, l) {
    var n = xe;
    xe |= 2;
    var a = Hd(), i = qd();
    (Oe !== e || me !== t) && (ti = null, Gn(e, t)), t = !1;
    var f = qe;
    e: do
      try {
        if (Te !== 0 && de !== null) {
          var m = de, v = xt;
          switch (Te) {
            case 8:
              Ns(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var C = Te;
              if (Te = 0, xt = null, Vn(e, m, v, C), l && qn) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Te, Te = 0, xt = null, Vn(e, m, v, C);
          }
        }
        Ky(), f = qe;
        break;
      } catch (j) {
        Bd(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Pt = $l = null, xe = n, Y.H = a, Y.A = i, de === null && (Oe = null, me = 0, Tu()), f;
  }
  function Ky() {
    for (; de !== null; ) Yd(de);
  }
  function Jy(e, t) {
    var l = xe;
    xe |= 2;
    var n = Hd(), a = qd();
    Oe !== e || me !== t ? (ti = null, ei = yt() + 500, Gn(e, t)) : qn = la(
      e,
      t
    );
    e: do
      try {
        if (Te !== 0 && de !== null) {
          t = de;
          var i = xt;
          t: switch (Te) {
            case 1:
              Te = 0, xt = null, Vn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if ($o(i)) {
                Te = 0, xt = null, Xd(t);
                break;
              }
              t = function() {
                Te !== 2 && Te !== 9 || Oe !== e || (Te = 7), kt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              $o(i) ? (Te = 0, xt = null, Xd(t)) : (Te = 0, xt = null, Vn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var m = de;
                  if (f ? wh(f) : m.stateNode.complete) {
                    Te = 0, xt = null;
                    var v = m.sibling;
                    if (v !== null) de = v;
                    else {
                      var C = m.return;
                      C !== null ? (de = C, ai(C)) : de = null;
                    }
                    break t;
                  }
              }
              Te = 0, xt = null, Vn(e, t, i, 5);
              break;
            case 6:
              Te = 0, xt = null, Vn(e, t, i, 6);
              break;
            case 8:
              Ns(), qe = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        $y();
        break;
      } catch (j) {
        Bd(e, j);
      }
    while (!0);
    return Pt = $l = null, Y.H = n, Y.A = a, xe = l, de !== null ? 0 : (Oe = null, me = 0, Tu(), qe);
  }
  function $y() {
    for (; de !== null && !v0(); )
      Yd(de);
  }
  function Yd(e) {
    var t = od(e.alternate, e, cl);
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : de = t;
  }
  function Xd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ad(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          me
        );
        break;
      case 11:
        t = ad(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          me
        );
        break;
      case 5:
        Kr(t);
      default:
        dd(l, t), t = de = Ho(t, cl), t = od(l, t, cl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : de = t;
  }
  function Vn(e, t, l, n) {
    Pt = $l = null, Kr(t), Mn = null, ba = 0;
    var a = t.return;
    try {
      if (Ly(
        e,
        a,
        t,
        l,
        me
      )) {
        qe = 1, Zu(
          e,
          _t(l, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw de = a, i;
      qe = 1, Zu(
        e,
        _t(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ge || n === 1 ? e = !0 : qn || (me & 536870912) !== 0 ? e = !1 : (_l = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Gd(t, e)) : ai(t);
  }
  function ai(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Gd(
          t,
          _l
        );
        return;
      }
      e = t.return;
      var l = Yy(
        t.alternate,
        t,
        cl
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
    qe === 0 && (qe = 5);
  }
  function Gd(e, t) {
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
    qe = 6, de = null;
  }
  function Vd(e, t, l, n, a, i, f, m, v) {
    e.cancelPendingCommit = null;
    do
      ui();
    while (Je !== 0);
    if ((xe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= Sr, _0(
        e,
        l,
        i,
        f,
        m,
        v
      ), e === Oe && (de = Oe = null, me = 0), Xn = t, Nl = e, ol = l, _s = i, zs = a, Md = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Py(ru, function() {
        return Jd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = Y.T, Y.T = null, a = G.p, G.p = 2, f = xe, xe |= 4;
        try {
          Gy(e, t, l);
        } finally {
          xe = f, G.p = a, Y.T = n;
        }
      }
      Je = 1, Qd(), Zd(), kd();
    }
  }
  function Qd() {
    if (Je === 1) {
      Je = 0;
      var e = Nl, t = Xn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = Y.T, Y.T = null;
        var n = G.p;
        G.p = 2;
        var a = xe;
        xe |= 4;
        try {
          Rd(t, e);
          var i = Qs, f = zo(e.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (f !== m && m && m.ownerDocument && _o(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && yr(m)) {
              var C = v.start, j = v.end;
              if (j === void 0 && (j = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  j,
                  m.value.length
                );
              else {
                var H = m.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), J = m.textContent.length, P = Math.min(v.start, J), Ce = v.end === void 0 ? P : Math.min(v.end, J);
                  !M.extend && P > Ce && (f = Ce, Ce = P, P = f);
                  var R = Co(
                    m,
                    P
                  ), E = Co(
                    m,
                    Ce
                  );
                  if (R && E && (M.rangeCount !== 1 || M.anchorNode !== R.node || M.anchorOffset !== R.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var w = H.createRange();
                    w.setStart(R.node, R.offset), M.removeAllRanges(), P > Ce ? (M.addRange(w), M.extend(E.node, E.offset)) : (w.setEnd(E.node, E.offset), M.addRange(w));
                  }
                }
              }
            }
            for (H = [], M = m; M = M.parentNode; )
              M.nodeType === 1 && H.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < H.length; m++) {
              var L = H[m];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          pi = !!Vs, Qs = Vs = null;
        } finally {
          xe = a, G.p = n, Y.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function Zd() {
    if (Je === 2) {
      Je = 0;
      var e = Nl, t = Xn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = Y.T, Y.T = null;
        var n = G.p;
        G.p = 2;
        var a = xe;
        xe |= 4;
        try {
          bd(e, t.alternate, t);
        } finally {
          xe = a, G.p = n, Y.T = l;
        }
      }
      Je = 3;
    }
  }
  function kd() {
    if (Je === 4 || Je === 3) {
      Je = 0, b0();
      var e = Nl, t = Xn, l = ol, n = Md;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Xn = Nl = null, Kd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Ol = null), Wi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
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
        t = Y.T, a = G.p, G.p = 2, Y.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var m = n[f];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          Y.T = t, G.p = a;
        }
      }
      (ol & 3) !== 0 && ui(), kt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Os ? Ba++ : (Ba = 0, Os = e) : Ba = 0, La(0);
    }
  }
  function Kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ui() {
    return Qd(), Zd(), kd(), Jd();
  }
  function Jd() {
    if (Je !== 5) return !1;
    var e = Nl, t = _s;
    _s = 0;
    var l = Wi(ol), n = Y.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, Y.T = null, l = zs, zs = null;
      var i = Nl, f = ol;
      if (Je = 0, Xn = Nl = null, ol = 0, (xe & 6) !== 0) throw Error(o(331));
      var m = xe;
      if (xe |= 4, zd(i.current), wd(
        i,
        i.current,
        f,
        l
      ), xe = m, La(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(ta, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, Y.T = n, Kd(e, t);
    }
  }
  function $d(e, t, l) {
    t = _t(l, t), t = ss(e.stateNode, t, 2), e = Rl(e, t, 2), e !== null && (na(e, 2), kt(e));
  }
  function Re(e, t, l) {
    if (e.tag === 3)
      $d(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $d(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ol === null || !Ol.has(n))) {
            e = _t(l, e), l = Wf(2), n = Rl(t, l, 2), n !== null && (Ff(
              l,
              n,
              t,
              e
            ), na(n, 2), kt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ds(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Zy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (As = !0, a.add(l), e = Wy.bind(null, e, t, l), t.then(e, e));
  }
  function Wy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (me & l) === l && (qe === 4 || qe === 3 && (me & 62914560) === me && 300 > yt() - Pu ? (xe & 2) === 0 && Gn(e, 0) : ws |= l, Yn === me && (Yn = 0)), kt(e);
  }
  function Wd(e, t) {
    t === 0 && (t = Gc()), e = kl(e, t), e !== null && (na(e, t), kt(e));
  }
  function Fy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Wd(e, l);
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
    n !== null && n.delete(t), Wd(e, l);
  }
  function Py(e, t) {
    return ki(e, t);
  }
  var ii = null, Qn = null, Us = !1, ri = !1, js = !1, Dl = 0;
  function kt(e) {
    e !== Qn && e.next === null && (Qn === null ? ii = Qn = e : Qn = Qn.next = e), ri = !0, Us || (Us = !0, t1());
  }
  function La(e, t) {
    if (!js && ri) {
      js = !0;
      do
        for (var l = !1, n = ii; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, eh(n, i));
          } else
            i = me, i = fu(
              n,
              n === Oe ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || la(n, i) || (l = !0, eh(n, i));
          n = n.next;
        }
      while (l);
      js = !1;
    }
  }
  function e1() {
    Fd();
  }
  function Fd() {
    ri = Us = !1;
    var e = 0;
    Dl !== 0 && f1() && (e = Dl);
    for (var t = yt(), l = null, n = ii; n !== null; ) {
      var a = n.next, i = Id(n, t);
      i === 0 ? (n.next = null, l === null ? ii = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ri = !0)), n = a;
    }
    Je !== 0 && Je !== 5 || La(e), Dl !== 0 && (Dl = 0);
  }
  function Id(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, v = a[f];
      v === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = C0(m, t)) : v <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = Oe, l = me, l = fu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ki(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || la(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ki(n), Wi(l)) {
        case 2:
        case 8:
          l = Yc;
          break;
        case 32:
          l = ru;
          break;
        case 268435456:
          l = Xc;
          break;
        default:
          l = ru;
      }
      return n = Pd.bind(null, e), l = ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ki(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Pd(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ui() && e.callbackNode !== l)
      return null;
    var n = me;
    return n = fu(
      e,
      e === Oe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Ud(e, n, t), Id(e, yt()), e.callbackNode != null && e.callbackNode === l ? Pd.bind(null, e) : null);
  }
  function eh(e, t) {
    if (ui()) return null;
    Ud(e, t, !0);
  }
  function t1() {
    h1(function() {
      (xe & 6) !== 0 ? ki(
        qc,
        e1
      ) : Fd();
    });
  }
  function Bs() {
    if (Dl === 0) {
      var e = zn;
      e === 0 && (e = su, su <<= 1, (su & 261888) === 0 && (su = 256)), Dl = e;
    }
    return Dl;
  }
  function th(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
  }
  function lh(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function l1(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = th(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? th(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var m = new bu(
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
                  var v = f ? lh(a, f) : new FormData(a);
                  ls(
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
                typeof i == "function" && (m.preventDefault(), v = f ? lh(a, f) : new FormData(a), ls(
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
  for (var Ls = 0; Ls < br.length; Ls++) {
    var Hs = br[Ls], n1 = Hs.toLowerCase(), a1 = Hs[0].toUpperCase() + Hs.slice(1);
    Bt(
      n1,
      "on" + a1
    );
  }
  Bt(Mo, "onAnimationEnd"), Bt(Do, "onAnimationIteration"), Bt(Uo, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(Sy, "onTransitionRun"), Bt(Ey, "onTransitionStart"), Bt(xy, "onTransitionCancel"), Bt(jo, "onTransitionEnd"), yn("onMouseEnter", ["mouseout", "mouseover"]), yn("onMouseLeave", ["mouseout", "mouseover"]), yn("onPointerEnter", ["pointerout", "pointerover"]), yn("onPointerLeave", ["pointerout", "pointerover"]), Gl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Gl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Gl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Gl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Gl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Gl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ha = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), u1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha)
  );
  function nh(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var m = n[f], v = m.instance, C = m.currentTarget;
            if (m = m.listener, v !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              xu(j);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (m = n[f], v = m.instance, C = m.currentTarget, m = m.listener, v !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              xu(j);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function he(e, t) {
    var l = t[Fi];
    l === void 0 && (l = t[Fi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (ah(t, e, 2, !1), l.add(n));
  }
  function qs(e, t, l) {
    var n = 0;
    t && (n |= 4), ah(
      l,
      e,
      n,
      t
    );
  }
  var si = "_reactListening" + Math.random().toString(36).slice(2);
  function Ys(e) {
    if (!e[si]) {
      e[si] = !0, $c.forEach(function(l) {
        l !== "selectionchange" && (u1.has(l) || qs(l, !1, e), qs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[si] || (t[si] = !0, qs("selectionchange", !1, t));
    }
  }
  function ah(e, t, l, n) {
    switch (Dh(t)) {
      case 2:
        var a = D1;
        break;
      case 8:
        a = U1;
        break;
      default:
        a = tc;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !ir || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function Xs(e, t, l, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var m = n.stateNode.containerInfo;
          if (m === a) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var v = f.tag;
              if ((v === 3 || v === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = dn(m), f === null) return;
            if (v = f.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              n = i = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    ro(function() {
      var C = i, j = ar(l), H = [];
      e: {
        var z = Bo.get(e);
        if (z !== void 0) {
          var M = bu, J = e;
          switch (e) {
            case "keypress":
              if (pu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = I0;
              break;
            case "focusin":
              J = "focus", M = or;
              break;
            case "focusout":
              J = "blur", M = or;
              break;
            case "beforeblur":
            case "afterblur":
              M = or;
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
              M = oo;
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
            case Mo:
            case Do:
            case Uo:
              M = V0;
              break;
            case jo:
              M = ny;
              break;
            case "scroll":
            case "scrollend":
              M = H0;
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
          var P = (t & 4) !== 0, Ce = !P && (e === "scroll" || e === "scrollend"), R = P ? z !== null ? z + "Capture" : null : z;
          P = [];
          for (var E = C, w; E !== null; ) {
            var L = E;
            if (w = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || w === null || R === null || (L = ia(E, R), L != null && P.push(
              qa(E, L, w)
            )), Ce) break;
            E = E.return;
          }
          0 < P.length && (z = new M(
            z,
            J,
            null,
            l,
            j
          ), H.push({ event: z, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== nr && (J = l.relatedTarget || l.fromElement) && (dn(J) || J[fn]))
            break e;
          if ((M || z) && (z = j.window === j ? j : (z = j.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = C, J = J ? dn(J) : null, J !== null && (Ce = h(J), P = J.tag, J !== Ce || P !== 5 && P !== 27 && P !== 6) && (J = null)) : (M = null, J = C), M !== J)) {
            if (P = oo, L = "onMouseLeave", R = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (P = ho, L = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Ce = M == null ? z : ua(M), w = J == null ? z : ua(J), z = new P(
              L,
              E + "leave",
              M,
              l,
              j
            ), z.target = Ce, z.relatedTarget = w, L = null, dn(j) === C && (P = new P(
              R,
              E + "enter",
              J,
              l,
              j
            ), P.target = w, P.relatedTarget = Ce, L = P), Ce = L, M && J)
              t: {
                for (P = i1, R = M, E = J, w = 0, L = R; L; L = P(L))
                  w++;
                L = 0;
                for (var F = E; F; F = P(F))
                  L++;
                for (; 0 < w - L; )
                  R = P(R), w--;
                for (; 0 < L - w; )
                  E = P(E), L--;
                for (; w--; ) {
                  if (R === E || E !== null && R === E.alternate) {
                    P = R;
                    break t;
                  }
                  R = P(R), E = P(E);
                }
                P = null;
              }
            else P = null;
            M !== null && uh(
              H,
              z,
              M,
              P,
              !1
            ), J !== null && Ce !== null && uh(
              H,
              Ce,
              J,
              P,
              !0
            );
          }
        }
        e: {
          if (z = C ? ua(C) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var ve = Eo;
          else if (bo(z))
            if (xo)
              ve = py;
            else {
              ve = yy;
              var W = my;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && lr(C.elementType) && (ve = Eo) : ve = gy;
          if (ve && (ve = ve(e, C))) {
            So(
              H,
              ve,
              l,
              j
            );
            break e;
          }
          W && W(e, z, C), e === "focusout" && C && z.type === "number" && C.memoizedProps.value != null && tr(z, "number", z.value);
        }
        switch (W = C ? ua(C) : window, e) {
          case "focusin":
            (bo(W) || W.contentEditable === "true") && (En = W, gr = C, ma = null);
            break;
          case "focusout":
            ma = gr = En = null;
            break;
          case "mousedown":
            pr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pr = !1, Oo(H, l, j);
            break;
          case "selectionchange":
            if (by) break;
          case "keydown":
          case "keyup":
            Oo(H, l, j);
        }
        var se;
        if (dr)
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
          Sn ? po(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (mo && l.locale !== "ko" && (Sn || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Sn && (se = so()) : (pl = j, rr = "value" in pl ? pl.value : pl.textContent, Sn = !0)), W = ci(C, ye), 0 < W.length && (ye = new fo(
          ye,
          e,
          null,
          l,
          j
        ), H.push({ event: ye, listeners: W }), se ? ye.data = se : (se = vo(l), se !== null && (ye.data = se)))), (se = cy ? oy(e, l) : fy(e, l)) && (ye = ci(C, "onBeforeInput"), 0 < ye.length && (W = new fo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          j
        ), H.push({
          event: W,
          listeners: ye
        }), W.data = se)), l1(
          H,
          e,
          C,
          l,
          j
        );
      }
      nh(H, t);
    });
  }
  function qa(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ci(e, t) {
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
  function uh(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var m = l, v = m.alternate, C = m.stateNode;
      if (m = m.tag, v !== null && v === n) break;
      m !== 5 && m !== 26 && m !== 27 || C === null || (v = C, a ? (C = ia(l, i), C != null && f.unshift(
        qa(l, C, v)
      )) : a || (C = ia(l, i), C != null && f.push(
        qa(l, C, v)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var r1 = /\r\n?/g, s1 = /\u0000|\uFFFD/g;
  function ih(e) {
    return (typeof e == "string" ? e : "" + e).replace(r1, `
`).replace(s1, "");
  }
  function rh(e, t) {
    return t = ih(t), ih(e) === t;
  }
  function we(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || pn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && pn(e, "" + n);
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
        uo(e, n, i);
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
        n = yu("" + n), e.setAttribute(l, n);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && we(e, t, "name", a.name, a, null), we(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), we(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), we(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (we(e, t, "encType", a.encType, a, null), we(e, t, "method", a.method, a, null), we(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = yu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = $t);
        break;
      case "onScroll":
        n != null && he("scroll", e);
        break;
      case "onScrollEnd":
        n != null && he("scrollend", e);
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
        l = yu("" + n), e.setAttributeNS(
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
        he("beforetoggle", e), he("toggle", e), du(e, "popover", n);
        break;
      case "xlinkActuate":
        Jt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Jt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Jt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Jt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Jt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Jt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Jt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Jt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Jt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        du(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = B0.get(l) || l, du(e, l, n));
    }
  }
  function Gs(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        uo(e, n, i);
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
        typeof n == "string" ? pn(e, n) : (typeof n == "number" || typeof n == "bigint") && pn(e, "" + n);
        break;
      case "onScroll":
        n != null && he("scroll", e);
        break;
      case "onScrollEnd":
        n != null && he("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = $t);
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
        if (!Wc.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[it] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : du(e, l, n);
          }
    }
  }
  function lt(e, t, l) {
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
        he("error", e), he("load", e);
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
                  we(e, t, i, f, l, null);
              }
          }
        a && we(e, t, "srcSet", l.srcSet, l, null), n && we(e, t, "src", l.src, l, null);
        return;
      case "input":
        he("invalid", e);
        var m = i = f = a = null, v = null, C = null;
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
                  m = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(o(137, t));
                  break;
                default:
                  we(e, t, n, j, l, null);
              }
          }
        to(
          e,
          i,
          m,
          v,
          C,
          f,
          a,
          !1
        );
        return;
      case "select":
        he("invalid", e), n = f = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (m = l[a], m != null))
            switch (a) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                n = m;
              default:
                we(e, t, a, m, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? gn(e, !!n, t, !1) : l != null && gn(e, !!n, l, !0);
        return;
      case "textarea":
        he("invalid", e), i = a = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (m = l[f], m != null))
            switch (f) {
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
                if (m != null) throw Error(o(91));
                break;
              default:
                we(e, t, f, m, l, null);
            }
        no(e, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : we(e, t, v, n, l, null));
        return;
      case "dialog":
        he("beforetoggle", e), he("toggle", e), he("cancel", e), he("close", e);
        break;
      case "iframe":
      case "object":
        he("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Ha.length; n++)
          he(Ha[n], e);
        break;
      case "image":
        he("error", e), he("load", e);
        break;
      case "details":
        he("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        he("error", e), he("load", e);
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
                we(e, t, C, n, l, null);
            }
        return;
      default:
        if (lr(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (n = l[j], n !== void 0 && Gs(
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
    for (m in l)
      l.hasOwnProperty(m) && (n = l[m], n != null && we(e, t, m, n, l, null));
  }
  function c1(e, t, l, n) {
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
        var a = null, i = null, f = null, m = null, v = null, C = null, j = null;
        for (M in l) {
          var H = l[M];
          if (l.hasOwnProperty(M) && H != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = H;
              default:
                n.hasOwnProperty(M) || we(e, t, M, null, n, H);
            }
        }
        for (var z in n) {
          var M = n[z];
          if (H = l[z], n.hasOwnProperty(z) && (M != null || H != null))
            switch (z) {
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
                m = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== H && we(
                  e,
                  t,
                  z,
                  M,
                  n,
                  H
                );
            }
        }
        er(
          e,
          f,
          m,
          v,
          C,
          j,
          i,
          a
        );
        return;
      case "select":
        M = f = m = z = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                M = v;
              default:
                n.hasOwnProperty(i) || we(
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
                z = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== v && we(
                  e,
                  t,
                  a,
                  i,
                  n,
                  v
                );
            }
        t = m, l = f, n = M, z != null ? gn(e, !!l, z, !1) : !!n != !!l && (t != null ? gn(e, !!l, t, !0) : gn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (m in l)
          if (a = l[m], l.hasOwnProperty(m) && a != null && !n.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                we(e, t, m, null, n, a);
            }
        for (f in n)
          if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                z = a;
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
                a !== i && we(e, t, f, a, n, i);
            }
        lo(e, z, M);
        return;
      case "option":
        for (var J in l)
          z = l[J], l.hasOwnProperty(J) && z != null && !n.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : we(
            e,
            t,
            J,
            null,
            n,
            z
          ));
        for (v in n)
          z = n[v], M = l[v], n.hasOwnProperty(v) && z !== M && (z != null || M != null) && (v === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : we(
            e,
            t,
            v,
            z,
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
        for (var P in l)
          z = l[P], l.hasOwnProperty(P) && z != null && !n.hasOwnProperty(P) && we(e, t, P, null, n, z);
        for (C in n)
          if (z = n[C], M = l[C], n.hasOwnProperty(C) && z !== M && (z != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  C,
                  z,
                  n,
                  M
                );
            }
        return;
      default:
        if (lr(t)) {
          for (var Ce in l)
            z = l[Ce], l.hasOwnProperty(Ce) && z !== void 0 && !n.hasOwnProperty(Ce) && Gs(
              e,
              t,
              Ce,
              void 0,
              n,
              z
            );
          for (j in n)
            z = n[j], M = l[j], !n.hasOwnProperty(j) || z === M || z === void 0 && M === void 0 || Gs(
              e,
              t,
              j,
              z,
              n,
              M
            );
          return;
        }
    }
    for (var R in l)
      z = l[R], l.hasOwnProperty(R) && z != null && !n.hasOwnProperty(R) && we(e, t, R, null, n, z);
    for (H in n)
      z = n[H], M = l[H], !n.hasOwnProperty(H) || z === M || z == null && M == null || we(e, t, H, z, n, M);
  }
  function sh(e) {
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
        var a = l[n], i = a.transferSize, f = a.initiatorType, m = a.duration;
        if (i && m && sh(f)) {
          for (f = 0, m = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], C = v.startTime;
            if (C > m) break;
            var j = v.transferSize, H = v.initiatorType;
            j && sh(H) && (v = v.responseEnd, f += j * (v < m ? 1 : (m - C) / (v - C)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vs = null, Qs = null;
  function oi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ch(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function oh(e, t) {
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
  function Zs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ks = null;
  function f1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ks ? !1 : (ks = e, !0) : (ks = null, !1);
  }
  var fh = typeof setTimeout == "function" ? setTimeout : void 0, d1 = typeof clearTimeout == "function" ? clearTimeout : void 0, dh = typeof Promise == "function" ? Promise : void 0, h1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof dh < "u" ? function(e) {
    return dh.resolve(null).then(e).catch(m1);
  } : fh;
  function m1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ul(e) {
    return e === "head";
  }
  function hh(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), Jn(t);
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
            var f = i.nextSibling, m = i.nodeName;
            i[aa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && Ya(e.ownerDocument.body);
      l = a;
    } while (l);
    Jn(t);
  }
  function mh(e, t) {
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
  function Ks(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ks(l), Ii(l);
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
  function yh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Js(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function $s(e) {
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
  var Ws = null;
  function gh(e) {
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
  function ph(e) {
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
  function vh(e, t, l) {
    switch (t = oi(l), e) {
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
    Ii(e);
  }
  var Ut = /* @__PURE__ */ new Map(), bh = /* @__PURE__ */ new Set();
  function fi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fl = G.d;
  G.d = {
    f: v1,
    r: b1,
    D: S1,
    C: E1,
    L: x1,
    m: T1,
    X: A1,
    S: R1,
    M: w1
  };
  function v1() {
    var e = fl.f(), t = li();
    return e || t;
  }
  function b1(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Bf(t) : fl.r(e);
  }
  var Zn = typeof document > "u" ? null : document;
  function Sh(e, t, l) {
    var n = Zn;
    if (n && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), bh.has(a) || (bh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function S1(e) {
    fl.D(e), Sh("dns-prefetch", e, null);
  }
  function E1(e, t) {
    fl.C(e, t), Sh("preconnect", e, t);
  }
  function x1(e, t, l) {
    fl.L(e, t, l);
    var n = Zn;
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
          i = kn(e);
          break;
        case "script":
          i = Kn(e);
      }
      Ut.has(i) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Xa(i)) || t === "script" && n.querySelector(Ga(i)) || (t = n.createElement("link"), lt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function T1(e, t) {
    fl.m(e, t);
    var l = Zn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + wt(n) + '"][href="' + wt(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Kn(e);
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
        n = l.createElement("link"), lt(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function R1(e, t, l) {
    fl.S(e, t, l);
    var n = Zn;
    if (n && e) {
      var a = mn(n).hoistableStyles, i = kn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = n.querySelector(
          Xa(i)
        ))
          m.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ut.get(i)) && Fs(e, l);
          var v = f = n.createElement("link");
          $e(v), lt(v, "link", e), v._p = new Promise(function(C, j) {
            v.onload = C, v.onerror = j;
          }), v.addEventListener("load", function() {
            m.loading |= 1;
          }), v.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, di(f, t, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, a.set(i, f);
      }
    }
  }
  function A1(e, t) {
    fl.X(e, t);
    var l = Zn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Kn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = N({ src: e, async: !0 }, t), (t = Ut.get(a)) && Is(e, t), i = l.createElement("script"), $e(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function w1(e, t) {
    fl.M(e, t);
    var l = Zn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Kn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = N({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Is(e, t), i = l.createElement("script"), $e(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Eh(e, t, l, n) {
    var a = (a = oe.current) ? fi(a) : null;
    if (!a) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = kn(l.href), l = mn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = kn(l.href);
          var i = mn(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Kn(l), l = mn(
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
  function kn(e) {
    return 'href="' + wt(e) + '"';
  }
  function Xa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xh(e) {
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
    }), lt(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function Kn(e) {
    return '[src="' + wt(e) + '"]';
  }
  function Ga(e) {
    return "script[async]" + e;
  }
  function Th(e, t, l) {
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
          ), $e(n), lt(n, "style", a), di(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = kn(l.href);
          var i = e.querySelector(
            Xa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          n = xh(l), (a = Ut.get(a)) && Fs(n, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var f = i;
          return f._p = new Promise(function(m, v) {
            f.onload = m, f.onerror = v;
          }), lt(i, "link", n), t.state.loading |= 4, di(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Kn(l.src), (a = e.querySelector(
            Ga(i)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = Ut.get(i)) && (n = N({}, l), Is(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, di(n, l.precedence, e));
    return t.instance;
  }
  function di(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var m = n[f];
      if (m.dataset.precedence === t) i = m;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Fs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Is(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hi = null;
  function Rh(e, t, l) {
    if (hi === null) {
      var n = /* @__PURE__ */ new Map(), a = hi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = hi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[aa] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var m = n.get(f);
        m ? m.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function Ah(e, t, l) {
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
  function wh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function z1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = kn(n.href), i = t.querySelector(
          Xa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = mi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, n = xh(n), (a = Ut.get(a)) && Fs(n, a), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function(m, v) {
          f.onload = m, f.onerror = v;
        }), lt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = mi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Ps = 0;
  function O1(e, t) {
    return e.stylesheets && e.count === 0 && gi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && gi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ps === 0 && (Ps = 62500 * o1());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Ps ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function mi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) gi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var yi = null;
  function gi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yi = /* @__PURE__ */ new Map(), t.forEach(N1, e), yi = null, mi.call(e));
  }
  function N1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = yi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), yi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = mi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Va = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0
  };
  function M1(e, t, l, n, a, i, f, m, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ji(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.hiddenUpdates = Ji(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ch(e, t, l, n, a, i, f, m, v, C, j, H) {
    return e = new M1(
      e,
      t,
      l,
      f,
      v,
      C,
      j,
      H,
      m
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = Mr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Br(i), e;
  }
  function _h(e) {
    return e ? (e = Rn, e) : Rn;
  }
  function zh(e, t, l, n, a, i) {
    a = _h(a), n.context === null ? n.context = a : n.pendingContext = a, n = Tl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(e, n, t), l !== null && (dt(l, e, t), Ea(l, e, t));
  }
  function Oh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ec(e, t) {
    Oh(e, t), (e = e.alternate) && Oh(e, t);
  }
  function Nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kl(e, 67108864);
      t !== null && dt(t, e, 67108864), ec(e, 67108864);
    }
  }
  function Mh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = $i(t);
      var l = kl(e, t);
      l !== null && dt(l, e, t), ec(e, t);
    }
  }
  var pi = !0;
  function D1(e, t, l, n) {
    var a = Y.T;
    Y.T = null;
    var i = G.p;
    try {
      G.p = 2, tc(e, t, l, n);
    } finally {
      G.p = i, Y.T = a;
    }
  }
  function U1(e, t, l, n) {
    var a = Y.T;
    Y.T = null;
    var i = G.p;
    try {
      G.p = 8, tc(e, t, l, n);
    } finally {
      G.p = i, Y.T = a;
    }
  }
  function tc(e, t, l, n) {
    if (pi) {
      var a = lc(n);
      if (a === null)
        Xs(
          e,
          t,
          n,
          vi,
          l
        ), Uh(e, n);
      else if (B1(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Uh(e, n), t & 4 && -1 < j1.indexOf(e)) {
        for (; a !== null; ) {
          var i = hn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Xl(i.pendingLanes);
                  if (f !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - pt(f);
                      m.entanglements[1] |= v, f &= ~v;
                    }
                    kt(i), (xe & 6) === 0 && (ei = yt() + 500, La(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = kl(i, 2), m !== null && dt(m, i, 2), li(), ec(i, 2);
            }
          if (i = lc(n), i === null && Xs(
            e,
            t,
            n,
            vi,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Xs(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function lc(e) {
    return e = ar(e), nc(e);
  }
  var vi = null;
  function nc(e) {
    if (vi = null, e = dn(e), e !== null) {
      var t = h(e);
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
    return vi = e, null;
  }
  function Dh(e) {
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
          case qc:
            return 2;
          case Yc:
            return 8;
          case ru:
          case E0:
            return 32;
          case Xc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ac = !1, jl = null, Bl = null, Ll = null, Qa = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map(), Hl = [], j1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Uh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jl = null;
        break;
      case "dragenter":
      case "dragleave":
        Bl = null;
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
    }, t !== null && (t = hn(t), t !== null && Nh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function B1(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return jl = ka(
          jl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Bl = ka(
          Bl,
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
  function jh(e) {
    var t = dn(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Kc(e.priority, function() {
              Mh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Kc(e.priority, function() {
              Mh(l);
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
  function bi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = lc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        nr = n, l.target.dispatchEvent(n), nr = null;
      } else
        return t = hn(l), t !== null && Nh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Bh(e, t, l) {
    bi(e) && l.delete(t);
  }
  function L1() {
    ac = !1, jl !== null && bi(jl) && (jl = null), Bl !== null && bi(Bl) && (Bl = null), Ll !== null && bi(Ll) && (Ll = null), Qa.forEach(Bh), Za.forEach(Bh);
  }
  function Si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ac || (ac = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      L1
    )));
  }
  var Ei = null;
  function Lh(e) {
    Ei !== e && (Ei = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Ei === e && (Ei = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (nc(n || l) === null)
              continue;
            break;
          }
          var i = hn(l);
          i !== null && (e.splice(t, 3), t -= 3, ls(
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
  function Jn(e) {
    function t(v) {
      return Si(v, e);
    }
    jl !== null && Si(jl, e), Bl !== null && Si(Bl, e), Ll !== null && Si(Ll, e), Qa.forEach(t), Za.forEach(t);
    for (var l = 0; l < Hl.length; l++) {
      var n = Hl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Hl.length && (l = Hl[0], l.blockedOn === null); )
      jh(l), l.blockedOn === null && Hl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || Lh(l);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              m = f.formAction;
            else if (nc(a) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Lh(l);
        }
      }
  }
  function Hh() {
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
  function uc(e) {
    this._internalRoot = e;
  }
  xi.prototype.render = uc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, n = Rt();
    zh(l, n, e, t, null, null);
  }, xi.prototype.unmount = uc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      zh(e.current, 2, null, e, null, null), li(), t[fn] = null;
    }
  };
  function xi(e) {
    this._internalRoot = e;
  }
  xi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = kc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Hl.length && t !== 0 && t < Hl[l].priority; l++) ;
      Hl.splice(l, 0, e), l === 0 && jh(e);
    }
  };
  var qh = s.version;
  if (qh !== "19.2.3")
    throw Error(
      o(
        527,
        qh,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var H1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ti = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ti.isDisabled && Ti.supportsFiber)
      try {
        ta = Ti.inject(
          H1
        ), gt = Ti;
      } catch {
      }
  }
  return $a.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, n = "", a = kf, i = Kf, f = Jf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Ch(
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
      Hh
    ), e[fn] = t.current, Ys(e), new uc(t);
  }, $a.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var n = !1, a = "", i = kf, f = Kf, m = Jf, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = Ch(
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
      m,
      Hh
    ), t.context = _h(null), l = t.current, n = Rt(), n = $i(n), a = Tl(n), a.callback = null, Rl(l, a, n), l = n, t.current.lanes = l, na(t, l), kt(t), e[fn] = t.current, Ys(e), new xi(t);
  }, $a.version = "19.2.3", $a;
}
var tm;
function Ap() {
  if (tm) return dc.exports;
  tm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), dc.exports = Rp(), dc.exports;
}
var wp = Ap();
const Bi = ({ label: u, onClick: r, disabled: s, type: c = "button", className: o, children: d, mainButtonStyle: h }) => /* @__PURE__ */ x.jsx(
  "button",
  {
    className: o || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: r,
    disabled: s,
    type: c,
    style: h,
    children: d || u
  }
), un = A.forwardRef(
  (u, r) => {
    const {
      label: s,
      startIcon: c,
      endIcon: o,
      error: d,
      helperText: h,
      optional: g,
      className: p,
      options: y,
      ...b
    } = u, T = !!d || !!h, N = b.type === "select" || !!y;
    return /* @__PURE__ */ x.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      s && /* @__PURE__ */ x.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        s,
        " ",
        g && /* @__PURE__ */ x.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex! items-center! relative!", children: [
        c && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: c
          }
        ),
        N ? /* @__PURE__ */ x.jsx(
          "select",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${T ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b,
            children: y && y.map((q) => /* @__PURE__ */ x.jsx("option", { value: q.value, children: q.label }, q.value))
          }
        ) : /* @__PURE__ */ x.jsx(
          "input",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${T ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
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
      !d && h && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h })
    ] });
  }
), Cp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Oc = ({
  type: u,
  message: r,
  actionText: s,
  onActionClick: c,
  onClose: o,
  className: d = "",
  children: h
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
      s && c && /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          onClick: c,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: s
        }
      ),
      h
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
}, Qm = () => /* @__PURE__ */ x.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Fa extends Error {
}
Fa.prototype.name = "InvalidTokenError";
function _p(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (r, s) => {
    let c = s.charCodeAt(0).toString(16).toUpperCase();
    return c.length < 2 && (c = "0" + c), "%" + c;
  }));
}
function zp(u) {
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
function Nc(u, r) {
  if (typeof u != "string")
    throw new Fa("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, c = u.split(".")[s];
  if (typeof c != "string")
    throw new Fa(`Invalid token specified: missing part #${s + 1}`);
  let o;
  try {
    o = zp(c);
  } catch (d) {
    throw new Fa(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new Fa(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Op() {
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
function lm() {
  const u = window.location.href, r = new URL(u), s = r.hostname;
  if (s.startsWith("dev.")) {
    const c = s.replace("dev.", "dev-learn.");
    return `${r.protocol}//${c}/courses`;
  } else if (s.startsWith("test.")) {
    const c = s.replace("test.", "test-learn.");
    return `${r.protocol}//${c}/courses`;
  } else if (s.startsWith("stage.")) {
    const c = s.replace("stage.", "stage-learn.");
    return `${r.protocol}//${c}/courses`;
  } else if (s.split(".").length === 2) {
    const o = `learn.${s}`;
    return `${r.protocol}//${o}/courses`;
  } else
    return `${r.protocol}//${s}/courses`;
}
function Mi(u, r, s, c = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + s);
  const d = Op(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = c ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function Zm(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var nm = {};
const { toString: Mp } = Object.prototype, { getPrototypeOf: Mc } = Object, { iterator: Li, toStringTag: km } = Symbol, Hi = /* @__PURE__ */ ((u) => (r) => {
  const s = Mp.call(r);
  return u[s] || (u[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (u) => (u = u.toLowerCase(), (r) => Hi(r) === u), qi = (u) => (r) => typeof r === u, { isArray: In } = Array, $n = qi("undefined");
function lu(u) {
  return u !== null && !$n(u) && u.constructor !== null && !$n(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Km = Yt("ArrayBuffer");
function Dp(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && Km(u.buffer), r;
}
const Up = qi("string"), ht = qi("function"), Jm = qi("number"), nu = (u) => u !== null && typeof u == "object", jp = (u) => u === !0 || u === !1, _i = (u) => {
  if (Hi(u) !== "object")
    return !1;
  const r = Mc(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(km in u) && !(Li in u);
}, Bp = (u) => {
  if (!nu(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Lp = Yt("Date"), Hp = Yt("File"), qp = Yt("Blob"), Yp = Yt("FileList"), Xp = (u) => nu(u) && ht(u.pipe), Gp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((r = Hi(u)) === "formdata" || // detect form-data instance
  r === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, Vp = Yt("URLSearchParams"), [Qp, Zp, kp, Kp] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt), Jp = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function au(u, r, { allOwnKeys: s = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let c, o;
  if (typeof u != "object" && (u = [u]), In(u))
    for (c = 0, o = u.length; c < o; c++)
      r.call(null, u[c], c, u);
  else {
    if (lu(u))
      return;
    const d = s ? Object.getOwnPropertyNames(u) : Object.keys(u), h = d.length;
    let g;
    for (c = 0; c < h; c++)
      g = d[c], r.call(null, u[g], g, u);
  }
}
function $m(u, r) {
  if (lu(u))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(u);
  let c = s.length, o;
  for (; c-- > 0; )
    if (o = s[c], r === o.toLowerCase())
      return o;
  return null;
}
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Wm = (u) => !$n(u) && u !== rn;
function Sc() {
  const { caseless: u, skipUndefined: r } = Wm(this) && this || {}, s = {}, c = (o, d) => {
    const h = u && $m(s, d) || d;
    _i(s[h]) && _i(o) ? s[h] = Sc(s[h], o) : _i(o) ? s[h] = Sc({}, o) : In(o) ? s[h] = o.slice() : (!r || !$n(o)) && (s[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && au(arguments[o], c);
  return s;
}
const $p = (u, r, s, { allOwnKeys: c } = {}) => (au(r, (o, d) => {
  s && ht(o) ? u[d] = Zm(o, s) : u[d] = o;
}, { allOwnKeys: c }), u), Wp = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Fp = (u, r, s, c) => {
  u.prototype = Object.create(r.prototype, c), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), s && Object.assign(u.prototype, s);
}, Ip = (u, r, s, c) => {
  let o, d, h;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(u), d = o.length; d-- > 0; )
      h = o[d], (!c || c(h, u, r)) && !g[h] && (r[h] = u[h], g[h] = !0);
    u = s !== !1 && Mc(u);
  } while (u && (!s || s(u, r)) && u !== Object.prototype);
  return r;
}, Pp = (u, r, s) => {
  u = String(u), (s === void 0 || s > u.length) && (s = u.length), s -= r.length;
  const c = u.indexOf(r, s);
  return c !== -1 && c === s;
}, ev = (u) => {
  if (!u) return null;
  if (In(u)) return u;
  let r = u.length;
  if (!Jm(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = u[r];
  return s;
}, tv = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && Mc(Uint8Array)), lv = (u, r) => {
  const c = (u && u[Li]).call(u);
  let o;
  for (; (o = c.next()) && !o.done; ) {
    const d = o.value;
    r.call(u, d[0], d[1]);
  }
}, nv = (u, r) => {
  let s;
  const c = [];
  for (; (s = u.exec(r)) !== null; )
    c.push(s);
  return c;
}, av = Yt("HTMLFormElement"), uv = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, c, o) {
    return c.toUpperCase() + o;
  }
), am = (({ hasOwnProperty: u }) => (r, s) => u.call(r, s))(Object.prototype), iv = Yt("RegExp"), Fm = (u, r) => {
  const s = Object.getOwnPropertyDescriptors(u), c = {};
  au(s, (o, d) => {
    let h;
    (h = r(o, d, u)) !== !1 && (c[d] = h || o);
  }), Object.defineProperties(u, c);
}, rv = (u) => {
  Fm(u, (r, s) => {
    if (ht(u) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const c = u[s];
    if (ht(c)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, sv = (u, r) => {
  const s = {}, c = (o) => {
    o.forEach((d) => {
      s[d] = !0;
    });
  };
  return In(u) ? c(u) : c(String(u).split(r)), s;
}, cv = () => {
}, ov = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function fv(u) {
  return !!(u && ht(u.append) && u[km] === "FormData" && u[Li]);
}
const dv = (u) => {
  const r = new Array(10), s = (c, o) => {
    if (nu(c)) {
      if (r.indexOf(c) >= 0)
        return;
      if (lu(c))
        return c;
      if (!("toJSON" in c)) {
        r[o] = c;
        const d = In(c) ? [] : {};
        return au(c, (h, g) => {
          const p = s(h, o + 1);
          !$n(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return c;
  };
  return s(u, 0);
}, hv = Yt("AsyncFunction"), mv = (u) => u && (nu(u) || ht(u)) && ht(u.then) && ht(u.catch), Im = ((u, r) => u ? setImmediate : r ? ((s, c) => (rn.addEventListener("message", ({ source: o, data: d }) => {
  o === rn && d === s && c.length && c.shift()();
}, !1), (o) => {
  c.push(o), rn.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  ht(rn.postMessage)
), yv = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof nm < "u" && nm.nextTick || Im, gv = (u) => u != null && ht(u[Li]), O = {
  isArray: In,
  isArrayBuffer: Km,
  isBuffer: lu,
  isFormData: Gp,
  isArrayBufferView: Dp,
  isString: Up,
  isNumber: Jm,
  isBoolean: jp,
  isObject: nu,
  isPlainObject: _i,
  isEmptyObject: Bp,
  isReadableStream: Qp,
  isRequest: Zp,
  isResponse: kp,
  isHeaders: Kp,
  isUndefined: $n,
  isDate: Lp,
  isFile: Hp,
  isBlob: qp,
  isRegExp: iv,
  isFunction: ht,
  isStream: Xp,
  isURLSearchParams: Vp,
  isTypedArray: tv,
  isFileList: Yp,
  forEach: au,
  merge: Sc,
  extend: $p,
  trim: Jp,
  stripBOM: Wp,
  inherits: Fp,
  toFlatObject: Ip,
  kindOf: Hi,
  kindOfTest: Yt,
  endsWith: Pp,
  toArray: ev,
  forEachEntry: lv,
  matchAll: nv,
  isHTMLForm: av,
  hasOwnProperty: am,
  hasOwnProp: am,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fm,
  freezeMethods: rv,
  toObjectSet: sv,
  toCamelCase: uv,
  noop: cv,
  toFiniteNumber: ov,
  findKey: $m,
  global: rn,
  isContextDefined: Wm,
  isSpecCompliantForm: fv,
  toJSONObject: dv,
  isAsyncFn: hv,
  isThenable: mv,
  setImmediate: Im,
  asap: yv,
  isIterable: gv
};
function re(u, r, s, c, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), c && (this.request = c), o && (this.response = o, this.status = o.status ? o.status : null);
}
O.inherits(re, Error, {
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
      config: O.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Pm = re.prototype, e0 = {};
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
  e0[u] = { value: u };
});
Object.defineProperties(re, e0);
Object.defineProperty(Pm, "isAxiosError", { value: !0 });
re.from = (u, r, s, c, o, d) => {
  const h = Object.create(Pm);
  O.toFlatObject(u, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return re.call(h, g, p, s, c, o), u && h.cause == null && Object.defineProperty(h, "cause", { value: u, configurable: !0 }), h.name = u && u.name || "Error", d && Object.assign(h, d), h;
};
const pv = null;
function Ec(u) {
  return O.isPlainObject(u) || O.isArray(u);
}
function t0(u) {
  return O.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function um(u, r, s) {
  return u ? u.concat(r).map(function(o, d) {
    return o = t0(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : r;
}
function vv(u) {
  return O.isArray(u) && !u.some(Ec);
}
const bv = O.toFlatObject(O, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Yi(u, r, s) {
  if (!O.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = O.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(D, U) {
    return !O.isUndefined(U[D]);
  });
  const c = s.metaTokens, o = s.visitor || b, d = s.dots, h = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(r);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(_) {
    if (_ === null) return "";
    if (O.isDate(_))
      return _.toISOString();
    if (O.isBoolean(_))
      return _.toString();
    if (!p && O.isBlob(_))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(_) || O.isTypedArray(_) ? p && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function b(_, D, U) {
    let Q = _;
    if (_ && !U && typeof _ == "object") {
      if (O.endsWith(D, "{}"))
        D = c ? D : D.slice(0, -2), _ = JSON.stringify(_);
      else if (O.isArray(_) && vv(_) || (O.isFileList(_) || O.endsWith(D, "[]")) && (Q = O.toArray(_)))
        return D = t0(D), Q.forEach(function(k, ee) {
          !(O.isUndefined(k) || k === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? um([D], ee, d) : h === null ? D : D + "[]",
            y(k)
          );
        }), !1;
    }
    return Ec(_) ? !0 : (r.append(um(U, D, d), y(_)), !1);
  }
  const T = [], N = Object.assign(bv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Ec
  });
  function q(_, D) {
    if (!O.isUndefined(_)) {
      if (T.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      T.push(_), O.forEach(_, function(Q, V) {
        (!(O.isUndefined(Q) || Q === null) && o.call(
          r,
          Q,
          O.isString(V) ? V.trim() : V,
          D,
          N
        )) === !0 && q(Q, D ? D.concat(V) : [V]);
      }), T.pop();
    }
  }
  if (!O.isObject(u))
    throw new TypeError("data must be an object");
  return q(u), r;
}
function im(u) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(c) {
    return r[c];
  });
}
function Dc(u, r) {
  this._pairs = [], u && Yi(u, this, r);
}
const l0 = Dc.prototype;
l0.append = function(r, s) {
  this._pairs.push([r, s]);
};
l0.toString = function(r) {
  const s = r ? function(c) {
    return r.call(this, c, im);
  } : im;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function Sv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function n0(u, r, s) {
  if (!r)
    return u;
  const c = s && s.encode || Sv;
  O.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let d;
  if (o ? d = o(r, s) : d = O.isURLSearchParams(r) ? r.toString() : new Dc(r, s).toString(c), d) {
    const h = u.indexOf("#");
    h !== -1 && (u = u.slice(0, h)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class rm {
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
  use(r, s, c) {
    return this.handlers.push({
      fulfilled: r,
      rejected: s,
      synchronous: c ? c.synchronous : !1,
      runWhen: c ? c.runWhen : null
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
    O.forEach(this.handlers, function(c) {
      c !== null && r(c);
    });
  }
}
const a0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ev = typeof URLSearchParams < "u" ? URLSearchParams : Dc, xv = typeof FormData < "u" ? FormData : null, Tv = typeof Blob < "u" ? Blob : null, Rv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ev,
    FormData: xv,
    Blob: Tv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Uc = typeof window < "u" && typeof document < "u", xc = typeof navigator == "object" && navigator || void 0, Av = Uc && (!xc || ["ReactNative", "NativeScript", "NS"].indexOf(xc.product) < 0), wv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cv = Uc && window.location.href || "http://localhost", _v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Uc,
  hasStandardBrowserEnv: Av,
  hasStandardBrowserWebWorkerEnv: wv,
  navigator: xc,
  origin: Cv
}, Symbol.toStringTag, { value: "Module" })), at = {
  ..._v,
  ...Rv
};
function zv(u, r) {
  return Yi(u, new at.classes.URLSearchParams(), {
    visitor: function(s, c, o, d) {
      return at.isNode && O.isBuffer(s) ? (this.append(c, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Ov(u) {
  return O.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Nv(u) {
  const r = {}, s = Object.keys(u);
  let c;
  const o = s.length;
  let d;
  for (c = 0; c < o; c++)
    d = s[c], r[d] = u[d];
  return r;
}
function u0(u) {
  function r(s, c, o, d) {
    let h = s[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= s.length;
    return h = !h && O.isArray(o) ? o.length : h, p ? (O.hasOwnProp(o, h) ? o[h] = [o[h], c] : o[h] = c, !g) : ((!o[h] || !O.isObject(o[h])) && (o[h] = []), r(s, c, o[h], d) && O.isArray(o[h]) && (o[h] = Nv(o[h])), !g);
  }
  if (O.isFormData(u) && O.isFunction(u.entries)) {
    const s = {};
    return O.forEachEntry(u, (c, o) => {
      r(Ov(c), o, s, 0);
    }), s;
  }
  return null;
}
function Mv(u, r, s) {
  if (O.isString(u))
    try {
      return (r || JSON.parse)(u), O.trim(u);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (s || JSON.stringify)(u);
}
const uu = {
  transitional: a0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const c = s.getContentType() || "", o = c.indexOf("application/json") > -1, d = O.isObject(r);
    if (d && O.isHTMLForm(r) && (r = new FormData(r)), O.isFormData(r))
      return o ? JSON.stringify(u0(r)) : r;
    if (O.isArrayBuffer(r) || O.isBuffer(r) || O.isStream(r) || O.isFile(r) || O.isBlob(r) || O.isReadableStream(r))
      return r;
    if (O.isArrayBufferView(r))
      return r.buffer;
    if (O.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return zv(r, this.formSerializer).toString();
      if ((g = O.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Yi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (s.setContentType("application/json", !1), Mv(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || uu.transitional, c = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (O.isResponse(r) || O.isReadableStream(r))
      return r;
    if (r && O.isString(r) && (c && !this.responseType || o)) {
      const h = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (g) {
        if (h)
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
O.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  uu.headers[u] = {};
});
const Dv = O.toObjectSet([
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
  let s, c, o;
  return u && u.split(`
`).forEach(function(h) {
    o = h.indexOf(":"), s = h.substring(0, o).trim().toLowerCase(), c = h.substring(o + 1).trim(), !(!s || r[s] && Dv[s]) && (s === "set-cookie" ? r[s] ? r[s].push(c) : r[s] = [c] : r[s] = r[s] ? r[s] + ", " + c : c);
  }), r;
}, sm = /* @__PURE__ */ Symbol("internals");
function Wa(u) {
  return u && String(u).trim().toLowerCase();
}
function zi(u) {
  return u === !1 || u == null ? u : O.isArray(u) ? u.map(zi) : String(u);
}
function jv(u) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = s.exec(u); )
    r[c[1]] = c[2];
  return r;
}
const Bv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function yc(u, r, s, c, o) {
  if (O.isFunction(c))
    return c.call(this, r, s);
  if (o && (r = s), !!O.isString(r)) {
    if (O.isString(c))
      return r.indexOf(c) !== -1;
    if (O.isRegExp(c))
      return c.test(r);
  }
}
function Lv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, c) => s.toUpperCase() + c);
}
function Hv(u, r) {
  const s = O.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(u, c + s, {
      value: function(o, d, h) {
        return this[c].call(this, r, o, d, h);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, c) {
    const o = this;
    function d(g, p, y) {
      const b = Wa(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = O.findKey(o, b);
      (!T || o[T] === void 0 || y === !0 || y === void 0 && o[T] !== !1) && (o[T || p] = zi(g));
    }
    const h = (g, p) => O.forEach(g, (y, b) => d(y, b, p));
    if (O.isPlainObject(r) || r instanceof this.constructor)
      h(r, s);
    else if (O.isString(r) && (r = r.trim()) && !Bv(r))
      h(Uv(r), s);
    else if (O.isObject(r) && O.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!O.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? O.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      h(g, s);
    } else
      r != null && d(s, r, c);
    return this;
  }
  get(r, s) {
    if (r = Wa(r), r) {
      const c = O.findKey(this, r);
      if (c) {
        const o = this[c];
        if (!s)
          return o;
        if (s === !0)
          return jv(o);
        if (O.isFunction(s))
          return s.call(this, o, c);
        if (O.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = Wa(r), r) {
      const c = O.findKey(this, r);
      return !!(c && this[c] !== void 0 && (!s || yc(this, this[c], c, s)));
    }
    return !1;
  }
  delete(r, s) {
    const c = this;
    let o = !1;
    function d(h) {
      if (h = Wa(h), h) {
        const g = O.findKey(c, h);
        g && (!s || yc(c, c[g], g, s)) && (delete c[g], o = !0);
      }
    }
    return O.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const s = Object.keys(this);
    let c = s.length, o = !1;
    for (; c--; ) {
      const d = s[c];
      (!r || yc(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const s = this, c = {};
    return O.forEach(this, (o, d) => {
      const h = O.findKey(c, d);
      if (h) {
        s[h] = zi(o), delete s[d];
        return;
      }
      const g = r ? Lv(d) : String(d).trim();
      g !== d && delete s[d], s[g] = zi(o), c[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const s = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (c, o) => {
      c != null && c !== !1 && (s[o] = r && O.isArray(c) ? c.join(", ") : c);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, s]) => r + ": " + s).join(`
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
  static concat(r, ...s) {
    const c = new this(r);
    return s.forEach((o) => c.set(o)), c;
  }
  static accessor(r) {
    const c = (this[sm] = this[sm] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = Wa(h);
      c[g] || (Hv(o, h), c[g] = !0);
    }
    return O.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(mt.prototype, ({ value: u }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(c) {
      this[s] = c;
    }
  };
});
O.freezeMethods(mt);
function gc(u, r) {
  const s = this || uu, c = r || s, o = mt.from(c.headers);
  let d = c.data;
  return O.forEach(u, function(g) {
    d = g.call(s, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function i0(u) {
  return !!(u && u.__CANCEL__);
}
function Pn(u, r, s) {
  re.call(this, u ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
O.inherits(Pn, re, {
  __CANCEL__: !0
});
function r0(u, r, s) {
  const c = s.config.validateStatus;
  !s.status || !c || c(s.status) ? u(s) : r(new re(
    "Request failed with status code " + s.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function qv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function Yv(u, r) {
  u = u || 10;
  const s = new Array(u), c = new Array(u);
  let o = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = c[d];
    h || (h = y), s[o] = p, c[o] = y;
    let T = d, N = 0;
    for (; T !== o; )
      N += s[T++], T = T % u;
    if (o = (o + 1) % u, o === d && (d = (d + 1) % u), y - h < r)
      return;
    const q = b && y - b;
    return q ? Math.round(N * 1e3 / q) : void 0;
  };
}
function Xv(u, r) {
  let s = 0, c = 1e3 / r, o, d;
  const h = (y, b = Date.now()) => {
    s = b, o = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), T = b - s;
    T >= c ? h(y, b) : (o = y, d || (d = setTimeout(() => {
      d = null, h(o);
    }, c - T)));
  }, () => o && h(o)];
}
const Di = (u, r, s = 3) => {
  let c = 0;
  const o = Yv(50, 250);
  return Xv((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - c, y = o(p), b = h <= g;
    c = h;
    const T = {
      loaded: h,
      total: g,
      progress: g ? h / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && b ? (g - h) / y : void 0,
      event: d,
      lengthComputable: g != null,
      [r ? "download" : "upload"]: !0
    };
    u(T);
  }, s);
}, cm = (u, r) => {
  const s = u != null;
  return [(c) => r[0]({
    lengthComputable: s,
    total: u,
    loaded: c
  }), r[1]];
}, om = (u) => (...r) => O.asap(() => u(...r)), Gv = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (s) => (s = new URL(s, at.origin), u.protocol === s.protocol && u.host === s.host && (r || u.port === s.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Vv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, s, c, o, d, h) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      O.isNumber(s) && g.push(`expires=${new Date(s).toUTCString()}`), O.isString(c) && g.push(`path=${c}`), O.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), O.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function s0(u, r, s) {
  let c = !Qv(r);
  return u && (c || s == !1) ? Zv(u, r) : r;
}
const fm = (u) => u instanceof mt ? { ...u } : u;
function cn(u, r) {
  r = r || {};
  const s = {};
  function c(y, b, T, N) {
    return O.isPlainObject(y) && O.isPlainObject(b) ? O.merge.call({ caseless: N }, y, b) : O.isPlainObject(b) ? O.merge({}, b) : O.isArray(b) ? b.slice() : b;
  }
  function o(y, b, T, N) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return c(void 0, y, T, N);
    } else return c(y, b, T, N);
  }
  function d(y, b) {
    if (!O.isUndefined(b))
      return c(void 0, b);
  }
  function h(y, b) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return c(void 0, y);
    } else return c(void 0, b);
  }
  function g(y, b, T) {
    if (T in r)
      return c(y, b);
    if (T in u)
      return c(void 0, y);
  }
  const p = {
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
    validateStatus: g,
    headers: (y, b, T) => o(fm(y), fm(b), T, !0)
  };
  return O.forEach(Object.keys({ ...u, ...r }), function(b) {
    const T = p[b] || o, N = T(u[b], r[b], b);
    O.isUndefined(N) && T !== g || (s[b] = N);
  }), s;
}
const c0 = (u) => {
  const r = cn({}, u);
  let { data: s, withXSRFToken: c, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = mt.from(h), r.url = n0(s0(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), O.isFormData(s)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (O.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, T]) => {
        y.includes(b.toLowerCase()) && h.set(b, T);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (c && O.isFunction(c) && (c = c(r)), c || c !== !1 && Gv(r.url))) {
    const p = o && d && Vv.read(d);
    p && h.set(o, p);
  }
  return r;
}, kv = typeof XMLHttpRequest < "u", Kv = kv && function(u) {
  return new Promise(function(s, c) {
    const o = c0(u);
    let d = o.data;
    const h = mt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, T, N, q, _;
    function D() {
      q && q(), _ && _(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let U = new XMLHttpRequest();
    U.open(o.method.toUpperCase(), o.url, !0), U.timeout = o.timeout;
    function Q() {
      if (!U)
        return;
      const k = mt.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), K = {
        data: !g || g === "text" || g === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: k,
        config: u,
        request: U
      };
      r0(function(ae) {
        s(ae), D();
      }, function(ae) {
        c(ae), D();
      }, K), U = null;
    }
    "onloadend" in U ? U.onloadend = Q : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, U.onabort = function() {
      U && (c(new re("Request aborted", re.ECONNABORTED, u, U)), U = null);
    }, U.onerror = function(ee) {
      const K = ee && ee.message ? ee.message : "Network Error", le = new re(K, re.ERR_NETWORK, u, U);
      le.event = ee || null, c(le), U = null;
    }, U.ontimeout = function() {
      let ee = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const K = o.transitional || a0;
      o.timeoutErrorMessage && (ee = o.timeoutErrorMessage), c(new re(
        ee,
        K.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        u,
        U
      )), U = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in U && O.forEach(h.toJSON(), function(ee, K) {
      U.setRequestHeader(K, ee);
    }), O.isUndefined(o.withCredentials) || (U.withCredentials = !!o.withCredentials), g && g !== "json" && (U.responseType = o.responseType), y && ([N, _] = Di(y, !0), U.addEventListener("progress", N)), p && U.upload && ([T, q] = Di(p), U.upload.addEventListener("progress", T), U.upload.addEventListener("loadend", q)), (o.cancelToken || o.signal) && (b = (k) => {
      U && (c(!k || k.type ? new Pn(null, u, U) : k), U.abort(), U = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const V = qv(o.url);
    if (V && at.protocols.indexOf(V) === -1) {
      c(new re("Unsupported protocol " + V + ":", re.ERR_BAD_REQUEST, u));
      return;
    }
    U.send(d || null);
  });
}, Jv = (u, r) => {
  const { length: s } = u = u ? u.filter(Boolean) : [];
  if (r || s) {
    let c = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        c.abort(b instanceof re ? b : new Pn(b instanceof Error ? b.message : b));
      }
    };
    let h = r && setTimeout(() => {
      h = null, d(new re(`timeout ${r} of ms exceeded`, re.ETIMEDOUT));
    }, r);
    const g = () => {
      u && (h && clearTimeout(h), h = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = c;
    return p.unsubscribe = () => O.asap(g), p;
  }
}, $v = function* (u, r) {
  let s = u.byteLength;
  if (s < r) {
    yield u;
    return;
  }
  let c = 0, o;
  for (; c < s; )
    o = c + r, yield u.slice(c, o), c = o;
}, Wv = async function* (u, r) {
  for await (const s of Fv(u))
    yield* $v(s, r);
}, Fv = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const r = u.getReader();
  try {
    for (; ; ) {
      const { done: s, value: c } = await r.read();
      if (s)
        break;
      yield c;
    }
  } finally {
    await r.cancel();
  }
}, dm = (u, r, s, c) => {
  const o = Wv(u, r);
  let d = 0, h, g = (p) => {
    h || (h = !0, c && c(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: b } = await o.next();
        if (y) {
          g(), p.close();
          return;
        }
        let T = b.byteLength;
        if (s) {
          let N = d += T;
          s(N);
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
}, hm = 64 * 1024, { isFunction: Ai } = O, Iv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(O.global), {
  ReadableStream: mm,
  TextEncoder: ym
} = O.global, gm = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, Pv = (u) => {
  u = O.merge.call({
    skipUndefined: !0
  }, Iv, u);
  const { fetch: r, Request: s, Response: c } = u, o = r ? Ai(r) : typeof fetch == "function", d = Ai(s), h = Ai(c);
  if (!o)
    return !1;
  const g = o && Ai(mm), p = o && (typeof ym == "function" ? /* @__PURE__ */ ((_) => (D) => _.encode(D))(new ym()) : async (_) => new Uint8Array(await new s(_).arrayBuffer())), y = d && g && gm(() => {
    let _ = !1;
    const D = new s(at.origin, {
      body: new mm(),
      method: "POST",
      get duplex() {
        return _ = !0, "half";
      }
    }).headers.has("Content-Type");
    return _ && !D;
  }), b = h && g && gm(() => O.isReadableStream(new c("").body)), T = {
    stream: b && ((_) => _.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((_) => {
    !T[_] && (T[_] = (D, U) => {
      let Q = D && D[_];
      if (Q)
        return Q.call(D);
      throw new re(`Response type '${_}' is not supported`, re.ERR_NOT_SUPPORT, U);
    });
  });
  const N = async (_) => {
    if (_ == null)
      return 0;
    if (O.isBlob(_))
      return _.size;
    if (O.isSpecCompliantForm(_))
      return (await new s(at.origin, {
        method: "POST",
        body: _
      }).arrayBuffer()).byteLength;
    if (O.isArrayBufferView(_) || O.isArrayBuffer(_))
      return _.byteLength;
    if (O.isURLSearchParams(_) && (_ = _ + ""), O.isString(_))
      return (await p(_)).byteLength;
  }, q = async (_, D) => {
    const U = O.toFiniteNumber(_.getContentLength());
    return U ?? N(D);
  };
  return async (_) => {
    let {
      url: D,
      method: U,
      data: Q,
      signal: V,
      cancelToken: k,
      timeout: ee,
      onDownloadProgress: K,
      onUploadProgress: le,
      responseType: ae,
      headers: I,
      withCredentials: Se = "same-origin",
      fetchOptions: pe
    } = c0(_), Fe = r || fetch;
    ae = ae ? (ae + "").toLowerCase() : "text";
    let _e = Jv([V, k && k.toAbortSignal()], ee), Ye = null;
    const Ne = _e && _e.unsubscribe && (() => {
      _e.unsubscribe();
    });
    let Ve;
    try {
      if (le && y && U !== "get" && U !== "head" && (Ve = await q(I, Q)) !== 0) {
        let ne = new s(D, {
          method: "POST",
          body: Q,
          duplex: "half"
        }), S;
        if (O.isFormData(Q) && (S = ne.headers.get("content-type")) && I.setContentType(S), ne.body) {
          const [B, Z] = cm(
            Ve,
            Di(om(le))
          );
          Q = dm(ne.body, hm, B, Z);
        }
      }
      O.isString(Se) || (Se = Se ? "include" : "omit");
      const X = d && "credentials" in s.prototype, Y = {
        ...pe,
        signal: _e,
        method: U.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: Q,
        duplex: "half",
        credentials: X ? Se : void 0
      };
      Ye = d && new s(D, Y);
      let G = await (d ? Fe(Ye, pe) : Fe(D, Y));
      const fe = b && (ae === "stream" || ae === "response");
      if (b && (K || fe && Ne)) {
        const ne = {};
        ["status", "statusText", "headers"].forEach(($) => {
          ne[$] = G[$];
        });
        const S = O.toFiniteNumber(G.headers.get("content-length")), [B, Z] = K && cm(
          S,
          Di(om(K), !0)
        ) || [];
        G = new c(
          dm(G.body, hm, B, () => {
            Z && Z(), Ne && Ne();
          }),
          ne
        );
      }
      ae = ae || "text";
      let Ee = await T[O.findKey(T, ae) || "text"](G, _);
      return !fe && Ne && Ne(), await new Promise((ne, S) => {
        r0(ne, S, {
          data: Ee,
          headers: mt.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: _,
          request: Ye
        });
      });
    } catch (X) {
      throw Ne && Ne(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, _, Ye),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, _, Ye);
    }
  };
}, eb = /* @__PURE__ */ new Map(), o0 = (u) => {
  let r = u && u.env || {};
  const { fetch: s, Request: c, Response: o } = r, d = [
    c,
    o,
    s
  ];
  let h = d.length, g = h, p, y, b = eb;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : Pv(r)), b = y;
  return y;
};
o0();
const jc = {
  http: pv,
  xhr: Kv,
  fetch: {
    get: o0
  }
};
O.forEach(jc, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const pm = (u) => `- ${u}`, tb = (u) => O.isFunction(u) || u === null || u === !1;
function lb(u, r) {
  u = O.isArray(u) ? u : [u];
  const { length: s } = u;
  let c, o;
  const d = {};
  for (let h = 0; h < s; h++) {
    c = u[h];
    let g;
    if (o = c, !tb(c) && (o = jc[(g = String(c)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (O.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + h] = o;
  }
  if (!o) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = s ? h.length > 1 ? `since :
` + h.map(pm).join(`
`) : " " + pm(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const f0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: lb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: jc
};
function pc(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Pn(null, u);
}
function vm(u) {
  return pc(u), u.headers = mt.from(u.headers), u.data = gc.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), f0.getAdapter(u.adapter || uu.adapter, u)(u).then(function(c) {
    return pc(u), c.data = gc.call(
      u,
      u.transformResponse,
      c
    ), c.headers = mt.from(c.headers), c;
  }, function(c) {
    return i0(c) || (pc(u), c && c.response && (c.response.data = gc.call(
      u,
      u.transformResponse,
      c.response
    ), c.response.headers = mt.from(c.response.headers))), Promise.reject(c);
  });
}
const d0 = "1.13.2", Xi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Xi[u] = function(c) {
    return typeof c === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const bm = {};
Xi.transitional = function(r, s, c) {
  function o(d, h) {
    return "[Axios v" + d0 + "] Transitional option '" + d + "'" + h + (c ? ". " + c : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        o(h, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !bm[h] && (bm[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
Xi.spelling = function(r) {
  return (s, c) => (console.warn(`${c} is likely a misspelling of ${r}`), !0);
};
function nb(u, r, s) {
  if (typeof u != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(u);
  let o = c.length;
  for (; o-- > 0; ) {
    const d = c[o], h = r[d];
    if (h) {
      const g = u[d], p = g === void 0 || h(g, d, u);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Oi = {
  assertOptions: nb,
  validators: Xi
}, Kt = Oi.validators;
let sn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new rm(),
      response: new rm()
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
  async request(r, s) {
    try {
      return await this._request(r, s);
    } catch (c) {
      if (c instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const d = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          c.stack ? d && !String(c.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (c.stack += `
` + d) : c.stack = d;
        } catch {
        }
      }
      throw c;
    }
  }
  _request(r, s) {
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = cn(this.defaults, s);
    const { transitional: c, paramsSerializer: o, headers: d } = s;
    c !== void 0 && Oi.assertOptions(c, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), o != null && (O.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Oi.assertOptions(o, {
      encode: Kt.function,
      serialize: Kt.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Oi.assertOptions(s, {
      baseUrl: Kt.spelling("baseURL"),
      withXsrfToken: Kt.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let h = d && O.merge(
      d.common,
      d[s.method]
    );
    d && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete d[_];
      }
    ), s.headers = mt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(D) {
      typeof D.runWhen == "function" && D.runWhen(s) === !1 || (p = p && D.synchronous, g.unshift(D.fulfilled, D.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(D) {
      y.push(D.fulfilled, D.rejected);
    });
    let b, T = 0, N;
    if (!p) {
      const _ = [vm.bind(this), void 0];
      for (_.unshift(...g), _.push(...y), N = _.length, b = Promise.resolve(s); T < N; )
        b = b.then(_[T++], _[T++]);
      return b;
    }
    N = g.length;
    let q = s;
    for (; T < N; ) {
      const _ = g[T++], D = g[T++];
      try {
        q = _(q);
      } catch (U) {
        D.call(this, U);
        break;
      }
    }
    try {
      b = vm.call(this, q);
    } catch (_) {
      return Promise.reject(_);
    }
    for (T = 0, N = y.length; T < N; )
      b = b.then(y[T++], y[T++]);
    return b;
  }
  getUri(r) {
    r = cn(this.defaults, r);
    const s = s0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return n0(s, r.params, r.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(r) {
  sn.prototype[r] = function(s, c) {
    return this.request(cn(c || {}, {
      method: r,
      url: s,
      data: (c || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(r) {
  function s(c) {
    return function(d, h, g) {
      return this.request(cn(g || {}, {
        method: r,
        headers: c ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  sn.prototype[r] = s(), sn.prototype[r + "Form"] = s(!0);
});
let ab = class h0 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(d) {
      s = d;
    });
    const c = this;
    this.promise.then((o) => {
      if (!c._listeners) return;
      let d = c._listeners.length;
      for (; d-- > 0; )
        c._listeners[d](o);
      c._listeners = null;
    }), this.promise.then = (o) => {
      let d;
      const h = new Promise((g) => {
        c.subscribe(g), d = g;
      }).then(o);
      return h.cancel = function() {
        c.unsubscribe(d);
      }, h;
    }, r(function(d, h, g) {
      c.reason || (c.reason = new Pn(d, h, g), s(c.reason));
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
    const s = this._listeners.indexOf(r);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), s = (c) => {
      r.abort(c);
    };
    return this.subscribe(s), r.signal.unsubscribe = () => this.unsubscribe(s), r.signal;
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
  return function(s) {
    return u.apply(null, s);
  };
}
function ib(u) {
  return O.isObject(u) && u.isAxiosError === !0;
}
const Tc = {
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
Object.entries(Tc).forEach(([u, r]) => {
  Tc[r] = u;
});
function m0(u) {
  const r = new sn(u), s = Zm(sn.prototype.request, r);
  return O.extend(s, sn.prototype, r, { allOwnKeys: !0 }), O.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(o) {
    return m0(cn(u, o));
  }, s;
}
const Ue = m0(uu);
Ue.Axios = sn;
Ue.CanceledError = Pn;
Ue.CancelToken = ab;
Ue.isCancel = i0;
Ue.VERSION = d0;
Ue.toFormData = Yi;
Ue.AxiosError = re;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(r) {
  return Promise.all(r);
};
Ue.spread = ub;
Ue.isAxiosError = ib;
Ue.mergeConfig = cn;
Ue.AxiosHeaders = mt;
Ue.formToJSON = (u) => u0(O.isHTMLForm(u) ? new FormData(u) : u);
Ue.getAdapter = f0.getAdapter;
Ue.HttpStatusCode = Tc;
Ue.default = Ue;
const {
  Axios: xb,
  AxiosError: Tb,
  CanceledError: Rb,
  isCancel: Ab,
  CancelToken: wb,
  VERSION: Cb,
  all: _b,
  Cancel: zb,
  isAxiosError: Ob,
  spread: Nb,
  toFormData: Mb,
  AxiosHeaders: Db,
  HttpStatusCode: Ub,
  formToJSON: jb,
  getAdapter: Bb,
  mergeConfig: Lb
} = Ue, rb = "https://dev-demo-env.colibrilearning.com", iu = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${rb}${r}`;
}, sb = async (u, r) => {
  const s = iu("api/auth"), c = { username: u, password: r };
  try {
    return (await Ue.post(s, c)).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, cb = async (u) => {
  const r = iu("api/register");
  try {
    return (await Ue.post(r, u)).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 500 ? new Error("Registration failed. Please try again.") : s.message ? new Error(s.message) : new Error("Registration failed");
  }
}, Bc = async (u) => {
  const r = iu("api/check-email");
  try {
    return (await Ue.post(r, { email: u })).data;
  } catch (s) {
    return console.error("Error checking email:", s), s.response?.data ? s.response.data : { exists: !1 };
  }
}, Sm = async (u) => {
  const r = iu("api/forgot-password"), s = { email: u };
  try {
    return (await Ue.post(r, s)).data;
  } catch (c) {
    throw console.error("Error sending password reset:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 404 ? new Error("We couldn't find an account with that email.") : c.message ? new Error(c.message) : new Error("Failed to send password reset link");
  }
}, ob = async (u) => {
  const r = iu("api/refresh"), s = { refresh_token: u };
  try {
    return (await Ue.post(r, s)).data;
  } catch (c) {
    throw console.error("Error during token refresh:", c), c;
  }
};
function y0(u, r) {
  const s = {
    length: u.length >= 9 && u.length <= 15,
    upper: /[A-Z]/.test(u),
    lower: /[a-z]/.test(u),
    number: /[0-9]/.test(u),
    noSpaces: !/\s/.test(u),
    noTriple: !/(.)\1\1/.test(u),
    special: /[@.$%^_\-]/.test(u) && /^[A-Za-z0-9@.$%^_\-]+$/.test(u),
    noNameParts: !0,
    noEmailParts: !0
  }, c = u.toLowerCase();
  if (r && r.displayName) {
    const o = r.displayName.split(/\s+/).filter((d) => d.length >= 2);
    for (const d of o)
      if (d && c.includes(d.toLowerCase())) {
        s.noNameParts = !1;
        break;
      }
  }
  if (r && r.email) {
    const d = ((r.email || "").split("@")[0] || "").split(/[^A-Za-z0-9]+/).filter((h) => h.length >= 3);
    for (const h of d)
      if (h && c.includes(h.toLowerCase())) {
        s.noEmailParts = !1;
        break;
      }
  }
  return s;
}
const fb = (u) => {
  try {
    const r = document.cookie.split(";").find((h) => h.trim().startsWith("X-Credential=")), s = document.cookie.split(";").find((h) => h.trim().startsWith("access_token="));
    let c = null, o = !1;
    if (s && (c = s.split("=")[1] || null), r && (o = !0), c || (c = localStorage.getItem("access_token")), o || (o = !!localStorage.getItem("x_credential")), !c || !o)
      return !1;
    const d = localStorage.getItem("access_token_expires");
    if (d && Date.now() >= parseInt(d))
      return !1;
    try {
      const h = Nc(c), g = Math.floor(Date.now() / 1e3);
      return !(!h.exp || g >= h.exp);
    } catch (h) {
      return console.error("[checkTokenAndRedirect] Token decode error:", h), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, db = () => {
  try {
    const u = localStorage.getItem("refresh_token"), r = localStorage.getItem("refresh_token_time");
    if (!u || !r)
      return !1;
    const s = 10080 * 60 * 1e3;
    return Date.now() - parseInt(r) < s;
  } catch (u) {
    return console.error("[isRefreshTokenValid] Error:", u), !1;
  }
}, g0 = async (u, r, s = !0) => {
  const c = await sb(u, r), { tokens: o, userinfo: d, x_credential: h } = c;
  if (o.access_token) {
    const g = Nc(o.access_token), p = (g.exp || 0) - Math.floor(Date.now() / 1e3);
    Mi("access_token", o.access_token, p, !0);
    const y = h || g.x_credentials;
    y && Mi("X-Credential", y, p, !1), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("access_token", o.access_token), localStorage.setItem("access_token_expires", (Date.now() + p * 1e3).toString()), y && localStorage.setItem("x_credential", y), d && localStorage.setItem("user_info", JSON.stringify({
      email: d.email,
      name: d.name || `${d.given_name || ""} ${d.family_name || ""}`.trim(),
      studentId: d.studentId || d.student_id
    })), s && o.refresh_token ? (localStorage.setItem("refresh_token", o.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return o;
}, hb = ({
  type: u,
  message: r,
  duration: s = 5e3,
  onClose: c,
  className: o = ""
}) => {
  const [d, h] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => h(!0), 10);
    const q = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(q);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), c();
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
  }, T = () => {
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
        /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${N.icon}`, children: T() }),
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
}, Gi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", mb = ({
  onSuccess: u,
  onError: r,
  handleClose: s,
  onSignIn: c,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [T, N] = A.useState(""), [q, _] = A.useState(""), [D, U] = A.useState(!1), [Q, V] = A.useState(""), [k, ee] = A.useState(!1), [K, le] = A.useState(
    null
  ), [ae, I] = A.useState(!1), [Se, pe] = A.useState(!1), [Fe, _e] = A.useState(!1), [Ye, Ne] = A.useState(!1), [Ve, X] = A.useState(!0), [Y, G] = A.useState(""), [fe, Ee] = A.useState("info"), ne = A.useRef(null), S = A.useRef(null);
  A.useEffect(() => {
    if (S.current && clearTimeout(S.current), !g) {
      pe(!1), _e(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      pe(!1), _e(!1);
      return;
    }
    return S.current = setTimeout(async () => {
      Ne(!0);
      try {
        (await Bc(g)).exists ? (_e(!0), pe(!0)) : (_e(!1), pe(!1));
      } catch (Be) {
        console.error("[CreateAccount] Email check failed:", Be), _e(!1), pe(!1);
      } finally {
        Ne(!1);
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [g]), A.useEffect(() => {
    if (q) {
      const te = g || y || T ? {
        email: g,
        displayName: `${y} ${T}`.trim()
      } : null, Be = y0(q, te);
      le(Be);
    } else
      le(null);
  }, [q, g, y, T]);
  const B = K ? K.length && K.upper && K.lower && K.number && K.noSpaces && K.noTriple && K.special && K.noNameParts && K.noEmailParts : !1, $ = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const te = (Be) => {
      Be.key === "Escape" && s();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [s]);
  const ce = (te) => {
    te.target === ne.current && s();
  }, oe = async (te) => {
    if (te.preventDefault(), I(!0), !g || !y || !T || !q) {
      r("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      V("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    if (!B) {
      r("Password does not meet requirements");
      return;
    }
    U(!0), V(""), G("");
    try {
      const ze = g.split("@")[0], Xt = await cb({
        username: ze,
        email: g,
        firstName: y,
        lastName: T,
        password: q
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Xt.message
      );
      try {
        const Gt = await g0(
          g,
          q,
          Ve
        );
        u(Gt);
      } catch (Gt) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Gt
        );
        const ea = Gt instanceof Error ? Gt.message : "Auto-login failed";
        r(ea);
      }
    } catch (ze) {
      console.error("[CreateAccount] Registration failed:", ze);
      const Xt = ze instanceof Error ? ze.message : "Registration failed";
      G(Xt), Ee("error"), r(Xt);
    } finally {
      U(!1);
    }
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Y && /* @__PURE__ */ x.jsx(
      hb,
      {
        type: fe,
        message: Y,
        duration: 5e3,
        onClose: () => G("")
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ne,
        onMouseDown: ce,
        children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
          /* @__PURE__ */ x.jsx(
            "button",
            {
              onClick: s,
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
          /* @__PURE__ */ x.jsxs("form", { onSubmit: oe, className: "space-y-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
              un,
              {
                label: "Email Address",
                id: "email",
                type: "email",
                value: g,
                onChange: (te) => {
                  p(te.target.value), V("");
                },
                placeholder: "Enter email address",
                disabled: D,
                className: "w-full!",
                autoComplete: "email",
                error: ae && !g ? "Required" : Q || "",
                endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                  Ye && /* @__PURE__ */ x.jsx(Qm, {}),
                  !Ye && !Fe && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ x.jsx(
                    "img",
                    {
                      src: Gi,
                      alt: "available",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Se && Fe && /* @__PURE__ */ x.jsx(
              Oc,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  pe(!1), c(g);
                },
                onClose: () => pe(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ x.jsx(
                un,
                {
                  label: "First Name",
                  id: "firstName",
                  type: "text",
                  value: y,
                  onChange: (te) => b(te.target.value),
                  placeholder: "First Name",
                  disabled: D,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ae && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ x.jsx(
                un,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: T,
                  onChange: (te) => N(te.target.value),
                  placeholder: "Last Name",
                  disabled: D,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ae && !T ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
              un,
              {
                label: "Password",
                id: "password",
                type: k ? "text" : "password",
                value: q,
                onChange: (te) => {
                  _(te.target.value);
                },
                placeholder: "Enter Password...",
                disabled: D,
                className: "w-full!",
                autoComplete: "new-password",
                error: ae && !q ? "Required" : ae && q && !B ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                endIcon: /* @__PURE__ */ x.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => ee(!k),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: k ? /* @__PURE__ */ x.jsx(
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
                  checked: Ve,
                  onChange: (te) => X(te.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ x.jsx(
              Bi,
              {
                type: "submit",
                disabled: D || Fe || !$ || !g || !y || !T || !q || !B,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: D ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                onClick: () => c(g),
                disabled: D,
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
  onResendLink: s,
  onBack: c,
  onClose: o
}) => {
  const d = A.useRef(null);
  A.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && o();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [o]);
  const h = (g) => {
    g.target === d.current && o();
  };
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: h,
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
            src: Gi,
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
          Bi,
          {
            type: "button",
            onClick: s,
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
            onClick: c,
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
  handleClose: s
}) => {
  const [c, o] = A.useState(u || ""), [d, h] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [T, N] = A.useState(!1), [q, _] = A.useState(!1), [D, U] = A.useState(!1), Q = A.useRef(null);
  A.useEffect(() => {
    const K = (le) => {
      le.key === "Escape" && s();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [s]), A.useEffect(() => {
    const le = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
    if (U(le), !le || !c) {
      _(!1);
      return;
    }
    const ae = setTimeout(async () => {
      N(!0);
      try {
        const I = await Bc(c);
        console.log("[ResetPassword] Email check response:", I), _(I.exists), console.log("[ResetPassword] Email exists:", I.exists);
      } catch (I) {
        console.error("[ResetPassword] Error checking email:", I), _(!1);
      } finally {
        N(!1);
      }
    }, 500);
    return () => clearTimeout(ae);
  }, [c]);
  const V = (K) => {
    K.target === Q.current && s();
  }, k = async (K) => {
    if (K.preventDefault(), !c) {
      b("Email is required");
      return;
    }
    h(!0), b("");
    try {
      await Sm(c), console.log("[ResetPassword] Reset link sent to:", c), p(!0);
    } catch (le) {
      console.error("[ResetPassword] Failed to send reset link:", le);
      const ae = le instanceof Error ? le.message : "Failed to send reset link. Please try again.";
      b(ae);
    } finally {
      h(!1);
    }
  }, ee = async () => {
    h(!0), b("");
    try {
      await Sm(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (K) {
      console.error("[ResetPassword] Failed to resend reset link:", K), p(!1);
      const le = K instanceof Error ? K.message : "Failed to resend reset link. Please try again.";
      b(le);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ x.jsx(
    yb,
    {
      email: c,
      loading: d,
      onResendLink: ee,
      onBack: r,
      onClose: s
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Q,
      onMouseDown: V,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: s,
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
        /* @__PURE__ */ x.jsxs("form", { onSubmit: k, className: "space-y-4!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            un,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: c,
              onChange: (K) => {
                o(K.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                T && /* @__PURE__ */ x.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !T && q && D && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: Gi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          y && /* @__PURE__ */ x.jsx(
            Oc,
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
            Bi,
            {
              type: "submit",
              disabled: d || !c || !D || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: c, isEmailValid: D, emailExists: q });
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
  handleClose: s,
  authority: c,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [T, N] = A.useState(!1), [q, _] = A.useState(!1), [D, U] = A.useState(
    null
  ), [Q, V] = A.useState(""), [k, ee] = A.useState(!1), [K, le] = A.useState(!1), [ae, I] = A.useState(!1), [Se, pe] = A.useState(!1), [Fe, _e] = A.useState(!1), [Ye, Ne] = A.useState(!1), Ve = A.useRef(null), X = A.useRef(null);
  A.useEffect(() => {
    if (X.current && clearTimeout(X.current), !g) {
      pe(!1), Ne(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      pe(!1), Ne(!1);
      return;
    }
    return X.current = setTimeout(async () => {
      _e(!0);
      try {
        (await Bc(g)).exists ? (pe(!0), Ne(!1)) : (pe(!1), Ne(!0));
      } catch (S) {
        console.error("[EmbeddedLogin] Email check failed:", S), pe(!0), Ne(!1);
      } finally {
        _e(!1);
      }
    }, 500), () => {
      X.current && clearTimeout(X.current);
    };
  }, [g]), A.useEffect(() => {
    if (y) {
      const ne = y0(y, null);
      U(ne);
    } else
      U(null);
  }, [y]), D && D.length && D.upper && D.lower && D.number && D.noSpaces && D.noTriple && D.special;
  const G = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const ne = (S) => {
      S.key === "Escape" && s();
    };
    return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
  }, [s]);
  const fe = (ne) => {
    ne.target === Ve.current && s();
  }, Ee = async (ne) => {
    if (ne.preventDefault(), !g || !y) {
      V("Please enter both email and password"), r("Please enter both email and password");
      return;
    }
    N(!0), V("");
    try {
      const S = await g0(g, y, k);
      u(S);
    } catch (S) {
      console.error("[EmbeddedLogin] Login failed:", S);
      const B = S instanceof Error ? S.message : "Authentication failed";
      V(B), r(B);
    } finally {
      N(!1);
    }
  };
  return ae ? /* @__PURE__ */ x.jsx(
    gb,
    {
      email: g,
      onBack: () => I(!1),
      handleClose: s
    }
  ) : K ? /* @__PURE__ */ x.jsx(
    mb,
    {
      onSuccess: (ne) => {
        le(!1), u(ne);
      },
      onError: r,
      handleClose: s,
      onSignIn: (ne) => {
        le(!1), ne && p(ne);
      },
      authority: c,
      initialEmail: g
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ve,
      onMouseDown: fe,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          "button",
          {
            onClick: s,
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
        /* @__PURE__ */ x.jsxs("form", { onSubmit: Ee, className: "space-y-2!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            un,
            {
              label: "Email Address",
              id: "email",
              type: "email",
              value: g,
              onChange: (ne) => p(ne.target.value),
              placeholder: "Enter email address",
              disabled: T,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                Fe && /* @__PURE__ */ x.jsx(Qm, {}),
                !Fe && Se && G && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: Gi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          Ye && !Se && G && /* @__PURE__ */ x.jsx(
            Oc,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                Ne(!1), le(!0);
              },
              onClose: () => Ne(!1),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
            un,
            {
              label: "Password",
              id: "password",
              type: q ? "text" : "password",
              value: y,
              onChange: (ne) => {
                b(ne.target.value), V("");
              },
              placeholder: "Enter Password...",
              disabled: T,
              className: "w-full!",
              autoComplete: "current-password",
              error: Q,
              endIcon: /* @__PURE__ */ x.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => _(!q),
                  className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                  tabIndex: -1,
                  children: q ? /* @__PURE__ */ x.jsx(
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
                  checked: k,
                  onChange: (ne) => ee(ne.target.checked),
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
                onClick: (ne) => {
                  ne.preventDefault(), I(!0);
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            Bi,
            {
              type: "submit",
              disabled: T || !g || !y,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: T ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
              onClick: () => le(!0),
              disabled: T,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, vb = (u) => {
  const { authority: r, subsidiary: s, onRedirect: c } = u, [o, d] = A.useState(!1);
  A.useEffect(() => {
    (async () => {
      try {
        if (fb()) {
          d(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (db()) {
          const N = localStorage.getItem("refresh_token");
          if (N) {
            console.log("[App] Attempting auto-login with refresh token");
            const q = await ob(N);
            if (q && q.tokens && q.tokens.access_token) {
              const _ = q.tokens, D = Nc(_.access_token), U = (D.exp || 0) - Math.floor(Date.now() / 1e3);
              Mi("access_token", _.access_token, U, !0), D.x_credentials && Mi("X-Credential", D.x_credentials, U, !1), _.refresh_token && (localStorage.setItem("refresh_token", _.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const Q = u.redirectUrl || lm();
              if (c) {
                const V = {
                  access_token: _.access_token,
                  userInfo: {
                    studentId: D.studentId,
                    sub: D.sub,
                    email_verified: D.email_verified,
                    x_credentials: D.x_credentials,
                    name: D.name,
                    preferred_username: D.preferred_username,
                    given_name: D.given_name,
                    family_name: D.family_name,
                    email: D.email
                  }
                };
                c(Q, V);
              }
              u.redirectUrl && (window.location.href = u.redirectUrl);
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (b) {
        console.error("[App] Auto-login failed:", b), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [u.redirectUrl]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const h = (y) => {
    u.handleClose && u.handleClose(), d(!0);
    const b = u.redirectUrl || lm();
    c && c(b, y), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, g = (y) => {
    console.log("[App] Embedded login error:", y);
  }, p = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ x.jsx(Yg, { children: /* @__PURE__ */ x.jsx(Hm, { path: "*", element: /* @__PURE__ */ x.jsx(x.Fragment, { children: !o && u.showLogin && /* @__PURE__ */ x.jsx(
    pb,
    {
      onSuccess: h,
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
  constructor(r = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", s) {
    this.cdnBaseUrl = r.replace(/\/$/, ""), this.shadowRoot = s || null;
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
      const r = await this.getBrands(), s = window.location.hostname, c = r.find(
        (o) => s.includes(o.domain) || o.domain.includes(s)
      );
      return c ? (console.log(`[ThemeWidget] Auto-detected brand from domain: ${c.name} (${c.token})`), localStorage.setItem("subsidiary", c.token), c.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${s}`), null);
    } catch (r) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", r), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(r) {
    try {
      const c = (await this.getBrands()).find(
        (p) => p.folder.toLowerCase() === r.toLowerCase() || p.token.toLowerCase() === r.toLowerCase()
      );
      if (!c) {
        console.warn(
          `[ThemeWidget] Brand not found: ${r}. Using default theme.`
        );
        return;
      }
      localStorage.setItem("subsidiary", c.token);
      const o = `${this.cdnBaseUrl}/${c.folder}/theme.json`, d = await fetch(o);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const h = await d.json(), g = document.documentElement;
      h.styles.forEach((p) => {
        let y = p.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), g.style.setProperty(`--${p.name}`, y);
      }), this.currentBrand = c, console.log(`[ThemeWidget] Theme loaded for brand: ${c.name}`);
    } catch (s) {
      throw console.error("[ThemeWidget] Error loading theme:", s), s;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const s = r.styles.map((o) => {
      const d = this.formatStyleValue(o.value);
      return `  --${o.name}: ${d};`;
    }).join(`
`), c = `@theme {
${s}
}

:host {
${s}
}`;
    this.removeTheme(), this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-theme-widget", "true"), this.styleElement.textContent = c, this.shadowRoot ? this.shadowRoot.appendChild(this.styleElement) : document.head.appendChild(this.styleElement);
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
async function Em(u) {
  const r = new bb(u.cdnBaseUrl, u.shadowRoot), s = u.brandFolder || u.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (u.autoDetect) {
    const c = await r.detectBrandFromDomain();
    c && await r.loadTheme(c);
  }
  return r;
}
{
  class u extends HTMLElement {
    root;
    mountPoint;
    _shadowRoot;
    static get observedAttributes() {
      return ["authority", "subsidiary", "redirectUrl", "loginTitle", "loginSubtitle", "show-login"];
    }
    // Store function props
    onRedirect;
    onClose;
    onLogout;
    connectedCallback() {
      if (!this._shadowRoot) {
        this._shadowRoot = this.attachShadow({ mode: "open" }), typeof window.injectWidgetStyles == "function" && window.injectWidgetStyles(this._shadowRoot);
        const s = this.getAttribute("subsidiary");
        s && s.trim() !== "" ? this.loadTheme(s) : this.loadThemeFromDomain();
      }
      this.mountPoint = document.createElement("div"), this._shadowRoot.appendChild(this.mountPoint), this.render();
    }
    async loadTheme(s) {
      try {
        console.log(`[Widget] Loading theme for subsidiary: ${s}`), await Em({
          brandFolder: s,
          shadowRoot: this._shadowRoot
        }), console.log(`[Widget] Theme loaded successfully for ${s}`);
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain() {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await Em({
          shadowRoot: this._shadowRoot,
          autoDetect: !0
        });
      } catch (s) {
        console.error("[Widget] Failed to auto-detect theme:", s), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback() {
      this.render();
    }
    disconnectedCallback() {
      this.root?.unmount();
    }
    handleRedirect = (s, c) => {
      console.log("[Widget] handleRedirect called, url:", s), this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(s, c));
      const o = new CustomEvent("redirect", {
        detail: {
          url: s,
          userSession: c,
          tokens: { access_token: c?.access_token },
          userInfo: c?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o), console.log("[Widget] Redirect event dispatched"), s && !this.onRedirect && (console.log("[Widget] Will redirect to:", s, "in 200ms"), setTimeout(() => {
        window.location.href = s;
      }, 200));
    };
    handleClose = () => {
      this.onClose && (console.log("[Widget] Calling onClose function prop"), this.onClose());
      const s = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(s), this.removeAttribute("show-login");
    };
    getProps() {
      return {
        authority: this.getAttribute("authority") || Np(),
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        onRedirect: this.handleRedirect,
        handleClose: this.handleClose
      };
    }
    // Public API methods
    login() {
      console.log("[Widget] login() called"), this.setAttribute("show-login", "true");
    }
    logout() {
      console.log("[Widget] logout() called"), localStorage.removeItem("user_state"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"), document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
      }), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
      const s = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(s);
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = wp.createRoot(this.mountPoint));
      const s = this.getProps();
      console.log("[Widget] Rendering with props:", s), this.root.render(
        /* @__PURE__ */ x.jsx(op, { children: /* @__PURE__ */ x.jsx(A.StrictMode, { children: /* @__PURE__ */ x.jsx(vb, { ...s }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
