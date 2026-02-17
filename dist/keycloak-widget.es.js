
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var Lc = { exports: {} }, yi = {};
var Rh;
function _g() {
  if (Rh) return yi;
  Rh = 1;
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
  return yi.Fragment = r, yi.jsx = s, yi.jsxs = s, yi;
}
var Th;
function Ng() {
  return Th || (Th = 1, Lc.exports = _g()), Lc.exports;
}
var v = Ng(), Hc = { exports: {} }, ne = {}, Ah;
function Og() {
  if (Ah) return ne;
  Ah = 1;
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
  }, M = Object.assign, Y = {};
  function Q(S, H, k) {
    this.props = S, this.context = H, this.refs = Y, this.updater = k || j;
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
  function $() {
  }
  $.prototype = Q.prototype;
  function W(S, H, k) {
    this.props = S, this.context = H, this.refs = Y, this.updater = k || j;
  }
  var te = W.prototype = new $();
  te.constructor = W, M(te, Q.prototype), te.isPureReactComponent = !0;
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
  function Me(S, H) {
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
  function Fe(S, H) {
    return typeof S == "object" && S !== null && S.key != null ? qe("" + S.key) : H.toString(36);
  }
  function X(S) {
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
      return ae = ae(S), ce = Z === "" ? "." + Fe(S, 0) : Z, ye(ae) ? (k = "", ce != null && (k = ce.replace(Qe, "$&/") + "/"), G(ae, H, k, "", function(ta) {
        return ta;
      })) : ae != null && (ge(ae) && (ae = Me(
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
        Z = S[Ge], K = He + Fe(Z, Ge), ce += G(
          Z,
          H,
          k,
          K,
          ae
        );
    else if (Ge = C(S), typeof Ge == "function")
      for (S = Ge.call(S), Ge = 0; !(Z = S.next()).done; )
        Z = Z.value, K = He + Fe(Z, Ge++), ce += G(
          Z,
          H,
          k,
          K,
          ae
        );
    else if (K === "object") {
      if (typeof S.then == "function")
        return G(
          X(S),
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
  var Ae = typeof reportError == "function" ? reportError : function(S) {
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
  }, Ce = {
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
  return ne.Activity = w, ne.Children = Ce, ne.Component = Q, ne.Fragment = c, ne.Profiler = d, ne.PureComponent = W, ne.StrictMode = o, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ne.__COMPILER_RUNTIME = {
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
    var Z = M({}, S.props), ae = S.key;
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
      ae !== null && ae(k, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ie, Ae);
    } catch (K) {
      Ae(K);
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
var xh;
function ro() {
  return xh || (xh = 1, Hc.exports = Og()), Hc.exports;
}
var A = ro();
var Ch = "popstate";
function wg(n = {}) {
  function r(c, o) {
    let { pathname: d, search: h, hash: g } = c.location;
    return Pc(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function s(c, o) {
    return typeof o == "string" ? o : Ri(o);
  }
  return Mg(
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
function Pt(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Dg() {
  return Math.random().toString(36).substring(2, 10);
}
function _h(n, r) {
  return {
    usr: n.state,
    key: n.key,
    idx: r
  };
}
function Pc(n, r, s = null, c) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? gn(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || c || Dg()
  };
}
function Ri({
  pathname: n = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s), n;
}
function gn(n) {
  let r = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && (r.hash = n.substring(s), n = n.substring(0, s));
    let c = n.indexOf("?");
    c >= 0 && (r.search = n.substring(c), n = n.substring(0, c)), n && (r.pathname = n);
  }
  return r;
}
function Mg(n, r, s, c = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = c, h = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function b() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    g = "POP";
    let M = b(), Y = M == null ? null : M - y;
    y = M, p && p({ action: g, location: j.location, delta: Y });
  }
  function w(M, Y) {
    g = "PUSH";
    let Q = Pc(j.location, M, Y);
    y = b() + 1;
    let $ = _h(Q, y), W = j.createHref(Q);
    try {
      h.pushState($, "", W);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError")
        throw te;
      o.location.assign(W);
    }
    d && p && p({ action: g, location: j.location, delta: 1 });
  }
  function q(M, Y) {
    g = "REPLACE";
    let Q = Pc(j.location, M, Y);
    y = b();
    let $ = _h(Q, y), W = j.createHref(Q);
    h.replaceState($, "", W), d && p && p({ action: g, location: j.location, delta: 0 });
  }
  function C(M) {
    return Ug(M);
  }
  let j = {
    get action() {
      return g;
    },
    get location() {
      return n(o, h);
    },
    listen(M) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(Ch, T), p = M, () => {
        o.removeEventListener(Ch, T), p = null;
      };
    },
    createHref(M) {
      return r(o, M);
    },
    createURL: C,
    encodeLocation(M) {
      let Y = C(M);
      return {
        pathname: Y.pathname,
        search: Y.search,
        hash: Y.hash
      };
    },
    push: w,
    replace: q,
    go(M) {
      return h.go(M);
    }
  };
  return j;
}
function Ug(n, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Ye(s, "No window.location.(origin|href) available to create URL");
  let c = typeof n == "string" ? n : Ri(n);
  return c = c.replace(/ $/, "%20"), !r && c.startsWith("//") && (c = s + c), new URL(c, s);
}
function sm(n, r, s = "/") {
  return zg(n, r, s, !1);
}
function zg(n, r, s, c) {
  let o = typeof r == "string" ? gn(r) : r, d = Cl(o.pathname || "/", s);
  if (d == null)
    return null;
  let h = cm(n);
  jg(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = Qg(d);
    g = Kg(
      h[p],
      y,
      c
    );
  }
  return g;
}
function cm(n, r = [], s = [], c = "", o = !1) {
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
    let T = Al([c, b.relativePath]), w = s.concat(b);
    h.children && h.children.length > 0 && (Ye(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), cm(
      h.children,
      r,
      w,
      T,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: T,
      score: Xg(T, h.index),
      routesMeta: w
    });
  };
  return n.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of om(h.path))
        d(h, g, !0, p);
  }), r;
}
function om(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [s, ...c] = r, o = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (c.length === 0)
    return o ? [d, ""] : [d];
  let h = om(c.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...h), g.map(
    (p) => n.startsWith("/") && p === "" ? "/" : p
  );
}
function jg(n) {
  n.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Vg(
      r.routesMeta.map((c) => c.childrenIndex),
      s.routesMeta.map((c) => c.childrenIndex)
    )
  );
}
var Lg = /^:[\w-]+$/, Hg = 3, Bg = 2, qg = 1, Gg = 10, Yg = -2, Nh = (n) => n === "*";
function Xg(n, r) {
  let s = n.split("/"), c = s.length;
  return s.some(Nh) && (c += Yg), r && (c += Bg), s.filter((o) => !Nh(o)).reduce(
    (o, d) => o + (Lg.test(d) ? Hg : d === "" ? qg : Gg),
    c
  );
}
function Vg(n, r) {
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
function Kg(n, r, s = !1) {
  let { routesMeta: c } = n, o = {}, d = "/", h = [];
  for (let g = 0; g < c.length; ++g) {
    let p = c[g], y = g === c.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", T = or(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), w = p.route;
    if (!T && y && s && !c[c.length - 1].route.index && (T = or(
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
      pathname: Al([d, T.pathname]),
      pathnameBase: Fg(
        Al([d, T.pathnameBase])
      ),
      route: w
    }), T.pathnameBase !== "/" && (d = Al([d, T.pathnameBase]));
  }
  return h;
}
function or(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, c] = kg(
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
function kg(n, r = !1, s = !0) {
  Pt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let c = [], o = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (c.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return n.endsWith("*") ? (c.push({ paramName: "*" }), o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? o += "\\/*$" : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), c];
}
function Qg(n) {
  try {
    return n.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Pt(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), n;
  }
}
function Cl(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, c = n.charAt(s);
  return c && c !== "/" ? null : n.slice(s) || "/";
}
var fm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Zg = (n) => fm.test(n);
function Jg(n, r = "/") {
  let {
    pathname: s,
    search: c = "",
    hash: o = ""
  } = typeof n == "string" ? gn(n) : n, d;
  if (s)
    if (Zg(s))
      d = s;
    else {
      if (s.includes("//")) {
        let h = s;
        s = s.replace(/\/\/+/g, "/"), Pt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`
        );
      }
      s.startsWith("/") ? d = Oh(s.substring(1), "/") : d = Oh(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: Wg(c),
    hash: Ig(o)
  };
}
function Oh(n, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((o) => {
    o === ".." ? s.length > 1 && s.pop() : o !== "." && s.push(o);
  }), s.length > 1 ? s.join("/") : "/";
}
function Bc(n, r, s, c) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    c
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $g(n) {
  return n.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function dm(n) {
  let r = $g(n);
  return r.map(
    (s, c) => c === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function hm(n, r, s, c = !1) {
  let o;
  typeof n == "string" ? o = gn(n) : (o = { ...n }, Ye(
    !o.pathname || !o.pathname.includes("?"),
    Bc("?", "pathname", "search", o)
  ), Ye(
    !o.pathname || !o.pathname.includes("#"),
    Bc("#", "pathname", "hash", o)
  ), Ye(
    !o.search || !o.search.includes("#"),
    Bc("#", "search", "hash", o)
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
  let p = Jg(o, g), y = h && h !== "/" && h.endsWith("/"), b = (d || h === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var Al = (n) => n.join("/").replace(/\/\/+/g, "/"), Fg = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), Wg = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Ig = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n, Pg = class {
  constructor(n, r, s, c = !1) {
    this.status = n, this.statusText = r || "", this.internal = c, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function ep(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
function tp(n) {
  return n.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var mm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function ym(n, r) {
  let s = n;
  if (typeof s != "string" || !fm.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let c = s, o = !1;
  if (mm)
    try {
      let d = new URL(window.location.href), h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = Cl(h.pathname, r);
      h.origin === d.origin && g != null ? s = g + h.search + h.hash : o = !0;
    } catch {
      Pt(
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
var gm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  gm
);
var lp = [
  "GET",
  ...gm
];
new Set(lp);
var pn = A.createContext(null);
pn.displayName = "DataRouter";
var hr = A.createContext(null);
hr.displayName = "DataRouterState";
var ap = A.createContext(!1), pm = A.createContext({
  isTransitioning: !1
});
pm.displayName = "ViewTransition";
var np = A.createContext(
  /* @__PURE__ */ new Map()
);
np.displayName = "Fetchers";
var ip = A.createContext(null);
ip.displayName = "Await";
var Qt = A.createContext(
  null
);
Qt.displayName = "Navigation";
var Ci = A.createContext(
  null
);
Ci.displayName = "Location";
var _l = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_l.displayName = "Route";
var so = A.createContext(null);
so.displayName = "RouteError";
var vm = "REACT_ROUTER_ERROR", up = "REDIRECT", rp = "ROUTE_ERROR_RESPONSE";
function sp(n) {
  if (n.startsWith(`${vm}:${up}:{`))
    try {
      let r = JSON.parse(n.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function cp(n) {
  if (n.startsWith(
    `${vm}:${rp}:{`
  ))
    try {
      let r = JSON.parse(n.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new Pg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function op(n, { relative: r } = {}) {
  Ye(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: c } = A.useContext(Qt), { hash: o, pathname: d, search: h } = Ni(n, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : Al([s, d])), c.createHref({ pathname: g, search: h, hash: o });
}
function _i() {
  return A.useContext(Ci) != null;
}
function Ca() {
  return Ye(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(Ci).location;
}
var Em = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bm(n) {
  A.useContext(Qt).static || A.useLayoutEffect(n);
}
function fp() {
  let { isDataRoute: n } = A.useContext(_l);
  return n ? Ap() : dp();
}
function dp() {
  Ye(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = A.useContext(pn), { basename: r, navigator: s } = A.useContext(Qt), { matches: c } = A.useContext(_l), { pathname: o } = Ca(), d = JSON.stringify(dm(c)), h = A.useRef(!1);
  return bm(() => {
    h.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (Pt(h.current, Em), !h.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let b = hm(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      n == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : Al([r, b.pathname])), (y.replace ? s.replace : s.push)(
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
function Ni(n, { relative: r } = {}) {
  let { matches: s } = A.useContext(_l), { pathname: c } = Ca(), o = JSON.stringify(dm(s));
  return A.useMemo(
    () => hm(
      n,
      JSON.parse(o),
      c,
      r === "path"
    ),
    [n, o, c, r]
  );
}
function hp(n, r) {
  return Sm(n, r);
}
function Sm(n, r, s, c, o) {
  Ye(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(Qt), { matches: h } = A.useContext(_l), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", T = g && g.route;
  {
    let Q = T && T.path || "";
    Tm(
      y,
      !T || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let w = Ca(), q;
  if (r) {
    let Q = typeof r == "string" ? gn(r) : r;
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
  let M = sm(n, { pathname: j });
  Pt(
    T || M != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), Pt(
    M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Y = vp(
    M && M.map(
      (Q) => Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: Al([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathname
        ]),
        pathnameBase: Q.pathnameBase === "/" ? b : Al([
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
  return r && Y ? /* @__PURE__ */ A.createElement(
    Ci.Provider,
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
    Y
  ) : Y;
}
function mp() {
  let n = Tp(), r = ep(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), s = n instanceof Error ? n.stack : null, c = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: c }, d = { padding: "2px 4px", backgroundColor: c }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), h = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ A.createElement("pre", { style: o }, s) : null, h);
}
var yp = /* @__PURE__ */ A.createElement(mp, null), Rm = class extends A.Component {
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
      const s = cp(n.digest);
      s && (n = s);
    }
    let r = n !== void 0 ? /* @__PURE__ */ A.createElement(_l.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      so.Provider,
      {
        value: n,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(gp, { error: n }, r) : r;
  }
};
Rm.contextType = ap;
var qc = /* @__PURE__ */ new WeakMap();
function gp({
  children: n,
  error: r
}) {
  let { basename: s } = A.useContext(Qt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let c = sp(r.digest);
    if (c) {
      let o = qc.get(r);
      if (o) throw o;
      let d = ym(c.location, s);
      if (mm && !qc.get(r))
        if (d.isExternal || c.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: c.replace
            })
          );
          throw qc.set(r, h), h;
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
function pp({ routeContext: n, match: r, children: s }) {
  let c = A.useContext(pn);
  return c && c.static && c.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (c.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(_l.Provider, { value: n }, s);
}
function vp(n, r = [], s = null, c = null, o = null) {
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
      unstable_pattern: tp(s.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (b, T, w) => {
      let q, C = !1, j = null, M = null;
      s && (q = h && T.route.id ? h[T.route.id] : void 0, j = T.route.errorElement || yp, g && (p < 0 && w === 0 ? (Tm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), C = !0, M = null) : p === w && (C = !0, M = T.route.hydrateFallbackElement || null)));
      let Y = r.concat(d.slice(0, w + 1)), Q = () => {
        let $;
        return q ? $ = j : C ? $ = M : T.route.Component ? $ = /* @__PURE__ */ A.createElement(T.route.Component, null) : T.route.element ? $ = T.route.element : $ = b, /* @__PURE__ */ A.createElement(
          pp,
          {
            match: T,
            routeContext: {
              outlet: b,
              matches: Y,
              isDataRoute: s != null
            },
            children: $
          }
        );
      };
      return s && (T.route.ErrorBoundary || T.route.errorElement || w === 0) ? /* @__PURE__ */ A.createElement(
        Rm,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: j,
          error: q,
          children: Q(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
          onError: y
        }
      ) : Q();
    },
    null
  );
}
function co(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ep(n) {
  let r = A.useContext(pn);
  return Ye(r, co(n)), r;
}
function bp(n) {
  let r = A.useContext(hr);
  return Ye(r, co(n)), r;
}
function Sp(n) {
  let r = A.useContext(_l);
  return Ye(r, co(n)), r;
}
function oo(n) {
  let r = Sp(n), s = r.matches[r.matches.length - 1];
  return Ye(
    s.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function Rp() {
  return oo(
    "useRouteId"
    /* UseRouteId */
  );
}
function Tp() {
  let n = A.useContext(so), r = bp(
    "useRouteError"
    /* UseRouteError */
  ), s = oo(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : r.errors?.[s];
}
function Ap() {
  let { router: n } = Ep(
    "useNavigate"
    /* UseNavigateStable */
  ), r = oo(
    "useNavigate"
    /* UseNavigateStable */
  ), s = A.useRef(!1);
  return bm(() => {
    s.current = !0;
  }), A.useCallback(
    async (o, d = {}) => {
      Pt(s.current, Em), s.current && (typeof o == "number" ? await n.navigate(o) : await n.navigate(o, { fromRouteId: r, ...d }));
    },
    [n, r]
  );
}
var wh = {};
function Tm(n, r, s) {
  !r && !wh[n] && (wh[n] = !0, Pt(!1, s));
}
A.memo(xp);
function xp({
  routes: n,
  future: r,
  state: s,
  onError: c
}) {
  return Sm(n, void 0, s, c, r);
}
function Am(n) {
  Ye(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Cp({
  basename: n = "/",
  children: r = null,
  location: s,
  navigationType: c = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: h
}) {
  Ye(
    !_i(),
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
  typeof s == "string" && (s = gn(s));
  let {
    pathname: y = "/",
    search: b = "",
    hash: T = "",
    state: w = null,
    key: q = "default"
  } = s, C = A.useMemo(() => {
    let j = Cl(y, g);
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
  return Pt(
    C != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ A.createElement(Qt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Ci.Provider, { children: r, value: C }));
}
function _p({
  children: n,
  location: r
}) {
  return hp(eo(n), r);
}
function eo(n, r = []) {
  let s = [];
  return A.Children.forEach(n, (c, o) => {
    if (!A.isValidElement(c))
      return;
    let d = [...r, o];
    if (c.type === A.Fragment) {
      s.push.apply(
        s,
        eo(c.props.children, d)
      );
      return;
    }
    Ye(
      c.type === Am,
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
    c.props.children && (h.children = eo(
      c.props.children,
      d
    )), s.push(h);
  }), s;
}
var nr = "get", ir = "application/x-www-form-urlencoded";
function mr(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function Np(n) {
  return mr(n) && n.tagName.toLowerCase() === "button";
}
function Op(n) {
  return mr(n) && n.tagName.toLowerCase() === "form";
}
function wp(n) {
  return mr(n) && n.tagName.toLowerCase() === "input";
}
function Dp(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Mp(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Dp(n);
}
var Pu = null;
function Up() {
  if (Pu === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Pu = !1;
    } catch {
      Pu = !0;
    }
  return Pu;
}
var zp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Gc(n) {
  return n != null && !zp.has(n) ? (Pt(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ir}"`
  ), null) : n;
}
function jp(n, r) {
  let s, c, o, d, h;
  if (Op(n)) {
    let g = n.getAttribute("action");
    c = g ? Cl(g, r) : null, s = n.getAttribute("method") || nr, o = Gc(n.getAttribute("enctype")) || ir, d = new FormData(n);
  } else if (Np(n) || wp(n) && (n.type === "submit" || n.type === "image")) {
    let g = n.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = n.getAttribute("formaction") || g.getAttribute("action");
    if (c = p ? Cl(p, r) : null, s = n.getAttribute("formmethod") || g.getAttribute("method") || nr, o = Gc(n.getAttribute("formenctype")) || Gc(g.getAttribute("enctype")) || ir, d = new FormData(g, n), !Up()) {
      let { name: y, type: b, value: T } = n;
      if (b === "image") {
        let w = y ? `${y}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (mr(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = nr, c = null, o = ir, h = n;
  }
  return d && o === "text/plain" && (h = d, d = void 0), { action: c, method: s.toLowerCase(), encType: o, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function fo(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
function Lp(n, r, s) {
  let c = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return c.pathname === "/" ? c.pathname = `_root.${s}` : r && Cl(c.pathname, r) === "/" ? c.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : c.pathname = `${c.pathname.replace(/\/$/, "")}.${s}`, c;
}
async function Hp(n, r) {
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
function Bp(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function qp(n, r, s) {
  let c = await Promise.all(
    n.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let h = await Hp(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Vp(
    c.flat(1).filter(Bp).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function Dh(n, r, s, c, o, d) {
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
function Gp(n, r, { includeHydrateFallback: s } = {}) {
  return Yp(
    n.map((c) => {
      let o = r.routes[c.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), s && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function Yp(n) {
  return [...new Set(n)];
}
function Xp(n) {
  let r = {}, s = Object.keys(n).sort();
  for (let c of s)
    r[c] = n[c];
  return r;
}
function Vp(n, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((c, o) => {
    let d = JSON.stringify(Xp(o));
    return s.has(d) || (s.add(d), c.push({ key: d, link: o })), c;
  }, []);
}
function xm() {
  let n = A.useContext(pn);
  return fo(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function Kp() {
  let n = A.useContext(hr);
  return fo(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var ho = A.createContext(void 0);
ho.displayName = "FrameworkContext";
function Cm() {
  let n = A.useContext(ho);
  return fo(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function kp(n, r) {
  let s = A.useContext(ho), [c, o] = A.useState(!1), [d, h] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: T } = r, w = A.useRef(null);
  A.useEffect(() => {
    if (n === "render" && h(!0), n === "viewport") {
      let j = (Y) => {
        Y.forEach((Q) => {
          h(Q.isIntersecting);
        });
      }, M = new IntersectionObserver(j, { threshold: 0.5 });
      return w.current && M.observe(w.current), () => {
        M.disconnect();
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
      onFocus: gi(g, q),
      onBlur: gi(p, C),
      onMouseEnter: gi(y, q),
      onMouseLeave: gi(b, C),
      onTouchStart: gi(T, q)
    }
  ] : [!1, w, {}];
}
function gi(n, r) {
  return (s) => {
    n && n(s), s.defaultPrevented || r(s);
  };
}
function Qp({ page: n, ...r }) {
  let { router: s } = xm(), c = A.useMemo(
    () => sm(s.routes, n, s.basename),
    [s.routes, n, s.basename]
  );
  return c ? /* @__PURE__ */ A.createElement(Jp, { page: n, matches: c, ...r }) : null;
}
function Zp(n) {
  let { manifest: r, routeModules: s } = Cm(), [c, o] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return qp(n, r, s).then(
      (h) => {
        d || o(h);
      }
    ), () => {
      d = !0;
    };
  }, [n, r, s]), c;
}
function Jp({
  page: n,
  matches: r,
  ...s
}) {
  let c = Ca(), { manifest: o, routeModules: d } = Cm(), { basename: h } = xm(), { loaderData: g, matches: p } = Kp(), y = A.useMemo(
    () => Dh(
      n,
      r,
      p,
      o,
      c,
      "data"
    ),
    [n, r, p, o, c]
  ), b = A.useMemo(
    () => Dh(
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
    if (r.forEach((Y) => {
      let Q = o.routes[Y.route.id];
      !Q || !Q.hasLoader || (!y.some(($) => $.route.id === Y.route.id) && Y.route.id in g && d[Y.route.id]?.shouldRevalidate || Q.hasClientLoader ? j = !0 : C.add(Y.route.id));
    }), C.size === 0)
      return [];
    let M = Lp(n, h, "data");
    return j && C.size > 0 && M.searchParams.set(
      "_routes",
      r.filter((Y) => C.has(Y.route.id)).map((Y) => Y.route.id).join(",")
    ), [M.pathname + M.search];
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
    () => Gp(b, o),
    [b, o]
  ), q = Zp(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, T.map((C) => /* @__PURE__ */ A.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), w.map((C) => /* @__PURE__ */ A.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), q.map(({ key: C, link: j }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: C, nonce: s.nonce, ...j })
  )));
}
function $p(...n) {
  return (r) => {
    n.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var Fp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Fp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function Wp({
  basename: n,
  children: r,
  unstable_useTransitions: s,
  window: c
}) {
  let o = A.useRef();
  o.current == null && (o.current = wg({ window: c, v5Compat: !0 }));
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
    Cp,
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
var _m = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Nm = A.forwardRef(
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
    let { basename: j, unstable_useTransitions: M } = A.useContext(Qt), Y = typeof y == "string" && _m.test(y), Q = ym(y, j);
    y = Q.to;
    let $ = op(y, { relative: o }), [W, te, ye] = kp(
      c,
      q
    ), ie = tv(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: T,
      unstable_defaultShouldRevalidate: w,
      unstable_useTransitions: M
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
          href: Q.absoluteURL || $,
          onClick: Q.isExternal || d ? r : P,
          ref: $p(C, te),
          target: p,
          "data-discover": !Y && s === "render" ? "true" : void 0
        }
      )
    );
    return W && !Y ? /* @__PURE__ */ A.createElement(A.Fragment, null, le, /* @__PURE__ */ A.createElement(Qp, { page: $ })) : le;
  }
);
Nm.displayName = "Link";
var Ip = A.forwardRef(
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
    let T = Ni(h, { relative: y.relative }), w = Ca(), q = A.useContext(hr), { navigator: C, basename: j } = A.useContext(Qt), M = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    uv(T) && g === !0, Y = C.encodeLocation ? C.encodeLocation(T).pathname : T.pathname, Q = w.pathname, $ = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (Q = Q.toLowerCase(), $ = $ ? $.toLowerCase() : null, Y = Y.toLowerCase()), $ && j && ($ = Cl($, j) || $);
    const W = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let te = Q === Y || !o && Q.startsWith(Y) && Q.charAt(W) === "/", ye = $ != null && ($ === Y || !o && $.startsWith(Y) && $.charAt(Y.length) === "/"), ie = {
      isActive: te,
      isPending: ye,
      isTransitioning: M
    }, P = te ? r : void 0, le;
    typeof c == "function" ? le = c(ie) : le = [
      c,
      te ? "active" : null,
      ye ? "pending" : null,
      M ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let se = typeof d == "function" ? d(ie) : d;
    return /* @__PURE__ */ A.createElement(
      Nm,
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
Ip.displayName = "NavLink";
var Pp = A.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: c,
    replace: o,
    state: d,
    method: h = nr,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: T,
    unstable_defaultShouldRevalidate: w,
    ...q
  }, C) => {
    let { unstable_useTransitions: j } = A.useContext(Qt), M = nv(), Y = iv(g, { relative: y }), Q = h.toLowerCase() === "get" ? "get" : "post", $ = typeof g == "string" && _m.test(g), W = (te) => {
      if (p && p(te), te.defaultPrevented) return;
      te.preventDefault();
      let ye = te.nativeEvent.submitter, ie = ye?.getAttribute("formmethod") || h, P = () => M(ye || te.currentTarget, {
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
        action: Y,
        onSubmit: c ? p : W,
        ...q,
        "data-discover": !$ && n === "render" ? "true" : void 0
      }
    );
  }
);
Pp.displayName = "Form";
function ev(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Om(n) {
  let r = A.useContext(pn);
  return Ye(r, ev(n)), r;
}
function tv(n, {
  target: r,
  replace: s,
  state: c,
  preventScrollReset: o,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = fp(), b = Ca(), T = Ni(n, { relative: d });
  return A.useCallback(
    (w) => {
      if (Mp(w, r)) {
        w.preventDefault();
        let q = s !== void 0 ? s : Ri(b) === Ri(T), C = () => y(n, {
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
var lv = 0, av = () => `__${String(++lv)}__`;
function nv() {
  let { router: n } = Om(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(Qt), s = Rp(), c = n.fetch, o = n.navigate;
  return A.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: T } = jp(
        d,
        r
      );
      if (h.navigate === !1) {
        let w = h.fetcherKey || av();
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
function iv(n, { relative: r } = {}) {
  let { basename: s } = A.useContext(Qt), c = A.useContext(_l);
  Ye(c, "useFormAction must be used inside a RouteContext");
  let [o] = c.matches.slice(-1), d = { ...Ni(n || ".", { relative: r }) }, h = Ca();
  if (n == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((T) => T).forEach((T) => g.append("index", T));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!n || n === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : Al([s, d.pathname])), Ri(d);
}
function uv(n, { relative: r } = {}) {
  let s = A.useContext(pm);
  Ye(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: c } = Om(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = Ni(n, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = Cl(s.currentLocation.pathname, c) || s.currentLocation.pathname, h = Cl(s.nextLocation.pathname, c) || s.nextLocation.pathname;
  return or(o.pathname, h) != null || or(o.pathname, d) != null;
}
var Yc = { exports: {} }, dt = {};
var Mh;
function rv() {
  if (Mh) return dt;
  Mh = 1;
  var n = ro();
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
  return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, dt.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, dt.flushSync = function(p) {
    var y = h.T, b = c.p;
    try {
      if (h.T = null, c.p = 2, p) return p();
    } finally {
      h.T = y, c.p = b, c.d.f();
    }
  }, dt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, c.d.C(p, y));
  }, dt.prefetchDNS = function(p) {
    typeof p == "string" && c.d.D(p);
  }, dt.preinit = function(p, y) {
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
  }, dt.preinitModule = function(p, y) {
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
  }, dt.preload = function(p, y) {
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
  }, dt.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        c.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else c.d.m(p);
  }, dt.requestFormReset = function(p) {
    c.d.r(p);
  }, dt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, dt.useFormState = function(p, y, b) {
    return h.H.useFormState(p, y, b);
  }, dt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, dt.version = "19.2.3", dt;
}
var Uh;
function sv() {
  if (Uh) return Yc.exports;
  Uh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Yc.exports = rv(), Yc.exports;
}
var Xc = { exports: {} }, pi = {}, Vc = { exports: {} }, Kc = {};
var zh;
function cv() {
  return zh || (zh = 1, (function(n) {
    function r(X, G) {
      var V = X.length;
      X.push(G);
      e: for (; 0 < V; ) {
        var fe = V - 1 >>> 1, Ae = X[fe];
        if (0 < o(Ae, G))
          X[fe] = G, X[V] = Ae, V = fe;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function c(X) {
      if (X.length === 0) return null;
      var G = X[0], V = X.pop();
      if (V !== G) {
        X[0] = V;
        e: for (var fe = 0, Ae = X.length, Ce = Ae >>> 1; fe < Ce; ) {
          var S = 2 * (fe + 1) - 1, H = X[S], k = S + 1, Z = X[k];
          if (0 > o(H, V))
            k < Ae && 0 > o(Z, H) ? (X[fe] = Z, X[k] = V, fe = k) : (X[fe] = H, X[S] = V, fe = S);
          else if (k < Ae && 0 > o(Z, V))
            X[fe] = Z, X[k] = V, fe = k;
          else break e;
        }
      }
      return G;
    }
    function o(X, G) {
      var V = X.sortIndex - G.sortIndex;
      return V !== 0 ? V : X.id - G.id;
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
    var p = [], y = [], b = 1, T = null, w = 3, q = !1, C = !1, j = !1, M = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function W(X) {
      for (var G = s(y); G !== null; ) {
        if (G.callback === null) c(y);
        else if (G.startTime <= X)
          c(y), G.sortIndex = G.expirationTime, r(p, G);
        else break;
        G = s(y);
      }
    }
    function te(X) {
      if (j = !1, W(X), !C)
        if (s(p) !== null)
          C = !0, ye || (ye = !0, ge());
        else {
          var G = s(y);
          G !== null && Fe(te, G.startTime - X);
        }
    }
    var ye = !1, ie = -1, P = 5, le = -1;
    function se() {
      return M ? !0 : !(n.unstable_now() - le < P);
    }
    function Me() {
      if (M = !1, ye) {
        var X = n.unstable_now();
        le = X;
        var G = !0;
        try {
          e: {
            C = !1, j && (j = !1, Q(ie), ie = -1), q = !0;
            var V = w;
            try {
              t: {
                for (W(X), T = s(p); T !== null && !(T.expirationTime > X && se()); ) {
                  var fe = T.callback;
                  if (typeof fe == "function") {
                    T.callback = null, w = T.priorityLevel;
                    var Ae = fe(
                      T.expirationTime <= X
                    );
                    if (X = n.unstable_now(), typeof Ae == "function") {
                      T.callback = Ae, W(X), G = !0;
                      break t;
                    }
                    T === s(p) && c(p), W(X);
                  } else c(p);
                  T = s(p);
                }
                if (T !== null) G = !0;
                else {
                  var Ce = s(y);
                  Ce !== null && Fe(
                    te,
                    Ce.startTime - X
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
    if (typeof $ == "function")
      ge = function() {
        $(Me);
      };
    else if (typeof MessageChannel < "u") {
      var qe = new MessageChannel(), Qe = qe.port2;
      qe.port1.onmessage = Me, ge = function() {
        Qe.postMessage(null);
      };
    } else
      ge = function() {
        Y(Me, 0);
      };
    function Fe(X, G) {
      ie = Y(function() {
        X(n.unstable_now());
      }, G);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, n.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < X ? Math.floor(1e3 / X) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_next = function(X) {
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
        return X();
      } finally {
        w = V;
      }
    }, n.unstable_requestPaint = function() {
      M = !0;
    }, n.unstable_runWithPriority = function(X, G) {
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
      var V = w;
      w = X;
      try {
        return G();
      } finally {
        w = V;
      }
    }, n.unstable_scheduleCallback = function(X, G, V) {
      var fe = n.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? fe + V : fe) : V = fe, X) {
        case 1:
          var Ae = -1;
          break;
        case 2:
          Ae = 250;
          break;
        case 5:
          Ae = 1073741823;
          break;
        case 4:
          Ae = 1e4;
          break;
        default:
          Ae = 5e3;
      }
      return Ae = V + Ae, X = {
        id: b++,
        callback: G,
        priorityLevel: X,
        startTime: V,
        expirationTime: Ae,
        sortIndex: -1
      }, V > fe ? (X.sortIndex = V, r(y, X), s(p) === null && X === s(y) && (j ? (Q(ie), ie = -1) : j = !0, Fe(te, V - fe))) : (X.sortIndex = Ae, r(p, X), C || q || (C = !0, ye || (ye = !0, ge()))), X;
    }, n.unstable_shouldYield = se, n.unstable_wrapCallback = function(X) {
      var G = w;
      return function() {
        var V = w;
        w = G;
        try {
          return X.apply(this, arguments);
        } finally {
          w = V;
        }
      };
    };
  })(Kc)), Kc;
}
var jh;
function ov() {
  return jh || (jh = 1, Vc.exports = cv()), Vc.exports;
}
var Lh;
function fv() {
  if (Lh) return pi;
  Lh = 1;
  var n = {};
  var r = ov(), s = ro(), c = sv();
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
  var w = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), j = /* @__PURE__ */ Symbol.for("react.portal"), M = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), ye = /* @__PURE__ */ Symbol.for("react.suspense"), ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ge = Symbol.iterator;
  function qe(e) {
    return e === null || typeof e != "object" ? null : (e = ge && e[ge] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Qe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Qe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case M:
        return "Fragment";
      case Q:
        return "Profiler";
      case Y:
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
        case $:
          return (e._context.displayName || "Context") + ".Consumer";
        case te:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
        case le:
          t = e._payload, e = e._init;
          try {
            return Fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ae = [], Ce = -1;
  function S(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ce || (e.current = Ae[Ce], Ae[Ce] = null, Ce--);
  }
  function k(e, t) {
    Ce++, Ae[Ce] = e.current, e.current = t;
  }
  var Z = S(null), ae = S(null), K = S(null), ce = S(null);
  function He(e, t) {
    switch (k(K, t), k(ae, e), k(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? k0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = k0(t), e = Q0(t, e);
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
  function ta(e) {
    e.memoizedState !== null && k(ce, e);
    var t = Z.current, l = Q0(t, e.type);
    t !== l && (k(ae, e), k(Z, l));
  }
  function _a(e) {
    ae.current === e && (H(Z), H(ae)), ce.current === e && (H(ce), fi._currentValue = fe);
  }
  var Rn, Ee;
  function ft(e) {
    if (Rn === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        Rn = t && t[1] || "", Ee = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Rn + e + Ee;
  }
  var lt = !1;
  function Nl(e, t) {
    if (!e || lt) return "";
    lt = !0;
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
                } catch (U) {
                  var O = U;
                }
                Reflect.construct(e, [], B);
              } else {
                try {
                  B.call();
                } catch (U) {
                  O = U;
                }
                e.call(B.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                O = U;
              }
              (B = e()) && typeof B.catch == "function" && B.catch(function() {
              });
            }
          } catch (U) {
            if (U && O && typeof U.stack == "string")
              return [U.stack, O.stack];
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
`), N = m.split(`
`);
        for (i = a = 0; a < E.length && !E[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < N.length && !N[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === E.length || i === N.length)
          for (a = E.length - 1, i = N.length - 1; 1 <= a && 0 <= i && E[a] !== N[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (E[a] !== N[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || E[a] !== N[i]) {
                  var z = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      lt = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? ft(l) : "";
  }
  function la(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ft(e.type);
      case 16:
        return ft("Lazy");
      case 13:
        return e.child !== t && t !== null ? ft("Suspense Fallback") : ft("Suspense");
      case 19:
        return ft("SuspenseList");
      case 0:
      case 15:
        return Nl(e.type, !1);
      case 11:
        return Nl(e.type.render, !1);
      case 1:
        return Nl(e.type, !0);
      case 31:
        return ft("Activity");
      default:
        return "";
    }
  }
  function ji(e) {
    try {
      var t = "", l = null;
      do
        t += la(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Sr = Object.prototype.hasOwnProperty, Rr = r.unstable_scheduleCallback, Tr = r.unstable_cancelCallback, i1 = r.unstable_shouldYield, u1 = r.unstable_requestPaint, At = r.unstable_now, r1 = r.unstable_getCurrentPriorityLevel, Ro = r.unstable_ImmediatePriority, To = r.unstable_UserBlockingPriority, Li = r.unstable_NormalPriority, s1 = r.unstable_LowPriority, Ao = r.unstable_IdlePriority, c1 = r.log, o1 = r.unstable_setDisableYieldValue, Tn = null, xt = null;
  function Ol(e) {
    if (typeof c1 == "function" && o1(e), xt && typeof xt.setStrictMode == "function")
      try {
        xt.setStrictMode(Tn, e);
      } catch {
      }
  }
  var Ct = Math.clz32 ? Math.clz32 : h1, f1 = Math.log, d1 = Math.LN2;
  function h1(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (f1(e) / d1 | 0) | 0;
  }
  var Hi = 256, Bi = 262144, qi = 4194304;
  function aa(e) {
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
  function Gi(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? i = aa(a) : (f &= m, f !== 0 ? i = aa(f) : l || (l = m & ~e, l !== 0 && (i = aa(l))))) : (m = a & ~u, m !== 0 ? i = aa(m) : f !== 0 ? i = aa(f) : l || (l = a & ~e, l !== 0 && (i = aa(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : i;
  }
  function An(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function m1(e, t) {
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
  function xo() {
    var e = qi;
    return qi <<= 1, (qi & 62914560) === 0 && (qi = 4194304), e;
  }
  function Ar(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function xn(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function y1(e, t, l, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, E = e.expirationTimes, N = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var z = 31 - Ct(l), B = 1 << z;
      m[z] = 0, E[z] = -1;
      var O = N[z];
      if (O !== null)
        for (N[z] = null, z = 0; z < O.length; z++) {
          var U = O[z];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && Co(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Co(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Ct(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function _o(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - Ct(l), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), l &= ~i;
    }
  }
  function No(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : xr(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function xr(e) {
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
  function Cr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Oo() {
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : yh(e.type));
  }
  function wo(e, t) {
    var l = V.p;
    try {
      return V.p = e, t();
    } finally {
      V.p = l;
    }
  }
  var wl = Math.random().toString(36).slice(2), ut = "__reactFiber$" + wl, yt = "__reactProps$" + wl, Na = "__reactContainer$" + wl, _r = "__reactEvents$" + wl, g1 = "__reactListeners$" + wl, p1 = "__reactHandles$" + wl, Do = "__reactResources$" + wl, Cn = "__reactMarker$" + wl;
  function Nr(e) {
    delete e[ut], delete e[yt], delete e[_r], delete e[g1], delete e[p1];
  }
  function Oa(e) {
    var t = e[ut];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Na] || l[ut]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = P0(e); e !== null; ) {
            if (l = e[ut]) return l;
            e = P0(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function wa(e) {
    if (e = e[ut] || e[Na]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function _n(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Da(e) {
    var t = e[Do];
    return t || (t = e[Do] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function at(e) {
    e[Cn] = !0;
  }
  var Mo = /* @__PURE__ */ new Set(), Uo = {};
  function na(e, t) {
    Ma(e, t), Ma(e + "Capture", t);
  }
  function Ma(e, t) {
    for (Uo[e] = t, e = 0; e < t.length; e++)
      Mo.add(t[e]);
  }
  var v1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), zo = {}, jo = {};
  function E1(e) {
    return Sr.call(jo, e) ? !0 : Sr.call(zo, e) ? !1 : v1.test(e) ? jo[e] = !0 : (zo[e] = !0, !1);
  }
  function Yi(e, t, l) {
    if (E1(t))
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
  function Xi(e, t, l) {
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
  function ul(e, t, l, a) {
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
  function zt(e) {
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
  function Lo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function b1(e, t, l) {
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
  function Or(e) {
    if (!e._valueTracker) {
      var t = Lo(e) ? "checked" : "value";
      e._valueTracker = b1(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ho(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Lo(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Vi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var S1 = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      S1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function wr(e, t, l, a, i, u, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + zt(t)) : e.value !== "" + zt(t) && (e.value = "" + zt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Dr(e, f, zt(t)) : l != null ? Dr(e, f, zt(l)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + zt(m) : e.removeAttribute("name");
  }
  function Bo(e, t, l, a, i, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Or(e);
        return;
      }
      l = l != null ? "" + zt(l) : "", t = t != null ? "" + zt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = m ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Or(e);
  }
  function Dr(e, t, l) {
    t === "number" && Vi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function Ua(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < l.length; i++)
        t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + zt(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qo(e, t, l) {
    if (t != null && (t = "" + zt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + zt(l) : "";
  }
  function Go(e, t, l, a) {
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
    l = zt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Or(e);
  }
  function za(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var R1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Yo(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || R1.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Xo(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && l[i] !== a && Yo(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Yo(e, u, t[u]);
  }
  function Mr(e) {
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
  var T1 = /* @__PURE__ */ new Map([
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
  ]), A1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ki(e) {
    return A1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function rl() {
  }
  var Ur = null;
  function zr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ja = null, La = null;
  function Vo(e) {
    var t = wa(e);
    if (t && (e = t.stateNode)) {
      var l = e[yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (wr(
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
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var i = a[yt] || null;
                if (!i) throw Error(o(90));
                wr(
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
              a = l[t], a.form === e.form && Ho(a);
          }
          break e;
        case "textarea":
          qo(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && Ua(e, !!l.multiple, t, !1);
      }
    }
  }
  var jr = !1;
  function Ko(e, t, l) {
    if (jr) return e(t, l);
    jr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (jr = !1, (ja !== null || La !== null) && (Du(), ja && (t = ja, e = La, La = ja = null, Vo(t), e)))
        for (t = 0; t < e.length; t++) Vo(e[t]);
    }
  }
  function Nn(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[yt] || null;
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
  var sl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Lr = !1;
  if (sl)
    try {
      var On = {};
      Object.defineProperty(On, "passive", {
        get: function() {
          Lr = !0;
        }
      }), window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
    } catch {
      Lr = !1;
    }
  var Dl = null, Hr = null, ki = null;
  function ko() {
    if (ki) return ki;
    var e, t = Hr, l = t.length, a, i = "value" in Dl ? Dl.value : Dl.textContent, u = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === i[u - a]; a++) ;
    return ki = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Qi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Zi() {
    return !0;
  }
  function Qo() {
    return !1;
  }
  function gt(e) {
    function t(l, a, i, u, f) {
      this._reactName = l, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Zi : Qo, this.isPropagationStopped = Qo, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Zi);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Zi);
      },
      persist: function() {
      },
      isPersistent: Zi
    }), t;
  }
  var ia = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ji = gt(ia), wn = w({}, ia, { view: 0, detail: 0 }), x1 = gt(wn), Br, qr, Dn, $i = w({}, wn, {
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
    getModifierState: Yr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (Br = e.screenX - Dn.screenX, qr = e.screenY - Dn.screenY) : qr = Br = 0, Dn = e), Br);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : qr;
    }
  }), Zo = gt($i), C1 = w({}, $i, { dataTransfer: 0 }), _1 = gt(C1), N1 = w({}, wn, { relatedTarget: 0 }), Gr = gt(N1), O1 = w({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), w1 = gt(O1), D1 = w({}, ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), M1 = gt(D1), U1 = w({}, ia, { data: 0 }), Jo = gt(U1), z1 = {
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
  }, j1 = {
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
  }, L1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function H1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = L1[e]) ? !!t[e] : !1;
  }
  function Yr() {
    return H1;
  }
  var B1 = w({}, wn, {
    key: function(e) {
      if (e.key) {
        var t = z1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Qi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? j1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Yr,
    charCode: function(e) {
      return e.type === "keypress" ? Qi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Qi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), q1 = gt(B1), G1 = w({}, $i, {
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
  }), $o = gt(G1), Y1 = w({}, wn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Yr
  }), X1 = gt(Y1), V1 = w({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), K1 = gt(V1), k1 = w({}, $i, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Q1 = gt(k1), Z1 = w({}, ia, {
    newState: 0,
    oldState: 0
  }), J1 = gt(Z1), $1 = [9, 13, 27, 32], Xr = sl && "CompositionEvent" in window, Mn = null;
  sl && "documentMode" in document && (Mn = document.documentMode);
  var F1 = sl && "TextEvent" in window && !Mn, Fo = sl && (!Xr || Mn && 8 < Mn && 11 >= Mn), Wo = " ", Io = !1;
  function Po(e, t) {
    switch (e) {
      case "keyup":
        return $1.indexOf(t.keyCode) !== -1;
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
  function ef(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ha = !1;
  function W1(e, t) {
    switch (e) {
      case "compositionend":
        return ef(t);
      case "keypress":
        return t.which !== 32 ? null : (Io = !0, Wo);
      case "textInput":
        return e = t.data, e === Wo && Io ? null : e;
      default:
        return null;
    }
  }
  function I1(e, t) {
    if (Ha)
      return e === "compositionend" || !Xr && Po(e, t) ? (e = ko(), ki = Hr = Dl = null, Ha = !1, e) : null;
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
        return Fo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var P1 = {
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
  function tf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!P1[e.type] : t === "textarea";
  }
  function lf(e, t, l, a) {
    ja ? La ? La.push(a) : La = [a] : ja = a, t = Bu(t, "onChange"), 0 < t.length && (l = new Ji(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Un = null, zn = null;
  function ey(e) {
    q0(e, 0);
  }
  function Fi(e) {
    var t = _n(e);
    if (Ho(t)) return e;
  }
  function af(e, t) {
    if (e === "change") return t;
  }
  var nf = !1;
  if (sl) {
    var Vr;
    if (sl) {
      var Kr = "oninput" in document;
      if (!Kr) {
        var uf = document.createElement("div");
        uf.setAttribute("oninput", "return;"), Kr = typeof uf.oninput == "function";
      }
      Vr = Kr;
    } else Vr = !1;
    nf = Vr && (!document.documentMode || 9 < document.documentMode);
  }
  function rf() {
    Un && (Un.detachEvent("onpropertychange", sf), zn = Un = null);
  }
  function sf(e) {
    if (e.propertyName === "value" && Fi(zn)) {
      var t = [];
      lf(
        t,
        zn,
        e,
        zr(e)
      ), Ko(ey, t);
    }
  }
  function ty(e, t, l) {
    e === "focusin" ? (rf(), Un = t, zn = l, Un.attachEvent("onpropertychange", sf)) : e === "focusout" && rf();
  }
  function ly(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Fi(zn);
  }
  function ay(e, t) {
    if (e === "click") return Fi(t);
  }
  function ny(e, t) {
    if (e === "input" || e === "change")
      return Fi(t);
  }
  function iy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var _t = typeof Object.is == "function" ? Object.is : iy;
  function jn(e, t) {
    if (_t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var i = l[a];
      if (!Sr.call(t, i) || !_t(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function cf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function of(e, t) {
    var l = cf(e);
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
      l = cf(l);
    }
  }
  function ff(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ff(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function df(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Vi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Vi(e.document);
    }
    return t;
  }
  function kr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var uy = sl && "documentMode" in document && 11 >= document.documentMode, Ba = null, Qr = null, Ln = null, Zr = !1;
  function hf(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Zr || Ba == null || Ba !== Vi(a) || (a = Ba, "selectionStart" in a && kr(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ln && jn(Ln, a) || (Ln = a, a = Bu(Qr, "onSelect"), 0 < a.length && (t = new Ji(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Ba)));
  }
  function ua(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var qa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, Jr = {}, mf = {};
  sl && (mf = document.createElement("div").style, "AnimationEvent" in window || (delete qa.animationend.animation, delete qa.animationiteration.animation, delete qa.animationstart.animation), "TransitionEvent" in window || delete qa.transitionend.transition);
  function ra(e) {
    if (Jr[e]) return Jr[e];
    if (!qa[e]) return e;
    var t = qa[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in mf)
        return Jr[e] = t[l];
    return e;
  }
  var yf = ra("animationend"), gf = ra("animationiteration"), pf = ra("animationstart"), ry = ra("transitionrun"), sy = ra("transitionstart"), cy = ra("transitioncancel"), vf = ra("transitionend"), Ef = /* @__PURE__ */ new Map(), $r = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  $r.push("scrollEnd");
  function Zt(e, t) {
    Ef.set(e, t), na(t, [e]);
  }
  var Wi = typeof reportError == "function" ? reportError : function(e) {
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
  }, Lt = [], Ga = 0, Fr = 0;
  function Ii() {
    for (var e = Ga, t = Fr = Ga = 0; t < e; ) {
      var l = Lt[t];
      Lt[t++] = null;
      var a = Lt[t];
      Lt[t++] = null;
      var i = Lt[t];
      Lt[t++] = null;
      var u = Lt[t];
      if (Lt[t++] = null, a !== null && i !== null) {
        var f = a.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
      }
      u !== 0 && bf(l, i, u);
    }
  }
  function Pi(e, t, l, a) {
    Lt[Ga++] = e, Lt[Ga++] = t, Lt[Ga++] = l, Lt[Ga++] = a, Fr |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Wr(e, t, l, a) {
    return Pi(e, t, l, a), eu(e);
  }
  function sa(e, t) {
    return Pi(e, null, null, t), eu(e);
  }
  function bf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - Ct(l), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function eu(e) {
    if (50 < ni)
      throw ni = 0, uc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ya = {};
  function oy(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nt(e, t, l, a) {
    return new oy(e, t, l, a);
  }
  function Ir(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function cl(e, t) {
    var l = e.alternate;
    return l === null ? (l = Nt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Sf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function tu(e, t, l, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") Ir(e) && (f = 1);
    else if (typeof e == "string")
      f = yg(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case se:
          return e = Nt(31, l, t, i), e.elementType = se, e.lanes = u, e;
        case M:
          return ca(l.children, i, u, t);
        case Y:
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
              case $:
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
  function ca(e, t, l, a) {
    return e = Nt(7, e, a, t), e.lanes = l, e;
  }
  function Pr(e, t, l) {
    return e = Nt(6, e, null, t), e.lanes = l, e;
  }
  function Rf(e) {
    var t = Nt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function es(e, t, l) {
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
  var Tf = /* @__PURE__ */ new WeakMap();
  function Ht(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Tf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: ji(t)
      }, Tf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ji(t)
    };
  }
  var Xa = [], Va = 0, lu = null, Hn = 0, Bt = [], qt = 0, Ml = null, tl = 1, ll = "";
  function ol(e, t) {
    Xa[Va++] = Hn, Xa[Va++] = lu, lu = e, Hn = t;
  }
  function Af(e, t, l) {
    Bt[qt++] = tl, Bt[qt++] = ll, Bt[qt++] = Ml, Ml = e;
    var a = tl;
    e = ll;
    var i = 32 - Ct(a) - 1;
    a &= ~(1 << i), l += 1;
    var u = 32 - Ct(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, tl = 1 << 32 - Ct(t) + i | l << i | a, ll = u + e;
    } else
      tl = 1 << u | l << i | a, ll = e;
  }
  function ts(e) {
    e.return !== null && (ol(e, 1), Af(e, 1, 0));
  }
  function ls(e) {
    for (; e === lu; )
      lu = Xa[--Va], Xa[Va] = null, Hn = Xa[--Va], Xa[Va] = null;
    for (; e === Ml; )
      Ml = Bt[--qt], Bt[qt] = null, ll = Bt[--qt], Bt[qt] = null, tl = Bt[--qt], Bt[qt] = null;
  }
  function xf(e, t) {
    Bt[qt++] = tl, Bt[qt++] = ll, Bt[qt++] = Ml, tl = t.id, ll = t.overflow, Ml = e;
  }
  var rt = null, je = null, be = !1, Ul = null, Gt = !1, as = Error(o(519));
  function zl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Bn(Ht(t, e)), as;
  }
  function Cf(e) {
    var t = e.stateNode, l = e.type, a = e.memoizedProps;
    switch (t[ut] = e, t[yt] = a, l) {
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
        for (l = 0; l < ui.length; l++)
          he(ui[l], t);
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
        he("invalid", t), Bo(
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
        he("invalid", t), Go(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || V0(t.textContent, l) ? (a.popover != null && (he("beforetoggle", t), he("toggle", t)), a.onScroll != null && he("scroll", t), a.onScrollEnd != null && he("scrollend", t), a.onClick != null && (t.onclick = rl), t = !0) : t = !1, t || zl(e, !0);
  }
  function _f(e) {
    for (rt = e.return; rt; )
      switch (rt.tag) {
        case 5:
        case 31:
        case 13:
          Gt = !1;
          return;
        case 27:
        case 3:
          Gt = !0;
          return;
        default:
          rt = rt.return;
      }
  }
  function Ka(e) {
    if (e !== rt) return !1;
    if (!be) return _f(e), be = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Sc(e.type, e.memoizedProps)), l = !l), l && je && zl(e), _f(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      je = I0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      je = I0(e);
    } else
      t === 27 ? (t = je, Jl(e.type) ? (e = Cc, Cc = null, je = e) : je = t) : je = rt ? Xt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function oa() {
    je = rt = null, be = !1;
  }
  function ns() {
    var e = Ul;
    return e !== null && (bt === null ? bt = e : bt.push.apply(
      bt,
      e
    ), Ul = null), e;
  }
  function Bn(e) {
    Ul === null ? Ul = [e] : Ul.push(e);
  }
  var is = S(null), fa = null, fl = null;
  function jl(e, t, l) {
    k(is, t._currentValue), t._currentValue = l;
  }
  function dl(e) {
    e._currentValue = is.current, H(is);
  }
  function us(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function rs(e, t, l, a) {
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
              u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), us(
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
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), us(f, l, e), f = null;
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
  function ka(e, t, l, a) {
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
          _t(i.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (i === ce.current) {
        if (f = i.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(fi) : e = [fi]);
      }
      i = i.return;
    }
    e !== null && rs(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function au(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!_t(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function da(e) {
    fa = e, fl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function st(e) {
    return Nf(fa, e);
  }
  function nu(e, t) {
    return fa === null && da(e), Nf(e, t);
  }
  function Nf(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, fl === null) {
      if (e === null) throw Error(o(308));
      fl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else fl = fl.next = t;
    return l;
  }
  var fy = typeof AbortController < "u" ? AbortController : function() {
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
  }, dy = r.unstable_scheduleCallback, hy = r.unstable_NormalPriority, We = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ss() {
    return {
      controller: new fy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qn(e) {
    e.refCount--, e.refCount === 0 && dy(hy, function() {
      e.controller.abort();
    });
  }
  var Gn = null, cs = 0, Qa = 0, Za = null;
  function my(e, t) {
    if (Gn === null) {
      var l = Gn = [];
      cs = 0, Qa = dc(), Za = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return cs++, t.then(Of, Of), t;
  }
  function Of() {
    if (--cs === 0 && Gn !== null) {
      Za !== null && (Za.status = "fulfilled");
      var e = Gn;
      Gn = null, Qa = 0, Za = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function yy(e, t) {
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
  var wf = G.S;
  G.S = function(e, t) {
    h0 = At(), typeof t == "object" && t !== null && typeof t.then == "function" && my(e, t), wf !== null && wf(e, t);
  };
  var ha = S(null);
  function os() {
    var e = ha.current;
    return e !== null ? e : Ue.pooledCache;
  }
  function iu(e, t) {
    t === null ? k(ha, ha.current) : k(ha, t.pool);
  }
  function Df() {
    var e = os();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var Ja = Error(o(460)), fs = Error(o(474)), uu = Error(o(542)), ru = { then: function() {
  } };
  function Mf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Uf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(rl, rl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, jf(e), e;
      default:
        if (typeof t.status == "string") t.then(rl, rl);
        else {
          if (e = Ue, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, jf(e), e;
        }
        throw ya = t, Ja;
    }
  }
  function ma(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ya = l, Ja) : l;
    }
  }
  var ya = null;
  function zf() {
    if (ya === null) throw Error(o(459));
    var e = ya;
    return ya = null, e;
  }
  function jf(e) {
    if (e === Ja || e === uu)
      throw Error(o(483));
  }
  var $a = null, Yn = 0;
  function su(e) {
    var t = Yn;
    return Yn += 1, $a === null && ($a = []), Uf($a, e, t);
  }
  function Xn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function cu(e, t) {
    throw t.$$typeof === q ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Lf(e) {
    function t(x, R) {
      if (e) {
        var _ = x.deletions;
        _ === null ? (x.deletions = [R], x.flags |= 16) : _.push(R);
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
      return x = cl(x, R), x.index = 0, x.sibling = null, x;
    }
    function u(x, R, _) {
      return x.index = _, e ? (_ = x.alternate, _ !== null ? (_ = _.index, _ < R ? (x.flags |= 67108866, R) : _) : (x.flags |= 67108866, R)) : (x.flags |= 1048576, R);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function m(x, R, _, L) {
      return R === null || R.tag !== 6 ? (R = Pr(_, x.mode, L), R.return = x, R) : (R = i(R, _), R.return = x, R);
    }
    function E(x, R, _, L) {
      var I = _.type;
      return I === M ? z(
        x,
        R,
        _.props.children,
        L,
        _.key
      ) : R !== null && (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === le && ma(I) === R.type) ? (R = i(R, _.props), Xn(R, _), R.return = x, R) : (R = tu(
        _.type,
        _.key,
        _.props,
        null,
        x.mode,
        L
      ), Xn(R, _), R.return = x, R);
    }
    function N(x, R, _, L) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== _.containerInfo || R.stateNode.implementation !== _.implementation ? (R = es(_, x.mode, L), R.return = x, R) : (R = i(R, _.children || []), R.return = x, R);
    }
    function z(x, R, _, L, I) {
      return R === null || R.tag !== 7 ? (R = ca(
        _,
        x.mode,
        L,
        I
      ), R.return = x, R) : (R = i(R, _), R.return = x, R);
    }
    function B(x, R, _) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = Pr(
          "" + R,
          x.mode,
          _
        ), R.return = x, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case C:
            return _ = tu(
              R.type,
              R.key,
              R.props,
              null,
              x.mode,
              _
            ), Xn(_, R), _.return = x, _;
          case j:
            return R = es(
              R,
              x.mode,
              _
            ), R.return = x, R;
          case le:
            return R = ma(R), B(x, R, _);
        }
        if (X(R) || qe(R))
          return R = ca(
            R,
            x.mode,
            _,
            null
          ), R.return = x, R;
        if (typeof R.then == "function")
          return B(x, su(R), _);
        if (R.$$typeof === W)
          return B(
            x,
            nu(x, R),
            _
          );
        cu(x, R);
      }
      return null;
    }
    function O(x, R, _, L) {
      var I = R !== null ? R.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return I !== null ? null : m(x, R, "" + _, L);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case C:
            return _.key === I ? E(x, R, _, L) : null;
          case j:
            return _.key === I ? N(x, R, _, L) : null;
          case le:
            return _ = ma(_), O(x, R, _, L);
        }
        if (X(_) || qe(_))
          return I !== null ? null : z(x, R, _, L, null);
        if (typeof _.then == "function")
          return O(
            x,
            R,
            su(_),
            L
          );
        if (_.$$typeof === W)
          return O(
            x,
            R,
            nu(x, _),
            L
          );
        cu(x, _);
      }
      return null;
    }
    function U(x, R, _, L, I) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return x = x.get(_) || null, m(R, x, "" + L, I);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case C:
            return x = x.get(
              L.key === null ? _ : L.key
            ) || null, E(R, x, L, I);
          case j:
            return x = x.get(
              L.key === null ? _ : L.key
            ) || null, N(R, x, L, I);
          case le:
            return L = ma(L), U(
              x,
              R,
              _,
              L,
              I
            );
        }
        if (X(L) || qe(L))
          return x = x.get(_) || null, z(R, x, L, I, null);
        if (typeof L.then == "function")
          return U(
            x,
            R,
            _,
            su(L),
            I
          );
        if (L.$$typeof === W)
          return U(
            x,
            R,
            _,
            nu(R, L),
            I
          );
        cu(R, L);
      }
      return null;
    }
    function J(x, R, _, L) {
      for (var I = null, Re = null, F = R, oe = R = 0, ve = null; F !== null && oe < _.length; oe++) {
        F.index > oe ? (ve = F, F = null) : ve = F.sibling;
        var Te = O(
          x,
          F,
          _[oe],
          L
        );
        if (Te === null) {
          F === null && (F = ve);
          break;
        }
        e && F && Te.alternate === null && t(x, F), R = u(Te, R, oe), Re === null ? I = Te : Re.sibling = Te, Re = Te, F = ve;
      }
      if (oe === _.length)
        return l(x, F), be && ol(x, oe), I;
      if (F === null) {
        for (; oe < _.length; oe++)
          F = B(x, _[oe], L), F !== null && (R = u(
            F,
            R,
            oe
          ), Re === null ? I = F : Re.sibling = F, Re = F);
        return be && ol(x, oe), I;
      }
      for (F = a(F); oe < _.length; oe++)
        ve = U(
          F,
          x,
          oe,
          _[oe],
          L
        ), ve !== null && (e && ve.alternate !== null && F.delete(
          ve.key === null ? oe : ve.key
        ), R = u(
          ve,
          R,
          oe
        ), Re === null ? I = ve : Re.sibling = ve, Re = ve);
      return e && F.forEach(function(Pl) {
        return t(x, Pl);
      }), be && ol(x, oe), I;
    }
    function ee(x, R, _, L) {
      if (_ == null) throw Error(o(151));
      for (var I = null, Re = null, F = R, oe = R = 0, ve = null, Te = _.next(); F !== null && !Te.done; oe++, Te = _.next()) {
        F.index > oe ? (ve = F, F = null) : ve = F.sibling;
        var Pl = O(x, F, Te.value, L);
        if (Pl === null) {
          F === null && (F = ve);
          break;
        }
        e && F && Pl.alternate === null && t(x, F), R = u(Pl, R, oe), Re === null ? I = Pl : Re.sibling = Pl, Re = Pl, F = ve;
      }
      if (Te.done)
        return l(x, F), be && ol(x, oe), I;
      if (F === null) {
        for (; !Te.done; oe++, Te = _.next())
          Te = B(x, Te.value, L), Te !== null && (R = u(Te, R, oe), Re === null ? I = Te : Re.sibling = Te, Re = Te);
        return be && ol(x, oe), I;
      }
      for (F = a(F); !Te.done; oe++, Te = _.next())
        Te = U(F, x, oe, Te.value, L), Te !== null && (e && Te.alternate !== null && F.delete(Te.key === null ? oe : Te.key), R = u(Te, R, oe), Re === null ? I = Te : Re.sibling = Te, Re = Te);
      return e && F.forEach(function(Cg) {
        return t(x, Cg);
      }), be && ol(x, oe), I;
    }
    function De(x, R, _, L) {
      if (typeof _ == "object" && _ !== null && _.type === M && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case C:
            e: {
              for (var I = _.key; R !== null; ) {
                if (R.key === I) {
                  if (I = _.type, I === M) {
                    if (R.tag === 7) {
                      l(
                        x,
                        R.sibling
                      ), L = i(
                        R,
                        _.props.children
                      ), L.return = x, x = L;
                      break e;
                    }
                  } else if (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === le && ma(I) === R.type) {
                    l(
                      x,
                      R.sibling
                    ), L = i(R, _.props), Xn(L, _), L.return = x, x = L;
                    break e;
                  }
                  l(x, R);
                  break;
                } else t(x, R);
                R = R.sibling;
              }
              _.type === M ? (L = ca(
                _.props.children,
                x.mode,
                L,
                _.key
              ), L.return = x, x = L) : (L = tu(
                _.type,
                _.key,
                _.props,
                null,
                x.mode,
                L
              ), Xn(L, _), L.return = x, x = L);
            }
            return f(x);
          case j:
            e: {
              for (I = _.key; R !== null; ) {
                if (R.key === I)
                  if (R.tag === 4 && R.stateNode.containerInfo === _.containerInfo && R.stateNode.implementation === _.implementation) {
                    l(
                      x,
                      R.sibling
                    ), L = i(R, _.children || []), L.return = x, x = L;
                    break e;
                  } else {
                    l(x, R);
                    break;
                  }
                else t(x, R);
                R = R.sibling;
              }
              L = es(_, x.mode, L), L.return = x, x = L;
            }
            return f(x);
          case le:
            return _ = ma(_), De(
              x,
              R,
              _,
              L
            );
        }
        if (X(_))
          return J(
            x,
            R,
            _,
            L
          );
        if (qe(_)) {
          if (I = qe(_), typeof I != "function") throw Error(o(150));
          return _ = I.call(_), ee(
            x,
            R,
            _,
            L
          );
        }
        if (typeof _.then == "function")
          return De(
            x,
            R,
            su(_),
            L
          );
        if (_.$$typeof === W)
          return De(
            x,
            R,
            nu(x, _),
            L
          );
        cu(x, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, R !== null && R.tag === 6 ? (l(x, R.sibling), L = i(R, _), L.return = x, x = L) : (l(x, R), L = Pr(_, x.mode, L), L.return = x, x = L), f(x)) : l(x, R);
    }
    return function(x, R, _, L) {
      try {
        Yn = 0;
        var I = De(
          x,
          R,
          _,
          L
        );
        return $a = null, I;
      } catch (F) {
        if (F === Ja || F === uu) throw F;
        var Re = Nt(29, F, null, x.mode);
        return Re.lanes = L, Re.return = x, Re;
      }
    };
  }
  var ga = Lf(!0), Hf = Lf(!1), Ll = !1;
  function ds(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function hs(e, t) {
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
    if (a = a.shared, (xe & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = eu(e), bf(e, null, l), t;
    }
    return Pi(e, a, t, l), eu(e);
  }
  function Vn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, _o(e, l);
    }
  }
  function ms(e, t) {
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
  var ys = !1;
  function Kn() {
    if (ys) {
      var e = Za;
      if (e !== null) throw e;
    }
  }
  function kn(e, t, l, a) {
    ys = !1;
    var i = e.updateQueue;
    Ll = !1;
    var u = i.firstBaseUpdate, f = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var E = m, N = E.next;
      E.next = null, f === null ? u = N : f.next = N, f = E;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, m = z.lastBaseUpdate, m !== f && (m === null ? z.firstBaseUpdate = N : m.next = N, z.lastBaseUpdate = E));
    }
    if (u !== null) {
      var B = i.baseState;
      f = 0, z = N = E = null, m = u;
      do {
        var O = m.lane & -536870913, U = O !== m.lane;
        if (U ? (pe & O) === O : (a & O) === O) {
          O !== 0 && O === Qa && (ys = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ee = m;
            O = t;
            var De = l;
            switch (ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  B = J.call(De, B, O);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, O = typeof J == "function" ? J.call(De, B, O) : J, O == null) break e;
                B = w({}, B, O);
                break e;
              case 2:
                Ll = !0;
            }
          }
          O = m.callback, O !== null && (e.flags |= 64, U && (e.flags |= 8192), U = i.callbacks, U === null ? i.callbacks = [O] : U.push(O));
        } else
          U = {
            lane: O,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, z === null ? (N = z = U, E = B) : z = z.next = U, f |= O;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null)
            break;
          U = m, m = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      z === null && (E = B), i.baseState = E, i.firstBaseUpdate = N, i.lastBaseUpdate = z, u === null && (i.shared.lanes = 0), Vl |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Bf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function qf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Bf(l[e], t);
  }
  var Fa = S(null), ou = S(0);
  function Gf(e, t) {
    e = Sl, k(ou, e), k(Fa, t), Sl = e | t.baseLanes;
  }
  function gs() {
    k(ou, Sl), k(Fa, Fa.current);
  }
  function ps() {
    Sl = ou.current, H(Fa), H(ou);
  }
  var Ot = S(null), Yt = null;
  function ql(e) {
    var t = e.alternate;
    k(Ze, Ze.current & 1), k(Ot, e), Yt === null && (t === null || Fa.current !== null || t.memoizedState !== null) && (Yt = e);
  }
  function vs(e) {
    k(Ze, Ze.current), k(Ot, e), Yt === null && (Yt = e);
  }
  function Yf(e) {
    e.tag === 22 ? (k(Ze, Ze.current), k(Ot, e), Yt === null && (Yt = e)) : Gl();
  }
  function Gl() {
    k(Ze, Ze.current), k(Ot, Ot.current);
  }
  function wt(e) {
    H(Ot), Yt === e && (Yt = null), H(Ze);
  }
  var Ze = S(0);
  function fu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Ac(l) || xc(l)))
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
  var hl = 0, ue = null, Oe = null, Ie = null, du = !1, Wa = !1, pa = !1, hu = 0, Qn = 0, Ia = null, gy = 0;
  function Xe() {
    throw Error(o(321));
  }
  function Es(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!_t(e[l], t[l])) return !1;
    return !0;
  }
  function bs(e, t, l, a, i, u) {
    return hl = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e === null || e.memoizedState === null ? Ad : js, pa = !1, u = l(a, i), pa = !1, Wa && (u = Vf(
      t,
      l,
      a,
      i
    )), Xf(e), u;
  }
  function Xf(e) {
    G.H = $n;
    var t = Oe !== null && Oe.next !== null;
    if (hl = 0, Ie = Oe = ue = null, du = !1, Qn = 0, Ia = null, t) throw Error(o(300));
    e === null || Pe || (e = e.dependencies, e !== null && au(e) && (Pe = !0));
  }
  function Vf(e, t, l, a) {
    ue = e;
    var i = 0;
    do {
      if (Wa && (Ia = null), Qn = 0, Wa = !1, 25 <= i) throw Error(o(301));
      if (i += 1, Ie = Oe = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      G.H = xd, u = t(l, a);
    } while (Wa);
    return u;
  }
  function py() {
    var e = G.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Zn(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Ss() {
    var e = hu !== 0;
    return hu = 0, e;
  }
  function Rs(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Ts(e) {
    if (du) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      du = !1;
    }
    hl = 0, Ie = Oe = ue = null, Wa = !1, Qn = hu = 0, Ia = null;
  }
  function mt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ie === null ? ue.memoizedState = Ie = e : Ie = Ie.next = e, Ie;
  }
  function Je() {
    if (Oe === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ie === null ? ue.memoizedState : Ie.next;
    if (t !== null)
      Ie = t, Oe = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(o(467)) : Error(o(310));
      Oe = e, e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }, Ie === null ? ue.memoizedState = Ie = e : Ie = Ie.next = e;
    }
    return Ie;
  }
  function mu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zn(e) {
    var t = Qn;
    return Qn += 1, Ia === null && (Ia = []), e = Uf(Ia, e, t), t = ue, (Ie === null ? t.memoizedState : Ie.next) === null && (t = t.alternate, G.H = t === null || t.memoizedState === null ? Ad : js), e;
  }
  function yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Zn(e);
      if (e.$$typeof === W) return st(e);
    }
    throw Error(o(438, String(e)));
  }
  function As(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = mu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Me;
    return t.index++, l;
  }
  function ml(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function gu(e) {
    var t = Je();
    return xs(t, Oe, e);
  }
  function xs(e, t, l) {
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
      var m = f = null, E = null, N = t, z = !1;
      do {
        var B = N.lane & -536870913;
        if (B !== N.lane ? (pe & B) === B : (hl & B) === B) {
          var O = N.revertLane;
          if (O === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), B === Qa && (z = !0);
          else if ((hl & O) === O) {
            N = N.next, O === Qa && (z = !0);
            continue;
          } else
            B = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, E === null ? (m = E = B, f = u) : E = E.next = B, ue.lanes |= O, Vl |= O;
          B = N.action, pa && l(u, B), u = N.hasEagerState ? N.eagerState : l(u, B);
        } else
          O = {
            lane: B,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, E === null ? (m = E = O, f = u) : E = E.next = O, ue.lanes |= B, Vl |= B;
        N = N.next;
      } while (N !== null && N !== t);
      if (E === null ? f = u : E.next = m, !_t(u, e.memoizedState) && (Pe = !0, z && (l = Za, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = E, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Cs(e) {
    var t = Je(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, i = l.pending, u = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var f = i = i.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== i);
      _t(u, t.memoizedState) || (Pe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Kf(e, t, l) {
    var a = ue, i = Je(), u = be;
    if (u) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !_t(
      (Oe || i).memoizedState,
      l
    );
    if (f && (i.memoizedState = l, Pe = !0), i = i.queue, Os(Zf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || Ie !== null && Ie.memoizedState.tag & 1) {
      if (a.flags |= 2048, Pa(
        9,
        { destroy: void 0 },
        Qf.bind(
          null,
          a,
          i,
          l,
          t
        ),
        null
      ), Ue === null) throw Error(o(349));
      u || (hl & 127) !== 0 || kf(a, t, l);
    }
    return l;
  }
  function kf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = mu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Qf(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Jf(t) && $f(e);
  }
  function Zf(e, t, l) {
    return l(function() {
      Jf(t) && $f(e);
    });
  }
  function Jf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !_t(e, l);
    } catch {
      return !0;
    }
  }
  function $f(e) {
    var t = sa(e, 2);
    t !== null && St(t, e, 2);
  }
  function _s(e) {
    var t = mt();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), pa) {
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
      lastRenderedReducer: ml,
      lastRenderedState: e
    }, t;
  }
  function Ff(e, t, l, a) {
    return e.baseState = l, xs(
      e,
      Oe,
      typeof a == "function" ? a : ml
    );
  }
  function vy(e, t, l, a, i) {
    if (Eu(e)) throw Error(o(485));
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
      G.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Wf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Wf(e, t) {
    var l = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = G.T, f = {};
      G.T = f;
      try {
        var m = l(i, a), E = G.S;
        E !== null && E(f, m), If(e, t, m);
      } catch (N) {
        Ns(e, t, N);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), G.T = u;
      }
    } else
      try {
        u = l(i, a), If(e, t, u);
      } catch (N) {
        Ns(e, t, N);
      }
  }
  function If(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        Pf(e, t, a);
      },
      function(a) {
        return Ns(e, t, a);
      }
    ) : Pf(e, t, l);
  }
  function Pf(e, t, l) {
    t.status = "fulfilled", t.value = l, ed(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Wf(e, l)));
  }
  function Ns(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, ed(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function ed(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function td(e, t) {
    return t;
  }
  function ld(e, t) {
    if (be) {
      var l = Ue.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (be) {
            if (je) {
              t: {
                for (var i = je, u = Gt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = Xt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                je = Xt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            zl(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return l = mt(), l.memoizedState = l.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: td,
      lastRenderedState: t
    }, l.queue = a, l = Sd.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = _s(!1), u = zs.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = mt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, l = vy.bind(
      null,
      ue,
      i,
      u,
      l
    ), i.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function ad(e) {
    var t = Je();
    return nd(t, Oe, e);
  }
  function nd(e, t, l) {
    if (t = xs(
      e,
      t,
      td
    )[0], e = gu(ml)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Zn(t);
      } catch (f) {
        throw f === Ja ? uu : f;
      }
    else a = t;
    t = Je();
    var i = t.queue, u = i.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, Pa(
      9,
      { destroy: void 0 },
      Ey.bind(null, i, l),
      null
    )), [a, u, e];
  }
  function Ey(e, t) {
    e.action = t;
  }
  function id(e) {
    var t = Je(), l = Oe;
    if (l !== null)
      return nd(t, l, e);
    Je(), t = t.memoizedState, l = Je();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function Pa(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = mu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function ud() {
    return Je().memoizedState;
  }
  function pu(e, t, l, a) {
    var i = mt();
    ue.flags |= e, i.memoizedState = Pa(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function vu(e, t, l, a) {
    var i = Je();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Oe !== null && a !== null && Es(a, Oe.memoizedState.deps) ? i.memoizedState = Pa(t, u, l, a) : (ue.flags |= e, i.memoizedState = Pa(
      1 | t,
      u,
      l,
      a
    ));
  }
  function rd(e, t) {
    pu(8390656, 8, e, t);
  }
  function Os(e, t) {
    vu(2048, 8, e, t);
  }
  function by(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = mu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function sd(e) {
    var t = Je().memoizedState;
    return by({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function cd(e, t) {
    return vu(4, 2, e, t);
  }
  function od(e, t) {
    return vu(4, 4, e, t);
  }
  function fd(e, t) {
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
  function dd(e, t, l) {
    l = l != null ? l.concat([e]) : null, vu(4, 4, fd.bind(null, t, e), l);
  }
  function ws() {
  }
  function hd(e, t) {
    var l = Je();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Es(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function md(e, t) {
    var l = Je();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Es(t, a[1]))
      return a[0];
    if (a = e(), pa) {
      Ol(!0);
      try {
        e();
      } finally {
        Ol(!1);
      }
    }
    return l.memoizedState = [a, t], a;
  }
  function Ds(e, t, l) {
    return l === void 0 || (hl & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = y0(), ue.lanes |= e, Vl |= e, l);
  }
  function yd(e, t, l, a) {
    return _t(l, t) ? l : Fa.current !== null ? (e = Ds(e, l, a), _t(e, t) || (Pe = !0), e) : (hl & 42) === 0 || (hl & 1073741824) !== 0 && (pe & 261930) === 0 ? (Pe = !0, e.memoizedState = l) : (e = y0(), ue.lanes |= e, Vl |= e, t);
  }
  function gd(e, t, l, a, i) {
    var u = V.p;
    V.p = u !== 0 && 8 > u ? u : 8;
    var f = G.T, m = {};
    G.T = m, zs(e, !1, t, l);
    try {
      var E = i(), N = G.S;
      if (N !== null && N(m, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var z = yy(
          E,
          a
        );
        Jn(
          e,
          t,
          z,
          Ut(e)
        );
      } else
        Jn(
          e,
          t,
          a,
          Ut(e)
        );
    } catch (B) {
      Jn(
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
  function Sy() {
  }
  function Ms(e, t, l, a) {
    if (e.tag !== 5) throw Error(o(476));
    var i = pd(e).queue;
    gd(
      e,
      i,
      t,
      fe,
      l === null ? Sy : function() {
        return vd(e), l(a);
      }
    );
  }
  function pd(e) {
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
        lastRenderedReducer: ml,
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
        lastRenderedReducer: ml,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function vd(e) {
    var t = pd(e);
    t.next === null && (t = e.alternate.memoizedState), Jn(
      e,
      t.next.queue,
      {},
      Ut()
    );
  }
  function Us() {
    return st(fi);
  }
  function Ed() {
    return Je().memoizedState;
  }
  function bd() {
    return Je().memoizedState;
  }
  function Ry(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Ut();
          e = Hl(l);
          var a = Bl(t, e, l);
          a !== null && (St(a, t, l), Vn(a, t, l)), t = { cache: ss() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ty(e, t, l) {
    var a = Ut();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Eu(e) ? Rd(t, l) : (l = Wr(e, t, l, a), l !== null && (St(l, e, a), Td(l, t, a)));
  }
  function Sd(e, t, l) {
    var a = Ut();
    Jn(e, t, l, a);
  }
  function Jn(e, t, l, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Eu(e)) Rd(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, m = u(f, l);
          if (i.hasEagerState = !0, i.eagerState = m, _t(m, f))
            return Pi(e, t, i, 0), Ue === null && Ii(), !1;
        } catch {
        }
      if (l = Wr(e, t, i, a), l !== null)
        return St(l, e, a), Td(l, t, a), !0;
    }
    return !1;
  }
  function zs(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: dc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Eu(e)) {
      if (t) throw Error(o(479));
    } else
      t = Wr(
        e,
        l,
        a,
        2
      ), t !== null && St(t, e, 2);
  }
  function Eu(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function Rd(e, t) {
    Wa = du = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Td(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, _o(e, l);
    }
  }
  var $n = {
    readContext: st,
    use: yu,
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
  $n.useEffectEvent = Xe;
  var Ad = {
    readContext: st,
    use: yu,
    useCallback: function(e, t) {
      return mt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: st,
    useEffect: rd,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, pu(
        4194308,
        4,
        fd.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return pu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      pu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = mt();
      t = t === void 0 ? null : t;
      var a = e();
      if (pa) {
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
      var a = mt();
      if (l !== void 0) {
        var i = l(t);
        if (pa) {
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
      }, a.queue = e, e = e.dispatch = Ty.bind(
        null,
        ue,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = mt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = _s(e);
      var t = e.queue, l = Sd.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: ws,
    useDeferredValue: function(e, t) {
      var l = mt();
      return Ds(l, e, t);
    },
    useTransition: function() {
      var e = _s(!1);
      return e = gd.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), mt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var a = ue, i = mt();
      if (be) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Ue === null)
          throw Error(o(349));
        (pe & 127) !== 0 || kf(a, t, l);
      }
      i.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return i.queue = u, rd(Zf.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Pa(
        9,
        { destroy: void 0 },
        Qf.bind(
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
      var e = mt(), t = Ue.identifierPrefix;
      if (be) {
        var l = ll, a = tl;
        l = (a & ~(1 << 32 - Ct(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = hu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = gy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Us,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function(e) {
      var t = mt();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = l, t = zs.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: As,
    useCacheRefresh: function() {
      return mt().memoizedState = Ry.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = mt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((xe & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, js = {
    readContext: st,
    use: yu,
    useCallback: hd,
    useContext: st,
    useEffect: Os,
    useImperativeHandle: dd,
    useInsertionEffect: cd,
    useLayoutEffect: od,
    useMemo: md,
    useReducer: gu,
    useRef: ud,
    useState: function() {
      return gu(ml);
    },
    useDebugValue: ws,
    useDeferredValue: function(e, t) {
      var l = Je();
      return yd(
        l,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = gu(ml)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Zn(e),
        t
      ];
    },
    useSyncExternalStore: Kf,
    useId: Ed,
    useHostTransitionStatus: Us,
    useFormState: ad,
    useActionState: ad,
    useOptimistic: function(e, t) {
      var l = Je();
      return Ff(l, Oe, e, t);
    },
    useMemoCache: As,
    useCacheRefresh: bd
  };
  js.useEffectEvent = sd;
  var xd = {
    readContext: st,
    use: yu,
    useCallback: hd,
    useContext: st,
    useEffect: Os,
    useImperativeHandle: dd,
    useInsertionEffect: cd,
    useLayoutEffect: od,
    useMemo: md,
    useReducer: Cs,
    useRef: ud,
    useState: function() {
      return Cs(ml);
    },
    useDebugValue: ws,
    useDeferredValue: function(e, t) {
      var l = Je();
      return Oe === null ? Ds(l, e, t) : yd(
        l,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Cs(ml)[0], t = Je().memoizedState;
      return [
        typeof e == "boolean" ? e : Zn(e),
        t
      ];
    },
    useSyncExternalStore: Kf,
    useId: Ed,
    useHostTransitionStatus: Us,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e, t) {
      var l = Je();
      return Oe !== null ? Ff(l, Oe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: As,
    useCacheRefresh: bd
  };
  xd.useEffectEvent = sd;
  function Ls(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : w({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Hs = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = Ut(), i = Hl(a);
      i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (St(t, e, a), Vn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = Ut(), i = Hl(a);
      i.tag = 1, i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (St(t, e, a), Vn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Ut(), a = Hl(l);
      a.tag = 2, t != null && (a.callback = t), t = Bl(e, a, l), t !== null && (St(t, e, l), Vn(t, e, l));
    }
  };
  function Cd(e, t, l, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !jn(l, a) || !jn(i, u) : !0;
  }
  function _d(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Hs.enqueueReplaceState(t, t.state, null);
  }
  function va(e, t) {
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
  function Nd(e) {
    Wi(e);
  }
  function Od(e) {
    console.error(e);
  }
  function wd(e) {
    Wi(e);
  }
  function bu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Dd(e, t, l) {
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
  function Bs(e, t, l) {
    return l = Hl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      bu(e, t);
    }, l;
  }
  function Md(e) {
    return e = Hl(e), e.tag = 3, e;
  }
  function Ud(e, t, l, a) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Dd(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Dd(t, l, a), typeof i != "function" && (Kl === null ? Kl = /* @__PURE__ */ new Set([this]) : Kl.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function Ay(e, t, l, a, i) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && ka(
        t,
        l,
        i,
        !0
      ), l = Ot.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Yt === null ? Mu() : l.alternate === null && Ve === 0 && (Ve = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, a === ru ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), cc(e, a, i)), !1;
          case 22:
            return l.flags |= 65536, a === ru ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), cc(e, a, i)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return cc(e, a, i), Mu(), !1;
    }
    if (be)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== as && (e = Error(o(422), { cause: a }), Bn(Ht(e, l)))) : (a !== as && (t = Error(o(423), {
        cause: a
      }), Bn(
        Ht(t, l)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Ht(a, l), i = Bs(
        e.stateNode,
        a,
        i
      ), ms(e, i), Ve !== 4 && (Ve = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Ht(u, l), ai === null ? ai = [u] : ai.push(u), Ve !== 4 && (Ve = 2), t === null) return !0;
    a = Ht(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = i & -i, l.lanes |= e, e = Bs(l.stateNode, a, e), ms(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Kl === null || !Kl.has(u))))
            return l.flags |= 65536, i &= -i, l.lanes |= i, i = Md(i), Ud(
              i,
              e,
              l,
              a
            ), ms(l, i), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var qs = Error(o(461)), Pe = !1;
  function ct(e, t, l, a) {
    t.child = e === null ? Hf(t, null, l, a) : ga(
      t,
      e.child,
      l,
      a
    );
  }
  function zd(e, t, l, a, i) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a)
        m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return da(t), a = bs(
      e,
      t,
      l,
      f,
      u,
      i
    ), m = Ss(), e !== null && !Pe ? (Rs(e, t, i), yl(e, t, i)) : (be && m && ts(t), t.flags |= 1, ct(e, t, a, i), t.child);
  }
  function jd(e, t, l, a, i) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !Ir(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Ld(
        e,
        t,
        u,
        a,
        i
      )) : (e = tu(
        l.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Zs(e, i)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : jn, l(f, a) && e.ref === t.ref)
        return yl(e, t, i);
    }
    return t.flags |= 1, e = cl(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ld(e, t, l, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (jn(u, a) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = a = u, Zs(e, i))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, yl(e, t, i);
    }
    return Gs(
      e,
      t,
      l,
      a,
      i
    );
  }
  function Hd(e, t, l, a) {
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
        return Bd(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && iu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Gf(t, u) : gs(), Yf(t);
      else
        return a = t.lanes = 536870912, Bd(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (iu(t, u.cachePool), Gf(t, u), Gl(), t.memoizedState = null) : (e !== null && iu(t, null), gs(), Gl());
    return ct(e, t, i, l), t.child;
  }
  function Fn(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Bd(e, t, l, a, i) {
    var u = os();
    return u = u === null ? null : { parent: We._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && iu(t, null), gs(), Yf(t), e !== null && ka(e, t, a, !0), t.childLanes = i, null;
  }
  function Su(e, t) {
    return t = Tu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function qd(e, t, l) {
    return ga(t, e.child, null, l), e = Su(t, t.pendingProps), e.flags |= 2, wt(t), t.memoizedState = null, e;
  }
  function xy(e, t, l) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (a.mode === "hidden")
          return e = Su(t, a), t.lanes = 536870912, Fn(null, e);
        if (vs(t), (e = je) ? (e = W0(
          e,
          Gt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ml !== null ? { id: tl, overflow: ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Rf(e), l.return = t, t.child = l, rt = t, je = null)) : e = null, e === null) throw zl(t);
        return t.lanes = 536870912, null;
      }
      return Su(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (vs(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = qd(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Pe || ka(e, t, l, !1), i = (l & e.childLanes) !== 0, Pe || i) {
        if (a = Ue, a !== null && (f = No(a, l), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, sa(e, f), St(a, e, f), qs;
        Mu(), t = qd(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, je = Xt(f.nextSibling), rt = t, be = !0, Ul = null, Gt = !1, e !== null && xf(t, e), t = Su(t, a), t.flags |= 4096;
      return t;
    }
    return e = cl(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ru(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Gs(e, t, l, a, i) {
    return da(t), l = bs(
      e,
      t,
      l,
      a,
      void 0,
      i
    ), a = Ss(), e !== null && !Pe ? (Rs(e, t, i), yl(e, t, i)) : (be && a && ts(t), t.flags |= 1, ct(e, t, l, i), t.child);
  }
  function Gd(e, t, l, a, i, u) {
    return da(t), t.updateQueue = null, l = Vf(
      t,
      a,
      l,
      i
    ), Xf(e), a = Ss(), e !== null && !Pe ? (Rs(e, t, u), yl(e, t, u)) : (be && a && ts(t), t.flags |= 1, ct(e, t, l, u), t.child);
  }
  function Yd(e, t, l, a, i) {
    if (da(t), t.stateNode === null) {
      var u = Ya, f = l.contextType;
      typeof f == "object" && f !== null && (u = st(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Hs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, ds(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? st(f) : Ya, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Ls(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Hs.enqueueReplaceState(u, u.state, null), kn(t, a, u, i), Kn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var m = t.memoizedProps, E = va(l, m);
      u.props = E;
      var N = u.context, z = l.contextType;
      f = Ya, typeof z == "object" && z !== null && (f = st(z));
      var B = l.getDerivedStateFromProps;
      z = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || N !== f) && _d(
        t,
        u,
        a,
        f
      ), Ll = !1;
      var O = t.memoizedState;
      u.state = O, kn(t, a, u, i), Kn(), N = t.memoizedState, m || O !== N || Ll ? (typeof B == "function" && (Ls(
        t,
        l,
        B,
        a
      ), N = t.memoizedState), (E = Ll || Cd(
        t,
        l,
        E,
        a,
        O,
        N,
        f
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), u.props = a, u.state = N, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, hs(e, t), f = t.memoizedProps, z = va(l, f), u.props = z, B = t.pendingProps, O = u.context, N = l.contextType, E = Ya, typeof N == "object" && N !== null && (E = st(N)), m = l.getDerivedStateFromProps, (N = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && _d(
        t,
        u,
        a,
        E
      ), Ll = !1, O = t.memoizedState, u.state = O, kn(t, a, u, i), Kn();
      var U = t.memoizedState;
      f !== B || O !== U || Ll || e !== null && e.dependencies !== null && au(e.dependencies) ? (typeof m == "function" && (Ls(
        t,
        l,
        m,
        a
      ), U = t.memoizedState), (z = Ll || Cd(
        t,
        l,
        z,
        a,
        O,
        U,
        E
      ) || e !== null && e.dependencies !== null && au(e.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, U, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        U,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), u.props = a, u.state = U, u.context = E, a = z) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Ru(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ga(
      t,
      e.child,
      null,
      i
    ), t.child = ga(
      t,
      null,
      l,
      i
    )) : ct(e, t, l, i), t.memoizedState = u.state, e = t.child) : e = yl(
      e,
      t,
      i
    ), e;
  }
  function Xd(e, t, l, a) {
    return oa(), t.flags |= 256, ct(e, t, l, a), t.child;
  }
  var Ys = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Xs(e) {
    return { baseLanes: e, cachePool: Df() };
  }
  function Vs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Mt), e;
  }
  function Vd(e, t, l) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Ze.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (i ? ql(t) : Gl(), (e = je) ? (e = W0(
          e,
          Gt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ml !== null ? { id: tl, overflow: ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Rf(e), l.return = t, t.child = l, rt = t, je = null)) : e = null, e === null) throw zl(t);
        return xc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, i ? (Gl(), i = t.mode, m = Tu(
        { mode: "hidden", children: m },
        i
      ), a = ca(
        a,
        i,
        l,
        null
      ), m.return = t, a.return = t, m.sibling = a, t.child = m, a = t.child, a.memoizedState = Xs(l), a.childLanes = Vs(
        e,
        f,
        l
      ), t.memoizedState = Ys, Fn(null, a)) : (ql(t), Ks(t, m));
    }
    var E = e.memoizedState;
    if (E !== null && (m = E.dehydrated, m !== null)) {
      if (u)
        t.flags & 256 ? (ql(t), t.flags &= -257, t = ks(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Gl(), t.child = e.child, t.flags |= 128, t = null) : (Gl(), m = a.fallback, i = t.mode, a = Tu(
          { mode: "visible", children: a.children },
          i
        ), m = ca(
          m,
          i,
          l,
          null
        ), m.flags |= 2, a.return = t, m.return = t, a.sibling = m, t.child = a, ga(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Xs(l), a.childLanes = Vs(
          e,
          f,
          l
        ), t.memoizedState = Ys, t = Fn(null, a));
      else if (ql(t), xc(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var N = f.dgst;
        f = N, a = Error(o(419)), a.stack = "", a.digest = f, Bn({ value: a, source: null, stack: null }), t = ks(
          e,
          t,
          l
        );
      } else if (Pe || ka(e, t, l, !1), f = (l & e.childLanes) !== 0, Pe || f) {
        if (f = Ue, f !== null && (a = No(f, l), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, sa(e, a), St(f, e, a), qs;
        Ac(m) || Mu(), t = ks(
          e,
          t,
          l
        );
      } else
        Ac(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, je = Xt(
          m.nextSibling
        ), rt = t, be = !0, Ul = null, Gt = !1, e !== null && xf(t, e), t = Ks(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Gl(), m = a.fallback, i = t.mode, E = e.child, N = E.sibling, a = cl(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, N !== null ? m = cl(
      N,
      m
    ) : (m = ca(
      m,
      i,
      l,
      null
    ), m.flags |= 2), m.return = t, a.return = t, a.sibling = m, t.child = a, Fn(null, a), a = t.child, m = e.child.memoizedState, m === null ? m = Xs(l) : (i = m.cachePool, i !== null ? (E = We._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Df(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: i
    }), a.memoizedState = m, a.childLanes = Vs(
      e,
      f,
      l
    ), t.memoizedState = Ys, Fn(e.child, a)) : (ql(t), l = e.child, e = l.sibling, l = cl(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Ks(e, t) {
    return t = Tu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Tu(e, t) {
    return e = Nt(22, e, null, t), e.lanes = 0, e;
  }
  function ks(e, t, l) {
    return ga(t, e.child, null, l), e = Ks(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Kd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), us(e.return, t, l);
  }
  function Qs(e, t, l, a, i, u) {
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
  function kd(e, t, l) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Ze.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, k(Ze, f), ct(e, t, a, l), a = be ? Hn : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Kd(e, l, t);
        else if (e.tag === 19)
          Kd(e, l, t);
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
          e = l.alternate, e !== null && fu(e) === null && (i = l), l = l.sibling;
        l = i, l === null ? (i = t.child, t.child = null) : (i = l.sibling, l.sibling = null), Qs(
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
          if (e = i.alternate, e !== null && fu(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = l, l = i, i = e;
        }
        Qs(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Qs(
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
  function yl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Vl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (ka(
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
      for (e = t.child, l = cl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = cl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Zs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && au(e)));
  }
  function Cy(e, t, l) {
    switch (t.tag) {
      case 3:
        He(t, t.stateNode.containerInfo), jl(t, We, e.memoizedState.cache), oa();
        break;
      case 27:
      case 5:
        ta(t);
        break;
      case 4:
        He(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, vs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ql(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Vd(e, t, l) : (ql(t), e = yl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        ql(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (ka(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), i) {
          if (a)
            return kd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), k(Ze, Ze.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Hd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        jl(t, We, e.memoizedState.cache);
    }
    return yl(e, t, l);
  }
  function Qd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!Zs(e, l) && (t.flags & 128) === 0)
          return Pe = !1, Cy(
            e,
            t,
            l
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, be && (t.flags & 1048576) !== 0 && Af(t, Hn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ma(t.elementType), t.type = e, typeof e == "function")
            Ir(e) ? (a = va(e, a), t.tag = 1, t = Yd(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Gs(
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
                t.tag = 11, t = zd(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (i === P) {
                t.tag = 14, t = jd(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = Fe(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Gs(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return a = t.type, i = va(
          a,
          t.pendingProps
        ), Yd(
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
          i = u.element, hs(e, t), kn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, jl(t, We, a), a !== u.cache && rs(
            t,
            [We],
            l,
            !0
          ), Kn(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Xd(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== i) {
              i = Ht(
                Error(o(424)),
                t
              ), Bn(i), t = Xd(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, je = Xt(e.firstChild), rt = t, be = !0, Ul = null, Gt = !0, l = Hf(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (oa(), a === i) {
              t = yl(
                e,
                t,
                l
              );
              break e;
            }
            ct(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ru(e, t), e === null ? (l = ah(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : be || (l = t.type, e = t.pendingProps, a = qu(
          K.current
        ).createElement(l), a[ut] = t, a[yt] = e, ot(a, l, e), at(a), t.stateNode = a) : t.memoizedState = ah(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ta(t), e === null && be && (a = t.stateNode = eh(
          t.type,
          t.pendingProps,
          K.current
        ), rt = t, Gt = !0, i = je, Jl(t.type) ? (Cc = i, je = Xt(a.firstChild)) : je = i), ct(
          e,
          t,
          t.pendingProps.children,
          l
        ), Ru(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((i = a = je) && (a = lg(
          a,
          t.type,
          t.pendingProps,
          Gt
        ), a !== null ? (t.stateNode = a, rt = t, je = Xt(a.firstChild), Gt = !1, i = !0) : i = !1), i || zl(t)), ta(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Sc(i, u) ? a = null : f !== null && Sc(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = bs(
          e,
          t,
          py,
          null,
          null,
          l
        ), fi._currentValue = i), Ru(e, t), ct(e, t, a, l), t.child;
      case 6:
        return e === null && be && ((e = l = je) && (l = ag(
          l,
          t.pendingProps,
          Gt
        ), l !== null ? (t.stateNode = l, rt = t, je = null, e = !0) : e = !1), e || zl(t)), null;
      case 13:
        return Vd(e, t, l);
      case 4:
        return He(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ga(
          t,
          null,
          a,
          l
        ) : ct(e, t, a, l), t.child;
      case 11:
        return zd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return ct(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return ct(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return ct(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, jl(t, t.type, a.value), ct(e, t, a.children, l), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, da(t), i = st(i), a = a(i), t.flags |= 1, ct(e, t, a, l), t.child;
      case 14:
        return jd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Ld(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return kd(e, t, l);
      case 31:
        return xy(e, t, l);
      case 22:
        return Hd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return da(t), a = st(We), e === null ? (i = os(), i === null && (i = Ue, u = ss(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= l), i = u), t.memoizedState = { parent: a, cache: i }, ds(t), jl(t, We, i)) : ((e.lanes & l) !== 0 && (hs(e, t), kn(t, null, null, l), Kn()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), jl(t, We, a)) : (a = u.cache, jl(t, We, a), a !== i.cache && rs(
          t,
          [We],
          l,
          !0
        ))), ct(
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
  function gl(e) {
    e.flags |= 4;
  }
  function Js(e, t, l, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (E0()) e.flags |= 8192;
        else
          throw ya = ru, fs;
    } else e.flags &= -16777217;
  }
  function Zd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !sh(t))
      if (E0()) e.flags |= 8192;
      else
        throw ya = ru, fs;
  }
  function Au(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xo() : 536870912, e.lanes |= t, an |= t);
  }
  function Wn(e, t) {
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
  function _y(e, t, l) {
    var a = t.pendingProps;
    switch (ls(t), t.tag) {
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
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), dl(We), Ge(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Ka(t) ? gl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ns())), Le(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (gl(t), u !== null ? (Le(t), Zd(t, u)) : (Le(t), Js(
          t,
          i,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (gl(t), Le(t), Zd(t, u)) : (Le(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && gl(t), Le(t), Js(
          t,
          i,
          e,
          a,
          l
        )), null;
      case 27:
        if (_a(t), l = K.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && gl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Le(t), null;
          }
          e = Z.current, Ka(t) ? Cf(t) : (e = eh(i, a, l), t.stateNode = e, gl(t));
        }
        return Le(t), null;
      case 5:
        if (_a(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && gl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Le(t), null;
          }
          if (u = Z.current, Ka(t))
            Cf(t);
          else {
            var f = qu(
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
            u[ut] = t, u[yt] = a;
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
            e: switch (ot(u, i, a), i) {
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
            a && gl(t);
          }
        }
        return Le(t), Js(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && gl(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = K.current, Ka(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, i = rt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[ut] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || V0(e.nodeValue, l)), e || zl(t, !0);
          } else
            e = qu(e).createTextNode(
              a
            ), e[ut] = t, t.stateNode = e;
        }
        return Le(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Ka(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[ut] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), e = !1;
          } else
            l = ns(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (wt(t), t) : (wt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Le(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Ka(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(o(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(o(317));
              i[ut] = t;
            } else
              oa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Le(t), i = !1;
          } else
            i = ns(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (wt(t), t) : (wt(t), null);
        }
        return wt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Au(t, t.updateQueue), Le(t), null);
      case 4:
        return Ge(), e === null && gc(t.stateNode.containerInfo), Le(t), null;
      case 10:
        return dl(t.type), Le(t), null;
      case 19:
        if (H(Ze), a = t.memoizedState, a === null) return Le(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) Wn(a, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = fu(e), u !== null) {
                  for (t.flags |= 128, Wn(a, !1), e = u.updateQueue, t.updateQueue = e, Au(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Sf(l, e), l = l.sibling;
                  return k(
                    Ze,
                    Ze.current & 1 | 2
                  ), be && ol(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && At() > Ou && (t.flags |= 128, i = !0, Wn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = fu(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Au(t, e), Wn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !be)
                return Le(t), null;
            } else
              2 * At() - a.renderingStartTime > Ou && l !== 536870912 && (t.flags |= 128, i = !0, Wn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = At(), e.sibling = null, l = Ze.current, k(
          Ze,
          i ? l & 1 | 2 : l & 1
        ), be && ol(t, a.treeForkCount), e) : (Le(t), null);
      case 22:
      case 23:
        return wt(t), ps(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Le(t), l = t.updateQueue, l !== null && Au(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && H(ha), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), dl(We), Le(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Ny(e, t) {
    switch (ls(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dl(We), Ge(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return _a(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (wt(t), t.alternate === null)
            throw Error(o(340));
          oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (wt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          oa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Ze), null;
      case 4:
        return Ge(), null;
      case 10:
        return dl(t.type), null;
      case 22:
      case 23:
        return wt(t), ps(), e !== null && H(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return dl(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jd(e, t) {
    switch (ls(t), t.tag) {
      case 3:
        dl(We), Ge();
        break;
      case 26:
      case 27:
      case 5:
        _a(t);
        break;
      case 4:
        Ge();
        break;
      case 31:
        t.memoizedState !== null && wt(t);
        break;
      case 13:
        wt(t);
        break;
      case 19:
        H(Ze);
        break;
      case 10:
        dl(t.type);
        break;
      case 22:
      case 23:
        wt(t), ps(), e !== null && H(ha);
        break;
      case 24:
        dl(We);
    }
  }
  function In(e, t) {
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
      Ne(t, t.return, m);
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
              var E = l, N = m;
              try {
                N();
              } catch (z) {
                Ne(
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
      Ne(t, t.return, z);
    }
  }
  function $d(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        qf(t, l);
      } catch (a) {
        Ne(e, e.return, a);
      }
    }
  }
  function Fd(e, t, l) {
    l.props = va(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function Pn(e, t) {
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
      Ne(e, t, i);
    }
  }
  function al(e, t) {
    var l = e.ref, a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          Ne(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (i) {
          Ne(e, t, i);
        }
      else l.current = null;
  }
  function Wd(e) {
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
      Ne(e, e.return, i);
    }
  }
  function $s(e, t, l) {
    try {
      var a = e.stateNode;
      Fy(a, e.type, l, t), a[yt] = t;
    } catch (i) {
      Ne(e, e.return, i);
    }
  }
  function Id(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jl(e.type) || e.tag === 4;
  }
  function Fs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Id(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Ws(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = rl));
    else if (a !== 4 && (a === 27 && Jl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (Ws(e, t, l), e = e.sibling; e !== null; )
        Ws(e, t, l), e = e.sibling;
  }
  function xu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Jl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (xu(e, t, l), e = e.sibling; e !== null; )
        xu(e, t, l), e = e.sibling;
  }
  function Pd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ot(t, a, l), t[ut] = e, t[yt] = l;
    } catch (u) {
      Ne(e, e.return, u);
    }
  }
  var pl = !1, et = !1, Is = !1, e0 = typeof WeakSet == "function" ? WeakSet : Set, nt = null;
  function Oy(e, t) {
    if (e = e.containerInfo, Ec = Qu, e = df(e), kr(e)) {
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
            var f = 0, m = -1, E = -1, N = 0, z = 0, B = e, O = null;
            t: for (; ; ) {
              for (var U; B !== l || i !== 0 && B.nodeType !== 3 || (m = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (E = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (U = B.firstChild) !== null; )
                O = B, B = U;
              for (; ; ) {
                if (B === e) break t;
                if (O === l && ++N === i && (m = f), O === u && ++z === a && (E = f), (U = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = U;
            }
            l = m === -1 || E === -1 ? null : { start: m, end: E };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (bc = { focusedElem: e, selectionRange: l }, Qu = !1, nt = t; nt !== null; )
      if (t = nt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, nt = e;
      else
        for (; nt !== null; ) {
          switch (t = nt, u = t.alternate, e = t.flags, t.tag) {
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
                  var J = va(
                    l.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  Ne(
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
                  Tc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Tc(e);
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
            e.return = t.return, nt = e;
            break;
          }
          nt = t.return;
        }
  }
  function t0(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        El(e, l), a & 4 && In(5, l);
        break;
      case 1:
        if (El(e, l), a & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Ne(l, l.return, f);
            }
          else {
            var i = va(
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
              Ne(
                l,
                l.return,
                f
              );
            }
          }
        a & 64 && $d(l), a & 512 && Pn(l, l.return);
        break;
      case 3:
        if (El(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
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
            qf(e, t);
          } catch (f) {
            Ne(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Pd(l);
      case 26:
      case 5:
        El(e, l), t === null && a & 4 && Wd(l), a & 512 && Pn(l, l.return);
        break;
      case 12:
        El(e, l);
        break;
      case 31:
        El(e, l), a & 4 && n0(e, l);
        break;
      case 13:
        El(e, l), a & 4 && i0(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = By.bind(
          null,
          l
        ), ng(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || pl, !a) {
          t = t !== null && t.memoizedState !== null || et, i = pl;
          var u = et;
          pl = a, (et = t) && !u ? bl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : El(e, l), pl = i, et = u;
        }
        break;
      case 30:
        break;
      default:
        El(e, l);
    }
  }
  function l0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, l0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Nr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Be = null, pt = !1;
  function vl(e, t, l) {
    for (l = l.child; l !== null; )
      a0(e, t, l), l = l.sibling;
  }
  function a0(e, t, l) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(Tn, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        et || al(l, t), vl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        et || al(l, t);
        var a = Be, i = pt;
        Jl(l.type) && (Be = l.stateNode, pt = !1), vl(
          e,
          t,
          l
        ), si(l.stateNode), Be = a, pt = i;
        break;
      case 5:
        et || al(l, t);
      case 6:
        if (a = Be, i = pt, Be = null, vl(
          e,
          t,
          l
        ), Be = a, pt = i, Be !== null)
          if (pt)
            try {
              (Be.nodeType === 9 ? Be.body : Be.nodeName === "HTML" ? Be.ownerDocument.body : Be).removeChild(l.stateNode);
            } catch (u) {
              Ne(
                l,
                t,
                u
              );
            }
          else
            try {
              Be.removeChild(l.stateNode);
            } catch (u) {
              Ne(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        Be !== null && (pt ? (e = Be, $0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), dn(e)) : $0(Be, l.stateNode));
        break;
      case 4:
        a = Be, i = pt, Be = l.stateNode.containerInfo, pt = !0, vl(
          e,
          t,
          l
        ), Be = a, pt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Yl(2, l, t), et || Yl(4, l, t), vl(
          e,
          t,
          l
        );
        break;
      case 1:
        et || (al(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Fd(
          l,
          t,
          a
        )), vl(
          e,
          t,
          l
        );
        break;
      case 21:
        vl(
          e,
          t,
          l
        );
        break;
      case 22:
        et = (a = et) || l.memoizedState !== null, vl(
          e,
          t,
          l
        ), et = a;
        break;
      default:
        vl(
          e,
          t,
          l
        );
    }
  }
  function n0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        dn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
    }
  }
  function i0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        dn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
  }
  function wy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new e0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new e0()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Cu(e, t) {
    var l = wy(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var i = qy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function vt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var i = l[a], u = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Jl(m.type)) {
                Be = m.stateNode, pt = !1;
                break e;
              }
              break;
            case 5:
              Be = m.stateNode, pt = !1;
              break e;
            case 3:
            case 4:
              Be = m.stateNode.containerInfo, pt = !0;
              break e;
          }
          m = m.return;
        }
        if (Be === null) throw Error(o(160));
        a0(u, f, i), Be = null, pt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        u0(t, e), t = t.sibling;
  }
  var Jt = null;
  function u0(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vt(t, e), Et(e), a & 4 && (Yl(3, e, e.return), In(3, e), Yl(5, e, e.return));
        break;
      case 1:
        vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), a & 64 && pl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var i = Jt;
        if (vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Cn] || u[ut] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ot(u, a, l), u[ut] = e, at(u), a = u;
                      break e;
                    case "link":
                      var f = uh(
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
                      u = i.createElement(a), ot(u, a, l), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = uh(
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
                      u = i.createElement(a), ot(u, a, l), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[ut] = e, at(u), a = u;
                }
                e.stateNode = a;
              } else
                rh(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = ih(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? rh(
              i,
              e.type,
              e.stateNode
            ) : ih(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && $s(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), l !== null && a & 4 && $s(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            za(i, "");
          } catch (J) {
            Ne(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, $s(
          e,
          i,
          l !== null ? l.memoizedProps : i
        )), a & 1024 && (Is = !0);
        break;
      case 6:
        if (vt(t, e), Et(e), a & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (J) {
            Ne(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Xu = null, i = Jt, Jt = Gu(t.containerInfo), vt(t, e), Jt = i, Et(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            dn(t.containerInfo);
          } catch (J) {
            Ne(e, e.return, J);
          }
        Is && (Is = !1, r0(e));
        break;
      case 4:
        a = Jt, Jt = Gu(
          e.stateNode.containerInfo
        ), vt(t, e), Et(e), Jt = a;
        break;
      case 12:
        vt(t, e), Et(e);
        break;
      case 31:
        vt(t, e), Et(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Cu(e, a)));
        break;
      case 13:
        vt(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Nu = At()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Cu(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = l !== null && l.memoizedState !== null, N = pl, z = et;
        if (pl = N || i, et = z || E, vt(t, e), et = z, pl = N, Et(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || E || pl || et || Ea(e)), l = null, t = e; ; ) {
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
                  Ne(E, E.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (J) {
                  Ne(E, E.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                E = t;
                try {
                  var U = E.stateNode;
                  i ? F0(U, !0) : F0(E.stateNode, !1);
                } catch (J) {
                  Ne(E, E.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Cu(e, l))));
        break;
      case 19:
        vt(t, e), Et(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Cu(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        vt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (Id(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode, u = Fs(e);
            xu(e, u, i);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (za(f, ""), l.flags &= -33);
            var m = Fs(e);
            xu(e, m, f);
            break;
          case 3:
          case 4:
            var E = l.stateNode.containerInfo, N = Fs(e);
            Ws(
              e,
              N,
              E
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (z) {
        Ne(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function r0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        r0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function El(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        t0(e, t.alternate, t), t = t.sibling;
  }
  function Ea(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yl(4, t, t.return), Ea(t);
          break;
        case 1:
          al(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Fd(
            t,
            t.return,
            l
          ), Ea(t);
          break;
        case 27:
          si(t.stateNode);
        case 26:
        case 5:
          al(t, t.return), Ea(t);
          break;
        case 22:
          t.memoizedState === null && Ea(t);
          break;
        case 30:
          Ea(t);
          break;
        default:
          Ea(t);
      }
      e = e.sibling;
    }
  }
  function bl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          bl(
            i,
            u,
            l
          ), In(4, u);
          break;
        case 1:
          if (bl(
            i,
            u,
            l
          ), a = u, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (N) {
              Ne(a, a.return, N);
            }
          if (a = u, i = a.updateQueue, i !== null) {
            var m = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Bf(E[i], m);
            } catch (N) {
              Ne(a, a.return, N);
            }
          }
          l && f & 64 && $d(u), Pn(u, u.return);
          break;
        case 27:
          Pd(u);
        case 26:
        case 5:
          bl(
            i,
            u,
            l
          ), l && a === null && f & 4 && Wd(u), Pn(u, u.return);
          break;
        case 12:
          bl(
            i,
            u,
            l
          );
          break;
        case 31:
          bl(
            i,
            u,
            l
          ), l && f & 4 && n0(i, u);
          break;
        case 13:
          bl(
            i,
            u,
            l
          ), l && f & 4 && i0(i, u);
          break;
        case 22:
          u.memoizedState === null && bl(
            i,
            u,
            l
          ), Pn(u, u.return);
          break;
        case 30:
          break;
        default:
          bl(
            i,
            u,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ps(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && qn(l));
  }
  function ec(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qn(e));
  }
  function $t(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        s0(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function s0(e, t, l, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $t(
          e,
          t,
          l,
          a
        ), i & 2048 && In(9, t);
        break;
      case 1:
        $t(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        $t(
          e,
          t,
          l,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qn(e)));
        break;
      case 12:
        if (i & 2048) {
          $t(
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
            Ne(t, t.return, E);
          }
        } else
          $t(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        $t(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        $t(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? $t(
          e,
          t,
          l,
          a
        ) : ei(e, t) : u._visibility & 2 ? $t(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, en(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && Ps(f, t);
        break;
      case 24:
        $t(
          e,
          t,
          l,
          a
        ), i & 2048 && ec(t.alternate, t);
        break;
      default:
        $t(
          e,
          t,
          l,
          a
        );
    }
  }
  function en(e, t, l, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, m = l, E = a, N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          en(
            u,
            f,
            m,
            E,
            i
          ), In(8, f);
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          f.memoizedState !== null ? z._visibility & 2 ? en(
            u,
            f,
            m,
            E,
            i
          ) : ei(
            u,
            f
          ) : (z._visibility |= 2, en(
            u,
            f,
            m,
            E,
            i
          )), i && N & 2048 && Ps(
            f.alternate,
            f
          );
          break;
        case 24:
          en(
            u,
            f,
            m,
            E,
            i
          ), i && N & 2048 && ec(f.alternate, f);
          break;
        default:
          en(
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
  function ei(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            ei(l, a), i & 2048 && Ps(
              a.alternate,
              a
            );
            break;
          case 24:
            ei(l, a), i & 2048 && ec(a.alternate, a);
            break;
          default:
            ei(l, a);
        }
        t = t.sibling;
      }
  }
  var ti = 8192;
  function tn(e, t, l) {
    if (e.subtreeFlags & ti)
      for (e = e.child; e !== null; )
        c0(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function c0(e, t, l) {
    switch (e.tag) {
      case 26:
        tn(
          e,
          t,
          l
        ), e.flags & ti && e.memoizedState !== null && gg(
          l,
          Jt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        tn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = Jt;
        Jt = Gu(e.stateNode.containerInfo), tn(
          e,
          t,
          l
        ), Jt = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ti, ti = 16777216, tn(
          e,
          t,
          l
        ), ti = a) : tn(
          e,
          t,
          l
        ));
        break;
      default:
        tn(
          e,
          t,
          l
        );
    }
  }
  function o0(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function li(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          nt = a, d0(
            a,
            e
          );
        }
      o0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        f0(e), e = e.sibling;
  }
  function f0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        li(e), e.flags & 2048 && Yl(9, e, e.return);
        break;
      case 3:
        li(e);
        break;
      case 12:
        li(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, _u(e)) : li(e);
        break;
      default:
        li(e);
    }
  }
  function _u(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          nt = a, d0(
            a,
            e
          );
        }
      o0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Yl(8, t, t.return), _u(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, _u(t));
          break;
        default:
          _u(t);
      }
      e = e.sibling;
    }
  }
  function d0(e, t) {
    for (; nt !== null; ) {
      var l = nt;
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
          qn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, nt = a;
      else
        e: for (l = e; nt !== null; ) {
          a = nt;
          var i = a.sibling, u = a.return;
          if (l0(a), a === l) {
            nt = null;
            break e;
          }
          if (i !== null) {
            i.return = u, nt = i;
            break e;
          }
          nt = u;
        }
    }
  }
  var Dy = {
    getCacheForType: function(e) {
      var t = st(We), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return st(We).controller.signal;
    }
  }, My = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, Ue = null, de = null, pe = 0, _e = 0, Dt = null, Xl = !1, ln = !1, tc = !1, Sl = 0, Ve = 0, Vl = 0, ba = 0, lc = 0, Mt = 0, an = 0, ai = null, bt = null, ac = !1, Nu = 0, h0 = 0, Ou = 1 / 0, wu = null, Kl = null, tt = 0, kl = null, nn = null, Rl = 0, nc = 0, ic = null, m0 = null, ni = 0, uc = null;
  function Ut() {
    return (xe & 2) !== 0 && pe !== 0 ? pe & -pe : G.T !== null ? dc() : Oo();
  }
  function y0() {
    if (Mt === 0)
      if ((pe & 536870912) === 0 || be) {
        var e = Bi;
        Bi <<= 1, (Bi & 3932160) === 0 && (Bi = 262144), Mt = e;
      } else Mt = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), Mt;
  }
  function St(e, t, l) {
    (e === Ue && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (un(e, 0), Ql(
      e,
      pe,
      Mt,
      !1
    )), xn(e, l), ((xe & 2) === 0 || e !== Ue) && (e === Ue && ((xe & 2) === 0 && (ba |= l), Ve === 4 && Ql(
      e,
      pe,
      Mt,
      !1
    )), nl(e));
  }
  function g0(e, t, l) {
    if ((xe & 6) !== 0) throw Error(o(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || An(e, t), i = a ? jy(e, t) : sc(e, t, !0), u = a;
    do {
      if (i === 0) {
        ln && !a && Ql(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !Uy(l)) {
          i = sc(e, t, !1), u = !1;
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
              i = ai;
              var E = m.current.memoizedState.isDehydrated;
              if (E && (un(m, f).flags |= 256), f = sc(
                m,
                f,
                !1
              ), f !== 2) {
                if (tc && !E) {
                  m.errorRecoveryDisabledLanes |= u, ba |= u, i = 4;
                  break e;
                }
                u = bt, bt = i, u !== null && (bt === null ? bt = u : bt.push.apply(
                  bt,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          un(e, 0), Ql(e, t, 0, !0);
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
                Mt,
                !Xl
              );
              break e;
            case 2:
              bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (i = Nu + 300 - At(), 10 < i)) {
            if (Ql(
              a,
              t,
              Mt,
              !Xl
            ), Gi(a, 0, !0) !== 0) break e;
            Rl = t, a.timeoutHandle = Z0(
              p0.bind(
                null,
                a,
                l,
                bt,
                wu,
                ac,
                t,
                Mt,
                ba,
                an,
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
          p0(
            a,
            l,
            bt,
            wu,
            ac,
            t,
            Mt,
            ba,
            an,
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
  function p0(e, t, l, a, i, u, f, m, E, N, z, B, O, U) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: rl
      }, c0(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? Nu - At() : (u & 4194048) === u ? h0 - At() : 0;
      if (J = pg(
        B,
        J
      ), J !== null) {
        Rl = u, e.cancelPendingCommit = J(
          x0.bind(
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
            U
          )
        ), Ql(e, u, f, !N);
        return;
      }
    }
    x0(
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
  function Uy(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var i = l[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!_t(u(), i)) return !1;
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
    t &= ~lc, t &= ~ba, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - Ct(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    l !== 0 && Co(e, l, t);
  }
  function Du() {
    return (xe & 6) === 0 ? (ii(0), !1) : !0;
  }
  function rc() {
    if (de !== null) {
      if (_e === 0)
        var e = de.return;
      else
        e = de, fl = fa = null, Ts(e), $a = null, Yn = 0, e = de;
      for (; e !== null; )
        Jd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function un(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, Py(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Rl = 0, rc(), Ue = e, de = l = cl(e.current, null), pe = t, _e = 0, Dt = null, Xl = !1, ln = An(e, t), tc = !1, an = Mt = lc = ba = Vl = Ve = 0, bt = ai = null, ac = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ct(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return Sl = t, Ii(), l;
  }
  function v0(e, t) {
    ue = null, G.H = $n, t === Ja || t === uu ? (t = zf(), _e = 3) : t === fs ? (t = zf(), _e = 4) : _e = t === qs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Dt = t, de === null && (Ve = 1, bu(
      e,
      Ht(t, e.current)
    ));
  }
  function E0() {
    var e = Ot.current;
    return e === null ? !0 : (pe & 4194048) === pe ? Yt === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === Yt : !1;
  }
  function b0() {
    var e = G.H;
    return G.H = $n, e === null ? $n : e;
  }
  function S0() {
    var e = G.A;
    return G.A = Dy, e;
  }
  function Mu() {
    Ve = 4, Xl || (pe & 4194048) !== pe && Ot.current !== null || (ln = !0), (Vl & 134217727) === 0 && (ba & 134217727) === 0 || Ue === null || Ql(
      Ue,
      pe,
      Mt,
      !1
    );
  }
  function sc(e, t, l) {
    var a = xe;
    xe |= 2;
    var i = b0(), u = S0();
    (Ue !== e || pe !== t) && (wu = null, un(e, t)), t = !1;
    var f = Ve;
    e: do
      try {
        if (_e !== 0 && de !== null) {
          var m = de, E = Dt;
          switch (_e) {
            case 8:
              rc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var N = _e;
              if (_e = 0, Dt = null, rn(e, m, E, N), l && ln) {
                f = 0;
                break e;
              }
              break;
            default:
              N = _e, _e = 0, Dt = null, rn(e, m, E, N);
          }
        }
        zy(), f = Ve;
        break;
      } catch (z) {
        v0(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, fl = fa = null, xe = a, G.H = i, G.A = u, de === null && (Ue = null, pe = 0, Ii()), f;
  }
  function zy() {
    for (; de !== null; ) R0(de);
  }
  function jy(e, t) {
    var l = xe;
    xe |= 2;
    var a = b0(), i = S0();
    Ue !== e || pe !== t ? (wu = null, Ou = At() + 500, un(e, t)) : ln = An(
      e,
      t
    );
    e: do
      try {
        if (_e !== 0 && de !== null) {
          t = de;
          var u = Dt;
          t: switch (_e) {
            case 1:
              _e = 0, Dt = null, rn(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Mf(u)) {
                _e = 0, Dt = null, T0(t);
                break;
              }
              t = function() {
                _e !== 2 && _e !== 9 || Ue !== e || (_e = 7), nl(e);
              }, u.then(t, t);
              break e;
            case 3:
              _e = 7;
              break e;
            case 4:
              _e = 5;
              break e;
            case 7:
              Mf(u) ? (_e = 0, Dt = null, T0(t)) : (_e = 0, Dt = null, rn(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var m = de;
                  if (f ? sh(f) : m.stateNode.complete) {
                    _e = 0, Dt = null;
                    var E = m.sibling;
                    if (E !== null) de = E;
                    else {
                      var N = m.return;
                      N !== null ? (de = N, Uu(N)) : de = null;
                    }
                    break t;
                  }
              }
              _e = 0, Dt = null, rn(e, t, u, 5);
              break;
            case 6:
              _e = 0, Dt = null, rn(e, t, u, 6);
              break;
            case 8:
              rc(), Ve = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Ly();
        break;
      } catch (z) {
        v0(e, z);
      }
    while (!0);
    return fl = fa = null, G.H = a, G.A = i, xe = l, de !== null ? 0 : (Ue = null, pe = 0, Ii(), Ve);
  }
  function Ly() {
    for (; de !== null && !i1(); )
      R0(de);
  }
  function R0(e) {
    var t = Qd(e.alternate, e, Sl);
    e.memoizedProps = e.pendingProps, t === null ? Uu(e) : de = t;
  }
  function T0(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Gd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Gd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        Ts(t);
      default:
        Jd(l, t), t = de = Sf(t, Sl), t = Qd(l, t, Sl);
    }
    e.memoizedProps = e.pendingProps, t === null ? Uu(e) : de = t;
  }
  function rn(e, t, l, a) {
    fl = fa = null, Ts(t), $a = null, Yn = 0;
    var i = t.return;
    try {
      if (Ay(
        e,
        i,
        t,
        l,
        pe
      )) {
        Ve = 1, bu(
          e,
          Ht(l, e.current)
        ), de = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw de = i, u;
      Ve = 1, bu(
        e,
        Ht(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (be || a === 1 ? e = !0 : ln || (pe & 536870912) !== 0 ? e = !1 : (Xl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ot.current, a !== null && a.tag === 13 && (a.flags |= 16384))), A0(t, e)) : Uu(t);
  }
  function Uu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        A0(
          t,
          Xl
        );
        return;
      }
      e = t.return;
      var l = _y(
        t.alternate,
        t,
        Sl
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
  function A0(e, t) {
    do {
      var l = Ny(e.alternate, e);
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
  function x0(e, t, l, a, i, u, f, m, E) {
    e.cancelPendingCommit = null;
    do
      zu();
    while (tt !== 0);
    if ((xe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Fr, y1(
        e,
        l,
        u,
        f,
        m,
        E
      ), e === Ue && (de = Ue = null, pe = 0), nn = t, kl = e, Rl = l, nc = u, ic = i, m0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gy(Li, function() {
        return w0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = G.T, G.T = null, i = V.p, V.p = 2, f = xe, xe |= 4;
        try {
          Oy(e, t, l);
        } finally {
          xe = f, V.p = i, G.T = a;
        }
      }
      tt = 1, C0(), _0(), N0();
    }
  }
  function C0() {
    if (tt === 1) {
      tt = 0;
      var e = kl, t = nn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = G.T, G.T = null;
        var a = V.p;
        V.p = 2;
        var i = xe;
        xe |= 4;
        try {
          u0(t, e);
          var u = bc, f = df(e.containerInfo), m = u.focusedElem, E = u.selectionRange;
          if (f !== m && m && m.ownerDocument && ff(
            m.ownerDocument.documentElement,
            m
          )) {
            if (E !== null && kr(m)) {
              var N = E.start, z = E.end;
              if (z === void 0 && (z = N), "selectionStart" in m)
                m.selectionStart = N, m.selectionEnd = Math.min(
                  z,
                  m.value.length
                );
              else {
                var B = m.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var U = O.getSelection(), J = m.textContent.length, ee = Math.min(E.start, J), De = E.end === void 0 ? ee : Math.min(E.end, J);
                  !U.extend && ee > De && (f = De, De = ee, ee = f);
                  var x = of(
                    m,
                    ee
                  ), R = of(
                    m,
                    De
                  );
                  if (x && R && (U.rangeCount !== 1 || U.anchorNode !== x.node || U.anchorOffset !== x.offset || U.focusNode !== R.node || U.focusOffset !== R.offset)) {
                    var _ = B.createRange();
                    _.setStart(x.node, x.offset), U.removeAllRanges(), ee > De ? (U.addRange(_), U.extend(R.node, R.offset)) : (_.setEnd(R.node, R.offset), U.addRange(_));
                  }
                }
              }
            }
            for (B = [], U = m; U = U.parentNode; )
              U.nodeType === 1 && B.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < B.length; m++) {
              var L = B[m];
              L.element.scrollLeft = L.left, L.element.scrollTop = L.top;
            }
          }
          Qu = !!Ec, bc = Ec = null;
        } finally {
          xe = i, V.p = a, G.T = l;
        }
      }
      e.current = t, tt = 2;
    }
  }
  function _0() {
    if (tt === 2) {
      tt = 0;
      var e = kl, t = nn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = G.T, G.T = null;
        var a = V.p;
        V.p = 2;
        var i = xe;
        xe |= 4;
        try {
          t0(e, t.alternate, t);
        } finally {
          xe = i, V.p = a, G.T = l;
        }
      }
      tt = 3;
    }
  }
  function N0() {
    if (tt === 4 || tt === 3) {
      tt = 0, u1();
      var e = kl, t = nn, l = Rl, a = m0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0, nn = kl = null, O0(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Kl = null), Cr(l), t = t.stateNode, xt && typeof xt.onCommitFiberRoot == "function")
        try {
          xt.onCommitFiberRoot(
            Tn,
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
      (Rl & 3) !== 0 && zu(), nl(e), i = e.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? e === uc ? ni++ : (ni = 0, uc = e) : ni = 0, ii(0);
    }
  }
  function O0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qn(t)));
  }
  function zu() {
    return C0(), _0(), N0(), w0();
  }
  function w0() {
    if (tt !== 5) return !1;
    var e = kl, t = nc;
    nc = 0;
    var l = Cr(Rl), a = G.T, i = V.p;
    try {
      V.p = 32 > l ? 32 : l, G.T = null, l = ic, ic = null;
      var u = kl, f = Rl;
      if (tt = 0, nn = kl = null, Rl = 0, (xe & 6) !== 0) throw Error(o(331));
      var m = xe;
      if (xe |= 4, f0(u.current), s0(
        u,
        u.current,
        f,
        l
      ), xe = m, ii(0, !1), xt && typeof xt.onPostCommitFiberRoot == "function")
        try {
          xt.onPostCommitFiberRoot(Tn, u);
        } catch {
        }
      return !0;
    } finally {
      V.p = i, G.T = a, O0(e, t);
    }
  }
  function D0(e, t, l) {
    t = Ht(l, t), t = Bs(e.stateNode, t, 2), e = Bl(e, t, 2), e !== null && (xn(e, 2), nl(e));
  }
  function Ne(e, t, l) {
    if (e.tag === 3)
      D0(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          D0(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Kl === null || !Kl.has(a))) {
            e = Ht(l, e), l = Md(2), a = Bl(t, l, 2), a !== null && (Ud(
              l,
              a,
              t,
              e
            ), xn(a, 2), nl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function cc(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new My();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(l) || (tc = !0, i.add(l), e = Hy.bind(null, e, t, l), t.then(e, e));
  }
  function Hy(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ue === e && (pe & l) === l && (Ve === 4 || Ve === 3 && (pe & 62914560) === pe && 300 > At() - Nu ? (xe & 2) === 0 && un(e, 0) : lc |= l, an === pe && (an = 0)), nl(e);
  }
  function M0(e, t) {
    t === 0 && (t = xo()), e = sa(e, t), e !== null && (xn(e, t), nl(e));
  }
  function By(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), M0(e, l);
  }
  function qy(e, t) {
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
    a !== null && a.delete(t), M0(e, l);
  }
  function Gy(e, t) {
    return Rr(e, t);
  }
  var ju = null, sn = null, oc = !1, Lu = !1, fc = !1, Zl = 0;
  function nl(e) {
    e !== sn && e.next === null && (sn === null ? ju = sn = e : sn = sn.next = e), Lu = !0, oc || (oc = !0, Xy());
  }
  function ii(e, t) {
    if (!fc && Lu) {
      fc = !0;
      do
        for (var l = !1, a = ju; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - Ct(42 | e) + 1) - 1, u &= i & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, L0(a, u));
          } else
            u = pe, u = Gi(
              a,
              a === Ue ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || An(a, u) || (l = !0, L0(a, u));
          a = a.next;
        }
      while (l);
      fc = !1;
    }
  }
  function Yy() {
    U0();
  }
  function U0() {
    Lu = oc = !1;
    var e = 0;
    Zl !== 0 && Iy() && (e = Zl);
    for (var t = At(), l = null, a = ju; a !== null; ) {
      var i = a.next, u = z0(a, t);
      u === 0 ? (a.next = null, l === null ? ju = i : l.next = i, i === null && (sn = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Lu = !0)), a = i;
    }
    tt !== 0 && tt !== 5 || ii(e), Zl !== 0 && (Zl = 0);
  }
  function z0(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ct(u), m = 1 << f, E = i[f];
      E === -1 ? ((m & l) === 0 || (m & a) !== 0) && (i[f] = m1(m, t)) : E <= t && (e.expiredLanes |= m), u &= ~m;
    }
    if (t = Ue, l = pe, l = Gi(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Tr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || An(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && Tr(a), Cr(l)) {
        case 2:
        case 8:
          l = To;
          break;
        case 32:
          l = Li;
          break;
        case 268435456:
          l = Ao;
          break;
        default:
          l = Li;
      }
      return a = j0.bind(null, e), l = Rr(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && Tr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function j0(e, t) {
    if (tt !== 0 && tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (zu() && e.callbackNode !== l)
      return null;
    var a = pe;
    return a = Gi(
      e,
      e === Ue ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (g0(e, a, t), z0(e, At()), e.callbackNode != null && e.callbackNode === l ? j0.bind(null, e) : null);
  }
  function L0(e, t) {
    if (zu()) return null;
    g0(e, t, !0);
  }
  function Xy() {
    eg(function() {
      (xe & 6) !== 0 ? Rr(
        Ro,
        Yy
      ) : U0();
    });
  }
  function dc() {
    if (Zl === 0) {
      var e = Qa;
      e === 0 && (e = Hi, Hi <<= 1, (Hi & 261888) === 0 && (Hi = 256)), Zl = e;
    }
    return Zl;
  }
  function H0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ki("" + e);
  }
  function B0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Vy(e, t, l, a, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var u = H0(
        (i[yt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[yt] || null) ? H0(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var m = new Ji(
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
                if (Zl !== 0) {
                  var E = f ? B0(i, f) : new FormData(i);
                  Ms(
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
                typeof u == "function" && (m.preventDefault(), E = f ? B0(i, f) : new FormData(i), Ms(
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
  for (var hc = 0; hc < $r.length; hc++) {
    var mc = $r[hc], Ky = mc.toLowerCase(), ky = mc[0].toUpperCase() + mc.slice(1);
    Zt(
      Ky,
      "on" + ky
    );
  }
  Zt(yf, "onAnimationEnd"), Zt(gf, "onAnimationIteration"), Zt(pf, "onAnimationStart"), Zt("dblclick", "onDoubleClick"), Zt("focusin", "onFocus"), Zt("focusout", "onBlur"), Zt(ry, "onTransitionRun"), Zt(sy, "onTransitionStart"), Zt(cy, "onTransitionCancel"), Zt(vf, "onTransitionEnd"), Ma("onMouseEnter", ["mouseout", "mouseover"]), Ma("onMouseLeave", ["mouseout", "mouseover"]), Ma("onPointerEnter", ["pointerout", "pointerover"]), Ma("onPointerLeave", ["pointerout", "pointerover"]), na(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), na(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), na("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), na(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), na(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), na(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Qy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui)
  );
  function q0(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f], E = m.instance, N = m.currentTarget;
            if (m = m.listener, E !== u && i.isPropagationStopped())
              break e;
            u = m, i.currentTarget = N;
            try {
              u(i);
            } catch (z) {
              Wi(z);
            }
            i.currentTarget = null, u = E;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (m = a[f], E = m.instance, N = m.currentTarget, m = m.listener, E !== u && i.isPropagationStopped())
              break e;
            u = m, i.currentTarget = N;
            try {
              u(i);
            } catch (z) {
              Wi(z);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function he(e, t) {
    var l = t[_r];
    l === void 0 && (l = t[_r] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (G0(t, e, 2, !1), l.add(a));
  }
  function yc(e, t, l) {
    var a = 0;
    t && (a |= 4), G0(
      l,
      e,
      a,
      t
    );
  }
  var Hu = "_reactListening" + Math.random().toString(36).slice(2);
  function gc(e) {
    if (!e[Hu]) {
      e[Hu] = !0, Mo.forEach(function(l) {
        l !== "selectionchange" && (Qy.has(l) || yc(l, !1, e), yc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Hu] || (t[Hu] = !0, yc("selectionchange", !1, t));
    }
  }
  function G0(e, t, l, a) {
    switch (yh(t)) {
      case 2:
        var i = bg;
        break;
      case 8:
        i = Sg;
        break;
      default:
        i = Dc;
    }
    l = i.bind(
      null,
      t,
      l,
      e
    ), i = void 0, !Lr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
      passive: i
    }) : e.addEventListener(t, l, !1);
  }
  function pc(e, t, l, a, i) {
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
            if (f = Oa(m), f === null) return;
            if (E = f.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = u = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Ko(function() {
      var N = u, z = zr(l), B = [];
      e: {
        var O = Ef.get(e);
        if (O !== void 0) {
          var U = Ji, J = e;
          switch (e) {
            case "keypress":
              if (Qi(l) === 0) break e;
            case "keydown":
            case "keyup":
              U = q1;
              break;
            case "focusin":
              J = "focus", U = Gr;
              break;
            case "focusout":
              J = "blur", U = Gr;
              break;
            case "beforeblur":
            case "afterblur":
              U = Gr;
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
              U = Zo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = _1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = X1;
              break;
            case yf:
            case gf:
            case pf:
              U = w1;
              break;
            case vf:
              U = K1;
              break;
            case "scroll":
            case "scrollend":
              U = x1;
              break;
            case "wheel":
              U = Q1;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = M1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = $o;
              break;
            case "toggle":
            case "beforetoggle":
              U = J1;
          }
          var ee = (t & 4) !== 0, De = !ee && (e === "scroll" || e === "scrollend"), x = ee ? O !== null ? O + "Capture" : null : O;
          ee = [];
          for (var R = N, _; R !== null; ) {
            var L = R;
            if (_ = L.stateNode, L = L.tag, L !== 5 && L !== 26 && L !== 27 || _ === null || x === null || (L = Nn(R, x), L != null && ee.push(
              ri(R, L, _)
            )), De) break;
            R = R.return;
          }
          0 < ee.length && (O = new U(
            O,
            J,
            null,
            l,
            z
          ), B.push({ event: O, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", O && l !== Ur && (J = l.relatedTarget || l.fromElement) && (Oa(J) || J[Na]))
            break e;
          if ((U || O) && (O = z.window === z ? z : (O = z.ownerDocument) ? O.defaultView || O.parentWindow : window, U ? (J = l.relatedTarget || l.toElement, U = N, J = J ? Oa(J) : null, J !== null && (De = h(J), ee = J.tag, J !== De || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (U = null, J = N), U !== J)) {
            if (ee = Zo, L = "onMouseLeave", x = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = $o, L = "onPointerLeave", x = "onPointerEnter", R = "pointer"), De = U == null ? O : _n(U), _ = J == null ? O : _n(J), O = new ee(
              L,
              R + "leave",
              U,
              l,
              z
            ), O.target = De, O.relatedTarget = _, L = null, Oa(z) === N && (ee = new ee(
              x,
              R + "enter",
              J,
              l,
              z
            ), ee.target = _, ee.relatedTarget = De, L = ee), De = L, U && J)
              t: {
                for (ee = Zy, x = U, R = J, _ = 0, L = x; L; L = ee(L))
                  _++;
                L = 0;
                for (var I = R; I; I = ee(I))
                  L++;
                for (; 0 < _ - L; )
                  x = ee(x), _--;
                for (; 0 < L - _; )
                  R = ee(R), L--;
                for (; _--; ) {
                  if (x === R || R !== null && x === R.alternate) {
                    ee = x;
                    break t;
                  }
                  x = ee(x), R = ee(R);
                }
                ee = null;
              }
            else ee = null;
            U !== null && Y0(
              B,
              O,
              U,
              ee,
              !1
            ), J !== null && De !== null && Y0(
              B,
              De,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (O = N ? _n(N) : window, U = O.nodeName && O.nodeName.toLowerCase(), U === "select" || U === "input" && O.type === "file")
            var Re = af;
          else if (tf(O))
            if (nf)
              Re = ny;
            else {
              Re = ly;
              var F = ty;
            }
          else
            U = O.nodeName, !U || U.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? N && Mr(N.elementType) && (Re = af) : Re = ay;
          if (Re && (Re = Re(e, N))) {
            lf(
              B,
              Re,
              l,
              z
            );
            break e;
          }
          F && F(e, O, N), e === "focusout" && N && O.type === "number" && N.memoizedProps.value != null && Dr(O, "number", O.value);
        }
        switch (F = N ? _n(N) : window, e) {
          case "focusin":
            (tf(F) || F.contentEditable === "true") && (Ba = F, Qr = N, Ln = null);
            break;
          case "focusout":
            Ln = Qr = Ba = null;
            break;
          case "mousedown":
            Zr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zr = !1, hf(B, l, z);
            break;
          case "selectionchange":
            if (uy) break;
          case "keydown":
          case "keyup":
            hf(B, l, z);
        }
        var oe;
        if (Xr)
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
          Ha ? Po(e, l) && (ve = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Fo && l.locale !== "ko" && (Ha || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && Ha && (oe = ko()) : (Dl = z, Hr = "value" in Dl ? Dl.value : Dl.textContent, Ha = !0)), F = Bu(N, ve), 0 < F.length && (ve = new Jo(
          ve,
          e,
          null,
          l,
          z
        ), B.push({ event: ve, listeners: F }), oe ? ve.data = oe : (oe = ef(l), oe !== null && (ve.data = oe)))), (oe = F1 ? W1(e, l) : I1(e, l)) && (ve = Bu(N, "onBeforeInput"), 0 < ve.length && (F = new Jo(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          z
        ), B.push({
          event: F,
          listeners: ve
        }), F.data = oe)), Vy(
          B,
          e,
          N,
          l,
          z
        );
      }
      q0(B, t);
    });
  }
  function ri(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function Bu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Nn(e, l), i != null && a.unshift(
        ri(e, i, u)
      ), i = Nn(e, t), i != null && a.push(
        ri(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Zy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Y0(e, t, l, a, i) {
    for (var u = t._reactName, f = []; l !== null && l !== a; ) {
      var m = l, E = m.alternate, N = m.stateNode;
      if (m = m.tag, E !== null && E === a) break;
      m !== 5 && m !== 26 && m !== 27 || N === null || (E = N, i ? (N = Nn(l, u), N != null && f.unshift(
        ri(l, N, E)
      )) : i || (N = Nn(l, u), N != null && f.push(
        ri(l, N, E)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Jy = /\r\n?/g, $y = /\u0000|\uFFFD/g;
  function X0(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jy, `
`).replace($y, "");
  }
  function V0(e, t) {
    return t = X0(t), X0(e) === t;
  }
  function we(e, t, l, a, i, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || za(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && za(e, "" + a);
        break;
      case "className":
        Xi(e, "class", a);
        break;
      case "tabIndex":
        Xi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Xi(e, l, a);
        break;
      case "style":
        Xo(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Xi(e, "data", a);
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
        a = Ki("" + a), e.setAttribute(l, a);
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
        a = Ki("" + a), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = rl);
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
        l = Ki("" + a), e.setAttributeNS(
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
        he("beforetoggle", e), he("toggle", e), Yi(e, "popover", a);
        break;
      case "xlinkActuate":
        ul(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        ul(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        ul(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        ul(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        ul(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        ul(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        ul(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        ul(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        ul(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Yi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = T1.get(l) || l, Yi(e, l, a));
    }
  }
  function vc(e, t, l, a, i, u) {
    switch (l) {
      case "style":
        Xo(e, a, u);
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
        typeof a == "string" ? za(e, a) : (typeof a == "number" || typeof a == "bigint") && za(e, "" + a);
        break;
      case "onScroll":
        a != null && he("scroll", e);
        break;
      case "onScrollEnd":
        a != null && he("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = rl);
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
        if (!Uo.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), u = e[yt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, i);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Yi(e, l, a);
          }
    }
  }
  function ot(e, t, l) {
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
        var m = u = f = i = null, E = null, N = null;
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
                  N = z;
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
        Bo(
          e,
          u,
          m,
          E,
          N,
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
        t = u, l = f, e.multiple = !!a, t != null ? Ua(e, !!a, t, !1) : l != null && Ua(e, !!a, l, !0);
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
        Go(e, a, i, u);
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
        for (a = 0; a < ui.length; a++)
          he(ui[a], e);
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
        for (N in l)
          if (l.hasOwnProperty(N) && (a = l[N], a != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                we(e, t, N, a, l, null);
            }
        return;
      default:
        if (Mr(t)) {
          for (z in l)
            l.hasOwnProperty(z) && (a = l[z], a !== void 0 && vc(
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
  function Fy(e, t, l, a) {
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
        var i = null, u = null, f = null, m = null, E = null, N = null, z = null;
        for (U in l) {
          var B = l[U];
          if (l.hasOwnProperty(U) && B != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = B;
              default:
                a.hasOwnProperty(U) || we(e, t, U, null, a, B);
            }
        }
        for (var O in a) {
          var U = a[O];
          if (B = l[O], a.hasOwnProperty(O) && (U != null || B != null))
            switch (O) {
              case "type":
                u = U;
                break;
              case "name":
                i = U;
                break;
              case "checked":
                N = U;
                break;
              case "defaultChecked":
                z = U;
                break;
              case "value":
                f = U;
                break;
              case "defaultValue":
                m = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, t));
                break;
              default:
                U !== B && we(
                  e,
                  t,
                  O,
                  U,
                  a,
                  B
                );
            }
        }
        wr(
          e,
          f,
          m,
          E,
          N,
          z,
          u,
          i
        );
        return;
      case "select":
        U = f = m = O = null;
        for (u in l)
          if (E = l[u], l.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = E;
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
        t = m, l = f, a = U, O != null ? Ua(e, !!l, O, !1) : !!a != !!l && (t != null ? Ua(e, !!l, t, !0) : Ua(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        U = O = null;
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
                U = i;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(o(91));
                break;
              default:
                i !== u && we(e, t, f, i, a, u);
            }
        qo(e, O, U);
        return;
      case "option":
        for (var J in l)
          O = l[J], l.hasOwnProperty(J) && O != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : we(
            e,
            t,
            J,
            null,
            a,
            O
          ));
        for (E in a)
          O = a[E], U = l[E], a.hasOwnProperty(E) && O !== U && (O != null || U != null) && (E === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : we(
            e,
            t,
            E,
            O,
            a,
            U
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
        for (N in a)
          if (O = a[N], U = l[N], a.hasOwnProperty(N) && O !== U && (O != null || U != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  N,
                  O,
                  a,
                  U
                );
            }
        return;
      default:
        if (Mr(t)) {
          for (var De in l)
            O = l[De], l.hasOwnProperty(De) && O !== void 0 && !a.hasOwnProperty(De) && vc(
              e,
              t,
              De,
              void 0,
              a,
              O
            );
          for (z in a)
            O = a[z], U = l[z], !a.hasOwnProperty(z) || O === U || O === void 0 && U === void 0 || vc(
              e,
              t,
              z,
              O,
              a,
              U
            );
          return;
        }
    }
    for (var x in l)
      O = l[x], l.hasOwnProperty(x) && O != null && !a.hasOwnProperty(x) && we(e, t, x, null, a, O);
    for (B in a)
      O = a[B], U = l[B], !a.hasOwnProperty(B) || O === U || O == null && U == null || we(e, t, B, O, a, U);
  }
  function K0(e) {
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
  function Wy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var i = l[a], u = i.transferSize, f = i.initiatorType, m = i.duration;
        if (u && m && K0(f)) {
          for (f = 0, m = i.responseEnd, a += 1; a < l.length; a++) {
            var E = l[a], N = E.startTime;
            if (N > m) break;
            var z = E.transferSize, B = E.initiatorType;
            z && K0(B) && (E = E.responseEnd, f += z * (E < m ? 1 : (m - N) / (E - N)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ec = null, bc = null;
  function qu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function k0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Q0(e, t) {
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
  function Sc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Rc = null;
  function Iy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Rc ? !1 : (Rc = e, !0) : (Rc = null, !1);
  }
  var Z0 = typeof setTimeout == "function" ? setTimeout : void 0, Py = typeof clearTimeout == "function" ? clearTimeout : void 0, J0 = typeof Promise == "function" ? Promise : void 0, eg = typeof queueMicrotask == "function" ? queueMicrotask : typeof J0 < "u" ? function(e) {
    return J0.resolve(null).then(e).catch(tg);
  } : Z0;
  function tg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jl(e) {
    return e === "head";
  }
  function $0(e, t) {
    var l = t, a = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(i), dn(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          si(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, si(l);
          for (var u = l.firstChild; u; ) {
            var f = u.nextSibling, m = u.nodeName;
            u[Cn] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && si(e.ownerDocument.body);
      l = i;
    } while (l);
    dn(t);
  }
  function F0(e, t) {
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
  function Tc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Tc(l), Nr(l);
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
  function lg(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Cn])
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
      if (e = Xt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ag(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Xt(e.nextSibling), e === null)) return null;
    return e;
  }
  function W0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Xt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ac(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function xc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ng(e, t) {
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
  function Xt(e) {
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
  var Cc = null;
  function I0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Xt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function P0(e) {
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
  function eh(e, t, l) {
    switch (t = qu(l), e) {
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
  function si(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Nr(e);
  }
  var Vt = /* @__PURE__ */ new Map(), th = /* @__PURE__ */ new Set();
  function Gu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Tl = V.d;
  V.d = {
    f: ig,
    r: ug,
    D: rg,
    C: sg,
    L: cg,
    m: og,
    X: dg,
    S: fg,
    M: hg
  };
  function ig() {
    var e = Tl.f(), t = Du();
    return e || t;
  }
  function ug(e) {
    var t = wa(e);
    t !== null && t.tag === 5 && t.type === "form" ? vd(t) : Tl.r(e);
  }
  var cn = typeof document > "u" ? null : document;
  function lh(e, t, l) {
    var a = cn;
    if (a && typeof t == "string" && t) {
      var i = jt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), th.has(i) || (th.add(i), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ot(t, "link", e), at(t), a.head.appendChild(t)));
    }
  }
  function rg(e) {
    Tl.D(e), lh("dns-prefetch", e, null);
  }
  function sg(e, t) {
    Tl.C(e, t), lh("preconnect", e, t);
  }
  function cg(e, t, l) {
    Tl.L(e, t, l);
    var a = cn;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + jt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + jt(
        l.imageSizes
      ) + '"]')) : i += '[href="' + jt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = on(e);
          break;
        case "script":
          u = fn(e);
      }
      Vt.has(u) || (e = w(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Vt.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(ci(u)) || t === "script" && a.querySelector(oi(u)) || (t = a.createElement("link"), ot(t, "link", e), at(t), a.head.appendChild(t)));
    }
  }
  function og(e, t) {
    Tl.m(e, t);
    var l = cn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = fn(e);
      }
      if (!Vt.has(u) && (e = w({ rel: "modulepreload", href: e }, t), Vt.set(u, e), l.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(oi(u)))
              return;
        }
        a = l.createElement("link"), ot(a, "link", e), at(a), l.head.appendChild(a);
      }
    }
  }
  function fg(e, t, l) {
    Tl.S(e, t, l);
    var a = cn;
    if (a && e) {
      var i = Da(a).hoistableStyles, u = on(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          ci(u)
        ))
          m.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Vt.get(u)) && _c(e, l);
          var E = f = a.createElement("link");
          at(E), ot(E, "link", e), E._p = new Promise(function(N, z) {
            E.onload = N, E.onerror = z;
          }), E.addEventListener("load", function() {
            m.loading |= 1;
          }), E.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Yu(f, t, a);
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
  function dg(e, t) {
    Tl.X(e, t);
    var l = cn;
    if (l && e) {
      var a = Da(l).hoistableScripts, i = fn(e), u = a.get(i);
      u || (u = l.querySelector(oi(i)), u || (e = w({ src: e, async: !0 }, t), (t = Vt.get(i)) && Nc(e, t), u = l.createElement("script"), at(u), ot(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function hg(e, t) {
    Tl.M(e, t);
    var l = cn;
    if (l && e) {
      var a = Da(l).hoistableScripts, i = fn(e), u = a.get(i);
      u || (u = l.querySelector(oi(i)), u || (e = w({ src: e, async: !0, type: "module" }, t), (t = Vt.get(i)) && Nc(e, t), u = l.createElement("script"), at(u), ot(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function ah(e, t, l, a) {
    var i = (i = K.current) ? Gu(i) : null;
    if (!i) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = on(l.href), l = Da(
          i
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = on(l.href);
          var u = Da(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            ci(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Vt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Vt.set(e, l), u || mg(
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
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = fn(l), l = Da(
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
  function on(e) {
    return 'href="' + jt(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function nh(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function mg(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ot(t, "link", l), at(t), e.head.appendChild(t));
  }
  function fn(e) {
    return '[src="' + jt(e) + '"]';
  }
  function oi(e) {
    return "script[async]" + e;
  }
  function ih(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + jt(l.href) + '"]'
          );
          if (a)
            return t.instance = a, at(a), a;
          var i = w({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), at(a), ot(a, "style", i), Yu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          i = on(l.href);
          var u = e.querySelector(
            ci(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, at(u), u;
          a = nh(l), (i = Vt.get(i)) && _c(a, i), u = (e.ownerDocument || e).createElement("link"), at(u);
          var f = u;
          return f._p = new Promise(function(m, E) {
            f.onload = m, f.onerror = E;
          }), ot(u, "link", a), t.state.loading |= 4, Yu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = fn(l.src), (i = e.querySelector(
            oi(u)
          )) ? (t.instance = i, at(i), i) : (a = l, (i = Vt.get(u)) && (a = w({}, l), Nc(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), at(i), ot(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Yu(a, l.precedence, e));
    return t.instance;
  }
  function Yu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === t) u = m;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function _c(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Xu = null;
  function uh(e, t, l) {
    if (Xu === null) {
      var a = /* @__PURE__ */ new Map(), i = Xu = /* @__PURE__ */ new Map();
      i.set(l, a);
    } else
      i = Xu, a = i.get(l), a || (a = /* @__PURE__ */ new Map(), i.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
      var u = l[i];
      if (!(u[Cn] || u[ut] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var m = a.get(f);
        m ? m.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function rh(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function yg(e, t, l) {
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
  function sh(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function gg(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var i = on(a.href), u = t.querySelector(
          ci(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Vu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, at(u);
          return;
        }
        u = t.ownerDocument || t, a = nh(a), (i = Vt.get(i)) && _c(a, i), u = u.createElement("link"), at(u);
        var f = u;
        f._p = new Promise(function(m, E) {
          f.onload = m, f.onerror = E;
        }), ot(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Vu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var Oc = 0;
  function pg(e, t) {
    return e.stylesheets && e.count === 0 && ku(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && ku(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Oc === 0 && (Oc = 62500 * Wy());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ku(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Oc ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Vu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) ku(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ku = null;
  function ku(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ku = /* @__PURE__ */ new Map(), t.forEach(vg, e), Ku = null, Vu.call(e));
  }
  function vg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ku.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ku.set(e, l);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = l.get(f) || a, u === a && l.set(null, i), l.set(f, i), this.count++, a = Vu.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var fi = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0
  };
  function Eg(e, t, l, a, i, u, f, m, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ar(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ar(0), this.hiddenUpdates = Ar(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ch(e, t, l, a, i, u, f, m, E, N, z, B) {
    return e = new Eg(
      e,
      t,
      l,
      f,
      E,
      N,
      z,
      B,
      m
    ), t = 1, u === !0 && (t |= 24), u = Nt(3, null, null, t), e.current = u, u.stateNode = e, t = ss(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, ds(u), e;
  }
  function oh(e) {
    return e ? (e = Ya, e) : Ya;
  }
  function fh(e, t, l, a, i, u) {
    i = oh(i), a.context === null ? a.context = i : a.pendingContext = i, a = Hl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Bl(e, a, t), l !== null && (St(l, e, t), Vn(l, e, t));
  }
  function dh(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function wc(e, t) {
    dh(e, t), (e = e.alternate) && dh(e, t);
  }
  function hh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sa(e, 67108864);
      t !== null && St(t, e, 67108864), wc(e, 67108864);
    }
  }
  function mh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ut();
      t = xr(t);
      var l = sa(e, t);
      l !== null && St(l, e, t), wc(e, t);
    }
  }
  var Qu = !0;
  function bg(e, t, l, a) {
    var i = G.T;
    G.T = null;
    var u = V.p;
    try {
      V.p = 2, Dc(e, t, l, a);
    } finally {
      V.p = u, G.T = i;
    }
  }
  function Sg(e, t, l, a) {
    var i = G.T;
    G.T = null;
    var u = V.p;
    try {
      V.p = 8, Dc(e, t, l, a);
    } finally {
      V.p = u, G.T = i;
    }
  }
  function Dc(e, t, l, a) {
    if (Qu) {
      var i = Mc(a);
      if (i === null)
        pc(
          e,
          t,
          a,
          Zu,
          l
        ), gh(e, a);
      else if (Tg(
        i,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (gh(e, a), t & 4 && -1 < Rg.indexOf(e)) {
        for (; i !== null; ) {
          var u = wa(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = aa(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var E = 1 << 31 - Ct(f);
                      m.entanglements[1] |= E, f &= ~E;
                    }
                    nl(u), (xe & 6) === 0 && (Ou = At() + 500, ii(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = sa(u, 2), m !== null && St(m, u, 2), Du(), wc(u, 2);
            }
          if (u = Mc(a), u === null && pc(
            e,
            t,
            a,
            Zu,
            l
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        pc(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Mc(e) {
    return e = zr(e), Uc(e);
  }
  var Zu = null;
  function Uc(e) {
    if (Zu = null, e = Oa(e), e !== null) {
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
    return Zu = e, null;
  }
  function yh(e) {
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
        switch (r1()) {
          case Ro:
            return 2;
          case To:
            return 8;
          case Li:
          case s1:
            return 32;
          case Ao:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var zc = !1, $l = null, Fl = null, Wl = null, di = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new Map(), Il = [], Rg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function gh(e, t) {
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
        di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hi.delete(t.pointerId);
    }
  }
  function mi(e, t, l, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = wa(t), t !== null && hh(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Tg(e, t, l, a, i) {
    switch (t) {
      case "focusin":
        return $l = mi(
          $l,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "dragenter":
        return Fl = mi(
          Fl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "mouseover":
        return Wl = mi(
          Wl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return di.set(
          u,
          mi(
            di.get(u) || null,
            e,
            t,
            l,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, hi.set(
          u,
          mi(
            hi.get(u) || null,
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
  function ph(e) {
    var t = Oa(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, wo(e.priority, function() {
              mh(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, wo(e.priority, function() {
              mh(l);
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
  function Ju(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Mc(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Ur = a, l.target.dispatchEvent(a), Ur = null;
      } else
        return t = wa(l), t !== null && hh(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function vh(e, t, l) {
    Ju(e) && l.delete(t);
  }
  function Ag() {
    zc = !1, $l !== null && Ju($l) && ($l = null), Fl !== null && Ju(Fl) && (Fl = null), Wl !== null && Ju(Wl) && (Wl = null), di.forEach(vh), hi.forEach(vh);
  }
  function $u(e, t) {
    e.blockedOn === t && (e.blockedOn = null, zc || (zc = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Ag
    )));
  }
  var Fu = null;
  function Eh(e) {
    Fu !== e && (Fu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Fu === e && (Fu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Uc(a || l) === null)
              continue;
            break;
          }
          var u = wa(l);
          u !== null && (e.splice(t, 3), t -= 3, Ms(
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
  function dn(e) {
    function t(E) {
      return $u(E, e);
    }
    $l !== null && $u($l, e), Fl !== null && $u(Fl, e), Wl !== null && $u(Wl, e), di.forEach(t), hi.forEach(t);
    for (var l = 0; l < Il.length; l++) {
      var a = Il[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Il.length && (l = Il[0], l.blockedOn === null); )
      ph(l), l.blockedOn === null && Il.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var i = l[a], u = l[a + 1], f = i[yt] || null;
        if (typeof u == "function")
          f || Eh(l);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[yt] || null)
              m = f.formAction;
            else if (Uc(i) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), Eh(l);
        }
      }
  }
  function bh() {
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
  function jc(e) {
    this._internalRoot = e;
  }
  Wu.prototype.render = jc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, a = Ut();
    fh(l, a, e, t, null, null);
  }, Wu.prototype.unmount = jc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fh(e.current, 2, null, e, null, null), Du(), t[Na] = null;
    }
  };
  function Wu(e) {
    this._internalRoot = e;
  }
  Wu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Il.length && t !== 0 && t < Il[l].priority; l++) ;
      Il.splice(l, 0, e), l === 0 && ph(e);
    }
  };
  var Sh = s.version;
  if (Sh !== "19.2.3")
    throw Error(
      o(
        527,
        Sh,
        "19.2.3"
      )
    );
  V.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var xg = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber)
      try {
        Tn = Iu.inject(
          xg
        ), xt = Iu;
      } catch {
      }
  }
  return pi.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, a = "", i = Nd, u = Od, f = wd;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = ch(
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
      bh
    ), e[Na] = t.current, gc(e), new jc(t);
  }, pi.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var a = !1, i = "", u = Nd, f = Od, m = wd, E = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (E = l.formState)), t = ch(
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
      bh
    ), t.context = oh(null), l = t.current, a = Ut(), a = xr(a), i = Hl(a), i.callback = null, Bl(l, i, a), l = a, t.current.lanes = l, xn(t, l), nl(t), e[Na] = t.current, gc(e), new Wu(t);
  }, pi.version = "19.2.3", pi;
}
var Hh;
function dv() {
  if (Hh) return Xc.exports;
  Hh = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Xc.exports = fv(), Xc.exports;
}
var hv = dv(), me = /* @__PURE__ */ ((n) => (n.SUCCESS = "success", n.WARNING = "warning", n.ERROR = "error", n.INFO = "info", n))(me || {}), Ft = /* @__PURE__ */ ((n) => (n.PRIMARY = "primary", n.OUTLINE = "outline", n.LINK = "link", n))(Ft || {}), Wt = /* @__PURE__ */ ((n) => (n.BUTTON = "button", n.SUBMIT = "submit", n.RESET = "reset", n))(Wt || {}), Kt = /* @__PURE__ */ ((n) => (n.DEV = "dev", n.TEST = "test", n.STAGE = "stage", n.PROD = "prod", n))(Kt || {}), mo = /* @__PURE__ */ ((n) => (n.TEST = "TEST", n.WEBCOMPONENT = "WEBCOMPONENT", n))(mo || {}), ea = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.STATUS = "status", n))(ea || {}), Ti = /* @__PURE__ */ ((n) => (n.ASSERTIVE = "assertive", n.POLITE = "polite", n.OFF = "off", n))(Ti || {});
const Se = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, $e = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, kc = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, vn = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  GLOBAL_SUBSIDIARIES: "/global/subsidiaries"
}, yo = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, er = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Si = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, hn = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Bh = /[!@#$%^&*._-]/, qh = /^[A-Za-z0-9!@#$%^&*._-]+$/, Ai = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, mv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, vi = {
  COURSES: "/courses"
}, Ke = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, xl = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, yv = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, gv = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, it = {
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
}, pv = {
  EMAIL_NOT_FOUND: "No account found with this email address."
}, ke = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]"
}, Qc = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, Zc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, Jc = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, tr = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, kt = ({
  label: n,
  onClick: r,
  disabled: s,
  type: c = Wt.BUTTON,
  variant: o = Ft.PRIMARY,
  className: d,
  children: h,
  ariaLabel: g,
  mainButtonStyle: p
}) => {
  const y = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", b = {
    [Ft.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [Ft.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [Ft.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
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
}, Sa = A.forwardRef((n, r) => {
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
  } = n, w = !!d || !!h, q = T.type === "select" || !!y, C = b || `input-${Math.random().toString(36).substr(2, 9)}`, j = `${C}-error`, M = `${C}-helper`;
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
          children: y && y.map((Y) => /* @__PURE__ */ v.jsx("option", { value: Y.value, children: Y.label }, Y.value))
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
        id: M,
        role: "status",
        "aria-live": "polite",
        className: "text-[#d64545] text-[13px]! mt-1.5! text-left!",
        children: h
      }
    )
  ] });
}), vv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", mn = ({
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
        return /* @__PURE__ */ v.jsx("img", { src: vv, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g(), b = () => {
    switch (n) {
      case me.ERROR:
        return ea.ALERT;
      case me.WARNING:
      case me.INFO:
        return ea.STATUS;
      case me.SUCCESS:
        return ea.STATUS;
      default:
        return ea.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      role: b(),
      "aria-live": n === me.ERROR ? Ti.ASSERTIVE : Ti.POLITE,
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
}, to = ({ type: n, message: r, duration: s = 5e3, onClose: c, className: o = "" }) => {
  const [d, h] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => h(!0), Ai.ANIMATION_ENTRANCE_DELAY);
    const C = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(C);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), c && c();
    }, Ai.ANIMATION_EXIT_DURATION);
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
        return ea.ALERT;
      case me.WARNING:
      case me.INFO:
      case me.SUCCESS:
        return ea.STATUS;
      default:
        return ea.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      role: q(),
      "aria-live": n === me.ERROR ? Ti.ASSERTIVE : Ti.POLITE,
      "aria-atomic": "true",
      className: `fixed! top-4! right-4! z-[${Qc.Z_INDEX}]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: Qc.MAX_WIDTH, width: Qc.WIDTH },
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
}, wm = () => /* @__PURE__ */ v.jsx(
  "span",
  {
    className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Loading..." })
  }
);
class bi extends Error {
}
bi.prototype.name = "InvalidTokenError";
function Ev(n) {
  return decodeURIComponent(atob(n).replace(/(.)/g, (r, s) => {
    let c = s.charCodeAt(0).toString(16).toUpperCase();
    return c.length < 2 && (c = "0" + c), "%" + c;
  }));
}
function bv(n) {
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
    return Ev(r);
  } catch {
    return atob(r);
  }
}
function Oi(n, r) {
  if (typeof n != "string")
    throw new bi("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, c = n.split(".")[s];
  if (typeof c != "string")
    throw new bi(`Invalid token specified: missing part #${s + 1}`);
  let o;
  try {
    o = bv(c);
  } catch (d) {
    throw new bi(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new bi(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Dm() {
  const n = window.location.hostname;
  if (n === xl.HOSTNAME || n === xl.IP || xl.IP_PATTERN.test(n))
    return "";
  const r = n.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Sv() {
  const n = window.location.hostname;
  return n === xl.HOSTNAME || n === xl.IP || xl.IP_PATTERN.test(n) || n.startsWith(`${Ke.DEV}.`) || n.startsWith(`${Ke.DEV}-`) ? Kt.DEV : n.startsWith(`${Ke.TEST}.`) || n.startsWith(`${Ke.TEST}-`) ? Kt.TEST : n.startsWith(`${Ke.STAGE}.`) || n.startsWith(`${Ke.STAGE}-`) ? Kt.STAGE : Kt.PROD;
}
function lr() {
  const n = window.location.href, r = new URL(n), s = r.hostname;
  if (s.startsWith(`${Ke.DEV}.`)) {
    const c = s.replace(`${Ke.DEV}.`, `${Ke.DEV_LEARN}.`);
    return `${r.protocol}//${c}${vi.COURSES}`;
  } else if (s.startsWith(`${Ke.TEST}.`)) {
    const c = s.replace(`${Ke.TEST}.`, `${Ke.TEST_LEARN}.`);
    return `${r.protocol}//${c}${vi.COURSES}`;
  } else if (s.startsWith(`${Ke.STAGE}.`)) {
    const c = s.replace(`${Ke.STAGE}.`, `${Ke.STAGE_LEARN}.`);
    return `${r.protocol}//${c}${vi.COURSES}`;
  } else if (s.split(".").length === 2) {
    const o = `${Ke.LEARN}.${s}`;
    return `${r.protocol}//${o}${vi.COURSES}`;
  } else
    return `${r.protocol}//${s}${vi.COURSES}`;
}
function Ra(n, r, s, c = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + s);
  const d = Dm(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = c ? encodeURIComponent(r) : r;
  document.cookie = `${n}=${p}; expires=${o.toUTCString()}; path=/${h}${g}; SameSite=Lax`;
}
function It(n, r = !0) {
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
function $c(n) {
  const r = Dm(), s = r ? `; domain=${r}` : "";
  document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function Mm(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}
var Gh = {};
const { toString: Rv } = Object.prototype, { getPrototypeOf: go } = Object, { iterator: yr, toStringTag: Um } = Symbol, gr = /* @__PURE__ */ ((n) => (r) => {
  const s = Rv.call(r);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), el = (n) => (n = n.toLowerCase(), (r) => gr(r) === n), pr = (n) => (r) => typeof r === n, { isArray: En } = Array, yn = pr("undefined");
function wi(n) {
  return n !== null && !yn(n) && n.constructor !== null && !yn(n.constructor) && Rt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const zm = el("ArrayBuffer");
function Tv(n) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && zm(n.buffer), r;
}
const Av = pr("string"), Rt = pr("function"), jm = pr("number"), Di = (n) => n !== null && typeof n == "object", xv = (n) => n === !0 || n === !1, ur = (n) => {
  if (gr(n) !== "object")
    return !1;
  const r = go(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Um in n) && !(yr in n);
}, Cv = (n) => {
  if (!Di(n) || wi(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, _v = el("Date"), Nv = el("File"), Ov = el("Blob"), wv = el("FileList"), Dv = (n) => Di(n) && Rt(n.pipe), Mv = (n) => {
  let r;
  return n && (typeof FormData == "function" && n instanceof FormData || Rt(n.append) && ((r = gr(n)) === "formdata" || // detect form-data instance
  r === "object" && Rt(n.toString) && n.toString() === "[object FormData]"));
}, Uv = el("URLSearchParams"), [zv, jv, Lv, Hv] = ["ReadableStream", "Request", "Response", "Headers"].map(el), Bv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mi(n, r, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let c, o;
  if (typeof n != "object" && (n = [n]), En(n))
    for (c = 0, o = n.length; c < o; c++)
      r.call(null, n[c], c, n);
  else {
    if (wi(n))
      return;
    const d = s ? Object.getOwnPropertyNames(n) : Object.keys(n), h = d.length;
    let g;
    for (c = 0; c < h; c++)
      g = d[c], r.call(null, n[g], g, n);
  }
}
function Lm(n, r) {
  if (wi(n))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(n);
  let c = s.length, o;
  for (; c-- > 0; )
    if (o = s[c], r === o.toLowerCase())
      return o;
  return null;
}
const Ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Hm = (n) => !yn(n) && n !== Ta;
function lo() {
  const { caseless: n, skipUndefined: r } = Hm(this) && this || {}, s = {}, c = (o, d) => {
    const h = n && Lm(s, d) || d;
    ur(s[h]) && ur(o) ? s[h] = lo(s[h], o) : ur(o) ? s[h] = lo({}, o) : En(o) ? s[h] = o.slice() : (!r || !yn(o)) && (s[h] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && Mi(arguments[o], c);
  return s;
}
const qv = (n, r, s, { allOwnKeys: c } = {}) => (Mi(r, (o, d) => {
  s && Rt(o) ? n[d] = Mm(o, s) : n[d] = o;
}, { allOwnKeys: c }), n), Gv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Yv = (n, r, s, c) => {
  n.prototype = Object.create(r.prototype, c), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: r.prototype
  }), s && Object.assign(n.prototype, s);
}, Xv = (n, r, s, c) => {
  let o, d, h;
  const g = {};
  if (r = r || {}, n == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(n), d = o.length; d-- > 0; )
      h = o[d], (!c || c(h, n, r)) && !g[h] && (r[h] = n[h], g[h] = !0);
    n = s !== !1 && go(n);
  } while (n && (!s || s(n, r)) && n !== Object.prototype);
  return r;
}, Vv = (n, r, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= r.length;
  const c = n.indexOf(r, s);
  return c !== -1 && c === s;
}, Kv = (n) => {
  if (!n) return null;
  if (En(n)) return n;
  let r = n.length;
  if (!jm(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = n[r];
  return s;
}, kv = /* @__PURE__ */ ((n) => (r) => n && r instanceof n)(typeof Uint8Array < "u" && go(Uint8Array)), Qv = (n, r) => {
  const c = (n && n[yr]).call(n);
  let o;
  for (; (o = c.next()) && !o.done; ) {
    const d = o.value;
    r.call(n, d[0], d[1]);
  }
}, Zv = (n, r) => {
  let s;
  const c = [];
  for (; (s = n.exec(r)) !== null; )
    c.push(s);
  return c;
}, Jv = el("HTMLFormElement"), $v = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, c, o) {
    return c.toUpperCase() + o;
  }
), Yh = (({ hasOwnProperty: n }) => (r, s) => n.call(r, s))(Object.prototype), Fv = el("RegExp"), Bm = (n, r) => {
  const s = Object.getOwnPropertyDescriptors(n), c = {};
  Mi(s, (o, d) => {
    let h;
    (h = r(o, d, n)) !== !1 && (c[d] = h || o);
  }), Object.defineProperties(n, c);
}, Wv = (n) => {
  Bm(n, (r, s) => {
    if (Rt(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const c = n[s];
    if (Rt(c)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Iv = (n, r) => {
  const s = {}, c = (o) => {
    o.forEach((d) => {
      s[d] = !0;
    });
  };
  return En(n) ? c(n) : c(String(n).split(r)), s;
}, Pv = () => {
}, eE = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;
function tE(n) {
  return !!(n && Rt(n.append) && n[Um] === "FormData" && n[yr]);
}
const lE = (n) => {
  const r = new Array(10), s = (c, o) => {
    if (Di(c)) {
      if (r.indexOf(c) >= 0)
        return;
      if (wi(c))
        return c;
      if (!("toJSON" in c)) {
        r[o] = c;
        const d = En(c) ? [] : {};
        return Mi(c, (h, g) => {
          const p = s(h, o + 1);
          !yn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return c;
  };
  return s(n, 0);
}, aE = el("AsyncFunction"), nE = (n) => n && (Di(n) || Rt(n)) && Rt(n.then) && Rt(n.catch), qm = ((n, r) => n ? setImmediate : r ? ((s, c) => (Ta.addEventListener("message", ({ source: o, data: d }) => {
  o === Ta && d === s && c.length && c.shift()();
}, !1), (o) => {
  c.push(o), Ta.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Rt(Ta.postMessage)
), iE = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ta) : typeof Gh < "u" && Gh.nextTick || qm, uE = (n) => n != null && Rt(n[yr]), D = {
  isArray: En,
  isArrayBuffer: zm,
  isBuffer: wi,
  isFormData: Mv,
  isArrayBufferView: Tv,
  isString: Av,
  isNumber: jm,
  isBoolean: xv,
  isObject: Di,
  isPlainObject: ur,
  isEmptyObject: Cv,
  isReadableStream: zv,
  isRequest: jv,
  isResponse: Lv,
  isHeaders: Hv,
  isUndefined: yn,
  isDate: _v,
  isFile: Nv,
  isBlob: Ov,
  isRegExp: Fv,
  isFunction: Rt,
  isStream: Dv,
  isURLSearchParams: Uv,
  isTypedArray: kv,
  isFileList: wv,
  forEach: Mi,
  merge: lo,
  extend: qv,
  trim: Bv,
  stripBOM: Gv,
  inherits: Yv,
  toFlatObject: Xv,
  kindOf: gr,
  kindOfTest: el,
  endsWith: Vv,
  toArray: Kv,
  forEachEntry: Qv,
  matchAll: Zv,
  isHTMLForm: Jv,
  hasOwnProperty: Yh,
  hasOwnProp: Yh,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Bm,
  freezeMethods: Wv,
  toObjectSet: Iv,
  toCamelCase: $v,
  noop: Pv,
  toFiniteNumber: eE,
  findKey: Lm,
  global: Ta,
  isContextDefined: Hm,
  isSpecCompliantForm: tE,
  toJSONObject: lE,
  isAsyncFn: aE,
  isThenable: nE,
  setImmediate: qm,
  asap: iE,
  isIterable: uE
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
const Gm = re.prototype, Ym = {};
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
  Ym[n] = { value: n };
});
Object.defineProperties(re, Ym);
Object.defineProperty(Gm, "isAxiosError", { value: !0 });
re.from = (n, r, s, c, o, d) => {
  const h = Object.create(Gm);
  D.toFlatObject(n, h, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = n && n.message ? n.message : "Error", p = r == null && n ? n.code : r;
  return re.call(h, g, p, s, c, o), n && h.cause == null && Object.defineProperty(h, "cause", { value: n, configurable: !0 }), h.name = n && n.name || "Error", d && Object.assign(h, d), h;
};
const rE = null;
function ao(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function Xm(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function Xh(n, r, s) {
  return n ? n.concat(r).map(function(o, d) {
    return o = Xm(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : r;
}
function sE(n) {
  return D.isArray(n) && !n.some(ao);
}
const cE = D.toFlatObject(D, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function vr(n, r, s) {
  if (!D.isObject(n))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = D.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(j, M) {
    return !D.isUndefined(M[j]);
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
  function b(C, j, M) {
    let Y = C;
    if (C && !M && typeof C == "object") {
      if (D.endsWith(j, "{}"))
        j = c ? j : j.slice(0, -2), C = JSON.stringify(C);
      else if (D.isArray(C) && sE(C) || (D.isFileList(C) || D.endsWith(j, "[]")) && (Y = D.toArray(C)))
        return j = Xm(j), Y.forEach(function($, W) {
          !(D.isUndefined($) || $ === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? Xh([j], W, d) : h === null ? j : j + "[]",
            y($)
          );
        }), !1;
    }
    return ao(C) ? !0 : (r.append(Xh(M, j, d), y(C)), !1);
  }
  const T = [], w = Object.assign(cE, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: ao
  });
  function q(C, j) {
    if (!D.isUndefined(C)) {
      if (T.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + j.join("."));
      T.push(C), D.forEach(C, function(Y, Q) {
        (!(D.isUndefined(Y) || Y === null) && o.call(
          r,
          Y,
          D.isString(Q) ? Q.trim() : Q,
          j,
          w
        )) === !0 && q(Y, j ? j.concat(Q) : [Q]);
      }), T.pop();
    }
  }
  if (!D.isObject(n))
    throw new TypeError("data must be an object");
  return q(n), r;
}
function Vh(n) {
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
function po(n, r) {
  this._pairs = [], n && vr(n, this, r);
}
const Vm = po.prototype;
Vm.append = function(r, s) {
  this._pairs.push([r, s]);
};
Vm.toString = function(r) {
  const s = r ? function(c) {
    return r.call(this, c, Vh);
  } : Vh;
  return this._pairs.map(function(o) {
    return s(o[0]) + "=" + s(o[1]);
  }, "").join("&");
};
function oE(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Km(n, r, s) {
  if (!r)
    return n;
  const c = s && s.encode || oE;
  D.isFunction(s) && (s = {
    serialize: s
  });
  const o = s && s.serialize;
  let d;
  if (o ? d = o(r, s) : d = D.isURLSearchParams(r) ? r.toString() : new po(r, s).toString(c), d) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return n;
}
class Kh {
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
const km = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fE = typeof URLSearchParams < "u" ? URLSearchParams : po, dE = typeof FormData < "u" ? FormData : null, hE = typeof Blob < "u" ? Blob : null, mE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fE,
    FormData: dE,
    Blob: hE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, vo = typeof window < "u" && typeof document < "u", no = typeof navigator == "object" && navigator || void 0, yE = vo && (!no || ["ReactNative", "NativeScript", "NS"].indexOf(no.product) < 0), gE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pE = vo && window.location.href || "http://localhost", vE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: vo,
  hasStandardBrowserEnv: yE,
  hasStandardBrowserWebWorkerEnv: gE,
  navigator: no,
  origin: pE
}, Symbol.toStringTag, { value: "Module" })), ht = {
  ...vE,
  ...mE
};
function EE(n, r) {
  return vr(n, new ht.classes.URLSearchParams(), {
    visitor: function(s, c, o, d) {
      return ht.isNode && D.isBuffer(s) ? (this.append(c, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function bE(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function SE(n) {
  const r = {}, s = Object.keys(n);
  let c;
  const o = s.length;
  let d;
  for (c = 0; c < o; c++)
    d = s[c], r[d] = n[d];
  return r;
}
function Qm(n) {
  function r(s, c, o, d) {
    let h = s[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= s.length;
    return h = !h && D.isArray(o) ? o.length : h, p ? (D.hasOwnProp(o, h) ? o[h] = [o[h], c] : o[h] = c, !g) : ((!o[h] || !D.isObject(o[h])) && (o[h] = []), r(s, c, o[h], d) && D.isArray(o[h]) && (o[h] = SE(o[h])), !g);
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const s = {};
    return D.forEachEntry(n, (c, o) => {
      r(bE(c), o, s, 0);
    }), s;
  }
  return null;
}
function RE(n, r, s) {
  if (D.isString(n))
    try {
      return (r || JSON.parse)(n), D.trim(n);
    } catch (c) {
      if (c.name !== "SyntaxError")
        throw c;
    }
  return (s || JSON.stringify)(n);
}
const Ui = {
  transitional: km,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const c = s.getContentType() || "", o = c.indexOf("application/json") > -1, d = D.isObject(r);
    if (d && D.isHTMLForm(r) && (r = new FormData(r)), D.isFormData(r))
      return o ? JSON.stringify(Qm(r)) : r;
    if (D.isArrayBuffer(r) || D.isBuffer(r) || D.isStream(r) || D.isFile(r) || D.isBlob(r) || D.isReadableStream(r))
      return r;
    if (D.isArrayBufferView(r))
      return r.buffer;
    if (D.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (c.indexOf("application/x-www-form-urlencoded") > -1)
        return EE(r, this.formSerializer).toString();
      if ((g = D.isFileList(r)) || c.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return vr(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (s.setContentType("application/json", !1), RE(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || Ui.transitional, c = s && s.forcedJSONParsing, o = this.responseType === "json";
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
    FormData: ht.classes.FormData,
    Blob: ht.classes.Blob
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
  Ui.headers[n] = {};
});
const TE = D.toObjectSet([
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
]), AE = (n) => {
  const r = {};
  let s, c, o;
  return n && n.split(`
`).forEach(function(h) {
    o = h.indexOf(":"), s = h.substring(0, o).trim().toLowerCase(), c = h.substring(o + 1).trim(), !(!s || r[s] && TE[s]) && (s === "set-cookie" ? r[s] ? r[s].push(c) : r[s] = [c] : r[s] = r[s] ? r[s] + ", " + c : c);
  }), r;
}, kh = /* @__PURE__ */ Symbol("internals");
function Ei(n) {
  return n && String(n).trim().toLowerCase();
}
function rr(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(rr) : String(n);
}
function xE(n) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let c;
  for (; c = s.exec(n); )
    r[c[1]] = c[2];
  return r;
}
const CE = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function Fc(n, r, s, c, o) {
  if (D.isFunction(c))
    return c.call(this, r, s);
  if (o && (r = s), !!D.isString(r)) {
    if (D.isString(c))
      return r.indexOf(c) !== -1;
    if (D.isRegExp(c))
      return c.test(r);
  }
}
function _E(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, c) => s.toUpperCase() + c);
}
function NE(n, r) {
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
let Tt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, c) {
    const o = this;
    function d(g, p, y) {
      const b = Ei(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const T = D.findKey(o, b);
      (!T || o[T] === void 0 || y === !0 || y === void 0 && o[T] !== !1) && (o[T || p] = rr(g));
    }
    const h = (g, p) => D.forEach(g, (y, b) => d(y, b, p));
    if (D.isPlainObject(r) || r instanceof this.constructor)
      h(r, s);
    else if (D.isString(r) && (r = r.trim()) && !CE(r))
      h(AE(r), s);
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
    if (r = Ei(r), r) {
      const c = D.findKey(this, r);
      if (c) {
        const o = this[c];
        if (!s)
          return o;
        if (s === !0)
          return xE(o);
        if (D.isFunction(s))
          return s.call(this, o, c);
        if (D.isRegExp(s))
          return s.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = Ei(r), r) {
      const c = D.findKey(this, r);
      return !!(c && this[c] !== void 0 && (!s || Fc(this, this[c], c, s)));
    }
    return !1;
  }
  delete(r, s) {
    const c = this;
    let o = !1;
    function d(h) {
      if (h = Ei(h), h) {
        const g = D.findKey(c, h);
        g && (!s || Fc(c, c[g], g, s)) && (delete c[g], o = !0);
      }
    }
    return D.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const s = Object.keys(this);
    let c = s.length, o = !1;
    for (; c--; ) {
      const d = s[c];
      (!r || Fc(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const s = this, c = {};
    return D.forEach(this, (o, d) => {
      const h = D.findKey(c, d);
      if (h) {
        s[h] = rr(o), delete s[d];
        return;
      }
      const g = r ? _E(d) : String(d).trim();
      g !== d && delete s[d], s[g] = rr(o), c[g] = !0;
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
    const c = (this[kh] = this[kh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(h) {
      const g = Ei(h);
      c[g] || (NE(o, h), c[g] = !0);
    }
    return D.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
Tt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(Tt.prototype, ({ value: n }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(c) {
      this[s] = c;
    }
  };
});
D.freezeMethods(Tt);
function Wc(n, r) {
  const s = this || Ui, c = r || s, o = Tt.from(c.headers);
  let d = c.data;
  return D.forEach(n, function(g) {
    d = g.call(s, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function Zm(n) {
  return !!(n && n.__CANCEL__);
}
function bn(n, r, s) {
  re.call(this, n ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
D.inherits(bn, re, {
  __CANCEL__: !0
});
function Jm(n, r, s) {
  const c = s.config.validateStatus;
  !s.status || !c || c(s.status) ? n(s) : r(new re(
    "Request failed with status code " + s.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function OE(n) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return r && r[1] || "";
}
function wE(n, r) {
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
function DE(n, r) {
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
const fr = (n, r, s = 3) => {
  let c = 0;
  const o = wE(50, 250);
  return DE((d) => {
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
}, Qh = (n, r) => {
  const s = n != null;
  return [(c) => r[0]({
    lengthComputable: s,
    total: n,
    loaded: c
  }), r[1]];
}, Zh = (n) => (...r) => D.asap(() => n(...r)), ME = ht.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, r) => (s) => (s = new URL(s, ht.origin), n.protocol === s.protocol && n.host === s.host && (r || n.port === s.port)))(
  new URL(ht.origin),
  ht.navigator && /(msie|trident)/i.test(ht.navigator.userAgent)
) : () => !0, UE = ht.hasStandardBrowserEnv ? (
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
function zE(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function jE(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}
function $m(n, r, s) {
  let c = !zE(r);
  return n && (c || s == !1) ? jE(n, r) : r;
}
const Jh = (n) => n instanceof Tt ? { ...n } : n;
function xa(n, r) {
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
    headers: (y, b, T) => o(Jh(y), Jh(b), T, !0)
  };
  return D.forEach(Object.keys({ ...n, ...r }), function(b) {
    const T = p[b] || o, w = T(n[b], r[b], b);
    D.isUndefined(w) && T !== g || (s[b] = w);
  }), s;
}
const Fm = (n) => {
  const r = xa({}, n);
  let { data: s, withXSRFToken: c, xsrfHeaderName: o, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = Tt.from(h), r.url = Km($m(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), D.isFormData(s)) {
    if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (D.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, T]) => {
        y.includes(b.toLowerCase()) && h.set(b, T);
      });
    }
  }
  if (ht.hasStandardBrowserEnv && (c && D.isFunction(c) && (c = c(r)), c || c !== !1 && ME(r.url))) {
    const p = o && d && UE.read(d);
    p && h.set(o, p);
  }
  return r;
}, LE = typeof XMLHttpRequest < "u", HE = LE && function(n) {
  return new Promise(function(s, c) {
    const o = Fm(n);
    let d = o.data;
    const h = Tt.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, T, w, q, C;
    function j() {
      q && q(), C && C(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let M = new XMLHttpRequest();
    M.open(o.method.toUpperCase(), o.url, !0), M.timeout = o.timeout;
    function Y() {
      if (!M)
        return;
      const $ = Tt.from(
        "getAllResponseHeaders" in M && M.getAllResponseHeaders()
      ), te = {
        data: !g || g === "text" || g === "json" ? M.responseText : M.response,
        status: M.status,
        statusText: M.statusText,
        headers: $,
        config: n,
        request: M
      };
      Jm(function(ie) {
        s(ie), j();
      }, function(ie) {
        c(ie), j();
      }, te), M = null;
    }
    "onloadend" in M ? M.onloadend = Y : M.onreadystatechange = function() {
      !M || M.readyState !== 4 || M.status === 0 && !(M.responseURL && M.responseURL.indexOf("file:") === 0) || setTimeout(Y);
    }, M.onabort = function() {
      M && (c(new re("Request aborted", re.ECONNABORTED, n, M)), M = null);
    }, M.onerror = function(W) {
      const te = W && W.message ? W.message : "Network Error", ye = new re(te, re.ERR_NETWORK, n, M);
      ye.event = W || null, c(ye), M = null;
    }, M.ontimeout = function() {
      let W = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const te = o.transitional || km;
      o.timeoutErrorMessage && (W = o.timeoutErrorMessage), c(new re(
        W,
        te.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        n,
        M
      )), M = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in M && D.forEach(h.toJSON(), function(W, te) {
      M.setRequestHeader(te, W);
    }), D.isUndefined(o.withCredentials) || (M.withCredentials = !!o.withCredentials), g && g !== "json" && (M.responseType = o.responseType), y && ([w, C] = fr(y, !0), M.addEventListener("progress", w)), p && M.upload && ([T, q] = fr(p), M.upload.addEventListener("progress", T), M.upload.addEventListener("loadend", q)), (o.cancelToken || o.signal) && (b = ($) => {
      M && (c(!$ || $.type ? new bn(null, n, M) : $), M.abort(), M = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const Q = OE(o.url);
    if (Q && ht.protocols.indexOf(Q) === -1) {
      c(new re("Unsupported protocol " + Q + ":", re.ERR_BAD_REQUEST, n));
      return;
    }
    M.send(d || null);
  });
}, BE = (n, r) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (r || s) {
    let c = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        c.abort(b instanceof re ? b : new bn(b instanceof Error ? b.message : b));
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
}, qE = function* (n, r) {
  let s = n.byteLength;
  if (s < r) {
    yield n;
    return;
  }
  let c = 0, o;
  for (; c < s; )
    o = c + r, yield n.slice(c, o), c = o;
}, GE = async function* (n, r) {
  for await (const s of YE(n))
    yield* qE(s, r);
}, YE = async function* (n) {
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
}, $h = (n, r, s, c) => {
  const o = GE(n, r);
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
}, Fh = 64 * 1024, { isFunction: ar } = D, XE = (({ Request: n, Response: r }) => ({
  Request: n,
  Response: r
}))(D.global), {
  ReadableStream: Wh,
  TextEncoder: Ih
} = D.global, Ph = (n, ...r) => {
  try {
    return !!n(...r);
  } catch {
    return !1;
  }
}, VE = (n) => {
  n = D.merge.call({
    skipUndefined: !0
  }, XE, n);
  const { fetch: r, Request: s, Response: c } = n, o = r ? ar(r) : typeof fetch == "function", d = ar(s), h = ar(c);
  if (!o)
    return !1;
  const g = o && ar(Wh), p = o && (typeof Ih == "function" ? /* @__PURE__ */ ((C) => (j) => C.encode(j))(new Ih()) : async (C) => new Uint8Array(await new s(C).arrayBuffer())), y = d && g && Ph(() => {
    let C = !1;
    const j = new s(ht.origin, {
      body: new Wh(),
      method: "POST",
      get duplex() {
        return C = !0, "half";
      }
    }).headers.has("Content-Type");
    return C && !j;
  }), b = h && g && Ph(() => D.isReadableStream(new c("").body)), T = {
    stream: b && ((C) => C.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
    !T[C] && (T[C] = (j, M) => {
      let Y = j && j[C];
      if (Y)
        return Y.call(j);
      throw new re(`Response type '${C}' is not supported`, re.ERR_NOT_SUPPORT, M);
    });
  });
  const w = async (C) => {
    if (C == null)
      return 0;
    if (D.isBlob(C))
      return C.size;
    if (D.isSpecCompliantForm(C))
      return (await new s(ht.origin, {
        method: "POST",
        body: C
      }).arrayBuffer()).byteLength;
    if (D.isArrayBufferView(C) || D.isArrayBuffer(C))
      return C.byteLength;
    if (D.isURLSearchParams(C) && (C = C + ""), D.isString(C))
      return (await p(C)).byteLength;
  }, q = async (C, j) => {
    const M = D.toFiniteNumber(C.getContentLength());
    return M ?? w(j);
  };
  return async (C) => {
    let {
      url: j,
      method: M,
      data: Y,
      signal: Q,
      cancelToken: $,
      timeout: W,
      onDownloadProgress: te,
      onUploadProgress: ye,
      responseType: ie,
      headers: P,
      withCredentials: le = "same-origin",
      fetchOptions: se
    } = Fm(C), Me = r || fetch;
    ie = ie ? (ie + "").toLowerCase() : "text";
    let ge = BE([Q, $ && $.toAbortSignal()], W), qe = null;
    const Qe = ge && ge.unsubscribe && (() => {
      ge.unsubscribe();
    });
    let Fe;
    try {
      if (ye && y && M !== "get" && M !== "head" && (Fe = await q(P, Y)) !== 0) {
        let Ce = new s(j, {
          method: "POST",
          body: Y,
          duplex: "half"
        }), S;
        if (D.isFormData(Y) && (S = Ce.headers.get("content-type")) && P.setContentType(S), Ce.body) {
          const [H, k] = Qh(
            Fe,
            fr(Zh(ye))
          );
          Y = $h(Ce.body, Fh, H, k);
        }
      }
      D.isString(le) || (le = le ? "include" : "omit");
      const X = d && "credentials" in s.prototype, G = {
        ...se,
        signal: ge,
        method: M.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: Y,
        duplex: "half",
        credentials: X ? le : void 0
      };
      qe = d && new s(j, G);
      let V = await (d ? Me(qe, se) : Me(j, G));
      const fe = b && (ie === "stream" || ie === "response");
      if (b && (te || fe && Qe)) {
        const Ce = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Ce[Z] = V[Z];
        });
        const S = D.toFiniteNumber(V.headers.get("content-length")), [H, k] = te && Qh(
          S,
          fr(Zh(te), !0)
        ) || [];
        V = new c(
          $h(V.body, Fh, H, () => {
            k && k(), Qe && Qe();
          }),
          Ce
        );
      }
      ie = ie || "text";
      let Ae = await T[D.findKey(T, ie) || "text"](V, C);
      return !fe && Qe && Qe(), await new Promise((Ce, S) => {
        Jm(Ce, S, {
          data: Ae,
          headers: Tt.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: C,
          request: qe
        });
      });
    } catch (X) {
      throw Qe && Qe(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, C, qe),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, C, qe);
    }
  };
}, KE = /* @__PURE__ */ new Map(), Wm = (n) => {
  let r = n && n.env || {};
  const { fetch: s, Request: c, Response: o } = r, d = [
    c,
    o,
    s
  ];
  let h = d.length, g = h, p, y, b = KE;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : VE(r)), b = y;
  return y;
};
Wm();
const Eo = {
  http: rE,
  xhr: HE,
  fetch: {
    get: Wm
  }
};
D.forEach(Eo, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const em = (n) => `- ${n}`, kE = (n) => D.isFunction(n) || n === null || n === !1;
function QE(n, r) {
  n = D.isArray(n) ? n : [n];
  const { length: s } = n;
  let c, o;
  const d = {};
  for (let h = 0; h < s; h++) {
    c = n[h];
    let g;
    if (o = c, !kE(c) && (o = Eo[(g = String(c)).toLowerCase()], o === void 0))
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
` + h.map(em).join(`
`) : " " + em(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const Im = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: QE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Eo
};
function Ic(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new bn(null, n);
}
function tm(n) {
  return Ic(n), n.headers = Tt.from(n.headers), n.data = Wc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), Im.getAdapter(n.adapter || Ui.adapter, n)(n).then(function(c) {
    return Ic(n), c.data = Wc.call(
      n,
      n.transformResponse,
      c
    ), c.headers = Tt.from(c.headers), c;
  }, function(c) {
    return Zm(c) || (Ic(n), c && c.response && (c.response.data = Wc.call(
      n,
      n.transformResponse,
      c.response
    ), c.response.headers = Tt.from(c.response.headers))), Promise.reject(c);
  });
}
const Pm = "1.13.2", Er = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
  Er[n] = function(c) {
    return typeof c === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
const lm = {};
Er.transitional = function(r, s, c) {
  function o(d, h) {
    return "[Axios v" + Pm + "] Transitional option '" + d + "'" + h + (c ? ". " + c : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        o(h, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !lm[h] && (lm[h] = !0, console.warn(
      o(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
Er.spelling = function(r) {
  return (s, c) => (console.warn(`${c} is likely a misspelling of ${r}`), !0);
};
function ZE(n, r, s) {
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
const sr = {
  assertOptions: ZE,
  validators: Er
}, il = sr.validators;
let Aa = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Kh(),
      response: new Kh()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = xa(this.defaults, s);
    const { transitional: c, paramsSerializer: o, headers: d } = s;
    c !== void 0 && sr.assertOptions(c, {
      silentJSONParsing: il.transitional(il.boolean),
      forcedJSONParsing: il.transitional(il.boolean),
      clarifyTimeoutError: il.transitional(il.boolean)
    }, !1), o != null && (D.isFunction(o) ? s.paramsSerializer = {
      serialize: o
    } : sr.assertOptions(o, {
      encode: il.function,
      serialize: il.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), sr.assertOptions(s, {
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
    ), s.headers = Tt.concat(h, d);
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
      const C = [tm.bind(this), void 0];
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
      } catch (M) {
        j.call(this, M);
        break;
      }
    }
    try {
      b = tm.call(this, q);
    } catch (C) {
      return Promise.reject(C);
    }
    for (T = 0, w = y.length; T < w; )
      b = b.then(y[T++], y[T++]);
    return b;
  }
  getUri(r) {
    r = xa(this.defaults, r);
    const s = $m(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Km(s, r.params, r.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(r) {
  Aa.prototype[r] = function(s, c) {
    return this.request(xa(c || {}, {
      method: r,
      url: s,
      data: (c || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(r) {
  function s(c) {
    return function(d, h, g) {
      return this.request(xa(g || {}, {
        method: r,
        headers: c ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  Aa.prototype[r] = s(), Aa.prototype[r + "Form"] = s(!0);
});
let JE = class e1 {
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
      c.reason || (c.reason = new bn(d, h, g), s(c.reason));
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
      token: new e1(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function $E(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function FE(n) {
  return D.isObject(n) && n.isAxiosError === !0;
}
const io = {
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
Object.entries(io).forEach(([n, r]) => {
  io[r] = n;
});
function t1(n) {
  const r = new Aa(n), s = Mm(Aa.prototype.request, r);
  return D.extend(s, Aa.prototype, r, { allOwnKeys: !0 }), D.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(o) {
    return t1(xa(n, o));
  }, s;
}
const ze = t1(Ui);
ze.Axios = Aa;
ze.CanceledError = bn;
ze.CancelToken = JE;
ze.isCancel = Zm;
ze.VERSION = Pm;
ze.toFormData = vr;
ze.AxiosError = re;
ze.Cancel = ze.CanceledError;
ze.all = function(r) {
  return Promise.all(r);
};
ze.spread = $E;
ze.isAxiosError = FE;
ze.mergeConfig = xa;
ze.AxiosHeaders = Tt;
ze.formToJSON = (n) => Qm(D.isHTMLForm(n) ? new FormData(n) : n);
ze.getAdapter = Im.getAdapter;
ze.HttpStatusCode = io;
ze.default = ze;
const {
  Axios: pb,
  AxiosError: vb,
  CanceledError: Eb,
  isCancel: bb,
  CancelToken: Sb,
  VERSION: Rb,
  all: Tb,
  Cancel: Ab,
  isAxiosError: xb,
  spread: Cb,
  toFormData: _b,
  AxiosHeaders: Nb,
  HttpStatusCode: Ob,
  formToJSON: wb,
  getAdapter: Db,
  mergeConfig: Mb
} = ze, l1 = "WEBCOMPONENT";
function WE(n) {
  n ? localStorage.setItem(Se.AUTHORITY_OVERRIDE, n) : localStorage.removeItem(Se.AUTHORITY_OVERRIDE);
}
function IE() {
  return localStorage.getItem(Se.AUTHORITY_OVERRIDE);
}
function am() {
  localStorage.removeItem(Se.AUTHORITY_OVERRIDE);
}
function PE() {
  const n = IE();
  if (n && Object.values(Kt).includes(n))
    return n;
  const r = window.location.hostname;
  return r === xl.HOSTNAME || r === xl.IP || xl.IP_PATTERN.test(r) || r.startsWith(`${Ke.DEV}.`) || r.startsWith(`${Ke.DEV}-`) ? Kt.DEV : r.startsWith(`${Ke.TEST}.`) || r.startsWith(`${Ke.TEST}-`) ? Kt.TEST : r.startsWith(`${Ke.STAGE}.`) || r.startsWith(`${Ke.STAGE}-`) ? Kt.STAGE : Kt.PROD;
}
function eb(n) {
  if (l1 === mo.TEST)
    return "";
  const r = PE();
  return n.startsWith("/global") ? gv[r] : yv[r];
}
const Sn = (n) => {
  const r = n.startsWith("/") ? n : `/${n}`;
  return l1 === mo.TEST ? r : `${eb(r)}${r}`;
}, tb = async (n) => {
  try {
    return (await ze.get(Sn(vn.GLOBAL_SUBSIDIARIES)))?.data?.find(
      (c) => c?.siteURL?.includes(n)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function zi() {
  const n = localStorage.getItem(Se.BRAND_DATA);
  if (!n)
    return {};
  const r = JSON.parse(n), s = await tb(r?.domain);
  return {
    [kc.X_BRAND_ID]: s?.subsidiaryName,
    [kc.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [kc.X_BRAND_DOMAIN]: r?.domain
  };
}
const lb = async (n, r) => {
  const s = Sn(vn.AUTH), c = { username: n, password: r };
  try {
    const o = await ze.post(s, c, {
      headers: await zi()
    }), d = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: d || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === yo.UNAUTHORIZED ? new Error(it.INVALID_CREDENTIALS) : o.message ? new Error(o.message) : new Error(it.AUTH_FAILED);
  }
}, ab = async (n) => {
  const r = Sn(vn.REGISTER);
  try {
    return (await ze.post(r, n, {
      headers: await zi()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === yo.INTERNAL_SERVER_ERROR ? new Error(it.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(it.REGISTRATION_FAILED);
  }
}, bo = async (n) => {
  const r = Sn(vn.CHECK_EMAIL);
  try {
    return (await ze.post(
      r,
      { email: n },
      {
        headers: await zi()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, nm = async (n) => {
  const r = Sn(vn.FORGOT_PASSWORD), s = { email: n };
  try {
    return (await ze.post(r, s, {
      headers: await zi()
    })).data;
  } catch (c) {
    throw console.error("Error sending password reset:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === yo.NOT_FOUND ? new Error("We couldn't find an account with that email.") : c.message ? new Error(c.message) : new Error(it.RESET_LINK_FAILED);
  }
}, nb = async (n) => {
  const r = Sn(vn.REFRESH_TOKEN), s = { refresh_token: n };
  try {
    const c = await ze.post(r, s, {
      headers: await zi()
    }), o = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: o || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during token refresh:", c), c;
  }
}, ib = () => {
  try {
    const n = It($e.REFRESH_TOKEN, !1);
    if (!n)
      return !0;
    const r = Oi(n), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch (n) {
    return console.error(`${ke.TOKEN} isRefreshTokenExpiredFromCookie Error:`, n), !0;
  }
}, dr = () => It($e.REFRESH_TOKEN, !1) || localStorage.getItem(Se.REFRESH_TOKEN), xi = (n) => {
  try {
    const r = Oi(n), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch {
    return !0;
  }
}, uo = (n) => !xi(n), So = async (n) => {
  try {
    const r = n || dr();
    if (!r)
      return !1;
    const s = await nb(r);
    if (!s?.tokens?.access_token)
      return !1;
    const c = s.tokens, o = cr(c.access_token);
    if (!o)
      return !1;
    const d = (o.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    Ra($e.ACCESS_TOKEN, c.access_token, d, !0);
    const h = s.x_credential || o.decoded.x_credentials;
    if (h && Ra($e.X_CREDENTIAL, h, d, !1), localStorage.setItem(Se.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      Se.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), c.refresh_token) {
      localStorage.setItem(Se.REFRESH_TOKEN, c.refresh_token);
      const g = 720 * 60 * 60;
      Ra($e.REFRESH_TOKEN, c.refresh_token, g, !0), localStorage.getItem(Se.REFRESH_TOKEN_TIME) && localStorage.setItem(Se.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${ke.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, a1 = async () => {
  const n = dr();
  if (!n || !uo(n))
    return !0;
  const r = 60 * 1e3, s = setInterval(async () => {
    const c = dr();
    if (!c || !uo(c)) {
      clearInterval(s);
      return;
    }
    const o = It($e.X_CREDENTIAL, !1) || It($e.X_CREDENTIAL_OLD, !1), d = It($e.ACCESS_TOKEN, !1) || localStorage.getItem(Se.ACCESS_TOKEN);
    (!o || xi(o) || !d || xi(d)) && await So(c);
  }, r);
  return () => clearInterval(s);
}, im = (n) => {
  try {
    if (!localStorage.getItem(Se.REFRESH_TOKEN_TIME))
      return console.log(
        `${ke.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${ke.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = It($e.X_CREDENTIAL, !1) || It($e.X_CREDENTIAL_OLD, !1), c = It($e.ACCESS_TOKEN, !1);
    let o = null, d = !1;
    if (c && (o = c), s && (d = !0), o || (o = localStorage.getItem(Se.ACCESS_TOKEN)), !o || !d)
      return !1;
    const h = localStorage.getItem(Se.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const g = Oi(o), p = Math.floor(Date.now() / 1e3);
      return !(!g.exp || p >= g.exp);
    } catch (g) {
      return console.error(`${ke.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, g), !1;
    }
  } catch (r) {
    return console.error(`${ke.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, ub = async (n) => {
  if (im(n))
    return !0;
  try {
    if (!localStorage.getItem(Se.REFRESH_TOKEN_TIME))
      return !1;
    const c = dr();
    if (!c || !uo(c))
      return !1;
    const o = It($e.X_CREDENTIAL, !1) || It($e.X_CREDENTIAL_OLD, !1), d = It($e.ACCESS_TOKEN, !1) || localStorage.getItem(Se.ACCESS_TOKEN), h = !o || xi(o), g = !d || xi(d);
    return !h && !g || !await So(c) ? !1 : im(n);
  } catch (s) {
    return console.error(`${ke.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`, s), !1;
  }
}, rb = () => {
  try {
    const n = localStorage.getItem(Se.REFRESH_TOKEN_TIME);
    return n ? Date.now() - parseInt(n) < mv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (n) {
    return console.error(`${ke.TOKEN} isRefreshTokenValid Error:`, n), !1;
  }
}, sb = () => {
  $c($e.ACCESS_TOKEN), $c($e.X_CREDENTIAL), $c($e.REFRESH_TOKEN), [
    Se.REFRESH_TOKEN,
    Se.REFRESH_TOKEN_TIME,
    Se.ACCESS_TOKEN,
    Se.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${ke.AUTH} All authentication tokens and state cleared`);
}, n1 = async (n, r, s = !1) => {
  const c = await lb(n, r), { tokens: o, x_credential: d } = c;
  if (o.access_token) {
    const h = Oi(o.access_token), g = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    Ra($e.ACCESS_TOKEN, o.access_token, g, !0);
    const p = d || h.x_credentials;
    p ? (Ra($e.X_CREDENTIAL, p, g, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), p && Ra($e.X_CREDENTIAL, p, g, !1), localStorage.setItem(Se.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      Se.ACCESS_TOKEN_EXPIRES,
      (Date.now() + g * 1e3).toString()
    ), localStorage.setItem(Se.REFRESH_TOKEN, o.refresh_token);
    const y = 720 * 60 * 60;
    Ra($e.REFRESH_TOKEN, o.refresh_token, y, !0), s && o.refresh_token ? (localStorage.setItem(Se.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${ke.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(Se.REFRESH_TOKEN_TIME), console.log(
      `${ke.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return o;
}, cr = (n) => {
  try {
    const r = Oi(n);
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
      `${ke.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, br = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", cb = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  onSignIn: c,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [T, w] = A.useState(""), [q, C] = A.useState(""), [j, M] = A.useState(!1), [Y, Q] = A.useState(""), [$, W] = A.useState(""), [te, ye] = A.useState(!1), [ie, P] = A.useState(!1), [le, se] = A.useState(!1), [Me, ge] = A.useState(!1), [qe, Qe] = A.useState(!1), [Fe, X] = A.useState(!1), [G, V] = A.useState(""), [fe, Ae] = A.useState(!1), [Ce, S] = A.useState(""), [H, k] = A.useState(me.INFO), Z = A.useRef(null), ae = A.useRef(null), K = {
    length: q.length >= er.MIN_LENGTH && q.length <= er.MAX_LENGTH,
    hasNumber: hn.NUMBER.test(q),
    hasUppercase: hn.UPPERCASE.test(q),
    hasLowercase: hn.LOWERCASE.test(q),
    hasSpecialChar: Bh.test(q),
    onlyAllowedChars: qh.test(q) || q === "",
    differentFromUsername: g ? q !== g && q !== g.split("@")[0] : !0
  }, He = ((Ee) => {
    if (!Ee) return { strength: "", color: "", width: tr.EMPTY };
    if (K.length && K.hasNumber && K.hasUppercase && K.hasLowercase && K.hasSpecialChar && K.onlyAllowedChars && K.differentFromUsername)
      return {
        strength: Zc.STRONG,
        color: Jc.STRONG,
        width: tr.STRONG
      };
    let lt = 0;
    return K.length && lt++, K.hasNumber && lt++, K.hasUppercase && lt++, K.hasLowercase && lt++, K.hasSpecialChar && lt++, K.onlyAllowedChars && lt++, K.differentFromUsername && lt++, lt <= 2 ? {
      strength: Zc.WEAK,
      color: Jc.WEAK,
      width: tr.WEAK
    } : {
      strength: Zc.GOOD,
      color: Jc.GOOD,
      width: tr.GOOD
    };
  })(q), Ge = (Ee) => Ee ? Ee.length < er.MIN_LENGTH || Ee.length > er.MAX_LENGTH ? { isValid: !1, error: it.PASSWORD_LENGTH } : hn.UPPERCASE.test(Ee) ? hn.LOWERCASE.test(Ee) ? hn.NUMBER.test(Ee) ? Bh.test(Ee) ? qh.test(Ee) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: it.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: it.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: it.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: it.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: it.PASSWORD_UPPERCASE
  } : { isValid: !1, error: it.PASSWORD_REQUIRED };
  A.useEffect(() => {
    if (ae.current && clearTimeout(ae.current), !g) {
      se(!1), ge(!1), X(!1), V("");
      return;
    }
    if (!Si.test(g)) {
      se(!1), ge(!1);
      return;
    }
    return ae.current = setTimeout(async () => {
      Qe(!0);
      try {
        (await bo(g)).exists ? (ge(!0), se(!0)) : (ge(!1), se(!1));
      } catch (Ee) {
        console.error(`${ke.CREATE_ACCOUNT} Email check failed:`, Ee);
        const ft = Ee instanceof Error ? Ee.message : "Unable to verify email. You can still proceed with registration.";
        X(!0), V(ft), se(!0), ge(!1);
      } finally {
        Qe(!1);
      }
    }, Ai.EMAIL_CHECK_DEBOUNCE), () => {
      ae.current && clearTimeout(ae.current);
    };
  }, [g]);
  const ta = g && Si.test(g);
  A.useEffect(() => {
    const Ee = (ft) => {
      ft.key === "Escape" && s();
    };
    return document.addEventListener("keydown", Ee), () => document.removeEventListener("keydown", Ee);
  }, [s]);
  const _a = (Ee) => {
    Ee.target === Z.current && s();
  }, Rn = async (Ee) => {
    if (Ee.preventDefault(), P(!0), !g || !y || !T) {
      r("Please fill in all required fields");
      return;
    }
    const ft = Ge(q);
    if (!ft.isValid) {
      W(ft.error), r(ft.error), M(!1);
      return;
    }
    if (!Si.test(g)) {
      Q(it.EMAIL_INVALID), r(it.EMAIL_INVALID);
      return;
    }
    M(!0), Q(""), S("");
    try {
      const lt = g.split("@")[0], Nl = await ab({
        username: lt,
        email: g,
        firstName: y,
        lastName: T,
        password: q
      });
      console.log(
        `${ke.CREATE_ACCOUNT} Registration successful:`,
        Nl.message
      );
      try {
        const la = await n1(g, q, fe);
        n(la);
      } catch (la) {
        console.error(
          `${ke.CREATE_ACCOUNT} Auto-login failed after registration:`,
          la
        );
        const ji = la instanceof Error ? la.message : "Auto-login failed";
        r(ji);
      }
    } catch (lt) {
      console.error(`${ke.CREATE_ACCOUNT} Registration failed:`, lt);
      const Nl = lt instanceof Error ? lt.message : it.REGISTRATION_FAILED;
      S(Nl), k(me.ERROR), r(Nl);
    } finally {
      M(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    Ce && /* @__PURE__ */ v.jsx(
      to,
      {
        type: H,
        message: Ce,
        duration: Ai.TOAST_DEFAULT_DURATION,
        onClose: () => S("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Z,
        onMouseDown: _a,
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
                kt,
                {
                  onClick: s,
                  variant: Ft.LINK,
                  className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Wt.BUTTON,
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
              /* @__PURE__ */ v.jsxs("form", { onSubmit: Rn, className: "space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  Sa,
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
                    error: ie && !g ? "Required" : Y || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      qe && /* @__PURE__ */ v.jsx(wm, {}),
                      !qe && !Me && !Fe && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          src: br,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                le && Me && !Fe && /* @__PURE__ */ v.jsx(
                  mn,
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
                le && Fe && /* @__PURE__ */ v.jsx(
                  mn,
                  {
                    type: me.ERROR,
                    message: G,
                    onClose: () => {
                      se(!1), X(!1), V("");
                    },
                    className: "mb-4!"
                  }
                ),
                /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0", children: [
                  /* @__PURE__ */ v.jsx(
                    Sa,
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
                    Sa,
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
                  Sa,
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
                    error: $,
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
                      onChange: (Ee) => Ae(Ee.target.checked),
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
                  kt,
                  {
                    type: Wt.SUBMIT,
                    disabled: j || Me || !ta,
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
                  kt,
                  {
                    type: Wt.BUTTON,
                    variant: Ft.OUTLINE,
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
    Ce && /* @__PURE__ */ v.jsx(to, { message: Ce, type: H, onClose: () => S("") })
  ] });
}, ob = ({
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
          kt,
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
        /* @__PURE__ */ v.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ v.jsx("img", { src: br, alt: "Success", "aria-hidden": "true", className: "w-16! h-16!" }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-success-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: n }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          kt,
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
          kt,
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
}, fb = ({
  email: n,
  onBack: r,
  handleClose: s
}) => {
  const [c, o] = A.useState(n || ""), [d, h] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [T, w] = A.useState(!1), [q, C] = A.useState(!1), [j, M] = A.useState(!1), [Y, Q] = A.useState(!1), [$, W] = A.useState(""), te = A.useRef(null);
  A.useEffect(() => {
    const le = (se) => {
      se.key === "Escape" && s();
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [s]), A.useEffect(() => {
    const le = Si.test(c);
    if (M(le), !le || !c) {
      C(!1), Q(!1), W("");
      return;
    }
    const se = setTimeout(async () => {
      w(!0);
      try {
        const Me = await bo(c);
        console.log("[ResetPassword] Email check response:", Me), C(Me.exists), console.log("[ResetPassword] Email exists:", Me.exists);
      } catch (Me) {
        console.error("[ResetPassword] Error checking email:", Me);
        const ge = Me instanceof Error ? Me.message : "Unable to verify email. Please try again.";
        Q(!0), W(ge), C(!1);
      } finally {
        w(!1);
      }
    }, Ai.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(se);
  }, [c]);
  const ye = (le) => {
    le.target === te.current && s();
  }, ie = async (le) => {
    if (le.preventDefault(), !c) {
      b(it.EMAIL_REQUIRED);
      return;
    }
    h(!0), b("");
    try {
      await nm(c), console.log("[ResetPassword] Reset link sent to:", c), p(!0);
    } catch (se) {
      console.error("[ResetPassword] Failed to send reset link:", se);
      const Me = se instanceof Error ? se.message : it.RESET_LINK_FAILED;
      b(Me);
    } finally {
      h(!1);
    }
  }, P = async () => {
    h(!0), b("");
    try {
      await nm(c), console.log("[ResetPassword] Reset link resent to:", c);
    } catch (le) {
      console.error("[ResetPassword] Failed to resend reset link:", le), p(!1);
      const se = le instanceof Error ? le.message : it.RESET_LINK_FAILED;
      b(se);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ v.jsx(
    ob,
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
          kt,
          {
            onClick: s,
            variant: Ft.LINK,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: Wt.BUTTON,
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
            Sa,
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
                !T && q && j && !Y && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: br,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          Y && /* @__PURE__ */ v.jsx(
            mn,
            {
              type: me.ERROR,
              message: $,
              onClose: () => {
                Q(!1), W("");
              },
              className: "mb-4!"
            }
          ),
          y && /* @__PURE__ */ v.jsx(
            mn,
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
            kt,
            {
              type: Wt.SUBMIT,
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
            kt,
            {
              type: Wt.BUTTON,
              variant: Ft.OUTLINE,
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
}, db = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  authority: c,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, b] = A.useState(""), [T, w] = A.useState(!1), [q, C] = A.useState(!1), [j, M] = A.useState(""), [Y, Q] = A.useState(!1), [$, W] = A.useState(!1), [te, ye] = A.useState(!1), [ie, P] = A.useState(!1), [le, se] = A.useState(!1), [Me, ge] = A.useState(!1), [qe, Qe] = A.useState(!1), [Fe, X] = A.useState(""), [G, V] = A.useState(""), [fe, Ae] = A.useState(me.INFO), Ce = A.useRef(null), S = A.useRef(null);
  A.useEffect(() => {
    if (S.current && clearTimeout(S.current), !g) {
      P(!1), ge(!1), Qe(!1), X("");
      return;
    }
    if (!g.includes("@")) {
      P(!0), ge(!1);
      return;
    }
    if (!Si.test(g)) {
      P(!1), ge(!1);
      return;
    }
    return S.current = setTimeout(async () => {
      se(!0);
      try {
        (await bo(g)).exists ? (P(!0), ge(!1)) : (P(!1), ge(!0));
      } catch (K) {
        console.error("[EmbeddedLogin] Email check failed:", K);
        const ce = K instanceof Error ? K.message : "Unable to verify email. You can still proceed with login.";
        Qe(!0), X(ce), ge(!0), P(!1);
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
    K.target === Ce.current && s();
  }, ae = async (K) => {
    if (K.preventDefault(), !g || !y) {
      M("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    w(!0), M("");
    try {
      const ce = await n1(g, y, Y);
      n(ce);
    } catch (ce) {
      console.error("[EmbeddedLogin] Login failed:", ce);
      const He = ce instanceof Error ? ce.message : "Authentication failed";
      M(He), V(He), Ae(me.ERROR), r(He);
    } finally {
      w(!1);
    }
  };
  return te ? /* @__PURE__ */ v.jsx(
    fb,
    {
      email: g,
      onBack: () => ye(!1),
      handleClose: s
    }
  ) : $ ? /* @__PURE__ */ v.jsx(
    cb,
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
      ref: Ce,
      onMouseDown: Z,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
          /* @__PURE__ */ v.jsx(
            kt,
            {
              onClick: s,
              variant: Ft.LINK,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
              type: Wt.BUTTON,
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
              Sa,
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
                  le && /* @__PURE__ */ v.jsx(wm, {}),
                  !le && ie && k && !qe && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: br,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Me && !ie && k && !qe && /* @__PURE__ */ v.jsx(
              mn,
              {
                type: me.INFO,
                message: pv.EMAIL_NOT_FOUND,
                actionText: "Let's create one to continue?",
                onActionClick: () => {
                  ge(!1), W(!0);
                },
                onClose: () => ge(!1),
                className: "mb-4!"
              }
            ),
            Me && qe && /* @__PURE__ */ v.jsx(
              mn,
              {
                type: me.ERROR,
                message: Fe,
                onClose: () => {
                  ge(!1), Qe(!1), X("");
                },
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ v.jsx(
              Sa,
              {
                label: "Password",
                id: "password",
                type: q ? "text" : "password",
                value: y,
                onChange: (K) => {
                  b(K.target.value), M("");
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
                    checked: Y,
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
              kt,
              {
                type: Wt.SUBMIT,
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
              kt,
              {
                type: Wt.BUTTON,
                variant: Ft.OUTLINE,
                onClick: () => W(!0),
                disabled: T,
                className: "w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { children: "Create an Account" })
              }
            )
          ] })
        ] }),
        G && /* @__PURE__ */ v.jsx(to, { message: G, type: fe, onClose: () => V("") })
      ]
    }
  );
}, hb = (n) => {
  const { authority: r, subsidiary: s, onRedirect: c, onTokenValidityCheck: o } = n, [d, h] = A.useState(!1);
  A.useEffect(() => (r ? (WE(r), console.log(`${ke.AUTH} Authority override set to: ${r}`)) : (am(), console.log(`${ke.AUTH} Using automatic authority detection`)), () => {
    am();
  }), [r]), A.useEffect(() => {
    a1();
  }, []), A.useEffect(() => {
    (async () => {
      try {
        const T = !ib();
        if (o && o(T), await ub()) {
          h(!0);
          const C = n.redirectUrl || lr();
          if (n.autoRedirection)
            window.location.href = C;
          else if (c && n.redirectUrl) {
            const j = n.redirectUrl || lr(), M = localStorage.getItem(Se.ACCESS_TOKEN);
            if (M) {
              const Y = cr(M);
              Y && c(j, Y);
            }
          }
          return;
        }
        if (rb()) {
          if (await So()) {
            const j = localStorage.getItem(Se.ACCESS_TOKEN);
            if (!j)
              return;
            const M = cr(j);
            if (!M)
              return;
            console.log(`${ke.AUTH} Auto-login successful`), h(!0), o && o(!0);
            const Y = n.redirectUrl || lr();
            c && (console.log(
              `${ke.AUTH} Triggering onRedirect callback with user session:`,
              M
            ), c(Y, M)), n.autoRedirection && (window.location.href = Y);
          }
        } else
          localStorage.removeItem(Se.REFRESH_TOKEN), localStorage.removeItem(Se.REFRESH_TOKEN_TIME);
      } catch (T) {
        console.error(`${ke.AUTH} Auto-login failed:`, T), localStorage.removeItem(Se.REFRESH_TOKEN), localStorage.removeItem(Se.REFRESH_TOKEN_TIME);
      }
    })();
  }, [n.redirectUrl, o]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const g = () => {
    n.handleClose && n.handleClose(), h(!0);
    const b = n.redirectUrl || lr();
    if (c) {
      const T = localStorage.getItem(Se.ACCESS_TOKEN);
      if (T) {
        const w = cr(T);
        w && c(b, w);
      }
    }
    n.autoRedirection && setTimeout(() => {
      window.location.href = b;
    }, 100);
  }, p = (b) => {
    console.log(`${ke.AUTH} Embedded login error:`, b);
  }, y = () => {
    n.handleClose && n.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(_p, { children: /* @__PURE__ */ v.jsx(
    Am,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(A.Fragment, { children: n.showLogin && !d && /* @__PURE__ */ v.jsx(
        db,
        {
          onSuccess: g,
          onError: p,
          handleClose: y,
          authority: r,
          title: n.loginTitle,
          subtitle: n.loginSubtitle
        }
      ) })
    }
  ) }) });
};
class mb {
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
      localStorage.setItem("subsidiary", c.token), localStorage.setItem(
        "brand_data",
        JSON.stringify({
          id: c.folder,
          // Use folder name (e.g., "elite") instead of token (e.g., "dev-elite")
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
async function um(n) {
  const r = new mb(n.cdnBaseUrl, n.shadowRoot), s = n.brandFolder || n.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (n.autoDetect) {
    const c = await r.detectBrandFromDomain();
    c && await r.loadTheme(c);
  }
  return r;
}
const rm = typeof window < "u" && window.__widgetStyles?.widget || "";
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
    onTokenValidityCheck;
    connectedCallback() {
      const s = this.attachShadow({ mode: "open" });
      if (rm) {
        const d = document.createElement("style");
        d.textContent = rm, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const c = this.getAttribute("subsidiary");
      c && c.trim() !== "" ? this.loadTheme(c, s) : this.loadThemeFromDomain(s);
      const o = document.createElement("div");
      s.appendChild(o), this.root = hv.createRoot(o), this.render();
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
        await um({
          brandFolder: s,
          shadowRoot: c
        });
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await um({
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
    handleTokenValidity = (s) => {
      this.onTokenValidityCheck && this.onTokenValidityCheck(s);
      const c = new CustomEvent("is-token-valid", {
        detail: s,
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c);
    };
    getProps() {
      const c = this.getAttribute("authority") || Sv(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return a1(), {
        authority: c,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: d,
        onRedirect: this.handleRedirect,
        onTokenValidityCheck: this.handleTokenValidity,
        handleClose: this.handleClose
      };
    }
    // Public API methods
    login() {
      console.log("[Widget] login() called"), this.setAttribute("show-login", "true");
    }
    logout() {
      console.log("[Widget] logout() called"), sb(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
        /* @__PURE__ */ v.jsx(Wp, { children: /* @__PURE__ */ v.jsx(A.StrictMode, { children: /* @__PURE__ */ v.jsx(hb, { ...s }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", n);
}
