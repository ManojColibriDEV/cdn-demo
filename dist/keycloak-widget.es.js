
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var mc = { exports: {} }, ei = {};
var Q0;
function Vy() {
  if (Q0) return ei;
  Q0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(c, o, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: i,
      type: c,
      key: m,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return ei.Fragment = r, ei.jsx = s, ei.jsxs = s, ei;
}
var Z0;
function ky() {
  return Z0 || (Z0 = 1, mc.exports = Vy()), mc.exports;
}
var v = ky(), hc = { exports: {} }, ne = {}, K0;
function Qy() {
  if (K0) return ne;
  K0 = 1;
  var i = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), z = /* @__PURE__ */ Symbol.for("react.activity"), U = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object" ? null : (E = U && E[U] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, Q = {};
  function Z(E, L, V) {
    this.props = E, this.context = L, this.refs = Q, this.updater = V || B;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(E, L) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, L, "setState");
  }, Z.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function K() {
  }
  K.prototype = Z.prototype;
  function P(E, L, V) {
    this.props = E, this.context = L, this.refs = Q, this.updater = V || B;
  }
  var le = P.prototype = new K();
  le.constructor = P, j(le, Z.prototype), le.isPureReactComponent = !0;
  var me = Array.isArray;
  function W() {
  }
  var $ = { H: null, A: null, T: null, S: null }, he = Object.prototype.hasOwnProperty;
  function oe(E, L, V) {
    var Y = V.ref;
    return {
      $$typeof: r,
      type: E,
      key: L,
      ref: Y !== void 0 ? Y : null,
      props: V
    };
  }
  function Ie(E, L) {
    return oe(E.type, L, E.props);
  }
  function ve(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }
  function De(E) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(V) {
      return L[V];
    });
  }
  var Ye = /\/+/g;
  function Xe(E, L) {
    return typeof E == "object" && E !== null && E.key != null ? De("" + E.key) : L.toString(36);
  }
  function G(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(W, W) : (E.status = "pending", E.then(
          function(L) {
            E.status === "pending" && (E.status = "fulfilled", E.value = L);
          },
          function(L) {
            E.status === "pending" && (E.status = "rejected", E.reason = L);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function X(E, L, V, Y, te) {
    var ae = typeof E;
    (ae === "undefined" || ae === "boolean") && (E = null);
    var be = !1;
    if (E === null) be = !0;
    else
      switch (ae) {
        case "bigint":
        case "string":
        case "number":
          be = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case r:
            case s:
              be = !0;
              break;
            case R:
              return be = E._init, X(
                be(E._payload),
                L,
                V,
                Y,
                te
              );
          }
      }
    if (be)
      return te = te(E), be = Y === "" ? "." + Xe(E, 0) : Y, me(te) ? (V = "", be != null && (V = be.replace(Ye, "$&/") + "/"), X(te, L, V, "", function(kl) {
        return kl;
      })) : te != null && (ve(te) && (te = Ie(
        te,
        V + (te.key == null || E && E.key === te.key ? "" : ("" + te.key).replace(
          Ye,
          "$&/"
        ) + "/") + be
      )), L.push(te)), 1;
    be = 0;
    var nt = Y === "" ? "." : Y + ":";
    if (me(E))
      for (var Be = 0; Be < E.length; Be++)
        Y = E[Be], ae = nt + Xe(Y, Be), be += X(
          Y,
          L,
          V,
          ae,
          te
        );
    else if (Be = C(E), typeof Be == "function")
      for (E = Be.call(E), Be = 0; !(Y = E.next()).done; )
        Y = Y.value, ae = nt + Xe(Y, Be++), be += X(
          Y,
          L,
          V,
          ae,
          te
        );
    else if (ae === "object") {
      if (typeof E.then == "function")
        return X(
          G(E),
          L,
          V,
          Y,
          te
        );
      throw L = String(E), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function k(E, L, V) {
    if (E == null) return E;
    var Y = [], te = 0;
    return X(E, Y, "", "", function(ae) {
      return L.call(V, ae, te++);
    }), Y;
  }
  function ie(E) {
    if (E._status === -1) {
      var L = E._result;
      L = L(), L.then(
        function(V) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = V);
        },
        function(V) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = V);
        }
      ), E._status === -1 && (E._status = 0, E._result = L);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, Ne = {
    map: k,
    forEach: function(E, L, V) {
      k(
        E,
        function() {
          L.apply(this, arguments);
        },
        V
      );
    },
    count: function(E) {
      var L = 0;
      return k(E, function() {
        L++;
      }), L;
    },
    toArray: function(E) {
      return k(E, function(L) {
        return L;
      }) || [];
    },
    only: function(E) {
      if (!ve(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return ne.Activity = z, ne.Children = Ne, ne.Component = Z, ne.Fragment = c, ne.Profiler = d, ne.PureComponent = P, ne.StrictMode = o, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, ne.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return $.H.useMemoCache(E);
    }
  }, ne.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ne.cacheSignal = function() {
    return null;
  }, ne.cloneElement = function(E, L, V) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var Y = j({}, E.props), te = E.key;
    if (L != null)
      for (ae in L.key !== void 0 && (te = "" + L.key), L)
        !he.call(L, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && L.ref === void 0 || (Y[ae] = L[ae]);
    var ae = arguments.length - 2;
    if (ae === 1) Y.children = V;
    else if (1 < ae) {
      for (var be = Array(ae), nt = 0; nt < ae; nt++)
        be[nt] = arguments[nt + 2];
      Y.children = be;
    }
    return oe(E.type, te, Y);
  }, ne.createContext = function(E) {
    return E = {
      $$typeof: g,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: m,
      _context: E
    }, E;
  }, ne.createElement = function(E, L, V) {
    var Y, te = {}, ae = null;
    if (L != null)
      for (Y in L.key !== void 0 && (ae = "" + L.key), L)
        he.call(L, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (te[Y] = L[Y]);
    var be = arguments.length - 2;
    if (be === 1) te.children = V;
    else if (1 < be) {
      for (var nt = Array(be), Be = 0; Be < be; Be++)
        nt[Be] = arguments[Be + 2];
      te.children = nt;
    }
    if (E && E.defaultProps)
      for (Y in be = E.defaultProps, be)
        te[Y] === void 0 && (te[Y] = be[Y]);
    return oe(E, ae, te);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(E) {
    return { $$typeof: p, render: E };
  }, ne.isValidElement = ve, ne.lazy = function(E) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: E },
      _init: ie
    };
  }, ne.memo = function(E, L) {
    return {
      $$typeof: b,
      type: E,
      compare: L === void 0 ? null : L
    };
  }, ne.startTransition = function(E) {
    var L = $.T, V = {};
    $.T = V;
    try {
      var Y = E(), te = $.S;
      te !== null && te(V, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(W, ce);
    } catch (ae) {
      ce(ae);
    } finally {
      L !== null && V.types !== null && (L.types = V.types), $.T = L;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, ne.use = function(E) {
    return $.H.use(E);
  }, ne.useActionState = function(E, L, V) {
    return $.H.useActionState(E, L, V);
  }, ne.useCallback = function(E, L) {
    return $.H.useCallback(E, L);
  }, ne.useContext = function(E) {
    return $.H.useContext(E);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(E, L) {
    return $.H.useDeferredValue(E, L);
  }, ne.useEffect = function(E, L) {
    return $.H.useEffect(E, L);
  }, ne.useEffectEvent = function(E) {
    return $.H.useEffectEvent(E);
  }, ne.useId = function() {
    return $.H.useId();
  }, ne.useImperativeHandle = function(E, L, V) {
    return $.H.useImperativeHandle(E, L, V);
  }, ne.useInsertionEffect = function(E, L) {
    return $.H.useInsertionEffect(E, L);
  }, ne.useLayoutEffect = function(E, L) {
    return $.H.useLayoutEffect(E, L);
  }, ne.useMemo = function(E, L) {
    return $.H.useMemo(E, L);
  }, ne.useOptimistic = function(E, L) {
    return $.H.useOptimistic(E, L);
  }, ne.useReducer = function(E, L, V) {
    return $.H.useReducer(E, L, V);
  }, ne.useRef = function(E) {
    return $.H.useRef(E);
  }, ne.useState = function(E) {
    return $.H.useState(E);
  }, ne.useSyncExternalStore = function(E, L, V) {
    return $.H.useSyncExternalStore(
      E,
      L,
      V
    );
  }, ne.useTransition = function() {
    return $.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var J0;
function jc() {
  return J0 || (J0 = 1, hc.exports = Qy()), hc.exports;
}
var T = jc();
var $0 = "popstate";
function Zy(i = {}) {
  function r(c, o) {
    let { pathname: d, search: m, hash: g } = c.location;
    return Cc(
      "",
      { pathname: d, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : ui(o);
  }
  return Jy(
    r,
    s,
    null,
    i
  );
}
function Le(i, r) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(r);
}
function Vt(i, r) {
  if (!i) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Ky() {
  return Math.random().toString(36).substring(2, 10);
}
function F0(i, r) {
  return {
    usr: i.state,
    key: i.key,
    idx: r
  };
}
function Cc(i, r, s = null, c) {
  return {
    pathname: typeof i == "string" ? i : i.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? ln(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || c || Ky()
  };
}
function ui({
  pathname: i = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (i += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s), i;
}
function ln(i) {
  let r = {};
  if (i) {
    let s = i.indexOf("#");
    s >= 0 && (r.hash = i.substring(s), i = i.substring(0, s));
    let c = i.indexOf("?");
    c >= 0 && (r.search = i.substring(c), i = i.substring(0, c)), i && (r.pathname = i);
  }
  return r;
}
function Jy(i, r, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c, m = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function R() {
    g = "POP";
    let j = b(), Q = j == null ? null : j - y;
    y = j, p && p({ action: g, location: B.location, delta: Q });
  }
  function z(j, Q) {
    g = "PUSH";
    let Z = Cc(B.location, j, Q);
    y = b() + 1;
    let K = F0(Z, y), P = B.createHref(Z);
    try {
      m.pushState(K, "", P);
    } catch (le) {
      if (le instanceof DOMException && le.name === "DataCloneError")
        throw le;
      o.location.assign(P);
    }
    d && p && p({ action: g, location: B.location, delta: 1 });
  }
  function U(j, Q) {
    g = "REPLACE";
    let Z = Cc(B.location, j, Q);
    y = b();
    let K = F0(Z, y), P = B.createHref(Z);
    m.replaceState(K, "", P), d && p && p({ action: g, location: B.location, delta: 0 });
  }
  function C(j) {
    return $y(j);
  }
  let B = {
    get action() {
      return g;
    },
    get location() {
      return i(o, m);
    },
    listen(j) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener($0, R), p = j, () => {
        o.removeEventListener($0, R), p = null;
      };
    },
    createHref(j) {
      return r(o, j);
    },
    createURL: C,
    encodeLocation(j) {
      let Q = C(j);
      return {
        pathname: Q.pathname,
        search: Q.search,
        hash: Q.hash
      };
    },
    push: z,
    replace: U,
    go(j) {
      return m.go(j);
    }
  };
  return B;
}
function $y(i, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(s, "No window.location.(origin|href) available to create URL");
  let c = typeof i == "string" ? i : ui(i);
  return c = c.replace(/ $/, "%20"), !r && c.startsWith("//") && (c = s + c), new URL(c, s);
}
function Am(i, r, s = "/") {
  return Fy(i, r, s, !1);
}
function Fy(i, r, s, c) {
  let o = typeof r == "string" ? ln(r) : r, d = gl(o.pathname || "/", s);
  if (d == null)
    return null;
  let m = _m(i);
  Wy(m);
  let g = null;
  for (let p = 0; g == null && p < m.length; ++p) {
    let y = sg(d);
    g = ug(
      m[p],
      y,
      c
    );
  }
  return g;
}
function _m(i, r = [], s = [], c = "", o = !1) {
  let d = (m, g, p = o, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(c) && p)
        return;
      Le(
        b.relativePath.startsWith(c),
        `Absolute route path "${b.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(c.length);
    }
    let R = yl([c, b.relativePath]), z = s.concat(b);
    m.children && m.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), _m(
      m.children,
      r,
      z,
      R,
      p
    )), !(m.path == null && !m.index) && r.push({
      path: R,
      score: ng(R, m.index),
      routesMeta: z
    });
  };
  return i.forEach((m, g) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, g);
    else
      for (let p of zm(m.path))
        d(m, g, !0, p);
  }), r;
}
function zm(i) {
  let r = i.split("/");
  if (r.length === 0) return [];
  let [s, ...c] = r, o = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (c.length === 0)
    return o ? [d, ""] : [d];
  let m = zm(c.join("/")), g = [];
  return g.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...m), g.map(
    (p) => i.startsWith("/") && p === "" ? "/" : p
  );
}
function Wy(i) {
  i.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : ig(
      r.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Iy = /^:[\w-]+$/, Py = 3, eg = 2, tg = 1, lg = 10, ag = -2, W0 = (i) => i === "*";
function ng(i, r) {
  let s = i.split("/"), c = s.length;
  return s.some(W0) && (c += ag), r && (c += eg), s.filter((o) => !W0(o)).reduce(
    (o, d) => o + (Iy.test(d) ? Py : d === "" ? tg : lg),
    c
  );
}
function ig(i, r) {
  return i.length === r.length && i.slice(0, -1).every((c, o) => c === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    i[i.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ug(i, r, s = !1) {
  let { routesMeta: c } = i, o = {}, d = "/", m = [];
  for (let g = 0; g < c.length; ++g) {
    let p = c[g], y = g === c.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", R = Xu(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), z = p.route;
    if (!R && y && s && !c[c.length - 1].route.index && (R = Xu(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !R)
      return null;
    Object.assign(o, R.params), m.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: yl([d, R.pathname]),
      pathnameBase: dg(
        yl([d, R.pathnameBase])
      ),
      route: z
    }), R.pathnameBase !== "/" && (d = yl([d, R.pathnameBase]));
  }
  return m;
}
function Xu(i, r) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [s, c] = rg(
    i.path,
    i.caseSensitive,
    i.end
  ), o = r.match(s);
  if (!o) return null;
  let d = o[0], m = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: c.reduce(
      (y, { paramName: b, isOptional: R }, z) => {
        if (b === "*") {
          let C = g[z] || "";
          m = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
        }
        const U = g[z];
        return R && !U ? y[b] = void 0 : y[b] = (U || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: i
  };
}
function rg(i, r = !1, s = !0) {
  Vt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`
  );
  let c = [], o = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, g, p) => (c.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return i.endsWith("*") ? (c.push({ paramName: "*" }), o += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : i !== "" && i !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), c];
}
function sg(i) {
  try {
    return i.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Vt(
      !1,
      `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), i;
  }
}
function gl(i, r) {
  if (r === "/") return i;
  if (!i.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, c = i.charAt(s);
  return c && c !== "/" ? null : i.slice(s) || "/";
}
var Nm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, cg = (i) => Nm.test(i);
function og(i, r = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: o = ""
  } = typeof i == "string" ? ln(i) : i, d;
  if (s)
    if (cg(s))
      d = s;
    else {
      if (s.includes("//")) {
        let m = s;
        s = s.replace(/\/\/+/g, "/"), Vt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${s}`
        );
      }
      s.startsWith("/") ? d = I0(s.substring(1), "/") : d = I0(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: mg(c),
    hash: hg(o)
  };
}
function I0(i, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return i.split("/").forEach((o) => {
    o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
  }), s.length > 1 ? s.join("/") : "/";
}
function yc(i, r, s, c) {
  return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fg(i) {
  return i.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function Om(i) {
  let r = fg(i);
  return r.map(
    (s, c) => c === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Mm(i, r, s, c = !1) {
  let o;
  typeof i == "string" ? o = ln(i) : (o = { ...i }, Le(
    !o.pathname || !o.pathname.includes("?"),
    yc("?", "pathname", "search", o)
  ), Le(
    !o.pathname || !o.pathname.includes("#"),
    yc("#", "pathname", "hash", o)
  ), Le(
    !o.search || !o.search.includes("#"),
    yc("#", "search", "hash", o)
  ));
  let d = i === "" || o.pathname === "", m = d ? "/" : o.pathname, g;
  if (m == null)
    g = s;
  else {
    let R = r.length - 1;
    if (!c && m.startsWith("..")) {
      let z = m.split("/");
      for (; z[0] === ".."; )
        z.shift(), R -= 1;
      o.pathname = z.join("/");
    }
    g = R >= 0 ? r[R] : "/";
  }
  let p = og(o, g), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var yl = (i) => i.join("/").replace(/\/\/+/g, "/"), dg = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"), mg = (i) => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, hg = (i) => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, yg = class {
  constructor(i, r, s, c = !1) {
    this.status = i, this.statusText = r || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function gg(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
}
function pg(i) {
  return i.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var jm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Um(i, r) {
  let s = i;
  if (typeof s != "string" || !Nm.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, o = !1;
  if (jm)
    try {
      let d = new URL(window.location.href), m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = gl(m.pathname, r);
      m.origin === d.origin && g != null ? s = g + m.search + m.hash : o = !0;
    } catch {
      Vt(
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
var Dm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Dm
);
var vg = [
  "GET",
  ...Dm
];
new Set(vg);
var an = T.createContext(null);
an.displayName = "DataRouter";
var ku = T.createContext(null);
ku.displayName = "DataRouterState";
var bg = T.createContext(!1), Bm = T.createContext({
  isTransitioning: !1
});
Bm.displayName = "ViewTransition";
var Sg = T.createContext(
  /* @__PURE__ */ new Map()
);
Sg.displayName = "Fetchers";
var Eg = T.createContext(null);
Eg.displayName = "Await";
var qt = T.createContext(
  null
);
qt.displayName = "Navigation";
var ri = T.createContext(
  null
);
ri.displayName = "Location";
var pl = T.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
pl.displayName = "Route";
var Uc = T.createContext(null);
Uc.displayName = "RouteError";
var Lm = "REACT_ROUTER_ERROR", xg = "REDIRECT", Rg = "ROUTE_ERROR_RESPONSE";
function wg(i) {
  if (i.startsWith(`${Lm}:${xg}:{`))
    try {
      let r = JSON.parse(i.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function Tg(i) {
  if (i.startsWith(
    `${Lm}:${Rg}:{`
  ))
    try {
      let r = JSON.parse(i.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new yg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function Cg(i, { relative: r } = {}) {
  Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = T.useContext(qt), { hash: o, pathname: d, search: m } = ci(i, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : yl([s, d])), c.createHref({ pathname: g, search: m, hash: o });
}
function si() {
  return T.useContext(ri) != null;
}
function ha() {
  return Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), T.useContext(ri).location;
}
var Hm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qm(i) {
  T.useContext(qt).static || T.useLayoutEffect(i);
}
function Ag() {
  let { isDataRoute: i } = T.useContext(pl);
  return i ? Yg() : _g();
}
function _g() {
  Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = T.useContext(an), { basename: r, navigator: s } = T.useContext(qt), { matches: c } = T.useContext(pl), { pathname: o } = ha(), d = JSON.stringify(Om(c)), m = T.useRef(!1);
  return qm(() => {
    m.current = !0;
  }), T.useCallback(
    (p, y = {}) => {
      if (Vt(m.current, Hm), !m.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let b = Mm(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      i == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : yl([r, b.pathname])), (y.replace ? s.replace : s.push)(
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
      i
    ]
  );
}
T.createContext(null);
function ci(i, { relative: r } = {}) {
  let { matches: s } = T.useContext(pl), { pathname: c } = ha(), o = JSON.stringify(Om(s));
  return T.useMemo(
    () => Mm(
      i,
      JSON.parse(o),
      c,
      r === "path"
    ),
    [i, o, c, r]
  );
}
function zg(i, r) {
  return Ym(i, r);
}
function Ym(i, r, s, c, o) {
  Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = T.useContext(qt), { matches: m } = T.useContext(pl), g = m[m.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", R = g && g.route;
  {
    let Z = R && R.path || "";
    Gm(
      y,
      !R || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`
    );
  }
  let z = ha(), U;
  if (r) {
    let Z = typeof r == "string" ? ln(r) : r;
    Le(
      b === "/" || Z.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Z.pathname}" was given in the \`location\` prop.`
    ), U = Z;
  } else
    U = z;
  let C = U.pathname || "/", B = C;
  if (b !== "/") {
    let Z = b.replace(/^\//, "").split("/");
    B = "/" + C.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let j = Am(i, { pathname: B });
  Vt(
    R || j != null,
    `No routes matched location "${U.pathname}${U.search}${U.hash}" `
  ), Vt(
    j == null || j[j.length - 1].route.element !== void 0 || j[j.length - 1].route.Component !== void 0 || j[j.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Q = Ug(
    j && j.map(
      (Z) => Object.assign({}, Z, {
        params: Object.assign({}, p, Z.params),
        pathname: yl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Z.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Z.pathname
        ]),
        pathnameBase: Z.pathnameBase === "/" ? b : yl([
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
    m,
    s,
    c,
    o
  );
  return r && Q ? /* @__PURE__ */ T.createElement(
    ri.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...U
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    Q
  ) : Q;
}
function Ng() {
  let i = qg(), r = gg(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), s = i instanceof Error ? i.stack : null, c = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: c }, d = { padding: "2px 4px", backgroundColor: c }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    i
  ), m = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ T.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ T.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ T.createElement("pre", { style: o }, s) : null, m);
}
var Og = /* @__PURE__ */ T.createElement(Ng, null), Xm = class extends T.Component {
  constructor(i) {
    super(i), this.state = {
      location: i.location,
      revalidation: i.revalidation,
      error: i.error
    };
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, r) {
    return r.location !== i.location || r.revalidation !== "idle" && i.revalidation === "idle" ? {
      error: i.error,
      location: i.location,
      revalidation: i.revalidation
    } : {
      error: i.error !== void 0 ? i.error : r.error,
      location: r.location,
      revalidation: i.revalidation || r.revalidation
    };
  }
  componentDidCatch(i, r) {
    this.props.onError ? this.props.onError(i, r) : console.error(
      "React Router caught the following error during render",
      i
    );
  }
  render() {
    let i = this.state.error;
    if (this.context && typeof i == "object" && i && "digest" in i && typeof i.digest == "string") {
      const s = Tg(i.digest);
      s && (i = s);
    }
    let r = i !== void 0 ? /* @__PURE__ */ T.createElement(pl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ T.createElement(
      Uc.Provider,
      {
        value: i,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ T.createElement(Mg, { error: i }, r) : r;
  }
};
Xm.contextType = bg;
var gc = /* @__PURE__ */ new WeakMap();
function Mg({
  children: i,
  error: r
}) {
  let { basename: s } = T.useContext(qt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = wg(r.digest);
    if (c) {
      let o = gc.get(r);
      if (o) throw o;
      let d = Um(c.location, s);
      if (jm && !gc.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw gc.set(r, m), m;
        }
      return /* @__PURE__ */ T.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${d.absoluteURL || d.to}`
        }
      );
    }
  }
  return i;
}
function jg({ routeContext: i, match: r, children: s }) {
  let c = T.useContext(an);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ T.createElement(pl.Provider, { value: i }, s);
}
function Ug(i, r = [], s = null, c = null, o = null) {
  if (i == null) {
    if (!s)
      return null;
    if (s.errors)
      i = s.matches;
    else if (r.length === 0 && !s.initialized && s.matches.length > 0)
      i = s.matches;
    else
      return null;
  }
  let d = i, m = s?.errors;
  if (m != null) {
    let b = d.findIndex(
      (R) => R.route.id && m?.[R.route.id] !== void 0
    );
    Le(
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
  if (s)
    for (let b = 0; b < d.length; b++) {
      let R = d[b];
      if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (p = b), R.route.id) {
        let { loaderData: z, errors: U } = s, C = R.route.loader && !z.hasOwnProperty(R.route.id) && (!U || U[R.route.id] === void 0);
        if (R.route.lazy || C) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && c ? (b, R) => {
    c(b, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: pg(s.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (b, R, z) => {
      let U, C = !1, B = null, j = null;
      s && (U = m && R.route.id ? m[R.route.id] : void 0, B = R.route.errorElement || Og, g && (p < 0 && z === 0 ? (Gm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), C = !0, j = null) : p === z && (C = !0, j = R.route.hydrateFallbackElement || null)));
      let Q = r.concat(d.slice(0, z + 1)), Z = () => {
        let K;
        return U ? K = B : C ? K = j : R.route.Component ? K = /* @__PURE__ */ T.createElement(R.route.Component, null) : R.route.element ? K = R.route.element : K = b, /* @__PURE__ */ T.createElement(
          jg,
          {
            match: R,
            routeContext: {
              outlet: b,
              matches: Q,
              isDataRoute: s != null
            },
            children: K
          }
        );
      };
      return s && (R.route.ErrorBoundary || R.route.errorElement || z === 0) ? /* @__PURE__ */ T.createElement(
        Xm,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: B,
          error: U,
          children: Z(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          onError: y
        }
      ) : Z();
    },
    null
  );
}
function Dc(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dg(i) {
  let r = T.useContext(an);
  return Le(r, Dc(i)), r;
}
function Bg(i) {
  let r = T.useContext(ku);
  return Le(r, Dc(i)), r;
}
function Lg(i) {
  let r = T.useContext(pl);
  return Le(r, Dc(i)), r;
}
function Bc(i) {
  let r = Lg(i), s = r.matches[r.matches.length - 1];
  return Le(
    s.route.id,
    `${i} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function Hg() {
  return Bc(
    "useRouteId"
    /* UseRouteId */
  );
}
function qg() {
  let i = T.useContext(Uc), r = Bg(
    "useRouteError"
    /* UseRouteError */
  ), s = Bc(
    "useRouteError"
    /* UseRouteError */
  );
  return i !== void 0 ? i : r.errors?.[s];
}
function Yg() {
  let { router: i } = Dg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Bc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = T.useRef(!1);
  return qm(() => {
    s.current = !0;
  }), T.useCallback(
    async (o, d = {}) => {
      Vt(s.current, Hm), s.current && (typeof o == "number" ? await i.navigate(o) : await i.navigate(o, { fromRouteId: r, ...d }));
    },
    [i, r]
  );
}
var P0 = {};
function Gm(i, r, s) {
  !r && !P0[i] && (P0[i] = !0, Vt(!1, s));
}
T.memo(Xg);
function Xg({
  routes: i,
  future: r,
  state: s,
  onError: c
}) {
  return Ym(i, void 0, s, c, r);
}
function Vm(i) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Gg({
  basename: i = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: m
}) {
  Le(
    !si(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = i.replace(/^\/*/, "/"), p = T.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [g, o, d, m]
  );
  typeof s == "string" && (s = ln(s));
  let {
    pathname: y = "/",
    search: b = "",
    hash: R = "",
    state: z = null,
    key: U = "default"
  } = s, C = T.useMemo(() => {
    let B = gl(y, g);
    return B == null ? null : {
      location: {
        pathname: B,
        search: b,
        hash: R,
        state: z,
        key: U
      },
      navigationType: c
    };
  }, [g, y, b, R, z, U, c]);
  return Vt(
    C != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ T.createElement(qt.Provider, { value: p }, /* @__PURE__ */ T.createElement(ri.Provider, { children: r, value: C }));
}
function Vg({
  children: i,
  location: r
}) {
  return zg(Ac(i), r);
}
function Ac(i, r = []) {
  let s = [];
  return T.Children.forEach(i, (c, o) => {
    if (!T.isValidElement(c))
      return;
    let d = [...r, o];
    if (c.type === T.Fragment) {
      s.push.apply(
        s,
        Ac(c.props.children, d)
      );
      return;
    }
    Le(
      c.type === Vm,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
      !c.props.index || !c.props.children,
      "An index route cannot have child routes."
    );
    let m = {
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
    c.props.children && (m.children = Ac(
      c.props.children,
      d
    )), s.push(m);
  }), s;
}
var Bu = "get", Lu = "application/x-www-form-urlencoded";
function Qu(i) {
  return typeof HTMLElement < "u" && i instanceof HTMLElement;
}
function kg(i) {
  return Qu(i) && i.tagName.toLowerCase() === "button";
}
function Qg(i) {
  return Qu(i) && i.tagName.toLowerCase() === "form";
}
function Zg(i) {
  return Qu(i) && i.tagName.toLowerCase() === "input";
}
function Kg(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Jg(i, r) {
  return i.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Kg(i);
}
var ju = null;
function $g() {
  if (ju === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), ju = !1;
    } catch {
      ju = !0;
    }
  return ju;
}
var Fg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function pc(i) {
  return i != null && !Fg.has(i) ? (Vt(
    !1,
    `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`
  ), null) : i;
}
function Wg(i, r) {
  let s, c, o, d, m;
  if (Qg(i)) {
    let g = i.getAttribute("action");
    c = g ? gl(g, r) : null, s = i.getAttribute("method") || Bu, o = pc(i.getAttribute("enctype")) || Lu, d = new FormData(i);
  } else if (kg(i) || Zg(i) && (i.type === "submit" || i.type === "image")) {
    let g = i.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = i.getAttribute("formaction") || g.getAttribute("action");
    if (c = p ? gl(p, r) : null, s = i.getAttribute("formmethod") || g.getAttribute("method") || Bu, o = pc(i.getAttribute("formenctype")) || pc(g.getAttribute("enctype")) || Lu, d = new FormData(g, i), !$g()) {
      let { name: y, type: b, value: R } = i;
      if (b === "image") {
        let z = y ? `${y}.` : "";
        d.append(`${z}x`, "0"), d.append(`${z}y`, "0");
      } else y && d.append(y, R);
    }
  } else {
    if (Qu(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Bu, c = null, o = Lu, m = i;
  }
  return d && o === "text/plain" && (m = d, d = void 0), { action: c, method: s.toLowerCase(), encType: o, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Lc(i, r) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(r);
}
function Ig(i, r, s) {
  let c = typeof i == "string" ? new URL(
    i,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : i;
  return c.pathname === "/" ? c.pathname = `_root.${s}` : r && gl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`, c;
}
async function Pg(i, r) {
  if (i.id in r)
    return r[i.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      i.module
    );
    return r[i.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${i.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function ep(i) {
  return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
}
async function tp(i, r, s) {
  let c = await Promise.all(
    i.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let m = await Pg(d, s);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return ip(
    c.flat(1).filter(ep).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function em(i, r, s, c, o, d) {
  let m = (p, y) => s[y] ? p.route.id !== s[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => m(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let b = c.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (m(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let R = p.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(i, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof R == "boolean")
        return R;
    }
    return !0;
  }) : [];
}
function lp(i, r, { includeHydrateFallback: s } = {}) {
  return ap(
    i.map((c) => {
      let o = r.routes[c.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function ap(i) {
  return [...new Set(i)];
}
function np(i) {
  let r = {}, s = Object.keys(i).sort();
  for (let c of s)
    r[c] = i[c];
  return r;
}
function ip(i, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), i.reduce((c, o) => {
    let d = JSON.stringify(np(o));
    return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
  }, []);
}
function km() {
  let i = T.useContext(an);
  return Lc(
    i,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), i;
}
function up() {
  let i = T.useContext(ku);
  return Lc(
    i,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), i;
}
var Hc = T.createContext(void 0);
Hc.displayName = "FrameworkContext";
function Qm() {
  let i = T.useContext(Hc);
  return Lc(
    i,
    "You must render this element inside a <HydratedRouter> element"
  ), i;
}
function rp(i, r) {
  let s = T.useContext(Hc), [c, o] = T.useState(!1), [d, m] = T.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: R } = r, z = T.useRef(null);
  T.useEffect(() => {
    if (i === "render" && m(!0), i === "viewport") {
      let B = (Q) => {
        Q.forEach((Z) => {
          m(Z.isIntersecting);
        });
      }, j = new IntersectionObserver(B, { threshold: 0.5 });
      return z.current && j.observe(z.current), () => {
        j.disconnect();
      };
    }
  }, [i]), T.useEffect(() => {
    if (c) {
      let B = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(B);
      };
    }
  }, [c]);
  let U = () => {
    o(!0);
  }, C = () => {
    o(!1), m(!1);
  };
  return s ? i !== "intent" ? [d, z, {}] : [
    d,
    z,
    {
      onFocus: ti(g, U),
      onBlur: ti(p, C),
      onMouseEnter: ti(y, U),
      onMouseLeave: ti(b, C),
      onTouchStart: ti(R, U)
    }
  ] : [!1, z, {}];
}
function ti(i, r) {
  return (s) => {
    i && i(s), s.defaultPrevented || r(s);
  };
}
function sp({ page: i, ...r }) {
  let { router: s } = km(), c = T.useMemo(
    () => Am(s.routes, i, s.basename),
    [s.routes, i, s.basename]
  );
  return c ? /* @__PURE__ */ T.createElement(op, { page: i, matches: c, ...r }) : null;
}
function cp(i) {
  let { manifest: r, routeModules: s } = Qm(), [c, o] = T.useState([]);
  return T.useEffect(() => {
    let d = !1;
    return tp(i, r, s).then(
      (m) => {
        d || o(m);
      }
    ), () => {
      d = !0;
    };
  }, [i, r, s]), c;
}
function op({
  page: i,
  matches: r,
  ...s
}) {
  let c = ha(), { manifest: o, routeModules: d } = Qm(), { basename: m } = km(), { loaderData: g, matches: p } = up(), y = T.useMemo(
    () => em(
      i,
      r,
      p,
      o,
      c,
      "data"
    ),
    [i, r, p, o, c]
  ), b = T.useMemo(
    () => em(
      i,
      r,
      p,
      o,
      c,
      "assets"
    ),
    [i, r, p, o, c]
  ), R = T.useMemo(() => {
    if (i === c.pathname + c.search + c.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), B = !1;
    if (r.forEach((Q) => {
      let Z = o.routes[Q.route.id];
      !Z || !Z.hasLoader || (!y.some((K) => K.route.id === Q.route.id) && Q.route.id in g && d[Q.route.id]?.shouldRevalidate || Z.hasClientLoader ? B = !0 : C.add(Q.route.id));
    }), C.size === 0)
      return [];
    let j = Ig(i, m, "data");
    return B && C.size > 0 && j.searchParams.set(
      "_routes",
      r.filter((Q) => C.has(Q.route.id)).map((Q) => Q.route.id).join(",")
    ), [j.pathname + j.search];
  }, [
    m,
    g,
    c,
    o,
    y,
    r,
    i,
    d
  ]), z = T.useMemo(
    () => lp(b, o),
    [b, o]
  ), U = cp(b);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, R.map((C) => /* @__PURE__ */ T.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), z.map((C) => /* @__PURE__ */ T.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), U.map(({ key: C, link: B }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ T.createElement("link", { key: C, nonce: s.nonce, ...B })
  )));
}
function fp(...i) {
  return (r) => {
    i.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var dp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  dp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function mp({
  basename: i,
  children: r,
  unstable_useTransitions: s,
  window: c
}) {
  let o = T.useRef();
  o.current == null && (o.current = Zy({ window: c, v5Compat: !0 }));
  let d = o.current, [m, g] = T.useState({
    action: d.action,
    location: d.location
  }), p = T.useCallback(
    (y) => {
      s === !1 ? g(y) : T.startTransition(() => g(y));
    },
    [s]
  );
  return T.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ T.createElement(
    Gg,
    {
      basename: i,
      children: r,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: s
    }
  );
}
var Zm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Km = T.forwardRef(
  function({
    onClick: r,
    discover: s = "render",
    prefetch: c = "none",
    relative: o,
    reloadDocument: d,
    replace: m,
    state: g,
    target: p,
    to: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: z,
    ...U
  }, C) {
    let { basename: B, unstable_useTransitions: j } = T.useContext(qt), Q = typeof y == "string" && Zm.test(y), Z = Um(y, B);
    y = Z.to;
    let K = Cg(y, { relative: o }), [P, le, me] = rp(
      c,
      U
    ), W = pp(y, {
      replace: m,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: R,
      unstable_defaultShouldRevalidate: z,
      unstable_useTransitions: j
    });
    function $(oe) {
      r && r(oe), oe.defaultPrevented || W(oe);
    }
    let he = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ T.createElement(
        "a",
        {
          ...U,
          ...me,
          href: Z.absoluteURL || K,
          onClick: Z.isExternal || d ? r : $,
          ref: fp(C, le),
          target: p,
          "data-discover": !Q && s === "render" ? "true" : void 0
        }
      )
    );
    return P && !Q ? /* @__PURE__ */ T.createElement(T.Fragment, null, he, /* @__PURE__ */ T.createElement(sp, { page: K })) : he;
  }
);
Km.displayName = "Link";
var hp = T.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: c = "",
    end: o = !1,
    style: d,
    to: m,
    viewTransition: g,
    children: p,
    ...y
  }, b) {
    let R = ci(m, { relative: y.relative }), z = ha(), U = T.useContext(ku), { navigator: C, basename: B } = T.useContext(qt), j = U != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    xp(R) && g === !0, Q = C.encodeLocation ? C.encodeLocation(R).pathname : R.pathname, Z = z.pathname, K = U && U.navigation && U.navigation.location ? U.navigation.location.pathname : null;
    s || (Z = Z.toLowerCase(), K = K ? K.toLowerCase() : null, Q = Q.toLowerCase()), K && B && (K = gl(K, B) || K);
    const P = Q !== "/" && Q.endsWith("/") ? Q.length - 1 : Q.length;
    let le = Z === Q || !o && Z.startsWith(Q) && Z.charAt(P) === "/", me = K != null && (K === Q || !o && K.startsWith(Q) && K.charAt(Q.length) === "/"), W = {
      isActive: le,
      isPending: me,
      isTransitioning: j
    }, $ = le ? r : void 0, he;
    typeof c == "function" ? he = c(W) : he = [
      c,
      le ? "active" : null,
      me ? "pending" : null,
      j ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let oe = typeof d == "function" ? d(W) : d;
    return /* @__PURE__ */ T.createElement(
      Km,
      {
        ...y,
        "aria-current": $,
        className: he,
        ref: b,
        style: oe,
        to: m,
        viewTransition: g
      },
      typeof p == "function" ? p(W) : p
    );
  }
);
hp.displayName = "NavLink";
var yp = T.forwardRef(
  ({
    discover: i = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: c,
    replace: o,
    state: d,
    method: m = Bu,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: z,
    ...U
  }, C) => {
    let { unstable_useTransitions: B } = T.useContext(qt), j = Sp(), Q = Ep(g, { relative: y }), Z = m.toLowerCase() === "get" ? "get" : "post", K = typeof g == "string" && Zm.test(g), P = (le) => {
      if (p && p(le), le.defaultPrevented) return;
      le.preventDefault();
      let me = le.nativeEvent.submitter, W = me?.getAttribute("formmethod") || m, $ = () => j(me || le.currentTarget, {
        fetcherKey: r,
        method: W,
        navigate: s,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: R,
        unstable_defaultShouldRevalidate: z
      });
      B && s !== !1 ? T.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ T.createElement(
      "form",
      {
        ref: C,
        method: Z,
        action: Q,
        onSubmit: c ? p : P,
        ...U,
        "data-discover": !K && i === "render" ? "true" : void 0
      }
    );
  }
);
yp.displayName = "Form";
function gp(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jm(i) {
  let r = T.useContext(an);
  return Le(r, gp(i)), r;
}
function pp(i, {
  target: r,
  replace: s,
  state: c,
  preventScrollReset: o,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ag(), b = ha(), R = ci(i, { relative: d });
  return T.useCallback(
    (z) => {
      if (Jg(z, r)) {
        z.preventDefault();
        let U = s !== void 0 ? s : ui(b) === ui(R), C = () => y(i, {
          replace: U,
          state: c,
          preventScrollReset: o,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: g
        });
        p ? T.startTransition(() => C()) : C();
      }
    },
    [
      b,
      y,
      R,
      s,
      c,
      r,
      i,
      o,
      d,
      m,
      g,
      p
    ]
  );
}
var vp = 0, bp = () => `__${String(++vp)}__`;
function Sp() {
  let { router: i } = Jm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = T.useContext(qt), s = Hg(), c = i.fetch, o = i.navigate;
  return T.useCallback(
    async (d, m = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: R } = Wg(
        d,
        r
      );
      if (m.navigate === !1) {
        let z = m.fetcherKey || bp();
        await c(z, s, m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || p,
          formEncType: m.encType || y,
          flushSync: m.flushSync
        });
      } else
        await o(m.action || g, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || p,
          formEncType: m.encType || y,
          replace: m.replace,
          state: m.state,
          fromRouteId: s,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [c, o, r, s]
  );
}
function Ep(i, { relative: r } = {}) {
  let { basename: s } = T.useContext(qt), c = T.useContext(pl);
  Le(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1), d = { ...ci(i || ".", { relative: r }) }, m = ha();
  if (i == null) {
    d.search = m.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((R) => R).forEach((R) => g.append("index", R));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!i || i === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : yl([s, d.pathname])), ui(d);
}
function xp(i, { relative: r } = {}) {
  let s = T.useContext(Bm);
  Le(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Jm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = ci(i, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = gl(s.currentLocation.pathname, c) || s.currentLocation.pathname, m = gl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return Xu(o.pathname, m) != null || Xu(o.pathname, d) != null;
}
var vc = { exports: {} }, it = {};
var tm;
function Rp() {
  if (tm) return it;
  tm = 1;
  var i = jc();
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
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: R == null ? null : "" + R,
      children: p,
      containerInfo: y,
      implementation: b
    };
  }
  var m = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, it.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, it.flushSync = function(p) {
    var y = m.T, b = c.p;
    try {
      if (m.T = null, c.p = 2, p) return p();
    } finally {
      m.T = y, c.p = b, c.d.f();
    }
  }, it.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(p, y));
  }, it.prefetchDNS = function(p) {
    typeof p == "string" && c.d.D(p);
  }, it.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, R = g(b, y.crossOrigin), z = typeof y.integrity == "string" ? y.integrity : void 0, U = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? c.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: R,
          integrity: z,
          fetchPriority: U
        }
      ) : b === "script" && c.d.X(p, {
        crossOrigin: R,
        integrity: z,
        fetchPriority: U,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, it.preinitModule = function(p, y) {
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
  }, it.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, R = g(b, y.crossOrigin);
      c.d.L(p, b, {
        crossOrigin: R,
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
  }, it.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        c.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(p);
  }, it.requestFormReset = function(p) {
    c.d.r(p);
  }, it.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, it.useFormState = function(p, y, b) {
    return m.H.useFormState(p, y, b);
  }, it.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, it.version = "19.2.3", it;
}
var lm;
function wp() {
  if (lm) return vc.exports;
  lm = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), vc.exports = Rp(), vc.exports;
}
var bc = { exports: {} }, li = {}, Sc = { exports: {} }, Ec = {};
var am;
function Tp() {
  return am || (am = 1, (function(i) {
    function r(G, X) {
      var k = G.length;
      G.push(X);
      e: for (; 0 < k; ) {
        var ie = k - 1 >>> 1, ce = G[ie];
        if (0 < o(ce, X))
          G[ie] = X, G[k] = ce, k = ie;
        else break e;
      }
    }
    function s(G) {
      return G.length === 0 ? null : G[0];
    }
    function c(G) {
      if (G.length === 0) return null;
      var X = G[0], k = G.pop();
      if (k !== X) {
        G[0] = k;
        e: for (var ie = 0, ce = G.length, Ne = ce >>> 1; ie < Ne; ) {
          var E = 2 * (ie + 1) - 1, L = G[E], V = E + 1, Y = G[V];
          if (0 > o(L, k))
            V < ce && 0 > o(Y, L) ? (G[ie] = Y, G[V] = k, ie = V) : (G[ie] = L, G[E] = k, ie = E);
          else if (V < ce && 0 > o(Y, k))
            G[ie] = Y, G[V] = k, ie = V;
          else break e;
        }
      }
      return X;
    }
    function o(G, X) {
      var k = G.sortIndex - X.sortIndex;
      return k !== 0 ? k : G.id - X.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, g = m.now();
      i.unstable_now = function() {
        return m.now() - g;
      };
    }
    var p = [], y = [], b = 1, R = null, z = 3, U = !1, C = !1, B = !1, j = !1, Q = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function P(G) {
      for (var X = s(y); X !== null; ) {
        if (X.callback === null) c(y);
        else if (X.startTime <= G)
          c(y), X.sortIndex = X.expirationTime, r(p, X);
        else break;
        X = s(y);
      }
    }
    function le(G) {
      if (B = !1, P(G), !C)
        if (s(p) !== null)
          C = !0, me || (me = !0, ve());
        else {
          var X = s(y);
          X !== null && Xe(le, X.startTime - G);
        }
    }
    var me = !1, W = -1, $ = 5, he = -1;
    function oe() {
      return j ? !0 : !(i.unstable_now() - he < $);
    }
    function Ie() {
      if (j = !1, me) {
        var G = i.unstable_now();
        he = G;
        var X = !0;
        try {
          e: {
            C = !1, B && (B = !1, Z(W), W = -1), U = !0;
            var k = z;
            try {
              t: {
                for (P(G), R = s(p); R !== null && !(R.expirationTime > G && oe()); ) {
                  var ie = R.callback;
                  if (typeof ie == "function") {
                    R.callback = null, z = R.priorityLevel;
                    var ce = ie(
                      R.expirationTime <= G
                    );
                    if (G = i.unstable_now(), typeof ce == "function") {
                      R.callback = ce, P(G), X = !0;
                      break t;
                    }
                    R === s(p) && c(p), P(G);
                  } else c(p);
                  R = s(p);
                }
                if (R !== null) X = !0;
                else {
                  var Ne = s(y);
                  Ne !== null && Xe(
                    le,
                    Ne.startTime - G
                  ), X = !1;
                }
              }
              break e;
            } finally {
              R = null, z = k, U = !1;
            }
            X = void 0;
          }
        } finally {
          X ? ve() : me = !1;
        }
      }
    }
    var ve;
    if (typeof K == "function")
      ve = function() {
        K(Ie);
      };
    else if (typeof MessageChannel < "u") {
      var De = new MessageChannel(), Ye = De.port2;
      De.port1.onmessage = Ie, ve = function() {
        Ye.postMessage(null);
      };
    } else
      ve = function() {
        Q(Ie, 0);
      };
    function Xe(G, X) {
      W = Q(function() {
        G(i.unstable_now());
      }, X);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, i.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < G ? Math.floor(1e3 / G) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, i.unstable_next = function(G) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = z;
      }
      var k = z;
      z = X;
      try {
        return G();
      } finally {
        z = k;
      }
    }, i.unstable_requestPaint = function() {
      j = !0;
    }, i.unstable_runWithPriority = function(G, X) {
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
      var k = z;
      z = G;
      try {
        return X();
      } finally {
        z = k;
      }
    }, i.unstable_scheduleCallback = function(G, X, k) {
      var ie = i.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? ie + k : ie) : k = ie, G) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return ce = k + ce, G = {
        id: b++,
        callback: X,
        priorityLevel: G,
        startTime: k,
        expirationTime: ce,
        sortIndex: -1
      }, k > ie ? (G.sortIndex = k, r(y, G), s(p) === null && G === s(y) && (B ? (Z(W), W = -1) : B = !0, Xe(le, k - ie))) : (G.sortIndex = ce, r(p, G), C || U || (C = !0, me || (me = !0, ve()))), G;
    }, i.unstable_shouldYield = oe, i.unstable_wrapCallback = function(G) {
      var X = z;
      return function() {
        var k = z;
        z = X;
        try {
          return G.apply(this, arguments);
        } finally {
          z = k;
        }
      };
    };
  })(Ec)), Ec;
}
var nm;
function Cp() {
  return nm || (nm = 1, Sc.exports = Tp()), Sc.exports;
}
var im;
function Ap() {
  if (im) return li;
  im = 1;
  var i = {};
  var r = Cp(), s = jc(), c = wp();
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
      throw Error(o(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === l) return y(n), e;
          if (u === a) return y(n), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (l.return !== a.return) l = n, a = u;
      else {
        for (var f = !1, h = n.child; h; ) {
          if (h === l) {
            f = !0, l = n, a = u;
            break;
          }
          if (h === a) {
            f = !0, a = n, l = u;
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = u.child; h; ) {
            if (h === l) {
              f = !0, l = u, a = n;
              break;
            }
            if (h === a) {
              f = !0, a = u, l = n;
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (l.alternate !== a) throw Error(o(190));
    }
    if (l.tag !== 3) throw Error(o(188));
    return l.stateNode.current === l ? e : t;
  }
  function R(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = R(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var z = Object.assign, U = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), B = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), me = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), he = /* @__PURE__ */ Symbol.for("react.lazy"), oe = /* @__PURE__ */ Symbol.for("react.activity"), Ie = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function De(e) {
    return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ye = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Xe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case Z:
        return "Profiler";
      case Q:
        return "StrictMode";
      case me:
        return "Suspense";
      case W:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case B:
          return "Portal";
        case P:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : Xe(e.type) || "Memo";
        case he:
          t = e._payload, e = e._init;
          try {
            return Xe(e(t));
          } catch {
          }
      }
    return null;
  }
  var G = Array.isArray, X = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], Ne = -1;
  function E(e) {
    return { current: e };
  }
  function L(e) {
    0 > Ne || (e.current = ce[Ne], ce[Ne] = null, Ne--);
  }
  function V(e, t) {
    Ne++, ce[Ne] = e.current, e.current = t;
  }
  var Y = E(null), te = E(null), ae = E(null), be = E(null);
  function nt(e, t) {
    switch (V(ae, t), V(te, e), V(Y, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? h0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = h0(t), e = y0(t, e);
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
    L(Y), V(Y, e);
  }
  function Be() {
    L(Y), L(te), L(ae);
  }
  function kl(e) {
    e.memoizedState !== null && V(be, e);
    var t = Y.current, l = y0(t, e.type);
    t !== l && (V(te, e), V(Y, l));
  }
  function ya(e) {
    te.current === e && (L(Y), L(te)), be.current === e && (L(be), Fn._currentValue = ie);
  }
  var Se, pt;
  function $e(e) {
    if (Se === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Se = t && t[1] || "", pt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Se + e + pt;
  }
  var Ft = !1;
  function vl(e, t) {
    if (!e || Ft) return "";
    Ft = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (M) {
                  var N = M;
                }
                Reflect.construct(e, [], q);
              } else {
                try {
                  q.call();
                } catch (M) {
                  N = M;
                }
                e.call(q.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                N = M;
              }
              (q = e()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (M) {
            if (M && N && typeof M.stack == "string")
              return [M.stack, N.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], h = u[1];
      if (f && h) {
        var S = f.split(`
`), _ = h.split(`
`);
        for (n = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === S.length || n === _.length)
          for (a = S.length - 1, n = _.length - 1; 1 <= a && 0 <= n && S[a] !== _[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (S[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || S[a] !== _[n]) {
                  var D = `
` + S[a].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      Ft = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? $e(l) : "";
  }
  function Ql(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return $e(e.type);
      case 16:
        return $e("Lazy");
      case 13:
        return e.child !== t && t !== null ? $e("Suspense Fallback") : $e("Suspense");
      case 19:
        return $e("SuspenseList");
      case 0:
      case 15:
        return vl(e.type, !1);
      case 11:
        return vl(e.type.render, !1);
      case 1:
        return vl(e.type, !0);
      case 31:
        return $e("Activity");
      default:
        return "";
    }
  }
  function yi(e) {
    try {
      var t = "", l = null;
      do
        t += Ql(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Iu = Object.prototype.hasOwnProperty, Pu = r.unstable_scheduleCallback, er = r.unstable_cancelCallback, Eh = r.unstable_shouldYield, xh = r.unstable_requestPaint, vt = r.unstable_now, Rh = r.unstable_getCurrentPriorityLevel, kc = r.unstable_ImmediatePriority, Qc = r.unstable_UserBlockingPriority, gi = r.unstable_NormalPriority, wh = r.unstable_LowPriority, Zc = r.unstable_IdlePriority, Th = r.log, Ch = r.unstable_setDisableYieldValue, sn = null, bt = null;
  function bl(e) {
    if (typeof Th == "function" && Ch(e), bt && typeof bt.setStrictMode == "function")
      try {
        bt.setStrictMode(sn, e);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : zh, Ah = Math.log, _h = Math.LN2;
  function zh(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ah(e) / _h | 0) | 0;
  }
  var pi = 256, vi = 262144, bi = 4194304;
  function Zl(e) {
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
  function Si(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = a & 134217727;
    return h !== 0 ? (a = h & ~u, a !== 0 ? n = Zl(a) : (f &= h, f !== 0 ? n = Zl(f) : l || (l = h & ~e, l !== 0 && (n = Zl(l))))) : (h = a & ~u, h !== 0 ? n = Zl(h) : f !== 0 ? n = Zl(f) : l || (l = a & ~e, l !== 0 && (n = Zl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function cn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Nh(e, t) {
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
  function Kc() {
    var e = bi;
    return bi <<= 1, (bi & 62914560) === 0 && (bi = 4194304), e;
  }
  function tr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function on(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Oh(e, t, l, a, n, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var h = e.entanglements, S = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var D = 31 - St(l), q = 1 << D;
      h[D] = 0, S[D] = -1;
      var N = _[D];
      if (N !== null)
        for (_[D] = null, D = 0; D < N.length; D++) {
          var M = N[D];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~q;
    }
    a !== 0 && Jc(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Jc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - St(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function $c(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - St(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function Fc(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : lr(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function lr(e) {
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
  function ar(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Wc() {
    var e = k.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : H0(e.type));
  }
  function Ic(e, t) {
    var l = k.p;
    try {
      return k.p = e, t();
    } finally {
      k.p = l;
    }
  }
  var Sl = Math.random().toString(36).slice(2), Pe = "__reactFiber$" + Sl, st = "__reactProps$" + Sl, ga = "__reactContainer$" + Sl, nr = "__reactEvents$" + Sl, Mh = "__reactListeners$" + Sl, jh = "__reactHandles$" + Sl, Pc = "__reactResources$" + Sl, fn = "__reactMarker$" + Sl;
  function ir(e) {
    delete e[Pe], delete e[st], delete e[nr], delete e[Mh], delete e[jh];
  }
  function pa(e) {
    var t = e[Pe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[ga] || l[Pe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = x0(e); e !== null; ) {
            if (l = e[Pe]) return l;
            e = x0(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function va(e) {
    if (e = e[Pe] || e[ga]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function dn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ba(e) {
    var t = e[Pc];
    return t || (t = e[Pc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[fn] = !0;
  }
  var eo = /* @__PURE__ */ new Set(), to = {};
  function Kl(e, t) {
    Sa(e, t), Sa(e + "Capture", t);
  }
  function Sa(e, t) {
    for (to[e] = t, e = 0; e < t.length; e++)
      eo.add(t[e]);
  }
  var Uh = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), lo = {}, ao = {};
  function Dh(e) {
    return Iu.call(ao, e) ? !0 : Iu.call(lo, e) ? !1 : Uh.test(e) ? ao[e] = !0 : (lo[e] = !0, !1);
  }
  function Ei(e, t, l) {
    if (Dh(t))
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
  function xi(e, t, l) {
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
  function Wt(e, t, l, a) {
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
  function _t(e) {
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
  function no(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Bh(e, t, l) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
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
  function ur(e) {
    if (!e._valueTracker) {
      var t = no(e) ? "checked" : "value";
      e._valueTracker = Bh(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function io(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = no(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Lh = /[\n"\\]/g;
  function zt(e) {
    return e.replace(
      Lh,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function rr(e, t, l, a, n, u, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + _t(t)) : e.value !== "" + _t(t) && (e.value = "" + _t(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? sr(e, f, _t(t)) : l != null ? sr(e, f, _t(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + _t(h) : e.removeAttribute("name");
  }
  function uo(e, t, l, a, n, u, f, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ur(e);
        return;
      }
      l = l != null ? "" + _t(l) : "", t = t != null ? "" + _t(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), ur(e);
  }
  function sr(e, t, l) {
    t === "number" && Ri(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Ea(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var n = 0; n < l.length; n++)
        t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + _t(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          e[n].selected = !0, a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ro(e, t, l) {
    if (t != null && (t = "" + _t(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + _t(l) : "";
  }
  function so(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(o(92));
        if (G(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = _t(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), ur(e);
  }
  function xa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hh = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function co(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Hh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function oo(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && co(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && co(e, u, t[u]);
  }
  function cr(e) {
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
  var qh = /* @__PURE__ */ new Map([
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
  ]), Yh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wi(e) {
    return Yh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function It() {
  }
  var or = null;
  function fr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ra = null, wa = null;
  function fo(e) {
    var t = va(e);
    if (t && (e = t.stateNode)) {
      var l = e[st] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (rr(
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
                var n = a[st] || null;
                if (!n) throw Error(o(90));
                rr(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              a = l[t], a.form === e.form && io(a);
          }
          break e;
        case "textarea":
          ro(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Ea(e, !!l.multiple, t, !1);
      }
    }
  }
  var dr = !1;
  function mo(e, t, l) {
    if (dr) return e(t, l);
    dr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (dr = !1, (Ra !== null || wa !== null) && (fu(), Ra && (t = Ra, e = wa, wa = Ra = null, fo(t), e)))
        for (t = 0; t < e.length; t++) fo(e[t]);
    }
  }
  function mn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[st] || null;
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
  var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), mr = !1;
  if (Pt)
    try {
      var hn = {};
      Object.defineProperty(hn, "passive", {
        get: function() {
          mr = !0;
        }
      }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
    } catch {
      mr = !1;
    }
  var El = null, hr = null, Ti = null;
  function ho() {
    if (Ti) return Ti;
    var e, t = hr, l = t.length, a, n = "value" in El ? El.value : El.textContent, u = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === n[u - a]; a++) ;
    return Ti = n.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Ci(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ai() {
    return !0;
  }
  function yo() {
    return !1;
  }
  function ct(e) {
    function t(l, a, n, u, f) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ai : yo, this.isPropagationStopped = yo, this;
    }
    return z(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ai);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ai);
      },
      persist: function() {
      },
      isPersistent: Ai
    }), t;
  }
  var Jl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _i = ct(Jl), yn = z({}, Jl, { view: 0, detail: 0 }), Xh = ct(yn), yr, gr, gn, zi = z({}, yn, {
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
    getModifierState: vr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (yr = e.screenX - gn.screenX, gr = e.screenY - gn.screenY) : gr = yr = 0, gn = e), yr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : gr;
    }
  }), go = ct(zi), Gh = z({}, zi, { dataTransfer: 0 }), Vh = ct(Gh), kh = z({}, yn, { relatedTarget: 0 }), pr = ct(kh), Qh = z({}, Jl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zh = ct(Qh), Kh = z({}, Jl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Jh = ct(Kh), $h = z({}, Jl, { data: 0 }), po = ct($h), Fh = {
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
  }, Wh = {
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
  }, Ih = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Ph(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ih[e]) ? !!t[e] : !1;
  }
  function vr() {
    return Ph;
  }
  var e1 = z({}, yn, {
    key: function(e) {
      if (e.key) {
        var t = Fh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vr,
    charCode: function(e) {
      return e.type === "keypress" ? Ci(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), t1 = ct(e1), l1 = z({}, zi, {
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
  }), vo = ct(l1), a1 = z({}, yn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vr
  }), n1 = ct(a1), i1 = z({}, Jl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), u1 = ct(i1), r1 = z({}, zi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), s1 = ct(r1), c1 = z({}, Jl, {
    newState: 0,
    oldState: 0
  }), o1 = ct(c1), f1 = [9, 13, 27, 32], br = Pt && "CompositionEvent" in window, pn = null;
  Pt && "documentMode" in document && (pn = document.documentMode);
  var d1 = Pt && "TextEvent" in window && !pn, bo = Pt && (!br || pn && 8 < pn && 11 >= pn), So = " ", Eo = !1;
  function xo(e, t) {
    switch (e) {
      case "keyup":
        return f1.indexOf(t.keyCode) !== -1;
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
  function Ro(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ta = !1;
  function m1(e, t) {
    switch (e) {
      case "compositionend":
        return Ro(t);
      case "keypress":
        return t.which !== 32 ? null : (Eo = !0, So);
      case "textInput":
        return e = t.data, e === So && Eo ? null : e;
      default:
        return null;
    }
  }
  function h1(e, t) {
    if (Ta)
      return e === "compositionend" || !br && xo(e, t) ? (e = ho(), Ti = hr = El = null, Ta = !1, e) : null;
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
        return bo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var y1 = {
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
  function wo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!y1[e.type] : t === "textarea";
  }
  function To(e, t, l, a) {
    Ra ? wa ? wa.push(a) : wa = [a] : Ra = a, t = vu(t, "onChange"), 0 < t.length && (l = new _i(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var vn = null, bn = null;
  function g1(e) {
    s0(e, 0);
  }
  function Ni(e) {
    var t = dn(e);
    if (io(t)) return e;
  }
  function Co(e, t) {
    if (e === "change") return t;
  }
  var Ao = !1;
  if (Pt) {
    var Sr;
    if (Pt) {
      var Er = "oninput" in document;
      if (!Er) {
        var _o = document.createElement("div");
        _o.setAttribute("oninput", "return;"), Er = typeof _o.oninput == "function";
      }
      Sr = Er;
    } else Sr = !1;
    Ao = Sr && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    vn && (vn.detachEvent("onpropertychange", No), bn = vn = null);
  }
  function No(e) {
    if (e.propertyName === "value" && Ni(bn)) {
      var t = [];
      To(
        t,
        bn,
        e,
        fr(e)
      ), mo(g1, t);
    }
  }
  function p1(e, t, l) {
    e === "focusin" ? (zo(), vn = t, bn = l, vn.attachEvent("onpropertychange", No)) : e === "focusout" && zo();
  }
  function v1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ni(bn);
  }
  function b1(e, t) {
    if (e === "click") return Ni(t);
  }
  function S1(e, t) {
    if (e === "input" || e === "change")
      return Ni(t);
  }
  function E1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : E1;
  function Sn(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Iu.call(t, n) || !Et(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Oo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Mo(e, t) {
    var l = Oo(e);
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
      l = Oo(l);
    }
  }
  function jo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? jo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Uo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ri(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Ri(e.document);
    }
    return t;
  }
  function xr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var x1 = Pt && "documentMode" in document && 11 >= document.documentMode, Ca = null, Rr = null, En = null, wr = !1;
  function Do(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    wr || Ca == null || Ca !== Ri(a) || (a = Ca, "selectionStart" in a && xr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), En && Sn(En, a) || (En = a, a = vu(Rr, "onSelect"), 0 < a.length && (t = new _i(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Ca)));
  }
  function $l(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Aa = {
    animationend: $l("Animation", "AnimationEnd"),
    animationiteration: $l("Animation", "AnimationIteration"),
    animationstart: $l("Animation", "AnimationStart"),
    transitionrun: $l("Transition", "TransitionRun"),
    transitionstart: $l("Transition", "TransitionStart"),
    transitioncancel: $l("Transition", "TransitionCancel"),
    transitionend: $l("Transition", "TransitionEnd")
  }, Tr = {}, Bo = {};
  Pt && (Bo = document.createElement("div").style, "AnimationEvent" in window || (delete Aa.animationend.animation, delete Aa.animationiteration.animation, delete Aa.animationstart.animation), "TransitionEvent" in window || delete Aa.transitionend.transition);
  function Fl(e) {
    if (Tr[e]) return Tr[e];
    if (!Aa[e]) return e;
    var t = Aa[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Bo)
        return Tr[e] = t[l];
    return e;
  }
  var Lo = Fl("animationend"), Ho = Fl("animationiteration"), qo = Fl("animationstart"), R1 = Fl("transitionrun"), w1 = Fl("transitionstart"), T1 = Fl("transitioncancel"), Yo = Fl("transitionend"), Xo = /* @__PURE__ */ new Map(), Cr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Cr.push("scrollEnd");
  function Yt(e, t) {
    Xo.set(e, t), Kl(t, [e]);
  }
  var Oi = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Nt = [], _a = 0, Ar = 0;
  function Mi() {
    for (var e = _a, t = Ar = _a = 0; t < e; ) {
      var l = Nt[t];
      Nt[t++] = null;
      var a = Nt[t];
      Nt[t++] = null;
      var n = Nt[t];
      Nt[t++] = null;
      var u = Nt[t];
      if (Nt[t++] = null, a !== null && n !== null) {
        var f = a.pending;
        f === null ? n.next = n : (n.next = f.next, f.next = n), a.pending = n;
      }
      u !== 0 && Go(l, n, u);
    }
  }
  function ji(e, t, l, a) {
    Nt[_a++] = e, Nt[_a++] = t, Nt[_a++] = l, Nt[_a++] = a, Ar |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function _r(e, t, l, a) {
    return ji(e, t, l, a), Ui(e);
  }
  function Wl(e, t) {
    return ji(e, null, null, t), Ui(e);
  }
  function Go(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - St(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Ui(e) {
    if (50 < Vn)
      throw Vn = 0, Ls = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var za = {};
  function C1(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, l, a) {
    return new C1(e, t, l, a);
  }
  function zr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function el(e, t) {
    var l = e.alternate;
    return l === null ? (l = xt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Vo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Di(e, t, l, a, n, u) {
    var f = 0;
    if (a = e, typeof e == "function") zr(e) && (f = 1);
    else if (typeof e == "string")
      f = Oy(
        e,
        l,
        Y.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case oe:
          return e = xt(31, l, t, n), e.elementType = oe, e.lanes = u, e;
        case j:
          return Il(l.children, n, u, t);
        case Q:
          f = 8, n |= 24;
          break;
        case Z:
          return e = xt(12, l, t, n | 2), e.elementType = Z, e.lanes = u, e;
        case me:
          return e = xt(13, l, t, n), e.elementType = me, e.lanes = u, e;
        case W:
          return e = xt(19, l, t, n), e.elementType = W, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case P:
                f = 10;
                break e;
              case K:
                f = 9;
                break e;
              case le:
                f = 11;
                break e;
              case $:
                f = 14;
                break e;
              case he:
                f = 16, a = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = xt(f, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function Il(e, t, l, a) {
    return e = xt(7, e, a, t), e.lanes = l, e;
  }
  function Nr(e, t, l) {
    return e = xt(6, e, null, t), e.lanes = l, e;
  }
  function ko(e) {
    var t = xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Or(e, t, l) {
    return t = xt(
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
  var Qo = /* @__PURE__ */ new WeakMap();
  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Qo.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: yi(t)
      }, Qo.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: yi(t)
    };
  }
  var Na = [], Oa = 0, Bi = null, xn = 0, Mt = [], jt = 0, xl = null, Qt = 1, Zt = "";
  function tl(e, t) {
    Na[Oa++] = xn, Na[Oa++] = Bi, Bi = e, xn = t;
  }
  function Zo(e, t, l) {
    Mt[jt++] = Qt, Mt[jt++] = Zt, Mt[jt++] = xl, xl = e;
    var a = Qt;
    e = Zt;
    var n = 32 - St(a) - 1;
    a &= ~(1 << n), l += 1;
    var u = 32 - St(t) + n;
    if (30 < u) {
      var f = n - n % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, n -= f, Qt = 1 << 32 - St(t) + n | l << n | a, Zt = u + e;
    } else
      Qt = 1 << u | l << n | a, Zt = e;
  }
  function Mr(e) {
    e.return !== null && (tl(e, 1), Zo(e, 1, 0));
  }
  function jr(e) {
    for (; e === Bi; )
      Bi = Na[--Oa], Na[Oa] = null, xn = Na[--Oa], Na[Oa] = null;
    for (; e === xl; )
      xl = Mt[--jt], Mt[jt] = null, Zt = Mt[--jt], Mt[jt] = null, Qt = Mt[--jt], Mt[jt] = null;
  }
  function Ko(e, t) {
    Mt[jt++] = Qt, Mt[jt++] = Zt, Mt[jt++] = xl, Qt = t.id, Zt = t.overflow, xl = e;
  }
  var et = null, Me = null, pe = !1, Rl = null, Ut = !1, Ur = Error(o(519));
  function wl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Rn(Ot(t, e)), Ur;
  }
  function Jo(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[Pe] = e, t[st] = a, l) {
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
        for (l = 0; l < Qn.length; l++)
          de(Qn[l], t);
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
        de("invalid", t), uo(
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
        de("invalid", t), so(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || d0(t.textContent, l) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = It), t = !0) : t = !1, t || wl(e, !0);
  }
  function $o(e) {
    for (et = e.return; et; )
      switch (et.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          et = et.return;
      }
  }
  function Ma(e) {
    if (e !== et) return !1;
    if (!pe) return $o(e), pe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Is(e.type, e.memoizedProps)), l = !l), l && Me && wl(e), $o(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = E0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = E0(e);
    } else
      t === 27 ? (t = Me, Hl(e.type) ? (e = ac, ac = null, Me = e) : Me = t) : Me = et ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pl() {
    Me = et = null, pe = !1;
  }
  function Dr() {
    var e = Rl;
    return e !== null && (mt === null ? mt = e : mt.push.apply(
      mt,
      e
    ), Rl = null), e;
  }
  function Rn(e) {
    Rl === null ? Rl = [e] : Rl.push(e);
  }
  var Br = E(null), ea = null, ll = null;
  function Tl(e, t, l) {
    V(Br, t._currentValue), t._currentValue = l;
  }
  function al(e) {
    e._currentValue = Br.current, L(Br);
  }
  function Lr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Hr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var f = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var h = u;
          u = n;
          for (var S = 0; S < t.length; S++)
            if (h.context === t[S]) {
              u.lanes |= l, h = u.alternate, h !== null && (h.lanes |= l), Lr(
                u.return,
                l,
                e
              ), a || (f = null);
              break e;
            }
          u = h.next;
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(o(341));
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), Lr(f, l, e), f = null;
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (n = f.sibling, n !== null) {
            n.return = f.return, f = n;
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function ja(e, t, l, a) {
    e = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var h = n.type;
          Et(n.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (n === be.current) {
        if (f = n.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Fn) : e = [Fn]);
      }
      n = n.return;
    }
    e !== null && Hr(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function Li(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Et(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ta(e) {
    ea = e, ll = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function tt(e) {
    return Fo(ea, e);
  }
  function Hi(e, t) {
    return ea === null && ta(e), Fo(e, t);
  }
  function Fo(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, ll === null) {
      if (e === null) throw Error(o(308));
      ll = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ll = ll.next = t;
    return l;
  }
  var A1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, _1 = r.unstable_scheduleCallback, z1 = r.unstable_NormalPriority, ke = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function qr() {
    return {
      controller: new A1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function wn(e) {
    e.refCount--, e.refCount === 0 && _1(z1, function() {
      e.controller.abort();
    });
  }
  var Tn = null, Yr = 0, Ua = 0, Da = null;
  function N1(e, t) {
    if (Tn === null) {
      var l = Tn = [];
      Yr = 0, Ua = Vs(), Da = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return Yr++, t.then(Wo, Wo), t;
  }
  function Wo() {
    if (--Yr === 0 && Tn !== null) {
      Da !== null && (Da.status = "fulfilled");
      var e = Tn;
      Tn = null, Ua = 0, Da = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function O1(e, t) {
    var l = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        l.push(n);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
          (0, l[n])(void 0);
      }
    ), a;
  }
  var Io = X.S;
  X.S = function(e, t) {
    Bd = vt(), typeof t == "object" && t !== null && typeof t.then == "function" && N1(e, t), Io !== null && Io(e, t);
  };
  var la = E(null);
  function Xr() {
    var e = la.current;
    return e !== null ? e : ze.pooledCache;
  }
  function qi(e, t) {
    t === null ? V(la, la.current) : V(la, t.pool);
  }
  function Po() {
    var e = Xr();
    return e === null ? null : { parent: ke._currentValue, pool: e };
  }
  var Ba = Error(o(460)), Gr = Error(o(474)), Yi = Error(o(542)), Xi = { then: function() {
  } };
  function ef(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function tf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(It, It), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, af(e), e;
      default:
        if (typeof t.status == "string") t.then(It, It);
        else {
          if (e = ze, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, af(e), e;
        }
        throw na = t, Ba;
    }
  }
  function aa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (na = l, Ba) : l;
    }
  }
  var na = null;
  function lf() {
    if (na === null) throw Error(o(459));
    var e = na;
    return na = null, e;
  }
  function af(e) {
    if (e === Ba || e === Yi)
      throw Error(o(483));
  }
  var La = null, Cn = 0;
  function Gi(e) {
    var t = Cn;
    return Cn += 1, La === null && (La = []), tf(La, e, t);
  }
  function An(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Vi(e, t) {
    throw t.$$typeof === U ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function nf(e) {
    function t(w, x) {
      if (e) {
        var A = w.deletions;
        A === null ? (w.deletions = [x], w.flags |= 16) : A.push(x);
      }
    }
    function l(w, x) {
      if (!e) return null;
      for (; x !== null; )
        t(w, x), x = x.sibling;
      return null;
    }
    function a(w) {
      for (var x = /* @__PURE__ */ new Map(); w !== null; )
        w.key !== null ? x.set(w.key, w) : x.set(w.index, w), w = w.sibling;
      return x;
    }
    function n(w, x) {
      return w = el(w, x), w.index = 0, w.sibling = null, w;
    }
    function u(w, x, A) {
      return w.index = A, e ? (A = w.alternate, A !== null ? (A = A.index, A < x ? (w.flags |= 67108866, x) : A) : (w.flags |= 67108866, x)) : (w.flags |= 1048576, x);
    }
    function f(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function h(w, x, A, H) {
      return x === null || x.tag !== 6 ? (x = Nr(A, w.mode, H), x.return = w, x) : (x = n(x, A), x.return = w, x);
    }
    function S(w, x, A, H) {
      var I = A.type;
      return I === j ? D(
        w,
        x,
        A.props.children,
        H,
        A.key
      ) : x !== null && (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === he && aa(I) === x.type) ? (x = n(x, A.props), An(x, A), x.return = w, x) : (x = Di(
        A.type,
        A.key,
        A.props,
        null,
        w.mode,
        H
      ), An(x, A), x.return = w, x);
    }
    function _(w, x, A, H) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== A.containerInfo || x.stateNode.implementation !== A.implementation ? (x = Or(A, w.mode, H), x.return = w, x) : (x = n(x, A.children || []), x.return = w, x);
    }
    function D(w, x, A, H, I) {
      return x === null || x.tag !== 7 ? (x = Il(
        A,
        w.mode,
        H,
        I
      ), x.return = w, x) : (x = n(x, A), x.return = w, x);
    }
    function q(w, x, A) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = Nr(
          "" + x,
          w.mode,
          A
        ), x.return = w, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case C:
            return A = Di(
              x.type,
              x.key,
              x.props,
              null,
              w.mode,
              A
            ), An(A, x), A.return = w, A;
          case B:
            return x = Or(
              x,
              w.mode,
              A
            ), x.return = w, x;
          case he:
            return x = aa(x), q(w, x, A);
        }
        if (G(x) || De(x))
          return x = Il(
            x,
            w.mode,
            A,
            null
          ), x.return = w, x;
        if (typeof x.then == "function")
          return q(w, Gi(x), A);
        if (x.$$typeof === P)
          return q(
            w,
            Hi(w, x),
            A
          );
        Vi(w, x);
      }
      return null;
    }
    function N(w, x, A, H) {
      var I = x !== null ? x.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return I !== null ? null : h(w, x, "" + A, H);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case C:
            return A.key === I ? S(w, x, A, H) : null;
          case B:
            return A.key === I ? _(w, x, A, H) : null;
          case he:
            return A = aa(A), N(w, x, A, H);
        }
        if (G(A) || De(A))
          return I !== null ? null : D(w, x, A, H, null);
        if (typeof A.then == "function")
          return N(
            w,
            x,
            Gi(A),
            H
          );
        if (A.$$typeof === P)
          return N(
            w,
            x,
            Hi(w, A),
            H
          );
        Vi(w, A);
      }
      return null;
    }
    function M(w, x, A, H, I) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return w = w.get(A) || null, h(x, w, "" + H, I);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case C:
            return w = w.get(
              H.key === null ? A : H.key
            ) || null, S(x, w, H, I);
          case B:
            return w = w.get(
              H.key === null ? A : H.key
            ) || null, _(x, w, H, I);
          case he:
            return H = aa(H), M(
              w,
              x,
              A,
              H,
              I
            );
        }
        if (G(H) || De(H))
          return w = w.get(A) || null, D(x, w, H, I, null);
        if (typeof H.then == "function")
          return M(
            w,
            x,
            A,
            Gi(H),
            I
          );
        if (H.$$typeof === P)
          return M(
            w,
            x,
            A,
            Hi(x, H),
            I
          );
        Vi(x, H);
      }
      return null;
    }
    function J(w, x, A, H) {
      for (var I = null, Ee = null, F = x, se = x = 0, ge = null; F !== null && se < A.length; se++) {
        F.index > se ? (ge = F, F = null) : ge = F.sibling;
        var xe = N(
          w,
          F,
          A[se],
          H
        );
        if (xe === null) {
          F === null && (F = ge);
          break;
        }
        e && F && xe.alternate === null && t(w, F), x = u(xe, x, se), Ee === null ? I = xe : Ee.sibling = xe, Ee = xe, F = ge;
      }
      if (se === A.length)
        return l(w, F), pe && tl(w, se), I;
      if (F === null) {
        for (; se < A.length; se++)
          F = q(w, A[se], H), F !== null && (x = u(
            F,
            x,
            se
          ), Ee === null ? I = F : Ee.sibling = F, Ee = F);
        return pe && tl(w, se), I;
      }
      for (F = a(F); se < A.length; se++)
        ge = M(
          F,
          w,
          se,
          A[se],
          H
        ), ge !== null && (e && ge.alternate !== null && F.delete(
          ge.key === null ? se : ge.key
        ), x = u(
          ge,
          x,
          se
        ), Ee === null ? I = ge : Ee.sibling = ge, Ee = ge);
      return e && F.forEach(function(Vl) {
        return t(w, Vl);
      }), pe && tl(w, se), I;
    }
    function ee(w, x, A, H) {
      if (A == null) throw Error(o(151));
      for (var I = null, Ee = null, F = x, se = x = 0, ge = null, xe = A.next(); F !== null && !xe.done; se++, xe = A.next()) {
        F.index > se ? (ge = F, F = null) : ge = F.sibling;
        var Vl = N(w, F, xe.value, H);
        if (Vl === null) {
          F === null && (F = ge);
          break;
        }
        e && F && Vl.alternate === null && t(w, F), x = u(Vl, x, se), Ee === null ? I = Vl : Ee.sibling = Vl, Ee = Vl, F = ge;
      }
      if (xe.done)
        return l(w, F), pe && tl(w, se), I;
      if (F === null) {
        for (; !xe.done; se++, xe = A.next())
          xe = q(w, xe.value, H), xe !== null && (x = u(xe, x, se), Ee === null ? I = xe : Ee.sibling = xe, Ee = xe);
        return pe && tl(w, se), I;
      }
      for (F = a(F); !xe.done; se++, xe = A.next())
        xe = M(F, w, se, xe.value, H), xe !== null && (e && xe.alternate !== null && F.delete(xe.key === null ? se : xe.key), x = u(xe, x, se), Ee === null ? I = xe : Ee.sibling = xe, Ee = xe);
      return e && F.forEach(function(Gy) {
        return t(w, Gy);
      }), pe && tl(w, se), I;
    }
    function _e(w, x, A, H) {
      if (typeof A == "object" && A !== null && A.type === j && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case C:
            e: {
              for (var I = A.key; x !== null; ) {
                if (x.key === I) {
                  if (I = A.type, I === j) {
                    if (x.tag === 7) {
                      l(
                        w,
                        x.sibling
                      ), H = n(
                        x,
                        A.props.children
                      ), H.return = w, w = H;
                      break e;
                    }
                  } else if (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === he && aa(I) === x.type) {
                    l(
                      w,
                      x.sibling
                    ), H = n(x, A.props), An(H, A), H.return = w, w = H;
                    break e;
                  }
                  l(w, x);
                  break;
                } else t(w, x);
                x = x.sibling;
              }
              A.type === j ? (H = Il(
                A.props.children,
                w.mode,
                H,
                A.key
              ), H.return = w, w = H) : (H = Di(
                A.type,
                A.key,
                A.props,
                null,
                w.mode,
                H
              ), An(H, A), H.return = w, w = H);
            }
            return f(w);
          case B:
            e: {
              for (I = A.key; x !== null; ) {
                if (x.key === I)
                  if (x.tag === 4 && x.stateNode.containerInfo === A.containerInfo && x.stateNode.implementation === A.implementation) {
                    l(
                      w,
                      x.sibling
                    ), H = n(x, A.children || []), H.return = w, w = H;
                    break e;
                  } else {
                    l(w, x);
                    break;
                  }
                else t(w, x);
                x = x.sibling;
              }
              H = Or(A, w.mode, H), H.return = w, w = H;
            }
            return f(w);
          case he:
            return A = aa(A), _e(
              w,
              x,
              A,
              H
            );
        }
        if (G(A))
          return J(
            w,
            x,
            A,
            H
          );
        if (De(A)) {
          if (I = De(A), typeof I != "function") throw Error(o(150));
          return A = I.call(A), ee(
            w,
            x,
            A,
            H
          );
        }
        if (typeof A.then == "function")
          return _e(
            w,
            x,
            Gi(A),
            H
          );
        if (A.$$typeof === P)
          return _e(
            w,
            x,
            Hi(w, A),
            H
          );
        Vi(w, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, x !== null && x.tag === 6 ? (l(w, x.sibling), H = n(x, A), H.return = w, w = H) : (l(w, x), H = Nr(A, w.mode, H), H.return = w, w = H), f(w)) : l(w, x);
    }
    return function(w, x, A, H) {
      try {
        Cn = 0;
        var I = _e(
          w,
          x,
          A,
          H
        );
        return La = null, I;
      } catch (F) {
        if (F === Ba || F === Yi) throw F;
        var Ee = xt(29, F, null, w.mode);
        return Ee.lanes = H, Ee.return = w, Ee;
      }
    };
  }
  var ia = nf(!0), uf = nf(!1), Cl = !1;
  function Vr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function kr(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Al(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function _l(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Re & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Ui(e), Go(e, null, l), t;
    }
    return ji(e, a, t, l), Ui(e);
  }
  function _n(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, $c(e, l);
    }
  }
  function Qr(e, t) {
    var l = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, l === a)) {
      var n = null, u = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = f : u = u.next = f, l = l.next;
        } while (l !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Zr = !1;
  function zn() {
    if (Zr) {
      var e = Da;
      if (e !== null) throw e;
    }
  }
  function Nn(e, t, l, a) {
    Zr = !1;
    var n = e.updateQueue;
    Cl = !1;
    var u = n.firstBaseUpdate, f = n.lastBaseUpdate, h = n.shared.pending;
    if (h !== null) {
      n.shared.pending = null;
      var S = h, _ = S.next;
      S.next = null, f === null ? u = _ : f.next = _, f = S;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, h = D.lastBaseUpdate, h !== f && (h === null ? D.firstBaseUpdate = _ : h.next = _, D.lastBaseUpdate = S));
    }
    if (u !== null) {
      var q = n.baseState;
      f = 0, D = _ = S = null, h = u;
      do {
        var N = h.lane & -536870913, M = N !== h.lane;
        if (M ? (ye & N) === N : (a & N) === N) {
          N !== 0 && N === Ua && (Zr = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ee = h;
            N = t;
            var _e = l;
            switch (ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  q = J.call(_e, q, N);
                  break e;
                }
                q = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, N = typeof J == "function" ? J.call(_e, q, N) : J, N == null) break e;
                q = z({}, q, N);
                break e;
              case 2:
                Cl = !0;
            }
          }
          N = h.callback, N !== null && (e.flags |= 64, M && (e.flags |= 8192), M = n.callbacks, M === null ? n.callbacks = [N] : M.push(N));
        } else
          M = {
            lane: N,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, D === null ? (_ = D = M, S = q) : D = D.next = M, f |= N;
        if (h = h.next, h === null) {
          if (h = n.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, n.lastBaseUpdate = M, n.shared.pending = null;
        }
      } while (!0);
      D === null && (S = q), n.baseState = S, n.firstBaseUpdate = _, n.lastBaseUpdate = D, u === null && (n.shared.lanes = 0), jl |= f, e.lanes = f, e.memoizedState = q;
    }
  }
  function rf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function sf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        rf(l[e], t);
  }
  var Ha = E(null), ki = E(0);
  function cf(e, t) {
    e = dl, V(ki, e), V(Ha, t), dl = e | t.baseLanes;
  }
  function Kr() {
    V(ki, dl), V(Ha, Ha.current);
  }
  function Jr() {
    dl = ki.current, L(Ha), L(ki);
  }
  var Rt = E(null), Dt = null;
  function zl(e) {
    var t = e.alternate;
    V(Ge, Ge.current & 1), V(Rt, e), Dt === null && (t === null || Ha.current !== null || t.memoizedState !== null) && (Dt = e);
  }
  function $r(e) {
    V(Ge, Ge.current), V(Rt, e), Dt === null && (Dt = e);
  }
  function of(e) {
    e.tag === 22 ? (V(Ge, Ge.current), V(Rt, e), Dt === null && (Dt = e)) : Nl();
  }
  function Nl() {
    V(Ge, Ge.current), V(Rt, Rt.current);
  }
  function wt(e) {
    L(Rt), Dt === e && (Dt = null), L(Ge);
  }
  var Ge = E(0);
  function Qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || tc(l) || lc(l)))
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
  var nl = 0, ue = null, Ce = null, Qe = null, Zi = !1, qa = !1, ua = !1, Ki = 0, On = 0, Ya = null, M1 = 0;
  function He() {
    throw Error(o(321));
  }
  function Fr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Et(e[l], t[l])) return !1;
    return !0;
  }
  function Wr(e, t, l, a, n, u) {
    return nl = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e === null || e.memoizedState === null ? Kf : ds, ua = !1, u = l(a, n), ua = !1, qa && (u = df(
      t,
      l,
      a,
      n
    )), ff(e), u;
  }
  function ff(e) {
    X.H = Un;
    var t = Ce !== null && Ce.next !== null;
    if (nl = 0, Qe = Ce = ue = null, Zi = !1, On = 0, Ya = null, t) throw Error(o(300));
    e === null || Ze || (e = e.dependencies, e !== null && Li(e) && (Ze = !0));
  }
  function df(e, t, l, a) {
    ue = e;
    var n = 0;
    do {
      if (qa && (Ya = null), On = 0, qa = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Qe = Ce = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      X.H = Jf, u = t(l, a);
    } while (qa);
    return u;
  }
  function j1() {
    var e = X.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Mn(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Ir() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function Pr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function es(e) {
    if (Zi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Zi = !1;
    }
    nl = 0, Qe = Ce = ue = null, qa = !1, On = Ki = 0, Ya = null;
  }
  function rt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? ue.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ve() {
    if (Ce === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = Qe === null ? ue.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, Ce = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(o(467)) : Error(o(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, Qe === null ? ue.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Ji() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Mn(e) {
    var t = On;
    return On += 1, Ya === null && (Ya = []), e = tf(Ya, e, t), t = ue, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, X.H = t === null || t.memoizedState === null ? Kf : ds), e;
  }
  function $i(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Mn(e);
      if (e.$$typeof === P) return tt(e);
    }
    throw Error(o(438, String(e)));
  }
  function ts(e) {
    var t = null, l = ue.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var a = ue.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Ji(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ie;
    return t.index++, l;
  }
  function il(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Fi(e) {
    var t = Ve();
    return ls(t, Ce, e);
  }
  function ls(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var f = n.next;
        n.next = u.next, u.next = f;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = e.baseState, n === null) e.memoizedState = u;
    else {
      t = n.next;
      var h = f = null, S = null, _ = t, D = !1;
      do {
        var q = _.lane & -536870913;
        if (q !== _.lane ? (ye & q) === q : (nl & q) === q) {
          var N = _.revertLane;
          if (N === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), q === Ua && (D = !0);
          else if ((nl & N) === N) {
            _ = _.next, N === Ua && (D = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, S === null ? (h = S = q, f = u) : S = S.next = q, ue.lanes |= N, jl |= N;
          q = _.action, ua && l(u, q), u = _.hasEagerState ? _.eagerState : l(u, q);
        } else
          N = {
            lane: q,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, S === null ? (h = S = N, f = u) : S = S.next = N, ue.lanes |= q, jl |= q;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (S === null ? f = u : S.next = h, !Et(u, e.memoizedState) && (Ze = !0, D && (l = Da, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = S, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function as(e) {
    var t = Ve(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, n = l.pending, u = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var f = n = n.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== n);
      Et(u, t.memoizedState) || (Ze = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function mf(e, t, l) {
    var a = ue, n = Ve(), u = pe;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !Et(
      (Ce || n).memoizedState,
      l
    );
    if (f && (n.memoizedState = l, Ze = !0), n = n.queue, us(gf.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
      if (a.flags |= 2048, Xa(
        9,
        { destroy: void 0 },
        yf.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), ze === null) throw Error(o(349));
      u || (nl & 127) !== 0 || hf(a, t, l);
    }
    return l;
  }
  function hf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = Ji(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function yf(e, t, l, a) {
    t.value = l, t.getSnapshot = a, pf(t) && vf(e);
  }
  function gf(e, t, l) {
    return l(function() {
      pf(t) && vf(e);
    });
  }
  function pf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Et(e, l);
    } catch {
      return !0;
    }
  }
  function vf(e) {
    var t = Wl(e, 2);
    t !== null && ht(t, e, 2);
  }
  function ns(e) {
    var t = rt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), ua) {
        bl(!0);
        try {
          l();
        } finally {
          bl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: il,
      lastRenderedState: e
    }, t;
  }
  function bf(e, t, l, a) {
    return e.baseState = l, ls(
      e,
      Ce,
      typeof a == "function" ? a : il
    );
  }
  function U1(e, t, l, a, n) {
    if (Pi(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: n,
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
      X.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Sf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Sf(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = X.T, f = {};
      X.T = f;
      try {
        var h = l(n, a), S = X.S;
        S !== null && S(f, h), Ef(e, t, h);
      } catch (_) {
        is(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), X.T = u;
      }
    } else
      try {
        u = l(n, a), Ef(e, t, u);
      } catch (_) {
        is(e, t, _);
      }
  }
  function Ef(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        xf(e, t, a);
      },
      function(a) {
        return is(e, t, a);
      }
    ) : xf(e, t, l);
  }
  function xf(e, t, l) {
    t.status = "fulfilled", t.value = l, Rf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Sf(e, l)));
  }
  function is(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Rf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Rf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function wf(e, t) {
    return t;
  }
  function Tf(e, t) {
    if (pe) {
      var l = ze.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (pe) {
            if (Me) {
              t: {
                for (var n = Me, u = Ut; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = Bt(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                Me = Bt(
                  n.nextSibling
                ), a = n.data === "F!";
                break e;
              }
            }
            wl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = rt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wf,
      lastRenderedState: t
    }, l.queue = a, l = kf.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = ns(!1), u = fs.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = rt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = U1.bind(
      null,
      ue,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function Cf(e) {
    var t = Ve();
    return Af(t, Ce, e);
  }
  function Af(e, t, l) {
    if (t = ls(
      e,
      t,
      wf
    )[0], e = Fi(il)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Mn(t);
      } catch (f) {
        throw f === Ba ? Yi : f;
      }
    else a = t;
    t = Ve();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Xa(
      9,
      { destroy: void 0 },
      D1.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function D1(e, t) {
    e.action = t;
  }
  function _f(e) {
    var t = Ve(), l = Ce;
    if (l !== null)
      return Af(t, l, e);
    Ve(), t = t.memoizedState, l = Ve();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Xa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Ji(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function zf() {
    return Ve().memoizedState;
  }
  function Wi(e, t, l, a) {
    var n = rt();
    ue.flags |= e, n.memoizedState = Xa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ii(e, t, l, a) {
    var n = Ve();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Ce !== null && a !== null && Fr(a, Ce.memoizedState.deps) ? n.memoizedState = Xa(t, u, l, a) : (ue.flags |= e, n.memoizedState = Xa(
      1 | t,
      u,
      l,
      a
    ));
  }
  function Nf(e, t) {
    Wi(8390656, 8, e, t);
  }
  function us(e, t) {
    Ii(2048, 8, e, t);
  }
  function B1(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Ji(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function Of(e) {
    var t = Ve().memoizedState;
    return B1({ ref: t, nextImpl: e }), function() {
      if ((Re & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Mf(e, t) {
    return Ii(4, 2, e, t);
  }
  function jf(e, t) {
    return Ii(4, 4, e, t);
  }
  function Uf(e, t) {
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
  function Df(e, t, l) {
    l = l != null ? l.concat([e]) : null, Ii(4, 4, Uf.bind(null, t, e), l);
  }
  function rs() {
  }
  function Bf(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Fr(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function Lf(e, t) {
    var l = Ve();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Fr(t, a[1]))
      return a[0];
    if (a = e(), ua) {
      bl(!0);
      try {
        e();
      } finally {
        bl(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function ss(e, t, l) {
    return l === void 0 || (nl & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Hd(), ue.lanes |= e, jl |= e, l);
  }
  function Hf(e, t, l, a) {
    return Et(l, t) ? l : Ha.current !== null ? (e = ss(e, l, a), Et(e, t) || (Ze = !0), e) : (nl & 42) === 0 || (nl & 1073741824) !== 0 && (ye & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = Hd(), ue.lanes |= e, jl |= e, t);
  }
  function qf(e, t, l, a, n) {
    var u = k.p;
    k.p = u !== 0 && 8 > u ? u : 8;
    var f = X.T, h = {};
    X.T = h, fs(e, !1, t, l);
    try {
      var S = n(), _ = X.S;
      if (_ !== null && _(h, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var D = O1(
          S,
          a
        );
        jn(
          e,
          t,
          D,
          At(e)
        );
      } else
        jn(
          e,
          t,
          a,
          At(e)
        );
    } catch (q) {
      jn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: q },
        At()
      );
    } finally {
      k.p = u, f !== null && h.types !== null && (f.types = h.types), X.T = f;
    }
  }
  function L1() {
  }
  function cs(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Yf(e).queue;
    qf(
      e,
      n,
      t,
      ie,
      l === null ? L1 : function() {
        return Xf(e), l(a);
      }
    );
  }
  function Yf(e) {
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
        lastRenderedReducer: il,
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
        lastRenderedReducer: il,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Xf(e) {
    var t = Yf(e);
    t.next === null && (t = e.alternate.memoizedState), jn(
      e,
      t.next.queue,
      {},
      At()
    );
  }
  function os() {
    return tt(Fn);
  }
  function Gf() {
    return Ve().memoizedState;
  }
  function Vf() {
    return Ve().memoizedState;
  }
  function H1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = At();
          e = Al(l);
          var a = _l(t, e, l);
          a !== null && (ht(a, t, l), _n(a, t, l)), t = { cache: qr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function q1(e, t, l) {
    var a = At();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(e) ? Qf(t, l) : (l = _r(e, t, l, a), l !== null && (ht(l, e, a), Zf(l, t, a)));
  }
  function kf(e, t, l) {
    var a = At();
    jn(e, t, l, a);
  }
  function jn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pi(e)) Qf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, h = u(f, l);
          if (n.hasEagerState = !0, n.eagerState = h, Et(h, f))
            return ji(e, t, n, 0), ze === null && Mi(), !1;
        } catch {
        }
      if (l = _r(e, t, n, a), l !== null)
        return ht(l, e, a), Zf(l, t, a), !0;
    }
    return !1;
  }
  function fs(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Vs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(e)) {
      if (t) throw Error(o(479));
    } else
      t = _r(
        e,
        l,
        a,
        2
      ), t !== null && ht(t, e, 2);
  }
  function Pi(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function Qf(e, t) {
    qa = Zi = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Zf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, $c(e, l);
    }
  }
  var Un = {
    readContext: tt,
    use: $i,
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
  Un.useEffectEvent = He;
  var Kf = {
    readContext: tt,
    use: $i,
    useCallback: function(e, t) {
      return rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: tt,
    useEffect: Nf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Wi(
        4194308,
        4,
        Uf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Wi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Wi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = rt();
      t = t === void 0 ? null : t;
      var a = e();
      if (ua) {
        bl(!0);
        try {
          e();
        } finally {
          bl(!1);
        }
      }
      return l.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, l) {
      var a = rt();
      if (l !== void 0) {
        var n = l(t);
        if (ua) {
          bl(!0);
          try {
            l(t);
          } finally {
            bl(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: n
      }, a.queue = e, e = e.dispatch = q1.bind(
        null,
        ue,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = rt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = ns(e);
      var t = e.queue, l = kf.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var l = rt();
      return ss(l, e, t);
    },
    useTransition: function() {
      var e = ns(!1);
      return e = qf.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), rt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ue, n = rt();
      if (pe) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), ze === null)
          throw Error(o(349));
        (ye & 127) !== 0 || hf(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, Nf(gf.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Xa(
        9,
        { destroy: void 0 },
        yf.bind(
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
      var e = rt(), t = ze.identifierPrefix;
      if (pe) {
        var l = Zt, a = Qt;
        l = (a & ~(1 << 32 - St(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Ki++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = M1++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: os,
    useFormState: Tf,
    useActionState: Tf,
    useOptimistic: function(e) {
      var t = rt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = fs.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: ts,
    useCacheRefresh: function() {
      return rt().memoizedState = H1.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = rt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Re & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ds = {
    readContext: tt,
    use: $i,
    useCallback: Bf,
    useContext: tt,
    useEffect: us,
    useImperativeHandle: Df,
    useInsertionEffect: Mf,
    useLayoutEffect: jf,
    useMemo: Lf,
    useReducer: Fi,
    useRef: zf,
    useState: function() {
      return Fi(il);
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var l = Ve();
      return Hf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fi(il)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Mn(e),
        t
      ];
    },
    useSyncExternalStore: mf,
    useId: Gf,
    useHostTransitionStatus: os,
    useFormState: Cf,
    useActionState: Cf,
    useOptimistic: function(e, t) {
      var l = Ve();
      return bf(l, Ce, e, t);
    },
    useMemoCache: ts,
    useCacheRefresh: Vf
  };
  ds.useEffectEvent = Of;
  var Jf = {
    readContext: tt,
    use: $i,
    useCallback: Bf,
    useContext: tt,
    useEffect: us,
    useImperativeHandle: Df,
    useInsertionEffect: Mf,
    useLayoutEffect: jf,
    useMemo: Lf,
    useReducer: as,
    useRef: zf,
    useState: function() {
      return as(il);
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var l = Ve();
      return Ce === null ? ss(l, e, t) : Hf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = as(il)[0], t = Ve().memoizedState;
      return [
        typeof e == "boolean" ? e : Mn(e),
        t
      ];
    },
    useSyncExternalStore: mf,
    useId: Gf,
    useHostTransitionStatus: os,
    useFormState: _f,
    useActionState: _f,
    useOptimistic: function(e, t) {
      var l = Ve();
      return Ce !== null ? bf(l, Ce, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: ts,
    useCacheRefresh: Vf
  };
  Jf.useEffectEvent = Of;
  function ms(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : z({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var hs = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = At(), n = Al(a);
      n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (ht(t, e, a), _n(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = At(), n = Al(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (ht(t, e, a), _n(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = At(), a = Al(l);
      a.tag = 2, t != null && (a.callback = t), t = _l(e, a, l), t !== null && (ht(t, e, l), _n(t, e, l));
    }
  };
  function $f(e, t, l, a, n, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Sn(l, a) || !Sn(n, u) : !0;
  }
  function Ff(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && hs.enqueueReplaceState(t, t.state, null);
  }
  function ra(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t)
        a !== "ref" && (l[a] = t[a]);
    }
    if (e = e.defaultProps) {
      l === t && (l = z({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Wf(e) {
    Oi(e);
  }
  function If(e) {
    console.error(e);
  }
  function Pf(e) {
    Oi(e);
  }
  function eu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ed(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function ys(e, t, l) {
    return l = Al(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      eu(e, t);
    }, l;
  }
  function td(e) {
    return e = Al(e), e.tag = 3, e;
  }
  function ld(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        ed(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      ed(t, l, a), typeof n != "function" && (Ul === null ? Ul = /* @__PURE__ */ new Set([this]) : Ul.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Y1(e, t, l, a, n) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && ja(
        t,
        l,
        n,
        !0
      ), l = Rt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Dt === null ? du() : l.alternate === null && qe === 0 && (qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === Xi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ys(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === Xi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), Ys(e, a, n)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Ys(e, a, n), du(), !1;
    }
    if (pe)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Ur && (e = Error(o(422), { cause: a }), Rn(Ot(e, l)))) : (a !== Ur && (t = Error(o(423), {
        cause: a
      }), Rn(
        Ot(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Ot(a, l), n = ys(
        e.stateNode,
        a,
        n
      ), Qr(e, n), qe !== 4 && (qe = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Ot(u, l), Gn === null ? Gn = [u] : Gn.push(u), qe !== 4 && (qe = 2), t === null) return !0;
    a = Ot(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = ys(l.stateNode, a, e), Qr(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ul === null || !Ul.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = td(n), ld(
              n,
              e,
              l,
              a
            ), Qr(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var gs = Error(o(461)), Ze = !1;
  function lt(e, t, l, a) {
    t.child = e === null ? uf(t, null, l, a) : ia(
      t,
      e.child,
      l,
      a
    );
  }
  function ad(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a)
        h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return ta(t), a = Wr(
      e,
      t,
      l,
      f,
      u,
      n
    ), h = Ir(), e !== null && !Ze ? (Pr(e, t, n), ul(e, t, n)) : (pe && h && Mr(t), t.flags |= 1, lt(e, t, a, n), t.child);
  }
  function nd(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !zr(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, id(
        e,
        t,
        u,
        a,
        n
      )) : (e = Di(
        l.type,
        null,
        a,
        t,
        t.mode,
        n
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ws(e, n)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Sn, l(f, a) && e.ref === t.ref)
        return ul(e, t, n);
    }
    return t.flags |= 1, e = el(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function id(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Sn(u, a) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = a = u, ws(e, n))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else
          return t.lanes = e.lanes, ul(e, t, n);
    }
    return ps(
      e,
      t,
      l,
      a,
      n
    );
  }
  function ud(e, t, l, a) {
    var n = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | l : l, e !== null) {
          for (a = t.child = e.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return rd(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && qi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? cf(t, u) : Kr(), of(t);
      else
        return a = t.lanes = 536870912, rd(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (qi(t, u.cachePool), cf(t, u), Nl(), t.memoizedState = null) : (e !== null && qi(t, null), Kr(), Nl());
    return lt(e, t, n, l), t.child;
  }
  function Dn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rd(e, t, l, a, n) {
    var u = Xr();
    return u = u === null ? null : { parent: ke._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && qi(t, null), Kr(), of(t), e !== null && ja(e, t, a, !0), t.childLanes = n, null;
  }
  function tu(e, t) {
    return t = au(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function sd(e, t, l) {
    return ia(t, e.child, null, l), e = tu(t, t.pendingProps), e.flags |= 2, wt(t), t.memoizedState = null, e;
  }
  function X1(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (pe) {
        if (a.mode === "hidden")
          return e = tu(t, a), t.lanes = 536870912, Dn(null, e);
        if ($r(t), (e = Me) ? (e = S0(
          e,
          Ut
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: xl !== null ? { id: Qt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ko(e), l.return = t, t.child = l, et = t, Me = null)) : e = null, e === null) throw wl(t);
        return t.lanes = 536870912, null;
      }
      return tu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if ($r(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = sd(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Ze || ja(e, t, l, !1), n = (l & e.childLanes) !== 0, Ze || n) {
        if (a = ze, a !== null && (f = Fc(a, l), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, Wl(e, f), ht(a, e, f), gs;
        du(), t = sd(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Me = Bt(f.nextSibling), et = t, pe = !0, Rl = null, Ut = !1, e !== null && Ko(t, e), t = tu(t, a), t.flags |= 4096;
      return t;
    }
    return e = el(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function lu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function ps(e, t, l, a, n) {
    return ta(t), l = Wr(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Ir(), e !== null && !Ze ? (Pr(e, t, n), ul(e, t, n)) : (pe && a && Mr(t), t.flags |= 1, lt(e, t, l, n), t.child);
  }
  function cd(e, t, l, a, n, u) {
    return ta(t), t.updateQueue = null, l = df(
      t,
      a,
      l,
      n
    ), ff(e), a = Ir(), e !== null && !Ze ? (Pr(e, t, u), ul(e, t, u)) : (pe && a && Mr(t), t.flags |= 1, lt(e, t, l, u), t.child);
  }
  function od(e, t, l, a, n) {
    if (ta(t), t.stateNode === null) {
      var u = za, f = l.contextType;
      typeof f == "object" && f !== null && (u = tt(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = hs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Vr(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? tt(f) : za, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ms(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && hs.enqueueReplaceState(u, u.state, null), Nn(t, a, u, n), zn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps, S = ra(l, h);
      u.props = S;
      var _ = u.context, D = l.contextType;
      f = za, typeof D == "object" && D !== null && (f = tt(D));
      var q = l.getDerivedStateFromProps;
      D = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || _ !== f) && Ff(
        t,
        u,
        a,
        f
      ), Cl = !1;
      var N = t.memoizedState;
      u.state = N, Nn(t, a, u, n), zn(), _ = t.memoizedState, h || N !== _ || Cl ? (typeof q == "function" && (ms(
        t,
        l,
        q,
        a
      ), _ = t.memoizedState), (S = Cl || $f(
        t,
        l,
        S,
        a,
        N,
        _,
        f
      )) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = S) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, kr(e, t), f = t.memoizedProps, D = ra(l, f), u.props = D, q = t.pendingProps, N = u.context, _ = l.contextType, S = za, typeof _ == "object" && _ !== null && (S = tt(_)), h = l.getDerivedStateFromProps, (_ = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== q || N !== S) && Ff(
        t,
        u,
        a,
        S
      ), Cl = !1, N = t.memoizedState, u.state = N, Nn(t, a, u, n), zn();
      var M = t.memoizedState;
      f !== q || N !== M || Cl || e !== null && e.dependencies !== null && Li(e.dependencies) ? (typeof h == "function" && (ms(
        t,
        l,
        h,
        a
      ), M = t.memoizedState), (D = Cl || $f(
        t,
        l,
        D,
        a,
        N,
        M,
        S
      ) || e !== null && e.dependencies !== null && Li(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        S
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = S, a = D) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && N === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && N === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, lu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ia(
      t,
      e.child,
      null,
      n
    ), t.child = ia(
      t,
      null,
      l,
      n
    )) : lt(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = ul(
      e,
      t,
      n
    ), e;
  }
  function fd(e, t, l, a) {
    return Pl(), t.flags |= 256, lt(e, t, l, a), t.child;
  }
  var vs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function bs(e) {
    return { baseLanes: e, cachePool: Po() };
  }
  function Ss(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ct), e;
  }
  function dd(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0), f && (n = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (pe) {
        if (n ? zl(t) : Nl(), (e = Me) ? (e = S0(
          e,
          Ut
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: xl !== null ? { id: Qt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = ko(e), l.return = t, t.child = l, et = t, Me = null)) : e = null, e === null) throw wl(t);
        return lc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = a.children;
      return a = a.fallback, n ? (Nl(), n = t.mode, h = au(
        { mode: "hidden", children: h },
        n
      ), a = Il(
        a,
        n,
        l,
        null
      ), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = bs(l), a.childLanes = Ss(
        e,
        f,
        l
      ), t.memoizedState = vs, Dn(null, a)) : (zl(t), Es(t, h));
    }
    var S = e.memoizedState;
    if (S !== null && (h = S.dehydrated, h !== null)) {
      if (u)
        t.flags & 256 ? (zl(t), t.flags &= -257, t = xs(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Nl(), t.child = e.child, t.flags |= 128, t = null) : (Nl(), h = a.fallback, n = t.mode, a = au(
          { mode: "visible", children: a.children },
          n
        ), h = Il(
          h,
          n,
          l,
          null
        ), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, ia(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = bs(l), a.childLanes = Ss(
          e,
          f,
          l
        ), t.memoizedState = vs, t = Dn(null, a));
      else if (zl(t), lc(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(o(419)), a.stack = "", a.digest = f, Rn({ value: a, source: null, stack: null }), t = xs(
          e,
          t,
          l
        );
      } else if (Ze || ja(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
        if (f = ze, f !== null && (a = Fc(f, l), a !== 0 && a !== S.retryLane))
          throw S.retryLane = a, Wl(e, a), ht(f, e, a), gs;
        tc(h) || du(), t = xs(
          e,
          t,
          l
        );
      } else
        tc(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Me = Bt(
          h.nextSibling
        ), et = t, pe = !0, Rl = null, Ut = !1, e !== null && Ko(t, e), t = Es(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Nl(), h = a.fallback, n = t.mode, S = e.child, _ = S.sibling, a = el(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, _ !== null ? h = el(
      _,
      h
    ) : (h = Il(
      h,
      n,
      l,
      null
    ), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, Dn(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = bs(l) : (n = h.cachePool, n !== null ? (S = ke._currentValue, n = n.parent !== S ? { parent: S, pool: S } : n) : n = Po(), h = {
      baseLanes: h.baseLanes | l,
      cachePool: n
    }), a.memoizedState = h, a.childLanes = Ss(
      e,
      f,
      l
    ), t.memoizedState = vs, Dn(e.child, a)) : (zl(t), l = e.child, e = l.sibling, l = el(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Es(e, t) {
    return t = au(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function au(e, t) {
    return e = xt(22, e, null, t), e.lanes = 0, e;
  }
  function xs(e, t, l) {
    return ia(t, e.child, null, l), e = Es(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function md(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Lr(e.return, t, l);
  }
  function Rs(e, t, l, a, n, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: l,
      tailMode: n,
      treeForkCount: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = l, f.tailMode = n, f.treeForkCount = u);
  }
  function hd(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Ge.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Ge, f), lt(e, t, a, l), a = pe ? xn : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && md(e, l, t);
        else if (e.tag === 19)
          md(e, l, t);
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
    switch (n) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          e = l.alternate, e !== null && Qi(e) === null && (n = l), l = l.sibling;
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Rs(
          t,
          !1,
          n,
          l,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (e = n.alternate, e !== null && Qi(e) === null) {
            t.child = n;
            break;
          }
          e = n.sibling, n.sibling = l, l = n, n = e;
        }
        Rs(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Rs(
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
  function ul(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), jl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (ja(
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
      for (e = t.child, l = el(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = el(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function ws(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Li(e)));
  }
  function G1(e, t, l) {
    switch (t.tag) {
      case 3:
        nt(t, t.stateNode.containerInfo), Tl(t, ke, e.memoizedState.cache), Pl();
        break;
      case 27:
      case 5:
        kl(t);
        break;
      case 4:
        nt(t, t.stateNode.containerInfo);
        break;
      case 10:
        Tl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, $r(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (zl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? dd(e, t, l) : (zl(t), e = ul(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        zl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (ja(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), n) {
          if (a)
            return hd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), V(Ge, Ge.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, ud(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Tl(t, ke, e.memoizedState.cache);
    }
    return ul(e, t, l);
  }
  function yd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!ws(e, l) && (t.flags & 128) === 0)
          return Ze = !1, G1(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, pe && (t.flags & 1048576) !== 0 && Zo(t, xn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = aa(t.elementType), t.type = e, typeof e == "function")
            zr(e) ? (a = ra(e, a), t.tag = 1, t = od(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = ps(
              null,
              t,
              e,
              a,
              l
            ));
          else {
            if (e != null) {
              var n = e.$$typeof;
              if (n === le) {
                t.tag = 11, t = ad(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === $) {
                t.tag = 14, t = nd(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = Xe(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return ps(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, n = ra(
          a,
          t.pendingProps
        ), od(
          e,
          t,
          a,
          n,
          l
        );
      case 3:
        e: {
          if (nt(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, kr(e, t), Nn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, Tl(t, ke, a), a !== u.cache && Hr(
            t,
            [ke],
            l,
            !0
          ), zn(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = fd(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== n) {
              n = Ot(
                Error(o(424)),
                t
              ), Rn(n), t = fd(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Bt(e.firstChild), et = t, pe = !0, Rl = null, Ut = !0, l = uf(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Pl(), a === n) {
              t = ul(
                e,
                t,
                l
              );
              break e;
            }
            lt(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return lu(e, t), e === null ? (l = C0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : pe || (l = t.type, e = t.pendingProps, a = bu(
          ae.current
        ).createElement(l), a[Pe] = t, a[st] = e, at(a, l, e), Fe(a), t.stateNode = a) : t.memoizedState = C0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return kl(t), e === null && pe && (a = t.stateNode = R0(
          t.type,
          t.pendingProps,
          ae.current
        ), et = t, Ut = !0, n = Me, Hl(t.type) ? (ac = n, Me = Bt(a.firstChild)) : Me = n), lt(
          e,
          t,
          t.pendingProps.children,
          l
        ), lu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && pe && ((n = a = Me) && (a = vy(
          a,
          t.type,
          t.pendingProps,
          Ut
        ), a !== null ? (t.stateNode = a, et = t, Me = Bt(a.firstChild), Ut = !1, n = !0) : n = !1), n || wl(t)), kl(t), n = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Is(n, u) ? a = null : f !== null && Is(n, f) && (t.flags |= 32), t.memoizedState !== null && (n = Wr(
          e,
          t,
          j1,
          null,
          null,
          l
        ), Fn._currentValue = n), lu(e, t), lt(e, t, a, l), t.child;
      case 6:
        return e === null && pe && ((e = l = Me) && (l = by(
          l,
          t.pendingProps,
          Ut
        ), l !== null ? (t.stateNode = l, et = t, Me = null, e = !0) : e = !1), e || wl(t)), null;
      case 13:
        return dd(e, t, l);
      case 4:
        return nt(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ia(
          t,
          null,
          a,
          l
        ) : lt(e, t, a, l), t.child;
      case 11:
        return ad(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return lt(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return lt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return lt(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, Tl(t, t.type, a.value), lt(e, t, a.children, l), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, ta(t), n = tt(n), a = a(n), t.flags |= 1, lt(e, t, a, l), t.child;
      case 14:
        return nd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return id(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return hd(e, t, l);
      case 31:
        return X1(e, t, l);
      case 22:
        return ud(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return ta(t), a = tt(ke), e === null ? (n = Xr(), n === null && (n = ze, u = qr(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Vr(t), Tl(t, ke, n)) : ((e.lanes & l) !== 0 && (kr(e, t), Nn(t, null, null, l), zn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Tl(t, ke, a)) : (a = u.cache, Tl(t, ke, a), a !== n.cache && Hr(
          t,
          [ke],
          l,
          !0
        ))), lt(
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
  function rl(e) {
    e.flags |= 4;
  }
  function Ts(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Gd()) e.flags |= 8192;
        else
          throw na = Xi, Gr;
    } else e.flags &= -16777217;
  }
  function gd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !O0(t))
      if (Gd()) e.flags |= 8192;
      else
        throw na = Xi, Gr;
  }
  function nu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Kc() : 536870912, e.lanes |= t, Qa |= t);
  }
  function Bn(e, t) {
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
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function je(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
    else
      for (n = e.child; n !== null; )
        l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
    return e.subtreeFlags |= a, e.childLanes = l, t;
  }
  function V1(e, t, l) {
    var a = t.pendingProps;
    switch (jr(t), t.tag) {
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
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), al(ke), Be(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ma(t) ? rl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dr())), je(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (rl(t), u !== null ? (je(t), gd(t, u)) : (je(t), Ts(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (rl(t), je(t), gd(t, u)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && rl(t), je(t), Ts(
          t,
          n,
          e,
          a,
          l
        )), null;
      case 27:
        if (ya(t), l = ae.current, n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && rl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return je(t), null;
          }
          e = Y.current, Ma(t) ? Jo(t) : (e = R0(n, a, l), t.stateNode = e, rl(t));
        }
        return je(t), null;
      case 5:
        if (ya(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && rl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return je(t), null;
          }
          if (u = Y.current, Ma(t))
            Jo(t);
          else {
            var f = bu(
              ae.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
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
                    u = typeof a.is == "string" ? f.createElement(n, { is: a.is }) : f.createElement(n);
                }
            }
            u[Pe] = t, u[st] = a;
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
            e: switch (at(u, n, a), n) {
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
            a && rl(t);
          }
        }
        return je(t), Ts(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && rl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ae.current, Ma(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, n = et, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            e[Pe] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || d0(e.nodeValue, l)), e || wl(t, !0);
          } else
            e = bu(e).createTextNode(
              a
            ), e[Pe] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Ma(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Pe] = t;
            } else
              Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            l = Dr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (wt(t), t) : (wt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (n = Ma(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[Pe] = t;
            } else
              Pl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), n = !1;
          } else
            n = Dr(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (wt(t), t) : (wt(t), null);
        }
        return wt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), nu(t, t.updateQueue), je(t), null);
      case 4:
        return Be(), e === null && Ks(t.stateNode.containerInfo), je(t), null;
      case 10:
        return al(t.type), je(t), null;
      case 19:
        if (L(Ge), a = t.memoizedState, a === null) return je(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Bn(a, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Qi(e), u !== null) {
                  for (t.flags |= 128, Bn(a, !1), e = u.updateQueue, t.updateQueue = e, nu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Vo(l, e), l = l.sibling;
                  return V(
                    Ge,
                    Ge.current & 1 | 2
                  ), pe && tl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && vt() > cu && (t.flags |= 128, n = !0, Bn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (e = Qi(u), e !== null) {
              if (t.flags |= 128, n = !0, e = e.updateQueue, t.updateQueue = e, nu(t, e), Bn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !pe)
                return je(t), null;
            } else
              2 * vt() - a.renderingStartTime > cu && l !== 536870912 && (t.flags |= 128, n = !0, Bn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = vt(), e.sibling = null, l = Ge.current, V(
          Ge,
          n ? l & 1 | 2 : l & 1
        ), pe && tl(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return wt(t), Jr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && nu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && L(la), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), al(ke), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function k1(e, t) {
    switch (jr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return al(ke), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return ya(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (wt(t), t.alternate === null)
            throw Error(o(340));
          Pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (wt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Pl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return L(Ge), null;
      case 4:
        return Be(), null;
      case 10:
        return al(t.type), null;
      case 22:
      case 23:
        return wt(t), Jr(), e !== null && L(la), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return al(ke), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pd(e, t) {
    switch (jr(t), t.tag) {
      case 3:
        al(ke), Be();
        break;
      case 26:
      case 27:
      case 5:
        ya(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && wt(t);
        break;
      case 13:
        wt(t);
        break;
      case 19:
        L(Ge);
        break;
      case 10:
        al(t.type);
        break;
      case 22:
      case 23:
        wt(t), Jr(), e !== null && L(la);
        break;
      case 24:
        al(ke);
    }
  }
  function Ln(e, t) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var u = l.create, f = l.inst;
            a = u(), f.destroy = a;
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (h) {
      Te(t, t.return, h);
    }
  }
  function Ol(e, t, l) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst, h = f.destroy;
            if (h !== void 0) {
              f.destroy = void 0, n = t;
              var S = l, _ = h;
              try {
                _();
              } catch (D) {
                Te(
                  n,
                  S,
                  D
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (D) {
      Te(t, t.return, D);
    }
  }
  function vd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        sf(t, l);
      } catch (a) {
        Te(e, e.return, a);
      }
    }
  }
  function bd(e, t, l) {
    l.props = ra(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Te(e, t, a);
    }
  }
  function Hn(e, t) {
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
    } catch (n) {
      Te(e, t, n);
    }
  }
  function Kt(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Te(e, t, n);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Te(e, t, n);
        }
      else l.current = null;
  }
  function Sd(e) {
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
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function Cs(e, t, l) {
    try {
      var a = e.stateNode;
      dy(a, e.type, l, t), a[st] = t;
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function Ed(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hl(e.type) || e.tag === 4;
  }
  function As(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ed(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function _s(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = It));
    else if (a !== 4 && (a === 27 && Hl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (_s(e, t, l), e = e.sibling; e !== null; )
        _s(e, t, l), e = e.sibling;
  }
  function iu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Hl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (iu(e, t, l), e = e.sibling; e !== null; )
        iu(e, t, l), e = e.sibling;
  }
  function xd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      at(t, a, l), t[Pe] = e, t[st] = l;
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var sl = !1, Ke = !1, zs = !1, Rd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Q1(e, t) {
    if (e = e.containerInfo, Fs = Cu, e = Uo(e), xr(e)) {
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
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, h = -1, S = -1, _ = 0, D = 0, q = e, N = null;
            t: for (; ; ) {
              for (var M; q !== l || n !== 0 && q.nodeType !== 3 || (h = f + n), q !== u || a !== 0 && q.nodeType !== 3 || (S = f + a), q.nodeType === 3 && (f += q.nodeValue.length), (M = q.firstChild) !== null; )
                N = q, q = M;
              for (; ; ) {
                if (q === e) break t;
                if (N === l && ++_ === n && (h = f), N === u && ++D === a && (S = f), (M = q.nextSibling) !== null) break;
                q = N, N = q.parentNode;
              }
              q = M;
            }
            l = h === -1 || S === -1 ? null : { start: h, end: S };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Ws = { focusedElem: e, selectionRange: l }, Cu = !1, We = t; We !== null; )
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, We = e;
      else
        for (; We !== null; ) {
          switch (t = We, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  n = e[l], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
                try {
                  var J = ra(
                    l.type,
                    n
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Te(
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
                  ec(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      ec(e);
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
  function wd(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ol(e, l), a & 4 && Ln(5, l);
        break;
      case 1:
        if (ol(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Te(l, l.return, f);
            }
          else {
            var n = ra(
              l.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                n,
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
        a & 64 && vd(l), a & 512 && Hn(l, l.return);
        break;
      case 3:
        if (ol(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            sf(e, t);
          } catch (f) {
            Te(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && xd(l);
      case 26:
      case 5:
        ol(e, l), t === null && a & 4 && Sd(l), a & 512 && Hn(l, l.return);
        break;
      case 12:
        ol(e, l);
        break;
      case 31:
        ol(e, l), a & 4 && Ad(e, l);
        break;
      case 13:
        ol(e, l), a & 4 && _d(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = ey.bind(
          null,
          l
        ), Sy(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || sl, !a) {
          t = t !== null && t.memoizedState !== null || Ke, n = sl;
          var u = Ke;
          sl = a, (Ke = t) && !u ? fl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : ol(e, l), sl = n, Ke = u;
        }
        break;
      case 30:
        break;
      default:
        ol(e, l);
    }
  }
  function Td(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Td(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && ir(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, ot = !1;
  function cl(e, t, l) {
    for (l = l.child; l !== null; )
      Cd(e, t, l), l = l.sibling;
  }
  function Cd(e, t, l) {
    if (bt && typeof bt.onCommitFiberUnmount == "function")
      try {
        bt.onCommitFiberUnmount(sn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        Ke || Kt(l, t), cl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        Ke || Kt(l, t);
        var a = Ue, n = ot;
        Hl(l.type) && (Ue = l.stateNode, ot = !1), cl(
          e,
          t,
          l
        ), Kn(l.stateNode), Ue = a, ot = n;
        break;
      case 5:
        Ke || Kt(l, t);
      case 6:
        if (a = Ue, n = ot, Ue = null, cl(
          e,
          t,
          l
        ), Ue = a, ot = n, Ue !== null)
          if (ot)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
            } catch (u) {
              Te(
                l,
                t,
                u
              );
            }
          else
            try {
              Ue.removeChild(l.stateNode);
            } catch (u) {
              Te(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Ue !== null && (ot ? (e = Ue, v0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Pa(e)) : v0(Ue, l.stateNode));
        break;
      case 4:
        a = Ue, n = ot, Ue = l.stateNode.containerInfo, ot = !0, cl(
          e,
          t,
          l
        ), Ue = a, ot = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, t), Ke || Ol(4, l, t), cl(
          e,
          t,
          l
        );
        break;
      case 1:
        Ke || (Kt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && bd(
          l,
          t,
          a
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
        Ke = (a = Ke) || l.memoizedState !== null, cl(
          e,
          t,
          l
        ), Ke = a;
        break;
      default:
        cl(
          e,
          t,
          l
        );
    }
  }
  function Ad(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Pa(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function _d(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Pa(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function Z1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Rd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Rd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function uu(e, t) {
    var l = Z1(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = ty.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ft(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Hl(h.type)) {
                Ue = h.stateNode, ot = !1;
                break e;
              }
              break;
            case 5:
              Ue = h.stateNode, ot = !1;
              break e;
            case 3:
            case 4:
              Ue = h.stateNode.containerInfo, ot = !0;
              break e;
          }
          h = h.return;
        }
        if (Ue === null) throw Error(o(160));
        Cd(u, f, n), Ue = null, ot = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        zd(t, e), t = t.sibling;
  }
  var Xt = null;
  function zd(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ft(t, e), dt(e), a & 4 && (Ol(3, e, e.return), Ln(3, e), Ol(5, e, e.return));
        break;
      case 1:
        ft(t, e), dt(e), a & 512 && (Ke || l === null || Kt(l, l.return)), a & 64 && sl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var n = Xt;
        if (ft(t, e), dt(e), a & 512 && (Ke || l === null || Kt(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[fn] || u[Pe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), at(u, a, l), u[Pe] = e, Fe(u), a = u;
                      break e;
                    case "link":
                      var f = z0(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (u = f[h], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), at(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = z0(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (h = 0; h < f.length; h++)
                          if (u = f[h], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), at(u, a, l), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[Pe] = e, Fe(u), a = u;
                }
                e.stateNode = a;
              } else
                N0(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = _0(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? N0(
              n,
              e.type,
              e.stateNode
            ) : _0(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Cs(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ft(t, e), dt(e), a & 512 && (Ke || l === null || Kt(l, l.return)), l !== null && a & 4 && Cs(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (ft(t, e), dt(e), a & 512 && (Ke || l === null || Kt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            xa(n, "");
          } catch (J) {
            Te(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (n = e.memoizedProps, Cs(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (zs = !0);
        break;
      case 6:
        if (ft(t, e), dt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (J) {
            Te(e, e.return, J);
          }
        }
        break;
      case 3:
        if (xu = null, n = Xt, Xt = Su(t.containerInfo), ft(t, e), Xt = n, dt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Pa(t.containerInfo);
          } catch (J) {
            Te(e, e.return, J);
          }
        zs && (zs = !1, Nd(e));
        break;
      case 4:
        a = Xt, Xt = Su(
          e.stateNode.containerInfo
        ), ft(t, e), dt(e), Xt = a;
        break;
      case 12:
        ft(t, e), dt(e);
        break;
      case 31:
        ft(t, e), dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, uu(e, a)));
        break;
      case 13:
        ft(t, e), dt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (su = vt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, uu(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var S = l !== null && l.memoizedState !== null, _ = sl, D = Ke;
        if (sl = _ || n, Ke = D || S, ft(t, e), Ke = D, sl = _, dt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || S || sl || Ke || sa(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                S = l = t;
                try {
                  if (u = S.stateNode, n)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    h = S.stateNode;
                    var q = S.memoizedProps.style, N = q != null && q.hasOwnProperty("display") ? q.display : null;
                    h.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim();
                  }
                } catch (J) {
                  Te(S, S.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = n ? "" : S.memoizedProps;
                } catch (J) {
                  Te(S, S.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                S = t;
                try {
                  var M = S.stateNode;
                  n ? b0(M, !0) : b0(S.stateNode, !1);
                } catch (J) {
                  Te(S, S.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, uu(e, l))));
        break;
      case 19:
        ft(t, e), dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, uu(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ft(t, e), dt(e);
    }
  }
  function dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Ed(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = As(e);
            iu(e, u, n);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (xa(f, ""), l.flags &= -33);
            var h = As(e);
            iu(e, h, f);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo, _ = As(e);
            _s(
              e,
              _,
              S
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (D) {
        Te(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Nd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Nd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ol(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        wd(e, t.alternate, t), t = t.sibling;
  }
  function sa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, t, t.return), sa(t);
          break;
        case 1:
          Kt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && bd(
            t,
            t.return,
            l
          ), sa(t);
          break;
        case 27:
          Kn(t.stateNode);
        case 26:
        case 5:
          Kt(t, t.return), sa(t);
          break;
        case 22:
          t.memoizedState === null && sa(t);
          break;
        case 30:
          sa(t);
          break;
        default:
          sa(t);
      }
      e = e.sibling;
    }
  }
  function fl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          fl(
            n,
            u,
            l
          ), Ln(4, u);
          break;
        case 1:
          if (fl(
            n,
            u,
            l
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (_) {
              Te(a, a.return, _);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var h = a.stateNode;
            try {
              var S = n.shared.hiddenCallbacks;
              if (S !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < S.length; n++)
                  rf(S[n], h);
            } catch (_) {
              Te(a, a.return, _);
            }
          }
          l && f & 64 && vd(u), Hn(u, u.return);
          break;
        case 27:
          xd(u);
        case 26:
        case 5:
          fl(
            n,
            u,
            l
          ), l && a === null && f & 4 && Sd(u), Hn(u, u.return);
          break;
        case 12:
          fl(
            n,
            u,
            l
          );
          break;
        case 31:
          fl(
            n,
            u,
            l
          ), l && f & 4 && Ad(n, u);
          break;
        case 13:
          fl(
            n,
            u,
            l
          ), l && f & 4 && _d(n, u);
          break;
        case 22:
          u.memoizedState === null && fl(
            n,
            u,
            l
          ), Hn(u, u.return);
          break;
        case 30:
          break;
        default:
          fl(
            n,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ns(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && wn(l));
  }
  function Os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wn(e));
  }
  function Gt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Od(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function Od(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Gt(
          e,
          t,
          l,
          a
        ), n & 2048 && Ln(9, t);
        break;
      case 1:
        Gt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Gt(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wn(e)));
        break;
      case 12:
        if (n & 2048) {
          Gt(
            e,
            t,
            l,
            a
          ), e = t.stateNode;
          try {
            var u = t.memoizedProps, f = u.id, h = u.onPostCommit;
            typeof h == "function" && h(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (S) {
            Te(t, t.return, S);
          }
        } else
          Gt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Gt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Gt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Gt(
          e,
          t,
          l,
          a
        ) : qn(e, t) : u._visibility & 2 ? Gt(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, Ga(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && Ns(f, t);
        break;
      case 24:
        Gt(
          e,
          t,
          l,
          a
        ), n & 2048 && Os(t.alternate, t);
        break;
      default:
        Gt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Ga(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, h = l, S = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ga(
            u,
            f,
            h,
            S,
            n
          ), Ln(8, f);
          break;
        case 23:
          break;
        case 22:
          var D = f.stateNode;
          f.memoizedState !== null ? D._visibility & 2 ? Ga(
            u,
            f,
            h,
            S,
            n
          ) : qn(
            u,
            f
          ) : (D._visibility |= 2, Ga(
            u,
            f,
            h,
            S,
            n
          )), n && _ & 2048 && Ns(
            f.alternate,
            f
          );
          break;
        case 24:
          Ga(
            u,
            f,
            h,
            S,
            n
          ), n && _ & 2048 && Os(f.alternate, f);
          break;
        default:
          Ga(
            u,
            f,
            h,
            S,
            n
          );
      }
      t = t.sibling;
    }
  }
  function qn(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            qn(l, a), n & 2048 && Ns(
              a.alternate,
              a
            );
            break;
          case 24:
            qn(l, a), n & 2048 && Os(a.alternate, a);
            break;
          default:
            qn(l, a);
        }
        t = t.sibling;
      }
  }
  var Yn = 8192;
  function Va(e, t, l) {
    if (e.subtreeFlags & Yn)
      for (e = e.child; e !== null; )
        Md(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Md(e, t, l) {
    switch (e.tag) {
      case 26:
        Va(
          e,
          t,
          l
        ), e.flags & Yn && e.memoizedState !== null && My(
          l,
          Xt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Va(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Xt;
        Xt = Su(e.stateNode.containerInfo), Va(
          e,
          t,
          l
        ), Xt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Yn, Yn = 16777216, Va(
          e,
          t,
          l
        ), Yn = a) : Va(
          e,
          t,
          l
        ));
        break;
      default:
        Va(
          e,
          t,
          l
        );
    }
  }
  function jd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Xn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          We = a, Dd(
            a,
            e
          );
        }
      jd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Ud(e), e = e.sibling;
  }
  function Ud(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xn(e), e.flags & 2048 && Ol(9, e, e.return);
        break;
      case 3:
        Xn(e);
        break;
      case 12:
        Xn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ru(e)) : Xn(e);
        break;
      default:
        Xn(e);
    }
  }
  function ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          We = a, Dd(
            a,
            e
          );
        }
      jd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, t, t.return), ru(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ru(t));
          break;
        default:
          ru(t);
      }
      e = e.sibling;
    }
  }
  function Dd(e, t) {
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
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          wn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, We = a;
      else
        e: for (l = e; We !== null; ) {
          a = We;
          var n = a.sibling, u = a.return;
          if (Td(a), a === l) {
            We = null;
            break e;
          }
          if (n !== null) {
            n.return = u, We = n;
            break e;
          }
          We = u;
        }
    }
  }
  var K1 = {
    getCacheForType: function(e) {
      var t = tt(ke), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return tt(ke).controller.signal;
    }
  }, J1 = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, ze = null, fe = null, ye = 0, we = 0, Tt = null, Ml = !1, ka = !1, Ms = !1, dl = 0, qe = 0, jl = 0, ca = 0, js = 0, Ct = 0, Qa = 0, Gn = null, mt = null, Us = !1, su = 0, Bd = 0, cu = 1 / 0, ou = null, Ul = null, Je = 0, Dl = null, Za = null, ml = 0, Ds = 0, Bs = null, Ld = null, Vn = 0, Ls = null;
  function At() {
    return (Re & 2) !== 0 && ye !== 0 ? ye & -ye : X.T !== null ? Vs() : Wc();
  }
  function Hd() {
    if (Ct === 0)
      if ((ye & 536870912) === 0 || pe) {
        var e = vi;
        vi <<= 1, (vi & 3932160) === 0 && (vi = 262144), Ct = e;
      } else Ct = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), Ct;
  }
  function ht(e, t, l) {
    (e === ze && (we === 2 || we === 9) || e.cancelPendingCommit !== null) && (Ka(e, 0), Bl(
      e,
      ye,
      Ct,
      !1
    )), on(e, l), ((Re & 2) === 0 || e !== ze) && (e === ze && ((Re & 2) === 0 && (ca |= l), qe === 4 && Bl(
      e,
      ye,
      Ct,
      !1
    )), Jt(e));
  }
  function qd(e, t, l) {
    if ((Re & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || cn(e, t), n = a ? W1(e, t) : qs(e, t, !0), u = a;
    do {
      if (n === 0) {
        ka && !a && Bl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !$1(l)) {
          n = qs(e, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var h = e;
              n = Gn;
              var S = h.current.memoizedState.isDehydrated;
              if (S && (Ka(h, f).flags |= 256), f = qs(
                h,
                f,
                !1
              ), f !== 2) {
                if (Ms && !S) {
                  h.errorRecoveryDisabledLanes |= u, ca |= u, n = 4;
                  break e;
                }
                u = mt, mt = n, u !== null && (mt === null ? mt = u : mt.push.apply(
                  mt,
                  u
                ));
              }
              n = f;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ka(e, 0), Bl(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = n, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Bl(
                a,
                t,
                Ct,
                !Ml
              );
              break e;
            case 2:
              mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = su + 300 - vt(), 10 < n)) {
            if (Bl(
              a,
              t,
              Ct,
              !Ml
            ), Si(a, 0, !0) !== 0) break e;
            ml = t, a.timeoutHandle = g0(
              Yd.bind(
                null,
                a,
                l,
                mt,
                ou,
                Us,
                t,
                Ct,
                ca,
                Qa,
                Ml,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break e;
          }
          Yd(
            a,
            l,
            mt,
            ou,
            Us,
            t,
            Ct,
            ca,
            Qa,
            Ml,
            u,
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
  function Yd(e, t, l, a, n, u, f, h, S, _, D, q, N, M) {
    if (e.timeoutHandle = -1, q = t.subtreeFlags, q & 8192 || (q & 16785408) === 16785408) {
      q = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: It
      }, Md(
        t,
        u,
        q
      );
      var J = (u & 62914560) === u ? su - vt() : (u & 4194048) === u ? Bd - vt() : 0;
      if (J = jy(
        q,
        J
      ), J !== null) {
        ml = u, e.cancelPendingCommit = J(
          Jd.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            n,
            f,
            h,
            S,
            D,
            q,
            null,
            N,
            M
          )
        ), Bl(e, u, f, !_);
        return;
      }
    }
    Jd(
      e,
      t,
      u,
      l,
      a,
      n,
      f,
      h,
      S
    );
  }
  function $1(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!Et(u(), n)) return !1;
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
  function Bl(e, t, l, a) {
    t &= ~js, t &= ~ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - St(n), f = 1 << u;
      a[u] = -1, n &= ~f;
    }
    l !== 0 && Jc(e, l, t);
  }
  function fu() {
    return (Re & 6) === 0 ? (kn(0), !1) : !0;
  }
  function Hs() {
    if (fe !== null) {
      if (we === 0)
        var e = fe.return;
      else
        e = fe, ll = ea = null, es(e), La = null, Cn = 0, e = fe;
      for (; e !== null; )
        pd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Ka(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, yy(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), ml = 0, Hs(), ze = e, fe = l = el(e.current, null), ye = t, we = 0, Tt = null, Ml = !1, ka = cn(e, t), Ms = !1, Qa = Ct = js = ca = jl = qe = 0, mt = Gn = null, Us = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - St(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return dl = t, Mi(), l;
  }
  function Xd(e, t) {
    ue = null, X.H = Un, t === Ba || t === Yi ? (t = lf(), we = 3) : t === Gr ? (t = lf(), we = 4) : we = t === gs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, fe === null && (qe = 1, eu(
      e,
      Ot(t, e.current)
    ));
  }
  function Gd() {
    var e = Rt.current;
    return e === null ? !0 : (ye & 4194048) === ye ? Dt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Dt : !1;
  }
  function Vd() {
    var e = X.H;
    return X.H = Un, e === null ? Un : e;
  }
  function kd() {
    var e = X.A;
    return X.A = K1, e;
  }
  function du() {
    qe = 4, Ml || (ye & 4194048) !== ye && Rt.current !== null || (ka = !0), (jl & 134217727) === 0 && (ca & 134217727) === 0 || ze === null || Bl(
      ze,
      ye,
      Ct,
      !1
    );
  }
  function qs(e, t, l) {
    var a = Re;
    Re |= 2;
    var n = Vd(), u = kd();
    (ze !== e || ye !== t) && (ou = null, Ka(e, t)), t = !1;
    var f = qe;
    e: do
      try {
        if (we !== 0 && fe !== null) {
          var h = fe, S = Tt;
          switch (we) {
            case 8:
              Hs(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var _ = we;
              if (we = 0, Tt = null, Ja(e, h, S, _), l && ka) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = we, we = 0, Tt = null, Ja(e, h, S, _);
          }
        }
        F1(), f = qe;
        break;
      } catch (D) {
        Xd(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ll = ea = null, Re = a, X.H = n, X.A = u, fe === null && (ze = null, ye = 0, Mi()), f;
  }
  function F1() {
    for (; fe !== null; ) Qd(fe);
  }
  function W1(e, t) {
    var l = Re;
    Re |= 2;
    var a = Vd(), n = kd();
    ze !== e || ye !== t ? (ou = null, cu = vt() + 500, Ka(e, t)) : ka = cn(
      e,
      t
    );
    e: do
      try {
        if (we !== 0 && fe !== null) {
          t = fe;
          var u = Tt;
          t: switch (we) {
            case 1:
              we = 0, Tt = null, Ja(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (ef(u)) {
                we = 0, Tt = null, Zd(t);
                break;
              }
              t = function() {
                we !== 2 && we !== 9 || ze !== e || (we = 7), Jt(e);
              }, u.then(t, t);
              break e;
            case 3:
              we = 7;
              break e;
            case 4:
              we = 5;
              break e;
            case 7:
              ef(u) ? (we = 0, Tt = null, Zd(t)) : (we = 0, Tt = null, Ja(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var h = fe;
                  if (f ? O0(f) : h.stateNode.complete) {
                    we = 0, Tt = null;
                    var S = h.sibling;
                    if (S !== null) fe = S;
                    else {
                      var _ = h.return;
                      _ !== null ? (fe = _, mu(_)) : fe = null;
                    }
                    break t;
                  }
              }
              we = 0, Tt = null, Ja(e, t, u, 5);
              break;
            case 6:
              we = 0, Tt = null, Ja(e, t, u, 6);
              break;
            case 8:
              Hs(), qe = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        I1();
        break;
      } catch (D) {
        Xd(e, D);
      }
    while (!0);
    return ll = ea = null, X.H = a, X.A = n, Re = l, fe !== null ? 0 : (ze = null, ye = 0, Mi(), qe);
  }
  function I1() {
    for (; fe !== null && !Eh(); )
      Qd(fe);
  }
  function Qd(e) {
    var t = yd(e.alternate, e, dl);
    e.memoizedProps = e.pendingProps, t === null ? mu(e) : fe = t;
  }
  function Zd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = cd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ye
        );
        break;
      case 11:
        t = cd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ye
        );
        break;
      case 5:
        es(t);
      default:
        pd(l, t), t = fe = Vo(t, dl), t = yd(l, t, dl);
    }
    e.memoizedProps = e.pendingProps, t === null ? mu(e) : fe = t;
  }
  function Ja(e, t, l, a) {
    ll = ea = null, es(t), La = null, Cn = 0;
    var n = t.return;
    try {
      if (Y1(
        e,
        n,
        t,
        l,
        ye
      )) {
        qe = 1, eu(
          e,
          Ot(l, e.current)
        ), fe = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw fe = n, u;
      qe = 1, eu(
        e,
        Ot(l, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (pe || a === 1 ? e = !0 : ka || (ye & 536870912) !== 0 ? e = !1 : (Ml = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Rt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Kd(t, e)) : mu(t);
  }
  function mu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Kd(
          t,
          Ml
        );
        return;
      }
      e = t.return;
      var l = V1(
        t.alternate,
        t,
        dl
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
  function Kd(e, t) {
    do {
      var l = k1(e.alternate, e);
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
  function Jd(e, t, l, a, n, u, f, h, S) {
    e.cancelPendingCommit = null;
    do
      hu();
    while (Je !== 0);
    if ((Re & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Ar, Oh(
        e,
        l,
        u,
        f,
        h,
        S
      ), e === ze && (fe = ze = null, ye = 0), Za = t, Dl = e, ml = l, Ds = u, Bs = n, Ld = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ly(gi, function() {
        return Pd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = X.T, X.T = null, n = k.p, k.p = 2, f = Re, Re |= 4;
        try {
          Q1(e, t, l);
        } finally {
          Re = f, k.p = n, X.T = a;
        }
      }
      Je = 1, $d(), Fd(), Wd();
    }
  }
  function $d() {
    if (Je === 1) {
      Je = 0;
      var e = Dl, t = Za, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = X.T, X.T = null;
        var a = k.p;
        k.p = 2;
        var n = Re;
        Re |= 4;
        try {
          zd(t, e);
          var u = Ws, f = Uo(e.containerInfo), h = u.focusedElem, S = u.selectionRange;
          if (f !== h && h && h.ownerDocument && jo(
            h.ownerDocument.documentElement,
            h
          )) {
            if (S !== null && xr(h)) {
              var _ = S.start, D = S.end;
              if (D === void 0 && (D = _), "selectionStart" in h)
                h.selectionStart = _, h.selectionEnd = Math.min(
                  D,
                  h.value.length
                );
              else {
                var q = h.ownerDocument || document, N = q && q.defaultView || window;
                if (N.getSelection) {
                  var M = N.getSelection(), J = h.textContent.length, ee = Math.min(S.start, J), _e = S.end === void 0 ? ee : Math.min(S.end, J);
                  !M.extend && ee > _e && (f = _e, _e = ee, ee = f);
                  var w = Mo(
                    h,
                    ee
                  ), x = Mo(
                    h,
                    _e
                  );
                  if (w && x && (M.rangeCount !== 1 || M.anchorNode !== w.node || M.anchorOffset !== w.offset || M.focusNode !== x.node || M.focusOffset !== x.offset)) {
                    var A = q.createRange();
                    A.setStart(w.node, w.offset), M.removeAllRanges(), ee > _e ? (M.addRange(A), M.extend(x.node, x.offset)) : (A.setEnd(x.node, x.offset), M.addRange(A));
                  }
                }
              }
            }
            for (q = [], M = h; M = M.parentNode; )
              M.nodeType === 1 && q.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < q.length; h++) {
              var H = q[h];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Cu = !!Fs, Ws = Fs = null;
        } finally {
          Re = n, k.p = a, X.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function Fd() {
    if (Je === 2) {
      Je = 0;
      var e = Dl, t = Za, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = X.T, X.T = null;
        var a = k.p;
        k.p = 2;
        var n = Re;
        Re |= 4;
        try {
          wd(e, t.alternate, t);
        } finally {
          Re = n, k.p = a, X.T = l;
        }
      }
      Je = 3;
    }
  }
  function Wd() {
    if (Je === 4 || Je === 3) {
      Je = 0, xh();
      var e = Dl, t = Za, l = ml, a = Ld;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Za = Dl = null, Id(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ul = null), ar(l), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function")
        try {
          bt.onCommitFiberRoot(
            sn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = X.T, n = k.p, k.p = 2, X.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          X.T = t, k.p = n;
        }
      }
      (ml & 3) !== 0 && hu(), Jt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Ls ? Vn++ : (Vn = 0, Ls = e) : Vn = 0, kn(0);
    }
  }
  function Id(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, wn(t)));
  }
  function hu() {
    return $d(), Fd(), Wd(), Pd();
  }
  function Pd() {
    if (Je !== 5) return !1;
    var e = Dl, t = Ds;
    Ds = 0;
    var l = ar(ml), a = X.T, n = k.p;
    try {
      k.p = 32 > l ? 32 : l, X.T = null, l = Bs, Bs = null;
      var u = Dl, f = ml;
      if (Je = 0, Za = Dl = null, ml = 0, (Re & 6) !== 0) throw Error(o(331));
      var h = Re;
      if (Re |= 4, Ud(u.current), Od(
        u,
        u.current,
        f,
        l
      ), Re = h, kn(0, !1), bt && typeof bt.onPostCommitFiberRoot == "function")
        try {
          bt.onPostCommitFiberRoot(sn, u);
        } catch {
        }
      return !0;
    } finally {
      k.p = n, X.T = a, Id(e, t);
    }
  }
  function e0(e, t, l) {
    t = Ot(l, t), t = ys(e.stateNode, t, 2), e = _l(e, t, 2), e !== null && (on(e, 2), Jt(e));
  }
  function Te(e, t, l) {
    if (e.tag === 3)
      e0(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          e0(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ul === null || !Ul.has(a))) {
            e = Ot(l, e), l = td(2), a = _l(t, l, 2), a !== null && (ld(
              l,
              a,
              t,
              e
            ), on(a, 2), Jt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ys(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new J1();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (Ms = !0, n.add(l), e = P1.bind(null, e, t, l), t.then(e, e));
  }
  function P1(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ze === e && (ye & l) === l && (qe === 4 || qe === 3 && (ye & 62914560) === ye && 300 > vt() - su ? (Re & 2) === 0 && Ka(e, 0) : js |= l, Qa === ye && (Qa = 0)), Jt(e);
  }
  function t0(e, t) {
    t === 0 && (t = Kc()), e = Wl(e, t), e !== null && (on(e, t), Jt(e));
  }
  function ey(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), t0(e, l);
  }
  function ty(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, n = e.memoizedState;
        n !== null && (l = n.retryLane);
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
    a !== null && a.delete(t), t0(e, l);
  }
  function ly(e, t) {
    return Pu(e, t);
  }
  var yu = null, $a = null, Xs = !1, gu = !1, Gs = !1, Ll = 0;
  function Jt(e) {
    e !== $a && e.next === null && ($a === null ? yu = $a = e : $a = $a.next = e), gu = !0, Xs || (Xs = !0, ny());
  }
  function kn(e, t) {
    if (!Gs && gu) {
      Gs = !0;
      do
        for (var l = !1, a = yu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var f = a.suspendedLanes, h = a.pingedLanes;
              u = (1 << 31 - St(42 | e) + 1) - 1, u &= n & ~(f & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, i0(a, u));
          } else
            u = ye, u = Si(
              a,
              a === ze ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || cn(a, u) || (l = !0, i0(a, u));
          a = a.next;
        }
      while (l);
      Gs = !1;
    }
  }
  function ay() {
    l0();
  }
  function l0() {
    gu = Xs = !1;
    var e = 0;
    Ll !== 0 && hy() && (e = Ll);
    for (var t = vt(), l = null, a = yu; a !== null; ) {
      var n = a.next, u = a0(a, t);
      u === 0 ? (a.next = null, l === null ? yu = n : l.next = n, n === null && ($a = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (gu = !0)), a = n;
    }
    Je !== 0 && Je !== 5 || kn(e), Ll !== 0 && (Ll = 0);
  }
  function a0(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - St(u), h = 1 << f, S = n[f];
      S === -1 ? ((h & l) === 0 || (h & a) !== 0) && (n[f] = Nh(h, t)) : S <= t && (e.expiredLanes |= h), u &= ~h;
    }
    if (t = ze, l = ye, l = Si(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (we === 2 || we === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && er(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || cn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && er(a), ar(l)) {
        case 2:
        case 8:
          l = Qc;
          break;
        case 32:
          l = gi;
          break;
        case 268435456:
          l = Zc;
          break;
        default:
          l = gi;
      }
      return a = n0.bind(null, e), l = Pu(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && er(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function n0(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (hu() && e.callbackNode !== l)
      return null;
    var a = ye;
    return a = Si(
      e,
      e === ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (qd(e, a, t), a0(e, vt()), e.callbackNode != null && e.callbackNode === l ? n0.bind(null, e) : null);
  }
  function i0(e, t) {
    if (hu()) return null;
    qd(e, t, !0);
  }
  function ny() {
    gy(function() {
      (Re & 6) !== 0 ? Pu(
        kc,
        ay
      ) : l0();
    });
  }
  function Vs() {
    if (Ll === 0) {
      var e = Ua;
      e === 0 && (e = pi, pi <<= 1, (pi & 261888) === 0 && (pi = 256)), Ll = e;
    }
    return Ll;
  }
  function u0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wi("" + e);
  }
  function r0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function iy(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = u0(
        (n[st] || null).action
      ), f = a.submitter;
      f && (t = (t = f[st] || null) ? u0(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var h = new _i(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ll !== 0) {
                  var S = f ? r0(n, f) : new FormData(n);
                  cs(
                    l,
                    {
                      pending: !0,
                      data: S,
                      method: n.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (h.preventDefault(), S = f ? r0(n, f) : new FormData(n), cs(
                  l,
                  {
                    pending: !0,
                    data: S,
                    method: n.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var ks = 0; ks < Cr.length; ks++) {
    var Qs = Cr[ks], uy = Qs.toLowerCase(), ry = Qs[0].toUpperCase() + Qs.slice(1);
    Yt(
      uy,
      "on" + ry
    );
  }
  Yt(Lo, "onAnimationEnd"), Yt(Ho, "onAnimationIteration"), Yt(qo, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt(R1, "onTransitionRun"), Yt(w1, "onTransitionStart"), Yt(T1, "onTransitionCancel"), Yt(Yo, "onTransitionEnd"), Sa("onMouseEnter", ["mouseout", "mouseover"]), Sa("onMouseLeave", ["mouseout", "mouseover"]), Sa("onPointerEnter", ["pointerout", "pointerover"]), Sa("onPointerLeave", ["pointerout", "pointerover"]), Kl(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Kl(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Kl("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Kl(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Kl(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Kl(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Qn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), sy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qn)
  );
  function s0(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var h = a[f], S = h.instance, _ = h.currentTarget;
            if (h = h.listener, S !== u && n.isPropagationStopped())
              break e;
            u = h, n.currentTarget = _;
            try {
              u(n);
            } catch (D) {
              Oi(D);
            }
            n.currentTarget = null, u = S;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (h = a[f], S = h.instance, _ = h.currentTarget, h = h.listener, S !== u && n.isPropagationStopped())
              break e;
            u = h, n.currentTarget = _;
            try {
              u(n);
            } catch (D) {
              Oi(D);
            }
            n.currentTarget = null, u = S;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[nr];
    l === void 0 && (l = t[nr] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (c0(t, e, 2, !1), l.add(a));
  }
  function Zs(e, t, l) {
    var a = 0;
    t && (a |= 4), c0(
      l,
      e,
      a,
      t
    );
  }
  var pu = "_reactListening" + Math.random().toString(36).slice(2);
  function Ks(e) {
    if (!e[pu]) {
      e[pu] = !0, eo.forEach(function(l) {
        l !== "selectionchange" && (sy.has(l) || Zs(l, !1, e), Zs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pu] || (t[pu] = !0, Zs("selectionchange", !1, t));
    }
  }
  function c0(e, t, l, a) {
    switch (H0(t)) {
      case 2:
        var n = By;
        break;
      case 8:
        n = Ly;
        break;
      default:
        n = sc;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !mr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Js(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var h = a.stateNode.containerInfo;
          if (h === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (f = pa(h), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = u = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    mo(function() {
      var _ = u, D = fr(l), q = [];
      e: {
        var N = Xo.get(e);
        if (N !== void 0) {
          var M = _i, J = e;
          switch (e) {
            case "keypress":
              if (Ci(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = t1;
              break;
            case "focusin":
              J = "focus", M = pr;
              break;
            case "focusout":
              J = "blur", M = pr;
              break;
            case "beforeblur":
            case "afterblur":
              M = pr;
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
              M = go;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Vh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = n1;
              break;
            case Lo:
            case Ho:
            case qo:
              M = Zh;
              break;
            case Yo:
              M = u1;
              break;
            case "scroll":
            case "scrollend":
              M = Xh;
              break;
            case "wheel":
              M = s1;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Jh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = vo;
              break;
            case "toggle":
            case "beforetoggle":
              M = o1;
          }
          var ee = (t & 4) !== 0, _e = !ee && (e === "scroll" || e === "scrollend"), w = ee ? N !== null ? N + "Capture" : null : N;
          ee = [];
          for (var x = _, A; x !== null; ) {
            var H = x;
            if (A = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || A === null || w === null || (H = mn(x, w), H != null && ee.push(
              Zn(x, H, A)
            )), _e) break;
            x = x.return;
          }
          0 < ee.length && (N = new M(
            N,
            J,
            null,
            l,
            D
          ), q.push({ event: N, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (N = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", N && l !== or && (J = l.relatedTarget || l.fromElement) && (pa(J) || J[ga]))
            break e;
          if ((M || N) && (N = D.window === D ? D : (N = D.ownerDocument) ? N.defaultView || N.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = _, J = J ? pa(J) : null, J !== null && (_e = m(J), ee = J.tag, J !== _e || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (M = null, J = _), M !== J)) {
            if (ee = go, H = "onMouseLeave", w = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ee = vo, H = "onPointerLeave", w = "onPointerEnter", x = "pointer"), _e = M == null ? N : dn(M), A = J == null ? N : dn(J), N = new ee(
              H,
              x + "leave",
              M,
              l,
              D
            ), N.target = _e, N.relatedTarget = A, H = null, pa(D) === _ && (ee = new ee(
              w,
              x + "enter",
              J,
              l,
              D
            ), ee.target = A, ee.relatedTarget = _e, H = ee), _e = H, M && J)
              t: {
                for (ee = cy, w = M, x = J, A = 0, H = w; H; H = ee(H))
                  A++;
                H = 0;
                for (var I = x; I; I = ee(I))
                  H++;
                for (; 0 < A - H; )
                  w = ee(w), A--;
                for (; 0 < H - A; )
                  x = ee(x), H--;
                for (; A--; ) {
                  if (w === x || x !== null && w === x.alternate) {
                    ee = w;
                    break t;
                  }
                  w = ee(w), x = ee(x);
                }
                ee = null;
              }
            else ee = null;
            M !== null && o0(
              q,
              N,
              M,
              ee,
              !1
            ), J !== null && _e !== null && o0(
              q,
              _e,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (N = _ ? dn(_) : window, M = N.nodeName && N.nodeName.toLowerCase(), M === "select" || M === "input" && N.type === "file")
            var Ee = Co;
          else if (wo(N))
            if (Ao)
              Ee = S1;
            else {
              Ee = v1;
              var F = p1;
            }
          else
            M = N.nodeName, !M || M.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? _ && cr(_.elementType) && (Ee = Co) : Ee = b1;
          if (Ee && (Ee = Ee(e, _))) {
            To(
              q,
              Ee,
              l,
              D
            );
            break e;
          }
          F && F(e, N, _), e === "focusout" && _ && N.type === "number" && _.memoizedProps.value != null && sr(N, "number", N.value);
        }
        switch (F = _ ? dn(_) : window, e) {
          case "focusin":
            (wo(F) || F.contentEditable === "true") && (Ca = F, Rr = _, En = null);
            break;
          case "focusout":
            En = Rr = Ca = null;
            break;
          case "mousedown":
            wr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wr = !1, Do(q, l, D);
            break;
          case "selectionchange":
            if (x1) break;
          case "keydown":
          case "keyup":
            Do(q, l, D);
        }
        var se;
        if (br)
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
          Ta ? xo(e, l) && (ge = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ge = "onCompositionStart");
        ge && (bo && l.locale !== "ko" && (Ta || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Ta && (se = ho()) : (El = D, hr = "value" in El ? El.value : El.textContent, Ta = !0)), F = vu(_, ge), 0 < F.length && (ge = new po(
          ge,
          e,
          null,
          l,
          D
        ), q.push({ event: ge, listeners: F }), se ? ge.data = se : (se = Ro(l), se !== null && (ge.data = se)))), (se = d1 ? m1(e, l) : h1(e, l)) && (ge = vu(_, "onBeforeInput"), 0 < ge.length && (F = new po(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), q.push({
          event: F,
          listeners: ge
        }), F.data = se)), iy(
          q,
          e,
          _,
          l,
          D
        );
      }
      s0(q, t);
    });
  }
  function Zn(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function vu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = mn(e, l), n != null && a.unshift(
        Zn(e, n, u)
      ), n = mn(e, t), n != null && a.push(
        Zn(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function cy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function o0(e, t, l, a, n) {
    for (var u = t._reactName, f = []; l !== null && l !== a; ) {
      var h = l, S = h.alternate, _ = h.stateNode;
      if (h = h.tag, S !== null && S === a) break;
      h !== 5 && h !== 26 && h !== 27 || _ === null || (S = _, n ? (_ = mn(l, u), _ != null && f.unshift(
        Zn(l, _, S)
      )) : n || (_ = mn(l, u), _ != null && f.push(
        Zn(l, _, S)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var oy = /\r\n?/g, fy = /\u0000|\uFFFD/g;
  function f0(e) {
    return (typeof e == "string" ? e : "" + e).replace(oy, `
`).replace(fy, "");
  }
  function d0(e, t) {
    return t = f0(t), f0(e) === t;
  }
  function Ae(e, t, l, a, n, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || xa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && xa(e, "" + a);
        break;
      case "className":
        xi(e, "class", a);
        break;
      case "tabIndex":
        xi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xi(e, l, a);
        break;
      case "style":
        oo(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          xi(e, "data", a);
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
        a = wi("" + a), e.setAttribute(l, a);
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
          typeof u == "function" && (l === "formAction" ? (t !== "input" && Ae(e, t, "name", n.name, n, null), Ae(
            e,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Ae(
            e,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Ae(
            e,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Ae(e, t, "encType", n.encType, n, null), Ae(e, t, "method", n.method, n, null), Ae(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        a = wi("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = It);
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
            if (n.children != null) throw Error(o(60));
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
        l = wi("" + a), e.setAttributeNS(
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
        de("beforetoggle", e), de("toggle", e), Ei(e, "popover", a);
        break;
      case "xlinkActuate":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ei(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = qh.get(l) || l, Ei(e, l, a));
    }
  }
  function $s(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        oo(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (l = a.__html, l != null) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? xa(e, a) : (typeof a == "number" || typeof a == "bigint") && xa(e, "" + a);
        break;
      case "onScroll":
        a != null && de("scroll", e);
        break;
      case "onScrollEnd":
        a != null && de("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = It);
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
        if (!to.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[st] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Ei(e, l, a);
          }
    }
  }
  function at(e, t, l) {
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
        var a = !1, n = !1, u;
        for (u in l)
          if (l.hasOwnProperty(u)) {
            var f = l[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  Ae(e, t, u, f, l, null);
              }
          }
        n && Ae(e, t, "srcSet", l.srcSet, l, null), a && Ae(e, t, "src", l.src, l, null);
        return;
      case "input":
        de("invalid", e);
        var h = u = f = n = null, S = null, _ = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var D = l[a];
            if (D != null)
              switch (a) {
                case "name":
                  n = D;
                  break;
                case "type":
                  f = D;
                  break;
                case "checked":
                  S = D;
                  break;
                case "defaultChecked":
                  _ = D;
                  break;
                case "value":
                  u = D;
                  break;
                case "defaultValue":
                  h = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ae(e, t, a, D, l, null);
              }
          }
        uo(
          e,
          u,
          h,
          S,
          _,
          f,
          n,
          !1
        );
        return;
      case "select":
        de("invalid", e), a = f = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (h = l[n], h != null))
            switch (n) {
              case "value":
                u = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                a = h;
              default:
                Ae(e, t, n, h, l, null);
            }
        t = u, l = f, e.multiple = !!a, t != null ? Ea(e, !!a, t, !1) : l != null && Ea(e, !!a, l, !0);
        return;
      case "textarea":
        de("invalid", e), u = n = a = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (h = l[f], h != null))
            switch (f) {
              case "value":
                a = h;
                break;
              case "defaultValue":
                n = h;
                break;
              case "children":
                u = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(o(91));
                break;
              default:
                Ae(e, t, f, h, l, null);
            }
        so(e, a, n, u);
        return;
      case "option":
        for (S in l)
          l.hasOwnProperty(S) && (a = l[S], a != null) && (S === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ae(e, t, S, a, l, null));
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
        for (a = 0; a < Qn.length; a++)
          de(Qn[a], e);
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
                Ae(e, t, _, a, l, null);
            }
        return;
      default:
        if (cr(t)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && $s(
              e,
              t,
              D,
              a,
              l,
              void 0
            ));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && (a = l[h], a != null && Ae(e, t, h, a, l, null));
  }
  function dy(e, t, l, a) {
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
        var n = null, u = null, f = null, h = null, S = null, _ = null, D = null;
        for (M in l) {
          var q = l[M];
          if (l.hasOwnProperty(M) && q != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = q;
              default:
                a.hasOwnProperty(M) || Ae(e, t, M, null, a, q);
            }
        }
        for (var N in a) {
          var M = a[N];
          if (q = l[N], a.hasOwnProperty(N) && (M != null || q != null))
            switch (N) {
              case "type":
                u = M;
                break;
              case "name":
                n = M;
                break;
              case "checked":
                _ = M;
                break;
              case "defaultChecked":
                D = M;
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
                  throw Error(o(137, t));
                break;
              default:
                M !== q && Ae(
                  e,
                  t,
                  N,
                  M,
                  a,
                  q
                );
            }
        }
        rr(
          e,
          f,
          h,
          S,
          _,
          D,
          u,
          n
        );
        return;
      case "select":
        M = f = h = N = null;
        for (u in l)
          if (S = l[u], l.hasOwnProperty(u) && S != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = S;
              default:
                a.hasOwnProperty(u) || Ae(
                  e,
                  t,
                  u,
                  null,
                  a,
                  S
                );
            }
        for (n in a)
          if (u = a[n], S = l[n], a.hasOwnProperty(n) && (u != null || S != null))
            switch (n) {
              case "value":
                N = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== S && Ae(
                  e,
                  t,
                  n,
                  u,
                  a,
                  S
                );
            }
        t = h, l = f, a = M, N != null ? Ea(e, !!l, N, !1) : !!a != !!l && (t != null ? Ea(e, !!l, t, !0) : Ea(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = N = null;
        for (h in l)
          if (n = l[h], l.hasOwnProperty(h) && n != null && !a.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ae(e, t, h, null, a, n);
            }
        for (f in a)
          if (n = a[f], u = l[f], a.hasOwnProperty(f) && (n != null || u != null))
            switch (f) {
              case "value":
                N = n;
                break;
              case "defaultValue":
                M = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && Ae(e, t, f, n, a, u);
            }
        ro(e, N, M);
        return;
      case "option":
        for (var J in l)
          N = l[J], l.hasOwnProperty(J) && N != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Ae(
            e,
            t,
            J,
            null,
            a,
            N
          ));
        for (S in a)
          N = a[S], M = l[S], a.hasOwnProperty(S) && N !== M && (N != null || M != null) && (S === "selected" ? e.selected = N && typeof N != "function" && typeof N != "symbol" : Ae(
            e,
            t,
            S,
            N,
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
          N = l[ee], l.hasOwnProperty(ee) && N != null && !a.hasOwnProperty(ee) && Ae(e, t, ee, null, a, N);
        for (_ in a)
          if (N = a[_], M = l[_], a.hasOwnProperty(_) && N !== M && (N != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(o(137, t));
                break;
              default:
                Ae(
                  e,
                  t,
                  _,
                  N,
                  a,
                  M
                );
            }
        return;
      default:
        if (cr(t)) {
          for (var _e in l)
            N = l[_e], l.hasOwnProperty(_e) && N !== void 0 && !a.hasOwnProperty(_e) && $s(
              e,
              t,
              _e,
              void 0,
              a,
              N
            );
          for (D in a)
            N = a[D], M = l[D], !a.hasOwnProperty(D) || N === M || N === void 0 && M === void 0 || $s(
              e,
              t,
              D,
              N,
              a,
              M
            );
          return;
        }
    }
    for (var w in l)
      N = l[w], l.hasOwnProperty(w) && N != null && !a.hasOwnProperty(w) && Ae(e, t, w, null, a, N);
    for (q in a)
      N = a[q], M = l[q], !a.hasOwnProperty(q) || N === M || N == null && M == null || Ae(e, t, q, N, a, M);
  }
  function m0(e) {
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
  function my() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, f = n.initiatorType, h = n.duration;
        if (u && h && m0(f)) {
          for (f = 0, h = n.responseEnd, a += 1; a < l.length; a++) {
            var S = l[a], _ = S.startTime;
            if (_ > h) break;
            var D = S.transferSize, q = S.initiatorType;
            D && m0(q) && (S = S.responseEnd, f += D * (S < h ? 1 : (h - _) / (S - _)));
          }
          if (--a, t += 8 * (u + f) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Fs = null, Ws = null;
  function bu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function h0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function y0(e, t) {
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
  function Is(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ps = null;
  function hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Ps ? !1 : (Ps = e, !0) : (Ps = null, !1);
  }
  var g0 = typeof setTimeout == "function" ? setTimeout : void 0, yy = typeof clearTimeout == "function" ? clearTimeout : void 0, p0 = typeof Promise == "function" ? Promise : void 0, gy = typeof queueMicrotask == "function" ? queueMicrotask : typeof p0 < "u" ? function(e) {
    return p0.resolve(null).then(e).catch(py);
  } : g0;
  function py(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hl(e) {
    return e === "head";
  }
  function v0(e, t) {
    var l = t, a = 0;
    do {
      var n = l.nextSibling;
      if (e.removeChild(l), n && n.nodeType === 8)
        if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Pa(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          Kn(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Kn(l);
          for (var u = l.firstChild; u; ) {
            var f = u.nextSibling, h = u.nodeName;
            u[fn] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && Kn(e.ownerDocument.body);
      l = n;
    } while (l);
    Pa(t);
  }
  function b0(e, t) {
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
  function ec(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ec(l), ir(l);
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
  function vy(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[fn])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = Bt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function by(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function S0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function tc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function lc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Sy(e, t) {
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
  var ac = null;
  function E0(e) {
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
  function x0(e) {
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
  function R0(e, t, l) {
    switch (t = bu(l), e) {
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
  function Kn(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    ir(e);
  }
  var Lt = /* @__PURE__ */ new Map(), w0 = /* @__PURE__ */ new Set();
  function Su(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var hl = k.d;
  k.d = {
    f: Ey,
    r: xy,
    D: Ry,
    C: wy,
    L: Ty,
    m: Cy,
    X: _y,
    S: Ay,
    M: zy
  };
  function Ey() {
    var e = hl.f(), t = fu();
    return e || t;
  }
  function xy(e) {
    var t = va(e);
    t !== null && t.tag === 5 && t.type === "form" ? Xf(t) : hl.r(e);
  }
  var Fa = typeof document > "u" ? null : document;
  function T0(e, t, l) {
    var a = Fa;
    if (a && typeof t == "string" && t) {
      var n = zt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), w0.has(n) || (w0.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), at(t, "link", e), Fe(t), a.head.appendChild(t)));
    }
  }
  function Ry(e) {
    hl.D(e), T0("dns-prefetch", e, null);
  }
  function wy(e, t) {
    hl.C(e, t), T0("preconnect", e, t);
  }
  function Ty(e, t, l) {
    hl.L(e, t, l);
    var a = Fa;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + zt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + zt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + zt(
        l.imageSizes
      ) + '"]')) : n += '[href="' + zt(e) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Wa(e);
          break;
        case "script":
          u = Ia(e);
      }
      Lt.has(u) || (e = z(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Lt.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Jn(u)) || t === "script" && a.querySelector($n(u)) || (t = a.createElement("link"), at(t, "link", e), Fe(t), a.head.appendChild(t)));
    }
  }
  function Cy(e, t) {
    hl.m(e, t);
    var l = Fa;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + zt(a) + '"][href="' + zt(e) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ia(e);
      }
      if (!Lt.has(u) && (e = z({ rel: "modulepreload", href: e }, t), Lt.set(u, e), l.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector($n(u)))
              return;
        }
        a = l.createElement("link"), at(a, "link", e), Fe(a), l.head.appendChild(a);
      }
    }
  }
  function Ay(e, t, l) {
    hl.S(e, t, l);
    var a = Fa;
    if (a && e) {
      var n = ba(a).hoistableStyles, u = Wa(e);
      t = t || "default";
      var f = n.get(u);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = a.querySelector(
          Jn(u)
        ))
          h.loading = 5;
        else {
          e = z(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Lt.get(u)) && nc(e, l);
          var S = f = a.createElement("link");
          Fe(S), at(S, "link", e), S._p = new Promise(function(_, D) {
            S.onload = _, S.onerror = D;
          }), S.addEventListener("load", function() {
            h.loading |= 1;
          }), S.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Eu(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: h
        }, n.set(u, f);
      }
    }
  }
  function _y(e, t) {
    hl.X(e, t);
    var l = Fa;
    if (l && e) {
      var a = ba(l).hoistableScripts, n = Ia(e), u = a.get(n);
      u || (u = l.querySelector($n(n)), u || (e = z({ src: e, async: !0 }, t), (t = Lt.get(n)) && ic(e, t), u = l.createElement("script"), Fe(u), at(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function zy(e, t) {
    hl.M(e, t);
    var l = Fa;
    if (l && e) {
      var a = ba(l).hoistableScripts, n = Ia(e), u = a.get(n);
      u || (u = l.querySelector($n(n)), u || (e = z({ src: e, async: !0, type: "module" }, t), (t = Lt.get(n)) && ic(e, t), u = l.createElement("script"), Fe(u), at(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function C0(e, t, l, a) {
    var n = (n = ae.current) ? Su(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Wa(l.href), l = ba(
          n
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Wa(l.href);
          var u = ba(
            n
          ).hoistableStyles, f = u.get(e);
          if (f || (n = n.ownerDocument || n, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = n.querySelector(
            Jn(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Lt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Lt.set(e, l), u || Ny(
            n,
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ia(l), l = ba(
          n
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
  function Wa(e) {
    return 'href="' + zt(e) + '"';
  }
  function Jn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function A0(e) {
    return z({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Ny(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), at(t, "link", l), Fe(t), e.head.appendChild(t));
  }
  function Ia(e) {
    return '[src="' + zt(e) + '"]';
  }
  function $n(e) {
    return "script[async]" + e;
  }
  function _0(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + zt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Fe(a), a;
          var n = z({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Fe(a), at(a, "style", n), Eu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = Wa(l.href);
          var u = e.querySelector(
            Jn(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Fe(u), u;
          a = A0(l), (n = Lt.get(n)) && nc(a, n), u = (e.ownerDocument || e).createElement("link"), Fe(u);
          var f = u;
          return f._p = new Promise(function(h, S) {
            f.onload = h, f.onerror = S;
          }), at(u, "link", a), t.state.loading |= 4, Eu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Ia(l.src), (n = e.querySelector(
            $n(u)
          )) ? (t.instance = n, Fe(n), n) : (a = l, (n = Lt.get(u)) && (a = z({}, l), ic(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Fe(n), at(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Eu(a, l.precedence, e));
    return t.instance;
  }
  function Eu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, f = 0; f < a.length; f++) {
      var h = a[f];
      if (h.dataset.precedence === t) u = h;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var xu = null;
  function z0(e, t, l) {
    if (xu === null) {
      var a = /* @__PURE__ */ new Map(), n = xu = /* @__PURE__ */ new Map();
      n.set(l, a);
    } else
      n = xu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
      var u = l[n];
      if (!(u[fn] || u[Pe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var h = a.get(f);
        h ? h.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function N0(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Oy(e, t, l) {
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
  function O0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function My(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Wa(a.href), u = t.querySelector(
          Jn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ru.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Fe(u);
          return;
        }
        u = t.ownerDocument || t, a = A0(a), (n = Lt.get(n)) && nc(a, n), u = u.createElement("link"), Fe(u);
        var f = u;
        f._p = new Promise(function(h, S) {
          f.onload = h, f.onerror = S;
        }), at(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ru.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var uc = 0;
  function jy(e, t) {
    return e.stylesheets && e.count === 0 && Tu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Tu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && uc === 0 && (uc = 62500 * my());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > uc ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Ru() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Tu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var wu = null;
  function Tu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wu = /* @__PURE__ */ new Map(), t.forEach(Uy, e), wu = null, Ru.call(e));
  }
  function Uy(e, t) {
    if (!(t.state.loading & 4)) {
      var l = wu.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), wu.set(e, l);
        for (var n = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var f = n[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      n = t.instance, f = n.getAttribute("data-precedence"), u = l.get(f) || a, u === a && l.set(null, n), l.set(f, n), this.count++, a = Ru.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Fn = {
    $$typeof: P,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0
  };
  function Dy(e, t, l, a, n, u, f, h, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = tr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tr(0), this.hiddenUpdates = tr(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function M0(e, t, l, a, n, u, f, h, S, _, D, q) {
    return e = new Dy(
      e,
      t,
      l,
      f,
      S,
      _,
      D,
      q,
      h
    ), t = 1, u === !0 && (t |= 24), u = xt(3, null, null, t), e.current = u, u.stateNode = e, t = qr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Vr(u), e;
  }
  function j0(e) {
    return e ? (e = za, e) : za;
  }
  function U0(e, t, l, a, n, u) {
    n = j0(n), a.context === null ? a.context = n : a.pendingContext = n, a = Al(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = _l(e, a, t), l !== null && (ht(l, e, t), _n(l, e, t));
  }
  function D0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function rc(e, t) {
    D0(e, t), (e = e.alternate) && D0(e, t);
  }
  function B0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wl(e, 67108864);
      t !== null && ht(t, e, 67108864), rc(e, 67108864);
    }
  }
  function L0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = At();
      t = lr(t);
      var l = Wl(e, t);
      l !== null && ht(l, e, t), rc(e, t);
    }
  }
  var Cu = !0;
  function By(e, t, l, a) {
    var n = X.T;
    X.T = null;
    var u = k.p;
    try {
      k.p = 2, sc(e, t, l, a);
    } finally {
      k.p = u, X.T = n;
    }
  }
  function Ly(e, t, l, a) {
    var n = X.T;
    X.T = null;
    var u = k.p;
    try {
      k.p = 8, sc(e, t, l, a);
    } finally {
      k.p = u, X.T = n;
    }
  }
  function sc(e, t, l, a) {
    if (Cu) {
      var n = cc(a);
      if (n === null)
        Js(
          e,
          t,
          a,
          Au,
          l
        ), q0(e, a);
      else if (qy(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (q0(e, a), t & 4 && -1 < Hy.indexOf(e)) {
        for (; n !== null; ) {
          var u = va(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Zl(u.pendingLanes);
                  if (f !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - St(f);
                      h.entanglements[1] |= S, f &= ~S;
                    }
                    Jt(u), (Re & 6) === 0 && (cu = vt() + 500, kn(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = Wl(u, 2), h !== null && ht(h, u, 2), fu(), rc(u, 2);
            }
          if (u = cc(a), u === null && Js(
            e,
            t,
            a,
            Au,
            l
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        Js(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function cc(e) {
    return e = fr(e), oc(e);
  }
  var Au = null;
  function oc(e) {
    if (Au = null, e = pa(e), e !== null) {
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
    return Au = e, null;
  }
  function H0(e) {
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
        switch (Rh()) {
          case kc:
            return 2;
          case Qc:
            return 8;
          case gi:
          case wh:
            return 32;
          case Zc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fc = !1, ql = null, Yl = null, Xl = null, Wn = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), Gl = [], Hy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function q0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ql = null;
        break;
      case "dragenter":
      case "dragleave":
        Yl = null;
        break;
      case "mouseover":
      case "mouseout":
        Xl = null;
        break;
      case "pointerover":
      case "pointerout":
        Wn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        In.delete(t.pointerId);
    }
  }
  function Pn(e, t, l, a, n, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = va(t), t !== null && B0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function qy(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return ql = Pn(
          ql,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "dragenter":
        return Yl = Pn(
          Yl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "mouseover":
        return Xl = Pn(
          Xl,
          e,
          t,
          l,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Wn.set(
          u,
          Pn(
            Wn.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, In.set(
          u,
          Pn(
            In.get(u) || null,
            e,
            t,
            l,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Y0(e) {
    var t = pa(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Ic(e.priority, function() {
              L0(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Ic(e.priority, function() {
              L0(l);
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
  function _u(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = cc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        or = a, l.target.dispatchEvent(a), or = null;
      } else
        return t = va(l), t !== null && B0(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function X0(e, t, l) {
    _u(e) && l.delete(t);
  }
  function Yy() {
    fc = !1, ql !== null && _u(ql) && (ql = null), Yl !== null && _u(Yl) && (Yl = null), Xl !== null && _u(Xl) && (Xl = null), Wn.forEach(X0), In.forEach(X0);
  }
  function zu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, fc || (fc = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Yy
    )));
  }
  var Nu = null;
  function G0(e) {
    Nu !== e && (Nu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Nu === e && (Nu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (oc(a || l) === null)
              continue;
            break;
          }
          var u = va(l);
          u !== null && (e.splice(t, 3), t -= 3, cs(
            u,
            {
              pending: !0,
              data: n,
              method: l.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Pa(e) {
    function t(S) {
      return zu(S, e);
    }
    ql !== null && zu(ql, e), Yl !== null && zu(Yl, e), Xl !== null && zu(Xl, e), Wn.forEach(t), In.forEach(t);
    for (var l = 0; l < Gl.length; l++) {
      var a = Gl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Gl.length && (l = Gl[0], l.blockedOn === null); )
      Y0(l), l.blockedOn === null && Gl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], f = n[st] || null;
        if (typeof u == "function")
          f || G0(l);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, f = u[st] || null)
              h = f.formAction;
            else if (oc(n) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? l[a + 1] = h : (l.splice(a, 3), a -= 3), G0(l);
        }
      }
  }
  function V0() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return n = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(l, 20);
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
      var a = !1, n = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function dc(e) {
    this._internalRoot = e;
  }
  Ou.prototype.render = dc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = At();
    U0(l, a, e, t, null, null);
  }, Ou.prototype.unmount = dc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      U0(e.current, 2, null, e, null, null), fu(), t[ga] = null;
    }
  };
  function Ou(e) {
    this._internalRoot = e;
  }
  Ou.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Wc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Gl.length && t !== 0 && t < Gl[l].priority; l++) ;
      Gl.splice(l, 0, e), l === 0 && Y0(e);
    }
  };
  var k0 = s.version;
  if (k0 !== "19.2.3")
    throw Error(
      o(
        527,
        k0,
        "19.2.3"
      )
    );
  k.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Xy = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: X,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mu.isDisabled && Mu.supportsFiber)
      try {
        sn = Mu.inject(
          Xy
        ), bt = Mu;
      } catch {
      }
  }
  return li.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, a = "", n = Wf, u = If, f = Pf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = M0(
      e,
      1,
      !1,
      null,
      null,
      l,
      a,
      null,
      n,
      u,
      f,
      V0
    ), e[ga] = t.current, Ks(e), new dc(t);
  }, li.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var a = !1, n = "", u = Wf, f = If, h = Pf, S = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (S = l.formState)), t = M0(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      S,
      u,
      f,
      h,
      V0
    ), t.context = j0(null), l = t.current, a = At(), a = lr(a), n = Al(a), n.callback = null, _l(l, n, a), l = a, t.current.lanes = l, on(t, l), Jt(t), e[ga] = t.current, Ks(e), new Ou(t);
  }, li.version = "19.2.3", li;
}
var um;
function _p() {
  if (um) return bc.exports;
  um = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), bc.exports = Ap(), bc.exports;
}
var zp = _p();
const Ht = ({
  label: i,
  onClick: r,
  disabled: s,
  type: c = "button",
  variant: o = "primary",
  className: d,
  children: m,
  ariaLabel: g,
  mainButtonStyle: p
}) => {
  const y = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", b = {
    primary: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    outline: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    link: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, R = d ? `${y} ${b[o]} ${d}` : `${y} ${b[o]}`;
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      className: R,
      onClick: r,
      disabled: s,
      type: c,
      "aria-label": g || (typeof i == "string" ? i : void 0),
      "aria-disabled": s,
      style: { ...p, borderStyle: "solid !important" },
      children: m || i
    }
  );
}, oa = T.forwardRef(
  (i, r) => {
    const {
      label: s,
      startIcon: c,
      endIcon: o,
      error: d,
      helperText: m,
      optional: g,
      className: p,
      options: y,
      id: b,
      ...R
    } = i, z = !!d || !!m, U = R.type === "select" || !!y, C = b || `input-${Math.random().toString(36).substr(2, 9)}`, B = `${C}-error`, j = `${C}-helper`;
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
        U ? /* @__PURE__ */ v.jsx(
          "select",
          {
            ref: r,
            id: C,
            "aria-label": typeof s == "string" ? s : R["aria-label"],
            "aria-invalid": z,
            "aria-describedby": z ? B : void 0,
            "aria-required": R.required,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: z ? "#d64545" : "#cbd5d5",
              ...R.style
            },
            ...R,
            children: y && y.map((Q) => /* @__PURE__ */ v.jsx("option", { value: Q.value, children: Q.label }, Q.value))
          }
        ) : /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: r,
            id: C,
            "aria-label": typeof s == "string" ? s : R["aria-label"],
            "aria-invalid": z,
            "aria-describedby": z ? B : void 0,
            "aria-required": R.required,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: z ? "#d64545" : "#cbd5d5",
              ...R.style
            },
            ...R
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
          id: B,
          role: "alert",
          "aria-live": "polite",
          className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
          children: d
        }
      ),
      !d && m && /* @__PURE__ */ v.jsx(
        "div",
        {
          id: j,
          role: "status",
          "aria-live": "polite",
          className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
          children: m
        }
      )
    ] });
  }
), Np = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", en = ({
  type: i,
  message: r,
  actionText: s,
  onActionClick: c,
  onClose: o,
  className: d = "",
  children: m
}) => {
  const g = () => {
    switch (i) {
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
    switch (i) {
      case "success":
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ v.jsx("img", { src: Np, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g(), b = () => {
    switch (i) {
      case "error":
        return "alert";
      case "warning":
      case "info":
        return "status";
      case "success":
        return "status";
      default:
        return "status";
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      role: b(),
      "aria-live": i === "error" ? "assertive" : "polite",
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
          m
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
}, _c = ({
  type: i,
  message: r,
  duration: s = 5e3,
  onClose: c,
  className: o = ""
}) => {
  const [d, m] = T.useState(!1), [g, p] = T.useState(!1);
  T.useEffect(() => {
    setTimeout(() => m(!0), 10);
    const C = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(C);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      m(!1), c && c();
    }, 300);
  }, b = () => {
    switch (i) {
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
  }, R = () => {
    switch (i) {
      case "success":
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ v.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, z = b(), U = () => {
    switch (i) {
      case "error":
        return "alert";
      case "warning":
      case "info":
      case "success":
        return "status";
      default:
        return "status";
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      role: U(),
      "aria-live": i === "error" ? "assertive" : "polite",
      "aria-atomic": "true",
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ v.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${z.bg}`, children: [
        /* @__PURE__ */ v.jsx("div", { className: `flex-shrink-0! ${z.icon}`, "aria-hidden": "true", children: R() }),
        /* @__PURE__ */ v.jsx("div", { className: `ml-3! flex-1! ${z.text}`, children: /* @__PURE__ */ v.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            "aria-label": "Close notification",
            className: `ml-4! flex-shrink-0! inline-flex! ${z.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, $m = () => /* @__PURE__ */ v.jsx(
  "span",
  {
    className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Loading..." })
  }
);
class ni extends Error {
}
ni.prototype.name = "InvalidTokenError";
function Op(i) {
  return decodeURIComponent(atob(i).replace(/(.)/g, (r, s) => {
    let c = s.charCodeAt(0).toString(16).toUpperCase();
    return c.length < 2 && (c = "0" + c), "%" + c;
  }));
}
function Mp(i) {
  let r = i.replace(/-/g, "+").replace(/_/g, "/");
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
function Gu(i, r) {
  if (typeof i != "string")
    throw new ni("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, c = i.split(".")[s];
  if (typeof c != "string")
    throw new ni(`Invalid token specified: missing part #${s + 1}`);
  let o;
  try {
    o = Mp(c);
  } catch (d) {
    throw new ni(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new ni(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function jp() {
  const i = window.location.hostname;
  if (i === "localhost" || i === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(i))
    return "";
  const r = i.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Up() {
  const i = window.location.hostname;
  return i === "localhost" || i === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(i) || i.startsWith("dev.") || i.startsWith("dev-") ? "dev" : i.startsWith("test.") || i.startsWith("test-") ? "test" : i.startsWith("stage.") || i.startsWith("stage-") ? "stage" : "prod";
}
function Uu() {
  const i = window.location.href, r = new URL(i), s = r.hostname;
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
function ii(i, r, s, c = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + s);
  const d = jp(), m = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = c ? encodeURIComponent(r) : r;
  document.cookie = `${i}=${p}; expires=${o.toUTCString()}; path=/${m}${g}; SameSite=Lax`;
}
function Fm(i, r) {
  return function() {
    return i.apply(r, arguments);
  };
}
var rm = {};
const { toString: Dp } = Object.prototype, { getPrototypeOf: qc } = Object, { iterator: Zu, toStringTag: Wm } = Symbol, Ku = /* @__PURE__ */ ((i) => (r) => {
  const s = Dp.call(r);
  return i[s] || (i[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), kt = (i) => (i = i.toLowerCase(), (r) => Ku(r) === i), Ju = (i) => (r) => typeof r === i, { isArray: nn } = Array, tn = Ju("undefined");
function oi(i) {
  return i !== null && !tn(i) && i.constructor !== null && !tn(i.constructor) && yt(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const Im = kt("ArrayBuffer");
function Bp(i) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(i) : r = i && i.buffer && Im(i.buffer), r;
}
const Lp = Ju("string"), yt = Ju("function"), Pm = Ju("number"), fi = (i) => i !== null && typeof i == "object", Hp = (i) => i === !0 || i === !1, Hu = (i) => {
  if (Ku(i) !== "object")
    return !1;
  const r = qc(i);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Wm in i) && !(Zu in i);
}, qp = (i) => {
  if (!fi(i) || oi(i))
    return !1;
  try {
    return Object.keys(i).length === 0 && Object.getPrototypeOf(i) === Object.prototype;
  } catch {
    return !1;
  }
}, Yp = kt("Date"), Xp = kt("File"), Gp = kt("Blob"), Vp = kt("FileList"), kp = (i) => fi(i) && yt(i.pipe), Qp = (i) => {
  let r;
  return i && (typeof FormData == "function" && i instanceof FormData || yt(i.append) && ((r = Ku(i)) === "formdata" || // detect form-data instance
  r === "object" && yt(i.toString) && i.toString() === "[object FormData]"));
}, Zp = kt("URLSearchParams"), [Kp, Jp, $p, Fp] = ["ReadableStream", "Request", "Response", "Headers"].map(kt), Wp = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function di(i, r, { allOwnKeys: s = !1 } = {}) {
  if (i === null || typeof i > "u")
    return;
  let c, o;
  if (typeof i != "object" && (i = [i]), nn(i))
    for (c = 0, o = i.length; c < o; c++)
      r.call(null, i[c], c, i);
  else {
    if (oi(i))
      return;
    const d = s ? Object.getOwnPropertyNames(i) : Object.keys(i), m = d.length;
    let g;
    for (c = 0; c < m; c++)
      g = d[c], r.call(null, i[g], g, i);
  }
}
function eh(i, r) {
  if (oi(i))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(i);
  let c = s.length, o;
  for (; c-- > 0; )
    if (o = s[c], r === o.toLowerCase())
      return o;
  return null;
}
const fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, th = (i) => !tn(i) && i !== fa;
function zc() {
  const { caseless: i, skipUndefined: r } = th(this) && this || {}, s = {}, c = (o, d) => {
    const m = i && eh(s, d) || d;
    Hu(s[m]) && Hu(o) ? s[m] = zc(s[m], o) : Hu(o) ? s[m] = zc({}, o) : nn(o) ? s[m] = o.slice() : (!r || !tn(o)) && (s[m] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && di(arguments[o], c);
  return s;
}
const Ip = (i, r, s, { allOwnKeys: c } = {}) => (di(r, (o, d) => {
  s && yt(o) ? i[d] = Fm(o, s) : i[d] = o;
}, { allOwnKeys: c }), i), Pp = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), ev = (i, r, s, c) => {
  i.prototype = Object.create(r.prototype, c), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: r.prototype
  }), s && Object.assign(i.prototype, s);
}, tv = (i, r, s, c) => {
  let o, d, m;
  const g = {};
  if (r = r || {}, i == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(i), d = o.length; d-- > 0; )
      m = o[d], (!c || c(m, i, r)) && !g[m] && (r[m] = i[m], g[m] = !0);
    i = s !== !1 && qc(i);
  } while (i && (!s || s(i, r)) && i !== Object.prototype);
  return r;
}, lv = (i, r, s) => {
  i = String(i), (s === void 0 || s > i.length) && (s = i.length), s -= r.length;
  const c = i.indexOf(r, s);
  return c !== -1 && c === s;
}, av = (i) => {
  if (!i) return null;
  if (nn(i)) return i;
  let r = i.length;
  if (!Pm(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = i[r];
  return s;
}, nv = /* @__PURE__ */ ((i) => (r) => i && r instanceof i)(typeof Uint8Array < "u" && qc(Uint8Array)), iv = (i, r) => {
  const c = (i && i[Zu]).call(i);
  let o;
  for (; (o = c.next()) && !o.done; ) {
    const d = o.value;
    r.call(i, d[0], d[1]);
  }
}, uv = (i, r) => {
  let s;
  const c = [];
  for (; (s = i.exec(r)) !== null; )
    c.push(s);
  return c;
}, rv = kt("HTMLFormElement"), sv = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, c, o) {
    return c.toUpperCase() + o;
  }
), sm = (({ hasOwnProperty: i }) => (r, s) => i.call(r, s))(Object.prototype), cv = kt("RegExp"), lh = (i, r) => {
  const s = Object.getOwnPropertyDescriptors(i), c = {};
  di(s, (o, d) => {
    let m;
    (m = r(o, d, i)) !== !1 && (c[d] = m || o);
  }), Object.defineProperties(i, c);
}, ov = (i) => {
  lh(i, (r, s) => {
    if (yt(i) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const c = i[s];
    if (yt(c)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, fv = (i, r) => {
  const s = {}, c = (o) => {
    o.forEach((d) => {
      s[d] = !0;
    });
  };
  return nn(i) ? c(i) : c(String(i).split(r)), s;
}, dv = () => {
}, mv = (i, r) => i != null && Number.isFinite(i = +i) ? i : r;
function hv(i) {
  return !!(i && yt(i.append) && i[Wm] === "FormData" && i[Zu]);
}
const yv = (i) => {
  const r = new Array(10), s = (c, o) => {
    if (fi(c)) {
      if (r.indexOf(c) >= 0)
        return;
      if (oi(c))
        return c;
      if (!("toJSON" in c)) {
        r[o] = c;
        const d = nn(c) ? [] : {};
        return di(c, (m, g) => {
          const p = s(m, o + 1);
          !tn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return c;
  };
  return s(i, 0);
}, gv = kt("AsyncFunction"), pv = (i) => i && (fi(i) || yt(i)) && yt(i.then) && yt(i.catch), ah = ((i, r) => i ? setImmediate : r ? ((s, c) => (fa.addEventListener("message", ({ source: o, data: d }) => {
  o === fa && d === s && c.length && c.shift()();
}, !1), (o) => {
  c.push(o), fa.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  yt(fa.postMessage)
), vv = typeof queueMicrotask < "u" ? queueMicrotask.bind(fa) : typeof rm < "u" && rm.nextTick || ah, bv = (i) => i != null && yt(i[Zu]), O = {
  isArray: nn,
  isArrayBuffer: Im,
  isBuffer: oi,
  isFormData: Qp,
  isArrayBufferView: Bp,
  isString: Lp,
  isNumber: Pm,
  isBoolean: Hp,
  isObject: fi,
  isPlainObject: Hu,
  isEmptyObject: qp,
  isReadableStream: Kp,
  isRequest: Jp,
  isResponse: $p,
  isHeaders: Fp,
  isUndefined: tn,
  isDate: Yp,
  isFile: Xp,
  isBlob: Gp,
  isRegExp: cv,
  isFunction: yt,
  isStream: kp,
  isURLSearchParams: Zp,
  isTypedArray: nv,
  isFileList: Vp,
  forEach: di,
  merge: zc,
  extend: Ip,
  trim: Wp,
  stripBOM: Pp,
  inherits: ev,
  toFlatObject: tv,
  kindOf: Ku,
  kindOfTest: kt,
  endsWith: lv,
  toArray: av,
  forEachEntry: iv,
  matchAll: uv,
  isHTMLForm: rv,
  hasOwnProperty: sm,
  hasOwnProp: sm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: lh,
  freezeMethods: ov,
  toObjectSet: fv,
  toCamelCase: sv,
  noop: dv,
  toFiniteNumber: mv,
  findKey: eh,
  global: fa,
  isContextDefined: th,
  isSpecCompliantForm: hv,
  toJSONObject: yv,
  isAsyncFn: gv,
  isThenable: pv,
  setImmediate: ah,
  asap: vv,
  isIterable: bv
};
function re(i, r, s, c, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = i, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), c && (this.request = c), o && (this.response = o, this.status = o.status ? o.status : null);
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
const nh = re.prototype, ih = {};
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
].forEach((i) => {
  ih[i] = { value: i };
});
Object.defineProperties(re, ih);
Object.defineProperty(nh, "isAxiosError", { value: !0 });
re.from = (i, r, s, c, o, d) => {
  const m = Object.create(nh);
  O.toFlatObject(i, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = i && i.message ? i.message : "Error", p = r == null && i ? i.code : r;
  return re.call(m, g, p, s, c, o), i && m.cause == null && Object.defineProperty(m, "cause", { value: i, configurable: !0 }), m.name = i && i.name || "Error", d && Object.assign(m, d), m;
};
const Sv = null;
function Nc(i) {
  return O.isPlainObject(i) || O.isArray(i);
}
function uh(i) {
  return O.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function cm(i, r, s) {
  return i ? i.concat(r).map(function(o, d) {
    return o = uh(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : r;
}
function Ev(i) {
  return O.isArray(i) && !i.some(Nc);
}
const xv = O.toFlatObject(O, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function $u(i, r, s) {
  if (!O.isObject(i))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = O.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(B, j) {
    return !O.isUndefined(j[B]);
  });
  const c = s.metaTokens, o = s.visitor || b, d = s.dots, m = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(r);
  if (!O.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(C) {
    if (C === null) return "";
    if (O.isDate(C))
      return C.toISOString();
    if (O.isBoolean(C))
      return C.toString();
    if (!p && O.isBlob(C))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return O.isArrayBuffer(C) || O.isTypedArray(C) ? p && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function b(C, B, j) {
    let Q = C;
    if (C && !j && typeof C == "object") {
      if (O.endsWith(B, "{}"))
        B = c ? B : B.slice(0, -2), C = JSON.stringify(C);
      else if (O.isArray(C) && Ev(C) || (O.isFileList(C) || O.endsWith(B, "[]")) && (Q = O.toArray(C)))
        return B = uh(B), Q.forEach(function(K, P) {
          !(O.isUndefined(K) || K === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? cm([B], P, d) : m === null ? B : B + "[]",
            y(K)
          );
        }), !1;
    }
    return Nc(C) ? !0 : (r.append(cm(j, B, d), y(C)), !1);
  }
  const R = [], z = Object.assign(xv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Nc
  });
  function U(C, B) {
    if (!O.isUndefined(C)) {
      if (R.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + B.join("."));
      R.push(C), O.forEach(C, function(Q, Z) {
        (!(O.isUndefined(Q) || Q === null) && o.call(
          r,
          Q,
          O.isString(Z) ? Z.trim() : Z,
          B,
          z
        )) === !0 && U(Q, B ? B.concat(Z) : [Z]);
      }), R.pop();
    }
  }
  if (!O.isObject(i))
    throw new TypeError("data must be an object");
  return U(i), r;
}
function om(i) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(i).replace(/[!'()~]|%20|%00/g, function(c) {
    return r[c];
  });
}
function Yc(i, r) {
  this._pairs = [], i && $u(i, this, r);
}
const rh = Yc.prototype;
rh.append = function(r, s) {
  this._pairs.push([r, s]);
};
rh.toString = function(r) {
  const s = r ? function(c) {
    return r.call(this, c, om);
  } : om;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function Rv(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function sh(i, r, s) {
  if (!r)
    return i;
  const c = s && s.encode || Rv;
  O.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let d;
  if (o ? d = o(r, s) : d = O.isURLSearchParams(r) ? r.toString() : new Yc(r, s).toString(c), d) {
    const m = i.indexOf("#");
    m !== -1 && (i = i.slice(0, m)), i += (i.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return i;
}
class fm {
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
const ch = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, wv = typeof URLSearchParams < "u" ? URLSearchParams : Yc, Tv = typeof FormData < "u" ? FormData : null, Cv = typeof Blob < "u" ? Blob : null, Av = {
  isBrowser: !0,
  classes: {
    URLSearchParams: wv,
    FormData: Tv,
    Blob: Cv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Xc = typeof window < "u" && typeof document < "u", Oc = typeof navigator == "object" && navigator || void 0, _v = Xc && (!Oc || ["ReactNative", "NativeScript", "NS"].indexOf(Oc.product) < 0), zv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Nv = Xc && window.location.href || "http://localhost", Ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Xc,
  hasStandardBrowserEnv: _v,
  hasStandardBrowserWebWorkerEnv: zv,
  navigator: Oc,
  origin: Nv
}, Symbol.toStringTag, { value: "Module" })), ut = {
  ...Ov,
  ...Av
};
function Mv(i, r) {
  return $u(i, new ut.classes.URLSearchParams(), {
    visitor: function(s, c, o, d) {
      return ut.isNode && O.isBuffer(s) ? (this.append(c, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function jv(i) {
  return O.matchAll(/\w+|\[(\w*)]/g, i).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Uv(i) {
  const r = {}, s = Object.keys(i);
  let c;
  const o = s.length;
  let d;
  for (c = 0; c < o; c++)
    d = s[c], r[d] = i[d];
  return r;
}
function oh(i) {
  function r(s, c, o, d) {
    let m = s[d++];
    if (m === "__proto__") return !0;
    const g = Number.isFinite(+m), p = d >= s.length;
    return m = !m && O.isArray(o) ? o.length : m, p ? (O.hasOwnProp(o, m) ? o[m] = [o[m], c] : o[m] = c, !g) : ((!o[m] || !O.isObject(o[m])) && (o[m] = []), r(s, c, o[m], d) && O.isArray(o[m]) && (o[m] = Uv(o[m])), !g);
  }
  if (O.isFormData(i) && O.isFunction(i.entries)) {
    const s = {};
    return O.forEachEntry(i, (c, o) => {
      r(jv(c), o, s, 0);
    }), s;
  }
  return null;
}
function Dv(i, r, s) {
  if (O.isString(i))
    try {
      return (r || JSON.parse)(i), O.trim(i);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (s || JSON.stringify)(i);
}
const mi = {
  transitional: ch,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const c = s.getContentType() || "", o = c.indexOf("application/json") > -1, d = O.isObject(r);
    if (d && O.isHTMLForm(r) && (r = new FormData(r)), O.isFormData(r))
      return o ? JSON.stringify(oh(r)) : r;
    if (O.isArrayBuffer(r) || O.isBuffer(r) || O.isStream(r) || O.isFile(r) || O.isBlob(r) || O.isReadableStream(r))
      return r;
    if (O.isArrayBufferView(r))
      return r.buffer;
    if (O.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return Mv(r, this.formSerializer).toString();
      if ((g = O.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return $u(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (s.setContentType("application/json", !1), Dv(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || mi.transitional, c = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (O.isResponse(r) || O.isReadableStream(r))
      return r;
    if (r && O.isString(r) && (c && !this.responseType || o)) {
      const m = !(s && s.silentJSONParsing) && o;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (g) {
        if (m)
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
    FormData: ut.classes.FormData,
    Blob: ut.classes.Blob
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
O.forEach(["delete", "get", "head", "post", "put", "patch"], (i) => {
  mi.headers[i] = {};
});
const Bv = O.toObjectSet([
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
]), Lv = (i) => {
  const r = {};
  let s, c, o;
  return i && i.split(`
`).forEach(function(m) {
    o = m.indexOf(":"), s = m.substring(0, o).trim().toLowerCase(), c = m.substring(o + 1).trim(), !(!s || r[s] && Bv[s]) && (s === "set-cookie" ? r[s] ? r[s].push(c) : r[s] = [c] : r[s] = r[s] ? r[s] + ", " + c : c);
  }), r;
}, dm = /* @__PURE__ */ Symbol("internals");
function ai(i) {
  return i && String(i).trim().toLowerCase();
}
function qu(i) {
  return i === !1 || i == null ? i : O.isArray(i) ? i.map(qu) : String(i);
}
function Hv(i) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = s.exec(i); )
    r[c[1]] = c[2];
  return r;
}
const qv = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
function xc(i, r, s, c, o) {
  if (O.isFunction(c))
    return c.call(this, r, s);
  if (o && (r = s), !!O.isString(r)) {
    if (O.isString(c))
      return r.indexOf(c) !== -1;
    if (O.isRegExp(c))
      return c.test(r);
  }
}
function Yv(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, c) => s.toUpperCase() + c);
}
function Xv(i, r) {
  const s = O.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(i, c + s, {
      value: function(o, d, m) {
        return this[c].call(this, r, o, d, m);
      },
      configurable: !0
    });
  });
}
let gt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, c) {
    const o = this;
    function d(g, p, y) {
      const b = ai(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const R = O.findKey(o, b);
      (!R || o[R] === void 0 || y === !0 || y === void 0 && o[R] !== !1) && (o[R || p] = qu(g));
    }
    const m = (g, p) => O.forEach(g, (y, b) => d(y, b, p));
    if (O.isPlainObject(r) || r instanceof this.constructor)
      m(r, s);
    else if (O.isString(r) && (r = r.trim()) && !qv(r))
      m(Lv(r), s);
    else if (O.isObject(r) && O.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!O.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? O.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      m(g, s);
    } else
      r != null && d(s, r, c);
    return this;
  }
  get(r, s) {
    if (r = ai(r), r) {
      const c = O.findKey(this, r);
      if (c) {
        const o = this[c];
        if (!s)
          return o;
        if (s === !0)
          return Hv(o);
        if (O.isFunction(s))
          return s.call(this, o, c);
        if (O.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = ai(r), r) {
      const c = O.findKey(this, r);
      return !!(c && this[c] !== void 0 && (!s || xc(this, this[c], c, s)));
    }
    return !1;
  }
  delete(r, s) {
    const c = this;
    let o = !1;
    function d(m) {
      if (m = ai(m), m) {
        const g = O.findKey(c, m);
        g && (!s || xc(c, c[g], g, s)) && (delete c[g], o = !0);
      }
    }
    return O.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const s = Object.keys(this);
    let c = s.length, o = !1;
    for (; c--; ) {
      const d = s[c];
      (!r || xc(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const s = this, c = {};
    return O.forEach(this, (o, d) => {
      const m = O.findKey(c, d);
      if (m) {
        s[m] = qu(o), delete s[d];
        return;
      }
      const g = r ? Yv(d) : String(d).trim();
      g !== d && delete s[d], s[g] = qu(o), c[g] = !0;
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
    const c = (this[dm] = this[dm] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(m) {
      const g = ai(m);
      c[g] || (Xv(o, m), c[g] = !0);
    }
    return O.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
O.reduceDescriptors(gt.prototype, ({ value: i }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => i,
    set(c) {
      this[s] = c;
    }
  };
});
O.freezeMethods(gt);
function Rc(i, r) {
  const s = this || mi, c = r || s, o = gt.from(c.headers);
  let d = c.data;
  return O.forEach(i, function(g) {
    d = g.call(s, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function fh(i) {
  return !!(i && i.__CANCEL__);
}
function un(i, r, s) {
  re.call(this, i ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
O.inherits(un, re, {
  __CANCEL__: !0
});
function dh(i, r, s) {
  const c = s.config.validateStatus;
  !s.status || !c || c(s.status) ? i(s) : r(new re(
    "Request failed with status code " + s.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function Gv(i) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return r && r[1] || "";
}
function Vv(i, r) {
  i = i || 10;
  const s = new Array(i), c = new Array(i);
  let o = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = c[d];
    m || (m = y), s[o] = p, c[o] = y;
    let R = d, z = 0;
    for (; R !== o; )
      z += s[R++], R = R % i;
    if (o = (o + 1) % i, o === d && (d = (d + 1) % i), y - m < r)
      return;
    const U = b && y - b;
    return U ? Math.round(z * 1e3 / U) : void 0;
  };
}
function kv(i, r) {
  let s = 0, c = 1e3 / r, o, d;
  const m = (y, b = Date.now()) => {
    s = b, o = null, d && (clearTimeout(d), d = null), i(...y);
  };
  return [(...y) => {
    const b = Date.now(), R = b - s;
    R >= c ? m(y, b) : (o = y, d || (d = setTimeout(() => {
      d = null, m(o);
    }, c - R)));
  }, () => o && m(o)];
}
const Vu = (i, r, s = 3) => {
  let c = 0;
  const o = Vv(50, 250);
  return kv((d) => {
    const m = d.loaded, g = d.lengthComputable ? d.total : void 0, p = m - c, y = o(p), b = m <= g;
    c = m;
    const R = {
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
    i(R);
  }, s);
}, mm = (i, r) => {
  const s = i != null;
  return [(c) => r[0]({
    lengthComputable: s,
    total: i,
    loaded: c
  }), r[1]];
}, hm = (i) => (...r) => O.asap(() => i(...r)), Qv = ut.hasStandardBrowserEnv ? /* @__PURE__ */ ((i, r) => (s) => (s = new URL(s, ut.origin), i.protocol === s.protocol && i.host === s.host && (r || i.port === s.port)))(
  new URL(ut.origin),
  ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent)
) : () => !0, Zv = ut.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, r, s, c, o, d, m) {
      if (typeof document > "u") return;
      const g = [`${i}=${encodeURIComponent(r)}`];
      O.isNumber(s) && g.push(`expires=${new Date(s).toUTCString()}`), O.isString(c) && g.push(`path=${c}`), O.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), O.isString(m) && g.push(`SameSite=${m}`), document.cookie = g.join("; ");
    },
    read(i) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + i + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
    },
    remove(i) {
      this.write(i, "", Date.now() - 864e5, "/");
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
function Kv(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Jv(i, r) {
  return r ? i.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : i;
}
function mh(i, r, s) {
  let c = !Kv(r);
  return i && (c || s == !1) ? Jv(i, r) : r;
}
const ym = (i) => i instanceof gt ? { ...i } : i;
function ma(i, r) {
  r = r || {};
  const s = {};
  function c(y, b, R, z) {
    return O.isPlainObject(y) && O.isPlainObject(b) ? O.merge.call({ caseless: z }, y, b) : O.isPlainObject(b) ? O.merge({}, b) : O.isArray(b) ? b.slice() : b;
  }
  function o(y, b, R, z) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return c(void 0, y, R, z);
    } else return c(y, b, R, z);
  }
  function d(y, b) {
    if (!O.isUndefined(b))
      return c(void 0, b);
  }
  function m(y, b) {
    if (O.isUndefined(b)) {
      if (!O.isUndefined(y))
        return c(void 0, y);
    } else return c(void 0, b);
  }
  function g(y, b, R) {
    if (R in r)
      return c(y, b);
    if (R in i)
      return c(void 0, y);
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
    headers: (y, b, R) => o(ym(y), ym(b), R, !0)
  };
  return O.forEach(Object.keys({ ...i, ...r }), function(b) {
    const R = p[b] || o, z = R(i[b], r[b], b);
    O.isUndefined(z) && R !== g || (s[b] = z);
  }), s;
}
const hh = (i) => {
  const r = ma({}, i);
  let { data: s, withXSRFToken: c, xsrfHeaderName: o, xsrfCookieName: d, headers: m, auth: g } = r;
  if (r.headers = m = gt.from(m), r.url = sh(mh(r.baseURL, r.url, r.allowAbsoluteUrls), i.params, i.paramsSerializer), g && m.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), O.isFormData(s)) {
    if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (O.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, R]) => {
        y.includes(b.toLowerCase()) && m.set(b, R);
      });
    }
  }
  if (ut.hasStandardBrowserEnv && (c && O.isFunction(c) && (c = c(r)), c || c !== !1 && Qv(r.url))) {
    const p = o && d && Zv.read(d);
    p && m.set(o, p);
  }
  return r;
}, $v = typeof XMLHttpRequest < "u", Fv = $v && function(i) {
  return new Promise(function(s, c) {
    const o = hh(i);
    let d = o.data;
    const m = gt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, R, z, U, C;
    function B() {
      U && U(), C && C(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let j = new XMLHttpRequest();
    j.open(o.method.toUpperCase(), o.url, !0), j.timeout = o.timeout;
    function Q() {
      if (!j)
        return;
      const K = gt.from(
        "getAllResponseHeaders" in j && j.getAllResponseHeaders()
      ), le = {
        data: !g || g === "text" || g === "json" ? j.responseText : j.response,
        status: j.status,
        statusText: j.statusText,
        headers: K,
        config: i,
        request: j
      };
      dh(function(W) {
        s(W), B();
      }, function(W) {
        c(W), B();
      }, le), j = null;
    }
    "onloadend" in j ? j.onloadend = Q : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(Q);
    }, j.onabort = function() {
      j && (c(new re("Request aborted", re.ECONNABORTED, i, j)), j = null);
    }, j.onerror = function(P) {
      const le = P && P.message ? P.message : "Network Error", me = new re(le, re.ERR_NETWORK, i, j);
      me.event = P || null, c(me), j = null;
    }, j.ontimeout = function() {
      let P = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const le = o.transitional || ch;
      o.timeoutErrorMessage && (P = o.timeoutErrorMessage), c(new re(
        P,
        le.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        i,
        j
      )), j = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in j && O.forEach(m.toJSON(), function(P, le) {
      j.setRequestHeader(le, P);
    }), O.isUndefined(o.withCredentials) || (j.withCredentials = !!o.withCredentials), g && g !== "json" && (j.responseType = o.responseType), y && ([z, C] = Vu(y, !0), j.addEventListener("progress", z)), p && j.upload && ([R, U] = Vu(p), j.upload.addEventListener("progress", R), j.upload.addEventListener("loadend", U)), (o.cancelToken || o.signal) && (b = (K) => {
      j && (c(!K || K.type ? new un(null, i, j) : K), j.abort(), j = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const Z = Gv(o.url);
    if (Z && ut.protocols.indexOf(Z) === -1) {
      c(new re("Unsupported protocol " + Z + ":", re.ERR_BAD_REQUEST, i));
      return;
    }
    j.send(d || null);
  });
}, Wv = (i, r) => {
  const { length: s } = i = i ? i.filter(Boolean) : [];
  if (r || s) {
    let c = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        c.abort(b instanceof re ? b : new un(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new re(`timeout ${r} of ms exceeded`, re.ETIMEDOUT));
    }, r);
    const g = () => {
      i && (m && clearTimeout(m), m = null, i.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), i = null);
    };
    i.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = c;
    return p.unsubscribe = () => O.asap(g), p;
  }
}, Iv = function* (i, r) {
  let s = i.byteLength;
  if (s < r) {
    yield i;
    return;
  }
  let c = 0, o;
  for (; c < s; )
    o = c + r, yield i.slice(c, o), c = o;
}, Pv = async function* (i, r) {
  for await (const s of eb(i))
    yield* Iv(s, r);
}, eb = async function* (i) {
  if (i[Symbol.asyncIterator]) {
    yield* i;
    return;
  }
  const r = i.getReader();
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
}, gm = (i, r, s, c) => {
  const o = Pv(i, r);
  let d = 0, m, g = (p) => {
    m || (m = !0, c && c(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: b } = await o.next();
        if (y) {
          g(), p.close();
          return;
        }
        let R = b.byteLength;
        if (s) {
          let z = d += R;
          s(z);
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
}, pm = 64 * 1024, { isFunction: Du } = O, tb = (({ Request: i, Response: r }) => ({
  Request: i,
  Response: r
}))(O.global), {
  ReadableStream: vm,
  TextEncoder: bm
} = O.global, Sm = (i, ...r) => {
  try {
    return !!i(...r);
  } catch {
    return !1;
  }
}, lb = (i) => {
  i = O.merge.call({
    skipUndefined: !0
  }, tb, i);
  const { fetch: r, Request: s, Response: c } = i, o = r ? Du(r) : typeof fetch == "function", d = Du(s), m = Du(c);
  if (!o)
    return !1;
  const g = o && Du(vm), p = o && (typeof bm == "function" ? /* @__PURE__ */ ((C) => (B) => C.encode(B))(new bm()) : async (C) => new Uint8Array(await new s(C).arrayBuffer())), y = d && g && Sm(() => {
    let C = !1;
    const B = new s(ut.origin, {
      body: new vm(),
      method: "POST",
      get duplex() {
        return C = !0, "half";
      }
    }).headers.has("Content-Type");
    return C && !B;
  }), b = m && g && Sm(() => O.isReadableStream(new c("").body)), R = {
    stream: b && ((C) => C.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
    !R[C] && (R[C] = (B, j) => {
      let Q = B && B[C];
      if (Q)
        return Q.call(B);
      throw new re(`Response type '${C}' is not supported`, re.ERR_NOT_SUPPORT, j);
    });
  });
  const z = async (C) => {
    if (C == null)
      return 0;
    if (O.isBlob(C))
      return C.size;
    if (O.isSpecCompliantForm(C))
      return (await new s(ut.origin, {
        method: "POST",
        body: C
      }).arrayBuffer()).byteLength;
    if (O.isArrayBufferView(C) || O.isArrayBuffer(C))
      return C.byteLength;
    if (O.isURLSearchParams(C) && (C = C + ""), O.isString(C))
      return (await p(C)).byteLength;
  }, U = async (C, B) => {
    const j = O.toFiniteNumber(C.getContentLength());
    return j ?? z(B);
  };
  return async (C) => {
    let {
      url: B,
      method: j,
      data: Q,
      signal: Z,
      cancelToken: K,
      timeout: P,
      onDownloadProgress: le,
      onUploadProgress: me,
      responseType: W,
      headers: $,
      withCredentials: he = "same-origin",
      fetchOptions: oe
    } = hh(C), Ie = r || fetch;
    W = W ? (W + "").toLowerCase() : "text";
    let ve = Wv([Z, K && K.toAbortSignal()], P), De = null;
    const Ye = ve && ve.unsubscribe && (() => {
      ve.unsubscribe();
    });
    let Xe;
    try {
      if (me && y && j !== "get" && j !== "head" && (Xe = await U($, Q)) !== 0) {
        let Ne = new s(B, {
          method: "POST",
          body: Q,
          duplex: "half"
        }), E;
        if (O.isFormData(Q) && (E = Ne.headers.get("content-type")) && $.setContentType(E), Ne.body) {
          const [L, V] = mm(
            Xe,
            Vu(hm(me))
          );
          Q = gm(Ne.body, pm, L, V);
        }
      }
      O.isString(he) || (he = he ? "include" : "omit");
      const G = d && "credentials" in s.prototype, X = {
        ...oe,
        signal: ve,
        method: j.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: Q,
        duplex: "half",
        credentials: G ? he : void 0
      };
      De = d && new s(B, X);
      let k = await (d ? Ie(De, oe) : Ie(B, X));
      const ie = b && (W === "stream" || W === "response");
      if (b && (le || ie && Ye)) {
        const Ne = {};
        ["status", "statusText", "headers"].forEach((Y) => {
          Ne[Y] = k[Y];
        });
        const E = O.toFiniteNumber(k.headers.get("content-length")), [L, V] = le && mm(
          E,
          Vu(hm(le), !0)
        ) || [];
        k = new c(
          gm(k.body, pm, L, () => {
            V && V(), Ye && Ye();
          }),
          Ne
        );
      }
      W = W || "text";
      let ce = await R[O.findKey(R, W) || "text"](k, C);
      return !ie && Ye && Ye(), await new Promise((Ne, E) => {
        dh(Ne, E, {
          data: ce,
          headers: gt.from(k.headers),
          status: k.status,
          statusText: k.statusText,
          config: C,
          request: De
        });
      });
    } catch (G) {
      throw Ye && Ye(), G && G.name === "TypeError" && /Load failed|fetch/i.test(G.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, C, De),
        {
          cause: G.cause || G
        }
      ) : re.from(G, G && G.code, C, De);
    }
  };
}, ab = /* @__PURE__ */ new Map(), yh = (i) => {
  let r = i && i.env || {};
  const { fetch: s, Request: c, Response: o } = r, d = [
    c,
    o,
    s
  ];
  let m = d.length, g = m, p, y, b = ab;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : lb(r)), b = y;
  return y;
};
yh();
const Gc = {
  http: Sv,
  xhr: Fv,
  fetch: {
    get: yh
  }
};
O.forEach(Gc, (i, r) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: r });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: r });
  }
});
const Em = (i) => `- ${i}`, nb = (i) => O.isFunction(i) || i === null || i === !1;
function ib(i, r) {
  i = O.isArray(i) ? i : [i];
  const { length: s } = i;
  let c, o;
  const d = {};
  for (let m = 0; m < s; m++) {
    c = i[m];
    let g;
    if (o = c, !nb(c) && (o = Gc[(g = String(c)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (O.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + m] = o;
  }
  if (!o) {
    const m = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = s ? m.length > 1 ? `since :
` + m.map(Em).join(`
`) : " " + Em(m[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const gh = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ib,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Gc
};
function wc(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new un(null, i);
}
function xm(i) {
  return wc(i), i.headers = gt.from(i.headers), i.data = Rc.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), gh.getAdapter(i.adapter || mi.adapter, i)(i).then(function(c) {
    return wc(i), c.data = Rc.call(
      i,
      i.transformResponse,
      c
    ), c.headers = gt.from(c.headers), c;
  }, function(c) {
    return fh(c) || (wc(i), c && c.response && (c.response.data = Rc.call(
      i,
      i.transformResponse,
      c.response
    ), c.response.headers = gt.from(c.response.headers))), Promise.reject(c);
  });
}
const ph = "1.13.2", Fu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, r) => {
  Fu[i] = function(c) {
    return typeof c === i || "a" + (r < 1 ? "n " : " ") + i;
  };
});
const Rm = {};
Fu.transitional = function(r, s, c) {
  function o(d, m) {
    return "[Axios v" + ph + "] Transitional option '" + d + "'" + m + (c ? ". " + c : "");
  }
  return (d, m, g) => {
    if (r === !1)
      throw new re(
        o(m, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !Rm[m] && (Rm[m] = !0, console.warn(
      o(
        m,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, m, g) : !0;
  };
};
Fu.spelling = function(r) {
  return (s, c) => (console.warn(`${c} is likely a misspelling of ${r}`), !0);
};
function ub(i, r, s) {
  if (typeof i != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(i);
  let o = c.length;
  for (; o-- > 0; ) {
    const d = c[o], m = r[d];
    if (m) {
      const g = i[d], p = g === void 0 || m(g, d, i);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Yu = {
  assertOptions: ub,
  validators: Fu
}, $t = Yu.validators;
let da = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new fm(),
      response: new fm()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = ma(this.defaults, s);
    const { transitional: c, paramsSerializer: o, headers: d } = s;
    c !== void 0 && Yu.assertOptions(c, {
      silentJSONParsing: $t.transitional($t.boolean),
      forcedJSONParsing: $t.transitional($t.boolean),
      clarifyTimeoutError: $t.transitional($t.boolean)
    }, !1), o != null && (O.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : Yu.assertOptions(o, {
      encode: $t.function,
      serialize: $t.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), Yu.assertOptions(s, {
      baseUrl: $t.spelling("baseURL"),
      withXsrfToken: $t.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let m = d && O.merge(
      d.common,
      d[s.method]
    );
    d && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete d[C];
      }
    ), s.headers = gt.concat(m, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(B) {
      typeof B.runWhen == "function" && B.runWhen(s) === !1 || (p = p && B.synchronous, g.unshift(B.fulfilled, B.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(B) {
      y.push(B.fulfilled, B.rejected);
    });
    let b, R = 0, z;
    if (!p) {
      const C = [xm.bind(this), void 0];
      for (C.unshift(...g), C.push(...y), z = C.length, b = Promise.resolve(s); R < z; )
        b = b.then(C[R++], C[R++]);
      return b;
    }
    z = g.length;
    let U = s;
    for (; R < z; ) {
      const C = g[R++], B = g[R++];
      try {
        U = C(U);
      } catch (j) {
        B.call(this, j);
        break;
      }
    }
    try {
      b = xm.call(this, U);
    } catch (C) {
      return Promise.reject(C);
    }
    for (R = 0, z = y.length; R < z; )
      b = b.then(y[R++], y[R++]);
    return b;
  }
  getUri(r) {
    r = ma(this.defaults, r);
    const s = mh(r.baseURL, r.url, r.allowAbsoluteUrls);
    return sh(s, r.params, r.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(r) {
  da.prototype[r] = function(s, c) {
    return this.request(ma(c || {}, {
      method: r,
      url: s,
      data: (c || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(r) {
  function s(c) {
    return function(d, m, g) {
      return this.request(ma(g || {}, {
        method: r,
        headers: c ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  da.prototype[r] = s(), da.prototype[r + "Form"] = s(!0);
});
let rb = class vh {
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
      const m = new Promise((g) => {
        c.subscribe(g), d = g;
      }).then(o);
      return m.cancel = function() {
        c.unsubscribe(d);
      }, m;
    }, r(function(d, m, g) {
      c.reason || (c.reason = new un(d, m, g), s(c.reason));
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
      token: new vh(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function sb(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function cb(i) {
  return O.isObject(i) && i.isAxiosError === !0;
}
const Mc = {
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
Object.entries(Mc).forEach(([i, r]) => {
  Mc[r] = i;
});
function bh(i) {
  const r = new da(i), s = Fm(da.prototype.request, r);
  return O.extend(s, da.prototype, r, { allOwnKeys: !0 }), O.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(o) {
    return bh(ma(i, o));
  }, s;
}
const Oe = bh(mi);
Oe.Axios = da;
Oe.CanceledError = un;
Oe.CancelToken = rb;
Oe.isCancel = fh;
Oe.VERSION = ph;
Oe.toFormData = $u;
Oe.AxiosError = re;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(r) {
  return Promise.all(r);
};
Oe.spread = sb;
Oe.isAxiosError = cb;
Oe.mergeConfig = ma;
Oe.AxiosHeaders = gt;
Oe.formToJSON = (i) => oh(O.isHTMLForm(i) ? new FormData(i) : i);
Oe.getAdapter = gh.getAdapter;
Oe.HttpStatusCode = Mc;
Oe.default = Oe;
const {
  Axios: Cb,
  AxiosError: Ab,
  CanceledError: _b,
  isCancel: zb,
  CancelToken: Nb,
  VERSION: Ob,
  all: Mb,
  Cancel: jb,
  isAxiosError: Ub,
  spread: Db,
  toFormData: Bb,
  AxiosHeaders: Lb,
  HttpStatusCode: Hb,
  formToJSON: qb,
  getAdapter: Yb,
  mergeConfig: Xb
} = Oe, ob = "https://dev-demo-env.colibrilearning.com", rn = (i) => {
  const r = i.startsWith("/") ? i : `/${i}`;
  return `${ob}${r}`;
}, fb = async (i) => {
  try {
    return (await Oe.get(rn("global/subsidiaries")))?.data?.find((c) => c?.siteURL?.includes(i))?.subsidiaryId;
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function hi() {
  const i = localStorage.getItem("brand_data");
  if (!i)
    return {};
  const r = JSON.parse(i), s = await fb(r?.domain);
  return {
    "X-Brand-Id": r?.id,
    "X-Subsidiary-Id": s?.toString(),
    "X-Brand-Domain": r?.domain
  };
}
const db = async (i, r) => {
  const s = rn("api/auth"), c = { username: i, password: r };
  try {
    return (await Oe.post(s, c, {
      headers: await hi()
    })).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, mb = async (i) => {
  const r = rn("api/register");
  try {
    return (await Oe.post(r, i, {
      headers: await hi()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 500 ? new Error("Registration failed. Please try again.") : s.message ? new Error(s.message) : new Error("Registration failed");
  }
}, Vc = async (i) => {
  const r = rn("api/check-email");
  try {
    return (await Oe.post(r, { email: i }, {
      headers: await hi()
    })).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, wm = async (i) => {
  const r = rn("api/forgot-password"), s = { email: i };
  try {
    return (await Oe.post(r, s, {
      headers: await hi()
    })).data;
  } catch (c) {
    throw console.error("Error sending password reset:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 404 ? new Error("We couldn't find an account with that email.") : c.message ? new Error(c.message) : new Error("Failed to send password reset link");
  }
}, hb = async (i) => {
  const r = rn("api/refresh"), s = { refresh_token: i };
  try {
    return (await Oe.post(r, s, {
      headers: await hi()
    })).data;
  } catch (c) {
    throw console.error("Error during token refresh:", c), c;
  }
}, Tc = (i, r) => {
  if (r || (r = localStorage.getItem("x_credential") || localStorage.getItem("X-Credential")), !r)
    return i;
  try {
    const s = new URL(i);
    return s.searchParams.set("xcred", r), s.toString();
  } catch {
    const c = i.includes("?") ? "&" : "?";
    return `${i}${c}xcred=${encodeURIComponent(r)}`;
  }
}, yb = (i) => {
  try {
    const r = document.cookie.split(";").find((m) => m.trim().startsWith("X-Credential=")), s = document.cookie.split(";").find((m) => m.trim().startsWith("access_token="));
    let c = null, o = !1;
    if (s && (c = s.split("=")[1] || null), r && (o = !0), c || (c = localStorage.getItem("access_token")), o || (o = !!localStorage.getItem("x_credential")), !c || !o)
      return !1;
    const d = localStorage.getItem("access_token_expires");
    if (d && Date.now() >= parseInt(d))
      return !1;
    try {
      const m = Gu(c), g = Math.floor(Date.now() / 1e3);
      return !(!m.exp || g >= m.exp);
    } catch (m) {
      return console.error("[checkTokenAndRedirect] Token decode error:", m), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, gb = () => {
  try {
    const i = localStorage.getItem("refresh_token"), r = localStorage.getItem("refresh_token_time");
    if (!i || !r)
      return !1;
    const s = 10080 * 60 * 1e3;
    return Date.now() - parseInt(r) < s;
  } catch (i) {
    return console.error("[isRefreshTokenValid] Error:", i), !1;
  }
}, Sh = async (i, r, s = !0) => {
  const c = await db(i, r), { tokens: o, userinfo: d, x_credential: m } = c;
  if (o.access_token) {
    const g = Gu(o.access_token), p = (g.exp || 0) - Math.floor(Date.now() / 1e3);
    ii("access_token", o.access_token, p, !0);
    const y = m || g.x_credentials;
    y && ii("X-Credential", y, p, !1), localStorage.setItem("access_token", o.access_token), localStorage.setItem("access_token_expires", (Date.now() + p * 1e3).toString()), localStorage.setItem("refresh_token", o.refresh_token);
    const b = 720 * 60 * 60;
    ii("refresh_token", o.refresh_token, b, !0), y && localStorage.setItem("x_credential", y), d && localStorage.setItem("user_info", JSON.stringify({
      email: d.email,
      name: d.name || `${d.given_name || ""} ${d.family_name || ""}`.trim(),
      studentId: d.studentId || d.student_id
    })), s && o.refresh_token ? localStorage.setItem("refresh_token_time", Date.now().toString()) : localStorage.removeItem("refresh_token_time");
  }
  return o;
}, Wu = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", pb = ({
  onSuccess: i,
  onError: r,
  handleClose: s,
  onSignIn: c,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [g, p] = T.useState(m), [y, b] = T.useState(""), [R, z] = T.useState(""), [U, C] = T.useState(""), [B, j] = T.useState(!1), [Q, Z] = T.useState(""), [K, P] = T.useState(""), [le, me] = T.useState(!1), [W, $] = T.useState(!1), [he, oe] = T.useState(!1), [Ie, ve] = T.useState(!1), [De, Ye] = T.useState(!1), [Xe, G] = T.useState(!1), [X, k] = T.useState(!1), [ie, ce] = T.useState(""), [Ne, E] = T.useState("info"), L = T.useRef(null), V = T.useRef(null), Y = {
    length: U.length >= 9 && U.length <= 15,
    hasNumber: /[0-9]/.test(U),
    hasUppercase: /[A-Z]/.test(U),
    hasLowercase: /[a-z]/.test(U),
    hasSpecialChar: /[!@#$%^&*._-]/.test(U),
    onlyAllowedChars: /^[A-Za-z0-9!@#$%^&*._-]+$/.test(U) || U === "",
    differentFromUsername: g ? U !== g && U !== g.split("@")[0] : !0
  }, ae = ((Se) => {
    if (!Se) return { strength: "", color: "", width: "0%" };
    if (Y.length && Y.hasNumber && Y.hasUppercase && Y.hasLowercase && Y.hasSpecialChar && Y.onlyAllowedChars && Y.differentFromUsername)
      return { strength: "Strong", color: "#10B981", width: "100%" };
    let $e = 0;
    return Y.length && $e++, Y.hasNumber && $e++, Y.hasUppercase && $e++, Y.hasLowercase && $e++, Y.hasSpecialChar && $e++, Y.onlyAllowedChars && $e++, Y.differentFromUsername && $e++, $e <= 2 ? { strength: "Weak", color: "#EF4444", width: "25%" } : { strength: "Good", color: "#10B981", width: "60%" };
  })(U), be = (Se) => Se ? Se.length < 9 || Se.length > 15 ? { isValid: !1, error: "Password must be 9-15 characters long" } : /[A-Z]/.test(Se) ? /[a-z]/.test(Se) ? /[0-9]/.test(Se) ? /[!@#$%^&*._-]/.test(Se) ? /^[A-Za-z0-9!@#$%^&*._-]+$/.test(Se) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: "Password contains invalid characters. Only !@#$%^&*._- are allowed"
  } : {
    isValid: !1,
    error: "Password must contain at least one special character (!@#$%^&*._-)"
  } : {
    isValid: !1,
    error: "Password must contain at least one number"
  } : {
    isValid: !1,
    error: "Password must contain at least one lowercase letter"
  } : {
    isValid: !1,
    error: "Password must contain at least one uppercase letter"
  } : { isValid: !1, error: "Password is required" };
  T.useEffect(() => {
    if (V.current && clearTimeout(V.current), !g) {
      oe(!1), ve(!1), G(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      oe(!1), ve(!1);
      return;
    }
    return V.current = setTimeout(async () => {
      Ye(!0);
      try {
        (await Vc(g)).exists ? (ve(!0), oe(!0)) : (ve(!1), oe(!1));
      } catch (pt) {
        console.error("[CreateAccount] Email check failed:", pt), G(!0), oe(!0), ve(!1);
      } finally {
        Ye(!1);
      }
    }, 500), () => {
      V.current && clearTimeout(V.current);
    };
  }, [g]);
  const Be = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  T.useEffect(() => {
    const Se = (pt) => {
      pt.key === "Escape" && s();
    };
    return document.addEventListener("keydown", Se), () => document.removeEventListener("keydown", Se);
  }, [s]);
  const kl = (Se) => {
    Se.target === L.current && s();
  }, ya = async (Se) => {
    if (Se.preventDefault(), $(!0), !g || !y || !R) {
      r("Please fill in all required fields");
      return;
    }
    const pt = be(U);
    if (!pt.isValid) {
      P(pt.error), r(pt.error), j(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Z("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    j(!0), Z(""), ce("");
    try {
      const Ft = g.split("@")[0], vl = await mb({
        username: Ft,
        email: g,
        firstName: y,
        lastName: R,
        password: U
      });
      console.log(
        "[CreateAccount] Registration successful:",
        vl.message
      );
      try {
        const Ql = await Sh(g, U, X);
        i(Ql);
      } catch (Ql) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          Ql
        );
        const yi = Ql instanceof Error ? Ql.message : "Auto-login failed";
        r(yi);
      }
    } catch (Ft) {
      console.error("[CreateAccount] Registration failed:", Ft);
      const vl = Ft instanceof Error ? Ft.message : "Registration failed";
      ce(vl), E("error"), r(vl);
    } finally {
      j(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    ie && /* @__PURE__ */ v.jsx(
      _c,
      {
        type: Ne,
        message: ie,
        duration: 5e3,
        onClose: () => ce("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: L,
        onMouseDown: kl,
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
                Ht,
                {
                  onClick: s,
                  variant: "link",
                  className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
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
              /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
                /* @__PURE__ */ v.jsx("h2", { id: "create-account-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-1!", children: o }),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
              ] }),
              /* @__PURE__ */ v.jsxs("form", { onSubmit: ya, className: "space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  oa,
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    value: g,
                    onChange: (Se) => {
                      p(Se.target.value), Z("");
                    },
                    placeholder: "Enter email address",
                    disabled: B,
                    className: "w-full!",
                    autoComplete: "email",
                    error: W && !g ? "Required" : Q || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      De && /* @__PURE__ */ v.jsx($m, {}),
                      !De && !Ie && !Xe && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          src: Wu,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                he && Ie && !Xe && /* @__PURE__ */ v.jsx(
                  en,
                  {
                    type: "info",
                    message: "We found an existing account.",
                    actionText: "Want to sign in instead?",
                    onActionClick: () => {
                      oe(!1), c(g);
                    },
                    onClose: () => oe(!1),
                    className: "mb-4!"
                  }
                ),
                he && Xe && /* @__PURE__ */ v.jsx(
                  en,
                  {
                    type: "error",
                    message: "Unable to verify email. You can still proceed with registration.",
                    onClose: () => {
                      oe(!1), G(!1);
                    },
                    className: "mb-4!"
                  }
                ),
                /* @__PURE__ */ v.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    oa,
                    {
                      label: "First Name",
                      id: "firstName",
                      type: "text",
                      value: y,
                      onChange: (Se) => b(Se.target.value),
                      placeholder: "First Name",
                      disabled: B,
                      className: "w-full!",
                      autoComplete: "given-name",
                      error: W && !y ? "Required" : ""
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    oa,
                    {
                      label: "Last Name",
                      id: "lastName",
                      type: "text",
                      value: R,
                      onChange: (Se) => z(Se.target.value),
                      placeholder: "Last Name",
                      disabled: B,
                      className: "w-full!",
                      autoComplete: "family-name",
                      error: W && !R ? "Required" : ""
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ v.jsx(
                  oa,
                  {
                    label: "Password",
                    id: "password",
                    type: le ? "text" : "password",
                    value: U,
                    onChange: (Se) => {
                      C(Se.target.value), P("");
                    },
                    placeholder: "Enter Password...",
                    disabled: B,
                    className: "w-full!",
                    autoComplete: "new-password",
                    error: K,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => me(!le),
                        className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                        tabIndex: -1,
                        "aria-label": le ? "Hide password" : "Show password",
                        children: le ? /* @__PURE__ */ v.jsx(
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
                U && /* @__PURE__ */ v.jsxs("div", { className: "mt-2! mb-4!", children: [
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
                        Y.length ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: Y.length ? "text-green-600!" : "text-gray-500!", children: "be 9-15 characters" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        Y.hasNumber ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: Y.hasNumber ? "text-green-600!" : "text-gray-500!", children: "have at least one number" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        Y.hasUppercase ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: Y.hasUppercase ? "text-green-600!" : "text-gray-500!", children: "have at least one uppercase letter" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        Y.hasSpecialChar ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: Y.hasSpecialChar ? "text-green-600!" : "text-gray-500!", children: "have at least one special character" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        Y.onlyAllowedChars ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: Y.onlyAllowedChars ? "text-green-600!" : "text-gray-500!", children: "use only the following special characters !@#$%^&*._-" })
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "flex! items-center! text-sm!", children: [
                        Y.differentFromUsername ? /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-green-500!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }) : /* @__PURE__ */ v.jsx("svg", { className: "w-4! h-4! mr-2! text-gray-400!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z", clipRule: "evenodd" }) }),
                        /* @__PURE__ */ v.jsx("span", { className: Y.differentFromUsername ? "text-green-600!" : "text-gray-500!", children: "be different from username" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsxs("label", { className: "flex! items-center! m-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: X,
                      onChange: (Se) => k(Se.target.checked),
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
                  Ht,
                  {
                    type: "submit",
                    disabled: B || Ie || !Be,
                    className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: B ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                  Ht,
                  {
                    type: "button",
                    variant: "outline",
                    onClick: () => c(g),
                    disabled: B,
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
      _c,
      {
        message: ie,
        type: Ne,
        onClose: () => ce("")
      }
    )
  ] });
}, vb = ({
  email: i,
  loading: r,
  onResendLink: s,
  onBack: c,
  onClose: o
}) => {
  const d = T.useRef(null);
  T.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && o();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [o]);
  const m = (g) => {
    g.target === d.current && o();
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Ht,
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
            src: Wu,
            alt: "Success",
            "aria-hidden": "true",
            className: "w-16! h-16!"
          }
        ) }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-success-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: i }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          Ht,
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
          Ht,
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
}, bb = ({
  email: i,
  onBack: r,
  handleClose: s
}) => {
  const [c, o] = T.useState(i || ""), [d, m] = T.useState(!1), [g, p] = T.useState(!1), [y, b] = T.useState(""), [R, z] = T.useState(!1), [U, C] = T.useState(!1), [B, j] = T.useState(!1), [Q, Z] = T.useState(!1), K = T.useRef(null);
  T.useEffect(() => {
    const W = ($) => {
      $.key === "Escape" && s();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [s]), T.useEffect(() => {
    const $ = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c);
    if (j($), !$ || !c) {
      C(!1), Z(!1);
      return;
    }
    const he = setTimeout(async () => {
      z(!0);
      try {
        const oe = await Vc(c);
        console.log("[ResetPassword] Email check response:", oe), C(oe.exists), console.log("[ResetPassword] Email exists:", oe.exists);
      } catch (oe) {
        console.error("[ResetPassword] Error checking email:", oe), Z(!0), C(!1);
      } finally {
        z(!1);
      }
    }, 500);
    return () => clearTimeout(he);
  }, [c]);
  const P = (W) => {
    W.target === K.current && s();
  }, le = async (W) => {
    if (W.preventDefault(), !c) {
      b("Email is required");
      return;
    }
    m(!0), b("");
    try {
      await wm(c), console.log("[ResetPassword] Reset link sent to:", c), p(!0);
    } catch ($) {
      console.error("[ResetPassword] Failed to send reset link:", $);
      const he = $ instanceof Error ? $.message : "Failed to send reset link. Please try again.";
      b(he);
    } finally {
      m(!1);
    }
  }, me = async () => {
    m(!0), b("");
    try {
      await wm(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (W) {
      console.error("[ResetPassword] Failed to resend reset link:", W), p(!1);
      const $ = W instanceof Error ? W.message : "Failed to resend reset link. Please try again.";
      b($);
    } finally {
      m(!1);
    }
  };
  return g ? /* @__PURE__ */ v.jsx(
    vb,
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
      ref: K,
      onMouseDown: P,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Ht,
          {
            onClick: s,
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
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-password-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-2!", children: "Reset your password" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ v.jsxs("form", { onSubmit: le, className: "space-y-4!", "aria-label": "Reset password form", children: [
          /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
            oa,
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
                R && /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!",
                    role: "status",
                    "aria-label": "Checking email"
                  }
                ),
                !R && U && B && !Q && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: Wu,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          Q && /* @__PURE__ */ v.jsx(
            en,
            {
              type: "error",
              message: "Unable to verify email. Please try again.",
              onClose: () => Z(!1),
              className: "mb-4!"
            }
          ),
          y && /* @__PURE__ */ v.jsx(
            en,
            {
              type: "error",
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Ht,
            {
              type: "submit",
              disabled: d || !c || !B || !U,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: c, isEmailValid: B, emailExists: U });
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
            Ht,
            {
              type: "button",
              variant: "outline",
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
}, Sb = ({
  onSuccess: i,
  onError: r,
  handleClose: s,
  authority: c,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = ""
}) => {
  const [g, p] = T.useState(m), [y, b] = T.useState(""), [R, z] = T.useState(!1), [U, C] = T.useState(!1), [B, j] = T.useState(""), [Q, Z] = T.useState(!1), [K, P] = T.useState(!1), [le, me] = T.useState(!1), [W, $] = T.useState(!1), [he, oe] = T.useState(!1), [Ie, ve] = T.useState(!1), [De, Ye] = T.useState(!1), [Xe, G] = T.useState(""), [X, k] = T.useState("info"), ie = T.useRef(null), ce = T.useRef(null);
  T.useEffect(() => {
    if (ce.current && clearTimeout(ce.current), !g) {
      $(!1), ve(!1), Ye(!1);
      return;
    }
    const Y = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!g.includes("@")) {
      $(!0), ve(!1);
      return;
    }
    if (!Y.test(g)) {
      $(!1), ve(!1);
      return;
    }
    return ce.current = setTimeout(async () => {
      oe(!0);
      try {
        (await Vc(g)).exists ? ($(!0), ve(!1)) : ($(!1), ve(!0));
      } catch (te) {
        console.error("[EmbeddedLogin] Email check failed:", te), Ye(!0), ve(!0), $(!1);
      } finally {
        oe(!1);
      }
    }, 500), () => {
      ce.current && clearTimeout(ce.current);
    };
  }, [g]);
  const E = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  T.useEffect(() => {
    const Y = (te) => {
      te.key === "Escape" && s();
    };
    return document.addEventListener("keydown", Y), () => document.removeEventListener("keydown", Y);
  }, [s]);
  const L = (Y) => {
    Y.target === ie.current && s();
  }, V = async (Y) => {
    if (Y.preventDefault(), !g || !y) {
      j("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    z(!0), j("");
    try {
      const te = await Sh(g, y, Q);
      i(te);
    } catch (te) {
      console.error("[EmbeddedLogin] Login failed:", te);
      const ae = te instanceof Error ? te.message : "Authentication failed";
      j(ae), G(ae), k("error"), r(ae);
    } finally {
      z(!1);
    }
  };
  return le ? /* @__PURE__ */ v.jsx(
    bb,
    {
      email: g,
      onBack: () => me(!1),
      handleClose: s
    }
  ) : K ? /* @__PURE__ */ v.jsx(
    pb,
    {
      onSuccess: (Y) => {
        P(!1), i(Y);
      },
      onError: r,
      handleClose: s,
      onSignIn: (Y) => {
        P(!1), Y && p(Y);
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
            Ht,
            {
              onClick: s,
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
          /* @__PURE__ */ v.jsxs("div", { className: "mb-3! text-center!", children: [
            /* @__PURE__ */ v.jsx("h2", { id: "login-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
            /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ v.jsxs("form", { onSubmit: V, className: "space-y-2!", "aria-label": "Login form", children: [
            /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
              oa,
              {
                label: "Email or Username",
                id: "email",
                type: "text",
                value: g,
                onChange: (Y) => p(Y.target.value),
                placeholder: "Enter email or username",
                disabled: R,
                className: "w-full!",
                autoComplete: "username",
                endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  he && /* @__PURE__ */ v.jsx($m, {}),
                  !he && W && E && !De && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: Wu,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Ie && !W && E && !De && /* @__PURE__ */ v.jsx(
              en,
              {
                type: "info",
                message: "We couldn't find an account with this email.",
                actionText: "Let's create one to continue?",
                onActionClick: () => {
                  ve(!1), P(!0);
                },
                onClose: () => ve(!1),
                className: "mb-4!"
              }
            ),
            Ie && De && /* @__PURE__ */ v.jsx(
              en,
              {
                type: "error",
                message: "Unable to verify email. You can still proceed with login.",
                onClose: () => {
                  ve(!1), Ye(!1);
                },
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ v.jsx(
              oa,
              {
                label: "Password",
                id: "password",
                type: U ? "text" : "password",
                value: y,
                onChange: (Y) => {
                  b(Y.target.value), j("");
                },
                placeholder: "Enter Password...",
                disabled: R,
                className: "w-full!",
                autoComplete: "current-password",
                error: B,
                endIcon: /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => C(!U),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    "aria-label": U ? "Hide password" : "Show password",
                    children: U ? /* @__PURE__ */ v.jsx(
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
                    checked: Q,
                    onChange: (Y) => Z(Y.target.checked),
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
                  onClick: (Y) => {
                    Y.preventDefault(), me(!0);
                  },
                  children: "Forgot Password?"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              Ht,
              {
                type: "submit",
                disabled: R || !g,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: R ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
              Ht,
              {
                type: "button",
                variant: "outline",
                onClick: () => P(!0),
                disabled: R,
                className: "w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { children: "Create an Account" })
              }
            )
          ] })
        ] }),
        Xe && /* @__PURE__ */ v.jsx(
          _c,
          {
            message: Xe,
            type: X,
            onClose: () => G("")
          }
        )
      ]
    }
  );
}, Eb = (i) => {
  const { authority: r, subsidiary: s, onRedirect: c } = i;
  T.useEffect(() => {
    (async () => {
      try {
        if (yb()) {
          const b = i.redirectUrl || Uu();
          if (i.autoRedirection)
            window.location.href = Tc(b);
          else if (c && i.redirectUrl) {
            const R = i.redirectUrl || Uu(), z = localStorage.getItem("access_token");
            if (z)
              try {
                const U = Gu(z), C = {
                  access_token: z,
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
                c(R, C);
              } catch (U) {
                console.error("[App] Failed to decode access token:", U);
              }
          }
          return;
        }
        if (gb()) {
          const b = localStorage.getItem("refresh_token");
          if (b) {
            const R = await hb(b);
            if (R && R.tokens && R.tokens.access_token) {
              const z = R.tokens, U = Gu(z.access_token), C = (U.exp || 0) - Math.floor(Date.now() / 1e3);
              ii("access_token", z.access_token, C, !0), U.x_credentials && ii("X-Credential", U.x_credentials, C, !1), z.refresh_token && (localStorage.setItem("refresh_token", z.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), console.log("[App] Auto-login successful");
              const B = i.redirectUrl || Uu();
              if (c) {
                const j = {
                  access_token: z.access_token,
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
                c(B, j);
              }
              i.autoRedirection && (window.location.href = Tc(B, U.x_credentials));
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (p) {
        console.error("[App] Auto-login failed:", p), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [i.redirectUrl]), T.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const o = (g) => {
    i.handleClose && i.handleClose();
    const p = g?.userInfo?.x_credentials || g?.x_credentials, y = i.redirectUrl || Uu();
    c && c(y, g), i.autoRedirection && setTimeout(() => {
      window.location.href = Tc(y, p);
    }, 100);
  }, d = (g) => {
    console.log("[App] Embedded login error:", g);
  }, m = () => {
    i.handleClose && i.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(Vg, { children: /* @__PURE__ */ v.jsx(Vm, { path: "*", element: /* @__PURE__ */ v.jsx(T.Fragment, { children: i.showLogin && /* @__PURE__ */ v.jsx(
    Sb,
    {
      onSuccess: o,
      onError: d,
      handleClose: m,
      authority: r,
      title: i.loginTitle,
      subtitle: i.loginSubtitle
    }
  ) }) }) }) });
}, xb = {
  mckissock: 1,
  elite: 2,
  cre: 3,
  superior: 16,
  allied: 20,
  xcel: 21,
  western: 22,
  cex: 23,
  fhea: 25,
  hondros: 29,
  compucram: 31,
  rockwell: 35,
  goldcoast: 36,
  netce: 58,
  stc: 137,
  colibrigroup: 142
};
class Rb {
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
        name: c.name,
        subsidiaryId: xb[c.token] || 0
      }));
      const o = `${this.cdnBaseUrl}/${c.folder}/theme.json`, d = await fetch(o);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const m = await d.json(), g = document.documentElement;
      m.styles.forEach((p) => {
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
async function Tm(i) {
  const r = new Rb(i.cdnBaseUrl, i.shadowRoot), s = i.brandFolder || i.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (i.autoDetect) {
    const c = await r.detectBrandFromDomain();
    c && await r.loadTheme(c);
  }
  return r;
}
const Cm = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class i extends HTMLElement {
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
      if (Cm) {
        const d = document.createElement("style");
        d.textContent = Cm, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const c = this.getAttribute("subsidiary");
      c && c.trim() !== "" ? this.loadTheme(c, s) : this.loadThemeFromDomain(s);
      const o = document.createElement("div");
      s.appendChild(o), this.root = zp.createRoot(o), this.render();
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
        await Tm({
          brandFolder: s,
          shadowRoot: c
        });
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await Tm({
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
      const c = this.getAttribute("authority") || Up(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
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
      console.log("[Widget] logout() called"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"), document.cookie.split(";").forEach((c) => {
        document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
      }), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
        /* @__PURE__ */ v.jsx(mp, { children: /* @__PURE__ */ v.jsx(T.StrictMode, { children: /* @__PURE__ */ v.jsx(Eb, { ...s }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", i);
}
