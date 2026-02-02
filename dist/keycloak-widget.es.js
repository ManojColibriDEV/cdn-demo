
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
var is = { exports: {} }, Za = {};
var Ym;
function q1() {
  if (Ym) return Za;
  Ym = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(o, s, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), s.key !== void 0 && (m = "" + s.key), "key" in s) {
      d = {};
      for (var g in s)
        g !== "key" && (d[g] = s[g]);
    } else d = s;
    return s = d.ref, {
      $$typeof: u,
      type: o,
      key: m,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return Za.Fragment = r, Za.jsx = c, Za.jsxs = c, Za;
}
var Xm;
function Y1() {
  return Xm || (Xm = 1, is.exports = q1()), is.exports;
}
var x = Y1(), rs = { exports: {} }, ae = {}, Gm;
function X1() {
  if (Gm) return ae;
  Gm = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
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
  function q(S, H, Z, k, ie) {
    var re = typeof S;
    (re === "undefined" || re === "boolean") && (S = null);
    var ye = !1;
    if (S === null) ye = !0;
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
              ye = !0;
              break;
            case T:
              return ye = S._init, q(
                ye(S._payload),
                H,
                Z,
                k,
                ie
              );
          }
      }
    if (ye)
      return ie = ie(S), ye = k === "" ? "." + Je(S, 0) : k, le(ie) ? (Z = "", ye != null && (Z = ye.replace(He, "$&/") + "/"), q(ie, H, Z, "", function(In) {
        return In;
      })) : ie != null && (Ee(ie) && (ie = at(
        ie,
        Z + (ie.key == null || S && S.key === ie.key ? "" : ("" + ie.key).replace(
          He,
          "$&/"
        ) + "/") + ye
      )), H.push(ie)), 1;
    ye = 0;
    var Ye = k === "" ? "." : k + ":";
    if (le(S))
      for (var Ue = 0; Ue < S.length; Ue++)
        k = S[Ue], re = Ye + Je(k, Ue), ye += q(
          k,
          H,
          Z,
          re,
          ie
        );
    else if (Ue = _(S), typeof Ue == "function")
      for (S = Ue.call(S), Ue = 0; !(k = S.next()).done; )
        k = k.value, re = Ye + Je(k, Ue++), ye += q(
          k,
          H,
          Z,
          re,
          ie
        );
    else if (re === "object") {
      if (typeof S.then == "function")
        return q(
          X(S),
          H,
          Z,
          k,
          ie
        );
      throw H = String(S), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ye;
  }
  function G(S, H, Z) {
    if (S == null) return S;
    var k = [], ie = 0;
    return q(S, k, "", "", function(re) {
      return H.call(Z, re, ie++);
    }), k;
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
  return ae.Activity = N, ae.Children = Oe, ae.Component = Q, ae.Fragment = o, ae.Profiler = d, ae.PureComponent = ee, ae.StrictMode = s, ae.Suspense = y, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, ae.__COMPILER_RUNTIME = {
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
    var k = D({}, S.props), ie = S.key;
    if (H != null)
      for (re in H.key !== void 0 && (ie = "" + H.key), H)
        !pe.call(H, re) || re === "key" || re === "__self" || re === "__source" || re === "ref" && H.ref === void 0 || (k[re] = H[re]);
    var re = arguments.length - 2;
    if (re === 1) k.children = Z;
    else if (1 < re) {
      for (var ye = Array(re), Ye = 0; Ye < re; Ye++)
        ye[Ye] = arguments[Ye + 2];
      k.children = ye;
    }
    return Re(S.type, ie, k);
  }, ae.createContext = function(S) {
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
  }, ae.createElement = function(S, H, Z) {
    var k, ie = {}, re = null;
    if (H != null)
      for (k in H.key !== void 0 && (re = "" + H.key), H)
        pe.call(H, k) && k !== "key" && k !== "__self" && k !== "__source" && (ie[k] = H[k]);
    var ye = arguments.length - 2;
    if (ye === 1) ie.children = Z;
    else if (1 < ye) {
      for (var Ye = Array(ye), Ue = 0; Ue < ye; Ue++)
        Ye[Ue] = arguments[Ue + 2];
      ie.children = Ye;
    }
    if (S && S.defaultProps)
      for (k in ye = S.defaultProps, ye)
        ie[k] === void 0 && (ie[k] = ye[k]);
    return Re(S, re, ie);
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ae.isValidElement = Ee, ae.lazy = function(S) {
    return {
      $$typeof: T,
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
      var k = S(), ie = $.S;
      ie !== null && ie(Z, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(ue, ne);
    } catch (re) {
      ne(re);
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
var Vm;
function Rs() {
  return Vm || (Vm = 1, rs.exports = X1()), rs.exports;
}
var A = Rs();
var Qm = "popstate";
function G1(u = {}) {
  function r(o, s) {
    let { pathname: d, search: m, hash: g } = o.location;
    return vs(
      "",
      { pathname: d, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function c(o, s) {
    return typeof s == "string" ? s : Wa(s);
  }
  return Q1(
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
function V1() {
  return Math.random().toString(36).substring(2, 10);
}
function Zm(u, r) {
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
    ...typeof r == "string" ? Jn(r) : r,
    state: c,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || V1()
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
    let o = u.indexOf("?");
    o >= 0 && (r.search = u.substring(o), u = u.substring(0, o)), u && (r.pathname = u);
  }
  return r;
}
function Q1(u, r, c, o = {}) {
  let { window: s = document.defaultView, v5Compat: d = !1 } = o, m = s.history, g = "POP", p = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function T() {
    g = "POP";
    let D = b(), V = D == null ? null : D - y;
    y = D, p && p({ action: g, location: j.location, delta: V });
  }
  function N(D, V) {
    g = "PUSH";
    let Q = vs(j.location, D, V);
    y = b() + 1;
    let K = Zm(Q, y), ee = j.createHref(Q);
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
    let Q = vs(j.location, D, V);
    y = b();
    let K = Zm(Q, y), ee = j.createHref(Q);
    m.replaceState(K, "", ee), d && p && p({ action: g, location: j.location, delta: 0 });
  }
  function _(D) {
    return Z1(D);
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
      return s.addEventListener(Qm, T), p = D, () => {
        s.removeEventListener(Qm, T), p = null;
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
function Z1(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), je(c, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : Wa(u);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = c + o), new URL(o, c);
}
function xh(u, r, c = "/") {
  return k1(u, r, c, !1);
}
function k1(u, r, c, o) {
  let s = typeof r == "string" ? Jn(r) : r, d = fl(s.pathname || "/", c);
  if (d == null)
    return null;
  let m = Th(u);
  K1(m);
  let g = null;
  for (let p = 0; g == null && p < m.length; ++p) {
    let y = ag(d);
    g = lg(
      m[p],
      y,
      o
    );
  }
  return g;
}
function Th(u, r = [], c = [], o = "", s = !1) {
  let d = (m, g, p = s, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(o) && p)
        return;
      je(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(o.length);
    }
    let T = ol([o, b.relativePath]), N = c.concat(b);
    m.children && m.children.length > 0 && (je(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), Th(
      m.children,
      r,
      N,
      T,
      p
    )), !(m.path == null && !m.index) && r.push({
      path: T,
      score: eg(T, m.index),
      routesMeta: N
    });
  };
  return u.forEach((m, g) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, g);
    else
      for (let p of Rh(m.path))
        d(m, g, !0, p);
  }), r;
}
function Rh(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...o] = r, s = c.endsWith("?"), d = c.replace(/\?$/, "");
  if (o.length === 0)
    return s ? [d, ""] : [d];
  let m = Rh(o.join("/")), g = [];
  return g.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), s && g.push(...m), g.map(
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
var J1 = /^:[\w-]+$/, $1 = 3, W1 = 2, F1 = 1, I1 = 10, P1 = -2, km = (u) => u === "*";
function eg(u, r) {
  let c = u.split("/"), o = c.length;
  return c.some(km) && (o += P1), r && (o += W1), c.filter((s) => !km(s)).reduce(
    (s, d) => s + (J1.test(d) ? $1 : d === "" ? F1 : I1),
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
  let { routesMeta: o } = u, s = {}, d = "/", m = [];
  for (let g = 0; g < o.length; ++g) {
    let p = o[g], y = g === o.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", T = zi(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), N = p.route;
    if (!T && y && c && !o[o.length - 1].route.index && (T = zi(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !T)
      return null;
    Object.assign(s, T.params), m.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: ol([d, T.pathname]),
      pathnameBase: cg(
        ol([d, T.pathnameBase])
      ),
      route: N
    }), T.pathnameBase !== "/" && (d = ol([d, T.pathnameBase]));
  }
  return m;
}
function zi(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, o] = ng(
    u.path,
    u.caseSensitive,
    u.end
  ), s = r.match(c);
  if (!s) return null;
  let d = s[0], m = d.replace(/(.)\/+$/, "$1"), g = s.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: b, isOptional: T }, N) => {
        if (b === "*") {
          let _ = g[N] || "";
          m = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const Y = g[N];
        return T && !Y ? y[b] = void 0 : y[b] = (Y || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
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
    (m, g, p) => (o.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
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
function fl(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length, o = u.charAt(c);
  return o && o !== "/" ? null : u.slice(c) || "/";
}
var Ah = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ug = (u) => Ah.test(u);
function ig(u, r = "/") {
  let {
    pathname: c,
    search: o = "",
    hash: s = ""
  } = typeof u == "string" ? Jn(u) : u, d;
  if (c)
    if (ug(c))
      d = c;
    else {
      if (c.includes("//")) {
        let m = c;
        c = c.replace(/\/\/+/g, "/"), qt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${c}`
        );
      }
      c.startsWith("/") ? d = Km(c.substring(1), "/") : d = Km(c, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: sg(o),
    hash: og(s)
  };
}
function Km(u, r) {
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
function wh(u) {
  let r = rg(u);
  return r.map(
    (c, o) => o === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function Ch(u, r, c, o = !1) {
  let s;
  typeof u == "string" ? s = Jn(u) : (s = { ...u }, je(
    !s.pathname || !s.pathname.includes("?"),
    cs("?", "pathname", "search", s)
  ), je(
    !s.pathname || !s.pathname.includes("#"),
    cs("#", "pathname", "hash", s)
  ), je(
    !s.search || !s.search.includes("#"),
    cs("#", "search", "hash", s)
  ));
  let d = u === "" || s.pathname === "", m = d ? "/" : s.pathname, g;
  if (m == null)
    g = c;
  else {
    let T = r.length - 1;
    if (!o && m.startsWith("..")) {
      let N = m.split("/");
      for (; N[0] === ".."; )
        N.shift(), T -= 1;
      s.pathname = N.join("/");
    }
    g = T >= 0 ? r[T] : "/";
  }
  let p = ig(s, g), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && c.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var ol = (u) => u.join("/").replace(/\/\/+/g, "/"), cg = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), sg = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, og = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, fg = class {
  constructor(u, r, c, o = !1) {
    this.status = u, this.statusText = r || "", this.internal = o, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function dg(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function mg(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var _h = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Oh(u, r) {
  let c = u;
  if (typeof c != "string" || !Ah.test(c))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: c
    };
  let o = c, s = !1;
  if (_h)
    try {
      let d = new URL(window.location.href), m = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c), g = fl(m.pathname, r);
      m.origin === d.origin && g != null ? c = g + m.search + m.hash : s = !0;
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
var zh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  zh
);
var hg = [
  "GET",
  ...zh
];
new Set(hg);
var $n = A.createContext(null);
$n.displayName = "DataRouter";
var Di = A.createContext(null);
Di.displayName = "DataRouterState";
var yg = A.createContext(!1), Nh = A.createContext({
  isTransitioning: !1
});
Nh.displayName = "ViewTransition";
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
var Fa = A.createContext(
  null
);
Fa.displayName = "Location";
var dl = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
dl.displayName = "Route";
var As = A.createContext(null);
As.displayName = "RouteError";
var Mh = "REACT_ROUTER_ERROR", vg = "REDIRECT", bg = "ROUTE_ERROR_RESPONSE";
function Sg(u) {
  if (u.startsWith(`${Mh}:${vg}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function Eg(u) {
  if (u.startsWith(
    `${Mh}:${bg}:{`
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
  je(
    Ia(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: o } = A.useContext(jt), { hash: s, pathname: d, search: m } = Pa(u, { relative: r }), g = d;
  return c !== "/" && (g = d === "/" ? c : ol([c, d])), o.createHref({ pathname: g, search: m, hash: s });
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
var Dh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Uh(u) {
  A.useContext(jt).static || A.useLayoutEffect(u);
}
function Tg() {
  let { isDataRoute: u } = A.useContext(dl);
  return u ? Bg() : Rg();
}
function Rg() {
  je(
    Ia(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext($n), { basename: r, navigator: c } = A.useContext(jt), { matches: o } = A.useContext(dl), { pathname: s } = cn(), d = JSON.stringify(wh(o)), m = A.useRef(!1);
  return Uh(() => {
    m.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (qt(m.current, Dh), !m.current) return;
      if (typeof p == "number") {
        c.go(p);
        return;
      }
      let b = Ch(
        p,
        JSON.parse(d),
        s,
        y.relative === "path"
      );
      u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : ol([r, b.pathname])), (y.replace ? c.replace : c.push)(
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
function Pa(u, { relative: r } = {}) {
  let { matches: c } = A.useContext(dl), { pathname: o } = cn(), s = JSON.stringify(wh(c));
  return A.useMemo(
    () => Ch(
      u,
      JSON.parse(s),
      o,
      r === "path"
    ),
    [u, s, o, r]
  );
}
function Ag(u, r) {
  return jh(u, r);
}
function jh(u, r, c, o, s) {
  je(
    Ia(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(jt), { matches: m } = A.useContext(dl), g = m[m.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", T = g && g.route;
  {
    let Q = T && T.path || "";
    Hh(
      y,
      !T || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

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
  let D = xh(u, { pathname: j });
  qt(
    T || D != null,
    `No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `
  ), qt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let V = zg(
    D && D.map(
      (Q) => Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: ol([
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
    m,
    c,
    o,
    s
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
function wg() {
  let u = jg(), r = dg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), m = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ A.createElement("pre", { style: s }, c) : null, m);
}
var Cg = /* @__PURE__ */ A.createElement(wg, null), Bh = class extends A.Component {
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
    let r = u !== void 0 ? /* @__PURE__ */ A.createElement(dl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      As.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(_g, { error: u }, r) : r;
  }
};
Bh.contextType = yg;
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
      let d = Oh(o.location, c);
      if (_h && !ss.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw ss.set(r, m), m;
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
function Og({ routeContext: u, match: r, children: c }) {
  let o = A.useContext($n);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(dl.Provider, { value: u }, c);
}
function zg(u, r = [], c = null, o = null, s = null) {
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
      (T) => T.route.id && m?.[T.route.id] !== void 0
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
      let T = d[b];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (p = b), T.route.id) {
        let { loaderData: N, errors: Y } = c, _ = T.route.loader && !N.hasOwnProperty(T.route.id) && (!Y || Y[T.route.id] === void 0);
        if (T.route.lazy || _) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = c && o ? (b, T) => {
    o(b, {
      location: c.location,
      params: c.matches?.[0]?.params ?? {},
      unstable_pattern: mg(c.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (b, T, N) => {
      let Y, _ = !1, j = null, D = null;
      c && (Y = m && T.route.id ? m[T.route.id] : void 0, j = T.route.errorElement || Cg, g && (p < 0 && N === 0 ? (Hh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), _ = !0, D = null) : p === N && (_ = !0, D = T.route.hydrateFallbackElement || null)));
      let V = r.concat(d.slice(0, N + 1)), Q = () => {
        let K;
        return Y ? K = j : _ ? K = D : T.route.Component ? K = /* @__PURE__ */ A.createElement(T.route.Component, null) : T.route.element ? K = T.route.element : K = b, /* @__PURE__ */ A.createElement(
          Og,
          {
            match: T,
            routeContext: {
              outlet: b,
              matches: V,
              isDataRoute: c != null
            },
            children: K
          }
        );
      };
      return c && (T.route.ErrorBoundary || T.route.errorElement || N === 0) ? /* @__PURE__ */ A.createElement(
        Bh,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: j,
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
function ws(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ng(u) {
  let r = A.useContext($n);
  return je(r, ws(u)), r;
}
function Mg(u) {
  let r = A.useContext(Di);
  return je(r, ws(u)), r;
}
function Dg(u) {
  let r = A.useContext(dl);
  return je(r, ws(u)), r;
}
function Cs(u) {
  let r = Dg(u), c = r.matches[r.matches.length - 1];
  return je(
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
  return Uh(() => {
    c.current = !0;
  }), A.useCallback(
    async (s, d = {}) => {
      qt(c.current, Dh), c.current && (typeof s == "number" ? await u.navigate(s) : await u.navigate(s, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var Jm = {};
function Hh(u, r, c) {
  !r && !Jm[u] && (Jm[u] = !0, qt(!1, c));
}
A.memo(Hg);
function Hg({
  routes: u,
  future: r,
  state: c,
  onError: o
}) {
  return jh(u, void 0, c, o, r);
}
function Lh(u) {
  je(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Lg({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: o = "POP",
  navigator: s,
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
  typeof c == "string" && (c = Jn(c));
  let {
    pathname: y = "/",
    search: b = "",
    hash: T = "",
    state: N = null,
    key: Y = "default"
  } = c, _ = A.useMemo(() => {
    let j = fl(y, g);
    return j == null ? null : {
      location: {
        pathname: j,
        search: b,
        hash: T,
        state: N,
        key: Y
      },
      navigationType: o
    };
  }, [g, y, b, T, N, Y, o]);
  return qt(
    _ != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ A.createElement(jt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Fa.Provider, { children: r, value: _ }));
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
    je(
      o.type === Lh,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), je(
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
    o.props.children && (m.children = bs(
      o.props.children,
      d
    )), c.push(m);
  }), c;
}
var Ai = "get", wi = "application/x-www-form-urlencoded";
function Ui(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Yg(u) {
  return Ui(u) && u.tagName.toLowerCase() === "button";
}
function Xg(u) {
  return Ui(u) && u.tagName.toLowerCase() === "form";
}
function Gg(u) {
  return Ui(u) && u.tagName.toLowerCase() === "input";
}
function Vg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Qg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Vg(u);
}
var Ti = null;
function Zg() {
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
var kg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function os(u) {
  return u != null && !kg.has(u) ? (qt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${wi}"`
  ), null) : u;
}
function Kg(u, r) {
  let c, o, s, d, m;
  if (Xg(u)) {
    let g = u.getAttribute("action");
    o = g ? fl(g, r) : null, c = u.getAttribute("method") || Ai, s = os(u.getAttribute("enctype")) || wi, d = new FormData(u);
  } else if (Yg(u) || Gg(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (o = p ? fl(p, r) : null, c = u.getAttribute("formmethod") || g.getAttribute("method") || Ai, s = os(u.getAttribute("formenctype")) || os(g.getAttribute("enctype")) || wi, d = new FormData(g, u), !Zg()) {
      let { name: y, type: b, value: T } = u;
      if (b === "image") {
        let N = y ? `${y}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (Ui(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = Ai, o = null, s = wi, m = u;
  }
  return d && s === "text/plain" && (m = d, d = void 0), { action: o, method: c.toLowerCase(), encType: s, formData: d, body: m };
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
  return o.pathname === "/" ? o.pathname = `_root.${c}` : r && fl(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${c}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${c}`, o;
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
function Wg(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Fg(u, r, c) {
  let o = await Promise.all(
    u.map(async (s) => {
      let d = r.routes[s.route.id];
      if (d) {
        let m = await $g(d, c);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return tp(
    o.flat(1).filter(Wg).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function $m(u, r, c, o, s, d) {
  let m = (p, y) => c[y] ? p.route.id !== c[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    c[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c[y].route.path?.endsWith("*") && c[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => m(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let b = o.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (m(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let T = p.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: c[0]?.params || {},
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
function qh() {
  let u = A.useContext($n);
  return _s(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function lp() {
  let u = A.useContext(Di);
  return _s(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Os = A.createContext(void 0);
Os.displayName = "FrameworkContext";
function Yh() {
  let u = A.useContext(Os);
  return _s(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function np(u, r) {
  let c = A.useContext(Os), [o, s] = A.useState(!1), [d, m] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: T } = r, N = A.useRef(null);
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
    if (o) {
      let j = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [o]);
  let Y = () => {
    s(!0);
  }, _ = () => {
    s(!1), m(!1);
  };
  return c ? u !== "intent" ? [d, N, {}] : [
    d,
    N,
    {
      onFocus: ka(g, Y),
      onBlur: ka(p, _),
      onMouseEnter: ka(y, Y),
      onMouseLeave: ka(b, _),
      onTouchStart: ka(T, Y)
    }
  ] : [!1, N, {}];
}
function ka(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function ap({ page: u, ...r }) {
  let { router: c } = qh(), o = A.useMemo(
    () => xh(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return o ? /* @__PURE__ */ A.createElement(ip, { page: u, matches: o, ...r }) : null;
}
function up(u) {
  let { manifest: r, routeModules: c } = Yh(), [o, s] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Fg(u, r, c).then(
      (m) => {
        d || s(m);
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
  let o = cn(), { manifest: s, routeModules: d } = Yh(), { basename: m } = qh(), { loaderData: g, matches: p } = lp(), y = A.useMemo(
    () => $m(
      u,
      r,
      p,
      s,
      o,
      "data"
    ),
    [u, r, p, s, o]
  ), b = A.useMemo(
    () => $m(
      u,
      r,
      p,
      s,
      o,
      "assets"
    ),
    [u, r, p, s, o]
  ), T = A.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), j = !1;
    if (r.forEach((V) => {
      let Q = s.routes[V.route.id];
      !Q || !Q.hasLoader || (!y.some((K) => K.route.id === V.route.id) && V.route.id in g && d[V.route.id]?.shouldRevalidate || Q.hasClientLoader ? j = !0 : _.add(V.route.id));
    }), _.size === 0)
      return [];
    let D = Jg(u, m, "data");
    return j && _.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((V) => _.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    g,
    o,
    s,
    y,
    r,
    u,
    d
  ]), N = A.useMemo(
    () => Ig(b, s),
    [b, s]
  ), Y = up(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, T.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...c })), N.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "modulepreload", href: _, ...c })), Y.map(({ key: _, link: j }) => (
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
  s.current == null && (s.current = G1({ window: o, v5Compat: !0 }));
  let d = s.current, [m, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      c === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [c]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    Lg,
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
var Xh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gh = A.forwardRef(
  function({
    onClick: r,
    discover: c = "render",
    prefetch: o = "none",
    relative: s,
    reloadDocument: d,
    replace: m,
    state: g,
    target: p,
    to: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) {
    let { basename: j, unstable_useTransitions: D } = A.useContext(jt), V = typeof y == "string" && Xh.test(y), Q = Oh(y, j);
    y = Q.to;
    let K = xg(y, { relative: s }), [ee, F, le] = np(
      o,
      Y
    ), ue = mp(y, {
      replace: m,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: s,
      viewTransition: T,
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
          "data-discover": !V && c === "render" ? "true" : void 0
        }
      )
    );
    return ee && !V ? /* @__PURE__ */ A.createElement(A.Fragment, null, pe, /* @__PURE__ */ A.createElement(ap, { page: K })) : pe;
  }
);
Gh.displayName = "Link";
var op = A.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: o = "",
    end: s = !1,
    style: d,
    to: m,
    viewTransition: g,
    children: p,
    ...y
  }, b) {
    let T = Pa(m, { relative: y.relative }), N = cn(), Y = A.useContext(Di), { navigator: _, basename: j } = A.useContext(jt), D = Y != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    vp(T) && g === !0, V = _.encodeLocation ? _.encodeLocation(T).pathname : T.pathname, Q = N.pathname, K = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null;
    c || (Q = Q.toLowerCase(), K = K ? K.toLowerCase() : null, V = V.toLowerCase()), K && j && (K = fl(K, j) || K);
    const ee = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let F = Q === V || !s && Q.startsWith(V) && Q.charAt(ee) === "/", le = K != null && (K === V || !s && K.startsWith(V) && K.charAt(V.length) === "/"), ue = {
      isActive: F,
      isPending: le,
      isTransitioning: D
    }, $ = F ? r : void 0, pe;
    typeof o == "function" ? pe = o(ue) : pe = [
      o,
      F ? "active" : null,
      le ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Re = typeof d == "function" ? d(ue) : d;
    return /* @__PURE__ */ A.createElement(
      Gh,
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
op.displayName = "NavLink";
var fp = A.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: o,
    replace: s,
    state: d,
    method: m = Ai,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) => {
    let { unstable_useTransitions: j } = A.useContext(jt), D = gp(), V = pp(g, { relative: y }), Q = m.toLowerCase() === "get" ? "get" : "post", K = typeof g == "string" && Xh.test(g), ee = (F) => {
      if (p && p(F), F.defaultPrevented) return;
      F.preventDefault();
      let le = F.nativeEvent.submitter, ue = le?.getAttribute("formmethod") || m, $ = () => D(le || F.currentTarget, {
        fetcherKey: r,
        method: ue,
        navigate: c,
        replace: s,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: T,
        unstable_defaultShouldRevalidate: N
      });
      j && c !== !1 ? A.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: _,
        method: Q,
        action: V,
        onSubmit: o ? p : ee,
        ...Y,
        "data-discover": !K && u === "render" ? "true" : void 0
      }
    );
  }
);
fp.displayName = "Form";
function dp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Vh(u) {
  let r = A.useContext($n);
  return je(r, dp(u)), r;
}
function mp(u, {
  target: r,
  replace: c,
  state: o,
  preventScrollReset: s,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Tg(), b = cn(), T = Pa(u, { relative: d });
  return A.useCallback(
    (N) => {
      if (Qg(N, r)) {
        N.preventDefault();
        let Y = c !== void 0 ? c : Wa(b) === Wa(T), _ = () => y(u, {
          replace: Y,
          state: o,
          preventScrollReset: s,
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
      T,
      c,
      o,
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
var hp = 0, yp = () => `__${String(++hp)}__`;
function gp() {
  let { router: u } = Vh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(jt), c = Ug(), o = u.fetch, s = u.navigate;
  return A.useCallback(
    async (d, m = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: T } = Kg(
        d,
        r
      );
      if (m.navigate === !1) {
        let N = m.fetcherKey || yp();
        await o(N, c, m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: T,
          formMethod: m.method || p,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await s(m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: T,
          formMethod: m.method || p,
          formEncType: m.encType || y,
          replace: m.replace,
          state: m.state,
          fromRouteId: c,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [o, s, r, c]
  );
}
function pp(u, { relative: r } = {}) {
  let { basename: c } = A.useContext(jt), o = A.useContext(dl);
  je(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1), d = { ...Pa(u || ".", { relative: r }) }, m = cn();
  if (u == null) {
    d.search = m.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((T) => T).forEach((T) => g.append("index", T));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && s.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : ol([c, d.pathname])), Wa(d);
}
function vp(u, { relative: r } = {}) {
  let c = A.useContext(Nh);
  je(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Vh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = Pa(u, { relative: r });
  if (!c.isTransitioning)
    return !1;
  let d = fl(c.currentLocation.pathname, o) || c.currentLocation.pathname, m = fl(c.nextLocation.pathname, o) || c.nextLocation.pathname;
  return zi(s.pathname, m) != null || zi(s.pathname, d) != null;
}
var fs = { exports: {} }, lt = {};
var Wm;
function bp() {
  if (Wm) return lt;
  Wm = 1;
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
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: T == null ? null : "" + T,
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
  return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, lt.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, lt.flushSync = function(p) {
    var y = m.T, b = o.p;
    try {
      if (m.T = null, o.p = 2, p) return p();
    } finally {
      m.T = y, o.p = b, o.d.f();
    }
  }, lt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(p, y));
  }, lt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, lt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, T = g(b, y.crossOrigin), N = typeof y.integrity == "string" ? y.integrity : void 0, Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? o.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: T,
          integrity: N,
          fetchPriority: Y
        }
      ) : b === "script" && o.d.X(p, {
        crossOrigin: T,
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
          o.d.M(p, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(p);
  }, lt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, T = g(b, y.crossOrigin);
      o.d.L(p, b, {
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
  }, lt.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        o.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(p);
  }, lt.requestFormReset = function(p) {
    o.d.r(p);
  }, lt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, lt.useFormState = function(p, y, b) {
    return m.H.useFormState(p, y, b);
  }, lt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, lt.version = "19.2.3", lt;
}
var Fm;
function Sp() {
  if (Fm) return fs.exports;
  Fm = 1;
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
var ds = { exports: {} }, Ka = {}, ms = { exports: {} }, hs = {};
var Im;
function Ep() {
  return Im || (Im = 1, (function(u) {
    function r(X, q) {
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
    function o(X) {
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
    var p = [], y = [], b = 1, T = null, N = 3, Y = !1, _ = !1, j = !1, D = !1, V = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function ee(X) {
      for (var q = c(y); q !== null; ) {
        if (q.callback === null) o(y);
        else if (q.startTime <= X)
          o(y), q.sortIndex = q.expirationTime, r(p, q);
        else break;
        q = c(y);
      }
    }
    function F(X) {
      if (j = !1, ee(X), !_)
        if (c(p) !== null)
          _ = !0, le || (le = !0, Ee());
        else {
          var q = c(y);
          q !== null && Je(F, q.startTime - X);
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
                for (ee(X), T = c(p); T !== null && !(T.expirationTime > X && Re()); ) {
                  var I = T.callback;
                  if (typeof I == "function") {
                    T.callback = null, N = T.priorityLevel;
                    var ne = I(
                      T.expirationTime <= X
                    );
                    if (X = u.unstable_now(), typeof ne == "function") {
                      T.callback = ne, ee(X), q = !0;
                      break t;
                    }
                    T === c(p) && o(p), ee(X);
                  } else o(p);
                  T = c(p);
                }
                if (T !== null) q = !0;
                else {
                  var Oe = c(y);
                  Oe !== null && Je(
                    F,
                    Oe.startTime - X
                  ), q = !1;
                }
              }
              break e;
            } finally {
              T = null, N = G, Y = !1;
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
      }, G > I ? (X.sortIndex = G, r(y, X), c(p) === null && X === c(y) && (j ? (Q(ue), ue = -1) : j = !0, Je(F, G - I))) : (X.sortIndex = ne, r(p, X), _ || Y || (_ = !0, le || (le = !0, Ee()))), X;
    }, u.unstable_shouldYield = Re, u.unstable_wrapCallback = function(X) {
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
  })(hs)), hs;
}
var Pm;
function xp() {
  return Pm || (Pm = 1, ms.exports = Ep()), ms.exports;
}
var eh;
function Tp() {
  if (eh) return Ka;
  eh = 1;
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
  function T(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = T(e), t !== null) return t;
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
  var X = Array.isArray, q = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
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
  var k = S(null), ie = S(null), re = S(null), ye = S(null);
  function Ye(e, t) {
    switch (Z(re, t), Z(ie, e), Z(k, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? sm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = sm(t), e = om(t, e);
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
  function Ue() {
    H(k), H(ie), H(re);
  }
  function In(e) {
    e.memoizedState !== null && Z(ye, e);
    var t = k.current, l = om(t, e.type);
    t !== l && (Z(ie, e), Z(k, l));
  }
  function uu(e) {
    ie.current === e && (H(k), H(ie)), ye.current === e && (H(ye), Xa._currentValue = I);
  }
  var Gi, Hs;
  function Ll(e) {
    if (Gi === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Gi = t && t[1] || "", Hs = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gi + e + Hs;
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
  function g0(e, t) {
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
  var Zi = Object.prototype.hasOwnProperty, ki = r.unstable_scheduleCallback, Ki = r.unstable_cancelCallback, p0 = r.unstable_shouldYield, v0 = r.unstable_requestPaint, yt = r.unstable_now, b0 = r.unstable_getCurrentPriorityLevel, qs = r.unstable_ImmediatePriority, Ys = r.unstable_UserBlockingPriority, iu = r.unstable_NormalPriority, S0 = r.unstable_LowPriority, Xs = r.unstable_IdlePriority, E0 = r.log, x0 = r.unstable_setDisableYieldValue, Pn = null, gt = null;
  function ml(e) {
    if (typeof E0 == "function" && x0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(Pn, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : A0, T0 = Math.log, R0 = Math.LN2;
  function A0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (T0(e) / R0 | 0) | 0;
  }
  var ru = 256, cu = 262144, su = 4194304;
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
    var e = su;
    return su <<= 1, (su & 62914560) === 0 && (su = 4194304), e;
  }
  function Ji(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ta(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function C0(e, t, l, n, a, i) {
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
    n !== 0 && Vs(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Vs(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Qs(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Zs(e, t) {
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
  function ks() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Dm(e.type));
  }
  function Ks(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var hl = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + hl, it = "__reactProps$" + hl, sn = "__reactContainer$" + hl, Fi = "__reactEvents$" + hl, _0 = "__reactListeners$" + hl, O0 = "__reactHandles$" + hl, Js = "__reactResources$" + hl, la = "__reactMarker$" + hl;
  function Ii(e) {
    delete e[Fe], delete e[it], delete e[Fi], delete e[_0], delete e[O0];
  }
  function on(e) {
    var t = e[Fe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[sn] || l[Fe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = pm(e); e !== null; ) {
            if (l = e[Fe]) return l;
            e = pm(e);
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
  function dn(e) {
    var t = e[Js];
    return t || (t = e[Js] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[la] = !0;
  }
  var $s = /* @__PURE__ */ new Set(), Ws = {};
  function Yl(e, t) {
    mn(e, t), mn(e + "Capture", t);
  }
  function mn(e, t) {
    for (Ws[e] = t, e = 0; e < t.length; e++)
      $s.add(t[e]);
  }
  var z0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fs = {}, Is = {};
  function N0(e) {
    return Zi.call(Is, e) ? !0 : Zi.call(Fs, e) ? !1 : z0.test(e) ? Is[e] = !0 : (Fs[e] = !0, !1);
  }
  function fu(e, t, l) {
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
  function Ps(e) {
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
      var t = Ps(e) ? "checked" : "value";
      e._valueTracker = M0(
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
    return e && (n = Ps(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
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
  function er(e, t, l, n, a, i, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? tr(e, f, At(t)) : l != null ? tr(e, f, At(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + At(h) : e.removeAttribute("name");
  }
  function to(e, t, l, n, a, i, f, h) {
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
  var U0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ao(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || U0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function uo(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
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
  function hu(e) {
    return B0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kt() {
  }
  var nr = null;
  function ar(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var gn = null, pn = null;
  function io(e) {
    var t = fn(e);
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
              n = l[t], n.form === e.form && eo(n);
          }
          break e;
        case "textarea":
          lo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && hn(e, !!l.multiple, t, !1);
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
      if (ur = !1, (gn !== null || pn !== null) && (ti(), gn && (t = gn, e = pn, pn = gn = null, io(t), e)))
        for (t = 0; t < e.length; t++) io(e[t]);
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
  function so() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(i) : i[h]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pu : so, this.isPropagationStopped = so, this;
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
  }, vu = rt(Xl), ia = N({}, Xl, { view: 0, detail: 0 }), H0 = rt(ia), cr, sr, ra, bu = N({}, ia, {
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
      return "movementX" in e ? e.movementX : (e !== ra && (ra && e.type === "mousemove" ? (cr = e.screenX - ra.screenX, sr = e.screenY - ra.screenY) : sr = cr = 0, ra = e), cr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : sr;
    }
  }), oo = rt(bu), L0 = N({}, bu, { dataTransfer: 0 }), q0 = rt(L0), Y0 = N({}, ia, { relatedTarget: 0 }), or = rt(Y0), X0 = N({}, Xl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), G0 = rt(X0), V0 = N({}, Xl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Q0 = rt(V0), Z0 = N({}, Xl, { data: 0 }), fo = rt(Z0), k0 = {
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
  var W0 = N({}, ia, {
    key: function(e) {
      if (e.key) {
        var t = k0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? K0[e.keyCode] || "Unidentified" : "";
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
  }), F0 = rt(W0), I0 = N({}, bu, {
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
  }), mo = rt(I0), P0 = N({}, ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fr
  }), ey = rt(P0), ty = N({}, Xl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ly = rt(ty), ny = N({}, bu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ay = rt(ny), uy = N({}, Xl, {
    newState: 0,
    oldState: 0
  }), iy = rt(uy), ry = [9, 13, 27, 32], dr = Jt && "CompositionEvent" in window, ca = null;
  Jt && "documentMode" in document && (ca = document.documentMode);
  var cy = Jt && "TextEvent" in window && !ca, ho = Jt && (!dr || ca && 8 < ca && 11 >= ca), yo = " ", go = !1;
  function po(e, t) {
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
  function vo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var vn = !1;
  function sy(e, t) {
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
  function oy(e, t) {
    if (vn)
      return e === "compositionend" || !dr && po(e, t) ? (e = co(), yu = rr = yl = null, vn = !1, e) : null;
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
  function bo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fy[e.type] : t === "textarea";
  }
  function So(e, t, l, n) {
    gn ? pn ? pn.push(n) : pn = [n] : gn = n, t = ci(t, "onChange"), 0 < t.length && (l = new vu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var sa = null, oa = null;
  function dy(e) {
    nm(e, 0);
  }
  function Su(e) {
    var t = na(e);
    if (eo(t)) return e;
  }
  function Eo(e, t) {
    if (e === "change") return t;
  }
  var xo = !1;
  if (Jt) {
    var mr;
    if (Jt) {
      var hr = "oninput" in document;
      if (!hr) {
        var To = document.createElement("div");
        To.setAttribute("oninput", "return;"), hr = typeof To.oninput == "function";
      }
      mr = hr;
    } else mr = !1;
    xo = mr && (!document.documentMode || 9 < document.documentMode);
  }
  function Ro() {
    sa && (sa.detachEvent("onpropertychange", Ao), oa = sa = null);
  }
  function Ao(e) {
    if (e.propertyName === "value" && Su(oa)) {
      var t = [];
      So(
        t,
        oa,
        e,
        ar(e)
      ), ro(dy, t);
    }
  }
  function my(e, t, l) {
    e === "focusin" ? (Ro(), sa = t, oa = l, sa.attachEvent("onpropertychange", Ao)) : e === "focusout" && Ro();
  }
  function hy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Su(oa);
  }
  function yy(e, t) {
    if (e === "click") return Su(t);
  }
  function gy(e, t) {
    if (e === "input" || e === "change")
      return Su(t);
  }
  function py(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : py;
  function fa(e, t) {
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
  var vy = Jt && "documentMode" in document && 11 >= document.documentMode, bn = null, gr = null, da = null, pr = !1;
  function zo(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    pr || bn == null || bn !== mu(n) || (n = bn, "selectionStart" in n && yr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), da && fa(da, n) || (da = n, n = ci(gr, "onSelect"), 0 < n.length && (t = new vu(
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
  var Sn = {
    animationend: Gl("Animation", "AnimationEnd"),
    animationiteration: Gl("Animation", "AnimationIteration"),
    animationstart: Gl("Animation", "AnimationStart"),
    transitionrun: Gl("Transition", "TransitionRun"),
    transitionstart: Gl("Transition", "TransitionStart"),
    transitioncancel: Gl("Transition", "TransitionCancel"),
    transitionend: Gl("Transition", "TransitionEnd")
  }, vr = {}, No = {};
  Jt && (No = document.createElement("div").style, "AnimationEvent" in window || (delete Sn.animationend.animation, delete Sn.animationiteration.animation, delete Sn.animationstart.animation), "TransitionEvent" in window || delete Sn.transitionend.transition);
  function Vl(e) {
    if (vr[e]) return vr[e];
    if (!Sn[e]) return e;
    var t = Sn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in No)
        return vr[e] = t[l];
    return e;
  }
  var Mo = Vl("animationend"), Do = Vl("animationiteration"), Uo = Vl("animationstart"), by = Vl("transitionrun"), Sy = Vl("transitionstart"), Ey = Vl("transitioncancel"), jo = Vl("transitionend"), Bo = /* @__PURE__ */ new Map(), br = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  br.push("scrollEnd");
  function Bt(e, t) {
    Bo.set(e, t), Yl(t, [e]);
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
  function Ru(e) {
    if (50 < Ua)
      throw Ua = 0, zc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xn = {};
  function xy(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new xy(e, t, l, n);
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
  function Lo(e, t) {
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
      f = C1(
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
        stack: Ls(t)
      }, Yo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ls(t)
    };
  }
  var Tn = [], Rn = 0, wu = null, ma = 0, Ot = [], zt = 0, gl = null, Xt = 1, Gt = "";
  function Wt(e, t) {
    Tn[Rn++] = ma, Tn[Rn++] = wu, wu = e, ma = t;
  }
  function Xo(e, t, l) {
    Ot[zt++] = Xt, Ot[zt++] = Gt, Ot[zt++] = gl, gl = e;
    var n = Xt;
    e = Gt;
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
    e.return !== null && (Wt(e, 1), Xo(e, 1, 0));
  }
  function wr(e) {
    for (; e === wu; )
      wu = Tn[--Rn], Tn[Rn] = null, ma = Tn[--Rn], Tn[Rn] = null;
    for (; e === gl; )
      gl = Ot[--zt], Ot[zt] = null, Gt = Ot[--zt], Ot[zt] = null, Xt = Ot[--zt], Ot[zt] = null;
  }
  function Go(e, t) {
    Ot[zt++] = Xt, Ot[zt++] = Gt, Ot[zt++] = gl, Xt = t.id, Gt = t.overflow, gl = e;
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
  function Vo(e) {
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
        de("invalid", t), to(
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
        de("invalid", t), no(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || rm(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = Kt), t = !0) : t = !1, t || vl(e, !0);
  }
  function Qo(e) {
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
  function An(e) {
    if (e !== Ie) return !1;
    if (!ge) return Qo(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Zc(e.type, e.memoizedProps)), l = !l), l && ze && vl(e), Qo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      ze = gm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      ze = gm(e);
    } else
      t === 27 ? (t = ze, Ml(e.type) ? (e = Wc, Wc = null, ze = e) : ze = t) : ze = Ie ? Dt(e.stateNode.nextSibling) : null;
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
  function Pe(e) {
    return Zo(Kl, e);
  }
  function _u(e, t) {
    return Kl === null && Jl(e), Zo(e, t);
  }
  function Zo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Ft === null) {
      if (e === null) throw Error(s(308));
      Ft = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ft = Ft.next = t;
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
  }, Ry = r.unstable_scheduleCallback, Ay = r.unstable_NormalPriority, Ve = {
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
  function ya(e) {
    e.refCount--, e.refCount === 0 && Ry(Ay, function() {
      e.controller.abort();
    });
  }
  var ga = null, Dr = 0, Cn = 0, _n = null;
  function wy(e, t) {
    if (ga === null) {
      var l = ga = [];
      Dr = 0, Cn = Bc(), _n = {
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
    if (--Dr === 0 && ga !== null) {
      _n !== null && (_n.status = "fulfilled");
      var e = ga;
      ga = null, Cn = 0, _n = null;
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
  var Ko = q.S;
  q.S = function(e, t) {
    Nd = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && wy(e, t), Ko !== null && Ko(e, t);
  };
  var $l = S(null);
  function Ur() {
    var e = $l.current;
    return e !== null ? e : _e.pooledCache;
  }
  function Ou(e, t) {
    t === null ? Z($l, $l.current) : Z($l, t.pool);
  }
  function Jo() {
    var e = Ur();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var On = Error(s(460)), jr = Error(s(474)), zu = Error(s(542)), Nu = { then: function() {
  } };
  function $o(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Wo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Kt, Kt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Io(e), e;
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
            throw e = t.reason, Io(e), e;
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
  var Fl = null;
  function Fo() {
    if (Fl === null) throw Error(s(459));
    var e = Fl;
    return Fl = null, e;
  }
  function Io(e) {
    if (e === On || e === zu)
      throw Error(s(483));
  }
  var zn = null, pa = 0;
  function Mu(e) {
    var t = pa;
    return pa += 1, zn === null && (zn = []), Wo(zn, e, t);
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
    function J(R, E, w, B) {
      for (var P = null, ve = null, W = E, oe = E = 0, he = null; W !== null && oe < w.length; oe++) {
        W.index > oe ? (he = W, W = null) : he = W.sibling;
        var be = O(
          R,
          W,
          w[oe],
          B
        );
        if (be === null) {
          W === null && (W = he);
          break;
        }
        e && W && be.alternate === null && t(R, W), E = i(be, E, oe), ve === null ? P = be : ve.sibling = be, ve = be, W = he;
      }
      if (oe === w.length)
        return l(R, W), ge && Wt(R, oe), P;
      if (W === null) {
        for (; oe < w.length; oe++)
          W = L(R, w[oe], B), W !== null && (E = i(
            W,
            E,
            oe
          ), ve === null ? P = W : ve.sibling = W, ve = W);
        return ge && Wt(R, oe), P;
      }
      for (W = n(W); oe < w.length; oe++)
        he = M(
          W,
          R,
          oe,
          w[oe],
          B
        ), he !== null && (e && he.alternate !== null && W.delete(
          he.key === null ? oe : he.key
        ), E = i(
          he,
          E,
          oe
        ), ve === null ? P = he : ve.sibling = he, ve = he);
      return e && W.forEach(function(Hl) {
        return t(R, Hl);
      }), ge && Wt(R, oe), P;
    }
    function te(R, E, w, B) {
      if (w == null) throw Error(s(151));
      for (var P = null, ve = null, W = E, oe = E = 0, he = null, be = w.next(); W !== null && !be.done; oe++, be = w.next()) {
        W.index > oe ? (he = W, W = null) : he = W.sibling;
        var Hl = O(R, W, be.value, B);
        if (Hl === null) {
          W === null && (W = he);
          break;
        }
        e && W && Hl.alternate === null && t(R, W), E = i(Hl, E, oe), ve === null ? P = Hl : ve.sibling = Hl, ve = Hl, W = he;
      }
      if (be.done)
        return l(R, W), ge && Wt(R, oe), P;
      if (W === null) {
        for (; !be.done; oe++, be = w.next())
          be = L(R, be.value, B), be !== null && (E = i(be, E, oe), ve === null ? P = be : ve.sibling = be, ve = be);
        return ge && Wt(R, oe), P;
      }
      for (W = n(W); !be.done; oe++, be = w.next())
        be = M(W, R, oe, be.value, B), be !== null && (e && be.alternate !== null && W.delete(be.key === null ? oe : be.key), E = i(be, E, oe), ve === null ? P = be : ve.sibling = be, ve = be);
      return e && W.forEach(function(L1) {
        return t(R, L1);
      }), ge && Wt(R, oe), P;
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
  var Il = Po(!0), ef = Po(!1), Sl = !1;
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
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Ru(e), Ho(e, null, l), t;
    }
    return Tu(e, n, t, l), Ru(e);
  }
  function ba(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Qs(e, l);
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
  function tf(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function lf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        tf(l[e], t);
  }
  var Nn = S(null), Uu = S(0);
  function nf(e, t) {
    e = rl, Z(Uu, e), Z(Nn, t), rl = e | t.baseLanes;
  }
  function Yr() {
    Z(Uu, rl), Z(Nn, Nn.current);
  }
  function Xr() {
    rl = Uu.current, H(Nn), H(Uu);
  }
  var St = S(null), Mt = null;
  function Tl(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(St, e), Mt === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Gr(e) {
    Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e);
  }
  function af(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e)) : Rl();
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
  var Pt = 0, ce = null, Ae = null, Qe = null, Bu = !1, Mn = !1, Pl = !1, Hu = 0, xa = 0, Dn = null, _y = 0;
  function Le() {
    throw Error(s(321));
  }
  function Vr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Qr(e, t, l, n, a, i) {
    return Pt = i, ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? Gf : uc, Pl = !1, i = l(n, a), Pl = !1, Mn && (i = rf(
      t,
      l,
      n,
      a
    )), uf(e), i;
  }
  function uf(e) {
    q.H = Aa;
    var t = Ae !== null && Ae.next !== null;
    if (Pt = 0, Qe = Ae = ce = null, Bu = !1, xa = 0, Dn = null, t) throw Error(s(300));
    e === null || Ze || (e = e.dependencies, e !== null && Cu(e) && (Ze = !0));
  }
  function rf(e, t, l, n) {
    ce = e;
    var a = 0;
    do {
      if (Mn && (Dn = null), xa = 0, Mn = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Qe = Ae = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      q.H = Vf, i = t(l, n);
    } while (Mn);
    return i;
  }
  function Oy() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ta(t) : t, e = e.useState()[0], (Ae !== null ? Ae.memoizedState : null) !== e && (ce.flags |= 1024), t;
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
  function Ta(e) {
    var t = xa;
    return xa += 1, Dn === null && (Dn = []), e = Wo(Dn, e, t), t = ce, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? Gf : uc), e;
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
    if (f && (a.memoizedState = l, Ze = !0), a = a.queue, Pr(ff.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Un(
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
      ), _e === null) throw Error(s(349));
      i || (Pt & 127) !== 0 || sf(n, t, l);
    }
    return l;
  }
  function sf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ce.updateQueue, t === null ? (t = Lu(), ce.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function of(e, t, l, n) {
    t.value = l, t.getSnapshot = n, df(t) && mf(e);
  }
  function ff(e, t, l) {
    return l(function() {
      df(t) && mf(e);
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
  function mf(e) {
    var t = Ql(e, 2);
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
  function hf(e, t, l, n) {
    return e.baseState = l, $r(
      e,
      Ae,
      typeof n == "function" ? n : el
    );
  }
  function zy(e, t, l, n, a) {
    if (Vu(e)) throw Error(s(485));
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
      q.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, yf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function yf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = q.T, f = {};
      q.T = f;
      try {
        var h = l(a, n), v = q.S;
        v !== null && v(f, h), gf(e, t, h);
      } catch (C) {
        Ir(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
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
      lastRenderedReducer: bf,
      lastRenderedState: t
    }, l.queue = n, l = qf.bind(
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
    }, n.queue = a, l = zy.bind(
      null,
      ce,
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
    )[0], e = Yu(el)[0], typeof t == "object" && t !== null && typeof t.then == "function")
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
      Ny.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function Ny(e, t) {
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
  function Un(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ce.updateQueue, t === null && (t = Lu(), ce.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Rf() {
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
  function Af(e, t) {
    Xu(8390656, 8, e, t);
  }
  function Pr(e, t) {
    Gu(2048, 8, e, t);
  }
  function My(e) {
    ce.flags |= 4;
    var t = ce.updateQueue;
    if (t === null)
      t = Lu(), ce.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function wf(e) {
    var t = Ge().memoizedState;
    return My({ ref: t, nextImpl: e }), function() {
      if ((Se & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Cf(e, t) {
    return Gu(4, 2, e, t);
  }
  function _f(e, t) {
    return Gu(4, 4, e, t);
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
  function zf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Gu(4, 4, Of.bind(null, t, e), l);
  }
  function ec() {
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
    return l === void 0 || (Pt & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Dd(), ce.lanes |= e, Cl |= e, l);
  }
  function Df(e, t, l, n) {
    return vt(l, t) ? l : Nn.current !== null ? (e = tc(e, l, n), vt(e, t) || (Ze = !0), e) : (Pt & 42) === 0 || (Pt & 1073741824) !== 0 && (me & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = Dd(), ce.lanes |= e, Cl |= e, t);
  }
  function Uf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var f = q.T, h = {};
    q.T = h, ac(e, !1, t, l);
    try {
      var v = a(), C = q.S;
      if (C !== null && C(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var U = Cy(
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
  function Dy() {
  }
  function lc(e, t, l, n) {
    if (e.tag !== 5) throw Error(s(476));
    var a = jf(e).queue;
    Uf(
      e,
      a,
      t,
      I,
      l === null ? Dy : function() {
        return Bf(e), l(n);
      }
    );
  }
  function jf(e) {
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
  function Bf(e) {
    var t = jf(e);
    t.next === null && (t = e.alternate.memoizedState), Ra(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function nc() {
    return Pe(Xa);
  }
  function Hf() {
    return Ge().memoizedState;
  }
  function Lf() {
    return Ge().memoizedState;
  }
  function Uy(e) {
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
    }, Vu(e) ? Yf(t, l) : (l = Er(e, t, l, n), l !== null && (dt(l, e, n), Xf(l, t, n)));
  }
  function qf(e, t, l) {
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
    if (Vu(e)) Yf(t, a);
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
        return dt(l, e, n), Xf(l, t, n), !0;
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
  function Yf(e, t) {
    Mn = Bu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Xf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Qs(e, l);
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
  Aa.useEffectEvent = Le;
  var Gf = {
    readContext: Pe,
    use: qu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Pe,
    useEffect: Af,
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
      }, n.queue = e, e = e.dispatch = jy.bind(
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
      var t = e.queue, l = qf.bind(null, ce, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = ut();
      return tc(l, e, t);
    },
    useTransition: function() {
      var e = Fr(!1);
      return e = Uf.bind(
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
        if (l = t(), _e === null)
          throw Error(s(349));
        (me & 127) !== 0 || sf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, Af(ff.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Un(
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
      var e = ut(), t = _e.identifierPrefix;
      if (ge) {
        var l = Gt, n = Xt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Hu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = _y++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: nc,
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
      return t.queue = l, t = ac.bind(
        null,
        ce,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Jr,
    useCacheRefresh: function() {
      return ut().memoizedState = Uy.bind(
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
    readContext: Pe,
    use: qu,
    useCallback: Nf,
    useContext: Pe,
    useEffect: Pr,
    useImperativeHandle: zf,
    useInsertionEffect: Cf,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Yu,
    useRef: Rf,
    useState: function() {
      return Yu(el);
    },
    useDebugValue: ec,
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
      var e = Yu(el)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ta(e),
        t
      ];
    },
    useSyncExternalStore: cf,
    useId: Hf,
    useHostTransitionStatus: nc,
    useFormState: Ef,
    useActionState: Ef,
    useOptimistic: function(e, t) {
      var l = Ge();
      return hf(l, Ae, e, t);
    },
    useMemoCache: Jr,
    useCacheRefresh: Lf
  };
  uc.useEffectEvent = wf;
  var Vf = {
    readContext: Pe,
    use: qu,
    useCallback: Nf,
    useContext: Pe,
    useEffect: Pr,
    useImperativeHandle: zf,
    useInsertionEffect: Cf,
    useLayoutEffect: _f,
    useMemo: Mf,
    useReducer: Wr,
    useRef: Rf,
    useState: function() {
      return Wr(el);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ae === null ? tc(l, e, t) : Df(
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
    useSyncExternalStore: cf,
    useId: Hf,
    useHostTransitionStatus: nc,
    useFormState: Tf,
    useActionState: Tf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ae !== null ? hf(l, Ae, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Jr,
    useCacheRefresh: Lf
  };
  Vf.useEffectEvent = wf;
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
  function Qf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !fa(l, n) || !fa(a, i) : !0;
  }
  function Zf(e, t, l, n) {
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
  function kf(e) {
    Eu(e);
  }
  function Kf(e) {
    console.error(e);
  }
  function Jf(e) {
    Eu(e);
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
  function cc(e, t, l) {
    return l = El(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Qu(e, t);
    }, l;
  }
  function Wf(e) {
    return e = El(e), e.tag = 3, e;
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
      $f(t, l, n), typeof a != "function" && (_l === null ? _l = /* @__PURE__ */ new Set([this]) : _l.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function By(e, t, l, n, a) {
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
            return Mt === null ? li() : l.alternate === null && qe === 0 && (qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Dc(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Dc(e, n, a)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return Dc(e, n, a), li(), !1;
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
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = cc(l.stateNode, n, e), Lr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (_l === null || !_l.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Wf(a), Ff(
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
  var sc = Error(s(461)), Ze = !1;
  function et(e, t, l, n) {
    t.child = e === null ? ef(t, null, l, n) : Il(
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
  function Pf(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !xr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, ed(
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
  function ed(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (fa(i, n) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = n = i, pc(e, a))
          (e.flags & 131072) !== 0 && (Ze = !0);
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
      i !== null ? (Ou(t, i.cachePool), nf(t, i), Rl(), t.memoizedState = null) : (e !== null && Ou(t, null), Yr(), Rl());
    return et(e, t, a, l), t.child;
  }
  function wa(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ld(e, t, l, n, a) {
    var i = Ur();
    return i = i === null ? null : { parent: Ve._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Ou(t, null), Yr(), af(t), e !== null && wn(e, t, n, !0), t.childLanes = a, null;
  }
  function Zu(e, t) {
    return t = Ku(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function nd(e, t, l) {
    return Il(t, e.child, null, l), e = Zu(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function Hy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = Zu(t, n), t.lanes = 536870912, wa(null, e);
        if (Gr(t), (e = ze) ? (e = ym(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: Xt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = qo(e), l.return = t, t.child = l, Ie = t, ze = null)) : e = null, e === null) throw vl(t);
        return t.lanes = 536870912, null;
      }
      return Zu(t, n);
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
        else throw Error(s(558));
      else if (Ze || wn(e, t, l, !1), a = (l & e.childLanes) !== 0, Ze || a) {
        if (n = _e, n !== null && (f = Zs(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Ql(e, f), dt(n, e, f), sc;
        li(), t = nd(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, ze = Dt(f.nextSibling), Ie = t, ge = !0, pl = null, Nt = !1, e !== null && Go(t, e), t = Zu(t, n), t.flags |= 4096;
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
    return Jl(t), l = Qr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Zr(), e !== null && !Ze ? (kr(e, t, a), tl(e, t, a)) : (ge && n && Ar(t), t.flags |= 1, et(e, t, l, a), t.child);
  }
  function ad(e, t, l, n, a, i) {
    return Jl(t), t.updateQueue = null, l = rf(
      t,
      n,
      l,
      a
    ), uf(e), n = Zr(), e !== null && !Ze ? (kr(e, t, i), tl(e, t, i)) : (ge && n && Ar(t), t.flags |= 1, et(e, t, l, i), t.child);
  }
  function ud(e, t, l, n, a) {
    if (Jl(t), t.stateNode === null) {
      var i = xn, f = l.contextType;
      typeof f == "object" && f !== null && (i = Pe(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = rc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Br(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? Pe(f) : xn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ic(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && rc.enqueueReplaceState(i, i.state, null), Ea(t, n, i, a), Sa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var h = t.memoizedProps, v = en(l, h);
      i.props = v;
      var C = i.context, U = l.contextType;
      f = xn, typeof U == "object" && U !== null && (f = Pe(U));
      var L = l.getDerivedStateFromProps;
      U = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || C !== f) && Zf(
        t,
        i,
        n,
        f
      ), Sl = !1;
      var O = t.memoizedState;
      i.state = O, Ea(t, n, i, a), Sa(), C = t.memoizedState, h || O !== C || Sl ? (typeof L == "function" && (ic(
        t,
        l,
        L,
        n
      ), C = t.memoizedState), (v = Sl || Qf(
        t,
        l,
        v,
        n,
        O,
        C,
        f
      )) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Hr(e, t), f = t.memoizedProps, U = en(l, f), i.props = U, L = t.pendingProps, O = i.context, C = l.contextType, v = xn, typeof C == "object" && C !== null && (v = Pe(C)), h = l.getDerivedStateFromProps, (C = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== L || O !== v) && Zf(
        t,
        i,
        n,
        v
      ), Sl = !1, O = t.memoizedState, i.state = O, Ea(t, n, i, a), Sa();
      var M = t.memoizedState;
      f !== L || O !== M || Sl || e !== null && e.dependencies !== null && Cu(e.dependencies) ? (typeof h == "function" && (ic(
        t,
        l,
        h,
        n
      ), M = t.memoizedState), (U = Sl || Qf(
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
  function id(e, t, l, n) {
    return kl(), t.flags |= 256, et(e, t, l, n), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(e) {
    return { baseLanes: e, cachePool: Jo() };
  }
  function mc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Tt), e;
  }
  function rd(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Tl(t) : Rl(), (e = ze) ? (e = ym(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: gl !== null ? { id: Xt, overflow: Gt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = qo(e), l.return = t, t.child = l, Ie = t, ze = null)) : e = null, e === null) throw vl(t);
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
      ), h.return = t, n.return = t, h.sibling = n, t.child = h, n = t.child, n.memoizedState = dc(l), n.childLanes = mc(
        e,
        f,
        l
      ), t.memoizedState = fc, wa(null, n)) : (Tl(t), hc(t, h));
    }
    var v = e.memoizedState;
    if (v !== null && (h = v.dehydrated, h !== null)) {
      if (i)
        t.flags & 256 ? (Tl(t), t.flags &= -257, t = yc(
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
        ), n = t.child, n.memoizedState = dc(l), n.childLanes = mc(
          e,
          f,
          l
        ), t.memoizedState = fc, t = wa(null, n));
      else if (Tl(t), $c(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(s(419)), n.stack = "", n.digest = f, ha({ value: n, source: null, stack: null }), t = yc(
          e,
          t,
          l
        );
      } else if (Ze || wn(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
        if (f = _e, f !== null && (n = Zs(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Ql(e, n), dt(f, e, n), sc;
        Jc(h) || li(), t = yc(
          e,
          t,
          l
        );
      } else
        Jc(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, ze = Dt(
          h.nextSibling
        ), Ie = t, ge = !0, pl = null, Nt = !1, e !== null && Go(t, e), t = hc(
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
    ), h.flags |= 2), h.return = t, n.return = t, n.sibling = h, t.child = n, wa(null, n), n = t.child, h = e.child.memoizedState, h === null ? h = dc(l) : (a = h.cachePool, a !== null ? (v = Ve._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Jo(), h = {
      baseLanes: h.baseLanes | l,
      cachePool: a
    }), n.memoizedState = h, n.childLanes = mc(
      e,
      f,
      l
    ), t.memoizedState = fc, wa(e.child, n)) : (Tl(t), l = e.child, e = l.sibling, l = $t(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function hc(e, t) {
    return t = Ku(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ku(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function yc(e, t, l) {
    return Il(t, e.child, null, l), e = hc(
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
  function sd(e, t, l) {
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
          e = l.alternate, e !== null && ju(e) === null && (a = l), l = l.sibling;
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
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Cu(e)));
  }
  function Ly(e, t, l) {
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
          return n.dehydrated !== null ? (Tl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? rd(e, t, l) : (Tl(t), e = tl(
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
            return sd(
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
        bl(t, Ve, e.memoizedState.cache);
    }
    return tl(e, t, l);
  }
  function od(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!pc(e, l) && (t.flags & 128) === 0)
          return Ze = !1, Ly(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, ge && (t.flags & 1048576) !== 0 && Xo(t, ma, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Wl(t.elementType), t.type = e, typeof e == "function")
            xr(e) ? (n = en(e, n), t.tag = 1, t = ud(
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
              if (a === F) {
                t.tag = 11, t = If(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === $) {
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
        ), ud(
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
              t = id(
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
              ), ha(a), t = id(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ze = Dt(e.firstChild), Ie = t, ge = !0, pl = null, Nt = !0, l = ef(
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
        return ku(e, t), e === null ? (l = Em(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = si(
          re.current
        ).createElement(l), n[Fe] = t, n[it] = e, tt(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = Em(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return In(t), e === null && ge && (n = t.stateNode = vm(
          t.type,
          t.pendingProps,
          re.current
        ), Ie = t, Nt = !0, a = ze, Ml(t.type) ? (Wc = a, ze = Dt(n.firstChild)) : ze = a), et(
          e,
          t,
          t.pendingProps.children,
          l
        ), ku(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = ze) && (n = h1(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Ie = t, ze = Dt(n.firstChild), Nt = !1, a = !0) : a = !1), a || vl(t)), In(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Zc(a, i) ? n = null : f !== null && Zc(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Qr(
          e,
          t,
          Oy,
          null,
          null,
          l
        ), Xa._currentValue = a), ku(e, t), et(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = ze) && (l = y1(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Ie = t, ze = null, e = !0) : e = !1), e || vl(t)), null;
      case 13:
        return rd(e, t, l);
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
        return If(
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
        return sd(e, t, l);
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
  function fd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !wm(t))
      if (Hd()) e.flags |= 8192;
      else
        throw Fl = Nu, jr;
  }
  function Ju(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Gs() : 536870912, e.lanes |= t, Ln |= t);
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
        return Ne(t), null;
      case 1:
        return Ne(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), It(Ve), Ue(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (An(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, _r())), Ne(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (ll(t), i !== null ? (Ne(t), fd(t, i)) : (Ne(t), vc(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (ll(t), Ne(t), fd(t, i)) : (Ne(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ll(t), Ne(t), vc(
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
          e = k.current, An(t) ? Vo(t) : (e = vm(a, n, l), t.stateNode = e, ll(t));
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
          if (i = k.current, An(t))
            Vo(t);
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
        return Ne(t), vc(
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
            e[Fe] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || rm(e.nodeValue, l)), e || vl(t, !0);
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
        return Ue(), e === null && Yc(t.stateNode.containerInfo), Ne(t), null;
      case 10:
        return It(t.type), Ne(t), null;
      case 19:
        if (H(Xe), n = t.memoizedState, n === null) return Ne(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Ca(n, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = ju(e), i !== null) {
                  for (t.flags |= 128, Ca(n, !1), e = i.updateQueue, t.updateQueue = e, Ju(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Lo(l, e), l = l.sibling;
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
  function Yy(e, t) {
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
  function dd(e, t) {
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
        lf(t, l);
      } catch (n) {
        Te(e, e.return, n);
      }
    }
  }
  function hd(e, t, l) {
    l.props = en(
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
      Te(e, e.return, a);
    }
  }
  function bc(e, t, l) {
    try {
      var n = e.stateNode;
      c1(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function gd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ml(e.type) || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gd(e.return)) return null;
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
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Kt));
    else if (n !== 4 && (n === 27 && Ml(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
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
  function pd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      tt(t, n, l), t[Fe] = e, t[it] = l;
    } catch (i) {
      Te(e, e.return, i);
    }
  }
  var nl = !1, ke = !1, xc = !1, vd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Xy(e, t) {
    if (e = e.containerInfo, Vc = gi, e = Oo(e), yr(e)) {
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
    for (Qc = { focusedElem: e, selectionRange: l }, gi = !1, We = t; We !== null; )
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
  function bd(e, t, l) {
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
        n & 64 && md(l), n & 512 && Oa(l, l.return);
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
            lf(e, t);
          } catch (f) {
            Te(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && pd(l);
      case 26:
      case 5:
        ul(e, l), t === null && n & 4 && yd(l), n & 512 && Oa(l, l.return);
        break;
      case 12:
        ul(e, l);
        break;
      case 31:
        ul(e, l), n & 4 && xd(e, l);
        break;
      case 13:
        ul(e, l), n & 4 && Td(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Wy.bind(
          null,
          l
        ), g1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || nl, !n) {
          t = t !== null && t.memoizedState !== null || ke, a = nl;
          var i = ke;
          nl = n, (ke = t) && !i ? il(
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
  function Sd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Sd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var De = null, ct = !1;
  function al(e, t, l) {
    for (l = l.child; l !== null; )
      Ed(e, t, l), l = l.sibling;
  }
  function Ed(e, t, l) {
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
        ke || Vt(l, t);
        var n = De, a = ct;
        Ml(l.type) && (De = l.stateNode, ct = !1), al(
          e,
          t,
          l
        ), La(l.stateNode), De = n, ct = a;
        break;
      case 5:
        ke || Vt(l, t);
      case 6:
        if (n = De, a = ct, De = null, al(
          e,
          t,
          l
        ), De = n, ct = a, De !== null)
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
        De !== null && (ct ? (e = De, mm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), kn(e)) : mm(De, l.stateNode));
        break;
      case 4:
        n = De, a = ct, De = l.stateNode.containerInfo, ct = !0, al(
          e,
          t,
          l
        ), De = n, ct = a;
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
        ke || (Vt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && hd(
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
  function xd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        kn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function Td(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        kn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function Gy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new vd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new vd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Wu(e, t) {
    var l = Gy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Fy.bind(null, e, n);
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
              if (Ml(h.type)) {
                De = h.stateNode, ct = !1;
                break e;
              }
              break;
            case 5:
              De = h.stateNode, ct = !1;
              break e;
            case 3:
            case 4:
              De = h.stateNode.containerInfo, ct = !0;
              break e;
          }
          h = h.return;
        }
        if (De === null) throw Error(s(160));
        Ed(i, f, a), De = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Rd(t, e), t = t.sibling;
  }
  var Ht = null;
  function Rd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, e), ot(e), n & 4 && (Al(3, e, e.return), _a(3, e), Al(5, e, e.return));
        break;
      case 1:
        st(t, e), ot(e), n & 512 && (ke || l === null || Vt(l, l.return)), n & 64 && nl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Ht;
        if (st(t, e), ot(e), n & 512 && (ke || l === null || Vt(l, l.return)), n & 4) {
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
                      var f = Rm(
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
                      if (f = Rm(
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
                Am(
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
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Am(
              a,
              e.type,
              e.stateNode
            ) : Tm(
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
        st(t, e), ot(e), n & 512 && (ke || l === null || Vt(l, l.return)), l !== null && n & 4 && bc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ot(e), n & 512 && (ke || l === null || Vt(l, l.return)), e.flags & 32) {
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
        if (di = null, a = Ht, Ht = oi(t.containerInfo), st(t, e), Ht = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            kn(t.containerInfo);
          } catch (J) {
            Te(e, e.return, J);
          }
        xc && (xc = !1, Ad(e));
        break;
      case 4:
        n = Ht, Ht = oi(
          e.stateNode.containerInfo
        ), st(t, e), ot(e), Ht = n;
        break;
      case 12:
        st(t, e), ot(e);
        break;
      case 31:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 13:
        st(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Iu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = nl, U = ke;
        if (nl = C || a, ke = U || v, st(t, e), ke = U, nl = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || nl || ke || tn(e)), l = null, t = e; ; ) {
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
                  a ? hm(M, !0) : hm(v.stateNode, !1);
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
          if (gd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Sc(e);
            $u(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (yn(f, ""), l.flags &= -33);
            var h = Sc(e);
            $u(e, h, f);
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
  function Ad(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ad(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ul(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        bd(e, t.alternate, t), t = t.sibling;
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
          typeof l.componentWillUnmount == "function" && hd(
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
  function il(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          il(
            a,
            i,
            l
          ), _a(4, i);
          break;
        case 1:
          if (il(
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
                  tf(v[a], h);
            } catch (C) {
              Te(n, n.return, C);
            }
          }
          l && f & 64 && md(i), Oa(i, i.return);
          break;
        case 27:
          pd(i);
        case 26:
        case 5:
          il(
            a,
            i,
            l
          ), l && n === null && f & 4 && yd(i), Oa(i, i.return);
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
          ), l && f & 4 && xd(a, i);
          break;
        case 13:
          il(
            a,
            i,
            l
          ), l && f & 4 && Td(a, i);
          break;
        case 22:
          i.memoizedState === null && il(
            a,
            i,
            l
          ), Oa(i, i.return);
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
  function Tc(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ya(l));
  }
  function Rc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ya(e));
  }
  function Lt(e, t, l, n) {
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
            za(l, n), a & 2048 && Tc(
              n.alternate,
              n
            );
            break;
          case 24:
            za(l, n), a & 2048 && Rc(n.alternate, n);
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
        Cd(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Cd(e, t, l) {
    switch (e.tag) {
      case 26:
        Bn(
          e,
          t,
          l
        ), e.flags & Na && e.memoizedState !== null && _1(
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
  function _d(e) {
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
          We = n, zd(
            n,
            e
          );
        }
      _d(e);
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
          We = n, zd(
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
  function zd(e, t) {
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
  var Vy = {
    getCacheForType: function(e) {
      var t = Pe(Ve), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Pe(Ve).controller.signal;
    }
  }, Qy = typeof WeakMap == "function" ? WeakMap : Map, Se = 0, _e = null, fe = null, me = 0, xe = 0, xt = null, wl = !1, Hn = !1, Ac = !1, rl = 0, qe = 0, Cl = 0, ln = 0, wc = 0, Tt = 0, Ln = 0, Da = null, ft = null, Cc = !1, Iu = 0, Nd = 0, Pu = 1 / 0, ei = null, _l = null, Ke = 0, Ol = null, qn = null, cl = 0, _c = 0, Oc = null, Md = null, Ua = 0, zc = null;
  function Rt() {
    return (Se & 2) !== 0 && me !== 0 ? me & -me : q.T !== null ? Bc() : ks();
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
  function Ud(e, t, l) {
    if ((Se & 6) !== 0) throw Error(s(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ea(e, t), a = n ? Ky(e, t) : Mc(e, t, !0), i = n;
    do {
      if (a === 0) {
        Hn && !n && zl(e, t, 0, !1);
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
              var h = e;
              a = Da;
              var v = h.current.memoizedState.isDehydrated;
              if (v && (Yn(h, f).flags |= 256), f = Mc(
                h,
                f,
                !1
              ), f !== 2) {
                if (Ac && !v) {
                  h.errorRecoveryDisabledLanes |= i, ln |= i, a = 4;
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
              !wl
            ), ou(n, 0, !0) !== 0) break e;
            cl = t, n.timeoutHandle = fm(
              jd.bind(
                null,
                n,
                l,
                ft,
                ei,
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
          jd(
            n,
            l,
            ft,
            ei,
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
  function jd(e, t, l, n, a, i, f, h, v, C, U, L, O, M) {
    if (e.timeoutHandle = -1, L = t.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Kt
      }, Cd(
        t,
        i,
        L
      );
      var J = (i & 62914560) === i ? Iu - yt() : (i & 4194048) === i ? Nd - yt() : 0;
      if (J = O1(
        L,
        J
      ), J !== null) {
        cl = i, e.cancelPendingCommit = J(
          Vd.bind(
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
    Vd(
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
  function zl(e, t, l, n) {
    t &= ~wc, t &= ~ln, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Vs(e, l, t);
  }
  function ti() {
    return (Se & 6) === 0 ? (ja(0), !1) : !0;
  }
  function Nc() {
    if (fe !== null) {
      if (xe === 0)
        var e = fe.return;
      else
        e = fe, Ft = Kl = null, Kr(e), zn = null, pa = 0, e = fe;
      for (; e !== null; )
        dd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Yn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, f1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), cl = 0, Nc(), _e = e, fe = l = $t(e.current, null), me = t, xe = 0, xt = null, wl = !1, Hn = ea(e, t), Ac = !1, Ln = Tt = wc = ln = Cl = qe = 0, ft = Da = null, Cc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return rl = t, xu(), l;
  }
  function Bd(e, t) {
    ce = null, q.H = Aa, t === On || t === zu ? (t = Fo(), xe = 3) : t === jr ? (t = Fo(), xe = 4) : xe = t === sc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, fe === null && (qe = 1, Qu(
      e,
      _t(t, e.current)
    ));
  }
  function Hd() {
    var e = St.current;
    return e === null ? !0 : (me & 4194048) === me ? Mt === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === Mt : !1;
  }
  function Ld() {
    var e = q.H;
    return q.H = Aa, e === null ? Aa : e;
  }
  function qd() {
    var e = q.A;
    return q.A = Vy, e;
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
    var n = Se;
    Se |= 2;
    var a = Ld(), i = qd();
    (_e !== e || me !== t) && (ei = null, Yn(e, t)), t = !1;
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
        ky(), f = qe;
        break;
      } catch (U) {
        Bd(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ft = Kl = null, Se = n, q.H = a, q.A = i, fe === null && (_e = null, me = 0, xu()), f;
  }
  function ky() {
    for (; fe !== null; ) Yd(fe);
  }
  function Ky(e, t) {
    var l = Se;
    Se |= 2;
    var n = Ld(), a = qd();
    _e !== e || me !== t ? (ei = null, Pu = yt() + 500, Yn(e, t)) : Hn = ea(
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
              if ($o(i)) {
                xe = 0, xt = null, Xd(t);
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
              $o(i) ? (xe = 0, xt = null, Xd(t)) : (xe = 0, xt = null, Xn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var h = fe;
                  if (f ? wm(f) : h.stateNode.complete) {
                    xe = 0, xt = null;
                    var v = h.sibling;
                    if (v !== null) fe = v;
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
        Jy();
        break;
      } catch (U) {
        Bd(e, U);
      }
    while (!0);
    return Ft = Kl = null, q.H = n, q.A = a, Se = l, fe !== null ? 0 : (_e = null, me = 0, xu(), qe);
  }
  function Jy() {
    for (; fe !== null && !p0(); )
      Yd(fe);
  }
  function Yd(e) {
    var t = od(e.alternate, e, rl);
    e.memoizedProps = e.pendingProps, t === null ? ni(e) : fe = t;
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
        dd(l, t), t = fe = Lo(t, rl), t = od(l, t, rl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ni(e) : fe = t;
  }
  function Xn(e, t, l, n) {
    Ft = Kl = null, Kr(t), zn = null, pa = 0;
    var a = t.return;
    try {
      if (By(
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
    t.flags & 32768 ? (ge || n === 1 ? e = !0 : Hn || (me & 536870912) !== 0 ? e = !1 : (wl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Gd(t, e)) : ni(t);
  }
  function ni(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Gd(
          t,
          wl
        );
        return;
      }
      e = t.return;
      var l = qy(
        t.alternate,
        t,
        rl
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
  function Gd(e, t) {
    do {
      var l = Yy(e.alternate, e);
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
  function Vd(e, t, l, n, a, i, f, h, v) {
    e.cancelPendingCommit = null;
    do
      ai();
    while (Ke !== 0);
    if ((Se & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (i = t.lanes | t.childLanes, i |= Sr, C0(
        e,
        l,
        i,
        f,
        h,
        v
      ), e === _e && (fe = _e = null, me = 0), qn = t, Ol = e, cl = l, _c = i, Oc = a, Md = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Iy(iu, function() {
        return Jd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null, a = G.p, G.p = 2, f = Se, Se |= 4;
        try {
          Xy(e, t, l);
        } finally {
          Se = f, G.p = a, q.T = n;
        }
      }
      Ke = 1, Qd(), Zd(), kd();
    }
  }
  function Qd() {
    if (Ke === 1) {
      Ke = 0;
      var e = Ol, t = qn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Se;
        Se |= 4;
        try {
          Rd(t, e);
          var i = Qc, f = Oo(e.containerInfo), h = i.focusedElem, v = i.selectionRange;
          if (f !== h && h && h.ownerDocument && _o(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && yr(h)) {
              var C = v.start, U = v.end;
              if (U === void 0 && (U = C), "selectionStart" in h)
                h.selectionStart = C, h.selectionEnd = Math.min(
                  U,
                  h.value.length
                );
              else {
                var L = h.ownerDocument || document, O = L && L.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), J = h.textContent.length, te = Math.min(v.start, J), Ce = v.end === void 0 ? te : Math.min(v.end, J);
                  !M.extend && te > Ce && (f = Ce, Ce = te, te = f);
                  var R = Co(
                    h,
                    te
                  ), E = Co(
                    h,
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
          gi = !!Vc, Qc = Vc = null;
        } finally {
          Se = a, G.p = n, q.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function Zd() {
    if (Ke === 2) {
      Ke = 0;
      var e = Ol, t = qn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Se;
        Se |= 4;
        try {
          bd(e, t.alternate, t);
        } finally {
          Se = a, G.p = n, q.T = l;
        }
      }
      Ke = 3;
    }
  }
  function kd() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, v0();
      var e = Ol, t = qn, l = cl, n = Md;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, qn = Ol = null, Kd(e, e.pendingLanes));
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
      (cl & 3) !== 0 && ai(), Qt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === zc ? Ua++ : (Ua = 0, zc = e) : Ua = 0, ja(0);
    }
  }
  function Kd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ya(t)));
  }
  function ai() {
    return Qd(), Zd(), kd(), Jd();
  }
  function Jd() {
    if (Ke !== 5) return !1;
    var e = Ol, t = _c;
    _c = 0;
    var l = Wi(cl), n = q.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, q.T = null, l = Oc, Oc = null;
      var i = Ol, f = cl;
      if (Ke = 0, qn = Ol = null, cl = 0, (Se & 6) !== 0) throw Error(s(331));
      var h = Se;
      if (Se |= 4, Od(i.current), wd(
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
      G.p = a, q.T = n, Kd(e, t);
    }
  }
  function $d(e, t, l) {
    t = _t(l, t), t = cc(e.stateNode, t, 2), e = xl(e, t, 2), e !== null && (ta(e, 2), Qt(e));
  }
  function Te(e, t, l) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (_l === null || !_l.has(n))) {
            e = _t(l, e), l = Wf(2), n = xl(t, l, 2), n !== null && (Ff(
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
      n = e.pingCache = new Qy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Ac = !0, a.add(l), e = $y.bind(null, e, t, l), t.then(e, e));
  }
  function $y(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, _e === e && (me & l) === l && (qe === 4 || qe === 3 && (me & 62914560) === me && 300 > yt() - Iu ? (Se & 2) === 0 && Yn(e, 0) : wc |= l, Ln === me && (Ln = 0)), Qt(e);
  }
  function Wd(e, t) {
    t === 0 && (t = Gs()), e = Ql(e, t), e !== null && (ta(e, t), Qt(e));
  }
  function Wy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Wd(e, l);
  }
  function Fy(e, t) {
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
    n !== null && n.delete(t), Wd(e, l);
  }
  function Iy(e, t) {
    return ki(e, t);
  }
  var ui = null, Gn = null, Uc = !1, ii = !1, jc = !1, Nl = 0;
  function Qt(e) {
    e !== Gn && e.next === null && (Gn === null ? ui = Gn = e : Gn = Gn.next = e), ii = !0, Uc || (Uc = !0, e1());
  }
  function ja(e, t) {
    if (!jc && ii) {
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
            i !== 0 && (l = !0, em(n, i));
          } else
            i = me, i = ou(
              n,
              n === _e ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || ea(n, i) || (l = !0, em(n, i));
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
    ii = Uc = !1;
    var e = 0;
    Nl !== 0 && o1() && (e = Nl);
    for (var t = yt(), l = null, n = ui; n !== null; ) {
      var a = n.next, i = Id(n, t);
      i === 0 ? (n.next = null, l === null ? ui = a : l.next = a, a === null && (Gn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ii = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || ja(e), Nl !== 0 && (Nl = 0);
  }
  function Id(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), h = 1 << f, v = a[f];
      v === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[f] = w0(h, t)) : v <= t && (e.expiredLanes |= h), i &= ~h;
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
          l = Ys;
          break;
        case 32:
          l = iu;
          break;
        case 268435456:
          l = Xs;
          break;
        default:
          l = iu;
      }
      return n = Pd.bind(null, e), l = ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ki(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Pd(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ai() && e.callbackNode !== l)
      return null;
    var n = me;
    return n = ou(
      e,
      e === _e ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Ud(e, n, t), Id(e, yt()), e.callbackNode != null && e.callbackNode === l ? Pd.bind(null, e) : null);
  }
  function em(e, t) {
    if (ai()) return null;
    Ud(e, t, !0);
  }
  function e1() {
    d1(function() {
      (Se & 6) !== 0 ? ki(
        qs,
        Py
      ) : Fd();
    });
  }
  function Bc() {
    if (Nl === 0) {
      var e = Cn;
      e === 0 && (e = ru, ru <<= 1, (ru & 261888) === 0 && (ru = 256)), Nl = e;
    }
    return Nl;
  }
  function tm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : hu("" + e);
  }
  function lm(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function t1(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = tm(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? tm(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var h = new vu(
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
                if (Nl !== 0) {
                  var v = f ? lm(a, f) : new FormData(a);
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
                typeof i == "function" && (h.preventDefault(), v = f ? lm(a, f) : new FormData(a), lc(
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
  for (var Hc = 0; Hc < br.length; Hc++) {
    var Lc = br[Hc], l1 = Lc.toLowerCase(), n1 = Lc[0].toUpperCase() + Lc.slice(1);
    Bt(
      l1,
      "on" + n1
    );
  }
  Bt(Mo, "onAnimationEnd"), Bt(Do, "onAnimationIteration"), Bt(Uo, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(by, "onTransitionRun"), Bt(Sy, "onTransitionStart"), Bt(Ey, "onTransitionCancel"), Bt(jo, "onTransitionEnd"), mn("onMouseEnter", ["mouseout", "mouseover"]), mn("onMouseLeave", ["mouseout", "mouseover"]), mn("onPointerEnter", ["pointerout", "pointerover"]), mn("onPointerLeave", ["pointerout", "pointerover"]), Yl(
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
  ), a1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ba)
  );
  function nm(e, t) {
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
    l.has(n) || (am(t, e, 2, !1), l.add(n));
  }
  function qc(e, t, l) {
    var n = 0;
    t && (n |= 4), am(
      l,
      e,
      n,
      t
    );
  }
  var ri = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(e) {
    if (!e[ri]) {
      e[ri] = !0, $s.forEach(function(l) {
        l !== "selectionchange" && (a1.has(l) || qc(l, !1, e), qc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ri] || (t[ri] = !0, qc("selectionchange", !1, t));
    }
  }
  function am(e, t, l, n) {
    switch (Dm(t)) {
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
    ro(function() {
      var C = i, U = ar(l), L = [];
      e: {
        var O = Bo.get(e);
        if (O !== void 0) {
          var M = vu, J = e;
          switch (e) {
            case "keypress":
              if (gu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = F0;
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
              M = q0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ey;
              break;
            case Mo:
            case Do:
            case Uo:
              M = G0;
              break;
            case jo:
              M = ly;
              break;
            case "scroll":
            case "scrollend":
              M = H0;
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
              M = mo;
              break;
            case "toggle":
            case "beforetoggle":
              M = iy;
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
          if ((M || O) && (O = U.window === U ? U : (O = U.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = C, J = J ? on(J) : null, J !== null && (Ce = m(J), te = J.tag, J !== Ce || te !== 5 && te !== 27 && te !== 6) && (J = null)) : (M = null, J = C), M !== J)) {
            if (te = oo, B = "onMouseLeave", R = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (te = mo, B = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Ce = M == null ? O : na(M), w = J == null ? O : na(J), O = new te(
              B,
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
                for (te = u1, R = M, E = J, w = 0, B = R; B; B = te(B))
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
            else te = null;
            M !== null && um(
              L,
              O,
              M,
              te,
              !1
            ), J !== null && Ce !== null && um(
              L,
              Ce,
              J,
              te,
              !0
            );
          }
        }
        e: {
          if (O = C ? na(C) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var ve = Eo;
          else if (bo(O))
            if (xo)
              ve = gy;
            else {
              ve = hy;
              var W = my;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? C && lr(C.elementType) && (ve = Eo) : ve = yy;
          if (ve && (ve = ve(e, C))) {
            So(
              L,
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
            (bo(W) || W.contentEditable === "true") && (bn = W, gr = C, da = null);
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
            pr = !1, zo(L, l, U);
            break;
          case "selectionchange":
            if (vy) break;
          case "keydown":
          case "keyup":
            zo(L, l, U);
        }
        var oe;
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
          vn ? po(e, l) && (he = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (he = "onCompositionStart");
        he && (ho && l.locale !== "ko" && (vn || he !== "onCompositionStart" ? he === "onCompositionEnd" && vn && (oe = co()) : (yl = U, rr = "value" in yl ? yl.value : yl.textContent, vn = !0)), W = ci(C, he), 0 < W.length && (he = new fo(
          he,
          e,
          null,
          l,
          U
        ), L.push({ event: he, listeners: W }), oe ? he.data = oe : (oe = vo(l), oe !== null && (he.data = oe)))), (oe = cy ? sy(e, l) : oy(e, l)) && (he = ci(C, "onBeforeInput"), 0 < he.length && (W = new fo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          U
        ), L.push({
          event: W,
          listeners: he
        }), W.data = oe)), t1(
          L,
          e,
          C,
          l,
          U
        );
      }
      nm(L, t);
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
  function u1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function um(e, t, l, n, a) {
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
  var i1 = /\r\n?/g, r1 = /\u0000|\uFFFD/g;
  function im(e) {
    return (typeof e == "string" ? e : "" + e).replace(i1, `
`).replace(r1, "");
  }
  function rm(e, t) {
    return t = im(t), im(e) === t;
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
        uo(e, n, i);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = j0.get(l) || l, fu(e, l, n));
    }
  }
  function Gc(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        uo(e, n, i);
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
        if (!Ws.hasOwnProperty(l))
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
        to(
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
        no(e, n, a, i);
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
          for (U in l)
            l.hasOwnProperty(U) && (n = l[U], n !== void 0 && Gc(
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
        lo(e, O, M);
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
            O = l[Ce], l.hasOwnProperty(Ce) && O !== void 0 && !n.hasOwnProperty(Ce) && Gc(
              e,
              t,
              Ce,
              void 0,
              n,
              O
            );
          for (U in n)
            O = n[U], M = l[U], !n.hasOwnProperty(U) || O === M || O === void 0 && M === void 0 || Gc(
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
  function s1() {
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
  function si(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function sm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function om(e, t) {
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
  var fm = typeof setTimeout == "function" ? setTimeout : void 0, f1 = typeof clearTimeout == "function" ? clearTimeout : void 0, dm = typeof Promise == "function" ? Promise : void 0, d1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof dm < "u" ? function(e) {
    return dm.resolve(null).then(e).catch(m1);
  } : fm;
  function m1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ml(e) {
    return e === "head";
  }
  function mm(e, t) {
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
  function hm(e, t) {
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
  function h1(e, t, l, n) {
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
  function y1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ym(e, t) {
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
  var Wc = null;
  function gm(e) {
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
  function pm(e) {
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
  function vm(e, t, l) {
    switch (t = si(l), e) {
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
  var Ut = /* @__PURE__ */ new Map(), bm = /* @__PURE__ */ new Set();
  function oi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var sl = G.d;
  G.d = {
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
    var e = sl.f(), t = ti();
    return e || t;
  }
  function v1(e) {
    var t = fn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Bf(t) : sl.r(e);
  }
  var Vn = typeof document > "u" ? null : document;
  function Sm(e, t, l) {
    var n = Vn;
    if (n && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), bm.has(a) || (bm.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), tt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function b1(e) {
    sl.D(e), Sm("dns-prefetch", e, null);
  }
  function S1(e, t) {
    sl.C(e, t), Sm("preconnect", e, t);
  }
  function E1(e, t, l) {
    sl.L(e, t, l);
    var n = Vn;
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
  function x1(e, t) {
    sl.m(e, t);
    var l = Vn;
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
  function T1(e, t, l) {
    sl.S(e, t, l);
    var n = Vn;
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
  function R1(e, t) {
    sl.X(e, t);
    var l = Vn;
    if (l && e) {
      var n = dn(l).hoistableScripts, a = Zn(e), i = n.get(a);
      i || (i = l.querySelector(Ya(a)), i || (e = N({ src: e, async: !0 }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), $e(i), tt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function A1(e, t) {
    sl.M(e, t);
    var l = Vn;
    if (l && e) {
      var n = dn(l).hoistableScripts, a = Zn(e), i = n.get(a);
      i || (i = l.querySelector(Ya(a)), i || (e = N({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), $e(i), tt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Em(e, t, l, n) {
    var a = (a = re.current) ? oi(a) : null;
    if (!a) throw Error(s(446));
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
  function xm(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function w1(e, t, l, n) {
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
          ), $e(n), tt(n, "style", a), fi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Qn(l.href);
          var i = e.querySelector(
            qa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          n = xm(l), (a = Ut.get(a)) && Fc(n, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var f = i;
          return f._p = new Promise(function(h, v) {
            f.onload = h, f.onerror = v;
          }), tt(i, "link", n), t.state.loading |= 4, fi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Zn(l.src), (a = e.querySelector(
            Ya(i)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = Ut.get(i)) && (n = N({}, l), Ic(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), tt(a, "link", n), e.head.appendChild(a), t.instance = a);
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
  var di = null;
  function Rm(e, t, l) {
    if (di === null) {
      var n = /* @__PURE__ */ new Map(), a = di = /* @__PURE__ */ new Map();
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
  function Am(e, t, l) {
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
  function wm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function _1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Qn(n.href), i = t.querySelector(
          qa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = mi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, n = xm(n), (a = Ut.get(a)) && Fc(n, a), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function(h, v) {
          f.onload = h, f.onerror = v;
        }), tt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = mi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Pc = 0;
  function O1(e, t) {
    return e.stylesheets && e.count === 0 && yi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && yi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Pc === 0 && (Pc = 62500 * s1());
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
  var hi = null;
  function yi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hi = /* @__PURE__ */ new Map(), t.forEach(z1, e), hi = null, mi.call(e));
  }
  function z1(e, t) {
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
  function N1(e, t, l, n, a, i, f, h, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ji(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ji(0), this.hiddenUpdates = Ji(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Cm(e, t, l, n, a, i, f, h, v, C, U, L) {
    return e = new N1(
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
  function _m(e) {
    return e ? (e = xn, e) : xn;
  }
  function Om(e, t, l, n, a, i) {
    a = _m(a), n.context === null ? n.context = a : n.pendingContext = a, n = El(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = xl(e, n, t), l !== null && (dt(l, e, t), ba(l, e, t));
  }
  function zm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function es(e, t) {
    zm(e, t), (e = e.alternate) && zm(e, t);
  }
  function Nm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ql(e, 67108864);
      t !== null && dt(t, e, 67108864), es(e, 67108864);
    }
  }
  function Mm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = $i(t);
      var l = Ql(e, t);
      l !== null && dt(l, e, t), es(e, t);
    }
  }
  var gi = !0;
  function M1(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = G.p;
    try {
      G.p = 2, ts(e, t, l, n);
    } finally {
      G.p = i, q.T = a;
    }
  }
  function D1(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = G.p;
    try {
      G.p = 8, ts(e, t, l, n);
    } finally {
      G.p = i, q.T = a;
    }
  }
  function ts(e, t, l, n) {
    if (gi) {
      var a = ls(n);
      if (a === null)
        Xc(
          e,
          t,
          n,
          pi,
          l
        ), Um(e, n);
      else if (j1(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Um(e, n), t & 4 && -1 < U1.indexOf(e)) {
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
                h = Ql(i, 2), h !== null && dt(h, i, 2), ti(), es(i, 2);
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
  var pi = null;
  function ns(e) {
    if (pi = null, e = on(e), e !== null) {
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
    return pi = e, null;
  }
  function Dm(e) {
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
          case qs:
            return 2;
          case Ys:
            return 8;
          case iu:
          case S0:
            return 32;
          case Xs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var as = !1, Dl = null, Ul = null, jl = null, Ga = /* @__PURE__ */ new Map(), Va = /* @__PURE__ */ new Map(), Bl = [], U1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Um(e, t) {
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
    }, t !== null && (t = fn(t), t !== null && Nm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function j1(e, t, l, n, a) {
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
  function jm(e) {
    var t = on(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Ks(e.priority, function() {
              Mm(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Ks(e.priority, function() {
              Mm(l);
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
        return t = fn(l), t !== null && Nm(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Bm(e, t, l) {
    vi(e) && l.delete(t);
  }
  function B1() {
    as = !1, Dl !== null && vi(Dl) && (Dl = null), Ul !== null && vi(Ul) && (Ul = null), jl !== null && vi(jl) && (jl = null), Ga.forEach(Bm), Va.forEach(Bm);
  }
  function bi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, as || (as = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      B1
    )));
  }
  var Si = null;
  function Hm(e) {
    Si !== e && (Si = e, r.unstable_scheduleCallback(
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
          var i = fn(l);
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
    for (; 0 < Bl.length && (l = Bl[0], l.blockedOn === null); )
      jm(l), l.blockedOn === null && Bl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || Hm(l);
        else if (f) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              h = f.formAction;
            else if (ns(a) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), Hm(l);
        }
      }
  }
  function Lm() {
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
  Ei.prototype.render = us.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var l = t.current, n = Rt();
    Om(l, n, e, t, null, null);
  }, Ei.prototype.unmount = us.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Om(e.current, 2, null, e, null, null), ti(), t[sn] = null;
    }
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  Ei.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ks();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++) ;
      Bl.splice(l, 0, e), l === 0 && jm(e);
    }
  };
  var qm = c.version;
  if (qm !== "19.2.3")
    throw Error(
      s(
        527,
        qm,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = b(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var H1 = {
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
        Pn = xi.inject(
          H1
        ), gt = xi;
      } catch {
      }
  }
  return Ka.createRoot = function(e, t) {
    if (!d(e)) throw Error(s(299));
    var l = !1, n = "", a = kf, i = Kf, f = Jf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Cm(
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
      Lm
    ), e[sn] = t.current, Yc(e), new us(t);
  }, Ka.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(s(299));
    var n = !1, a = "", i = kf, f = Kf, h = Jf, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = Cm(
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
      Lm
    ), t.context = _m(null), l = t.current, n = Rt(), n = $i(n), a = El(n), a.callback = null, xl(l, a, n), l = n, t.current.lanes = l, ta(t, l), Qt(t), e[sn] = t.current, Yc(e), new Ei(t);
  }, Ka.version = "19.2.3", Ka;
}
var th;
function Rp() {
  if (th) return ds.exports;
  th = 1;
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
const ji = ({ label: u, onClick: r, disabled: c, type: o = "button", className: s, children: d, mainButtonStyle: m }) => /* @__PURE__ */ x.jsx(
  "button",
  {
    className: s || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: r,
    disabled: c,
    type: o,
    style: m,
    children: d || u
  }
), nn = A.forwardRef(
  (u, r) => {
    const {
      label: c,
      startIcon: o,
      endIcon: s,
      error: d,
      helperText: m,
      optional: g,
      className: p,
      options: y,
      ...b
    } = u, T = !!d || !!m, N = b.type === "select" || !!y;
    return /* @__PURE__ */ x.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      c && /* @__PURE__ */ x.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        c,
        " ",
        g && /* @__PURE__ */ x.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex! items-center! relative!", children: [
        o && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: o
          }
        ),
        N ? /* @__PURE__ */ x.jsx(
          "select",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${T ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b,
            children: y && y.map((Y) => /* @__PURE__ */ x.jsx("option", { value: Y.value, children: Y.label }, Y.value))
          }
        ) : /* @__PURE__ */ x.jsx(
          "input",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${T ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...b
          }
        ),
        s && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!",
            "aria-hidden": !0,
            children: s
          }
        )
      ] }),
      d && typeof d == "string" && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
      !d && m && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: m })
    ] });
  }
), wp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", zs = ({
  type: u,
  message: r,
  actionText: c,
  onActionClick: o,
  onClose: s,
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
        return /* @__PURE__ */ x.jsx("img", { src: wp, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g();
  return /* @__PURE__ */ x.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ x.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ x.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
      c && o && /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          onClick: o,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: c
        }
      ),
      m
    ] }),
    s && /* @__PURE__ */ x.jsxs(
      "button",
      {
        type: "button",
        onClick: s,
        className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
        children: [
          /* @__PURE__ */ x.jsx("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    )
  ] });
}, Qh = () => /* @__PURE__ */ x.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class $a extends Error {
}
$a.prototype.name = "InvalidTokenError";
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
function Ns(u, r) {
  if (typeof u != "string")
    throw new $a("Invalid token specified: must be a string");
  r || (r = {});
  const c = r.header === !0 ? 0 : 1, o = u.split(".")[c];
  if (typeof o != "string")
    throw new $a(`Invalid token specified: missing part #${c + 1}`);
  let s;
  try {
    s = _p(o);
  } catch (d) {
    throw new $a(`Invalid token specified: invalid base64 for part #${c + 1} (${d.message})`);
  }
  try {
    return JSON.parse(s);
  } catch (d) {
    throw new $a(`Invalid token specified: invalid json for part #${c + 1} (${d.message})`);
  }
}
function Op() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const r = u.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function zp() {
  const u = window.location.hostname;
  return u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u) || u.startsWith("dev.") || u.startsWith("dev-") ? "dev" : u.startsWith("test.") || u.startsWith("test-") ? "test" : u.startsWith("stage.") || u.startsWith("stage-") ? "stage" : "prod";
}
function lh() {
  const u = window.location.href, r = new URL(u), c = r.hostname;
  if (c.startsWith("dev.")) {
    const o = c.replace("dev.", "dev-learn.");
    return `${r.protocol}//${o}/courses`;
  } else if (c.startsWith("test.")) {
    const o = c.replace("test.", "test-learn.");
    return `${r.protocol}//${o}/courses`;
  } else if (c.startsWith("stage.")) {
    const o = c.replace("stage.", "stage-learn.");
    return `${r.protocol}//${o}/courses`;
  } else if (c.split(".").length === 2) {
    const s = `learn.${c}`;
    return `${r.protocol}//${s}/courses`;
  } else
    return `${r.protocol}//${c}/courses`;
}
function Ni(u, r, c, o = !0) {
  const s = /* @__PURE__ */ new Date();
  s.setSeconds(s.getSeconds() + c);
  const d = Op(), m = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${s.toUTCString()}; path=/${m}${g}; SameSite=Lax`;
}
function Zh(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var nh = {};
const { toString: Np } = Object.prototype, { getPrototypeOf: Ms } = Object, { iterator: Bi, toStringTag: kh } = Symbol, Hi = /* @__PURE__ */ ((u) => (r) => {
  const c = Np.call(r);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Yt = (u) => (u = u.toLowerCase(), (r) => Hi(r) === u), Li = (u) => (r) => typeof r === u, { isArray: Wn } = Array, Kn = Li("undefined");
function eu(u) {
  return u !== null && !Kn(u) && u.constructor !== null && !Kn(u.constructor) && mt(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Kh = Yt("ArrayBuffer");
function Mp(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && Kh(u.buffer), r;
}
const Dp = Li("string"), mt = Li("function"), Jh = Li("number"), tu = (u) => u !== null && typeof u == "object", Up = (u) => u === !0 || u === !1, Ci = (u) => {
  if (Hi(u) !== "object")
    return !1;
  const r = Ms(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(kh in u) && !(Bi in u);
}, jp = (u) => {
  if (!tu(u) || eu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Bp = Yt("Date"), Hp = Yt("File"), Lp = Yt("Blob"), qp = Yt("FileList"), Yp = (u) => tu(u) && mt(u.pipe), Xp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || mt(u.append) && ((r = Hi(u)) === "formdata" || // detect form-data instance
  r === "object" && mt(u.toString) && u.toString() === "[object FormData]"));
}, Gp = Yt("URLSearchParams"), [Vp, Qp, Zp, kp] = ["ReadableStream", "Request", "Response", "Headers"].map(Yt), Kp = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function lu(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let o, s;
  if (typeof u != "object" && (u = [u]), Wn(u))
    for (o = 0, s = u.length; o < s; o++)
      r.call(null, u[o], o, u);
  else {
    if (eu(u))
      return;
    const d = c ? Object.getOwnPropertyNames(u) : Object.keys(u), m = d.length;
    let g;
    for (o = 0; o < m; o++)
      g = d[o], r.call(null, u[g], g, u);
  }
}
function $h(u, r) {
  if (eu(u))
    return null;
  r = r.toLowerCase();
  const c = Object.keys(u);
  let o = c.length, s;
  for (; o-- > 0; )
    if (s = c[o], r === s.toLowerCase())
      return s;
  return null;
}
const an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Wh = (u) => !Kn(u) && u !== an;
function Ss() {
  const { caseless: u, skipUndefined: r } = Wh(this) && this || {}, c = {}, o = (s, d) => {
    const m = u && $h(c, d) || d;
    Ci(c[m]) && Ci(s) ? c[m] = Ss(c[m], s) : Ci(s) ? c[m] = Ss({}, s) : Wn(s) ? c[m] = s.slice() : (!r || !Kn(s)) && (c[m] = s);
  };
  for (let s = 0, d = arguments.length; s < d; s++)
    arguments[s] && lu(arguments[s], o);
  return c;
}
const Jp = (u, r, c, { allOwnKeys: o } = {}) => (lu(r, (s, d) => {
  c && mt(s) ? u[d] = Zh(s, c) : u[d] = s;
}, { allOwnKeys: o }), u), $p = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Wp = (u, r, c, o) => {
  u.prototype = Object.create(r.prototype, o), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), c && Object.assign(u.prototype, c);
}, Fp = (u, r, c, o) => {
  let s, d, m;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (s = Object.getOwnPropertyNames(u), d = s.length; d-- > 0; )
      m = s[d], (!o || o(m, u, r)) && !g[m] && (r[m] = u[m], g[m] = !0);
    u = c !== !1 && Ms(u);
  } while (u && (!c || c(u, r)) && u !== Object.prototype);
  return r;
}, Ip = (u, r, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= r.length;
  const o = u.indexOf(r, c);
  return o !== -1 && o === c;
}, Pp = (u) => {
  if (!u) return null;
  if (Wn(u)) return u;
  let r = u.length;
  if (!Jh(r)) return null;
  const c = new Array(r);
  for (; r-- > 0; )
    c[r] = u[r];
  return c;
}, ev = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && Ms(Uint8Array)), tv = (u, r) => {
  const o = (u && u[Bi]).call(u);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const d = s.value;
    r.call(u, d[0], d[1]);
  }
}, lv = (u, r) => {
  let c;
  const o = [];
  for (; (c = u.exec(r)) !== null; )
    o.push(c);
  return o;
}, nv = Yt("HTMLFormElement"), av = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, o, s) {
    return o.toUpperCase() + s;
  }
), ah = (({ hasOwnProperty: u }) => (r, c) => u.call(r, c))(Object.prototype), uv = Yt("RegExp"), Fh = (u, r) => {
  const c = Object.getOwnPropertyDescriptors(u), o = {};
  lu(c, (s, d) => {
    let m;
    (m = r(s, d, u)) !== !1 && (o[d] = m || s);
  }), Object.defineProperties(u, o);
}, iv = (u) => {
  Fh(u, (r, c) => {
    if (mt(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const o = u[c];
    if (mt(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, rv = (u, r) => {
  const c = {}, o = (s) => {
    s.forEach((d) => {
      c[d] = !0;
    });
  };
  return Wn(u) ? o(u) : o(String(u).split(r)), c;
}, cv = () => {
}, sv = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function ov(u) {
  return !!(u && mt(u.append) && u[kh] === "FormData" && u[Bi]);
}
const fv = (u) => {
  const r = new Array(10), c = (o, s) => {
    if (tu(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (eu(o))
        return o;
      if (!("toJSON" in o)) {
        r[s] = o;
        const d = Wn(o) ? [] : {};
        return lu(o, (m, g) => {
          const p = c(m, s + 1);
          !Kn(p) && (d[g] = p);
        }), r[s] = void 0, d;
      }
    }
    return o;
  };
  return c(u, 0);
}, dv = Yt("AsyncFunction"), mv = (u) => u && (tu(u) || mt(u)) && mt(u.then) && mt(u.catch), Ih = ((u, r) => u ? setImmediate : r ? ((c, o) => (an.addEventListener("message", ({ source: s, data: d }) => {
  s === an && d === c && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), an.postMessage(c, "*");
}))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(
  typeof setImmediate == "function",
  mt(an.postMessage)
), hv = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof nh < "u" && nh.nextTick || Ih, yv = (u) => u != null && mt(u[Bi]), z = {
  isArray: Wn,
  isArrayBuffer: Kh,
  isBuffer: eu,
  isFormData: Xp,
  isArrayBufferView: Mp,
  isString: Dp,
  isNumber: Jh,
  isBoolean: Up,
  isObject: tu,
  isPlainObject: Ci,
  isEmptyObject: jp,
  isReadableStream: Vp,
  isRequest: Qp,
  isResponse: Zp,
  isHeaders: kp,
  isUndefined: Kn,
  isDate: Bp,
  isFile: Hp,
  isBlob: Lp,
  isRegExp: uv,
  isFunction: mt,
  isStream: Yp,
  isURLSearchParams: Gp,
  isTypedArray: ev,
  isFileList: qp,
  forEach: lu,
  merge: Ss,
  extend: Jp,
  trim: Kp,
  stripBOM: $p,
  inherits: Wp,
  toFlatObject: Fp,
  kindOf: Hi,
  kindOfTest: Yt,
  endsWith: Ip,
  toArray: Pp,
  forEachEntry: tv,
  matchAll: lv,
  isHTMLForm: nv,
  hasOwnProperty: ah,
  hasOwnProp: ah,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Fh,
  freezeMethods: iv,
  toObjectSet: rv,
  toCamelCase: av,
  noop: cv,
  toFiniteNumber: sv,
  findKey: $h,
  global: an,
  isContextDefined: Wh,
  isSpecCompliantForm: ov,
  toJSONObject: fv,
  isAsyncFn: dv,
  isThenable: mv,
  setImmediate: Ih,
  asap: hv,
  isIterable: yv
};
function se(u, r, c, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), c && (this.config = c), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
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
const Ph = se.prototype, e0 = {};
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
Object.defineProperties(se, e0);
Object.defineProperty(Ph, "isAxiosError", { value: !0 });
se.from = (u, r, c, o, s, d) => {
  const m = Object.create(Ph);
  z.toFlatObject(u, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return se.call(m, g, p, c, o, s), u && m.cause == null && Object.defineProperty(m, "cause", { value: u, configurable: !0 }), m.name = u && u.name || "Error", d && Object.assign(m, d), m;
};
const gv = null;
function Es(u) {
  return z.isPlainObject(u) || z.isArray(u);
}
function t0(u) {
  return z.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function uh(u, r, c) {
  return u ? u.concat(r).map(function(s, d) {
    return s = t0(s), !c && d ? "[" + s + "]" : s;
  }).join(c ? "." : "") : r;
}
function pv(u) {
  return z.isArray(u) && !u.some(Es);
}
const vv = z.toFlatObject(z, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function qi(u, r, c) {
  if (!z.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), c = z.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, D) {
    return !z.isUndefined(D[j]);
  });
  const o = c.metaTokens, s = c.visitor || b, d = c.dots, m = c.indexes, p = (c.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(r);
  if (!z.isFunction(s))
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
  function b(_, j, D) {
    let V = _;
    if (_ && !D && typeof _ == "object") {
      if (z.endsWith(j, "{}"))
        j = o ? j : j.slice(0, -2), _ = JSON.stringify(_);
      else if (z.isArray(_) && pv(_) || (z.isFileList(_) || z.endsWith(j, "[]")) && (V = z.toArray(_)))
        return j = t0(j), V.forEach(function(K, ee) {
          !(z.isUndefined(K) || K === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? uh([j], ee, d) : m === null ? j : j + "[]",
            y(K)
          );
        }), !1;
    }
    return Es(_) ? !0 : (r.append(uh(D, j, d), y(_)), !1);
  }
  const T = [], N = Object.assign(vv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Es
  });
  function Y(_, j) {
    if (!z.isUndefined(_)) {
      if (T.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      T.push(_), z.forEach(_, function(V, Q) {
        (!(z.isUndefined(V) || V === null) && s.call(
          r,
          V,
          z.isString(Q) ? Q.trim() : Q,
          j,
          N
        )) === !0 && Y(V, j ? j.concat(Q) : [Q]);
      }), T.pop();
    }
  }
  if (!z.isObject(u))
    throw new TypeError("data must be an object");
  return Y(u), r;
}
function ih(u) {
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
function Ds(u, r) {
  this._pairs = [], u && qi(u, this, r);
}
const l0 = Ds.prototype;
l0.append = function(r, c) {
  this._pairs.push([r, c]);
};
l0.toString = function(r) {
  const c = r ? function(o) {
    return r.call(this, o, ih);
  } : ih;
  return this._pairs.map(function(s) {
    return c(s[0]) + "=" + c(s[1]);
  }, "").join("&");
};
function bv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function n0(u, r, c) {
  if (!r)
    return u;
  const o = c && c.encode || bv;
  z.isFunction(c) && (c = {
    serialize: c
  });
  const s = c && c.serialize;
  let d;
  if (s ? d = s(r, c) : d = z.isURLSearchParams(r) ? r.toString() : new Ds(r, c).toString(o), d) {
    const m = u.indexOf("#");
    m !== -1 && (u = u.slice(0, m)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class rh {
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
    z.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const a0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sv = typeof URLSearchParams < "u" ? URLSearchParams : Ds, Ev = typeof FormData < "u" ? FormData : null, xv = typeof Blob < "u" ? Blob : null, Tv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sv,
    FormData: Ev,
    Blob: xv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Us = typeof window < "u" && typeof document < "u", xs = typeof navigator == "object" && navigator || void 0, Rv = Us && (!xs || ["ReactNative", "NativeScript", "NS"].indexOf(xs.product) < 0), Av = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", wv = Us && window.location.href || "http://localhost", Cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Us,
  hasStandardBrowserEnv: Rv,
  hasStandardBrowserWebWorkerEnv: Av,
  navigator: xs,
  origin: wv
}, Symbol.toStringTag, { value: "Module" })), nt = {
  ...Cv,
  ...Tv
};
function _v(u, r) {
  return qi(u, new nt.classes.URLSearchParams(), {
    visitor: function(c, o, s, d) {
      return nt.isNode && z.isBuffer(c) ? (this.append(o, c.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Ov(u) {
  return z.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
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
function u0(u) {
  function r(c, o, s, d) {
    let m = c[d++];
    if (m === "__proto__") return !0;
    const g = Number.isFinite(+m), p = d >= c.length;
    return m = !m && z.isArray(s) ? s.length : m, p ? (z.hasOwnProp(s, m) ? s[m] = [s[m], o] : s[m] = o, !g) : ((!s[m] || !z.isObject(s[m])) && (s[m] = []), r(c, o, s[m], d) && z.isArray(s[m]) && (s[m] = zv(s[m])), !g);
  }
  if (z.isFormData(u) && z.isFunction(u.entries)) {
    const c = {};
    return z.forEachEntry(u, (o, s) => {
      r(Ov(o), s, c, 0);
    }), c;
  }
  return null;
}
function Nv(u, r, c) {
  if (z.isString(u))
    try {
      return (r || JSON.parse)(u), z.trim(u);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (c || JSON.stringify)(u);
}
const nu = {
  transitional: a0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, c) {
    const o = c.getContentType() || "", s = o.indexOf("application/json") > -1, d = z.isObject(r);
    if (d && z.isHTMLForm(r) && (r = new FormData(r)), z.isFormData(r))
      return s ? JSON.stringify(u0(r)) : r;
    if (z.isArrayBuffer(r) || z.isBuffer(r) || z.isStream(r) || z.isFile(r) || z.isBlob(r) || z.isReadableStream(r))
      return r;
    if (z.isArrayBufferView(r))
      return r.buffer;
    if (z.isURLSearchParams(r))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return _v(r, this.formSerializer).toString();
      if ((g = z.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return qi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || s ? (c.setContentType("application/json", !1), Nv(r)) : r;
  }],
  transformResponse: [function(r) {
    const c = this.transitional || nu.transitional, o = c && c.forcedJSONParsing, s = this.responseType === "json";
    if (z.isResponse(r) || z.isReadableStream(r))
      return r;
    if (r && z.isString(r) && (o && !this.responseType || s)) {
      const m = !(c && c.silentJSONParsing) && s;
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
const Mv = z.toObjectSet([
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
]), Dv = (u) => {
  const r = {};
  let c, o, s;
  return u && u.split(`
`).forEach(function(m) {
    s = m.indexOf(":"), c = m.substring(0, s).trim().toLowerCase(), o = m.substring(s + 1).trim(), !(!c || r[c] && Mv[c]) && (c === "set-cookie" ? r[c] ? r[c].push(o) : r[c] = [o] : r[c] = r[c] ? r[c] + ", " + o : o);
  }), r;
}, ch = /* @__PURE__ */ Symbol("internals");
function Ja(u) {
  return u && String(u).trim().toLowerCase();
}
function _i(u) {
  return u === !1 || u == null ? u : z.isArray(u) ? u.map(_i) : String(u);
}
function Uv(u) {
  const r = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = c.exec(u); )
    r[o[1]] = o[2];
  return r;
}
const jv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ys(u, r, c, o, s) {
  if (z.isFunction(o))
    return o.call(this, r, c);
  if (s && (r = c), !!z.isString(r)) {
    if (z.isString(o))
      return r.indexOf(o) !== -1;
    if (z.isRegExp(o))
      return o.test(r);
  }
}
function Bv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, c, o) => c.toUpperCase() + o);
}
function Hv(u, r) {
  const c = z.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(u, o + c, {
      value: function(s, d, m) {
        return this[o].call(this, r, s, d, m);
      },
      configurable: !0
    });
  });
}
let ht = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, c, o) {
    const s = this;
    function d(g, p, y) {
      const b = Ja(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = z.findKey(s, b);
      (!T || s[T] === void 0 || y === !0 || y === void 0 && s[T] !== !1) && (s[T || p] = _i(g));
    }
    const m = (g, p) => z.forEach(g, (y, b) => d(y, b, p));
    if (z.isPlainObject(r) || r instanceof this.constructor)
      m(r, c);
    else if (z.isString(r) && (r = r.trim()) && !jv(r))
      m(Dv(r), c);
    else if (z.isObject(r) && z.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!z.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? z.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      m(g, c);
    } else
      r != null && d(c, r, o);
    return this;
  }
  get(r, c) {
    if (r = Ja(r), r) {
      const o = z.findKey(this, r);
      if (o) {
        const s = this[o];
        if (!c)
          return s;
        if (c === !0)
          return Uv(s);
        if (z.isFunction(c))
          return c.call(this, s, o);
        if (z.isRegExp(c))
          return c.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (r = Ja(r), r) {
      const o = z.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!c || ys(this, this[o], o, c)));
    }
    return !1;
  }
  delete(r, c) {
    const o = this;
    let s = !1;
    function d(m) {
      if (m = Ja(m), m) {
        const g = z.findKey(o, m);
        g && (!c || ys(o, o[g], g, c)) && (delete o[g], s = !0);
      }
    }
    return z.isArray(r) ? r.forEach(d) : d(r), s;
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
    return z.forEach(this, (s, d) => {
      const m = z.findKey(o, d);
      if (m) {
        c[m] = _i(s), delete c[d];
        return;
      }
      const g = r ? Bv(d) : String(d).trim();
      g !== d && delete c[d], c[g] = _i(s), o[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const c = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (o, s) => {
      o != null && o !== !1 && (c[s] = r && z.isArray(o) ? o.join(", ") : o);
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
    const o = (this[ch] = this[ch] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function d(m) {
      const g = Ja(m);
      o[g] || (Hv(s, m), o[g] = !0);
    }
    return z.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(ht.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(o) {
      this[c] = o;
    }
  };
});
z.freezeMethods(ht);
function gs(u, r) {
  const c = this || nu, o = r || c, s = ht.from(o.headers);
  let d = o.data;
  return z.forEach(u, function(g) {
    d = g.call(c, d, s.normalize(), r ? r.status : void 0);
  }), s.normalize(), d;
}
function i0(u) {
  return !!(u && u.__CANCEL__);
}
function Fn(u, r, c) {
  se.call(this, u ?? "canceled", se.ERR_CANCELED, r, c), this.name = "CanceledError";
}
z.inherits(Fn, se, {
  __CANCEL__: !0
});
function r0(u, r, c) {
  const o = c.config.validateStatus;
  !c.status || !o || o(c.status) ? u(c) : r(new se(
    "Request failed with status code " + c.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
function Lv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function qv(u, r) {
  u = u || 10;
  const c = new Array(u), o = new Array(u);
  let s = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = o[d];
    m || (m = y), c[s] = p, o[s] = y;
    let T = d, N = 0;
    for (; T !== s; )
      N += c[T++], T = T % u;
    if (s = (s + 1) % u, s === d && (d = (d + 1) % u), y - m < r)
      return;
    const Y = b && y - b;
    return Y ? Math.round(N * 1e3 / Y) : void 0;
  };
}
function Yv(u, r) {
  let c = 0, o = 1e3 / r, s, d;
  const m = (y, b = Date.now()) => {
    c = b, s = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), T = b - c;
    T >= o ? m(y, b) : (s = y, d || (d = setTimeout(() => {
      d = null, m(s);
    }, o - T)));
  }, () => s && m(s)];
}
const Mi = (u, r, c = 3) => {
  let o = 0;
  const s = qv(50, 250);
  return Yv((d) => {
    const m = d.loaded, g = d.lengthComputable ? d.total : void 0, p = m - o, y = s(p), b = m <= g;
    o = m;
    const T = {
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
    u(T);
  }, c);
}, sh = (u, r) => {
  const c = u != null;
  return [(o) => r[0]({
    lengthComputable: c,
    total: u,
    loaded: o
  }), r[1]];
}, oh = (u) => (...r) => z.asap(() => u(...r)), Xv = nt.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (c) => (c = new URL(c, nt.origin), u.protocol === c.protocol && u.host === c.host && (r || u.port === c.port)))(
  new URL(nt.origin),
  nt.navigator && /(msie|trident)/i.test(nt.navigator.userAgent)
) : () => !0, Gv = nt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, c, o, s, d, m) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      z.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`), z.isString(o) && g.push(`path=${o}`), z.isString(s) && g.push(`domain=${s}`), d === !0 && g.push("secure"), z.isString(m) && g.push(`SameSite=${m}`), document.cookie = g.join("; ");
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
function Vv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Qv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function c0(u, r, c) {
  let o = !Vv(r);
  return u && (o || c == !1) ? Qv(u, r) : r;
}
const fh = (u) => u instanceof ht ? { ...u } : u;
function rn(u, r) {
  r = r || {};
  const c = {};
  function o(y, b, T, N) {
    return z.isPlainObject(y) && z.isPlainObject(b) ? z.merge.call({ caseless: N }, y, b) : z.isPlainObject(b) ? z.merge({}, b) : z.isArray(b) ? b.slice() : b;
  }
  function s(y, b, T, N) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return o(void 0, y, T, N);
    } else return o(y, b, T, N);
  }
  function d(y, b) {
    if (!z.isUndefined(b))
      return o(void 0, b);
  }
  function m(y, b) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, b);
  }
  function g(y, b, T) {
    if (T in r)
      return o(y, b);
    if (T in u)
      return o(void 0, y);
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
    headers: (y, b, T) => s(fh(y), fh(b), T, !0)
  };
  return z.forEach(Object.keys({ ...u, ...r }), function(b) {
    const T = p[b] || s, N = T(u[b], r[b], b);
    z.isUndefined(N) && T !== g || (c[b] = N);
  }), c;
}
const s0 = (u) => {
  const r = rn({}, u);
  let { data: c, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: d, headers: m, auth: g } = r;
  if (r.headers = m = ht.from(m), r.url = n0(c0(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && m.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), z.isFormData(c)) {
    if (nt.hasStandardBrowserEnv || nt.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (z.isFunction(c.getHeaders)) {
      const p = c.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, T]) => {
        y.includes(b.toLowerCase()) && m.set(b, T);
      });
    }
  }
  if (nt.hasStandardBrowserEnv && (o && z.isFunction(o) && (o = o(r)), o || o !== !1 && Xv(r.url))) {
    const p = s && d && Gv.read(d);
    p && m.set(s, p);
  }
  return r;
}, Zv = typeof XMLHttpRequest < "u", kv = Zv && function(u) {
  return new Promise(function(c, o) {
    const s = s0(u);
    let d = s.data;
    const m = ht.from(s.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = s, b, T, N, Y, _;
    function j() {
      Y && Y(), _ && _(), s.cancelToken && s.cancelToken.unsubscribe(b), s.signal && s.signal.removeEventListener("abort", b);
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
      r0(function(ue) {
        c(ue), j();
      }, function(ue) {
        o(ue), j();
      }, F), D = null;
    }
    "onloadend" in D ? D.onloadend = V : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, D.onabort = function() {
      D && (o(new se("Request aborted", se.ECONNABORTED, u, D)), D = null);
    }, D.onerror = function(ee) {
      const F = ee && ee.message ? ee.message : "Network Error", le = new se(F, se.ERR_NETWORK, u, D);
      le.event = ee || null, o(le), D = null;
    }, D.ontimeout = function() {
      let ee = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const F = s.transitional || a0;
      s.timeoutErrorMessage && (ee = s.timeoutErrorMessage), o(new se(
        ee,
        F.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        u,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && z.forEach(m.toJSON(), function(ee, F) {
      D.setRequestHeader(F, ee);
    }), z.isUndefined(s.withCredentials) || (D.withCredentials = !!s.withCredentials), g && g !== "json" && (D.responseType = s.responseType), y && ([N, _] = Mi(y, !0), D.addEventListener("progress", N)), p && D.upload && ([T, Y] = Mi(p), D.upload.addEventListener("progress", T), D.upload.addEventListener("loadend", Y)), (s.cancelToken || s.signal) && (b = (K) => {
      D && (o(!K || K.type ? new Fn(null, u, D) : K), D.abort(), D = null);
    }, s.cancelToken && s.cancelToken.subscribe(b), s.signal && (s.signal.aborted ? b() : s.signal.addEventListener("abort", b)));
    const Q = Lv(s.url);
    if (Q && nt.protocols.indexOf(Q) === -1) {
      o(new se("Unsupported protocol " + Q + ":", se.ERR_BAD_REQUEST, u));
      return;
    }
    D.send(d || null);
  });
}, Kv = (u, r) => {
  const { length: c } = u = u ? u.filter(Boolean) : [];
  if (r || c) {
    let o = new AbortController(), s;
    const d = function(y) {
      if (!s) {
        s = !0, g();
        const b = y instanceof Error ? y : this.reason;
        o.abort(b instanceof se ? b : new Fn(b instanceof Error ? b.message : b));
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
    const { signal: p } = o;
    return p.unsubscribe = () => z.asap(g), p;
  }
}, Jv = function* (u, r) {
  let c = u.byteLength;
  if (c < r) {
    yield u;
    return;
  }
  let o = 0, s;
  for (; o < c; )
    s = o + r, yield u.slice(o, s), o = s;
}, $v = async function* (u, r) {
  for await (const c of Wv(u))
    yield* Jv(c, r);
}, Wv = async function* (u) {
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
}, dh = (u, r, c, o) => {
  const s = $v(u, r);
  let d = 0, m, g = (p) => {
    m || (m = !0, o && o(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: b } = await s.next();
        if (y) {
          g(), p.close();
          return;
        }
        let T = b.byteLength;
        if (c) {
          let N = d += T;
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
}, mh = 64 * 1024, { isFunction: Ri } = z, Fv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(z.global), {
  ReadableStream: hh,
  TextEncoder: yh
} = z.global, gh = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, Iv = (u) => {
  u = z.merge.call({
    skipUndefined: !0
  }, Fv, u);
  const { fetch: r, Request: c, Response: o } = u, s = r ? Ri(r) : typeof fetch == "function", d = Ri(c), m = Ri(o);
  if (!s)
    return !1;
  const g = s && Ri(hh), p = s && (typeof yh == "function" ? /* @__PURE__ */ ((_) => (j) => _.encode(j))(new yh()) : async (_) => new Uint8Array(await new c(_).arrayBuffer())), y = d && g && gh(() => {
    let _ = !1;
    const j = new c(nt.origin, {
      body: new hh(),
      method: "POST",
      get duplex() {
        return _ = !0, "half";
      }
    }).headers.has("Content-Type");
    return _ && !j;
  }), b = m && g && gh(() => z.isReadableStream(new o("").body)), T = {
    stream: b && ((_) => _.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((_) => {
    !T[_] && (T[_] = (j, D) => {
      let V = j && j[_];
      if (V)
        return V.call(j);
      throw new se(`Response type '${_}' is not supported`, se.ERR_NOT_SUPPORT, D);
    });
  });
  const N = async (_) => {
    if (_ == null)
      return 0;
    if (z.isBlob(_))
      return _.size;
    if (z.isSpecCompliantForm(_))
      return (await new c(nt.origin, {
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
      responseType: ue,
      headers: $,
      withCredentials: pe = "same-origin",
      fetchOptions: Re
    } = s0(_), at = r || fetch;
    ue = ue ? (ue + "").toLowerCase() : "text";
    let Ee = Kv([Q, K && K.toAbortSignal()], ee), Be = null;
    const He = Ee && Ee.unsubscribe && (() => {
      Ee.unsubscribe();
    });
    let Je;
    try {
      if (le && y && D !== "get" && D !== "head" && (Je = await Y($, V)) !== 0) {
        let Oe = new c(j, {
          method: "POST",
          body: V,
          duplex: "half"
        }), S;
        if (z.isFormData(V) && (S = Oe.headers.get("content-type")) && $.setContentType(S), Oe.body) {
          const [H, Z] = sh(
            Je,
            Mi(oh(le))
          );
          V = dh(Oe.body, mh, H, Z);
        }
      }
      z.isString(pe) || (pe = pe ? "include" : "omit");
      const X = d && "credentials" in c.prototype, q = {
        ...Re,
        signal: Ee,
        method: D.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: V,
        duplex: "half",
        credentials: X ? pe : void 0
      };
      Be = d && new c(j, q);
      let G = await (d ? at(Be, Re) : at(j, q));
      const I = b && (ue === "stream" || ue === "response");
      if (b && (F || I && He)) {
        const Oe = {};
        ["status", "statusText", "headers"].forEach((k) => {
          Oe[k] = G[k];
        });
        const S = z.toFiniteNumber(G.headers.get("content-length")), [H, Z] = F && sh(
          S,
          Mi(oh(F), !0)
        ) || [];
        G = new o(
          dh(G.body, mh, H, () => {
            Z && Z(), He && He();
          }),
          Oe
        );
      }
      ue = ue || "text";
      let ne = await T[z.findKey(T, ue) || "text"](G, _);
      return !I && He && He(), await new Promise((Oe, S) => {
        r0(Oe, S, {
          data: ne,
          headers: ht.from(G.headers),
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
}, Pv = /* @__PURE__ */ new Map(), o0 = (u) => {
  let r = u && u.env || {};
  const { fetch: c, Request: o, Response: s } = r, d = [
    o,
    s,
    c
  ];
  let m = d.length, g = m, p, y, b = Pv;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : Iv(r)), b = y;
  return y;
};
o0();
const js = {
  http: gv,
  xhr: kv,
  fetch: {
    get: o0
  }
};
z.forEach(js, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const ph = (u) => `- ${u}`, eb = (u) => z.isFunction(u) || u === null || u === !1;
function tb(u, r) {
  u = z.isArray(u) ? u : [u];
  const { length: c } = u;
  let o, s;
  const d = {};
  for (let m = 0; m < c; m++) {
    o = u[m];
    let g;
    if (s = o, !eb(o) && (s = js[(g = String(o)).toLowerCase()], s === void 0))
      throw new se(`Unknown adapter '${g}'`);
    if (s && (z.isFunction(s) || (s = s.get(r))))
      break;
    d[g || "#" + m] = s;
  }
  if (!s) {
    const m = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = c ? m.length > 1 ? `since :
` + m.map(ph).join(`
`) : " " + ph(m[0]) : "as no adapter specified";
    throw new se(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const f0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: tb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: js
};
function ps(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Fn(null, u);
}
function vh(u) {
  return ps(u), u.headers = ht.from(u.headers), u.data = gs.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), f0.getAdapter(u.adapter || nu.adapter, u)(u).then(function(o) {
    return ps(u), o.data = gs.call(
      u,
      u.transformResponse,
      o
    ), o.headers = ht.from(o.headers), o;
  }, function(o) {
    return i0(o) || (ps(u), o && o.response && (o.response.data = gs.call(
      u,
      u.transformResponse,
      o.response
    ), o.response.headers = ht.from(o.response.headers))), Promise.reject(o);
  });
}
const d0 = "1.13.2", Yi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Yi[u] = function(o) {
    return typeof o === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const bh = {};
Yi.transitional = function(r, c, o) {
  function s(d, m) {
    return "[Axios v" + d0 + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, g) => {
    if (r === !1)
      throw new se(
        s(m, " has been removed" + (c ? " in " + c : "")),
        se.ERR_DEPRECATED
      );
    return c && !bh[m] && (bh[m] = !0, console.warn(
      s(
        m,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), r ? r(d, m, g) : !0;
  };
};
Yi.spelling = function(r) {
  return (c, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function lb(u, r, c) {
  if (typeof u != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(u);
  let s = o.length;
  for (; s-- > 0; ) {
    const d = o[s], m = r[d];
    if (m) {
      const g = u[d], p = g === void 0 || m(g, d, u);
      if (p !== !0)
        throw new se("option " + d + " must be " + p, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new se("Unknown option " + d, se.ERR_BAD_OPTION);
  }
}
const Oi = {
  assertOptions: lb,
  validators: Yi
}, Zt = Oi.validators;
let un = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new rh(),
      response: new rh()
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
    typeof r == "string" ? (c = c || {}, c.url = r) : c = r || {}, c = rn(this.defaults, c);
    const { transitional: o, paramsSerializer: s, headers: d } = c;
    o !== void 0 && Oi.assertOptions(o, {
      silentJSONParsing: Zt.transitional(Zt.boolean),
      forcedJSONParsing: Zt.transitional(Zt.boolean),
      clarifyTimeoutError: Zt.transitional(Zt.boolean)
    }, !1), s != null && (z.isFunction(s) ? c.paramsSerializer = {
      serialize: s
    } : Oi.assertOptions(s, {
      encode: Zt.function,
      serialize: Zt.function
    }, !0)), c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = !0), Oi.assertOptions(c, {
      baseUrl: Zt.spelling("baseURL"),
      withXsrfToken: Zt.spelling("withXSRFToken")
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
    this.interceptors.request.forEach(function(j) {
      typeof j.runWhen == "function" && j.runWhen(c) === !1 || (p = p && j.synchronous, g.unshift(j.fulfilled, j.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let b, T = 0, N;
    if (!p) {
      const _ = [vh.bind(this), void 0];
      for (_.unshift(...g), _.push(...y), N = _.length, b = Promise.resolve(c); T < N; )
        b = b.then(_[T++], _[T++]);
      return b;
    }
    N = g.length;
    let Y = c;
    for (; T < N; ) {
      const _ = g[T++], j = g[T++];
      try {
        Y = _(Y);
      } catch (D) {
        j.call(this, D);
        break;
      }
    }
    try {
      b = vh.call(this, Y);
    } catch (_) {
      return Promise.reject(_);
    }
    for (T = 0, N = y.length; T < N; )
      b = b.then(y[T++], y[T++]);
    return b;
  }
  getUri(r) {
    r = rn(this.defaults, r);
    const c = c0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return n0(c, r.params, r.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function(r) {
  un.prototype[r] = function(c, o) {
    return this.request(rn(o || {}, {
      method: r,
      url: c,
      data: (o || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(r) {
  function c(o) {
    return function(d, m, g) {
      return this.request(rn(g || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  un.prototype[r] = c(), un.prototype[r + "Form"] = c(!0);
});
let nb = class m0 {
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
      const m = new Promise((g) => {
        o.subscribe(g), d = g;
      }).then(s);
      return m.cancel = function() {
        o.unsubscribe(d);
      }, m;
    }, r(function(d, m, g) {
      o.reason || (o.reason = new Fn(d, m, g), c(o.reason));
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
      token: new m0(function(s) {
        r = s;
      }),
      cancel: r
    };
  }
};
function ab(u) {
  return function(c) {
    return u.apply(null, c);
  };
}
function ub(u) {
  return z.isObject(u) && u.isAxiosError === !0;
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
  const r = new un(u), c = Zh(un.prototype.request, r);
  return z.extend(c, un.prototype, r, { allOwnKeys: !0 }), z.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(s) {
    return h0(rn(u, s));
  }, c;
}
const Me = h0(nu);
Me.Axios = un;
Me.CanceledError = Fn;
Me.CancelToken = nb;
Me.isCancel = i0;
Me.VERSION = d0;
Me.toFormData = qi;
Me.AxiosError = se;
Me.Cancel = Me.CanceledError;
Me.all = function(r) {
  return Promise.all(r);
};
Me.spread = ab;
Me.isAxiosError = ub;
Me.mergeConfig = rn;
Me.AxiosHeaders = ht;
Me.formToJSON = (u) => u0(z.isHTMLForm(u) ? new FormData(u) : u);
Me.getAdapter = f0.getAdapter;
Me.HttpStatusCode = Ts;
Me.default = Me;
const {
  Axios: Eb,
  AxiosError: xb,
  CanceledError: Tb,
  isCancel: Rb,
  CancelToken: Ab,
  VERSION: wb,
  all: Cb,
  Cancel: _b,
  isAxiosError: Ob,
  spread: zb,
  toFormData: Nb,
  AxiosHeaders: Mb,
  HttpStatusCode: Db,
  formToJSON: Ub,
  getAdapter: jb,
  mergeConfig: Bb
} = Me, ib = "https://dev-demo-env.colibrilearning.com", au = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${ib}${r}`;
}, rb = async (u, r) => {
  const c = au("api/auth"), o = { username: u, password: r };
  try {
    return (await Me.post(c, o)).data;
  } catch (s) {
    throw console.error("Error during auth login:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 401 ? new Error("Invalid credentials") : s.message ? new Error(s.message) : new Error("Authentication failed");
  }
}, cb = async (u) => {
  const r = au("api/register");
  try {
    return (await Me.post(r, u)).data;
  } catch (c) {
    throw console.error("Error during registration:", c), c.response?.data?.details?.errorMessage ? new Error(c.response.data.details.errorMessage) : c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.details ? new Error(c.response.data.details) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 500 ? new Error("Registration failed. Please try again.") : c.message ? new Error(c.message) : new Error("Registration failed");
  }
}, Bs = async (u) => {
  const r = au("api/check-email");
  try {
    return (await Me.post(r, { email: u })).data;
  } catch (c) {
    return console.error("Error checking email:", c), c.response?.data ? c.response.data : { exists: !1 };
  }
}, Sh = async (u) => {
  const r = au("api/forgot-password"), c = { email: u };
  try {
    return (await Me.post(r, c)).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 404 ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error("Failed to send password reset link");
  }
}, sb = async (u) => {
  const r = au("api/refresh"), c = { refresh_token: u };
  try {
    return (await Me.post(r, c)).data;
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, ob = (u) => {
  try {
    const r = document.cookie.split(";").find((m) => m.trim().startsWith("X-Credential=")), c = document.cookie.split(";").find((m) => m.trim().startsWith("access_token="));
    let o = null, s = !1;
    if (c && (o = c.split("=")[1] || null), r && (s = !0), o || (o = localStorage.getItem("access_token")), s || (s = !!localStorage.getItem("x_credential")), !o || !s)
      return !1;
    const d = localStorage.getItem("access_token_expires");
    if (d && Date.now() >= parseInt(d))
      return !1;
    try {
      const m = Ns(o), g = Math.floor(Date.now() / 1e3);
      return !(!m.exp || g >= m.exp);
    } catch (m) {
      return console.error("[checkTokenAndRedirect] Token decode error:", m), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, fb = () => {
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
  const o = await rb(u, r), { tokens: s, userinfo: d, x_credential: m } = o;
  if (s.access_token) {
    const g = Ns(s.access_token), p = (g.exp || 0) - Math.floor(Date.now() / 1e3);
    Ni("access_token", s.access_token, p, !0);
    const y = m || g.x_credentials;
    y && Ni("X-Credential", y, p, !1), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("access_token", s.access_token), localStorage.setItem("access_token_expires", (Date.now() + p * 1e3).toString()), y && localStorage.setItem("x_credential", y), d && localStorage.setItem("user_info", JSON.stringify({
      email: d.email,
      name: d.name || `${d.given_name || ""} ${d.family_name || ""}`.trim(),
      studentId: d.studentId || d.student_id
    })), c && s.refresh_token ? (localStorage.setItem("refresh_token", s.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return s;
}, db = ({
  type: u,
  message: r,
  duration: c = 5e3,
  onClose: o,
  className: s = ""
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
      m(!1), o();
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
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${s}`,
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
}, Xi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", mb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  onSignIn: o,
  title: s = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(m), [y, b] = A.useState(""), [T, N] = A.useState(""), [Y, _] = A.useState(""), [j, D] = A.useState(!1), [V, Q] = A.useState(""), [K, ee] = A.useState(!1), [F, le] = A.useState(!1), [ue, $] = A.useState(!1), [pe, Re] = A.useState(!1), [at, Ee] = A.useState(!1), [Be, He] = A.useState(!0), [Je, X] = A.useState(""), [q, G] = A.useState("info"), I = A.useRef(null), ne = A.useRef(null);
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
        (await Bs(g)).exists ? (Re(!0), $(!0)) : (Re(!1), $(!1));
      } catch (ie) {
        console.error("[CreateAccount] Email check failed:", ie), Re(!1), $(!1);
      } finally {
        Ee(!1);
      }
    }, 500), () => {
      ne.current && clearTimeout(ne.current);
    };
  }, [g]);
  const S = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const k = (ie) => {
      ie.key === "Escape" && c();
    };
    return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [c]);
  const H = (k) => {
    k.target === I.current && c();
  }, Z = async (k) => {
    if (k.preventDefault(), le(!0), !g || !y || !T || !Y) {
      r("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Q("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    D(!0), Q(""), X("");
    try {
      const re = g.split("@")[0], ye = await cb({
        username: re,
        email: g,
        firstName: y,
        lastName: T,
        password: Y
      });
      console.log(
        "[CreateAccount] Registration successful:",
        ye.message
      );
      try {
        const Ye = await y0(
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
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    Je && /* @__PURE__ */ x.jsx(
      db,
      {
        type: q,
        message: Je,
        duration: 5e3,
        onClose: () => X("")
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: I,
        onMouseDown: H,
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
            /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: s }),
            /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ x.jsxs("form", { onSubmit: Z, className: "space-y-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
              nn,
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
                error: F && !g ? "Required" : V || "",
                endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                  at && /* @__PURE__ */ x.jsx(Qh, {}),
                  !at && !pe && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ x.jsx(
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
            ue && pe && /* @__PURE__ */ x.jsx(
              zs,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  $(!1), o(g);
                },
                onClose: () => $(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ x.jsx(
                nn,
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
              /* @__PURE__ */ x.jsx(
                nn,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: T,
                  onChange: (k) => N(k.target.value),
                  placeholder: "Last Name",
                  disabled: j,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: F && !T ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
              nn,
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
                error: F && !Y ? "Required" : "",
                endIcon: /* @__PURE__ */ x.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => ee(!K),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: K ? /* @__PURE__ */ x.jsx(
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
                  checked: Be,
                  onChange: (k) => He(k.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ x.jsx(
              ji,
              {
                type: "submit",
                disabled: j || pe || !S,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: j ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                onClick: () => o(g),
                disabled: j,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ x.jsx("span", { children: "Sign In" })
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
  const m = (g) => {
    g.target === d.current && s();
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
        /* @__PURE__ */ x.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ x.jsx(
          "img",
          {
            src: Xi,
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
          ji,
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
            onClick: o,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
            children: /* @__PURE__ */ x.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, yb = ({
  email: u,
  onBack: r,
  handleClose: c
}) => {
  const [o, s] = A.useState(u || ""), [d, m] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [T, N] = A.useState(!1), [Y, _] = A.useState(!1), [j, D] = A.useState(!1), V = A.useRef(null);
  A.useEffect(() => {
    const F = (le) => {
      le.key === "Escape" && c();
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [c]), A.useEffect(() => {
    const le = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o);
    if (D(le), !le || !o) {
      _(!1);
      return;
    }
    const ue = setTimeout(async () => {
      N(!0);
      try {
        const $ = await Bs(o);
        console.log("[ResetPassword] Email check response:", $), _($.exists), console.log("[ResetPassword] Email exists:", $.exists);
      } catch ($) {
        console.error("[ResetPassword] Error checking email:", $), _(!1);
      } finally {
        N(!1);
      }
    }, 500);
    return () => clearTimeout(ue);
  }, [o]);
  const Q = (F) => {
    F.target === V.current && c();
  }, K = async (F) => {
    if (F.preventDefault(), !o) {
      b("Email is required");
      return;
    }
    m(!0), b("");
    try {
      await Sh(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
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
      await Sh(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (F) {
      console.error("[ResetPassword] Failed to resend reset link:", F), p(!1);
      const le = F instanceof Error ? F.message : "Failed to resend reset link. Please try again.";
      b(le);
    } finally {
      m(!1);
    }
  };
  return g ? /* @__PURE__ */ x.jsx(
    hb,
    {
      email: o,
      loading: d,
      onResendLink: ee,
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
            nn,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: o,
              onChange: (F) => {
                s(F.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                T && /* @__PURE__ */ x.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !T && Y && j && /* @__PURE__ */ x.jsx(
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
          y && /* @__PURE__ */ x.jsx(
            zs,
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
            ji,
            {
              type: "submit",
              disabled: d || !o || !j || !Y,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: o, isEmailValid: j, emailExists: Y });
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
}, gb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  authority: o,
  title: s = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(m), [y, b] = A.useState(""), [T, N] = A.useState(!1), [Y, _] = A.useState(!1), [j, D] = A.useState(""), [V, Q] = A.useState(!1), [K, ee] = A.useState(!1), [F, le] = A.useState(!1), [ue, $] = A.useState(!1), [pe, Re] = A.useState(!1), [at, Ee] = A.useState(!1), Be = A.useRef(null), He = A.useRef(null);
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
        (await Bs(g)).exists ? ($(!0), Ee(!1)) : ($(!1), Ee(!0));
      } catch (ne) {
        console.error("[EmbeddedLogin] Email check failed:", ne), $(!0), Ee(!1);
      } finally {
        Re(!1);
      }
    }, 500), () => {
      He.current && clearTimeout(He.current);
    };
  }, [g]);
  const X = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const I = (ne) => {
      ne.key === "Escape" && c();
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [c]);
  const q = (I) => {
    I.target === Be.current && c();
  }, G = async (I) => {
    if (I.preventDefault(), !g || !y) {
      D("Please enter both email and password"), r("Please enter both email and password");
      return;
    }
    N(!0), D("");
    try {
      const ne = await y0(g, y, V);
      u(ne);
    } catch (ne) {
      console.error("[EmbeddedLogin] Login failed:", ne);
      const Oe = ne instanceof Error ? ne.message : "Authentication failed";
      D(Oe), r(Oe);
    } finally {
      N(!1);
    }
  };
  return F ? /* @__PURE__ */ x.jsx(
    yb,
    {
      email: g,
      onBack: () => le(!1),
      handleClose: c
    }
  ) : K ? /* @__PURE__ */ x.jsx(
    mb,
    {
      onSuccess: (I) => {
        ee(!1), u(I);
      },
      onError: r,
      handleClose: c,
      onSignIn: (I) => {
        ee(!1), I && p(I);
      },
      authority: o,
      initialEmail: g
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Be,
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
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: s }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ x.jsxs("form", { onSubmit: G, className: "space-y-2!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            nn,
            {
              label: "Email Address",
              id: "email",
              type: "email",
              value: g,
              onChange: (I) => p(I.target.value),
              placeholder: "Enter email address",
              disabled: T,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                pe && /* @__PURE__ */ x.jsx(Qh, {}),
                !pe && ue && X && /* @__PURE__ */ x.jsx(
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
          at && !ue && X && /* @__PURE__ */ x.jsx(
            zs,
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
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
            nn,
            {
              label: "Password",
              id: "password",
              type: Y ? "text" : "password",
              value: y,
              onChange: (I) => {
                b(I.target.value), D("");
              },
              placeholder: "Enter Password...",
              disabled: T,
              className: "w-full!",
              autoComplete: "current-password",
              error: j,
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
                  I.preventDefault(), le(!0);
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            ji,
            {
              type: "submit",
              disabled: T || !g,
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
              onClick: () => ee(!0),
              disabled: T,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, pb = (u) => {
  const { authority: r, subsidiary: c, onRedirect: o } = u, [s, d] = A.useState(!1);
  A.useEffect(() => {
    (async () => {
      try {
        if (ob()) {
          d(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (fb()) {
          const N = localStorage.getItem("refresh_token");
          if (N) {
            console.log("[App] Attempting auto-login with refresh token");
            const Y = await sb(N);
            if (Y && Y.tokens && Y.tokens.access_token) {
              const _ = Y.tokens, j = Ns(_.access_token), D = (j.exp || 0) - Math.floor(Date.now() / 1e3);
              Ni("access_token", _.access_token, D, !0), j.x_credentials && Ni("X-Credential", j.x_credentials, D, !1), _.refresh_token && (localStorage.setItem("refresh_token", _.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const V = u.redirectUrl || lh();
              if (o) {
                const Q = {
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
                o(V, Q);
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
    r && localStorage.setItem("authority", r), c && localStorage.setItem("subsidiary", c);
  }, [r, c]);
  const m = (y) => {
    u.handleClose && u.handleClose(), d(!0);
    const b = u.redirectUrl || lh();
    o && o(b, y), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, g = (y) => {
    console.log("[App] Embedded login error:", y);
  }, p = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ x.jsx(qg, { children: /* @__PURE__ */ x.jsx(Lh, { path: "*", element: /* @__PURE__ */ x.jsx(x.Fragment, { children: !s && u.showLogin && /* @__PURE__ */ x.jsx(
    gb,
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
class vb {
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
      return o ? (console.log(`[ThemeWidget] Auto-detected brand from domain: ${o.name} (${o.token})`), localStorage.setItem("subsidiary", o.token), o.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${c}`), null);
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
      localStorage.setItem("subsidiary", o.token);
      const s = `${this.cdnBaseUrl}/${o.folder}/theme.json`, d = await fetch(s);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const m = await d.json(), g = document.documentElement;
      m.styles.forEach((p) => {
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
async function Eh(u) {
  const r = new vb(u.cdnBaseUrl, u.shadowRoot), c = u.brandFolder || u.brandToken;
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
      return ["authority", "subsidiary", "redirectUrl", "loginTitle", "loginSubtitle", "show-login", "custom-primary-color", "customPrimaryColor"];
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
        const o = document.createElement("style");
        let s = c.trim();
        /^[0-9A-Fa-f]{6}$/.test(s) && (s = `#${s}`), o.textContent = `
          :host {
            --color-primary: ${s};
            --color-primary-light: ${s};
            --button-primary-bg: ${s};
            --button-primary-bg-hover: ${s};
            --color-border-focus: ${s};
          }
          
          /* Apply to any elements using primary color */
          * {
            --color-primary: ${s} !important;
          }
        `, this._shadowRoot.appendChild(o), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(c) {
      try {
        console.log(`[Widget] Loading theme for subsidiary: ${c}`), await Eh({
          brandFolder: c,
          shadowRoot: this._shadowRoot
        }), console.log(`[Widget] Theme loaded successfully for ${c}`);
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain() {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await Eh({
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
        authority: this.getAttribute("authority") || zp(),
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
        /* @__PURE__ */ x.jsx(sp, { children: /* @__PURE__ */ x.jsx(A.StrictMode, { children: /* @__PURE__ */ x.jsx(pb, { ...c }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
