
// CSS content for Shadow DOM injection
var __WIDGET_CSS__ = "@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.pointer-events-none\\!{pointer-events:none!important}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#17a2b8\\]{border-color:#17a2b8}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#17a2b8\\]{background-color:#17a2b8}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#17a2b8\\]{color:#17a2b8}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-600{color:var(--color-blue-600)}.text-blue-600\\!{color:var(--color-blue-600)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-50\\!{opacity:.5!important}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#138496\\]:hover{background-color:#138496}.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-blue-700\\!:hover{color:var(--color-blue-700)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#17a2b8\\]:enabled{background-color:#17a2b8}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}\n";

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
var ao = { exports: {} }, Za = {};
var jh;
function _g() {
  if (jh) return Za;
  jh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(s, o, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: u,
      type: s,
      key: h,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return Za.Fragment = c, Za.jsx = r, Za.jsxs = r, Za;
}
var Hh;
function Lg() {
  return Hh || (Hh = 1, ao.exports = _g()), ao.exports;
}
var z = Lg(), uo = { exports: {} }, ae = {}, _h;
function qg() {
  if (_h) return ae;
  _h = 1;
  var u = {};
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), U = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = k && b[k] || b["@@iterator"], typeof b == "function" ? b : null);
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
  }, M = Object.assign, J = {};
  function Y(b, _, V) {
    this.props = b, this.context = _, this.refs = J, this.updater = V || j;
  }
  Y.prototype.isReactComponent = {}, Y.prototype.setState = function(b, _) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, _, "setState");
  }, Y.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function X() {
  }
  X.prototype = Y.prototype;
  function le(b, _, V) {
    this.props = b, this.context = _, this.refs = J, this.updater = V || j;
  }
  var I = le.prototype = new X();
  I.constructor = le, M(I, Y.prototype), I.isPureReactComponent = !0;
  var fe = Array.isArray;
  function ne() {
  }
  var P = { H: null, A: null, T: null, S: null }, Ae = Object.prototype.hasOwnProperty;
  function Re(b, _, V) {
    var Z = V.ref;
    return {
      $$typeof: c,
      type: b,
      key: _,
      ref: Z !== void 0 ? Z : null,
      props: V
    };
  }
  function Ze(b, _) {
    return Re(b.type, _, b.props);
  }
  function ve(b) {
    return typeof b == "object" && b !== null && b.$$typeof === c;
  }
  function Le(b) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(V) {
      return _[V];
    });
  }
  var je = /\/+/g;
  function Ke(b, _) {
    return typeof b == "object" && b !== null && b.key != null ? Le("" + b.key) : _.toString(36);
  }
  function G(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(ne, ne) : (b.status = "pending", b.then(
          function(_) {
            b.status === "pending" && (b.status = "fulfilled", b.value = _);
          },
          function(_) {
            b.status === "pending" && (b.status = "rejected", b.reason = _);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function q(b, _, V, Z, re) {
    var oe = typeof b;
    (oe === "undefined" || oe === "boolean") && (b = null);
    var te = !1;
    if (b === null) te = !0;
    else
      switch (oe) {
        case "bigint":
        case "string":
        case "number":
          te = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case c:
            case r:
              te = !0;
              break;
            case E:
              return te = b._init, q(
                te(b._payload),
                _,
                V,
                Z,
                re
              );
          }
      }
    if (te)
      return re = re(b), te = Z === "" ? "." + Ke(b, 0) : Z, fe(re) ? (V = "", te != null && (V = te.replace(je, "$&/") + "/"), q(re, _, V, "", function(Qt) {
        return Qt;
      })) : re != null && (ve(re) && (re = Ze(
        re,
        V + (re.key == null || b && b.key === re.key ? "" : ("" + re.key).replace(
          je,
          "$&/"
        ) + "/") + te
      )), _.push(re)), 1;
    te = 0;
    var He = Z === "" ? "." : Z + ":";
    if (fe(b))
      for (var Oe = 0; Oe < b.length; Oe++)
        Z = b[Oe], oe = He + Ke(Z, Oe), te += q(
          Z,
          _,
          V,
          oe,
          re
        );
    else if (Oe = w(b), typeof Oe == "function")
      for (b = Oe.call(b), Oe = 0; !(Z = b.next()).done; )
        Z = Z.value, oe = He + Ke(Z, Oe++), te += q(
          Z,
          _,
          V,
          oe,
          re
        );
    else if (oe === "object") {
      if (typeof b.then == "function")
        return q(
          G(b),
          _,
          V,
          Z,
          re
        );
      throw _ = String(b), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return te;
  }
  function Q(b, _, V) {
    if (b == null) return b;
    var Z = [], re = 0;
    return q(b, Z, "", "", function(oe) {
      return _.call(V, oe, re++);
    }), Z;
  }
  function se(b) {
    if (b._status === -1) {
      var _ = b._result;
      _ = _(), _.then(
        function(V) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = V);
        },
        function(V) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = V);
        }
      ), b._status === -1 && (b._status = 0, b._result = _);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var $ = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, me = {
    map: Q,
    forEach: function(b, _, V) {
      Q(
        b,
        function() {
          _.apply(this, arguments);
        },
        V
      );
    },
    count: function(b) {
      var _ = 0;
      return Q(b, function() {
        _++;
      }), _;
    },
    toArray: function(b) {
      return Q(b, function(_) {
        return _;
      }) || [];
    },
    only: function(b) {
      if (!ve(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ae.Activity = U, ae.Children = me, ae.Component = Y, ae.Fragment = s, ae.Profiler = d, ae.PureComponent = le, ae.StrictMode = o, ae.Suspense = y, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ae.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return P.H.useMemoCache(b);
    }
  }, ae.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ae.cacheSignal = function() {
    return null;
  }, ae.cloneElement = function(b, _, V) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var Z = M({}, b.props), re = b.key;
    if (_ != null)
      for (oe in _.key !== void 0 && (re = "" + _.key), _)
        !Ae.call(_, oe) || oe === "key" || oe === "__self" || oe === "__source" || oe === "ref" && _.ref === void 0 || (Z[oe] = _[oe]);
    var oe = arguments.length - 2;
    if (oe === 1) Z.children = V;
    else if (1 < oe) {
      for (var te = Array(oe), He = 0; He < oe; He++)
        te[He] = arguments[He + 2];
      Z.children = te;
    }
    return Re(b.type, re, Z);
  }, ae.createContext = function(b) {
    return b = {
      $$typeof: g,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: h,
      _context: b
    }, b;
  }, ae.createElement = function(b, _, V) {
    var Z, re = {}, oe = null;
    if (_ != null)
      for (Z in _.key !== void 0 && (oe = "" + _.key), _)
        Ae.call(_, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (re[Z] = _[Z]);
    var te = arguments.length - 2;
    if (te === 1) re.children = V;
    else if (1 < te) {
      for (var He = Array(te), Oe = 0; Oe < te; Oe++)
        He[Oe] = arguments[Oe + 2];
      re.children = He;
    }
    if (b && b.defaultProps)
      for (Z in te = b.defaultProps, te)
        re[Z] === void 0 && (re[Z] = te[Z]);
    return Re(b, oe, re);
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, ae.isValidElement = ve, ae.lazy = function(b) {
    return {
      $$typeof: E,
      _payload: { _status: -1, _result: b },
      _init: se
    };
  }, ae.memo = function(b, _) {
    return {
      $$typeof: S,
      type: b,
      compare: _ === void 0 ? null : _
    };
  }, ae.startTransition = function(b) {
    var _ = P.T, V = {};
    P.T = V;
    try {
      var Z = b(), re = P.S;
      re !== null && re(V, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ne, $);
    } catch (oe) {
      $(oe);
    } finally {
      _ !== null && V.types !== null && (_.types = V.types), P.T = _;
    }
  }, ae.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ae.use = function(b) {
    return P.H.use(b);
  }, ae.useActionState = function(b, _, V) {
    return P.H.useActionState(b, _, V);
  }, ae.useCallback = function(b, _) {
    return P.H.useCallback(b, _);
  }, ae.useContext = function(b) {
    return P.H.useContext(b);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(b, _) {
    return P.H.useDeferredValue(b, _);
  }, ae.useEffect = function(b, _) {
    return P.H.useEffect(b, _);
  }, ae.useEffectEvent = function(b) {
    return P.H.useEffectEvent(b);
  }, ae.useId = function() {
    return P.H.useId();
  }, ae.useImperativeHandle = function(b, _, V) {
    return P.H.useImperativeHandle(b, _, V);
  }, ae.useInsertionEffect = function(b, _) {
    return P.H.useInsertionEffect(b, _);
  }, ae.useLayoutEffect = function(b, _) {
    return P.H.useLayoutEffect(b, _);
  }, ae.useMemo = function(b, _) {
    return P.H.useMemo(b, _);
  }, ae.useOptimistic = function(b, _) {
    return P.H.useOptimistic(b, _);
  }, ae.useReducer = function(b, _, V) {
    return P.H.useReducer(b, _, V);
  }, ae.useRef = function(b) {
    return P.H.useRef(b);
  }, ae.useState = function(b) {
    return P.H.useState(b);
  }, ae.useSyncExternalStore = function(b, _, V) {
    return P.H.useSyncExternalStore(
      b,
      _,
      V
    );
  }, ae.useTransition = function() {
    return P.H.useTransition();
  }, ae.version = "19.2.3", ae;
}
var Lh;
function Ro() {
  return Lh || (Lh = 1, uo.exports = qg()), uo.exports;
}
var x = Ro();
var qh = "popstate";
function kg(u = {}) {
  function c(s, o) {
    let { pathname: d, search: h, hash: g } = s.location;
    return po(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function r(s, o) {
    return typeof o == "string" ? o : $a(o);
  }
  return Gg(
    c,
    r,
    null,
    u
  );
}
function _e(u, c) {
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
function Qg() {
  return Math.random().toString(36).substring(2, 10);
}
function kh(u, c) {
  return {
    usr: u.state,
    key: u.key,
    idx: c
  };
}
function po(u, c, r = null, s) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof c == "string" ? Wn(c) : c,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: c && c.key || s || Qg()
  };
}
function $a({
  pathname: u = "/",
  search: c = "",
  hash: r = ""
}) {
  return c && c !== "?" && (u += c.charAt(0) === "?" ? c : "?" + c), r && r !== "#" && (u += r.charAt(0) === "#" ? r : "#" + r), u;
}
function Wn(u) {
  let c = {};
  if (u) {
    let r = u.indexOf("#");
    r >= 0 && (c.hash = u.substring(r), u = u.substring(0, r));
    let s = u.indexOf("?");
    s >= 0 && (c.search = u.substring(s), u = u.substring(0, s)), u && (c.pathname = u);
  }
  return c;
}
function Gg(u, c, r, s = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = s, h = o.history, g = "POP", p = null, y = S();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function S() {
    return (h.state || { idx: null }).idx;
  }
  function E() {
    g = "POP";
    let M = S(), J = M == null ? null : M - y;
    y = M, p && p({ action: g, location: j.location, delta: J });
  }
  function U(M, J) {
    g = "PUSH";
    let Y = po(j.location, M, J);
    y = S() + 1;
    let X = kh(Y, y), le = j.createHref(Y);
    try {
      h.pushState(X, "", le);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError")
        throw I;
      o.location.assign(le);
    }
    d && p && p({ action: g, location: j.location, delta: 1 });
  }
  function k(M, J) {
    g = "REPLACE";
    let Y = po(j.location, M, J);
    y = S();
    let X = kh(Y, y), le = j.createHref(Y);
    h.replaceState(X, "", le), d && p && p({ action: g, location: j.location, delta: 0 });
  }
  function w(M) {
    return Yg(M);
  }
  let j = {
    get action() {
      return g;
    },
    get location() {
      return u(o, h);
    },
    listen(M) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(qh, E), p = M, () => {
        o.removeEventListener(qh, E), p = null;
      };
    },
    createHref(M) {
      return c(o, M);
    },
    createURL: w,
    encodeLocation(M) {
      let J = w(M);
      return {
        pathname: J.pathname,
        search: J.search,
        hash: J.hash
      };
    },
    push: U,
    replace: k,
    go(M) {
      return h.go(M);
    }
  };
  return j;
}
function Yg(u, c = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), _e(r, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : $a(u);
  return s = s.replace(/ $/, "%20"), !c && s.startsWith("//") && (s = r + s), new URL(s, r);
}
function mm(u, c, r = "/") {
  return Vg(u, c, r, !1);
}
function Vg(u, c, r, s) {
  let o = typeof c == "string" ? Wn(c) : c, d = hl(o.pathname || "/", r);
  if (d == null)
    return null;
  let h = ym(u);
  Jg(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = lp(d);
    g = ep(
      h[p],
      y,
      s
    );
  }
  return g;
}
function ym(u, c = [], r = [], s = "", o = !1) {
  let d = (h, g, p = o, y) => {
    let S = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(s) && p)
        return;
      _e(
        S.relativePath.startsWith(s),
        `Absolute route path "${S.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(s.length);
    }
    let E = dl([s, S.relativePath]), U = r.concat(S);
    h.children && h.children.length > 0 && (_e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${E}".`
    ), ym(
      h.children,
      c,
      U,
      E,
      p
    )), !(h.path == null && !h.index) && c.push({
      path: E,
      score: $g(E, h.index),
      routesMeta: U
    });
  };
  return u.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of gm(h.path))
        d(h, g, !0, p);
  }), c;
}
function gm(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [r, ...s] = c, o = r.endsWith("?"), d = r.replace(/\?$/, "");
  if (s.length === 0)
    return o ? [d, ""] : [d];
  let h = gm(s.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...h), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function Jg(u) {
  u.sort(
    (c, r) => c.score !== r.score ? r.score - c.score : Pg(
      c.routesMeta.map((s) => s.childrenIndex),
      r.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var Xg = /^:[\w-]+$/, Zg = 3, Kg = 2, Fg = 1, Wg = 10, Ig = -2, Qh = (u) => u === "*";
function $g(u, c) {
  let r = u.split("/"), s = r.length;
  return r.some(Qh) && (s += Ig), c && (s += Kg), r.filter((o) => !Qh(o)).reduce(
    (o, d) => o + (Xg.test(d) ? Zg : d === "" ? Fg : Wg),
    s
  );
}
function Pg(u, c) {
  return u.length === c.length && u.slice(0, -1).every((s, o) => s === c[o]) ? (
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
function ep(u, c, r = !1) {
  let { routesMeta: s } = u, o = {}, d = "/", h = [];
  for (let g = 0; g < s.length; ++g) {
    let p = s[g], y = g === s.length - 1, S = d === "/" ? c : c.slice(d.length) || "/", E = Di(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      S
    ), U = p.route;
    if (!E && y && r && !s[s.length - 1].route.index && (E = Di(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      S
    )), !E)
      return null;
    Object.assign(o, E.params), h.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: dl([d, E.pathname]),
      pathnameBase: ip(
        dl([d, E.pathnameBase])
      ),
      route: U
    }), E.pathnameBase !== "/" && (d = dl([d, E.pathnameBase]));
  }
  return h;
}
function Di(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [r, s] = tp(
    u.path,
    u.caseSensitive,
    u.end
  ), o = c.match(r);
  if (!o) return null;
  let d = o[0], h = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: s.reduce(
      (y, { paramName: S, isOptional: E }, U) => {
        if (S === "*") {
          let w = g[U] || "";
          h = d.slice(0, d.length - w.length).replace(/(.)\/+$/, "$1");
        }
        const k = g[U];
        return E && !k ? y[S] = void 0 : y[S] = (k || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: u
  };
}
function tp(u, c = !1, r = !0) {
  qt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let s = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (s.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (s.push({ paramName: "*" }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, c ? void 0 : "i"), s];
}
function lp(u) {
  try {
    return u.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return qt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
    ), u;
  }
}
function hl(u, c) {
  if (c === "/") return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase()))
    return null;
  let r = c.endsWith("/") ? c.length - 1 : c.length, s = u.charAt(r);
  return s && s !== "/" ? null : u.slice(r) || "/";
}
var pm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, np = (u) => pm.test(u);
function ap(u, c = "/") {
  let {
    pathname: r,
    search: s = "",
    hash: o = ""
  } = typeof u == "string" ? Wn(u) : u, d;
  if (r)
    if (np(r))
      d = r;
    else {
      if (r.includes("//")) {
        let h = r;
        r = r.replace(/\/\/+/g, "/"), qt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${r}`
        );
      }
      r.startsWith("/") ? d = Gh(r.substring(1), "/") : d = Gh(r, c);
    }
  else
    d = c;
  return {
    pathname: d,
    search: cp(s),
    hash: rp(o)
  };
}
function Gh(u, c) {
  let r = c.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function io(u, c, r, s) {
  return `Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function up(u) {
  return u.filter(
    (c, r) => r === 0 || c.route.path && c.route.path.length > 0
  );
}
function vm(u) {
  let c = up(u);
  return c.map(
    (r, s) => s === c.length - 1 ? r.pathname : r.pathnameBase
  );
}
function Sm(u, c, r, s = !1) {
  let o;
  typeof u == "string" ? o = Wn(u) : (o = { ...u }, _e(
    !o.pathname || !o.pathname.includes("?"),
    io("?", "pathname", "search", o)
  ), _e(
    !o.pathname || !o.pathname.includes("#"),
    io("#", "pathname", "hash", o)
  ), _e(
    !o.search || !o.search.includes("#"),
    io("#", "search", "hash", o)
  ));
  let d = u === "" || o.pathname === "", h = d ? "/" : o.pathname, g;
  if (h == null)
    g = r;
  else {
    let E = c.length - 1;
    if (!s && h.startsWith("..")) {
      let U = h.split("/");
      for (; U[0] === ".."; )
        U.shift(), E -= 1;
      o.pathname = U.join("/");
    }
    g = E >= 0 ? c[E] : "/";
  }
  let p = ap(o, g), y = h && h !== "/" && h.endsWith("/"), S = (d || h === ".") && r.endsWith("/");
  return !p.pathname.endsWith("/") && (y || S) && (p.pathname += "/"), p;
}
var dl = (u) => u.join("/").replace(/\/\/+/g, "/"), ip = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), cp = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, rp = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, op = class {
  constructor(u, c, r, s = !1) {
    this.status = u, this.statusText = c || "", this.internal = s, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function sp(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function fp(u) {
  return u.map((c) => c.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var bm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Am(u, c) {
  let r = u;
  if (typeof r != "string" || !pm.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let s = r, o = !1;
  if (bm)
    try {
      let d = new URL(window.location.href), h = r.startsWith("//") ? new URL(d.protocol + r) : new URL(r), g = hl(h.pathname, c);
      h.origin === d.origin && g != null ? r = g + h.search + h.hash : o = !0;
    } catch {
      qt(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: s,
    isExternal: o,
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
var dp = [
  "GET",
  ...Em
];
new Set(dp);
var In = x.createContext(null);
In.displayName = "DataRouter";
var Ui = x.createContext(null);
Ui.displayName = "DataRouterState";
var hp = x.createContext(!1), Rm = x.createContext({
  isTransitioning: !1
});
Rm.displayName = "ViewTransition";
var mp = x.createContext(
  /* @__PURE__ */ new Map()
);
mp.displayName = "Fetchers";
var yp = x.createContext(null);
yp.displayName = "Await";
var jt = x.createContext(
  null
);
jt.displayName = "Navigation";
var Pa = x.createContext(
  null
);
Pa.displayName = "Location";
var ml = x.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
ml.displayName = "Route";
var To = x.createContext(null);
To.displayName = "RouteError";
var Tm = "REACT_ROUTER_ERROR", gp = "REDIRECT", pp = "ROUTE_ERROR_RESPONSE";
function vp(u) {
  if (u.startsWith(`${Tm}:${gp}:{`))
    try {
      let c = JSON.parse(u.slice(28));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.location == "string" && typeof c.reloadDocument == "boolean" && typeof c.replace == "boolean")
        return c;
    } catch {
    }
}
function Sp(u) {
  if (u.startsWith(
    `${Tm}:${pp}:{`
  ))
    try {
      let c = JSON.parse(u.slice(40));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string")
        return new op(
          c.status,
          c.statusText,
          c.data
        );
    } catch {
    }
}
function bp(u, { relative: c } = {}) {
  _e(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: s } = x.useContext(jt), { hash: o, pathname: d, search: h } = tu(u, { relative: c }), g = d;
  return r !== "/" && (g = d === "/" ? r : dl([r, d])), s.createHref({ pathname: g, search: h, hash: o });
}
function eu() {
  return x.useContext(Pa) != null;
}
function on() {
  return _e(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), x.useContext(Pa).location;
}
var xm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Om(u) {
  x.useContext(jt).static || x.useLayoutEffect(u);
}
function Ap() {
  let { isDataRoute: u } = x.useContext(ml);
  return u ? Bp() : Ep();
}
function Ep() {
  _e(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = x.useContext(In), { basename: c, navigator: r } = x.useContext(jt), { matches: s } = x.useContext(ml), { pathname: o } = on(), d = JSON.stringify(vm(s)), h = x.useRef(!1);
  return Om(() => {
    h.current = !0;
  }), x.useCallback(
    (p, y = {}) => {
      if (qt(h.current, xm), !h.current) return;
      if (typeof p == "number") {
        r.go(p);
        return;
      }
      let S = Sm(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      u == null && c !== "/" && (S.pathname = S.pathname === "/" ? c : dl([c, S.pathname])), (y.replace ? r.replace : r.push)(
        S,
        y.state,
        y
      );
    },
    [
      c,
      r,
      d,
      o,
      u
    ]
  );
}
x.createContext(null);
function tu(u, { relative: c } = {}) {
  let { matches: r } = x.useContext(ml), { pathname: s } = on(), o = JSON.stringify(vm(r));
  return x.useMemo(
    () => Sm(
      u,
      JSON.parse(o),
      s,
      c === "path"
    ),
    [u, o, s, c]
  );
}
function Rp(u, c) {
  return Cm(u, c);
}
function Cm(u, c, r, s, o) {
  _e(
    eu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = x.useContext(jt), { matches: h } = x.useContext(ml), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", S = g ? g.pathnameBase : "/", E = g && g.route;
  {
    let Y = E && E.path || "";
    zm(
      y,
      !E || Y.endsWith("*") || Y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y === "/" ? "*" : `${Y}/*`}">.`
    );
  }
  let U = on(), k;
  if (c) {
    let Y = typeof c == "string" ? Wn(c) : c;
    _e(
      S === "/" || Y.pathname?.startsWith(S),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${Y.pathname}" was given in the \`location\` prop.`
    ), k = Y;
  } else
    k = U;
  let w = k.pathname || "/", j = w;
  if (S !== "/") {
    let Y = S.replace(/^\//, "").split("/");
    j = "/" + w.replace(/^\//, "").split("/").slice(Y.length).join("/");
  }
  let M = mm(u, { pathname: j });
  qt(
    E || M != null,
    `No routes matched location "${k.pathname}${k.search}${k.hash}" `
  ), qt(
    M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let J = wp(
    M && M.map(
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
    r,
    s,
    o
  );
  return c && J ? /* @__PURE__ */ x.createElement(
    Pa.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...k
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    J
  ) : J;
}
function Tp() {
  let u = Up(), c = sp(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), r = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: s }, d = { padding: "2px 4px", backgroundColor: s }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), h = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ x.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ x.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ x.createElement("h3", { style: { fontStyle: "italic" } }, c), r ? /* @__PURE__ */ x.createElement("pre", { style: o }, r) : null, h);
}
var xp = /* @__PURE__ */ x.createElement(Tp, null), wm = class extends x.Component {
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
      const r = Sp(u.digest);
      r && (u = r);
    }
    let c = u !== void 0 ? /* @__PURE__ */ x.createElement(ml.Provider, { value: this.props.routeContext }, /* @__PURE__ */ x.createElement(
      To.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ x.createElement(Op, { error: u }, c) : c;
  }
};
wm.contextType = hp;
var co = /* @__PURE__ */ new WeakMap();
function Op({
  children: u,
  error: c
}) {
  let { basename: r } = x.useContext(jt);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let s = vp(c.digest);
    if (s) {
      let o = co.get(c);
      if (o) throw o;
      let d = Am(s.location, r);
      if (bm && !co.get(c))
        if (d.isExternal || s.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: s.replace
            })
          );
          throw co.set(c, h), h;
        }
      return /* @__PURE__ */ x.createElement(
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
function Cp({ routeContext: u, match: c, children: r }) {
  let s = x.useContext(In);
  return s && s.static && s.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = c.route.id), /* @__PURE__ */ x.createElement(ml.Provider, { value: u }, r);
}
function wp(u, c = [], r = null, s = null, o = null) {
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
    let S = d.findIndex(
      (E) => E.route.id && h?.[E.route.id] !== void 0
    );
    _e(
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
  if (r)
    for (let S = 0; S < d.length; S++) {
      let E = d[S];
      if ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (p = S), E.route.id) {
        let { loaderData: U, errors: k } = r, w = E.route.loader && !U.hasOwnProperty(E.route.id) && (!k || k[E.route.id] === void 0);
        if (E.route.lazy || w) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = r && s ? (S, E) => {
    s(S, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      unstable_pattern: fp(r.matches),
      errorInfo: E
    });
  } : void 0;
  return d.reduceRight(
    (S, E, U) => {
      let k, w = !1, j = null, M = null;
      r && (k = h && E.route.id ? h[E.route.id] : void 0, j = E.route.errorElement || xp, g && (p < 0 && U === 0 ? (zm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), w = !0, M = null) : p === U && (w = !0, M = E.route.hydrateFallbackElement || null)));
      let J = c.concat(d.slice(0, U + 1)), Y = () => {
        let X;
        return k ? X = j : w ? X = M : E.route.Component ? X = /* @__PURE__ */ x.createElement(E.route.Component, null) : E.route.element ? X = E.route.element : X = S, /* @__PURE__ */ x.createElement(
          Cp,
          {
            match: E,
            routeContext: {
              outlet: S,
              matches: J,
              isDataRoute: r != null
            },
            children: X
          }
        );
      };
      return r && (E.route.ErrorBoundary || E.route.errorElement || U === 0) ? /* @__PURE__ */ x.createElement(
        wm,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: j,
          error: k,
          children: Y(),
          routeContext: { outlet: null, matches: J, isDataRoute: !0 },
          onError: y
        }
      ) : Y();
    },
    null
  );
}
function xo(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zp(u) {
  let c = x.useContext(In);
  return _e(c, xo(u)), c;
}
function Dp(u) {
  let c = x.useContext(Ui);
  return _e(c, xo(u)), c;
}
function Mp(u) {
  let c = x.useContext(ml);
  return _e(c, xo(u)), c;
}
function Oo(u) {
  let c = Mp(u), r = c.matches[c.matches.length - 1];
  return _e(
    r.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Np() {
  return Oo(
    "useRouteId"
    /* UseRouteId */
  );
}
function Up() {
  let u = x.useContext(To), c = Dp(
    "useRouteError"
    /* UseRouteError */
  ), r = Oo(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : c.errors?.[r];
}
function Bp() {
  let { router: u } = zp(
    "useNavigate"
    /* UseNavigateStable */
  ), c = Oo(
    "useNavigate"
    /* UseNavigateStable */
  ), r = x.useRef(!1);
  return Om(() => {
    r.current = !0;
  }), x.useCallback(
    async (o, d = {}) => {
      qt(r.current, xm), r.current && (typeof o == "number" ? await u.navigate(o) : await u.navigate(o, { fromRouteId: c, ...d }));
    },
    [u, c]
  );
}
var Yh = {};
function zm(u, c, r) {
  !c && !Yh[u] && (Yh[u] = !0, qt(!1, r));
}
x.memo(jp);
function jp({
  routes: u,
  future: c,
  state: r,
  onError: s
}) {
  return Cm(u, void 0, r, s, c);
}
function Dm(u) {
  _e(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Hp({
  basename: u = "/",
  children: c = null,
  location: r,
  navigationType: s = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h
}) {
  _e(
    !eu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = x.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, o, d, h]
  );
  typeof r == "string" && (r = Wn(r));
  let {
    pathname: y = "/",
    search: S = "",
    hash: E = "",
    state: U = null,
    key: k = "default"
  } = r, w = x.useMemo(() => {
    let j = hl(y, g);
    return j == null ? null : {
      location: {
        pathname: j,
        search: S,
        hash: E,
        state: U,
        key: k
      },
      navigationType: s
    };
  }, [g, y, S, E, U, k, s]);
  return qt(
    w != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${S}${E}" because it does not start with the basename, so the <Router> won't render anything.`
  ), w == null ? null : /* @__PURE__ */ x.createElement(jt.Provider, { value: p }, /* @__PURE__ */ x.createElement(Pa.Provider, { children: c, value: w }));
}
function _p({
  children: u,
  location: c
}) {
  return Rp(vo(u), c);
}
function vo(u, c = []) {
  let r = [];
  return x.Children.forEach(u, (s, o) => {
    if (!x.isValidElement(s))
      return;
    let d = [...c, o];
    if (s.type === x.Fragment) {
      r.push.apply(
        r,
        vo(s.props.children, d)
      );
      return;
    }
    _e(
      s.type === Dm,
      `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), _e(
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
    s.props.children && (h.children = vo(
      s.props.children,
      d
    )), r.push(h);
  }), r;
}
var xi = "get", Oi = "application/x-www-form-urlencoded";
function Bi(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Lp(u) {
  return Bi(u) && u.tagName.toLowerCase() === "button";
}
function qp(u) {
  return Bi(u) && u.tagName.toLowerCase() === "form";
}
function kp(u) {
  return Bi(u) && u.tagName.toLowerCase() === "input";
}
function Qp(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Gp(u, c) {
  return u.button === 0 && // Ignore everything but left clicks
  (!c || c === "_self") && // Let browser handle "target=_blank" etc.
  !Qp(u);
}
var Ri = null;
function Yp() {
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
var Vp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ro(u) {
  return u != null && !Vp.has(u) ? (qt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oi}"`
  ), null) : u;
}
function Jp(u, c) {
  let r, s, o, d, h;
  if (qp(u)) {
    let g = u.getAttribute("action");
    s = g ? hl(g, c) : null, r = u.getAttribute("method") || xi, o = ro(u.getAttribute("enctype")) || Oi, d = new FormData(u);
  } else if (Lp(u) || kp(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (s = p ? hl(p, c) : null, r = u.getAttribute("formmethod") || g.getAttribute("method") || xi, o = ro(u.getAttribute("formenctype")) || ro(g.getAttribute("enctype")) || Oi, d = new FormData(g, u), !Yp()) {
      let { name: y, type: S, value: E } = u;
      if (S === "image") {
        let U = y ? `${y}.` : "";
        d.append(`${U}x`, "0"), d.append(`${U}y`, "0");
      } else y && d.append(y, E);
    }
  } else {
    if (Bi(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = xi, s = null, o = Oi, h = u;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: s, method: r.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Co(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function Xp(u, c, r) {
  let s = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return s.pathname === "/" ? s.pathname = `_root.${r}` : c && hl(s.pathname, c) === "/" ? s.pathname = `${c.replace(/\/$/, "")}/_root.${r}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${r}`, s;
}
async function Zp(u, c) {
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
function Kp(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Fp(u, c, r) {
  let s = await Promise.all(
    u.map(async (o) => {
      let d = c.routes[o.route.id];
      if (d) {
        let h = await Zp(d, r);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Pp(
    s.flat(1).filter(Kp).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function Vh(u, c, r, s, o, d) {
  let h = (p, y) => r[y] ? p.route.id !== r[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    r[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[y].route.path?.endsWith("*") && r[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? c.filter(
    (p, y) => h(p, y) || g(p, y)
  ) : d === "data" ? c.filter((p, y) => {
    let S = s.routes[p.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (h(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let E = p.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
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
function Wp(u, c, { includeHydrateFallback: r } = {}) {
  return Ip(
    u.map((s) => {
      let o = c.routes[s.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function Ip(u) {
  return [...new Set(u)];
}
function $p(u) {
  let c = {}, r = Object.keys(u).sort();
  for (let s of r)
    c[s] = u[s];
  return c;
}
function Pp(u, c) {
  let r = /* @__PURE__ */ new Set();
  return new Set(c), u.reduce((s, o) => {
    let d = JSON.stringify($p(o));
    return r.has(d) || (r.add(d), s.push({ key: d, link: o })), s;
  }, []);
}
function Mm() {
  let u = x.useContext(In);
  return Co(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function e1() {
  let u = x.useContext(Ui);
  return Co(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var wo = x.createContext(void 0);
wo.displayName = "FrameworkContext";
function Nm() {
  let u = x.useContext(wo);
  return Co(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function t1(u, c) {
  let r = x.useContext(wo), [s, o] = x.useState(!1), [d, h] = x.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: S, onTouchStart: E } = c, U = x.useRef(null);
  x.useEffect(() => {
    if (u === "render" && h(!0), u === "viewport") {
      let j = (J) => {
        J.forEach((Y) => {
          h(Y.isIntersecting);
        });
      }, M = new IntersectionObserver(j, { threshold: 0.5 });
      return U.current && M.observe(U.current), () => {
        M.disconnect();
      };
    }
  }, [u]), x.useEffect(() => {
    if (s) {
      let j = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [s]);
  let k = () => {
    o(!0);
  }, w = () => {
    o(!1), h(!1);
  };
  return r ? u !== "intent" ? [d, U, {}] : [
    d,
    U,
    {
      onFocus: Ka(g, k),
      onBlur: Ka(p, w),
      onMouseEnter: Ka(y, k),
      onMouseLeave: Ka(S, w),
      onTouchStart: Ka(E, k)
    }
  ] : [!1, U, {}];
}
function Ka(u, c) {
  return (r) => {
    u && u(r), r.defaultPrevented || c(r);
  };
}
function l1({ page: u, ...c }) {
  let { router: r } = Mm(), s = x.useMemo(
    () => mm(r.routes, u, r.basename),
    [r.routes, u, r.basename]
  );
  return s ? /* @__PURE__ */ x.createElement(a1, { page: u, matches: s, ...c }) : null;
}
function n1(u) {
  let { manifest: c, routeModules: r } = Nm(), [s, o] = x.useState([]);
  return x.useEffect(() => {
    let d = !1;
    return Fp(u, c, r).then(
      (h) => {
        d || o(h);
      }
    ), () => {
      d = !0;
    };
  }, [u, c, r]), s;
}
function a1({
  page: u,
  matches: c,
  ...r
}) {
  let s = on(), { manifest: o, routeModules: d } = Nm(), { basename: h } = Mm(), { loaderData: g, matches: p } = e1(), y = x.useMemo(
    () => Vh(
      u,
      c,
      p,
      o,
      s,
      "data"
    ),
    [u, c, p, o, s]
  ), S = x.useMemo(
    () => Vh(
      u,
      c,
      p,
      o,
      s,
      "assets"
    ),
    [u, c, p, o, s]
  ), E = x.useMemo(() => {
    if (u === s.pathname + s.search + s.hash)
      return [];
    let w = /* @__PURE__ */ new Set(), j = !1;
    if (c.forEach((J) => {
      let Y = o.routes[J.route.id];
      !Y || !Y.hasLoader || (!y.some((X) => X.route.id === J.route.id) && J.route.id in g && d[J.route.id]?.shouldRevalidate || Y.hasClientLoader ? j = !0 : w.add(J.route.id));
    }), w.size === 0)
      return [];
    let M = Xp(u, h, "data");
    return j && w.size > 0 && M.searchParams.set(
      "_routes",
      c.filter((J) => w.has(J.route.id)).map((J) => J.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    h,
    g,
    s,
    o,
    y,
    c,
    u,
    d
  ]), U = x.useMemo(
    () => Wp(S, o),
    [S, o]
  ), k = n1(S);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, E.map((w) => /* @__PURE__ */ x.createElement("link", { key: w, rel: "prefetch", as: "fetch", href: w, ...r })), U.map((w) => /* @__PURE__ */ x.createElement("link", { key: w, rel: "modulepreload", href: w, ...r })), k.map(({ key: w, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ x.createElement("link", { key: w, nonce: r.nonce, ...j })
  )));
}
function u1(...u) {
  return (c) => {
    u.forEach((r) => {
      typeof r == "function" ? r(c) : r != null && (r.current = c);
    });
  };
}
var i1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  i1 && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function c1({
  basename: u,
  children: c,
  unstable_useTransitions: r,
  window: s
}) {
  let o = x.useRef();
  o.current == null && (o.current = kg({ window: s, v5Compat: !0 }));
  let d = o.current, [h, g] = x.useState({
    action: d.action,
    location: d.location
  }), p = x.useCallback(
    (y) => {
      r === !1 ? g(y) : x.startTransition(() => g(y));
    },
    [r]
  );
  return x.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ x.createElement(
    Hp,
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
var Um = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Bm = x.forwardRef(
  function({
    onClick: c,
    discover: r = "render",
    prefetch: s = "none",
    relative: o,
    reloadDocument: d,
    replace: h,
    state: g,
    target: p,
    to: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: U,
    ...k
  }, w) {
    let { basename: j, unstable_useTransitions: M } = x.useContext(jt), J = typeof y == "string" && Um.test(y), Y = Am(y, j);
    y = Y.to;
    let X = bp(y, { relative: o }), [le, I, fe] = t1(
      s,
      k
    ), ne = f1(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: S,
      relative: o,
      viewTransition: E,
      unstable_defaultShouldRevalidate: U,
      unstable_useTransitions: M
    });
    function P(Re) {
      c && c(Re), Re.defaultPrevented || ne(Re);
    }
    let Ae = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ x.createElement(
        "a",
        {
          ...k,
          ...fe,
          href: Y.absoluteURL || X,
          onClick: Y.isExternal || d ? c : P,
          ref: u1(w, I),
          target: p,
          "data-discover": !J && r === "render" ? "true" : void 0
        }
      )
    );
    return le && !J ? /* @__PURE__ */ x.createElement(x.Fragment, null, Ae, /* @__PURE__ */ x.createElement(l1, { page: X })) : Ae;
  }
);
Bm.displayName = "Link";
var r1 = x.forwardRef(
  function({
    "aria-current": c = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: o = !1,
    style: d,
    to: h,
    viewTransition: g,
    children: p,
    ...y
  }, S) {
    let E = tu(h, { relative: y.relative }), U = on(), k = x.useContext(Ui), { navigator: w, basename: j } = x.useContext(jt), M = k != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    g1(E) && g === !0, J = w.encodeLocation ? w.encodeLocation(E).pathname : E.pathname, Y = U.pathname, X = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null;
    r || (Y = Y.toLowerCase(), X = X ? X.toLowerCase() : null, J = J.toLowerCase()), X && j && (X = hl(X, j) || X);
    const le = J !== "/" && J.endsWith("/") ? J.length - 1 : J.length;
    let I = Y === J || !o && Y.startsWith(J) && Y.charAt(le) === "/", fe = X != null && (X === J || !o && X.startsWith(J) && X.charAt(J.length) === "/"), ne = {
      isActive: I,
      isPending: fe,
      isTransitioning: M
    }, P = I ? c : void 0, Ae;
    typeof s == "function" ? Ae = s(ne) : Ae = [
      s,
      I ? "active" : null,
      fe ? "pending" : null,
      M ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Re = typeof d == "function" ? d(ne) : d;
    return /* @__PURE__ */ x.createElement(
      Bm,
      {
        ...y,
        "aria-current": P,
        className: Ae,
        ref: S,
        style: Re,
        to: h,
        viewTransition: g
      },
      typeof p == "function" ? p(ne) : p
    );
  }
);
r1.displayName = "NavLink";
var o1 = x.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: c,
    navigate: r,
    reloadDocument: s,
    replace: o,
    state: d,
    method: h = xi,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: U,
    ...k
  }, w) => {
    let { unstable_useTransitions: j } = x.useContext(jt), M = m1(), J = y1(g, { relative: y }), Y = h.toLowerCase() === "get" ? "get" : "post", X = typeof g == "string" && Um.test(g), le = (I) => {
      if (p && p(I), I.defaultPrevented) return;
      I.preventDefault();
      let fe = I.nativeEvent.submitter, ne = fe?.getAttribute("formmethod") || h, P = () => M(fe || I.currentTarget, {
        fetcherKey: c,
        method: ne,
        navigate: r,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: S,
        viewTransition: E,
        unstable_defaultShouldRevalidate: U
      });
      j && r !== !1 ? x.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ x.createElement(
      "form",
      {
        ref: w,
        method: Y,
        action: J,
        onSubmit: s ? p : le,
        ...k,
        "data-discover": !X && u === "render" ? "true" : void 0
      }
    );
  }
);
o1.displayName = "Form";
function s1(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jm(u) {
  let c = x.useContext(In);
  return _e(c, s1(u)), c;
}
function f1(u, {
  target: c,
  replace: r,
  state: s,
  preventScrollReset: o,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ap(), S = on(), E = tu(u, { relative: d });
  return x.useCallback(
    (U) => {
      if (Gp(U, c)) {
        U.preventDefault();
        let k = r !== void 0 ? r : $a(S) === $a(E), w = () => y(u, {
          replace: k,
          state: s,
          preventScrollReset: o,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? x.startTransition(() => w()) : w();
      }
    },
    [
      S,
      y,
      E,
      r,
      s,
      c,
      u,
      o,
      d,
      h,
      g,
      p
    ]
  );
}
var d1 = 0, h1 = () => `__${String(++d1)}__`;
function m1() {
  let { router: u } = jm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: c } = x.useContext(jt), r = Np(), s = u.fetch, o = u.navigate;
  return x.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: S, body: E } = Jp(
        d,
        c
      );
      if (h.navigate === !1) {
        let U = h.fetcherKey || h1();
        await s(U, r, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: S,
          body: E,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await o(h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: S,
          body: E,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          replace: h.replace,
          state: h.state,
          fromRouteId: r,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition
        });
    },
    [s, o, c, r]
  );
}
function y1(u, { relative: c } = {}) {
  let { basename: r } = x.useContext(jt), s = x.useContext(ml);
  _e(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1), d = { ...tu(u || ".", { relative: c }) }, h = on();
  if (u == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((S) => S === "")) {
      g.delete("index"), p.filter((E) => E).forEach((E) => g.append("index", E));
      let S = g.toString();
      d.search = S ? `?${S}` : "";
    }
  }
  return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (d.pathname = d.pathname === "/" ? r : dl([r, d.pathname])), $a(d);
}
function g1(u, { relative: c } = {}) {
  let r = x.useContext(Rm);
  _e(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = jm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = tu(u, { relative: c });
  if (!r.isTransitioning)
    return !1;
  let d = hl(r.currentLocation.pathname, s) || r.currentLocation.pathname, h = hl(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return Di(o.pathname, h) != null || Di(o.pathname, d) != null;
}
var oo = { exports: {} }, nt = {};
var Jh;
function p1() {
  if (Jh) return nt;
  Jh = 1;
  var u = Ro();
  function c(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, o = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, y, S) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
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
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, nt.createPortal = function(p, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return d(p, y, null, S);
  }, nt.flushSync = function(p) {
    var y = h.T, S = s.p;
    try {
      if (h.T = null, s.p = 2, p) return p();
    } finally {
      h.T = y, s.p = S, s.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var S = y.as, E = g(S, y.crossOrigin), U = typeof y.integrity == "string" ? y.integrity : void 0, k = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? s.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: E,
          integrity: U,
          fetchPriority: k
        }
      ) : S === "script" && s.d.X(p, {
        crossOrigin: E,
        integrity: U,
        fetchPriority: k,
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
          s.d.M(p, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(p);
  }, nt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, E = g(S, y.crossOrigin);
      s.d.L(p, S, {
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
        s.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(p);
  }, nt.requestFormReset = function(p) {
    s.d.r(p);
  }, nt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, nt.useFormState = function(p, y, S) {
    return h.H.useFormState(p, y, S);
  }, nt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Xh;
function v1() {
  if (Xh) return oo.exports;
  Xh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), oo.exports = p1(), oo.exports;
}
var so = { exports: {} }, Fa = {}, fo = { exports: {} }, ho = {};
var Zh;
function S1() {
  return Zh || (Zh = 1, (function(u) {
    function c(G, q) {
      var Q = G.length;
      G.push(q);
      e: for (; 0 < Q; ) {
        var se = Q - 1 >>> 1, $ = G[se];
        if (0 < o($, q))
          G[se] = q, G[Q] = $, Q = se;
        else break e;
      }
    }
    function r(G) {
      return G.length === 0 ? null : G[0];
    }
    function s(G) {
      if (G.length === 0) return null;
      var q = G[0], Q = G.pop();
      if (Q !== q) {
        G[0] = Q;
        e: for (var se = 0, $ = G.length, me = $ >>> 1; se < me; ) {
          var b = 2 * (se + 1) - 1, _ = G[b], V = b + 1, Z = G[V];
          if (0 > o(_, Q))
            V < $ && 0 > o(Z, _) ? (G[se] = Z, G[V] = Q, se = V) : (G[se] = _, G[b] = Q, se = b);
          else if (V < $ && 0 > o(Z, Q))
            G[se] = Z, G[V] = Q, se = V;
          else break e;
        }
      }
      return q;
    }
    function o(G, q) {
      var Q = G.sortIndex - q.sortIndex;
      return Q !== 0 ? Q : G.id - q.id;
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
    var p = [], y = [], S = 1, E = null, U = 3, k = !1, w = !1, j = !1, M = !1, J = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function le(G) {
      for (var q = r(y); q !== null; ) {
        if (q.callback === null) s(y);
        else if (q.startTime <= G)
          s(y), q.sortIndex = q.expirationTime, c(p, q);
        else break;
        q = r(y);
      }
    }
    function I(G) {
      if (j = !1, le(G), !w)
        if (r(p) !== null)
          w = !0, fe || (fe = !0, ve());
        else {
          var q = r(y);
          q !== null && Ke(I, q.startTime - G);
        }
    }
    var fe = !1, ne = -1, P = 5, Ae = -1;
    function Re() {
      return M ? !0 : !(u.unstable_now() - Ae < P);
    }
    function Ze() {
      if (M = !1, fe) {
        var G = u.unstable_now();
        Ae = G;
        var q = !0;
        try {
          e: {
            w = !1, j && (j = !1, Y(ne), ne = -1), k = !0;
            var Q = U;
            try {
              t: {
                for (le(G), E = r(p); E !== null && !(E.expirationTime > G && Re()); ) {
                  var se = E.callback;
                  if (typeof se == "function") {
                    E.callback = null, U = E.priorityLevel;
                    var $ = se(
                      E.expirationTime <= G
                    );
                    if (G = u.unstable_now(), typeof $ == "function") {
                      E.callback = $, le(G), q = !0;
                      break t;
                    }
                    E === r(p) && s(p), le(G);
                  } else s(p);
                  E = r(p);
                }
                if (E !== null) q = !0;
                else {
                  var me = r(y);
                  me !== null && Ke(
                    I,
                    me.startTime - G
                  ), q = !1;
                }
              }
              break e;
            } finally {
              E = null, U = Q, k = !1;
            }
            q = void 0;
          }
        } finally {
          q ? ve() : fe = !1;
        }
      }
    }
    var ve;
    if (typeof X == "function")
      ve = function() {
        X(Ze);
      };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), je = Le.port2;
      Le.port1.onmessage = Ze, ve = function() {
        je.postMessage(null);
      };
    } else
      ve = function() {
        J(Ze, 0);
      };
    function Ke(G, q) {
      ne = J(function() {
        G(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, u.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < G ? Math.floor(1e3 / G) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return U;
    }, u.unstable_next = function(G) {
      switch (U) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = U;
      }
      var Q = U;
      U = q;
      try {
        return G();
      } finally {
        U = Q;
      }
    }, u.unstable_requestPaint = function() {
      M = !0;
    }, u.unstable_runWithPriority = function(G, q) {
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
      var Q = U;
      U = G;
      try {
        return q();
      } finally {
        U = Q;
      }
    }, u.unstable_scheduleCallback = function(G, q, Q) {
      var se = u.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? se + Q : se) : Q = se, G) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return $ = Q + $, G = {
        id: S++,
        callback: q,
        priorityLevel: G,
        startTime: Q,
        expirationTime: $,
        sortIndex: -1
      }, Q > se ? (G.sortIndex = Q, c(y, G), r(p) === null && G === r(y) && (j ? (Y(ne), ne = -1) : j = !0, Ke(I, Q - se))) : (G.sortIndex = $, c(p, G), w || k || (w = !0, fe || (fe = !0, ve()))), G;
    }, u.unstable_shouldYield = Re, u.unstable_wrapCallback = function(G) {
      var q = U;
      return function() {
        var Q = U;
        U = q;
        try {
          return G.apply(this, arguments);
        } finally {
          U = Q;
        }
      };
    };
  })(ho)), ho;
}
var Kh;
function b1() {
  return Kh || (Kh = 1, fo.exports = S1()), fo.exports;
}
var Fh;
function A1() {
  if (Fh) return Fa;
  Fh = 1;
  var u = {};
  var c = b1(), r = Ro(), s = v1();
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
  function S(e) {
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
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = E(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var U = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), w = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), Y = /* @__PURE__ */ Symbol.for("react.profiler"), X = /* @__PURE__ */ Symbol.for("react.consumer"), le = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), fe = /* @__PURE__ */ Symbol.for("react.suspense"), ne = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), Ae = /* @__PURE__ */ Symbol.for("react.lazy"), Re = /* @__PURE__ */ Symbol.for("react.activity"), Ze = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function Le(e) {
    return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === je ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case Y:
        return "Profiler";
      case J:
        return "StrictMode";
      case fe:
        return "Suspense";
      case ne:
        return "SuspenseList";
      case Re:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case le:
          return e.displayName || "Context";
        case X:
          return (e._context.displayName || "Context") + ".Consumer";
        case I:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : Ke(e.type) || "Memo";
        case Ae:
          t = e._payload, e = e._init;
          try {
            return Ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var G = Array.isArray, q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, se = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $ = [], me = -1;
  function b(e) {
    return { current: e };
  }
  function _(e) {
    0 > me || (e.current = $[me], $[me] = null, me--);
  }
  function V(e, t) {
    me++, $[me] = e.current, e.current = t;
  }
  var Z = b(null), re = b(null), oe = b(null), te = b(null);
  function He(e, t) {
    switch (V(oe, t), V(re, e), V(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ah(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = ah(t), e = uh(t, e);
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
    _(Z), V(Z, e);
  }
  function Oe() {
    _(Z), _(re), _(oe);
  }
  function Qt(e) {
    e.memoizedState !== null && V(te, e);
    var t = Z.current, l = uh(t, e.type);
    t !== l && (V(re, e), V(Z, l));
  }
  function Gt(e) {
    re.current === e && (_(Z), _(re)), te.current === e && (_(te), Ya._currentValue = se);
  }
  var ea, Uo;
  function kl(e) {
    if (ea === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ea = t && t[1] || "", Uo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ea + e + Uo;
  }
  var Qi = !1;
  function Gi(e, t) {
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
                } catch (N) {
                  var C = N;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (N) {
                  C = N;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                C = N;
              }
              (L = e()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (N) {
            if (N && C && typeof N.stack == "string")
              return [N.stack, C.stack];
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
`), O = m.split(`
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
                  var B = `
` + v[n].replace(" at new ", " at ");
                  return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), B;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Qi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? kl(l) : "";
  }
  function m0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return kl(e.type);
      case 16:
        return kl("Lazy");
      case 13:
        return e.child !== t && t !== null ? kl("Suspense Fallback") : kl("Suspense");
      case 19:
        return kl("SuspenseList");
      case 0:
      case 15:
        return Gi(e.type, !1);
      case 11:
        return Gi(e.type.render, !1);
      case 1:
        return Gi(e.type, !0);
      case 31:
        return kl("Activity");
      default:
        return "";
    }
  }
  function Bo(e) {
    try {
      var t = "", l = null;
      do
        t += m0(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var Yi = Object.prototype.hasOwnProperty, Vi = c.unstable_scheduleCallback, Ji = c.unstable_cancelCallback, y0 = c.unstable_shouldYield, g0 = c.unstable_requestPaint, yt = c.unstable_now, p0 = c.unstable_getCurrentPriorityLevel, jo = c.unstable_ImmediatePriority, Ho = c.unstable_UserBlockingPriority, iu = c.unstable_NormalPriority, v0 = c.unstable_LowPriority, _o = c.unstable_IdlePriority, S0 = c.log, b0 = c.unstable_setDisableYieldValue, ta = null, gt = null;
  function yl(e) {
    if (typeof S0 == "function" && b0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ta, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : R0, A0 = Math.log, E0 = Math.LN2;
  function R0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (A0(e) / E0 | 0) | 0;
  }
  var cu = 256, ru = 262144, ou = 4194304;
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
  function su(e, t, l) {
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
  function T0(e, t) {
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
  function Lo() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Xi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function na(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function x0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, v = e.expirationTimes, O = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var B = 31 - pt(l), L = 1 << B;
      m[B] = 0, v[B] = -1;
      var C = O[B];
      if (C !== null)
        for (O[B] = null, B = 0; B < C.length; B++) {
          var N = C[B];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~L;
    }
    n !== 0 && qo(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function qo(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function ko(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Qo(e, t) {
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
  function Go() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : wh(e.type));
  }
  function Yo(e, t) {
    var l = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = l;
    }
  }
  var gl = Math.random().toString(36).slice(2), $e = "__reactFiber$" + gl, it = "__reactProps$" + gl, sn = "__reactContainer$" + gl, Fi = "__reactEvents$" + gl, O0 = "__reactListeners$" + gl, C0 = "__reactHandles$" + gl, Vo = "__reactResources$" + gl, aa = "__reactMarker$" + gl;
  function Wi(e) {
    delete e[$e], delete e[it], delete e[Fi], delete e[O0], delete e[C0];
  }
  function fn(e) {
    var t = e[$e];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[sn] || l[$e]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = dh(e); e !== null; ) {
            if (l = e[$e]) return l;
            e = dh(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function dn(e) {
    if (e = e[$e] || e[sn]) {
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
  function hn(e) {
    var t = e[Vo];
    return t || (t = e[Vo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function We(e) {
    e[aa] = !0;
  }
  var Jo = /* @__PURE__ */ new Set(), Xo = {};
  function Gl(e, t) {
    mn(e, t), mn(e + "Capture", t);
  }
  function mn(e, t) {
    for (Xo[e] = t, e = 0; e < t.length; e++)
      Jo.add(t[e]);
  }
  var w0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Zo = {}, Ko = {};
  function z0(e) {
    return Yi.call(Ko, e) ? !0 : Yi.call(Zo, e) ? !1 : w0.test(e) ? Ko[e] = !0 : (Zo[e] = !0, !1);
  }
  function fu(e, t, l) {
    if (z0(t))
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
  function Fo(e) {
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
  function Ii(e) {
    if (!e._valueTracker) {
      var t = Fo(e) ? "checked" : "value";
      e._valueTracker = D0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Wo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Fo(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function hu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var M0 = /[\n"\\]/g;
  function Ot(e) {
    return e.replace(
      M0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $i(e, t, l, n, a, i, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + xt(t)) : e.value !== "" + xt(t) && (e.value = "" + xt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Pi(e, f, xt(t)) : l != null ? Pi(e, f, xt(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + xt(m) : e.removeAttribute("name");
  }
  function Io(e, t, l, n, a, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Ii(e);
        return;
      }
      l = l != null ? "" + xt(l) : "", t = t != null ? "" + xt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Ii(e);
  }
  function Pi(e, t, l) {
    t === "number" && hu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function yn(e, t, l, n) {
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
  function $o(e, t, l) {
    if (t != null && (t = "" + xt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + xt(l) : "";
  }
  function Po(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(o(92));
        if (G(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = xt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Ii(e);
  }
  function gn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var N0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function es(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || N0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function ts(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && es(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && es(e, i, t[i]);
  }
  function ec(e) {
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
  var U0 = /* @__PURE__ */ new Map([
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
  function mu(e) {
    return B0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ft() {
  }
  var tc = null;
  function lc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var pn = null, vn = null;
  function ls(e) {
    var t = dn(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if ($i(
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
                if (!a) throw Error(o(90));
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
            for (t = 0; t < l.length; t++)
              n = l[t], n.form === e.form && Wo(n);
          }
          break e;
        case "textarea":
          $o(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && yn(e, !!l.multiple, t, !1);
      }
    }
  }
  var nc = !1;
  function ns(e, t, l) {
    if (nc) return e(t, l);
    nc = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (nc = !1, (pn !== null || vn !== null) && (ti(), pn && (t = pn, e = vn, vn = pn = null, ls(t), e)))
        for (t = 0; t < e.length; t++) ls(e[t]);
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
  var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ac = !1;
  if (Wt)
    try {
      var ca = {};
      Object.defineProperty(ca, "passive", {
        get: function() {
          ac = !0;
        }
      }), window.addEventListener("test", ca, ca), window.removeEventListener("test", ca, ca);
    } catch {
      ac = !1;
    }
  var pl = null, uc = null, yu = null;
  function as() {
    if (yu) return yu;
    var e, t = uc, l = t.length, n, a = "value" in pl ? pl.value : pl.textContent, i = a.length;
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
  function us() {
    return !1;
  }
  function ct(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? pu : us, this.isPropagationStopped = us, this;
    }
    return U(t.prototype, {
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
  var Yl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vu = ct(Yl), ra = U({}, Yl, { view: 0, detail: 0 }), j0 = ct(ra), ic, cc, oa, Su = U({}, ra, {
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
    getModifierState: oc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== oa && (oa && e.type === "mousemove" ? (ic = e.screenX - oa.screenX, cc = e.screenY - oa.screenY) : cc = ic = 0, oa = e), ic);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : cc;
    }
  }), is = ct(Su), H0 = U({}, Su, { dataTransfer: 0 }), _0 = ct(H0), L0 = U({}, ra, { relatedTarget: 0 }), rc = ct(L0), q0 = U({}, Yl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), k0 = ct(q0), Q0 = U({}, Yl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), G0 = ct(Q0), Y0 = U({}, Yl, { data: 0 }), cs = ct(Y0), V0 = {
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
  }, X0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Z0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = X0[e]) ? !!t[e] : !1;
  }
  function oc() {
    return Z0;
  }
  var K0 = U({}, ra, {
    key: function(e) {
      if (e.key) {
        var t = V0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oc,
    charCode: function(e) {
      return e.type === "keypress" ? gu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), F0 = ct(K0), W0 = U({}, Su, {
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
  }), rs = ct(W0), I0 = U({}, ra, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), $0 = ct(I0), P0 = U({}, Yl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = ct(P0), ty = U({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ly = ct(ty), ny = U({}, Yl, {
    newState: 0,
    oldState: 0
  }), ay = ct(ny), uy = [9, 13, 27, 32], sc = Wt && "CompositionEvent" in window, sa = null;
  Wt && "documentMode" in document && (sa = document.documentMode);
  var iy = Wt && "TextEvent" in window && !sa, os = Wt && (!sc || sa && 8 < sa && 11 >= sa), ss = " ", fs = !1;
  function ds(e, t) {
    switch (e) {
      case "keyup":
        return uy.indexOf(t.keyCode) !== -1;
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
  function hs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Sn = !1;
  function cy(e, t) {
    switch (e) {
      case "compositionend":
        return hs(t);
      case "keypress":
        return t.which !== 32 ? null : (fs = !0, ss);
      case "textInput":
        return e = t.data, e === ss && fs ? null : e;
      default:
        return null;
    }
  }
  function ry(e, t) {
    if (Sn)
      return e === "compositionend" || !sc && ds(e, t) ? (e = as(), yu = uc = pl = null, Sn = !1, e) : null;
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
        return os && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var oy = {
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
  function ms(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!oy[e.type] : t === "textarea";
  }
  function ys(e, t, l, n) {
    pn ? vn ? vn.push(n) : vn = [n] : pn = n, t = ri(t, "onChange"), 0 < t.length && (l = new vu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var fa = null, da = null;
  function sy(e) {
    $d(e, 0);
  }
  function bu(e) {
    var t = ua(e);
    if (Wo(t)) return e;
  }
  function gs(e, t) {
    if (e === "change") return t;
  }
  var ps = !1;
  if (Wt) {
    var fc;
    if (Wt) {
      var dc = "oninput" in document;
      if (!dc) {
        var vs = document.createElement("div");
        vs.setAttribute("oninput", "return;"), dc = typeof vs.oninput == "function";
      }
      fc = dc;
    } else fc = !1;
    ps = fc && (!document.documentMode || 9 < document.documentMode);
  }
  function Ss() {
    fa && (fa.detachEvent("onpropertychange", bs), da = fa = null);
  }
  function bs(e) {
    if (e.propertyName === "value" && bu(da)) {
      var t = [];
      ys(
        t,
        da,
        e,
        lc(e)
      ), ns(sy, t);
    }
  }
  function fy(e, t, l) {
    e === "focusin" ? (Ss(), fa = t, da = l, fa.attachEvent("onpropertychange", bs)) : e === "focusout" && Ss();
  }
  function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bu(da);
  }
  function hy(e, t) {
    if (e === "click") return bu(t);
  }
  function my(e, t) {
    if (e === "input" || e === "change")
      return bu(t);
  }
  function yy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : yy;
  function ha(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!Yi.call(t, a) || !vt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function As(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Es(e, t) {
    var l = As(e);
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
      l = As(l);
    }
  }
  function Rs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ts(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = hu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = hu(e.document);
    }
    return t;
  }
  function hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gy = Wt && "documentMode" in document && 11 >= document.documentMode, bn = null, mc = null, ma = null, yc = !1;
  function xs(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    yc || bn == null || bn !== hu(n) || (n = bn, "selectionStart" in n && hc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ma && ha(ma, n) || (ma = n, n = ri(mc, "onSelect"), 0 < n.length && (t = new vu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = bn)));
  }
  function Vl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var An = {
    animationend: Vl("Animation", "AnimationEnd"),
    animationiteration: Vl("Animation", "AnimationIteration"),
    animationstart: Vl("Animation", "AnimationStart"),
    transitionrun: Vl("Transition", "TransitionRun"),
    transitionstart: Vl("Transition", "TransitionStart"),
    transitioncancel: Vl("Transition", "TransitionCancel"),
    transitionend: Vl("Transition", "TransitionEnd")
  }, gc = {}, Os = {};
  Wt && (Os = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
  function Jl(e) {
    if (gc[e]) return gc[e];
    if (!An[e]) return e;
    var t = An[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Os)
        return gc[e] = t[l];
    return e;
  }
  var Cs = Jl("animationend"), ws = Jl("animationiteration"), zs = Jl("animationstart"), py = Jl("transitionrun"), vy = Jl("transitionstart"), Sy = Jl("transitioncancel"), Ds = Jl("transitionend"), Ms = /* @__PURE__ */ new Map(), pc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  pc.push("scrollEnd");
  function Ht(e, t) {
    Ms.set(e, t), Gl(t, [e]);
  }
  var Au = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ct = [], En = 0, vc = 0;
  function Eu() {
    for (var e = En, t = vc = En = 0; t < e; ) {
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
      i !== 0 && Ns(l, a, i);
    }
  }
  function Ru(e, t, l, n) {
    Ct[En++] = e, Ct[En++] = t, Ct[En++] = l, Ct[En++] = n, vc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Sc(e, t, l, n) {
    return Ru(e, t, l, n), Tu(e);
  }
  function Xl(e, t) {
    return Ru(e, null, null, t), Tu(e);
  }
  function Ns(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Tu(e) {
    if (50 < Ha)
      throw Ha = 0, wr = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Rn = {};
  function by(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function St(e, t, l, n) {
    return new by(e, t, l, n);
  }
  function bc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function It(e, t) {
    var l = e.alternate;
    return l === null ? (l = St(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Us(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function xu(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") bc(e) && (f = 1);
    else if (typeof e == "string")
      f = xg(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Re:
          return e = St(31, l, t, a), e.elementType = Re, e.lanes = i, e;
        case M:
          return Zl(l.children, a, i, t);
        case J:
          f = 8, a |= 24;
          break;
        case Y:
          return e = St(12, l, t, a | 2), e.elementType = Y, e.lanes = i, e;
        case fe:
          return e = St(13, l, t, a), e.elementType = fe, e.lanes = i, e;
        case ne:
          return e = St(19, l, t, a), e.elementType = ne, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case le:
                f = 10;
                break e;
              case X:
                f = 9;
                break e;
              case I:
                f = 11;
                break e;
              case P:
                f = 14;
                break e;
              case Ae:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = St(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Zl(e, t, l, n) {
    return e = St(7, e, n, t), e.lanes = l, e;
  }
  function Ac(e, t, l) {
    return e = St(6, e, null, t), e.lanes = l, e;
  }
  function Bs(e) {
    var t = St(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ec(e, t, l) {
    return t = St(
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
  var js = /* @__PURE__ */ new WeakMap();
  function wt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = js.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Bo(t)
      }, js.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Bo(t)
    };
  }
  var Tn = [], xn = 0, Ou = null, ya = 0, zt = [], Dt = 0, vl = null, Yt = 1, Vt = "";
  function $t(e, t) {
    Tn[xn++] = ya, Tn[xn++] = Ou, Ou = e, ya = t;
  }
  function Hs(e, t, l) {
    zt[Dt++] = Yt, zt[Dt++] = Vt, zt[Dt++] = vl, vl = e;
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
  function Rc(e) {
    e.return !== null && ($t(e, 1), Hs(e, 1, 0));
  }
  function Tc(e) {
    for (; e === Ou; )
      Ou = Tn[--xn], Tn[xn] = null, ya = Tn[--xn], Tn[xn] = null;
    for (; e === vl; )
      vl = zt[--Dt], zt[Dt] = null, Vt = zt[--Dt], zt[Dt] = null, Yt = zt[--Dt], zt[Dt] = null;
  }
  function _s(e, t) {
    zt[Dt++] = Yt, zt[Dt++] = Vt, zt[Dt++] = vl, Yt = t.id, Vt = t.overflow, vl = e;
  }
  var Pe = null, Me = null, pe = !1, Sl = null, Mt = !1, xc = Error(o(519));
  function bl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ga(wt(t, e)), xc;
  }
  function Ls(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[$e] = e, t[it] = n, l) {
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
        for (l = 0; l < La.length; l++)
          he(La[l], t);
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
        he("invalid", t), Io(
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
        he("invalid", t), Po(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || lh(t.textContent, l) ? (n.popover != null && (he("beforetoggle", t), he("toggle", t)), n.onScroll != null && he("scroll", t), n.onScrollEnd != null && he("scrollend", t), n.onClick != null && (t.onclick = Ft), t = !0) : t = !1, t || bl(e, !0);
  }
  function qs(e) {
    for (Pe = e.return; Pe; )
      switch (Pe.tag) {
        case 5:
        case 31:
        case 13:
          Mt = !1;
          return;
        case 27:
        case 3:
          Mt = !0;
          return;
        default:
          Pe = Pe.return;
      }
  }
  function On(e) {
    if (e !== Pe) return !1;
    if (!pe) return qs(e), pe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Yr(e.type, e.memoizedProps)), l = !l), l && Me && bl(e), qs(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = fh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = fh(e);
    } else
      t === 27 ? (t = Me, Bl(e.type) ? (e = Kr, Kr = null, Me = e) : Me = t) : Me = Pe ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Kl() {
    Me = Pe = null, pe = !1;
  }
  function Oc() {
    var e = Sl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), Sl = null), e;
  }
  function ga(e) {
    Sl === null ? Sl = [e] : Sl.push(e);
  }
  var Cc = b(null), Fl = null, Pt = null;
  function Al(e, t, l) {
    V(Cc, t._currentValue), t._currentValue = l;
  }
  function el(e) {
    e._currentValue = Cc.current, _(Cc);
  }
  function wc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function zc(e, t, l, n) {
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
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), wc(
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
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), wc(f, l, e), f = null;
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
  function Cn(e, t, l, n) {
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
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ya) : e = [Ya]);
      }
      a = a.return;
    }
    e !== null && zc(
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
  function Wl(e) {
    Fl = e, Pt = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return ks(Fl, e);
  }
  function wu(e, t) {
    return Fl === null && Wl(e), ks(e, t);
  }
  function ks(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, Pt === null) {
      if (e === null) throw Error(o(308));
      Pt = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Pt = Pt.next = t;
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
  }, Ey = c.unstable_scheduleCallback, Ry = c.unstable_NormalPriority, Ye = {
    $$typeof: le,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dc() {
    return {
      controller: new Ay(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pa(e) {
    e.refCount--, e.refCount === 0 && Ey(Ry, function() {
      e.controller.abort();
    });
  }
  var va = null, Mc = 0, wn = 0, zn = null;
  function Ty(e, t) {
    if (va === null) {
      var l = va = [];
      Mc = 0, wn = Br(), zn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Mc++, t.then(Qs, Qs), t;
  }
  function Qs() {
    if (--Mc === 0 && va !== null) {
      zn !== null && (zn.status = "fulfilled");
      var e = va;
      va = null, wn = 0, zn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xy(e, t) {
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
  var Gs = q.S;
  q.S = function(e, t) {
    Od = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && Ty(e, t), Gs !== null && Gs(e, t);
  };
  var Il = b(null);
  function Nc() {
    var e = Il.current;
    return e !== null ? e : De.pooledCache;
  }
  function zu(e, t) {
    t === null ? V(Il, Il.current) : V(Il, t.pool);
  }
  function Ys() {
    var e = Nc();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Dn = Error(o(460)), Uc = Error(o(474)), Du = Error(o(542)), Mu = { then: function() {
  } };
  function Vs(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Js(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Ft, Ft), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Zs(e), e;
      default:
        if (typeof t.status == "string") t.then(Ft, Ft);
        else {
          if (e = De, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Zs(e), e;
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
  function Xs() {
    if (Pl === null) throw Error(o(459));
    var e = Pl;
    return Pl = null, e;
  }
  function Zs(e) {
    if (e === Dn || e === Du)
      throw Error(o(483));
  }
  var Mn = null, Sa = 0;
  function Nu(e) {
    var t = Sa;
    return Sa += 1, Mn === null && (Mn = []), Js(Mn, e, t);
  }
  function ba(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Uu(e, t) {
    throw t.$$typeof === k ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ks(e) {
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
    function m(R, A, T, H) {
      return A === null || A.tag !== 6 ? (A = Ac(T, R.mode, H), A.return = R, A) : (A = a(A, T), A.return = R, A);
    }
    function v(R, A, T, H) {
      var W = T.type;
      return W === M ? B(
        R,
        A,
        T.props.children,
        H,
        T.key
      ) : A !== null && (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ae && $l(W) === A.type) ? (A = a(A, T.props), ba(A, T), A.return = R, A) : (A = xu(
        T.type,
        T.key,
        T.props,
        null,
        R.mode,
        H
      ), ba(A, T), A.return = R, A);
    }
    function O(R, A, T, H) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== T.containerInfo || A.stateNode.implementation !== T.implementation ? (A = Ec(T, R.mode, H), A.return = R, A) : (A = a(A, T.children || []), A.return = R, A);
    }
    function B(R, A, T, H, W) {
      return A === null || A.tag !== 7 ? (A = Zl(
        T,
        R.mode,
        H,
        W
      ), A.return = R, A) : (A = a(A, T), A.return = R, A);
    }
    function L(R, A, T) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Ac(
          "" + A,
          R.mode,
          T
        ), A.return = R, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case w:
            return T = xu(
              A.type,
              A.key,
              A.props,
              null,
              R.mode,
              T
            ), ba(T, A), T.return = R, T;
          case j:
            return A = Ec(
              A,
              R.mode,
              T
            ), A.return = R, A;
          case Ae:
            return A = $l(A), L(R, A, T);
        }
        if (G(A) || Le(A))
          return A = Zl(
            A,
            R.mode,
            T,
            null
          ), A.return = R, A;
        if (typeof A.then == "function")
          return L(R, Nu(A), T);
        if (A.$$typeof === le)
          return L(
            R,
            wu(R, A),
            T
          );
        Uu(R, A);
      }
      return null;
    }
    function C(R, A, T, H) {
      var W = A !== null ? A.key : null;
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return W !== null ? null : m(R, A, "" + T, H);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case w:
            return T.key === W ? v(R, A, T, H) : null;
          case j:
            return T.key === W ? O(R, A, T, H) : null;
          case Ae:
            return T = $l(T), C(R, A, T, H);
        }
        if (G(T) || Le(T))
          return W !== null ? null : B(R, A, T, H, null);
        if (typeof T.then == "function")
          return C(
            R,
            A,
            Nu(T),
            H
          );
        if (T.$$typeof === le)
          return C(
            R,
            A,
            wu(R, T),
            H
          );
        Uu(R, T);
      }
      return null;
    }
    function N(R, A, T, H, W) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return R = R.get(T) || null, m(A, R, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case w:
            return R = R.get(
              H.key === null ? T : H.key
            ) || null, v(A, R, H, W);
          case j:
            return R = R.get(
              H.key === null ? T : H.key
            ) || null, O(A, R, H, W);
          case Ae:
            return H = $l(H), N(
              R,
              A,
              T,
              H,
              W
            );
        }
        if (G(H) || Le(H))
          return R = R.get(T) || null, B(A, R, H, W, null);
        if (typeof H.then == "function")
          return N(
            R,
            A,
            T,
            Nu(H),
            W
          );
        if (H.$$typeof === le)
          return N(
            R,
            A,
            T,
            wu(A, H),
            W
          );
        Uu(A, H);
      }
      return null;
    }
    function K(R, A, T, H) {
      for (var W = null, Se = null, F = A, ce = A = 0, ge = null; F !== null && ce < T.length; ce++) {
        F.index > ce ? (ge = F, F = null) : ge = F.sibling;
        var be = C(
          R,
          F,
          T[ce],
          H
        );
        if (be === null) {
          F === null && (F = ge);
          break;
        }
        e && F && be.alternate === null && t(R, F), A = i(be, A, ce), Se === null ? W = be : Se.sibling = be, Se = be, F = ge;
      }
      if (ce === T.length)
        return l(R, F), pe && $t(R, ce), W;
      if (F === null) {
        for (; ce < T.length; ce++)
          F = L(R, T[ce], H), F !== null && (A = i(
            F,
            A,
            ce
          ), Se === null ? W = F : Se.sibling = F, Se = F);
        return pe && $t(R, ce), W;
      }
      for (F = n(F); ce < T.length; ce++)
        ge = N(
          F,
          R,
          ce,
          T[ce],
          H
        ), ge !== null && (e && ge.alternate !== null && F.delete(
          ge.key === null ? ce : ge.key
        ), A = i(
          ge,
          A,
          ce
        ), Se === null ? W = ge : Se.sibling = ge, Se = ge);
      return e && F.forEach(function(ql) {
        return t(R, ql);
      }), pe && $t(R, ce), W;
    }
    function ee(R, A, T, H) {
      if (T == null) throw Error(o(151));
      for (var W = null, Se = null, F = A, ce = A = 0, ge = null, be = T.next(); F !== null && !be.done; ce++, be = T.next()) {
        F.index > ce ? (ge = F, F = null) : ge = F.sibling;
        var ql = C(R, F, be.value, H);
        if (ql === null) {
          F === null && (F = ge);
          break;
        }
        e && F && ql.alternate === null && t(R, F), A = i(ql, A, ce), Se === null ? W = ql : Se.sibling = ql, Se = ql, F = ge;
      }
      if (be.done)
        return l(R, F), pe && $t(R, ce), W;
      if (F === null) {
        for (; !be.done; ce++, be = T.next())
          be = L(R, be.value, H), be !== null && (A = i(be, A, ce), Se === null ? W = be : Se.sibling = be, Se = be);
        return pe && $t(R, ce), W;
      }
      for (F = n(F); !be.done; ce++, be = T.next())
        be = N(F, R, ce, be.value, H), be !== null && (e && be.alternate !== null && F.delete(be.key === null ? ce : be.key), A = i(be, A, ce), Se === null ? W = be : Se.sibling = be, Se = be);
      return e && F.forEach(function(Hg) {
        return t(R, Hg);
      }), pe && $t(R, ce), W;
    }
    function ze(R, A, T, H) {
      if (typeof T == "object" && T !== null && T.type === M && T.key === null && (T = T.props.children), typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case w:
            e: {
              for (var W = T.key; A !== null; ) {
                if (A.key === W) {
                  if (W = T.type, W === M) {
                    if (A.tag === 7) {
                      l(
                        R,
                        A.sibling
                      ), H = a(
                        A,
                        T.props.children
                      ), H.return = R, R = H;
                      break e;
                    }
                  } else if (A.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ae && $l(W) === A.type) {
                    l(
                      R,
                      A.sibling
                    ), H = a(A, T.props), ba(H, T), H.return = R, R = H;
                    break e;
                  }
                  l(R, A);
                  break;
                } else t(R, A);
                A = A.sibling;
              }
              T.type === M ? (H = Zl(
                T.props.children,
                R.mode,
                H,
                T.key
              ), H.return = R, R = H) : (H = xu(
                T.type,
                T.key,
                T.props,
                null,
                R.mode,
                H
              ), ba(H, T), H.return = R, R = H);
            }
            return f(R);
          case j:
            e: {
              for (W = T.key; A !== null; ) {
                if (A.key === W)
                  if (A.tag === 4 && A.stateNode.containerInfo === T.containerInfo && A.stateNode.implementation === T.implementation) {
                    l(
                      R,
                      A.sibling
                    ), H = a(A, T.children || []), H.return = R, R = H;
                    break e;
                  } else {
                    l(R, A);
                    break;
                  }
                else t(R, A);
                A = A.sibling;
              }
              H = Ec(T, R.mode, H), H.return = R, R = H;
            }
            return f(R);
          case Ae:
            return T = $l(T), ze(
              R,
              A,
              T,
              H
            );
        }
        if (G(T))
          return K(
            R,
            A,
            T,
            H
          );
        if (Le(T)) {
          if (W = Le(T), typeof W != "function") throw Error(o(150));
          return T = W.call(T), ee(
            R,
            A,
            T,
            H
          );
        }
        if (typeof T.then == "function")
          return ze(
            R,
            A,
            Nu(T),
            H
          );
        if (T.$$typeof === le)
          return ze(
            R,
            A,
            wu(R, T),
            H
          );
        Uu(R, T);
      }
      return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (T = "" + T, A !== null && A.tag === 6 ? (l(R, A.sibling), H = a(A, T), H.return = R, R = H) : (l(R, A), H = Ac(T, R.mode, H), H.return = R, R = H), f(R)) : l(R, A);
    }
    return function(R, A, T, H) {
      try {
        Sa = 0;
        var W = ze(
          R,
          A,
          T,
          H
        );
        return Mn = null, W;
      } catch (F) {
        if (F === Dn || F === Du) throw F;
        var Se = St(29, F, null, R.mode);
        return Se.lanes = H, Se.return = R, Se;
      }
    };
  }
  var en = Ks(!0), Fs = Ks(!1), El = !1;
  function Bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function jc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ee & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Tu(e), Ns(e, null, l), t;
    }
    return Ru(e, n, t, l), Tu(e);
  }
  function Aa(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, ko(e, l);
    }
  }
  function Hc(e, t) {
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
  var _c = !1;
  function Ea() {
    if (_c) {
      var e = zn;
      if (e !== null) throw e;
    }
  }
  function Ra(e, t, l, n) {
    _c = !1;
    var a = e.updateQueue;
    El = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var v = m, O = v.next;
      v.next = null, f === null ? i = O : f.next = O, f = v;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, m = B.lastBaseUpdate, m !== f && (m === null ? B.firstBaseUpdate = O : m.next = O, B.lastBaseUpdate = v));
    }
    if (i !== null) {
      var L = a.baseState;
      f = 0, B = O = v = null, m = i;
      do {
        var C = m.lane & -536870913, N = C !== m.lane;
        if (N ? (ye & C) === C : (n & C) === C) {
          C !== 0 && C === wn && (_c = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var K = e, ee = m;
            C = t;
            var ze = l;
            switch (ee.tag) {
              case 1:
                if (K = ee.payload, typeof K == "function") {
                  L = K.call(ze, L, C);
                  break e;
                }
                L = K;
                break e;
              case 3:
                K.flags = K.flags & -65537 | 128;
              case 0:
                if (K = ee.payload, C = typeof K == "function" ? K.call(ze, L, C) : K, C == null) break e;
                L = U({}, L, C);
                break e;
              case 2:
                El = !0;
            }
          }
          C = m.callback, C !== null && (e.flags |= 64, N && (e.flags |= 8192), N = a.callbacks, N === null ? a.callbacks = [C] : N.push(C));
        } else
          N = {
            lane: C,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, B === null ? (O = B = N, v = L) : B = B.next = N, f |= C;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          N = m, m = N.next, N.next = null, a.lastBaseUpdate = N, a.shared.pending = null;
        }
      } while (!0);
      B === null && (v = L), a.baseState = v, a.firstBaseUpdate = O, a.lastBaseUpdate = B, i === null && (a.shared.lanes = 0), zl |= f, e.lanes = f, e.memoizedState = L;
    }
  }
  function Ws(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Is(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Ws(l[e], t);
  }
  var Nn = b(null), Bu = b(0);
  function $s(e, t) {
    e = ol, V(Bu, e), V(Nn, t), ol = e | t.baseLanes;
  }
  function Lc() {
    V(Bu, ol), V(Nn, Nn.current);
  }
  function qc() {
    ol = Bu.current, _(Nn), _(Bu);
  }
  var bt = b(null), Nt = null;
  function xl(e) {
    var t = e.alternate;
    V(Qe, Qe.current & 1), V(bt, e), Nt === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (Nt = e);
  }
  function kc(e) {
    V(Qe, Qe.current), V(bt, e), Nt === null && (Nt = e);
  }
  function Ps(e) {
    e.tag === 22 ? (V(Qe, Qe.current), V(bt, e), Nt === null && (Nt = e)) : Ol();
  }
  function Ol() {
    V(Qe, Qe.current), V(bt, bt.current);
  }
  function At(e) {
    _(bt), Nt === e && (Nt = null), _(Qe);
  }
  var Qe = b(0);
  function ju(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Xr(l) || Zr(l)))
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
  var tl = 0, ue = null, Ce = null, Ve = null, Hu = !1, Un = !1, tn = !1, _u = 0, Ta = 0, Bn = null, Oy = 0;
  function qe() {
    throw Error(o(321));
  }
  function Qc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Gc(e, t, l, n, a, i) {
    return tl = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? _f : nr, tn = !1, i = l(n, a), tn = !1, Un && (i = tf(
      t,
      l,
      n,
      a
    )), ef(e), i;
  }
  function ef(e) {
    q.H = Ca;
    var t = Ce !== null && Ce.next !== null;
    if (tl = 0, Ve = Ce = ue = null, Hu = !1, Ta = 0, Bn = null, t) throw Error(o(300));
    e === null || Je || (e = e.dependencies, e !== null && Cu(e) && (Je = !0));
  }
  function tf(e, t, l, n) {
    ue = e;
    var a = 0;
    do {
      if (Un && (Bn = null), Ta = 0, Un = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Ve = Ce = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      q.H = Lf, i = t(l, n);
    } while (Un);
    return i;
  }
  function Cy() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? xa(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Yc() {
    var e = _u !== 0;
    return _u = 0, e;
  }
  function Vc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Jc(e) {
    if (Hu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Hu = !1;
    }
    tl = 0, Ve = Ce = ue = null, Un = !1, Ta = _u = 0, Bn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ve === null ? ue.memoizedState = Ve = e : Ve = Ve.next = e, Ve;
  }
  function Ge() {
    if (Ce === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Ve === null ? ue.memoizedState : Ve.next;
    if (t !== null)
      Ve = t, Ce = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(o(467)) : Error(o(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, Ve === null ? ue.memoizedState = Ve = e : Ve = Ve.next = e;
    }
    return Ve;
  }
  function Lu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xa(e) {
    var t = Ta;
    return Ta += 1, Bn === null && (Bn = []), e = Js(Bn, e, t), t = ue, (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? _f : nr), e;
  }
  function qu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return xa(e);
      if (e.$$typeof === le) return et(e);
    }
    throw Error(o(438, String(e)));
  }
  function Xc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Lu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Ze;
    return t.index++, l;
  }
  function ll(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ku(e) {
    var t = Ge();
    return Zc(t, Ce, e);
  }
  function Zc(e, t, l) {
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
      var m = f = null, v = null, O = t, B = !1;
      do {
        var L = O.lane & -536870913;
        if (L !== O.lane ? (ye & L) === L : (tl & L) === L) {
          var C = O.revertLane;
          if (C === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), L === wn && (B = !0);
          else if ((tl & C) === C) {
            O = O.next, C === wn && (B = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, v === null ? (m = v = L, f = i) : v = v.next = L, ue.lanes |= C, zl |= C;
          L = O.action, tn && l(i, L), i = O.hasEagerState ? O.eagerState : l(i, L);
        } else
          C = {
            lane: L,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, v === null ? (m = v = C, f = i) : v = v.next = C, ue.lanes |= L, zl |= L;
        O = O.next;
      } while (O !== null && O !== t);
      if (v === null ? f = i : v.next = m, !vt(i, e.memoizedState) && (Je = !0, B && (l = zn, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Kc(e) {
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
      vt(i, t.memoizedState) || (Je = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function lf(e, t, l) {
    var n = ue, a = Ge(), i = pe;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !vt(
      (Ce || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, Je = !0), a = a.queue, Ic(uf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ve !== null && Ve.memoizedState.tag & 1) {
      if (n.flags |= 2048, jn(
        9,
        { destroy: void 0 },
        af.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), De === null) throw Error(o(349));
      i || (tl & 127) !== 0 || nf(n, t, l);
    }
    return l;
  }
  function nf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = Lu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function af(e, t, l, n) {
    t.value = l, t.getSnapshot = n, cf(t) && rf(e);
  }
  function uf(e, t, l) {
    return l(function() {
      cf(t) && rf(e);
    });
  }
  function cf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l);
    } catch {
      return !0;
    }
  }
  function rf(e) {
    var t = Xl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Fc(e) {
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
  function of(e, t, l, n) {
    return e.baseState = l, Zc(
      e,
      Ce,
      typeof n == "function" ? n : ll
    );
  }
  function wy(e, t, l, n, a) {
    if (Yu(e)) throw Error(o(485));
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
      q.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, sf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function sf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = q.T, f = {};
      q.T = f;
      try {
        var m = l(a, n), v = q.S;
        v !== null && v(f, m), ff(e, t, m);
      } catch (O) {
        Wc(e, t, O);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
      }
    } else
      try {
        i = l(a, n), ff(e, t, i);
      } catch (O) {
        Wc(e, t, O);
      }
  }
  function ff(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        df(e, t, n);
      },
      function(n) {
        return Wc(e, t, n);
      }
    ) : df(e, t, l);
  }
  function df(e, t, l) {
    t.status = "fulfilled", t.value = l, hf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, sf(e, l)));
  }
  function Wc(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, hf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function hf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function mf(e, t) {
    return t;
  }
  function yf(e, t) {
    if (pe) {
      var l = De.formState;
      if (l !== null) {
        e: {
          var n = ue;
          if (pe) {
            if (Me) {
              t: {
                for (var a = Me, i = Mt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Ut(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Me = Ut(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            bl(n);
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
      lastRenderedReducer: mf,
      lastRenderedState: t
    }, l.queue = n, l = Bf.bind(
      null,
      ue,
      n
    ), n.dispatch = l, n = Fc(!1), i = lr.bind(
      null,
      ue,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = wy.bind(
      null,
      ue,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function gf(e) {
    var t = Ge();
    return pf(t, Ce, e);
  }
  function pf(e, t, l) {
    if (t = Zc(
      e,
      t,
      mf
    )[0], e = ku(ll)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = xa(t);
      } catch (f) {
        throw f === Dn ? Du : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, jn(
      9,
      { destroy: void 0 },
      zy.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function zy(e, t) {
    e.action = t;
  }
  function vf(e) {
    var t = Ge(), l = Ce;
    if (l !== null)
      return pf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function jn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Lu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Sf() {
    return Ge().memoizedState;
  }
  function Qu(e, t, l, n) {
    var a = ut();
    ue.flags |= e, a.memoizedState = jn(
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
    Ce !== null && n !== null && Qc(n, Ce.memoizedState.deps) ? a.memoizedState = jn(t, i, l, n) : (ue.flags |= e, a.memoizedState = jn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function bf(e, t) {
    Qu(8390656, 8, e, t);
  }
  function Ic(e, t) {
    Gu(2048, 8, e, t);
  }
  function Dy(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Lu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Af(e) {
    var t = Ge().memoizedState;
    return Dy({ ref: t, nextImpl: e }), function() {
      if ((Ee & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ef(e, t) {
    return Gu(4, 2, e, t);
  }
  function Rf(e, t) {
    return Gu(4, 4, e, t);
  }
  function Tf(e, t) {
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
  function xf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Gu(4, 4, Tf.bind(null, t, e), l);
  }
  function $c() {
  }
  function Of(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Qc(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Cf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Qc(t, n[1]))
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
  function Pc(e, t, l) {
    return l === void 0 || (tl & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = wd(), ue.lanes |= e, zl |= e, l);
  }
  function wf(e, t, l, n) {
    return vt(l, t) ? l : Nn.current !== null ? (e = Pc(e, l, n), vt(e, t) || (Je = !0), e) : (tl & 42) === 0 || (tl & 1073741824) !== 0 && (ye & 261930) === 0 ? (Je = !0, e.memoizedState = l) : (e = wd(), ue.lanes |= e, zl |= e, t);
  }
  function zf(e, t, l, n, a) {
    var i = Q.p;
    Q.p = i !== 0 && 8 > i ? i : 8;
    var f = q.T, m = {};
    q.T = m, lr(e, !1, t, l);
    try {
      var v = a(), O = q.S;
      if (O !== null && O(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var B = xy(
          v,
          n
        );
        Oa(
          e,
          t,
          B,
          Tt(e)
        );
      } else
        Oa(
          e,
          t,
          n,
          Tt(e)
        );
    } catch (L) {
      Oa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        Tt()
      );
    } finally {
      Q.p = i, f !== null && m.types !== null && (f.types = m.types), q.T = f;
    }
  }
  function My() {
  }
  function er(e, t, l, n) {
    if (e.tag !== 5) throw Error(o(476));
    var a = Df(e).queue;
    zf(
      e,
      a,
      t,
      se,
      l === null ? My : function() {
        return Mf(e), l(n);
      }
    );
  }
  function Df(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: se,
      baseState: se,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ll,
        lastRenderedState: se
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
  function Mf(e) {
    var t = Df(e);
    t.next === null && (t = e.alternate.memoizedState), Oa(
      e,
      t.next.queue,
      {},
      Tt()
    );
  }
  function tr() {
    return et(Ya);
  }
  function Nf() {
    return Ge().memoizedState;
  }
  function Uf() {
    return Ge().memoizedState;
  }
  function Ny(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = Rl(l);
          var n = Tl(t, e, l);
          n !== null && (dt(n, t, l), Aa(n, t, l)), t = { cache: Dc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Uy(e, t, l) {
    var n = Tt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yu(e) ? jf(t, l) : (l = Sc(e, t, l, n), l !== null && (dt(l, e, n), Hf(l, t, n)));
  }
  function Bf(e, t, l) {
    var n = Tt();
    Oa(e, t, l, n);
  }
  function Oa(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Yu(e)) jf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, m = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = m, vt(m, f))
            return Ru(e, t, a, 0), De === null && Eu(), !1;
        } catch {
        }
      if (l = Sc(e, t, a, n), l !== null)
        return dt(l, e, n), Hf(l, t, n), !0;
    }
    return !1;
  }
  function lr(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Br(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Sc(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Yu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function jf(e, t) {
    Un = Hu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Hf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, ko(e, l);
    }
  }
  var Ca = {
    readContext: et,
    use: qu,
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
  var _f = {
    readContext: et,
    use: qu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: et,
    useEffect: bf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Qu(
        4194308,
        4,
        Tf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Qu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Qu(4, 2, e, t);
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
      }, n.queue = e, e = e.dispatch = Uy.bind(
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
      e = Fc(e);
      var t = e.queue, l = Bf.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var l = ut();
      return Pc(l, e, t);
    },
    useTransition: function() {
      var e = Fc(!1);
      return e = zf.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ue, a = ut();
      if (pe) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), De === null)
          throw Error(o(349));
        (ye & 127) !== 0 || nf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, bf(uf.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, jn(
        9,
        { destroy: void 0 },
        af.bind(
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
      var e = ut(), t = De.identifierPrefix;
      if (pe) {
        var l = Vt, n = Yt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = _u++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Oy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: tr,
    useFormState: yf,
    useActionState: yf,
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
      return t.queue = l, t = lr.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Xc,
    useCacheRefresh: function() {
      return ut().memoizedState = Ny.bind(
        null,
        ue
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
  }, nr = {
    readContext: et,
    use: qu,
    useCallback: Of,
    useContext: et,
    useEffect: Ic,
    useImperativeHandle: xf,
    useInsertionEffect: Ef,
    useLayoutEffect: Rf,
    useMemo: Cf,
    useReducer: ku,
    useRef: Sf,
    useState: function() {
      return ku(ll);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return wf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ku(ll)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : xa(e),
        t
      ];
    },
    useSyncExternalStore: lf,
    useId: Nf,
    useHostTransitionStatus: tr,
    useFormState: gf,
    useActionState: gf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return of(l, Ce, e, t);
    },
    useMemoCache: Xc,
    useCacheRefresh: Uf
  };
  nr.useEffectEvent = Af;
  var Lf = {
    readContext: et,
    use: qu,
    useCallback: Of,
    useContext: et,
    useEffect: Ic,
    useImperativeHandle: xf,
    useInsertionEffect: Ef,
    useLayoutEffect: Rf,
    useMemo: Cf,
    useReducer: Kc,
    useRef: Sf,
    useState: function() {
      return Kc(ll);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ce === null ? Pc(l, e, t) : wf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Kc(ll)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : xa(e),
        t
      ];
    },
    useSyncExternalStore: lf,
    useId: Nf,
    useHostTransitionStatus: tr,
    useFormState: vf,
    useActionState: vf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ce !== null ? of(l, Ce, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Xc,
    useCacheRefresh: Uf
  };
  Lf.useEffectEvent = Af;
  function ar(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : U({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var ur = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = Rl(n);
      a.payload = t, l != null && (a.callback = l), t = Tl(e, a, n), t !== null && (dt(t, e, n), Aa(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = Rl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Tl(e, a, n), t !== null && (dt(t, e, n), Aa(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Tt(), n = Rl(l);
      n.tag = 2, t != null && (n.callback = t), t = Tl(e, n, l), t !== null && (dt(t, e, l), Aa(t, e, l));
    }
  };
  function qf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function kf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && ur.enqueueReplaceState(t, t.state, null);
  }
  function ln(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = U({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function Qf(e) {
    Au(e);
  }
  function Gf(e) {
    console.error(e);
  }
  function Yf(e) {
    Au(e);
  }
  function Vu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Vf(e, t, l) {
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
  function ir(e, t, l) {
    return l = Rl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Vu(e, t);
    }, l;
  }
  function Jf(e) {
    return e = Rl(e), e.tag = 3, e;
  }
  function Xf(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Vf(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Vf(t, l, n), typeof a != "function" && (Dl === null ? Dl = /* @__PURE__ */ new Set([this]) : Dl.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function By(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && Cn(
        t,
        l,
        a,
        !0
      ), l = bt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Nt === null ? li() : l.alternate === null && ke === 0 && (ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Mr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Mu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Mr(e, n, a)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Mr(e, n, a), li(), !1;
    }
    if (pe)
      return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== xc && (e = Error(o(422), { cause: n }), ga(wt(e, l)))) : (n !== xc && (t = Error(o(423), {
        cause: n
      }), ga(
        wt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = wt(n, l), a = ir(
        e.stateNode,
        n,
        a
      ), Hc(e, a), ke !== 4 && (ke = 2)), !1;
    var i = Error(o(520), { cause: n });
    if (i = wt(i, l), ja === null ? ja = [i] : ja.push(i), ke !== 4 && (ke = 2), t === null) return !0;
    n = wt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ir(l.stateNode, n, e), Hc(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Dl === null || !Dl.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Jf(a), Xf(
              a,
              e,
              l,
              n
            ), Hc(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var cr = Error(o(461)), Je = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? Fs(t, null, l, n) : en(
      t,
      e.child,
      l,
      n
    );
  }
  function Zf(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var m in n)
        m !== "ref" && (f[m] = n[m]);
    } else f = n;
    return Wl(t), n = Gc(
      e,
      t,
      l,
      f,
      i,
      a
    ), m = Yc(), e !== null && !Je ? (Vc(e, t, a), nl(e, t, a)) : (pe && m && Rc(t), t.flags |= 1, tt(e, t, n, a), t.child);
  }
  function Kf(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !bc(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Ff(
        e,
        t,
        i,
        n,
        a
      )) : (e = xu(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !yr(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ha, l(f, n) && e.ref === t.ref)
        return nl(e, t, a);
    }
    return t.flags |= 1, e = It(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ff(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = n = i, yr(e, a))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, nl(e, t, a);
    }
    return rr(
      e,
      t,
      l,
      n,
      a
    );
  }
  function Wf(e, t, l, n) {
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
        return If(
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
        ), i !== null ? $s(t, i) : Lc(), Ps(t);
      else
        return n = t.lanes = 536870912, If(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (zu(t, i.cachePool), $s(t, i), Ol(), t.memoizedState = null) : (e !== null && zu(t, null), Lc(), Ol());
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
  function If(e, t, l, n, a) {
    var i = Nc();
    return i = i === null ? null : { parent: Ye._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && zu(t, null), Lc(), Ps(t), e !== null && Cn(e, t, n, !0), t.childLanes = a, null;
  }
  function Ju(e, t) {
    return t = Zu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function $f(e, t, l) {
    return en(t, e.child, null, l), e = Ju(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function jy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (pe) {
        if (n.mode === "hidden")
          return e = Ju(t, n), t.lanes = 536870912, wa(null, e);
        if (kc(t), (e = Me) ? (e = sh(
          e,
          Mt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Yt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bs(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw bl(t);
        return t.lanes = 536870912, null;
      }
      return Ju(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (kc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = $f(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Je || Cn(e, t, l, !1), a = (l & e.childLanes) !== 0, Je || a) {
        if (n = De, n !== null && (f = Qo(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Xl(e, f), dt(n, e, f), cr;
        li(), t = $f(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Me = Ut(f.nextSibling), Pe = t, pe = !0, Sl = null, Mt = !1, e !== null && _s(t, e), t = Ju(t, n), t.flags |= 4096;
      return t;
    }
    return e = It(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Xu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function rr(e, t, l, n, a) {
    return Wl(t), l = Gc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Yc(), e !== null && !Je ? (Vc(e, t, a), nl(e, t, a)) : (pe && n && Rc(t), t.flags |= 1, tt(e, t, l, a), t.child);
  }
  function Pf(e, t, l, n, a, i) {
    return Wl(t), t.updateQueue = null, l = tf(
      t,
      n,
      l,
      a
    ), ef(e), n = Yc(), e !== null && !Je ? (Vc(e, t, i), nl(e, t, i)) : (pe && n && Rc(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function ed(e, t, l, n, a) {
    if (Wl(t), t.stateNode === null) {
      var i = Rn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ur, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Bc(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : Rn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ar(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && ur.enqueueReplaceState(i, i.state, null), Ra(t, n, i, a), Ea(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, v = ln(l, m);
      i.props = v;
      var O = i.context, B = l.contextType;
      f = Rn, typeof B == "object" && B !== null && (f = et(B));
      var L = l.getDerivedStateFromProps;
      B = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || O !== f) && kf(
        t,
        i,
        n,
        f
      ), El = !1;
      var C = t.memoizedState;
      i.state = C, Ra(t, n, i, a), Ea(), O = t.memoizedState, m || C !== O || El ? (typeof L == "function" && (ar(
        t,
        l,
        L,
        n
      ), O = t.memoizedState), (v = El || qf(
        t,
        l,
        v,
        n,
        C,
        O,
        f
      )) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = O), i.props = n, i.state = O, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, jc(e, t), f = t.memoizedProps, B = ln(l, f), i.props = B, L = t.pendingProps, C = i.context, O = l.contextType, v = Rn, typeof O == "object" && O !== null && (v = et(O)), m = l.getDerivedStateFromProps, (O = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== L || C !== v) && kf(
        t,
        i,
        n,
        v
      ), El = !1, C = t.memoizedState, i.state = C, Ra(t, n, i, a), Ea();
      var N = t.memoizedState;
      f !== L || C !== N || El || e !== null && e.dependencies !== null && Cu(e.dependencies) ? (typeof m == "function" && (ar(
        t,
        l,
        m,
        n
      ), N = t.memoizedState), (B = El || qf(
        t,
        l,
        B,
        n,
        C,
        N,
        v
      ) || e !== null && e.dependencies !== null && Cu(e.dependencies)) ? (O || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, N, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        N,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = N), i.props = n, i.state = N, i.context = v, n = B) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && C === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && C === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Xu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = en(
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
  function td(e, t, l, n) {
    return Kl(), t.flags |= 256, tt(e, t, l, n), t.child;
  }
  var or = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function sr(e) {
    return { baseLanes: e, cachePool: Ys() };
  }
  function fr(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Rt), e;
  }
  function ld(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (pe) {
        if (a ? xl(t) : Ol(), (e = Me) ? (e = sh(
          e,
          Mt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: vl !== null ? { id: Yt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bs(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw bl(t);
        return Zr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = n.children;
      return n = n.fallback, a ? (Ol(), a = t.mode, m = Zu(
        { mode: "hidden", children: m },
        a
      ), n = Zl(
        n,
        a,
        l,
        null
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = sr(l), n.childLanes = fr(
        e,
        f,
        l
      ), t.memoizedState = or, wa(null, n)) : (xl(t), dr(t, m));
    }
    var v = e.memoizedState;
    if (v !== null && (m = v.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (xl(t), t.flags &= -257, t = hr(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Ol(), t.child = e.child, t.flags |= 128, t = null) : (Ol(), m = n.fallback, a = t.mode, n = Zu(
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
        ), n = t.child, n.memoizedState = sr(l), n.childLanes = fr(
          e,
          f,
          l
        ), t.memoizedState = or, t = wa(null, n));
      else if (xl(t), Zr(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var O = f.dgst;
        f = O, n = Error(o(419)), n.stack = "", n.digest = f, ga({ value: n, source: null, stack: null }), t = hr(
          e,
          t,
          l
        );
      } else if (Je || Cn(e, t, l, !1), f = (l & e.childLanes) !== 0, Je || f) {
        if (f = De, f !== null && (n = Qo(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Xl(e, n), dt(f, e, n), cr;
        Xr(m) || li(), t = hr(
          e,
          t,
          l
        );
      } else
        Xr(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Me = Ut(
          m.nextSibling
        ), Pe = t, pe = !0, Sl = null, Mt = !1, e !== null && _s(t, e), t = dr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Ol(), m = n.fallback, a = t.mode, v = e.child, O = v.sibling, n = It(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, O !== null ? m = It(
      O,
      m
    ) : (m = Zl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, wa(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = sr(l) : (a = m.cachePool, a !== null ? (v = Ye._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Ys(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = fr(
      e,
      f,
      l
    ), t.memoizedState = or, wa(e.child, n)) : (xl(t), l = e.child, e = l.sibling, l = It(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function dr(e, t) {
    return t = Zu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Zu(e, t) {
    return e = St(22, e, null, t), e.lanes = 0, e;
  }
  function hr(e, t, l) {
    return en(t, e.child, null, l), e = dr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function nd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), wc(e.return, t, l);
  }
  function mr(e, t, l, n, a, i) {
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
  function ad(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = Qe.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Qe, f), tt(e, t, n, l), n = pe ? ya : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && nd(e, l, t);
        else if (e.tag === 19)
          nd(e, l, t);
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
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), mr(
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
        mr(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        mr(
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
        if (Cn(
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
  function yr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Cu(e)));
  }
  function Hy(e, t, l) {
    switch (t.tag) {
      case 3:
        He(t, t.stateNode.containerInfo), Al(t, Ye, e.memoizedState.cache), Kl();
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
          return t.flags |= 128, kc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (xl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ld(e, t, l) : (xl(t), e = nl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        xl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (Cn(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return ad(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), V(Qe, Qe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, Wf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Al(t, Ye, e.memoizedState.cache);
    }
    return nl(e, t, l);
  }
  function ud(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!yr(e, l) && (t.flags & 128) === 0)
          return Je = !1, Hy(
            e,
            t,
            l
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, pe && (t.flags & 1048576) !== 0 && Hs(t, ya, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = $l(t.elementType), t.type = e, typeof e == "function")
            bc(e) ? (n = ln(e, n), t.tag = 1, t = ed(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = rr(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === I) {
                t.tag = 11, t = Zf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === P) {
                t.tag = 14, t = Kf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = Ke(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return rr(
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
        ), ed(
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
          ), e === null) throw Error(o(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, jc(e, t), Ra(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, Al(t, Ye, n), n !== i.cache && zc(
            t,
            [Ye],
            l,
            !0
          ), Ea(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = td(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = wt(
                Error(o(424)),
                t
              ), ga(a), t = td(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Ut(e.firstChild), Pe = t, pe = !0, Sl = null, Mt = !0, l = Fs(
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
        return Xu(e, t), e === null ? (l = gh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : pe || (l = t.type, e = t.pendingProps, n = oi(
          oe.current
        ).createElement(l), n[$e] = t, n[it] = e, lt(n, l, e), We(n), t.stateNode = n) : t.memoizedState = gh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Qt(t), e === null && pe && (n = t.stateNode = hh(
          t.type,
          t.pendingProps,
          oe.current
        ), Pe = t, Mt = !0, a = Me, Bl(t.type) ? (Kr = a, Me = Ut(n.firstChild)) : Me = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Xu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && pe && ((a = n = Me) && (n = dg(
          n,
          t.type,
          t.pendingProps,
          Mt
        ), n !== null ? (t.stateNode = n, Pe = t, Me = Ut(n.firstChild), Mt = !1, a = !0) : a = !1), a || bl(t)), Qt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Yr(a, i) ? n = null : f !== null && Yr(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Gc(
          e,
          t,
          Cy,
          null,
          null,
          l
        ), Ya._currentValue = a), Xu(e, t), tt(e, t, n, l), t.child;
      case 6:
        return e === null && pe && ((e = l = Me) && (l = hg(
          l,
          t.pendingProps,
          Mt
        ), l !== null ? (t.stateNode = l, Pe = t, Me = null, e = !0) : e = !1), e || bl(t)), null;
      case 13:
        return ld(e, t, l);
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
        return Zf(
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
        return Kf(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Ff(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return ad(e, t, l);
      case 31:
        return jy(e, t, l);
      case 22:
        return Wf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Wl(t), n = et(Ye), e === null ? (a = Nc(), a === null && (a = De, i = Dc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Bc(t), Al(t, Ye, a)) : ((e.lanes & l) !== 0 && (jc(e, t), Ra(t, null, null, l), Ea()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Al(t, Ye, n)) : (n = i.cache, Al(t, Ye, n), n !== a.cache && zc(
          t,
          [Ye],
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
  function gr(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Nd()) e.flags |= 8192;
        else
          throw Pl = Mu, Uc;
    } else e.flags &= -16777217;
  }
  function id(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ah(t))
      if (Nd()) e.flags |= 8192;
      else
        throw Pl = Mu, Uc;
  }
  function Ku(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Lo() : 536870912, e.lanes |= t, qn |= t);
  }
  function za(e, t) {
    if (!pe)
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
  function _y(e, t, l) {
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
        return Ne(t), null;
      case 1:
        return Ne(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), el(Ye), Oe(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (On(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oc())), Ne(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (al(t), i !== null ? (Ne(t), id(t, i)) : (Ne(t), gr(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (al(t), Ne(t), id(t, i)) : (Ne(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && al(t), Ne(t), gr(
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
            return Ne(t), null;
          }
          e = Z.current, On(t) ? Ls(t) : (e = hh(a, n, l), t.stateNode = e, al(t));
        }
        return Ne(t), null;
      case 5:
        if (Gt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && al(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ne(t), null;
          }
          if (i = Z.current, On(t))
            Ls(t);
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
        return Ne(t), gr(
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
          if (e = oe.current, On(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Pe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[$e] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || lh(e.nodeValue, l)), e || bl(t, !0);
          } else
            e = oi(e).createTextNode(
              n
            ), e[$e] = t, t.stateNode = e;
        }
        return Ne(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = On(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[$e] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ne(t), e = !1;
          } else
            l = Oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Ne(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = On(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[$e] = t;
            } else
              Kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ne(t), a = !1;
          } else
            a = Oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ku(t, t.updateQueue), Ne(t), null);
      case 4:
        return Oe(), e === null && Lr(t.stateNode.containerInfo), Ne(t), null;
      case 10:
        return el(t.type), Ne(t), null;
      case 19:
        if (_(Qe), n = t.memoizedState, n === null) return Ne(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) za(n, !1);
          else {
            if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = ju(e), i !== null) {
                  for (t.flags |= 128, za(n, !1), e = i.updateQueue, t.updateQueue = e, Ku(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Us(l, e), l = l.sibling;
                  return V(
                    Qe,
                    Qe.current & 1 | 2
                  ), pe && $t(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > Pu && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = ju(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Ku(t, e), za(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !pe)
                return Ne(t), null;
            } else
              2 * yt() - n.renderingStartTime > Pu && l !== 536870912 && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Qe.current, V(
          Qe,
          a ? l & 1 | 2 : l & 1
        ), pe && $t(t, n.treeForkCount), e) : (Ne(t), null);
      case 22:
      case 23:
        return At(t), qc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), l = t.updateQueue, l !== null && Ku(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && _(Il), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), el(Ye), Ne(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ly(e, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return el(Ye), Oe(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Gt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(o(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Kl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return _(Qe), null;
      case 4:
        return Oe(), null;
      case 10:
        return el(t.type), null;
      case 22:
      case 23:
        return At(t), qc(), e !== null && _(Il), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return el(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cd(e, t) {
    switch (Tc(t), t.tag) {
      case 3:
        el(Ye), Oe();
        break;
      case 26:
      case 27:
      case 5:
        Gt(t);
        break;
      case 4:
        Oe();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        _(Qe);
        break;
      case 10:
        el(t.type);
        break;
      case 22:
      case 23:
        At(t), qc(), e !== null && _(Il);
        break;
      case 24:
        el(Ye);
    }
  }
  function Da(e, t) {
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
              var v = l, O = m;
              try {
                O();
              } catch (B) {
                xe(
                  a,
                  v,
                  B
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (B) {
      xe(t, t.return, B);
    }
  }
  function rd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Is(t, l);
      } catch (n) {
        xe(e, e.return, n);
      }
    }
  }
  function od(e, t, l) {
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
  function Ma(e, t) {
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
  function sd(e) {
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
  function pr(e, t, l) {
    try {
      var n = e.stateNode;
      ig(n, e.type, l, t), n[it] = t;
    } catch (a) {
      xe(e, e.return, a);
    }
  }
  function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Bl(e.type) || e.tag === 4;
  }
  function vr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Bl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Ft));
    else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Sr(e, t, l), e = e.sibling; e !== null; )
        Sr(e, t, l), e = e.sibling;
  }
  function Fu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Fu(e, t, l), e = e.sibling; e !== null; )
        Fu(e, t, l), e = e.sibling;
  }
  function dd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      lt(t, n, l), t[$e] = e, t[it] = l;
    } catch (i) {
      xe(e, e.return, i);
    }
  }
  var ul = !1, Xe = !1, br = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function qy(e, t) {
    if (e = e.containerInfo, Qr = gi, e = Ts(e), hc(e)) {
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
            var f = 0, m = -1, v = -1, O = 0, B = 0, L = e, C = null;
            t: for (; ; ) {
              for (var N; L !== l || a !== 0 && L.nodeType !== 3 || (m = f + a), L !== i || n !== 0 && L.nodeType !== 3 || (v = f + n), L.nodeType === 3 && (f += L.nodeValue.length), (N = L.firstChild) !== null; )
                C = L, L = N;
              for (; ; ) {
                if (L === e) break t;
                if (C === l && ++O === a && (m = f), C === i && ++B === n && (v = f), (N = L.nextSibling) !== null) break;
                L = C, C = L.parentNode;
              }
              L = N;
            }
            l = m === -1 || v === -1 ? null : { start: m, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Gr = { focusedElem: e, selectionRange: l }, gi = !1, Ie = t; Ie !== null; )
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
                  var K = ln(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    K,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  xe(
                    l,
                    l.return,
                    ee
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9)
                  Jr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jr(e);
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
            e.return = t.return, Ie = e;
            break;
          }
          Ie = t.return;
        }
  }
  function md(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        cl(e, l), n & 4 && Da(5, l);
        break;
      case 1:
        if (cl(e, l), n & 4)
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
        n & 64 && rd(l), n & 512 && Ma(l, l.return);
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
            Is(e, t);
          } catch (f) {
            xe(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && dd(l);
      case 26:
      case 5:
        cl(e, l), t === null && n & 4 && sd(l), n & 512 && Ma(l, l.return);
        break;
      case 12:
        cl(e, l);
        break;
      case 31:
        cl(e, l), n & 4 && pd(e, l);
        break;
      case 13:
        cl(e, l), n & 4 && vd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Ky.bind(
          null,
          l
        ), mg(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || ul, !n) {
          t = t !== null && t.memoizedState !== null || Xe, a = ul;
          var i = Xe;
          ul = n, (Xe = t) && !i ? rl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : cl(e, l), ul = a, Xe = i;
        }
        break;
      case 30:
        break;
      default:
        cl(e, l);
    }
  }
  function yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Wi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, rt = !1;
  function il(e, t, l) {
    for (l = l.child; l !== null; )
      gd(e, t, l), l = l.sibling;
  }
  function gd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(ta, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Xe || Jt(l, t), il(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Xe || Jt(l, t);
        var n = Ue, a = rt;
        Bl(l.type) && (Ue = l.stateNode, rt = !1), il(
          e,
          t,
          l
        ), ka(l.stateNode), Ue = n, rt = a;
        break;
      case 5:
        Xe || Jt(l, t);
      case 6:
        if (n = Ue, a = rt, Ue = null, il(
          e,
          t,
          l
        ), Ue = n, rt = a, Ue !== null)
          if (rt)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
            } catch (i) {
              xe(
                l,
                t,
                i
              );
            }
          else
            try {
              Ue.removeChild(l.stateNode);
            } catch (i) {
              xe(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Ue !== null && (rt ? (e = Ue, rh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Zn(e)) : rh(Ue, l.stateNode));
        break;
      case 4:
        n = Ue, a = rt, Ue = l.stateNode.containerInfo, rt = !0, il(
          e,
          t,
          l
        ), Ue = n, rt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Cl(2, l, t), Xe || Cl(4, l, t), il(
          e,
          t,
          l
        );
        break;
      case 1:
        Xe || (Jt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && od(
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
        Xe = (n = Xe) || l.memoizedState !== null, il(
          e,
          t,
          l
        ), Xe = n;
        break;
      default:
        il(
          e,
          t,
          l
        );
    }
  }
  function pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Zn(e);
      } catch (l) {
        xe(t, t.return, l);
      }
    }
  }
  function vd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Zn(e);
      } catch (l) {
        xe(t, t.return, l);
      }
  }
  function ky(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new hd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new hd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Wu(e, t) {
    var l = ky(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Fy.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function ot(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Bl(m.type)) {
                Ue = m.stateNode, rt = !1;
                break e;
              }
              break;
            case 5:
              Ue = m.stateNode, rt = !1;
              break e;
            case 3:
            case 4:
              Ue = m.stateNode.containerInfo, rt = !0;
              break e;
          }
          m = m.return;
        }
        if (Ue === null) throw Error(o(160));
        gd(i, f, a), Ue = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Sd(t, e), t = t.sibling;
  }
  var _t = null;
  function Sd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ot(t, e), st(e), n & 4 && (Cl(3, e, e.return), Da(3, e), Cl(5, e, e.return));
        break;
      case 1:
        ot(t, e), st(e), n & 512 && (Xe || l === null || Jt(l, l.return)), n & 64 && ul && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = _t;
        if (ot(t, e), st(e), n & 512 && (Xe || l === null || Jt(l, l.return)), n & 4) {
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
                      var f = Sh(
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
                      if (f = Sh(
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
                  i[$e] = e, We(i), n = i;
                }
                e.stateNode = n;
              } else
                bh(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = vh(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? bh(
              a,
              e.type,
              e.stateNode
            ) : vh(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && pr(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ot(t, e), st(e), n & 512 && (Xe || l === null || Jt(l, l.return)), l !== null && n & 4 && pr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ot(t, e), st(e), n & 512 && (Xe || l === null || Jt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            gn(a, "");
          } catch (K) {
            xe(e, e.return, K);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, pr(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (br = !0);
        break;
      case 6:
        if (ot(t, e), st(e), n & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (K) {
            xe(e, e.return, K);
          }
        }
        break;
      case 3:
        if (di = null, a = _t, _t = si(t.containerInfo), ot(t, e), _t = a, st(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zn(t.containerInfo);
          } catch (K) {
            xe(e, e.return, K);
          }
        br && (br = !1, bd(e));
        break;
      case 4:
        n = _t, _t = si(
          e.stateNode.containerInfo
        ), ot(t, e), st(e), _t = n;
        break;
      case 12:
        ot(t, e), st(e);
        break;
      case 31:
        ot(t, e), st(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 13:
        ot(t, e), st(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && ($u = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, O = ul, B = Xe;
        if (ul = O || a, Xe = B || v, ot(t, e), Xe = B, ul = O, st(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || ul || Xe || nn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = v.stateNode;
                    var L = v.memoizedProps.style, C = L != null && L.hasOwnProperty("display") ? L.display : null;
                    m.style.display = C == null || typeof C == "boolean" ? "" : ("" + C).trim();
                  }
                } catch (K) {
                  xe(v, v.return, K);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (K) {
                  xe(v, v.return, K);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var N = v.stateNode;
                  a ? oh(N, !0) : oh(v.stateNode, !1);
                } catch (K) {
                  xe(v, v.return, K);
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
        ot(t, e), st(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Wu(e, n)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ot(t, e), st(e);
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
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = vr(e);
            Fu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (gn(f, ""), l.flags &= -33);
            var m = vr(e);
            Fu(e, m, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, O = vr(e);
            Sr(
              e,
              O,
              v
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (B) {
        xe(e, e.return, B);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function bd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        bd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function cl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        md(e, t.alternate, t), t = t.sibling;
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
          typeof l.componentWillUnmount == "function" && od(
            t,
            t.return,
            l
          ), nn(t);
          break;
        case 27:
          ka(t.stateNode);
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
  function rl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          rl(
            a,
            i,
            l
          ), Da(4, i);
          break;
        case 1:
          if (rl(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (O) {
              xe(n, n.return, O);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var m = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  Ws(v[a], m);
            } catch (O) {
              xe(n, n.return, O);
            }
          }
          l && f & 64 && rd(i), Ma(i, i.return);
          break;
        case 27:
          dd(i);
        case 26:
        case 5:
          rl(
            a,
            i,
            l
          ), l && n === null && f & 4 && sd(i), Ma(i, i.return);
          break;
        case 12:
          rl(
            a,
            i,
            l
          );
          break;
        case 31:
          rl(
            a,
            i,
            l
          ), l && f & 4 && pd(a, i);
          break;
        case 13:
          rl(
            a,
            i,
            l
          ), l && f & 4 && vd(a, i);
          break;
        case 22:
          i.memoizedState === null && rl(
            a,
            i,
            l
          ), Ma(i, i.return);
          break;
        case 30:
          break;
        default:
          rl(
            a,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ar(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && pa(l));
  }
  function Er(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e));
  }
  function Lt(e, t, l, n) {
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
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && Da(9, t);
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
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pa(e)));
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
            var i = t.memoizedProps, f = i.id, m = i.onPostCommit;
            typeof m == "function" && m(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (v) {
            xe(t, t.return, v);
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
        ) : Na(e, t) : i._visibility & 2 ? Lt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, Hn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Ar(f, t);
        break;
      case 24:
        Lt(
          e,
          t,
          l,
          n
        ), a & 2048 && Er(t.alternate, t);
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
  function Hn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, m = l, v = n, O = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Hn(
            i,
            f,
            m,
            v,
            a
          ), Da(8, f);
          break;
        case 23:
          break;
        case 22:
          var B = f.stateNode;
          f.memoizedState !== null ? B._visibility & 2 ? Hn(
            i,
            f,
            m,
            v,
            a
          ) : Na(
            i,
            f
          ) : (B._visibility |= 2, Hn(
            i,
            f,
            m,
            v,
            a
          )), a && O & 2048 && Ar(
            f.alternate,
            f
          );
          break;
        case 24:
          Hn(
            i,
            f,
            m,
            v,
            a
          ), a && O & 2048 && Er(f.alternate, f);
          break;
        default:
          Hn(
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
  function Na(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Na(l, n), a & 2048 && Ar(
              n.alternate,
              n
            );
            break;
          case 24:
            Na(l, n), a & 2048 && Er(n.alternate, n);
            break;
          default:
            Na(l, n);
        }
        t = t.sibling;
      }
  }
  var Ua = 8192;
  function _n(e, t, l) {
    if (e.subtreeFlags & Ua)
      for (e = e.child; e !== null; )
        Ed(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Ed(e, t, l) {
    switch (e.tag) {
      case 26:
        _n(
          e,
          t,
          l
        ), e.flags & Ua && e.memoizedState !== null && Og(
          l,
          _t,
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
        var n = _t;
        _t = si(e.stateNode.containerInfo), _n(
          e,
          t,
          l
        ), _t = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ua, Ua = 16777216, _n(
          e,
          t,
          l
        ), Ua = n) : _n(
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
  function Rd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ba(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Ie = n, xd(
            n,
            e
          );
        }
      Rd(e);
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
        Ba(e), e.flags & 2048 && Cl(9, e, e.return);
        break;
      case 3:
        Ba(e);
        break;
      case 12:
        Ba(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Iu(e)) : Ba(e);
        break;
      default:
        Ba(e);
    }
  }
  function Iu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Ie = n, xd(
            n,
            e
          );
        }
      Rd(e);
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
  function xd(e, t) {
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
          if (yd(n), n === l) {
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
  var Qy = {
    getCacheForType: function(e) {
      var t = et(Ye), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return et(Ye).controller.signal;
    }
  }, Gy = typeof WeakMap == "function" ? WeakMap : Map, Ee = 0, De = null, de = null, ye = 0, Te = 0, Et = null, wl = !1, Ln = !1, Rr = !1, ol = 0, ke = 0, zl = 0, an = 0, Tr = 0, Rt = 0, qn = 0, ja = null, ft = null, xr = !1, $u = 0, Od = 0, Pu = 1 / 0, ei = null, Dl = null, Fe = 0, Ml = null, kn = null, sl = 0, Or = 0, Cr = null, Cd = null, Ha = 0, wr = null;
  function Tt() {
    return (Ee & 2) !== 0 && ye !== 0 ? ye & -ye : q.T !== null ? Br() : Go();
  }
  function wd() {
    if (Rt === 0)
      if ((ye & 536870912) === 0 || pe) {
        var e = ru;
        ru <<= 1, (ru & 3932160) === 0 && (ru = 262144), Rt = e;
      } else Rt = 536870912;
    return e = bt.current, e !== null && (e.flags |= 32), Rt;
  }
  function dt(e, t, l) {
    (e === De && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null) && (Qn(e, 0), Nl(
      e,
      ye,
      Rt,
      !1
    )), na(e, l), ((Ee & 2) === 0 || e !== De) && (e === De && ((Ee & 2) === 0 && (an |= l), ke === 4 && Nl(
      e,
      ye,
      Rt,
      !1
    )), Xt(e));
  }
  function zd(e, t, l) {
    if ((Ee & 6) !== 0) throw Error(o(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || la(e, t), a = n ? Jy(e, t) : Dr(e, t, !0), i = n;
    do {
      if (a === 0) {
        Ln && !n && Nl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Yy(l)) {
          a = Dr(e, t, !1), i = !1;
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
              if (v && (Qn(m, f).flags |= 256), f = Dr(
                m,
                f,
                !1
              ), f !== 2) {
                if (Rr && !v) {
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
          Qn(e, 0), Nl(e, t, 0, !0);
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
              Nl(
                n,
                t,
                Rt,
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
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (a = $u + 300 - yt(), 10 < a)) {
            if (Nl(
              n,
              t,
              Rt,
              !wl
            ), su(n, 0, !0) !== 0) break e;
            sl = t, n.timeoutHandle = ih(
              Dd.bind(
                null,
                n,
                l,
                ft,
                ei,
                xr,
                t,
                Rt,
                an,
                qn,
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
          Dd(
            n,
            l,
            ft,
            ei,
            xr,
            t,
            Rt,
            an,
            qn,
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
    Xt(e);
  }
  function Dd(e, t, l, n, a, i, f, m, v, O, B, L, C, N) {
    if (e.timeoutHandle = -1, L = t.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ft
      }, Ed(
        t,
        i,
        L
      );
      var K = (i & 62914560) === i ? $u - yt() : (i & 4194048) === i ? Od - yt() : 0;
      if (K = Cg(
        L,
        K
      ), K !== null) {
        sl = i, e.cancelPendingCommit = K(
          Ld.bind(
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
            B,
            L,
            null,
            C,
            N
          )
        ), Nl(e, i, f, !O);
        return;
      }
    }
    Ld(
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
  function Yy(e) {
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
  function Nl(e, t, l, n) {
    t &= ~Tr, t &= ~an, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && qo(e, l, t);
  }
  function ti() {
    return (Ee & 6) === 0 ? (_a(0), !1) : !0;
  }
  function zr() {
    if (de !== null) {
      if (Te === 0)
        var e = de.return;
      else
        e = de, Pt = Fl = null, Jc(e), Mn = null, Sa = 0, e = de;
      for (; e !== null; )
        cd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Qn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, og(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), sl = 0, zr(), De = e, de = l = It(e.current, null), ye = t, Te = 0, Et = null, wl = !1, Ln = la(e, t), Rr = !1, qn = Rt = Tr = an = zl = ke = 0, ft = ja = null, xr = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return ol = t, Eu(), l;
  }
  function Md(e, t) {
    ue = null, q.H = Ca, t === Dn || t === Du ? (t = Xs(), Te = 3) : t === Uc ? (t = Xs(), Te = 4) : Te = t === cr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Et = t, de === null && (ke = 1, Vu(
      e,
      wt(t, e.current)
    ));
  }
  function Nd() {
    var e = bt.current;
    return e === null ? !0 : (ye & 4194048) === ye ? Nt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Nt : !1;
  }
  function Ud() {
    var e = q.H;
    return q.H = Ca, e === null ? Ca : e;
  }
  function Bd() {
    var e = q.A;
    return q.A = Qy, e;
  }
  function li() {
    ke = 4, wl || (ye & 4194048) !== ye && bt.current !== null || (Ln = !0), (zl & 134217727) === 0 && (an & 134217727) === 0 || De === null || Nl(
      De,
      ye,
      Rt,
      !1
    );
  }
  function Dr(e, t, l) {
    var n = Ee;
    Ee |= 2;
    var a = Ud(), i = Bd();
    (De !== e || ye !== t) && (ei = null, Qn(e, t)), t = !1;
    var f = ke;
    e: do
      try {
        if (Te !== 0 && de !== null) {
          var m = de, v = Et;
          switch (Te) {
            case 8:
              zr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var O = Te;
              if (Te = 0, Et = null, Gn(e, m, v, O), l && Ln) {
                f = 0;
                break e;
              }
              break;
            default:
              O = Te, Te = 0, Et = null, Gn(e, m, v, O);
          }
        }
        Vy(), f = ke;
        break;
      } catch (B) {
        Md(e, B);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Pt = Fl = null, Ee = n, q.H = a, q.A = i, de === null && (De = null, ye = 0, Eu()), f;
  }
  function Vy() {
    for (; de !== null; ) jd(de);
  }
  function Jy(e, t) {
    var l = Ee;
    Ee |= 2;
    var n = Ud(), a = Bd();
    De !== e || ye !== t ? (ei = null, Pu = yt() + 500, Qn(e, t)) : Ln = la(
      e,
      t
    );
    e: do
      try {
        if (Te !== 0 && de !== null) {
          t = de;
          var i = Et;
          t: switch (Te) {
            case 1:
              Te = 0, Et = null, Gn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Vs(i)) {
                Te = 0, Et = null, Hd(t);
                break;
              }
              t = function() {
                Te !== 2 && Te !== 9 || De !== e || (Te = 7), Xt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Te = 7;
              break e;
            case 4:
              Te = 5;
              break e;
            case 7:
              Vs(i) ? (Te = 0, Et = null, Hd(t)) : (Te = 0, Et = null, Gn(e, t, i, 7));
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
                    Te = 0, Et = null;
                    var v = m.sibling;
                    if (v !== null) de = v;
                    else {
                      var O = m.return;
                      O !== null ? (de = O, ni(O)) : de = null;
                    }
                    break t;
                  }
              }
              Te = 0, Et = null, Gn(e, t, i, 5);
              break;
            case 6:
              Te = 0, Et = null, Gn(e, t, i, 6);
              break;
            case 8:
              zr(), ke = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Xy();
        break;
      } catch (B) {
        Md(e, B);
      }
    while (!0);
    return Pt = Fl = null, q.H = n, q.A = a, Ee = l, de !== null ? 0 : (De = null, ye = 0, Eu(), ke);
  }
  function Xy() {
    for (; de !== null && !y0(); )
      jd(de);
  }
  function jd(e) {
    var t = ud(e.alternate, e, ol);
    e.memoizedProps = e.pendingProps, t === null ? ni(e) : de = t;
  }
  function Hd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Pf(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ye
        );
        break;
      case 11:
        t = Pf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ye
        );
        break;
      case 5:
        Jc(t);
      default:
        cd(l, t), t = de = Us(t, ol), t = ud(l, t, ol);
    }
    e.memoizedProps = e.pendingProps, t === null ? ni(e) : de = t;
  }
  function Gn(e, t, l, n) {
    Pt = Fl = null, Jc(t), Mn = null, Sa = 0;
    var a = t.return;
    try {
      if (By(
        e,
        a,
        t,
        l,
        ye
      )) {
        ke = 1, Vu(
          e,
          wt(l, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw de = a, i;
      ke = 1, Vu(
        e,
        wt(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (pe || n === 1 ? e = !0 : Ln || (ye & 536870912) !== 0 ? e = !1 : (wl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = bt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), _d(t, e)) : ni(t);
  }
  function ni(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _d(
          t,
          wl
        );
        return;
      }
      e = t.return;
      var l = _y(
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
    ke === 0 && (ke = 5);
  }
  function _d(e, t) {
    do {
      var l = Ly(e.alternate, e);
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
    ke = 6, de = null;
  }
  function Ld(e, t, l, n, a, i, f, m, v) {
    e.cancelPendingCommit = null;
    do
      ai();
    while (Fe !== 0);
    if ((Ee & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= vc, x0(
        e,
        l,
        i,
        f,
        m,
        v
      ), e === De && (de = De = null, ye = 0), kn = t, Ml = e, sl = l, Or = i, Cr = a, Cd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Wy(iu, function() {
        return Yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null, a = Q.p, Q.p = 2, f = Ee, Ee |= 4;
        try {
          qy(e, t, l);
        } finally {
          Ee = f, Q.p = a, q.T = n;
        }
      }
      Fe = 1, qd(), kd(), Qd();
    }
  }
  function qd() {
    if (Fe === 1) {
      Fe = 0;
      var e = Ml, t = kn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = Q.p;
        Q.p = 2;
        var a = Ee;
        Ee |= 4;
        try {
          Sd(t, e);
          var i = Gr, f = Ts(e.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (f !== m && m && m.ownerDocument && Rs(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && hc(m)) {
              var O = v.start, B = v.end;
              if (B === void 0 && (B = O), "selectionStart" in m)
                m.selectionStart = O, m.selectionEnd = Math.min(
                  B,
                  m.value.length
                );
              else {
                var L = m.ownerDocument || document, C = L && L.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), K = m.textContent.length, ee = Math.min(v.start, K), ze = v.end === void 0 ? ee : Math.min(v.end, K);
                  !N.extend && ee > ze && (f = ze, ze = ee, ee = f);
                  var R = Es(
                    m,
                    ee
                  ), A = Es(
                    m,
                    ze
                  );
                  if (R && A && (N.rangeCount !== 1 || N.anchorNode !== R.node || N.anchorOffset !== R.offset || N.focusNode !== A.node || N.focusOffset !== A.offset)) {
                    var T = L.createRange();
                    T.setStart(R.node, R.offset), N.removeAllRanges(), ee > ze ? (N.addRange(T), N.extend(A.node, A.offset)) : (T.setEnd(A.node, A.offset), N.addRange(T));
                  }
                }
              }
            }
            for (L = [], N = m; N = N.parentNode; )
              N.nodeType === 1 && L.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < L.length; m++) {
              var H = L[m];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          gi = !!Qr, Gr = Qr = null;
        } finally {
          Ee = a, Q.p = n, q.T = l;
        }
      }
      e.current = t, Fe = 2;
    }
  }
  function kd() {
    if (Fe === 2) {
      Fe = 0;
      var e = Ml, t = kn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = q.T, q.T = null;
        var n = Q.p;
        Q.p = 2;
        var a = Ee;
        Ee |= 4;
        try {
          md(e, t.alternate, t);
        } finally {
          Ee = a, Q.p = n, q.T = l;
        }
      }
      Fe = 3;
    }
  }
  function Qd() {
    if (Fe === 4 || Fe === 3) {
      Fe = 0, g0();
      var e = Ml, t = kn, l = sl, n = Cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Fe = 5 : (Fe = 0, kn = Ml = null, Gd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Dl = null), Ki(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
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
        t = q.T, a = Q.p, Q.p = 2, q.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var m = n[f];
            i(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          q.T = t, Q.p = a;
        }
      }
      (sl & 3) !== 0 && ai(), Xt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === wr ? Ha++ : (Ha = 0, wr = e) : Ha = 0, _a(0);
    }
  }
  function Gd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pa(t)));
  }
  function ai() {
    return qd(), kd(), Qd(), Yd();
  }
  function Yd() {
    if (Fe !== 5) return !1;
    var e = Ml, t = Or;
    Or = 0;
    var l = Ki(sl), n = q.T, a = Q.p;
    try {
      Q.p = 32 > l ? 32 : l, q.T = null, l = Cr, Cr = null;
      var i = Ml, f = sl;
      if (Fe = 0, kn = Ml = null, sl = 0, (Ee & 6) !== 0) throw Error(o(331));
      var m = Ee;
      if (Ee |= 4, Td(i.current), Ad(
        i,
        i.current,
        f,
        l
      ), Ee = m, _a(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(ta, i);
        } catch {
        }
      return !0;
    } finally {
      Q.p = a, q.T = n, Gd(e, t);
    }
  }
  function Vd(e, t, l) {
    t = wt(l, t), t = ir(e.stateNode, t, 2), e = Tl(e, t, 2), e !== null && (na(e, 2), Xt(e));
  }
  function xe(e, t, l) {
    if (e.tag === 3)
      Vd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Dl === null || !Dl.has(n))) {
            e = wt(l, e), l = Jf(2), n = Tl(t, l, 2), n !== null && (Xf(
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
  function Mr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Gy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (Rr = !0, a.add(l), e = Zy.bind(null, e, t, l), t.then(e, e));
  }
  function Zy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, De === e && (ye & l) === l && (ke === 4 || ke === 3 && (ye & 62914560) === ye && 300 > yt() - $u ? (Ee & 2) === 0 && Qn(e, 0) : Tr |= l, qn === ye && (qn = 0)), Xt(e);
  }
  function Jd(e, t) {
    t === 0 && (t = Lo()), e = Xl(e, t), e !== null && (na(e, t), Xt(e));
  }
  function Ky(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Jd(e, l);
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
        throw Error(o(314));
    }
    n !== null && n.delete(t), Jd(e, l);
  }
  function Wy(e, t) {
    return Vi(e, t);
  }
  var ui = null, Yn = null, Nr = !1, ii = !1, Ur = !1, Ul = 0;
  function Xt(e) {
    e !== Yn && e.next === null && (Yn === null ? ui = Yn = e : Yn = Yn.next = e), ii = !0, Nr || (Nr = !0, $y());
  }
  function _a(e, t) {
    if (!Ur && ii) {
      Ur = !0;
      do
        for (var l = !1, n = ui; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Fd(n, i));
          } else
            i = ye, i = su(
              n,
              n === De ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || la(n, i) || (l = !0, Fd(n, i));
          n = n.next;
        }
      while (l);
      Ur = !1;
    }
  }
  function Iy() {
    Xd();
  }
  function Xd() {
    ii = Nr = !1;
    var e = 0;
    Ul !== 0 && rg() && (e = Ul);
    for (var t = yt(), l = null, n = ui; n !== null; ) {
      var a = n.next, i = Zd(n, t);
      i === 0 ? (n.next = null, l === null ? ui = a : l.next = a, a === null && (Yn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ii = !0)), n = a;
    }
    Fe !== 0 && Fe !== 5 || _a(e), Ul !== 0 && (Ul = 0);
  }
  function Zd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, v = a[f];
      v === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = T0(m, t)) : v <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = De, l = ye, l = su(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Te === 2 || Te === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ji(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || la(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ji(n), Ki(l)) {
        case 2:
        case 8:
          l = Ho;
          break;
        case 32:
          l = iu;
          break;
        case 268435456:
          l = _o;
          break;
        default:
          l = iu;
      }
      return n = Kd.bind(null, e), l = Vi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ji(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Kd(e, t) {
    if (Fe !== 0 && Fe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ai() && e.callbackNode !== l)
      return null;
    var n = ye;
    return n = su(
      e,
      e === De ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (zd(e, n, t), Zd(e, yt()), e.callbackNode != null && e.callbackNode === l ? Kd.bind(null, e) : null);
  }
  function Fd(e, t) {
    if (ai()) return null;
    zd(e, t, !0);
  }
  function $y() {
    sg(function() {
      (Ee & 6) !== 0 ? Vi(
        jo,
        Iy
      ) : Xd();
    });
  }
  function Br() {
    if (Ul === 0) {
      var e = wn;
      e === 0 && (e = cu, cu <<= 1, (cu & 261888) === 0 && (cu = 256)), Ul = e;
    }
    return Ul;
  }
  function Wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mu("" + e);
  }
  function Id(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Py(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = Wd(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? Wd(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
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
                if (Ul !== 0) {
                  var v = f ? Id(a, f) : new FormData(a);
                  er(
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
                typeof i == "function" && (m.preventDefault(), v = f ? Id(a, f) : new FormData(a), er(
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
  for (var jr = 0; jr < pc.length; jr++) {
    var Hr = pc[jr], eg = Hr.toLowerCase(), tg = Hr[0].toUpperCase() + Hr.slice(1);
    Ht(
      eg,
      "on" + tg
    );
  }
  Ht(Cs, "onAnimationEnd"), Ht(ws, "onAnimationIteration"), Ht(zs, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(py, "onTransitionRun"), Ht(vy, "onTransitionStart"), Ht(Sy, "onTransitionCancel"), Ht(Ds, "onTransitionEnd"), mn("onMouseEnter", ["mouseout", "mouseover"]), mn("onMouseLeave", ["mouseout", "mouseover"]), mn("onPointerEnter", ["pointerout", "pointerover"]), mn("onPointerLeave", ["pointerout", "pointerover"]), Gl(
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
  var La = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), lg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La)
  );
  function $d(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var m = n[f], v = m.instance, O = m.currentTarget;
            if (m = m.listener, v !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = O;
            try {
              i(a);
            } catch (B) {
              Au(B);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (m = n[f], v = m.instance, O = m.currentTarget, m = m.listener, v !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = O;
            try {
              i(a);
            } catch (B) {
              Au(B);
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
    l.has(n) || (Pd(t, e, 2, !1), l.add(n));
  }
  function _r(e, t, l) {
    var n = 0;
    t && (n |= 4), Pd(
      l,
      e,
      n,
      t
    );
  }
  var ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[ci]) {
      e[ci] = !0, Jo.forEach(function(l) {
        l !== "selectionchange" && (lg.has(l) || _r(l, !1, e), _r(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ci] || (t[ci] = !0, _r("selectionchange", !1, t));
    }
  }
  function Pd(e, t, l, n) {
    switch (wh(t)) {
      case 2:
        var a = Dg;
        break;
      case 8:
        a = Mg;
        break;
      default:
        a = Pr;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !ac || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function qr(e, t, l, n, a) {
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
            if (f = fn(m), f === null) return;
            if (v = f.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              n = i = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        n = n.return;
      }
    ns(function() {
      var O = i, B = lc(l), L = [];
      e: {
        var C = Ms.get(e);
        if (C !== void 0) {
          var N = vu, K = e;
          switch (e) {
            case "keypress":
              if (gu(l) === 0) break e;
            case "keydown":
            case "keyup":
              N = F0;
              break;
            case "focusin":
              K = "focus", N = rc;
              break;
            case "focusout":
              K = "blur", N = rc;
              break;
            case "beforeblur":
            case "afterblur":
              N = rc;
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
              N = is;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = _0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = $0;
              break;
            case Cs:
            case ws:
            case zs:
              N = k0;
              break;
            case Ds:
              N = ey;
              break;
            case "scroll":
            case "scrollend":
              N = j0;
              break;
            case "wheel":
              N = ly;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = G0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = rs;
              break;
            case "toggle":
            case "beforetoggle":
              N = ay;
          }
          var ee = (t & 4) !== 0, ze = !ee && (e === "scroll" || e === "scrollend"), R = ee ? C !== null ? C + "Capture" : null : C;
          ee = [];
          for (var A = O, T; A !== null; ) {
            var H = A;
            if (T = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || T === null || R === null || (H = ia(A, R), H != null && ee.push(
              qa(A, H, T)
            )), ze) break;
            A = A.return;
          }
          0 < ee.length && (C = new N(
            C,
            K,
            null,
            l,
            B
          ), L.push({ event: C, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", C && l !== tc && (K = l.relatedTarget || l.fromElement) && (fn(K) || K[sn]))
            break e;
          if ((N || C) && (C = B.window === B ? B : (C = B.ownerDocument) ? C.defaultView || C.parentWindow : window, N ? (K = l.relatedTarget || l.toElement, N = O, K = K ? fn(K) : null, K !== null && (ze = h(K), ee = K.tag, K !== ze || ee !== 5 && ee !== 27 && ee !== 6) && (K = null)) : (N = null, K = O), N !== K)) {
            if (ee = is, H = "onMouseLeave", R = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ee = rs, H = "onPointerLeave", R = "onPointerEnter", A = "pointer"), ze = N == null ? C : ua(N), T = K == null ? C : ua(K), C = new ee(
              H,
              A + "leave",
              N,
              l,
              B
            ), C.target = ze, C.relatedTarget = T, H = null, fn(B) === O && (ee = new ee(
              R,
              A + "enter",
              K,
              l,
              B
            ), ee.target = T, ee.relatedTarget = ze, H = ee), ze = H, N && K)
              t: {
                for (ee = ng, R = N, A = K, T = 0, H = R; H; H = ee(H))
                  T++;
                H = 0;
                for (var W = A; W; W = ee(W))
                  H++;
                for (; 0 < T - H; )
                  R = ee(R), T--;
                for (; 0 < H - T; )
                  A = ee(A), H--;
                for (; T--; ) {
                  if (R === A || A !== null && R === A.alternate) {
                    ee = R;
                    break t;
                  }
                  R = ee(R), A = ee(A);
                }
                ee = null;
              }
            else ee = null;
            N !== null && eh(
              L,
              C,
              N,
              ee,
              !1
            ), K !== null && ze !== null && eh(
              L,
              ze,
              K,
              ee,
              !0
            );
          }
        }
        e: {
          if (C = O ? ua(O) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var Se = gs;
          else if (ms(C))
            if (ps)
              Se = my;
            else {
              Se = dy;
              var F = fy;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? O && ec(O.elementType) && (Se = gs) : Se = hy;
          if (Se && (Se = Se(e, O))) {
            ys(
              L,
              Se,
              l,
              B
            );
            break e;
          }
          F && F(e, C, O), e === "focusout" && O && C.type === "number" && O.memoizedProps.value != null && Pi(C, "number", C.value);
        }
        switch (F = O ? ua(O) : window, e) {
          case "focusin":
            (ms(F) || F.contentEditable === "true") && (bn = F, mc = O, ma = null);
            break;
          case "focusout":
            ma = mc = bn = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, xs(L, l, B);
            break;
          case "selectionchange":
            if (gy) break;
          case "keydown":
          case "keyup":
            xs(L, l, B);
        }
        var ce;
        if (sc)
          e: {
            switch (e) {
              case "compositionstart":
                var ge = "onCompositionStart";
                break e;
              case "compositionend":
                ge = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ge = "onCompositionUpdate";
                break e;
            }
            ge = void 0;
          }
        else
          Sn ? ds(e, l) && (ge = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ge = "onCompositionStart");
        ge && (os && l.locale !== "ko" && (Sn || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Sn && (ce = as()) : (pl = B, uc = "value" in pl ? pl.value : pl.textContent, Sn = !0)), F = ri(O, ge), 0 < F.length && (ge = new cs(
          ge,
          e,
          null,
          l,
          B
        ), L.push({ event: ge, listeners: F }), ce ? ge.data = ce : (ce = hs(l), ce !== null && (ge.data = ce)))), (ce = iy ? cy(e, l) : ry(e, l)) && (ge = ri(O, "onBeforeInput"), 0 < ge.length && (F = new cs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          B
        ), L.push({
          event: F,
          listeners: ge
        }), F.data = ce)), Py(
          L,
          e,
          O,
          l,
          B
        );
      }
      $d(L, t);
    });
  }
  function qa(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ri(e, t) {
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
  function ng(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function eh(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var m = l, v = m.alternate, O = m.stateNode;
      if (m = m.tag, v !== null && v === n) break;
      m !== 5 && m !== 26 && m !== 27 || O === null || (v = O, a ? (O = ia(l, i), O != null && f.unshift(
        qa(l, O, v)
      )) : a || (O = ia(l, i), O != null && f.push(
        qa(l, O, v)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var ag = /\r\n?/g, ug = /\u0000|\uFFFD/g;
  function th(e) {
    return (typeof e == "string" ? e : "" + e).replace(ag, `
`).replace(ug, "");
  }
  function lh(e, t) {
    return t = th(t), th(e) === t;
  }
  function we(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || gn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && gn(e, "" + n);
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
        ts(e, n, i);
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
        n = mu("" + n), e.setAttribute(l, n);
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
        n = mu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
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
        l = mu("" + n), e.setAttributeNS(
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
        he("beforetoggle", e), he("toggle", e), fu(e, "popover", n);
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
        fu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = U0.get(l) || l, fu(e, l, n));
    }
  }
  function kr(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        ts(e, n, i);
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
        typeof n == "string" ? gn(e, n) : (typeof n == "number" || typeof n == "bigint") && gn(e, "" + n);
        break;
      case "onScroll":
        n != null && he("scroll", e);
        break;
      case "onScrollEnd":
        n != null && he("scrollend", e);
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
        if (!Xo.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[it] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : fu(e, l, n);
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
        var m = i = f = a = null, v = null, O = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var B = l[n];
            if (B != null)
              switch (n) {
                case "name":
                  a = B;
                  break;
                case "type":
                  f = B;
                  break;
                case "checked":
                  v = B;
                  break;
                case "defaultChecked":
                  O = B;
                  break;
                case "value":
                  i = B;
                  break;
                case "defaultValue":
                  m = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null)
                    throw Error(o(137, t));
                  break;
                default:
                  we(e, t, n, B, l, null);
              }
          }
        Io(
          e,
          i,
          m,
          v,
          O,
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
        t = i, l = f, e.multiple = !!n, t != null ? yn(e, !!n, t, !1) : l != null && yn(e, !!n, l, !0);
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
        Po(e, n, a, i);
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
        for (n = 0; n < La.length; n++)
          he(La[n], e);
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
        for (O in l)
          if (l.hasOwnProperty(O) && (n = l[O], n != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                we(e, t, O, n, l, null);
            }
        return;
      default:
        if (ec(t)) {
          for (B in l)
            l.hasOwnProperty(B) && (n = l[B], n !== void 0 && kr(
              e,
              t,
              B,
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
  function ig(e, t, l, n) {
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
        var a = null, i = null, f = null, m = null, v = null, O = null, B = null;
        for (N in l) {
          var L = l[N];
          if (l.hasOwnProperty(N) && L != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = L;
              default:
                n.hasOwnProperty(N) || we(e, t, N, null, n, L);
            }
        }
        for (var C in n) {
          var N = n[C];
          if (L = l[C], n.hasOwnProperty(C) && (N != null || L != null))
            switch (C) {
              case "type":
                i = N;
                break;
              case "name":
                a = N;
                break;
              case "checked":
                O = N;
                break;
              case "defaultChecked":
                B = N;
                break;
              case "value":
                f = N;
                break;
              case "defaultValue":
                m = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(o(137, t));
                break;
              default:
                N !== L && we(
                  e,
                  t,
                  C,
                  N,
                  n,
                  L
                );
            }
        }
        $i(
          e,
          f,
          m,
          v,
          O,
          B,
          i,
          a
        );
        return;
      case "select":
        N = f = m = C = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                N = v;
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
                C = i;
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
        t = m, l = f, n = N, C != null ? yn(e, !!l, C, !1) : !!n != !!l && (t != null ? yn(e, !!l, t, !0) : yn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
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
                C = a;
                break;
              case "defaultValue":
                N = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== i && we(e, t, f, a, n, i);
            }
        $o(e, C, N);
        return;
      case "option":
        for (var K in l)
          C = l[K], l.hasOwnProperty(K) && C != null && !n.hasOwnProperty(K) && (K === "selected" ? e.selected = !1 : we(
            e,
            t,
            K,
            null,
            n,
            C
          ));
        for (v in n)
          C = n[v], N = l[v], n.hasOwnProperty(v) && C !== N && (C != null || N != null) && (v === "selected" ? e.selected = C && typeof C != "function" && typeof C != "symbol" : we(
            e,
            t,
            v,
            C,
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
        for (var ee in l)
          C = l[ee], l.hasOwnProperty(ee) && C != null && !n.hasOwnProperty(ee) && we(e, t, ee, null, n, C);
        for (O in n)
          if (C = n[O], N = l[O], n.hasOwnProperty(O) && C !== N && (C != null || N != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(o(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  O,
                  C,
                  n,
                  N
                );
            }
        return;
      default:
        if (ec(t)) {
          for (var ze in l)
            C = l[ze], l.hasOwnProperty(ze) && C !== void 0 && !n.hasOwnProperty(ze) && kr(
              e,
              t,
              ze,
              void 0,
              n,
              C
            );
          for (B in n)
            C = n[B], N = l[B], !n.hasOwnProperty(B) || C === N || C === void 0 && N === void 0 || kr(
              e,
              t,
              B,
              C,
              n,
              N
            );
          return;
        }
    }
    for (var R in l)
      C = l[R], l.hasOwnProperty(R) && C != null && !n.hasOwnProperty(R) && we(e, t, R, null, n, C);
    for (L in n)
      C = n[L], N = l[L], !n.hasOwnProperty(L) || C === N || C == null && N == null || we(e, t, L, C, n, N);
  }
  function nh(e) {
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
  function cg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, m = a.duration;
        if (i && m && nh(f)) {
          for (f = 0, m = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], O = v.startTime;
            if (O > m) break;
            var B = v.transferSize, L = v.initiatorType;
            B && nh(L) && (v = v.responseEnd, f += B * (v < m ? 1 : (m - O) / (v - O)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Qr = null, Gr = null;
  function oi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ah(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function uh(e, t) {
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
  function Yr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Vr = null;
  function rg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Vr ? !1 : (Vr = e, !0) : (Vr = null, !1);
  }
  var ih = typeof setTimeout == "function" ? setTimeout : void 0, og = typeof clearTimeout == "function" ? clearTimeout : void 0, ch = typeof Promise == "function" ? Promise : void 0, sg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ch < "u" ? function(e) {
    return ch.resolve(null).then(e).catch(fg);
  } : ih;
  function fg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Bl(e) {
    return e === "head";
  }
  function rh(e, t) {
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
          ka(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ka(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, m = i.nodeName;
            i[aa] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && ka(e.ownerDocument.body);
      l = a;
    } while (l);
    Zn(t);
  }
  function oh(e, t) {
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
  function Jr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jr(l), Wi(l);
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
  function dg(e, t, l, n) {
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
      if (e = Ut(e.nextSibling), e === null) break;
    }
    return null;
  }
  function hg(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function sh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ut(e.nextSibling), e === null)) return null;
    return e;
  }
  function Xr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Zr(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function mg(e, t) {
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
  function Ut(e) {
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
            return Ut(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function dh(e) {
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
  function hh(e, t, l) {
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
  function ka(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Wi(e);
  }
  var Bt = /* @__PURE__ */ new Map(), mh = /* @__PURE__ */ new Set();
  function si(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var fl = Q.d;
  Q.d = {
    f: yg,
    r: gg,
    D: pg,
    C: vg,
    L: Sg,
    m: bg,
    X: Eg,
    S: Ag,
    M: Rg
  };
  function yg() {
    var e = fl.f(), t = ti();
    return e || t;
  }
  function gg(e) {
    var t = dn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Mf(t) : fl.r(e);
  }
  var Vn = typeof document > "u" ? null : document;
  function yh(e, t, l) {
    var n = Vn;
    if (n && typeof t == "string" && t) {
      var a = Ot(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), mh.has(a) || (mh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), We(t), n.head.appendChild(t)));
    }
  }
  function pg(e) {
    fl.D(e), yh("dns-prefetch", e, null);
  }
  function vg(e, t) {
    fl.C(e, t), yh("preconnect", e, t);
  }
  function Sg(e, t, l) {
    fl.L(e, t, l);
    var n = Vn;
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
          i = Jn(e);
          break;
        case "script":
          i = Xn(e);
      }
      Bt.has(i) || (e = U(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Bt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Qa(i)) || t === "script" && n.querySelector(Ga(i)) || (t = n.createElement("link"), lt(t, "link", e), We(t), n.head.appendChild(t)));
    }
  }
  function bg(e, t) {
    fl.m(e, t);
    var l = Vn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Ot(n) + '"][href="' + Ot(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Xn(e);
      }
      if (!Bt.has(i) && (e = U({ rel: "modulepreload", href: e }, t), Bt.set(i, e), l.querySelector(a) === null)) {
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
  function Ag(e, t, l) {
    fl.S(e, t, l);
    var n = Vn;
    if (n && e) {
      var a = hn(n).hoistableStyles, i = Jn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = n.querySelector(
          Qa(i)
        ))
          m.loading = 5;
        else {
          e = U(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Bt.get(i)) && Fr(e, l);
          var v = f = n.createElement("link");
          We(v), lt(v, "link", e), v._p = new Promise(function(O, B) {
            v.onload = O, v.onerror = B;
          }), v.addEventListener("load", function() {
            m.loading |= 1;
          }), v.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, fi(f, t, n);
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
  function Eg(e, t) {
    fl.X(e, t);
    var l = Vn;
    if (l && e) {
      var n = hn(l).hoistableScripts, a = Xn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = U({ src: e, async: !0 }, t), (t = Bt.get(a)) && Wr(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Rg(e, t) {
    fl.M(e, t);
    var l = Vn;
    if (l && e) {
      var n = hn(l).hoistableScripts, a = Xn(e), i = n.get(a);
      i || (i = l.querySelector(Ga(a)), i || (e = U({ src: e, async: !0, type: "module" }, t), (t = Bt.get(a)) && Wr(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function gh(e, t, l, n) {
    var a = (a = oe.current) ? si(a) : null;
    if (!a) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Jn(l.href), l = hn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Jn(l.href);
          var i = hn(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            Qa(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Bt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Bt.set(e, l), i || Tg(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Xn(l), l = hn(
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
  function Jn(e) {
    return 'href="' + Ot(e) + '"';
  }
  function Qa(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ph(e) {
    return U({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Tg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), lt(t, "link", l), We(t), e.head.appendChild(t));
  }
  function Xn(e) {
    return '[src="' + Ot(e) + '"]';
  }
  function Ga(e) {
    return "script[async]" + e;
  }
  function vh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Ot(l.href) + '"]'
          );
          if (n)
            return t.instance = n, We(n), n;
          var a = U({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), We(n), lt(n, "style", a), fi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Jn(l.href);
          var i = e.querySelector(
            Qa(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, We(i), i;
          n = ph(l), (a = Bt.get(a)) && Fr(n, a), i = (e.ownerDocument || e).createElement("link"), We(i);
          var f = i;
          return f._p = new Promise(function(m, v) {
            f.onload = m, f.onerror = v;
          }), lt(i, "link", n), t.state.loading |= 4, fi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Xn(l.src), (a = e.querySelector(
            Ga(i)
          )) ? (t.instance = a, We(a), a) : (n = l, (a = Bt.get(i)) && (n = U({}, l), Wr(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), We(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, fi(n, l.precedence, e));
    return t.instance;
  }
  function fi(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var m = n[f];
      if (m.dataset.precedence === t) i = m;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Fr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Wr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var di = null;
  function Sh(e, t, l) {
    if (di === null) {
      var n = /* @__PURE__ */ new Map(), a = di = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = di, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
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
  function bh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function xg(e, t, l) {
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
  function Og(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Jn(n.href), i = t.querySelector(
          Qa(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = hi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, We(i);
          return;
        }
        i = t.ownerDocument || t, n = ph(n), (a = Bt.get(a)) && Fr(n, a), i = i.createElement("link"), We(i);
        var f = i;
        f._p = new Promise(function(m, v) {
          f.onload = m, f.onerror = v;
        }), lt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = hi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Ir = 0;
  function Cg(e, t) {
    return e.stylesheets && e.count === 0 && yi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && yi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ir === 0 && (Ir = 62500 * cg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && yi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > Ir ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function hi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) yi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var mi = null;
  function yi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, mi = /* @__PURE__ */ new Map(), t.forEach(wg, e), mi = null, hi.call(e));
  }
  function wg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = mi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), mi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = hi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ya = {
    $$typeof: le,
    Provider: null,
    Consumer: null,
    _currentValue: se,
    _currentValue2: se,
    _threadCount: 0
  };
  function zg(e, t, l, n, a, i, f, m, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xi(0), this.hiddenUpdates = Xi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Eh(e, t, l, n, a, i, f, m, v, O, B, L) {
    return e = new zg(
      e,
      t,
      l,
      f,
      v,
      O,
      B,
      L,
      m
    ), t = 1, i === !0 && (t |= 24), i = St(3, null, null, t), e.current = i, i.stateNode = e, t = Dc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Bc(i), e;
  }
  function Rh(e) {
    return e ? (e = Rn, e) : Rn;
  }
  function Th(e, t, l, n, a, i) {
    a = Rh(a), n.context === null ? n.context = a : n.pendingContext = a, n = Rl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Tl(e, n, t), l !== null && (dt(l, e, t), Aa(l, e, t));
  }
  function xh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function $r(e, t) {
    xh(e, t), (e = e.alternate) && xh(e, t);
  }
  function Oh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Xl(e, 67108864);
      t !== null && dt(t, e, 67108864), $r(e, 67108864);
    }
  }
  function Ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Zi(t);
      var l = Xl(e, t);
      l !== null && dt(l, e, t), $r(e, t);
    }
  }
  var gi = !0;
  function Dg(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = Q.p;
    try {
      Q.p = 2, Pr(e, t, l, n);
    } finally {
      Q.p = i, q.T = a;
    }
  }
  function Mg(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = Q.p;
    try {
      Q.p = 8, Pr(e, t, l, n);
    } finally {
      Q.p = i, q.T = a;
    }
  }
  function Pr(e, t, l, n) {
    if (gi) {
      var a = eo(n);
      if (a === null)
        qr(
          e,
          t,
          n,
          pi,
          l
        ), zh(e, n);
      else if (Ug(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (zh(e, n), t & 4 && -1 < Ng.indexOf(e)) {
        for (; a !== null; ) {
          var i = dn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Ql(i.pendingLanes);
                  if (f !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - pt(f);
                      m.entanglements[1] |= v, f &= ~v;
                    }
                    Xt(i), (Ee & 6) === 0 && (Pu = yt() + 500, _a(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Xl(i, 2), m !== null && dt(m, i, 2), ti(), $r(i, 2);
            }
          if (i = eo(n), i === null && qr(
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
        qr(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function eo(e) {
    return e = lc(e), to(e);
  }
  var pi = null;
  function to(e) {
    if (pi = null, e = fn(e), e !== null) {
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
  function wh(e) {
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
        switch (p0()) {
          case jo:
            return 2;
          case Ho:
            return 8;
          case iu:
          case v0:
            return 32;
          case _o:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lo = !1, jl = null, Hl = null, _l = null, Va = /* @__PURE__ */ new Map(), Ja = /* @__PURE__ */ new Map(), Ll = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zh(e, t) {
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
        _l = null;
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
    }, t !== null && (t = dn(t), t !== null && Oh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ug(e, t, l, n, a) {
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
        return _l = Xa(
          _l,
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
  function Dh(e) {
    var t = fn(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Yo(e.priority, function() {
              Ch(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Yo(e.priority, function() {
              Ch(l);
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
      var l = eo(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        tc = n, l.target.dispatchEvent(n), tc = null;
      } else
        return t = dn(l), t !== null && Oh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Mh(e, t, l) {
    vi(e) && l.delete(t);
  }
  function Bg() {
    lo = !1, jl !== null && vi(jl) && (jl = null), Hl !== null && vi(Hl) && (Hl = null), _l !== null && vi(_l) && (_l = null), Va.forEach(Mh), Ja.forEach(Mh);
  }
  function Si(e, t) {
    e.blockedOn === t && (e.blockedOn = null, lo || (lo = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Bg
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
            if (to(n || l) === null)
              continue;
            break;
          }
          var i = dn(l);
          i !== null && (e.splice(t, 3), t -= 3, er(
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
    function t(v) {
      return Si(v, e);
    }
    jl !== null && Si(jl, e), Hl !== null && Si(Hl, e), _l !== null && Si(_l, e), Va.forEach(t), Ja.forEach(t);
    for (var l = 0; l < Ll.length; l++) {
      var n = Ll[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Ll.length && (l = Ll[0], l.blockedOn === null); )
      Dh(l), l.blockedOn === null && Ll.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || Nh(l);
        else if (f) {
          var m = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              m = f.formAction;
            else if (to(a) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[n + 1] = m : (l.splice(n, 3), n -= 3), Nh(l);
        }
      }
  }
  function Uh() {
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
  function no(e) {
    this._internalRoot = e;
  }
  Ai.prototype.render = no.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, n = Tt();
    Th(l, n, e, t, null, null);
  }, Ai.prototype.unmount = no.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Th(e.current, 2, null, e, null, null), ti(), t[sn] = null;
    }
  };
  function Ai(e) {
    this._internalRoot = e;
  }
  Ai.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Go();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Ll.length && t !== 0 && t < Ll[l].priority; l++) ;
      Ll.splice(l, 0, e), l === 0 && Dh(e);
    }
  };
  var Bh = r.version;
  if (Bh !== "19.2.3")
    throw Error(
      o(
        527,
        Bh,
        "19.2.3"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = S(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var jg = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ei = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ei.isDisabled && Ei.supportsFiber)
      try {
        ta = Ei.inject(
          jg
        ), gt = Ei;
      } catch {
      }
  }
  return Fa.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, n = "", a = Qf, i = Gf, f = Yf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Eh(
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
      Uh
    ), e[sn] = t.current, Lr(e), new no(t);
  }, Fa.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var n = !1, a = "", i = Qf, f = Gf, m = Yf, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = Eh(
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
      Uh
    ), t.context = Rh(null), l = t.current, n = Tt(), n = Zi(n), a = Rl(n), a.callback = null, Tl(l, a, n), l = n, t.current.lanes = l, na(t, l), Xt(t), e[sn] = t.current, Lr(e), new Ai(t);
  }, Fa.version = "19.2.3", Fa;
}
var Wh;
function E1() {
  if (Wh) return so.exports;
  Wh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), so.exports = A1(), so.exports;
}
var R1 = E1();
const Hm = ({ label: u, onClick: c, disabled: r, type: s = "button", className: o, children: d, mainButtonStyle: h }) => /* @__PURE__ */ z.jsx(
  "button",
  {
    className: o || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: c,
    disabled: r,
    type: s,
    style: h,
    children: d || u
  }
), Kn = x.forwardRef(
  (u, c) => {
    const {
      label: r,
      startIcon: s,
      endIcon: o,
      error: d,
      helperText: h,
      optional: g,
      className: p,
      options: y,
      ...S
    } = u, E = !!d || !!h, U = S.type === "select" || !!y;
    return /* @__PURE__ */ z.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      r && /* @__PURE__ */ z.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        r,
        " ",
        g && /* @__PURE__ */ z.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ z.jsxs("div", { className: "flex! items-center! relative!", children: [
        s && /* @__PURE__ */ z.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: s
          }
        ),
        U ? /* @__PURE__ */ z.jsx(
          "select",
          {
            ref: c,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...S,
            children: y && y.map((k) => /* @__PURE__ */ z.jsx("option", { value: k.value, children: k.label }, k.value))
          }
        ) : /* @__PURE__ */ z.jsx(
          "input",
          {
            ref: c,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...S
          }
        ),
        o && /* @__PURE__ */ z.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!",
            "aria-hidden": !0,
            children: o
          }
        )
      ] }),
      d && typeof d == "string" && /* @__PURE__ */ z.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
      !d && h && /* @__PURE__ */ z.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h })
    ] });
  }
), _m = ({
  type: u,
  message: c,
  actionText: r,
  onActionClick: s,
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
        return /* @__PURE__ */ z.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ z.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ z.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ z.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, y = g();
  return /* @__PURE__ */ z.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`, children: [
    /* @__PURE__ */ z.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ z.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ z.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: c }),
      r && s && /* @__PURE__ */ z.jsx(
        "button",
        {
          type: "button",
          onClick: s,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: r
        }
      ),
      h
    ] }),
    o && /* @__PURE__ */ z.jsxs(
      "button",
      {
        type: "button",
        onClick: o,
        className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
        children: [
          /* @__PURE__ */ z.jsx("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ z.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    )
  ] });
}, Lm = () => /* @__PURE__ */ z.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Ia extends Error {
}
Ia.prototype.name = "InvalidTokenError";
function T1(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (c, r) => {
    let s = r.charCodeAt(0).toString(16).toUpperCase();
    return s.length < 2 && (s = "0" + s), "%" + s;
  }));
}
function x1(u) {
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
    return T1(c);
  } catch {
    return atob(c);
  }
}
function qm(u, c) {
  if (typeof u != "string")
    throw new Ia("Invalid token specified: must be a string");
  c || (c = {});
  const r = c.header === !0 ? 0 : 1, s = u.split(".")[r];
  if (typeof s != "string")
    throw new Ia(`Invalid token specified: missing part #${r + 1}`);
  let o;
  try {
    o = x1(s);
  } catch (d) {
    throw new Ia(`Invalid token specified: invalid base64 for part #${r + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new Ia(`Invalid token specified: invalid json for part #${r + 1} (${d.message})`);
  }
}
function O1() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const c = u.split(".");
  return c.length >= 2 ? "." + c.slice(-2).join(".") : "";
}
function Mi(u, c, r, s = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + r);
  const d = O1(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = s ? encodeURIComponent(c) : c;
  document.cookie = `${u}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function km(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
var Ih = {};
const { toString: C1 } = Object.prototype, { getPrototypeOf: zo } = Object, { iterator: ji, toStringTag: Qm } = Symbol, Hi = /* @__PURE__ */ ((u) => (c) => {
  const r = C1.call(c);
  return u[r] || (u[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kt = (u) => (u = u.toLowerCase(), (c) => Hi(c) === u), _i = (u) => (c) => typeof c === u, { isArray: $n } = Array, Fn = _i("undefined");
function lu(u) {
  return u !== null && !Fn(u) && u.constructor !== null && !Fn(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Gm = kt("ArrayBuffer");
function w1(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && Gm(u.buffer), c;
}
const z1 = _i("string"), ht = _i("function"), Ym = _i("number"), nu = (u) => u !== null && typeof u == "object", D1 = (u) => u === !0 || u === !1, Ci = (u) => {
  if (Hi(u) !== "object")
    return !1;
  const c = zo(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Qm in u) && !(ji in u);
}, M1 = (u) => {
  if (!nu(u) || lu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, N1 = kt("Date"), U1 = kt("File"), B1 = kt("Blob"), j1 = kt("FileList"), H1 = (u) => nu(u) && ht(u.pipe), _1 = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((c = Hi(u)) === "formdata" || // detect form-data instance
  c === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, L1 = kt("URLSearchParams"), [q1, k1, Q1, G1] = ["ReadableStream", "Request", "Response", "Headers"].map(kt), Y1 = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function au(u, c, { allOwnKeys: r = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let s, o;
  if (typeof u != "object" && (u = [u]), $n(u))
    for (s = 0, o = u.length; s < o; s++)
      c.call(null, u[s], s, u);
  else {
    if (lu(u))
      return;
    const d = r ? Object.getOwnPropertyNames(u) : Object.keys(u), h = d.length;
    let g;
    for (s = 0; s < h; s++)
      g = d[s], c.call(null, u[g], g, u);
  }
}
function Vm(u, c) {
  if (lu(u))
    return null;
  c = c.toLowerCase();
  const r = Object.keys(u);
  let s = r.length, o;
  for (; s-- > 0; )
    if (o = r[s], c === o.toLowerCase())
      return o;
  return null;
}
const un = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jm = (u) => !Fn(u) && u !== un;
function So() {
  const { caseless: u, skipUndefined: c } = Jm(this) && this || {}, r = {}, s = (o, d) => {
    const h = u && Vm(r, d) || d;
    Ci(r[h]) && Ci(o) ? r[h] = So(r[h], o) : Ci(o) ? r[h] = So({}, o) : $n(o) ? r[h] = o.slice() : (!c || !Fn(o)) && (r[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && au(arguments[o], s);
  return r;
}
const V1 = (u, c, r, { allOwnKeys: s } = {}) => (au(c, (o, d) => {
  r && ht(o) ? u[d] = km(o, r) : u[d] = o;
}, { allOwnKeys: s }), u), J1 = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), X1 = (u, c, r, s) => {
  u.prototype = Object.create(c.prototype, s), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), r && Object.assign(u.prototype, r);
}, Z1 = (u, c, r, s) => {
  let o, d, h;
  const g = {};
  if (c = c || {}, u == null) return c;
  do {
    for (o = Object.getOwnPropertyNames(u), d = o.length; d-- > 0; )
      h = o[d], (!s || s(h, u, c)) && !g[h] && (c[h] = u[h], g[h] = !0);
    u = r !== !1 && zo(u);
  } while (u && (!r || r(u, c)) && u !== Object.prototype);
  return c;
}, K1 = (u, c, r) => {
  u = String(u), (r === void 0 || r > u.length) && (r = u.length), r -= c.length;
  const s = u.indexOf(c, r);
  return s !== -1 && s === r;
}, F1 = (u) => {
  if (!u) return null;
  if ($n(u)) return u;
  let c = u.length;
  if (!Ym(c)) return null;
  const r = new Array(c);
  for (; c-- > 0; )
    r[c] = u[c];
  return r;
}, W1 = /* @__PURE__ */ ((u) => (c) => u && c instanceof u)(typeof Uint8Array < "u" && zo(Uint8Array)), I1 = (u, c) => {
  const s = (u && u[ji]).call(u);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const d = o.value;
    c.call(u, d[0], d[1]);
  }
}, $1 = (u, c) => {
  let r;
  const s = [];
  for (; (r = u.exec(c)) !== null; )
    s.push(r);
  return s;
}, P1 = kt("HTMLFormElement"), ev = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, s, o) {
    return s.toUpperCase() + o;
  }
), $h = (({ hasOwnProperty: u }) => (c, r) => u.call(c, r))(Object.prototype), tv = kt("RegExp"), Xm = (u, c) => {
  const r = Object.getOwnPropertyDescriptors(u), s = {};
  au(r, (o, d) => {
    let h;
    (h = c(o, d, u)) !== !1 && (s[d] = h || o);
  }), Object.defineProperties(u, s);
}, lv = (u) => {
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
}, nv = (u, c) => {
  const r = {}, s = (o) => {
    o.forEach((d) => {
      r[d] = !0;
    });
  };
  return $n(u) ? s(u) : s(String(u).split(c)), r;
}, av = () => {
}, uv = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function iv(u) {
  return !!(u && ht(u.append) && u[Qm] === "FormData" && u[ji]);
}
const cv = (u) => {
  const c = new Array(10), r = (s, o) => {
    if (nu(s)) {
      if (c.indexOf(s) >= 0)
        return;
      if (lu(s))
        return s;
      if (!("toJSON" in s)) {
        c[o] = s;
        const d = $n(s) ? [] : {};
        return au(s, (h, g) => {
          const p = r(h, o + 1);
          !Fn(p) && (d[g] = p);
        }), c[o] = void 0, d;
      }
    }
    return s;
  };
  return r(u, 0);
}, rv = kt("AsyncFunction"), ov = (u) => u && (nu(u) || ht(u)) && ht(u.then) && ht(u.catch), Zm = ((u, c) => u ? setImmediate : c ? ((r, s) => (un.addEventListener("message", ({ source: o, data: d }) => {
  o === un && d === r && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), un.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ht(un.postMessage)
), sv = typeof queueMicrotask < "u" ? queueMicrotask.bind(un) : typeof Ih < "u" && Ih.nextTick || Zm, fv = (u) => u != null && ht(u[ji]), D = {
  isArray: $n,
  isArrayBuffer: Gm,
  isBuffer: lu,
  isFormData: _1,
  isArrayBufferView: w1,
  isString: z1,
  isNumber: Ym,
  isBoolean: D1,
  isObject: nu,
  isPlainObject: Ci,
  isEmptyObject: M1,
  isReadableStream: q1,
  isRequest: k1,
  isResponse: Q1,
  isHeaders: G1,
  isUndefined: Fn,
  isDate: N1,
  isFile: U1,
  isBlob: B1,
  isRegExp: tv,
  isFunction: ht,
  isStream: H1,
  isURLSearchParams: L1,
  isTypedArray: W1,
  isFileList: j1,
  forEach: au,
  merge: So,
  extend: V1,
  trim: Y1,
  stripBOM: J1,
  inherits: X1,
  toFlatObject: Z1,
  kindOf: Hi,
  kindOfTest: kt,
  endsWith: K1,
  toArray: F1,
  forEachEntry: I1,
  matchAll: $1,
  isHTMLForm: P1,
  hasOwnProperty: $h,
  hasOwnProp: $h,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xm,
  freezeMethods: lv,
  toObjectSet: nv,
  toCamelCase: ev,
  noop: av,
  toFiniteNumber: uv,
  findKey: Vm,
  global: un,
  isContextDefined: Jm,
  isSpecCompliantForm: iv,
  toJSONObject: cv,
  isAsyncFn: rv,
  isThenable: ov,
  setImmediate: Zm,
  asap: sv,
  isIterable: fv
};
function ie(u, c, r, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
D.inherits(ie, Error, {
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
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Km = ie.prototype, Fm = {};
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
  Fm[u] = { value: u };
});
Object.defineProperties(ie, Fm);
Object.defineProperty(Km, "isAxiosError", { value: !0 });
ie.from = (u, c, r, s, o, d) => {
  const h = Object.create(Km);
  D.toFlatObject(u, h, function(S) {
    return S !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = c == null && u ? u.code : c;
  return ie.call(h, g, p, r, s, o), u && h.cause == null && Object.defineProperty(h, "cause", { value: u, configurable: !0 }), h.name = u && u.name || "Error", d && Object.assign(h, d), h;
};
const dv = null;
function bo(u) {
  return D.isPlainObject(u) || D.isArray(u);
}
function Wm(u) {
  return D.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Ph(u, c, r) {
  return u ? u.concat(c).map(function(o, d) {
    return o = Wm(o), !r && d ? "[" + o + "]" : o;
  }).join(r ? "." : "") : c;
}
function hv(u) {
  return D.isArray(u) && !u.some(bo);
}
const mv = D.toFlatObject(D, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function Li(u, c, r) {
  if (!D.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), r = D.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, M) {
    return !D.isUndefined(M[j]);
  });
  const s = r.metaTokens, o = r.visitor || S, d = r.dots, h = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(c);
  if (!D.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(w) {
    if (w === null) return "";
    if (D.isDate(w))
      return w.toISOString();
    if (D.isBoolean(w))
      return w.toString();
    if (!p && D.isBlob(w))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(w) || D.isTypedArray(w) ? p && typeof Blob == "function" ? new Blob([w]) : Buffer.from(w) : w;
  }
  function S(w, j, M) {
    let J = w;
    if (w && !M && typeof w == "object") {
      if (D.endsWith(j, "{}"))
        j = s ? j : j.slice(0, -2), w = JSON.stringify(w);
      else if (D.isArray(w) && hv(w) || (D.isFileList(w) || D.endsWith(j, "[]")) && (J = D.toArray(w)))
        return j = Wm(j), J.forEach(function(X, le) {
          !(D.isUndefined(X) || X === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Ph([j], le, d) : h === null ? j : j + "[]",
            y(X)
          );
        }), !1;
    }
    return bo(w) ? !0 : (c.append(Ph(M, j, d), y(w)), !1);
  }
  const E = [], U = Object.assign(mv, {
    defaultVisitor: S,
    convertValue: y,
    isVisitable: bo
  });
  function k(w, j) {
    if (!D.isUndefined(w)) {
      if (E.indexOf(w) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      E.push(w), D.forEach(w, function(J, Y) {
        (!(D.isUndefined(J) || J === null) && o.call(
          c,
          J,
          D.isString(Y) ? Y.trim() : Y,
          j,
          U
        )) === !0 && k(J, j ? j.concat(Y) : [Y]);
      }), E.pop();
    }
  }
  if (!D.isObject(u))
    throw new TypeError("data must be an object");
  return k(u), c;
}
function em(u) {
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
function Do(u, c) {
  this._pairs = [], u && Li(u, this, c);
}
const Im = Do.prototype;
Im.append = function(c, r) {
  this._pairs.push([c, r]);
};
Im.toString = function(c) {
  const r = c ? function(s) {
    return c.call(this, s, em);
  } : em;
  return this._pairs.map(function(o) {
    return r(o[0]) + "=" + r(o[1]);
  }, "").join("&");
};
function yv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function $m(u, c, r) {
  if (!c)
    return u;
  const s = r && r.encode || yv;
  D.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let d;
  if (o ? d = o(c, r) : d = D.isURLSearchParams(c) ? c.toString() : new Do(c, r).toString(s), d) {
    const h = u.indexOf("#");
    h !== -1 && (u = u.slice(0, h)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
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
    D.forEach(this.handlers, function(s) {
      s !== null && c(s);
    });
  }
}
const Pm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gv = typeof URLSearchParams < "u" ? URLSearchParams : Do, pv = typeof FormData < "u" ? FormData : null, vv = typeof Blob < "u" ? Blob : null, Sv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gv,
    FormData: pv,
    Blob: vv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Mo = typeof window < "u" && typeof document < "u", Ao = typeof navigator == "object" && navigator || void 0, bv = Mo && (!Ao || ["ReactNative", "NativeScript", "NS"].indexOf(Ao.product) < 0), Av = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ev = Mo && window.location.href || "http://localhost", Rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Mo,
  hasStandardBrowserEnv: bv,
  hasStandardBrowserWebWorkerEnv: Av,
  navigator: Ao,
  origin: Ev
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...Rv,
  ...Sv
};
function Tv(u, c) {
  return Li(u, new at.classes.URLSearchParams(), {
    visitor: function(r, s, o, d) {
      return at.isNode && D.isBuffer(r) ? (this.append(s, r.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function xv(u) {
  return D.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function Ov(u) {
  const c = {}, r = Object.keys(u);
  let s;
  const o = r.length;
  let d;
  for (s = 0; s < o; s++)
    d = r[s], c[d] = u[d];
  return c;
}
function e0(u) {
  function c(r, s, o, d) {
    let h = r[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= r.length;
    return h = !h && D.isArray(o) ? o.length : h, p ? (D.hasOwnProp(o, h) ? o[h] = [o[h], s] : o[h] = s, !g) : ((!o[h] || !D.isObject(o[h])) && (o[h] = []), c(r, s, o[h], d) && D.isArray(o[h]) && (o[h] = Ov(o[h])), !g);
  }
  if (D.isFormData(u) && D.isFunction(u.entries)) {
    const r = {};
    return D.forEachEntry(u, (s, o) => {
      c(xv(s), o, r, 0);
    }), r;
  }
  return null;
}
function Cv(u, c, r) {
  if (D.isString(u))
    try {
      return (c || JSON.parse)(u), D.trim(u);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(u);
}
const uu = {
  transitional: Pm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, r) {
    const s = r.getContentType() || "", o = s.indexOf("application/json") > -1, d = D.isObject(c);
    if (d && D.isHTMLForm(c) && (c = new FormData(c)), D.isFormData(c))
      return o ? JSON.stringify(e0(c)) : c;
    if (D.isArrayBuffer(c) || D.isBuffer(c) || D.isStream(c) || D.isFile(c) || D.isBlob(c) || D.isReadableStream(c))
      return c;
    if (D.isArrayBufferView(c))
      return c.buffer;
    if (D.isURLSearchParams(c))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let g;
    if (d) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Tv(c, this.formSerializer).toString();
      if ((g = D.isFileList(c)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Li(
          g ? { "files[]": c } : c,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (r.setContentType("application/json", !1), Cv(c)) : c;
  }],
  transformResponse: [function(c) {
    const r = this.transitional || uu.transitional, s = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (D.isResponse(c) || D.isReadableStream(c))
      return c;
    if (c && D.isString(c) && (s && !this.responseType || o)) {
      const h = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(c, this.parseReviver);
      } catch (g) {
        if (h)
          throw g.name === "SyntaxError" ? ie.from(g, ie.ERR_BAD_RESPONSE, this, null, this.response) : g;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
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
D.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  uu.headers[u] = {};
});
const wv = D.toObjectSet([
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
]), zv = (u) => {
  const c = {};
  let r, s, o;
  return u && u.split(`
`).forEach(function(h) {
    o = h.indexOf(":"), r = h.substring(0, o).trim().toLowerCase(), s = h.substring(o + 1).trim(), !(!r || c[r] && wv[r]) && (r === "set-cookie" ? c[r] ? c[r].push(s) : c[r] = [s] : c[r] = c[r] ? c[r] + ", " + s : s);
  }), c;
}, lm = /* @__PURE__ */ Symbol("internals");
function Wa(u) {
  return u && String(u).trim().toLowerCase();
}
function wi(u) {
  return u === !1 || u == null ? u : D.isArray(u) ? u.map(wi) : String(u);
}
function Dv(u) {
  const c = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = r.exec(u); )
    c[s[1]] = s[2];
  return c;
}
const Mv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function mo(u, c, r, s, o) {
  if (D.isFunction(s))
    return s.call(this, c, r);
  if (o && (c = r), !!D.isString(c)) {
    if (D.isString(s))
      return c.indexOf(s) !== -1;
    if (D.isRegExp(s))
      return s.test(c);
  }
}
function Nv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, r, s) => r.toUpperCase() + s);
}
function Uv(u, c) {
  const r = D.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + r, {
      value: function(o, d, h) {
        return this[s].call(this, c, o, d, h);
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
    const o = this;
    function d(g, p, y) {
      const S = Wa(p);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const E = D.findKey(o, S);
      (!E || o[E] === void 0 || y === !0 || y === void 0 && o[E] !== !1) && (o[E || p] = wi(g));
    }
    const h = (g, p) => D.forEach(g, (y, S) => d(y, S, p));
    if (D.isPlainObject(c) || c instanceof this.constructor)
      h(c, r);
    else if (D.isString(c) && (c = c.trim()) && !Mv(c))
      h(zv(c), r);
    else if (D.isObject(c) && D.isIterable(c)) {
      let g = {}, p, y;
      for (const S of c) {
        if (!D.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = S[0]] = (p = g[y]) ? D.isArray(p) ? [...p, S[1]] : [p, S[1]] : S[1];
      }
      h(g, r);
    } else
      c != null && d(r, c, s);
    return this;
  }
  get(c, r) {
    if (c = Wa(c), c) {
      const s = D.findKey(this, c);
      if (s) {
        const o = this[s];
        if (!r)
          return o;
        if (r === !0)
          return Dv(o);
        if (D.isFunction(r))
          return r.call(this, o, s);
        if (D.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, r) {
    if (c = Wa(c), c) {
      const s = D.findKey(this, c);
      return !!(s && this[s] !== void 0 && (!r || mo(this, this[s], s, r)));
    }
    return !1;
  }
  delete(c, r) {
    const s = this;
    let o = !1;
    function d(h) {
      if (h = Wa(h), h) {
        const g = D.findKey(s, h);
        g && (!r || mo(s, s[g], g, r)) && (delete s[g], o = !0);
      }
    }
    return D.isArray(c) ? c.forEach(d) : d(c), o;
  }
  clear(c) {
    const r = Object.keys(this);
    let s = r.length, o = !1;
    for (; s--; ) {
      const d = r[s];
      (!c || mo(this, this[d], d, c, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(c) {
    const r = this, s = {};
    return D.forEach(this, (o, d) => {
      const h = D.findKey(s, d);
      if (h) {
        r[h] = wi(o), delete r[d];
        return;
      }
      const g = c ? Nv(d) : String(d).trim();
      g !== d && delete r[d], r[g] = wi(o), s[g] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (s, o) => {
      s != null && s !== !1 && (r[o] = c && D.isArray(s) ? s.join(", ") : s);
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
    return r.forEach((o) => s.set(o)), s;
  }
  static accessor(c) {
    const s = (this[lm] = this[lm] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = Wa(h);
      s[g] || (Uv(o, h), s[g] = !0);
    }
    return D.isArray(c) ? c.forEach(d) : d(c), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(mt.prototype, ({ value: u }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(s) {
      this[r] = s;
    }
  };
});
D.freezeMethods(mt);
function yo(u, c) {
  const r = this || uu, s = c || r, o = mt.from(s.headers);
  let d = s.data;
  return D.forEach(u, function(g) {
    d = g.call(r, d, o.normalize(), c ? c.status : void 0);
  }), o.normalize(), d;
}
function t0(u) {
  return !!(u && u.__CANCEL__);
}
function Pn(u, c, r) {
  ie.call(this, u ?? "canceled", ie.ERR_CANCELED, c, r), this.name = "CanceledError";
}
D.inherits(Pn, ie, {
  __CANCEL__: !0
});
function l0(u, c, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status) ? u(r) : c(new ie(
    "Request failed with status code " + r.status,
    [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function Bv(u) {
  const c = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return c && c[1] || "";
}
function jv(u, c) {
  u = u || 10;
  const r = new Array(u), s = new Array(u);
  let o = 0, d = 0, h;
  return c = c !== void 0 ? c : 1e3, function(p) {
    const y = Date.now(), S = s[d];
    h || (h = y), r[o] = p, s[o] = y;
    let E = d, U = 0;
    for (; E !== o; )
      U += r[E++], E = E % u;
    if (o = (o + 1) % u, o === d && (d = (d + 1) % u), y - h < c)
      return;
    const k = S && y - S;
    return k ? Math.round(U * 1e3 / k) : void 0;
  };
}
function Hv(u, c) {
  let r = 0, s = 1e3 / c, o, d;
  const h = (y, S = Date.now()) => {
    r = S, o = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const S = Date.now(), E = S - r;
    E >= s ? h(y, S) : (o = y, d || (d = setTimeout(() => {
      d = null, h(o);
    }, s - E)));
  }, () => o && h(o)];
}
const Ni = (u, c, r = 3) => {
  let s = 0;
  const o = jv(50, 250);
  return Hv((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - s, y = o(p), S = h <= g;
    s = h;
    const E = {
      loaded: h,
      total: g,
      progress: g ? h / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && S ? (g - h) / y : void 0,
      event: d,
      lengthComputable: g != null,
      [c ? "download" : "upload"]: !0
    };
    u(E);
  }, r);
}, nm = (u, c) => {
  const r = u != null;
  return [(s) => c[0]({
    lengthComputable: r,
    total: u,
    loaded: s
  }), c[1]];
}, am = (u) => (...c) => D.asap(() => u(...c)), _v = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (r) => (r = new URL(r, at.origin), u.protocol === r.protocol && u.host === r.host && (c || u.port === r.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Lv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, r, s, o, d, h) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(c)}`];
      D.isNumber(r) && g.push(`expires=${new Date(r).toUTCString()}`), D.isString(s) && g.push(`path=${s}`), D.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), D.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function qv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function kv(u, c) {
  return c ? u.replace(/\/?\/$/, "") + "/" + c.replace(/^\/+/, "") : u;
}
function n0(u, c, r) {
  let s = !qv(c);
  return u && (s || r == !1) ? kv(u, c) : c;
}
const um = (u) => u instanceof mt ? { ...u } : u;
function rn(u, c) {
  c = c || {};
  const r = {};
  function s(y, S, E, U) {
    return D.isPlainObject(y) && D.isPlainObject(S) ? D.merge.call({ caseless: U }, y, S) : D.isPlainObject(S) ? D.merge({}, S) : D.isArray(S) ? S.slice() : S;
  }
  function o(y, S, E, U) {
    if (D.isUndefined(S)) {
      if (!D.isUndefined(y))
        return s(void 0, y, E, U);
    } else return s(y, S, E, U);
  }
  function d(y, S) {
    if (!D.isUndefined(S))
      return s(void 0, S);
  }
  function h(y, S) {
    if (D.isUndefined(S)) {
      if (!D.isUndefined(y))
        return s(void 0, y);
    } else return s(void 0, S);
  }
  function g(y, S, E) {
    if (E in c)
      return s(y, S);
    if (E in u)
      return s(void 0, y);
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
    headers: (y, S, E) => o(um(y), um(S), E, !0)
  };
  return D.forEach(Object.keys({ ...u, ...c }), function(S) {
    const E = p[S] || o, U = E(u[S], c[S], S);
    D.isUndefined(U) && E !== g || (r[S] = U);
  }), r;
}
const a0 = (u) => {
  const c = rn({}, u);
  let { data: r, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = c;
  if (c.headers = h = mt.from(h), c.url = $m(n0(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), D.isFormData(r)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (D.isFunction(r.getHeaders)) {
      const p = r.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([S, E]) => {
        y.includes(S.toLowerCase()) && h.set(S, E);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (s && D.isFunction(s) && (s = s(c)), s || s !== !1 && _v(c.url))) {
    const p = o && d && Lv.read(d);
    p && h.set(o, p);
  }
  return c;
}, Qv = typeof XMLHttpRequest < "u", Gv = Qv && function(u) {
  return new Promise(function(r, s) {
    const o = a0(u);
    let d = o.data;
    const h = mt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, S, E, U, k, w;
    function j() {
      k && k(), w && w(), o.cancelToken && o.cancelToken.unsubscribe(S), o.signal && o.signal.removeEventListener("abort", S);
    }
    let M = new XMLHttpRequest();
    M.open(o.method.toUpperCase(), o.url, !0), M.timeout = o.timeout;
    function J() {
      if (!M)
        return;
      const X = mt.from(
        "getAllResponseHeaders" in M && M.getAllResponseHeaders()
      ), I = {
        data: !g || g === "text" || g === "json" ? M.responseText : M.response,
        status: M.status,
        statusText: M.statusText,
        headers: X,
        config: u,
        request: M
      };
      l0(function(ne) {
        r(ne), j();
      }, function(ne) {
        s(ne), j();
      }, I), M = null;
    }
    "onloadend" in M ? M.onloadend = J : M.onreadystatechange = function() {
      !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(J);
    }, M.onabort = function() {
      M && (s(new ie("Request aborted", ie.ECONNABORTED, u, M)), M = null);
    }, M.onerror = function(le) {
      const I = le && le.message ? le.message : "Network Error", fe = new ie(I, ie.ERR_NETWORK, u, M);
      fe.event = le || null, s(fe), M = null;
    }, M.ontimeout = function() {
      let le = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const I = o.transitional || Pm;
      o.timeoutErrorMessage && (le = o.timeoutErrorMessage), s(new ie(
        le,
        I.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        u,
        M
      )), M = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in M && D.forEach(h.toJSON(), function(le, I) {
      M.setRequestHeader(I, le);
    }), D.isUndefined(o.withCredentials) || (M.withCredentials = !!o.withCredentials), g && g !== "json" && (M.responseType = o.responseType), y && ([U, w] = Ni(y, !0), M.addEventListener("progress", U)), p && M.upload && ([E, k] = Ni(p), M.upload.addEventListener("progress", E), M.upload.addEventListener("loadend", k)), (o.cancelToken || o.signal) && (S = (X) => {
      M && (s(!X || X.type ? new Pn(null, u, M) : X), M.abort(), M = null);
    }, o.cancelToken && o.cancelToken.subscribe(S), o.signal && (o.signal.aborted ? S() : o.signal.addEventListener("abort", S)));
    const Y = Bv(o.url);
    if (Y && at.protocols.indexOf(Y) === -1) {
      s(new ie("Unsupported protocol " + Y + ":", ie.ERR_BAD_REQUEST, u));
      return;
    }
    M.send(d || null);
  });
}, Yv = (u, c) => {
  const { length: r } = u = u ? u.filter(Boolean) : [];
  if (c || r) {
    let s = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const S = y instanceof Error ? y : this.reason;
        s.abort(S instanceof ie ? S : new Pn(S instanceof Error ? S.message : S));
      }
    };
    let h = c && setTimeout(() => {
      h = null, d(new ie(`timeout ${c} of ms exceeded`, ie.ETIMEDOUT));
    }, c);
    const g = () => {
      u && (h && clearTimeout(h), h = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = s;
    return p.unsubscribe = () => D.asap(g), p;
  }
}, Vv = function* (u, c) {
  let r = u.byteLength;
  if (r < c) {
    yield u;
    return;
  }
  let s = 0, o;
  for (; s < r; )
    o = s + c, yield u.slice(s, o), s = o;
}, Jv = async function* (u, c) {
  for await (const r of Xv(u))
    yield* Vv(r, c);
}, Xv = async function* (u) {
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
}, im = (u, c, r, s) => {
  const o = Jv(u, c);
  let d = 0, h, g = (p) => {
    h || (h = !0, s && s(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: S } = await o.next();
        if (y) {
          g(), p.close();
          return;
        }
        let E = S.byteLength;
        if (r) {
          let U = d += E;
          r(U);
        }
        p.enqueue(new Uint8Array(S));
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
}, cm = 64 * 1024, { isFunction: Ti } = D, Zv = (({ Request: u, Response: c }) => ({
  Request: u,
  Response: c
}))(D.global), {
  ReadableStream: rm,
  TextEncoder: om
} = D.global, sm = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, Kv = (u) => {
  u = D.merge.call({
    skipUndefined: !0
  }, Zv, u);
  const { fetch: c, Request: r, Response: s } = u, o = c ? Ti(c) : typeof fetch == "function", d = Ti(r), h = Ti(s);
  if (!o)
    return !1;
  const g = o && Ti(rm), p = o && (typeof om == "function" ? /* @__PURE__ */ ((w) => (j) => w.encode(j))(new om()) : async (w) => new Uint8Array(await new r(w).arrayBuffer())), y = d && g && sm(() => {
    let w = !1;
    const j = new r(at.origin, {
      body: new rm(),
      method: "POST",
      get duplex() {
        return w = !0, "half";
      }
    }).headers.has("Content-Type");
    return w && !j;
  }), S = h && g && sm(() => D.isReadableStream(new s("").body)), E = {
    stream: S && ((w) => w.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((w) => {
    !E[w] && (E[w] = (j, M) => {
      let J = j && j[w];
      if (J)
        return J.call(j);
      throw new ie(`Response type '${w}' is not supported`, ie.ERR_NOT_SUPPORT, M);
    });
  });
  const U = async (w) => {
    if (w == null)
      return 0;
    if (D.isBlob(w))
      return w.size;
    if (D.isSpecCompliantForm(w))
      return (await new r(at.origin, {
        method: "POST",
        body: w
      }).arrayBuffer()).byteLength;
    if (D.isArrayBufferView(w) || D.isArrayBuffer(w))
      return w.byteLength;
    if (D.isURLSearchParams(w) && (w = w + ""), D.isString(w))
      return (await p(w)).byteLength;
  }, k = async (w, j) => {
    const M = D.toFiniteNumber(w.getContentLength());
    return M ?? U(j);
  };
  return async (w) => {
    let {
      url: j,
      method: M,
      data: J,
      signal: Y,
      cancelToken: X,
      timeout: le,
      onDownloadProgress: I,
      onUploadProgress: fe,
      responseType: ne,
      headers: P,
      withCredentials: Ae = "same-origin",
      fetchOptions: Re
    } = a0(w), Ze = c || fetch;
    ne = ne ? (ne + "").toLowerCase() : "text";
    let ve = Yv([Y, X && X.toAbortSignal()], le), Le = null;
    const je = ve && ve.unsubscribe && (() => {
      ve.unsubscribe();
    });
    let Ke;
    try {
      if (fe && y && M !== "get" && M !== "head" && (Ke = await k(P, J)) !== 0) {
        let me = new r(j, {
          method: "POST",
          body: J,
          duplex: "half"
        }), b;
        if (D.isFormData(J) && (b = me.headers.get("content-type")) && P.setContentType(b), me.body) {
          const [_, V] = nm(
            Ke,
            Ni(am(fe))
          );
          J = im(me.body, cm, _, V);
        }
      }
      D.isString(Ae) || (Ae = Ae ? "include" : "omit");
      const G = d && "credentials" in r.prototype, q = {
        ...Re,
        signal: ve,
        method: M.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: J,
        duplex: "half",
        credentials: G ? Ae : void 0
      };
      Le = d && new r(j, q);
      let Q = await (d ? Ze(Le, Re) : Ze(j, q));
      const se = S && (ne === "stream" || ne === "response");
      if (S && (I || se && je)) {
        const me = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          me[Z] = Q[Z];
        });
        const b = D.toFiniteNumber(Q.headers.get("content-length")), [_, V] = I && nm(
          b,
          Ni(am(I), !0)
        ) || [];
        Q = new s(
          im(Q.body, cm, _, () => {
            V && V(), je && je();
          }),
          me
        );
      }
      ne = ne || "text";
      let $ = await E[D.findKey(E, ne) || "text"](Q, w);
      return !se && je && je(), await new Promise((me, b) => {
        l0(me, b, {
          data: $,
          headers: mt.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: w,
          request: Le
        });
      });
    } catch (G) {
      throw je && je(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new ie("Network Error", ie.ERR_NETWORK, w, Le),
        {
          cause: G.cause || G
        }
      ) : ie.from(G, G && G.code, w, Le);
    }
  };
}, Fv = /* @__PURE__ */ new Map(), u0 = (u) => {
  let c = u && u.env || {};
  const { fetch: r, Request: s, Response: o } = c, d = [
    s,
    o,
    r
  ];
  let h = d.length, g = h, p, y, S = Fv;
  for (; g--; )
    p = d[g], y = S.get(p), y === void 0 && S.set(p, y = g ? /* @__PURE__ */ new Map() : Kv(c)), S = y;
  return y;
};
u0();
const No = {
  http: dv,
  xhr: Gv,
  fetch: {
    get: u0
  }
};
D.forEach(No, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const fm = (u) => `- ${u}`, Wv = (u) => D.isFunction(u) || u === null || u === !1;
function Iv(u, c) {
  u = D.isArray(u) ? u : [u];
  const { length: r } = u;
  let s, o;
  const d = {};
  for (let h = 0; h < r; h++) {
    s = u[h];
    let g;
    if (o = s, !Wv(s) && (o = No[(g = String(s)).toLowerCase()], o === void 0))
      throw new ie(`Unknown adapter '${g}'`);
    if (o && (D.isFunction(o) || (o = o.get(c))))
      break;
    d[g || "#" + h] = o;
  }
  if (!o) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = r ? h.length > 1 ? `since :
` + h.map(fm).join(`
`) : " " + fm(h[0]) : "as no adapter specified";
    throw new ie(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const i0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: Iv,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: No
};
function go(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new Pn(null, u);
}
function dm(u) {
  return go(u), u.headers = mt.from(u.headers), u.data = yo.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), i0.getAdapter(u.adapter || uu.adapter, u)(u).then(function(s) {
    return go(u), s.data = yo.call(
      u,
      u.transformResponse,
      s
    ), s.headers = mt.from(s.headers), s;
  }, function(s) {
    return t0(s) || (go(u), s && s.response && (s.response.data = yo.call(
      u,
      u.transformResponse,
      s.response
    ), s.response.headers = mt.from(s.response.headers))), Promise.reject(s);
  });
}
const c0 = "1.13.2", qi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  qi[u] = function(s) {
    return typeof s === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const hm = {};
qi.transitional = function(c, r, s) {
  function o(d, h) {
    return "[Axios v" + c0 + "] Transitional option '" + d + "'" + h + (s ? ". " + s : "");
  }
  return (d, h, g) => {
    if (c === !1)
      throw new ie(
        o(h, " has been removed" + (r ? " in " + r : "")),
        ie.ERR_DEPRECATED
      );
    return r && !hm[h] && (hm[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), c ? c(d, h, g) : !0;
  };
};
qi.spelling = function(c) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${c}`), !0);
};
function $v(u, c, r) {
  if (typeof u != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let o = s.length;
  for (; o-- > 0; ) {
    const d = s[o], h = c[d];
    if (h) {
      const g = u[d], p = g === void 0 || h(g, d, u);
      if (p !== !0)
        throw new ie("option " + d + " must be " + p, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ie("Unknown option " + d, ie.ERR_BAD_OPTION);
  }
}
const zi = {
  assertOptions: $v,
  validators: qi
}, Zt = zi.validators;
let cn = class {
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
  async request(c, r) {
    try {
      return await this._request(c, r);
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
  _request(c, r) {
    typeof c == "string" ? (r = r || {}, r.url = c) : r = c || {}, r = rn(this.defaults, r);
    const { transitional: s, paramsSerializer: o, headers: d } = r;
    s !== void 0 && zi.assertOptions(s, {
      silentJSONParsing: Zt.transitional(Zt.boolean),
      forcedJSONParsing: Zt.transitional(Zt.boolean),
      clarifyTimeoutError: Zt.transitional(Zt.boolean)
    }, !1), o != null && (D.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : zi.assertOptions(o, {
      encode: Zt.function,
      serialize: Zt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), zi.assertOptions(r, {
      baseUrl: Zt.spelling("baseURL"),
      withXsrfToken: Zt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let h = d && D.merge(
      d.common,
      d[r.method]
    );
    d && D.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (w) => {
        delete d[w];
      }
    ), r.headers = mt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(j) {
      typeof j.runWhen == "function" && j.runWhen(r) === !1 || (p = p && j.synchronous, g.unshift(j.fulfilled, j.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let S, E = 0, U;
    if (!p) {
      const w = [dm.bind(this), void 0];
      for (w.unshift(...g), w.push(...y), U = w.length, S = Promise.resolve(r); E < U; )
        S = S.then(w[E++], w[E++]);
      return S;
    }
    U = g.length;
    let k = r;
    for (; E < U; ) {
      const w = g[E++], j = g[E++];
      try {
        k = w(k);
      } catch (M) {
        j.call(this, M);
        break;
      }
    }
    try {
      S = dm.call(this, k);
    } catch (w) {
      return Promise.reject(w);
    }
    for (E = 0, U = y.length; E < U; )
      S = S.then(y[E++], y[E++]);
    return S;
  }
  getUri(c) {
    c = rn(this.defaults, c);
    const r = n0(c.baseURL, c.url, c.allowAbsoluteUrls);
    return $m(r, c.params, c.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(c) {
  cn.prototype[c] = function(r, s) {
    return this.request(rn(s || {}, {
      method: c,
      url: r,
      data: (s || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(c) {
  function r(s) {
    return function(d, h, g) {
      return this.request(rn(g || {}, {
        method: c,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  cn.prototype[c] = r(), cn.prototype[c + "Form"] = r(!0);
});
let Pv = class r0 {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(d) {
      r = d;
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
    }, c(function(d, h, g) {
      s.reason || (s.reason = new Pn(d, h, g), r(s.reason));
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
      token: new r0(function(o) {
        c = o;
      }),
      cancel: c
    };
  }
};
function eS(u) {
  return function(r) {
    return u.apply(null, r);
  };
}
function tS(u) {
  return D.isObject(u) && u.isAxiosError === !0;
}
const Eo = {
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
Object.entries(Eo).forEach(([u, c]) => {
  Eo[c] = u;
});
function o0(u) {
  const c = new cn(u), r = km(cn.prototype.request, c);
  return D.extend(r, cn.prototype, c, { allOwnKeys: !0 }), D.extend(r, c, null, { allOwnKeys: !0 }), r.create = function(o) {
    return o0(rn(u, o));
  }, r;
}
const Be = o0(uu);
Be.Axios = cn;
Be.CanceledError = Pn;
Be.CancelToken = Pv;
Be.isCancel = t0;
Be.VERSION = c0;
Be.toFormData = Li;
Be.AxiosError = ie;
Be.Cancel = Be.CanceledError;
Be.all = function(c) {
  return Promise.all(c);
};
Be.spread = eS;
Be.isAxiosError = tS;
Be.mergeConfig = rn;
Be.AxiosHeaders = mt;
Be.formToJSON = (u) => e0(D.isHTMLForm(u) ? new FormData(u) : u);
Be.getAdapter = i0.getAdapter;
Be.HttpStatusCode = Eo;
Be.default = Be;
const {
  Axios: mS,
  AxiosError: yS,
  CanceledError: gS,
  isCancel: pS,
  CancelToken: vS,
  VERSION: SS,
  all: bS,
  Cancel: AS,
  isAxiosError: ES,
  spread: RS,
  toFormData: TS,
  AxiosHeaders: xS,
  HttpStatusCode: OS,
  formToJSON: CS,
  getAdapter: wS,
  mergeConfig: zS
} = Be, lS = "https://dev-demo-env.colibrilearning.com", ki = (u) => {
  const c = u.startsWith("/") ? u : `/${u}`;
  return `${lS}${c}`;
}, nS = async (u, c) => {
  const r = ki("api/auth"), s = { username: u, password: c };
  try {
    return (await Be.post(r, s)).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, aS = async (u) => {
  const c = ki("api/register");
  try {
    return (await Be.post(c, u)).data;
  } catch (r) {
    throw console.error("Error during registration:", r), r.response?.data?.details?.errorMessage ? new Error(r.response.data.details.errorMessage) : r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.details ? new Error(r.response.data.details) : r.response?.data?.message ? new Error(r.response.data.message) : r.response?.status === 500 ? new Error("Registration failed. Please try again.") : r.message ? new Error(r.message) : new Error("Registration failed");
  }
}, s0 = async (u) => {
  const c = ki("api/check-email");
  try {
    return (await Be.post(c, { email: u })).data;
  } catch (r) {
    return console.error("Error checking email:", r), r.response?.data ? r.response.data : { exists: !1 };
  }
}, uS = async (u) => {
  const c = ki("api/refresh"), r = { refresh_token: u };
  try {
    return (await Be.post(c, r)).data;
  } catch (s) {
    throw console.error("Error during token refresh:", s), s;
  }
};
function f0(u, c) {
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
    const o = c.displayName.split(/\s+/).filter((d) => d.length >= 2);
    for (const d of o)
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
const iS = (u) => {
  try {
    if (!document.cookie.split(";").find((o) => o.trim().startsWith("X-Credential=")))
      return !1;
    const r = document.cookie.split(";").find((o) => o.trim().startsWith("access_token="));
    if (!r)
      return !1;
    const s = r.split("=")[1];
    if (!s)
      return !1;
    try {
      const { jwtDecode: o } = require("jwt-decode"), d = o(s), h = Math.floor(Date.now() / 1e3);
      return !(!d.exp || h >= d.exp);
    } catch (o) {
      return console.error("[checkTokenAndRedirect] Token decode error:", o), !1;
    }
  } catch (c) {
    return console.error("[checkTokenAndRedirect] Error:", c), !1;
  }
}, cS = () => {
  try {
    const u = localStorage.getItem("refresh_token"), c = localStorage.getItem("refresh_token_time");
    if (!u || !c)
      return !1;
    const r = 10080 * 60 * 1e3;
    return Date.now() - parseInt(c) < r;
  } catch (u) {
    return console.error("[isRefreshTokenValid] Error:", u), !1;
  }
}, d0 = async (u, c, r = !0) => {
  const { tokens: s } = await nS(u, c);
  if (s.access_token) {
    const o = qm(s.access_token), d = (o.exp || 0) - Math.floor(Date.now() / 1e3);
    Mi("access_token", s.access_token, d, !0), o.x_credentials && Mi("X-Credential", o.x_credentials, d, !1), localStorage.setItem("user_state", "authenticated"), r && s.refresh_token ? (localStorage.setItem("refresh_token", s.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return s;
}, rS = ({
  type: u,
  message: c,
  duration: r = 5e3,
  onClose: s,
  className: o = ""
}) => {
  const [d, h] = x.useState(!1), [g, p] = x.useState(!1);
  x.useEffect(() => {
    setTimeout(() => h(!0), 10);
    const k = setTimeout(() => {
      y();
    }, r);
    return () => clearTimeout(k);
  }, [r]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), s();
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
        return /* @__PURE__ */ z.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ z.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ z.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ z.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, U = S();
  return /* @__PURE__ */ z.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ z.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${U.bg}`, children: [
        /* @__PURE__ */ z.jsx("div", { className: `flex-shrink-0! ${U.icon}`, children: E() }),
        /* @__PURE__ */ z.jsx("div", { className: `ml-3! flex-1! ${U.text}`, children: /* @__PURE__ */ z.jsx("p", { className: "text-sm! font-medium!", children: c }) }),
        /* @__PURE__ */ z.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${U.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ z.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ z.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ z.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, h0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAWf0AAFn9AFjKaEnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XmcXXV9//HXuTMTSAKyLyIgQkErBaniwiISMhsBanFJEUFsVayUWqvWrVUjtRWtUrWKgqVW6xqwimDIzARHkQQUEBQBZYf+AFmysBjITOae3x+TkEzIMsu99/M957yejwcPQB/kvrnG+bzP52wgSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSdKWZdEBJE1QHzOpsRMj7EwbuwA7ATtRZycydiJjGjlbATPW/BPbkNNBRgZsv+Y/W/+/XwWsXPPXj5Ozmow68OjT/33GSuqMUGMpsJR8zZ/rPEIHS1nFw8zhsWb/q0tqHAuAlIpB2nmKPWlnH/I1f8DzyNiTnJ3J1gx62Do26CYNk7OUbE05gPuAu8m5m4y7gbtYzb3MYVVoSkmABUBqrT5m0sYLqfMCeHrArx32ewHtkfFaIAfuB+5a88doQYDbmcavmcWKyHBSlVgApGbpZw9yXkLGC4EDgZcAzwfaYoMl7QFybiLjZjKuo85NTOMmZvFUdDCpbCwA0lTNZxo78hLqvJiMg8k5GPgTYJvoaCUxBNxEzo3UuJERrmMrrmEWT0QHk4rMAiBN1AKexTRexghHAkeQcQQwPTpWxYwAvyPjSmAxdX5GD3dFh5KKxAIgbUk/ewBHwJqBD38K1EIzaWMegDWFIOM6duDnHMpwdCgpVRYAaUOL2I0ResnoBY4Bdo2OpEl5jIwrqHMZbSykkzujA0kpsQBI82ljOw4hoxM4ATgMj/DL6E4yFpGziA4u8xoCVZ0FQNXUx65kvIrRgX88sENwIrXWk+QsfroQ9HBddCCp1SwAqo7L2Y8R/gJ4HXAI/v7XWjl3kHERdebTyy+j40it4A9AlVsfe5HxGuD1wOH4e15bdg9wMRkX0sWV0WGkZvGHocpnAXvSzmtx6Gvq7gLmU+PrdHJzdBipkfzBqHJYwC608QYy5uLQV3PcSM584Js+c0Bl4A9JFdc8ahzJMdR5E6Pn9X0Yj1qhDlxFztfZlv/hcJ6MDiRNhgVAxTPI7gxzGjlvI2O/6DiqtOVkXAh8gS5ujA4jTYQFQMWw7mj/dODPgY7oSNIGriPnfEZPEfwhOoy0JRYApe1ynsNq3kbGW4A9o+NI47CcnG+Qcx693BQdRtoUC4DStIiDyfkbct4EbB0dR5qkxeR8km4uJSOPDiOtzwKgtAxwJPB+co7D358qj1+Rcy4jfI05rIoOI4E/YJWC+UxjB04i573AQdFxpKbJ+T1wHsN8juNZHh1H1WYBUJwFPIt2/hJ4L57fV5VkPE7OV2njHGZzT3QcVZMFQK03yM6s5n3kvAPYJjqOFGgY+BY1zvJ1xWo1C4Ba52K2ZTpnAB8EtouOIyVkGPgObXyM2dwRHUbVYAFQ8w2yDcP8DfABYPvoOFLChsn4KjXOYjb3RYdRuVkA1Dx9zCTjrYwe8e8WHUcqkCEy/psR5tHLA9FhVE4WADXefKaxHW8mYx7w7Og4UoH9AbiAGv9KJw9Gh1G5WADUODkZA5wCfAJ4TnQcqUQeA/6F1XzO5wioUSwAaoxFvJQ6n2X0VbySmuNeMj5MF1+PDqLiswBoavrZg4yPkvNWoBYdR6qEjEFG+Ht6+VV0FBWXBUCTs4TpPME7yfhHcraNjiNVUB34JjnvpYeHosOoeCwAmrg+TiDj88A+0VEksQI4m9V81usDNBEWAI3fQl5EjS8CR0RHkfQMvyXnnfQwEB1ExWAB0JYNsjVDfICMDwLTouNI2qwL6eAMZvFIdBClzQKgzRvgSHLOB/44OoqkcVtGzgfp4fzoIEqXBUAbN8B25JwFnIlX90tFtYCMd9DFvdFBlB4LgJ6pj+PJOBfYKzqKpClbCZzFCj7NXEaiwygdFgCts4jdqPNvwKnRUSQ1WM5V5LyNXm6KjqI0WAA0qp9Tgc8BO0RHkdQ0Q2ScxXLOdhsgC0DVLeBZtPNF4JToKJJa5mraOIXZ3BEdRHEsAFU2wCvI+Sawb3QUSS33GHAm3fxPdBDFsABU0SDtDPFPZPwT0BYdR1KoCxni7RzP8uggai0LQNX08TwyvoFv7ZO0zr3knEoPV0QHUetYAKpkgDeR80Vgm+gokpIzAnyaHfkwhzIcHUbNZwGogkG2Z5gLgNdER5GUvKsZ4Q0cy93RQdRcFoCyW8TBjPC/ZOwXHUVSYSyjxhvpZGF0EDWPF4CVWT9vIOdiMnaLjiKpUKaT80ZOZTr78WN+Qh4dSI3nBqCMBmlnmI8D74+OIqnwfkQHpzCLFdFB1FgWgLJZwC608x3gmOgokkrjdjJeQxc3RgdR4/iWtzLp5wjauQGHv6TG+iNyfk4fp0UHUeO4ASiLPk4n4z+AadFRJJVYxvnswJneKlh8FoCiu5YOlnEe8JfRUSRVRMYgq3itTw8sNgtAkV3MtmzNfDJ6o6NIqpzbgTl0c1t0EE2OBaCoLuc5jHApcEh0FEmVtZSMP6eLK6ODaOK8CLCIFvIiRrgah7+kWDuRM0AfJ0UH0cRZAIpmEb208TNgz+gokgRsTca36GNedBBNjKcAimT0Sv8vAu3RUSTpGXK+wjTOYBaro6NoyywARZCT0c9HyfhodBRJ2oI+VjOXOTwWHUSbZwFI3XymsT3fxjf5SSqOa+ngWGbxSHQQbZoFIGWXMINpfM/b/CQV0C200cVs7osOoo2zAKSqj5lkXAzMjo4iSZN0FzU66eTO6CB6JgtAigbZniEWkHFYdBRJmqJ7gU4fGJQeC0Bq+tiVjD68x19SeTxIjW46+XV0EK3jcwBSMsjuZFyOw19SuexGnZ/Qx8ujg2gdNwCpuJznMsIi4I+io0hSkzwKHEc3i6ODyA1AGhZxACP8DIe/pHLbDuijj2Oig8gNQLwB9ibnCuC50VEkqUVWknMsPVwRHaTKLACRRt/odwWwb3QUSWqxx9bcInhNdJCqsgBEWcAutPMT4IXRUSQpyAoyjqGL66ODVJEFIMIA2wE/JufF0VEkKdhDZBxNF7dEB6kaLwJstT5mknOpw1+SANiVnH76eF50kKqxALTSEqaTcSlwZHQUSUrInsAA/ewRHaRKLACtMp9pPMGFwNHRUSQpORn7AYMsYrfoKFVhAWiF+bSteaXvcdFRJClhB5CzgIvZNjpIFVgAWmF7zgFeEx1DkpKX82KmcyGDtEdHKTsLQLP183fAO6NjSFKB9DDMl6NDlJ23ATbTAMeRczHQFh1FkgroA3TzyegQZWUBaJY+XkLGT4GZ0VEkqaByck6lh29GBykjC0AzXMY+1LiKjN2jo0hSwT0FdPoGwcazADTaAp5FO1cCB0VHkaSSWEqNw+nk1uggZeJFgI10LR208T0c/pLUSDtR5zL62DU6SJlYABppGeeT0RkdQ5JKaF8yvscCtooOUhYWgEbp453Am6NjSFKJHUk7n4sOURZeA9AIiziMOj8BpkVHkaTSy3krPVwQHaPoLABTNcjuDHMd+BILSWqRp6hxFJ1cEx2kyDwFMBXX0sFq5uPwl6RW2po6F7GAXaKDFJkFYCqWcQ45r4yOIUkVtDftfJv5Pml1siwAkzXAycCZ0TEkqcJmsz3/HB2iqLwGYDIWcTB1rgJmREeRpIrLyZlLDxdFBykaC8BEXcoOdHANGftFR5EkAfAENV5OJzdHBykSTwFMVAdfdfhLUlK2oc53GGTr6CBFYgGYiH7eTsaro2NIkp7hIIY5OzpEkXgKYLwW8kfUuB7YJjqKJGmjcjJOoIsfRQcpAgvAeFxLB8u4EnhZdBRJ0mY9RI2D6eTB6CCp8xTAeCzjn3H4S1IR7Eqdr5J7gLslPkBhSxbySjLOx7IkSUWxP3fxIP/DtdFBUmZD2pxBtmeYXwF7R0eRJE3IU2S8jC5ujA6SKo9qN2eYL+Hwl6Qi2pqcb3lr4KZZADalj9OAk6JjSJIm7U8Y8lHBm+IpgI1ZyLOpcROwQ3QUSdKU1IGj6GZxdJDUuAHYmBpfxOEvSWVQA/6TBWwVHSQ1FoAN9fE64MToGJKkhnkBHXwgOkRqPAWwvgG2I+cm4DnRUSRJDTVEnRfTy03RQVLhBmB9OZ/B4S9JZTSNGhcwz7m3ll/EWv28Cvir6BiSpKZ5OYfzjugQqfAUAMASpvMEvwb+KDqKJKmJMh6nzoH08H/RUaK5AQB4gnk4/CWp/HK2JePL0TFS4AZgIS+ixjVAR3QUSVKL5JxED9+NjhGp2huAnGzNPf8Of0mqkozPsYBnRceIVO0CMMApwBHRMSRJLbcb7dV+NkB1TwFcwgy24hZ82Y8kVdUQdQ6kl9ujg0So7gZgaz6Iw1+SqmwaGWdHh4hSzQ1AH3uR8VtgRnQUSVKwnG56GIiO0WrV3ABkfBqHvyQJIOPfGaQ9OkarVa8A9HE48ProGJKkZBzIUPWeBFutUwDzqHE4VwMvjY4iSUrKw3RwALNYER2kVaq1ATiMN+PwlyQ90y4M8+HoEK1UnQ3A6G1/twPPjo4iSUrSEG28kNncER2kFaqzAdiKM3H4S5I2bRoj1dkCVGMDMMg2DHMHsGt0FElS0kbIOIgubokO0mzV2AAM8S4c/pKkLWsj5yPRIVqh/BuAAbYj505gx+gokqRCqFPnxfTyq+ggzVT+DUDOe3D4S5LGr0at/FuAcm8AFrETde6Ear/yUZI0YTk1Xk4n10QHaZZybwDqvA+HvyRp4rKyXwtQ3g3AAnahnTuBbaKjSJIKKuMwurg6OkYzlHcD0MaHcPhLkqYi52PREZqlnBuA0XP/9wAzo6NIkgqupFuAcm4Acs7E4S9JaoScv4+O0Azl2wAsYCvauJuM3aOjSJJKYYQ2nl+2dwSUbwPQxmkOf0lSA7UxwjujQzRauTYAORkD3AT8cXQUSVKprKTG3nSyNDpIo5RrAzDACTj8JUmNN4MRTo8O0UjlKgDwnugAkqSSyvg7Btk6OkajlKcA9HMocFR0DElSae3Gat4QHaJRylMAMt4bHUGSVHI57yYvx/VzpfiX4HKeywi3A+3RUSRJJZczhx4ui44xVeXYAIzwdhz+kqRWqHFGdIRGKP4GYJB2hrkH2CM6iiSpEkbI2Jcu7o0OMhXF3wAMcwIOf0lS67SRc1p0iKkqfgGAt0UHkCRVztuYT1t0iKkodgFYwJ5Ad3QMSVLl7MUOdEaHmIpiF4A23grFbmCSpILKeWt0hKko7kWA82lje+4C9oqOIqmyHgRuA+4nYwV1RqjRRs4OwHOA/YFdQhOqmYapsRedPBgdZDKKe+vc9vTg8JfUWkuBi4DL6eBnzOL3W/wn+tmDnKPI6AReA+zQ5IxqnQ7qnAZ8KjrIZBR3AzDA98n58+gYkiogY5Ccz7Ijl3Eow5P+deYzje05Dng3cGTD8inSrXTxAjLy6CATVcwCsJBnU+NeirzBkFQEi6nzbnr5RcN/5X6OAM4BXtbwX1utdjTd/DQ6xEQV8yLAGifj8JfUPCvIOI0uXtmU4Q/QzWKWcBgZp5PxeFM+Q61SyGcCFHMD0M8vgJdGx5BUSlczwhs4lrtb9on97E/Gd8h5ccs+U420nBXszlyGooNMRPE2AIvYFzg0OoakEsr4AR3MaunwB+jmNoY5nJzvtfRz1Sg7sF3xnklTvAJQ5/UUdXMhKWXnsZjXMounQj59DquYxknkfD3k8zU1GX8RHWGiijdI+7keOCQ6hqQSyfkK3bw9iSu5R59xMp/RWwZVFBmPM5PdOJwno6OMV7E2AP3sj8NfUiNlnJvM8AeYywjbcAoZv4yOognI2ZbH6YmOMRHFKgBwUnQASSWS8xU6OTOZ4b/W4TxJjbnAY9FRNAEFOw1QtALw+ugAkkoitSP/Dc3mDuA90TE0IcdzCTOiQ4xXcQpAHy8ADoqOIakEUj3y39AS/gv4eXQMjds2bMVx0SHGqzgFwPW/pEZI/ch/ffOok/He6BiakLnRAcarOAUg43XRESQVXMa5hTjyX18XV5Lxs+gYGrfj6GNmdIjxKEYBuIx9gAOjY0gqsCIO/7XqnBMdQeM2nRpHR4cYj2IUgDZ6oyNIKrCinPPflJ34EaOvIlYR5MWYWcUoAAX5MiUlqEjn/Ddl9BXE34+OoXHKOTY6wnikXwDmM40ax0THkFRART/yX1/O5dERNE4Z+615cF3S0i8A23EkOdtGx5BUMGU48l9fXrz3zVdaAbYA6RcA0v8SJSWmTEf+a/XyAPBQdAyNU5b+qev0C0BmAZA0ASm92KfxbosOoHE7OvWnAqZdAPrYC2//kzReZVv7P9O90QE0btOZzlHRITYn7QLg+l/SeJVx7b+hjMejI2gC6mmfBki7AGTFerWipCDlP/IfVWdldARNSNIHsekWgHnUwNv/JG1BkZ/wN1EZW0dH0IQcwAB7R4fYlHQLwBEcCGwfHUNSwqo0/AEyb4kunJwjoiNsSroFIOEvTVICqnDOf0M5e0VH0IQlO8vSLQAJf2mSgpX7Vr/NSf7pcnqGZGdZygXg8OgAkhJUlQv+NrSAXYDdo2Nowg7i4jRP3aRZAAbZHdg3OoakxFRx7b9WB0cBWXQMTVgbW/OK6BAbk2YBWJ3uykRSkKoe+a9VZ3Z0BE1akjMtzQJQ58joCJISUuUjf4D5tJHxmugYmjQLwLhlnv+XtEbVj/wBdqQL2C06hiapxssZpD06xobSKwBLmA4cEh1DUgKqfuS/1gjviY6gKcjZllUcHB1jQ+kVgCd4GTAtOoakYB75j1rIi8nojI6hKWpL7zRAegUg52XRESQF88h/nRqfiY6gBqhzaHSEDaVXAOBPogNICuSR/zp9nAQcHR1DDZBxUHSEDaVXALL0zpNIahGP/NdZwJ5k/Ed0DDXMC7mWjugQ60urAIxeJfnH0TEkBfDIf51r6aCdbwM7R0dRw2zFIxwQHWJ9aRWAIV4AbBUdQ1KLeeS/Tk7GMr4CPg+ldBI7DZBWAfD8v1Q9HvmPNcC/AadFx1ATWAA2w/P/UrV45D9WHx8H7/kvrcRmXFoFgLS+HElNVN1X+m5cHx8n4x+jY6iJ8rRmnAVAUus5/Mdy+FfFXgyyfXSItdIpAKNfyp7RMSQ1mcN/LId/lWSsSuc6gHQKwBAH47uupXJz+I/l8K+ehC4ETKcA1Hh+dARJTeTwH8vhX01ZOrMunQKQs090BElN4vAfy+FfZftEB1grnQIAz4sOIKkJHP5jOfyrLplZl04BcAMglY/DfyyHv7J0Zl06BSChViSpARz+Yzn8BZCzLYvYKToGpFIAljCdjN2iY0hqEIf/WA5/ra+exgFvGgXgcZ6LtwBK5eDwH8vhrw0lcso7jQLg+l8qB4f/WA5/bVwSM88CIKkxHP5jOfy1KTU3AOsk8mVImiSH/1gOf21OnsZBbxoFIJHzIZImweE/lsNfW7ZPdACA9ugAAOTs6SWAWs995PyUjOvIuY2cO2nnSVazgjozmMYMcvYA9qfOC8l4JXAI0Bacu3oyzqWLMx3+a/RzNvD+6BhK3l7RASCVK+/7uRXYPzqGQt1DzjeA79DDbyb8T1/KDnRwIhknA8eQyu/tMss4l06H/9Mc/pqIDqYzi6ciI6TxQ7KfpcCO0TEU4lfknM00LmIWqxvyKy7kQGr8A/BGUtlylY3DfyyHvyaqjT2ZzX2REeILwCDtDDOURBa10jLgLFbwBeYy0pRP6OMFZHwO6G7Kr19VnvMfy3P+mowaL6KTX0dGiD86GmJHMod/peQsYhqnMovfN/Vzevgt0MMAbyLnS8CMpn5eFTj8x3L4a7JG2Dk6Qgp3Abj6r46cnA/RTXfTh//6uvg6cATwfy37zDLKONfhv55+znb4a9Ky+PcBxBeAnF2iI6glRsh5Gz18ImSAdHMD8Ary2JVbYeV8xXP+6+nj43jOX1ORuQGANjcAFVAn5430cEFoim7up41jgBtCcxSNR/5jeeSvRqi7AUjiS1CTZbyLHr4bHQOATpZSoxNLwPh4tf9YXu2vxgmfffEFIPMUQMn9N138R3SIMTpZSgezgGujoyTNtf9Yrv3VSJ4CALwIsMxupYO/jQ6xUbNYQY1e4FfRUZLk2n8s1/5qPDcAWADKK+cdzOKJ6BibNHo6YDaWgLFc+4/l2l/NET774gtAxvToCGqKC+nhx9EhtsgSMJbDfyyHv5olj5998QUgZ6voCGq4nDofiw4xbp0sZchrAjznvwHP+auZMqZFR4gvAMR/CWq4S+nlpugQE3I8yxmiG7guOkoIn/A3lk/4U/OFH/ymUADCvwQ1WMZ50REmZbQEdFG1EuDwH8vhr9YIn33xBSCBNYgaahnLGYgOMWlVKwEO/7Ec/mqd8NkXXwDy+C9BDZRzKXMZio4xJceznI4K3CLorX5jeaufWilzAwAJrEHUUD+NDtAQs3hkzYWB5dwEeMHfWF7wp1ZL4OA3vgAk8CWogWpcFR2hYdZuAsr2AiGP/MfyyF8xppGTRQaILwA1NwAlMsJy7ogO0VCzeIRhjqYsmwCP/MfyyF9xMi6kIzJAfAFwA1Am9xT+/P/GlGUT4JH/WB75K9pWsQfA8QXAawDKZFl0gKYp+ibAI/+xPPJXCmbGHgCnUABCz4GoodJ97n8jHM9yVnNs4TYBHvmP5ZG/UjEUO4NTKADlWxlXVRUGzBweLtQmwCP/sTzyV1pWRX54CgUg9AtQA+VsEx2hJYrysCAf8jOWD/lRaqbHHgBbANQ4efzrLVtm7ekAuDE6yka59h/Ltb9S9NOqF4CM4egIapCM53Jt7G0tLTWHh1nN7OSuCXDtP5Zrf6VpmHnUIwPEF4C6G4ASaedh9o0O0VJzeJgROkllE+CR/1ge+Std4de/xReALP5LUAO1cVh0hJZbuwmILgEe+Y/lkb/SFn7wG18AEvgS1FBHRQcIEV0CPPIfyyN/pS989sUXADcAZXM8g7RHhwgRVQI88h/LI38VQ/jsiy8AefyXoIbaZc0QrKZWlwBv9RvLW/1UHG4ASOBLUIPlnB4dIVSrSoBr/7Fc+6tYwg9+LQBqhj9nEQdEhwi1rgT8pim/fsa5rv3X08/ZuPZXsTwVHSC+AGQsj46ghquR85HoEOFGS8AxNLoEOPzHcviriHJWREeILwCwNDqAmiDnZPoqekfA+taVgMacDvCCv7G84E9FlfFwdIT4ApDzSHQENUVGxhdZwvToIOHm8DA5nUx1E+A5/7E8569iC399egoFwA1Aef0Jj/OZ6BBJ6OGhKW0CPPIfyyN/FV0CB78WADVXxjvo46+iYyRhspsAj/zH8shfZVCLn33xBaAtvgWpyTLOp58To2MkYaKbAI/8x/LIX2XhBgA3ANXQBnybAY6LDpKE8T4nwIf8jOVDflQu4bMvvgCsiG9BaomtyPmeJWCNLZUAh/9YDn+VTT1+9sUXgLkMkfF4dAy1hCVgfZsqAQ7/sRz+KqMONwCjPA1QJZaA9W1YAhz+Yzn8VVar3QCsFf5FqKW2IudCFtEZHSQJ6+4O+EeH/3q82l/ltYoe/hAdIpUC8EB0ALXcdOr80BKwRg8P0c2/OvzX8Gp/ldv90QEglQKQc3d0BIWwBOiZXPur7LI0Zl4aBSCRL0MhLAFax+GvargrOgCkUgAS+TIUxhIgh7+qI5GttwVAqbAEVJnDX9WSxMxLowBkaXwZCmcJqCKHv6omkdPeaRSALh4FVkTHUBIsAVXi8FcV1dI46E2jAIxK4gtREiwBVeDwVzUN8bM0bn1PqQDcHR1ASbEElJnDX9V1D/OoR4eAtAqAGwBtyBJQRg5/VVsysy6dApDIRRFKjiWgTBz+qrqEZl1KBeC26AhK1nTqXEwfx0QH0RT4bH8J6tweHWGtlArAxt+LLo2aQcYl9DM7OogmwWf7S6Nq/Do6wlrpFIDZ3IdvBdTmzQB+aAkoGNf+0jojFoCNcwugLbMEFInDX1rfI/SmcQsgpFYAcguAxsUSUAQOf2lDyRz9Q2oFAAuAxs0SkDKHv/RMuQVg0+ppfTlKniUgRQ5/aVOSOshNqwAM8xtI4wlJKgxLQEoc/tKmtVkANu0EVgJ3RMdQ4VgCUuDwlzanzgg3R4dYX1oFAJI7R6LCGC0BPiwohsNf2pLb6eEP0SHWl14BqKW1IlGhjD4syBLQWg5/aTySO7hNrwDU+WV0BBXaaAkY4OjoIJXg432l8cm4ITrChtIrAG0sAfLoGCq0GeT8yE1Ak/l4X2n8cq6MjrCh9ApAJ0uB30XHUOF5OqCZXPtLEzHMKq6JDrGh9ArAqMXRAVQKloBmcPhLE3X9mrvckpJmAcgsAGoYS0AjOfyliUt0plkAVAWWgEZw+EuTleRMS7MAzOY24KHoGCoVS8BUOPylyRthSXSEjUmzAGTk5FwVHUOlYwmYDIe/NHk5d6T0CuD1pVkAALI0G5MKzxIwEQ5/aaqSXP9DygUg4S9NhWcJGA+Hv9QIyc6ydAvAaq4FnoqOodKyBGyOw19qjNwCMHFzWAVcHR1DpTaDjB/Sz6uigyTFx/tKjfIQV3NLdIhNSbcAjFoYHUClNxNYwEJmRQdJgo/3lRqpj3nUo0NsStoFoMZl0RFUCTOocWnlS4Brf6nRkp5haReA2dwI3BcdQ5VQ7RLg8Jcarc5qFkWH2Jy0C0BGTkZfdAxVRjVLgMNfaoZrmMPD0SE2J+0CAFBPe4Wi0qlWCXD4S82RpT+70i8AI/QDw9ExVCnVKAEOf6l5RiwAUzeHx8i8HVAtV+4S4PCXmukRruba6BBbkn4BAMi9HVAhylkCHP5Sc+X0p3z731rFKAAFOJei0ipXCXD4S81XkJlVjALQyQ2Q5tuUVAkzqPFDFvLK6CBT4hP+pFaok9MfHWI8ilEAMnLgf6NjqNK2ocbCwm4CfMKf1CpX0MOr4OoGAAAQu0lEQVRD0SHGoxgFACBnfnQEVV4xTwe49pdaJyvOrCpOAbiKK/GpgIpXrBLg8JdaaYSsONvq4hSA0SsqL4qOIbG2BAxwdHSQzXL4S62VM0gnD0bHGK/iFADwNIBSMoM84RLg8JdaL+O70REmIosOMCE5GQPcDewdHUVa4wkyjqWLK6ODPK2fs/GCP6nVhulgD2bxSHSQ8SrWBmD0boALo2NI69kGWMAAr4gOsqYgfwqHvxThx0Ua/lC0AgBQ9zSAEpOzLTmL6GdOWIb5tLGIL5PzD2EZpGr7TnSAiSpeAejhGuCu6BjSBmYCP2CAM1v+yQvYhe35ETmnt/yzJQEMMcTF0SEmqngFYPQ0gFsApaiDnP+gn/9lkJ1b8on9zKadG4CelnyepGfK6Od4lkfHmKjiFQCAjG9GR5A240SGuZUBzmSQ9qZ8wgL2pJ9vAwPAHk35DEnjUy/mTCrWXQDr6+cqSODCK2nz7gTOYRVf5QRWTvlXW8QB5LyHnNOArab860maqkdYzZ7MYVV0kIkqbgHo46/IuCA6hjQuGY+T8wPgIjJ+ShePjvufHR36PeScBBxGkf9/K5VNxr/TxbujY0xGcX+QDLINw9wHPCs6ijRBI8CNZNwE3EadB4DHyBghZwY1tiXnecD+wKHAsyPDStqMGgfSyc3RMSajuAUAYIDzvPJZkhRkMd0cGR1isop5EeBaOV+JjiBJqqz/jA4wFcUuAN1cC1wfHUOSVDmPkhf7ybTFLgAAebEbmCSpgHK+RQ9/iI4xFcUvADW+CQ24vUqSpPEqwcFn8QvA6O1UhV7DSJIK5Tp6+WV0iKkqfgEAyPlSdARJUkVknBcdoRHKUQB6+Dkk9D52SVJZPcRMvhEdohHKUQAAcj4THUGSVHpf4HCejA7RCOUpAFfxQ+C30TEkSaW1ko7ynHIuTwGYR52Mz0fHkCSV1leZxSPRIRqlPAUAYCb/DeX5H0eSlIw6dT4bHaKRylUARs/LnBsdQ5JUMjnfp5fbo2M0UrkKAEDOF6EcF2hIkhLRVr4LzctXAHp4iLwct2hIkpKwmE6uig7RaOUrAAB1PgPUo2NIkkqhdEf/UNYCcCy/Ay6OjiFJKrxbWMEPo0M0QzkLAEDOR3ALIEmaiox5zGUkOkYzlLcA9PAb4KLoGJKkwvoNi8s7R8pbAABqfBhYHR1DklRAOR9mXnk3yeUuAJ3cCnw7OoYkqWAyfkl3ua8lK3cBAGjjY8BwdAxJUoHkfJiMPDpGM5W/AMzmDuDr0TEkSYVxDV1cFh2i2cpfAAAyzgJWRceQJBXCB8t+9A9VKQBd3EvGBdExJEnJu5JuLo8O0QrVKAAANf4V3xEgSdqcnH+MjtAq1SkAs7kP+PfoGJKkRGX8gB6uiI7RKtUpAAAdfAK4PzqGJCk5Q+S8LzpEK1WrAMziCTI+GB1DkpScz9LNbdEhWimLDtByORkDXA28LDqKJCkJD5FxAF08Gh2klaq1AQDIyMn4Oyj/LR6SpHHI+WDVhj9UsQAAdHE1uY8IliRxPVfx39EhIlTvFMBal/McRvgdMDM6iiQpSM6rqnTl//qquQGA0dsCM/4tOoYkKUjGd6s6/KHKBQBgJp8C7omOIUlquSdZzQeiQ0SqdgE4nCfJeW90DElSy53NsdwdHSJStQsAQA8XkfGD6BiSpJb5Lav5ZHSIaBYAgBHOAFZEx5AkNV0deCtzfEOsBQCglwfI+FB0DElSk+V8kW4WR8dIgQVgrcWcR8bPomNIkprmXp6qztv+tqS6zwHYmEUcQJ1fAVtHR5EkNdyr6eaH0SFS4QZgfZ3cSs6/RMeQJDXctx3+Y1kANjSNs4Hro2NIkhpmGTX+PjpEaiwAG5rFamq8HRiJjiJJaoCcd9PJg9ExUmMB2JhOriHn36NjSJKm7DK6+Xp0iBRZADZlhH8CboiOIUmatIep8xYyX/++MRaATZnDKjJOBlZGR5EkTVgOvJVeHogOkioLwOZ0cQvwvugYkqQJO9er/jfP5wBsSU7GABcDJ0RHkSSNyy2s4lBOcIO7OW4AtiQjZzVvIef30VEkSVu0CjjZ4b9lFoDxmMPD1HgzeCGJJCXuQ3R7Afd4WADGq4s+cr4QHUOStEkDLOGz0SGKwmsAJmIBW9HGL8g4ODqKJGmM5eS8iB7+LzpIUbgBmIg5rCLnZOCJ6CiSpKfVyTjV4T8xFoCJ6uUm4E14PYAkpSHjLLr4UXSMorEATEY33wfOiY4hSWKA5Xw8OkQRWQAmawXvBwaiY0hShd1NjTcw15e3TYYXAU5FH7uScR2wZ3QUSaqYJ6lzJL38MjpIUbkBmIoeHiLndYw+eEKS1Co573D4T40FYKp6+DnwrugYklQhn6eHr0WHKDoLQCN082XggugYklR6OVexgn+IjlEGFoBG6eBM4NroGJJUYveT81rmMhQdpAwsAI0yi6fo4ATgnugoklRCK6lzIr08EB2kLCwAjTSL31NjDrAiOooklcgIGSfTyy+ig5SJBaDROrmZjBPBFZUkNUTGu+ji4ugYZWMBaIYufkLGX0fHkKTCy/k0Xb6JtRksAM3SxVfJfDylJE1azve4ivdHxygrnwTYTDkZA3wNODU6iiQVzDWs4mhOYGV0kLJyA9BMGTk78hbgx9FRJKlA7qLGCQ7/5rIANNuhDFPn9cBvo6NIUgEsZYRj6eTB6CBlZwFohV6W0UYncFd0FElK2GPUOJZj+V10kCqwALTKbO4j42h8UJAkbcxK4M/o5JroIFVhAWilLu4Fusj5fXQUSUrIEDmvo5ufRgepEgtAq3VzG230AMuio0hSAkaAU+jhsuggVWMBiNDJr8mZQ8bj0VEkKVCdjDfRzYXRQarIAhClh5+Tcyzwh+gokhQgB86gi29FB6kqC0CkbhaTcyKwKjqKJLVUxvvo5rzoGFVmAYjWwwA5J+HLgyRVRcYH6eLT0TGqzkcBp6KPY8n4HjA9OookNUkOvJduzokOIgtAWvo4ihqXkrNtdBRJarA68Ha6+c/oIBplAUhNP4cCC4GdoqNIUoOMkPMWevhadBCtYwFIUT+HAP3ALtFRJGmKhsh4A138b3QQjWUBSFUfLyBjANgzOookTdJK4ES66Y8OomeyAKTsMvahxiIy9ouOIkkT9AQ5r6bH16GnygKQuj72ImMRcEB0FEkap2XU6PXFPmnzOQCp6+H/qHMYcEV0FEkah7vIONLhnz4LQBH0sozVdJP7yExJSfsFNQ6ji1uig2jLPAVQJDkZ/XyUjI9GR5GkDXyfVZzCCayMDqLxcQNQJBk5Pcwj5y3AcHQcSVrj8yzhdQ7/YnEDUFR9dJFxIbBddBRJlTVCxrvo4gvRQTRxFoAiG+Agci4F9o6OIqly/kDOG+jhkuggmhwLQNEtYE/auRR4UXQUSZVxP3VOoJdfRgfR5HkNQNHN4f/RwZFkfDc6iqRKuJaMwxz+xecGoEz6OJ2MLwAd0VEklVDG+Sznb5nLUHQUTZ0FoGwW8koy5pOxe3QUSaXxFDl/Qw//FR1EjWMBKKPLeQ6ruZCMw6KjSCq8e6nxOp/sVz5eA1BGs7mPaRwFfDI6iqRCu4w6f+rwLyc3AGXXzynAecCM6CiSCiMHPsUSPsQ86tFh1BwWgCpYyIupcSGwb3QUSclbRs6bvb+//DwFUAW9/JInOYSM86OjSEraj1nNixz+1eAGoGoGeC055wM7RkeRlIzV5PwLV3GWK//qsABUUR97kfF14OjoKJLC/ZY6b/TBPtVjAaiqnIwB3gl8CpgWHUdSiP8h5x308IfoIGo9C0DV9XMo8E3ggOgoklrmETLeShcXRwdRHC8CrLpurqWDlwAXREeR1BL91DnY4S83AFqnn1cBXwH2j44iqeFWkPN+uvkKGXl0GMWzAGisJUznCT4KvBdoi44jqQEyLqXGXzOb+6KjKB0WAG1cP4cA/wm8JDqKpEl7gIy/pYvvRQdRerwGQBvXzQ108ArgXeAVwlLB5GScz2pe4PDXprgB0JZdzn6McB4wOzqKpC26nTqn08tgdBClzQKg8cnJ6OdtZHwCnyIopegp4FOs5l+Zw6roMEqfBUATcyk7MI15wBlAe3AaSTB6kV/G39HJndFRVBwWAE3OZTyfNs4B5kRHkSrsFjL+ni76ooOoeCwAmppFdFLnc8ALo6NIFbIMOIsVfIG5jESHUTFZADR119LBMs4APgZsFx1HKrFh4Et08FFmsSI6jIrNAqDGWcRO1PkI8Df4ECGpsXIWkfMuerkpOorKwQKgxhvgIOAscl6Nv8ekqVpMzkfo4cfRQVQu/nBW8wxwEDkfBl6Hv9ekicn5NRkfp5sLo6OonPyhrObr4+XU+Cdyjo+OIhXAb4Cz6OIiX9qjZrIAqHX6OJyMfwaOiY4iJegWMs5mMd9gHvXoMCo/C4Bab4Ajyfk48KroKFIC7ibnEzzKBd7Sp1ayACjOAEcC7yfnOPy9qOq5nozP0s63mMXq6DCqHn/oKl4/+wNnAm8DpgenkZopJ+dy4PP0cEl0GFWbBUDp6GNX4AwyzgR2io4jNdAQ8F1qnE0nN0eHkcACoBQNsg1DnEyNd5Pz/Og40hQ8CnwN+CTd3B8dRlqfBUDpmk8bO/Bacs4AjsLfryqOG8n4Ek/xNU5gZXQYaWP8gapiGL1O4C3Am4HdYsNIG/UUcAk1zqeTRdFhpC2xAKhY5tPGjsyizunAiUB7dCRV3nXknM9TfJtX83h0GGm8LAAqrst5DiOcAvw1sE9wGlXLo2R8F/gyXVwfHUaaDAuAim8+bWzHsWS8CTgOmBEdSaW0Gvgx8A224SIO58noQNJUWABULkuYzuN0kvF64DXAzOhIKrQ6cBVwITW+QycPRgeSGsUCoPK6hBlMYzYZpwKvBqZFR1IhrBv6debTywPRgaRmsACoGgbZntX8GfB6crqxDOiZbibnQuBr9HBXdBip2SwAqp6F7EhGFxm95PSSsXt0JIV4FBggZyHtLGQ290UHklrJAiAt5EBqHE9OJxlH4XagzG5m9F79RSzjCuYyFB1IimIBkNbXx0zgmDWF4Fhgr+hImpInyPgJdS5hhAXM4f9FB5JSYQGQNmeAPybnCOAI4HDggOBE2rz7yLiSOkuAxTzKDcxlJDqUlCILgDQRA2xHxksZ4UjgCDKOBLaOjlVRI8DvGH0S35XkLKaXm6JDSUVhAZCmYpCtWcVLaeMIcl4CvAjYF2gLTlZG95BxIznXU2MJQyxhDo9Fh5KKygIgNdp8pvEs9qeNl5DzQjIOpM6h3m0wThmPk3MroxfsXUeNmxjiV8zh4ehoUplYAKRW6WcPMg6izsFkPB/Yh5x9yNgb6IiO12J1Rs/X302du6hxK/AbMm5kNneRkUcHlMrOAiCl4FJ2oIN9ydgX1vy5/vTf700x33q4HLjz6T9y7gQeAO5niFs4gZWh6aSKswBIRbCQHamxEzV2ZoSdgJ3Inv7zzuTsDGv+ft3LkJ4FtJHRTs62E/zElcCqNX+9fM2fnwKWkbOUGkuBpdR5GMb8/SOMsJRfsJR51KfwbyypySwAUpX0MZNhptFORjvbAzDE49RZTY0RL6qTJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSZvx/atQNHSZeJBsAAAAASUVORK5CYII=", oS = ({
  onSuccess: u,
  onError: c,
  handleClose: r,
  onSignIn: s,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = x.useState(h), [y, S] = x.useState(""), [E, U] = x.useState(""), [k, w] = x.useState(""), [j, M] = x.useState(!1), [J, Y] = x.useState(""), [X, le] = x.useState(!1), [I, fe] = x.useState(
    null
  ), [ne, P] = x.useState(!1), [Ae, Re] = x.useState(!1), [Ze, ve] = x.useState(!1), [Le, je] = x.useState(!1), [Ke, G] = x.useState(!0), [q, Q] = x.useState(""), [se, $] = x.useState("info"), me = x.useRef(null), b = x.useRef(null);
  x.useEffect(() => {
    if (b.current && clearTimeout(b.current), !g) {
      Re(!1), ve(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Re(!1), ve(!1);
      return;
    }
    return b.current = setTimeout(async () => {
      je(!0);
      try {
        (await s0(g)).exists ? (ve(!0), Re(!0)) : (ve(!1), Re(!1));
      } catch (He) {
        console.error("[CreateAccount] Email check failed:", He), ve(!1), Re(!1);
      } finally {
        je(!1);
      }
    }, 500), () => {
      b.current && clearTimeout(b.current);
    };
  }, [g]), x.useEffect(() => {
    if (k) {
      const te = g || y || E ? {
        email: g,
        displayName: `${y} ${E}`.trim()
      } : null, He = f0(k, te);
      fe(He);
    } else
      fe(null);
  }, [k, g, y, E]);
  const _ = I ? I.length && I.upper && I.lower && I.number && I.noSpaces && I.noTriple && I.special && I.noNameParts && I.noEmailParts : !1, Z = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  x.useEffect(() => {
    const te = (He) => {
      He.key === "Escape" && r();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [r]);
  const re = (te) => {
    te.target === me.current && r();
  }, oe = async (te) => {
    if (te.preventDefault(), P(!0), !g || !y || !E || !k) {
      c("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Y("Please enter a valid email address"), c("Please enter a valid email address");
      return;
    }
    if (!_) {
      c("Password does not meet requirements");
      return;
    }
    M(!0), Y(""), Q("");
    try {
      const Oe = g.split("@")[0], Qt = await aS({
        username: Oe,
        email: g,
        firstName: y,
        lastName: E,
        password: k
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Qt.message
      );
      try {
        const Gt = await d0(
          Oe,
          k,
          Ke
        );
        u(Gt);
      } catch (Gt) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Gt
        );
        const ea = Gt instanceof Error ? Gt.message : "Auto-login failed";
        c(ea);
      }
    } catch (Oe) {
      console.error("[CreateAccount] Registration failed:", Oe);
      const Qt = Oe instanceof Error ? Oe.message : "Registration failed";
      Q(Qt), $("error"), c(Qt);
    } finally {
      M(!1);
    }
  };
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    q && /* @__PURE__ */ z.jsx(
      rS,
      {
        type: se,
        message: q,
        duration: 5e3,
        onClose: () => Q("")
      }
    ),
    /* @__PURE__ */ z.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: me,
        onMouseDown: re,
        children: /* @__PURE__ */ z.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
          /* @__PURE__ */ z.jsx(
            "button",
            {
              onClick: r,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
              type: "button",
              children: /* @__PURE__ */ z.jsx(
                "svg",
                {
                  className: "w-6! h-6!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ z.jsx(
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
          /* @__PURE__ */ z.jsxs("div", { className: "mb-6! text-center!", children: [
            /* @__PURE__ */ z.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: o }),
            /* @__PURE__ */ z.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ z.jsxs("form", { onSubmit: oe, className: "space-y-4!", children: [
            /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsx(
              Kn,
              {
                label: "Email Address",
                id: "email",
                type: "email",
                value: g,
                onChange: (te) => {
                  p(te.target.value), Y("");
                },
                placeholder: "Enter email address",
                disabled: j,
                className: "w-full!",
                autoComplete: "email",
                error: ne && !g ? "Required" : J || "",
                endIcon: /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                  Le && /* @__PURE__ */ z.jsx(Lm, {}),
                  !Le && !Ze && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ z.jsx(
                    "img",
                    {
                      src: h0,
                      alt: "available",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Ae && Ze && /* @__PURE__ */ z.jsx(
              _m,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  Re(!1), s(g);
                },
                onClose: () => Re(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ z.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ z.jsx(
                Kn,
                {
                  label: "First Name",
                  id: "firstName",
                  type: "text",
                  value: y,
                  onChange: (te) => S(te.target.value),
                  placeholder: "First Name",
                  disabled: j || Ze || !Z,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ne && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ z.jsx(
                Kn,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: E,
                  onChange: (te) => U(te.target.value),
                  placeholder: "Last Name",
                  disabled: j || Ze || !Z,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ne && !E ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ z.jsx(
              Kn,
              {
                label: "Password",
                id: "password",
                type: X ? "text" : "password",
                value: k,
                onChange: (te) => {
                  w(te.target.value);
                },
                placeholder: "Enter Password...",
                disabled: j || Ze || !Z,
                className: "w-full!",
                autoComplete: "new-password",
                error: ne && !k ? "Required" : ne && k && !_ ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                endIcon: /* @__PURE__ */ z.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => le(!X),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: X ? /* @__PURE__ */ z.jsx(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ z.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          }
                        )
                      }
                    ) : /* @__PURE__ */ z.jsxs(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ z.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }
                          ),
                          /* @__PURE__ */ z.jsx(
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
            /* @__PURE__ */ z.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ z.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: Ke,
                  onChange: (te) => G(te.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none!"
                }
              ),
              /* @__PURE__ */ z.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ z.jsx(
              Hm,
              {
                type: "submit",
                disabled: j || Ze || !Z,
                className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: j ? /* @__PURE__ */ z.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ z.jsxs(
                    "svg",
                    {
                      className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ z.jsx(
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
                        /* @__PURE__ */ z.jsx(
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
            /* @__PURE__ */ z.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
              /* @__PURE__ */ z.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ z.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
              /* @__PURE__ */ z.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ z.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ z.jsx(
              "button",
              {
                type: "button",
                onClick: () => s(g),
                disabled: j,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ z.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, sS = ({
  onSuccess: u,
  onError: c,
  handleClose: r,
  authority: s,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = x.useState(h), [y, S] = x.useState(""), [E, U] = x.useState(!1), [k, w] = x.useState(!1), [j, M] = x.useState(
    null
  ), [J, Y] = x.useState(""), [X, le] = x.useState(!0), [I, fe] = x.useState(!1), [ne, P] = x.useState(!1), [Ae, Re] = x.useState(!1), [Ze, ve] = x.useState(!1), Le = x.useRef(null), je = x.useRef(null);
  x.useEffect(() => {
    if (je.current && clearTimeout(je.current), !g) {
      P(!1), ve(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      P(!1), ve(!1);
      return;
    }
    return je.current = setTimeout(async () => {
      Re(!0);
      try {
        (await s0(g)).exists ? (P(!0), ve(!1)) : (P(!1), ve(!0));
      } catch (me) {
        console.error("[EmbeddedLogin] Email check failed:", me), P(!0), ve(!1);
      } finally {
        Re(!1);
      }
    }, 500), () => {
      je.current && clearTimeout(je.current);
    };
  }, [g]), x.useEffect(() => {
    if (y) {
      const $ = f0(y, null);
      M($);
    } else
      M(null);
  }, [y]);
  const Ke = j ? j.length && j.upper && j.lower && j.number && j.noSpaces && j.noTriple && j.special : !1, q = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  x.useEffect(() => {
    const $ = (me) => {
      me.key === "Escape" && r();
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [r]);
  const Q = ($) => {
    $.target === Le.current && r();
  }, se = async ($) => {
    if ($.preventDefault(), !g || !y) {
      Y("Please enter both email and password"), c("Please enter both email and password");
      return;
    }
    U(!0), Y("");
    try {
      const me = await d0(g, y, X);
      u(me);
    } catch (me) {
      console.error("[EmbeddedLogin] Login failed:", me);
      const b = me instanceof Error ? me.message : "Authentication failed";
      Y(b), c(b);
    } finally {
      U(!1);
    }
  };
  return I ? /* @__PURE__ */ z.jsx(
    oS,
    {
      onSuccess: ($) => {
        fe(!1), u($);
      },
      onError: c,
      handleClose: r,
      onSignIn: ($) => {
        fe(!1), $ && p($);
      },
      authority: s,
      initialEmail: g
    }
  ) : /* @__PURE__ */ z.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Le,
      onMouseDown: Q,
      children: /* @__PURE__ */ z.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ z.jsx(
          "button",
          {
            onClick: r,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ z.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ z.jsx(
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
        /* @__PURE__ */ z.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ z.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
          /* @__PURE__ */ z.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ z.jsxs("form", { onSubmit: se, className: "space-y-2!", children: [
          /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsx(
            Kn,
            {
              label: "Email Address",
              id: "email",
              type: "email",
              value: g,
              onChange: ($) => p($.target.value),
              placeholder: "Enter email address",
              disabled: E,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                Ae && /* @__PURE__ */ z.jsx(Lm, {}),
                !Ae && ne && q && /* @__PURE__ */ z.jsx(
                  "img",
                  {
                    src: h0,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          Ze && !ne && q && /* @__PURE__ */ z.jsx(
            _m,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                ve(!1), fe(!0);
              },
              onClose: () => ve(!1),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ z.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ z.jsx(
            Kn,
            {
              label: "Password",
              id: "password",
              type: k ? "text" : "password",
              value: y,
              onChange: ($) => {
                S($.target.value), Y("");
              },
              placeholder: "Enter Password...",
              disabled: E || !q || !ne,
              className: "w-full!",
              autoComplete: "current-password",
              error: J,
              endIcon: /* @__PURE__ */ z.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => w(!k),
                  className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                  tabIndex: -1,
                  children: k ? /* @__PURE__ */ z.jsx(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ z.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }
                      )
                    }
                  ) : /* @__PURE__ */ z.jsxs(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ z.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }
                        ),
                        /* @__PURE__ */ z.jsx(
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
          /* @__PURE__ */ z.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ z.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ z.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: X,
                  onChange: ($) => le($.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none!"
                }
              ),
              /* @__PURE__ */ z.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            /* @__PURE__ */ z.jsx(
              "a",
              {
                href: "#",
                className: `text-blue-600! hover:text-blue-700! no-underline! ${!q || !ne ? "opacity-50! pointer-events-none!" : ""}`,
                onClick: ($) => {
                  (!q || !ne) && $.preventDefault();
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ z.jsx(
            Hm,
            {
              type: "submit",
              disabled: E || !g || !y || !Ke || !q || !ne,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: E ? /* @__PURE__ */ z.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ z.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ z.jsx(
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
                      /* @__PURE__ */ z.jsx(
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
          /* @__PURE__ */ z.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
            /* @__PURE__ */ z.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ z.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
            /* @__PURE__ */ z.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ z.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
          ] }),
          /* @__PURE__ */ z.jsx(
            "button",
            {
              type: "button",
              onClick: () => fe(!0),
              disabled: E,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ z.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, fS = (u) => {
  const { authority: c, subsidiary: r, callbackUrl: s, onRedirect: o } = u, [d, h] = x.useState(!1);
  console.log("isAuthenticated", d), x.useEffect(() => {
    (async () => {
      try {
        if (iS()) {
          h(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (cS()) {
          const k = localStorage.getItem("refresh_token");
          if (k) {
            console.log("[App] Attempting auto-login with refresh token");
            const w = await uS(k);
            if (w && w.tokens && w.tokens.access_token) {
              const j = w.tokens, M = qm(j.access_token), J = (M.exp || 0) - Math.floor(Date.now() / 1e3);
              Mi("access_token", j.access_token, J, !0), M.x_credentials && Mi("X-Credential", M.x_credentials, J, !1), j.refresh_token && (localStorage.setItem("refresh_token", j.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), h(!0), console.log("[App] Auto-login successful");
              const Y = u.redirectUrl || s;
              if (o) {
                const X = {
                  access_token: j.access_token,
                  userInfo: {
                    studentId: M.studentId,
                    sub: M.sub,
                    email_verified: M.email_verified,
                    x_credentials: M.x_credentials,
                    name: M.name,
                    preferred_username: M.preferred_username,
                    given_name: M.given_name,
                    family_name: M.family_name,
                    email: M.email
                  }
                };
                o(Y, X);
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
  }, [u.redirectUrl]), x.useEffect(() => {
    c && localStorage.setItem("authority", c), r && localStorage.setItem("subsidiary", r), s ? localStorage.setItem("callbackUrl", s) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [c, r, s]);
  const g = (S) => {
    u.handleClose && u.handleClose(), h(!0);
    const E = u.redirectUrl || s;
    o && o(E, S), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, p = (S) => {
    console.log("[App] Embedded login error:", S);
  }, y = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ z.jsx(_p, { children: /* @__PURE__ */ z.jsx(Dm, { path: "*", element: /* @__PURE__ */ z.jsx(z.Fragment, { children: !d && u.showLogin && /* @__PURE__ */ z.jsx(
    sS,
    {
      onSuccess: g,
      onError: p,
      handleClose: y,
      authority: c,
      title: u.loginTitle,
      subtitle: u.loginSubtitle
    }
  ) }) }) });
};
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
      this._shadowRoot || (this._shadowRoot = this.attachShadow({ mode: "open" }), typeof window.injectWidgetStyles == "function" && window.injectWidgetStyles(this._shadowRoot)), this.mountPoint = document.createElement("div"), this._shadowRoot.appendChild(this.mountPoint), this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    disconnectedCallback() {
      this.root?.unmount();
    }
    handleRedirect = (r, s) => {
      console.log("[Widget] handleRedirect called, url:", r), this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(r, s));
      const o = new CustomEvent("redirect", {
        detail: {
          url: r,
          userSession: s,
          tokens: { access_token: s?.access_token },
          userInfo: s?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o), console.log("[Widget] Redirect event dispatched"), r && !this.onRedirect && (console.log("[Widget] Will redirect to:", r, "in 200ms"), setTimeout(() => {
        window.location.href = r;
      }, 200));
    };
    handleClose = () => {
      this.onClose && (console.log("[Widget] Calling onClose function prop"), this.onClose());
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
      const r = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(r);
    }
    render() {
      if (!this.mountPoint) return;
      this.root || (this.root = R1.createRoot(this.mountPoint));
      const r = this.getProps();
      console.log("[Widget] Rendering with props:", r), this.root.render(
        /* @__PURE__ */ z.jsx(c1, { children: /* @__PURE__ */ z.jsx(x.StrictMode, { children: /* @__PURE__ */ z.jsx(fS, { ...r }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
