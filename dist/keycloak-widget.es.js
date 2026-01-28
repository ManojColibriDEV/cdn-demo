
// CSS content for Shadow DOM injection
var __WIDGET_CSS__ = "@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.pointer-events-none\\!{pointer-events:none!important}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-600{color:var(--color-blue-600)}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-50\\!{opacity:.5!important}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";

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
var us = { exports: {} }, Za = {};
var _h;
function qg() {
  if (_h) return Za;
  _h = 1;
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
  return Za.Fragment = r, Za.jsx = c, Za.jsxs = c, Za;
}
var kh;
function Qg() {
  return kh || (kh = 1, us.exports = qg()), us.exports;
}
var x = Qg(), is = { exports: {} }, ae = {}, qh;
function Gg() {
  if (qh) return ae;
  qh = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), B = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function O(v) {
    return v === null || typeof v != "object" ? null : (v = q && v[q] || v["@@iterator"], typeof v == "function" ? v : null);
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
  }, D = Object.assign, J = {};
  function Y(v, U, V) {
    this.props = v, this.context = U, this.refs = J, this.updater = V || H;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(v, U) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, U, "setState");
  }, Y.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function X() {
  }
  X.prototype = Y.prototype;
  function ee(v, U, V) {
    this.props = v, this.context = U, this.refs = J, this.updater = V || H;
  }
  var K = ee.prototype = new X();
  K.constructor = ee, D(K, Y.prototype), K.isPureReactComponent = !0;
  var le = Array.isArray;
  function ne() {
  }
  var $ = { H: null, A: null, T: null, S: null }, ge = Object.prototype.hasOwnProperty;
  function pe(v, U, V) {
    var Z = V.ref;
    return {
      $$typeof: r,
      type: v,
      key: U,
      ref: Z !== void 0 ? Z : null,
      props: V
    };
  }
  function Ye(v, U) {
    return pe(v.type, U, v.props);
  }
  function Oe(v) {
    return typeof v == "object" && v !== null && v.$$typeof === r;
  }
  function qe(v) {
    var U = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(V) {
      return U[V];
    });
  }
  var De = /\/+/g;
  function Ve(v, U) {
    return typeof v == "object" && v !== null && v.key != null ? qe("" + v.key) : U.toString(36);
  }
  function Q(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(ne, ne) : (v.status = "pending", v.then(
          function(U) {
            v.status === "pending" && (v.status = "fulfilled", v.value = U);
          },
          function(U) {
            v.status === "pending" && (v.status = "rejected", v.reason = U);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function k(v, U, V, Z, se) {
    var oe = typeof v;
    (oe === "undefined" || oe === "boolean") && (v = null);
    var te = !1;
    if (v === null) te = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case r:
            case c:
              te = !0;
              break;
            case E:
              return te = v._init, k(
                te(v._payload),
                U,
                V,
                Z,
                se
              );
          }
      }
    if (te)
      return se = se(v), te = Z === "" ? "." + Ve(v, 0) : Z, le(se) ? (V = "", te != null && (V = te.replace(De, "$&/") + "/"), k(se, U, V, "", function(Qt) {
        return Qt;
      })) : se != null && (Oe(se) && (se = Ye(
        se,
        V + (se.key == null || v && v.key === se.key ? "" : ("" + se.key).replace(
          De,
          "$&/"
        ) + "/") + te
      )), U.push(se)), 1;
    te = 0;
    var He = Z === "" ? "." : Z + ":";
    if (le(v))
      for (var Re = 0; Re < v.length; Re++)
        Z = v[Re], oe = He + Ve(Z, Re), te += k(
          Z,
          U,
          V,
          oe,
          se
        );
    else if (Re = O(v), typeof Re == "function")
      for (v = Re.call(v), Re = 0; !(Z = v.next()).done; )
        Z = Z.value, oe = He + Ve(Z, Re++), te += k(
          Z,
          U,
          V,
          oe,
          se
        );
    else if (oe === "object") {
      if (typeof v.then == "function")
        return k(
          Q(v),
          U,
          V,
          Z,
          se
        );
      throw U = String(v), Error(
        "Objects are not valid as a React child (found: " + (U === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : U) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function G(v, U, V) {
    if (v == null) return v;
    var Z = [], se = 0;
    return k(v, Z, "", "", function(oe) {
      return U.call(V, oe, se++);
    }), Z;
  }
  function re(v) {
    if (v._status === -1) {
      var U = v._result;
      U = U(), U.then(
        function(V) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = V);
        },
        function(V) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = V);
        }
      ), v._status === -1 && (v._status = 0, v._result = U);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var Se = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var U = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(U)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  }, ze = {
    map: G,
    forEach: function(v, U, V) {
      G(
        v,
        function() {
          U.apply(this, arguments);
        },
        V
      );
    },
    count: function(v) {
      var U = 0;
      return G(v, function() {
        U++;
      }), U;
    },
    toArray: function(v) {
      return G(v, function(U) {
        return U;
      }) || [];
    },
    only: function(v) {
      if (!Oe(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  };
  return ae.Activity = B, ae.Children = ze, ae.Component = Y, ae.Fragment = o, ae.Profiler = d, ae.PureComponent = ee, ae.StrictMode = s, ae.Suspense = y, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, ae.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return $.H.useMemoCache(v);
    }
  }, ae.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, ae.cacheSignal = function() {
    return null;
  }, ae.cloneElement = function(v, U, V) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var Z = D({}, v.props), se = v.key;
    if (U != null)
      for (oe in U.key !== void 0 && (se = "" + U.key), U)
        !ge.call(U, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && U.ref === void 0 || (Z[oe] = U[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) Z.children = V;
    else if (1 < oe) {
      for (var te = Array(oe), He = 0; He < oe; He++)
        te[He] = arguments[He + 2];
      Z.children = te;
    }
    return pe(v.type, se, Z);
  }, ae.createContext = function(v) {
    return v = {
      $$typeof: g,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: h,
      _context: v
    }, v;
  }, ae.createElement = function(v, U, V) {
    var Z, se = {}, oe = null;
    if (U != null)
      for (Z in U.key !== void 0 && (oe = "" + U.key), U)
        ge.call(U, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (se[Z] = U[Z]);
    var te = arguments.length - 2;
    if (te === 1) se.children = V;
    else if (1 < te) {
      for (var He = Array(te), Re = 0; Re < te; Re++)
        He[Re] = arguments[Re + 2];
      se.children = He;
    }
    if (v && v.defaultProps)
      for (Z in te = v.defaultProps, te)
        se[Z] === void 0 && (se[Z] = te[Z]);
    return pe(v, oe, se);
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(v) {
    return { $$typeof: p, render: v };
  }, ae.isValidElement = Oe, ae.lazy = function(v) {
    return {
      $$typeof: E,
      _payload: { _status: -1, _result: v },
      _init: re
    };
  }, ae.memo = function(v, U) {
    return {
      $$typeof: S,
      type: v,
      compare: U === void 0 ? null : U
    };
  }, ae.startTransition = function(v) {
    var U = $.T, V = {};
    $.T = V;
    try {
      var Z = v(), se = $.S;
      se !== null && se(V, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ne, Se);
    } catch (oe) {
      Se(oe);
    } finally {
      U !== null && V.types !== null && (U.types = V.types), $.T = U;
    }
  }, ae.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, ae.use = function(v) {
    return $.H.use(v);
  }, ae.useActionState = function(v, U, V) {
    return $.H.useActionState(v, U, V);
  }, ae.useCallback = function(v, U) {
    return $.H.useCallback(v, U);
  }, ae.useContext = function(v) {
    return $.H.useContext(v);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(v, U) {
    return $.H.useDeferredValue(v, U);
  }, ae.useEffect = function(v, U) {
    return $.H.useEffect(v, U);
  }, ae.useEffectEvent = function(v) {
    return $.H.useEffectEvent(v);
  }, ae.useId = function() {
    return $.H.useId();
  }, ae.useImperativeHandle = function(v, U, V) {
    return $.H.useImperativeHandle(v, U, V);
  }, ae.useInsertionEffect = function(v, U) {
    return $.H.useInsertionEffect(v, U);
  }, ae.useLayoutEffect = function(v, U) {
    return $.H.useLayoutEffect(v, U);
  }, ae.useMemo = function(v, U) {
    return $.H.useMemo(v, U);
  }, ae.useOptimistic = function(v, U) {
    return $.H.useOptimistic(v, U);
  }, ae.useReducer = function(v, U, V) {
    return $.H.useReducer(v, U, V);
  }, ae.useRef = function(v) {
    return $.H.useRef(v);
  }, ae.useState = function(v) {
    return $.H.useState(v);
  }, ae.useSyncExternalStore = function(v, U, V) {
    return $.H.useSyncExternalStore(
      v,
      U,
      V
    );
  }, ae.useTransition = function() {
    return $.H.useTransition();
  }, ae.version = "19.2.3", ae;
}
var Qh;
function xs() {
  return Qh || (Qh = 1, is.exports = Gg()), is.exports;
}
var w = xs();
var Gh = "popstate";
function Yg(u = {}) {
  function r(o, s) {
    let { pathname: d, search: h, hash: g } = o.location;
    return ps(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function c(o, s) {
    return typeof s == "string" ? s : $a(s);
  }
  return Jg(
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
function kt(u, r) {
  if (!u) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Vg() {
  return Math.random().toString(36).substring(2, 10);
}
function Yh(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function ps(u, r, c = null, o) {
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
    key: r && r.key || o || Vg()
  };
}
function $a({
  pathname: u = "/",
  search: r = "",
  hash: c = ""
}) {
  return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
}
function Wn(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
    let o = u.indexOf("?");
    o >= 0 && (r.search = u.substring(o), u = u.substring(0, o)), u && (r.pathname = u);
  }
  return r;
}
function Jg(u, r, c, o = {}) {
  let { window: s = document.defaultView, v5Compat: d = !1 } = o, h = s.history, g = "POP", p = null, y = S();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function S() {
    return (h.state || { idx: null }).idx;
  }
  function E() {
    g = "POP";
    let D = S(), J = D == null ? null : D - y;
    y = D, p && p({ action: g, location: H.location, delta: J });
  }
  function B(D, J) {
    g = "PUSH";
    let Y = ps(H.location, D, J);
    y = S() + 1;
    let X = Yh(Y, y), ee = H.createHref(Y);
    try {
      h.pushState(X, "", ee);
    } catch (K) {
      if (K instanceof DOMException && K.name === "DataCloneError")
        throw K;
      s.location.assign(ee);
    }
    d && p && p({ action: g, location: H.location, delta: 1 });
  }
  function q(D, J) {
    g = "REPLACE";
    let Y = ps(H.location, D, J);
    y = S();
    let X = Yh(Y, y), ee = H.createHref(Y);
    h.replaceState(X, "", ee), d && p && p({ action: g, location: H.location, delta: 0 });
  }
  function O(D) {
    return Xg(D);
  }
  let H = {
    get action() {
      return g;
    },
    get location() {
      return u(s, h);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(Gh, E), p = D, () => {
        s.removeEventListener(Gh, E), p = null;
      };
    },
    createHref(D) {
      return r(s, D);
    },
    createURL: O,
    encodeLocation(D) {
      let J = O(D);
      return {
        pathname: J.pathname,
        search: J.search,
        hash: J.hash
      };
    },
    push: B,
    replace: q,
    go(D) {
      return h.go(D);
    }
  };
  return H;
}
function Xg(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(c, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : $a(u);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = c + o), new URL(o, c);
}
function b0(u, r, c = "/") {
  return Zg(u, r, c, !1);
}
function Zg(u, r, c, o) {
  let s = typeof r == "string" ? Wn(r) : r, d = hl(s.pathname || "/", c);
  if (d == null)
    return null;
  let h = S0(u);
  Kg(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = u1(d);
    g = n1(
      h[p],
      y,
      o
    );
  }
  return g;
}
function S0(u, r = [], c = [], o = "", s = !1) {
  let d = (h, g, p = s, y) => {
    let S = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(o) && p)
        return;
      Le(
        S.relativePath.startsWith(o),
        `Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(o.length);
    }
    let E = dl([o, S.relativePath]), B = c.concat(S);
    h.children && h.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${E}".`
    ), S0(
      h.children,
      r,
      B,
      E,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: E,
      score: t1(E, h.index),
      routesMeta: B
    });
  };
  return u.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of A0(h.path))
        d(h, g, !0, p);
  }), r;
}
function A0(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...o] = r, s = c.endsWith("?"), d = c.replace(/\?$/, "");
  if (o.length === 0)
    return s ? [d, ""] : [d];
  let h = A0(o.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), s && g.push(...h), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function Kg(u) {
  u.sort(
    (r, c) => r.score !== c.score ? c.score - r.score : l1(
      r.routesMeta.map((o) => o.childrenIndex),
      c.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Fg = /^:[\w-]+$/, Wg = 3, Ig = 2, $g = 1, Pg = 10, e1 = -2, Vh = (u) => u === "*";
function t1(u, r) {
  let c = u.split("/"), o = c.length;
  return c.some(Vh) && (o += e1), r && (o += Ig), c.filter((s) => !Vh(s)).reduce(
    (s, d) => s + (Fg.test(d) ? Wg : d === "" ? $g : Pg),
    o
  );
}
function l1(u, r) {
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
function n1(u, r, c = !1) {
  let { routesMeta: o } = u, s = {}, d = "/", h = [];
  for (let g = 0; g < o.length; ++g) {
    let p = o[g], y = g === o.length - 1, S = d === "/" ? r : r.slice(d.length) || "/", E = Di(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      S
    ), B = p.route;
    if (!E && y && c && !o[o.length - 1].route.index && (E = Di(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      S
    )), !E)
      return null;
    Object.assign(s, E.params), h.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: dl([d, E.pathname]),
      pathnameBase: s1(
        dl([d, E.pathnameBase])
      ),
      route: B
    }), E.pathnameBase !== "/" && (d = dl([d, E.pathnameBase]));
  }
  return h;
}
function Di(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, o] = a1(
    u.path,
    u.caseSensitive,
    u.end
  ), s = r.match(c);
  if (!s) return null;
  let d = s[0], h = d.replace(/(.)\/+$/, "$1"), g = s.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: S, isOptional: E }, B) => {
        if (S === "*") {
          let O = g[B] || "";
          h = d.slice(0, d.length - O.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[B];
        return E && !q ? y[S] = void 0 : y[S] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: u
  };
}
function a1(u, r = !1, c = !0) {
  kt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let o = [], s = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (o.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (o.push({ paramName: "*" }), s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? s += "\\/*$" : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, r ? void 0 : "i"), o];
}
function u1(u) {
  try {
    return u.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return kt(
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
var E0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, i1 = (u) => E0.test(u);
function r1(u, r = "/") {
  let {
    pathname: c,
    search: o = "",
    hash: s = ""
  } = typeof u == "string" ? Wn(u) : u, d;
  if (c)
    if (i1(c))
      d = c;
    else {
      if (c.includes("//")) {
        let h = c;
        c = c.replace(/\/\/+/g, "/"), kt(
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
    search: o1(o),
    hash: f1(s)
  };
}
function Jh(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((s) => {
    s === ".." ? c.length > 1 && c.pop() : s !== "." && c.push(s);
  }), c.length > 1 ? c.join("/") : "/";
}
function rs(u, r, c, o) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function c1(u) {
  return u.filter(
    (r, c) => c === 0 || r.route.path && r.route.path.length > 0
  );
}
function x0(u) {
  let r = c1(u);
  return r.map(
    (c, o) => o === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function R0(u, r, c, o = !1) {
  let s;
  typeof u == "string" ? s = Wn(u) : (s = { ...u }, Le(
    !s.pathname || !s.pathname.includes("?"),
    rs("?", "pathname", "search", s)
  ), Le(
    !s.pathname || !s.pathname.includes("#"),
    rs("#", "pathname", "hash", s)
  ), Le(
    !s.search || !s.search.includes("#"),
    rs("#", "search", "hash", s)
  ));
  let d = u === "" || s.pathname === "", h = d ? "/" : s.pathname, g;
  if (h == null)
    g = c;
  else {
    let E = r.length - 1;
    if (!o && h.startsWith("..")) {
      let B = h.split("/");
      for (; B[0] === ".."; )
        B.shift(), E -= 1;
      s.pathname = B.join("/");
    }
    g = E >= 0 ? r[E] : "/";
  }
  let p = r1(s, g), y = h && h !== "/" && h.endsWith("/"), S = (d || h === ".") && c.endsWith("/");
  return !p.pathname.endsWith("/") && (y || S) && (p.pathname += "/"), p;
}
var dl = (u) => u.join("/").replace(/\/\/+/g, "/"), s1 = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), o1 = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, f1 = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, d1 = class {
  constructor(u, r, c, o = !1) {
    this.status = u, this.statusText = r || "", this.internal = o, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function h1(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function m1(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var w0 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function T0(u, r) {
  let c = u;
  if (typeof c != "string" || !E0.test(c))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: c
    };
  let o = c, s = !1;
  if (w0)
    try {
      let d = new URL(window.location.href), h = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c), g = hl(h.pathname, r);
      h.origin === d.origin && g != null ? c = g + h.search + h.hash : s = !0;
    } catch {
      kt(
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
var C0 = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  C0
);
var y1 = [
  "GET",
  ...C0
];
new Set(y1);
var In = w.createContext(null);
In.displayName = "DataRouter";
var Ui = w.createContext(null);
Ui.displayName = "DataRouterState";
var g1 = w.createContext(!1), O0 = w.createContext({
  isTransitioning: !1
});
O0.displayName = "ViewTransition";
var p1 = w.createContext(
  /* @__PURE__ */ new Map()
);
p1.displayName = "Fetchers";
var v1 = w.createContext(null);
v1.displayName = "Await";
var jt = w.createContext(
  null
);
jt.displayName = "Navigation";
var Pa = w.createContext(
  null
);
Pa.displayName = "Location";
var ml = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ml.displayName = "Route";
var Rs = w.createContext(null);
Rs.displayName = "RouteError";
var z0 = "REACT_ROUTER_ERROR", b1 = "REDIRECT", S1 = "ROUTE_ERROR_RESPONSE";
function A1(u) {
  if (u.startsWith(`${z0}:${b1}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function E1(u) {
  if (u.startsWith(
    `${z0}:${S1}:{`
  ))
    try {
      let r = JSON.parse(u.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new d1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function x1(u, { relative: r } = {}) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: o } = w.useContext(jt), { hash: s, pathname: d, search: h } = tu(u, { relative: r }), g = d;
  return c !== "/" && (g = d === "/" ? c : dl([c, d])), o.createHref({ pathname: g, search: h, hash: s });
}
function eu() {
  return w.useContext(Pa) != null;
}
function on() {
  return Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), w.useContext(Pa).location;
}
var N0 = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function D0(u) {
  w.useContext(jt).static || w.useLayoutEffect(u);
}
function R1() {
  let { isDataRoute: u } = w.useContext(ml);
  return u ? L1() : w1();
}
function w1() {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = w.useContext(In), { basename: r, navigator: c } = w.useContext(jt), { matches: o } = w.useContext(ml), { pathname: s } = on(), d = JSON.stringify(x0(o)), h = w.useRef(!1);
  return D0(() => {
    h.current = !0;
  }), w.useCallback(
    (p, y = {}) => {
      if (kt(h.current, N0), !h.current) return;
      if (typeof p == "number") {
        c.go(p);
        return;
      }
      let S = R0(
        p,
        JSON.parse(d),
        s,
        y.relative === "path"
      );
      u == null && r !== "/" && (S.pathname = S.pathname === "/" ? r : dl([r, S.pathname])), (y.replace ? c.replace : c.push)(
        S,
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
w.createContext(null);
function tu(u, { relative: r } = {}) {
  let { matches: c } = w.useContext(ml), { pathname: o } = on(), s = JSON.stringify(x0(c));
  return w.useMemo(
    () => R0(
      u,
      JSON.parse(s),
      o,
      r === "path"
    ),
    [u, s, o, r]
  );
}
function T1(u, r) {
  return M0(u, r);
}
function M0(u, r, c, o, s) {
  Le(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = w.useContext(jt), { matches: h } = w.useContext(ml), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", S = g ? g.pathnameBase : "/", E = g && g.route;
  {
    let Y = E && E.path || "";
    U0(
      y,
      !E || Y.endsWith("*") || Y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y === "/" ? "*" : `${Y}/*`}">.`
    );
  }
  let B = on(), q;
  if (r) {
    let Y = typeof r == "string" ? Wn(r) : r;
    Le(
      S === "/" || Y.pathname?.startsWith(S),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${Y.pathname}" was given in the \`location\` prop.`
    ), q = Y;
  } else
    q = B;
  let O = q.pathname || "/", H = O;
  if (S !== "/") {
    let Y = S.replace(/^\//, "").split("/");
    H = "/" + O.replace(/^\//, "").split("/").slice(Y.length).join("/");
  }
  let D = b0(u, { pathname: H });
  kt(
    E || D != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), kt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let J = D1(
    D && D.map(
      (Y) => Object.assign({}, Y, {
        params: Object.assign({}, p, Y.params),
        pathname: dl([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Y.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Y.pathname
        ]),
        pathnameBase: Y.pathnameBase === "/" ? S : dl([
          S,
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
    c,
    o,
    s
  );
  return r && J ? /* @__PURE__ */ w.createElement(
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
    J
  ) : J;
}
function C1() {
  let u = H1(), r = h1(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), h = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ w.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ w.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ w.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ w.createElement("pre", { style: s }, c) : null, h);
}
var O1 = /* @__PURE__ */ w.createElement(C1, null), B0 = class extends w.Component {
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
      const c = E1(u.digest);
      c && (u = c);
    }
    let r = u !== void 0 ? /* @__PURE__ */ w.createElement(ml.Provider, { value: this.props.routeContext }, /* @__PURE__ */ w.createElement(
      Rs.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ w.createElement(z1, { error: u }, r) : r;
  }
};
B0.contextType = g1;
var cs = /* @__PURE__ */ new WeakMap();
function z1({
  children: u,
  error: r
}) {
  let { basename: c } = w.useContext(jt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = A1(r.digest);
    if (o) {
      let s = cs.get(r);
      if (s) throw s;
      let d = T0(o.location, c);
      if (w0 && !cs.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw cs.set(r, h), h;
        }
      return /* @__PURE__ */ w.createElement(
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
function N1({ routeContext: u, match: r, children: c }) {
  let o = w.useContext(In);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ w.createElement(ml.Provider, { value: u }, c);
}
function D1(u, r = [], c = null, o = null, s = null) {
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
    let S = d.findIndex(
      (E) => E.route.id && h?.[E.route.id] !== void 0
    );
    Le(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, S + 1)
    );
  }
  let g = !1, p = -1;
  if (c)
    for (let S = 0; S < d.length; S++) {
      let E = d[S];
      if ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (p = S), E.route.id) {
        let { loaderData: B, errors: q } = c, O = E.route.loader && !B.hasOwnProperty(E.route.id) && (!q || q[E.route.id] === void 0);
        if (E.route.lazy || O) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = c && o ? (S, E) => {
    o(S, {
      location: c.location,
      params: c.matches?.[0]?.params ?? {},
      unstable_pattern: m1(c.matches),
      errorInfo: E
    });
  } : void 0;
  return d.reduceRight(
    (S, E, B) => {
      let q, O = !1, H = null, D = null;
      c && (q = h && E.route.id ? h[E.route.id] : void 0, H = E.route.errorElement || O1, g && (p < 0 && B === 0 ? (U0(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), O = !0, D = null) : p === B && (O = !0, D = E.route.hydrateFallbackElement || null)));
      let J = r.concat(d.slice(0, B + 1)), Y = () => {
        let X;
        return q ? X = H : O ? X = D : E.route.Component ? X = /* @__PURE__ */ w.createElement(E.route.Component, null) : E.route.element ? X = E.route.element : X = S, /* @__PURE__ */ w.createElement(
          N1,
          {
            match: E,
            routeContext: {
              outlet: S,
              matches: J,
              isDataRoute: c != null
            },
            children: X
          }
        );
      };
      return c && (E.route.ErrorBoundary || E.route.errorElement || B === 0) ? /* @__PURE__ */ w.createElement(
        B0,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: H,
          error: q,
          children: Y(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
          onError: y
        }
      ) : Y();
    },
    null
  );
}
function ws(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function M1(u) {
  let r = w.useContext(In);
  return Le(r, ws(u)), r;
}
function B1(u) {
  let r = w.useContext(Ui);
  return Le(r, ws(u)), r;
}
function U1(u) {
  let r = w.useContext(ml);
  return Le(r, ws(u)), r;
}
function Ts(u) {
  let r = U1(u), c = r.matches[r.matches.length - 1];
  return Le(
    c.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), c.route.id;
}
function j1() {
  return Ts(
    "useRouteId"
    /* UseRouteId */
  );
}
function H1() {
  let u = w.useContext(Rs), r = B1(
    "useRouteError"
    /* UseRouteError */
  ), c = Ts(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[c];
}
function L1() {
  let { router: u } = M1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Ts(
    "useNavigate"
    /* UseNavigateStable */
  ), c = w.useRef(!1);
  return D0(() => {
    c.current = !0;
  }), w.useCallback(
    async (s, d = {}) => {
      kt(c.current, N0), c.current && (typeof s == "number" ? await u.navigate(s) : await u.navigate(s, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var Xh = {};
function U0(u, r, c) {
  !r && !Xh[u] && (Xh[u] = !0, kt(!1, c));
}
w.memo(_1);
function _1({
  routes: u,
  future: r,
  state: c,
  onError: o
}) {
  return M0(u, void 0, c, o, r);
}
function j0(u) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function k1({
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
  let g = u.replace(/^\/*/, "/"), p = w.useMemo(
    () => ({
      basename: g,
      navigator: s,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, s, d, h]
  );
  typeof c == "string" && (c = Wn(c));
  let {
    pathname: y = "/",
    search: S = "",
    hash: E = "",
    state: B = null,
    key: q = "default"
  } = c, O = w.useMemo(() => {
    let H = hl(y, g);
    return H == null ? null : {
      location: {
        pathname: H,
        search: S,
        hash: E,
        state: B,
        key: q
      },
      navigationType: o
    };
  }, [g, y, S, E, B, q, o]);
  return kt(
    O != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${S}${E}" because it does not start with the basename, so the <Router> won't render anything.`
  ), O == null ? null : /* @__PURE__ */ w.createElement(jt.Provider, { value: p }, /* @__PURE__ */ w.createElement(Pa.Provider, { children: r, value: O }));
}
function q1({
  children: u,
  location: r
}) {
  return T1(vs(u), r);
}
function vs(u, r = []) {
  let c = [];
  return w.Children.forEach(u, (o, s) => {
    if (!w.isValidElement(o))
      return;
    let d = [...r, s];
    if (o.type === w.Fragment) {
      c.push.apply(
        c,
        vs(o.props.children, d)
      );
      return;
    }
    Le(
      o.type === j0,
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
    o.props.children && (h.children = vs(
      o.props.children,
      d
    )), c.push(h);
  }), c;
}
var Ti = "get", Ci = "application/x-www-form-urlencoded";
function ji(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Q1(u) {
  return ji(u) && u.tagName.toLowerCase() === "button";
}
function G1(u) {
  return ji(u) && u.tagName.toLowerCase() === "form";
}
function Y1(u) {
  return ji(u) && u.tagName.toLowerCase() === "input";
}
function V1(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function J1(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !V1(u);
}
var Ri = null;
function X1() {
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
var Z1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ss(u) {
  return u != null && !Z1.has(u) ? (kt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`
  ), null) : u;
}
function K1(u, r) {
  let c, o, s, d, h;
  if (G1(u)) {
    let g = u.getAttribute("action");
    o = g ? hl(g, r) : null, c = u.getAttribute("method") || Ti, s = ss(u.getAttribute("enctype")) || Ci, d = new FormData(u);
  } else if (Q1(u) || Y1(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (o = p ? hl(p, r) : null, c = u.getAttribute("formmethod") || g.getAttribute("method") || Ti, s = ss(u.getAttribute("formenctype")) || ss(g.getAttribute("enctype")) || Ci, d = new FormData(g, u), !X1()) {
      let { name: y, type: S, value: E } = u;
      if (S === "image") {
        let B = y ? `${y}.` : "";
        d.append(`${B}x`, "0"), d.append(`${B}y`, "0");
      } else y && d.append(y, E);
    }
  } else {
    if (ji(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = Ti, o = null, s = Ci, h = u;
  }
  return d && s === "text/plain" && (h = d, d = void 0), { action: o, method: c.toLowerCase(), encType: s, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Cs(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function F1(u, r, c) {
  let o = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return o.pathname === "/" ? o.pathname = `_root.${c}` : r && hl(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${c}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${c}`, o;
}
async function W1(u, r) {
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
function I1(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function $1(u, r, c) {
  let o = await Promise.all(
    u.map(async (s) => {
      let d = r.routes[s.route.id];
      if (d) {
        let h = await W1(d, c);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return lp(
    o.flat(1).filter(I1).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Zh(u, r, c, o, s, d) {
  let h = (p, y) => c[y] ? p.route.id !== c[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    c[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c[y].route.path?.endsWith("*") && c[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => h(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let S = o.routes[p.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (h(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let E = p.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: c[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof E == "boolean")
        return E;
    }
    return !0;
  }) : [];
}
function P1(u, r, { includeHydrateFallback: c } = {}) {
  return ep(
    u.map((o) => {
      let s = r.routes[o.route.id];
      if (!s) return [];
      let d = [s.module];
      return s.clientActionModule && (d = d.concat(s.clientActionModule)), s.clientLoaderModule && (d = d.concat(s.clientLoaderModule)), c && s.hydrateFallbackModule && (d = d.concat(s.hydrateFallbackModule)), s.imports && (d = d.concat(s.imports)), d;
    }).flat(1)
  );
}
function ep(u) {
  return [...new Set(u)];
}
function tp(u) {
  let r = {}, c = Object.keys(u).sort();
  for (let o of c)
    r[o] = u[o];
  return r;
}
function lp(u, r) {
  let c = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((o, s) => {
    let d = JSON.stringify(tp(s));
    return c.has(d) || (c.add(d), o.push({ key: d, link: s })), o;
  }, []);
}
function H0() {
  let u = w.useContext(In);
  return Cs(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function np() {
  let u = w.useContext(Ui);
  return Cs(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Os = w.createContext(void 0);
Os.displayName = "FrameworkContext";
function L0() {
  let u = w.useContext(Os);
  return Cs(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function ap(u, r) {
  let c = w.useContext(Os), [o, s] = w.useState(!1), [d, h] = w.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: S, onTouchStart: E } = r, B = w.useRef(null);
  w.useEffect(() => {
    if (u === "render" && h(!0), u === "viewport") {
      let H = (J) => {
        J.forEach((Y) => {
          h(Y.isIntersecting);
        });
      }, D = new IntersectionObserver(H, { threshold: 0.5 });
      return B.current && D.observe(B.current), () => {
        D.disconnect();
      };
    }
  }, [u]), w.useEffect(() => {
    if (o) {
      let H = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(H);
      };
    }
  }, [o]);
  let q = () => {
    s(!0);
  }, O = () => {
    s(!1), h(!1);
  };
  return c ? u !== "intent" ? [d, B, {}] : [
    d,
    B,
    {
      onFocus: Ka(g, q),
      onBlur: Ka(p, O),
      onMouseEnter: Ka(y, q),
      onMouseLeave: Ka(S, O),
      onTouchStart: Ka(E, q)
    }
  ] : [!1, B, {}];
}
function Ka(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function up({ page: u, ...r }) {
  let { router: c } = H0(), o = w.useMemo(
    () => b0(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return o ? /* @__PURE__ */ w.createElement(rp, { page: u, matches: o, ...r }) : null;
}
function ip(u) {
  let { manifest: r, routeModules: c } = L0(), [o, s] = w.useState([]);
  return w.useEffect(() => {
    let d = !1;
    return $1(u, r, c).then(
      (h) => {
        d || s(h);
      }
    ), () => {
      d = !0;
    };
  }, [u, r, c]), o;
}
function rp({
  page: u,
  matches: r,
  ...c
}) {
  let o = on(), { manifest: s, routeModules: d } = L0(), { basename: h } = H0(), { loaderData: g, matches: p } = np(), y = w.useMemo(
    () => Zh(
      u,
      r,
      p,
      s,
      o,
      "data"
    ),
    [u, r, p, s, o]
  ), S = w.useMemo(
    () => Zh(
      u,
      r,
      p,
      s,
      o,
      "assets"
    ),
    [u, r, p, s, o]
  ), E = w.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let O = /* @__PURE__ */ new Set(), H = !1;
    if (r.forEach((J) => {
      let Y = s.routes[J.route.id];
      !Y || !Y.hasLoader || (!y.some((X) => X.route.id === J.route.id) && J.route.id in g && d[J.route.id]?.shouldRevalidate || Y.hasClientLoader ? H = !0 : O.add(J.route.id));
    }), O.size === 0)
      return [];
    let D = F1(u, h, "data");
    return H && O.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((J) => O.has(J.route.id)).map((J) => J.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    h,
    g,
    o,
    s,
    y,
    r,
    u,
    d
  ]), B = w.useMemo(
    () => P1(S, s),
    [S, s]
  ), q = ip(S);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, E.map((O) => /* @__PURE__ */ w.createElement("link", { key: O, rel: "prefetch", as: "fetch", href: O, ...c })), B.map((O) => /* @__PURE__ */ w.createElement("link", { key: O, rel: "modulepreload", href: O, ...c })), q.map(({ key: O, link: H }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ w.createElement("link", { key: O, nonce: c.nonce, ...H })
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
  window: o
}) {
  let s = w.useRef();
  s.current == null && (s.current = Yg({ window: o, v5Compat: !0 }));
  let d = s.current, [h, g] = w.useState({
    action: d.action,
    location: d.location
  }), p = w.useCallback(
    (y) => {
      c === !1 ? g(y) : w.startTransition(() => g(y));
    },
    [c]
  );
  return w.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ w.createElement(
    k1,
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
var _0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, k0 = w.forwardRef(
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
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: B,
    ...q
  }, O) {
    let { basename: H, unstable_useTransitions: D } = w.useContext(jt), J = typeof y == "string" && _0.test(y), Y = T0(y, H);
    y = Y.to;
    let X = x1(y, { relative: s }), [ee, K, le] = ap(
      o,
      q
    ), ne = mp(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: S,
      relative: s,
      viewTransition: E,
      unstable_defaultShouldRevalidate: B,
      unstable_useTransitions: D
    });
    function $(pe) {
      r && r(pe), pe.defaultPrevented || ne(pe);
    }
    let ge = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ w.createElement(
        "a",
        {
          ...q,
          ...le,
          href: Y.absoluteURL || X,
          onClick: Y.isExternal || d ? r : $,
          ref: cp(O, K),
          target: p,
          "data-discover": !J && c === "render" ? "true" : void 0
        }
      )
    );
    return ee && !J ? /* @__PURE__ */ w.createElement(w.Fragment, null, ge, /* @__PURE__ */ w.createElement(up, { page: X })) : ge;
  }
);
k0.displayName = "Link";
var fp = w.forwardRef(
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
  }, S) {
    let E = tu(h, { relative: y.relative }), B = on(), q = w.useContext(Ui), { navigator: O, basename: H } = w.useContext(jt), D = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    bp(E) && g === !0, J = O.encodeLocation ? O.encodeLocation(E).pathname : E.pathname, Y = B.pathname, X = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    c || (Y = Y.toLowerCase(), X = X ? X.toLowerCase() : null, J = J.toLowerCase()), X && H && (X = hl(X, H) || X);
    const ee = J !== "/" && J.endsWith("/") ? J.length - 1 : J.length;
    let K = Y === J || !s && Y.startsWith(J) && Y.charAt(ee) === "/", le = X != null && (X === J || !s && X.startsWith(J) && X.charAt(J.length) === "/"), ne = {
      isActive: K,
      isPending: le,
      isTransitioning: D
    }, $ = K ? r : void 0, ge;
    typeof o == "function" ? ge = o(ne) : ge = [
      o,
      K ? "active" : null,
      le ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let pe = typeof d == "function" ? d(ne) : d;
    return /* @__PURE__ */ w.createElement(
      k0,
      {
        ...y,
        "aria-current": $,
        className: ge,
        ref: S,
        style: pe,
        to: h,
        viewTransition: g
      },
      typeof p == "function" ? p(ne) : p
    );
  }
);
fp.displayName = "NavLink";
var dp = w.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: o,
    replace: s,
    state: d,
    method: h = Ti,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: B,
    ...q
  }, O) => {
    let { unstable_useTransitions: H } = w.useContext(jt), D = pp(), J = vp(g, { relative: y }), Y = h.toLowerCase() === "get" ? "get" : "post", X = typeof g == "string" && _0.test(g), ee = (K) => {
      if (p && p(K), K.defaultPrevented) return;
      K.preventDefault();
      let le = K.nativeEvent.submitter, ne = le?.getAttribute("formmethod") || h, $ = () => D(le || K.currentTarget, {
        fetcherKey: r,
        method: ne,
        navigate: c,
        replace: s,
        state: d,
        relative: y,
        preventScrollReset: S,
        viewTransition: E,
        unstable_defaultShouldRevalidate: B
      });
      H && c !== !1 ? w.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ w.createElement(
      "form",
      {
        ref: O,
        method: Y,
        action: J,
        onSubmit: o ? p : ee,
        ...q,
        "data-discover": !X && u === "render" ? "true" : void 0
      }
    );
  }
);
dp.displayName = "Form";
function hp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function q0(u) {
  let r = w.useContext(In);
  return Le(r, hp(u)), r;
}
function mp(u, {
  target: r,
  replace: c,
  state: o,
  preventScrollReset: s,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = R1(), S = on(), E = tu(u, { relative: d });
  return w.useCallback(
    (B) => {
      if (J1(B, r)) {
        B.preventDefault();
        let q = c !== void 0 ? c : $a(S) === $a(E), O = () => y(u, {
          replace: q,
          state: o,
          preventScrollReset: s,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? w.startTransition(() => O()) : O();
      }
    },
    [
      S,
      y,
      E,
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
var yp = 0, gp = () => `__${String(++yp)}__`;
function pp() {
  let { router: u } = q0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = w.useContext(jt), c = j1(), o = u.fetch, s = u.navigate;
  return w.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: S, body: E } = K1(
        d,
        r
      );
      if (h.navigate === !1) {
        let B = h.fetcherKey || gp();
        await o(B, c, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: S,
          body: E,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await s(h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: S,
          body: E,
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
function vp(u, { relative: r } = {}) {
  let { basename: c } = w.useContext(jt), o = w.useContext(ml);
  Le(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1), d = { ...tu(u || ".", { relative: r }) }, h = on();
  if (u == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((S) => S === "")) {
      g.delete("index"), p.filter((E) => E).forEach((E) => g.append("index", E));
      let S = g.toString();
      d.search = S ? `?${S}` : "";
    }
  }
  return (!u || u === ".") && s.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : dl([c, d.pathname])), $a(d);
}
function bp(u, { relative: r } = {}) {
  let c = w.useContext(O0);
  Le(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = q0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = tu(u, { relative: r });
  if (!c.isTransitioning)
    return !1;
  let d = hl(c.currentLocation.pathname, o) || c.currentLocation.pathname, h = hl(c.nextLocation.pathname, o) || c.nextLocation.pathname;
  return Di(s.pathname, h) != null || Di(s.pathname, d) != null;
}
var os = { exports: {} }, nt = {};
var Kh;
function Sp() {
  if (Kh) return nt;
  Kh = 1;
  var u = xs();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
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
  function d(p, y, S) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: y,
      implementation: S
    };
  }
  var h = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, nt.createPortal = function(p, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, S);
  }, nt.flushSync = function(p) {
    var y = h.T, S = o.p;
    try {
      if (h.T = null, o.p = 2, p) return p();
    } finally {
      h.T = y, o.p = S, o.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var S = y.as, E = g(S, y.crossOrigin), B = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? o.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: E,
          integrity: B,
          fetchPriority: q
        }
      ) : S === "script" && o.d.X(p, {
        crossOrigin: E,
        integrity: B,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, nt.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var S = g(
            y.as,
            y.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(p);
  }, nt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, E = g(S, y.crossOrigin);
      o.d.L(p, S, {
        crossOrigin: E,
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
        var S = g(y.as, y.crossOrigin);
        o.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(p);
  }, nt.requestFormReset = function(p) {
    o.d.r(p);
  }, nt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, nt.useFormState = function(p, y, S) {
    return h.H.useFormState(p, y, S);
  }, nt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Fh;
function Ap() {
  if (Fh) return os.exports;
  Fh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), os.exports = Sp(), os.exports;
}
var fs = { exports: {} }, Fa = {}, ds = { exports: {} }, hs = {};
var Wh;
function Ep() {
  return Wh || (Wh = 1, (function(u) {
    function r(Q, k) {
      var G = Q.length;
      Q.push(k);
      e: for (; 0 < G; ) {
        var re = G - 1 >>> 1, Se = Q[re];
        if (0 < s(Se, k))
          Q[re] = k, Q[G] = Se, G = re;
        else break e;
      }
    }
    function c(Q) {
      return Q.length === 0 ? null : Q[0];
    }
    function o(Q) {
      if (Q.length === 0) return null;
      var k = Q[0], G = Q.pop();
      if (G !== k) {
        Q[0] = G;
        e: for (var re = 0, Se = Q.length, ze = Se >>> 1; re < ze; ) {
          var v = 2 * (re + 1) - 1, U = Q[v], V = v + 1, Z = Q[V];
          if (0 > s(U, G))
            V < Se && 0 > s(Z, U) ? (Q[re] = Z, Q[V] = G, re = V) : (Q[re] = U, Q[v] = G, re = v);
          else if (V < Se && 0 > s(Z, G))
            Q[re] = Z, Q[V] = G, re = V;
          else break e;
        }
      }
      return k;
    }
    function s(Q, k) {
      var G = Q.sortIndex - k.sortIndex;
      return G !== 0 ? G : Q.id - k.id;
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
    var p = [], y = [], S = 1, E = null, B = 3, q = !1, O = !1, H = !1, D = !1, J = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function ee(Q) {
      for (var k = c(y); k !== null; ) {
        if (k.callback === null) o(y);
        else if (k.startTime <= Q)
          o(y), k.sortIndex = k.expirationTime, r(p, k);
        else break;
        k = c(y);
      }
    }
    function K(Q) {
      if (H = !1, ee(Q), !O)
        if (c(p) !== null)
          O = !0, le || (le = !0, Oe());
        else {
          var k = c(y);
          k !== null && Ve(K, k.startTime - Q);
        }
    }
    var le = !1, ne = -1, $ = 5, ge = -1;
    function pe() {
      return D ? !0 : !(u.unstable_now() - ge < $);
    }
    function Ye() {
      if (D = !1, le) {
        var Q = u.unstable_now();
        ge = Q;
        var k = !0;
        try {
          e: {
            O = !1, H && (H = !1, Y(ne), ne = -1), q = !0;
            var G = B;
            try {
              t: {
                for (ee(Q), E = c(p); E !== null && !(E.expirationTime > Q && pe()); ) {
                  var re = E.callback;
                  if (typeof re == "function") {
                    E.callback = null, B = E.priorityLevel;
                    var Se = re(
                      E.expirationTime <= Q
                    );
                    if (Q = u.unstable_now(), typeof Se == "function") {
                      E.callback = Se, ee(Q), k = !0;
                      break t;
                    }
                    E === c(p) && o(p), ee(Q);
                  } else o(p);
                  E = c(p);
                }
                if (E !== null) k = !0;
                else {
                  var ze = c(y);
                  ze !== null && Ve(
                    K,
                    ze.startTime - Q
                  ), k = !1;
                }
              }
              break e;
            } finally {
              E = null, B = G, q = !1;
            }
            k = void 0;
          }
        } finally {
          k ? Oe() : le = !1;
        }
      }
    }
    var Oe;
    if (typeof X == "function")
      Oe = function() {
        X(Ye);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), De = qe.port2;
      qe.port1.onmessage = Ye, Oe = function() {
        De.postMessage(null);
      };
    } else
      Oe = function() {
        J(Ye, 0);
      };
    function Ve(Q, k) {
      ne = J(function() {
        Q(u.unstable_now());
      }, k);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(Q) {
      Q.callback = null;
    }, u.unstable_forceFrameRate = function(Q) {
      0 > Q || 125 < Q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < Q ? Math.floor(1e3 / Q) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, u.unstable_next = function(Q) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = B;
      }
      var G = B;
      B = k;
      try {
        return Q();
      } finally {
        B = G;
      }
    }, u.unstable_requestPaint = function() {
      D = !0;
    }, u.unstable_runWithPriority = function(Q, k) {
      switch (Q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Q = 3;
      }
      var G = B;
      B = Q;
      try {
        return k();
      } finally {
        B = G;
      }
    }, u.unstable_scheduleCallback = function(Q, k, G) {
      var re = u.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? re + G : re) : G = re, Q) {
        case 1:
          var Se = -1;
          break;
        case 2:
          Se = 250;
          break;
        case 5:
          Se = 1073741823;
          break;
        case 4:
          Se = 1e4;
          break;
        default:
          Se = 5e3;
      }
      return Se = G + Se, Q = {
        id: S++,
        callback: k,
        priorityLevel: Q,
        startTime: G,
        expirationTime: Se,
        sortIndex: -1
      }, G > re ? (Q.sortIndex = G, r(y, Q), c(p) === null && Q === c(y) && (H ? (Y(ne), ne = -1) : H = !0, Ve(K, G - re))) : (Q.sortIndex = Se, r(p, Q), O || q || (O = !0, le || (le = !0, Oe()))), Q;
    }, u.unstable_shouldYield = pe, u.unstable_wrapCallback = function(Q) {
      var k = B;
      return function() {
        var G = B;
        B = k;
        try {
          return Q.apply(this, arguments);
        } finally {
          B = G;
        }
      };
    };
  })(hs)), hs;
}
var Ih;
function xp() {
  return Ih || (Ih = 1, ds.exports = Ep()), ds.exports;
}
var $h;
function Rp() {
  if ($h) return Fa;
  $h = 1;
  var u = {};
  var r = xp(), c = xs(), o = Ap();
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
  function S(e) {
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
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = E(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var B = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), O = /* @__PURE__ */ Symbol.for("react.transitional.element"), H = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), K = /* @__PURE__ */ Symbol.for("react.forward_ref"), le = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), ge = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.activity"), Ye = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Oe = Symbol.iterator;
  function qe(e) {
    return e === null || typeof e != "object" ? null : (e = Oe && e[Oe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var De = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ve(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === De ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case Y:
        return "Profiler";
      case J:
        return "StrictMode";
      case le:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case pe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case H:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case K:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Ve(e.type) || "Memo";
        case ge:
          t = e._payload, e = e._init;
          try {
            return Ve(e(t));
          } catch {
          }
      }
    return null;
  }
  var Q = Array.isArray, k = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Se = [], ze = -1;
  function v(e) {
    return { current: e };
  }
  function U(e) {
    0 > ze || (e.current = Se[ze], Se[ze] = null, ze--);
  }
  function V(e, t) {
    ze++, Se[ze] = e.current, e.current = t;
  }
  var Z = v(null), se = v(null), oe = v(null), te = v(null);
  function He(e, t) {
    switch (V(oe, t), V(se, e), V(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? rh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = rh(t), e = ch(t, e);
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
    U(Z), V(Z, e);
  }
  function Re() {
    U(Z), U(se), U(oe);
  }
  function Qt(e) {
    e.memoizedState !== null && V(te, e);
    var t = Z.current, l = ch(t, e.type);
    t !== l && (V(se, e), V(Z, l));
  }
  function Gt(e) {
    se.current === e && (U(Z), U(se)), te.current === e && (U(te), Ya._currentValue = re);
  }
  var ea, js;
  function ql(e) {
    if (ea === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ea = t && t[1] || "", js = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ea + e + js;
  }
  var Gi = !1;
  function Yi(e, t) {
    if (!e || Gi) return "";
    Gi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (M) {
                  var z = M;
                }
                Reflect.construct(e, [], _);
              } else {
                try {
                  _.call();
                } catch (M) {
                  z = M;
                }
                e.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                z = M;
              }
              (_ = e()) && typeof _.catch == "function" && _.catch(function() {
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
        var b = f.split(`
`), C = m.split(`
`);
        for (a = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; a < C.length && !C[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (n === b.length || a === C.length)
          for (n = b.length - 1, a = C.length - 1; 1 <= n && 0 <= a && b[n] !== C[a]; )
            a--;
        for (; 1 <= n && 0 <= a; n--, a--)
          if (b[n] !== C[a]) {
            if (n !== 1 || a !== 1)
              do
                if (n--, a--, 0 > a || b[n] !== C[a]) {
                  var j = `
` + b[n].replace(" at new ", " at ");
                  return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Gi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? ql(l) : "";
  }
  function pm(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ql(e.type);
      case 16:
        return ql("Lazy");
      case 13:
        return e.child !== t && t !== null ? ql("Suspense Fallback") : ql("Suspense");
      case 19:
        return ql("SuspenseList");
      case 0:
      case 15:
        return Yi(e.type, !1);
      case 11:
        return Yi(e.type.render, !1);
      case 1:
        return Yi(e.type, !0);
      case 31:
        return ql("Activity");
      default:
        return "";
    }
  }
  function Hs(e) {
    try {
      var t = "", l = null;
      do
        t += pm(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Vi = Object.prototype.hasOwnProperty, Ji = r.unstable_scheduleCallback, Xi = r.unstable_cancelCallback, vm = r.unstable_shouldYield, bm = r.unstable_requestPaint, yt = r.unstable_now, Sm = r.unstable_getCurrentPriorityLevel, Ls = r.unstable_ImmediatePriority, _s = r.unstable_UserBlockingPriority, ru = r.unstable_NormalPriority, Am = r.unstable_LowPriority, ks = r.unstable_IdlePriority, Em = r.log, xm = r.unstable_setDisableYieldValue, ta = null, gt = null;
  function yl(e) {
    if (typeof Em == "function" && xm(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ta, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : Tm, Rm = Math.log, wm = Math.LN2;
  function Tm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Rm(e) / wm | 0) | 0;
  }
  var cu = 256, su = 262144, ou = 4194304;
  function Ql(e) {
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
    return m !== 0 ? (n = m & ~i, n !== 0 ? a = Ql(n) : (f &= m, f !== 0 ? a = Ql(f) : l || (l = m & ~e, l !== 0 && (a = Ql(l))))) : (m = n & ~i, m !== 0 ? a = Ql(m) : f !== 0 ? a = Ql(f) : l || (l = n & ~e, l !== 0 && (a = Ql(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function la(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Cm(e, t) {
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
  function qs() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Zi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function na(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Om(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, b = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var j = 31 - pt(l), _ = 1 << j;
      m[j] = 0, b[j] = -1;
      var z = C[j];
      if (z !== null)
        for (C[j] = null, j = 0; j < z.length; j++) {
          var M = z[j];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~_;
    }
    n !== 0 && Qs(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Qs(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function Gs(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Ys(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Ki(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Ki(e) {
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
  function Vs() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Dh(e.type));
  }
  function Js(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var gl = Math.random().toString(36).slice(2), $e = "__reactFiber$" + gl, it = "__reactProps$" + gl, fn = "__reactContainer$" + gl, Wi = "__reactEvents$" + gl, zm = "__reactListeners$" + gl, Nm = "__reactHandles$" + gl, Xs = "__reactResources$" + gl, aa = "__reactMarker$" + gl;
  function Ii(e) {
    delete e[$e], delete e[it], delete e[Wi], delete e[zm], delete e[Nm];
  }
  function dn(e) {
    var t = e[$e];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[fn] || l[$e]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = yh(e); e !== null; ) {
            if (l = e[$e]) return l;
            e = yh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function hn(e) {
    if (e = e[$e] || e[fn]) {
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
    var t = e[Xs];
    return t || (t = e[Xs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function We(e) {
    e[aa] = !0;
  }
  var Zs = /* @__PURE__ */ new Set(), Ks = {};
  function Gl(e, t) {
    yn(e, t), yn(e + "Capture", t);
  }
  function yn(e, t) {
    for (Ks[e] = t, e = 0; e < t.length; e++)
      Zs.add(t[e]);
  }
  var Dm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Fs = {}, Ws = {};
  function Mm(e) {
    return Vi.call(Ws, e) ? !0 : Vi.call(Fs, e) ? !1 : Dm.test(e) ? Ws[e] = !0 : (Fs[e] = !0, !1);
  }
  function du(e, t, l) {
    if (Mm(t))
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
  function wt(e) {
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
  function Bm(e, t, l) {
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
  function $i(e) {
    if (!e._valueTracker) {
      var t = Is(e) ? "checked" : "value";
      e._valueTracker = Bm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function $s(e) {
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
  var Um = /[\n"\\]/g;
  function Tt(e) {
    return e.replace(
      Um,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pi(e, t, l, n, a, i, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wt(t)) : e.value !== "" + wt(t) && (e.value = "" + wt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? er(e, f, wt(t)) : l != null ? er(e, f, wt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + wt(m) : e.removeAttribute("name");
  }
  function Ps(e, t, l, n, a, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        $i(e);
        return;
      }
      l = l != null ? "" + wt(l) : "", t = t != null ? "" + wt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), $i(e);
  }
  function er(e, t, l) {
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
      for (l = "" + wt(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function eo(e, t, l) {
    if (t != null && (t = "" + wt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + wt(l) : "";
  }
  function to(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(s(92));
        if (Q(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = wt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), $i(e);
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
  var jm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function lo(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || jm.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function no(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && lo(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && lo(e, i, t[i]);
  }
  function tr(e) {
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
  var Hm = /* @__PURE__ */ new Map([
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
  ]), Lm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yu(e) {
    return Lm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ft() {
  }
  var lr = null;
  function nr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vn = null, bn = null;
  function ao(e) {
    var t = hn(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Pi(
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
              'input[name="' + Tt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[it] || null;
                if (!a) throw Error(s(90));
                Pi(
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
              n = l[t], n.form === e.form && $s(n);
          }
          break e;
        case "textarea":
          eo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && gn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ar = !1;
  function uo(e, t, l) {
    if (ar) return e(t, l);
    ar = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ar = !1, (vn !== null || bn !== null) && (li(), vn && (t = vn, e = bn, bn = vn = null, ao(t), e)))
        for (t = 0; t < e.length; t++) ao(e[t]);
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
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ur = !1;
  if (Wt)
    try {
      var ra = {};
      Object.defineProperty(ra, "passive", {
        get: function() {
          ur = !0;
        }
      }), window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
    } catch {
      ur = !1;
    }
  var pl = null, ir = null, gu = null;
  function io() {
    if (gu) return gu;
    var e, t = ir, l = t.length, n, a = "value" in pl ? pl.value : pl.textContent, i = a.length;
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
  function ro() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vu : ro, this.isPropagationStopped = ro, this;
    }
    return B(t.prototype, {
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
  var Yl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, bu = rt(Yl), ca = B({}, Yl, { view: 0, detail: 0 }), _m = rt(ca), rr, cr, sa, Su = B({}, ca, {
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
    getModifierState: or,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== sa && (sa && e.type === "mousemove" ? (rr = e.screenX - sa.screenX, cr = e.screenY - sa.screenY) : cr = rr = 0, sa = e), rr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : cr;
    }
  }), co = rt(Su), km = B({}, Su, { dataTransfer: 0 }), qm = rt(km), Qm = B({}, ca, { relatedTarget: 0 }), sr = rt(Qm), Gm = B({}, Yl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ym = rt(Gm), Vm = B({}, Yl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Jm = rt(Vm), Xm = B({}, Yl, { data: 0 }), so = rt(Xm), Zm = {
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
  }, Km = {
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
  }, Fm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Wm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fm[e]) ? !!t[e] : !1;
  }
  function or() {
    return Wm;
  }
  var Im = B({}, ca, {
    key: function(e) {
      if (e.key) {
        var t = Zm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Km[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: or,
    charCode: function(e) {
      return e.type === "keypress" ? pu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), $m = rt(Im), Pm = B({}, Su, {
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
  }), oo = rt(Pm), ey = B({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: or
  }), ty = rt(ey), ly = B({}, Yl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ny = rt(ly), ay = B({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uy = rt(ay), iy = B({}, Yl, {
    newState: 0,
    oldState: 0
  }), ry = rt(iy), cy = [9, 13, 27, 32], fr = Wt && "CompositionEvent" in window, oa = null;
  Wt && "documentMode" in document && (oa = document.documentMode);
  var sy = Wt && "TextEvent" in window && !oa, fo = Wt && (!fr || oa && 8 < oa && 11 >= oa), ho = " ", mo = !1;
  function yo(e, t) {
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
  function go(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function oy(e, t) {
    switch (e) {
      case "compositionend":
        return go(t);
      case "keypress":
        return t.which !== 32 ? null : (mo = !0, ho);
      case "textInput":
        return e = t.data, e === ho && mo ? null : e;
      default:
        return null;
    }
  }
  function fy(e, t) {
    if (Sn)
      return e === "compositionend" || !fr && yo(e, t) ? (e = io(), gu = ir = pl = null, Sn = !1, e) : null;
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
        return fo && t.locale !== "ko" ? null : t.data;
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
  function po(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!dy[e.type] : t === "textarea";
  }
  function vo(e, t, l, n) {
    vn ? bn ? bn.push(n) : bn = [n] : vn = n, t = si(t, "onChange"), 0 < t.length && (l = new bu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, da = null;
  function hy(e) {
    th(e, 0);
  }
  function Au(e) {
    var t = ua(e);
    if ($s(t)) return e;
  }
  function bo(e, t) {
    if (e === "change") return t;
  }
  var So = !1;
  if (Wt) {
    var dr;
    if (Wt) {
      var hr = "oninput" in document;
      if (!hr) {
        var Ao = document.createElement("div");
        Ao.setAttribute("oninput", "return;"), hr = typeof Ao.oninput == "function";
      }
      dr = hr;
    } else dr = !1;
    So = dr && (!document.documentMode || 9 < document.documentMode);
  }
  function Eo() {
    fa && (fa.detachEvent("onpropertychange", xo), da = fa = null);
  }
  function xo(e) {
    if (e.propertyName === "value" && Au(da)) {
      var t = [];
      vo(
        t,
        da,
        e,
        nr(e)
      ), uo(hy, t);
    }
  }
  function my(e, t, l) {
    e === "focusin" ? (Eo(), fa = t, da = l, fa.attachEvent("onpropertychange", xo)) : e === "focusout" && Eo();
  }
  function yy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Au(da);
  }
  function gy(e, t) {
    if (e === "click") return Au(t);
  }
  function py(e, t) {
    if (e === "input" || e === "change")
      return Au(t);
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
      if (!Vi.call(t, a) || !vt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Ro(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wo(e, t) {
    var l = Ro(e);
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
      l = Ro(l);
    }
  }
  function To(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? To(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Co(e) {
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
  function mr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var by = Wt && "documentMode" in document && 11 >= document.documentMode, An = null, yr = null, ma = null, gr = !1;
  function Oo(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gr || An == null || An !== mu(n) || (n = An, "selectionStart" in n && mr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ma && ha(ma, n) || (ma = n, n = si(yr, "onSelect"), 0 < n.length && (t = new bu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = An)));
  }
  function Vl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var En = {
    animationend: Vl("Animation", "AnimationEnd"),
    animationiteration: Vl("Animation", "AnimationIteration"),
    animationstart: Vl("Animation", "AnimationStart"),
    transitionrun: Vl("Transition", "TransitionRun"),
    transitionstart: Vl("Transition", "TransitionStart"),
    transitioncancel: Vl("Transition", "TransitionCancel"),
    transitionend: Vl("Transition", "TransitionEnd")
  }, pr = {}, zo = {};
  Wt && (zo = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function Jl(e) {
    if (pr[e]) return pr[e];
    if (!En[e]) return e;
    var t = En[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in zo)
        return pr[e] = t[l];
    return e;
  }
  var No = Jl("animationend"), Do = Jl("animationiteration"), Mo = Jl("animationstart"), Sy = Jl("transitionrun"), Ay = Jl("transitionstart"), Ey = Jl("transitioncancel"), Bo = Jl("transitionend"), Uo = /* @__PURE__ */ new Map(), vr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vr.push("scrollEnd");
  function Ht(e, t) {
    Uo.set(e, t), Gl(t, [e]);
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
  }, Ct = [], xn = 0, br = 0;
  function xu() {
    for (var e = xn, t = br = xn = 0; t < e; ) {
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
      i !== 0 && jo(l, a, i);
    }
  }
  function Ru(e, t, l, n) {
    Ct[xn++] = e, Ct[xn++] = t, Ct[xn++] = l, Ct[xn++] = n, br |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Sr(e, t, l, n) {
    return Ru(e, t, l, n), wu(e);
  }
  function Xl(e, t) {
    return Ru(e, null, null, t), wu(e);
  }
  function jo(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function wu(e) {
    if (50 < Ha)
      throw Ha = 0, zc = null, Error(s(185));
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
  function Ar(e) {
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
  function Ho(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Tu(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") Ar(e) && (f = 1);
    else if (typeof e == "string")
      f = Og(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case pe:
          return e = bt(31, l, t, a), e.elementType = pe, e.lanes = i, e;
        case D:
          return Zl(l.children, a, i, t);
        case J:
          f = 8, a |= 24;
          break;
        case Y:
          return e = bt(12, l, t, a | 2), e.elementType = Y, e.lanes = i, e;
        case le:
          return e = bt(13, l, t, a), e.elementType = le, e.lanes = i, e;
        case ne:
          return e = bt(19, l, t, a), e.elementType = ne, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ee:
                f = 10;
                break e;
              case X:
                f = 9;
                break e;
              case K:
                f = 11;
                break e;
              case $:
                f = 14;
                break e;
              case ge:
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
  function Er(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e;
  }
  function Lo(e) {
    var t = bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function xr(e, t, l) {
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
  var _o = /* @__PURE__ */ new WeakMap();
  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = _o.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Hs(t)
      }, _o.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Hs(t)
    };
  }
  var wn = [], Tn = 0, Cu = null, ya = 0, zt = [], Nt = 0, vl = null, Yt = 1, Vt = "";
  function $t(e, t) {
    wn[Tn++] = ya, wn[Tn++] = Cu, Cu = e, ya = t;
  }
  function ko(e, t, l) {
    zt[Nt++] = Yt, zt[Nt++] = Vt, zt[Nt++] = vl, vl = e;
    var n = Yt;
    e = Vt;
    var a = 32 - pt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pt(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Yt = 1 << 32 - pt(t) + a | l << a | n, Vt = i + e;
    } else
      Yt = 1 << i | l << a | n, Vt = e;
  }
  function Rr(e) {
    e.return !== null && ($t(e, 1), ko(e, 1, 0));
  }
  function wr(e) {
    for (; e === Cu; )
      Cu = wn[--Tn], wn[Tn] = null, ya = wn[--Tn], wn[Tn] = null;
    for (; e === vl; )
      vl = zt[--Nt], zt[Nt] = null, Vt = zt[--Nt], zt[Nt] = null, Yt = zt[--Nt], zt[Nt] = null;
  }
  function qo(e, t) {
    zt[Nt++] = Yt, zt[Nt++] = Vt, zt[Nt++] = vl, Yt = t.id, Vt = t.overflow, vl = e;
  }
  var Pe = null, Me = null, ye = !1, bl = null, Dt = !1, Tr = Error(s(519));
  function Sl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ga(Ot(t, e)), Tr;
  }
  function Qo(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[$e] = e, t[it] = n, l) {
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
        for (l = 0; l < _a.length; l++)
          de(_a[l], t);
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
        de("invalid", t), Ps(
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
        de("invalid", t), to(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || uh(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = Ft), t = !0) : t = !1, t || Sl(e, !0);
  }
  function Go(e) {
    for (Pe = e.return; Pe; )
      switch (Pe.tag) {
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
          Pe = Pe.return;
      }
  }
  function Cn(e) {
    if (e !== Pe) return !1;
    if (!ye) return Go(e), ye = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Vc(e.type, e.memoizedProps)), l = !l), l && Me && Sl(e), Go(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Me = mh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Me = mh(e);
    } else
      t === 27 ? (t = Me, Ul(e.type) ? (e = Fc, Fc = null, Me = e) : Me = t) : Me = Pe ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Kl() {
    Me = Pe = null, ye = !1;
  }
  function Cr() {
    var e = bl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), bl = null), e;
  }
  function ga(e) {
    bl === null ? bl = [e] : bl.push(e);
  }
  var Or = v(null), Fl = null, Pt = null;
  function Al(e, t, l) {
    V(Or, t._currentValue), t._currentValue = l;
  }
  function el(e) {
    e._currentValue = Or.current, U(Or);
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
          var m = i;
          i = a;
          for (var b = 0; b < t.length; b++)
            if (m.context === t[b]) {
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), zr(
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
  function On(e, t, l, n) {
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
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ya) : e = [Ya]);
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
  function Wl(e) {
    Fl = e, Pt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return Yo(Fl, e);
  }
  function zu(e, t) {
    return Fl === null && Wl(e), Yo(e, t);
  }
  function Yo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Pt === null) {
      if (e === null) throw Error(s(308));
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
  }, wy = r.unstable_scheduleCallback, Ty = r.unstable_NormalPriority, Je = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dr() {
    return {
      controller: new Ry(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && wy(Ty, function() {
      e.controller.abort();
    });
  }
  var va = null, Mr = 0, zn = 0, Nn = null;
  function Cy(e, t) {
    if (va === null) {
      var l = va = [];
      Mr = 0, zn = jc(), Nn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Mr++, t.then(Vo, Vo), t;
  }
  function Vo() {
    if (--Mr === 0 && va !== null) {
      Nn !== null && (Nn.status = "fulfilled");
      var e = va;
      va = null, zn = 0, Nn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Oy(e, t) {
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
  var Jo = k.S;
  k.S = function(e, t) {
    zd = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && Cy(e, t), Jo !== null && Jo(e, t);
  };
  var Il = v(null);
  function Br() {
    var e = Il.current;
    return e !== null ? e : Ne.pooledCache;
  }
  function Nu(e, t) {
    t === null ? V(Il, Il.current) : V(Il, t.pool);
  }
  function Xo() {
    var e = Br();
    return e === null ? null : { parent: Je._currentValue, pool: e };
  }
  var Dn = Error(s(460)), Ur = Error(s(474)), Du = Error(s(542)), Mu = { then: function() {
  } };
  function Zo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ko(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Ft, Ft), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Wo(e), e;
      default:
        if (typeof t.status == "string") t.then(Ft, Ft);
        else {
          if (e = Ne, e !== null && 100 < e.shellSuspendCounter)
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
        throw Pl = t, Dn;
    }
  }
  function $l(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Pl = l, Dn) : l;
    }
  }
  var Pl = null;
  function Fo() {
    if (Pl === null) throw Error(s(459));
    var e = Pl;
    return Pl = null, e;
  }
  function Wo(e) {
    if (e === Dn || e === Du)
      throw Error(s(483));
  }
  var Mn = null, ba = 0;
  function Bu(e) {
    var t = ba;
    return ba += 1, Mn === null && (Mn = []), Ko(Mn, e, t);
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
    function t(R, A) {
      if (e) {
        var T = R.deletions;
        T === null ? (R.deletions = [A], R.flags |= 16) : T.push(A);
      }
    }
    function l(R, A) {
      if (!e) return null;
      for (; A !== null; )
        t(R, A), A = A.sibling;
      return null;
    }
    function n(R) {
      for (var A = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? A.set(R.key, R) : A.set(R.index, R), R = R.sibling;
      return A;
    }
    function a(R, A) {
      return R = It(R, A), R.index = 0, R.sibling = null, R;
    }
    function i(R, A, T) {
      return R.index = T, e ? (T = R.alternate, T !== null ? (T = T.index, T < A ? (R.flags |= 67108866, A) : T) : (R.flags |= 67108866, A)) : (R.flags |= 1048576, A);
    }
    function f(R) {
      return e && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, A, T, L) {
      return A === null || A.tag !== 6 ? (A = Er(T, R.mode, L), A.return = R, A) : (A = a(A, T), A.return = R, A);
    }
    function b(R, A, T, L) {
      var I = T.type;
      return I === D ? j(
        R,
        A,
        T.props.children,
        L,
        T.key
      ) : A !== null && (A.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ge && $l(I) === A.type) ? (A = a(A, T.props), Sa(A, T), A.return = R, A) : (A = Tu(
        T.type,
        T.key,
        T.props,
        null,
        R.mode,
        L
      ), Sa(A, T), A.return = R, A);
    }
    function C(R, A, T, L) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== T.containerInfo || A.stateNode.implementation !== T.implementation ? (A = xr(T, R.mode, L), A.return = R, A) : (A = a(A, T.children || []), A.return = R, A);
    }
    function j(R, A, T, L, I) {
      return A === null || A.tag !== 7 ? (A = Zl(
        T,
        R.mode,
        L,
        I
      ), A.return = R, A) : (A = a(A, T), A.return = R, A);
    }
    function _(R, A, T) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Er(
          "" + A,
          R.mode,
          T
        ), A.return = R, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case O:
            return T = Tu(
              A.type,
              A.key,
              A.props,
              null,
              R.mode,
              T
            ), Sa(T, A), T.return = R, T;
          case H:
            return A = xr(
              A,
              R.mode,
              T
            ), A.return = R, A;
          case ge:
            return A = $l(A), _(R, A, T);
        }
        if (Q(A) || qe(A))
          return A = Zl(
            A,
            R.mode,
            T,
            null
          ), A.return = R, A;
        if (typeof A.then == "function")
          return _(R, Bu(A), T);
        if (A.$$typeof === ee)
          return _(
            R,
            zu(R, A),
            T
          );
        Uu(R, A);
      }
      return null;
    }
    function z(R, A, T, L) {
      var I = A !== null ? A.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return I !== null ? null : m(R, A, "" + T, L);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case O:
            return T.key === I ? b(R, A, T, L) : null;
          case H:
            return T.key === I ? C(R, A, T, L) : null;
          case ge:
            return T = $l(T), z(R, A, T, L);
        }
        if (Q(T) || qe(T))
          return I !== null ? null : j(R, A, T, L, null);
        if (typeof T.then == "function")
          return z(
            R,
            A,
            Bu(T),
            L
          );
        if (T.$$typeof === ee)
          return z(
            R,
            A,
            zu(R, T),
            L
          );
        Uu(R, T);
      }
      return null;
    }
    function M(R, A, T, L, I) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return R = R.get(T) || null, m(A, R, "" + L, I);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case O:
            return R = R.get(
              L.key === null ? T : L.key
            ) || null, b(A, R, L, I);
          case H:
            return R = R.get(
              L.key === null ? T : L.key
            ) || null, C(A, R, L, I);
          case ge:
            return L = $l(L), M(
              R,
              A,
              T,
              L,
              I
            );
        }
        if (Q(L) || qe(L))
          return R = R.get(T) || null, j(A, R, L, I, null);
        if (typeof L.then == "function")
          return M(
            R,
            A,
            T,
            Bu(L),
            I
          );
        if (L.$$typeof === ee)
          return M(
            R,
            A,
            T,
            zu(A, L),
            I
          );
        Uu(A, L);
      }
      return null;
    }
    function F(R, A, T, L) {
      for (var I = null, ve = null, W = A, ce = A = 0, me = null; W !== null && ce < T.length; ce++) {
        W.index > ce ? (me = W, W = null) : me = W.sibling;
        var be = z(
          R,
          W,
          T[ce],
          L
        );
        if (be === null) {
          W === null && (W = me);
          break;
        }
        e && W && be.alternate === null && t(R, W), A = i(be, A, ce), ve === null ? I = be : ve.sibling = be, ve = be, W = me;
      }
      if (ce === T.length)
        return l(R, W), ye && $t(R, ce), I;
      if (W === null) {
        for (; ce < T.length; ce++)
          W = _(R, T[ce], L), W !== null && (A = i(
            W,
            A,
            ce
          ), ve === null ? I = W : ve.sibling = W, ve = W);
        return ye && $t(R, ce), I;
      }
      for (W = n(W); ce < T.length; ce++)
        me = M(
          W,
          R,
          ce,
          T[ce],
          L
        ), me !== null && (e && me.alternate !== null && W.delete(
          me.key === null ? ce : me.key
        ), A = i(
          me,
          A,
          ce
        ), ve === null ? I = me : ve.sibling = me, ve = me);
      return e && W.forEach(function(kl) {
        return t(R, kl);
      }), ye && $t(R, ce), I;
    }
    function P(R, A, T, L) {
      if (T == null) throw Error(s(151));
      for (var I = null, ve = null, W = A, ce = A = 0, me = null, be = T.next(); W !== null && !be.done; ce++, be = T.next()) {
        W.index > ce ? (me = W, W = null) : me = W.sibling;
        var kl = z(R, W, be.value, L);
        if (kl === null) {
          W === null && (W = me);
          break;
        }
        e && W && kl.alternate === null && t(R, W), A = i(kl, A, ce), ve === null ? I = kl : ve.sibling = kl, ve = kl, W = me;
      }
      if (be.done)
        return l(R, W), ye && $t(R, ce), I;
      if (W === null) {
        for (; !be.done; ce++, be = T.next())
          be = _(R, be.value, L), be !== null && (A = i(be, A, ce), ve === null ? I = be : ve.sibling = be, ve = be);
        return ye && $t(R, ce), I;
      }
      for (W = n(W); !be.done; ce++, be = T.next())
        be = M(W, R, ce, be.value, L), be !== null && (e && be.alternate !== null && W.delete(be.key === null ? ce : be.key), A = i(be, A, ce), ve === null ? I = be : ve.sibling = be, ve = be);
      return e && W.forEach(function(kg) {
        return t(R, kg);
      }), ye && $t(R, ce), I;
    }
    function Ce(R, A, T, L) {
      if (typeof T == "object" && T !== null && T.type === D && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case O:
            e: {
              for (var I = T.key; A !== null; ) {
                if (A.key === I) {
                  if (I = T.type, I === D) {
                    if (A.tag === 7) {
                      l(
                        R,
                        A.sibling
                      ), L = a(
                        A,
                        T.props.children
                      ), L.return = R, R = L;
                      break e;
                    }
                  } else if (A.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ge && $l(I) === A.type) {
                    l(
                      R,
                      A.sibling
                    ), L = a(A, T.props), Sa(L, T), L.return = R, R = L;
                    break e;
                  }
                  l(R, A);
                  break;
                } else t(R, A);
                A = A.sibling;
              }
              T.type === D ? (L = Zl(
                T.props.children,
                R.mode,
                L,
                T.key
              ), L.return = R, R = L) : (L = Tu(
                T.type,
                T.key,
                T.props,
                null,
                R.mode,
                L
              ), Sa(L, T), L.return = R, R = L);
            }
            return f(R);
          case H:
            e: {
              for (I = T.key; A !== null; ) {
                if (A.key === I)
                  if (A.tag === 4 && A.stateNode.containerInfo === T.containerInfo && A.stateNode.implementation === T.implementation) {
                    l(
                      R,
                      A.sibling
                    ), L = a(A, T.children || []), L.return = R, R = L;
                    break e;
                  } else {
                    l(R, A);
                    break;
                  }
                else t(R, A);
                A = A.sibling;
              }
              L = xr(T, R.mode, L), L.return = R, R = L;
            }
            return f(R);
          case ge:
            return T = $l(T), Ce(
              R,
              A,
              T,
              L
            );
        }
        if (Q(T))
          return F(
            R,
            A,
            T,
            L
          );
        if (qe(T)) {
          if (I = qe(T), typeof I != "function") throw Error(s(150));
          return T = I.call(T), P(
            R,
            A,
            T,
            L
          );
        }
        if (typeof T.then == "function")
          return Ce(
            R,
            A,
            Bu(T),
            L
          );
        if (T.$$typeof === ee)
          return Ce(
            R,
            A,
            zu(R, T),
            L
          );
        Uu(R, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, A !== null && A.tag === 6 ? (l(R, A.sibling), L = a(A, T), L.return = R, R = L) : (l(R, A), L = Er(T, R.mode, L), L.return = R, R = L), f(R)) : l(R, A);
    }
    return function(R, A, T, L) {
      try {
        ba = 0;
        var I = Ce(
          R,
          A,
          T,
          L
        );
        return Mn = null, I;
      } catch (W) {
        if (W === Dn || W === Du) throw W;
        var ve = bt(29, W, null, R.mode);
        return ve.lanes = L, ve.return = R, ve;
      }
    };
  }
  var en = Io(!0), $o = Io(!1), El = !1;
  function jr(e) {
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
  function xl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ae & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = wu(e), jo(e, null, l), t;
    }
    return Ru(e, n, t, l), wu(e);
  }
  function Aa(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Gs(e, l);
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
  var _r = !1;
  function Ea() {
    if (_r) {
      var e = Nn;
      if (e !== null) throw e;
    }
  }
  function xa(e, t, l, n) {
    _r = !1;
    var a = e.updateQueue;
    El = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var b = m, C = b.next;
      b.next = null, f === null ? i = C : f.next = C, f = b;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, m = j.lastBaseUpdate, m !== f && (m === null ? j.firstBaseUpdate = C : m.next = C, j.lastBaseUpdate = b));
    }
    if (i !== null) {
      var _ = a.baseState;
      f = 0, j = C = b = null, m = i;
      do {
        var z = m.lane & -536870913, M = z !== m.lane;
        if (M ? (he & z) === z : (n & z) === z) {
          z !== 0 && z === zn && (_r = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e, P = m;
            z = t;
            var Ce = l;
            switch (P.tag) {
              case 1:
                if (F = P.payload, typeof F == "function") {
                  _ = F.call(Ce, _, z);
                  break e;
                }
                _ = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = P.payload, z = typeof F == "function" ? F.call(Ce, _, z) : F, z == null) break e;
                _ = B({}, _, z);
                break e;
              case 2:
                El = !0;
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
          }, j === null ? (C = j = M, b = _) : j = j.next = M, f |= z;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          M = m, m = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      j === null && (b = _), a.baseState = b, a.firstBaseUpdate = C, a.lastBaseUpdate = j, i === null && (a.shared.lanes = 0), zl |= f, e.lanes = f, e.memoizedState = _;
    }
  }
  function Po(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function ef(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Po(l[e], t);
  }
  var Bn = v(null), ju = v(0);
  function tf(e, t) {
    e = sl, V(ju, e), V(Bn, t), sl = e | t.baseLanes;
  }
  function kr() {
    V(ju, sl), V(Bn, Bn.current);
  }
  function qr() {
    sl = ju.current, U(Bn), U(ju);
  }
  var St = v(null), Mt = null;
  function wl(e) {
    var t = e.alternate;
    V(Qe, Qe.current & 1), V(St, e), Mt === null && (t === null || Bn.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Qr(e) {
    V(Qe, Qe.current), V(St, e), Mt === null && (Mt = e);
  }
  function lf(e) {
    e.tag === 22 ? (V(Qe, Qe.current), V(St, e), Mt === null && (Mt = e)) : Tl();
  }
  function Tl() {
    V(Qe, Qe.current), V(St, St.current);
  }
  function At(e) {
    U(St), Mt === e && (Mt = null), U(Qe);
  }
  var Qe = v(0);
  function Hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Zc(l) || Kc(l)))
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
  var tl = 0, ue = null, we = null, Xe = null, Lu = !1, Un = !1, tn = !1, _u = 0, Ra = 0, jn = null, zy = 0;
  function _e() {
    throw Error(s(321));
  }
  function Gr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Yr(e, t, l, n, a, i) {
    return tl = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? qf : ac, tn = !1, i = l(n, a), tn = !1, Un && (i = af(
      t,
      l,
      n,
      a
    )), nf(e), i;
  }
  function nf(e) {
    k.H = Ca;
    var t = we !== null && we.next !== null;
    if (tl = 0, Xe = we = ue = null, Lu = !1, Ra = 0, jn = null, t) throw Error(s(300));
    e === null || Ze || (e = e.dependencies, e !== null && Ou(e) && (Ze = !0));
  }
  function af(e, t, l, n) {
    ue = e;
    var a = 0;
    do {
      if (Un && (jn = null), Ra = 0, Un = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Xe = we = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      k.H = Qf, i = t(l, n);
    } while (Un);
    return i;
  }
  function Ny() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? wa(t) : t, e = e.useState()[0], (we !== null ? we.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Vr() {
    var e = _u !== 0;
    return _u = 0, e;
  }
  function Jr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Xr(e) {
    if (Lu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Lu = !1;
    }
    tl = 0, Xe = we = ue = null, Un = !1, Ra = _u = 0, jn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Xe === null ? ue.memoizedState = Xe = e : Xe = Xe.next = e, Xe;
  }
  function Ge() {
    if (we === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = Xe === null ? ue.memoizedState : Xe.next;
    if (t !== null)
      Xe = t, we = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(s(467)) : Error(s(310));
      we = e, e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null
      }, Xe === null ? ue.memoizedState = Xe = e : Xe = Xe.next = e;
    }
    return Xe;
  }
  function ku() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wa(e) {
    var t = Ra;
    return Ra += 1, jn === null && (jn = []), e = Ko(jn, e, t), t = ue, (Xe === null ? t.memoizedState : Xe.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? qf : ac), e;
  }
  function qu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wa(e);
      if (e.$$typeof === ee) return et(e);
    }
    throw Error(s(438, String(e)));
  }
  function Zr(e) {
    var t = null, l = ue.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ue.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = ku(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Ye;
    return t.index++, l;
  }
  function ll(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = Ge();
    return Kr(t, we, e);
  }
  function Kr(e, t, l) {
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
      var m = f = null, b = null, C = t, j = !1;
      do {
        var _ = C.lane & -536870913;
        if (_ !== C.lane ? (he & _) === _ : (tl & _) === _) {
          var z = C.revertLane;
          if (z === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), _ === zn && (j = !0);
          else if ((tl & z) === z) {
            C = C.next, z === zn && (j = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, b === null ? (m = b = _, f = i) : b = b.next = _, ue.lanes |= z, zl |= z;
          _ = C.action, tn && l(i, _), i = C.hasEagerState ? C.eagerState : l(i, _);
        } else
          z = {
            lane: _,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, b === null ? (m = b = z, f = i) : b = b.next = z, ue.lanes |= _, zl |= _;
        C = C.next;
      } while (C !== null && C !== t);
      if (b === null ? f = i : b.next = m, !vt(i, e.memoizedState) && (Ze = !0, j && (l = Nn, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = b, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Fr(e) {
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
  function uf(e, t, l) {
    var n = ue, a = Ge(), i = ye;
    if (i) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var f = !vt(
      (we || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, Ze = !0), a = a.queue, $r(sf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Xe !== null && Xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Hn(
        9,
        { destroy: void 0 },
        cf.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Ne === null) throw Error(s(349));
      i || (tl & 127) !== 0 || rf(n, t, l);
    }
    return l;
  }
  function rf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = ku(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function cf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, of(t) && ff(e);
  }
  function sf(e, t, l) {
    return l(function() {
      of(t) && ff(e);
    });
  }
  function of(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l);
    } catch {
      return !0;
    }
  }
  function ff(e) {
    var t = Xl(e, 2);
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
  function df(e, t, l, n) {
    return e.baseState = l, Kr(
      e,
      we,
      typeof n == "function" ? n : ll
    );
  }
  function Dy(e, t, l, n, a) {
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
      k.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, hf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function hf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = k.T, f = {};
      k.T = f;
      try {
        var m = l(a, n), b = k.S;
        b !== null && b(f, m), mf(e, t, m);
      } catch (C) {
        Ir(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), k.T = i;
      }
    } else
      try {
        i = l(a, n), mf(e, t, i);
      } catch (C) {
        Ir(e, t, C);
      }
  }
  function mf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        yf(e, t, n);
      },
      function(n) {
        return Ir(e, t, n);
      }
    ) : yf(e, t, l);
  }
  function yf(e, t, l) {
    t.status = "fulfilled", t.value = l, gf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, hf(e, l)));
  }
  function Ir(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, gf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function gf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function pf(e, t) {
    return t;
  }
  function vf(e, t) {
    if (ye) {
      var l = Ne.formState;
      if (l !== null) {
        e: {
          var n = ue;
          if (ye) {
            if (Me) {
              t: {
                for (var a = Me, i = Dt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Bt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Me = Bt(
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
      lastRenderedReducer: pf,
      lastRenderedState: t
    }, l.queue = n, l = Lf.bind(
      null,
      ue,
      n
    ), n.dispatch = l, n = Wr(!1), i = nc.bind(
      null,
      ue,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = Dy.bind(
      null,
      ue,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function bf(e) {
    var t = Ge();
    return Sf(t, we, e);
  }
  function Sf(e, t, l) {
    if (t = Kr(
      e,
      t,
      pf
    )[0], e = Qu(ll)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = wa(t);
      } catch (f) {
        throw f === Dn ? Du : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Hn(
      9,
      { destroy: void 0 },
      My.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function My(e, t) {
    e.action = t;
  }
  function Af(e) {
    var t = Ge(), l = we;
    if (l !== null)
      return Sf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Hn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ue.updateQueue, t === null && (t = ku(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Ef() {
    return Ge().memoizedState;
  }
  function Gu(e, t, l, n) {
    var a = ut();
    ue.flags |= e, a.memoizedState = Hn(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Yu(e, t, l, n) {
    var a = Ge();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    we !== null && n !== null && Gr(n, we.memoizedState.deps) ? a.memoizedState = Hn(t, i, l, n) : (ue.flags |= e, a.memoizedState = Hn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function xf(e, t) {
    Gu(8390656, 8, e, t);
  }
  function $r(e, t) {
    Yu(2048, 8, e, t);
  }
  function By(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = ku(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Rf(e) {
    var t = Ge().memoizedState;
    return By({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function wf(e, t) {
    return Yu(4, 2, e, t);
  }
  function Tf(e, t) {
    return Yu(4, 4, e, t);
  }
  function Cf(e, t) {
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
    l = l != null ? l.concat([e]) : null, Yu(4, 4, Cf.bind(null, t, e), l);
  }
  function Pr() {
  }
  function zf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Gr(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Nf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Gr(t, n[1]))
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
  function ec(e, t, l) {
    return l === void 0 || (tl & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Dd(), ue.lanes |= e, zl |= e, l);
  }
  function Df(e, t, l, n) {
    return vt(l, t) ? l : Bn.current !== null ? (e = ec(e, l, n), vt(e, t) || (Ze = !0), e) : (tl & 42) === 0 || (tl & 1073741824) !== 0 && (he & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = Dd(), ue.lanes |= e, zl |= e, t);
  }
  function Mf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var f = k.T, m = {};
    k.T = m, nc(e, !1, t, l);
    try {
      var b = a(), C = k.S;
      if (C !== null && C(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var j = Oy(
          b,
          n
        );
        Ta(
          e,
          t,
          j,
          Rt(e)
        );
      } else
        Ta(
          e,
          t,
          n,
          Rt(e)
        );
    } catch (_) {
      Ta(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        Rt()
      );
    } finally {
      G.p = i, f !== null && m.types !== null && (f.types = m.types), k.T = f;
    }
  }
  function Uy() {
  }
  function tc(e, t, l, n) {
    if (e.tag !== 5) throw Error(s(476));
    var a = Bf(e).queue;
    Mf(
      e,
      a,
      t,
      re,
      l === null ? Uy : function() {
        return Uf(e), l(n);
      }
    );
  }
  function Bf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: re
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
  function Uf(e) {
    var t = Bf(e);
    t.next === null && (t = e.alternate.memoizedState), Ta(
      e,
      t.next.queue,
      {},
      Rt()
    );
  }
  function lc() {
    return et(Ya);
  }
  function jf() {
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
          e = xl(l);
          var n = Rl(t, e, l);
          n !== null && (dt(n, t, l), Aa(n, t, l)), t = { cache: Dr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Hy(e, t, l) {
    var n = Rt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(e) ? _f(t, l) : (l = Sr(e, t, l, n), l !== null && (dt(l, e, n), kf(l, t, n)));
  }
  function Lf(e, t, l) {
    var n = Rt();
    Ta(e, t, l, n);
  }
  function Ta(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vu(e)) _f(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, m = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = m, vt(m, f))
            return Ru(e, t, a, 0), Ne === null && xu(), !1;
        } catch {
        }
      if (l = Sr(e, t, a, n), l !== null)
        return dt(l, e, n), kf(l, t, n), !0;
    }
    return !1;
  }
  function nc(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: jc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(e)) {
      if (t) throw Error(s(479));
    } else
      t = Sr(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Vu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function _f(e, t) {
    Un = Lu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function kf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, Gs(e, l);
    }
  }
  var Ca = {
    readContext: et,
    use: qu,
    useCallback: _e,
    useContext: _e,
    useEffect: _e,
    useImperativeHandle: _e,
    useLayoutEffect: _e,
    useInsertionEffect: _e,
    useMemo: _e,
    useReducer: _e,
    useRef: _e,
    useState: _e,
    useDebugValue: _e,
    useDeferredValue: _e,
    useTransition: _e,
    useSyncExternalStore: _e,
    useId: _e,
    useHostTransitionStatus: _e,
    useFormState: _e,
    useActionState: _e,
    useOptimistic: _e,
    useMemoCache: _e,
    useCacheRefresh: _e
  };
  Ca.useEffectEvent = _e;
  var qf = {
    readContext: et,
    use: qu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: et,
    useEffect: xf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Gu(
        4194308,
        4,
        Cf.bind(null, t, e),
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
      }, n.queue = e, e = e.dispatch = Hy.bind(
        null,
        ue,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Wr(e);
      var t = e.queue, l = Lf.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Pr,
    useDeferredValue: function(e, t) {
      var l = ut();
      return ec(l, e, t);
    },
    useTransition: function() {
      var e = Wr(!1);
      return e = Mf.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ue, a = ut();
      if (ye) {
        if (l === void 0)
          throw Error(s(407));
        l = l();
      } else {
        if (l = t(), Ne === null)
          throw Error(s(349));
        (he & 127) !== 0 || rf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, xf(sf.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Hn(
        9,
        { destroy: void 0 },
        cf.bind(
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
      var e = ut(), t = Ne.identifierPrefix;
      if (ye) {
        var l = Vt, n = Yt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = _u++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = zy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: lc,
    useFormState: vf,
    useActionState: vf,
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
      return t.queue = l, t = nc.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Zr,
    useCacheRefresh: function() {
      return ut().memoizedState = jy.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ae & 2) !== 0)
          throw Error(s(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ac = {
    readContext: et,
    use: qu,
    useCallback: zf,
    useContext: et,
    useEffect: $r,
    useImperativeHandle: Of,
    useInsertionEffect: wf,
    useLayoutEffect: Tf,
    useMemo: Nf,
    useReducer: Qu,
    useRef: Ef,
    useState: function() {
      return Qu(ll);
    },
    useDebugValue: Pr,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Df(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Qu(ll)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : wa(e),
        t
      ];
    },
    useSyncExternalStore: uf,
    useId: jf,
    useHostTransitionStatus: lc,
    useFormState: bf,
    useActionState: bf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return df(l, we, e, t);
    },
    useMemoCache: Zr,
    useCacheRefresh: Hf
  };
  ac.useEffectEvent = Rf;
  var Qf = {
    readContext: et,
    use: qu,
    useCallback: zf,
    useContext: et,
    useEffect: $r,
    useImperativeHandle: Of,
    useInsertionEffect: wf,
    useLayoutEffect: Tf,
    useMemo: Nf,
    useReducer: Fr,
    useRef: Ef,
    useState: function() {
      return Fr(ll);
    },
    useDebugValue: Pr,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return we === null ? ec(l, e, t) : Df(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fr(ll)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : wa(e),
        t
      ];
    },
    useSyncExternalStore: uf,
    useId: jf,
    useHostTransitionStatus: lc,
    useFormState: Af,
    useActionState: Af,
    useOptimistic: function(e, t) {
      var l = Ge();
      return we !== null ? df(l, we, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Zr,
    useCacheRefresh: Hf
  };
  Qf.useEffectEvent = Rf;
  function uc(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : B({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var ic = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = xl(n);
      a.payload = t, l != null && (a.callback = l), t = Rl(e, a, n), t !== null && (dt(t, e, n), Aa(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Rt(), a = xl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Rl(e, a, n), t !== null && (dt(t, e, n), Aa(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Rt(), n = xl(l);
      n.tag = 2, t != null && (n.callback = t), t = Rl(e, n, l), t !== null && (dt(t, e, l), Aa(t, e, l));
    }
  };
  function Gf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function Yf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && ic.enqueueReplaceState(t, t.state, null);
  }
  function ln(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = B({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function Vf(e) {
    Eu(e);
  }
  function Jf(e) {
    console.error(e);
  }
  function Xf(e) {
    Eu(e);
  }
  function Ju(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Zf(e, t, l) {
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
  function rc(e, t, l) {
    return l = xl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ju(e, t);
    }, l;
  }
  function Kf(e) {
    return e = xl(e), e.tag = 3, e;
  }
  function Ff(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Zf(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Zf(t, l, n), typeof a != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([this]) : Nl.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function Ly(e, t, l, n, a) {
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
            return Mt === null ? ni() : l.alternate === null && ke === 0 && (ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Mc(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Mc(e, n, a)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return Mc(e, n, a), ni(), !1;
    }
    if (ye)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Tr && (e = Error(s(422), { cause: n }), ga(Ot(e, l)))) : (n !== Tr && (t = Error(s(423), {
        cause: n
      }), ga(
        Ot(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = Ot(n, l), a = rc(
        e.stateNode,
        n,
        a
      ), Lr(e, a), ke !== 4 && (ke = 2)), !1;
    var i = Error(s(520), { cause: n });
    if (i = Ot(i, l), ja === null ? ja = [i] : ja.push(i), ke !== 4 && (ke = 2), t === null) return !0;
    n = Ot(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = rc(l.stateNode, n, e), Lr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Nl === null || !Nl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Kf(a), Ff(
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
  var cc = Error(s(461)), Ze = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? $o(t, null, l, n) : en(
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
    return Wl(t), n = Yr(
      e,
      t,
      l,
      f,
      i,
      a
    ), m = Vr(), e !== null && !Ze ? (Jr(e, t, a), nl(e, t, a)) : (ye && m && Rr(t), t.flags |= 1, tt(e, t, n, a), t.child);
  }
  function If(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !Ar(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, $f(
        e,
        t,
        i,
        n,
        a
      )) : (e = Tu(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !gc(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ha, l(f, n) && e.ref === t.ref)
        return nl(e, t, a);
    }
    return t.flags |= 1, e = It(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function $f(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = n = i, gc(e, a))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else
          return t.lanes = e.lanes, nl(e, t, a);
    }
    return sc(
      e,
      t,
      l,
      n,
      a
    );
  }
  function Pf(e, t, l, n) {
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
        return ed(
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
        ), i !== null ? tf(t, i) : kr(), lf(t);
      else
        return n = t.lanes = 536870912, ed(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Nu(t, i.cachePool), tf(t, i), Tl(), t.memoizedState = null) : (e !== null && Nu(t, null), kr(), Tl());
    return tt(e, t, a, l), t.child;
  }
  function Oa(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ed(e, t, l, n, a) {
    var i = Br();
    return i = i === null ? null : { parent: Je._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Nu(t, null), kr(), lf(t), e !== null && On(e, t, n, !0), t.childLanes = a, null;
  }
  function Xu(e, t) {
    return t = Ku(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function td(e, t, l) {
    return en(t, e.child, null, l), e = Xu(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function _y(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (n.mode === "hidden")
          return e = Xu(t, n), t.lanes = 536870912, Oa(null, e);
        if (Qr(t), (e = Me) ? (e = hh(
          e,
          Dt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Yt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Lo(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return t.lanes = 536870912, null;
      }
      return Xu(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Qr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = td(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (Ze || On(e, t, l, !1), a = (l & e.childLanes) !== 0, Ze || a) {
        if (n = Ne, n !== null && (f = Ys(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Xl(e, f), dt(n, e, f), cc;
        ni(), t = td(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Me = Bt(f.nextSibling), Pe = t, ye = !0, bl = null, Dt = !1, e !== null && qo(t, e), t = Xu(t, n), t.flags |= 4096;
      return t;
    }
    return e = It(e.child, {
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
        throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function sc(e, t, l, n, a) {
    return Wl(t), l = Yr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Vr(), e !== null && !Ze ? (Jr(e, t, a), nl(e, t, a)) : (ye && n && Rr(t), t.flags |= 1, tt(e, t, l, a), t.child);
  }
  function ld(e, t, l, n, a, i) {
    return Wl(t), t.updateQueue = null, l = af(
      t,
      n,
      l,
      a
    ), nf(e), n = Vr(), e !== null && !Ze ? (Jr(e, t, i), nl(e, t, i)) : (ye && n && Rr(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function nd(e, t, l, n, a) {
    if (Wl(t), t.stateNode === null) {
      var i = Rn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ic, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, jr(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : Rn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (uc(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && ic.enqueueReplaceState(i, i.state, null), xa(t, n, i, a), Ea(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, b = ln(l, m);
      i.props = b;
      var C = i.context, j = l.contextType;
      f = Rn, typeof j == "object" && j !== null && (f = et(j));
      var _ = l.getDerivedStateFromProps;
      j = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, j || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || C !== f) && Yf(
        t,
        i,
        n,
        f
      ), El = !1;
      var z = t.memoizedState;
      i.state = z, xa(t, n, i, a), Ea(), C = t.memoizedState, m || z !== C || El ? (typeof _ == "function" && (uc(
        t,
        l,
        _,
        n
      ), C = t.memoizedState), (b = El || Gf(
        t,
        l,
        b,
        n,
        z,
        C,
        f
      )) ? (j || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = b) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Hr(e, t), f = t.memoizedProps, j = ln(l, f), i.props = j, _ = t.pendingProps, z = i.context, C = l.contextType, b = Rn, typeof C == "object" && C !== null && (b = et(C)), m = l.getDerivedStateFromProps, (C = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== _ || z !== b) && Yf(
        t,
        i,
        n,
        b
      ), El = !1, z = t.memoizedState, i.state = z, xa(t, n, i, a), Ea();
      var M = t.memoizedState;
      f !== _ || z !== M || El || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof m == "function" && (uc(
        t,
        l,
        m,
        n
      ), M = t.memoizedState), (j = El || Gf(
        t,
        l,
        j,
        n,
        z,
        M,
        b
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, M, b), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        M,
        b
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = b, n = j) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Zu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = en(
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
  function ad(e, t, l, n) {
    return Kl(), t.flags |= 256, tt(e, t, l, n), t.child;
  }
  var oc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function fc(e) {
    return { baseLanes: e, cachePool: Xo() };
  }
  function dc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= xt), e;
  }
  function ud(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (a ? wl(t) : Tl(), (e = Me) ? (e = hh(
          e,
          Dt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Yt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Lo(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return Kc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = n.children;
      return n = n.fallback, a ? (Tl(), a = t.mode, m = Ku(
        { mode: "hidden", children: m },
        a
      ), n = Zl(
        n,
        a,
        l,
        null
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = fc(l), n.childLanes = dc(
        e,
        f,
        l
      ), t.memoizedState = oc, Oa(null, n)) : (wl(t), hc(t, m));
    }
    var b = e.memoizedState;
    if (b !== null && (m = b.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (wl(t), t.flags &= -257, t = mc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Tl(), t.child = e.child, t.flags |= 128, t = null) : (Tl(), m = n.fallback, a = t.mode, n = Ku(
          { mode: "visible", children: n.children },
          a
        ), m = Zl(
          m,
          a,
          l,
          null
        ), m.flags |= 2, n.return = t, m.return = t, n.sibling = m, t.child = n, en(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = fc(l), n.childLanes = dc(
          e,
          f,
          l
        ), t.memoizedState = oc, t = Oa(null, n));
      else if (wl(t), Kc(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(s(419)), n.stack = "", n.digest = f, ga({ value: n, source: null, stack: null }), t = mc(
          e,
          t,
          l
        );
      } else if (Ze || On(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
        if (f = Ne, f !== null && (n = Ys(f, l), n !== 0 && n !== b.retryLane))
          throw b.retryLane = n, Xl(e, n), dt(f, e, n), cc;
        Zc(m) || ni(), t = mc(
          e,
          t,
          l
        );
      } else
        Zc(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Me = Bt(
          m.nextSibling
        ), Pe = t, ye = !0, bl = null, Dt = !1, e !== null && qo(t, e), t = hc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Tl(), m = n.fallback, a = t.mode, b = e.child, C = b.sibling, n = It(b, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = b.subtreeFlags & 65011712, C !== null ? m = It(
      C,
      m
    ) : (m = Zl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, Oa(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = fc(l) : (a = m.cachePool, a !== null ? (b = Je._currentValue, a = a.parent !== b ? { parent: b, pool: b } : a) : a = Xo(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = dc(
      e,
      f,
      l
    ), t.memoizedState = oc, Oa(e.child, n)) : (wl(t), l = e.child, e = l.sibling, l = It(l, {
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
  function mc(e, t, l) {
    return en(t, e.child, null, l), e = hc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function id(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), zr(e.return, t, l);
  }
  function yc(e, t, l, n, a, i) {
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
  function rd(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = Qe.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Qe, f), tt(e, t, n, l), n = ye ? ya : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && id(e, l, t);
        else if (e.tag === 19)
          id(e, l, t);
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
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), yc(
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
        yc(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        yc(
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
        if (On(
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
      for (e = t.child, l = It(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = It(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function gc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function ky(e, t, l) {
    switch (t.tag) {
      case 3:
        He(t, t.stateNode.containerInfo), Al(t, Je, e.memoizedState.cache), Kl();
        break;
      case 27:
      case 5:
        Qt(t);
        break;
      case 4:
        He(t, t.stateNode.containerInfo);
        break;
      case 10:
        Al(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Qr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (wl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ud(e, t, l) : (wl(t), e = nl(
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
            return rd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), V(Qe, Qe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, Pf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Al(t, Je, e.memoizedState.cache);
    }
    return nl(e, t, l);
  }
  function cd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!gc(e, l) && (t.flags & 128) === 0)
          return Ze = !1, ky(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, ye && (t.flags & 1048576) !== 0 && ko(t, ya, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = $l(t.elementType), t.type = e, typeof e == "function")
            Ar(e) ? (n = ln(e, n), t.tag = 1, t = nd(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = sc(
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
              } else if (a === $) {
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
        return sc(
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
        ), nd(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (He(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Hr(e, t), xa(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, Al(t, Je, n), n !== i.cache && Nr(
            t,
            [Je],
            l,
            !0
          ), Ea(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = ad(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = Ot(
                Error(s(424)),
                t
              ), ga(a), t = ad(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Bt(e.firstChild), Pe = t, ye = !0, bl = null, Dt = !0, l = $o(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Kl(), n === a) {
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
        return Zu(e, t), e === null ? (l = bh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ye || (l = t.type, e = t.pendingProps, n = oi(
          oe.current
        ).createElement(l), n[$e] = t, n[it] = e, lt(n, l, e), We(n), t.stateNode = n) : t.memoizedState = bh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Qt(t), e === null && ye && (n = t.stateNode = gh(
          t.type,
          t.pendingProps,
          oe.current
        ), Pe = t, Dt = !0, a = Me, Ul(t.type) ? (Fc = a, Me = Bt(n.firstChild)) : Me = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Zu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((a = n = Me) && (n = yg(
          n,
          t.type,
          t.pendingProps,
          Dt
        ), n !== null ? (t.stateNode = n, Pe = t, Me = Bt(n.firstChild), Dt = !1, a = !0) : a = !1), a || Sl(t)), Qt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Vc(a, i) ? n = null : f !== null && Vc(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Yr(
          e,
          t,
          Ny,
          null,
          null,
          l
        ), Ya._currentValue = a), Zu(e, t), tt(e, t, n, l), t.child;
      case 6:
        return e === null && ye && ((e = l = Me) && (l = gg(
          l,
          t.pendingProps,
          Dt
        ), l !== null ? (t.stateNode = l, Pe = t, Me = null, e = !0) : e = !1), e || Sl(t)), null;
      case 13:
        return ud(e, t, l);
      case 4:
        return He(
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
        return n = t.pendingProps, Al(t, t.type, n.value), tt(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Wl(t), a = et(a), n = n(a), t.flags |= 1, tt(e, t, n, l), t.child;
      case 14:
        return If(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return $f(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return rd(e, t, l);
      case 31:
        return _y(e, t, l);
      case 22:
        return Pf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Wl(t), n = et(Je), e === null ? (a = Br(), a === null && (a = Ne, i = Dr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, jr(t), Al(t, Je, a)) : ((e.lanes & l) !== 0 && (Hr(e, t), xa(t, null, null, l), Ea()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Al(t, Je, n)) : (n = i.cache, Al(t, Je, n), n !== a.cache && Nr(
          t,
          [Je],
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
  function pc(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (jd()) e.flags |= 8192;
        else
          throw Pl = Mu, Ur;
    } else e.flags &= -16777217;
  }
  function sd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Rh(t))
      if (jd()) e.flags |= 8192;
      else
        throw Pl = Mu, Ur;
  }
  function Fu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? qs() : 536870912, e.lanes |= t, qn |= t);
  }
  function za(e, t) {
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
  function Be(e) {
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
        return Be(t), null;
      case 1:
        return Be(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), el(Je), Re(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Cn(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Cr())), Be(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (al(t), i !== null ? (Be(t), sd(t, i)) : (Be(t), pc(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (al(t), Be(t), sd(t, i)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && al(t), Be(t), pc(
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
              throw Error(s(166));
            return Be(t), null;
          }
          e = Z.current, Cn(t) ? Qo(t) : (e = gh(a, n, l), t.stateNode = e, al(t));
        }
        return Be(t), null;
      case 5:
        if (Gt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Be(t), null;
          }
          if (i = Z.current, Cn(t))
            Qo(t);
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
            i[$e] = t, i[it] = n;
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
        return Be(t), pc(
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
            e[$e] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || uh(e.nodeValue, l)), e || Sl(t, !0);
          } else
            e = oi(e).createTextNode(
              n
            ), e[$e] = t, t.stateNode = e;
        }
        return Be(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Cn(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[$e] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), e = !1;
          } else
            l = Cr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Be(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Cn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[$e] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), a = !1;
          } else
            a = Cr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Fu(t, t.updateQueue), Be(t), null);
      case 4:
        return Re(), e === null && kc(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return el(t.type), Be(t), null;
      case 19:
        if (U(Qe), n = t.memoizedState, n === null) return Be(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) za(n, !1);
          else {
            if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Hu(e), i !== null) {
                  for (t.flags |= 128, za(n, !1), e = i.updateQueue, t.updateQueue = e, Fu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Ho(l, e), l = l.sibling;
                  return V(
                    Qe,
                    Qe.current & 1 | 2
                  ), ye && $t(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > ei && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Hu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Fu(t, e), za(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ye)
                return Be(t), null;
            } else
              2 * yt() - n.renderingStartTime > ei && l !== 536870912 && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Qe.current, V(
          Qe,
          a ? l & 1 | 2 : l & 1
        ), ye && $t(t, n.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return At(t), qr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), l = t.updateQueue, l !== null && Fu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && U(Il), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), el(Je), Be(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Qy(e, t) {
    switch (wr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return el(Je), Re(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Gt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(s(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return U(Qe), null;
      case 4:
        return Re(), null;
      case 10:
        return el(t.type), null;
      case 22:
      case 23:
        return At(t), qr(), e !== null && U(Il), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return el(Je), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function od(e, t) {
    switch (wr(t), t.tag) {
      case 3:
        el(Je), Re();
        break;
      case 26:
      case 27:
      case 5:
        Gt(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        U(Qe);
        break;
      case 10:
        el(t.type);
        break;
      case 22:
      case 23:
        At(t), qr(), e !== null && U(Il);
        break;
      case 24:
        el(Je);
    }
  }
  function Na(e, t) {
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
      xe(t, t.return, m);
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
              var b = l, C = m;
              try {
                C();
              } catch (j) {
                xe(
                  a,
                  b,
                  j
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (j) {
      xe(t, t.return, j);
    }
  }
  function fd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        ef(t, l);
      } catch (n) {
        xe(e, e.return, n);
      }
    }
  }
  function dd(e, t, l) {
    l.props = ln(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      xe(e, t, n);
    }
  }
  function Da(e, t) {
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
      xe(e, t, a);
    }
  }
  function Jt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          xe(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          xe(e, t, a);
        }
      else l.current = null;
  }
  function hd(e) {
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
      xe(e, e.return, a);
    }
  }
  function vc(e, t, l) {
    try {
      var n = e.stateNode;
      sg(n, e.type, l, t), n[it] = t;
    } catch (a) {
      xe(e, e.return, a);
    }
  }
  function md(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function bc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || md(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sc(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Ft));
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Sc(e, t, l), e = e.sibling; e !== null; )
        Sc(e, t, l), e = e.sibling;
  }
  function Wu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Wu(e, t, l), e = e.sibling; e !== null; )
        Wu(e, t, l), e = e.sibling;
  }
  function yd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      lt(t, n, l), t[$e] = e, t[it] = l;
    } catch (i) {
      xe(e, e.return, i);
    }
  }
  var ul = !1, Ke = !1, Ac = !1, gd = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function Gy(e, t) {
    if (e = e.containerInfo, Gc = pi, e = Co(e), mr(e)) {
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
            var f = 0, m = -1, b = -1, C = 0, j = 0, _ = e, z = null;
            t: for (; ; ) {
              for (var M; _ !== l || a !== 0 && _.nodeType !== 3 || (m = f + a), _ !== i || n !== 0 && _.nodeType !== 3 || (b = f + n), _.nodeType === 3 && (f += _.nodeValue.length), (M = _.firstChild) !== null; )
                z = _, _ = M;
              for (; ; ) {
                if (_ === e) break t;
                if (z === l && ++C === a && (m = f), z === i && ++j === n && (b = f), (M = _.nextSibling) !== null) break;
                _ = z, z = _.parentNode;
              }
              _ = M;
            }
            l = m === -1 || b === -1 ? null : { start: m, end: b };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Yc = { focusedElem: e, selectionRange: l }, pi = !1, Ie = t; Ie !== null; )
      if (t = Ie, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Ie = e;
      else
        for (; Ie !== null; ) {
          switch (t = Ie, i = t.alternate, e = t.flags, t.tag) {
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
                  var F = ln(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    F,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (P) {
                  xe(
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
                  Xc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(e);
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
            e.return = t.return, Ie = e;
            break;
          }
          Ie = t.return;
        }
  }
  function pd(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        rl(e, l), n & 4 && Na(5, l);
        break;
      case 1:
        if (rl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              xe(l, l.return, f);
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
              xe(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && fd(l), n & 512 && Da(l, l.return);
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
            ef(e, t);
          } catch (f) {
            xe(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && yd(l);
      case 26:
      case 5:
        rl(e, l), t === null && n & 4 && hd(l), n & 512 && Da(l, l.return);
        break;
      case 12:
        rl(e, l);
        break;
      case 31:
        rl(e, l), n & 4 && Sd(e, l);
        break;
      case 13:
        rl(e, l), n & 4 && Ad(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Iy.bind(
          null,
          l
        ), pg(e, l))));
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
  function vd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, vd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, ct = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; )
      bd(e, t, l), l = l.sibling;
  }
  function bd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(ta, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ke || Jt(l, t), il(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ke || Jt(l, t);
        var n = je, a = ct;
        Ul(l.type) && (je = l.stateNode, ct = !1), il(
          e,
          t,
          l
        ), qa(l.stateNode), je = n, ct = a;
        break;
      case 5:
        Ke || Jt(l, t);
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
              xe(
                l,
                t,
                i
              );
            }
          else
            try {
              je.removeChild(l.stateNode);
            } catch (i) {
              xe(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        je !== null && (ct ? (e = je, fh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Kn(e)) : fh(je, l.stateNode));
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
        Ke || (Jt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && dd(
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
  function Sd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Kn(e);
      } catch (l) {
        xe(t, t.return, l);
      }
    }
  }
  function Ad(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Kn(e);
      } catch (l) {
        xe(t, t.return, l);
      }
  }
  function Yy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new gd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new gd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function Iu(e, t) {
    var l = Yy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = $y.bind(null, e, n);
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
        bd(i, f, a), je = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ed(t, e), t = t.sibling;
  }
  var Lt = null;
  function Ed(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, e), ot(e), n & 4 && (Cl(3, e, e.return), Na(3, e), Cl(5, e, e.return));
        break;
      case 1:
        st(t, e), ot(e), n & 512 && (Ke || l === null || Jt(l, l.return)), n & 64 && ul && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Lt;
        if (st(t, e), ot(e), n & 512 && (Ke || l === null || Jt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[aa] || i[$e] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), lt(i, n, l), i[$e] = e, We(i), n = i;
                      break e;
                    case "link":
                      var f = Eh(
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
                      if (f = Eh(
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
                  i[$e] = e, We(i), n = i;
                }
                e.stateNode = n;
              } else
                xh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ah(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? xh(
              a,
              e.type,
              e.stateNode
            ) : Ah(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && vc(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        st(t, e), ot(e), n & 512 && (Ke || l === null || Jt(l, l.return)), l !== null && n & 4 && vc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ot(e), n & 512 && (Ke || l === null || Jt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            pn(a, "");
          } catch (F) {
            xe(e, e.return, F);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, vc(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Ac = !0);
        break;
      case 6:
        if (st(t, e), ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (F) {
            xe(e, e.return, F);
          }
        }
        break;
      case 3:
        if (hi = null, a = Lt, Lt = fi(t.containerInfo), st(t, e), Lt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Kn(t.containerInfo);
          } catch (F) {
            xe(e, e.return, F);
          }
        Ac && (Ac = !1, xd(e));
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
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Iu(e, n)));
        break;
      case 13:
        st(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Pu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Iu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var b = l !== null && l.memoizedState !== null, C = ul, j = Ke;
        if (ul = C || a, Ke = j || b, st(t, e), Ke = j, ul = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || b || ul || Ke || nn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                b = l = t;
                try {
                  if (i = b.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = b.stateNode;
                    var _ = b.memoizedProps.style, z = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    m.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (F) {
                  xe(b, b.return, F);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = a ? "" : b.memoizedProps;
                } catch (F) {
                  xe(b, b.return, F);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                b = t;
                try {
                  var M = b.stateNode;
                  a ? dh(M, !0) : dh(b.stateNode, !1);
                } catch (F) {
                  xe(b, b.return, F);
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
          if (md(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = bc(e);
            Wu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (pn(f, ""), l.flags &= -33);
            var m = bc(e);
            Wu(e, m, f);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo, C = bc(e);
            Sc(
              e,
              C,
              b
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (j) {
        xe(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        xd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function rl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        pd(e, t.alternate, t), t = t.sibling;
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
          Jt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && dd(
            t,
            t.return,
            l
          ), nn(t);
          break;
        case 27:
          qa(t.stateNode);
        case 26:
        case 5:
          Jt(t, t.return), nn(t);
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
          ), Na(4, i);
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
              xe(n, n.return, C);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var m = n.stateNode;
            try {
              var b = a.shared.hiddenCallbacks;
              if (b !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < b.length; a++)
                  Po(b[a], m);
            } catch (C) {
              xe(n, n.return, C);
            }
          }
          l && f & 64 && fd(i), Da(i, i.return);
          break;
        case 27:
          yd(i);
        case 26:
        case 5:
          cl(
            a,
            i,
            l
          ), l && n === null && f & 4 && hd(i), Da(i, i.return);
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
          ), l && f & 4 && Sd(a, i);
          break;
        case 13:
          cl(
            a,
            i,
            l
          ), l && f & 4 && Ad(a, i);
          break;
        case 22:
          i.memoizedState === null && cl(
            a,
            i,
            l
          ), Da(i, i.return);
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
  function Ec(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && pa(l));
  }
  function xc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function _t(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Rd(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function Rd(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        _t(
          e,
          t,
          l,
          n
        ), a & 2048 && Na(9, t);
        break;
      case 1:
        _t(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        _t(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e)));
        break;
      case 12:
        if (a & 2048) {
          _t(
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
          } catch (b) {
            xe(t, t.return, b);
          }
        } else
          _t(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        _t(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        _t(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? _t(
          e,
          t,
          l,
          n
        ) : Ma(e, t) : i._visibility & 2 ? _t(
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
        )), a & 2048 && Ec(f, t);
        break;
      case 24:
        _t(
          e,
          t,
          l,
          n
        ), a & 2048 && xc(t.alternate, t);
        break;
      default:
        _t(
          e,
          t,
          l,
          n
        );
    }
  }
  function Ln(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, m = l, b = n, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ln(
            i,
            f,
            m,
            b,
            a
          ), Na(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? Ln(
            i,
            f,
            m,
            b,
            a
          ) : Ma(
            i,
            f
          ) : (j._visibility |= 2, Ln(
            i,
            f,
            m,
            b,
            a
          )), a && C & 2048 && Ec(
            f.alternate,
            f
          );
          break;
        case 24:
          Ln(
            i,
            f,
            m,
            b,
            a
          ), a && C & 2048 && xc(f.alternate, f);
          break;
        default:
          Ln(
            i,
            f,
            m,
            b,
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
            Ma(l, n), a & 2048 && Ec(
              n.alternate,
              n
            );
            break;
          case 24:
            Ma(l, n), a & 2048 && xc(n.alternate, n);
            break;
          default:
            Ma(l, n);
        }
        t = t.sibling;
      }
  }
  var Ba = 8192;
  function _n(e, t, l) {
    if (e.subtreeFlags & Ba)
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
        _n(
          e,
          t,
          l
        ), e.flags & Ba && e.memoizedState !== null && zg(
          l,
          Lt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        _n(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Lt;
        Lt = fi(e.stateNode.containerInfo), _n(
          e,
          t,
          l
        ), Lt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ba, Ba = 16777216, _n(
          e,
          t,
          l
        ), Ba = n) : _n(
          e,
          t,
          l
        ));
        break;
      default:
        _n(
          e,
          t,
          l
        );
    }
  }
  function Td(e) {
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
          Ie = n, Od(
            n,
            e
          );
        }
      Td(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Cd(e), e = e.sibling;
  }
  function Cd(e) {
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
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, $u(e)) : Ua(e);
        break;
      default:
        Ua(e);
    }
  }
  function $u(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Ie = n, Od(
            n,
            e
          );
        }
      Td(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Cl(8, t, t.return), $u(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, $u(t));
          break;
        default:
          $u(t);
      }
      e = e.sibling;
    }
  }
  function Od(e, t) {
    for (; Ie !== null; ) {
      var l = Ie;
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
      if (n = l.child, n !== null) n.return = l, Ie = n;
      else
        e: for (l = e; Ie !== null; ) {
          n = Ie;
          var a = n.sibling, i = n.return;
          if (vd(n), n === l) {
            Ie = null;
            break e;
          }
          if (a !== null) {
            a.return = i, Ie = a;
            break e;
          }
          Ie = i;
        }
    }
  }
  var Vy = {
    getCacheForType: function(e) {
      var t = et(Je), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return et(Je).controller.signal;
    }
  }, Jy = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Ne = null, fe = null, he = 0, Ee = 0, Et = null, Ol = !1, kn = !1, Rc = !1, sl = 0, ke = 0, zl = 0, an = 0, wc = 0, xt = 0, qn = 0, ja = null, ft = null, Tc = !1, Pu = 0, zd = 0, ei = 1 / 0, ti = null, Nl = null, Fe = 0, Dl = null, Qn = null, ol = 0, Cc = 0, Oc = null, Nd = null, Ha = 0, zc = null;
  function Rt() {
    return (Ae & 2) !== 0 && he !== 0 ? he & -he : k.T !== null ? jc() : Vs();
  }
  function Dd() {
    if (xt === 0)
      if ((he & 536870912) === 0 || ye) {
        var e = su;
        su <<= 1, (su & 3932160) === 0 && (su = 262144), xt = e;
      } else xt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), xt;
  }
  function dt(e, t, l) {
    (e === Ne && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (Gn(e, 0), Ml(
      e,
      he,
      xt,
      !1
    )), na(e, l), ((Ae & 2) === 0 || e !== Ne) && (e === Ne && ((Ae & 2) === 0 && (an |= l), ke === 4 && Ml(
      e,
      he,
      xt,
      !1
    )), Xt(e));
  }
  function Md(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(s(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || la(e, t), a = n ? Ky(e, t) : Dc(e, t, !0), i = n;
    do {
      if (a === 0) {
        kn && !n && Ml(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Xy(l)) {
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
              var m = e;
              a = ja;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (Gn(m, f).flags |= 256), f = Dc(
                m,
                f,
                !1
              ), f !== 2) {
                if (Rc && !b) {
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
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ml(
                n,
                t,
                xt,
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
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (a = Pu + 300 - yt(), 10 < a)) {
            if (Ml(
              n,
              t,
              xt,
              !Ol
            ), fu(n, 0, !0) !== 0) break e;
            ol = t, n.timeoutHandle = sh(
              Bd.bind(
                null,
                n,
                l,
                ft,
                ti,
                Tc,
                t,
                xt,
                an,
                qn,
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
            ti,
            Tc,
            t,
            xt,
            an,
            qn,
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
    Xt(e);
  }
  function Bd(e, t, l, n, a, i, f, m, b, C, j, _, z, M) {
    if (e.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ft
      }, wd(
        t,
        i,
        _
      );
      var F = (i & 62914560) === i ? Pu - yt() : (i & 4194048) === i ? zd - yt() : 0;
      if (F = Ng(
        _,
        F
      ), F !== null) {
        ol = i, e.cancelPendingCommit = F(
          Qd.bind(
            null,
            e,
            t,
            i,
            l,
            n,
            a,
            f,
            m,
            b,
            j,
            _,
            null,
            z,
            M
          )
        ), Ml(e, i, f, !C);
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
      m,
      b
    );
  }
  function Xy(e) {
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
  function li() {
    return (Ae & 6) === 0 ? (La(0), !1) : !0;
  }
  function Nc() {
    if (fe !== null) {
      if (Ee === 0)
        var e = fe.return;
      else
        e = fe, Pt = Fl = null, Xr(e), Mn = null, ba = 0, e = fe;
      for (; e !== null; )
        od(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Gn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, dg(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ol = 0, Nc(), Ne = e, fe = l = It(e.current, null), he = t, Ee = 0, Et = null, Ol = !1, kn = la(e, t), Rc = !1, qn = xt = wc = an = zl = ke = 0, ft = ja = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return sl = t, xu(), l;
  }
  function Ud(e, t) {
    ue = null, k.H = Ca, t === Dn || t === Du ? (t = Fo(), Ee = 3) : t === Ur ? (t = Fo(), Ee = 4) : Ee = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Et = t, fe === null && (ke = 1, Ju(
      e,
      Ot(t, e.current)
    ));
  }
  function jd() {
    var e = St.current;
    return e === null ? !0 : (he & 4194048) === he ? Mt === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === Mt : !1;
  }
  function Hd() {
    var e = k.H;
    return k.H = Ca, e === null ? Ca : e;
  }
  function Ld() {
    var e = k.A;
    return k.A = Vy, e;
  }
  function ni() {
    ke = 4, Ol || (he & 4194048) !== he && St.current !== null || (kn = !0), (zl & 134217727) === 0 && (an & 134217727) === 0 || Ne === null || Ml(
      Ne,
      he,
      xt,
      !1
    );
  }
  function Dc(e, t, l) {
    var n = Ae;
    Ae |= 2;
    var a = Hd(), i = Ld();
    (Ne !== e || he !== t) && (ti = null, Gn(e, t)), t = !1;
    var f = ke;
    e: do
      try {
        if (Ee !== 0 && fe !== null) {
          var m = fe, b = Et;
          switch (Ee) {
            case 8:
              Nc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var C = Ee;
              if (Ee = 0, Et = null, Yn(e, m, b, C), l && kn) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Ee, Ee = 0, Et = null, Yn(e, m, b, C);
          }
        }
        Zy(), f = ke;
        break;
      } catch (j) {
        Ud(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Pt = Fl = null, Ae = n, k.H = a, k.A = i, fe === null && (Ne = null, he = 0, xu()), f;
  }
  function Zy() {
    for (; fe !== null; ) _d(fe);
  }
  function Ky(e, t) {
    var l = Ae;
    Ae |= 2;
    var n = Hd(), a = Ld();
    Ne !== e || he !== t ? (ti = null, ei = yt() + 500, Gn(e, t)) : kn = la(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && fe !== null) {
          t = fe;
          var i = Et;
          t: switch (Ee) {
            case 1:
              Ee = 0, Et = null, Yn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Zo(i)) {
                Ee = 0, Et = null, kd(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || Ne !== e || (Ee = 7), Xt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Zo(i) ? (Ee = 0, Et = null, kd(t)) : (Ee = 0, Et = null, Yn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var m = fe;
                  if (f ? Rh(f) : m.stateNode.complete) {
                    Ee = 0, Et = null;
                    var b = m.sibling;
                    if (b !== null) fe = b;
                    else {
                      var C = m.return;
                      C !== null ? (fe = C, ai(C)) : fe = null;
                    }
                    break t;
                  }
              }
              Ee = 0, Et = null, Yn(e, t, i, 5);
              break;
            case 6:
              Ee = 0, Et = null, Yn(e, t, i, 6);
              break;
            case 8:
              Nc(), ke = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Fy();
        break;
      } catch (j) {
        Ud(e, j);
      }
    while (!0);
    return Pt = Fl = null, k.H = n, k.A = a, Ae = l, fe !== null ? 0 : (Ne = null, he = 0, xu(), ke);
  }
  function Fy() {
    for (; fe !== null && !vm(); )
      _d(fe);
  }
  function _d(e) {
    var t = cd(e.alternate, e, sl);
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : fe = t;
  }
  function kd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ld(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = ld(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        Xr(t);
      default:
        od(l, t), t = fe = Ho(t, sl), t = cd(l, t, sl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : fe = t;
  }
  function Yn(e, t, l, n) {
    Pt = Fl = null, Xr(t), Mn = null, ba = 0;
    var a = t.return;
    try {
      if (Ly(
        e,
        a,
        t,
        l,
        he
      )) {
        ke = 1, Ju(
          e,
          Ot(l, e.current)
        ), fe = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw fe = a, i;
      ke = 1, Ju(
        e,
        Ot(l, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ye || n === 1 ? e = !0 : kn || (he & 536870912) !== 0 ? e = !1 : (Ol = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), qd(t, e)) : ai(t);
  }
  function ai(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        qd(
          t,
          Ol
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
        fe = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        fe = t;
        return;
      }
      fe = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function qd(e, t) {
    do {
      var l = Qy(e.alternate, e);
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
    ke = 6, fe = null;
  }
  function Qd(e, t, l, n, a, i, f, m, b) {
    e.cancelPendingCommit = null;
    do
      ui();
    while (Fe !== 0);
    if ((Ae & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (i = t.lanes | t.childLanes, i |= br, Om(
        e,
        l,
        i,
        f,
        m,
        b
      ), e === Ne && (fe = Ne = null, he = 0), Qn = t, Dl = e, ol = l, Cc = i, Oc = a, Nd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Py(ru, function() {
        return Xd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = k.T, k.T = null, a = G.p, G.p = 2, f = Ae, Ae |= 4;
        try {
          Gy(e, t, l);
        } finally {
          Ae = f, G.p = a, k.T = n;
        }
      }
      Fe = 1, Gd(), Yd(), Vd();
    }
  }
  function Gd() {
    if (Fe === 1) {
      Fe = 0;
      var e = Dl, t = Qn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = k.T, k.T = null;
        var n = G.p;
        G.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Ed(t, e);
          var i = Yc, f = Co(e.containerInfo), m = i.focusedElem, b = i.selectionRange;
          if (f !== m && m && m.ownerDocument && To(
            m.ownerDocument.documentElement,
            m
          )) {
            if (b !== null && mr(m)) {
              var C = b.start, j = b.end;
              if (j === void 0 && (j = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  j,
                  m.value.length
                );
              else {
                var _ = m.ownerDocument || document, z = _ && _.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), F = m.textContent.length, P = Math.min(b.start, F), Ce = b.end === void 0 ? P : Math.min(b.end, F);
                  !M.extend && P > Ce && (f = Ce, Ce = P, P = f);
                  var R = wo(
                    m,
                    P
                  ), A = wo(
                    m,
                    Ce
                  );
                  if (R && A && (M.rangeCount !== 1 || M.anchorNode !== R.node || M.anchorOffset !== R.offset || M.focusNode !== A.node || M.focusOffset !== A.offset)) {
                    var T = _.createRange();
                    T.setStart(R.node, R.offset), M.removeAllRanges(), P > Ce ? (M.addRange(T), M.extend(A.node, A.offset)) : (T.setEnd(A.node, A.offset), M.addRange(T));
                  }
                }
              }
            }
            for (_ = [], M = m; M = M.parentNode; )
              M.nodeType === 1 && _.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < _.length; m++) {
              var L = _[m];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          pi = !!Gc, Yc = Gc = null;
        } finally {
          Ae = a, G.p = n, k.T = l;
        }
      }
      e.current = t, Fe = 2;
    }
  }
  function Yd() {
    if (Fe === 2) {
      Fe = 0;
      var e = Dl, t = Qn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = k.T, k.T = null;
        var n = G.p;
        G.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          pd(e, t.alternate, t);
        } finally {
          Ae = a, G.p = n, k.T = l;
        }
      }
      Fe = 3;
    }
  }
  function Vd() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, bm();
      var e = Dl, t = Qn, l = ol, n = Nd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, Qn = Dl = null, Jd(e, e.pendingLanes));
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
        t = k.T, a = G.p, G.p = 2, k.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var m = n[f];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          k.T = t, G.p = a;
        }
      }
      (ol & 3) !== 0 && ui(), Xt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === zc ? Ha++ : (Ha = 0, zc = e) : Ha = 0, La(0);
    }
  }
  function Jd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ui() {
    return Gd(), Yd(), Vd(), Xd();
  }
  function Xd() {
    if (Fe !== 5) return !1;
    var e = Dl, t = Cc;
    Cc = 0;
    var l = Fi(ol), n = k.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, k.T = null, l = Oc, Oc = null;
      var i = Dl, f = ol;
      if (Fe = 0, Qn = Dl = null, ol = 0, (Ae & 6) !== 0) throw Error(s(331));
      var m = Ae;
      if (Ae |= 4, Cd(i.current), Rd(
        i,
        i.current,
        f,
        l
      ), Ae = m, La(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(ta, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, k.T = n, Jd(e, t);
    }
  }
  function Zd(e, t, l) {
    t = Ot(l, t), t = rc(e.stateNode, t, 2), e = Rl(e, t, 2), e !== null && (na(e, 2), Xt(e));
  }
  function xe(e, t, l) {
    if (e.tag === 3)
      Zd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Nl === null || !Nl.has(n))) {
            e = Ot(l, e), l = Kf(2), n = Rl(t, l, 2), n !== null && (Ff(
              l,
              n,
              t,
              e
            ), na(n, 2), Xt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Jy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Rc = !0, a.add(l), e = Wy.bind(null, e, t, l), t.then(e, e));
  }
  function Wy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ne === e && (he & l) === l && (ke === 4 || ke === 3 && (he & 62914560) === he && 300 > yt() - Pu ? (Ae & 2) === 0 && Gn(e, 0) : wc |= l, qn === he && (qn = 0)), Xt(e);
  }
  function Kd(e, t) {
    t === 0 && (t = qs()), e = Xl(e, t), e !== null && (na(e, t), Xt(e));
  }
  function Iy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Kd(e, l);
  }
  function $y(e, t) {
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
    n !== null && n.delete(t), Kd(e, l);
  }
  function Py(e, t) {
    return Ji(e, t);
  }
  var ii = null, Vn = null, Bc = !1, ri = !1, Uc = !1, Bl = 0;
  function Xt(e) {
    e !== Vn && e.next === null && (Vn === null ? ii = Vn = e : Vn = Vn.next = e), ri = !0, Bc || (Bc = !0, tg());
  }
  function La(e, t) {
    if (!Uc && ri) {
      Uc = !0;
      do
        for (var l = !1, n = ii; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, $d(n, i));
          } else
            i = he, i = fu(
              n,
              n === Ne ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || la(n, i) || (l = !0, $d(n, i));
          n = n.next;
        }
      while (l);
      Uc = !1;
    }
  }
  function eg() {
    Fd();
  }
  function Fd() {
    ri = Bc = !1;
    var e = 0;
    Bl !== 0 && fg() && (e = Bl);
    for (var t = yt(), l = null, n = ii; n !== null; ) {
      var a = n.next, i = Wd(n, t);
      i === 0 ? (n.next = null, l === null ? ii = a : l.next = a, a === null && (Vn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ri = !0)), n = a;
    }
    Fe !== 0 && Fe !== 5 || La(e), Bl !== 0 && (Bl = 0);
  }
  function Wd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, b = a[f];
      b === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = Cm(m, t)) : b <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = Ne, l = he, l = fu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Xi(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || la(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Xi(n), Fi(l)) {
        case 2:
        case 8:
          l = _s;
          break;
        case 32:
          l = ru;
          break;
        case 268435456:
          l = ks;
          break;
        default:
          l = ru;
      }
      return n = Id.bind(null, e), l = Ji(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Xi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Id(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ui() && e.callbackNode !== l)
      return null;
    var n = he;
    return n = fu(
      e,
      e === Ne ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Md(e, n, t), Wd(e, yt()), e.callbackNode != null && e.callbackNode === l ? Id.bind(null, e) : null);
  }
  function $d(e, t) {
    if (ui()) return null;
    Md(e, t, !0);
  }
  function tg() {
    hg(function() {
      (Ae & 6) !== 0 ? Ji(
        Ls,
        eg
      ) : Fd();
    });
  }
  function jc() {
    if (Bl === 0) {
      var e = zn;
      e === 0 && (e = cu, cu <<= 1, (cu & 261888) === 0 && (cu = 256)), Bl = e;
    }
    return Bl;
  }
  function Pd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
  }
  function eh(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function lg(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = Pd(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? Pd(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
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
                if (Bl !== 0) {
                  var b = f ? eh(a, f) : new FormData(a);
                  tc(
                    l,
                    {
                      pending: !0,
                      data: b,
                      method: a.method,
                      action: i
                    },
                    null,
                    b
                  );
                }
              } else
                typeof i == "function" && (m.preventDefault(), b = f ? eh(a, f) : new FormData(a), tc(
                  l,
                  {
                    pending: !0,
                    data: b,
                    method: a.method,
                    action: i
                  },
                  i,
                  b
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Hc = 0; Hc < vr.length; Hc++) {
    var Lc = vr[Hc], ng = Lc.toLowerCase(), ag = Lc[0].toUpperCase() + Lc.slice(1);
    Ht(
      ng,
      "on" + ag
    );
  }
  Ht(No, "onAnimationEnd"), Ht(Do, "onAnimationIteration"), Ht(Mo, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(Sy, "onTransitionRun"), Ht(Ay, "onTransitionStart"), Ht(Ey, "onTransitionCancel"), Ht(Bo, "onTransitionEnd"), yn("onMouseEnter", ["mouseout", "mouseover"]), yn("onMouseLeave", ["mouseout", "mouseover"]), yn("onPointerEnter", ["pointerout", "pointerover"]), yn("onPointerLeave", ["pointerout", "pointerover"]), Gl(
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
  var _a = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ug = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_a)
  );
  function th(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var m = n[f], b = m.instance, C = m.currentTarget;
            if (m = m.listener, b !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              Eu(j);
            }
            a.currentTarget = null, i = b;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (m = n[f], b = m.instance, C = m.currentTarget, m = m.listener, b !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              Eu(j);
            }
            a.currentTarget = null, i = b;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[Wi];
    l === void 0 && (l = t[Wi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (lh(t, e, 2, !1), l.add(n));
  }
  function _c(e, t, l) {
    var n = 0;
    t && (n |= 4), lh(
      l,
      e,
      n,
      t
    );
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function kc(e) {
    if (!e[ci]) {
      e[ci] = !0, Zs.forEach(function(l) {
        l !== "selectionchange" && (ug.has(l) || _c(l, !1, e), _c(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ci] || (t[ci] = !0, _c("selectionchange", !1, t));
    }
  }
  function lh(e, t, l, n) {
    switch (Dh(t)) {
      case 2:
        var a = Bg;
        break;
      case 8:
        a = Ug;
        break;
      default:
        a = es;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !ur || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function qc(e, t, l, n, a) {
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
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = dn(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              n = i = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    uo(function() {
      var C = i, j = nr(l), _ = [];
      e: {
        var z = Uo.get(e);
        if (z !== void 0) {
          var M = bu, F = e;
          switch (e) {
            case "keypress":
              if (pu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = $m;
              break;
            case "focusin":
              F = "focus", M = sr;
              break;
            case "focusout":
              F = "blur", M = sr;
              break;
            case "beforeblur":
            case "afterblur":
              M = sr;
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
              M = co;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = qm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ty;
              break;
            case No:
            case Do:
            case Mo:
              M = Ym;
              break;
            case Bo:
              M = ny;
              break;
            case "scroll":
            case "scrollend":
              M = _m;
              break;
            case "wheel":
              M = uy;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Jm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = oo;
              break;
            case "toggle":
            case "beforetoggle":
              M = ry;
          }
          var P = (t & 4) !== 0, Ce = !P && (e === "scroll" || e === "scrollend"), R = P ? z !== null ? z + "Capture" : null : z;
          P = [];
          for (var A = C, T; A !== null; ) {
            var L = A;
            if (T = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || T === null || R === null || (L = ia(A, R), L != null && P.push(
              ka(A, L, T)
            )), Ce) break;
            A = A.return;
          }
          0 < P.length && (z = new M(
            z,
            F,
            null,
            l,
            j
          ), _.push({ event: z, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== lr && (F = l.relatedTarget || l.fromElement) && (dn(F) || F[fn]))
            break e;
          if ((M || z) && (z = j.window === j ? j : (z = j.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (F = l.relatedTarget || l.toElement, M = C, F = F ? dn(F) : null, F !== null && (Ce = h(F), P = F.tag, F !== Ce || P !== 5 && P !== 27 && P !== 6) && (F = null)) : (M = null, F = C), M !== F)) {
            if (P = co, L = "onMouseLeave", R = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (P = oo, L = "onPointerLeave", R = "onPointerEnter", A = "pointer"), Ce = M == null ? z : ua(M), T = F == null ? z : ua(F), z = new P(
              L,
              A + "leave",
              M,
              l,
              j
            ), z.target = Ce, z.relatedTarget = T, L = null, dn(j) === C && (P = new P(
              R,
              A + "enter",
              F,
              l,
              j
            ), P.target = T, P.relatedTarget = Ce, L = P), Ce = L, M && F)
              t: {
                for (P = ig, R = M, A = F, T = 0, L = R; L; L = P(L))
                  T++;
                L = 0;
                for (var I = A; I; I = P(I))
                  L++;
                for (; 0 < T - L; )
                  R = P(R), T--;
                for (; 0 < L - T; )
                  A = P(A), L--;
                for (; T--; ) {
                  if (R === A || A !== null && R === A.alternate) {
                    P = R;
                    break t;
                  }
                  R = P(R), A = P(A);
                }
                P = null;
              }
            else P = null;
            M !== null && nh(
              _,
              z,
              M,
              P,
              !1
            ), F !== null && Ce !== null && nh(
              _,
              Ce,
              F,
              P,
              !0
            );
          }
        }
        e: {
          if (z = C ? ua(C) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var ve = bo;
          else if (po(z))
            if (So)
              ve = py;
            else {
              ve = yy;
              var W = my;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && tr(C.elementType) && (ve = bo) : ve = gy;
          if (ve && (ve = ve(e, C))) {
            vo(
              _,
              ve,
              l,
              j
            );
            break e;
          }
          W && W(e, z, C), e === "focusout" && C && z.type === "number" && C.memoizedProps.value != null && er(z, "number", z.value);
        }
        switch (W = C ? ua(C) : window, e) {
          case "focusin":
            (po(W) || W.contentEditable === "true") && (An = W, yr = C, ma = null);
            break;
          case "focusout":
            ma = yr = An = null;
            break;
          case "mousedown":
            gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gr = !1, Oo(_, l, j);
            break;
          case "selectionchange":
            if (by) break;
          case "keydown":
          case "keyup":
            Oo(_, l, j);
        }
        var ce;
        if (fr)
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
          Sn ? yo(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
        me && (fo && l.locale !== "ko" && (Sn || me !== "onCompositionStart" ? me === "onCompositionEnd" && Sn && (ce = io()) : (pl = j, ir = "value" in pl ? pl.value : pl.textContent, Sn = !0)), W = si(C, me), 0 < W.length && (me = new so(
          me,
          e,
          null,
          l,
          j
        ), _.push({ event: me, listeners: W }), ce ? me.data = ce : (ce = go(l), ce !== null && (me.data = ce)))), (ce = sy ? oy(e, l) : fy(e, l)) && (me = si(C, "onBeforeInput"), 0 < me.length && (W = new so(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          j
        ), _.push({
          event: W,
          listeners: me
        }), W.data = ce)), lg(
          _,
          e,
          C,
          l,
          j
        );
      }
      th(_, t);
    });
  }
  function ka(e, t, l) {
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
        ka(e, a, i)
      ), a = ia(e, t), a != null && n.push(
        ka(e, a, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function ig(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function nh(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var m = l, b = m.alternate, C = m.stateNode;
      if (m = m.tag, b !== null && b === n) break;
      m !== 5 && m !== 26 && m !== 27 || C === null || (b = C, a ? (C = ia(l, i), C != null && f.unshift(
        ka(l, C, b)
      )) : a || (C = ia(l, i), C != null && f.push(
        ka(l, C, b)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var rg = /\r\n?/g, cg = /\u0000|\uFFFD/g;
  function ah(e) {
    return (typeof e == "string" ? e : "" + e).replace(rg, `
`).replace(cg, "");
  }
  function uh(e, t) {
    return t = ah(t), ah(e) === t;
  }
  function Te(e, t, l, n, a, i) {
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
        no(e, n, i);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && Te(e, t, "name", a.name, a, null), Te(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Te(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Te(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Te(e, t, "encType", a.encType, a, null), Te(e, t, "method", a.method, a, null), Te(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = yu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
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
        de("beforetoggle", e), de("toggle", e), du(e, "popover", n);
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
        du(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Hm.get(l) || l, du(e, l, n));
    }
  }
  function Qc(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        no(e, n, i);
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
        n != null && de("scroll", e);
        break;
      case "onScrollEnd":
        n != null && de("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
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
        if (!Ks.hasOwnProperty(l))
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
                  Te(e, t, i, f, l, null);
              }
          }
        a && Te(e, t, "srcSet", l.srcSet, l, null), n && Te(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var m = i = f = a = null, b = null, C = null;
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
                  b = j;
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
                    throw Error(s(137, t));
                  break;
                default:
                  Te(e, t, n, j, l, null);
              }
          }
        Ps(
          e,
          i,
          m,
          b,
          C,
          f,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), n = f = i = null;
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
                Te(e, t, a, m, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? gn(e, !!n, t, !1) : l != null && gn(e, !!n, l, !0);
        return;
      case "textarea":
        de("invalid", e), i = a = n = null;
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
                Te(e, t, f, m, l, null);
            }
        to(e, n, a, i);
        return;
      case "option":
        for (b in l)
          l.hasOwnProperty(b) && (n = l[b], n != null) && (b === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Te(e, t, b, n, l, null));
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
        for (n = 0; n < _a.length; n++)
          de(_a[n], e);
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
                Te(e, t, C, n, l, null);
            }
        return;
      default:
        if (tr(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (n = l[j], n !== void 0 && Qc(
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
      l.hasOwnProperty(m) && (n = l[m], n != null && Te(e, t, m, n, l, null));
  }
  function sg(e, t, l, n) {
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
        var a = null, i = null, f = null, m = null, b = null, C = null, j = null;
        for (M in l) {
          var _ = l[M];
          if (l.hasOwnProperty(M) && _ != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = _;
              default:
                n.hasOwnProperty(M) || Te(e, t, M, null, n, _);
            }
        }
        for (var z in n) {
          var M = n[z];
          if (_ = l[z], n.hasOwnProperty(z) && (M != null || _ != null))
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
                  throw Error(s(137, t));
                break;
              default:
                M !== _ && Te(
                  e,
                  t,
                  z,
                  M,
                  n,
                  _
                );
            }
        }
        Pi(
          e,
          f,
          m,
          b,
          C,
          j,
          i,
          a
        );
        return;
      case "select":
        M = f = m = z = null;
        for (i in l)
          if (b = l[i], l.hasOwnProperty(i) && b != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                M = b;
              default:
                n.hasOwnProperty(i) || Te(
                  e,
                  t,
                  i,
                  null,
                  n,
                  b
                );
            }
        for (a in n)
          if (i = n[a], b = l[a], n.hasOwnProperty(a) && (i != null || b != null))
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
                i !== b && Te(
                  e,
                  t,
                  a,
                  i,
                  n,
                  b
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
                Te(e, t, m, null, n, a);
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
                a !== i && Te(e, t, f, a, n, i);
            }
        eo(e, z, M);
        return;
      case "option":
        for (var F in l)
          z = l[F], l.hasOwnProperty(F) && z != null && !n.hasOwnProperty(F) && (F === "selected" ? e.selected = !1 : Te(
            e,
            t,
            F,
            null,
            n,
            z
          ));
        for (b in n)
          z = n[b], M = l[b], n.hasOwnProperty(b) && z !== M && (z != null || M != null) && (b === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : Te(
            e,
            t,
            b,
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
          z = l[P], l.hasOwnProperty(P) && z != null && !n.hasOwnProperty(P) && Te(e, t, P, null, n, z);
        for (C in n)
          if (z = n[C], M = l[C], n.hasOwnProperty(C) && z !== M && (z != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(s(137, t));
                break;
              default:
                Te(
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
        if (tr(t)) {
          for (var Ce in l)
            z = l[Ce], l.hasOwnProperty(Ce) && z !== void 0 && !n.hasOwnProperty(Ce) && Qc(
              e,
              t,
              Ce,
              void 0,
              n,
              z
            );
          for (j in n)
            z = n[j], M = l[j], !n.hasOwnProperty(j) || z === M || z === void 0 && M === void 0 || Qc(
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
      z = l[R], l.hasOwnProperty(R) && z != null && !n.hasOwnProperty(R) && Te(e, t, R, null, n, z);
    for (_ in n)
      z = n[_], M = l[_], !n.hasOwnProperty(_) || z === M || z == null && M == null || Te(e, t, _, z, n, M);
  }
  function ih(e) {
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
  function og() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, m = a.duration;
        if (i && m && ih(f)) {
          for (f = 0, m = a.responseEnd, n += 1; n < l.length; n++) {
            var b = l[n], C = b.startTime;
            if (C > m) break;
            var j = b.transferSize, _ = b.initiatorType;
            j && ih(_) && (b = b.responseEnd, f += j * (b < m ? 1 : (m - C) / (b - C)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Gc = null, Yc = null;
  function oi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function rh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ch(e, t) {
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
  function Vc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function fg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Jc ? !1 : (Jc = e, !0) : (Jc = null, !1);
  }
  var sh = typeof setTimeout == "function" ? setTimeout : void 0, dg = typeof clearTimeout == "function" ? clearTimeout : void 0, oh = typeof Promise == "function" ? Promise : void 0, hg = typeof queueMicrotask == "function" ? queueMicrotask : typeof oh < "u" ? function(e) {
    return oh.resolve(null).then(e).catch(mg);
  } : sh;
  function mg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ul(e) {
    return e === "head";
  }
  function fh(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), Kn(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          qa(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, qa(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, m = i.nodeName;
            i[aa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && qa(e.ownerDocument.body);
      l = a;
    } while (l);
    Kn(t);
  }
  function dh(e, t) {
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
  function Xc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(l), Ii(l);
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
  function yg(e, t, l, n) {
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
      if (e = Bt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function gg(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function hh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Kc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function pg(e, t) {
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
  function Bt(e) {
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
  function mh(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Bt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function yh(e) {
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
  function gh(e, t, l) {
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
  function qa(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ii(e);
  }
  var Ut = /* @__PURE__ */ new Map(), ph = /* @__PURE__ */ new Set();
  function fi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fl = G.d;
  G.d = {
    f: vg,
    r: bg,
    D: Sg,
    C: Ag,
    L: Eg,
    m: xg,
    X: wg,
    S: Rg,
    M: Tg
  };
  function vg() {
    var e = fl.f(), t = li();
    return e || t;
  }
  function bg(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Uf(t) : fl.r(e);
  }
  var Jn = typeof document > "u" ? null : document;
  function vh(e, t, l) {
    var n = Jn;
    if (n && typeof t == "string" && t) {
      var a = Tt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), ph.has(a) || (ph.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), We(t), n.head.appendChild(t)));
    }
  }
  function Sg(e) {
    fl.D(e), vh("dns-prefetch", e, null);
  }
  function Ag(e, t) {
    fl.C(e, t), vh("preconnect", e, t);
  }
  function Eg(e, t, l) {
    fl.L(e, t, l);
    var n = Jn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Tt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Tt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Tt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Xn(e);
          break;
        case "script":
          i = Zn(e);
      }
      Ut.has(i) || (e = B(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Qa(i)) || t === "script" && n.querySelector(Ga(i)) || (t = n.createElement("link"), lt(t, "link", e), We(t), n.head.appendChild(t)));
    }
  }
  function xg(e, t) {
    fl.m(e, t);
    var l = Jn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Tt(n) + '"][href="' + Tt(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Zn(e);
      }
      if (!Ut.has(i) && (e = B({ rel: "modulepreload", href: e }, t), Ut.set(i, e), l.querySelector(a) === null)) {
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
        n = l.createElement("link"), lt(n, "link", e), We(n), l.head.appendChild(n);
      }
    }
  }
  function Rg(e, t, l) {
    fl.S(e, t, l);
    var n = Jn;
    if (n && e) {
      var a = mn(n).hoistableStyles, i = Xn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = n.querySelector(
          Qa(i)
        ))
          m.loading = 5;
        else {
          e = B(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ut.get(i)) && Wc(e, l);
          var b = f = n.createElement("link");
          We(b), lt(b, "link", e), b._p = new Promise(function(C, j) {
            b.onload = C, b.onerror = j;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
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
  function wg(e, t) {
    fl.X(e, t);
    var l = Jn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Zn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = B({ src: e, async: !0 }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Tg(e, t) {
    fl.M(e, t);
    var l = Jn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Zn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = B({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Ic(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function bh(e, t, l, n) {
    var a = (a = oe.current) ? fi(a) : null;
    if (!a) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Xn(l.href), l = mn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Xn(l.href);
          var i = mn(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            Qa(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ut.set(e, l), i || Cg(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Zn(l), l = mn(
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
  function Xn(e) {
    return 'href="' + Tt(e) + '"';
  }
  function Qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Sh(e) {
    return B({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Cg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), lt(t, "link", l), We(t), e.head.appendChild(t));
  }
  function Zn(e) {
    return '[src="' + Tt(e) + '"]';
  }
  function Ga(e) {
    return "script[async]" + e;
  }
  function Ah(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Tt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, We(n), n;
          var a = B({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), We(n), lt(n, "style", a), di(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Xn(l.href);
          var i = e.querySelector(
            Qa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, We(i), i;
          n = Sh(l), (a = Ut.get(a)) && Wc(n, a), i = (e.ownerDocument || e).createElement("link"), We(i);
          var f = i;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), lt(i, "link", n), t.state.loading |= 4, di(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Zn(l.src), (a = e.querySelector(
            Ga(i)
          )) ? (t.instance = a, We(a), a) : (n = l, (a = Ut.get(i)) && (n = B({}, l), Ic(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), We(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
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
  function Eh(e, t, l) {
    if (hi === null) {
      var n = /* @__PURE__ */ new Map(), a = hi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = hi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[aa] || i[$e] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var m = n.get(f);
        m ? m.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function xh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Og(e, t, l) {
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
  function Rh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function zg(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Xn(n.href), i = t.querySelector(
          Qa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = mi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, We(i);
          return;
        }
        i = t.ownerDocument || t, n = Sh(n), (a = Ut.get(a)) && Wc(n, a), i = i.createElement("link"), We(i);
        var f = i;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), lt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = mi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var $c = 0;
  function Ng(e, t) {
    return e.stylesheets && e.count === 0 && gi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && gi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && $c === 0 && ($c = 62500 * og());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > $c ? 50 : 800) + t
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yi = /* @__PURE__ */ new Map(), t.forEach(Dg, e), yi = null, mi.call(e));
  }
  function Dg(e, t) {
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
  var Ya = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function Mg(e, t, l, n, a, i, f, m, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zi(0), this.hiddenUpdates = Zi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function wh(e, t, l, n, a, i, f, m, b, C, j, _) {
    return e = new Mg(
      e,
      t,
      l,
      f,
      b,
      C,
      j,
      _,
      m
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = Dr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, jr(i), e;
  }
  function Th(e) {
    return e ? (e = Rn, e) : Rn;
  }
  function Ch(e, t, l, n, a, i) {
    a = Th(a), n.context === null ? n.context = a : n.pendingContext = a, n = xl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(e, n, t), l !== null && (dt(l, e, t), Aa(l, e, t));
  }
  function Oh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Pc(e, t) {
    Oh(e, t), (e = e.alternate) && Oh(e, t);
  }
  function zh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xl(e, 67108864);
      t !== null && dt(t, e, 67108864), Pc(e, 67108864);
    }
  }
  function Nh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Rt();
      t = Ki(t);
      var l = Xl(e, t);
      l !== null && dt(l, e, t), Pc(e, t);
    }
  }
  var pi = !0;
  function Bg(e, t, l, n) {
    var a = k.T;
    k.T = null;
    var i = G.p;
    try {
      G.p = 2, es(e, t, l, n);
    } finally {
      G.p = i, k.T = a;
    }
  }
  function Ug(e, t, l, n) {
    var a = k.T;
    k.T = null;
    var i = G.p;
    try {
      G.p = 8, es(e, t, l, n);
    } finally {
      G.p = i, k.T = a;
    }
  }
  function es(e, t, l, n) {
    if (pi) {
      var a = ts(n);
      if (a === null)
        qc(
          e,
          t,
          n,
          vi,
          l
        ), Mh(e, n);
      else if (Hg(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Mh(e, n), t & 4 && -1 < jg.indexOf(e)) {
        for (; a !== null; ) {
          var i = hn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Ql(i.pendingLanes);
                  if (f !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - pt(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    Xt(i), (Ae & 6) === 0 && (ei = yt() + 500, La(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Xl(i, 2), m !== null && dt(m, i, 2), li(), Pc(i, 2);
            }
          if (i = ts(n), i === null && qc(
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
        qc(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function ts(e) {
    return e = nr(e), ls(e);
  }
  var vi = null;
  function ls(e) {
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
        switch (Sm()) {
          case Ls:
            return 2;
          case _s:
            return 8;
          case ru:
          case Am:
            return 32;
          case ks:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ns = !1, jl = null, Hl = null, Ll = null, Va = /* @__PURE__ */ new Map(), Ja = /* @__PURE__ */ new Map(), _l = [], jg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Mh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jl = null;
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
        Va.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ja.delete(t.pointerId);
    }
  }
  function Xa(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = hn(t), t !== null && zh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Hg(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return jl = Xa(
          jl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Hl = Xa(
          Hl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Ll = Xa(
          Ll,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Va.set(
          i,
          Xa(
            Va.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Ja.set(
          i,
          Xa(
            Ja.get(i) || null,
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
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
              Nh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Js(e.priority, function() {
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
      var l = ts(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        lr = n, l.target.dispatchEvent(n), lr = null;
      } else
        return t = hn(l), t !== null && zh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Uh(e, t, l) {
    bi(e) && l.delete(t);
  }
  function Lg() {
    ns = !1, jl !== null && bi(jl) && (jl = null), Hl !== null && bi(Hl) && (Hl = null), Ll !== null && bi(Ll) && (Ll = null), Va.forEach(Uh), Ja.forEach(Uh);
  }
  function Si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ns || (ns = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Lg
    )));
  }
  var Ai = null;
  function jh(e) {
    Ai !== e && (Ai = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Ai === e && (Ai = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (ls(n || l) === null)
              continue;
            break;
          }
          var i = hn(l);
          i !== null && (e.splice(t, 3), t -= 3, tc(
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
  function Kn(e) {
    function t(b) {
      return Si(b, e);
    }
    jl !== null && Si(jl, e), Hl !== null && Si(Hl, e), Ll !== null && Si(Ll, e), Va.forEach(t), Ja.forEach(t);
    for (var l = 0; l < _l.length; l++) {
      var n = _l[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < _l.length && (l = _l[0], l.blockedOn === null); )
      Bh(l), l.blockedOn === null && _l.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || jh(l);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              m = f.formAction;
            else if (ls(a) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), jh(l);
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
  function as(e) {
    this._internalRoot = e;
  }
  Ei.prototype.render = as.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var l = t.current, n = Rt();
    Ch(l, n, e, t, null, null);
  }, Ei.prototype.unmount = as.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Ch(e.current, 2, null, e, null, null), li(), t[fn] = null;
    }
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  Ei.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Vs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < _l.length && t !== 0 && t < _l[l].priority; l++) ;
      _l.splice(l, 0, e), l === 0 && Bh(e);
    }
  };
  var Lh = c.version;
  if (Lh !== "19.2.3")
    throw Error(
      s(
        527,
        Lh,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = S(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var _g = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var xi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!xi.isDisabled && xi.supportsFiber)
      try {
        ta = xi.inject(
          _g
        ), gt = xi;
      } catch {
      }
  }
  return Fa.createRoot = function(e, t) {
    if (!d(e)) throw Error(s(299));
    var l = !1, n = "", a = Vf, i = Jf, f = Xf;
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
      Hh
    ), e[fn] = t.current, kc(e), new as(t);
  }, Fa.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(s(299));
    var n = !1, a = "", i = Vf, f = Jf, m = Xf, b = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (b = l.formState)), t = wh(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      a,
      b,
      i,
      f,
      m,
      Hh
    ), t.context = Th(null), l = t.current, n = Rt(), n = Ki(n), a = xl(n), a.callback = null, Rl(l, a, n), l = n, t.current.lanes = l, na(t, l), Xt(t), e[fn] = t.current, kc(e), new Ei(t);
  }, Fa.version = "19.2.3", Fa;
}
var Ph;
function wp() {
  if (Ph) return fs.exports;
  Ph = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), fs.exports = Rp(), fs.exports;
}
var Tp = wp();
const Hi = ({ label: u, onClick: r, disabled: c, type: o = "button", className: s, children: d, mainButtonStyle: h }) => /* @__PURE__ */ x.jsx(
  "button",
  {
    className: s || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: r,
    disabled: c,
    type: o,
    style: h,
    children: d || u
  }
), un = w.forwardRef(
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
      ...S
    } = u, E = !!d || !!h, B = S.type === "select" || !!y;
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
        B ? /* @__PURE__ */ x.jsx(
          "select",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...S,
            children: y && y.map((q) => /* @__PURE__ */ x.jsx("option", { value: q.value, children: q.label }, q.value))
          }
        ) : /* @__PURE__ */ x.jsx(
          "input",
          {
            ref: r,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...S
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
      !d && h && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h })
    ] });
  }
), Cp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", zs = ({
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
      c && o && /* @__PURE__ */ x.jsx(
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
}, Q0 = () => /* @__PURE__ */ x.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Ia extends Error {
}
Ia.prototype.name = "InvalidTokenError";
function Op(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (r, c) => {
    let o = c.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
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
    return Op(r);
  } catch {
    return atob(r);
  }
}
function G0(u, r) {
  if (typeof u != "string")
    throw new Ia("Invalid token specified: must be a string");
  r || (r = {});
  const c = r.header === !0 ? 0 : 1, o = u.split(".")[c];
  if (typeof o != "string")
    throw new Ia(`Invalid token specified: missing part #${c + 1}`);
  let s;
  try {
    s = zp(o);
  } catch (d) {
    throw new Ia(`Invalid token specified: invalid base64 for part #${c + 1} (${d.message})`);
  }
  try {
    return JSON.parse(s);
  } catch (d) {
    throw new Ia(`Invalid token specified: invalid json for part #${c + 1} (${d.message})`);
  }
}
function Np() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const r = u.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Mi(u, r, c, o = !0) {
  const s = /* @__PURE__ */ new Date();
  s.setSeconds(s.getSeconds() + c);
  const d = Np(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${s.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function Y0(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var e0 = {};
const { toString: Dp } = Object.prototype, { getPrototypeOf: Ns } = Object, { iterator: Li, toStringTag: V0 } = Symbol, _i = /* @__PURE__ */ ((u) => (r) => {
  const c = Dp.call(r);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), qt = (u) => (u = u.toLowerCase(), (r) => _i(r) === u), ki = (u) => (r) => typeof r === u, { isArray: $n } = Array, Fn = ki("undefined");
function lu(u) {
  return u !== null && !Fn(u) && u.constructor !== null && !Fn(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const J0 = qt("ArrayBuffer");
function Mp(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && J0(u.buffer), r;
}
const Bp = ki("string"), ht = ki("function"), X0 = ki("number"), nu = (u) => u !== null && typeof u == "object", Up = (u) => u === !0 || u === !1, Oi = (u) => {
  if (_i(u) !== "object")
    return !1;
  const r = Ns(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(V0 in u) && !(Li in u);
}, jp = (u) => {
  if (!nu(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Hp = qt("Date"), Lp = qt("File"), _p = qt("Blob"), kp = qt("FileList"), qp = (u) => nu(u) && ht(u.pipe), Qp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((r = _i(u)) === "formdata" || // detect form-data instance
  r === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, Gp = qt("URLSearchParams"), [Yp, Vp, Jp, Xp] = ["ReadableStream", "Request", "Response", "Headers"].map(qt), Zp = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function au(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let o, s;
  if (typeof u != "object" && (u = [u]), $n(u))
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
function Z0(u, r) {
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
const rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, K0 = (u) => !Fn(u) && u !== rn;
function bs() {
  const { caseless: u, skipUndefined: r } = K0(this) && this || {}, c = {}, o = (s, d) => {
    const h = u && Z0(c, d) || d;
    Oi(c[h]) && Oi(s) ? c[h] = bs(c[h], s) : Oi(s) ? c[h] = bs({}, s) : $n(s) ? c[h] = s.slice() : (!r || !Fn(s)) && (c[h] = s);
  };
  for (let s = 0, d = arguments.length; s < d; s++)
    arguments[s] && au(arguments[s], o);
  return c;
}
const Kp = (u, r, c, { allOwnKeys: o } = {}) => (au(r, (s, d) => {
  c && ht(s) ? u[d] = Y0(s, c) : u[d] = s;
}, { allOwnKeys: o }), u), Fp = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Wp = (u, r, c, o) => {
  u.prototype = Object.create(r.prototype, o), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), c && Object.assign(u.prototype, c);
}, Ip = (u, r, c, o) => {
  let s, d, h;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (s = Object.getOwnPropertyNames(u), d = s.length; d-- > 0; )
      h = s[d], (!o || o(h, u, r)) && !g[h] && (r[h] = u[h], g[h] = !0);
    u = c !== !1 && Ns(u);
  } while (u && (!c || c(u, r)) && u !== Object.prototype);
  return r;
}, $p = (u, r, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= r.length;
  const o = u.indexOf(r, c);
  return o !== -1 && o === c;
}, Pp = (u) => {
  if (!u) return null;
  if ($n(u)) return u;
  let r = u.length;
  if (!X0(r)) return null;
  const c = new Array(r);
  for (; r-- > 0; )
    c[r] = u[r];
  return c;
}, ev = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && Ns(Uint8Array)), tv = (u, r) => {
  const o = (u && u[Li]).call(u);
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
}, nv = qt("HTMLFormElement"), av = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, o, s) {
    return o.toUpperCase() + s;
  }
), t0 = (({ hasOwnProperty: u }) => (r, c) => u.call(r, c))(Object.prototype), uv = qt("RegExp"), F0 = (u, r) => {
  const c = Object.getOwnPropertyDescriptors(u), o = {};
  au(c, (s, d) => {
    let h;
    (h = r(s, d, u)) !== !1 && (o[d] = h || s);
  }), Object.defineProperties(u, o);
}, iv = (u) => {
  F0(u, (r, c) => {
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
}, rv = (u, r) => {
  const c = {}, o = (s) => {
    s.forEach((d) => {
      c[d] = !0;
    });
  };
  return $n(u) ? o(u) : o(String(u).split(r)), c;
}, cv = () => {
}, sv = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function ov(u) {
  return !!(u && ht(u.append) && u[V0] === "FormData" && u[Li]);
}
const fv = (u) => {
  const r = new Array(10), c = (o, s) => {
    if (nu(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (lu(o))
        return o;
      if (!("toJSON" in o)) {
        r[s] = o;
        const d = $n(o) ? [] : {};
        return au(o, (h, g) => {
          const p = c(h, s + 1);
          !Fn(p) && (d[g] = p);
        }), r[s] = void 0, d;
      }
    }
    return o;
  };
  return c(u, 0);
}, dv = qt("AsyncFunction"), hv = (u) => u && (nu(u) || ht(u)) && ht(u.then) && ht(u.catch), W0 = ((u, r) => u ? setImmediate : r ? ((c, o) => (rn.addEventListener("message", ({ source: s, data: d }) => {
  s === rn && d === c && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), rn.postMessage(c, "*");
}))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(
  typeof setImmediate == "function",
  ht(rn.postMessage)
), mv = typeof queueMicrotask < "u" ? queueMicrotask.bind(rn) : typeof e0 < "u" && e0.nextTick || W0, yv = (u) => u != null && ht(u[Li]), N = {
  isArray: $n,
  isArrayBuffer: J0,
  isBuffer: lu,
  isFormData: Qp,
  isArrayBufferView: Mp,
  isString: Bp,
  isNumber: X0,
  isBoolean: Up,
  isObject: nu,
  isPlainObject: Oi,
  isEmptyObject: jp,
  isReadableStream: Yp,
  isRequest: Vp,
  isResponse: Jp,
  isHeaders: Xp,
  isUndefined: Fn,
  isDate: Hp,
  isFile: Lp,
  isBlob: _p,
  isRegExp: uv,
  isFunction: ht,
  isStream: qp,
  isURLSearchParams: Gp,
  isTypedArray: ev,
  isFileList: kp,
  forEach: au,
  merge: bs,
  extend: Kp,
  trim: Zp,
  stripBOM: Fp,
  inherits: Wp,
  toFlatObject: Ip,
  kindOf: _i,
  kindOfTest: qt,
  endsWith: $p,
  toArray: Pp,
  forEachEntry: tv,
  matchAll: lv,
  isHTMLForm: nv,
  hasOwnProperty: t0,
  hasOwnProp: t0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: F0,
  freezeMethods: iv,
  toObjectSet: rv,
  toCamelCase: av,
  noop: cv,
  toFiniteNumber: sv,
  findKey: Z0,
  global: rn,
  isContextDefined: K0,
  isSpecCompliantForm: ov,
  toJSONObject: fv,
  isAsyncFn: dv,
  isThenable: hv,
  setImmediate: W0,
  asap: mv,
  isIterable: yv
};
function ie(u, r, c, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), c && (this.config = c), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
}
N.inherits(ie, Error, {
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
      config: N.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const I0 = ie.prototype, $0 = {};
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
  $0[u] = { value: u };
});
Object.defineProperties(ie, $0);
Object.defineProperty(I0, "isAxiosError", { value: !0 });
ie.from = (u, r, c, o, s, d) => {
  const h = Object.create(I0);
  N.toFlatObject(u, h, function(S) {
    return S !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return ie.call(h, g, p, c, o, s), u && h.cause == null && Object.defineProperty(h, "cause", { value: u, configurable: !0 }), h.name = u && u.name || "Error", d && Object.assign(h, d), h;
};
const gv = null;
function Ss(u) {
  return N.isPlainObject(u) || N.isArray(u);
}
function P0(u) {
  return N.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function l0(u, r, c) {
  return u ? u.concat(r).map(function(s, d) {
    return s = P0(s), !c && d ? "[" + s + "]" : s;
  }).join(c ? "." : "") : r;
}
function pv(u) {
  return N.isArray(u) && !u.some(Ss);
}
const vv = N.toFlatObject(N, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function qi(u, r, c) {
  if (!N.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), c = N.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(H, D) {
    return !N.isUndefined(D[H]);
  });
  const o = c.metaTokens, s = c.visitor || S, d = c.dots, h = c.indexes, p = (c.Blob || typeof Blob < "u" && Blob) && N.isSpecCompliantForm(r);
  if (!N.isFunction(s))
    throw new TypeError("visitor must be a function");
  function y(O) {
    if (O === null) return "";
    if (N.isDate(O))
      return O.toISOString();
    if (N.isBoolean(O))
      return O.toString();
    if (!p && N.isBlob(O))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return N.isArrayBuffer(O) || N.isTypedArray(O) ? p && typeof Blob == "function" ? new Blob([O]) : Buffer.from(O) : O;
  }
  function S(O, H, D) {
    let J = O;
    if (O && !D && typeof O == "object") {
      if (N.endsWith(H, "{}"))
        H = o ? H : H.slice(0, -2), O = JSON.stringify(O);
      else if (N.isArray(O) && pv(O) || (N.isFileList(O) || N.endsWith(H, "[]")) && (J = N.toArray(O)))
        return H = P0(H), J.forEach(function(X, ee) {
          !(N.isUndefined(X) || X === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? l0([H], ee, d) : h === null ? H : H + "[]",
            y(X)
          );
        }), !1;
    }
    return Ss(O) ? !0 : (r.append(l0(D, H, d), y(O)), !1);
  }
  const E = [], B = Object.assign(vv, {
    defaultVisitor: S,
    convertValue: y,
    isVisitable: Ss
  });
  function q(O, H) {
    if (!N.isUndefined(O)) {
      if (E.indexOf(O) !== -1)
        throw Error("Circular reference detected in " + H.join("."));
      E.push(O), N.forEach(O, function(J, Y) {
        (!(N.isUndefined(J) || J === null) && s.call(
          r,
          J,
          N.isString(Y) ? Y.trim() : Y,
          H,
          B
        )) === !0 && q(J, H ? H.concat(Y) : [Y]);
      }), E.pop();
    }
  }
  if (!N.isObject(u))
    throw new TypeError("data must be an object");
  return q(u), r;
}
function n0(u) {
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
const em = Ds.prototype;
em.append = function(r, c) {
  this._pairs.push([r, c]);
};
em.toString = function(r) {
  const c = r ? function(o) {
    return r.call(this, o, n0);
  } : n0;
  return this._pairs.map(function(s) {
    return c(s[0]) + "=" + c(s[1]);
  }, "").join("&");
};
function bv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function tm(u, r, c) {
  if (!r)
    return u;
  const o = c && c.encode || bv;
  N.isFunction(c) && (c = {
    serialize: c
  });
  const s = c && c.serialize;
  let d;
  if (s ? d = s(r, c) : d = N.isURLSearchParams(r) ? r.toString() : new Ds(r, c).toString(o), d) {
    const h = u.indexOf("#");
    h !== -1 && (u = u.slice(0, h)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class a0 {
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
    N.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const lm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sv = typeof URLSearchParams < "u" ? URLSearchParams : Ds, Av = typeof FormData < "u" ? FormData : null, Ev = typeof Blob < "u" ? Blob : null, xv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sv,
    FormData: Av,
    Blob: Ev
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ms = typeof window < "u" && typeof document < "u", As = typeof navigator == "object" && navigator || void 0, Rv = Ms && (!As || ["ReactNative", "NativeScript", "NS"].indexOf(As.product) < 0), wv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Tv = Ms && window.location.href || "http://localhost", Cv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ms,
  hasStandardBrowserEnv: Rv,
  hasStandardBrowserWebWorkerEnv: wv,
  navigator: As,
  origin: Tv
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...Cv,
  ...xv
};
function Ov(u, r) {
  return qi(u, new at.classes.URLSearchParams(), {
    visitor: function(c, o, s, d) {
      return at.isNode && N.isBuffer(c) ? (this.append(o, c.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function zv(u) {
  return N.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Nv(u) {
  const r = {}, c = Object.keys(u);
  let o;
  const s = c.length;
  let d;
  for (o = 0; o < s; o++)
    d = c[o], r[d] = u[d];
  return r;
}
function nm(u) {
  function r(c, o, s, d) {
    let h = c[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= c.length;
    return h = !h && N.isArray(s) ? s.length : h, p ? (N.hasOwnProp(s, h) ? s[h] = [s[h], o] : s[h] = o, !g) : ((!s[h] || !N.isObject(s[h])) && (s[h] = []), r(c, o, s[h], d) && N.isArray(s[h]) && (s[h] = Nv(s[h])), !g);
  }
  if (N.isFormData(u) && N.isFunction(u.entries)) {
    const c = {};
    return N.forEachEntry(u, (o, s) => {
      r(zv(o), s, c, 0);
    }), c;
  }
  return null;
}
function Dv(u, r, c) {
  if (N.isString(u))
    try {
      return (r || JSON.parse)(u), N.trim(u);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (c || JSON.stringify)(u);
}
const uu = {
  transitional: lm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, c) {
    const o = c.getContentType() || "", s = o.indexOf("application/json") > -1, d = N.isObject(r);
    if (d && N.isHTMLForm(r) && (r = new FormData(r)), N.isFormData(r))
      return s ? JSON.stringify(nm(r)) : r;
    if (N.isArrayBuffer(r) || N.isBuffer(r) || N.isStream(r) || N.isFile(r) || N.isBlob(r) || N.isReadableStream(r))
      return r;
    if (N.isArrayBufferView(r))
      return r.buffer;
    if (N.isURLSearchParams(r))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Ov(r, this.formSerializer).toString();
      if ((g = N.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return qi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || s ? (c.setContentType("application/json", !1), Dv(r)) : r;
  }],
  transformResponse: [function(r) {
    const c = this.transitional || uu.transitional, o = c && c.forcedJSONParsing, s = this.responseType === "json";
    if (N.isResponse(r) || N.isReadableStream(r))
      return r;
    if (r && N.isString(r) && (o && !this.responseType || s)) {
      const h = !(c && c.silentJSONParsing) && s;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (g) {
        if (h)
          throw g.name === "SyntaxError" ? ie.from(g, ie.ERR_BAD_RESPONSE, this, null, this.response) : g;
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
N.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  uu.headers[u] = {};
});
const Mv = N.toObjectSet([
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
]), Bv = (u) => {
  const r = {};
  let c, o, s;
  return u && u.split(`
`).forEach(function(h) {
    s = h.indexOf(":"), c = h.substring(0, s).trim().toLowerCase(), o = h.substring(s + 1).trim(), !(!c || r[c] && Mv[c]) && (c === "set-cookie" ? r[c] ? r[c].push(o) : r[c] = [o] : r[c] = r[c] ? r[c] + ", " + o : o);
  }), r;
}, u0 = /* @__PURE__ */ Symbol("internals");
function Wa(u) {
  return u && String(u).trim().toLowerCase();
}
function zi(u) {
  return u === !1 || u == null ? u : N.isArray(u) ? u.map(zi) : String(u);
}
function Uv(u) {
  const r = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = c.exec(u); )
    r[o[1]] = o[2];
  return r;
}
const jv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ms(u, r, c, o, s) {
  if (N.isFunction(o))
    return o.call(this, r, c);
  if (s && (r = c), !!N.isString(r)) {
    if (N.isString(o))
      return r.indexOf(o) !== -1;
    if (N.isRegExp(o))
      return o.test(r);
  }
}
function Hv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, c, o) => c.toUpperCase() + o);
}
function Lv(u, r) {
  const c = N.toCamelCase(" " + r);
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
      const S = Wa(p);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const E = N.findKey(s, S);
      (!E || s[E] === void 0 || y === !0 || y === void 0 && s[E] !== !1) && (s[E || p] = zi(g));
    }
    const h = (g, p) => N.forEach(g, (y, S) => d(y, S, p));
    if (N.isPlainObject(r) || r instanceof this.constructor)
      h(r, c);
    else if (N.isString(r) && (r = r.trim()) && !jv(r))
      h(Bv(r), c);
    else if (N.isObject(r) && N.isIterable(r)) {
      let g = {}, p, y;
      for (const S of r) {
        if (!N.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = S[0]] = (p = g[y]) ? N.isArray(p) ? [...p, S[1]] : [p, S[1]] : S[1];
      }
      h(g, c);
    } else
      r != null && d(c, r, o);
    return this;
  }
  get(r, c) {
    if (r = Wa(r), r) {
      const o = N.findKey(this, r);
      if (o) {
        const s = this[o];
        if (!c)
          return s;
        if (c === !0)
          return Uv(s);
        if (N.isFunction(c))
          return c.call(this, s, o);
        if (N.isRegExp(c))
          return c.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (r = Wa(r), r) {
      const o = N.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!c || ms(this, this[o], o, c)));
    }
    return !1;
  }
  delete(r, c) {
    const o = this;
    let s = !1;
    function d(h) {
      if (h = Wa(h), h) {
        const g = N.findKey(o, h);
        g && (!c || ms(o, o[g], g, c)) && (delete o[g], s = !0);
      }
    }
    return N.isArray(r) ? r.forEach(d) : d(r), s;
  }
  clear(r) {
    const c = Object.keys(this);
    let o = c.length, s = !1;
    for (; o--; ) {
      const d = c[o];
      (!r || ms(this, this[d], d, r, !0)) && (delete this[d], s = !0);
    }
    return s;
  }
  normalize(r) {
    const c = this, o = {};
    return N.forEach(this, (s, d) => {
      const h = N.findKey(o, d);
      if (h) {
        c[h] = zi(s), delete c[d];
        return;
      }
      const g = r ? Hv(d) : String(d).trim();
      g !== d && delete c[d], c[g] = zi(s), o[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const c = /* @__PURE__ */ Object.create(null);
    return N.forEach(this, (o, s) => {
      o != null && o !== !1 && (c[s] = r && N.isArray(o) ? o.join(", ") : o);
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
    const o = (this[u0] = this[u0] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function d(h) {
      const g = Wa(h);
      o[g] || (Lv(s, h), o[g] = !0);
    }
    return N.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
N.reduceDescriptors(mt.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(o) {
      this[c] = o;
    }
  };
});
N.freezeMethods(mt);
function ys(u, r) {
  const c = this || uu, o = r || c, s = mt.from(o.headers);
  let d = o.data;
  return N.forEach(u, function(g) {
    d = g.call(c, d, s.normalize(), r ? r.status : void 0);
  }), s.normalize(), d;
}
function am(u) {
  return !!(u && u.__CANCEL__);
}
function Pn(u, r, c) {
  ie.call(this, u ?? "canceled", ie.ERR_CANCELED, r, c), this.name = "CanceledError";
}
N.inherits(Pn, ie, {
  __CANCEL__: !0
});
function um(u, r, c) {
  const o = c.config.validateStatus;
  !c.status || !o || o(c.status) ? u(c) : r(new ie(
    "Request failed with status code " + c.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
function _v(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function kv(u, r) {
  u = u || 10;
  const c = new Array(u), o = new Array(u);
  let s = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), S = o[d];
    h || (h = y), c[s] = p, o[s] = y;
    let E = d, B = 0;
    for (; E !== s; )
      B += c[E++], E = E % u;
    if (s = (s + 1) % u, s === d && (d = (d + 1) % u), y - h < r)
      return;
    const q = S && y - S;
    return q ? Math.round(B * 1e3 / q) : void 0;
  };
}
function qv(u, r) {
  let c = 0, o = 1e3 / r, s, d;
  const h = (y, S = Date.now()) => {
    c = S, s = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const S = Date.now(), E = S - c;
    E >= o ? h(y, S) : (s = y, d || (d = setTimeout(() => {
      d = null, h(s);
    }, o - E)));
  }, () => s && h(s)];
}
const Bi = (u, r, c = 3) => {
  let o = 0;
  const s = kv(50, 250);
  return qv((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - o, y = s(p), S = h <= g;
    o = h;
    const E = {
      loaded: h,
      total: g,
      progress: g ? h / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && S ? (g - h) / y : void 0,
      event: d,
      lengthComputable: g != null,
      [r ? "download" : "upload"]: !0
    };
    u(E);
  }, c);
}, i0 = (u, r) => {
  const c = u != null;
  return [(o) => r[0]({
    lengthComputable: c,
    total: u,
    loaded: o
  }), r[1]];
}, r0 = (u) => (...r) => N.asap(() => u(...r)), Qv = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (c) => (c = new URL(c, at.origin), u.protocol === c.protocol && u.host === c.host && (r || u.port === c.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Gv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, c, o, s, d, h) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      N.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`), N.isString(o) && g.push(`path=${o}`), N.isString(s) && g.push(`domain=${s}`), d === !0 && g.push("secure"), N.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function Yv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Vv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function im(u, r, c) {
  let o = !Yv(r);
  return u && (o || c == !1) ? Vv(u, r) : r;
}
const c0 = (u) => u instanceof mt ? { ...u } : u;
function sn(u, r) {
  r = r || {};
  const c = {};
  function o(y, S, E, B) {
    return N.isPlainObject(y) && N.isPlainObject(S) ? N.merge.call({ caseless: B }, y, S) : N.isPlainObject(S) ? N.merge({}, S) : N.isArray(S) ? S.slice() : S;
  }
  function s(y, S, E, B) {
    if (N.isUndefined(S)) {
      if (!N.isUndefined(y))
        return o(void 0, y, E, B);
    } else return o(y, S, E, B);
  }
  function d(y, S) {
    if (!N.isUndefined(S))
      return o(void 0, S);
  }
  function h(y, S) {
    if (N.isUndefined(S)) {
      if (!N.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, S);
  }
  function g(y, S, E) {
    if (E in r)
      return o(y, S);
    if (E in u)
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
    headers: (y, S, E) => s(c0(y), c0(S), E, !0)
  };
  return N.forEach(Object.keys({ ...u, ...r }), function(S) {
    const E = p[S] || s, B = E(u[S], r[S], S);
    N.isUndefined(B) && E !== g || (c[S] = B);
  }), c;
}
const rm = (u) => {
  const r = sn({}, u);
  let { data: c, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = mt.from(h), r.url = tm(im(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), N.isFormData(c)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (N.isFunction(c.getHeaders)) {
      const p = c.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([S, E]) => {
        y.includes(S.toLowerCase()) && h.set(S, E);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (o && N.isFunction(o) && (o = o(r)), o || o !== !1 && Qv(r.url))) {
    const p = s && d && Gv.read(d);
    p && h.set(s, p);
  }
  return r;
}, Jv = typeof XMLHttpRequest < "u", Xv = Jv && function(u) {
  return new Promise(function(c, o) {
    const s = rm(u);
    let d = s.data;
    const h = mt.from(s.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = s, S, E, B, q, O;
    function H() {
      q && q(), O && O(), s.cancelToken && s.cancelToken.unsubscribe(S), s.signal && s.signal.removeEventListener("abort", S);
    }
    let D = new XMLHttpRequest();
    D.open(s.method.toUpperCase(), s.url, !0), D.timeout = s.timeout;
    function J() {
      if (!D)
        return;
      const X = mt.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), K = {
        data: !g || g === "text" || g === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: X,
        config: u,
        request: D
      };
      um(function(ne) {
        c(ne), H();
      }, function(ne) {
        o(ne), H();
      }, K), D = null;
    }
    "onloadend" in D ? D.onloadend = J : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(J);
    }, D.onabort = function() {
      D && (o(new ie("Request aborted", ie.ECONNABORTED, u, D)), D = null);
    }, D.onerror = function(ee) {
      const K = ee && ee.message ? ee.message : "Network Error", le = new ie(K, ie.ERR_NETWORK, u, D);
      le.event = ee || null, o(le), D = null;
    }, D.ontimeout = function() {
      let ee = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const K = s.transitional || lm;
      s.timeoutErrorMessage && (ee = s.timeoutErrorMessage), o(new ie(
        ee,
        K.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        u,
        D
      )), D = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in D && N.forEach(h.toJSON(), function(ee, K) {
      D.setRequestHeader(K, ee);
    }), N.isUndefined(s.withCredentials) || (D.withCredentials = !!s.withCredentials), g && g !== "json" && (D.responseType = s.responseType), y && ([B, O] = Bi(y, !0), D.addEventListener("progress", B)), p && D.upload && ([E, q] = Bi(p), D.upload.addEventListener("progress", E), D.upload.addEventListener("loadend", q)), (s.cancelToken || s.signal) && (S = (X) => {
      D && (o(!X || X.type ? new Pn(null, u, D) : X), D.abort(), D = null);
    }, s.cancelToken && s.cancelToken.subscribe(S), s.signal && (s.signal.aborted ? S() : s.signal.addEventListener("abort", S)));
    const Y = _v(s.url);
    if (Y && at.protocols.indexOf(Y) === -1) {
      o(new ie("Unsupported protocol " + Y + ":", ie.ERR_BAD_REQUEST, u));
      return;
    }
    D.send(d || null);
  });
}, Zv = (u, r) => {
  const { length: c } = u = u ? u.filter(Boolean) : [];
  if (r || c) {
    let o = new AbortController(), s;
    const d = function(y) {
      if (!s) {
        s = !0, g();
        const S = y instanceof Error ? y : this.reason;
        o.abort(S instanceof ie ? S : new Pn(S instanceof Error ? S.message : S));
      }
    };
    let h = r && setTimeout(() => {
      h = null, d(new ie(`timeout ${r} of ms exceeded`, ie.ETIMEDOUT));
    }, r);
    const g = () => {
      u && (h && clearTimeout(h), h = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = o;
    return p.unsubscribe = () => N.asap(g), p;
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
}, Fv = async function* (u, r) {
  for await (const c of Wv(u))
    yield* Kv(c, r);
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
}, s0 = (u, r, c, o) => {
  const s = Fv(u, r);
  let d = 0, h, g = (p) => {
    h || (h = !0, o && o(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: S } = await s.next();
        if (y) {
          g(), p.close();
          return;
        }
        let E = S.byteLength;
        if (c) {
          let B = d += E;
          c(B);
        }
        p.enqueue(new Uint8Array(S));
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
}, o0 = 64 * 1024, { isFunction: wi } = N, Iv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(N.global), {
  ReadableStream: f0,
  TextEncoder: d0
} = N.global, h0 = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, $v = (u) => {
  u = N.merge.call({
    skipUndefined: !0
  }, Iv, u);
  const { fetch: r, Request: c, Response: o } = u, s = r ? wi(r) : typeof fetch == "function", d = wi(c), h = wi(o);
  if (!s)
    return !1;
  const g = s && wi(f0), p = s && (typeof d0 == "function" ? /* @__PURE__ */ ((O) => (H) => O.encode(H))(new d0()) : async (O) => new Uint8Array(await new c(O).arrayBuffer())), y = d && g && h0(() => {
    let O = !1;
    const H = new c(at.origin, {
      body: new f0(),
      method: "POST",
      get duplex() {
        return O = !0, "half";
      }
    }).headers.has("Content-Type");
    return O && !H;
  }), S = h && g && h0(() => N.isReadableStream(new o("").body)), E = {
    stream: S && ((O) => O.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((O) => {
    !E[O] && (E[O] = (H, D) => {
      let J = H && H[O];
      if (J)
        return J.call(H);
      throw new ie(`Response type '${O}' is not supported`, ie.ERR_NOT_SUPPORT, D);
    });
  });
  const B = async (O) => {
    if (O == null)
      return 0;
    if (N.isBlob(O))
      return O.size;
    if (N.isSpecCompliantForm(O))
      return (await new c(at.origin, {
        method: "POST",
        body: O
      }).arrayBuffer()).byteLength;
    if (N.isArrayBufferView(O) || N.isArrayBuffer(O))
      return O.byteLength;
    if (N.isURLSearchParams(O) && (O = O + ""), N.isString(O))
      return (await p(O)).byteLength;
  }, q = async (O, H) => {
    const D = N.toFiniteNumber(O.getContentLength());
    return D ?? B(H);
  };
  return async (O) => {
    let {
      url: H,
      method: D,
      data: J,
      signal: Y,
      cancelToken: X,
      timeout: ee,
      onDownloadProgress: K,
      onUploadProgress: le,
      responseType: ne,
      headers: $,
      withCredentials: ge = "same-origin",
      fetchOptions: pe
    } = rm(O), Ye = r || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let Oe = Zv([Y, X && X.toAbortSignal()], ee), qe = null;
    const De = Oe && Oe.unsubscribe && (() => {
      Oe.unsubscribe();
    });
    let Ve;
    try {
      if (le && y && D !== "get" && D !== "head" && (Ve = await q($, J)) !== 0) {
        let ze = new c(H, {
          method: "POST",
          body: J,
          duplex: "half"
        }), v;
        if (N.isFormData(J) && (v = ze.headers.get("content-type")) && $.setContentType(v), ze.body) {
          const [U, V] = i0(
            Ve,
            Bi(r0(le))
          );
          J = s0(ze.body, o0, U, V);
        }
      }
      N.isString(ge) || (ge = ge ? "include" : "omit");
      const Q = d && "credentials" in c.prototype, k = {
        ...pe,
        signal: Oe,
        method: D.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: J,
        duplex: "half",
        credentials: Q ? ge : void 0
      };
      qe = d && new c(H, k);
      let G = await (d ? Ye(qe, pe) : Ye(H, k));
      const re = S && (ne === "stream" || ne === "response");
      if (S && (K || re && De)) {
        const ze = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          ze[Z] = G[Z];
        });
        const v = N.toFiniteNumber(G.headers.get("content-length")), [U, V] = K && i0(
          v,
          Bi(r0(K), !0)
        ) || [];
        G = new o(
          s0(G.body, o0, U, () => {
            V && V(), De && De();
          }),
          ze
        );
      }
      ne = ne || "text";
      let Se = await E[N.findKey(E, ne) || "text"](G, O);
      return !re && De && De(), await new Promise((ze, v) => {
        um(ze, v, {
          data: Se,
          headers: mt.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: O,
          request: qe
        });
      });
    } catch (Q) {
      throw De && De(), Q && Q.name === "TypeError" && /Load failed|fetch/i.test(Q.message) ? Object.assign(
        new ie("Network Error", ie.ERR_NETWORK, O, qe),
        {
          cause: Q.cause || Q
        }
      ) : ie.from(Q, Q && Q.code, O, qe);
    }
  };
}, Pv = /* @__PURE__ */ new Map(), cm = (u) => {
  let r = u && u.env || {};
  const { fetch: c, Request: o, Response: s } = r, d = [
    o,
    s,
    c
  ];
  let h = d.length, g = h, p, y, S = Pv;
  for (; g--; )
    p = d[g], y = S.get(p), y === void 0 && S.set(p, y = g ? /* @__PURE__ */ new Map() : $v(r)), S = y;
  return y;
};
cm();
const Bs = {
  http: gv,
  xhr: Xv,
  fetch: {
    get: cm
  }
};
N.forEach(Bs, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const m0 = (u) => `- ${u}`, eb = (u) => N.isFunction(u) || u === null || u === !1;
function tb(u, r) {
  u = N.isArray(u) ? u : [u];
  const { length: c } = u;
  let o, s;
  const d = {};
  for (let h = 0; h < c; h++) {
    o = u[h];
    let g;
    if (s = o, !eb(o) && (s = Bs[(g = String(o)).toLowerCase()], s === void 0))
      throw new ie(`Unknown adapter '${g}'`);
    if (s && (N.isFunction(s) || (s = s.get(r))))
      break;
    d[g || "#" + h] = s;
  }
  if (!s) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = c ? h.length > 1 ? `since :
` + h.map(m0).join(`
`) : " " + m0(h[0]) : "as no adapter specified";
    throw new ie(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
}
const sm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: tb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Bs
};
function gs(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Pn(null, u);
}
function y0(u) {
  return gs(u), u.headers = mt.from(u.headers), u.data = ys.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), sm.getAdapter(u.adapter || uu.adapter, u)(u).then(function(o) {
    return gs(u), o.data = ys.call(
      u,
      u.transformResponse,
      o
    ), o.headers = mt.from(o.headers), o;
  }, function(o) {
    return am(o) || (gs(u), o && o.response && (o.response.data = ys.call(
      u,
      u.transformResponse,
      o.response
    ), o.response.headers = mt.from(o.response.headers))), Promise.reject(o);
  });
}
const om = "1.13.2", Qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Qi[u] = function(o) {
    return typeof o === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const g0 = {};
Qi.transitional = function(r, c, o) {
  function s(d, h) {
    return "[Axios v" + om + "] Transitional option '" + d + "'" + h + (o ? ". " + o : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new ie(
        s(h, " has been removed" + (c ? " in " + c : "")),
        ie.ERR_DEPRECATED
      );
    return c && !g0[h] && (g0[h] = !0, console.warn(
      s(
        h,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
Qi.spelling = function(r) {
  return (c, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function lb(u, r, c) {
  if (typeof u != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(u);
  let s = o.length;
  for (; s-- > 0; ) {
    const d = o[s], h = r[d];
    if (h) {
      const g = u[d], p = g === void 0 || h(g, d, u);
      if (p !== !0)
        throw new ie("option " + d + " must be " + p, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new ie("Unknown option " + d, ie.ERR_BAD_OPTION);
  }
}
const Ni = {
  assertOptions: lb,
  validators: Qi
}, Zt = Ni.validators;
let cn = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new a0(),
      response: new a0()
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
    o !== void 0 && Ni.assertOptions(o, {
      silentJSONParsing: Zt.transitional(Zt.boolean),
      forcedJSONParsing: Zt.transitional(Zt.boolean),
      clarifyTimeoutError: Zt.transitional(Zt.boolean)
    }, !1), s != null && (N.isFunction(s) ? c.paramsSerializer = {
      serialize: s
    } : Ni.assertOptions(s, {
      encode: Zt.function,
      serialize: Zt.function
    }, !0)), c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = !0), Ni.assertOptions(c, {
      baseUrl: Zt.spelling("baseURL"),
      withXsrfToken: Zt.spelling("withXSRFToken")
    }, !0), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let h = d && N.merge(
      d.common,
      d[c.method]
    );
    d && N.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (O) => {
        delete d[O];
      }
    ), c.headers = mt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(H) {
      typeof H.runWhen == "function" && H.runWhen(c) === !1 || (p = p && H.synchronous, g.unshift(H.fulfilled, H.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(H) {
      y.push(H.fulfilled, H.rejected);
    });
    let S, E = 0, B;
    if (!p) {
      const O = [y0.bind(this), void 0];
      for (O.unshift(...g), O.push(...y), B = O.length, S = Promise.resolve(c); E < B; )
        S = S.then(O[E++], O[E++]);
      return S;
    }
    B = g.length;
    let q = c;
    for (; E < B; ) {
      const O = g[E++], H = g[E++];
      try {
        q = O(q);
      } catch (D) {
        H.call(this, D);
        break;
      }
    }
    try {
      S = y0.call(this, q);
    } catch (O) {
      return Promise.reject(O);
    }
    for (E = 0, B = y.length; E < B; )
      S = S.then(y[E++], y[E++]);
    return S;
  }
  getUri(r) {
    r = sn(this.defaults, r);
    const c = im(r.baseURL, r.url, r.allowAbsoluteUrls);
    return tm(c, r.params, r.paramsSerializer);
  }
};
N.forEach(["delete", "get", "head", "options"], function(r) {
  cn.prototype[r] = function(c, o) {
    return this.request(sn(o || {}, {
      method: r,
      url: c,
      data: (o || {}).data
    }));
  };
});
N.forEach(["post", "put", "patch"], function(r) {
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
let nb = class fm {
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
      token: new fm(function(s) {
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
  return N.isObject(u) && u.isAxiosError === !0;
}
const Es = {
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
Object.entries(Es).forEach(([u, r]) => {
  Es[r] = u;
});
function dm(u) {
  const r = new cn(u), c = Y0(cn.prototype.request, r);
  return N.extend(c, cn.prototype, r, { allOwnKeys: !0 }), N.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(s) {
    return dm(sn(u, s));
  }, c;
}
const Ue = dm(uu);
Ue.Axios = cn;
Ue.CanceledError = Pn;
Ue.CancelToken = nb;
Ue.isCancel = am;
Ue.VERSION = om;
Ue.toFormData = qi;
Ue.AxiosError = ie;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(r) {
  return Promise.all(r);
};
Ue.spread = ab;
Ue.isAxiosError = ub;
Ue.mergeConfig = sn;
Ue.AxiosHeaders = mt;
Ue.formToJSON = (u) => nm(N.isHTMLForm(u) ? new FormData(u) : u);
Ue.getAdapter = sm.getAdapter;
Ue.HttpStatusCode = Es;
Ue.default = Ue;
const {
  Axios: Ab,
  AxiosError: Eb,
  CanceledError: xb,
  isCancel: Rb,
  CancelToken: wb,
  VERSION: Tb,
  all: Cb,
  Cancel: Ob,
  isAxiosError: zb,
  spread: Nb,
  toFormData: Db,
  AxiosHeaders: Mb,
  HttpStatusCode: Bb,
  formToJSON: Ub,
  getAdapter: jb,
  mergeConfig: Hb
} = Ue, ib = "https://dev-demo-env.colibrilearning.com", iu = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${ib}${r}`;
}, rb = async (u, r) => {
  const c = iu("api/auth"), o = { username: u, password: r };
  try {
    return (await Ue.post(c, o)).data;
  } catch (s) {
    throw console.error("Error during auth login:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 401 ? new Error("Invalid credentials") : s.message ? new Error(s.message) : new Error("Authentication failed");
  }
}, cb = async (u) => {
  const r = iu("api/register");
  try {
    return (await Ue.post(r, u)).data;
  } catch (c) {
    throw console.error("Error during registration:", c), c.response?.data?.details?.errorMessage ? new Error(c.response.data.details.errorMessage) : c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.details ? new Error(c.response.data.details) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 500 ? new Error("Registration failed. Please try again.") : c.message ? new Error(c.message) : new Error("Registration failed");
  }
}, Us = async (u) => {
  const r = iu("api/check-email");
  try {
    return (await Ue.post(r, { email: u })).data;
  } catch (c) {
    return console.error("Error checking email:", c), c.response?.data ? c.response.data : { exists: !1 };
  }
}, p0 = async (u) => {
  const r = iu("api/forgot-password"), c = { email: u };
  try {
    return (await Ue.post(r, c)).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 404 ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error("Failed to send password reset link");
  }
}, sb = async (u) => {
  const r = iu("api/refresh"), c = { refresh_token: u };
  try {
    return (await Ue.post(r, c)).data;
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
};
function hm(u, r) {
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
const ob = (u) => {
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
}, mm = async (u, r, c = !0) => {
  const { tokens: o } = await rb(u, r);
  if (o.access_token) {
    const s = G0(o.access_token), d = (s.exp || 0) - Math.floor(Date.now() / 1e3);
    Mi("access_token", o.access_token, d, !0), s.x_credentials && Mi("X-Credential", s.x_credentials, d, !1), localStorage.setItem("user_state", "authenticated"), c && o.refresh_token ? (localStorage.setItem("refresh_token", o.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return o;
}, db = ({
  type: u,
  message: r,
  duration: c = 5e3,
  onClose: o,
  className: s = ""
}) => {
  const [d, h] = w.useState(!1), [g, p] = w.useState(!1);
  w.useEffect(() => {
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
  }, S = () => {
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
  }, E = () => {
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
  }, B = S();
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${s}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ x.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${B.bg}`, children: [
        /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${B.icon}`, children: E() }),
        /* @__PURE__ */ x.jsx("div", { className: `ml-3! flex-1! ${B.text}`, children: /* @__PURE__ */ x.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${B.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ x.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, ym = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAWf0AAFn9AFjKaEnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XmcXXV9//HXuTMTSAKyLyIgQkErBaniwiISMhsBanFJEUFsVayUWqvWrVUjtRWtUrWKgqVW6xqwimDIzARHkQQUEBQBZYf+AFmysBjITOae3x+TkEzIMsu99/M957yejwcPQB/kvrnG+bzP52wgSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSdKWZdEBJE1QHzOpsRMj7EwbuwA7ATtRZycydiJjGjlbATPW/BPbkNNBRgZsv+Y/W/+/XwWsXPPXj5Ozmow68OjT/33GSuqMUGMpsJR8zZ/rPEIHS1nFw8zhsWb/q0tqHAuAlIpB2nmKPWlnH/I1f8DzyNiTnJ3J1gx62Do26CYNk7OUbE05gPuAu8m5m4y7gbtYzb3MYVVoSkmABUBqrT5m0sYLqfMCeHrArx32ewHtkfFaIAfuB+5a88doQYDbmcavmcWKyHBSlVgApGbpZw9yXkLGC4EDgZcAzwfaYoMl7QFybiLjZjKuo85NTOMmZvFUdDCpbCwA0lTNZxo78hLqvJiMg8k5GPgTYJvoaCUxBNxEzo3UuJERrmMrrmEWT0QHk4rMAiBN1AKexTRexghHAkeQcQQwPTpWxYwAvyPjSmAxdX5GD3dFh5KKxAIgbUk/ewBHwJqBD38K1EIzaWMegDWFIOM6duDnHMpwdCgpVRYAaUOL2I0ResnoBY4Bdo2OpEl5jIwrqHMZbSykkzujA0kpsQBI82ljOw4hoxM4ATgMj/DL6E4yFpGziA4u8xoCVZ0FQNXUx65kvIrRgX88sENwIrXWk+QsfroQ9HBddCCp1SwAqo7L2Y8R/gJ4HXAI/v7XWjl3kHERdebTyy+j40it4A9AlVsfe5HxGuD1wOH4e15bdg9wMRkX0sWV0WGkZvGHocpnAXvSzmtx6Gvq7gLmU+PrdHJzdBipkfzBqHJYwC608QYy5uLQV3PcSM584Js+c0Bl4A9JFdc8ahzJMdR5E6Pn9X0Yj1qhDlxFztfZlv/hcJ6MDiRNhgVAxTPI7gxzGjlvI2O/6DiqtOVkXAh8gS5ujA4jTYQFQMWw7mj/dODPgY7oSNIGriPnfEZPEfwhOoy0JRYApe1ynsNq3kbGW4A9o+NI47CcnG+Qcx693BQdRtoUC4DStIiDyfkbct4EbB0dR5qkxeR8km4uJSOPDiOtzwKgtAxwJPB+co7D358qj1+Rcy4jfI05rIoOI4E/YJWC+UxjB04i573AQdFxpKbJ+T1wHsN8juNZHh1H1WYBUJwFPIt2/hJ4L57fV5VkPE7OV2njHGZzT3QcVZMFQK03yM6s5n3kvAPYJjqOFGgY+BY1zvJ1xWo1C4Ba52K2ZTpnAB8EtouOIyVkGPgObXyM2dwRHUbVYAFQ8w2yDcP8DfABYPvoOFLChsn4KjXOYjb3RYdRuVkA1Dx9zCTjrYwe8e8WHUcqkCEy/psR5tHLA9FhVE4WADXefKaxHW8mYx7w7Og4UoH9AbiAGv9KJw9Gh1G5WADUODkZA5wCfAJ4TnQcqUQeA/6F1XzO5wioUSwAaoxFvJQ6n2X0VbySmuNeMj5MF1+PDqLiswBoavrZg4yPkvNWoBYdR6qEjEFG+Ht6+VV0FBWXBUCTs4TpPME7yfhHcraNjiNVUB34JjnvpYeHosOoeCwAmrg+TiDj88A+0VEksQI4m9V81usDNBEWAI3fQl5EjS8CR0RHkfQMvyXnnfQwEB1ExWAB0JYNsjVDfICMDwLTouNI2qwL6eAMZvFIdBClzQKgzRvgSHLOB/44OoqkcVtGzgfp4fzoIEqXBUAbN8B25JwFnIlX90tFtYCMd9DFvdFBlB4LgJ6pj+PJOBfYKzqKpClbCZzFCj7NXEaiwygdFgCts4jdqPNvwKnRUSQ1WM5V5LyNXm6KjqI0WAA0qp9Tgc8BO0RHkdQ0Q2ScxXLOdhsgC0DVLeBZtPNF4JToKJJa5mraOIXZ3BEdRHEsAFU2wCvI+Sawb3QUSS33GHAm3fxPdBDFsABU0SDtDPFPZPwT0BYdR1KoCxni7RzP8uggai0LQNX08TwyvoFv7ZO0zr3knEoPV0QHUetYAKpkgDeR80Vgm+gokpIzAnyaHfkwhzIcHUbNZwGogkG2Z5gLgNdER5GUvKsZ4Q0cy93RQdRcFoCyW8TBjPC/ZOwXHUVSYSyjxhvpZGF0EDWPF4CVWT9vIOdiMnaLjiKpUKaT80ZOZTr78WN+Qh4dSI3nBqCMBmlnmI8D74+OIqnwfkQHpzCLFdFB1FgWgLJZwC608x3gmOgokkrjdjJeQxc3RgdR4/iWtzLp5wjauQGHv6TG+iNyfk4fp0UHUeO4ASiLPk4n4z+AadFRJJVYxvnswJneKlh8FoCiu5YOlnEe8JfRUSRVRMYgq3itTw8sNgtAkV3MtmzNfDJ6o6NIqpzbgTl0c1t0EE2OBaCoLuc5jHApcEh0FEmVtZSMP6eLK6ODaOK8CLCIFvIiRrgah7+kWDuRM0AfJ0UH0cRZAIpmEb208TNgz+gokgRsTca36GNedBBNjKcAimT0Sv8vAu3RUSTpGXK+wjTOYBaro6NoyywARZCT0c9HyfhodBRJ2oI+VjOXOTwWHUSbZwFI3XymsT3fxjf5SSqOa+ngWGbxSHQQbZoFIGWXMINpfM/b/CQV0C200cVs7osOoo2zAKSqj5lkXAzMjo4iSZN0FzU66eTO6CB6JgtAigbZniEWkHFYdBRJmqJ7gU4fGJQeC0Bq+tiVjD68x19SeTxIjW46+XV0EK3jcwBSMsjuZFyOw19SuexGnZ/Qx8ujg2gdNwCpuJznMsIi4I+io0hSkzwKHEc3i6ODyA1AGhZxACP8DIe/pHLbDuijj2Oig8gNQLwB9ibnCuC50VEkqUVWknMsPVwRHaTKLACRRt/odwWwb3QUSWqxx9bcInhNdJCqsgBEWcAutPMT4IXRUSQpyAoyjqGL66ODVJEFIMIA2wE/JufF0VEkKdhDZBxNF7dEB6kaLwJstT5mknOpw1+SANiVnH76eF50kKqxALTSEqaTcSlwZHQUSUrInsAA/ewRHaRKLACtMp9pPMGFwNHRUSQpORn7AYMsYrfoKFVhAWiF+bSteaXvcdFRJClhB5CzgIvZNjpIFVgAWmF7zgFeEx1DkpKX82KmcyGDtEdHKTsLQLP183fAO6NjSFKB9DDMl6NDlJ23ATbTAMeRczHQFh1FkgroA3TzyegQZWUBaJY+XkLGT4GZ0VEkqaByck6lh29GBykjC0AzXMY+1LiKjN2jo0hSwT0FdPoGwcazADTaAp5FO1cCB0VHkaSSWEqNw+nk1uggZeJFgI10LR208T0c/pLUSDtR5zL62DU6SJlYABppGeeT0RkdQ5JKaF8yvscCtooOUhYWgEbp453Am6NjSFKJHUk7n4sOURZeA9AIiziMOj8BpkVHkaTSy3krPVwQHaPoLABTNcjuDHMd+BILSWqRp6hxFJ1cEx2kyDwFMBXX0sFq5uPwl6RW2po6F7GAXaKDFJkFYCqWcQ45r4yOIUkVtDftfJv5Pml1siwAkzXAycCZ0TEkqcJmsz3/HB2iqLwGYDIWcTB1rgJmREeRpIrLyZlLDxdFBykaC8BEXcoOdHANGftFR5EkAfAENV5OJzdHBykSTwFMVAdfdfhLUlK2oc53GGTr6CBFYgGYiH7eTsaro2NIkp7hIIY5OzpEkXgKYLwW8kfUuB7YJjqKJGmjcjJOoIsfRQcpAgvAeFxLB8u4EnhZdBRJ0mY9RI2D6eTB6CCp8xTAeCzjn3H4S1IR7Eqdr5J7gLslPkBhSxbySjLOx7IkSUWxP3fxIP/DtdFBUmZD2pxBtmeYXwF7R0eRJE3IU2S8jC5ujA6SKo9qN2eYL+Hwl6Qi2pqcb3lr4KZZADalj9OAk6JjSJIm7U8Y8lHBm+IpgI1ZyLOpcROwQ3QUSdKU1IGj6GZxdJDUuAHYmBpfxOEvSWVQA/6TBWwVHSQ1FoAN9fE64MToGJKkhnkBHXwgOkRqPAWwvgG2I+cm4DnRUSRJDTVEnRfTy03RQVLhBmB9OZ/B4S9JZTSNGhcwz7m3ll/EWv28Cvir6BiSpKZ5OYfzjugQqfAUAMASpvMEvwb+KDqKJKmJMh6nzoH08H/RUaK5AQB4gnk4/CWp/HK2JePL0TFS4AZgIS+ixjVAR3QUSVKL5JxED9+NjhGp2huAnGzNPf8Of0mqkozPsYBnRceIVO0CMMApwBHRMSRJLbcb7dV+NkB1TwFcwgy24hZ82Y8kVdUQdQ6kl9ujg0So7gZgaz6Iw1+SqmwaGWdHh4hSzQ1AH3uR8VtgRnQUSVKwnG56GIiO0WrV3ABkfBqHvyQJIOPfGaQ9OkarVa8A9HE48ProGJKkZBzIUPWeBFutUwDzqHE4VwMvjY4iSUrKw3RwALNYER2kVaq1ATiMN+PwlyQ90y4M8+HoEK1UnQ3A6G1/twPPjo4iSUrSEG28kNncER2kFaqzAdiKM3H4S5I2bRoj1dkCVGMDMMg2DHMHsGt0FElS0kbIOIgubokO0mzV2AAM8S4c/pKkLWsj5yPRIVqh/BuAAbYj505gx+gokqRCqFPnxfTyq+ggzVT+DUDOe3D4S5LGr0at/FuAcm8AFrETde6Ear/yUZI0YTk1Xk4n10QHaZZybwDqvA+HvyRp4rKyXwtQ3g3AAnahnTuBbaKjSJIKKuMwurg6OkYzlHcD0MaHcPhLkqYi52PREZqlnBuA0XP/9wAzo6NIkgqupFuAcm4Acs7E4S9JaoScv4+O0Azl2wAsYCvauJuM3aOjSJJKYYQ2nl+2dwSUbwPQxmkOf0lSA7UxwjujQzRauTYAORkD3AT8cXQUSVKprKTG3nSyNDpIo5RrAzDACTj8JUmNN4MRTo8O0UjlKgDwnugAkqSSyvg7Btk6OkajlKcA9HMocFR0DElSae3Gat4QHaJRylMAMt4bHUGSVHI57yYvx/VzpfiX4HKeywi3A+3RUSRJJZczhx4ui44xVeXYAIzwdhz+kqRWqHFGdIRGKP4GYJB2hrkH2CM6iiSpEkbI2Jcu7o0OMhXF3wAMcwIOf0lS67SRc1p0iKkqfgGAt0UHkCRVztuYT1t0iKkodgFYwJ5Ad3QMSVLl7MUOdEaHmIpiF4A23grFbmCSpILKeWt0hKko7kWA82lje+4C9oqOIqmyHgRuA+4nYwV1RqjRRs4OwHOA/YFdQhOqmYapsRedPBgdZDKKe+vc9vTg8JfUWkuBi4DL6eBnzOL3W/wn+tmDnKPI6AReA+zQ5IxqnQ7qnAZ8KjrIZBR3AzDA98n58+gYkiogY5Ccz7Ijl3Eow5P+deYzje05Dng3cGTD8inSrXTxAjLy6CATVcwCsJBnU+NeirzBkFQEi6nzbnr5RcN/5X6OAM4BXtbwX1utdjTd/DQ6xEQV8yLAGifj8JfUPCvIOI0uXtmU4Q/QzWKWcBgZp5PxeFM+Q61SyGcCFHMD0M8vgJdGx5BUSlczwhs4lrtb9on97E/Gd8h5ccs+U420nBXszlyGooNMRPE2AIvYFzg0OoakEsr4AR3MaunwB+jmNoY5nJzvtfRz1Sg7sF3xnklTvAJQ5/UUdXMhKWXnsZjXMounQj59DquYxknkfD3k8zU1GX8RHWGiijdI+7keOCQ6hqQSyfkK3bw9iSu5R59xMp/RWwZVFBmPM5PdOJwno6OMV7E2AP3sj8NfUiNlnJvM8AeYywjbcAoZv4yOognI2ZbH6YmOMRHFKgBwUnQASSWS8xU6OTOZ4b/W4TxJjbnAY9FRNAEFOw1QtALw+ugAkkoitSP/Dc3mDuA90TE0IcdzCTOiQ4xXcQpAHy8ADoqOIakEUj3y39AS/gv4eXQMjds2bMVx0SHGqzgFwPW/pEZI/ch/ffOok/He6BiakLnRAcarOAUg43XRESQVXMa5hTjyX18XV5Lxs+gYGrfj6GNmdIjxKEYBuIx9gAOjY0gqsCIO/7XqnBMdQeM2nRpHR4cYj2IUgDZ6oyNIKrCinPPflJ34EaOvIlYR5MWYWcUoAAX5MiUlqEjn/Ddl9BXE34+OoXHKOTY6wnikXwDmM40ax0THkFRART/yX1/O5dERNE4Z+615cF3S0i8A23EkOdtGx5BUMGU48l9fXrz3zVdaAbYA6RcA0v8SJSWmTEf+a/XyAPBQdAyNU5b+qev0C0BmAZA0ASm92KfxbosOoHE7OvWnAqZdAPrYC2//kzReZVv7P9O90QE0btOZzlHRITYn7QLg+l/SeJVx7b+hjMejI2gC6mmfBki7AGTFerWipCDlP/IfVWdldARNSNIHsekWgHnUwNv/JG1BkZ/wN1EZW0dH0IQcwAB7R4fYlHQLwBEcCGwfHUNSwqo0/AEyb4kunJwjoiNsSroFIOEvTVICqnDOf0M5e0VH0IQlO8vSLQAJf2mSgpX7Vr/NSf7pcnqGZGdZygXg8OgAkhJUlQv+NrSAXYDdo2Nowg7i4jRP3aRZAAbZHdg3OoakxFRx7b9WB0cBWXQMTVgbW/OK6BAbk2YBWJ3uykRSkKoe+a9VZ3Z0BE1akjMtzQJQ58joCJISUuUjf4D5tJHxmugYmjQLwLhlnv+XtEbVj/wBdqQL2C06hiapxssZpD06xobSKwBLmA4cEh1DUgKqfuS/1gjviY6gKcjZllUcHB1jQ+kVgCd4GTAtOoakYB75j1rIi8nojI6hKWpL7zRAegUg52XRESQF88h/nRqfiY6gBqhzaHSEDaVXAOBPogNICuSR/zp9nAQcHR1DDZBxUHSEDaVXALL0zpNIahGP/NdZwJ5k/Ed0DDXMC7mWjugQ60urAIxeJfnH0TEkBfDIf51r6aCdbwM7R0dRw2zFIxwQHWJ9aRWAIV4AbBUdQ1KLeeS/Tk7GMr4CPg+ldBI7DZBWAfD8v1Q9HvmPNcC/AadFx1ATWAA2w/P/UrV45D9WHx8H7/kvrcRmXFoFgLS+HElNVN1X+m5cHx8n4x+jY6iJ8rRmnAVAUus5/Mdy+FfFXgyyfXSItdIpAKNfyp7RMSQ1mcN/LId/lWSsSuc6gHQKwBAH47uupXJz+I/l8K+ehC4ETKcA1Hh+dARJTeTwH8vhX01ZOrMunQKQs090BElN4vAfy+FfZftEB1grnQIAz4sOIKkJHP5jOfyrLplZl04BcAMglY/DfyyHv7J0Zl06BSChViSpARz+Yzn8BZCzLYvYKToGpFIAljCdjN2iY0hqEIf/WA5/ra+exgFvGgXgcZ6LtwBK5eDwH8vhrw0lcso7jQLg+l8qB4f/WA5/bVwSM88CIKkxHP5jOfy1KTU3AOsk8mVImiSH/1gOf21OnsZBbxoFIJHzIZImweE/lsNfW7ZPdACA9ugAAOTs6SWAWs995PyUjOvIuY2cO2nnSVazgjozmMYMcvYA9qfOC8l4JXAI0Bacu3oyzqWLMx3+a/RzNvD+6BhK3l7RASCVK+/7uRXYPzqGQt1DzjeA79DDbyb8T1/KDnRwIhknA8eQyu/tMss4l06H/9Mc/pqIDqYzi6ciI6TxQ7KfpcCO0TEU4lfknM00LmIWqxvyKy7kQGr8A/BGUtlylY3DfyyHvyaqjT2ZzX2REeILwCDtDDOURBa10jLgLFbwBeYy0pRP6OMFZHwO6G7Kr19VnvMfy3P+mowaL6KTX0dGiD86GmJHMod/peQsYhqnMovfN/Vzevgt0MMAbyLnS8CMpn5eFTj8x3L4a7JG2Dk6Qgp3Abj6r46cnA/RTXfTh//6uvg6cATwfy37zDLKONfhv55+znb4a9Ky+PcBxBeAnF2iI6glRsh5Gz18ImSAdHMD8Ary2JVbYeV8xXP+6+nj43jOX1ORuQGANjcAFVAn5430cEFoim7up41jgBtCcxSNR/5jeeSvRqi7AUjiS1CTZbyLHr4bHQOATpZSoxNLwPh4tf9YXu2vxgmfffEFIPMUQMn9N138R3SIMTpZSgezgGujoyTNtf9Yrv3VSJ4CALwIsMxupYO/jQ6xUbNYQY1e4FfRUZLk2n8s1/5qPDcAWADKK+cdzOKJ6BibNHo6YDaWgLFc+4/l2l/NET774gtAxvToCGqKC+nhx9EhtsgSMJbDfyyHv5olj5998QUgZ6voCGq4nDofiw4xbp0sZchrAjznvwHP+auZMqZFR4gvAMR/CWq4S+nlpugQE3I8yxmiG7guOkoIn/A3lk/4U/OFH/ymUADCvwQ1WMZ50REmZbQEdFG1EuDwH8vhr9YIn33xBSCBNYgaahnLGYgOMWlVKwEO/7Ec/mqd8NkXXwDy+C9BDZRzKXMZio4xJceznI4K3CLorX5jeaufWilzAwAJrEHUUD+NDtAQs3hkzYWB5dwEeMHfWF7wp1ZL4OA3vgAk8CWogWpcFR2hYdZuAsr2AiGP/MfyyF8xppGTRQaILwA1NwAlMsJy7ogO0VCzeIRhjqYsmwCP/MfyyF9xMi6kIzJAfAFwA1Am9xT+/P/GlGUT4JH/WB75K9pWsQfA8QXAawDKZFl0gKYp+ibAI/+xPPJXCmbGHgCnUABCz4GoodJ97n8jHM9yVnNs4TYBHvmP5ZG/UjEUO4NTKADlWxlXVRUGzBweLtQmwCP/sTzyV1pWRX54CgUg9AtQA+VsEx2hJYrysCAf8jOWD/lRaqbHHgBbANQ4efzrLVtm7ekAuDE6yka59h/Ltb9S9NOqF4CM4egIapCM53Jt7G0tLTWHh1nN7OSuCXDtP5Zrf6VpmHnUIwPEF4C6G4ASaedh9o0O0VJzeJgROkllE+CR/1ge+Std4de/xReALP5LUAO1cVh0hJZbuwmILgEe+Y/lkb/SFn7wG18AEvgS1FBHRQcIEV0CPPIfyyN/pS989sUXADcAZXM8g7RHhwgRVQI88h/LI38VQ/jsiy8AefyXoIbaZc0QrKZWlwBv9RvLW/1UHG4ASOBLUIPlnB4dIVSrSoBr/7Fc+6tYwg9+LQBqhj9nEQdEhwi1rgT8pim/fsa5rv3X08/ZuPZXsTwVHSC+AGQsj46ghquR85HoEOFGS8AxNLoEOPzHcviriHJWREeILwCwNDqAmiDnZPoqekfA+taVgMacDvCCv7G84E9FlfFwdIT4ApDzSHQENUVGxhdZwvToIOHm8DA5nUx1E+A5/7E8569iC399egoFwA1Aef0Jj/OZ6BBJ6OGhKW0CPPIfyyN/FV0CB78WADVXxjvo46+iYyRhspsAj/zH8shfZVCLn33xBaAtvgWpyTLOp58To2MkYaKbAI/8x/LIX2XhBgA3ANXQBnybAY6LDpKE8T4nwIf8jOVDflQu4bMvvgCsiG9BaomtyPmeJWCNLZUAh/9YDn+VTT1+9sUXgLkMkfF4dAy1hCVgfZsqAQ7/sRz+KqMONwCjPA1QJZaA9W1YAhz+Yzn8VVar3QCsFf5FqKW2IudCFtEZHSQJ6+4O+EeH/3q82l/ltYoe/hAdIpUC8EB0ALXcdOr80BKwRg8P0c2/OvzX8Gp/ldv90QEglQKQc3d0BIWwBOiZXPur7LI0Zl4aBSCRL0MhLAFax+GvargrOgCkUgAS+TIUxhIgh7+qI5GttwVAqbAEVJnDX9WSxMxLowBkaXwZCmcJqCKHv6omkdPeaRSALh4FVkTHUBIsAVXi8FcV1dI46E2jAIxK4gtREiwBVeDwVzUN8bM0bn1PqQDcHR1ASbEElJnDX9V1D/OoR4eAtAqAGwBtyBJQRg5/VVsysy6dApDIRRFKjiWgTBz+qrqEZl1KBeC26AhK1nTqXEwfx0QH0RT4bH8J6tweHWGtlArAxt+LLo2aQcYl9DM7OogmwWf7S6Nq/Do6wlrpFIDZ3IdvBdTmzQB+aAkoGNf+0jojFoCNcwugLbMEFInDX1rfI/SmcQsgpFYAcguAxsUSUAQOf2lDyRz9Q2oFAAuAxs0SkDKHv/RMuQVg0+ppfTlKniUgRQ5/aVOSOshNqwAM8xtI4wlJKgxLQEoc/tKmtVkANu0EVgJ3RMdQ4VgCUuDwlzanzgg3R4dYX1oFAJI7R6LCGC0BPiwohsNf2pLb6eEP0SHWl14BqKW1IlGhjD4syBLQWg5/aTySO7hNrwDU+WV0BBXaaAkY4OjoIJXg432l8cm4ITrChtIrAG0sAfLoGCq0GeT8yE1Ak/l4X2n8cq6MjrCh9ApAJ0uB30XHUOF5OqCZXPtLEzHMKq6JDrGh9ArAqMXRAVQKloBmcPhLE3X9mrvckpJmAcgsAGoYS0AjOfyliUt0plkAVAWWgEZw+EuTleRMS7MAzOY24KHoGCoVS8BUOPylyRthSXSEjUmzAGTk5FwVHUOlYwmYDIe/NHk5d6T0CuD1pVkAALI0G5MKzxIwEQ5/aaqSXP9DygUg4S9NhWcJGA+Hv9QIyc6ydAvAaq4FnoqOodKyBGyOw19qjNwCMHFzWAVcHR1DpTaDjB/Sz6uigyTFx/tKjfIQV3NLdIhNSbcAjFoYHUClNxNYwEJmRQdJgo/3lRqpj3nUo0NsStoFoMZl0RFUCTOocWnlS4Brf6nRkp5haReA2dwI3BcdQ5VQ7RLg8Jcarc5qFkWH2Jy0C0BGTkZfdAxVRjVLgMNfaoZrmMPD0SE2J+0CAFBPe4Wi0qlWCXD4S82RpT+70i8AI/QDw9ExVCnVKAEOf6l5RiwAUzeHx8i8HVAtV+4S4PCXmukRruba6BBbkn4BAMi9HVAhylkCHP5Sc+X0p3z731rFKAAFOJei0ipXCXD4S81XkJlVjALQyQ2Q5tuUVAkzqPFDFvLK6CBT4hP+pFaok9MfHWI8ilEAMnLgf6NjqNK2ocbCwm4CfMKf1CpX0MOr4OoGAAAQu0lEQVRD0SHGoxgFACBnfnQEVV4xTwe49pdaJyvOrCpOAbiKK/GpgIpXrBLg8JdaaYSsONvq4hSA0SsqL4qOIbG2BAxwdHSQzXL4S62VM0gnD0bHGK/iFADwNIBSMoM84RLg8JdaL+O70REmIosOMCE5GQPcDewdHUVa4wkyjqWLK6ODPK2fs/GCP6nVhulgD2bxSHSQ8SrWBmD0boALo2NI69kGWMAAr4gOsqYgfwqHvxThx0Ua/lC0AgBQ9zSAEpOzLTmL6GdOWIb5tLGIL5PzD2EZpGr7TnSAiSpeAejhGuCu6BjSBmYCP2CAM1v+yQvYhe35ETmnt/yzJQEMMcTF0SEmqngFYPQ0gFsApaiDnP+gn/9lkJ1b8on9zKadG4CelnyepGfK6Od4lkfHmKjiFQCAjG9GR5A240SGuZUBzmSQ9qZ8wgL2pJ9vAwPAHk35DEnjUy/mTCrWXQDr6+cqSODCK2nz7gTOYRVf5QRWTvlXW8QB5LyHnNOArab860maqkdYzZ7MYVV0kIkqbgHo46/IuCA6hjQuGY+T8wPgIjJ+ShePjvufHR36PeScBBxGkf9/K5VNxr/TxbujY0xGcX+QDLINw9wHPCs6ijRBI8CNZNwE3EadB4DHyBghZwY1tiXnecD+wKHAsyPDStqMGgfSyc3RMSajuAUAYIDzvPJZkhRkMd0cGR1isop5EeBaOV+JjiBJqqz/jA4wFcUuAN1cC1wfHUOSVDmPkhf7ybTFLgAAebEbmCSpgHK+RQ9/iI4xFcUvADW+CQ24vUqSpPEqwcFn8QvA6O1UhV7DSJIK5Tp6+WV0iKkqfgEAyPlSdARJUkVknBcdoRHKUQB6+Dkk9D52SVJZPcRMvhEdohHKUQAAcj4THUGSVHpf4HCejA7RCOUpAFfxQ+C30TEkSaW1ko7ynHIuTwGYR52Mz0fHkCSV1leZxSPRIRqlPAUAYCb/DeX5H0eSlIw6dT4bHaKRylUARs/LnBsdQ5JUMjnfp5fbo2M0UrkKAEDOF6EcF2hIkhLRVr4LzctXAHp4iLwct2hIkpKwmE6uig7RaOUrAAB1PgPUo2NIkkqhdEf/UNYCcCy/Ay6OjiFJKrxbWMEPo0M0QzkLAEDOR3ALIEmaiox5zGUkOkYzlLcA9PAb4KLoGJKkwvoNi8s7R8pbAABqfBhYHR1DklRAOR9mXnk3yeUuAJ3cCnw7OoYkqWAyfkl3ua8lK3cBAGjjY8BwdAxJUoHkfJiMPDpGM5W/AMzmDuDr0TEkSYVxDV1cFh2i2cpfAAAyzgJWRceQJBXCB8t+9A9VKQBd3EvGBdExJEnJu5JuLo8O0QrVKAAANf4V3xEgSdqcnH+MjtAq1SkAs7kP+PfoGJKkRGX8gB6uiI7RKtUpAAAdfAK4PzqGJCk5Q+S8LzpEK1WrAMziCTI+GB1DkpScz9LNbdEhWimLDtByORkDXA28LDqKJCkJD5FxAF08Gh2klaq1AQDIyMn4Oyj/LR6SpHHI+WDVhj9UsQAAdHE1uY8IliRxPVfx39EhIlTvFMBal/McRvgdMDM6iiQpSM6rqnTl//qquQGA0dsCM/4tOoYkKUjGd6s6/KHKBQBgJp8C7omOIUlquSdZzQeiQ0SqdgE4nCfJeW90DElSy53NsdwdHSJStQsAQA8XkfGD6BiSpJb5Lav5ZHSIaBYAgBHOAFZEx5AkNV0deCtzfEOsBQCglwfI+FB0DElSk+V8kW4WR8dIgQVgrcWcR8bPomNIkprmXp6qztv+tqS6zwHYmEUcQJ1fAVtHR5EkNdyr6eaH0SFS4QZgfZ3cSs6/RMeQJDXctx3+Y1kANjSNs4Hro2NIkhpmGTX+PjpEaiwAG5rFamq8HRiJjiJJaoCcd9PJg9ExUmMB2JhOriHn36NjSJKm7DK6+Xp0iBRZADZlhH8CboiOIUmatIep8xYyX/++MRaATZnDKjJOBlZGR5EkTVgOvJVeHogOkioLwOZ0cQvwvugYkqQJO9er/jfP5wBsSU7GABcDJ0RHkSSNyy2s4lBOcIO7OW4AtiQjZzVvIef30VEkSVu0CjjZ4b9lFoDxmMPD1HgzeCGJJCXuQ3R7Afd4WADGq4s+cr4QHUOStEkDLOGz0SGKwmsAJmIBW9HGL8g4ODqKJGmM5eS8iB7+LzpIUbgBmIg5rCLnZOCJ6CiSpKfVyTjV4T8xFoCJ6uUm4E14PYAkpSHjLLr4UXSMorEATEY33wfOiY4hSWKA5Xw8OkQRWQAmawXvBwaiY0hShd1NjTcw15e3TYYXAU5FH7uScR2wZ3QUSaqYJ6lzJL38MjpIUbkBmIoeHiLndYw+eEKS1Co573D4T40FYKp6+DnwrugYklQhn6eHr0WHKDoLQCN082XggugYklR6OVexgn+IjlEGFoBG6eBM4NroGJJUYveT81rmMhQdpAwsAI0yi6fo4ATgnugoklRCK6lzIr08EB2kLCwAjTSL31NjDrAiOooklcgIGSfTyy+ig5SJBaDROrmZjBPBFZUkNUTGu+ji4ugYZWMBaIYufkLGX0fHkKTCy/k0Xb6JtRksAM3SxVfJfDylJE1azve4ivdHxygrnwTYTDkZA3wNODU6iiQVzDWs4mhOYGV0kLJyA9BMGTk78hbgx9FRJKlA7qLGCQ7/5rIANNuhDFPn9cBvo6NIUgEsZYRj6eTB6CBlZwFohV6W0UYncFd0FElK2GPUOJZj+V10kCqwALTKbO4j42h8UJAkbcxK4M/o5JroIFVhAWilLu4Fusj5fXQUSUrIEDmvo5ufRgepEgtAq3VzG230AMuio0hSAkaAU+jhsuggVWMBiNDJr8mZQ8bj0VEkKVCdjDfRzYXRQarIAhClh5+Tcyzwh+gokhQgB86gi29FB6kqC0CkbhaTcyKwKjqKJLVUxvvo5rzoGFVmAYjWwwA5J+HLgyRVRcYH6eLT0TGqzkcBp6KPY8n4HjA9OookNUkOvJduzokOIgtAWvo4ihqXkrNtdBRJarA68Ha6+c/oIBplAUhNP4cCC4GdoqNIUoOMkPMWevhadBCtYwFIUT+HAP3ALtFRJGmKhsh4A138b3QQjWUBSFUfLyBjANgzOookTdJK4ES66Y8OomeyAKTsMvahxiIy9ouOIkkT9AQ5r6bH16GnygKQuj72ImMRcEB0FEkap2XU6PXFPmnzOQCp6+H/qHMYcEV0FEkah7vIONLhnz4LQBH0sozVdJP7yExJSfsFNQ6ji1uig2jLPAVQJDkZ/XyUjI9GR5GkDXyfVZzCCayMDqLxcQNQJBk5Pcwj5y3AcHQcSVrj8yzhdQ7/YnEDUFR9dJFxIbBddBRJlTVCxrvo4gvRQTRxFoAiG+Agci4F9o6OIqly/kDOG+jhkuggmhwLQNEtYE/auRR4UXQUSZVxP3VOoJdfRgfR5HkNQNHN4f/RwZFkfDc6iqRKuJaMwxz+xecGoEz6OJ2MLwAd0VEklVDG+Sznb5nLUHQUTZ0FoGwW8koy5pOxe3QUSaXxFDl/Qw//FR1EjWMBKKPLeQ6ruZCMw6KjSCq8e6nxOp/sVz5eA1BGs7mPaRwFfDI6iqRCu4w6f+rwLyc3AGXXzynAecCM6CiSCiMHPsUSPsQ86tFh1BwWgCpYyIupcSGwb3QUSclbRs6bvb+//DwFUAW9/JInOYSM86OjSEraj1nNixz+1eAGoGoGeC055wM7RkeRlIzV5PwLV3GWK//qsABUUR97kfF14OjoKJLC/ZY6b/TBPtVjAaiqnIwB3gl8CpgWHUdSiP8h5x308IfoIGo9C0DV9XMo8E3ggOgoklrmETLeShcXRwdRHC8CrLpurqWDlwAXREeR1BL91DnY4S83AFqnn1cBXwH2j44iqeFWkPN+uvkKGXl0GMWzAGisJUznCT4KvBdoi44jqQEyLqXGXzOb+6KjKB0WAG1cP4cA/wm8JDqKpEl7gIy/pYvvRQdRerwGQBvXzQ108ArgXeAVwlLB5GScz2pe4PDXprgB0JZdzn6McB4wOzqKpC26nTqn08tgdBClzQKg8cnJ6OdtZHwCnyIopegp4FOs5l+Zw6roMEqfBUATcyk7MI15wBlAe3AaSTB6kV/G39HJndFRVBwWAE3OZTyfNs4B5kRHkSrsFjL+ni76ooOoeCwAmppFdFLnc8ALo6NIFbIMOIsVfIG5jESHUTFZADR119LBMs4APgZsFx1HKrFh4Et08FFmsSI6jIrNAqDGWcRO1PkI8Df4ECGpsXIWkfMuerkpOorKwQKgxhvgIOAscl6Nv8ekqVpMzkfo4cfRQVQu/nBW8wxwEDkfBl6Hv9ekicn5NRkfp5sLo6OonPyhrObr4+XU+Cdyjo+OIhXAb4Cz6OIiX9qjZrIAqHX6OJyMfwaOiY4iJegWMs5mMd9gHvXoMCo/C4Bab4Ajyfk48KroKFIC7ibnEzzKBd7Sp1ayACjOAEcC7yfnOPy9qOq5nozP0s63mMXq6DCqHn/oKl4/+wNnAm8DpgenkZopJ+dy4PP0cEl0GFWbBUDp6GNX4AwyzgR2io4jNdAQ8F1qnE0nN0eHkcACoBQNsg1DnEyNd5Pz/Og40hQ8CnwN+CTd3B8dRlqfBUDpmk8bO/Bacs4AjsLfryqOG8n4Ek/xNU5gZXQYaWP8gapiGL1O4C3Am4HdYsNIG/UUcAk1zqeTRdFhpC2xAKhY5tPGjsyizunAiUB7dCRV3nXknM9TfJtX83h0GGm8LAAqrst5DiOcAvw1sE9wGlXLo2R8F/gyXVwfHUaaDAuAim8+bWzHsWS8CTgOmBEdSaW0Gvgx8A224SIO58noQNJUWABULkuYzuN0kvF64DXAzOhIKrQ6cBVwITW+QycPRgeSGsUCoPK6hBlMYzYZpwKvBqZFR1IhrBv6debTywPRgaRmsACoGgbZntX8GfB6crqxDOiZbibnQuBr9HBXdBip2SwAqp6F7EhGFxm95PSSsXt0JIV4FBggZyHtLGQ290UHklrJAiAt5EBqHE9OJxlH4XagzG5m9F79RSzjCuYyFB1IimIBkNbXx0zgmDWF4Fhgr+hImpInyPgJdS5hhAXM4f9FB5JSYQGQNmeAPybnCOAI4HDggOBE2rz7yLiSOkuAxTzKDcxlJDqUlCILgDQRA2xHxksZ4UjgCDKOBLaOjlVRI8DvGH0S35XkLKaXm6JDSUVhAZCmYpCtWcVLaeMIcl4CvAjYF2gLTlZG95BxIznXU2MJQyxhDo9Fh5KKygIgNdp8pvEs9qeNl5DzQjIOpM6h3m0wThmPk3MroxfsXUeNmxjiV8zh4ehoUplYAKRW6WcPMg6izsFkPB/Yh5x9yNgb6IiO12J1Rs/X302du6hxK/AbMm5kNneRkUcHlMrOAiCl4FJ2oIN9ydgX1vy5/vTf700x33q4HLjz6T9y7gQeAO5niFs4gZWh6aSKswBIRbCQHamxEzV2ZoSdgJ3Inv7zzuTsDGv+ft3LkJ4FtJHRTs62E/zElcCqNX+9fM2fnwKWkbOUGkuBpdR5GMb8/SOMsJRfsJR51KfwbyypySwAUpX0MZNhptFORjvbAzDE49RZTY0RL6qTJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSZvx/atQNHSZeJBsAAAAASUVORK5CYII=", hb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  onSignIn: o,
  title: s = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = w.useState(h), [y, S] = w.useState(""), [E, B] = w.useState(""), [q, O] = w.useState(""), [H, D] = w.useState(!1), [J, Y] = w.useState(""), [X, ee] = w.useState(!1), [K, le] = w.useState(
    null
  ), [ne, $] = w.useState(!1), [ge, pe] = w.useState(!1), [Ye, Oe] = w.useState(!1), [qe, De] = w.useState(!1), [Ve, Q] = w.useState(!0), [k, G] = w.useState(""), [re, Se] = w.useState("info"), ze = w.useRef(null), v = w.useRef(null);
  w.useEffect(() => {
    if (v.current && clearTimeout(v.current), !g) {
      pe(!1), Oe(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      pe(!1), Oe(!1);
      return;
    }
    return v.current = setTimeout(async () => {
      De(!0);
      try {
        (await Us(g)).exists ? (Oe(!0), pe(!0)) : (Oe(!1), pe(!1));
      } catch (He) {
        console.error("[CreateAccount] Email check failed:", He), Oe(!1), pe(!1);
      } finally {
        De(!1);
      }
    }, 500), () => {
      v.current && clearTimeout(v.current);
    };
  }, [g]), w.useEffect(() => {
    if (q) {
      const te = g || y || E ? {
        email: g,
        displayName: `${y} ${E}`.trim()
      } : null, He = hm(q, te);
      le(He);
    } else
      le(null);
  }, [q, g, y, E]);
  const U = K ? K.length && K.upper && K.lower && K.number && K.noSpaces && K.noTriple && K.special && K.noNameParts && K.noEmailParts : !1, Z = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  w.useEffect(() => {
    const te = (He) => {
      He.key === "Escape" && c();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [c]);
  const se = (te) => {
    te.target === ze.current && c();
  }, oe = async (te) => {
    if (te.preventDefault(), $(!0), !g || !y || !E || !q) {
      r("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Y("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    if (!U) {
      r("Password does not meet requirements");
      return;
    }
    D(!0), Y(""), G("");
    try {
      const Re = g.split("@")[0], Qt = await cb({
        username: Re,
        email: g,
        firstName: y,
        lastName: E,
        password: q
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Qt.message
      );
      try {
        const Gt = await mm(
          Re,
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
    } catch (Re) {
      console.error("[CreateAccount] Registration failed:", Re);
      const Qt = Re instanceof Error ? Re.message : "Registration failed";
      G(Qt), Se("error"), r(Qt);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    k && /* @__PURE__ */ x.jsx(
      db,
      {
        type: re,
        message: k,
        duration: 5e3,
        onClose: () => G("")
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ze,
        onMouseDown: se,
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
          /* @__PURE__ */ x.jsxs("form", { onSubmit: oe, className: "space-y-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
              un,
              {
                label: "Email Address",
                id: "email",
                type: "email",
                value: g,
                onChange: (te) => {
                  p(te.target.value), Y("");
                },
                placeholder: "Enter email address",
                disabled: H,
                className: "w-full!",
                autoComplete: "email",
                error: ne && !g ? "Required" : J || "",
                endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                  qe && /* @__PURE__ */ x.jsx(Q0, {}),
                  !qe && !Ye && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ x.jsx(
                    "img",
                    {
                      src: ym,
                      alt: "available",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            ge && Ye && /* @__PURE__ */ x.jsx(
              zs,
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
            /* @__PURE__ */ x.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ x.jsx(
                un,
                {
                  label: "First Name",
                  id: "firstName",
                  type: "text",
                  value: y,
                  onChange: (te) => S(te.target.value),
                  placeholder: "First Name",
                  disabled: H || Ye || !Z,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ne && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ x.jsx(
                un,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: E,
                  onChange: (te) => B(te.target.value),
                  placeholder: "Last Name",
                  disabled: H || Ye || !Z,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ne && !E ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
              un,
              {
                label: "Password",
                id: "password",
                type: X ? "text" : "password",
                value: q,
                onChange: (te) => {
                  O(te.target.value);
                },
                placeholder: "Enter Password...",
                disabled: H || Ye || !Z,
                className: "w-full!",
                autoComplete: "new-password",
                error: ne && !q ? "Required" : ne && q && !U ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                endIcon: /* @__PURE__ */ x.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => ee(!X),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: X ? /* @__PURE__ */ x.jsx(
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
                  onChange: (te) => Q(te.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ x.jsx(
              Hi,
              {
                type: "submit",
                disabled: H || Ye || !Z,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: H ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                disabled: H,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ x.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, gm = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", mb = ({
  email: u,
  loading: r,
  onResendLink: c,
  onBack: o,
  onClose: s
}) => {
  const d = w.useRef(null);
  w.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && s();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [s]);
  const h = (g) => {
    g.target === d.current && s();
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
            src: gm,
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
  const [o, s] = w.useState(u || ""), [d, h] = w.useState(!1), [g, p] = w.useState(!1), [y, S] = w.useState(""), [E, B] = w.useState(!1), [q, O] = w.useState(!1), [H, D] = w.useState(!1), J = w.useRef(null);
  w.useEffect(() => {
    const K = (le) => {
      le.key === "Escape" && c();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [c]), w.useEffect(() => {
    const le = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o);
    if (D(le), !le || !o) {
      O(!1);
      return;
    }
    const ne = setTimeout(async () => {
      B(!0);
      try {
        const $ = await Us(o);
        console.log("[ResetPassword] Email check response:", $), O($.exists), console.log("[ResetPassword] Email exists:", $.exists);
      } catch ($) {
        console.error("[ResetPassword] Error checking email:", $), O(!1);
      } finally {
        B(!1);
      }
    }, 500);
    return () => clearTimeout(ne);
  }, [o]);
  const Y = (K) => {
    K.target === J.current && c();
  }, X = async (K) => {
    if (K.preventDefault(), !o) {
      S("Email is required");
      return;
    }
    h(!0), S("");
    try {
      await p0(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
    } catch (le) {
      console.error("[ResetPassword] Failed to send reset link:", le);
      const ne = le instanceof Error ? le.message : "Failed to send reset link. Please try again.";
      S(ne);
    } finally {
      h(!1);
    }
  }, ee = async () => {
    h(!0), S("");
    try {
      await p0(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (K) {
      console.error("[ResetPassword] Failed to resend reset link:", K), p(!1);
      const le = K instanceof Error ? K.message : "Failed to resend reset link. Please try again.";
      S(le);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ x.jsx(
    mb,
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
      ref: J,
      onMouseDown: Y,
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
        /* @__PURE__ */ x.jsxs("form", { onSubmit: X, className: "space-y-4!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            un,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: o,
              onChange: (K) => {
                s(K.target.value), S("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                E && /* @__PURE__ */ x.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !E && q && H && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: gm,
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
              onClose: () => S(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ x.jsx(
            Hi,
            {
              type: "submit",
              disabled: d || !o || !H || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: o, isEmailValid: H, emailExists: q });
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
  initialEmail: h = ""
}) => {
  const [g, p] = w.useState(h), [y, S] = w.useState(""), [E, B] = w.useState(!1), [q, O] = w.useState(!1), [H, D] = w.useState(
    null
  ), [J, Y] = w.useState(""), [X, ee] = w.useState(!1), [K, le] = w.useState(!1), [ne, $] = w.useState(!1), [ge, pe] = w.useState(!1), [Ye, Oe] = w.useState(!1), [qe, De] = w.useState(!1), Ve = w.useRef(null), Q = w.useRef(null);
  w.useEffect(() => {
    if (Q.current && clearTimeout(Q.current), !g) {
      pe(!1), De(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      pe(!1), De(!1);
      return;
    }
    return Q.current = setTimeout(async () => {
      Oe(!0);
      try {
        (await Us(g)).exists ? (pe(!0), De(!1)) : (pe(!1), De(!0));
      } catch (U) {
        console.error("[EmbeddedLogin] Email check failed:", U), pe(!0), De(!1);
      } finally {
        Oe(!1);
      }
    }, 500), () => {
      Q.current && clearTimeout(Q.current);
    };
  }, [g]), w.useEffect(() => {
    if (y) {
      const v = hm(y, null);
      D(v);
    } else
      D(null);
  }, [y]);
  const k = H ? H.length && H.upper && H.lower && H.number && H.noSpaces && H.noTriple && H.special : !1, re = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  w.useEffect(() => {
    const v = (U) => {
      U.key === "Escape" && c();
    };
    return document.addEventListener("keydown", v), () => document.removeEventListener("keydown", v);
  }, [c]);
  const Se = (v) => {
    v.target === Ve.current && c();
  }, ze = async (v) => {
    if (v.preventDefault(), !g || !y) {
      Y("Please enter both email and password"), r("Please enter both email and password");
      return;
    }
    B(!0), Y("");
    try {
      const U = await mm(g, y, X);
      u(U);
    } catch (U) {
      console.error("[EmbeddedLogin] Login failed:", U);
      const V = U instanceof Error ? U.message : "Authentication failed";
      Y(V), r(V);
    } finally {
      B(!1);
    }
  };
  return ne ? /* @__PURE__ */ x.jsx(
    yb,
    {
      email: g,
      onBack: () => $(!1),
      handleClose: c
    }
  ) : K ? /* @__PURE__ */ x.jsx(
    hb,
    {
      onSuccess: (v) => {
        le(!1), u(v);
      },
      onError: r,
      handleClose: c,
      onSignIn: (v) => {
        le(!1), v && p(v);
      },
      authority: o,
      initialEmail: g
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Ve,
      onMouseDown: Se,
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
        /* @__PURE__ */ x.jsxs("form", { onSubmit: ze, className: "space-y-2!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            un,
            {
              label: "Email Address",
              id: "email",
              type: "email",
              value: g,
              onChange: (v) => p(v.target.value),
              placeholder: "Enter email address",
              disabled: E,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                Ye && /* @__PURE__ */ x.jsx(Q0, {}),
                !Ye && ge && re && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: ym,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          qe && !ge && re && /* @__PURE__ */ x.jsx(
            zs,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                De(!1), le(!0);
              },
              onClose: () => De(!1),
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
              onChange: (v) => {
                S(v.target.value), Y("");
              },
              placeholder: "Enter Password...",
              disabled: E || !re || !ge,
              className: "w-full!",
              autoComplete: "current-password",
              error: J,
              endIcon: /* @__PURE__ */ x.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => O(!q),
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
                  checked: X,
                  onChange: (v) => ee(v.target.checked),
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
                onClick: (v) => {
                  v.preventDefault(), $(!0);
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            Hi,
            {
              type: "submit",
              disabled: E || !g || !y || !k || !re || !ge,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: E ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
              disabled: E,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, pb = (u) => {
  const { authority: r, subsidiary: c, callbackUrl: o, onRedirect: s } = u, [d, h] = w.useState(!1);
  console.log("isAuthenticated", d), w.useEffect(() => {
    (async () => {
      try {
        if (ob()) {
          h(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (fb()) {
          const q = localStorage.getItem("refresh_token");
          if (q) {
            console.log("[App] Attempting auto-login with refresh token");
            const O = await sb(q);
            if (O && O.tokens && O.tokens.access_token) {
              const H = O.tokens, D = G0(H.access_token), J = (D.exp || 0) - Math.floor(Date.now() / 1e3);
              Mi("access_token", H.access_token, J, !0), D.x_credentials && Mi("X-Credential", D.x_credentials, J, !1), H.refresh_token && (localStorage.setItem("refresh_token", H.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), h(!0), console.log("[App] Auto-login successful");
              const Y = u.redirectUrl || o;
              if (s) {
                const X = {
                  access_token: H.access_token,
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
                s(Y, X);
              }
              u.redirectUrl && (window.location.href = u.redirectUrl);
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (E) {
        console.error("[App] Auto-login failed:", E), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [u.redirectUrl]), w.useEffect(() => {
    r && localStorage.setItem("authority", r), c && localStorage.setItem("subsidiary", c), o ? localStorage.setItem("callbackUrl", o) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [r, c, o]);
  const g = (S) => {
    u.handleClose && u.handleClose(), h(!0);
    const E = u.redirectUrl || o;
    s && s(E, S), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, p = (S) => {
    console.log("[App] Embedded login error:", S);
  }, y = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ x.jsx(q1, { children: /* @__PURE__ */ x.jsx(j0, { path: "*", element: /* @__PURE__ */ x.jsx(x.Fragment, { children: !d && u.showLogin && /* @__PURE__ */ x.jsx(
    gb,
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
async function v0(u) {
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
        console.log(`[Widget] Loading theme for subsidiary: ${c}`), await v0({
          brandFolder: c,
          shadowRoot: this._shadowRoot
        }), console.log(`[Widget] Theme loaded successfully for ${c}`);
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain() {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await v0({
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
      this.root || (this.root = Tp.createRoot(this.mountPoint));
      const c = this.getProps();
      console.log("[Widget] Rendering with props:", c), this.root.render(
        /* @__PURE__ */ x.jsx(op, { children: /* @__PURE__ */ x.jsx(w.StrictMode, { children: /* @__PURE__ */ x.jsx(pb, { ...c }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
