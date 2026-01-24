
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
var ao = { exports: {} }, Xa = {};
var jh;
function _g() {
  if (jh) return Xa;
  jh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(s, o, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      h = {};
      for (var g in o)
        g !== "key" && (h[g] = o[g]);
    } else h = o;
    return o = h.ref, {
      $$typeof: u,
      type: s,
      key: d,
      ref: o !== void 0 ? o : null,
      props: h
    };
  }
  return Xa.Fragment = c, Xa.jsx = r, Xa.jsxs = r, Xa;
}
var Hh;
function Lg() {
  return Hh || (Hh = 1, ao.exports = _g()), ao.exports;
}
var z = Lg(), uo = { exports: {} }, ne = {}, _h;
function qg() {
  if (_h) return ne;
  _h = 1;
  var u = {};
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
  function T(b) {
    return b === null || typeof b != "object" ? null : (b = Y && b[Y] || b["@@iterator"], typeof b == "function" ? b : null);
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
  }, U = Object.assign, V = {};
  function J(b, H, G) {
    this.props = b, this.context = H, this.refs = V, this.updater = G || L;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(b, H) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, H, "setState");
  }, J.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = J.prototype;
  function W(b, H, G) {
    this.props = b, this.context = H, this.refs = V, this.updater = G || L;
  }
  var le = W.prototype = new Z();
  le.constructor = W, U(le, J.prototype), le.isPureReactComponent = !0;
  var ae = Array.isArray;
  function ue() {
  }
  var te = { H: null, A: null, T: null, S: null }, de = Object.prototype.hasOwnProperty;
  function Te(b, H, G) {
    var K = G.ref;
    return {
      $$typeof: c,
      type: b,
      key: H,
      ref: K !== void 0 ? K : null,
      props: G
    };
  }
  function Ue(b, H) {
    return Te(b.type, H, b.props);
  }
  function Be(b) {
    return typeof b == "object" && b !== null && b.$$typeof === c;
  }
  function De(b) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(G) {
      return H[G];
    });
  }
  var Ze = /\/+/g;
  function Ie(b, H) {
    return typeof b == "object" && b !== null && b.key != null ? De("" + b.key) : H.toString(36);
  }
  function k(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(ue, ue) : (b.status = "pending", b.then(
          function(H) {
            b.status === "pending" && (b.status = "fulfilled", b.value = H);
          },
          function(H) {
            b.status === "pending" && (b.status = "rejected", b.reason = H);
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
  function q(b, H, G, K, se) {
    var I = typeof b;
    (I === "undefined" || I === "boolean") && (b = null);
    var fe = !1;
    if (b === null) fe = !0;
    else
      switch (I) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case c:
            case r:
              fe = !0;
              break;
            case E:
              return fe = b._init, q(
                fe(b._payload),
                H,
                G,
                K,
                se
              );
          }
      }
    if (fe)
      return se = se(b), fe = K === "" ? "." + Ie(b, 0) : K, ae(se) ? (G = "", fe != null && (G = fe.replace(Ze, "$&/") + "/"), q(se, H, G, "", function(Ht) {
        return Ht;
      })) : se != null && (Be(se) && (se = Ue(
        se,
        G + (se.key == null || b && b.key === se.key ? "" : ("" + se.key).replace(
          Ze,
          "$&/"
        ) + "/") + fe
      )), H.push(se)), 1;
    fe = 0;
    var Le = K === "" ? "." : K + ":";
    if (ae(b))
      for (var ze = 0; ze < b.length; ze++)
        K = b[ze], I = Le + Ie(K, ze), fe += q(
          K,
          H,
          G,
          I,
          se
        );
    else if (ze = T(b), typeof ze == "function")
      for (b = ze.call(b), ze = 0; !(K = b.next()).done; )
        K = K.value, I = Le + Ie(K, ze++), fe += q(
          K,
          H,
          G,
          I,
          se
        );
    else if (I === "object") {
      if (typeof b.then == "function")
        return q(
          k(b),
          H,
          G,
          K,
          se
        );
      throw H = String(b), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return fe;
  }
  function Q(b, H, G) {
    if (b == null) return b;
    var K = [], se = 0;
    return q(b, K, "", "", function(I) {
      return H.call(G, I, se++);
    }), K;
  }
  function $(b) {
    if (b._status === -1) {
      var H = b._result;
      H = H(), H.then(
        function(G) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = G);
        },
        function(G) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = G);
        }
      ), b._status === -1 && (b._status = 0, b._result = H);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var re = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, be = {
    map: Q,
    forEach: function(b, H, G) {
      Q(
        b,
        function() {
          H.apply(this, arguments);
        },
        G
      );
    },
    count: function(b) {
      var H = 0;
      return Q(b, function() {
        H++;
      }), H;
    },
    toArray: function(b) {
      return Q(b, function(H) {
        return H;
      }) || [];
    },
    only: function(b) {
      if (!Be(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ne.Activity = D, ne.Children = be, ne.Component = J, ne.Fragment = s, ne.Profiler = h, ne.PureComponent = W, ne.StrictMode = o, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = te, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return te.H.useMemoCache(b);
    }
  }, ne.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(b, H, G) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var K = U({}, b.props), se = b.key;
    if (H != null)
      for (I in H.key !== void 0 && (se = "" + H.key), H)
        !de.call(H, I) || I === "key" || I === "__self" || I === "__source" || I === "ref" && H.ref === void 0 || (K[I] = H[I]);
    var I = arguments.length - 2;
    if (I === 1) K.children = G;
    else if (1 < I) {
      for (var fe = Array(I), Le = 0; Le < I; Le++)
        fe[Le] = arguments[Le + 2];
      K.children = fe;
    }
    return Te(b.type, se, K);
  }, ne.createContext = function(b) {
    return b = {
      $$typeof: g,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: d,
      _context: b
    }, b;
  }, ne.createElement = function(b, H, G) {
    var K, se = {}, I = null;
    if (H != null)
      for (K in H.key !== void 0 && (I = "" + H.key), H)
        de.call(H, K) && K !== "key" && K !== "__self" && K !== "__source" && (se[K] = H[K]);
    var fe = arguments.length - 2;
    if (fe === 1) se.children = G;
    else if (1 < fe) {
      for (var Le = Array(fe), ze = 0; ze < fe; ze++)
        Le[ze] = arguments[ze + 2];
      se.children = Le;
    }
    if (b && b.defaultProps)
      for (K in fe = b.defaultProps, fe)
        se[K] === void 0 && (se[K] = fe[K]);
    return Te(b, I, se);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, ne.isValidElement = Be, ne.lazy = function(b) {
    return {
      $$typeof: E,
      _payload: { _status: -1, _result: b },
      _init: $
    };
  }, ne.memo = function(b, H) {
    return {
      $$typeof: S,
      type: b,
      compare: H === void 0 ? null : H
    };
  }, ne.startTransition = function(b) {
    var H = te.T, G = {};
    te.T = G;
    try {
      var K = b(), se = te.S;
      se !== null && se(G, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(ue, re);
    } catch (I) {
      re(I);
    } finally {
      H !== null && G.types !== null && (H.types = G.types), te.T = H;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return te.H.useCacheRefresh();
  }, ne.use = function(b) {
    return te.H.use(b);
  }, ne.useActionState = function(b, H, G) {
    return te.H.useActionState(b, H, G);
  }, ne.useCallback = function(b, H) {
    return te.H.useCallback(b, H);
  }, ne.useContext = function(b) {
    return te.H.useContext(b);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(b, H) {
    return te.H.useDeferredValue(b, H);
  }, ne.useEffect = function(b, H) {
    return te.H.useEffect(b, H);
  }, ne.useEffectEvent = function(b) {
    return te.H.useEffectEvent(b);
  }, ne.useId = function() {
    return te.H.useId();
  }, ne.useImperativeHandle = function(b, H, G) {
    return te.H.useImperativeHandle(b, H, G);
  }, ne.useInsertionEffect = function(b, H) {
    return te.H.useInsertionEffect(b, H);
  }, ne.useLayoutEffect = function(b, H) {
    return te.H.useLayoutEffect(b, H);
  }, ne.useMemo = function(b, H) {
    return te.H.useMemo(b, H);
  }, ne.useOptimistic = function(b, H) {
    return te.H.useOptimistic(b, H);
  }, ne.useReducer = function(b, H, G) {
    return te.H.useReducer(b, H, G);
  }, ne.useRef = function(b) {
    return te.H.useRef(b);
  }, ne.useState = function(b) {
    return te.H.useState(b);
  }, ne.useSyncExternalStore = function(b, H, G) {
    return te.H.useSyncExternalStore(
      b,
      H,
      G
    );
  }, ne.useTransition = function() {
    return te.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var Lh;
function Ro() {
  return Lh || (Lh = 1, uo.exports = qg()), uo.exports;
}
var O = Ro();
var qh = "popstate";
function kg(u = {}) {
  function c(s, o) {
    let { pathname: h, search: d, hash: g } = s.location;
    return po(
      "",
      { pathname: h, search: d, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function r(s, o) {
    return typeof o == "string" ? o : Ia(o);
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
function kt(u, c) {
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
function Ia({
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
  let { window: o = document.defaultView, v5Compat: h = !1 } = s, d = o.history, g = "POP", p = null, y = S();
  y == null && (y = 0, d.replaceState({ ...d.state, idx: y }, ""));
  function S() {
    return (d.state || { idx: null }).idx;
  }
  function E() {
    g = "POP";
    let U = S(), V = U == null ? null : U - y;
    y = U, p && p({ action: g, location: L.location, delta: V });
  }
  function D(U, V) {
    g = "PUSH";
    let J = po(L.location, U, V);
    y = S() + 1;
    let Z = kh(J, y), W = L.createHref(J);
    try {
      d.pushState(Z, "", W);
    } catch (le) {
      if (le instanceof DOMException && le.name === "DataCloneError")
        throw le;
      o.location.assign(W);
    }
    h && p && p({ action: g, location: L.location, delta: 1 });
  }
  function Y(U, V) {
    g = "REPLACE";
    let J = po(L.location, U, V);
    y = S();
    let Z = kh(J, y), W = L.createHref(J);
    d.replaceState(Z, "", W), h && p && p({ action: g, location: L.location, delta: 0 });
  }
  function T(U) {
    return Yg(U);
  }
  let L = {
    get action() {
      return g;
    },
    get location() {
      return u(o, d);
    },
    listen(U) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(qh, E), p = U, () => {
        o.removeEventListener(qh, E), p = null;
      };
    },
    createHref(U) {
      return c(o, U);
    },
    createURL: T,
    encodeLocation(U) {
      let V = T(U);
      return {
        pathname: V.pathname,
        search: V.search,
        hash: V.hash
      };
    },
    push: D,
    replace: Y,
    go(U) {
      return d.go(U);
    }
  };
  return L;
}
function Yg(u, c = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), _e(r, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : Ia(u);
  return s = s.replace(/ $/, "%20"), !c && s.startsWith("//") && (s = r + s), new URL(s, r);
}
function mm(u, c, r = "/") {
  return Vg(u, c, r, !1);
}
function Vg(u, c, r, s) {
  let o = typeof c == "string" ? Wn(c) : c, h = dl(o.pathname || "/", r);
  if (h == null)
    return null;
  let d = ym(u);
  Jg(d);
  let g = null;
  for (let p = 0; g == null && p < d.length; ++p) {
    let y = lp(h);
    g = ep(
      d[p],
      y,
      s
    );
  }
  return g;
}
function ym(u, c = [], r = [], s = "", o = !1) {
  let h = (d, g, p = o, y) => {
    let S = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: g,
      route: d
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(s) && p)
        return;
      _e(
        S.relativePath.startsWith(s),
        `Absolute route path "${S.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(s.length);
    }
    let E = fl([s, S.relativePath]), D = r.concat(S);
    d.children && d.children.length > 0 && (_e(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      d.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${E}".`
    ), ym(
      d.children,
      c,
      D,
      E,
      p
    )), !(d.path == null && !d.index) && c.push({
      path: E,
      score: $g(E, d.index),
      routesMeta: D
    });
  };
  return u.forEach((d, g) => {
    if (d.path === "" || !d.path?.includes("?"))
      h(d, g);
    else
      for (let p of gm(d.path))
        h(d, g, !0, p);
  }), c;
}
function gm(u) {
  let c = u.split("/");
  if (c.length === 0) return [];
  let [r, ...s] = c, o = r.endsWith("?"), h = r.replace(/\?$/, "");
  if (s.length === 0)
    return o ? [h, ""] : [h];
  let d = gm(s.join("/")), g = [];
  return g.push(
    ...d.map(
      (p) => p === "" ? h : [h, p].join("/")
    )
  ), o && g.push(...d), g.map(
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
    (o, h) => o + (Xg.test(h) ? Zg : h === "" ? Fg : Wg),
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
  let { routesMeta: s } = u, o = {}, h = "/", d = [];
  for (let g = 0; g < s.length; ++g) {
    let p = s[g], y = g === s.length - 1, S = h === "/" ? c : c.slice(h.length) || "/", E = zi(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      S
    ), D = p.route;
    if (!E && y && r && !s[s.length - 1].route.index && (E = zi(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      S
    )), !E)
      return null;
    Object.assign(o, E.params), d.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: fl([h, E.pathname]),
      pathnameBase: ip(
        fl([h, E.pathnameBase])
      ),
      route: D
    }), E.pathnameBase !== "/" && (h = fl([h, E.pathnameBase]));
  }
  return d;
}
function zi(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [r, s] = tp(
    u.path,
    u.caseSensitive,
    u.end
  ), o = c.match(r);
  if (!o) return null;
  let h = o[0], d = h.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: s.reduce(
      (y, { paramName: S, isOptional: E }, D) => {
        if (S === "*") {
          let T = g[D] || "";
          d = h.slice(0, h.length - T.length).replace(/(.)\/+$/, "$1");
        }
        const Y = g[D];
        return E && !Y ? y[S] = void 0 : y[S] = (Y || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: h,
    pathnameBase: d,
    pattern: u
  };
}
function tp(u, c = !1, r = !0) {
  kt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let s = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, g, p) => (s.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (s.push({ paramName: "*" }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, c ? void 0 : "i"), s];
}
function lp(u) {
  try {
    return u.split("/").map((c) => decodeURIComponent(c).replace(/\//g, "%2F")).join("/");
  } catch (c) {
    return kt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${c}).`
    ), u;
  }
}
function dl(u, c) {
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
  } = typeof u == "string" ? Wn(u) : u, h;
  if (r)
    if (np(r))
      h = r;
    else {
      if (r.includes("//")) {
        let d = r;
        r = r.replace(/\/\/+/g, "/"), kt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${d} -> ${r}`
        );
      }
      r.startsWith("/") ? h = Gh(r.substring(1), "/") : h = Gh(r, c);
    }
  else
    h = c;
  return {
    pathname: h,
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
  let h = u === "" || o.pathname === "", d = h ? "/" : o.pathname, g;
  if (d == null)
    g = r;
  else {
    let E = c.length - 1;
    if (!s && d.startsWith("..")) {
      let D = d.split("/");
      for (; D[0] === ".."; )
        D.shift(), E -= 1;
      o.pathname = D.join("/");
    }
    g = E >= 0 ? c[E] : "/";
  }
  let p = ap(o, g), y = d && d !== "/" && d.endsWith("/"), S = (h || d === ".") && r.endsWith("/");
  return !p.pathname.endsWith("/") && (y || S) && (p.pathname += "/"), p;
}
var fl = (u) => u.join("/").replace(/\/\/+/g, "/"), ip = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), cp = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, rp = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, op = class {
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
      let h = new URL(window.location.href), d = r.startsWith("//") ? new URL(h.protocol + r) : new URL(r), g = dl(d.pathname, c);
      d.origin === h.origin && g != null ? r = g + d.search + d.hash : o = !0;
    } catch {
      kt(
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
var In = O.createContext(null);
In.displayName = "DataRouter";
var Ni = O.createContext(null);
Ni.displayName = "DataRouterState";
var hp = O.createContext(!1), Rm = O.createContext({
  isTransitioning: !1
});
Rm.displayName = "ViewTransition";
var mp = O.createContext(
  /* @__PURE__ */ new Map()
);
mp.displayName = "Fetchers";
var yp = O.createContext(null);
yp.displayName = "Await";
var jt = O.createContext(
  null
);
jt.displayName = "Navigation";
var $a = O.createContext(
  null
);
$a.displayName = "Location";
var hl = O.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
hl.displayName = "Route";
var To = O.createContext(null);
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
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: s } = O.useContext(jt), { hash: o, pathname: h, search: d } = eu(u, { relative: c }), g = h;
  return r !== "/" && (g = h === "/" ? r : fl([r, h])), s.createHref({ pathname: g, search: d, hash: o });
}
function Pa() {
  return O.useContext($a) != null;
}
function rn() {
  return _e(
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), O.useContext($a).location;
}
var xm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Om(u) {
  O.useContext(jt).static || O.useLayoutEffect(u);
}
function Ap() {
  let { isDataRoute: u } = O.useContext(hl);
  return u ? Bp() : Ep();
}
function Ep() {
  _e(
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = O.useContext(In), { basename: c, navigator: r } = O.useContext(jt), { matches: s } = O.useContext(hl), { pathname: o } = rn(), h = JSON.stringify(vm(s)), d = O.useRef(!1);
  return Om(() => {
    d.current = !0;
  }), O.useCallback(
    (p, y = {}) => {
      if (kt(d.current, xm), !d.current) return;
      if (typeof p == "number") {
        r.go(p);
        return;
      }
      let S = Sm(
        p,
        JSON.parse(h),
        o,
        y.relative === "path"
      );
      u == null && c !== "/" && (S.pathname = S.pathname === "/" ? c : fl([c, S.pathname])), (y.replace ? r.replace : r.push)(
        S,
        y.state,
        y
      );
    },
    [
      c,
      r,
      h,
      o,
      u
    ]
  );
}
O.createContext(null);
function eu(u, { relative: c } = {}) {
  let { matches: r } = O.useContext(hl), { pathname: s } = rn(), o = JSON.stringify(vm(r));
  return O.useMemo(
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
    Pa(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = O.useContext(jt), { matches: d } = O.useContext(hl), g = d[d.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", S = g ? g.pathnameBase : "/", E = g && g.route;
  {
    let J = E && E.path || "";
    zm(
      y,
      !E || J.endsWith("*") || J.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J === "/" ? "*" : `${J}/*`}">.`
    );
  }
  let D = rn(), Y;
  if (c) {
    let J = typeof c == "string" ? Wn(c) : c;
    _e(
      S === "/" || J.pathname?.startsWith(S),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${J.pathname}" was given in the \`location\` prop.`
    ), Y = J;
  } else
    Y = D;
  let T = Y.pathname || "/", L = T;
  if (S !== "/") {
    let J = S.replace(/^\//, "").split("/");
    L = "/" + T.replace(/^\//, "").split("/").slice(J.length).join("/");
  }
  let U = mm(u, { pathname: L });
  kt(
    E || U != null,
    `No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `
  ), kt(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let V = wp(
    U && U.map(
      (J) => Object.assign({}, J, {
        params: Object.assign({}, p, J.params),
        pathname: fl([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          h.encodeLocation ? h.encodeLocation(
            J.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : J.pathname
        ]),
        pathnameBase: J.pathnameBase === "/" ? S : fl([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          h.encodeLocation ? h.encodeLocation(
            J.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : J.pathnameBase
        ])
      })
    ),
    d,
    r,
    s,
    o
  );
  return c && V ? /* @__PURE__ */ O.createElement(
    $a.Provider,
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
function Tp() {
  let u = Up(), c = sp(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), r = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: s }, h = { padding: "2px 4px", backgroundColor: s }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), d = /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ O.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ O.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ O.createElement("code", { style: h }, "errorElement"), " prop on your route.")), /* @__PURE__ */ O.createElement(O.Fragment, null, /* @__PURE__ */ O.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ O.createElement("h3", { style: { fontStyle: "italic" } }, c), r ? /* @__PURE__ */ O.createElement("pre", { style: o }, r) : null, d);
}
var xp = /* @__PURE__ */ O.createElement(Tp, null), wm = class extends O.Component {
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
    let c = u !== void 0 ? /* @__PURE__ */ O.createElement(hl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ O.createElement(
      To.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ O.createElement(Op, { error: u }, c) : c;
  }
};
wm.contextType = hp;
var co = /* @__PURE__ */ new WeakMap();
function Op({
  children: u,
  error: c
}) {
  let { basename: r } = O.useContext(jt);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let s = vp(c.digest);
    if (s) {
      let o = co.get(c);
      if (o) throw o;
      let h = Am(s.location, r);
      if (bm && !co.get(c))
        if (h.isExternal || s.reloadDocument)
          window.location.href = h.absoluteURL || h.to;
        else {
          const d = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(h.to, {
              replace: s.replace
            })
          );
          throw co.set(c, d), d;
        }
      return /* @__PURE__ */ O.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${h.absoluteURL || h.to}`
        }
      );
    }
  }
  return u;
}
function Cp({ routeContext: u, match: c, children: r }) {
  let s = O.useContext(In);
  return s && s.static && s.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = c.route.id), /* @__PURE__ */ O.createElement(hl.Provider, { value: u }, r);
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
  let h = u, d = r?.errors;
  if (d != null) {
    let S = h.findIndex(
      (E) => E.route.id && d?.[E.route.id] !== void 0
    );
    _e(
      S >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        d
      ).join(",")}`
    ), h = h.slice(
      0,
      Math.min(h.length, S + 1)
    );
  }
  let g = !1, p = -1;
  if (r)
    for (let S = 0; S < h.length; S++) {
      let E = h[S];
      if ((E.route.HydrateFallback || E.route.hydrateFallbackElement) && (p = S), E.route.id) {
        let { loaderData: D, errors: Y } = r, T = E.route.loader && !D.hasOwnProperty(E.route.id) && (!Y || Y[E.route.id] === void 0);
        if (E.route.lazy || T) {
          g = !0, p >= 0 ? h = h.slice(0, p + 1) : h = [h[0]];
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
  return h.reduceRight(
    (S, E, D) => {
      let Y, T = !1, L = null, U = null;
      r && (Y = d && E.route.id ? d[E.route.id] : void 0, L = E.route.errorElement || xp, g && (p < 0 && D === 0 ? (zm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), T = !0, U = null) : p === D && (T = !0, U = E.route.hydrateFallbackElement || null)));
      let V = c.concat(h.slice(0, D + 1)), J = () => {
        let Z;
        return Y ? Z = L : T ? Z = U : E.route.Component ? Z = /* @__PURE__ */ O.createElement(E.route.Component, null) : E.route.element ? Z = E.route.element : Z = S, /* @__PURE__ */ O.createElement(
          Cp,
          {
            match: E,
            routeContext: {
              outlet: S,
              matches: V,
              isDataRoute: r != null
            },
            children: Z
          }
        );
      };
      return r && (E.route.ErrorBoundary || E.route.errorElement || D === 0) ? /* @__PURE__ */ O.createElement(
        wm,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: L,
          error: Y,
          children: J(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
          onError: y
        }
      ) : J();
    },
    null
  );
}
function xo(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zp(u) {
  let c = O.useContext(In);
  return _e(c, xo(u)), c;
}
function Dp(u) {
  let c = O.useContext(Ni);
  return _e(c, xo(u)), c;
}
function Mp(u) {
  let c = O.useContext(hl);
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
  let u = O.useContext(To), c = Dp(
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
  ), r = O.useRef(!1);
  return Om(() => {
    r.current = !0;
  }), O.useCallback(
    async (o, h = {}) => {
      kt(r.current, xm), r.current && (typeof o == "number" ? await u.navigate(o) : await u.navigate(o, { fromRouteId: c, ...h }));
    },
    [u, c]
  );
}
var Yh = {};
function zm(u, c, r) {
  !c && !Yh[u] && (Yh[u] = !0, kt(!1, r));
}
O.memo(jp);
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
  static: h = !1,
  unstable_useTransitions: d
}) {
  _e(
    !Pa(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = O.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: h,
      unstable_useTransitions: d,
      future: {}
    }),
    [g, o, h, d]
  );
  typeof r == "string" && (r = Wn(r));
  let {
    pathname: y = "/",
    search: S = "",
    hash: E = "",
    state: D = null,
    key: Y = "default"
  } = r, T = O.useMemo(() => {
    let L = dl(y, g);
    return L == null ? null : {
      location: {
        pathname: L,
        search: S,
        hash: E,
        state: D,
        key: Y
      },
      navigationType: s
    };
  }, [g, y, S, E, D, Y, s]);
  return kt(
    T != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${S}${E}" because it does not start with the basename, so the <Router> won't render anything.`
  ), T == null ? null : /* @__PURE__ */ O.createElement(jt.Provider, { value: p }, /* @__PURE__ */ O.createElement($a.Provider, { children: c, value: T }));
}
function _p({
  children: u,
  location: c
}) {
  return Rp(vo(u), c);
}
function vo(u, c = []) {
  let r = [];
  return O.Children.forEach(u, (s, o) => {
    if (!O.isValidElement(s))
      return;
    let h = [...c, o];
    if (s.type === O.Fragment) {
      r.push.apply(
        r,
        vo(s.props.children, h)
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
    let d = {
      id: s.props.id || h.join("-"),
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
    s.props.children && (d.children = vo(
      s.props.children,
      h
    )), r.push(d);
  }), r;
}
var Ti = "get", xi = "application/x-www-form-urlencoded";
function Ui(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Lp(u) {
  return Ui(u) && u.tagName.toLowerCase() === "button";
}
function qp(u) {
  return Ui(u) && u.tagName.toLowerCase() === "form";
}
function kp(u) {
  return Ui(u) && u.tagName.toLowerCase() === "input";
}
function Qp(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Gp(u, c) {
  return u.button === 0 && // Ignore everything but left clicks
  (!c || c === "_self") && // Let browser handle "target=_blank" etc.
  !Qp(u);
}
var Ei = null;
function Yp() {
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
var Vp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ro(u) {
  return u != null && !Vp.has(u) ? (kt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xi}"`
  ), null) : u;
}
function Jp(u, c) {
  let r, s, o, h, d;
  if (qp(u)) {
    let g = u.getAttribute("action");
    s = g ? dl(g, c) : null, r = u.getAttribute("method") || Ti, o = ro(u.getAttribute("enctype")) || xi, h = new FormData(u);
  } else if (Lp(u) || kp(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (s = p ? dl(p, c) : null, r = u.getAttribute("formmethod") || g.getAttribute("method") || Ti, o = ro(u.getAttribute("formenctype")) || ro(g.getAttribute("enctype")) || xi, h = new FormData(g, u), !Yp()) {
      let { name: y, type: S, value: E } = u;
      if (S === "image") {
        let D = y ? `${y}.` : "";
        h.append(`${D}x`, "0"), h.append(`${D}y`, "0");
      } else y && h.append(y, E);
    }
  } else {
    if (Ui(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = Ti, s = null, o = xi, d = u;
  }
  return h && o === "text/plain" && (d = h, h = void 0), { action: s, method: r.toLowerCase(), encType: o, formData: h, body: d };
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
  return s.pathname === "/" ? s.pathname = `_root.${r}` : c && dl(s.pathname, c) === "/" ? s.pathname = `${c.replace(/\/$/, "")}/_root.${r}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${r}`, s;
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
      let h = c.routes[o.route.id];
      if (h) {
        let d = await Zp(h, r);
        return d.links ? d.links() : [];
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
function Vh(u, c, r, s, o, h) {
  let d = (p, y) => r[y] ? p.route.id !== r[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    r[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[y].route.path?.endsWith("*") && r[y].params["*"] !== p.params["*"]
  );
  return h === "assets" ? c.filter(
    (p, y) => d(p, y) || g(p, y)
  ) : h === "data" ? c.filter((p, y) => {
    let S = s.routes[p.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (d(p, y) || g(p, y))
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
      let h = [o.module];
      return o.clientActionModule && (h = h.concat(o.clientActionModule)), o.clientLoaderModule && (h = h.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (h = h.concat(o.hydrateFallbackModule)), o.imports && (h = h.concat(o.imports)), h;
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
    let h = JSON.stringify($p(o));
    return r.has(h) || (r.add(h), s.push({ key: h, link: o })), s;
  }, []);
}
function Mm() {
  let u = O.useContext(In);
  return Co(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function e1() {
  let u = O.useContext(Ni);
  return Co(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var wo = O.createContext(void 0);
wo.displayName = "FrameworkContext";
function Nm() {
  let u = O.useContext(wo);
  return Co(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function t1(u, c) {
  let r = O.useContext(wo), [s, o] = O.useState(!1), [h, d] = O.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: S, onTouchStart: E } = c, D = O.useRef(null);
  O.useEffect(() => {
    if (u === "render" && d(!0), u === "viewport") {
      let L = (V) => {
        V.forEach((J) => {
          d(J.isIntersecting);
        });
      }, U = new IntersectionObserver(L, { threshold: 0.5 });
      return D.current && U.observe(D.current), () => {
        U.disconnect();
      };
    }
  }, [u]), O.useEffect(() => {
    if (s) {
      let L = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [s]);
  let Y = () => {
    o(!0);
  }, T = () => {
    o(!1), d(!1);
  };
  return r ? u !== "intent" ? [h, D, {}] : [
    h,
    D,
    {
      onFocus: Za(g, Y),
      onBlur: Za(p, T),
      onMouseEnter: Za(y, Y),
      onMouseLeave: Za(S, T),
      onTouchStart: Za(E, Y)
    }
  ] : [!1, D, {}];
}
function Za(u, c) {
  return (r) => {
    u && u(r), r.defaultPrevented || c(r);
  };
}
function l1({ page: u, ...c }) {
  let { router: r } = Mm(), s = O.useMemo(
    () => mm(r.routes, u, r.basename),
    [r.routes, u, r.basename]
  );
  return s ? /* @__PURE__ */ O.createElement(a1, { page: u, matches: s, ...c }) : null;
}
function n1(u) {
  let { manifest: c, routeModules: r } = Nm(), [s, o] = O.useState([]);
  return O.useEffect(() => {
    let h = !1;
    return Fp(u, c, r).then(
      (d) => {
        h || o(d);
      }
    ), () => {
      h = !0;
    };
  }, [u, c, r]), s;
}
function a1({
  page: u,
  matches: c,
  ...r
}) {
  let s = rn(), { manifest: o, routeModules: h } = Nm(), { basename: d } = Mm(), { loaderData: g, matches: p } = e1(), y = O.useMemo(
    () => Vh(
      u,
      c,
      p,
      o,
      s,
      "data"
    ),
    [u, c, p, o, s]
  ), S = O.useMemo(
    () => Vh(
      u,
      c,
      p,
      o,
      s,
      "assets"
    ),
    [u, c, p, o, s]
  ), E = O.useMemo(() => {
    if (u === s.pathname + s.search + s.hash)
      return [];
    let T = /* @__PURE__ */ new Set(), L = !1;
    if (c.forEach((V) => {
      let J = o.routes[V.route.id];
      !J || !J.hasLoader || (!y.some((Z) => Z.route.id === V.route.id) && V.route.id in g && h[V.route.id]?.shouldRevalidate || J.hasClientLoader ? L = !0 : T.add(V.route.id));
    }), T.size === 0)
      return [];
    let U = Xp(u, d, "data");
    return L && T.size > 0 && U.searchParams.set(
      "_routes",
      c.filter((V) => T.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [U.pathname + U.search];
  }, [
    d,
    g,
    s,
    o,
    y,
    c,
    u,
    h
  ]), D = O.useMemo(
    () => Wp(S, o),
    [S, o]
  ), Y = n1(S);
  return /* @__PURE__ */ O.createElement(O.Fragment, null, E.map((T) => /* @__PURE__ */ O.createElement("link", { key: T, rel: "prefetch", as: "fetch", href: T, ...r })), D.map((T) => /* @__PURE__ */ O.createElement("link", { key: T, rel: "modulepreload", href: T, ...r })), Y.map(({ key: T, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ O.createElement("link", { key: T, nonce: r.nonce, ...L })
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
  let o = O.useRef();
  o.current == null && (o.current = kg({ window: s, v5Compat: !0 }));
  let h = o.current, [d, g] = O.useState({
    action: h.action,
    location: h.location
  }), p = O.useCallback(
    (y) => {
      r === !1 ? g(y) : O.startTransition(() => g(y));
    },
    [r]
  );
  return O.useLayoutEffect(() => h.listen(p), [h, p]), /* @__PURE__ */ O.createElement(
    Hp,
    {
      basename: u,
      children: c,
      location: d.location,
      navigationType: d.action,
      navigator: h,
      unstable_useTransitions: r
    }
  );
}
var Um = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Bm = O.forwardRef(
  function({
    onClick: c,
    discover: r = "render",
    prefetch: s = "none",
    relative: o,
    reloadDocument: h,
    replace: d,
    state: g,
    target: p,
    to: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: D,
    ...Y
  }, T) {
    let { basename: L, unstable_useTransitions: U } = O.useContext(jt), V = typeof y == "string" && Um.test(y), J = Am(y, L);
    y = J.to;
    let Z = bp(y, { relative: o }), [W, le, ae] = t1(
      s,
      Y
    ), ue = f1(y, {
      replace: d,
      state: g,
      target: p,
      preventScrollReset: S,
      relative: o,
      viewTransition: E,
      unstable_defaultShouldRevalidate: D,
      unstable_useTransitions: U
    });
    function te(Te) {
      c && c(Te), Te.defaultPrevented || ue(Te);
    }
    let de = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ O.createElement(
        "a",
        {
          ...Y,
          ...ae,
          href: J.absoluteURL || Z,
          onClick: J.isExternal || h ? c : te,
          ref: u1(T, le),
          target: p,
          "data-discover": !V && r === "render" ? "true" : void 0
        }
      )
    );
    return W && !V ? /* @__PURE__ */ O.createElement(O.Fragment, null, de, /* @__PURE__ */ O.createElement(l1, { page: Z })) : de;
  }
);
Bm.displayName = "Link";
var r1 = O.forwardRef(
  function({
    "aria-current": c = "page",
    caseSensitive: r = !1,
    className: s = "",
    end: o = !1,
    style: h,
    to: d,
    viewTransition: g,
    children: p,
    ...y
  }, S) {
    let E = eu(d, { relative: y.relative }), D = rn(), Y = O.useContext(Ni), { navigator: T, basename: L } = O.useContext(jt), U = Y != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    g1(E) && g === !0, V = T.encodeLocation ? T.encodeLocation(E).pathname : E.pathname, J = D.pathname, Z = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null;
    r || (J = J.toLowerCase(), Z = Z ? Z.toLowerCase() : null, V = V.toLowerCase()), Z && L && (Z = dl(Z, L) || Z);
    const W = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let le = J === V || !o && J.startsWith(V) && J.charAt(W) === "/", ae = Z != null && (Z === V || !o && Z.startsWith(V) && Z.charAt(V.length) === "/"), ue = {
      isActive: le,
      isPending: ae,
      isTransitioning: U
    }, te = le ? c : void 0, de;
    typeof s == "function" ? de = s(ue) : de = [
      s,
      le ? "active" : null,
      ae ? "pending" : null,
      U ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Te = typeof h == "function" ? h(ue) : h;
    return /* @__PURE__ */ O.createElement(
      Bm,
      {
        ...y,
        "aria-current": te,
        className: de,
        ref: S,
        style: Te,
        to: d,
        viewTransition: g
      },
      typeof p == "function" ? p(ue) : p
    );
  }
);
r1.displayName = "NavLink";
var o1 = O.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: c,
    navigate: r,
    reloadDocument: s,
    replace: o,
    state: h,
    method: d = Ti,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: D,
    ...Y
  }, T) => {
    let { unstable_useTransitions: L } = O.useContext(jt), U = m1(), V = y1(g, { relative: y }), J = d.toLowerCase() === "get" ? "get" : "post", Z = typeof g == "string" && Um.test(g), W = (le) => {
      if (p && p(le), le.defaultPrevented) return;
      le.preventDefault();
      let ae = le.nativeEvent.submitter, ue = ae?.getAttribute("formmethod") || d, te = () => U(ae || le.currentTarget, {
        fetcherKey: c,
        method: ue,
        navigate: r,
        replace: o,
        state: h,
        relative: y,
        preventScrollReset: S,
        viewTransition: E,
        unstable_defaultShouldRevalidate: D
      });
      L && r !== !1 ? O.startTransition(() => te()) : te();
    };
    return /* @__PURE__ */ O.createElement(
      "form",
      {
        ref: T,
        method: J,
        action: V,
        onSubmit: s ? p : W,
        ...Y,
        "data-discover": !Z && u === "render" ? "true" : void 0
      }
    );
  }
);
o1.displayName = "Form";
function s1(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jm(u) {
  let c = O.useContext(In);
  return _e(c, s1(u)), c;
}
function f1(u, {
  target: c,
  replace: r,
  state: s,
  preventScrollReset: o,
  relative: h,
  viewTransition: d,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ap(), S = rn(), E = eu(u, { relative: h });
  return O.useCallback(
    (D) => {
      if (Gp(D, c)) {
        D.preventDefault();
        let Y = r !== void 0 ? r : Ia(S) === Ia(E), T = () => y(u, {
          replace: Y,
          state: s,
          preventScrollReset: o,
          relative: h,
          viewTransition: d,
          unstable_defaultShouldRevalidate: g
        });
        p ? O.startTransition(() => T()) : T();
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
      h,
      d,
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
  ), { basename: c } = O.useContext(jt), r = Np(), s = u.fetch, o = u.navigate;
  return O.useCallback(
    async (h, d = {}) => {
      let { action: g, method: p, encType: y, formData: S, body: E } = Jp(
        h,
        c
      );
      if (d.navigate === !1) {
        let D = d.fetcherKey || h1();
        await s(D, r, d.action || g, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: S,
          body: E,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          flushSync: d.flushSync
        });
      } else
        await o(d.action || g, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: S,
          body: E,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          replace: d.replace,
          state: d.state,
          fromRouteId: r,
          flushSync: d.flushSync,
          viewTransition: d.viewTransition
        });
    },
    [s, o, c, r]
  );
}
function y1(u, { relative: c } = {}) {
  let { basename: r } = O.useContext(jt), s = O.useContext(hl);
  _e(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1), h = { ...eu(u || ".", { relative: c }) }, d = rn();
  if (u == null) {
    h.search = d.search;
    let g = new URLSearchParams(h.search), p = g.getAll("index");
    if (p.some((S) => S === "")) {
      g.delete("index"), p.filter((E) => E).forEach((E) => g.append("index", E));
      let S = g.toString();
      h.search = S ? `?${S}` : "";
    }
  }
  return (!u || u === ".") && o.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (h.pathname = h.pathname === "/" ? r : fl([r, h.pathname])), Ia(h);
}
function g1(u, { relative: c } = {}) {
  let r = O.useContext(Rm);
  _e(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = jm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = eu(u, { relative: c });
  if (!r.isTransitioning)
    return !1;
  let h = dl(r.currentLocation.pathname, s) || r.currentLocation.pathname, d = dl(r.nextLocation.pathname, s) || r.nextLocation.pathname;
  return zi(o.pathname, d) != null || zi(o.pathname, h) != null;
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
  function h(p, y, S) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: E == null ? null : "" + E,
      children: p,
      containerInfo: y,
      implementation: S
    };
  }
  var d = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, nt.createPortal = function(p, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return h(p, y, null, S);
  }, nt.flushSync = function(p) {
    var y = d.T, S = s.p;
    try {
      if (d.T = null, s.p = 2, p) return p();
    } finally {
      d.T = y, s.p = S, s.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var S = y.as, E = g(S, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? s.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: E,
          integrity: D,
          fetchPriority: Y
        }
      ) : S === "script" && s.d.X(p, {
        crossOrigin: E,
        integrity: D,
        fetchPriority: Y,
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
    return d.H.useFormState(p, y, S);
  }, nt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
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
var so = { exports: {} }, Ka = {}, fo = { exports: {} }, ho = {};
var Zh;
function S1() {
  return Zh || (Zh = 1, (function(u) {
    function c(k, q) {
      var Q = k.length;
      k.push(q);
      e: for (; 0 < Q; ) {
        var $ = Q - 1 >>> 1, re = k[$];
        if (0 < o(re, q))
          k[$] = q, k[Q] = re, Q = $;
        else break e;
      }
    }
    function r(k) {
      return k.length === 0 ? null : k[0];
    }
    function s(k) {
      if (k.length === 0) return null;
      var q = k[0], Q = k.pop();
      if (Q !== q) {
        k[0] = Q;
        e: for (var $ = 0, re = k.length, be = re >>> 1; $ < be; ) {
          var b = 2 * ($ + 1) - 1, H = k[b], G = b + 1, K = k[G];
          if (0 > o(H, Q))
            G < re && 0 > o(K, H) ? (k[$] = K, k[G] = Q, $ = G) : (k[$] = H, k[b] = Q, $ = b);
          else if (G < re && 0 > o(K, Q))
            k[$] = K, k[G] = Q, $ = G;
          else break e;
        }
      }
      return q;
    }
    function o(k, q) {
      var Q = k.sortIndex - q.sortIndex;
      return Q !== 0 ? Q : k.id - q.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, g = d.now();
      u.unstable_now = function() {
        return d.now() - g;
      };
    }
    var p = [], y = [], S = 1, E = null, D = 3, Y = !1, T = !1, L = !1, U = !1, V = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function W(k) {
      for (var q = r(y); q !== null; ) {
        if (q.callback === null) s(y);
        else if (q.startTime <= k)
          s(y), q.sortIndex = q.expirationTime, c(p, q);
        else break;
        q = r(y);
      }
    }
    function le(k) {
      if (L = !1, W(k), !T)
        if (r(p) !== null)
          T = !0, ae || (ae = !0, Be());
        else {
          var q = r(y);
          q !== null && Ie(le, q.startTime - k);
        }
    }
    var ae = !1, ue = -1, te = 5, de = -1;
    function Te() {
      return U ? !0 : !(u.unstable_now() - de < te);
    }
    function Ue() {
      if (U = !1, ae) {
        var k = u.unstable_now();
        de = k;
        var q = !0;
        try {
          e: {
            T = !1, L && (L = !1, J(ue), ue = -1), Y = !0;
            var Q = D;
            try {
              t: {
                for (W(k), E = r(p); E !== null && !(E.expirationTime > k && Te()); ) {
                  var $ = E.callback;
                  if (typeof $ == "function") {
                    E.callback = null, D = E.priorityLevel;
                    var re = $(
                      E.expirationTime <= k
                    );
                    if (k = u.unstable_now(), typeof re == "function") {
                      E.callback = re, W(k), q = !0;
                      break t;
                    }
                    E === r(p) && s(p), W(k);
                  } else s(p);
                  E = r(p);
                }
                if (E !== null) q = !0;
                else {
                  var be = r(y);
                  be !== null && Ie(
                    le,
                    be.startTime - k
                  ), q = !1;
                }
              }
              break e;
            } finally {
              E = null, D = Q, Y = !1;
            }
            q = void 0;
          }
        } finally {
          q ? Be() : ae = !1;
        }
      }
    }
    var Be;
    if (typeof Z == "function")
      Be = function() {
        Z(Ue);
      };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), Ze = De.port2;
      De.port1.onmessage = Ue, Be = function() {
        Ze.postMessage(null);
      };
    } else
      Be = function() {
        V(Ue, 0);
      };
    function Ie(k, q) {
      ue = V(function() {
        k(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, u.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : te = 0 < k ? Math.floor(1e3 / k) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return D;
    }, u.unstable_next = function(k) {
      switch (D) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = D;
      }
      var Q = D;
      D = q;
      try {
        return k();
      } finally {
        D = Q;
      }
    }, u.unstable_requestPaint = function() {
      U = !0;
    }, u.unstable_runWithPriority = function(k, q) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var Q = D;
      D = k;
      try {
        return q();
      } finally {
        D = Q;
      }
    }, u.unstable_scheduleCallback = function(k, q, Q) {
      var $ = u.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? $ + Q : $) : Q = $, k) {
        case 1:
          var re = -1;
          break;
        case 2:
          re = 250;
          break;
        case 5:
          re = 1073741823;
          break;
        case 4:
          re = 1e4;
          break;
        default:
          re = 5e3;
      }
      return re = Q + re, k = {
        id: S++,
        callback: q,
        priorityLevel: k,
        startTime: Q,
        expirationTime: re,
        sortIndex: -1
      }, Q > $ ? (k.sortIndex = Q, c(y, k), r(p) === null && k === r(y) && (L ? (J(ue), ue = -1) : L = !0, Ie(le, Q - $))) : (k.sortIndex = re, c(p, k), T || Y || (T = !0, ae || (ae = !0, Be()))), k;
    }, u.unstable_shouldYield = Te, u.unstable_wrapCallback = function(k) {
      var q = D;
      return function() {
        var Q = D;
        D = q;
        try {
          return k.apply(this, arguments);
        } finally {
          D = Q;
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
  if (Fh) return Ka;
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
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
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
    if (d(e) !== e)
      throw Error(o(188));
  }
  function S(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(o(188));
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
  var D = Object.assign, Y = /* @__PURE__ */ Symbol.for("react.element"), T = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), ae = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), te = /* @__PURE__ */ Symbol.for("react.memo"), de = /* @__PURE__ */ Symbol.for("react.lazy"), Te = /* @__PURE__ */ Symbol.for("react.activity"), Ue = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Be = Symbol.iterator;
  function De(e) {
    return e === null || typeof e != "object" ? null : (e = Be && e[Be] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ze ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case J:
        return "Profiler";
      case V:
        return "StrictMode";
      case ae:
        return "Suspense";
      case ue:
        return "SuspenseList";
      case Te:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case W:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case te:
          return t = e.displayName || null, t !== null ? t : Ie(e.type) || "Memo";
        case de:
          t = e._payload, e = e._init;
          try {
            return Ie(e(t));
          } catch {
          }
      }
    return null;
  }
  var k = Array.isArray, q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], be = -1;
  function b(e) {
    return { current: e };
  }
  function H(e) {
    0 > be || (e.current = re[be], re[be] = null, be--);
  }
  function G(e, t) {
    be++, re[be] = e.current, e.current = t;
  }
  var K = b(null), se = b(null), I = b(null), fe = b(null);
  function Le(e, t) {
    switch (G(I, t), G(se, e), G(K, null), t.nodeType) {
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
    H(K), G(K, e);
  }
  function ze() {
    H(K), H(se), H(I);
  }
  function Ht(e) {
    e.memoizedState !== null && G(fe, e);
    var t = K.current, l = uh(t, e.type);
    t !== l && (G(se, e), G(K, l));
  }
  function on(e) {
    se.current === e && (H(K), H(se)), fe.current === e && (H(fe), Ga._currentValue = $);
  }
  var ki, Uo;
  function ql(e) {
    if (ki === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ki = t && t[1] || "", Uo = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ki + e + Uo;
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
                } catch (N) {
                  var w = N;
                }
                Reflect.construct(e, [], _);
              } else {
                try {
                  _.call();
                } catch (N) {
                  w = N;
                }
                e.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                w = N;
              }
              (_ = e()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (N) {
            if (N && w && typeof N.stack == "string")
              return [N.stack, w.stack];
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
    return (l = e ? e.displayName || e.name : "") ? ql(l) : "";
  }
  function m0(e, t) {
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
        return Gi(e.type, !1);
      case 11:
        return Gi(e.type.render, !1);
      case 1:
        return Gi(e.type, !0);
      case 31:
        return ql("Activity");
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
  var Yi = Object.prototype.hasOwnProperty, Vi = c.unstable_scheduleCallback, Ji = c.unstable_cancelCallback, y0 = c.unstable_shouldYield, g0 = c.unstable_requestPaint, yt = c.unstable_now, p0 = c.unstable_getCurrentPriorityLevel, jo = c.unstable_ImmediatePriority, Ho = c.unstable_UserBlockingPriority, uu = c.unstable_NormalPriority, v0 = c.unstable_LowPriority, _o = c.unstable_IdlePriority, S0 = c.log, b0 = c.unstable_setDisableYieldValue, ea = null, gt = null;
  function ml(e) {
    if (typeof S0 == "function" && b0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(ea, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : R0, A0 = Math.log, E0 = Math.LN2;
  function R0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (A0(e) / E0 | 0) | 0;
  }
  var iu = 256, cu = 262144, ru = 4194304;
  function kl(e) {
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
    var m = n & 134217727;
    return m !== 0 ? (n = m & ~i, n !== 0 ? a = kl(n) : (f &= m, f !== 0 ? a = kl(f) : l || (l = m & ~e, l !== 0 && (a = kl(l))))) : (m = n & ~i, m !== 0 ? a = kl(m) : f !== 0 ? a = kl(f) : l || (l = n & ~e, l !== 0 && (a = kl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function ta(e, t) {
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
    var e = ru;
    return ru <<= 1, (ru & 62914560) === 0 && (ru = 4194304), e;
  }
  function Xi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function la(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function x0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var B = 31 - pt(l), _ = 1 << B;
      m[B] = 0, v[B] = -1;
      var w = C[B];
      if (w !== null)
        for (C[B] = null, B = 0; B < w.length; B++) {
          var N = w[B];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~_;
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
  var yl = Math.random().toString(36).slice(2), $e = "__reactFiber$" + yl, it = "__reactProps$" + yl, sn = "__reactContainer$" + yl, Fi = "__reactEvents$" + yl, O0 = "__reactListeners$" + yl, C0 = "__reactHandles$" + yl, Vo = "__reactResources$" + yl, na = "__reactMarker$" + yl;
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
  function aa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function hn(e) {
    var t = e[Vo];
    return t || (t = e[Vo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[na] = !0;
  }
  var Jo = /* @__PURE__ */ new Set(), Xo = {};
  function Ql(e, t) {
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
  function su(e, t, l) {
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
  function fu(e, t, l) {
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
  function Zt(e, t, l, n) {
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
  function du(e) {
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
    t === "number" && du(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
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
        if (k(n)) {
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
  function hu(e) {
    return B0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Kt() {
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
      if (nc = !1, (pn !== null || vn !== null) && (ei(), pn && (t = pn, e = vn, vn = pn = null, ls(t), e)))
        for (t = 0; t < e.length; t++) ls(e[t]);
    }
  }
  function ua(e, t) {
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
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ac = !1;
  if (Ft)
    try {
      var ia = {};
      Object.defineProperty(ia, "passive", {
        get: function() {
          ac = !0;
        }
      }), window.addEventListener("test", ia, ia), window.removeEventListener("test", ia, ia);
    } catch {
      ac = !1;
    }
  var gl = null, uc = null, mu = null;
  function as() {
    if (mu) return mu;
    var e, t = uc, l = t.length, n, a = "value" in gl ? gl.value : gl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === a[i - n]; n++) ;
    return mu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function yu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function gu() {
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
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gu : us, this.isPropagationStopped = us, this;
    }
    return D(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = gu);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = gu);
      },
      persist: function() {
      },
      isPersistent: gu
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
  }, pu = ct(Gl), ca = D({}, Gl, { view: 0, detail: 0 }), j0 = ct(ca), ic, cc, ra, vu = D({}, ca, {
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
      return "movementX" in e ? e.movementX : (e !== ra && (ra && e.type === "mousemove" ? (ic = e.screenX - ra.screenX, cc = e.screenY - ra.screenY) : cc = ic = 0, ra = e), ic);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : cc;
    }
  }), is = ct(vu), H0 = D({}, vu, { dataTransfer: 0 }), _0 = ct(H0), L0 = D({}, ca, { relatedTarget: 0 }), rc = ct(L0), q0 = D({}, Gl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), k0 = ct(q0), Q0 = D({}, Gl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), G0 = ct(Q0), Y0 = D({}, Gl, { data: 0 }), cs = ct(Y0), V0 = {
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
  var K0 = D({}, ca, {
    key: function(e) {
      if (e.key) {
        var t = V0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? J0[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? yu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), F0 = ct(K0), W0 = D({}, vu, {
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
  }), rs = ct(W0), I0 = D({}, ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), $0 = ct(I0), P0 = D({}, Gl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = ct(P0), ty = D({}, vu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ly = ct(ty), ny = D({}, Gl, {
    newState: 0,
    oldState: 0
  }), ay = ct(ny), uy = [9, 13, 27, 32], sc = Ft && "CompositionEvent" in window, oa = null;
  Ft && "documentMode" in document && (oa = document.documentMode);
  var iy = Ft && "TextEvent" in window && !oa, os = Ft && (!sc || oa && 8 < oa && 11 >= oa), ss = " ", fs = !1;
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
      return e === "compositionend" || !sc && ds(e, t) ? (e = as(), mu = uc = gl = null, Sn = !1, e) : null;
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
    pn ? vn ? vn.push(n) : vn = [n] : pn = n, t = ci(t, "onChange"), 0 < t.length && (l = new pu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var sa = null, fa = null;
  function sy(e) {
    $d(e, 0);
  }
  function Su(e) {
    var t = aa(e);
    if (Wo(t)) return e;
  }
  function gs(e, t) {
    if (e === "change") return t;
  }
  var ps = !1;
  if (Ft) {
    var fc;
    if (Ft) {
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
    sa && (sa.detachEvent("onpropertychange", bs), fa = sa = null);
  }
  function bs(e) {
    if (e.propertyName === "value" && Su(fa)) {
      var t = [];
      ys(
        t,
        fa,
        e,
        lc(e)
      ), ns(sy, t);
    }
  }
  function fy(e, t, l) {
    e === "focusin" ? (Ss(), sa = t, fa = l, sa.attachEvent("onpropertychange", bs)) : e === "focusout" && Ss();
  }
  function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Su(fa);
  }
  function hy(e, t) {
    if (e === "click") return Su(t);
  }
  function my(e, t) {
    if (e === "input" || e === "change")
      return Su(t);
  }
  function yy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : yy;
  function da(e, t) {
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
  function hc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gy = Ft && "documentMode" in document && 11 >= document.documentMode, bn = null, mc = null, ha = null, yc = !1;
  function xs(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    yc || bn == null || bn !== du(n) || (n = bn, "selectionStart" in n && hc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ha && da(ha, n) || (ha = n, n = ci(mc, "onSelect"), 0 < n.length && (t = new pu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = bn)));
  }
  function Yl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var An = {
    animationend: Yl("Animation", "AnimationEnd"),
    animationiteration: Yl("Animation", "AnimationIteration"),
    animationstart: Yl("Animation", "AnimationStart"),
    transitionrun: Yl("Transition", "TransitionRun"),
    transitionstart: Yl("Transition", "TransitionStart"),
    transitioncancel: Yl("Transition", "TransitionCancel"),
    transitionend: Yl("Transition", "TransitionEnd")
  }, gc = {}, Os = {};
  Ft && (Os = document.createElement("div").style, "AnimationEvent" in window || (delete An.animationend.animation, delete An.animationiteration.animation, delete An.animationstart.animation), "TransitionEvent" in window || delete An.transitionend.transition);
  function Vl(e) {
    if (gc[e]) return gc[e];
    if (!An[e]) return e;
    var t = An[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Os)
        return gc[e] = t[l];
    return e;
  }
  var Cs = Vl("animationend"), ws = Vl("animationiteration"), zs = Vl("animationstart"), py = Vl("transitionrun"), vy = Vl("transitionstart"), Sy = Vl("transitioncancel"), Ds = Vl("transitionend"), Ms = /* @__PURE__ */ new Map(), pc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  pc.push("scrollEnd");
  function _t(e, t) {
    Ms.set(e, t), Ql(t, [e]);
  }
  var bu = typeof reportError == "function" ? reportError : function(e) {
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
  function Au() {
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
  function Eu(e, t, l, n) {
    Ct[En++] = e, Ct[En++] = t, Ct[En++] = l, Ct[En++] = n, vc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function Sc(e, t, l, n) {
    return Eu(e, t, l, n), Ru(e);
  }
  function Jl(e, t) {
    return Eu(e, null, null, t), Ru(e);
  }
  function Ns(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Ru(e) {
    if (50 < ja)
      throw ja = 0, wr = null, Error(o(185));
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
  function Wt(e, t) {
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
  function Tu(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") bc(e) && (f = 1);
    else if (typeof e == "string")
      f = xg(
        e,
        l,
        K.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Te:
          return e = St(31, l, t, a), e.elementType = Te, e.lanes = i, e;
        case U:
          return Xl(l.children, a, i, t);
        case V:
          f = 8, a |= 24;
          break;
        case J:
          return e = St(12, l, t, a | 2), e.elementType = J, e.lanes = i, e;
        case ae:
          return e = St(13, l, t, a), e.elementType = ae, e.lanes = i, e;
        case ue:
          return e = St(19, l, t, a), e.elementType = ue, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                f = 10;
                break e;
              case Z:
                f = 9;
                break e;
              case le:
                f = 11;
                break e;
              case te:
                f = 14;
                break e;
              case de:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = St(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Xl(e, t, l, n) {
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
  var Tn = [], xn = 0, xu = null, ma = 0, zt = [], Dt = 0, pl = null, Gt = 1, Yt = "";
  function It(e, t) {
    Tn[xn++] = ma, Tn[xn++] = xu, xu = e, ma = t;
  }
  function Hs(e, t, l) {
    zt[Dt++] = Gt, zt[Dt++] = Yt, zt[Dt++] = pl, pl = e;
    var n = Gt;
    e = Yt;
    var a = 32 - pt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pt(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Gt = 1 << 32 - pt(t) + a | l << a | n, Yt = i + e;
    } else
      Gt = 1 << i | l << a | n, Yt = e;
  }
  function Rc(e) {
    e.return !== null && (It(e, 1), Hs(e, 1, 0));
  }
  function Tc(e) {
    for (; e === xu; )
      xu = Tn[--xn], Tn[xn] = null, ma = Tn[--xn], Tn[xn] = null;
    for (; e === pl; )
      pl = zt[--Dt], zt[Dt] = null, Yt = zt[--Dt], zt[Dt] = null, Gt = zt[--Dt], zt[Dt] = null;
  }
  function _s(e, t) {
    zt[Dt++] = Gt, zt[Dt++] = Yt, zt[Dt++] = pl, Gt = t.id, Yt = t.overflow, pl = e;
  }
  var Pe = null, Me = null, pe = !1, vl = null, Mt = !1, xc = Error(o(519));
  function Sl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw ya(wt(t, e)), xc;
  }
  function Ls(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[$e] = e, t[it] = n, l) {
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
        for (l = 0; l < _a.length; l++)
          me(_a[l], t);
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
        me("invalid", t), Io(
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
        me("invalid", t), Po(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || lh(t.textContent, l) ? (n.popover != null && (me("beforetoggle", t), me("toggle", t)), n.onScroll != null && me("scroll", t), n.onScrollEnd != null && me("scrollend", t), n.onClick != null && (t.onclick = Kt), t = !0) : t = !1, t || Sl(e, !0);
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
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Yr(e.type, e.memoizedProps)), l = !l), l && Me && Sl(e), qs(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = fh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = fh(e);
    } else
      t === 27 ? (t = Me, Ul(e.type) ? (e = Kr, Kr = null, Me = e) : Me = t) : Me = Pe ? Ut(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zl() {
    Me = Pe = null, pe = !1;
  }
  function Oc() {
    var e = vl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), vl = null), e;
  }
  function ya(e) {
    vl === null ? vl = [e] : vl.push(e);
  }
  var Cc = b(null), Kl = null, $t = null;
  function bl(e, t, l) {
    G(Cc, t._currentValue), t._currentValue = l;
  }
  function Pt(e) {
    e._currentValue = Cc.current, H(Cc);
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
      } else if (a === fe.current) {
        if (f = a.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Ga) : e = [Ga]);
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
    Kl = e, $t = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return ks(Kl, e);
  }
  function Cu(e, t) {
    return Kl === null && Fl(e), ks(e, t);
  }
  function ks(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, $t === null) {
      if (e === null) throw Error(o(308));
      $t = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else $t = $t.next = t;
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
    $$typeof: W,
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
  function ga(e) {
    e.refCount--, e.refCount === 0 && Ey(Ry, function() {
      e.controller.abort();
    });
  }
  var pa = null, Mc = 0, wn = 0, zn = null;
  function Ty(e, t) {
    if (pa === null) {
      var l = pa = [];
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
    if (--Mc === 0 && pa !== null) {
      zn !== null && (zn.status = "fulfilled");
      var e = pa;
      pa = null, wn = 0, zn = null;
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
  var Wl = b(null);
  function Nc() {
    var e = Wl.current;
    return e !== null ? e : we.pooledCache;
  }
  function wu(e, t) {
    t === null ? G(Wl, Wl.current) : G(Wl, t.pool);
  }
  function Ys() {
    var e = Nc();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Dn = Error(o(460)), Uc = Error(o(474)), zu = Error(o(542)), Du = { then: function() {
  } };
  function Vs(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Js(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Kt, Kt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Zs(e), e;
      default:
        if (typeof t.status == "string") t.then(Kt, Kt);
        else {
          if (e = we, e !== null && 100 < e.shellSuspendCounter)
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
        throw $l = t, Dn;
    }
  }
  function Il(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? ($l = l, Dn) : l;
    }
  }
  var $l = null;
  function Xs() {
    if ($l === null) throw Error(o(459));
    var e = $l;
    return $l = null, e;
  }
  function Zs(e) {
    if (e === Dn || e === zu)
      throw Error(o(483));
  }
  var Mn = null, va = 0;
  function Mu(e) {
    var t = va;
    return va += 1, Mn === null && (Mn = []), Js(Mn, e, t);
  }
  function Sa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Nu(e, t) {
    throw t.$$typeof === Y ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ks(e) {
    function t(R, A) {
      if (e) {
        var x = R.deletions;
        x === null ? (R.deletions = [A], R.flags |= 16) : x.push(A);
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
      return R = Wt(R, A), R.index = 0, R.sibling = null, R;
    }
    function i(R, A, x) {
      return R.index = x, e ? (x = R.alternate, x !== null ? (x = x.index, x < A ? (R.flags |= 67108866, A) : x) : (R.flags |= 67108866, A)) : (R.flags |= 1048576, A);
    }
    function f(R) {
      return e && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, A, x, j) {
      return A === null || A.tag !== 6 ? (A = Ac(x, R.mode, j), A.return = R, A) : (A = a(A, x), A.return = R, A);
    }
    function v(R, A, x, j) {
      var P = x.type;
      return P === U ? B(
        R,
        A,
        x.props.children,
        j,
        x.key
      ) : A !== null && (A.elementType === P || typeof P == "object" && P !== null && P.$$typeof === de && Il(P) === A.type) ? (A = a(A, x.props), Sa(A, x), A.return = R, A) : (A = Tu(
        x.type,
        x.key,
        x.props,
        null,
        R.mode,
        j
      ), Sa(A, x), A.return = R, A);
    }
    function C(R, A, x, j) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== x.containerInfo || A.stateNode.implementation !== x.implementation ? (A = Ec(x, R.mode, j), A.return = R, A) : (A = a(A, x.children || []), A.return = R, A);
    }
    function B(R, A, x, j, P) {
      return A === null || A.tag !== 7 ? (A = Xl(
        x,
        R.mode,
        j,
        P
      ), A.return = R, A) : (A = a(A, x), A.return = R, A);
    }
    function _(R, A, x) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Ac(
          "" + A,
          R.mode,
          x
        ), A.return = R, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            return x = Tu(
              A.type,
              A.key,
              A.props,
              null,
              R.mode,
              x
            ), Sa(x, A), x.return = R, x;
          case L:
            return A = Ec(
              A,
              R.mode,
              x
            ), A.return = R, A;
          case de:
            return A = Il(A), _(R, A, x);
        }
        if (k(A) || De(A))
          return A = Xl(
            A,
            R.mode,
            x,
            null
          ), A.return = R, A;
        if (typeof A.then == "function")
          return _(R, Mu(A), x);
        if (A.$$typeof === W)
          return _(
            R,
            Cu(R, A),
            x
          );
        Nu(R, A);
      }
      return null;
    }
    function w(R, A, x, j) {
      var P = A !== null ? A.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return P !== null ? null : m(R, A, "" + x, j);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case T:
            return x.key === P ? v(R, A, x, j) : null;
          case L:
            return x.key === P ? C(R, A, x, j) : null;
          case de:
            return x = Il(x), w(R, A, x, j);
        }
        if (k(x) || De(x))
          return P !== null ? null : B(R, A, x, j, null);
        if (typeof x.then == "function")
          return w(
            R,
            A,
            Mu(x),
            j
          );
        if (x.$$typeof === W)
          return w(
            R,
            A,
            Cu(R, x),
            j
          );
        Nu(R, x);
      }
      return null;
    }
    function N(R, A, x, j, P) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return R = R.get(x) || null, m(A, R, "" + j, P);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case T:
            return R = R.get(
              j.key === null ? x : j.key
            ) || null, v(A, R, j, P);
          case L:
            return R = R.get(
              j.key === null ? x : j.key
            ) || null, C(A, R, j, P);
          case de:
            return j = Il(j), N(
              R,
              A,
              x,
              j,
              P
            );
        }
        if (k(j) || De(j))
          return R = R.get(x) || null, B(A, R, j, P, null);
        if (typeof j.then == "function")
          return N(
            R,
            A,
            x,
            Mu(j),
            P
          );
        if (j.$$typeof === W)
          return N(
            R,
            A,
            x,
            Cu(A, j),
            P
          );
        Nu(A, j);
      }
      return null;
    }
    function X(R, A, x, j) {
      for (var P = null, ve = null, F = A, oe = A = 0, ge = null; F !== null && oe < x.length; oe++) {
        F.index > oe ? (ge = F, F = null) : ge = F.sibling;
        var Se = w(
          R,
          F,
          x[oe],
          j
        );
        if (Se === null) {
          F === null && (F = ge);
          break;
        }
        e && F && Se.alternate === null && t(R, F), A = i(Se, A, oe), ve === null ? P = Se : ve.sibling = Se, ve = Se, F = ge;
      }
      if (oe === x.length)
        return l(R, F), pe && It(R, oe), P;
      if (F === null) {
        for (; oe < x.length; oe++)
          F = _(R, x[oe], j), F !== null && (A = i(
            F,
            A,
            oe
          ), ve === null ? P = F : ve.sibling = F, ve = F);
        return pe && It(R, oe), P;
      }
      for (F = n(F); oe < x.length; oe++)
        ge = N(
          F,
          R,
          oe,
          x[oe],
          j
        ), ge !== null && (e && ge.alternate !== null && F.delete(
          ge.key === null ? oe : ge.key
        ), A = i(
          ge,
          A,
          oe
        ), ve === null ? P = ge : ve.sibling = ge, ve = ge);
      return e && F.forEach(function(Ll) {
        return t(R, Ll);
      }), pe && It(R, oe), P;
    }
    function ee(R, A, x, j) {
      if (x == null) throw Error(o(151));
      for (var P = null, ve = null, F = A, oe = A = 0, ge = null, Se = x.next(); F !== null && !Se.done; oe++, Se = x.next()) {
        F.index > oe ? (ge = F, F = null) : ge = F.sibling;
        var Ll = w(R, F, Se.value, j);
        if (Ll === null) {
          F === null && (F = ge);
          break;
        }
        e && F && Ll.alternate === null && t(R, F), A = i(Ll, A, oe), ve === null ? P = Ll : ve.sibling = Ll, ve = Ll, F = ge;
      }
      if (Se.done)
        return l(R, F), pe && It(R, oe), P;
      if (F === null) {
        for (; !Se.done; oe++, Se = x.next())
          Se = _(R, Se.value, j), Se !== null && (A = i(Se, A, oe), ve === null ? P = Se : ve.sibling = Se, ve = Se);
        return pe && It(R, oe), P;
      }
      for (F = n(F); !Se.done; oe++, Se = x.next())
        Se = N(F, R, oe, Se.value, j), Se !== null && (e && Se.alternate !== null && F.delete(Se.key === null ? oe : Se.key), A = i(Se, A, oe), ve === null ? P = Se : ve.sibling = Se, ve = Se);
      return e && F.forEach(function(Hg) {
        return t(R, Hg);
      }), pe && It(R, oe), P;
    }
    function Ce(R, A, x, j) {
      if (typeof x == "object" && x !== null && x.type === U && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case T:
            e: {
              for (var P = x.key; A !== null; ) {
                if (A.key === P) {
                  if (P = x.type, P === U) {
                    if (A.tag === 7) {
                      l(
                        R,
                        A.sibling
                      ), j = a(
                        A,
                        x.props.children
                      ), j.return = R, R = j;
                      break e;
                    }
                  } else if (A.elementType === P || typeof P == "object" && P !== null && P.$$typeof === de && Il(P) === A.type) {
                    l(
                      R,
                      A.sibling
                    ), j = a(A, x.props), Sa(j, x), j.return = R, R = j;
                    break e;
                  }
                  l(R, A);
                  break;
                } else t(R, A);
                A = A.sibling;
              }
              x.type === U ? (j = Xl(
                x.props.children,
                R.mode,
                j,
                x.key
              ), j.return = R, R = j) : (j = Tu(
                x.type,
                x.key,
                x.props,
                null,
                R.mode,
                j
              ), Sa(j, x), j.return = R, R = j);
            }
            return f(R);
          case L:
            e: {
              for (P = x.key; A !== null; ) {
                if (A.key === P)
                  if (A.tag === 4 && A.stateNode.containerInfo === x.containerInfo && A.stateNode.implementation === x.implementation) {
                    l(
                      R,
                      A.sibling
                    ), j = a(A, x.children || []), j.return = R, R = j;
                    break e;
                  } else {
                    l(R, A);
                    break;
                  }
                else t(R, A);
                A = A.sibling;
              }
              j = Ec(x, R.mode, j), j.return = R, R = j;
            }
            return f(R);
          case de:
            return x = Il(x), Ce(
              R,
              A,
              x,
              j
            );
        }
        if (k(x))
          return X(
            R,
            A,
            x,
            j
          );
        if (De(x)) {
          if (P = De(x), typeof P != "function") throw Error(o(150));
          return x = P.call(x), ee(
            R,
            A,
            x,
            j
          );
        }
        if (typeof x.then == "function")
          return Ce(
            R,
            A,
            Mu(x),
            j
          );
        if (x.$$typeof === W)
          return Ce(
            R,
            A,
            Cu(R, x),
            j
          );
        Nu(R, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, A !== null && A.tag === 6 ? (l(R, A.sibling), j = a(A, x), j.return = R, R = j) : (l(R, A), j = Ac(x, R.mode, j), j.return = R, R = j), f(R)) : l(R, A);
    }
    return function(R, A, x, j) {
      try {
        va = 0;
        var P = Ce(
          R,
          A,
          x,
          j
        );
        return Mn = null, P;
      } catch (F) {
        if (F === Dn || F === zu) throw F;
        var ve = St(29, F, null, R.mode);
        return ve.lanes = j, ve.return = R, ve;
      }
    };
  }
  var Pl = Ks(!0), Fs = Ks(!1), Al = !1;
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
  function El(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Rl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ae & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Ru(e), Ns(e, null, l), t;
    }
    return Eu(e, n, t, l), Ru(e);
  }
  function ba(e, t, l) {
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
  function Aa() {
    if (_c) {
      var e = zn;
      if (e !== null) throw e;
    }
  }
  function Ea(e, t, l, n) {
    _c = !1;
    var a = e.updateQueue;
    Al = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, m = a.shared.pending;
    if (m !== null) {
      a.shared.pending = null;
      var v = m, C = v.next;
      v.next = null, f === null ? i = C : f.next = C, f = v;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, m = B.lastBaseUpdate, m !== f && (m === null ? B.firstBaseUpdate = C : m.next = C, B.lastBaseUpdate = v));
    }
    if (i !== null) {
      var _ = a.baseState;
      f = 0, B = C = v = null, m = i;
      do {
        var w = m.lane & -536870913, N = w !== m.lane;
        if (N ? (ye & w) === w : (n & w) === w) {
          w !== 0 && w === wn && (_c = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, ee = m;
            w = t;
            var Ce = l;
            switch (ee.tag) {
              case 1:
                if (X = ee.payload, typeof X == "function") {
                  _ = X.call(Ce, _, w);
                  break e;
                }
                _ = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = ee.payload, w = typeof X == "function" ? X.call(Ce, _, w) : X, w == null) break e;
                _ = D({}, _, w);
                break e;
              case 2:
                Al = !0;
            }
          }
          w = m.callback, w !== null && (e.flags |= 64, N && (e.flags |= 8192), N = a.callbacks, N === null ? a.callbacks = [w] : N.push(w));
        } else
          N = {
            lane: w,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, B === null ? (C = B = N, v = _) : B = B.next = N, f |= w;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          N = m, m = N.next, N.next = null, a.lastBaseUpdate = N, a.shared.pending = null;
        }
      } while (!0);
      B === null && (v = _), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = B, i === null && (a.shared.lanes = 0), wl |= f, e.lanes = f, e.memoizedState = _;
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
  var Nn = b(null), Uu = b(0);
  function $s(e, t) {
    e = rl, G(Uu, e), G(Nn, t), rl = e | t.baseLanes;
  }
  function Lc() {
    G(Uu, rl), G(Nn, Nn.current);
  }
  function qc() {
    rl = Uu.current, H(Nn), H(Uu);
  }
  var bt = b(null), Nt = null;
  function Tl(e) {
    var t = e.alternate;
    G(Qe, Qe.current & 1), G(bt, e), Nt === null && (t === null || Nn.current !== null || t.memoizedState !== null) && (Nt = e);
  }
  function kc(e) {
    G(Qe, Qe.current), G(bt, e), Nt === null && (Nt = e);
  }
  function Ps(e) {
    e.tag === 22 ? (G(Qe, Qe.current), G(bt, e), Nt === null && (Nt = e)) : xl();
  }
  function xl() {
    G(Qe, Qe.current), G(bt, bt.current);
  }
  function At(e) {
    H(bt), Nt === e && (Nt = null), H(Qe);
  }
  var Qe = b(0);
  function Bu(e) {
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
  var el = 0, ie = null, xe = null, Ve = null, ju = !1, Un = !1, en = !1, Hu = 0, Ra = 0, Bn = null, Oy = 0;
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
    return el = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? _f : nr, en = !1, i = l(n, a), en = !1, Un && (i = tf(
      t,
      l,
      n,
      a
    )), ef(e), i;
  }
  function ef(e) {
    q.H = Oa;
    var t = xe !== null && xe.next !== null;
    if (el = 0, Ve = xe = ie = null, ju = !1, Ra = 0, Bn = null, t) throw Error(o(300));
    e === null || Je || (e = e.dependencies, e !== null && Ou(e) && (Je = !0));
  }
  function tf(e, t, l, n) {
    ie = e;
    var a = 0;
    do {
      if (Un && (Bn = null), Ra = 0, Un = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Ve = xe = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      q.H = Lf, i = t(l, n);
    } while (Un);
    return i;
  }
  function Cy() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ta(t) : t, e = e.useState()[0], (xe !== null ? xe.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function Yc() {
    var e = Hu !== 0;
    return Hu = 0, e;
  }
  function Vc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Jc(e) {
    if (ju) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ju = !1;
    }
    el = 0, Ve = xe = ie = null, Un = !1, Ra = Hu = 0, Bn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ve === null ? ie.memoizedState = Ve = e : Ve = Ve.next = e, Ve;
  }
  function Ge() {
    if (xe === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ve === null ? ie.memoizedState : Ve.next;
    if (t !== null)
      Ve = t, xe = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(o(467)) : Error(o(310));
      xe = e, e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null
      }, Ve === null ? ie.memoizedState = Ve = e : Ve = Ve.next = e;
    }
    return Ve;
  }
  function _u() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ta(e) {
    var t = Ra;
    return Ra += 1, Bn === null && (Bn = []), e = Js(Bn, e, t), t = ie, (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? _f : nr), e;
  }
  function Lu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ta(e);
      if (e.$$typeof === W) return et(e);
    }
    throw Error(o(438, String(e)));
  }
  function Xc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = _u(), ie.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Ue;
    return t.index++, l;
  }
  function tl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function qu(e) {
    var t = Ge();
    return Zc(t, xe, e);
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
      var m = f = null, v = null, C = t, B = !1;
      do {
        var _ = C.lane & -536870913;
        if (_ !== C.lane ? (ye & _) === _ : (el & _) === _) {
          var w = C.revertLane;
          if (w === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), _ === wn && (B = !0);
          else if ((el & w) === w) {
            C = C.next, w === wn && (B = !0);
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
            }, v === null ? (m = v = _, f = i) : v = v.next = _, ie.lanes |= w, wl |= w;
          _ = C.action, en && l(i, _), i = C.hasEagerState ? C.eagerState : l(i, _);
        } else
          w = {
            lane: _,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (m = v = w, f = i) : v = v.next = w, ie.lanes |= _, wl |= _;
        C = C.next;
      } while (C !== null && C !== t);
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
    var n = ie, a = Ge(), i = pe;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !vt(
      (xe || a).memoizedState,
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
      ), we === null) throw Error(o(349));
      i || (el & 127) !== 0 || nf(n, t, l);
    }
    return l;
  }
  function nf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = _u(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
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
    var t = Jl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Fc(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), en) {
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
      lastRenderedReducer: tl,
      lastRenderedState: e
    }, t;
  }
  function of(e, t, l, n) {
    return e.baseState = l, Zc(
      e,
      xe,
      typeof n == "function" ? n : tl
    );
  }
  function wy(e, t, l, n, a) {
    if (Gu(e)) throw Error(o(485));
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
      } catch (C) {
        Wc(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
      }
    } else
      try {
        i = l(a, n), ff(e, t, i);
      } catch (C) {
        Wc(e, t, C);
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
      var l = we.formState;
      if (l !== null) {
        e: {
          var n = ie;
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
      lastRenderedReducer: mf,
      lastRenderedState: t
    }, l.queue = n, l = Bf.bind(
      null,
      ie,
      n
    ), n.dispatch = l, n = Fc(!1), i = lr.bind(
      null,
      ie,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = wy.bind(
      null,
      ie,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function gf(e) {
    var t = Ge();
    return pf(t, xe, e);
  }
  function pf(e, t, l) {
    if (t = Zc(
      e,
      t,
      mf
    )[0], e = qu(tl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Ta(t);
      } catch (f) {
        throw f === Dn ? zu : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ie.flags |= 2048, jn(
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
    var t = Ge(), l = xe;
    if (l !== null)
      return pf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function jn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ie.updateQueue, t === null && (t = _u(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Sf() {
    return Ge().memoizedState;
  }
  function ku(e, t, l, n) {
    var a = ut();
    ie.flags |= e, a.memoizedState = jn(
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
    xe !== null && n !== null && Qc(n, xe.memoizedState.deps) ? a.memoizedState = jn(t, i, l, n) : (ie.flags |= e, a.memoizedState = jn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function bf(e, t) {
    ku(8390656, 8, e, t);
  }
  function Ic(e, t) {
    Qu(2048, 8, e, t);
  }
  function Dy(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = _u(), ie.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Af(e) {
    var t = Ge().memoizedState;
    return Dy({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ef(e, t) {
    return Qu(4, 2, e, t);
  }
  function Rf(e, t) {
    return Qu(4, 4, e, t);
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
    l = l != null ? l.concat([e]) : null, Qu(4, 4, Tf.bind(null, t, e), l);
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
    if (n = e(), en) {
      ml(!0);
      try {
        e();
      } finally {
        ml(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function Pc(e, t, l) {
    return l === void 0 || (el & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = wd(), ie.lanes |= e, wl |= e, l);
  }
  function wf(e, t, l, n) {
    return vt(l, t) ? l : Nn.current !== null ? (e = Pc(e, l, n), vt(e, t) || (Je = !0), e) : (el & 42) === 0 || (el & 1073741824) !== 0 && (ye & 261930) === 0 ? (Je = !0, e.memoizedState = l) : (e = wd(), ie.lanes |= e, wl |= e, t);
  }
  function zf(e, t, l, n, a) {
    var i = Q.p;
    Q.p = i !== 0 && 8 > i ? i : 8;
    var f = q.T, m = {};
    q.T = m, lr(e, !1, t, l);
    try {
      var v = a(), C = q.S;
      if (C !== null && C(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var B = xy(
          v,
          n
        );
        xa(
          e,
          t,
          B,
          Tt(e)
        );
      } else
        xa(
          e,
          t,
          n,
          Tt(e)
        );
    } catch (_) {
      xa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
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
      $,
      l === null ? My : function() {
        return Mf(e), l(n);
      }
    );
  }
  function Df(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $,
      baseState: $,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: $
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
        lastRenderedReducer: tl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Mf(e) {
    var t = Df(e);
    t.next === null && (t = e.alternate.memoizedState), xa(
      e,
      t.next.queue,
      {},
      Tt()
    );
  }
  function tr() {
    return et(Ga);
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
          e = El(l);
          var n = Rl(t, e, l);
          n !== null && (dt(n, t, l), ba(n, t, l)), t = { cache: Dc() }, e.payload = t;
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
    }, Gu(e) ? jf(t, l) : (l = Sc(e, t, l, n), l !== null && (dt(l, e, n), Hf(l, t, n)));
  }
  function Bf(e, t, l) {
    var n = Tt();
    xa(e, t, l, n);
  }
  function xa(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Gu(e)) jf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, m = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = m, vt(m, f))
            return Eu(e, t, a, 0), we === null && Au(), !1;
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
    }, Gu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Sc(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function Gu(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function jf(e, t) {
    Un = ju = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Hf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, ko(e, l);
    }
  }
  var Oa = {
    readContext: et,
    use: Lu,
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
  Oa.useEffectEvent = qe;
  var _f = {
    readContext: et,
    use: Lu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: et,
    useEffect: bf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, ku(
        4194308,
        4,
        Tf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return ku(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ku(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ut();
      t = t === void 0 ? null : t;
      var n = e();
      if (en) {
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
        if (en) {
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
      }, n.queue = e, e = e.dispatch = Uy.bind(
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
      e = Fc(e);
      var t = e.queue, l = Bf.bind(null, ie, t);
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
        ie,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ie, a = ut();
      if (pe) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), we === null)
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
      var e = ut(), t = we.identifierPrefix;
      if (pe) {
        var l = Yt, n = Gt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Hu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
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
        ie,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Xc,
    useCacheRefresh: function() {
      return ut().memoizedState = Ny.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ae & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, nr = {
    readContext: et,
    use: Lu,
    useCallback: Of,
    useContext: et,
    useEffect: Ic,
    useImperativeHandle: xf,
    useInsertionEffect: Ef,
    useLayoutEffect: Rf,
    useMemo: Cf,
    useReducer: qu,
    useRef: Sf,
    useState: function() {
      return qu(tl);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return wf(
        l,
        xe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = qu(tl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ta(e),
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
      return of(l, xe, e, t);
    },
    useMemoCache: Xc,
    useCacheRefresh: Uf
  };
  nr.useEffectEvent = Af;
  var Lf = {
    readContext: et,
    use: Lu,
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
      return Kc(tl);
    },
    useDebugValue: $c,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return xe === null ? Pc(l, e, t) : wf(
        l,
        xe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Kc(tl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Ta(e),
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
      return xe !== null ? of(l, xe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Xc,
    useCacheRefresh: Uf
  };
  Lf.useEffectEvent = Af;
  function ar(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : D({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var ur = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = El(n);
      a.payload = t, l != null && (a.callback = l), t = Rl(e, a, n), t !== null && (dt(t, e, n), ba(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = El(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Rl(e, a, n), t !== null && (dt(t, e, n), ba(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Tt(), n = El(l);
      n.tag = 2, t != null && (n.callback = t), t = Rl(e, n, l), t !== null && (dt(t, e, l), ba(t, e, l));
    }
  };
  function qf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !da(l, n) || !da(a, i) : !0;
  }
  function kf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && ur.enqueueReplaceState(t, t.state, null);
  }
  function tn(e, t) {
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
  function Qf(e) {
    bu(e);
  }
  function Gf(e) {
    console.error(e);
  }
  function Yf(e) {
    bu(e);
  }
  function Yu(e, t) {
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
    return l = El(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Yu(e, t);
    }, l;
  }
  function Jf(e) {
    return e = El(e), e.tag = 3, e;
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
      Vf(t, l, n), typeof a != "function" && (zl === null ? zl = /* @__PURE__ */ new Set([this]) : zl.add(this));
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
            return Nt === null ? ti() : l.alternate === null && ke === 0 && (ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Du ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Mr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Du ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Mr(e, n, a)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Mr(e, n, a), ti(), !1;
    }
    if (pe)
      return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== xc && (e = Error(o(422), { cause: n }), ya(wt(e, l)))) : (n !== xc && (t = Error(o(423), {
        cause: n
      }), ya(
        wt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = wt(n, l), a = ir(
        e.stateNode,
        n,
        a
      ), Hc(e, a), ke !== 4 && (ke = 2)), !1;
    var i = Error(o(520), { cause: n });
    if (i = wt(i, l), Ba === null ? Ba = [i] : Ba.push(i), ke !== 4 && (ke = 2), t === null) return !0;
    n = wt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = ir(l.stateNode, n, e), Hc(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (zl === null || !zl.has(i))))
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
    t.child = e === null ? Fs(t, null, l, n) : Pl(
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
    return Fl(t), n = Gc(
      e,
      t,
      l,
      f,
      i,
      a
    ), m = Yc(), e !== null && !Je ? (Vc(e, t, a), ll(e, t, a)) : (pe && m && Rc(t), t.flags |= 1, tt(e, t, n, a), t.child);
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
      )) : (e = Tu(
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
      if (l = l.compare, l = l !== null ? l : da, l(f, n) && e.ref === t.ref)
        return ll(e, t, a);
    }
    return t.flags |= 1, e = Wt(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ff(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (da(i, n) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = n = i, yr(e, a))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, ll(e, t, a);
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && wu(
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
      i !== null ? (wu(t, i.cachePool), $s(t, i), xl(), t.memoizedState = null) : (e !== null && wu(t, null), Lc(), xl());
    return tt(e, t, a, l), t.child;
  }
  function Ca(e, t) {
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
    }, e !== null && wu(t, null), Lc(), Ps(t), e !== null && Cn(e, t, n, !0), t.childLanes = a, null;
  }
  function Vu(e, t) {
    return t = Xu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function $f(e, t, l) {
    return Pl(t, e.child, null, l), e = Vu(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function jy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (pe) {
        if (n.mode === "hidden")
          return e = Vu(t, n), t.lanes = 536870912, Ca(null, e);
        if (kc(t), (e = Me) ? (e = sh(
          e,
          Mt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: pl !== null ? { id: Gt, overflow: Yt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bs(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return t.lanes = 536870912, null;
      }
      return Vu(t, n);
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
        if (n = we, n !== null && (f = Qo(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Jl(e, f), dt(n, e, f), cr;
        ti(), t = $f(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Me = Ut(f.nextSibling), Pe = t, pe = !0, vl = null, Mt = !1, e !== null && _s(t, e), t = Vu(t, n), t.flags |= 4096;
      return t;
    }
    return e = Wt(e.child, {
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
  function rr(e, t, l, n, a) {
    return Fl(t), l = Gc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Yc(), e !== null && !Je ? (Vc(e, t, a), ll(e, t, a)) : (pe && n && Rc(t), t.flags |= 1, tt(e, t, l, a), t.child);
  }
  function Pf(e, t, l, n, a, i) {
    return Fl(t), t.updateQueue = null, l = tf(
      t,
      n,
      l,
      a
    ), ef(e), n = Yc(), e !== null && !Je ? (Vc(e, t, i), ll(e, t, i)) : (pe && n && Rc(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function ed(e, t, l, n, a) {
    if (Fl(t), t.stateNode === null) {
      var i = Rn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ur, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Bc(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : Rn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ar(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && ur.enqueueReplaceState(i, i.state, null), Ea(t, n, i, a), Aa(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, v = tn(l, m);
      i.props = v;
      var C = i.context, B = l.contextType;
      f = Rn, typeof B == "object" && B !== null && (f = et(B));
      var _ = l.getDerivedStateFromProps;
      B = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || C !== f) && kf(
        t,
        i,
        n,
        f
      ), Al = !1;
      var w = t.memoizedState;
      i.state = w, Ea(t, n, i, a), Aa(), C = t.memoizedState, m || w !== C || Al ? (typeof _ == "function" && (ar(
        t,
        l,
        _,
        n
      ), C = t.memoizedState), (v = Al || qf(
        t,
        l,
        v,
        n,
        w,
        C,
        f
      )) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, jc(e, t), f = t.memoizedProps, B = tn(l, f), i.props = B, _ = t.pendingProps, w = i.context, C = l.contextType, v = Rn, typeof C == "object" && C !== null && (v = et(C)), m = l.getDerivedStateFromProps, (C = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== _ || w !== v) && kf(
        t,
        i,
        n,
        v
      ), Al = !1, w = t.memoizedState, i.state = w, Ea(t, n, i, a), Aa();
      var N = t.memoizedState;
      f !== _ || w !== N || Al || e !== null && e.dependencies !== null && Ou(e.dependencies) ? (typeof m == "function" && (ar(
        t,
        l,
        m,
        n
      ), N = t.memoizedState), (B = Al || qf(
        t,
        l,
        B,
        n,
        w,
        N,
        v
      ) || e !== null && e.dependencies !== null && Ou(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, N, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        N,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = N), i.props = n, i.state = N, i.context = v, n = B) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && w === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Ju(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = Pl(
      t,
      e.child,
      null,
      a
    ), t.child = Pl(
      t,
      null,
      l,
      a
    )) : tt(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = ll(
      e,
      t,
      a
    ), e;
  }
  function td(e, t, l, n) {
    return Zl(), t.flags |= 256, tt(e, t, l, n), t.child;
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
        if (a ? Tl(t) : xl(), (e = Me) ? (e = sh(
          e,
          Mt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: pl !== null ? { id: Gt, overflow: Yt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bs(e), l.return = t, t.child = l, Pe = t, Me = null)) : e = null, e === null) throw Sl(t);
        return Zr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = n.children;
      return n = n.fallback, a ? (xl(), a = t.mode, m = Xu(
        { mode: "hidden", children: m },
        a
      ), n = Xl(
        n,
        a,
        l,
        null
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = sr(l), n.childLanes = fr(
        e,
        f,
        l
      ), t.memoizedState = or, Ca(null, n)) : (Tl(t), dr(t, m));
    }
    var v = e.memoizedState;
    if (v !== null && (m = v.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (Tl(t), t.flags &= -257, t = hr(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (xl(), t.child = e.child, t.flags |= 128, t = null) : (xl(), m = n.fallback, a = t.mode, n = Xu(
          { mode: "visible", children: n.children },
          a
        ), m = Xl(
          m,
          a,
          l,
          null
        ), m.flags |= 2, n.return = t, m.return = t, n.sibling = m, t.child = n, Pl(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = sr(l), n.childLanes = fr(
          e,
          f,
          l
        ), t.memoizedState = or, t = Ca(null, n));
      else if (Tl(t), Zr(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(o(419)), n.stack = "", n.digest = f, ya({ value: n, source: null, stack: null }), t = hr(
          e,
          t,
          l
        );
      } else if (Je || Cn(e, t, l, !1), f = (l & e.childLanes) !== 0, Je || f) {
        if (f = we, f !== null && (n = Qo(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Jl(e, n), dt(f, e, n), cr;
        Xr(m) || ti(), t = hr(
          e,
          t,
          l
        );
      } else
        Xr(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Me = Ut(
          m.nextSibling
        ), Pe = t, pe = !0, vl = null, Mt = !1, e !== null && _s(t, e), t = dr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (xl(), m = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = Wt(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? m = Wt(
      C,
      m
    ) : (m = Xl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, Ca(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = sr(l) : (a = m.cachePool, a !== null ? (v = Ye._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Ys(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = fr(
      e,
      f,
      l
    ), t.memoizedState = or, Ca(e.child, n)) : (Tl(t), l = e.child, e = l.sibling, l = Wt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function dr(e, t) {
    return t = Xu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Xu(e, t) {
    return e = St(22, e, null, t), e.lanes = 0, e;
  }
  function hr(e, t, l) {
    return Pl(t, e.child, null, l), e = dr(
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
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, G(Qe, f), tt(e, t, n, l), n = pe ? ma : 0, !m && e !== null && (e.flags & 128) !== 0)
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
          e = l.alternate, e !== null && Bu(e) === null && (a = l), l = l.sibling;
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
          if (e = a.alternate, e !== null && Bu(e) === null) {
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
  function ll(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), wl |= t.lanes, (l & t.childLanes) === 0)
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
      for (e = t.child, l = Wt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Wt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function yr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ou(e)));
  }
  function Hy(e, t, l) {
    switch (t.tag) {
      case 3:
        Le(t, t.stateNode.containerInfo), bl(t, Ye, e.memoizedState.cache), Zl();
        break;
      case 27:
      case 5:
        Ht(t);
        break;
      case 4:
        Le(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, kc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Tl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ld(e, t, l) : (Tl(t), e = ll(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Tl(t);
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
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), G(Qe, Qe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, Wf(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        bl(t, Ye, e.memoizedState.cache);
    }
    return ll(e, t, l);
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
      Je = !1, pe && (t.flags & 1048576) !== 0 && Hs(t, ma, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Il(t.elementType), t.type = e, typeof e == "function")
            bc(e) ? (n = tn(e, n), t.tag = 1, t = ed(
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
              if (a === le) {
                t.tag = 11, t = Zf(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === te) {
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
            throw t = Ie(e) || e, Error(o(306, t, ""));
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
        return n = t.type, a = tn(
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
          if (Le(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, jc(e, t), Ea(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, bl(t, Ye, n), n !== i.cache && zc(
            t,
            [Ye],
            l,
            !0
          ), Aa(), n = f.element, i.isDehydrated)
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
              ), ya(a), t = td(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Ut(e.firstChild), Pe = t, pe = !0, vl = null, Mt = !0, l = Fs(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Zl(), n === a) {
              t = ll(
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
        return Ju(e, t), e === null ? (l = gh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : pe || (l = t.type, e = t.pendingProps, n = ri(
          I.current
        ).createElement(l), n[$e] = t, n[it] = e, lt(n, l, e), Fe(n), t.stateNode = n) : t.memoizedState = gh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ht(t), e === null && pe && (n = t.stateNode = hh(
          t.type,
          t.pendingProps,
          I.current
        ), Pe = t, Mt = !0, a = Me, Ul(t.type) ? (Kr = a, Me = Ut(n.firstChild)) : Me = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ju(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && pe && ((a = n = Me) && (n = dg(
          n,
          t.type,
          t.pendingProps,
          Mt
        ), n !== null ? (t.stateNode = n, Pe = t, Me = Ut(n.firstChild), Mt = !1, a = !0) : a = !1), a || Sl(t)), Ht(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Yr(a, i) ? n = null : f !== null && Yr(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Gc(
          e,
          t,
          Cy,
          null,
          null,
          l
        ), Ga._currentValue = a), Ju(e, t), tt(e, t, n, l), t.child;
      case 6:
        return e === null && pe && ((e = l = Me) && (l = hg(
          l,
          t.pendingProps,
          Mt
        ), l !== null ? (t.stateNode = l, Pe = t, Me = null, e = !0) : e = !1), e || Sl(t)), null;
      case 13:
        return ld(e, t, l);
      case 4:
        return Le(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = Pl(
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
        return n = t.pendingProps, bl(t, t.type, n.value), tt(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Fl(t), a = et(a), n = n(a), t.flags |= 1, tt(e, t, n, l), t.child;
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
        return Fl(t), n = et(Ye), e === null ? (a = Nc(), a === null && (a = we, i = Dc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Bc(t), bl(t, Ye, a)) : ((e.lanes & l) !== 0 && (jc(e, t), Ea(t, null, null, l), Aa()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), bl(t, Ye, n)) : (n = i.cache, bl(t, Ye, n), n !== a.cache && zc(
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
  function nl(e) {
    e.flags |= 4;
  }
  function gr(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Nd()) e.flags |= 8192;
        else
          throw $l = Du, Uc;
    } else e.flags &= -16777217;
  }
  function id(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ah(t))
      if (Nd()) e.flags |= 8192;
      else
        throw $l = Du, Uc;
  }
  function Zu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Lo() : 536870912, e.lanes |= t, qn |= t);
  }
  function wa(e, t) {
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
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Pt(Ye), ze(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (On(t) ? nl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oc())), Ne(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (nl(t), i !== null ? (Ne(t), id(t, i)) : (Ne(t), gr(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (nl(t), Ne(t), id(t, i)) : (Ne(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && nl(t), Ne(t), gr(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (on(t), l = I.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && nl(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ne(t), null;
          }
          e = K.current, On(t) ? Ls(t) : (e = hh(a, n, l), t.stateNode = e, nl(t));
        }
        return Ne(t), null;
      case 5:
        if (on(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && nl(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Ne(t), null;
          }
          if (i = K.current, On(t))
            Ls(t);
          else {
            var f = ri(
              I.current
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
            n && nl(t);
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
          e.memoizedProps !== n && nl(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = I.current, On(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Pe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[$e] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || lh(e.nodeValue, l)), e || Sl(t, !0);
          } else
            e = ri(e).createTextNode(
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
              Zl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
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
              Zl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ne(t), a = !1;
          } else
            a = Oc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Zu(t, t.updateQueue), Ne(t), null);
      case 4:
        return ze(), e === null && Lr(t.stateNode.containerInfo), Ne(t), null;
      case 10:
        return Pt(t.type), Ne(t), null;
      case 19:
        if (H(Qe), n = t.memoizedState, n === null) return Ne(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) wa(n, !1);
          else {
            if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, wa(n, !1), e = i.updateQueue, t.updateQueue = e, Zu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Us(l, e), l = l.sibling;
                  return G(
                    Qe,
                    Qe.current & 1 | 2
                  ), pe && It(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > $u && (t.flags |= 128, a = !0, wa(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Bu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Zu(t, e), wa(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !pe)
                return Ne(t), null;
            } else
              2 * yt() - n.renderingStartTime > $u && l !== 536870912 && (t.flags |= 128, a = !0, wa(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Qe.current, G(
          Qe,
          a ? l & 1 | 2 : l & 1
        ), pe && It(t, n.treeForkCount), e) : (Ne(t), null);
      case 22:
      case 23:
        return At(t), qc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ne(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ne(t), l = t.updateQueue, l !== null && Zu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && H(Wl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Pt(Ye), Ne(t), null;
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
        return Pt(Ye), ze(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return on(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(o(340));
          Zl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Zl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Qe), null;
      case 4:
        return ze(), null;
      case 10:
        return Pt(t.type), null;
      case 22:
      case 23:
        return At(t), qc(), e !== null && H(Wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Pt(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cd(e, t) {
    switch (Tc(t), t.tag) {
      case 3:
        Pt(Ye), ze();
        break;
      case 26:
      case 27:
      case 5:
        on(t);
        break;
      case 4:
        ze();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        H(Qe);
        break;
      case 10:
        Pt(t.type);
        break;
      case 22:
      case 23:
        At(t), qc(), e !== null && H(Wl);
        break;
      case 24:
        Pt(Ye);
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
    } catch (m) {
      Re(t, t.return, m);
    }
  }
  function Ol(e, t, l) {
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
              } catch (B) {
                Re(
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
      Re(t, t.return, B);
    }
  }
  function rd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Is(t, l);
      } catch (n) {
        Re(e, e.return, n);
      }
    }
  }
  function od(e, t, l) {
    l.props = tn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Re(e, t, n);
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
      Re(e, t, a);
    }
  }
  function Vt(e, t) {
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
      Re(e, e.return, a);
    }
  }
  function pr(e, t, l) {
    try {
      var n = e.stateNode;
      ig(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Re(e, e.return, a);
    }
  }
  function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
  }
  function vr(e) {
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
  function Sr(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Kt));
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Sr(e, t, l), e = e.sibling; e !== null; )
        Sr(e, t, l), e = e.sibling;
  }
  function Ku(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ku(e, t, l), e = e.sibling; e !== null; )
        Ku(e, t, l), e = e.sibling;
  }
  function dd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      lt(t, n, l), t[$e] = e, t[it] = l;
    } catch (i) {
      Re(e, e.return, i);
    }
  }
  var al = !1, Xe = !1, br = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function qy(e, t) {
    if (e = e.containerInfo, Qr = yi, e = Ts(e), hc(e)) {
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
            var f = 0, m = -1, v = -1, C = 0, B = 0, _ = e, w = null;
            t: for (; ; ) {
              for (var N; _ !== l || a !== 0 && _.nodeType !== 3 || (m = f + a), _ !== i || n !== 0 && _.nodeType !== 3 || (v = f + n), _.nodeType === 3 && (f += _.nodeValue.length), (N = _.firstChild) !== null; )
                w = _, _ = N;
              for (; ; ) {
                if (_ === e) break t;
                if (w === l && ++C === a && (m = f), w === i && ++B === n && (v = f), (N = _.nextSibling) !== null) break;
                _ = w, w = _.parentNode;
              }
              _ = N;
            }
            l = m === -1 || v === -1 ? null : { start: m, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Gr = { focusedElem: e, selectionRange: l }, yi = !1, We = t; We !== null; )
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
                  var X = tn(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    X,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Re(
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
            e.return = t.return, We = e;
            break;
          }
          We = t.return;
        }
  }
  function md(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        il(e, l), n & 4 && za(5, l);
        break;
      case 1:
        if (il(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Re(l, l.return, f);
            }
          else {
            var a = tn(
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
        n & 64 && rd(l), n & 512 && Da(l, l.return);
        break;
      case 3:
        if (il(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
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
            Re(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && dd(l);
      case 26:
      case 5:
        il(e, l), t === null && n & 4 && sd(l), n & 512 && Da(l, l.return);
        break;
      case 12:
        il(e, l);
        break;
      case 31:
        il(e, l), n & 4 && pd(e, l);
        break;
      case 13:
        il(e, l), n & 4 && vd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Ky.bind(
          null,
          l
        ), mg(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || al, !n) {
          t = t !== null && t.memoizedState !== null || Xe, a = al;
          var i = Xe;
          al = n, (Xe = t) && !i ? cl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : il(e, l), al = a, Xe = i;
        }
        break;
      case 30:
        break;
      default:
        il(e, l);
    }
  }
  function yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Wi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, rt = !1;
  function ul(e, t, l) {
    for (l = l.child; l !== null; )
      gd(e, t, l), l = l.sibling;
  }
  function gd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(ea, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Xe || Vt(l, t), ul(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Xe || Vt(l, t);
        var n = je, a = rt;
        Ul(l.type) && (je = l.stateNode, rt = !1), ul(
          e,
          t,
          l
        ), qa(l.stateNode), je = n, rt = a;
        break;
      case 5:
        Xe || Vt(l, t);
      case 6:
        if (n = je, a = rt, je = null, ul(
          e,
          t,
          l
        ), je = n, rt = a, je !== null)
          if (rt)
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
        je !== null && (rt ? (e = je, rh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Zn(e)) : rh(je, l.stateNode));
        break;
      case 4:
        n = je, a = rt, je = l.stateNode.containerInfo, rt = !0, ul(
          e,
          t,
          l
        ), je = n, rt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, t), Xe || Ol(4, l, t), ul(
          e,
          t,
          l
        );
        break;
      case 1:
        Xe || (Vt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && od(
          l,
          t,
          n
        )), ul(
          e,
          t,
          l
        );
        break;
      case 21:
        ul(
          e,
          t,
          l
        );
        break;
      case 22:
        Xe = (n = Xe) || l.memoizedState !== null, ul(
          e,
          t,
          l
        ), Xe = n;
        break;
      default:
        ul(
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
        Re(t, t.return, l);
      }
    }
  }
  function vd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Zn(e);
      } catch (l) {
        Re(t, t.return, l);
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
  function Fu(e, t) {
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
              if (Ul(m.type)) {
                je = m.stateNode, rt = !1;
                break e;
              }
              break;
            case 5:
              je = m.stateNode, rt = !1;
              break e;
            case 3:
            case 4:
              je = m.stateNode.containerInfo, rt = !0;
              break e;
          }
          m = m.return;
        }
        if (je === null) throw Error(o(160));
        gd(i, f, a), je = null, rt = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Sd(t, e), t = t.sibling;
  }
  var Lt = null;
  function Sd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ot(t, e), st(e), n & 4 && (Ol(3, e, e.return), za(3, e), Ol(5, e, e.return));
        break;
      case 1:
        ot(t, e), st(e), n & 512 && (Xe || l === null || Vt(l, l.return)), n & 64 && al && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Lt;
        if (ot(t, e), st(e), n & 512 && (Xe || l === null || Vt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[na] || i[$e] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), lt(i, n, l), i[$e] = e, Fe(i), n = i;
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
                  i[$e] = e, Fe(i), n = i;
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
        ot(t, e), st(e), n & 512 && (Xe || l === null || Vt(l, l.return)), l !== null && n & 4 && pr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ot(t, e), st(e), n & 512 && (Xe || l === null || Vt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            gn(a, "");
          } catch (X) {
            Re(e, e.return, X);
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
          } catch (X) {
            Re(e, e.return, X);
          }
        }
        break;
      case 3:
        if (fi = null, a = Lt, Lt = oi(t.containerInfo), ot(t, e), Lt = a, st(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Zn(t.containerInfo);
          } catch (X) {
            Re(e, e.return, X);
          }
        br && (br = !1, bd(e));
        break;
      case 4:
        n = Lt, Lt = oi(
          e.stateNode.containerInfo
        ), ot(t, e), st(e), Lt = n;
        break;
      case 12:
        ot(t, e), st(e);
        break;
      case 31:
        ot(t, e), st(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 13:
        ot(t, e), st(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Iu = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = al, B = Xe;
        if (al = C || a, Xe = B || v, ot(t, e), Xe = B, al = C, st(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || al || Xe || ln(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = v.stateNode;
                    var _ = v.memoizedProps.style, w = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    m.style.display = w == null || typeof w == "boolean" ? "" : ("" + w).trim();
                  }
                } catch (X) {
                  Re(v, v.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (X) {
                  Re(v, v.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var N = v.stateNode;
                  a ? oh(N, !0) : oh(v.stateNode, !1);
                } catch (X) {
                  Re(v, v.return, X);
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
        ot(t, e), st(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Fu(e, n)));
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
            Ku(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (gn(f, ""), l.flags &= -33);
            var m = vr(e);
            Ku(e, m, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, C = vr(e);
            Sr(
              e,
              C,
              v
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (B) {
        Re(e, e.return, B);
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
  function il(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        md(e, t.alternate, t), t = t.sibling;
  }
  function ln(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, t, t.return), ln(t);
          break;
        case 1:
          Vt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && od(
            t,
            t.return,
            l
          ), ln(t);
          break;
        case 27:
          qa(t.stateNode);
        case 26:
        case 5:
          Vt(t, t.return), ln(t);
          break;
        case 22:
          t.memoizedState === null && ln(t);
          break;
        case 30:
          ln(t);
          break;
        default:
          ln(t);
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
          ), za(4, i);
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
                  Ws(v[a], m);
            } catch (C) {
              Re(n, n.return, C);
            }
          }
          l && f & 64 && rd(i), Da(i, i.return);
          break;
        case 27:
          dd(i);
        case 26:
        case 5:
          cl(
            a,
            i,
            l
          ), l && n === null && f & 4 && sd(i), Da(i, i.return);
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
          ), l && f & 4 && pd(a, i);
          break;
        case 13:
          cl(
            a,
            i,
            l
          ), l && f & 4 && vd(a, i);
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
  function Ar(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && ga(l));
  }
  function Er(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ga(e));
  }
  function qt(e, t, l, n) {
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
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ga(e)));
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
        ) : (i._visibility |= 2, Hn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Ar(f, t);
        break;
      case 24:
        qt(
          e,
          t,
          l,
          n
        ), a & 2048 && Er(t.alternate, t);
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
  function Hn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, m = l, v = n, C = f.flags;
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
          ), za(8, f);
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
          ) : Ma(
            i,
            f
          ) : (B._visibility |= 2, Hn(
            i,
            f,
            m,
            v,
            a
          )), a && C & 2048 && Ar(
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
          ), a && C & 2048 && Er(f.alternate, f);
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
  function Ma(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Ma(l, n), a & 2048 && Ar(
              n.alternate,
              n
            );
            break;
          case 24:
            Ma(l, n), a & 2048 && Er(n.alternate, n);
            break;
          default:
            Ma(l, n);
        }
        t = t.sibling;
      }
  }
  var Na = 8192;
  function _n(e, t, l) {
    if (e.subtreeFlags & Na)
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
        ), e.flags & Na && e.memoizedState !== null && Og(
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
        Lt = oi(e.stateNode.containerInfo), _n(
          e,
          t,
          l
        ), Lt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Na, Na = 16777216, _n(
          e,
          t,
          l
        ), Na = n) : _n(
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
  function Ua(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          We = n, xd(
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
        Ua(e), e.flags & 2048 && Ol(9, e, e.return);
        break;
      case 3:
        Ua(e);
        break;
      case 12:
        Ua(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Wu(e)) : Ua(e);
        break;
      default:
        Ua(e);
    }
  }
  function Wu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          We = n, xd(
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
          Ol(8, t, t.return), Wu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Wu(t));
          break;
        default:
          Wu(t);
      }
      e = e.sibling;
    }
  }
  function xd(e, t) {
    for (; We !== null; ) {
      var l = We;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          ga(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, We = n;
      else
        e: for (l = e; We !== null; ) {
          n = We;
          var a = n.sibling, i = n.return;
          if (yd(n), n === l) {
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
      var t = et(Ye), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return et(Ye).controller.signal;
    }
  }, Gy = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, we = null, he = null, ye = 0, Ee = 0, Et = null, Cl = !1, Ln = !1, Rr = !1, rl = 0, ke = 0, wl = 0, nn = 0, Tr = 0, Rt = 0, qn = 0, Ba = null, ft = null, xr = !1, Iu = 0, Od = 0, $u = 1 / 0, Pu = null, zl = null, Ke = 0, Dl = null, kn = null, ol = 0, Or = 0, Cr = null, Cd = null, ja = 0, wr = null;
  function Tt() {
    return (Ae & 2) !== 0 && ye !== 0 ? ye & -ye : q.T !== null ? Br() : Go();
  }
  function wd() {
    if (Rt === 0)
      if ((ye & 536870912) === 0 || pe) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Rt = e;
      } else Rt = 536870912;
    return e = bt.current, e !== null && (e.flags |= 32), Rt;
  }
  function dt(e, t, l) {
    (e === we && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (Qn(e, 0), Ml(
      e,
      ye,
      Rt,
      !1
    )), la(e, l), ((Ae & 2) === 0 || e !== we) && (e === we && ((Ae & 2) === 0 && (nn |= l), ke === 4 && Ml(
      e,
      ye,
      Rt,
      !1
    )), Jt(e));
  }
  function zd(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(o(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ta(e, t), a = n ? Jy(e, t) : Dr(e, t, !0), i = n;
    do {
      if (a === 0) {
        Ln && !n && Ml(e, t, 0, !1);
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
              a = Ba;
              var v = m.current.memoizedState.isDehydrated;
              if (v && (Qn(m, f).flags |= 256), f = Dr(
                m,
                f,
                !1
              ), f !== 2) {
                if (Rr && !v) {
                  m.errorRecoveryDisabledLanes |= i, nn |= i, a = 4;
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
          Qn(e, 0), Ml(e, t, 0, !0);
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
                Rt,
                !Cl
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
          if ((t & 62914560) === t && (a = Iu + 300 - yt(), 10 < a)) {
            if (Ml(
              n,
              t,
              Rt,
              !Cl
            ), ou(n, 0, !0) !== 0) break e;
            ol = t, n.timeoutHandle = ih(
              Dd.bind(
                null,
                n,
                l,
                ft,
                Pu,
                xr,
                t,
                Rt,
                nn,
                qn,
                Cl,
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
            Pu,
            xr,
            t,
            Rt,
            nn,
            qn,
            Cl,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Jt(e);
  }
  function Dd(e, t, l, n, a, i, f, m, v, C, B, _, w, N) {
    if (e.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Kt
      }, Ed(
        t,
        i,
        _
      );
      var X = (i & 62914560) === i ? Iu - yt() : (i & 4194048) === i ? Od - yt() : 0;
      if (X = Cg(
        _,
        X
      ), X !== null) {
        ol = i, e.cancelPendingCommit = X(
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
            _,
            null,
            w,
            N
          )
        ), Ml(e, i, f, !C);
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
  function Ml(e, t, l, n) {
    t &= ~Tr, t &= ~nn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && qo(e, l, t);
  }
  function ei() {
    return (Ae & 6) === 0 ? (Ha(0), !1) : !0;
  }
  function zr() {
    if (he !== null) {
      if (Ee === 0)
        var e = he.return;
      else
        e = he, $t = Kl = null, Jc(e), Mn = null, va = 0, e = he;
      for (; e !== null; )
        cd(e.alternate, e), e = e.return;
      he = null;
    }
  }
  function Qn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, og(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ol = 0, zr(), we = e, he = l = Wt(e.current, null), ye = t, Ee = 0, Et = null, Cl = !1, Ln = ta(e, t), Rr = !1, qn = Rt = Tr = nn = wl = ke = 0, ft = Ba = null, xr = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return rl = t, Au(), l;
  }
  function Md(e, t) {
    ie = null, q.H = Oa, t === Dn || t === zu ? (t = Xs(), Ee = 3) : t === Uc ? (t = Xs(), Ee = 4) : Ee = t === cr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Et = t, he === null && (ke = 1, Yu(
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
    return q.H = Oa, e === null ? Oa : e;
  }
  function Bd() {
    var e = q.A;
    return q.A = Qy, e;
  }
  function ti() {
    ke = 4, Cl || (ye & 4194048) !== ye && bt.current !== null || (Ln = !0), (wl & 134217727) === 0 && (nn & 134217727) === 0 || we === null || Ml(
      we,
      ye,
      Rt,
      !1
    );
  }
  function Dr(e, t, l) {
    var n = Ae;
    Ae |= 2;
    var a = Ud(), i = Bd();
    (we !== e || ye !== t) && (Pu = null, Qn(e, t)), t = !1;
    var f = ke;
    e: do
      try {
        if (Ee !== 0 && he !== null) {
          var m = he, v = Et;
          switch (Ee) {
            case 8:
              zr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var C = Ee;
              if (Ee = 0, Et = null, Gn(e, m, v, C), l && Ln) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Ee, Ee = 0, Et = null, Gn(e, m, v, C);
          }
        }
        Vy(), f = ke;
        break;
      } catch (B) {
        Md(e, B);
      }
    while (!0);
    return t && e.shellSuspendCounter++, $t = Kl = null, Ae = n, q.H = a, q.A = i, he === null && (we = null, ye = 0, Au()), f;
  }
  function Vy() {
    for (; he !== null; ) jd(he);
  }
  function Jy(e, t) {
    var l = Ae;
    Ae |= 2;
    var n = Ud(), a = Bd();
    we !== e || ye !== t ? (Pu = null, $u = yt() + 500, Qn(e, t)) : Ln = ta(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && he !== null) {
          t = he;
          var i = Et;
          t: switch (Ee) {
            case 1:
              Ee = 0, Et = null, Gn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Vs(i)) {
                Ee = 0, Et = null, Hd(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || we !== e || (Ee = 7), Jt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Vs(i) ? (Ee = 0, Et = null, Hd(t)) : (Ee = 0, Et = null, Gn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (he.tag) {
                case 26:
                  f = he.memoizedState;
                case 5:
                case 27:
                  var m = he;
                  if (f ? Ah(f) : m.stateNode.complete) {
                    Ee = 0, Et = null;
                    var v = m.sibling;
                    if (v !== null) he = v;
                    else {
                      var C = m.return;
                      C !== null ? (he = C, li(C)) : he = null;
                    }
                    break t;
                  }
              }
              Ee = 0, Et = null, Gn(e, t, i, 5);
              break;
            case 6:
              Ee = 0, Et = null, Gn(e, t, i, 6);
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
    return $t = Kl = null, q.H = n, q.A = a, Ae = l, he !== null ? 0 : (we = null, ye = 0, Au(), ke);
  }
  function Xy() {
    for (; he !== null && !y0(); )
      jd(he);
  }
  function jd(e) {
    var t = ud(e.alternate, e, rl);
    e.memoizedProps = e.pendingProps, t === null ? li(e) : he = t;
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
        cd(l, t), t = he = Us(t, rl), t = ud(l, t, rl);
    }
    e.memoizedProps = e.pendingProps, t === null ? li(e) : he = t;
  }
  function Gn(e, t, l, n) {
    $t = Kl = null, Jc(t), Mn = null, va = 0;
    var a = t.return;
    try {
      if (By(
        e,
        a,
        t,
        l,
        ye
      )) {
        ke = 1, Yu(
          e,
          wt(l, e.current)
        ), he = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw he = a, i;
      ke = 1, Yu(
        e,
        wt(l, e.current)
      ), he = null;
      return;
    }
    t.flags & 32768 ? (pe || n === 1 ? e = !0 : Ln || (ye & 536870912) !== 0 ? e = !1 : (Cl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = bt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), _d(t, e)) : li(t);
  }
  function li(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _d(
          t,
          Cl
        );
        return;
      }
      e = t.return;
      var l = _y(
        t.alternate,
        t,
        rl
      );
      if (l !== null) {
        he = l;
        return;
      }
      if (t = t.sibling, t !== null) {
        he = t;
        return;
      }
      he = t = e;
    } while (t !== null);
    ke === 0 && (ke = 5);
  }
  function _d(e, t) {
    do {
      var l = Ly(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, he = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        he = e;
        return;
      }
      he = e = l;
    } while (e !== null);
    ke = 6, he = null;
  }
  function Ld(e, t, l, n, a, i, f, m, v) {
    e.cancelPendingCommit = null;
    do
      ni();
    while (Ke !== 0);
    if ((Ae & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= vc, x0(
        e,
        l,
        i,
        f,
        m,
        v
      ), e === we && (he = we = null, ye = 0), kn = t, Dl = e, ol = l, Or = i, Cr = a, Cd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Wy(uu, function() {
        return Yd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null, a = Q.p, Q.p = 2, f = Ae, Ae |= 4;
        try {
          qy(e, t, l);
        } finally {
          Ae = f, Q.p = a, q.T = n;
        }
      }
      Ke = 1, qd(), kd(), Qd();
    }
  }
  function qd() {
    if (Ke === 1) {
      Ke = 0;
      var e = Dl, t = kn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = Q.p;
        Q.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Sd(t, e);
          var i = Gr, f = Ts(e.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (f !== m && m && m.ownerDocument && Rs(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && hc(m)) {
              var C = v.start, B = v.end;
              if (B === void 0 && (B = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  B,
                  m.value.length
                );
              else {
                var _ = m.ownerDocument || document, w = _ && _.defaultView || window;
                if (w.getSelection) {
                  var N = w.getSelection(), X = m.textContent.length, ee = Math.min(v.start, X), Ce = v.end === void 0 ? ee : Math.min(v.end, X);
                  !N.extend && ee > Ce && (f = Ce, Ce = ee, ee = f);
                  var R = Es(
                    m,
                    ee
                  ), A = Es(
                    m,
                    Ce
                  );
                  if (R && A && (N.rangeCount !== 1 || N.anchorNode !== R.node || N.anchorOffset !== R.offset || N.focusNode !== A.node || N.focusOffset !== A.offset)) {
                    var x = _.createRange();
                    x.setStart(R.node, R.offset), N.removeAllRanges(), ee > Ce ? (N.addRange(x), N.extend(A.node, A.offset)) : (x.setEnd(A.node, A.offset), N.addRange(x));
                  }
                }
              }
            }
            for (_ = [], N = m; N = N.parentNode; )
              N.nodeType === 1 && _.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < _.length; m++) {
              var j = _[m];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          yi = !!Qr, Gr = Qr = null;
        } finally {
          Ae = a, Q.p = n, q.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function kd() {
    if (Ke === 2) {
      Ke = 0;
      var e = Dl, t = kn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = q.T, q.T = null;
        var n = Q.p;
        Q.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          md(e, t.alternate, t);
        } finally {
          Ae = a, Q.p = n, q.T = l;
        }
      }
      Ke = 3;
    }
  }
  function Qd() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, g0();
      var e = Dl, t = kn, l = ol, n = Cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, kn = Dl = null, Gd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (zl = null), Ki(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            ea,
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
      (ol & 3) !== 0 && ni(), Jt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === wr ? ja++ : (ja = 0, wr = e) : ja = 0, Ha(0);
    }
  }
  function Gd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ga(t)));
  }
  function ni() {
    return qd(), kd(), Qd(), Yd();
  }
  function Yd() {
    if (Ke !== 5) return !1;
    var e = Dl, t = Or;
    Or = 0;
    var l = Ki(ol), n = q.T, a = Q.p;
    try {
      Q.p = 32 > l ? 32 : l, q.T = null, l = Cr, Cr = null;
      var i = Dl, f = ol;
      if (Ke = 0, kn = Dl = null, ol = 0, (Ae & 6) !== 0) throw Error(o(331));
      var m = Ae;
      if (Ae |= 4, Td(i.current), Ad(
        i,
        i.current,
        f,
        l
      ), Ae = m, Ha(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(ea, i);
        } catch {
        }
      return !0;
    } finally {
      Q.p = a, q.T = n, Gd(e, t);
    }
  }
  function Vd(e, t, l) {
    t = wt(l, t), t = ir(e.stateNode, t, 2), e = Rl(e, t, 2), e !== null && (la(e, 2), Jt(e));
  }
  function Re(e, t, l) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (zl === null || !zl.has(n))) {
            e = wt(l, e), l = Jf(2), n = Rl(t, l, 2), n !== null && (Xf(
              l,
              n,
              t,
              e
            ), la(n, 2), Jt(n));
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
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, we === e && (ye & l) === l && (ke === 4 || ke === 3 && (ye & 62914560) === ye && 300 > yt() - Iu ? (Ae & 2) === 0 && Qn(e, 0) : Tr |= l, qn === ye && (qn = 0)), Jt(e);
  }
  function Jd(e, t) {
    t === 0 && (t = Lo()), e = Jl(e, t), e !== null && (la(e, t), Jt(e));
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
  var ai = null, Yn = null, Nr = !1, ui = !1, Ur = !1, Nl = 0;
  function Jt(e) {
    e !== Yn && e.next === null && (Yn === null ? ai = Yn = e : Yn = Yn.next = e), ui = !0, Nr || (Nr = !0, $y());
  }
  function Ha(e, t) {
    if (!Ur && ui) {
      Ur = !0;
      do
        for (var l = !1, n = ai; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Fd(n, i));
          } else
            i = ye, i = ou(
              n,
              n === we ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || ta(n, i) || (l = !0, Fd(n, i));
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
    ui = Nr = !1;
    var e = 0;
    Nl !== 0 && rg() && (e = Nl);
    for (var t = yt(), l = null, n = ai; n !== null; ) {
      var a = n.next, i = Zd(n, t);
      i === 0 ? (n.next = null, l === null ? ai = a : l.next = a, a === null && (Yn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ui = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || Ha(e), Nl !== 0 && (Nl = 0);
  }
  function Zd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, v = a[f];
      v === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = T0(m, t)) : v <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = we, l = ye, l = ou(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ji(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || ta(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ji(n), Ki(l)) {
        case 2:
        case 8:
          l = Ho;
          break;
        case 32:
          l = uu;
          break;
        case 268435456:
          l = _o;
          break;
        default:
          l = uu;
      }
      return n = Kd.bind(null, e), l = Vi(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ji(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Kd(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ni() && e.callbackNode !== l)
      return null;
    var n = ye;
    return n = ou(
      e,
      e === we ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (zd(e, n, t), Zd(e, yt()), e.callbackNode != null && e.callbackNode === l ? Kd.bind(null, e) : null);
  }
  function Fd(e, t) {
    if (ni()) return null;
    zd(e, t, !0);
  }
  function $y() {
    sg(function() {
      (Ae & 6) !== 0 ? Vi(
        jo,
        Iy
      ) : Xd();
    });
  }
  function Br() {
    if (Nl === 0) {
      var e = wn;
      e === 0 && (e = iu, iu <<= 1, (iu & 261888) === 0 && (iu = 256)), Nl = e;
    }
    return Nl;
  }
  function Wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : hu("" + e);
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
      var m = new pu(
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
                if (Nl !== 0) {
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
    _t(
      eg,
      "on" + tg
    );
  }
  _t(Cs, "onAnimationEnd"), _t(ws, "onAnimationIteration"), _t(zs, "onAnimationStart"), _t("dblclick", "onDoubleClick"), _t("focusin", "onFocus"), _t("focusout", "onBlur"), _t(py, "onTransitionRun"), _t(vy, "onTransitionStart"), _t(Sy, "onTransitionCancel"), _t(Ds, "onTransitionEnd"), mn("onMouseEnter", ["mouseout", "mouseover"]), mn("onMouseLeave", ["mouseout", "mouseover"]), mn("onPointerEnter", ["pointerout", "pointerover"]), mn("onPointerLeave", ["pointerout", "pointerover"]), Ql(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ql(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ql("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ql(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ql(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ql(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var _a = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), lg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_a)
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
            var m = n[f], v = m.instance, C = m.currentTarget;
            if (m = m.listener, v !== i && a.isPropagationStopped())
              break e;
            i = m, a.currentTarget = C;
            try {
              i(a);
            } catch (B) {
              bu(B);
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
            } catch (B) {
              bu(B);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function me(e, t) {
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
  var ii = "_reactListening" + Math.random().toString(36).slice(2);
  function Lr(e) {
    if (!e[ii]) {
      e[ii] = !0, Jo.forEach(function(l) {
        l !== "selectionchange" && (lg.has(l) || _r(l, !1, e), _r(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ii] || (t[ii] = !0, _r("selectionchange", !1, t));
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
      var C = i, B = lc(l), _ = [];
      e: {
        var w = Ms.get(e);
        if (w !== void 0) {
          var N = pu, X = e;
          switch (e) {
            case "keypress":
              if (yu(l) === 0) break e;
            case "keydown":
            case "keyup":
              N = F0;
              break;
            case "focusin":
              X = "focus", N = rc;
              break;
            case "focusout":
              X = "blur", N = rc;
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
          var ee = (t & 4) !== 0, Ce = !ee && (e === "scroll" || e === "scrollend"), R = ee ? w !== null ? w + "Capture" : null : w;
          ee = [];
          for (var A = C, x; A !== null; ) {
            var j = A;
            if (x = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || x === null || R === null || (j = ua(A, R), j != null && ee.push(
              La(A, j, x)
            )), Ce) break;
            A = A.return;
          }
          0 < ee.length && (w = new N(
            w,
            X,
            null,
            l,
            B
          ), _.push({ event: w, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (w = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", w && l !== tc && (X = l.relatedTarget || l.fromElement) && (fn(X) || X[sn]))
            break e;
          if ((N || w) && (w = B.window === B ? B : (w = B.ownerDocument) ? w.defaultView || w.parentWindow : window, N ? (X = l.relatedTarget || l.toElement, N = C, X = X ? fn(X) : null, X !== null && (Ce = d(X), ee = X.tag, X !== Ce || ee !== 5 && ee !== 27 && ee !== 6) && (X = null)) : (N = null, X = C), N !== X)) {
            if (ee = is, j = "onMouseLeave", R = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ee = rs, j = "onPointerLeave", R = "onPointerEnter", A = "pointer"), Ce = N == null ? w : aa(N), x = X == null ? w : aa(X), w = new ee(
              j,
              A + "leave",
              N,
              l,
              B
            ), w.target = Ce, w.relatedTarget = x, j = null, fn(B) === C && (ee = new ee(
              R,
              A + "enter",
              X,
              l,
              B
            ), ee.target = x, ee.relatedTarget = Ce, j = ee), Ce = j, N && X)
              t: {
                for (ee = ng, R = N, A = X, x = 0, j = R; j; j = ee(j))
                  x++;
                j = 0;
                for (var P = A; P; P = ee(P))
                  j++;
                for (; 0 < x - j; )
                  R = ee(R), x--;
                for (; 0 < j - x; )
                  A = ee(A), j--;
                for (; x--; ) {
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
              _,
              w,
              N,
              ee,
              !1
            ), X !== null && Ce !== null && eh(
              _,
              Ce,
              X,
              ee,
              !0
            );
          }
        }
        e: {
          if (w = C ? aa(C) : window, N = w.nodeName && w.nodeName.toLowerCase(), N === "select" || N === "input" && w.type === "file")
            var ve = gs;
          else if (ms(w))
            if (ps)
              ve = my;
            else {
              ve = dy;
              var F = fy;
            }
          else
            N = w.nodeName, !N || N.toLowerCase() !== "input" || w.type !== "checkbox" && w.type !== "radio" ? C && ec(C.elementType) && (ve = gs) : ve = hy;
          if (ve && (ve = ve(e, C))) {
            ys(
              _,
              ve,
              l,
              B
            );
            break e;
          }
          F && F(e, w, C), e === "focusout" && C && w.type === "number" && C.memoizedProps.value != null && Pi(w, "number", w.value);
        }
        switch (F = C ? aa(C) : window, e) {
          case "focusin":
            (ms(F) || F.contentEditable === "true") && (bn = F, mc = C, ha = null);
            break;
          case "focusout":
            ha = mc = bn = null;
            break;
          case "mousedown":
            yc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yc = !1, xs(_, l, B);
            break;
          case "selectionchange":
            if (gy) break;
          case "keydown":
          case "keyup":
            xs(_, l, B);
        }
        var oe;
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
        ge && (os && l.locale !== "ko" && (Sn || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Sn && (oe = as()) : (gl = B, uc = "value" in gl ? gl.value : gl.textContent, Sn = !0)), F = ci(C, ge), 0 < F.length && (ge = new cs(
          ge,
          e,
          null,
          l,
          B
        ), _.push({ event: ge, listeners: F }), oe ? ge.data = oe : (oe = hs(l), oe !== null && (ge.data = oe)))), (oe = iy ? cy(e, l) : ry(e, l)) && (ge = ci(C, "onBeforeInput"), 0 < ge.length && (F = new cs(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          B
        ), _.push({
          event: F,
          listeners: ge
        }), F.data = oe)), Py(
          _,
          e,
          C,
          l,
          B
        );
      }
      $d(_, t);
    });
  }
  function La(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ci(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ua(e, l), a != null && n.unshift(
        La(e, a, i)
      ), a = ua(e, t), a != null && n.push(
        La(e, a, i)
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
      var m = l, v = m.alternate, C = m.stateNode;
      if (m = m.tag, v !== null && v === n) break;
      m !== 5 && m !== 26 && m !== 27 || C === null || (v = C, a ? (C = ua(l, i), C != null && f.unshift(
        La(l, C, v)
      )) : a || (C = ua(l, i), C != null && f.push(
        La(l, C, v)
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
  function Oe(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || gn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && gn(e, "" + n);
        break;
      case "className":
        fu(e, "class", n);
        break;
      case "tabIndex":
        fu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fu(e, l, n);
        break;
      case "style":
        ts(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          fu(e, "data", n);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && Oe(e, t, "name", a.name, a, null), Oe(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Oe(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Oe(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Oe(e, t, "encType", a.encType, a, null), Oe(e, t, "method", a.method, a, null), Oe(e, t, "target", a.target, a, null)));
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
        me("beforetoggle", e), me("toggle", e), su(e, "popover", n);
        break;
      case "xlinkActuate":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Zt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Zt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Zt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Zt(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = U0.get(l) || l, su(e, l, n));
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
        n != null && me("scroll", e);
        break;
      case "onScrollEnd":
        n != null && me("scrollend", e);
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
        if (!Xo.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[it] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : su(e, l, n);
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
                  Oe(e, t, i, f, l, null);
              }
          }
        a && Oe(e, t, "srcSet", l.srcSet, l, null), n && Oe(e, t, "src", l.src, l, null);
        return;
      case "input":
        me("invalid", e);
        var m = i = f = a = null, v = null, C = null;
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
                  C = B;
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
                  Oe(e, t, n, B, l, null);
              }
          }
        Io(
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
        me("invalid", e), n = f = i = null;
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
                Oe(e, t, a, m, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? yn(e, !!n, t, !1) : l != null && yn(e, !!n, l, !0);
        return;
      case "textarea":
        me("invalid", e), i = a = n = null;
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
                Oe(e, t, f, m, l, null);
            }
        Po(e, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Oe(e, t, v, n, l, null));
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
        for (n = 0; n < _a.length; n++)
          me(_a[n], e);
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
                Oe(e, t, C, n, l, null);
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
      l.hasOwnProperty(m) && (n = l[m], n != null && Oe(e, t, m, n, l, null));
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
        var a = null, i = null, f = null, m = null, v = null, C = null, B = null;
        for (N in l) {
          var _ = l[N];
          if (l.hasOwnProperty(N) && _ != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = _;
              default:
                n.hasOwnProperty(N) || Oe(e, t, N, null, n, _);
            }
        }
        for (var w in n) {
          var N = n[w];
          if (_ = l[w], n.hasOwnProperty(w) && (N != null || _ != null))
            switch (w) {
              case "type":
                i = N;
                break;
              case "name":
                a = N;
                break;
              case "checked":
                C = N;
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
                N !== _ && Oe(
                  e,
                  t,
                  w,
                  N,
                  n,
                  _
                );
            }
        }
        $i(
          e,
          f,
          m,
          v,
          C,
          B,
          i,
          a
        );
        return;
      case "select":
        N = f = m = w = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                N = v;
              default:
                n.hasOwnProperty(i) || Oe(
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
                w = i;
                break;
              case "defaultValue":
                m = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== v && Oe(
                  e,
                  t,
                  a,
                  i,
                  n,
                  v
                );
            }
        t = m, l = f, n = N, w != null ? yn(e, !!l, w, !1) : !!n != !!l && (t != null ? yn(e, !!l, t, !0) : yn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = w = null;
        for (m in l)
          if (a = l[m], l.hasOwnProperty(m) && a != null && !n.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Oe(e, t, m, null, n, a);
            }
        for (f in n)
          if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                w = a;
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
                a !== i && Oe(e, t, f, a, n, i);
            }
        $o(e, w, N);
        return;
      case "option":
        for (var X in l)
          w = l[X], l.hasOwnProperty(X) && w != null && !n.hasOwnProperty(X) && (X === "selected" ? e.selected = !1 : Oe(
            e,
            t,
            X,
            null,
            n,
            w
          ));
        for (v in n)
          w = n[v], N = l[v], n.hasOwnProperty(v) && w !== N && (w != null || N != null) && (v === "selected" ? e.selected = w && typeof w != "function" && typeof w != "symbol" : Oe(
            e,
            t,
            v,
            w,
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
          w = l[ee], l.hasOwnProperty(ee) && w != null && !n.hasOwnProperty(ee) && Oe(e, t, ee, null, n, w);
        for (C in n)
          if (w = n[C], N = l[C], n.hasOwnProperty(C) && w !== N && (w != null || N != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null)
                  throw Error(o(137, t));
                break;
              default:
                Oe(
                  e,
                  t,
                  C,
                  w,
                  n,
                  N
                );
            }
        return;
      default:
        if (ec(t)) {
          for (var Ce in l)
            w = l[Ce], l.hasOwnProperty(Ce) && w !== void 0 && !n.hasOwnProperty(Ce) && kr(
              e,
              t,
              Ce,
              void 0,
              n,
              w
            );
          for (B in n)
            w = n[B], N = l[B], !n.hasOwnProperty(B) || w === N || w === void 0 && N === void 0 || kr(
              e,
              t,
              B,
              w,
              n,
              N
            );
          return;
        }
    }
    for (var R in l)
      w = l[R], l.hasOwnProperty(R) && w != null && !n.hasOwnProperty(R) && Oe(e, t, R, null, n, w);
    for (_ in n)
      w = n[_], N = l[_], !n.hasOwnProperty(_) || w === N || w == null && N == null || Oe(e, t, _, w, n, N);
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
            var v = l[n], C = v.startTime;
            if (C > m) break;
            var B = v.transferSize, _ = v.initiatorType;
            B && nh(_) && (v = v.responseEnd, f += B * (v < m ? 1 : (m - C) / (v - C)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Qr = null, Gr = null;
  function ri(e) {
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
  function Ul(e) {
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
          qa(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, qa(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, m = i.nodeName;
            i[na] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && qa(e.ownerDocument.body);
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
        if (!e[na])
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
    switch (t = ri(l), e) {
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
  function qa(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Wi(e);
  }
  var Bt = /* @__PURE__ */ new Map(), mh = /* @__PURE__ */ new Set();
  function oi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var sl = Q.d;
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
    var e = sl.f(), t = ei();
    return e || t;
  }
  function gg(e) {
    var t = dn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Mf(t) : sl.r(e);
  }
  var Vn = typeof document > "u" ? null : document;
  function yh(e, t, l) {
    var n = Vn;
    if (n && typeof t == "string" && t) {
      var a = Ot(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), mh.has(a) || (mh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), Fe(t), n.head.appendChild(t)));
    }
  }
  function pg(e) {
    sl.D(e), yh("dns-prefetch", e, null);
  }
  function vg(e, t) {
    sl.C(e, t), yh("preconnect", e, t);
  }
  function Sg(e, t, l) {
    sl.L(e, t, l);
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
      Bt.has(i) || (e = D(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Bt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(ka(i)) || t === "script" && n.querySelector(Qa(i)) || (t = n.createElement("link"), lt(t, "link", e), Fe(t), n.head.appendChild(t)));
    }
  }
  function bg(e, t) {
    sl.m(e, t);
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
      if (!Bt.has(i) && (e = D({ rel: "modulepreload", href: e }, t), Bt.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Qa(i)))
              return;
        }
        n = l.createElement("link"), lt(n, "link", e), Fe(n), l.head.appendChild(n);
      }
    }
  }
  function Ag(e, t, l) {
    sl.S(e, t, l);
    var n = Vn;
    if (n && e) {
      var a = hn(n).hoistableStyles, i = Jn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = n.querySelector(
          ka(i)
        ))
          m.loading = 5;
        else {
          e = D(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Bt.get(i)) && Fr(e, l);
          var v = f = n.createElement("link");
          Fe(v), lt(v, "link", e), v._p = new Promise(function(C, B) {
            v.onload = C, v.onerror = B;
          }), v.addEventListener("load", function() {
            m.loading |= 1;
          }), v.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, si(f, t, n);
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
    sl.X(e, t);
    var l = Vn;
    if (l && e) {
      var n = hn(l).hoistableScripts, a = Xn(e), i = n.get(a);
      i || (i = l.querySelector(Qa(a)), i || (e = D({ src: e, async: !0 }, t), (t = Bt.get(a)) && Wr(e, t), i = l.createElement("script"), Fe(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Rg(e, t) {
    sl.M(e, t);
    var l = Vn;
    if (l && e) {
      var n = hn(l).hoistableScripts, a = Xn(e), i = n.get(a);
      i || (i = l.querySelector(Qa(a)), i || (e = D({ src: e, async: !0, type: "module" }, t), (t = Bt.get(a)) && Wr(e, t), i = l.createElement("script"), Fe(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function gh(e, t, l, n) {
    var a = (a = I.current) ? oi(a) : null;
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
            ka(e)
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
  function ka(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ph(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Tg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), lt(t, "link", l), Fe(t), e.head.appendChild(t));
  }
  function Xn(e) {
    return '[src="' + Ot(e) + '"]';
  }
  function Qa(e) {
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
            return t.instance = n, Fe(n), n;
          var a = D({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), Fe(n), lt(n, "style", a), si(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Jn(l.href);
          var i = e.querySelector(
            ka(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Fe(i), i;
          n = ph(l), (a = Bt.get(a)) && Fr(n, a), i = (e.ownerDocument || e).createElement("link"), Fe(i);
          var f = i;
          return f._p = new Promise(function(m, v) {
            f.onload = m, f.onerror = v;
          }), lt(i, "link", n), t.state.loading |= 4, si(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Xn(l.src), (a = e.querySelector(
            Qa(i)
          )) ? (t.instance = a, Fe(a), a) : (n = l, (a = Bt.get(i)) && (n = D({}, l), Wr(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), Fe(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, si(n, l.precedence, e));
    return t.instance;
  }
  function si(e, t, l) {
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
  var fi = null;
  function Sh(e, t, l) {
    if (fi === null) {
      var n = /* @__PURE__ */ new Map(), a = fi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = fi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[na] || i[$e] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
          ka(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = di.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, Fe(i);
          return;
        }
        i = t.ownerDocument || t, n = ph(n), (a = Bt.get(a)) && Fr(n, a), i = i.createElement("link"), Fe(i);
        var f = i;
        f._p = new Promise(function(m, v) {
          f.onload = m, f.onerror = v;
        }), lt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = di.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Ir = 0;
  function Cg(e, t) {
    return e.stylesheets && e.count === 0 && mi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && mi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ir === 0 && (Ir = 62500 * cg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && mi(e, e.stylesheets), e.unsuspend)) {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, hi = /* @__PURE__ */ new Map(), t.forEach(wg, e), hi = null, di.call(e));
  }
  function wg(e, t) {
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
      a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = di.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Ga = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: $,
    _currentValue2: $,
    _threadCount: 0
  };
  function zg(e, t, l, n, a, i, f, m, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xi(0), this.hiddenUpdates = Xi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Eh(e, t, l, n, a, i, f, m, v, C, B, _) {
    return e = new zg(
      e,
      t,
      l,
      f,
      v,
      C,
      B,
      _,
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
    a = Rh(a), n.context === null ? n.context = a : n.pendingContext = a, n = El(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Rl(e, n, t), l !== null && (dt(l, e, t), ba(l, e, t));
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
      var t = Jl(e, 67108864);
      t !== null && dt(t, e, 67108864), $r(e, 67108864);
    }
  }
  function Ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Zi(t);
      var l = Jl(e, t);
      l !== null && dt(l, e, t), $r(e, t);
    }
  }
  var yi = !0;
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
    if (yi) {
      var a = eo(n);
      if (a === null)
        qr(
          e,
          t,
          n,
          gi,
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
                  var f = kl(i.pendingLanes);
                  if (f !== 0) {
                    var m = i;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - pt(f);
                      m.entanglements[1] |= v, f &= ~v;
                    }
                    Jt(i), (Ae & 6) === 0 && ($u = yt() + 500, Ha(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Jl(i, 2), m !== null && dt(m, i, 2), ei(), $r(i, 2);
            }
          if (i = eo(n), i === null && qr(
            e,
            t,
            n,
            gi,
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
  var gi = null;
  function to(e) {
    if (gi = null, e = fn(e), e !== null) {
      var t = d(e);
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
    return gi = e, null;
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
          case uu:
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
  var lo = !1, Bl = null, jl = null, Hl = null, Ya = /* @__PURE__ */ new Map(), Va = /* @__PURE__ */ new Map(), _l = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bl = null;
        break;
      case "dragenter":
      case "dragleave":
        jl = null;
        break;
      case "mouseover":
      case "mouseout":
        Hl = null;
        break;
      case "pointerover":
      case "pointerout":
        Ya.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Va.delete(t.pointerId);
    }
  }
  function Ja(e, t, l, n, a, i) {
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
        return Bl = Ja(
          Bl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return jl = Ja(
          jl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Hl = Ja(
          Hl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Ya.set(
          i,
          Ja(
            Ya.get(i) || null,
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
          Ja(
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
  function Dh(e) {
    var t = fn(e.target);
    if (t !== null) {
      var l = d(t);
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
  function pi(e) {
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
    pi(e) && l.delete(t);
  }
  function Bg() {
    lo = !1, Bl !== null && pi(Bl) && (Bl = null), jl !== null && pi(jl) && (jl = null), Hl !== null && pi(Hl) && (Hl = null), Ya.forEach(Mh), Va.forEach(Mh);
  }
  function vi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, lo || (lo = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Bg
    )));
  }
  var Si = null;
  function Nh(e) {
    Si !== e && (Si = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      function() {
        Si === e && (Si = null);
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
      return vi(v, e);
    }
    Bl !== null && vi(Bl, e), jl !== null && vi(jl, e), Hl !== null && vi(Hl, e), Ya.forEach(t), Va.forEach(t);
    for (var l = 0; l < _l.length; l++) {
      var n = _l[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < _l.length && (l = _l[0], l.blockedOn === null); )
      Dh(l), l.blockedOn === null && _l.shift();
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
  bi.prototype.render = no.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, n = Tt();
    Th(l, n, e, t, null, null);
  }, bi.prototype.unmount = no.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Th(e.current, 2, null, e, null, null), ei(), t[sn] = null;
    }
  };
  function bi(e) {
    this._internalRoot = e;
  }
  bi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Go();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < _l.length && t !== 0 && t < _l[l].priority; l++) ;
      _l.splice(l, 0, e), l === 0 && Dh(e);
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
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber)
      try {
        ea = Ai.inject(
          jg
        ), gt = Ai;
      } catch {
      }
  }
  return Ka.createRoot = function(e, t) {
    if (!h(e)) throw Error(o(299));
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
  }, Ka.hydrateRoot = function(e, t, l) {
    if (!h(e)) throw Error(o(299));
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
    ), t.context = Rh(null), l = t.current, n = Tt(), n = Zi(n), a = El(n), a.callback = null, Rl(l, a, n), l = n, t.current.lanes = l, la(t, l), Jt(t), e[sn] = t.current, Lr(e), new bi(t);
  }, Ka.version = "19.2.3", Ka;
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
const Hm = ({ label: u, onClick: c, disabled: r, type: s = "button", className: o, children: h, mainButtonStyle: d }) => /* @__PURE__ */ z.jsx(
  "button",
  {
    className: o || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: c,
    disabled: r,
    type: s,
    style: d,
    children: h || u
  }
), Kn = O.forwardRef(
  (u, c) => {
    const {
      label: r,
      startIcon: s,
      endIcon: o,
      error: h,
      helperText: d,
      optional: g,
      className: p,
      options: y,
      ...S
    } = u, E = !!h || !!d, D = S.type === "select" || !!y;
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
        D ? /* @__PURE__ */ z.jsx(
          "select",
          {
            ref: c,
            className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
            ...S,
            children: y && y.map((Y) => /* @__PURE__ */ z.jsx("option", { value: Y.value, children: Y.label }, Y.value))
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
      h && typeof h == "string" && /* @__PURE__ */ z.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h }),
      !h && d && /* @__PURE__ */ z.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d })
    ] });
  }
), _m = ({
  type: u,
  message: c,
  actionText: r,
  onActionClick: s,
  onClose: o,
  className: h = "",
  children: d
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
  return /* @__PURE__ */ z.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${h}`, children: [
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
      d
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
class Wa extends Error {
}
Wa.prototype.name = "InvalidTokenError";
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
    throw new Wa("Invalid token specified: must be a string");
  c || (c = {});
  const r = c.header === !0 ? 0 : 1, s = u.split(".")[r];
  if (typeof s != "string")
    throw new Wa(`Invalid token specified: missing part #${r + 1}`);
  let o;
  try {
    o = x1(s);
  } catch (h) {
    throw new Wa(`Invalid token specified: invalid base64 for part #${r + 1} (${h.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (h) {
    throw new Wa(`Invalid token specified: invalid json for part #${r + 1} (${h.message})`);
  }
}
function O1() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const c = u.split(".");
  return c.length >= 2 ? "." + c.slice(-2).join(".") : "";
}
function Di(u, c, r, s = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + r);
  const h = O1(), d = h ? `; domain=${h}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = s ? encodeURIComponent(c) : c;
  document.cookie = `${u}=${p}; expires=${o.toUTCString()}; path=/${d}${g}; SameSite=Lax`;
}
function km(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
var Ih = {};
const { toString: C1 } = Object.prototype, { getPrototypeOf: zo } = Object, { iterator: Bi, toStringTag: Qm } = Symbol, ji = /* @__PURE__ */ ((u) => (c) => {
  const r = C1.call(c);
  return u[r] || (u[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (u) => (u = u.toLowerCase(), (c) => ji(c) === u), Hi = (u) => (c) => typeof c === u, { isArray: $n } = Array, Fn = Hi("undefined");
function tu(u) {
  return u !== null && !Fn(u) && u.constructor !== null && !Fn(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Gm = Qt("ArrayBuffer");
function w1(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && Gm(u.buffer), c;
}
const z1 = Hi("string"), ht = Hi("function"), Ym = Hi("number"), lu = (u) => u !== null && typeof u == "object", D1 = (u) => u === !0 || u === !1, Oi = (u) => {
  if (ji(u) !== "object")
    return !1;
  const c = zo(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Qm in u) && !(Bi in u);
}, M1 = (u) => {
  if (!lu(u) || tu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, N1 = Qt("Date"), U1 = Qt("File"), B1 = Qt("Blob"), j1 = Qt("FileList"), H1 = (u) => lu(u) && ht(u.pipe), _1 = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((c = ji(u)) === "formdata" || // detect form-data instance
  c === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, L1 = Qt("URLSearchParams"), [q1, k1, Q1, G1] = ["ReadableStream", "Request", "Response", "Headers"].map(Qt), Y1 = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function nu(u, c, { allOwnKeys: r = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let s, o;
  if (typeof u != "object" && (u = [u]), $n(u))
    for (s = 0, o = u.length; s < o; s++)
      c.call(null, u[s], s, u);
  else {
    if (tu(u))
      return;
    const h = r ? Object.getOwnPropertyNames(u) : Object.keys(u), d = h.length;
    let g;
    for (s = 0; s < d; s++)
      g = h[s], c.call(null, u[g], g, u);
  }
}
function Vm(u, c) {
  if (tu(u))
    return null;
  c = c.toLowerCase();
  const r = Object.keys(u);
  let s = r.length, o;
  for (; s-- > 0; )
    if (o = r[s], c === o.toLowerCase())
      return o;
  return null;
}
const an = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jm = (u) => !Fn(u) && u !== an;
function So() {
  const { caseless: u, skipUndefined: c } = Jm(this) && this || {}, r = {}, s = (o, h) => {
    const d = u && Vm(r, h) || h;
    Oi(r[d]) && Oi(o) ? r[d] = So(r[d], o) : Oi(o) ? r[d] = So({}, o) : $n(o) ? r[d] = o.slice() : (!c || !Fn(o)) && (r[d] = o);
  };
  for (let o = 0, h = arguments.length; o < h; o++)
    arguments[o] && nu(arguments[o], s);
  return r;
}
const V1 = (u, c, r, { allOwnKeys: s } = {}) => (nu(c, (o, h) => {
  r && ht(o) ? u[h] = km(o, r) : u[h] = o;
}, { allOwnKeys: s }), u), J1 = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), X1 = (u, c, r, s) => {
  u.prototype = Object.create(c.prototype, s), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), r && Object.assign(u.prototype, r);
}, Z1 = (u, c, r, s) => {
  let o, h, d;
  const g = {};
  if (c = c || {}, u == null) return c;
  do {
    for (o = Object.getOwnPropertyNames(u), h = o.length; h-- > 0; )
      d = o[h], (!s || s(d, u, c)) && !g[d] && (c[d] = u[d], g[d] = !0);
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
  const s = (u && u[Bi]).call(u);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const h = o.value;
    c.call(u, h[0], h[1]);
  }
}, $1 = (u, c) => {
  let r;
  const s = [];
  for (; (r = u.exec(c)) !== null; )
    s.push(r);
  return s;
}, P1 = Qt("HTMLFormElement"), ev = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, s, o) {
    return s.toUpperCase() + o;
  }
), $h = (({ hasOwnProperty: u }) => (c, r) => u.call(c, r))(Object.prototype), tv = Qt("RegExp"), Xm = (u, c) => {
  const r = Object.getOwnPropertyDescriptors(u), s = {};
  nu(r, (o, h) => {
    let d;
    (d = c(o, h, u)) !== !1 && (s[h] = d || o);
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
    o.forEach((h) => {
      r[h] = !0;
    });
  };
  return $n(u) ? s(u) : s(String(u).split(c)), r;
}, av = () => {
}, uv = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function iv(u) {
  return !!(u && ht(u.append) && u[Qm] === "FormData" && u[Bi]);
}
const cv = (u) => {
  const c = new Array(10), r = (s, o) => {
    if (lu(s)) {
      if (c.indexOf(s) >= 0)
        return;
      if (tu(s))
        return s;
      if (!("toJSON" in s)) {
        c[o] = s;
        const h = $n(s) ? [] : {};
        return nu(s, (d, g) => {
          const p = r(d, o + 1);
          !Fn(p) && (h[g] = p);
        }), c[o] = void 0, h;
      }
    }
    return s;
  };
  return r(u, 0);
}, rv = Qt("AsyncFunction"), ov = (u) => u && (lu(u) || ht(u)) && ht(u.then) && ht(u.catch), Zm = ((u, c) => u ? setImmediate : c ? ((r, s) => (an.addEventListener("message", ({ source: o, data: h }) => {
  o === an && h === r && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), an.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ht(an.postMessage)
), sv = typeof queueMicrotask < "u" ? queueMicrotask.bind(an) : typeof Ih < "u" && Ih.nextTick || Zm, fv = (u) => u != null && ht(u[Bi]), M = {
  isArray: $n,
  isArrayBuffer: Gm,
  isBuffer: tu,
  isFormData: _1,
  isArrayBufferView: w1,
  isString: z1,
  isNumber: Ym,
  isBoolean: D1,
  isObject: lu,
  isPlainObject: Oi,
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
  forEach: nu,
  merge: So,
  extend: V1,
  trim: Y1,
  stripBOM: J1,
  inherits: X1,
  toFlatObject: Z1,
  kindOf: ji,
  kindOfTest: Qt,
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
  global: an,
  isContextDefined: Jm,
  isSpecCompliantForm: iv,
  toJSONObject: cv,
  isAsyncFn: rv,
  isThenable: ov,
  setImmediate: Zm,
  asap: sv,
  isIterable: fv
};
function ce(u, c, r, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), r && (this.config = r), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
M.inherits(ce, Error, {
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
      config: M.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Km = ce.prototype, Fm = {};
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
Object.defineProperties(ce, Fm);
Object.defineProperty(Km, "isAxiosError", { value: !0 });
ce.from = (u, c, r, s, o, h) => {
  const d = Object.create(Km);
  M.toFlatObject(u, d, function(S) {
    return S !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = c == null && u ? u.code : c;
  return ce.call(d, g, p, r, s, o), u && d.cause == null && Object.defineProperty(d, "cause", { value: u, configurable: !0 }), d.name = u && u.name || "Error", h && Object.assign(d, h), d;
};
const dv = null;
function bo(u) {
  return M.isPlainObject(u) || M.isArray(u);
}
function Wm(u) {
  return M.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Ph(u, c, r) {
  return u ? u.concat(c).map(function(o, h) {
    return o = Wm(o), !r && h ? "[" + o + "]" : o;
  }).join(r ? "." : "") : c;
}
function hv(u) {
  return M.isArray(u) && !u.some(bo);
}
const mv = M.toFlatObject(M, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function _i(u, c, r) {
  if (!M.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, U) {
    return !M.isUndefined(U[L]);
  });
  const s = r.metaTokens, o = r.visitor || S, h = r.dots, d = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(c);
  if (!M.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(T) {
    if (T === null) return "";
    if (M.isDate(T))
      return T.toISOString();
    if (M.isBoolean(T))
      return T.toString();
    if (!p && M.isBlob(T))
      throw new ce("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(T) || M.isTypedArray(T) ? p && typeof Blob == "function" ? new Blob([T]) : Buffer.from(T) : T;
  }
  function S(T, L, U) {
    let V = T;
    if (T && !U && typeof T == "object") {
      if (M.endsWith(L, "{}"))
        L = s ? L : L.slice(0, -2), T = JSON.stringify(T);
      else if (M.isArray(T) && hv(T) || (M.isFileList(T) || M.endsWith(L, "[]")) && (V = M.toArray(T)))
        return L = Wm(L), V.forEach(function(Z, W) {
          !(M.isUndefined(Z) || Z === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? Ph([L], W, h) : d === null ? L : L + "[]",
            y(Z)
          );
        }), !1;
    }
    return bo(T) ? !0 : (c.append(Ph(U, L, h), y(T)), !1);
  }
  const E = [], D = Object.assign(mv, {
    defaultVisitor: S,
    convertValue: y,
    isVisitable: bo
  });
  function Y(T, L) {
    if (!M.isUndefined(T)) {
      if (E.indexOf(T) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      E.push(T), M.forEach(T, function(V, J) {
        (!(M.isUndefined(V) || V === null) && o.call(
          c,
          V,
          M.isString(J) ? J.trim() : J,
          L,
          D
        )) === !0 && Y(V, L ? L.concat(J) : [J]);
      }), E.pop();
    }
  }
  if (!M.isObject(u))
    throw new TypeError("data must be an object");
  return Y(u), c;
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
  this._pairs = [], u && _i(u, this, c);
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
  M.isFunction(r) && (r = {
    serialize: r
  });
  const o = r && r.serialize;
  let h;
  if (o ? h = o(c, r) : h = M.isURLSearchParams(c) ? c.toString() : new Do(c, r).toString(s), h) {
    const d = u.indexOf("#");
    d !== -1 && (u = u.slice(0, d)), u += (u.indexOf("?") === -1 ? "?" : "&") + h;
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
    M.forEach(this.handlers, function(s) {
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
  return _i(u, new at.classes.URLSearchParams(), {
    visitor: function(r, s, o, h) {
      return at.isNode && M.isBuffer(r) ? (this.append(s, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function xv(u) {
  return M.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function Ov(u) {
  const c = {}, r = Object.keys(u);
  let s;
  const o = r.length;
  let h;
  for (s = 0; s < o; s++)
    h = r[s], c[h] = u[h];
  return c;
}
function e0(u) {
  function c(r, s, o, h) {
    let d = r[h++];
    if (d === "__proto__") return !0;
    const g = Number.isFinite(+d), p = h >= r.length;
    return d = !d && M.isArray(o) ? o.length : d, p ? (M.hasOwnProp(o, d) ? o[d] = [o[d], s] : o[d] = s, !g) : ((!o[d] || !M.isObject(o[d])) && (o[d] = []), c(r, s, o[d], h) && M.isArray(o[d]) && (o[d] = Ov(o[d])), !g);
  }
  if (M.isFormData(u) && M.isFunction(u.entries)) {
    const r = {};
    return M.forEachEntry(u, (s, o) => {
      c(xv(s), o, r, 0);
    }), r;
  }
  return null;
}
function Cv(u, c, r) {
  if (M.isString(u))
    try {
      return (c || JSON.parse)(u), M.trim(u);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (r || JSON.stringify)(u);
}
const au = {
  transitional: Pm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, r) {
    const s = r.getContentType() || "", o = s.indexOf("application/json") > -1, h = M.isObject(c);
    if (h && M.isHTMLForm(c) && (c = new FormData(c)), M.isFormData(c))
      return o ? JSON.stringify(e0(c)) : c;
    if (M.isArrayBuffer(c) || M.isBuffer(c) || M.isStream(c) || M.isFile(c) || M.isBlob(c) || M.isReadableStream(c))
      return c;
    if (M.isArrayBufferView(c))
      return c.buffer;
    if (M.isURLSearchParams(c))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let g;
    if (h) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return Tv(c, this.formSerializer).toString();
      if ((g = M.isFileList(c)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return _i(
          g ? { "files[]": c } : c,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return h || o ? (r.setContentType("application/json", !1), Cv(c)) : c;
  }],
  transformResponse: [function(c) {
    const r = this.transitional || au.transitional, s = r && r.forcedJSONParsing, o = this.responseType === "json";
    if (M.isResponse(c) || M.isReadableStream(c))
      return c;
    if (c && M.isString(c) && (s && !this.responseType || o)) {
      const d = !(r && r.silentJSONParsing) && o;
      try {
        return JSON.parse(c, this.parseReviver);
      } catch (g) {
        if (d)
          throw g.name === "SyntaxError" ? ce.from(g, ce.ERR_BAD_RESPONSE, this, null, this.response) : g;
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
M.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  au.headers[u] = {};
});
const wv = M.toObjectSet([
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
`).forEach(function(d) {
    o = d.indexOf(":"), r = d.substring(0, o).trim().toLowerCase(), s = d.substring(o + 1).trim(), !(!r || c[r] && wv[r]) && (r === "set-cookie" ? c[r] ? c[r].push(s) : c[r] = [s] : c[r] = c[r] ? c[r] + ", " + s : s);
  }), c;
}, lm = /* @__PURE__ */ Symbol("internals");
function Fa(u) {
  return u && String(u).trim().toLowerCase();
}
function Ci(u) {
  return u === !1 || u == null ? u : M.isArray(u) ? u.map(Ci) : String(u);
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
  if (M.isFunction(s))
    return s.call(this, c, r);
  if (o && (c = r), !!M.isString(c)) {
    if (M.isString(s))
      return c.indexOf(s) !== -1;
    if (M.isRegExp(s))
      return s.test(c);
  }
}
function Nv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, r, s) => r.toUpperCase() + s);
}
function Uv(u, c) {
  const r = M.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + r, {
      value: function(o, h, d) {
        return this[s].call(this, c, o, h, d);
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
    function h(g, p, y) {
      const S = Fa(p);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const E = M.findKey(o, S);
      (!E || o[E] === void 0 || y === !0 || y === void 0 && o[E] !== !1) && (o[E || p] = Ci(g));
    }
    const d = (g, p) => M.forEach(g, (y, S) => h(y, S, p));
    if (M.isPlainObject(c) || c instanceof this.constructor)
      d(c, r);
    else if (M.isString(c) && (c = c.trim()) && !Mv(c))
      d(zv(c), r);
    else if (M.isObject(c) && M.isIterable(c)) {
      let g = {}, p, y;
      for (const S of c) {
        if (!M.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = S[0]] = (p = g[y]) ? M.isArray(p) ? [...p, S[1]] : [p, S[1]] : S[1];
      }
      d(g, r);
    } else
      c != null && h(r, c, s);
    return this;
  }
  get(c, r) {
    if (c = Fa(c), c) {
      const s = M.findKey(this, c);
      if (s) {
        const o = this[s];
        if (!r)
          return o;
        if (r === !0)
          return Dv(o);
        if (M.isFunction(r))
          return r.call(this, o, s);
        if (M.isRegExp(r))
          return r.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, r) {
    if (c = Fa(c), c) {
      const s = M.findKey(this, c);
      return !!(s && this[s] !== void 0 && (!r || mo(this, this[s], s, r)));
    }
    return !1;
  }
  delete(c, r) {
    const s = this;
    let o = !1;
    function h(d) {
      if (d = Fa(d), d) {
        const g = M.findKey(s, d);
        g && (!r || mo(s, s[g], g, r)) && (delete s[g], o = !0);
      }
    }
    return M.isArray(c) ? c.forEach(h) : h(c), o;
  }
  clear(c) {
    const r = Object.keys(this);
    let s = r.length, o = !1;
    for (; s--; ) {
      const h = r[s];
      (!c || mo(this, this[h], h, c, !0)) && (delete this[h], o = !0);
    }
    return o;
  }
  normalize(c) {
    const r = this, s = {};
    return M.forEach(this, (o, h) => {
      const d = M.findKey(s, h);
      if (d) {
        r[d] = Ci(o), delete r[h];
        return;
      }
      const g = c ? Nv(h) : String(h).trim();
      g !== h && delete r[h], r[g] = Ci(o), s[g] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (s, o) => {
      s != null && s !== !1 && (r[o] = c && M.isArray(s) ? s.join(", ") : s);
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
    function h(d) {
      const g = Fa(d);
      s[g] || (Uv(o, d), s[g] = !0);
    }
    return M.isArray(c) ? c.forEach(h) : h(c), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(mt.prototype, ({ value: u }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(s) {
      this[r] = s;
    }
  };
});
M.freezeMethods(mt);
function yo(u, c) {
  const r = this || au, s = c || r, o = mt.from(s.headers);
  let h = s.data;
  return M.forEach(u, function(g) {
    h = g.call(r, h, o.normalize(), c ? c.status : void 0);
  }), o.normalize(), h;
}
function t0(u) {
  return !!(u && u.__CANCEL__);
}
function Pn(u, c, r) {
  ce.call(this, u ?? "canceled", ce.ERR_CANCELED, c, r), this.name = "CanceledError";
}
M.inherits(Pn, ce, {
  __CANCEL__: !0
});
function l0(u, c, r) {
  const s = r.config.validateStatus;
  !r.status || !s || s(r.status) ? u(r) : c(new ce(
    "Request failed with status code " + r.status,
    [ce.ERR_BAD_REQUEST, ce.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
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
  let o = 0, h = 0, d;
  return c = c !== void 0 ? c : 1e3, function(p) {
    const y = Date.now(), S = s[h];
    d || (d = y), r[o] = p, s[o] = y;
    let E = h, D = 0;
    for (; E !== o; )
      D += r[E++], E = E % u;
    if (o = (o + 1) % u, o === h && (h = (h + 1) % u), y - d < c)
      return;
    const Y = S && y - S;
    return Y ? Math.round(D * 1e3 / Y) : void 0;
  };
}
function Hv(u, c) {
  let r = 0, s = 1e3 / c, o, h;
  const d = (y, S = Date.now()) => {
    r = S, o = null, h && (clearTimeout(h), h = null), u(...y);
  };
  return [(...y) => {
    const S = Date.now(), E = S - r;
    E >= s ? d(y, S) : (o = y, h || (h = setTimeout(() => {
      h = null, d(o);
    }, s - E)));
  }, () => o && d(o)];
}
const Mi = (u, c, r = 3) => {
  let s = 0;
  const o = jv(50, 250);
  return Hv((h) => {
    const d = h.loaded, g = h.lengthComputable ? h.total : void 0, p = d - s, y = o(p), S = d <= g;
    s = d;
    const E = {
      loaded: d,
      total: g,
      progress: g ? d / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && S ? (g - d) / y : void 0,
      event: h,
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
}, am = (u) => (...c) => M.asap(() => u(...c)), _v = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (r) => (r = new URL(r, at.origin), u.protocol === r.protocol && u.host === r.host && (c || u.port === r.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Lv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, r, s, o, h, d) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(c)}`];
      M.isNumber(r) && g.push(`expires=${new Date(r).toUTCString()}`), M.isString(s) && g.push(`path=${s}`), M.isString(o) && g.push(`domain=${o}`), h === !0 && g.push("secure"), M.isString(d) && g.push(`SameSite=${d}`), document.cookie = g.join("; ");
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
function cn(u, c) {
  c = c || {};
  const r = {};
  function s(y, S, E, D) {
    return M.isPlainObject(y) && M.isPlainObject(S) ? M.merge.call({ caseless: D }, y, S) : M.isPlainObject(S) ? M.merge({}, S) : M.isArray(S) ? S.slice() : S;
  }
  function o(y, S, E, D) {
    if (M.isUndefined(S)) {
      if (!M.isUndefined(y))
        return s(void 0, y, E, D);
    } else return s(y, S, E, D);
  }
  function h(y, S) {
    if (!M.isUndefined(S))
      return s(void 0, S);
  }
  function d(y, S) {
    if (M.isUndefined(S)) {
      if (!M.isUndefined(y))
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
    url: h,
    method: h,
    data: h,
    baseURL: d,
    transformRequest: d,
    transformResponse: d,
    paramsSerializer: d,
    timeout: d,
    timeoutMessage: d,
    withCredentials: d,
    withXSRFToken: d,
    adapter: d,
    responseType: d,
    xsrfCookieName: d,
    xsrfHeaderName: d,
    onUploadProgress: d,
    onDownloadProgress: d,
    decompress: d,
    maxContentLength: d,
    maxBodyLength: d,
    beforeRedirect: d,
    transport: d,
    httpAgent: d,
    httpsAgent: d,
    cancelToken: d,
    socketPath: d,
    responseEncoding: d,
    validateStatus: g,
    headers: (y, S, E) => o(um(y), um(S), E, !0)
  };
  return M.forEach(Object.keys({ ...u, ...c }), function(S) {
    const E = p[S] || o, D = E(u[S], c[S], S);
    M.isUndefined(D) && E !== g || (r[S] = D);
  }), r;
}
const a0 = (u) => {
  const c = cn({}, u);
  let { data: r, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: h, headers: d, auth: g } = c;
  if (c.headers = d = mt.from(d), c.url = $m(n0(c.baseURL, c.url, c.allowAbsoluteUrls), u.params, u.paramsSerializer), g && d.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), M.isFormData(r)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      d.setContentType(void 0);
    else if (M.isFunction(r.getHeaders)) {
      const p = r.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([S, E]) => {
        y.includes(S.toLowerCase()) && d.set(S, E);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (s && M.isFunction(s) && (s = s(c)), s || s !== !1 && _v(c.url))) {
    const p = o && h && Lv.read(h);
    p && d.set(o, p);
  }
  return c;
}, Qv = typeof XMLHttpRequest < "u", Gv = Qv && function(u) {
  return new Promise(function(r, s) {
    const o = a0(u);
    let h = o.data;
    const d = mt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, S, E, D, Y, T;
    function L() {
      Y && Y(), T && T(), o.cancelToken && o.cancelToken.unsubscribe(S), o.signal && o.signal.removeEventListener("abort", S);
    }
    let U = new XMLHttpRequest();
    U.open(o.method.toUpperCase(), o.url, !0), U.timeout = o.timeout;
    function V() {
      if (!U)
        return;
      const Z = mt.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), le = {
        data: !g || g === "text" || g === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: Z,
        config: u,
        request: U
      };
      l0(function(ue) {
        r(ue), L();
      }, function(ue) {
        s(ue), L();
      }, le), U = null;
    }
    "onloadend" in U ? U.onloadend = V : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, U.onabort = function() {
      U && (s(new ce("Request aborted", ce.ECONNABORTED, u, U)), U = null);
    }, U.onerror = function(W) {
      const le = W && W.message ? W.message : "Network Error", ae = new ce(le, ce.ERR_NETWORK, u, U);
      ae.event = W || null, s(ae), U = null;
    }, U.ontimeout = function() {
      let W = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const le = o.transitional || Pm;
      o.timeoutErrorMessage && (W = o.timeoutErrorMessage), s(new ce(
        W,
        le.clarifyTimeoutError ? ce.ETIMEDOUT : ce.ECONNABORTED,
        u,
        U
      )), U = null;
    }, h === void 0 && d.setContentType(null), "setRequestHeader" in U && M.forEach(d.toJSON(), function(W, le) {
      U.setRequestHeader(le, W);
    }), M.isUndefined(o.withCredentials) || (U.withCredentials = !!o.withCredentials), g && g !== "json" && (U.responseType = o.responseType), y && ([D, T] = Mi(y, !0), U.addEventListener("progress", D)), p && U.upload && ([E, Y] = Mi(p), U.upload.addEventListener("progress", E), U.upload.addEventListener("loadend", Y)), (o.cancelToken || o.signal) && (S = (Z) => {
      U && (s(!Z || Z.type ? new Pn(null, u, U) : Z), U.abort(), U = null);
    }, o.cancelToken && o.cancelToken.subscribe(S), o.signal && (o.signal.aborted ? S() : o.signal.addEventListener("abort", S)));
    const J = Bv(o.url);
    if (J && at.protocols.indexOf(J) === -1) {
      s(new ce("Unsupported protocol " + J + ":", ce.ERR_BAD_REQUEST, u));
      return;
    }
    U.send(h || null);
  });
}, Yv = (u, c) => {
  const { length: r } = u = u ? u.filter(Boolean) : [];
  if (c || r) {
    let s = new AbortController(), o;
    const h = function(y) {
      if (!o) {
        o = !0, g();
        const S = y instanceof Error ? y : this.reason;
        s.abort(S instanceof ce ? S : new Pn(S instanceof Error ? S.message : S));
      }
    };
    let d = c && setTimeout(() => {
      d = null, h(new ce(`timeout ${c} of ms exceeded`, ce.ETIMEDOUT));
    }, c);
    const g = () => {
      u && (d && clearTimeout(d), d = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(h) : y.removeEventListener("abort", h);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", h));
    const { signal: p } = s;
    return p.unsubscribe = () => M.asap(g), p;
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
  let h = 0, d, g = (p) => {
    d || (d = !0, s && s(p));
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
          let D = h += E;
          r(D);
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
}, cm = 64 * 1024, { isFunction: Ri } = M, Zv = (({ Request: u, Response: c }) => ({
  Request: u,
  Response: c
}))(M.global), {
  ReadableStream: rm,
  TextEncoder: om
} = M.global, sm = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, Kv = (u) => {
  u = M.merge.call({
    skipUndefined: !0
  }, Zv, u);
  const { fetch: c, Request: r, Response: s } = u, o = c ? Ri(c) : typeof fetch == "function", h = Ri(r), d = Ri(s);
  if (!o)
    return !1;
  const g = o && Ri(rm), p = o && (typeof om == "function" ? /* @__PURE__ */ ((T) => (L) => T.encode(L))(new om()) : async (T) => new Uint8Array(await new r(T).arrayBuffer())), y = h && g && sm(() => {
    let T = !1;
    const L = new r(at.origin, {
      body: new rm(),
      method: "POST",
      get duplex() {
        return T = !0, "half";
      }
    }).headers.has("Content-Type");
    return T && !L;
  }), S = d && g && sm(() => M.isReadableStream(new s("").body)), E = {
    stream: S && ((T) => T.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((T) => {
    !E[T] && (E[T] = (L, U) => {
      let V = L && L[T];
      if (V)
        return V.call(L);
      throw new ce(`Response type '${T}' is not supported`, ce.ERR_NOT_SUPPORT, U);
    });
  });
  const D = async (T) => {
    if (T == null)
      return 0;
    if (M.isBlob(T))
      return T.size;
    if (M.isSpecCompliantForm(T))
      return (await new r(at.origin, {
        method: "POST",
        body: T
      }).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(T) || M.isArrayBuffer(T))
      return T.byteLength;
    if (M.isURLSearchParams(T) && (T = T + ""), M.isString(T))
      return (await p(T)).byteLength;
  }, Y = async (T, L) => {
    const U = M.toFiniteNumber(T.getContentLength());
    return U ?? D(L);
  };
  return async (T) => {
    let {
      url: L,
      method: U,
      data: V,
      signal: J,
      cancelToken: Z,
      timeout: W,
      onDownloadProgress: le,
      onUploadProgress: ae,
      responseType: ue,
      headers: te,
      withCredentials: de = "same-origin",
      fetchOptions: Te
    } = a0(T), Ue = c || fetch;
    ue = ue ? (ue + "").toLowerCase() : "text";
    let Be = Yv([J, Z && Z.toAbortSignal()], W), De = null;
    const Ze = Be && Be.unsubscribe && (() => {
      Be.unsubscribe();
    });
    let Ie;
    try {
      if (ae && y && U !== "get" && U !== "head" && (Ie = await Y(te, V)) !== 0) {
        let be = new r(L, {
          method: "POST",
          body: V,
          duplex: "half"
        }), b;
        if (M.isFormData(V) && (b = be.headers.get("content-type")) && te.setContentType(b), be.body) {
          const [H, G] = nm(
            Ie,
            Mi(am(ae))
          );
          V = im(be.body, cm, H, G);
        }
      }
      M.isString(de) || (de = de ? "include" : "omit");
      const k = h && "credentials" in r.prototype, q = {
        ...Te,
        signal: Be,
        method: U.toUpperCase(),
        headers: te.normalize().toJSON(),
        body: V,
        duplex: "half",
        credentials: k ? de : void 0
      };
      De = h && new r(L, q);
      let Q = await (h ? Ue(De, Te) : Ue(L, q));
      const $ = S && (ue === "stream" || ue === "response");
      if (S && (le || $ && Ze)) {
        const be = {};
        ["status", "statusText", "headers"].forEach((K) => {
          be[K] = Q[K];
        });
        const b = M.toFiniteNumber(Q.headers.get("content-length")), [H, G] = le && nm(
          b,
          Mi(am(le), !0)
        ) || [];
        Q = new s(
          im(Q.body, cm, H, () => {
            G && G(), Ze && Ze();
          }),
          be
        );
      }
      ue = ue || "text";
      let re = await E[M.findKey(E, ue) || "text"](Q, T);
      return !$ && Ze && Ze(), await new Promise((be, b) => {
        l0(be, b, {
          data: re,
          headers: mt.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: T,
          request: De
        });
      });
    } catch (k) {
      throw Ze && Ze(), k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message) ? Object.assign(
        new ce("Network Error", ce.ERR_NETWORK, T, De),
        {
          cause: k.cause || k
        }
      ) : ce.from(k, k && k.code, T, De);
    }
  };
}, Fv = /* @__PURE__ */ new Map(), u0 = (u) => {
  let c = u && u.env || {};
  const { fetch: r, Request: s, Response: o } = c, h = [
    s,
    o,
    r
  ];
  let d = h.length, g = d, p, y, S = Fv;
  for (; g--; )
    p = h[g], y = S.get(p), y === void 0 && S.set(p, y = g ? /* @__PURE__ */ new Map() : Kv(c)), S = y;
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
M.forEach(No, (u, c) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: c });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: c });
  }
});
const fm = (u) => `- ${u}`, Wv = (u) => M.isFunction(u) || u === null || u === !1;
function Iv(u, c) {
  u = M.isArray(u) ? u : [u];
  const { length: r } = u;
  let s, o;
  const h = {};
  for (let d = 0; d < r; d++) {
    s = u[d];
    let g;
    if (o = s, !Wv(s) && (o = No[(g = String(s)).toLowerCase()], o === void 0))
      throw new ce(`Unknown adapter '${g}'`);
    if (o && (M.isFunction(o) || (o = o.get(c))))
      break;
    h[g || "#" + d] = o;
  }
  if (!o) {
    const d = Object.entries(h).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = r ? d.length > 1 ? `since :
` + d.map(fm).join(`
`) : " " + fm(d[0]) : "as no adapter specified";
    throw new ce(
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
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), i0.getAdapter(u.adapter || au.adapter, u)(u).then(function(s) {
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
const c0 = "1.13.2", Li = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  Li[u] = function(s) {
    return typeof s === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const hm = {};
Li.transitional = function(c, r, s) {
  function o(h, d) {
    return "[Axios v" + c0 + "] Transitional option '" + h + "'" + d + (s ? ". " + s : "");
  }
  return (h, d, g) => {
    if (c === !1)
      throw new ce(
        o(d, " has been removed" + (r ? " in " + r : "")),
        ce.ERR_DEPRECATED
      );
    return r && !hm[d] && (hm[d] = !0, console.warn(
      o(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), c ? c(h, d, g) : !0;
  };
};
Li.spelling = function(c) {
  return (r, s) => (console.warn(`${s} is likely a misspelling of ${c}`), !0);
};
function $v(u, c, r) {
  if (typeof u != "object")
    throw new ce("options must be an object", ce.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let o = s.length;
  for (; o-- > 0; ) {
    const h = s[o], d = c[h];
    if (d) {
      const g = u[h], p = g === void 0 || d(g, h, u);
      if (p !== !0)
        throw new ce("option " + h + " must be " + p, ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ce("Unknown option " + h, ce.ERR_BAD_OPTION);
  }
}
const wi = {
  assertOptions: $v,
  validators: Li
}, Xt = wi.validators;
let un = class {
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
        const h = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? h && !String(s.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + h) : s.stack = h;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(c, r) {
    typeof c == "string" ? (r = r || {}, r.url = c) : r = c || {}, r = cn(this.defaults, r);
    const { transitional: s, paramsSerializer: o, headers: h } = r;
    s !== void 0 && wi.assertOptions(s, {
      silentJSONParsing: Xt.transitional(Xt.boolean),
      forcedJSONParsing: Xt.transitional(Xt.boolean),
      clarifyTimeoutError: Xt.transitional(Xt.boolean)
    }, !1), o != null && (M.isFunction(o) ? r.paramsSerializer = {
      serialize: o
    } : wi.assertOptions(o, {
      encode: Xt.function,
      serialize: Xt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), wi.assertOptions(r, {
      baseUrl: Xt.spelling("baseURL"),
      withXsrfToken: Xt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let d = h && M.merge(
      h.common,
      h[r.method]
    );
    h && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (T) => {
        delete h[T];
      }
    ), r.headers = mt.concat(d, h);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(L) {
      typeof L.runWhen == "function" && L.runWhen(r) === !1 || (p = p && L.synchronous, g.unshift(L.fulfilled, L.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(L) {
      y.push(L.fulfilled, L.rejected);
    });
    let S, E = 0, D;
    if (!p) {
      const T = [dm.bind(this), void 0];
      for (T.unshift(...g), T.push(...y), D = T.length, S = Promise.resolve(r); E < D; )
        S = S.then(T[E++], T[E++]);
      return S;
    }
    D = g.length;
    let Y = r;
    for (; E < D; ) {
      const T = g[E++], L = g[E++];
      try {
        Y = T(Y);
      } catch (U) {
        L.call(this, U);
        break;
      }
    }
    try {
      S = dm.call(this, Y);
    } catch (T) {
      return Promise.reject(T);
    }
    for (E = 0, D = y.length; E < D; )
      S = S.then(y[E++], y[E++]);
    return S;
  }
  getUri(c) {
    c = cn(this.defaults, c);
    const r = n0(c.baseURL, c.url, c.allowAbsoluteUrls);
    return $m(r, c.params, c.paramsSerializer);
  }
};
M.forEach(["delete", "get", "head", "options"], function(c) {
  un.prototype[c] = function(r, s) {
    return this.request(cn(s || {}, {
      method: c,
      url: r,
      data: (s || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(c) {
  function r(s) {
    return function(h, d, g) {
      return this.request(cn(g || {}, {
        method: c,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: h,
        data: d
      }));
    };
  }
  un.prototype[c] = r(), un.prototype[c + "Form"] = r(!0);
});
let Pv = class r0 {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(h) {
      r = h;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let h = s._listeners.length;
      for (; h-- > 0; )
        s._listeners[h](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let h;
      const d = new Promise((g) => {
        s.subscribe(g), h = g;
      }).then(o);
      return d.cancel = function() {
        s.unsubscribe(h);
      }, d;
    }, c(function(h, d, g) {
      s.reason || (s.reason = new Pn(h, d, g), r(s.reason));
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
  return M.isObject(u) && u.isAxiosError === !0;
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
  const c = new un(u), r = km(un.prototype.request, c);
  return M.extend(r, un.prototype, c, { allOwnKeys: !0 }), M.extend(r, c, null, { allOwnKeys: !0 }), r.create = function(o) {
    return o0(cn(u, o));
  }, r;
}
const He = o0(au);
He.Axios = un;
He.CanceledError = Pn;
He.CancelToken = Pv;
He.isCancel = t0;
He.VERSION = c0;
He.toFormData = _i;
He.AxiosError = ce;
He.Cancel = He.CanceledError;
He.all = function(c) {
  return Promise.all(c);
};
He.spread = eS;
He.isAxiosError = tS;
He.mergeConfig = cn;
He.AxiosHeaders = mt;
He.formToJSON = (u) => e0(M.isHTMLForm(u) ? new FormData(u) : u);
He.getAdapter = i0.getAdapter;
He.HttpStatusCode = Eo;
He.default = He;
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
} = He, lS = "https://dev-demo-env.colibrilearning.com", qi = (u) => {
  const c = u.startsWith("/") ? u : `/${u}`;
  return `${lS}${c}`;
}, nS = async (u, c) => {
  const r = qi("api/auth"), s = { username: u, password: c };
  try {
    return (await He.post(r, s)).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, aS = async (u) => {
  const c = qi("api/register");
  try {
    return (await He.post(c, u)).data;
  } catch (r) {
    throw console.error("Error during registration:", r), r.response?.data?.details?.errorMessage ? new Error(r.response.data.details.errorMessage) : r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.details ? new Error(r.response.data.details) : r.response?.data?.message ? new Error(r.response.data.message) : r.response?.status === 500 ? new Error("Registration failed. Please try again.") : r.message ? new Error(r.message) : new Error("Registration failed");
  }
}, s0 = async (u) => {
  const c = qi("api/check-email");
  try {
    return (await He.post(c, { email: u })).data;
  } catch (r) {
    return console.error("Error checking email:", r), r.response?.data ? r.response.data : { exists: !1 };
  }
}, uS = async (u) => {
  const c = qi("api/refresh"), r = { refresh_token: u };
  try {
    return (await He.post(c, r)).data;
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
    const o = c.displayName.split(/\s+/).filter((h) => h.length >= 2);
    for (const h of o)
      if (h && s.includes(h.toLowerCase())) {
        r.noNameParts = !1;
        break;
      }
  }
  if (c && c.email) {
    const h = ((c.email || "").split("@")[0] || "").split(/[^A-Za-z0-9]+/).filter((d) => d.length >= 3);
    for (const d of h)
      if (d && s.includes(d.toLowerCase())) {
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
      const { jwtDecode: o } = require("jwt-decode"), h = o(s), d = Math.floor(Date.now() / 1e3);
      return !(!h.exp || d >= h.exp);
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
    const o = qm(s.access_token), h = (o.exp || 0) - Math.floor(Date.now() / 1e3);
    Di("access_token", s.access_token, h, !0), o.x_credentials && Di("X-Credential", o.x_credentials, h, !1), localStorage.setItem("user_state", "authenticated"), r && s.refresh_token ? (localStorage.setItem("refresh_token", s.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return s;
}, rS = ({
  type: u,
  message: c,
  duration: r = 5e3,
  onClose: s,
  className: o = ""
}) => {
  const [h, d] = O.useState(!1), [g, p] = O.useState(!1);
  O.useEffect(() => {
    setTimeout(() => d(!0), 10);
    const Y = setTimeout(() => {
      y();
    }, r);
    return () => clearTimeout(Y);
  }, [r]);
  const y = () => {
    p(!0), setTimeout(() => {
      d(!1), s();
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
  }, D = S();
  return /* @__PURE__ */ z.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${h && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ z.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${D.bg}`, children: [
        /* @__PURE__ */ z.jsx("div", { className: `flex-shrink-0! ${D.icon}`, children: E() }),
        /* @__PURE__ */ z.jsx("div", { className: `ml-3! flex-1! ${D.text}`, children: /* @__PURE__ */ z.jsx("p", { className: "text-sm! font-medium!", children: c }) }),
        /* @__PURE__ */ z.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${D.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
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
  subtitle: h = "Create an account to continue to checkout"
}) => {
  const [d, g] = O.useState(""), [p, y] = O.useState(""), [S, E] = O.useState(""), [D, Y] = O.useState(""), [T, L] = O.useState(!1), [U, V] = O.useState(""), [J, Z] = O.useState(!1), [W, le] = O.useState(
    null
  ), [ae, ue] = O.useState(!1), [te, de] = O.useState(!1), [Te, Ue] = O.useState(!1), [Be, De] = O.useState(!1), [Ze, Ie] = O.useState(!0), [k, q] = O.useState(""), [Q, $] = O.useState("info"), re = O.useRef(null), be = O.useRef(null);
  O.useEffect(() => {
    if (be.current && clearTimeout(be.current), !d) {
      de(!1), Ue(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) {
      de(!1), Ue(!1);
      return;
    }
    return be.current = setTimeout(async () => {
      De(!0);
      try {
        (await s0(d)).exists ? (Ue(!0), de(!0)) : (Ue(!1), de(!1));
      } catch (fe) {
        console.error("[CreateAccount] Email check failed:", fe), Ue(!1), de(!1);
      } finally {
        De(!1);
      }
    }, 500), () => {
      be.current && clearTimeout(be.current);
    };
  }, [d]), O.useEffect(() => {
    if (D) {
      const I = d || p || S ? {
        email: d,
        displayName: `${p} ${S}`.trim()
      } : null, fe = f0(D, I);
      le(fe);
    } else
      le(null);
  }, [D, d, p, S]);
  const b = W ? W.length && W.upper && W.lower && W.number && W.noSpaces && W.noTriple && W.special && W.noNameParts && W.noEmailParts : !1, G = d && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d);
  O.useEffect(() => {
    const I = (fe) => {
      fe.key === "Escape" && r();
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [r]);
  const K = (I) => {
    I.target === re.current && r();
  }, se = async (I) => {
    if (I.preventDefault(), ue(!0), !d || !p || !S || !D) {
      c("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) {
      V("Please enter a valid email address"), c("Please enter a valid email address");
      return;
    }
    if (!b) {
      c("Password does not meet requirements");
      return;
    }
    L(!0), V(""), q("");
    try {
      const Le = d.split("@")[0], ze = await aS({
        username: Le,
        email: d,
        firstName: p,
        lastName: S,
        password: D
      });
      console.log(
        "[CreateAccount] Registration successful:",
        ze.message
      );
      try {
        const Ht = await d0(
          Le,
          D,
          Ze
        );
        u(Ht);
      } catch (Ht) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Ht
        );
        const on = Ht instanceof Error ? Ht.message : "Auto-login failed";
        c(on);
      }
    } catch (Le) {
      console.error("[CreateAccount] Registration failed:", Le);
      const ze = Le instanceof Error ? Le.message : "Registration failed";
      q(ze), $("error"), c(ze);
    } finally {
      L(!1);
    }
  };
  return /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
    k && /* @__PURE__ */ z.jsx(
      rS,
      {
        type: Q,
        message: k,
        duration: 5e3,
        onClose: () => q("")
      }
    ),
    /* @__PURE__ */ z.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: re,
        onMouseDown: K,
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
            /* @__PURE__ */ z.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: h })
          ] }),
          /* @__PURE__ */ z.jsxs("form", { onSubmit: se, className: "space-y-4!", children: [
            /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsx(
              Kn,
              {
                label: "Email Address",
                id: "email",
                type: "email",
                value: d,
                onChange: (I) => {
                  g(I.target.value), V("");
                },
                placeholder: "Enter email address",
                disabled: T,
                className: "w-full!",
                autoComplete: "email",
                error: ae && !d ? "Required" : U || "",
                endIcon: /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                  Be && /* @__PURE__ */ z.jsx(Lm, {}),
                  !Be && !Te && d && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d) && /* @__PURE__ */ z.jsx(
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
            te && Te && /* @__PURE__ */ z.jsx(
              _m,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  de(!1), s();
                },
                onClose: () => de(!1),
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
                  value: p,
                  onChange: (I) => y(I.target.value),
                  placeholder: "First Name",
                  disabled: T || Te || !G,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ae && !p ? "Required" : ""
                }
              ),
              /* @__PURE__ */ z.jsx(
                Kn,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: S,
                  onChange: (I) => E(I.target.value),
                  placeholder: "Last Name",
                  disabled: T || Te || !G,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ae && !S ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ z.jsx(
              Kn,
              {
                label: "Password",
                id: "password",
                type: J ? "text" : "password",
                value: D,
                onChange: (I) => {
                  Y(I.target.value);
                },
                placeholder: "Enter Password...",
                disabled: T || Te || !G,
                className: "w-full!",
                autoComplete: "new-password",
                error: ae && !D ? "Required" : ae && D && !b ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                endIcon: /* @__PURE__ */ z.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => Z(!J),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: J ? /* @__PURE__ */ z.jsx(
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
                  checked: Ze,
                  onChange: (I) => Ie(I.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none!"
                }
              ),
              /* @__PURE__ */ z.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ z.jsx(
              Hm,
              {
                type: "submit",
                disabled: T || Te || !G,
                className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: T ? /* @__PURE__ */ z.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                onClick: s,
                disabled: T,
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
  subtitle: h = "Continue by signing in."
}) => {
  const [d, g] = O.useState(""), [p, y] = O.useState(""), [S, E] = O.useState(!1), [D, Y] = O.useState(!1), [T, L] = O.useState(
    null
  ), [U, V] = O.useState(""), [J, Z] = O.useState(!0), [W, le] = O.useState(!1), [ae, ue] = O.useState(!1), [te, de] = O.useState(!1), [Te, Ue] = O.useState(!1), Be = O.useRef(null), De = O.useRef(null);
  O.useEffect(() => {
    if (De.current && clearTimeout(De.current), !d) {
      ue(!1), Ue(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) {
      ue(!1), Ue(!1);
      return;
    }
    return De.current = setTimeout(async () => {
      de(!0);
      try {
        (await s0(d)).exists ? (ue(!0), Ue(!1)) : (ue(!1), Ue(!0));
      } catch (re) {
        console.error("[EmbeddedLogin] Email check failed:", re), ue(!0), Ue(!1);
      } finally {
        de(!1);
      }
    }, 500), () => {
      De.current && clearTimeout(De.current);
    };
  }, [d]), O.useEffect(() => {
    if (p) {
      const $ = f0(p, null);
      L($);
    } else
      L(null);
  }, [p]);
  const Ze = T ? T.length && T.upper && T.lower && T.number && T.noSpaces && T.noTriple && T.special : !1, k = d && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d);
  O.useEffect(() => {
    const $ = (re) => {
      re.key === "Escape" && r();
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [r]);
  const q = ($) => {
    $.target === Be.current && r();
  }, Q = async ($) => {
    if ($.preventDefault(), !d || !p) {
      V("Please enter both email and password"), c("Please enter both email and password");
      return;
    }
    E(!0), V("");
    try {
      const re = await d0(d, p, J);
      u(re);
    } catch (re) {
      console.error("[EmbeddedLogin] Login failed:", re);
      const be = re instanceof Error ? re.message : "Authentication failed";
      V(be), c(be);
    } finally {
      E(!1);
    }
  };
  return W ? /* @__PURE__ */ z.jsx(
    oS,
    {
      onSuccess: ($) => {
        le(!1), u($);
      },
      onError: c,
      handleClose: r,
      onSignIn: () => le(!1),
      authority: s
    }
  ) : /* @__PURE__ */ z.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Be,
      onMouseDown: q,
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
          /* @__PURE__ */ z.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: h })
        ] }),
        /* @__PURE__ */ z.jsxs("form", { onSubmit: Q, className: "space-y-2!", children: [
          /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ z.jsx(
            Kn,
            {
              label: "Email Address",
              id: "email",
              type: "email",
              value: d,
              onChange: ($) => g($.target.value),
              placeholder: "Enter email address",
              disabled: S,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ z.jsxs(z.Fragment, { children: [
                te && /* @__PURE__ */ z.jsx(Lm, {}),
                !te && ae && k && /* @__PURE__ */ z.jsx(
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
          Te && !ae && k && /* @__PURE__ */ z.jsx(
            _m,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                Ue(!1), le(!0);
              },
              onClose: () => Ue(!1),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ z.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ z.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ z.jsx(
            Kn,
            {
              label: "Password",
              id: "password",
              type: D ? "text" : "password",
              value: p,
              onChange: ($) => {
                y($.target.value), V("");
              },
              placeholder: "Enter Password...",
              disabled: S || !k || !ae,
              className: "w-full!",
              autoComplete: "current-password",
              error: U,
              endIcon: /* @__PURE__ */ z.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => Y(!D),
                  className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                  tabIndex: -1,
                  children: D ? /* @__PURE__ */ z.jsx(
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
                  checked: J,
                  onChange: ($) => Z($.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none!"
                }
              ),
              /* @__PURE__ */ z.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            /* @__PURE__ */ z.jsx(
              "a",
              {
                href: "#",
                className: `text-blue-600! hover:text-blue-700! no-underline! ${!k || !ae ? "opacity-50! pointer-events-none!" : ""}`,
                onClick: ($) => {
                  (!k || !ae) && $.preventDefault();
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ z.jsx(
            Hm,
            {
              type: "submit",
              disabled: S || !d || !p || !Ze || !k || !ae,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: S ? /* @__PURE__ */ z.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
              onClick: () => le(!0),
              disabled: S,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ z.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, fS = (u) => {
  const { authority: c, subsidiary: r, callbackUrl: s, onRedirect: o } = u, [h, d] = O.useState(!1);
  console.log("isAuthenticated", h), O.useEffect(() => {
    (async () => {
      try {
        if (iS()) {
          d(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (cS()) {
          const Y = localStorage.getItem("refresh_token");
          if (Y) {
            console.log("[App] Attempting auto-login with refresh token");
            const T = await uS(Y);
            if (T && T.tokens && T.tokens.access_token) {
              const L = T.tokens, U = qm(L.access_token), V = (U.exp || 0) - Math.floor(Date.now() / 1e3);
              Di("access_token", L.access_token, V, !0), U.x_credentials && Di("X-Credential", U.x_credentials, V, !1), L.refresh_token && (localStorage.setItem("refresh_token", L.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const J = u.redirectUrl || s;
              if (o) {
                const Z = {
                  access_token: L.access_token,
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
                o(J, Z);
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
  }, [u.redirectUrl]), O.useEffect(() => {
    c && localStorage.setItem("authority", c), r && localStorage.setItem("subsidiary", r), s ? localStorage.setItem("callbackUrl", s) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [c, r, s]);
  const g = (S) => {
    u.handleClose && u.handleClose(), d(!0);
    const E = u.redirectUrl || s;
    o && o(E, S), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, p = (S) => {
    console.log("[App] Embedded login error:", S);
  }, y = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ z.jsx(_p, { children: /* @__PURE__ */ z.jsx(Dm, { path: "*", element: /* @__PURE__ */ z.jsx(z.Fragment, { children: !h && u.showLogin && /* @__PURE__ */ z.jsx(
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
        /* @__PURE__ */ z.jsx(c1, { children: /* @__PURE__ */ z.jsx(O.StrictMode, { children: /* @__PURE__ */ z.jsx(fS, { ...r }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
