
(function() {
  try {
    var elementStyle = document.createElement('style');
    elementStyle.appendChild(document.createTextNode("@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-blue-700:oklch(48.8% .243 264.376);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.pointer-events-none\\!{pointer-events:none!important}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5\\!{margin-block:calc(var(--spacing)*.5)!important}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-5\\!{margin-top:calc(var(--spacing)*5)!important}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-1\\.5\\!{margin-bottom:calc(var(--spacing)*1.5)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-0\\.5{margin-left:calc(var(--spacing)*.5)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-11\\!{height:calc(var(--spacing)*11)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[50\\%\\]\\!{width:50%!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-0\\!{min-width:calc(var(--spacing)*0)!important}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-\\[2_1_60\\%\\]\\!{flex:2 60%!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.grid-cols-\\[repeat\\(auto-fit\\,minmax\\(220px\\,1fr\\)\\)\\]\\!{grid-template-columns:repeat(auto-fit,minmax(220px,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.items-stretch\\!{align-items:stretch!important}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-2\\.5\\!{gap:calc(var(--spacing)*2.5)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-\\[\\#17a2b8\\]{border-color:#17a2b8}.border-\\[\\#cbd5d5\\]\\!{border-color:#cbd5d5!important}.border-\\[\\#cdece8\\]{border-color:#cdece8}.border-\\[\\#d6e3f6\\]{border-color:#d6e3f6}.border-\\[\\#d64545\\]\\!{border-color:#d64545!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[\\#17a2b8\\]{background-color:#17a2b8}.bg-\\[\\#bdbdbd\\]{background-color:#bdbdbd}.bg-black{background-color:var(--color-black)}.bg-black\\/2{background-color:#00000005}@supports (color:color-mix(in lab,red,red)){.bg-black\\/2{background-color:color-mix(in oklab,var(--color-black)2%,transparent)}}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-500{background-color:var(--color-green-500)}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-3\\!{padding-inline:calc(var(--spacing)*3)!important}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-\\[0\\.95rem\\]\\!{font-size:.95rem!important}.text-\\[1\\.05rem\\]\\!{font-size:1.05rem!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#2ea44f\\]{color:#2ea44f}.text-\\[\\#4b5563\\]{color:#4b5563}.text-\\[\\#17a2b8\\]{color:#17a2b8}.text-\\[\\#444\\]{color:#444}.text-\\[\\#b00020\\]{color:#b00020}.text-\\[\\#b04545\\]{color:#b04545}.text-\\[\\#c0392b\\]{color:#c0392b}.text-\\[\\#d64545\\]{color:#d64545}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-blue-600{color:var(--color-blue-600)}.text-blue-600\\!{color:var(--color-blue-600)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-50\\!{opacity:.5!important}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[\\#138496\\]:hover{background-color:#138496}.hover\\:bg-\\[\\#a24796\\]:hover{background-color:#a24796}.hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.hover\\:text-blue-700\\!:hover{color:var(--color-blue-700)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-\\[\\#2b6fd6\\]\\!:focus{border-color:#2b6fd6!important}.focus\\:border-\\[\\#60a5fa\\]\\!:focus{border-color:#60a5fa!important}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(24\\,102\\,214\\,0\\.12\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#1866d61f)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[\\#17a2b8\\]:enabled{background-color:#17a2b8}.enabled\\:bg-\\[\\#a24796\\]:enabled{background-color:#a24796}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-60\\!:disabled{opacity:.6!important}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}\n"));
    document.head.appendChild(elementStyle);
  } catch(e) {
    console.error('vite-plugin-css-injector', e);
  }
})();
var us = { exports: {} }, Ka = {};
var jh;
function _g() {
  if (jh) return Ka;
  jh = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(o, s, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      h = {};
      for (var g in s)
        g !== "key" && (h[g] = s[g]);
    } else h = s;
    return s = h.ref, {
      $$typeof: u,
      type: o,
      key: d,
      ref: s !== void 0 ? s : null,
      props: h
    };
  }
  return Ka.Fragment = c, Ka.jsx = r, Ka.jsxs = r, Ka;
}
var Hh;
function Lg() {
  return Hh || (Hh = 1, us.exports = _g()), us.exports;
}
var w = Lg(), is = { exports: {} }, ne = {}, _h;
function qg() {
  if (_h) return ne;
  _h = 1;
  var u = {};
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), D = /* @__PURE__ */ Symbol.for("react.activity"), G = Symbol.iterator;
  function x(b) {
    return b === null || typeof b != "object" ? null : (b = G && b[G] || b["@@iterator"], typeof b == "function" ? b : null);
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
  }, U = Object.assign, Y = {};
  function J(b, j, V) {
    this.props = b, this.context = j, this.refs = Y, this.updater = V || L;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(b, j) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, j, "setState");
  }, J.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = J.prototype;
  function I(b, j, V) {
    this.props = b, this.context = j, this.refs = Y, this.updater = V || L;
  }
  var le = I.prototype = new Z();
  le.constructor = I, U(le, J.prototype), le.isPureReactComponent = !0;
  var oe = Array.isArray;
  function te() {
  }
  var P = { H: null, A: null, T: null, S: null }, be = Object.prototype.hasOwnProperty;
  function _e(b, j, V) {
    var K = V.ref;
    return {
      $$typeof: c,
      type: b,
      key: j,
      ref: K !== void 0 ? K : null,
      props: V
    };
  }
  function Ne(b, j) {
    return _e(b.type, j, b.props);
  }
  function Te(b) {
    return typeof b == "object" && b !== null && b.$$typeof === c;
  }
  function Oe(b) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(V) {
      return j[V];
    });
  }
  var Ze = /\/+/g;
  function Fe(b, j) {
    return typeof b == "object" && b !== null && b.key != null ? Oe("" + b.key) : j.toString(36);
  }
  function k(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(te, te) : (b.status = "pending", b.then(
          function(j) {
            b.status === "pending" && (b.status = "fulfilled", b.value = j);
          },
          function(j) {
            b.status === "pending" && (b.status = "rejected", b.reason = j);
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
  function q(b, j, V, K, ae) {
    var se = typeof b;
    (se === "undefined" || se === "boolean") && (b = null);
    var pe = !1;
    if (b === null) pe = !0;
    else
      switch (se) {
        case "bigint":
        case "string":
        case "number":
          pe = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case c:
            case r:
              pe = !0;
              break;
            case E:
              return pe = b._init, q(
                pe(b._payload),
                j,
                V,
                K,
                ae
              );
          }
      }
    if (pe)
      return ae = ae(b), pe = K === "" ? "." + Fe(b, 0) : K, oe(ae) ? (V = "", pe != null && (V = pe.replace(Ze, "$&/") + "/"), q(ae, j, V, "", function(Tt) {
        return Tt;
      })) : ae != null && (Te(ae) && (ae = Ne(
        ae,
        V + (ae.key == null || b && b.key === ae.key ? "" : ("" + ae.key).replace(
          Ze,
          "$&/"
        ) + "/") + pe
      )), j.push(ae)), 1;
    pe = 0;
    var ye = K === "" ? "." : K + ":";
    if (oe(b))
      for (var Ee = 0; Ee < b.length; Ee++)
        K = b[Ee], se = ye + Fe(K, Ee), pe += q(
          K,
          j,
          V,
          se,
          ae
        );
    else if (Ee = x(b), typeof Ee == "function")
      for (b = Ee.call(b), Ee = 0; !(K = b.next()).done; )
        K = K.value, se = ye + Fe(K, Ee++), pe += q(
          K,
          j,
          V,
          se,
          ae
        );
    else if (se === "object") {
      if (typeof b.then == "function")
        return q(
          k(b),
          j,
          V,
          K,
          ae
        );
      throw j = String(b), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return pe;
  }
  function Q(b, j, V) {
    if (b == null) return b;
    var K = [], ae = 0;
    return q(b, K, "", "", function(se) {
      return j.call(V, se, ae++);
    }), K;
  }
  function W(b) {
    if (b._status === -1) {
      var j = b._result;
      j = j(), j.then(
        function(V) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = V);
        },
        function(V) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = V);
        }
      ), b._status === -1 && (b._status = 0, b._result = j);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var re = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, De = {
    map: Q,
    forEach: function(b, j, V) {
      Q(
        b,
        function() {
          j.apply(this, arguments);
        },
        V
      );
    },
    count: function(b) {
      var j = 0;
      return Q(b, function() {
        j++;
      }), j;
    },
    toArray: function(b) {
      return Q(b, function(j) {
        return j;
      }) || [];
    },
    only: function(b) {
      if (!Te(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ne.Activity = D, ne.Children = De, ne.Component = J, ne.Fragment = o, ne.Profiler = h, ne.PureComponent = I, ne.StrictMode = s, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return P.H.useMemoCache(b);
    }
  }, ne.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(b, j, V) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var K = U({}, b.props), ae = b.key;
    if (j != null)
      for (se in j.key !== void 0 && (ae = "" + j.key), j)
        !be.call(j, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && j.ref === void 0 || (K[se] = j[se]);
    var se = arguments.length - 2;
    if (se === 1) K.children = V;
    else if (1 < se) {
      for (var pe = Array(se), ye = 0; ye < se; ye++)
        pe[ye] = arguments[ye + 2];
      K.children = pe;
    }
    return _e(b.type, ae, K);
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
  }, ne.createElement = function(b, j, V) {
    var K, ae = {}, se = null;
    if (j != null)
      for (K in j.key !== void 0 && (se = "" + j.key), j)
        be.call(j, K) && K !== "key" && K !== "__self" && K !== "__source" && (ae[K] = j[K]);
    var pe = arguments.length - 2;
    if (pe === 1) ae.children = V;
    else if (1 < pe) {
      for (var ye = Array(pe), Ee = 0; Ee < pe; Ee++)
        ye[Ee] = arguments[Ee + 2];
      ae.children = ye;
    }
    if (b && b.defaultProps)
      for (K in pe = b.defaultProps, pe)
        ae[K] === void 0 && (ae[K] = pe[K]);
    return _e(b, se, ae);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, ne.isValidElement = Te, ne.lazy = function(b) {
    return {
      $$typeof: E,
      _payload: { _status: -1, _result: b },
      _init: W
    };
  }, ne.memo = function(b, j) {
    return {
      $$typeof: S,
      type: b,
      compare: j === void 0 ? null : j
    };
  }, ne.startTransition = function(b) {
    var j = P.T, V = {};
    P.T = V;
    try {
      var K = b(), ae = P.S;
      ae !== null && ae(V, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(te, re);
    } catch (se) {
      re(se);
    } finally {
      j !== null && V.types !== null && (j.types = V.types), P.T = j;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ne.use = function(b) {
    return P.H.use(b);
  }, ne.useActionState = function(b, j, V) {
    return P.H.useActionState(b, j, V);
  }, ne.useCallback = function(b, j) {
    return P.H.useCallback(b, j);
  }, ne.useContext = function(b) {
    return P.H.useContext(b);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(b, j) {
    return P.H.useDeferredValue(b, j);
  }, ne.useEffect = function(b, j) {
    return P.H.useEffect(b, j);
  }, ne.useEffectEvent = function(b) {
    return P.H.useEffectEvent(b);
  }, ne.useId = function() {
    return P.H.useId();
  }, ne.useImperativeHandle = function(b, j, V) {
    return P.H.useImperativeHandle(b, j, V);
  }, ne.useInsertionEffect = function(b, j) {
    return P.H.useInsertionEffect(b, j);
  }, ne.useLayoutEffect = function(b, j) {
    return P.H.useLayoutEffect(b, j);
  }, ne.useMemo = function(b, j) {
    return P.H.useMemo(b, j);
  }, ne.useOptimistic = function(b, j) {
    return P.H.useOptimistic(b, j);
  }, ne.useReducer = function(b, j, V) {
    return P.H.useReducer(b, j, V);
  }, ne.useRef = function(b) {
    return P.H.useRef(b);
  }, ne.useState = function(b) {
    return P.H.useState(b);
  }, ne.useSyncExternalStore = function(b, j, V) {
    return P.H.useSyncExternalStore(
      b,
      j,
      V
    );
  }, ne.useTransition = function() {
    return P.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var Lh;
function Rs() {
  return Lh || (Lh = 1, is.exports = qg()), is.exports;
}
var T = Rs();
var qh = "popstate";
function kg(u = {}) {
  function c(o, s) {
    let { pathname: h, search: d, hash: g } = o.location;
    return ps(
      "",
      { pathname: h, search: d, hash: g },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function r(o, s) {
    return typeof s == "string" ? s : Pa(s);
  }
  return Gg(
    c,
    r,
    null,
    u
  );
}
function Le(u, c) {
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
function ps(u, c, r = null, o) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof c == "string" ? In(c) : c,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: c && c.key || o || Qg()
  };
}
function Pa({
  pathname: u = "/",
  search: c = "",
  hash: r = ""
}) {
  return c && c !== "?" && (u += c.charAt(0) === "?" ? c : "?" + c), r && r !== "#" && (u += r.charAt(0) === "#" ? r : "#" + r), u;
}
function In(u) {
  let c = {};
  if (u) {
    let r = u.indexOf("#");
    r >= 0 && (c.hash = u.substring(r), u = u.substring(0, r));
    let o = u.indexOf("?");
    o >= 0 && (c.search = u.substring(o), u = u.substring(0, o)), u && (c.pathname = u);
  }
  return c;
}
function Gg(u, c, r, o = {}) {
  let { window: s = document.defaultView, v5Compat: h = !1 } = o, d = s.history, g = "POP", p = null, y = S();
  y == null && (y = 0, d.replaceState({ ...d.state, idx: y }, ""));
  function S() {
    return (d.state || { idx: null }).idx;
  }
  function E() {
    g = "POP";
    let U = S(), Y = U == null ? null : U - y;
    y = U, p && p({ action: g, location: L.location, delta: Y });
  }
  function D(U, Y) {
    g = "PUSH";
    let J = ps(L.location, U, Y);
    y = S() + 1;
    let Z = kh(J, y), I = L.createHref(J);
    try {
      d.pushState(Z, "", I);
    } catch (le) {
      if (le instanceof DOMException && le.name === "DataCloneError")
        throw le;
      s.location.assign(I);
    }
    h && p && p({ action: g, location: L.location, delta: 1 });
  }
  function G(U, Y) {
    g = "REPLACE";
    let J = ps(L.location, U, Y);
    y = S();
    let Z = kh(J, y), I = L.createHref(J);
    d.replaceState(Z, "", I), h && p && p({ action: g, location: L.location, delta: 0 });
  }
  function x(U) {
    return Yg(U);
  }
  let L = {
    get action() {
      return g;
    },
    get location() {
      return u(s, d);
    },
    listen(U) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(qh, E), p = U, () => {
        s.removeEventListener(qh, E), p = null;
      };
    },
    createHref(U) {
      return c(s, U);
    },
    createURL: x,
    encodeLocation(U) {
      let Y = x(U);
      return {
        pathname: Y.pathname,
        search: Y.search,
        hash: Y.hash
      };
    },
    push: D,
    replace: G,
    go(U) {
      return d.go(U);
    }
  };
  return L;
}
function Yg(u, c = !1) {
  let r = "http://localhost";
  typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(r, "No window.location.(origin|href) available to create URL");
  let o = typeof u == "string" ? u : Pa(u);
  return o = o.replace(/ $/, "%20"), !c && o.startsWith("//") && (o = r + o), new URL(o, r);
}
function mm(u, c, r = "/") {
  return Vg(u, c, r, !1);
}
function Vg(u, c, r, o) {
  let s = typeof c == "string" ? In(c) : c, h = ml(s.pathname || "/", r);
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
      o
    );
  }
  return g;
}
function ym(u, c = [], r = [], o = "", s = !1) {
  let h = (d, g, p = s, y) => {
    let S = {
      relativePath: y === void 0 ? d.path || "" : y,
      caseSensitive: d.caseSensitive === !0,
      childrenIndex: g,
      route: d
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(o) && p)
        return;
      Le(
        S.relativePath.startsWith(o),
        `Absolute route path "${S.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(o.length);
    }
    let E = hl([o, S.relativePath]), D = r.concat(S);
    d.children && d.children.length > 0 && (Le(
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
  let [r, ...o] = c, s = r.endsWith("?"), h = r.replace(/\?$/, "");
  if (o.length === 0)
    return s ? [h, ""] : [h];
  let d = gm(o.join("/")), g = [];
  return g.push(
    ...d.map(
      (p) => p === "" ? h : [h, p].join("/")
    )
  ), s && g.push(...d), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function Jg(u) {
  u.sort(
    (c, r) => c.score !== r.score ? r.score - c.score : Pg(
      c.routesMeta.map((o) => o.childrenIndex),
      r.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Xg = /^:[\w-]+$/, Zg = 3, Kg = 2, Fg = 1, Wg = 10, Ig = -2, Qh = (u) => u === "*";
function $g(u, c) {
  let r = u.split("/"), o = r.length;
  return r.some(Qh) && (o += Ig), c && (o += Kg), r.filter((s) => !Qh(s)).reduce(
    (s, h) => s + (Xg.test(h) ? Zg : h === "" ? Fg : Wg),
    o
  );
}
function Pg(u, c) {
  return u.length === c.length && u.slice(0, -1).every((o, s) => o === c[s]) ? (
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
  let { routesMeta: o } = u, s = {}, h = "/", d = [];
  for (let g = 0; g < o.length; ++g) {
    let p = o[g], y = g === o.length - 1, S = h === "/" ? c : c.slice(h.length) || "/", E = Mi(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      S
    ), D = p.route;
    if (!E && y && r && !o[o.length - 1].route.index && (E = Mi(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      S
    )), !E)
      return null;
    Object.assign(s, E.params), d.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: hl([h, E.pathname]),
      pathnameBase: ip(
        hl([h, E.pathnameBase])
      ),
      route: D
    }), E.pathnameBase !== "/" && (h = hl([h, E.pathnameBase]));
  }
  return d;
}
function Mi(u, c) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [r, o] = tp(
    u.path,
    u.caseSensitive,
    u.end
  ), s = c.match(r);
  if (!s) return null;
  let h = s[0], d = h.replace(/(.)\/+$/, "$1"), g = s.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: S, isOptional: E }, D) => {
        if (S === "*") {
          let x = g[D] || "";
          d = h.slice(0, h.length - x.length).replace(/(.)\/+$/, "$1");
        }
        const G = g[D];
        return E && !G ? y[S] = void 0 : y[S] = (G || "").replace(/%2F/g, "/"), y;
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
  let o = [], s = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, g, p) => (o.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (o.push({ paramName: "*" }), s += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : u !== "" && u !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, c ? void 0 : "i"), o];
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
function ml(u, c) {
  if (c === "/") return u;
  if (!u.toLowerCase().startsWith(c.toLowerCase()))
    return null;
  let r = c.endsWith("/") ? c.length - 1 : c.length, o = u.charAt(r);
  return o && o !== "/" ? null : u.slice(r) || "/";
}
var pm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, np = (u) => pm.test(u);
function ap(u, c = "/") {
  let {
    pathname: r,
    search: o = "",
    hash: s = ""
  } = typeof u == "string" ? In(u) : u, h;
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
    search: cp(o),
    hash: rp(s)
  };
}
function Gh(u, c) {
  let r = c.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((s) => {
    s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
  }), r.length > 1 ? r.join("/") : "/";
}
function cs(u, c, r, o) {
  return `Cannot include a '${u}' character in a manually specified \`to.${c}\` field [${JSON.stringify(
    o
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
    (r, o) => o === c.length - 1 ? r.pathname : r.pathnameBase
  );
}
function Sm(u, c, r, o = !1) {
  let s;
  typeof u == "string" ? s = In(u) : (s = { ...u }, Le(
    !s.pathname || !s.pathname.includes("?"),
    cs("?", "pathname", "search", s)
  ), Le(
    !s.pathname || !s.pathname.includes("#"),
    cs("#", "pathname", "hash", s)
  ), Le(
    !s.search || !s.search.includes("#"),
    cs("#", "search", "hash", s)
  ));
  let h = u === "" || s.pathname === "", d = h ? "/" : s.pathname, g;
  if (d == null)
    g = r;
  else {
    let E = c.length - 1;
    if (!o && d.startsWith("..")) {
      let D = d.split("/");
      for (; D[0] === ".."; )
        D.shift(), E -= 1;
      s.pathname = D.join("/");
    }
    g = E >= 0 ? c[E] : "/";
  }
  let p = ap(s, g), y = d && d !== "/" && d.endsWith("/"), S = (h || d === ".") && r.endsWith("/");
  return !p.pathname.endsWith("/") && (y || S) && (p.pathname += "/"), p;
}
var hl = (u) => u.join("/").replace(/\/\/+/g, "/"), ip = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), cp = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, rp = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, sp = class {
  constructor(u, c, r, o = !1) {
    this.status = u, this.statusText = c || "", this.internal = o, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function op(u) {
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
  let o = r, s = !1;
  if (bm)
    try {
      let h = new URL(window.location.href), d = r.startsWith("//") ? new URL(h.protocol + r) : new URL(r), g = ml(d.pathname, c);
      d.origin === h.origin && g != null ? r = g + d.search + d.hash : s = !0;
    } catch {
      kt(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: s,
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
var $n = T.createContext(null);
$n.displayName = "DataRouter";
var Bi = T.createContext(null);
Bi.displayName = "DataRouterState";
var hp = T.createContext(!1), Rm = T.createContext({
  isTransitioning: !1
});
Rm.displayName = "ViewTransition";
var mp = T.createContext(
  /* @__PURE__ */ new Map()
);
mp.displayName = "Fetchers";
var yp = T.createContext(null);
yp.displayName = "Await";
var Ht = T.createContext(
  null
);
Ht.displayName = "Navigation";
var eu = T.createContext(
  null
);
eu.displayName = "Location";
var yl = T.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
yl.displayName = "Route";
var xs = T.createContext(null);
xs.displayName = "RouteError";
var xm = "REACT_ROUTER_ERROR", gp = "REDIRECT", pp = "ROUTE_ERROR_RESPONSE";
function vp(u) {
  if (u.startsWith(`${xm}:${gp}:{`))
    try {
      let c = JSON.parse(u.slice(28));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.location == "string" && typeof c.reloadDocument == "boolean" && typeof c.replace == "boolean")
        return c;
    } catch {
    }
}
function Sp(u) {
  if (u.startsWith(
    `${xm}:${pp}:{`
  ))
    try {
      let c = JSON.parse(u.slice(40));
      if (typeof c == "object" && c && typeof c.status == "number" && typeof c.statusText == "string")
        return new sp(
          c.status,
          c.statusText,
          c.data
        );
    } catch {
    }
}
function bp(u, { relative: c } = {}) {
  Le(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: o } = T.useContext(Ht), { hash: s, pathname: h, search: d } = lu(u, { relative: c }), g = h;
  return r !== "/" && (g = h === "/" ? r : hl([r, h])), o.createHref({ pathname: g, search: d, hash: s });
}
function tu() {
  return T.useContext(eu) != null;
}
function on() {
  return Le(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), T.useContext(eu).location;
}
var Tm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Om(u) {
  T.useContext(Ht).static || T.useLayoutEffect(u);
}
function Ap() {
  let { isDataRoute: u } = T.useContext(yl);
  return u ? Bp() : Ep();
}
function Ep() {
  Le(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = T.useContext($n), { basename: c, navigator: r } = T.useContext(Ht), { matches: o } = T.useContext(yl), { pathname: s } = on(), h = JSON.stringify(vm(o)), d = T.useRef(!1);
  return Om(() => {
    d.current = !0;
  }), T.useCallback(
    (p, y = {}) => {
      if (kt(d.current, Tm), !d.current) return;
      if (typeof p == "number") {
        r.go(p);
        return;
      }
      let S = Sm(
        p,
        JSON.parse(h),
        s,
        y.relative === "path"
      );
      u == null && c !== "/" && (S.pathname = S.pathname === "/" ? c : hl([c, S.pathname])), (y.replace ? r.replace : r.push)(
        S,
        y.state,
        y
      );
    },
    [
      c,
      r,
      h,
      s,
      u
    ]
  );
}
T.createContext(null);
function lu(u, { relative: c } = {}) {
  let { matches: r } = T.useContext(yl), { pathname: o } = on(), s = JSON.stringify(vm(r));
  return T.useMemo(
    () => Sm(
      u,
      JSON.parse(s),
      o,
      c === "path"
    ),
    [u, s, o, c]
  );
}
function Rp(u, c) {
  return Cm(u, c);
}
function Cm(u, c, r, o, s) {
  Le(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h } = T.useContext(Ht), { matches: d } = T.useContext(yl), g = d[d.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", S = g ? g.pathnameBase : "/", E = g && g.route;
  {
    let J = E && E.path || "";
    zm(
      y,
      !E || J.endsWith("*") || J.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J === "/" ? "*" : `${J}/*`}">.`
    );
  }
  let D = on(), G;
  if (c) {
    let J = typeof c == "string" ? In(c) : c;
    Le(
      S === "/" || J.pathname?.startsWith(S),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${J.pathname}" was given in the \`location\` prop.`
    ), G = J;
  } else
    G = D;
  let x = G.pathname || "/", L = x;
  if (S !== "/") {
    let J = S.replace(/^\//, "").split("/");
    L = "/" + x.replace(/^\//, "").split("/").slice(J.length).join("/");
  }
  let U = mm(u, { pathname: L });
  kt(
    E || U != null,
    `No routes matched location "${G.pathname}${G.search}${G.hash}" `
  ), kt(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Y = wp(
    U && U.map(
      (J) => Object.assign({}, J, {
        params: Object.assign({}, p, J.params),
        pathname: hl([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          h.encodeLocation ? h.encodeLocation(
            J.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : J.pathname
        ]),
        pathnameBase: J.pathnameBase === "/" ? S : hl([
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
    o,
    s
  );
  return c && Y ? /* @__PURE__ */ T.createElement(
    eu.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...G
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    Y
  ) : Y;
}
function xp() {
  let u = Up(), c = op(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), r = u instanceof Error ? u.stack : null, o = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: o }, h = { padding: "2px 4px", backgroundColor: o }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), d = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ T.createElement("code", { style: h }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ T.createElement("code", { style: h }, "errorElement"), " prop on your route.")), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", { style: { fontStyle: "italic" } }, c), r ? /* @__PURE__ */ T.createElement("pre", { style: s }, r) : null, d);
}
var Tp = /* @__PURE__ */ T.createElement(xp, null), wm = class extends T.Component {
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
    let c = u !== void 0 ? /* @__PURE__ */ T.createElement(yl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ T.createElement(
      xs.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ T.createElement(Op, { error: u }, c) : c;
  }
};
wm.contextType = hp;
var rs = /* @__PURE__ */ new WeakMap();
function Op({
  children: u,
  error: c
}) {
  let { basename: r } = T.useContext(Ht);
  if (typeof c == "object" && c && "digest" in c && typeof c.digest == "string") {
    let o = vp(c.digest);
    if (o) {
      let s = rs.get(c);
      if (s) throw s;
      let h = Am(o.location, r);
      if (bm && !rs.get(c))
        if (h.isExternal || o.reloadDocument)
          window.location.href = h.absoluteURL || h.to;
        else {
          const d = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(h.to, {
              replace: o.replace
            })
          );
          throw rs.set(c, d), d;
        }
      return /* @__PURE__ */ T.createElement(
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
  let o = T.useContext($n);
  return o && o.static && o.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = c.route.id), /* @__PURE__ */ T.createElement(yl.Provider, { value: u }, r);
}
function wp(u, c = [], r = null, o = null, s = null) {
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
    Le(
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
        let { loaderData: D, errors: G } = r, x = E.route.loader && !D.hasOwnProperty(E.route.id) && (!G || G[E.route.id] === void 0);
        if (E.route.lazy || x) {
          g = !0, p >= 0 ? h = h.slice(0, p + 1) : h = [h[0]];
          break;
        }
      }
    }
  let y = r && o ? (S, E) => {
    o(S, {
      location: r.location,
      params: r.matches?.[0]?.params ?? {},
      unstable_pattern: fp(r.matches),
      errorInfo: E
    });
  } : void 0;
  return h.reduceRight(
    (S, E, D) => {
      let G, x = !1, L = null, U = null;
      r && (G = d && E.route.id ? d[E.route.id] : void 0, L = E.route.errorElement || Tp, g && (p < 0 && D === 0 ? (zm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), x = !0, U = null) : p === D && (x = !0, U = E.route.hydrateFallbackElement || null)));
      let Y = c.concat(h.slice(0, D + 1)), J = () => {
        let Z;
        return G ? Z = L : x ? Z = U : E.route.Component ? Z = /* @__PURE__ */ T.createElement(E.route.Component, null) : E.route.element ? Z = E.route.element : Z = S, /* @__PURE__ */ T.createElement(
          Cp,
          {
            match: E,
            routeContext: {
              outlet: S,
              matches: Y,
              isDataRoute: r != null
            },
            children: Z
          }
        );
      };
      return r && (E.route.ErrorBoundary || E.route.errorElement || D === 0) ? /* @__PURE__ */ T.createElement(
        wm,
        {
          location: r.location,
          revalidation: r.revalidation,
          component: L,
          error: G,
          children: J(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
          onError: y
        }
      ) : J();
    },
    null
  );
}
function Ts(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zp(u) {
  let c = T.useContext($n);
  return Le(c, Ts(u)), c;
}
function Dp(u) {
  let c = T.useContext(Bi);
  return Le(c, Ts(u)), c;
}
function Mp(u) {
  let c = T.useContext(yl);
  return Le(c, Ts(u)), c;
}
function Os(u) {
  let c = Mp(u), r = c.matches[c.matches.length - 1];
  return Le(
    r.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Np() {
  return Os(
    "useRouteId"
    /* UseRouteId */
  );
}
function Up() {
  let u = T.useContext(xs), c = Dp(
    "useRouteError"
    /* UseRouteError */
  ), r = Os(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : c.errors?.[r];
}
function Bp() {
  let { router: u } = zp(
    "useNavigate"
    /* UseNavigateStable */
  ), c = Os(
    "useNavigate"
    /* UseNavigateStable */
  ), r = T.useRef(!1);
  return Om(() => {
    r.current = !0;
  }), T.useCallback(
    async (s, h = {}) => {
      kt(r.current, Tm), r.current && (typeof s == "number" ? await u.navigate(s) : await u.navigate(s, { fromRouteId: c, ...h }));
    },
    [u, c]
  );
}
var Yh = {};
function zm(u, c, r) {
  !c && !Yh[u] && (Yh[u] = !0, kt(!1, r));
}
T.memo(jp);
function jp({
  routes: u,
  future: c,
  state: r,
  onError: o
}) {
  return Cm(u, void 0, r, o, c);
}
function Dm(u) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Hp({
  basename: u = "/",
  children: c = null,
  location: r,
  navigationType: o = "POP",
  navigator: s,
  static: h = !1,
  unstable_useTransitions: d
}) {
  Le(
    !tu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = T.useMemo(
    () => ({
      basename: g,
      navigator: s,
      static: h,
      unstable_useTransitions: d,
      future: {}
    }),
    [g, s, h, d]
  );
  typeof r == "string" && (r = In(r));
  let {
    pathname: y = "/",
    search: S = "",
    hash: E = "",
    state: D = null,
    key: G = "default"
  } = r, x = T.useMemo(() => {
    let L = ml(y, g);
    return L == null ? null : {
      location: {
        pathname: L,
        search: S,
        hash: E,
        state: D,
        key: G
      },
      navigationType: o
    };
  }, [g, y, S, E, D, G, o]);
  return kt(
    x != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${S}${E}" because it does not start with the basename, so the <Router> won't render anything.`
  ), x == null ? null : /* @__PURE__ */ T.createElement(Ht.Provider, { value: p }, /* @__PURE__ */ T.createElement(eu.Provider, { children: c, value: x }));
}
function _p({
  children: u,
  location: c
}) {
  return Rp(vs(u), c);
}
function vs(u, c = []) {
  let r = [];
  return T.Children.forEach(u, (o, s) => {
    if (!T.isValidElement(o))
      return;
    let h = [...c, s];
    if (o.type === T.Fragment) {
      r.push.apply(
        r,
        vs(o.props.children, h)
      );
      return;
    }
    Le(
      o.type === Dm,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: o.props.id || h.join("-"),
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
    o.props.children && (d.children = vs(
      o.props.children,
      h
    )), r.push(d);
  }), r;
}
var Oi = "get", Ci = "application/x-www-form-urlencoded";
function ji(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Lp(u) {
  return ji(u) && u.tagName.toLowerCase() === "button";
}
function qp(u) {
  return ji(u) && u.tagName.toLowerCase() === "form";
}
function kp(u) {
  return ji(u) && u.tagName.toLowerCase() === "input";
}
function Qp(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function Gp(u, c) {
  return u.button === 0 && // Ignore everything but left clicks
  (!c || c === "_self") && // Let browser handle "target=_blank" etc.
  !Qp(u);
}
var xi = null;
function Yp() {
  if (xi === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), xi = !1;
    } catch {
      xi = !0;
    }
  return xi;
}
var Vp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ss(u) {
  return u != null && !Vp.has(u) ? (kt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ci}"`
  ), null) : u;
}
function Jp(u, c) {
  let r, o, s, h, d;
  if (qp(u)) {
    let g = u.getAttribute("action");
    o = g ? ml(g, c) : null, r = u.getAttribute("method") || Oi, s = ss(u.getAttribute("enctype")) || Ci, h = new FormData(u);
  } else if (Lp(u) || kp(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (o = p ? ml(p, c) : null, r = u.getAttribute("formmethod") || g.getAttribute("method") || Oi, s = ss(u.getAttribute("formenctype")) || ss(g.getAttribute("enctype")) || Ci, h = new FormData(g, u), !Yp()) {
      let { name: y, type: S, value: E } = u;
      if (S === "image") {
        let D = y ? `${y}.` : "";
        h.append(`${D}x`, "0"), h.append(`${D}y`, "0");
      } else y && h.append(y, E);
    }
  } else {
    if (ji(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = Oi, o = null, s = Ci, d = u;
  }
  return h && s === "text/plain" && (d = h, h = void 0), { action: o, method: r.toLowerCase(), encType: s, formData: h, body: d };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Cs(u, c) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(c);
}
function Xp(u, c, r) {
  let o = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return o.pathname === "/" ? o.pathname = `_root.${r}` : c && ml(o.pathname, c) === "/" ? o.pathname = `${c.replace(/\/$/, "")}/_root.${r}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${r}`, o;
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
  let o = await Promise.all(
    u.map(async (s) => {
      let h = c.routes[s.route.id];
      if (h) {
        let d = await Zp(h, r);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Pp(
    o.flat(1).filter(Kp).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Vh(u, c, r, o, s, h) {
  let d = (p, y) => r[y] ? p.route.id !== r[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    r[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[y].route.path?.endsWith("*") && r[y].params["*"] !== p.params["*"]
  );
  return h === "assets" ? c.filter(
    (p, y) => d(p, y) || g(p, y)
  ) : h === "data" ? c.filter((p, y) => {
    let S = o.routes[p.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (d(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let E = p.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
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
    u.map((o) => {
      let s = c.routes[o.route.id];
      if (!s) return [];
      let h = [s.module];
      return s.clientActionModule && (h = h.concat(s.clientActionModule)), s.clientLoaderModule && (h = h.concat(s.clientLoaderModule)), r && s.hydrateFallbackModule && (h = h.concat(s.hydrateFallbackModule)), s.imports && (h = h.concat(s.imports)), h;
    }).flat(1)
  );
}
function Ip(u) {
  return [...new Set(u)];
}
function $p(u) {
  let c = {}, r = Object.keys(u).sort();
  for (let o of r)
    c[o] = u[o];
  return c;
}
function Pp(u, c) {
  let r = /* @__PURE__ */ new Set();
  return new Set(c), u.reduce((o, s) => {
    let h = JSON.stringify($p(s));
    return r.has(h) || (r.add(h), o.push({ key: h, link: s })), o;
  }, []);
}
function Mm() {
  let u = T.useContext($n);
  return Cs(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function e1() {
  let u = T.useContext(Bi);
  return Cs(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var ws = T.createContext(void 0);
ws.displayName = "FrameworkContext";
function Nm() {
  let u = T.useContext(ws);
  return Cs(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function t1(u, c) {
  let r = T.useContext(ws), [o, s] = T.useState(!1), [h, d] = T.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: S, onTouchStart: E } = c, D = T.useRef(null);
  T.useEffect(() => {
    if (u === "render" && d(!0), u === "viewport") {
      let L = (Y) => {
        Y.forEach((J) => {
          d(J.isIntersecting);
        });
      }, U = new IntersectionObserver(L, { threshold: 0.5 });
      return D.current && U.observe(D.current), () => {
        U.disconnect();
      };
    }
  }, [u]), T.useEffect(() => {
    if (o) {
      let L = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [o]);
  let G = () => {
    s(!0);
  }, x = () => {
    s(!1), d(!1);
  };
  return r ? u !== "intent" ? [h, D, {}] : [
    h,
    D,
    {
      onFocus: Fa(g, G),
      onBlur: Fa(p, x),
      onMouseEnter: Fa(y, G),
      onMouseLeave: Fa(S, x),
      onTouchStart: Fa(E, G)
    }
  ] : [!1, D, {}];
}
function Fa(u, c) {
  return (r) => {
    u && u(r), r.defaultPrevented || c(r);
  };
}
function l1({ page: u, ...c }) {
  let { router: r } = Mm(), o = T.useMemo(
    () => mm(r.routes, u, r.basename),
    [r.routes, u, r.basename]
  );
  return o ? /* @__PURE__ */ T.createElement(a1, { page: u, matches: o, ...c }) : null;
}
function n1(u) {
  let { manifest: c, routeModules: r } = Nm(), [o, s] = T.useState([]);
  return T.useEffect(() => {
    let h = !1;
    return Fp(u, c, r).then(
      (d) => {
        h || s(d);
      }
    ), () => {
      h = !0;
    };
  }, [u, c, r]), o;
}
function a1({
  page: u,
  matches: c,
  ...r
}) {
  let o = on(), { manifest: s, routeModules: h } = Nm(), { basename: d } = Mm(), { loaderData: g, matches: p } = e1(), y = T.useMemo(
    () => Vh(
      u,
      c,
      p,
      s,
      o,
      "data"
    ),
    [u, c, p, s, o]
  ), S = T.useMemo(
    () => Vh(
      u,
      c,
      p,
      s,
      o,
      "assets"
    ),
    [u, c, p, s, o]
  ), E = T.useMemo(() => {
    if (u === o.pathname + o.search + o.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), L = !1;
    if (c.forEach((Y) => {
      let J = s.routes[Y.route.id];
      !J || !J.hasLoader || (!y.some((Z) => Z.route.id === Y.route.id) && Y.route.id in g && h[Y.route.id]?.shouldRevalidate || J.hasClientLoader ? L = !0 : x.add(Y.route.id));
    }), x.size === 0)
      return [];
    let U = Xp(u, d, "data");
    return L && x.size > 0 && U.searchParams.set(
      "_routes",
      c.filter((Y) => x.has(Y.route.id)).map((Y) => Y.route.id).join(",")
    ), [U.pathname + U.search];
  }, [
    d,
    g,
    o,
    s,
    y,
    c,
    u,
    h
  ]), D = T.useMemo(
    () => Wp(S, s),
    [S, s]
  ), G = n1(S);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, E.map((x) => /* @__PURE__ */ T.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...r })), D.map((x) => /* @__PURE__ */ T.createElement("link", { key: x, rel: "modulepreload", href: x, ...r })), G.map(({ key: x, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ T.createElement("link", { key: x, nonce: r.nonce, ...L })
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
  window: o
}) {
  let s = T.useRef();
  s.current == null && (s.current = kg({ window: o, v5Compat: !0 }));
  let h = s.current, [d, g] = T.useState({
    action: h.action,
    location: h.location
  }), p = T.useCallback(
    (y) => {
      r === !1 ? g(y) : T.startTransition(() => g(y));
    },
    [r]
  );
  return T.useLayoutEffect(() => h.listen(p), [h, p]), /* @__PURE__ */ T.createElement(
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
var Um = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Bm = T.forwardRef(
  function({
    onClick: c,
    discover: r = "render",
    prefetch: o = "none",
    relative: s,
    reloadDocument: h,
    replace: d,
    state: g,
    target: p,
    to: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: D,
    ...G
  }, x) {
    let { basename: L, unstable_useTransitions: U } = T.useContext(Ht), Y = typeof y == "string" && Um.test(y), J = Am(y, L);
    y = J.to;
    let Z = bp(y, { relative: s }), [I, le, oe] = t1(
      o,
      G
    ), te = f1(y, {
      replace: d,
      state: g,
      target: p,
      preventScrollReset: S,
      relative: s,
      viewTransition: E,
      unstable_defaultShouldRevalidate: D,
      unstable_useTransitions: U
    });
    function P(_e) {
      c && c(_e), _e.defaultPrevented || te(_e);
    }
    let be = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ T.createElement(
        "a",
        {
          ...G,
          ...oe,
          href: J.absoluteURL || Z,
          onClick: J.isExternal || h ? c : P,
          ref: u1(x, le),
          target: p,
          "data-discover": !Y && r === "render" ? "true" : void 0
        }
      )
    );
    return I && !Y ? /* @__PURE__ */ T.createElement(T.Fragment, null, be, /* @__PURE__ */ T.createElement(l1, { page: Z })) : be;
  }
);
Bm.displayName = "Link";
var r1 = T.forwardRef(
  function({
    "aria-current": c = "page",
    caseSensitive: r = !1,
    className: o = "",
    end: s = !1,
    style: h,
    to: d,
    viewTransition: g,
    children: p,
    ...y
  }, S) {
    let E = lu(d, { relative: y.relative }), D = on(), G = T.useContext(Bi), { navigator: x, basename: L } = T.useContext(Ht), U = G != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    g1(E) && g === !0, Y = x.encodeLocation ? x.encodeLocation(E).pathname : E.pathname, J = D.pathname, Z = G && G.navigation && G.navigation.location ? G.navigation.location.pathname : null;
    r || (J = J.toLowerCase(), Z = Z ? Z.toLowerCase() : null, Y = Y.toLowerCase()), Z && L && (Z = ml(Z, L) || Z);
    const I = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let le = J === Y || !s && J.startsWith(Y) && J.charAt(I) === "/", oe = Z != null && (Z === Y || !s && Z.startsWith(Y) && Z.charAt(Y.length) === "/"), te = {
      isActive: le,
      isPending: oe,
      isTransitioning: U
    }, P = le ? c : void 0, be;
    typeof o == "function" ? be = o(te) : be = [
      o,
      le ? "active" : null,
      oe ? "pending" : null,
      U ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let _e = typeof h == "function" ? h(te) : h;
    return /* @__PURE__ */ T.createElement(
      Bm,
      {
        ...y,
        "aria-current": P,
        className: be,
        ref: S,
        style: _e,
        to: d,
        viewTransition: g
      },
      typeof p == "function" ? p(te) : p
    );
  }
);
r1.displayName = "NavLink";
var s1 = T.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: c,
    navigate: r,
    reloadDocument: o,
    replace: s,
    state: h,
    method: d = Oi,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: S,
    viewTransition: E,
    unstable_defaultShouldRevalidate: D,
    ...G
  }, x) => {
    let { unstable_useTransitions: L } = T.useContext(Ht), U = m1(), Y = y1(g, { relative: y }), J = d.toLowerCase() === "get" ? "get" : "post", Z = typeof g == "string" && Um.test(g), I = (le) => {
      if (p && p(le), le.defaultPrevented) return;
      le.preventDefault();
      let oe = le.nativeEvent.submitter, te = oe?.getAttribute("formmethod") || d, P = () => U(oe || le.currentTarget, {
        fetcherKey: c,
        method: te,
        navigate: r,
        replace: s,
        state: h,
        relative: y,
        preventScrollReset: S,
        viewTransition: E,
        unstable_defaultShouldRevalidate: D
      });
      L && r !== !1 ? T.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ T.createElement(
      "form",
      {
        ref: x,
        method: J,
        action: Y,
        onSubmit: o ? p : I,
        ...G,
        "data-discover": !Z && u === "render" ? "true" : void 0
      }
    );
  }
);
s1.displayName = "Form";
function o1(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jm(u) {
  let c = T.useContext($n);
  return Le(c, o1(u)), c;
}
function f1(u, {
  target: c,
  replace: r,
  state: o,
  preventScrollReset: s,
  relative: h,
  viewTransition: d,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ap(), S = on(), E = lu(u, { relative: h });
  return T.useCallback(
    (D) => {
      if (Gp(D, c)) {
        D.preventDefault();
        let G = r !== void 0 ? r : Pa(S) === Pa(E), x = () => y(u, {
          replace: G,
          state: o,
          preventScrollReset: s,
          relative: h,
          viewTransition: d,
          unstable_defaultShouldRevalidate: g
        });
        p ? T.startTransition(() => x()) : x();
      }
    },
    [
      S,
      y,
      E,
      r,
      o,
      c,
      u,
      s,
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
  ), { basename: c } = T.useContext(Ht), r = Np(), o = u.fetch, s = u.navigate;
  return T.useCallback(
    async (h, d = {}) => {
      let { action: g, method: p, encType: y, formData: S, body: E } = Jp(
        h,
        c
      );
      if (d.navigate === !1) {
        let D = d.fetcherKey || h1();
        await o(D, r, d.action || g, {
          unstable_defaultShouldRevalidate: d.unstable_defaultShouldRevalidate,
          preventScrollReset: d.preventScrollReset,
          formData: S,
          body: E,
          formMethod: d.method || p,
          formEncType: d.encType || y,
          flushSync: d.flushSync
        });
      } else
        await s(d.action || g, {
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
    [o, s, c, r]
  );
}
function y1(u, { relative: c } = {}) {
  let { basename: r } = T.useContext(Ht), o = T.useContext(yl);
  Le(o, "useFormAction must be used inside a RouteContext");
  let [s] = o.matches.slice(-1), h = { ...lu(u || ".", { relative: c }) }, d = on();
  if (u == null) {
    h.search = d.search;
    let g = new URLSearchParams(h.search), p = g.getAll("index");
    if (p.some((S) => S === "")) {
      g.delete("index"), p.filter((E) => E).forEach((E) => g.append("index", E));
      let S = g.toString();
      h.search = S ? `?${S}` : "";
    }
  }
  return (!u || u === ".") && s.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (h.pathname = h.pathname === "/" ? r : hl([r, h.pathname])), Pa(h);
}
function g1(u, { relative: c } = {}) {
  let r = T.useContext(Rm);
  Le(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = jm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = lu(u, { relative: c });
  if (!r.isTransitioning)
    return !1;
  let h = ml(r.currentLocation.pathname, o) || r.currentLocation.pathname, d = ml(r.nextLocation.pathname, o) || r.nextLocation.pathname;
  return Mi(s.pathname, d) != null || Mi(s.pathname, h) != null;
}
var os = { exports: {} }, nt = {};
var Jh;
function p1() {
  if (Jh) return nt;
  Jh = 1;
  var u = Rs();
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
  var o = {
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
  }, s = /* @__PURE__ */ Symbol.for("react.portal");
  function h(p, y, S) {
    var E = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
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
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, nt.createPortal = function(p, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(c(299));
    return h(p, y, null, S);
  }, nt.flushSync = function(p) {
    var y = d.T, S = o.p;
    try {
      if (d.T = null, o.p = 2, p) return p();
    } finally {
      d.T = y, o.p = S, o.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var S = y.as, E = g(S, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, G = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? o.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: E,
          integrity: D,
          fetchPriority: G
        }
      ) : S === "script" && o.d.X(p, {
        crossOrigin: E,
        integrity: D,
        fetchPriority: G,
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
    return d.H.useFormState(p, y, S);
  }, nt.useFormStatus = function() {
    return d.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Xh;
function v1() {
  if (Xh) return os.exports;
  Xh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), os.exports = p1(), os.exports;
}
var fs = { exports: {} }, Wa = {}, ds = { exports: {} }, hs = {};
var Zh;
function S1() {
  return Zh || (Zh = 1, (function(u) {
    function c(k, q) {
      var Q = k.length;
      k.push(q);
      e: for (; 0 < Q; ) {
        var W = Q - 1 >>> 1, re = k[W];
        if (0 < s(re, q))
          k[W] = q, k[Q] = re, Q = W;
        else break e;
      }
    }
    function r(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var q = k[0], Q = k.pop();
      if (Q !== q) {
        k[0] = Q;
        e: for (var W = 0, re = k.length, De = re >>> 1; W < De; ) {
          var b = 2 * (W + 1) - 1, j = k[b], V = b + 1, K = k[V];
          if (0 > s(j, Q))
            V < re && 0 > s(K, j) ? (k[W] = K, k[V] = Q, W = V) : (k[W] = j, k[b] = Q, W = b);
          else if (V < re && 0 > s(K, Q))
            k[W] = K, k[V] = Q, W = V;
          else break e;
        }
      }
      return q;
    }
    function s(k, q) {
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
    var p = [], y = [], S = 1, E = null, D = 3, G = !1, x = !1, L = !1, U = !1, Y = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function I(k) {
      for (var q = r(y); q !== null; ) {
        if (q.callback === null) o(y);
        else if (q.startTime <= k)
          o(y), q.sortIndex = q.expirationTime, c(p, q);
        else break;
        q = r(y);
      }
    }
    function le(k) {
      if (L = !1, I(k), !x)
        if (r(p) !== null)
          x = !0, oe || (oe = !0, Te());
        else {
          var q = r(y);
          q !== null && Fe(le, q.startTime - k);
        }
    }
    var oe = !1, te = -1, P = 5, be = -1;
    function _e() {
      return U ? !0 : !(u.unstable_now() - be < P);
    }
    function Ne() {
      if (U = !1, oe) {
        var k = u.unstable_now();
        be = k;
        var q = !0;
        try {
          e: {
            x = !1, L && (L = !1, J(te), te = -1), G = !0;
            var Q = D;
            try {
              t: {
                for (I(k), E = r(p); E !== null && !(E.expirationTime > k && _e()); ) {
                  var W = E.callback;
                  if (typeof W == "function") {
                    E.callback = null, D = E.priorityLevel;
                    var re = W(
                      E.expirationTime <= k
                    );
                    if (k = u.unstable_now(), typeof re == "function") {
                      E.callback = re, I(k), q = !0;
                      break t;
                    }
                    E === r(p) && o(p), I(k);
                  } else o(p);
                  E = r(p);
                }
                if (E !== null) q = !0;
                else {
                  var De = r(y);
                  De !== null && Fe(
                    le,
                    De.startTime - k
                  ), q = !1;
                }
              }
              break e;
            } finally {
              E = null, D = Q, G = !1;
            }
            q = void 0;
          }
        } finally {
          q ? Te() : oe = !1;
        }
      }
    }
    var Te;
    if (typeof Z == "function")
      Te = function() {
        Z(Ne);
      };
    else if (typeof MessageChannel < "u") {
      var Oe = new MessageChannel(), Ze = Oe.port2;
      Oe.port1.onmessage = Ne, Te = function() {
        Ze.postMessage(null);
      };
    } else
      Te = function() {
        Y(Ne, 0);
      };
    function Fe(k, q) {
      te = Y(function() {
        k(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, u.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < k ? Math.floor(1e3 / k) : 5;
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
      var W = u.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? W + Q : W) : Q = W, k) {
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
      }, Q > W ? (k.sortIndex = Q, c(y, k), r(p) === null && k === r(y) && (L ? (J(te), te = -1) : L = !0, Fe(le, Q - W))) : (k.sortIndex = re, c(p, k), x || G || (x = !0, oe || (oe = !0, Te()))), k;
    }, u.unstable_shouldYield = _e, u.unstable_wrapCallback = function(k) {
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
  })(hs)), hs;
}
var Kh;
function b1() {
  return Kh || (Kh = 1, ds.exports = S1()), ds.exports;
}
var Fh;
function A1() {
  if (Fh) return Wa;
  Fh = 1;
  var u = {};
  var c = b1(), r = Rs(), o = v1();
  function s(e) {
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
      throw Error(s(188));
  }
  function S(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(s(188));
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
  var D = Object.assign, G = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), oe = /* @__PURE__ */ Symbol.for("react.suspense"), te = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), be = /* @__PURE__ */ Symbol.for("react.lazy"), _e = /* @__PURE__ */ Symbol.for("react.activity"), Ne = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Te = Symbol.iterator;
  function Oe(e) {
    return e === null || typeof e != "object" ? null : (e = Te && e[Te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ze ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case J:
        return "Profiler";
      case Y:
        return "StrictMode";
      case oe:
        return "Suspense";
      case te:
        return "SuspenseList";
      case _e:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case I:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
        case be:
          t = e._payload, e = e._init;
          try {
            return Fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var k = Array.isArray, q = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, W = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, re = [], De = -1;
  function b(e) {
    return { current: e };
  }
  function j(e) {
    0 > De || (e.current = re[De], re[De] = null, De--);
  }
  function V(e, t) {
    De++, re[De] = e.current, e.current = t;
  }
  var K = b(null), ae = b(null), se = b(null), pe = b(null);
  function ye(e, t) {
    switch (V(se, t), V(ae, e), V(K, null), t.nodeType) {
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
    j(K), V(K, e);
  }
  function Ee() {
    j(K), j(ae), j(se);
  }
  function Tt(e) {
    e.memoizedState !== null && V(pe, e);
    var t = K.current, l = uh(t, e.type);
    t !== l && (V(ae, e), V(K, l));
  }
  function Gt(e) {
    ae.current === e && (j(K), j(ae)), pe.current === e && (j(pe), Va._currentValue = W);
  }
  var Kt, ta;
  function Ql(e) {
    if (Kt === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Kt = t && t[1] || "", ta = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kt + e + ta;
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
                } catch (N) {
                  var z = N;
                }
                Reflect.construct(e, [], _);
              } else {
                try {
                  _.call();
                } catch (N) {
                  z = N;
                }
                e.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (N) {
                z = N;
              }
              (_ = e()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (N) {
            if (N && z && typeof N.stack == "string")
              return [N.stack, z.stack];
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
      Gi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Ql(l) : "";
  }
  function m0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ql(e.type);
      case 16:
        return Ql("Lazy");
      case 13:
        return e.child !== t && t !== null ? Ql("Suspense Fallback") : Ql("Suspense");
      case 19:
        return Ql("SuspenseList");
      case 0:
      case 15:
        return Yi(e.type, !1);
      case 11:
        return Yi(e.type.render, !1);
      case 1:
        return Yi(e.type, !0);
      case 31:
        return Ql("Activity");
      default:
        return "";
    }
  }
  function Us(e) {
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
  var Vi = Object.prototype.hasOwnProperty, Ji = c.unstable_scheduleCallback, Xi = c.unstable_cancelCallback, y0 = c.unstable_shouldYield, g0 = c.unstable_requestPaint, yt = c.unstable_now, p0 = c.unstable_getCurrentPriorityLevel, Bs = c.unstable_ImmediatePriority, js = c.unstable_UserBlockingPriority, cu = c.unstable_NormalPriority, v0 = c.unstable_LowPriority, Hs = c.unstable_IdlePriority, S0 = c.log, b0 = c.unstable_setDisableYieldValue, la = null, gt = null;
  function gl(e) {
    if (typeof S0 == "function" && b0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(la, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : R0, A0 = Math.log, E0 = Math.LN2;
  function R0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (A0(e) / E0 | 0) | 0;
  }
  var ru = 256, su = 262144, ou = 4194304;
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
  function na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function x0(e, t) {
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
  function _s() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Zi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function aa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function T0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var B = 31 - pt(l), _ = 1 << B;
      m[B] = 0, v[B] = -1;
      var z = C[B];
      if (z !== null)
        for (C[B] = null, B = 0; B < z.length; B++) {
          var N = z[B];
          N !== null && (N.lane &= -536870913);
        }
      l &= ~_;
    }
    n !== 0 && Ls(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Ls(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function qs(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function ks(e, t) {
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
  function Qs() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : wh(e.type));
  }
  function Gs(e, t) {
    var l = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = l;
    }
  }
  var pl = Math.random().toString(36).slice(2), $e = "__reactFiber$" + pl, it = "__reactProps$" + pl, fn = "__reactContainer$" + pl, Wi = "__reactEvents$" + pl, O0 = "__reactListeners$" + pl, C0 = "__reactHandles$" + pl, Ys = "__reactResources$" + pl, ua = "__reactMarker$" + pl;
  function Ii(e) {
    delete e[$e], delete e[it], delete e[Wi], delete e[O0], delete e[C0];
  }
  function dn(e) {
    var t = e[$e];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[fn] || l[$e]) {
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
  function hn(e) {
    if (e = e[$e] || e[fn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ia(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function mn(e) {
    var t = e[Ys];
    return t || (t = e[Ys] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function We(e) {
    e[ua] = !0;
  }
  var Vs = /* @__PURE__ */ new Set(), Js = {};
  function Yl(e, t) {
    yn(e, t), yn(e + "Capture", t);
  }
  function yn(e, t) {
    for (Js[e] = t, e = 0; e < t.length; e++)
      Vs.add(t[e]);
  }
  var w0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Xs = {}, Zs = {};
  function z0(e) {
    return Vi.call(Zs, e) ? !0 : Vi.call(Xs, e) ? !1 : w0.test(e) ? Zs[e] = !0 : (Xs[e] = !0, !1);
  }
  function du(e, t, l) {
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
  function Ft(e, t, l, n) {
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
  function Ot(e) {
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
  function Ks(e) {
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
  function $i(e) {
    if (!e._valueTracker) {
      var t = Ks(e) ? "checked" : "value";
      e._valueTracker = D0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Fs(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = Ks(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function mu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var M0 = /[\n"\\]/g;
  function Ct(e) {
    return e.replace(
      M0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pi(e, t, l, n, a, i, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ot(t)) : e.value !== "" + Ot(t) && (e.value = "" + Ot(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? ec(e, f, Ot(t)) : l != null ? ec(e, f, Ot(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Ot(m) : e.removeAttribute("name");
  }
  function Ws(e, t, l, n, a, i, f, m) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        $i(e);
        return;
      }
      l = l != null ? "" + Ot(l) : "", t = t != null ? "" + Ot(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = m ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), $i(e);
  }
  function ec(e, t, l) {
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
      for (l = "" + Ot(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Is(e, t, l) {
    if (t != null && (t = "" + Ot(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ot(l) : "";
  }
  function $s(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(s(92));
        if (k(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = Ot(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), $i(e);
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
  var N0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ps(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || N0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function eo(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && Ps(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Ps(e, i, t[i]);
  }
  function tc(e) {
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
  function yu(e) {
    return B0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Wt() {
  }
  var lc = null;
  function nc(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var vn = null, Sn = null;
  function to(e) {
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
              'input[name="' + Ct(
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
              n = l[t], n.form === e.form && Fs(n);
          }
          break e;
        case "textarea":
          Is(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && gn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ac = !1;
  function lo(e, t, l) {
    if (ac) return e(t, l);
    ac = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ac = !1, (vn !== null || Sn !== null) && (li(), vn && (t = vn, e = Sn, Sn = vn = null, to(t), e)))
        for (t = 0; t < e.length; t++) to(e[t]);
    }
  }
  function ca(e, t) {
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
  var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uc = !1;
  if (It)
    try {
      var ra = {};
      Object.defineProperty(ra, "passive", {
        get: function() {
          uc = !0;
        }
      }), window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
    } catch {
      uc = !1;
    }
  var vl = null, ic = null, gu = null;
  function no() {
    if (gu) return gu;
    var e, t = ic, l = t.length, n, a = "value" in vl ? vl.value : vl.textContent, i = a.length;
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
  function ao() {
    return !1;
  }
  function ct(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(i) : i[m]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? vu : ao, this.isPropagationStopped = ao, this;
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
  }, Su = ct(Vl), sa = D({}, Vl, { view: 0, detail: 0 }), j0 = ct(sa), cc, rc, oa, bu = D({}, sa, {
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
      return "movementX" in e ? e.movementX : (e !== oa && (oa && e.type === "mousemove" ? (cc = e.screenX - oa.screenX, rc = e.screenY - oa.screenY) : rc = cc = 0, oa = e), cc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : rc;
    }
  }), uo = ct(bu), H0 = D({}, bu, { dataTransfer: 0 }), _0 = ct(H0), L0 = D({}, sa, { relatedTarget: 0 }), sc = ct(L0), q0 = D({}, Vl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), k0 = ct(q0), Q0 = D({}, Vl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), G0 = ct(Q0), Y0 = D({}, Vl, { data: 0 }), io = ct(Y0), V0 = {
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
  var K0 = D({}, sa, {
    key: function(e) {
      if (e.key) {
        var t = V0[e.key] || e.key;
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
    getModifierState: oc,
    charCode: function(e) {
      return e.type === "keypress" ? pu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), F0 = ct(K0), W0 = D({}, bu, {
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
  }), co = ct(W0), I0 = D({}, sa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oc
  }), $0 = ct(I0), P0 = D({}, Vl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ey = ct(P0), ty = D({}, bu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ly = ct(ty), ny = D({}, Vl, {
    newState: 0,
    oldState: 0
  }), ay = ct(ny), uy = [9, 13, 27, 32], fc = It && "CompositionEvent" in window, fa = null;
  It && "documentMode" in document && (fa = document.documentMode);
  var iy = It && "TextEvent" in window && !fa, ro = It && (!fc || fa && 8 < fa && 11 >= fa), so = " ", oo = !1;
  function fo(e, t) {
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
  function ho(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var bn = !1;
  function cy(e, t) {
    switch (e) {
      case "compositionend":
        return ho(t);
      case "keypress":
        return t.which !== 32 ? null : (oo = !0, so);
      case "textInput":
        return e = t.data, e === so && oo ? null : e;
      default:
        return null;
    }
  }
  function ry(e, t) {
    if (bn)
      return e === "compositionend" || !fc && fo(e, t) ? (e = no(), gu = ic = vl = null, bn = !1, e) : null;
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
        return ro && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sy = {
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
  function mo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sy[e.type] : t === "textarea";
  }
  function yo(e, t, l, n) {
    vn ? Sn ? Sn.push(n) : Sn = [n] : vn = n, t = si(t, "onChange"), 0 < t.length && (l = new Su(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var da = null, ha = null;
  function oy(e) {
    $d(e, 0);
  }
  function Au(e) {
    var t = ia(e);
    if (Fs(t)) return e;
  }
  function go(e, t) {
    if (e === "change") return t;
  }
  var po = !1;
  if (It) {
    var dc;
    if (It) {
      var hc = "oninput" in document;
      if (!hc) {
        var vo = document.createElement("div");
        vo.setAttribute("oninput", "return;"), hc = typeof vo.oninput == "function";
      }
      dc = hc;
    } else dc = !1;
    po = dc && (!document.documentMode || 9 < document.documentMode);
  }
  function So() {
    da && (da.detachEvent("onpropertychange", bo), ha = da = null);
  }
  function bo(e) {
    if (e.propertyName === "value" && Au(ha)) {
      var t = [];
      yo(
        t,
        ha,
        e,
        nc(e)
      ), lo(oy, t);
    }
  }
  function fy(e, t, l) {
    e === "focusin" ? (So(), da = t, ha = l, da.attachEvent("onpropertychange", bo)) : e === "focusout" && So();
  }
  function dy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Au(ha);
  }
  function hy(e, t) {
    if (e === "click") return Au(t);
  }
  function my(e, t) {
    if (e === "input" || e === "change")
      return Au(t);
  }
  function yy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : yy;
  function ma(e, t) {
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
  function Ao(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Eo(e, t) {
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
  function Ro(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ro(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function xo(e) {
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
  function mc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gy = It && "documentMode" in document && 11 >= document.documentMode, An = null, yc = null, ya = null, gc = !1;
  function To(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    gc || An == null || An !== mu(n) || (n = An, "selectionStart" in n && mc(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ya && ma(ya, n) || (ya = n, n = si(yc, "onSelect"), 0 < n.length && (t = new Su(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = An)));
  }
  function Jl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var En = {
    animationend: Jl("Animation", "AnimationEnd"),
    animationiteration: Jl("Animation", "AnimationIteration"),
    animationstart: Jl("Animation", "AnimationStart"),
    transitionrun: Jl("Transition", "TransitionRun"),
    transitionstart: Jl("Transition", "TransitionStart"),
    transitioncancel: Jl("Transition", "TransitionCancel"),
    transitionend: Jl("Transition", "TransitionEnd")
  }, pc = {}, Oo = {};
  It && (Oo = document.createElement("div").style, "AnimationEvent" in window || (delete En.animationend.animation, delete En.animationiteration.animation, delete En.animationstart.animation), "TransitionEvent" in window || delete En.transitionend.transition);
  function Xl(e) {
    if (pc[e]) return pc[e];
    if (!En[e]) return e;
    var t = En[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Oo)
        return pc[e] = t[l];
    return e;
  }
  var Co = Xl("animationend"), wo = Xl("animationiteration"), zo = Xl("animationstart"), py = Xl("transitionrun"), vy = Xl("transitionstart"), Sy = Xl("transitioncancel"), Do = Xl("transitionend"), Mo = /* @__PURE__ */ new Map(), vc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vc.push("scrollEnd");
  function _t(e, t) {
    Mo.set(e, t), Yl(t, [e]);
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
  }, wt = [], Rn = 0, Sc = 0;
  function Ru() {
    for (var e = Rn, t = Sc = Rn = 0; t < e; ) {
      var l = wt[t];
      wt[t++] = null;
      var n = wt[t];
      wt[t++] = null;
      var a = wt[t];
      wt[t++] = null;
      var i = wt[t];
      if (wt[t++] = null, n !== null && a !== null) {
        var f = n.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), n.pending = a;
      }
      i !== 0 && No(l, a, i);
    }
  }
  function xu(e, t, l, n) {
    wt[Rn++] = e, wt[Rn++] = t, wt[Rn++] = l, wt[Rn++] = n, Sc |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function bc(e, t, l, n) {
    return xu(e, t, l, n), Tu(e);
  }
  function Zl(e, t) {
    return xu(e, null, null, t), Tu(e);
  }
  function No(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Tu(e) {
    if (50 < _a)
      throw _a = 0, zr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var xn = {};
  function by(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function St(e, t, l, n) {
    return new by(e, t, l, n);
  }
  function Ac(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function $t(e, t) {
    var l = e.alternate;
    return l === null ? (l = St(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Uo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ou(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") Ac(e) && (f = 1);
    else if (typeof e == "string")
      f = Tg(
        e,
        l,
        K.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case _e:
          return e = St(31, l, t, a), e.elementType = _e, e.lanes = i, e;
        case U:
          return Kl(l.children, a, i, t);
        case Y:
          f = 8, a |= 24;
          break;
        case J:
          return e = St(12, l, t, a | 2), e.elementType = J, e.lanes = i, e;
        case oe:
          return e = St(13, l, t, a), e.elementType = oe, e.lanes = i, e;
        case te:
          return e = St(19, l, t, a), e.elementType = te, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case I:
                f = 10;
                break e;
              case Z:
                f = 9;
                break e;
              case le:
                f = 11;
                break e;
              case P:
                f = 14;
                break e;
              case be:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = St(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function Kl(e, t, l, n) {
    return e = St(7, e, n, t), e.lanes = l, e;
  }
  function Ec(e, t, l) {
    return e = St(6, e, null, t), e.lanes = l, e;
  }
  function Bo(e) {
    var t = St(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Rc(e, t, l) {
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
  var jo = /* @__PURE__ */ new WeakMap();
  function zt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = jo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Us(t)
      }, jo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Us(t)
    };
  }
  var Tn = [], On = 0, Cu = null, ga = 0, Dt = [], Mt = 0, Sl = null, Yt = 1, Vt = "";
  function Pt(e, t) {
    Tn[On++] = ga, Tn[On++] = Cu, Cu = e, ga = t;
  }
  function Ho(e, t, l) {
    Dt[Mt++] = Yt, Dt[Mt++] = Vt, Dt[Mt++] = Sl, Sl = e;
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
  function xc(e) {
    e.return !== null && (Pt(e, 1), Ho(e, 1, 0));
  }
  function Tc(e) {
    for (; e === Cu; )
      Cu = Tn[--On], Tn[On] = null, ga = Tn[--On], Tn[On] = null;
    for (; e === Sl; )
      Sl = Dt[--Mt], Dt[Mt] = null, Vt = Dt[--Mt], Dt[Mt] = null, Yt = Dt[--Mt], Dt[Mt] = null;
  }
  function _o(e, t) {
    Dt[Mt++] = Yt, Dt[Mt++] = Vt, Dt[Mt++] = Sl, Yt = t.id, Vt = t.overflow, Sl = e;
  }
  var Pe = null, Ue = null, ge = !1, bl = null, Nt = !1, Oc = Error(s(519));
  function Al(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw pa(zt(t, e)), Oc;
  }
  function Lo(e) {
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
        for (l = 0; l < qa.length; l++)
          de(qa[l], t);
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
        de("invalid", t), Ws(
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
        de("invalid", t), $s(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || lh(t.textContent, l) ? (n.popover != null && (de("beforetoggle", t), de("toggle", t)), n.onScroll != null && de("scroll", t), n.onScrollEnd != null && de("scrollend", t), n.onClick != null && (t.onclick = Wt), t = !0) : t = !1, t || Al(e, !0);
  }
  function qo(e) {
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
    if (!ge) return qo(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Vr(e.type, e.memoizedProps)), l = !l), l && Ue && Al(e), qo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Ue = fh(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Ue = fh(e);
    } else
      t === 27 ? (t = Ue, jl(e.type) ? (e = Fr, Fr = null, Ue = e) : Ue = t) : Ue = Pe ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Fl() {
    Ue = Pe = null, ge = !1;
  }
  function Cc() {
    var e = bl;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), bl = null), e;
  }
  function pa(e) {
    bl === null ? bl = [e] : bl.push(e);
  }
  var wc = b(null), Wl = null, el = null;
  function El(e, t, l) {
    V(wc, t._currentValue), t._currentValue = l;
  }
  function tl(e) {
    e._currentValue = wc.current, j(wc);
  }
  function zc(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Dc(e, t, l, n) {
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
              i.lanes |= l, m = i.alternate, m !== null && (m.lanes |= l), zc(
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
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), zc(f, l, e), f = null;
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
          var m = a.type;
          vt(a.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (a === pe.current) {
        if (f = a.alternate, f === null) throw Error(s(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Va) : e = [Va]);
      }
      a = a.return;
    }
    e !== null && Dc(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function wu(e) {
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
  function Il(e) {
    Wl = e, el = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function et(e) {
    return ko(Wl, e);
  }
  function zu(e, t) {
    return Wl === null && Il(e), ko(e, t);
  }
  function ko(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, el === null) {
      if (e === null) throw Error(s(308));
      el = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else el = el.next = t;
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
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mc() {
    return {
      controller: new Ay(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function va(e) {
    e.refCount--, e.refCount === 0 && Ey(Ry, function() {
      e.controller.abort();
    });
  }
  var Sa = null, Nc = 0, zn = 0, Dn = null;
  function xy(e, t) {
    if (Sa === null) {
      var l = Sa = [];
      Nc = 0, zn = jr(), Dn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Nc++, t.then(Qo, Qo), t;
  }
  function Qo() {
    if (--Nc === 0 && Sa !== null) {
      Dn !== null && (Dn.status = "fulfilled");
      var e = Sa;
      Sa = null, zn = 0, Dn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ty(e, t) {
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
  var Go = q.S;
  q.S = function(e, t) {
    Od = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && xy(e, t), Go !== null && Go(e, t);
  };
  var $l = b(null);
  function Uc() {
    var e = $l.current;
    return e !== null ? e : Me.pooledCache;
  }
  function Du(e, t) {
    t === null ? V($l, $l.current) : V($l, t.pool);
  }
  function Yo() {
    var e = Uc();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var Mn = Error(s(460)), Bc = Error(s(474)), Mu = Error(s(542)), Nu = { then: function() {
  } };
  function Vo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Jo(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Wt, Wt), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Zo(e), e;
      default:
        if (typeof t.status == "string") t.then(Wt, Wt);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, Zo(e), e;
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
  function Xo() {
    if (en === null) throw Error(s(459));
    var e = en;
    return en = null, e;
  }
  function Zo(e) {
    if (e === Mn || e === Mu)
      throw Error(s(483));
  }
  var Nn = null, ba = 0;
  function Uu(e) {
    var t = ba;
    return ba += 1, Nn === null && (Nn = []), Jo(Nn, e, t);
  }
  function Aa(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Bu(e, t) {
    throw t.$$typeof === G ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Ko(e) {
    function t(R, A) {
      if (e) {
        var O = R.deletions;
        O === null ? (R.deletions = [A], R.flags |= 16) : O.push(A);
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
      return R = $t(R, A), R.index = 0, R.sibling = null, R;
    }
    function i(R, A, O) {
      return R.index = O, e ? (O = R.alternate, O !== null ? (O = O.index, O < A ? (R.flags |= 67108866, A) : O) : (R.flags |= 67108866, A)) : (R.flags |= 1048576, A);
    }
    function f(R) {
      return e && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, A, O, H) {
      return A === null || A.tag !== 6 ? (A = Ec(O, R.mode, H), A.return = R, A) : (A = a(A, O), A.return = R, A);
    }
    function v(R, A, O, H) {
      var $ = O.type;
      return $ === U ? B(
        R,
        A,
        O.props.children,
        H,
        O.key
      ) : A !== null && (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === be && Pl($) === A.type) ? (A = a(A, O.props), Aa(A, O), A.return = R, A) : (A = Ou(
        O.type,
        O.key,
        O.props,
        null,
        R.mode,
        H
      ), Aa(A, O), A.return = R, A);
    }
    function C(R, A, O, H) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== O.containerInfo || A.stateNode.implementation !== O.implementation ? (A = Rc(O, R.mode, H), A.return = R, A) : (A = a(A, O.children || []), A.return = R, A);
    }
    function B(R, A, O, H, $) {
      return A === null || A.tag !== 7 ? (A = Kl(
        O,
        R.mode,
        H,
        $
      ), A.return = R, A) : (A = a(A, O), A.return = R, A);
    }
    function _(R, A, O) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = Ec(
          "" + A,
          R.mode,
          O
        ), A.return = R, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case x:
            return O = Ou(
              A.type,
              A.key,
              A.props,
              null,
              R.mode,
              O
            ), Aa(O, A), O.return = R, O;
          case L:
            return A = Rc(
              A,
              R.mode,
              O
            ), A.return = R, A;
          case be:
            return A = Pl(A), _(R, A, O);
        }
        if (k(A) || Oe(A))
          return A = Kl(
            A,
            R.mode,
            O,
            null
          ), A.return = R, A;
        if (typeof A.then == "function")
          return _(R, Uu(A), O);
        if (A.$$typeof === I)
          return _(
            R,
            zu(R, A),
            O
          );
        Bu(R, A);
      }
      return null;
    }
    function z(R, A, O, H) {
      var $ = A !== null ? A.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return $ !== null ? null : m(R, A, "" + O, H);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            return O.key === $ ? v(R, A, O, H) : null;
          case L:
            return O.key === $ ? C(R, A, O, H) : null;
          case be:
            return O = Pl(O), z(R, A, O, H);
        }
        if (k(O) || Oe(O))
          return $ !== null ? null : B(R, A, O, H, null);
        if (typeof O.then == "function")
          return z(
            R,
            A,
            Uu(O),
            H
          );
        if (O.$$typeof === I)
          return z(
            R,
            A,
            zu(R, O),
            H
          );
        Bu(R, O);
      }
      return null;
    }
    function N(R, A, O, H, $) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return R = R.get(O) || null, m(A, R, "" + H, $);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case x:
            return R = R.get(
              H.key === null ? O : H.key
            ) || null, v(A, R, H, $);
          case L:
            return R = R.get(
              H.key === null ? O : H.key
            ) || null, C(A, R, H, $);
          case be:
            return H = Pl(H), N(
              R,
              A,
              O,
              H,
              $
            );
        }
        if (k(H) || Oe(H))
          return R = R.get(O) || null, B(A, R, H, $, null);
        if (typeof H.then == "function")
          return N(
            R,
            A,
            O,
            Uu(H),
            $
          );
        if (H.$$typeof === I)
          return N(
            R,
            A,
            O,
            zu(A, H),
            $
          );
        Bu(A, H);
      }
      return null;
    }
    function X(R, A, O, H) {
      for (var $ = null, ve = null, F = A, ce = A = 0, me = null; F !== null && ce < O.length; ce++) {
        F.index > ce ? (me = F, F = null) : me = F.sibling;
        var Se = z(
          R,
          F,
          O[ce],
          H
        );
        if (Se === null) {
          F === null && (F = me);
          break;
        }
        e && F && Se.alternate === null && t(R, F), A = i(Se, A, ce), ve === null ? $ = Se : ve.sibling = Se, ve = Se, F = me;
      }
      if (ce === O.length)
        return l(R, F), ge && Pt(R, ce), $;
      if (F === null) {
        for (; ce < O.length; ce++)
          F = _(R, O[ce], H), F !== null && (A = i(
            F,
            A,
            ce
          ), ve === null ? $ = F : ve.sibling = F, ve = F);
        return ge && Pt(R, ce), $;
      }
      for (F = n(F); ce < O.length; ce++)
        me = N(
          F,
          R,
          ce,
          O[ce],
          H
        ), me !== null && (e && me.alternate !== null && F.delete(
          me.key === null ? ce : me.key
        ), A = i(
          me,
          A,
          ce
        ), ve === null ? $ = me : ve.sibling = me, ve = me);
      return e && F.forEach(function(kl) {
        return t(R, kl);
      }), ge && Pt(R, ce), $;
    }
    function ee(R, A, O, H) {
      if (O == null) throw Error(s(151));
      for (var $ = null, ve = null, F = A, ce = A = 0, me = null, Se = O.next(); F !== null && !Se.done; ce++, Se = O.next()) {
        F.index > ce ? (me = F, F = null) : me = F.sibling;
        var kl = z(R, F, Se.value, H);
        if (kl === null) {
          F === null && (F = me);
          break;
        }
        e && F && kl.alternate === null && t(R, F), A = i(kl, A, ce), ve === null ? $ = kl : ve.sibling = kl, ve = kl, F = me;
      }
      if (Se.done)
        return l(R, F), ge && Pt(R, ce), $;
      if (F === null) {
        for (; !Se.done; ce++, Se = O.next())
          Se = _(R, Se.value, H), Se !== null && (A = i(Se, A, ce), ve === null ? $ = Se : ve.sibling = Se, ve = Se);
        return ge && Pt(R, ce), $;
      }
      for (F = n(F); !Se.done; ce++, Se = O.next())
        Se = N(F, R, ce, Se.value, H), Se !== null && (e && Se.alternate !== null && F.delete(Se.key === null ? ce : Se.key), A = i(Se, A, ce), ve === null ? $ = Se : ve.sibling = Se, ve = Se);
      return e && F.forEach(function(Hg) {
        return t(R, Hg);
      }), ge && Pt(R, ce), $;
    }
    function ze(R, A, O, H) {
      if (typeof O == "object" && O !== null && O.type === U && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case x:
            e: {
              for (var $ = O.key; A !== null; ) {
                if (A.key === $) {
                  if ($ = O.type, $ === U) {
                    if (A.tag === 7) {
                      l(
                        R,
                        A.sibling
                      ), H = a(
                        A,
                        O.props.children
                      ), H.return = R, R = H;
                      break e;
                    }
                  } else if (A.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === be && Pl($) === A.type) {
                    l(
                      R,
                      A.sibling
                    ), H = a(A, O.props), Aa(H, O), H.return = R, R = H;
                    break e;
                  }
                  l(R, A);
                  break;
                } else t(R, A);
                A = A.sibling;
              }
              O.type === U ? (H = Kl(
                O.props.children,
                R.mode,
                H,
                O.key
              ), H.return = R, R = H) : (H = Ou(
                O.type,
                O.key,
                O.props,
                null,
                R.mode,
                H
              ), Aa(H, O), H.return = R, R = H);
            }
            return f(R);
          case L:
            e: {
              for ($ = O.key; A !== null; ) {
                if (A.key === $)
                  if (A.tag === 4 && A.stateNode.containerInfo === O.containerInfo && A.stateNode.implementation === O.implementation) {
                    l(
                      R,
                      A.sibling
                    ), H = a(A, O.children || []), H.return = R, R = H;
                    break e;
                  } else {
                    l(R, A);
                    break;
                  }
                else t(R, A);
                A = A.sibling;
              }
              H = Rc(O, R.mode, H), H.return = R, R = H;
            }
            return f(R);
          case be:
            return O = Pl(O), ze(
              R,
              A,
              O,
              H
            );
        }
        if (k(O))
          return X(
            R,
            A,
            O,
            H
          );
        if (Oe(O)) {
          if ($ = Oe(O), typeof $ != "function") throw Error(s(150));
          return O = $.call(O), ee(
            R,
            A,
            O,
            H
          );
        }
        if (typeof O.then == "function")
          return ze(
            R,
            A,
            Uu(O),
            H
          );
        if (O.$$typeof === I)
          return ze(
            R,
            A,
            zu(R, O),
            H
          );
        Bu(R, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, A !== null && A.tag === 6 ? (l(R, A.sibling), H = a(A, O), H.return = R, R = H) : (l(R, A), H = Ec(O, R.mode, H), H.return = R, R = H), f(R)) : l(R, A);
    }
    return function(R, A, O, H) {
      try {
        ba = 0;
        var $ = ze(
          R,
          A,
          O,
          H
        );
        return Nn = null, $;
      } catch (F) {
        if (F === Mn || F === Mu) throw F;
        var ve = St(29, F, null, R.mode);
        return ve.lanes = H, ve.return = R, ve;
      }
    };
  }
  var tn = Ko(!0), Fo = Ko(!1), Rl = !1;
  function jc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hc(e, t) {
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
  function Tl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ae & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Tu(e), No(e, null, l), t;
    }
    return xu(e, n, t, l), Tu(e);
  }
  function Ea(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
    }
  }
  function _c(e, t) {
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
  var Lc = !1;
  function Ra() {
    if (Lc) {
      var e = Dn;
      if (e !== null) throw e;
    }
  }
  function xa(e, t, l, n) {
    Lc = !1;
    var a = e.updateQueue;
    Rl = !1;
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
        var z = m.lane & -536870913, N = z !== m.lane;
        if (N ? (he & z) === z : (n & z) === z) {
          z !== 0 && z === zn && (Lc = !0), B !== null && (B = B.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var X = e, ee = m;
            z = t;
            var ze = l;
            switch (ee.tag) {
              case 1:
                if (X = ee.payload, typeof X == "function") {
                  _ = X.call(ze, _, z);
                  break e;
                }
                _ = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = ee.payload, z = typeof X == "function" ? X.call(ze, _, z) : X, z == null) break e;
                _ = D({}, _, z);
                break e;
              case 2:
                Rl = !0;
            }
          }
          z = m.callback, z !== null && (e.flags |= 64, N && (e.flags |= 8192), N = a.callbacks, N === null ? a.callbacks = [z] : N.push(z));
        } else
          N = {
            lane: z,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, B === null ? (C = B = N, v = _) : B = B.next = N, f |= z;
        if (m = m.next, m === null) {
          if (m = a.shared.pending, m === null)
            break;
          N = m, m = N.next, N.next = null, a.lastBaseUpdate = N, a.shared.pending = null;
        }
      } while (!0);
      B === null && (v = _), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = B, i === null && (a.shared.lanes = 0), Dl |= f, e.lanes = f, e.memoizedState = _;
    }
  }
  function Wo(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Io(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Wo(l[e], t);
  }
  var Un = b(null), ju = b(0);
  function $o(e, t) {
    e = ol, V(ju, e), V(Un, t), ol = e | t.baseLanes;
  }
  function qc() {
    V(ju, ol), V(Un, Un.current);
  }
  function kc() {
    ol = ju.current, j(Un), j(ju);
  }
  var bt = b(null), Ut = null;
  function Ol(e) {
    var t = e.alternate;
    V(Qe, Qe.current & 1), V(bt, e), Ut === null && (t === null || Un.current !== null || t.memoizedState !== null) && (Ut = e);
  }
  function Qc(e) {
    V(Qe, Qe.current), V(bt, e), Ut === null && (Ut = e);
  }
  function Po(e) {
    e.tag === 22 ? (V(Qe, Qe.current), V(bt, e), Ut === null && (Ut = e)) : Cl();
  }
  function Cl() {
    V(Qe, Qe.current), V(bt, bt.current);
  }
  function At(e) {
    j(bt), Ut === e && (Ut = null), j(Qe);
  }
  var Qe = b(0);
  function Hu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Zr(l) || Kr(l)))
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
  var ll = 0, ue = null, Ce = null, Ve = null, _u = !1, Bn = !1, ln = !1, Lu = 0, Ta = 0, jn = null, Oy = 0;
  function qe() {
    throw Error(s(321));
  }
  function Gc(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Yc(e, t, l, n, a, i) {
    return ll = i, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? _f : ar, ln = !1, i = l(n, a), ln = !1, Bn && (i = tf(
      t,
      l,
      n,
      a
    )), ef(e), i;
  }
  function ef(e) {
    q.H = wa;
    var t = Ce !== null && Ce.next !== null;
    if (ll = 0, Ve = Ce = ue = null, _u = !1, Ta = 0, jn = null, t) throw Error(s(300));
    e === null || Je || (e = e.dependencies, e !== null && wu(e) && (Je = !0));
  }
  function tf(e, t, l, n) {
    ue = e;
    var a = 0;
    do {
      if (Bn && (jn = null), Ta = 0, Bn = !1, 25 <= a) throw Error(s(301));
      if (a += 1, Ve = Ce = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      q.H = Lf, i = t(l, n);
    } while (Bn);
    return i;
  }
  function Cy() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Oa(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Vc() {
    var e = Lu !== 0;
    return Lu = 0, e;
  }
  function Jc(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Xc(e) {
    if (_u) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      _u = !1;
    }
    ll = 0, Ve = Ce = ue = null, Bn = !1, Ta = Lu = 0, jn = null;
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
        throw ue.alternate === null ? Error(s(467)) : Error(s(310));
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
  function qu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Oa(e) {
    var t = Ta;
    return Ta += 1, jn === null && (jn = []), e = Jo(jn, e, t), t = ue, (Ve === null ? t.memoizedState : Ve.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? _f : ar), e;
  }
  function ku(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Oa(e);
      if (e.$$typeof === I) return et(e);
    }
    throw Error(s(438, String(e)));
  }
  function Zc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = qu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Ne;
    return t.index++, l;
  }
  function nl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = Ge();
    return Kc(t, Ce, e);
  }
  function Kc(e, t, l) {
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
      var m = f = null, v = null, C = t, B = !1;
      do {
        var _ = C.lane & -536870913;
        if (_ !== C.lane ? (he & _) === _ : (ll & _) === _) {
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
            }), _ === zn && (B = !0);
          else if ((ll & z) === z) {
            C = C.next, z === zn && (B = !0);
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
            }, v === null ? (m = v = _, f = i) : v = v.next = _, ue.lanes |= z, Dl |= z;
          _ = C.action, ln && l(i, _), i = C.hasEagerState ? C.eagerState : l(i, _);
        } else
          z = {
            lane: _,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (m = v = z, f = i) : v = v.next = z, ue.lanes |= _, Dl |= _;
        C = C.next;
      } while (C !== null && C !== t);
      if (v === null ? f = i : v.next = m, !vt(i, e.memoizedState) && (Je = !0, B && (l = Dn, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Fc(e) {
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
      vt(i, t.memoizedState) || (Je = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function lf(e, t, l) {
    var n = ue, a = Ge(), i = ge;
    if (i) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var f = !vt(
      (Ce || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, Je = !0), a = a.queue, $c(uf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Ve !== null && Ve.memoizedState.tag & 1) {
      if (n.flags |= 2048, Hn(
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
      ), Me === null) throw Error(s(349));
      i || (ll & 127) !== 0 || nf(n, t, l);
    }
    return l;
  }
  function nf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = qu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
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
    var t = Zl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Wc(e) {
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
  function sf(e, t, l, n) {
    return e.baseState = l, Kc(
      e,
      Ce,
      typeof n == "function" ? n : nl
    );
  }
  function wy(e, t, l, n, a) {
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
      q.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, of(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function of(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = q.T, f = {};
      q.T = f;
      try {
        var m = l(a, n), v = q.S;
        v !== null && v(f, m), ff(e, t, m);
      } catch (C) {
        Ic(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
      }
    } else
      try {
        i = l(a, n), ff(e, t, i);
      } catch (C) {
        Ic(e, t, C);
      }
  }
  function ff(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        df(e, t, n);
      },
      function(n) {
        return Ic(e, t, n);
      }
    ) : df(e, t, l);
  }
  function df(e, t, l) {
    t.status = "fulfilled", t.value = l, hf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, of(e, l)));
  }
  function Ic(e, t, l) {
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
    if (ge) {
      var l = Me.formState;
      if (l !== null) {
        e: {
          var n = ue;
          if (ge) {
            if (Ue) {
              t: {
                for (var a = Ue, i = Nt; a.nodeType !== 8; ) {
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
                Ue = Bt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            Al(n);
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
    ), n.dispatch = l, n = Wc(!1), i = nr.bind(
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
    if (t = Kc(
      e,
      t,
      mf
    )[0], e = Qu(nl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = Oa(t);
      } catch (f) {
        throw f === Mn ? Mu : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Hn(
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
  function Hn(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ue.updateQueue, t === null && (t = qu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function Sf() {
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
    Ce !== null && n !== null && Gc(n, Ce.memoizedState.deps) ? a.memoizedState = Hn(t, i, l, n) : (ue.flags |= e, a.memoizedState = Hn(
      1 | t,
      i,
      l,
      n
    ));
  }
  function bf(e, t) {
    Gu(8390656, 8, e, t);
  }
  function $c(e, t) {
    Yu(2048, 8, e, t);
  }
  function Dy(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = qu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Af(e) {
    var t = Ge().memoizedState;
    return Dy({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ef(e, t) {
    return Yu(4, 2, e, t);
  }
  function Rf(e, t) {
    return Yu(4, 4, e, t);
  }
  function xf(e, t) {
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
  function Tf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Yu(4, 4, xf.bind(null, t, e), l);
  }
  function Pc() {
  }
  function Of(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Gc(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Cf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Gc(t, n[1]))
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
  function er(e, t, l) {
    return l === void 0 || (ll & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = wd(), ue.lanes |= e, Dl |= e, l);
  }
  function wf(e, t, l, n) {
    return vt(l, t) ? l : Un.current !== null ? (e = er(e, l, n), vt(e, t) || (Je = !0), e) : (ll & 42) === 0 || (ll & 1073741824) !== 0 && (he & 261930) === 0 ? (Je = !0, e.memoizedState = l) : (e = wd(), ue.lanes |= e, Dl |= e, t);
  }
  function zf(e, t, l, n, a) {
    var i = Q.p;
    Q.p = i !== 0 && 8 > i ? i : 8;
    var f = q.T, m = {};
    q.T = m, nr(e, !1, t, l);
    try {
      var v = a(), C = q.S;
      if (C !== null && C(m, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var B = Ty(
          v,
          n
        );
        Ca(
          e,
          t,
          B,
          xt(e)
        );
      } else
        Ca(
          e,
          t,
          n,
          xt(e)
        );
    } catch (_) {
      Ca(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        xt()
      );
    } finally {
      Q.p = i, f !== null && m.types !== null && (f.types = m.types), q.T = f;
    }
  }
  function My() {
  }
  function tr(e, t, l, n) {
    if (e.tag !== 5) throw Error(s(476));
    var a = Df(e).queue;
    zf(
      e,
      a,
      t,
      W,
      l === null ? My : function() {
        return Mf(e), l(n);
      }
    );
  }
  function Df(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: W,
      baseState: W,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: nl,
        lastRenderedState: W
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
  function Mf(e) {
    var t = Df(e);
    t.next === null && (t = e.alternate.memoizedState), Ca(
      e,
      t.next.queue,
      {},
      xt()
    );
  }
  function lr() {
    return et(Va);
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
          var l = xt();
          e = xl(l);
          var n = Tl(t, e, l);
          n !== null && (dt(n, t, l), Ea(n, t, l)), t = { cache: Mc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Uy(e, t, l) {
    var n = xt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(e) ? jf(t, l) : (l = bc(e, t, l, n), l !== null && (dt(l, e, n), Hf(l, t, n)));
  }
  function Bf(e, t, l) {
    var n = xt();
    Ca(e, t, l, n);
  }
  function Ca(e, t, l, n) {
    var a = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Vu(e)) jf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, m = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = m, vt(m, f))
            return xu(e, t, a, 0), Me === null && Ru(), !1;
        } catch {
        }
      if (l = bc(e, t, a, n), l !== null)
        return dt(l, e, n), Hf(l, t, n), !0;
    }
    return !1;
  }
  function nr(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: jr(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Vu(e)) {
      if (t) throw Error(s(479));
    } else
      t = bc(
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
  function jf(e, t) {
    Bn = _u = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Hf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, qs(e, l);
    }
  }
  var wa = {
    readContext: et,
    use: ku,
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
  wa.useEffectEvent = qe;
  var _f = {
    readContext: et,
    use: ku,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: et,
    useEffect: bf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Gu(
        4194308,
        4,
        xf.bind(null, t, e),
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
      e = Wc(e);
      var t = e.queue, l = Bf.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return er(l, e, t);
    },
    useTransition: function() {
      var e = Wc(!1);
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
      if (ge) {
        if (l === void 0)
          throw Error(s(407));
        l = l();
      } else {
        if (l = t(), Me === null)
          throw Error(s(349));
        (he & 127) !== 0 || nf(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, bf(uf.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Hn(
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
      var e = ut(), t = Me.identifierPrefix;
      if (ge) {
        var l = Vt, n = Yt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Lu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Oy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: lr,
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
      return t.queue = l, t = nr.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Zc,
    useCacheRefresh: function() {
      return ut().memoizedState = Ny.bind(
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
  }, ar = {
    readContext: et,
    use: ku,
    useCallback: Of,
    useContext: et,
    useEffect: $c,
    useImperativeHandle: Tf,
    useInsertionEffect: Ef,
    useLayoutEffect: Rf,
    useMemo: Cf,
    useReducer: Qu,
    useRef: Sf,
    useState: function() {
      return Qu(nl);
    },
    useDebugValue: Pc,
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
      var e = Qu(nl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Oa(e),
        t
      ];
    },
    useSyncExternalStore: lf,
    useId: Nf,
    useHostTransitionStatus: lr,
    useFormState: gf,
    useActionState: gf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return sf(l, Ce, e, t);
    },
    useMemoCache: Zc,
    useCacheRefresh: Uf
  };
  ar.useEffectEvent = Af;
  var Lf = {
    readContext: et,
    use: ku,
    useCallback: Of,
    useContext: et,
    useEffect: $c,
    useImperativeHandle: Tf,
    useInsertionEffect: Ef,
    useLayoutEffect: Rf,
    useMemo: Cf,
    useReducer: Fc,
    useRef: Sf,
    useState: function() {
      return Fc(nl);
    },
    useDebugValue: Pc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ce === null ? er(l, e, t) : wf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fc(nl)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Oa(e),
        t
      ];
    },
    useSyncExternalStore: lf,
    useId: Nf,
    useHostTransitionStatus: lr,
    useFormState: vf,
    useActionState: vf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ce !== null ? sf(l, Ce, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: Uf
  };
  Lf.useEffectEvent = Af;
  function ur(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : D({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var ir = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = xt(), a = xl(n);
      a.payload = t, l != null && (a.callback = l), t = Tl(e, a, n), t !== null && (dt(t, e, n), Ea(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = xt(), a = xl(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = Tl(e, a, n), t !== null && (dt(t, e, n), Ea(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = xt(), n = xl(l);
      n.tag = 2, t != null && (n.callback = t), t = Tl(e, n, l), t !== null && (dt(t, e, l), Ea(t, e, l));
    }
  };
  function qf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ma(l, n) || !ma(a, i) : !0;
  }
  function kf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && ir.enqueueReplaceState(t, t.state, null);
  }
  function nn(e, t) {
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
    Eu(e);
  }
  function Gf(e) {
    console.error(e);
  }
  function Yf(e) {
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
  function cr(e, t, l) {
    return l = xl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ju(e, t);
    }, l;
  }
  function Jf(e) {
    return e = xl(e), e.tag = 3, e;
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
      Vf(t, l, n), typeof a != "function" && (Ml === null ? Ml = /* @__PURE__ */ new Set([this]) : Ml.add(this));
      var m = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: m !== null ? m : ""
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
      ), l = bt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Ut === null ? ni() : l.alternate === null && ke === 0 && (ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Nr(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Nr(e, n, a)), !1;
        }
        throw Error(s(435, l.tag));
      }
      return Nr(e, n, a), ni(), !1;
    }
    if (ge)
      return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== Oc && (e = Error(s(422), { cause: n }), pa(zt(e, l)))) : (n !== Oc && (t = Error(s(423), {
        cause: n
      }), pa(
        zt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = zt(n, l), a = cr(
        e.stateNode,
        n,
        a
      ), _c(e, a), ke !== 4 && (ke = 2)), !1;
    var i = Error(s(520), { cause: n });
    if (i = zt(i, l), Ha === null ? Ha = [i] : Ha.push(i), ke !== 4 && (ke = 2), t === null) return !0;
    n = zt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = cr(l.stateNode, n, e), _c(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ml === null || !Ml.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = Jf(a), Xf(
              a,
              e,
              l,
              n
            ), _c(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var rr = Error(s(461)), Je = !1;
  function tt(e, t, l, n) {
    t.child = e === null ? Fo(t, null, l, n) : tn(
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
    return Il(t), n = Yc(
      e,
      t,
      l,
      f,
      i,
      a
    ), m = Vc(), e !== null && !Je ? (Jc(e, t, a), al(e, t, a)) : (ge && m && xc(t), t.flags |= 1, tt(e, t, n, a), t.child);
  }
  function Kf(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !Ac(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, Ff(
        e,
        t,
        i,
        n,
        a
      )) : (e = Ou(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !gr(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ma, l(f, n) && e.ref === t.ref)
        return al(e, t, a);
    }
    return t.flags |= 1, e = $t(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ff(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ma(i, n) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = n = i, gr(e, a))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, al(e, t, a);
    }
    return sr(
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
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Du(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? $o(t, i) : qc(), Po(t);
      else
        return n = t.lanes = 536870912, If(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Du(t, i.cachePool), $o(t, i), Cl(), t.memoizedState = null) : (e !== null && Du(t, null), qc(), Cl());
    return tt(e, t, a, l), t.child;
  }
  function za(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function If(e, t, l, n, a) {
    var i = Uc();
    return i = i === null ? null : { parent: Ye._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Du(t, null), qc(), Po(t), e !== null && wn(e, t, n, !0), t.childLanes = a, null;
  }
  function Xu(e, t) {
    return t = Ku(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function $f(e, t, l) {
    return tn(t, e.child, null, l), e = Xu(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function jy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = Xu(t, n), t.lanes = 536870912, za(null, e);
        if (Qc(t), (e = Ue) ? (e = oh(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sl !== null ? { id: Yt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bo(e), l.return = t, t.child = l, Pe = t, Ue = null)) : e = null, e === null) throw Al(t);
        return t.lanes = 536870912, null;
      }
      return Xu(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Qc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = $f(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (Je || wn(e, t, l, !1), a = (l & e.childLanes) !== 0, Je || a) {
        if (n = Me, n !== null && (f = ks(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Zl(e, f), dt(n, e, f), rr;
        ni(), t = $f(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Ue = Bt(f.nextSibling), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && _o(t, e), t = Xu(t, n), t.flags |= 4096;
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
        throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function sr(e, t, l, n, a) {
    return Il(t), l = Yc(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = Vc(), e !== null && !Je ? (Jc(e, t, a), al(e, t, a)) : (ge && n && xc(t), t.flags |= 1, tt(e, t, l, a), t.child);
  }
  function Pf(e, t, l, n, a, i) {
    return Il(t), t.updateQueue = null, l = tf(
      t,
      n,
      l,
      a
    ), ef(e), n = Vc(), e !== null && !Je ? (Jc(e, t, i), al(e, t, i)) : (ge && n && xc(t), t.flags |= 1, tt(e, t, l, i), t.child);
  }
  function ed(e, t, l, n, a) {
    if (Il(t), t.stateNode === null) {
      var i = xn, f = l.contextType;
      typeof f == "object" && f !== null && (i = et(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ir, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, jc(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? et(f) : xn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ur(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && ir.enqueueReplaceState(i, i.state, null), xa(t, n, i, a), Ra(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var m = t.memoizedProps, v = nn(l, m);
      i.props = v;
      var C = i.context, B = l.contextType;
      f = xn, typeof B == "object" && B !== null && (f = et(B));
      var _ = l.getDerivedStateFromProps;
      B = typeof _ == "function" || typeof i.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, B || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (m || C !== f) && kf(
        t,
        i,
        n,
        f
      ), Rl = !1;
      var z = t.memoizedState;
      i.state = z, xa(t, n, i, a), Ra(), C = t.memoizedState, m || z !== C || Rl ? (typeof _ == "function" && (ur(
        t,
        l,
        _,
        n
      ), C = t.memoizedState), (v = Rl || qf(
        t,
        l,
        v,
        n,
        z,
        C,
        f
      )) ? (B || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Hc(e, t), f = t.memoizedProps, B = nn(l, f), i.props = B, _ = t.pendingProps, z = i.context, C = l.contextType, v = xn, typeof C == "object" && C !== null && (v = et(C)), m = l.getDerivedStateFromProps, (C = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== _ || z !== v) && kf(
        t,
        i,
        n,
        v
      ), Rl = !1, z = t.memoizedState, i.state = z, xa(t, n, i, a), Ra();
      var N = t.memoizedState;
      f !== _ || z !== N || Rl || e !== null && e.dependencies !== null && wu(e.dependencies) ? (typeof m == "function" && (ur(
        t,
        l,
        m,
        n
      ), N = t.memoizedState), (B = Rl || qf(
        t,
        l,
        B,
        n,
        z,
        N,
        v
      ) || e !== null && e.dependencies !== null && wu(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, N, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        N,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = N), i.props = n, i.state = N, i.context = v, n = B) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, Zu(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = tn(
      t,
      e.child,
      null,
      a
    ), t.child = tn(
      t,
      null,
      l,
      a
    )) : tt(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = al(
      e,
      t,
      a
    ), e;
  }
  function td(e, t, l, n) {
    return Fl(), t.flags |= 256, tt(e, t, l, n), t.child;
  }
  var or = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function fr(e) {
    return { baseLanes: e, cachePool: Yo() };
  }
  function dr(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Rt), e;
  }
  function ld(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Ol(t) : Cl(), (e = Ue) ? (e = oh(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sl !== null ? { id: Yt, overflow: Vt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Bo(e), l.return = t, t.child = l, Pe = t, Ue = null)) : e = null, e === null) throw Al(t);
        return Kr(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = n.children;
      return n = n.fallback, a ? (Cl(), a = t.mode, m = Ku(
        { mode: "hidden", children: m },
        a
      ), n = Kl(
        n,
        a,
        l,
        null
      ), m.return = t, n.return = t, m.sibling = n, t.child = m, n = t.child, n.memoizedState = fr(l), n.childLanes = dr(
        e,
        f,
        l
      ), t.memoizedState = or, za(null, n)) : (Ol(t), hr(t, m));
    }
    var v = e.memoizedState;
    if (v !== null && (m = v.dehydrated, m !== null)) {
      if (i)
        t.flags & 256 ? (Ol(t), t.flags &= -257, t = mr(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Cl(), t.child = e.child, t.flags |= 128, t = null) : (Cl(), m = n.fallback, a = t.mode, n = Ku(
          { mode: "visible", children: n.children },
          a
        ), m = Kl(
          m,
          a,
          l,
          null
        ), m.flags |= 2, n.return = t, m.return = t, n.sibling = m, t.child = n, tn(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = fr(l), n.childLanes = dr(
          e,
          f,
          l
        ), t.memoizedState = or, t = za(null, n));
      else if (Ol(t), Kr(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(s(419)), n.stack = "", n.digest = f, pa({ value: n, source: null, stack: null }), t = mr(
          e,
          t,
          l
        );
      } else if (Je || wn(e, t, l, !1), f = (l & e.childLanes) !== 0, Je || f) {
        if (f = Me, f !== null && (n = ks(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Zl(e, n), dt(f, e, n), rr;
        Zr(m) || ni(), t = mr(
          e,
          t,
          l
        );
      } else
        Zr(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Ue = Bt(
          m.nextSibling
        ), Pe = t, ge = !0, bl = null, Nt = !1, e !== null && _o(t, e), t = hr(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (Cl(), m = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = $t(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? m = $t(
      C,
      m
    ) : (m = Kl(
      m,
      a,
      l,
      null
    ), m.flags |= 2), m.return = t, n.return = t, n.sibling = m, t.child = n, za(null, n), n = t.child, m = e.child.memoizedState, m === null ? m = fr(l) : (a = m.cachePool, a !== null ? (v = Ye._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Yo(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: a
    }), n.memoizedState = m, n.childLanes = dr(
      e,
      f,
      l
    ), t.memoizedState = or, za(e.child, n)) : (Ol(t), l = e.child, e = l.sibling, l = $t(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function hr(e, t) {
    return t = Ku(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Ku(e, t) {
    return e = St(22, e, null, t), e.lanes = 0, e;
  }
  function mr(e, t, l) {
    return tn(t, e.child, null, l), e = hr(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function nd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), zc(e.return, t, l);
  }
  function yr(e, t, l, n, a, i) {
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
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Qe, f), tt(e, t, n, l), n = ge ? ga : 0, !m && e !== null && (e.flags & 128) !== 0)
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
          e = l.alternate, e !== null && Hu(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), yr(
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
        yr(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        yr(
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
    if (e !== null && (t.dependencies = e.dependencies), Dl |= t.lanes, (l & t.childLanes) === 0)
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
  function gr(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && wu(e)));
  }
  function Hy(e, t, l) {
    switch (t.tag) {
      case 3:
        ye(t, t.stateNode.containerInfo), El(t, Ye, e.memoizedState.cache), Fl();
        break;
      case 27:
      case 5:
        Tt(t);
        break;
      case 4:
        ye(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Qc(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Ol(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? ld(e, t, l) : (Ol(t), e = al(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Ol(t);
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
        El(t, Ye, e.memoizedState.cache);
    }
    return al(e, t, l);
  }
  function ud(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!gr(e, l) && (t.flags & 128) === 0)
          return Je = !1, Hy(
            e,
            t,
            l
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, ge && (t.flags & 1048576) !== 0 && Ho(t, ga, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = Pl(t.elementType), t.type = e, typeof e == "function")
            Ac(e) ? (n = nn(e, n), t.tag = 1, t = ed(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = sr(
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
            throw t = Fe(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return sr(
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
        ), ed(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (ye(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Hc(e, t), xa(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, El(t, Ye, n), n !== i.cache && Dc(
            t,
            [Ye],
            l,
            !0
          ), Ra(), n = f.element, i.isDehydrated)
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
              a = zt(
                Error(s(424)),
                t
              ), pa(a), t = td(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ue = Bt(e.firstChild), Pe = t, ge = !0, bl = null, Nt = !0, l = Fo(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Fl(), n === a) {
              t = al(
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
        return Zu(e, t), e === null ? (l = gh(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = oi(
          se.current
        ).createElement(l), n[$e] = t, n[it] = e, lt(n, l, e), We(n), t.stateNode = n) : t.memoizedState = gh(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Tt(t), e === null && ge && (n = t.stateNode = hh(
          t.type,
          t.pendingProps,
          se.current
        ), Pe = t, Nt = !0, a = Ue, jl(t.type) ? (Fr = a, Ue = Bt(n.firstChild)) : Ue = a), tt(
          e,
          t,
          t.pendingProps.children,
          l
        ), Zu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = Ue) && (n = dg(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Pe = t, Ue = Bt(n.firstChild), Nt = !1, a = !0) : a = !1), a || Al(t)), Tt(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, Vr(a, i) ? n = null : f !== null && Vr(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Yc(
          e,
          t,
          Cy,
          null,
          null,
          l
        ), Va._currentValue = a), Zu(e, t), tt(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = Ue) && (l = hg(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Pe = t, Ue = null, e = !0) : e = !1), e || Al(t)), null;
      case 13:
        return ld(e, t, l);
      case 4:
        return ye(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = tn(
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
        return n = t.pendingProps, El(t, t.type, n.value), tt(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Il(t), a = et(a), n = n(a), t.flags |= 1, tt(e, t, n, l), t.child;
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
        return Il(t), n = et(Ye), e === null ? (a = Uc(), a === null && (a = Me, i = Mc(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, jc(t), El(t, Ye, a)) : ((e.lanes & l) !== 0 && (Hc(e, t), xa(t, null, null, l), Ra()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), El(t, Ye, n)) : (n = i.cache, El(t, Ye, n), n !== a.cache && Dc(
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
    throw Error(s(156, t.tag));
  }
  function ul(e) {
    e.flags |= 4;
  }
  function pr(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Nd()) e.flags |= 8192;
        else
          throw en = Nu, Bc;
    } else e.flags &= -16777217;
  }
  function id(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ah(t))
      if (Nd()) e.flags |= 8192;
      else
        throw en = Nu, Bc;
  }
  function Fu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? _s() : 536870912, e.lanes |= t, kn |= t);
  }
  function Da(e, t) {
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
        return Be(t), null;
      case 1:
        return Be(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), tl(Ye), Ee(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Cn(t) ? ul(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Cc())), Be(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (ul(t), i !== null ? (Be(t), id(t, i)) : (Be(t), pr(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (ul(t), Be(t), id(t, i)) : (Be(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && ul(t), Be(t), pr(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (Gt(t), l = se.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Be(t), null;
          }
          e = K.current, Cn(t) ? Lo(t) : (e = hh(a, n, l), t.stateNode = e, ul(t));
        }
        return Be(t), null;
      case 5:
        if (Gt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && ul(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Be(t), null;
          }
          if (i = K.current, Cn(t))
            Lo(t);
          else {
            var f = oi(
              se.current
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
            n && ul(t);
          }
        }
        return Be(t), pr(
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
            throw Error(s(166));
          if (e = se.current, Cn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Pe, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[$e] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || lh(e.nodeValue, l)), e || Al(t, !0);
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
              Fl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), e = !1;
          } else
            l = Cc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
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
              Fl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Be(t), a = !1;
          } else
            a = Cc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Fu(t, t.updateQueue), Be(t), null);
      case 4:
        return Ee(), e === null && qr(t.stateNode.containerInfo), Be(t), null;
      case 10:
        return tl(t.type), Be(t), null;
      case 19:
        if (j(Qe), n = t.memoizedState, n === null) return Be(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) Da(n, !1);
          else {
            if (ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Hu(e), i !== null) {
                  for (t.flags |= 128, Da(n, !1), e = i.updateQueue, t.updateQueue = e, Fu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Uo(l, e), l = l.sibling;
                  return V(
                    Qe,
                    Qe.current & 1 | 2
                  ), ge && Pt(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > ei && (t.flags |= 128, a = !0, Da(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Hu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Fu(t, e), Da(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ge)
                return Be(t), null;
            } else
              2 * yt() - n.renderingStartTime > ei && l !== 536870912 && (t.flags |= 128, a = !0, Da(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Qe.current, V(
          Qe,
          a ? l & 1 | 2 : l & 1
        ), ge && Pt(t, n.treeForkCount), e) : (Be(t), null);
      case 22:
      case 23:
        return At(t), kc(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Be(t), l = t.updateQueue, l !== null && Fu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && j($l), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), tl(Ye), Be(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ly(e, t) {
    switch (Tc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return tl(Ye), Ee(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Gt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(s(340));
          Fl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Fl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return j(Qe), null;
      case 4:
        return Ee(), null;
      case 10:
        return tl(t.type), null;
      case 22:
      case 23:
        return At(t), kc(), e !== null && j($l), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return tl(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cd(e, t) {
    switch (Tc(t), t.tag) {
      case 3:
        tl(Ye), Ee();
        break;
      case 26:
      case 27:
      case 5:
        Gt(t);
        break;
      case 4:
        Ee();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        j(Qe);
        break;
      case 10:
        tl(t.type);
        break;
      case 22:
      case 23:
        At(t), kc(), e !== null && j($l);
        break;
      case 24:
        tl(Ye);
    }
  }
  function Ma(e, t) {
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
  function wl(e, t, l) {
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
        Io(t, l);
      } catch (n) {
        xe(e, e.return, n);
      }
    }
  }
  function sd(e, t, l) {
    l.props = nn(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      xe(e, t, n);
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
  function od(e) {
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
  function vr(e, t, l) {
    try {
      var n = e.stateNode;
      ig(n, e.type, l, t), n[it] = t;
    } catch (a) {
      xe(e, e.return, a);
    }
  }
  function fd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && jl(e.type) || e.tag === 4;
  }
  function Sr(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || fd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function br(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Wt));
    else if (n !== 4 && (n === 27 && jl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (br(e, t, l), e = e.sibling; e !== null; )
        br(e, t, l), e = e.sibling;
  }
  function Wu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && jl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Wu(e, t, l), e = e.sibling; e !== null; )
        Wu(e, t, l), e = e.sibling;
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
  var il = !1, Xe = !1, Ar = !1, hd = typeof WeakSet == "function" ? WeakSet : Set, Ie = null;
  function qy(e, t) {
    if (e = e.containerInfo, Gr = pi, e = xo(e), mc(e)) {
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
            var f = 0, m = -1, v = -1, C = 0, B = 0, _ = e, z = null;
            t: for (; ; ) {
              for (var N; _ !== l || a !== 0 && _.nodeType !== 3 || (m = f + a), _ !== i || n !== 0 && _.nodeType !== 3 || (v = f + n), _.nodeType === 3 && (f += _.nodeValue.length), (N = _.firstChild) !== null; )
                z = _, _ = N;
              for (; ; ) {
                if (_ === e) break t;
                if (z === l && ++C === a && (m = f), z === i && ++B === n && (v = f), (N = _.nextSibling) !== null) break;
                _ = z, z = _.parentNode;
              }
              _ = N;
            }
            l = m === -1 || v === -1 ? null : { start: m, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Yr = { focusedElem: e, selectionRange: l }, pi = !1, Ie = t; Ie !== null; )
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
                  var X = nn(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    X,
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
                  Xr(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xr(e);
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
  function md(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        rl(e, l), n & 4 && Ma(5, l);
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
              xe(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && rd(l), n & 512 && Na(l, l.return);
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
            Io(e, t);
          } catch (f) {
            xe(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && dd(l);
      case 26:
      case 5:
        rl(e, l), t === null && n & 4 && od(l), n & 512 && Na(l, l.return);
        break;
      case 12:
        rl(e, l);
        break;
      case 31:
        rl(e, l), n & 4 && pd(e, l);
        break;
      case 13:
        rl(e, l), n & 4 && vd(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Ky.bind(
          null,
          l
        ), mg(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || il, !n) {
          t = t !== null && t.memoizedState !== null || Xe, a = il;
          var i = Xe;
          il = n, (Xe = t) && !i ? sl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : rl(e, l), il = a, Xe = i;
        }
        break;
      case 30:
        break;
      default:
        rl(e, l);
    }
  }
  function yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ii(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var je = null, rt = !1;
  function cl(e, t, l) {
    for (l = l.child; l !== null; )
      gd(e, t, l), l = l.sibling;
  }
  function gd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(la, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Xe || Jt(l, t), cl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Xe || Jt(l, t);
        var n = je, a = rt;
        jl(l.type) && (je = l.stateNode, rt = !1), cl(
          e,
          t,
          l
        ), Qa(l.stateNode), je = n, rt = a;
        break;
      case 5:
        Xe || Jt(l, t);
      case 6:
        if (n = je, a = rt, je = null, cl(
          e,
          t,
          l
        ), je = n, rt = a, je !== null)
          if (rt)
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
        je !== null && (rt ? (e = je, rh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Kn(e)) : rh(je, l.stateNode));
        break;
      case 4:
        n = je, a = rt, je = l.stateNode.containerInfo, rt = !0, cl(
          e,
          t,
          l
        ), je = n, rt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        wl(2, l, t), Xe || wl(4, l, t), cl(
          e,
          t,
          l
        );
        break;
      case 1:
        Xe || (Jt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && sd(
          l,
          t,
          n
        )), cl(
          e,
          t,
          l
        );
        break;
      case 21:
        cl(
          e,
          t,
          l
        );
        break;
      case 22:
        Xe = (n = Xe) || l.memoizedState !== null, cl(
          e,
          t,
          l
        ), Xe = n;
        break;
      default:
        cl(
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
        Kn(e);
      } catch (l) {
        xe(t, t.return, l);
      }
    }
  }
  function vd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Kn(e);
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
        throw Error(s(435, e.tag));
    }
  }
  function Iu(e, t) {
    var l = ky(e);
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
        var a = l[n], i = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (jl(m.type)) {
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
        if (je === null) throw Error(s(160));
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
        st(t, e), ot(e), n & 4 && (wl(3, e, e.return), Ma(3, e), wl(5, e, e.return));
        break;
      case 1:
        st(t, e), ot(e), n & 512 && (Xe || l === null || Jt(l, l.return)), n & 64 && il && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = Lt;
        if (st(t, e), ot(e), n & 512 && (Xe || l === null || Jt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[ua] || i[$e] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
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
                      throw Error(s(468, n));
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
            )) : n === null && e.stateNode !== null && vr(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        st(t, e), ot(e), n & 512 && (Xe || l === null || Jt(l, l.return)), l !== null && n & 4 && vr(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ot(e), n & 512 && (Xe || l === null || Jt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            pn(a, "");
          } catch (X) {
            xe(e, e.return, X);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, vr(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Ar = !0);
        break;
      case 6:
        if (st(t, e), ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (X) {
            xe(e, e.return, X);
          }
        }
        break;
      case 3:
        if (hi = null, a = Lt, Lt = fi(t.containerInfo), st(t, e), Lt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Kn(t.containerInfo);
          } catch (X) {
            xe(e, e.return, X);
          }
        Ar && (Ar = !1, bd(e));
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
        var v = l !== null && l.memoizedState !== null, C = il, B = Xe;
        if (il = C || a, Xe = B || v, st(t, e), Xe = B, il = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || il || Xe || an(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = v.stateNode;
                    var _ = v.memoizedProps.style, z = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    m.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (X) {
                  xe(v, v.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (X) {
                  xe(v, v.return, X);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var N = v.stateNode;
                  a ? sh(N, !0) : sh(v.stateNode, !1);
                } catch (X) {
                  xe(v, v.return, X);
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
          if (fd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Sr(e);
            Wu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (pn(f, ""), l.flags &= -33);
            var m = Sr(e);
            Wu(e, m, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, C = Sr(e);
            br(
              e,
              C,
              v
            );
            break;
          default:
            throw Error(s(161));
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
  function rl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        md(e, t.alternate, t), t = t.sibling;
  }
  function an(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          wl(4, t, t.return), an(t);
          break;
        case 1:
          Jt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && sd(
            t,
            t.return,
            l
          ), an(t);
          break;
        case 27:
          Qa(t.stateNode);
        case 26:
        case 5:
          Jt(t, t.return), an(t);
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
          ), Ma(4, i);
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
              xe(n, n.return, C);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var m = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  Wo(v[a], m);
            } catch (C) {
              xe(n, n.return, C);
            }
          }
          l && f & 64 && rd(i), Na(i, i.return);
          break;
        case 27:
          dd(i);
        case 26:
        case 5:
          sl(
            a,
            i,
            l
          ), l && n === null && f & 4 && od(i), Na(i, i.return);
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
          ), l && f & 4 && pd(a, i);
          break;
        case 13:
          sl(
            a,
            i,
            l
          ), l && f & 4 && vd(a, i);
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
  function Er(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && va(l));
  }
  function Rr(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && va(e));
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
        ), a & 2048 && Ma(9, t);
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
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && va(e)));
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
            xe(t, t.return, v);
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
        ) : Ua(e, t) : i._visibility & 2 ? qt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, _n(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Er(f, t);
        break;
      case 24:
        qt(
          e,
          t,
          l,
          n
        ), a & 2048 && Rr(t.alternate, t);
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
  function _n(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, m = l, v = n, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          _n(
            i,
            f,
            m,
            v,
            a
          ), Ma(8, f);
          break;
        case 23:
          break;
        case 22:
          var B = f.stateNode;
          f.memoizedState !== null ? B._visibility & 2 ? _n(
            i,
            f,
            m,
            v,
            a
          ) : Ua(
            i,
            f
          ) : (B._visibility |= 2, _n(
            i,
            f,
            m,
            v,
            a
          )), a && C & 2048 && Er(
            f.alternate,
            f
          );
          break;
        case 24:
          _n(
            i,
            f,
            m,
            v,
            a
          ), a && C & 2048 && Rr(f.alternate, f);
          break;
        default:
          _n(
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
  function Ua(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Ua(l, n), a & 2048 && Er(
              n.alternate,
              n
            );
            break;
          case 24:
            Ua(l, n), a & 2048 && Rr(n.alternate, n);
            break;
          default:
            Ua(l, n);
        }
        t = t.sibling;
      }
  }
  var Ba = 8192;
  function Ln(e, t, l) {
    if (e.subtreeFlags & Ba)
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
        Ln(
          e,
          t,
          l
        ), e.flags & Ba && e.memoizedState !== null && Og(
          l,
          Lt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ln(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = Lt;
        Lt = fi(e.stateNode.containerInfo), Ln(
          e,
          t,
          l
        ), Lt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ba, Ba = 16777216, Ln(
          e,
          t,
          l
        ), Ba = n) : Ln(
          e,
          t,
          l
        ));
        break;
      default:
        Ln(
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
  function ja(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Ie = n, Td(
            n,
            e
          );
        }
      Rd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        xd(e), e = e.sibling;
  }
  function xd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ja(e), e.flags & 2048 && wl(9, e, e.return);
        break;
      case 3:
        ja(e);
        break;
      case 12:
        ja(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, $u(e)) : ja(e);
        break;
      default:
        ja(e);
    }
  }
  function $u(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          Ie = n, Td(
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
          wl(8, t, t.return), $u(t);
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
  function Td(e, t) {
    for (; Ie !== null; ) {
      var l = Ie;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          wl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          va(l.memoizedState.cache);
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
  }, Gy = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Me = null, fe = null, he = 0, Re = 0, Et = null, zl = !1, qn = !1, xr = !1, ol = 0, ke = 0, Dl = 0, un = 0, Tr = 0, Rt = 0, kn = 0, Ha = null, ft = null, Or = !1, Pu = 0, Od = 0, ei = 1 / 0, ti = null, Ml = null, Ke = 0, Nl = null, Qn = null, fl = 0, Cr = 0, wr = null, Cd = null, _a = 0, zr = null;
  function xt() {
    return (Ae & 2) !== 0 && he !== 0 ? he & -he : q.T !== null ? jr() : Qs();
  }
  function wd() {
    if (Rt === 0)
      if ((he & 536870912) === 0 || ge) {
        var e = su;
        su <<= 1, (su & 3932160) === 0 && (su = 262144), Rt = e;
      } else Rt = 536870912;
    return e = bt.current, e !== null && (e.flags |= 32), Rt;
  }
  function dt(e, t, l) {
    (e === Me && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (Gn(e, 0), Ul(
      e,
      he,
      Rt,
      !1
    )), aa(e, l), ((Ae & 2) === 0 || e !== Me) && (e === Me && ((Ae & 2) === 0 && (un |= l), ke === 4 && Ul(
      e,
      he,
      Rt,
      !1
    )), Xt(e));
  }
  function zd(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(s(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || na(e, t), a = n ? Jy(e, t) : Mr(e, t, !0), i = n;
    do {
      if (a === 0) {
        qn && !n && Ul(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Yy(l)) {
          a = Mr(e, t, !1), i = !1;
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
              a = Ha;
              var v = m.current.memoizedState.isDehydrated;
              if (v && (Gn(m, f).flags |= 256), f = Mr(
                m,
                f,
                !1
              ), f !== 2) {
                if (xr && !v) {
                  m.errorRecoveryDisabledLanes |= i, un |= i, a = 4;
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
          Gn(e, 0), Ul(e, t, 0, !0);
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
              Ul(
                n,
                t,
                Rt,
                !zl
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
            if (Ul(
              n,
              t,
              Rt,
              !zl
            ), fu(n, 0, !0) !== 0) break e;
            fl = t, n.timeoutHandle = ih(
              Dd.bind(
                null,
                n,
                l,
                ft,
                ti,
                Or,
                t,
                Rt,
                un,
                kn,
                zl,
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
            ti,
            Or,
            t,
            Rt,
            un,
            kn,
            zl,
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
  function Dd(e, t, l, n, a, i, f, m, v, C, B, _, z, N) {
    if (e.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Wt
      }, Ed(
        t,
        i,
        _
      );
      var X = (i & 62914560) === i ? Pu - yt() : (i & 4194048) === i ? Od - yt() : 0;
      if (X = Cg(
        _,
        X
      ), X !== null) {
        fl = i, e.cancelPendingCommit = X(
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
            z,
            N
          )
        ), Ul(e, i, f, !C);
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
  function Ul(e, t, l, n) {
    t &= ~Tr, t &= ~un, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Ls(e, l, t);
  }
  function li() {
    return (Ae & 6) === 0 ? (La(0), !1) : !0;
  }
  function Dr() {
    if (fe !== null) {
      if (Re === 0)
        var e = fe.return;
      else
        e = fe, el = Wl = null, Xc(e), Nn = null, ba = 0, e = fe;
      for (; e !== null; )
        cd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Gn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, sg(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), fl = 0, Dr(), Me = e, fe = l = $t(e.current, null), he = t, Re = 0, Et = null, zl = !1, qn = na(e, t), xr = !1, kn = Rt = Tr = un = Dl = ke = 0, ft = Ha = null, Or = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return ol = t, Ru(), l;
  }
  function Md(e, t) {
    ue = null, q.H = wa, t === Mn || t === Mu ? (t = Xo(), Re = 3) : t === Bc ? (t = Xo(), Re = 4) : Re = t === rr ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Et = t, fe === null && (ke = 1, Ju(
      e,
      zt(t, e.current)
    ));
  }
  function Nd() {
    var e = bt.current;
    return e === null ? !0 : (he & 4194048) === he ? Ut === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === Ut : !1;
  }
  function Ud() {
    var e = q.H;
    return q.H = wa, e === null ? wa : e;
  }
  function Bd() {
    var e = q.A;
    return q.A = Qy, e;
  }
  function ni() {
    ke = 4, zl || (he & 4194048) !== he && bt.current !== null || (qn = !0), (Dl & 134217727) === 0 && (un & 134217727) === 0 || Me === null || Ul(
      Me,
      he,
      Rt,
      !1
    );
  }
  function Mr(e, t, l) {
    var n = Ae;
    Ae |= 2;
    var a = Ud(), i = Bd();
    (Me !== e || he !== t) && (ti = null, Gn(e, t)), t = !1;
    var f = ke;
    e: do
      try {
        if (Re !== 0 && fe !== null) {
          var m = fe, v = Et;
          switch (Re) {
            case 8:
              Dr(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var C = Re;
              if (Re = 0, Et = null, Yn(e, m, v, C), l && qn) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Re, Re = 0, Et = null, Yn(e, m, v, C);
          }
        }
        Vy(), f = ke;
        break;
      } catch (B) {
        Md(e, B);
      }
    while (!0);
    return t && e.shellSuspendCounter++, el = Wl = null, Ae = n, q.H = a, q.A = i, fe === null && (Me = null, he = 0, Ru()), f;
  }
  function Vy() {
    for (; fe !== null; ) jd(fe);
  }
  function Jy(e, t) {
    var l = Ae;
    Ae |= 2;
    var n = Ud(), a = Bd();
    Me !== e || he !== t ? (ti = null, ei = yt() + 500, Gn(e, t)) : qn = na(
      e,
      t
    );
    e: do
      try {
        if (Re !== 0 && fe !== null) {
          t = fe;
          var i = Et;
          t: switch (Re) {
            case 1:
              Re = 0, Et = null, Yn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Vo(i)) {
                Re = 0, Et = null, Hd(t);
                break;
              }
              t = function() {
                Re !== 2 && Re !== 9 || Me !== e || (Re = 7), Xt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Re = 7;
              break e;
            case 4:
              Re = 5;
              break e;
            case 7:
              Vo(i) ? (Re = 0, Et = null, Hd(t)) : (Re = 0, Et = null, Yn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var m = fe;
                  if (f ? Ah(f) : m.stateNode.complete) {
                    Re = 0, Et = null;
                    var v = m.sibling;
                    if (v !== null) fe = v;
                    else {
                      var C = m.return;
                      C !== null ? (fe = C, ai(C)) : fe = null;
                    }
                    break t;
                  }
              }
              Re = 0, Et = null, Yn(e, t, i, 5);
              break;
            case 6:
              Re = 0, Et = null, Yn(e, t, i, 6);
              break;
            case 8:
              Dr(), ke = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Xy();
        break;
      } catch (B) {
        Md(e, B);
      }
    while (!0);
    return el = Wl = null, q.H = n, q.A = a, Ae = l, fe !== null ? 0 : (Me = null, he = 0, Ru(), ke);
  }
  function Xy() {
    for (; fe !== null && !y0(); )
      jd(fe);
  }
  function jd(e) {
    var t = ud(e.alternate, e, ol);
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : fe = t;
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
          he
        );
        break;
      case 11:
        t = Pf(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        Xc(t);
      default:
        cd(l, t), t = fe = Uo(t, ol), t = ud(l, t, ol);
    }
    e.memoizedProps = e.pendingProps, t === null ? ai(e) : fe = t;
  }
  function Yn(e, t, l, n) {
    el = Wl = null, Xc(t), Nn = null, ba = 0;
    var a = t.return;
    try {
      if (By(
        e,
        a,
        t,
        l,
        he
      )) {
        ke = 1, Ju(
          e,
          zt(l, e.current)
        ), fe = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw fe = a, i;
      ke = 1, Ju(
        e,
        zt(l, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ge || n === 1 ? e = !0 : qn || (he & 536870912) !== 0 ? e = !1 : (zl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = bt.current, n !== null && n.tag === 13 && (n.flags |= 16384))), _d(t, e)) : ai(t);
  }
  function ai(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        _d(
          t,
          zl
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
  function _d(e, t) {
    do {
      var l = Ly(e.alternate, e);
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
  function Ld(e, t, l, n, a, i, f, m, v) {
    e.cancelPendingCommit = null;
    do
      ui();
    while (Ke !== 0);
    if ((Ae & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (i = t.lanes | t.childLanes, i |= Sc, T0(
        e,
        l,
        i,
        f,
        m,
        v
      ), e === Me && (fe = Me = null, he = 0), Qn = t, Nl = e, fl = l, Cr = i, wr = a, Cd = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Wy(cu, function() {
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
      var e = Nl, t = Qn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = Q.p;
        Q.p = 2;
        var a = Ae;
        Ae |= 4;
        try {
          Sd(t, e);
          var i = Yr, f = xo(e.containerInfo), m = i.focusedElem, v = i.selectionRange;
          if (f !== m && m && m.ownerDocument && Ro(
            m.ownerDocument.documentElement,
            m
          )) {
            if (v !== null && mc(m)) {
              var C = v.start, B = v.end;
              if (B === void 0 && (B = C), "selectionStart" in m)
                m.selectionStart = C, m.selectionEnd = Math.min(
                  B,
                  m.value.length
                );
              else {
                var _ = m.ownerDocument || document, z = _ && _.defaultView || window;
                if (z.getSelection) {
                  var N = z.getSelection(), X = m.textContent.length, ee = Math.min(v.start, X), ze = v.end === void 0 ? ee : Math.min(v.end, X);
                  !N.extend && ee > ze && (f = ze, ze = ee, ee = f);
                  var R = Eo(
                    m,
                    ee
                  ), A = Eo(
                    m,
                    ze
                  );
                  if (R && A && (N.rangeCount !== 1 || N.anchorNode !== R.node || N.anchorOffset !== R.offset || N.focusNode !== A.node || N.focusOffset !== A.offset)) {
                    var O = _.createRange();
                    O.setStart(R.node, R.offset), N.removeAllRanges(), ee > ze ? (N.addRange(O), N.extend(A.node, A.offset)) : (O.setEnd(A.node, A.offset), N.addRange(O));
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
              var H = _[m];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          pi = !!Gr, Yr = Gr = null;
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
      var e = Nl, t = Qn, l = (t.flags & 8772) !== 0;
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
      var e = Nl, t = Qn, l = fl, n = Cd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Qn = Nl = null, Gd(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Ml = null), Fi(l), t = t.stateNode, gt && typeof gt.onCommitFiberRoot == "function")
        try {
          gt.onCommitFiberRoot(
            la,
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
      (fl & 3) !== 0 && ui(), Xt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === zr ? _a++ : (_a = 0, zr = e) : _a = 0, La(0);
    }
  }
  function Gd(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, va(t)));
  }
  function ui() {
    return qd(), kd(), Qd(), Yd();
  }
  function Yd() {
    if (Ke !== 5) return !1;
    var e = Nl, t = Cr;
    Cr = 0;
    var l = Fi(fl), n = q.T, a = Q.p;
    try {
      Q.p = 32 > l ? 32 : l, q.T = null, l = wr, wr = null;
      var i = Nl, f = fl;
      if (Ke = 0, Qn = Nl = null, fl = 0, (Ae & 6) !== 0) throw Error(s(331));
      var m = Ae;
      if (Ae |= 4, xd(i.current), Ad(
        i,
        i.current,
        f,
        l
      ), Ae = m, La(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(la, i);
        } catch {
        }
      return !0;
    } finally {
      Q.p = a, q.T = n, Gd(e, t);
    }
  }
  function Vd(e, t, l) {
    t = zt(l, t), t = cr(e.stateNode, t, 2), e = Tl(e, t, 2), e !== null && (aa(e, 2), Xt(e));
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ml === null || !Ml.has(n))) {
            e = zt(l, e), l = Jf(2), n = Tl(t, l, 2), n !== null && (Xf(
              l,
              n,
              t,
              e
            ), aa(n, 2), Xt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Nr(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Gy();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (xr = !0, a.add(l), e = Zy.bind(null, e, t, l), t.then(e, e));
  }
  function Zy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Me === e && (he & l) === l && (ke === 4 || ke === 3 && (he & 62914560) === he && 300 > yt() - Pu ? (Ae & 2) === 0 && Gn(e, 0) : Tr |= l, kn === he && (kn = 0)), Xt(e);
  }
  function Jd(e, t) {
    t === 0 && (t = _s()), e = Zl(e, t), e !== null && (aa(e, t), Xt(e));
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
        throw Error(s(314));
    }
    n !== null && n.delete(t), Jd(e, l);
  }
  function Wy(e, t) {
    return Ji(e, t);
  }
  var ii = null, Vn = null, Ur = !1, ci = !1, Br = !1, Bl = 0;
  function Xt(e) {
    e !== Vn && e.next === null && (Vn === null ? ii = Vn = e : Vn = Vn.next = e), ci = !0, Ur || (Ur = !0, $y());
  }
  function La(e, t) {
    if (!Br && ci) {
      Br = !0;
      do
        for (var l = !1, n = ii; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, m = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~m), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, Fd(n, i));
          } else
            i = he, i = fu(
              n,
              n === Me ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || na(n, i) || (l = !0, Fd(n, i));
          n = n.next;
        }
      while (l);
      Br = !1;
    }
  }
  function Iy() {
    Xd();
  }
  function Xd() {
    ci = Ur = !1;
    var e = 0;
    Bl !== 0 && rg() && (e = Bl);
    for (var t = yt(), l = null, n = ii; n !== null; ) {
      var a = n.next, i = Zd(n, t);
      i === 0 ? (n.next = null, l === null ? ii = a : l.next = a, a === null && (Vn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (ci = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || La(e), Bl !== 0 && (Bl = 0);
  }
  function Zd(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), m = 1 << f, v = a[f];
      v === -1 ? ((m & l) === 0 || (m & n) !== 0) && (a[f] = x0(m, t)) : v <= t && (e.expiredLanes |= m), i &= ~m;
    }
    if (t = Me, l = he, l = fu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Xi(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || na(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Xi(n), Fi(l)) {
        case 2:
        case 8:
          l = js;
          break;
        case 32:
          l = cu;
          break;
        case 268435456:
          l = Hs;
          break;
        default:
          l = cu;
      }
      return n = Kd.bind(null, e), l = Ji(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Xi(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Kd(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ui() && e.callbackNode !== l)
      return null;
    var n = he;
    return n = fu(
      e,
      e === Me ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (zd(e, n, t), Zd(e, yt()), e.callbackNode != null && e.callbackNode === l ? Kd.bind(null, e) : null);
  }
  function Fd(e, t) {
    if (ui()) return null;
    zd(e, t, !0);
  }
  function $y() {
    og(function() {
      (Ae & 6) !== 0 ? Ji(
        Bs,
        Iy
      ) : Xd();
    });
  }
  function jr() {
    if (Bl === 0) {
      var e = zn;
      e === 0 && (e = ru, ru <<= 1, (ru & 261888) === 0 && (ru = 256)), Bl = e;
    }
    return Bl;
  }
  function Wd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : yu("" + e);
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
      var m = new Su(
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
                  var v = f ? Id(a, f) : new FormData(a);
                  tr(
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
                typeof i == "function" && (m.preventDefault(), v = f ? Id(a, f) : new FormData(a), tr(
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
  for (var Hr = 0; Hr < vc.length; Hr++) {
    var _r = vc[Hr], eg = _r.toLowerCase(), tg = _r[0].toUpperCase() + _r.slice(1);
    _t(
      eg,
      "on" + tg
    );
  }
  _t(Co, "onAnimationEnd"), _t(wo, "onAnimationIteration"), _t(zo, "onAnimationStart"), _t("dblclick", "onDoubleClick"), _t("focusin", "onFocus"), _t("focusout", "onBlur"), _t(py, "onTransitionRun"), _t(vy, "onTransitionStart"), _t(Sy, "onTransitionCancel"), _t(Do, "onTransitionEnd"), yn("onMouseEnter", ["mouseout", "mouseover"]), yn("onMouseLeave", ["mouseout", "mouseover"]), yn("onPointerEnter", ["pointerout", "pointerover"]), yn("onPointerLeave", ["pointerout", "pointerover"]), Yl(
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
  var qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), lg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa)
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
              Eu(B);
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
              Eu(B);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[Wi];
    l === void 0 && (l = t[Wi] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (Pd(t, e, 2, !1), l.add(n));
  }
  function Lr(e, t, l) {
    var n = 0;
    t && (n |= 4), Pd(
      l,
      e,
      n,
      t
    );
  }
  var ri = "_reactListening" + Math.random().toString(36).slice(2);
  function qr(e) {
    if (!e[ri]) {
      e[ri] = !0, Vs.forEach(function(l) {
        l !== "selectionchange" && (lg.has(l) || Lr(l, !1, e), Lr(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ri] || (t[ri] = !0, Lr("selectionchange", !1, t));
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
        a = es;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !uc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function kr(e, t, l, n, a) {
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
    lo(function() {
      var C = i, B = nc(l), _ = [];
      e: {
        var z = Mo.get(e);
        if (z !== void 0) {
          var N = Su, X = e;
          switch (e) {
            case "keypress":
              if (pu(l) === 0) break e;
            case "keydown":
            case "keyup":
              N = F0;
              break;
            case "focusin":
              X = "focus", N = sc;
              break;
            case "focusout":
              X = "blur", N = sc;
              break;
            case "beforeblur":
            case "afterblur":
              N = sc;
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
              N = uo;
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
            case Co:
            case wo:
            case zo:
              N = k0;
              break;
            case Do:
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
              N = co;
              break;
            case "toggle":
            case "beforetoggle":
              N = ay;
          }
          var ee = (t & 4) !== 0, ze = !ee && (e === "scroll" || e === "scrollend"), R = ee ? z !== null ? z + "Capture" : null : z;
          ee = [];
          for (var A = C, O; A !== null; ) {
            var H = A;
            if (O = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || O === null || R === null || (H = ca(A, R), H != null && ee.push(
              ka(A, H, O)
            )), ze) break;
            A = A.return;
          }
          0 < ee.length && (z = new N(
            z,
            X,
            null,
            l,
            B
          ), _.push({ event: z, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", z && l !== lc && (X = l.relatedTarget || l.fromElement) && (dn(X) || X[fn]))
            break e;
          if ((N || z) && (z = B.window === B ? B : (z = B.ownerDocument) ? z.defaultView || z.parentWindow : window, N ? (X = l.relatedTarget || l.toElement, N = C, X = X ? dn(X) : null, X !== null && (ze = d(X), ee = X.tag, X !== ze || ee !== 5 && ee !== 27 && ee !== 6) && (X = null)) : (N = null, X = C), N !== X)) {
            if (ee = uo, H = "onMouseLeave", R = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ee = co, H = "onPointerLeave", R = "onPointerEnter", A = "pointer"), ze = N == null ? z : ia(N), O = X == null ? z : ia(X), z = new ee(
              H,
              A + "leave",
              N,
              l,
              B
            ), z.target = ze, z.relatedTarget = O, H = null, dn(B) === C && (ee = new ee(
              R,
              A + "enter",
              X,
              l,
              B
            ), ee.target = O, ee.relatedTarget = ze, H = ee), ze = H, N && X)
              t: {
                for (ee = ng, R = N, A = X, O = 0, H = R; H; H = ee(H))
                  O++;
                H = 0;
                for (var $ = A; $; $ = ee($))
                  H++;
                for (; 0 < O - H; )
                  R = ee(R), O--;
                for (; 0 < H - O; )
                  A = ee(A), H--;
                for (; O--; ) {
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
              z,
              N,
              ee,
              !1
            ), X !== null && ze !== null && eh(
              _,
              ze,
              X,
              ee,
              !0
            );
          }
        }
        e: {
          if (z = C ? ia(C) : window, N = z.nodeName && z.nodeName.toLowerCase(), N === "select" || N === "input" && z.type === "file")
            var ve = go;
          else if (mo(z))
            if (po)
              ve = my;
            else {
              ve = dy;
              var F = fy;
            }
          else
            N = z.nodeName, !N || N.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? C && tc(C.elementType) && (ve = go) : ve = hy;
          if (ve && (ve = ve(e, C))) {
            yo(
              _,
              ve,
              l,
              B
            );
            break e;
          }
          F && F(e, z, C), e === "focusout" && C && z.type === "number" && C.memoizedProps.value != null && ec(z, "number", z.value);
        }
        switch (F = C ? ia(C) : window, e) {
          case "focusin":
            (mo(F) || F.contentEditable === "true") && (An = F, yc = C, ya = null);
            break;
          case "focusout":
            ya = yc = An = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gc = !1, To(_, l, B);
            break;
          case "selectionchange":
            if (gy) break;
          case "keydown":
          case "keyup":
            To(_, l, B);
        }
        var ce;
        if (fc)
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
          bn ? fo(e, l) && (me = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (me = "onCompositionStart");
        me && (ro && l.locale !== "ko" && (bn || me !== "onCompositionStart" ? me === "onCompositionEnd" && bn && (ce = no()) : (vl = B, ic = "value" in vl ? vl.value : vl.textContent, bn = !0)), F = si(C, me), 0 < F.length && (me = new io(
          me,
          e,
          null,
          l,
          B
        ), _.push({ event: me, listeners: F }), ce ? me.data = ce : (ce = ho(l), ce !== null && (me.data = ce)))), (ce = iy ? cy(e, l) : ry(e, l)) && (me = si(C, "onBeforeInput"), 0 < me.length && (F = new io(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          B
        ), _.push({
          event: F,
          listeners: me
        }), F.data = ce)), Py(
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
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ca(e, l), a != null && n.unshift(
        ka(e, a, i)
      ), a = ca(e, t), a != null && n.push(
        ka(e, a, i)
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
      m !== 5 && m !== 26 && m !== 27 || C === null || (v = C, a ? (C = ca(l, i), C != null && f.unshift(
        ka(l, C, v)
      )) : a || (C = ca(l, i), C != null && f.push(
        ka(l, C, v)
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
        eo(e, n, i);
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
        n != null && (e.onclick = Wt);
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
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Ft(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Ft(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Ft(
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = U0.get(l) || l, du(e, l, n));
    }
  }
  function Qr(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        eo(e, n, i);
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
        if (!Js.hasOwnProperty(l))
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
                  we(e, t, i, f, l, null);
              }
          }
        a && we(e, t, "srcSet", l.srcSet, l, null), n && we(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
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
                    throw Error(s(137, t));
                  break;
                default:
                  we(e, t, n, B, l, null);
              }
          }
        Ws(
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
                we(e, t, a, m, l, null);
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
                we(e, t, f, m, l, null);
            }
        $s(e, n, a, i);
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
        for (n = 0; n < qa.length; n++)
          de(qa[n], e);
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
        if (tc(t)) {
          for (B in l)
            l.hasOwnProperty(B) && (n = l[B], n !== void 0 && Qr(
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
                n.hasOwnProperty(N) || we(e, t, N, null, n, _);
            }
        }
        for (var z in n) {
          var N = n[z];
          if (_ = l[z], n.hasOwnProperty(z) && (N != null || _ != null))
            switch (z) {
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
                  throw Error(s(137, t));
                break;
              default:
                N !== _ && we(
                  e,
                  t,
                  z,
                  N,
                  n,
                  _
                );
            }
        }
        Pi(
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
        N = f = m = z = null;
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
        t = m, l = f, n = N, z != null ? gn(e, !!l, z, !1) : !!n != !!l && (t != null ? gn(e, !!l, t, !0) : gn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        N = z = null;
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
                N = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== i && we(e, t, f, a, n, i);
            }
        Is(e, z, N);
        return;
      case "option":
        for (var X in l)
          z = l[X], l.hasOwnProperty(X) && z != null && !n.hasOwnProperty(X) && (X === "selected" ? e.selected = !1 : we(
            e,
            t,
            X,
            null,
            n,
            z
          ));
        for (v in n)
          z = n[v], N = l[v], n.hasOwnProperty(v) && z !== N && (z != null || N != null) && (v === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : we(
            e,
            t,
            v,
            z,
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
          z = l[ee], l.hasOwnProperty(ee) && z != null && !n.hasOwnProperty(ee) && we(e, t, ee, null, n, z);
        for (C in n)
          if (z = n[C], N = l[C], n.hasOwnProperty(C) && z !== N && (z != null || N != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(s(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  C,
                  z,
                  n,
                  N
                );
            }
        return;
      default:
        if (tc(t)) {
          for (var ze in l)
            z = l[ze], l.hasOwnProperty(ze) && z !== void 0 && !n.hasOwnProperty(ze) && Qr(
              e,
              t,
              ze,
              void 0,
              n,
              z
            );
          for (B in n)
            z = n[B], N = l[B], !n.hasOwnProperty(B) || z === N || z === void 0 && N === void 0 || Qr(
              e,
              t,
              B,
              z,
              n,
              N
            );
          return;
        }
    }
    for (var R in l)
      z = l[R], l.hasOwnProperty(R) && z != null && !n.hasOwnProperty(R) && we(e, t, R, null, n, z);
    for (_ in n)
      z = n[_], N = l[_], !n.hasOwnProperty(_) || z === N || z == null && N == null || we(e, t, _, z, n, N);
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
  var Gr = null, Yr = null;
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
  function Vr(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jr = null;
  function rg() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Jr ? !1 : (Jr = e, !0) : (Jr = null, !1);
  }
  var ih = typeof setTimeout == "function" ? setTimeout : void 0, sg = typeof clearTimeout == "function" ? clearTimeout : void 0, ch = typeof Promise == "function" ? Promise : void 0, og = typeof queueMicrotask == "function" ? queueMicrotask : typeof ch < "u" ? function(e) {
    return ch.resolve(null).then(e).catch(fg);
  } : ih;
  function fg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function jl(e) {
    return e === "head";
  }
  function rh(e, t) {
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
          Qa(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Qa(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, m = i.nodeName;
            i[ua] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && Qa(e.ownerDocument.body);
      l = a;
    } while (l);
    Kn(t);
  }
  function sh(e, t) {
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
  function Xr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xr(l), Ii(l);
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
        if (!e[ua])
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
  function hg(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function oh(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zr(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Kr(e) {
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
  var Fr = null;
  function fh(e) {
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
  function Qa(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ii(e);
  }
  var jt = /* @__PURE__ */ new Map(), mh = /* @__PURE__ */ new Set();
  function fi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var dl = Q.d;
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
    var e = dl.f(), t = li();
    return e || t;
  }
  function gg(e) {
    var t = hn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Mf(t) : dl.r(e);
  }
  var Jn = typeof document > "u" ? null : document;
  function yh(e, t, l) {
    var n = Jn;
    if (n && typeof t == "string" && t) {
      var a = Ct(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), mh.has(a) || (mh.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), lt(t, "link", e), We(t), n.head.appendChild(t)));
    }
  }
  function pg(e) {
    dl.D(e), yh("dns-prefetch", e, null);
  }
  function vg(e, t) {
    dl.C(e, t), yh("preconnect", e, t);
  }
  function Sg(e, t, l) {
    dl.L(e, t, l);
    var n = Jn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + Ct(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + Ct(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + Ct(
        l.imageSizes
      ) + '"]')) : a += '[href="' + Ct(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Xn(e);
          break;
        case "script":
          i = Zn(e);
      }
      jt.has(i) || (e = D(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), jt.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ga(i)) || t === "script" && n.querySelector(Ya(i)) || (t = n.createElement("link"), lt(t, "link", e), We(t), n.head.appendChild(t)));
    }
  }
  function bg(e, t) {
    dl.m(e, t);
    var l = Jn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + Ct(n) + '"][href="' + Ct(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Zn(e);
      }
      if (!jt.has(i) && (e = D({ rel: "modulepreload", href: e }, t), jt.set(i, e), l.querySelector(a) === null)) {
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
        n = l.createElement("link"), lt(n, "link", e), We(n), l.head.appendChild(n);
      }
    }
  }
  function Ag(e, t, l) {
    dl.S(e, t, l);
    var n = Jn;
    if (n && e) {
      var a = mn(n).hoistableStyles, i = Xn(e);
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
          ), (l = jt.get(i)) && Wr(e, l);
          var v = f = n.createElement("link");
          We(v), lt(v, "link", e), v._p = new Promise(function(C, B) {
            v.onload = C, v.onerror = B;
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
  function Eg(e, t) {
    dl.X(e, t);
    var l = Jn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Zn(e), i = n.get(a);
      i || (i = l.querySelector(Ya(a)), i || (e = D({ src: e, async: !0 }, t), (t = jt.get(a)) && Ir(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Rg(e, t) {
    dl.M(e, t);
    var l = Jn;
    if (l && e) {
      var n = mn(l).hoistableScripts, a = Zn(e), i = n.get(a);
      i || (i = l.querySelector(Ya(a)), i || (e = D({ src: e, async: !0, type: "module" }, t), (t = jt.get(a)) && Ir(e, t), i = l.createElement("script"), We(i), lt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function gh(e, t, l, n) {
    var a = (a = se.current) ? fi(a) : null;
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
            Ga(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), jt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, jt.set(e, l), i || xg(
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
    return 'href="' + Ct(e) + '"';
  }
  function Ga(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ph(e) {
    return D({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function xg(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), lt(t, "link", l), We(t), e.head.appendChild(t));
  }
  function Zn(e) {
    return '[src="' + Ct(e) + '"]';
  }
  function Ya(e) {
    return "script[async]" + e;
  }
  function vh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Ct(l.href) + '"]'
          );
          if (n)
            return t.instance = n, We(n), n;
          var a = D({}, l, {
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
            Ga(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, We(i), i;
          n = ph(l), (a = jt.get(a)) && Wr(n, a), i = (e.ownerDocument || e).createElement("link"), We(i);
          var f = i;
          return f._p = new Promise(function(m, v) {
            f.onload = m, f.onerror = v;
          }), lt(i, "link", n), t.state.loading |= 4, di(i, l.precedence, e), t.instance = i;
        case "script":
          return i = Zn(l.src), (a = e.querySelector(
            Ya(i)
          )) ? (t.instance = a, We(a), a) : (n = l, (a = jt.get(i)) && (n = D({}, l), Ir(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), We(a), lt(a, "link", n), e.head.appendChild(a), t.instance = a);
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
  function Wr(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ir(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var hi = null;
  function Sh(e, t, l) {
    if (hi === null) {
      var n = /* @__PURE__ */ new Map(), a = hi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = hi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[ua] || i[$e] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Tg(e, t, l) {
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
        var a = Xn(n.href), i = t.querySelector(
          Ga(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = mi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, We(i);
          return;
        }
        i = t.ownerDocument || t, n = ph(n), (a = jt.get(a)) && Wr(n, a), i = i.createElement("link"), We(i);
        var f = i;
        f._p = new Promise(function(m, v) {
          f.onload = m, f.onerror = v;
        }), lt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = mi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var $r = 0;
  function Cg(e, t) {
    return e.stylesheets && e.count === 0 && gi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && gi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && $r === 0 && ($r = 62500 * cg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && gi(e, e.stylesheets), e.unsuspend)) {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, yi = /* @__PURE__ */ new Map(), t.forEach(wg, e), yi = null, mi.call(e));
  }
  function wg(e, t) {
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
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: W,
    _currentValue2: W,
    _threadCount: 0
  };
  function zg(e, t, l, n, a, i, f, m, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zi(0), this.hiddenUpdates = Zi(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
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
    ), t = 1, i === !0 && (t |= 24), i = St(3, null, null, t), e.current = i, i.stateNode = e, t = Mc(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, jc(i), e;
  }
  function Rh(e) {
    return e ? (e = xn, e) : xn;
  }
  function xh(e, t, l, n, a, i) {
    a = Rh(a), n.context === null ? n.context = a : n.pendingContext = a, n = xl(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = Tl(e, n, t), l !== null && (dt(l, e, t), Ea(l, e, t));
  }
  function Th(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Pr(e, t) {
    Th(e, t), (e = e.alternate) && Th(e, t);
  }
  function Oh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zl(e, 67108864);
      t !== null && dt(t, e, 67108864), Pr(e, 67108864);
    }
  }
  function Ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = xt();
      t = Ki(t);
      var l = Zl(e, t);
      l !== null && dt(l, e, t), Pr(e, t);
    }
  }
  var pi = !0;
  function Dg(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = Q.p;
    try {
      Q.p = 2, es(e, t, l, n);
    } finally {
      Q.p = i, q.T = a;
    }
  }
  function Mg(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = Q.p;
    try {
      Q.p = 8, es(e, t, l, n);
    } finally {
      Q.p = i, q.T = a;
    }
  }
  function es(e, t, l, n) {
    if (pi) {
      var a = ts(n);
      if (a === null)
        kr(
          e,
          t,
          n,
          vi,
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
                    Xt(i), (Ae & 6) === 0 && (ei = yt() + 500, La(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Zl(i, 2), m !== null && dt(m, i, 2), li(), Pr(i, 2);
            }
          if (i = ts(n), i === null && kr(
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
        kr(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function ts(e) {
    return e = nc(e), ls(e);
  }
  var vi = null;
  function ls(e) {
    if (vi = null, e = dn(e), e !== null) {
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
    return vi = e, null;
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
          case Bs:
            return 2;
          case js:
            return 8;
          case cu:
          case v0:
            return 32;
          case Hs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ns = !1, Hl = null, _l = null, Ll = null, Ja = /* @__PURE__ */ new Map(), Xa = /* @__PURE__ */ new Map(), ql = [], Ng = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        _l = null;
        break;
      case "mouseover":
      case "mouseout":
        Ll = null;
        break;
      case "pointerover":
      case "pointerout":
        Ja.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xa.delete(t.pointerId);
    }
  }
  function Za(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = hn(t), t !== null && Oh(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ug(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Hl = Za(
          Hl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return _l = Za(
          _l,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return Ll = Za(
          Ll,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Ja.set(
          i,
          Za(
            Ja.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, Xa.set(
          i,
          Za(
            Xa.get(i) || null,
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
    var t = dn(e.target);
    if (t !== null) {
      var l = d(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Gs(e.priority, function() {
              Ch(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Gs(e.priority, function() {
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
  function Si(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = ts(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        lc = n, l.target.dispatchEvent(n), lc = null;
      } else
        return t = hn(l), t !== null && Oh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Mh(e, t, l) {
    Si(e) && l.delete(t);
  }
  function Bg() {
    ns = !1, Hl !== null && Si(Hl) && (Hl = null), _l !== null && Si(_l) && (_l = null), Ll !== null && Si(Ll) && (Ll = null), Ja.forEach(Mh), Xa.forEach(Mh);
  }
  function bi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ns || (ns = !0, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
      Bg
    )));
  }
  var Ai = null;
  function Nh(e) {
    Ai !== e && (Ai = e, c.unstable_scheduleCallback(
      c.unstable_NormalPriority,
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
          i !== null && (e.splice(t, 3), t -= 3, tr(
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
    function t(v) {
      return bi(v, e);
    }
    Hl !== null && bi(Hl, e), _l !== null && bi(_l, e), Ll !== null && bi(Ll, e), Ja.forEach(t), Xa.forEach(t);
    for (var l = 0; l < ql.length; l++) {
      var n = ql[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < ql.length && (l = ql[0], l.blockedOn === null); )
      Dh(l), l.blockedOn === null && ql.shift();
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
            else if (ls(a) !== null) continue;
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
  function as(e) {
    this._internalRoot = e;
  }
  Ei.prototype.render = as.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var l = t.current, n = xt();
    xh(l, n, e, t, null, null);
  }, Ei.prototype.unmount = as.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      xh(e.current, 2, null, e, null, null), li(), t[fn] = null;
    }
  };
  function Ei(e) {
    this._internalRoot = e;
  }
  Ei.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Qs();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < ql.length && t !== 0 && t < ql[l].priority; l++) ;
      ql.splice(l, 0, e), l === 0 && Dh(e);
    }
  };
  var Bh = r.version;
  if (Bh !== "19.2.3")
    throw Error(
      s(
        527,
        Bh,
        "19.2.3"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
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
    var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ri.isDisabled && Ri.supportsFiber)
      try {
        la = Ri.inject(
          jg
        ), gt = Ri;
      } catch {
      }
  }
  return Wa.createRoot = function(e, t) {
    if (!h(e)) throw Error(s(299));
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
    ), e[fn] = t.current, qr(e), new as(t);
  }, Wa.hydrateRoot = function(e, t, l) {
    if (!h(e)) throw Error(s(299));
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
    ), t.context = Rh(null), l = t.current, n = xt(), n = Ki(n), a = xl(n), a.callback = null, Tl(l, a, n), l = n, t.current.lanes = l, aa(t, l), Xt(t), e[fn] = t.current, qr(e), new Ei(t);
  }, Wa.version = "19.2.3", Wa;
}
var Wh;
function E1() {
  if (Wh) return fs.exports;
  Wh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (c) {
        console.error(c);
      }
  }
  return u(), fs.exports = A1(), fs.exports;
}
var R1 = E1();
const Hm = ({ label: u, onClick: c, disabled: r, type: o = "button", className: s, children: h, mainButtonStyle: d }) => /* @__PURE__ */ w.jsx(
  "button",
  {
    className: s || "bg-[#bdbdbd] enabled:bg-[#a24796] hover:bg-[#a24796] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
    onClick: c,
    disabled: r,
    type: o,
    style: d,
    children: h || u
  }
), Fn = T.forwardRef((u, c) => {
  const { label: r, startIcon: o, endIcon: s, error: h, helperText: d, optional: g, className: p, options: y, ...S } = u, E = !!h || !!d, D = S.type === "select" || !!y;
  return /* @__PURE__ */ w.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
    r && /* @__PURE__ */ w.jsxs("label", { className: "block! mb-1.5! font-semibold! text-left!", children: [
      r,
      " ",
      g && /* @__PURE__ */ w.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
    ] }),
    /* @__PURE__ */ w.jsxs("div", { className: "flex! items-center! relative!", children: [
      o && /* @__PURE__ */ w.jsx("span", { className: "flex! items-center! justify-center! px-2! mr-1.5!", "aria-hidden": !0, children: o }),
      D ? /* @__PURE__ */ w.jsx(
        "select",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...S,
          children: y && y.map((G) => /* @__PURE__ */ w.jsx("option", { value: G.value, children: G.label }, G.value))
        }
      ) : /* @__PURE__ */ w.jsx(
        "input",
        {
          ref: c,
          className: `flex-1! py-2.5! pr-11! pl-3! border! ${E ? "border-[#d64545]!" : "border-[#cbd5d5]!"} rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]! focus:border-[#60a5fa]!`,
          ...S
        }
      ),
      s && /* @__PURE__ */ w.jsx("span", { className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!", "aria-hidden": !0, children: s })
    ] }),
    h && typeof h == "string" && /* @__PURE__ */ w.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: h }),
    !h && d && /* @__PURE__ */ w.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d })
  ] });
}), _m = ({
  type: u,
  message: c,
  actionText: r,
  onActionClick: o,
  onClose: s,
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
        return /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, y = g();
  return /* @__PURE__ */ w.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${h}`, children: [
    /* @__PURE__ */ w.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ w.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ w.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: c }),
      r && o && /* @__PURE__ */ w.jsx(
        "button",
        {
          type: "button",
          onClick: o,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: r
        }
      ),
      d
    ] }),
    s && /* @__PURE__ */ w.jsxs(
      "button",
      {
        type: "button",
        onClick: s,
        className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
        children: [
          /* @__PURE__ */ w.jsx("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    )
  ] });
}, Lm = () => /* @__PURE__ */ w.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class $a extends Error {
}
$a.prototype.name = "InvalidTokenError";
function x1(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (c, r) => {
    let o = r.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function T1(u) {
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
    return x1(c);
  } catch {
    return atob(c);
  }
}
function qm(u, c) {
  if (typeof u != "string")
    throw new $a("Invalid token specified: must be a string");
  c || (c = {});
  const r = c.header === !0 ? 0 : 1, o = u.split(".")[r];
  if (typeof o != "string")
    throw new $a(`Invalid token specified: missing part #${r + 1}`);
  let s;
  try {
    s = T1(o);
  } catch (h) {
    throw new $a(`Invalid token specified: invalid base64 for part #${r + 1} (${h.message})`);
  }
  try {
    return JSON.parse(s);
  } catch (h) {
    throw new $a(`Invalid token specified: invalid json for part #${r + 1} (${h.message})`);
  }
}
function O1() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const c = u.split(".");
  return c.length >= 2 ? "." + c.slice(-2).join(".") : "";
}
function Ni(u, c, r, o = !0) {
  const s = /* @__PURE__ */ new Date();
  s.setSeconds(s.getSeconds() + r);
  const h = O1(), d = h ? `; domain=${h}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(c) : c;
  document.cookie = `${u}=${p}; expires=${s.toUTCString()}; path=/${d}${g}; SameSite=Lax`;
}
function km(u, c) {
  return function() {
    return u.apply(c, arguments);
  };
}
var Ih = {};
const { toString: C1 } = Object.prototype, { getPrototypeOf: zs } = Object, { iterator: Hi, toStringTag: Qm } = Symbol, _i = /* @__PURE__ */ ((u) => (c) => {
  const r = C1.call(c);
  return u[r] || (u[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qt = (u) => (u = u.toLowerCase(), (c) => _i(c) === u), Li = (u) => (c) => typeof c === u, { isArray: Pn } = Array, Wn = Li("undefined");
function nu(u) {
  return u !== null && !Wn(u) && u.constructor !== null && !Wn(u.constructor) && ht(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const Gm = Qt("ArrayBuffer");
function w1(u) {
  let c;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? c = ArrayBuffer.isView(u) : c = u && u.buffer && Gm(u.buffer), c;
}
const z1 = Li("string"), ht = Li("function"), Ym = Li("number"), au = (u) => u !== null && typeof u == "object", D1 = (u) => u === !0 || u === !1, wi = (u) => {
  if (_i(u) !== "object")
    return !1;
  const c = zs(u);
  return (c === null || c === Object.prototype || Object.getPrototypeOf(c) === null) && !(Qm in u) && !(Hi in u);
}, M1 = (u) => {
  if (!au(u) || nu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, N1 = Qt("Date"), U1 = Qt("File"), B1 = Qt("Blob"), j1 = Qt("FileList"), H1 = (u) => au(u) && ht(u.pipe), _1 = (u) => {
  let c;
  return u && (typeof FormData == "function" && u instanceof FormData || ht(u.append) && ((c = _i(u)) === "formdata" || // detect form-data instance
  c === "object" && ht(u.toString) && u.toString() === "[object FormData]"));
}, L1 = Qt("URLSearchParams"), [q1, k1, Q1, G1] = ["ReadableStream", "Request", "Response", "Headers"].map(Qt), Y1 = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function uu(u, c, { allOwnKeys: r = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let o, s;
  if (typeof u != "object" && (u = [u]), Pn(u))
    for (o = 0, s = u.length; o < s; o++)
      c.call(null, u[o], o, u);
  else {
    if (nu(u))
      return;
    const h = r ? Object.getOwnPropertyNames(u) : Object.keys(u), d = h.length;
    let g;
    for (o = 0; o < d; o++)
      g = h[o], c.call(null, u[g], g, u);
  }
}
function Vm(u, c) {
  if (nu(u))
    return null;
  c = c.toLowerCase();
  const r = Object.keys(u);
  let o = r.length, s;
  for (; o-- > 0; )
    if (s = r[o], c === s.toLowerCase())
      return s;
  return null;
}
const cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Jm = (u) => !Wn(u) && u !== cn;
function Ss() {
  const { caseless: u, skipUndefined: c } = Jm(this) && this || {}, r = {}, o = (s, h) => {
    const d = u && Vm(r, h) || h;
    wi(r[d]) && wi(s) ? r[d] = Ss(r[d], s) : wi(s) ? r[d] = Ss({}, s) : Pn(s) ? r[d] = s.slice() : (!c || !Wn(s)) && (r[d] = s);
  };
  for (let s = 0, h = arguments.length; s < h; s++)
    arguments[s] && uu(arguments[s], o);
  return r;
}
const V1 = (u, c, r, { allOwnKeys: o } = {}) => (uu(c, (s, h) => {
  r && ht(s) ? u[h] = km(s, r) : u[h] = s;
}, { allOwnKeys: o }), u), J1 = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), X1 = (u, c, r, o) => {
  u.prototype = Object.create(c.prototype, o), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: c.prototype
  }), r && Object.assign(u.prototype, r);
}, Z1 = (u, c, r, o) => {
  let s, h, d;
  const g = {};
  if (c = c || {}, u == null) return c;
  do {
    for (s = Object.getOwnPropertyNames(u), h = s.length; h-- > 0; )
      d = s[h], (!o || o(d, u, c)) && !g[d] && (c[d] = u[d], g[d] = !0);
    u = r !== !1 && zs(u);
  } while (u && (!r || r(u, c)) && u !== Object.prototype);
  return c;
}, K1 = (u, c, r) => {
  u = String(u), (r === void 0 || r > u.length) && (r = u.length), r -= c.length;
  const o = u.indexOf(c, r);
  return o !== -1 && o === r;
}, F1 = (u) => {
  if (!u) return null;
  if (Pn(u)) return u;
  let c = u.length;
  if (!Ym(c)) return null;
  const r = new Array(c);
  for (; c-- > 0; )
    r[c] = u[c];
  return r;
}, W1 = /* @__PURE__ */ ((u) => (c) => u && c instanceof u)(typeof Uint8Array < "u" && zs(Uint8Array)), I1 = (u, c) => {
  const o = (u && u[Hi]).call(u);
  let s;
  for (; (s = o.next()) && !s.done; ) {
    const h = s.value;
    c.call(u, h[0], h[1]);
  }
}, $1 = (u, c) => {
  let r;
  const o = [];
  for (; (r = u.exec(c)) !== null; )
    o.push(r);
  return o;
}, P1 = Qt("HTMLFormElement"), ev = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, o, s) {
    return o.toUpperCase() + s;
  }
), $h = (({ hasOwnProperty: u }) => (c, r) => u.call(c, r))(Object.prototype), tv = Qt("RegExp"), Xm = (u, c) => {
  const r = Object.getOwnPropertyDescriptors(u), o = {};
  uu(r, (s, h) => {
    let d;
    (d = c(s, h, u)) !== !1 && (o[h] = d || s);
  }), Object.defineProperties(u, o);
}, lv = (u) => {
  Xm(u, (c, r) => {
    if (ht(u) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const o = u[r];
    if (ht(o)) {
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
  const r = {}, o = (s) => {
    s.forEach((h) => {
      r[h] = !0;
    });
  };
  return Pn(u) ? o(u) : o(String(u).split(c)), r;
}, av = () => {
}, uv = (u, c) => u != null && Number.isFinite(u = +u) ? u : c;
function iv(u) {
  return !!(u && ht(u.append) && u[Qm] === "FormData" && u[Hi]);
}
const cv = (u) => {
  const c = new Array(10), r = (o, s) => {
    if (au(o)) {
      if (c.indexOf(o) >= 0)
        return;
      if (nu(o))
        return o;
      if (!("toJSON" in o)) {
        c[s] = o;
        const h = Pn(o) ? [] : {};
        return uu(o, (d, g) => {
          const p = r(d, s + 1);
          !Wn(p) && (h[g] = p);
        }), c[s] = void 0, h;
      }
    }
    return o;
  };
  return r(u, 0);
}, rv = Qt("AsyncFunction"), sv = (u) => u && (au(u) || ht(u)) && ht(u.then) && ht(u.catch), Zm = ((u, c) => u ? setImmediate : c ? ((r, o) => (cn.addEventListener("message", ({ source: s, data: h }) => {
  s === cn && h === r && o.length && o.shift()();
}, !1), (s) => {
  o.push(s), cn.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  ht(cn.postMessage)
), ov = typeof queueMicrotask < "u" ? queueMicrotask.bind(cn) : typeof Ih < "u" && Ih.nextTick || Zm, fv = (u) => u != null && ht(u[Hi]), M = {
  isArray: Pn,
  isArrayBuffer: Gm,
  isBuffer: nu,
  isFormData: _1,
  isArrayBufferView: w1,
  isString: z1,
  isNumber: Ym,
  isBoolean: D1,
  isObject: au,
  isPlainObject: wi,
  isEmptyObject: M1,
  isReadableStream: q1,
  isRequest: k1,
  isResponse: Q1,
  isHeaders: G1,
  isUndefined: Wn,
  isDate: N1,
  isFile: U1,
  isBlob: B1,
  isRegExp: tv,
  isFunction: ht,
  isStream: H1,
  isURLSearchParams: L1,
  isTypedArray: W1,
  isFileList: j1,
  forEach: uu,
  merge: Ss,
  extend: V1,
  trim: Y1,
  stripBOM: J1,
  inherits: X1,
  toFlatObject: Z1,
  kindOf: _i,
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
  global: cn,
  isContextDefined: Jm,
  isSpecCompliantForm: iv,
  toJSONObject: cv,
  isAsyncFn: rv,
  isThenable: sv,
  setImmediate: Zm,
  asap: ov,
  isIterable: fv
};
function ie(u, c, r, o, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", c && (this.code = c), r && (this.config = r), o && (this.request = o), s && (this.response = s, this.status = s.status ? s.status : null);
}
M.inherits(ie, Error, {
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
ie.from = (u, c, r, o, s, h) => {
  const d = Object.create(Km);
  M.toFlatObject(u, d, function(S) {
    return S !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = c == null && u ? u.code : c;
  return ie.call(d, g, p, r, o, s), u && d.cause == null && Object.defineProperty(d, "cause", { value: u, configurable: !0 }), d.name = u && u.name || "Error", h && Object.assign(d, h), d;
};
const dv = null;
function bs(u) {
  return M.isPlainObject(u) || M.isArray(u);
}
function Wm(u) {
  return M.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function Ph(u, c, r) {
  return u ? u.concat(c).map(function(s, h) {
    return s = Wm(s), !r && h ? "[" + s + "]" : s;
  }).join(r ? "." : "") : c;
}
function hv(u) {
  return M.isArray(u) && !u.some(bs);
}
const mv = M.toFlatObject(M, {}, null, function(c) {
  return /^is[A-Z]/.test(c);
});
function qi(u, c, r) {
  if (!M.isObject(u))
    throw new TypeError("target must be an object");
  c = c || new FormData(), r = M.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, U) {
    return !M.isUndefined(U[L]);
  });
  const o = r.metaTokens, s = r.visitor || S, h = r.dots, d = r.indexes, p = (r.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(c);
  if (!M.isFunction(s))
    throw new TypeError("visitor must be a function");
  function y(x) {
    if (x === null) return "";
    if (M.isDate(x))
      return x.toISOString();
    if (M.isBoolean(x))
      return x.toString();
    if (!p && M.isBlob(x))
      throw new ie("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(x) || M.isTypedArray(x) ? p && typeof Blob == "function" ? new Blob([x]) : Buffer.from(x) : x;
  }
  function S(x, L, U) {
    let Y = x;
    if (x && !U && typeof x == "object") {
      if (M.endsWith(L, "{}"))
        L = o ? L : L.slice(0, -2), x = JSON.stringify(x);
      else if (M.isArray(x) && hv(x) || (M.isFileList(x) || M.endsWith(L, "[]")) && (Y = M.toArray(x)))
        return L = Wm(L), Y.forEach(function(Z, I) {
          !(M.isUndefined(Z) || Z === null) && c.append(
            // eslint-disable-next-line no-nested-ternary
            d === !0 ? Ph([L], I, h) : d === null ? L : L + "[]",
            y(Z)
          );
        }), !1;
    }
    return bs(x) ? !0 : (c.append(Ph(U, L, h), y(x)), !1);
  }
  const E = [], D = Object.assign(mv, {
    defaultVisitor: S,
    convertValue: y,
    isVisitable: bs
  });
  function G(x, L) {
    if (!M.isUndefined(x)) {
      if (E.indexOf(x) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      E.push(x), M.forEach(x, function(Y, J) {
        (!(M.isUndefined(Y) || Y === null) && s.call(
          c,
          Y,
          M.isString(J) ? J.trim() : J,
          L,
          D
        )) === !0 && G(Y, L ? L.concat(J) : [J]);
      }), E.pop();
    }
  }
  if (!M.isObject(u))
    throw new TypeError("data must be an object");
  return G(u), c;
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
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(o) {
    return c[o];
  });
}
function Ds(u, c) {
  this._pairs = [], u && qi(u, this, c);
}
const Im = Ds.prototype;
Im.append = function(c, r) {
  this._pairs.push([c, r]);
};
Im.toString = function(c) {
  const r = c ? function(o) {
    return c.call(this, o, em);
  } : em;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function yv(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function $m(u, c, r) {
  if (!c)
    return u;
  const o = r && r.encode || yv;
  M.isFunction(r) && (r = {
    serialize: r
  });
  const s = r && r.serialize;
  let h;
  if (s ? h = s(c, r) : h = M.isURLSearchParams(c) ? c.toString() : new Ds(c, r).toString(o), h) {
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
  use(c, r, o) {
    return this.handlers.push({
      fulfilled: c,
      rejected: r,
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
    M.forEach(this.handlers, function(o) {
      o !== null && c(o);
    });
  }
}
const Pm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, gv = typeof URLSearchParams < "u" ? URLSearchParams : Ds, pv = typeof FormData < "u" ? FormData : null, vv = typeof Blob < "u" ? Blob : null, Sv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: gv,
    FormData: pv,
    Blob: vv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ms = typeof window < "u" && typeof document < "u", As = typeof navigator == "object" && navigator || void 0, bv = Ms && (!As || ["ReactNative", "NativeScript", "NS"].indexOf(As.product) < 0), Av = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ev = Ms && window.location.href || "http://localhost", Rv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ms,
  hasStandardBrowserEnv: bv,
  hasStandardBrowserWebWorkerEnv: Av,
  navigator: As,
  origin: Ev
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...Rv,
  ...Sv
};
function xv(u, c) {
  return qi(u, new at.classes.URLSearchParams(), {
    visitor: function(r, o, s, h) {
      return at.isNode && M.isBuffer(r) ? (this.append(o, r.toString("base64")), !1) : h.defaultVisitor.apply(this, arguments);
    },
    ...c
  });
}
function Tv(u) {
  return M.matchAll(/\w+|\[(\w*)]/g, u).map((c) => c[0] === "[]" ? "" : c[1] || c[0]);
}
function Ov(u) {
  const c = {}, r = Object.keys(u);
  let o;
  const s = r.length;
  let h;
  for (o = 0; o < s; o++)
    h = r[o], c[h] = u[h];
  return c;
}
function e0(u) {
  function c(r, o, s, h) {
    let d = r[h++];
    if (d === "__proto__") return !0;
    const g = Number.isFinite(+d), p = h >= r.length;
    return d = !d && M.isArray(s) ? s.length : d, p ? (M.hasOwnProp(s, d) ? s[d] = [s[d], o] : s[d] = o, !g) : ((!s[d] || !M.isObject(s[d])) && (s[d] = []), c(r, o, s[d], h) && M.isArray(s[d]) && (s[d] = Ov(s[d])), !g);
  }
  if (M.isFormData(u) && M.isFunction(u.entries)) {
    const r = {};
    return M.forEachEntry(u, (o, s) => {
      c(Tv(o), s, r, 0);
    }), r;
  }
  return null;
}
function Cv(u, c, r) {
  if (M.isString(u))
    try {
      return (c || JSON.parse)(u), M.trim(u);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (r || JSON.stringify)(u);
}
const iu = {
  transitional: Pm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(c, r) {
    const o = r.getContentType() || "", s = o.indexOf("application/json") > -1, h = M.isObject(c);
    if (h && M.isHTMLForm(c) && (c = new FormData(c)), M.isFormData(c))
      return s ? JSON.stringify(e0(c)) : c;
    if (M.isArrayBuffer(c) || M.isBuffer(c) || M.isStream(c) || M.isFile(c) || M.isBlob(c) || M.isReadableStream(c))
      return c;
    if (M.isArrayBufferView(c))
      return c.buffer;
    if (M.isURLSearchParams(c))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), c.toString();
    let g;
    if (h) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return xv(c, this.formSerializer).toString();
      if ((g = M.isFileList(c)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return qi(
          g ? { "files[]": c } : c,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return h || s ? (r.setContentType("application/json", !1), Cv(c)) : c;
  }],
  transformResponse: [function(c) {
    const r = this.transitional || iu.transitional, o = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (M.isResponse(c) || M.isReadableStream(c))
      return c;
    if (c && M.isString(c) && (o && !this.responseType || s)) {
      const d = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(c, this.parseReviver);
      } catch (g) {
        if (d)
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
M.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  iu.headers[u] = {};
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
  let r, o, s;
  return u && u.split(`
`).forEach(function(d) {
    s = d.indexOf(":"), r = d.substring(0, s).trim().toLowerCase(), o = d.substring(s + 1).trim(), !(!r || c[r] && wv[r]) && (r === "set-cookie" ? c[r] ? c[r].push(o) : c[r] = [o] : c[r] = c[r] ? c[r] + ", " + o : o);
  }), c;
}, lm = /* @__PURE__ */ Symbol("internals");
function Ia(u) {
  return u && String(u).trim().toLowerCase();
}
function zi(u) {
  return u === !1 || u == null ? u : M.isArray(u) ? u.map(zi) : String(u);
}
function Dv(u) {
  const c = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = r.exec(u); )
    c[o[1]] = o[2];
  return c;
}
const Mv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ms(u, c, r, o, s) {
  if (M.isFunction(o))
    return o.call(this, c, r);
  if (s && (c = r), !!M.isString(c)) {
    if (M.isString(o))
      return c.indexOf(o) !== -1;
    if (M.isRegExp(o))
      return o.test(c);
  }
}
function Nv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (c, r, o) => r.toUpperCase() + o);
}
function Uv(u, c) {
  const r = M.toCamelCase(" " + c);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(u, o + r, {
      value: function(s, h, d) {
        return this[o].call(this, c, s, h, d);
      },
      configurable: !0
    });
  });
}
let mt = class {
  constructor(c) {
    c && this.set(c);
  }
  set(c, r, o) {
    const s = this;
    function h(g, p, y) {
      const S = Ia(p);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const E = M.findKey(s, S);
      (!E || s[E] === void 0 || y === !0 || y === void 0 && s[E] !== !1) && (s[E || p] = zi(g));
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
      c != null && h(r, c, o);
    return this;
  }
  get(c, r) {
    if (c = Ia(c), c) {
      const o = M.findKey(this, c);
      if (o) {
        const s = this[o];
        if (!r)
          return s;
        if (r === !0)
          return Dv(s);
        if (M.isFunction(r))
          return r.call(this, s, o);
        if (M.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(c, r) {
    if (c = Ia(c), c) {
      const o = M.findKey(this, c);
      return !!(o && this[o] !== void 0 && (!r || ms(this, this[o], o, r)));
    }
    return !1;
  }
  delete(c, r) {
    const o = this;
    let s = !1;
    function h(d) {
      if (d = Ia(d), d) {
        const g = M.findKey(o, d);
        g && (!r || ms(o, o[g], g, r)) && (delete o[g], s = !0);
      }
    }
    return M.isArray(c) ? c.forEach(h) : h(c), s;
  }
  clear(c) {
    const r = Object.keys(this);
    let o = r.length, s = !1;
    for (; o--; ) {
      const h = r[o];
      (!c || ms(this, this[h], h, c, !0)) && (delete this[h], s = !0);
    }
    return s;
  }
  normalize(c) {
    const r = this, o = {};
    return M.forEach(this, (s, h) => {
      const d = M.findKey(o, h);
      if (d) {
        r[d] = zi(s), delete r[h];
        return;
      }
      const g = c ? Nv(h) : String(h).trim();
      g !== h && delete r[h], r[g] = zi(s), o[g] = !0;
    }), this;
  }
  concat(...c) {
    return this.constructor.concat(this, ...c);
  }
  toJSON(c) {
    const r = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (o, s) => {
      o != null && o !== !1 && (r[s] = c && M.isArray(o) ? o.join(", ") : o);
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
    const o = new this(c);
    return r.forEach((s) => o.set(s)), o;
  }
  static accessor(c) {
    const o = (this[lm] = this[lm] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function h(d) {
      const g = Ia(d);
      o[g] || (Uv(s, d), o[g] = !0);
    }
    return M.isArray(c) ? c.forEach(h) : h(c), this;
  }
};
mt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(mt.prototype, ({ value: u }, c) => {
  let r = c[0].toUpperCase() + c.slice(1);
  return {
    get: () => u,
    set(o) {
      this[r] = o;
    }
  };
});
M.freezeMethods(mt);
function ys(u, c) {
  const r = this || iu, o = c || r, s = mt.from(o.headers);
  let h = o.data;
  return M.forEach(u, function(g) {
    h = g.call(r, h, s.normalize(), c ? c.status : void 0);
  }), s.normalize(), h;
}
function t0(u) {
  return !!(u && u.__CANCEL__);
}
function ea(u, c, r) {
  ie.call(this, u ?? "canceled", ie.ERR_CANCELED, c, r), this.name = "CanceledError";
}
M.inherits(ea, ie, {
  __CANCEL__: !0
});
function l0(u, c, r) {
  const o = r.config.validateStatus;
  !r.status || !o || o(r.status) ? u(r) : c(new ie(
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
  const r = new Array(u), o = new Array(u);
  let s = 0, h = 0, d;
  return c = c !== void 0 ? c : 1e3, function(p) {
    const y = Date.now(), S = o[h];
    d || (d = y), r[s] = p, o[s] = y;
    let E = h, D = 0;
    for (; E !== s; )
      D += r[E++], E = E % u;
    if (s = (s + 1) % u, s === h && (h = (h + 1) % u), y - d < c)
      return;
    const G = S && y - S;
    return G ? Math.round(D * 1e3 / G) : void 0;
  };
}
function Hv(u, c) {
  let r = 0, o = 1e3 / c, s, h;
  const d = (y, S = Date.now()) => {
    r = S, s = null, h && (clearTimeout(h), h = null), u(...y);
  };
  return [(...y) => {
    const S = Date.now(), E = S - r;
    E >= o ? d(y, S) : (s = y, h || (h = setTimeout(() => {
      h = null, d(s);
    }, o - E)));
  }, () => s && d(s)];
}
const Ui = (u, c, r = 3) => {
  let o = 0;
  const s = jv(50, 250);
  return Hv((h) => {
    const d = h.loaded, g = h.lengthComputable ? h.total : void 0, p = d - o, y = s(p), S = d <= g;
    o = d;
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
  return [(o) => c[0]({
    lengthComputable: r,
    total: u,
    loaded: o
  }), c[1]];
}, am = (u) => (...c) => M.asap(() => u(...c)), _v = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, c) => (r) => (r = new URL(r, at.origin), u.protocol === r.protocol && u.host === r.host && (c || u.port === r.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Lv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, c, r, o, s, h, d) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(c)}`];
      M.isNumber(r) && g.push(`expires=${new Date(r).toUTCString()}`), M.isString(o) && g.push(`path=${o}`), M.isString(s) && g.push(`domain=${s}`), h === !0 && g.push("secure"), M.isString(d) && g.push(`SameSite=${d}`), document.cookie = g.join("; ");
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
  let o = !qv(c);
  return u && (o || r == !1) ? kv(u, c) : c;
}
const um = (u) => u instanceof mt ? { ...u } : u;
function sn(u, c) {
  c = c || {};
  const r = {};
  function o(y, S, E, D) {
    return M.isPlainObject(y) && M.isPlainObject(S) ? M.merge.call({ caseless: D }, y, S) : M.isPlainObject(S) ? M.merge({}, S) : M.isArray(S) ? S.slice() : S;
  }
  function s(y, S, E, D) {
    if (M.isUndefined(S)) {
      if (!M.isUndefined(y))
        return o(void 0, y, E, D);
    } else return o(y, S, E, D);
  }
  function h(y, S) {
    if (!M.isUndefined(S))
      return o(void 0, S);
  }
  function d(y, S) {
    if (M.isUndefined(S)) {
      if (!M.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, S);
  }
  function g(y, S, E) {
    if (E in c)
      return o(y, S);
    if (E in u)
      return o(void 0, y);
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
    headers: (y, S, E) => s(um(y), um(S), E, !0)
  };
  return M.forEach(Object.keys({ ...u, ...c }), function(S) {
    const E = p[S] || s, D = E(u[S], c[S], S);
    M.isUndefined(D) && E !== g || (r[S] = D);
  }), r;
}
const a0 = (u) => {
  const c = sn({}, u);
  let { data: r, withXSRFToken: o, xsrfHeaderName: s, xsrfCookieName: h, headers: d, auth: g } = c;
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
  if (at.hasStandardBrowserEnv && (o && M.isFunction(o) && (o = o(c)), o || o !== !1 && _v(c.url))) {
    const p = s && h && Lv.read(h);
    p && d.set(s, p);
  }
  return c;
}, Qv = typeof XMLHttpRequest < "u", Gv = Qv && function(u) {
  return new Promise(function(r, o) {
    const s = a0(u);
    let h = s.data;
    const d = mt.from(s.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = s, S, E, D, G, x;
    function L() {
      G && G(), x && x(), s.cancelToken && s.cancelToken.unsubscribe(S), s.signal && s.signal.removeEventListener("abort", S);
    }
    let U = new XMLHttpRequest();
    U.open(s.method.toUpperCase(), s.url, !0), U.timeout = s.timeout;
    function Y() {
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
      l0(function(te) {
        r(te), L();
      }, function(te) {
        o(te), L();
      }, le), U = null;
    }
    "onloadend" in U ? U.onloadend = Y : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(Y);
    }, U.onabort = function() {
      U && (o(new ie("Request aborted", ie.ECONNABORTED, u, U)), U = null);
    }, U.onerror = function(I) {
      const le = I && I.message ? I.message : "Network Error", oe = new ie(le, ie.ERR_NETWORK, u, U);
      oe.event = I || null, o(oe), U = null;
    }, U.ontimeout = function() {
      let I = s.timeout ? "timeout of " + s.timeout + "ms exceeded" : "timeout exceeded";
      const le = s.transitional || Pm;
      s.timeoutErrorMessage && (I = s.timeoutErrorMessage), o(new ie(
        I,
        le.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED,
        u,
        U
      )), U = null;
    }, h === void 0 && d.setContentType(null), "setRequestHeader" in U && M.forEach(d.toJSON(), function(I, le) {
      U.setRequestHeader(le, I);
    }), M.isUndefined(s.withCredentials) || (U.withCredentials = !!s.withCredentials), g && g !== "json" && (U.responseType = s.responseType), y && ([D, x] = Ui(y, !0), U.addEventListener("progress", D)), p && U.upload && ([E, G] = Ui(p), U.upload.addEventListener("progress", E), U.upload.addEventListener("loadend", G)), (s.cancelToken || s.signal) && (S = (Z) => {
      U && (o(!Z || Z.type ? new ea(null, u, U) : Z), U.abort(), U = null);
    }, s.cancelToken && s.cancelToken.subscribe(S), s.signal && (s.signal.aborted ? S() : s.signal.addEventListener("abort", S)));
    const J = Bv(s.url);
    if (J && at.protocols.indexOf(J) === -1) {
      o(new ie("Unsupported protocol " + J + ":", ie.ERR_BAD_REQUEST, u));
      return;
    }
    U.send(h || null);
  });
}, Yv = (u, c) => {
  const { length: r } = u = u ? u.filter(Boolean) : [];
  if (c || r) {
    let o = new AbortController(), s;
    const h = function(y) {
      if (!s) {
        s = !0, g();
        const S = y instanceof Error ? y : this.reason;
        o.abort(S instanceof ie ? S : new ea(S instanceof Error ? S.message : S));
      }
    };
    let d = c && setTimeout(() => {
      d = null, h(new ie(`timeout ${c} of ms exceeded`, ie.ETIMEDOUT));
    }, c);
    const g = () => {
      u && (d && clearTimeout(d), d = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(h) : y.removeEventListener("abort", h);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", h));
    const { signal: p } = o;
    return p.unsubscribe = () => M.asap(g), p;
  }
}, Vv = function* (u, c) {
  let r = u.byteLength;
  if (r < c) {
    yield u;
    return;
  }
  let o = 0, s;
  for (; o < r; )
    s = o + c, yield u.slice(o, s), o = s;
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
      const { done: r, value: o } = await c.read();
      if (r)
        break;
      yield o;
    }
  } finally {
    await c.cancel();
  }
}, im = (u, c, r, o) => {
  const s = Jv(u, c);
  let h = 0, d, g = (p) => {
    d || (d = !0, o && o(p));
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
      return g(p), s.return();
    }
  }, {
    highWaterMark: 2
  });
}, cm = 64 * 1024, { isFunction: Ti } = M, Zv = (({ Request: u, Response: c }) => ({
  Request: u,
  Response: c
}))(M.global), {
  ReadableStream: rm,
  TextEncoder: sm
} = M.global, om = (u, ...c) => {
  try {
    return !!u(...c);
  } catch {
    return !1;
  }
}, Kv = (u) => {
  u = M.merge.call({
    skipUndefined: !0
  }, Zv, u);
  const { fetch: c, Request: r, Response: o } = u, s = c ? Ti(c) : typeof fetch == "function", h = Ti(r), d = Ti(o);
  if (!s)
    return !1;
  const g = s && Ti(rm), p = s && (typeof sm == "function" ? /* @__PURE__ */ ((x) => (L) => x.encode(L))(new sm()) : async (x) => new Uint8Array(await new r(x).arrayBuffer())), y = h && g && om(() => {
    let x = !1;
    const L = new r(at.origin, {
      body: new rm(),
      method: "POST",
      get duplex() {
        return x = !0, "half";
      }
    }).headers.has("Content-Type");
    return x && !L;
  }), S = d && g && om(() => M.isReadableStream(new o("").body)), E = {
    stream: S && ((x) => x.body)
  };
  s && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((x) => {
    !E[x] && (E[x] = (L, U) => {
      let Y = L && L[x];
      if (Y)
        return Y.call(L);
      throw new ie(`Response type '${x}' is not supported`, ie.ERR_NOT_SUPPORT, U);
    });
  });
  const D = async (x) => {
    if (x == null)
      return 0;
    if (M.isBlob(x))
      return x.size;
    if (M.isSpecCompliantForm(x))
      return (await new r(at.origin, {
        method: "POST",
        body: x
      }).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(x) || M.isArrayBuffer(x))
      return x.byteLength;
    if (M.isURLSearchParams(x) && (x = x + ""), M.isString(x))
      return (await p(x)).byteLength;
  }, G = async (x, L) => {
    const U = M.toFiniteNumber(x.getContentLength());
    return U ?? D(L);
  };
  return async (x) => {
    let {
      url: L,
      method: U,
      data: Y,
      signal: J,
      cancelToken: Z,
      timeout: I,
      onDownloadProgress: le,
      onUploadProgress: oe,
      responseType: te,
      headers: P,
      withCredentials: be = "same-origin",
      fetchOptions: _e
    } = a0(x), Ne = c || fetch;
    te = te ? (te + "").toLowerCase() : "text";
    let Te = Yv([J, Z && Z.toAbortSignal()], I), Oe = null;
    const Ze = Te && Te.unsubscribe && (() => {
      Te.unsubscribe();
    });
    let Fe;
    try {
      if (oe && y && U !== "get" && U !== "head" && (Fe = await G(P, Y)) !== 0) {
        let De = new r(L, {
          method: "POST",
          body: Y,
          duplex: "half"
        }), b;
        if (M.isFormData(Y) && (b = De.headers.get("content-type")) && P.setContentType(b), De.body) {
          const [j, V] = nm(
            Fe,
            Ui(am(oe))
          );
          Y = im(De.body, cm, j, V);
        }
      }
      M.isString(be) || (be = be ? "include" : "omit");
      const k = h && "credentials" in r.prototype, q = {
        ..._e,
        signal: Te,
        method: U.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: Y,
        duplex: "half",
        credentials: k ? be : void 0
      };
      Oe = h && new r(L, q);
      let Q = await (h ? Ne(Oe, _e) : Ne(L, q));
      const W = S && (te === "stream" || te === "response");
      if (S && (le || W && Ze)) {
        const De = {};
        ["status", "statusText", "headers"].forEach((K) => {
          De[K] = Q[K];
        });
        const b = M.toFiniteNumber(Q.headers.get("content-length")), [j, V] = le && nm(
          b,
          Ui(am(le), !0)
        ) || [];
        Q = new o(
          im(Q.body, cm, j, () => {
            V && V(), Ze && Ze();
          }),
          De
        );
      }
      te = te || "text";
      let re = await E[M.findKey(E, te) || "text"](Q, x);
      return !W && Ze && Ze(), await new Promise((De, b) => {
        l0(De, b, {
          data: re,
          headers: mt.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: x,
          request: Oe
        });
      });
    } catch (k) {
      throw Ze && Ze(), k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message) ? Object.assign(
        new ie("Network Error", ie.ERR_NETWORK, x, Oe),
        {
          cause: k.cause || k
        }
      ) : ie.from(k, k && k.code, x, Oe);
    }
  };
}, Fv = /* @__PURE__ */ new Map(), u0 = (u) => {
  let c = u && u.env || {};
  const { fetch: r, Request: o, Response: s } = c, h = [
    o,
    s,
    r
  ];
  let d = h.length, g = d, p, y, S = Fv;
  for (; g--; )
    p = h[g], y = S.get(p), y === void 0 && S.set(p, y = g ? /* @__PURE__ */ new Map() : Kv(c)), S = y;
  return y;
};
u0();
const Ns = {
  http: dv,
  xhr: Gv,
  fetch: {
    get: u0
  }
};
M.forEach(Ns, (u, c) => {
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
  let o, s;
  const h = {};
  for (let d = 0; d < r; d++) {
    o = u[d];
    let g;
    if (s = o, !Wv(o) && (s = Ns[(g = String(o)).toLowerCase()], s === void 0))
      throw new ie(`Unknown adapter '${g}'`);
    if (s && (M.isFunction(s) || (s = s.get(c))))
      break;
    h[g || "#" + d] = s;
  }
  if (!s) {
    const d = Object.entries(h).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = r ? d.length > 1 ? `since :
` + d.map(fm).join(`
`) : " " + fm(d[0]) : "as no adapter specified";
    throw new ie(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return s;
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
  adapters: Ns
};
function gs(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new ea(null, u);
}
function dm(u) {
  return gs(u), u.headers = mt.from(u.headers), u.data = ys.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), i0.getAdapter(u.adapter || iu.adapter, u)(u).then(function(o) {
    return gs(u), o.data = ys.call(
      u,
      u.transformResponse,
      o
    ), o.headers = mt.from(o.headers), o;
  }, function(o) {
    return t0(o) || (gs(u), o && o.response && (o.response.data = ys.call(
      u,
      u.transformResponse,
      o.response
    ), o.response.headers = mt.from(o.response.headers))), Promise.reject(o);
  });
}
const c0 = "1.13.2", ki = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, c) => {
  ki[u] = function(o) {
    return typeof o === u || "a" + (c < 1 ? "n " : " ") + u;
  };
});
const hm = {};
ki.transitional = function(c, r, o) {
  function s(h, d) {
    return "[Axios v" + c0 + "] Transitional option '" + h + "'" + d + (o ? ". " + o : "");
  }
  return (h, d, g) => {
    if (c === !1)
      throw new ie(
        s(d, " has been removed" + (r ? " in " + r : "")),
        ie.ERR_DEPRECATED
      );
    return r && !hm[d] && (hm[d] = !0, console.warn(
      s(
        d,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), c ? c(h, d, g) : !0;
  };
};
ki.spelling = function(c) {
  return (r, o) => (console.warn(`${o} is likely a misspelling of ${c}`), !0);
};
function $v(u, c, r) {
  if (typeof u != "object")
    throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(u);
  let s = o.length;
  for (; s-- > 0; ) {
    const h = o[s], d = c[h];
    if (d) {
      const g = u[h], p = g === void 0 || d(g, h, u);
      if (p !== !0)
        throw new ie("option " + h + " must be " + p, ie.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ie("Unknown option " + h, ie.ERR_BAD_OPTION);
  }
}
const Di = {
  assertOptions: $v,
  validators: ki
}, Zt = Di.validators;
let rn = class {
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
    } catch (o) {
      if (o instanceof Error) {
        let s = {};
        Error.captureStackTrace ? Error.captureStackTrace(s) : s = new Error();
        const h = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? h && !String(o.stack).endsWith(h.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + h) : o.stack = h;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(c, r) {
    typeof c == "string" ? (r = r || {}, r.url = c) : r = c || {}, r = sn(this.defaults, r);
    const { transitional: o, paramsSerializer: s, headers: h } = r;
    o !== void 0 && Di.assertOptions(o, {
      silentJSONParsing: Zt.transitional(Zt.boolean),
      forcedJSONParsing: Zt.transitional(Zt.boolean),
      clarifyTimeoutError: Zt.transitional(Zt.boolean)
    }, !1), s != null && (M.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : Di.assertOptions(s, {
      encode: Zt.function,
      serialize: Zt.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Di.assertOptions(r, {
      baseUrl: Zt.spelling("baseURL"),
      withXsrfToken: Zt.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let d = h && M.merge(
      h.common,
      h[r.method]
    );
    h && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (x) => {
        delete h[x];
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
      const x = [dm.bind(this), void 0];
      for (x.unshift(...g), x.push(...y), D = x.length, S = Promise.resolve(r); E < D; )
        S = S.then(x[E++], x[E++]);
      return S;
    }
    D = g.length;
    let G = r;
    for (; E < D; ) {
      const x = g[E++], L = g[E++];
      try {
        G = x(G);
      } catch (U) {
        L.call(this, U);
        break;
      }
    }
    try {
      S = dm.call(this, G);
    } catch (x) {
      return Promise.reject(x);
    }
    for (E = 0, D = y.length; E < D; )
      S = S.then(y[E++], y[E++]);
    return S;
  }
  getUri(c) {
    c = sn(this.defaults, c);
    const r = n0(c.baseURL, c.url, c.allowAbsoluteUrls);
    return $m(r, c.params, c.paramsSerializer);
  }
};
M.forEach(["delete", "get", "head", "options"], function(c) {
  rn.prototype[c] = function(r, o) {
    return this.request(sn(o || {}, {
      method: c,
      url: r,
      data: (o || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(c) {
  function r(o) {
    return function(h, d, g) {
      return this.request(sn(g || {}, {
        method: c,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: h,
        data: d
      }));
    };
  }
  rn.prototype[c] = r(), rn.prototype[c + "Form"] = r(!0);
});
let Pv = class r0 {
  constructor(c) {
    if (typeof c != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(h) {
      r = h;
    });
    const o = this;
    this.promise.then((s) => {
      if (!o._listeners) return;
      let h = o._listeners.length;
      for (; h-- > 0; )
        o._listeners[h](s);
      o._listeners = null;
    }), this.promise.then = (s) => {
      let h;
      const d = new Promise((g) => {
        o.subscribe(g), h = g;
      }).then(s);
      return d.cancel = function() {
        o.unsubscribe(h);
      }, d;
    }, c(function(h, d, g) {
      o.reason || (o.reason = new ea(h, d, g), r(o.reason));
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
    const c = new AbortController(), r = (o) => {
      c.abort(o);
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
      token: new r0(function(s) {
        c = s;
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
Object.entries(Es).forEach(([u, c]) => {
  Es[c] = u;
});
function s0(u) {
  const c = new rn(u), r = km(rn.prototype.request, c);
  return M.extend(r, rn.prototype, c, { allOwnKeys: !0 }), M.extend(r, c, null, { allOwnKeys: !0 }), r.create = function(s) {
    return s0(sn(u, s));
  }, r;
}
const He = s0(iu);
He.Axios = rn;
He.CanceledError = ea;
He.CancelToken = Pv;
He.isCancel = t0;
He.VERSION = c0;
He.toFormData = qi;
He.AxiosError = ie;
He.Cancel = He.CanceledError;
He.all = function(c) {
  return Promise.all(c);
};
He.spread = eS;
He.isAxiosError = tS;
He.mergeConfig = sn;
He.AxiosHeaders = mt;
He.formToJSON = (u) => e0(M.isHTMLForm(u) ? new FormData(u) : u);
He.getAdapter = i0.getAdapter;
He.HttpStatusCode = Es;
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
  toFormData: xS,
  AxiosHeaders: TS,
  HttpStatusCode: OS,
  formToJSON: CS,
  getAdapter: wS,
  mergeConfig: zS
} = He, lS = "https://dev-demo-env.colibrilearning.com", Qi = (u) => {
  const c = u.startsWith("/") ? u : `/${u}`;
  return `${lS}${c}`;
}, nS = async (u, c) => {
  const r = Qi("api/auth"), o = { username: u, password: c };
  try {
    return (await He.post(r, o)).data;
  } catch (s) {
    throw console.error("Error during auth login:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 401 ? new Error("Invalid credentials") : s.message ? new Error(s.message) : new Error("Authentication failed");
  }
}, aS = async (u) => {
  const c = Qi("api/register");
  try {
    return (await He.post(c, u)).data;
  } catch (r) {
    throw console.error("Error during registration:", r), r.response?.data?.details?.errorMessage ? new Error(r.response.data.details.errorMessage) : r.response?.data?.error ? new Error(r.response.data.error) : r.response?.data?.details ? new Error(r.response.data.details) : r.response?.data?.message ? new Error(r.response.data.message) : r.response?.status === 500 ? new Error("Registration failed. Please try again.") : r.message ? new Error(r.message) : new Error("Registration failed");
  }
}, o0 = async (u) => {
  const c = Qi("api/check-email");
  try {
    return (await He.post(c, { email: u })).data;
  } catch (r) {
    return console.error("Error checking email:", r), r.response?.data ? r.response.data : { exists: !1 };
  }
}, uS = async (u) => {
  const c = Qi("api/refresh"), r = { refresh_token: u };
  try {
    return (await He.post(c, r)).data;
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
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
  }, o = u.toLowerCase();
  if (c && c.displayName) {
    const s = c.displayName.split(/\s+/).filter((h) => h.length >= 2);
    for (const h of s)
      if (h && o.includes(h.toLowerCase())) {
        r.noNameParts = !1;
        break;
      }
  }
  if (c && c.email) {
    const h = ((c.email || "").split("@")[0] || "").split(/[^A-Za-z0-9]+/).filter((d) => d.length >= 3);
    for (const d of h)
      if (d && o.includes(d.toLowerCase())) {
        r.noEmailParts = !1;
        break;
      }
  }
  return r;
}
const iS = (u) => {
  try {
    if (!document.cookie.split(";").find((s) => s.trim().startsWith("X-Credential=")))
      return !1;
    const r = document.cookie.split(";").find((s) => s.trim().startsWith("access_token="));
    if (!r)
      return !1;
    const o = r.split("=")[1];
    if (!o)
      return !1;
    try {
      const { jwtDecode: s } = require("jwt-decode"), h = s(o), d = Math.floor(Date.now() / 1e3);
      return !(!h.exp || d >= h.exp);
    } catch (s) {
      return console.error("[checkTokenAndRedirect] Token decode error:", s), !1;
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
  const { tokens: o } = await nS(u, c);
  if (o.access_token) {
    const s = qm(o.access_token), h = (s.exp || 0) - Math.floor(Date.now() / 1e3);
    Ni("access_token", o.access_token, h, !0), s.x_credentials && Ni("X-Credential", s.x_credentials, h, !1), localStorage.setItem("user_state", "authenticated"), r && o.refresh_token ? (localStorage.setItem("refresh_token", o.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return o;
}, rS = ({
  type: u,
  message: c,
  duration: r = 5e3,
  onClose: o,
  className: s = ""
}) => {
  const [h, d] = T.useState(!1), [g, p] = T.useState(!1);
  T.useEffect(() => {
    setTimeout(() => d(!0), 10);
    const G = setTimeout(() => {
      y();
    }, r);
    return () => clearTimeout(G);
  }, [r]);
  const y = () => {
    p(!0), setTimeout(() => {
      d(!1), o();
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
        return /* @__PURE__ */ w.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ w.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ w.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ w.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, D = S();
  return /* @__PURE__ */ w.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${h && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${s}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ w.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${D.bg}`, children: [
        /* @__PURE__ */ w.jsx("div", { className: `flex-shrink-0! ${D.icon}`, children: E() }),
        /* @__PURE__ */ w.jsx("div", { className: `ml-3! flex-1! ${D.text}`, children: /* @__PURE__ */ w.jsx("p", { className: "text-sm! font-medium!", children: c }) }),
        /* @__PURE__ */ w.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${D.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ w.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ w.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, h0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAWf0AAFn9AFjKaEnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAIABJREFUeJzt3XmcXXV9//HXuTMTSAKyLyIgQkErBaniwiISMhsBanFJEUFsVayUWqvWrVUjtRWtUrWKgqVW6xqwimDIzARHkQQUEBQBZYf+AFmysBjITOae3x+TkEzIMsu99/M957yejwcPQB/kvrnG+bzP52wgSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSdKWZdEBJE1QHzOpsRMj7EwbuwA7ATtRZycydiJjGjlbATPW/BPbkNNBRgZsv+Y/W/+/XwWsXPPXj5Ozmow68OjT/33GSuqMUGMpsJR8zZ/rPEIHS1nFw8zhsWb/q0tqHAuAlIpB2nmKPWlnH/I1f8DzyNiTnJ3J1gx62Do26CYNk7OUbE05gPuAu8m5m4y7gbtYzb3MYVVoSkmABUBqrT5m0sYLqfMCeHrArx32ewHtkfFaIAfuB+5a88doQYDbmcavmcWKyHBSlVgApGbpZw9yXkLGC4EDgZcAzwfaYoMl7QFybiLjZjKuo85NTOMmZvFUdDCpbCwA0lTNZxo78hLqvJiMg8k5GPgTYJvoaCUxBNxEzo3UuJERrmMrrmEWT0QHk4rMAiBN1AKexTRexghHAkeQcQQwPTpWxYwAvyPjSmAxdX5GD3dFh5KKxAIgbUk/ewBHwJqBD38K1EIzaWMegDWFIOM6duDnHMpwdCgpVRYAaUOL2I0ResnoBY4Bdo2OpEl5jIwrqHMZbSykkzujA0kpsQBI82ljOw4hoxM4ATgMj/DL6E4yFpGziA4u8xoCVZ0FQNXUx65kvIrRgX88sENwIrXWk+QsfroQ9HBddCCp1SwAqo7L2Y8R/gJ4HXAI/v7XWjl3kHERdebTyy+j40it4A9AlVsfe5HxGuD1wOH4e15bdg9wMRkX0sWV0WGkZvGHocpnAXvSzmtx6Gvq7gLmU+PrdHJzdBipkfzBqHJYwC608QYy5uLQV3PcSM584Js+c0Bl4A9JFdc8ahzJMdR5E6Pn9X0Yj1qhDlxFztfZlv/hcJ6MDiRNhgVAxTPI7gxzGjlvI2O/6DiqtOVkXAh8gS5ujA4jTYQFQMWw7mj/dODPgY7oSNIGriPnfEZPEfwhOoy0JRYApe1ynsNq3kbGW4A9o+NI47CcnG+Qcx693BQdRtoUC4DStIiDyfkbct4EbB0dR5qkxeR8km4uJSOPDiOtzwKgtAxwJPB+co7D358qj1+Rcy4jfI05rIoOI4E/YJWC+UxjB04i573AQdFxpKbJ+T1wHsN8juNZHh1H1WYBUJwFPIt2/hJ4L57fV5VkPE7OV2njHGZzT3QcVZMFQK03yM6s5n3kvAPYJjqOFGgY+BY1zvJ1xWo1C4Ba52K2ZTpnAB8EtouOIyVkGPgObXyM2dwRHUbVYAFQ8w2yDcP8DfABYPvoOFLChsn4KjXOYjb3RYdRuVkA1Dx9zCTjrYwe8e8WHUcqkCEy/psR5tHLA9FhVE4WADXefKaxHW8mYx7w7Og4UoH9AbiAGv9KJw9Gh1G5WADUODkZA5wCfAJ4TnQcqUQeA/6F1XzO5wioUSwAaoxFvJQ6n2X0VbySmuNeMj5MF1+PDqLiswBoavrZg4yPkvNWoBYdR6qEjEFG+Ht6+VV0FBWXBUCTs4TpPME7yfhHcraNjiNVUB34JjnvpYeHosOoeCwAmrg+TiDj88A+0VEksQI4m9V81usDNBEWAI3fQl5EjS8CR0RHkfQMvyXnnfQwEB1ExWAB0JYNsjVDfICMDwLTouNI2qwL6eAMZvFIdBClzQKgzRvgSHLOB/44OoqkcVtGzgfp4fzoIEqXBUAbN8B25JwFnIlX90tFtYCMd9DFvdFBlB4LgJ6pj+PJOBfYKzqKpClbCZzFCj7NXEaiwygdFgCts4jdqPNvwKnRUSQ1WM5V5LyNXm6KjqI0WAA0qp9Tgc8BO0RHkdQ0Q2ScxXLOdhsgC0DVLeBZtPNF4JToKJJa5mraOIXZ3BEdRHEsAFU2wCvI+Sawb3QUSS33GHAm3fxPdBDFsABU0SDtDPFPZPwT0BYdR1KoCxni7RzP8uggai0LQNX08TwyvoFv7ZO0zr3knEoPV0QHUetYAKpkgDeR80Vgm+gokpIzAnyaHfkwhzIcHUbNZwGogkG2Z5gLgNdER5GUvKsZ4Q0cy93RQdRcFoCyW8TBjPC/ZOwXHUVSYSyjxhvpZGF0EDWPF4CVWT9vIOdiMnaLjiKpUKaT80ZOZTr78WN+Qh4dSI3nBqCMBmlnmI8D74+OIqnwfkQHpzCLFdFB1FgWgLJZwC608x3gmOgokkrjdjJeQxc3RgdR4/iWtzLp5wjauQGHv6TG+iNyfk4fp0UHUeO4ASiLPk4n4z+AadFRJJVYxvnswJneKlh8FoCiu5YOlnEe8JfRUSRVRMYgq3itTw8sNgtAkV3MtmzNfDJ6o6NIqpzbgTl0c1t0EE2OBaCoLuc5jHApcEh0FEmVtZSMP6eLK6ODaOK8CLCIFvIiRrgah7+kWDuRM0AfJ0UH0cRZAIpmEb208TNgz+gokgRsTca36GNedBBNjKcAimT0Sv8vAu3RUSTpGXK+wjTOYBaro6NoyywARZCT0c9HyfhodBRJ2oI+VjOXOTwWHUSbZwFI3XymsT3fxjf5SSqOa+ngWGbxSHQQbZoFIGWXMINpfM/b/CQV0C200cVs7osOoo2zAKSqj5lkXAzMjo4iSZN0FzU66eTO6CB6JgtAigbZniEWkHFYdBRJmqJ7gU4fGJQeC0Bq+tiVjD68x19SeTxIjW46+XV0EK3jcwBSMsjuZFyOw19SuexGnZ/Qx8ujg2gdNwCpuJznMsIi4I+io0hSkzwKHEc3i6ODyA1AGhZxACP8DIe/pHLbDuijj2Oig8gNQLwB9ibnCuC50VEkqUVWknMsPVwRHaTKLACRRt/odwWwb3QUSWqxx9bcInhNdJCqsgBEWcAutPMT4IXRUSQpyAoyjqGL66ODVJEFIMIA2wE/JufF0VEkKdhDZBxNF7dEB6kaLwJstT5mknOpw1+SANiVnH76eF50kKqxALTSEqaTcSlwZHQUSUrInsAA/ewRHaRKLACtMp9pPMGFwNHRUSQpORn7AYMsYrfoKFVhAWiF+bSteaXvcdFRJClhB5CzgIvZNjpIFVgAWmF7zgFeEx1DkpKX82KmcyGDtEdHKTsLQLP183fAO6NjSFKB9DDMl6NDlJ23ATbTAMeRczHQFh1FkgroA3TzyegQZWUBaJY+XkLGT4GZ0VEkqaByck6lh29GBykjC0AzXMY+1LiKjN2jo0hSwT0FdPoGwcazADTaAp5FO1cCB0VHkaSSWEqNw+nk1uggZeJFgI10LR208T0c/pLUSDtR5zL62DU6SJlYABppGeeT0RkdQ5JKaF8yvscCtooOUhYWgEbp453Am6NjSFKJHUk7n4sOURZeA9AIiziMOj8BpkVHkaTSy3krPVwQHaPoLABTNcjuDHMd+BILSWqRp6hxFJ1cEx2kyDwFMBXX0sFq5uPwl6RW2po6F7GAXaKDFJkFYCqWcQ45r4yOIUkVtDftfJv5Pml1siwAkzXAycCZ0TEkqcJmsz3/HB2iqLwGYDIWcTB1rgJmREeRpIrLyZlLDxdFBykaC8BEXcoOdHANGftFR5EkAfAENV5OJzdHBykSTwFMVAdfdfhLUlK2oc53GGTr6CBFYgGYiH7eTsaro2NIkp7hIIY5OzpEkXgKYLwW8kfUuB7YJjqKJGmjcjJOoIsfRQcpAgvAeFxLB8u4EnhZdBRJ0mY9RI2D6eTB6CCp8xTAeCzjn3H4S1IR7Eqdr5J7gLslPkBhSxbySjLOx7IkSUWxP3fxIP/DtdFBUmZD2pxBtmeYXwF7R0eRJE3IU2S8jC5ujA6SKo9qN2eYL+Hwl6Qi2pqcb3lr4KZZADalj9OAk6JjSJIm7U8Y8lHBm+IpgI1ZyLOpcROwQ3QUSdKU1IGj6GZxdJDUuAHYmBpfxOEvSWVQA/6TBWwVHSQ1FoAN9fE64MToGJKkhnkBHXwgOkRqPAWwvgG2I+cm4DnRUSRJDTVEnRfTy03RQVLhBmB9OZ/B4S9JZTSNGhcwz7m3ll/EWv28Cvir6BiSpKZ5OYfzjugQqfAUAMASpvMEvwb+KDqKJKmJMh6nzoH08H/RUaK5AQB4gnk4/CWp/HK2JePL0TFS4AZgIS+ixjVAR3QUSVKL5JxED9+NjhGp2huAnGzNPf8Of0mqkozPsYBnRceIVO0CMMApwBHRMSRJLbcb7dV+NkB1TwFcwgy24hZ82Y8kVdUQdQ6kl9ujg0So7gZgaz6Iw1+SqmwaGWdHh4hSzQ1AH3uR8VtgRnQUSVKwnG56GIiO0WrV3ABkfBqHvyQJIOPfGaQ9OkarVa8A9HE48ProGJKkZBzIUPWeBFutUwDzqHE4VwMvjY4iSUrKw3RwALNYER2kVaq1ATiMN+PwlyQ90y4M8+HoEK1UnQ3A6G1/twPPjo4iSUrSEG28kNncER2kFaqzAdiKM3H4S5I2bRoj1dkCVGMDMMg2DHMHsGt0FElS0kbIOIgubokO0mzV2AAM8S4c/pKkLWsj5yPRIVqh/BuAAbYj505gx+gokqRCqFPnxfTyq+ggzVT+DUDOe3D4S5LGr0at/FuAcm8AFrETde6Ear/yUZI0YTk1Xk4n10QHaZZybwDqvA+HvyRp4rKyXwtQ3g3AAnahnTuBbaKjSJIKKuMwurg6OkYzlHcD0MaHcPhLkqYi52PREZqlnBuA0XP/9wAzo6NIkgqupFuAcm4Acs7E4S9JaoScv4+O0Azl2wAsYCvauJuM3aOjSJJKYYQ2nl+2dwSUbwPQxmkOf0lSA7UxwjujQzRauTYAORkD3AT8cXQUSVKprKTG3nSyNDpIo5RrAzDACTj8JUmNN4MRTo8O0UjlKgDwnugAkqSSyvg7Btk6OkajlKcA9HMocFR0DElSae3Gat4QHaJRylMAMt4bHUGSVHI57yYvx/VzpfiX4HKeywi3A+3RUSRJJZczhx4ui44xVeXYAIzwdhz+kqRWqHFGdIRGKP4GYJB2hrkH2CM6iiSpEkbI2Jcu7o0OMhXF3wAMcwIOf0lS67SRc1p0iKkqfgGAt0UHkCRVztuYT1t0iKkodgFYwJ5Ad3QMSVLl7MUOdEaHmIpiF4A23grFbmCSpILKeWt0hKko7kWA82lje+4C9oqOIqmyHgRuA+4nYwV1RqjRRs4OwHOA/YFdQhOqmYapsRedPBgdZDKKe+vc9vTg8JfUWkuBi4DL6eBnzOL3W/wn+tmDnKPI6AReA+zQ5IxqnQ7qnAZ8KjrIZBR3AzDA98n58+gYkiogY5Ccz7Ijl3Eow5P+deYzje05Dng3cGTD8inSrXTxAjLy6CATVcwCsJBnU+NeirzBkFQEi6nzbnr5RcN/5X6OAM4BXtbwX1utdjTd/DQ6xEQV8yLAGifj8JfUPCvIOI0uXtmU4Q/QzWKWcBgZp5PxeFM+Q61SyGcCFHMD0M8vgJdGx5BUSlczwhs4lrtb9on97E/Gd8h5ccs+U420nBXszlyGooNMRPE2AIvYFzg0OoakEsr4AR3MaunwB+jmNoY5nJzvtfRz1Sg7sF3xnklTvAJQ5/UUdXMhKWXnsZjXMounQj59DquYxknkfD3k8zU1GX8RHWGiijdI+7keOCQ6hqQSyfkK3bw9iSu5R59xMp/RWwZVFBmPM5PdOJwno6OMV7E2AP3sj8NfUiNlnJvM8AeYywjbcAoZv4yOognI2ZbH6YmOMRHFKgBwUnQASSWS8xU6OTOZ4b/W4TxJjbnAY9FRNAEFOw1QtALw+ugAkkoitSP/Dc3mDuA90TE0IcdzCTOiQ4xXcQpAHy8ADoqOIakEUj3y39AS/gv4eXQMjds2bMVx0SHGqzgFwPW/pEZI/ch/ffOok/He6BiakLnRAcarOAUg43XRESQVXMa5hTjyX18XV5Lxs+gYGrfj6GNmdIjxKEYBuIx9gAOjY0gqsCIO/7XqnBMdQeM2nRpHR4cYj2IUgDZ6oyNIKrCinPPflJ34EaOvIlYR5MWYWcUoAAX5MiUlqEjn/Ddl9BXE34+OoXHKOTY6wnikXwDmM40ax0THkFRART/yX1/O5dERNE4Z+615cF3S0i8A23EkOdtGx5BUMGU48l9fXrz3zVdaAbYA6RcA0v8SJSWmTEf+a/XyAPBQdAyNU5b+qev0C0BmAZA0ASm92KfxbosOoHE7OvWnAqZdAPrYC2//kzReZVv7P9O90QE0btOZzlHRITYn7QLg+l/SeJVx7b+hjMejI2gC6mmfBki7AGTFerWipCDlP/IfVWdldARNSNIHsekWgHnUwNv/JG1BkZ/wN1EZW0dH0IQcwAB7R4fYlHQLwBEcCGwfHUNSwqo0/AEyb4kunJwjoiNsSroFIOEvTVICqnDOf0M5e0VH0IQlO8vSLQAJf2mSgpX7Vr/NSf7pcnqGZGdZygXg8OgAkhJUlQv+NrSAXYDdo2Nowg7i4jRP3aRZAAbZHdg3OoakxFRx7b9WB0cBWXQMTVgbW/OK6BAbk2YBWJ3uykRSkKoe+a9VZ3Z0BE1akjMtzQJQ58joCJISUuUjf4D5tJHxmugYmjQLwLhlnv+XtEbVj/wBdqQL2C06hiapxssZpD06xobSKwBLmA4cEh1DUgKqfuS/1gjviY6gKcjZllUcHB1jQ+kVgCd4GTAtOoakYB75j1rIi8nojI6hKWpL7zRAegUg52XRESQF88h/nRqfiY6gBqhzaHSEDaVXAOBPogNICuSR/zp9nAQcHR1DDZBxUHSEDaVXALL0zpNIahGP/NdZwJ5k/Ed0DDXMC7mWjugQ60urAIxeJfnH0TEkBfDIf51r6aCdbwM7R0dRw2zFIxwQHWJ9aRWAIV4AbBUdQ1KLeeS/Tk7GMr4CPg+ldBI7DZBWAfD8v1Q9HvmPNcC/AadFx1ATWAA2w/P/UrV45D9WHx8H7/kvrcRmXFoFgLS+HElNVN1X+m5cHx8n4x+jY6iJ8rRmnAVAUus5/Mdy+FfFXgyyfXSItdIpAKNfyp7RMSQ1mcN/LId/lWSsSuc6gHQKwBAH47uupXJz+I/l8K+ehC4ETKcA1Hh+dARJTeTwH8vhX01ZOrMunQKQs090BElN4vAfy+FfZftEB1grnQIAz4sOIKkJHP5jOfyrLplZl04BcAMglY/DfyyHv7J0Zl06BSChViSpARz+Yzn8BZCzLYvYKToGpFIAljCdjN2iY0hqEIf/WA5/ra+exgFvGgXgcZ6LtwBK5eDwH8vhrw0lcso7jQLg+l8qB4f/WA5/bVwSM88CIKkxHP5jOfy1KTU3AOsk8mVImiSH/1gOf21OnsZBbxoFIJHzIZImweE/lsNfW7ZPdACA9ugAAOTs6SWAWs995PyUjOvIuY2cO2nnSVazgjozmMYMcvYA9qfOC8l4JXAI0Bacu3oyzqWLMx3+a/RzNvD+6BhK3l7RASCVK+/7uRXYPzqGQt1DzjeA79DDbyb8T1/KDnRwIhknA8eQyu/tMss4l06H/9Mc/pqIDqYzi6ciI6TxQ7KfpcCO0TEU4lfknM00LmIWqxvyKy7kQGr8A/BGUtlylY3DfyyHvyaqjT2ZzX2REeILwCDtDDOURBa10jLgLFbwBeYy0pRP6OMFZHwO6G7Kr19VnvMfy3P+mowaL6KTX0dGiD86GmJHMod/peQsYhqnMovfN/Vzevgt0MMAbyLnS8CMpn5eFTj8x3L4a7JG2Dk6Qgp3Abj6r46cnA/RTXfTh//6uvg6cATwfy37zDLKONfhv55+znb4a9Ky+PcBxBeAnF2iI6glRsh5Gz18ImSAdHMD8Ary2JVbYeV8xXP+6+nj43jOX1ORuQGANjcAFVAn5430cEFoim7up41jgBtCcxSNR/5jeeSvRqi7AUjiS1CTZbyLHr4bHQOATpZSoxNLwPh4tf9YXu2vxgmfffEFIPMUQMn9N138R3SIMTpZSgezgGujoyTNtf9Yrv3VSJ4CALwIsMxupYO/jQ6xUbNYQY1e4FfRUZLk2n8s1/5qPDcAWADKK+cdzOKJ6BibNHo6YDaWgLFc+4/l2l/NET774gtAxvToCGqKC+nhx9EhtsgSMJbDfyyHv5olj5998QUgZ6voCGq4nDofiw4xbp0sZchrAjznvwHP+auZMqZFR4gvAMR/CWq4S+nlpugQE3I8yxmiG7guOkoIn/A3lk/4U/OFH/ymUADCvwQ1WMZ50REmZbQEdFG1EuDwH8vhr9YIn33xBSCBNYgaahnLGYgOMWlVKwEO/7Ec/mqd8NkXXwDy+C9BDZRzKXMZio4xJceznI4K3CLorX5jeaufWilzAwAJrEHUUD+NDtAQs3hkzYWB5dwEeMHfWF7wp1ZL4OA3vgAk8CWogWpcFR2hYdZuAsr2AiGP/MfyyF8xppGTRQaILwA1NwAlMsJy7ogO0VCzeIRhjqYsmwCP/MfyyF9xMi6kIzJAfAFwA1Am9xT+/P/GlGUT4JH/WB75K9pWsQfA8QXAawDKZFl0gKYp+ibAI/+xPPJXCmbGHgCnUABCz4GoodJ97n8jHM9yVnNs4TYBHvmP5ZG/UjEUO4NTKADlWxlXVRUGzBweLtQmwCP/sTzyV1pWRX54CgUg9AtQA+VsEx2hJYrysCAf8jOWD/lRaqbHHgBbANQ4efzrLVtm7ekAuDE6yka59h/Ltb9S9NOqF4CM4egIapCM53Jt7G0tLTWHh1nN7OSuCXDtP5Zrf6VpmHnUIwPEF4C6G4ASaedh9o0O0VJzeJgROkllE+CR/1ge+Std4de/xReALP5LUAO1cVh0hJZbuwmILgEe+Y/lkb/SFn7wG18AEvgS1FBHRQcIEV0CPPIfyyN/pS989sUXADcAZXM8g7RHhwgRVQI88h/LI38VQ/jsiy8AefyXoIbaZc0QrKZWlwBv9RvLW/1UHG4ASOBLUIPlnB4dIVSrSoBr/7Fc+6tYwg9+LQBqhj9nEQdEhwi1rgT8pim/fsa5rv3X08/ZuPZXsTwVHSC+AGQsj46ghquR85HoEOFGS8AxNLoEOPzHcviriHJWREeILwCwNDqAmiDnZPoqekfA+taVgMacDvCCv7G84E9FlfFwdIT4ApDzSHQENUVGxhdZwvToIOHm8DA5nUx1E+A5/7E8569iC399egoFwA1Aef0Jj/OZ6BBJ6OGhKW0CPPIfyyN/FV0CB78WADVXxjvo46+iYyRhspsAj/zH8shfZVCLn33xBaAtvgWpyTLOp58To2MkYaKbAI/8x/LIX2XhBgA3ANXQBnybAY6LDpKE8T4nwIf8jOVDflQu4bMvvgCsiG9BaomtyPmeJWCNLZUAh/9YDn+VTT1+9sUXgLkMkfF4dAy1hCVgfZsqAQ7/sRz+KqMONwCjPA1QJZaA9W1YAhz+Yzn8VVar3QCsFf5FqKW2IudCFtEZHSQJ6+4O+EeH/3q82l/ltYoe/hAdIpUC8EB0ALXcdOr80BKwRg8P0c2/OvzX8Gp/ldv90QEglQKQc3d0BIWwBOiZXPur7LI0Zl4aBSCRL0MhLAFax+GvargrOgCkUgAS+TIUxhIgh7+qI5GttwVAqbAEVJnDX9WSxMxLowBkaXwZCmcJqCKHv6omkdPeaRSALh4FVkTHUBIsAVXi8FcV1dI46E2jAIxK4gtREiwBVeDwVzUN8bM0bn1PqQDcHR1ASbEElJnDX9V1D/OoR4eAtAqAGwBtyBJQRg5/VVsysy6dApDIRRFKjiWgTBz+qrqEZl1KBeC26AhK1nTqXEwfx0QH0RT4bH8J6tweHWGtlArAxt+LLo2aQcYl9DM7OogmwWf7S6Nq/Do6wlrpFIDZ3IdvBdTmzQB+aAkoGNf+0jojFoCNcwugLbMEFInDX1rfI/SmcQsgpFYAcguAxsUSUAQOf2lDyRz9Q2oFAAuAxs0SkDKHv/RMuQVg0+ppfTlKniUgRQ5/aVOSOshNqwAM8xtI4wlJKgxLQEoc/tKmtVkANu0EVgJ3RMdQ4VgCUuDwlzanzgg3R4dYX1oFAJI7R6LCGC0BPiwohsNf2pLb6eEP0SHWl14BqKW1IlGhjD4syBLQWg5/aTySO7hNrwDU+WV0BBXaaAkY4OjoIJXg432l8cm4ITrChtIrAG0sAfLoGCq0GeT8yE1Ak/l4X2n8cq6MjrCh9ApAJ0uB30XHUOF5OqCZXPtLEzHMKq6JDrGh9ArAqMXRAVQKloBmcPhLE3X9mrvckpJmAcgsAGoYS0AjOfyliUt0plkAVAWWgEZw+EuTleRMS7MAzOY24KHoGCoVS8BUOPylyRthSXSEjUmzAGTk5FwVHUOlYwmYDIe/NHk5d6T0CuD1pVkAALI0G5MKzxIwEQ5/aaqSXP9DygUg4S9NhWcJGA+Hv9QIyc6ydAvAaq4FnoqOodKyBGyOw19qjNwCMHFzWAVcHR1DpTaDjB/Sz6uigyTFx/tKjfIQV3NLdIhNSbcAjFoYHUClNxNYwEJmRQdJgo/3lRqpj3nUo0NsStoFoMZl0RFUCTOocWnlS4Brf6nRkp5haReA2dwI3BcdQ5VQ7RLg8Jcarc5qFkWH2Jy0C0BGTkZfdAxVRjVLgMNfaoZrmMPD0SE2J+0CAFBPe4Wi0qlWCXD4S82RpT+70i8AI/QDw9ExVCnVKAEOf6l5RiwAUzeHx8i8HVAtV+4S4PCXmukRruba6BBbkn4BAMi9HVAhylkCHP5Sc+X0p3z731rFKAAFOJei0ipXCXD4S81XkJlVjALQyQ2Q5tuUVAkzqPFDFvLK6CBT4hP+pFaok9MfHWI8ilEAMnLgf6NjqNK2ocbCwm4CfMKf1CpX0MOr4OoGAAAQu0lEQVRD0SHGoxgFACBnfnQEVV4xTwe49pdaJyvOrCpOAbiKK/GpgIpXrBLg8JdaaYSsONvq4hSA0SsqL4qOIbG2BAxwdHSQzXL4S62VM0gnD0bHGK/iFADwNIBSMoM84RLg8JdaL+O70REmIosOMCE5GQPcDewdHUVa4wkyjqWLK6ODPK2fs/GCP6nVhulgD2bxSHSQ8SrWBmD0boALo2NI69kGWMAAr4gOsqYgfwqHvxThx0Ua/lC0AgBQ9zSAEpOzLTmL6GdOWIb5tLGIL5PzD2EZpGr7TnSAiSpeAejhGuCu6BjSBmYCP2CAM1v+yQvYhe35ETmnt/yzJQEMMcTF0SEmqngFYPQ0gFsApaiDnP+gn/9lkJ1b8on9zKadG4CelnyepGfK6Od4lkfHmKjiFQCAjG9GR5A240SGuZUBzmSQ9qZ8wgL2pJ9vAwPAHk35DEnjUy/mTCrWXQDr6+cqSODCK2nz7gTOYRVf5QRWTvlXW8QB5LyHnNOArab860maqkdYzZ7MYVV0kIkqbgHo46/IuCA6hjQuGY+T8wPgIjJ+ShePjvufHR36PeScBBxGkf9/K5VNxr/TxbujY0xGcX+QDLINw9wHPCs6ijRBI8CNZNwE3EadB4DHyBghZwY1tiXnecD+wKHAsyPDStqMGgfSyc3RMSajuAUAYIDzvPJZkhRkMd0cGR1isop5EeBaOV+JjiBJqqz/jA4wFcUuAN1cC1wfHUOSVDmPkhf7ybTFLgAAebEbmCSpgHK+RQ9/iI4xFcUvADW+CQ24vUqSpPEqwcFn8QvA6O1UhV7DSJIK5Tp6+WV0iKkqfgEAyPlSdARJUkVknBcdoRHKUQB6+Dkk9D52SVJZPcRMvhEdohHKUQAAcj4THUGSVHpf4HCejA7RCOUpAFfxQ+C30TEkSaW1ko7ynHIuTwGYR52Mz0fHkCSV1leZxSPRIRqlPAUAYCb/DeX5H0eSlIw6dT4bHaKRylUARs/LnBsdQ5JUMjnfp5fbo2M0UrkKAEDOF6EcF2hIkhLRVr4LzctXAHp4iLwct2hIkpKwmE6uig7RaOUrAAB1PgPUo2NIkkqhdEf/UNYCcCy/Ay6OjiFJKrxbWMEPo0M0QzkLAEDOR3ALIEmaiox5zGUkOkYzlLcA9PAb4KLoGJKkwvoNi8s7R8pbAABqfBhYHR1DklRAOR9mXnk3yeUuAJ3cCnw7OoYkqWAyfkl3ua8lK3cBAGjjY8BwdAxJUoHkfJiMPDpGM5W/AMzmDuDr0TEkSYVxDV1cFh2i2cpfAAAyzgJWRceQJBXCB8t+9A9VKQBd3EvGBdExJEnJu5JuLo8O0QrVKAAANf4V3xEgSdqcnH+MjtAq1SkAs7kP+PfoGJKkRGX8gB6uiI7RKtUpAAAdfAK4PzqGJCk5Q+S8LzpEK1WrAMziCTI+GB1DkpScz9LNbdEhWimLDtByORkDXA28LDqKJCkJD5FxAF08Gh2klaq1AQDIyMn4Oyj/LR6SpHHI+WDVhj9UsQAAdHE1uY8IliRxPVfx39EhIlTvFMBal/McRvgdMDM6iiQpSM6rqnTl//qquQGA0dsCM/4tOoYkKUjGd6s6/KHKBQBgJp8C7omOIUlquSdZzQeiQ0SqdgE4nCfJeW90DElSy53NsdwdHSJStQsAQA8XkfGD6BiSpJb5Lav5ZHSIaBYAgBHOAFZEx5AkNV0deCtzfEOsBQCglwfI+FB0DElSk+V8kW4WR8dIgQVgrcWcR8bPomNIkprmXp6qztv+tqS6zwHYmEUcQJ1fAVtHR5EkNdyr6eaH0SFS4QZgfZ3cSs6/RMeQJDXctx3+Y1kANjSNs4Hro2NIkhpmGTX+PjpEaiwAG5rFamq8HRiJjiJJaoCcd9PJg9ExUmMB2JhOriHn36NjSJKm7DK6+Xp0iBRZADZlhH8CboiOIUmatIep8xYyX/++MRaATZnDKjJOBlZGR5EkTVgOvJVeHogOkioLwOZ0cQvwvugYkqQJO9er/jfP5wBsSU7GABcDJ0RHkSSNyy2s4lBOcIO7OW4AtiQjZzVvIef30VEkSVu0CjjZ4b9lFoDxmMPD1HgzeCGJJCXuQ3R7Afd4WADGq4s+cr4QHUOStEkDLOGz0SGKwmsAJmIBW9HGL8g4ODqKJGmM5eS8iB7+LzpIUbgBmIg5rCLnZOCJ6CiSpKfVyTjV4T8xFoCJ6uUm4E14PYAkpSHjLLr4UXSMorEATEY33wfOiY4hSWKA5Xw8OkQRWQAmawXvBwaiY0hShd1NjTcw15e3TYYXAU5FH7uScR2wZ3QUSaqYJ6lzJL38MjpIUbkBmIoeHiLndYw+eEKS1Co573D4T40FYKp6+DnwrugYklQhn6eHr0WHKDoLQCN082XggugYklR6OVexgn+IjlEGFoBG6eBM4NroGJJUYveT81rmMhQdpAwsAI0yi6fo4ATgnugoklRCK6lzIr08EB2kLCwAjTSL31NjDrAiOooklcgIGSfTyy+ig5SJBaDROrmZjBPBFZUkNUTGu+ji4ugYZWMBaIYufkLGX0fHkKTCy/k0Xb6JtRksAM3SxVfJfDylJE1azve4ivdHxygrnwTYTDkZA3wNODU6iiQVzDWs4mhOYGV0kLJyA9BMGTk78hbgx9FRJKlA7qLGCQ7/5rIANNuhDFPn9cBvo6NIUgEsZYRj6eTB6CBlZwFohV6W0UYncFd0FElK2GPUOJZj+V10kCqwALTKbO4j42h8UJAkbcxK4M/o5JroIFVhAWilLu4Fusj5fXQUSUrIEDmvo5ufRgepEgtAq3VzG230AMuio0hSAkaAU+jhsuggVWMBiNDJr8mZQ8bj0VEkKVCdjDfRzYXRQarIAhClh5+Tcyzwh+gokhQgB86gi29FB6kqC0CkbhaTcyKwKjqKJLVUxvvo5rzoGFVmAYjWwwA5J+HLgyRVRcYH6eLT0TGqzkcBp6KPY8n4HjA9OookNUkOvJduzokOIgtAWvo4ihqXkrNtdBRJarA68Ha6+c/oIBplAUhNP4cCC4GdoqNIUoOMkPMWevhadBCtYwFIUT+HAP3ALtFRJGmKhsh4A138b3QQjWUBSFUfLyBjANgzOookTdJK4ES66Y8OomeyAKTsMvahxiIy9ouOIkkT9AQ5r6bH16GnygKQuj72ImMRcEB0FEkap2XU6PXFPmnzOQCp6+H/qHMYcEV0FEkah7vIONLhnz4LQBH0sozVdJP7yExJSfsFNQ6ji1uig2jLPAVQJDkZ/XyUjI9GR5GkDXyfVZzCCayMDqLxcQNQJBk5Pcwj5y3AcHQcSVrj8yzhdQ7/YnEDUFR9dJFxIbBddBRJlTVCxrvo4gvRQTRxFoAiG+Agci4F9o6OIqly/kDOG+jhkuggmhwLQNEtYE/auRR4UXQUSZVxP3VOoJdfRgfR5HkNQNHN4f/RwZFkfDc6iqRKuJaMwxz+xecGoEz6OJ2MLwAd0VEklVDG+Sznb5nLUHQUTZ0FoGwW8koy5pOxe3QUSaXxFDl/Qw//FR1EjWMBKKPLeQ6ruZCMw6KjSCq8e6nxOp/sVz5eA1BGs7mPaRwFfDI6iqRCu4w6f+rwLyc3AGXXzynAecCM6CiSCiMHPsUSPsQ86tFh1BwWgCpYyIupcSGwb3QUSclbRs6bvb+//DwFUAW9/JInOYSM86OjSEraj1nNixz+1eAGoGoGeC055wM7RkeRlIzV5PwLV3GWK//qsABUUR97kfF14OjoKJLC/ZY6b/TBPtVjAaiqnIwB3gl8CpgWHUdSiP8h5x308IfoIGo9C0DV9XMo8E3ggOgoklrmETLeShcXRwdRHC8CrLpurqWDlwAXREeR1BL91DnY4S83AFqnn1cBXwH2j44iqeFWkPN+uvkKGXl0GMWzAGisJUznCT4KvBdoi44jqQEyLqXGXzOb+6KjKB0WAG1cP4cA/wm8JDqKpEl7gIy/pYvvRQdRerwGQBvXzQ108ArgXeAVwlLB5GScz2pe4PDXprgB0JZdzn6McB4wOzqKpC26nTqn08tgdBClzQKg8cnJ6OdtZHwCnyIopegp4FOs5l+Zw6roMEqfBUATcyk7MI15wBlAe3AaSTB6kV/G39HJndFRVBwWAE3OZTyfNs4B5kRHkSrsFjL+ni76ooOoeCwAmppFdFLnc8ALo6NIFbIMOIsVfIG5jESHUTFZADR119LBMs4APgZsFx1HKrFh4Et08FFmsSI6jIrNAqDGWcRO1PkI8Df4ECGpsXIWkfMuerkpOorKwQKgxhvgIOAscl6Nv8ekqVpMzkfo4cfRQVQu/nBW8wxwEDkfBl6Hv9ekicn5NRkfp5sLo6OonPyhrObr4+XU+Cdyjo+OIhXAb4Cz6OIiX9qjZrIAqHX6OJyMfwaOiY4iJegWMs5mMd9gHvXoMCo/C4Bab4Ajyfk48KroKFIC7ibnEzzKBd7Sp1ayACjOAEcC7yfnOPy9qOq5nozP0s63mMXq6DCqHn/oKl4/+wNnAm8DpgenkZopJ+dy4PP0cEl0GFWbBUDp6GNX4AwyzgR2io4jNdAQ8F1qnE0nN0eHkcACoBQNsg1DnEyNd5Pz/Og40hQ8CnwN+CTd3B8dRlqfBUDpmk8bO/Bacs4AjsLfryqOG8n4Ek/xNU5gZXQYaWP8gapiGL1O4C3Am4HdYsNIG/UUcAk1zqeTRdFhpC2xAKhY5tPGjsyizunAiUB7dCRV3nXknM9TfJtX83h0GGm8LAAqrst5DiOcAvw1sE9wGlXLo2R8F/gyXVwfHUaaDAuAim8+bWzHsWS8CTgOmBEdSaW0Gvgx8A224SIO58noQNJUWABULkuYzuN0kvF64DXAzOhIKrQ6cBVwITW+QycPRgeSGsUCoPK6hBlMYzYZpwKvBqZFR1IhrBv6debTywPRgaRmsACoGgbZntX8GfB6crqxDOiZbibnQuBr9HBXdBip2SwAqp6F7EhGFxm95PSSsXt0JIV4FBggZyHtLGQ290UHklrJAiAt5EBqHE9OJxlH4XagzG5m9F79RSzjCuYyFB1IimIBkNbXx0zgmDWF4Fhgr+hImpInyPgJdS5hhAXM4f9FB5JSYQGQNmeAPybnCOAI4HDggOBE2rz7yLiSOkuAxTzKDcxlJDqUlCILgDQRA2xHxksZ4UjgCDKOBLaOjlVRI8DvGH0S35XkLKaXm6JDSUVhAZCmYpCtWcVLaeMIcl4CvAjYF2gLTlZG95BxIznXU2MJQyxhDo9Fh5KKygIgNdp8pvEs9qeNl5DzQjIOpM6h3m0wThmPk3MroxfsXUeNmxjiV8zh4ehoUplYAKRW6WcPMg6izsFkPB/Yh5x9yNgb6IiO12J1Rs/X302du6hxK/AbMm5kNneRkUcHlMrOAiCl4FJ2oIN9ydgX1vy5/vTf700x33q4HLjz6T9y7gQeAO5niFs4gZWh6aSKswBIRbCQHamxEzV2ZoSdgJ3Inv7zzuTsDGv+ft3LkJ4FtJHRTs62E/zElcCqNX+9fM2fnwKWkbOUGkuBpdR5GMb8/SOMsJRfsJR51KfwbyypySwAUpX0MZNhptFORjvbAzDE49RZTY0RL6qTJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEmSJEnSZvx/atQNHSZeJBsAAAAASUVORK5CYII=", sS = ({
  onSuccess: u,
  onError: c,
  handleClose: r,
  onSignIn: o,
  title: s = "Create your account",
  subtitle: h = "Create an account to continue to checkout"
}) => {
  const [d, g] = T.useState(""), [p, y] = T.useState(""), [S, E] = T.useState(""), [D, G] = T.useState(""), [x, L] = T.useState(!1), [U, Y] = T.useState(""), [J, Z] = T.useState(!1), [I, le] = T.useState(
    null
  ), [oe, te] = T.useState(""), [P, be] = T.useState(!1), [_e, Ne] = T.useState(!1), [Te, Oe] = T.useState(!1), [Ze, Fe] = T.useState(!1), [k, q] = T.useState(!0), [Q, W] = T.useState(""), [re, De] = T.useState("info"), b = T.useRef(null), j = T.useRef(null);
  T.useEffect(() => {
    if (j.current && clearTimeout(j.current), !d) {
      Ne(!1), Oe(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) {
      Ne(!1), Oe(!1);
      return;
    }
    return j.current = setTimeout(async () => {
      Fe(!0);
      try {
        (await o0(d)).exists ? (Oe(!0), Ne(!0)) : (Oe(!1), Ne(!1));
      } catch (Ee) {
        console.error("[CreateAccount] Email check failed:", Ee), Oe(!1), Ne(!1);
      } finally {
        Fe(!1);
      }
    }, 500), () => {
      j.current && clearTimeout(j.current);
    };
  }, [d]), T.useEffect(() => {
    if (D) {
      const ye = d || p || S ? {
        email: d,
        displayName: `${p} ${S}`.trim()
      } : null, Ee = f0(D, ye);
      le(Ee);
    } else
      le(null);
  }, [D, d, p, S]);
  const V = I ? I.length && I.upper && I.lower && I.number && I.noSpaces && I.noTriple && I.special && I.noNameParts && I.noEmailParts : !1, ae = d && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d);
  T.useEffect(() => {
    const ye = (Ee) => {
      Ee.key === "Escape" && r();
    };
    return document.addEventListener("keydown", ye), () => document.removeEventListener("keydown", ye);
  }, [r]);
  const se = (ye) => {
    ye.target === b.current && r();
  }, pe = async (ye) => {
    if (ye.preventDefault(), be(!0), !d || !p || !S || !D) {
      te("Please fill in all required fields"), c("Please fill in all required fields");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) {
      Y("Please enter a valid email address"), te("Please enter a valid email address"), c("Please enter a valid email address");
      return;
    }
    if (!V) {
      te("Password does not meet requirements"), c("Password does not meet requirements");
      return;
    }
    L(!0), te(""), Y(""), W("");
    try {
      const Tt = d.split("@")[0], Gt = await aS({
        username: Tt,
        email: d,
        firstName: p,
        lastName: S,
        password: D
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Gt.message
      );
      try {
        const Kt = await d0(
          Tt,
          D,
          k
        );
        u(Kt);
      } catch (Kt) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Kt
        );
        const ta = Kt instanceof Error ? Kt.message : "Auto-login failed";
        te(
          `Registration successful, but ${ta}. Please try logging in manually.`
        ), c(ta);
      }
    } catch (Tt) {
      console.error("[CreateAccount] Registration failed:", Tt);
      const Gt = Tt instanceof Error ? Tt.message : "Registration failed";
      W(Gt), De("error"), te(Gt), c(Gt);
    } finally {
      L(!1);
    }
  };
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    Q && /* @__PURE__ */ w.jsx(
      rS,
      {
        type: re,
        message: Q,
        duration: 5e3,
        onClose: () => W("")
      }
    ),
    /* @__PURE__ */ w.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: b,
        onMouseDown: se,
        children: /* @__PURE__ */ w.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
          /* @__PURE__ */ w.jsx(
            "button",
            {
              onClick: r,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
              type: "button",
              children: /* @__PURE__ */ w.jsx(
                "svg",
                {
                  className: "w-6! h-6!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ w.jsx(
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
          /* @__PURE__ */ w.jsxs("div", { className: "mb-6! text-center!", children: [
            /* @__PURE__ */ w.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: s }),
            /* @__PURE__ */ w.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: h })
          ] }),
          /* @__PURE__ */ w.jsxs("form", { onSubmit: pe, className: "space-y-4!", children: [
            /* @__PURE__ */ w.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ w.jsx(
                "label",
                {
                  htmlFor: "email",
                  className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
                  children: "Email Address"
                }
              ),
              /* @__PURE__ */ w.jsx(
                Fn,
                {
                  id: "email",
                  type: "email",
                  value: d,
                  onChange: (ye) => {
                    g(ye.target.value), Y("");
                  },
                  placeholder: "Enter email address",
                  disabled: x,
                  className: "w-full!",
                  autoComplete: "email",
                  error: P && !d ? "Required" : U || "",
                  endIcon: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
                    Ze && /* @__PURE__ */ w.jsx(Lm, {}),
                    !Ze && !Te && d && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d) && /* @__PURE__ */ w.jsx(
                      "img",
                      {
                        src: h0,
                        alt: "available",
                        style: { width: 18, height: 18 }
                      }
                    )
                  ] })
                }
              )
            ] }),
            _e && Te && /* @__PURE__ */ w.jsx(
              _m,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  Ne(!1), o();
                },
                onClose: () => Ne(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ w.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx(
                  "label",
                  {
                    htmlFor: "firstName",
                    className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
                    children: "First Name"
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Fn,
                  {
                    id: "firstName",
                    type: "text",
                    value: p,
                    onChange: (ye) => y(ye.target.value),
                    placeholder: "First Name",
                    disabled: x || Te || !ae,
                    className: "w-[50%]!",
                    autoComplete: "given-name",
                    error: P && !p ? "Required" : ""
                  }
                )
              ] }),
              /* @__PURE__ */ w.jsxs("div", { children: [
                /* @__PURE__ */ w.jsx(
                  "label",
                  {
                    htmlFor: "lastName",
                    className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
                    children: "Last Name"
                  }
                ),
                /* @__PURE__ */ w.jsx(
                  Fn,
                  {
                    id: "lastName",
                    type: "text",
                    value: S,
                    onChange: (ye) => E(ye.target.value),
                    placeholder: "Last Name",
                    disabled: x || Te || !ae,
                    className: "w-[50%]!",
                    autoComplete: "family-name",
                    error: P && !S ? "Required" : ""
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ w.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ w.jsx(
                "label",
                {
                  htmlFor: "password",
                  className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
                  children: "Password"
                }
              ),
              /* @__PURE__ */ w.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ w.jsx(
                Fn,
                {
                  id: "password",
                  type: J ? "text" : "password",
                  value: D,
                  onChange: (ye) => {
                    G(ye.target.value), te("");
                  },
                  placeholder: "Enter Password...",
                  disabled: x || Te || !ae,
                  className: "w-full!",
                  autoComplete: "new-password",
                  error: P && !D ? "Required" : P && D && !V ? "Password must be 9-15 characters with at least one uppercase, lowercase, number, and special character (@.$%^_-). Example: MyPass123$" : "",
                  endIcon: /* @__PURE__ */ w.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => Z(!J),
                      className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                      tabIndex: -1,
                      children: J ? /* @__PURE__ */ w.jsx(
                        "svg",
                        {
                          className: "w-5! h-5!",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: /* @__PURE__ */ w.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                            }
                          )
                        }
                      ) : /* @__PURE__ */ w.jsxs(
                        "svg",
                        {
                          className: "w-5! h-5!",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: [
                            /* @__PURE__ */ w.jsx(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              }
                            ),
                            /* @__PURE__ */ w.jsx(
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
              ) })
            ] }),
            /* @__PURE__ */ w.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ w.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: k,
                  onChange: (ye) => q(ye.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none!"
                }
              ),
              /* @__PURE__ */ w.jsx("span", { className: "text-gray-600! text-sm!", children: "Remember me" })
            ] }) }),
            /* @__PURE__ */ w.jsx(
              Hm,
              {
                type: "submit",
                disabled: x || Te || !ae,
                className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: x ? /* @__PURE__ */ w.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ w.jsxs(
                    "svg",
                    {
                      className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ w.jsx(
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
                        /* @__PURE__ */ w.jsx(
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
            /* @__PURE__ */ w.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
              /* @__PURE__ */ w.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ w.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
              /* @__PURE__ */ w.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ w.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ w.jsx(
              "button",
              {
                type: "button",
                onClick: o,
                disabled: x,
                className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!",
                children: /* @__PURE__ */ w.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, oS = ({
  onSuccess: u,
  onError: c,
  handleClose: r,
  authority: o,
  title: s = "Continue to login",
  subtitle: h = "Continue by signing in."
}) => {
  const [d, g] = T.useState(""), [p, y] = T.useState(""), [S, E] = T.useState(!1), [D, G] = T.useState(!1), [x, L] = T.useState(null), [U, Y] = T.useState(""), [J, Z] = T.useState(!0), [I, le] = T.useState(!1), [oe, te] = T.useState(!1), [P, be] = T.useState(!1), [_e, Ne] = T.useState(!1), Te = T.useRef(null), Oe = T.useRef(null);
  T.useEffect(() => {
    if (Oe.current && clearTimeout(Oe.current), !d) {
      te(!1), Ne(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d)) {
      te(!1), Ne(!1);
      return;
    }
    return Oe.current = setTimeout(async () => {
      be(!0);
      try {
        (await o0(d)).exists ? (te(!0), Ne(!1)) : (te(!1), Ne(!0));
      } catch (re) {
        console.error("[EmbeddedLogin] Email check failed:", re), te(!0), Ne(!1);
      } finally {
        be(!1);
      }
    }, 500), () => {
      Oe.current && clearTimeout(Oe.current);
    };
  }, [d]), T.useEffect(() => {
    if (p) {
      const W = f0(p, null);
      L(W);
    } else
      L(null);
  }, [p]);
  const Ze = x ? x.length && x.upper && x.lower && x.number && x.noSpaces && x.noTriple && x.special : !1, k = d && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d);
  T.useEffect(() => {
    const W = (re) => {
      re.key === "Escape" && r();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [r]);
  const q = (W) => {
    W.target === Te.current && r();
  }, Q = async (W) => {
    if (W.preventDefault(), !d || !p) {
      Y("Please enter both email and password"), c("Please enter both email and password");
      return;
    }
    E(!0), Y("");
    try {
      const re = await d0(d, p, J);
      u(re);
    } catch (re) {
      console.error("[EmbeddedLogin] Login failed:", re);
      const De = re instanceof Error ? re.message : "Authentication failed";
      Y(De), c(De);
    } finally {
      E(!1);
    }
  };
  return I ? /* @__PURE__ */ w.jsx(
    sS,
    {
      onSuccess: (W) => {
        le(!1), u(W);
      },
      onError: c,
      handleClose: r,
      onSignIn: () => le(!1),
      authority: o
    }
  ) : /* @__PURE__ */ w.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Te,
      onMouseDown: q,
      children: /* @__PURE__ */ w.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ w.jsx(
          "button",
          {
            onClick: r,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none!",
            type: "button",
            children: /* @__PURE__ */ w.jsx("svg", { className: "w-6! h-6!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) })
          }
        ),
        /* @__PURE__ */ w.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ w.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: s }),
          /* @__PURE__ */ w.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: h })
        ] }),
        /* @__PURE__ */ w.jsxs("form", { onSubmit: Q, className: "space-y-2!", children: [
          /* @__PURE__ */ w.jsxs("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: [
            /* @__PURE__ */ w.jsx("label", { htmlFor: "email", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Email Address" }),
            /* @__PURE__ */ w.jsx(
              Fn,
              {
                id: "email",
                type: "email",
                value: d,
                onChange: (W) => g(W.target.value),
                placeholder: "Enter email address",
                disabled: S,
                className: "w-full!",
                autoComplete: "email",
                endIcon: /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
                  P && /* @__PURE__ */ w.jsx(Lm, {}),
                  !P && oe && k && /* @__PURE__ */ w.jsx(
                    "img",
                    {
                      src: h0,
                      alt: "user found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            )
          ] }),
          _e && !oe && k && /* @__PURE__ */ w.jsx(
            _m,
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
          /* @__PURE__ */ w.jsxs("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: [
            /* @__PURE__ */ w.jsx("label", { htmlFor: "password", className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: "Password" }),
            /* @__PURE__ */ w.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ w.jsx(
              Fn,
              {
                id: "password",
                type: D ? "text" : "password",
                value: p,
                onChange: (W) => {
                  y(W.target.value), Y("");
                },
                placeholder: "Enter Password...",
                disabled: S || !k || !oe,
                className: "w-full!",
                autoComplete: "current-password",
                error: U,
                endIcon: /* @__PURE__ */ w.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => G(!D),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: D ? /* @__PURE__ */ w.jsx("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" }) }) : /* @__PURE__ */ w.jsxs("svg", { className: "w-5! h-5!", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: [
                      /* @__PURE__ */ w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z" }),
                      /* @__PURE__ */ w.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" })
                    ] })
                  }
                )
              }
            ) })
          ] }),
          /* @__PURE__ */ w.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ w.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ w.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: J,
                  onChange: (W) => Z(W.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none!"
                }
              ),
              /* @__PURE__ */ w.jsx("span", { className: "text-gray-600!", children: "Remember me" })
            ] }),
            /* @__PURE__ */ w.jsx(
              "a",
              {
                href: "#",
                className: `text-blue-600! hover:text-blue-700! no-underline! ${!k || !oe ? "opacity-50! pointer-events-none!" : ""}`,
                onClick: (W) => {
                  (!k || !oe) && W.preventDefault();
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ w.jsx(
            Hm,
            {
              type: "submit",
              disabled: S || !d || !p || !Ze || !k || !oe,
              className: "w-full! bg-[#17a2b8] enabled:bg-[#17a2b8] hover:bg-[#138496] text-white border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: S ? /* @__PURE__ */ w.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ w.jsxs("svg", { className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white", fill: "none", viewBox: "0 0 24 24", children: [
                  /* @__PURE__ */ w.jsx("circle", { className: "opacity-25!", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                  /* @__PURE__ */ w.jsx("path", { className: "opacity-75!", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
                ] }),
                "Signing in..."
              ] }) : "Sign In"
            }
          ),
          /* @__PURE__ */ w.jsxs("div", { className: "relative! mt-6! mb-6!", children: [
            /* @__PURE__ */ w.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ w.jsx("div", { className: "w-full! border-t! border-gray-300" }) }),
            /* @__PURE__ */ w.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ w.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
          ] }),
          /* @__PURE__ */ w.jsx(
            "button",
            {
              type: "button",
              onClick: () => le(!0),
              disabled: S,
              className: "w-full! flex! items-center! justify-center! gap-3! bg-transparent! border-2! border-[#17a2b8] text-[#17a2b8] py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-all! duration-300! hover:bg-gray-50 active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: /* @__PURE__ */ w.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, fS = (u) => {
  const { authority: c, subsidiary: r, callbackUrl: o, onRedirect: s } = u, [h, d] = T.useState(!1);
  console.log("isAuthenticated", h), T.useEffect(() => {
    (async () => {
      try {
        if (iS()) {
          d(!0), u.redirectUrl && (window.location.href = u.redirectUrl);
          return;
        }
        if (cS()) {
          const G = localStorage.getItem("refresh_token");
          if (G) {
            console.log("[App] Attempting auto-login with refresh token");
            const x = await uS(G);
            if (x && x.tokens && x.tokens.access_token) {
              const L = x.tokens, U = qm(L.access_token), Y = (U.exp || 0) - Math.floor(Date.now() / 1e3);
              Ni("access_token", L.access_token, Y, !0), U.x_credentials && Ni("X-Credential", U.x_credentials, Y, !1), L.refresh_token && (localStorage.setItem("refresh_token", L.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const J = u.redirectUrl || o;
              if (s) {
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
                s(J, Z);
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
  }, [u.redirectUrl]), T.useEffect(() => {
    c && localStorage.setItem("authority", c), r && localStorage.setItem("subsidiary", r), o ? localStorage.setItem("callbackUrl", o) : localStorage.getItem("callbackUrl") || localStorage.setItem("callbackUrl", window.location.href.split("?")[0]);
  }, [c, r, o]);
  const g = (S) => {
    u.handleClose && u.handleClose(), d(!0);
    const E = u.redirectUrl || o;
    s && s(E, S), u.redirectUrl && setTimeout(() => {
      window.location.href = u.redirectUrl;
    }, 100);
  }, p = (S) => {
    console.log("[App] Embedded login error:", S);
  }, y = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ w.jsx(_p, { children: /* @__PURE__ */ w.jsx(Dm, { path: "*", element: /* @__PURE__ */ w.jsx(w.Fragment, { children: !h && u.showLogin && /* @__PURE__ */ w.jsx(
    oS,
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
    static get observedAttributes() {
      return ["authority", "subsidiary", "callbackUrl", "redirectUrl", "isShowToggle", "loginTitle", "loginSubtitle", "show-login"];
    }
    // Store function props
    onRedirect;
    onClose;
    onLogout;
    connectedCallback() {
      this.mountPoint = document.createElement("div"), this.appendChild(this.mountPoint), this.render();
    }
    attributeChangedCallback() {
      this.render();
    }
    disconnectedCallback() {
      this.root?.unmount();
    }
    handleRedirect = (r, o) => {
      console.log("[Widget] handleRedirect called, url:", r), this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(r, o));
      const s = new CustomEvent("redirect", {
        detail: {
          url: r,
          userSession: o,
          tokens: { access_token: o?.access_token },
          userInfo: o?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(s), console.log("[Widget] Redirect event dispatched"), r && !this.onRedirect && (console.log("[Widget] Will redirect to:", r, "in 200ms"), setTimeout(() => {
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
      console.log("[Widget] logout() called"), localStorage.removeItem("user_state"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"), document.cookie.split(";").forEach((o) => {
        document.cookie = o.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
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
        /* @__PURE__ */ w.jsx(c1, { children: /* @__PURE__ */ w.jsx(T.StrictMode, { children: /* @__PURE__ */ w.jsx(fS, { ...r }) }) })
      );
    }
  }
  customElements.define("keycloak-widget", u);
}
