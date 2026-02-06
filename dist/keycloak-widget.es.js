
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var dc = { exports: {} }, ei = {};
var K0;
function Zy() {
  if (K0) return ei;
  K0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(c, o, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), o.key !== void 0 && (h = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: i,
      type: c,
      key: h,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return ei.Fragment = r, ei.jsx = s, ei.jsxs = s, ei;
}
var J0;
function Ky() {
  return J0 || (J0 = 1, dc.exports = Zy()), dc.exports;
}
var v = Ky(), hc = { exports: {} }, ne = {}, $0;
function Jy() {
  if ($0) return ne;
  $0 = 1;
  var i = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function C(E) {
    return E === null || typeof E != "object" ? null : (E = q && E[q] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, G = {};
  function Z(E, B, V) {
    this.props = E, this.context = B, this.refs = G, this.updater = V || U;
  }
  Z.prototype.isReactComponent = {}, Z.prototype.setState = function(E, B) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, B, "setState");
  }, Z.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function K() {
  }
  K.prototype = Z.prototype;
  function P(E, B, V) {
    this.props = E, this.context = B, this.refs = G, this.updater = V || U;
  }
  var le = P.prototype = new K();
  le.constructor = P, j(le, Z.prototype), le.isPureReactComponent = !0;
  var he = Array.isArray;
  function W() {
  }
  var $ = { H: null, A: null, T: null, S: null }, me = Object.prototype.hasOwnProperty;
  function oe(E, B, V) {
    var Y = V.ref;
    return {
      $$typeof: r,
      type: E,
      key: B,
      ref: Y !== void 0 ? Y : null,
      props: V
    };
  }
  function Ie(E, B) {
    return oe(E.type, B, E.props);
  }
  function ve(E) {
    return typeof E == "object" && E !== null && E.$$typeof === r;
  }
  function De(E) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(V) {
      return B[V];
    });
  }
  var Ye = /\/+/g;
  function ke(E, B) {
    return typeof E == "object" && E !== null && E.key != null ? De("" + E.key) : B.toString(36);
  }
  function X(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(W, W) : (E.status = "pending", E.then(
          function(B) {
            E.status === "pending" && (E.status = "fulfilled", E.value = B);
          },
          function(B) {
            E.status === "pending" && (E.status = "rejected", E.reason = B);
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
  function k(E, B, V, Y, te) {
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
              return be = E._init, k(
                be(E._payload),
                B,
                V,
                Y,
                te
              );
          }
      }
    if (be)
      return te = te(E), be = Y === "" ? "." + ke(E, 0) : Y, he(te) ? (V = "", be != null && (V = be.replace(Ye, "$&/") + "/"), k(te, B, V, "", function(Vl) {
        return Vl;
      })) : te != null && (ve(te) && (te = Ie(
        te,
        V + (te.key == null || E && E.key === te.key ? "" : ("" + te.key).replace(
          Ye,
          "$&/"
        ) + "/") + be
      )), B.push(te)), 1;
    be = 0;
    var nt = Y === "" ? "." : Y + ":";
    if (he(E))
      for (var Be = 0; Be < E.length; Be++)
        Y = E[Be], ae = nt + ke(Y, Be), be += k(
          Y,
          B,
          V,
          ae,
          te
        );
    else if (Be = C(E), typeof Be == "function")
      for (E = Be.call(E), Be = 0; !(Y = E.next()).done; )
        Y = Y.value, ae = nt + ke(Y, Be++), be += k(
          Y,
          B,
          V,
          ae,
          te
        );
    else if (ae === "object") {
      if (typeof E.then == "function")
        return k(
          X(E),
          B,
          V,
          Y,
          te
        );
      throw B = String(E), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return be;
  }
  function Q(E, B, V) {
    if (E == null) return E;
    var Y = [], te = 0;
    return k(E, Y, "", "", function(ae) {
      return B.call(V, ae, te++);
    }), Y;
  }
  function ie(E) {
    if (E._status === -1) {
      var B = E._result;
      B = B(), B.then(
        function(V) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = V);
        },
        function(V) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = V);
        }
      ), E._status === -1 && (E._status = 0, E._result = B);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof i == "object" && typeof i.emit == "function") {
      i.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  }, Ne = {
    map: Q,
    forEach: function(E, B, V) {
      Q(
        E,
        function() {
          B.apply(this, arguments);
        },
        V
      );
    },
    count: function(E) {
      var B = 0;
      return Q(E, function() {
        B++;
      }), B;
    },
    toArray: function(E) {
      return Q(E, function(B) {
        return B;
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
  return ne.Activity = N, ne.Children = Ne, ne.Component = Z, ne.Fragment = c, ne.Profiler = d, ne.PureComponent = P, ne.StrictMode = o, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $, ne.__COMPILER_RUNTIME = {
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
  }, ne.cloneElement = function(E, B, V) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var Y = j({}, E.props), te = E.key;
    if (B != null)
      for (ae in B.key !== void 0 && (te = "" + B.key), B)
        !me.call(B, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && B.ref === void 0 || (Y[ae] = B[ae]);
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
      $$typeof: h,
      _context: E
    }, E;
  }, ne.createElement = function(E, B, V) {
    var Y, te = {}, ae = null;
    if (B != null)
      for (Y in B.key !== void 0 && (ae = "" + B.key), B)
        me.call(B, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (te[Y] = B[Y]);
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
  }, ne.memo = function(E, B) {
    return {
      $$typeof: S,
      type: E,
      compare: B === void 0 ? null : B
    };
  }, ne.startTransition = function(E) {
    var B = $.T, V = {};
    $.T = V;
    try {
      var Y = E(), te = $.S;
      te !== null && te(V, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(W, ce);
    } catch (ae) {
      ce(ae);
    } finally {
      B !== null && V.types !== null && (B.types = V.types), $.T = B;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return $.H.useCacheRefresh();
  }, ne.use = function(E) {
    return $.H.use(E);
  }, ne.useActionState = function(E, B, V) {
    return $.H.useActionState(E, B, V);
  }, ne.useCallback = function(E, B) {
    return $.H.useCallback(E, B);
  }, ne.useContext = function(E) {
    return $.H.useContext(E);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(E, B) {
    return $.H.useDeferredValue(E, B);
  }, ne.useEffect = function(E, B) {
    return $.H.useEffect(E, B);
  }, ne.useEffectEvent = function(E) {
    return $.H.useEffectEvent(E);
  }, ne.useId = function() {
    return $.H.useId();
  }, ne.useImperativeHandle = function(E, B, V) {
    return $.H.useImperativeHandle(E, B, V);
  }, ne.useInsertionEffect = function(E, B) {
    return $.H.useInsertionEffect(E, B);
  }, ne.useLayoutEffect = function(E, B) {
    return $.H.useLayoutEffect(E, B);
  }, ne.useMemo = function(E, B) {
    return $.H.useMemo(E, B);
  }, ne.useOptimistic = function(E, B) {
    return $.H.useOptimistic(E, B);
  }, ne.useReducer = function(E, B, V) {
    return $.H.useReducer(E, B, V);
  }, ne.useRef = function(E) {
    return $.H.useRef(E);
  }, ne.useState = function(E) {
    return $.H.useState(E);
  }, ne.useSyncExternalStore = function(E, B, V) {
    return $.H.useSyncExternalStore(
      E,
      B,
      V
    );
  }, ne.useTransition = function() {
    return $.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var F0;
function Uc() {
  return F0 || (F0 = 1, hc.exports = Jy()), hc.exports;
}
var T = Uc();
var W0 = "popstate";
function $y(i = {}) {
  function r(c, o) {
    let { pathname: d, search: h, hash: g } = c.location;
    return Ac(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : ui(o);
  }
  return Wy(
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
function Gt(i, r) {
  if (!i) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Fy() {
  return Math.random().toString(36).substring(2, 10);
}
function I0(i, r) {
  return {
    usr: i.state,
    key: i.key,
    idx: r
  };
}
function Ac(i, r, s = null, c) {
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
    key: r && r.key || c || Fy()
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
function Wy(i, r, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c, h = o.history, g = "POP", p = null, y = S();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function S() {
    return (h.state || { idx: null }).idx;
  }
  function R() {
    g = "POP";
    let j = S(), G = j == null ? null : j - y;
    y = j, p && p({ action: g, location: U.location, delta: G });
  }
  function N(j, G) {
    g = "PUSH";
    let Z = Ac(U.location, j, G);
    y = S() + 1;
    let K = I0(Z, y), P = U.createHref(Z);
    try {
      h.pushState(K, "", P);
    } catch (le) {
      if (le instanceof DOMException && le.name === "DataCloneError")
        throw le;
      o.location.assign(P);
    }
    d && p && p({ action: g, location: U.location, delta: 1 });
  }
  function q(j, G) {
    g = "REPLACE";
    let Z = Ac(U.location, j, G);
    y = S();
    let K = I0(Z, y), P = U.createHref(Z);
    h.replaceState(K, "", P), d && p && p({ action: g, location: U.location, delta: 0 });
  }
  function C(j) {
    return Iy(j);
  }
  let U = {
    get action() {
      return g;
    },
    get location() {
      return i(o, h);
    },
    listen(j) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(W0, R), p = j, () => {
        o.removeEventListener(W0, R), p = null;
      };
    },
    createHref(j) {
      return r(o, j);
    },
    createURL: C,
    encodeLocation(j) {
      let G = C(j);
      return {
        pathname: G.pathname,
        search: G.search,
        hash: G.hash
      };
    },
    push: N,
    replace: q,
    go(j) {
      return h.go(j);
    }
  };
  return U;
}
function Iy(i, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Le(s, "No window.location.(origin|href) available to create URL");
  let c = typeof i == "string" ? i : ui(i);
  return c = c.replace(/ $/, "%20"), !r && c.startsWith("//") && (c = s + c), new URL(c, s);
}
function zh(i, r, s = "/") {
  return Py(i, r, s, !1);
}
function Py(i, r, s, c) {
  let o = typeof r == "string" ? ln(r) : r, d = gl(o.pathname || "/", s);
  if (d == null)
    return null;
  let h = Nh(i);
  eg(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = fg(d);
    g = cg(
      h[p],
      y,
      c
    );
  }
  return g;
}
function Nh(i, r = [], s = [], c = "", o = !1) {
  let d = (h, g, p = o, y) => {
    let S = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    if (S.relativePath.startsWith("/")) {
      if (!S.relativePath.startsWith(c) && p)
        return;
      Le(
        S.relativePath.startsWith(c),
        `Absolute route path "${S.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), S.relativePath = S.relativePath.slice(c.length);
    }
    let R = yl([c, S.relativePath]), N = s.concat(S);
    h.children && h.children.length > 0 && (Le(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), Nh(
      h.children,
      r,
      N,
      R,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: R,
      score: rg(R, h.index),
      routesMeta: N
    });
  };
  return i.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of Oh(h.path))
        d(h, g, !0, p);
  }), r;
}
function Oh(i) {
  let r = i.split("/");
  if (r.length === 0) return [];
  let [s, ...c] = r, o = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (c.length === 0)
    return o ? [d, ""] : [d];
  let h = Oh(c.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...h), g.map(
    (p) => i.startsWith("/") && p === "" ? "/" : p
  );
}
function eg(i) {
  i.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : sg(
      r.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var tg = /^:[\w-]+$/, lg = 3, ag = 2, ng = 1, ig = 10, ug = -2, P0 = (i) => i === "*";
function rg(i, r) {
  let s = i.split("/"), c = s.length;
  return s.some(P0) && (c += ug), r && (c += ag), s.filter((o) => !P0(o)).reduce(
    (o, d) => o + (tg.test(d) ? lg : d === "" ? ng : ig),
    c
  );
}
function sg(i, r) {
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
function cg(i, r, s = !1) {
  let { routesMeta: c } = i, o = {}, d = "/", h = [];
  for (let g = 0; g < c.length; ++g) {
    let p = c[g], y = g === c.length - 1, S = d === "/" ? r : r.slice(d.length) || "/", R = ku(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      S
    ), N = p.route;
    if (!R && y && s && !c[c.length - 1].route.index && (R = ku(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      S
    )), !R)
      return null;
    Object.assign(o, R.params), h.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: yl([d, R.pathname]),
      pathnameBase: yg(
        yl([d, R.pathnameBase])
      ),
      route: N
    }), R.pathnameBase !== "/" && (d = yl([d, R.pathnameBase]));
  }
  return h;
}
function ku(i, r) {
  typeof i == "string" && (i = { path: i, caseSensitive: !1, end: !0 });
  let [s, c] = og(
    i.path,
    i.caseSensitive,
    i.end
  ), o = r.match(s);
  if (!o) return null;
  let d = o[0], h = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: c.reduce(
      (y, { paramName: S, isOptional: R }, N) => {
        if (S === "*") {
          let C = g[N] || "";
          h = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[N];
        return R && !q ? y[S] = void 0 : y[S] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: i
  };
}
function og(i, r = !1, s = !0) {
  Gt(
    i === "*" || !i.endsWith("*") || i.endsWith("/*"),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, "/*")}".`
  );
  let c = [], o = "^" + i.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (c.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return i.endsWith("*") ? (c.push({ paramName: "*" }), o += i === "*" || i === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : i !== "" && i !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), c];
}
function fg(i) {
  try {
    return i.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Gt(
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
var Mh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, dg = (i) => Mh.test(i);
function hg(i, r = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: o = ""
  } = typeof i == "string" ? ln(i) : i, d;
  if (s)
    if (dg(s))
      d = s;
    else {
      if (s.includes("//")) {
        let h = s;
        s = s.replace(/\/\/+/g, "/"), Gt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`
        );
      }
      s.startsWith("/") ? d = eh(s.substring(1), "/") : d = eh(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: gg(c),
    hash: pg(o)
  };
}
function eh(i, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return i.split("/").forEach((o) => {
    o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
  }), s.length > 1 ? s.join("/") : "/";
}
function mc(i, r, s, c) {
  return `Cannot include a '${i}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function mg(i) {
  return i.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function jh(i) {
  let r = mg(i);
  return r.map(
    (s, c) => c === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Uh(i, r, s, c = !1) {
  let o;
  typeof i == "string" ? o = ln(i) : (o = { ...i }, Le(
    !o.pathname || !o.pathname.includes("?"),
    mc("?", "pathname", "search", o)
  ), Le(
    !o.pathname || !o.pathname.includes("#"),
    mc("#", "pathname", "hash", o)
  ), Le(
    !o.search || !o.search.includes("#"),
    mc("#", "search", "hash", o)
  ));
  let d = i === "" || o.pathname === "", h = d ? "/" : o.pathname, g;
  if (h == null)
    g = s;
  else {
    let R = r.length - 1;
    if (!c && h.startsWith("..")) {
      let N = h.split("/");
      for (; N[0] === ".."; )
        N.shift(), R -= 1;
      o.pathname = N.join("/");
    }
    g = R >= 0 ? r[R] : "/";
  }
  let p = hg(o, g), y = h && h !== "/" && h.endsWith("/"), S = (d || h === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || S) && (p.pathname += "/"), p;
}
var yl = (i) => i.join("/").replace(/\/\/+/g, "/"), yg = (i) => i.replace(/\/+$/, "").replace(/^\/*/, "/"), gg = (i) => !i || i === "?" ? "" : i.startsWith("?") ? i : "?" + i, pg = (i) => !i || i === "#" ? "" : i.startsWith("#") ? i : "#" + i, vg = class {
  constructor(i, r, s, c = !1) {
    this.status = i, this.statusText = r || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function bg(i) {
  return i != null && typeof i.status == "number" && typeof i.statusText == "string" && typeof i.internal == "boolean" && "data" in i;
}
function Sg(i) {
  return i.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Dh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Bh(i, r) {
  let s = i;
  if (typeof s != "string" || !Mh.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, o = !1;
  if (Dh)
    try {
      let d = new URL(window.location.href), h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = gl(h.pathname, r);
      h.origin === d.origin && g != null ? s = g + h.search + h.hash : o = !0;
    } catch {
      Gt(
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
var Lh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Lh
);
var Eg = [
  "GET",
  ...Lh
];
new Set(Eg);
var an = T.createContext(null);
an.displayName = "DataRouter";
var Gu = T.createContext(null);
Gu.displayName = "DataRouterState";
var xg = T.createContext(!1), Hh = T.createContext({
  isTransitioning: !1
});
Hh.displayName = "ViewTransition";
var Rg = T.createContext(
  /* @__PURE__ */ new Map()
);
Rg.displayName = "Fetchers";
var wg = T.createContext(null);
wg.displayName = "Await";
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
var Dc = T.createContext(null);
Dc.displayName = "RouteError";
var qh = "REACT_ROUTER_ERROR", Tg = "REDIRECT", Cg = "ROUTE_ERROR_RESPONSE";
function Ag(i) {
  if (i.startsWith(`${qh}:${Tg}:{`))
    try {
      let r = JSON.parse(i.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function _g(i) {
  if (i.startsWith(
    `${qh}:${Cg}:{`
  ))
    try {
      let r = JSON.parse(i.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new vg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function zg(i, { relative: r } = {}) {
  Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = T.useContext(qt), { hash: o, pathname: d, search: h } = ci(i, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : yl([s, d])), c.createHref({ pathname: g, search: h, hash: o });
}
function si() {
  return T.useContext(ri) != null;
}
function ma() {
  return Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), T.useContext(ri).location;
}
var Yh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function kh(i) {
  T.useContext(qt).static || T.useLayoutEffect(i);
}
function Ng() {
  let { isDataRoute: i } = T.useContext(pl);
  return i ? Gg() : Og();
}
function Og() {
  Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let i = T.useContext(an), { basename: r, navigator: s } = T.useContext(qt), { matches: c } = T.useContext(pl), { pathname: o } = ma(), d = JSON.stringify(jh(c)), h = T.useRef(!1);
  return kh(() => {
    h.current = !0;
  }), T.useCallback(
    (p, y = {}) => {
      if (Gt(h.current, Yh), !h.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let S = Uh(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      i == null && r !== "/" && (S.pathname = S.pathname === "/" ? r : yl([r, S.pathname])), (y.replace ? s.replace : s.push)(
        S,
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
  let { matches: s } = T.useContext(pl), { pathname: c } = ma(), o = JSON.stringify(jh(s));
  return T.useMemo(
    () => Uh(
      i,
      JSON.parse(o),
      c,
      r === "path"
    ),
    [i, o, c, r]
  );
}
function Mg(i, r) {
  return Xh(i, r);
}
function Xh(i, r, s, c, o) {
  Le(
    si(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = T.useContext(qt), { matches: h } = T.useContext(pl), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", S = g ? g.pathnameBase : "/", R = g && g.route;
  {
    let Z = R && R.path || "";
    Vh(
      y,
      !R || Z.endsWith("*") || Z.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z === "/" ? "*" : `${Z}/*`}">.`
    );
  }
  let N = ma(), q;
  if (r) {
    let Z = typeof r == "string" ? ln(r) : r;
    Le(
      S === "/" || Z.pathname?.startsWith(S),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${Z.pathname}" was given in the \`location\` prop.`
    ), q = Z;
  } else
    q = N;
  let C = q.pathname || "/", U = C;
  if (S !== "/") {
    let Z = S.replace(/^\//, "").split("/");
    U = "/" + C.replace(/^\//, "").split("/").slice(Z.length).join("/");
  }
  let j = zh(i, { pathname: U });
  Gt(
    R || j != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), Gt(
    j == null || j[j.length - 1].route.element !== void 0 || j[j.length - 1].route.Component !== void 0 || j[j.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let G = Lg(
    j && j.map(
      (Z) => Object.assign({}, Z, {
        params: Object.assign({}, p, Z.params),
        pathname: yl([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Z.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Z.pathname
        ]),
        pathnameBase: Z.pathnameBase === "/" ? S : yl([
          S,
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
  return r && G ? /* @__PURE__ */ T.createElement(
    ri.Provider,
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
    G
  ) : G;
}
function jg() {
  let i = Xg(), r = bg(i) ? `${i.status} ${i.statusText}` : i instanceof Error ? i.message : JSON.stringify(i), s = i instanceof Error ? i.stack : null, c = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: c }, d = { padding: "2px 4px", backgroundColor: c }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    i
  ), h = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ T.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ T.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ T.createElement("pre", { style: o }, s) : null, h);
}
var Ug = /* @__PURE__ */ T.createElement(jg, null), Gh = class extends T.Component {
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
      const s = _g(i.digest);
      s && (i = s);
    }
    let r = i !== void 0 ? /* @__PURE__ */ T.createElement(pl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ T.createElement(
      Dc.Provider,
      {
        value: i,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ T.createElement(Dg, { error: i }, r) : r;
  }
};
Gh.contextType = xg;
var yc = /* @__PURE__ */ new WeakMap();
function Dg({
  children: i,
  error: r
}) {
  let { basename: s } = T.useContext(qt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = Ag(r.digest);
    if (c) {
      let o = yc.get(r);
      if (o) throw o;
      let d = Bh(c.location, s);
      if (Dh && !yc.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw yc.set(r, h), h;
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
function Bg({ routeContext: i, match: r, children: s }) {
  let c = T.useContext(an);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ T.createElement(pl.Provider, { value: i }, s);
}
function Lg(i, r = [], s = null, c = null, o = null) {
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
  let d = i, h = s?.errors;
  if (h != null) {
    let S = d.findIndex(
      (R) => R.route.id && h?.[R.route.id] !== void 0
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
  if (s)
    for (let S = 0; S < d.length; S++) {
      let R = d[S];
      if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (p = S), R.route.id) {
        let { loaderData: N, errors: q } = s, C = R.route.loader && !N.hasOwnProperty(R.route.id) && (!q || q[R.route.id] === void 0);
        if (R.route.lazy || C) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && c ? (S, R) => {
    c(S, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: Sg(s.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (S, R, N) => {
      let q, C = !1, U = null, j = null;
      s && (q = h && R.route.id ? h[R.route.id] : void 0, U = R.route.errorElement || Ug, g && (p < 0 && N === 0 ? (Vh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), C = !0, j = null) : p === N && (C = !0, j = R.route.hydrateFallbackElement || null)));
      let G = r.concat(d.slice(0, N + 1)), Z = () => {
        let K;
        return q ? K = U : C ? K = j : R.route.Component ? K = /* @__PURE__ */ T.createElement(R.route.Component, null) : R.route.element ? K = R.route.element : K = S, /* @__PURE__ */ T.createElement(
          Bg,
          {
            match: R,
            routeContext: {
              outlet: S,
              matches: G,
              isDataRoute: s != null
            },
            children: K
          }
        );
      };
      return s && (R.route.ErrorBoundary || R.route.errorElement || N === 0) ? /* @__PURE__ */ T.createElement(
        Gh,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: U,
          error: q,
          children: Z(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
          onError: y
        }
      ) : Z();
    },
    null
  );
}
function Bc(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Hg(i) {
  let r = T.useContext(an);
  return Le(r, Bc(i)), r;
}
function qg(i) {
  let r = T.useContext(Gu);
  return Le(r, Bc(i)), r;
}
function Yg(i) {
  let r = T.useContext(pl);
  return Le(r, Bc(i)), r;
}
function Lc(i) {
  let r = Yg(i), s = r.matches[r.matches.length - 1];
  return Le(
    s.route.id,
    `${i} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function kg() {
  return Lc(
    "useRouteId"
    /* UseRouteId */
  );
}
function Xg() {
  let i = T.useContext(Dc), r = qg(
    "useRouteError"
    /* UseRouteError */
  ), s = Lc(
    "useRouteError"
    /* UseRouteError */
  );
  return i !== void 0 ? i : r.errors?.[s];
}
function Gg() {
  let { router: i } = Hg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Lc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = T.useRef(!1);
  return kh(() => {
    s.current = !0;
  }), T.useCallback(
    async (o, d = {}) => {
      Gt(s.current, Yh), s.current && (typeof o == "number" ? await i.navigate(o) : await i.navigate(o, { fromRouteId: r, ...d }));
    },
    [i, r]
  );
}
var th = {};
function Vh(i, r, s) {
  !r && !th[i] && (th[i] = !0, Gt(!1, s));
}
T.memo(Vg);
function Vg({
  routes: i,
  future: r,
  state: s,
  onError: c
}) {
  return Xh(i, void 0, s, c, r);
}
function Qh(i) {
  Le(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Qg({
  basename: i = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h
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
      unstable_useTransitions: h,
      future: {}
    }),
    [g, o, d, h]
  );
  typeof s == "string" && (s = ln(s));
  let {
    pathname: y = "/",
    search: S = "",
    hash: R = "",
    state: N = null,
    key: q = "default"
  } = s, C = T.useMemo(() => {
    let U = gl(y, g);
    return U == null ? null : {
      location: {
        pathname: U,
        search: S,
        hash: R,
        state: N,
        key: q
      },
      navigationType: c
    };
  }, [g, y, S, R, N, q, c]);
  return Gt(
    C != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${S}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ T.createElement(qt.Provider, { value: p }, /* @__PURE__ */ T.createElement(ri.Provider, { children: r, value: C }));
}
function Zg({
  children: i,
  location: r
}) {
  return Mg(_c(i), r);
}
function _c(i, r = []) {
  let s = [];
  return T.Children.forEach(i, (c, o) => {
    if (!T.isValidElement(c))
      return;
    let d = [...r, o];
    if (c.type === T.Fragment) {
      s.push.apply(
        s,
        _c(c.props.children, d)
      );
      return;
    }
    Le(
      c.type === Qh,
      `[${typeof c.type == "string" ? c.type : c.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Le(
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
    c.props.children && (h.children = _c(
      c.props.children,
      d
    )), s.push(h);
  }), s;
}
var Bu = "get", Lu = "application/x-www-form-urlencoded";
function Vu(i) {
  return typeof HTMLElement < "u" && i instanceof HTMLElement;
}
function Kg(i) {
  return Vu(i) && i.tagName.toLowerCase() === "button";
}
function Jg(i) {
  return Vu(i) && i.tagName.toLowerCase() === "form";
}
function $g(i) {
  return Vu(i) && i.tagName.toLowerCase() === "input";
}
function Fg(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Wg(i, r) {
  return i.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Fg(i);
}
var ju = null;
function Ig() {
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
var Pg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function gc(i) {
  return i != null && !Pg.has(i) ? (Gt(
    !1,
    `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Lu}"`
  ), null) : i;
}
function ep(i, r) {
  let s, c, o, d, h;
  if (Jg(i)) {
    let g = i.getAttribute("action");
    c = g ? gl(g, r) : null, s = i.getAttribute("method") || Bu, o = gc(i.getAttribute("enctype")) || Lu, d = new FormData(i);
  } else if (Kg(i) || $g(i) && (i.type === "submit" || i.type === "image")) {
    let g = i.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = i.getAttribute("formaction") || g.getAttribute("action");
    if (c = p ? gl(p, r) : null, s = i.getAttribute("formmethod") || g.getAttribute("method") || Bu, o = gc(i.getAttribute("formenctype")) || gc(g.getAttribute("enctype")) || Lu, d = new FormData(g, i), !Ig()) {
      let { name: y, type: S, value: R } = i;
      if (S === "image") {
        let N = y ? `${y}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else y && d.append(y, R);
    }
  } else {
    if (Vu(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = Bu, c = null, o = Lu, h = i;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: c, method: s.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Hc(i, r) {
  if (i === !1 || i === null || typeof i > "u")
    throw new Error(r);
}
function tp(i, r, s) {
  let c = typeof i == "string" ? new URL(
    i,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : i;
  return c.pathname === "/" ? c.pathname = `_root.${s}` : r && gl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`, c;
}
async function lp(i, r) {
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
function ap(i) {
  return i == null ? !1 : i.href == null ? i.rel === "preload" && typeof i.imageSrcSet == "string" && typeof i.imageSizes == "string" : typeof i.rel == "string" && typeof i.href == "string";
}
async function np(i, r, s) {
  let c = await Promise.all(
    i.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let h = await lp(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return sp(
    c.flat(1).filter(ap).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function lh(i, r, s, c, o, d) {
  let h = (p, y) => s[y] ? p.route.id !== s[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => h(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let S = c.routes[p.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (h(p, y) || g(p, y))
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
function ip(i, r, { includeHydrateFallback: s } = {}) {
  return up(
    i.map((c) => {
      let o = r.routes[c.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function up(i) {
  return [...new Set(i)];
}
function rp(i) {
  let r = {}, s = Object.keys(i).sort();
  for (let c of s)
    r[c] = i[c];
  return r;
}
function sp(i, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), i.reduce((c, o) => {
    let d = JSON.stringify(rp(o));
    return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
  }, []);
}
function Zh() {
  let i = T.useContext(an);
  return Hc(
    i,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), i;
}
function cp() {
  let i = T.useContext(Gu);
  return Hc(
    i,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), i;
}
var qc = T.createContext(void 0);
qc.displayName = "FrameworkContext";
function Kh() {
  let i = T.useContext(qc);
  return Hc(
    i,
    "You must render this element inside a <HydratedRouter> element"
  ), i;
}
function op(i, r) {
  let s = T.useContext(qc), [c, o] = T.useState(!1), [d, h] = T.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: S, onTouchStart: R } = r, N = T.useRef(null);
  T.useEffect(() => {
    if (i === "render" && h(!0), i === "viewport") {
      let U = (G) => {
        G.forEach((Z) => {
          h(Z.isIntersecting);
        });
      }, j = new IntersectionObserver(U, { threshold: 0.5 });
      return N.current && j.observe(N.current), () => {
        j.disconnect();
      };
    }
  }, [i]), T.useEffect(() => {
    if (c) {
      let U = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(U);
      };
    }
  }, [c]);
  let q = () => {
    o(!0);
  }, C = () => {
    o(!1), h(!1);
  };
  return s ? i !== "intent" ? [d, N, {}] : [
    d,
    N,
    {
      onFocus: ti(g, q),
      onBlur: ti(p, C),
      onMouseEnter: ti(y, q),
      onMouseLeave: ti(S, C),
      onTouchStart: ti(R, q)
    }
  ] : [!1, N, {}];
}
function ti(i, r) {
  return (s) => {
    i && i(s), s.defaultPrevented || r(s);
  };
}
function fp({ page: i, ...r }) {
  let { router: s } = Zh(), c = T.useMemo(
    () => zh(s.routes, i, s.basename),
    [s.routes, i, s.basename]
  );
  return c ? /* @__PURE__ */ T.createElement(hp, { page: i, matches: c, ...r }) : null;
}
function dp(i) {
  let { manifest: r, routeModules: s } = Kh(), [c, o] = T.useState([]);
  return T.useEffect(() => {
    let d = !1;
    return np(i, r, s).then(
      (h) => {
        d || o(h);
      }
    ), () => {
      d = !0;
    };
  }, [i, r, s]), c;
}
function hp({
  page: i,
  matches: r,
  ...s
}) {
  let c = ma(), { manifest: o, routeModules: d } = Kh(), { basename: h } = Zh(), { loaderData: g, matches: p } = cp(), y = T.useMemo(
    () => lh(
      i,
      r,
      p,
      o,
      c,
      "data"
    ),
    [i, r, p, o, c]
  ), S = T.useMemo(
    () => lh(
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
    let C = /* @__PURE__ */ new Set(), U = !1;
    if (r.forEach((G) => {
      let Z = o.routes[G.route.id];
      !Z || !Z.hasLoader || (!y.some((K) => K.route.id === G.route.id) && G.route.id in g && d[G.route.id]?.shouldRevalidate || Z.hasClientLoader ? U = !0 : C.add(G.route.id));
    }), C.size === 0)
      return [];
    let j = tp(i, h, "data");
    return U && C.size > 0 && j.searchParams.set(
      "_routes",
      r.filter((G) => C.has(G.route.id)).map((G) => G.route.id).join(",")
    ), [j.pathname + j.search];
  }, [
    h,
    g,
    c,
    o,
    y,
    r,
    i,
    d
  ]), N = T.useMemo(
    () => ip(S, o),
    [S, o]
  ), q = dp(S);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, R.map((C) => /* @__PURE__ */ T.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), N.map((C) => /* @__PURE__ */ T.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), q.map(({ key: C, link: U }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ T.createElement("link", { key: C, nonce: s.nonce, ...U })
  )));
}
function mp(...i) {
  return (r) => {
    i.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var yp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  yp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function gp({
  basename: i,
  children: r,
  unstable_useTransitions: s,
  window: c
}) {
  let o = T.useRef();
  o.current == null && (o.current = $y({ window: c, v5Compat: !0 }));
  let d = o.current, [h, g] = T.useState({
    action: d.action,
    location: d.location
  }), p = T.useCallback(
    (y) => {
      s === !1 ? g(y) : T.startTransition(() => g(y));
    },
    [s]
  );
  return T.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ T.createElement(
    Qg,
    {
      basename: i,
      children: r,
      location: h.location,
      navigationType: h.action,
      navigator: d,
      unstable_useTransitions: s
    }
  );
}
var Jh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $h = T.forwardRef(
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
    preventScrollReset: S,
    viewTransition: R,
    unstable_defaultShouldRevalidate: N,
    ...q
  }, C) {
    let { basename: U, unstable_useTransitions: j } = T.useContext(qt), G = typeof y == "string" && Jh.test(y), Z = Bh(y, U);
    y = Z.to;
    let K = zg(y, { relative: o }), [P, le, he] = op(
      c,
      q
    ), W = Sp(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: S,
      relative: o,
      viewTransition: R,
      unstable_defaultShouldRevalidate: N,
      unstable_useTransitions: j
    });
    function $(oe) {
      r && r(oe), oe.defaultPrevented || W(oe);
    }
    let me = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ T.createElement(
        "a",
        {
          ...q,
          ...he,
          href: Z.absoluteURL || K,
          onClick: Z.isExternal || d ? r : $,
          ref: mp(C, le),
          target: p,
          "data-discover": !G && s === "render" ? "true" : void 0
        }
      )
    );
    return P && !G ? /* @__PURE__ */ T.createElement(T.Fragment, null, me, /* @__PURE__ */ T.createElement(fp, { page: K })) : me;
  }
);
$h.displayName = "Link";
var pp = T.forwardRef(
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
  }, S) {
    let R = ci(h, { relative: y.relative }), N = ma(), q = T.useContext(Gu), { navigator: C, basename: U } = T.useContext(qt), j = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Tp(R) && g === !0, G = C.encodeLocation ? C.encodeLocation(R).pathname : R.pathname, Z = N.pathname, K = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (Z = Z.toLowerCase(), K = K ? K.toLowerCase() : null, G = G.toLowerCase()), K && U && (K = gl(K, U) || K);
    const P = G !== "/" && G.endsWith("/") ? G.length - 1 : G.length;
    let le = Z === G || !o && Z.startsWith(G) && Z.charAt(P) === "/", he = K != null && (K === G || !o && K.startsWith(G) && K.charAt(G.length) === "/"), W = {
      isActive: le,
      isPending: he,
      isTransitioning: j
    }, $ = le ? r : void 0, me;
    typeof c == "function" ? me = c(W) : me = [
      c,
      le ? "active" : null,
      he ? "pending" : null,
      j ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let oe = typeof d == "function" ? d(W) : d;
    return /* @__PURE__ */ T.createElement(
      $h,
      {
        ...y,
        "aria-current": $,
        className: me,
        ref: S,
        style: oe,
        to: h,
        viewTransition: g
      },
      typeof p == "function" ? p(W) : p
    );
  }
);
pp.displayName = "NavLink";
var vp = T.forwardRef(
  ({
    discover: i = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: c,
    replace: o,
    state: d,
    method: h = Bu,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: S,
    viewTransition: R,
    unstable_defaultShouldRevalidate: N,
    ...q
  }, C) => {
    let { unstable_useTransitions: U } = T.useContext(qt), j = Rp(), G = wp(g, { relative: y }), Z = h.toLowerCase() === "get" ? "get" : "post", K = typeof g == "string" && Jh.test(g), P = (le) => {
      if (p && p(le), le.defaultPrevented) return;
      le.preventDefault();
      let he = le.nativeEvent.submitter, W = he?.getAttribute("formmethod") || h, $ = () => j(he || le.currentTarget, {
        fetcherKey: r,
        method: W,
        navigate: s,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: S,
        viewTransition: R,
        unstable_defaultShouldRevalidate: N
      });
      U && s !== !1 ? T.startTransition(() => $()) : $();
    };
    return /* @__PURE__ */ T.createElement(
      "form",
      {
        ref: C,
        method: Z,
        action: G,
        onSubmit: c ? p : P,
        ...q,
        "data-discover": !K && i === "render" ? "true" : void 0
      }
    );
  }
);
vp.displayName = "Form";
function bp(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Fh(i) {
  let r = T.useContext(an);
  return Le(r, bp(i)), r;
}
function Sp(i, {
  target: r,
  replace: s,
  state: c,
  preventScrollReset: o,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ng(), S = ma(), R = ci(i, { relative: d });
  return T.useCallback(
    (N) => {
      if (Wg(N, r)) {
        N.preventDefault();
        let q = s !== void 0 ? s : ui(S) === ui(R), C = () => y(i, {
          replace: q,
          state: c,
          preventScrollReset: o,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? T.startTransition(() => C()) : C();
      }
    },
    [
      S,
      y,
      R,
      s,
      c,
      r,
      i,
      o,
      d,
      h,
      g,
      p
    ]
  );
}
var Ep = 0, xp = () => `__${String(++Ep)}__`;
function Rp() {
  let { router: i } = Fh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = T.useContext(qt), s = kg(), c = i.fetch, o = i.navigate;
  return T.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: S, body: R } = ep(
        d,
        r
      );
      if (h.navigate === !1) {
        let N = h.fetcherKey || xp();
        await c(N, s, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: S,
          body: R,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await o(h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: S,
          body: R,
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
function wp(i, { relative: r } = {}) {
  let { basename: s } = T.useContext(qt), c = T.useContext(pl);
  Le(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1), d = { ...ci(i || ".", { relative: r }) }, h = ma();
  if (i == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((S) => S === "")) {
      g.delete("index"), p.filter((R) => R).forEach((R) => g.append("index", R));
      let S = g.toString();
      d.search = S ? `?${S}` : "";
    }
  }
  return (!i || i === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : yl([s, d.pathname])), ui(d);
}
function Tp(i, { relative: r } = {}) {
  let s = T.useContext(Hh);
  Le(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Fh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = ci(i, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = gl(s.currentLocation.pathname, c) || s.currentLocation.pathname, h = gl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return ku(o.pathname, h) != null || ku(o.pathname, d) != null;
}
var pc = { exports: {} }, it = {};
var ah;
function Cp() {
  if (ah) return it;
  ah = 1;
  var i = Uc();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
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
  function d(p, y, S) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: R == null ? null : "" + R,
      children: p,
      containerInfo: y,
      implementation: S
    };
  }
  var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, it.createPortal = function(p, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, S);
  }, it.flushSync = function(p) {
    var y = h.T, S = c.p;
    try {
      if (h.T = null, c.p = 2, p) return p();
    } finally {
      h.T = y, c.p = S, c.d.f();
    }
  }, it.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(p, y));
  }, it.prefetchDNS = function(p) {
    typeof p == "string" && c.d.D(p);
  }, it.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var S = y.as, R = g(S, y.crossOrigin), N = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? c.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: R,
          integrity: N,
          fetchPriority: q
        }
      ) : S === "script" && c.d.X(p, {
        crossOrigin: R,
        integrity: N,
        fetchPriority: q,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, it.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var S = g(
            y.as,
            y.crossOrigin
          );
          c.d.M(p, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && c.d.M(p);
  }, it.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, R = g(S, y.crossOrigin);
      c.d.L(p, S, {
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
        var S = g(y.as, y.crossOrigin);
        c.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(p);
  }, it.requestFormReset = function(p) {
    c.d.r(p);
  }, it.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, it.useFormState = function(p, y, S) {
    return h.H.useFormState(p, y, S);
  }, it.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, it.version = "19.2.3", it;
}
var nh;
function Ap() {
  if (nh) return pc.exports;
  nh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), pc.exports = Cp(), pc.exports;
}
var vc = { exports: {} }, li = {}, bc = { exports: {} }, Sc = {};
var ih;
function _p() {
  return ih || (ih = 1, (function(i) {
    function r(X, k) {
      var Q = X.length;
      X.push(k);
      e: for (; 0 < Q; ) {
        var ie = Q - 1 >>> 1, ce = X[ie];
        if (0 < o(ce, k))
          X[ie] = k, X[Q] = ce, Q = ie;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function c(X) {
      if (X.length === 0) return null;
      var k = X[0], Q = X.pop();
      if (Q !== k) {
        X[0] = Q;
        e: for (var ie = 0, ce = X.length, Ne = ce >>> 1; ie < Ne; ) {
          var E = 2 * (ie + 1) - 1, B = X[E], V = E + 1, Y = X[V];
          if (0 > o(B, Q))
            V < ce && 0 > o(Y, B) ? (X[ie] = Y, X[V] = Q, ie = V) : (X[ie] = B, X[E] = Q, ie = E);
          else if (V < ce && 0 > o(Y, Q))
            X[ie] = Y, X[V] = Q, ie = V;
          else break e;
        }
      }
      return k;
    }
    function o(X, k) {
      var Q = X.sortIndex - k.sortIndex;
      return Q !== 0 ? Q : X.id - k.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, g = h.now();
      i.unstable_now = function() {
        return h.now() - g;
      };
    }
    var p = [], y = [], S = 1, R = null, N = 3, q = !1, C = !1, U = !1, j = !1, G = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function P(X) {
      for (var k = s(y); k !== null; ) {
        if (k.callback === null) c(y);
        else if (k.startTime <= X)
          c(y), k.sortIndex = k.expirationTime, r(p, k);
        else break;
        k = s(y);
      }
    }
    function le(X) {
      if (U = !1, P(X), !C)
        if (s(p) !== null)
          C = !0, he || (he = !0, ve());
        else {
          var k = s(y);
          k !== null && ke(le, k.startTime - X);
        }
    }
    var he = !1, W = -1, $ = 5, me = -1;
    function oe() {
      return j ? !0 : !(i.unstable_now() - me < $);
    }
    function Ie() {
      if (j = !1, he) {
        var X = i.unstable_now();
        me = X;
        var k = !0;
        try {
          e: {
            C = !1, U && (U = !1, Z(W), W = -1), q = !0;
            var Q = N;
            try {
              t: {
                for (P(X), R = s(p); R !== null && !(R.expirationTime > X && oe()); ) {
                  var ie = R.callback;
                  if (typeof ie == "function") {
                    R.callback = null, N = R.priorityLevel;
                    var ce = ie(
                      R.expirationTime <= X
                    );
                    if (X = i.unstable_now(), typeof ce == "function") {
                      R.callback = ce, P(X), k = !0;
                      break t;
                    }
                    R === s(p) && c(p), P(X);
                  } else c(p);
                  R = s(p);
                }
                if (R !== null) k = !0;
                else {
                  var Ne = s(y);
                  Ne !== null && ke(
                    le,
                    Ne.startTime - X
                  ), k = !1;
                }
              }
              break e;
            } finally {
              R = null, N = Q, q = !1;
            }
            k = void 0;
          }
        } finally {
          k ? ve() : he = !1;
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
        G(Ie, 0);
      };
    function ke(X, k) {
      W = G(function() {
        X(i.unstable_now());
      }, k);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, i.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : $ = 0 < X ? Math.floor(1e3 / X) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, i.unstable_next = function(X) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = N;
      }
      var Q = N;
      N = k;
      try {
        return X();
      } finally {
        N = Q;
      }
    }, i.unstable_requestPaint = function() {
      j = !0;
    }, i.unstable_runWithPriority = function(X, k) {
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
      var Q = N;
      N = X;
      try {
        return k();
      } finally {
        N = Q;
      }
    }, i.unstable_scheduleCallback = function(X, k, Q) {
      var ie = i.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ie + Q : ie) : Q = ie, X) {
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
      return ce = Q + ce, X = {
        id: S++,
        callback: k,
        priorityLevel: X,
        startTime: Q,
        expirationTime: ce,
        sortIndex: -1
      }, Q > ie ? (X.sortIndex = Q, r(y, X), s(p) === null && X === s(y) && (U ? (Z(W), W = -1) : U = !0, ke(le, Q - ie))) : (X.sortIndex = ce, r(p, X), C || q || (C = !0, he || (he = !0, ve()))), X;
    }, i.unstable_shouldYield = oe, i.unstable_wrapCallback = function(X) {
      var k = N;
      return function() {
        var Q = N;
        N = k;
        try {
          return X.apply(this, arguments);
        } finally {
          N = Q;
        }
      };
    };
  })(Sc)), Sc;
}
var uh;
function zp() {
  return uh || (uh = 1, bc.exports = _p()), bc.exports;
}
var rh;
function Np() {
  if (rh) return li;
  rh = 1;
  var i = {};
  var r = zp(), s = Uc(), c = Ap();
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
        for (var f = !1, m = n.child; m; ) {
          if (m === l) {
            f = !0, l = n, a = u;
            break;
          }
          if (m === a) {
            f = !0, a = n, l = u;
            break;
          }
          m = m.sibling;
        }
        if (!f) {
          for (m = u.child; m; ) {
            if (m === l) {
              f = !0, l = u, a = n;
              break;
            }
            if (m === a) {
              f = !0, a = u, l = n;
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
  function R(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = R(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var N = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), le = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), W = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), me = /* @__PURE__ */ Symbol.for("react.lazy"), oe = /* @__PURE__ */ Symbol.for("react.activity"), Ie = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ve = Symbol.iterator;
  function De(e) {
    return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ye = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ke(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ye ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case j:
        return "Fragment";
      case Z:
        return "Profiler";
      case G:
        return "StrictMode";
      case he:
        return "Suspense";
      case W:
        return "SuspenseList";
      case oe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case U:
          return "Portal";
        case P:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case $:
          return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
        case me:
          t = e._payload, e = e._init;
          try {
            return ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, k = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ce = [], Ne = -1;
  function E(e) {
    return { current: e };
  }
  function B(e) {
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
        e = (e = t.documentElement) && (e = e.namespaceURI) ? g0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = g0(t), e = p0(t, e);
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
    B(Y), V(Y, e);
  }
  function Be() {
    B(Y), B(te), B(ae);
  }
  function Vl(e) {
    e.memoizedState !== null && V(be, e);
    var t = Y.current, l = p0(t, e.type);
    t !== l && (V(te, e), V(Y, l));
  }
  function ya(e) {
    te.current === e && (B(Y), B(te)), be.current === e && (B(be), Fn._currentValue = ie);
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
      var u = a.DetermineComponentFrameRoot(), f = u[0], m = u[1];
      if (f && m) {
        var b = f.split(`
`), _ = m.split(`
`);
        for (n = a = 0; a < b.length && !b[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < _.length && !_[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === b.length || n === _.length)
          for (a = b.length - 1, n = _.length - 1; 1 <= a && 0 <= n && b[a] !== _[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (b[a] !== _[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || b[a] !== _[n]) {
                  var D = `
` + b[a].replace(" at new ", " at ");
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
  var Wu = Object.prototype.hasOwnProperty, Iu = r.unstable_scheduleCallback, Pu = r.unstable_cancelCallback, wm = r.unstable_shouldYield, Tm = r.unstable_requestPaint, vt = r.unstable_now, Cm = r.unstable_getCurrentPriorityLevel, Zc = r.unstable_ImmediatePriority, Kc = r.unstable_UserBlockingPriority, gi = r.unstable_NormalPriority, Am = r.unstable_LowPriority, Jc = r.unstable_IdlePriority, _m = r.log, zm = r.unstable_setDisableYieldValue, sn = null, bt = null;
  function bl(e) {
    if (typeof _m == "function" && zm(e), bt && typeof bt.setStrictMode == "function")
      try {
        bt.setStrictMode(sn, e);
      } catch {
      }
  }
  var St = Math.clz32 ? Math.clz32 : Mm, Nm = Math.log, Om = Math.LN2;
  function Mm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Nm(e) / Om | 0) | 0;
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
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? n = Zl(a) : (f &= m, f !== 0 ? n = Zl(f) : l || (l = m & ~e, l !== 0 && (n = Zl(l))))) : (m = a & ~u, m !== 0 ? n = Zl(m) : f !== 0 ? n = Zl(f) : l || (l = a & ~e, l !== 0 && (n = Zl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
  }
  function cn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function jm(e, t) {
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
  function $c() {
    var e = bi;
    return bi <<= 1, (bi & 62914560) === 0 && (bi = 4194304), e;
  }
  function er(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function on(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Um(e, t, l, a, n, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, b = e.expirationTimes, _ = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var D = 31 - St(l), H = 1 << D;
      m[D] = 0, b[D] = -1;
      var z = _[D];
      if (z !== null)
        for (_[D] = null, D = 0; D < z.length; D++) {
          var M = z[D];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~H;
    }
    a !== 0 && Fc(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Fc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - St(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Wc(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - St(l), n = 1 << a;
      n & t | e[a] & t && (e[a] |= t), l &= ~n;
    }
  }
  function Ic(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : tr(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function tr(e) {
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
  function lr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Pc() {
    var e = Q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Y0(e.type));
  }
  function eo(e, t) {
    var l = Q.p;
    try {
      return Q.p = e, t();
    } finally {
      Q.p = l;
    }
  }
  var Sl = Math.random().toString(36).slice(2), Pe = "__reactFiber$" + Sl, st = "__reactProps$" + Sl, ga = "__reactContainer$" + Sl, ar = "__reactEvents$" + Sl, Dm = "__reactListeners$" + Sl, Bm = "__reactHandles$" + Sl, to = "__reactResources$" + Sl, fn = "__reactMarker$" + Sl;
  function nr(e) {
    delete e[Pe], delete e[st], delete e[ar], delete e[Dm], delete e[Bm];
  }
  function pa(e) {
    var t = e[Pe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[ga] || l[Pe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = w0(e); e !== null; ) {
            if (l = e[Pe]) return l;
            e = w0(e);
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
    var t = e[to];
    return t || (t = e[to] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Fe(e) {
    e[fn] = !0;
  }
  var lo = /* @__PURE__ */ new Set(), ao = {};
  function Kl(e, t) {
    Sa(e, t), Sa(e + "Capture", t);
  }
  function Sa(e, t) {
    for (ao[e] = t, e = 0; e < t.length; e++)
      lo.add(t[e]);
  }
  var Lm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), no = {}, io = {};
  function Hm(e) {
    return Wu.call(io, e) ? !0 : Wu.call(no, e) ? !1 : Lm.test(e) ? io[e] = !0 : (no[e] = !0, !1);
  }
  function Ei(e, t, l) {
    if (Hm(t))
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
  function uo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function qm(e, t, l) {
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
  function ir(e) {
    if (!e._valueTracker) {
      var t = uo(e) ? "checked" : "value";
      e._valueTracker = qm(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ro(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = uo(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Ri(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ym = /[\n"\\]/g;
  function zt(e) {
    return e.replace(
      Ym,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ur(e, t, l, a, n, u, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + _t(t)) : e.value !== "" + _t(t) && (e.value = "" + _t(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? rr(e, f, _t(t)) : l != null ? rr(e, f, _t(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + _t(m) : e.removeAttribute("name");
  }
  function so(e, t, l, a, n, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ir(e);
        return;
      }
      l = l != null ? "" + _t(l) : "", t = t != null ? "" + _t(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = m ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), ir(e);
  }
  function rr(e, t, l) {
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
  function co(e, t, l) {
    if (t != null && (t = "" + _t(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + _t(l) : "";
  }
  function oo(e, t, l, a) {
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
    l = _t(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), ir(e);
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
  var km = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function fo(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || km.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function ho(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && l[n] !== a && fo(e, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && fo(e, u, t[u]);
  }
  function sr(e) {
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
  var Xm = /* @__PURE__ */ new Map([
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
  ]), Gm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function wi(e) {
    return Gm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function It() {
  }
  var cr = null;
  function or(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ra = null, wa = null;
  function mo(e) {
    var t = va(e);
    if (t && (e = t.stateNode)) {
      var l = e[st] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ur(
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
                ur(
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
              a = l[t], a.form === e.form && ro(a);
          }
          break e;
        case "textarea":
          co(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Ea(e, !!l.multiple, t, !1);
      }
    }
  }
  var fr = !1;
  function yo(e, t, l) {
    if (fr) return e(t, l);
    fr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (fr = !1, (Ra !== null || wa !== null) && (fu(), Ra && (t = Ra, e = wa, wa = Ra = null, mo(t), e)))
        for (t = 0; t < e.length; t++) mo(e[t]);
    }
  }
  function hn(e, t) {
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
  var Pt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), dr = !1;
  if (Pt)
    try {
      var mn = {};
      Object.defineProperty(mn, "passive", {
        get: function() {
          dr = !0;
        }
      }), window.addEventListener("test", mn, mn), window.removeEventListener("test", mn, mn);
    } catch {
      dr = !1;
    }
  var El = null, hr = null, Ti = null;
  function go() {
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
  function po() {
    return !1;
  }
  function ct(e) {
    function t(l, a, n, u, f) {
      this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ai : po, this.isPropagationStopped = po, this;
    }
    return N(t.prototype, {
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
  }, _i = ct(Jl), yn = N({}, Jl, { view: 0, detail: 0 }), Vm = ct(yn), mr, yr, gn, zi = N({}, yn, {
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
    getModifierState: pr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== gn && (gn && e.type === "mousemove" ? (mr = e.screenX - gn.screenX, yr = e.screenY - gn.screenY) : yr = mr = 0, gn = e), mr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : yr;
    }
  }), vo = ct(zi), Qm = N({}, zi, { dataTransfer: 0 }), Zm = ct(Qm), Km = N({}, yn, { relatedTarget: 0 }), gr = ct(Km), Jm = N({}, Jl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $m = ct(Jm), Fm = N({}, Jl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Wm = ct(Fm), Im = N({}, Jl, { data: 0 }), bo = ct(Im), Pm = {
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
  }, e1 = {
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
  }, t1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function l1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = t1[e]) ? !!t[e] : !1;
  }
  function pr() {
    return l1;
  }
  var a1 = N({}, yn, {
    key: function(e) {
      if (e.key) {
        var t = Pm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Ci(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? e1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pr,
    charCode: function(e) {
      return e.type === "keypress" ? Ci(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Ci(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), n1 = ct(a1), i1 = N({}, zi, {
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
  }), So = ct(i1), u1 = N({}, yn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pr
  }), r1 = ct(u1), s1 = N({}, Jl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), c1 = ct(s1), o1 = N({}, zi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), f1 = ct(o1), d1 = N({}, Jl, {
    newState: 0,
    oldState: 0
  }), h1 = ct(d1), m1 = [9, 13, 27, 32], vr = Pt && "CompositionEvent" in window, pn = null;
  Pt && "documentMode" in document && (pn = document.documentMode);
  var y1 = Pt && "TextEvent" in window && !pn, Eo = Pt && (!vr || pn && 8 < pn && 11 >= pn), xo = " ", Ro = !1;
  function wo(e, t) {
    switch (e) {
      case "keyup":
        return m1.indexOf(t.keyCode) !== -1;
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
  function To(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ta = !1;
  function g1(e, t) {
    switch (e) {
      case "compositionend":
        return To(t);
      case "keypress":
        return t.which !== 32 ? null : (Ro = !0, xo);
      case "textInput":
        return e = t.data, e === xo && Ro ? null : e;
      default:
        return null;
    }
  }
  function p1(e, t) {
    if (Ta)
      return e === "compositionend" || !vr && wo(e, t) ? (e = go(), Ti = hr = El = null, Ta = !1, e) : null;
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
        return Eo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var v1 = {
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
  function Co(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!v1[e.type] : t === "textarea";
  }
  function Ao(e, t, l, a) {
    Ra ? wa ? wa.push(a) : wa = [a] : Ra = a, t = vu(t, "onChange"), 0 < t.length && (l = new _i(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var vn = null, bn = null;
  function b1(e) {
    o0(e, 0);
  }
  function Ni(e) {
    var t = dn(e);
    if (ro(t)) return e;
  }
  function _o(e, t) {
    if (e === "change") return t;
  }
  var zo = !1;
  if (Pt) {
    var br;
    if (Pt) {
      var Sr = "oninput" in document;
      if (!Sr) {
        var No = document.createElement("div");
        No.setAttribute("oninput", "return;"), Sr = typeof No.oninput == "function";
      }
      br = Sr;
    } else br = !1;
    zo = br && (!document.documentMode || 9 < document.documentMode);
  }
  function Oo() {
    vn && (vn.detachEvent("onpropertychange", Mo), bn = vn = null);
  }
  function Mo(e) {
    if (e.propertyName === "value" && Ni(bn)) {
      var t = [];
      Ao(
        t,
        bn,
        e,
        or(e)
      ), yo(b1, t);
    }
  }
  function S1(e, t, l) {
    e === "focusin" ? (Oo(), vn = t, bn = l, vn.attachEvent("onpropertychange", Mo)) : e === "focusout" && Oo();
  }
  function E1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ni(bn);
  }
  function x1(e, t) {
    if (e === "click") return Ni(t);
  }
  function R1(e, t) {
    if (e === "input" || e === "change")
      return Ni(t);
  }
  function w1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Et = typeof Object.is == "function" ? Object.is : w1;
  function Sn(e, t) {
    if (Et(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!Wu.call(t, n) || !Et(e[n], t[n]))
        return !1;
    }
    return !0;
  }
  function jo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Uo(e, t) {
    var l = jo(e);
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
      l = jo(l);
    }
  }
  function Do(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Do(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Bo(e) {
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
  function Er(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var T1 = Pt && "documentMode" in document && 11 >= document.documentMode, Ca = null, xr = null, En = null, Rr = !1;
  function Lo(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Rr || Ca == null || Ca !== Ri(a) || (a = Ca, "selectionStart" in a && Er(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), En && Sn(En, a) || (En = a, a = vu(xr, "onSelect"), 0 < a.length && (t = new _i(
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
  }, wr = {}, Ho = {};
  Pt && (Ho = document.createElement("div").style, "AnimationEvent" in window || (delete Aa.animationend.animation, delete Aa.animationiteration.animation, delete Aa.animationstart.animation), "TransitionEvent" in window || delete Aa.transitionend.transition);
  function Fl(e) {
    if (wr[e]) return wr[e];
    if (!Aa[e]) return e;
    var t = Aa[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Ho)
        return wr[e] = t[l];
    return e;
  }
  var qo = Fl("animationend"), Yo = Fl("animationiteration"), ko = Fl("animationstart"), C1 = Fl("transitionrun"), A1 = Fl("transitionstart"), _1 = Fl("transitioncancel"), Xo = Fl("transitionend"), Go = /* @__PURE__ */ new Map(), Tr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Tr.push("scrollEnd");
  function Yt(e, t) {
    Go.set(e, t), Kl(t, [e]);
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
  }, Nt = [], _a = 0, Cr = 0;
  function Mi() {
    for (var e = _a, t = Cr = _a = 0; t < e; ) {
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
      u !== 0 && Vo(l, n, u);
    }
  }
  function ji(e, t, l, a) {
    Nt[_a++] = e, Nt[_a++] = t, Nt[_a++] = l, Nt[_a++] = a, Cr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Ar(e, t, l, a) {
    return ji(e, t, l, a), Ui(e);
  }
  function Wl(e, t) {
    return ji(e, null, null, t), Ui(e);
  }
  function Vo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - St(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function Ui(e) {
    if (50 < Gn)
      throw Gn = 0, Bs = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var za = {};
  function z1(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, l, a) {
    return new z1(e, t, l, a);
  }
  function _r(e) {
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
  function Qo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Di(e, t, l, a, n, u) {
    var f = 0;
    if (a = e, typeof e == "function") _r(e) && (f = 1);
    else if (typeof e == "string")
      f = Uy(
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
        case G:
          f = 8, n |= 24;
          break;
        case Z:
          return e = xt(12, l, t, n | 2), e.elementType = Z, e.lanes = u, e;
        case he:
          return e = xt(13, l, t, n), e.elementType = he, e.lanes = u, e;
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
              case me:
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
  function zr(e, t, l) {
    return e = xt(6, e, null, t), e.lanes = l, e;
  }
  function Zo(e) {
    var t = xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Nr(e, t, l) {
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
  var Ko = /* @__PURE__ */ new WeakMap();
  function Ot(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ko.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: yi(t)
      }, Ko.set(e, t), t);
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
  function Jo(e, t, l) {
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
  function Or(e) {
    e.return !== null && (tl(e, 1), Jo(e, 1, 0));
  }
  function Mr(e) {
    for (; e === Bi; )
      Bi = Na[--Oa], Na[Oa] = null, xn = Na[--Oa], Na[Oa] = null;
    for (; e === xl; )
      xl = Mt[--jt], Mt[jt] = null, Zt = Mt[--jt], Mt[jt] = null, Qt = Mt[--jt], Mt[jt] = null;
  }
  function $o(e, t) {
    Mt[jt++] = Qt, Mt[jt++] = Zt, Mt[jt++] = xl, Qt = t.id, Zt = t.overflow, xl = e;
  }
  var et = null, Me = null, pe = !1, Rl = null, Ut = !1, jr = Error(o(519));
  function wl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Rn(Ot(t, e)), jr;
  }
  function Fo(e) {
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
        de("invalid", t), so(
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
        de("invalid", t), oo(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || m0(t.textContent, l) ? (a.popover != null && (de("beforetoggle", t), de("toggle", t)), a.onScroll != null && de("scroll", t), a.onScrollEnd != null && de("scrollend", t), a.onClick != null && (t.onclick = It), t = !0) : t = !1, t || wl(e, !0);
  }
  function Wo(e) {
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
    if (!pe) return Wo(e), pe = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ws(e.type, e.memoizedProps)), l = !l), l && Me && wl(e), Wo(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = R0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Me = R0(e);
    } else
      t === 27 ? (t = Me, Hl(e.type) ? (e = lc, lc = null, Me = e) : Me = t) : Me = et ? Bt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Pl() {
    Me = et = null, pe = !1;
  }
  function Ur() {
    var e = Rl;
    return e !== null && (ht === null ? ht = e : ht.push.apply(
      ht,
      e
    ), Rl = null), e;
  }
  function Rn(e) {
    Rl === null ? Rl = [e] : Rl.push(e);
  }
  var Dr = E(null), ea = null, ll = null;
  function Tl(e, t, l) {
    V(Dr, t._currentValue), t._currentValue = l;
  }
  function al(e) {
    e._currentValue = Dr.current, B(Dr);
  }
  function Br(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Lr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var f = n.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var m = u;
          u = n;
          for (var b = 0; b < t.length; b++)
            if (m.context === t[b]) {
              u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), Br(
                u.return,
                l,
                e
              ), a || (f = null);
              break e;
            }
          u = m.next;
        }
      } else if (n.tag === 18) {
        if (f = n.return, f === null) throw Error(o(341));
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), Br(f, l, e), f = null;
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
          var m = n.type;
          Et(n.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (n === be.current) {
        if (f = n.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Fn) : e = [Fn]);
      }
      n = n.return;
    }
    e !== null && Lr(
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
    return Io(ea, e);
  }
  function Hi(e, t) {
    return ea === null && ta(e), Io(e, t);
  }
  function Io(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, ll === null) {
      if (e === null) throw Error(o(308));
      ll = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else ll = ll.next = t;
    return l;
  }
  var N1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, O1 = r.unstable_scheduleCallback, M1 = r.unstable_NormalPriority, Ve = {
    $$typeof: P,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Hr() {
    return {
      controller: new N1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function wn(e) {
    e.refCount--, e.refCount === 0 && O1(M1, function() {
      e.controller.abort();
    });
  }
  var Tn = null, qr = 0, Ua = 0, Da = null;
  function j1(e, t) {
    if (Tn === null) {
      var l = Tn = [];
      qr = 0, Ua = Xs(), Da = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return qr++, t.then(Po, Po), t;
  }
  function Po() {
    if (--qr === 0 && Tn !== null) {
      Da !== null && (Da.status = "fulfilled");
      var e = Tn;
      Tn = null, Ua = 0, Da = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function U1(e, t) {
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
  var ef = k.S;
  k.S = function(e, t) {
    Hd = vt(), typeof t == "object" && t !== null && typeof t.then == "function" && j1(e, t), ef !== null && ef(e, t);
  };
  var la = E(null);
  function Yr() {
    var e = la.current;
    return e !== null ? e : ze.pooledCache;
  }
  function qi(e, t) {
    t === null ? V(la, la.current) : V(la, t.pool);
  }
  function tf() {
    var e = Yr();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Ba = Error(o(460)), kr = Error(o(474)), Yi = Error(o(542)), ki = { then: function() {
  } };
  function lf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function af(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(It, It), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, uf(e), e;
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
            throw e = t.reason, uf(e), e;
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
  function nf() {
    if (na === null) throw Error(o(459));
    var e = na;
    return na = null, e;
  }
  function uf(e) {
    if (e === Ba || e === Yi)
      throw Error(o(483));
  }
  var La = null, Cn = 0;
  function Xi(e) {
    var t = Cn;
    return Cn += 1, La === null && (La = []), af(La, e, t);
  }
  function An(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Gi(e, t) {
    throw t.$$typeof === q ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function rf(e) {
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
    function m(w, x, A, L) {
      return x === null || x.tag !== 6 ? (x = zr(A, w.mode, L), x.return = w, x) : (x = n(x, A), x.return = w, x);
    }
    function b(w, x, A, L) {
      var I = A.type;
      return I === j ? D(
        w,
        x,
        A.props.children,
        L,
        A.key
      ) : x !== null && (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === me && aa(I) === x.type) ? (x = n(x, A.props), An(x, A), x.return = w, x) : (x = Di(
        A.type,
        A.key,
        A.props,
        null,
        w.mode,
        L
      ), An(x, A), x.return = w, x);
    }
    function _(w, x, A, L) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== A.containerInfo || x.stateNode.implementation !== A.implementation ? (x = Nr(A, w.mode, L), x.return = w, x) : (x = n(x, A.children || []), x.return = w, x);
    }
    function D(w, x, A, L, I) {
      return x === null || x.tag !== 7 ? (x = Il(
        A,
        w.mode,
        L,
        I
      ), x.return = w, x) : (x = n(x, A), x.return = w, x);
    }
    function H(w, x, A) {
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return x = zr(
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
          case U:
            return x = Nr(
              x,
              w.mode,
              A
            ), x.return = w, x;
          case me:
            return x = aa(x), H(w, x, A);
        }
        if (X(x) || De(x))
          return x = Il(
            x,
            w.mode,
            A,
            null
          ), x.return = w, x;
        if (typeof x.then == "function")
          return H(w, Xi(x), A);
        if (x.$$typeof === P)
          return H(
            w,
            Hi(w, x),
            A
          );
        Gi(w, x);
      }
      return null;
    }
    function z(w, x, A, L) {
      var I = x !== null ? x.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return I !== null ? null : m(w, x, "" + A, L);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case C:
            return A.key === I ? b(w, x, A, L) : null;
          case U:
            return A.key === I ? _(w, x, A, L) : null;
          case me:
            return A = aa(A), z(w, x, A, L);
        }
        if (X(A) || De(A))
          return I !== null ? null : D(w, x, A, L, null);
        if (typeof A.then == "function")
          return z(
            w,
            x,
            Xi(A),
            L
          );
        if (A.$$typeof === P)
          return z(
            w,
            x,
            Hi(w, A),
            L
          );
        Gi(w, A);
      }
      return null;
    }
    function M(w, x, A, L, I) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return w = w.get(A) || null, m(x, w, "" + L, I);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case C:
            return w = w.get(
              L.key === null ? A : L.key
            ) || null, b(x, w, L, I);
          case U:
            return w = w.get(
              L.key === null ? A : L.key
            ) || null, _(x, w, L, I);
          case me:
            return L = aa(L), M(
              w,
              x,
              A,
              L,
              I
            );
        }
        if (X(L) || De(L))
          return w = w.get(A) || null, D(x, w, L, I, null);
        if (typeof L.then == "function")
          return M(
            w,
            x,
            A,
            Xi(L),
            I
          );
        if (L.$$typeof === P)
          return M(
            w,
            x,
            A,
            Hi(x, L),
            I
          );
        Gi(x, L);
      }
      return null;
    }
    function J(w, x, A, L) {
      for (var I = null, Ee = null, F = x, se = x = 0, ge = null; F !== null && se < A.length; se++) {
        F.index > se ? (ge = F, F = null) : ge = F.sibling;
        var xe = z(
          w,
          F,
          A[se],
          L
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
          F = H(w, A[se], L), F !== null && (x = u(
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
          L
        ), ge !== null && (e && ge.alternate !== null && F.delete(
          ge.key === null ? se : ge.key
        ), x = u(
          ge,
          x,
          se
        ), Ee === null ? I = ge : Ee.sibling = ge, Ee = ge);
      return e && F.forEach(function(Gl) {
        return t(w, Gl);
      }), pe && tl(w, se), I;
    }
    function ee(w, x, A, L) {
      if (A == null) throw Error(o(151));
      for (var I = null, Ee = null, F = x, se = x = 0, ge = null, xe = A.next(); F !== null && !xe.done; se++, xe = A.next()) {
        F.index > se ? (ge = F, F = null) : ge = F.sibling;
        var Gl = z(w, F, xe.value, L);
        if (Gl === null) {
          F === null && (F = ge);
          break;
        }
        e && F && Gl.alternate === null && t(w, F), x = u(Gl, x, se), Ee === null ? I = Gl : Ee.sibling = Gl, Ee = Gl, F = ge;
      }
      if (xe.done)
        return l(w, F), pe && tl(w, se), I;
      if (F === null) {
        for (; !xe.done; se++, xe = A.next())
          xe = H(w, xe.value, L), xe !== null && (x = u(xe, x, se), Ee === null ? I = xe : Ee.sibling = xe, Ee = xe);
        return pe && tl(w, se), I;
      }
      for (F = a(F); !xe.done; se++, xe = A.next())
        xe = M(F, w, se, xe.value, L), xe !== null && (e && xe.alternate !== null && F.delete(xe.key === null ? se : xe.key), x = u(xe, x, se), Ee === null ? I = xe : Ee.sibling = xe, Ee = xe);
      return e && F.forEach(function(Qy) {
        return t(w, Qy);
      }), pe && tl(w, se), I;
    }
    function _e(w, x, A, L) {
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
                      ), L = n(
                        x,
                        A.props.children
                      ), L.return = w, w = L;
                      break e;
                    }
                  } else if (x.elementType === I || typeof I == "object" && I !== null && I.$$typeof === me && aa(I) === x.type) {
                    l(
                      w,
                      x.sibling
                    ), L = n(x, A.props), An(L, A), L.return = w, w = L;
                    break e;
                  }
                  l(w, x);
                  break;
                } else t(w, x);
                x = x.sibling;
              }
              A.type === j ? (L = Il(
                A.props.children,
                w.mode,
                L,
                A.key
              ), L.return = w, w = L) : (L = Di(
                A.type,
                A.key,
                A.props,
                null,
                w.mode,
                L
              ), An(L, A), L.return = w, w = L);
            }
            return f(w);
          case U:
            e: {
              for (I = A.key; x !== null; ) {
                if (x.key === I)
                  if (x.tag === 4 && x.stateNode.containerInfo === A.containerInfo && x.stateNode.implementation === A.implementation) {
                    l(
                      w,
                      x.sibling
                    ), L = n(x, A.children || []), L.return = w, w = L;
                    break e;
                  } else {
                    l(w, x);
                    break;
                  }
                else t(w, x);
                x = x.sibling;
              }
              L = Nr(A, w.mode, L), L.return = w, w = L;
            }
            return f(w);
          case me:
            return A = aa(A), _e(
              w,
              x,
              A,
              L
            );
        }
        if (X(A))
          return J(
            w,
            x,
            A,
            L
          );
        if (De(A)) {
          if (I = De(A), typeof I != "function") throw Error(o(150));
          return A = I.call(A), ee(
            w,
            x,
            A,
            L
          );
        }
        if (typeof A.then == "function")
          return _e(
            w,
            x,
            Xi(A),
            L
          );
        if (A.$$typeof === P)
          return _e(
            w,
            x,
            Hi(w, A),
            L
          );
        Gi(w, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, x !== null && x.tag === 6 ? (l(w, x.sibling), L = n(x, A), L.return = w, w = L) : (l(w, x), L = zr(A, w.mode, L), L.return = w, w = L), f(w)) : l(w, x);
    }
    return function(w, x, A, L) {
      try {
        Cn = 0;
        var I = _e(
          w,
          x,
          A,
          L
        );
        return La = null, I;
      } catch (F) {
        if (F === Ba || F === Yi) throw F;
        var Ee = xt(29, F, null, w.mode);
        return Ee.lanes = L, Ee.return = w, Ee;
      }
    };
  }
  var ia = rf(!0), sf = rf(!1), Cl = !1;
  function Xr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gr(e, t) {
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
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = Ui(e), Vo(e, null, l), t;
    }
    return ji(e, a, t, l), Ui(e);
  }
  function _n(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Wc(e, l);
    }
  }
  function Vr(e, t) {
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
  var Qr = !1;
  function zn() {
    if (Qr) {
      var e = Da;
      if (e !== null) throw e;
    }
  }
  function Nn(e, t, l, a) {
    Qr = !1;
    var n = e.updateQueue;
    Cl = !1;
    var u = n.firstBaseUpdate, f = n.lastBaseUpdate, m = n.shared.pending;
    if (m !== null) {
      n.shared.pending = null;
      var b = m, _ = b.next;
      b.next = null, f === null ? u = _ : f.next = _, f = b;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, m = D.lastBaseUpdate, m !== f && (m === null ? D.firstBaseUpdate = _ : m.next = _, D.lastBaseUpdate = b));
    }
    if (u !== null) {
      var H = n.baseState;
      f = 0, D = _ = b = null, m = u;
      do {
        var z = m.lane & -536870913, M = z !== m.lane;
        if (M ? (ye & z) === z : (a & z) === z) {
          z !== 0 && z === Ua && (Qr = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ee = m;
            z = t;
            var _e = l;
            switch (ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  H = J.call(_e, H, z);
                  break e;
                }
                H = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, z = typeof J == "function" ? J.call(_e, H, z) : J, z == null) break e;
                H = N({}, H, z);
                break e;
              case 2:
                Cl = !0;
            }
          }
          z = m.callback, z !== null && (e.flags |= 64, M && (e.flags |= 8192), M = n.callbacks, M === null ? n.callbacks = [z] : M.push(z));
        } else
          M = {
            lane: z,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, D === null ? (_ = D = M, b = H) : D = D.next = M, f |= z;
        if (m = m.next, m === null) {
          if (m = n.shared.pending, m === null)
            break;
          M = m, m = M.next, M.next = null, n.lastBaseUpdate = M, n.shared.pending = null;
        }
      } while (!0);
      D === null && (b = H), n.baseState = b, n.firstBaseUpdate = _, n.lastBaseUpdate = D, u === null && (n.shared.lanes = 0), jl |= f, e.lanes = f, e.memoizedState = H;
    }
  }
  function cf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function of(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        cf(l[e], t);
  }
  var Ha = E(null), Vi = E(0);
  function ff(e, t) {
    e = dl, V(Vi, e), V(Ha, t), dl = e | t.baseLanes;
  }
  function Zr() {
    V(Vi, dl), V(Ha, Ha.current);
  }
  function Kr() {
    dl = Vi.current, B(Ha), B(Vi);
  }
  var Rt = E(null), Dt = null;
  function zl(e) {
    var t = e.alternate;
    V(Xe, Xe.current & 1), V(Rt, e), Dt === null && (t === null || Ha.current !== null || t.memoizedState !== null) && (Dt = e);
  }
  function Jr(e) {
    V(Xe, Xe.current), V(Rt, e), Dt === null && (Dt = e);
  }
  function df(e) {
    e.tag === 22 ? (V(Xe, Xe.current), V(Rt, e), Dt === null && (Dt = e)) : Nl();
  }
  function Nl() {
    V(Xe, Xe.current), V(Rt, Rt.current);
  }
  function wt(e) {
    B(Rt), Dt === e && (Dt = null), B(Xe);
  }
  var Xe = E(0);
  function Qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || ec(l) || tc(l)))
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
  var nl = 0, ue = null, Ce = null, Qe = null, Zi = !1, qa = !1, ua = !1, Ki = 0, On = 0, Ya = null, D1 = 0;
  function He() {
    throw Error(o(321));
  }
  function $r(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Et(e[l], t[l])) return !1;
    return !0;
  }
  function Fr(e, t, l, a, n, u) {
    return nl = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? $f : fs, ua = !1, u = l(a, n), ua = !1, qa && (u = mf(
      t,
      l,
      a,
      n
    )), hf(e), u;
  }
  function hf(e) {
    k.H = Un;
    var t = Ce !== null && Ce.next !== null;
    if (nl = 0, Qe = Ce = ue = null, Zi = !1, On = 0, Ya = null, t) throw Error(o(300));
    e === null || Ze || (e = e.dependencies, e !== null && Li(e) && (Ze = !0));
  }
  function mf(e, t, l, a) {
    ue = e;
    var n = 0;
    do {
      if (qa && (Ya = null), On = 0, qa = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Qe = Ce = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      k.H = Ff, u = t(l, a);
    } while (qa);
    return u;
  }
  function B1() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Mn(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Wr() {
    var e = Ki !== 0;
    return Ki = 0, e;
  }
  function Ir(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Pr(e) {
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
  function Ge() {
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
    return On += 1, Ya === null && (Ya = []), e = af(Ya, e, t), t = ue, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? $f : fs), e;
  }
  function $i(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Mn(e);
      if (e.$$typeof === P) return tt(e);
    }
    throw Error(o(438, String(e)));
  }
  function es(e) {
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
    var t = Ge();
    return ts(t, Ce, e);
  }
  function ts(e, t, l) {
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
      var m = f = null, b = null, _ = t, D = !1;
      do {
        var H = _.lane & -536870913;
        if (H !== _.lane ? (ye & H) === H : (nl & H) === H) {
          var z = _.revertLane;
          if (z === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), H === Ua && (D = !0);
          else if ((nl & z) === z) {
            _ = _.next, z === Ua && (D = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, b === null ? (m = b = H, f = u) : b = b.next = H, ue.lanes |= z, jl |= z;
          H = _.action, ua && l(u, H), u = _.hasEagerState ? _.eagerState : l(u, H);
        } else
          z = {
            lane: H,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, b === null ? (m = b = z, f = u) : b = b.next = z, ue.lanes |= H, jl |= H;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (b === null ? f = u : b.next = m, !Et(u, e.memoizedState) && (Ze = !0, D && (l = Da, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = b, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function ls(e) {
    var t = Ge(), l = t.queue;
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
  function yf(e, t, l) {
    var a = ue, n = Ge(), u = pe;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !Et(
      (Ce || n).memoizedState,
      l
    );
    if (f && (n.memoizedState = l, Ze = !0), n = n.queue, is(vf.bind(null, a, n, e), [
      e
    ]), n.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
      if (a.flags |= 2048, ka(
        9,
        { destroy: void 0 },
        pf.bind(
          null,
          a,
          n,
          l,
          t
        ),
        null
      ), ze === null) throw Error(o(349));
      u || (nl & 127) !== 0 || gf(a, t, l);
    }
    return l;
  }
  function gf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = Ji(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function pf(e, t, l, a) {
    t.value = l, t.getSnapshot = a, bf(t) && Sf(e);
  }
  function vf(e, t, l) {
    return l(function() {
      bf(t) && Sf(e);
    });
  }
  function bf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Et(e, l);
    } catch {
      return !0;
    }
  }
  function Sf(e) {
    var t = Wl(e, 2);
    t !== null && mt(t, e, 2);
  }
  function as(e) {
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
  function Ef(e, t, l, a) {
    return e.baseState = l, ts(
      e,
      Ce,
      typeof a == "function" ? a : il
    );
  }
  function L1(e, t, l, a, n) {
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
      k.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, xf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function xf(e, t) {
    var l = t.action, a = t.payload, n = e.state;
    if (t.isTransition) {
      var u = k.T, f = {};
      k.T = f;
      try {
        var m = l(n, a), b = k.S;
        b !== null && b(f, m), Rf(e, t, m);
      } catch (_) {
        ns(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), k.T = u;
      }
    } else
      try {
        u = l(n, a), Rf(e, t, u);
      } catch (_) {
        ns(e, t, _);
      }
  }
  function Rf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        wf(e, t, a);
      },
      function(a) {
        return ns(e, t, a);
      }
    ) : wf(e, t, l);
  }
  function wf(e, t, l) {
    t.status = "fulfilled", t.value = l, Tf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, xf(e, l)));
  }
  function ns(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, Tf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Tf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Cf(e, t) {
    return t;
  }
  function Af(e, t) {
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
      lastRenderedReducer: Cf,
      lastRenderedState: t
    }, l.queue = a, l = Zf.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = as(!1), u = os.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = rt(), n = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = n, l = L1.bind(
      null,
      ue,
      n,
      u,
      l
    ), n.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function _f(e) {
    var t = Ge();
    return zf(t, Ce, e);
  }
  function zf(e, t, l) {
    if (t = ts(
      e,
      t,
      Cf
    )[0], e = Fi(il)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Mn(t);
      } catch (f) {
        throw f === Ba ? Yi : f;
      }
    else a = t;
    t = Ge();
    var n = t.queue, u = n.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, ka(
      9,
      { destroy: void 0 },
      H1.bind(null, n, l),
      null
    )), [a, u, e];
  }
  function H1(e, t) {
    e.action = t;
  }
  function Nf(e) {
    var t = Ge(), l = Ce;
    if (l !== null)
      return zf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function ka(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = Ji(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Of() {
    return Ge().memoizedState;
  }
  function Wi(e, t, l, a) {
    var n = rt();
    ue.flags |= e, n.memoizedState = ka(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Ii(e, t, l, a) {
    var n = Ge();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    Ce !== null && a !== null && $r(a, Ce.memoizedState.deps) ? n.memoizedState = ka(t, u, l, a) : (ue.flags |= e, n.memoizedState = ka(
      1 | t,
      u,
      l,
      a
    ));
  }
  function Mf(e, t) {
    Wi(8390656, 8, e, t);
  }
  function is(e, t) {
    Ii(2048, 8, e, t);
  }
  function q1(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = Ji(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function jf(e) {
    var t = Ge().memoizedState;
    return q1({ ref: t, nextImpl: e }), function() {
      if ((Re & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Uf(e, t) {
    return Ii(4, 2, e, t);
  }
  function Df(e, t) {
    return Ii(4, 4, e, t);
  }
  function Bf(e, t) {
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
  function Lf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Ii(4, 4, Bf.bind(null, t, e), l);
  }
  function us() {
  }
  function Hf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && $r(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function qf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && $r(t, a[1]))
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
  function rs(e, t, l) {
    return l === void 0 || (nl & 1073741824) !== 0 && (ye & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Yd(), ue.lanes |= e, jl |= e, l);
  }
  function Yf(e, t, l, a) {
    return Et(l, t) ? l : Ha.current !== null ? (e = rs(e, l, a), Et(e, t) || (Ze = !0), e) : (nl & 42) === 0 || (nl & 1073741824) !== 0 && (ye & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = Yd(), ue.lanes |= e, jl |= e, t);
  }
  function kf(e, t, l, a, n) {
    var u = Q.p;
    Q.p = u !== 0 && 8 > u ? u : 8;
    var f = k.T, m = {};
    k.T = m, os(e, !1, t, l);
    try {
      var b = n(), _ = k.S;
      if (_ !== null && _(m, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var D = U1(
          b,
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
    } catch (H) {
      jn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        At()
      );
    } finally {
      Q.p = u, f !== null && m.types !== null && (f.types = m.types), k.T = f;
    }
  }
  function Y1() {
  }
  function ss(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var n = Xf(e).queue;
    kf(
      e,
      n,
      t,
      ie,
      l === null ? Y1 : function() {
        return Gf(e), l(a);
      }
    );
  }
  function Xf(e) {
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
  function Gf(e) {
    var t = Xf(e);
    t.next === null && (t = e.alternate.memoizedState), jn(
      e,
      t.next.queue,
      {},
      At()
    );
  }
  function cs() {
    return tt(Fn);
  }
  function Vf() {
    return Ge().memoizedState;
  }
  function Qf() {
    return Ge().memoizedState;
  }
  function k1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = At();
          e = Al(l);
          var a = _l(t, e, l);
          a !== null && (mt(a, t, l), _n(a, t, l)), t = { cache: Hr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function X1(e, t, l) {
    var a = At();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(e) ? Kf(t, l) : (l = Ar(e, t, l, a), l !== null && (mt(l, e, a), Jf(l, t, a)));
  }
  function Zf(e, t, l) {
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
    if (Pi(e)) Kf(t, n);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, m = u(f, l);
          if (n.hasEagerState = !0, n.eagerState = m, Et(m, f))
            return ji(e, t, n, 0), ze === null && Mi(), !1;
        } catch {
        }
      if (l = Ar(e, t, n, a), l !== null)
        return mt(l, e, a), Jf(l, t, a), !0;
    }
    return !1;
  }
  function os(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: Xs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pi(e)) {
      if (t) throw Error(o(479));
    } else
      t = Ar(
        e,
        l,
        a,
        2
      ), t !== null && mt(t, e, 2);
  }
  function Pi(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function Kf(e, t) {
    qa = Zi = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Jf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Wc(e, l);
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
  var $f = {
    readContext: tt,
    use: $i,
    useCallback: function(e, t) {
      return rt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: tt,
    useEffect: Mf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Wi(
        4194308,
        4,
        Bf.bind(null, t, e),
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
      }, a.queue = e, e = e.dispatch = X1.bind(
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
      e = as(e);
      var t = e.queue, l = Zf.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: us,
    useDeferredValue: function(e, t) {
      var l = rt();
      return rs(l, e, t);
    },
    useTransition: function() {
      var e = as(!1);
      return e = kf.bind(
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
        (ye & 127) !== 0 || gf(a, t, l);
      }
      n.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return n.queue = u, Mf(vf.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, ka(
        9,
        { destroy: void 0 },
        pf.bind(
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
        l = D1++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: cs,
    useFormState: Af,
    useActionState: Af,
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
      return t.queue = l, t = os.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: es,
    useCacheRefresh: function() {
      return rt().memoizedState = k1.bind(
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
  }, fs = {
    readContext: tt,
    use: $i,
    useCallback: Hf,
    useContext: tt,
    useEffect: is,
    useImperativeHandle: Lf,
    useInsertionEffect: Uf,
    useLayoutEffect: Df,
    useMemo: qf,
    useReducer: Fi,
    useRef: Of,
    useState: function() {
      return Fi(il);
    },
    useDebugValue: us,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Yf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fi(il)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Mn(e),
        t
      ];
    },
    useSyncExternalStore: yf,
    useId: Vf,
    useHostTransitionStatus: cs,
    useFormState: _f,
    useActionState: _f,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ef(l, Ce, e, t);
    },
    useMemoCache: es,
    useCacheRefresh: Qf
  };
  fs.useEffectEvent = jf;
  var Ff = {
    readContext: tt,
    use: $i,
    useCallback: Hf,
    useContext: tt,
    useEffect: is,
    useImperativeHandle: Lf,
    useInsertionEffect: Uf,
    useLayoutEffect: Df,
    useMemo: qf,
    useReducer: ls,
    useRef: Of,
    useState: function() {
      return ls(il);
    },
    useDebugValue: us,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return Ce === null ? rs(l, e, t) : Yf(
        l,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ls(il)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : Mn(e),
        t
      ];
    },
    useSyncExternalStore: yf,
    useId: Vf,
    useHostTransitionStatus: cs,
    useFormState: Nf,
    useActionState: Nf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return Ce !== null ? Ef(l, Ce, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: es,
    useCacheRefresh: Qf
  };
  Ff.useEffectEvent = jf;
  function ds(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : N({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var hs = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = At(), n = Al(a);
      n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (mt(t, e, a), _n(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = At(), n = Al(a);
      n.tag = 1, n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (mt(t, e, a), _n(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = At(), a = Al(l);
      a.tag = 2, t != null && (a.callback = t), t = _l(e, a, l), t !== null && (mt(t, e, l), _n(t, e, l));
    }
  };
  function Wf(e, t, l, a, n, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Sn(l, a) || !Sn(n, u) : !0;
  }
  function If(e, t, l, a) {
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
      l === t && (l = N({}, l));
      for (var n in e)
        l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  function Pf(e) {
    Oi(e);
  }
  function ed(e) {
    console.error(e);
  }
  function td(e) {
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
  function ld(e, t, l) {
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
  function ms(e, t, l) {
    return l = Al(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      eu(e, t);
    }, l;
  }
  function ad(e) {
    return e = Al(e), e.tag = 3, e;
  }
  function nd(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      e.payload = function() {
        return n(u);
      }, e.callback = function() {
        ld(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      ld(t, l, a), typeof n != "function" && (Ul === null ? Ul = /* @__PURE__ */ new Set([this]) : Ul.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function G1(e, t, l, a, n) {
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
            return Dt === null ? du() : l.alternate === null && qe === 0 && (qe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === ki ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), qs(e, a, n)), !1;
          case 22:
            return l.flags |= 65536, a === ki ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), qs(e, a, n)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return qs(e, a, n), du(), !1;
    }
    if (pe)
      return t = Rt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== jr && (e = Error(o(422), { cause: a }), Rn(Ot(e, l)))) : (a !== jr && (t = Error(o(423), {
        cause: a
      }), Rn(
        Ot(t, l)
      )), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Ot(a, l), n = ms(
        e.stateNode,
        a,
        n
      ), Vr(e, n), qe !== 4 && (qe = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Ot(u, l), Xn === null ? Xn = [u] : Xn.push(u), qe !== 4 && (qe = 2), t === null) return !0;
    a = Ot(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = n & -n, l.lanes |= e, e = ms(l.stateNode, a, e), Vr(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ul === null || !Ul.has(u))))
            return l.flags |= 65536, n &= -n, l.lanes |= n, n = ad(n), nd(
              n,
              e,
              l,
              a
            ), Vr(l, n), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ys = Error(o(461)), Ze = !1;
  function lt(e, t, l, a) {
    t.child = e === null ? sf(t, null, l, a) : ia(
      t,
      e.child,
      l,
      a
    );
  }
  function id(e, t, l, a, n) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a)
        m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return ta(t), a = Fr(
      e,
      t,
      l,
      f,
      u,
      n
    ), m = Wr(), e !== null && !Ze ? (Ir(e, t, n), ul(e, t, n)) : (pe && m && Or(t), t.flags |= 1, lt(e, t, a, n), t.child);
  }
  function ud(e, t, l, a, n) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !_r(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, rd(
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
    if (u = e.child, !Rs(e, n)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Sn, l(f, a) && e.ref === t.ref)
        return ul(e, t, n);
    }
    return t.flags |= 1, e = el(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function rd(e, t, l, a, n) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Sn(u, a) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = a = u, Rs(e, n))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else
          return t.lanes = e.lanes, ul(e, t, n);
    }
    return gs(
      e,
      t,
      l,
      a,
      n
    );
  }
  function sd(e, t, l, a) {
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
        return cd(
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
        ), u !== null ? ff(t, u) : Zr(), df(t);
      else
        return a = t.lanes = 536870912, cd(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (qi(t, u.cachePool), ff(t, u), Nl(), t.memoizedState = null) : (e !== null && qi(t, null), Zr(), Nl());
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
  function cd(e, t, l, a, n) {
    var u = Yr();
    return u = u === null ? null : { parent: Ve._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && qi(t, null), Zr(), df(t), e !== null && ja(e, t, a, !0), t.childLanes = n, null;
  }
  function tu(e, t) {
    return t = au(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function od(e, t, l) {
    return ia(t, e.child, null, l), e = tu(t, t.pendingProps), e.flags |= 2, wt(t), t.memoizedState = null, e;
  }
  function V1(e, t, l) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (pe) {
        if (a.mode === "hidden")
          return e = tu(t, a), t.lanes = 536870912, Dn(null, e);
        if (Jr(t), (e = Me) ? (e = x0(
          e,
          Ut
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: xl !== null ? { id: Qt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Zo(e), l.return = t, t.child = l, et = t, Me = null)) : e = null, e === null) throw wl(t);
        return t.lanes = 536870912, null;
      }
      return tu(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Jr(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = od(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Ze || ja(e, t, l, !1), n = (l & e.childLanes) !== 0, Ze || n) {
        if (a = ze, a !== null && (f = Ic(a, l), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, Wl(e, f), mt(a, e, f), ys;
        du(), t = od(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Me = Bt(f.nextSibling), et = t, pe = !0, Rl = null, Ut = !1, e !== null && $o(t, e), t = tu(t, a), t.flags |= 4096;
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
  function gs(e, t, l, a, n) {
    return ta(t), l = Fr(
      e,
      t,
      l,
      a,
      void 0,
      n
    ), a = Wr(), e !== null && !Ze ? (Ir(e, t, n), ul(e, t, n)) : (pe && a && Or(t), t.flags |= 1, lt(e, t, l, n), t.child);
  }
  function fd(e, t, l, a, n, u) {
    return ta(t), t.updateQueue = null, l = mf(
      t,
      a,
      l,
      n
    ), hf(e), a = Wr(), e !== null && !Ze ? (Ir(e, t, u), ul(e, t, u)) : (pe && a && Or(t), t.flags |= 1, lt(e, t, l, u), t.child);
  }
  function dd(e, t, l, a, n) {
    if (ta(t), t.stateNode === null) {
      var u = za, f = l.contextType;
      typeof f == "object" && f !== null && (u = tt(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = hs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Xr(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? tt(f) : za, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (ds(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && hs.enqueueReplaceState(u, u.state, null), Nn(t, a, u, n), zn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var m = t.memoizedProps, b = ra(l, m);
      u.props = b;
      var _ = u.context, D = l.contextType;
      f = za, typeof D == "object" && D !== null && (f = tt(D));
      var H = l.getDerivedStateFromProps;
      D = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, D || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || _ !== f) && If(
        t,
        u,
        a,
        f
      ), Cl = !1;
      var z = t.memoizedState;
      u.state = z, Nn(t, a, u, n), zn(), _ = t.memoizedState, m || z !== _ || Cl ? (typeof H == "function" && (ds(
        t,
        l,
        H,
        a
      ), _ = t.memoizedState), (b = Cl || Wf(
        t,
        l,
        b,
        a,
        z,
        _,
        f
      )) ? (D || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = b) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Gr(e, t), f = t.memoizedProps, D = ra(l, f), u.props = D, H = t.pendingProps, z = u.context, _ = l.contextType, b = za, typeof _ == "object" && _ !== null && (b = tt(_)), m = l.getDerivedStateFromProps, (_ = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== H || z !== b) && If(
        t,
        u,
        a,
        b
      ), Cl = !1, z = t.memoizedState, u.state = z, Nn(t, a, u, n), zn();
      var M = t.memoizedState;
      f !== H || z !== M || Cl || e !== null && e.dependencies !== null && Li(e.dependencies) ? (typeof m == "function" && (ds(
        t,
        l,
        m,
        a
      ), M = t.memoizedState), (D = Cl || Wf(
        t,
        l,
        D,
        a,
        z,
        M,
        b
      ) || e !== null && e.dependencies !== null && Li(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, b), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        b
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = b, a = D) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && z === e.memoizedState || (t.flags |= 1024), a = !1);
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
  function hd(e, t, l, a) {
    return Pl(), t.flags |= 256, lt(e, t, l, a), t.child;
  }
  var ps = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function vs(e) {
    return { baseLanes: e, cachePool: tf() };
  }
  function bs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ct), e;
  }
  function md(e, t, l) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), f && (n = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (pe) {
        if (n ? zl(t) : Nl(), (e = Me) ? (e = x0(
          e,
          Ut
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: xl !== null ? { id: Qt, overflow: Zt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Zo(e), l.return = t, t.child = l, et = t, Me = null)) : e = null, e === null) throw wl(t);
        return tc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, n ? (Nl(), n = t.mode, m = au(
        { mode: "hidden", children: m },
        n
      ), a = Il(
        a,
        n,
        l,
        null
      ), m.return = t, a.return = t, m.sibling = a, t.child = m, a = t.child, a.memoizedState = vs(l), a.childLanes = bs(
        e,
        f,
        l
      ), t.memoizedState = ps, Dn(null, a)) : (zl(t), Ss(t, m));
    }
    var b = e.memoizedState;
    if (b !== null && (m = b.dehydrated, m !== null)) {
      if (u)
        t.flags & 256 ? (zl(t), t.flags &= -257, t = Es(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Nl(), t.child = e.child, t.flags |= 128, t = null) : (Nl(), m = a.fallback, n = t.mode, a = au(
          { mode: "visible", children: a.children },
          n
        ), m = Il(
          m,
          n,
          l,
          null
        ), m.flags |= 2, a.return = t, m.return = t, a.sibling = m, t.child = a, ia(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = vs(l), a.childLanes = bs(
          e,
          f,
          l
        ), t.memoizedState = ps, t = Dn(null, a));
      else if (zl(t), tc(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(o(419)), a.stack = "", a.digest = f, Rn({ value: a, source: null, stack: null }), t = Es(
          e,
          t,
          l
        );
      } else if (Ze || ja(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
        if (f = ze, f !== null && (a = Ic(f, l), a !== 0 && a !== b.retryLane))
          throw b.retryLane = a, Wl(e, a), mt(f, e, a), ys;
        ec(m) || du(), t = Es(
          e,
          t,
          l
        );
      } else
        ec(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Me = Bt(
          m.nextSibling
        ), et = t, pe = !0, Rl = null, Ut = !1, e !== null && $o(t, e), t = Ss(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (Nl(), m = a.fallback, n = t.mode, b = e.child, _ = b.sibling, a = el(b, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = b.subtreeFlags & 65011712, _ !== null ? m = el(
      _,
      m
    ) : (m = Il(
      m,
      n,
      l,
      null
    ), m.flags |= 2), m.return = t, a.return = t, a.sibling = m, t.child = a, Dn(null, a), a = t.child, m = e.child.memoizedState, m === null ? m = vs(l) : (n = m.cachePool, n !== null ? (b = Ve._currentValue, n = n.parent !== b ? { parent: b, pool: b } : n) : n = tf(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: n
    }), a.memoizedState = m, a.childLanes = bs(
      e,
      f,
      l
    ), t.memoizedState = ps, Dn(e.child, a)) : (zl(t), l = e.child, e = l.sibling, l = el(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Ss(e, t) {
    return t = au(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function au(e, t) {
    return e = xt(22, e, null, t), e.lanes = 0, e;
  }
  function Es(e, t, l) {
    return ia(t, e.child, null, l), e = Ss(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function yd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Br(e.return, t, l);
  }
  function xs(e, t, l, a, n, u) {
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
  function gd(e, t, l) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Xe.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(Xe, f), lt(e, t, a, l), a = pe ? xn : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && yd(e, l, t);
        else if (e.tag === 19)
          yd(e, l, t);
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
        l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), xs(
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
        xs(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        xs(
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
  function Rs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Li(e)));
  }
  function Q1(e, t, l) {
    switch (t.tag) {
      case 3:
        nt(t, t.stateNode.containerInfo), Tl(t, Ve, e.memoizedState.cache), Pl();
        break;
      case 27:
      case 5:
        Vl(t);
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
          return t.flags |= 128, Jr(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (zl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? md(e, t, l) : (zl(t), e = ul(
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
            return gd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), V(Xe, Xe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, sd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Tl(t, Ve, e.memoizedState.cache);
    }
    return ul(e, t, l);
  }
  function pd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!Rs(e, l) && (t.flags & 128) === 0)
          return Ze = !1, Q1(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, pe && (t.flags & 1048576) !== 0 && Jo(t, xn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = aa(t.elementType), t.type = e, typeof e == "function")
            _r(e) ? (a = ra(e, a), t.tag = 1, t = dd(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = gs(
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
                t.tag = 11, t = id(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (n === $) {
                t.tag = 14, t = ud(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = ke(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return gs(
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
        ), dd(
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
          n = u.element, Gr(e, t), Nn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, Tl(t, Ve, a), a !== u.cache && Lr(
            t,
            [Ve],
            l,
            !0
          ), zn(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = hd(
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
              ), Rn(n), t = hd(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Bt(e.firstChild), et = t, pe = !0, Rl = null, Ut = !0, l = sf(
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
        return lu(e, t), e === null ? (l = _0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : pe || (l = t.type, e = t.pendingProps, a = bu(
          ae.current
        ).createElement(l), a[Pe] = t, a[st] = e, at(a, l, e), Fe(a), t.stateNode = a) : t.memoizedState = _0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Vl(t), e === null && pe && (a = t.stateNode = T0(
          t.type,
          t.pendingProps,
          ae.current
        ), et = t, Ut = !0, n = Me, Hl(t.type) ? (lc = n, Me = Bt(a.firstChild)) : Me = n), lt(
          e,
          t,
          t.pendingProps.children,
          l
        ), lu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && pe && ((n = a = Me) && (a = Ey(
          a,
          t.type,
          t.pendingProps,
          Ut
        ), a !== null ? (t.stateNode = a, et = t, Me = Bt(a.firstChild), Ut = !1, n = !0) : n = !1), n || wl(t)), Vl(t), n = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Ws(n, u) ? a = null : f !== null && Ws(n, f) && (t.flags |= 32), t.memoizedState !== null && (n = Fr(
          e,
          t,
          B1,
          null,
          null,
          l
        ), Fn._currentValue = n), lu(e, t), lt(e, t, a, l), t.child;
      case 6:
        return e === null && pe && ((e = l = Me) && (l = xy(
          l,
          t.pendingProps,
          Ut
        ), l !== null ? (t.stateNode = l, et = t, Me = null, e = !0) : e = !1), e || wl(t)), null;
      case 13:
        return md(e, t, l);
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
        return id(
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
        return ud(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return rd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return gd(e, t, l);
      case 31:
        return V1(e, t, l);
      case 22:
        return sd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return ta(t), a = tt(Ve), e === null ? (n = Yr(), n === null && (n = ze, u = Hr(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = { parent: a, cache: n }, Xr(t), Tl(t, Ve, n)) : ((e.lanes & l) !== 0 && (Gr(e, t), Nn(t, null, null, l), zn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), Tl(t, Ve, a)) : (a = u.cache, Tl(t, Ve, a), a !== n.cache && Lr(
          t,
          [Ve],
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
  function ws(e, t, l, a, n) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (n & 335544128) === n)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Vd()) e.flags |= 8192;
        else
          throw na = ki, kr;
    } else e.flags &= -16777217;
  }
  function vd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !j0(t))
      if (Vd()) e.flags |= 8192;
      else
        throw na = ki, kr;
  }
  function nu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? $c() : 536870912, e.lanes |= t, Qa |= t);
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
  function Z1(e, t, l) {
    var a = t.pendingProps;
    switch (Mr(t), t.tag) {
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
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), al(Ve), Be(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ma(t) ? rl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ur())), je(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return e === null ? (rl(t), u !== null ? (je(t), vd(t, u)) : (je(t), ws(
          t,
          n,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (rl(t), je(t), vd(t, u)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && rl(t), je(t), ws(
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
          e = Y.current, Ma(t) ? Fo(t) : (e = T0(n, a, l), t.stateNode = e, rl(t));
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
            Fo(t);
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
        return je(t), ws(
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
            e[Pe] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || m0(e.nodeValue, l)), e || wl(t, !0);
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
            l = Ur(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
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
            n = Ur(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (wt(t), t) : (wt(t), null);
        }
        return wt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), nu(t, t.updateQueue), je(t), null);
      case 4:
        return Be(), e === null && Zs(t.stateNode.containerInfo), je(t), null;
      case 10:
        return al(t.type), je(t), null;
      case 19:
        if (B(Xe), a = t.memoizedState, a === null) return je(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) Bn(a, !1);
          else {
            if (qe !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Qi(e), u !== null) {
                  for (t.flags |= 128, Bn(a, !1), e = u.updateQueue, t.updateQueue = e, nu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Qo(l, e), l = l.sibling;
                  return V(
                    Xe,
                    Xe.current & 1 | 2
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
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = vt(), e.sibling = null, l = Xe.current, V(
          Xe,
          n ? l & 1 | 2 : l & 1
        ), pe && tl(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return wt(t), Kr(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && nu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && B(la), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), al(Ve), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function K1(e, t) {
    switch (Mr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return al(Ve), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return B(Xe), null;
      case 4:
        return Be(), null;
      case 10:
        return al(t.type), null;
      case 22:
      case 23:
        return wt(t), Kr(), e !== null && B(la), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return al(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bd(e, t) {
    switch (Mr(t), t.tag) {
      case 3:
        al(Ve), Be();
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
        B(Xe);
        break;
      case 10:
        al(t.type);
        break;
      case 22:
      case 23:
        wt(t), Kr(), e !== null && B(la);
        break;
      case 24:
        al(Ve);
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
    } catch (m) {
      Te(t, t.return, m);
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
            var f = a.inst, m = f.destroy;
            if (m !== void 0) {
              f.destroy = void 0, n = t;
              var b = l, _ = m;
              try {
                _();
              } catch (D) {
                Te(
                  n,
                  b,
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
  function Sd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        of(t, l);
      } catch (a) {
        Te(e, e.return, a);
      }
    }
  }
  function Ed(e, t, l) {
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
  function xd(e) {
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
  function Ts(e, t, l) {
    try {
      var a = e.stateNode;
      yy(a, e.type, l, t), a[st] = t;
    } catch (n) {
      Te(e, e.return, n);
    }
  }
  function Rd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hl(e.type) || e.tag === 4;
  }
  function Cs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Hl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function As(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = It));
    else if (a !== 4 && (a === 27 && Hl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (As(e, t, l), e = e.sibling; e !== null; )
        As(e, t, l), e = e.sibling;
  }
  function iu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Hl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (iu(e, t, l), e = e.sibling; e !== null; )
        iu(e, t, l), e = e.sibling;
  }
  function wd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      at(t, a, l), t[Pe] = e, t[st] = l;
    } catch (u) {
      Te(e, e.return, u);
    }
  }
  var sl = !1, Ke = !1, _s = !1, Td = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function J1(e, t) {
    if (e = e.containerInfo, $s = Cu, e = Bo(e), Er(e)) {
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
            var f = 0, m = -1, b = -1, _ = 0, D = 0, H = e, z = null;
            t: for (; ; ) {
              for (var M; H !== l || n !== 0 && H.nodeType !== 3 || (m = f + n), H !== u || a !== 0 && H.nodeType !== 3 || (b = f + a), H.nodeType === 3 && (f += H.nodeValue.length), (M = H.firstChild) !== null; )
                z = H, H = M;
              for (; ; ) {
                if (H === e) break t;
                if (z === l && ++_ === n && (m = f), z === u && ++D === a && (b = f), (M = H.nextSibling) !== null) break;
                H = z, z = H.parentNode;
              }
              H = M;
            }
            l = m === -1 || b === -1 ? null : { start: m, end: b };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Fs = { focusedElem: e, selectionRange: l }, Cu = !1, We = t; We !== null; )
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
                  Ps(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ps(e);
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
  function Cd(e, t, l) {
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
        a & 64 && Sd(l), a & 512 && Hn(l, l.return);
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
            of(e, t);
          } catch (f) {
            Te(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && wd(l);
      case 26:
      case 5:
        ol(e, l), t === null && a & 4 && xd(l), a & 512 && Hn(l, l.return);
        break;
      case 12:
        ol(e, l);
        break;
      case 31:
        ol(e, l), a & 4 && zd(e, l);
        break;
      case 13:
        ol(e, l), a & 4 && Nd(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = ay.bind(
          null,
          l
        ), Ry(e, l))));
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
  function Ad(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ad(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && nr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, ot = !1;
  function cl(e, t, l) {
    for (l = l.child; l !== null; )
      _d(e, t, l), l = l.sibling;
  }
  function _d(e, t, l) {
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
        Ue !== null && (ot ? (e = Ue, S0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Pa(e)) : S0(Ue, l.stateNode));
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
        Ke || (Kt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ed(
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
  function zd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Pa(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function Nd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Pa(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function $1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Td()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Td()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function uu(e, t) {
    var l = $1(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var n = ny.bind(null, e, a);
        a.then(n, n);
      }
    });
  }
  function ft(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Hl(m.type)) {
                Ue = m.stateNode, ot = !1;
                break e;
              }
              break;
            case 5:
              Ue = m.stateNode, ot = !1;
              break e;
            case 3:
            case 4:
              Ue = m.stateNode.containerInfo, ot = !0;
              break e;
          }
          m = m.return;
        }
        if (Ue === null) throw Error(o(160));
        _d(u, f, n), Ue = null, ot = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Od(t, e), t = t.sibling;
  }
  var kt = null;
  function Od(e, t) {
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
        var n = kt;
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
                      var f = O0(
                        "link",
                        "href",
                        n
                      ).get(a + (l.href || ""));
                      if (f) {
                        for (var m = 0; m < f.length; m++)
                          if (u = f[m], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(m, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), at(u, a, l), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = O0(
                        "meta",
                        "content",
                        n
                      ).get(a + (l.content || ""))) {
                        for (m = 0; m < f.length; m++)
                          if (u = f[m], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(m, 1);
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
                M0(
                  n,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = N0(
                n,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? M0(
              n,
              e.type,
              e.stateNode
            ) : N0(
              n,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Ts(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        ft(t, e), dt(e), a & 512 && (Ke || l === null || Kt(l, l.return)), l !== null && a & 4 && Ts(
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
        a & 4 && e.stateNode != null && (n = e.memoizedProps, Ts(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), a & 1024 && (_s = !0);
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
        if (xu = null, n = kt, kt = Su(t.containerInfo), ft(t, e), kt = n, dt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Pa(t.containerInfo);
          } catch (J) {
            Te(e, e.return, J);
          }
        _s && (_s = !1, Md(e));
        break;
      case 4:
        a = kt, kt = Su(
          e.stateNode.containerInfo
        ), ft(t, e), dt(e), kt = a;
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
        var b = l !== null && l.memoizedState !== null, _ = sl, D = Ke;
        if (sl = _ || n, Ke = D || b, ft(t, e), Ke = D, sl = _, dt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || b || sl || Ke || sa(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                b = l = t;
                try {
                  if (u = b.stateNode, n)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = b.stateNode;
                    var H = b.memoizedProps.style, z = H != null && H.hasOwnProperty("display") ? H.display : null;
                    m.style.display = z == null || typeof z == "boolean" ? "" : ("" + z).trim();
                  }
                } catch (J) {
                  Te(b, b.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = n ? "" : b.memoizedProps;
                } catch (J) {
                  Te(b, b.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                b = t;
                try {
                  var M = b.stateNode;
                  n ? E0(M, !0) : E0(b.stateNode, !1);
                } catch (J) {
                  Te(b, b.return, J);
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
          if (Rd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode, u = Cs(e);
            iu(e, u, n);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (xa(f, ""), l.flags &= -33);
            var m = Cs(e);
            iu(e, m, f);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo, _ = Cs(e);
            As(
              e,
              _,
              b
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
  function Md(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Md(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ol(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Cd(e, t.alternate, t), t = t.sibling;
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
          typeof l.componentWillUnmount == "function" && Ed(
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
            var m = a.stateNode;
            try {
              var b = n.shared.hiddenCallbacks;
              if (b !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < b.length; n++)
                  cf(b[n], m);
            } catch (_) {
              Te(a, a.return, _);
            }
          }
          l && f & 64 && Sd(u), Hn(u, u.return);
          break;
        case 27:
          wd(u);
        case 26:
        case 5:
          fl(
            n,
            u,
            l
          ), l && a === null && f & 4 && xd(u), Hn(u, u.return);
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
          ), l && f & 4 && zd(n, u);
          break;
        case 13:
          fl(
            n,
            u,
            l
          ), l && f & 4 && Nd(n, u);
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
  function zs(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && wn(l));
  }
  function Ns(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wn(e));
  }
  function Xt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        jd(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function jd(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Xt(
          e,
          t,
          l,
          a
        ), n & 2048 && Ln(9, t);
        break;
      case 1:
        Xt(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Xt(
          e,
          t,
          l,
          a
        ), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && wn(e)));
        break;
      case 12:
        if (n & 2048) {
          Xt(
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
          } catch (b) {
            Te(t, t.return, b);
          }
        } else
          Xt(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Xt(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Xt(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Xt(
          e,
          t,
          l,
          a
        ) : qn(e, t) : u._visibility & 2 ? Xt(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, Xa(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && zs(f, t);
        break;
      case 24:
        Xt(
          e,
          t,
          l,
          a
        ), n & 2048 && Ns(t.alternate, t);
        break;
      default:
        Xt(
          e,
          t,
          l,
          a
        );
    }
  }
  function Xa(e, t, l, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, m = l, b = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Xa(
            u,
            f,
            m,
            b,
            n
          ), Ln(8, f);
          break;
        case 23:
          break;
        case 22:
          var D = f.stateNode;
          f.memoizedState !== null ? D._visibility & 2 ? Xa(
            u,
            f,
            m,
            b,
            n
          ) : qn(
            u,
            f
          ) : (D._visibility |= 2, Xa(
            u,
            f,
            m,
            b,
            n
          )), n && _ & 2048 && zs(
            f.alternate,
            f
          );
          break;
        case 24:
          Xa(
            u,
            f,
            m,
            b,
            n
          ), n && _ & 2048 && Ns(f.alternate, f);
          break;
        default:
          Xa(
            u,
            f,
            m,
            b,
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
            qn(l, a), n & 2048 && zs(
              a.alternate,
              a
            );
            break;
          case 24:
            qn(l, a), n & 2048 && Ns(a.alternate, a);
            break;
          default:
            qn(l, a);
        }
        t = t.sibling;
      }
  }
  var Yn = 8192;
  function Ga(e, t, l) {
    if (e.subtreeFlags & Yn)
      for (e = e.child; e !== null; )
        Ud(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Ud(e, t, l) {
    switch (e.tag) {
      case 26:
        Ga(
          e,
          t,
          l
        ), e.flags & Yn && e.memoizedState !== null && Dy(
          l,
          kt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Ga(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = kt;
        kt = Su(e.stateNode.containerInfo), Ga(
          e,
          t,
          l
        ), kt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Yn, Yn = 16777216, Ga(
          e,
          t,
          l
        ), Yn = a) : Ga(
          e,
          t,
          l
        ));
        break;
      default:
        Ga(
          e,
          t,
          l
        );
    }
  }
  function Dd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function kn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          We = a, Ld(
            a,
            e
          );
        }
      Dd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Bd(e), e = e.sibling;
  }
  function Bd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        kn(e), e.flags & 2048 && Ol(9, e, e.return);
        break;
      case 3:
        kn(e);
        break;
      case 12:
        kn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ru(e)) : kn(e);
        break;
      default:
        kn(e);
    }
  }
  function ru(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          We = a, Ld(
            a,
            e
          );
        }
      Dd(e);
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
  function Ld(e, t) {
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
          if (Ad(a), a === l) {
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
  var F1 = {
    getCacheForType: function(e) {
      var t = tt(Ve), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return tt(Ve).controller.signal;
    }
  }, W1 = typeof WeakMap == "function" ? WeakMap : Map, Re = 0, ze = null, fe = null, ye = 0, we = 0, Tt = null, Ml = !1, Va = !1, Os = !1, dl = 0, qe = 0, jl = 0, ca = 0, Ms = 0, Ct = 0, Qa = 0, Xn = null, ht = null, js = !1, su = 0, Hd = 0, cu = 1 / 0, ou = null, Ul = null, Je = 0, Dl = null, Za = null, hl = 0, Us = 0, Ds = null, qd = null, Gn = 0, Bs = null;
  function At() {
    return (Re & 2) !== 0 && ye !== 0 ? ye & -ye : k.T !== null ? Xs() : Pc();
  }
  function Yd() {
    if (Ct === 0)
      if ((ye & 536870912) === 0 || pe) {
        var e = vi;
        vi <<= 1, (vi & 3932160) === 0 && (vi = 262144), Ct = e;
      } else Ct = 536870912;
    return e = Rt.current, e !== null && (e.flags |= 32), Ct;
  }
  function mt(e, t, l) {
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
  function kd(e, t, l) {
    if ((Re & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || cn(e, t), n = a ? ey(e, t) : Hs(e, t, !0), u = a;
    do {
      if (n === 0) {
        Va && !a && Bl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !I1(l)) {
          n = Hs(e, t, !1), u = !1;
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
              var m = e;
              n = Xn;
              var b = m.current.memoizedState.isDehydrated;
              if (b && (Ka(m, f).flags |= 256), f = Hs(
                m,
                f,
                !1
              ), f !== 2) {
                if (Os && !b) {
                  m.errorRecoveryDisabledLanes |= u, ca |= u, n = 4;
                  break e;
                }
                u = ht, ht = n, u !== null && (ht === null ? ht = u : ht.push.apply(
                  ht,
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
              ht = null;
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
            hl = t, a.timeoutHandle = v0(
              Xd.bind(
                null,
                a,
                l,
                ht,
                ou,
                js,
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
          Xd(
            a,
            l,
            ht,
            ou,
            js,
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
  function Xd(e, t, l, a, n, u, f, m, b, _, D, H, z, M) {
    if (e.timeoutHandle = -1, H = t.subtreeFlags, H & 8192 || (H & 16785408) === 16785408) {
      H = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: It
      }, Ud(
        t,
        u,
        H
      );
      var J = (u & 62914560) === u ? su - vt() : (u & 4194048) === u ? Hd - vt() : 0;
      if (J = By(
        H,
        J
      ), J !== null) {
        hl = u, e.cancelPendingCommit = J(
          Fd.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            n,
            f,
            m,
            b,
            D,
            H,
            null,
            z,
            M
          )
        ), Bl(e, u, f, !_);
        return;
      }
    }
    Fd(
      e,
      t,
      u,
      l,
      a,
      n,
      f,
      m,
      b
    );
  }
  function I1(e) {
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
    t &= ~Ms, t &= ~ca, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - St(n), f = 1 << u;
      a[u] = -1, n &= ~f;
    }
    l !== 0 && Fc(e, l, t);
  }
  function fu() {
    return (Re & 6) === 0 ? (Vn(0), !1) : !0;
  }
  function Ls() {
    if (fe !== null) {
      if (we === 0)
        var e = fe.return;
      else
        e = fe, ll = ea = null, Pr(e), La = null, Cn = 0, e = fe;
      for (; e !== null; )
        bd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function Ka(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, vy(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), hl = 0, Ls(), ze = e, fe = l = el(e.current, null), ye = t, we = 0, Tt = null, Ml = !1, Va = cn(e, t), Os = !1, Qa = Ct = Ms = ca = jl = qe = 0, ht = Xn = null, js = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - St(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
    return dl = t, Mi(), l;
  }
  function Gd(e, t) {
    ue = null, k.H = Un, t === Ba || t === Yi ? (t = nf(), we = 3) : t === kr ? (t = nf(), we = 4) : we = t === ys ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Tt = t, fe === null && (qe = 1, eu(
      e,
      Ot(t, e.current)
    ));
  }
  function Vd() {
    var e = Rt.current;
    return e === null ? !0 : (ye & 4194048) === ye ? Dt === null : (ye & 62914560) === ye || (ye & 536870912) !== 0 ? e === Dt : !1;
  }
  function Qd() {
    var e = k.H;
    return k.H = Un, e === null ? Un : e;
  }
  function Zd() {
    var e = k.A;
    return k.A = F1, e;
  }
  function du() {
    qe = 4, Ml || (ye & 4194048) !== ye && Rt.current !== null || (Va = !0), (jl & 134217727) === 0 && (ca & 134217727) === 0 || ze === null || Bl(
      ze,
      ye,
      Ct,
      !1
    );
  }
  function Hs(e, t, l) {
    var a = Re;
    Re |= 2;
    var n = Qd(), u = Zd();
    (ze !== e || ye !== t) && (ou = null, Ka(e, t)), t = !1;
    var f = qe;
    e: do
      try {
        if (we !== 0 && fe !== null) {
          var m = fe, b = Tt;
          switch (we) {
            case 8:
              Ls(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Rt.current === null && (t = !0);
              var _ = we;
              if (we = 0, Tt = null, Ja(e, m, b, _), l && Va) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = we, we = 0, Tt = null, Ja(e, m, b, _);
          }
        }
        P1(), f = qe;
        break;
      } catch (D) {
        Gd(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, ll = ea = null, Re = a, k.H = n, k.A = u, fe === null && (ze = null, ye = 0, Mi()), f;
  }
  function P1() {
    for (; fe !== null; ) Kd(fe);
  }
  function ey(e, t) {
    var l = Re;
    Re |= 2;
    var a = Qd(), n = Zd();
    ze !== e || ye !== t ? (ou = null, cu = vt() + 500, Ka(e, t)) : Va = cn(
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
              if (lf(u)) {
                we = 0, Tt = null, Jd(t);
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
              lf(u) ? (we = 0, Tt = null, Jd(t)) : (we = 0, Tt = null, Ja(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (fe.tag) {
                case 26:
                  f = fe.memoizedState;
                case 5:
                case 27:
                  var m = fe;
                  if (f ? j0(f) : m.stateNode.complete) {
                    we = 0, Tt = null;
                    var b = m.sibling;
                    if (b !== null) fe = b;
                    else {
                      var _ = m.return;
                      _ !== null ? (fe = _, hu(_)) : fe = null;
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
              Ls(), qe = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        ty();
        break;
      } catch (D) {
        Gd(e, D);
      }
    while (!0);
    return ll = ea = null, k.H = a, k.A = n, Re = l, fe !== null ? 0 : (ze = null, ye = 0, Mi(), qe);
  }
  function ty() {
    for (; fe !== null && !wm(); )
      Kd(fe);
  }
  function Kd(e) {
    var t = pd(e.alternate, e, dl);
    e.memoizedProps = e.pendingProps, t === null ? hu(e) : fe = t;
  }
  function Jd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ye
        );
        break;
      case 11:
        t = fd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ye
        );
        break;
      case 5:
        Pr(t);
      default:
        bd(l, t), t = fe = Qo(t, dl), t = pd(l, t, dl);
    }
    e.memoizedProps = e.pendingProps, t === null ? hu(e) : fe = t;
  }
  function Ja(e, t, l, a) {
    ll = ea = null, Pr(t), La = null, Cn = 0;
    var n = t.return;
    try {
      if (G1(
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
    t.flags & 32768 ? (pe || a === 1 ? e = !0 : Va || (ye & 536870912) !== 0 ? e = !1 : (Ml = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Rt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), $d(t, e)) : hu(t);
  }
  function hu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        $d(
          t,
          Ml
        );
        return;
      }
      e = t.return;
      var l = Z1(
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
  function $d(e, t) {
    do {
      var l = K1(e.alternate, e);
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
  function Fd(e, t, l, a, n, u, f, m, b) {
    e.cancelPendingCommit = null;
    do
      mu();
    while (Je !== 0);
    if ((Re & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Cr, Um(
        e,
        l,
        u,
        f,
        m,
        b
      ), e === ze && (fe = ze = null, ye = 0), Za = t, Dl = e, hl = l, Us = u, Ds = n, qd = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, iy(gi, function() {
        return t0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = k.T, k.T = null, n = Q.p, Q.p = 2, f = Re, Re |= 4;
        try {
          J1(e, t, l);
        } finally {
          Re = f, Q.p = n, k.T = a;
        }
      }
      Je = 1, Wd(), Id(), Pd();
    }
  }
  function Wd() {
    if (Je === 1) {
      Je = 0;
      var e = Dl, t = Za, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = k.T, k.T = null;
        var a = Q.p;
        Q.p = 2;
        var n = Re;
        Re |= 4;
        try {
          Od(t, e);
          var u = Fs, f = Bo(e.containerInfo), m = u.focusedElem, b = u.selectionRange;
          if (f !== m && m && m.ownerDocument && Do(
            m.ownerDocument.documentElement,
            m
          )) {
            if (b !== null && Er(m)) {
              var _ = b.start, D = b.end;
              if (D === void 0 && (D = _), "selectionStart" in m)
                m.selectionStart = _, m.selectionEnd = Math.min(
                  D,
                  m.value.length
                );
              else {
                var H = m.ownerDocument || document, z = H && H.defaultView || window;
                if (z.getSelection) {
                  var M = z.getSelection(), J = m.textContent.length, ee = Math.min(b.start, J), _e = b.end === void 0 ? ee : Math.min(b.end, J);
                  !M.extend && ee > _e && (f = _e, _e = ee, ee = f);
                  var w = Uo(
                    m,
                    ee
                  ), x = Uo(
                    m,
                    _e
                  );
                  if (w && x && (M.rangeCount !== 1 || M.anchorNode !== w.node || M.anchorOffset !== w.offset || M.focusNode !== x.node || M.focusOffset !== x.offset)) {
                    var A = H.createRange();
                    A.setStart(w.node, w.offset), M.removeAllRanges(), ee > _e ? (M.addRange(A), M.extend(x.node, x.offset)) : (A.setEnd(x.node, x.offset), M.addRange(A));
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
          Cu = !!$s, Fs = $s = null;
        } finally {
          Re = n, Q.p = a, k.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function Id() {
    if (Je === 2) {
      Je = 0;
      var e = Dl, t = Za, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = k.T, k.T = null;
        var a = Q.p;
        Q.p = 2;
        var n = Re;
        Re |= 4;
        try {
          Cd(e, t.alternate, t);
        } finally {
          Re = n, Q.p = a, k.T = l;
        }
      }
      Je = 3;
    }
  }
  function Pd() {
    if (Je === 4 || Je === 3) {
      Je = 0, Tm();
      var e = Dl, t = Za, l = hl, a = qd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Je = 5 : (Je = 0, Za = Dl = null, e0(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (n === 0 && (Ul = null), lr(l), t = t.stateNode, bt && typeof bt.onCommitFiberRoot == "function")
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
        t = k.T, n = Q.p, Q.p = 2, k.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            u(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          k.T = t, Q.p = n;
        }
      }
      (hl & 3) !== 0 && mu(), Jt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Bs ? Gn++ : (Gn = 0, Bs = e) : Gn = 0, Vn(0);
    }
  }
  function e0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, wn(t)));
  }
  function mu() {
    return Wd(), Id(), Pd(), t0();
  }
  function t0() {
    if (Je !== 5) return !1;
    var e = Dl, t = Us;
    Us = 0;
    var l = lr(hl), a = k.T, n = Q.p;
    try {
      Q.p = 32 > l ? 32 : l, k.T = null, l = Ds, Ds = null;
      var u = Dl, f = hl;
      if (Je = 0, Za = Dl = null, hl = 0, (Re & 6) !== 0) throw Error(o(331));
      var m = Re;
      if (Re |= 4, Bd(u.current), jd(
        u,
        u.current,
        f,
        l
      ), Re = m, Vn(0, !1), bt && typeof bt.onPostCommitFiberRoot == "function")
        try {
          bt.onPostCommitFiberRoot(sn, u);
        } catch {
        }
      return !0;
    } finally {
      Q.p = n, k.T = a, e0(e, t);
    }
  }
  function l0(e, t, l) {
    t = Ot(l, t), t = ms(e.stateNode, t, 2), e = _l(e, t, 2), e !== null && (on(e, 2), Jt(e));
  }
  function Te(e, t, l) {
    if (e.tag === 3)
      l0(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          l0(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ul === null || !Ul.has(a))) {
            e = Ot(l, e), l = ad(2), a = _l(t, l, 2), a !== null && (nd(
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
  function qs(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new W1();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(l) || (Os = !0, n.add(l), e = ly.bind(null, e, t, l), t.then(e, e));
  }
  function ly(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, ze === e && (ye & l) === l && (qe === 4 || qe === 3 && (ye & 62914560) === ye && 300 > vt() - su ? (Re & 2) === 0 && Ka(e, 0) : Ms |= l, Qa === ye && (Qa = 0)), Jt(e);
  }
  function a0(e, t) {
    t === 0 && (t = $c()), e = Wl(e, t), e !== null && (on(e, t), Jt(e));
  }
  function ay(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), a0(e, l);
  }
  function ny(e, t) {
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
    a !== null && a.delete(t), a0(e, l);
  }
  function iy(e, t) {
    return Iu(e, t);
  }
  var yu = null, $a = null, Ys = !1, gu = !1, ks = !1, Ll = 0;
  function Jt(e) {
    e !== $a && e.next === null && ($a === null ? yu = $a = e : $a = $a.next = e), gu = !0, Ys || (Ys = !0, ry());
  }
  function Vn(e, t) {
    if (!ks && gu) {
      ks = !0;
      do
        for (var l = !1, a = yu; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - St(42 | e) + 1) - 1, u &= n & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, r0(a, u));
          } else
            u = ye, u = Si(
              a,
              a === ze ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || cn(a, u) || (l = !0, r0(a, u));
          a = a.next;
        }
      while (l);
      ks = !1;
    }
  }
  function uy() {
    n0();
  }
  function n0() {
    gu = Ys = !1;
    var e = 0;
    Ll !== 0 && py() && (e = Ll);
    for (var t = vt(), l = null, a = yu; a !== null; ) {
      var n = a.next, u = i0(a, t);
      u === 0 ? (a.next = null, l === null ? yu = n : l.next = n, n === null && ($a = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (gu = !0)), a = n;
    }
    Je !== 0 && Je !== 5 || Vn(e), Ll !== 0 && (Ll = 0);
  }
  function i0(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - St(u), m = 1 << f, b = n[f];
      b === -1 ? ((m & l) === 0 || (m & a) !== 0) && (n[f] = jm(m, t)) : b <= t && (e.expiredLanes |= m), u &= ~m;
    }
    if (t = ze, l = ye, l = Si(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (we === 2 || we === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Pu(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || cn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Pu(a), lr(l)) {
        case 2:
        case 8:
          l = Kc;
          break;
        case 32:
          l = gi;
          break;
        case 268435456:
          l = Jc;
          break;
        default:
          l = gi;
      }
      return a = u0.bind(null, e), l = Iu(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Pu(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function u0(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (mu() && e.callbackNode !== l)
      return null;
    var a = ye;
    return a = Si(
      e,
      e === ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (kd(e, a, t), i0(e, vt()), e.callbackNode != null && e.callbackNode === l ? u0.bind(null, e) : null);
  }
  function r0(e, t) {
    if (mu()) return null;
    kd(e, t, !0);
  }
  function ry() {
    by(function() {
      (Re & 6) !== 0 ? Iu(
        Zc,
        uy
      ) : n0();
    });
  }
  function Xs() {
    if (Ll === 0) {
      var e = Ua;
      e === 0 && (e = pi, pi <<= 1, (pi & 261888) === 0 && (pi = 256)), Ll = e;
    }
    return Ll;
  }
  function s0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : wi("" + e);
  }
  function c0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function sy(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var u = s0(
        (n[st] || null).action
      ), f = a.submitter;
      f && (t = (t = f[st] || null) ? s0(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var m = new _i(
        "action",
        "action",
        null,
        a,
        n
      );
      e.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ll !== 0) {
                  var b = f ? c0(n, f) : new FormData(n);
                  ss(
                    l,
                    {
                      pending: !0,
                      data: b,
                      method: n.method,
                      action: u
                    },
                    null,
                    b
                  );
                }
              } else
                typeof u == "function" && (m.preventDefault(), b = f ? c0(n, f) : new FormData(n), ss(
                  l,
                  {
                    pending: !0,
                    data: b,
                    method: n.method,
                    action: u
                  },
                  u,
                  b
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Gs = 0; Gs < Tr.length; Gs++) {
    var Vs = Tr[Gs], cy = Vs.toLowerCase(), oy = Vs[0].toUpperCase() + Vs.slice(1);
    Yt(
      cy,
      "on" + oy
    );
  }
  Yt(qo, "onAnimationEnd"), Yt(Yo, "onAnimationIteration"), Yt(ko, "onAnimationStart"), Yt("dblclick", "onDoubleClick"), Yt("focusin", "onFocus"), Yt("focusout", "onBlur"), Yt(C1, "onTransitionRun"), Yt(A1, "onTransitionStart"), Yt(_1, "onTransitionCancel"), Yt(Xo, "onTransitionEnd"), Sa("onMouseEnter", ["mouseout", "mouseover"]), Sa("onMouseLeave", ["mouseout", "mouseover"]), Sa("onPointerEnter", ["pointerout", "pointerover"]), Sa("onPointerLeave", ["pointerout", "pointerover"]), Kl(
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
  ), fy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Qn)
  );
  function o0(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], n = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f], b = m.instance, _ = m.currentTarget;
            if (m = m.listener, b !== u && n.isPropagationStopped())
              break e;
            u = m, n.currentTarget = _;
            try {
              u(n);
            } catch (D) {
              Oi(D);
            }
            n.currentTarget = null, u = b;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (m = a[f], b = m.instance, _ = m.currentTarget, m = m.listener, b !== u && n.isPropagationStopped())
              break e;
            u = m, n.currentTarget = _;
            try {
              u(n);
            } catch (D) {
              Oi(D);
            }
            n.currentTarget = null, u = b;
          }
      }
    }
  }
  function de(e, t) {
    var l = t[ar];
    l === void 0 && (l = t[ar] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (f0(t, e, 2, !1), l.add(a));
  }
  function Qs(e, t, l) {
    var a = 0;
    t && (a |= 4), f0(
      l,
      e,
      a,
      t
    );
  }
  var pu = "_reactListening" + Math.random().toString(36).slice(2);
  function Zs(e) {
    if (!e[pu]) {
      e[pu] = !0, lo.forEach(function(l) {
        l !== "selectionchange" && (fy.has(l) || Qs(l, !1, e), Qs(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[pu] || (t[pu] = !0, Qs("selectionchange", !1, t));
    }
  }
  function f0(e, t, l, a) {
    switch (Y0(t)) {
      case 2:
        var n = qy;
        break;
      case 8:
        n = Yy;
        break;
      default:
        n = rc;
    }
    l = n.bind(
      null,
      t,
      l,
      e
    ), n = void 0, !dr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: n
    }) : e.addEventListener(t, l, !0) : n !== void 0 ? e.addEventListener(t, l, {
      passive: n
    }) : e.addEventListener(t, l, !1);
  }
  function Ks(e, t, l, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var m = a.stateNode.containerInfo;
          if (m === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = pa(m), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              a = u = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    yo(function() {
      var _ = u, D = or(l), H = [];
      e: {
        var z = Go.get(e);
        if (z !== void 0) {
          var M = _i, J = e;
          switch (e) {
            case "keypress":
              if (Ci(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = n1;
              break;
            case "focusin":
              J = "focus", M = gr;
              break;
            case "focusout":
              J = "blur", M = gr;
              break;
            case "beforeblur":
            case "afterblur":
              M = gr;
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
              M = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Zm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = r1;
              break;
            case qo:
            case Yo:
            case ko:
              M = $m;
              break;
            case Xo:
              M = c1;
              break;
            case "scroll":
            case "scrollend":
              M = Vm;
              break;
            case "wheel":
              M = f1;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Wm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = So;
              break;
            case "toggle":
            case "beforetoggle":
              M = h1;
          }
          var ee = (t & 4) !== 0, _e = !ee && (e === "scroll" || e === "scrollend"), w = ee ? z !== null ? z + "Capture" : null : z;
          ee = [];
          for (var x = _, A; x !== null; ) {
            var L = x;
            if (A = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || A === null || w === null || (L = hn(x, w), L != null && ee.push(
              Zn(x, L, A)
            )), _e) break;
            x = x.return;
          }
          0 < ee.length && (z = new M(
            z,
            J,
            null,
            l,
            D
          ), H.push({ event: z, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (z = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", z && l !== cr && (J = l.relatedTarget || l.fromElement) && (pa(J) || J[ga]))
            break e;
          if ((M || z) && (z = D.window === D ? D : (z = D.ownerDocument) ? z.defaultView || z.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = _, J = J ? pa(J) : null, J !== null && (_e = h(J), ee = J.tag, J !== _e || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (M = null, J = _), M !== J)) {
            if (ee = vo, L = "onMouseLeave", w = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (ee = So, L = "onPointerLeave", w = "onPointerEnter", x = "pointer"), _e = M == null ? z : dn(M), A = J == null ? z : dn(J), z = new ee(
              L,
              x + "leave",
              M,
              l,
              D
            ), z.target = _e, z.relatedTarget = A, L = null, pa(D) === _ && (ee = new ee(
              w,
              x + "enter",
              J,
              l,
              D
            ), ee.target = A, ee.relatedTarget = _e, L = ee), _e = L, M && J)
              t: {
                for (ee = dy, w = M, x = J, A = 0, L = w; L; L = ee(L))
                  A++;
                L = 0;
                for (var I = x; I; I = ee(I))
                  L++;
                for (; 0 < A - L; )
                  w = ee(w), A--;
                for (; 0 < L - A; )
                  x = ee(x), L--;
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
            M !== null && d0(
              H,
              z,
              M,
              ee,
              !1
            ), J !== null && _e !== null && d0(
              H,
              _e,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (z = _ ? dn(_) : window, M = z.nodeName && z.nodeName.toLowerCase(), M === "select" || M === "input" && z.type === "file")
            var Ee = _o;
          else if (Co(z))
            if (zo)
              Ee = R1;
            else {
              Ee = E1;
              var F = S1;
            }
          else
            M = z.nodeName, !M || M.toLowerCase() !== "input" || z.type !== "checkbox" && z.type !== "radio" ? _ && sr(_.elementType) && (Ee = _o) : Ee = x1;
          if (Ee && (Ee = Ee(e, _))) {
            Ao(
              H,
              Ee,
              l,
              D
            );
            break e;
          }
          F && F(e, z, _), e === "focusout" && _ && z.type === "number" && _.memoizedProps.value != null && rr(z, "number", z.value);
        }
        switch (F = _ ? dn(_) : window, e) {
          case "focusin":
            (Co(F) || F.contentEditable === "true") && (Ca = F, xr = _, En = null);
            break;
          case "focusout":
            En = xr = Ca = null;
            break;
          case "mousedown":
            Rr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Rr = !1, Lo(H, l, D);
            break;
          case "selectionchange":
            if (T1) break;
          case "keydown":
          case "keyup":
            Lo(H, l, D);
        }
        var se;
        if (vr)
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
          Ta ? wo(e, l) && (ge = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ge = "onCompositionStart");
        ge && (Eo && l.locale !== "ko" && (Ta || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && Ta && (se = go()) : (El = D, hr = "value" in El ? El.value : El.textContent, Ta = !0)), F = vu(_, ge), 0 < F.length && (ge = new bo(
          ge,
          e,
          null,
          l,
          D
        ), H.push({ event: ge, listeners: F }), se ? ge.data = se : (se = To(l), se !== null && (ge.data = se)))), (se = y1 ? g1(e, l) : p1(e, l)) && (ge = vu(_, "onBeforeInput"), 0 < ge.length && (F = new bo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          D
        ), H.push({
          event: F,
          listeners: ge
        }), F.data = se)), sy(
          H,
          e,
          _,
          l,
          D
        );
      }
      o0(H, t);
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
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = hn(e, l), n != null && a.unshift(
        Zn(e, n, u)
      ), n = hn(e, t), n != null && a.push(
        Zn(e, n, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function dy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function d0(e, t, l, a, n) {
    for (var u = t._reactName, f = []; l !== null && l !== a; ) {
      var m = l, b = m.alternate, _ = m.stateNode;
      if (m = m.tag, b !== null && b === a) break;
      m !== 5 && m !== 26 && m !== 27 || _ === null || (b = _, n ? (_ = hn(l, u), _ != null && f.unshift(
        Zn(l, _, b)
      )) : n || (_ = hn(l, u), _ != null && f.push(
        Zn(l, _, b)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var hy = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function h0(e) {
    return (typeof e == "string" ? e : "" + e).replace(hy, `
`).replace(my, "");
  }
  function m0(e, t) {
    return t = h0(t), h0(e) === t;
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
        ho(e, a, u);
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
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Xm.get(l) || l, Ei(e, l, a));
    }
  }
  function Js(e, t, l, a, n, u) {
    switch (l) {
      case "style":
        ho(e, a, u);
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
        if (!ao.hasOwnProperty(l))
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
        var m = u = f = n = null, b = null, _ = null;
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
                  b = D;
                  break;
                case "defaultChecked":
                  _ = D;
                  break;
                case "value":
                  u = D;
                  break;
                case "defaultValue":
                  m = D;
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
        so(
          e,
          u,
          m,
          b,
          _,
          f,
          n,
          !1
        );
        return;
      case "select":
        de("invalid", e), a = f = u = null;
        for (n in l)
          if (l.hasOwnProperty(n) && (m = l[n], m != null))
            switch (n) {
              case "value":
                u = m;
                break;
              case "defaultValue":
                f = m;
                break;
              case "multiple":
                a = m;
              default:
                Ae(e, t, n, m, l, null);
            }
        t = u, l = f, e.multiple = !!a, t != null ? Ea(e, !!a, t, !1) : l != null && Ea(e, !!a, l, !0);
        return;
      case "textarea":
        de("invalid", e), u = n = a = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (m = l[f], m != null))
            switch (f) {
              case "value":
                a = m;
                break;
              case "defaultValue":
                n = m;
                break;
              case "children":
                u = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(o(91));
                break;
              default:
                Ae(e, t, f, m, l, null);
            }
        oo(e, a, n, u);
        return;
      case "option":
        for (b in l)
          l.hasOwnProperty(b) && (a = l[b], a != null) && (b === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ae(e, t, b, a, l, null));
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
        if (sr(t)) {
          for (D in l)
            l.hasOwnProperty(D) && (a = l[D], a !== void 0 && Js(
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
    for (m in l)
      l.hasOwnProperty(m) && (a = l[m], a != null && Ae(e, t, m, a, l, null));
  }
  function yy(e, t, l, a) {
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
        var n = null, u = null, f = null, m = null, b = null, _ = null, D = null;
        for (M in l) {
          var H = l[M];
          if (l.hasOwnProperty(M) && H != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = H;
              default:
                a.hasOwnProperty(M) || Ae(e, t, M, null, a, H);
            }
        }
        for (var z in a) {
          var M = a[z];
          if (H = l[z], a.hasOwnProperty(z) && (M != null || H != null))
            switch (z) {
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
                m = M;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(o(137, t));
                break;
              default:
                M !== H && Ae(
                  e,
                  t,
                  z,
                  M,
                  a,
                  H
                );
            }
        }
        ur(
          e,
          f,
          m,
          b,
          _,
          D,
          u,
          n
        );
        return;
      case "select":
        M = f = m = z = null;
        for (u in l)
          if (b = l[u], l.hasOwnProperty(u) && b != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = b;
              default:
                a.hasOwnProperty(u) || Ae(
                  e,
                  t,
                  u,
                  null,
                  a,
                  b
                );
            }
        for (n in a)
          if (u = a[n], b = l[n], a.hasOwnProperty(n) && (u != null || b != null))
            switch (n) {
              case "value":
                z = u;
                break;
              case "defaultValue":
                m = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== b && Ae(
                  e,
                  t,
                  n,
                  u,
                  a,
                  b
                );
            }
        t = m, l = f, a = M, z != null ? Ea(e, !!l, z, !1) : !!a != !!l && (t != null ? Ea(e, !!l, t, !0) : Ea(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = z = null;
        for (m in l)
          if (n = l[m], l.hasOwnProperty(m) && n != null && !a.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ae(e, t, m, null, a, n);
            }
        for (f in a)
          if (n = a[f], u = l[f], a.hasOwnProperty(f) && (n != null || u != null))
            switch (f) {
              case "value":
                z = n;
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
        co(e, z, M);
        return;
      case "option":
        for (var J in l)
          z = l[J], l.hasOwnProperty(J) && z != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Ae(
            e,
            t,
            J,
            null,
            a,
            z
          ));
        for (b in a)
          z = a[b], M = l[b], a.hasOwnProperty(b) && z !== M && (z != null || M != null) && (b === "selected" ? e.selected = z && typeof z != "function" && typeof z != "symbol" : Ae(
            e,
            t,
            b,
            z,
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
          z = l[ee], l.hasOwnProperty(ee) && z != null && !a.hasOwnProperty(ee) && Ae(e, t, ee, null, a, z);
        for (_ in a)
          if (z = a[_], M = l[_], a.hasOwnProperty(_) && z !== M && (z != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null)
                  throw Error(o(137, t));
                break;
              default:
                Ae(
                  e,
                  t,
                  _,
                  z,
                  a,
                  M
                );
            }
        return;
      default:
        if (sr(t)) {
          for (var _e in l)
            z = l[_e], l.hasOwnProperty(_e) && z !== void 0 && !a.hasOwnProperty(_e) && Js(
              e,
              t,
              _e,
              void 0,
              a,
              z
            );
          for (D in a)
            z = a[D], M = l[D], !a.hasOwnProperty(D) || z === M || z === void 0 && M === void 0 || Js(
              e,
              t,
              D,
              z,
              a,
              M
            );
          return;
        }
    }
    for (var w in l)
      z = l[w], l.hasOwnProperty(w) && z != null && !a.hasOwnProperty(w) && Ae(e, t, w, null, a, z);
    for (H in a)
      z = a[H], M = l[H], !a.hasOwnProperty(H) || z === M || z == null && M == null || Ae(e, t, H, z, a, M);
  }
  function y0(e) {
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
  function gy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var n = l[a], u = n.transferSize, f = n.initiatorType, m = n.duration;
        if (u && m && y0(f)) {
          for (f = 0, m = n.responseEnd, a += 1; a < l.length; a++) {
            var b = l[a], _ = b.startTime;
            if (_ > m) break;
            var D = b.transferSize, H = b.initiatorType;
            D && y0(H) && (b = b.responseEnd, f += D * (b < m ? 1 : (m - _) / (b - _)));
          }
          if (--a, t += 8 * (u + f) / (n.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var $s = null, Fs = null;
  function bu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function g0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function p0(e, t) {
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
  function Ws(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Is = null;
  function py() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Is ? !1 : (Is = e, !0) : (Is = null, !1);
  }
  var v0 = typeof setTimeout == "function" ? setTimeout : void 0, vy = typeof clearTimeout == "function" ? clearTimeout : void 0, b0 = typeof Promise == "function" ? Promise : void 0, by = typeof queueMicrotask == "function" ? queueMicrotask : typeof b0 < "u" ? function(e) {
    return b0.resolve(null).then(e).catch(Sy);
  } : v0;
  function Sy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Hl(e) {
    return e === "head";
  }
  function S0(e, t) {
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
            var f = u.nextSibling, m = u.nodeName;
            u[fn] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && Kn(e.ownerDocument.body);
      l = n;
    } while (l);
    Pa(t);
  }
  function E0(e, t) {
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
  function Ps(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ps(l), nr(l);
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
  function Ey(e, t, l, a) {
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
  function xy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function x0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Bt(e.nextSibling), e === null)) return null;
    return e;
  }
  function ec(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function tc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ry(e, t) {
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
  var lc = null;
  function R0(e) {
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
  function w0(e) {
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
  function T0(e, t, l) {
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
    nr(e);
  }
  var Lt = /* @__PURE__ */ new Map(), C0 = /* @__PURE__ */ new Set();
  function Su(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ml = Q.d;
  Q.d = {
    f: wy,
    r: Ty,
    D: Cy,
    C: Ay,
    L: _y,
    m: zy,
    X: Oy,
    S: Ny,
    M: My
  };
  function wy() {
    var e = ml.f(), t = fu();
    return e || t;
  }
  function Ty(e) {
    var t = va(e);
    t !== null && t.tag === 5 && t.type === "form" ? Gf(t) : ml.r(e);
  }
  var Fa = typeof document > "u" ? null : document;
  function A0(e, t, l) {
    var a = Fa;
    if (a && typeof t == "string" && t) {
      var n = zt(t);
      n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), C0.has(n) || (C0.add(n), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), at(t, "link", e), Fe(t), a.head.appendChild(t)));
    }
  }
  function Cy(e) {
    ml.D(e), A0("dns-prefetch", e, null);
  }
  function Ay(e, t) {
    ml.C(e, t), A0("preconnect", e, t);
  }
  function _y(e, t, l) {
    ml.L(e, t, l);
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
      Lt.has(u) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Lt.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Jn(u)) || t === "script" && a.querySelector($n(u)) || (t = a.createElement("link"), at(t, "link", e), Fe(t), a.head.appendChild(t)));
    }
  }
  function zy(e, t) {
    ml.m(e, t);
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
      if (!Lt.has(u) && (e = N({ rel: "modulepreload", href: e }, t), Lt.set(u, e), l.querySelector(n) === null)) {
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
  function Ny(e, t, l) {
    ml.S(e, t, l);
    var a = Fa;
    if (a && e) {
      var n = ba(a).hoistableStyles, u = Wa(e);
      t = t || "default";
      var f = n.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          Jn(u)
        ))
          m.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Lt.get(u)) && ac(e, l);
          var b = f = a.createElement("link");
          Fe(b), at(b, "link", e), b._p = new Promise(function(_, D) {
            b.onload = _, b.onerror = D;
          }), b.addEventListener("load", function() {
            m.loading |= 1;
          }), b.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Eu(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: m
        }, n.set(u, f);
      }
    }
  }
  function Oy(e, t) {
    ml.X(e, t);
    var l = Fa;
    if (l && e) {
      var a = ba(l).hoistableScripts, n = Ia(e), u = a.get(n);
      u || (u = l.querySelector($n(n)), u || (e = N({ src: e, async: !0 }, t), (t = Lt.get(n)) && nc(e, t), u = l.createElement("script"), Fe(u), at(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function My(e, t) {
    ml.M(e, t);
    var l = Fa;
    if (l && e) {
      var a = ba(l).hoistableScripts, n = Ia(e), u = a.get(n);
      u || (u = l.querySelector($n(n)), u || (e = N({ src: e, async: !0, type: "module" }, t), (t = Lt.get(n)) && nc(e, t), u = l.createElement("script"), Fe(u), at(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function _0(e, t, l, a) {
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
          }, Lt.set(e, l), u || jy(
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
  function z0(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function jy(e, t, l, a) {
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
  function N0(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + zt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, Fe(a), a;
          var n = N({}, l, {
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
          a = z0(l), (n = Lt.get(n)) && ac(a, n), u = (e.ownerDocument || e).createElement("link"), Fe(u);
          var f = u;
          return f._p = new Promise(function(m, b) {
            f.onload = m, f.onerror = b;
          }), at(u, "link", a), t.state.loading |= 4, Eu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Ia(l.src), (n = e.querySelector(
            $n(u)
          )) ? (t.instance = n, Fe(n), n) : (a = l, (n = Lt.get(u)) && (a = N({}, l), nc(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Fe(n), at(n, "link", a), e.head.appendChild(n), t.instance = n);
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
      var m = a[f];
      if (m.dataset.precedence === t) u = m;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function ac(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var xu = null;
  function O0(e, t, l) {
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
        var m = a.get(f);
        m ? m.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function M0(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Uy(e, t, l) {
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
  function j0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Dy(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var n = Wa(a.href), u = t.querySelector(
          Jn(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ru.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Fe(u);
          return;
        }
        u = t.ownerDocument || t, a = z0(a), (n = Lt.get(n)) && ac(a, n), u = u.createElement("link"), Fe(u);
        var f = u;
        f._p = new Promise(function(m, b) {
          f.onload = m, f.onerror = b;
        }), at(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ru.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var ic = 0;
  function By(e, t) {
    return e.stylesheets && e.count === 0 && Tu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Tu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && ic === 0 && (ic = 62500 * gy());
      var n = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Tu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > ic ? 50 : 800) + t
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wu = /* @__PURE__ */ new Map(), t.forEach(Ly, e), wu = null, Ru.call(e));
  }
  function Ly(e, t) {
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
  function Hy(e, t, l, a, n, u, f, m, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = er(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = er(0), this.hiddenUpdates = er(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function U0(e, t, l, a, n, u, f, m, b, _, D, H) {
    return e = new Hy(
      e,
      t,
      l,
      f,
      b,
      _,
      D,
      H,
      m
    ), t = 1, u === !0 && (t |= 24), u = xt(3, null, null, t), e.current = u, u.stateNode = e, t = Hr(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, Xr(u), e;
  }
  function D0(e) {
    return e ? (e = za, e) : za;
  }
  function B0(e, t, l, a, n, u) {
    n = D0(n), a.context === null ? a.context = n : a.pendingContext = n, a = Al(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = _l(e, a, t), l !== null && (mt(l, e, t), _n(l, e, t));
  }
  function L0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function uc(e, t) {
    L0(e, t), (e = e.alternate) && L0(e, t);
  }
  function H0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wl(e, 67108864);
      t !== null && mt(t, e, 67108864), uc(e, 67108864);
    }
  }
  function q0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = At();
      t = tr(t);
      var l = Wl(e, t);
      l !== null && mt(l, e, t), uc(e, t);
    }
  }
  var Cu = !0;
  function qy(e, t, l, a) {
    var n = k.T;
    k.T = null;
    var u = Q.p;
    try {
      Q.p = 2, rc(e, t, l, a);
    } finally {
      Q.p = u, k.T = n;
    }
  }
  function Yy(e, t, l, a) {
    var n = k.T;
    k.T = null;
    var u = Q.p;
    try {
      Q.p = 8, rc(e, t, l, a);
    } finally {
      Q.p = u, k.T = n;
    }
  }
  function rc(e, t, l, a) {
    if (Cu) {
      var n = sc(a);
      if (n === null)
        Ks(
          e,
          t,
          a,
          Au,
          l
        ), k0(e, a);
      else if (Xy(
        n,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (k0(e, a), t & 4 && -1 < ky.indexOf(e)) {
        for (; n !== null; ) {
          var u = va(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Zl(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - St(f);
                      m.entanglements[1] |= b, f &= ~b;
                    }
                    Jt(u), (Re & 6) === 0 && (cu = vt() + 500, Vn(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = Wl(u, 2), m !== null && mt(m, u, 2), fu(), uc(u, 2);
            }
          if (u = sc(a), u === null && Ks(
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
        Ks(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function sc(e) {
    return e = or(e), cc(e);
  }
  var Au = null;
  function cc(e) {
    if (Au = null, e = pa(e), e !== null) {
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
    return Au = e, null;
  }
  function Y0(e) {
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
        switch (Cm()) {
          case Zc:
            return 2;
          case Kc:
            return 8;
          case gi:
          case Am:
            return 32;
          case Jc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var oc = !1, ql = null, Yl = null, kl = null, Wn = /* @__PURE__ */ new Map(), In = /* @__PURE__ */ new Map(), Xl = [], ky = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function k0(e, t) {
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
        kl = null;
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
    }, t !== null && (t = va(t), t !== null && H0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
  }
  function Xy(e, t, l, a, n) {
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
        return kl = Pn(
          kl,
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
  function X0(e) {
    var t = pa(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, eo(e.priority, function() {
              q0(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, eo(e.priority, function() {
              q0(l);
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
      var l = sc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        cr = a, l.target.dispatchEvent(a), cr = null;
      } else
        return t = va(l), t !== null && H0(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function G0(e, t, l) {
    _u(e) && l.delete(t);
  }
  function Gy() {
    oc = !1, ql !== null && _u(ql) && (ql = null), Yl !== null && _u(Yl) && (Yl = null), kl !== null && _u(kl) && (kl = null), Wn.forEach(G0), In.forEach(G0);
  }
  function zu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, oc || (oc = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Gy
    )));
  }
  var Nu = null;
  function V0(e) {
    Nu !== e && (Nu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Nu === e && (Nu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (cc(a || l) === null)
              continue;
            break;
          }
          var u = va(l);
          u !== null && (e.splice(t, 3), t -= 3, ss(
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
    function t(b) {
      return zu(b, e);
    }
    ql !== null && zu(ql, e), Yl !== null && zu(Yl, e), kl !== null && zu(kl, e), Wn.forEach(t), In.forEach(t);
    for (var l = 0; l < Xl.length; l++) {
      var a = Xl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Xl.length && (l = Xl[0], l.blockedOn === null); )
      X0(l), l.blockedOn === null && Xl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], f = n[st] || null;
        if (typeof u == "function")
          f || V0(l);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, f = u[st] || null)
              m = f.formAction;
            else if (cc(n) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), V0(l);
        }
      }
  }
  function Q0() {
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
  function fc(e) {
    this._internalRoot = e;
  }
  Ou.prototype.render = fc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = At();
    B0(l, a, e, t, null, null);
  }, Ou.prototype.unmount = fc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      B0(e.current, 2, null, e, null, null), fu(), t[ga] = null;
    }
  };
  function Ou(e) {
    this._internalRoot = e;
  }
  Ou.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Pc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Xl.length && t !== 0 && t < Xl[l].priority; l++) ;
      Xl.splice(l, 0, e), l === 0 && X0(e);
    }
  };
  var Z0 = s.version;
  if (Z0 !== "19.2.3")
    throw Error(
      o(
        527,
        Z0,
        "19.2.3"
      )
    );
  Q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = S(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Vy = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mu.isDisabled && Mu.supportsFiber)
      try {
        sn = Mu.inject(
          Vy
        ), bt = Mu;
      } catch {
      }
  }
  return li.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, a = "", n = Pf, u = ed, f = td;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = U0(
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
      Q0
    ), e[ga] = t.current, Zs(e), new fc(t);
  }, li.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var a = !1, n = "", u = Pf, f = ed, m = td, b = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (b = l.formState)), t = U0(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      n,
      b,
      u,
      f,
      m,
      Q0
    ), t.context = D0(null), l = t.current, a = At(), a = tr(a), n = Al(a), n.callback = null, _l(l, n, a), l = a, t.current.lanes = l, on(t, l), Jt(t), e[ga] = t.current, Zs(e), new Ou(t);
  }, li.version = "19.2.3", li;
}
var sh;
function Op() {
  if (sh) return vc.exports;
  sh = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), vc.exports = Np(), vc.exports;
}
var Mp = Op();
const Ht = ({
  label: i,
  onClick: r,
  disabled: s,
  type: c = "button",
  variant: o = "primary",
  className: d,
  children: h,
  ariaLabel: g,
  mainButtonStyle: p
}) => {
  const y = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", S = {
    primary: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    outline: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    link: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, R = d ? `${y} ${S[o]} ${d}` : `${y} ${S[o]}`;
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
      children: h || i
    }
  );
}, oa = T.forwardRef(
  (i, r) => {
    const {
      label: s,
      startIcon: c,
      endIcon: o,
      error: d,
      helperText: h,
      optional: g,
      className: p,
      options: y,
      id: S,
      ...R
    } = i, N = !!d || !!h, q = R.type === "select" || !!y, C = S || `input-${Math.random().toString(36).substr(2, 9)}`, U = `${C}-error`, j = `${C}-helper`;
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
            "aria-label": typeof s == "string" ? s : R["aria-label"],
            "aria-invalid": N,
            "aria-describedby": N ? U : void 0,
            "aria-required": R.required,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: N ? "#d64545" : "#cbd5d5",
              ...R.style
            },
            ...R,
            children: y && y.map((G) => /* @__PURE__ */ v.jsx("option", { value: G.value, children: G.label }, G.value))
          }
        ) : /* @__PURE__ */ v.jsx(
          "input",
          {
            ref: r,
            id: C,
            "aria-label": typeof s == "string" ? s : R["aria-label"],
            "aria-invalid": N,
            "aria-describedby": N ? U : void 0,
            "aria-required": R.required,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: N ? "#d64545" : "#cbd5d5",
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
          id: U,
          role: "alert",
          "aria-live": "polite",
          className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
          children: d
        }
      ),
      !d && h && /* @__PURE__ */ v.jsx(
        "div",
        {
          id: j,
          role: "status",
          "aria-live": "polite",
          className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
          children: h
        }
      )
    ] });
  }
), jp = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", en = ({
  type: i,
  message: r,
  actionText: s,
  onActionClick: c,
  onClose: o,
  className: d = "",
  children: h
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
        return /* @__PURE__ */ v.jsx("img", { src: jp, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g(), S = () => {
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
      role: S(),
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
}, zc = ({
  type: i,
  message: r,
  duration: s = 5e3,
  onClose: c,
  className: o = ""
}) => {
  const [d, h] = T.useState(!1), [g, p] = T.useState(!1);
  T.useEffect(() => {
    setTimeout(() => h(!0), 10);
    const C = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(C);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), c && c();
    }, 300);
  }, S = () => {
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
  }, N = S(), q = () => {
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
      role: q(),
      "aria-live": i === "error" ? "assertive" : "polite",
      "aria-atomic": "true",
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ v.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${N.bg}`, children: [
        /* @__PURE__ */ v.jsx("div", { className: `flex-shrink-0! ${N.icon}`, "aria-hidden": "true", children: R() }),
        /* @__PURE__ */ v.jsx("div", { className: `ml-3! flex-1! ${N.text}`, children: /* @__PURE__ */ v.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            "aria-label": "Close notification",
            className: `ml-4! flex-shrink-0! inline-flex! ${N.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ v.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, Wh = () => /* @__PURE__ */ v.jsx(
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
function Up(i) {
  return decodeURIComponent(atob(i).replace(/(.)/g, (r, s) => {
    let c = s.charCodeAt(0).toString(16).toUpperCase();
    return c.length < 2 && (c = "0" + c), "%" + c;
  }));
}
function Dp(i) {
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
    return Up(r);
  } catch {
    return atob(r);
  }
}
function Yc(i, r) {
  if (typeof i != "string")
    throw new ni("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, c = i.split(".")[s];
  if (typeof c != "string")
    throw new ni(`Invalid token specified: missing part #${s + 1}`);
  let o;
  try {
    o = Dp(c);
  } catch (d) {
    throw new ni(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new ni(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Ih() {
  const i = window.location.hostname;
  if (i === "localhost" || i === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(i))
    return "";
  const r = i.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Bp() {
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
  const d = Ih(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = c ? encodeURIComponent(r) : r;
  document.cookie = `${i}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function Ec(i) {
  const r = Ih(), s = r ? `; domain=${r}` : "";
  document.cookie = `${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`, console.log(`[Cookie] Cleared: ${i}`);
}
function Ph(i, r) {
  return function() {
    return i.apply(r, arguments);
  };
}
var ch = {};
const { toString: Lp } = Object.prototype, { getPrototypeOf: kc } = Object, { iterator: Qu, toStringTag: em } = Symbol, Zu = /* @__PURE__ */ ((i) => (r) => {
  const s = Lp.call(r);
  return i[s] || (i[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Vt = (i) => (i = i.toLowerCase(), (r) => Zu(r) === i), Ku = (i) => (r) => typeof r === i, { isArray: nn } = Array, tn = Ku("undefined");
function oi(i) {
  return i !== null && !tn(i) && i.constructor !== null && !tn(i.constructor) && yt(i.constructor.isBuffer) && i.constructor.isBuffer(i);
}
const tm = Vt("ArrayBuffer");
function Hp(i) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(i) : r = i && i.buffer && tm(i.buffer), r;
}
const qp = Ku("string"), yt = Ku("function"), lm = Ku("number"), fi = (i) => i !== null && typeof i == "object", Yp = (i) => i === !0 || i === !1, Hu = (i) => {
  if (Zu(i) !== "object")
    return !1;
  const r = kc(i);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(em in i) && !(Qu in i);
}, kp = (i) => {
  if (!fi(i) || oi(i))
    return !1;
  try {
    return Object.keys(i).length === 0 && Object.getPrototypeOf(i) === Object.prototype;
  } catch {
    return !1;
  }
}, Xp = Vt("Date"), Gp = Vt("File"), Vp = Vt("Blob"), Qp = Vt("FileList"), Zp = (i) => fi(i) && yt(i.pipe), Kp = (i) => {
  let r;
  return i && (typeof FormData == "function" && i instanceof FormData || yt(i.append) && ((r = Zu(i)) === "formdata" || // detect form-data instance
  r === "object" && yt(i.toString) && i.toString() === "[object FormData]"));
}, Jp = Vt("URLSearchParams"), [$p, Fp, Wp, Ip] = ["ReadableStream", "Request", "Response", "Headers"].map(Vt), Pp = (i) => i.trim ? i.trim() : i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
    const d = s ? Object.getOwnPropertyNames(i) : Object.keys(i), h = d.length;
    let g;
    for (c = 0; c < h; c++)
      g = d[c], r.call(null, i[g], g, i);
  }
}
function am(i, r) {
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
const fa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, nm = (i) => !tn(i) && i !== fa;
function Nc() {
  const { caseless: i, skipUndefined: r } = nm(this) && this || {}, s = {}, c = (o, d) => {
    const h = i && am(s, d) || d;
    Hu(s[h]) && Hu(o) ? s[h] = Nc(s[h], o) : Hu(o) ? s[h] = Nc({}, o) : nn(o) ? s[h] = o.slice() : (!r || !tn(o)) && (s[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && di(arguments[o], c);
  return s;
}
const ev = (i, r, s, { allOwnKeys: c } = {}) => (di(r, (o, d) => {
  s && yt(o) ? i[d] = Ph(o, s) : i[d] = o;
}, { allOwnKeys: c }), i), tv = (i) => (i.charCodeAt(0) === 65279 && (i = i.slice(1)), i), lv = (i, r, s, c) => {
  i.prototype = Object.create(r.prototype, c), i.prototype.constructor = i, Object.defineProperty(i, "super", {
    value: r.prototype
  }), s && Object.assign(i.prototype, s);
}, av = (i, r, s, c) => {
  let o, d, h;
  const g = {};
  if (r = r || {}, i == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(i), d = o.length; d-- > 0; )
      h = o[d], (!c || c(h, i, r)) && !g[h] && (r[h] = i[h], g[h] = !0);
    i = s !== !1 && kc(i);
  } while (i && (!s || s(i, r)) && i !== Object.prototype);
  return r;
}, nv = (i, r, s) => {
  i = String(i), (s === void 0 || s > i.length) && (s = i.length), s -= r.length;
  const c = i.indexOf(r, s);
  return c !== -1 && c === s;
}, iv = (i) => {
  if (!i) return null;
  if (nn(i)) return i;
  let r = i.length;
  if (!lm(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = i[r];
  return s;
}, uv = /* @__PURE__ */ ((i) => (r) => i && r instanceof i)(typeof Uint8Array < "u" && kc(Uint8Array)), rv = (i, r) => {
  const c = (i && i[Qu]).call(i);
  let o;
  for (; (o = c.next()) && !o.done; ) {
    const d = o.value;
    r.call(i, d[0], d[1]);
  }
}, sv = (i, r) => {
  let s;
  const c = [];
  for (; (s = i.exec(r)) !== null; )
    c.push(s);
  return c;
}, cv = Vt("HTMLFormElement"), ov = (i) => i.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, c, o) {
    return c.toUpperCase() + o;
  }
), oh = (({ hasOwnProperty: i }) => (r, s) => i.call(r, s))(Object.prototype), fv = Vt("RegExp"), im = (i, r) => {
  const s = Object.getOwnPropertyDescriptors(i), c = {};
  di(s, (o, d) => {
    let h;
    (h = r(o, d, i)) !== !1 && (c[d] = h || o);
  }), Object.defineProperties(i, c);
}, dv = (i) => {
  im(i, (r, s) => {
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
}, hv = (i, r) => {
  const s = {}, c = (o) => {
    o.forEach((d) => {
      s[d] = !0;
    });
  };
  return nn(i) ? c(i) : c(String(i).split(r)), s;
}, mv = () => {
}, yv = (i, r) => i != null && Number.isFinite(i = +i) ? i : r;
function gv(i) {
  return !!(i && yt(i.append) && i[em] === "FormData" && i[Qu]);
}
const pv = (i) => {
  const r = new Array(10), s = (c, o) => {
    if (fi(c)) {
      if (r.indexOf(c) >= 0)
        return;
      if (oi(c))
        return c;
      if (!("toJSON" in c)) {
        r[o] = c;
        const d = nn(c) ? [] : {};
        return di(c, (h, g) => {
          const p = s(h, o + 1);
          !tn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return c;
  };
  return s(i, 0);
}, vv = Vt("AsyncFunction"), bv = (i) => i && (fi(i) || yt(i)) && yt(i.then) && yt(i.catch), um = ((i, r) => i ? setImmediate : r ? ((s, c) => (fa.addEventListener("message", ({ source: o, data: d }) => {
  o === fa && d === s && c.length && c.shift()();
}, !1), (o) => {
  c.push(o), fa.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  yt(fa.postMessage)
), Sv = typeof queueMicrotask < "u" ? queueMicrotask.bind(fa) : typeof ch < "u" && ch.nextTick || um, Ev = (i) => i != null && yt(i[Qu]), O = {
  isArray: nn,
  isArrayBuffer: tm,
  isBuffer: oi,
  isFormData: Kp,
  isArrayBufferView: Hp,
  isString: qp,
  isNumber: lm,
  isBoolean: Yp,
  isObject: fi,
  isPlainObject: Hu,
  isEmptyObject: kp,
  isReadableStream: $p,
  isRequest: Fp,
  isResponse: Wp,
  isHeaders: Ip,
  isUndefined: tn,
  isDate: Xp,
  isFile: Gp,
  isBlob: Vp,
  isRegExp: fv,
  isFunction: yt,
  isStream: Zp,
  isURLSearchParams: Jp,
  isTypedArray: uv,
  isFileList: Qp,
  forEach: di,
  merge: Nc,
  extend: ev,
  trim: Pp,
  stripBOM: tv,
  inherits: lv,
  toFlatObject: av,
  kindOf: Zu,
  kindOfTest: Vt,
  endsWith: nv,
  toArray: iv,
  forEachEntry: rv,
  matchAll: sv,
  isHTMLForm: cv,
  hasOwnProperty: oh,
  hasOwnProp: oh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: im,
  freezeMethods: dv,
  toObjectSet: hv,
  toCamelCase: ov,
  noop: mv,
  toFiniteNumber: yv,
  findKey: am,
  global: fa,
  isContextDefined: nm,
  isSpecCompliantForm: gv,
  toJSONObject: pv,
  isAsyncFn: vv,
  isThenable: bv,
  setImmediate: um,
  asap: Sv,
  isIterable: Ev
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
const rm = re.prototype, sm = {};
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
  sm[i] = { value: i };
});
Object.defineProperties(re, sm);
Object.defineProperty(rm, "isAxiosError", { value: !0 });
re.from = (i, r, s, c, o, d) => {
  const h = Object.create(rm);
  O.toFlatObject(i, h, function(S) {
    return S !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = i && i.message ? i.message : "Error", p = r == null && i ? i.code : r;
  return re.call(h, g, p, s, c, o), i && h.cause == null && Object.defineProperty(h, "cause", { value: i, configurable: !0 }), h.name = i && i.name || "Error", d && Object.assign(h, d), h;
};
const xv = null;
function Oc(i) {
  return O.isPlainObject(i) || O.isArray(i);
}
function cm(i) {
  return O.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function fh(i, r, s) {
  return i ? i.concat(r).map(function(o, d) {
    return o = cm(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : r;
}
function Rv(i) {
  return O.isArray(i) && !i.some(Oc);
}
const wv = O.toFlatObject(O, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Ju(i, r, s) {
  if (!O.isObject(i))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = O.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(U, j) {
    return !O.isUndefined(j[U]);
  });
  const c = s.metaTokens, o = s.visitor || S, d = s.dots, h = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && O.isSpecCompliantForm(r);
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
  function S(C, U, j) {
    let G = C;
    if (C && !j && typeof C == "object") {
      if (O.endsWith(U, "{}"))
        U = c ? U : U.slice(0, -2), C = JSON.stringify(C);
      else if (O.isArray(C) && Rv(C) || (O.isFileList(C) || O.endsWith(U, "[]")) && (G = O.toArray(C)))
        return U = cm(U), G.forEach(function(K, P) {
          !(O.isUndefined(K) || K === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? fh([U], P, d) : h === null ? U : U + "[]",
            y(K)
          );
        }), !1;
    }
    return Oc(C) ? !0 : (r.append(fh(j, U, d), y(C)), !1);
  }
  const R = [], N = Object.assign(wv, {
    defaultVisitor: S,
    convertValue: y,
    isVisitable: Oc
  });
  function q(C, U) {
    if (!O.isUndefined(C)) {
      if (R.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + U.join("."));
      R.push(C), O.forEach(C, function(G, Z) {
        (!(O.isUndefined(G) || G === null) && o.call(
          r,
          G,
          O.isString(Z) ? Z.trim() : Z,
          U,
          N
        )) === !0 && q(G, U ? U.concat(Z) : [Z]);
      }), R.pop();
    }
  }
  if (!O.isObject(i))
    throw new TypeError("data must be an object");
  return q(i), r;
}
function dh(i) {
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
function Xc(i, r) {
  this._pairs = [], i && Ju(i, this, r);
}
const om = Xc.prototype;
om.append = function(r, s) {
  this._pairs.push([r, s]);
};
om.toString = function(r) {
  const s = r ? function(c) {
    return r.call(this, c, dh);
  } : dh;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function Tv(i) {
  return encodeURIComponent(i).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function fm(i, r, s) {
  if (!r)
    return i;
  const c = s && s.encode || Tv;
  O.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let d;
  if (o ? d = o(r, s) : d = O.isURLSearchParams(r) ? r.toString() : new Xc(r, s).toString(c), d) {
    const h = i.indexOf("#");
    h !== -1 && (i = i.slice(0, h)), i += (i.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return i;
}
class hh {
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
const dm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Cv = typeof URLSearchParams < "u" ? URLSearchParams : Xc, Av = typeof FormData < "u" ? FormData : null, _v = typeof Blob < "u" ? Blob : null, zv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Cv,
    FormData: Av,
    Blob: _v
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gc = typeof window < "u" && typeof document < "u", Mc = typeof navigator == "object" && navigator || void 0, Nv = Gc && (!Mc || ["ReactNative", "NativeScript", "NS"].indexOf(Mc.product) < 0), Ov = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Mv = Gc && window.location.href || "http://localhost", jv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gc,
  hasStandardBrowserEnv: Nv,
  hasStandardBrowserWebWorkerEnv: Ov,
  navigator: Mc,
  origin: Mv
}, Symbol.toStringTag, { value: "Module" })), ut = {
  ...jv,
  ...zv
};
function Uv(i, r) {
  return Ju(i, new ut.classes.URLSearchParams(), {
    visitor: function(s, c, o, d) {
      return ut.isNode && O.isBuffer(s) ? (this.append(c, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Dv(i) {
  return O.matchAll(/\w+|\[(\w*)]/g, i).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Bv(i) {
  const r = {}, s = Object.keys(i);
  let c;
  const o = s.length;
  let d;
  for (c = 0; c < o; c++)
    d = s[c], r[d] = i[d];
  return r;
}
function hm(i) {
  function r(s, c, o, d) {
    let h = s[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= s.length;
    return h = !h && O.isArray(o) ? o.length : h, p ? (O.hasOwnProp(o, h) ? o[h] = [o[h], c] : o[h] = c, !g) : ((!o[h] || !O.isObject(o[h])) && (o[h] = []), r(s, c, o[h], d) && O.isArray(o[h]) && (o[h] = Bv(o[h])), !g);
  }
  if (O.isFormData(i) && O.isFunction(i.entries)) {
    const s = {};
    return O.forEachEntry(i, (c, o) => {
      r(Dv(c), o, s, 0);
    }), s;
  }
  return null;
}
function Lv(i, r, s) {
  if (O.isString(i))
    try {
      return (r || JSON.parse)(i), O.trim(i);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (s || JSON.stringify)(i);
}
const hi = {
  transitional: dm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const c = s.getContentType() || "", o = c.indexOf("application/json") > -1, d = O.isObject(r);
    if (d && O.isHTMLForm(r) && (r = new FormData(r)), O.isFormData(r))
      return o ? JSON.stringify(hm(r)) : r;
    if (O.isArrayBuffer(r) || O.isBuffer(r) || O.isStream(r) || O.isFile(r) || O.isBlob(r) || O.isReadableStream(r))
      return r;
    if (O.isArrayBufferView(r))
      return r.buffer;
    if (O.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return Uv(r, this.formSerializer).toString();
      if ((g = O.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Ju(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (s.setContentType("application/json", !1), Lv(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || hi.transitional, c = s && s.forcedJSONParsing, o = this.responseType === "json";
    if (O.isResponse(r) || O.isReadableStream(r))
      return r;
    if (r && O.isString(r) && (c && !this.responseType || o)) {
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
  hi.headers[i] = {};
});
const Hv = O.toObjectSet([
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
]), qv = (i) => {
  const r = {};
  let s, c, o;
  return i && i.split(`
`).forEach(function(h) {
    o = h.indexOf(":"), s = h.substring(0, o).trim().toLowerCase(), c = h.substring(o + 1).trim(), !(!s || r[s] && Hv[s]) && (s === "set-cookie" ? r[s] ? r[s].push(c) : r[s] = [c] : r[s] = r[s] ? r[s] + ", " + c : c);
  }), r;
}, mh = /* @__PURE__ */ Symbol("internals");
function ai(i) {
  return i && String(i).trim().toLowerCase();
}
function qu(i) {
  return i === !1 || i == null ? i : O.isArray(i) ? i.map(qu) : String(i);
}
function Yv(i) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = s.exec(i); )
    r[c[1]] = c[2];
  return r;
}
const kv = (i) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());
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
function Xv(i) {
  return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, c) => s.toUpperCase() + c);
}
function Gv(i, r) {
  const s = O.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((c) => {
    Object.defineProperty(i, c + s, {
      value: function(o, d, h) {
        return this[c].call(this, r, o, d, h);
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
      const S = ai(p);
      if (!S)
        throw new Error("header name must be a non-empty string");
      const R = O.findKey(o, S);
      (!R || o[R] === void 0 || y === !0 || y === void 0 && o[R] !== !1) && (o[R || p] = qu(g));
    }
    const h = (g, p) => O.forEach(g, (y, S) => d(y, S, p));
    if (O.isPlainObject(r) || r instanceof this.constructor)
      h(r, s);
    else if (O.isString(r) && (r = r.trim()) && !kv(r))
      h(qv(r), s);
    else if (O.isObject(r) && O.isIterable(r)) {
      let g = {}, p, y;
      for (const S of r) {
        if (!O.isArray(S))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = S[0]] = (p = g[y]) ? O.isArray(p) ? [...p, S[1]] : [p, S[1]] : S[1];
      }
      h(g, s);
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
          return Yv(o);
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
    function d(h) {
      if (h = ai(h), h) {
        const g = O.findKey(c, h);
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
      const h = O.findKey(c, d);
      if (h) {
        s[h] = qu(o), delete s[d];
        return;
      }
      const g = r ? Xv(d) : String(d).trim();
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
    const c = (this[mh] = this[mh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = ai(h);
      c[g] || (Gv(o, h), c[g] = !0);
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
  const s = this || hi, c = r || s, o = gt.from(c.headers);
  let d = c.data;
  return O.forEach(i, function(g) {
    d = g.call(s, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function mm(i) {
  return !!(i && i.__CANCEL__);
}
function un(i, r, s) {
  re.call(this, i ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
O.inherits(un, re, {
  __CANCEL__: !0
});
function ym(i, r, s) {
  const c = s.config.validateStatus;
  !s.status || !c || c(s.status) ? i(s) : r(new re(
    "Request failed with status code " + s.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function Vv(i) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(i);
  return r && r[1] || "";
}
function Qv(i, r) {
  i = i || 10;
  const s = new Array(i), c = new Array(i);
  let o = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), S = c[d];
    h || (h = y), s[o] = p, c[o] = y;
    let R = d, N = 0;
    for (; R !== o; )
      N += s[R++], R = R % i;
    if (o = (o + 1) % i, o === d && (d = (d + 1) % i), y - h < r)
      return;
    const q = S && y - S;
    return q ? Math.round(N * 1e3 / q) : void 0;
  };
}
function Zv(i, r) {
  let s = 0, c = 1e3 / r, o, d;
  const h = (y, S = Date.now()) => {
    s = S, o = null, d && (clearTimeout(d), d = null), i(...y);
  };
  return [(...y) => {
    const S = Date.now(), R = S - s;
    R >= c ? h(y, S) : (o = y, d || (d = setTimeout(() => {
      d = null, h(o);
    }, c - R)));
  }, () => o && h(o)];
}
const Xu = (i, r, s = 3) => {
  let c = 0;
  const o = Qv(50, 250);
  return Zv((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - c, y = o(p), S = h <= g;
    c = h;
    const R = {
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
    i(R);
  }, s);
}, yh = (i, r) => {
  const s = i != null;
  return [(c) => r[0]({
    lengthComputable: s,
    total: i,
    loaded: c
  }), r[1]];
}, gh = (i) => (...r) => O.asap(() => i(...r)), Kv = ut.hasStandardBrowserEnv ? /* @__PURE__ */ ((i, r) => (s) => (s = new URL(s, ut.origin), i.protocol === s.protocol && i.host === s.host && (r || i.port === s.port)))(
  new URL(ut.origin),
  ut.navigator && /(msie|trident)/i.test(ut.navigator.userAgent)
) : () => !0, Jv = ut.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(i, r, s, c, o, d, h) {
      if (typeof document > "u") return;
      const g = [`${i}=${encodeURIComponent(r)}`];
      O.isNumber(s) && g.push(`expires=${new Date(s).toUTCString()}`), O.isString(c) && g.push(`path=${c}`), O.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), O.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function $v(i) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(i);
}
function Fv(i, r) {
  return r ? i.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : i;
}
function gm(i, r, s) {
  let c = !$v(r);
  return i && (c || s == !1) ? Fv(i, r) : r;
}
const ph = (i) => i instanceof gt ? { ...i } : i;
function ha(i, r) {
  r = r || {};
  const s = {};
  function c(y, S, R, N) {
    return O.isPlainObject(y) && O.isPlainObject(S) ? O.merge.call({ caseless: N }, y, S) : O.isPlainObject(S) ? O.merge({}, S) : O.isArray(S) ? S.slice() : S;
  }
  function o(y, S, R, N) {
    if (O.isUndefined(S)) {
      if (!O.isUndefined(y))
        return c(void 0, y, R, N);
    } else return c(y, S, R, N);
  }
  function d(y, S) {
    if (!O.isUndefined(S))
      return c(void 0, S);
  }
  function h(y, S) {
    if (O.isUndefined(S)) {
      if (!O.isUndefined(y))
        return c(void 0, y);
    } else return c(void 0, S);
  }
  function g(y, S, R) {
    if (R in r)
      return c(y, S);
    if (R in i)
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
    headers: (y, S, R) => o(ph(y), ph(S), R, !0)
  };
  return O.forEach(Object.keys({ ...i, ...r }), function(S) {
    const R = p[S] || o, N = R(i[S], r[S], S);
    O.isUndefined(N) && R !== g || (s[S] = N);
  }), s;
}
const pm = (i) => {
  const r = ha({}, i);
  let { data: s, withXSRFToken: c, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = gt.from(h), r.url = fm(gm(r.baseURL, r.url, r.allowAbsoluteUrls), i.params, i.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), O.isFormData(s)) {
    if (ut.hasStandardBrowserEnv || ut.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (O.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([S, R]) => {
        y.includes(S.toLowerCase()) && h.set(S, R);
      });
    }
  }
  if (ut.hasStandardBrowserEnv && (c && O.isFunction(c) && (c = c(r)), c || c !== !1 && Kv(r.url))) {
    const p = o && d && Jv.read(d);
    p && h.set(o, p);
  }
  return r;
}, Wv = typeof XMLHttpRequest < "u", Iv = Wv && function(i) {
  return new Promise(function(s, c) {
    const o = pm(i);
    let d = o.data;
    const h = gt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, S, R, N, q, C;
    function U() {
      q && q(), C && C(), o.cancelToken && o.cancelToken.unsubscribe(S), o.signal && o.signal.removeEventListener("abort", S);
    }
    let j = new XMLHttpRequest();
    j.open(o.method.toUpperCase(), o.url, !0), j.timeout = o.timeout;
    function G() {
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
      ym(function(W) {
        s(W), U();
      }, function(W) {
        c(W), U();
      }, le), j = null;
    }
    "onloadend" in j ? j.onloadend = G : j.onreadystatechange = function() {
      !j || j.readyState !== 4 || j.status === 0 && !(j.responseURL && j.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, j.onabort = function() {
      j && (c(new re("Request aborted", re.ECONNABORTED, i, j)), j = null);
    }, j.onerror = function(P) {
      const le = P && P.message ? P.message : "Network Error", he = new re(le, re.ERR_NETWORK, i, j);
      he.event = P || null, c(he), j = null;
    }, j.ontimeout = function() {
      let P = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const le = o.transitional || dm;
      o.timeoutErrorMessage && (P = o.timeoutErrorMessage), c(new re(
        P,
        le.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        i,
        j
      )), j = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in j && O.forEach(h.toJSON(), function(P, le) {
      j.setRequestHeader(le, P);
    }), O.isUndefined(o.withCredentials) || (j.withCredentials = !!o.withCredentials), g && g !== "json" && (j.responseType = o.responseType), y && ([N, C] = Xu(y, !0), j.addEventListener("progress", N)), p && j.upload && ([R, q] = Xu(p), j.upload.addEventListener("progress", R), j.upload.addEventListener("loadend", q)), (o.cancelToken || o.signal) && (S = (K) => {
      j && (c(!K || K.type ? new un(null, i, j) : K), j.abort(), j = null);
    }, o.cancelToken && o.cancelToken.subscribe(S), o.signal && (o.signal.aborted ? S() : o.signal.addEventListener("abort", S)));
    const Z = Vv(o.url);
    if (Z && ut.protocols.indexOf(Z) === -1) {
      c(new re("Unsupported protocol " + Z + ":", re.ERR_BAD_REQUEST, i));
      return;
    }
    j.send(d || null);
  });
}, Pv = (i, r) => {
  const { length: s } = i = i ? i.filter(Boolean) : [];
  if (r || s) {
    let c = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const S = y instanceof Error ? y : this.reason;
        c.abort(S instanceof re ? S : new un(S instanceof Error ? S.message : S));
      }
    };
    let h = r && setTimeout(() => {
      h = null, d(new re(`timeout ${r} of ms exceeded`, re.ETIMEDOUT));
    }, r);
    const g = () => {
      i && (h && clearTimeout(h), h = null, i.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), i = null);
    };
    i.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = c;
    return p.unsubscribe = () => O.asap(g), p;
  }
}, eb = function* (i, r) {
  let s = i.byteLength;
  if (s < r) {
    yield i;
    return;
  }
  let c = 0, o;
  for (; c < s; )
    o = c + r, yield i.slice(c, o), c = o;
}, tb = async function* (i, r) {
  for await (const s of lb(i))
    yield* eb(s, r);
}, lb = async function* (i) {
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
}, vh = (i, r, s, c) => {
  const o = tb(i, r);
  let d = 0, h, g = (p) => {
    h || (h = !0, c && c(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: S } = await o.next();
        if (y) {
          g(), p.close();
          return;
        }
        let R = S.byteLength;
        if (s) {
          let N = d += R;
          s(N);
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
}, bh = 64 * 1024, { isFunction: Du } = O, ab = (({ Request: i, Response: r }) => ({
  Request: i,
  Response: r
}))(O.global), {
  ReadableStream: Sh,
  TextEncoder: Eh
} = O.global, xh = (i, ...r) => {
  try {
    return !!i(...r);
  } catch {
    return !1;
  }
}, nb = (i) => {
  i = O.merge.call({
    skipUndefined: !0
  }, ab, i);
  const { fetch: r, Request: s, Response: c } = i, o = r ? Du(r) : typeof fetch == "function", d = Du(s), h = Du(c);
  if (!o)
    return !1;
  const g = o && Du(Sh), p = o && (typeof Eh == "function" ? /* @__PURE__ */ ((C) => (U) => C.encode(U))(new Eh()) : async (C) => new Uint8Array(await new s(C).arrayBuffer())), y = d && g && xh(() => {
    let C = !1;
    const U = new s(ut.origin, {
      body: new Sh(),
      method: "POST",
      get duplex() {
        return C = !0, "half";
      }
    }).headers.has("Content-Type");
    return C && !U;
  }), S = h && g && xh(() => O.isReadableStream(new c("").body)), R = {
    stream: S && ((C) => C.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
    !R[C] && (R[C] = (U, j) => {
      let G = U && U[C];
      if (G)
        return G.call(U);
      throw new re(`Response type '${C}' is not supported`, re.ERR_NOT_SUPPORT, j);
    });
  });
  const N = async (C) => {
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
  }, q = async (C, U) => {
    const j = O.toFiniteNumber(C.getContentLength());
    return j ?? N(U);
  };
  return async (C) => {
    let {
      url: U,
      method: j,
      data: G,
      signal: Z,
      cancelToken: K,
      timeout: P,
      onDownloadProgress: le,
      onUploadProgress: he,
      responseType: W,
      headers: $,
      withCredentials: me = "same-origin",
      fetchOptions: oe
    } = pm(C), Ie = r || fetch;
    W = W ? (W + "").toLowerCase() : "text";
    let ve = Pv([Z, K && K.toAbortSignal()], P), De = null;
    const Ye = ve && ve.unsubscribe && (() => {
      ve.unsubscribe();
    });
    let ke;
    try {
      if (he && y && j !== "get" && j !== "head" && (ke = await q($, G)) !== 0) {
        let Ne = new s(U, {
          method: "POST",
          body: G,
          duplex: "half"
        }), E;
        if (O.isFormData(G) && (E = Ne.headers.get("content-type")) && $.setContentType(E), Ne.body) {
          const [B, V] = yh(
            ke,
            Xu(gh(he))
          );
          G = vh(Ne.body, bh, B, V);
        }
      }
      O.isString(me) || (me = me ? "include" : "omit");
      const X = d && "credentials" in s.prototype, k = {
        ...oe,
        signal: ve,
        method: j.toUpperCase(),
        headers: $.normalize().toJSON(),
        body: G,
        duplex: "half",
        credentials: X ? me : void 0
      };
      De = d && new s(U, k);
      let Q = await (d ? Ie(De, oe) : Ie(U, k));
      const ie = S && (W === "stream" || W === "response");
      if (S && (le || ie && Ye)) {
        const Ne = {};
        ["status", "statusText", "headers"].forEach((Y) => {
          Ne[Y] = Q[Y];
        });
        const E = O.toFiniteNumber(Q.headers.get("content-length")), [B, V] = le && yh(
          E,
          Xu(gh(le), !0)
        ) || [];
        Q = new c(
          vh(Q.body, bh, B, () => {
            V && V(), Ye && Ye();
          }),
          Ne
        );
      }
      W = W || "text";
      let ce = await R[O.findKey(R, W) || "text"](Q, C);
      return !ie && Ye && Ye(), await new Promise((Ne, E) => {
        ym(Ne, E, {
          data: ce,
          headers: gt.from(Q.headers),
          status: Q.status,
          statusText: Q.statusText,
          config: C,
          request: De
        });
      });
    } catch (X) {
      throw Ye && Ye(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, C, De),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, C, De);
    }
  };
}, ib = /* @__PURE__ */ new Map(), vm = (i) => {
  let r = i && i.env || {};
  const { fetch: s, Request: c, Response: o } = r, d = [
    c,
    o,
    s
  ];
  let h = d.length, g = h, p, y, S = ib;
  for (; g--; )
    p = d[g], y = S.get(p), y === void 0 && S.set(p, y = g ? /* @__PURE__ */ new Map() : nb(r)), S = y;
  return y;
};
vm();
const Vc = {
  http: xv,
  xhr: Iv,
  fetch: {
    get: vm
  }
};
O.forEach(Vc, (i, r) => {
  if (i) {
    try {
      Object.defineProperty(i, "name", { value: r });
    } catch {
    }
    Object.defineProperty(i, "adapterName", { value: r });
  }
});
const Rh = (i) => `- ${i}`, ub = (i) => O.isFunction(i) || i === null || i === !1;
function rb(i, r) {
  i = O.isArray(i) ? i : [i];
  const { length: s } = i;
  let c, o;
  const d = {};
  for (let h = 0; h < s; h++) {
    c = i[h];
    let g;
    if (o = c, !ub(c) && (o = Vc[(g = String(c)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (O.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + h] = o;
  }
  if (!o) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = s ? h.length > 1 ? `since :
` + h.map(Rh).join(`
`) : " " + Rh(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const bm = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: rb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Vc
};
function wc(i) {
  if (i.cancelToken && i.cancelToken.throwIfRequested(), i.signal && i.signal.aborted)
    throw new un(null, i);
}
function wh(i) {
  return wc(i), i.headers = gt.from(i.headers), i.data = Rc.call(
    i,
    i.transformRequest
  ), ["post", "put", "patch"].indexOf(i.method) !== -1 && i.headers.setContentType("application/x-www-form-urlencoded", !1), bm.getAdapter(i.adapter || hi.adapter, i)(i).then(function(c) {
    return wc(i), c.data = Rc.call(
      i,
      i.transformResponse,
      c
    ), c.headers = gt.from(c.headers), c;
  }, function(c) {
    return mm(c) || (wc(i), c && c.response && (c.response.data = Rc.call(
      i,
      i.transformResponse,
      c.response
    ), c.response.headers = gt.from(c.response.headers))), Promise.reject(c);
  });
}
const Sm = "1.13.2", $u = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((i, r) => {
  $u[i] = function(c) {
    return typeof c === i || "a" + (r < 1 ? "n " : " ") + i;
  };
});
const Th = {};
$u.transitional = function(r, s, c) {
  function o(d, h) {
    return "[Axios v" + Sm + "] Transitional option '" + d + "'" + h + (c ? ". " + c : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        o(h, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !Th[h] && (Th[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
$u.spelling = function(r) {
  return (s, c) => (console.warn(`${c} is likely a misspelling of ${r}`), !0);
};
function sb(i, r, s) {
  if (typeof i != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const c = Object.keys(i);
  let o = c.length;
  for (; o-- > 0; ) {
    const d = c[o], h = r[d];
    if (h) {
      const g = i[d], p = g === void 0 || h(g, d, i);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Yu = {
  assertOptions: sb,
  validators: $u
}, $t = Yu.validators;
let da = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new hh(),
      response: new hh()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = ha(this.defaults, s);
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
    let h = d && O.merge(
      d.common,
      d[s.method]
    );
    d && O.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete d[C];
      }
    ), s.headers = gt.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(U) {
      typeof U.runWhen == "function" && U.runWhen(s) === !1 || (p = p && U.synchronous, g.unshift(U.fulfilled, U.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(U) {
      y.push(U.fulfilled, U.rejected);
    });
    let S, R = 0, N;
    if (!p) {
      const C = [wh.bind(this), void 0];
      for (C.unshift(...g), C.push(...y), N = C.length, S = Promise.resolve(s); R < N; )
        S = S.then(C[R++], C[R++]);
      return S;
    }
    N = g.length;
    let q = s;
    for (; R < N; ) {
      const C = g[R++], U = g[R++];
      try {
        q = C(q);
      } catch (j) {
        U.call(this, j);
        break;
      }
    }
    try {
      S = wh.call(this, q);
    } catch (C) {
      return Promise.reject(C);
    }
    for (R = 0, N = y.length; R < N; )
      S = S.then(y[R++], y[R++]);
    return S;
  }
  getUri(r) {
    r = ha(this.defaults, r);
    const s = gm(r.baseURL, r.url, r.allowAbsoluteUrls);
    return fm(s, r.params, r.paramsSerializer);
  }
};
O.forEach(["delete", "get", "head", "options"], function(r) {
  da.prototype[r] = function(s, c) {
    return this.request(ha(c || {}, {
      method: r,
      url: s,
      data: (c || {}).data
    }));
  };
});
O.forEach(["post", "put", "patch"], function(r) {
  function s(c) {
    return function(d, h, g) {
      return this.request(ha(g || {}, {
        method: r,
        headers: c ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  da.prototype[r] = s(), da.prototype[r + "Form"] = s(!0);
});
let cb = class Em {
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
      c.reason || (c.reason = new un(d, h, g), s(c.reason));
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
      token: new Em(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function ob(i) {
  return function(s) {
    return i.apply(null, s);
  };
}
function fb(i) {
  return O.isObject(i) && i.isAxiosError === !0;
}
const jc = {
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
Object.entries(jc).forEach(([i, r]) => {
  jc[r] = i;
});
function xm(i) {
  const r = new da(i), s = Ph(da.prototype.request, r);
  return O.extend(s, da.prototype, r, { allOwnKeys: !0 }), O.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(o) {
    return xm(ha(i, o));
  }, s;
}
const Oe = xm(hi);
Oe.Axios = da;
Oe.CanceledError = un;
Oe.CancelToken = cb;
Oe.isCancel = mm;
Oe.VERSION = Sm;
Oe.toFormData = Ju;
Oe.AxiosError = re;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(r) {
  return Promise.all(r);
};
Oe.spread = ob;
Oe.isAxiosError = fb;
Oe.mergeConfig = ha;
Oe.AxiosHeaders = gt;
Oe.formToJSON = (i) => hm(O.isHTMLForm(i) ? new FormData(i) : i);
Oe.getAdapter = bm.getAdapter;
Oe.HttpStatusCode = jc;
Oe.default = Oe;
const {
  Axios: zb,
  AxiosError: Nb,
  CanceledError: Ob,
  isCancel: Mb,
  CancelToken: jb,
  VERSION: Ub,
  all: Db,
  Cancel: Bb,
  isAxiosError: Lb,
  spread: Hb,
  toFormData: qb,
  AxiosHeaders: Yb,
  HttpStatusCode: kb,
  formToJSON: Xb,
  getAdapter: Gb,
  mergeConfig: Vb
} = Oe, db = "https://dev-demo-env.colibrilearning.com", rn = (i) => {
  const r = i.startsWith("/") ? i : `/${i}`;
  return `${db}${r}`;
}, hb = async (i) => {
  try {
    return (await Oe.get(rn("global/subsidiaries")))?.data?.find((c) => c?.siteURL?.includes(i))?.subsidiaryId;
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function mi() {
  const i = localStorage.getItem("brand_data");
  if (!i)
    return {};
  const r = JSON.parse(i), s = await hb(r?.domain);
  return {
    "X-Brand-Id": r?.id,
    "X-Subsidiary-Id": s?.toString(),
    "X-Brand-Domain": r?.domain
  };
}
const mb = async (i, r) => {
  const s = rn("api/auth"), c = { username: i, password: r };
  try {
    return (await Oe.post(s, c, {
      headers: await mi()
    })).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, yb = async (i) => {
  const r = rn("api/register");
  try {
    return (await Oe.post(r, i, {
      headers: await mi()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 500 ? new Error("Registration failed. Please try again.") : s.message ? new Error(s.message) : new Error("Registration failed");
  }
}, Qc = async (i) => {
  const r = rn("api/check-email");
  try {
    return (await Oe.post(r, { email: i }, {
      headers: await mi()
    })).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, Ch = async (i) => {
  const r = rn("api/forgot-password"), s = { email: i };
  try {
    return (await Oe.post(r, s, {
      headers: await mi()
    })).data;
  } catch (c) {
    throw console.error("Error sending password reset:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 404 ? new Error("We couldn't find an account with that email.") : c.message ? new Error(c.message) : new Error("Failed to send password reset link");
  }
}, gb = async (i) => {
  const r = rn("api/refresh"), s = { refresh_token: i };
  try {
    return (await Oe.post(r, s, {
      headers: await mi()
    })).data;
  } catch (c) {
    throw console.error("Error during token refresh:", c), c;
  }
}, Tc = (i, r) => {
  if (!r) {
    const s = document.cookie.split(";").find((c) => c.trim().startsWith("X-Credential="));
    s && (r = s.split("=")[1] || null);
  }
  if (!r)
    return i;
  try {
    const s = new URL(i);
    return s.searchParams.set("xcred", r), s.toString();
  } catch {
    const c = i.includes("?") ? "&" : "?";
    return `${i}${c}xcred=${encodeURIComponent(r)}`;
  }
}, pb = (i) => {
  try {
    if (!localStorage.getItem("refresh_token_time"))
      return console.log("[checkTokenAndRedirect] Remember Me not enabled - requires manual login"), !1;
    console.log("[checkTokenAndRedirect] Remember Me enabled - validating tokens");
    const s = document.cookie.split(";").find((g) => g.trim().startsWith("X-Credential=")), c = document.cookie.split(";").find((g) => g.trim().startsWith("access_token="));
    let o = null, d = !1;
    if (c && (o = c.split("=")[1] || null), s && (d = !0), o || (o = localStorage.getItem("access_token")), !o || !d)
      return !1;
    const h = localStorage.getItem("access_token_expires");
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const g = Yc(o), p = Math.floor(Date.now() / 1e3);
      return !(!g.exp || p >= g.exp);
    } catch (g) {
      return console.error("[checkTokenAndRedirect] Token decode error:", g), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, vb = () => {
  try {
    const i = localStorage.getItem("refresh_token_time");
    if (!i)
      return !1;
    const r = 10080 * 60 * 1e3;
    return Date.now() - parseInt(i) < r;
  } catch (i) {
    return console.error("[isRefreshTokenValid] Error:", i), !1;
  }
}, bb = () => {
  Ec("access_token"), Ec("X-Credential"), Ec("refresh_token"), [
    "refresh_token",
    "refresh_token_time",
    "access_token",
    "access_token_expires",
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log("[Auth] All authentication tokens and state cleared");
}, Rm = async (i, r, s = !1) => {
  const c = await mb(i, r), { tokens: o, x_credential: d } = c;
  if (o.access_token) {
    const h = Yc(o.access_token), g = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    ii("access_token", o.access_token, g, !0);
    const p = d || h.x_credentials;
    p && ii("X-Credential", p, g, !1), localStorage.setItem("access_token", o.access_token), localStorage.setItem("access_token_expires", (Date.now() + g * 1e3).toString()), localStorage.setItem("refresh_token", o.refresh_token);
    const y = 720 * 60 * 60;
    ii("refresh_token", o.refresh_token, y, !0), s && o.refresh_token ? (localStorage.setItem("refresh_token_time", Date.now().toString()), console.log("[Auth] Remember Me enabled - auto-login will work on page revisit")) : (localStorage.removeItem("refresh_token_time"), console.log("[Auth] Remember Me disabled - manual login required on page revisit"));
  }
  return o;
}, Cc = (i) => {
  try {
    const r = Yc(i);
    return {
      access_token: i,
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
    return console.error("[createUserSessionFromToken] Failed to decode access token:", r), null;
  }
}, Fu = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", Sb = ({
  onSuccess: i,
  onError: r,
  handleClose: s,
  onSignIn: c,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = T.useState(h), [y, S] = T.useState(""), [R, N] = T.useState(""), [q, C] = T.useState(""), [U, j] = T.useState(!1), [G, Z] = T.useState(""), [K, P] = T.useState(""), [le, he] = T.useState(!1), [W, $] = T.useState(!1), [me, oe] = T.useState(!1), [Ie, ve] = T.useState(!1), [De, Ye] = T.useState(!1), [ke, X] = T.useState(!1), [k, Q] = T.useState(!1), [ie, ce] = T.useState(""), [Ne, E] = T.useState("info"), B = T.useRef(null), V = T.useRef(null), Y = {
    length: q.length >= 9 && q.length <= 15,
    hasNumber: /[0-9]/.test(q),
    hasUppercase: /[A-Z]/.test(q),
    hasLowercase: /[a-z]/.test(q),
    hasSpecialChar: /[!@#$%^&*._-]/.test(q),
    onlyAllowedChars: /^[A-Za-z0-9!@#$%^&*._-]+$/.test(q) || q === "",
    differentFromUsername: g ? q !== g && q !== g.split("@")[0] : !0
  }, ae = ((Se) => {
    if (!Se) return { strength: "", color: "", width: "0%" };
    if (Y.length && Y.hasNumber && Y.hasUppercase && Y.hasLowercase && Y.hasSpecialChar && Y.onlyAllowedChars && Y.differentFromUsername)
      return { strength: "Strong", color: "#10B981", width: "100%" };
    let $e = 0;
    return Y.length && $e++, Y.hasNumber && $e++, Y.hasUppercase && $e++, Y.hasLowercase && $e++, Y.hasSpecialChar && $e++, Y.onlyAllowedChars && $e++, Y.differentFromUsername && $e++, $e <= 2 ? { strength: "Weak", color: "#EF4444", width: "25%" } : { strength: "Good", color: "#10B981", width: "60%" };
  })(q), be = (Se) => Se ? Se.length < 9 || Se.length > 15 ? { isValid: !1, error: "Password must be 9-15 characters long" } : /[A-Z]/.test(Se) ? /[a-z]/.test(Se) ? /[0-9]/.test(Se) ? /[!@#$%^&*._-]/.test(Se) ? /^[A-Za-z0-9!@#$%^&*._-]+$/.test(Se) ? { isValid: !0, error: "" } : {
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
      oe(!1), ve(!1), X(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      oe(!1), ve(!1);
      return;
    }
    return V.current = setTimeout(async () => {
      Ye(!0);
      try {
        (await Qc(g)).exists ? (ve(!0), oe(!0)) : (ve(!1), oe(!1));
      } catch (pt) {
        console.error("[CreateAccount] Email check failed:", pt), X(!0), oe(!0), ve(!1);
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
  const Vl = (Se) => {
    Se.target === B.current && s();
  }, ya = async (Se) => {
    if (Se.preventDefault(), $(!0), !g || !y || !R) {
      r("Please fill in all required fields");
      return;
    }
    const pt = be(q);
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
      const Ft = g.split("@")[0], vl = await yb({
        username: Ft,
        email: g,
        firstName: y,
        lastName: R,
        password: q
      });
      console.log(
        "[CreateAccount] Registration successful:",
        vl.message
      );
      try {
        const Ql = await Rm(g, q, k);
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
      zc,
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
        ref: B,
        onMouseDown: Vl,
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
                    disabled: U,
                    className: "w-full!",
                    autoComplete: "email",
                    error: W && !g ? "Required" : G || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      De && /* @__PURE__ */ v.jsx(Wh, {}),
                      !De && !Ie && !ke && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          src: Fu,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                me && Ie && !ke && /* @__PURE__ */ v.jsx(
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
                me && ke && /* @__PURE__ */ v.jsx(
                  en,
                  {
                    type: "error",
                    message: "Unable to verify email. You can still proceed with registration.",
                    onClose: () => {
                      oe(!1), X(!1);
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
                      onChange: (Se) => S(Se.target.value),
                      placeholder: "First Name",
                      disabled: U,
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
                      onChange: (Se) => N(Se.target.value),
                      placeholder: "Last Name",
                      disabled: U,
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
                    value: q,
                    onChange: (Se) => {
                      C(Se.target.value), P("");
                    },
                    placeholder: "Enter Password...",
                    disabled: U,
                    className: "w-full!",
                    autoComplete: "new-password",
                    error: K,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => he(!le),
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
                      checked: k,
                      onChange: (Se) => Q(Se.target.checked),
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
                    disabled: U || Ie || !Be,
                    className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: U ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                    disabled: U,
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
      zc,
      {
        message: ie,
        type: Ne,
        onClose: () => ce("")
      }
    )
  ] });
}, Eb = ({
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
            src: Fu,
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
}, xb = ({
  email: i,
  onBack: r,
  handleClose: s
}) => {
  const [c, o] = T.useState(i || ""), [d, h] = T.useState(!1), [g, p] = T.useState(!1), [y, S] = T.useState(""), [R, N] = T.useState(!1), [q, C] = T.useState(!1), [U, j] = T.useState(!1), [G, Z] = T.useState(!1), K = T.useRef(null);
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
    const me = setTimeout(async () => {
      N(!0);
      try {
        const oe = await Qc(c);
        console.log("[ResetPassword] Email check response:", oe), C(oe.exists), console.log("[ResetPassword] Email exists:", oe.exists);
      } catch (oe) {
        console.error("[ResetPassword] Error checking email:", oe), Z(!0), C(!1);
      } finally {
        N(!1);
      }
    }, 500);
    return () => clearTimeout(me);
  }, [c]);
  const P = (W) => {
    W.target === K.current && s();
  }, le = async (W) => {
    if (W.preventDefault(), !c) {
      S("Email is required");
      return;
    }
    h(!0), S("");
    try {
      await Ch(c), console.log("[ResetPassword] Reset link sent to:", c), p(!0);
    } catch ($) {
      console.error("[ResetPassword] Failed to send reset link:", $);
      const me = $ instanceof Error ? $.message : "Failed to send reset link. Please try again.";
      S(me);
    } finally {
      h(!1);
    }
  }, he = async () => {
    h(!0), S("");
    try {
      await Ch(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (W) {
      console.error("[ResetPassword] Failed to resend reset link:", W), p(!1);
      const $ = W instanceof Error ? W.message : "Failed to resend reset link. Please try again.";
      S($);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ v.jsx(
    Eb,
    {
      email: c,
      loading: d,
      onResendLink: he,
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
                o(W.target.value), S("");
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
                !R && q && U && !G && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: Fu,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          G && /* @__PURE__ */ v.jsx(
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
              onClose: () => S(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Ht,
            {
              type: "submit",
              disabled: d || !c || !U || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: c, isEmailValid: U, emailExists: q });
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
}, Rb = ({
  onSuccess: i,
  onError: r,
  handleClose: s,
  authority: c,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = T.useState(h), [y, S] = T.useState(""), [R, N] = T.useState(!1), [q, C] = T.useState(!1), [U, j] = T.useState(""), [G, Z] = T.useState(!1), [K, P] = T.useState(!1), [le, he] = T.useState(!1), [W, $] = T.useState(!1), [me, oe] = T.useState(!1), [Ie, ve] = T.useState(!1), [De, Ye] = T.useState(!1), [ke, X] = T.useState(""), [k, Q] = T.useState("info"), ie = T.useRef(null), ce = T.useRef(null);
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
        (await Qc(g)).exists ? ($(!0), ve(!1)) : ($(!1), ve(!0));
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
  const B = (Y) => {
    Y.target === ie.current && s();
  }, V = async (Y) => {
    if (Y.preventDefault(), !g || !y) {
      j("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    N(!0), j("");
    try {
      const te = await Rm(g, y, G);
      i(te);
    } catch (te) {
      console.error("[EmbeddedLogin] Login failed:", te);
      const ae = te instanceof Error ? te.message : "Authentication failed";
      j(ae), X(ae), Q("error"), r(ae);
    } finally {
      N(!1);
    }
  };
  return le ? /* @__PURE__ */ v.jsx(
    xb,
    {
      email: g,
      onBack: () => he(!1),
      handleClose: s
    }
  ) : K ? /* @__PURE__ */ v.jsx(
    Sb,
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
      onMouseDown: B,
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
                  me && /* @__PURE__ */ v.jsx(Wh, {}),
                  !me && W && E && !De && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: Fu,
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
                type: q ? "text" : "password",
                value: y,
                onChange: (Y) => {
                  S(Y.target.value), j("");
                },
                placeholder: "Enter Password...",
                disabled: R,
                className: "w-full!",
                autoComplete: "current-password",
                error: U,
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
                    checked: G,
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
                    Y.preventDefault(), he(!0);
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
        ke && /* @__PURE__ */ v.jsx(
          zc,
          {
            message: ke,
            type: k,
            onClose: () => X("")
          }
        )
      ]
    }
  );
}, wb = (i) => {
  const { authority: r, subsidiary: s, onRedirect: c } = i, [o, d] = T.useState(!1);
  T.useEffect(() => {
    (async () => {
      try {
        if (pb()) {
          d(!0);
          const N = i.redirectUrl || Uu();
          if (i.autoRedirection)
            window.location.href = Tc(N);
          else if (c && i.redirectUrl) {
            const q = i.redirectUrl || Uu(), C = localStorage.getItem("access_token");
            if (C) {
              const U = Cc(C);
              U && c(q, U);
            }
          }
          return;
        }
        if (vb()) {
          const N = localStorage.getItem("refresh_token");
          if (N) {
            const q = await gb(N);
            if (q && q.tokens && q.tokens.access_token) {
              const C = q.tokens, U = Cc(C.access_token);
              if (!U)
                return;
              const j = (U.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
              ii(
                "access_token",
                C.access_token,
                j,
                !0
              ), U.decoded.x_credentials && ii(
                "X-Credential",
                U.decoded.x_credentials,
                j,
                !1
              ), localStorage.setItem("access_token", C.access_token), localStorage.setItem("access_token_expires", (Date.now() + j * 1e3).toString()), C.refresh_token && (localStorage.setItem("refresh_token", C.refresh_token), localStorage.getItem("refresh_token_time") && localStorage.setItem(
                "refresh_token_time",
                Date.now().toString()
              )), console.log("[App] Auto-login successful"), d(!0);
              const G = i.redirectUrl || Uu();
              c && (console.log(
                "[App] Triggering onRedirect callback with user session:",
                U
              ), c(G, U)), i.autoRedirection && (window.location.href = Tc(
                G,
                U.decoded.x_credentials
              ));
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (S) {
        console.error("[App] Auto-login failed:", S), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [i.redirectUrl]), T.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const h = (y) => {
    i.handleClose && i.handleClose(), d(!0);
    const S = y?.userInfo?.x_credentials || y?.x_credentials, R = i.redirectUrl || Uu();
    if (c) {
      const N = localStorage.getItem("access_token");
      if (N) {
        const q = Cc(N);
        q && c(R, q);
      }
    }
    i.autoRedirection && setTimeout(() => {
      window.location.href = Tc(R, S);
    }, 100);
  }, g = (y) => {
    console.log("[App] Embedded login error:", y);
  }, p = () => {
    i.handleClose && i.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(Zg, { children: /* @__PURE__ */ v.jsx(
    Qh,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(T.Fragment, { children: i.showLogin && !o && /* @__PURE__ */ v.jsx(
        Rb,
        {
          onSuccess: h,
          onError: g,
          handleClose: p,
          authority: r,
          title: i.loginTitle,
          subtitle: i.loginSubtitle
        }
      ) })
    }
  ) }) });
}, Tb = {
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
class Cb {
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
        subsidiaryId: Tb[c.token] || 0
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
async function Ah(i) {
  const r = new Cb(i.cdnBaseUrl, i.shadowRoot), s = i.brandFolder || i.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (i.autoDetect) {
    const c = await r.detectBrandFromDomain();
    c && await r.loadTheme(c);
  }
  return r;
}
const _h = typeof window < "u" && window.__widgetStyles?.widget || "";
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
      if (_h) {
        const d = document.createElement("style");
        d.textContent = _h, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const c = this.getAttribute("subsidiary");
      c && c.trim() !== "" ? this.loadTheme(c, s) : this.loadThemeFromDomain(s);
      const o = document.createElement("div");
      s.appendChild(o), this.root = Mp.createRoot(o), this.render();
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
        await Ah({
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
        ), await Ah({
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
      const c = this.getAttribute("authority") || Bp(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
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
      console.log("[Widget] logout() called"), bb(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
        /* @__PURE__ */ v.jsx(gp, { children: /* @__PURE__ */ v.jsx(T.StrictMode, { children: /* @__PURE__ */ v.jsx(wb, { ...s }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", i);
}
