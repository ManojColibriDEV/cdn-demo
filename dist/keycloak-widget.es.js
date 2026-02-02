
// CSS content for Shadow DOM injection
var __WIDGET_CSS__ = "@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-black{background-color:var(--color-black)}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-600{color:var(--color-blue-600)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";

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
var Xh;
function X1() {
  if (Xh) return Ka;
  Xh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(s, o, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      d = {};
      for (var g in s)
        g !== "key" && (d[g] = s[g]);
    } else d = s;
    return s = d.ref, {
      $$typeof: u,
      type: s,
      key: h,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return Ka.Fragment = r, Ka.jsx = c, Ka.jsxs = c, Ka;
}
var Gh;
function G1() {
  return Gh || (Gh = 1, is.exports = X1()), is.exports;
}
var T = G1(), rs = { exports: {} }, ue = {}, Vh;
function V1() {
  if (Vh) return ue;
  Vh = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object" ? null : (S = Y && S[Y] || S["@@iterator"], typeof S == "function" ? S : null);
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
  }, D = Object.assign, V = {};
  function Q(S, H, Z) {
    this.props = S, this.context = H, this.refs = V, this.updater = Z || j;
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
  function ee(S, H, Z) {
    this.props = S, this.context = H, this.refs = V, this.updater = Z || j;
  }
  var F = ee.prototype = new K();
  F.constructor = ee, D(F, Q.prototype), F.isPureReactComponent = !0;
  var le = Array.isArray;
  function ue() {
  }
  var $ = { H: null, A: null, T: null, S: null }, pe = Object.prototype.hasOwnProperty;
  function Re(S, H, Z) {
    var k = Z.ref;
    return {
      $$typeof: r,
      type: S,
      key: H,
      ref: k !== void 0 ? k : null,
      props: Z
    };
  }
  function at(S, H) {
    return Re(S.type, H, S.props);
  }
  function Ee(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Be(S) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(Z) {
      return H[Z];
    });
  }
  var He = /\/+/g;
  function Je(S, H) {
    return typeof S == "object" && S !== null && S.key != null ? Be("" + S.key) : H.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ue, ue) : (S.status = "pending", S.then(
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
  function Y(S, B, Z, $, se) {
    var oe = typeof S;
    (oe === "undefined" || oe === "boolean") && (S = null);
    var te = !1;
    if (S === null) te = !0;
    else
      switch (re) {
        case "bigint":
        case "string":
        case "number":
          ye = !0;
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
      return se = se(S), te = $ === "" ? "." + Ve(S, 0) : $, le(se) ? (Z = "", te != null && (Z = te.replace(Ne, "$&/") + "/"), Y(se, B, Z, "", function(Xt) {
        return Xt;
      })) : se != null && (_e(se) && (se = Fe(
        se,
        Z + (se.key == null || S && S.key === se.key ? "" : ("" + se.key).replace(
          Ne,
          "$&/"
        ) + "/") + te
      )), B.push(se)), 1;
    te = 0;
    var Be = $ === "" ? "." : $ + ":";
    if (le(S))
      for (var Ue = 0; Ue < S.length; Ue++)
        k = S[Ue], re = Ye + Je(k, Ue), ye += q(
          k,
          H,
          Z,
          oe,
          se
        );
    else if (Ue = _(S), typeof Ue == "function")
      for (S = Ue.call(S), Ue = 0; !(k = S.next()).done; )
        k = k.value, re = Ye + Je(k, Ue++), ye += q(
          k,
          H,
          Z,
          oe,
          se
        );
    else if (re === "object") {
      if (typeof S.then == "function")
        return q(
          X(S),
          H,
          Z,
          $,
          se
        );
      throw H = String(S), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ye;
  }
  function G(S, H, Z) {
    if (S == null) return S;
    var $ = [], se = 0;
    return Y(S, $, "", "", function(oe) {
      return B.call(Z, oe, se++);
    }), $;
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
  var ne = typeof reportError == "function" ? reportError : function(S) {
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
  }, Oe = {
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
      if (!Ee(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = N, ue.Children = ne, ue.Component = V, ue.Fragment = s, ue.Profiler = d, ue.PureComponent = ee, ue.StrictMode = o, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return $.H.useMemoCache(S);
    }
  }, ae.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ae.cacheSignal = function() {
    return null;
  }, ae.cloneElement = function(S, H, Z) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var $ = U({}, S.props), se = S.key;
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
      $$typeof: m,
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
      for (var Be = Array(te), ze = 0; ze < te; ze++)
        Be[ze] = arguments[ze + 2];
      se.children = Be;
    }
    if (S && S.defaultProps)
      for ($ in te = S.defaultProps, te)
        se[$] === void 0 && (se[$] = te[$]);
    return pe(S, oe, se);
  }, ue.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ae.isValidElement = Ee, ae.lazy = function(S) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: S },
      _init: I
    };
  }, ae.memo = function(S, H) {
    return {
      $$typeof: b,
      type: S,
      compare: H === void 0 ? null : H
    };
  }, ae.startTransition = function(S) {
    var H = $.T, Z = {};
    $.T = Z;
    try {
      var $ = S(), se = I.S;
      se !== null && se(Z, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ae, Ee);
    } catch (oe) {
      Ee(oe);
    } finally {
      H !== null && Z.types !== null && (H.types = Z.types), $.T = H;
    }
  }, ae.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, ae.use = function(S) {
    return $.H.use(S);
  }, ae.useActionState = function(S, H, Z) {
    return $.H.useActionState(S, H, Z);
  }, ae.useCallback = function(S, H) {
    return $.H.useCallback(S, H);
  }, ae.useContext = function(S) {
    return $.H.useContext(S);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(S, H) {
    return $.H.useDeferredValue(S, H);
  }, ae.useEffect = function(S, H) {
    return $.H.useEffect(S, H);
  }, ae.useEffectEvent = function(S) {
    return $.H.useEffectEvent(S);
  }, ae.useId = function() {
    return $.H.useId();
  }, ae.useImperativeHandle = function(S, H, Z) {
    return $.H.useImperativeHandle(S, H, Z);
  }, ae.useInsertionEffect = function(S, H) {
    return $.H.useInsertionEffect(S, H);
  }, ae.useLayoutEffect = function(S, H) {
    return $.H.useLayoutEffect(S, H);
  }, ae.useMemo = function(S, H) {
    return $.H.useMemo(S, H);
  }, ae.useOptimistic = function(S, H) {
    return $.H.useOptimistic(S, H);
  }, ae.useReducer = function(S, H, Z) {
    return $.H.useReducer(S, H, Z);
  }, ae.useRef = function(S) {
    return $.H.useRef(S);
  }, ae.useState = function(S) {
    return $.H.useState(S);
  }, ae.useSyncExternalStore = function(S, H, Z) {
    return $.H.useSyncExternalStore(
      S,
      H,
      Z
    );
  }, ae.useTransition = function() {
    return $.H.useTransition();
  }, ae.version = "19.2.3", ae;
}
var Qh;
function As() {
  return Qh || (Qh = 1, rs.exports = V1()), rs.exports;
}
var A = As();
var Zh = "popstate";
function Q1(u = {}) {
  function r(s, o) {
    let { pathname: d, search: h, hash: g } = s.location;
    return bs(
      "",
      { pathname: d, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function c(s, o) {
    return typeof o == "string" ? o : Ia(o);
  }
  return k1(
    r,
    c,
    null,
    u
  );
}
function je(u, r) {
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
function Z1() {
  return Math.random().toString(36).substring(2, 10);
}
function kh(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function bs(u, r, c = null, s) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Wn(r) : r,
    state: c,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || s || Z1()
  };
}
function Wa({
  pathname: u = "/",
  search: r = "",
  hash: c = ""
}) {
  return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
}
function Jn(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
    let s = u.indexOf("?");
    s >= 0 && (r.search = u.substring(s), u = u.substring(0, s)), u && (r.pathname = u);
  }
  return r;
}
function k1(u, r, c, s = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = s, h = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function x() {
    g = "POP";
    let D = b(), V = D == null ? null : D - y;
    y = D, p && p({ action: g, location: j.location, delta: V });
  }
  function N(D, V) {
    g = "PUSH";
    let V = bs(D.location, U, Q);
    y = b() + 1;
    let k = kh(V, y), ee = D.createHref(V);
    try {
      m.pushState(K, "", ee);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError")
        throw F;
      s.location.assign(ee);
    }
    d && p && p({ action: g, location: j.location, delta: 1 });
  }
  function Y(D, V) {
    g = "REPLACE";
    let V = bs(D.location, U, Q);
    y = b();
    let k = kh(V, y), ee = D.createHref(V);
    h.replaceState(k, "", ee), d && p && p({ action: g, location: D.location, delta: 0 });
  }
  function _(U) {
    return K1(U);
  }
  let j = {
    get action() {
      return g;
    },
    get location() {
      return u(s, m);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Zh, x), p = U, () => {
        o.removeEventListener(Zh, x), p = null;
      };
    },
    createHref(D) {
      return r(s, D);
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
  return j;
}
function K1(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(c, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : Ia(u);
  return s = s.replace(/ $/, "%20"), !r && s.startsWith("//") && (s = c + s), new URL(s, c);
}
function Tm(u, r, c = "/") {
  return J1(u, r, c, !1);
}
function J1(u, r, c, s) {
  let o = typeof r == "string" ? Wn(r) : r, d = hl(o.pathname || "/", c);
  if (d == null)
    return null;
  let h = Rm(u);
  $1(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = ig(d);
    g = ag(
      h[p],
      y,
      s
    );
  }
  return g;
}
function Rm(u, r = [], c = [], s = "", o = !1) {
  let d = (h, g, p = o, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(s) && p)
        return;
      Le(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(s.length);
    }
    let x = dl([s, b.relativePath]), N = c.concat(b);
    h.children && h.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${x}".`
    ), Rm(
      h.children,
      r,
      N,
      x,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: x,
      score: lg(x, h.index),
      routesMeta: N
    });
  };
  return u.forEach((m, g) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, g);
    else
      for (let p of Am(h.path))
        d(h, g, !0, p);
  }), r;
}
function Am(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...s] = r, o = c.endsWith("?"), d = c.replace(/\?$/, "");
  if (s.length === 0)
    return o ? [d, ""] : [d];
  let h = Am(s.join("/")), g = [];
  return g.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), s && g.push(...m), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function $1(u) {
  u.sort(
    (r, c) => r.score !== c.score ? c.score - r.score : ng(
      r.routesMeta.map((s) => s.childrenIndex),
      c.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var W1 = /^:[\w-]+$/, F1 = 3, I1 = 2, P1 = 1, eg = 10, tg = -2, Kh = (u) => u === "*";
function lg(u, r) {
  let c = u.split("/"), s = c.length;
  return c.some(Kh) && (s += tg), r && (s += I1), c.filter((o) => !Kh(o)).reduce(
    (o, d) => o + (W1.test(d) ? F1 : d === "" ? P1 : eg),
    s
  );
}
function ng(u, r) {
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
function ag(u, r, c = !1) {
  let { routesMeta: s } = u, o = {}, d = "/", h = [];
  for (let g = 0; g < s.length; ++g) {
    let p = s[g], y = g === s.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", x = Ni(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), N = p.route;
    if (!x && y && c && !s[s.length - 1].route.index && (x = Ni(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !x)
      return null;
    Object.assign(o, x.params), h.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: dl([d, x.pathname]),
      pathnameBase: og(
        dl([d, x.pathnameBase])
      ),
      route: N
    }), x.pathnameBase !== "/" && (d = dl([d, x.pathnameBase]));
  }
  return m;
}
function zi(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, s] = ug(
    u.path,
    u.caseSensitive,
    u.end
  ), o = r.match(c);
  if (!o) return null;
  let d = o[0], h = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: s.reduce(
      (y, { paramName: b, isOptional: x }, N) => {
        if (b === "*") {
          let _ = g[N] || "";
          m = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[N];
        return x && !q ? y[b] = void 0 : y[b] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: u
  };
}
function ug(u, r = !1, c = !0) {
  qt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let s = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (s.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (s.push({ paramName: "*" }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), s];
}
function ig(u) {
  try {
    return u.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return qt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), u;
  }
}
function fl(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length, s = u.charAt(c);
  return s && s !== "/" ? null : u.slice(c) || "/";
}
var wm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, rg = (u) => wm.test(u);
function cg(u, r = "/") {
  let {
    pathname: c,
    search: s = "",
    hash: o = ""
  } = typeof u == "string" ? Wn(u) : u, d;
  if (c)
    if (rg(c))
      d = c;
    else {
      if (c.includes("//")) {
        let h = c;
        c = c.replace(/\/\/+/g, "/"), qt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${c}`
        );
      }
      c.startsWith("/") ? d = Jh(c.substring(1), "/") : d = Jh(c, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: fg(s),
    hash: dg(o)
  };
}
function Jh(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((o) => {
    o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
  }), c.length > 1 ? c.join("/") : "/";
}
function cs(u, r, c, s) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function rg(u) {
  return u.filter(
    (r, c) => c === 0 || r.route.path && r.route.path.length > 0
  );
}
function Cm(u) {
  let r = sg(u);
  return r.map(
    (c, s) => s === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function _m(u, r, c, s = !1) {
  let o;
  typeof u == "string" ? o = Wn(u) : (o = { ...u }, Le(
    !o.pathname || !o.pathname.includes("?"),
    cs("?", "pathname", "search", o)
  ), Le(
    !o.pathname || !o.pathname.includes("#"),
    cs("#", "pathname", "hash", o)
  ), Le(
    !o.search || !o.search.includes("#"),
    cs("#", "search", "hash", o)
  ));
  let d = u === "" || o.pathname === "", h = d ? "/" : o.pathname, g;
  if (h == null)
    g = c;
  else {
    let x = r.length - 1;
    if (!s && h.startsWith("..")) {
      let N = h.split("/");
      for (; N[0] === ".."; )
        N.shift(), x -= 1;
      o.pathname = N.join("/");
    }
    g = x >= 0 ? r[x] : "/";
  }
  let p = cg(o, g), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && c.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var dl = (u) => u.join("/").replace(/\/\/+/g, "/"), og = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), fg = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, dg = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, hg = class {
  constructor(u, r, c, s = !1) {
    this.status = u, this.statusText = r || "", this.internal = s, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function mg(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function yg(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var zm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Om(u, r) {
  let c = u;
  if (typeof c != "string" || !wm.test(c))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: c
    };
  let s = c, o = !1;
  if (zm)
    try {
      let d = new URL(window.location.href), h = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c), g = hl(h.pathname, r);
      h.origin === d.origin && g != null ? c = g + h.search + h.hash : o = !0;
    } catch {
      qt(
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
var Nm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Nm
);
var gg = [
  "GET",
  ...Nm
];
new Set(gg);
var Fn = A.createContext(null);
Fn.displayName = "DataRouter";
var Ui = A.createContext(null);
Ui.displayName = "DataRouterState";
var pg = A.createContext(!1), Mm = A.createContext({
  isTransitioning: !1
});
Mm.displayName = "ViewTransition";
var vg = A.createContext(
  /* @__PURE__ */ new Map()
);
vg.displayName = "Fetchers";
var bg = A.createContext(null);
bg.displayName = "Await";
var jt = A.createContext(
  null
);
jt.displayName = "Navigation";
var Fa = A.createContext(
  null
);
Fa.displayName = "Location";
var dl = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ml.displayName = "Route";
var ws = A.createContext(null);
ws.displayName = "RouteError";
var Dm = "REACT_ROUTER_ERROR", Sg = "REDIRECT", Eg = "ROUTE_ERROR_RESPONSE";
function xg(u) {
  if (u.startsWith(`${Dm}:${Sg}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function Tg(u) {
  if (u.startsWith(
    `${Dm}:${Eg}:{`
  ))
    try {
      let r = JSON.parse(u.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new hg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function Rg(u, { relative: r } = {}) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: s } = A.useContext(jt), { hash: o, pathname: d, search: h } = tu(u, { relative: r }), g = d;
  return c !== "/" && (g = d === "/" ? c : dl([c, d])), s.createHref({ pathname: g, search: h, hash: o });
}
function Ia() {
  return A.useContext(Fa) != null;
}
function cn() {
  return je(
    Ia(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(Fa).location;
}
var Um = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jm(u) {
  A.useContext(jt).static || A.useLayoutEffect(u);
}
function Ag() {
  let { isDataRoute: u } = A.useContext(ml);
  return u ? Hg() : wg();
}
function wg() {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext(Fn), { basename: r, navigator: c } = A.useContext(jt), { matches: s } = A.useContext(ml), { pathname: o } = on(), d = JSON.stringify(Cm(s)), h = A.useRef(!1);
  return jm(() => {
    h.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (qt(h.current, Um), !h.current) return;
      if (typeof p == "number") {
        c.go(p);
        return;
      }
      let b = _m(
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
  let { matches: c } = A.useContext(ml), { pathname: s } = on(), o = JSON.stringify(Cm(c));
  return A.useMemo(
    () => _m(
      u,
      JSON.parse(o),
      s,
      r === "path"
    ),
    [u, o, s, r]
  );
}
function Cg(u, r) {
  return Bm(u, r);
}
function Bm(u, r, c, s, o) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(jt), { matches: h } = A.useContext(ml), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", x = g && g.route;
  {
    let V = x && x.path || "";
    Hm(
      y,
      !x || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let N = cn(), Y;
  if (r) {
    let Q = typeof r == "string" ? Jn(r) : r;
    je(
      b === "/" || Q.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ), Y = Q;
  } else
    Y = N;
  let _ = Y.pathname || "/", j = _;
  if (b !== "/") {
    let Q = b.replace(/^\//, "").split("/");
    j = "/" + _.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let U = Tm(u, { pathname: D });
  qt(
    x || U != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), qt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Q = Mg(
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
            Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathname
        ]),
        pathnameBase: Q.pathnameBase === "/" ? b : ol([
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
    h,
    c,
    s,
    o
  );
  return r && V ? /* @__PURE__ */ A.createElement(
    Fa.Provider,
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
function _g() {
  let u = Lg(), r = mg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: s }, d = { padding: "2px 4px", backgroundColor: s }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), h = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ A.createElement("pre", { style: o }, c) : null, h);
}
var zg = /* @__PURE__ */ A.createElement(_g, null), Lm = class extends A.Component {
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
      const c = Tg(u.digest);
      c && (u = c);
    }
    let r = u !== void 0 ? /* @__PURE__ */ A.createElement(ml.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      ws.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(Og, { error: u }, r) : r;
  }
};
Lm.contextType = pg;
var ss = /* @__PURE__ */ new WeakMap();
function Og({
  children: u,
  error: r
}) {
  let { basename: c } = A.useContext(jt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let s = xg(r.digest);
    if (s) {
      let o = ss.get(r);
      if (o) throw o;
      let d = Om(s.location, c);
      if (zm && !ss.get(r))
        if (d.isExternal || s.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: s.replace
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
function Ng({ routeContext: u, match: r, children: c }) {
  let s = A.useContext(Fn);
  return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(ml.Provider, { value: u }, c);
}
function Mg(u, r = [], c = null, s = null, o = null) {
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
    je(
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
      let x = d[b];
      if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (p = b), x.route.id) {
        let { loaderData: N, errors: q } = c, _ = x.route.loader && !N.hasOwnProperty(x.route.id) && (!q || q[x.route.id] === void 0);
        if (x.route.lazy || _) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = c && s ? (b, x) => {
    s(b, {
      location: c.location,
      params: c.matches?.[0]?.params ?? {},
      unstable_pattern: yg(c.matches),
      errorInfo: x
    });
  } : void 0;
  return d.reduceRight(
    (b, x, N) => {
      let q, _ = !1, D = null, U = null;
      c && (q = h && x.route.id ? h[x.route.id] : void 0, D = x.route.errorElement || zg, g && (p < 0 && N === 0 ? (Hm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), _ = !0, U = null) : p === N && (_ = !0, U = x.route.hydrateFallbackElement || null)));
      let Q = r.concat(d.slice(0, N + 1)), V = () => {
        let k;
        return q ? k = D : _ ? k = U : x.route.Component ? k = /* @__PURE__ */ A.createElement(x.route.Component, null) : x.route.element ? k = x.route.element : k = b, /* @__PURE__ */ A.createElement(
          Ng,
          {
            match: x,
            routeContext: {
              outlet: b,
              matches: Q,
              isDataRoute: c != null
            },
            children: K
          }
        );
      };
      return c && (x.route.ErrorBoundary || x.route.errorElement || N === 0) ? /* @__PURE__ */ A.createElement(
        Lm,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: D,
          error: q,
          children: V(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          onError: y
        }
      ) : Q();
    },
    null
  );
}
function Cs(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dg(u) {
  let r = A.useContext(Fn);
  return Le(r, Cs(u)), r;
}
function Ug(u) {
  let r = A.useContext(Ui);
  return Le(r, Cs(u)), r;
}
function jg(u) {
  let r = A.useContext(ml);
  return Le(r, Cs(u)), r;
}
function _s(u) {
  let r = jg(u), c = r.matches[r.matches.length - 1];
  return Le(
    c.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), c.route.id;
}
function Bg() {
  return _s(
    "useRouteId"
    /* UseRouteId */
  );
}
function Lg() {
  let u = A.useContext(ws), r = Ug(
    "useRouteError"
    /* UseRouteError */
  ), c = _s(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[c];
}
function Hg() {
  let { router: u } = Dg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = _s(
    "useNavigate"
    /* UseNavigateStable */
  ), c = A.useRef(!1);
  return jm(() => {
    c.current = !0;
  }), A.useCallback(
    async (o, d = {}) => {
      qt(c.current, Um), c.current && (typeof o == "number" ? await u.navigate(o) : await u.navigate(o, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var $h = {};
function Hm(u, r, c) {
  !r && !$h[u] && ($h[u] = !0, qt(!1, c));
}
A.memo(qg);
function qg({
  routes: u,
  future: r,
  state: c,
  onError: s
}) {
  return Bm(u, void 0, c, s, r);
}
function qm(u) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Yg({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: s = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: m
}) {
  je(
    !Ia(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = A.useMemo(
    () => ({
      basename: g,
      navigator: s,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [g, s, d, m]
  );
  typeof c == "string" && (c = Wn(c));
  let {
    pathname: y = "/",
    search: b = "",
    hash: x = "",
    state: N = null,
    key: q = "default"
  } = c, _ = A.useMemo(() => {
    let D = hl(y, g);
    return D == null ? null : {
      location: {
        pathname: j,
        search: b,
        hash: x,
        state: N,
        key: Y
      },
      navigationType: s
    };
  }, [g, y, b, x, N, q, s]);
  return qt(
    _ != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${x}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ A.createElement(jt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Pa.Provider, { children: r, value: _ }));
}
function Xg({
  children: u,
  location: r
}) {
  return Cg(Ss(u), r);
}
function Ss(u, r = []) {
  let c = [];
  return A.Children.forEach(u, (s, o) => {
    if (!A.isValidElement(s))
      return;
    let d = [...r, o];
    if (s.type === A.Fragment) {
      c.push.apply(
        c,
        Ss(s.props.children, d)
      );
      return;
    }
    Le(
      s.type === qm,
      `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
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
    s.props.children && (h.children = Ss(
      s.props.children,
      d
    )), c.push(h);
  }), c;
}
var Ai = "get", wi = "application/x-www-form-urlencoded";
function Ui(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Gg(u) {
  return ji(u) && u.tagName.toLowerCase() === "button";
}
function Vg(u) {
  return ji(u) && u.tagName.toLowerCase() === "form";
}
function Qg(u) {
  return ji(u) && u.tagName.toLowerCase() === "input";
}
function Zg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function kg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Zg(u);
}
var Ri = null;
function Kg() {
  if (Ri === null)
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
var Jg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function os(u) {
  return u != null && !Jg.has(u) ? (qt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wi}"`
  ), null) : u;
}
function $g(u, r) {
  let c, s, o, d, h;
  if (Vg(u)) {
    let g = u.getAttribute("action");
    s = g ? hl(g, r) : null, c = u.getAttribute("method") || wi, o = os(u.getAttribute("enctype")) || Ci, d = new FormData(u);
  } else if (Gg(u) || Qg(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (s = p ? hl(p, r) : null, c = u.getAttribute("formmethod") || g.getAttribute("method") || wi, o = os(u.getAttribute("formenctype")) || os(g.getAttribute("enctype")) || Ci, d = new FormData(g, u), !Kg()) {
      let { name: y, type: b, value: x } = u;
      if (b === "image") {
        let N = y ? `${y}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else y && d.append(y, x);
    }
  } else {
    if (Ui(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = wi, s = null, o = Ci, h = u;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: s, method: c.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function zs(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function Wg(u, r, c) {
  let s = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return s.pathname === "/" ? s.pathname = `_root.${c}` : r && hl(s.pathname, r) === "/" ? s.pathname = `${r.replace(/\/$/, "")}/_root.${c}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${c}`, s;
}
async function Fg(u, r) {
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
function Ig(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Pg(u, r, c) {
  let s = await Promise.all(
    u.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let h = await Fg(d, c);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return np(
    s.flat(1).filter(Ig).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function Wh(u, r, c, s, o, d) {
  let h = (p, y) => c[y] ? p.route.id !== c[y].route.id : !0, g = (p, y) => (
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
function ep(u, r, { includeHydrateFallback: c } = {}) {
  return tp(
    u.map((s) => {
      let o = r.routes[s.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function tp(u) {
  return [...new Set(u)];
}
function lp(u) {
  let r = {}, c = Object.keys(u).sort();
  for (let s of c)
    r[s] = u[s];
  return r;
}
function np(u, r) {
  let c = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((s, o) => {
    let d = JSON.stringify(lp(o));
    return c.has(d) || (c.add(d), s.push({ key: d, link: o })), s;
  }, []);
}
function Ym() {
  let u = A.useContext(Fn);
  return zs(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function ap() {
  let u = A.useContext(Ui);
  return zs(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Os = A.createContext(void 0);
Os.displayName = "FrameworkContext";
function Xm() {
  let u = A.useContext(Os);
  return zs(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function up(u, r) {
  let c = A.useContext(Os), [s, o] = A.useState(!1), [d, h] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: x } = r, N = A.useRef(null);
  A.useEffect(() => {
    if (u === "render" && m(!0), u === "viewport") {
      let j = (V) => {
        V.forEach((Q) => {
          m(Q.isIntersecting);
        });
      }, D = new IntersectionObserver(j, { threshold: 0.5 });
      return N.current && D.observe(N.current), () => {
        D.disconnect();
      };
    }
  }, [u]), A.useEffect(() => {
    if (s) {
      let D = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [s]);
  let q = () => {
    o(!0);
  }, _ = () => {
    s(!1), m(!1);
  };
  return c ? u !== "intent" ? [d, N, {}] : [
    d,
    N,
    {
      onFocus: Ja(g, q),
      onBlur: Ja(p, _),
      onMouseEnter: Ja(y, q),
      onMouseLeave: Ja(b, _),
      onTouchStart: Ja(x, q)
    }
  ] : [!1, N, {}];
}
function Ja(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function ip({ page: u, ...r }) {
  let { router: c } = Ym(), s = A.useMemo(
    () => Tm(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return s ? /* @__PURE__ */ A.createElement(cp, { page: u, matches: s, ...r }) : null;
}
function rp(u) {
  let { manifest: r, routeModules: c } = Xm(), [s, o] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Pg(u, r, c).then(
      (h) => {
        d || o(h);
      }
    ), () => {
      d = !0;
    };
  }, [u, r, c]), s;
}
function cp({
  page: u,
  matches: r,
  ...c
}) {
  let s = on(), { manifest: o, routeModules: d } = Xm(), { basename: h } = Ym(), { loaderData: g, matches: p } = ap(), y = A.useMemo(
    () => Wh(
      u,
      r,
      p,
      s,
      o,
      s,
      "data"
    ),
    [u, r, p, o, s]
  ), b = A.useMemo(
    () => Wh(
      u,
      r,
      p,
      s,
      o,
      s,
      "assets"
    ),
    [u, r, p, o, s]
  ), x = A.useMemo(() => {
    if (u === s.pathname + s.search + s.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), j = !1;
    if (r.forEach((V) => {
      let Q = s.routes[V.route.id];
      !Q || !Q.hasLoader || (!y.some((K) => K.route.id === V.route.id) && V.route.id in g && d[V.route.id]?.shouldRevalidate || Q.hasClientLoader ? j = !0 : _.add(V.route.id));
    }), _.size === 0)
      return [];
    let U = Wg(u, h, "data");
    return D && _.size > 0 && U.searchParams.set(
      "_routes",
      r.filter((V) => _.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    g,
    s,
    o,
    s,
    y,
    r,
    u,
    d
  ]), N = A.useMemo(
    () => ep(b, o),
    [b, o]
  ), q = rp(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, x.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...c })), N.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "modulepreload", href: _, ...c })), q.map(({ key: _, link: D }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: _, nonce: c.nonce, ...D })
  )));
}
function rp(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var op = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  op && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function fp({
  basename: u,
  children: r,
  unstable_useTransitions: c,
  window: s
}) {
  let o = A.useRef();
  o.current == null && (o.current = Q1({ window: s, v5Compat: !0 }));
  let d = o.current, [h, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      c === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [c]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    Yg,
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
var Gm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Vm = A.forwardRef(
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
    viewTransition: x,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) {
    let { basename: D, unstable_useTransitions: U } = A.useContext(jt), Q = typeof y == "string" && Gm.test(y), V = Om(y, D);
    y = V.to;
    let k = Rg(y, { relative: o }), [ee, K, le] = up(
      s,
      q
    ), ae = yp(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: x,
      unstable_defaultShouldRevalidate: N,
      unstable_useTransitions: D
    });
    function $(Re) {
      r && r(Re), Re.defaultPrevented || ue(Re);
    }
    let pe = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ A.createElement(
        "a",
        {
          ...Y,
          ...le,
          href: Q.absoluteURL || K,
          onClick: Q.isExternal || d ? r : $,
          ref: rp(_, F),
          target: p,
          "data-discover": !Q && c === "render" ? "true" : void 0
        }
      )
    );
    return ee && !Q ? /* @__PURE__ */ A.createElement(A.Fragment, null, Se, /* @__PURE__ */ A.createElement(ip, { page: k })) : Se;
  }
);
Vm.displayName = "Link";
var dp = A.forwardRef(
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
    let x = tu(h, { relative: y.relative }), N = on(), q = A.useContext(Ui), { navigator: _, basename: D } = A.useContext(jt), U = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Sp(x) && g === !0, Q = _.encodeLocation ? _.encodeLocation(x).pathname : x.pathname, V = N.pathname, k = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    c || (V = V.toLowerCase(), k = k ? k.toLowerCase() : null, Q = Q.toLowerCase()), k && D && (k = hl(k, D) || k);
    const ee = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let K = V === Q || !o && V.startsWith(Q) && V.charAt(ee) === "/", le = k != null && (k === Q || !o && k.startsWith(Q) && k.charAt(Q.length) === "/"), ae = {
      isActive: K,
      isPending: le,
      isTransitioning: U
    }, I = K ? r : void 0, Se;
    typeof s == "function" ? Se = s(ae) : Se = [
      s,
      K ? "active" : null,
      le ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Re = typeof d == "function" ? d(ue) : d;
    return /* @__PURE__ */ A.createElement(
      Vm,
      {
        ...y,
        "aria-current": $,
        className: pe,
        ref: b,
        style: Re,
        to: m,
        viewTransition: g
      },
      typeof p == "function" ? p(ue) : p
    );
  }
);
dp.displayName = "NavLink";
var hp = A.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: s,
    replace: o,
    state: d,
    method: m = Ai,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: x,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) => {
    let { unstable_useTransitions: D } = A.useContext(jt), U = vp(), Q = bp(g, { relative: y }), V = h.toLowerCase() === "get" ? "get" : "post", k = typeof g == "string" && Gm.test(g), ee = (K) => {
      if (p && p(K), K.defaultPrevented) return;
      K.preventDefault();
      let le = K.nativeEvent.submitter, ae = le?.getAttribute("formmethod") || h, I = () => U(le || K.currentTarget, {
        fetcherKey: r,
        method: ae,
        navigate: c,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: x,
        unstable_defaultShouldRevalidate: N
      });
      D && c !== !1 ? A.startTransition(() => I()) : I();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: _,
        method: V,
        action: Q,
        onSubmit: s ? p : ee,
        ...q,
        "data-discover": !k && u === "render" ? "true" : void 0
      }
    );
  }
);
hp.displayName = "Form";
function mp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qm(u) {
  let r = A.useContext(Fn);
  return Le(r, mp(u)), r;
}
function yp(u, {
  target: r,
  replace: c,
  state: s,
  preventScrollReset: o,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ag(), b = on(), x = tu(u, { relative: d });
  return A.useCallback(
    (N) => {
      if (kg(N, r)) {
        N.preventDefault();
        let q = c !== void 0 ? c : Ia(b) === Ia(x), _ = () => y(u, {
          replace: q,
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
      x,
      c,
      s,
      r,
      u,
      s,
      d,
      m,
      g,
      p
    ]
  );
}
var gp = 0, pp = () => `__${String(++gp)}__`;
function vp() {
  let { router: u } = Qm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(jt), c = Bg(), s = u.fetch, o = u.navigate;
  return A.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: x } = $g(
        d,
        r
      );
      if (h.navigate === !1) {
        let N = h.fetcherKey || pp();
        await s(N, c, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: x,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await s(m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
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
    [s, o, r, c]
  );
}
function bp(u, { relative: r } = {}) {
  let { basename: c } = A.useContext(jt), s = A.useContext(ml);
  Le(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1), d = { ...tu(u || ".", { relative: r }) }, h = on();
  if (u == null) {
    d.search = m.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((x) => x).forEach((x) => g.append("index", x));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : dl([c, d.pathname])), Ia(d);
}
function Sp(u, { relative: r } = {}) {
  let c = A.useContext(Mm);
  Le(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = Qm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = tu(u, { relative: r });
  if (!c.isTransitioning)
    return !1;
  let d = hl(c.currentLocation.pathname, s) || c.currentLocation.pathname, h = hl(c.nextLocation.pathname, s) || c.nextLocation.pathname;
  return Ni(o.pathname, h) != null || Ni(o.pathname, d) != null;
}
var fs = { exports: {} }, nt = {};
var Fh;
function Ep() {
  if (Fh) return nt;
  Fh = 1;
  var u = As();
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
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, y, b) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: x == null ? null : "" + x,
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
    var y = h.T, b = s.p;
    try {
      if (h.T = null, s.p = 2, p) return p();
    } finally {
      h.T = y, s.p = b, s.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, x = g(b, y.crossOrigin), N = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? s.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: x,
          integrity: N,
          fetchPriority: Y
        }
      ) : b === "script" && s.d.X(p, {
        crossOrigin: x,
        integrity: N,
        fetchPriority: Y,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, lt.preinitModule = function(p, y) {
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
      var b = y.as, x = g(b, y.crossOrigin);
      s.d.L(p, b, {
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
  }, lt.preloadModule = function(p, y) {
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
  }, lt.useFormState = function(p, y, b) {
    return m.H.useFormState(p, y, b);
  }, lt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, lt.version = "19.2.3", lt;
}
var Ih;
function xp() {
  if (Ih) return fs.exports;
  Ih = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), fs.exports = Ep(), fs.exports;
}
var ds = { exports: {} }, $a = {}, hs = { exports: {} }, ms = {};
var Ph;
function Tp() {
  return Ph || (Ph = 1, (function(u) {
    function r(X, Y) {
      var G = X.length;
      X.push(q);
      e: for (; 0 < G; ) {
        var I = G - 1 >>> 1, ne = X[I];
        if (0 < s(ne, q))
          X[I] = q, X[G] = ne, G = I;
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
        e: for (var I = 0, ne = X.length, Oe = ne >>> 1; I < Oe; ) {
          var S = 2 * (I + 1) - 1, H = X[S], Z = S + 1, k = X[Z];
          if (0 > s(H, G))
            Z < ne && 0 > s(k, H) ? (X[I] = k, X[Z] = G, I = Z) : (X[I] = H, X[S] = G, I = S);
          else if (Z < ne && 0 > s(k, G))
            X[I] = k, X[Z] = G, I = Z;
          else break e;
        }
      }
      return q;
    }
    function s(X, q) {
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
    var p = [], y = [], b = 1, x = null, N = 3, q = !1, _ = !1, D = !1, U = !1, Q = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function ee(X) {
      for (var Y = c(y); Y !== null; ) {
        if (Y.callback === null) s(y);
        else if (Y.startTime <= X)
          s(y), Y.sortIndex = Y.expirationTime, r(p, Y);
        else break;
        Y = c(y);
      }
    }
    function K(X) {
      if (D = !1, ee(X), !_)
        if (c(p) !== null)
          _ = !0, le || (le = !0, _e());
        else {
          var Y = c(y);
          Y !== null && Ve(K, Y.startTime - X);
        }
    }
    var le = !1, ue = -1, $ = 5, pe = -1;
    function Re() {
      return D ? !0 : !(u.unstable_now() - pe < $);
    }
    function at() {
      if (D = !1, le) {
        var X = u.unstable_now();
        pe = X;
        var q = !0;
        try {
          e: {
            _ = !1, j && (j = !1, Q(ue), ue = -1), Y = !0;
            var G = N;
            try {
              t: {
                for (ee(X), x = c(p); x !== null && !(x.expirationTime > X && pe()); ) {
                  var fe = x.callback;
                  if (typeof fe == "function") {
                    x.callback = null, N = x.priorityLevel;
                    var Ee = fe(
                      x.expirationTime <= X
                    );
                    if (X = u.unstable_now(), typeof Ee == "function") {
                      x.callback = Ee, ee(X), Y = !0;
                      break t;
                    }
                    x === c(p) && s(p), ee(X);
                  } else s(p);
                  x = c(p);
                }
                if (x !== null) Y = !0;
                else {
                  var ne = c(y);
                  ne !== null && Ve(
                    K,
                    ne.startTime - X
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              x = null, N = G, q = !1;
            }
            q = void 0;
          }
        } finally {
          q ? Ee() : le = !1;
        }
      }
    }
    var Ee;
    if (typeof K == "function")
      Ee = function() {
        K(at);
      };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), He = Be.port2;
      Be.port1.onmessage = at, Ee = function() {
        He.postMessage(null);
      };
    } else
      Ee = function() {
        V(at, 0);
      };
    function Je(X, q) {
      ue = V(function() {
        X(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, u.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < X ? Math.floor(1e3 / X) : 5;
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
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return ne = G + ne, X = {
        id: b++,
        callback: q,
        priorityLevel: X,
        startTime: G,
        expirationTime: ne,
        sortIndex: -1
      }, G > fe ? (X.sortIndex = G, r(y, X), c(p) === null && X === c(y) && (D ? (V(ae), ae = -1) : D = !0, Ve(K, G - fe))) : (X.sortIndex = Ee, r(p, X), _ || q || (_ = !0, le || (le = !0, _e()))), X;
    }, u.unstable_shouldYield = pe, u.unstable_wrapCallback = function(X) {
      var Y = N;
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
  })(ms)), ms;
}
var em;
function Rp() {
  return em || (em = 1, hs.exports = Tp()), hs.exports;
}
var tm;
function Ap() {
  if (tm) return $a;
  tm = 1;
  var u = {};
  var r = Rp(), c = As(), s = xp();
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
      throw Error(s(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(s(188));
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
  var N = Object.assign, Y = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), F = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), pe = /* @__PURE__ */ Symbol.for("react.lazy"), Re = /* @__PURE__ */ Symbol.for("react.activity"), at = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ee = Symbol.iterator;
  function Be(e) {
    return e === null || typeof e != "object" ? null : (e = Ee && e[Ee] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var He = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === He ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case Q:
        return "Profiler";
      case V:
        return "StrictMode";
      case le:
        return "Suspense";
      case ue:
        return "SuspenseList";
      case Re:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case F:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Je(e.type) || "Memo";
        case pe:
          t = e._payload, e = e._init;
          try {
            return Je(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, Y = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ne = [], Oe = -1;
  function S(e) {
    return { current: e };
  }
  function H(e) {
    0 > Oe || (e.current = ne[Oe], ne[Oe] = null, Oe--);
  }
  function Z(e, t) {
    Oe++, ne[Oe] = e.current, e.current = t;
  }
  var $ = S(null), se = S(null), oe = S(null), te = S(null);
  function Be(e, t) {
    switch (Z(oe, t), Z(se, e), Z($, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? oh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = oh(t), e = fh(t, e);
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
    H(k), Z(k, e);
  }
  function ze() {
    B($), B(se), B(oe);
  }
  function Xt(e) {
    e.memoizedState !== null && Z(te, e);
    var t = $.current, l = fh(t, e.type);
    t !== l && (Z(se, e), Z($, l));
  }
  function Gt(e) {
    se.current === e && (B($), B(se)), te.current === e && (B(te), Va._currentValue = fe);
  }
  var ea, Hs;
  function Yl(e) {
    if (ea === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ea = t && t[1] || "", Hs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ea + e + Hs;
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
    return (l = e ? e.displayName || e.name : "") ? Ll(l) : "";
  }
  function v0(e, t) {
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
        return Qi(e.type, !1);
      case 11:
        return Qi(e.type.render, !1);
      case 1:
        return Qi(e.type, !0);
      case 31:
        return Ll("Activity");
      default:
        return "";
    }
  }
  function qs(e) {
    try {
      var t = "", l = null;
      do
        t += v0(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Zi = Object.prototype.hasOwnProperty, ki = r.unstable_scheduleCallback, Ki = r.unstable_cancelCallback, b0 = r.unstable_shouldYield, S0 = r.unstable_requestPaint, yt = r.unstable_now, E0 = r.unstable_getCurrentPriorityLevel, Ys = r.unstable_ImmediatePriority, Xs = r.unstable_UserBlockingPriority, ru = r.unstable_NormalPriority, x0 = r.unstable_LowPriority, Gs = r.unstable_IdlePriority, T0 = r.log, R0 = r.unstable_setDisableYieldValue, ta = null, gt = null;
  function yl(e) {
    if (typeof T0 == "function" && R0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(Pn, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : C0, A0 = Math.log, w0 = Math.LN2;
  function C0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (A0(e) / w0 | 0) | 0;
  }
  var cu = 256, su = 262144, ou = 4194304;
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
  function ou(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = n & 134217727;
    return h !== 0 ? (n = h & ~i, n !== 0 ? a = ql(n) : (f &= h, f !== 0 ? a = ql(f) : l || (l = h & ~e, l !== 0 && (a = ql(l))))) : (h = n & ~i, h !== 0 ? a = ql(h) : f !== 0 ? a = ql(f) : l || (l = n & ~e, l !== 0 && (a = ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function ea(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _0(e, t) {
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
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Ji(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ta(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function z0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var h = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var U = 31 - pt(l), L = 1 << U;
      h[U] = 0, v[U] = -1;
      var O = C[U];
      if (O !== null)
        for (C[U] = null, U = 0; U < O.length; U++) {
          var M = O[U];
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
  function Ks() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Uh(e.type));
  }
  function Js(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var gl = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + gl, it = "__reactProps$" + gl, fn = "__reactContainer$" + gl, Fi = "__reactEvents$" + gl, O0 = "__reactListeners$" + gl, N0 = "__reactHandles$" + gl, $s = "__reactResources$" + gl, aa = "__reactMarker$" + gl;
  function Ii(e) {
    delete e[Ie], delete e[it], delete e[Fi], delete e[O0], delete e[N0];
  }
  function on(e) {
    var t = e[Fe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[sn] || l[Fe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = vh(e); e !== null; ) {
            if (l = e[Ie]) return l;
            e = vh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function fn(e) {
    if (e = e[Fe] || e[sn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function na(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function mn(e) {
    var t = e[$s];
    return t || (t = e[$s] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[la] = !0;
  }
  var Ws = /* @__PURE__ */ new Set(), Fs = {};
  function Gl(e, t) {
    yn(e, t), yn(e + "Capture", t);
  }
  function yn(e, t) {
    for (Fs[e] = t, e = 0; e < t.length; e++)
      Ws.add(t[e]);
  }
  var M0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Is = {}, Ps = {};
  function D0(e) {
    return Zi.call(Ps, e) ? !0 : Zi.call(Is, e) ? !1 : M0.test(e) ? Ps[e] = !0 : (Is[e] = !0, !1);
  }
  function du(e, t, l) {
    if (D0(t))
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
  function du(e, t, l) {
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
  function kt(e, t, l, n) {
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
  function U0(e, t, l) {
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
      var t = eo(e) ? "checked" : "value";
      e._valueTracker = U0(
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
  function mu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var j0 = /[\n"\\]/g;
  function wt(e) {
    return e.replace(
      j0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function er(e, t, l, n, a, i, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? tr(e, f, At(t)) : l != null ? tr(e, f, At(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + At(h) : e.removeAttribute("name");
  }
  function lo(e, t, l, n, a, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Pi(e);
        return;
      }
      l = l != null ? "" + At(l) : "", t = t != null ? "" + At(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = h ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Pi(e);
  }
  function tr(e, t, l) {
    t === "number" && mu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function hn(e, t, l, n) {
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
        if (l != null) throw Error(s(92));
        if (X(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = At(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Pi(e);
  }
  function yn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var B0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function uo(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || B0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function io(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && uo(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && uo(e, i, t[i]);
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
  var L0 = /* @__PURE__ */ new Map([
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
  function yu(e) {
    return H0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kt() {
  }
  var nr = null;
  function ar(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vn = null, bn = null;
  function ro(e) {
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
              n = l[t], n.form === e.form && to(n);
          }
          break e;
        case "textarea":
          no(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && hn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ur = !1;
  function co(e, t, l) {
    if (ur) return e(t, l);
    ur = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ur = !1, (vn !== null || bn !== null) && (li(), vn && (t = vn, e = bn, bn = vn = null, ro(t), e)))
        for (t = 0; t < e.length; t++) ro(e[t]);
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
        s(231, t, typeof l)
      );
    return l;
  }
  var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ir = !1;
  if (Jt)
    try {
      var ua = {};
      Object.defineProperty(ua, "passive", {
        get: function() {
          ir = !0;
        }
      }), window.addEventListener("test", ua, ua), window.removeEventListener("test", ua, ua);
    } catch {
      ir = !1;
    }
  var yl = null, rr = null, yu = null;
  function co() {
    if (yu) return yu;
    var e, t = rr, l = t.length, n, a = "value" in yl ? yl.value : yl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === a[i - n]; n++) ;
    return yu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function gu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pu() {
    return !0;
  }
  function oo() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vu : oo, this.isPropagationStopped = oo, this;
    }
    return N(t.prototype, {
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
  var Xl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bu = rt(Vl), ca = N({}, Vl, { view: 0, detail: 0 }), q0 = rt(ca), cr, sr, sa, Su = N({}, ca, {
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
  }), fo = rt(Su), Y0 = N({}, Su, { dataTransfer: 0 }), X0 = rt(Y0), G0 = N({}, ca, { relatedTarget: 0 }), or = rt(G0), V0 = N({}, Vl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q0 = rt(V0), Z0 = N({}, Vl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), k0 = rt(Z0), K0 = N({}, Vl, { data: 0 }), ho = rt(K0), J0 = {
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
  }, $0 = {
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
  }, W0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function F0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = W0[e]) ? !!t[e] : !1;
  }
  function fr() {
    return F0;
  }
  var I0 = N({}, ca, {
    key: function(e) {
      if (e.key) {
        var t = J0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $0[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? gu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), P0 = rt(I0), ey = N({}, Su, {
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
  }), mo = rt(ey), ty = N({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fr
  }), ly = rt(ty), ny = N({}, Vl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ay = rt(ny), uy = N({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), iy = rt(uy), ry = N({}, Vl, {
    newState: 0,
    oldState: 0
  }), cy = rt(ry), sy = [9, 13, 27, 32], dr = Wt && "CompositionEvent" in window, oa = null;
  Wt && "documentMode" in document && (oa = document.documentMode);
  var oy = Wt && "TextEvent" in window && !oa, yo = Wt && (!dr || oa && 8 < oa && 11 >= oa), go = " ", po = !1;
  function vo(e, t) {
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
  function bo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function fy(e, t) {
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
  function dy(e, t) {
    if (Sn)
      return e === "compositionend" || !dr && vo(e, t) ? (e = so(), gu = rr = pl = null, Sn = !1, e) : null;
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
  var hy = {
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
    return t === "input" ? !!hy[e.type] : t === "textarea";
  }
  function Eo(e, t, l, n) {
    vn ? bn ? bn.push(n) : bn = [n] : vn = n, t = si(t, "onChange"), 0 < t.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, da = null;
  function my(e) {
    ah(e, 0);
  }
  function Eu(e) {
    var t = ua(e);
    if (to(t)) return e;
  }
  function xo(e, t) {
    if (e === "change") return t;
  }
  var To = !1;
  if (Wt) {
    var hr;
    if (Wt) {
      var mr = "oninput" in document;
      if (!mr) {
        var Ro = document.createElement("div");
        Ro.setAttribute("oninput", "return;"), mr = typeof Ro.oninput == "function";
      }
      hr = mr;
    } else hr = !1;
    To = hr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ao() {
    fa && (fa.detachEvent("onpropertychange", wo), da = fa = null);
  }
  function wo(e) {
    if (e.propertyName === "value" && Eu(da)) {
      var t = [];
      Eo(
        t,
        oa,
        e,
        ar(e)
      ), co(my, t);
    }
  }
  function yy(e, t, l) {
    e === "focusin" ? (Ao(), fa = t, da = l, fa.attachEvent("onpropertychange", wo)) : e === "focusout" && Ao();
  }
  function gy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Su(oa);
  }
  function yy(e, t) {
    if (e === "click") return Su(t);
  }
  function py(e, t) {
    if (e === "click") return Eu(t);
  }
  function vy(e, t) {
    if (e === "input" || e === "change")
      return Eu(t);
  }
  function by(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : by;
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
  function zo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Oo(e) {
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
  var Sy = Wt && "documentMode" in document && 11 >= document.documentMode, En = null, gr = null, ma = null, pr = !1;
  function No(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pr || bn == null || bn !== mu(n) || (n = bn, "selectionStart" in n && yr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
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
    ), e.push({ event: t, listeners: n }), t.target = bn)));
  }
  function Gl(e, t) {
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
  }, vr = {}, Mo = {};
  Wt && (Mo = document.createElement("div").style, "AnimationEvent" in window || (delete xn.animationend.animation, delete xn.animationiteration.animation, delete xn.animationstart.animation), "TransitionEvent" in window || delete xn.transitionend.transition);
  function Zl(e) {
    if (vr[e]) return vr[e];
    if (!Sn[e]) return e;
    var t = Sn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Mo)
        return vr[e] = t[l];
    return e;
  }
  var Do = Zl("animationend"), Uo = Zl("animationiteration"), jo = Zl("animationstart"), Ey = Zl("transitionrun"), xy = Zl("transitionstart"), Ty = Zl("transitioncancel"), Bo = Zl("transitionend"), Lo = /* @__PURE__ */ new Map(), br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  br.push("scrollEnd");
  function Bt(e, t) {
    Lo.set(e, t), Gl(t, [e]);
  }
  var Eu = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ct = [], En = 0, Sr = 0;
  function xu() {
    for (var e = En, t = Sr = En = 0; t < e; ) {
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
      i !== 0 && Ho(l, a, i);
    }
  }
  function Tu(e, t, l, n) {
    Ct[En++] = e, Ct[En++] = t, Ct[En++] = l, Ct[En++] = n, Sr |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Er(e, t, l, n) {
    return Tu(e, t, l, n), Ru(e);
  }
  function Ql(e, t) {
    return Tu(e, null, null, t), Ru(e);
  }
  function Ho(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Au(e) {
    if (50 < Ba)
      throw Ba = 0, Oc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Rn = {};
  function Ry(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new Ry(e, t, l, n);
  }
  function xr(e) {
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
  function qo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Au(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") xr(e) && (f = 1);
    else if (typeof e == "string")
      f = z1(
        e,
        l,
        k.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Re:
          return e = bt(31, l, t, a), e.elementType = Re, e.lanes = i, e;
        case D:
          return Zl(l.children, a, i, t);
        case V:
          f = 8, a |= 24;
          break;
        case Q:
          return e = bt(12, l, t, a | 2), e.elementType = Q, e.lanes = i, e;
        case le:
          return e = bt(13, l, t, a), e.elementType = le, e.lanes = i, e;
        case ue:
          return e = bt(19, l, t, a), e.elementType = ue, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                f = 10;
                break e;
              case K:
                f = 9;
                break e;
              case F:
                f = 11;
                break e;
              case $:
                f = 14;
                break e;
              case pe:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = bt(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Zl(e, t, l, n) {
    return e = bt(7, e, n, t), e.lanes = l, e;
  }
  function Tr(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e;
  }
  function Yo(e) {
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
  var Tn = [], Rn = 0, wu = null, ma = 0, Ot = [], zt = 0, gl = null, Xt = 1, Gt = "";
  function Wt(e, t) {
    Tn[Rn++] = ma, Tn[Rn++] = wu, wu = e, ma = t;
  }
  function Go(e, t, l) {
    zt[Ot++] = Vt, zt[Ot++] = Qt, zt[Ot++] = vl, vl = e;
    var n = Vt;
    e = Qt;
    var a = 32 - pt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pt(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Xt = 1 << 32 - pt(t) + a | l << a | n, Gt = i + e;
    } else
      Xt = 1 << i | l << a | n, Gt = e;
  }
  function Ar(e) {
    e.return !== null && (It(e, 1), Go(e, 1, 0));
  }
  function wr(e) {
    for (; e === wu; )
      wu = Tn[--Rn], Tn[Rn] = null, ma = Tn[--Rn], Tn[Rn] = null;
    for (; e === gl; )
      gl = Ot[--zt], Ot[zt] = null, Gt = Ot[--zt], Ot[zt] = null, Xt = Ot[--zt], Ot[zt] = null;
  }
  function Vo(e, t) {
    zt[Ot++] = Vt, zt[Ot++] = Qt, zt[Ot++] = vl, Vt = t.id, Qt = t.overflow, vl = e;
  }
  var Ie = null, ze = null, ge = !1, pl = null, Nt = !1, Cr = Error(s(519));
  function vl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ha(_t(t, e)), Cr;
  }
  function Qo(e) {
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
        he("invalid", t), lo(
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
        he("invalid", t), ao(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || ch(t.textContent, l) ? (n.popover != null && (he("beforetoggle", t), he("toggle", t)), n.onScroll != null && he("scroll", t), n.onScrollEnd != null && he("scrollend", t), n.onClick != null && (t.onclick = $t), t = !0) : t = !1, t || Sl(e, !0);
  }
  function Zo(e) {
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
          Ie = Ie.return;
      }
  }
  function Cn(e) {
    if (e !== Pe) return !1;
    if (!ge) return Zo(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Zc(e.type, e.memoizedProps)), l = !l), l && Me && Sl(e), Zo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = ph(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = ph(e);
    } else
      t === 27 ? (t = Me, Ul(e.type) ? (e = Wc, Wc = null, Me = e) : Me = t) : Me = Pe ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function kl() {
    ze = Ie = null, ge = !1;
  }
  function _r() {
    var e = pl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), pl = null), e;
  }
  function ha(e) {
    pl === null ? pl = [e] : pl.push(e);
  }
  var Or = S(null), Kl = null, Ft = null;
  function bl(e, t, l) {
    Z(Or, t._currentValue), t._currentValue = l;
  }
  function It(e) {
    e._currentValue = Or.current, H(Or);
  }
  function zr(e, t, l) {
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
          var h = i;
          i = a;
          for (var v = 0; v < t.length; v++)
            if (h.context === t[v]) {
              i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), zr(
                i.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          i = h.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(s(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), zr(f, l, e), f = null;
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
  function wn(e, t, l, n) {
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
          var h = a.type;
          vt(a.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (a === ye.current) {
        if (f = a.alternate, f === null) throw Error(s(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Xa) : e = [Xa]);
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
  function Cu(e) {
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
  function Jl(e) {
    Kl = e, Ft = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return ko($l, e);
  }
  function zu(e, t) {
    return $l === null && Wl(e), ko(e, t);
  }
  function ko(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Ft === null) {
      if (e === null) throw Error(s(308));
      Ft = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ft = Ft.next = t;
    return l;
  }
  var Ay = typeof AbortController < "u" ? AbortController : function() {
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
  }, wy = r.unstable_scheduleCallback, Cy = r.unstable_NormalPriority, Qe = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mr() {
    return {
      controller: new Ay(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && wy(Cy, function() {
      e.controller.abort();
    });
  }
  var va = null, Dr = 0, zn = 0, On = null;
  function _y(e, t) {
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
    return Dr++, t.then(Ko, Ko), t;
  }
  function Ko() {
    if (--Dr === 0 && va !== null) {
      On !== null && (On.status = "fulfilled");
      var e = va;
      va = null, zn = 0, On = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zy(e, t) {
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
  var Jo = Y.S;
  Y.S = function(e, t) {
    Md = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && _y(e, t), Jo !== null && Jo(e, t);
  };
  var $l = S(null);
  function Ur() {
    var e = $l.current;
    return e !== null ? e : _e.pooledCache;
  }
  function Ou(e, t) {
    t === null ? Z($l, $l.current) : Z($l, t.pool);
  }
  function $o() {
    var e = Ur();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var On = Error(s(460)), jr = Error(s(474)), zu = Error(s(542)), Nu = { then: function() {
  } };
  function Wo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Fo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then($t, $t), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Po(e), e;
      default:
        if (typeof t.status == "string") t.then(Kt, Kt);
        else {
          if (e = _e, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Po(e), e;
        }
        throw Fl = t, On;
    }
  }
  function Wl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Fl = l, On) : l;
    }
  }
  var Pl = null;
  function Io() {
    if (Pl === null) throw Error(o(459));
    var e = Pl;
    return Pl = null, e;
  }
  function Po(e) {
    if (e === Nn || e === Nu)
      throw Error(o(483));
  }
  var Mn = null, ba = 0;
  function Du(e) {
    var t = ba;
    return ba += 1, Mn === null && (Mn = []), Fo(Mn, e, t);
  }
  function va(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Du(e, t) {
    throw t.$$typeof === Y ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ef(e) {
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
      return R = $t(R, E), R.index = 0, R.sibling = null, R;
    }
    function i(R, E, w) {
      return R.index = w, e ? (w = R.alternate, w !== null ? (w = w.index, w < E ? (R.flags |= 67108866, E) : w) : (R.flags |= 67108866, E)) : (R.flags |= 1048576, E);
    }
    function f(R) {
      return e && R.alternate === null && (R.flags |= 67108866), R;
    }
    function h(R, E, w, B) {
      return E === null || E.tag !== 6 ? (E = Tr(w, R.mode, B), E.return = R, E) : (E = a(E, w), E.return = R, E);
    }
    function v(R, E, w, B) {
      var P = w.type;
      return P === D ? U(
        R,
        E,
        w.props.children,
        B,
        w.key
      ) : E !== null && (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === pe && Wl(P) === E.type) ? (E = a(E, w.props), va(E, w), E.return = R, E) : (E = Au(
        w.type,
        w.key,
        w.props,
        null,
        R.mode,
        B
      ), va(E, w), E.return = R, E);
    }
    function C(R, E, w, B) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== w.containerInfo || E.stateNode.implementation !== w.implementation ? (E = Rr(w, R.mode, B), E.return = R, E) : (E = a(E, w.children || []), E.return = R, E);
    }
    function U(R, E, w, B, P) {
      return E === null || E.tag !== 7 ? (E = Zl(
        w,
        R.mode,
        B,
        P
      ), E.return = R, E) : (E = a(E, w), E.return = R, E);
    }
    function L(R, E, w) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Tr(
          "" + E,
          R.mode,
          w
        ), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case _:
            return w = Au(
              E.type,
              E.key,
              E.props,
              null,
              R.mode,
              w
            ), va(w, E), w.return = R, w;
          case j:
            return E = Rr(
              E,
              R.mode,
              w
            ), E.return = R, E;
          case pe:
            return E = Wl(E), L(R, E, w);
        }
        if (X(E) || Be(E))
          return E = Zl(
            E,
            R.mode,
            w,
            null
          ), E.return = R, E;
        if (typeof E.then == "function")
          return L(R, Mu(E), w);
        if (E.$$typeof === ee)
          return L(
            R,
            _u(R, E),
            w
          );
        Du(R, E);
      }
      return null;
    }
    function O(R, E, w, B) {
      var P = E !== null ? E.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return P !== null ? null : h(R, E, "" + w, B);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return w.key === P ? v(R, E, w, B) : null;
          case j:
            return w.key === P ? C(R, E, w, B) : null;
          case pe:
            return w = Wl(w), O(R, E, w, B);
        }
        if (X(w) || Be(w))
          return P !== null ? null : U(R, E, w, B, null);
        if (typeof w.then == "function")
          return O(
            R,
            E,
            Mu(w),
            B
          );
        if (w.$$typeof === ee)
          return O(
            R,
            E,
            _u(R, w),
            B
          );
        Du(R, w);
      }
      return null;
    }
    function M(R, E, w, B, P) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return R = R.get(w) || null, h(E, R, "" + B, P);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _:
            return R = R.get(
              B.key === null ? w : B.key
            ) || null, v(E, R, B, P);
          case j:
            return R = R.get(
              B.key === null ? w : B.key
            ) || null, C(E, R, B, P);
          case pe:
            return B = Wl(B), M(
              R,
              E,
              w,
              B,
              P
            );
        }
        if (X(B) || Be(B))
          return R = R.get(w) || null, U(E, R, B, P, null);
        if (typeof B.then == "function")
          return M(
            R,
            E,
            w,
            Mu(B),
            P
          );
        if (B.$$typeof === ee)
          return M(
            R,
            E,
            w,
            _u(E, B),
            P
          );
        Du(E, B);
      }
      return null;
    }
    function J(R, E, w, L) {
      for (var F = null, ve = null, W = E, ce = E = 0, ye = null; W !== null && ce < w.length; ce++) {
        W.index > ce ? (ye = W, W = null) : ye = W.sibling;
        var be = z(
          R,
          W,
          w[ce],
          L
        );
        if (be === null) {
          W === null && (W = he);
          break;
        }
        e && W && be.alternate === null && t(R, W), E = i(be, E, ce), ve === null ? F = be : ve.sibling = be, ve = be, W = ye;
      }
      if (ce === w.length)
        return l(R, W), ge && It(R, ce), F;
      if (W === null) {
        for (; ce < w.length; ce++)
          W = H(R, w[ce], L), W !== null && (E = i(
            W,
            E,
            ce
          ), ve === null ? F = W : ve.sibling = W, ve = W);
        return ge && It(R, ce), F;
      }
      for (W = n(W); ce < w.length; ce++)
        ye = M(
          W,
          R,
          ce,
          w[ce],
          L
        ), ye !== null && (e && ye.alternate !== null && W.delete(
          ye.key === null ? ce : ye.key
        ), E = i(
          he,
          E,
          ce
        ), ve === null ? F = ye : ve.sibling = ye, ve = ye);
      return e && W.forEach(function(ql) {
        return t(R, ql);
      }), ge && It(R, ce), F;
    }
    function P(R, E, w, L) {
      if (w == null) throw Error(o(151));
      for (var F = null, ve = null, W = E, ce = E = 0, ye = null, be = w.next(); W !== null && !be.done; ce++, be = w.next()) {
        W.index > ce ? (ye = W, W = null) : ye = W.sibling;
        var ql = z(R, W, be.value, L);
        if (ql === null) {
          W === null && (W = ye);
          break;
        }
        e && W && ql.alternate === null && t(R, W), E = i(ql, E, ce), ve === null ? F = ql : ve.sibling = ql, ve = ql, W = ye;
      }
      if (be.done)
        return l(R, W), ge && It(R, ce), F;
      if (W === null) {
        for (; !be.done; ce++, be = w.next())
          be = H(R, be.value, L), be !== null && (E = i(be, E, ce), ve === null ? F = be : ve.sibling = be, ve = be);
        return ge && It(R, ce), F;
      }
      for (W = n(W); !be.done; ce++, be = w.next())
        be = M(W, R, ce, be.value, L), be !== null && (e && be.alternate !== null && W.delete(be.key === null ? ce : be.key), E = i(be, E, ce), ve === null ? F = be : ve.sibling = be, ve = be);
      return e && W.forEach(function(Y1) {
        return t(R, Y1);
      }), ge && It(R, ce), F;
    }
    function Ce(R, E, w, B) {
      if (typeof w == "object" && w !== null && w.type === D && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            e: {
              for (var P = w.key; E !== null; ) {
                if (E.key === P) {
                  if (P = w.type, P === D) {
                    if (E.tag === 7) {
                      l(
                        R,
                        E.sibling
                      ), B = a(
                        E,
                        w.props.children
                      ), B.return = R, R = B;
                      break e;
                    }
                  } else if (E.elementType === P || typeof P == "object" && P !== null && P.$$typeof === pe && Wl(P) === E.type) {
                    l(
                      R,
                      E.sibling
                    ), B = a(E, w.props), va(B, w), B.return = R, R = B;
                    break e;
                  }
                  l(R, E);
                  break;
                } else t(R, E);
                E = E.sibling;
              }
              w.type === D ? (B = Zl(
                w.props.children,
                R.mode,
                B,
                w.key
              ), B.return = R, R = B) : (B = Au(
                w.type,
                w.key,
                w.props,
                null,
                R.mode,
                B
              ), va(B, w), B.return = R, R = B);
            }
            return f(R);
          case j:
            e: {
              for (P = w.key; E !== null; ) {
                if (E.key === P)
                  if (E.tag === 4 && E.stateNode.containerInfo === w.containerInfo && E.stateNode.implementation === w.implementation) {
                    l(
                      R,
                      E.sibling
                    ), B = a(E, w.children || []), B.return = R, R = B;
                    break e;
                  } else {
                    l(R, E);
                    break;
                  }
                else t(R, E);
                E = E.sibling;
              }
              B = Rr(w, R.mode, B), B.return = R, R = B;
            }
            return f(R);
          case pe:
            return w = Wl(w), Ce(
              R,
              E,
              w,
              B
            );
        }
        if (X(w))
          return J(
            R,
            E,
            w,
            B
          );
        if (Be(w)) {
          if (P = Be(w), typeof P != "function") throw Error(s(150));
          return w = P.call(w), te(
            R,
            E,
            w,
            B
          );
        }
        if (typeof w.then == "function")
          return Ce(
            R,
            E,
            Mu(w),
            B
          );
        if (w.$$typeof === ee)
          return Ce(
            R,
            E,
            _u(R, w),
            B
          );
        Du(R, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, E !== null && E.tag === 6 ? (l(R, E.sibling), B = a(E, w), B.return = R, R = B) : (l(R, E), B = Tr(w, R.mode, B), B.return = R, R = B), f(R)) : l(R, E);
    }
    return function(R, E, w, B) {
      try {
        pa = 0;
        var P = Ce(
          R,
          E,
          w,
          B
        );
        return zn = null, P;
      } catch (W) {
        if (W === On || W === zu) throw W;
        var ve = bt(29, W, null, R.mode);
        return ve.lanes = B, ve.return = R, ve;
      }
    };
  }
  var en = ef(!0), tf = ef(!1), xl = !1;
  function Br(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hr(e, t) {
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
  function xl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Se & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Au(e), Ho(e, null, l), t;
    }
    return Tu(e, n, t, l), Ru(e);
  }
  function ba(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Zs(e, l);
    }
  }
  function Lr(e, t) {
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
  function Sa() {
    if (qr) {
      var e = _n;
      if (e !== null) throw e;
    }
  }
  function Ea(e, t, l, n) {
    qr = !1;
    var a = e.updateQueue;
    Sl = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var v = h, C = v.next;
      v.next = null, f === null ? i = C : f.next = C, f = v;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== f && (h === null ? U.firstBaseUpdate = C : h.next = C, U.lastBaseUpdate = v));
    }
    if (i !== null) {
      var L = a.baseState;
      f = 0, U = C = v = null, h = i;
      do {
        var O = h.lane & -536870913, M = O !== h.lane;
        if (M ? (me & O) === O : (n & O) === O) {
          O !== 0 && O === Cn && (qr = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, te = h;
            O = t;
            var Ce = l;
            switch (te.tag) {
              case 1:
                if (J = te.payload, typeof J == "function") {
                  L = J.call(Ce, L, O);
                  break e;
                }
                L = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = te.payload, O = typeof J == "function" ? J.call(Ce, L, O) : J, O == null) break e;
                L = N({}, L, O);
                break e;
              case 2:
                Sl = !0;
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
          }, U === null ? (C = U = M, v = L) : U = U.next = M, f |= O;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      U === null && (v = L), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = U, i === null && (a.shared.lanes = 0), Cl |= f, e.lanes = f, e.memoizedState = L;
    }
  }
  function lf(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function nf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        lf(l[e], t);
  }
  var Dn = S(null), ju = S(0);
  function af(e, t) {
    e = sl, Z(ju, e), Z(Dn, t), sl = e | t.baseLanes;
  }
  function Yr() {
    Z(ju, sl), Z(Dn, Dn.current);
  }
  function Xr() {
    sl = ju.current, B(Dn), B(ju);
  }
  var St = S(null), Mt = null;
  function Tl(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(St, e), Mt === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Gr(e) {
    Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e);
  }
  function uf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e)) : wl();
  }
  function Rl() {
    Z(Xe, Xe.current), Z(St, St.current);
  }
  function Et(e) {
    H(St), Mt === e && (Mt = null), H(Xe);
  }
  var Xe = S(0);
  function ju(e) {
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
  var tl = 0, ie = null, Ae = null, Ze = null, Lu = !1, Un = !1, tn = !1, Hu = 0, Ra = 0, jn = null, Oy = 0;
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
    return tl = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Vf : uc, tn = !1, i = l(n, a), tn = !1, Un && (i = cf(
      t,
      l,
      n,
      a
    )), rf(e), i;
  }
  function rf(e) {
    Y.H = Ca;
    var t = Ae !== null && Ae.next !== null;
    if (Pt = 0, Qe = Ae = ce = null, Bu = !1, xa = 0, Dn = null, t) throw Error(s(300));
    e === null || Ze || (e = e.dependencies, e !== null && Cu(e) && (Ze = !0));
  }
  function cf(e, t, l, n) {
    ie = e;
    var a = 0;
    do {
      if (Mn && (Dn = null), xa = 0, Mn = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Qe = Ae = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      Y.H = Qf, i = t(l, n);
    } while (Un);
    return i;
  }
  function Ny() {
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
    if (Bu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Bu = !1;
    }
    Pt = 0, Qe = Ae = ce = null, Mn = !1, xa = Hu = 0, Dn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? ce.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ge() {
    if (Ae === null) {
      var e = ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ae.next;
    var t = Qe === null ? ce.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, Ae = e;
    else {
      if (e === null)
        throw ce.alternate === null ? Error(s(467)) : Error(s(310));
      Ae = e, e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null
      }, Qe === null ? ce.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Lu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Aa(e) {
    var t = Ra;
    return Ra += 1, jn === null && (jn = []), e = Fo(jn, e, t), t = ie, (Ze === null ? t.memoizedState : Ze.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Vf : uc), e;
  }
  function qu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ta(e);
      if (e.$$typeof === ee) return Pe(e);
    }
    throw Error(s(438, String(e)));
  }
  function Jr(e) {
    var t = null, l = ce.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ce.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Lu(), ce.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = at;
    return t.index++, l;
  }
  function el(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yu(e) {
    var t = Ge();
    return $r(t, Ae, e);
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
      var h = f = null, v = null, C = t, U = !1;
      do {
        var L = C.lane & -536870913;
        if (L !== C.lane ? (me & L) === L : (Pt & L) === L) {
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
            }), L === Cn && (U = !0);
          else if ((Pt & O) === O) {
            C = C.next, O === Cn && (U = !0);
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
            }, v === null ? (h = v = L, f = i) : v = v.next = L, ce.lanes |= O, Cl |= O;
          L = C.action, Pl && l(i, L), i = C.hasEagerState ? C.eagerState : l(i, L);
        } else
          O = {
            lane: L,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (h = v = O, f = i) : v = v.next = O, ce.lanes |= L, Cl |= L;
        C = C.next;
      } while (C !== null && C !== t);
      if (v === null ? f = i : v.next = h, !vt(i, e.memoizedState) && (Ze = !0, U && (l = _n, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Wr(e) {
    var t = Ge(), l = t.queue;
    if (l === null) throw Error(s(311));
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
  function cf(e, t, l) {
    var n = ce, a = Ge(), i = ge;
    if (i) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var f = !vt(
      (Ae || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, ke = !0), a = a.queue, Pr(df.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Un(
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
      i || (tl & 127) !== 0 || of(n, t, l);
    }
    return l;
  }
  function of(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = qu(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function ff(e, t, l, n) {
    t.value = l, t.getSnapshot = n, hf(t) && mf(e);
  }
  function df(e, t, l) {
    return l(function() {
      hf(t) && mf(e);
    });
  }
  function hf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l);
    } catch {
      return !0;
    }
  }
  function mf(e) {
    var t = kl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Fr(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), Pl) {
        ml(!0);
        try {
          l();
        } finally {
          ml(!1);
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
  function yf(e, t, l, n) {
    return e.baseState = l, $r(
      e,
      Ae,
      typeof n == "function" ? n : el
    );
  }
  function My(e, t, l, n, a) {
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
      Y.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, gf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function gf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = q.T, f = {};
      q.T = f;
      try {
        var m = l(a, n), v = Y.S;
        v !== null && v(f, m), pf(e, t, m);
      } catch (C) {
        Ir(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
      }
    } else
      try {
        i = l(a, n), pf(e, t, i);
      } catch (C) {
        Ir(e, t, C);
      }
  }
  function pf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        vf(e, t, n);
      },
      function(n) {
        return Ir(e, t, n);
      }
    ) : vf(e, t, l);
  }
  function vf(e, t, l) {
    t.status = "fulfilled", t.value = l, bf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, gf(e, l)));
  }
  function Ir(e, t, l) {
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
      var l = _e.formState;
      if (l !== null) {
        e: {
          var n = ce;
          if (ge) {
            if (ze) {
              t: {
                for (var a = ze, i = Nt; a.nodeType !== 8; ) {
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
                ze = Dt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            vl(n);
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
      ce,
      n
    ), n.dispatch = l, n = Fr(!1), i = ac.bind(
      null,
      ce,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = My.bind(
      null,
      ce,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function xf(e) {
    var t = Ge();
    return Tf(t, Ae, e);
  }
  function Tf(e, t, l) {
    if (t = $r(
      e,
      t,
      Sf
    )[0], e = Xu(ll)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Ta(t);
      } catch (f) {
        throw f === On ? zu : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ce.flags |= 2048, Un(
      9,
      { destroy: void 0 },
      Dy.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function Dy(e, t) {
    e.action = t;
  }
  function Rf(e) {
    var t = Ge(), l = Ae;
    if (l !== null)
      return Tf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Un(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ce.updateQueue, t === null && (t = Lu(), ce.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Af() {
    return Ge().memoizedState;
  }
  function Xu(e, t, l, n) {
    var a = ut();
    ce.flags |= e, a.memoizedState = Un(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Gu(e, t, l, n) {
    var a = Ge();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    Ae !== null && n !== null && Vr(n, Ae.memoizedState.deps) ? a.memoizedState = Un(t, i, l, n) : (ce.flags |= e, a.memoizedState = Un(
      1 | t,
      i,
      l,
      n
    ));
  }
  function wf(e, t) {
    Gu(8390656, 8, e, t);
  }
  function Pr(e, t) {
    Gu(2048, 8, e, t);
  }
  function Uy(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = Lu(), ce.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Cf(e) {
    var t = Ge().memoizedState;
    return Uy({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function _f(e, t) {
    return Vu(4, 2, e, t);
  }
  function zf(e, t) {
    return Vu(4, 4, e, t);
  }
  function Of(e, t) {
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
    l = l != null ? l.concat([e]) : null, Vu(4, 4, Of.bind(null, t, e), l);
  }
  function ec() {
  }
  function Mf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Vr(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Df(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Vr(t, n[1]))
      return n[0];
    if (n = e(), Pl) {
      ml(!0);
      try {
        e();
      } finally {
        ml(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function tc(e, t, l) {
    return l === void 0 || (tl & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Ud(), ie.lanes |= e, zl |= e, l);
  }
  function Uf(e, t, l, n) {
    return vt(l, t) ? l : Dn.current !== null ? (e = tc(e, l, n), vt(e, t) || (ke = !0), e) : (tl & 42) === 0 || (tl & 1073741824) !== 0 && (me & 261930) === 0 ? (ke = !0, e.memoizedState = l) : (e = Ud(), ie.lanes |= e, zl |= e, t);
  }
  function jf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var f = Y.T, m = {};
    Y.T = m, ac(e, !1, t, l);
    try {
      var v = a(), C = Y.S;
      if (C !== null && C(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var j = zy(
          v,
          n
        );
        Ra(
          e,
          t,
          U,
          Rt(e)
        );
      } else
        Ra(
          e,
          t,
          n,
          Rt(e)
        );
    } catch (L) {
      Ra(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        Rt()
      );
    } finally {
      G.p = i, f !== null && h.types !== null && (f.types = h.types), q.T = f;
    }
  }
  function jy() {
  }
  function lc(e, t, l, n) {
    if (e.tag !== 5) throw Error(o(476));
    var a = Bf(e).queue;
    jf(
      e,
      a,
      t,
      fe,
      l === null ? jy : function() {
        return Lf(e), l(n);
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
        lastRenderedReducer: el,
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
        lastRenderedReducer: el,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Lf(e) {
    var t = Bf(e);
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
  function Hf() {
    return Ge().memoizedState;
  }
  function qf() {
    return Ge().memoizedState;
  }
  function By(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Rt();
          e = El(l);
          var n = xl(t, e, l);
          n !== null && (dt(n, t, l), ba(n, t, l)), t = { cache: Mr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ly(e, t, l) {
    var n = Rt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Qu(e) ? Xf(t, l) : (l = Er(e, t, l, n), l !== null && (dt(l, e, n), Gf(l, t, n)));
  }
  function Yf(e, t, l) {
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
    if (Qu(e)) Xf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, h = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = h, vt(h, f))
            return Tu(e, t, a, 0), _e === null && xu(), !1;
        } catch {
        }
      if (l = Er(e, t, a, n), l !== null)
        return dt(l, e, n), Gf(l, t, n), !0;
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
    }, Vu(e)) {
      if (t) throw Error(s(479));
    } else
      t = Er(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Vu(e) {
    var t = e.alternate;
    return e === ce || t !== null && t === ce;
  }
  function Xf(e, t) {
    Un = Lu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Gf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Zs(e, l);
    }
  }
  var Aa = {
    readContext: Pe,
    use: qu,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useLayoutEffect: Le,
    useInsertionEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useSyncExternalStore: Le,
    useId: Le,
    useHostTransitionStatus: Le,
    useFormState: Le,
    useActionState: Le,
    useOptimistic: Le,
    useMemoCache: Le,
    useCacheRefresh: Le
  };
  Ca.useEffectEvent = He;
  var Vf = {
    readContext: et,
    use: Yu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: et,
    useEffect: wf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Xu(
        4194308,
        4,
        Of.bind(null, t, e),
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
      if (Pl) {
        ml(!0);
        try {
          e();
        } finally {
          ml(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ut();
      if (l !== void 0) {
        var a = l(t);
        if (Pl) {
          ml(!0);
          try {
            l(t);
          } finally {
            ml(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = Ly.bind(
        null,
        ce,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Fr(e);
      var t = e.queue, l = Yf.bind(null, ie, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = ut();
      return tc(l, e, t);
    },
    useTransition: function() {
      var e = Fr(!1);
      return e = jf.bind(
        null,
        ce,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ce, a = ut();
      if (ge) {
        if (l === void 0)
          throw Error(s(407));
        l = l();
      } else {
        if (l = t(), Oe === null)
          throw Error(o(349));
        (me & 127) !== 0 || of(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, wf(df.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Un(
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
      var e = ut(), t = _e.identifierPrefix;
      if (ge) {
        var l = Gt, n = Xt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Hu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Oy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: nc,
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
      return t.queue = l, t = ac.bind(
        null,
        ce,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Jr,
    useCacheRefresh: function() {
      return ut().memoizedState = By.bind(
        null,
        ce
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Se & 2) !== 0)
          throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, uc = {
    readContext: et,
    use: Yu,
    useCallback: Mf,
    useContext: et,
    useEffect: Pr,
    useImperativeHandle: Nf,
    useInsertionEffect: _f,
    useLayoutEffect: zf,
    useMemo: Df,
    useReducer: Xu,
    useRef: Af,
    useState: function() {
      return Yu(el);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Uf(
        l,
        Ae.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yu(el)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ta(e),
        t
      ];
    },
    useSyncExternalStore: sf,
    useId: Hf,
    useHostTransitionStatus: nc,
    useFormState: xf,
    useActionState: xf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return yf(l, Ae, e, t);
    },
    useMemoCache: Jr,
    useCacheRefresh: qf
  };
  uc.useEffectEvent = Cf;
  var Qf = {
    readContext: et,
    use: Yu,
    useCallback: Mf,
    useContext: et,
    useEffect: Pr,
    useImperativeHandle: Nf,
    useInsertionEffect: _f,
    useLayoutEffect: zf,
    useMemo: Df,
    useReducer: Wr,
    useRef: Af,
    useState: function() {
      return Wr(el);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ae === null ? tc(l, e, t) : Uf(
        l,
        Ae.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Wr(el)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ta(e),
        t
      ];
    },
    useSyncExternalStore: sf,
    useId: Hf,
    useHostTransitionStatus: nc,
    useFormState: Rf,
    useActionState: Rf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ae !== null ? yf(l, Ae, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Jr,
    useCacheRefresh: qf
  };
  Qf.useEffectEvent = Cf;
  function ic(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : N({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var rc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = El(n);
      a.payload = t, l != null && (a.callback = l), t = xl(e, a, n), t !== null && (dt(t, e, n), ba(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = El(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = xl(e, a, n), t !== null && (dt(t, e, n), ba(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Rt(), n = El(l);
      n.tag = 2, t != null && (n.callback = t), t = xl(e, n, l), t !== null && (dt(t, e, l), ba(t, e, l));
    }
  };
  function Zf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function kf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && rc.enqueueReplaceState(t, t.state, null);
  }
  function en(e, t) {
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
    xu(e);
  }
  function Jf(e) {
    console.error(e);
  }
  function $f(e) {
    xu(e);
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
  function cc(e, t, l) {
    return l = Tl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Zu(e, t);
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
      Wf(t, l, n), typeof a != "function" && (Ol === null ? Ol = /* @__PURE__ */ new Set([this]) : Ol.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Hy(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && wn(
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
            return l.flags |= 65536, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
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
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Cr && (e = Error(s(422), { cause: n }), ha(_t(e, l)))) : (n !== Cr && (t = Error(s(423), {
        cause: n
      }), ha(
        _t(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = cc(
        e.stateNode,
        n,
        a
      ), Lr(e, a), qe !== 4 && (qe = 2)), !1;
    var i = Error(s(520), { cause: n });
    if (i = _t(i, l), Da === null ? Da = [i] : Da.push(i), qe !== 4 && (qe = 2), t === null) return !0;
    n = _t(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = cc(l.stateNode, n, e), Hr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ol === null || !Ol.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Ff(a), If(
              a,
              e,
              l,
              n
            ), Lr(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var sc = Error(o(461)), ke = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? tf(t, null, l, n) : en(
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
    return Jl(t), n = Qr(
      e,
      t,
      l,
      f,
      i,
      a
    ), h = Zr(), e !== null && !Ze ? (kr(e, t, a), tl(e, t, a)) : (ge && h && Ar(t), t.flags |= 1, et(e, t, n, a), t.child);
  }
  function ed(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !xr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, td(
        e,
        t,
        i,
        n,
        a
      )) : (e = Au(
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
      if (l = l.compare, l = l !== null ? l : fa, l(f, n) && e.ref === t.ref)
        return tl(e, t, a);
    }
    return t.flags |= 1, e = $t(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function td(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (ke = !1, t.pendingProps = n = i, pc(e, a))
          (e.flags & 131072) !== 0 && (ke = !0);
        else
          return t.lanes = e.lanes, tl(e, t, a);
    }
    return oc(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ou(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? af(t, i) : Yr(), uf(t);
      else
        return n = t.lanes = 536870912, nd(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Ou(t, i.cachePool), af(t, i), wl(), t.memoizedState = null) : (e !== null && Ou(t, null), Yr(), wl());
    return tt(e, t, a, l), t.child;
  }
  function wa(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function nd(e, t, l, n, a) {
    var i = Ur();
    return i = i === null ? null : { parent: Ve._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ou(t, null), Yr(), uf(t), e !== null && _n(e, t, n, !0), t.childLanes = a, null;
  }
  function Zu(e, t) {
    return t = Ku(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ad(e, t, l) {
    return en(t, e.child, null, l), e = ku(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function qy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = ku(t, n), t.lanes = 536870912, _a(null, e);
        if (Gr(t), (e = Me) ? (e = gh(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: Xt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Yo(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return t.lanes = 536870912, null;
      }
      return Zu(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Gr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = ad(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (ke || _n(e, t, l, !1), a = (l & e.childLanes) !== 0, ke || a) {
        if (n = Oe, n !== null && (f = ks(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, kl(e, f), dt(n, e, f), sc;
        ni(), t = ad(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Me = Dt(f.nextSibling), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && Vo(t, e), t = ku(t, n), t.flags |= 4096;
      return t;
    }
    return e = $t(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function ku(e, t) {
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
    return Wl(t), l = Qr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Zr(), e !== null && !Ze ? (kr(e, t, a), tl(e, t, a)) : (ge && n && Ar(t), t.flags |= 1, et(e, t, l, a), t.child);
  }
  function ud(e, t, l, n, a, i) {
    return Wl(t), t.updateQueue = null, l = cf(
      t,
      n,
      l,
      a
    ), rf(e), n = Zr(), e !== null && !ke ? (kr(e, t, i), nl(e, t, i)) : (ge && n && Ar(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function id(e, t, l, n, a) {
    if (Wl(t), t.stateNode === null) {
      var i = Rn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Br(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : Rn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ic(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && rc.enqueueReplaceState(i, i.state, null), Ta(t, n, i, a), xa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var h = t.memoizedProps, v = en(l, h);
      i.props = v;
      var C = i.context, j = l.contextType;
      f = Rn, typeof j == "object" && j !== null && (f = et(j));
      var H = l.getDerivedStateFromProps;
      j = typeof H == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, j || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || C !== f) && kf(
        t,
        i,
        n,
        f
      ), xl = !1;
      var z = t.memoizedState;
      i.state = z, Ta(t, n, i, a), xa(), C = t.memoizedState, m || z !== C || xl ? (typeof H == "function" && (ic(
        t,
        l,
        L,
        n
      ), C = t.memoizedState), (v = xl || Zf(
        t,
        l,
        v,
        n,
        O,
        C,
        f
      )) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Lr(e, t), f = t.memoizedProps, j = ln(l, f), i.props = j, H = t.pendingProps, z = i.context, C = l.contextType, v = Rn, typeof C == "object" && C !== null && (v = et(C)), m = l.getDerivedStateFromProps, (C = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== H || z !== v) && kf(
        t,
        i,
        n,
        v
      ), Sl = !1, O = t.memoizedState, i.state = O, Ea(t, n, i, a), Sa();
      var M = t.memoizedState;
      f !== H || z !== M || xl || e !== null && e.dependencies !== null && _u(e.dependencies) ? (typeof m == "function" && (ic(
        t,
        l,
        h,
        n
      ), M = t.memoizedState), (j = xl || Zf(
        t,
        l,
        U,
        n,
        O,
        M,
        v
      ) || e !== null && e.dependencies !== null && Cu(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, M, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        M,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = v, n = U) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, ku(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Il(
      t,
      e.child,
      null,
      a
    ), t.child = Il(
      t,
      null,
      l,
      a
    )) : et(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = tl(
      e,
      t,
      a
    ), e;
  }
  function rd(e, t, l, n) {
    return Jl(), t.flags |= 256, tt(e, t, l, n), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(e) {
    return { baseLanes: e, cachePool: $o() };
  }
  function hc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Tt), e;
  }
  function cd(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Al(t) : wl(), (e = Me) ? (e = gh(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: Xt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Yo(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return $c(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = n.children;
      return n = n.fallback, a ? (Rl(), a = t.mode, h = Ku(
        { mode: "hidden", children: h },
        a
      ), n = Zl(
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
    if (v !== null && (h = v.dehydrated, h !== null)) {
      if (i)
        t.flags & 256 ? (Al(t), t.flags &= -257, t = yc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Rl(), t.child = e.child, t.flags |= 128, t = null) : (Rl(), h = n.fallback, a = t.mode, n = Ku(
          { mode: "visible", children: n.children },
          a
        ), h = Zl(
          h,
          a,
          l,
          null
        ), h.flags |= 2, n.return = t, h.return = t, n.sibling = h, t.child = n, Il(
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
        f = C, n = Error(o(419)), n.stack = "", n.digest = f, ga({ value: n, source: null, stack: null }), t = yc(
          e,
          t,
          l
        );
      } else if (ke || _n(e, t, l, !1), f = (l & e.childLanes) !== 0, ke || f) {
        if (f = Oe, f !== null && (n = ks(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, kl(e, n), dt(f, e, n), sc;
        Jc(m) || ni(), t = yc(
          e,
          t,
          l
        );
      } else
        Jc(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Me = Dt(
          m.nextSibling
        ), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && Vo(t, e), t = mc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Rl(), h = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = $t(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? h = $t(
      C,
      h
    ) : (h = Zl(
      h,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, _a(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = dc(l) : (a = m.cachePool, a !== null ? (v = Qe._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = $o(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = hc(
      e,
      f,
      l
    ), t.memoizedState = fc, _a(e.child, n)) : (Al(t), l = e.child, e = l.sibling, l = Ft(l, {
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
  function Ku(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function yc(e, t, l) {
    return en(t, e.child, null, l), e = mc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function cd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), zr(e.return, t, l);
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
  function od(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = Xe.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Z(Xe, f), et(e, t, n, l), n = ge ? ma : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && cd(e, l, t);
        else if (e.tag === 19)
          cd(e, l, t);
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
          if (e = a.alternate, e !== null && ju(e) === null) {
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
  function tl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Cl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (wn(
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
      for (e = t.child, l = $t(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = $t(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function pc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && _u(e)));
  }
  function Yy(e, t, l) {
    switch (t.tag) {
      case 3:
        Ye(t, t.stateNode.containerInfo), bl(t, Ve, e.memoizedState.cache), kl();
        break;
      case 27:
      case 5:
        In(t);
        break;
      case 4:
        Ye(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Gr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Al(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? cd(e, t, l) : (Al(t), e = nl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Tl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (wn(
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
        bl(t, Ve, e.memoizedState.cache);
    }
    return tl(e, t, l);
  }
  function fd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!pc(e, l) && (t.flags & 128) === 0)
          return ke = !1, Yy(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      ke = !1, ge && (t.flags & 1048576) !== 0 && Go(t, ya, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Il(t.elementType), t.type = e, typeof e == "function")
            xr(e) ? (n = ln(e, n), t.tag = 1, t = id(
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
                t.tag = 11, t = Pf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === I) {
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
            throw t = Je(e) || e, Error(s(306, t, ""));
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
        return n = t.type, a = en(
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
          if (Ye(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Hr(e, t), Ea(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, bl(t, Ve, n), n !== i.cache && Nr(
            t,
            [Ve],
            l,
            !0
          ), Sa(), n = f.element, i.isDehydrated)
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
                Error(s(424)),
                t
              ), ga(a), t = rd(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Dt(e.firstChild), Pe = t, ge = !0, bl = null, Nt = !0, l = tf(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (kl(), n === a) {
              t = tl(
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
        return Ku(e, t), e === null ? (l = xh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = oi(
          oe.current
        ).createElement(l), n[Ie] = t, n[it] = e, lt(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = xh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Xt(t), e === null && ge && (n = t.stateNode = bh(
          t.type,
          t.pendingProps,
          oe.current
        ), Pe = t, Nt = !0, a = Me, Ul(t.type) ? (Wc = a, Me = Dt(n.firstChild)) : Me = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), ku(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = Me) && (n = g1(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Pe = t, Me = Dt(n.firstChild), Nt = !1, a = !0) : a = !1), a || Sl(t)), Xt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Zc(a, i) ? n = null : f !== null && Zc(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Qr(
          e,
          t,
          Ny,
          null,
          null,
          l
        ), Xa._currentValue = a), ku(e, t), et(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = Me) && (l = p1(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Ie = t, ze = null, e = !0) : e = !1), e || vl(t)), null;
      case 13:
        return cd(e, t, l);
      case 4:
        return Ye(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = Il(
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
        return n = t.pendingProps, bl(t, t.type, n.value), et(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Jl(t), a = Pe(a), n = n(a), t.flags |= 1, et(e, t, n, l), t.child;
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
        return qy(e, t, l);
      case 22:
        return ld(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Jl(t), n = Pe(Ve), e === null ? (a = Ur(), a === null && (a = _e, i = Mr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Br(t), bl(t, Ve, a)) : ((e.lanes & l) !== 0 && (Hr(e, t), Ea(t, null, null, l), Sa()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), bl(t, Ve, n)) : (n = i.cache, bl(t, Ve, n), n !== a.cache && Nr(
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
    throw Error(s(156, t.tag));
  }
  function ll(e) {
    e.flags |= 4;
  }
  function vc(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Hd()) e.flags |= 8192;
        else
          throw Fl = Nu, jr;
    } else e.flags &= -16777217;
  }
  function dd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ch(t))
      if (Hd()) e.flags |= 8192;
      else
        throw Fl = Nu, jr;
  }
  function $u(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Vs() : 536870912, e.lanes |= t, Yn |= t);
  }
  function Ca(e, t) {
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
  function Ne(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function Xy(e, t, l) {
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
        return Ne(t), null;
      case 1:
        return Ne(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), It(Ve), Ue(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (An(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _r())), Ne(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (al(t), i !== null ? (De(t), dd(t, i)) : (De(t), vc(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (al(t), De(t), dd(t, i)) : (De(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && al(t), De(t), vc(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (uu(t), l = re.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ne(t), null;
          }
          e = $.current, Cn(t) ? Qo(t) : (e = bh(a, n, l), t.stateNode = e, al(t));
        }
        return Ne(t), null;
      case 5:
        if (uu(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ll(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ne(t), null;
          }
          if (i = $.current, Cn(t))
            Qo(t);
          else {
            var f = si(
              re.current
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
            n && ll(t);
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
          e.memoizedProps !== n && ll(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = re.current, An(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Ie, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Ie] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || ch(e.nodeValue, l)), e || Sl(t, !0);
          } else
            e = si(e).createTextNode(
              n
            ), e[Fe] = t, t.stateNode = e;
        }
        return Ne(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = An(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Fe] = t;
            } else
              kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ne(t), e = !1;
          } else
            l = _r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Ne(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = An(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[Fe] = t;
            } else
              kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ne(t), a = !1;
          } else
            a = _r(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return Et(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ju(t, t.updateQueue), Ne(t), null);
      case 4:
        return ze(), e === null && Yc(t.stateNode.containerInfo), De(t), null;
      case 10:
        return It(t.type), Ne(t), null;
      case 19:
        if (H(Xe), n = t.memoizedState, n === null) return Ne(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Ca(n, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, za(n, !1), e = i.updateQueue, t.updateQueue = e, $u(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    qo(l, e), l = l.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && Wt(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > Pu && (t.flags |= 128, a = !0, Ca(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = ju(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ju(t, e), Ca(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ge)
                return Ne(t), null;
            } else
              2 * yt() - n.renderingStartTime > Pu && l !== 536870912 && (t.flags |= 128, a = !0, Ca(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Xe.current, Z(
          Xe,
          a ? l & 1 | 2 : l & 1
        ), ge && Wt(t, n.treeForkCount), e) : (Ne(t), null);
      case 22:
      case 23:
        return Et(t), Xr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), l = t.updateQueue, l !== null && Ju(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && H($l), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), It(Ve), Ne(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Gy(e, t) {
    switch (wr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return It(Ve), Ue(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return uu(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(s(340));
          kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Xe), null;
      case 4:
        return Ue(), null;
      case 10:
        return It(t.type), null;
      case 22:
      case 23:
        return Et(t), Xr(), e !== null && H($l), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return It(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hd(e, t) {
    switch (wr(t), t.tag) {
      case 3:
        It(Ve), Ue();
        break;
      case 26:
      case 27:
      case 5:
        uu(t);
        break;
      case 4:
        Ue();
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
        It(t.type);
        break;
      case 22:
      case 23:
        Et(t), Xr(), e !== null && H($l);
        break;
      case 24:
        It(Ve);
    }
  }
  function _a(e, t) {
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
  function Al(e, t, l) {
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
              } catch (U) {
                Te(
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
      Te(t, t.return, U);
    }
  }
  function md(e) {
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
    l.props = ln(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Te(e, t, n);
    }
  }
  function Oa(e, t) {
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
  function Vt(e, t) {
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
  function bc(e, t, l) {
    try {
      var n = e.stateNode;
      o1(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function pd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || pd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ml(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
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
  function $u(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Ml(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for ($u(e, t, l), e = e.sibling; e !== null; )
        $u(e, t, l), e = e.sibling;
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
  var ul = !1, Ke = !1, xc = !1, bd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Vy(e, t) {
    if (e = e.containerInfo, Vc = pi, e = Oo(e), yr(e)) {
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
            var f = 0, h = -1, v = -1, C = 0, U = 0, L = e, O = null;
            t: for (; ; ) {
              for (var M; L !== l || a !== 0 && L.nodeType !== 3 || (h = f + a), L !== i || n !== 0 && L.nodeType !== 3 || (v = f + n), L.nodeType === 3 && (f += L.nodeValue.length), (M = L.firstChild) !== null; )
                O = L, L = M;
              for (; ; ) {
                if (L === e) break t;
                if (O === l && ++C === a && (h = f), O === i && ++U === n && (v = f), (M = L.nextSibling) !== null) break;
                L = O, O = L.parentNode;
              }
              L = M;
            }
            l = h === -1 || v === -1 ? null : { start: h, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Qc = { focusedElem: e, selectionRange: l }, pi = !1, We = t; We !== null; )
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
                  var J = en(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    J,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (te) {
                  Te(
                    l,
                    l.return,
                    te
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
        ul(e, l), n & 4 && _a(5, l);
        break;
      case 1:
        if (ul(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Te(l, l.return, f);
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
            } catch (f) {
              Te(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && md(l), n & 512 && Na(l, l.return);
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
        rl(e, l), t === null && n & 4 && gd(l), n & 512 && Na(l, l.return);
        break;
      case 12:
        ul(e, l);
        break;
      case 31:
        rl(e, l), n & 4 && Td(e, l);
        break;
      case 13:
        rl(e, l), n & 4 && Rd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Iy.bind(
          null,
          l
        ), v1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ul, !n) {
          t = t !== null && t.memoizedState !== null || Ke, a = ul;
          var i = Ke;
          ul = n, (Ke = t) && !i ? cl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ul(e, l), nl = a, ke = i;
        }
        break;
      case 30:
        break;
      default:
        ul(e, l);
    }
  }
  function Ed(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ed(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, ct = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; )
      xd(e, t, l), l = l.sibling;
  }
  function xd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(Pn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        ke || Vt(l, t), al(
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
        ke || Vt(l, t);
      case 6:
        if (n = je, a = ct, je = null, il(
          e,
          t,
          l
        ), je = n, ct = a, je !== null)
          if (ct)
            try {
              (De.nodeType === 9 ? De.body : De.nodeName === "HTML" ? De.ownerDocument.body : De).removeChild(l.stateNode);
            } catch (i) {
              Te(
                l,
                t,
                i
              );
            }
          else
            try {
              De.removeChild(l.stateNode);
            } catch (i) {
              Te(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        je !== null && (ct ? (e = je, mh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Jn(e)) : mh(je, l.stateNode));
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
        Al(2, l, t), ke || Al(4, l, t), al(
          e,
          t,
          l
        );
        break;
      case 1:
        Ke || (Zt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && yd(
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
        ke = (n = ke) || l.memoizedState !== null, al(
          e,
          t,
          l
        ), ke = n;
        break;
      default:
        al(
          e,
          t,
          l
        );
    }
  }
  function Td(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        kn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function Rd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        kn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function Qy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new bd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new bd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Fu(e, t) {
    var l = Qy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Py.bind(null, e, n);
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
          h = h.return;
        }
        if (je === null) throw Error(o(160));
        xd(i, f, a), je = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
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
                      i = a.getElementsByTagName("title")[0], (!i || i[la] || i[Fe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), tt(i, n, l), i[Fe] = e, $e(i), n = i;
                      break e;
                    case "link":
                      var f = Ah(
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
                      if (f = Ah(
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
                      throw Error(s(468, n));
                  }
                  i[Fe] = e, $e(i), n = i;
                }
                e.stateNode = n;
              } else
                wh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Rh(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? wh(
              a,
              e.type,
              e.stateNode
            ) : Rh(
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
            yn(a, "");
          } catch (J) {
            Te(e, e.return, J);
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
            Te(e, e.return, J);
          }
        }
        break;
      case 3:
        if (hi = null, a = Lt, Lt = fi(t.containerInfo), st(t, e), Lt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            kn(t.containerInfo);
          } catch (J) {
            Te(e, e.return, J);
          }
        xc && (xc = !1, wd(e));
        break;
      case 4:
        n = Ht, Ht = oi(
          e.stateNode.containerInfo
        ), st(t, e), ot(e), Lt = n;
        break;
      case 12:
        st(t, e), ot(e);
        break;
      case 31:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 13:
        st(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Pu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = ul, j = Ke;
        if (ul = C || a, Ke = j || v, st(t, e), Ke = j, ul = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || ul || Ke || nn(e)), l = null, t = e; ; ) {
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
                } catch (J) {
                  Te(v, v.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (J) {
                  Te(v, v.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var M = v.stateNode;
                  a ? yh(M, !0) : yh(v.stateNode, !1);
                } catch (J) {
                  Te(v, v.return, J);
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
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
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
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Sc(e);
            Wu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (pn(f, ""), l.flags &= -33);
            var m = Sc(e);
            Wu(e, m, f);
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
        Te(e, e.return, U);
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
  function ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Sd(e, t.alternate, t), t = t.sibling;
  }
  function tn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Al(4, t, t.return), tn(t);
          break;
        case 1:
          Vt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && yd(
            t,
            t.return,
            l
          ), tn(t);
          break;
        case 27:
          La(t.stateNode);
        case 26:
        case 5:
          Vt(t, t.return), tn(t);
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
          ), _a(4, i);
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
              Te(n, n.return, C);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var h = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  lf(v[a], m);
            } catch (C) {
              Te(n, n.return, C);
            }
          }
          l && f & 64 && md(i), Na(i, i.return);
          break;
        case 27:
          vd(i);
        case 26:
        case 5:
          cl(
            a,
            i,
            l
          ), l && n === null && f & 4 && gd(i), Na(i, i.return);
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
          ), l && f & 4 && Td(a, i);
          break;
        case 13:
          cl(
            a,
            i,
            l
          ), l && f & 4 && Rd(a, i);
          break;
        case 22:
          i.memoizedState === null && cl(
            a,
            i,
            l
          ), Oa(i, i.return);
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ya(l));
  }
  function Rc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function Lt(e, t, l, n) {
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
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && _a(9, t);
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
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : za(e, t) : i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, jn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Tc(f, t);
        break;
      case 24:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && Rc(t.alternate, t);
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
  function jn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, h = l, v = n, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          jn(
            i,
            f,
            h,
            v,
            a
          ), _a(8, f);
          break;
        case 23:
          break;
        case 22:
          var U = f.stateNode;
          f.memoizedState !== null ? U._visibility & 2 ? jn(
            i,
            f,
            h,
            v,
            a
          ) : za(
            i,
            f
          ) : (U._visibility |= 2, jn(
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
          jn(
            i,
            f,
            h,
            v,
            a
          ), a && C & 2048 && Rc(f.alternate, f);
          break;
        default:
          jn(
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
  function za(e, t) {
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
            za(l, n);
        }
        t = t.sibling;
      }
  }
  var Na = 8192;
  function Bn(e, t, l) {
    if (e.subtreeFlags & Na)
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
        Bn(
          e,
          t,
          l
        ), e.flags & Da && e.memoizedState !== null && O1(
          l,
          Ht,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Bn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Ht;
        Ht = oi(e.stateNode.containerInfo), Bn(
          e,
          t,
          l
        ), Ht = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Na, Na = 16777216, Bn(
          e,
          t,
          l
        ), Na = n) : Bn(
          e,
          t,
          l
        ));
        break;
      default:
        Bn(
          e,
          t,
          l
        );
    }
  }
  function zd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ma(e) {
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
      zd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Od(e), e = e.sibling;
  }
  function Od(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ma(e), e.flags & 2048 && Al(9, e, e.return);
        break;
      case 3:
        Ma(e);
        break;
      case 12:
        Ma(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Fu(e)) : Ma(e);
        break;
      default:
        Ma(e);
    }
  }
  function Fu(e) {
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
      zd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, t, t.return), Fu(t);
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
  function Nd(e, t) {
    for (; We !== null; ) {
      var l = We;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Al(8, l, t);
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
  var Zy = {
    getCacheForType: function(e) {
      var t = Pe(Ve), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Pe(Ve).controller.signal;
    }
  }, ky = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, Oe = null, de = null, me = 0, Te = 0, xt = null, _l = !1, qn = !1, Ac = !1, sl = 0, qe = 0, zl = 0, an = 0, wc = 0, Tt = 0, Yn = 0, ja = null, ft = null, Cc = !1, Pu = 0, Md = 0, ei = 1 / 0, ti = null, Ol = null, Je = 0, Nl = null, Xn = null, ol = 0, _c = 0, zc = null, Dd = null, Ba = 0, Oc = null;
  function Rt() {
    return (xe & 2) !== 0 && me !== 0 ? me & -me : Y.T !== null ? Bc() : Ks();
  }
  function Ud() {
    if (Tt === 0)
      if ((me & 536870912) === 0 || ge) {
        var e = su;
        su <<= 1, (su & 3932160) === 0 && (su = 262144), Tt = e;
      } else Tt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), Tt;
  }
  function dt(e, t, l) {
    (e === _e && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Yn(e, 0), zl(
      e,
      me,
      Tt,
      !1
    )), ta(e, l), ((Se & 2) === 0 || e !== _e) && (e === _e && ((Se & 2) === 0 && (ln |= l), qe === 4 && zl(
      e,
      me,
      Tt,
      !1
    )), Qt(e));
  }
  function jd(e, t, l) {
    if ((xe & 6) !== 0) throw Error(o(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || la(e, t), a = n ? $y(e, t) : Mc(e, t, !0), i = n;
    do {
      if (a === 0) {
        Hn && !n && zl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Ky(l)) {
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
              if (v && (Gn(m, f).flags |= 256), f = Mc(
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
          Yn(e, 0), zl(e, t, 0, !0);
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
              zl(
                n,
                t,
                Tt,
                !wl
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
          if ((t & 62914560) === t && (a = Iu + 300 - yt(), 10 < a)) {
            if (zl(
              n,
              t,
              Tt,
              !_l
            ), fu(n, 0, !0) !== 0) break e;
            ol = t, n.timeoutHandle = dh(
              Bd.bind(
                null,
                n,
                l,
                ft,
                ti,
                Cc,
                t,
                Tt,
                ln,
                Ln,
                wl,
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
            ti,
            Cc,
            t,
            Tt,
            ln,
            Ln,
            wl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Qt(e);
  }
  function Bd(e, t, l, n, a, i, f, m, v, C, j, H, z, M) {
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
      }, _d(
        t,
        i,
        L
      );
      var J = (i & 62914560) === i ? Pu - yt() : (i & 4194048) === i ? Md - yt() : 0;
      if (J = N1(
        H,
        J
      ), J !== null) {
        ol = i, e.cancelPendingCommit = J(
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
            U,
            L,
            null,
            O,
            M
          )
        ), zl(e, i, f, !C);
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
  function Ky(e) {
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
    l !== 0 && Qs(e, l, t);
  }
  function ti() {
    return (Se & 6) === 0 ? (ja(0), !1) : !0;
  }
  function Nc() {
    if (de !== null) {
      if (Te === 0)
        var e = de.return;
      else
        e = fe, Ft = Kl = null, Kr(e), zn = null, pa = 0, e = fe;
      for (; e !== null; )
        hd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Yn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, h1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ol = 0, Nc(), Oe = e, de = l = Ft(e.current, null), me = t, Te = 0, xt = null, _l = !1, qn = la(e, t), Ac = !1, Yn = Tt = wc = an = zl = qe = 0, ft = ja = null, Cc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return sl = t, Tu(), l;
  }
  function Ld(e, t) {
    ie = null, Y.H = Ca, t === Nn || t === Nu ? (t = Io(), Te = 3) : t === jr ? (t = Io(), Te = 4) : Te = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, de === null && (qe = 1, Zu(
      e,
      _t(t, e.current)
    ));
  }
  function Hd() {
    var e = St.current;
    return e === null ? !0 : (me & 4194048) === me ? Mt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Mt : !1;
  }
  function qd() {
    var e = Y.H;
    return Y.H = Ca, e === null ? Ca : e;
  }
  function Yd() {
    var e = Y.A;
    return Y.A = Zy, e;
  }
  function li() {
    qe = 4, wl || (me & 4194048) !== me && St.current !== null || (Hn = !0), (Cl & 134217727) === 0 && (ln & 134217727) === 0 || _e === null || zl(
      _e,
      me,
      Tt,
      !1
    );
  }
  function Mc(e, t, l) {
    var n = xe;
    xe |= 2;
    var a = qd(), i = Yd();
    (Oe !== e || me !== t) && (ti = null, Gn(e, t)), t = !1;
    var f = qe;
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var h = fe, v = xt;
          switch (xe) {
            case 8:
              Nc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var C = xe;
              if (xe = 0, xt = null, Xn(e, h, v, C), l && Hn) {
                f = 0;
                break e;
              }
              break;
            default:
              C = xe, xe = 0, xt = null, Xn(e, h, v, C);
          }
        }
        Jy(), f = qe;
        break;
      } catch (j) {
        Ld(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ft = Kl = null, Se = n, q.H = a, q.A = i, fe === null && (_e = null, me = 0, xu()), f;
  }
  function Jy() {
    for (; de !== null; ) Xd(de);
  }
  function $y(e, t) {
    var l = xe;
    xe |= 2;
    var n = qd(), a = Yd();
    Oe !== e || me !== t ? (ti = null, ei = yt() + 500, Gn(e, t)) : qn = la(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe;
          var i = xt;
          t: switch (xe) {
            case 1:
              xe = 0, xt = null, Xn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Wo(i)) {
                Te = 0, xt = null, Gd(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || _e !== e || (xe = 7), Qt(e);
              }, i.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              Wo(i) ? (Te = 0, xt = null, Gd(t)) : (Te = 0, xt = null, Vn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var m = de;
                  if (f ? Ch(f) : m.stateNode.complete) {
                    Te = 0, xt = null;
                    var v = m.sibling;
                    if (v !== null) de = v;
                    else {
                      var C = h.return;
                      C !== null ? (fe = C, ni(C)) : fe = null;
                    }
                    break t;
                  }
              }
              xe = 0, xt = null, Xn(e, t, i, 5);
              break;
            case 6:
              xe = 0, xt = null, Xn(e, t, i, 6);
              break;
            case 8:
              Nc(), qe = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Wy();
        break;
      } catch (j) {
        Ld(e, j);
      }
    while (!0);
    return Ft = Kl = null, q.H = n, q.A = a, Se = l, fe !== null ? 0 : (_e = null, me = 0, xu(), qe);
  }
  function Wy() {
    for (; de !== null && !b0(); )
      Xd(de);
  }
  function Xd(e) {
    var t = fd(e.alternate, e, sl);
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : de = t;
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
          me
        );
        break;
      case 11:
        t = ud(
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
        hd(l, t), t = de = qo(t, sl), t = fd(l, t, sl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ni(e) : fe = t;
  }
  function Xn(e, t, l, n) {
    Ft = Kl = null, Kr(t), zn = null, pa = 0;
    var a = t.return;
    try {
      if (Hy(
        e,
        a,
        t,
        l,
        me
      )) {
        qe = 1, Qu(
          e,
          _t(l, e.current)
        ), fe = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw fe = a, i;
      qe = 1, Qu(
        e,
        _t(l, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ge || n === 1 ? e = !0 : qn || (me & 536870912) !== 0 ? e = !1 : (_l = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Vd(t, e)) : ai(t);
  }
  function ni(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Vd(
          t,
          wl
        );
        return;
      }
      e = t.return;
      var l = Xy(
        t.alternate,
        t,
        sl
      );
      if (l !== null) {
        fe = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Vd(e, t) {
    do {
      var l = Gy(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, fe = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        fe = e;
        return;
      }
      fe = e = l;
    } while (e !== null);
    qe = 6, fe = null;
  }
  function Qd(e, t, l, n, a, i, f, m, v) {
    e.cancelPendingCommit = null;
    do
      ai();
    while (Ke !== 0);
    if ((Se & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= Sr, z0(
        e,
        l,
        i,
        f,
        h,
        v
      ), e === Oe && (de = Oe = null, me = 0), Xn = t, Nl = e, ol = l, _c = i, zc = a, Dd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, e1(ru, function() {
        return $d(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null, a = G.p, G.p = 2, f = Se, Se |= 4;
        try {
          Vy(e, t, l);
        } finally {
          Se = f, G.p = a, q.T = n;
        }
      }
      Je = 1, Zd(), kd(), Kd();
    }
  }
  function Zd() {
    if (Je === 1) {
      Je = 0;
      var e = Nl, t = Xn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Ad(t, e);
          var i = Qc, f = Oo(e.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (f !== m && m && m.ownerDocument && zo(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && yr(h)) {
              var C = v.start, U = v.end;
              if (U === void 0 && (U = C), "selectionStart" in h)
                h.selectionStart = C, h.selectionEnd = Math.min(
                  U,
                  h.value.length
                );
              else {
                var H = m.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), J = m.textContent.length, P = Math.min(v.start, J), Ce = v.end === void 0 ? P : Math.min(v.end, J);
                  !M.extend && P > Ce && (f = Ce, Ce = P, P = f);
                  var R = _o(
                    m,
                    P
                  ), E = _o(
                    m,
                    Ce
                  );
                  if (R && E && (M.rangeCount !== 1 || M.anchorNode !== R.node || M.anchorOffset !== R.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var w = L.createRange();
                    w.setStart(R.node, R.offset), M.removeAllRanges(), te > Ce ? (M.addRange(w), M.extend(E.node, E.offset)) : (w.setEnd(E.node, E.offset), M.addRange(w));
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
          pi = !!Vc, Qc = Vc = null;
        } finally {
          Se = a, G.p = n, q.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function kd() {
    if (Je === 2) {
      Je = 0;
      var e = Nl, t = Xn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Sd(e, t.alternate, t);
        } finally {
          Se = a, G.p = n, q.T = l;
        }
      }
      Ke = 3;
    }
  }
  function Kd() {
    if (Je === 4 || Je === 3) {
      Je = 0, S0();
      var e = Nl, t = Xn, l = ol, n = Dd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Xn = Nl = null, Jd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (_l = null), Wi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            Pn,
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
      (ol & 3) !== 0 && ui(), kt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Oc ? Ba++ : (Ba = 0, Oc = e) : Ba = 0, La(0);
    }
  }
  function Jd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ui() {
    return Zd(), kd(), Kd(), $d();
  }
  function $d() {
    if (Je !== 5) return !1;
    var e = Nl, t = _c;
    _c = 0;
    var l = Wi(ol), n = Y.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, Y.T = null, l = zc, zc = null;
      var i = Nl, f = ol;
      if (Je = 0, Xn = Nl = null, ol = 0, (xe & 6) !== 0) throw Error(o(331));
      var m = xe;
      if (xe |= 4, Od(i.current), Cd(
        i,
        i.current,
        f,
        l
      ), Se = h, ja(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(Pn, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, Y.T = n, Jd(e, t);
    }
  }
  function Wd(e, t, l) {
    t = _t(l, t), t = cc(e.stateNode, t, 2), e = Rl(e, t, 2), e !== null && (na(e, 2), kt(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ol === null || !Ol.has(n))) {
            e = _t(l, e), l = Ff(2), n = Rl(t, l, 2), n !== null && (If(
              l,
              n,
              t,
              e
            ), ta(n, 2), Qt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Dc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new ky();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Ac = !0, a.add(l), e = Fy.bind(null, e, t, l), t.then(e, e));
  }
  function Fy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (me & l) === l && (qe === 4 || qe === 3 && (me & 62914560) === me && 300 > yt() - Pu ? (xe & 2) === 0 && Gn(e, 0) : wc |= l, Yn === me && (Yn = 0)), kt(e);
  }
  function Fd(e, t) {
    t === 0 && (t = Vs()), e = kl(e, t), e !== null && (na(e, t), kt(e));
  }
  function Iy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Fd(e, l);
  }
  function Py(e, t) {
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
    n !== null && n.delete(t), Fd(e, l);
  }
  function e1(e, t) {
    return ki(e, t);
  }
  var ii = null, Qn = null, Uc = !1, ri = !1, jc = !1, Dl = 0;
  function kt(e) {
    e !== Qn && e.next === null && (Qn === null ? ii = Qn = e : Qn = Qn.next = e), ri = !0, Uc || (Uc = !0, l1());
  }
  function La(e, t) {
    if (!jc && ri) {
      jc = !0;
      do
        for (var l = !1, n = ui; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, h = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, th(n, i));
          } else
            i = me, i = ou(
              n,
              n === _e ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || la(n, i) || (l = !0, th(n, i));
          n = n.next;
        }
      while (l);
      jc = !1;
    }
  }
  function t1() {
    Id();
  }
  function Id() {
    ri = Uc = !1;
    var e = 0;
    Dl !== 0 && d1() && (e = Dl);
    for (var t = yt(), l = null, n = ii; n !== null; ) {
      var a = n.next, i = Pd(n, t);
      i === 0 ? (n.next = null, l === null ? ii = a : l.next = a, a === null && (Qn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ri = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || ja(e), Nl !== 0 && (Nl = 0);
  }
  function Pd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, v = a[f];
      v === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = _0(m, t)) : v <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = _e, l = me, l = ou(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ki(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ea(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ki(n), Wi(l)) {
        case 2:
        case 8:
          l = Xs;
          break;
        case 32:
          l = iu;
          break;
        case 268435456:
          l = Gs;
          break;
        default:
          l = iu;
      }
      return n = eh.bind(null, e), l = ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ki(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function eh(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ai() && e.callbackNode !== l)
      return null;
    var n = me;
    return n = ou(
      e,
      e === _e ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (jd(e, n, t), Pd(e, yt()), e.callbackNode != null && e.callbackNode === l ? eh.bind(null, e) : null);
  }
  function th(e, t) {
    if (ui()) return null;
    jd(e, t, !0);
  }
  function l1() {
    m1(function() {
      (xe & 6) !== 0 ? ki(
        Ys,
        t1
      ) : Id();
    });
  }
  function Bc() {
    if (Dl === 0) {
      var e = zn;
      e === 0 && (e = cu, cu <<= 1, (cu & 261888) === 0 && (cu = 256)), Dl = e;
    }
    return Nl;
  }
  function lh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
  }
  function nh(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function n1(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = lh(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? lh(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var m = new bu(
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
                if (Dl !== 0) {
                  var v = f ? nh(a, f) : new FormData(a);
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
                typeof i == "function" && (m.preventDefault(), v = f ? nh(a, f) : new FormData(a), lc(
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
    var Hc = br[Lc], a1 = Hc.toLowerCase(), u1 = Hc[0].toUpperCase() + Hc.slice(1);
    Bt(
      a1,
      "on" + u1
    );
  }
  Bt(Do, "onAnimationEnd"), Bt(Uo, "onAnimationIteration"), Bt(jo, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(Ey, "onTransitionRun"), Bt(xy, "onTransitionStart"), Bt(Ty, "onTransitionCancel"), Bt(Bo, "onTransitionEnd"), yn("onMouseEnter", ["mouseout", "mouseover"]), yn("onMouseLeave", ["mouseout", "mouseover"]), yn("onPointerEnter", ["pointerout", "pointerover"]), yn("onPointerLeave", ["pointerout", "pointerover"]), Gl(
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
  ), i1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha)
  );
  function ah(e, t) {
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
            } catch (U) {
              Eu(U);
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
            } catch (U) {
              Eu(U);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[Fi];
    l === void 0 && (l = t[Fi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (uh(t, e, 2, !1), l.add(n));
  }
  function qc(e, t, l) {
    var n = 0;
    t && (n |= 4), uh(
      l,
      e,
      n,
      t
    );
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(e) {
    if (!e[ci]) {
      e[ci] = !0, Ws.forEach(function(l) {
        l !== "selectionchange" && (i1.has(l) || qc(l, !1, e), qc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ci] || (t[ci] = !0, qc("selectionchange", !1, t));
    }
  }
  function uh(e, t, l, n) {
    switch (Uh(t)) {
      case 2:
        var a = U1;
        break;
      case 8:
        a = j1;
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
  function Xc(e, t, l, n, a) {
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
            if (f = on(h), f === null) return;
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
      var C = i, j = ar(l), H = [];
      e: {
        var z = Lo.get(e);
        if (z !== void 0) {
          var M = bu, J = e;
          switch (e) {
            case "keypress":
              if (gu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = P0;
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
              M = X0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ly;
              break;
            case Do:
            case Uo:
            case jo:
              M = Q0;
              break;
            case Bo:
              M = ay;
              break;
            case "scroll":
            case "scrollend":
              M = q0;
              break;
            case "wheel":
              M = iy;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = k0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = mo;
              break;
            case "toggle":
            case "beforetoggle":
              M = cy;
          }
          var te = (t & 4) !== 0, Ce = !te && (e === "scroll" || e === "scrollend"), R = te ? O !== null ? O + "Capture" : null : O;
          te = [];
          for (var E = C, w; E !== null; ) {
            var B = E;
            if (w = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || w === null || R === null || (B = aa(E, R), B != null && te.push(
              Ha(E, B, w)
            )), Ce) break;
            E = E.return;
          }
          0 < te.length && (O = new M(
            O,
            J,
            null,
            l,
            U
          ), L.push({ event: O, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && l !== nr && (J = l.relatedTarget || l.fromElement) && (on(J) || J[sn]))
            break e;
          if ((M || z) && (z = j.window === j ? j : (z = j.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = C, J = J ? dn(J) : null, J !== null && (Ce = h(J), P = J.tag, J !== Ce || P !== 5 && P !== 27 && P !== 6) && (J = null)) : (M = null, J = C), M !== J)) {
            if (P = fo, L = "onMouseLeave", R = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (P = mo, L = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Ce = M == null ? z : ua(M), w = J == null ? z : ua(J), z = new P(
              L,
              E + "leave",
              M,
              l,
              U
            ), O.target = Ce, O.relatedTarget = w, B = null, on(U) === C && (te = new te(
              R,
              E + "enter",
              J,
              l,
              U
            ), te.target = w, te.relatedTarget = Ce, B = te), Ce = B, M && J)
              t: {
                for (P = r1, R = M, E = J, w = 0, L = R; L; L = P(L))
                  w++;
                B = 0;
                for (var P = E; P; P = te(P))
                  B++;
                for (; 0 < w - B; )
                  R = te(R), w--;
                for (; 0 < B - w; )
                  E = te(E), B--;
                for (; w--; ) {
                  if (R === E || E !== null && R === E.alternate) {
                    te = R;
                    break t;
                  }
                  R = te(R), E = te(E);
                }
                te = null;
              }
            else P = null;
            M !== null && ih(
              H,
              z,
              M,
              te,
              !1
            ), J !== null && Ce !== null && ih(
              H,
              Ce,
              J,
              te,
              !0
            );
          }
        }
        e: {
          if (z = C ? ua(C) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var ve = xo;
          else if (So(z))
            if (To)
              ve = vy;
            else {
              ve = gy;
              var W = yy;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && lr(C.elementType) && (ve = xo) : ve = py;
          if (ve && (ve = ve(e, C))) {
            Eo(
              H,
              ve,
              l,
              U
            );
            break e;
          }
          W && W(e, O, C), e === "focusout" && C && O.type === "number" && C.memoizedProps.value != null && tr(O, "number", O.value);
        }
        switch (W = C ? na(C) : window, e) {
          case "focusin":
            (So(W) || W.contentEditable === "true") && (En = W, gr = C, ma = null);
            break;
          case "focusout":
            da = gr = bn = null;
            break;
          case "mousedown":
            pr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            pr = !1, No(H, l, j);
            break;
          case "selectionchange":
            if (Sy) break;
          case "keydown":
          case "keyup":
            No(H, l, j);
        }
        var ce;
        if (dr)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Sn ? vo(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (yo && l.locale !== "ko" && (Sn || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Sn && (ce = so()) : (pl = j, rr = "value" in pl ? pl.value : pl.textContent, Sn = !0)), W = si(C, ye), 0 < W.length && (ye = new ho(
          ye,
          e,
          null,
          l,
          j
        ), H.push({ event: ye, listeners: W }), ce ? ye.data = ce : (ce = bo(l), ce !== null && (ye.data = ce)))), (ce = oy ? fy(e, l) : dy(e, l)) && (ye = si(C, "onBeforeInput"), 0 < ye.length && (W = new ho(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          U
        ), L.push({
          event: W,
          listeners: ye
        }), W.data = ce)), n1(
          H,
          e,
          C,
          l,
          U
        );
      }
      ah(H, t);
    });
  }
  function Ha(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function si(e, t) {
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
  function r1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ih(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var h = l, v = h.alternate, C = h.stateNode;
      if (h = h.tag, v !== null && v === n) break;
      h !== 5 && h !== 26 && h !== 27 || C === null || (v = C, a ? (C = aa(l, i), C != null && f.unshift(
        Ha(l, C, v)
      )) : a || (C = aa(l, i), C != null && f.push(
        Ha(l, C, v)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var c1 = /\r\n?/g, s1 = /\u0000|\uFFFD/g;
  function rh(e) {
    return (typeof e == "string" ? e : "" + e).replace(c1, `
`).replace(s1, "");
  }
  function ch(e, t) {
    return t = rh(t), rh(e) === t;
  }
  function we(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || yn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && yn(e, "" + n);
        break;
      case "className":
        du(e, "class", n);
        break;
      case "tabIndex":
        du(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        du(e, l, n);
        break;
      case "style":
        io(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          du(e, "data", n);
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
        n = hu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Kt);
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
        de("beforetoggle", e), de("toggle", e), fu(e, "popover", n);
        break;
      case "xlinkActuate":
        kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        kt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        kt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        fu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = L0.get(l) || l, du(e, l, n));
    }
  }
  function Gc(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        io(e, n, i);
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
        typeof n == "string" ? yn(e, n) : (typeof n == "number" || typeof n == "bigint") && yn(e, "" + n);
        break;
      case "onScroll":
        n != null && de("scroll", e);
        break;
      case "onScrollEnd":
        n != null && de("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Kt);
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
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : fu(e, l, n);
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
        de("error", e), de("load", e);
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
                  we(e, t, i, f, l, null);
              }
          }
        a && we(e, t, "srcSet", l.srcSet, l, null), n && we(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var h = i = f = a = null, v = null, C = null;
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
                  h = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(s(137, t));
                  break;
                default:
                  we(e, t, n, U, l, null);
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
        de("invalid", e), n = f = i = null;
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
                we(e, t, a, h, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? hn(e, !!n, t, !1) : l != null && hn(e, !!n, l, !0);
        return;
      case "textarea":
        de("invalid", e), i = a = n = null;
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
                if (h != null) throw Error(s(91));
                break;
              default:
                we(e, t, f, h, l, null);
            }
        ao(e, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : we(e, t, v, n, l, null));
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
        for (C in l)
          if (l.hasOwnProperty(C) && (n = l[C], n != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                we(e, t, C, n, l, null);
            }
        return;
      default:
        if (lr(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (n = l[j], n !== void 0 && Gc(
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
    for (h in l)
      l.hasOwnProperty(h) && (n = l[h], n != null && we(e, t, h, n, l, null));
  }
  function o1(e, t, l, n) {
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
        var a = null, i = null, f = null, h = null, v = null, C = null, U = null;
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
                n.hasOwnProperty(M) || we(e, t, M, null, n, L);
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
                U = M;
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
                  throw Error(s(137, t));
                break;
              default:
                M !== L && we(
                  e,
                  t,
                  O,
                  M,
                  n,
                  L
                );
            }
        }
        er(
          e,
          f,
          h,
          v,
          C,
          U,
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
                O = i;
                break;
              case "defaultValue":
                h = i;
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
        t = h, l = f, n = M, O != null ? hn(e, !!l, O, !1) : !!n != !!l && (t != null ? hn(e, !!l, t, !0) : hn(e, !!l, l ? [] : "", !1));
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
                we(e, t, h, null, n, a);
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
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== i && we(e, t, f, a, n, i);
            }
        no(e, z, M);
        return;
      case "option":
        for (var J in l)
          O = l[J], l.hasOwnProperty(J) && O != null && !n.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : we(
            e,
            t,
            J,
            null,
            n,
            O
          ));
        for (v in n)
          O = n[v], M = l[v], n.hasOwnProperty(v) && O !== M && (O != null || M != null) && (v === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : we(
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
        for (var te in l)
          O = l[te], l.hasOwnProperty(te) && O != null && !n.hasOwnProperty(te) && we(e, t, te, null, n, O);
        for (C in n)
          if (O = n[C], M = l[C], n.hasOwnProperty(C) && O !== M && (O != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(s(137, t));
                break;
              default:
                we(
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
        if (lr(t)) {
          for (var Ce in l)
            z = l[Ce], l.hasOwnProperty(Ce) && z !== void 0 && !n.hasOwnProperty(Ce) && Gc(
              e,
              t,
              Ce,
              void 0,
              n,
              O
            );
          for (j in n)
            z = n[j], M = l[j], !n.hasOwnProperty(j) || z === M || z === void 0 && M === void 0 || Gc(
              e,
              t,
              U,
              O,
              n,
              M
            );
          return;
        }
    }
    for (var R in l)
      O = l[R], l.hasOwnProperty(R) && O != null && !n.hasOwnProperty(R) && we(e, t, R, null, n, O);
    for (L in n)
      O = n[L], M = l[L], !n.hasOwnProperty(L) || O === M || O == null && M == null || we(e, t, L, O, n, M);
  }
  function cm(e) {
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
  function f1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, h = a.duration;
        if (i && h && cm(f)) {
          for (f = 0, h = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], C = v.startTime;
            if (C > h) break;
            var U = v.transferSize, L = v.initiatorType;
            U && cm(L) && (v = v.responseEnd, f += U * (v < h ? 1 : (h - C) / (v - C)));
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
  function oh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fh(e, t) {
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
  function d1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === kc ? !1 : (kc = e, !0) : (kc = null, !1);
  }
  var dh = typeof setTimeout == "function" ? setTimeout : void 0, h1 = typeof clearTimeout == "function" ? clearTimeout : void 0, hh = typeof Promise == "function" ? Promise : void 0, m1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof hh < "u" ? function(e) {
    return hh.resolve(null).then(e).catch(y1);
  } : dh;
  function y1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ml(e) {
    return e === "head";
  }
  function mh(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), kn(t);
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
            var f = i.nextSibling, h = i.nodeName;
            i[la] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && La(e.ownerDocument.body);
      l = a;
    } while (l);
    kn(t);
  }
  function yh(e, t) {
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
  function g1(e, t, l, n) {
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
      if (e = Dt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function p1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function gh(e, t) {
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
  function v1(e, t) {
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
  var Wc = null;
  function ph(e) {
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
  function vh(e) {
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
  function bh(e, t, l) {
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
  function La(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ii(e);
  }
  var Ut = /* @__PURE__ */ new Map(), Sh = /* @__PURE__ */ new Set();
  function fi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var sl = G.d;
  G.d = {
    f: b1,
    r: S1,
    D: E1,
    C: x1,
    L: T1,
    m: R1,
    X: w1,
    S: A1,
    M: C1
  };
  function b1() {
    var e = fl.f(), t = li();
    return e || t;
  }
  function S1(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Lf(t) : fl.r(e);
  }
  var Zn = typeof document > "u" ? null : document;
  function Eh(e, t, l) {
    var n = Zn;
    if (n && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Sh.has(a) || (Sh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function E1(e) {
    fl.D(e), Eh("dns-prefetch", e, null);
  }
  function x1(e, t) {
    fl.C(e, t), Eh("preconnect", e, t);
  }
  function T1(e, t, l) {
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
          i = Qn(e);
          break;
        case "script":
          i = Zn(e);
      }
      Ut.has(i) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(qa(i)) || t === "script" && n.querySelector(Ya(i)) || (t = n.createElement("link"), tt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function R1(e, t) {
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
          i = Zn(e);
      }
      if (!Ut.has(i) && (e = N({ rel: "modulepreload", href: e }, t), Ut.set(i, e), l.querySelector(a) === null)) {
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
        n = l.createElement("link"), tt(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function A1(e, t, l) {
    fl.S(e, t, l);
    var n = Zn;
    if (n && e) {
      var a = dn(n).hoistableStyles, i = Qn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = n.querySelector(
          qa(i)
        ))
          h.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ut.get(i)) && Fc(e, l);
          var v = f = n.createElement("link");
          $e(v), tt(v, "link", e), v._p = new Promise(function(C, U) {
            v.onload = C, v.onerror = U;
          }), v.addEventListener("load", function() {
            h.loading |= 1;
          }), v.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, fi(f, t, n);
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
  function w1(e, t) {
    fl.X(e, t);
    var l = Zn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Kn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = N({ src: e, async: !0 }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), $e(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function C1(e, t) {
    fl.M(e, t);
    var l = Zn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Kn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = N({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), $e(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function xh(e, t, l, n) {
    var a = (a = oe.current) ? fi(a) : null;
    if (!a) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Qn(l.href), l = dn(
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
          var i = dn(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            qa(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ut.set(e, l), i || _1(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Zn(l), l = dn(
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
  function Qn(e) {
    return 'href="' + wt(e) + '"';
  }
  function qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Th(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function _1(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), tt(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function Zn(e) {
    return '[src="' + wt(e) + '"]';
  }
  function Ya(e) {
    return "script[async]" + e;
  }
  function Rh(e, t, l) {
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
          ), $e(n), tt(n, "style", a), fi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Qn(l.href);
          var i = e.querySelector(
            qa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          n = Th(l), (a = Ut.get(a)) && Fc(n, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var f = i;
          return f._p = new Promise(function(h, v) {
            f.onload = h, f.onerror = v;
          }), tt(i, "link", n), t.state.loading |= 4, fi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Kn(l.src), (a = e.querySelector(
            Ga(i)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = Ut.get(i)) && (n = N({}, l), Ic(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, fi(n, l.precedence, e));
    return t.instance;
  }
  function fi(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var h = n[f];
      if (h.dataset.precedence === t) i = h;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Fc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hi = null;
  function Ah(e, t, l) {
    if (hi === null) {
      var n = /* @__PURE__ */ new Map(), a = hi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = di, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[la] || i[Fe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var h = n.get(f);
        h ? h.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function wh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function z1(e, t, l) {
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
  function Ch(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function O1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Qn(n.href), i = t.querySelector(
          qa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = mi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, n = Th(n), (a = Ut.get(a)) && Fc(n, a), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function(h, v) {
          f.onload = h, f.onerror = v;
        }), tt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = mi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Pc = 0;
  function N1(e, t) {
    return e.stylesheets && e.count === 0 && gi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && yi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Pc === 0 && (Pc = 62500 * f1());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && yi(e, e.stylesheets), e.unsuspend)) {
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
      if (this.stylesheets) yi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var yi = null;
  function gi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yi = /* @__PURE__ */ new Map(), t.forEach(M1, e), yi = null, mi.call(e));
  }
  function M1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = hi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), hi.set(e, l);
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
  var Xa = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function D1(e, t, l, n, a, i, f, m, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ji(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.hiddenUpdates = Ji(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function _h(e, t, l, n, a, i, f, m, v, C, j, H) {
    return e = new D1(
      e,
      t,
      l,
      f,
      v,
      C,
      U,
      L,
      h
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = Mr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Br(i), e;
  }
  function zh(e) {
    return e ? (e = Rn, e) : Rn;
  }
  function Oh(e, t, l, n, a, i) {
    a = zh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Tl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(e, n, t), l !== null && (dt(l, e, t), Ea(l, e, t));
  }
  function Nh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function es(e, t) {
    Nh(e, t), (e = e.alternate) && Nh(e, t);
  }
  function Mm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kl(e, 67108864);
      t !== null && dt(t, e, 67108864), es(e, 67108864);
    }
  }
  function Dh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = $i(t);
      var l = kl(e, t);
      l !== null && dt(l, e, t), es(e, t);
    }
  }
  var pi = !0;
  function U1(e, t, l, n) {
    var a = Y.T;
    Y.T = null;
    var i = G.p;
    try {
      G.p = 2, ts(e, t, l, n);
    } finally {
      G.p = i, Y.T = a;
    }
  }
  function j1(e, t, l, n) {
    var a = Y.T;
    Y.T = null;
    var i = G.p;
    try {
      G.p = 8, ts(e, t, l, n);
    } finally {
      G.p = i, Y.T = a;
    }
  }
  function ts(e, t, l, n) {
    if (pi) {
      var a = ls(n);
      if (a === null)
        Xc(
          e,
          t,
          n,
          pi,
          l
        ), jh(e, n);
      else if (L1(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (jh(e, n), t & 4 && -1 < B1.indexOf(e)) {
        for (; a !== null; ) {
          var i = fn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = ql(i.pendingLanes);
                  if (f !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - pt(f);
                      h.entanglements[1] |= v, f &= ~v;
                    }
                    Qt(i), (Se & 6) === 0 && (Pu = yt() + 500, ja(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = kl(i, 2), m !== null && dt(m, i, 2), li(), es(i, 2);
            }
          if (i = ls(n), i === null && Xc(
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
        Xc(
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
    return pi = e, null;
  }
  function Uh(e) {
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
        switch (E0()) {
          case Ys:
            return 2;
          case Xs:
            return 8;
          case ru:
          case x0:
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
  var as = !1, jl = null, Bl = null, Ll = null, Qa = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map(), Hl = [], B1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function jh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ul = null;
        break;
      case "mouseover":
      case "mouseout":
        jl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ga.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Va.delete(t.pointerId);
    }
  }
  function Qa(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = hn(t), t !== null && Mh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function L1(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Dl = Qa(
          Dl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Ul = Qa(
          Ul,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return jl = Qa(
          jl,
          e,
          t,
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
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Va.set(
          i,
          Qa(
            Va.get(i) || null,
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
  function Bh(e) {
    var t = dn(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
              Dh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
              Dh(l);
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
      var l = ls(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        nr = n, l.target.dispatchEvent(n), nr = null;
      } else
        return t = hn(l), t !== null && Mh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Lh(e, t, l) {
    bi(e) && l.delete(t);
  }
  function H1() {
    as = !1, jl !== null && bi(jl) && (jl = null), Bl !== null && bi(Bl) && (Bl = null), Ll !== null && bi(Ll) && (Ll = null), Qa.forEach(Lh), Za.forEach(Lh);
  }
  function Si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, as || (as = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      H1
    )));
  }
  var Ei = null;
  function Hh(e) {
    Ei !== e && (Ei = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Si === e && (Si = null);
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
  function kn(e) {
    function t(v) {
      return bi(v, e);
    }
    Dl !== null && bi(Dl, e), Ul !== null && bi(Ul, e), jl !== null && bi(jl, e), Ga.forEach(t), Va.forEach(t);
    for (var l = 0; l < Bl.length; l++) {
      var n = Bl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Hl.length && (l = Hl[0], l.blockedOn === null); )
      Bh(l), l.blockedOn === null && Hl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || Hh(l);
        else if (f) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              m = f.formAction;
            else if (ns(a) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Hh(l);
        }
      }
  }
  function qh() {
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
    Oh(l, n, e, t, null, null);
  }, xi.prototype.unmount = us.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Oh(e.current, 2, null, e, null, null), li(), t[fn] = null;
    }
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  Ei.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Hl.length && t !== 0 && t < Hl[l].priority; l++) ;
      Hl.splice(l, 0, e), l === 0 && Bh(e);
    }
  };
  var Yh = c.version;
  if (Yh !== "19.2.3")
    throw Error(
      s(
        527,
        Yh,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var q1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber)
      try {
        ta = Ti.inject(
          q1
        ), gt = Ti;
      } catch {
      }
  }
  return $a.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, n = "", a = Kf, i = Jf, f = $f;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = _h(
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
      qh
    ), e[fn] = t.current, Yc(e), new us(t);
  }, $a.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var n = !1, a = "", i = Kf, f = Jf, m = $f, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = _h(
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
      qh
    ), t.context = zh(null), l = t.current, n = Rt(), n = $i(n), a = Tl(n), a.callback = null, Rl(l, a, n), l = n, t.current.lanes = l, na(t, l), kt(t), e[fn] = t.current, Yc(e), new xi(t);
  }, $a.version = "19.2.3", $a;
}
var lm;
function wp() {
  if (lm) return ds.exports;
  lm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), ds.exports = Ap(), ds.exports;
}
var Cp = wp();
const Bi = ({ label: u, onClick: r, disabled: c, type: s = "button", className: o, children: d, mainButtonStyle: h }) => /* @__PURE__ */ T.jsx(
  "button",
  {
    className: s || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: r,
    disabled: c,
    type: s,
    style: h,
    children: d || u
  }
), nn = A.forwardRef(
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
    } = u, x = !!d || !!h, N = b.type === "select" || !!y;
    return /* @__PURE__ */ T.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      c && /* @__PURE__ */ T.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        c,
        " ",
        g && /* @__PURE__ */ T.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "flex! items-center! relative!", children: [
        s && /* @__PURE__ */ T.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: s
          }
        ),
        N ? /* @__PURE__ */ T.jsx(
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
        o && /* @__PURE__ */ T.jsx(
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
), _p = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Ns = ({
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
        return /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ T.jsx("img", { src: _p, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g();
  return /* @__PURE__ */ T.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`, children: [
    /* @__PURE__ */ T.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ T.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ T.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
      c && s && /* @__PURE__ */ T.jsx(
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
    o && /* @__PURE__ */ T.jsxs(
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
}, Zm = () => /* @__PURE__ */ T.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Fa extends Error {
}
Fa.prototype.name = "InvalidTokenError";
function zp(u) {
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
    return zp(r);
  } catch {
    return atob(r);
  }
}
function Ms(u, r) {
  if (typeof u != "string")
    throw new $a("Invalid token specified: must be a string");
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
    return JSON.parse(s);
  } catch (d) {
    throw new Fa(`Invalid token specified: invalid json for part #${c + 1} (${d.message})`);
  }
}
function Np() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const r = u.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Mp() {
  const u = window.location.hostname;
  return u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u) || u.startsWith("dev.") || u.startsWith("dev-") ? "dev" : u.startsWith("test.") || u.startsWith("test-") ? "test" : u.startsWith("stage.") || u.startsWith("stage-") ? "stage" : "prod";
}
function nm() {
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
function Mi(u, r, c, s = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + c);
  const d = Np(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = s ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function km(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var am = {};
const { toString: Dp } = Object.prototype, { getPrototypeOf: Ds } = Object, { iterator: Li, toStringTag: Km } = Symbol, Hi = /* @__PURE__ */ ((u) => (r) => {
  const c = Dp.call(r);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (u) => (u = u.toLowerCase(), (r) => Hi(r) === u), qi = (u) => (r) => typeof r === u, { isArray: In } = Array, $n = qi("undefined");
function lu(u) {
  return u !== null && !$n(u) && u.constructor !== null && !$n(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Jm = Yt("ArrayBuffer");
function Up(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && Jm(u.buffer), r;
}
const jp = qi("string"), ht = qi("function"), $m = qi("number"), nu = (u) => u !== null && typeof u == "object", Bp = (u) => u === !0 || u === !1, _i = (u) => {
  if (Hi(u) !== "object")
    return !1;
  const r = Ds(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Km in u) && !(Li in u);
}, Lp = (u) => {
  if (!nu(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Hp = Yt("Date"), qp = Yt("File"), Yp = Yt("Blob"), Xp = Yt("FileList"), Gp = (u) => nu(u) && ht(u.pipe), Vp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((r = Hi(u)) === "formdata" || // detect form-data instance
  r === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, Qp = Yt("URLSearchParams"), [Zp, kp, Kp, Jp] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt), $p = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function au(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let s, o;
  if (typeof u != "object" && (u = [u]), In(u))
    for (s = 0, o = u.length; s < o; s++)
      r.call(null, u[s], s, u);
  else {
    if (eu(u))
      return;
    const d = c ? Object.getOwnPropertyNames(u) : Object.keys(u), h = d.length;
    let g;
    for (s = 0; s < h; s++)
      g = d[s], r.call(null, u[g], g, u);
  }
}
function Wm(u, r) {
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
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Fm = (u) => !$n(u) && u !== rn;
function Es() {
  const { caseless: u, skipUndefined: r } = Fm(this) && this || {}, c = {}, s = (o, d) => {
    const h = u && Wm(c, d) || d;
    _i(c[h]) && _i(o) ? c[h] = Es(c[h], o) : _i(o) ? c[h] = Es({}, o) : In(o) ? c[h] = o.slice() : (!r || !$n(o)) && (c[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && au(arguments[o], s);
  return c;
}
const Wp = (u, r, c, { allOwnKeys: s } = {}) => (au(r, (o, d) => {
  c && ht(o) ? u[d] = km(o, c) : u[d] = o;
}, { allOwnKeys: s }), u), Fp = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Ip = (u, r, c, s) => {
  u.prototype = Object.create(r.prototype, s), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), c && Object.assign(u.prototype, c);
}, Pp = (u, r, c, s) => {
  let o, d, h;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(u), d = o.length; d-- > 0; )
      h = o[d], (!s || s(h, u, r)) && !g[h] && (r[h] = u[h], g[h] = !0);
    u = c !== !1 && Ds(u);
  } while (u && (!c || c(u, r)) && u !== Object.prototype);
  return r;
}, ev = (u, r, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= r.length;
  const s = u.indexOf(r, c);
  return s !== -1 && s === c;
}, tv = (u) => {
  if (!u) return null;
  if (Wn(u)) return u;
  let r = u.length;
  if (!$m(r)) return null;
  const c = new Array(r);
  for (; r-- > 0; )
    c[r] = u[r];
  return c;
}, lv = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && Ds(Uint8Array)), nv = (u, r) => {
  const s = (u && u[Li]).call(u);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const d = o.value;
    r.call(u, d[0], d[1]);
  }
}, av = (u, r) => {
  let c;
  const s = [];
  for (; (c = u.exec(r)) !== null; )
    s.push(c);
  return s;
}, uv = Yt("HTMLFormElement"), iv = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, s, o) {
    return s.toUpperCase() + o;
  }
), um = (({ hasOwnProperty: u }) => (r, c) => u.call(r, c))(Object.prototype), rv = Yt("RegExp"), Im = (u, r) => {
  const c = Object.getOwnPropertyDescriptors(u), s = {};
  au(c, (o, d) => {
    let h;
    (h = r(o, d, u)) !== !1 && (s[d] = h || o);
  }), Object.defineProperties(u, s);
}, cv = (u) => {
  Im(u, (r, c) => {
    if (ht(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const s = u[c];
    if (ht(s)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, sv = (u, r) => {
  const c = {}, s = (o) => {
    o.forEach((d) => {
      c[d] = !0;
    });
  };
  return In(u) ? s(u) : s(String(u).split(r)), c;
}, ov = () => {
}, fv = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function dv(u) {
  return !!(u && ht(u.append) && u[Km] === "FormData" && u[Li]);
}
const hv = (u) => {
  const r = new Array(10), c = (s, o) => {
    if (nu(s)) {
      if (r.indexOf(s) >= 0)
        return;
      if (lu(s))
        return s;
      if (!("toJSON" in s)) {
        r[o] = s;
        const d = In(s) ? [] : {};
        return au(s, (h, g) => {
          const p = c(h, o + 1);
          !$n(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return s;
  };
  return c(u, 0);
}, mv = Yt("AsyncFunction"), yv = (u) => u && (nu(u) || ht(u)) && ht(u.then) && ht(u.catch), Pm = ((u, r) => u ? setImmediate : r ? ((c, s) => (rn.addEventListener("message", ({ source: o, data: d }) => {
  o === rn && d === c && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), rn.postMessage(c, "*");
}))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(
  typeof setImmediate == "function",
  ht(rn.postMessage)
), gv = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof am < "u" && am.nextTick || Pm, pv = (u) => u != null && ht(u[Li]), O = {
  isArray: In,
  isArrayBuffer: Jm,
  isBuffer: lu,
  isFormData: Vp,
  isArrayBufferView: Up,
  isString: jp,
  isNumber: $m,
  isBoolean: Bp,
  isObject: nu,
  isPlainObject: _i,
  isEmptyObject: Lp,
  isReadableStream: Zp,
  isRequest: kp,
  isResponse: Kp,
  isHeaders: Jp,
  isUndefined: $n,
  isDate: Hp,
  isFile: qp,
  isBlob: Yp,
  isRegExp: rv,
  isFunction: ht,
  isStream: Gp,
  isURLSearchParams: Qp,
  isTypedArray: lv,
  isFileList: Xp,
  forEach: au,
  merge: Es,
  extend: Wp,
  trim: $p,
  stripBOM: Fp,
  inherits: Ip,
  toFlatObject: Pp,
  kindOf: Hi,
  kindOfTest: Yt,
  endsWith: ev,
  toArray: tv,
  forEachEntry: nv,
  matchAll: av,
  isHTMLForm: uv,
  hasOwnProperty: um,
  hasOwnProp: um,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Im,
  freezeMethods: cv,
  toObjectSet: sv,
  toCamelCase: iv,
  noop: ov,
  toFiniteNumber: fv,
  findKey: Wm,
  global: rn,
  isContextDefined: Fm,
  isSpecCompliantForm: dv,
  toJSONObject: hv,
  isAsyncFn: mv,
  isThenable: yv,
  setImmediate: Pm,
  asap: gv,
  isIterable: pv
};
function re(u, r, c, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), c && (this.config = c), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
z.inherits(se, Error, {
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
  const h = Object.create(e0);
  O.toFlatObject(u, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return re.call(h, g, p, c, s, o), u && h.cause == null && Object.defineProperty(h, "cause", { value: u, configurable: !0 }), h.name = u && u.name || "Error", d && Object.assign(h, d), h;
};
const vv = null;
function xs(u) {
  return O.isPlainObject(u) || O.isArray(u);
}
function l0(u) {
  return O.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function im(u, r, c) {
  return u ? u.concat(r).map(function(o, d) {
    return o = l0(o), !c && d ? "[" + o + "]" : o;
  }).join(c ? "." : "") : r;
}
function bv(u) {
  return O.isArray(u) && !u.some(xs);
}
const Sv = O.toFlatObject(O, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Yi(u, r, c) {
  if (!O.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), c = O.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, D) {
    return !z.isUndefined(D[j]);
  });
  const s = c.metaTokens, o = c.visitor || b, d = c.dots, h = c.indexes, p = (c.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(r);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(_) {
    if (_ === null) return "";
    if (z.isDate(_))
      return _.toISOString();
    if (z.isBoolean(_))
      return _.toString();
    if (!p && z.isBlob(_))
      throw new se("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(_) || z.isTypedArray(_) ? p && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function b(_, D, U) {
    let Q = _;
    if (_ && !U && typeof _ == "object") {
      if (O.endsWith(D, "{}"))
        D = s ? D : D.slice(0, -2), _ = JSON.stringify(_);
      else if (O.isArray(_) && bv(_) || (O.isFileList(_) || O.endsWith(D, "[]")) && (Q = O.toArray(_)))
        return D = l0(D), Q.forEach(function(k, ee) {
          !(O.isUndefined(k) || k === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? im([D], ee, d) : h === null ? D : D + "[]",
            y(k)
          );
        }), !1;
    }
    return xs(_) ? !0 : (r.append(im(U, D, d), y(_)), !1);
  }
  const x = [], N = Object.assign(Sv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: xs
  });
  function q(_, D) {
    if (!O.isUndefined(_)) {
      if (x.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + D.join("."));
      x.push(_), O.forEach(_, function(Q, V) {
        (!(O.isUndefined(Q) || Q === null) && o.call(
          r,
          V,
          z.isString(Q) ? Q.trim() : Q,
          j,
          N
        )) === !0 && q(Q, D ? D.concat(V) : [V]);
      }), x.pop();
    }
  }
  if (!z.isObject(u))
    throw new TypeError("data must be an object");
  return Y(u), r;
}
function rm(u) {
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
function Us(u, r) {
  this._pairs = [], u && Yi(u, this, r);
}
const n0 = Us.prototype;
n0.append = function(r, c) {
  this._pairs.push([r, c]);
};
n0.toString = function(r) {
  const c = r ? function(s) {
    return r.call(this, s, rm);
  } : rm;
  return this._pairs.map(function(o) {
    return c(o[0]) + "=" + c(o[1]);
  }, "").join("&");
};
function Ev(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function a0(u, r, c) {
  if (!r)
    return u;
  const s = c && c.encode || Ev;
  O.isFunction(c) && (c = {
    serialize: c
  });
  const o = c && c.serialize;
  let d;
  if (o ? d = o(r, c) : d = O.isURLSearchParams(r) ? r.toString() : new Us(r, c).toString(s), d) {
    const h = u.indexOf("#");
    h !== -1 && (u = u.slice(0, h)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class cm {
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
    O.forEach(this.handlers, function(s) {
      s !== null && r(s);
    });
  }
}
const u0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xv = typeof URLSearchParams < "u" ? URLSearchParams : Us, Tv = typeof FormData < "u" ? FormData : null, Rv = typeof Blob < "u" ? Blob : null, Av = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xv,
    FormData: Tv,
    Blob: Rv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, js = typeof window < "u" && typeof document < "u", Ts = typeof navigator == "object" && navigator || void 0, wv = js && (!Ts || ["ReactNative", "NativeScript", "NS"].indexOf(Ts.product) < 0), Cv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _v = js && window.location.href || "http://localhost", zv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: js,
  hasStandardBrowserEnv: wv,
  hasStandardBrowserWebWorkerEnv: Cv,
  navigator: Ts,
  origin: _v
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...zv,
  ...Av
};
function Ov(u, r) {
  return Yi(u, new at.classes.URLSearchParams(), {
    visitor: function(c, s, o, d) {
      return at.isNode && O.isBuffer(c) ? (this.append(s, c.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Nv(u) {
  return O.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Mv(u) {
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
    let h = c[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= c.length;
    return h = !h && O.isArray(o) ? o.length : h, p ? (O.hasOwnProp(o, h) ? o[h] = [o[h], s] : o[h] = s, !g) : ((!o[h] || !O.isObject(o[h])) && (o[h] = []), r(c, s, o[h], d) && O.isArray(o[h]) && (o[h] = Mv(o[h])), !g);
  }
  if (O.isFormData(u) && O.isFunction(u.entries)) {
    const c = {};
    return O.forEachEntry(u, (s, o) => {
      r(Nv(s), o, c, 0);
    }), c;
  }
  return null;
}
function Dv(u, r, c) {
  if (O.isString(u))
    try {
      return (r || JSON.parse)(u), O.trim(u);
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
    const s = c.getContentType() || "", o = s.indexOf("application/json") > -1, d = O.isObject(r);
    if (d && O.isHTMLForm(r) && (r = new FormData(r)), O.isFormData(r))
      return o ? JSON.stringify(i0(r)) : r;
    if (O.isArrayBuffer(r) || O.isBuffer(r) || O.isStream(r) || O.isFile(r) || O.isBlob(r) || O.isReadableStream(r))
      return r;
    if (z.isArrayBufferView(r))
      return r.buffer;
    if (O.isURLSearchParams(r))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Ov(r, this.formSerializer).toString();
      if ((g = O.isFileList(r)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return qi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (c.setContentType("application/json", !1), Dv(r)) : r;
  }],
  transformResponse: [function(r) {
    const c = this.transitional || uu.transitional, s = c && c.forcedJSONParsing, o = this.responseType === "json";
    if (O.isResponse(r) || O.isReadableStream(r))
      return r;
    if (r && O.isString(r) && (s && !this.responseType || o)) {
      const h = !(c && c.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (g) {
        if (m)
          throw g.name === "SyntaxError" ? se.from(g, se.ERR_BAD_RESPONSE, this, null, this.response) : g;
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
    FormData: nt.classes.FormData,
    Blob: nt.classes.Blob
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
  nu.headers[u] = {};
});
const Uv = O.toObjectSet([
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
]), jv = (u) => {
  const r = {};
  let c, s, o;
  return u && u.split(`
`).forEach(function(h) {
    o = h.indexOf(":"), c = h.substring(0, o).trim().toLowerCase(), s = h.substring(o + 1).trim(), !(!c || r[c] && Uv[c]) && (c === "set-cookie" ? r[c] ? r[c].push(s) : r[c] = [s] : r[c] = r[c] ? r[c] + ", " + s : s);
  }), r;
}, ch = /* @__PURE__ */ Symbol("internals");
function Ja(u) {
  return u && String(u).trim().toLowerCase();
}
function _i(u) {
  return u === !1 || u == null ? u : z.isArray(u) ? u.map(_i) : String(u);
}
function Bv(u) {
  const r = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = c.exec(u); )
    r[s[1]] = s[2];
  return r;
}
const Lv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ys(u, r, c, s, o) {
  if (O.isFunction(s))
    return s.call(this, r, c);
  if (o && (r = c), !!O.isString(r)) {
    if (O.isString(s))
      return r.indexOf(s) !== -1;
    if (O.isRegExp(s))
      return s.test(r);
  }
}
function Hv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, c, s) => c.toUpperCase() + s);
}
function qv(u, r) {
  const c = O.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + c, {
      value: function(o, d, h) {
        return this[s].call(this, r, o, d, h);
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
      const b = Ja(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const x = O.findKey(o, b);
      (!x || o[x] === void 0 || y === !0 || y === void 0 && o[x] !== !1) && (o[x || p] = zi(g));
    }
    const h = (g, p) => O.forEach(g, (y, b) => d(y, b, p));
    if (O.isPlainObject(r) || r instanceof this.constructor)
      h(r, c);
    else if (O.isString(r) && (r = r.trim()) && !Lv(r))
      h(jv(r), c);
    else if (O.isObject(r) && O.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!z.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? z.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      h(g, c);
    } else
      r != null && d(c, r, s);
    return this;
  }
  get(r, c) {
    if (r = Wa(r), r) {
      const s = O.findKey(this, r);
      if (s) {
        const o = this[s];
        if (!c)
          return o;
        if (c === !0)
          return Bv(o);
        if (O.isFunction(c))
          return c.call(this, o, s);
        if (O.isRegExp(c))
          return c.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (r = Wa(r), r) {
      const s = O.findKey(this, r);
      return !!(s && this[s] !== void 0 && (!c || ys(this, this[s], s, c)));
    }
    return !1;
  }
  delete(r, c) {
    const s = this;
    let o = !1;
    function d(h) {
      if (h = Wa(h), h) {
        const g = O.findKey(s, h);
        g && (!c || ys(s, s[g], g, c)) && (delete s[g], o = !0);
      }
    }
    return z.isArray(r) ? r.forEach(d) : d(r), s;
  }
  clear(r) {
    const c = Object.keys(this);
    let s = c.length, o = !1;
    for (; s--; ) {
      const d = c[s];
      (!r || ys(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return s;
  }
  normalize(r) {
    const c = this, s = {};
    return O.forEach(this, (o, d) => {
      const h = O.findKey(s, d);
      if (h) {
        c[h] = zi(o), delete c[d];
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
    return O.forEach(this, (s, o) => {
      s != null && s !== !1 && (c[o] = r && O.isArray(s) ? s.join(", ") : s);
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
    const s = (this[sm] = this[sm] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = Wa(h);
      s[g] || (qv(o, h), s[g] = !0);
    }
    return z.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(mt.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(s) {
      this[c] = s;
    }
  };
});
O.freezeMethods(mt);
function gs(u, r) {
  const c = this || uu, s = r || c, o = mt.from(s.headers);
  let d = s.data;
  return O.forEach(u, function(g) {
    d = g.call(c, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function r0(u) {
  return !!(u && u.__CANCEL__);
}
function Pn(u, r, c) {
  re.call(this, u ?? "canceled", re.ERR_CANCELED, r, c), this.name = "CanceledError";
}
z.inherits(Fn, se, {
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
function Yv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function Xv(u, r) {
  u = u || 10;
  const c = new Array(u), s = new Array(u);
  let o = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = s[d];
    h || (h = y), c[o] = p, s[o] = y;
    let x = d, N = 0;
    for (; x !== o; )
      N += c[x++], x = x % u;
    if (o = (o + 1) % u, o === d && (d = (d + 1) % u), y - h < r)
      return;
    const Y = b && y - b;
    return Y ? Math.round(N * 1e3 / Y) : void 0;
  };
}
function Gv(u, r) {
  let c = 0, s = 1e3 / r, o, d;
  const h = (y, b = Date.now()) => {
    c = b, o = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), x = b - c;
    x >= s ? h(y, b) : (o = y, d || (d = setTimeout(() => {
      d = null, h(o);
    }, s - x)));
  }, () => o && h(o)];
}
const Di = (u, r, c = 3) => {
  let s = 0;
  const o = Xv(50, 250);
  return Gv((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - s, y = o(p), b = h <= g;
    s = h;
    const x = {
      loaded: h,
      total: g,
      progress: g ? m / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && b ? (g - m) / y : void 0,
      event: d,
      lengthComputable: g != null,
      [r ? "download" : "upload"]: !0
    };
    u(x);
  }, c);
}, om = (u, r) => {
  const c = u != null;
  return [(s) => r[0]({
    lengthComputable: c,
    total: u,
    loaded: s
  }), r[1]];
}, fm = (u) => (...r) => O.asap(() => u(...r)), Vv = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (c) => (c = new URL(c, at.origin), u.protocol === c.protocol && u.host === c.host && (r || u.port === c.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Qv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, c, s, o, d, h) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      O.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`), O.isString(s) && g.push(`path=${s}`), O.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), O.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function Zv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function kv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function s0(u, r, c) {
  let s = !Zv(r);
  return u && (s || c == !1) ? kv(u, r) : r;
}
const dm = (u) => u instanceof mt ? { ...u } : u;
function sn(u, r) {
  r = r || {};
  const c = {};
  function s(y, b, x, N) {
    return O.isPlainObject(y) && O.isPlainObject(b) ? O.merge.call({ caseless: N }, y, b) : O.isPlainObject(b) ? O.merge({}, b) : O.isArray(b) ? b.slice() : b;
  }
  function o(y, b, x, N) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return s(void 0, y, x, N);
    } else return s(y, b, x, N);
  }
  function d(y, b) {
    if (!O.isUndefined(b))
      return s(void 0, b);
  }
  function h(y, b) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return s(void 0, y);
    } else return s(void 0, b);
  }
  function g(y, b, x) {
    if (x in r)
      return s(y, b);
    if (x in u)
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
    headers: (y, b, x) => o(dm(y), dm(b), x, !0)
  };
  return O.forEach(Object.keys({ ...u, ...r }), function(b) {
    const x = p[b] || o, N = x(u[b], r[b], b);
    O.isUndefined(N) && x !== g || (c[b] = N);
  }), c;
}
const o0 = (u) => {
  const r = sn({}, u);
  let { data: c, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = mt.from(h), r.url = a0(s0(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && h.set(
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
  if (at.hasStandardBrowserEnv && (s && O.isFunction(s) && (s = s(r)), s || s !== !1 && Vv(r.url))) {
    const p = o && d && Qv.read(d);
    p && h.set(o, p);
  }
  return r;
}, Kv = typeof XMLHttpRequest < "u", Jv = Kv && function(u) {
  return new Promise(function(c, s) {
    const o = o0(u);
    let d = o.data;
    const h = mt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, x, N, q, _;
    function D() {
      q && q(), _ && _(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(s.method.toUpperCase(), s.url, !0), D.timeout = s.timeout;
    function V() {
      if (!D)
        return;
      const K = ht.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), F = {
        data: !g || g === "text" || g === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: K,
        config: u,
        request: D
      };
      c0(function(ae) {
        c(ae), D();
      }, function(ae) {
        s(ae), D();
      }, K), U = null;
    }
    "onloadend" in U ? U.onloadend = Q : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, U.onabort = function() {
      U && (s(new re("Request aborted", re.ECONNABORTED, u, U)), U = null);
    }, U.onerror = function(ee) {
      const K = ee && ee.message ? ee.message : "Network Error", le = new re(K, re.ERR_NETWORK, u, U);
      le.event = ee || null, s(le), U = null;
    }, U.ontimeout = function() {
      let ee = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const K = o.transitional || u0;
      o.timeoutErrorMessage && (ee = o.timeoutErrorMessage), s(new re(
        ee,
        F.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        u,
        U
      )), U = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in U && O.forEach(h.toJSON(), function(ee, K) {
      U.setRequestHeader(K, ee);
    }), O.isUndefined(o.withCredentials) || (U.withCredentials = !!o.withCredentials), g && g !== "json" && (U.responseType = o.responseType), y && ([N, _] = Di(y, !0), U.addEventListener("progress", N)), p && U.upload && ([x, q] = Di(p), U.upload.addEventListener("progress", x), U.upload.addEventListener("loadend", q)), (o.cancelToken || o.signal) && (b = (k) => {
      U && (s(!k || k.type ? new Pn(null, u, U) : k), U.abort(), U = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const V = Yv(o.url);
    if (V && at.protocols.indexOf(V) === -1) {
      s(new re("Unsupported protocol " + V + ":", re.ERR_BAD_REQUEST, u));
      return;
    }
    D.send(d || null);
  });
}, $v = (u, r) => {
  const { length: c } = u = u ? u.filter(Boolean) : [];
  if (r || c) {
    let s = new AbortController(), o;
    const d = function(y) {
      if (!s) {
        s = !0, g();
        const b = y instanceof Error ? y : this.reason;
        s.abort(b instanceof re ? b : new Pn(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new se(`timeout ${r} of ms exceeded`, se.ETIMEDOUT));
    }, r);
    const g = () => {
      u && (m && clearTimeout(m), m = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = s;
    return p.unsubscribe = () => O.asap(g), p;
  }
}, Wv = function* (u, r) {
  let c = u.byteLength;
  if (c < r) {
    yield u;
    return;
  }
  let s = 0, o;
  for (; s < c; )
    o = s + r, yield u.slice(s, o), s = o;
}, Fv = async function* (u, r) {
  for await (const c of Iv(u))
    yield* Wv(c, r);
}, Iv = async function* (u) {
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
}, hm = (u, r, c, s) => {
  const o = Fv(u, r);
  let d = 0, h, g = (p) => {
    h || (h = !0, s && s(p));
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
          let N = d += x;
          c(N);
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
}, mm = 64 * 1024, { isFunction: Ai } = O, Pv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(O.global), {
  ReadableStream: ym,
  TextEncoder: gm
} = O.global, pm = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, eb = (u) => {
  u = O.merge.call({
    skipUndefined: !0
  }, Pv, u);
  const { fetch: r, Request: c, Response: s } = u, o = r ? Ai(r) : typeof fetch == "function", d = Ai(c), h = Ai(s);
  if (!o)
    return !1;
  const g = o && Ai(ym), p = o && (typeof gm == "function" ? /* @__PURE__ */ ((_) => (D) => _.encode(D))(new gm()) : async (_) => new Uint8Array(await new c(_).arrayBuffer())), y = d && g && pm(() => {
    let _ = !1;
    const D = new c(at.origin, {
      body: new ym(),
      method: "POST",
      get duplex() {
        return _ = !0, "half";
      }
    }).headers.has("Content-Type");
    return _ && !D;
  }), b = h && g && pm(() => O.isReadableStream(new s("").body)), x = {
    stream: b && ((_) => _.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((_) => {
    !x[_] && (x[_] = (D, U) => {
      let Q = D && D[_];
      if (Q)
        return Q.call(D);
      throw new re(`Response type '${_}' is not supported`, re.ERR_NOT_SUPPORT, U);
    });
  });
  const N = async (_) => {
    if (_ == null)
      return 0;
    if (z.isBlob(_))
      return _.size;
    if (O.isSpecCompliantForm(_))
      return (await new c(at.origin, {
        method: "POST",
        body: _
      }).arrayBuffer()).byteLength;
    if (z.isArrayBufferView(_) || z.isArrayBuffer(_))
      return _.byteLength;
    if (z.isURLSearchParams(_) && (_ = _ + ""), z.isString(_))
      return (await p(_)).byteLength;
  }, Y = async (_, j) => {
    const D = z.toFiniteNumber(_.getContentLength());
    return D ?? N(j);
  };
  return async (_) => {
    let {
      url: j,
      method: D,
      data: V,
      signal: Q,
      cancelToken: K,
      timeout: ee,
      onDownloadProgress: F,
      onUploadProgress: le,
      responseType: ae,
      headers: I,
      withCredentials: Se = "same-origin",
      fetchOptions: pe
    } = o0(_), Fe = r || fetch;
    ae = ae ? (ae + "").toLowerCase() : "text";
    let _e = $v([V, k && k.toAbortSignal()], ee), Ye = null;
    const Ne = _e && _e.unsubscribe && (() => {
      _e.unsubscribe();
    });
    let Je;
    try {
      if (le && y && U !== "get" && U !== "head" && (Ve = await q(I, Q)) !== 0) {
        let ne = new c(D, {
          method: "POST",
          body: V,
          duplex: "half"
        }), S;
        if (O.isFormData(Q) && (S = ne.headers.get("content-type")) && I.setContentType(S), ne.body) {
          const [B, Z] = om(
            Ve,
            Di(fm(le))
          );
          Q = hm(ne.body, mm, B, Z);
        }
      }
      O.isString(Se) || (Se = Se ? "include" : "omit");
      const X = d && "credentials" in c.prototype, Y = {
        ...pe,
        signal: _e,
        method: U.toUpperCase(),
        headers: I.normalize().toJSON(),
        body: Q,
        duplex: "half",
        credentials: X ? pe : void 0
      };
      Ye = d && new c(D, Y);
      let G = await (d ? Fe(Ye, pe) : Fe(D, Y));
      const fe = b && (ae === "stream" || ae === "response");
      if (b && (K || fe && Ne)) {
        const ne = {};
        ["status", "statusText", "headers"].forEach(($) => {
          ne[$] = G[$];
        });
        const S = O.toFiniteNumber(G.headers.get("content-length")), [B, Z] = K && om(
          S,
          Di(fm(K), !0)
        ) || [];
        G = new s(
          hm(G.body, mm, B, () => {
            Z && Z(), Ne && Ne();
          }),
          Oe
        );
      }
      ae = ae || "text";
      let Ee = await x[O.findKey(x, ae) || "text"](G, _);
      return !fe && Ne && Ne(), await new Promise((ne, S) => {
        c0(ne, S, {
          data: Ee,
          headers: mt.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: _,
          request: Be
        });
      });
    } catch (X) {
      throw He && He(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new se("Network Error", se.ERR_NETWORK, _, Be),
        {
          cause: X.cause || X
        }
      ) : se.from(X, X && X.code, _, Be);
    }
  };
}, tb = /* @__PURE__ */ new Map(), f0 = (u) => {
  let r = u && u.env || {};
  const { fetch: c, Request: s, Response: o } = r, d = [
    s,
    o,
    c
  ];
  let h = d.length, g = h, p, y, b = tb;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : eb(r)), b = y;
  return y;
};
f0();
const Bs = {
  http: vv,
  xhr: Jv,
  fetch: {
    get: f0
  }
};
O.forEach(Bs, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const vm = (u) => `- ${u}`, lb = (u) => O.isFunction(u) || u === null || u === !1;
function nb(u, r) {
  u = O.isArray(u) ? u : [u];
  const { length: c } = u;
  let s, o;
  const d = {};
  for (let h = 0; h < c; h++) {
    s = u[h];
    let g;
    if (o = s, !lb(s) && (o = Bs[(g = String(s)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (O.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + m] = s;
  }
  if (!s) {
    const m = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = c ? h.length > 1 ? `since :
` + h.map(vm).join(`
`) : " " + vm(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const d0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: nb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Bs
};
function ps(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Fn(null, u);
}
function bm(u) {
  return ps(u), u.headers = mt.from(u.headers), u.data = gs.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), d0.getAdapter(u.adapter || uu.adapter, u)(u).then(function(s) {
    return ps(u), s.data = gs.call(
      u,
      u.transformResponse,
      s
    ), s.headers = mt.from(s.headers), s;
  }, function(s) {
    return r0(s) || (ps(u), s && s.response && (s.response.data = gs.call(
      u,
      u.transformResponse,
      s.response
    ), s.response.headers = mt.from(s.response.headers))), Promise.reject(s);
  });
}
const h0 = "1.13.2", Xi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Xi[u] = function(s) {
    return typeof s === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const Sm = {};
Xi.transitional = function(r, c, s) {
  function o(d, h) {
    return "[Axios v" + h0 + "] Transitional option '" + d + "'" + h + (s ? ". " + s : "");
  }
  return (d, m, g) => {
    if (r === !1)
      throw new re(
        o(h, " has been removed" + (c ? " in " + c : "")),
        re.ERR_DEPRECATED
      );
    return c && !Sm[h] && (Sm[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), r ? r(d, m, g) : !0;
  };
};
Xi.spelling = function(r) {
  return (c, s) => (console.warn(`${s} is likely a misspelling of ${r}`), !0);
};
function ab(u, r, c) {
  if (typeof u != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let o = s.length;
  for (; o-- > 0; ) {
    const d = s[o], h = r[d];
    if (h) {
      const g = u[d], p = g === void 0 || h(g, d, u);
      if (p !== !0)
        throw new se("option " + d + " must be " + p, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Oi = {
  assertOptions: ab,
  validators: Xi
}, Kt = Oi.validators;
let cn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new cm(),
      response: new cm()
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
    typeof r == "string" ? (c = c || {}, c.url = r) : c = r || {}, c = sn(this.defaults, c);
    const { transitional: s, paramsSerializer: o, headers: d } = c;
    s !== void 0 && Oi.assertOptions(s, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), o != null && (O.isFunction(o) ? c.paramsSerializer = {
      serialize: o
    } : Oi.assertOptions(o, {
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
    d && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete d[_];
      }
    ), c.headers = mt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(D) {
      typeof D.runWhen == "function" && D.runWhen(c) === !1 || (p = p && D.synchronous, g.unshift(D.fulfilled, D.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let b, x = 0, N;
    if (!p) {
      const _ = [bm.bind(this), void 0];
      for (_.unshift(...g), _.push(...y), N = _.length, b = Promise.resolve(c); x < N; )
        b = b.then(_[x++], _[x++]);
      return b;
    }
    N = g.length;
    let q = c;
    for (; x < N; ) {
      const _ = g[x++], D = g[x++];
      try {
        Y = _(Y);
      } catch (D) {
        j.call(this, D);
        break;
      }
    }
    try {
      b = bm.call(this, q);
    } catch (_) {
      return Promise.reject(_);
    }
    for (x = 0, N = y.length; x < N; )
      b = b.then(y[x++], y[x++]);
    return b;
  }
  getUri(r) {
    r = sn(this.defaults, r);
    const c = s0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return a0(c, r.params, r.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(r) {
  cn.prototype[r] = function(c, s) {
    return this.request(sn(s || {}, {
      method: r,
      url: c,
      data: (s || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(r) {
  function c(s) {
    return function(d, h, g) {
      return this.request(sn(g || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  cn.prototype[r] = c(), cn.prototype[r + "Form"] = c(!0);
});
let ub = class m0 {
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
      const h = new Promise((g) => {
        s.subscribe(g), d = g;
      }).then(o);
      return h.cancel = function() {
        s.unsubscribe(d);
      }, h;
    }, r(function(d, h, g) {
      s.reason || (s.reason = new Pn(d, h, g), c(s.reason));
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
      token: new m0(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function ib(u) {
  return function(c) {
    return u.apply(null, c);
  };
}
function rb(u) {
  return O.isObject(u) && u.isAxiosError === !0;
}
const Rs = {
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
Object.entries(Rs).forEach(([u, r]) => {
  Rs[r] = u;
});
function y0(u) {
  const r = new cn(u), c = km(cn.prototype.request, r);
  return O.extend(c, cn.prototype, r, { allOwnKeys: !0 }), O.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(o) {
    return y0(sn(u, o));
  }, c;
}
const Ue = y0(uu);
Ue.Axios = cn;
Ue.CanceledError = Pn;
Ue.CancelToken = ub;
Ue.isCancel = r0;
Ue.VERSION = h0;
Ue.toFormData = Yi;
Ue.AxiosError = re;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(r) {
  return Promise.all(r);
};
Ue.spread = ib;
Ue.isAxiosError = rb;
Ue.mergeConfig = sn;
Ue.AxiosHeaders = mt;
Ue.formToJSON = (u) => i0(O.isHTMLForm(u) ? new FormData(u) : u);
Ue.getAdapter = d0.getAdapter;
Ue.HttpStatusCode = Rs;
Ue.default = Ue;
const {
  Axios: Tb,
  AxiosError: Rb,
  CanceledError: Ab,
  isCancel: wb,
  CancelToken: Cb,
  VERSION: _b,
  all: zb,
  Cancel: Ob,
  isAxiosError: Nb,
  spread: Mb,
  toFormData: Db,
  AxiosHeaders: Ub,
  HttpStatusCode: jb,
  formToJSON: Bb,
  getAdapter: Lb,
  mergeConfig: Hb
} = Ue, cb = "https://dev-demo-env.colibrilearning.com", iu = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${cb}${r}`;
}, sb = async (u, r) => {
  const c = iu("api/auth"), s = { username: u, password: r };
  try {
    return (await Ue.post(c, s)).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, ob = async (u) => {
  const r = iu("api/register");
  try {
    return (await Ue.post(r, u)).data;
  } catch (c) {
    throw console.error("Error during registration:", c), c.response?.data?.details?.errorMessage ? new Error(c.response.data.details.errorMessage) : c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.details ? new Error(c.response.data.details) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 500 ? new Error("Registration failed. Please try again.") : c.message ? new Error(c.message) : new Error("Registration failed");
  }
}, Ls = async (u) => {
  const r = iu("api/check-email");
  try {
    return (await Ue.post(r, { email: u })).data;
  } catch (c) {
    return console.error("Error checking email:", c), c.response?.data ? c.response.data : { exists: !1 };
  }
}, Em = async (u) => {
  const r = iu("api/forgot-password"), c = { email: u };
  try {
    return (await Ue.post(r, c)).data;
  } catch (s) {
    throw console.error("Error sending password reset:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 404 ? new Error("We couldn't find an account with that email.") : s.message ? new Error(s.message) : new Error("Failed to send password reset link");
  }
}, fb = async (u) => {
  const r = iu("api/refresh"), c = { refresh_token: u };
  try {
    return (await Ue.post(r, c)).data;
  } catch (s) {
    throw console.error("Error during token refresh:", s), s;
  }
};
function g0(u, r) {
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
  }, s = u.toLowerCase();
  if (r && r.displayName) {
    const o = r.displayName.split(/\s+/).filter((d) => d.length >= 2);
    for (const d of o)
      if (d && s.includes(d.toLowerCase())) {
        c.noNameParts = !1;
        break;
      }
  }
  if (r && r.email) {
    const d = ((r.email || "").split("@")[0] || "").split(/[^A-Za-z0-9]+/).filter((h) => h.length >= 3);
    for (const h of d)
      if (h && s.includes(h.toLowerCase())) {
        c.noEmailParts = !1;
        break;
      }
  }
  return c;
}
const db = (u) => {
  try {
    const r = document.cookie.split(";").find((h) => h.trim().startsWith("X-Credential=")), c = document.cookie.split(";").find((h) => h.trim().startsWith("access_token="));
    let s = null, o = !1;
    if (c && (s = c.split("=")[1] || null), r && (o = !0), s || (s = localStorage.getItem("access_token")), o || (o = !!localStorage.getItem("x_credential")), !s || !o)
      return !1;
    const d = localStorage.getItem("access_token_expires");
    if (d && Date.now() >= parseInt(d))
      return !1;
    try {
      const h = Ms(s), g = Math.floor(Date.now() / 1e3);
      return !(!h.exp || g >= h.exp);
    } catch (h) {
      return console.error("[checkTokenAndRedirect] Token decode error:", h), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, hb = () => {
  try {
    const u = localStorage.getItem("refresh_token"), r = localStorage.getItem("refresh_token_time");
    if (!u || !r)
      return !1;
    const c = 10080 * 60 * 1e3;
    return Date.now() - parseInt(r) < c;
  } catch (u) {
    return console.error("[isRefreshTokenValid] Error:", u), !1;
  }
}, p0 = async (u, r, c = !0) => {
  const s = await sb(u, r), { tokens: o, userinfo: d, x_credential: h } = s;
  if (o.access_token) {
    const g = Ms(o.access_token), p = (g.exp || 0) - Math.floor(Date.now() / 1e3);
    Mi("access_token", o.access_token, p, !0);
    const y = h || g.x_credentials;
    y && Mi("X-Credential", y, p, !1), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("access_token", o.access_token), localStorage.setItem("access_token_expires", (Date.now() + p * 1e3).toString()), y && localStorage.setItem("x_credential", y), d && localStorage.setItem("user_info", JSON.stringify({
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
    return () => clearTimeout(q);
  }, [c]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), s();
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
  }, N = b();
  return /* @__PURE__ */ T.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${s}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ T.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${N.bg}`, children: [
        /* @__PURE__ */ T.jsx("div", { className: `flex-shrink-0! ${N.icon}`, children: x() }),
        /* @__PURE__ */ T.jsx("div", { className: `ml-3! flex-1! ${N.text}`, children: /* @__PURE__ */ T.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ T.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${N.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ T.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ T.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ T.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, Gi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", yb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  onSignIn: s,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [x, N] = A.useState(""), [q, _] = A.useState(""), [D, U] = A.useState(!1), [Q, V] = A.useState(""), [k, ee] = A.useState(!1), [K, le] = A.useState(
    null
  ), [ae, I] = A.useState(!1), [Se, pe] = A.useState(!1), [Fe, _e] = A.useState(!1), [Ye, Ne] = A.useState(!1), [Ve, X] = A.useState(!0), [Y, G] = A.useState(""), [fe, Ee] = A.useState("info"), ne = A.useRef(null), S = A.useRef(null);
  A.useEffect(() => {
    if (ne.current && clearTimeout(ne.current), !g) {
      $(!1), Re(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      $(!1), Re(!1);
      return;
    }
    return ne.current = setTimeout(async () => {
      Ee(!0);
      try {
        (await Ls(g)).exists ? (_e(!0), pe(!0)) : (_e(!1), pe(!1));
      } catch (Be) {
        console.error("[CreateAccount] Email check failed:", Be), _e(!1), pe(!1);
      } finally {
        Ee(!1);
      }
    }, 500), () => {
      ne.current && clearTimeout(ne.current);
    };
  }, [g]), A.useEffect(() => {
    if (q) {
      const te = g || y || x ? {
        email: g,
        displayName: `${y} ${x}`.trim()
      } : null, Be = g0(q, te);
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
      Q("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    D(!0), Q(""), X("");
    try {
      const ze = g.split("@")[0], Xt = await ob({
        username: ze,
        email: g,
        firstName: y,
        lastName: x,
        password: q
      });
      console.log(
        "[CreateAccount] Registration successful:",
        ye.message
      );
      try {
        const Gt = await p0(
          g,
          Y,
          Be
        );
        u(Ye);
      } catch (Ye) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Ye
        );
        const Ue = Ye instanceof Error ? Ye.message : "Auto-login failed";
        r(Ue);
      }
    } catch (re) {
      console.error("[CreateAccount] Registration failed:", re);
      const ye = re instanceof Error ? re.message : "Registration failed";
      X(ye), G("error"), r(ye);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    Y && /* @__PURE__ */ T.jsx(
      mb,
      {
        type: q,
        message: Je,
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
            /* @__PURE__ */ T.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: o }),
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
                onChange: (k) => {
                  p(k.target.value), Q("");
                },
                placeholder: "Enter email address",
                disabled: j,
                className: "w-full!",
                autoComplete: "email",
                error: ae && !g ? "Required" : Q || "",
                endIcon: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                  Ye && /* @__PURE__ */ T.jsx(Zm, {}),
                  !Ye && !Fe && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ T.jsx(
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
            Se && Fe && /* @__PURE__ */ T.jsx(
              Ns,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  pe(!1), s(g);
                },
                onClose: () => $(!1),
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
                  onChange: (k) => b(k.target.value),
                  placeholder: "First Name",
                  disabled: j,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: F && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ T.jsx(
                un,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: x,
                  onChange: (te) => N(te.target.value),
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
                type: K ? "text" : "password",
                value: Y,
                onChange: (k) => {
                  _(k.target.value);
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
                    onClick: () => ee(!K),
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
                  checked: Be,
                  onChange: (k) => He(k.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ T.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ T.jsx(
              Bi,
              {
                type: "submit",
                disabled: D || Fe || !$ || !g || !y || !x || !q || !B,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: D ? /* @__PURE__ */ T.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                onClick: () => s(g),
                disabled: D,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ T.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, gb = ({
  email: u,
  loading: r,
  onResendLink: c,
  onBack: s,
  onClose: o
}) => {
  const d = A.useRef(null);
  A.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && s();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [s]);
  const m = (g) => {
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
            onClick: s,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
            children: /* @__PURE__ */ T.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, pb = ({
  email: u,
  onBack: r,
  handleClose: c
}) => {
  const [s, o] = A.useState(u || ""), [d, h] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [x, N] = A.useState(!1), [q, _] = A.useState(!1), [D, U] = A.useState(!1), Q = A.useRef(null);
  A.useEffect(() => {
    const K = (le) => {
      le.key === "Escape" && c();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [c]), A.useEffect(() => {
    const le = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    if (U(le), !le || !s) {
      _(!1);
      return;
    }
    const ue = setTimeout(async () => {
      N(!0);
      try {
        const I = await Ls(s);
        console.log("[ResetPassword] Email check response:", I), _(I.exists), console.log("[ResetPassword] Email exists:", I.exists);
      } catch (I) {
        console.error("[ResetPassword] Error checking email:", I), _(!1);
      } finally {
        N(!1);
      }
    }, 500);
    return () => clearTimeout(ae);
  }, [s]);
  const V = (K) => {
    K.target === Q.current && c();
  }, k = async (K) => {
    if (K.preventDefault(), !s) {
      b("Email is required");
      return;
    }
    m(!0), b("");
    try {
      await Em(s), console.log("[ResetPassword] Reset link sent to:", s), p(!0);
    } catch (le) {
      console.error("[ResetPassword] Failed to send reset link:", le);
      const ue = le instanceof Error ? le.message : "Failed to send reset link. Please try again.";
      b(ue);
    } finally {
      m(!1);
    }
  }, ee = async () => {
    m(!0), b("");
    try {
      await Em(s), console.log("[ResetPassword] Reset link resent to:", s);
    } catch (K) {
      console.error("[ResetPassword] Failed to resend reset link:", K), p(!1);
      const le = K instanceof Error ? K.message : "Failed to resend reset link. Please try again.";
      b(le);
    } finally {
      m(!1);
    }
  };
  return g ? /* @__PURE__ */ T.jsx(
    gb,
    {
      email: s,
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
              value: s,
              onChange: (K) => {
                o(K.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                x && /* @__PURE__ */ T.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !x && q && D && /* @__PURE__ */ T.jsx(
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
            Ns,
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
              disabled: d || !s || !D || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: s, isEmailValid: D, emailExists: q });
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
}, vb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  authority: s,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [x, N] = A.useState(!1), [q, _] = A.useState(!1), [D, U] = A.useState(
    null
  ), [Q, V] = A.useState(""), [k, ee] = A.useState(!1), [K, le] = A.useState(!1), [ae, I] = A.useState(!1), [Se, pe] = A.useState(!1), [Fe, _e] = A.useState(!1), [Ye, Ne] = A.useState(!1), Ve = A.useRef(null), X = A.useRef(null);
  A.useEffect(() => {
    if (He.current && clearTimeout(He.current), !g) {
      $(!1), Ee(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      $(!1), Ee(!1);
      return;
    }
    return He.current = setTimeout(async () => {
      Re(!0);
      try {
        (await Ls(g)).exists ? (pe(!0), Ne(!1)) : (pe(!1), Ne(!0));
      } catch (S) {
        console.error("[EmbeddedLogin] Email check failed:", S), pe(!0), Ne(!1);
      } finally {
        Re(!1);
      }
    }, 500), () => {
      He.current && clearTimeout(He.current);
    };
  }, [g]), A.useEffect(() => {
    if (y) {
      const ne = g0(y, null);
      U(ne);
    } else
      U(null);
  }, [y]), D && D.length && D.upper && D.lower && D.number && D.noSpaces && D.noTriple && D.special;
  const G = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
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
    N(!0), D("");
    try {
      const S = await p0(g, y, k);
      u(S);
    } catch (S) {
      console.error("[EmbeddedLogin] Login failed:", S);
      const B = S instanceof Error ? S.message : "Authentication failed";
      V(B), r(B);
    } finally {
      N(!1);
    }
  };
  return ae ? /* @__PURE__ */ T.jsx(
    pb,
    {
      email: g,
      onBack: () => I(!1),
      handleClose: c
    }
  ) : K ? /* @__PURE__ */ T.jsx(
    yb,
    {
      onSuccess: (I) => {
        ee(!1), u(I);
      },
      onError: r,
      handleClose: c,
      onSignIn: (ne) => {
        le(!1), ne && p(ne);
      },
      authority: s,
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
          /* @__PURE__ */ T.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
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
              onChange: (I) => p(I.target.value),
              placeholder: "Enter email address",
              disabled: x,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                Fe && /* @__PURE__ */ T.jsx(Zm, {}),
                !Fe && Se && G && /* @__PURE__ */ T.jsx(
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
          Ye && !Se && G && /* @__PURE__ */ T.jsx(
            Ns,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                Ee(!1), ee(!0);
              },
              onClose: () => Ee(!1),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ T.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ T.jsx(
            un,
            {
              label: "Password",
              id: "password",
              type: Y ? "text" : "password",
              value: y,
              onChange: (I) => {
                b(I.target.value), D("");
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
                  onClick: () => _(!Y),
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
                  checked: V,
                  onChange: (I) => Q(I.target.checked),
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
                onClick: (I) => {
                  I.preventDefault(), le(!0);
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ T.jsx(
            Bi,
            {
              type: "submit",
              disabled: x || !g || !y,
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
}, vs = (u, r) => {
  if (r || (r = localStorage.getItem("x_credential") || localStorage.getItem("X-Credential")), !r)
    return u;
  try {
    const c = new URL(u);
    return c.searchParams.set("xcred", r), c.toString();
  } catch {
    const s = u.includes("?") ? "&" : "?";
    return `${u}${s}xcred=${encodeURIComponent(r)}`;
  }
}, bb = (u) => {
  const { authority: r, subsidiary: c, onRedirect: s } = u, [o, d] = A.useState(!1);
  A.useEffect(() => {
    (async () => {
      try {
        if (db()) {
          d(!0), u.redirectUrl && (window.location.href = vs(u.redirectUrl));
          return;
        }
        if (hb()) {
          const N = localStorage.getItem("refresh_token");
          if (N) {
            console.log("[App] Attempting auto-login with refresh token");
            const q = await fb(N);
            if (q && q.tokens && q.tokens.access_token) {
              const _ = q.tokens, D = Ms(_.access_token), U = (D.exp || 0) - Math.floor(Date.now() / 1e3);
              Mi("access_token", _.access_token, U, !0), D.x_credentials && Mi("X-Credential", D.x_credentials, U, !1), _.refresh_token && (localStorage.setItem("refresh_token", _.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const Q = u.redirectUrl || nm();
              if (s) {
                const V = {
                  access_token: _.access_token,
                  userInfo: {
                    studentId: j.studentId,
                    sub: j.sub,
                    email_verified: j.email_verified,
                    x_credentials: j.x_credentials,
                    name: j.name,
                    preferred_username: j.preferred_username,
                    given_name: j.given_name,
                    family_name: j.family_name,
                    email: j.email
                  }
                };
                s(Q, V);
              }
              u.redirectUrl && (window.location.href = vs(u.redirectUrl, D.x_credentials));
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
  const h = (y) => {
    u.handleClose && u.handleClose(), d(!0);
    const b = y?.userInfo?.x_credentials || y?.x_credentials, x = u.redirectUrl || nm();
    s && s(x, y), u.redirectUrl && setTimeout(() => {
      window.location.href = vs(u.redirectUrl, b);
    }, 100);
  }, g = (y) => {
    console.log("[App] Embedded login error:", y);
  }, p = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ T.jsx(Xg, { children: /* @__PURE__ */ T.jsx(qm, { path: "*", element: /* @__PURE__ */ T.jsx(T.Fragment, { children: !o && u.showLogin && /* @__PURE__ */ T.jsx(
    vb,
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
class Sb {
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
async function xm(u) {
  const r = new Sb(u.cdnBaseUrl, u.shadowRoot), c = u.brandFolder || u.brandToken;
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
      return ["authority", "subsidiary", "redirectUrl", "loginTitle", "loginSubtitle", "show-login", "custom-primary-color", "customPrimaryColor"];
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
        console.log(`[Widget] Loading theme for subsidiary: ${c}`), await xm({
          brandFolder: c,
          shadowRoot: this._shadowRoot
        }), console.log(`[Widget] Theme loaded successfully for ${c}`);
      } catch (s) {
        console.error("[Widget] Failed to load theme:", s);
      }
    }
    async loadThemeFromDomain() {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await xm({
          shadowRoot: this._shadowRoot,
          autoDetect: !0
        });
      } catch (c) {
        console.error("[Widget] Failed to auto-detect theme:", c), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(c, o, s) {
      (c === "custom-primary-color" || c === "customPrimaryColor") && o !== s && this.applyCustomPrimaryColor(), this.render();
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
      return {
        authority: this.getAttribute("authority") || Mp(),
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
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
      this.root || (this.root = Cp.createRoot(this.mountPoint));
      const c = this.getProps();
      console.log("[Widget] Rendering with props:", c), this.root.render(
        /* @__PURE__ */ T.jsx(fp, { children: /* @__PURE__ */ T.jsx(A.StrictMode, { children: /* @__PURE__ */ T.jsx(bb, { ...c }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
