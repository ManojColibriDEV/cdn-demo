
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
var is = { exports: {} }, Ka = {};
var qh;
function q1() {
  if (qh) return Ka;
  qh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(o, s, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      d = {};
      for (var g in s)
        g !== "key" && (d[g] = s[g]);
    } else d = s;
    return s = d.ref, {
      $$typeof: u,
      type: o,
      key: h,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Ka.Fragment = r, Ka.jsx = c, Ka.jsxs = c, Ka;
}
var Yh;
function Y1() {
  return Yh || (Yh = 1, is.exports = q1()), is.exports;
}
var T = Y1(), rs = { exports: {} }, ue = {}, Gh;
function G1() {
  if (Gh) return ue;
  Gh = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
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
  }, N = Object.assign, Q = {};
  function V(S, B, Z) {
    this.props = S, this.context = B, this.refs = Q, this.updater = Z || j;
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
    this.props = S, this.context = B, this.refs = Q, this.updater = Z || j;
  }
  var K = ee.prototype = new k();
  K.constructor = ee, N(K, V.prototype), K.isPureReactComponent = !0;
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
  function We(S, B) {
    return pe(S.type, B, S.props);
  }
  function ze(S) {
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
  function G(S) {
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
  function Y(S, B, Z, $, se) {
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
            case c:
              te = !0;
              break;
            case x:
              return te = S._init, Y(
                te(S._payload),
                B,
                Z,
                $,
                se
              );
          }
      }
    if (te)
      return se = se(S), te = $ === "" ? "." + Ve(S, 0) : $, le(se) ? (Z = "", te != null && (Z = te.replace(Ne, "$&/") + "/"), Y(se, B, Z, "", function(Gt) {
        return Gt;
      })) : se != null && (ze(se) && (se = We(
        se,
        Z + (se.key == null || S && S.key === se.key ? "" : ("" + se.key).replace(
          Ne,
          "$&/"
        ) + "/") + te
      )), B.push(se)), 1;
    te = 0;
    var Be = $ === "" ? "." : $ + ":";
    if (le(S))
      for (var Ae = 0; Ae < S.length; Ae++)
        $ = S[Ae], oe = Be + Ve($, Ae), te += Y(
          $,
          B,
          Z,
          oe,
          se
        );
    else if (Ae = _(S), typeof Ae == "function")
      for (S = Ae.call(S), Ae = 0; !($ = S.next()).done; )
        $ = $.value, oe = Be + Ve($, Ae++), te += Y(
          $,
          B,
          Z,
          oe,
          se
        );
    else if (oe === "object") {
      if (typeof S.then == "function")
        return Y(
          G(S),
          B,
          Z,
          $,
          se
        );
      throw B = String(S), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function X(S, B, Z) {
    if (S == null) return S;
    var $ = [], se = 0;
    return Y(S, $, "", "", function(oe) {
      return B.call(Z, oe, se++);
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
    map: X,
    forEach: function(S, B, Z) {
      X(
        S,
        function() {
          B.apply(this, arguments);
        },
        Z
      );
    },
    count: function(S) {
      var B = 0;
      return X(S, function() {
        B++;
      }), B;
    },
    toArray: function(S) {
      return X(S, function(B) {
        return B;
      }) || [];
    },
    only: function(S) {
      if (!ze(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = D, ue.Children = ne, ue.Component = V, ue.Fragment = o, ue.Profiler = d, ue.PureComponent = ee, ue.StrictMode = s, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ue.__COMPILER_RUNTIME = {
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
    var $ = N({}, S.props), se = S.key;
    if (B != null)
      for (oe in B.key !== void 0 && (se = "" + B.key), B)
        !Se.call(B, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && B.ref === void 0 || ($[oe] = B[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) $.children = Z;
    else if (1 < oe) {
      for (var te = Array(oe), Be = 0; Be < oe; Be++)
        te[Be] = arguments[Be + 2];
      $.children = te;
    }
    return pe(S.type, se, $);
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
    var $, se = {}, oe = null;
    if (B != null)
      for ($ in B.key !== void 0 && (oe = "" + B.key), B)
        Se.call(B, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (se[$] = B[$]);
    var te = arguments.length - 2;
    if (te === 1) se.children = Z;
    else if (1 < te) {
      for (var Be = Array(te), Ae = 0; Ae < te; Ae++)
        Be[Ae] = arguments[Ae + 2];
      se.children = Be;
    }
    if (S && S.defaultProps)
      for ($ in te = S.defaultProps, te)
        se[$] === void 0 && (se[$] = te[$]);
    return pe(S, oe, se);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ue.isValidElement = ze, ue.lazy = function(S) {
    return {
      $$typeof: x,
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
      var $ = S(), se = I.S;
      se !== null && se(Z, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ae, Ee);
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
var Xh;
function Rs() {
  return Xh || (Xh = 1, rs.exports = G1()), rs.exports;
}
var A = Rs();
var Vh = "popstate";
function X1(u = {}) {
  function r(o, s) {
    let { pathname: d, search: h, hash: g } = o.location;
    return vs(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function c(o, s) {
    return typeof s == "string" ? s : Ia(s);
  }
  return Q1(
    r,
    c,
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
function V1() {
  return Math.random().toString(36).substring(2, 10);
}
function Qh(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function vs(u, r, c = null, o) {
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
    key: r && r.key || o || V1()
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
    let o = u.indexOf("?");
    o >= 0 && (r.search = u.substring(o), u = u.substring(0, o)), u && (r.pathname = u);
  }
  return r;
}
function Q1(u, r, c, o = {}) {
  let { window: s = document.defaultView, v5Compat: d = !1 } = o, h = s.history, g = "POP", p = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function x() {
    g = "POP";
    let N = b(), Q = N == null ? null : N - y;
    y = N, p && p({ action: g, location: j.location, delta: Q });
  }
  function D(N, Q) {
    g = "PUSH";
    let V = vs(j.location, N, Q);
    y = b() + 1;
    let k = Qh(V, y), ee = j.createHref(V);
    try {
      h.pushState(k, "", ee);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError")
        throw K;
      s.location.assign(ee);
    }
    d && p && p({ action: g, location: j.location, delta: 1 });
  }
  function q(N, Q) {
    g = "REPLACE";
    let V = vs(j.location, N, Q);
    y = b();
    let k = Qh(V, y), ee = j.createHref(V);
    h.replaceState(k, "", ee), d && p && p({ action: g, location: j.location, delta: 0 });
  }
  function _(N) {
    return Z1(N);
  }
  let j = {
    get action() {
      return g;
    },
    get location() {
      return u(s, h);
    },
    listen(N) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(Vh, x), p = N, () => {
        s.removeEventListener(Vh, x), p = null;
      };
    },
    createHref(N) {
      return r(s, N);
    },
    createURL: _,
    encodeLocation(N) {
      let Q = _(N);
      return {
        pathname: Q.pathname,
        search: Q.search,
        hash: Q.hash
      };
    },
    push: D,
    replace: q,
    go(N) {
      return h.go(N);
    }
  };
  return j;
}
function Z1(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(c, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : Ia(u);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = c + o), new URL(o, c);
}
function Sm(u, r, c = "/") {
  return k1(u, r, c, !1);
}
function k1(u, r, c, o) {
  let s = typeof r == "string" ? Fn(r) : r, d = hl(s.pathname || "/", c);
  if (d == null)
    return null;
  let h = Em(u);
  K1(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = ag(d);
    g = lg(
      h[p],
      y,
      o
    );
  }
  return g;
}
function Em(u, r = [], c = [], o = "", s = !1) {
  let d = (h, g, p = s, y) => {
    let b = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(o) && p)
        return;
      Le(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(o.length);
    }
    let x = dl([o, b.relativePath]), D = c.concat(b);
    h.children && h.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Em(
      h.children,
      r,
      D,
      x,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: x,
      score: eg(x, h.index),
      routesMeta: D
    });
  };
  return u.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of xm(h.path))
        d(h, g, !0, p);
  }), r;
}
function xm(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...o] = r, s = c.endsWith("?"), d = c.replace(/\?$/, "");
  if (o.length === 0)
    return s ? [d, ""] : [d];
  let h = xm(o.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), s && g.push(...h), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function K1(u) {
  u.sort(
    (r, c) => r.score !== c.score ? c.score - r.score : tg(
      r.routesMeta.map((o) => o.childrenIndex),
      c.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var J1 = /^:[\w-]+$/, $1 = 3, F1 = 2, W1 = 1, I1 = 10, P1 = -2, Zh = (u) => u === "*";
function eg(u, r) {
  let c = u.split("/"), o = c.length;
  return c.some(Zh) && (o += P1), r && (o += F1), c.filter((s) => !Zh(s)).reduce(
    (s, d) => s + (J1.test(d) ? $1 : d === "" ? W1 : I1),
    o
  );
}
function tg(u, r) {
  return u.length === r.length && u.slice(0, -1).every((o, s) => o === r[s]) ? (
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
function lg(u, r, c = !1) {
  let { routesMeta: o } = u, s = {}, d = "/", h = [];
  for (let g = 0; g < o.length; ++g) {
    let p = o[g], y = g === o.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", x = Ni(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), D = p.route;
    if (!x && y && c && !o[o.length - 1].route.index && (x = Ni(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !x)
      return null;
    Object.assign(s, x.params), h.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: dl([d, x.pathname]),
      pathnameBase: cg(
        dl([d, x.pathnameBase])
      ),
      route: D
    }), x.pathnameBase !== "/" && (d = dl([d, x.pathnameBase]));
  }
  return h;
}
function Ni(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, o] = ng(
    u.path,
    u.caseSensitive,
    u.end
  ), s = r.match(c);
  if (!s) return null;
  let d = s[0], h = d.replace(/(.)\/+$/, "$1"), g = s.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: b, isOptional: x }, D) => {
        if (b === "*") {
          let _ = g[D] || "";
          h = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[D];
        return x && !q ? y[b] = void 0 : y[b] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: u
  };
}
function ng(u, r = !1, c = !0) {
  qt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let o = [], s = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (o.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (o.push({ paramName: "*" }), s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? s += "\\/*$" : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, r ? void 0 : "i"), o];
}
function ag(u) {
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
  let c = r.endsWith("/") ? r.length - 1 : r.length, o = u.charAt(c);
  return o && o !== "/" ? null : u.slice(c) || "/";
}
var Tm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ug = (u) => Tm.test(u);
function ig(u, r = "/") {
  let {
    pathname: c,
    search: o = "",
    hash: s = ""
  } = typeof u == "string" ? Fn(u) : u, d;
  if (c)
    if (ug(c))
      d = c;
    else {
      if (c.includes("//")) {
        let h = c;
        c = c.replace(/\/\/+/g, "/"), qt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${c}`
        );
      }
      c.startsWith("/") ? d = kh(c.substring(1), "/") : d = kh(c, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: sg(o),
    hash: og(s)
  };
}
function kh(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((s) => {
    s === ".." ? c.length > 1 && c.pop() : s !== "." && c.push(s);
  }), c.length > 1 ? c.join("/") : "/";
}
function cs(u, r, c, o) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rg(u) {
  return u.filter(
    (r, c) => c === 0 || r.route.path && r.route.path.length > 0
  );
}
function Rm(u) {
  let r = rg(u);
  return r.map(
    (c, o) => o === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function Am(u, r, c, o = !1) {
  let s;
  typeof u == "string" ? s = Fn(u) : (s = { ...u }, Le(
    !s.pathname || !s.pathname.includes("?"),
    cs("?", "pathname", "search", s)
  ), Le(
    !s.pathname || !s.pathname.includes("#"),
    cs("#", "pathname", "hash", s)
  ), Le(
    !s.search || !s.search.includes("#"),
    cs("#", "search", "hash", s)
  ));
  let d = u === "" || s.pathname === "", h = d ? "/" : s.pathname, g;
  if (h == null)
    g = c;
  else {
    let x = r.length - 1;
    if (!o && h.startsWith("..")) {
      let D = h.split("/");
      for (; D[0] === ".."; )
        D.shift(), x -= 1;
      s.pathname = D.join("/");
    }
    g = x >= 0 ? r[x] : "/";
  }
  let p = ig(s, g), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && c.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var dl = (u) => u.join("/").replace(/\/\/+/g, "/"), cg = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), sg = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, og = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, fg = class {
  constructor(u, r, c, o = !1) {
    this.status = u, this.statusText = r || "", this.internal = o, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function dg(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function hg(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var wm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Cm(u, r) {
  let c = u;
  if (typeof c != "string" || !Tm.test(c))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: c
    };
  let o = c, s = !1;
  if (wm)
    try {
      let d = new URL(window.location.href), h = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c), g = hl(h.pathname, r);
      h.origin === d.origin && g != null ? c = g + h.search + h.hash : s = !0;
    } catch {
      qt(
        !1,
        `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: s,
    to: c
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var _m = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  _m
);
var mg = [
  "GET",
  ..._m
];
new Set(mg);
var Wn = A.createContext(null);
Wn.displayName = "DataRouter";
var Ui = A.createContext(null);
Ui.displayName = "DataRouterState";
var yg = A.createContext(!1), zm = A.createContext({
  isTransitioning: !1
});
zm.displayName = "ViewTransition";
var gg = A.createContext(
  /* @__PURE__ */ new Map()
);
gg.displayName = "Fetchers";
var pg = A.createContext(null);
pg.displayName = "Await";
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
var As = A.createContext(null);
As.displayName = "RouteError";
var Om = "REACT_ROUTER_ERROR", vg = "REDIRECT", bg = "ROUTE_ERROR_RESPONSE";
function Sg(u) {
  if (u.startsWith(`${Om}:${vg}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function Eg(u) {
  if (u.startsWith(
    `${Om}:${bg}:{`
  ))
    try {
      let r = JSON.parse(u.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new fg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function xg(u, { relative: r } = {}) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: o } = A.useContext(jt), { hash: s, pathname: d, search: h } = tu(u, { relative: r }), g = d;
  return c !== "/" && (g = d === "/" ? c : dl([c, d])), o.createHref({ pathname: g, search: h, hash: s });
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
var Nm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mm(u) {
  A.useContext(jt).static || A.useLayoutEffect(u);
}
function Tg() {
  let { isDataRoute: u } = A.useContext(ml);
  return u ? Bg() : Rg();
}
function Rg() {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext(Wn), { basename: r, navigator: c } = A.useContext(jt), { matches: o } = A.useContext(ml), { pathname: s } = on(), d = JSON.stringify(Rm(o)), h = A.useRef(!1);
  return Mm(() => {
    h.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (qt(h.current, Nm), !h.current) return;
      if (typeof p == "number") {
        c.go(p);
        return;
      }
      let b = Am(
        p,
        JSON.parse(d),
        s,
        y.relative === "path"
      );
      u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : dl([r, b.pathname])), (y.replace ? c.replace : c.push)(
        b,
        y.state,
        y
      );
    },
    [
      r,
      c,
      d,
      s,
      u
    ]
  );
}
A.createContext(null);
function tu(u, { relative: r } = {}) {
  let { matches: c } = A.useContext(ml), { pathname: o } = on(), s = JSON.stringify(Rm(c));
  return A.useMemo(
    () => Am(
      u,
      JSON.parse(s),
      o,
      r === "path"
    ),
    [u, s, o, r]
  );
}
function Ag(u, r) {
  return Dm(u, r);
}
function Dm(u, r, c, o, s) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(jt), { matches: h } = A.useContext(ml), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", x = g && g.route;
  {
    let V = x && x.path || "";
    jm(
      y,
      !x || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let D = on(), q;
  if (r) {
    let V = typeof r == "string" ? Fn(r) : r;
    Le(
      b === "/" || V.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), q = V;
  } else
    q = D;
  let _ = q.pathname || "/", j = _;
  if (b !== "/") {
    let V = b.replace(/^\//, "").split("/");
    j = "/" + _.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let N = Sm(u, { pathname: j });
  qt(
    x || N != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), qt(
    N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Q = Og(
    N && N.map(
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
    c,
    o,
    s
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
function wg() {
  let u = jg(), r = dg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), h = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ A.createElement("pre", { style: s }, c) : null, h);
}
var Cg = /* @__PURE__ */ A.createElement(wg, null), Um = class extends A.Component {
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
      const c = Eg(u.digest);
      c && (u = c);
    }
    let r = u !== void 0 ? /* @__PURE__ */ A.createElement(ml.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      As.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(_g, { error: u }, r) : r;
  }
};
Um.contextType = yg;
var ss = /* @__PURE__ */ new WeakMap();
function _g({
  children: u,
  error: r
}) {
  let { basename: c } = A.useContext(jt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = Sg(r.digest);
    if (o) {
      let s = ss.get(r);
      if (s) throw s;
      let d = Cm(o.location, c);
      if (wm && !ss.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw ss.set(r, h), h;
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
  let o = A.useContext(Wn);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(ml.Provider, { value: u }, c);
}
function Og(u, r = [], c = null, o = null, s = null) {
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
  let d = u, h = c?.errors;
  if (h != null) {
    let b = d.findIndex(
      (x) => x.route.id && h?.[x.route.id] !== void 0
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
  if (c)
    for (let b = 0; b < d.length; b++) {
      let x = d[b];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (p = b), x.route.id) {
        let { loaderData: D, errors: q } = c, _ = x.route.loader && !D.hasOwnProperty(x.route.id) && (!q || q[x.route.id] === void 0);
        if (x.route.lazy || _) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = c && o ? (b, x) => {
    o(b, {
      location: c.location,
      params: c.matches?.[0]?.params ?? {},
      unstable_pattern: hg(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (b, x, D) => {
      let q, _ = !1, j = null, N = null;
      c && (q = h && x.route.id ? h[x.route.id] : void 0, j = x.route.errorElement || Cg, g && (p < 0 && D === 0 ? (jm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), _ = !0, N = null) : p === D && (_ = !0, N = x.route.hydrateFallbackElement || null)));
      let Q = r.concat(d.slice(0, D + 1)), V = () => {
        let k;
        return q ? k = j : _ ? k = N : x.route.Component ? k = /* @__PURE__ */ A.createElement(x.route.Component, null) : x.route.element ? k = x.route.element : k = b, /* @__PURE__ */ A.createElement(
          zg,
          {
            match: x,
            routeContext: {
              outlet: b,
              matches: Q,
              isDataRoute: c != null
            },
            children: k
          }
        );
      };
      return c && (x.route.ErrorBoundary || x.route.errorElement || D === 0) ? /* @__PURE__ */ A.createElement(
        Um,
        {
          location: c.location,
          revalidation: c.revalidation,
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
function ws(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ng(u) {
  let r = A.useContext(Wn);
  return Le(r, ws(u)), r;
}
function Mg(u) {
  let r = A.useContext(Ui);
  return Le(r, ws(u)), r;
}
function Dg(u) {
  let r = A.useContext(ml);
  return Le(r, ws(u)), r;
}
function Cs(u) {
  let r = Dg(u), c = r.matches[r.matches.length - 1];
  return Le(
    c.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), c.route.id;
}
function Ug() {
  return Cs(
    "useRouteId"
    /* UseRouteId */
  );
}
function jg() {
  let u = A.useContext(As), r = Mg(
    "useRouteError"
    /* UseRouteError */
  ), c = Cs(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[c];
}
function Bg() {
  let { router: u } = Ng(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Cs(
    "useNavigate"
    /* UseNavigateStable */
  ), c = A.useRef(!1);
  return Mm(() => {
    c.current = !0;
  }), A.useCallback(
    async (s, d = {}) => {
      qt(c.current, Nm), c.current && (typeof s == "number" ? await u.navigate(s) : await u.navigate(s, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var Kh = {};
function jm(u, r, c) {
  !r && !Kh[u] && (Kh[u] = !0, qt(!1, c));
}
A.memo(Lg);
function Lg({
  routes: u,
  future: r,
  state: c,
  onError: o
}) {
  return Dm(u, void 0, c, o, r);
}
function Bm(u) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Hg({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: o = "POP",
  navigator: s,
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
      navigator: s,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, s, d, h]
  );
  typeof c == "string" && (c = Fn(c));
  let {
    pathname: y = "/",
    search: b = "",
    hash: x = "",
    state: D = null,
    key: q = "default"
  } = c, _ = A.useMemo(() => {
    let j = hl(y, g);
    return j == null ? null : {
      location: {
        pathname: j,
        search: b,
        hash: x,
        state: D,
        key: q
      },
      navigationType: o
    };
  }, [g, y, b, x, D, q, o]);
  return qt(
    _ != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ A.createElement(jt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Pa.Provider, { children: r, value: _ }));
}
function qg({
  children: u,
  location: r
}) {
  return Ag(bs(u), r);
}
function bs(u, r = []) {
  let c = [];
  return A.Children.forEach(u, (o, s) => {
    if (!A.isValidElement(o))
      return;
    let d = [...r, s];
    if (o.type === A.Fragment) {
      c.push.apply(
        c,
        bs(o.props.children, d)
      );
      return;
    }
    Le(
      o.type === Bm,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let h = {
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
    o.props.children && (h.children = bs(
      o.props.children,
      d
    )), c.push(h);
  }), c;
}
var wi = "get", Ci = "application/x-www-form-urlencoded";
function ji(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Yg(u) {
  return ji(u) && u.tagName.toLowerCase() === "button";
}
function Gg(u) {
  return ji(u) && u.tagName.toLowerCase() === "form";
}
function Xg(u) {
  return ji(u) && u.tagName.toLowerCase() === "input";
}
function Vg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Qg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Vg(u);
}
var Ri = null;
function Zg() {
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
var kg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function os(u) {
  return u != null && !kg.has(u) ? (qt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`
  ), null) : u;
}
function Kg(u, r) {
  let c, o, s, d, h;
  if (Gg(u)) {
    let g = u.getAttribute("action");
    o = g ? hl(g, r) : null, c = u.getAttribute("method") || wi, s = os(u.getAttribute("enctype")) || Ci, d = new FormData(u);
  } else if (Yg(u) || Xg(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (o = p ? hl(p, r) : null, c = u.getAttribute("formmethod") || g.getAttribute("method") || wi, s = os(u.getAttribute("formenctype")) || os(g.getAttribute("enctype")) || Ci, d = new FormData(g, u), !Zg()) {
      let { name: y, type: b, value: x } = u;
      if (b === "image") {
        let D = y ? `${y}.` : "";
        d.append(`${D}x`, "0"), d.append(`${D}y`, "0");
      } else y && d.append(y, x);
    }
  } else {
    if (ji(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = wi, o = null, s = Ci, h = u;
  }
  return d && s === "text/plain" && (h = d, d = void 0), { action: o, method: c.toLowerCase(), encType: s, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function _s(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function Jg(u, r, c) {
  let o = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return o.pathname === "/" ? o.pathname = `_root.${c}` : r && hl(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${c}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${c}`, o;
}
async function $g(u, r) {
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
async function Wg(u, r, c) {
  let o = await Promise.all(
    u.map(async (s) => {
      let d = r.routes[s.route.id];
      if (d) {
        let h = await $g(d, c);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return tp(
    o.flat(1).filter(Fg).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Jh(u, r, c, o, s, d) {
  let h = (p, y) => c[y] ? p.route.id !== c[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    c[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c[y].route.path?.endsWith("*") && c[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => h(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let b = o.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (h(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let x = p.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: c[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function Ig(u, r, { includeHydrateFallback: c } = {}) {
  return Pg(
    u.map((o) => {
      let s = r.routes[o.route.id];
      if (!s) return [];
      let d = [s.module];
      return s.clientActionModule && (d = d.concat(s.clientActionModule)), s.clientLoaderModule && (d = d.concat(s.clientLoaderModule)), c && s.hydrateFallbackModule && (d = d.concat(s.hydrateFallbackModule)), s.imports && (d = d.concat(s.imports)), d;
    }).flat(1)
  );
}
function Pg(u) {
  return [...new Set(u)];
}
function ep(u) {
  let r = {}, c = Object.keys(u).sort();
  for (let o of c)
    r[o] = u[o];
  return r;
}
function tp(u, r) {
  let c = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((o, s) => {
    let d = JSON.stringify(ep(s));
    return c.has(d) || (c.add(d), o.push({ key: d, link: s })), o;
  }, []);
}
function Lm() {
  let u = A.useContext(Wn);
  return _s(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function lp() {
  let u = A.useContext(Ui);
  return _s(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var zs = A.createContext(void 0);
zs.displayName = "FrameworkContext";
function Hm() {
  let u = A.useContext(zs);
  return _s(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function np(u, r) {
  let c = A.useContext(zs), [o, s] = A.useState(!1), [d, h] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: x } = r, D = A.useRef(null);
  A.useEffect(() => {
    if (u === "render" && h(!0), u === "viewport") {
      let j = (Q) => {
        Q.forEach((V) => {
          h(V.isIntersecting);
        });
      }, N = new IntersectionObserver(j, { threshold: 0.5 });
      return D.current && N.observe(D.current), () => {
        N.disconnect();
      };
    }
  }, [u]), A.useEffect(() => {
    if (o) {
      let j = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [o]);
  let q = () => {
    s(!0);
  }, _ = () => {
    s(!1), h(!1);
  };
  return c ? u !== "intent" ? [d, D, {}] : [
    d,
    D,
    {
      onFocus: Ja(g, q),
      onBlur: Ja(p, _),
      onMouseEnter: Ja(y, q),
      onMouseLeave: Ja(b, _),
      onTouchStart: Ja(x, q)
    }
  ] : [!1, D, {}];
}
function Ja(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function ap({ page: u, ...r }) {
  let { router: c } = Lm(), o = A.useMemo(
    () => Sm(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return o ? /* @__PURE__ */ A.createElement(ip, { page: u, matches: o, ...r }) : null;
}
function up(u) {
  let { manifest: r, routeModules: c } = Hm(), [o, s] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Wg(u, r, c).then(
      (h) => {
        d || s(h);
      }
    ), () => {
      d = !0;
    };
  }, [u, r, c]), o;
}
function ip({
  page: u,
  matches: r,
  ...c
}) {
  let o = on(), { manifest: s, routeModules: d } = Hm(), { basename: h } = Lm(), { loaderData: g, matches: p } = lp(), y = A.useMemo(
    () => Jh(
      u,
      r,
      p,
      s,
      o,
      "data"
    ),
    [u, r, p, s, o]
  ), b = A.useMemo(
    () => Jh(
      u,
      r,
      p,
      s,
      o,
      "assets"
    ),
    [u, r, p, s, o]
  ), x = A.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), j = !1;
    if (r.forEach((Q) => {
      let V = s.routes[Q.route.id];
      !V || !V.hasLoader || (!y.some((k) => k.route.id === Q.route.id) && Q.route.id in g && d[Q.route.id]?.shouldRevalidate || V.hasClientLoader ? j = !0 : _.add(Q.route.id));
    }), _.size === 0)
      return [];
    let N = Jg(u, h, "data");
    return j && _.size > 0 && N.searchParams.set(
      "_routes",
      r.filter((Q) => _.has(Q.route.id)).map((Q) => Q.route.id).join(",")
    ), [N.pathname + N.search];
  }, [
    h,
    g,
    o,
    s,
    y,
    r,
    u,
    d
  ]), D = A.useMemo(
    () => Ig(b, s),
    [b, s]
  ), q = up(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, x.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...c })), D.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "modulepreload", href: _, ...c })), q.map(({ key: _, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: _, nonce: c.nonce, ...j })
  )));
}
function rp(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var cp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  cp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function sp({
  basename: u,
  children: r,
  unstable_useTransitions: c,
  window: o
}) {
  let s = A.useRef();
  s.current == null && (s.current = X1({ window: o, v5Compat: !0 }));
  let d = s.current, [h, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      c === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [c]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    Hg,
    {
      basename: u,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      unstable_useTransitions: c
    }
  );
}
var qm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ym = A.forwardRef(
  function({
    onClick: r,
    discover: c = "render",
    prefetch: o = "none",
    relative: s,
    reloadDocument: d,
    replace: h,
    state: g,
    target: p,
    to: y,
    preventScrollReset: b,
    viewTransition: x,
    unstable_defaultShouldRevalidate: D,
    ...q
  }, _) {
    let { basename: j, unstable_useTransitions: N } = A.useContext(jt), Q = typeof y == "string" && qm.test(y), V = Cm(y, j);
    y = V.to;
    let k = xg(y, { relative: s }), [ee, K, le] = np(
      o,
      q
    ), ae = hp(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: s,
      viewTransition: x,
      unstable_defaultShouldRevalidate: D,
      unstable_useTransitions: N
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
          ref: rp(_, K),
          target: p,
          "data-discover": !Q && c === "render" ? "true" : void 0
        }
      )
    );
    return ee && !Q ? /* @__PURE__ */ A.createElement(A.Fragment, null, Se, /* @__PURE__ */ A.createElement(ap, { page: k })) : Se;
  }
);
Ym.displayName = "Link";
var op = A.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: o = "",
    end: s = !1,
    style: d,
    to: h,
    viewTransition: g,
    children: p,
    ...y
  }, b) {
    let x = tu(h, { relative: y.relative }), D = on(), q = A.useContext(Ui), { navigator: _, basename: j } = A.useContext(jt), N = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    vp(x) && g === !0, Q = _.encodeLocation ? _.encodeLocation(x).pathname : x.pathname, V = D.pathname, k = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    c || (V = V.toLowerCase(), k = k ? k.toLowerCase() : null, Q = Q.toLowerCase()), k && j && (k = hl(k, j) || k);
    const ee = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let K = V === Q || !s && V.startsWith(Q) && V.charAt(ee) === "/", le = k != null && (k === Q || !s && k.startsWith(Q) && k.charAt(Q.length) === "/"), ae = {
      isActive: K,
      isPending: le,
      isTransitioning: N
    }, I = K ? r : void 0, Se;
    typeof o == "function" ? Se = o(ae) : Se = [
      o,
      K ? "active" : null,
      le ? "pending" : null,
      N ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof d == "function" ? d(ae) : d;
    return /* @__PURE__ */ A.createElement(
      Ym,
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
op.displayName = "NavLink";
var fp = A.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: o,
    replace: s,
    state: d,
    method: h = wi,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: x,
    unstable_defaultShouldRevalidate: D,
    ...q
  }, _) => {
    let { unstable_useTransitions: j } = A.useContext(jt), N = gp(), Q = pp(g, { relative: y }), V = h.toLowerCase() === "get" ? "get" : "post", k = typeof g == "string" && qm.test(g), ee = (K) => {
      if (p && p(K), K.defaultPrevented) return;
      K.preventDefault();
      let le = K.nativeEvent.submitter, ae = le?.getAttribute("formmethod") || h, I = () => N(le || K.currentTarget, {
        fetcherKey: r,
        method: ae,
        navigate: c,
        replace: s,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: x,
        unstable_defaultShouldRevalidate: D
      });
      j && c !== !1 ? A.startTransition(() => I()) : I();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: _,
        method: V,
        action: Q,
        onSubmit: o ? p : ee,
        ...q,
        "data-discover": !k && u === "render" ? "true" : void 0
      }
    );
  }
);
fp.displayName = "Form";
function dp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gm(u) {
  let r = A.useContext(Wn);
  return Le(r, dp(u)), r;
}
function hp(u, {
  target: r,
  replace: c,
  state: o,
  preventScrollReset: s,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Tg(), b = on(), x = tu(u, { relative: d });
  return A.useCallback(
    (D) => {
      if (Qg(D, r)) {
        D.preventDefault();
        let q = c !== void 0 ? c : Ia(b) === Ia(x), _ = () => y(u, {
          replace: q,
          state: o,
          preventScrollReset: s,
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
      x,
      c,
      o,
      r,
      u,
      s,
      d,
      h,
      g,
      p
    ]
  );
}
var mp = 0, yp = () => `__${String(++mp)}__`;
function gp() {
  let { router: u } = Gm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(jt), c = Ug(), o = u.fetch, s = u.navigate;
  return A.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: x } = Kg(
        d,
        r
      );
      if (h.navigate === !1) {
        let D = h.fetcherKey || yp();
        await o(D, c, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: x,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await s(h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: x,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          replace: h.replace,
          state: h.state,
          fromRouteId: c,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition
        });
    },
    [o, s, r, c]
  );
}
function pp(u, { relative: r } = {}) {
  let { basename: c } = A.useContext(jt), o = A.useContext(ml);
  Le(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1), d = { ...tu(u || ".", { relative: r }) }, h = on();
  if (u == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((x) => x).forEach((x) => g.append("index", x));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && s.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : dl([c, d.pathname])), Ia(d);
}
function vp(u, { relative: r } = {}) {
  let c = A.useContext(zm);
  Le(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Gm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = tu(u, { relative: r });
  if (!c.isTransitioning)
    return !1;
  let d = hl(c.currentLocation.pathname, o) || c.currentLocation.pathname, h = hl(c.nextLocation.pathname, o) || c.nextLocation.pathname;
  return Ni(s.pathname, h) != null || Ni(s.pathname, d) != null;
}
var fs = { exports: {} }, nt = {};
var $h;
function bp() {
  if ($h) return nt;
  $h = 1;
  var u = Rs();
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
  var o = {
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
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, y, b) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: x == null ? null : "" + x,
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
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, nt.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, nt.flushSync = function(p) {
    var y = h.T, b = o.p;
    try {
      if (h.T = null, o.p = 2, p) return p();
    } finally {
      h.T = y, o.p = b, o.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, x = g(b, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? o.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: x,
          integrity: D,
          fetchPriority: q
        }
      ) : b === "script" && o.d.X(p, {
        crossOrigin: x,
        integrity: D,
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
          o.d.M(p, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(p);
  }, nt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, x = g(b, y.crossOrigin);
      o.d.L(p, b, {
        crossOrigin: x,
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
        o.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(p);
  }, nt.requestFormReset = function(p) {
    o.d.r(p);
  }, nt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, nt.useFormState = function(p, y, b) {
    return h.H.useFormState(p, y, b);
  }, nt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Fh;
function Sp() {
  if (Fh) return fs.exports;
  Fh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), fs.exports = bp(), fs.exports;
}
var ds = { exports: {} }, $a = {}, hs = { exports: {} }, ms = {};
var Wh;
function Ep() {
  return Wh || (Wh = 1, (function(u) {
    function r(G, Y) {
      var X = G.length;
      G.push(Y);
      e: for (; 0 < X; ) {
        var fe = X - 1 >>> 1, Ee = G[fe];
        if (0 < s(Ee, Y))
          G[fe] = Y, G[X] = Ee, X = fe;
        else break e;
      }
    }
    function c(G) {
      return G.length === 0 ? null : G[0];
    }
    function o(G) {
      if (G.length === 0) return null;
      var Y = G[0], X = G.pop();
      if (X !== Y) {
        G[0] = X;
        e: for (var fe = 0, Ee = G.length, ne = Ee >>> 1; fe < ne; ) {
          var S = 2 * (fe + 1) - 1, B = G[S], Z = S + 1, $ = G[Z];
          if (0 > s(B, X))
            Z < Ee && 0 > s($, B) ? (G[fe] = $, G[Z] = X, fe = Z) : (G[fe] = B, G[S] = X, fe = S);
          else if (Z < Ee && 0 > s($, X))
            G[fe] = $, G[Z] = X, fe = Z;
          else break e;
        }
      }
      return Y;
    }
    function s(G, Y) {
      var X = G.sortIndex - Y.sortIndex;
      return X !== 0 ? X : G.id - Y.id;
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
    var p = [], y = [], b = 1, x = null, D = 3, q = !1, _ = !1, j = !1, N = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function ee(G) {
      for (var Y = c(y); Y !== null; ) {
        if (Y.callback === null) o(y);
        else if (Y.startTime <= G)
          o(y), Y.sortIndex = Y.expirationTime, r(p, Y);
        else break;
        Y = c(y);
      }
    }
    function K(G) {
      if (j = !1, ee(G), !_)
        if (c(p) !== null)
          _ = !0, le || (le = !0, ze());
        else {
          var Y = c(y);
          Y !== null && Ve(K, Y.startTime - G);
        }
    }
    var le = !1, ae = -1, I = 5, Se = -1;
    function pe() {
      return N ? !0 : !(u.unstable_now() - Se < I);
    }
    function We() {
      if (N = !1, le) {
        var G = u.unstable_now();
        Se = G;
        var Y = !0;
        try {
          e: {
            _ = !1, j && (j = !1, V(ae), ae = -1), q = !0;
            var X = D;
            try {
              t: {
                for (ee(G), x = c(p); x !== null && !(x.expirationTime > G && pe()); ) {
                  var fe = x.callback;
                  if (typeof fe == "function") {
                    x.callback = null, D = x.priorityLevel;
                    var Ee = fe(
                      x.expirationTime <= G
                    );
                    if (G = u.unstable_now(), typeof Ee == "function") {
                      x.callback = Ee, ee(G), Y = !0;
                      break t;
                    }
                    x === c(p) && o(p), ee(G);
                  } else o(p);
                  x = c(p);
                }
                if (x !== null) Y = !0;
                else {
                  var ne = c(y);
                  ne !== null && Ve(
                    K,
                    ne.startTime - G
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              x = null, D = X, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? ze() : le = !1;
        }
      }
    }
    var ze;
    if (typeof k == "function")
      ze = function() {
        k(We);
      };
    else if (typeof MessageChannel < "u") {
      var Ye = new MessageChannel(), Ne = Ye.port2;
      Ye.port1.onmessage = We, ze = function() {
        Ne.postMessage(null);
      };
    } else
      ze = function() {
        Q(We, 0);
      };
    function Ve(G, Y) {
      ae = Q(function() {
        G(u.unstable_now());
      }, Y);
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
          var Y = 3;
          break;
        default:
          Y = D;
      }
      var X = D;
      D = Y;
      try {
        return G();
      } finally {
        D = X;
      }
    }, u.unstable_requestPaint = function() {
      N = !0;
    }, u.unstable_runWithPriority = function(G, Y) {
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
        return Y();
      } finally {
        D = X;
      }
    }, u.unstable_scheduleCallback = function(G, Y, X) {
      var fe = u.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? fe + X : fe) : X = fe, G) {
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
      return Ee = X + Ee, G = {
        id: b++,
        callback: Y,
        priorityLevel: G,
        startTime: X,
        expirationTime: Ee,
        sortIndex: -1
      }, X > fe ? (G.sortIndex = X, r(y, G), c(p) === null && G === c(y) && (j ? (V(ae), ae = -1) : j = !0, Ve(K, X - fe))) : (G.sortIndex = Ee, r(p, G), _ || q || (_ = !0, le || (le = !0, ze()))), G;
    }, u.unstable_shouldYield = pe, u.unstable_wrapCallback = function(G) {
      var Y = D;
      return function() {
        var X = D;
        D = Y;
        try {
          return G.apply(this, arguments);
        } finally {
          D = X;
        }
      };
    };
  })(ms)), ms;
}
var Ih;
function xp() {
  return Ih || (Ih = 1, hs.exports = Ep()), hs.exports;
}
var Ph;
function Tp() {
  if (Ph) return $a;
  Ph = 1;
  var u = {};
  var r = xp(), c = Rs(), o = Sp();
  function s(e) {
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
      throw Error(s(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(s(188));
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
        throw Error(s(188));
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
          if (!f) throw Error(s(189));
        }
      }
      if (l.alternate !== n) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? e : t;
  }
  function x(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = x(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), N = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), Se = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.activity"), We = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ze = Symbol.iterator;
  function Ye(e) {
    return e === null || typeof e != "object" ? null : (e = ze && e[ze] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ne = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ve(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ne ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
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
        case j:
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
  var G = Array.isArray, Y = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
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
  var $ = S(null), se = S(null), oe = S(null), te = S(null);
  function Be(e, t) {
    switch (Z(oe, t), Z(se, e), Z($, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ch(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = ch(t), e = sh(t, e);
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
  function Ae() {
    B($), B(se), B(oe);
  }
  function Gt(e) {
    e.memoizedState !== null && Z(te, e);
    var t = $.current, l = sh(t, e.type);
    t !== l && (Z(se, e), Z($, l));
  }
  function Xt(e) {
    se.current === e && (B($), B(se)), te.current === e && (B(te), Va._currentValue = fe);
  }
  var ea, Bs;
  function Yl(e) {
    if (ea === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ea = t && t[1] || "", Bs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ea + e + Bs;
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
                  var U = `
` + v[n].replace(" at new ", " at ");
                  return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
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
  function g0(e, t) {
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
  function Ls(e) {
    try {
      var t = "", l = null;
      do
        t += g0(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Zi = Object.prototype.hasOwnProperty, ki = r.unstable_scheduleCallback, Ki = r.unstable_cancelCallback, p0 = r.unstable_shouldYield, v0 = r.unstable_requestPaint, yt = r.unstable_now, b0 = r.unstable_getCurrentPriorityLevel, Hs = r.unstable_ImmediatePriority, qs = r.unstable_UserBlockingPriority, ru = r.unstable_NormalPriority, S0 = r.unstable_LowPriority, Ys = r.unstable_IdlePriority, E0 = r.log, x0 = r.unstable_setDisableYieldValue, ta = null, gt = null;
  function yl(e) {
    if (typeof E0 == "function" && x0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ta, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : A0, T0 = Math.log, R0 = Math.LN2;
  function A0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (T0(e) / R0 | 0) | 0;
  }
  var cu = 256, su = 262144, ou = 4194304;
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
  function fu(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var m = n & 134217727;
    return m !== 0 ? (n = m & ~i, n !== 0 ? a = Gl(n) : (f &= m, f !== 0 ? a = Gl(f) : l || (l = m & ~e, l !== 0 && (a = Gl(l))))) : (m = n & ~i, m !== 0 ? a = Gl(m) : f !== 0 ? a = Gl(f) : l || (l = n & ~e, l !== 0 && (a = Gl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function la(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function w0(e, t) {
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
  function Gs() {
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
  function C0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var U = 31 - pt(l), H = 1 << U;
      m[U] = 0, v[U] = -1;
      var z = C[U];
      if (z !== null)
        for (C[U] = null, U = 0; U < z.length; U++) {
          var M = z[U];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~H;
    }
    n !== 0 && Xs(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Xs(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Vs(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Qs(e, t) {
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
  function Fi(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zs() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Mh(e.type));
  }
  function ks(e, t) {
    var l = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = l;
    }
  }
  var gl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + gl, it = "__reactProps$" + gl, fn = "__reactContainer$" + gl, Wi = "__reactEvents$" + gl, _0 = "__reactListeners$" + gl, z0 = "__reactHandles$" + gl, Ks = "__reactResources$" + gl, aa = "__reactMarker$" + gl;
  function Ii(e) {
    delete e[Ie], delete e[it], delete e[Wi], delete e[_0], delete e[z0];
  }
  function dn(e) {
    var t = e[Ie];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[fn] || l[Ie]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = gh(e); e !== null; ) {
            if (l = e[Ie]) return l;
            e = gh(e);
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
    throw Error(s(33));
  }
  function mn(e) {
    var t = e[Ks];
    return t || (t = e[Ks] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[aa] = !0;
  }
  var Js = /* @__PURE__ */ new Set(), $s = {};
  function Xl(e, t) {
    yn(e, t), yn(e + "Capture", t);
  }
  function yn(e, t) {
    for ($s[e] = t, e = 0; e < t.length; e++)
      Js.add(t[e]);
  }
  var O0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fs = {}, Ws = {};
  function N0(e) {
    return Zi.call(Ws, e) ? !0 : Zi.call(Fs, e) ? !1 : O0.test(e) ? Ws[e] = !0 : (Fs[e] = !0, !1);
  }
  function du(e, t, l) {
    if (N0(t))
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
  function Is(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function M0(e, t, l) {
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
      var t = Is(e) ? "checked" : "value";
      e._valueTracker = M0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ps(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Is(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function mu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var D0 = /[\n"\\]/g;
  function wt(e) {
    return e.replace(
      D0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function er(e, t, l, n, a, i, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? tr(e, f, At(t)) : l != null ? tr(e, f, At(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + At(m) : e.removeAttribute("name");
  }
  function eo(e, t, l, n, a, i, f, m) {
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
  function to(e, t, l) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + At(l) : "";
  }
  function lo(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(s(92));
        if (G(n)) {
          if (1 < n.length) throw Error(s(93));
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
  var U0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function no(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || U0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function ao(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && no(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && no(e, i, t[i]);
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
  var j0 = /* @__PURE__ */ new Map([
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
  ]), B0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yu(e) {
    return B0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function $t() {
  }
  var nr = null;
  function ar(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vn = null, bn = null;
  function uo(e) {
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
                if (!a) throw Error(s(90));
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
              n = l[t], n.form === e.form && Ps(n);
          }
          break e;
        case "textarea":
          to(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && gn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ur = !1;
  function io(e, t, l) {
    if (ur) return e(t, l);
    ur = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ur = !1, (vn !== null || bn !== null) && (li(), vn && (t = vn, e = bn, bn = vn = null, uo(t), e)))
        for (t = 0; t < e.length; t++) uo(e[t]);
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
        s(231, t, typeof l)
      );
    return l;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ir = !1;
  if (Ft)
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
  function ro() {
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
    return D(t.prototype, {
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
  }, bu = rt(Vl), ca = D({}, Vl, { view: 0, detail: 0 }), L0 = rt(ca), cr, sr, sa, Su = D({}, ca, {
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
      return "movementX" in e ? e.movementX : (e !== sa && (sa && e.type === "mousemove" ? (cr = e.screenX - sa.screenX, sr = e.screenY - sa.screenY) : sr = cr = 0, sa = e), cr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : sr;
    }
  }), so = rt(Su), H0 = D({}, Su, { dataTransfer: 0 }), q0 = rt(H0), Y0 = D({}, ca, { relatedTarget: 0 }), or = rt(Y0), G0 = D({}, Vl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), X0 = rt(G0), V0 = D({}, Vl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Q0 = rt(V0), Z0 = D({}, Vl, { data: 0 }), oo = rt(Z0), k0 = {
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
  }, K0 = {
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
  }, J0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = J0[e]) ? !!t[e] : !1;
  }
  function fr() {
    return $0;
  }
  var F0 = D({}, ca, {
    key: function(e) {
      if (e.key) {
        var t = k0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K0[e.keyCode] || "Unidentified" : "";
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
  }), W0 = rt(F0), I0 = D({}, Su, {
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
  }), fo = rt(I0), P0 = D({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fr
  }), ey = rt(P0), ty = D({}, Vl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ly = rt(ty), ny = D({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ay = rt(ny), uy = D({}, Vl, {
    newState: 0,
    oldState: 0
  }), iy = rt(uy), ry = [9, 13, 27, 32], dr = Ft && "CompositionEvent" in window, oa = null;
  Ft && "documentMode" in document && (oa = document.documentMode);
  var cy = Ft && "TextEvent" in window && !oa, ho = Ft && (!dr || oa && 8 < oa && 11 >= oa), mo = " ", yo = !1;
  function go(e, t) {
    switch (e) {
      case "keyup":
        return ry.indexOf(t.keyCode) !== -1;
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
  function po(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function sy(e, t) {
    switch (e) {
      case "compositionend":
        return po(t);
      case "keypress":
        return t.which !== 32 ? null : (yo = !0, mo);
      case "textInput":
        return e = t.data, e === mo && yo ? null : e;
      default:
        return null;
    }
  }
  function oy(e, t) {
    if (Sn)
      return e === "compositionend" || !dr && go(e, t) ? (e = ro(), gu = rr = pl = null, Sn = !1, e) : null;
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
        return ho && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var fy = {
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
  function vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fy[e.type] : t === "textarea";
  }
  function bo(e, t, l, n) {
    vn ? bn ? bn.push(n) : bn = [n] : vn = n, t = si(t, "onChange"), 0 < t.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, da = null;
  function dy(e) {
    lh(e, 0);
  }
  function Eu(e) {
    var t = ua(e);
    if (Ps(t)) return e;
  }
  function So(e, t) {
    if (e === "change") return t;
  }
  var Eo = !1;
  if (Ft) {
    var hr;
    if (Ft) {
      var mr = "oninput" in document;
      if (!mr) {
        var xo = document.createElement("div");
        xo.setAttribute("oninput", "return;"), mr = typeof xo.oninput == "function";
      }
      hr = mr;
    } else hr = !1;
    Eo = hr && (!document.documentMode || 9 < document.documentMode);
  }
  function To() {
    fa && (fa.detachEvent("onpropertychange", Ro), da = fa = null);
  }
  function Ro(e) {
    if (e.propertyName === "value" && Eu(da)) {
      var t = [];
      bo(
        t,
        da,
        e,
        ar(e)
      ), io(dy, t);
    }
  }
  function hy(e, t, l) {
    e === "focusin" ? (To(), fa = t, da = l, fa.attachEvent("onpropertychange", Ro)) : e === "focusout" && To();
  }
  function my(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Eu(da);
  }
  function yy(e, t) {
    if (e === "click") return Eu(t);
  }
  function gy(e, t) {
    if (e === "input" || e === "change")
      return Eu(t);
  }
  function py(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : py;
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
  function Ao(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wo(e, t) {
    var l = Ao(e);
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
      l = Ao(l);
    }
  }
  function Co(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Co(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function _o(e) {
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
  var vy = Ft && "documentMode" in document && 11 >= document.documentMode, En = null, gr = null, ma = null, pr = !1;
  function zo(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pr || En == null || En !== mu(n) || (n = En, "selectionStart" in n && yr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ma && ha(ma, n) || (ma = n, n = si(gr, "onSelect"), 0 < n.length && (t = new bu(
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
  }, vr = {}, Oo = {};
  Ft && (Oo = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
  function Zl(e) {
    if (vr[e]) return vr[e];
    if (!xn[e]) return e;
    var t = xn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Oo)
        return vr[e] = t[l];
    return e;
  }
  var No = Zl("animationend"), Mo = Zl("animationiteration"), Do = Zl("animationstart"), by = Zl("transitionrun"), Sy = Zl("transitionstart"), Ey = Zl("transitioncancel"), Uo = Zl("transitionend"), jo = /* @__PURE__ */ new Map(), br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  br.push("scrollEnd");
  function Bt(e, t) {
    jo.set(e, t), Xl(t, [e]);
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
      i !== 0 && Bo(l, a, i);
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
  function Bo(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Au(e) {
    if (50 < Ba)
      throw Ba = 0, Oc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Rn = {};
  function xy(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new xy(e, t, l, n);
  }
  function xr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Wt(e, t) {
    var l = e.alternate;
    return l === null ? (l = bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Lo(e, t) {
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
      f = C1(
        e,
        l,
        $.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case pe:
          return e = bt(31, l, t, a), e.elementType = pe, e.lanes = i, e;
        case N:
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
            s(130, e === null ? "null" : typeof e, "")
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
  function Ho(e) {
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
  var qo = /* @__PURE__ */ new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = qo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Ls(t)
      }, qo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ls(t)
    };
  }
  var An = [], wn = 0, Cu = null, ya = 0, zt = [], Ot = 0, vl = null, Vt = 1, Qt = "";
  function It(e, t) {
    An[wn++] = ya, An[wn++] = Cu, Cu = e, ya = t;
  }
  function Yo(e, t, l) {
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
    e.return !== null && (It(e, 1), Yo(e, 1, 0));
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
  var Pe = null, Me = null, ge = !1, bl = null, Nt = !1, Cr = Error(s(519));
  function Sl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ga(_t(t, e)), Cr;
  }
  function Xo(e) {
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
        he("invalid", t), eo(
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
        he("invalid", t), lo(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || ih(t.textContent, l) ? (n.popover != null && (he("beforetoggle", t), he("toggle", t)), n.onScroll != null && he("scroll", t), n.onScrollEnd != null && he("scrollend", t), n.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || Sl(e, !0);
  }
  function Vo(e) {
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
    if (!ge) return Vo(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Zc(e.type, e.memoizedProps)), l = !l), l && Me && Sl(e), Vo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Me = yh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Me = yh(e);
    } else
      t === 27 ? (t = Me, Ul(e.type) ? (e = Fc, Fc = null, Me = e) : Me = t) : Me = Pe ? Dt(e.stateNode.nextSibling) : null;
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
        if (f = a.return, f === null) throw Error(s(341));
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
        if (f === null) throw Error(s(387));
        if (f = f.memoizedProps, f !== null) {
          var m = a.type;
          vt(a.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (a === te.current) {
        if (f = a.alternate, f === null) throw Error(s(387));
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
  function Fl(e) {
    $l = e, Pt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return Qo($l, e);
  }
  function zu(e, t) {
    return $l === null && Fl(e), Qo(e, t);
  }
  function Qo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Pt === null) {
      if (e === null) throw Error(s(308));
      Pt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Pt = Pt.next = t;
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
  }, Ry = r.unstable_scheduleCallback, Ay = r.unstable_NormalPriority, Qe = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mr() {
    return {
      controller: new Ty(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && Ry(Ay, function() {
      e.controller.abort();
    });
  }
  var va = null, Dr = 0, zn = 0, On = null;
  function wy(e, t) {
    if (va === null) {
      var l = va = [];
      Dr = 0, zn = Bc(), On = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Dr++, t.then(Zo, Zo), t;
  }
  function Zo() {
    if (--Dr === 0 && va !== null) {
      On !== null && (On.status = "fulfilled");
      var e = va;
      va = null, zn = 0, On = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cy(e, t) {
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
  var ko = Y.S;
  Y.S = function(e, t) {
    Od = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && wy(e, t), ko !== null && ko(e, t);
  };
  var Wl = S(null);
  function Ur() {
    var e = Wl.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function Ou(e, t) {
    t === null ? Z(Wl, Wl.current) : Z(Wl, t.pool);
  }
  function Ko() {
    var e = Ur();
    return e === null ? null : { parent: Qe._currentValue, pool: e };
  }
  var Nn = Error(s(460)), jr = Error(s(474)), Nu = Error(s(542)), Mu = { then: function() {
  } };
  function Jo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function $o(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then($t, $t), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Wo(e), e;
      default:
        if (typeof t.status == "string") t.then($t, $t);
        else {
          if (e = Oe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
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
            throw e = t.reason, Wo(e), e;
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
    if (Pl === null) throw Error(s(459));
    var e = Pl;
    return Pl = null, e;
  }
  function Wo(e) {
    if (e === Nn || e === Nu)
      throw Error(s(483));
  }
  var Mn = null, ba = 0;
  function Du(e) {
    var t = ba;
    return ba += 1, Mn === null && (Mn = []), $o(Mn, e, t);
  }
  function Sa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Uu(e, t) {
    throw t.$$typeof === q ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Io(e) {
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
      return R = Wt(R, E), R.index = 0, R.sibling = null, R;
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
      var W = w.type;
      return W === N ? U(
        R,
        E,
        w.props.children,
        L,
        w.key
      ) : E !== null && (E.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Se && Il(W) === E.type) ? (E = a(E, w.props), Sa(E, w), E.return = R, E) : (E = wu(
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
    function U(R, E, w, L, W) {
      return E === null || E.tag !== 7 ? (E = Kl(
        w,
        R.mode,
        L,
        W
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
          case j:
            return E = Rr(
              E,
              R.mode,
              w
            ), E.return = R, E;
          case Se:
            return E = Il(E), H(R, E, w);
        }
        if (G(E) || Ye(E))
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
      var W = E !== null ? E.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return W !== null ? null : m(R, E, "" + w, L);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return w.key === W ? v(R, E, w, L) : null;
          case j:
            return w.key === W ? C(R, E, w, L) : null;
          case Se:
            return w = Il(w), z(R, E, w, L);
        }
        if (G(w) || Ye(w))
          return W !== null ? null : U(R, E, w, L, null);
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
    function M(R, E, w, L, W) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return R = R.get(w) || null, m(E, R, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _:
            return R = R.get(
              L.key === null ? w : L.key
            ) || null, v(E, R, L, W);
          case j:
            return R = R.get(
              L.key === null ? w : L.key
            ) || null, C(E, R, L, W);
          case Se:
            return L = Il(L), M(
              R,
              E,
              w,
              L,
              W
            );
        }
        if (G(L) || Ye(L))
          return R = R.get(w) || null, U(E, R, L, W, null);
        if (typeof L.then == "function")
          return M(
            R,
            E,
            w,
            Du(L),
            W
          );
        if (L.$$typeof === ee)
          return M(
            R,
            E,
            w,
            zu(E, L),
            W
          );
        Uu(E, L);
      }
      return null;
    }
    function J(R, E, w, L) {
      for (var W = null, ve = null, F = E, ce = E = 0, ye = null; F !== null && ce < w.length; ce++) {
        F.index > ce ? (ye = F, F = null) : ye = F.sibling;
        var be = z(
          R,
          F,
          w[ce],
          L
        );
        if (be === null) {
          F === null && (F = ye);
          break;
        }
        e && F && be.alternate === null && t(R, F), E = i(be, E, ce), ve === null ? W = be : ve.sibling = be, ve = be, F = ye;
      }
      if (ce === w.length)
        return l(R, F), ge && It(R, ce), W;
      if (F === null) {
        for (; ce < w.length; ce++)
          F = H(R, w[ce], L), F !== null && (E = i(
            F,
            E,
            ce
          ), ve === null ? W = F : ve.sibling = F, ve = F);
        return ge && It(R, ce), W;
      }
      for (F = n(F); ce < w.length; ce++)
        ye = M(
          F,
          R,
          ce,
          w[ce],
          L
        ), ye !== null && (e && ye.alternate !== null && F.delete(
          ye.key === null ? ce : ye.key
        ), E = i(
          ye,
          E,
          ce
        ), ve === null ? W = ye : ve.sibling = ye, ve = ye);
      return e && F.forEach(function(ql) {
        return t(R, ql);
      }), ge && It(R, ce), W;
    }
    function P(R, E, w, L) {
      if (w == null) throw Error(s(151));
      for (var W = null, ve = null, F = E, ce = E = 0, ye = null, be = w.next(); F !== null && !be.done; ce++, be = w.next()) {
        F.index > ce ? (ye = F, F = null) : ye = F.sibling;
        var ql = z(R, F, be.value, L);
        if (ql === null) {
          F === null && (F = ye);
          break;
        }
        e && F && ql.alternate === null && t(R, F), E = i(ql, E, ce), ve === null ? W = ql : ve.sibling = ql, ve = ql, F = ye;
      }
      if (be.done)
        return l(R, F), ge && It(R, ce), W;
      if (F === null) {
        for (; !be.done; ce++, be = w.next())
          be = H(R, be.value, L), be !== null && (E = i(be, E, ce), ve === null ? W = be : ve.sibling = be, ve = be);
        return ge && It(R, ce), W;
      }
      for (F = n(F); !be.done; ce++, be = w.next())
        be = M(F, R, ce, be.value, L), be !== null && (e && be.alternate !== null && F.delete(be.key === null ? ce : be.key), E = i(be, E, ce), ve === null ? W = be : ve.sibling = be, ve = be);
      return e && F.forEach(function(H1) {
        return t(R, H1);
      }), ge && It(R, ce), W;
    }
    function _e(R, E, w, L) {
      if (typeof w == "object" && w !== null && w.type === N && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            e: {
              for (var W = w.key; E !== null; ) {
                if (E.key === W) {
                  if (W = w.type, W === N) {
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
                  } else if (E.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Se && Il(W) === E.type) {
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
              w.type === N ? (L = Kl(
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
          case j:
            e: {
              for (W = w.key; E !== null; ) {
                if (E.key === W)
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
            return w = Il(w), _e(
              R,
              E,
              w,
              L
            );
        }
        if (G(w))
          return J(
            R,
            E,
            w,
            L
          );
        if (Ye(w)) {
          if (W = Ye(w), typeof W != "function") throw Error(s(150));
          return w = W.call(w), P(
            R,
            E,
            w,
            L
          );
        }
        if (typeof w.then == "function")
          return _e(
            R,
            E,
            Du(w),
            L
          );
        if (w.$$typeof === ee)
          return _e(
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
        var W = _e(
          R,
          E,
          w,
          L
        );
        return Mn = null, W;
      } catch (F) {
        if (F === Nn || F === Nu) throw F;
        var ve = bt(29, F, null, R.mode);
        return ve.lanes = L, ve.return = R, ve;
      }
    };
  }
  var en = Io(!0), Po = Io(!1), xl = !1;
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
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), Bo(e, null, l), t;
    }
    return Ru(e, n, t, l), Au(e);
  }
  function Ea(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Vs(e, l);
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
      var U = e.alternate;
      U !== null && (U = U.updateQueue, m = U.lastBaseUpdate, m !== f && (m === null ? U.firstBaseUpdate = C : m.next = C, U.lastBaseUpdate = v));
    }
    if (i !== null) {
      var H = a.baseState;
      f = 0, U = C = v = null, m = i;
      do {
        var z = m.lane & -536870913, M = z !== m.lane;
        if (M ? (me & z) === z : (n & z) === z) {
          z !== 0 && z === zn && (qr = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, P = m;
            z = t;
            var _e = l;
            switch (P.tag) {
              case 1:
                if (J = P.payload, typeof J == "function") {
                  H = J.call(_e, H, z);
                  break e;
                }
                H = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = P.payload, z = typeof J == "function" ? J.call(_e, H, z) : J, z == null) break e;
                H = D({}, H, z);
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
          }, U === null ? (C = U = M, v = H) : U = U.next = M, f |= z;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          M = m, m = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      U === null && (v = H), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = U, i === null && (a.shared.lanes = 0), zl |= f, e.lanes = f, e.memoizedState = H;
    }
  }
  function ef(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function tf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        ef(l[e], t);
  }
  var Dn = S(null), ju = S(0);
  function lf(e, t) {
    e = sl, Z(ju, e), Z(Dn, t), sl = e | t.baseLanes;
  }
  function Yr() {
    Z(ju, sl), Z(Dn, Dn.current);
  }
  function Gr() {
    sl = ju.current, B(Dn), B(ju);
  }
  var St = S(null), Mt = null;
  function Al(e) {
    var t = e.alternate;
    Z(Ge, Ge.current & 1), Z(St, e), Mt === null && (t === null || Dn.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Xr(e) {
    Z(Ge, Ge.current), Z(St, e), Mt === null && (Mt = e);
  }
  function nf(e) {
    e.tag === 22 ? (Z(Ge, Ge.current), Z(St, e), Mt === null && (Mt = e)) : wl();
  }
  function wl() {
    Z(Ge, Ge.current), Z(St, St.current);
  }
  function Et(e) {
    B(St), Mt === e && (Mt = null), B(Ge);
  }
  var Ge = S(0);
  function Bu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Jc(l) || $c(l)))
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
  var tl = 0, ie = null, we = null, Ze = null, Lu = !1, Un = !1, tn = !1, Hu = 0, Ra = 0, jn = null, _y = 0;
  function He() {
    throw Error(s(321));
  }
  function Vr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Qr(e, t, l, n, a, i) {
    return tl = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Gf : uc, tn = !1, i = l(n, a), tn = !1, Un && (i = uf(
      t,
      l,
      n,
      a
    )), af(e), i;
  }
  function af(e) {
    Y.H = Ca;
    var t = we !== null && we.next !== null;
    if (tl = 0, Ze = we = ie = null, Lu = !1, Ra = 0, jn = null, t) throw Error(s(300));
    e === null || ke || (e = e.dependencies, e !== null && _u(e) && (ke = !0));
  }
  function uf(e, t, l, n) {
    ie = e;
    var a = 0;
    do {
      if (Un && (jn = null), Ra = 0, Un = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Ze = we = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      Y.H = Xf, i = t(l, n);
    } while (Un);
    return i;
  }
  function zy() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Aa(t) : t, e = e.useState()[0], (we !== null ? we.memoizedState : null) !== e && (ie.flags |= 1024), t;
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
    tl = 0, Ze = we = ie = null, Un = !1, Ra = Hu = 0, jn = null;
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
  function Xe() {
    if (we === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = Ze === null ? ie.memoizedState : Ze.next;
    if (t !== null)
      Ze = t, we = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(s(467)) : Error(s(310));
      we = e, e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
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
    return Ra += 1, jn === null && (jn = []), e = $o(jn, e, t), t = ie, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Gf : uc), e;
  }
  function Yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Aa(e);
      if (e.$$typeof === ee) return et(e);
    }
    throw Error(s(438, String(e)));
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
        l[n] = We;
    return t.index++, l;
  }
  function ll(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Gu(e) {
    var t = Xe();
    return $r(t, we, e);
  }
  function $r(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(s(311));
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
      var m = f = null, v = null, C = t, U = !1;
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
            }), H === zn && (U = !0);
          else if ((tl & z) === z) {
            C = C.next, z === zn && (U = !0);
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
      if (v === null ? f = i : v.next = m, !vt(i, e.memoizedState) && (ke = !0, U && (l = On, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Fr(e) {
    var t = Xe(), l = t.queue;
    if (l === null) throw Error(s(311));
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
  function rf(e, t, l) {
    var n = ie, a = Xe(), i = ge;
    if (i) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var f = !vt(
      (we || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, ke = !0), a = a.queue, Pr(of.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ze !== null && Ze.memoizedState.tag & 1) {
      if (n.flags |= 2048, Bn(
        9,
        { destroy: void 0 },
        sf.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Oe === null) throw Error(s(349));
      i || (tl & 127) !== 0 || cf(n, t, l);
    }
    return l;
  }
  function cf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = qu(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function sf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, ff(t) && df(e);
  }
  function of(e, t, l) {
    return l(function() {
      ff(t) && df(e);
    });
  }
  function ff(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l);
    } catch {
      return !0;
    }
  }
  function df(e) {
    var t = kl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Wr(e) {
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
  function hf(e, t, l, n) {
    return e.baseState = l, $r(
      e,
      we,
      typeof n == "function" ? n : ll
    );
  }
  function Oy(e, t, l, n, a) {
    if (Qu(e)) throw Error(s(485));
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
      Y.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, mf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function mf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = Y.T, f = {};
      Y.T = f;
      try {
        var m = l(a, n), v = Y.S;
        v !== null && v(f, m), yf(e, t, m);
      } catch (C) {
        Ir(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), Y.T = i;
      }
    } else
      try {
        i = l(a, n), yf(e, t, i);
      } catch (C) {
        Ir(e, t, C);
      }
  }
  function yf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        gf(e, t, n);
      },
      function(n) {
        return Ir(e, t, n);
      }
    ) : gf(e, t, l);
  }
  function gf(e, t, l) {
    t.status = "fulfilled", t.value = l, pf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, mf(e, l)));
  }
  function Ir(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, pf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function pf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function vf(e, t) {
    return t;
  }
  function bf(e, t) {
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
      lastRenderedReducer: vf,
      lastRenderedState: t
    }, l.queue = n, l = Hf.bind(
      null,
      ie,
      n
    ), n.dispatch = l, n = Wr(!1), i = ac.bind(
      null,
      ie,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = Oy.bind(
      null,
      ie,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function Sf(e) {
    var t = Xe();
    return Ef(t, we, e);
  }
  function Ef(e, t, l) {
    if (t = $r(
      e,
      t,
      vf
    )[0], e = Gu(ll)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Aa(t);
      } catch (f) {
        throw f === Nn ? Nu : f;
      }
    else n = t;
    t = Xe();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ie.flags |= 2048, Bn(
      9,
      { destroy: void 0 },
      Ny.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function Ny(e, t) {
    e.action = t;
  }
  function xf(e) {
    var t = Xe(), l = we;
    if (l !== null)
      return Ef(t, l, e);
    Xe(), t = t.memoizedState, l = Xe();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Bn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ie.updateQueue, t === null && (t = qu(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Tf() {
    return Xe().memoizedState;
  }
  function Xu(e, t, l, n) {
    var a = ut();
    ie.flags |= e, a.memoizedState = Bn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Vu(e, t, l, n) {
    var a = Xe();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    we !== null && n !== null && Vr(n, we.memoizedState.deps) ? a.memoizedState = Bn(t, i, l, n) : (ie.flags |= e, a.memoizedState = Bn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function Rf(e, t) {
    Xu(8390656, 8, e, t);
  }
  function Pr(e, t) {
    Vu(2048, 8, e, t);
  }
  function My(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = qu(), ie.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Af(e) {
    var t = Xe().memoizedState;
    return My({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function wf(e, t) {
    return Vu(4, 2, e, t);
  }
  function Cf(e, t) {
    return Vu(4, 4, e, t);
  }
  function _f(e, t) {
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
  function zf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Vu(4, 4, _f.bind(null, t, e), l);
  }
  function ec() {
  }
  function Of(e, t) {
    var l = Xe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Vr(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Nf(e, t) {
    var l = Xe();
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
  function tc(e, t, l) {
    return l === void 0 || (tl & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Md(), ie.lanes |= e, zl |= e, l);
  }
  function Mf(e, t, l, n) {
    return vt(l, t) ? l : Dn.current !== null ? (e = tc(e, l, n), vt(e, t) || (ke = !0), e) : (tl & 42) === 0 || (tl & 1073741824) !== 0 && (me & 261930) === 0 ? (ke = !0, e.memoizedState = l) : (e = Md(), ie.lanes |= e, zl |= e, t);
  }
  function Df(e, t, l, n, a) {
    var i = X.p;
    X.p = i !== 0 && 8 > i ? i : 8;
    var f = Y.T, m = {};
    Y.T = m, ac(e, !1, t, l);
    try {
      var v = a(), C = Y.S;
      if (C !== null && C(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var U = Cy(
          v,
          n
        );
        wa(
          e,
          t,
          U,
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
      X.p = i, f !== null && m.types !== null && (f.types = m.types), Y.T = f;
    }
  }
  function Dy() {
  }
  function lc(e, t, l, n) {
    if (e.tag !== 5) throw Error(s(476));
    var a = Uf(e).queue;
    Df(
      e,
      a,
      t,
      fe,
      l === null ? Dy : function() {
        return jf(e), l(n);
      }
    );
  }
  function Uf(e) {
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
  function jf(e) {
    var t = Uf(e);
    t.next === null && (t = e.alternate.memoizedState), wa(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function nc() {
    return et(Va);
  }
  function Bf() {
    return Xe().memoizedState;
  }
  function Lf() {
    return Xe().memoizedState;
  }
  function Uy(e) {
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
  function jy(e, t, l) {
    var n = Rt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qu(e) ? qf(t, l) : (l = Er(e, t, l, n), l !== null && (dt(l, e, n), Yf(l, t, n)));
  }
  function Hf(e, t, l) {
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
    if (Qu(e)) qf(t, a);
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
        return dt(l, e, n), Yf(l, t, n), !0;
    }
    return !1;
  }
  function ac(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qu(e)) {
      if (t) throw Error(s(479));
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
  function qf(e, t) {
    Un = Lu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Yf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Vs(e, l);
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
    useEffect: Rf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Xu(
        4194308,
        4,
        _f.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Xu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Xu(4, 2, e, t);
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
      }, n.queue = e, e = e.dispatch = jy.bind(
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
      e = Wr(e);
      var t = e.queue, l = Hf.bind(null, ie, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = ut();
      return tc(l, e, t);
    },
    useTransition: function() {
      var e = Wr(!1);
      return e = Df.bind(
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
          throw Error(s(407));
        l = l();
      } else {
        if (l = t(), Oe === null)
          throw Error(s(349));
        (me & 127) !== 0 || cf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, Rf(of.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Bn(
        9,
        { destroy: void 0 },
        sf.bind(
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
        l = _y++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: nc,
    useFormState: bf,
    useActionState: bf,
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
      return t.queue = l, t = ac.bind(
        null,
        ie,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Jr,
    useCacheRefresh: function() {
      return ut().memoizedState = Uy.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((xe & 2) !== 0)
          throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, uc = {
    readContext: et,
    use: Yu,
    useCallback: Of,
    useContext: et,
    useEffect: Pr,
    useImperativeHandle: zf,
    useInsertionEffect: wf,
    useLayoutEffect: Cf,
    useMemo: Nf,
    useReducer: Gu,
    useRef: Tf,
    useState: function() {
      return Gu(ll);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = Xe();
      return Mf(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gu(ll)[0], t = Xe().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: rf,
    useId: Bf,
    useHostTransitionStatus: nc,
    useFormState: Sf,
    useActionState: Sf,
    useOptimistic: function(e, t) {
      var l = Xe();
      return hf(l, we, e, t);
    },
    useMemoCache: Jr,
    useCacheRefresh: Lf
  };
  uc.useEffectEvent = Af;
  var Xf = {
    readContext: et,
    use: Yu,
    useCallback: Of,
    useContext: et,
    useEffect: Pr,
    useImperativeHandle: zf,
    useInsertionEffect: wf,
    useLayoutEffect: Cf,
    useMemo: Nf,
    useReducer: Fr,
    useRef: Tf,
    useState: function() {
      return Fr(ll);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = Xe();
      return we === null ? tc(l, e, t) : Mf(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fr(ll)[0], t = Xe().memoizedState;
      return [
        typeof e == "boolean" ? e : Aa(e),
        t
      ];
    },
    useSyncExternalStore: rf,
    useId: Bf,
    useHostTransitionStatus: nc,
    useFormState: xf,
    useActionState: xf,
    useOptimistic: function(e, t) {
      var l = Xe();
      return we !== null ? hf(l, we, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Jr,
    useCacheRefresh: Lf
  };
  Xf.useEffectEvent = Af;
  function ic(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : D({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var rc = {
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
  function Vf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function Qf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && rc.enqueueReplaceState(t, t.state, null);
  }
  function ln(e, t) {
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
  function Zf(e) {
    xu(e);
  }
  function kf(e) {
    console.error(e);
  }
  function Kf(e) {
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
  function Jf(e, t, l) {
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
  function cc(e, t, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Zu(e, t);
    }, l;
  }
  function $f(e) {
    return e = Tl(e), e.tag = 3, e;
  }
  function Ff(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Jf(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Jf(t, l, n), typeof a != "function" && (Ol === null ? Ol = /* @__PURE__ */ new Set([this]) : Ol.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function By(e, t, l, n, a) {
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
            return Mt === null ? ni() : l.alternate === null && qe === 0 && (qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Dc(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Dc(e, n, a)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return Dc(e, n, a), ni(), !1;
    }
    if (ge)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Cr && (e = Error(s(422), { cause: n }), ga(_t(e, l)))) : (n !== Cr && (t = Error(s(423), {
        cause: n
      }), ga(
        _t(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = cc(
        e.stateNode,
        n,
        a
      ), Hr(e, a), qe !== 4 && (qe = 2)), !1;
    var i = Error(s(520), { cause: n });
    if (i = _t(i, l), ja === null ? ja = [i] : ja.push(i), qe !== 4 && (qe = 2), t === null) return !0;
    n = _t(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = cc(l.stateNode, n, e), Hr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ol === null || !Ol.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = $f(a), Ff(
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
  var sc = Error(s(461)), ke = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? Po(t, null, l, n) : en(
      t,
      e.child,
      l,
      n
    );
  }
  function Wf(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var m in n)
        m !== "ref" && (f[m] = n[m]);
    } else f = n;
    return Fl(t), n = Qr(
      e,
      t,
      l,
      f,
      i,
      a
    ), m = Zr(), e !== null && !ke ? (kr(e, t, a), nl(e, t, a)) : (ge && m && Ar(t), t.flags |= 1, tt(e, t, n, a), t.child);
  }
  function If(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !xr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Pf(
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
    if (i = e.child, !pc(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ha, l(f, n) && e.ref === t.ref)
        return nl(e, t, a);
    }
    return t.flags |= 1, e = Wt(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Pf(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (ke = !1, t.pendingProps = n = i, pc(e, a))
          (e.flags & 131072) !== 0 && (ke = !0);
        else
          return t.lanes = e.lanes, nl(e, t, a);
    }
    return oc(
      e,
      t,
      l,
      n,
      a
    );
  }
  function ed(e, t, l, n) {
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
        return td(
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
        ), i !== null ? lf(t, i) : Yr(), nf(t);
      else
        return n = t.lanes = 536870912, td(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Ou(t, i.cachePool), lf(t, i), wl(), t.memoizedState = null) : (e !== null && Ou(t, null), Yr(), wl());
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
  function td(e, t, l, n, a) {
    var i = Ur();
    return i = i === null ? null : { parent: Qe._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ou(t, null), Yr(), nf(t), e !== null && _n(e, t, n, !0), t.childLanes = a, null;
  }
  function ku(e, t) {
    return t = Ju(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ld(e, t, l) {
    return en(t, e.child, null, l), e = ku(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function Ly(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = ku(t, n), t.lanes = 536870912, _a(null, e);
        if (Xr(t), (e = Me) ? (e = mh(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Vt, overflow: Qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Ho(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return t.lanes = 536870912, null;
      }
      return ku(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Xr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = ld(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (ke || _n(e, t, l, !1), a = (l & e.childLanes) !== 0, ke || a) {
        if (n = Oe, n !== null && (f = Qs(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, kl(e, f), dt(n, e, f), sc;
        ni(), t = ld(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Me = Dt(f.nextSibling), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && Go(t, e), t = ku(t, n), t.flags |= 4096;
      return t;
    }
    return e = Wt(e.child, {
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
        throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function oc(e, t, l, n, a) {
    return Fl(t), l = Qr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Zr(), e !== null && !ke ? (kr(e, t, a), nl(e, t, a)) : (ge && n && Ar(t), t.flags |= 1, tt(e, t, l, a), t.child);
  }
  function nd(e, t, l, n, a, i) {
    return Fl(t), t.updateQueue = null, l = uf(
      t,
      n,
      l,
      a
    ), af(e), n = Zr(), e !== null && !ke ? (kr(e, t, i), nl(e, t, i)) : (ge && n && Ar(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function ad(e, t, l, n, a) {
    if (Fl(t), t.stateNode === null) {
      var i = Rn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Br(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : Rn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ic(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && rc.enqueueReplaceState(i, i.state, null), Ta(t, n, i, a), xa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, v = ln(l, m);
      i.props = v;
      var C = i.context, U = l.contextType;
      f = Rn, typeof U == "object" && U !== null && (f = et(U));
      var H = l.getDerivedStateFromProps;
      U = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || C !== f) && Qf(
        t,
        i,
        n,
        f
      ), xl = !1;
      var z = t.memoizedState;
      i.state = z, Ta(t, n, i, a), xa(), C = t.memoizedState, m || z !== C || xl ? (typeof H == "function" && (ic(
        t,
        l,
        H,
        n
      ), C = t.memoizedState), (v = xl || Vf(
        t,
        l,
        v,
        n,
        z,
        C,
        f
      )) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Lr(e, t), f = t.memoizedProps, U = ln(l, f), i.props = U, H = t.pendingProps, z = i.context, C = l.contextType, v = Rn, typeof C == "object" && C !== null && (v = et(C)), m = l.getDerivedStateFromProps, (C = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== H || z !== v) && Qf(
        t,
        i,
        n,
        v
      ), xl = !1, z = t.memoizedState, i.state = z, Ta(t, n, i, a), xa();
      var M = t.memoizedState;
      f !== H || z !== M || xl || e !== null && e.dependencies !== null && _u(e.dependencies) ? (typeof m == "function" && (ic(
        t,
        l,
        m,
        n
      ), M = t.memoizedState), (U = xl || Vf(
        t,
        l,
        U,
        n,
        z,
        M,
        v
      ) || e !== null && e.dependencies !== null && _u(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, M, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        M,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = v, n = U) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), n = !1);
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
  function ud(e, t, l, n) {
    return Jl(), t.flags |= 256, tt(e, t, l, n), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(e) {
    return { baseLanes: e, cachePool: Ko() };
  }
  function hc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Tt), e;
  }
  function id(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Al(t) : wl(), (e = Me) ? (e = mh(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Vt, overflow: Qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Ho(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return $c(e) ? t.lanes = 32 : t.lanes = 536870912, null;
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
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = dc(l), n.childLanes = hc(
        e,
        f,
        l
      ), t.memoizedState = fc, _a(null, n)) : (Al(t), mc(t, m));
    }
    var v = e.memoizedState;
    if (v !== null && (m = v.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (Al(t), t.flags &= -257, t = yc(
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
        ), n = t.child, n.memoizedState = dc(l), n.childLanes = hc(
          e,
          f,
          l
        ), t.memoizedState = fc, t = _a(null, n));
      else if (Al(t), $c(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(s(419)), n.stack = "", n.digest = f, ga({ value: n, source: null, stack: null }), t = yc(
          e,
          t,
          l
        );
      } else if (ke || _n(e, t, l, !1), f = (l & e.childLanes) !== 0, ke || f) {
        if (f = Oe, f !== null && (n = Qs(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, kl(e, n), dt(f, e, n), sc;
        Jc(m) || ni(), t = yc(
          e,
          t,
          l
        );
      } else
        Jc(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Me = Dt(
          m.nextSibling
        ), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && Go(t, e), t = mc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (wl(), m = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = Wt(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? m = Wt(
      C,
      m
    ) : (m = Kl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, _a(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = dc(l) : (a = m.cachePool, a !== null ? (v = Qe._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Ko(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = hc(
      e,
      f,
      l
    ), t.memoizedState = fc, _a(e.child, n)) : (Al(t), l = e.child, e = l.sibling, l = Wt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function mc(e, t) {
    return t = Ju(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ju(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function yc(e, t, l) {
    return en(t, e.child, null, l), e = mc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function rd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Or(e.return, t, l);
  }
  function gc(e, t, l, n, a, i) {
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
    var f = Ge.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Z(Ge, f), tt(e, t, n, l), n = ge ? ya : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && rd(e, l, t);
        else if (e.tag === 19)
          rd(e, l, t);
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
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), gc(
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
        gc(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        gc(
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
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, l = Wt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Wt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function pc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _u(e)));
  }
  function Hy(e, t, l) {
    switch (t.tag) {
      case 3:
        Be(t, t.stateNode.containerInfo), El(t, Qe, e.memoizedState.cache), Jl();
        break;
      case 27:
      case 5:
        Gt(t);
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
          return t.flags |= 128, Xr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Al(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? id(e, t, l) : (Al(t), e = nl(
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
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Z(Ge, Ge.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, ed(
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
  function sd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ke = !0;
      else {
        if (!pc(e, l) && (t.flags & 128) === 0)
          return ke = !1, Hy(
            e,
            t,
            l
          );
        ke = (e.flags & 131072) !== 0;
      }
    else
      ke = !1, ge && (t.flags & 1048576) !== 0 && Yo(t, ya, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Il(t.elementType), t.type = e, typeof e == "function")
            xr(e) ? (n = ln(e, n), t.tag = 1, t = ad(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = oc(
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
                t.tag = 11, t = Wf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === I) {
                t.tag = 14, t = If(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = Ve(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return oc(
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
        ), ad(
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
          ), e === null) throw Error(s(387));
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
              t = ud(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = _t(
                Error(s(424)),
                t
              ), ga(a), t = ud(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Dt(e.firstChild), Pe = t, ge = !0, bl = null, Nt = !0, l = Po(
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
        return Ku(e, t), e === null ? (l = Sh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = oi(
          oe.current
        ).createElement(l), n[Ie] = t, n[it] = e, lt(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = Sh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Gt(t), e === null && ge && (n = t.stateNode = ph(
          t.type,
          t.pendingProps,
          oe.current
        ), Pe = t, Nt = !0, a = Me, Ul(t.type) ? (Fc = a, Me = Dt(n.firstChild)) : Me = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ku(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = Me) && (n = m1(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Pe = t, Me = Dt(n.firstChild), Nt = !1, a = !0) : a = !1), a || Sl(t)), Gt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Zc(a, i) ? n = null : f !== null && Zc(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Qr(
          e,
          t,
          zy,
          null,
          null,
          l
        ), Va._currentValue = a), Ku(e, t), tt(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = Me) && (l = y1(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Pe = t, Me = null, e = !0) : e = !1), e || Sl(t)), null;
      case 13:
        return id(e, t, l);
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
        return Wf(
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
        return a = t.type._context, n = t.pendingProps.children, Fl(t), a = et(a), n = n(a), t.flags |= 1, tt(e, t, n, l), t.child;
      case 14:
        return If(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Pf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return cd(e, t, l);
      case 31:
        return Ly(e, t, l);
      case 22:
        return ed(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Fl(t), n = et(Qe), e === null ? (a = Ur(), a === null && (a = Oe, i = Mr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Br(t), El(t, Qe, a)) : ((e.lanes & l) !== 0 && (Lr(e, t), Ta(t, null, null, l), xa()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), El(t, Qe, n)) : (n = i.cache, El(t, Qe, n), n !== a.cache && Nr(
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
    throw Error(s(156, t.tag));
  }
  function al(e) {
    e.flags |= 4;
  }
  function vc(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Bd()) e.flags |= 8192;
        else
          throw Pl = Mu, jr;
    } else e.flags &= -16777217;
  }
  function od(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ah(t))
      if (Bd()) e.flags |= 8192;
      else
        throw Pl = Mu, jr;
  }
  function $u(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gs() : 536870912, e.lanes |= t, Yn |= t);
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
  function qy(e, t, l) {
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
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), el(Qe), Ae(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Cn(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _r())), De(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (al(t), i !== null ? (De(t), od(t, i)) : (De(t), vc(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (al(t), De(t), od(t, i)) : (De(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && al(t), De(t), vc(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (Xt(t), l = oe.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return De(t), null;
          }
          e = $.current, Cn(t) ? Xo(t) : (e = ph(a, n, l), t.stateNode = e, al(t));
        }
        return De(t), null;
      case 5:
        if (Xt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return De(t), null;
          }
          if (i = $.current, Cn(t))
            Xo(t);
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
        return De(t), vc(
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
            throw Error(s(166));
          if (e = oe.current, Cn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Pe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || ih(e.nodeValue, l)), e || Sl(t, !0);
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
              if (!n) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Ie] = t;
            } else
              Jl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            De(t), e = !1;
          } else
            l = _r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return De(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Cn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
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
        return Ae(), e === null && Yc(t.stateNode.containerInfo), De(t), null;
      case 10:
        return el(t.type), De(t), null;
      case 19:
        if (B(Ge), n = t.memoizedState, n === null) return De(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) za(n, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, za(n, !1), e = i.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Lo(l, e), l = l.sibling;
                  return Z(
                    Ge,
                    Ge.current & 1 | 2
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
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Ge.current, Z(
          Ge,
          a ? l & 1 | 2 : l & 1
        ), ge && It(t, n.treeForkCount), e) : (De(t), null);
      case 22:
      case 23:
        return Et(t), Gr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (De(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : De(t), l = t.updateQueue, l !== null && $u(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && B(Wl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), el(Qe), De(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Yy(e, t) {
    switch (wr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return el(Qe), Ae(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Xt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(s(340));
          Jl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Jl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return B(Ge), null;
      case 4:
        return Ae(), null;
      case 10:
        return el(t.type), null;
      case 22:
      case 23:
        return Et(t), Gr(), e !== null && B(Wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return el(Qe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function fd(e, t) {
    switch (wr(t), t.tag) {
      case 3:
        el(Qe), Ae();
        break;
      case 26:
      case 27:
      case 5:
        Xt(t);
        break;
      case 4:
        Ae();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        B(Ge);
        break;
      case 10:
        el(t.type);
        break;
      case 22:
      case 23:
        Et(t), Gr(), e !== null && B(Wl);
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
              } catch (U) {
                Re(
                  a,
                  v,
                  U
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (U) {
      Re(t, t.return, U);
    }
  }
  function dd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        tf(t, l);
      } catch (n) {
        Re(e, e.return, n);
      }
    }
  }
  function hd(e, t, l) {
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
  function md(e) {
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
  function bc(e, t, l) {
    try {
      var n = e.stateNode;
      c1(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function yd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || yd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ec(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = $t));
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Ec(e, t, l), e = e.sibling; e !== null; )
        Ec(e, t, l), e = e.sibling;
  }
  function Fu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Fu(e, t, l), e = e.sibling; e !== null; )
        Fu(e, t, l), e = e.sibling;
  }
  function gd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      lt(t, n, l), t[Ie] = e, t[it] = l;
    } catch (i) {
      Re(e, e.return, i);
    }
  }
  var ul = !1, Ke = !1, xc = !1, pd = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function Gy(e, t) {
    if (e = e.containerInfo, Vc = pi, e = _o(e), yr(e)) {
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
            var f = 0, m = -1, v = -1, C = 0, U = 0, H = e, z = null;
            t: for (; ; ) {
              for (var M; H !== l || a !== 0 && H.nodeType !== 3 || (m = f + a), H !== i || n !== 0 && H.nodeType !== 3 || (v = f + n), H.nodeType === 3 && (f += H.nodeValue.length), (M = H.firstChild) !== null; )
                z = H, H = M;
              for (; ; ) {
                if (H === e) break t;
                if (z === l && ++C === a && (m = f), z === i && ++U === n && (v = f), (M = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = M;
            }
            l = m === -1 || v === -1 ? null : { start: m, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Qc = { focusedElem: e, selectionRange: l }, pi = !1, Fe = t; Fe !== null; )
      if (t = Fe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Fe = e;
      else
        for (; Fe !== null; ) {
          switch (t = Fe, i = t.alternate, e = t.flags, t.tag) {
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
                  Kc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Kc(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, Fe = e;
            break;
          }
          Fe = t.return;
        }
  }
  function vd(e, t, l) {
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
        n & 64 && dd(l), n & 512 && Na(l, l.return);
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
            tf(e, t);
          } catch (f) {
            Re(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && gd(l);
      case 26:
      case 5:
        rl(e, l), t === null && n & 4 && md(l), n & 512 && Na(l, l.return);
        break;
      case 12:
        rl(e, l);
        break;
      case 31:
        rl(e, l), n & 4 && Ed(e, l);
        break;
      case 13:
        rl(e, l), n & 4 && xd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Fy.bind(
          null,
          l
        ), g1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ul, !n) {
          t = t !== null && t.memoizedState !== null || Ke, a = ul;
          var i = Ke;
          ul = n, (Ke = t) && !i ? cl(
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
  function bd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, bd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, ct = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; )
      Sd(e, t, l), l = l.sibling;
  }
  function Sd(e, t, l) {
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
        var n = je, a = ct;
        Ul(l.type) && (je = l.stateNode, ct = !1), il(
          e,
          t,
          l
        ), Ya(l.stateNode), je = n, ct = a;
        break;
      case 5:
        Ke || Zt(l, t);
      case 6:
        if (n = je, a = ct, je = null, il(
          e,
          t,
          l
        ), je = n, ct = a, je !== null)
          if (ct)
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
        je !== null && (ct ? (e = je, dh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Jn(e)) : dh(je, l.stateNode));
        break;
      case 4:
        n = je, a = ct, je = l.stateNode.containerInfo, ct = !0, il(
          e,
          t,
          l
        ), je = n, ct = a;
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
        Ke || (Zt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && hd(
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
  function Ed(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Jn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
    }
  }
  function xd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Jn(e);
      } catch (l) {
        Re(t, t.return, l);
      }
  }
  function Xy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new pd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new pd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Wu(e, t) {
    var l = Xy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Wy.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ul(m.type)) {
                je = m.stateNode, ct = !1;
                break e;
              }
              break;
            case 5:
              je = m.stateNode, ct = !1;
              break e;
            case 3:
            case 4:
              je = m.stateNode.containerInfo, ct = !0;
              break e;
          }
          m = m.return;
        }
        if (je === null) throw Error(s(160));
        Sd(i, f, a), je = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Td(t, e), t = t.sibling;
  }
  var Lt = null;
  function Td(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, e), ot(e), n & 4 && (Cl(3, e, e.return), Oa(3, e), Cl(5, e, e.return));
        break;
      case 1:
        st(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), n & 64 && ul && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Lt;
        if (st(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), n & 4) {
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
                      var f = Th(
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
                      if (f = Th(
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
                      throw Error(s(468, n));
                  }
                  i[Ie] = e, $e(i), n = i;
                }
                e.stateNode = n;
              } else
                Rh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = xh(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Rh(
              a,
              e.type,
              e.stateNode
            ) : xh(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && bc(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        st(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), l !== null && n & 4 && bc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ot(e), n & 512 && (Ke || l === null || Zt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            pn(a, "");
          } catch (J) {
            Re(e, e.return, J);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, bc(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (xc = !0);
        break;
      case 6:
        if (st(t, e), ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (J) {
            Re(e, e.return, J);
          }
        }
        break;
      case 3:
        if (hi = null, a = Lt, Lt = fi(t.containerInfo), st(t, e), Lt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Jn(t.containerInfo);
          } catch (J) {
            Re(e, e.return, J);
          }
        xc && (xc = !1, Rd(e));
        break;
      case 4:
        n = Lt, Lt = fi(
          e.stateNode.containerInfo
        ), st(t, e), ot(e), Lt = n;
        break;
      case 12:
        st(t, e), ot(e);
        break;
      case 31:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 13:
        st(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Pu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = ul, U = Ke;
        if (ul = C || a, Ke = U || v, st(t, e), Ke = U, ul = C, ot(e), n & 8192)
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
                  a ? hh(M, !0) : hh(v.stateNode, !1);
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
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Wu(e, l))));
        break;
      case 19:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
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
          if (yd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Sc(e);
            Fu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (pn(f, ""), l.flags &= -33);
            var m = Sc(e);
            Fu(e, m, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, C = Sc(e);
            Ec(
              e,
              C,
              v
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (U) {
        Re(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Rd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Rd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function rl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        vd(e, t.alternate, t), t = t.sibling;
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
          typeof l.componentWillUnmount == "function" && hd(
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
  function cl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          cl(
            a,
            i,
            l
          ), Oa(4, i);
          break;
        case 1:
          if (cl(
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
                  ef(v[a], m);
            } catch (C) {
              Re(n, n.return, C);
            }
          }
          l && f & 64 && dd(i), Na(i, i.return);
          break;
        case 27:
          gd(i);
        case 26:
        case 5:
          cl(
            a,
            i,
            l
          ), l && n === null && f & 4 && md(i), Na(i, i.return);
          break;
        case 12:
          cl(
            a,
            i,
            l
          );
          break;
        case 31:
          cl(
            a,
            i,
            l
          ), l && f & 4 && Ed(a, i);
          break;
        case 13:
          cl(
            a,
            i,
            l
          ), l && f & 4 && xd(a, i);
          break;
        case 22:
          i.memoizedState === null && cl(
            a,
            i,
            l
          ), Na(i, i.return);
          break;
        case 30:
          break;
        default:
          cl(
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
  function Rc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function Ht(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ad(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function Ad(e, t, l, n) {
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
        )), a & 2048 && Tc(f, t);
        break;
      case 24:
        Ht(
          e,
          t,
          l,
          n
        ), a & 2048 && Rc(t.alternate, t);
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
          var U = f.stateNode;
          f.memoizedState !== null ? U._visibility & 2 ? Ln(
            i,
            f,
            m,
            v,
            a
          ) : Ma(
            i,
            f
          ) : (U._visibility |= 2, Ln(
            i,
            f,
            m,
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
            m,
            v,
            a
          ), a && C & 2048 && Rc(f.alternate, f);
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
            Ma(l, n), a & 2048 && Tc(
              n.alternate,
              n
            );
            break;
          case 24:
            Ma(l, n), a & 2048 && Rc(n.alternate, n);
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
        wd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function wd(e, t, l) {
    switch (e.tag) {
      case 26:
        Hn(
          e,
          t,
          l
        ), e.flags & Da && e.memoizedState !== null && _1(
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
  function Cd(e) {
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
          Fe = n, zd(
            n,
            e
          );
        }
      Cd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        _d(e), e = e.sibling;
  }
  function _d(e) {
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
          Fe = n, zd(
            n,
            e
          );
        }
      Cd(e);
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
  function zd(e, t) {
    for (; Fe !== null; ) {
      var l = Fe;
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
      if (n = l.child, n !== null) n.return = l, Fe = n;
      else
        e: for (l = e; Fe !== null; ) {
          n = Fe;
          var a = n.sibling, i = n.return;
          if (bd(n), n === l) {
            Fe = null;
            break e;
          }
          if (a !== null) {
            a.return = i, Fe = a;
            break e;
          }
          Fe = i;
        }
    }
  }
  var Vy = {
    getCacheForType: function(e) {
      var t = et(Qe), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return et(Qe).controller.signal;
    }
  }, Qy = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, Oe = null, de = null, me = 0, Te = 0, xt = null, _l = !1, qn = !1, Ac = !1, sl = 0, qe = 0, zl = 0, an = 0, wc = 0, Tt = 0, Yn = 0, ja = null, ft = null, Cc = !1, Pu = 0, Od = 0, ei = 1 / 0, ti = null, Ol = null, Je = 0, Nl = null, Gn = null, ol = 0, _c = 0, zc = null, Nd = null, Ba = 0, Oc = null;
  function Rt() {
    return (xe & 2) !== 0 && me !== 0 ? me & -me : Y.T !== null ? Bc() : Zs();
  }
  function Md() {
    if (Tt === 0)
      if ((me & 536870912) === 0 || ge) {
        var e = su;
        su <<= 1, (su & 3932160) === 0 && (su = 262144), Tt = e;
      } else Tt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), Tt;
  }
  function dt(e, t, l) {
    (e === Oe && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (Xn(e, 0), Ml(
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
  function Dd(e, t, l) {
    if ((xe & 6) !== 0) throw Error(s(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || la(e, t), a = n ? Ky(e, t) : Mc(e, t, !0), i = n;
    do {
      if (a === 0) {
        qn && !n && Ml(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Zy(l)) {
          a = Mc(e, t, !1), i = !1;
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
              if (v && (Xn(m, f).flags |= 256), f = Mc(
                m,
                f,
                !1
              ), f !== 2) {
                if (Ac && !v) {
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
          Xn(e, 0), Ml(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = a, i) {
            case 0:
            case 1:
              throw Error(s(345));
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
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (a = Pu + 300 - yt(), 10 < a)) {
            if (Ml(
              n,
              t,
              Tt,
              !_l
            ), fu(n, 0, !0) !== 0) break e;
            ol = t, n.timeoutHandle = oh(
              Ud.bind(
                null,
                n,
                l,
                ft,
                ti,
                Cc,
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
          Ud(
            n,
            l,
            ft,
            ti,
            Cc,
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
  function Ud(e, t, l, n, a, i, f, m, v, C, U, H, z, M) {
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
      }, wd(
        t,
        i,
        H
      );
      var J = (i & 62914560) === i ? Pu - yt() : (i & 4194048) === i ? Od - yt() : 0;
      if (J = z1(
        H,
        J
      ), J !== null) {
        ol = i, e.cancelPendingCommit = J(
          Xd.bind(
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
            U,
            H,
            null,
            z,
            M
          )
        ), Ml(e, i, f, !C);
        return;
      }
    }
    Xd(
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
  function Zy(e) {
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
    t &= ~wc, t &= ~an, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Xs(e, l, t);
  }
  function li() {
    return (xe & 6) === 0 ? (La(0), !1) : !0;
  }
  function Nc() {
    if (de !== null) {
      if (Te === 0)
        var e = de.return;
      else
        e = de, Pt = $l = null, Kr(e), Mn = null, ba = 0, e = de;
      for (; e !== null; )
        fd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Xn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, f1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ol = 0, Nc(), Oe = e, de = l = Wt(e.current, null), me = t, Te = 0, xt = null, _l = !1, qn = la(e, t), Ac = !1, Yn = Tt = wc = an = zl = qe = 0, ft = ja = null, Cc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return sl = t, Tu(), l;
  }
  function jd(e, t) {
    ie = null, Y.H = Ca, t === Nn || t === Nu ? (t = Fo(), Te = 3) : t === jr ? (t = Fo(), Te = 4) : Te = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, de === null && (qe = 1, Zu(
      e,
      _t(t, e.current)
    ));
  }
  function Bd() {
    var e = St.current;
    return e === null ? !0 : (me & 4194048) === me ? Mt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Mt : !1;
  }
  function Ld() {
    var e = Y.H;
    return Y.H = Ca, e === null ? Ca : e;
  }
  function Hd() {
    var e = Y.A;
    return Y.A = Vy, e;
  }
  function ni() {
    qe = 4, _l || (me & 4194048) !== me && St.current !== null || (qn = !0), (zl & 134217727) === 0 && (an & 134217727) === 0 || Oe === null || Ml(
      Oe,
      me,
      Tt,
      !1
    );
  }
  function Mc(e, t, l) {
    var n = xe;
    xe |= 2;
    var a = Ld(), i = Hd();
    (Oe !== e || me !== t) && (ti = null, Xn(e, t)), t = !1;
    var f = qe;
    e: do
      try {
        if (Te !== 0 && de !== null) {
          var m = de, v = xt;
          switch (Te) {
            case 8:
              Nc(), f = 6;
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
        ky(), f = qe;
        break;
      } catch (U) {
        jd(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Pt = $l = null, xe = n, Y.H = a, Y.A = i, de === null && (Oe = null, me = 0, Tu()), f;
  }
  function ky() {
    for (; de !== null; ) qd(de);
  }
  function Ky(e, t) {
    var l = xe;
    xe |= 2;
    var n = Ld(), a = Hd();
    Oe !== e || me !== t ? (ti = null, ei = yt() + 500, Xn(e, t)) : qn = la(
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
              if (Jo(i)) {
                Te = 0, xt = null, Yd(t);
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
              Jo(i) ? (Te = 0, xt = null, Yd(t)) : (Te = 0, xt = null, Vn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var m = de;
                  if (f ? Ah(f) : m.stateNode.complete) {
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
              Nc(), qe = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Jy();
        break;
      } catch (U) {
        jd(e, U);
      }
    while (!0);
    return Pt = $l = null, Y.H = n, Y.A = a, xe = l, de !== null ? 0 : (Oe = null, me = 0, Tu(), qe);
  }
  function Jy() {
    for (; de !== null && !p0(); )
      qd(de);
  }
  function qd(e) {
    var t = sd(e.alternate, e, sl);
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : de = t;
  }
  function Yd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = nd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          me
        );
        break;
      case 11:
        t = nd(
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
        fd(l, t), t = de = Lo(t, sl), t = sd(l, t, sl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : de = t;
  }
  function Vn(e, t, l, n) {
    Pt = $l = null, Kr(t), Mn = null, ba = 0;
    var a = t.return;
    try {
      if (By(
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
      var l = qy(
        t.alternate,
        t,
        sl
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
      var l = Yy(e.alternate, e);
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
  function Xd(e, t, l, n, a, i, f, m, v) {
    e.cancelPendingCommit = null;
    do
      ui();
    while (Je !== 0);
    if ((xe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (i = t.lanes | t.childLanes, i |= Sr, C0(
        e,
        l,
        i,
        f,
        m,
        v
      ), e === Oe && (de = Oe = null, me = 0), Gn = t, Nl = e, ol = l, _c = i, zc = a, Nd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Iy(ru, function() {
        return Kd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = Y.T, Y.T = null, a = X.p, X.p = 2, f = xe, xe |= 4;
        try {
          Gy(e, t, l);
        } finally {
          xe = f, X.p = a, Y.T = n;
        }
      }
      Je = 1, Vd(), Qd(), Zd();
    }
  }
  function Vd() {
    if (Je === 1) {
      Je = 0;
      var e = Nl, t = Gn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = Y.T, Y.T = null;
        var n = X.p;
        X.p = 2;
        var a = xe;
        xe |= 4;
        try {
          Td(t, e);
          var i = Qc, f = _o(e.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (f !== m && m && m.ownerDocument && Co(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && yr(m)) {
              var C = v.start, U = v.end;
              if (U === void 0 && (U = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  U,
                  m.value.length
                );
              else {
                var H = m.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), J = m.textContent.length, P = Math.min(v.start, J), _e = v.end === void 0 ? P : Math.min(v.end, J);
                  !M.extend && P > _e && (f = _e, _e = P, P = f);
                  var R = wo(
                    m,
                    P
                  ), E = wo(
                    m,
                    _e
                  );
                  if (R && E && (M.rangeCount !== 1 || M.anchorNode !== R.node || M.anchorOffset !== R.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var w = H.createRange();
                    w.setStart(R.node, R.offset), M.removeAllRanges(), P > _e ? (M.addRange(w), M.extend(E.node, E.offset)) : (w.setEnd(E.node, E.offset), M.addRange(w));
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
          pi = !!Vc, Qc = Vc = null;
        } finally {
          xe = a, X.p = n, Y.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function Qd() {
    if (Je === 2) {
      Je = 0;
      var e = Nl, t = Gn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = Y.T, Y.T = null;
        var n = X.p;
        X.p = 2;
        var a = xe;
        xe |= 4;
        try {
          vd(e, t.alternate, t);
        } finally {
          xe = a, X.p = n, Y.T = l;
        }
      }
      Je = 3;
    }
  }
  function Zd() {
    if (Je === 4 || Je === 3) {
      Je = 0, v0();
      var e = Nl, t = Gn, l = ol, n = Nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Gn = Nl = null, kd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Ol = null), Fi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
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
        t = Y.T, a = X.p, X.p = 2, Y.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var m = n[f];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          Y.T = t, X.p = a;
        }
      }
      (ol & 3) !== 0 && ui(), kt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Oc ? Ba++ : (Ba = 0, Oc = e) : Ba = 0, La(0);
    }
  }
  function kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ui() {
    return Vd(), Qd(), Zd(), Kd();
  }
  function Kd() {
    if (Je !== 5) return !1;
    var e = Nl, t = _c;
    _c = 0;
    var l = Fi(ol), n = Y.T, a = X.p;
    try {
      X.p = 32 > l ? 32 : l, Y.T = null, l = zc, zc = null;
      var i = Nl, f = ol;
      if (Je = 0, Gn = Nl = null, ol = 0, (xe & 6) !== 0) throw Error(s(331));
      var m = xe;
      if (xe |= 4, _d(i.current), Ad(
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
      X.p = a, Y.T = n, kd(e, t);
    }
  }
  function Jd(e, t, l) {
    t = _t(l, t), t = cc(e.stateNode, t, 2), e = Rl(e, t, 2), e !== null && (na(e, 2), kt(e));
  }
  function Re(e, t, l) {
    if (e.tag === 3)
      Jd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ol === null || !Ol.has(n))) {
            e = _t(l, e), l = $f(2), n = Rl(t, l, 2), n !== null && (Ff(
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
  function Dc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Qy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Ac = !0, a.add(l), e = $y.bind(null, e, t, l), t.then(e, e));
  }
  function $y(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (me & l) === l && (qe === 4 || qe === 3 && (me & 62914560) === me && 300 > yt() - Pu ? (xe & 2) === 0 && Xn(e, 0) : wc |= l, Yn === me && (Yn = 0)), kt(e);
  }
  function $d(e, t) {
    t === 0 && (t = Gs()), e = kl(e, t), e !== null && (na(e, t), kt(e));
  }
  function Fy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), $d(e, l);
  }
  function Wy(e, t) {
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
        throw Error(s(314));
    }
    n !== null && n.delete(t), $d(e, l);
  }
  function Iy(e, t) {
    return ki(e, t);
  }
  var ii = null, Qn = null, Uc = !1, ri = !1, jc = !1, Dl = 0;
  function kt(e) {
    e !== Qn && e.next === null && (Qn === null ? ii = Qn = e : Qn = Qn.next = e), ri = !0, Uc || (Uc = !0, e1());
  }
  function La(e, t) {
    if (!jc && ri) {
      jc = !0;
      do
        for (var l = !1, n = ii; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Pd(n, i));
          } else
            i = me, i = fu(
              n,
              n === Oe ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || la(n, i) || (l = !0, Pd(n, i));
          n = n.next;
        }
      while (l);
      jc = !1;
    }
  }
  function Py() {
    Fd();
  }
  function Fd() {
    ri = Uc = !1;
    var e = 0;
    Dl !== 0 && o1() && (e = Dl);
    for (var t = yt(), l = null, n = ii; n !== null; ) {
      var a = n.next, i = Wd(n, t);
      i === 0 ? (n.next = null, l === null ? ii = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ri = !0)), n = a;
    }
    Je !== 0 && Je !== 5 || La(e), Dl !== 0 && (Dl = 0);
  }
  function Wd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, v = a[f];
      v === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = w0(m, t)) : v <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = Oe, l = me, l = fu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ki(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || la(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ki(n), Fi(l)) {
        case 2:
        case 8:
          l = qs;
          break;
        case 32:
          l = ru;
          break;
        case 268435456:
          l = Ys;
          break;
        default:
          l = ru;
      }
      return n = Id.bind(null, e), l = ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ki(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Id(e, t) {
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
    ), n === 0 ? null : (Dd(e, n, t), Wd(e, yt()), e.callbackNode != null && e.callbackNode === l ? Id.bind(null, e) : null);
  }
  function Pd(e, t) {
    if (ui()) return null;
    Dd(e, t, !0);
  }
  function e1() {
    d1(function() {
      (xe & 6) !== 0 ? ki(
        Hs,
        Py
      ) : Fd();
    });
  }
  function Bc() {
    if (Dl === 0) {
      var e = zn;
      e === 0 && (e = cu, cu <<= 1, (cu & 261888) === 0 && (cu = 256)), Dl = e;
    }
    return Dl;
  }
  function eh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
  }
  function th(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function t1(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = eh(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? eh(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
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
                  var v = f ? th(a, f) : new FormData(a);
                  lc(
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
                typeof i == "function" && (m.preventDefault(), v = f ? th(a, f) : new FormData(a), lc(
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
  for (var Lc = 0; Lc < br.length; Lc++) {
    var Hc = br[Lc], l1 = Hc.toLowerCase(), n1 = Hc[0].toUpperCase() + Hc.slice(1);
    Bt(
      l1,
      "on" + n1
    );
  }
  Bt(No, "onAnimationEnd"), Bt(Mo, "onAnimationIteration"), Bt(Do, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(by, "onTransitionRun"), Bt(Sy, "onTransitionStart"), Bt(Ey, "onTransitionCancel"), Bt(Uo, "onTransitionEnd"), yn("onMouseEnter", ["mouseout", "mouseover"]), yn("onMouseLeave", ["mouseout", "mouseover"]), yn("onPointerEnter", ["pointerout", "pointerover"]), yn("onPointerLeave", ["pointerout", "pointerover"]), Xl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Xl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Xl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Xl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Xl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Xl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ha = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), a1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha)
  );
  function lh(e, t) {
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
            } catch (U) {
              xu(U);
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
            } catch (U) {
              xu(U);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function he(e, t) {
    var l = t[Wi];
    l === void 0 && (l = t[Wi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (nh(t, e, 2, !1), l.add(n));
  }
  function qc(e, t, l) {
    var n = 0;
    t && (n |= 4), nh(
      l,
      e,
      n,
      t
    );
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(e) {
    if (!e[ci]) {
      e[ci] = !0, Js.forEach(function(l) {
        l !== "selectionchange" && (a1.has(l) || qc(l, !1, e), qc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ci] || (t[ci] = !0, qc("selectionchange", !1, t));
    }
  }
  function nh(e, t, l, n) {
    switch (Mh(t)) {
      case 2:
        var a = M1;
        break;
      case 8:
        a = D1;
        break;
      default:
        a = ts;
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
  function Gc(e, t, l, n, a) {
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
    io(function() {
      var C = i, U = ar(l), H = [];
      e: {
        var z = jo.get(e);
        if (z !== void 0) {
          var M = bu, J = e;
          switch (e) {
            case "keypress":
              if (pu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = W0;
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
              M = so;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = q0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ey;
              break;
            case No:
            case Mo:
            case Do:
              M = X0;
              break;
            case Uo:
              M = ly;
              break;
            case "scroll":
            case "scrollend":
              M = L0;
              break;
            case "wheel":
              M = ay;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Q0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = fo;
              break;
            case "toggle":
            case "beforetoggle":
              M = iy;
          }
          var P = (t & 4) !== 0, _e = !P && (e === "scroll" || e === "scrollend"), R = P ? z !== null ? z + "Capture" : null : z;
          P = [];
          for (var E = C, w; E !== null; ) {
            var L = E;
            if (w = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || w === null || R === null || (L = ia(E, R), L != null && P.push(
              qa(E, L, w)
            )), _e) break;
            E = E.return;
          }
          0 < P.length && (z = new M(
            z,
            J,
            null,
            l,
            U
          ), H.push({ event: z, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== nr && (J = l.relatedTarget || l.fromElement) && (dn(J) || J[fn]))
            break e;
          if ((M || z) && (z = U.window === U ? U : (z = U.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = C, J = J ? dn(J) : null, J !== null && (_e = h(J), P = J.tag, J !== _e || P !== 5 && P !== 27 && P !== 6) && (J = null)) : (M = null, J = C), M !== J)) {
            if (P = so, L = "onMouseLeave", R = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (P = fo, L = "onPointerLeave", R = "onPointerEnter", E = "pointer"), _e = M == null ? z : ua(M), w = J == null ? z : ua(J), z = new P(
              L,
              E + "leave",
              M,
              l,
              U
            ), z.target = _e, z.relatedTarget = w, L = null, dn(U) === C && (P = new P(
              R,
              E + "enter",
              J,
              l,
              U
            ), P.target = w, P.relatedTarget = _e, L = P), _e = L, M && J)
              t: {
                for (P = u1, R = M, E = J, w = 0, L = R; L; L = P(L))
                  w++;
                L = 0;
                for (var W = E; W; W = P(W))
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
            M !== null && ah(
              H,
              z,
              M,
              P,
              !1
            ), J !== null && _e !== null && ah(
              H,
              _e,
              J,
              P,
              !0
            );
          }
        }
        e: {
          if (z = C ? ua(C) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var ve = So;
          else if (vo(z))
            if (Eo)
              ve = gy;
            else {
              ve = my;
              var F = hy;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && lr(C.elementType) && (ve = So) : ve = yy;
          if (ve && (ve = ve(e, C))) {
            bo(
              H,
              ve,
              l,
              U
            );
            break e;
          }
          F && F(e, z, C), e === "focusout" && C && z.type === "number" && C.memoizedProps.value != null && tr(z, "number", z.value);
        }
        switch (F = C ? ua(C) : window, e) {
          case "focusin":
            (vo(F) || F.contentEditable === "true") && (En = F, gr = C, ma = null);
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
            pr = !1, zo(H, l, U);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            zo(H, l, U);
        }
        var ce;
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
          Sn ? go(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (ho && l.locale !== "ko" && (Sn || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Sn && (ce = ro()) : (pl = U, rr = "value" in pl ? pl.value : pl.textContent, Sn = !0)), F = si(C, ye), 0 < F.length && (ye = new oo(
          ye,
          e,
          null,
          l,
          U
        ), H.push({ event: ye, listeners: F }), ce ? ye.data = ce : (ce = po(l), ce !== null && (ye.data = ce)))), (ce = cy ? sy(e, l) : oy(e, l)) && (ye = si(C, "onBeforeInput"), 0 < ye.length && (F = new oo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          U
        ), H.push({
          event: F,
          listeners: ye
        }), F.data = ce)), t1(
          H,
          e,
          C,
          l,
          U
        );
      }
      lh(H, t);
    });
  }
  function qa(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function si(e, t) {
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
  function u1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ah(e, t, l, n, a) {
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
  var i1 = /\r\n?/g, r1 = /\u0000|\uFFFD/g;
  function uh(e) {
    return (typeof e == "string" ? e : "" + e).replace(i1, `
`).replace(r1, "");
  }
  function ih(e, t) {
    return t = uh(t), uh(e) === t;
  }
  function Ce(e, t, l, n, a, i) {
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
        ao(e, n, i);
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
            throw Error(s(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(s(60));
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = j0.get(l) || l, du(e, l, n));
    }
  }
  function Xc(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        ao(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(s(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(s(60));
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
        if (!$s.hasOwnProperty(l))
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
                  throw Error(s(137, t));
                default:
                  Ce(e, t, i, f, l, null);
              }
          }
        a && Ce(e, t, "srcSet", l.srcSet, l, null), n && Ce(e, t, "src", l.src, l, null);
        return;
      case "input":
        he("invalid", e);
        var m = i = f = a = null, v = null, C = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var U = l[n];
            if (U != null)
              switch (n) {
                case "name":
                  a = U;
                  break;
                case "type":
                  f = U;
                  break;
                case "checked":
                  v = U;
                  break;
                case "defaultChecked":
                  C = U;
                  break;
                case "value":
                  i = U;
                  break;
                case "defaultValue":
                  m = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ce(e, t, n, U, l, null);
              }
          }
        eo(
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
                Ce(e, t, a, m, l, null);
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
                if (m != null) throw Error(s(91));
                break;
              default:
                Ce(e, t, f, m, l, null);
            }
        lo(e, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ce(e, t, v, n, l, null));
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
                throw Error(s(137, t));
              default:
                Ce(e, t, C, n, l, null);
            }
        return;
      default:
        if (lr(t)) {
          for (U in l)
            l.hasOwnProperty(U) && (n = l[U], n !== void 0 && Xc(
              e,
              t,
              U,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && (n = l[m], n != null && Ce(e, t, m, n, l, null));
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
        var a = null, i = null, f = null, m = null, v = null, C = null, U = null;
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
                n.hasOwnProperty(M) || Ce(e, t, M, null, n, H);
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
                U = M;
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
                  throw Error(s(137, t));
                break;
              default:
                M !== H && Ce(
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
          U,
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
                z = i;
                break;
              case "defaultValue":
                m = i;
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
                Ce(e, t, m, null, n, a);
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
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== i && Ce(e, t, f, a, n, i);
            }
        to(e, z, M);
        return;
      case "option":
        for (var J in l)
          z = l[J], l.hasOwnProperty(J) && z != null && !n.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Ce(
            e,
            t,
            J,
            null,
            n,
            z
          ));
        for (v in n)
          z = n[v], M = l[v], n.hasOwnProperty(v) && z !== M && (z != null || M != null) && (v === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : Ce(
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
          z = l[P], l.hasOwnProperty(P) && z != null && !n.hasOwnProperty(P) && Ce(e, t, P, null, n, z);
        for (C in n)
          if (z = n[C], M = l[C], n.hasOwnProperty(C) && z !== M && (z != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(s(137, t));
                break;
              default:
                Ce(
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
          for (var _e in l)
            z = l[_e], l.hasOwnProperty(_e) && z !== void 0 && !n.hasOwnProperty(_e) && Xc(
              e,
              t,
              _e,
              void 0,
              n,
              z
            );
          for (U in n)
            z = n[U], M = l[U], !n.hasOwnProperty(U) || z === M || z === void 0 && M === void 0 || Xc(
              e,
              t,
              U,
              z,
              n,
              M
            );
          return;
        }
    }
    for (var R in l)
      z = l[R], l.hasOwnProperty(R) && z != null && !n.hasOwnProperty(R) && Ce(e, t, R, null, n, z);
    for (H in n)
      z = n[H], M = l[H], !n.hasOwnProperty(H) || z === M || z == null && M == null || Ce(e, t, H, z, n, M);
  }
  function rh(e) {
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
  function s1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, m = a.duration;
        if (i && m && rh(f)) {
          for (f = 0, m = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], C = v.startTime;
            if (C > m) break;
            var U = v.transferSize, H = v.initiatorType;
            U && rh(H) && (v = v.responseEnd, f += U * (v < m ? 1 : (m - C) / (v - C)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vc = null, Qc = null;
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
  function sh(e, t) {
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
  function Zc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var kc = null;
  function o1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === kc ? !1 : (kc = e, !0) : (kc = null, !1);
  }
  var oh = typeof setTimeout == "function" ? setTimeout : void 0, f1 = typeof clearTimeout == "function" ? clearTimeout : void 0, fh = typeof Promise == "function" ? Promise : void 0, d1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof fh < "u" ? function(e) {
    return fh.resolve(null).then(e).catch(h1);
  } : oh;
  function h1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ul(e) {
    return e === "head";
  }
  function dh(e, t) {
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
  function hh(e, t) {
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
  function Kc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Kc(l), Ii(l);
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
  function m1(e, t, l, n) {
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
  function y1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function mh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Jc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function $c(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function g1(e, t) {
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
  function yh(e) {
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
  function gh(e) {
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
  function ph(e, t, l) {
    switch (t = oi(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Ya(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ii(e);
  }
  var Ut = /* @__PURE__ */ new Map(), vh = /* @__PURE__ */ new Set();
  function fi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fl = X.d;
  X.d = {
    f: p1,
    r: v1,
    D: b1,
    C: S1,
    L: E1,
    m: x1,
    X: R1,
    S: T1,
    M: A1
  };
  function p1() {
    var e = fl.f(), t = li();
    return e || t;
  }
  function v1(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? jf(t) : fl.r(e);
  }
  var Zn = typeof document > "u" ? null : document;
  function bh(e, t, l) {
    var n = Zn;
    if (n && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), vh.has(a) || (vh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function b1(e) {
    fl.D(e), bh("dns-prefetch", e, null);
  }
  function S1(e, t) {
    fl.C(e, t), bh("preconnect", e, t);
  }
  function E1(e, t, l) {
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
      Ut.has(i) || (e = D(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ga(i)) || t === "script" && n.querySelector(Xa(i)) || (t = n.createElement("link"), lt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function x1(e, t) {
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
      if (!Ut.has(i) && (e = D({ rel: "modulepreload", href: e }, t), Ut.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Xa(i)))
              return;
        }
        n = l.createElement("link"), lt(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function T1(e, t, l) {
    fl.S(e, t, l);
    var n = Zn;
    if (n && e) {
      var a = mn(n).hoistableStyles, i = kn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = n.querySelector(
          Ga(i)
        ))
          m.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ut.get(i)) && Wc(e, l);
          var v = f = n.createElement("link");
          $e(v), lt(v, "link", e), v._p = new Promise(function(C, U) {
            v.onload = C, v.onerror = U;
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
  function R1(e, t) {
    fl.X(e, t);
    var l = Zn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Kn(e), i = n.get(a);
      i || (i = l.querySelector(Xa(a)), i || (e = D({ src: e, async: !0 }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), $e(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function A1(e, t) {
    fl.M(e, t);
    var l = Zn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Kn(e), i = n.get(a);
      i || (i = l.querySelector(Xa(a)), i || (e = D({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), $e(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Sh(e, t, l, n) {
    var a = (a = oe.current) ? fi(a) : null;
    if (!a) throw Error(s(446));
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
            Ga(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ut.set(e, l), i || w1(
            a,
            e,
            l,
            f.state
          ))), t && n === null)
            throw Error(s(528, ""));
          return f;
        }
        if (t && n !== null)
          throw Error(s(529, ""));
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
        throw Error(s(444, e));
    }
  }
  function kn(e) {
    return 'href="' + wt(e) + '"';
  }
  function Ga(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Eh(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function w1(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), lt(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function Kn(e) {
    return '[src="' + wt(e) + '"]';
  }
  function Xa(e) {
    return "script[async]" + e;
  }
  function xh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + wt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, $e(n), n;
          var a = D({}, l, {
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
            Ga(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          n = Eh(l), (a = Ut.get(a)) && Wc(n, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var f = i;
          return f._p = new Promise(function(m, v) {
            f.onload = m, f.onerror = v;
          }), lt(i, "link", n), t.state.loading |= 4, di(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Kn(l.src), (a = e.querySelector(
            Xa(i)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = Ut.get(i)) && (n = D({}, l), Ic(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
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
  function Wc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hi = null;
  function Th(e, t, l) {
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
  function Rh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function C1(e, t, l) {
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
  function Ah(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = kn(n.href), i = t.querySelector(
          Ga(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = mi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, n = Eh(n), (a = Ut.get(a)) && Wc(n, a), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function(m, v) {
          f.onload = m, f.onerror = v;
        }), lt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = mi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Pc = 0;
  function z1(e, t) {
    return e.stylesheets && e.count === 0 && gi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && gi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Pc === 0 && (Pc = 62500 * s1());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Pc ? 50 : 800) + t
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yi = /* @__PURE__ */ new Map(), t.forEach(O1, e), yi = null, mi.call(e));
  }
  function O1(e, t) {
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
  function N1(e, t, l, n, a, i, f, m, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ji(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.hiddenUpdates = Ji(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function wh(e, t, l, n, a, i, f, m, v, C, U, H) {
    return e = new N1(
      e,
      t,
      l,
      f,
      v,
      C,
      U,
      H,
      m
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = Mr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Br(i), e;
  }
  function Ch(e) {
    return e ? (e = Rn, e) : Rn;
  }
  function _h(e, t, l, n, a, i) {
    a = Ch(a), n.context === null ? n.context = a : n.pendingContext = a, n = Tl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(e, n, t), l !== null && (dt(l, e, t), Ea(l, e, t));
  }
  function zh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function es(e, t) {
    zh(e, t), (e = e.alternate) && zh(e, t);
  }
  function Oh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kl(e, 67108864);
      t !== null && dt(t, e, 67108864), es(e, 67108864);
    }
  }
  function Nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = $i(t);
      var l = kl(e, t);
      l !== null && dt(l, e, t), es(e, t);
    }
  }
  var pi = !0;
  function M1(e, t, l, n) {
    var a = Y.T;
    Y.T = null;
    var i = X.p;
    try {
      X.p = 2, ts(e, t, l, n);
    } finally {
      X.p = i, Y.T = a;
    }
  }
  function D1(e, t, l, n) {
    var a = Y.T;
    Y.T = null;
    var i = X.p;
    try {
      X.p = 8, ts(e, t, l, n);
    } finally {
      X.p = i, Y.T = a;
    }
  }
  function ts(e, t, l, n) {
    if (pi) {
      var a = ls(n);
      if (a === null)
        Gc(
          e,
          t,
          n,
          vi,
          l
        ), Dh(e, n);
      else if (j1(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Dh(e, n), t & 4 && -1 < U1.indexOf(e)) {
        for (; a !== null; ) {
          var i = hn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Gl(i.pendingLanes);
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
                m = kl(i, 2), m !== null && dt(m, i, 2), li(), es(i, 2);
            }
          if (i = ls(n), i === null && Gc(
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
        Gc(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function ls(e) {
    return e = ar(e), ns(e);
  }
  var vi = null;
  function ns(e) {
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
  function Mh(e) {
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
        switch (b0()) {
          case Hs:
            return 2;
          case qs:
            return 8;
          case ru:
          case S0:
            return 32;
          case Ys:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var as = !1, jl = null, Bl = null, Ll = null, Qa = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map(), Hl = [], U1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Dh(e, t) {
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
    }, t !== null && (t = hn(t), t !== null && Oh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function j1(e, t, l, n, a) {
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
  function Uh(e) {
    var t = dn(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, ks(e.priority, function() {
              Nh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, ks(e.priority, function() {
              Nh(l);
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
      var l = ls(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        nr = n, l.target.dispatchEvent(n), nr = null;
      } else
        return t = hn(l), t !== null && Oh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function jh(e, t, l) {
    bi(e) && l.delete(t);
  }
  function B1() {
    as = !1, jl !== null && bi(jl) && (jl = null), Bl !== null && bi(Bl) && (Bl = null), Ll !== null && bi(Ll) && (Ll = null), Qa.forEach(jh), Za.forEach(jh);
  }
  function Si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, as || (as = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      B1
    )));
  }
  var Ei = null;
  function Bh(e) {
    Ei !== e && (Ei = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Ei === e && (Ei = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (ns(n || l) === null)
              continue;
            break;
          }
          var i = hn(l);
          i !== null && (e.splice(t, 3), t -= 3, lc(
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
      Uh(l), l.blockedOn === null && Hl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || Bh(l);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              m = f.formAction;
            else if (ns(a) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Bh(l);
        }
      }
  }
  function Lh() {
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
  function us(e) {
    this._internalRoot = e;
  }
  xi.prototype.render = us.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var l = t.current, n = Rt();
    _h(l, n, e, t, null, null);
  }, xi.prototype.unmount = us.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      _h(e.current, 2, null, e, null, null), li(), t[fn] = null;
    }
  };
  function xi(e) {
    this._internalRoot = e;
  }
  xi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Zs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Hl.length && t !== 0 && t < Hl[l].priority; l++) ;
      Hl.splice(l, 0, e), l === 0 && Uh(e);
    }
  };
  var Hh = c.version;
  if (Hh !== "19.2.3")
    throw Error(
      s(
        527,
        Hh,
        "19.2.3"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = b(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var L1 = {
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
          L1
        ), gt = Ti;
      } catch {
      }
  }
  return $a.createRoot = function(e, t) {
    if (!d(e)) throw Error(s(299));
    var l = !1, n = "", a = Zf, i = kf, f = Kf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = wh(
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
      Lh
    ), e[fn] = t.current, Yc(e), new us(t);
  }, $a.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(s(299));
    var n = !1, a = "", i = Zf, f = kf, m = Kf, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = wh(
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
      Lh
    ), t.context = Ch(null), l = t.current, n = Rt(), n = $i(n), a = Tl(n), a.callback = null, Rl(l, a, n), l = n, t.current.lanes = l, na(t, l), kt(t), e[fn] = t.current, Yc(e), new xi(t);
  }, $a.version = "19.2.3", $a;
}
var em;
function Rp() {
  if (em) return ds.exports;
  em = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), ds.exports = Tp(), ds.exports;
}
var Ap = Rp();
const Bi = ({ label: u, onClick: r, disabled: c, type: o = "button", className: s, children: d, mainButtonStyle: h }) => /* @__PURE__ */ T.jsx(
  "button",
  {
    className: s || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: r,
    disabled: c,
    type: o,
    style: h,
    children: d || u
  }
), un = A.forwardRef(
  (u, r) => {
    const {
      label: c,
      startIcon: o,
      endIcon: s,
      error: d,
      helperText: h,
      optional: g,
      className: p,
      options: y,
      ...b
    } = u, x = !!d || !!h, D = b.type === "select" || !!y;
    return /* @__PURE__ */ T.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      c && /* @__PURE__ */ T.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        c,
        " ",
        g && /* @__PURE__ */ T.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex! items-center! relative!", children: [
        o && /* @__PURE__ */ T.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: o
          }
        ),
        D ? /* @__PURE__ */ T.jsx(
          "select",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${x ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b,
            children: y && y.map((q) => /* @__PURE__ */ T.jsx("option", { value: q.value, children: q.label }, q.value))
          }
        ) : /* @__PURE__ */ T.jsx(
          "input",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${x ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b
          }
        ),
        s && /* @__PURE__ */ T.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!",
            "aria-hidden": !0,
            children: s
          }
        )
      ] }),
      d && typeof d == "string" && /* @__PURE__ */ T.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
      !d && h && /* @__PURE__ */ T.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h })
    ] });
  }
), wp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Os = ({
  type: u,
  message: r,
  actionText: c,
  onActionClick: o,
  onClose: s,
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
        return /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ T.jsx("img", { src: wp, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g();
  return /* @__PURE__ */ T.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`, children: [
    /* @__PURE__ */ T.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ T.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ T.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
      c && o && /* @__PURE__ */ T.jsx(
        "button",
        {
          type: "button",
          onClick: o,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: c
        }
      ),
      h
    ] }),
    s && /* @__PURE__ */ T.jsxs(
      "button",
      {
        type: "button",
        onClick: s,
        className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
        children: [
          /* @__PURE__ */ T.jsx("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    )
  ] });
}, Xm = () => /* @__PURE__ */ T.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Wa extends Error {
}
Wa.prototype.name = "InvalidTokenError";
function Cp(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (r, c) => {
    let o = c.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function _p(u) {
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
    return Cp(r);
  } catch {
    return atob(r);
  }
}
function Vm(u, r) {
  if (typeof u != "string")
    throw new Wa("Invalid token specified: must be a string");
  r || (r = {});
  const c = r.header === !0 ? 0 : 1, o = u.split(".")[c];
  if (typeof o != "string")
    throw new Wa(`Invalid token specified: missing part #${c + 1}`);
  let s;
  try {
    s = _p(o);
  } catch (d) {
    throw new Wa(`Invalid token specified: invalid base64 for part #${c + 1} (${d.message})`);
  }
  try {
    return JSON.parse(s);
  } catch (d) {
    throw new Wa(`Invalid token specified: invalid json for part #${c + 1} (${d.message})`);
  }
}
function zp() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const r = u.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Mi(u, r, c, o = !0) {
  const s = /* @__PURE__ */ new Date();
  s.setSeconds(s.getSeconds() + c);
  const d = zp(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${s.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function Qm(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var tm = {};
const { toString: Op } = Object.prototype, { getPrototypeOf: Ns } = Object, { iterator: Li, toStringTag: Zm } = Symbol, Hi = /* @__PURE__ */ ((u) => (r) => {
  const c = Op.call(r);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (u) => (u = u.toLowerCase(), (r) => Hi(r) === u), qi = (u) => (r) => typeof r === u, { isArray: In } = Array, $n = qi("undefined");
function lu(u) {
  return u !== null && !$n(u) && u.constructor !== null && !$n(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const km = Yt("ArrayBuffer");
function Np(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && km(u.buffer), r;
}
const Mp = qi("string"), ht = qi("function"), Km = qi("number"), nu = (u) => u !== null && typeof u == "object", Dp = (u) => u === !0 || u === !1, _i = (u) => {
  if (Hi(u) !== "object")
    return !1;
  const r = Ns(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Zm in u) && !(Li in u);
}, Up = (u) => {
  if (!nu(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, jp = Yt("Date"), Bp = Yt("File"), Lp = Yt("Blob"), Hp = Yt("FileList"), qp = (u) => nu(u) && ht(u.pipe), Yp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((r = Hi(u)) === "formdata" || // detect form-data instance
  r === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, Gp = Yt("URLSearchParams"), [Xp, Vp, Qp, Zp] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt), kp = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function au(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let o, s;
  if (typeof u != "object" && (u = [u]), In(u))
    for (o = 0, s = u.length; o < s; o++)
      r.call(null, u[o], o, u);
  else {
    if (lu(u))
      return;
    const d = c ? Object.getOwnPropertyNames(u) : Object.keys(u), h = d.length;
    let g;
    for (o = 0; o < h; o++)
      g = d[o], r.call(null, u[g], g, u);
  }
}
function Jm(u, r) {
  if (lu(u))
    return null;
  r = r.toLowerCase();
  const c = Object.keys(u);
  let o = c.length, s;
  for (; o-- > 0; )
    if (s = c[o], r === s.toLowerCase())
      return s;
  return null;
}
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, $m = (u) => !$n(u) && u !== rn;
function Ss() {
  const { caseless: u, skipUndefined: r } = $m(this) && this || {}, c = {}, o = (s, d) => {
    const h = u && Jm(c, d) || d;
    _i(c[h]) && _i(s) ? c[h] = Ss(c[h], s) : _i(s) ? c[h] = Ss({}, s) : In(s) ? c[h] = s.slice() : (!r || !$n(s)) && (c[h] = s);
  };
  for (let s = 0, d = arguments.length; s < d; s++)
    arguments[s] && au(arguments[s], o);
  return c;
}
const Kp = (u, r, c, { allOwnKeys: o } = {}) => (au(r, (s, d) => {
  c && ht(s) ? u[d] = Qm(s, c) : u[d] = s;
}, { allOwnKeys: o }), u), Jp = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), $p = (u, r, c, o) => {
  u.prototype = Object.create(r.prototype, o), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), c && Object.assign(u.prototype, c);
}, Fp = (u, r, c, o) => {
  let s, d, h;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (s = Object.getOwnPropertyNames(u), d = s.length; d-- > 0; )
      h = s[d], (!o || o(h, u, r)) && !g[h] && (r[h] = u[h], g[h] = !0);
    u = c !== !1 && Ns(u);
  } while (u && (!c || c(u, r)) && u !== Object.prototype);
  return r;
}, Wp = (u, r, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= r.length;
  const o = u.indexOf(r, c);
  return o !== -1 && o === c;
}, Ip = (u) => {
  if (!u) return null;
  if (In(u)) return u;
  let r = u.length;
  if (!Km(r)) return null;
  const c = new Array(r);
  for (; r-- > 0; )
    c[r] = u[r];
  return c;
}, Pp = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && Ns(Uint8Array)), ev = (u, r) => {
  const o = (u && u[Li]).call(u);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const d = s.value;
    r.call(u, d[0], d[1]);
  }
}, tv = (u, r) => {
  let c;
  const o = [];
  for (; (c = u.exec(r)) !== null; )
    o.push(c);
  return o;
}, lv = Yt("HTMLFormElement"), nv = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, o, s) {
    return o.toUpperCase() + s;
  }
), lm = (({ hasOwnProperty: u }) => (r, c) => u.call(r, c))(Object.prototype), av = Yt("RegExp"), Fm = (u, r) => {
  const c = Object.getOwnPropertyDescriptors(u), o = {};
  au(c, (s, d) => {
    let h;
    (h = r(s, d, u)) !== !1 && (o[d] = h || s);
  }), Object.defineProperties(u, o);
}, uv = (u) => {
  Fm(u, (r, c) => {
    if (ht(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const o = u[c];
    if (ht(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, iv = (u, r) => {
  const c = {}, o = (s) => {
    s.forEach((d) => {
      c[d] = !0;
    });
  };
  return In(u) ? o(u) : o(String(u).split(r)), c;
}, rv = () => {
}, cv = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function sv(u) {
  return !!(u && ht(u.append) && u[Zm] === "FormData" && u[Li]);
}
const ov = (u) => {
  const r = new Array(10), c = (o, s) => {
    if (nu(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (lu(o))
        return o;
      if (!("toJSON" in o)) {
        r[s] = o;
        const d = In(o) ? [] : {};
        return au(o, (h, g) => {
          const p = c(h, s + 1);
          !$n(p) && (d[g] = p);
        }), r[s] = void 0, d;
      }
    }
    return o;
  };
  return c(u, 0);
}, fv = Yt("AsyncFunction"), dv = (u) => u && (nu(u) || ht(u)) && ht(u.then) && ht(u.catch), Wm = ((u, r) => u ? setImmediate : r ? ((c, o) => (rn.addEventListener("message", ({ source: s, data: d }) => {
  s === rn && d === c && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), rn.postMessage(c, "*");
}))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(
  typeof setImmediate == "function",
  ht(rn.postMessage)
), hv = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof tm < "u" && tm.nextTick || Wm, mv = (u) => u != null && ht(u[Li]), O = {
  isArray: In,
  isArrayBuffer: km,
  isBuffer: lu,
  isFormData: Yp,
  isArrayBufferView: Np,
  isString: Mp,
  isNumber: Km,
  isBoolean: Dp,
  isObject: nu,
  isPlainObject: _i,
  isEmptyObject: Up,
  isReadableStream: Xp,
  isRequest: Vp,
  isResponse: Qp,
  isHeaders: Zp,
  isUndefined: $n,
  isDate: jp,
  isFile: Bp,
  isBlob: Lp,
  isRegExp: av,
  isFunction: ht,
  isStream: qp,
  isURLSearchParams: Gp,
  isTypedArray: Pp,
  isFileList: Hp,
  forEach: au,
  merge: Ss,
  extend: Kp,
  trim: kp,
  stripBOM: Jp,
  inherits: $p,
  toFlatObject: Fp,
  kindOf: Hi,
  kindOfTest: Yt,
  endsWith: Wp,
  toArray: Ip,
  forEachEntry: ev,
  matchAll: tv,
  isHTMLForm: lv,
  hasOwnProperty: lm,
  hasOwnProp: lm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fm,
  freezeMethods: uv,
  toObjectSet: iv,
  toCamelCase: nv,
  noop: rv,
  toFiniteNumber: cv,
  findKey: Jm,
  global: rn,
  isContextDefined: $m,
  isSpecCompliantForm: sv,
  toJSONObject: ov,
  isAsyncFn: fv,
  isThenable: dv,
  setImmediate: Wm,
  asap: hv,
  isIterable: mv
};
function re(u, r, c, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), c && (this.config = c), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
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
const Im = re.prototype, Pm = {};
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
  Pm[u] = { value: u };
});
Object.defineProperties(re, Pm);
Object.defineProperty(Im, "isAxiosError", { value: !0 });
re.from = (u, r, c, o, s, d) => {
  const h = Object.create(Im);
  O.toFlatObject(u, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return re.call(h, g, p, c, o, s), u && h.cause == null && Object.defineProperty(h, "cause", { value: u, configurable: !0 }), h.name = u && u.name || "Error", d && Object.assign(h, d), h;
};
const yv = null;
function Es(u) {
  return O.isPlainObject(u) || O.isArray(u);
}
function e0(u) {
  return O.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function nm(u, r, c) {
  return u ? u.concat(r).map(function(s, d) {
    return s = e0(s), !c && d ? "[" + s + "]" : s;
  }).join(c ? "." : "") : r;
}
function gv(u) {
  return O.isArray(u) && !u.some(Es);
}
const pv = O.toFlatObject(O, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Yi(u, r, c) {
  if (!O.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), c = O.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, N) {
    return !O.isUndefined(N[j]);
  });
  const o = c.metaTokens, s = c.visitor || b, d = c.dots, h = c.indexes, p = (c.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(r);
  if (!O.isFunction(s))
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
  function b(_, j, N) {
    let Q = _;
    if (_ && !N && typeof _ == "object") {
      if (O.endsWith(j, "{}"))
        j = o ? j : j.slice(0, -2), _ = JSON.stringify(_);
      else if (O.isArray(_) && gv(_) || (O.isFileList(_) || O.endsWith(j, "[]")) && (Q = O.toArray(_)))
        return j = e0(j), Q.forEach(function(k, ee) {
          !(O.isUndefined(k) || k === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? nm([j], ee, d) : h === null ? j : j + "[]",
            y(k)
          );
        }), !1;
    }
    return Es(_) ? !0 : (r.append(nm(N, j, d), y(_)), !1);
  }
  const x = [], D = Object.assign(pv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Es
  });
  function q(_, j) {
    if (!O.isUndefined(_)) {
      if (x.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      x.push(_), O.forEach(_, function(Q, V) {
        (!(O.isUndefined(Q) || Q === null) && s.call(
          r,
          Q,
          O.isString(V) ? V.trim() : V,
          j,
          D
        )) === !0 && q(Q, j ? j.concat(V) : [V]);
      }), x.pop();
    }
  }
  if (!O.isObject(u))
    throw new TypeError("data must be an object");
  return q(u), r;
}
function am(u) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(o) {
    return r[o];
  });
}
function Ms(u, r) {
  this._pairs = [], u && Yi(u, this, r);
}
const t0 = Ms.prototype;
t0.append = function(r, c) {
  this._pairs.push([r, c]);
};
t0.toString = function(r) {
  const c = r ? function(o) {
    return r.call(this, o, am);
  } : am;
  return this._pairs.map(function(s) {
    return c(s[0]) + "=" + c(s[1]);
  }, "").join("&");
};
function vv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function l0(u, r, c) {
  if (!r)
    return u;
  const o = c && c.encode || vv;
  O.isFunction(c) && (c = {
    serialize: c
  });
  const s = c && c.serialize;
  let d;
  if (s ? d = s(r, c) : d = O.isURLSearchParams(r) ? r.toString() : new Ms(r, c).toString(o), d) {
    const h = u.indexOf("#");
    h !== -1 && (u = u.slice(0, h)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class um {
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
  use(r, c, o) {
    return this.handlers.push({
      fulfilled: r,
      rejected: c,
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
    O.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const n0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bv = typeof URLSearchParams < "u" ? URLSearchParams : Ms, Sv = typeof FormData < "u" ? FormData : null, Ev = typeof Blob < "u" ? Blob : null, xv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bv,
    FormData: Sv,
    Blob: Ev
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ds = typeof window < "u" && typeof document < "u", xs = typeof navigator == "object" && navigator || void 0, Tv = Ds && (!xs || ["ReactNative", "NativeScript", "NS"].indexOf(xs.product) < 0), Rv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Av = Ds && window.location.href || "http://localhost", wv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ds,
  hasStandardBrowserEnv: Tv,
  hasStandardBrowserWebWorkerEnv: Rv,
  navigator: xs,
  origin: Av
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...wv,
  ...xv
};
function Cv(u, r) {
  return Yi(u, new at.classes.URLSearchParams(), {
    visitor: function(c, o, s, d) {
      return at.isNode && O.isBuffer(c) ? (this.append(o, c.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function _v(u) {
  return O.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function zv(u) {
  const r = {}, c = Object.keys(u);
  let o;
  const s = c.length;
  let d;
  for (o = 0; o < s; o++)
    d = c[o], r[d] = u[d];
  return r;
}
function a0(u) {
  function r(c, o, s, d) {
    let h = c[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= c.length;
    return h = !h && O.isArray(s) ? s.length : h, p ? (O.hasOwnProp(s, h) ? s[h] = [s[h], o] : s[h] = o, !g) : ((!s[h] || !O.isObject(s[h])) && (s[h] = []), r(c, o, s[h], d) && O.isArray(s[h]) && (s[h] = zv(s[h])), !g);
  }
  if (O.isFormData(u) && O.isFunction(u.entries)) {
    const c = {};
    return O.forEachEntry(u, (o, s) => {
      r(_v(o), s, c, 0);
    }), c;
  }
  return null;
}
function Ov(u, r, c) {
  if (O.isString(u))
    try {
      return (r || JSON.parse)(u), O.trim(u);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (c || JSON.stringify)(u);
}
const uu = {
  transitional: n0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, c) {
    const o = c.getContentType() || "", s = o.indexOf("application/json") > -1, d = O.isObject(r);
    if (d && O.isHTMLForm(r) && (r = new FormData(r)), O.isFormData(r))
      return s ? JSON.stringify(a0(r)) : r;
    if (O.isArrayBuffer(r) || O.isBuffer(r) || O.isStream(r) || O.isFile(r) || O.isBlob(r) || O.isReadableStream(r))
      return r;
    if (O.isArrayBufferView(r))
      return r.buffer;
    if (O.isURLSearchParams(r))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Cv(r, this.formSerializer).toString();
      if ((g = O.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Yi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || s ? (c.setContentType("application/json", !1), Ov(r)) : r;
  }],
  transformResponse: [function(r) {
    const c = this.transitional || uu.transitional, o = c && c.forcedJSONParsing, s = this.responseType === "json";
    if (O.isResponse(r) || O.isReadableStream(r))
      return r;
    if (r && O.isString(r) && (o && !this.responseType || s)) {
      const h = !(c && c.silentJSONParsing) && s;
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
const Nv = O.toObjectSet([
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
]), Mv = (u) => {
  const r = {};
  let c, o, s;
  return u && u.split(`
`).forEach(function(h) {
    s = h.indexOf(":"), c = h.substring(0, s).trim().toLowerCase(), o = h.substring(s + 1).trim(), !(!c || r[c] && Nv[c]) && (c === "set-cookie" ? r[c] ? r[c].push(o) : r[c] = [o] : r[c] = r[c] ? r[c] + ", " + o : o);
  }), r;
}, im = /* @__PURE__ */ Symbol("internals");
function Fa(u) {
  return u && String(u).trim().toLowerCase();
}
function zi(u) {
  return u === !1 || u == null ? u : O.isArray(u) ? u.map(zi) : String(u);
}
function Dv(u) {
  const r = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = c.exec(u); )
    r[o[1]] = o[2];
  return r;
}
const Uv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ys(u, r, c, o, s) {
  if (O.isFunction(o))
    return o.call(this, r, c);
  if (s && (r = c), !!O.isString(r)) {
    if (O.isString(o))
      return r.indexOf(o) !== -1;
    if (O.isRegExp(o))
      return o.test(r);
  }
}
function jv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, c, o) => c.toUpperCase() + o);
}
function Bv(u, r) {
  const c = O.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(u, o + c, {
      value: function(s, d, h) {
        return this[o].call(this, r, s, d, h);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, c, o) {
    const s = this;
    function d(g, p, y) {
      const b = Fa(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const x = O.findKey(s, b);
      (!x || s[x] === void 0 || y === !0 || y === void 0 && s[x] !== !1) && (s[x || p] = zi(g));
    }
    const h = (g, p) => O.forEach(g, (y, b) => d(y, b, p));
    if (O.isPlainObject(r) || r instanceof this.constructor)
      h(r, c);
    else if (O.isString(r) && (r = r.trim()) && !Uv(r))
      h(Mv(r), c);
    else if (O.isObject(r) && O.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!O.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? O.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      h(g, c);
    } else
      r != null && d(c, r, o);
    return this;
  }
  get(r, c) {
    if (r = Fa(r), r) {
      const o = O.findKey(this, r);
      if (o) {
        const s = this[o];
        if (!c)
          return s;
        if (c === !0)
          return Dv(s);
        if (O.isFunction(c))
          return c.call(this, s, o);
        if (O.isRegExp(c))
          return c.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (r = Fa(r), r) {
      const o = O.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!c || ys(this, this[o], o, c)));
    }
    return !1;
  }
  delete(r, c) {
    const o = this;
    let s = !1;
    function d(h) {
      if (h = Fa(h), h) {
        const g = O.findKey(o, h);
        g && (!c || ys(o, o[g], g, c)) && (delete o[g], s = !0);
      }
    }
    return O.isArray(r) ? r.forEach(d) : d(r), s;
  }
  clear(r) {
    const c = Object.keys(this);
    let o = c.length, s = !1;
    for (; o--; ) {
      const d = c[o];
      (!r || ys(this, this[d], d, r, !0)) && (delete this[d], s = !0);
    }
    return s;
  }
  normalize(r) {
    const c = this, o = {};
    return O.forEach(this, (s, d) => {
      const h = O.findKey(o, d);
      if (h) {
        c[h] = zi(s), delete c[d];
        return;
      }
      const g = r ? jv(d) : String(d).trim();
      g !== d && delete c[d], c[g] = zi(s), o[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const c = /* @__PURE__ */ Object.create(null);
    return O.forEach(this, (o, s) => {
      o != null && o !== !1 && (c[s] = r && O.isArray(o) ? o.join(", ") : o);
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
    const o = new this(r);
    return c.forEach((s) => o.set(s)), o;
  }
  static accessor(r) {
    const o = (this[im] = this[im] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function d(h) {
      const g = Fa(h);
      o[g] || (Bv(s, h), o[g] = !0);
    }
    return O.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(mt.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(o) {
      this[c] = o;
    }
  };
});
O.freezeMethods(mt);
function gs(u, r) {
  const c = this || uu, o = r || c, s = mt.from(o.headers);
  let d = o.data;
  return O.forEach(u, function(g) {
    d = g.call(c, d, s.normalize(), r ? r.status : void 0);
  }), s.normalize(), d;
}
function u0(u) {
  return !!(u && u.__CANCEL__);
}
function Pn(u, r, c) {
  re.call(this, u ?? "canceled", re.ERR_CANCELED, r, c), this.name = "CanceledError";
}
O.inherits(Pn, re, {
  __CANCEL__: !0
});
function i0(u, r, c) {
  const o = c.config.validateStatus;
  !c.status || !o || o(c.status) ? u(c) : r(new re(
    "Request failed with status code " + c.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
function Lv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function Hv(u, r) {
  u = u || 10;
  const c = new Array(u), o = new Array(u);
  let s = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = o[d];
    h || (h = y), c[s] = p, o[s] = y;
    let x = d, D = 0;
    for (; x !== s; )
      D += c[x++], x = x % u;
    if (s = (s + 1) % u, s === d && (d = (d + 1) % u), y - h < r)
      return;
    const q = b && y - b;
    return q ? Math.round(D * 1e3 / q) : void 0;
  };
}
function qv(u, r) {
  let c = 0, o = 1e3 / r, s, d;
  const h = (y, b = Date.now()) => {
    c = b, s = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), x = b - c;
    x >= o ? h(y, b) : (s = y, d || (d = setTimeout(() => {
      d = null, h(s);
    }, o - x)));
  }, () => s && h(s)];
}
const Di = (u, r, c = 3) => {
  let o = 0;
  const s = Hv(50, 250);
  return qv((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - o, y = s(p), b = h <= g;
    o = h;
    const x = {
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
    u(x);
  }, c);
}, rm = (u, r) => {
  const c = u != null;
  return [(o) => r[0]({
    lengthComputable: c,
    total: u,
    loaded: o
  }), r[1]];
}, cm = (u) => (...r) => O.asap(() => u(...r)), Yv = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (c) => (c = new URL(c, at.origin), u.protocol === c.protocol && u.host === c.host && (r || u.port === c.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Gv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, c, o, s, d, h) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      O.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`), O.isString(o) && g.push(`path=${o}`), O.isString(s) && g.push(`domain=${s}`), d === !0 && g.push("secure"), O.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function Xv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Vv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function r0(u, r, c) {
  let o = !Xv(r);
  return u && (o || c == !1) ? Vv(u, r) : r;
}
const sm = (u) => u instanceof mt ? { ...u } : u;
function sn(u, r) {
  r = r || {};
  const c = {};
  function o(y, b, x, D) {
    return O.isPlainObject(y) && O.isPlainObject(b) ? O.merge.call({ caseless: D }, y, b) : O.isPlainObject(b) ? O.merge({}, b) : O.isArray(b) ? b.slice() : b;
  }
  function s(y, b, x, D) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return o(void 0, y, x, D);
    } else return o(y, b, x, D);
  }
  function d(y, b) {
    if (!O.isUndefined(b))
      return o(void 0, b);
  }
  function h(y, b) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, b);
  }
  function g(y, b, x) {
    if (x in r)
      return o(y, b);
    if (x in u)
      return o(void 0, y);
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
    headers: (y, b, x) => s(sm(y), sm(b), x, !0)
  };
  return O.forEach(Object.keys({ ...u, ...r }), function(b) {
    const x = p[b] || s, D = x(u[b], r[b], b);
    O.isUndefined(D) && x !== g || (c[b] = D);
  }), c;
}
const c0 = (u) => {
  const r = sn({}, u);
  let { data: c, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = mt.from(h), r.url = l0(r0(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), O.isFormData(c)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (O.isFunction(c.getHeaders)) {
      const p = c.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, x]) => {
        y.includes(b.toLowerCase()) && h.set(b, x);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (o && O.isFunction(o) && (o = o(r)), o || o !== !1 && Yv(r.url))) {
    const p = s && d && Gv.read(d);
    p && h.set(s, p);
  }
  return r;
}, Qv = typeof XMLHttpRequest < "u", Zv = Qv && function(u) {
  return new Promise(function(c, o) {
    const s = c0(u);
    let d = s.data;
    const h = mt.from(s.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = s, b, x, D, q, _;
    function j() {
      q && q(), _ && _(), s.cancelToken && s.cancelToken.unsubscribe(b), s.signal && s.signal.removeEventListener("abort", b);
    }
    let N = new XMLHttpRequest();
    N.open(s.method.toUpperCase(), s.url, !0), N.timeout = s.timeout;
    function Q() {
      if (!N)
        return;
      const k = mt.from(
        "getAllResponseHeaders" in N && N.getAllResponseHeaders()
      ), K = {
        data: !g || g === "text" || g === "json" ? N.responseText : N.response,
        status: N.status,
        statusText: N.statusText,
        headers: k,
        config: u,
        request: N
      };
      i0(function(ae) {
        c(ae), j();
      }, function(ae) {
        o(ae), j();
      }, K), N = null;
    }
    "onloadend" in N ? N.onloadend = Q : N.onreadystatechange = function() {
      !N || N.readyState !== 4 || N.status === 0 && !(N.responseURL && N.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, N.onabort = function() {
      N && (o(new re("Request aborted", re.ECONNABORTED, u, N)), N = null);
    }, N.onerror = function(ee) {
      const K = ee && ee.message ? ee.message : "Network Error", le = new re(K, re.ERR_NETWORK, u, N);
      le.event = ee || null, o(le), N = null;
    }, N.ontimeout = function() {
      let ee = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const K = s.transitional || n0;
      s.timeoutErrorMessage && (ee = s.timeoutErrorMessage), o(new re(
        ee,
        K.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        u,
        N
      )), N = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in N && O.forEach(h.toJSON(), function(ee, K) {
      N.setRequestHeader(K, ee);
    }), O.isUndefined(s.withCredentials) || (N.withCredentials = !!s.withCredentials), g && g !== "json" && (N.responseType = s.responseType), y && ([D, _] = Di(y, !0), N.addEventListener("progress", D)), p && N.upload && ([x, q] = Di(p), N.upload.addEventListener("progress", x), N.upload.addEventListener("loadend", q)), (s.cancelToken || s.signal) && (b = (k) => {
      N && (o(!k || k.type ? new Pn(null, u, N) : k), N.abort(), N = null);
    }, s.cancelToken && s.cancelToken.subscribe(b), s.signal && (s.signal.aborted ? b() : s.signal.addEventListener("abort", b)));
    const V = Lv(s.url);
    if (V && at.protocols.indexOf(V) === -1) {
      o(new re("Unsupported protocol " + V + ":", re.ERR_BAD_REQUEST, u));
      return;
    }
    N.send(d || null);
  });
}, kv = (u, r) => {
  const { length: c } = u = u ? u.filter(Boolean) : [];
  if (r || c) {
    let o = new AbortController(), s;
    const d = function(y) {
      if (!s) {
        s = !0, g();
        const b = y instanceof Error ? y : this.reason;
        o.abort(b instanceof re ? b : new Pn(b instanceof Error ? b.message : b));
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
    const { signal: p } = o;
    return p.unsubscribe = () => O.asap(g), p;
  }
}, Kv = function* (u, r) {
  let c = u.byteLength;
  if (c < r) {
    yield u;
    return;
  }
  let o = 0, s;
  for (; o < c; )
    s = o + r, yield u.slice(o, s), o = s;
}, Jv = async function* (u, r) {
  for await (const c of $v(u))
    yield* Kv(c, r);
}, $v = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const r = u.getReader();
  try {
    for (; ; ) {
      const { done: c, value: o } = await r.read();
      if (c)
        break;
      yield o;
    }
  } finally {
    await r.cancel();
  }
}, om = (u, r, c, o) => {
  const s = Jv(u, r);
  let d = 0, h, g = (p) => {
    h || (h = !0, o && o(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: b } = await s.next();
        if (y) {
          g(), p.close();
          return;
        }
        let x = b.byteLength;
        if (c) {
          let D = d += x;
          c(D);
        }
        p.enqueue(new Uint8Array(b));
      } catch (y) {
        throw g(y), y;
      }
    },
    cancel(p) {
      return g(p), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, fm = 64 * 1024, { isFunction: Ai } = O, Fv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(O.global), {
  ReadableStream: dm,
  TextEncoder: hm
} = O.global, mm = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, Wv = (u) => {
  u = O.merge.call({
    skipUndefined: !0
  }, Fv, u);
  const { fetch: r, Request: c, Response: o } = u, s = r ? Ai(r) : typeof fetch == "function", d = Ai(c), h = Ai(o);
  if (!s)
    return !1;
  const g = s && Ai(dm), p = s && (typeof hm == "function" ? /* @__PURE__ */ ((_) => (j) => _.encode(j))(new hm()) : async (_) => new Uint8Array(await new c(_).arrayBuffer())), y = d && g && mm(() => {
    let _ = !1;
    const j = new c(at.origin, {
      body: new dm(),
      method: "POST",
      get duplex() {
        return _ = !0, "half";
      }
    }).headers.has("Content-Type");
    return _ && !j;
  }), b = h && g && mm(() => O.isReadableStream(new o("").body)), x = {
    stream: b && ((_) => _.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((_) => {
    !x[_] && (x[_] = (j, N) => {
      let Q = j && j[_];
      if (Q)
        return Q.call(j);
      throw new re(`Response type '${_}' is not supported`, re.ERR_NOT_SUPPORT, N);
    });
  });
  const D = async (_) => {
    if (_ == null)
      return 0;
    if (O.isBlob(_))
      return _.size;
    if (O.isSpecCompliantForm(_))
      return (await new c(at.origin, {
        method: "POST",
        body: _
      }).arrayBuffer()).byteLength;
    if (O.isArrayBufferView(_) || O.isArrayBuffer(_))
      return _.byteLength;
    if (O.isURLSearchParams(_) && (_ = _ + ""), O.isString(_))
      return (await p(_)).byteLength;
  }, q = async (_, j) => {
    const N = O.toFiniteNumber(_.getContentLength());
    return N ?? D(j);
  };
  return async (_) => {
    let {
      url: j,
      method: N,
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
    } = c0(_), We = r || fetch;
    ae = ae ? (ae + "").toLowerCase() : "text";
    let ze = kv([V, k && k.toAbortSignal()], ee), Ye = null;
    const Ne = ze && ze.unsubscribe && (() => {
      ze.unsubscribe();
    });
    let Ve;
    try {
      if (le && y && N !== "get" && N !== "head" && (Ve = await q(I, Q)) !== 0) {
        let ne = new c(j, {
          method: "POST",
          body: Q,
          duplex: "half"
        }), S;
        if (O.isFormData(Q) && (S = ne.headers.get("content-type")) && I.setContentType(S), ne.body) {
          const [B, Z] = rm(
            Ve,
            Di(cm(le))
          );
          Q = om(ne.body, fm, B, Z);
        }
      }
      O.isString(Se) || (Se = Se ? "include" : "omit");
      const G = d && "credentials" in c.prototype, Y = {
        ...pe,
        signal: ze,
        method: N.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: Q,
        duplex: "half",
        credentials: G ? Se : void 0
      };
      Ye = d && new c(j, Y);
      let X = await (d ? We(Ye, pe) : We(j, Y));
      const fe = b && (ae === "stream" || ae === "response");
      if (b && (K || fe && Ne)) {
        const ne = {};
        ["status", "statusText", "headers"].forEach(($) => {
          ne[$] = X[$];
        });
        const S = O.toFiniteNumber(X.headers.get("content-length")), [B, Z] = K && rm(
          S,
          Di(cm(K), !0)
        ) || [];
        X = new o(
          om(X.body, fm, B, () => {
            Z && Z(), Ne && Ne();
          }),
          ne
        );
      }
      ae = ae || "text";
      let Ee = await x[O.findKey(x, ae) || "text"](X, _);
      return !fe && Ne && Ne(), await new Promise((ne, S) => {
        i0(ne, S, {
          data: Ee,
          headers: mt.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: _,
          request: Ye
        });
      });
    } catch (G) {
      throw Ne && Ne(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, _, Ye),
        {
          cause: G.cause || G
        }
      ) : re.from(G, G && G.code, _, Ye);
    }
  };
}, Iv = /* @__PURE__ */ new Map(), s0 = (u) => {
  let r = u && u.env || {};
  const { fetch: c, Request: o, Response: s } = r, d = [
    o,
    s,
    c
  ];
  let h = d.length, g = h, p, y, b = Iv;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : Wv(r)), b = y;
  return y;
};
s0();
const Us = {
  http: yv,
  xhr: Zv,
  fetch: {
    get: s0
  }
};
O.forEach(Us, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const ym = (u) => `- ${u}`, Pv = (u) => O.isFunction(u) || u === null || u === !1;
function eb(u, r) {
  u = O.isArray(u) ? u : [u];
  const { length: c } = u;
  let o, s;
  const d = {};
  for (let h = 0; h < c; h++) {
    o = u[h];
    let g;
    if (s = o, !Pv(o) && (s = Us[(g = String(o)).toLowerCase()], s === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (s && (O.isFunction(s) || (s = s.get(r))))
      break;
    d[g || "#" + h] = s;
  }
  if (!s) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = c ? h.length > 1 ? `since :
` + h.map(ym).join(`
`) : " " + ym(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const o0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: eb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Us
};
function ps(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Pn(null, u);
}
function gm(u) {
  return ps(u), u.headers = mt.from(u.headers), u.data = gs.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), o0.getAdapter(u.adapter || uu.adapter, u)(u).then(function(o) {
    return ps(u), o.data = gs.call(
      u,
      u.transformResponse,
      o
    ), o.headers = mt.from(o.headers), o;
  }, function(o) {
    return u0(o) || (ps(u), o && o.response && (o.response.data = gs.call(
      u,
      u.transformResponse,
      o.response
    ), o.response.headers = mt.from(o.response.headers))), Promise.reject(o);
  });
}
const f0 = "1.13.2", Gi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Gi[u] = function(o) {
    return typeof o === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const pm = {};
Gi.transitional = function(r, c, o) {
  function s(d, h) {
    return "[Axios v" + f0 + "] Transitional option '" + d + "'" + h + (o ? ". " + o : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        s(h, " has been removed" + (c ? " in " + c : "")),
        re.ERR_DEPRECATED
      );
    return c && !pm[h] && (pm[h] = !0, console.warn(
      s(
        h,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
Gi.spelling = function(r) {
  return (c, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function tb(u, r, c) {
  if (typeof u != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(u);
  let s = o.length;
  for (; s-- > 0; ) {
    const d = o[s], h = r[d];
    if (h) {
      const g = u[d], p = g === void 0 || h(g, d, u);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Oi = {
  assertOptions: tb,
  validators: Gi
}, Kt = Oi.validators;
let cn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new um(),
      response: new um()
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
    } catch (o) {
      if (o instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const d = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? d && !String(o.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + d) : o.stack = d;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(r, c) {
    typeof r == "string" ? (c = c || {}, c.url = r) : c = r || {}, c = sn(this.defaults, c);
    const { transitional: o, paramsSerializer: s, headers: d } = c;
    o !== void 0 && Oi.assertOptions(o, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), s != null && (O.isFunction(s) ? c.paramsSerializer = {
      serialize: s
    } : Oi.assertOptions(s, {
      encode: Kt.function,
      serialize: Kt.function
    }, !0)), c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = !0), Oi.assertOptions(c, {
      baseUrl: Kt.spelling("baseURL"),
      withXsrfToken: Kt.spelling("withXSRFToken")
    }, !0), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let h = d && O.merge(
      d.common,
      d[c.method]
    );
    d && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete d[_];
      }
    ), c.headers = mt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(j) {
      typeof j.runWhen == "function" && j.runWhen(c) === !1 || (p = p && j.synchronous, g.unshift(j.fulfilled, j.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let b, x = 0, D;
    if (!p) {
      const _ = [gm.bind(this), void 0];
      for (_.unshift(...g), _.push(...y), D = _.length, b = Promise.resolve(c); x < D; )
        b = b.then(_[x++], _[x++]);
      return b;
    }
    D = g.length;
    let q = c;
    for (; x < D; ) {
      const _ = g[x++], j = g[x++];
      try {
        q = _(q);
      } catch (N) {
        j.call(this, N);
        break;
      }
    }
    try {
      b = gm.call(this, q);
    } catch (_) {
      return Promise.reject(_);
    }
    for (x = 0, D = y.length; x < D; )
      b = b.then(y[x++], y[x++]);
    return b;
  }
  getUri(r) {
    r = sn(this.defaults, r);
    const c = r0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return l0(c, r.params, r.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(r) {
  cn.prototype[r] = function(c, o) {
    return this.request(sn(o || {}, {
      method: r,
      url: c,
      data: (o || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(r) {
  function c(o) {
    return function(d, h, g) {
      return this.request(sn(g || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  cn.prototype[r] = c(), cn.prototype[r + "Form"] = c(!0);
});
let lb = class d0 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function(d) {
      c = d;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let d = o._listeners.length;
      for (; d-- > 0; )
        o._listeners[d](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let d;
      const h = new Promise((g) => {
        o.subscribe(g), d = g;
      }).then(s);
      return h.cancel = function() {
        o.unsubscribe(d);
      }, h;
    }, r(function(d, h, g) {
      o.reason || (o.reason = new Pn(d, h, g), c(o.reason));
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
    const r = new AbortController(), c = (o) => {
      r.abort(o);
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
      token: new d0(function(s) {
        r = s;
      }),
      cancel: r
    };
  }
};
function nb(u) {
  return function(c) {
    return u.apply(null, c);
  };
}
function ab(u) {
  return O.isObject(u) && u.isAxiosError === !0;
}
const Ts = {
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
Object.entries(Ts).forEach(([u, r]) => {
  Ts[r] = u;
});
function h0(u) {
  const r = new cn(u), c = Qm(cn.prototype.request, r);
  return O.extend(c, cn.prototype, r, { allOwnKeys: !0 }), O.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(s) {
    return h0(sn(u, s));
  }, c;
}
const Ue = h0(uu);
Ue.Axios = cn;
Ue.CanceledError = Pn;
Ue.CancelToken = lb;
Ue.isCancel = u0;
Ue.VERSION = f0;
Ue.toFormData = Yi;
Ue.AxiosError = re;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(r) {
  return Promise.all(r);
};
Ue.spread = nb;
Ue.isAxiosError = ab;
Ue.mergeConfig = sn;
Ue.AxiosHeaders = mt;
Ue.formToJSON = (u) => a0(O.isHTMLForm(u) ? new FormData(u) : u);
Ue.getAdapter = o0.getAdapter;
Ue.HttpStatusCode = Ts;
Ue.default = Ue;
const {
  Axios: Sb,
  AxiosError: Eb,
  CanceledError: xb,
  isCancel: Tb,
  CancelToken: Rb,
  VERSION: Ab,
  all: wb,
  Cancel: Cb,
  isAxiosError: _b,
  spread: zb,
  toFormData: Ob,
  AxiosHeaders: Nb,
  HttpStatusCode: Mb,
  formToJSON: Db,
  getAdapter: Ub,
  mergeConfig: jb
} = Ue, ub = "https://dev-demo-env.colibrilearning.com", iu = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${ub}${r}`;
}, ib = async (u, r) => {
  const c = iu("api/auth"), o = { username: u, password: r };
  try {
    return (await Ue.post(c, o)).data;
  } catch (s) {
    throw console.error("Error during auth login:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 401 ? new Error("Invalid credentials") : s.message ? new Error(s.message) : new Error("Authentication failed");
  }
}, rb = async (u) => {
  const r = iu("api/register");
  try {
    return (await Ue.post(r, u)).data;
  } catch (c) {
    throw console.error("Error during registration:", c), c.response?.data?.details?.errorMessage ? new Error(c.response.data.details.errorMessage) : c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.details ? new Error(c.response.data.details) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 500 ? new Error("Registration failed. Please try again.") : c.message ? new Error(c.message) : new Error("Registration failed");
  }
}, js = async (u) => {
  const r = iu("api/check-email");
  try {
    return (await Ue.post(r, { email: u })).data;
  } catch (c) {
    return console.error("Error checking email:", c), c.response?.data ? c.response.data : { exists: !1 };
  }
}, vm = async (u) => {
  const r = iu("api/forgot-password"), c = { email: u };
  try {
    return (await Ue.post(r, c)).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 404 ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error("Failed to send password reset link");
  }
}, cb = async (u) => {
  const r = iu("api/refresh"), c = { refresh_token: u };
  try {
    return (await Ue.post(r, c)).data;
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
};
function m0(u, r) {
  const c = {
    length: u.length >= 9 && u.length <= 15,
    upper: /[A-Z]/.test(u),
    lower: /[a-z]/.test(u),
    number: /[0-9]/.test(u),
    noSpaces: !/\s/.test(u),
    noTriple: !/(.)\1\1/.test(u),
    special: /[@.$%^_\-]/.test(u) && /^[A-Za-z0-9@.$%^_\-]+$/.test(u),
    noNameParts: !0,
    noEmailParts: !0
  }, o = u.toLowerCase();
  if (r && r.displayName) {
    const s = r.displayName.split(/\s+/).filter((d) => d.length >= 2);
    for (const d of s)
      if (d && o.includes(d.toLowerCase())) {
        c.noNameParts = !1;
        break;
      }
  }
  if (r && r.email) {
    const d = ((r.email || "").split("@")[0] || "").split(/[^A-Za-z0-9]+/).filter((h) => h.length >= 3);
    for (const h of d)
      if (h && o.includes(h.toLowerCase())) {
        c.noEmailParts = !1;
        break;
      }
  }
  return c;
}
const sb = (u) => {
  try {
    if (!document.cookie.split(";").find((s) => s.trim().startsWith("X-Credential=")))
      return !1;
    const c = document.cookie.split(";").find((s) => s.trim().startsWith("access_token="));
    if (!c)
      return !1;
    const o = c.split("=")[1];
    if (!o)
      return !1;
    try {
      const { jwtDecode: s } = require("jwt-decode"), d = s(o), h = Math.floor(Date.now() / 1e3);
      return !(!d.exp || h >= d.exp);
    } catch (s) {
      return console.error("[checkTokenAndRedirect] Token decode error:", s), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, ob = () => {
  try {
    const u = localStorage.getItem("refresh_token"), r = localStorage.getItem("refresh_token_time");
    if (!u || !r)
      return !1;
    const c = 10080 * 60 * 1e3;
    return Date.now() - parseInt(r) < c;
  } catch (u) {
    return console.error("[isRefreshTokenValid] Error:", u), !1;
  }
}, y0 = async (u, r, c = !0) => {
  const { tokens: o } = await ib(u, r);
  if (o.access_token) {
    const s = Vm(o.access_token), d = (s.exp || 0) - Math.floor(Date.now() / 1e3);
    Mi("access_token", o.access_token, d, !0), s.x_credentials && Mi("X-Credential", s.x_credentials, d, !1), localStorage.setItem("user_state", "authenticated"), c && o.refresh_token ? (localStorage.setItem("refresh_token", o.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return o;
}, fb = ({
  type: u,
  message: r,
  duration: c = 5e3,
  onClose: o,
  className: s = ""
}) => {
  const [d, h] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => h(!0), 10);
    const q = setTimeout(() => {
      y();
    }, c);
    return () => clearTimeout(q);
  }, [c]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), o();
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
  }, x = () => {
    switch (u) {
      case "success":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ T.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, D = b();
  return /* @__PURE__ */ T.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${s}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ T.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${D.bg}`, children: [
        /* @__PURE__ */ T.jsx("div", { className: `flex-shrink-0! ${D.icon}`, children: x() }),
        /* @__PURE__ */ T.jsx("div", { className: `ml-3! flex-1! ${D.text}`, children: /* @__PURE__ */ T.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ T.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${D.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ T.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, Xi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", db = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  onSignIn: o,
  title: s = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [x, D] = A.useState(""), [q, _] = A.useState(""), [j, N] = A.useState(!1), [Q, V] = A.useState(""), [k, ee] = A.useState(!1), [K, le] = A.useState(
    null
  ), [ae, I] = A.useState(!1), [Se, pe] = A.useState(!1), [We, ze] = A.useState(!1), [Ye, Ne] = A.useState(!1), [Ve, G] = A.useState(!0), [Y, X] = A.useState(""), [fe, Ee] = A.useState("info"), ne = A.useRef(null), S = A.useRef(null);
  A.useEffect(() => {
    if (S.current && clearTimeout(S.current), !g) {
      pe(!1), ze(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      pe(!1), ze(!1);
      return;
    }
    return S.current = setTimeout(async () => {
      Ne(!0);
      try {
        (await js(g)).exists ? (ze(!0), pe(!0)) : (ze(!1), pe(!1));
      } catch (Be) {
        console.error("[CreateAccount] Email check failed:", Be), ze(!1), pe(!1);
      } finally {
        Ne(!1);
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [g]), A.useEffect(() => {
    if (q) {
      const te = g || y || x ? {
        email: g,
        displayName: `${y} ${x}`.trim()
      } : null, Be = m0(q, te);
      le(Be);
    } else
      le(null);
  }, [q, g, y, x]);
  const B = K ? K.length && K.upper && K.lower && K.number && K.noSpaces && K.noTriple && K.special && K.noNameParts && K.noEmailParts : !1, $ = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const te = (Be) => {
      Be.key === "Escape" && c();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [c]);
  const se = (te) => {
    te.target === ne.current && c();
  }, oe = async (te) => {
    if (te.preventDefault(), I(!0), !g || !y || !x || !q) {
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
    N(!0), V(""), X("");
    try {
      const Ae = g.split("@")[0], Gt = await rb({
        username: Ae,
        email: g,
        firstName: y,
        lastName: x,
        password: q
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Gt.message
      );
      try {
        const Xt = await y0(
          Ae,
          q,
          Ve
        );
        u(Xt);
      } catch (Xt) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Xt
        );
        const ea = Xt instanceof Error ? Xt.message : "Auto-login failed";
        r(ea);
      }
    } catch (Ae) {
      console.error("[CreateAccount] Registration failed:", Ae);
      const Gt = Ae instanceof Error ? Ae.message : "Registration failed";
      X(Gt), Ee("error"), r(Gt);
    } finally {
      N(!1);
    }
  };
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    Y && /* @__PURE__ */ T.jsx(
      fb,
      {
        type: fe,
        message: Y,
        duration: 5e3,
        onClose: () => X("")
      }
    ),
    /* @__PURE__ */ T.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ne,
        onMouseDown: se,
        children: /* @__PURE__ */ T.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
          /* @__PURE__ */ T.jsx(
            "button",
            {
              onClick: c,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
              type: "button",
              children: /* @__PURE__ */ T.jsx(
                "svg",
                {
                  className: "w-6! h-6!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ T.jsx(
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
          /* @__PURE__ */ T.jsxs("div", { className: "mb-6! text-center!", children: [
            /* @__PURE__ */ T.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: s }),
            /* @__PURE__ */ T.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ T.jsxs("form", { onSubmit: oe, className: "space-y-4!", children: [
            /* @__PURE__ */ T.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ T.jsx(
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
                disabled: j,
                className: "w-full!",
                autoComplete: "email",
                error: ae && !g ? "Required" : Q || "",
                endIcon: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                  Ye && /* @__PURE__ */ T.jsx(Xm, {}),
                  !Ye && !We && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ T.jsx(
                    "img",
                    {
                      src: Xi,
                      alt: "available",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Se && We && /* @__PURE__ */ T.jsx(
              Os,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  pe(!1), o(g);
                },
                onClose: () => pe(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ T.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ T.jsx(
                un,
                {
                  label: "First Name",
                  id: "firstName",
                  type: "text",
                  value: y,
                  onChange: (te) => b(te.target.value),
                  placeholder: "First Name",
                  disabled: j,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ae && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ T.jsx(
                un,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: x,
                  onChange: (te) => D(te.target.value),
                  placeholder: "Last Name",
                  disabled: j,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ae && !x ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ T.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ T.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ T.jsx(
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
                disabled: j,
                className: "w-full!",
                autoComplete: "new-password",
                error: ae && !q ? "Required" : ae && q && !B ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                endIcon: /* @__PURE__ */ T.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => ee(!k),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: k ? /* @__PURE__ */ T.jsx(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ T.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          }
                        )
                      }
                    ) : /* @__PURE__ */ T.jsxs(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ T.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }
                          ),
                          /* @__PURE__ */ T.jsx(
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
            /* @__PURE__ */ T.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ T.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: Ve,
                  onChange: (te) => G(te.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ T.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ T.jsx(
              Bi,
              {
                type: "submit",
                disabled: j || We || !$ || !g || !y || !x || !q || !B,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: j ? /* @__PURE__ */ T.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ T.jsxs(
                    "svg",
                    {
                      className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ T.jsx(
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
                        /* @__PURE__ */ T.jsx(
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
            /* @__PURE__ */ T.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
              /* @__PURE__ */ T.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ T.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
              /* @__PURE__ */ T.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ T.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ T.jsx(
              "button",
              {
                type: "button",
                onClick: () => o(g),
                disabled: j,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ T.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, hb = ({
  email: u,
  loading: r,
  onResendLink: c,
  onBack: o,
  onClose: s
}) => {
  const d = A.useRef(null);
  A.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && s();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [s]);
  const h = (g) => {
    g.target === d.current && s();
  };
  return /* @__PURE__ */ T.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: h,
      children: /* @__PURE__ */ T.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ T.jsx(
          "button",
          {
            onClick: s,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ T.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ T.jsx(
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
        /* @__PURE__ */ T.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ T.jsx(
          "img",
          {
            src: Xi,
            alt: "Success",
            className: "w-16! h-16!"
          }
        ) }),
        /* @__PURE__ */ T.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ T.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ T.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ T.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: u }),
          /* @__PURE__ */ T.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ T.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ T.jsx(
          Bi,
          {
            type: "button",
            onClick: c,
            disabled: r,
            className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
            children: r ? /* @__PURE__ */ T.jsxs("span", { className: "flex! items-center! justify-center!", children: [
              /* @__PURE__ */ T.jsxs(
                "svg",
                {
                  className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ T.jsx(
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
                    /* @__PURE__ */ T.jsx(
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
        /* @__PURE__ */ T.jsx(
          "button",
          {
            type: "button",
            onClick: o,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
            children: /* @__PURE__ */ T.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, mb = ({
  email: u,
  onBack: r,
  handleClose: c
}) => {
  const [o, s] = A.useState(u || ""), [d, h] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [x, D] = A.useState(!1), [q, _] = A.useState(!1), [j, N] = A.useState(!1), Q = A.useRef(null);
  A.useEffect(() => {
    const K = (le) => {
      le.key === "Escape" && c();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [c]), A.useEffect(() => {
    const le = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o);
    if (N(le), !le || !o) {
      _(!1);
      return;
    }
    const ae = setTimeout(async () => {
      D(!0);
      try {
        const I = await js(o);
        console.log("[ResetPassword] Email check response:", I), _(I.exists), console.log("[ResetPassword] Email exists:", I.exists);
      } catch (I) {
        console.error("[ResetPassword] Error checking email:", I), _(!1);
      } finally {
        D(!1);
      }
    }, 500);
    return () => clearTimeout(ae);
  }, [o]);
  const V = (K) => {
    K.target === Q.current && c();
  }, k = async (K) => {
    if (K.preventDefault(), !o) {
      b("Email is required");
      return;
    }
    h(!0), b("");
    try {
      await vm(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
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
      await vm(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (K) {
      console.error("[ResetPassword] Failed to resend reset link:", K), p(!1);
      const le = K instanceof Error ? K.message : "Failed to resend reset link. Please try again.";
      b(le);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ T.jsx(
    hb,
    {
      email: o,
      loading: d,
      onResendLink: ee,
      onBack: r,
      onClose: c
    }
  ) : /* @__PURE__ */ T.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Q,
      onMouseDown: V,
      children: /* @__PURE__ */ T.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ T.jsx(
          "button",
          {
            onClick: c,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ T.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ T.jsx(
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
        /* @__PURE__ */ T.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ T.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-2!", children: "Reset your password" }),
          /* @__PURE__ */ T.jsx("p", { className: "text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ T.jsxs("form", { onSubmit: k, className: "space-y-4!", children: [
          /* @__PURE__ */ T.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ T.jsx(
            un,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: o,
              onChange: (K) => {
                s(K.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                x && /* @__PURE__ */ T.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !x && q && j && /* @__PURE__ */ T.jsx(
                  "img",
                  {
                    src: Xi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          y && /* @__PURE__ */ T.jsx(
            Os,
            {
              type: "error",
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ T.jsx(
            Bi,
            {
              type: "submit",
              disabled: d || !o || !j || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: o, isEmailValid: j, emailExists: q });
              },
              children: d ? /* @__PURE__ */ T.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ T.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ T.jsx(
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
                      /* @__PURE__ */ T.jsx(
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
          /* @__PURE__ */ T.jsx(
            "button",
            {
              type: "button",
              onClick: r,
              disabled: d,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! mt-4!",
              children: /* @__PURE__ */ T.jsx("span", { children: "Back to sign in" })
            }
          )
        ] })
      ] })
    }
  );
}, yb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  authority: o,
  title: s = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [x, D] = A.useState(!1), [q, _] = A.useState(!1), [j, N] = A.useState(
    null
  ), [Q, V] = A.useState(""), [k, ee] = A.useState(!1), [K, le] = A.useState(!1), [ae, I] = A.useState(!1), [Se, pe] = A.useState(!1), [We, ze] = A.useState(!1), [Ye, Ne] = A.useState(!1), Ve = A.useRef(null), G = A.useRef(null);
  A.useEffect(() => {
    if (G.current && clearTimeout(G.current), !g) {
      pe(!1), Ne(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      pe(!1), Ne(!1);
      return;
    }
    return G.current = setTimeout(async () => {
      ze(!0);
      try {
        (await js(g)).exists ? (pe(!0), Ne(!1)) : (pe(!1), Ne(!0));
      } catch (S) {
        console.error("[EmbeddedLogin] Email check failed:", S), pe(!0), Ne(!1);
      } finally {
        ze(!1);
      }
    }, 500), () => {
      G.current && clearTimeout(G.current);
    };
  }, [g]), A.useEffect(() => {
    if (y) {
      const ne = m0(y, null);
      N(ne);
    } else
      N(null);
  }, [y]), j && j.length && j.upper && j.lower && j.number && j.noSpaces && j.noTriple && j.special;
  const X = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const ne = (S) => {
      S.key === "Escape" && c();
    };
    return document.addEventListener("keydown", ne), () => document.removeEventListener("keydown", ne);
  }, [c]);
  const fe = (ne) => {
    ne.target === Ve.current && c();
  }, Ee = async (ne) => {
    if (ne.preventDefault(), !g || !y) {
      V("Please enter both email and password"), r("Please enter both email and password");
      return;
    }
    D(!0), V("");
    try {
      const S = await y0(g, y, k);
      u(S);
    } catch (S) {
      console.error("[EmbeddedLogin] Login failed:", S);
      const B = S instanceof Error ? S.message : "Authentication failed";
      V(B), r(B);
    } finally {
      D(!1);
    }
  };
  return ae ? /* @__PURE__ */ T.jsx(
    mb,
    {
      email: g,
      onBack: () => I(!1),
      handleClose: c
    }
  ) : K ? /* @__PURE__ */ T.jsx(
    db,
    {
      onSuccess: (ne) => {
        le(!1), u(ne);
      },
      onError: r,
      handleClose: c,
      onSignIn: (ne) => {
        le(!1), ne && p(ne);
      },
      authority: o,
      initialEmail: g
    }
  ) : /* @__PURE__ */ T.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ve,
      onMouseDown: fe,
      children: /* @__PURE__ */ T.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ T.jsx(
          "button",
          {
            onClick: c,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ T.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ T.jsx(
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
        /* @__PURE__ */ T.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ T.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: s }),
          /* @__PURE__ */ T.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ T.jsxs("form", { onSubmit: Ee, className: "space-y-2!", children: [
          /* @__PURE__ */ T.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ T.jsx(
            un,
            {
              label: "Email Address",
              id: "email",
              type: "email",
              value: g,
              onChange: (ne) => p(ne.target.value),
              placeholder: "Enter email address",
              disabled: x,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                We && /* @__PURE__ */ T.jsx(Xm, {}),
                !We && Se && X && /* @__PURE__ */ T.jsx(
                  "img",
                  {
                    src: Xi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          Ye && !Se && X && /* @__PURE__ */ T.jsx(
            Os,
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
          /* @__PURE__ */ T.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ T.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ T.jsx(
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
              disabled: x,
              className: "w-full!",
              autoComplete: "current-password",
              error: Q,
              endIcon: /* @__PURE__ */ T.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => _(!q),
                  className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                  tabIndex: -1,
                  children: q ? /* @__PURE__ */ T.jsx(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ T.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }
                      )
                    }
                  ) : /* @__PURE__ */ T.jsxs(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ T.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }
                        ),
                        /* @__PURE__ */ T.jsx(
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
          /* @__PURE__ */ T.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ T.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: k,
                  onChange: (ne) => ee(ne.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ T.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            /* @__PURE__ */ T.jsx(
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
          /* @__PURE__ */ T.jsx(
            Bi,
            {
              type: "submit",
              disabled: x || !g || !y || !X,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: x ? /* @__PURE__ */ T.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ T.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ T.jsx(
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
                      /* @__PURE__ */ T.jsx(
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
          /* @__PURE__ */ T.jsxs("div", { className: "relative! mt-4! mb-4!", children: [
            /* @__PURE__ */ T.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ T.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
            /* @__PURE__ */ T.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ T.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
          ] }),
          /* @__PURE__ */ T.jsx(
            "button",
            {
              type: "button",
              onClick: () => le(!0),
              disabled: x,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ T.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, gb = (u) => {
  const { authority: r, subsidiary: c, callbackUrl: o, onRedirect: s } = u, [d, h] = A.useState(!1);
  console.log("isAuthenticated", d), A.useEffect(() => {
    (async () => {
      try {
        if (sb()) {
          h(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (ob()) {
          const q = localStorage.getItem("refresh_token");
          if (q) {
            console.log("[App] Attempting auto-login with refresh token");
            const _ = await cb(q);
            if (_ && _.tokens && _.tokens.access_token) {
              const j = _.tokens, N = Vm(j.access_token), Q = (N.exp || 0) - Math.floor(Date.now() / 1e3);
              Mi("access_token", j.access_token, Q, !0), N.x_credentials && Mi("X-Credential", N.x_credentials, Q, !1), j.refresh_token && (localStorage.setItem("refresh_token", j.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), h(!0), console.log("[App] Auto-login successful");
              const V = u.redirectUrl || o;
              if (s) {
                const k = {
                  access_token: j.access_token,
                  userInfo: {
                    studentId: N.studentId,
                    sub: N.sub,
                    email_verified: N.email_verified,
                    x_credentials: N.x_credentials,
                    name: N.name,
                    preferred_username: N.preferred_username,
                    given_name: N.given_name,
                    family_name: N.family_name,
                    email: N.email
                  }
                };
                s(V, k);
              }
              u.redirectUrl && (window.location.href = u.redirectUrl);
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (x) {
        console.error("[App] Auto-login failed:", x), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [u.redirectUrl]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), c && localStorage.setItem("subsidiary", c), o ? localStorage.setItem("callbackUrl", o) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [r, c, o]);
  const g = (b) => {
    u.handleClose && u.handleClose(), h(!0);
    const x = u.redirectUrl || o;
    s && s(x, b), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, p = (b) => {
    console.log("[App] Embedded login error:", b);
  }, y = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ T.jsx(qg, { children: /* @__PURE__ */ T.jsx(Bm, { path: "*", element: /* @__PURE__ */ T.jsx(T.Fragment, { children: !d && u.showLogin && /* @__PURE__ */ T.jsx(
    yb,
    {
      onSuccess: g,
      onError: p,
      handleClose: y,
      authority: r,
      title: u.loginTitle,
      subtitle: u.loginSubtitle
    }
  ) }) }) });
};
class pb {
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
      const r = await this.getBrands(), c = window.location.hostname, o = r.find(
        (s) => c.includes(s.domain) || s.domain.includes(c)
      );
      return o ? (console.log(`[ThemeWidget] Auto-detected brand from domain: ${o.name} (${o.token})`), o.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${c}`), null);
    } catch (r) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", r), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(r) {
    try {
      const o = (await this.getBrands()).find(
        (p) => p.folder.toLowerCase() === r.toLowerCase() || p.token.toLowerCase() === r.toLowerCase()
      );
      if (!o) {
        console.warn(
          `[ThemeWidget] Brand not found: ${r}. Using default theme.`
        );
        return;
      }
      const s = `${this.cdnBaseUrl}/${o.folder}/theme.json`, d = await fetch(s);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const h = await d.json(), g = document.documentElement;
      h.styles.forEach((p) => {
        let y = p.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), g.style.setProperty(`--${p.name}`, y);
      }), this.currentBrand = o, console.log(`[ThemeWidget] Theme loaded for brand: ${o.name}`);
    } catch (c) {
      throw console.error("[ThemeWidget] Error loading theme:", c), c;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const c = r.styles.map((s) => {
      const d = this.formatStyleValue(s.value);
      return `  --${s.name}: ${d};`;
    }).join(`
`), o = `@theme {
${c}
}

:host {
${c}
}`;
    this.removeTheme(), this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-theme-widget", "true"), this.styleElement.textContent = o, this.shadowRoot ? this.shadowRoot.appendChild(this.styleElement) : document.head.appendChild(this.styleElement);
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
async function bm(u) {
  const r = new pb(u.cdnBaseUrl, u.shadowRoot), c = u.brandFolder || u.brandToken;
  if (c)
    await r.loadTheme(c);
  else if (u.autoDetect) {
    const o = await r.detectBrandFromDomain();
    o && await r.loadTheme(o);
  }
  return r;
}
{
  class u extends HTMLElement {
    root;
    mountPoint;
    _shadowRoot;
    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle", "loginTitle", "loginSubtitle", "show-login"];
    }
    // Store function props
    onRedirect;
    onClose;
    onLogout;
    connectedCallback() {
      if (!this._shadowRoot) {
        this._shadowRoot = this.attachShadow({ mode: "open" }), typeof window.injectWidgetStyles == "function" && window.injectWidgetStyles(this._shadowRoot);
        const c = this.getAttribute("subsidiary");
        c && c.trim() !== "" ? this.loadTheme(c) : this.loadThemeFromDomain();
      }
      this.mountPoint = document.createElement("div"), this._shadowRoot.appendChild(this.mountPoint), this.render();
    }
    async loadTheme(c) {
      try {
        console.log(`[Widget] Loading theme for subsidiary: ${c}`), await bm({
          brandFolder: c,
          shadowRoot: this._shadowRoot
        }), console.log(`[Widget] Theme loaded successfully for ${c}`);
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain() {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await bm({
          shadowRoot: this._shadowRoot,
          autoDetect: !0
        });
      } catch (c) {
        console.error("[Widget] Failed to auto-detect theme:", c), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback() {
      this.render();
    }
    disconnectedCallback() {
      this.root?.unmount();
    }
    handleRedirect = (c, o) => {
      console.log("[Widget] handleRedirect called, url:", c), this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(c, o));
      const s = new CustomEvent("redirect", {
        detail: {
          url: c,
          userSession: o,
          tokens: { access_token: o?.access_token },
          userInfo: o?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(s), console.log("[Widget] Redirect event dispatched"), c && !this.onRedirect && (console.log("[Widget] Will redirect to:", c, "in 200ms"), setTimeout(() => {
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
        handleClose: this.handleClose
      };
    }
    // Public API methods
    login() {
      console.log("[Widget] login() called"), this.setAttribute("show-login", "true");
    }
    logout() {
      console.log("[Widget] logout() called"), localStorage.removeItem("user_state"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"), document.cookie.split(";").forEach((o) => {
        document.cookie = o.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
      }), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
      const c = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c);
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = Ap.createRoot(this.mountPoint));
      const c = this.getProps();
      console.log("[Widget] Rendering with props:", c), this.root.render(
        /* @__PURE__ */ T.jsx(sp, { children: /* @__PURE__ */ T.jsx(A.StrictMode, { children: /* @__PURE__ */ T.jsx(gb, { ...c }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
