
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var Oc = { exports: {} }, di = {};
var ph;
function Sg() {
  if (ph) return di;
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
  return di.Fragment = r, di.jsx = s, di.jsxs = s, di;
}
var vh;
function Rg() {
  return vh || (vh = 1, Oc.exports = Sg()), Oc.exports;
}
var v = Rg(), wc = { exports: {} }, ne = {}, Eh;
function Tg() {
  if (Eh) return ne;
  Eh = 1;
  var n = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function C(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var M = {
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
  function Z(S, L, K) {
    this.props = S, this.context = L, this.refs = V, this.updater = K || M;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(S, L) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, L, "setState");
  }, Z.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function k() {
  }
  k.prototype = Z.prototype;
  function P(S, L, K) {
    this.props = S, this.context = L, this.refs = V, this.updater = K || M;
  }
  var te = P.prototype = new k();
  te.constructor = P, U(te, Z.prototype), te.isPureReactComponent = !0;
  var me = Array.isArray;
  function W() {
  }
  var $ = { H: null, A: null, T: null, S: null }, ce = Object.prototype.hasOwnProperty;
  function Te(S, L, K) {
    var G = K.ref;
    return {
      $$typeof: r,
      type: S,
      key: L,
      ref: G !== void 0 ? G : null,
      props: K
    };
  }
  function tt(S, L) {
    return Te(S.type, L, S.props);
  }
  function Ee(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function He(S) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(K) {
      return L[K];
    });
  }
  var Ve = /\/+/g;
  function Ke(S, L) {
    return typeof S == "object" && S !== null && S.key != null ? He("" + S.key) : L.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(W, W) : (S.status = "pending", S.then(
          function(L) {
            S.status === "pending" && (S.status = "fulfilled", S.value = L);
          },
          function(L) {
            S.status === "pending" && (S.status = "rejected", S.reason = L);
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
  function Y(S, L, K, G, le) {
    var ae = typeof S;
    (ae === "undefined" || ae === "boolean") && (S = null);
    var be = !1;
    if (S === null) be = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case s:
              be = !0;
              break;
            case T:
              return be = S._init, Y(
                be(S._payload),
                L,
                K,
                G,
                le
              );
          }
      }
    if (be)
      return le = le(S), be = G === "" ? "." + Ke(S, 0) : G, me(le) ? (K = "", be != null && (K = be.replace(Ve, "$&/") + "/"), Y(le, L, K, "", function(ta) {
        return ta;
      })) : le != null && (Ee(le) && (le = tt(
        le,
        K + (le.key == null || S && S.key === le.key ? "" : ("" + le.key).replace(
          Ve,
          "$&/"
        ) + "/") + be
      )), L.push(le)), 1;
    be = 0;
    var lt = G === "" ? "." : G + ":";
    if (me(S))
      for (var Be = 0; Be < S.length; Be++)
        G = S[Be], ae = lt + Ke(G, Be), be += Y(
          G,
          L,
          K,
          ae,
          le
        );
    else if (Be = C(S), typeof Be == "function")
      for (S = Be.call(S), Be = 0; !(G = S.next()).done; )
        G = G.value, ae = lt + Ke(G, Be++), be += Y(
          G,
          L,
          K,
          ae,
          le
        );
    else if (ae === "object") {
      if (typeof S.then == "function")
        return Y(
          X(S),
          L,
          K,
          G,
          le
        );
      throw L = String(S), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function Q(S, L, K) {
    if (S == null) return S;
    var G = [], le = 0;
    return Y(S, G, "", "", function(ae) {
      return L.call(K, ae, le++);
    }), G;
  }
  function ie(S) {
    if (S._status === -1) {
      var L = S._result;
      L = L(), L.then(
        function(K) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = K);
        },
        function(K) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = K);
        }
      ), S._status === -1 && (S._status = 0, S._result = L);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var oe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, De = {
    map: Q,
    forEach: function(S, L, K) {
      Q(
        S,
        function() {
          L.apply(this, arguments);
        },
        K
      );
    },
    count: function(S) {
      var L = 0;
      return Q(S, function() {
        L++;
      }), L;
    },
    toArray: function(S) {
      return Q(S, function(L) {
        return L;
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
  return ne.Activity = w, ne.Children = De, ne.Component = Z, ne.Fragment = c, ne.Profiler = d, ne.PureComponent = P, ne.StrictMode = o, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return $.H.useMemoCache(S);
    }
  }, ne.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(S, L, K) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var G = U({}, S.props), le = S.key;
    if (L != null)
      for (ae in L.key !== void 0 && (le = "" + L.key), L)
        !ce.call(L, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && L.ref === void 0 || (G[ae] = L[ae]);
    var ae = arguments.length - 2;
    if (ae === 1) G.children = K;
    else if (1 < ae) {
      for (var be = Array(ae), lt = 0; lt < ae; lt++)
        be[lt] = arguments[lt + 2];
      G.children = be;
    }
    return Te(S.type, le, G);
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
  }, ne.createElement = function(S, L, K) {
    var G, le = {}, ae = null;
    if (L != null)
      for (G in L.key !== void 0 && (ae = "" + L.key), L)
        ce.call(L, G) && G !== "key" && G !== "__self" && G !== "__source" && (le[G] = L[G]);
    var be = arguments.length - 2;
    if (be === 1) le.children = K;
    else if (1 < be) {
      for (var lt = Array(be), Be = 0; Be < be; Be++)
        lt[Be] = arguments[Be + 2];
      le.children = lt;
    }
    if (S && S.defaultProps)
      for (G in be = S.defaultProps, be)
        le[G] === void 0 && (le[G] = be[G]);
    return Te(S, ae, le);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ne.isValidElement = Ee, ne.lazy = function(S) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: S },
      _init: ie
    };
  }, ne.memo = function(S, L) {
    return {
      $$typeof: b,
      type: S,
      compare: L === void 0 ? null : L
    };
  }, ne.startTransition = function(S) {
    var L = $.T, K = {};
    $.T = K;
    try {
      var G = S(), le = $.S;
      le !== null && le(K, G), typeof G == "object" && G !== null && typeof G.then == "function" && G.then(W, oe);
    } catch (ae) {
      oe(ae);
    } finally {
      L !== null && K.types !== null && (L.types = K.types), $.T = L;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, ne.use = function(S) {
    return $.H.use(S);
  }, ne.useActionState = function(S, L, K) {
    return $.H.useActionState(S, L, K);
  }, ne.useCallback = function(S, L) {
    return $.H.useCallback(S, L);
  }, ne.useContext = function(S) {
    return $.H.useContext(S);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(S, L) {
    return $.H.useDeferredValue(S, L);
  }, ne.useEffect = function(S, L) {
    return $.H.useEffect(S, L);
  }, ne.useEffectEvent = function(S) {
    return $.H.useEffectEvent(S);
  }, ne.useId = function() {
    return $.H.useId();
  }, ne.useImperativeHandle = function(S, L, K) {
    return $.H.useImperativeHandle(S, L, K);
  }, ne.useInsertionEffect = function(S, L) {
    return $.H.useInsertionEffect(S, L);
  }, ne.useLayoutEffect = function(S, L) {
    return $.H.useLayoutEffect(S, L);
  }, ne.useMemo = function(S, L) {
    return $.H.useMemo(S, L);
  }, ne.useOptimistic = function(S, L) {
    return $.H.useOptimistic(S, L);
  }, ne.useReducer = function(S, L, K) {
    return $.H.useReducer(S, L, K);
  }, ne.useRef = function(S) {
    return $.H.useRef(S);
  }, ne.useState = function(S) {
    return $.H.useState(S);
  }, ne.useSyncExternalStore = function(S, L, K) {
    return $.H.useSyncExternalStore(
      S,
      L,
      K
    );
  }, ne.useTransition = function() {
    return $.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var bh;
function to() {
  return bh || (bh = 1, wc.exports = Tg()), wc.exports;
}
var x = to();
var Sh = "popstate";
function Ag(n = {}) {
  function r(c, o) {
    let { pathname: d, search: h, hash: g } = c.location;
    return Jc(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : bi(o);
  }
  return Cg(
    r,
    s,
    null,
    n
  );
}
function qe(n, r) {
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
function xg() {
  return Math.random().toString(36).substring(2, 10);
}
function Rh(n, r) {
  return {
    usr: n.state,
    key: n.key,
    idx: r
  };
}
function Jc(n, r, s = null, c) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? hn(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || c || xg()
  };
}
function bi({
  pathname: n = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s), n;
}
function hn(n) {
  let r = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && (r.hash = n.substring(s), n = n.substring(0, s));
    let c = n.indexOf("?");
    c >= 0 && (r.search = n.substring(c), n = n.substring(0, c)), n && (r.pathname = n);
  }
  return r;
}
function Cg(n, r, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c, h = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    g = "POP";
    let U = b(), V = U == null ? null : U - y;
    y = U, p && p({ action: g, location: M.location, delta: V });
  }
  function w(U, V) {
    g = "PUSH";
    let Z = Jc(M.location, U, V);
    y = b() + 1;
    let k = Rh(Z, y), P = M.createHref(Z);
    try {
      h.pushState(k, "", P);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError")
        throw te;
      o.location.assign(P);
    }
    d && p && p({ action: g, location: M.location, delta: 1 });
  }
  function q(U, V) {
    g = "REPLACE";
    let Z = Jc(M.location, U, V);
    y = b();
    let k = Rh(Z, y), P = M.createHref(Z);
    h.replaceState(k, "", P), d && p && p({ action: g, location: M.location, delta: 0 });
  }
  function C(U) {
    return Ng(U);
  }
  let M = {
    get action() {
      return g;
    },
    get location() {
      return n(o, h);
    },
    listen(U) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Sh, T), p = U, () => {
        o.removeEventListener(Sh, T), p = null;
      };
    },
    createHref(U) {
      return r(o, U);
    },
    createURL: C,
    encodeLocation(U) {
      let V = C(U);
      return {
        pathname: V.pathname,
        search: V.search,
        hash: V.hash
      };
    },
    push: w,
    replace: q,
    go(U) {
      return h.go(U);
    }
  };
  return M;
}
function Ng(n, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), qe(s, "No window.location.(origin|href) available to create URL");
  let c = typeof n == "string" ? n : bi(n);
  return c = c.replace(/ $/, "%20"), !r && c.startsWith("//") && (c = s + c), new URL(c, s);
}
function lm(n, r, s = "/") {
  return _g(n, r, s, !1);
}
function _g(n, r, s, c) {
  let o = typeof r == "string" ? hn(r) : r, d = Nl(o.pathname || "/", s);
  if (d == null)
    return null;
  let h = am(n);
  Og(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = Gg(d);
    g = Bg(
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
      qe(
        b.relativePath.startsWith(c),
        `Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(c.length);
    }
    let T = xl([c, b.relativePath]), w = s.concat(b);
    h.children && h.children.length > 0 && (qe(
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
      score: Lg(T, h.index),
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
function Og(n) {
  n.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Hg(
      r.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var wg = /^:[\w-]+$/, Dg = 3, zg = 2, Ug = 1, Mg = 10, jg = -2, Th = (n) => n === "*";
function Lg(n, r) {
  let s = n.split("/"), c = s.length;
  return s.some(Th) && (c += jg), r && (c += zg), s.filter((o) => !Th(o)).reduce(
    (o, d) => o + (wg.test(d) ? Dg : d === "" ? Ug : Mg),
    c
  );
}
function Hg(n, r) {
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
function Bg(n, r, s = !1) {
  let { routesMeta: c } = n, o = {}, d = "/", h = [];
  for (let g = 0; g < c.length; ++g) {
    let p = c[g], y = g === c.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", T = nr(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), w = p.route;
    if (!T && y && s && !c[c.length - 1].route.index && (T = nr(
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
      pathname: xl([d, T.pathname]),
      pathnameBase: Kg(
        xl([d, T.pathnameBase])
      ),
      route: w
    }), T.pathnameBase !== "/" && (d = xl([d, T.pathnameBase]));
  }
  return h;
}
function nr(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, c] = qg(
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
function qg(n, r = !1, s = !0) {
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
function Gg(n) {
  try {
    return n.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return It(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), n;
  }
}
function Nl(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, c = n.charAt(s);
  return c && c !== "/" ? null : n.slice(s) || "/";
}
var im = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Yg = (n) => im.test(n);
function Xg(n, r = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: o = ""
  } = typeof n == "string" ? hn(n) : n, d;
  if (s)
    if (Yg(s))
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
    search: Qg(c),
    hash: Zg(o)
  };
}
function Ah(n, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((o) => {
    o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
  }), s.length > 1 ? s.join("/") : "/";
}
function Dc(n, r, s, c) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Vg(n) {
  return n.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function um(n) {
  let r = Vg(n);
  return r.map(
    (s, c) => c === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function rm(n, r, s, c = !1) {
  let o;
  typeof n == "string" ? o = hn(n) : (o = { ...n }, qe(
    !o.pathname || !o.pathname.includes("?"),
    Dc("?", "pathname", "search", o)
  ), qe(
    !o.pathname || !o.pathname.includes("#"),
    Dc("#", "pathname", "hash", o)
  ), qe(
    !o.search || !o.search.includes("#"),
    Dc("#", "search", "hash", o)
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
  let p = Xg(o, g), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var xl = (n) => n.join("/").replace(/\/\/+/g, "/"), Kg = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), Qg = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Zg = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n, kg = class {
  constructor(n, r, s, c = !1) {
    this.status = n, this.statusText = r || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function Jg(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
function $g(n) {
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
      let d = new URL(window.location.href), h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = Nl(h.pathname, r);
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
var Fg = [
  "GET",
  ...om
];
new Set(Fg);
var mn = x.createContext(null);
mn.displayName = "DataRouter";
var ur = x.createContext(null);
ur.displayName = "DataRouterState";
var Wg = x.createContext(!1), fm = x.createContext({
  isTransitioning: !1
});
fm.displayName = "ViewTransition";
var Ig = x.createContext(
  /* @__PURE__ */ new Map()
);
Ig.displayName = "Fetchers";
var Pg = x.createContext(null);
Pg.displayName = "Await";
var Kt = x.createContext(
  null
);
Kt.displayName = "Navigation";
var Ti = x.createContext(
  null
);
Ti.displayName = "Location";
var _l = x.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_l.displayName = "Route";
var lo = x.createContext(null);
lo.displayName = "RouteError";
var dm = "REACT_ROUTER_ERROR", ep = "REDIRECT", tp = "ROUTE_ERROR_RESPONSE";
function lp(n) {
  if (n.startsWith(`${dm}:${ep}:{`))
    try {
      let r = JSON.parse(n.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function ap(n) {
  if (n.startsWith(
    `${dm}:${tp}:{`
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
function np(n, { relative: r } = {}) {
  qe(
    Ai(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = x.useContext(Kt), { hash: o, pathname: d, search: h } = xi(n, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : xl([s, d])), c.createHref({ pathname: g, search: h, hash: o });
}
function Ai() {
  return x.useContext(Ti) != null;
}
function Aa() {
  return qe(
    Ai(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), x.useContext(Ti).location;
}
var hm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function mm(n) {
  x.useContext(Kt).static || x.useLayoutEffect(n);
}
function ip() {
  let { isDataRoute: n } = x.useContext(_l);
  return n ? vp() : up();
}
function up() {
  qe(
    Ai(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = x.useContext(mn), { basename: r, navigator: s } = x.useContext(Kt), { matches: c } = x.useContext(_l), { pathname: o } = Aa(), d = JSON.stringify(um(c)), h = x.useRef(!1);
  return mm(() => {
    h.current = !0;
  }), x.useCallback(
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
      n == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : xl([r, b.pathname])), (y.replace ? s.replace : s.push)(
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
x.createContext(null);
function xi(n, { relative: r } = {}) {
  let { matches: s } = x.useContext(_l), { pathname: c } = Aa(), o = JSON.stringify(um(s));
  return x.useMemo(
    () => rm(
      n,
      JSON.parse(o),
      c,
      r === "path"
    ),
    [n, o, c, r]
  );
}
function rp(n, r) {
  return ym(n, r);
}
function ym(n, r, s, c, o) {
  qe(
    Ai(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = x.useContext(Kt), { matches: h } = x.useContext(_l), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", T = g && g.route;
  {
    let Z = T && T.path || "";
    pm(
      y,
      !T || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`
    );
  }
  let w = Aa(), q;
  if (r) {
    let Z = typeof r == "string" ? hn(r) : r;
    qe(
      b === "/" || Z.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Z.pathname}" was given in the \`location\` prop.`
    ), q = Z;
  } else
    q = w;
  let C = q.pathname || "/", M = C;
  if (b !== "/") {
    let Z = b.replace(/^\//, "").split("/");
    M = "/" + C.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let U = lm(n, { pathname: M });
  It(
    T || U != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), It(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let V = dp(
    U && U.map(
      (Z) => Object.assign({}, Z, {
        params: Object.assign({}, p, Z.params),
        pathname: xl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Z.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Z.pathname
        ]),
        pathnameBase: Z.pathnameBase === "/" ? b : xl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Z.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Z.pathnameBase
        ])
      })
    ),
    h,
    s,
    c,
    o
  );
  return r && V ? /* @__PURE__ */ x.createElement(
    Ti.Provider,
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
    V
  ) : V;
}
function sp() {
  let n = pp(), r = Jg(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), s = n instanceof Error ? n.stack : null, c = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: c }, d = { padding: "2px 4px", backgroundColor: c }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), h = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ x.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ x.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ x.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ x.createElement("pre", { style: o }, s) : null, h);
}
var cp = /* @__PURE__ */ x.createElement(sp, null), gm = class extends x.Component {
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
      const s = ap(n.digest);
      s && (n = s);
    }
    let r = n !== void 0 ? /* @__PURE__ */ x.createElement(_l.Provider, { value: this.props.routeContext }, /* @__PURE__ */ x.createElement(
      lo.Provider,
      {
        value: n,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ x.createElement(op, { error: n }, r) : r;
  }
};
gm.contextType = Wg;
var zc = /* @__PURE__ */ new WeakMap();
function op({
  children: n,
  error: r
}) {
  let { basename: s } = x.useContext(Kt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = lp(r.digest);
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
      return /* @__PURE__ */ x.createElement(
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
function fp({ routeContext: n, match: r, children: s }) {
  let c = x.useContext(mn);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ x.createElement(_l.Provider, { value: n }, s);
}
function dp(n, r = [], s = null, c = null, o = null) {
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
    qe(
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
      unstable_pattern: $g(s.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (b, T, w) => {
      let q, C = !1, M = null, U = null;
      s && (q = h && T.route.id ? h[T.route.id] : void 0, M = T.route.errorElement || cp, g && (p < 0 && w === 0 ? (pm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), C = !0, U = null) : p === w && (C = !0, U = T.route.hydrateFallbackElement || null)));
      let V = r.concat(d.slice(0, w + 1)), Z = () => {
        let k;
        return q ? k = M : C ? k = U : T.route.Component ? k = /* @__PURE__ */ x.createElement(T.route.Component, null) : T.route.element ? k = T.route.element : k = b, /* @__PURE__ */ x.createElement(
          fp,
          {
            match: T,
            routeContext: {
              outlet: b,
              matches: V,
              isDataRoute: s != null
            },
            children: k
          }
        );
      };
      return s && (T.route.ErrorBoundary || T.route.errorElement || w === 0) ? /* @__PURE__ */ x.createElement(
        gm,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: M,
          error: q,
          children: Z(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
          onError: y
        }
      ) : Z();
    },
    null
  );
}
function ao(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function hp(n) {
  let r = x.useContext(mn);
  return qe(r, ao(n)), r;
}
function mp(n) {
  let r = x.useContext(ur);
  return qe(r, ao(n)), r;
}
function yp(n) {
  let r = x.useContext(_l);
  return qe(r, ao(n)), r;
}
function no(n) {
  let r = yp(n), s = r.matches[r.matches.length - 1];
  return qe(
    s.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function gp() {
  return no(
    "useRouteId"
    /* UseRouteId */
  );
}
function pp() {
  let n = x.useContext(lo), r = mp(
    "useRouteError"
    /* UseRouteError */
  ), s = no(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : r.errors?.[s];
}
function vp() {
  let { router: n } = hp(
    "useNavigate"
    /* UseNavigateStable */
  ), r = no(
    "useNavigate"
    /* UseNavigateStable */
  ), s = x.useRef(!1);
  return mm(() => {
    s.current = !0;
  }), x.useCallback(
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
x.memo(Ep);
function Ep({
  routes: n,
  future: r,
  state: s,
  onError: c
}) {
  return ym(n, void 0, s, c, r);
}
function vm(n) {
  qe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function bp({
  basename: n = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h
}) {
  qe(
    !Ai(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = n.replace(/^\/*/, "/"), p = x.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, o, d, h]
  );
  typeof s == "string" && (s = hn(s));
  let {
    pathname: y = "/",
    search: b = "",
    hash: T = "",
    state: w = null,
    key: q = "default"
  } = s, C = x.useMemo(() => {
    let M = Nl(y, g);
    return M == null ? null : {
      location: {
        pathname: M,
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
  ), C == null ? null : /* @__PURE__ */ x.createElement(Kt.Provider, { value: p }, /* @__PURE__ */ x.createElement(Ti.Provider, { children: r, value: C }));
}
function Sp({
  children: n,
  location: r
}) {
  return rp($c(n), r);
}
function $c(n, r = []) {
  let s = [];
  return x.Children.forEach(n, (c, o) => {
    if (!x.isValidElement(c))
      return;
    let d = [...r, o];
    if (c.type === x.Fragment) {
      s.push.apply(
        s,
        $c(c.props.children, d)
      );
      return;
    }
    qe(
      c.type === vm,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), qe(
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
    c.props.children && (h.children = $c(
      c.props.children,
      d
    )), s.push(h);
  }), s;
}
var Pu = "get", er = "application/x-www-form-urlencoded";
function rr(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function Rp(n) {
  return rr(n) && n.tagName.toLowerCase() === "button";
}
function Tp(n) {
  return rr(n) && n.tagName.toLowerCase() === "form";
}
function Ap(n) {
  return rr(n) && n.tagName.toLowerCase() === "input";
}
function xp(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Cp(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !xp(n);
}
var Ju = null;
function Np() {
  if (Ju === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Ju = !1;
    } catch {
      Ju = !0;
    }
  return Ju;
}
var _p = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Uc(n) {
  return n != null && !_p.has(n) ? (It(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${er}"`
  ), null) : n;
}
function Op(n, r) {
  let s, c, o, d, h;
  if (Tp(n)) {
    let g = n.getAttribute("action");
    c = g ? Nl(g, r) : null, s = n.getAttribute("method") || Pu, o = Uc(n.getAttribute("enctype")) || er, d = new FormData(n);
  } else if (Rp(n) || Ap(n) && (n.type === "submit" || n.type === "image")) {
    let g = n.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = n.getAttribute("formaction") || g.getAttribute("action");
    if (c = p ? Nl(p, r) : null, s = n.getAttribute("formmethod") || g.getAttribute("method") || Pu, o = Uc(n.getAttribute("formenctype")) || Uc(g.getAttribute("enctype")) || er, d = new FormData(g, n), !Np()) {
      let { name: y, type: b, value: T } = n;
      if (b === "image") {
        let w = y ? `${y}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (rr(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Pu, c = null, o = er, h = n;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: c, method: s.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function io(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
function wp(n, r, s) {
  let c = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return c.pathname === "/" ? c.pathname = `_root.${s}` : r && Nl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`, c;
}
async function Dp(n, r) {
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
function zp(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function Up(n, r, s) {
  let c = await Promise.all(
    n.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let h = await Dp(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Hp(
    c.flat(1).filter(zp).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
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
  return jp(
    n.map((c) => {
      let o = r.routes[c.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function jp(n) {
  return [...new Set(n)];
}
function Lp(n) {
  let r = {}, s = Object.keys(n).sort();
  for (let c of s)
    r[c] = n[c];
  return r;
}
function Hp(n, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((c, o) => {
    let d = JSON.stringify(Lp(o));
    return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
  }, []);
}
function Em() {
  let n = x.useContext(mn);
  return io(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function Bp() {
  let n = x.useContext(ur);
  return io(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var uo = x.createContext(void 0);
uo.displayName = "FrameworkContext";
function bm() {
  let n = x.useContext(uo);
  return io(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function qp(n, r) {
  let s = x.useContext(uo), [c, o] = x.useState(!1), [d, h] = x.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: T } = r, w = x.useRef(null);
  x.useEffect(() => {
    if (n === "render" && h(!0), n === "viewport") {
      let M = (V) => {
        V.forEach((Z) => {
          h(Z.isIntersecting);
        });
      }, U = new IntersectionObserver(M, { threshold: 0.5 });
      return w.current && U.observe(w.current), () => {
        U.disconnect();
      };
    }
  }, [n]), x.useEffect(() => {
    if (c) {
      let M = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(M);
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
      onFocus: hi(g, q),
      onBlur: hi(p, C),
      onMouseEnter: hi(y, q),
      onMouseLeave: hi(b, C),
      onTouchStart: hi(T, q)
    }
  ] : [!1, w, {}];
}
function hi(n, r) {
  return (s) => {
    n && n(s), s.defaultPrevented || r(s);
  };
}
function Gp({ page: n, ...r }) {
  let { router: s } = Em(), c = x.useMemo(
    () => lm(s.routes, n, s.basename),
    [s.routes, n, s.basename]
  );
  return c ? /* @__PURE__ */ x.createElement(Xp, { page: n, matches: c, ...r }) : null;
}
function Yp(n) {
  let { manifest: r, routeModules: s } = bm(), [c, o] = x.useState([]);
  return x.useEffect(() => {
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
function Xp({
  page: n,
  matches: r,
  ...s
}) {
  let c = Aa(), { manifest: o, routeModules: d } = bm(), { basename: h } = Em(), { loaderData: g, matches: p } = Bp(), y = x.useMemo(
    () => Ch(
      n,
      r,
      p,
      o,
      c,
      "data"
    ),
    [n, r, p, o, c]
  ), b = x.useMemo(
    () => Ch(
      n,
      r,
      p,
      o,
      c,
      "assets"
    ),
    [n, r, p, o, c]
  ), T = x.useMemo(() => {
    if (n === c.pathname + c.search + c.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), M = !1;
    if (r.forEach((V) => {
      let Z = o.routes[V.route.id];
      !Z || !Z.hasLoader || (!y.some((k) => k.route.id === V.route.id) && V.route.id in g && d[V.route.id]?.shouldRevalidate || Z.hasClientLoader ? M = !0 : C.add(V.route.id));
    }), C.size === 0)
      return [];
    let U = wp(n, h, "data");
    return M && C.size > 0 && U.searchParams.set(
      "_routes",
      r.filter((V) => C.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [U.pathname + U.search];
  }, [
    h,
    g,
    c,
    o,
    y,
    r,
    n,
    d
  ]), w = x.useMemo(
    () => Mp(b, o),
    [b, o]
  ), q = Yp(b);
  return /* @__PURE__ */ x.createElement(x.Fragment, null, T.map((C) => /* @__PURE__ */ x.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), w.map((C) => /* @__PURE__ */ x.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), q.map(({ key: C, link: M }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ x.createElement("link", { key: C, nonce: s.nonce, ...M })
  )));
}
function Vp(...n) {
  return (r) => {
    n.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var Kp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Kp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function Qp({
  basename: n,
  children: r,
  unstable_useTransitions: s,
  window: c
}) {
  let o = x.useRef();
  o.current == null && (o.current = Ag({ window: c, v5Compat: !0 }));
  let d = o.current, [h, g] = x.useState({
    action: d.action,
    location: d.location
  }), p = x.useCallback(
    (y) => {
      s === !1 ? g(y) : x.startTransition(() => g(y));
    },
    [s]
  );
  return x.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ x.createElement(
    bp,
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
var Sm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Rm = x.forwardRef(
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
    let { basename: M, unstable_useTransitions: U } = x.useContext(Kt), V = typeof y == "string" && Sm.test(y), Z = cm(y, M);
    y = Z.to;
    let k = np(y, { relative: o }), [P, te, me] = qp(
      c,
      q
    ), W = $p(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: T,
      unstable_defaultShouldRevalidate: w,
      unstable_useTransitions: U
    });
    function $(Te) {
      r && r(Te), Te.defaultPrevented || W(Te);
    }
    let ce = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ x.createElement(
        "a",
        {
          ...q,
          ...me,
          href: Z.absoluteURL || k,
          onClick: Z.isExternal || d ? r : $,
          ref: Vp(C, te),
          target: p,
          "data-discover": !V && s === "render" ? "true" : void 0
        }
      )
    );
    return P && !V ? /* @__PURE__ */ x.createElement(x.Fragment, null, ce, /* @__PURE__ */ x.createElement(Gp, { page: k })) : ce;
  }
);
Rm.displayName = "Link";
var Zp = x.forwardRef(
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
    let T = xi(h, { relative: y.relative }), w = Aa(), q = x.useContext(ur), { navigator: C, basename: M } = x.useContext(Kt), U = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ev(T) && g === !0, V = C.encodeLocation ? C.encodeLocation(T).pathname : T.pathname, Z = w.pathname, k = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (Z = Z.toLowerCase(), k = k ? k.toLowerCase() : null, V = V.toLowerCase()), k && M && (k = Nl(k, M) || k);
    const P = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let te = Z === V || !o && Z.startsWith(V) && Z.charAt(P) === "/", me = k != null && (k === V || !o && k.startsWith(V) && k.charAt(V.length) === "/"), W = {
      isActive: te,
      isPending: me,
      isTransitioning: U
    }, $ = te ? r : void 0, ce;
    typeof c == "function" ? ce = c(W) : ce = [
      c,
      te ? "active" : null,
      me ? "pending" : null,
      U ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let Te = typeof d == "function" ? d(W) : d;
    return /* @__PURE__ */ x.createElement(
      Rm,
      {
        ...y,
        "aria-current": $,
        className: ce,
        ref: b,
        style: Te,
        to: h,
        viewTransition: g
      },
      typeof p == "function" ? p(W) : p
    );
  }
);
Zp.displayName = "NavLink";
var kp = x.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: c,
    replace: o,
    state: d,
    method: h = Pu,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: w,
    ...q
  }, C) => {
    let { unstable_useTransitions: M } = x.useContext(Kt), U = Ip(), V = Pp(g, { relative: y }), Z = h.toLowerCase() === "get" ? "get" : "post", k = typeof g == "string" && Sm.test(g), P = (te) => {
      if (p && p(te), te.defaultPrevented) return;
      te.preventDefault();
      let me = te.nativeEvent.submitter, W = me?.getAttribute("formmethod") || h, $ = () => U(me || te.currentTarget, {
        fetcherKey: r,
        method: W,
        navigate: s,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: T,
        unstable_defaultShouldRevalidate: w
      });
      M && s !== !1 ? x.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ x.createElement(
      "form",
      {
        ref: C,
        method: Z,
        action: V,
        onSubmit: c ? p : P,
        ...q,
        "data-discover": !k && n === "render" ? "true" : void 0
      }
    );
  }
);
kp.displayName = "Form";
function Jp(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tm(n) {
  let r = x.useContext(mn);
  return qe(r, Jp(n)), r;
}
function $p(n, {
  target: r,
  replace: s,
  state: c,
  preventScrollReset: o,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = ip(), b = Aa(), T = xi(n, { relative: d });
  return x.useCallback(
    (w) => {
      if (Cp(w, r)) {
        w.preventDefault();
        let q = s !== void 0 ? s : bi(b) === bi(T), C = () => y(n, {
          replace: q,
          state: c,
          preventScrollReset: o,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? x.startTransition(() => C()) : C();
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
var Fp = 0, Wp = () => `__${String(++Fp)}__`;
function Ip() {
  let { router: n } = Tm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = x.useContext(Kt), s = gp(), c = n.fetch, o = n.navigate;
  return x.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: T } = Op(
        d,
        r
      );
      if (h.navigate === !1) {
        let w = h.fetcherKey || Wp();
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
function Pp(n, { relative: r } = {}) {
  let { basename: s } = x.useContext(Kt), c = x.useContext(_l);
  qe(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1), d = { ...xi(n || ".", { relative: r }) }, h = Aa();
  if (n == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((T) => T).forEach((T) => g.append("index", T));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!n || n === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : xl([s, d.pathname])), bi(d);
}
function ev(n, { relative: r } = {}) {
  let s = x.useContext(fm);
  qe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Tm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = xi(n, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = Nl(s.currentLocation.pathname, c) || s.currentLocation.pathname, h = Nl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return nr(o.pathname, h) != null || nr(o.pathname, d) != null;
}
var Mc = { exports: {} }, ot = {};
var Nh;
function tv() {
  if (Nh) return ot;
  Nh = 1;
  var n = to();
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
  return ot.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, ot.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, ot.flushSync = function(p) {
    var y = h.T, b = c.p;
    try {
      if (h.T = null, c.p = 2, p) return p();
    } finally {
      h.T = y, c.p = b, c.d.f();
    }
  }, ot.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(p, y));
  }, ot.prefetchDNS = function(p) {
    typeof p == "string" && c.d.D(p);
  }, ot.preinit = function(p, y) {
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
  }, ot.preinitModule = function(p, y) {
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
  }, ot.preload = function(p, y) {
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
  }, ot.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        c.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(p);
  }, ot.requestFormReset = function(p) {
    c.d.r(p);
  }, ot.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, ot.useFormState = function(p, y, b) {
    return h.H.useFormState(p, y, b);
  }, ot.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, ot.version = "19.2.3", ot;
}
var _h;
function lv() {
  if (_h) return Mc.exports;
  _h = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Mc.exports = tv(), Mc.exports;
}
var jc = { exports: {} }, mi = {}, Lc = { exports: {} }, Hc = {};
var Oh;
function av() {
  return Oh || (Oh = 1, (function(n) {
    function r(X, Y) {
      var Q = X.length;
      X.push(Y);
      e: for (; 0 < Q; ) {
        var ie = Q - 1 >>> 1, oe = X[ie];
        if (0 < o(oe, Y))
          X[ie] = Y, X[Q] = oe, Q = ie;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function c(X) {
      if (X.length === 0) return null;
      var Y = X[0], Q = X.pop();
      if (Q !== Y) {
        X[0] = Q;
        e: for (var ie = 0, oe = X.length, De = oe >>> 1; ie < De; ) {
          var S = 2 * (ie + 1) - 1, L = X[S], K = S + 1, G = X[K];
          if (0 > o(L, Q))
            K < oe && 0 > o(G, L) ? (X[ie] = G, X[K] = Q, ie = K) : (X[ie] = L, X[S] = Q, ie = S);
          else if (K < oe && 0 > o(G, Q))
            X[ie] = G, X[K] = Q, ie = K;
          else break e;
        }
      }
      return Y;
    }
    function o(X, Y) {
      var Q = X.sortIndex - Y.sortIndex;
      return Q !== 0 ? Q : X.id - Y.id;
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
    var p = [], y = [], b = 1, T = null, w = 3, q = !1, C = !1, M = !1, U = !1, V = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function P(X) {
      for (var Y = s(y); Y !== null; ) {
        if (Y.callback === null) c(y);
        else if (Y.startTime <= X)
          c(y), Y.sortIndex = Y.expirationTime, r(p, Y);
        else break;
        Y = s(y);
      }
    }
    function te(X) {
      if (M = !1, P(X), !C)
        if (s(p) !== null)
          C = !0, me || (me = !0, Ee());
        else {
          var Y = s(y);
          Y !== null && Ke(te, Y.startTime - X);
        }
    }
    var me = !1, W = -1, $ = 5, ce = -1;
    function Te() {
      return U ? !0 : !(n.unstable_now() - ce < $);
    }
    function tt() {
      if (U = !1, me) {
        var X = n.unstable_now();
        ce = X;
        var Y = !0;
        try {
          e: {
            C = !1, M && (M = !1, Z(W), W = -1), q = !0;
            var Q = w;
            try {
              t: {
                for (P(X), T = s(p); T !== null && !(T.expirationTime > X && Te()); ) {
                  var ie = T.callback;
                  if (typeof ie == "function") {
                    T.callback = null, w = T.priorityLevel;
                    var oe = ie(
                      T.expirationTime <= X
                    );
                    if (X = n.unstable_now(), typeof oe == "function") {
                      T.callback = oe, P(X), Y = !0;
                      break t;
                    }
                    T === s(p) && c(p), P(X);
                  } else c(p);
                  T = s(p);
                }
                if (T !== null) Y = !0;
                else {
                  var De = s(y);
                  De !== null && Ke(
                    te,
                    De.startTime - X
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              T = null, w = Q, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? Ee() : me = !1;
        }
      }
    }
    var Ee;
    if (typeof k == "function")
      Ee = function() {
        k(tt);
      };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), Ve = He.port2;
      He.port1.onmessage = tt, Ee = function() {
        Ve.postMessage(null);
      };
    } else
      Ee = function() {
        V(tt, 0);
      };
    function Ke(X, Y) {
      W = V(function() {
        X(n.unstable_now());
      }, Y);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, n.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < X ? Math.floor(1e3 / X) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(X) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = w;
      }
      var Q = w;
      w = Y;
      try {
        return X();
      } finally {
        w = Q;
      }
    }, n.unstable_requestPaint = function() {
      U = !0;
    }, n.unstable_runWithPriority = function(X, Y) {
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
      var Q = w;
      w = X;
      try {
        return Y();
      } finally {
        w = Q;
      }
    }, n.unstable_scheduleCallback = function(X, Y, Q) {
      var ie = n.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ie + Q : ie) : Q = ie, X) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return oe = Q + oe, X = {
        id: b++,
        callback: Y,
        priorityLevel: X,
        startTime: Q,
        expirationTime: oe,
        sortIndex: -1
      }, Q > ie ? (X.sortIndex = Q, r(y, X), s(p) === null && X === s(y) && (M ? (Z(W), W = -1) : M = !0, Ke(te, Q - ie))) : (X.sortIndex = oe, r(p, X), C || q || (C = !0, me || (me = !0, Ee()))), X;
    }, n.unstable_shouldYield = Te, n.unstable_wrapCallback = function(X) {
      var Y = w;
      return function() {
        var Q = w;
        w = Y;
        try {
          return X.apply(this, arguments);
        } finally {
          w = Q;
        }
      };
    };
  })(Hc)), Hc;
}
var wh;
function nv() {
  return wh || (wh = 1, Lc.exports = av()), Lc.exports;
}
var Dh;
function iv() {
  if (Dh) return mi;
  Dh = 1;
  var n = {};
  var r = nv(), s = to(), c = lv();
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
  var w = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), k = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), me = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), ce = /* @__PURE__ */ Symbol.for("react.lazy"), Te = /* @__PURE__ */ Symbol.for("react.activity"), tt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ee = Symbol.iterator;
  function He(e) {
    return e === null || typeof e != "object" ? null : (e = Ee && e[Ee] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ve = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ve ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case U:
        return "Fragment";
      case Z:
        return "Profiler";
      case V:
        return "StrictMode";
      case me:
        return "Suspense";
      case W:
        return "SuspenseList";
      case Te:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case M:
          return "Portal";
        case P:
          return e.displayName || "Context";
        case k:
          return (e._context.displayName || "Context") + ".Consumer";
        case te:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Ke(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return Ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, Y = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, oe = [], De = -1;
  function S(e) {
    return { current: e };
  }
  function L(e) {
    0 > De || (e.current = oe[De], oe[De] = null, De--);
  }
  function K(e, t) {
    De++, oe[De] = e.current, e.current = t;
  }
  var G = S(null), le = S(null), ae = S(null), be = S(null);
  function lt(e, t) {
    switch (K(ae, t), K(le, e), K(G, null), t.nodeType) {
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
    L(G), K(G, e);
  }
  function Be() {
    L(G), L(le), L(ae);
  }
  function ta(e) {
    e.memoizedState !== null && K(be, e);
    var t = G.current, l = Y0(t, e.type);
    t !== l && (K(le, e), K(G, l));
  }
  function pe(e) {
    le.current === e && (L(G), L(le)), be.current === e && (L(be), si._currentValue = ie);
  }
  var el, at;
  function zt(e) {
    if (el === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        el = t && t[1] || "", at = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + el + e + at;
  }
  var ul = !1;
  function En(e, t) {
    if (!e || ul) return "";
    ul = !0;
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
                } catch (z) {
                  var O = z;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (z) {
                  O = z;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                O = z;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (z) {
            if (z && O && typeof z.stack == "string")
              return [z.stack, O.stack];
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
                  var j = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      ul = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? zt(l) : "";
  }
  function Im(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return zt(e.type);
      case 16:
        return zt("Lazy");
      case 13:
        return e.child !== t && t !== null ? zt("Suspense Fallback") : zt("Suspense");
      case 19:
        return zt("SuspenseList");
      case 0:
      case 15:
        return En(e.type, !1);
      case 11:
        return En(e.type.render, !1);
      case 1:
        return En(e.type, !0);
      case 31:
        return zt("Activity");
      default:
        return "";
    }
  }
  function go(e) {
    try {
      var t = "", l = null;
      do
        t += Im(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var mr = Object.prototype.hasOwnProperty, yr = r.unstable_scheduleCallback, gr = r.unstable_cancelCallback, Pm = r.unstable_shouldYield, e1 = r.unstable_requestPaint, Rt = r.unstable_now, t1 = r.unstable_getCurrentPriorityLevel, po = r.unstable_ImmediatePriority, vo = r.unstable_UserBlockingPriority, Di = r.unstable_NormalPriority, l1 = r.unstable_LowPriority, Eo = r.unstable_IdlePriority, a1 = r.log, n1 = r.unstable_setDisableYieldValue, bn = null, Tt = null;
  function Ol(e) {
    if (typeof a1 == "function" && n1(e), Tt && typeof Tt.setStrictMode == "function")
      try {
        Tt.setStrictMode(bn, e);
      } catch {
      }
  }
  var At = Math.clz32 ? Math.clz32 : r1, i1 = Math.log, u1 = Math.LN2;
  function r1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (i1(e) / u1 | 0) | 0;
  }
  var zi = 256, Ui = 262144, Mi = 4194304;
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
  function ji(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? i = la(a) : (f &= m, f !== 0 ? i = la(f) : l || (l = m & ~e, l !== 0 && (i = la(l))))) : (m = a & ~u, m !== 0 ? i = la(m) : f !== 0 ? i = la(f) : l || (l = a & ~e, l !== 0 && (i = la(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : i;
  }
  function Sn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function s1(e, t) {
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
    var e = Mi;
    return Mi <<= 1, (Mi & 62914560) === 0 && (Mi = 4194304), e;
  }
  function pr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Rn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function c1(e, t, l, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var j = 31 - At(l), B = 1 << j;
      m[j] = 0, E[j] = -1;
      var O = _[j];
      if (O !== null)
        for (_[j] = null, j = 0; j < O.length; j++) {
          var z = O[j];
          z !== null && (z.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && So(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function So(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - At(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Ro(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - At(l), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), l &= ~i;
    }
  }
  function To(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : vr(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function vr(e) {
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
  function Er(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ao() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : oh(e.type));
  }
  function xo(e, t) {
    var l = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = l;
    }
  }
  var wl = Math.random().toString(36).slice(2), nt = "__reactFiber$" + wl, ht = "__reactProps$" + wl, xa = "__reactContainer$" + wl, br = "__reactEvents$" + wl, o1 = "__reactListeners$" + wl, f1 = "__reactHandles$" + wl, Co = "__reactResources$" + wl, Tn = "__reactMarker$" + wl;
  function Sr(e) {
    delete e[nt], delete e[ht], delete e[br], delete e[o1], delete e[f1];
  }
  function Ca(e) {
    var t = e[nt];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[xa] || l[nt]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = J0(e); e !== null; ) {
            if (l = e[nt]) return l;
            e = J0(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Na(e) {
    if (e = e[nt] || e[xa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function An(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function _a(e) {
    var t = e[Co];
    return t || (t = e[Co] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ie(e) {
    e[Tn] = !0;
  }
  var No = /* @__PURE__ */ new Set(), _o = {};
  function aa(e, t) {
    Oa(e, t), Oa(e + "Capture", t);
  }
  function Oa(e, t) {
    for (_o[e] = t, e = 0; e < t.length; e++)
      No.add(t[e]);
  }
  var d1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oo = {}, wo = {};
  function h1(e) {
    return mr.call(wo, e) ? !0 : mr.call(Oo, e) ? !1 : d1.test(e) ? wo[e] = !0 : (Oo[e] = !0, !1);
  }
  function Li(e, t, l) {
    if (h1(t))
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
  function Hi(e, t, l) {
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
  function rl(e, t, l, a) {
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
  function Ut(e) {
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
  function m1(e, t, l) {
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
  function Rr(e) {
    if (!e._valueTracker) {
      var t = Do(e) ? "checked" : "value";
      e._valueTracker = m1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function zo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Do(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Bi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var y1 = /[\n"\\]/g;
  function Mt(e) {
    return e.replace(
      y1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tr(e, t, l, a, i, u, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Ar(e, f, Ut(t)) : l != null ? Ar(e, f, Ut(l)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Ut(m) : e.removeAttribute("name");
  }
  function Uo(e, t, l, a, i, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Rr(e);
        return;
      }
      l = l != null ? "" + Ut(l) : "", t = t != null ? "" + Ut(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = m ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Rr(e);
  }
  function Ar(e, t, l) {
    t === "number" && Bi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function wa(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < l.length; i++)
        t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Ut(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Mo(e, t, l) {
    if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Ut(l) : "";
  }
  function jo(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (X(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Ut(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Rr(e);
  }
  function Da(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var g1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lo(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || g1.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
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
  function xr(e) {
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
  var p1 = /* @__PURE__ */ new Map([
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
  ]), v1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qi(e) {
    return v1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function sl() {
  }
  var Cr = null;
  function Nr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var za = null, Ua = null;
  function Bo(e) {
    var t = Na(e);
    if (t && (e = t.stateNode)) {
      var l = e[ht] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Tr(
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
              'input[name="' + Mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var i = a[ht] || null;
                if (!i) throw Error(o(90));
                Tr(
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
              a = l[t], a.form === e.form && zo(a);
          }
          break e;
        case "textarea":
          Mo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && wa(e, !!l.multiple, t, !1);
      }
    }
  }
  var _r = !1;
  function qo(e, t, l) {
    if (_r) return e(t, l);
    _r = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (_r = !1, (za !== null || Ua !== null) && (Cu(), za && (t = za, e = Ua, Ua = za = null, Bo(t), e)))
        for (t = 0; t < e.length; t++) Bo(e[t]);
    }
  }
  function xn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[ht] || null;
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
  var cl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Or = !1;
  if (cl)
    try {
      var Cn = {};
      Object.defineProperty(Cn, "passive", {
        get: function() {
          Or = !0;
        }
      }), window.addEventListener("test", Cn, Cn), window.removeEventListener("test", Cn, Cn);
    } catch {
      Or = !1;
    }
  var Dl = null, wr = null, Gi = null;
  function Go() {
    if (Gi) return Gi;
    var e, t = wr, l = t.length, a, i = "value" in Dl ? Dl.value : Dl.textContent, u = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === i[u - a]; a++) ;
    return Gi = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Yi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Xi() {
    return !0;
  }
  function Yo() {
    return !1;
  }
  function mt(e) {
    function t(l, a, i, u, f) {
      this._reactName = l, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Xi : Yo, this.isPropagationStopped = Yo, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Xi);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Xi);
      },
      persist: function() {
      },
      isPersistent: Xi
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
  }, Vi = mt(na), Nn = w({}, na, { view: 0, detail: 0 }), E1 = mt(Nn), Dr, zr, _n, Ki = w({}, Nn, {
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
    getModifierState: Mr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== _n && (_n && e.type === "mousemove" ? (Dr = e.screenX - _n.screenX, zr = e.screenY - _n.screenY) : zr = Dr = 0, _n = e), Dr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : zr;
    }
  }), Xo = mt(Ki), b1 = w({}, Ki, { dataTransfer: 0 }), S1 = mt(b1), R1 = w({}, Nn, { relatedTarget: 0 }), Ur = mt(R1), T1 = w({}, na, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), A1 = mt(T1), x1 = w({}, na, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), C1 = mt(x1), N1 = w({}, na, { data: 0 }), Vo = mt(N1), _1 = {
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
  }, O1 = {
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
  }, w1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function D1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = w1[e]) ? !!t[e] : !1;
  }
  function Mr() {
    return D1;
  }
  var z1 = w({}, Nn, {
    key: function(e) {
      if (e.key) {
        var t = _1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Yi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? O1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mr,
    charCode: function(e) {
      return e.type === "keypress" ? Yi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), U1 = mt(z1), M1 = w({}, Ki, {
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
  }), Ko = mt(M1), j1 = w({}, Nn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mr
  }), L1 = mt(j1), H1 = w({}, na, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), B1 = mt(H1), q1 = w({}, Ki, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), G1 = mt(q1), Y1 = w({}, na, {
    newState: 0,
    oldState: 0
  }), X1 = mt(Y1), V1 = [9, 13, 27, 32], jr = cl && "CompositionEvent" in window, On = null;
  cl && "documentMode" in document && (On = document.documentMode);
  var K1 = cl && "TextEvent" in window && !On, Qo = cl && (!jr || On && 8 < On && 11 >= On), Zo = " ", ko = !1;
  function Jo(e, t) {
    switch (e) {
      case "keyup":
        return V1.indexOf(t.keyCode) !== -1;
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
  var Ma = !1;
  function Q1(e, t) {
    switch (e) {
      case "compositionend":
        return $o(t);
      case "keypress":
        return t.which !== 32 ? null : (ko = !0, Zo);
      case "textInput":
        return e = t.data, e === Zo && ko ? null : e;
      default:
        return null;
    }
  }
  function Z1(e, t) {
    if (Ma)
      return e === "compositionend" || !jr && Jo(e, t) ? (e = Go(), Gi = wr = Dl = null, Ma = !1, e) : null;
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
    za ? Ua ? Ua.push(a) : Ua = [a] : za = a, t = Uu(t, "onChange"), 0 < t.length && (l = new Vi(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var wn = null, Dn = null;
  function J1(e) {
    M0(e, 0);
  }
  function Qi(e) {
    var t = An(e);
    if (zo(t)) return e;
  }
  function Io(e, t) {
    if (e === "change") return t;
  }
  var Po = !1;
  if (cl) {
    var Lr;
    if (cl) {
      var Hr = "oninput" in document;
      if (!Hr) {
        var ef = document.createElement("div");
        ef.setAttribute("oninput", "return;"), Hr = typeof ef.oninput == "function";
      }
      Lr = Hr;
    } else Lr = !1;
    Po = Lr && (!document.documentMode || 9 < document.documentMode);
  }
  function tf() {
    wn && (wn.detachEvent("onpropertychange", lf), Dn = wn = null);
  }
  function lf(e) {
    if (e.propertyName === "value" && Qi(Dn)) {
      var t = [];
      Wo(
        t,
        Dn,
        e,
        Nr(e)
      ), qo(J1, t);
    }
  }
  function $1(e, t, l) {
    e === "focusin" ? (tf(), wn = t, Dn = l, wn.attachEvent("onpropertychange", lf)) : e === "focusout" && tf();
  }
  function F1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Qi(Dn);
  }
  function W1(e, t) {
    if (e === "click") return Qi(t);
  }
  function I1(e, t) {
    if (e === "input" || e === "change")
      return Qi(t);
  }
  function P1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var xt = typeof Object.is == "function" ? Object.is : P1;
  function zn(e, t) {
    if (xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var i = l[a];
      if (!mr.call(t, i) || !xt(e[i], t[i]))
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
    for (var t = Bi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Bi(e.document);
    }
    return t;
  }
  function Br(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ey = cl && "documentMode" in document && 11 >= document.documentMode, ja = null, qr = null, Un = null, Gr = !1;
  function sf(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Gr || ja == null || ja !== Bi(a) || (a = ja, "selectionStart" in a && Br(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Un && zn(Un, a) || (Un = a, a = Uu(qr, "onSelect"), 0 < a.length && (t = new Vi(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = ja)));
  }
  function ia(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var La = {
    animationend: ia("Animation", "AnimationEnd"),
    animationiteration: ia("Animation", "AnimationIteration"),
    animationstart: ia("Animation", "AnimationStart"),
    transitionrun: ia("Transition", "TransitionRun"),
    transitionstart: ia("Transition", "TransitionStart"),
    transitioncancel: ia("Transition", "TransitionCancel"),
    transitionend: ia("Transition", "TransitionEnd")
  }, Yr = {}, cf = {};
  cl && (cf = document.createElement("div").style, "AnimationEvent" in window || (delete La.animationend.animation, delete La.animationiteration.animation, delete La.animationstart.animation), "TransitionEvent" in window || delete La.transitionend.transition);
  function ua(e) {
    if (Yr[e]) return Yr[e];
    if (!La[e]) return e;
    var t = La[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in cf)
        return Yr[e] = t[l];
    return e;
  }
  var of = ua("animationend"), ff = ua("animationiteration"), df = ua("animationstart"), ty = ua("transitionrun"), ly = ua("transitionstart"), ay = ua("transitioncancel"), hf = ua("transitionend"), mf = /* @__PURE__ */ new Map(), Xr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xr.push("scrollEnd");
  function Qt(e, t) {
    mf.set(e, t), aa(t, [e]);
  }
  var Zi = typeof reportError == "function" ? reportError : function(e) {
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
  }, jt = [], Ha = 0, Vr = 0;
  function ki() {
    for (var e = Ha, t = Vr = Ha = 0; t < e; ) {
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
  function Ji(e, t, l, a) {
    jt[Ha++] = e, jt[Ha++] = t, jt[Ha++] = l, jt[Ha++] = a, Vr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Kr(e, t, l, a) {
    return Ji(e, t, l, a), $i(e);
  }
  function ra(e, t) {
    return Ji(e, null, null, t), $i(e);
  }
  function yf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - At(l), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function $i(e) {
    if (50 < ti)
      throw ti = 0, Ps = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ba = {};
  function ny(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ct(e, t, l, a) {
    return new ny(e, t, l, a);
  }
  function Qr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ol(e, t) {
    var l = e.alternate;
    return l === null ? (l = Ct(
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
  function Fi(e, t, l, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") Qr(e) && (f = 1);
    else if (typeof e == "string")
      f = cg(
        e,
        l,
        G.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Te:
          return e = Ct(31, l, t, i), e.elementType = Te, e.lanes = u, e;
        case U:
          return sa(l.children, i, u, t);
        case V:
          f = 8, i |= 24;
          break;
        case Z:
          return e = Ct(12, l, t, i | 2), e.elementType = Z, e.lanes = u, e;
        case me:
          return e = Ct(13, l, t, i), e.elementType = me, e.lanes = u, e;
        case W:
          return e = Ct(19, l, t, i), e.elementType = W, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case P:
                f = 10;
                break e;
              case k:
                f = 9;
                break e;
              case te:
                f = 11;
                break e;
              case $:
                f = 14;
                break e;
              case ce:
                f = 16, a = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ct(f, l, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function sa(e, t, l, a) {
    return e = Ct(7, e, a, t), e.lanes = l, e;
  }
  function Zr(e, t, l) {
    return e = Ct(6, e, null, t), e.lanes = l, e;
  }
  function pf(e) {
    var t = Ct(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function kr(e, t, l) {
    return t = Ct(
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
        stack: go(t)
      }, vf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: go(t)
    };
  }
  var qa = [], Ga = 0, Wi = null, Mn = 0, Ht = [], Bt = 0, zl = null, tl = 1, ll = "";
  function fl(e, t) {
    qa[Ga++] = Mn, qa[Ga++] = Wi, Wi = e, Mn = t;
  }
  function Ef(e, t, l) {
    Ht[Bt++] = tl, Ht[Bt++] = ll, Ht[Bt++] = zl, zl = e;
    var a = tl;
    e = ll;
    var i = 32 - At(a) - 1;
    a &= ~(1 << i), l += 1;
    var u = 32 - At(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, tl = 1 << 32 - At(t) + i | l << i | a, ll = u + e;
    } else
      tl = 1 << u | l << i | a, ll = e;
  }
  function Jr(e) {
    e.return !== null && (fl(e, 1), Ef(e, 1, 0));
  }
  function $r(e) {
    for (; e === Wi; )
      Wi = qa[--Ga], qa[Ga] = null, Mn = qa[--Ga], qa[Ga] = null;
    for (; e === zl; )
      zl = Ht[--Bt], Ht[Bt] = null, ll = Ht[--Bt], Ht[Bt] = null, tl = Ht[--Bt], Ht[Bt] = null;
  }
  function bf(e, t) {
    Ht[Bt++] = tl, Ht[Bt++] = ll, Ht[Bt++] = zl, tl = t.id, ll = t.overflow, zl = e;
  }
  var it = null, Me = null, ve = !1, Ul = null, qt = !1, Fr = Error(o(519));
  function Ml(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw jn(Lt(t, e)), Fr;
  }
  function Sf(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[nt] = e, t[ht] = a, l) {
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
        for (l = 0; l < ai.length; l++)
          de(ai[l], t);
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
        de("invalid", t), Uo(
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
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), jo(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || B0(t.textContent, l) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = sl), t = !0) : t = !1, t || Ml(e, !0);
  }
  function Rf(e) {
    for (it = e.return; it; )
      switch (it.tag) {
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
          it = it.return;
      }
  }
  function Ya(e) {
    if (e !== it) return !1;
    if (!ve) return Rf(e), ve = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || mc(e.type, e.memoizedProps)), l = !l), l && Me && Ml(e), Rf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = k0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = k0(e);
    } else
      t === 27 ? (t = Me, Jl(e.type) ? (e = Ec, Ec = null, Me = e) : Me = t) : Me = it ? Yt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ca() {
    Me = it = null, ve = !1;
  }
  function Wr() {
    var e = Ul;
    return e !== null && (vt === null ? vt = e : vt.push.apply(
      vt,
      e
    ), Ul = null), e;
  }
  function jn(e) {
    Ul === null ? Ul = [e] : Ul.push(e);
  }
  var Ir = S(null), oa = null, dl = null;
  function jl(e, t, l) {
    K(Ir, t._currentValue), t._currentValue = l;
  }
  function hl(e) {
    e._currentValue = Ir.current, L(Ir);
  }
  function Pr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function es(e, t, l, a) {
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
              u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), Pr(
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
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), Pr(f, l, e), f = null;
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
  function Xa(e, t, l, a) {
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
          xt(i.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (i === be.current) {
        if (f = i.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(si) : e = [si]);
      }
      i = i.return;
    }
    e !== null && es(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function Ii(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!xt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function fa(e) {
    oa = e, dl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ut(e) {
    return Tf(oa, e);
  }
  function Pi(e, t) {
    return oa === null && fa(e), Tf(e, t);
  }
  function Tf(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, dl === null) {
      if (e === null) throw Error(o(308));
      dl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else dl = dl.next = t;
    return l;
  }
  var iy = typeof AbortController < "u" ? AbortController : function() {
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
  }, uy = r.unstable_scheduleCallback, ry = r.unstable_NormalPriority, ke = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ts() {
    return {
      controller: new iy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ln(e) {
    e.refCount--, e.refCount === 0 && uy(ry, function() {
      e.controller.abort();
    });
  }
  var Hn = null, ls = 0, Va = 0, Ka = null;
  function sy(e, t) {
    if (Hn === null) {
      var l = Hn = [];
      ls = 0, Va = ic(), Ka = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return ls++, t.then(Af, Af), t;
  }
  function Af() {
    if (--ls === 0 && Hn !== null) {
      Ka !== null && (Ka.status = "fulfilled");
      var e = Hn;
      Hn = null, Va = 0, Ka = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function cy(e, t) {
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
  var xf = Y.S;
  Y.S = function(e, t) {
    s0 = Rt(), typeof t == "object" && t !== null && typeof t.then == "function" && sy(e, t), xf !== null && xf(e, t);
  };
  var da = S(null);
  function as() {
    var e = da.current;
    return e !== null ? e : we.pooledCache;
  }
  function eu(e, t) {
    t === null ? K(da, da.current) : K(da, t.pool);
  }
  function Cf() {
    var e = as();
    return e === null ? null : { parent: ke._currentValue, pool: e };
  }
  var Qa = Error(o(460)), ns = Error(o(474)), tu = Error(o(542)), lu = { then: function() {
  } };
  function Nf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function _f(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(sl, sl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, wf(e), e;
      default:
        if (typeof t.status == "string") t.then(sl, sl);
        else {
          if (e = we, e !== null && 100 < e.shellSuspendCounter)
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
        throw ma = t, Qa;
    }
  }
  function ha(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ma = l, Qa) : l;
    }
  }
  var ma = null;
  function Of() {
    if (ma === null) throw Error(o(459));
    var e = ma;
    return ma = null, e;
  }
  function wf(e) {
    if (e === Qa || e === tu)
      throw Error(o(483));
  }
  var Za = null, Bn = 0;
  function au(e) {
    var t = Bn;
    return Bn += 1, Za === null && (Za = []), _f(Za, e, t);
  }
  function qn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function nu(e, t) {
    throw t.$$typeof === q ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Df(e) {
    function t(A, R) {
      if (e) {
        var N = A.deletions;
        N === null ? (A.deletions = [R], A.flags |= 16) : N.push(R);
      }
    }
    function l(A, R) {
      if (!e) return null;
      for (; R !== null; )
        t(A, R), R = R.sibling;
      return null;
    }
    function a(A) {
      for (var R = /* @__PURE__ */ new Map(); A !== null; )
        A.key !== null ? R.set(A.key, A) : R.set(A.index, A), A = A.sibling;
      return R;
    }
    function i(A, R) {
      return A = ol(A, R), A.index = 0, A.sibling = null, A;
    }
    function u(A, R, N) {
      return A.index = N, e ? (N = A.alternate, N !== null ? (N = N.index, N < R ? (A.flags |= 67108866, R) : N) : (A.flags |= 67108866, R)) : (A.flags |= 1048576, R);
    }
    function f(A) {
      return e && A.alternate === null && (A.flags |= 67108866), A;
    }
    function m(A, R, N, H) {
      return R === null || R.tag !== 6 ? (R = Zr(N, A.mode, H), R.return = A, R) : (R = i(R, N), R.return = A, R);
    }
    function E(A, R, N, H) {
      var I = N.type;
      return I === U ? j(
        A,
        R,
        N.props.children,
        H,
        N.key
      ) : R !== null && (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ce && ha(I) === R.type) ? (R = i(R, N.props), qn(R, N), R.return = A, R) : (R = Fi(
        N.type,
        N.key,
        N.props,
        null,
        A.mode,
        H
      ), qn(R, N), R.return = A, R);
    }
    function _(A, R, N, H) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== N.containerInfo || R.stateNode.implementation !== N.implementation ? (R = kr(N, A.mode, H), R.return = A, R) : (R = i(R, N.children || []), R.return = A, R);
    }
    function j(A, R, N, H, I) {
      return R === null || R.tag !== 7 ? (R = sa(
        N,
        A.mode,
        H,
        I
      ), R.return = A, R) : (R = i(R, N), R.return = A, R);
    }
    function B(A, R, N) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = Zr(
          "" + R,
          A.mode,
          N
        ), R.return = A, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case C:
            return N = Fi(
              R.type,
              R.key,
              R.props,
              null,
              A.mode,
              N
            ), qn(N, R), N.return = A, N;
          case M:
            return R = kr(
              R,
              A.mode,
              N
            ), R.return = A, R;
          case ce:
            return R = ha(R), B(A, R, N);
        }
        if (X(R) || He(R))
          return R = sa(
            R,
            A.mode,
            N,
            null
          ), R.return = A, R;
        if (typeof R.then == "function")
          return B(A, au(R), N);
        if (R.$$typeof === P)
          return B(
            A,
            Pi(A, R),
            N
          );
        nu(A, R);
      }
      return null;
    }
    function O(A, R, N, H) {
      var I = R !== null ? R.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return I !== null ? null : m(A, R, "" + N, H);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case C:
            return N.key === I ? E(A, R, N, H) : null;
          case M:
            return N.key === I ? _(A, R, N, H) : null;
          case ce:
            return N = ha(N), O(A, R, N, H);
        }
        if (X(N) || He(N))
          return I !== null ? null : j(A, R, N, H, null);
        if (typeof N.then == "function")
          return O(
            A,
            R,
            au(N),
            H
          );
        if (N.$$typeof === P)
          return O(
            A,
            R,
            Pi(A, N),
            H
          );
        nu(A, N);
      }
      return null;
    }
    function z(A, R, N, H, I) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return A = A.get(N) || null, m(R, A, "" + H, I);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case C:
            return A = A.get(
              H.key === null ? N : H.key
            ) || null, E(R, A, H, I);
          case M:
            return A = A.get(
              H.key === null ? N : H.key
            ) || null, _(R, A, H, I);
          case ce:
            return H = ha(H), z(
              A,
              R,
              N,
              H,
              I
            );
        }
        if (X(H) || He(H))
          return A = A.get(N) || null, j(R, A, H, I, null);
        if (typeof H.then == "function")
          return z(
            A,
            R,
            N,
            au(H),
            I
          );
        if (H.$$typeof === P)
          return z(
            A,
            R,
            N,
            Pi(R, H),
            I
          );
        nu(R, H);
      }
      return null;
    }
    function J(A, R, N, H) {
      for (var I = null, Se = null, F = R, se = R = 0, ge = null; F !== null && se < N.length; se++) {
        F.index > se ? (ge = F, F = null) : ge = F.sibling;
        var Re = O(
          A,
          F,
          N[se],
          H
        );
        if (Re === null) {
          F === null && (F = ge);
          break;
        }
        e && F && Re.alternate === null && t(A, F), R = u(Re, R, se), Se === null ? I = Re : Se.sibling = Re, Se = Re, F = ge;
      }
      if (se === N.length)
        return l(A, F), ve && fl(A, se), I;
      if (F === null) {
        for (; se < N.length; se++)
          F = B(A, N[se], H), F !== null && (R = u(
            F,
            R,
            se
          ), Se === null ? I = F : Se.sibling = F, Se = F);
        return ve && fl(A, se), I;
      }
      for (F = a(F); se < N.length; se++)
        ge = z(
          F,
          A,
          se,
          N[se],
          H
        ), ge !== null && (e && ge.alternate !== null && F.delete(
          ge.key === null ? se : ge.key
        ), R = u(
          ge,
          R,
          se
        ), Se === null ? I = ge : Se.sibling = ge, Se = ge);
      return e && F.forEach(function(Pl) {
        return t(A, Pl);
      }), ve && fl(A, se), I;
    }
    function ee(A, R, N, H) {
      if (N == null) throw Error(o(151));
      for (var I = null, Se = null, F = R, se = R = 0, ge = null, Re = N.next(); F !== null && !Re.done; se++, Re = N.next()) {
        F.index > se ? (ge = F, F = null) : ge = F.sibling;
        var Pl = O(A, F, Re.value, H);
        if (Pl === null) {
          F === null && (F = ge);
          break;
        }
        e && F && Pl.alternate === null && t(A, F), R = u(Pl, R, se), Se === null ? I = Pl : Se.sibling = Pl, Se = Pl, F = ge;
      }
      if (Re.done)
        return l(A, F), ve && fl(A, se), I;
      if (F === null) {
        for (; !Re.done; se++, Re = N.next())
          Re = B(A, Re.value, H), Re !== null && (R = u(Re, R, se), Se === null ? I = Re : Se.sibling = Re, Se = Re);
        return ve && fl(A, se), I;
      }
      for (F = a(F); !Re.done; se++, Re = N.next())
        Re = z(F, A, se, Re.value, H), Re !== null && (e && Re.alternate !== null && F.delete(Re.key === null ? se : Re.key), R = u(Re, R, se), Se === null ? I = Re : Se.sibling = Re, Se = Re);
      return e && F.forEach(function(bg) {
        return t(A, bg);
      }), ve && fl(A, se), I;
    }
    function Oe(A, R, N, H) {
      if (typeof N == "object" && N !== null && N.type === U && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case C:
            e: {
              for (var I = N.key; R !== null; ) {
                if (R.key === I) {
                  if (I = N.type, I === U) {
                    if (R.tag === 7) {
                      l(
                        A,
                        R.sibling
                      ), H = i(
                        R,
                        N.props.children
                      ), H.return = A, A = H;
                      break e;
                    }
                  } else if (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === ce && ha(I) === R.type) {
                    l(
                      A,
                      R.sibling
                    ), H = i(R, N.props), qn(H, N), H.return = A, A = H;
                    break e;
                  }
                  l(A, R);
                  break;
                } else t(A, R);
                R = R.sibling;
              }
              N.type === U ? (H = sa(
                N.props.children,
                A.mode,
                H,
                N.key
              ), H.return = A, A = H) : (H = Fi(
                N.type,
                N.key,
                N.props,
                null,
                A.mode,
                H
              ), qn(H, N), H.return = A, A = H);
            }
            return f(A);
          case M:
            e: {
              for (I = N.key; R !== null; ) {
                if (R.key === I)
                  if (R.tag === 4 && R.stateNode.containerInfo === N.containerInfo && R.stateNode.implementation === N.implementation) {
                    l(
                      A,
                      R.sibling
                    ), H = i(R, N.children || []), H.return = A, A = H;
                    break e;
                  } else {
                    l(A, R);
                    break;
                  }
                else t(A, R);
                R = R.sibling;
              }
              H = kr(N, A.mode, H), H.return = A, A = H;
            }
            return f(A);
          case ce:
            return N = ha(N), Oe(
              A,
              R,
              N,
              H
            );
        }
        if (X(N))
          return J(
            A,
            R,
            N,
            H
          );
        if (He(N)) {
          if (I = He(N), typeof I != "function") throw Error(o(150));
          return N = I.call(N), ee(
            A,
            R,
            N,
            H
          );
        }
        if (typeof N.then == "function")
          return Oe(
            A,
            R,
            au(N),
            H
          );
        if (N.$$typeof === P)
          return Oe(
            A,
            R,
            Pi(A, N),
            H
          );
        nu(A, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, R !== null && R.tag === 6 ? (l(A, R.sibling), H = i(R, N), H.return = A, A = H) : (l(A, R), H = Zr(N, A.mode, H), H.return = A, A = H), f(A)) : l(A, R);
    }
    return function(A, R, N, H) {
      try {
        Bn = 0;
        var I = Oe(
          A,
          R,
          N,
          H
        );
        return Za = null, I;
      } catch (F) {
        if (F === Qa || F === tu) throw F;
        var Se = Ct(29, F, null, A.mode);
        return Se.lanes = H, Se.return = A, Se;
      }
    };
  }
  var ya = Df(!0), zf = Df(!1), Ll = !1;
  function is(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function us(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Hl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Bl(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ae & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = $i(e), yf(e, null, l), t;
    }
    return Ji(e, a, t, l), $i(e);
  }
  function Gn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Ro(e, l);
    }
  }
  function rs(e, t) {
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
  var ss = !1;
  function Yn() {
    if (ss) {
      var e = Ka;
      if (e !== null) throw e;
    }
  }
  function Xn(e, t, l, a) {
    ss = !1;
    var i = e.updateQueue;
    Ll = !1;
    var u = i.firstBaseUpdate, f = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var E = m, _ = E.next;
      E.next = null, f === null ? u = _ : f.next = _, f = E;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, m = j.lastBaseUpdate, m !== f && (m === null ? j.firstBaseUpdate = _ : m.next = _, j.lastBaseUpdate = E));
    }
    if (u !== null) {
      var B = i.baseState;
      f = 0, j = _ = E = null, m = u;
      do {
        var O = m.lane & -536870913, z = O !== m.lane;
        if (z ? (ye & O) === O : (a & O) === O) {
          O !== 0 && O === Va && (ss = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ee = m;
            O = t;
            var Oe = l;
            switch (ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  B = J.call(Oe, B, O);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, O = typeof J == "function" ? J.call(Oe, B, O) : J, O == null) break e;
                B = w({}, B, O);
                break e;
              case 2:
                Ll = !0;
            }
          }
          O = m.callback, O !== null && (e.flags |= 64, z && (e.flags |= 8192), z = i.callbacks, z === null ? i.callbacks = [O] : z.push(O));
        } else
          z = {
            lane: O,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, j === null ? (_ = j = z, E = B) : j = j.next = z, f |= O;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null)
            break;
          z = m, m = z.next, z.next = null, i.lastBaseUpdate = z, i.shared.pending = null;
        }
      } while (!0);
      j === null && (E = B), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = j, u === null && (i.shared.lanes = 0), Vl |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Uf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Mf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Uf(l[e], t);
  }
  var ka = S(null), iu = S(0);
  function jf(e, t) {
    e = Rl, K(iu, e), K(ka, t), Rl = e | t.baseLanes;
  }
  function cs() {
    K(iu, Rl), K(ka, ka.current);
  }
  function os() {
    Rl = iu.current, L(ka), L(iu);
  }
  var Nt = S(null), Gt = null;
  function ql(e) {
    var t = e.alternate;
    K(Qe, Qe.current & 1), K(Nt, e), Gt === null && (t === null || ka.current !== null || t.memoizedState !== null) && (Gt = e);
  }
  function fs(e) {
    K(Qe, Qe.current), K(Nt, e), Gt === null && (Gt = e);
  }
  function Lf(e) {
    e.tag === 22 ? (K(Qe, Qe.current), K(Nt, e), Gt === null && (Gt = e)) : Gl();
  }
  function Gl() {
    K(Qe, Qe.current), K(Nt, Nt.current);
  }
  function _t(e) {
    L(Nt), Gt === e && (Gt = null), L(Qe);
  }
  var Qe = S(0);
  function uu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || pc(l) || vc(l)))
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
  var ml = 0, ue = null, Ne = null, Je = null, ru = !1, Ja = !1, ga = !1, su = 0, Vn = 0, $a = null, oy = 0;
  function Ge() {
    throw Error(o(321));
  }
  function ds(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!xt(e[l], t[l])) return !1;
    return !0;
  }
  function hs(e, t, l, a, i, u) {
    return ml = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Ed : _s, ga = !1, u = l(a, i), ga = !1, Ja && (u = Bf(
      t,
      l,
      a,
      i
    )), Hf(e), u;
  }
  function Hf(e) {
    Y.H = Zn;
    var t = Ne !== null && Ne.next !== null;
    if (ml = 0, Je = Ne = ue = null, ru = !1, Vn = 0, $a = null, t) throw Error(o(300));
    e === null || $e || (e = e.dependencies, e !== null && Ii(e) && ($e = !0));
  }
  function Bf(e, t, l, a) {
    ue = e;
    var i = 0;
    do {
      if (Ja && ($a = null), Vn = 0, Ja = !1, 25 <= i) throw Error(o(301));
      if (i += 1, Je = Ne = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = bd, u = t(l, a);
    } while (Ja);
    return u;
  }
  function fy() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Kn(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function ms() {
    var e = su !== 0;
    return su = 0, e;
  }
  function ys(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function gs(e) {
    if (ru) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ru = !1;
    }
    ml = 0, Je = Ne = ue = null, Ja = !1, Vn = su = 0, $a = null;
  }
  function dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Je === null ? ue.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Ze() {
    if (Ne === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = Je === null ? ue.memoizedState : Je.next;
    if (t !== null)
      Je = t, Ne = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(o(467)) : Error(o(310));
      Ne = e, e = {
        memoizedState: Ne.memoizedState,
        baseState: Ne.baseState,
        baseQueue: Ne.baseQueue,
        queue: Ne.queue,
        next: null
      }, Je === null ? ue.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function cu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Kn(e) {
    var t = Vn;
    return Vn += 1, $a === null && ($a = []), e = _f($a, e, t), t = ue, (Je === null ? t.memoizedState : Je.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Ed : _s), e;
  }
  function ou(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Kn(e);
      if (e.$$typeof === P) return ut(e);
    }
    throw Error(o(438, String(e)));
  }
  function ps(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = cu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = tt;
    return t.index++, l;
  }
  function yl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function fu(e) {
    var t = Ze();
    return vs(t, Ne, e);
  }
  function vs(e, t, l) {
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
      var m = f = null, E = null, _ = t, j = !1;
      do {
        var B = _.lane & -536870913;
        if (B !== _.lane ? (ye & B) === B : (ml & B) === B) {
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
            }), B === Va && (j = !0);
          else if ((ml & O) === O) {
            _ = _.next, O === Va && (j = !0);
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
            }, E === null ? (m = E = B, f = u) : E = E.next = B, ue.lanes |= O, Vl |= O;
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
          }, E === null ? (m = E = O, f = u) : E = E.next = O, ue.lanes |= B, Vl |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = m, !xt(u, e.memoizedState) && ($e = !0, j && (l = Ka, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = E, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Es(e) {
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
      xt(u, t.memoizedState) || ($e = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function qf(e, t, l) {
    var a = ue, i = Ze(), u = ve;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !xt(
      (Ne || i).memoizedState,
      l
    );
    if (f && (i.memoizedState = l, $e = !0), i = i.queue, Rs(Xf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || Je !== null && Je.memoizedState.tag & 1) {
      if (a.flags |= 2048, Fa(
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
      ), we === null) throw Error(o(349));
      u || (ml & 127) !== 0 || Gf(a, t, l);
    }
    return l;
  }
  function Gf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = cu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
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
      return !xt(e, l);
    } catch {
      return !0;
    }
  }
  function Kf(e) {
    var t = ra(e, 2);
    t !== null && Et(t, e, 2);
  }
  function bs(e) {
    var t = dt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ga) {
        Ol(!0);
        try {
          l();
        } finally {
          Ol(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yl,
      lastRenderedState: e
    }, t;
  }
  function Qf(e, t, l, a) {
    return e.baseState = l, vs(
      e,
      Ne,
      typeof a == "function" ? a : yl
    );
  }
  function dy(e, t, l, a, i) {
    if (mu(e)) throw Error(o(485));
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
      Y.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Zf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Zf(e, t) {
    var l = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = Y.T, f = {};
      Y.T = f;
      try {
        var m = l(i, a), E = Y.S;
        E !== null && E(f, m), kf(e, t, m);
      } catch (_) {
        Ss(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), Y.T = u;
      }
    } else
      try {
        u = l(i, a), kf(e, t, u);
      } catch (_) {
        Ss(e, t, _);
      }
  }
  function kf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Jf(e, t, a);
      },
      function(a) {
        return Ss(e, t, a);
      }
    ) : Jf(e, t, l);
  }
  function Jf(e, t, l) {
    t.status = "fulfilled", t.value = l, $f(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Zf(e, l)));
  }
  function Ss(e, t, l) {
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
    if (ve) {
      var l = we.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (ve) {
            if (Me) {
              t: {
                for (var i = Me, u = qt; i.nodeType !== 8; ) {
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
                Me = Yt(
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
    return l = dt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ff,
      lastRenderedState: t
    }, l.queue = a, l = gd.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = bs(!1), u = Ns.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = dt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, l = dy.bind(
      null,
      ue,
      i,
      u,
      l
    ), i.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function If(e) {
    var t = Ze();
    return Pf(t, Ne, e);
  }
  function Pf(e, t, l) {
    if (t = vs(
      e,
      t,
      Ff
    )[0], e = fu(yl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Kn(t);
      } catch (f) {
        throw f === Qa ? tu : f;
      }
    else a = t;
    t = Ze();
    var i = t.queue, u = i.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Fa(
      9,
      { destroy: void 0 },
      hy.bind(null, i, l),
      null
    )), [a, u, e];
  }
  function hy(e, t) {
    e.action = t;
  }
  function ed(e) {
    var t = Ze(), l = Ne;
    if (l !== null)
      return Pf(t, l, e);
    Ze(), t = t.memoizedState, l = Ze();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Fa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = cu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function td() {
    return Ze().memoizedState;
  }
  function du(e, t, l, a) {
    var i = dt();
    ue.flags |= e, i.memoizedState = Fa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function hu(e, t, l, a) {
    var i = Ze();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Ne !== null && a !== null && ds(a, Ne.memoizedState.deps) ? i.memoizedState = Fa(t, u, l, a) : (ue.flags |= e, i.memoizedState = Fa(
      1 | t,
      u,
      l,
      a
    ));
  }
  function ld(e, t) {
    du(8390656, 8, e, t);
  }
  function Rs(e, t) {
    hu(2048, 8, e, t);
  }
  function my(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = cu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function ad(e) {
    var t = Ze().memoizedState;
    return my({ ref: t, nextImpl: e }), function() {
      if ((Ae & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function nd(e, t) {
    return hu(4, 2, e, t);
  }
  function id(e, t) {
    return hu(4, 4, e, t);
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
    l = l != null ? l.concat([e]) : null, hu(4, 4, ud.bind(null, t, e), l);
  }
  function Ts() {
  }
  function sd(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && ds(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function cd(e, t) {
    var l = Ze();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && ds(t, a[1]))
      return a[0];
    if (a = e(), ga) {
      Ol(!0);
      try {
        e();
      } finally {
        Ol(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function As(e, t, l) {
    return l === void 0 || (ml & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = o0(), ue.lanes |= e, Vl |= e, l);
  }
  function od(e, t, l, a) {
    return xt(l, t) ? l : ka.current !== null ? (e = As(e, l, a), xt(e, t) || ($e = !0), e) : (ml & 42) === 0 || (ml & 1073741824) !== 0 && (ye & 261930) === 0 ? ($e = !0, e.memoizedState = l) : (e = o0(), ue.lanes |= e, Vl |= e, t);
  }
  function fd(e, t, l, a, i) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var f = Y.T, m = {};
    Y.T = m, Ns(e, !1, t, l);
    try {
      var E = i(), _ = Y.S;
      if (_ !== null && _(m, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var j = cy(
          E,
          a
        );
        Qn(
          e,
          t,
          j,
          Dt(e)
        );
      } else
        Qn(
          e,
          t,
          a,
          Dt(e)
        );
    } catch (B) {
      Qn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        Dt()
      );
    } finally {
      Q.p = u, f !== null && m.types !== null && (f.types = m.types), Y.T = f;
    }
  }
  function yy() {
  }
  function xs(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = dd(e).queue;
    fd(
      e,
      i,
      t,
      ie,
      l === null ? yy : function() {
        return hd(e), l(a);
      }
    );
  }
  function dd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yl,
        lastRenderedState: ie
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
        lastRenderedReducer: yl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function hd(e) {
    var t = dd(e);
    t.next === null && (t = e.alternate.memoizedState), Qn(
      e,
      t.next.queue,
      {},
      Dt()
    );
  }
  function Cs() {
    return ut(si);
  }
  function md() {
    return Ze().memoizedState;
  }
  function yd() {
    return Ze().memoizedState;
  }
  function gy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Dt();
          e = Hl(l);
          var a = Bl(t, e, l);
          a !== null && (Et(a, t, l), Gn(a, t, l)), t = { cache: ts() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function py(e, t, l) {
    var a = Dt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(e) ? pd(t, l) : (l = Kr(e, t, l, a), l !== null && (Et(l, e, a), vd(l, t, a)));
  }
  function gd(e, t, l) {
    var a = Dt();
    Qn(e, t, l, a);
  }
  function Qn(e, t, l, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (mu(e)) pd(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, m = u(f, l);
          if (i.hasEagerState = !0, i.eagerState = m, xt(m, f))
            return Ji(e, t, i, 0), we === null && ki(), !1;
        } catch {
        }
      if (l = Kr(e, t, i, a), l !== null)
        return Et(l, e, a), vd(l, t, a), !0;
    }
    return !1;
  }
  function Ns(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: ic(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, mu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Kr(
        e,
        l,
        a,
        2
      ), t !== null && Et(t, e, 2);
  }
  function mu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function pd(e, t) {
    Ja = ru = !0;
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
    readContext: ut,
    use: ou,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useLayoutEffect: Ge,
    useInsertionEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    useHostTransitionStatus: Ge,
    useFormState: Ge,
    useActionState: Ge,
    useOptimistic: Ge,
    useMemoCache: Ge,
    useCacheRefresh: Ge
  };
  Zn.useEffectEvent = Ge;
  var Ed = {
    readContext: ut,
    use: ou,
    useCallback: function(e, t) {
      return dt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ut,
    useEffect: ld,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, du(
        4194308,
        4,
        ud.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return du(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      du(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = dt();
      t = t === void 0 ? null : t;
      var a = e();
      if (ga) {
        Ol(!0);
        try {
          e();
        } finally {
          Ol(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = dt();
      if (l !== void 0) {
        var i = l(t);
        if (ga) {
          Ol(!0);
          try {
            l(t);
          } finally {
            Ol(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = py.bind(
        null,
        ue,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = dt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = bs(e);
      var t = e.queue, l = gd.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: Ts,
    useDeferredValue: function(e, t) {
      var l = dt();
      return As(l, e, t);
    },
    useTransition: function() {
      var e = bs(!1);
      return e = fd.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), dt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ue, i = dt();
      if (ve) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), we === null)
          throw Error(o(349));
        (ye & 127) !== 0 || Gf(a, t, l);
      }
      i.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return i.queue = u, ld(Xf.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Fa(
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
      var e = dt(), t = we.identifierPrefix;
      if (ve) {
        var l = ll, a = tl;
        l = (a & ~(1 << 32 - At(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = su++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = oy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Cs,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e) {
      var t = dt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = Ns.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: ps,
    useCacheRefresh: function() {
      return dt().memoizedState = gy.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = dt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ae & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, _s = {
    readContext: ut,
    use: ou,
    useCallback: sd,
    useContext: ut,
    useEffect: Rs,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: fu,
    useRef: td,
    useState: function() {
      return fu(yl);
    },
    useDebugValue: Ts,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return od(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = fu(yl)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Kn(e),
        t
      ];
    },
    useSyncExternalStore: qf,
    useId: md,
    useHostTransitionStatus: Cs,
    useFormState: If,
    useActionState: If,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Qf(l, Ne, e, t);
    },
    useMemoCache: ps,
    useCacheRefresh: yd
  };
  _s.useEffectEvent = ad;
  var bd = {
    readContext: ut,
    use: ou,
    useCallback: sd,
    useContext: ut,
    useEffect: Rs,
    useImperativeHandle: rd,
    useInsertionEffect: nd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: Es,
    useRef: td,
    useState: function() {
      return Es(yl);
    },
    useDebugValue: Ts,
    useDeferredValue: function(e, t) {
      var l = Ze();
      return Ne === null ? As(l, e, t) : od(
        l,
        Ne.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Es(yl)[0], t = Ze().memoizedState;
      return [
        typeof e == "boolean" ? e : Kn(e),
        t
      ];
    },
    useSyncExternalStore: qf,
    useId: md,
    useHostTransitionStatus: Cs,
    useFormState: ed,
    useActionState: ed,
    useOptimistic: function(e, t) {
      var l = Ze();
      return Ne !== null ? Qf(l, Ne, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: ps,
    useCacheRefresh: yd
  };
  bd.useEffectEvent = ad;
  function Os(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : w({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var ws = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Dt(), i = Hl(a);
      i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (Et(t, e, a), Gn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Dt(), i = Hl(a);
      i.tag = 1, i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (Et(t, e, a), Gn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Dt(), a = Hl(l);
      a.tag = 2, t != null && (a.callback = t), t = Bl(e, a, l), t !== null && (Et(t, e, l), Gn(t, e, l));
    }
  };
  function Sd(e, t, l, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !zn(l, a) || !zn(i, u) : !0;
  }
  function Rd(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && ws.enqueueReplaceState(t, t.state, null);
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
    Zi(e);
  }
  function Ad(e) {
    console.error(e);
  }
  function xd(e) {
    Zi(e);
  }
  function yu(e, t) {
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
  function Ds(e, t, l) {
    return l = Hl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      yu(e, t);
    }, l;
  }
  function Nd(e) {
    return e = Hl(e), e.tag = 3, e;
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
      Cd(t, l, a), typeof i != "function" && (Kl === null ? Kl = /* @__PURE__ */ new Set([this]) : Kl.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function vy(e, t, l, a, i) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Xa(
        t,
        l,
        i,
        !0
      ), l = Nt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Gt === null ? Nu() : l.alternate === null && Ye === 0 && (Ye = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, a === lu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), lc(e, a, i)), !1;
          case 22:
            return l.flags |= 65536, a === lu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), lc(e, a, i)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return lc(e, a, i), Nu(), !1;
    }
    if (ve)
      return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== Fr && (e = Error(o(422), { cause: a }), jn(Lt(e, l)))) : (a !== Fr && (t = Error(o(423), {
        cause: a
      }), jn(
        Lt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Lt(a, l), i = Ds(
        e.stateNode,
        a,
        i
      ), rs(e, i), Ye !== 4 && (Ye = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Lt(u, l), ei === null ? ei = [u] : ei.push(u), Ye !== 4 && (Ye = 2), t === null) return !0;
    a = Lt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = i & -i, l.lanes |= e, e = Ds(l.stateNode, a, e), rs(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Kl === null || !Kl.has(u))))
            return l.flags |= 65536, i &= -i, l.lanes |= i, i = Nd(i), _d(
              i,
              e,
              l,
              a
            ), rs(l, i), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var zs = Error(o(461)), $e = !1;
  function rt(e, t, l, a) {
    t.child = e === null ? zf(t, null, l, a) : ya(
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
    return fa(t), a = hs(
      e,
      t,
      l,
      f,
      u,
      i
    ), m = ms(), e !== null && !$e ? (ys(e, t, i), gl(e, t, i)) : (ve && m && Jr(t), t.flags |= 1, rt(e, t, a, i), t.child);
  }
  function wd(e, t, l, a, i) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !Qr(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Dd(
        e,
        t,
        u,
        a,
        i
      )) : (e = Fi(
        l.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Gs(e, i)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : zn, l(f, a) && e.ref === t.ref)
        return gl(e, t, i);
    }
    return t.flags |= 1, e = ol(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Dd(e, t, l, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (zn(u, a) && e.ref === t.ref)
        if ($e = !1, t.pendingProps = a = u, Gs(e, i))
          (e.flags & 131072) !== 0 && ($e = !0);
        else
          return t.lanes = e.lanes, gl(e, t, i);
    }
    return Us(
      e,
      t,
      l,
      a,
      i
    );
  }
  function zd(e, t, l, a) {
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
        return Ud(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && eu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? jf(t, u) : cs(), Lf(t);
      else
        return a = t.lanes = 536870912, Ud(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (eu(t, u.cachePool), jf(t, u), Gl(), t.memoizedState = null) : (e !== null && eu(t, null), cs(), Gl());
    return rt(e, t, i, l), t.child;
  }
  function kn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ud(e, t, l, a, i) {
    var u = as();
    return u = u === null ? null : { parent: ke._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && eu(t, null), cs(), Lf(t), e !== null && Xa(e, t, a, !0), t.childLanes = i, null;
  }
  function gu(e, t) {
    return t = vu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Md(e, t, l) {
    return ya(t, e.child, null, l), e = gu(t, t.pendingProps), e.flags |= 2, _t(t), t.memoizedState = null, e;
  }
  function Ey(e, t, l) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ve) {
        if (a.mode === "hidden")
          return e = gu(t, a), t.lanes = 536870912, kn(null, e);
        if (fs(t), (e = Me) ? (e = Z0(
          e,
          qt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: zl !== null ? { id: tl, overflow: ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = pf(e), l.return = t, t.child = l, it = t, Me = null)) : e = null, e === null) throw Ml(t);
        return t.lanes = 536870912, null;
      }
      return gu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (fs(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Md(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if ($e || Xa(e, t, l, !1), i = (l & e.childLanes) !== 0, $e || i) {
        if (a = we, a !== null && (f = To(a, l), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ra(e, f), Et(a, e, f), zs;
        Nu(), t = Md(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Me = Yt(f.nextSibling), it = t, ve = !0, Ul = null, qt = !1, e !== null && bf(t, e), t = gu(t, a), t.flags |= 4096;
      return t;
    }
    return e = ol(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function pu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Us(e, t, l, a, i) {
    return fa(t), l = hs(
      e,
      t,
      l,
      a,
      void 0,
      i
    ), a = ms(), e !== null && !$e ? (ys(e, t, i), gl(e, t, i)) : (ve && a && Jr(t), t.flags |= 1, rt(e, t, l, i), t.child);
  }
  function jd(e, t, l, a, i, u) {
    return fa(t), t.updateQueue = null, l = Bf(
      t,
      a,
      l,
      i
    ), Hf(e), a = ms(), e !== null && !$e ? (ys(e, t, u), gl(e, t, u)) : (ve && a && Jr(t), t.flags |= 1, rt(e, t, l, u), t.child);
  }
  function Ld(e, t, l, a, i) {
    if (fa(t), t.stateNode === null) {
      var u = Ba, f = l.contextType;
      typeof f == "object" && f !== null && (u = ut(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ws, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, is(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? ut(f) : Ba, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Os(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && ws.enqueueReplaceState(u, u.state, null), Xn(t, a, u, i), Yn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var m = t.memoizedProps, E = pa(l, m);
      u.props = E;
      var _ = u.context, j = l.contextType;
      f = Ba, typeof j == "object" && j !== null && (f = ut(j));
      var B = l.getDerivedStateFromProps;
      j = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, j || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || _ !== f) && Rd(
        t,
        u,
        a,
        f
      ), Ll = !1;
      var O = t.memoizedState;
      u.state = O, Xn(t, a, u, i), Yn(), _ = t.memoizedState, m || O !== _ || Ll ? (typeof B == "function" && (Os(
        t,
        l,
        B,
        a
      ), _ = t.memoizedState), (E = Ll || Sd(
        t,
        l,
        E,
        a,
        O,
        _,
        f
      )) ? (j || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, us(e, t), f = t.memoizedProps, j = pa(l, f), u.props = j, B = t.pendingProps, O = u.context, _ = l.contextType, E = Ba, typeof _ == "object" && _ !== null && (E = ut(_)), m = l.getDerivedStateFromProps, (_ = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && Rd(
        t,
        u,
        a,
        E
      ), Ll = !1, O = t.memoizedState, u.state = O, Xn(t, a, u, i), Yn();
      var z = t.memoizedState;
      f !== B || O !== z || Ll || e !== null && e.dependencies !== null && Ii(e.dependencies) ? (typeof m == "function" && (Os(
        t,
        l,
        m,
        a
      ), z = t.memoizedState), (j = Ll || Sd(
        t,
        l,
        j,
        a,
        O,
        z,
        E
      ) || e !== null && e.dependencies !== null && Ii(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        z,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = E, a = j) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, pu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ya(
      t,
      e.child,
      null,
      i
    ), t.child = ya(
      t,
      null,
      l,
      i
    )) : rt(e, t, l, i), t.memoizedState = u.state, e = t.child) : e = gl(
      e,
      t,
      i
    ), e;
  }
  function Hd(e, t, l, a) {
    return ca(), t.flags |= 256, rt(e, t, l, a), t.child;
  }
  var Ms = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function js(e) {
    return { baseLanes: e, cachePool: Cf() };
  }
  function Ls(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= wt), e;
  }
  function Bd(e, t, l) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Qe.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ve) {
        if (i ? ql(t) : Gl(), (e = Me) ? (e = Z0(
          e,
          qt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: zl !== null ? { id: tl, overflow: ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = pf(e), l.return = t, t.child = l, it = t, Me = null)) : e = null, e === null) throw Ml(t);
        return vc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, i ? (Gl(), i = t.mode, m = vu(
        { mode: "hidden", children: m },
        i
      ), a = sa(
        a,
        i,
        l,
        null
      ), m.return = t, a.return = t, m.sibling = a, t.child = m, a = t.child, a.memoizedState = js(l), a.childLanes = Ls(
        e,
        f,
        l
      ), t.memoizedState = Ms, kn(null, a)) : (ql(t), Hs(t, m));
    }
    var E = e.memoizedState;
    if (E !== null && (m = E.dehydrated, m !== null)) {
      if (u)
        t.flags & 256 ? (ql(t), t.flags &= -257, t = Bs(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Gl(), t.child = e.child, t.flags |= 128, t = null) : (Gl(), m = a.fallback, i = t.mode, a = vu(
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
        ), a = t.child, a.memoizedState = js(l), a.childLanes = Ls(
          e,
          f,
          l
        ), t.memoizedState = Ms, t = kn(null, a));
      else if (ql(t), vc(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(o(419)), a.stack = "", a.digest = f, jn({ value: a, source: null, stack: null }), t = Bs(
          e,
          t,
          l
        );
      } else if ($e || Xa(e, t, l, !1), f = (l & e.childLanes) !== 0, $e || f) {
        if (f = we, f !== null && (a = To(f, l), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, ra(e, a), Et(f, e, a), zs;
        pc(m) || Nu(), t = Bs(
          e,
          t,
          l
        );
      } else
        pc(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Me = Yt(
          m.nextSibling
        ), it = t, ve = !0, Ul = null, qt = !1, e !== null && bf(t, e), t = Hs(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Gl(), m = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = ol(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? m = ol(
      _,
      m
    ) : (m = sa(
      m,
      i,
      l,
      null
    ), m.flags |= 2), m.return = t, a.return = t, a.sibling = m, t.child = a, kn(null, a), a = t.child, m = e.child.memoizedState, m === null ? m = js(l) : (i = m.cachePool, i !== null ? (E = ke._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Cf(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: i
    }), a.memoizedState = m, a.childLanes = Ls(
      e,
      f,
      l
    ), t.memoizedState = Ms, kn(e.child, a)) : (ql(t), l = e.child, e = l.sibling, l = ol(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Hs(e, t) {
    return t = vu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function vu(e, t) {
    return e = Ct(22, e, null, t), e.lanes = 0, e;
  }
  function Bs(e, t, l) {
    return ya(t, e.child, null, l), e = Hs(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function qd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Pr(e.return, t, l);
  }
  function qs(e, t, l, a, i, u) {
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
    var f = Qe.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, K(Qe, f), rt(e, t, a, l), a = ve ? Mn : 0, !m && e !== null && (e.flags & 128) !== 0)
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
          e = l.alternate, e !== null && uu(e) === null && (i = l), l = l.sibling;
        l = i, l === null ? (i = t.child, t.child = null) : (i = l.sibling, l.sibling = null), qs(
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
          if (e = i.alternate, e !== null && uu(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = l, l = i, i = e;
        }
        qs(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        qs(
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
  function gl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Vl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Xa(
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
      for (e = t.child, l = ol(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = ol(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Gs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ii(e)));
  }
  function by(e, t, l) {
    switch (t.tag) {
      case 3:
        lt(t, t.stateNode.containerInfo), jl(t, ke, e.memoizedState.cache), ca();
        break;
      case 27:
      case 5:
        ta(t);
        break;
      case 4:
        lt(t, t.stateNode.containerInfo);
        break;
      case 10:
        jl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, fs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ql(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Bd(e, t, l) : (ql(t), e = gl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        ql(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Xa(
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
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K(Qe, Qe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, zd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        jl(t, ke, e.memoizedState.cache);
    }
    return gl(e, t, l);
  }
  function Yd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        $e = !0;
      else {
        if (!Gs(e, l) && (t.flags & 128) === 0)
          return $e = !1, by(
            e,
            t,
            l
          );
        $e = (e.flags & 131072) !== 0;
      }
    else
      $e = !1, ve && (t.flags & 1048576) !== 0 && Ef(t, Mn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ha(t.elementType), t.type = e, typeof e == "function")
            Qr(e) ? (a = pa(e, a), t.tag = 1, t = Ld(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Us(
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
              } else if (i === $) {
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
            throw t = Ke(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Us(
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
          if (lt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, us(e, t), Xn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, jl(t, ke, a), a !== u.cache && es(
            t,
            [ke],
            l,
            !0
          ), Yn(), a = f.element, u.isDehydrated)
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
              ), jn(i), t = Hd(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Yt(e.firstChild), it = t, ve = !0, Ul = null, qt = !0, l = zf(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ca(), a === i) {
              t = gl(
                e,
                t,
                l
              );
              break e;
            }
            rt(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return pu(e, t), e === null ? (l = I0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ve || (l = t.type, e = t.pendingProps, a = Mu(
          ae.current
        ).createElement(l), a[nt] = t, a[ht] = e, st(a, l, e), Ie(a), t.stateNode = a) : t.memoizedState = I0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ta(t), e === null && ve && (a = t.stateNode = $0(
          t.type,
          t.pendingProps,
          ae.current
        ), it = t, qt = !0, i = Me, Jl(t.type) ? (Ec = i, Me = Yt(a.firstChild)) : Me = i), rt(
          e,
          t,
          t.pendingProps.children,
          l
        ), pu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ve && ((i = a = Me) && (a = Fy(
          a,
          t.type,
          t.pendingProps,
          qt
        ), a !== null ? (t.stateNode = a, it = t, Me = Yt(a.firstChild), qt = !1, i = !0) : i = !1), i || Ml(t)), ta(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, mc(i, u) ? a = null : f !== null && mc(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = hs(
          e,
          t,
          fy,
          null,
          null,
          l
        ), si._currentValue = i), pu(e, t), rt(e, t, a, l), t.child;
      case 6:
        return e === null && ve && ((e = l = Me) && (l = Wy(
          l,
          t.pendingProps,
          qt
        ), l !== null ? (t.stateNode = l, it = t, Me = null, e = !0) : e = !1), e || Ml(t)), null;
      case 13:
        return Bd(e, t, l);
      case 4:
        return lt(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ya(
          t,
          null,
          a,
          l
        ) : rt(e, t, a, l), t.child;
      case 11:
        return Od(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return rt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return rt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return rt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, jl(t, t.type, a.value), rt(e, t, a.children, l), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, fa(t), i = ut(i), a = a(i), t.flags |= 1, rt(e, t, a, l), t.child;
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
        return Ey(e, t, l);
      case 22:
        return zd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return fa(t), a = ut(ke), e === null ? (i = as(), i === null && (i = we, u = ts(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= l), i = u), t.memoizedState = { parent: a, cache: i }, is(t), jl(t, ke, i)) : ((e.lanes & l) !== 0 && (us(e, t), Xn(t, null, null, l), Yn()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), jl(t, ke, a)) : (a = u.cache, jl(t, ke, a), a !== i.cache && es(
          t,
          [ke],
          l,
          !0
        ))), rt(
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
  function pl(e) {
    e.flags |= 4;
  }
  function Ys(e, t, l, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (m0()) e.flags |= 8192;
        else
          throw ma = lu, ns;
    } else e.flags &= -16777217;
  }
  function Xd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !ah(t))
      if (m0()) e.flags |= 8192;
      else
        throw ma = lu, ns;
  }
  function Eu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? bo() : 536870912, e.lanes |= t, en |= t);
  }
  function Jn(e, t) {
    if (!ve)
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
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        l |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        l |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function Sy(e, t, l) {
    var a = t.pendingProps;
    switch ($r(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return je(t), null;
      case 1:
        return je(t), null;
      case 3:
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), hl(ke), Be(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ya(t) ? pl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Wr())), je(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (pl(t), u !== null ? (je(t), Xd(t, u)) : (je(t), Ys(
          t,
          i,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (pl(t), je(t), Xd(t, u)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && pl(t), je(t), Ys(
          t,
          i,
          e,
          a,
          l
        )), null;
      case 27:
        if (pe(t), l = ae.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && pl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return je(t), null;
          }
          e = G.current, Ya(t) ? Sf(t) : (e = $0(i, a, l), t.stateNode = e, pl(t));
        }
        return je(t), null;
      case 5:
        if (pe(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && pl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return je(t), null;
          }
          if (u = G.current, Ya(t))
            Sf(t);
          else {
            var f = Mu(
              ae.current
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
            u[nt] = t, u[ht] = a;
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
            e: switch (st(u, i, a), i) {
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
            a && pl(t);
          }
        }
        return je(t), Ys(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && pl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ae.current, Ya(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, i = it, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[nt] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || B0(e.nodeValue, l)), e || Ml(t, !0);
          } else
            e = Mu(e).createTextNode(
              a
            ), e[nt] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Ya(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[nt] = t;
            } else
              ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            l = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (_t(t), t) : (_t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Ya(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[nt] = t;
            } else
              ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), i = !1;
          } else
            i = Wr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (_t(t), t) : (_t(t), null);
        }
        return _t(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Eu(t, t.updateQueue), je(t), null);
      case 4:
        return Be(), e === null && cc(t.stateNode.containerInfo), je(t), null;
      case 10:
        return hl(t.type), je(t), null;
      case 19:
        if (L(Qe), a = t.memoizedState, a === null) return je(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) Jn(a, !1);
          else {
            if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = uu(e), u !== null) {
                  for (t.flags |= 128, Jn(a, !1), e = u.updateQueue, t.updateQueue = e, Eu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    gf(l, e), l = l.sibling;
                  return K(
                    Qe,
                    Qe.current & 1 | 2
                  ), ve && fl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Rt() > Au && (t.flags |= 128, i = !0, Jn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = uu(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Eu(t, e), Jn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ve)
                return je(t), null;
            } else
              2 * Rt() - a.renderingStartTime > Au && l !== 536870912 && (t.flags |= 128, i = !0, Jn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Rt(), e.sibling = null, l = Qe.current, K(
          Qe,
          i ? l & 1 | 2 : l & 1
        ), ve && fl(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return _t(t), os(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && Eu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && L(da), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), hl(ke), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ry(e, t) {
    switch ($r(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return hl(ke), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return pe(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (_t(t), t.alternate === null)
            throw Error(o(340));
          ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (_t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(Qe), null;
      case 4:
        return Be(), null;
      case 10:
        return hl(t.type), null;
      case 22:
      case 23:
        return _t(t), os(), e !== null && L(da), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return hl(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(e, t) {
    switch ($r(t), t.tag) {
      case 3:
        hl(ke), Be();
        break;
      case 26:
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && _t(t);
        break;
      case 13:
        _t(t);
        break;
      case 19:
        L(Qe);
        break;
      case 10:
        hl(t.type);
        break;
      case 22:
      case 23:
        _t(t), os(), e !== null && L(da);
        break;
      case 24:
        hl(ke);
    }
  }
  function $n(e, t) {
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
      Ce(t, t.return, m);
    }
  }
  function Yl(e, t, l) {
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
              } catch (j) {
                Ce(
                  i,
                  E,
                  j
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (j) {
      Ce(t, t.return, j);
    }
  }
  function Kd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Mf(t, l);
      } catch (a) {
        Ce(e, e.return, a);
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
      Ce(e, t, a);
    }
  }
  function Fn(e, t) {
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
      Ce(e, t, i);
    }
  }
  function al(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Ce(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (i) {
          Ce(e, t, i);
        }
      else l.current = null;
  }
  function Zd(e) {
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
      Ce(e, e.return, i);
    }
  }
  function Xs(e, t, l) {
    try {
      var a = e.stateNode;
      Ky(a, e.type, l, t), a[ht] = t;
    } catch (i) {
      Ce(e, e.return, i);
    }
  }
  function kd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jl(e.type) || e.tag === 4;
  }
  function Vs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || kd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ks(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = sl));
    else if (a !== 4 && (a === 27 && Jl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Ks(e, t, l), e = e.sibling; e !== null; )
        Ks(e, t, l), e = e.sibling;
  }
  function bu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Jl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (bu(e, t, l), e = e.sibling; e !== null; )
        bu(e, t, l), e = e.sibling;
  }
  function Jd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      st(t, a, l), t[nt] = e, t[ht] = l;
    } catch (u) {
      Ce(e, e.return, u);
    }
  }
  var vl = !1, Fe = !1, Qs = !1, $d = typeof WeakSet == "function" ? WeakSet : Set, Pe = null;
  function Ty(e, t) {
    if (e = e.containerInfo, dc = Yu, e = rf(e), Br(e)) {
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
            var f = 0, m = -1, E = -1, _ = 0, j = 0, B = e, O = null;
            t: for (; ; ) {
              for (var z; B !== l || i !== 0 && B.nodeType !== 3 || (m = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (E = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (z = B.firstChild) !== null; )
                O = B, B = z;
              for (; ; ) {
                if (B === e) break t;
                if (O === l && ++_ === i && (m = f), O === u && ++j === a && (E = f), (z = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = z;
            }
            l = m === -1 || E === -1 ? null : { start: m, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (hc = { focusedElem: e, selectionRange: l }, Yu = !1, Pe = t; Pe !== null; )
      if (t = Pe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, Pe = e;
      else
        for (; Pe !== null; ) {
          switch (t = Pe, u = t.alternate, e = t.flags, t.tag) {
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
                  var J = pa(
                    l.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Ce(
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
                  gc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      gc(e);
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
            e.return = t.return, Pe = e;
            break;
          }
          Pe = t.return;
        }
  }
  function Fd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bl(e, l), a & 4 && $n(5, l);
        break;
      case 1:
        if (bl(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Ce(l, l.return, f);
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
              Ce(
                l,
                l.return,
                f
              );
            }
          }
        a & 64 && Kd(l), a & 512 && Fn(l, l.return);
        break;
      case 3:
        if (bl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            Mf(e, t);
          } catch (f) {
            Ce(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Jd(l);
      case 26:
      case 5:
        bl(e, l), t === null && a & 4 && Zd(l), a & 512 && Fn(l, l.return);
        break;
      case 12:
        bl(e, l);
        break;
      case 31:
        bl(e, l), a & 4 && Pd(e, l);
        break;
      case 13:
        bl(e, l), a & 4 && e0(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = zy.bind(
          null,
          l
        ), Iy(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || vl, !a) {
          t = t !== null && t.memoizedState !== null || Fe, i = vl;
          var u = Fe;
          vl = a, (Fe = t) && !u ? Sl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : bl(e, l), vl = i, Fe = u;
        }
        break;
      case 30:
        break;
      default:
        bl(e, l);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Sr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Le = null, yt = !1;
  function El(e, t, l) {
    for (l = l.child; l !== null; )
      Id(e, t, l), l = l.sibling;
  }
  function Id(e, t, l) {
    if (Tt && typeof Tt.onCommitFiberUnmount == "function")
      try {
        Tt.onCommitFiberUnmount(bn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Fe || al(l, t), El(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Fe || al(l, t);
        var a = Le, i = yt;
        Jl(l.type) && (Le = l.stateNode, yt = !1), El(
          e,
          t,
          l
        ), ii(l.stateNode), Le = a, yt = i;
        break;
      case 5:
        Fe || al(l, t);
      case 6:
        if (a = Le, i = yt, Le = null, El(
          e,
          t,
          l
        ), Le = a, yt = i, Le !== null)
          if (yt)
            try {
              (Le.nodeType === 9 ? Le.body : Le.nodeName === "HTML" ? Le.ownerDocument.body : Le).removeChild(l.stateNode);
            } catch (u) {
              Ce(
                l,
                t,
                u
              );
            }
          else
            try {
              Le.removeChild(l.stateNode);
            } catch (u) {
              Ce(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Le !== null && (yt ? (e = Le, K0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), cn(e)) : K0(Le, l.stateNode));
        break;
      case 4:
        a = Le, i = yt, Le = l.stateNode.containerInfo, yt = !0, El(
          e,
          t,
          l
        ), Le = a, yt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yl(2, l, t), Fe || Yl(4, l, t), El(
          e,
          t,
          l
        );
        break;
      case 1:
        Fe || (al(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Qd(
          l,
          t,
          a
        )), El(
          e,
          t,
          l
        );
        break;
      case 21:
        El(
          e,
          t,
          l
        );
        break;
      case 22:
        Fe = (a = Fe) || l.memoizedState !== null, El(
          e,
          t,
          l
        ), Fe = a;
        break;
      default:
        El(
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
        cn(e);
      } catch (l) {
        Ce(t, t.return, l);
      }
    }
  }
  function e0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        cn(e);
      } catch (l) {
        Ce(t, t.return, l);
      }
  }
  function Ay(e) {
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
  function Su(e, t) {
    var l = Ay(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var i = Uy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function gt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var i = l[a], u = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Jl(m.type)) {
                Le = m.stateNode, yt = !1;
                break e;
              }
              break;
            case 5:
              Le = m.stateNode, yt = !1;
              break e;
            case 3:
            case 4:
              Le = m.stateNode.containerInfo, yt = !0;
              break e;
          }
          m = m.return;
        }
        if (Le === null) throw Error(o(160));
        Id(u, f, i), Le = null, yt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
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
        gt(t, e), pt(e), a & 4 && (Yl(3, e, e.return), $n(3, e), Yl(5, e, e.return));
        break;
      case 1:
        gt(t, e), pt(e), a & 512 && (Fe || l === null || al(l, l.return)), a & 64 && vl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var i = Zt;
        if (gt(t, e), pt(e), a & 512 && (Fe || l === null || al(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Tn] || u[nt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), st(u, a, l), u[nt] = e, Ie(u), a = u;
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
                      u = i.createElement(a), st(u, a, l), i.head.appendChild(u);
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
                      u = i.createElement(a), st(u, a, l), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[nt] = e, Ie(u), a = u;
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
            )) : a === null && e.stateNode !== null && Xs(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        gt(t, e), pt(e), a & 512 && (Fe || l === null || al(l, l.return)), l !== null && a & 4 && Xs(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (gt(t, e), pt(e), a & 512 && (Fe || l === null || al(l, l.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Da(i, "");
          } catch (J) {
            Ce(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, Xs(
          e,
          i,
          l !== null ? l.memoizedProps : i
        )), a & 1024 && (Qs = !0);
        break;
      case 6:
        if (gt(t, e), pt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (J) {
            Ce(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Hu = null, i = Zt, Zt = ju(t.containerInfo), gt(t, e), Zt = i, pt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            cn(t.containerInfo);
          } catch (J) {
            Ce(e, e.return, J);
          }
        Qs && (Qs = !1, l0(e));
        break;
      case 4:
        a = Zt, Zt = ju(
          e.stateNode.containerInfo
        ), gt(t, e), pt(e), Zt = a;
        break;
      case 12:
        gt(t, e), pt(e);
        break;
      case 31:
        gt(t, e), pt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Su(e, a)));
        break;
      case 13:
        gt(t, e), pt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Tu = Rt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Su(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = l !== null && l.memoizedState !== null, _ = vl, j = Fe;
        if (vl = _ || i, Fe = j || E, gt(t, e), Fe = j, vl = _, pt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || E || vl || Fe || va(e)), l = null, t = e; ; ) {
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
                } catch (J) {
                  Ce(E, E.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (J) {
                  Ce(E, E.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                E = t;
                try {
                  var z = E.stateNode;
                  i ? Q0(z, !0) : Q0(E.stateNode, !1);
                } catch (J) {
                  Ce(E, E.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Su(e, l))));
        break;
      case 19:
        gt(t, e), pt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Su(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        gt(t, e), pt(e);
    }
  }
  function pt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (kd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode, u = Vs(e);
            bu(e, u, i);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Da(f, ""), l.flags &= -33);
            var m = Vs(e);
            bu(e, m, f);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo, _ = Vs(e);
            Ks(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Ce(e, e.return, j);
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
  function bl(e, t) {
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
          Yl(4, t, t.return), va(t);
          break;
        case 1:
          al(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Qd(
            t,
            t.return,
            l
          ), va(t);
          break;
        case 27:
          ii(t.stateNode);
        case 26:
        case 5:
          al(t, t.return), va(t);
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
  function Sl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Sl(
            i,
            u,
            l
          ), $n(4, u);
          break;
        case 1:
          if (Sl(
            i,
            u,
            l
          ), a = u, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              Ce(a, a.return, _);
            }
          if (a = u, i = a.updateQueue, i !== null) {
            var m = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Uf(E[i], m);
            } catch (_) {
              Ce(a, a.return, _);
            }
          }
          l && f & 64 && Kd(u), Fn(u, u.return);
          break;
        case 27:
          Jd(u);
        case 26:
        case 5:
          Sl(
            i,
            u,
            l
          ), l && a === null && f & 4 && Zd(u), Fn(u, u.return);
          break;
        case 12:
          Sl(
            i,
            u,
            l
          );
          break;
        case 31:
          Sl(
            i,
            u,
            l
          ), l && f & 4 && Pd(i, u);
          break;
        case 13:
          Sl(
            i,
            u,
            l
          ), l && f & 4 && e0(i, u);
          break;
        case 22:
          u.memoizedState === null && Sl(
            i,
            u,
            l
          ), Fn(u, u.return);
          break;
        case 30:
          break;
        default:
          Sl(
            i,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Zs(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ln(l));
  }
  function ks(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ln(e));
  }
  function kt(e, t, l, a) {
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
        kt(
          e,
          t,
          l,
          a
        ), i & 2048 && $n(9, t);
        break;
      case 1:
        kt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        kt(
          e,
          t,
          l,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ln(e)));
        break;
      case 12:
        if (i & 2048) {
          kt(
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
            Ce(t, t.return, E);
          }
        } else
          kt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        kt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        kt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? kt(
          e,
          t,
          l,
          a
        ) : Wn(e, t) : u._visibility & 2 ? kt(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, Wa(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Zs(f, t);
        break;
      case 24:
        kt(
          e,
          t,
          l,
          a
        ), i & 2048 && ks(t.alternate, t);
        break;
      default:
        kt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Wa(e, t, l, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, m = l, E = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Wa(
            u,
            f,
            m,
            E,
            i
          ), $n(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? Wa(
            u,
            f,
            m,
            E,
            i
          ) : Wn(
            u,
            f
          ) : (j._visibility |= 2, Wa(
            u,
            f,
            m,
            E,
            i
          )), i && _ & 2048 && Zs(
            f.alternate,
            f
          );
          break;
        case 24:
          Wa(
            u,
            f,
            m,
            E,
            i
          ), i && _ & 2048 && ks(f.alternate, f);
          break;
        default:
          Wa(
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
  function Wn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            Wn(l, a), i & 2048 && Zs(
              a.alternate,
              a
            );
            break;
          case 24:
            Wn(l, a), i & 2048 && ks(a.alternate, a);
            break;
          default:
            Wn(l, a);
        }
        t = t.sibling;
      }
  }
  var In = 8192;
  function Ia(e, t, l) {
    if (e.subtreeFlags & In)
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
        Ia(
          e,
          t,
          l
        ), e.flags & In && e.memoizedState !== null && og(
          l,
          Zt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ia(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Zt;
        Zt = ju(e.stateNode.containerInfo), Ia(
          e,
          t,
          l
        ), Zt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = In, In = 16777216, Ia(
          e,
          t,
          l
        ), In = a) : Ia(
          e,
          t,
          l
        ));
        break;
      default:
        Ia(
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
  function Pn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Pe = a, r0(
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
        Pn(e), e.flags & 2048 && Yl(9, e, e.return);
        break;
      case 3:
        Pn(e);
        break;
      case 12:
        Pn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ru(e)) : Pn(e);
        break;
      default:
        Pn(e);
    }
  }
  function Ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Pe = a, r0(
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
          Yl(8, t, t.return), Ru(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Ru(t));
          break;
        default:
          Ru(t);
      }
      e = e.sibling;
    }
  }
  function r0(e, t) {
    for (; Pe !== null; ) {
      var l = Pe;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Yl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ln(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, Pe = a;
      else
        e: for (l = e; Pe !== null; ) {
          a = Pe;
          var i = a.sibling, u = a.return;
          if (Wd(a), a === l) {
            Pe = null;
            break e;
          }
          if (i !== null) {
            i.return = u, Pe = i;
            break e;
          }
          Pe = u;
        }
    }
  }
  var xy = {
    getCacheForType: function(e) {
      var t = ut(ke), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return ut(ke).controller.signal;
    }
  }, Cy = typeof WeakMap == "function" ? WeakMap : Map, Ae = 0, we = null, fe = null, ye = 0, xe = 0, Ot = null, Xl = !1, Pa = !1, Js = !1, Rl = 0, Ye = 0, Vl = 0, Ea = 0, $s = 0, wt = 0, en = 0, ei = null, vt = null, Fs = !1, Tu = 0, s0 = 0, Au = 1 / 0, xu = null, Kl = null, We = 0, Ql = null, tn = null, Tl = 0, Ws = 0, Is = null, c0 = null, ti = 0, Ps = null;
  function Dt() {
    return (Ae & 2) !== 0 && ye !== 0 ? ye & -ye : Y.T !== null ? ic() : Ao();
  }
  function o0() {
    if (wt === 0)
      if ((ye & 536870912) === 0 || ve) {
        var e = Ui;
        Ui <<= 1, (Ui & 3932160) === 0 && (Ui = 262144), wt = e;
      } else wt = 536870912;
    return e = Nt.current, e !== null && (e.flags |= 32), wt;
  }
  function Et(e, t, l) {
    (e === we && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (ln(e, 0), Zl(
      e,
      ye,
      wt,
      !1
    )), Rn(e, l), ((Ae & 2) === 0 || e !== we) && (e === we && ((Ae & 2) === 0 && (Ea |= l), Ye === 4 && Zl(
      e,
      ye,
      wt,
      !1
    )), nl(e));
  }
  function f0(e, t, l) {
    if ((Ae & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sn(e, t), i = a ? Oy(e, t) : tc(e, t, !0), u = a;
    do {
      if (i === 0) {
        Pa && !a && Zl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !Ny(l)) {
          i = tc(e, t, !1), u = !1;
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
              i = ei;
              var E = m.current.memoizedState.isDehydrated;
              if (E && (ln(m, f).flags |= 256), f = tc(
                m,
                f,
                !1
              ), f !== 2) {
                if (Js && !E) {
                  m.errorRecoveryDisabledLanes |= u, Ea |= u, i = 4;
                  break e;
                }
                u = vt, vt = i, u !== null && (vt === null ? vt = u : vt.push.apply(
                  vt,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          ln(e, 0), Zl(e, t, 0, !0);
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
              Zl(
                a,
                t,
                wt,
                !Xl
              );
              break e;
            case 2:
              vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (i = Tu + 300 - Rt(), 10 < i)) {
            if (Zl(
              a,
              t,
              wt,
              !Xl
            ), ji(a, 0, !0) !== 0) break e;
            Tl = t, a.timeoutHandle = X0(
              d0.bind(
                null,
                a,
                l,
                vt,
                xu,
                Fs,
                t,
                wt,
                Ea,
                en,
                Xl,
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
            vt,
            xu,
            Fs,
            t,
            wt,
            Ea,
            en,
            Xl,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    nl(e);
  }
  function d0(e, t, l, a, i, u, f, m, E, _, j, B, O, z) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sl
      }, n0(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? Tu - Rt() : (u & 4194048) === u ? s0 - Rt() : 0;
      if (J = fg(
        B,
        J
      ), J !== null) {
        Tl = u, e.cancelPendingCommit = J(
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
            j,
            B,
            null,
            O,
            z
          )
        ), Zl(e, u, f, !_);
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
  function Ny(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var i = l[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!xt(u(), i)) return !1;
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
  function Zl(e, t, l, a) {
    t &= ~$s, t &= ~Ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - At(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    l !== 0 && So(e, l, t);
  }
  function Cu() {
    return (Ae & 6) === 0 ? (li(0), !1) : !0;
  }
  function ec() {
    if (fe !== null) {
      if (xe === 0)
        var e = fe.return;
      else
        e = fe, dl = oa = null, gs(e), Za = null, Bn = 0, e = fe;
      for (; e !== null; )
        Vd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function ln(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, ky(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tl = 0, ec(), we = e, fe = l = ol(e.current, null), ye = t, xe = 0, Ot = null, Xl = !1, Pa = Sn(e, t), Js = !1, en = wt = $s = Ea = Vl = Ye = 0, vt = ei = null, Fs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - At(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return Rl = t, ki(), l;
  }
  function h0(e, t) {
    ue = null, Y.H = Zn, t === Qa || t === tu ? (t = Of(), xe = 3) : t === ns ? (t = Of(), xe = 4) : xe = t === zs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ot = t, fe === null && (Ye = 1, yu(
      e,
      Lt(t, e.current)
    ));
  }
  function m0() {
    var e = Nt.current;
    return e === null ? !0 : (ye & 4194048) === ye ? Gt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Gt : !1;
  }
  function y0() {
    var e = Y.H;
    return Y.H = Zn, e === null ? Zn : e;
  }
  function g0() {
    var e = Y.A;
    return Y.A = xy, e;
  }
  function Nu() {
    Ye = 4, Xl || (ye & 4194048) !== ye && Nt.current !== null || (Pa = !0), (Vl & 134217727) === 0 && (Ea & 134217727) === 0 || we === null || Zl(
      we,
      ye,
      wt,
      !1
    );
  }
  function tc(e, t, l) {
    var a = Ae;
    Ae |= 2;
    var i = y0(), u = g0();
    (we !== e || ye !== t) && (xu = null, ln(e, t)), t = !1;
    var f = Ye;
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var m = fe, E = Ot;
          switch (xe) {
            case 8:
              ec(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var _ = xe;
              if (xe = 0, Ot = null, an(e, m, E, _), l && Pa) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = xe, xe = 0, Ot = null, an(e, m, E, _);
          }
        }
        _y(), f = Ye;
        break;
      } catch (j) {
        h0(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, dl = oa = null, Ae = a, Y.H = i, Y.A = u, fe === null && (we = null, ye = 0, ki()), f;
  }
  function _y() {
    for (; fe !== null; ) p0(fe);
  }
  function Oy(e, t) {
    var l = Ae;
    Ae |= 2;
    var a = y0(), i = g0();
    we !== e || ye !== t ? (xu = null, Au = Rt() + 500, ln(e, t)) : Pa = Sn(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe;
          var u = Ot;
          t: switch (xe) {
            case 1:
              xe = 0, Ot = null, an(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Nf(u)) {
                xe = 0, Ot = null, v0(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || we !== e || (xe = 7), nl(e);
              }, u.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              Nf(u) ? (xe = 0, Ot = null, v0(t)) : (xe = 0, Ot = null, an(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var m = fe;
                  if (f ? ah(f) : m.stateNode.complete) {
                    xe = 0, Ot = null;
                    var E = m.sibling;
                    if (E !== null) fe = E;
                    else {
                      var _ = m.return;
                      _ !== null ? (fe = _, _u(_)) : fe = null;
                    }
                    break t;
                  }
              }
              xe = 0, Ot = null, an(e, t, u, 5);
              break;
            case 6:
              xe = 0, Ot = null, an(e, t, u, 6);
              break;
            case 8:
              ec(), Ye = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        wy();
        break;
      } catch (j) {
        h0(e, j);
      }
    while (!0);
    return dl = oa = null, Y.H = a, Y.A = i, Ae = l, fe !== null ? 0 : (we = null, ye = 0, ki(), Ye);
  }
  function wy() {
    for (; fe !== null && !Pm(); )
      p0(fe);
  }
  function p0(e) {
    var t = Yd(e.alternate, e, Rl);
    e.memoizedProps = e.pendingProps, t === null ? _u(e) : fe = t;
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
          ye
        );
        break;
      case 11:
        t = jd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ye
        );
        break;
      case 5:
        gs(t);
      default:
        Vd(l, t), t = fe = gf(t, Rl), t = Yd(l, t, Rl);
    }
    e.memoizedProps = e.pendingProps, t === null ? _u(e) : fe = t;
  }
  function an(e, t, l, a) {
    dl = oa = null, gs(t), Za = null, Bn = 0;
    var i = t.return;
    try {
      if (vy(
        e,
        i,
        t,
        l,
        ye
      )) {
        Ye = 1, yu(
          e,
          Lt(l, e.current)
        ), fe = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw fe = i, u;
      Ye = 1, yu(
        e,
        Lt(l, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ve || a === 1 ? e = !0 : Pa || (ye & 536870912) !== 0 ? e = !1 : (Xl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Nt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), E0(t, e)) : _u(t);
  }
  function _u(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        E0(
          t,
          Xl
        );
        return;
      }
      e = t.return;
      var l = Sy(
        t.alternate,
        t,
        Rl
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
    Ye === 0 && (Ye = 5);
  }
  function E0(e, t) {
    do {
      var l = Ry(e.alternate, e);
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
    Ye = 6, fe = null;
  }
  function b0(e, t, l, a, i, u, f, m, E) {
    e.cancelPendingCommit = null;
    do
      Ou();
    while (We !== 0);
    if ((Ae & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Vr, c1(
        e,
        l,
        u,
        f,
        m,
        E
      ), e === we && (fe = we = null, ye = 0), tn = t, Ql = e, Tl = l, Ws = u, Is = i, c0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, My(Di, function() {
        return x0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = Y.T, Y.T = null, i = Q.p, Q.p = 2, f = Ae, Ae |= 4;
        try {
          Ty(e, t, l);
        } finally {
          Ae = f, Q.p = i, Y.T = a;
        }
      }
      We = 1, S0(), R0(), T0();
    }
  }
  function S0() {
    if (We === 1) {
      We = 0;
      var e = Ql, t = tn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = Y.T, Y.T = null;
        var a = Q.p;
        Q.p = 2;
        var i = Ae;
        Ae |= 4;
        try {
          t0(t, e);
          var u = hc, f = rf(e.containerInfo), m = u.focusedElem, E = u.selectionRange;
          if (f !== m && m && m.ownerDocument && uf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (E !== null && Br(m)) {
              var _ = E.start, j = E.end;
              if (j === void 0 && (j = _), "selectionStart" in m)
                m.selectionStart = _, m.selectionEnd = Math.min(
                  j,
                  m.value.length
                );
              else {
                var B = m.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var z = O.getSelection(), J = m.textContent.length, ee = Math.min(E.start, J), Oe = E.end === void 0 ? ee : Math.min(E.end, J);
                  !z.extend && ee > Oe && (f = Oe, Oe = ee, ee = f);
                  var A = nf(
                    m,
                    ee
                  ), R = nf(
                    m,
                    Oe
                  );
                  if (A && R && (z.rangeCount !== 1 || z.anchorNode !== A.node || z.anchorOffset !== A.offset || z.focusNode !== R.node || z.focusOffset !== R.offset)) {
                    var N = B.createRange();
                    N.setStart(A.node, A.offset), z.removeAllRanges(), ee > Oe ? (z.addRange(N), z.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset), z.addRange(N));
                  }
                }
              }
            }
            for (B = [], z = m; z = z.parentNode; )
              z.nodeType === 1 && B.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < B.length; m++) {
              var H = B[m];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Yu = !!dc, hc = dc = null;
        } finally {
          Ae = i, Q.p = a, Y.T = l;
        }
      }
      e.current = t, We = 2;
    }
  }
  function R0() {
    if (We === 2) {
      We = 0;
      var e = Ql, t = tn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = Y.T, Y.T = null;
        var a = Q.p;
        Q.p = 2;
        var i = Ae;
        Ae |= 4;
        try {
          Fd(e, t.alternate, t);
        } finally {
          Ae = i, Q.p = a, Y.T = l;
        }
      }
      We = 3;
    }
  }
  function T0() {
    if (We === 4 || We === 3) {
      We = 0, e1();
      var e = Ql, t = tn, l = Tl, a = c0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? We = 5 : (We = 0, tn = Ql = null, A0(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Kl = null), Er(l), t = t.stateNode, Tt && typeof Tt.onCommitFiberRoot == "function")
        try {
          Tt.onCommitFiberRoot(
            bn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = Y.T, i = Q.p, Q.p = 2, Y.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            u(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          Y.T = t, Q.p = i;
        }
      }
      (Tl & 3) !== 0 && Ou(), nl(e), i = e.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? e === Ps ? ti++ : (ti = 0, Ps = e) : ti = 0, li(0);
    }
  }
  function A0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ln(t)));
  }
  function Ou() {
    return S0(), R0(), T0(), x0();
  }
  function x0() {
    if (We !== 5) return !1;
    var e = Ql, t = Ws;
    Ws = 0;
    var l = Er(Tl), a = Y.T, i = Q.p;
    try {
      Q.p = 32 > l ? 32 : l, Y.T = null, l = Is, Is = null;
      var u = Ql, f = Tl;
      if (We = 0, tn = Ql = null, Tl = 0, (Ae & 6) !== 0) throw Error(o(331));
      var m = Ae;
      if (Ae |= 4, u0(u.current), a0(
        u,
        u.current,
        f,
        l
      ), Ae = m, li(0, !1), Tt && typeof Tt.onPostCommitFiberRoot == "function")
        try {
          Tt.onPostCommitFiberRoot(bn, u);
        } catch {
        }
      return !0;
    } finally {
      Q.p = i, Y.T = a, A0(e, t);
    }
  }
  function C0(e, t, l) {
    t = Lt(l, t), t = Ds(e.stateNode, t, 2), e = Bl(e, t, 2), e !== null && (Rn(e, 2), nl(e));
  }
  function Ce(e, t, l) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Kl === null || !Kl.has(a))) {
            e = Lt(l, e), l = Nd(2), a = Bl(t, l, 2), a !== null && (_d(
              l,
              a,
              t,
              e
            ), Rn(a, 2), nl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function lc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Cy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(l) || (Js = !0, i.add(l), e = Dy.bind(null, e, t, l), t.then(e, e));
  }
  function Dy(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, we === e && (ye & l) === l && (Ye === 4 || Ye === 3 && (ye & 62914560) === ye && 300 > Rt() - Tu ? (Ae & 2) === 0 && ln(e, 0) : $s |= l, en === ye && (en = 0)), nl(e);
  }
  function N0(e, t) {
    t === 0 && (t = bo()), e = ra(e, t), e !== null && (Rn(e, t), nl(e));
  }
  function zy(e) {
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
    return yr(e, t);
  }
  var wu = null, nn = null, ac = !1, Du = !1, nc = !1, kl = 0;
  function nl(e) {
    e !== nn && e.next === null && (nn === null ? wu = nn = e : nn = nn.next = e), Du = !0, ac || (ac = !0, Ly());
  }
  function li(e, t) {
    if (!nc && Du) {
      nc = !0;
      do
        for (var l = !1, a = wu; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - At(42 | e) + 1) - 1, u &= i & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, D0(a, u));
          } else
            u = ye, u = ji(
              a,
              a === we ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Sn(a, u) || (l = !0, D0(a, u));
          a = a.next;
        }
      while (l);
      nc = !1;
    }
  }
  function jy() {
    _0();
  }
  function _0() {
    Du = ac = !1;
    var e = 0;
    kl !== 0 && Zy() && (e = kl);
    for (var t = Rt(), l = null, a = wu; a !== null; ) {
      var i = a.next, u = O0(a, t);
      u === 0 ? (a.next = null, l === null ? wu = i : l.next = i, i === null && (nn = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Du = !0)), a = i;
    }
    We !== 0 && We !== 5 || li(e), kl !== 0 && (kl = 0);
  }
  function O0(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - At(u), m = 1 << f, E = i[f];
      E === -1 ? ((m & l) === 0 || (m & a) !== 0) && (i[f] = s1(m, t)) : E <= t && (e.expiredLanes |= m), u &= ~m;
    }
    if (t = we, l = ye, l = ji(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && gr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Sn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && gr(a), Er(l)) {
        case 2:
        case 8:
          l = vo;
          break;
        case 32:
          l = Di;
          break;
        case 268435456:
          l = Eo;
          break;
        default:
          l = Di;
      }
      return a = w0.bind(null, e), l = yr(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && gr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function w0(e, t) {
    if (We !== 0 && We !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Ou() && e.callbackNode !== l)
      return null;
    var a = ye;
    return a = ji(
      e,
      e === we ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (f0(e, a, t), O0(e, Rt()), e.callbackNode != null && e.callbackNode === l ? w0.bind(null, e) : null);
  }
  function D0(e, t) {
    if (Ou()) return null;
    f0(e, t, !0);
  }
  function Ly() {
    Jy(function() {
      (Ae & 6) !== 0 ? yr(
        po,
        jy
      ) : _0();
    });
  }
  function ic() {
    if (kl === 0) {
      var e = Va;
      e === 0 && (e = zi, zi <<= 1, (zi & 261888) === 0 && (zi = 256)), kl = e;
    }
    return kl;
  }
  function z0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qi("" + e);
  }
  function U0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Hy(e, t, l, a, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var u = z0(
        (i[ht] || null).action
      ), f = a.submitter;
      f && (t = (t = f[ht] || null) ? z0(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var m = new Vi(
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
                  var E = f ? U0(i, f) : new FormData(i);
                  xs(
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
                typeof u == "function" && (m.preventDefault(), E = f ? U0(i, f) : new FormData(i), xs(
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
  for (var uc = 0; uc < Xr.length; uc++) {
    var rc = Xr[uc], By = rc.toLowerCase(), qy = rc[0].toUpperCase() + rc.slice(1);
    Qt(
      By,
      "on" + qy
    );
  }
  Qt(of, "onAnimationEnd"), Qt(ff, "onAnimationIteration"), Qt(df, "onAnimationStart"), Qt("dblclick", "onDoubleClick"), Qt("focusin", "onFocus"), Qt("focusout", "onBlur"), Qt(ty, "onTransitionRun"), Qt(ly, "onTransitionStart"), Qt(ay, "onTransitionCancel"), Qt(hf, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), aa(
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
  var ai = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Gy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ai)
  );
  function M0(e, t) {
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
            } catch (j) {
              Zi(j);
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
            } catch (j) {
              Zi(j);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[br];
    l === void 0 && (l = t[br] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (j0(t, e, 2, !1), l.add(a));
  }
  function sc(e, t, l) {
    var a = 0;
    t && (a |= 4), j0(
      l,
      e,
      a,
      t
    );
  }
  var zu = "_reactListening" + Math.random().toString(36).slice(2);
  function cc(e) {
    if (!e[zu]) {
      e[zu] = !0, No.forEach(function(l) {
        l !== "selectionchange" && (Gy.has(l) || sc(l, !1, e), sc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zu] || (t[zu] = !0, sc("selectionchange", !1, t));
    }
  }
  function j0(e, t, l, a) {
    switch (oh(t)) {
      case 2:
        var i = mg;
        break;
      case 8:
        i = yg;
        break;
      default:
        i = Ac;
    }
    l = i.bind(
      null,
      t,
      l,
      e
    ), i = void 0, !Or || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
      passive: i
    }) : e.addEventListener(t, l, !1);
  }
  function oc(e, t, l, a, i) {
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
            if (f = Ca(m), f === null) return;
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
      var _ = u, j = Nr(l), B = [];
      e: {
        var O = mf.get(e);
        if (O !== void 0) {
          var z = Vi, J = e;
          switch (e) {
            case "keypress":
              if (Yi(l) === 0) break e;
            case "keydown":
            case "keyup":
              z = U1;
              break;
            case "focusin":
              J = "focus", z = Ur;
              break;
            case "focusout":
              J = "blur", z = Ur;
              break;
            case "beforeblur":
            case "afterblur":
              z = Ur;
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
              z = Xo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              z = S1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              z = L1;
              break;
            case of:
            case ff:
            case df:
              z = A1;
              break;
            case hf:
              z = B1;
              break;
            case "scroll":
            case "scrollend":
              z = E1;
              break;
            case "wheel":
              z = G1;
              break;
            case "copy":
            case "cut":
            case "paste":
              z = C1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              z = Ko;
              break;
            case "toggle":
            case "beforetoggle":
              z = X1;
          }
          var ee = (t & 4) !== 0, Oe = !ee && (e === "scroll" || e === "scrollend"), A = ee ? O !== null ? O + "Capture" : null : O;
          ee = [];
          for (var R = _, N; R !== null; ) {
            var H = R;
            if (N = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || N === null || A === null || (H = xn(R, A), H != null && ee.push(
              ni(R, H, N)
            )), Oe) break;
            R = R.return;
          }
          0 < ee.length && (O = new z(
            O,
            J,
            null,
            l,
            j
          ), B.push({ event: O, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", O && l !== Cr && (J = l.relatedTarget || l.fromElement) && (Ca(J) || J[xa]))
            break e;
          if ((z || O) && (O = j.window === j ? j : (O = j.ownerDocument) ? O.defaultView || O.parentWindow : window, z ? (J = l.relatedTarget || l.toElement, z = _, J = J ? Ca(J) : null, J !== null && (Oe = h(J), ee = J.tag, J !== Oe || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (z = null, J = _), z !== J)) {
            if (ee = Xo, H = "onMouseLeave", A = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Ko, H = "onPointerLeave", A = "onPointerEnter", R = "pointer"), Oe = z == null ? O : An(z), N = J == null ? O : An(J), O = new ee(
              H,
              R + "leave",
              z,
              l,
              j
            ), O.target = Oe, O.relatedTarget = N, H = null, Ca(j) === _ && (ee = new ee(
              A,
              R + "enter",
              J,
              l,
              j
            ), ee.target = N, ee.relatedTarget = Oe, H = ee), Oe = H, z && J)
              t: {
                for (ee = Yy, A = z, R = J, N = 0, H = A; H; H = ee(H))
                  N++;
                H = 0;
                for (var I = R; I; I = ee(I))
                  H++;
                for (; 0 < N - H; )
                  A = ee(A), N--;
                for (; 0 < H - N; )
                  R = ee(R), H--;
                for (; N--; ) {
                  if (A === R || R !== null && A === R.alternate) {
                    ee = A;
                    break t;
                  }
                  A = ee(A), R = ee(R);
                }
                ee = null;
              }
            else ee = null;
            z !== null && L0(
              B,
              O,
              z,
              ee,
              !1
            ), J !== null && Oe !== null && L0(
              B,
              Oe,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (O = _ ? An(_) : window, z = O.nodeName && O.nodeName.toLowerCase(), z === "select" || z === "input" && O.type === "file")
            var Se = Io;
          else if (Fo(O))
            if (Po)
              Se = I1;
            else {
              Se = F1;
              var F = $1;
            }
          else
            z = O.nodeName, !z || z.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? _ && xr(_.elementType) && (Se = Io) : Se = W1;
          if (Se && (Se = Se(e, _))) {
            Wo(
              B,
              Se,
              l,
              j
            );
            break e;
          }
          F && F(e, O, _), e === "focusout" && _ && O.type === "number" && _.memoizedProps.value != null && Ar(O, "number", O.value);
        }
        switch (F = _ ? An(_) : window, e) {
          case "focusin":
            (Fo(F) || F.contentEditable === "true") && (ja = F, qr = _, Un = null);
            break;
          case "focusout":
            Un = qr = ja = null;
            break;
          case "mousedown":
            Gr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gr = !1, sf(B, l, j);
            break;
          case "selectionchange":
            if (ey) break;
          case "keydown":
          case "keyup":
            sf(B, l, j);
        }
        var se;
        if (jr)
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
          Ma ? Jo(e, l) && (ge = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ge = "onCompositionStart");
        ge && (Qo && l.locale !== "ko" && (Ma || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Ma && (se = Go()) : (Dl = j, wr = "value" in Dl ? Dl.value : Dl.textContent, Ma = !0)), F = Uu(_, ge), 0 < F.length && (ge = new Vo(
          ge,
          e,
          null,
          l,
          j
        ), B.push({ event: ge, listeners: F }), se ? ge.data = se : (se = $o(l), se !== null && (ge.data = se)))), (se = K1 ? Q1(e, l) : Z1(e, l)) && (ge = Uu(_, "onBeforeInput"), 0 < ge.length && (F = new Vo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          j
        ), B.push({
          event: F,
          listeners: ge
        }), F.data = se)), Hy(
          B,
          e,
          _,
          l,
          j
        );
      }
      M0(B, t);
    });
  }
  function ni(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Uu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = xn(e, l), i != null && a.unshift(
        ni(e, i, u)
      ), i = xn(e, t), i != null && a.push(
        ni(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Yy(e) {
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
      m !== 5 && m !== 26 && m !== 27 || _ === null || (E = _, i ? (_ = xn(l, u), _ != null && f.unshift(
        ni(l, _, E)
      )) : i || (_ = xn(l, u), _ != null && f.push(
        ni(l, _, E)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Xy = /\r\n?/g, Vy = /\u0000|\uFFFD/g;
  function H0(e) {
    return (typeof e == "string" ? e : "" + e).replace(Xy, `
`).replace(Vy, "");
  }
  function B0(e, t) {
    return t = H0(t), H0(e) === t;
  }
  function _e(e, t, l, a, i, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Da(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Da(e, "" + a);
        break;
      case "className":
        Hi(e, "class", a);
        break;
      case "tabIndex":
        Hi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Hi(e, l, a);
        break;
      case "style":
        Ho(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Hi(e, "data", a);
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
        a = qi("" + a), e.setAttribute(l, a);
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
          typeof u == "function" && (l === "formAction" ? (t !== "input" && _e(e, t, "name", i.name, i, null), _e(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), _e(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), _e(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (_e(e, t, "encType", i.encType, i, null), _e(e, t, "method", i.method, i, null), _e(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = qi("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = sl);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
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
        l = qi("" + a), e.setAttributeNS(
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
        de("beforetoggle", e), de("toggle", e), Li(e, "popover", a);
        break;
      case "xlinkActuate":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        rl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        rl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        rl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Li(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = p1.get(l) || l, Li(e, l, a));
    }
  }
  function fc(e, t, l, a, i, u) {
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
        typeof a == "string" ? Da(e, a) : (typeof a == "number" || typeof a == "bigint") && Da(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = sl);
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
            if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), u = e[ht] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, i);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Li(e, l, a);
          }
    }
  }
  function st(e, t, l) {
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
                  _e(e, t, u, f, l, null);
              }
          }
        i && _e(e, t, "srcSet", l.srcSet, l, null), a && _e(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var m = u = f = i = null, E = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var j = l[a];
            if (j != null)
              switch (a) {
                case "name":
                  i = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  E = j;
                  break;
                case "defaultChecked":
                  _ = j;
                  break;
                case "value":
                  u = j;
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
                  _e(e, t, a, j, l, null);
              }
          }
        Uo(
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
        de("invalid", e), a = f = u = null;
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
                _e(e, t, i, m, l, null);
            }
        t = u, l = f, e.multiple = !!a, t != null ? wa(e, !!a, t, !1) : l != null && wa(e, !!a, l, !0);
        return;
      case "textarea":
        de("invalid", e), u = i = a = null;
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
                _e(e, t, f, m, l, null);
            }
        jo(e, a, i, u);
        return;
      case "option":
        for (E in l)
          l.hasOwnProperty(E) && (a = l[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : _e(e, t, E, a, l, null));
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
        for (a = 0; a < ai.length; a++)
          de(ai[a], e);
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
        for (_ in l)
          if (l.hasOwnProperty(_) && (a = l[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                _e(e, t, _, a, l, null);
            }
        return;
      default:
        if (xr(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (a = l[j], a !== void 0 && fc(
              e,
              t,
              j,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (m in l)
      l.hasOwnProperty(m) && (a = l[m], a != null && _e(e, t, m, a, l, null));
  }
  function Ky(e, t, l, a) {
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
        var i = null, u = null, f = null, m = null, E = null, _ = null, j = null;
        for (z in l) {
          var B = l[z];
          if (l.hasOwnProperty(z) && B != null)
            switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = B;
              default:
                a.hasOwnProperty(z) || _e(e, t, z, null, a, B);
            }
        }
        for (var O in a) {
          var z = a[O];
          if (B = l[O], a.hasOwnProperty(O) && (z != null || B != null))
            switch (O) {
              case "type":
                u = z;
                break;
              case "name":
                i = z;
                break;
              case "checked":
                _ = z;
                break;
              case "defaultChecked":
                j = z;
                break;
              case "value":
                f = z;
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
                z !== B && _e(
                  e,
                  t,
                  O,
                  z,
                  a,
                  B
                );
            }
        }
        Tr(
          e,
          f,
          m,
          E,
          _,
          j,
          u,
          i
        );
        return;
      case "select":
        z = f = m = O = null;
        for (u in l)
          if (E = l[u], l.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                z = E;
              default:
                a.hasOwnProperty(u) || _e(
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
                u !== E && _e(
                  e,
                  t,
                  i,
                  u,
                  a,
                  E
                );
            }
        t = m, l = f, a = z, O != null ? wa(e, !!l, O, !1) : !!a != !!l && (t != null ? wa(e, !!l, t, !0) : wa(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        z = O = null;
        for (m in l)
          if (i = l[m], l.hasOwnProperty(m) && i != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                _e(e, t, m, null, a, i);
            }
        for (f in a)
          if (i = a[f], u = l[f], a.hasOwnProperty(f) && (i != null || u != null))
            switch (f) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                z = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== u && _e(e, t, f, i, a, u);
            }
        Mo(e, O, z);
        return;
      case "option":
        for (var J in l)
          O = l[J], l.hasOwnProperty(J) && O != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : _e(
            e,
            t,
            J,
            null,
            a,
            O
          ));
        for (E in a)
          O = a[E], z = l[E], a.hasOwnProperty(E) && O !== z && (O != null || z != null) && (E === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : _e(
            e,
            t,
            E,
            O,
            a,
            z
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
          O = l[ee], l.hasOwnProperty(ee) && O != null && !a.hasOwnProperty(ee) && _e(e, t, ee, null, a, O);
        for (_ in a)
          if (O = a[_], z = l[_], a.hasOwnProperty(_) && O !== z && (O != null || z != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                _e(
                  e,
                  t,
                  _,
                  O,
                  a,
                  z
                );
            }
        return;
      default:
        if (xr(t)) {
          for (var Oe in l)
            O = l[Oe], l.hasOwnProperty(Oe) && O !== void 0 && !a.hasOwnProperty(Oe) && fc(
              e,
              t,
              Oe,
              void 0,
              a,
              O
            );
          for (j in a)
            O = a[j], z = l[j], !a.hasOwnProperty(j) || O === z || O === void 0 && z === void 0 || fc(
              e,
              t,
              j,
              O,
              a,
              z
            );
          return;
        }
    }
    for (var A in l)
      O = l[A], l.hasOwnProperty(A) && O != null && !a.hasOwnProperty(A) && _e(e, t, A, null, a, O);
    for (B in a)
      O = a[B], z = l[B], !a.hasOwnProperty(B) || O === z || O == null && z == null || _e(e, t, B, O, a, z);
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
  function Qy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var i = l[a], u = i.transferSize, f = i.initiatorType, m = i.duration;
        if (u && m && q0(f)) {
          for (f = 0, m = i.responseEnd, a += 1; a < l.length; a++) {
            var E = l[a], _ = E.startTime;
            if (_ > m) break;
            var j = E.transferSize, B = E.initiatorType;
            j && q0(B) && (E = E.responseEnd, f += j * (E < m ? 1 : (m - _) / (E - _)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var dc = null, hc = null;
  function Mu(e) {
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
  function mc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var yc = null;
  function Zy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === yc ? !1 : (yc = e, !0) : (yc = null, !1);
  }
  var X0 = typeof setTimeout == "function" ? setTimeout : void 0, ky = typeof clearTimeout == "function" ? clearTimeout : void 0, V0 = typeof Promise == "function" ? Promise : void 0, Jy = typeof queueMicrotask == "function" ? queueMicrotask : typeof V0 < "u" ? function(e) {
    return V0.resolve(null).then(e).catch($y);
  } : X0;
  function $y(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jl(e) {
    return e === "head";
  }
  function K0(e, t) {
    var l = t, a = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(i), cn(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          ii(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ii(l);
          for (var u = l.firstChild; u; ) {
            var f = u.nextSibling, m = u.nodeName;
            u[Tn] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && ii(e.ownerDocument.body);
      l = i;
    } while (l);
    cn(t);
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
  function gc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          gc(l), Sr(l);
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
  function Fy(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Tn])
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
  function Wy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Yt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Z0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Yt(e.nextSibling), e === null)) return null;
    return e;
  }
  function pc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function vc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Iy(e, t) {
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
  var Ec = null;
  function k0(e) {
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
    switch (t = Mu(l), e) {
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
  function ii(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Sr(e);
  }
  var Xt = /* @__PURE__ */ new Map(), F0 = /* @__PURE__ */ new Set();
  function ju(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Al = Q.d;
  Q.d = {
    f: Py,
    r: eg,
    D: tg,
    C: lg,
    L: ag,
    m: ng,
    X: ug,
    S: ig,
    M: rg
  };
  function Py() {
    var e = Al.f(), t = Cu();
    return e || t;
  }
  function eg(e) {
    var t = Na(e);
    t !== null && t.tag === 5 && t.type === "form" ? hd(t) : Al.r(e);
  }
  var un = typeof document > "u" ? null : document;
  function W0(e, t, l) {
    var a = un;
    if (a && typeof t == "string" && t) {
      var i = Mt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), F0.has(i) || (F0.add(i), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), st(t, "link", e), Ie(t), a.head.appendChild(t)));
    }
  }
  function tg(e) {
    Al.D(e), W0("dns-prefetch", e, null);
  }
  function lg(e, t) {
    Al.C(e, t), W0("preconnect", e, t);
  }
  function ag(e, t, l) {
    Al.L(e, t, l);
    var a = un;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + Mt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + Mt(
        l.imageSizes
      ) + '"]')) : i += '[href="' + Mt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = rn(e);
          break;
        case "script":
          u = sn(e);
      }
      Xt.has(u) || (e = w(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Xt.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(ui(u)) || t === "script" && a.querySelector(ri(u)) || (t = a.createElement("link"), st(t, "link", e), Ie(t), a.head.appendChild(t)));
    }
  }
  function ng(e, t) {
    Al.m(e, t);
    var l = un;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Mt(a) + '"][href="' + Mt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = sn(e);
      }
      if (!Xt.has(u) && (e = w({ rel: "modulepreload", href: e }, t), Xt.set(u, e), l.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(ri(u)))
              return;
        }
        a = l.createElement("link"), st(a, "link", e), Ie(a), l.head.appendChild(a);
      }
    }
  }
  function ig(e, t, l) {
    Al.S(e, t, l);
    var a = un;
    if (a && e) {
      var i = _a(a).hoistableStyles, u = rn(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          ui(u)
        ))
          m.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Xt.get(u)) && bc(e, l);
          var E = f = a.createElement("link");
          Ie(E), st(E, "link", e), E._p = new Promise(function(_, j) {
            E.onload = _, E.onerror = j;
          }), E.addEventListener("load", function() {
            m.loading |= 1;
          }), E.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Lu(f, t, a);
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
  function ug(e, t) {
    Al.X(e, t);
    var l = un;
    if (l && e) {
      var a = _a(l).hoistableScripts, i = sn(e), u = a.get(i);
      u || (u = l.querySelector(ri(i)), u || (e = w({ src: e, async: !0 }, t), (t = Xt.get(i)) && Sc(e, t), u = l.createElement("script"), Ie(u), st(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function rg(e, t) {
    Al.M(e, t);
    var l = un;
    if (l && e) {
      var a = _a(l).hoistableScripts, i = sn(e), u = a.get(i);
      u || (u = l.querySelector(ri(i)), u || (e = w({ src: e, async: !0, type: "module" }, t), (t = Xt.get(i)) && Sc(e, t), u = l.createElement("script"), Ie(u), st(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function I0(e, t, l, a) {
    var i = (i = ae.current) ? ju(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = rn(l.href), l = _a(
          i
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = rn(l.href);
          var u = _a(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            ui(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Xt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Xt.set(e, l), u || sg(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = sn(l), l = _a(
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
  function rn(e) {
    return 'href="' + Mt(e) + '"';
  }
  function ui(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function P0(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function sg(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), st(t, "link", l), Ie(t), e.head.appendChild(t));
  }
  function sn(e) {
    return '[src="' + Mt(e) + '"]';
  }
  function ri(e) {
    return "script[async]" + e;
  }
  function eh(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Mt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Ie(a), a;
          var i = w({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ie(a), st(a, "style", i), Lu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          i = rn(l.href);
          var u = e.querySelector(
            ui(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Ie(u), u;
          a = P0(l), (i = Xt.get(i)) && bc(a, i), u = (e.ownerDocument || e).createElement("link"), Ie(u);
          var f = u;
          return f._p = new Promise(function(m, E) {
            f.onload = m, f.onerror = E;
          }), st(u, "link", a), t.state.loading |= 4, Lu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = sn(l.src), (i = e.querySelector(
            ri(u)
          )) ? (t.instance = i, Ie(i), i) : (a = l, (i = Xt.get(u)) && (a = w({}, l), Sc(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), Ie(i), st(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Lu(a, l.precedence, e));
    return t.instance;
  }
  function Lu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === t) u = m;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function bc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Sc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Hu = null;
  function th(e, t, l) {
    if (Hu === null) {
      var a = /* @__PURE__ */ new Map(), i = Hu = /* @__PURE__ */ new Map();
      i.set(l, a);
    } else
      i = Hu, a = i.get(l), a || (a = /* @__PURE__ */ new Map(), i.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
      var u = l[i];
      if (!(u[Tn] || u[nt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function cg(e, t, l) {
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
  function og(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var i = rn(a.href), u = t.querySelector(
          ui(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Bu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ie(u);
          return;
        }
        u = t.ownerDocument || t, a = P0(a), (i = Xt.get(i)) && bc(a, i), u = u.createElement("link"), Ie(u);
        var f = u;
        f._p = new Promise(function(m, E) {
          f.onload = m, f.onerror = E;
        }), st(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Bu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Rc = 0;
  function fg(e, t) {
    return e.stylesheets && e.count === 0 && Gu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Gu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Rc === 0 && (Rc = 62500 * Qy());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Gu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Rc ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Bu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Gu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var qu = null;
  function Gu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, qu = /* @__PURE__ */ new Map(), t.forEach(dg, e), qu = null, Bu.call(e));
  }
  function dg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = qu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), qu.set(e, l);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = l.get(f) || a, u === a && l.set(null, i), l.set(f, i), this.count++, a = Bu.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var si = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0
  };
  function hg(e, t, l, a, i, u, f, m, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pr(0), this.hiddenUpdates = pr(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nh(e, t, l, a, i, u, f, m, E, _, j, B) {
    return e = new hg(
      e,
      t,
      l,
      f,
      E,
      _,
      j,
      B,
      m
    ), t = 1, u === !0 && (t |= 24), u = Ct(3, null, null, t), e.current = u, u.stateNode = e, t = ts(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, is(u), e;
  }
  function ih(e) {
    return e ? (e = Ba, e) : Ba;
  }
  function uh(e, t, l, a, i, u) {
    i = ih(i), a.context === null ? a.context = i : a.pendingContext = i, a = Hl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Bl(e, a, t), l !== null && (Et(l, e, t), Gn(l, e, t));
  }
  function rh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Tc(e, t) {
    rh(e, t), (e = e.alternate) && rh(e, t);
  }
  function sh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ra(e, 67108864);
      t !== null && Et(t, e, 67108864), Tc(e, 67108864);
    }
  }
  function ch(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Dt();
      t = vr(t);
      var l = ra(e, t);
      l !== null && Et(l, e, t), Tc(e, t);
    }
  }
  var Yu = !0;
  function mg(e, t, l, a) {
    var i = Y.T;
    Y.T = null;
    var u = Q.p;
    try {
      Q.p = 2, Ac(e, t, l, a);
    } finally {
      Q.p = u, Y.T = i;
    }
  }
  function yg(e, t, l, a) {
    var i = Y.T;
    Y.T = null;
    var u = Q.p;
    try {
      Q.p = 8, Ac(e, t, l, a);
    } finally {
      Q.p = u, Y.T = i;
    }
  }
  function Ac(e, t, l, a) {
    if (Yu) {
      var i = xc(a);
      if (i === null)
        oc(
          e,
          t,
          a,
          Xu,
          l
        ), fh(e, a);
      else if (pg(
        i,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (fh(e, a), t & 4 && -1 < gg.indexOf(e)) {
        for (; i !== null; ) {
          var u = Na(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = la(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var E = 1 << 31 - At(f);
                      m.entanglements[1] |= E, f &= ~E;
                    }
                    nl(u), (Ae & 6) === 0 && (Au = Rt() + 500, li(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = ra(u, 2), m !== null && Et(m, u, 2), Cu(), Tc(u, 2);
            }
          if (u = xc(a), u === null && oc(
            e,
            t,
            a,
            Xu,
            l
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        oc(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function xc(e) {
    return e = Nr(e), Cc(e);
  }
  var Xu = null;
  function Cc(e) {
    if (Xu = null, e = Ca(e), e !== null) {
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
    return Xu = e, null;
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
        switch (t1()) {
          case po:
            return 2;
          case vo:
            return 8;
          case Di:
          case l1:
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
  var Nc = !1, $l = null, Fl = null, Wl = null, ci = /* @__PURE__ */ new Map(), oi = /* @__PURE__ */ new Map(), Il = [], gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fh(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        $l = null;
        break;
      case "dragenter":
      case "dragleave":
        Fl = null;
        break;
      case "mouseover":
      case "mouseout":
        Wl = null;
        break;
      case "pointerover":
      case "pointerout":
        ci.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oi.delete(t.pointerId);
    }
  }
  function fi(e, t, l, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Na(t), t !== null && sh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function pg(e, t, l, a, i) {
    switch (t) {
      case "focusin":
        return $l = fi(
          $l,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "dragenter":
        return Fl = fi(
          Fl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "mouseover":
        return Wl = fi(
          Wl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return ci.set(
          u,
          fi(
            ci.get(u) || null,
            e,
            t,
            l,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, oi.set(
          u,
          fi(
            oi.get(u) || null,
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
    var t = Ca(e.target);
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
  function Vu(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = xc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Cr = a, l.target.dispatchEvent(a), Cr = null;
      } else
        return t = Na(l), t !== null && sh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function hh(e, t, l) {
    Vu(e) && l.delete(t);
  }
  function vg() {
    Nc = !1, $l !== null && Vu($l) && ($l = null), Fl !== null && Vu(Fl) && (Fl = null), Wl !== null && Vu(Wl) && (Wl = null), ci.forEach(hh), oi.forEach(hh);
  }
  function Ku(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Nc || (Nc = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      vg
    )));
  }
  var Qu = null;
  function mh(e) {
    Qu !== e && (Qu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Qu === e && (Qu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Cc(a || l) === null)
              continue;
            break;
          }
          var u = Na(l);
          u !== null && (e.splice(t, 3), t -= 3, xs(
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
  function cn(e) {
    function t(E) {
      return Ku(E, e);
    }
    $l !== null && Ku($l, e), Fl !== null && Ku(Fl, e), Wl !== null && Ku(Wl, e), ci.forEach(t), oi.forEach(t);
    for (var l = 0; l < Il.length; l++) {
      var a = Il[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Il.length && (l = Il[0], l.blockedOn === null); )
      dh(l), l.blockedOn === null && Il.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var i = l[a], u = l[a + 1], f = i[ht] || null;
        if (typeof u == "function")
          f || mh(l);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[ht] || null)
              m = f.formAction;
            else if (Cc(i) !== null) continue;
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
  function _c(e) {
    this._internalRoot = e;
  }
  Zu.prototype.render = _c.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = Dt();
    uh(l, a, e, t, null, null);
  }, Zu.prototype.unmount = _c.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      uh(e.current, 2, null, e, null, null), Cu(), t[xa] = null;
    }
  };
  function Zu(e) {
    this._internalRoot = e;
  }
  Zu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ao();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Il.length && t !== 0 && t < Il[l].priority; l++) ;
      Il.splice(l, 0, e), l === 0 && dh(e);
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
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Eg = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ku = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ku.isDisabled && ku.supportsFiber)
      try {
        bn = ku.inject(
          Eg
        ), Tt = ku;
      } catch {
      }
  }
  return mi.createRoot = function(e, t) {
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
    ), e[xa] = t.current, cc(e), new _c(t);
  }, mi.hydrateRoot = function(e, t, l) {
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
    ), t.context = ih(null), l = t.current, a = Dt(), a = vr(a), i = Hl(a), i.callback = null, Bl(l, i, a), l = a, t.current.lanes = l, Rn(t, l), nl(t), e[xa] = t.current, cc(e), new Zu(t);
  }, mi.version = "19.2.3", mi;
}
var zh;
function uv() {
  if (zh) return jc.exports;
  zh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), jc.exports = iv(), jc.exports;
}
var rv = uv(), he = /* @__PURE__ */ ((n) => (n.SUCCESS = "success", n.WARNING = "warning", n.ERROR = "error", n.INFO = "info", n))(he || {}), $t = /* @__PURE__ */ ((n) => (n.PRIMARY = "primary", n.OUTLINE = "outline", n.LINK = "link", n))($t || {}), Ft = /* @__PURE__ */ ((n) => (n.BUTTON = "button", n.SUBMIT = "submit", n.RESET = "reset", n))(Ft || {}), Jt = /* @__PURE__ */ ((n) => (n.DEV = "dev", n.TEST = "test", n.STAGE = "stage", n.PROD = "prod", n))(Jt || {}), ro = /* @__PURE__ */ ((n) => (n.TEST = "TEST", n.WEBCOMPONENT = "WEBCOMPONENT", n))(ro || {}), ea = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.STATUS = "status", n))(ea || {}), Si = /* @__PURE__ */ ((n) => (n.ASSERTIVE = "assertive", n.POLITE = "polite", n.OFF = "off", n))(Si || {});
const ze = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data"
}, Wt = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, Bc = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, yn = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  GLOBAL_SUBSIDIARIES: "/global/subsidiaries"
}, so = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, $u = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, vi = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, on = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Uh = /[!@#$%^&*._-]/, Mh = /^[A-Za-z0-9!@#$%^&*._-]+$/, Ri = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, sv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, jh = {
  XCRED: "xcred"
}, yi = {
  COURSES: "/courses"
}, Xe = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, Cl = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, cv = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, ov = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, et = {
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
}, fv = {
  EMAIL_NOT_FOUND: "No account found with this email address."
}, ct = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]"
}, qc = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, Gc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, Yc = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, Fu = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Vt = ({
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
}, ba = x.forwardRef(
  (n, r) => {
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
    } = n, w = !!d || !!h, q = T.type === "select" || !!y, C = b || `input-${Math.random().toString(36).substr(2, 9)}`, M = `${C}-error`, U = `${C}-helper`;
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
            "aria-describedby": w ? M : void 0,
            "aria-required": T.required,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: w ? "#d64545" : "#cbd5d5",
              ...T.style
            },
            ...T,
            children: y && y.map((V) => /* @__PURE__ */ v.jsx("option", { value: V.value, children: V.label }, V.value))
          }
        ) : /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: r,
            id: C,
            "aria-label": typeof s == "string" ? s : T["aria-label"],
            "aria-invalid": w,
            "aria-describedby": w ? M : void 0,
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
          id: M,
          role: "alert",
          "aria-live": "polite",
          className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
          children: d
        }
      ),
      !d && h && /* @__PURE__ */ v.jsx(
        "div",
        {
          id: U,
          role: "status",
          "aria-live": "polite",
          className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
          children: h
        }
      )
    ] });
  }
), dv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", fn = ({
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
      case he.SUCCESS:
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
      case he.WARNING:
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
      case he.ERROR:
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
      case he.INFO:
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
      case he.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case he.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case he.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      case he.INFO:
      default:
        return /* @__PURE__ */ v.jsx("img", { src: dv, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g(), b = () => {
    switch (n) {
      case he.ERROR:
        return ea.ALERT;
      case he.WARNING:
      case he.INFO:
        return ea.STATUS;
      case he.SUCCESS:
        return ea.STATUS;
      default:
        return ea.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      role: b(),
      "aria-live": n === he.ERROR ? Si.ASSERTIVE : Si.POLITE,
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
              /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ]
    }
  );
}, Fc = ({
  type: n,
  message: r,
  duration: s = 5e3,
  onClose: c,
  className: o = ""
}) => {
  const [d, h] = x.useState(!1), [g, p] = x.useState(!1);
  x.useEffect(() => {
    setTimeout(() => h(!0), Ri.ANIMATION_ENTRANCE_DELAY);
    const C = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(C);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), c && c();
    }, Ri.ANIMATION_EXIT_DURATION);
  }, b = () => {
    switch (n) {
      case he.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case he.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case he.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      case he.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, T = () => {
    switch (n) {
      case he.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case he.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case he.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      case he.INFO:
      default:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, w = b(), q = () => {
    switch (n) {
      case he.ERROR:
        return ea.ALERT;
      case he.WARNING:
      case he.INFO:
      case he.SUCCESS:
        return ea.STATUS;
      default:
        return ea.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      role: q(),
      "aria-live": n === he.ERROR ? Si.ASSERTIVE : Si.POLITE,
      "aria-atomic": "true",
      className: `fixed! top-4! right-4! z-[${qc.Z_INDEX}]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: qc.MAX_WIDTH, width: qc.WIDTH },
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
              /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
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
class pi extends Error {
}
pi.prototype.name = "InvalidTokenError";
function hv(n) {
  return decodeURIComponent(atob(n).replace(/(.)/g, (r, s) => {
    let c = s.charCodeAt(0).toString(16).toUpperCase();
    return c.length < 2 && (c = "0" + c), "%" + c;
  }));
}
function mv(n) {
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
    return hv(r);
  } catch {
    return atob(r);
  }
}
function co(n, r) {
  if (typeof n != "string")
    throw new pi("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, c = n.split(".")[s];
  if (typeof c != "string")
    throw new pi(`Invalid token specified: missing part #${s + 1}`);
  let o;
  try {
    o = mv(c);
  } catch (d) {
    throw new pi(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new pi(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function xm() {
  const n = window.location.hostname;
  if (n === Cl.HOSTNAME || n === Cl.IP || Cl.IP_PATTERN.test(n))
    return "";
  const r = n.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function yv() {
  const n = window.location.hostname;
  return n === Cl.HOSTNAME || n === Cl.IP || Cl.IP_PATTERN.test(n) || n.startsWith(`${Xe.DEV}.`) || n.startsWith(`${Xe.DEV}-`) ? Jt.DEV : n.startsWith(`${Xe.TEST}.`) || n.startsWith(`${Xe.TEST}-`) ? Jt.TEST : n.startsWith(`${Xe.STAGE}.`) || n.startsWith(`${Xe.STAGE}-`) ? Jt.STAGE : Jt.PROD;
}
function Wu() {
  const n = window.location.href, r = new URL(n), s = r.hostname;
  if (s.startsWith(`${Xe.DEV}.`)) {
    const c = s.replace(`${Xe.DEV}.`, `${Xe.DEV_LEARN}.`);
    return `${r.protocol}//${c}${yi.COURSES}`;
  } else if (s.startsWith(`${Xe.TEST}.`)) {
    const c = s.replace(`${Xe.TEST}.`, `${Xe.TEST_LEARN}.`);
    return `${r.protocol}//${c}${yi.COURSES}`;
  } else if (s.startsWith(`${Xe.STAGE}.`)) {
    const c = s.replace(`${Xe.STAGE}.`, `${Xe.STAGE_LEARN}.`);
    return `${r.protocol}//${c}${yi.COURSES}`;
  } else if (s.split(".").length === 2) {
    const o = `${Xe.LEARN}.${s}`;
    return `${r.protocol}//${o}${yi.COURSES}`;
  } else
    return `${r.protocol}//${s}${yi.COURSES}`;
}
function Ei(n, r, s, c = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + s);
  const d = xm(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = c ? encodeURIComponent(r) : r;
  document.cookie = `${n}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function Xc(n) {
  const r = xm(), s = r ? `; domain=${r}` : "";
  document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function Cm(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}
var Lh = {};
const { toString: gv } = Object.prototype, { getPrototypeOf: oo } = Object, { iterator: sr, toStringTag: Nm } = Symbol, cr = /* @__PURE__ */ ((n) => (r) => {
  const s = gv.call(r);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Pt = (n) => (n = n.toLowerCase(), (r) => cr(r) === n), or = (n) => (r) => typeof r === n, { isArray: gn } = Array, dn = or("undefined");
function Ci(n) {
  return n !== null && !dn(n) && n.constructor !== null && !dn(n.constructor) && bt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const _m = Pt("ArrayBuffer");
function pv(n) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && _m(n.buffer), r;
}
const vv = or("string"), bt = or("function"), Om = or("number"), Ni = (n) => n !== null && typeof n == "object", Ev = (n) => n === !0 || n === !1, tr = (n) => {
  if (cr(n) !== "object")
    return !1;
  const r = oo(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Nm in n) && !(sr in n);
}, bv = (n) => {
  if (!Ni(n) || Ci(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, Sv = Pt("Date"), Rv = Pt("File"), Tv = Pt("Blob"), Av = Pt("FileList"), xv = (n) => Ni(n) && bt(n.pipe), Cv = (n) => {
  let r;
  return n && (typeof FormData == "function" && n instanceof FormData || bt(n.append) && ((r = cr(n)) === "formdata" || // detect form-data instance
  r === "object" && bt(n.toString) && n.toString() === "[object FormData]"));
}, Nv = Pt("URLSearchParams"), [_v, Ov, wv, Dv] = ["ReadableStream", "Request", "Response", "Headers"].map(Pt), zv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function _i(n, r, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let c, o;
  if (typeof n != "object" && (n = [n]), gn(n))
    for (c = 0, o = n.length; c < o; c++)
      r.call(null, n[c], c, n);
  else {
    if (Ci(n))
      return;
    const d = s ? Object.getOwnPropertyNames(n) : Object.keys(n), h = d.length;
    let g;
    for (c = 0; c < h; c++)
      g = d[c], r.call(null, n[g], g, n);
  }
}
function wm(n, r) {
  if (Ci(n))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(n);
  let c = s.length, o;
  for (; c-- > 0; )
    if (o = s[c], r === o.toLowerCase())
      return o;
  return null;
}
const Sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Dm = (n) => !dn(n) && n !== Sa;
function Wc() {
  const { caseless: n, skipUndefined: r } = Dm(this) && this || {}, s = {}, c = (o, d) => {
    const h = n && wm(s, d) || d;
    tr(s[h]) && tr(o) ? s[h] = Wc(s[h], o) : tr(o) ? s[h] = Wc({}, o) : gn(o) ? s[h] = o.slice() : (!r || !dn(o)) && (s[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && _i(arguments[o], c);
  return s;
}
const Uv = (n, r, s, { allOwnKeys: c } = {}) => (_i(r, (o, d) => {
  s && bt(o) ? n[d] = Cm(o, s) : n[d] = o;
}, { allOwnKeys: c }), n), Mv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), jv = (n, r, s, c) => {
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
    n = s !== !1 && oo(n);
  } while (n && (!s || s(n, r)) && n !== Object.prototype);
  return r;
}, Hv = (n, r, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= r.length;
  const c = n.indexOf(r, s);
  return c !== -1 && c === s;
}, Bv = (n) => {
  if (!n) return null;
  if (gn(n)) return n;
  let r = n.length;
  if (!Om(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = n[r];
  return s;
}, qv = /* @__PURE__ */ ((n) => (r) => n && r instanceof n)(typeof Uint8Array < "u" && oo(Uint8Array)), Gv = (n, r) => {
  const c = (n && n[sr]).call(n);
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
), Hh = (({ hasOwnProperty: n }) => (r, s) => n.call(r, s))(Object.prototype), Kv = Pt("RegExp"), zm = (n, r) => {
  const s = Object.getOwnPropertyDescriptors(n), c = {};
  _i(s, (o, d) => {
    let h;
    (h = r(o, d, n)) !== !1 && (c[d] = h || o);
  }), Object.defineProperties(n, c);
}, Qv = (n) => {
  zm(n, (r, s) => {
    if (bt(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const c = n[s];
    if (bt(c)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Zv = (n, r) => {
  const s = {}, c = (o) => {
    o.forEach((d) => {
      s[d] = !0;
    });
  };
  return gn(n) ? c(n) : c(String(n).split(r)), s;
}, kv = () => {
}, Jv = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;
function $v(n) {
  return !!(n && bt(n.append) && n[Nm] === "FormData" && n[sr]);
}
const Fv = (n) => {
  const r = new Array(10), s = (c, o) => {
    if (Ni(c)) {
      if (r.indexOf(c) >= 0)
        return;
      if (Ci(c))
        return c;
      if (!("toJSON" in c)) {
        r[o] = c;
        const d = gn(c) ? [] : {};
        return _i(c, (h, g) => {
          const p = s(h, o + 1);
          !dn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return c;
  };
  return s(n, 0);
}, Wv = Pt("AsyncFunction"), Iv = (n) => n && (Ni(n) || bt(n)) && bt(n.then) && bt(n.catch), Um = ((n, r) => n ? setImmediate : r ? ((s, c) => (Sa.addEventListener("message", ({ source: o, data: d }) => {
  o === Sa && d === s && c.length && c.shift()();
}, !1), (o) => {
  c.push(o), Sa.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  bt(Sa.postMessage)
), Pv = typeof queueMicrotask < "u" ? queueMicrotask.bind(Sa) : typeof Lh < "u" && Lh.nextTick || Um, eE = (n) => n != null && bt(n[sr]), D = {
  isArray: gn,
  isArrayBuffer: _m,
  isBuffer: Ci,
  isFormData: Cv,
  isArrayBufferView: pv,
  isString: vv,
  isNumber: Om,
  isBoolean: Ev,
  isObject: Ni,
  isPlainObject: tr,
  isEmptyObject: bv,
  isReadableStream: _v,
  isRequest: Ov,
  isResponse: wv,
  isHeaders: Dv,
  isUndefined: dn,
  isDate: Sv,
  isFile: Rv,
  isBlob: Tv,
  isRegExp: Kv,
  isFunction: bt,
  isStream: xv,
  isURLSearchParams: Nv,
  isTypedArray: qv,
  isFileList: Av,
  forEach: _i,
  merge: Wc,
  extend: Uv,
  trim: zv,
  stripBOM: Mv,
  inherits: jv,
  toFlatObject: Lv,
  kindOf: cr,
  kindOfTest: Pt,
  endsWith: Hv,
  toArray: Bv,
  forEachEntry: Gv,
  matchAll: Yv,
  isHTMLForm: Xv,
  hasOwnProperty: Hh,
  hasOwnProp: Hh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: zm,
  freezeMethods: Qv,
  toObjectSet: Zv,
  toCamelCase: Vv,
  noop: kv,
  toFiniteNumber: Jv,
  findKey: wm,
  global: Sa,
  isContextDefined: Dm,
  isSpecCompliantForm: $v,
  toJSONObject: Fv,
  isAsyncFn: Wv,
  isThenable: Iv,
  setImmediate: Um,
  asap: Pv,
  isIterable: eE
};
function re(n, r, s, c, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), c && (this.request = c), o && (this.response = o, this.status = o.status ? o.status : null);
}
D.inherits(re, Error, {
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
const Mm = re.prototype, jm = {};
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
Object.defineProperty(Mm, "isAxiosError", { value: !0 });
re.from = (n, r, s, c, o, d) => {
  const h = Object.create(Mm);
  D.toFlatObject(n, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = n && n.message ? n.message : "Error", p = r == null && n ? n.code : r;
  return re.call(h, g, p, s, c, o), n && h.cause == null && Object.defineProperty(h, "cause", { value: n, configurable: !0 }), h.name = n && n.name || "Error", d && Object.assign(h, d), h;
};
const tE = null;
function Ic(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function Lm(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Bh(n, r, s) {
  return n ? n.concat(r).map(function(o, d) {
    return o = Lm(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : r;
}
function lE(n) {
  return D.isArray(n) && !n.some(Ic);
}
const aE = D.toFlatObject(D, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function fr(n, r, s) {
  if (!D.isObject(n))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = D.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(M, U) {
    return !D.isUndefined(U[M]);
  });
  const c = s.metaTokens, o = s.visitor || b, d = s.dots, h = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(r);
  if (!D.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(C) {
    if (C === null) return "";
    if (D.isDate(C))
      return C.toISOString();
    if (D.isBoolean(C))
      return C.toString();
    if (!p && D.isBlob(C))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(C) || D.isTypedArray(C) ? p && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function b(C, M, U) {
    let V = C;
    if (C && !U && typeof C == "object") {
      if (D.endsWith(M, "{}"))
        M = c ? M : M.slice(0, -2), C = JSON.stringify(C);
      else if (D.isArray(C) && lE(C) || (D.isFileList(C) || D.endsWith(M, "[]")) && (V = D.toArray(C)))
        return M = Lm(M), V.forEach(function(k, P) {
          !(D.isUndefined(k) || k === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Bh([M], P, d) : h === null ? M : M + "[]",
            y(k)
          );
        }), !1;
    }
    return Ic(C) ? !0 : (r.append(Bh(U, M, d), y(C)), !1);
  }
  const T = [], w = Object.assign(aE, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Ic
  });
  function q(C, M) {
    if (!D.isUndefined(C)) {
      if (T.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + M.join("."));
      T.push(C), D.forEach(C, function(V, Z) {
        (!(D.isUndefined(V) || V === null) && o.call(
          r,
          V,
          D.isString(Z) ? Z.trim() : Z,
          M,
          w
        )) === !0 && q(V, M ? M.concat(Z) : [Z]);
      }), T.pop();
    }
  }
  if (!D.isObject(n))
    throw new TypeError("data must be an object");
  return q(n), r;
}
function qh(n) {
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
function fo(n, r) {
  this._pairs = [], n && fr(n, this, r);
}
const Hm = fo.prototype;
Hm.append = function(r, s) {
  this._pairs.push([r, s]);
};
Hm.toString = function(r) {
  const s = r ? function(c) {
    return r.call(this, c, qh);
  } : qh;
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
  D.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let d;
  if (o ? d = o(r, s) : d = D.isURLSearchParams(r) ? r.toString() : new fo(r, s).toString(c), d) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return n;
}
class Gh {
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
    D.forEach(this.handlers, function(c) {
      c !== null && r(c);
    });
  }
}
const qm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, iE = typeof URLSearchParams < "u" ? URLSearchParams : fo, uE = typeof FormData < "u" ? FormData : null, rE = typeof Blob < "u" ? Blob : null, sE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: iE,
    FormData: uE,
    Blob: rE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ho = typeof window < "u" && typeof document < "u", Pc = typeof navigator == "object" && navigator || void 0, cE = ho && (!Pc || ["ReactNative", "NativeScript", "NS"].indexOf(Pc.product) < 0), oE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", fE = ho && window.location.href || "http://localhost", dE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ho,
  hasStandardBrowserEnv: cE,
  hasStandardBrowserWebWorkerEnv: oE,
  navigator: Pc,
  origin: fE
}, Symbol.toStringTag, { value: "Module" })), ft = {
  ...dE,
  ...sE
};
function hE(n, r) {
  return fr(n, new ft.classes.URLSearchParams(), {
    visitor: function(s, c, o, d) {
      return ft.isNode && D.isBuffer(s) ? (this.append(c, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function mE(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
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
    return h = !h && D.isArray(o) ? o.length : h, p ? (D.hasOwnProp(o, h) ? o[h] = [o[h], c] : o[h] = c, !g) : ((!o[h] || !D.isObject(o[h])) && (o[h] = []), r(s, c, o[h], d) && D.isArray(o[h]) && (o[h] = yE(o[h])), !g);
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const s = {};
    return D.forEachEntry(n, (c, o) => {
      r(mE(c), o, s, 0);
    }), s;
  }
  return null;
}
function gE(n, r, s) {
  if (D.isString(n))
    try {
      return (r || JSON.parse)(n), D.trim(n);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (s || JSON.stringify)(n);
}
const Oi = {
  transitional: qm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const c = s.getContentType() || "", o = c.indexOf("application/json") > -1, d = D.isObject(r);
    if (d && D.isHTMLForm(r) && (r = new FormData(r)), D.isFormData(r))
      return o ? JSON.stringify(Gm(r)) : r;
    if (D.isArrayBuffer(r) || D.isBuffer(r) || D.isStream(r) || D.isFile(r) || D.isBlob(r) || D.isReadableStream(r))
      return r;
    if (D.isArrayBufferView(r))
      return r.buffer;
    if (D.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return hE(r, this.formSerializer).toString();
      if ((g = D.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return fr(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (s.setContentType("application/json", !1), gE(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || Oi.transitional, c = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (D.isResponse(r) || D.isReadableStream(r))
      return r;
    if (r && D.isString(r) && (c && !this.responseType || o)) {
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
    FormData: ft.classes.FormData,
    Blob: ft.classes.Blob
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
D.forEach(["delete", "get", "head", "post", "put", "patch"], (n) => {
  Oi.headers[n] = {};
});
const pE = D.toObjectSet([
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
}, Yh = /* @__PURE__ */ Symbol("internals");
function gi(n) {
  return n && String(n).trim().toLowerCase();
}
function lr(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(lr) : String(n);
}
function EE(n) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = s.exec(n); )
    r[c[1]] = c[2];
  return r;
}
const bE = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Vc(n, r, s, c, o) {
  if (D.isFunction(c))
    return c.call(this, r, s);
  if (o && (r = s), !!D.isString(r)) {
    if (D.isString(c))
      return r.indexOf(c) !== -1;
    if (D.isRegExp(c))
      return c.test(r);
  }
}
function SE(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, c) => s.toUpperCase() + c);
}
function RE(n, r) {
  const s = D.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(n, c + s, {
      value: function(o, d, h) {
        return this[c].call(this, r, o, d, h);
      },
      configurable: !0
    });
  });
}
let St = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, c) {
    const o = this;
    function d(g, p, y) {
      const b = gi(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = D.findKey(o, b);
      (!T || o[T] === void 0 || y === !0 || y === void 0 && o[T] !== !1) && (o[T || p] = lr(g));
    }
    const h = (g, p) => D.forEach(g, (y, b) => d(y, b, p));
    if (D.isPlainObject(r) || r instanceof this.constructor)
      h(r, s);
    else if (D.isString(r) && (r = r.trim()) && !bE(r))
      h(vE(r), s);
    else if (D.isObject(r) && D.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!D.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? D.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      h(g, s);
    } else
      r != null && d(s, r, c);
    return this;
  }
  get(r, s) {
    if (r = gi(r), r) {
      const c = D.findKey(this, r);
      if (c) {
        const o = this[c];
        if (!s)
          return o;
        if (s === !0)
          return EE(o);
        if (D.isFunction(s))
          return s.call(this, o, c);
        if (D.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = gi(r), r) {
      const c = D.findKey(this, r);
      return !!(c && this[c] !== void 0 && (!s || Vc(this, this[c], c, s)));
    }
    return !1;
  }
  delete(r, s) {
    const c = this;
    let o = !1;
    function d(h) {
      if (h = gi(h), h) {
        const g = D.findKey(c, h);
        g && (!s || Vc(c, c[g], g, s)) && (delete c[g], o = !0);
      }
    }
    return D.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const s = Object.keys(this);
    let c = s.length, o = !1;
    for (; c--; ) {
      const d = s[c];
      (!r || Vc(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const s = this, c = {};
    return D.forEach(this, (o, d) => {
      const h = D.findKey(c, d);
      if (h) {
        s[h] = lr(o), delete s[d];
        return;
      }
      const g = r ? SE(d) : String(d).trim();
      g !== d && delete s[d], s[g] = lr(o), c[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const s = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (c, o) => {
      c != null && c !== !1 && (s[o] = r && D.isArray(c) ? c.join(", ") : c);
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
    const c = (this[Yh] = this[Yh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = gi(h);
      c[g] || (RE(o, h), c[g] = !0);
    }
    return D.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
St.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(St.prototype, ({ value: n }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(c) {
      this[s] = c;
    }
  };
});
D.freezeMethods(St);
function Kc(n, r) {
  const s = this || Oi, c = r || s, o = St.from(c.headers);
  let d = c.data;
  return D.forEach(n, function(g) {
    d = g.call(s, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function Ym(n) {
  return !!(n && n.__CANCEL__);
}
function pn(n, r, s) {
  re.call(this, n ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
D.inherits(pn, re, {
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
const ir = (n, r, s = 3) => {
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
}, Xh = (n, r) => {
  const s = n != null;
  return [(c) => r[0]({
    lengthComputable: s,
    total: n,
    loaded: c
  }), r[1]];
}, Vh = (n) => (...r) => D.asap(() => n(...r)), CE = ft.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, r) => (s) => (s = new URL(s, ft.origin), n.protocol === s.protocol && n.host === s.host && (r || n.port === s.port)))(
  new URL(ft.origin),
  ft.navigator && /(msie|trident)/i.test(ft.navigator.userAgent)
) : () => !0, NE = ft.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, r, s, c, o, d, h) {
      if (typeof document > "u") return;
      const g = [`${n}=${encodeURIComponent(r)}`];
      D.isNumber(s) && g.push(`expires=${new Date(s).toUTCString()}`), D.isString(c) && g.push(`path=${c}`), D.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), D.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
const Kh = (n) => n instanceof St ? { ...n } : n;
function Ta(n, r) {
  r = r || {};
  const s = {};
  function c(y, b, T, w) {
    return D.isPlainObject(y) && D.isPlainObject(b) ? D.merge.call({ caseless: w }, y, b) : D.isPlainObject(b) ? D.merge({}, b) : D.isArray(b) ? b.slice() : b;
  }
  function o(y, b, T, w) {
    if (D.isUndefined(b)) {
      if (!D.isUndefined(y))
        return c(void 0, y, T, w);
    } else return c(y, b, T, w);
  }
  function d(y, b) {
    if (!D.isUndefined(b))
      return c(void 0, b);
  }
  function h(y, b) {
    if (D.isUndefined(b)) {
      if (!D.isUndefined(y))
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
    headers: (y, b, T) => o(Kh(y), Kh(b), T, !0)
  };
  return D.forEach(Object.keys({ ...n, ...r }), function(b) {
    const T = p[b] || o, w = T(n[b], r[b], b);
    D.isUndefined(w) && T !== g || (s[b] = w);
  }), s;
}
const Km = (n) => {
  const r = Ta({}, n);
  let { data: s, withXSRFToken: c, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = St.from(h), r.url = Bm(Vm(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), D.isFormData(s)) {
    if (ft.hasStandardBrowserEnv || ft.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (D.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, T]) => {
        y.includes(b.toLowerCase()) && h.set(b, T);
      });
    }
  }
  if (ft.hasStandardBrowserEnv && (c && D.isFunction(c) && (c = c(r)), c || c !== !1 && CE(r.url))) {
    const p = o && d && NE.read(d);
    p && h.set(o, p);
  }
  return r;
}, wE = typeof XMLHttpRequest < "u", DE = wE && function(n) {
  return new Promise(function(s, c) {
    const o = Km(n);
    let d = o.data;
    const h = St.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, T, w, q, C;
    function M() {
      q && q(), C && C(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let U = new XMLHttpRequest();
    U.open(o.method.toUpperCase(), o.url, !0), U.timeout = o.timeout;
    function V() {
      if (!U)
        return;
      const k = St.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), te = {
        data: !g || g === "text" || g === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: k,
        config: n,
        request: U
      };
      Xm(function(W) {
        s(W), M();
      }, function(W) {
        c(W), M();
      }, te), U = null;
    }
    "onloadend" in U ? U.onloadend = V : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, U.onabort = function() {
      U && (c(new re("Request aborted", re.ECONNABORTED, n, U)), U = null);
    }, U.onerror = function(P) {
      const te = P && P.message ? P.message : "Network Error", me = new re(te, re.ERR_NETWORK, n, U);
      me.event = P || null, c(me), U = null;
    }, U.ontimeout = function() {
      let P = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const te = o.transitional || qm;
      o.timeoutErrorMessage && (P = o.timeoutErrorMessage), c(new re(
        P,
        te.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        n,
        U
      )), U = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in U && D.forEach(h.toJSON(), function(P, te) {
      U.setRequestHeader(te, P);
    }), D.isUndefined(o.withCredentials) || (U.withCredentials = !!o.withCredentials), g && g !== "json" && (U.responseType = o.responseType), y && ([w, C] = ir(y, !0), U.addEventListener("progress", w)), p && U.upload && ([T, q] = ir(p), U.upload.addEventListener("progress", T), U.upload.addEventListener("loadend", q)), (o.cancelToken || o.signal) && (b = (k) => {
      U && (c(!k || k.type ? new pn(null, n, U) : k), U.abort(), U = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const Z = TE(o.url);
    if (Z && ft.protocols.indexOf(Z) === -1) {
      c(new re("Unsupported protocol " + Z + ":", re.ERR_BAD_REQUEST, n));
      return;
    }
    U.send(d || null);
  });
}, zE = (n, r) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (r || s) {
    let c = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        c.abort(b instanceof re ? b : new pn(b instanceof Error ? b.message : b));
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
    return p.unsubscribe = () => D.asap(g), p;
  }
}, UE = function* (n, r) {
  let s = n.byteLength;
  if (s < r) {
    yield n;
    return;
  }
  let c = 0, o;
  for (; c < s; )
    o = c + r, yield n.slice(c, o), c = o;
}, ME = async function* (n, r) {
  for await (const s of jE(n))
    yield* UE(s, r);
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
}, Qh = (n, r, s, c) => {
  const o = ME(n, r);
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
}, Zh = 64 * 1024, { isFunction: Iu } = D, LE = (({ Request: n, Response: r }) => ({
  Request: n,
  Response: r
}))(D.global), {
  ReadableStream: kh,
  TextEncoder: Jh
} = D.global, $h = (n, ...r) => {
  try {
    return !!n(...r);
  } catch {
    return !1;
  }
}, HE = (n) => {
  n = D.merge.call({
    skipUndefined: !0
  }, LE, n);
  const { fetch: r, Request: s, Response: c } = n, o = r ? Iu(r) : typeof fetch == "function", d = Iu(s), h = Iu(c);
  if (!o)
    return !1;
  const g = o && Iu(kh), p = o && (typeof Jh == "function" ? /* @__PURE__ */ ((C) => (M) => C.encode(M))(new Jh()) : async (C) => new Uint8Array(await new s(C).arrayBuffer())), y = d && g && $h(() => {
    let C = !1;
    const M = new s(ft.origin, {
      body: new kh(),
      method: "POST",
      get duplex() {
        return C = !0, "half";
      }
    }).headers.has("Content-Type");
    return C && !M;
  }), b = h && g && $h(() => D.isReadableStream(new c("").body)), T = {
    stream: b && ((C) => C.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
    !T[C] && (T[C] = (M, U) => {
      let V = M && M[C];
      if (V)
        return V.call(M);
      throw new re(`Response type '${C}' is not supported`, re.ERR_NOT_SUPPORT, U);
    });
  });
  const w = async (C) => {
    if (C == null)
      return 0;
    if (D.isBlob(C))
      return C.size;
    if (D.isSpecCompliantForm(C))
      return (await new s(ft.origin, {
        method: "POST",
        body: C
      }).arrayBuffer()).byteLength;
    if (D.isArrayBufferView(C) || D.isArrayBuffer(C))
      return C.byteLength;
    if (D.isURLSearchParams(C) && (C = C + ""), D.isString(C))
      return (await p(C)).byteLength;
  }, q = async (C, M) => {
    const U = D.toFiniteNumber(C.getContentLength());
    return U ?? w(M);
  };
  return async (C) => {
    let {
      url: M,
      method: U,
      data: V,
      signal: Z,
      cancelToken: k,
      timeout: P,
      onDownloadProgress: te,
      onUploadProgress: me,
      responseType: W,
      headers: $,
      withCredentials: ce = "same-origin",
      fetchOptions: Te
    } = Km(C), tt = r || fetch;
    W = W ? (W + "").toLowerCase() : "text";
    let Ee = zE([Z, k && k.toAbortSignal()], P), He = null;
    const Ve = Ee && Ee.unsubscribe && (() => {
      Ee.unsubscribe();
    });
    let Ke;
    try {
      if (me && y && U !== "get" && U !== "head" && (Ke = await q($, V)) !== 0) {
        let De = new s(M, {
          method: "POST",
          body: V,
          duplex: "half"
        }), S;
        if (D.isFormData(V) && (S = De.headers.get("content-type")) && $.setContentType(S), De.body) {
          const [L, K] = Xh(
            Ke,
            ir(Vh(me))
          );
          V = Qh(De.body, Zh, L, K);
        }
      }
      D.isString(ce) || (ce = ce ? "include" : "omit");
      const X = d && "credentials" in s.prototype, Y = {
        ...Te,
        signal: Ee,
        method: U.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: V,
        duplex: "half",
        credentials: X ? ce : void 0
      };
      He = d && new s(M, Y);
      let Q = await (d ? tt(He, Te) : tt(M, Y));
      const ie = b && (W === "stream" || W === "response");
      if (b && (te || ie && Ve)) {
        const De = {};
        ["status", "statusText", "headers"].forEach((G) => {
          De[G] = Q[G];
        });
        const S = D.toFiniteNumber(Q.headers.get("content-length")), [L, K] = te && Xh(
          S,
          ir(Vh(te), !0)
        ) || [];
        Q = new c(
          Qh(Q.body, Zh, L, () => {
            K && K(), Ve && Ve();
          }),
          De
        );
      }
      W = W || "text";
      let oe = await T[D.findKey(T, W) || "text"](Q, C);
      return !ie && Ve && Ve(), await new Promise((De, S) => {
        Xm(De, S, {
          data: oe,
          headers: St.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: C,
          request: He
        });
      });
    } catch (X) {
      throw Ve && Ve(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, C, He),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, C, He);
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
const mo = {
  http: tE,
  xhr: DE,
  fetch: {
    get: Qm
  }
};
D.forEach(mo, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const Fh = (n) => `- ${n}`, qE = (n) => D.isFunction(n) || n === null || n === !1;
function GE(n, r) {
  n = D.isArray(n) ? n : [n];
  const { length: s } = n;
  let c, o;
  const d = {};
  for (let h = 0; h < s; h++) {
    c = n[h];
    let g;
    if (o = c, !qE(c) && (o = mo[(g = String(c)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (D.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + h] = o;
  }
  if (!o) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = s ? h.length > 1 ? `since :
` + h.map(Fh).join(`
`) : " " + Fh(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Zm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: GE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: mo
};
function Qc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new pn(null, n);
}
function Wh(n) {
  return Qc(n), n.headers = St.from(n.headers), n.data = Kc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Zm.getAdapter(n.adapter || Oi.adapter, n)(n).then(function(c) {
    return Qc(n), c.data = Kc.call(
      n,
      n.transformResponse,
      c
    ), c.headers = St.from(c.headers), c;
  }, function(c) {
    return Ym(c) || (Qc(n), c && c.response && (c.response.data = Kc.call(
      n,
      n.transformResponse,
      c.response
    ), c.response.headers = St.from(c.response.headers))), Promise.reject(c);
  });
}
const km = "1.13.2", dr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
  dr[n] = function(c) {
    return typeof c === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
const Ih = {};
dr.transitional = function(r, s, c) {
  function o(d, h) {
    return "[Axios v" + km + "] Transitional option '" + d + "'" + h + (c ? ". " + c : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        o(h, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !Ih[h] && (Ih[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
dr.spelling = function(r) {
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
const ar = {
  assertOptions: YE,
  validators: dr
}, il = ar.validators;
let Ra = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Gh(),
      response: new Gh()
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
    c !== void 0 && ar.assertOptions(c, {
      silentJSONParsing: il.transitional(il.boolean),
      forcedJSONParsing: il.transitional(il.boolean),
      clarifyTimeoutError: il.transitional(il.boolean)
    }, !1), o != null && (D.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : ar.assertOptions(o, {
      encode: il.function,
      serialize: il.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), ar.assertOptions(s, {
      baseUrl: il.spelling("baseURL"),
      withXsrfToken: il.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let h = d && D.merge(
      d.common,
      d[s.method]
    );
    d && D.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete d[C];
      }
    ), s.headers = St.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(M) {
      typeof M.runWhen == "function" && M.runWhen(s) === !1 || (p = p && M.synchronous, g.unshift(M.fulfilled, M.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(M) {
      y.push(M.fulfilled, M.rejected);
    });
    let b, T = 0, w;
    if (!p) {
      const C = [Wh.bind(this), void 0];
      for (C.unshift(...g), C.push(...y), w = C.length, b = Promise.resolve(s); T < w; )
        b = b.then(C[T++], C[T++]);
      return b;
    }
    w = g.length;
    let q = s;
    for (; T < w; ) {
      const C = g[T++], M = g[T++];
      try {
        q = C(q);
      } catch (U) {
        M.call(this, U);
        break;
      }
    }
    try {
      b = Wh.call(this, q);
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
D.forEach(["delete", "get", "head", "options"], function(r) {
  Ra.prototype[r] = function(s, c) {
    return this.request(Ta(c || {}, {
      method: r,
      url: s,
      data: (c || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(r) {
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
      c.reason || (c.reason = new pn(d, h, g), s(c.reason));
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
  return D.isObject(n) && n.isAxiosError === !0;
}
const eo = {
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
Object.entries(eo).forEach(([n, r]) => {
  eo[r] = n;
});
function $m(n) {
  const r = new Ra(n), s = Cm(Ra.prototype.request, r);
  return D.extend(s, Ra.prototype, r, { allOwnKeys: !0 }), D.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(o) {
    return $m(Ta(n, o));
  }, s;
}
const Ue = $m(Oi);
Ue.Axios = Ra;
Ue.CanceledError = pn;
Ue.CancelToken = XE;
Ue.isCancel = Ym;
Ue.VERSION = km;
Ue.toFormData = fr;
Ue.AxiosError = re;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(r) {
  return Promise.all(r);
};
Ue.spread = VE;
Ue.isAxiosError = KE;
Ue.mergeConfig = Ta;
Ue.AxiosHeaders = St;
Ue.formToJSON = (n) => Gm(D.isHTMLForm(n) ? new FormData(n) : n);
Ue.getAdapter = Zm.getAdapter;
Ue.HttpStatusCode = eo;
Ue.default = Ue;
const {
  Axios: sb,
  AxiosError: cb,
  CanceledError: ob,
  isCancel: fb,
  CancelToken: db,
  VERSION: hb,
  all: mb,
  Cancel: yb,
  isAxiosError: gb,
  spread: pb,
  toFormData: vb,
  AxiosHeaders: Eb,
  HttpStatusCode: bb,
  formToJSON: Sb,
  getAdapter: Rb,
  mergeConfig: Tb
} = Ue, Fm = "WEBCOMPONENT";
function QE() {
  const n = window.location.hostname;
  return n === Cl.HOSTNAME || n === Cl.IP || Cl.IP_PATTERN.test(n) || n.startsWith(`${Xe.DEV}.`) || n.startsWith(`${Xe.DEV}-`) ? Jt.DEV : n.startsWith(`${Xe.TEST}.`) || n.startsWith(`${Xe.TEST}-`) ? Jt.TEST : n.startsWith(`${Xe.STAGE}.`) || n.startsWith(`${Xe.STAGE}-`) ? Jt.STAGE : Jt.PROD;
}
function ZE(n) {
  if (Fm === ro.TEST)
    return "";
  const r = QE();
  return n.startsWith("/global") ? ov[r] : cv[r];
}
const vn = (n) => {
  const r = n.startsWith("/") ? n : `/${n}`;
  return Fm === ro.TEST ? r : `${ZE(r)}${r}`;
}, kE = async (n) => {
  try {
    return (await Ue.get(vn(yn.GLOBAL_SUBSIDIARIES)))?.data?.find((c) => c?.siteURL?.includes(n))?.subsidiaryId;
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function wi() {
  const n = localStorage.getItem(ze.BRAND_DATA);
  if (!n)
    return {};
  const r = JSON.parse(n), s = await kE(r?.domain);
  return {
    [Bc.X_BRAND_ID]: r?.id,
    [Bc.X_SUBSIDIARY_ID]: s?.toString(),
    [Bc.X_BRAND_DOMAIN]: r?.domain
  };
}
const JE = async (n, r) => {
  const s = vn(yn.AUTH), c = { username: n, password: r };
  try {
    return (await Ue.post(s, c, {
      headers: await wi()
    })).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === so.UNAUTHORIZED ? new Error(et.INVALID_CREDENTIALS) : o.message ? new Error(o.message) : new Error(et.AUTH_FAILED);
  }
}, $E = async (n) => {
  const r = vn(yn.REGISTER);
  try {
    return (await Ue.post(r, n, {
      headers: await wi()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === so.INTERNAL_SERVER_ERROR ? new Error(et.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(et.REGISTRATION_FAILED);
  }
}, yo = async (n) => {
  const r = vn(yn.CHECK_EMAIL);
  try {
    return (await Ue.post(r, { email: n }, {
      headers: await wi()
    })).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, Ph = async (n) => {
  const r = vn(yn.FORGOT_PASSWORD), s = { email: n };
  try {
    return (await Ue.post(r, s, {
      headers: await wi()
    })).data;
  } catch (c) {
    throw console.error("Error sending password reset:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === so.NOT_FOUND ? new Error("We couldn't find an account with that email.") : c.message ? new Error(c.message) : new Error(et.RESET_LINK_FAILED);
  }
}, FE = async (n) => {
  const r = vn(yn.REFRESH_TOKEN), s = { refresh_token: n };
  try {
    return (await Ue.post(r, s, {
      headers: await wi()
    })).data;
  } catch (c) {
    throw console.error("Error during token refresh:", c), c;
  }
}, Zc = (n, r) => {
  if (!r) {
    const s = document.cookie.split(";").find((c) => c.trim().startsWith(`${Wt.X_CREDENTIAL}=`));
    s && (r = s.split("=")[1] || null);
  }
  if (!r)
    return n;
  try {
    const s = new URL(n);
    return s.searchParams.set(jh.XCRED, r), s.toString();
  } catch {
    const c = n.includes("?") ? "&" : "?";
    return `${n}${c}${jh.XCRED}=${encodeURIComponent(r)}`;
  }
}, WE = (n) => {
  try {
    if (!localStorage.getItem(ze.REFRESH_TOKEN_TIME))
      return console.log(`${ct.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`), !1;
    console.log(`${ct.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = document.cookie.split(";").find((g) => g.trim().startsWith(`${Wt.X_CREDENTIAL}=`)), c = document.cookie.split(";").find((g) => g.trim().startsWith(`${Wt.ACCESS_TOKEN}=`));
    let o = null, d = !1;
    if (c && (o = c.split("=")[1] || null), s && (d = !0), o || (o = localStorage.getItem(ze.ACCESS_TOKEN)), !o || !d)
      return !1;
    const h = localStorage.getItem(ze.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const g = co(o), p = Math.floor(Date.now() / 1e3);
      return !(!g.exp || p >= g.exp);
    } catch (g) {
      return console.error(`${ct.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, g), !1;
    }
  } catch (r) {
    return console.error(`${ct.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, IE = () => {
  try {
    const n = localStorage.getItem(ze.REFRESH_TOKEN_TIME);
    return n ? Date.now() - parseInt(n) < sv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (n) {
    return console.error(`${ct.TOKEN} isRefreshTokenValid Error:`, n), !1;
  }
}, PE = () => {
  Xc(Wt.ACCESS_TOKEN), Xc(Wt.X_CREDENTIAL), Xc(Wt.REFRESH_TOKEN), [
    ze.REFRESH_TOKEN,
    ze.REFRESH_TOKEN_TIME,
    ze.ACCESS_TOKEN,
    ze.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${ct.AUTH} All authentication tokens and state cleared`);
}, Wm = async (n, r, s = !1) => {
  const c = await JE(n, r), { tokens: o, x_credential: d } = c;
  if (o.access_token) {
    const h = co(o.access_token), g = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    Ei(Wt.ACCESS_TOKEN, o.access_token, g, !0);
    const p = d || h.x_credentials;
    p && Ei(Wt.X_CREDENTIAL, p, g, !1), localStorage.setItem(ze.ACCESS_TOKEN, o.access_token), localStorage.setItem(ze.ACCESS_TOKEN_EXPIRES, (Date.now() + g * 1e3).toString()), localStorage.setItem(ze.REFRESH_TOKEN, o.refresh_token);
    const y = 720 * 60 * 60;
    Ei(Wt.REFRESH_TOKEN, o.refresh_token, y, !0), s && o.refresh_token ? (localStorage.setItem(ze.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${ct.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(ze.REFRESH_TOKEN_TIME), console.log(`${ct.AUTH} Remember Me disabled - manual login required on page revisit`));
  }
  return o;
}, kc = (n) => {
  try {
    const r = co(n);
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
    return console.error(`${ct.TOKEN} createUserSessionFromToken - Failed to decode access token:`, r), null;
  }
}, hr = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", eb = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  onSignIn: c,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = x.useState(h), [y, b] = x.useState(""), [T, w] = x.useState(""), [q, C] = x.useState(""), [M, U] = x.useState(!1), [V, Z] = x.useState(""), [k, P] = x.useState(""), [te, me] = x.useState(!1), [W, $] = x.useState(!1), [ce, Te] = x.useState(!1), [tt, Ee] = x.useState(!1), [He, Ve] = x.useState(!1), [Ke, X] = x.useState(!1), [Y, Q] = x.useState(!1), [ie, oe] = x.useState(""), [De, S] = x.useState(he.INFO), L = x.useRef(null), K = x.useRef(null), G = {
    length: q.length >= $u.MIN_LENGTH && q.length <= $u.MAX_LENGTH,
    hasNumber: on.NUMBER.test(q),
    hasUppercase: on.UPPERCASE.test(q),
    hasLowercase: on.LOWERCASE.test(q),
    hasSpecialChar: Uh.test(q),
    onlyAllowedChars: Mh.test(q) || q === "",
    differentFromUsername: g ? q !== g && q !== g.split("@")[0] : !0
  }, ae = ((pe) => {
    if (!pe) return { strength: "", color: "", width: Fu.EMPTY };
    if (G.length && G.hasNumber && G.hasUppercase && G.hasLowercase && G.hasSpecialChar && G.onlyAllowedChars && G.differentFromUsername)
      return { strength: Gc.STRONG, color: Yc.STRONG, width: Fu.STRONG };
    let at = 0;
    return G.length && at++, G.hasNumber && at++, G.hasUppercase && at++, G.hasLowercase && at++, G.hasSpecialChar && at++, G.onlyAllowedChars && at++, G.differentFromUsername && at++, at <= 2 ? { strength: Gc.WEAK, color: Yc.WEAK, width: Fu.WEAK } : { strength: Gc.GOOD, color: Yc.GOOD, width: Fu.GOOD };
  })(q), be = (pe) => pe ? pe.length < $u.MIN_LENGTH || pe.length > $u.MAX_LENGTH ? { isValid: !1, error: et.PASSWORD_LENGTH } : on.UPPERCASE.test(pe) ? on.LOWERCASE.test(pe) ? on.NUMBER.test(pe) ? Uh.test(pe) ? Mh.test(pe) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: et.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: et.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: et.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: et.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: et.PASSWORD_UPPERCASE
  } : { isValid: !1, error: et.PASSWORD_REQUIRED };
  x.useEffect(() => {
    if (K.current && clearTimeout(K.current), !g) {
      Te(!1), Ee(!1), X(!1);
      return;
    }
    if (!vi.test(g)) {
      Te(!1), Ee(!1);
      return;
    }
    return K.current = setTimeout(async () => {
      Ve(!0);
      try {
        (await yo(g)).exists ? (Ee(!0), Te(!0)) : (Ee(!1), Te(!1));
      } catch (pe) {
        console.error(`${ct.CREATE_ACCOUNT} Email check failed:`, pe), X(!0), Te(!0), Ee(!1);
      } finally {
        Ve(!1);
      }
    }, Ri.EMAIL_CHECK_DEBOUNCE), () => {
      K.current && clearTimeout(K.current);
    };
  }, [g]);
  const lt = g && vi.test(g);
  x.useEffect(() => {
    const pe = (el) => {
      el.key === "Escape" && s();
    };
    return document.addEventListener("keydown", pe), () => document.removeEventListener("keydown", pe);
  }, [s]);
  const Be = (pe) => {
    pe.target === L.current && s();
  }, ta = async (pe) => {
    if (pe.preventDefault(), $(!0), !g || !y || !T) {
      r("Please fill in all required fields");
      return;
    }
    const el = be(q);
    if (!el.isValid) {
      P(el.error), r(el.error), U(!1);
      return;
    }
    if (!vi.test(g)) {
      Z(et.EMAIL_INVALID), r(et.EMAIL_INVALID);
      return;
    }
    U(!0), Z(""), oe("");
    try {
      const at = g.split("@")[0], zt = await $E({
        username: at,
        email: g,
        firstName: y,
        lastName: T,
        password: q
      });
      console.log(
        `${ct.CREATE_ACCOUNT} Registration successful:`,
        zt.message
      );
      try {
        const ul = await Wm(g, q, Y);
        n(ul);
      } catch (ul) {
        console.error(
          `${ct.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ul
        );
        const En = ul instanceof Error ? ul.message : "Auto-login failed";
        r(En);
      }
    } catch (at) {
      console.error(`${ct.CREATE_ACCOUNT} Registration failed:`, at);
      const zt = at instanceof Error ? at.message : et.REGISTRATION_FAILED;
      oe(zt), S(he.ERROR), r(zt);
    } finally {
      U(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    ie && /* @__PURE__ */ v.jsx(
      Fc,
      {
        type: De,
        message: ie,
        duration: Ri.TOAST_DEFAULT_DURATION,
        onClose: () => oe("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: L,
        onMouseDown: Be,
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
                Vt,
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
                /* @__PURE__ */ v.jsx("h2", { id: "create-account-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-1!", children: o }),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
              ] }),
              /* @__PURE__ */ v.jsxs("form", { onSubmit: ta, className: "space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  ba,
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    value: g,
                    onChange: (pe) => {
                      p(pe.target.value), Z("");
                    },
                    placeholder: "Enter email address",
                    disabled: M,
                    className: "w-full!",
                    autoComplete: "email",
                    error: W && !g ? "Required" : V || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      He && /* @__PURE__ */ v.jsx(Am, {}),
                      !He && !tt && !Ke && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          src: hr,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                ce && tt && !Ke && /* @__PURE__ */ v.jsx(
                  fn,
                  {
                    type: he.INFO,
                    message: "We found an existing account.",
                    actionText: "Want to sign in instead?",
                    onActionClick: () => {
                      Te(!1), c(g);
                    },
                    onClose: () => Te(!1),
                    className: "mb-4!"
                  }
                ),
                ce && Ke && /* @__PURE__ */ v.jsx(
                  fn,
                  {
                    type: he.ERROR,
                    message: "Unable to verify email. You can still proceed with registration.",
                    onClose: () => {
                      Te(!1), X(!1);
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
                      onChange: (pe) => b(pe.target.value),
                      placeholder: "First Name",
                      disabled: M,
                      className: "w-full!",
                      autoComplete: "given-name",
                      error: W && !y ? "Required" : ""
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    ba,
                    {
                      label: "Last Name",
                      id: "lastName",
                      type: "text",
                      value: T,
                      onChange: (pe) => w(pe.target.value),
                      placeholder: "Last Name",
                      disabled: M,
                      className: "w-full!",
                      autoComplete: "family-name",
                      error: W && !T ? "Required" : ""
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
                    onChange: (pe) => {
                      C(pe.target.value), P("");
                    },
                    placeholder: "Enter Password...",
                    disabled: M,
                    className: "w-full!",
                    autoComplete: "new-password",
                    error: k,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => me(!te),
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
                          width: ae.width,
                          backgroundColor: ae.color
                        }
                      }
                    ) }),
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        className: "text-sm! font-medium! whitespace-nowrap!",
                        style: { color: ae.color },
                        children: ae.strength
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsxs("div", { className: "mt-3!", children: [
                    /* @__PURE__ */ v.jsx("p", { className: "text-sm! font-medium! text-gray-700! mb-2!", children: "Password must:" }),
                    /* @__PURE__ */ v.jsxs("ul", { className: "space-y-1!", children: [
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        G.length ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: G.length ? "text-green-600!" : "text-gray-500!", children: "be 9-15 characters" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        G.hasNumber ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: G.hasNumber ? "text-green-600!" : "text-gray-500!", children: "have at least one number" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        G.hasUppercase ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: G.hasUppercase ? "text-green-600!" : "text-gray-500!", children: "have at least one uppercase letter" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        G.hasSpecialChar ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: G.hasSpecialChar ? "text-green-600!" : "text-gray-500!", children: "have at least one special character" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        G.onlyAllowedChars ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: G.onlyAllowedChars ? "text-green-600!" : "text-gray-500!", children: "use only the following special characters !@#$%^&*._-" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        G.differentFromUsername ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: G.differentFromUsername ? "text-green-600!" : "text-gray-500!", children: "be different from username" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsxs("label", { className: "flex! items-center! m-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: Y,
                      onChange: (pe) => Q(pe.target.checked),
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
                  Vt,
                  {
                    type: Ft.SUBMIT,
                    disabled: M || tt || !lt,
                    className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: M ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                  Vt,
                  {
                    type: Ft.BUTTON,
                    variant: $t.OUTLINE,
                    onClick: () => c(g),
                    disabled: M,
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
    ie && /* @__PURE__ */ v.jsx(
      Fc,
      {
        message: ie,
        type: De,
        onClose: () => oe("")
      }
    )
  ] });
}, tb = ({
  email: n,
  loading: r,
  onResendLink: s,
  onBack: c,
  onClose: o
}) => {
  const d = x.useRef(null);
  x.useEffect(() => {
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
          Vt,
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
        /* @__PURE__ */ v.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ v.jsx(
          "img",
          {
            src: hr,
            alt: "Success",
            "aria-hidden": "true",
            className: "w-16! h-16!"
          }
        ) }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-success-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: n }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          Vt,
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
          Vt,
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
}, lb = ({
  email: n,
  onBack: r,
  handleClose: s
}) => {
  const [c, o] = x.useState(n || ""), [d, h] = x.useState(!1), [g, p] = x.useState(!1), [y, b] = x.useState(""), [T, w] = x.useState(!1), [q, C] = x.useState(!1), [M, U] = x.useState(!1), [V, Z] = x.useState(!1), k = x.useRef(null);
  x.useEffect(() => {
    const W = ($) => {
      $.key === "Escape" && s();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [s]), x.useEffect(() => {
    const W = vi.test(c);
    if (U(W), !W || !c) {
      C(!1), Z(!1);
      return;
    }
    const $ = setTimeout(async () => {
      w(!0);
      try {
        const ce = await yo(c);
        console.log("[ResetPassword] Email check response:", ce), C(ce.exists), console.log("[ResetPassword] Email exists:", ce.exists);
      } catch (ce) {
        console.error("[ResetPassword] Error checking email:", ce), Z(!0), C(!1);
      } finally {
        w(!1);
      }
    }, Ri.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout($);
  }, [c]);
  const P = (W) => {
    W.target === k.current && s();
  }, te = async (W) => {
    if (W.preventDefault(), !c) {
      b(et.EMAIL_REQUIRED);
      return;
    }
    h(!0), b("");
    try {
      await Ph(c), console.log("[ResetPassword] Reset link sent to:", c), p(!0);
    } catch ($) {
      console.error("[ResetPassword] Failed to send reset link:", $);
      const ce = $ instanceof Error ? $.message : et.RESET_LINK_FAILED;
      b(ce);
    } finally {
      h(!1);
    }
  }, me = async () => {
    h(!0), b("");
    try {
      await Ph(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (W) {
      console.error("[ResetPassword] Failed to resend reset link:", W), p(!1);
      const $ = W instanceof Error ? W.message : et.RESET_LINK_FAILED;
      b($);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ v.jsx(
    tb,
    {
      email: c,
      loading: d,
      onResendLink: me,
      onBack: r,
      onClose: s
    }
  ) : /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: k,
      onMouseDown: P,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Vt,
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
          /* @__PURE__ */ v.jsx("h2", { id: "reset-password-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-2!", children: "Reset your password" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ v.jsxs("form", { onSubmit: te, className: "space-y-4!", "aria-label": "Reset password form", children: [
          /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
            ba,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: c,
              onChange: (W) => {
                o(W.target.value), b("");
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
                !T && q && M && !V && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: hr,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          V && /* @__PURE__ */ v.jsx(
            fn,
            {
              type: he.ERROR,
              message: "Unable to verify email. Please try again.",
              onClose: () => Z(!1),
              className: "mb-4!"
            }
          ),
          y && /* @__PURE__ */ v.jsx(
            fn,
            {
              type: he.ERROR,
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Vt,
            {
              type: Ft.SUBMIT,
              disabled: d || !c || !M || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: c, isEmailValid: M, emailExists: q });
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
            Vt,
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
}, ab = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  authority: c,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = x.useState(h), [y, b] = x.useState(""), [T, w] = x.useState(!1), [q, C] = x.useState(!1), [M, U] = x.useState(""), [V, Z] = x.useState(!1), [k, P] = x.useState(!1), [te, me] = x.useState(!1), [W, $] = x.useState(!1), [ce, Te] = x.useState(!1), [tt, Ee] = x.useState(!1), [He, Ve] = x.useState(!1), [Ke, X] = x.useState(""), [Y, Q] = x.useState(he.INFO), ie = x.useRef(null), oe = x.useRef(null);
  x.useEffect(() => {
    if (oe.current && clearTimeout(oe.current), !g) {
      $(!1), Ee(!1), Ve(!1);
      return;
    }
    if (!g.includes("@")) {
      $(!0), Ee(!1);
      return;
    }
    if (!vi.test(g)) {
      $(!1), Ee(!1);
      return;
    }
    return oe.current = setTimeout(async () => {
      Te(!0);
      try {
        (await yo(g)).exists ? ($(!0), Ee(!1)) : ($(!1), Ee(!0));
      } catch (G) {
        console.error("[EmbeddedLogin] Email check failed:", G), Ve(!0), Ee(!0), $(!1);
      } finally {
        Te(!1);
      }
    }, 500), () => {
      oe.current && clearTimeout(oe.current);
    };
  }, [g]);
  const S = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  x.useEffect(() => {
    const G = (le) => {
      le.key === "Escape" && s();
    };
    return document.addEventListener("keydown", G), () => document.removeEventListener("keydown", G);
  }, [s]);
  const L = (G) => {
    G.target === ie.current && s();
  }, K = async (G) => {
    if (G.preventDefault(), !g || !y) {
      U("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    w(!0), U("");
    try {
      const le = await Wm(g, y, V);
      n(le);
    } catch (le) {
      console.error("[EmbeddedLogin] Login failed:", le);
      const ae = le instanceof Error ? le.message : "Authentication failed";
      U(ae), X(ae), Q(he.ERROR), r(ae);
    } finally {
      w(!1);
    }
  };
  return te ? /* @__PURE__ */ v.jsx(
    lb,
    {
      email: g,
      onBack: () => me(!1),
      handleClose: s
    }
  ) : k ? /* @__PURE__ */ v.jsx(
    eb,
    {
      onSuccess: (G) => {
        P(!1), n(G);
      },
      onError: r,
      handleClose: s,
      onSignIn: (G) => {
        P(!1), G && p(G);
      },
      authority: c,
      initialEmail: g
    }
  ) : /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: ie,
      onMouseDown: L,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
          /* @__PURE__ */ v.jsx(
            Vt,
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
          /* @__PURE__ */ v.jsxs("form", { onSubmit: K, className: "space-y-2!", "aria-label": "Login form", children: [
            /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
              ba,
              {
                label: "Email or Username",
                id: "email",
                type: "text",
                value: g,
                onChange: (G) => p(G.target.value),
                placeholder: "Enter email or username",
                disabled: T,
                className: "w-full!",
                autoComplete: "username",
                endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  ce && /* @__PURE__ */ v.jsx(Am, {}),
                  !ce && W && S && !He && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: hr,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            tt && !W && S && !He && /* @__PURE__ */ v.jsx(
              fn,
              {
                type: he.INFO,
                message: fv.EMAIL_NOT_FOUND,
                actionText: "Let's create one to continue?",
                onActionClick: () => {
                  Ee(!1), P(!0);
                },
                onClose: () => Ee(!1),
                className: "mb-4!"
              }
            ),
            tt && He && /* @__PURE__ */ v.jsx(
              fn,
              {
                type: he.ERROR,
                message: "Unable to verify email. You can still proceed with login.",
                onClose: () => {
                  Ee(!1), Ve(!1);
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
                onChange: (G) => {
                  b(G.target.value), U("");
                },
                placeholder: "Enter Password...",
                disabled: T,
                className: "w-full!",
                autoComplete: "current-password",
                error: M,
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
                    checked: V,
                    onChange: (G) => Z(G.target.checked),
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
                  onClick: (G) => {
                    G.preventDefault(), me(!0);
                  },
                  children: "Forgot Password?"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              Vt,
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
              Vt,
              {
                type: Ft.BUTTON,
                variant: $t.OUTLINE,
                onClick: () => P(!0),
                disabled: T,
                className: "w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { children: "Create an Account" })
              }
            )
          ] })
        ] }),
        Ke && /* @__PURE__ */ v.jsx(
          Fc,
          {
            message: Ke,
            type: Y,
            onClose: () => X("")
          }
        )
      ]
    }
  );
}, nb = (n) => {
  const { authority: r, subsidiary: s, onRedirect: c } = n, [o, d] = x.useState(!1);
  x.useEffect(() => {
    (async () => {
      try {
        if (WE()) {
          d(!0);
          const w = n.redirectUrl || Wu();
          if (n.autoRedirection)
            window.location.href = Zc(w);
          else if (c && n.redirectUrl) {
            const q = n.redirectUrl || Wu(), C = localStorage.getItem(ze.ACCESS_TOKEN);
            if (C) {
              const M = kc(C);
              M && c(q, M);
            }
          }
          return;
        }
        if (IE()) {
          const w = localStorage.getItem(ze.REFRESH_TOKEN);
          if (w) {
            const q = await FE(w);
            if (q && q.tokens && q.tokens.access_token) {
              const C = q.tokens, M = kc(C.access_token);
              if (!M)
                return;
              const U = (M.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
              Ei(
                Wt.ACCESS_TOKEN,
                C.access_token,
                U,
                !0
              ), M.decoded.x_credentials && Ei(
                Wt.X_CREDENTIAL,
                M.decoded.x_credentials,
                U,
                !1
              ), localStorage.setItem(ze.ACCESS_TOKEN, C.access_token), localStorage.setItem(ze.ACCESS_TOKEN_EXPIRES, (Date.now() + U * 1e3).toString()), C.refresh_token && (localStorage.setItem(ze.REFRESH_TOKEN, C.refresh_token), localStorage.getItem(ze.REFRESH_TOKEN_TIME) && localStorage.setItem(
                ze.REFRESH_TOKEN_TIME,
                Date.now().toString()
              )), console.log(`${ct.AUTH} Auto-login successful`), d(!0);
              const V = n.redirectUrl || Wu();
              c && (console.log(
                `${ct.AUTH} Triggering onRedirect callback with user session:`,
                M
              ), c(V, M)), n.autoRedirection && (window.location.href = Zc(
                V,
                M.decoded.x_credentials
              ));
            }
          }
        } else
          localStorage.removeItem(ze.REFRESH_TOKEN), localStorage.removeItem(ze.REFRESH_TOKEN_TIME);
      } catch (b) {
        console.error(`${ct.AUTH} Auto-login failed:`, b), localStorage.removeItem(ze.REFRESH_TOKEN), localStorage.removeItem(ze.REFRESH_TOKEN_TIME);
      }
    })();
  }, [n.redirectUrl]), x.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const h = (y) => {
    n.handleClose && n.handleClose(), d(!0);
    const b = y?.userInfo?.x_credentials || y?.x_credentials, T = n.redirectUrl || Wu();
    if (c) {
      const w = localStorage.getItem(ze.ACCESS_TOKEN);
      if (w) {
        const q = kc(w);
        q && c(T, q);
      }
    }
    n.autoRedirection && setTimeout(() => {
      window.location.href = Zc(T, b);
    }, 100);
  }, g = (y) => {
    console.log(`${ct.AUTH} Embedded login error:`, y);
  }, p = () => {
    n.handleClose && n.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(Sp, { children: /* @__PURE__ */ v.jsx(
    vm,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(x.Fragment, { children: n.showLogin && !o && /* @__PURE__ */ v.jsx(
        ab,
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
class ib {
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
        console.warn(
          `[ThemeWidget] Brand not found: ${r}. Using default theme.`
        );
        return;
      }
      console.log("functionfunctionfunction", c), localStorage.setItem("subsidiary", c.token), localStorage.setItem("brand_data", JSON.stringify({
        id: c.folder,
        domain: c.domain,
        name: c.name
      }));
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
  const r = new ib(n.cdnBaseUrl, n.shadowRoot), s = n.brandFolder || n.brandToken;
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
      s.appendChild(o), this.root = rv.createRoot(o), this.render();
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
        console.log(
          "[Widget] No subsidiary provided, attempting auto-detection from domain"
        ), await em({
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
      const c = this.getAttribute("authority") || yv(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
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
      console.log("[Widget] logout() called"), PE(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
        /* @__PURE__ */ v.jsx(Qp, { children: /* @__PURE__ */ v.jsx(x.StrictMode, { children: /* @__PURE__ */ v.jsx(nb, { ...s }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", n);
}
