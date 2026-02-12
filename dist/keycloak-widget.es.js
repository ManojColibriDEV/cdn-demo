
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var Dc = { exports: {} }, hi = {};
var ph;
function bg() {
  if (ph) return hi;
  ph = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(c, o, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: n,
      type: c,
      key: h,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return hi.Fragment = r, hi.jsx = s, hi.jsxs = s, hi;
}
var vh;
function Sg() {
  return vh || (vh = 1, Dc.exports = bg()), Dc.exports;
}
var v = Sg(), Uc = { exports: {} }, ne = {}, Eh;
function Rg() {
  if (Eh) return ne;
  Eh = 1;
  var n = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function C(S) {
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
  }, D = Object.assign, X = {};
  function Q(S, H, k) {
    this.props = S, this.context = H, this.refs = X, this.updater = k || j;
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
  function J() {
  }
  J.prototype = Q.prototype;
  function W(S, H, k) {
    this.props = S, this.context = H, this.refs = X, this.updater = k || j;
  }
  var te = W.prototype = new J();
  te.constructor = W, D(te, Q.prototype), te.isPureReactComponent = !0;
  var ye = Array.isArray;
  function ie() {
  }
  var P = { H: null, A: null, T: null, S: null }, le = Object.prototype.hasOwnProperty;
  function se(S, H, k) {
    var Z = k.ref;
    return {
      $$typeof: r,
      type: S,
      key: H,
      ref: Z !== void 0 ? Z : null,
      props: k
    };
  }
  function Ue(S, H) {
    return se(S.type, H, S.props);
  }
  function ge(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function qe(S) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(k) {
      return H[k];
    });
  }
  var Qe = /\/+/g;
  function Je(S, H) {
    return typeof S == "object" && S !== null && S.key != null ? qe("" + S.key) : H.toString(36);
  }
  function Y(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ie, ie) : (S.status = "pending", S.then(
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
  function G(S, H, k, Z, ae) {
    var K = typeof S;
    (K === "undefined" || K === "boolean") && (S = null);
    var ce = !1;
    if (S === null) ce = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          ce = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case s:
              ce = !0;
              break;
            case T:
              return ce = S._init, G(
                ce(S._payload),
                H,
                k,
                Z,
                ae
              );
          }
      }
    if (ce)
      return ae = ae(S), ce = Z === "" ? "." + Je(S, 0) : Z, ye(ae) ? (k = "", ce != null && (k = ce.replace(Qe, "$&/") + "/"), G(ae, H, k, "", function(ea) {
        return ea;
      })) : ae != null && (ge(ae) && (ae = Ue(
        ae,
        k + (ae.key == null || S && S.key === ae.key ? "" : ("" + ae.key).replace(
          Qe,
          "$&/"
        ) + "/") + ce
      )), H.push(ae)), 1;
    ce = 0;
    var He = Z === "" ? "." : Z + ":";
    if (ye(S))
      for (var Ge = 0; Ge < S.length; Ge++)
        Z = S[Ge], K = He + Je(Z, Ge), ce += G(
          Z,
          H,
          k,
          K,
          ae
        );
    else if (Ge = C(S), typeof Ge == "function")
      for (S = Ge.call(S), Ge = 0; !(Z = S.next()).done; )
        Z = Z.value, K = He + Je(Z, Ge++), ce += G(
          Z,
          H,
          k,
          K,
          ae
        );
    else if (K === "object") {
      if (typeof S.then == "function")
        return G(
          Y(S),
          H,
          k,
          Z,
          ae
        );
      throw H = String(S), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ce;
  }
  function V(S, H, k) {
    if (S == null) return S;
    var Z = [], ae = 0;
    return G(S, Z, "", "", function(K) {
      return H.call(k, K, ae++);
    }), Z;
  }
  function fe(S) {
    if (S._status === -1) {
      var H = S._result;
      H = H(), H.then(
        function(k) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = k);
        },
        function(k) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = k);
        }
      ), S._status === -1 && (S._status = 0, S._result = H);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Te = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, xe = {
    map: V,
    forEach: function(S, H, k) {
      V(
        S,
        function() {
          H.apply(this, arguments);
        },
        k
      );
    },
    count: function(S) {
      var H = 0;
      return V(S, function() {
        H++;
      }), H;
    },
    toArray: function(S) {
      return V(S, function(H) {
        return H;
      }) || [];
    },
    only: function(S) {
      if (!ge(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ne.Activity = w, ne.Children = xe, ne.Component = Q, ne.Fragment = c, ne.Profiler = d, ne.PureComponent = W, ne.StrictMode = o, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return P.H.useMemoCache(S);
    }
  }, ne.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(S, H, k) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var Z = D({}, S.props), ae = S.key;
    if (H != null)
      for (K in H.key !== void 0 && (ae = "" + H.key), H)
        !le.call(H, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && H.ref === void 0 || (Z[K] = H[K]);
    var K = arguments.length - 2;
    if (K === 1) Z.children = k;
    else if (1 < K) {
      for (var ce = Array(K), He = 0; He < K; He++)
        ce[He] = arguments[He + 2];
      Z.children = ce;
    }
    return se(S.type, ae, Z);
  }, ne.createContext = function(S) {
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
  }, ne.createElement = function(S, H, k) {
    var Z, ae = {}, K = null;
    if (H != null)
      for (Z in H.key !== void 0 && (K = "" + H.key), H)
        le.call(H, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ae[Z] = H[Z]);
    var ce = arguments.length - 2;
    if (ce === 1) ae.children = k;
    else if (1 < ce) {
      for (var He = Array(ce), Ge = 0; Ge < ce; Ge++)
        He[Ge] = arguments[Ge + 2];
      ae.children = He;
    }
    if (S && S.defaultProps)
      for (Z in ce = S.defaultProps, ce)
        ae[Z] === void 0 && (ae[Z] = ce[Z]);
    return se(S, K, ae);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ne.isValidElement = ge, ne.lazy = function(S) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: S },
      _init: fe
    };
  }, ne.memo = function(S, H) {
    return {
      $$typeof: b,
      type: S,
      compare: H === void 0 ? null : H
    };
  }, ne.startTransition = function(S) {
    var H = P.T, k = {};
    P.T = k;
    try {
      var Z = S(), ae = P.S;
      ae !== null && ae(k, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ie, Te);
    } catch (K) {
      Te(K);
    } finally {
      H !== null && k.types !== null && (H.types = k.types), P.T = H;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ne.use = function(S) {
    return P.H.use(S);
  }, ne.useActionState = function(S, H, k) {
    return P.H.useActionState(S, H, k);
  }, ne.useCallback = function(S, H) {
    return P.H.useCallback(S, H);
  }, ne.useContext = function(S) {
    return P.H.useContext(S);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(S, H) {
    return P.H.useDeferredValue(S, H);
  }, ne.useEffect = function(S, H) {
    return P.H.useEffect(S, H);
  }, ne.useEffectEvent = function(S) {
    return P.H.useEffectEvent(S);
  }, ne.useId = function() {
    return P.H.useId();
  }, ne.useImperativeHandle = function(S, H, k) {
    return P.H.useImperativeHandle(S, H, k);
  }, ne.useInsertionEffect = function(S, H) {
    return P.H.useInsertionEffect(S, H);
  }, ne.useLayoutEffect = function(S, H) {
    return P.H.useLayoutEffect(S, H);
  }, ne.useMemo = function(S, H) {
    return P.H.useMemo(S, H);
  }, ne.useOptimistic = function(S, H) {
    return P.H.useOptimistic(S, H);
  }, ne.useReducer = function(S, H, k) {
    return P.H.useReducer(S, H, k);
  }, ne.useRef = function(S) {
    return P.H.useRef(S);
  }, ne.useState = function(S) {
    return P.H.useState(S);
  }, ne.useSyncExternalStore = function(S, H, k) {
    return P.H.useSyncExternalStore(
      S,
      H,
      k
    );
  }, ne.useTransition = function() {
    return P.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var bh;
function lo() {
  return bh || (bh = 1, Uc.exports = Rg()), Uc.exports;
}
var A = lo();
var Sh = "popstate";
function Tg(n = {}) {
  function r(c, o) {
    let { pathname: d, search: h, hash: g } = c.location;
    return $c(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : Si(o);
  }
  return xg(
    r,
    s,
    null,
    n
  );
}
function Ye(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
function It(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Ag() {
  return Math.random().toString(36).substring(2, 10);
}
function Rh(n, r) {
  return {
    usr: n.state,
    key: n.key,
    idx: r
  };
}
function $c(n, r, s = null, c) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? mn(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || c || Ag()
  };
}
function Si({
  pathname: n = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s), n;
}
function mn(n) {
  let r = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && (r.hash = n.substring(s), n = n.substring(0, s));
    let c = n.indexOf("?");
    c >= 0 && (r.search = n.substring(c), n = n.substring(0, c)), n && (r.pathname = n);
  }
  return r;
}
function xg(n, r, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c, h = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    g = "POP";
    let D = b(), X = D == null ? null : D - y;
    y = D, p && p({ action: g, location: j.location, delta: X });
  }
  function w(D, X) {
    g = "PUSH";
    let Q = $c(j.location, D, X);
    y = b() + 1;
    let J = Rh(Q, y), W = j.createHref(Q);
    try {
      h.pushState(J, "", W);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError")
        throw te;
      o.location.assign(W);
    }
    d && p && p({ action: g, location: j.location, delta: 1 });
  }
  function q(D, X) {
    g = "REPLACE";
    let Q = $c(j.location, D, X);
    y = b();
    let J = Rh(Q, y), W = j.createHref(Q);
    h.replaceState(J, "", W), d && p && p({ action: g, location: j.location, delta: 0 });
  }
  function C(D) {
    return Cg(D);
  }
  let j = {
    get action() {
      return g;
    },
    get location() {
      return n(o, h);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Sh, T), p = D, () => {
        o.removeEventListener(Sh, T), p = null;
      };
    },
    createHref(D) {
      return r(o, D);
    },
    createURL: C,
    encodeLocation(D) {
      let X = C(D);
      return {
        pathname: X.pathname,
        search: X.search,
        hash: X.hash
      };
    },
    push: w,
    replace: q,
    go(D) {
      return h.go(D);
    }
  };
  return j;
}
function Cg(n, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Ye(s, "No window.location.(origin|href) available to create URL");
  let c = typeof n == "string" ? n : Si(n);
  return c = c.replace(/ $/, "%20"), !r && c.startsWith("//") && (c = s + c), new URL(c, s);
}
function lm(n, r, s = "/") {
  return Ng(n, r, s, !1);
}
function Ng(n, r, s, c) {
  let o = typeof r == "string" ? mn(r) : r, d = xl(o.pathname || "/", s);
  if (d == null)
    return null;
  let h = am(n);
  _g(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = qg(d);
    g = Hg(
      h[p],
      y,
      c
    );
  }
  return g;
}
function am(n, r = [], s = [], c = "", o = !1) {
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
      Ye(
        b.relativePath.startsWith(c),
        `Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(c.length);
    }
    let T = Tl([c, b.relativePath]), w = s.concat(b);
    h.children && h.children.length > 0 && (Ye(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), am(
      h.children,
      r,
      w,
      T,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: T,
      score: jg(T, h.index),
      routesMeta: w
    });
  };
  return n.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of nm(h.path))
        d(h, g, !0, p);
  }), r;
}
function nm(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [s, ...c] = r, o = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (c.length === 0)
    return o ? [d, ""] : [d];
  let h = nm(c.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...h), g.map(
    (p) => n.startsWith("/") && p === "" ? "/" : p
  );
}
function _g(n) {
  n.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Lg(
      r.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Og = /^:[\w-]+$/, wg = 3, Dg = 2, Ug = 1, Mg = 10, zg = -2, Th = (n) => n === "*";
function jg(n, r) {
  let s = n.split("/"), c = s.length;
  return s.some(Th) && (c += zg), r && (c += Dg), s.filter((o) => !Th(o)).reduce(
    (o, d) => o + (Og.test(d) ? wg : d === "" ? Ug : Mg),
    c
  );
}
function Lg(n, r) {
  return n.length === r.length && n.slice(0, -1).every((c, o) => c === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    n[n.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Hg(n, r, s = !1) {
  let { routesMeta: c } = n, o = {}, d = "/", h = [];
  for (let g = 0; g < c.length; ++g) {
    let p = c[g], y = g === c.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", T = ur(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), w = p.route;
    if (!T && y && s && !c[c.length - 1].route.index && (T = ur(
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
      pathname: Tl([d, T.pathname]),
      pathnameBase: Vg(
        Tl([d, T.pathnameBase])
      ),
      route: w
    }), T.pathnameBase !== "/" && (d = Tl([d, T.pathnameBase]));
  }
  return h;
}
function ur(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, c] = Bg(
    n.path,
    n.caseSensitive,
    n.end
  ), o = r.match(s);
  if (!o) return null;
  let d = o[0], h = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: c.reduce(
      (y, { paramName: b, isOptional: T }, w) => {
        if (b === "*") {
          let C = g[w] || "";
          h = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[w];
        return T && !q ? y[b] = void 0 : y[b] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: n
  };
}
function Bg(n, r = !1, s = !0) {
  It(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let c = [], o = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (c.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return n.endsWith("*") ? (c.push({ paramName: "*" }), o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), c];
}
function qg(n) {
  try {
    return n.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return It(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), n;
  }
}
function xl(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, c = n.charAt(s);
  return c && c !== "/" ? null : n.slice(s) || "/";
}
var im = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Gg = (n) => im.test(n);
function Yg(n, r = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: o = ""
  } = typeof n == "string" ? mn(n) : n, d;
  if (s)
    if (Gg(s))
      d = s;
    else {
      if (s.includes("//")) {
        let h = s;
        s = s.replace(/\/\/+/g, "/"), It(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`
        );
      }
      s.startsWith("/") ? d = Ah(s.substring(1), "/") : d = Ah(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: Kg(c),
    hash: Qg(o)
  };
}
function Ah(n, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((o) => {
    o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
  }), s.length > 1 ? s.join("/") : "/";
}
function Mc(n, r, s, c) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Xg(n) {
  return n.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function um(n) {
  let r = Xg(n);
  return r.map(
    (s, c) => c === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function rm(n, r, s, c = !1) {
  let o;
  typeof n == "string" ? o = mn(n) : (o = { ...n }, Ye(
    !o.pathname || !o.pathname.includes("?"),
    Mc("?", "pathname", "search", o)
  ), Ye(
    !o.pathname || !o.pathname.includes("#"),
    Mc("#", "pathname", "hash", o)
  ), Ye(
    !o.search || !o.search.includes("#"),
    Mc("#", "search", "hash", o)
  ));
  let d = n === "" || o.pathname === "", h = d ? "/" : o.pathname, g;
  if (h == null)
    g = s;
  else {
    let T = r.length - 1;
    if (!c && h.startsWith("..")) {
      let w = h.split("/");
      for (; w[0] === ".."; )
        w.shift(), T -= 1;
      o.pathname = w.join("/");
    }
    g = T >= 0 ? r[T] : "/";
  }
  let p = Yg(o, g), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var Tl = (n) => n.join("/").replace(/\/\/+/g, "/"), Vg = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), Kg = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Qg = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n, kg = class {
  constructor(n, r, s, c = !1) {
    this.status = n, this.statusText = r || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Zg(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
function Jg(n) {
  return n.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var sm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function cm(n, r) {
  let s = n;
  if (typeof s != "string" || !im.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, o = !1;
  if (sm)
    try {
      let d = new URL(window.location.href), h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = xl(h.pathname, r);
      h.origin === d.origin && g != null ? s = g + h.search + h.hash : o = !0;
    } catch {
      It(
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
var om = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  om
);
var $g = [
  "GET",
  ...om
];
new Set($g);
var yn = A.createContext(null);
yn.displayName = "DataRouter";
var sr = A.createContext(null);
sr.displayName = "DataRouterState";
var Fg = A.createContext(!1), fm = A.createContext({
  isTransitioning: !1
});
fm.displayName = "ViewTransition";
var Wg = A.createContext(
  /* @__PURE__ */ new Map()
);
Wg.displayName = "Fetchers";
var Ig = A.createContext(null);
Ig.displayName = "Await";
var Qt = A.createContext(
  null
);
Qt.displayName = "Navigation";
var Ai = A.createContext(
  null
);
Ai.displayName = "Location";
var Cl = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Cl.displayName = "Route";
var ao = A.createContext(null);
ao.displayName = "RouteError";
var dm = "REACT_ROUTER_ERROR", Pg = "REDIRECT", ep = "ROUTE_ERROR_RESPONSE";
function tp(n) {
  if (n.startsWith(`${dm}:${Pg}:{`))
    try {
      let r = JSON.parse(n.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function lp(n) {
  if (n.startsWith(
    `${dm}:${ep}:{`
  ))
    try {
      let r = JSON.parse(n.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new kg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function ap(n, { relative: r } = {}) {
  Ye(
    xi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = A.useContext(Qt), { hash: o, pathname: d, search: h } = Ci(n, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : Tl([s, d])), c.createHref({ pathname: g, search: h, hash: o });
}
function xi() {
  return A.useContext(Ai) != null;
}
function Aa() {
  return Ye(
    xi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(Ai).location;
}
var hm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function mm(n) {
  A.useContext(Qt).static || A.useLayoutEffect(n);
}
function np() {
  let { isDataRoute: n } = A.useContext(Cl);
  return n ? pp() : ip();
}
function ip() {
  Ye(
    xi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = A.useContext(yn), { basename: r, navigator: s } = A.useContext(Qt), { matches: c } = A.useContext(Cl), { pathname: o } = Aa(), d = JSON.stringify(um(c)), h = A.useRef(!1);
  return mm(() => {
    h.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (It(h.current, hm), !h.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let b = rm(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      n == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : Tl([r, b.pathname])), (y.replace ? s.replace : s.push)(
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
      n
    ]
  );
}
A.createContext(null);
function Ci(n, { relative: r } = {}) {
  let { matches: s } = A.useContext(Cl), { pathname: c } = Aa(), o = JSON.stringify(um(s));
  return A.useMemo(
    () => rm(
      n,
      JSON.parse(o),
      c,
      r === "path"
    ),
    [n, o, c, r]
  );
}
function up(n, r) {
  return ym(n, r);
}
function ym(n, r, s, c, o) {
  Ye(
    xi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(Qt), { matches: h } = A.useContext(Cl), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", T = g && g.route;
  {
    let Q = T && T.path || "";
    pm(
      y,
      !T || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let w = Aa(), q;
  if (r) {
    let Q = typeof r == "string" ? mn(r) : r;
    Ye(
      b === "/" || Q.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ), q = Q;
  } else
    q = w;
  let C = q.pathname || "/", j = C;
  if (b !== "/") {
    let Q = b.replace(/^\//, "").split("/");
    j = "/" + C.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let D = lm(n, { pathname: j });
  It(
    T || D != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), It(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let X = fp(
    D && D.map(
      (Q) => Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: Tl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathname
        ]),
        pathnameBase: Q.pathnameBase === "/" ? b : Tl([
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
    s,
    c,
    o
  );
  return r && X ? /* @__PURE__ */ A.createElement(
    Ai.Provider,
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
    X
  ) : X;
}
function rp() {
  let n = gp(), r = Zg(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), s = n instanceof Error ? n.stack : null, c = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: c }, d = { padding: "2px 4px", backgroundColor: c }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), h = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ A.createElement("pre", { style: o }, s) : null, h);
}
var sp = /* @__PURE__ */ A.createElement(rp, null), gm = class extends A.Component {
  constructor(n) {
    super(n), this.state = {
      location: n.location,
      revalidation: n.revalidation,
      error: n.error
    };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location || r.revalidation !== "idle" && n.revalidation === "idle" ? {
      error: n.error,
      location: n.location,
      revalidation: n.revalidation
    } : {
      error: n.error !== void 0 ? n.error : r.error,
      location: r.location,
      revalidation: n.revalidation || r.revalidation
    };
  }
  componentDidCatch(n, r) {
    this.props.onError ? this.props.onError(n, r) : console.error(
      "React Router caught the following error during render",
      n
    );
  }
  render() {
    let n = this.state.error;
    if (this.context && typeof n == "object" && n && "digest" in n && typeof n.digest == "string") {
      const s = lp(n.digest);
      s && (n = s);
    }
    let r = n !== void 0 ? /* @__PURE__ */ A.createElement(Cl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      ao.Provider,
      {
        value: n,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(cp, { error: n }, r) : r;
  }
};
gm.contextType = Fg;
var zc = /* @__PURE__ */ new WeakMap();
function cp({
  children: n,
  error: r
}) {
  let { basename: s } = A.useContext(Qt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = tp(r.digest);
    if (c) {
      let o = zc.get(r);
      if (o) throw o;
      let d = cm(c.location, s);
      if (sm && !zc.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw zc.set(r, h), h;
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
  return n;
}
function op({ routeContext: n, match: r, children: s }) {
  let c = A.useContext(yn);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(Cl.Provider, { value: n }, s);
}
function fp(n, r = [], s = null, c = null, o = null) {
  if (n == null) {
    if (!s)
      return null;
    if (s.errors)
      n = s.matches;
    else if (r.length === 0 && !s.initialized && s.matches.length > 0)
      n = s.matches;
    else
      return null;
  }
  let d = n, h = s?.errors;
  if (h != null) {
    let b = d.findIndex(
      (T) => T.route.id && h?.[T.route.id] !== void 0
    );
    Ye(
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
        let { loaderData: w, errors: q } = s, C = T.route.loader && !w.hasOwnProperty(T.route.id) && (!q || q[T.route.id] === void 0);
        if (T.route.lazy || C) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && c ? (b, T) => {
    c(b, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: Jg(s.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (b, T, w) => {
      let q, C = !1, j = null, D = null;
      s && (q = h && T.route.id ? h[T.route.id] : void 0, j = T.route.errorElement || sp, g && (p < 0 && w === 0 ? (pm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), C = !0, D = null) : p === w && (C = !0, D = T.route.hydrateFallbackElement || null)));
      let X = r.concat(d.slice(0, w + 1)), Q = () => {
        let J;
        return q ? J = j : C ? J = D : T.route.Component ? J = /* @__PURE__ */ A.createElement(T.route.Component, null) : T.route.element ? J = T.route.element : J = b, /* @__PURE__ */ A.createElement(
          op,
          {
            match: T,
            routeContext: {
              outlet: b,
              matches: X,
              isDataRoute: s != null
            },
            children: J
          }
        );
      };
      return s && (T.route.ErrorBoundary || T.route.errorElement || w === 0) ? /* @__PURE__ */ A.createElement(
        gm,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: j,
          error: q,
          children: Q(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
          onError: y
        }
      ) : Q();
    },
    null
  );
}
function no(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function dp(n) {
  let r = A.useContext(yn);
  return Ye(r, no(n)), r;
}
function hp(n) {
  let r = A.useContext(sr);
  return Ye(r, no(n)), r;
}
function mp(n) {
  let r = A.useContext(Cl);
  return Ye(r, no(n)), r;
}
function io(n) {
  let r = mp(n), s = r.matches[r.matches.length - 1];
  return Ye(
    s.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function yp() {
  return io(
    "useRouteId"
    /* UseRouteId */
  );
}
function gp() {
  let n = A.useContext(ao), r = hp(
    "useRouteError"
    /* UseRouteError */
  ), s = io(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : r.errors?.[s];
}
function pp() {
  let { router: n } = dp(
    "useNavigate"
    /* UseNavigateStable */
  ), r = io(
    "useNavigate"
    /* UseNavigateStable */
  ), s = A.useRef(!1);
  return mm(() => {
    s.current = !0;
  }), A.useCallback(
    async (o, d = {}) => {
      It(s.current, hm), s.current && (typeof o == "number" ? await n.navigate(o) : await n.navigate(o, { fromRouteId: r, ...d }));
    },
    [n, r]
  );
}
var xh = {};
function pm(n, r, s) {
  !r && !xh[n] && (xh[n] = !0, It(!1, s));
}
A.memo(vp);
function vp({
  routes: n,
  future: r,
  state: s,
  onError: c
}) {
  return ym(n, void 0, s, c, r);
}
function vm(n) {
  Ye(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Ep({
  basename: n = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h
}) {
  Ye(
    !xi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = n.replace(/^\/*/, "/"), p = A.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, o, d, h]
  );
  typeof s == "string" && (s = mn(s));
  let {
    pathname: y = "/",
    search: b = "",
    hash: T = "",
    state: w = null,
    key: q = "default"
  } = s, C = A.useMemo(() => {
    let j = xl(y, g);
    return j == null ? null : {
      location: {
        pathname: j,
        search: b,
        hash: T,
        state: w,
        key: q
      },
      navigationType: c
    };
  }, [g, y, b, T, w, q, c]);
  return It(
    C != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ A.createElement(Qt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Ai.Provider, { children: r, value: C }));
}
function bp({
  children: n,
  location: r
}) {
  return up(Fc(n), r);
}
function Fc(n, r = []) {
  let s = [];
  return A.Children.forEach(n, (c, o) => {
    if (!A.isValidElement(c))
      return;
    let d = [...r, o];
    if (c.type === A.Fragment) {
      s.push.apply(
        s,
        Fc(c.props.children, d)
      );
      return;
    }
    Ye(
      c.type === vm,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ye(
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
    c.props.children && (h.children = Fc(
      c.props.children,
      d
    )), s.push(h);
  }), s;
}
var tr = "get", lr = "application/x-www-form-urlencoded";
function cr(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function Sp(n) {
  return cr(n) && n.tagName.toLowerCase() === "button";
}
function Rp(n) {
  return cr(n) && n.tagName.toLowerCase() === "form";
}
function Tp(n) {
  return cr(n) && n.tagName.toLowerCase() === "input";
}
function Ap(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function xp(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Ap(n);
}
var Fu = null;
function Cp() {
  if (Fu === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Fu = !1;
    } catch {
      Fu = !0;
    }
  return Fu;
}
var Np = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function jc(n) {
  return n != null && !Np.has(n) ? (It(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lr}"`
  ), null) : n;
}
function _p(n, r) {
  let s, c, o, d, h;
  if (Rp(n)) {
    let g = n.getAttribute("action");
    c = g ? xl(g, r) : null, s = n.getAttribute("method") || tr, o = jc(n.getAttribute("enctype")) || lr, d = new FormData(n);
  } else if (Sp(n) || Tp(n) && (n.type === "submit" || n.type === "image")) {
    let g = n.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = n.getAttribute("formaction") || g.getAttribute("action");
    if (c = p ? xl(p, r) : null, s = n.getAttribute("formmethod") || g.getAttribute("method") || tr, o = jc(n.getAttribute("formenctype")) || jc(g.getAttribute("enctype")) || lr, d = new FormData(g, n), !Cp()) {
      let { name: y, type: b, value: T } = n;
      if (b === "image") {
        let w = y ? `${y}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (cr(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = tr, c = null, o = lr, h = n;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: c, method: s.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uo(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
function Op(n, r, s) {
  let c = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return c.pathname === "/" ? c.pathname = `_root.${s}` : r && xl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`, c;
}
async function wp(n, r) {
  if (n.id in r)
    return r[n.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      n.module
    );
    return r[n.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${n.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Dp(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function Up(n, r, s) {
  let c = await Promise.all(
    n.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let h = await wp(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Lp(
    c.flat(1).filter(Dp).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function Ch(n, r, s, c, o, d) {
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
        nextUrl: new URL(n, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean")
        return T;
    }
    return !0;
  }) : [];
}
function Mp(n, r, { includeHydrateFallback: s } = {}) {
  return zp(
    n.map((c) => {
      let o = r.routes[c.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function zp(n) {
  return [...new Set(n)];
}
function jp(n) {
  let r = {}, s = Object.keys(n).sort();
  for (let c of s)
    r[c] = n[c];
  return r;
}
function Lp(n, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((c, o) => {
    let d = JSON.stringify(jp(o));
    return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
  }, []);
}
function Em() {
  let n = A.useContext(yn);
  return uo(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function Hp() {
  let n = A.useContext(sr);
  return uo(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var ro = A.createContext(void 0);
ro.displayName = "FrameworkContext";
function bm() {
  let n = A.useContext(ro);
  return uo(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function Bp(n, r) {
  let s = A.useContext(ro), [c, o] = A.useState(!1), [d, h] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: T } = r, w = A.useRef(null);
  A.useEffect(() => {
    if (n === "render" && h(!0), n === "viewport") {
      let j = (X) => {
        X.forEach((Q) => {
          h(Q.isIntersecting);
        });
      }, D = new IntersectionObserver(j, { threshold: 0.5 });
      return w.current && D.observe(w.current), () => {
        D.disconnect();
      };
    }
  }, [n]), A.useEffect(() => {
    if (c) {
      let j = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(j);
      };
    }
  }, [c]);
  let q = () => {
    o(!0);
  }, C = () => {
    o(!1), h(!1);
  };
  return s ? n !== "intent" ? [d, w, {}] : [
    d,
    w,
    {
      onFocus: mi(g, q),
      onBlur: mi(p, C),
      onMouseEnter: mi(y, q),
      onMouseLeave: mi(b, C),
      onTouchStart: mi(T, q)
    }
  ] : [!1, w, {}];
}
function mi(n, r) {
  return (s) => {
    n && n(s), s.defaultPrevented || r(s);
  };
}
function qp({ page: n, ...r }) {
  let { router: s } = Em(), c = A.useMemo(
    () => lm(s.routes, n, s.basename),
    [s.routes, n, s.basename]
  );
  return c ? /* @__PURE__ */ A.createElement(Yp, { page: n, matches: c, ...r }) : null;
}
function Gp(n) {
  let { manifest: r, routeModules: s } = bm(), [c, o] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Up(n, r, s).then(
      (h) => {
        d || o(h);
      }
    ), () => {
      d = !0;
    };
  }, [n, r, s]), c;
}
function Yp({
  page: n,
  matches: r,
  ...s
}) {
  let c = Aa(), { manifest: o, routeModules: d } = bm(), { basename: h } = Em(), { loaderData: g, matches: p } = Hp(), y = A.useMemo(
    () => Ch(
      n,
      r,
      p,
      o,
      c,
      "data"
    ),
    [n, r, p, o, c]
  ), b = A.useMemo(
    () => Ch(
      n,
      r,
      p,
      o,
      c,
      "assets"
    ),
    [n, r, p, o, c]
  ), T = A.useMemo(() => {
    if (n === c.pathname + c.search + c.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), j = !1;
    if (r.forEach((X) => {
      let Q = o.routes[X.route.id];
      !Q || !Q.hasLoader || (!y.some((J) => J.route.id === X.route.id) && X.route.id in g && d[X.route.id]?.shouldRevalidate || Q.hasClientLoader ? j = !0 : C.add(X.route.id));
    }), C.size === 0)
      return [];
    let D = Op(n, h, "data");
    return j && C.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((X) => C.has(X.route.id)).map((X) => X.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    h,
    g,
    c,
    o,
    y,
    r,
    n,
    d
  ]), w = A.useMemo(
    () => Mp(b, o),
    [b, o]
  ), q = Gp(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, T.map((C) => /* @__PURE__ */ A.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), w.map((C) => /* @__PURE__ */ A.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), q.map(({ key: C, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: C, nonce: s.nonce, ...j })
  )));
}
function Xp(...n) {
  return (r) => {
    n.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var Vp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Vp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function Kp({
  basename: n,
  children: r,
  unstable_useTransitions: s,
  window: c
}) {
  let o = A.useRef();
  o.current == null && (o.current = Tg({ window: c, v5Compat: !0 }));
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
    Ep,
    {
      basename: n,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      unstable_useTransitions: s
    }
  );
}
var Sm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Rm = A.forwardRef(
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
    unstable_defaultShouldRevalidate: w,
    ...q
  }, C) {
    let { basename: j, unstable_useTransitions: D } = A.useContext(Qt), X = typeof y == "string" && Sm.test(y), Q = cm(y, j);
    y = Q.to;
    let J = ap(y, { relative: o }), [W, te, ye] = Bp(
      c,
      q
    ), ie = Jp(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: T,
      unstable_defaultShouldRevalidate: w,
      unstable_useTransitions: D
    });
    function P(se) {
      r && r(se), se.defaultPrevented || ie(se);
    }
    let le = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ A.createElement(
        "a",
        {
          ...q,
          ...ye,
          href: Q.absoluteURL || J,
          onClick: Q.isExternal || d ? r : P,
          ref: Xp(C, te),
          target: p,
          "data-discover": !X && s === "render" ? "true" : void 0
        }
      )
    );
    return W && !X ? /* @__PURE__ */ A.createElement(A.Fragment, null, le, /* @__PURE__ */ A.createElement(qp, { page: J })) : le;
  }
);
Rm.displayName = "Link";
var Qp = A.forwardRef(
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
    let T = Ci(h, { relative: y.relative }), w = Aa(), q = A.useContext(sr), { navigator: C, basename: j } = A.useContext(Qt), D = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Pp(T) && g === !0, X = C.encodeLocation ? C.encodeLocation(T).pathname : T.pathname, Q = w.pathname, J = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (Q = Q.toLowerCase(), J = J ? J.toLowerCase() : null, X = X.toLowerCase()), J && j && (J = xl(J, j) || J);
    const W = X !== "/" && X.endsWith("/") ? X.length - 1 : X.length;
    let te = Q === X || !o && Q.startsWith(X) && Q.charAt(W) === "/", ye = J != null && (J === X || !o && J.startsWith(X) && J.charAt(X.length) === "/"), ie = {
      isActive: te,
      isPending: ye,
      isTransitioning: D
    }, P = te ? r : void 0, le;
    typeof c == "function" ? le = c(ie) : le = [
      c,
      te ? "active" : null,
      ye ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let se = typeof d == "function" ? d(ie) : d;
    return /* @__PURE__ */ A.createElement(
      Rm,
      {
        ...y,
        "aria-current": P,
        className: le,
        ref: b,
        style: se,
        to: h,
        viewTransition: g
      },
      typeof p == "function" ? p(ie) : p
    );
  }
);
Qp.displayName = "NavLink";
var kp = A.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: c,
    replace: o,
    state: d,
    method: h = tr,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: w,
    ...q
  }, C) => {
    let { unstable_useTransitions: j } = A.useContext(Qt), D = Wp(), X = Ip(g, { relative: y }), Q = h.toLowerCase() === "get" ? "get" : "post", J = typeof g == "string" && Sm.test(g), W = (te) => {
      if (p && p(te), te.defaultPrevented) return;
      te.preventDefault();
      let ye = te.nativeEvent.submitter, ie = ye?.getAttribute("formmethod") || h, P = () => D(ye || te.currentTarget, {
        fetcherKey: r,
        method: ie,
        navigate: s,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: T,
        unstable_defaultShouldRevalidate: w
      });
      j && s !== !1 ? A.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: C,
        method: Q,
        action: X,
        onSubmit: c ? p : W,
        ...q,
        "data-discover": !J && n === "render" ? "true" : void 0
      }
    );
  }
);
kp.displayName = "Form";
function Zp(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tm(n) {
  let r = A.useContext(yn);
  return Ye(r, Zp(n)), r;
}
function Jp(n, {
  target: r,
  replace: s,
  state: c,
  preventScrollReset: o,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = np(), b = Aa(), T = Ci(n, { relative: d });
  return A.useCallback(
    (w) => {
      if (xp(w, r)) {
        w.preventDefault();
        let q = s !== void 0 ? s : Si(b) === Si(T), C = () => y(n, {
          replace: q,
          state: c,
          preventScrollReset: o,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? A.startTransition(() => C()) : C();
      }
    },
    [
      b,
      y,
      T,
      s,
      c,
      r,
      n,
      o,
      d,
      h,
      g,
      p
    ]
  );
}
var $p = 0, Fp = () => `__${String(++$p)}__`;
function Wp() {
  let { router: n } = Tm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(Qt), s = yp(), c = n.fetch, o = n.navigate;
  return A.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: T } = _p(
        d,
        r
      );
      if (h.navigate === !1) {
        let w = h.fetcherKey || Fp();
        await c(w, s, h.action || g, {
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
function Ip(n, { relative: r } = {}) {
  let { basename: s } = A.useContext(Qt), c = A.useContext(Cl);
  Ye(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1), d = { ...Ci(n || ".", { relative: r }) }, h = Aa();
  if (n == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((T) => T).forEach((T) => g.append("index", T));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!n || n === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : Tl([s, d.pathname])), Si(d);
}
function Pp(n, { relative: r } = {}) {
  let s = A.useContext(fm);
  Ye(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Tm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = Ci(n, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = xl(s.currentLocation.pathname, c) || s.currentLocation.pathname, h = xl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return ur(o.pathname, h) != null || ur(o.pathname, d) != null;
}
var Lc = { exports: {} }, ft = {};
var Nh;
function ev() {
  if (Nh) return ft;
  Nh = 1;
  var n = lo();
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
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ft.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, ft.flushSync = function(p) {
    var y = h.T, b = c.p;
    try {
      if (h.T = null, c.p = 2, p) return p();
    } finally {
      h.T = y, c.p = b, c.d.f();
    }
  }, ft.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(p, y));
  }, ft.prefetchDNS = function(p) {
    typeof p == "string" && c.d.D(p);
  }, ft.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, T = g(b, y.crossOrigin), w = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? c.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: T,
          integrity: w,
          fetchPriority: q
        }
      ) : b === "script" && c.d.X(p, {
        crossOrigin: T,
        integrity: w,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, ft.preinitModule = function(p, y) {
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
  }, ft.preload = function(p, y) {
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
  }, ft.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        c.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(p);
  }, ft.requestFormReset = function(p) {
    c.d.r(p);
  }, ft.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, ft.useFormState = function(p, y, b) {
    return h.H.useFormState(p, y, b);
  }, ft.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, ft.version = "19.2.3", ft;
}
var _h;
function tv() {
  if (_h) return Lc.exports;
  _h = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Lc.exports = ev(), Lc.exports;
}
var Hc = { exports: {} }, yi = {}, Bc = { exports: {} }, qc = {};
var Oh;
function lv() {
  return Oh || (Oh = 1, (function(n) {
    function r(Y, G) {
      var V = Y.length;
      Y.push(G);
      e: for (; 0 < V; ) {
        var fe = V - 1 >>> 1, Te = Y[fe];
        if (0 < o(Te, G))
          Y[fe] = G, Y[V] = Te, V = fe;
        else break e;
      }
    }
    function s(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function c(Y) {
      if (Y.length === 0) return null;
      var G = Y[0], V = Y.pop();
      if (V !== G) {
        Y[0] = V;
        e: for (var fe = 0, Te = Y.length, xe = Te >>> 1; fe < xe; ) {
          var S = 2 * (fe + 1) - 1, H = Y[S], k = S + 1, Z = Y[k];
          if (0 > o(H, V))
            k < Te && 0 > o(Z, H) ? (Y[fe] = Z, Y[k] = V, fe = k) : (Y[fe] = H, Y[S] = V, fe = S);
          else if (k < Te && 0 > o(Z, V))
            Y[fe] = Z, Y[k] = V, fe = k;
          else break e;
        }
      }
      return G;
    }
    function o(Y, G) {
      var V = Y.sortIndex - G.sortIndex;
      return V !== 0 ? V : Y.id - G.id;
    }
    if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      n.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, g = h.now();
      n.unstable_now = function() {
        return h.now() - g;
      };
    }
    var p = [], y = [], b = 1, T = null, w = 3, q = !1, C = !1, j = !1, D = !1, X = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function W(Y) {
      for (var G = s(y); G !== null; ) {
        if (G.callback === null) c(y);
        else if (G.startTime <= Y)
          c(y), G.sortIndex = G.expirationTime, r(p, G);
        else break;
        G = s(y);
      }
    }
    function te(Y) {
      if (j = !1, W(Y), !C)
        if (s(p) !== null)
          C = !0, ye || (ye = !0, ge());
        else {
          var G = s(y);
          G !== null && Je(te, G.startTime - Y);
        }
    }
    var ye = !1, ie = -1, P = 5, le = -1;
    function se() {
      return D ? !0 : !(n.unstable_now() - le < P);
    }
    function Ue() {
      if (D = !1, ye) {
        var Y = n.unstable_now();
        le = Y;
        var G = !0;
        try {
          e: {
            C = !1, j && (j = !1, Q(ie), ie = -1), q = !0;
            var V = w;
            try {
              t: {
                for (W(Y), T = s(p); T !== null && !(T.expirationTime > Y && se()); ) {
                  var fe = T.callback;
                  if (typeof fe == "function") {
                    T.callback = null, w = T.priorityLevel;
                    var Te = fe(
                      T.expirationTime <= Y
                    );
                    if (Y = n.unstable_now(), typeof Te == "function") {
                      T.callback = Te, W(Y), G = !0;
                      break t;
                    }
                    T === s(p) && c(p), W(Y);
                  } else c(p);
                  T = s(p);
                }
                if (T !== null) G = !0;
                else {
                  var xe = s(y);
                  xe !== null && Je(
                    te,
                    xe.startTime - Y
                  ), G = !1;
                }
              }
              break e;
            } finally {
              T = null, w = V, q = !1;
            }
            G = void 0;
          }
        } finally {
          G ? ge() : ye = !1;
        }
      }
    }
    var ge;
    if (typeof J == "function")
      ge = function() {
        J(Ue);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Qe = qe.port2;
      qe.port1.onmessage = Ue, ge = function() {
        Qe.postMessage(null);
      };
    } else
      ge = function() {
        X(Ue, 0);
      };
    function Je(Y, G) {
      ie = X(function() {
        Y(n.unstable_now());
      }, G);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, n.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(Y) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = w;
      }
      var V = w;
      w = G;
      try {
        return Y();
      } finally {
        w = V;
      }
    }, n.unstable_requestPaint = function() {
      D = !0;
    }, n.unstable_runWithPriority = function(Y, G) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Y = 3;
      }
      var V = w;
      w = Y;
      try {
        return G();
      } finally {
        w = V;
      }
    }, n.unstable_scheduleCallback = function(Y, G, V) {
      var fe = n.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? fe + V : fe) : V = fe, Y) {
        case 1:
          var Te = -1;
          break;
        case 2:
          Te = 250;
          break;
        case 5:
          Te = 1073741823;
          break;
        case 4:
          Te = 1e4;
          break;
        default:
          Te = 5e3;
      }
      return Te = V + Te, Y = {
        id: b++,
        callback: G,
        priorityLevel: Y,
        startTime: V,
        expirationTime: Te,
        sortIndex: -1
      }, V > fe ? (Y.sortIndex = V, r(y, Y), s(p) === null && Y === s(y) && (j ? (Q(ie), ie = -1) : j = !0, Je(te, V - fe))) : (Y.sortIndex = Te, r(p, Y), C || q || (C = !0, ye || (ye = !0, ge()))), Y;
    }, n.unstable_shouldYield = se, n.unstable_wrapCallback = function(Y) {
      var G = w;
      return function() {
        var V = w;
        w = G;
        try {
          return Y.apply(this, arguments);
        } finally {
          w = V;
        }
      };
    };
  })(qc)), qc;
}
var wh;
function av() {
  return wh || (wh = 1, Bc.exports = lv()), Bc.exports;
}
var Dh;
function nv() {
  if (Dh) return yi;
  Dh = 1;
  var n = {};
  var r = av(), s = lo(), c = tv();
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
    for (var l = e, a = t; ; ) {
      var i = l.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (a = i.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === l) return y(i), e;
          if (u === a) return y(i), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) l = i, a = u;
      else {
        for (var f = !1, m = i.child; m; ) {
          if (m === l) {
            f = !0, l = i, a = u;
            break;
          }
          if (m === a) {
            f = !0, a = i, l = u;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = u.child; m; ) {
            if (m === l) {
              f = !0, l = u, a = i;
              break;
            }
            if (m === a) {
              f = !0, a = u, l = i;
              break;
            }
            m = m.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
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
  var w = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), X = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), J = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), ye = /* @__PURE__ */ Symbol.for("react.suspense"), ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Ue = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ge = Symbol.iterator;
  function qe(e) {
    return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Qe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Qe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case Q:
        return "Profiler";
      case X:
        return "StrictMode";
      case ye:
        return "Suspense";
      case ie:
        return "SuspenseList";
      case se:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case j:
          return "Portal";
        case W:
          return e.displayName || "Context";
        case J:
          return (e._context.displayName || "Context") + ".Consumer";
        case te:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : Je(e.type) || "Memo";
        case le:
          t = e._payload, e = e._init;
          try {
            return Je(e(t));
          } catch {
          }
      }
    return null;
  }
  var Y = Array.isArray, G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Te = [], xe = -1;
  function S(e) {
    return { current: e };
  }
  function H(e) {
    0 > xe || (e.current = Te[xe], Te[xe] = null, xe--);
  }
  function k(e, t) {
    xe++, Te[xe] = e.current, e.current = t;
  }
  var Z = S(null), ae = S(null), K = S(null), ce = S(null);
  function He(e, t) {
    switch (k(K, t), k(ae, e), k(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? G0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = G0(t), e = Y0(t, e);
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
    H(Z), k(Z, e);
  }
  function Ge() {
    H(Z), H(ae), H(K);
  }
  function ea(e) {
    e.memoizedState !== null && k(ce, e);
    var t = Z.current, l = Y0(t, e.type);
    t !== l && (k(ae, e), k(Z, l));
  }
  function xa(e) {
    ae.current === e && (H(Z), H(ae)), ce.current === e && (H(ce), ci._currentValue = fe);
  }
  var bn, Ee;
  function ot(e) {
    if (bn === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        bn = t && t[1] || "", Ee = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + bn + e + Ee;
  }
  var tt = !1;
  function Nl(e, t) {
    if (!e || tt) return "";
    tt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var B = function() {
                throw Error();
              };
              if (Object.defineProperty(B.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(B, []);
                } catch (M) {
                  var O = M;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (M) {
                  O = M;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                O = M;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (M) {
            if (M && O && typeof M.stack == "string")
              return [M.stack, O.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], m = u[1];
      if (f && m) {
        var E = f.split(`
`), _ = m.split(`
`);
        for (i = a = 0; a < E.length && !E[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < _.length && !_[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === E.length || i === _.length)
          for (a = E.length - 1, i = _.length - 1; 1 <= a && 0 <= i && E[a] !== _[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (E[a] !== _[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || E[a] !== _[i]) {
                  var z = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      tt = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? ot(l) : "";
  }
  function ta(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ot(e.type);
      case 16:
        return ot("Lazy");
      case 13:
        return e.child !== t && t !== null ? ot("Suspense Fallback") : ot("Suspense");
      case 19:
        return ot("SuspenseList");
      case 0:
      case 15:
        return Nl(e.type, !1);
      case 11:
        return Nl(e.type.render, !1);
      case 1:
        return Nl(e.type, !0);
      case 31:
        return ot("Activity");
      default:
        return "";
    }
  }
  function Ui(e) {
    try {
      var t = "", l = null;
      do
        t += ta(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var gr = Object.prototype.hasOwnProperty, pr = r.unstable_scheduleCallback, vr = r.unstable_cancelCallback, Im = r.unstable_shouldYield, Pm = r.unstable_requestPaint, Tt = r.unstable_now, e1 = r.unstable_getCurrentPriorityLevel, po = r.unstable_ImmediatePriority, vo = r.unstable_UserBlockingPriority, Mi = r.unstable_NormalPriority, t1 = r.unstable_LowPriority, Eo = r.unstable_IdlePriority, l1 = r.log, a1 = r.unstable_setDisableYieldValue, Sn = null, At = null;
  function _l(e) {
    if (typeof l1 == "function" && a1(e), At && typeof At.setStrictMode == "function")
      try {
        At.setStrictMode(Sn, e);
      } catch {
      }
  }
  var xt = Math.clz32 ? Math.clz32 : u1, n1 = Math.log, i1 = Math.LN2;
  function u1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (n1(e) / i1 | 0) | 0;
  }
  var zi = 256, ji = 262144, Li = 4194304;
  function la(e) {
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
  function Hi(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? i = la(a) : (f &= m, f !== 0 ? i = la(f) : l || (l = m & ~e, l !== 0 && (i = la(l))))) : (m = a & ~u, m !== 0 ? i = la(m) : f !== 0 ? i = la(f) : l || (l = a & ~e, l !== 0 && (i = la(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : i;
  }
  function Rn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function r1(e, t) {
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
  function bo() {
    var e = Li;
    return Li <<= 1, (Li & 62914560) === 0 && (Li = 4194304), e;
  }
  function Er(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Tn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function s1(e, t, l, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var z = 31 - xt(l), B = 1 << z;
      m[z] = 0, E[z] = -1;
      var O = _[z];
      if (O !== null)
        for (_[z] = null, z = 0; z < O.length; z++) {
          var M = O[z];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && So(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function So(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - xt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Ro(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - xt(l), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), l &= ~i;
    }
  }
  function To(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : br(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function br(e) {
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
  function Sr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ao() {
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : oh(e.type));
  }
  function xo(e, t) {
    var l = V.p;
    try {
      return V.p = e, t();
    } finally {
      V.p = l;
    }
  }
  var Ol = Math.random().toString(36).slice(2), it = "__reactFiber$" + Ol, mt = "__reactProps$" + Ol, Ca = "__reactContainer$" + Ol, Rr = "__reactEvents$" + Ol, c1 = "__reactListeners$" + Ol, o1 = "__reactHandles$" + Ol, Co = "__reactResources$" + Ol, An = "__reactMarker$" + Ol;
  function Tr(e) {
    delete e[it], delete e[mt], delete e[Rr], delete e[c1], delete e[o1];
  }
  function Na(e) {
    var t = e[it];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Ca] || l[it]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = J0(e); e !== null; ) {
            if (l = e[it]) return l;
            e = J0(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function _a(e) {
    if (e = e[it] || e[Ca]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function xn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Oa(e) {
    var t = e[Co];
    return t || (t = e[Co] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function lt(e) {
    e[An] = !0;
  }
  var No = /* @__PURE__ */ new Set(), _o = {};
  function aa(e, t) {
    wa(e, t), wa(e + "Capture", t);
  }
  function wa(e, t) {
    for (_o[e] = t, e = 0; e < t.length; e++)
      No.add(t[e]);
  }
  var f1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oo = {}, wo = {};
  function d1(e) {
    return gr.call(wo, e) ? !0 : gr.call(Oo, e) ? !1 : f1.test(e) ? wo[e] = !0 : (Oo[e] = !0, !1);
  }
  function Bi(e, t, l) {
    if (d1(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function qi(e, t, l) {
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
  function il(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function Mt(e) {
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
  function Do(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function h1(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var i = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(f) {
          l = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
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
  function Ar(e) {
    if (!e._valueTracker) {
      var t = Do(e) ? "checked" : "value";
      e._valueTracker = h1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Uo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Do(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Gi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var m1 = /[\n"\\]/g;
  function zt(e) {
    return e.replace(
      m1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xr(e, t, l, a, i, u, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Mt(t)) : e.value !== "" + Mt(t) && (e.value = "" + Mt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Cr(e, f, Mt(t)) : l != null ? Cr(e, f, Mt(l)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Mt(m) : e.removeAttribute("name");
  }
  function Mo(e, t, l, a, i, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Ar(e);
        return;
      }
      l = l != null ? "" + Mt(l) : "", t = t != null ? "" + Mt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = m ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Ar(e);
  }
  function Cr(e, t, l) {
    t === "number" && Gi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Da(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < l.length; i++)
        t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Mt(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zo(e, t, l) {
    if (t != null && (t = "" + Mt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Mt(l) : "";
  }
  function jo(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (Y(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Mt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Ar(e);
  }
  function Ua(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var y1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lo(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || y1.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Ho(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && l[i] !== a && Lo(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Lo(e, u, t[u]);
  }
  function Nr(e) {
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
  var g1 = /* @__PURE__ */ new Map([
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
  ]), p1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Yi(e) {
    return p1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function ul() {
  }
  var _r = null;
  function Or(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ma = null, za = null;
  function Bo(e) {
    var t = _a(e);
    if (t && (e = t.stateNode)) {
      var l = e[mt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (xr(
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
              'input[name="' + zt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var i = a[mt] || null;
                if (!i) throw Error(o(90));
                xr(
                  a,
                  i.value,
                  i.defaultValue,
                  i.defaultValue,
                  i.checked,
                  i.defaultChecked,
                  i.type,
                  i.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && Uo(a);
          }
          break e;
        case "textarea":
          zo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Da(e, !!l.multiple, t, !1);
      }
    }
  }
  var wr = !1;
  function qo(e, t, l) {
    if (wr) return e(t, l);
    wr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (wr = !1, (Ma !== null || za !== null) && (_u(), Ma && (t = Ma, e = za, za = Ma = null, Bo(t), e)))
        for (t = 0; t < e.length; t++) Bo(e[t]);
    }
  }
  function Cn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[mt] || null;
    if (a === null) return null;
    l = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
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
  var rl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Dr = !1;
  if (rl)
    try {
      var Nn = {};
      Object.defineProperty(Nn, "passive", {
        get: function() {
          Dr = !0;
        }
      }), window.addEventListener("test", Nn, Nn), window.removeEventListener("test", Nn, Nn);
    } catch {
      Dr = !1;
    }
  var wl = null, Ur = null, Xi = null;
  function Go() {
    if (Xi) return Xi;
    var e, t = Ur, l = t.length, a, i = "value" in wl ? wl.value : wl.textContent, u = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === i[u - a]; a++) ;
    return Xi = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Vi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ki() {
    return !0;
  }
  function Yo() {
    return !1;
  }
  function yt(e) {
    function t(l, a, i, u, f) {
      this._reactName = l, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ki : Yo, this.isPropagationStopped = Yo, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ki);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ki);
      },
      persist: function() {
      },
      isPersistent: Ki
    }), t;
  }
  var na = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Qi = yt(na), _n = w({}, na, { view: 0, detail: 0 }), v1 = yt(_n), Mr, zr, On, ki = w({}, _n, {
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
    getModifierState: Lr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== On && (On && e.type === "mousemove" ? (Mr = e.screenX - On.screenX, zr = e.screenY - On.screenY) : zr = Mr = 0, On = e), Mr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : zr;
    }
  }), Xo = yt(ki), E1 = w({}, ki, { dataTransfer: 0 }), b1 = yt(E1), S1 = w({}, _n, { relatedTarget: 0 }), jr = yt(S1), R1 = w({}, na, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), T1 = yt(R1), A1 = w({}, na, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), x1 = yt(A1), C1 = w({}, na, { data: 0 }), Vo = yt(C1), N1 = {
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
  }, _1 = {
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
  }, O1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function w1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = O1[e]) ? !!t[e] : !1;
  }
  function Lr() {
    return w1;
  }
  var D1 = w({}, _n, {
    key: function(e) {
      if (e.key) {
        var t = N1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lr,
    charCode: function(e) {
      return e.type === "keypress" ? Vi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), U1 = yt(D1), M1 = w({}, ki, {
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
  }), Ko = yt(M1), z1 = w({}, _n, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lr
  }), j1 = yt(z1), L1 = w({}, na, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), H1 = yt(L1), B1 = w({}, ki, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), q1 = yt(B1), G1 = w({}, na, {
    newState: 0,
    oldState: 0
  }), Y1 = yt(G1), X1 = [9, 13, 27, 32], Hr = rl && "CompositionEvent" in window, wn = null;
  rl && "documentMode" in document && (wn = document.documentMode);
  var V1 = rl && "TextEvent" in window && !wn, Qo = rl && (!Hr || wn && 8 < wn && 11 >= wn), ko = " ", Zo = !1;
  function Jo(e, t) {
    switch (e) {
      case "keyup":
        return X1.indexOf(t.keyCode) !== -1;
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
  function $o(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ja = !1;
  function K1(e, t) {
    switch (e) {
      case "compositionend":
        return $o(t);
      case "keypress":
        return t.which !== 32 ? null : (Zo = !0, ko);
      case "textInput":
        return e = t.data, e === ko && Zo ? null : e;
      default:
        return null;
    }
  }
  function Q1(e, t) {
    if (ja)
      return e === "compositionend" || !Hr && Jo(e, t) ? (e = Go(), Xi = Ur = wl = null, ja = !1, e) : null;
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
        return Qo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var k1 = {
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
  function Fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!k1[e.type] : t === "textarea";
  }
  function Wo(e, t, l, a) {
    Ma ? za ? za.push(a) : za = [a] : Ma = a, t = ju(t, "onChange"), 0 < t.length && (l = new Qi(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Dn = null, Un = null;
  function Z1(e) {
    z0(e, 0);
  }
  function Zi(e) {
    var t = xn(e);
    if (Uo(t)) return e;
  }
  function Io(e, t) {
    if (e === "change") return t;
  }
  var Po = !1;
  if (rl) {
    var Br;
    if (rl) {
      var qr = "oninput" in document;
      if (!qr) {
        var ef = document.createElement("div");
        ef.setAttribute("oninput", "return;"), qr = typeof ef.oninput == "function";
      }
      Br = qr;
    } else Br = !1;
    Po = Br && (!document.documentMode || 9 < document.documentMode);
  }
  function tf() {
    Dn && (Dn.detachEvent("onpropertychange", lf), Un = Dn = null);
  }
  function lf(e) {
    if (e.propertyName === "value" && Zi(Un)) {
      var t = [];
      Wo(
        t,
        Un,
        e,
        Or(e)
      ), qo(Z1, t);
    }
  }
  function J1(e, t, l) {
    e === "focusin" ? (tf(), Dn = t, Un = l, Dn.attachEvent("onpropertychange", lf)) : e === "focusout" && tf();
  }
  function $1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Zi(Un);
  }
  function F1(e, t) {
    if (e === "click") return Zi(t);
  }
  function W1(e, t) {
    if (e === "input" || e === "change")
      return Zi(t);
  }
  function I1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ct = typeof Object.is == "function" ? Object.is : I1;
  function Mn(e, t) {
    if (Ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var i = l[a];
      if (!gr.call(t, i) || !Ct(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function af(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function nf(e, t) {
    var l = af(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (a = e + l.textContent.length, e <= t && a >= t)
          return { node: l, offset: t - e };
        e = a;
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
      l = af(l);
    }
  }
  function uf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function rf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Gi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Gi(e.document);
    }
    return t;
  }
  function Gr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var P1 = rl && "documentMode" in document && 11 >= document.documentMode, La = null, Yr = null, zn = null, Xr = !1;
  function sf(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xr || La == null || La !== Gi(a) || (a = La, "selectionStart" in a && Gr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), zn && Mn(zn, a) || (zn = a, a = ju(Yr, "onSelect"), 0 < a.length && (t = new Qi(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = La)));
  }
  function ia(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Ha = {
    animationend: ia("Animation", "AnimationEnd"),
    animationiteration: ia("Animation", "AnimationIteration"),
    animationstart: ia("Animation", "AnimationStart"),
    transitionrun: ia("Transition", "TransitionRun"),
    transitionstart: ia("Transition", "TransitionStart"),
    transitioncancel: ia("Transition", "TransitionCancel"),
    transitionend: ia("Transition", "TransitionEnd")
  }, Vr = {}, cf = {};
  rl && (cf = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
  function ua(e) {
    if (Vr[e]) return Vr[e];
    if (!Ha[e]) return e;
    var t = Ha[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in cf)
        return Vr[e] = t[l];
    return e;
  }
  var of = ua("animationend"), ff = ua("animationiteration"), df = ua("animationstart"), ey = ua("transitionrun"), ty = ua("transitionstart"), ly = ua("transitioncancel"), hf = ua("transitionend"), mf = /* @__PURE__ */ new Map(), Kr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Kr.push("scrollEnd");
  function kt(e, t) {
    mf.set(e, t), aa(t, [e]);
  }
  var Ji = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, jt = [], Ba = 0, Qr = 0;
  function $i() {
    for (var e = Ba, t = Qr = Ba = 0; t < e; ) {
      var l = jt[t];
      jt[t++] = null;
      var a = jt[t];
      jt[t++] = null;
      var i = jt[t];
      jt[t++] = null;
      var u = jt[t];
      if (jt[t++] = null, a !== null && i !== null) {
        var f = a.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
      }
      u !== 0 && yf(l, i, u);
    }
  }
  function Fi(e, t, l, a) {
    jt[Ba++] = e, jt[Ba++] = t, jt[Ba++] = l, jt[Ba++] = a, Qr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function kr(e, t, l, a) {
    return Fi(e, t, l, a), Wi(e);
  }
  function ra(e, t) {
    return Fi(e, null, null, t), Wi(e);
  }
  function yf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - xt(l), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Wi(e) {
    if (50 < li)
      throw li = 0, tc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var qa = {};
  function ay(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nt(e, t, l, a) {
    return new ay(e, t, l, a);
  }
  function Zr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sl(e, t) {
    var l = e.alternate;
    return l === null ? (l = Nt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function gf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ii(e, t, l, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") Zr(e) && (f = 1);
    else if (typeof e == "string")
      f = sg(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case se:
          return e = Nt(31, l, t, i), e.elementType = se, e.lanes = u, e;
        case D:
          return sa(l.children, i, u, t);
        case X:
          f = 8, i |= 24;
          break;
        case Q:
          return e = Nt(12, l, t, i | 2), e.elementType = Q, e.lanes = u, e;
        case ye:
          return e = Nt(13, l, t, i), e.elementType = ye, e.lanes = u, e;
        case ie:
          return e = Nt(19, l, t, i), e.elementType = ie, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case W:
                f = 10;
                break e;
              case J:
                f = 9;
                break e;
              case te:
                f = 11;
                break e;
              case P:
                f = 14;
                break e;
              case le:
                f = 16, a = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Nt(f, l, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function sa(e, t, l, a) {
    return e = Nt(7, e, a, t), e.lanes = l, e;
  }
  function Jr(e, t, l) {
    return e = Nt(6, e, null, t), e.lanes = l, e;
  }
  function pf(e) {
    var t = Nt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function $r(e, t, l) {
    return t = Nt(
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
  var vf = /* @__PURE__ */ new WeakMap();
  function Lt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = vf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Ui(t)
      }, vf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ui(t)
    };
  }
  var Ga = [], Ya = 0, Pi = null, jn = 0, Ht = [], Bt = 0, Dl = null, el = 1, tl = "";
  function cl(e, t) {
    Ga[Ya++] = jn, Ga[Ya++] = Pi, Pi = e, jn = t;
  }
  function Ef(e, t, l) {
    Ht[Bt++] = el, Ht[Bt++] = tl, Ht[Bt++] = Dl, Dl = e;
    var a = el;
    e = tl;
    var i = 32 - xt(a) - 1;
    a &= ~(1 << i), l += 1;
    var u = 32 - xt(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, el = 1 << 32 - xt(t) + i | l << i | a, tl = u + e;
    } else
      el = 1 << u | l << i | a, tl = e;
  }
  function Fr(e) {
    e.return !== null && (cl(e, 1), Ef(e, 1, 0));
  }
  function Wr(e) {
    for (; e === Pi; )
      Pi = Ga[--Ya], Ga[Ya] = null, jn = Ga[--Ya], Ga[Ya] = null;
    for (; e === Dl; )
      Dl = Ht[--Bt], Ht[Bt] = null, tl = Ht[--Bt], Ht[Bt] = null, el = Ht[--Bt], Ht[Bt] = null;
  }
  function bf(e, t) {
    Ht[Bt++] = el, Ht[Bt++] = tl, Ht[Bt++] = Dl, el = t.id, tl = t.overflow, Dl = e;
  }
  var ut = null, je = null, be = !1, Ul = null, qt = !1, Ir = Error(o(519));
  function Ml(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ln(Lt(t, e)), Ir;
  }
  function Sf(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[it] = e, t[mt] = a, l) {
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
        for (l = 0; l < ni.length; l++)
          he(ni[l], t);
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
        he("invalid", t), Mo(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        he("invalid", t);
        break;
      case "textarea":
        he("invalid", t), jo(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || B0(t.textContent, l) ? (a.popover != null && (he("beforetoggle", t), he("toggle", t)), a.onScroll != null && he("scroll", t), a.onScrollEnd != null && he("scrollend", t), a.onClick != null && (t.onclick = ul), t = !0) : t = !1, t || Ml(e, !0);
  }
  function Rf(e) {
    for (ut = e.return; ut; )
      switch (ut.tag) {
        case 5:
        case 31:
        case 13:
          qt = !1;
          return;
        case 27:
        case 3:
          qt = !0;
          return;
        default:
          ut = ut.return;
      }
  }
  function Xa(e) {
    if (e !== ut) return !1;
    if (!be) return Rf(e), be = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || gc(e.type, e.memoizedProps)), l = !l), l && je && Ml(e), Rf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      je = Z0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      je = Z0(e);
    } else
      t === 27 ? (t = je, Zl(e.type) ? (e = Sc, Sc = null, je = e) : je = t) : je = ut ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ca() {
    je = ut = null, be = !1;
  }
  function Pr() {
    var e = Ul;
    return e !== null && (Et === null ? Et = e : Et.push.apply(
      Et,
      e
    ), Ul = null), e;
  }
  function Ln(e) {
    Ul === null ? Ul = [e] : Ul.push(e);
  }
  var es = S(null), oa = null, ol = null;
  function zl(e, t, l) {
    k(es, t._currentValue), t._currentValue = l;
  }
  function fl(e) {
    e._currentValue = es.current, H(es);
  }
  function ts(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function ls(e, t, l, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var f = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var m = u;
          u = i;
          for (var E = 0; E < t.length; E++)
            if (m.context === t[E]) {
              u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), ts(
                u.return,
                l,
                e
              ), a || (f = null);
              break e;
            }
          u = m.next;
        }
      } else if (i.tag === 18) {
        if (f = i.return, f === null) throw Error(o(341));
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), ts(f, l, e), f = null;
      } else f = i.child;
      if (f !== null) f.return = i;
      else
        for (f = i; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (i = f.sibling, i !== null) {
            i.return = f.return, f = i;
            break;
          }
          f = f.return;
        }
      i = f;
    }
  }
  function Va(e, t, l, a) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var m = i.type;
          Ct(i.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (i === ce.current) {
        if (f = i.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(ci) : e = [ci]);
      }
      i = i.return;
    }
    e !== null && ls(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function eu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ct(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function fa(e) {
    oa = e, ol = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function rt(e) {
    return Tf(oa, e);
  }
  function tu(e, t) {
    return oa === null && fa(e), Tf(e, t);
  }
  function Tf(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, ol === null) {
      if (e === null) throw Error(o(308));
      ol = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ol = ol.next = t;
    return l;
  }
  var ny = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(l, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(l) {
        return l();
      });
    };
  }, iy = r.unstable_scheduleCallback, uy = r.unstable_NormalPriority, $e = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function as() {
    return {
      controller: new ny(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Hn(e) {
    e.refCount--, e.refCount === 0 && iy(uy, function() {
      e.controller.abort();
    });
  }
  var Bn = null, ns = 0, Ka = 0, Qa = null;
  function ry(e, t) {
    if (Bn === null) {
      var l = Bn = [];
      ns = 0, Ka = rc(), Qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return ns++, t.then(Af, Af), t;
  }
  function Af() {
    if (--ns === 0 && Bn !== null) {
      Qa !== null && (Qa.status = "fulfilled");
      var e = Bn;
      Bn = null, Ka = 0, Qa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function sy(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        l.push(i);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var i = 0; i < l.length; i++) (0, l[i])(t);
      },
      function(i) {
        for (a.status = "rejected", a.reason = i, i = 0; i < l.length; i++)
          (0, l[i])(void 0);
      }
    ), a;
  }
  var xf = G.S;
  G.S = function(e, t) {
    s0 = Tt(), typeof t == "object" && t !== null && typeof t.then == "function" && ry(e, t), xf !== null && xf(e, t);
  };
  var da = S(null);
  function is() {
    var e = da.current;
    return e !== null ? e : Me.pooledCache;
  }
  function lu(e, t) {
    t === null ? k(da, da.current) : k(da, t.pool);
  }
  function Cf() {
    var e = is();
    return e === null ? null : { parent: $e._currentValue, pool: e };
  }
  var ka = Error(o(460)), us = Error(o(474)), au = Error(o(542)), nu = { then: function() {
  } };
  function Nf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(ul, ul), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wf(e), e;
      default:
        if (typeof t.status == "string") t.then(ul, ul);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, wf(e), e;
        }
        throw ma = t, ka;
    }
  }
  function ha(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ma = l, ka) : l;
    }
  }
  var ma = null;
  function Of() {
    if (ma === null) throw Error(o(459));
    var e = ma;
    return ma = null, e;
  }
  function wf(e) {
    if (e === ka || e === au)
      throw Error(o(483));
  }
  var Za = null, qn = 0;
  function iu(e) {
    var t = qn;
    return qn += 1, Za === null && (Za = []), _f(Za, e, t);
  }
  function Gn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function uu(e, t) {
    throw t.$$typeof === q ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Df(e) {
    function t(x, R) {
      if (e) {
        var N = x.deletions;
        N === null ? (x.deletions = [R], x.flags |= 16) : N.push(R);
      }
    }
    function l(x, R) {
      if (!e) return null;
      for (; R !== null; )
        t(x, R), R = R.sibling;
      return null;
    }
    function a(x) {
      for (var R = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? R.set(x.key, x) : R.set(x.index, x), x = x.sibling;
      return R;
    }
    function i(x, R) {
      return x = sl(x, R), x.index = 0, x.sibling = null, x;
    }
    function u(x, R, N) {
      return x.index = N, e ? (N = x.alternate, N !== null ? (N = N.index, N < R ? (x.flags |= 67108866, R) : N) : (x.flags |= 67108866, R)) : (x.flags |= 1048576, R);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function m(x, R, N, L) {
      return R === null || R.tag !== 6 ? (R = Jr(N, x.mode, L), R.return = x, R) : (R = i(R, N), R.return = x, R);
    }
    function E(x, R, N, L) {
      var I = N.type;
      return I === D ? z(
        x,
        R,
        N.props.children,
        L,
        N.key
      ) : R !== null && (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === le && ha(I) === R.type) ? (R = i(R, N.props), Gn(R, N), R.return = x, R) : (R = Ii(
        N.type,
        N.key,
        N.props,
        null,
        x.mode,
        L
      ), Gn(R, N), R.return = x, R);
    }
    function _(x, R, N, L) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== N.containerInfo || R.stateNode.implementation !== N.implementation ? (R = $r(N, x.mode, L), R.return = x, R) : (R = i(R, N.children || []), R.return = x, R);
    }
    function z(x, R, N, L, I) {
      return R === null || R.tag !== 7 ? (R = sa(
        N,
        x.mode,
        L,
        I
      ), R.return = x, R) : (R = i(R, N), R.return = x, R);
    }
    function B(x, R, N) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = Jr(
          "" + R,
          x.mode,
          N
        ), R.return = x, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case C:
            return N = Ii(
              R.type,
              R.key,
              R.props,
              null,
              x.mode,
              N
            ), Gn(N, R), N.return = x, N;
          case j:
            return R = $r(
              R,
              x.mode,
              N
            ), R.return = x, R;
          case le:
            return R = ha(R), B(x, R, N);
        }
        if (Y(R) || qe(R))
          return R = sa(
            R,
            x.mode,
            N,
            null
          ), R.return = x, R;
        if (typeof R.then == "function")
          return B(x, iu(R), N);
        if (R.$$typeof === W)
          return B(
            x,
            tu(x, R),
            N
          );
        uu(x, R);
      }
      return null;
    }
    function O(x, R, N, L) {
      var I = R !== null ? R.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return I !== null ? null : m(x, R, "" + N, L);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case C:
            return N.key === I ? E(x, R, N, L) : null;
          case j:
            return N.key === I ? _(x, R, N, L) : null;
          case le:
            return N = ha(N), O(x, R, N, L);
        }
        if (Y(N) || qe(N))
          return I !== null ? null : z(x, R, N, L, null);
        if (typeof N.then == "function")
          return O(
            x,
            R,
            iu(N),
            L
          );
        if (N.$$typeof === W)
          return O(
            x,
            R,
            tu(x, N),
            L
          );
        uu(x, N);
      }
      return null;
    }
    function M(x, R, N, L, I) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return x = x.get(N) || null, m(R, x, "" + L, I);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case C:
            return x = x.get(
              L.key === null ? N : L.key
            ) || null, E(R, x, L, I);
          case j:
            return x = x.get(
              L.key === null ? N : L.key
            ) || null, _(R, x, L, I);
          case le:
            return L = ha(L), M(
              x,
              R,
              N,
              L,
              I
            );
        }
        if (Y(L) || qe(L))
          return x = x.get(N) || null, z(R, x, L, I, null);
        if (typeof L.then == "function")
          return M(
            x,
            R,
            N,
            iu(L),
            I
          );
        if (L.$$typeof === W)
          return M(
            x,
            R,
            N,
            tu(R, L),
            I
          );
        uu(R, L);
      }
      return null;
    }
    function $(x, R, N, L) {
      for (var I = null, Se = null, F = R, oe = R = 0, ve = null; F !== null && oe < N.length; oe++) {
        F.index > oe ? (ve = F, F = null) : ve = F.sibling;
        var Re = O(
          x,
          F,
          N[oe],
          L
        );
        if (Re === null) {
          F === null && (F = ve);
          break;
        }
        e && F && Re.alternate === null && t(x, F), R = u(Re, R, oe), Se === null ? I = Re : Se.sibling = Re, Se = Re, F = ve;
      }
      if (oe === N.length)
        return l(x, F), be && cl(x, oe), I;
      if (F === null) {
        for (; oe < N.length; oe++)
          F = B(x, N[oe], L), F !== null && (R = u(
            F,
            R,
            oe
          ), Se === null ? I = F : Se.sibling = F, Se = F);
        return be && cl(x, oe), I;
      }
      for (F = a(F); oe < N.length; oe++)
        ve = M(
          F,
          x,
          oe,
          N[oe],
          L
        ), ve !== null && (e && ve.alternate !== null && F.delete(
          ve.key === null ? oe : ve.key
        ), R = u(
          ve,
          R,
          oe
        ), Se === null ? I = ve : Se.sibling = ve, Se = ve);
      return e && F.forEach(function(Il) {
        return t(x, Il);
      }), be && cl(x, oe), I;
    }
    function ee(x, R, N, L) {
      if (N == null) throw Error(o(151));
      for (var I = null, Se = null, F = R, oe = R = 0, ve = null, Re = N.next(); F !== null && !Re.done; oe++, Re = N.next()) {
        F.index > oe ? (ve = F, F = null) : ve = F.sibling;
        var Il = O(x, F, Re.value, L);
        if (Il === null) {
          F === null && (F = ve);
          break;
        }
        e && F && Il.alternate === null && t(x, F), R = u(Il, R, oe), Se === null ? I = Il : Se.sibling = Il, Se = Il, F = ve;
      }
      if (Re.done)
        return l(x, F), be && cl(x, oe), I;
      if (F === null) {
        for (; !Re.done; oe++, Re = N.next())
          Re = B(x, Re.value, L), Re !== null && (R = u(Re, R, oe), Se === null ? I = Re : Se.sibling = Re, Se = Re);
        return be && cl(x, oe), I;
      }
      for (F = a(F); !Re.done; oe++, Re = N.next())
        Re = M(F, x, oe, Re.value, L), Re !== null && (e && Re.alternate !== null && F.delete(Re.key === null ? oe : Re.key), R = u(Re, R, oe), Se === null ? I = Re : Se.sibling = Re, Se = Re);
      return e && F.forEach(function(Eg) {
        return t(x, Eg);
      }), be && cl(x, oe), I;
    }
    function De(x, R, N, L) {
      if (typeof N == "object" && N !== null && N.type === D && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case C:
            e: {
              for (var I = N.key; R !== null; ) {
                if (R.key === I) {
                  if (I = N.type, I === D) {
                    if (R.tag === 7) {
                      l(
                        x,
                        R.sibling
                      ), L = i(
                        R,
                        N.props.children
                      ), L.return = x, x = L;
                      break e;
                    }
                  } else if (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === le && ha(I) === R.type) {
                    l(
                      x,
                      R.sibling
                    ), L = i(R, N.props), Gn(L, N), L.return = x, x = L;
                    break e;
                  }
                  l(x, R);
                  break;
                } else t(x, R);
                R = R.sibling;
              }
              N.type === D ? (L = sa(
                N.props.children,
                x.mode,
                L,
                N.key
              ), L.return = x, x = L) : (L = Ii(
                N.type,
                N.key,
                N.props,
                null,
                x.mode,
                L
              ), Gn(L, N), L.return = x, x = L);
            }
            return f(x);
          case j:
            e: {
              for (I = N.key; R !== null; ) {
                if (R.key === I)
                  if (R.tag === 4 && R.stateNode.containerInfo === N.containerInfo && R.stateNode.implementation === N.implementation) {
                    l(
                      x,
                      R.sibling
                    ), L = i(R, N.children || []), L.return = x, x = L;
                    break e;
                  } else {
                    l(x, R);
                    break;
                  }
                else t(x, R);
                R = R.sibling;
              }
              L = $r(N, x.mode, L), L.return = x, x = L;
            }
            return f(x);
          case le:
            return N = ha(N), De(
              x,
              R,
              N,
              L
            );
        }
        if (Y(N))
          return $(
            x,
            R,
            N,
            L
          );
        if (qe(N)) {
          if (I = qe(N), typeof I != "function") throw Error(o(150));
          return N = I.call(N), ee(
            x,
            R,
            N,
            L
          );
        }
        if (typeof N.then == "function")
          return De(
            x,
            R,
            iu(N),
            L
          );
        if (N.$$typeof === W)
          return De(
            x,
            R,
            tu(x, N),
            L
          );
        uu(x, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, R !== null && R.tag === 6 ? (l(x, R.sibling), L = i(R, N), L.return = x, x = L) : (l(x, R), L = Jr(N, x.mode, L), L.return = x, x = L), f(x)) : l(x, R);
    }
    return function(x, R, N, L) {
      try {
        qn = 0;
        var I = De(
          x,
          R,
          N,
          L
        );
        return Za = null, I;
      } catch (F) {
        if (F === ka || F === au) throw F;
        var Se = Nt(29, F, null, x.mode);
        return Se.lanes = L, Se.return = x, Se;
      }
    };
  }
  var ya = Df(!0), Uf = Df(!1), jl = !1;
  function rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ss(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ll(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Hl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ae & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = Wi(e), yf(e, null, l), t;
    }
    return Fi(e, a, t, l), Wi(e);
  }
  function Yn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Ro(e, l);
    }
  }
  function cs(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var i = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? i = u = f : u = u.next = f, l = l.next;
        } while (l !== null);
        u === null ? i = u = t : u = u.next = t;
      } else i = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var os = !1;
  function Xn() {
    if (os) {
      var e = Qa;
      if (e !== null) throw e;
    }
  }
  function Vn(e, t, l, a) {
    os = !1;
    var i = e.updateQueue;
    jl = !1;
    var u = i.firstBaseUpdate, f = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var E = m, _ = E.next;
      E.next = null, f === null ? u = _ : f.next = _, f = E;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, m = z.lastBaseUpdate, m !== f && (m === null ? z.firstBaseUpdate = _ : m.next = _, z.lastBaseUpdate = E));
    }
    if (u !== null) {
      var B = i.baseState;
      f = 0, z = _ = E = null, m = u;
      do {
        var O = m.lane & -536870913, M = O !== m.lane;
        if (M ? (pe & O) === O : (a & O) === O) {
          O !== 0 && O === Ka && (os = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, ee = m;
            O = t;
            var De = l;
            switch (ee.tag) {
              case 1:
                if ($ = ee.payload, typeof $ == "function") {
                  B = $.call(De, B, O);
                  break e;
                }
                B = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ee.payload, O = typeof $ == "function" ? $.call(De, B, O) : $, O == null) break e;
                B = w({}, B, O);
                break e;
              case 2:
                jl = !0;
            }
          }
          O = m.callback, O !== null && (e.flags |= 64, M && (e.flags |= 8192), M = i.callbacks, M === null ? i.callbacks = [O] : M.push(O));
        } else
          M = {
            lane: O,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, z === null ? (_ = z = M, E = B) : z = z.next = M, f |= O;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null)
            break;
          M = m, m = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      z === null && (E = B), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = z, u === null && (i.shared.lanes = 0), Xl |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Mf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function zf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Mf(l[e], t);
  }
  var Ja = S(null), ru = S(0);
  function jf(e, t) {
    e = bl, k(ru, e), k(Ja, t), bl = e | t.baseLanes;
  }
  function fs() {
    k(ru, bl), k(Ja, Ja.current);
  }
  function ds() {
    bl = ru.current, H(Ja), H(ru);
  }
  var _t = S(null), Gt = null;
  function Bl(e) {
    var t = e.alternate;
    k(ke, ke.current & 1), k(_t, e), Gt === null && (t === null || Ja.current !== null || t.memoizedState !== null) && (Gt = e);
  }
  function hs(e) {
    k(ke, ke.current), k(_t, e), Gt === null && (Gt = e);
  }
  function Lf(e) {
    e.tag === 22 ? (k(ke, ke.current), k(_t, e), Gt === null && (Gt = e)) : ql();
  }
  function ql() {
    k(ke, ke.current), k(_t, _t.current);
  }
  function Ot(e) {
    H(_t), Gt === e && (Gt = null), H(ke);
  }
  var ke = S(0);
  function su(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ec(l) || bc(l)))
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
  var dl = 0, ue = null, Oe = null, Fe = null, cu = !1, $a = !1, ga = !1, ou = 0, Kn = 0, Fa = null, cy = 0;
  function Xe() {
    throw Error(o(321));
  }
  function ms(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Ct(e[l], t[l])) return !1;
    return !0;
  }
  function ys(e, t, l, a, i, u) {
    return dl = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e === null || e.memoizedState === null ? Ed : ws, ga = !1, u = l(a, i), ga = !1, $a && (u = Bf(
      t,
      l,
      a,
      i
    )), Hf(e), u;
  }
  function Hf(e) {
    G.H = Zn;
    var t = Oe !== null && Oe.next !== null;
    if (dl = 0, Fe = Oe = ue = null, cu = !1, Kn = 0, Fa = null, t) throw Error(o(300));
    e === null || We || (e = e.dependencies, e !== null && eu(e) && (We = !0));
  }
  function Bf(e, t, l, a) {
    ue = e;
    var i = 0;
    do {
      if ($a && (Fa = null), Kn = 0, $a = !1, 25 <= i) throw Error(o(301));
      if (i += 1, Fe = Oe = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      G.H = bd, u = t(l, a);
    } while ($a);
    return u;
  }
  function oy() {
    var e = G.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Qn(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function gs() {
    var e = ou !== 0;
    return ou = 0, e;
  }
  function ps(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function vs(e) {
    if (cu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      cu = !1;
    }
    dl = 0, Fe = Oe = ue = null, $a = !1, Kn = ou = 0, Fa = null;
  }
  function ht() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Fe === null ? ue.memoizedState = Fe = e : Fe = Fe.next = e, Fe;
  }
  function Ze() {
    if (Oe === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Fe === null ? ue.memoizedState : Fe.next;
    if (t !== null)
      Fe = t, Oe = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(o(467)) : Error(o(310));
      Oe = e, e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }, Fe === null ? ue.memoizedState = Fe = e : Fe = Fe.next = e;
    }
    return Fe;
  }
  function fu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Qn(e) {
    var t = Kn;
    return Kn += 1, Fa === null && (Fa = []), e = _f(Fa, e, t), t = ue, (Fe === null ? t.memoizedState : Fe.next) === null && (t = t.alternate, G.H = t === null || t.memoizedState === null ? Ed : ws), e;
  }
  function du(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Qn(e);
      if (e.$$typeof === W) return rt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Es(e) {
    var t = null, l = ue.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ue.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = fu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ue;
    return t.index++, l;
  }
  function hl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hu(e) {
    var t = Ze();
    return bs(t, Oe, e);
  }
  function bs(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var i = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (i !== null) {
        var f = i.next;
        i.next = u.next, u.next = f;
      }
      t.baseQueue = i = u, a.pending = null;
    }
    if (u = e.baseState, i === null) e.memoizedState = u;
    else {
      t = i.next;
      var m = f = null, E = null, _ = t, z = !1;
      do {
        var B = _.lane & -536870913;
        if (B !== _.lane ? (pe & B) === B : (dl & B) === B) {
          var O = _.revertLane;
          if (O === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), B === Ka && (z = !0);
          else if ((dl & O) === O) {
            _ = _.next, O === Ka && (z = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, E === null ? (m = E = B, f = u) : E = E.next = B, ue.lanes |= O, Xl |= O;
          B = _.action, ga && l(u, B), u = _.hasEagerState ? _.eagerState : l(u, B);
        } else
          O = {
            lane: B,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (m = E = O, f = u) : E = E.next = O, ue.lanes |= B, Xl |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = m, !Ct(u, e.memoizedState) && (We = !0, z && (l = Qa, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = E, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Ss(e) {
    var t = Ze(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, i = l.pending, u = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var f = i = i.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== i);
      Ct(u, t.memoizedState) || (We = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function qf(e, t, l) {
    var a = ue, i = Ze(), u = be;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !Ct(
      (Oe || i).memoizedState,
      l
    );
    if (f && (i.memoizedState = l, We = !0), i = i.queue, As(Xf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || Fe !== null && Fe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Wa(
        9,
        { destroy: void 0 },
        Yf.bind(
          null,
          a,
          i,
          l,
          t
        ),
        null
      ), Me === null) throw Error(o(349));
      u || (dl & 127) !== 0 || Gf(a, t, l);
    }
    return l;
  }
  function Gf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = fu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Yf(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Vf(t) && Kf(e);
  }
  function Xf(e, t, l) {
    return l(function() {
      Vf(t) && Kf(e);
    });
  }
  function Vf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Ct(e, l);
    } catch {
      return !0;
    }
  }
  function Kf(e) {
    var t = ra(e, 2);
    t !== null && bt(t, e, 2);
  }
  function Rs(e) {
    var t = ht();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ga) {
        _l(!0);
        try {
          l();
        } finally {
          _l(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hl,
      lastRenderedState: e
    }, t;
  }
  function Qf(e, t, l, a) {
    return e.baseState = l, bs(
      e,
      Oe,
      typeof a == "function" ? a : hl
    );
  }
  function fy(e, t, l, a, i) {
    if (gu(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      G.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, kf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function kf(e, t) {
    var l = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = G.T, f = {};
      G.T = f;
      try {
        var m = l(i, a), E = G.S;
        E !== null && E(f, m), Zf(e, t, m);
      } catch (_) {
        Ts(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), G.T = u;
      }
    } else
      try {
        u = l(i, a), Zf(e, t, u);
      } catch (_) {
        Ts(e, t, _);
      }
  }
  function Zf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Jf(e, t, a);
      },
      function(a) {
        return Ts(e, t, a);
      }
    ) : Jf(e, t, l);
  }
  function Jf(e, t, l) {
    t.status = "fulfilled", t.value = l, $f(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, kf(e, l)));
  }
  function Ts(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, $f(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function $f(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ff(e, t) {
    return t;
  }
  function Wf(e, t) {
    if (be) {
      var l = Me.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (be) {
            if (je) {
              t: {
                for (var i = je, u = qt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = Yt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                je = Yt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Ml(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = ht(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ff,
      lastRenderedState: t
    }, l.queue = a, l = gd.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = Rs(!1), u = Os.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = ht(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, l = fy.bind(
      null,
      ue,
      i,
      u,
      l
    ), i.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function If(e) {
    var t = Ze();
    return Pf(t, Oe, e);
  }
  function Pf(e, t, l) {
    if (t = bs(
      e,
      t,
      Ff
    )[0], e = hu(hl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Qn(t);
      } catch (f) {
        throw f === ka ? au : f;
      }
    else a = t;
    t = Ze();
    var i = t.queue, u = i.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Wa(
      9,
      { destroy: void 0 },
      dy.bind(null, i, l),
      null
    )), [a, u, e];
  }
  function dy(e, t) {
    e.action = t;
  }
  function ed(e) {
    var t = Ze(), l = Oe;
    if (l !== null)
      return Pf(t, l, e);
    Ze(), t = t.memoizedState, l = Ze();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Wa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = fu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function td() {
    return Ze().memoizedState;
  }
  function mu(e, t, l, a) {
    var i = ht();
    ue.flags |= e, i.memoizedState = Wa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function yu(e, t, l, a) {
    var i = Ze();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Oe !== null && a !== null && ms(a, Oe.memoizedState.deps) ? i.memoizedState = Wa(t, u, l, a) : (ue.flags |= e, i.memoizedState = Wa(
      1 | t,
      u,
      l,
      a
    ));
  }
  function ld(e, t) {
    mu(8390656, 8, e, t);
  }
  function As(e, t) {
    yu(2048, 8, e, t);
  }
  function hy(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = fu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function ad(e) {
    var t = Ze().memoizedState;
    return hy({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function nd(e, t) {
    return yu(4, 2, e, t);
  }
  function id(e, t) {
    return yu(4, 4, e, t);
  }
  function ud(e, t) {
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
  function rd(e, t, l) {
    l = l != null ? l.concat([e]) : null, yu(4, 4, ud.bind(null, t, e), l);
  }
  function xs() {
  }
  function sd(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && ms(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function cd(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && ms(t, a[1]))
      return a[0];
    if (a = e(), ga) {
      _l(!0);
      try {
        e();
      } finally {
        _l(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Cs(e, t, l) {
    return l === void 0 || (dl & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = o0(), ue.lanes |= e, Xl |= e, l);
  }
  function od(e, t, l, a) {
    return Ct(l, t) ? l : Ja.current !== null ? (e = Cs(e, l, a), Ct(e, t) || (We = !0), e) : (dl & 42) === 0 || (dl & 1073741824) !== 0 && (pe & 261930) === 0 ? (We = !0, e.memoizedState = l) : (e = o0(), ue.lanes |= e, Xl |= e, t);
  }
  function fd(e, t, l, a, i) {
    var u = V.p;
    V.p = u !== 0 && 8 > u ? u : 8;
    var f = G.T, m = {};
    G.T = m, Os(e, !1, t, l);
    try {
      var E = i(), _ = G.S;
      if (_ !== null && _(m, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var z = sy(
          E,
          a
        );
        kn(
          e,
          t,
          z,
          Ut(e)
        );
      } else
        kn(
          e,
          t,
          a,
          Ut(e)
        );
    } catch (B) {
      kn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Ut()
      );
    } finally {
      V.p = u, f !== null && m.types !== null && (f.types = m.types), G.T = f;
    }
  }
  function my() {
  }
  function Ns(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = dd(e).queue;
    fd(
      e,
      i,
      t,
      fe,
      l === null ? my : function() {
        return hd(e), l(a);
      }
    );
  }
  function dd(e) {
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
        lastRenderedReducer: hl,
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
        lastRenderedReducer: hl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function hd(e) {
    var t = dd(e);
    t.next === null && (t = e.alternate.memoizedState), kn(
      e,
      t.next.queue,
      {},
      Ut()
    );
  }
  function _s() {
    return rt(ci);
  }
  function md() {
    return Ze().memoizedState;
  }
  function yd() {
    return Ze().memoizedState;
  }
  function yy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ut();
          e = Ll(l);
          var a = Hl(t, e, l);
          a !== null && (bt(a, t, l), Yn(a, t, l)), t = { cache: as() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function gy(e, t, l) {
    var a = Ut();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gu(e) ? pd(t, l) : (l = kr(e, t, l, a), l !== null && (bt(l, e, a), vd(l, t, a)));
  }
  function gd(e, t, l) {
    var a = Ut();
    kn(e, t, l, a);
  }
  function kn(e, t, l, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (gu(e)) pd(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, m = u(f, l);
          if (i.hasEagerState = !0, i.eagerState = m, Ct(m, f))
            return Fi(e, t, i, 0), Me === null && $i(), !1;
        } catch {
        }
      if (l = kr(e, t, i, a), l !== null)
        return bt(l, e, a), vd(l, t, a), !0;
    }
    return !1;
  }
  function Os(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: rc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, gu(e)) {
      if (t) throw Error(o(479));
    } else
      t = kr(
        e,
        l,
        a,
        2
      ), t !== null && bt(t, e, 2);
  }
  function gu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function pd(e, t) {
    $a = cu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function vd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Ro(e, l);
    }
  }
  var Zn = {
    readContext: rt,
    use: du,
    useCallback: Xe,
    useContext: Xe,
    useEffect: Xe,
    useImperativeHandle: Xe,
    useLayoutEffect: Xe,
    useInsertionEffect: Xe,
    useMemo: Xe,
    useReducer: Xe,
    useRef: Xe,
    useState: Xe,
    useDebugValue: Xe,
    useDeferredValue: Xe,
    useTransition: Xe,
    useSyncExternalStore: Xe,
    useId: Xe,
    useHostTransitionStatus: Xe,
    useFormState: Xe,
    useActionState: Xe,
    useOptimistic: Xe,
    useMemoCache: Xe,
    useCacheRefresh: Xe
  };
  Zn.useEffectEvent = Xe;
  var Ed = {
    readContext: rt,
    use: du,
    useCallback: function(e, t) {
      return ht().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: rt,
    useEffect: ld,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, mu(
        4194308,
        4,
        ud.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return mu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      mu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ht();
      t = t === void 0 ? null : t;
      var a = e();
      if (ga) {
        _l(!0);
        try {
          e();
        } finally {
          _l(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = ht();
      if (l !== void 0) {
        var i = l(t);
        if (ga) {
          _l(!0);
          try {
            l(t);
          } finally {
            _l(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = gy.bind(
        null,
        ue,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = ht();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Rs(e);
      var t = e.queue, l = gd.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: xs,
    useDeferredValue: function(e, t) {
      var l = ht();
      return Cs(l, e, t);
    },
    useTransition: function() {
      var e = Rs(!1);
      return e = fd.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), ht().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ue, i = ht();
      if (be) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Me === null)
          throw Error(o(349));
        (pe & 127) !== 0 || Gf(a, t, l);
      }
      i.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return i.queue = u, ld(Xf.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Wa(
        9,
        { destroy: void 0 },
        Yf.bind(
          null,
          a,
          u,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = ht(), t = Me.identifierPrefix;
      if (be) {
        var l = tl, a = el;
        l = (a & ~(1 << 32 - xt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = ou++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = cy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: _s,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e) {
      var t = ht();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Os.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Es,
    useCacheRefresh: function() {
      return ht().memoizedState = yy.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = ht(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ae & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ws = {
    readContext: rt,
    use: du,
    useCallback: sd,
    useContext: rt,
    useEffect: As,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: hu,
    useRef: td,
    useState: function() {
      return hu(hl);
    },
    useDebugValue: xs,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return od(
        l,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = hu(hl)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Qn(e),
        t
      ];
    },
    useSyncExternalStore: qf,
    useId: md,
    useHostTransitionStatus: _s,
    useFormState: If,
    useActionState: If,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Qf(l, Oe, e, t);
    },
    useMemoCache: Es,
    useCacheRefresh: yd
  };
  ws.useEffectEvent = ad;
  var bd = {
    readContext: rt,
    use: du,
    useCallback: sd,
    useContext: rt,
    useEffect: As,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: Ss,
    useRef: td,
    useState: function() {
      return Ss(hl);
    },
    useDebugValue: xs,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return Oe === null ? Cs(l, e, t) : od(
        l,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ss(hl)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Qn(e),
        t
      ];
    },
    useSyncExternalStore: qf,
    useId: md,
    useHostTransitionStatus: _s,
    useFormState: ed,
    useActionState: ed,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Oe !== null ? Qf(l, Oe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Es,
    useCacheRefresh: yd
  };
  bd.useEffectEvent = ad;
  function Ds(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : w({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Us = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Ut(), i = Ll(a);
      i.payload = t, l != null && (i.callback = l), t = Hl(e, i, a), t !== null && (bt(t, e, a), Yn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Ut(), i = Ll(a);
      i.tag = 1, i.payload = t, l != null && (i.callback = l), t = Hl(e, i, a), t !== null && (bt(t, e, a), Yn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Ut(), a = Ll(l);
      a.tag = 2, t != null && (a.callback = t), t = Hl(e, a, l), t !== null && (bt(t, e, l), Yn(t, e, l));
    }
  };
  function Sd(e, t, l, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Mn(l, a) || !Mn(i, u) : !0;
  }
  function Rd(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Us.enqueueReplaceState(t, t.state, null);
  }
  function pa(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = w({}, l));
      for (var i in e)
        l[i] === void 0 && (l[i] = e[i]);
    }
    return l;
  }
  function Td(e) {
    Ji(e);
  }
  function Ad(e) {
    console.error(e);
  }
  function xd(e) {
    Ji(e);
  }
  function pu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Cd(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Ms(e, t, l) {
    return l = Ll(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      pu(e, t);
    }, l;
  }
  function Nd(e) {
    return e = Ll(e), e.tag = 3, e;
  }
  function _d(e, t, l, a) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Cd(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Cd(t, l, a), typeof i != "function" && (Vl === null ? Vl = /* @__PURE__ */ new Set([this]) : Vl.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function py(e, t, l, a, i) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Va(
        t,
        l,
        i,
        !0
      ), l = _t.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Gt === null ? Ou() : l.alternate === null && Ve === 0 && (Ve = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, a === nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), nc(e, a, i)), !1;
          case 22:
            return l.flags |= 65536, a === nu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), nc(e, a, i)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return nc(e, a, i), Ou(), !1;
    }
    if (be)
      return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== Ir && (e = Error(o(422), { cause: a }), Ln(Lt(e, l)))) : (a !== Ir && (t = Error(o(423), {
        cause: a
      }), Ln(
        Lt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Lt(a, l), i = Ms(
        e.stateNode,
        a,
        i
      ), cs(e, i), Ve !== 4 && (Ve = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Lt(u, l), ti === null ? ti = [u] : ti.push(u), Ve !== 4 && (Ve = 2), t === null) return !0;
    a = Lt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = i & -i, l.lanes |= e, e = Ms(l.stateNode, a, e), cs(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Vl === null || !Vl.has(u))))
            return l.flags |= 65536, i &= -i, l.lanes |= i, i = Nd(i), _d(
              i,
              e,
              l,
              a
            ), cs(l, i), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var zs = Error(o(461)), We = !1;
  function st(e, t, l, a) {
    t.child = e === null ? Uf(t, null, l, a) : ya(
      t,
      e.child,
      l,
      a
    );
  }
  function Od(e, t, l, a, i) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a)
        m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return fa(t), a = ys(
      e,
      t,
      l,
      f,
      u,
      i
    ), m = gs(), e !== null && !We ? (ps(e, t, i), ml(e, t, i)) : (be && m && Fr(t), t.flags |= 1, st(e, t, a, i), t.child);
  }
  function wd(e, t, l, a, i) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !Zr(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Dd(
        e,
        t,
        u,
        a,
        i
      )) : (e = Ii(
        l.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Xs(e, i)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Mn, l(f, a) && e.ref === t.ref)
        return ml(e, t, i);
    }
    return t.flags |= 1, e = sl(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Dd(e, t, l, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Mn(u, a) && e.ref === t.ref)
        if (We = !1, t.pendingProps = a = u, Xs(e, i))
          (e.flags & 131072) !== 0 && (We = !0);
        else
          return t.lanes = e.lanes, ml(e, t, i);
    }
    return js(
      e,
      t,
      l,
      a,
      i
    );
  }
  function Ud(e, t, l, a) {
    var i = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, i = 0; a !== null; )
            i = i | a.lanes | a.childLanes, a = a.sibling;
          a = i & ~u;
        } else a = 0, t.child = null;
        return Md(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && lu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? jf(t, u) : fs(), Lf(t);
      else
        return a = t.lanes = 536870912, Md(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (lu(t, u.cachePool), jf(t, u), ql(), t.memoizedState = null) : (e !== null && lu(t, null), fs(), ql());
    return st(e, t, i, l), t.child;
  }
  function Jn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Md(e, t, l, a, i) {
    var u = is();
    return u = u === null ? null : { parent: $e._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && lu(t, null), fs(), Lf(t), e !== null && Va(e, t, a, !0), t.childLanes = i, null;
  }
  function vu(e, t) {
    return t = bu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function zd(e, t, l) {
    return ya(t, e.child, null, l), e = vu(t, t.pendingProps), e.flags |= 2, Ot(t), t.memoizedState = null, e;
  }
  function vy(e, t, l) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (a.mode === "hidden")
          return e = vu(t, a), t.lanes = 536870912, Jn(null, e);
        if (hs(t), (e = je) ? (e = k0(
          e,
          qt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Dl !== null ? { id: el, overflow: tl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = pf(e), l.return = t, t.child = l, ut = t, je = null)) : e = null, e === null) throw Ml(t);
        return t.lanes = 536870912, null;
      }
      return vu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (hs(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = zd(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (We || Va(e, t, l, !1), i = (l & e.childLanes) !== 0, We || i) {
        if (a = Me, a !== null && (f = To(a, l), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ra(e, f), bt(a, e, f), zs;
        Ou(), t = zd(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, je = Yt(f.nextSibling), ut = t, be = !0, Ul = null, qt = !1, e !== null && bf(t, e), t = vu(t, a), t.flags |= 4096;
      return t;
    }
    return e = sl(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Eu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function js(e, t, l, a, i) {
    return fa(t), l = ys(
      e,
      t,
      l,
      a,
      void 0,
      i
    ), a = gs(), e !== null && !We ? (ps(e, t, i), ml(e, t, i)) : (be && a && Fr(t), t.flags |= 1, st(e, t, l, i), t.child);
  }
  function jd(e, t, l, a, i, u) {
    return fa(t), t.updateQueue = null, l = Bf(
      t,
      a,
      l,
      i
    ), Hf(e), a = gs(), e !== null && !We ? (ps(e, t, u), ml(e, t, u)) : (be && a && Fr(t), t.flags |= 1, st(e, t, l, u), t.child);
  }
  function Ld(e, t, l, a, i) {
    if (fa(t), t.stateNode === null) {
      var u = qa, f = l.contextType;
      typeof f == "object" && f !== null && (u = rt(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Us, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, rs(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? rt(f) : qa, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Ds(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Us.enqueueReplaceState(u, u.state, null), Vn(t, a, u, i), Xn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var m = t.memoizedProps, E = pa(l, m);
      u.props = E;
      var _ = u.context, z = l.contextType;
      f = qa, typeof z == "object" && z !== null && (f = rt(z));
      var B = l.getDerivedStateFromProps;
      z = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || _ !== f) && Rd(
        t,
        u,
        a,
        f
      ), jl = !1;
      var O = t.memoizedState;
      u.state = O, Vn(t, a, u, i), Xn(), _ = t.memoizedState, m || O !== _ || jl ? (typeof B == "function" && (Ds(
        t,
        l,
        B,
        a
      ), _ = t.memoizedState), (E = jl || Sd(
        t,
        l,
        E,
        a,
        O,
        _,
        f
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, ss(e, t), f = t.memoizedProps, z = pa(l, f), u.props = z, B = t.pendingProps, O = u.context, _ = l.contextType, E = qa, typeof _ == "object" && _ !== null && (E = rt(_)), m = l.getDerivedStateFromProps, (_ = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && Rd(
        t,
        u,
        a,
        E
      ), jl = !1, O = t.memoizedState, u.state = O, Vn(t, a, u, i), Xn();
      var M = t.memoizedState;
      f !== B || O !== M || jl || e !== null && e.dependencies !== null && eu(e.dependencies) ? (typeof m == "function" && (Ds(
        t,
        l,
        m,
        a
      ), M = t.memoizedState), (z = jl || Sd(
        t,
        l,
        z,
        a,
        O,
        M,
        E
      ) || e !== null && e.dependencies !== null && eu(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = E, a = z) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Eu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ya(
      t,
      e.child,
      null,
      i
    ), t.child = ya(
      t,
      null,
      l,
      i
    )) : st(e, t, l, i), t.memoizedState = u.state, e = t.child) : e = ml(
      e,
      t,
      i
    ), e;
  }
  function Hd(e, t, l, a) {
    return ca(), t.flags |= 256, st(e, t, l, a), t.child;
  }
  var Ls = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hs(e) {
    return { baseLanes: e, cachePool: Cf() };
  }
  function Bs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Dt), e;
  }
  function Bd(e, t, l) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (ke.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (i ? Bl(t) : ql(), (e = je) ? (e = k0(
          e,
          qt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Dl !== null ? { id: el, overflow: tl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = pf(e), l.return = t, t.child = l, ut = t, je = null)) : e = null, e === null) throw Ml(t);
        return bc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, i ? (ql(), i = t.mode, m = bu(
        { mode: "hidden", children: m },
        i
      ), a = sa(
        a,
        i,
        l,
        null
      ), m.return = t, a.return = t, m.sibling = a, t.child = m, a = t.child, a.memoizedState = Hs(l), a.childLanes = Bs(
        e,
        f,
        l
      ), t.memoizedState = Ls, Jn(null, a)) : (Bl(t), qs(t, m));
    }
    var E = e.memoizedState;
    if (E !== null && (m = E.dehydrated, m !== null)) {
      if (u)
        t.flags & 256 ? (Bl(t), t.flags &= -257, t = Gs(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (ql(), t.child = e.child, t.flags |= 128, t = null) : (ql(), m = a.fallback, i = t.mode, a = bu(
          { mode: "visible", children: a.children },
          i
        ), m = sa(
          m,
          i,
          l,
          null
        ), m.flags |= 2, a.return = t, m.return = t, a.sibling = m, t.child = a, ya(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Hs(l), a.childLanes = Bs(
          e,
          f,
          l
        ), t.memoizedState = Ls, t = Jn(null, a));
      else if (Bl(t), bc(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(o(419)), a.stack = "", a.digest = f, Ln({ value: a, source: null, stack: null }), t = Gs(
          e,
          t,
          l
        );
      } else if (We || Va(e, t, l, !1), f = (l & e.childLanes) !== 0, We || f) {
        if (f = Me, f !== null && (a = To(f, l), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, ra(e, a), bt(f, e, a), zs;
        Ec(m) || Ou(), t = Gs(
          e,
          t,
          l
        );
      } else
        Ec(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, je = Yt(
          m.nextSibling
        ), ut = t, be = !0, Ul = null, qt = !1, e !== null && bf(t, e), t = qs(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (ql(), m = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = sl(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? m = sl(
      _,
      m
    ) : (m = sa(
      m,
      i,
      l,
      null
    ), m.flags |= 2), m.return = t, a.return = t, a.sibling = m, t.child = a, Jn(null, a), a = t.child, m = e.child.memoizedState, m === null ? m = Hs(l) : (i = m.cachePool, i !== null ? (E = $e._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Cf(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: i
    }), a.memoizedState = m, a.childLanes = Bs(
      e,
      f,
      l
    ), t.memoizedState = Ls, Jn(e.child, a)) : (Bl(t), l = e.child, e = l.sibling, l = sl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function qs(e, t) {
    return t = bu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function bu(e, t) {
    return e = Nt(22, e, null, t), e.lanes = 0, e;
  }
  function Gs(e, t, l) {
    return ya(t, e.child, null, l), e = qs(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function qd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ts(e.return, t, l);
  }
  function Ys(e, t, l, a, i, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: i,
      treeForkCount: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = l, f.tailMode = i, f.treeForkCount = u);
  }
  function Gd(e, t, l) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = ke.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, k(ke, f), st(e, t, a, l), a = be ? jn : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && qd(e, l, t);
        else if (e.tag === 19)
          qd(e, l, t);
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
    switch (i) {
      case "forwards":
        for (l = t.child, i = null; l !== null; )
          e = l.alternate, e !== null && su(e) === null && (i = l), l = l.sibling;
        l = i, l === null ? (i = t.child, t.child = null) : (i = l.sibling, l.sibling = null), Ys(
          t,
          !1,
          i,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && su(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = l, l = i, i = e;
        }
        Ys(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Ys(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function ml(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Xl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Va(
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
      for (e = t.child, l = sl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = sl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Xs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && eu(e)));
  }
  function Ey(e, t, l) {
    switch (t.tag) {
      case 3:
        He(t, t.stateNode.containerInfo), zl(t, $e, e.memoizedState.cache), ca();
        break;
      case 27:
      case 5:
        ea(t);
        break;
      case 4:
        He(t, t.stateNode.containerInfo);
        break;
      case 10:
        zl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, hs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Bl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Bd(e, t, l) : (Bl(t), e = ml(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Bl(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Va(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), i) {
          if (a)
            return Gd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), k(ke, ke.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Ud(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        zl(t, $e, e.memoizedState.cache);
    }
    return ml(e, t, l);
  }
  function Yd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        We = !0;
      else {
        if (!Xs(e, l) && (t.flags & 128) === 0)
          return We = !1, Ey(
            e,
            t,
            l
          );
        We = (e.flags & 131072) !== 0;
      }
    else
      We = !1, be && (t.flags & 1048576) !== 0 && Ef(t, jn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ha(t.elementType), t.type = e, typeof e == "function")
            Zr(e) ? (a = pa(e, a), t.tag = 1, t = Ld(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = js(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === te) {
                t.tag = 11, t = Od(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (i === P) {
                t.tag = 14, t = wd(
                  null,
                  t,
                  e,
                  a,
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
        return js(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, i = pa(
          a,
          t.pendingProps
        ), Ld(
          e,
          t,
          a,
          i,
          l
        );
      case 3:
        e: {
          if (He(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, ss(e, t), Vn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, zl(t, $e, a), a !== u.cache && ls(
            t,
            [$e],
            l,
            !0
          ), Xn(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Hd(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== i) {
              i = Lt(
                Error(o(424)),
                t
              ), Ln(i), t = Hd(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = Yt(e.firstChild), ut = t, be = !0, Ul = null, qt = !0, l = Uf(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ca(), a === i) {
              t = ml(
                e,
                t,
                l
              );
              break e;
            }
            st(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Eu(e, t), e === null ? (l = I0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : be || (l = t.type, e = t.pendingProps, a = Lu(
          K.current
        ).createElement(l), a[it] = t, a[mt] = e, ct(a, l, e), lt(a), t.stateNode = a) : t.memoizedState = I0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ea(t), e === null && be && (a = t.stateNode = $0(
          t.type,
          t.pendingProps,
          K.current
        ), ut = t, qt = !0, i = je, Zl(t.type) ? (Sc = i, je = Yt(a.firstChild)) : je = i), st(
          e,
          t,
          t.pendingProps.children,
          l
        ), Eu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((i = a = je) && (a = $y(
          a,
          t.type,
          t.pendingProps,
          qt
        ), a !== null ? (t.stateNode = a, ut = t, je = Yt(a.firstChild), qt = !1, i = !0) : i = !1), i || Ml(t)), ea(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, gc(i, u) ? a = null : f !== null && gc(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = ys(
          e,
          t,
          oy,
          null,
          null,
          l
        ), ci._currentValue = i), Eu(e, t), st(e, t, a, l), t.child;
      case 6:
        return e === null && be && ((e = l = je) && (l = Fy(
          l,
          t.pendingProps,
          qt
        ), l !== null ? (t.stateNode = l, ut = t, je = null, e = !0) : e = !1), e || Ml(t)), null;
      case 13:
        return Bd(e, t, l);
      case 4:
        return He(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ya(
          t,
          null,
          a,
          l
        ) : st(e, t, a, l), t.child;
      case 11:
        return Od(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return st(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return st(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return st(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, zl(t, t.type, a.value), st(e, t, a.children, l), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, fa(t), i = rt(i), a = a(i), t.flags |= 1, st(e, t, a, l), t.child;
      case 14:
        return wd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Dd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Gd(e, t, l);
      case 31:
        return vy(e, t, l);
      case 22:
        return Ud(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return fa(t), a = rt($e), e === null ? (i = is(), i === null && (i = Me, u = as(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= l), i = u), t.memoizedState = { parent: a, cache: i }, rs(t), zl(t, $e, i)) : ((e.lanes & l) !== 0 && (ss(e, t), Vn(t, null, null, l), Xn()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), zl(t, $e, a)) : (a = u.cache, zl(t, $e, a), a !== i.cache && ls(
          t,
          [$e],
          l,
          !0
        ))), st(
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
  function yl(e) {
    e.flags |= 4;
  }
  function Vs(e, t, l, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (m0()) e.flags |= 8192;
        else
          throw ma = nu, us;
    } else e.flags &= -16777217;
  }
  function Xd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !ah(t))
      if (m0()) e.flags |= 8192;
      else
        throw ma = nu, us;
  }
  function Su(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? bo() : 536870912, e.lanes |= t, tn |= t);
  }
  function $n(e, t) {
    if (!be)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function Le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        l |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        l |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function by(e, t, l) {
    var a = t.pendingProps;
    switch (Wr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Le(t), null;
      case 1:
        return Le(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), fl($e), Ge(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Xa(t) ? yl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Pr())), Le(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (yl(t), u !== null ? (Le(t), Xd(t, u)) : (Le(t), Vs(
          t,
          i,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (yl(t), Le(t), Xd(t, u)) : (Le(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && yl(t), Le(t), Vs(
          t,
          i,
          e,
          a,
          l
        )), null;
      case 27:
        if (xa(t), l = K.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && yl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Le(t), null;
          }
          e = Z.current, Xa(t) ? Sf(t) : (e = $0(i, a, l), t.stateNode = e, yl(t));
        }
        return Le(t), null;
      case 5:
        if (xa(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && yl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Le(t), null;
          }
          if (u = Z.current, Xa(t))
            Sf(t);
          else {
            var f = Lu(
              K.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(i, { is: a.is }) : f.createElement(i);
                }
            }
            u[it] = t, u[mt] = a;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
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
            t.stateNode = u;
            e: switch (ct(u, i, a), i) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && yl(t);
          }
        }
        return Le(t), Vs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && yl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = K.current, Xa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, i = ut, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[it] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || B0(e.nodeValue, l)), e || Ml(t, !0);
          } else
            e = Lu(e).createTextNode(
              a
            ), e[it] = t, t.stateNode = e;
        }
        return Le(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Xa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[it] = t;
            } else
              ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), e = !1;
          } else
            l = Pr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Ot(t), t) : (Ot(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Le(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Xa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[it] = t;
            } else
              ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), i = !1;
          } else
            i = Pr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Ot(t), t) : (Ot(t), null);
        }
        return Ot(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Su(t, t.updateQueue), Le(t), null);
      case 4:
        return Ge(), e === null && fc(t.stateNode.containerInfo), Le(t), null;
      case 10:
        return fl(t.type), Le(t), null;
      case 19:
        if (H(ke), a = t.memoizedState, a === null) return Le(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) $n(a, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = su(e), u !== null) {
                  for (t.flags |= 128, $n(a, !1), e = u.updateQueue, t.updateQueue = e, Su(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    gf(l, e), l = l.sibling;
                  return k(
                    ke,
                    ke.current & 1 | 2
                  ), be && cl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Tt() > Cu && (t.flags |= 128, i = !0, $n(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = su(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Su(t, e), $n(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !be)
                return Le(t), null;
            } else
              2 * Tt() - a.renderingStartTime > Cu && l !== 536870912 && (t.flags |= 128, i = !0, $n(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Tt(), e.sibling = null, l = ke.current, k(
          ke,
          i ? l & 1 | 2 : l & 1
        ), be && cl(t, a.treeForkCount), e) : (Le(t), null);
      case 22:
      case 23:
        return Ot(t), ds(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), l = t.updateQueue, l !== null && Su(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && H(da), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), fl($e), Le(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Sy(e, t) {
    switch (Wr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return fl($e), Ge(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return xa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Ot(t), t.alternate === null)
            throw Error(o(340));
          ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Ot(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(ke), null;
      case 4:
        return Ge(), null;
      case 10:
        return fl(t.type), null;
      case 22:
      case 23:
        return Ot(t), ds(), e !== null && H(da), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return fl($e), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(e, t) {
    switch (Wr(t), t.tag) {
      case 3:
        fl($e), Ge();
        break;
      case 26:
      case 27:
      case 5:
        xa(t);
        break;
      case 4:
        Ge();
        break;
      case 31:
        t.memoizedState !== null && Ot(t);
        break;
      case 13:
        Ot(t);
        break;
      case 19:
        H(ke);
        break;
      case 10:
        fl(t.type);
        break;
      case 22:
      case 23:
        Ot(t), ds(), e !== null && H(da);
        break;
      case 24:
        fl($e);
    }
  }
  function Fn(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, f = l.inst;
            a = u(), f.destroy = a;
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (m) {
      _e(t, t.return, m);
    }
  }
  function Gl(e, t, l) {
    try {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, i = t;
              var E = l, _ = m;
              try {
                _();
              } catch (z) {
                _e(
                  i,
                  E,
                  z
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (z) {
      _e(t, t.return, z);
    }
  }
  function Kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        zf(t, l);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Qd(e, t, l) {
    l.props = pa(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function Wn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
      }
    } catch (i) {
      _e(e, t, i);
    }
  }
  function ll(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          _e(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (i) {
          _e(e, t, i);
        }
      else l.current = null;
  }
  function kd(e) {
    var t = e.type, l = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  function Ks(e, t, l) {
    try {
      var a = e.stateNode;
      Vy(a, e.type, l, t), a[mt] = t;
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  function Zd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zl(e.type) || e.tag === 4;
  }
  function Qs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Zd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ks(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = ul));
    else if (a !== 4 && (a === 27 && Zl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (ks(e, t, l), e = e.sibling; e !== null; )
        ks(e, t, l), e = e.sibling;
  }
  function Ru(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Zl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Ru(e, t, l), e = e.sibling; e !== null; )
        Ru(e, t, l), e = e.sibling;
  }
  function Jd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ct(t, a, l), t[it] = e, t[mt] = l;
    } catch (u) {
      _e(e, e.return, u);
    }
  }
  var gl = !1, Ie = !1, Zs = !1, $d = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function Ry(e, t) {
    if (e = e.containerInfo, mc = Vu, e = rf(e), Gr(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var i = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, m = -1, E = -1, _ = 0, z = 0, B = e, O = null;
            t: for (; ; ) {
              for (var M; B !== l || i !== 0 && B.nodeType !== 3 || (m = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (E = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (M = B.firstChild) !== null; )
                O = B, B = M;
              for (; ; ) {
                if (B === e) break t;
                if (O === l && ++_ === i && (m = f), O === u && ++z === a && (E = f), (M = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = M;
            }
            l = m === -1 || E === -1 ? null : { start: m, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (yc = { focusedElem: e, selectionRange: l }, Vu = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  i = e[l], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, i = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var $ = pa(
                    l.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    $,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  _e(
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
                  vc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vc(e);
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
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function Fd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        vl(e, l), a & 4 && Fn(5, l);
        break;
      case 1:
        if (vl(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              _e(l, l.return, f);
            }
          else {
            var i = pa(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                i,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              _e(
                l,
                l.return,
                f
              );
            }
          }
        a & 64 && Kd(l), a & 512 && Wn(l, l.return);
        break;
      case 3:
        if (vl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            zf(e, t);
          } catch (f) {
            _e(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Jd(l);
      case 26:
      case 5:
        vl(e, l), t === null && a & 4 && kd(l), a & 512 && Wn(l, l.return);
        break;
      case 12:
        vl(e, l);
        break;
      case 31:
        vl(e, l), a & 4 && Pd(e, l);
        break;
      case 13:
        vl(e, l), a & 4 && e0(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Dy.bind(
          null,
          l
        ), Wy(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || gl, !a) {
          t = t !== null && t.memoizedState !== null || Ie, i = gl;
          var u = Ie;
          gl = a, (Ie = t) && !u ? El(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : vl(e, l), gl = i, Ie = u;
        }
        break;
      case 30:
        break;
      default:
        vl(e, l);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Tr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Be = null, gt = !1;
  function pl(e, t, l) {
    for (l = l.child; l !== null; )
      Id(e, t, l), l = l.sibling;
  }
  function Id(e, t, l) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(Sn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ie || ll(l, t), pl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ie || ll(l, t);
        var a = Be, i = gt;
        Zl(l.type) && (Be = l.stateNode, gt = !1), pl(
          e,
          t,
          l
        ), ui(l.stateNode), Be = a, gt = i;
        break;
      case 5:
        Ie || ll(l, t);
      case 6:
        if (a = Be, i = gt, Be = null, pl(
          e,
          t,
          l
        ), Be = a, gt = i, Be !== null)
          if (gt)
            try {
              (Be.nodeType === 9 ? Be.body : Be.nodeName === "HTML" ? Be.ownerDocument.body : Be).removeChild(l.stateNode);
            } catch (u) {
              _e(
                l,
                t,
                u
              );
            }
          else
            try {
              Be.removeChild(l.stateNode);
            } catch (u) {
              _e(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Be !== null && (gt ? (e = Be, K0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), on(e)) : K0(Be, l.stateNode));
        break;
      case 4:
        a = Be, i = gt, Be = l.stateNode.containerInfo, gt = !0, pl(
          e,
          t,
          l
        ), Be = a, gt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gl(2, l, t), Ie || Gl(4, l, t), pl(
          e,
          t,
          l
        );
        break;
      case 1:
        Ie || (ll(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Qd(
          l,
          t,
          a
        )), pl(
          e,
          t,
          l
        );
        break;
      case 21:
        pl(
          e,
          t,
          l
        );
        break;
      case 22:
        Ie = (a = Ie) || l.memoizedState !== null, pl(
          e,
          t,
          l
        ), Ie = a;
        break;
      default:
        pl(
          e,
          t,
          l
        );
    }
  }
  function Pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        on(e);
      } catch (l) {
        _e(t, t.return, l);
      }
    }
  }
  function e0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        on(e);
      } catch (l) {
        _e(t, t.return, l);
      }
  }
  function Ty(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new $d()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new $d()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Tu(e, t) {
    var l = Ty(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var i = Uy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function pt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var i = l[a], u = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Zl(m.type)) {
                Be = m.stateNode, gt = !1;
                break e;
              }
              break;
            case 5:
              Be = m.stateNode, gt = !1;
              break e;
            case 3:
            case 4:
              Be = m.stateNode.containerInfo, gt = !0;
              break e;
          }
          m = m.return;
        }
        if (Be === null) throw Error(o(160));
        Id(u, f, i), Be = null, gt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        t0(t, e), t = t.sibling;
  }
  var Zt = null;
  function t0(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        pt(t, e), vt(e), a & 4 && (Gl(3, e, e.return), Fn(3, e), Gl(5, e, e.return));
        break;
      case 1:
        pt(t, e), vt(e), a & 512 && (Ie || l === null || ll(l, l.return)), a & 64 && gl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var i = Zt;
        if (pt(t, e), vt(e), a & 512 && (Ie || l === null || ll(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[An] || u[it] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ct(u, a, l), u[it] = e, lt(u), a = u;
                      break e;
                    case "link":
                      var f = th(
                        "link",
                        "href",
                        i
                      ).get(a + (l.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (u = f[m], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      u = i.createElement(a), ct(u, a, l), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = th(
                        "meta",
                        "content",
                        i
                      ).get(a + (l.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (u = f[m], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      u = i.createElement(a), ct(u, a, l), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[it] = e, lt(u), a = u;
                }
                e.stateNode = a;
              } else
                lh(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = eh(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? lh(
              i,
              e.type,
              e.stateNode
            ) : eh(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Ks(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        pt(t, e), vt(e), a & 512 && (Ie || l === null || ll(l, l.return)), l !== null && a & 4 && Ks(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (pt(t, e), vt(e), a & 512 && (Ie || l === null || ll(l, l.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Ua(i, "");
          } catch ($) {
            _e(e, e.return, $);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, Ks(
          e,
          i,
          l !== null ? l.memoizedProps : i
        )), a & 1024 && (Zs = !0);
        break;
      case 6:
        if (pt(t, e), vt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch ($) {
            _e(e, e.return, $);
          }
        }
        break;
      case 3:
        if (qu = null, i = Zt, Zt = Hu(t.containerInfo), pt(t, e), Zt = i, vt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            on(t.containerInfo);
          } catch ($) {
            _e(e, e.return, $);
          }
        Zs && (Zs = !1, l0(e));
        break;
      case 4:
        a = Zt, Zt = Hu(
          e.stateNode.containerInfo
        ), pt(t, e), vt(e), Zt = a;
        break;
      case 12:
        pt(t, e), vt(e);
        break;
      case 31:
        pt(t, e), vt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Tu(e, a)));
        break;
      case 13:
        pt(t, e), vt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (xu = Tt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Tu(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = l !== null && l.memoizedState !== null, _ = gl, z = Ie;
        if (gl = _ || i, Ie = z || E, pt(t, e), Ie = z, gl = _, vt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || E || gl || Ie || va(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                E = l = t;
                try {
                  if (u = E.stateNode, i)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = E.stateNode;
                    var B = E.memoizedProps.style, O = B != null && B.hasOwnProperty("display") ? B.display : null;
                    m.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch ($) {
                  _e(E, E.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch ($) {
                  _e(E, E.return, $);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                E = t;
                try {
                  var M = E.stateNode;
                  i ? Q0(M, !0) : Q0(E.stateNode, !1);
                } catch ($) {
                  _e(E, E.return, $);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Tu(e, l))));
        break;
      case 19:
        pt(t, e), vt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Tu(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        pt(t, e), vt(e);
    }
  }
  function vt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Zd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode, u = Qs(e);
            Ru(e, u, i);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Ua(f, ""), l.flags &= -33);
            var m = Qs(e);
            Ru(e, m, f);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo, _ = Qs(e);
            ks(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (z) {
        _e(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function l0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        l0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function vl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Fd(e, t.alternate, t), t = t.sibling;
  }
  function va(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Gl(4, t, t.return), va(t);
          break;
        case 1:
          ll(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Qd(
            t,
            t.return,
            l
          ), va(t);
          break;
        case 27:
          ui(t.stateNode);
        case 26:
        case 5:
          ll(t, t.return), va(t);
          break;
        case 22:
          t.memoizedState === null && va(t);
          break;
        case 30:
          va(t);
          break;
        default:
          va(t);
      }
      e = e.sibling;
    }
  }
  function El(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          El(
            i,
            u,
            l
          ), Fn(4, u);
          break;
        case 1:
          if (El(
            i,
            u,
            l
          ), a = u, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              _e(a, a.return, _);
            }
          if (a = u, i = a.updateQueue, i !== null) {
            var m = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Mf(E[i], m);
            } catch (_) {
              _e(a, a.return, _);
            }
          }
          l && f & 64 && Kd(u), Wn(u, u.return);
          break;
        case 27:
          Jd(u);
        case 26:
        case 5:
          El(
            i,
            u,
            l
          ), l && a === null && f & 4 && kd(u), Wn(u, u.return);
          break;
        case 12:
          El(
            i,
            u,
            l
          );
          break;
        case 31:
          El(
            i,
            u,
            l
          ), l && f & 4 && Pd(i, u);
          break;
        case 13:
          El(
            i,
            u,
            l
          ), l && f & 4 && e0(i, u);
          break;
        case 22:
          u.memoizedState === null && El(
            i,
            u,
            l
          ), Wn(u, u.return);
          break;
        case 30:
          break;
        default:
          El(
            i,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Js(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Hn(l));
  }
  function $s(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Hn(e));
  }
  function Jt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        a0(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function a0(e, t, l, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Jt(
          e,
          t,
          l,
          a
        ), i & 2048 && Fn(9, t);
        break;
      case 1:
        Jt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Jt(
          e,
          t,
          l,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Hn(e)));
        break;
      case 12:
        if (i & 2048) {
          Jt(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, f = u.id, m = u.onPostCommit;
            typeof m == "function" && m(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (E) {
            _e(t, t.return, E);
          }
        } else
          Jt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Jt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Jt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Jt(
          e,
          t,
          l,
          a
        ) : In(e, t) : u._visibility & 2 ? Jt(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, Ia(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Js(f, t);
        break;
      case 24:
        Jt(
          e,
          t,
          l,
          a
        ), i & 2048 && $s(t.alternate, t);
        break;
      default:
        Jt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Ia(e, t, l, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, m = l, E = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ia(
            u,
            f,
            m,
            E,
            i
          ), Fn(8, f);
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          f.memoizedState !== null ? z._visibility & 2 ? Ia(
            u,
            f,
            m,
            E,
            i
          ) : In(
            u,
            f
          ) : (z._visibility |= 2, Ia(
            u,
            f,
            m,
            E,
            i
          )), i && _ & 2048 && Js(
            f.alternate,
            f
          );
          break;
        case 24:
          Ia(
            u,
            f,
            m,
            E,
            i
          ), i && _ & 2048 && $s(f.alternate, f);
          break;
        default:
          Ia(
            u,
            f,
            m,
            E,
            i
          );
      }
      t = t.sibling;
    }
  }
  function In(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            In(l, a), i & 2048 && Js(
              a.alternate,
              a
            );
            break;
          case 24:
            In(l, a), i & 2048 && $s(a.alternate, a);
            break;
          default:
            In(l, a);
        }
        t = t.sibling;
      }
  }
  var Pn = 8192;
  function Pa(e, t, l) {
    if (e.subtreeFlags & Pn)
      for (e = e.child; e !== null; )
        n0(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function n0(e, t, l) {
    switch (e.tag) {
      case 26:
        Pa(
          e,
          t,
          l
        ), e.flags & Pn && e.memoizedState !== null && cg(
          l,
          Zt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Pa(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Zt;
        Zt = Hu(e.stateNode.containerInfo), Pa(
          e,
          t,
          l
        ), Zt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Pn, Pn = 16777216, Pa(
          e,
          t,
          l
        ), Pn = a) : Pa(
          e,
          t,
          l
        ));
        break;
      default:
        Pa(
          e,
          t,
          l
        );
    }
  }
  function i0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ei(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          at = a, r0(
            a,
            e
          );
        }
      i0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        u0(e), e = e.sibling;
  }
  function u0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ei(e), e.flags & 2048 && Gl(9, e, e.return);
        break;
      case 3:
        ei(e);
        break;
      case 12:
        ei(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Au(e)) : ei(e);
        break;
      default:
        ei(e);
    }
  }
  function Au(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          at = a, r0(
            a,
            e
          );
        }
      i0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Gl(8, t, t.return), Au(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Au(t));
          break;
        default:
          Au(t);
      }
      e = e.sibling;
    }
  }
  function r0(e, t) {
    for (; at !== null; ) {
      var l = at;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Gl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Hn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, at = a;
      else
        e: for (l = e; at !== null; ) {
          a = at;
          var i = a.sibling, u = a.return;
          if (Wd(a), a === l) {
            at = null;
            break e;
          }
          if (i !== null) {
            i.return = u, at = i;
            break e;
          }
          at = u;
        }
    }
  }
  var Ay = {
    getCacheForType: function(e) {
      var t = rt($e), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return rt($e).controller.signal;
    }
  }, xy = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, Me = null, de = null, pe = 0, Ne = 0, wt = null, Yl = !1, en = !1, Fs = !1, bl = 0, Ve = 0, Xl = 0, Ea = 0, Ws = 0, Dt = 0, tn = 0, ti = null, Et = null, Is = !1, xu = 0, s0 = 0, Cu = 1 / 0, Nu = null, Vl = null, Pe = 0, Kl = null, ln = null, Sl = 0, Ps = 0, ec = null, c0 = null, li = 0, tc = null;
  function Ut() {
    return (Ae & 2) !== 0 && pe !== 0 ? pe & -pe : G.T !== null ? rc() : Ao();
  }
  function o0() {
    if (Dt === 0)
      if ((pe & 536870912) === 0 || be) {
        var e = ji;
        ji <<= 1, (ji & 3932160) === 0 && (ji = 262144), Dt = e;
      } else Dt = 536870912;
    return e = _t.current, e !== null && (e.flags |= 32), Dt;
  }
  function bt(e, t, l) {
    (e === Me && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null) && (an(e, 0), Ql(
      e,
      pe,
      Dt,
      !1
    )), Tn(e, l), ((Ae & 2) === 0 || e !== Me) && (e === Me && ((Ae & 2) === 0 && (Ea |= l), Ve === 4 && Ql(
      e,
      pe,
      Dt,
      !1
    )), al(e));
  }
  function f0(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Rn(e, t), i = a ? _y(e, t) : ac(e, t, !0), u = a;
    do {
      if (i === 0) {
        en && !a && Ql(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !Cy(l)) {
          i = ac(e, t, !1), u = !1;
          continue;
        }
        if (i === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var m = e;
              i = ti;
              var E = m.current.memoizedState.isDehydrated;
              if (E && (an(m, f).flags |= 256), f = ac(
                m,
                f,
                !1
              ), f !== 2) {
                if (Fs && !E) {
                  m.errorRecoveryDisabledLanes |= u, Ea |= u, i = 4;
                  break e;
                }
                u = Et, Et = i, u !== null && (Et === null ? Et = u : Et.push.apply(
                  Et,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          an(e, 0), Ql(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = i, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ql(
                a,
                t,
                Dt,
                !Yl
              );
              break e;
            case 2:
              Et = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (i = xu + 300 - Tt(), 10 < i)) {
            if (Ql(
              a,
              t,
              Dt,
              !Yl
            ), Hi(a, 0, !0) !== 0) break e;
            Sl = t, a.timeoutHandle = X0(
              d0.bind(
                null,
                a,
                l,
                Et,
                Nu,
                Is,
                t,
                Dt,
                Ea,
                tn,
                Yl,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          d0(
            a,
            l,
            Et,
            Nu,
            Is,
            t,
            Dt,
            Ea,
            tn,
            Yl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    al(e);
  }
  function d0(e, t, l, a, i, u, f, m, E, _, z, B, O, M) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ul
      }, n0(
        t,
        u,
        B
      );
      var $ = (u & 62914560) === u ? xu - Tt() : (u & 4194048) === u ? s0 - Tt() : 0;
      if ($ = og(
        B,
        $
      ), $ !== null) {
        Sl = u, e.cancelPendingCommit = $(
          b0.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            i,
            f,
            m,
            E,
            z,
            B,
            null,
            O,
            M
          )
        ), Ql(e, u, f, !_);
        return;
      }
    }
    b0(
      e,
      t,
      u,
      l,
      a,
      i,
      f,
      m,
      E
    );
  }
  function Cy(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var i = l[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!Ct(u(), i)) return !1;
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
  function Ql(e, t, l, a) {
    t &= ~Ws, t &= ~Ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - xt(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    l !== 0 && So(e, l, t);
  }
  function _u() {
    return (Ae & 6) === 0 ? (ai(0), !1) : !0;
  }
  function lc() {
    if (de !== null) {
      if (Ne === 0)
        var e = de.return;
      else
        e = de, ol = oa = null, vs(e), Za = null, qn = 0, e = de;
      for (; e !== null; )
        Vd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function an(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, ky(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Sl = 0, lc(), Me = e, de = l = sl(e.current, null), pe = t, Ne = 0, wt = null, Yl = !1, en = Rn(e, t), Fs = !1, tn = Dt = Ws = Ea = Xl = Ve = 0, Et = ti = null, Is = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - xt(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return bl = t, $i(), l;
  }
  function h0(e, t) {
    ue = null, G.H = Zn, t === ka || t === au ? (t = Of(), Ne = 3) : t === us ? (t = Of(), Ne = 4) : Ne = t === zs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, wt = t, de === null && (Ve = 1, pu(
      e,
      Lt(t, e.current)
    ));
  }
  function m0() {
    var e = _t.current;
    return e === null ? !0 : (pe & 4194048) === pe ? Gt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === Gt : !1;
  }
  function y0() {
    var e = G.H;
    return G.H = Zn, e === null ? Zn : e;
  }
  function g0() {
    var e = G.A;
    return G.A = Ay, e;
  }
  function Ou() {
    Ve = 4, Yl || (pe & 4194048) !== pe && _t.current !== null || (en = !0), (Xl & 134217727) === 0 && (Ea & 134217727) === 0 || Me === null || Ql(
      Me,
      pe,
      Dt,
      !1
    );
  }
  function ac(e, t, l) {
    var a = Ae;
    Ae |= 2;
    var i = y0(), u = g0();
    (Me !== e || pe !== t) && (Nu = null, an(e, t)), t = !1;
    var f = Ve;
    e: do
      try {
        if (Ne !== 0 && de !== null) {
          var m = de, E = wt;
          switch (Ne) {
            case 8:
              lc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _t.current === null && (t = !0);
              var _ = Ne;
              if (Ne = 0, wt = null, nn(e, m, E, _), l && en) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = Ne, Ne = 0, wt = null, nn(e, m, E, _);
          }
        }
        Ny(), f = Ve;
        break;
      } catch (z) {
        h0(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ol = oa = null, Ae = a, G.H = i, G.A = u, de === null && (Me = null, pe = 0, $i()), f;
  }
  function Ny() {
    for (; de !== null; ) p0(de);
  }
  function _y(e, t) {
    var l = Ae;
    Ae |= 2;
    var a = y0(), i = g0();
    Me !== e || pe !== t ? (Nu = null, Cu = Tt() + 500, an(e, t)) : en = Rn(
      e,
      t
    );
    e: do
      try {
        if (Ne !== 0 && de !== null) {
          t = de;
          var u = wt;
          t: switch (Ne) {
            case 1:
              Ne = 0, wt = null, nn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Nf(u)) {
                Ne = 0, wt = null, v0(t);
                break;
              }
              t = function() {
                Ne !== 2 && Ne !== 9 || Me !== e || (Ne = 7), al(e);
              }, u.then(t, t);
              break e;
            case 3:
              Ne = 7;
              break e;
            case 4:
              Ne = 5;
              break e;
            case 7:
              Nf(u) ? (Ne = 0, wt = null, v0(t)) : (Ne = 0, wt = null, nn(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var m = de;
                  if (f ? ah(f) : m.stateNode.complete) {
                    Ne = 0, wt = null;
                    var E = m.sibling;
                    if (E !== null) de = E;
                    else {
                      var _ = m.return;
                      _ !== null ? (de = _, wu(_)) : de = null;
                    }
                    break t;
                  }
              }
              Ne = 0, wt = null, nn(e, t, u, 5);
              break;
            case 6:
              Ne = 0, wt = null, nn(e, t, u, 6);
              break;
            case 8:
              lc(), Ve = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Oy();
        break;
      } catch (z) {
        h0(e, z);
      }
    while (!0);
    return ol = oa = null, G.H = a, G.A = i, Ae = l, de !== null ? 0 : (Me = null, pe = 0, $i(), Ve);
  }
  function Oy() {
    for (; de !== null && !Im(); )
      p0(de);
  }
  function p0(e) {
    var t = Yd(e.alternate, e, bl);
    e.memoizedProps = e.pendingProps, t === null ? wu(e) : de = t;
  }
  function v0(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = jd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = jd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        vs(t);
      default:
        Vd(l, t), t = de = gf(t, bl), t = Yd(l, t, bl);
    }
    e.memoizedProps = e.pendingProps, t === null ? wu(e) : de = t;
  }
  function nn(e, t, l, a) {
    ol = oa = null, vs(t), Za = null, qn = 0;
    var i = t.return;
    try {
      if (py(
        e,
        i,
        t,
        l,
        pe
      )) {
        Ve = 1, pu(
          e,
          Lt(l, e.current)
        ), de = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw de = i, u;
      Ve = 1, pu(
        e,
        Lt(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (be || a === 1 ? e = !0 : en || (pe & 536870912) !== 0 ? e = !1 : (Yl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _t.current, a !== null && a.tag === 13 && (a.flags |= 16384))), E0(t, e)) : wu(t);
  }
  function wu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        E0(
          t,
          Yl
        );
        return;
      }
      e = t.return;
      var l = by(
        t.alternate,
        t,
        bl
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
    Ve === 0 && (Ve = 5);
  }
  function E0(e, t) {
    do {
      var l = Sy(e.alternate, e);
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
    Ve = 6, de = null;
  }
  function b0(e, t, l, a, i, u, f, m, E) {
    e.cancelPendingCommit = null;
    do
      Du();
    while (Pe !== 0);
    if ((Ae & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Qr, s1(
        e,
        l,
        u,
        f,
        m,
        E
      ), e === Me && (de = Me = null, pe = 0), ln = t, Kl = e, Sl = l, Ps = u, ec = i, c0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, My(Mi, function() {
        return x0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = G.T, G.T = null, i = V.p, V.p = 2, f = Ae, Ae |= 4;
        try {
          Ry(e, t, l);
        } finally {
          Ae = f, V.p = i, G.T = a;
        }
      }
      Pe = 1, S0(), R0(), T0();
    }
  }
  function S0() {
    if (Pe === 1) {
      Pe = 0;
      var e = Kl, t = ln, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = G.T, G.T = null;
        var a = V.p;
        V.p = 2;
        var i = Ae;
        Ae |= 4;
        try {
          t0(t, e);
          var u = yc, f = rf(e.containerInfo), m = u.focusedElem, E = u.selectionRange;
          if (f !== m && m && m.ownerDocument && uf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (E !== null && Gr(m)) {
              var _ = E.start, z = E.end;
              if (z === void 0 && (z = _), "selectionStart" in m)
                m.selectionStart = _, m.selectionEnd = Math.min(
                  z,
                  m.value.length
                );
              else {
                var B = m.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), $ = m.textContent.length, ee = Math.min(E.start, $), De = E.end === void 0 ? ee : Math.min(E.end, $);
                  !M.extend && ee > De && (f = De, De = ee, ee = f);
                  var x = nf(
                    m,
                    ee
                  ), R = nf(
                    m,
                    De
                  );
                  if (x && R && (M.rangeCount !== 1 || M.anchorNode !== x.node || M.anchorOffset !== x.offset || M.focusNode !== R.node || M.focusOffset !== R.offset)) {
                    var N = B.createRange();
                    N.setStart(x.node, x.offset), M.removeAllRanges(), ee > De ? (M.addRange(N), M.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset), M.addRange(N));
                  }
                }
              }
            }
            for (B = [], M = m; M = M.parentNode; )
              M.nodeType === 1 && B.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < B.length; m++) {
              var L = B[m];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          Vu = !!mc, yc = mc = null;
        } finally {
          Ae = i, V.p = a, G.T = l;
        }
      }
      e.current = t, Pe = 2;
    }
  }
  function R0() {
    if (Pe === 2) {
      Pe = 0;
      var e = Kl, t = ln, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = G.T, G.T = null;
        var a = V.p;
        V.p = 2;
        var i = Ae;
        Ae |= 4;
        try {
          Fd(e, t.alternate, t);
        } finally {
          Ae = i, V.p = a, G.T = l;
        }
      }
      Pe = 3;
    }
  }
  function T0() {
    if (Pe === 4 || Pe === 3) {
      Pe = 0, Pm();
      var e = Kl, t = ln, l = Sl, a = c0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Pe = 5 : (Pe = 0, ln = Kl = null, A0(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Vl = null), Sr(l), t = t.stateNode, At && typeof At.onCommitFiberRoot == "function")
        try {
          At.onCommitFiberRoot(
            Sn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = G.T, i = V.p, V.p = 2, G.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            u(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          G.T = t, V.p = i;
        }
      }
      (Sl & 3) !== 0 && Du(), al(e), i = e.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? e === tc ? li++ : (li = 0, tc = e) : li = 0, ai(0);
    }
  }
  function A0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Hn(t)));
  }
  function Du() {
    return S0(), R0(), T0(), x0();
  }
  function x0() {
    if (Pe !== 5) return !1;
    var e = Kl, t = Ps;
    Ps = 0;
    var l = Sr(Sl), a = G.T, i = V.p;
    try {
      V.p = 32 > l ? 32 : l, G.T = null, l = ec, ec = null;
      var u = Kl, f = Sl;
      if (Pe = 0, ln = Kl = null, Sl = 0, (Ae & 6) !== 0) throw Error(o(331));
      var m = Ae;
      if (Ae |= 4, u0(u.current), a0(
        u,
        u.current,
        f,
        l
      ), Ae = m, ai(0, !1), At && typeof At.onPostCommitFiberRoot == "function")
        try {
          At.onPostCommitFiberRoot(Sn, u);
        } catch {
        }
      return !0;
    } finally {
      V.p = i, G.T = a, A0(e, t);
    }
  }
  function C0(e, t, l) {
    t = Lt(l, t), t = Ms(e.stateNode, t, 2), e = Hl(e, t, 2), e !== null && (Tn(e, 2), al(e));
  }
  function _e(e, t, l) {
    if (e.tag === 3)
      C0(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          C0(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Vl === null || !Vl.has(a))) {
            e = Lt(l, e), l = Nd(2), a = Hl(t, l, 2), a !== null && (_d(
              l,
              a,
              t,
              e
            ), Tn(a, 2), al(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function nc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new xy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(l) || (Fs = !0, i.add(l), e = wy.bind(null, e, t, l), t.then(e, e));
  }
  function wy(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Me === e && (pe & l) === l && (Ve === 4 || Ve === 3 && (pe & 62914560) === pe && 300 > Tt() - xu ? (Ae & 2) === 0 && an(e, 0) : Ws |= l, tn === pe && (tn = 0)), al(e);
  }
  function N0(e, t) {
    t === 0 && (t = bo()), e = ra(e, t), e !== null && (Tn(e, t), al(e));
  }
  function Dy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), N0(e, l);
  }
  function Uy(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, i = e.memoizedState;
        i !== null && (l = i.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), N0(e, l);
  }
  function My(e, t) {
    return pr(e, t);
  }
  var Uu = null, un = null, ic = !1, Mu = !1, uc = !1, kl = 0;
  function al(e) {
    e !== un && e.next === null && (un === null ? Uu = un = e : un = un.next = e), Mu = !0, ic || (ic = !0, jy());
  }
  function ai(e, t) {
    if (!uc && Mu) {
      uc = !0;
      do
        for (var l = !1, a = Uu; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - xt(42 | e) + 1) - 1, u &= i & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, D0(a, u));
          } else
            u = pe, u = Hi(
              a,
              a === Me ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Rn(a, u) || (l = !0, D0(a, u));
          a = a.next;
        }
      while (l);
      uc = !1;
    }
  }
  function zy() {
    _0();
  }
  function _0() {
    Mu = ic = !1;
    var e = 0;
    kl !== 0 && Qy() && (e = kl);
    for (var t = Tt(), l = null, a = Uu; a !== null; ) {
      var i = a.next, u = O0(a, t);
      u === 0 ? (a.next = null, l === null ? Uu = i : l.next = i, i === null && (un = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Mu = !0)), a = i;
    }
    Pe !== 0 && Pe !== 5 || ai(e), kl !== 0 && (kl = 0);
  }
  function O0(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - xt(u), m = 1 << f, E = i[f];
      E === -1 ? ((m & l) === 0 || (m & a) !== 0) && (i[f] = r1(m, t)) : E <= t && (e.expiredLanes |= m), u &= ~m;
    }
    if (t = Me, l = pe, l = Hi(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (Ne === 2 || Ne === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && vr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Rn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && vr(a), Sr(l)) {
        case 2:
        case 8:
          l = vo;
          break;
        case 32:
          l = Mi;
          break;
        case 268435456:
          l = Eo;
          break;
        default:
          l = Mi;
      }
      return a = w0.bind(null, e), l = pr(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && vr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function w0(e, t) {
    if (Pe !== 0 && Pe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Du() && e.callbackNode !== l)
      return null;
    var a = pe;
    return a = Hi(
      e,
      e === Me ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (f0(e, a, t), O0(e, Tt()), e.callbackNode != null && e.callbackNode === l ? w0.bind(null, e) : null);
  }
  function D0(e, t) {
    if (Du()) return null;
    f0(e, t, !0);
  }
  function jy() {
    Zy(function() {
      (Ae & 6) !== 0 ? pr(
        po,
        zy
      ) : _0();
    });
  }
  function rc() {
    if (kl === 0) {
      var e = Ka;
      e === 0 && (e = zi, zi <<= 1, (zi & 261888) === 0 && (zi = 256)), kl = e;
    }
    return kl;
  }
  function U0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Yi("" + e);
  }
  function M0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Ly(e, t, l, a, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var u = U0(
        (i[mt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[mt] || null) ? U0(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var m = new Qi(
        "action",
        "action",
        null,
        a,
        i
      );
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (kl !== 0) {
                  var E = f ? M0(i, f) : new FormData(i);
                  Ns(
                    l,
                    {
                      pending: !0,
                      data: E,
                      method: i.method,
                      action: u
                    },
                    null,
                    E
                  );
                }
              } else
                typeof u == "function" && (m.preventDefault(), E = f ? M0(i, f) : new FormData(i), Ns(
                  l,
                  {
                    pending: !0,
                    data: E,
                    method: i.method,
                    action: u
                  },
                  u,
                  E
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var sc = 0; sc < Kr.length; sc++) {
    var cc = Kr[sc], Hy = cc.toLowerCase(), By = cc[0].toUpperCase() + cc.slice(1);
    kt(
      Hy,
      "on" + By
    );
  }
  kt(of, "onAnimationEnd"), kt(ff, "onAnimationIteration"), kt(df, "onAnimationStart"), kt("dblclick", "onDoubleClick"), kt("focusin", "onFocus"), kt("focusout", "onBlur"), kt(ey, "onTransitionRun"), kt(ty, "onTransitionStart"), kt(ly, "onTransitionCancel"), kt(hf, "onTransitionEnd"), wa("onMouseEnter", ["mouseout", "mouseover"]), wa("onMouseLeave", ["mouseout", "mouseover"]), wa("onPointerEnter", ["pointerout", "pointerover"]), wa("onPointerLeave", ["pointerout", "pointerover"]), aa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), aa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), aa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), aa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), aa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ni)
  );
  function z0(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f], E = m.instance, _ = m.currentTarget;
            if (m = m.listener, E !== u && i.isPropagationStopped())
              break e;
            u = m, i.currentTarget = _;
            try {
              u(i);
            } catch (z) {
              Ji(z);
            }
            i.currentTarget = null, u = E;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (m = a[f], E = m.instance, _ = m.currentTarget, m = m.listener, E !== u && i.isPropagationStopped())
              break e;
            u = m, i.currentTarget = _;
            try {
              u(i);
            } catch (z) {
              Ji(z);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function he(e, t) {
    var l = t[Rr];
    l === void 0 && (l = t[Rr] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (j0(t, e, 2, !1), l.add(a));
  }
  function oc(e, t, l) {
    var a = 0;
    t && (a |= 4), j0(
      l,
      e,
      a,
      t
    );
  }
  var zu = "_reactListening" + Math.random().toString(36).slice(2);
  function fc(e) {
    if (!e[zu]) {
      e[zu] = !0, No.forEach(function(l) {
        l !== "selectionchange" && (qy.has(l) || oc(l, !1, e), oc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zu] || (t[zu] = !0, oc("selectionchange", !1, t));
    }
  }
  function j0(e, t, l, a) {
    switch (oh(t)) {
      case 2:
        var i = hg;
        break;
      case 8:
        i = mg;
        break;
      default:
        i = Cc;
    }
    l = i.bind(
      null,
      t,
      l,
      e
    ), i = void 0, !Dr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
      passive: i
    }) : e.addEventListener(t, l, !1);
  }
  function dc(e, t, l, a, i) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var m = a.stateNode.containerInfo;
          if (m === i) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var E = f.tag;
              if ((E === 3 || E === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = Na(m), f === null) return;
            if (E = f.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = u = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    qo(function() {
      var _ = u, z = Or(l), B = [];
      e: {
        var O = mf.get(e);
        if (O !== void 0) {
          var M = Qi, $ = e;
          switch (e) {
            case "keypress":
              if (Vi(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = U1;
              break;
            case "focusin":
              $ = "focus", M = jr;
              break;
            case "focusout":
              $ = "blur", M = jr;
              break;
            case "beforeblur":
            case "afterblur":
              M = jr;
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
              M = Xo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = b1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = j1;
              break;
            case of:
            case ff:
            case df:
              M = T1;
              break;
            case hf:
              M = H1;
              break;
            case "scroll":
            case "scrollend":
              M = v1;
              break;
            case "wheel":
              M = q1;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = x1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Ko;
              break;
            case "toggle":
            case "beforetoggle":
              M = Y1;
          }
          var ee = (t & 4) !== 0, De = !ee && (e === "scroll" || e === "scrollend"), x = ee ? O !== null ? O + "Capture" : null : O;
          ee = [];
          for (var R = _, N; R !== null; ) {
            var L = R;
            if (N = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || N === null || x === null || (L = Cn(R, x), L != null && ee.push(
              ii(R, L, N)
            )), De) break;
            R = R.return;
          }
          0 < ee.length && (O = new M(
            O,
            $,
            null,
            l,
            z
          ), B.push({ event: O, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && l !== _r && ($ = l.relatedTarget || l.fromElement) && (Na($) || $[Ca]))
            break e;
          if ((M || O) && (O = z.window === z ? z : (O = z.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? ($ = l.relatedTarget || l.toElement, M = _, $ = $ ? Na($) : null, $ !== null && (De = h($), ee = $.tag, $ !== De || ee !== 5 && ee !== 27 && ee !== 6) && ($ = null)) : (M = null, $ = _), M !== $)) {
            if (ee = Xo, L = "onMouseLeave", x = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Ko, L = "onPointerLeave", x = "onPointerEnter", R = "pointer"), De = M == null ? O : xn(M), N = $ == null ? O : xn($), O = new ee(
              L,
              R + "leave",
              M,
              l,
              z
            ), O.target = De, O.relatedTarget = N, L = null, Na(z) === _ && (ee = new ee(
              x,
              R + "enter",
              $,
              l,
              z
            ), ee.target = N, ee.relatedTarget = De, L = ee), De = L, M && $)
              t: {
                for (ee = Gy, x = M, R = $, N = 0, L = x; L; L = ee(L))
                  N++;
                L = 0;
                for (var I = R; I; I = ee(I))
                  L++;
                for (; 0 < N - L; )
                  x = ee(x), N--;
                for (; 0 < L - N; )
                  R = ee(R), L--;
                for (; N--; ) {
                  if (x === R || R !== null && x === R.alternate) {
                    ee = x;
                    break t;
                  }
                  x = ee(x), R = ee(R);
                }
                ee = null;
              }
            else ee = null;
            M !== null && L0(
              B,
              O,
              M,
              ee,
              !1
            ), $ !== null && De !== null && L0(
              B,
              De,
              $,
              ee,
              !0
            );
          }
        }
        e: {
          if (O = _ ? xn(_) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var Se = Io;
          else if (Fo(O))
            if (Po)
              Se = W1;
            else {
              Se = $1;
              var F = J1;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? _ && Nr(_.elementType) && (Se = Io) : Se = F1;
          if (Se && (Se = Se(e, _))) {
            Wo(
              B,
              Se,
              l,
              z
            );
            break e;
          }
          F && F(e, O, _), e === "focusout" && _ && O.type === "number" && _.memoizedProps.value != null && Cr(O, "number", O.value);
        }
        switch (F = _ ? xn(_) : window, e) {
          case "focusin":
            (Fo(F) || F.contentEditable === "true") && (La = F, Yr = _, zn = null);
            break;
          case "focusout":
            zn = Yr = La = null;
            break;
          case "mousedown":
            Xr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xr = !1, sf(B, l, z);
            break;
          case "selectionchange":
            if (P1) break;
          case "keydown":
          case "keyup":
            sf(B, l, z);
        }
        var oe;
        if (Hr)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          ja ? Jo(e, l) && (ve = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Qo && l.locale !== "ko" && (ja || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && ja && (oe = Go()) : (wl = z, Ur = "value" in wl ? wl.value : wl.textContent, ja = !0)), F = ju(_, ve), 0 < F.length && (ve = new Vo(
          ve,
          e,
          null,
          l,
          z
        ), B.push({ event: ve, listeners: F }), oe ? ve.data = oe : (oe = $o(l), oe !== null && (ve.data = oe)))), (oe = V1 ? K1(e, l) : Q1(e, l)) && (ve = ju(_, "onBeforeInput"), 0 < ve.length && (F = new Vo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          z
        ), B.push({
          event: F,
          listeners: ve
        }), F.data = oe)), Ly(
          B,
          e,
          _,
          l,
          z
        );
      }
      z0(B, t);
    });
  }
  function ii(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function ju(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Cn(e, l), i != null && a.unshift(
        ii(e, i, u)
      ), i = Cn(e, t), i != null && a.push(
        ii(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Gy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function L0(e, t, l, a, i) {
    for (var u = t._reactName, f = []; l !== null && l !== a; ) {
      var m = l, E = m.alternate, _ = m.stateNode;
      if (m = m.tag, E !== null && E === a) break;
      m !== 5 && m !== 26 && m !== 27 || _ === null || (E = _, i ? (_ = Cn(l, u), _ != null && f.unshift(
        ii(l, _, E)
      )) : i || (_ = Cn(l, u), _ != null && f.push(
        ii(l, _, E)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Yy = /\r\n?/g, Xy = /\u0000|\uFFFD/g;
  function H0(e) {
    return (typeof e == "string" ? e : "" + e).replace(Yy, `
`).replace(Xy, "");
  }
  function B0(e, t) {
    return t = H0(t), H0(e) === t;
  }
  function we(e, t, l, a, i, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ua(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ua(e, "" + a);
        break;
      case "className":
        qi(e, "class", a);
        break;
      case "tabIndex":
        qi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        qi(e, l, a);
        break;
      case "style":
        Ho(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          qi(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = Yi("" + a), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (l === "formAction" ? (t !== "input" && we(e, t, "name", i.name, i, null), we(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), we(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), we(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (we(e, t, "encType", i.encType, i, null), we(e, t, "method", i.method, i, null), we(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = Yi("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = ul);
        break;
      case "onScroll":
        a != null && he("scroll", e);
        break;
      case "onScrollEnd":
        a != null && he("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        l = Yi("" + a), e.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
        break;
      case "popover":
        he("beforetoggle", e), he("toggle", e), Bi(e, "popover", a);
        break;
      case "xlinkActuate":
        il(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        il(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        il(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        il(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        il(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        il(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        il(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        il(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        il(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Bi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = g1.get(l) || l, Bi(e, l, a));
    }
  }
  function hc(e, t, l, a, i, u) {
    switch (l) {
      case "style":
        Ho(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (i.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ua(e, a) : (typeof a == "number" || typeof a == "bigint") && Ua(e, "" + a);
        break;
      case "onScroll":
        a != null && he("scroll", e);
        break;
      case "onScrollEnd":
        a != null && he("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = ul);
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
        if (!_o.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), u = e[mt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, i);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Bi(e, l, a);
          }
    }
  }
  function ct(e, t, l) {
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
        var a = !1, i = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var f = l[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  we(e, t, u, f, l, null);
              }
          }
        i && we(e, t, "srcSet", l.srcSet, l, null), a && we(e, t, "src", l.src, l, null);
        return;
      case "input":
        he("invalid", e);
        var m = u = f = i = null, E = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case "name":
                  i = z;
                  break;
                case "type":
                  f = z;
                  break;
                case "checked":
                  E = z;
                  break;
                case "defaultChecked":
                  _ = z;
                  break;
                case "value":
                  u = z;
                  break;
                case "defaultValue":
                  m = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(o(137, t));
                  break;
                default:
                  we(e, t, a, z, l, null);
              }
          }
        Mo(
          e,
          u,
          m,
          E,
          _,
          f,
          i,
          !1
        );
        return;
      case "select":
        he("invalid", e), a = f = u = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (m = l[i], m != null))
            switch (i) {
              case "value":
                u = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                a = m;
              default:
                we(e, t, i, m, l, null);
            }
        t = u, l = f, e.multiple = !!a, t != null ? Da(e, !!a, t, !1) : l != null && Da(e, !!a, l, !0);
        return;
      case "textarea":
        he("invalid", e), u = i = a = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (m = l[f], m != null))
            switch (f) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                i = m;
                break;
              case "children":
                u = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(91));
                break;
              default:
                we(e, t, f, m, l, null);
            }
        jo(e, a, i, u);
        return;
      case "option":
        for (E in l)
          l.hasOwnProperty(E) && (a = l[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : we(e, t, E, a, l, null));
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
        for (a = 0; a < ni.length; a++)
          he(ni[a], e);
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
        for (_ in l)
          if (l.hasOwnProperty(_) && (a = l[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                we(e, t, _, a, l, null);
            }
        return;
      default:
        if (Nr(t)) {
          for (z in l)
            l.hasOwnProperty(z) && (a = l[z], a !== void 0 && hc(
              e,
              t,
              z,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && (a = l[m], a != null && we(e, t, m, a, l, null));
  }
  function Vy(e, t, l, a) {
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
        var i = null, u = null, f = null, m = null, E = null, _ = null, z = null;
        for (M in l) {
          var B = l[M];
          if (l.hasOwnProperty(M) && B != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = B;
              default:
                a.hasOwnProperty(M) || we(e, t, M, null, a, B);
            }
        }
        for (var O in a) {
          var M = a[O];
          if (B = l[O], a.hasOwnProperty(O) && (M != null || B != null))
            switch (O) {
              case "type":
                u = M;
                break;
              case "name":
                i = M;
                break;
              case "checked":
                _ = M;
                break;
              case "defaultChecked":
                z = M;
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
                M !== B && we(
                  e,
                  t,
                  O,
                  M,
                  a,
                  B
                );
            }
        }
        xr(
          e,
          f,
          m,
          E,
          _,
          z,
          u,
          i
        );
        return;
      case "select":
        M = f = m = O = null;
        for (u in l)
          if (E = l[u], l.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = E;
              default:
                a.hasOwnProperty(u) || we(
                  e,
                  t,
                  u,
                  null,
                  a,
                  E
                );
            }
        for (i in a)
          if (u = a[i], E = l[i], a.hasOwnProperty(i) && (u != null || E != null))
            switch (i) {
              case "value":
                O = u;
                break;
              case "defaultValue":
                m = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== E && we(
                  e,
                  t,
                  i,
                  u,
                  a,
                  E
                );
            }
        t = m, l = f, a = M, O != null ? Da(e, !!l, O, !1) : !!a != !!l && (t != null ? Da(e, !!l, t, !0) : Da(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = O = null;
        for (m in l)
          if (i = l[m], l.hasOwnProperty(m) && i != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                we(e, t, m, null, a, i);
            }
        for (f in a)
          if (i = a[f], u = l[f], a.hasOwnProperty(f) && (i != null || u != null))
            switch (f) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                M = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== u && we(e, t, f, i, a, u);
            }
        zo(e, O, M);
        return;
      case "option":
        for (var $ in l)
          O = l[$], l.hasOwnProperty($) && O != null && !a.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : we(
            e,
            t,
            $,
            null,
            a,
            O
          ));
        for (E in a)
          O = a[E], M = l[E], a.hasOwnProperty(E) && O !== M && (O != null || M != null) && (E === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : we(
            e,
            t,
            E,
            O,
            a,
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
        for (var ee in l)
          O = l[ee], l.hasOwnProperty(ee) && O != null && !a.hasOwnProperty(ee) && we(e, t, ee, null, a, O);
        for (_ in a)
          if (O = a[_], M = l[_], a.hasOwnProperty(_) && O !== M && (O != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  _,
                  O,
                  a,
                  M
                );
            }
        return;
      default:
        if (Nr(t)) {
          for (var De in l)
            O = l[De], l.hasOwnProperty(De) && O !== void 0 && !a.hasOwnProperty(De) && hc(
              e,
              t,
              De,
              void 0,
              a,
              O
            );
          for (z in a)
            O = a[z], M = l[z], !a.hasOwnProperty(z) || O === M || O === void 0 && M === void 0 || hc(
              e,
              t,
              z,
              O,
              a,
              M
            );
          return;
        }
    }
    for (var x in l)
      O = l[x], l.hasOwnProperty(x) && O != null && !a.hasOwnProperty(x) && we(e, t, x, null, a, O);
    for (B in a)
      O = a[B], M = l[B], !a.hasOwnProperty(B) || O === M || O == null && M == null || we(e, t, B, O, a, M);
  }
  function q0(e) {
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
  function Ky() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var i = l[a], u = i.transferSize, f = i.initiatorType, m = i.duration;
        if (u && m && q0(f)) {
          for (f = 0, m = i.responseEnd, a += 1; a < l.length; a++) {
            var E = l[a], _ = E.startTime;
            if (_ > m) break;
            var z = E.transferSize, B = E.initiatorType;
            z && q0(B) && (E = E.responseEnd, f += z * (E < m ? 1 : (m - _) / (E - _)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var mc = null, yc = null;
  function Lu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function G0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Y0(e, t) {
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
  function gc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var pc = null;
  function Qy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === pc ? !1 : (pc = e, !0) : (pc = null, !1);
  }
  var X0 = typeof setTimeout == "function" ? setTimeout : void 0, ky = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = typeof Promise == "function" ? Promise : void 0, Zy = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
    return V0.resolve(null).then(e).catch(Jy);
  } : X0;
  function Jy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Zl(e) {
    return e === "head";
  }
  function K0(e, t) {
    var l = t, a = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(i), on(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          ui(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ui(l);
          for (var u = l.firstChild; u; ) {
            var f = u.nextSibling, m = u.nodeName;
            u[An] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && ui(e.ownerDocument.body);
      l = i;
    } while (l);
    on(t);
  }
  function Q0(e, t) {
    var l = e;
    e = 0;
    do {
      var a = l.nextSibling;
      if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8)
        if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else
          l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
      l = a;
    } while (l);
  }
  function vc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vc(l), Tr(l);
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
  function $y(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[An])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Yt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Fy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Yt(e.nextSibling), e === null)) return null;
    return e;
  }
  function k0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Yt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ec(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function bc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Wy(e, t) {
    var l = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || l.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Yt(e) {
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
  var Sc = null;
  function Z0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Yt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function J0(e) {
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
  function $0(e, t, l) {
    switch (t = Lu(l), e) {
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
  function ui(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Tr(e);
  }
  var Xt = /* @__PURE__ */ new Map(), F0 = /* @__PURE__ */ new Set();
  function Hu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Rl = V.d;
  V.d = {
    f: Iy,
    r: Py,
    D: eg,
    C: tg,
    L: lg,
    m: ag,
    X: ig,
    S: ng,
    M: ug
  };
  function Iy() {
    var e = Rl.f(), t = _u();
    return e || t;
  }
  function Py(e) {
    var t = _a(e);
    t !== null && t.tag === 5 && t.type === "form" ? hd(t) : Rl.r(e);
  }
  var rn = typeof document > "u" ? null : document;
  function W0(e, t, l) {
    var a = rn;
    if (a && typeof t == "string" && t) {
      var i = zt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), F0.has(i) || (F0.add(i), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ct(t, "link", e), lt(t), a.head.appendChild(t)));
    }
  }
  function eg(e) {
    Rl.D(e), W0("dns-prefetch", e, null);
  }
  function tg(e, t) {
    Rl.C(e, t), W0("preconnect", e, t);
  }
  function lg(e, t, l) {
    Rl.L(e, t, l);
    var a = rn;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + zt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + zt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + zt(
        l.imageSizes
      ) + '"]')) : i += '[href="' + zt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = sn(e);
          break;
        case "script":
          u = cn(e);
      }
      Xt.has(u) || (e = w(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Xt.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(ri(u)) || t === "script" && a.querySelector(si(u)) || (t = a.createElement("link"), ct(t, "link", e), lt(t), a.head.appendChild(t)));
    }
  }
  function ag(e, t) {
    Rl.m(e, t);
    var l = rn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + zt(a) + '"][href="' + zt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = cn(e);
      }
      if (!Xt.has(u) && (e = w({ rel: "modulepreload", href: e }, t), Xt.set(u, e), l.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(si(u)))
              return;
        }
        a = l.createElement("link"), ct(a, "link", e), lt(a), l.head.appendChild(a);
      }
    }
  }
  function ng(e, t, l) {
    Rl.S(e, t, l);
    var a = rn;
    if (a && e) {
      var i = Oa(a).hoistableStyles, u = sn(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          ri(u)
        ))
          m.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Xt.get(u)) && Rc(e, l);
          var E = f = a.createElement("link");
          lt(E), ct(E, "link", e), E._p = new Promise(function(_, z) {
            E.onload = _, E.onerror = z;
          }), E.addEventListener("load", function() {
            m.loading |= 1;
          }), E.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Bu(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, i.set(u, f);
      }
    }
  }
  function ig(e, t) {
    Rl.X(e, t);
    var l = rn;
    if (l && e) {
      var a = Oa(l).hoistableScripts, i = cn(e), u = a.get(i);
      u || (u = l.querySelector(si(i)), u || (e = w({ src: e, async: !0 }, t), (t = Xt.get(i)) && Tc(e, t), u = l.createElement("script"), lt(u), ct(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function ug(e, t) {
    Rl.M(e, t);
    var l = rn;
    if (l && e) {
      var a = Oa(l).hoistableScripts, i = cn(e), u = a.get(i);
      u || (u = l.querySelector(si(i)), u || (e = w({ src: e, async: !0, type: "module" }, t), (t = Xt.get(i)) && Tc(e, t), u = l.createElement("script"), lt(u), ct(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function I0(e, t, l, a) {
    var i = (i = K.current) ? Hu(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = sn(l.href), l = Oa(
          i
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = sn(l.href);
          var u = Oa(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            ri(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Xt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Xt.set(e, l), u || rg(
            i,
            e,
            l,
            f.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = cn(l), l = Oa(
          i
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function sn(e) {
    return 'href="' + zt(e) + '"';
  }
  function ri(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function P0(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function rg(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", l), lt(t), e.head.appendChild(t));
  }
  function cn(e) {
    return '[src="' + zt(e) + '"]';
  }
  function si(e) {
    return "script[async]" + e;
  }
  function eh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + zt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, lt(a), a;
          var i = w({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), lt(a), ct(a, "style", i), Bu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          i = sn(l.href);
          var u = e.querySelector(
            ri(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, lt(u), u;
          a = P0(l), (i = Xt.get(i)) && Rc(a, i), u = (e.ownerDocument || e).createElement("link"), lt(u);
          var f = u;
          return f._p = new Promise(function(m, E) {
            f.onload = m, f.onerror = E;
          }), ct(u, "link", a), t.state.loading |= 4, Bu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = cn(l.src), (i = e.querySelector(
            si(u)
          )) ? (t.instance = i, lt(i), i) : (a = l, (i = Xt.get(u)) && (a = w({}, l), Tc(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), lt(i), ct(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Bu(a, l.precedence, e));
    return t.instance;
  }
  function Bu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === t) u = m;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Rc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Tc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var qu = null;
  function th(e, t, l) {
    if (qu === null) {
      var a = /* @__PURE__ */ new Map(), i = qu = /* @__PURE__ */ new Map();
      i.set(l, a);
    } else
      i = qu, a = i.get(l), a || (a = /* @__PURE__ */ new Map(), i.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
      var u = l[i];
      if (!(u[An] || u[it] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var m = a.get(f);
        m ? m.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function lh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function sg(e, t, l) {
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
  function ah(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function cg(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var i = sn(a.href), u = t.querySelector(
          ri(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Gu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, lt(u);
          return;
        }
        u = t.ownerDocument || t, a = P0(a), (i = Xt.get(i)) && Rc(a, i), u = u.createElement("link"), lt(u);
        var f = u;
        f._p = new Promise(function(m, E) {
          f.onload = m, f.onerror = E;
        }), ct(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Gu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Ac = 0;
  function og(e, t) {
    return e.stylesheets && e.count === 0 && Xu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ac === 0 && (Ac = 62500 * Ky());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Xu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ac ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Gu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Xu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Yu = null;
  function Xu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Yu = /* @__PURE__ */ new Map(), t.forEach(fg, e), Yu = null, Gu.call(e));
  }
  function fg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Yu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Yu.set(e, l);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = l.get(f) || a, u === a && l.set(null, i), l.set(f, i), this.count++, a = Gu.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ci = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0
  };
  function dg(e, t, l, a, i, u, f, m, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Er(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Er(0), this.hiddenUpdates = Er(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nh(e, t, l, a, i, u, f, m, E, _, z, B) {
    return e = new dg(
      e,
      t,
      l,
      f,
      E,
      _,
      z,
      B,
      m
    ), t = 1, u === !0 && (t |= 24), u = Nt(3, null, null, t), e.current = u, u.stateNode = e, t = as(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, rs(u), e;
  }
  function ih(e) {
    return e ? (e = qa, e) : qa;
  }
  function uh(e, t, l, a, i, u) {
    i = ih(i), a.context === null ? a.context = i : a.pendingContext = i, a = Ll(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Hl(e, a, t), l !== null && (bt(l, e, t), Yn(l, e, t));
  }
  function rh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function xc(e, t) {
    rh(e, t), (e = e.alternate) && rh(e, t);
  }
  function sh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ra(e, 67108864);
      t !== null && bt(t, e, 67108864), xc(e, 67108864);
    }
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ut();
      t = br(t);
      var l = ra(e, t);
      l !== null && bt(l, e, t), xc(e, t);
    }
  }
  var Vu = !0;
  function hg(e, t, l, a) {
    var i = G.T;
    G.T = null;
    var u = V.p;
    try {
      V.p = 2, Cc(e, t, l, a);
    } finally {
      V.p = u, G.T = i;
    }
  }
  function mg(e, t, l, a) {
    var i = G.T;
    G.T = null;
    var u = V.p;
    try {
      V.p = 8, Cc(e, t, l, a);
    } finally {
      V.p = u, G.T = i;
    }
  }
  function Cc(e, t, l, a) {
    if (Vu) {
      var i = Nc(a);
      if (i === null)
        dc(
          e,
          t,
          a,
          Ku,
          l
        ), fh(e, a);
      else if (gg(
        i,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (fh(e, a), t & 4 && -1 < yg.indexOf(e)) {
        for (; i !== null; ) {
          var u = _a(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = la(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var E = 1 << 31 - xt(f);
                      m.entanglements[1] |= E, f &= ~E;
                    }
                    al(u), (Ae & 6) === 0 && (Cu = Tt() + 500, ai(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = ra(u, 2), m !== null && bt(m, u, 2), _u(), xc(u, 2);
            }
          if (u = Nc(a), u === null && dc(
            e,
            t,
            a,
            Ku,
            l
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        dc(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Nc(e) {
    return e = Or(e), _c(e);
  }
  var Ku = null;
  function _c(e) {
    if (Ku = null, e = Na(e), e !== null) {
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
    return Ku = e, null;
  }
  function oh(e) {
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
        switch (e1()) {
          case po:
            return 2;
          case vo:
            return 8;
          case Mi:
          case t1:
            return 32;
          case Eo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Oc = !1, Jl = null, $l = null, Fl = null, oi = /* @__PURE__ */ new Map(), fi = /* @__PURE__ */ new Map(), Wl = [], yg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Jl = null;
        break;
      case "dragenter":
      case "dragleave":
        $l = null;
        break;
      case "mouseover":
      case "mouseout":
        Fl = null;
        break;
      case "pointerover":
      case "pointerout":
        oi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fi.delete(t.pointerId);
    }
  }
  function di(e, t, l, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = _a(t), t !== null && sh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function gg(e, t, l, a, i) {
    switch (t) {
      case "focusin":
        return Jl = di(
          Jl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "dragenter":
        return $l = di(
          $l,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "mouseover":
        return Fl = di(
          Fl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return oi.set(
          u,
          di(
            oi.get(u) || null,
            e,
            t,
            l,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, fi.set(
          u,
          di(
            fi.get(u) || null,
            e,
            t,
            l,
            a,
            i
          )
        ), !0;
    }
    return !1;
  }
  function dh(e) {
    var t = Na(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, xo(e.priority, function() {
              ch(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, xo(e.priority, function() {
              ch(l);
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
  function Qu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Nc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        _r = a, l.target.dispatchEvent(a), _r = null;
      } else
        return t = _a(l), t !== null && sh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function hh(e, t, l) {
    Qu(e) && l.delete(t);
  }
  function pg() {
    Oc = !1, Jl !== null && Qu(Jl) && (Jl = null), $l !== null && Qu($l) && ($l = null), Fl !== null && Qu(Fl) && (Fl = null), oi.forEach(hh), fi.forEach(hh);
  }
  function ku(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Oc || (Oc = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      pg
    )));
  }
  var Zu = null;
  function mh(e) {
    Zu !== e && (Zu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Zu === e && (Zu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (_c(a || l) === null)
              continue;
            break;
          }
          var u = _a(l);
          u !== null && (e.splice(t, 3), t -= 3, Ns(
            u,
            {
              pending: !0,
              data: i,
              method: l.method,
              action: a
            },
            a,
            i
          ));
        }
      }
    ));
  }
  function on(e) {
    function t(E) {
      return ku(E, e);
    }
    Jl !== null && ku(Jl, e), $l !== null && ku($l, e), Fl !== null && ku(Fl, e), oi.forEach(t), fi.forEach(t);
    for (var l = 0; l < Wl.length; l++) {
      var a = Wl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Wl.length && (l = Wl[0], l.blockedOn === null); )
      dh(l), l.blockedOn === null && Wl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var i = l[a], u = l[a + 1], f = i[mt] || null;
        if (typeof u == "function")
          f || mh(l);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[mt] || null)
              m = f.formAction;
            else if (_c(i) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), mh(l);
        }
      }
  }
  function yh() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return i = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      i !== null && (i(), i = null), a || setTimeout(l, 20);
    }
    function l() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, i = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
      };
    }
  }
  function wc(e) {
    this._internalRoot = e;
  }
  Ju.prototype.render = wc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = Ut();
    uh(l, a, e, t, null, null);
  }, Ju.prototype.unmount = wc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      uh(e.current, 2, null, e, null, null), _u(), t[Ca] = null;
    }
  };
  function Ju(e) {
    this._internalRoot = e;
  }
  Ju.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ao();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Wl.length && t !== 0 && t < Wl[l].priority; l++) ;
      Wl.splice(l, 0, e), l === 0 && dh(e);
    }
  };
  var gh = s.version;
  if (gh !== "19.2.3")
    throw Error(
      o(
        527,
        gh,
        "19.2.3"
      )
    );
  V.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var vg = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $u = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$u.isDisabled && $u.supportsFiber)
      try {
        Sn = $u.inject(
          vg
        ), At = $u;
      } catch {
      }
  }
  return yi.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, a = "", i = Td, u = Ad, f = xd;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = nh(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      i,
      u,
      f,
      yh
    ), e[Ca] = t.current, fc(e), new wc(t);
  }, yi.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var a = !1, i = "", u = Td, f = Ad, m = xd, E = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (E = l.formState)), t = nh(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      i,
      E,
      u,
      f,
      m,
      yh
    ), t.context = ih(null), l = t.current, a = Ut(), a = br(a), i = Ll(a), i.callback = null, Hl(l, i, a), l = a, t.current.lanes = l, Tn(t, l), al(t), e[Ca] = t.current, fc(e), new Ju(t);
  }, yi.version = "19.2.3", yi;
}
var Uh;
function iv() {
  if (Uh) return Hc.exports;
  Uh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Hc.exports = nv(), Hc.exports;
}
var uv = iv(), me = /* @__PURE__ */ ((n) => (n.SUCCESS = "success", n.WARNING = "warning", n.ERROR = "error", n.INFO = "info", n))(me || {}), $t = /* @__PURE__ */ ((n) => (n.PRIMARY = "primary", n.OUTLINE = "outline", n.LINK = "link", n))($t || {}), Ft = /* @__PURE__ */ ((n) => (n.BUTTON = "button", n.SUBMIT = "submit", n.RESET = "reset", n))(Ft || {}), Vt = /* @__PURE__ */ ((n) => (n.DEV = "dev", n.TEST = "test", n.STAGE = "stage", n.PROD = "prod", n))(Vt || {}), so = /* @__PURE__ */ ((n) => (n.TEST = "TEST", n.WEBCOMPONENT = "WEBCOMPONENT", n))(so || {}), Pl = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.STATUS = "status", n))(Pl || {}), Ri = /* @__PURE__ */ ((n) => (n.ASSERTIVE = "assertive", n.POLITE = "polite", n.OFF = "off", n))(Ri || {});
const Ce = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, Wt = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, Gc = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, gn = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  GLOBAL_SUBSIDIARIES: "/global/subsidiaries"
}, co = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, Wu = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ei = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, fn = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Mh = /[!@#$%^&*._-]/, zh = /^[A-Za-z0-9!@#$%^&*._-]+$/, Ti = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, rv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, gi = {
  COURSES: "/courses"
}, Ke = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, Al = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, sv = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, cv = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, nt = {
  // Authentication Errors
  INVALID_CREDENTIALS: "Invalid credentials",
  AUTH_FAILED: "Authentication failed",
  // Registration Errors
  REGISTRATION_FAILED: "Registration failed",
  REGISTRATION_FAILED_RETRY: "Registration failed. Please try again.",
  // Password Errors
  PASSWORD_REQUIRED: "Password is required",
  PASSWORD_LENGTH: "Password must be 9-15 characters long",
  PASSWORD_UPPERCASE: "Password must contain at least one uppercase letter",
  PASSWORD_LOWERCASE: "Password must contain at least one lowercase letter",
  PASSWORD_NUMBER: "Password must contain at least one number",
  PASSWORD_SPECIAL_CHAR: "Password must contain at least one special character (!@#$%^&*._-)",
  PASSWORD_INVALID_CHARS: "Password contains invalid characters. Only letters, numbers, and !@#$%^&*._- are allowed",
  // Email Errors
  EMAIL_REQUIRED: "Email is required",
  EMAIL_INVALID: "Please enter a valid email address",
  // Reset Password Errors
  RESET_LINK_FAILED: "Failed to send reset link. Please try again."
}, ov = {
  EMAIL_NOT_FOUND: "No account found with this email address."
}, et = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]"
}, Yc = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, Xc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, Vc = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, Iu = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Kt = ({
  label: n,
  onClick: r,
  disabled: s,
  type: c = Ft.BUTTON,
  variant: o = $t.PRIMARY,
  className: d,
  children: h,
  ariaLabel: g,
  mainButtonStyle: p
}) => {
  const y = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", b = {
    [$t.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [$t.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [$t.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, T = d ? `${y} ${b[o]} ${d}` : `${y} ${b[o]}`;
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      className: T,
      onClick: r,
      disabled: s,
      type: c,
      "aria-label": g || (typeof n == "string" ? n : void 0),
      "aria-disabled": s,
      style: { ...p, borderStyle: "solid !important" },
      children: h || n
    }
  );
}, ba = A.forwardRef((n, r) => {
  const {
    label: s,
    startIcon: c,
    endIcon: o,
    error: d,
    helperText: h,
    optional: g,
    className: p,
    options: y,
    id: b,
    ...T
  } = n, w = !!d || !!h, q = T.type === "select" || !!y, C = b || `input-${Math.random().toString(36).substr(2, 9)}`, j = `${C}-error`, D = `${C}-helper`;
  return /* @__PURE__ */ v.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
    s && /* @__PURE__ */ v.jsxs(
      "label",
      {
        htmlFor: C,
        className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
        children: [
          s,
          " ",
          g && /* @__PURE__ */ v.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
        ]
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { className: "flex! items-center! relative!", children: [
      c && /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: c
        }
      ),
      q ? /* @__PURE__ */ v.jsx(
        "select",
        {
          ref: r,
          id: C,
          "aria-label": typeof s == "string" ? s : T["aria-label"],
          "aria-invalid": w,
          "aria-describedby": w ? j : void 0,
          "aria-required": T.required,
          className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: w ? "#d64545" : "#cbd5d5",
            ...T.style
          },
          ...T,
          children: y && y.map((X) => /* @__PURE__ */ v.jsx("option", { value: X.value, children: X.label }, X.value))
        }
      ) : /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: r,
          id: C,
          "aria-label": typeof s == "string" ? s : T["aria-label"],
          "aria-invalid": w,
          "aria-describedby": w ? j : void 0,
          "aria-required": T.required,
          className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: w ? "#d64545" : "#cbd5d5",
            ...T.style
          },
          ...T
        }
      ),
      o && /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "flex! items-center! justify-center! absolute! right-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: o
        }
      )
    ] }),
    d && typeof d == "string" && /* @__PURE__ */ v.jsx(
      "div",
      {
        id: j,
        role: "alert",
        "aria-live": "polite",
        className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
        children: d
      }
    ),
    !d && h && /* @__PURE__ */ v.jsx(
      "div",
      {
        id: D,
        role: "status",
        "aria-live": "polite",
        className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
        children: h
      }
    )
  ] });
}), fv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", dn = ({
  type: n,
  message: r,
  actionText: s,
  onActionClick: c,
  onClose: o,
  className: d = "",
  children: h
}) => {
  const g = () => {
    switch (n) {
      case me.SUCCESS:
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
      case me.WARNING:
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
      case me.ERROR:
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
      case me.INFO:
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
    switch (n) {
      case me.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
          }
        ) });
      case me.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) });
      case me.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd"
          }
        ) });
      case me.INFO:
      default:
        return /* @__PURE__ */ v.jsx("img", { src: fv, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g(), b = () => {
    switch (n) {
      case me.ERROR:
        return Pl.ALERT;
      case me.WARNING:
      case me.INFO:
        return Pl.STATUS;
      case me.SUCCESS:
        return Pl.STATUS;
      default:
        return Pl.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      role: b(),
      "aria-live": n === me.ERROR ? Ri.ASSERTIVE : Ri.POLITE,
      "aria-atomic": "true",
      className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`,
      children: [
        /* @__PURE__ */ v.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, "aria-hidden": "true", children: p() }),
        /* @__PURE__ */ v.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
          /* @__PURE__ */ v.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
          s && c && /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: c,
              "aria-label": s,
              className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
              children: s
            }
          ),
          h
        ] }),
        o && /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: o,
            "aria-label": "Dismiss banner",
            className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Dismiss" }),
              /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, Wc = ({ type: n, message: r, duration: s = 5e3, onClose: c, className: o = "" }) => {
  const [d, h] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => h(!0), Ti.ANIMATION_ENTRANCE_DELAY);
    const C = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(C);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), c && c();
    }, Ti.ANIMATION_EXIT_DURATION);
  }, b = () => {
    switch (n) {
      case me.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case me.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case me.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      case me.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, T = () => {
    switch (n) {
      case me.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
          }
        ) });
      case me.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) });
      case me.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd"
          }
        ) });
      case me.INFO:
      default:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
            clipRule: "evenodd"
          }
        ) });
    }
  }, w = b(), q = () => {
    switch (n) {
      case me.ERROR:
        return Pl.ALERT;
      case me.WARNING:
      case me.INFO:
      case me.SUCCESS:
        return Pl.STATUS;
      default:
        return Pl.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      role: q(),
      "aria-live": n === me.ERROR ? Ri.ASSERTIVE : Ri.POLITE,
      "aria-atomic": "true",
      className: `fixed! top-4! right-4! z-[${Yc.Z_INDEX}]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: Yc.MAX_WIDTH, width: Yc.WIDTH },
      children: /* @__PURE__ */ v.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${w.bg}`, children: [
        /* @__PURE__ */ v.jsx("div", { className: `flex-shrink-0! ${w.icon}`, "aria-hidden": "true", children: T() }),
        /* @__PURE__ */ v.jsx("div", { className: `ml-3! flex-1! ${w.text}`, children: /* @__PURE__ */ v.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            "aria-label": "Close notification",
            className: `ml-4! flex-shrink-0! inline-flex! ${w.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                  clipRule: "evenodd"
                }
              ) })
            ]
          }
        )
      ] })
    }
  );
}, Am = () => /* @__PURE__ */ v.jsx(
  "span",
  {
    className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Loading..." })
  }
);
class vi extends Error {
}
vi.prototype.name = "InvalidTokenError";
function dv(n) {
  return decodeURIComponent(atob(n).replace(/(.)/g, (r, s) => {
    let c = s.charCodeAt(0).toString(16).toUpperCase();
    return c.length < 2 && (c = "0" + c), "%" + c;
  }));
}
function hv(n) {
  let r = n.replace(/-/g, "+").replace(/_/g, "/");
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
    return dv(r);
  } catch {
    return atob(r);
  }
}
function oo(n, r) {
  if (typeof n != "string")
    throw new vi("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, c = n.split(".")[s];
  if (typeof c != "string")
    throw new vi(`Invalid token specified: missing part #${s + 1}`);
  let o;
  try {
    o = hv(c);
  } catch (d) {
    throw new vi(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new vi(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function xm() {
  const n = window.location.hostname;
  if (n === Al.HOSTNAME || n === Al.IP || Al.IP_PATTERN.test(n))
    return "";
  const r = n.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function mv() {
  const n = window.location.hostname;
  return n === Al.HOSTNAME || n === Al.IP || Al.IP_PATTERN.test(n) || n.startsWith(`${Ke.DEV}.`) || n.startsWith(`${Ke.DEV}-`) ? Vt.DEV : n.startsWith(`${Ke.TEST}.`) || n.startsWith(`${Ke.TEST}-`) ? Vt.TEST : n.startsWith(`${Ke.STAGE}.`) || n.startsWith(`${Ke.STAGE}-`) ? Vt.STAGE : Vt.PROD;
}
function Pu() {
  const n = window.location.href, r = new URL(n), s = r.hostname;
  if (s.startsWith(`${Ke.DEV}.`)) {
    const c = s.replace(`${Ke.DEV}.`, `${Ke.DEV_LEARN}.`);
    return `${r.protocol}//${c}${gi.COURSES}`;
  } else if (s.startsWith(`${Ke.TEST}.`)) {
    const c = s.replace(`${Ke.TEST}.`, `${Ke.TEST_LEARN}.`);
    return `${r.protocol}//${c}${gi.COURSES}`;
  } else if (s.startsWith(`${Ke.STAGE}.`)) {
    const c = s.replace(`${Ke.STAGE}.`, `${Ke.STAGE_LEARN}.`);
    return `${r.protocol}//${c}${gi.COURSES}`;
  } else if (s.split(".").length === 2) {
    const o = `${Ke.LEARN}.${s}`;
    return `${r.protocol}//${o}${gi.COURSES}`;
  } else
    return `${r.protocol}//${s}${gi.COURSES}`;
}
function bi(n, r, s, c = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + s);
  const d = xm(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = c ? encodeURIComponent(r) : r;
  document.cookie = `${n}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Strict`;
}
function yv(n, r = !0) {
  const s = document.cookie.split(";");
  for (const c of s) {
    const o = c.trim();
    if (o.startsWith(`${n}=`)) {
      const d = o.substring(n.length + 1);
      return r ? decodeURIComponent(d) : d;
    }
  }
  return null;
}
function Kc(n) {
  const r = xm(), s = r ? `; domain=${r}` : "";
  document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function Cm(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}
var jh = {};
const { toString: gv } = Object.prototype, { getPrototypeOf: fo } = Object, { iterator: or, toStringTag: Nm } = Symbol, fr = /* @__PURE__ */ ((n) => (r) => {
  const s = gv.call(r);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (n) => (n = n.toLowerCase(), (r) => fr(r) === n), dr = (n) => (r) => typeof r === n, { isArray: pn } = Array, hn = dr("undefined");
function Ni(n) {
  return n !== null && !hn(n) && n.constructor !== null && !hn(n.constructor) && St(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const _m = Pt("ArrayBuffer");
function pv(n) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && _m(n.buffer), r;
}
const vv = dr("string"), St = dr("function"), Om = dr("number"), _i = (n) => n !== null && typeof n == "object", Ev = (n) => n === !0 || n === !1, ar = (n) => {
  if (fr(n) !== "object")
    return !1;
  const r = fo(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Nm in n) && !(or in n);
}, bv = (n) => {
  if (!_i(n) || Ni(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, Sv = Pt("Date"), Rv = Pt("File"), Tv = Pt("Blob"), Av = Pt("FileList"), xv = (n) => _i(n) && St(n.pipe), Cv = (n) => {
  let r;
  return n && (typeof FormData == "function" && n instanceof FormData || St(n.append) && ((r = fr(n)) === "formdata" || // detect form-data instance
  r === "object" && St(n.toString) && n.toString() === "[object FormData]"));
}, Nv = Pt("URLSearchParams"), [_v, Ov, wv, Dv] = ["ReadableStream", "Request", "Response", "Headers"].map(Pt), Uv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oi(n, r, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let c, o;
  if (typeof n != "object" && (n = [n]), pn(n))
    for (c = 0, o = n.length; c < o; c++)
      r.call(null, n[c], c, n);
  else {
    if (Ni(n))
      return;
    const d = s ? Object.getOwnPropertyNames(n) : Object.keys(n), h = d.length;
    let g;
    for (c = 0; c < h; c++)
      g = d[c], r.call(null, n[g], g, n);
  }
}
function wm(n, r) {
  if (Ni(n))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(n);
  let c = s.length, o;
  for (; c-- > 0; )
    if (o = s[c], r === o.toLowerCase())
      return o;
  return null;
}
const Sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Dm = (n) => !hn(n) && n !== Sa;
function Ic() {
  const { caseless: n, skipUndefined: r } = Dm(this) && this || {}, s = {}, c = (o, d) => {
    const h = n && wm(s, d) || d;
    ar(s[h]) && ar(o) ? s[h] = Ic(s[h], o) : ar(o) ? s[h] = Ic({}, o) : pn(o) ? s[h] = o.slice() : (!r || !hn(o)) && (s[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && Oi(arguments[o], c);
  return s;
}
const Mv = (n, r, s, { allOwnKeys: c } = {}) => (Oi(r, (o, d) => {
  s && St(o) ? n[d] = Cm(o, s) : n[d] = o;
}, { allOwnKeys: c }), n), zv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), jv = (n, r, s, c) => {
  n.prototype = Object.create(r.prototype, c), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: r.prototype
  }), s && Object.assign(n.prototype, s);
}, Lv = (n, r, s, c) => {
  let o, d, h;
  const g = {};
  if (r = r || {}, n == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(n), d = o.length; d-- > 0; )
      h = o[d], (!c || c(h, n, r)) && !g[h] && (r[h] = n[h], g[h] = !0);
    n = s !== !1 && fo(n);
  } while (n && (!s || s(n, r)) && n !== Object.prototype);
  return r;
}, Hv = (n, r, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= r.length;
  const c = n.indexOf(r, s);
  return c !== -1 && c === s;
}, Bv = (n) => {
  if (!n) return null;
  if (pn(n)) return n;
  let r = n.length;
  if (!Om(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = n[r];
  return s;
}, qv = /* @__PURE__ */ ((n) => (r) => n && r instanceof n)(typeof Uint8Array < "u" && fo(Uint8Array)), Gv = (n, r) => {
  const c = (n && n[or]).call(n);
  let o;
  for (; (o = c.next()) && !o.done; ) {
    const d = o.value;
    r.call(n, d[0], d[1]);
  }
}, Yv = (n, r) => {
  let s;
  const c = [];
  for (; (s = n.exec(r)) !== null; )
    c.push(s);
  return c;
}, Xv = Pt("HTMLFormElement"), Vv = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, c, o) {
    return c.toUpperCase() + o;
  }
), Lh = (({ hasOwnProperty: n }) => (r, s) => n.call(r, s))(Object.prototype), Kv = Pt("RegExp"), Um = (n, r) => {
  const s = Object.getOwnPropertyDescriptors(n), c = {};
  Oi(s, (o, d) => {
    let h;
    (h = r(o, d, n)) !== !1 && (c[d] = h || o);
  }), Object.defineProperties(n, c);
}, Qv = (n) => {
  Um(n, (r, s) => {
    if (St(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const c = n[s];
    if (St(c)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, kv = (n, r) => {
  const s = {}, c = (o) => {
    o.forEach((d) => {
      s[d] = !0;
    });
  };
  return pn(n) ? c(n) : c(String(n).split(r)), s;
}, Zv = () => {
}, Jv = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;
function $v(n) {
  return !!(n && St(n.append) && n[Nm] === "FormData" && n[or]);
}
const Fv = (n) => {
  const r = new Array(10), s = (c, o) => {
    if (_i(c)) {
      if (r.indexOf(c) >= 0)
        return;
      if (Ni(c))
        return c;
      if (!("toJSON" in c)) {
        r[o] = c;
        const d = pn(c) ? [] : {};
        return Oi(c, (h, g) => {
          const p = s(h, o + 1);
          !hn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return c;
  };
  return s(n, 0);
}, Wv = Pt("AsyncFunction"), Iv = (n) => n && (_i(n) || St(n)) && St(n.then) && St(n.catch), Mm = ((n, r) => n ? setImmediate : r ? ((s, c) => (Sa.addEventListener("message", ({ source: o, data: d }) => {
  o === Sa && d === s && c.length && c.shift()();
}, !1), (o) => {
  c.push(o), Sa.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  St(Sa.postMessage)
), Pv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sa) : typeof jh < "u" && jh.nextTick || Mm, eE = (n) => n != null && St(n[or]), U = {
  isArray: pn,
  isArrayBuffer: _m,
  isBuffer: Ni,
  isFormData: Cv,
  isArrayBufferView: pv,
  isString: vv,
  isNumber: Om,
  isBoolean: Ev,
  isObject: _i,
  isPlainObject: ar,
  isEmptyObject: bv,
  isReadableStream: _v,
  isRequest: Ov,
  isResponse: wv,
  isHeaders: Dv,
  isUndefined: hn,
  isDate: Sv,
  isFile: Rv,
  isBlob: Tv,
  isRegExp: Kv,
  isFunction: St,
  isStream: xv,
  isURLSearchParams: Nv,
  isTypedArray: qv,
  isFileList: Av,
  forEach: Oi,
  merge: Ic,
  extend: Mv,
  trim: Uv,
  stripBOM: zv,
  inherits: jv,
  toFlatObject: Lv,
  kindOf: fr,
  kindOfTest: Pt,
  endsWith: Hv,
  toArray: Bv,
  forEachEntry: Gv,
  matchAll: Yv,
  isHTMLForm: Xv,
  hasOwnProperty: Lh,
  hasOwnProp: Lh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Um,
  freezeMethods: Qv,
  toObjectSet: kv,
  toCamelCase: Vv,
  noop: Zv,
  toFiniteNumber: Jv,
  findKey: wm,
  global: Sa,
  isContextDefined: Dm,
  isSpecCompliantForm: $v,
  toJSONObject: Fv,
  isAsyncFn: Wv,
  isThenable: Iv,
  setImmediate: Mm,
  asap: Pv,
  isIterable: eE
};
function re(n, r, s, c, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), c && (this.request = c), o && (this.response = o, this.status = o.status ? o.status : null);
}
U.inherits(re, Error, {
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
      config: U.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const zm = re.prototype, jm = {};
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
].forEach((n) => {
  jm[n] = { value: n };
});
Object.defineProperties(re, jm);
Object.defineProperty(zm, "isAxiosError", { value: !0 });
re.from = (n, r, s, c, o, d) => {
  const h = Object.create(zm);
  U.toFlatObject(n, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = n && n.message ? n.message : "Error", p = r == null && n ? n.code : r;
  return re.call(h, g, p, s, c, o), n && h.cause == null && Object.defineProperty(h, "cause", { value: n, configurable: !0 }), h.name = n && n.name || "Error", d && Object.assign(h, d), h;
};
const tE = null;
function Pc(n) {
  return U.isPlainObject(n) || U.isArray(n);
}
function Lm(n) {
  return U.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Hh(n, r, s) {
  return n ? n.concat(r).map(function(o, d) {
    return o = Lm(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : r;
}
function lE(n) {
  return U.isArray(n) && !n.some(Pc);
}
const aE = U.toFlatObject(U, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function hr(n, r, s) {
  if (!U.isObject(n))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = U.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, D) {
    return !U.isUndefined(D[j]);
  });
  const c = s.metaTokens, o = s.visitor || b, d = s.dots, h = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(r);
  if (!U.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(C) {
    if (C === null) return "";
    if (U.isDate(C))
      return C.toISOString();
    if (U.isBoolean(C))
      return C.toString();
    if (!p && U.isBlob(C))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(C) || U.isTypedArray(C) ? p && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function b(C, j, D) {
    let X = C;
    if (C && !D && typeof C == "object") {
      if (U.endsWith(j, "{}"))
        j = c ? j : j.slice(0, -2), C = JSON.stringify(C);
      else if (U.isArray(C) && lE(C) || (U.isFileList(C) || U.endsWith(j, "[]")) && (X = U.toArray(C)))
        return j = Lm(j), X.forEach(function(J, W) {
          !(U.isUndefined(J) || J === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Hh([j], W, d) : h === null ? j : j + "[]",
            y(J)
          );
        }), !1;
    }
    return Pc(C) ? !0 : (r.append(Hh(D, j, d), y(C)), !1);
  }
  const T = [], w = Object.assign(aE, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Pc
  });
  function q(C, j) {
    if (!U.isUndefined(C)) {
      if (T.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      T.push(C), U.forEach(C, function(X, Q) {
        (!(U.isUndefined(X) || X === null) && o.call(
          r,
          X,
          U.isString(Q) ? Q.trim() : Q,
          j,
          w
        )) === !0 && q(X, j ? j.concat(Q) : [Q]);
      }), T.pop();
    }
  }
  if (!U.isObject(n))
    throw new TypeError("data must be an object");
  return q(n), r;
}
function Bh(n) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(c) {
    return r[c];
  });
}
function ho(n, r) {
  this._pairs = [], n && hr(n, this, r);
}
const Hm = ho.prototype;
Hm.append = function(r, s) {
  this._pairs.push([r, s]);
};
Hm.toString = function(r) {
  const s = r ? function(c) {
    return r.call(this, c, Bh);
  } : Bh;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function nE(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Bm(n, r, s) {
  if (!r)
    return n;
  const c = s && s.encode || nE;
  U.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let d;
  if (o ? d = o(r, s) : d = U.isURLSearchParams(r) ? r.toString() : new ho(r, s).toString(c), d) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return n;
}
class qh {
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
    U.forEach(this.handlers, function(c) {
      c !== null && r(c);
    });
  }
}
const qm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, iE = typeof URLSearchParams < "u" ? URLSearchParams : ho, uE = typeof FormData < "u" ? FormData : null, rE = typeof Blob < "u" ? Blob : null, sE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: iE,
    FormData: uE,
    Blob: rE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, mo = typeof window < "u" && typeof document < "u", eo = typeof navigator == "object" && navigator || void 0, cE = mo && (!eo || ["ReactNative", "NativeScript", "NS"].indexOf(eo.product) < 0), oE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", fE = mo && window.location.href || "http://localhost", dE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: mo,
  hasStandardBrowserEnv: cE,
  hasStandardBrowserWebWorkerEnv: oE,
  navigator: eo,
  origin: fE
}, Symbol.toStringTag, { value: "Module" })), dt = {
  ...dE,
  ...sE
};
function hE(n, r) {
  return hr(n, new dt.classes.URLSearchParams(), {
    visitor: function(s, c, o, d) {
      return dt.isNode && U.isBuffer(s) ? (this.append(c, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function mE(n) {
  return U.matchAll(/\w+|\[(\w*)]/g, n).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function yE(n) {
  const r = {}, s = Object.keys(n);
  let c;
  const o = s.length;
  let d;
  for (c = 0; c < o; c++)
    d = s[c], r[d] = n[d];
  return r;
}
function Gm(n) {
  function r(s, c, o, d) {
    let h = s[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= s.length;
    return h = !h && U.isArray(o) ? o.length : h, p ? (U.hasOwnProp(o, h) ? o[h] = [o[h], c] : o[h] = c, !g) : ((!o[h] || !U.isObject(o[h])) && (o[h] = []), r(s, c, o[h], d) && U.isArray(o[h]) && (o[h] = yE(o[h])), !g);
  }
  if (U.isFormData(n) && U.isFunction(n.entries)) {
    const s = {};
    return U.forEachEntry(n, (c, o) => {
      r(mE(c), o, s, 0);
    }), s;
  }
  return null;
}
function gE(n, r, s) {
  if (U.isString(n))
    try {
      return (r || JSON.parse)(n), U.trim(n);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (s || JSON.stringify)(n);
}
const wi = {
  transitional: qm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const c = s.getContentType() || "", o = c.indexOf("application/json") > -1, d = U.isObject(r);
    if (d && U.isHTMLForm(r) && (r = new FormData(r)), U.isFormData(r))
      return o ? JSON.stringify(Gm(r)) : r;
    if (U.isArrayBuffer(r) || U.isBuffer(r) || U.isStream(r) || U.isFile(r) || U.isBlob(r) || U.isReadableStream(r))
      return r;
    if (U.isArrayBufferView(r))
      return r.buffer;
    if (U.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return hE(r, this.formSerializer).toString();
      if ((g = U.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return hr(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (s.setContentType("application/json", !1), gE(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || wi.transitional, c = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (U.isResponse(r) || U.isReadableStream(r))
      return r;
    if (r && U.isString(r) && (c && !this.responseType || o)) {
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
    FormData: dt.classes.FormData,
    Blob: dt.classes.Blob
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
U.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  wi.headers[n] = {};
});
const pE = U.toObjectSet([
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
]), vE = (n) => {
  const r = {};
  let s, c, o;
  return n && n.split(`
`).forEach(function(h) {
    o = h.indexOf(":"), s = h.substring(0, o).trim().toLowerCase(), c = h.substring(o + 1).trim(), !(!s || r[s] && pE[s]) && (s === "set-cookie" ? r[s] ? r[s].push(c) : r[s] = [c] : r[s] = r[s] ? r[s] + ", " + c : c);
  }), r;
}, Gh = /* @__PURE__ */ Symbol("internals");
function pi(n) {
  return n && String(n).trim().toLowerCase();
}
function nr(n) {
  return n === !1 || n == null ? n : U.isArray(n) ? n.map(nr) : String(n);
}
function EE(n) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = s.exec(n); )
    r[c[1]] = c[2];
  return r;
}
const bE = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Qc(n, r, s, c, o) {
  if (U.isFunction(c))
    return c.call(this, r, s);
  if (o && (r = s), !!U.isString(r)) {
    if (U.isString(c))
      return r.indexOf(c) !== -1;
    if (U.isRegExp(c))
      return c.test(r);
  }
}
function SE(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, c) => s.toUpperCase() + c);
}
function RE(n, r) {
  const s = U.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(n, c + s, {
      value: function(o, d, h) {
        return this[c].call(this, r, o, d, h);
      },
      configurable: !0
    });
  });
}
let Rt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, c) {
    const o = this;
    function d(g, p, y) {
      const b = pi(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = U.findKey(o, b);
      (!T || o[T] === void 0 || y === !0 || y === void 0 && o[T] !== !1) && (o[T || p] = nr(g));
    }
    const h = (g, p) => U.forEach(g, (y, b) => d(y, b, p));
    if (U.isPlainObject(r) || r instanceof this.constructor)
      h(r, s);
    else if (U.isString(r) && (r = r.trim()) && !bE(r))
      h(vE(r), s);
    else if (U.isObject(r) && U.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!U.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? U.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      h(g, s);
    } else
      r != null && d(s, r, c);
    return this;
  }
  get(r, s) {
    if (r = pi(r), r) {
      const c = U.findKey(this, r);
      if (c) {
        const o = this[c];
        if (!s)
          return o;
        if (s === !0)
          return EE(o);
        if (U.isFunction(s))
          return s.call(this, o, c);
        if (U.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = pi(r), r) {
      const c = U.findKey(this, r);
      return !!(c && this[c] !== void 0 && (!s || Qc(this, this[c], c, s)));
    }
    return !1;
  }
  delete(r, s) {
    const c = this;
    let o = !1;
    function d(h) {
      if (h = pi(h), h) {
        const g = U.findKey(c, h);
        g && (!s || Qc(c, c[g], g, s)) && (delete c[g], o = !0);
      }
    }
    return U.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const s = Object.keys(this);
    let c = s.length, o = !1;
    for (; c--; ) {
      const d = s[c];
      (!r || Qc(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const s = this, c = {};
    return U.forEach(this, (o, d) => {
      const h = U.findKey(c, d);
      if (h) {
        s[h] = nr(o), delete s[d];
        return;
      }
      const g = r ? SE(d) : String(d).trim();
      g !== d && delete s[d], s[g] = nr(o), c[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const s = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (c, o) => {
      c != null && c !== !1 && (s[o] = r && U.isArray(c) ? c.join(", ") : c);
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
    const c = (this[Gh] = this[Gh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = pi(h);
      c[g] || (RE(o, h), c[g] = !0);
    }
    return U.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
Rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Rt.prototype, ({ value: n }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(c) {
      this[s] = c;
    }
  };
});
U.freezeMethods(Rt);
function kc(n, r) {
  const s = this || wi, c = r || s, o = Rt.from(c.headers);
  let d = c.data;
  return U.forEach(n, function(g) {
    d = g.call(s, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function Ym(n) {
  return !!(n && n.__CANCEL__);
}
function vn(n, r, s) {
  re.call(this, n ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
U.inherits(vn, re, {
  __CANCEL__: !0
});
function Xm(n, r, s) {
  const c = s.config.validateStatus;
  !s.status || !c || c(s.status) ? n(s) : r(new re(
    "Request failed with status code " + s.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function TE(n) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return r && r[1] || "";
}
function AE(n, r) {
  n = n || 10;
  const s = new Array(n), c = new Array(n);
  let o = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = c[d];
    h || (h = y), s[o] = p, c[o] = y;
    let T = d, w = 0;
    for (; T !== o; )
      w += s[T++], T = T % n;
    if (o = (o + 1) % n, o === d && (d = (d + 1) % n), y - h < r)
      return;
    const q = b && y - b;
    return q ? Math.round(w * 1e3 / q) : void 0;
  };
}
function xE(n, r) {
  let s = 0, c = 1e3 / r, o, d;
  const h = (y, b = Date.now()) => {
    s = b, o = null, d && (clearTimeout(d), d = null), n(...y);
  };
  return [(...y) => {
    const b = Date.now(), T = b - s;
    T >= c ? h(y, b) : (o = y, d || (d = setTimeout(() => {
      d = null, h(o);
    }, c - T)));
  }, () => o && h(o)];
}
const rr = (n, r, s = 3) => {
  let c = 0;
  const o = AE(50, 250);
  return xE((d) => {
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
    n(T);
  }, s);
}, Yh = (n, r) => {
  const s = n != null;
  return [(c) => r[0]({
    lengthComputable: s,
    total: n,
    loaded: c
  }), r[1]];
}, Xh = (n) => (...r) => U.asap(() => n(...r)), CE = dt.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, r) => (s) => (s = new URL(s, dt.origin), n.protocol === s.protocol && n.host === s.host && (r || n.port === s.port)))(
  new URL(dt.origin),
  dt.navigator && /(msie|trident)/i.test(dt.navigator.userAgent)
) : () => !0, NE = dt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, r, s, c, o, d, h) {
      if (typeof document > "u") return;
      const g = [`${n}=${encodeURIComponent(r)}`];
      U.isNumber(s) && g.push(`expires=${new Date(s).toUTCString()}`), U.isString(c) && g.push(`path=${c}`), U.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), U.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
    },
    read(n) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + n + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
    },
    remove(n) {
      this.write(n, "", Date.now() - 864e5, "/");
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
function _E(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function OE(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}
function Vm(n, r, s) {
  let c = !_E(r);
  return n && (c || s == !1) ? OE(n, r) : r;
}
const Vh = (n) => n instanceof Rt ? { ...n } : n;
function Ta(n, r) {
  r = r || {};
  const s = {};
  function c(y, b, T, w) {
    return U.isPlainObject(y) && U.isPlainObject(b) ? U.merge.call({ caseless: w }, y, b) : U.isPlainObject(b) ? U.merge({}, b) : U.isArray(b) ? b.slice() : b;
  }
  function o(y, b, T, w) {
    if (U.isUndefined(b)) {
      if (!U.isUndefined(y))
        return c(void 0, y, T, w);
    } else return c(y, b, T, w);
  }
  function d(y, b) {
    if (!U.isUndefined(b))
      return c(void 0, b);
  }
  function h(y, b) {
    if (U.isUndefined(b)) {
      if (!U.isUndefined(y))
        return c(void 0, y);
    } else return c(void 0, b);
  }
  function g(y, b, T) {
    if (T in r)
      return c(y, b);
    if (T in n)
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
    headers: (y, b, T) => o(Vh(y), Vh(b), T, !0)
  };
  return U.forEach(Object.keys({ ...n, ...r }), function(b) {
    const T = p[b] || o, w = T(n[b], r[b], b);
    U.isUndefined(w) && T !== g || (s[b] = w);
  }), s;
}
const Km = (n) => {
  const r = Ta({}, n);
  let { data: s, withXSRFToken: c, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = Rt.from(h), r.url = Bm(Vm(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), U.isFormData(s)) {
    if (dt.hasStandardBrowserEnv || dt.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (U.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, T]) => {
        y.includes(b.toLowerCase()) && h.set(b, T);
      });
    }
  }
  if (dt.hasStandardBrowserEnv && (c && U.isFunction(c) && (c = c(r)), c || c !== !1 && CE(r.url))) {
    const p = o && d && NE.read(d);
    p && h.set(o, p);
  }
  return r;
}, wE = typeof XMLHttpRequest < "u", DE = wE && function(n) {
  return new Promise(function(s, c) {
    const o = Km(n);
    let d = o.data;
    const h = Rt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, T, w, q, C;
    function j() {
      q && q(), C && C(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(o.method.toUpperCase(), o.url, !0), D.timeout = o.timeout;
    function X() {
      if (!D)
        return;
      const J = Rt.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), te = {
        data: !g || g === "text" || g === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: J,
        config: n,
        request: D
      };
      Xm(function(ie) {
        s(ie), j();
      }, function(ie) {
        c(ie), j();
      }, te), D = null;
    }
    "onloadend" in D ? D.onloadend = X : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(X);
    }, D.onabort = function() {
      D && (c(new re("Request aborted", re.ECONNABORTED, n, D)), D = null);
    }, D.onerror = function(W) {
      const te = W && W.message ? W.message : "Network Error", ye = new re(te, re.ERR_NETWORK, n, D);
      ye.event = W || null, c(ye), D = null;
    }, D.ontimeout = function() {
      let W = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const te = o.transitional || qm;
      o.timeoutErrorMessage && (W = o.timeoutErrorMessage), c(new re(
        W,
        te.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        n,
        D
      )), D = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in D && U.forEach(h.toJSON(), function(W, te) {
      D.setRequestHeader(te, W);
    }), U.isUndefined(o.withCredentials) || (D.withCredentials = !!o.withCredentials), g && g !== "json" && (D.responseType = o.responseType), y && ([w, C] = rr(y, !0), D.addEventListener("progress", w)), p && D.upload && ([T, q] = rr(p), D.upload.addEventListener("progress", T), D.upload.addEventListener("loadend", q)), (o.cancelToken || o.signal) && (b = (J) => {
      D && (c(!J || J.type ? new vn(null, n, D) : J), D.abort(), D = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const Q = TE(o.url);
    if (Q && dt.protocols.indexOf(Q) === -1) {
      c(new re("Unsupported protocol " + Q + ":", re.ERR_BAD_REQUEST, n));
      return;
    }
    D.send(d || null);
  });
}, UE = (n, r) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (r || s) {
    let c = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        c.abort(b instanceof re ? b : new vn(b instanceof Error ? b.message : b));
      }
    };
    let h = r && setTimeout(() => {
      h = null, d(new re(`timeout ${r} of ms exceeded`, re.ETIMEDOUT));
    }, r);
    const g = () => {
      n && (h && clearTimeout(h), h = null, n.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), n = null);
    };
    n.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = c;
    return p.unsubscribe = () => U.asap(g), p;
  }
}, ME = function* (n, r) {
  let s = n.byteLength;
  if (s < r) {
    yield n;
    return;
  }
  let c = 0, o;
  for (; c < s; )
    o = c + r, yield n.slice(c, o), c = o;
}, zE = async function* (n, r) {
  for await (const s of jE(n))
    yield* ME(s, r);
}, jE = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const r = n.getReader();
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
}, Kh = (n, r, s, c) => {
  const o = zE(n, r);
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
          let w = d += T;
          s(w);
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
}, Qh = 64 * 1024, { isFunction: er } = U, LE = (({ Request: n, Response: r }) => ({
  Request: n,
  Response: r
}))(U.global), {
  ReadableStream: kh,
  TextEncoder: Zh
} = U.global, Jh = (n, ...r) => {
  try {
    return !!n(...r);
  } catch {
    return !1;
  }
}, HE = (n) => {
  n = U.merge.call({
    skipUndefined: !0
  }, LE, n);
  const { fetch: r, Request: s, Response: c } = n, o = r ? er(r) : typeof fetch == "function", d = er(s), h = er(c);
  if (!o)
    return !1;
  const g = o && er(kh), p = o && (typeof Zh == "function" ? /* @__PURE__ */ ((C) => (j) => C.encode(j))(new Zh()) : async (C) => new Uint8Array(await new s(C).arrayBuffer())), y = d && g && Jh(() => {
    let C = !1;
    const j = new s(dt.origin, {
      body: new kh(),
      method: "POST",
      get duplex() {
        return C = !0, "half";
      }
    }).headers.has("Content-Type");
    return C && !j;
  }), b = h && g && Jh(() => U.isReadableStream(new c("").body)), T = {
    stream: b && ((C) => C.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
    !T[C] && (T[C] = (j, D) => {
      let X = j && j[C];
      if (X)
        return X.call(j);
      throw new re(`Response type '${C}' is not supported`, re.ERR_NOT_SUPPORT, D);
    });
  });
  const w = async (C) => {
    if (C == null)
      return 0;
    if (U.isBlob(C))
      return C.size;
    if (U.isSpecCompliantForm(C))
      return (await new s(dt.origin, {
        method: "POST",
        body: C
      }).arrayBuffer()).byteLength;
    if (U.isArrayBufferView(C) || U.isArrayBuffer(C))
      return C.byteLength;
    if (U.isURLSearchParams(C) && (C = C + ""), U.isString(C))
      return (await p(C)).byteLength;
  }, q = async (C, j) => {
    const D = U.toFiniteNumber(C.getContentLength());
    return D ?? w(j);
  };
  return async (C) => {
    let {
      url: j,
      method: D,
      data: X,
      signal: Q,
      cancelToken: J,
      timeout: W,
      onDownloadProgress: te,
      onUploadProgress: ye,
      responseType: ie,
      headers: P,
      withCredentials: le = "same-origin",
      fetchOptions: se
    } = Km(C), Ue = r || fetch;
    ie = ie ? (ie + "").toLowerCase() : "text";
    let ge = UE([Q, J && J.toAbortSignal()], W), qe = null;
    const Qe = ge && ge.unsubscribe && (() => {
      ge.unsubscribe();
    });
    let Je;
    try {
      if (ye && y && D !== "get" && D !== "head" && (Je = await q(P, X)) !== 0) {
        let xe = new s(j, {
          method: "POST",
          body: X,
          duplex: "half"
        }), S;
        if (U.isFormData(X) && (S = xe.headers.get("content-type")) && P.setContentType(S), xe.body) {
          const [H, k] = Yh(
            Je,
            rr(Xh(ye))
          );
          X = Kh(xe.body, Qh, H, k);
        }
      }
      U.isString(le) || (le = le ? "include" : "omit");
      const Y = d && "credentials" in s.prototype, G = {
        ...se,
        signal: ge,
        method: D.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: X,
        duplex: "half",
        credentials: Y ? le : void 0
      };
      qe = d && new s(j, G);
      let V = await (d ? Ue(qe, se) : Ue(j, G));
      const fe = b && (ie === "stream" || ie === "response");
      if (b && (te || fe && Qe)) {
        const xe = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          xe[Z] = V[Z];
        });
        const S = U.toFiniteNumber(V.headers.get("content-length")), [H, k] = te && Yh(
          S,
          rr(Xh(te), !0)
        ) || [];
        V = new c(
          Kh(V.body, Qh, H, () => {
            k && k(), Qe && Qe();
          }),
          xe
        );
      }
      ie = ie || "text";
      let Te = await T[U.findKey(T, ie) || "text"](V, C);
      return !fe && Qe && Qe(), await new Promise((xe, S) => {
        Xm(xe, S, {
          data: Te,
          headers: Rt.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: C,
          request: qe
        });
      });
    } catch (Y) {
      throw Qe && Qe(), Y && Y.name === "TypeError" && /Load failed|fetch/i.test(Y.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, C, qe),
        {
          cause: Y.cause || Y
        }
      ) : re.from(Y, Y && Y.code, C, qe);
    }
  };
}, BE = /* @__PURE__ */ new Map(), Qm = (n) => {
  let r = n && n.env || {};
  const { fetch: s, Request: c, Response: o } = r, d = [
    c,
    o,
    s
  ];
  let h = d.length, g = h, p, y, b = BE;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : HE(r)), b = y;
  return y;
};
Qm();
const yo = {
  http: tE,
  xhr: DE,
  fetch: {
    get: Qm
  }
};
U.forEach(yo, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const $h = (n) => `- ${n}`, qE = (n) => U.isFunction(n) || n === null || n === !1;
function GE(n, r) {
  n = U.isArray(n) ? n : [n];
  const { length: s } = n;
  let c, o;
  const d = {};
  for (let h = 0; h < s; h++) {
    c = n[h];
    let g;
    if (o = c, !qE(c) && (o = yo[(g = String(c)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (U.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + h] = o;
  }
  if (!o) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = s ? h.length > 1 ? `since :
` + h.map($h).join(`
`) : " " + $h(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const km = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: GE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: yo
};
function Zc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new vn(null, n);
}
function Fh(n) {
  return Zc(n), n.headers = Rt.from(n.headers), n.data = kc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), km.getAdapter(n.adapter || wi.adapter, n)(n).then(function(c) {
    return Zc(n), c.data = kc.call(
      n,
      n.transformResponse,
      c
    ), c.headers = Rt.from(c.headers), c;
  }, function(c) {
    return Ym(c) || (Zc(n), c && c.response && (c.response.data = kc.call(
      n,
      n.transformResponse,
      c.response
    ), c.response.headers = Rt.from(c.response.headers))), Promise.reject(c);
  });
}
const Zm = "1.13.2", mr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
  mr[n] = function(c) {
    return typeof c === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
const Wh = {};
mr.transitional = function(r, s, c) {
  function o(d, h) {
    return "[Axios v" + Zm + "] Transitional option '" + d + "'" + h + (c ? ". " + c : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        o(h, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !Wh[h] && (Wh[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
mr.spelling = function(r) {
  return (s, c) => (console.warn(`${c} is likely a misspelling of ${r}`), !0);
};
function YE(n, r, s) {
  if (typeof n != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(n);
  let o = c.length;
  for (; o-- > 0; ) {
    const d = c[o], h = r[d];
    if (h) {
      const g = n[d], p = g === void 0 || h(g, d, n);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const ir = {
  assertOptions: YE,
  validators: mr
}, nl = ir.validators;
let Ra = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new qh(),
      response: new qh()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = Ta(this.defaults, s);
    const { transitional: c, paramsSerializer: o, headers: d } = s;
    c !== void 0 && ir.assertOptions(c, {
      silentJSONParsing: nl.transitional(nl.boolean),
      forcedJSONParsing: nl.transitional(nl.boolean),
      clarifyTimeoutError: nl.transitional(nl.boolean)
    }, !1), o != null && (U.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : ir.assertOptions(o, {
      encode: nl.function,
      serialize: nl.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), ir.assertOptions(s, {
      baseUrl: nl.spelling("baseURL"),
      withXsrfToken: nl.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let h = d && U.merge(
      d.common,
      d[s.method]
    );
    d && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete d[C];
      }
    ), s.headers = Rt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(j) {
      typeof j.runWhen == "function" && j.runWhen(s) === !1 || (p = p && j.synchronous, g.unshift(j.fulfilled, j.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(j) {
      y.push(j.fulfilled, j.rejected);
    });
    let b, T = 0, w;
    if (!p) {
      const C = [Fh.bind(this), void 0];
      for (C.unshift(...g), C.push(...y), w = C.length, b = Promise.resolve(s); T < w; )
        b = b.then(C[T++], C[T++]);
      return b;
    }
    w = g.length;
    let q = s;
    for (; T < w; ) {
      const C = g[T++], j = g[T++];
      try {
        q = C(q);
      } catch (D) {
        j.call(this, D);
        break;
      }
    }
    try {
      b = Fh.call(this, q);
    } catch (C) {
      return Promise.reject(C);
    }
    for (T = 0, w = y.length; T < w; )
      b = b.then(y[T++], y[T++]);
    return b;
  }
  getUri(r) {
    r = Ta(this.defaults, r);
    const s = Vm(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Bm(s, r.params, r.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(r) {
  Ra.prototype[r] = function(s, c) {
    return this.request(Ta(c || {}, {
      method: r,
      url: s,
      data: (c || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(r) {
  function s(c) {
    return function(d, h, g) {
      return this.request(Ta(g || {}, {
        method: r,
        headers: c ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  Ra.prototype[r] = s(), Ra.prototype[r + "Form"] = s(!0);
});
let XE = class Jm {
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
      c.reason || (c.reason = new vn(d, h, g), s(c.reason));
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
      token: new Jm(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function VE(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function KE(n) {
  return U.isObject(n) && n.isAxiosError === !0;
}
const to = {
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
Object.entries(to).forEach(([n, r]) => {
  to[r] = n;
});
function $m(n) {
  const r = new Ra(n), s = Cm(Ra.prototype.request, r);
  return U.extend(s, Ra.prototype, r, { allOwnKeys: !0 }), U.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(o) {
    return $m(Ta(n, o));
  }, s;
}
const ze = $m(wi);
ze.Axios = Ra;
ze.CanceledError = vn;
ze.CancelToken = XE;
ze.isCancel = Ym;
ze.VERSION = Zm;
ze.toFormData = hr;
ze.AxiosError = re;
ze.Cancel = ze.CanceledError;
ze.all = function(r) {
  return Promise.all(r);
};
ze.spread = VE;
ze.isAxiosError = KE;
ze.mergeConfig = Ta;
ze.AxiosHeaders = Rt;
ze.formToJSON = (n) => Gm(U.isHTMLForm(n) ? new FormData(n) : n);
ze.getAdapter = km.getAdapter;
ze.HttpStatusCode = to;
ze.default = ze;
const {
  Axios: ob,
  AxiosError: fb,
  CanceledError: db,
  isCancel: hb,
  CancelToken: mb,
  VERSION: yb,
  all: gb,
  Cancel: pb,
  isAxiosError: vb,
  spread: Eb,
  toFormData: bb,
  AxiosHeaders: Sb,
  HttpStatusCode: Rb,
  formToJSON: Tb,
  getAdapter: Ab,
  mergeConfig: xb
} = ze, Fm = "WEBCOMPONENT";
function QE(n) {
  n ? localStorage.setItem(Ce.AUTHORITY_OVERRIDE, n) : localStorage.removeItem(Ce.AUTHORITY_OVERRIDE);
}
function kE() {
  return localStorage.getItem(Ce.AUTHORITY_OVERRIDE);
}
function Ih() {
  localStorage.removeItem(Ce.AUTHORITY_OVERRIDE);
}
function ZE() {
  const n = kE();
  if (n && Object.values(Vt).includes(n))
    return n;
  const r = window.location.hostname;
  return r === Al.HOSTNAME || r === Al.IP || Al.IP_PATTERN.test(r) || r.startsWith(`${Ke.DEV}.`) || r.startsWith(`${Ke.DEV}-`) ? Vt.DEV : r.startsWith(`${Ke.TEST}.`) || r.startsWith(`${Ke.TEST}-`) ? Vt.TEST : r.startsWith(`${Ke.STAGE}.`) || r.startsWith(`${Ke.STAGE}-`) ? Vt.STAGE : Vt.PROD;
}
function JE(n) {
  if (Fm === so.TEST)
    return "";
  const r = ZE();
  return n.startsWith("/global") ? cv[r] : sv[r];
}
const En = (n) => {
  const r = n.startsWith("/") ? n : `/${n}`;
  return Fm === so.TEST ? r : `${JE(r)}${r}`;
}, $E = async (n) => {
  try {
    return (await ze.get(En(gn.GLOBAL_SUBSIDIARIES)))?.data?.find(
      (c) => c?.siteURL?.includes(n)
    )?.subsidiaryId;
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function Di() {
  const n = localStorage.getItem(Ce.BRAND_DATA);
  if (!n)
    return {};
  const r = JSON.parse(n), s = await $E(r?.domain);
  return {
    [Gc.X_BRAND_ID]: r?.id,
    [Gc.X_SUBSIDIARY_ID]: s?.toString(),
    [Gc.X_BRAND_DOMAIN]: r?.domain
  };
}
const FE = async (n, r) => {
  const s = En(gn.AUTH), c = { username: n, password: r };
  try {
    return (await ze.post(s, c, {
      headers: await Di()
    })).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === co.UNAUTHORIZED ? new Error(nt.INVALID_CREDENTIALS) : o.message ? new Error(o.message) : new Error(nt.AUTH_FAILED);
  }
}, WE = async (n) => {
  const r = En(gn.REGISTER);
  try {
    return (await ze.post(r, n, {
      headers: await Di()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === co.INTERNAL_SERVER_ERROR ? new Error(nt.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(nt.REGISTRATION_FAILED);
  }
}, go = async (n) => {
  const r = En(gn.CHECK_EMAIL);
  try {
    return (await ze.post(
      r,
      { email: n },
      {
        headers: await Di()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, Ph = async (n) => {
  const r = En(gn.FORGOT_PASSWORD), s = { email: n };
  try {
    return (await ze.post(r, s, {
      headers: await Di()
    })).data;
  } catch (c) {
    throw console.error("Error sending password reset:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === co.NOT_FOUND ? new Error("We couldn't find an account with that email.") : c.message ? new Error(c.message) : new Error(nt.RESET_LINK_FAILED);
  }
}, IE = async (n) => {
  const r = En(gn.REFRESH_TOKEN), s = { refresh_token: n };
  try {
    return (await ze.post(r, s, {
      headers: await Di()
    })).data;
  } catch (c) {
    throw console.error("Error during token refresh:", c), c;
  }
}, PE = (n) => {
  try {
    if (!localStorage.getItem(Ce.REFRESH_TOKEN_TIME))
      return console.log(
        `${et.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${et.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = document.cookie.split(";").find((g) => g.trim().startsWith(`${Wt.X_CREDENTIAL}=`)), c = document.cookie.split(";").find((g) => g.trim().startsWith(`${Wt.ACCESS_TOKEN}=`));
    let o = null, d = !1;
    if (c && (o = c.split("=")[1] || null), s && (d = !0), o || (o = localStorage.getItem(Ce.ACCESS_TOKEN)), !o || !d)
      return !1;
    const h = localStorage.getItem(Ce.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const g = oo(o), p = Math.floor(Date.now() / 1e3);
      return !(!g.exp || p >= g.exp);
    } catch (g) {
      return console.error(`${et.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, g), !1;
    }
  } catch (r) {
    return console.error(`${et.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, eb = () => {
  try {
    const n = localStorage.getItem(Ce.REFRESH_TOKEN_TIME);
    return n ? Date.now() - parseInt(n) < rv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (n) {
    return console.error(`${et.TOKEN} isRefreshTokenValid Error:`, n), !1;
  }
}, tb = () => {
  Kc(Wt.ACCESS_TOKEN), Kc(Wt.X_CREDENTIAL), Kc(Wt.REFRESH_TOKEN), [
    Ce.REFRESH_TOKEN,
    Ce.REFRESH_TOKEN_TIME,
    Ce.ACCESS_TOKEN,
    Ce.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${et.AUTH} All authentication tokens and state cleared`);
}, Wm = async (n, r, s = !1) => {
  const c = await FE(n, r), { tokens: o, x_credential: d } = c;
  if (o.access_token) {
    const h = oo(o.access_token), g = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    bi(Wt.ACCESS_TOKEN, o.access_token, g, !0);
    const p = d || h.x_credentials;
    p && bi(Wt.X_CREDENTIAL, p, g, !1), localStorage.setItem(Ce.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      Ce.ACCESS_TOKEN_EXPIRES,
      (Date.now() + g * 1e3).toString()
    ), localStorage.setItem(Ce.REFRESH_TOKEN, o.refresh_token);
    const y = 720 * 60 * 60;
    bi(Wt.REFRESH_TOKEN, o.refresh_token, y, !0), s && o.refresh_token ? (localStorage.setItem(Ce.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${et.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(Ce.REFRESH_TOKEN_TIME), console.log(
      `${et.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return o;
}, Jc = (n) => {
  try {
    const r = oo(n);
    return {
      access_token: n,
      userInfo: {
        studentId: r.studentId,
        sub: r.sub,
        email_verified: r.email_verified,
        x_credentials: r.x_credentials,
        name: r.name,
        preferred_username: r.preferred_username,
        given_name: r.given_name,
        family_name: r.family_name,
        email: r.email
      },
      // Include token metadata for operations like cookie expiry
      decoded: {
        exp: r.exp,
        x_credentials: r.x_credentials
      }
    };
  } catch (r) {
    return console.error(
      `${et.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, yr = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", lb = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  onSignIn: c,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [T, w] = A.useState(""), [q, C] = A.useState(""), [j, D] = A.useState(!1), [X, Q] = A.useState(""), [J, W] = A.useState(""), [te, ye] = A.useState(!1), [ie, P] = A.useState(!1), [le, se] = A.useState(!1), [Ue, ge] = A.useState(!1), [qe, Qe] = A.useState(!1), [Je, Y] = A.useState(!1), [G, V] = A.useState(""), [fe, Te] = A.useState(!1), [xe, S] = A.useState(""), [H, k] = A.useState(me.INFO), Z = A.useRef(null), ae = A.useRef(null), K = {
    length: q.length >= Wu.MIN_LENGTH && q.length <= Wu.MAX_LENGTH,
    hasNumber: fn.NUMBER.test(q),
    hasUppercase: fn.UPPERCASE.test(q),
    hasLowercase: fn.LOWERCASE.test(q),
    hasSpecialChar: Mh.test(q),
    onlyAllowedChars: zh.test(q) || q === "",
    differentFromUsername: g ? q !== g && q !== g.split("@")[0] : !0
  }, He = ((Ee) => {
    if (!Ee) return { strength: "", color: "", width: Iu.EMPTY };
    if (K.length && K.hasNumber && K.hasUppercase && K.hasLowercase && K.hasSpecialChar && K.onlyAllowedChars && K.differentFromUsername)
      return {
        strength: Xc.STRONG,
        color: Vc.STRONG,
        width: Iu.STRONG
      };
    let tt = 0;
    return K.length && tt++, K.hasNumber && tt++, K.hasUppercase && tt++, K.hasLowercase && tt++, K.hasSpecialChar && tt++, K.onlyAllowedChars && tt++, K.differentFromUsername && tt++, tt <= 2 ? {
      strength: Xc.WEAK,
      color: Vc.WEAK,
      width: Iu.WEAK
    } : {
      strength: Xc.GOOD,
      color: Vc.GOOD,
      width: Iu.GOOD
    };
  })(q), Ge = (Ee) => Ee ? Ee.length < Wu.MIN_LENGTH || Ee.length > Wu.MAX_LENGTH ? { isValid: !1, error: nt.PASSWORD_LENGTH } : fn.UPPERCASE.test(Ee) ? fn.LOWERCASE.test(Ee) ? fn.NUMBER.test(Ee) ? Mh.test(Ee) ? zh.test(Ee) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: nt.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: nt.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: nt.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: nt.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: nt.PASSWORD_UPPERCASE
  } : { isValid: !1, error: nt.PASSWORD_REQUIRED };
  A.useEffect(() => {
    if (ae.current && clearTimeout(ae.current), !g) {
      se(!1), ge(!1), Y(!1), V("");
      return;
    }
    if (!Ei.test(g)) {
      se(!1), ge(!1);
      return;
    }
    return ae.current = setTimeout(async () => {
      Qe(!0);
      try {
        (await go(g)).exists ? (ge(!0), se(!0)) : (ge(!1), se(!1));
      } catch (Ee) {
        console.error(`${et.CREATE_ACCOUNT} Email check failed:`, Ee);
        const ot = Ee instanceof Error ? Ee.message : "Unable to verify email. You can still proceed with registration.";
        Y(!0), V(ot), se(!0), ge(!1);
      } finally {
        Qe(!1);
      }
    }, Ti.EMAIL_CHECK_DEBOUNCE), () => {
      ae.current && clearTimeout(ae.current);
    };
  }, [g]);
  const ea = g && Ei.test(g);
  A.useEffect(() => {
    const Ee = (ot) => {
      ot.key === "Escape" && s();
    };
    return document.addEventListener("keydown", Ee), () => document.removeEventListener("keydown", Ee);
  }, [s]);
  const xa = (Ee) => {
    Ee.target === Z.current && s();
  }, bn = async (Ee) => {
    if (Ee.preventDefault(), P(!0), !g || !y || !T) {
      r("Please fill in all required fields");
      return;
    }
    const ot = Ge(q);
    if (!ot.isValid) {
      W(ot.error), r(ot.error), D(!1);
      return;
    }
    if (!Ei.test(g)) {
      Q(nt.EMAIL_INVALID), r(nt.EMAIL_INVALID);
      return;
    }
    D(!0), Q(""), S("");
    try {
      const tt = g.split("@")[0], Nl = await WE({
        username: tt,
        email: g,
        firstName: y,
        lastName: T,
        password: q
      });
      console.log(
        `${et.CREATE_ACCOUNT} Registration successful:`,
        Nl.message
      );
      try {
        const ta = await Wm(g, q, fe);
        n(ta);
      } catch (ta) {
        console.error(
          `${et.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ta
        );
        const Ui = ta instanceof Error ? ta.message : "Auto-login failed";
        r(Ui);
      }
    } catch (tt) {
      console.error(`${et.CREATE_ACCOUNT} Registration failed:`, tt);
      const Nl = tt instanceof Error ? tt.message : nt.REGISTRATION_FAILED;
      S(Nl), k(me.ERROR), r(Nl);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    xe && /* @__PURE__ */ v.jsx(
      Wc,
      {
        type: H,
        message: xe,
        duration: Ti.TOAST_DEFAULT_DURATION,
        onClose: () => S("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Z,
        onMouseDown: xa,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "create-account-dialog-title",
        children: /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative! max-h-[90vh]! overflow-y-auto! [&::-webkit-scrollbar]:w-2! [&::-webkit-scrollbar-track]:bg-gray-100! [&::-webkit-scrollbar-thumb]:bg-gray-300! [&::-webkit-scrollbar-thumb]:rounded-full! [&::-webkit-scrollbar-thumb:hover]:bg-gray-400!",
            role: "document",
            style: {
              scrollbarWidth: "thin",
              scrollbarColor: "#d1d5db #f3f4f6"
            },
            children: [
              /* @__PURE__ */ v.jsx(
                Kt,
                {
                  onClick: s,
                  variant: $t.LINK,
                  className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Ft.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ v.jsx(
                    "svg",
                    {
                      className: "w-6! h-6!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ v.jsx(
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
              /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
                /* @__PURE__ */ v.jsx(
                  "h2",
                  {
                    id: "create-account-dialog-title",
                    className: "text-2xl! font-bold! text-gray-800! mb-1!",
                    children: o
                  }
                ),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
              ] }),
              /* @__PURE__ */ v.jsxs("form", { onSubmit: bn, className: "space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  ba,
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    value: g,
                    onChange: (Ee) => {
                      p(Ee.target.value), Q("");
                    },
                    placeholder: "Enter email address",
                    disabled: j,
                    className: "w-full!",
                    autoComplete: "email",
                    error: ie && !g ? "Required" : X || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      qe && /* @__PURE__ */ v.jsx(Am, {}),
                      !qe && !Ue && !Je && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          src: yr,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                le && Ue && !Je && /* @__PURE__ */ v.jsx(
                  dn,
                  {
                    type: me.INFO,
                    message: "We found an existing account.",
                    actionText: "Want to sign in instead?",
                    onActionClick: () => {
                      se(!1), c(g);
                    },
                    onClose: () => se(!1),
                    className: "mb-4!"
                  }
                ),
                le && Je && /* @__PURE__ */ v.jsx(
                  dn,
                  {
                    type: me.ERROR,
                    message: G,
                    onClose: () => {
                      se(!1), Y(!1), V("");
                    },
                    className: "mb-4!"
                  }
                ),
                /* @__PURE__ */ v.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    ba,
                    {
                      label: "First Name",
                      id: "firstName",
                      type: "text",
                      value: y,
                      onChange: (Ee) => b(Ee.target.value),
                      placeholder: "First Name",
                      disabled: j,
                      className: "w-full!",
                      autoComplete: "given-name",
                      error: ie && !y ? "Required" : ""
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    ba,
                    {
                      label: "Last Name",
                      id: "lastName",
                      type: "text",
                      value: T,
                      onChange: (Ee) => w(Ee.target.value),
                      placeholder: "Last Name",
                      disabled: j,
                      className: "w-full!",
                      autoComplete: "family-name",
                      error: ie && !T ? "Required" : ""
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ v.jsx(
                  ba,
                  {
                    label: "Password",
                    id: "password",
                    type: te ? "text" : "password",
                    value: q,
                    onChange: (Ee) => {
                      C(Ee.target.value), W("");
                    },
                    placeholder: "Enter Password...",
                    disabled: j,
                    className: "w-full!",
                    autoComplete: "new-password",
                    error: J,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ye(!te),
                        className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                        tabIndex: -1,
                        "aria-label": te ? "Hide password" : "Show password",
                        children: te ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-5! h-5!",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsxs(
                          "svg",
                          {
                            className: "w-5! h-5!",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            "aria-hidden": "true",
                            children: [
                              /* @__PURE__ */ v.jsx(
                                "path",
                                {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 2,
                                  d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                }
                              ),
                              /* @__PURE__ */ v.jsx(
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
                q && /* @__PURE__ */ v.jsxs("div", { className: "mt-2! mb-4!", children: [
                  /* @__PURE__ */ v.jsxs("div", { className: "flex! items-center! justify-between! mb-2!", children: [
                    /* @__PURE__ */ v.jsx("div", { className: "w-full! bg-gray-200! rounded-full! h-2! mr-3!", children: /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        className: "h-2! rounded-full! transition-all! duration-300!",
                        style: {
                          width: He.width,
                          backgroundColor: He.color
                        }
                      }
                    ) }),
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        className: "text-sm! font-medium! whitespace-nowrap!",
                        style: { color: He.color },
                        children: He.strength
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsxs("div", { className: "mt-3!", children: [
                    /* @__PURE__ */ v.jsx("p", { className: "text-sm! font-medium! text-gray-700! mb-2!", children: "Password must:" }),
                    /* @__PURE__ */ v.jsxs("ul", { className: "space-y-1!", children: [
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        K.length ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-green-500!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-gray-400!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            className: K.length ? "text-green-600!" : "text-gray-500!",
                            children: "be 9-15 characters"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        K.hasNumber ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-green-500!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-gray-400!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            className: K.hasNumber ? "text-green-600!" : "text-gray-500!",
                            children: "have at least one number"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        K.hasUppercase ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-green-500!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-gray-400!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            className: K.hasUppercase ? "text-green-600!" : "text-gray-500!",
                            children: "have at least one uppercase letter"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        K.hasSpecialChar ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-green-500!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-gray-400!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            className: K.hasSpecialChar ? "text-green-600!" : "text-gray-500!",
                            children: "have at least one special character"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        K.onlyAllowedChars ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-green-500!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-gray-400!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            className: K.onlyAllowedChars ? "text-green-600!" : "text-gray-500!",
                            children: "use only the following special characters !@#$%^&*._-"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        K.differentFromUsername ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-green-500!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            className: "w-4! h-4! mr-2! text-gray-400!",
                            fill: "currentColor",
                            viewBox: "0 0 20 20",
                            children: /* @__PURE__ */ v.jsx(
                              "path",
                              {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z",
                                clipRule: "evenodd"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            className: K.differentFromUsername ? "text-green-600!" : "text-gray-500!",
                            children: "be different from username"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsxs("label", { className: "flex! items-center! m-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: fe,
                      onChange: (Ee) => Te(Ee.target.checked),
                      className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                      "aria-label": "Remember me"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "span",
                    {
                      className: "text-gray-600! text-sm!",
                      style: {
                        fontWeight: "500",
                        color: "#5F5B7D"
                      },
                      children: "Remember me"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ v.jsx(
                  Kt,
                  {
                    type: Ft.SUBMIT,
                    disabled: j || Ue || !ea,
                    className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: j ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                      /* @__PURE__ */ v.jsxs(
                        "svg",
                        {
                          className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                            /* @__PURE__ */ v.jsx(
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
                            /* @__PURE__ */ v.jsx(
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
                /* @__PURE__ */ v.jsxs("div", { className: "relative! mt-4! mb-4!", children: [
                  /* @__PURE__ */ v.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { className: "w-full! border-t! border-solid! border-gray-300!" }) }),
                  /* @__PURE__ */ v.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
                ] }),
                /* @__PURE__ */ v.jsx(
                  Kt,
                  {
                    type: Ft.BUTTON,
                    variant: $t.OUTLINE,
                    onClick: () => c(g),
                    disabled: j,
                    className: "w-full! flex! items-center! justify-center! gap-3!",
                    children: /* @__PURE__ */ v.jsx("span", { children: "Sign In" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    xe && /* @__PURE__ */ v.jsx(Wc, { message: xe, type: H, onClose: () => S("") })
  ] });
}, ab = ({
  email: n,
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
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: h,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Kt,
          {
            onClick: o,
            variant: "link",
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: "button",
            ariaLabel: "Close dialog",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /* @__PURE__ */ v.jsx(
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
        /* @__PURE__ */ v.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ v.jsx("img", { src: yr, alt: "Success", "aria-hidden": "true", className: "w-16! h-16!" }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-success-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: n }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          Kt,
          {
            type: "button",
            onClick: s,
            disabled: r,
            ariaLabel: "Resend password reset link",
            className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
            children: r ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
              /* @__PURE__ */ v.jsxs(
                "svg",
                {
                  className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ v.jsx(
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
                    /* @__PURE__ */ v.jsx(
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
        /* @__PURE__ */ v.jsx(
          Kt,
          {
            type: "button",
            variant: "outline",
            onClick: c,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3!",
            children: /* @__PURE__ */ v.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, nb = ({
  email: n,
  onBack: r,
  handleClose: s
}) => {
  const [c, o] = A.useState(n || ""), [d, h] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [T, w] = A.useState(!1), [q, C] = A.useState(!1), [j, D] = A.useState(!1), [X, Q] = A.useState(!1), [J, W] = A.useState(""), te = A.useRef(null);
  A.useEffect(() => {
    const le = (se) => {
      se.key === "Escape" && s();
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [s]), A.useEffect(() => {
    const le = Ei.test(c);
    if (D(le), !le || !c) {
      C(!1), Q(!1), W("");
      return;
    }
    const se = setTimeout(async () => {
      w(!0);
      try {
        const Ue = await go(c);
        console.log("[ResetPassword] Email check response:", Ue), C(Ue.exists), console.log("[ResetPassword] Email exists:", Ue.exists);
      } catch (Ue) {
        console.error("[ResetPassword] Error checking email:", Ue);
        const ge = Ue instanceof Error ? Ue.message : "Unable to verify email. Please try again.";
        Q(!0), W(ge), C(!1);
      } finally {
        w(!1);
      }
    }, Ti.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(se);
  }, [c]);
  const ye = (le) => {
    le.target === te.current && s();
  }, ie = async (le) => {
    if (le.preventDefault(), !c) {
      b(nt.EMAIL_REQUIRED);
      return;
    }
    h(!0), b("");
    try {
      await Ph(c), console.log("[ResetPassword] Reset link sent to:", c), p(!0);
    } catch (se) {
      console.error("[ResetPassword] Failed to send reset link:", se);
      const Ue = se instanceof Error ? se.message : nt.RESET_LINK_FAILED;
      b(Ue);
    } finally {
      h(!1);
    }
  }, P = async () => {
    h(!0), b("");
    try {
      await Ph(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (le) {
      console.error("[ResetPassword] Failed to resend reset link:", le), p(!1);
      const se = le instanceof Error ? le.message : nt.RESET_LINK_FAILED;
      b(se);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ v.jsx(
    ab,
    {
      email: c,
      loading: d,
      onResendLink: P,
      onBack: r,
      onClose: s
    }
  ) : /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: te,
      onMouseDown: ye,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Kt,
          {
            onClick: s,
            variant: $t.LINK,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: Ft.BUTTON,
            ariaLabel: "Close dialog",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /* @__PURE__ */ v.jsx(
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
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx(
            "h2",
            {
              id: "reset-password-dialog-title",
              className: "text-2xl! font-bold! text-gray-800! mb-2!",
              children: "Reset your password"
            }
          ),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ v.jsxs("form", { onSubmit: ie, className: "space-y-4!", "aria-label": "Reset password form", children: [
          /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
            ba,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: c,
              onChange: (le) => {
                o(le.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                T && /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!",
                    role: "status",
                    "aria-label": "Checking email"
                  }
                ),
                !T && q && j && !X && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: yr,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          X && /* @__PURE__ */ v.jsx(
            dn,
            {
              type: me.ERROR,
              message: J,
              onClose: () => {
                Q(!1), W("");
              },
              className: "mb-4!"
            }
          ),
          y && /* @__PURE__ */ v.jsx(
            dn,
            {
              type: me.ERROR,
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Kt,
            {
              type: Ft.SUBMIT,
              disabled: d || !c || !j || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", {
                  loading: d,
                  email: c,
                  isEmailValid: j,
                  emailExists: q
                });
              },
              children: d ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ v.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ v.jsx(
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
                      /* @__PURE__ */ v.jsx(
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
          /* @__PURE__ */ v.jsx(
            Kt,
            {
              type: Ft.BUTTON,
              variant: $t.OUTLINE,
              onClick: r,
              disabled: d,
              className: "w-full! flex! items-center! justify-center! gap-3! mt-4!",
              children: /* @__PURE__ */ v.jsx("span", { children: "Back to sign in" })
            }
          )
        ] })
      ] })
    }
  );
}, ib = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  authority: c,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [T, w] = A.useState(!1), [q, C] = A.useState(!1), [j, D] = A.useState(""), [X, Q] = A.useState(!1), [J, W] = A.useState(!1), [te, ye] = A.useState(!1), [ie, P] = A.useState(!1), [le, se] = A.useState(!1), [Ue, ge] = A.useState(!1), [qe, Qe] = A.useState(!1), [Je, Y] = A.useState(""), [G, V] = A.useState(""), [fe, Te] = A.useState(me.INFO), xe = A.useRef(null), S = A.useRef(null);
  A.useEffect(() => {
    if (S.current && clearTimeout(S.current), !g) {
      P(!1), ge(!1), Qe(!1), Y("");
      return;
    }
    if (!g.includes("@")) {
      P(!0), ge(!1);
      return;
    }
    if (!Ei.test(g)) {
      P(!1), ge(!1);
      return;
    }
    return S.current = setTimeout(async () => {
      se(!0);
      try {
        (await go(g)).exists ? (P(!0), ge(!1)) : (P(!1), ge(!0));
      } catch (K) {
        console.error("[EmbeddedLogin] Email check failed:", K);
        const ce = K instanceof Error ? K.message : "Unable to verify email. You can still proceed with login.";
        Qe(!0), Y(ce), ge(!0), P(!1);
      } finally {
        se(!1);
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [g]);
  const k = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const K = (ce) => {
      ce.key === "Escape" && s();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [s]);
  const Z = (K) => {
    K.target === xe.current && s();
  }, ae = async (K) => {
    if (K.preventDefault(), !g || !y) {
      D("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    w(!0), D("");
    try {
      const ce = await Wm(g, y, X);
      n(ce);
    } catch (ce) {
      console.error("[EmbeddedLogin] Login failed:", ce);
      const He = ce instanceof Error ? ce.message : "Authentication failed";
      D(He), V(He), Te(me.ERROR), r(He);
    } finally {
      w(!1);
    }
  };
  return te ? /* @__PURE__ */ v.jsx(
    nb,
    {
      email: g,
      onBack: () => ye(!1),
      handleClose: s
    }
  ) : J ? /* @__PURE__ */ v.jsx(
    lb,
    {
      onSuccess: (K) => {
        W(!1), n(K);
      },
      onError: r,
      handleClose: s,
      onSignIn: (K) => {
        W(!1), K && p(K);
      },
      authority: c,
      initialEmail: g
    }
  ) : /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: xe,
      onMouseDown: Z,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
          /* @__PURE__ */ v.jsx(
            Kt,
            {
              onClick: s,
              variant: $t.LINK,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
              type: Ft.BUTTON,
              ariaLabel: "Close dialog",
              children: /* @__PURE__ */ v.jsx(
                "svg",
                {
                  className: "w-6! h-6!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ v.jsx(
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
          /* @__PURE__ */ v.jsxs("div", { className: "mb-3! text-center!", children: [
            /* @__PURE__ */ v.jsx("h2", { id: "login-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
            /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ v.jsxs("form", { onSubmit: ae, className: "space-y-2!", "aria-label": "Login form", children: [
            /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
              ba,
              {
                label: "Email or Username",
                id: "email",
                type: "text",
                value: g,
                onChange: (K) => p(K.target.value),
                placeholder: "Enter email or username",
                disabled: T,
                className: "w-full!",
                autoComplete: "username",
                endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  le && /* @__PURE__ */ v.jsx(Am, {}),
                  !le && ie && k && !qe && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: yr,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Ue && !ie && k && !qe && /* @__PURE__ */ v.jsx(
              dn,
              {
                type: me.INFO,
                message: ov.EMAIL_NOT_FOUND,
                actionText: "Let's create one to continue?",
                onActionClick: () => {
                  ge(!1), W(!0);
                },
                onClose: () => ge(!1),
                className: "mb-4!"
              }
            ),
            Ue && qe && /* @__PURE__ */ v.jsx(
              dn,
              {
                type: me.ERROR,
                message: Je,
                onClose: () => {
                  ge(!1), Qe(!1), Y("");
                },
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ v.jsx(
              ba,
              {
                label: "Password",
                id: "password",
                type: q ? "text" : "password",
                value: y,
                onChange: (K) => {
                  b(K.target.value), D("");
                },
                placeholder: "Enter Password...",
                disabled: T,
                className: "w-full!",
                autoComplete: "current-password",
                error: j,
                endIcon: /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => C(!q),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    "aria-label": q ? "Hide password" : "Show password",
                    children: q ? /* @__PURE__ */ v.jsx(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ v.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          }
                        )
                      }
                    ) : /* @__PURE__ */ v.jsxs(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: [
                          /* @__PURE__ */ v.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }
                          ),
                          /* @__PURE__ */ v.jsx(
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
            /* @__PURE__ */ v.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
              /* @__PURE__ */ v.jsxs("label", { className: "flex! items-center! m-0!", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: X,
                    onChange: (K) => Q(K.target.checked),
                    className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                    "aria-label": "Remember me"
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  "span",
                  {
                    className: "text-gray-600!",
                    style: {
                      fontWeight: "500",
                      color: "#5F5B7D"
                    },
                    children: "Remember me"
                  }
                )
              ] }),
              /* @__PURE__ */ v.jsx(
                "a",
                {
                  href: "#",
                  className: "no-underline!",
                  style: {
                    fontWeight: "500",
                    color: "#5F5B7D"
                  },
                  onClick: (K) => {
                    K.preventDefault(), ye(!0);
                  },
                  children: "Forgot Password?"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              Kt,
              {
                type: Ft.SUBMIT,
                disabled: T || !g,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: T ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ v.jsxs(
                    "svg",
                    {
                      className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ v.jsx(
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
                        /* @__PURE__ */ v.jsx(
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
            /* @__PURE__ */ v.jsxs("div", { className: "relative! mt-4! mb-4!", children: [
              /* @__PURE__ */ v.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { className: "w-full! border-t! border-solid! border-gray-300!" }) }),
              /* @__PURE__ */ v.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ v.jsx(
              Kt,
              {
                type: Ft.BUTTON,
                variant: $t.OUTLINE,
                onClick: () => W(!0),
                disabled: T,
                className: "w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { children: "Create an Account" })
              }
            )
          ] })
        ] }),
        G && /* @__PURE__ */ v.jsx(Wc, { message: G, type: fe, onClose: () => V("") })
      ]
    }
  );
}, ub = (n) => {
  const { authority: r, subsidiary: s, onRedirect: c } = n, [o, d] = A.useState(!1);
  A.useEffect(() => (r ? (QE(r), console.log(`${et.AUTH} Authority override set to: ${r}`)) : (Ih(), console.log(`${et.AUTH} Using automatic authority detection`)), () => {
    Ih();
  }), [r]), A.useEffect(() => {
    (async () => {
      try {
        if (PE()) {
          d(!0);
          const q = n.redirectUrl || Pu();
          if (n.autoRedirection)
            window.location.href = q;
          else if (c && n.redirectUrl) {
            const C = n.redirectUrl || Pu(), j = localStorage.getItem(Ce.ACCESS_TOKEN);
            if (j) {
              const D = Jc(j);
              D && c(C, D);
            }
          }
          return;
        }
        const T = eb(), w = yv(Wt.ACCESS_TOKEN);
        if (T && w) {
          const q = localStorage.getItem(Ce.REFRESH_TOKEN);
          if (q) {
            const C = await IE(q);
            if (C && C.tokens && C.tokens.access_token) {
              const j = C.tokens, D = Jc(j.access_token);
              if (!D)
                return;
              const X = (D.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
              bi(Wt.ACCESS_TOKEN, j.access_token, X, !0), D.decoded.x_credentials && bi(
                Wt.X_CREDENTIAL,
                D.decoded.x_credentials,
                X,
                !1
              ), localStorage.setItem(Ce.ACCESS_TOKEN, j.access_token), localStorage.setItem(
                Ce.ACCESS_TOKEN_EXPIRES,
                (Date.now() + X * 1e3).toString()
              ), j.refresh_token && (localStorage.setItem(Ce.REFRESH_TOKEN, j.refresh_token), localStorage.getItem(Ce.REFRESH_TOKEN_TIME) && localStorage.setItem(Ce.REFRESH_TOKEN_TIME, Date.now().toString())), console.log(`${et.AUTH} Auto-login successful`), d(!0);
              const Q = n.redirectUrl || Pu();
              c && (console.log(
                `${et.AUTH} Triggering onRedirect callback with user session:`,
                D
              ), c(Q, D)), n.autoRedirection && (window.location.href = Q);
            }
          }
        } else
          localStorage.removeItem(Ce.REFRESH_TOKEN), localStorage.removeItem(Ce.REFRESH_TOKEN_TIME);
      } catch (b) {
        console.error(`${et.AUTH} Auto-login failed:`, b), localStorage.removeItem(Ce.REFRESH_TOKEN), localStorage.removeItem(Ce.REFRESH_TOKEN_TIME);
      }
    })();
  }, [n.redirectUrl]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const h = () => {
    n.handleClose && n.handleClose(), d(!0);
    const y = n.redirectUrl || Pu();
    if (c) {
      const b = localStorage.getItem(Ce.ACCESS_TOKEN);
      if (b) {
        const T = Jc(b);
        T && c(y, T);
      }
    }
    n.autoRedirection && setTimeout(() => {
      window.location.href = y;
    }, 100);
  }, g = (y) => {
    console.log(`${et.AUTH} Embedded login error:`, y);
  }, p = () => {
    n.handleClose && n.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(bp, { children: /* @__PURE__ */ v.jsx(
    vm,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(A.Fragment, { children: n.showLogin && !o && /* @__PURE__ */ v.jsx(
        ib,
        {
          onSuccess: h,
          onError: g,
          handleClose: p,
          authority: r,
          title: n.loginTitle,
          subtitle: n.loginSubtitle
        }
      ) })
    }
  ) }) });
};
class rb {
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
      return c ? (localStorage.setItem("subsidiary", c.token), c.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${s}`), null);
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
        console.warn(`[ThemeWidget] Brand not found: ${r}. Using default theme.`);
        return;
      }
      console.log("functionfunctionfunction", c), localStorage.setItem("subsidiary", c.token), localStorage.setItem(
        "brand_data",
        JSON.stringify({
          id: c.folder,
          domain: c.domain,
          name: c.name
        })
      );
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
async function em(n) {
  const r = new rb(n.cdnBaseUrl, n.shadowRoot), s = n.brandFolder || n.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (n.autoDetect) {
    const c = await r.detectBrandFromDomain();
    c && await r.loadTheme(c);
  }
  return r;
}
const tm = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class n extends HTMLElement {
    root = null;
    static get observedAttributes() {
      return [
        "authority",
        "subsidiary",
        "redirectUrl",
        "loginTitle",
        "loginSubtitle",
        "show-login",
        "custom-primary-color",
        "customPrimaryColor",
        "auto-redirection",
        "autoRedirection"
      ];
    }
    // Store function props
    onRedirect;
    onClose;
    onLogout;
    connectedCallback() {
      const s = this.attachShadow({ mode: "open" });
      if (tm) {
        const d = document.createElement("style");
        d.textContent = tm, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const c = this.getAttribute("subsidiary");
      c && c.trim() !== "" ? this.loadTheme(c, s) : this.loadThemeFromDomain(s);
      const o = document.createElement("div");
      s.appendChild(o), this.root = uv.createRoot(o), this.render();
    }
    applyCustomPrimaryColor(s) {
      const c = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (c && c.trim() !== "") {
        const o = document.createElement("style");
        let d = c.trim();
        /^[0-9A-Fa-f]{6}$/.test(d) && (d = `#${d}`), o.textContent = `
          :host {
            --color-primary: ${d};
            --color-primary-light: ${d};
            --button-primary-bg: ${d};
            --button-primary-bg-hover: ${d};
            --color-border-focus: ${d};
          }
        `, s.appendChild(o), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(s, c) {
      try {
        await em({
          brandFolder: s,
          shadowRoot: c
        });
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await em({
          shadowRoot: s,
          autoDetect: !0
        });
      } catch (c) {
        console.error("[Widget] Failed to auto-detect theme:", c), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(s, c, o) {
      if (c !== o) {
        if (s === "custom-primary-color" || s === "customPrimaryColor") {
          const d = this.shadowRoot;
          d && this.applyCustomPrimaryColor(d);
        }
        this.render();
      }
    }
    disconnectedCallback() {
      this.root && (this.root.unmount(), this.root = null);
    }
    handleRedirect = (s, c) => {
      this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(s, c));
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
      this.dispatchEvent(o), console.log("[Widget] Redirect event dispatched");
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
      const c = this.getAttribute("authority") || mv(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: c,
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
      console.log("[Widget] logout() called"), tb(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
      const s = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(s);
    }
    render() {
      if (!this.root) return;
      const s = this.getProps();
      this.root.render(
        /* @__PURE__ */ v.jsx(Kp, { children: /* @__PURE__ */ v.jsx(A.StrictMode, { children: /* @__PURE__ */ v.jsx(ub, { ...s }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", n);
}
