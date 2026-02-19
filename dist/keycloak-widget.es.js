
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var Yo = { exports: {} }, pi = {};
var A0;
function Ng() {
  if (A0) return pi;
  A0 = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(o, c, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      d = {};
      for (var g in c)
        g !== "key" && (d[g] = c[g]);
    } else d = c;
    return c = d.ref, {
      $$typeof: n,
      type: o,
      key: h,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return pi.Fragment = r, pi.jsx = s, pi.jsxs = s, pi;
}
var x0;
function Og() {
  return x0 || (x0 = 1, Yo.exports = Ng()), Yo.exports;
}
var v = Og(), Xo = { exports: {} }, ne = {}, C0;
function wg() {
  if (C0) return ne;
  C0 = 1;
  var n = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), w = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function C(b) {
    return b === null || typeof b != "object" ? null : (b = q && b[q] || b["@@iterator"], typeof b == "function" ? b : null);
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
  function Q(b, H, k) {
    this.props = b, this.context = H, this.refs = Y, this.updater = k || L;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(b, H) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, H, "setState");
  }, Q.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function $() {
  }
  $.prototype = Q.prototype;
  function W(b, H, k) {
    this.props = b, this.context = H, this.refs = Y, this.updater = k || L;
  }
  var te = W.prototype = new $();
  te.constructor = W, U(te, Q.prototype), te.isPureReactComponent = !0;
  var ge = Array.isArray;
  function ie() {
  }
  var P = { H: null, A: null, T: null, S: null }, le = Object.prototype.hasOwnProperty;
  function se(b, H, k) {
    var Z = k.ref;
    return {
      $$typeof: r,
      type: b,
      key: H,
      ref: Z !== void 0 ? Z : null,
      props: k
    };
  }
  function Ue(b, H) {
    return se(b.type, H, b.props);
  }
  function pe(b) {
    return typeof b == "object" && b !== null && b.$$typeof === r;
  }
  function Ge(b) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(k) {
      return H[k];
    });
  }
  var Ze = /\/+/g;
  function Fe(b, H) {
    return typeof b == "object" && b !== null && b.key != null ? Ge("" + b.key) : H.toString(36);
  }
  function X(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(ie, ie) : (b.status = "pending", b.then(
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
  function G(b, H, k, Z, ae) {
    var K = typeof b;
    (K === "undefined" || K === "boolean") && (b = null);
    var oe = !1;
    if (b === null) oe = !0;
    else
      switch (K) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case r:
            case s:
              oe = !0;
              break;
            case T:
              return oe = b._init, G(
                oe(b._payload),
                H,
                k,
                Z,
                ae
              );
          }
      }
    if (oe)
      return ae = ae(b), oe = Z === "" ? "." + Fe(b, 0) : Z, ge(ae) ? (k = "", oe != null && (k = oe.replace(Ze, "$&/") + "/"), G(ae, H, k, "", function(ta) {
        return ta;
      })) : ae != null && (pe(ae) && (ae = Ue(
        ae,
        k + (ae.key == null || b && b.key === ae.key ? "" : ("" + ae.key).replace(
          Ze,
          "$&/"
        ) + "/") + oe
      )), H.push(ae)), 1;
    oe = 0;
    var Be = Z === "" ? "." : Z + ":";
    if (ge(b))
      for (var Ye = 0; Ye < b.length; Ye++)
        Z = b[Ye], K = Be + Fe(Z, Ye), oe += G(
          Z,
          H,
          k,
          K,
          ae
        );
    else if (Ye = C(b), typeof Ye == "function")
      for (b = Ye.call(b), Ye = 0; !(Z = b.next()).done; )
        Z = Z.value, K = Be + Fe(Z, Ye++), oe += G(
          Z,
          H,
          k,
          K,
          ae
        );
    else if (K === "object") {
      if (typeof b.then == "function")
        return G(
          X(b),
          H,
          k,
          Z,
          ae
        );
      throw H = String(b), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return oe;
  }
  function V(b, H, k) {
    if (b == null) return b;
    var Z = [], ae = 0;
    return G(b, Z, "", "", function(K) {
      return H.call(k, K, ae++);
    }), Z;
  }
  function fe(b) {
    if (b._status === -1) {
      var H = b._result;
      H = H(), H.then(
        function(k) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = k);
        },
        function(k) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = k);
        }
      ), b._status === -1 && (b._status = 0, b._result = H);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var Ae = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof n == "object" && typeof n.emit == "function") {
      n.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  }, Ce = {
    map: V,
    forEach: function(b, H, k) {
      V(
        b,
        function() {
          H.apply(this, arguments);
        },
        k
      );
    },
    count: function(b) {
      var H = 0;
      return V(b, function() {
        H++;
      }), H;
    },
    toArray: function(b) {
      return V(b, function(H) {
        return H;
      }) || [];
    },
    only: function(b) {
      if (!pe(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return ne.Activity = w, ne.Children = Ce, ne.Component = Q, ne.Fragment = o, ne.Profiler = d, ne.PureComponent = W, ne.StrictMode = c, ne.Suspense = y, ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ne.__COMPILER_RUNTIME = {
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
  }, ne.cloneElement = function(b, H, k) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var Z = U({}, b.props), ae = b.key;
    if (H != null)
      for (K in H.key !== void 0 && (ae = "" + H.key), H)
        !le.call(H, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && H.ref === void 0 || (Z[K] = H[K]);
    var K = arguments.length - 2;
    if (K === 1) Z.children = k;
    else if (1 < K) {
      for (var oe = Array(K), Be = 0; Be < K; Be++)
        oe[Be] = arguments[Be + 2];
      Z.children = oe;
    }
    return se(b.type, ae, Z);
  }, ne.createContext = function(b) {
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
  }, ne.createElement = function(b, H, k) {
    var Z, ae = {}, K = null;
    if (H != null)
      for (Z in H.key !== void 0 && (K = "" + H.key), H)
        le.call(H, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ae[Z] = H[Z]);
    var oe = arguments.length - 2;
    if (oe === 1) ae.children = k;
    else if (1 < oe) {
      for (var Be = Array(oe), Ye = 0; Ye < oe; Ye++)
        Be[Ye] = arguments[Ye + 2];
      ae.children = Be;
    }
    if (b && b.defaultProps)
      for (Z in oe = b.defaultProps, oe)
        ae[Z] === void 0 && (ae[Z] = oe[Z]);
    return se(b, K, ae);
  }, ne.createRef = function() {
    return { current: null };
  }, ne.forwardRef = function(b) {
    return { $$typeof: p, render: b };
  }, ne.isValidElement = pe, ne.lazy = function(b) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: b },
      _init: fe
    };
  }, ne.memo = function(b, H) {
    return {
      $$typeof: E,
      type: b,
      compare: H === void 0 ? null : H
    };
  }, ne.startTransition = function(b) {
    var H = P.T, k = {};
    P.T = k;
    try {
      var Z = b(), ae = P.S;
      ae !== null && ae(k, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ie, Ae);
    } catch (K) {
      Ae(K);
    } finally {
      H !== null && k.types !== null && (H.types = k.types), P.T = H;
    }
  }, ne.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ne.use = function(b) {
    return P.H.use(b);
  }, ne.useActionState = function(b, H, k) {
    return P.H.useActionState(b, H, k);
  }, ne.useCallback = function(b, H) {
    return P.H.useCallback(b, H);
  }, ne.useContext = function(b) {
    return P.H.useContext(b);
  }, ne.useDebugValue = function() {
  }, ne.useDeferredValue = function(b, H) {
    return P.H.useDeferredValue(b, H);
  }, ne.useEffect = function(b, H) {
    return P.H.useEffect(b, H);
  }, ne.useEffectEvent = function(b) {
    return P.H.useEffectEvent(b);
  }, ne.useId = function() {
    return P.H.useId();
  }, ne.useImperativeHandle = function(b, H, k) {
    return P.H.useImperativeHandle(b, H, k);
  }, ne.useInsertionEffect = function(b, H) {
    return P.H.useInsertionEffect(b, H);
  }, ne.useLayoutEffect = function(b, H) {
    return P.H.useLayoutEffect(b, H);
  }, ne.useMemo = function(b, H) {
    return P.H.useMemo(b, H);
  }, ne.useOptimistic = function(b, H) {
    return P.H.useOptimistic(b, H);
  }, ne.useReducer = function(b, H, k) {
    return P.H.useReducer(b, H, k);
  }, ne.useRef = function(b) {
    return P.H.useRef(b);
  }, ne.useState = function(b) {
    return P.H.useState(b);
  }, ne.useSyncExternalStore = function(b, H, k) {
    return P.H.useSyncExternalStore(
      b,
      H,
      k
    );
  }, ne.useTransition = function() {
    return P.H.useTransition();
  }, ne.version = "19.2.3", ne;
}
var _0;
function fc() {
  return _0 || (_0 = 1, Xo.exports = wg()), Xo.exports;
}
var A = fc();
var N0 = "popstate";
function Dg(n = {}) {
  function r(o, c) {
    let { pathname: d, search: h, hash: g } = o.location;
    return ac(
      "",
      { pathname: d, search: h, hash: g },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function s(o, c) {
    return typeof c == "string" ? c : Ai(c);
  }
  return Mg(
    r,
    s,
    null,
    n
  );
}
function Xe(n, r) {
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
function Ug() {
  return Math.random().toString(36).substring(2, 10);
}
function O0(n, r) {
  return {
    usr: n.state,
    key: n.key,
    idx: r
  };
}
function ac(n, r, s = null, o) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? En(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || Ug()
  };
}
function Ai({
  pathname: n = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (n += s.charAt(0) === "#" ? s : "#" + s), n;
}
function En(n) {
  let r = {};
  if (n) {
    let s = n.indexOf("#");
    s >= 0 && (r.hash = n.substring(s), n = n.substring(0, s));
    let o = n.indexOf("?");
    o >= 0 && (r.search = n.substring(o), n = n.substring(0, o)), n && (r.pathname = n);
  }
  return r;
}
function Mg(n, r, s, o = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = o, h = c.history, g = "POP", p = null, y = E();
  y == null && (y = 0, h.replaceState({ ...h.state, idx: y }, ""));
  function E() {
    return (h.state || { idx: null }).idx;
  }
  function T() {
    g = "POP";
    let U = E(), Y = U == null ? null : U - y;
    y = U, p && p({ action: g, location: L.location, delta: Y });
  }
  function w(U, Y) {
    g = "PUSH";
    let Q = ac(L.location, U, Y);
    y = E() + 1;
    let $ = O0(Q, y), W = L.createHref(Q);
    try {
      h.pushState($, "", W);
    } catch (te) {
      if (te instanceof DOMException && te.name === "DataCloneError")
        throw te;
      c.location.assign(W);
    }
    d && p && p({ action: g, location: L.location, delta: 1 });
  }
  function q(U, Y) {
    g = "REPLACE";
    let Q = ac(L.location, U, Y);
    y = E();
    let $ = O0(Q, y), W = L.createHref(Q);
    h.replaceState($, "", W), d && p && p({ action: g, location: L.location, delta: 0 });
  }
  function C(U) {
    return zg(U);
  }
  let L = {
    get action() {
      return g;
    },
    get location() {
      return n(c, h);
    },
    listen(U) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(N0, T), p = U, () => {
        c.removeEventListener(N0, T), p = null;
      };
    },
    createHref(U) {
      return r(c, U);
    },
    createURL: C,
    encodeLocation(U) {
      let Y = C(U);
      return {
        pathname: Y.pathname,
        search: Y.search,
        hash: Y.hash
      };
    },
    push: w,
    replace: q,
    go(U) {
      return h.go(U);
    }
  };
  return L;
}
function zg(n, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Xe(s, "No window.location.(origin|href) available to create URL");
  let o = typeof n == "string" ? n : Ai(n);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = s + o), new URL(o, s);
}
function cm(n, r, s = "/") {
  return Lg(n, r, s, !1);
}
function Lg(n, r, s, o) {
  let c = typeof r == "string" ? En(r) : r, d = Cl(c.pathname || "/", s);
  if (d == null)
    return null;
  let h = fm(n);
  jg(h);
  let g = null;
  for (let p = 0; g == null && p < h.length; ++p) {
    let y = Zg(d);
    g = kg(
      h[p],
      y,
      o
    );
  }
  return g;
}
function fm(n, r = [], s = [], o = "", c = !1) {
  let d = (h, g, p = c, y) => {
    let E = {
      relativePath: y === void 0 ? h.path || "" : y,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: g,
      route: h
    };
    if (E.relativePath.startsWith("/")) {
      if (!E.relativePath.startsWith(o) && p)
        return;
      Xe(
        E.relativePath.startsWith(o),
        `Absolute route path "${E.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), E.relativePath = E.relativePath.slice(o.length);
    }
    let T = Al([o, E.relativePath]), w = s.concat(E);
    h.children && h.children.length > 0 && (Xe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      h.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), fm(
      h.children,
      r,
      w,
      T,
      p
    )), !(h.path == null && !h.index) && r.push({
      path: T,
      score: Vg(T, h.index),
      routesMeta: w
    });
  };
  return n.forEach((h, g) => {
    if (h.path === "" || !h.path?.includes("?"))
      d(h, g);
    else
      for (let p of dm(h.path))
        d(h, g, !0, p);
  }), r;
}
function dm(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [s, ...o] = r, c = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [d, ""] : [d];
  let h = dm(o.join("/")), g = [];
  return g.push(
    ...h.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), c && g.push(...h), g.map(
    (p) => n.startsWith("/") && p === "" ? "/" : p
  );
}
function jg(n) {
  n.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Kg(
      r.routesMeta.map((o) => o.childrenIndex),
      s.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Hg = /^:[\w-]+$/, Bg = 3, qg = 2, Gg = 1, Yg = 10, Xg = -2, w0 = (n) => n === "*";
function Vg(n, r) {
  let s = n.split("/"), o = s.length;
  return s.some(w0) && (o += Xg), r && (o += qg), s.filter((c) => !w0(c)).reduce(
    (c, d) => c + (Hg.test(d) ? Bg : d === "" ? Gg : Yg),
    o
  );
}
function Kg(n, r) {
  return n.length === r.length && n.slice(0, -1).every((o, c) => o === r[c]) ? (
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
function kg(n, r, s = !1) {
  let { routesMeta: o } = n, c = {}, d = "/", h = [];
  for (let g = 0; g < o.length; ++g) {
    let p = o[g], y = g === o.length - 1, E = d === "/" ? r : r.slice(d.length) || "/", T = hr(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      E
    ), w = p.route;
    if (!T && y && s && !o[o.length - 1].route.index && (T = hr(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      E
    )), !T)
      return null;
    Object.assign(c, T.params), h.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: Al([d, T.pathname]),
      pathnameBase: Wg(
        Al([d, T.pathnameBase])
      ),
      route: w
    }), T.pathnameBase !== "/" && (d = Al([d, T.pathnameBase]));
  }
  return h;
}
function hr(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [s, o] = Qg(
    n.path,
    n.caseSensitive,
    n.end
  ), c = r.match(s);
  if (!c) return null;
  let d = c[0], h = d.replace(/(.)\/+$/, "$1"), g = c.slice(1);
  return {
    params: o.reduce(
      (y, { paramName: E, isOptional: T }, w) => {
        if (E === "*") {
          let C = g[w] || "";
          h = d.slice(0, d.length - C.length).replace(/(.)\/+$/, "$1");
        }
        const q = g[w];
        return T && !q ? y[E] = void 0 : y[E] = (q || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: h,
    pattern: n
  };
}
function Qg(n, r = !1, s = !0) {
  Pt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (h, g, p) => (o.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return n.endsWith("*") ? (o.push({ paramName: "*" }), c += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : n !== "" && n !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function Zg(n) {
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
  let s = r.endsWith("/") ? r.length - 1 : r.length, o = n.charAt(s);
  return o && o !== "/" ? null : n.slice(s) || "/";
}
var hm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Jg = (n) => hm.test(n);
function $g(n, r = "/") {
  let {
    pathname: s,
    search: o = "",
    hash: c = ""
  } = typeof n == "string" ? En(n) : n, d;
  if (s)
    if (Jg(s))
      d = s;
    else {
      if (s.includes("//")) {
        let h = s;
        s = s.replace(/\/\/+/g, "/"), Pt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${h} -> ${s}`
        );
      }
      s.startsWith("/") ? d = D0(s.substring(1), "/") : d = D0(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: Ig(o),
    hash: Pg(c)
  };
}
function D0(n, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((c) => {
    c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
  }), s.length > 1 ? s.join("/") : "/";
}
function Vo(n, r, s, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Fg(n) {
  return n.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function mm(n) {
  let r = Fg(n);
  return r.map(
    (s, o) => o === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function ym(n, r, s, o = !1) {
  let c;
  typeof n == "string" ? c = En(n) : (c = { ...n }, Xe(
    !c.pathname || !c.pathname.includes("?"),
    Vo("?", "pathname", "search", c)
  ), Xe(
    !c.pathname || !c.pathname.includes("#"),
    Vo("#", "pathname", "hash", c)
  ), Xe(
    !c.search || !c.search.includes("#"),
    Vo("#", "search", "hash", c)
  ));
  let d = n === "" || c.pathname === "", h = d ? "/" : c.pathname, g;
  if (h == null)
    g = s;
  else {
    let T = r.length - 1;
    if (!o && h.startsWith("..")) {
      let w = h.split("/");
      for (; w[0] === ".."; )
        w.shift(), T -= 1;
      c.pathname = w.join("/");
    }
    g = T >= 0 ? r[T] : "/";
  }
  let p = $g(c, g), y = h && h !== "/" && h.endsWith("/"), E = (d || h === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (y || E) && (p.pathname += "/"), p;
}
var Al = (n) => n.join("/").replace(/\/\/+/g, "/"), Wg = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), Ig = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Pg = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n, ep = class {
  constructor(n, r, s, o = !1) {
    this.status = n, this.statusText = r || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function tp(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
function lp(n) {
  return n.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var gm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function pm(n, r) {
  let s = n;
  if (typeof s != "string" || !hm.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let o = s, c = !1;
  if (gm)
    try {
      let d = new URL(window.location.href), h = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), g = Cl(h.pathname, r);
      h.origin === d.origin && g != null ? s = g + h.search + h.hash : c = !0;
    } catch {
      Pt(
        !1,
        `<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: o,
    isExternal: c,
    to: s
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var vm = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  vm
);
var ap = [
  "GET",
  ...vm
];
new Set(ap);
var Sn = A.createContext(null);
Sn.displayName = "DataRouter";
var gr = A.createContext(null);
gr.displayName = "DataRouterState";
var np = A.createContext(!1), Em = A.createContext({
  isTransitioning: !1
});
Em.displayName = "ViewTransition";
var ip = A.createContext(
  /* @__PURE__ */ new Map()
);
ip.displayName = "Fetchers";
var up = A.createContext(null);
up.displayName = "Await";
var Zt = A.createContext(
  null
);
Zt.displayName = "Navigation";
var Ni = A.createContext(
  null
);
Ni.displayName = "Location";
var _l = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_l.displayName = "Route";
var dc = A.createContext(null);
dc.displayName = "RouteError";
var Sm = "REACT_ROUTER_ERROR", rp = "REDIRECT", sp = "ROUTE_ERROR_RESPONSE";
function op(n) {
  if (n.startsWith(`${Sm}:${rp}:{`))
    try {
      let r = JSON.parse(n.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function cp(n) {
  if (n.startsWith(
    `${Sm}:${sp}:{`
  ))
    try {
      let r = JSON.parse(n.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new ep(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function fp(n, { relative: r } = {}) {
  Xe(
    Oi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = A.useContext(Zt), { hash: c, pathname: d, search: h } = wi(n, { relative: r }), g = d;
  return s !== "/" && (g = d === "/" ? s : Al([s, d])), o.createHref({ pathname: g, search: h, hash: c });
}
function Oi() {
  return A.useContext(Ni) != null;
}
function Ca() {
  return Xe(
    Oi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(Ni).location;
}
var bm = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Rm(n) {
  A.useContext(Zt).static || A.useLayoutEffect(n);
}
function dp() {
  let { isDataRoute: n } = A.useContext(_l);
  return n ? xp() : hp();
}
function hp() {
  Xe(
    Oi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = A.useContext(Sn), { basename: r, navigator: s } = A.useContext(Zt), { matches: o } = A.useContext(_l), { pathname: c } = Ca(), d = JSON.stringify(mm(o)), h = A.useRef(!1);
  return Rm(() => {
    h.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (Pt(h.current, bm), !h.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let E = ym(
        p,
        JSON.parse(d),
        c,
        y.relative === "path"
      );
      n == null && r !== "/" && (E.pathname = E.pathname === "/" ? r : Al([r, E.pathname])), (y.replace ? s.replace : s.push)(
        E,
        y.state,
        y
      );
    },
    [
      r,
      s,
      d,
      c,
      n
    ]
  );
}
A.createContext(null);
function wi(n, { relative: r } = {}) {
  let { matches: s } = A.useContext(_l), { pathname: o } = Ca(), c = JSON.stringify(mm(s));
  return A.useMemo(
    () => ym(
      n,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [n, c, o, r]
  );
}
function mp(n, r) {
  return Tm(n, r);
}
function Tm(n, r, s, o, c) {
  Xe(
    Oi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(Zt), { matches: h } = A.useContext(_l), g = h[h.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", E = g ? g.pathnameBase : "/", T = g && g.route;
  {
    let Q = T && T.path || "";
    xm(
      y,
      !T || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let w = Ca(), q;
  if (r) {
    let Q = typeof r == "string" ? En(r) : r;
    Xe(
      E === "/" || Q.pathname?.startsWith(E),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ), q = Q;
  } else
    q = w;
  let C = q.pathname || "/", L = C;
  if (E !== "/") {
    let Q = E.replace(/^\//, "").split("/");
    L = "/" + C.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let U = cm(n, { pathname: L });
  Pt(
    T || U != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), Pt(
    U == null || U[U.length - 1].route.element !== void 0 || U[U.length - 1].route.Component !== void 0 || U[U.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let Y = Ep(
    U && U.map(
      (Q) => Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: Al([
          E,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathname
        ]),
        pathnameBase: Q.pathnameBase === "/" ? E : Al([
          E,
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
    o,
    c
  );
  return r && Y ? /* @__PURE__ */ A.createElement(
    Ni.Provider,
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
function yp() {
  let n = Ap(), r = tp(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), s = n instanceof Error ? n.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, h = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), h = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ A.createElement("pre", { style: c }, s) : null, h);
}
var gp = /* @__PURE__ */ A.createElement(yp, null), Am = class extends A.Component {
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
      dc.Provider,
      {
        value: n,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(pp, { error: n }, r) : r;
  }
};
Am.contextType = np;
var Ko = /* @__PURE__ */ new WeakMap();
function pp({
  children: n,
  error: r
}) {
  let { basename: s } = A.useContext(Zt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = op(r.digest);
    if (o) {
      let c = Ko.get(r);
      if (c) throw c;
      let d = pm(o.location, s);
      if (gm && !Ko.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const h = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw Ko.set(r, h), h;
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
function vp({ routeContext: n, match: r, children: s }) {
  let o = A.useContext(Sn);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(_l.Provider, { value: n }, s);
}
function Ep(n, r = [], s = null, o = null, c = null) {
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
    let E = d.findIndex(
      (T) => T.route.id && h?.[T.route.id] !== void 0
    );
    Xe(
      E >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        h
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, E + 1)
    );
  }
  let g = !1, p = -1;
  if (s)
    for (let E = 0; E < d.length; E++) {
      let T = d[E];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (p = E), T.route.id) {
        let { loaderData: w, errors: q } = s, C = T.route.loader && !w.hasOwnProperty(T.route.id) && (!q || q[T.route.id] === void 0);
        if (T.route.lazy || C) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = s && o ? (E, T) => {
    o(E, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: lp(s.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (E, T, w) => {
      let q, C = !1, L = null, U = null;
      s && (q = h && T.route.id ? h[T.route.id] : void 0, L = T.route.errorElement || gp, g && (p < 0 && w === 0 ? (xm(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), C = !0, U = null) : p === w && (C = !0, U = T.route.hydrateFallbackElement || null)));
      let Y = r.concat(d.slice(0, w + 1)), Q = () => {
        let $;
        return q ? $ = L : C ? $ = U : T.route.Component ? $ = /* @__PURE__ */ A.createElement(T.route.Component, null) : T.route.element ? $ = T.route.element : $ = E, /* @__PURE__ */ A.createElement(
          vp,
          {
            match: T,
            routeContext: {
              outlet: E,
              matches: Y,
              isDataRoute: s != null
            },
            children: $
          }
        );
      };
      return s && (T.route.ErrorBoundary || T.route.errorElement || w === 0) ? /* @__PURE__ */ A.createElement(
        Am,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: L,
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
function hc(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Sp(n) {
  let r = A.useContext(Sn);
  return Xe(r, hc(n)), r;
}
function bp(n) {
  let r = A.useContext(gr);
  return Xe(r, hc(n)), r;
}
function Rp(n) {
  let r = A.useContext(_l);
  return Xe(r, hc(n)), r;
}
function mc(n) {
  let r = Rp(n), s = r.matches[r.matches.length - 1];
  return Xe(
    s.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function Tp() {
  return mc(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ap() {
  let n = A.useContext(dc), r = bp(
    "useRouteError"
    /* UseRouteError */
  ), s = mc(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : r.errors?.[s];
}
function xp() {
  let { router: n } = Sp(
    "useNavigate"
    /* UseNavigateStable */
  ), r = mc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = A.useRef(!1);
  return Rm(() => {
    s.current = !0;
  }), A.useCallback(
    async (c, d = {}) => {
      Pt(s.current, bm), s.current && (typeof c == "number" ? await n.navigate(c) : await n.navigate(c, { fromRouteId: r, ...d }));
    },
    [n, r]
  );
}
var U0 = {};
function xm(n, r, s) {
  !r && !U0[n] && (U0[n] = !0, Pt(!1, s));
}
A.memo(Cp);
function Cp({
  routes: n,
  future: r,
  state: s,
  onError: o
}) {
  return Tm(n, void 0, s, o, r);
}
function Cm(n) {
  Xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function _p({
  basename: n = "/",
  children: r = null,
  location: s,
  navigationType: o = "POP",
  navigator: c,
  static: d = !1,
  unstable_useTransitions: h
}) {
  Xe(
    !Oi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = n.replace(/^\/*/, "/"), p = A.useMemo(
    () => ({
      basename: g,
      navigator: c,
      static: d,
      unstable_useTransitions: h,
      future: {}
    }),
    [g, c, d, h]
  );
  typeof s == "string" && (s = En(s));
  let {
    pathname: y = "/",
    search: E = "",
    hash: T = "",
    state: w = null,
    key: q = "default"
  } = s, C = A.useMemo(() => {
    let L = Cl(y, g);
    return L == null ? null : {
      location: {
        pathname: L,
        search: E,
        hash: T,
        state: w,
        key: q
      },
      navigationType: o
    };
  }, [g, y, E, T, w, q, o]);
  return Pt(
    C != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${E}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), C == null ? null : /* @__PURE__ */ A.createElement(Zt.Provider, { value: p }, /* @__PURE__ */ A.createElement(Ni.Provider, { children: r, value: C }));
}
function Np({
  children: n,
  location: r
}) {
  return mp(nc(n), r);
}
function nc(n, r = []) {
  let s = [];
  return A.Children.forEach(n, (o, c) => {
    if (!A.isValidElement(o))
      return;
    let d = [...r, c];
    if (o.type === A.Fragment) {
      s.push.apply(
        s,
        nc(o.props.children, d)
      );
      return;
    }
    Xe(
      o.type === Cm,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Xe(
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
    o.props.children && (h.children = nc(
      o.props.children,
      d
    )), s.push(h);
  }), s;
}
var ur = "get", rr = "application/x-www-form-urlencoded";
function pr(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function Op(n) {
  return pr(n) && n.tagName.toLowerCase() === "button";
}
function wp(n) {
  return pr(n) && n.tagName.toLowerCase() === "form";
}
function Dp(n) {
  return pr(n) && n.tagName.toLowerCase() === "input";
}
function Up(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Mp(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Up(n);
}
var er = null;
function zp() {
  if (er === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), er = !1;
    } catch {
      er = !0;
    }
  return er;
}
var Lp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ko(n) {
  return n != null && !Lp.has(n) ? (Pt(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`
  ), null) : n;
}
function jp(n, r) {
  let s, o, c, d, h;
  if (wp(n)) {
    let g = n.getAttribute("action");
    o = g ? Cl(g, r) : null, s = n.getAttribute("method") || ur, c = ko(n.getAttribute("enctype")) || rr, d = new FormData(n);
  } else if (Op(n) || Dp(n) && (n.type === "submit" || n.type === "image")) {
    let g = n.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = n.getAttribute("formaction") || g.getAttribute("action");
    if (o = p ? Cl(p, r) : null, s = n.getAttribute("formmethod") || g.getAttribute("method") || ur, c = ko(n.getAttribute("formenctype")) || ko(g.getAttribute("enctype")) || rr, d = new FormData(g, n), !zp()) {
      let { name: y, type: E, value: T } = n;
      if (E === "image") {
        let w = y ? `${y}.` : "";
        d.append(`${w}x`, "0"), d.append(`${w}y`, "0");
      } else y && d.append(y, T);
    }
  } else {
    if (pr(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = ur, o = null, c = rr, h = n;
  }
  return d && c === "text/plain" && (h = d, d = void 0), { action: o, method: s.toLowerCase(), encType: c, formData: d, body: h };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function yc(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
function Hp(n, r, s) {
  let o = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return o.pathname === "/" ? o.pathname = `_root.${s}` : r && Cl(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`, o;
}
async function Bp(n, r) {
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
function qp(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function Gp(n, r, s) {
  let o = await Promise.all(
    n.map(async (c) => {
      let d = r.routes[c.route.id];
      if (d) {
        let h = await Bp(d, s);
        return h.links ? h.links() : [];
      }
      return [];
    })
  );
  return Kp(
    o.flat(1).filter(qp).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function M0(n, r, s, o, c, d) {
  let h = (p, y) => s[y] ? p.route.id !== s[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    s[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[y].route.path?.endsWith("*") && s[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => h(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let E = o.routes[p.route.id];
    if (!E || !E.hasLoader)
      return !1;
    if (h(p, y) || g(p, y))
      return !0;
    if (p.route.shouldRevalidate) {
      let T = p.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
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
function Yp(n, r, { includeHydrateFallback: s } = {}) {
  return Xp(
    n.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let d = [c.module];
      return c.clientActionModule && (d = d.concat(c.clientActionModule)), c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (d = d.concat(c.hydrateFallbackModule)), c.imports && (d = d.concat(c.imports)), d;
    }).flat(1)
  );
}
function Xp(n) {
  return [...new Set(n)];
}
function Vp(n) {
  let r = {}, s = Object.keys(n).sort();
  for (let o of s)
    r[o] = n[o];
  return r;
}
function Kp(n, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((o, c) => {
    let d = JSON.stringify(Vp(c));
    return s.has(d) || (s.add(d), o.push({ key: d, link: c })), o;
  }, []);
}
function _m() {
  let n = A.useContext(Sn);
  return yc(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function kp() {
  let n = A.useContext(gr);
  return yc(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var gc = A.createContext(void 0);
gc.displayName = "FrameworkContext";
function Nm() {
  let n = A.useContext(gc);
  return yc(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function Qp(n, r) {
  let s = A.useContext(gc), [o, c] = A.useState(!1), [d, h] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: E, onTouchStart: T } = r, w = A.useRef(null);
  A.useEffect(() => {
    if (n === "render" && h(!0), n === "viewport") {
      let L = (Y) => {
        Y.forEach((Q) => {
          h(Q.isIntersecting);
        });
      }, U = new IntersectionObserver(L, { threshold: 0.5 });
      return w.current && U.observe(w.current), () => {
        U.disconnect();
      };
    }
  }, [n]), A.useEffect(() => {
    if (o) {
      let L = setTimeout(() => {
        h(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [o]);
  let q = () => {
    c(!0);
  }, C = () => {
    c(!1), h(!1);
  };
  return s ? n !== "intent" ? [d, w, {}] : [
    d,
    w,
    {
      onFocus: vi(g, q),
      onBlur: vi(p, C),
      onMouseEnter: vi(y, q),
      onMouseLeave: vi(E, C),
      onTouchStart: vi(T, q)
    }
  ] : [!1, w, {}];
}
function vi(n, r) {
  return (s) => {
    n && n(s), s.defaultPrevented || r(s);
  };
}
function Zp({ page: n, ...r }) {
  let { router: s } = _m(), o = A.useMemo(
    () => cm(s.routes, n, s.basename),
    [s.routes, n, s.basename]
  );
  return o ? /* @__PURE__ */ A.createElement($p, { page: n, matches: o, ...r }) : null;
}
function Jp(n) {
  let { manifest: r, routeModules: s } = Nm(), [o, c] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Gp(n, r, s).then(
      (h) => {
        d || c(h);
      }
    ), () => {
      d = !0;
    };
  }, [n, r, s]), o;
}
function $p({
  page: n,
  matches: r,
  ...s
}) {
  let o = Ca(), { manifest: c, routeModules: d } = Nm(), { basename: h } = _m(), { loaderData: g, matches: p } = kp(), y = A.useMemo(
    () => M0(
      n,
      r,
      p,
      c,
      o,
      "data"
    ),
    [n, r, p, c, o]
  ), E = A.useMemo(
    () => M0(
      n,
      r,
      p,
      c,
      o,
      "assets"
    ),
    [n, r, p, c, o]
  ), T = A.useMemo(() => {
    if (n === o.pathname + o.search + o.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), L = !1;
    if (r.forEach((Y) => {
      let Q = c.routes[Y.route.id];
      !Q || !Q.hasLoader || (!y.some(($) => $.route.id === Y.route.id) && Y.route.id in g && d[Y.route.id]?.shouldRevalidate || Q.hasClientLoader ? L = !0 : C.add(Y.route.id));
    }), C.size === 0)
      return [];
    let U = Hp(n, h, "data");
    return L && C.size > 0 && U.searchParams.set(
      "_routes",
      r.filter((Y) => C.has(Y.route.id)).map((Y) => Y.route.id).join(",")
    ), [U.pathname + U.search];
  }, [
    h,
    g,
    o,
    c,
    y,
    r,
    n,
    d
  ]), w = A.useMemo(
    () => Yp(E, c),
    [E, c]
  ), q = Jp(E);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, T.map((C) => /* @__PURE__ */ A.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...s })), w.map((C) => /* @__PURE__ */ A.createElement("link", { key: C, rel: "modulepreload", href: C, ...s })), q.map(({ key: C, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: C, nonce: s.nonce, ...L })
  )));
}
function Fp(...n) {
  return (r) => {
    n.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var Wp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Wp && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function Ip({
  basename: n,
  children: r,
  unstable_useTransitions: s,
  window: o
}) {
  let c = A.useRef();
  c.current == null && (c.current = Dg({ window: o, v5Compat: !0 }));
  let d = c.current, [h, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      s === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [s]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    _p,
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
var Om = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, wm = A.forwardRef(
  function({
    onClick: r,
    discover: s = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: d,
    replace: h,
    state: g,
    target: p,
    to: y,
    preventScrollReset: E,
    viewTransition: T,
    unstable_defaultShouldRevalidate: w,
    ...q
  }, C) {
    let { basename: L, unstable_useTransitions: U } = A.useContext(Zt), Y = typeof y == "string" && Om.test(y), Q = pm(y, L);
    y = Q.to;
    let $ = fp(y, { relative: c }), [W, te, ge] = Qp(
      o,
      q
    ), ie = lv(y, {
      replace: h,
      state: g,
      target: p,
      preventScrollReset: E,
      relative: c,
      viewTransition: T,
      unstable_defaultShouldRevalidate: w,
      unstable_useTransitions: U
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
          ...ge,
          href: Q.absoluteURL || $,
          onClick: Q.isExternal || d ? r : P,
          ref: Fp(C, te),
          target: p,
          "data-discover": !Y && s === "render" ? "true" : void 0
        }
      )
    );
    return W && !Y ? /* @__PURE__ */ A.createElement(A.Fragment, null, le, /* @__PURE__ */ A.createElement(Zp, { page: $ })) : le;
  }
);
wm.displayName = "Link";
var Pp = A.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: c = !1,
    style: d,
    to: h,
    viewTransition: g,
    children: p,
    ...y
  }, E) {
    let T = wi(h, { relative: y.relative }), w = Ca(), q = A.useContext(gr), { navigator: C, basename: L } = A.useContext(Zt), U = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    rv(T) && g === !0, Y = C.encodeLocation ? C.encodeLocation(T).pathname : T.pathname, Q = w.pathname, $ = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (Q = Q.toLowerCase(), $ = $ ? $.toLowerCase() : null, Y = Y.toLowerCase()), $ && L && ($ = Cl($, L) || $);
    const W = Y !== "/" && Y.endsWith("/") ? Y.length - 1 : Y.length;
    let te = Q === Y || !c && Q.startsWith(Y) && Q.charAt(W) === "/", ge = $ != null && ($ === Y || !c && $.startsWith(Y) && $.charAt(Y.length) === "/"), ie = {
      isActive: te,
      isPending: ge,
      isTransitioning: U
    }, P = te ? r : void 0, le;
    typeof o == "function" ? le = o(ie) : le = [
      o,
      te ? "active" : null,
      ge ? "pending" : null,
      U ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let se = typeof d == "function" ? d(ie) : d;
    return /* @__PURE__ */ A.createElement(
      wm,
      {
        ...y,
        "aria-current": P,
        className: le,
        ref: E,
        style: se,
        to: h,
        viewTransition: g
      },
      typeof p == "function" ? p(ie) : p
    );
  }
);
Pp.displayName = "NavLink";
var ev = A.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: d,
    method: h = ur,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: E,
    viewTransition: T,
    unstable_defaultShouldRevalidate: w,
    ...q
  }, C) => {
    let { unstable_useTransitions: L } = A.useContext(Zt), U = iv(), Y = uv(g, { relative: y }), Q = h.toLowerCase() === "get" ? "get" : "post", $ = typeof g == "string" && Om.test(g), W = (te) => {
      if (p && p(te), te.defaultPrevented) return;
      te.preventDefault();
      let ge = te.nativeEvent.submitter, ie = ge?.getAttribute("formmethod") || h, P = () => U(ge || te.currentTarget, {
        fetcherKey: r,
        method: ie,
        navigate: s,
        replace: c,
        state: d,
        relative: y,
        preventScrollReset: E,
        viewTransition: T,
        unstable_defaultShouldRevalidate: w
      });
      L && s !== !1 ? A.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: C,
        method: Q,
        action: Y,
        onSubmit: o ? p : W,
        ...q,
        "data-discover": !$ && n === "render" ? "true" : void 0
      }
    );
  }
);
ev.displayName = "Form";
function tv(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dm(n) {
  let r = A.useContext(Sn);
  return Xe(r, tv(n)), r;
}
function lv(n, {
  target: r,
  replace: s,
  state: o,
  preventScrollReset: c,
  relative: d,
  viewTransition: h,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = dp(), E = Ca(), T = wi(n, { relative: d });
  return A.useCallback(
    (w) => {
      if (Mp(w, r)) {
        w.preventDefault();
        let q = s !== void 0 ? s : Ai(E) === Ai(T), C = () => y(n, {
          replace: q,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: h,
          unstable_defaultShouldRevalidate: g
        });
        p ? A.startTransition(() => C()) : C();
      }
    },
    [
      E,
      y,
      T,
      s,
      o,
      r,
      n,
      c,
      d,
      h,
      g,
      p
    ]
  );
}
var av = 0, nv = () => `__${String(++av)}__`;
function iv() {
  let { router: n } = Dm(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(Zt), s = Tp(), o = n.fetch, c = n.navigate;
  return A.useCallback(
    async (d, h = {}) => {
      let { action: g, method: p, encType: y, formData: E, body: T } = jp(
        d,
        r
      );
      if (h.navigate === !1) {
        let w = h.fetcherKey || nv();
        await o(w, s, h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: E,
          body: T,
          formMethod: h.method || p,
          formEncType: h.encType || y,
          flushSync: h.flushSync
        });
      } else
        await c(h.action || g, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: E,
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
    [o, c, r, s]
  );
}
function uv(n, { relative: r } = {}) {
  let { basename: s } = A.useContext(Zt), o = A.useContext(_l);
  Xe(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...wi(n || ".", { relative: r }) }, h = Ca();
  if (n == null) {
    d.search = h.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((E) => E === "")) {
      g.delete("index"), p.filter((T) => T).forEach((T) => g.append("index", T));
      let E = g.toString();
      d.search = E ? `?${E}` : "";
    }
  }
  return (!n || n === ".") && c.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : Al([s, d.pathname])), Ai(d);
}
function rv(n, { relative: r } = {}) {
  let s = A.useContext(Em);
  Xe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Dm(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = wi(n, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = Cl(s.currentLocation.pathname, o) || s.currentLocation.pathname, h = Cl(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return hr(c.pathname, h) != null || hr(c.pathname, d) != null;
}
var Qo = { exports: {} }, dt = {};
var z0;
function sv() {
  if (z0) return dt;
  z0 = 1;
  var n = fc();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        y += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var o = {
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
  }, c = /* @__PURE__ */ Symbol.for("react.portal");
  function d(p, y, E) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: y,
      implementation: E
    };
  }
  var h = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, dt.createPortal = function(p, y) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, E);
  }, dt.flushSync = function(p) {
    var y = h.T, E = o.p;
    try {
      if (h.T = null, o.p = 2, p) return p();
    } finally {
      h.T = y, o.p = E, o.d.f();
    }
  }, dt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(p, y));
  }, dt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, dt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var E = y.as, T = g(E, y.crossOrigin), w = typeof y.integrity == "string" ? y.integrity : void 0, q = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      E === "style" ? o.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: T,
          integrity: w,
          fetchPriority: q
        }
      ) : E === "script" && o.d.X(p, {
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
          var E = g(
            y.as,
            y.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: E,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && o.d.M(p);
  }, dt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var E = y.as, T = g(E, y.crossOrigin);
      o.d.L(p, E, {
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
        var E = g(y.as, y.crossOrigin);
        o.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: E,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else o.d.m(p);
  }, dt.requestFormReset = function(p) {
    o.d.r(p);
  }, dt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, dt.useFormState = function(p, y, E) {
    return h.H.useFormState(p, y, E);
  }, dt.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, dt.version = "19.2.3", dt;
}
var L0;
function ov() {
  if (L0) return Qo.exports;
  L0 = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Qo.exports = sv(), Qo.exports;
}
var Zo = { exports: {} }, Ei = {}, Jo = { exports: {} }, $o = {};
var j0;
function cv() {
  return j0 || (j0 = 1, (function(n) {
    function r(X, G) {
      var V = X.length;
      X.push(G);
      e: for (; 0 < V; ) {
        var fe = V - 1 >>> 1, Ae = X[fe];
        if (0 < c(Ae, G))
          X[fe] = G, X[V] = Ae, V = fe;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function o(X) {
      if (X.length === 0) return null;
      var G = X[0], V = X.pop();
      if (V !== G) {
        X[0] = V;
        e: for (var fe = 0, Ae = X.length, Ce = Ae >>> 1; fe < Ce; ) {
          var b = 2 * (fe + 1) - 1, H = X[b], k = b + 1, Z = X[k];
          if (0 > c(H, V))
            k < Ae && 0 > c(Z, H) ? (X[fe] = Z, X[k] = V, fe = k) : (X[fe] = H, X[b] = V, fe = b);
          else if (k < Ae && 0 > c(Z, V))
            X[fe] = Z, X[k] = V, fe = k;
          else break e;
        }
      }
      return G;
    }
    function c(X, G) {
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
    var p = [], y = [], E = 1, T = null, w = 3, q = !1, C = !1, L = !1, U = !1, Y = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, $ = typeof setImmediate < "u" ? setImmediate : null;
    function W(X) {
      for (var G = s(y); G !== null; ) {
        if (G.callback === null) o(y);
        else if (G.startTime <= X)
          o(y), G.sortIndex = G.expirationTime, r(p, G);
        else break;
        G = s(y);
      }
    }
    function te(X) {
      if (L = !1, W(X), !C)
        if (s(p) !== null)
          C = !0, ge || (ge = !0, pe());
        else {
          var G = s(y);
          G !== null && Fe(te, G.startTime - X);
        }
    }
    var ge = !1, ie = -1, P = 5, le = -1;
    function se() {
      return U ? !0 : !(n.unstable_now() - le < P);
    }
    function Ue() {
      if (U = !1, ge) {
        var X = n.unstable_now();
        le = X;
        var G = !0;
        try {
          e: {
            C = !1, L && (L = !1, Q(ie), ie = -1), q = !0;
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
                    T === s(p) && o(p), W(X);
                  } else o(p);
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
          G ? pe() : ge = !1;
        }
      }
    }
    var pe;
    if (typeof $ == "function")
      pe = function() {
        $(Ue);
      };
    else if (typeof MessageChannel < "u") {
      var Ge = new MessageChannel(), Ze = Ge.port2;
      Ge.port1.onmessage = Ue, pe = function() {
        Ze.postMessage(null);
      };
    } else
      pe = function() {
        Y(Ue, 0);
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
      U = !0;
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
        id: E++,
        callback: G,
        priorityLevel: X,
        startTime: V,
        expirationTime: Ae,
        sortIndex: -1
      }, V > fe ? (X.sortIndex = V, r(y, X), s(p) === null && X === s(y) && (L ? (Q(ie), ie = -1) : L = !0, Fe(te, V - fe))) : (X.sortIndex = Ae, r(p, X), C || q || (C = !0, ge || (ge = !0, pe()))), X;
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
  })($o)), $o;
}
var H0;
function fv() {
  return H0 || (H0 = 1, Jo.exports = cv()), Jo.exports;
}
var B0;
function dv() {
  if (B0) return Ei;
  B0 = 1;
  var n = {};
  var r = fv(), s = fc(), o = ov();
  function c(e) {
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
      throw Error(c(188));
  }
  function E(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
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
        throw Error(c(188));
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
          if (!f) throw Error(c(189));
        }
      }
      if (l.alternate !== a) throw Error(c(190));
    }
    if (l.tag !== 3) throw Error(c(188));
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
  var w = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), C = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), U = /* @__PURE__ */ Symbol.for("react.fragment"), Y = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), te = /* @__PURE__ */ Symbol.for("react.forward_ref"), ge = /* @__PURE__ */ Symbol.for("react.suspense"), ie = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), le = /* @__PURE__ */ Symbol.for("react.lazy"), se = /* @__PURE__ */ Symbol.for("react.activity"), Ue = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
  function Ge(e) {
    return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
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
      case Q:
        return "Profiler";
      case Y:
        return "StrictMode";
      case ge:
        return "Suspense";
      case ie:
        return "SuspenseList";
      case se:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
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
  var X = Array.isArray, G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ae = [], Ce = -1;
  function b(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ce || (e.current = Ae[Ce], Ae[Ce] = null, Ce--);
  }
  function k(e, t) {
    Ce++, Ae[Ce] = e.current, e.current = t;
  }
  var Z = b(null), ae = b(null), K = b(null), oe = b(null);
  function Be(e, t) {
    switch (k(K, t), k(ae, e), k(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Zh(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Zh(t), e = Jh(t, e);
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
  function Ye() {
    H(Z), H(ae), H(K);
  }
  function ta(e) {
    e.memoizedState !== null && k(oe, e);
    var t = Z.current, l = Jh(t, e.type);
    t !== l && (k(ae, e), k(Z, l));
  }
  function Oa(e) {
    ae.current === e && (H(Z), H(ae)), oe.current === e && (H(oe), hi._currentValue = fe);
  }
  var An, Se;
  function ft(e) {
    if (An === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        An = t && t[1] || "", Se = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + An + e + Se;
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
        var S = f.split(`
`), N = m.split(`
`);
        for (i = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; i < N.length && !N[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (a === S.length || i === N.length)
          for (a = S.length - 1, i = N.length - 1; 1 <= a && 0 <= i && S[a] !== N[i]; )
            i--;
        for (; 1 <= a && 0 <= i; a--, i--)
          if (S[a] !== N[i]) {
            if (a !== 1 || i !== 1)
              do
                if (a--, i--, 0 > i || S[a] !== N[i]) {
                  var z = `
` + S[a].replace(" at new ", " at ");
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
  var xr = Object.prototype.hasOwnProperty, Cr = r.unstable_scheduleCallback, _r = r.unstable_cancelCallback, uy = r.unstable_shouldYield, ry = r.unstable_requestPaint, xt = r.unstable_now, sy = r.unstable_getCurrentPriorityLevel, Ac = r.unstable_ImmediatePriority, xc = r.unstable_UserBlockingPriority, Hi = r.unstable_NormalPriority, oy = r.unstable_LowPriority, Cc = r.unstable_IdlePriority, cy = r.log, fy = r.unstable_setDisableYieldValue, xn = null, Ct = null;
  function Ol(e) {
    if (typeof cy == "function" && fy(e), Ct && typeof Ct.setStrictMode == "function")
      try {
        Ct.setStrictMode(xn, e);
      } catch {
      }
  }
  var _t = Math.clz32 ? Math.clz32 : my, dy = Math.log, hy = Math.LN2;
  function my(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (dy(e) / hy | 0) | 0;
  }
  var Bi = 256, qi = 262144, Gi = 4194304;
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
  function Yi(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var m = a & 134217727;
    return m !== 0 ? (a = m & ~u, a !== 0 ? i = aa(a) : (f &= m, f !== 0 ? i = aa(f) : l || (l = m & ~e, l !== 0 && (i = aa(l))))) : (m = a & ~u, m !== 0 ? i = aa(m) : f !== 0 ? i = aa(f) : l || (l = a & ~e, l !== 0 && (i = aa(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : i;
  }
  function Cn(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function yy(e, t) {
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
  function _c() {
    var e = Gi;
    return Gi <<= 1, (Gi & 62914560) === 0 && (Gi = 4194304), e;
  }
  function Nr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function _n(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function gy(e, t, l, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var m = e.entanglements, S = e.expirationTimes, N = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var z = 31 - _t(l), B = 1 << z;
      m[z] = 0, S[z] = -1;
      var O = N[z];
      if (O !== null)
        for (N[z] = null, z = 0; z < O.length; z++) {
          var M = O[z];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~B;
    }
    a !== 0 && Nc(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Nc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
  }
  function Oc(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var a = 31 - _t(l), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), l &= ~i;
    }
  }
  function wc(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Or(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Or(e) {
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
  function wr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Dc() {
    var e = V.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : p0(e.type));
  }
  function Uc(e, t) {
    var l = V.p;
    try {
      return V.p = e, t();
    } finally {
      V.p = l;
    }
  }
  var wl = Math.random().toString(36).slice(2), ut = "__reactFiber$" + wl, yt = "__reactProps$" + wl, wa = "__reactContainer$" + wl, Dr = "__reactEvents$" + wl, py = "__reactListeners$" + wl, vy = "__reactHandles$" + wl, Mc = "__reactResources$" + wl, Nn = "__reactMarker$" + wl;
  function Ur(e) {
    delete e[ut], delete e[yt], delete e[Dr], delete e[py], delete e[vy];
  }
  function Da(e) {
    var t = e[ut];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[wa] || l[ut]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = t0(e); e !== null; ) {
            if (l = e[ut]) return l;
            e = t0(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Ua(e) {
    if (e = e[ut] || e[wa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function On(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Ma(e) {
    var t = e[Mc];
    return t || (t = e[Mc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function at(e) {
    e[Nn] = !0;
  }
  var zc = /* @__PURE__ */ new Set(), Lc = {};
  function na(e, t) {
    za(e, t), za(e + "Capture", t);
  }
  function za(e, t) {
    for (Lc[e] = t, e = 0; e < t.length; e++)
      zc.add(t[e]);
  }
  var Ey = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jc = {}, Hc = {};
  function Sy(e) {
    return xr.call(Hc, e) ? !0 : xr.call(jc, e) ? !1 : Ey.test(e) ? Hc[e] = !0 : (jc[e] = !0, !1);
  }
  function Xi(e, t, l) {
    if (Sy(t))
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
  function Vi(e, t, l) {
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
  function Lt(e) {
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
  function Bc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function by(e, t, l) {
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
  function Mr(e) {
    if (!e._valueTracker) {
      var t = Bc(e) ? "checked" : "value";
      e._valueTracker = by(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function qc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), a = "";
    return e && (a = Bc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Ki(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ry = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Ry,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zr(e, t, l, a, i, u, f, m) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Lt(t)) : e.value !== "" + Lt(t) && (e.value = "" + Lt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Lr(e, f, Lt(t)) : l != null ? Lr(e, f, Lt(l)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? e.name = "" + Lt(m) : e.removeAttribute("name");
  }
  function Gc(e, t, l, a, i, u, f, m) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Mr(e);
        return;
      }
      l = l != null ? "" + Lt(l) : "", t = t != null ? "" + Lt(t) : l, m || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = m ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Mr(e);
  }
  function Lr(e, t, l) {
    t === "number" && Ki(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function La(e, t, l, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < l.length; i++)
        t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + Lt(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yc(e, t, l) {
    if (t != null && (t = "" + Lt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + Lt(l) : "";
  }
  function Xc(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(c(92));
        if (X(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), t = l;
    }
    l = Lt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Mr(e);
  }
  function ja(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ty = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vc(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || Ty.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Kc(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, l != null) {
      for (var a in l)
        !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && l[i] !== a && Vc(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Vc(e, u, t[u]);
  }
  function jr(e) {
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
  var Ay = /* @__PURE__ */ new Map([
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
  ]), xy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ki(e) {
    return xy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function rl() {
  }
  var Hr = null;
  function Br(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ha = null, Ba = null;
  function kc(e) {
    var t = Ua(e);
    if (t && (e = t.stateNode)) {
      var l = e[yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (zr(
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
                if (!i) throw Error(c(90));
                zr(
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
              a = l[t], a.form === e.form && qc(a);
          }
          break e;
        case "textarea":
          Yc(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && La(e, !!l.multiple, t, !1);
      }
    }
  }
  var qr = !1;
  function Qc(e, t, l) {
    if (qr) return e(t, l);
    qr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (qr = !1, (Ha !== null || Ba !== null) && (Uu(), Ha && (t = Ha, e = Ba, Ba = Ha = null, kc(t), e)))
        for (t = 0; t < e.length; t++) kc(e[t]);
    }
  }
  function wn(e, t) {
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
        c(231, t, typeof l)
      );
    return l;
  }
  var sl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gr = !1;
  if (sl)
    try {
      var Dn = {};
      Object.defineProperty(Dn, "passive", {
        get: function() {
          Gr = !0;
        }
      }), window.addEventListener("test", Dn, Dn), window.removeEventListener("test", Dn, Dn);
    } catch {
      Gr = !1;
    }
  var Dl = null, Yr = null, Qi = null;
  function Zc() {
    if (Qi) return Qi;
    var e, t = Yr, l = t.length, a, i = "value" in Dl ? Dl.value : Dl.textContent, u = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++) ;
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === i[u - a]; a++) ;
    return Qi = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Zi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ji() {
    return !0;
  }
  function Jc() {
    return !1;
  }
  function gt(e) {
    function t(l, a, i, u, f) {
      this._reactName = l, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var m in e)
        e.hasOwnProperty(m) && (l = e[m], this[m] = l ? l(u) : u[m]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ji : Jc, this.isPropagationStopped = Jc, this;
    }
    return w(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Ji);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Ji);
      },
      persist: function() {
      },
      isPersistent: Ji
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
  }, $i = gt(ia), Un = w({}, ia, { view: 0, detail: 0 }), Cy = gt(Un), Xr, Vr, Mn, Fi = w({}, Un, {
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
    getModifierState: kr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Mn && (Mn && e.type === "mousemove" ? (Xr = e.screenX - Mn.screenX, Vr = e.screenY - Mn.screenY) : Vr = Xr = 0, Mn = e), Xr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Vr;
    }
  }), $c = gt(Fi), _y = w({}, Fi, { dataTransfer: 0 }), Ny = gt(_y), Oy = w({}, Un, { relatedTarget: 0 }), Kr = gt(Oy), wy = w({}, ia, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dy = gt(wy), Uy = w({}, ia, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), My = gt(Uy), zy = w({}, ia, { data: 0 }), Fc = gt(zy), Ly = {
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
  }, jy = {
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
  }, Hy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function By(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hy[e]) ? !!t[e] : !1;
  }
  function kr() {
    return By;
  }
  var qy = w({}, Un, {
    key: function(e) {
      if (e.key) {
        var t = Ly[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jy[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: kr,
    charCode: function(e) {
      return e.type === "keypress" ? Zi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Gy = gt(qy), Yy = w({}, Fi, {
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
  }), Wc = gt(Yy), Xy = w({}, Un, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: kr
  }), Vy = gt(Xy), Ky = w({}, ia, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ky = gt(Ky), Qy = w({}, Fi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Zy = gt(Qy), Jy = w({}, ia, {
    newState: 0,
    oldState: 0
  }), $y = gt(Jy), Fy = [9, 13, 27, 32], Qr = sl && "CompositionEvent" in window, zn = null;
  sl && "documentMode" in document && (zn = document.documentMode);
  var Wy = sl && "TextEvent" in window && !zn, Ic = sl && (!Qr || zn && 8 < zn && 11 >= zn), Pc = " ", ef = !1;
  function tf(e, t) {
    switch (e) {
      case "keyup":
        return Fy.indexOf(t.keyCode) !== -1;
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
  function lf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var qa = !1;
  function Iy(e, t) {
    switch (e) {
      case "compositionend":
        return lf(t);
      case "keypress":
        return t.which !== 32 ? null : (ef = !0, Pc);
      case "textInput":
        return e = t.data, e === Pc && ef ? null : e;
      default:
        return null;
    }
  }
  function Py(e, t) {
    if (qa)
      return e === "compositionend" || !Qr && tf(e, t) ? (e = Zc(), Qi = Yr = Dl = null, qa = !1, e) : null;
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
        return Ic && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var e1 = {
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
  function af(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!e1[e.type] : t === "textarea";
  }
  function nf(e, t, l, a) {
    Ha ? Ba ? Ba.push(a) : Ba = [a] : Ha = a, t = qu(t, "onChange"), 0 < t.length && (l = new $i(
      "onChange",
      "change",
      null,
      l,
      a
    ), e.push({ event: l, listeners: t }));
  }
  var Ln = null, jn = null;
  function t1(e) {
    Yh(e, 0);
  }
  function Wi(e) {
    var t = On(e);
    if (qc(t)) return e;
  }
  function uf(e, t) {
    if (e === "change") return t;
  }
  var rf = !1;
  if (sl) {
    var Zr;
    if (sl) {
      var Jr = "oninput" in document;
      if (!Jr) {
        var sf = document.createElement("div");
        sf.setAttribute("oninput", "return;"), Jr = typeof sf.oninput == "function";
      }
      Zr = Jr;
    } else Zr = !1;
    rf = Zr && (!document.documentMode || 9 < document.documentMode);
  }
  function of() {
    Ln && (Ln.detachEvent("onpropertychange", cf), jn = Ln = null);
  }
  function cf(e) {
    if (e.propertyName === "value" && Wi(jn)) {
      var t = [];
      nf(
        t,
        jn,
        e,
        Br(e)
      ), Qc(t1, t);
    }
  }
  function l1(e, t, l) {
    e === "focusin" ? (of(), Ln = t, jn = l, Ln.attachEvent("onpropertychange", cf)) : e === "focusout" && of();
  }
  function a1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wi(jn);
  }
  function n1(e, t) {
    if (e === "click") return Wi(t);
  }
  function i1(e, t) {
    if (e === "input" || e === "change")
      return Wi(t);
  }
  function u1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : u1;
  function Hn(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var i = l[a];
      if (!xr.call(t, i) || !Nt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function ff(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function df(e, t) {
    var l = ff(e);
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
      l = ff(l);
    }
  }
  function hf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? hf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function mf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ki(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = Ki(e.document);
    }
    return t;
  }
  function $r(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var r1 = sl && "documentMode" in document && 11 >= document.documentMode, Ga = null, Fr = null, Bn = null, Wr = !1;
  function yf(e, t, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wr || Ga == null || Ga !== Ki(a) || (a = Ga, "selectionStart" in a && $r(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Bn && Hn(Bn, a) || (Bn = a, a = qu(Fr, "onSelect"), 0 < a.length && (t = new $i(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: a }), t.target = Ga)));
  }
  function ua(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Ya = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, Ir = {}, gf = {};
  sl && (gf = document.createElement("div").style, "AnimationEvent" in window || (delete Ya.animationend.animation, delete Ya.animationiteration.animation, delete Ya.animationstart.animation), "TransitionEvent" in window || delete Ya.transitionend.transition);
  function ra(e) {
    if (Ir[e]) return Ir[e];
    if (!Ya[e]) return e;
    var t = Ya[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in gf)
        return Ir[e] = t[l];
    return e;
  }
  var pf = ra("animationend"), vf = ra("animationiteration"), Ef = ra("animationstart"), s1 = ra("transitionrun"), o1 = ra("transitionstart"), c1 = ra("transitioncancel"), Sf = ra("transitionend"), bf = /* @__PURE__ */ new Map(), Pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Pr.push("scrollEnd");
  function Jt(e, t) {
    bf.set(e, t), na(t, [e]);
  }
  var Ii = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ht = [], Xa = 0, es = 0;
  function Pi() {
    for (var e = Xa, t = es = Xa = 0; t < e; ) {
      var l = Ht[t];
      Ht[t++] = null;
      var a = Ht[t];
      Ht[t++] = null;
      var i = Ht[t];
      Ht[t++] = null;
      var u = Ht[t];
      if (Ht[t++] = null, a !== null && i !== null) {
        var f = a.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
      }
      u !== 0 && Rf(l, i, u);
    }
  }
  function eu(e, t, l, a) {
    Ht[Xa++] = e, Ht[Xa++] = t, Ht[Xa++] = l, Ht[Xa++] = a, es |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ts(e, t, l, a) {
    return eu(e, t, l, a), tu(e);
  }
  function sa(e, t) {
    return eu(e, null, null, t), tu(e);
  }
  function Rf(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - _t(l), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = l | 536870912), u) : null;
  }
  function tu(e) {
    if (50 < ui)
      throw ui = 0, co = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Va = {};
  function f1(e, t, l, a) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, l, a) {
    return new f1(e, t, l, a);
  }
  function ls(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ol(e, t) {
    var l = e.alternate;
    return l === null ? (l = Ot(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Tf(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function lu(e, t, l, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") ls(e) && (f = 1);
    else if (typeof e == "string")
      f = gg(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case se:
          return e = Ot(31, l, t, i), e.elementType = se, e.lanes = u, e;
        case U:
          return oa(l.children, i, u, t);
        case Y:
          f = 8, i |= 24;
          break;
        case Q:
          return e = Ot(12, l, t, i | 2), e.elementType = Q, e.lanes = u, e;
        case ge:
          return e = Ot(13, l, t, i), e.elementType = ge, e.lanes = u, e;
        case ie:
          return e = Ot(19, l, t, i), e.elementType = ie, e.lanes = u, e;
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
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ot(f, l, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function oa(e, t, l, a) {
    return e = Ot(7, e, a, t), e.lanes = l, e;
  }
  function as(e, t, l) {
    return e = Ot(6, e, null, t), e.lanes = l, e;
  }
  function Af(e) {
    var t = Ot(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ns(e, t, l) {
    return t = Ot(
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
  var xf = /* @__PURE__ */ new WeakMap();
  function Bt(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = xf.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: ji(t)
      }, xf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: ji(t)
    };
  }
  var Ka = [], ka = 0, au = null, qn = 0, qt = [], Gt = 0, Ul = null, tl = 1, ll = "";
  function cl(e, t) {
    Ka[ka++] = qn, Ka[ka++] = au, au = e, qn = t;
  }
  function Cf(e, t, l) {
    qt[Gt++] = tl, qt[Gt++] = ll, qt[Gt++] = Ul, Ul = e;
    var a = tl;
    e = ll;
    var i = 32 - _t(a) - 1;
    a &= ~(1 << i), l += 1;
    var u = 32 - _t(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, tl = 1 << 32 - _t(t) + i | l << i | a, ll = u + e;
    } else
      tl = 1 << u | l << i | a, ll = e;
  }
  function is(e) {
    e.return !== null && (cl(e, 1), Cf(e, 1, 0));
  }
  function us(e) {
    for (; e === au; )
      au = Ka[--ka], Ka[ka] = null, qn = Ka[--ka], Ka[ka] = null;
    for (; e === Ul; )
      Ul = qt[--Gt], qt[Gt] = null, ll = qt[--Gt], qt[Gt] = null, tl = qt[--Gt], qt[Gt] = null;
  }
  function _f(e, t) {
    qt[Gt++] = tl, qt[Gt++] = ll, qt[Gt++] = Ul, tl = t.id, ll = t.overflow, Ul = e;
  }
  var rt = null, Le = null, be = !1, Ml = null, Yt = !1, rs = Error(c(519));
  function zl(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Gn(Bt(t, e)), rs;
  }
  function Nf(e) {
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
        for (l = 0; l < si.length; l++)
          he(si[l], t);
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
        he("invalid", t), Gc(
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
        he("invalid", t), Xc(t, a.value, a.defaultValue, a.children);
    }
    l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || kh(t.textContent, l) ? (a.popover != null && (he("beforetoggle", t), he("toggle", t)), a.onScroll != null && he("scroll", t), a.onScrollEnd != null && he("scrollend", t), a.onClick != null && (t.onclick = rl), t = !0) : t = !1, t || zl(e, !0);
  }
  function Of(e) {
    for (rt = e.return; rt; )
      switch (rt.tag) {
        case 5:
        case 31:
        case 13:
          Yt = !1;
          return;
        case 27:
        case 3:
          Yt = !0;
          return;
        default:
          rt = rt.return;
      }
  }
  function Qa(e) {
    if (e !== rt) return !1;
    if (!be) return Of(e), be = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Co(e.type, e.memoizedProps)), l = !l), l && Le && zl(e), Of(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = e0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Le = e0(e);
    } else
      t === 27 ? (t = Le, Jl(e.type) ? (e = Do, Do = null, Le = e) : Le = t) : Le = rt ? Vt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ca() {
    Le = rt = null, be = !1;
  }
  function ss() {
    var e = Ml;
    return e !== null && (St === null ? St = e : St.push.apply(
      St,
      e
    ), Ml = null), e;
  }
  function Gn(e) {
    Ml === null ? Ml = [e] : Ml.push(e);
  }
  var os = b(null), fa = null, fl = null;
  function Ll(e, t, l) {
    k(os, t._currentValue), t._currentValue = l;
  }
  function dl(e) {
    e._currentValue = os.current, H(os);
  }
  function cs(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function fs(e, t, l, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var f = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var m = u;
          u = i;
          for (var S = 0; S < t.length; S++)
            if (m.context === t[S]) {
              u.lanes |= l, m = u.alternate, m !== null && (m.lanes |= l), cs(
                u.return,
                l,
                e
              ), a || (f = null);
              break e;
            }
          u = m.next;
        }
      } else if (i.tag === 18) {
        if (f = i.return, f === null) throw Error(c(341));
        f.lanes |= l, u = f.alternate, u !== null && (u.lanes |= l), cs(f, l, e), f = null;
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
  function Za(e, t, l, a) {
    e = null;
    for (var i = t, u = !1; i !== null; ) {
      if (!u) {
        if ((i.flags & 524288) !== 0) u = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(c(387));
        if (f = f.memoizedProps, f !== null) {
          var m = i.type;
          Nt(i.pendingProps.value, f.value) || (e !== null ? e.push(m) : e = [m]);
        }
      } else if (i === oe.current) {
        if (f = i.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(hi) : e = [hi]);
      }
      i = i.return;
    }
    e !== null && fs(
      t,
      e,
      l,
      a
    ), t.flags |= 262144;
  }
  function nu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Nt(
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
    return wf(fa, e);
  }
  function iu(e, t) {
    return fa === null && da(e), wf(e, t);
  }
  function wf(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, fl === null) {
      if (e === null) throw Error(c(308));
      fl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else fl = fl.next = t;
    return l;
  }
  var d1 = typeof AbortController < "u" ? AbortController : function() {
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
  }, h1 = r.unstable_scheduleCallback, m1 = r.unstable_NormalPriority, We = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ds() {
    return {
      controller: new d1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yn(e) {
    e.refCount--, e.refCount === 0 && h1(m1, function() {
      e.controller.abort();
    });
  }
  var Xn = null, hs = 0, Ja = 0, $a = null;
  function y1(e, t) {
    if (Xn === null) {
      var l = Xn = [];
      hs = 0, Ja = po(), $a = {
        status: "pending",
        value: void 0,
        then: function(a) {
          l.push(a);
        }
      };
    }
    return hs++, t.then(Df, Df), t;
  }
  function Df() {
    if (--hs === 0 && Xn !== null) {
      $a !== null && ($a.status = "fulfilled");
      var e = Xn;
      Xn = null, Ja = 0, $a = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function g1(e, t) {
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
  var Uf = G.S;
  G.S = function(e, t) {
    yh = xt(), typeof t == "object" && t !== null && typeof t.then == "function" && y1(e, t), Uf !== null && Uf(e, t);
  };
  var ha = b(null);
  function ms() {
    var e = ha.current;
    return e !== null ? e : Me.pooledCache;
  }
  function uu(e, t) {
    t === null ? k(ha, ha.current) : k(ha, t.pool);
  }
  function Mf() {
    var e = ms();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var Fa = Error(c(460)), ys = Error(c(474)), ru = Error(c(542)), su = { then: function() {
  } };
  function zf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Lf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(rl, rl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Hf(e), e;
      default:
        if (typeof t.status == "string") t.then(rl, rl);
        else {
          if (e = Me, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
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
            throw e = t.reason, Hf(e), e;
        }
        throw ya = t, Fa;
    }
  }
  function ma(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (ya = l, Fa) : l;
    }
  }
  var ya = null;
  function jf() {
    if (ya === null) throw Error(c(459));
    var e = ya;
    return ya = null, e;
  }
  function Hf(e) {
    if (e === Fa || e === ru)
      throw Error(c(483));
  }
  var Wa = null, Vn = 0;
  function ou(e) {
    var t = Vn;
    return Vn += 1, Wa === null && (Wa = []), Lf(Wa, e, t);
  }
  function Kn(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function cu(e, t) {
    throw t.$$typeof === q ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Bf(e) {
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
      return x = ol(x, R), x.index = 0, x.sibling = null, x;
    }
    function u(x, R, _) {
      return x.index = _, e ? (_ = x.alternate, _ !== null ? (_ = _.index, _ < R ? (x.flags |= 67108866, R) : _) : (x.flags |= 67108866, R)) : (x.flags |= 1048576, R);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function m(x, R, _, j) {
      return R === null || R.tag !== 6 ? (R = as(_, x.mode, j), R.return = x, R) : (R = i(R, _), R.return = x, R);
    }
    function S(x, R, _, j) {
      var I = _.type;
      return I === U ? z(
        x,
        R,
        _.props.children,
        j,
        _.key
      ) : R !== null && (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === le && ma(I) === R.type) ? (R = i(R, _.props), Kn(R, _), R.return = x, R) : (R = lu(
        _.type,
        _.key,
        _.props,
        null,
        x.mode,
        j
      ), Kn(R, _), R.return = x, R);
    }
    function N(x, R, _, j) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== _.containerInfo || R.stateNode.implementation !== _.implementation ? (R = ns(_, x.mode, j), R.return = x, R) : (R = i(R, _.children || []), R.return = x, R);
    }
    function z(x, R, _, j, I) {
      return R === null || R.tag !== 7 ? (R = oa(
        _,
        x.mode,
        j,
        I
      ), R.return = x, R) : (R = i(R, _), R.return = x, R);
    }
    function B(x, R, _) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = as(
          "" + R,
          x.mode,
          _
        ), R.return = x, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case C:
            return _ = lu(
              R.type,
              R.key,
              R.props,
              null,
              x.mode,
              _
            ), Kn(_, R), _.return = x, _;
          case L:
            return R = ns(
              R,
              x.mode,
              _
            ), R.return = x, R;
          case le:
            return R = ma(R), B(x, R, _);
        }
        if (X(R) || Ge(R))
          return R = oa(
            R,
            x.mode,
            _,
            null
          ), R.return = x, R;
        if (typeof R.then == "function")
          return B(x, ou(R), _);
        if (R.$$typeof === W)
          return B(
            x,
            iu(x, R),
            _
          );
        cu(x, R);
      }
      return null;
    }
    function O(x, R, _, j) {
      var I = R !== null ? R.key : null;
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return I !== null ? null : m(x, R, "" + _, j);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case C:
            return _.key === I ? S(x, R, _, j) : null;
          case L:
            return _.key === I ? N(x, R, _, j) : null;
          case le:
            return _ = ma(_), O(x, R, _, j);
        }
        if (X(_) || Ge(_))
          return I !== null ? null : z(x, R, _, j, null);
        if (typeof _.then == "function")
          return O(
            x,
            R,
            ou(_),
            j
          );
        if (_.$$typeof === W)
          return O(
            x,
            R,
            iu(x, _),
            j
          );
        cu(x, _);
      }
      return null;
    }
    function M(x, R, _, j, I) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return x = x.get(_) || null, m(R, x, "" + j, I);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case C:
            return x = x.get(
              j.key === null ? _ : j.key
            ) || null, S(R, x, j, I);
          case L:
            return x = x.get(
              j.key === null ? _ : j.key
            ) || null, N(R, x, j, I);
          case le:
            return j = ma(j), M(
              x,
              R,
              _,
              j,
              I
            );
        }
        if (X(j) || Ge(j))
          return x = x.get(_) || null, z(R, x, j, I, null);
        if (typeof j.then == "function")
          return M(
            x,
            R,
            _,
            ou(j),
            I
          );
        if (j.$$typeof === W)
          return M(
            x,
            R,
            _,
            iu(R, j),
            I
          );
        cu(R, j);
      }
      return null;
    }
    function J(x, R, _, j) {
      for (var I = null, Re = null, F = R, ce = R = 0, Ee = null; F !== null && ce < _.length; ce++) {
        F.index > ce ? (Ee = F, F = null) : Ee = F.sibling;
        var Te = O(
          x,
          F,
          _[ce],
          j
        );
        if (Te === null) {
          F === null && (F = Ee);
          break;
        }
        e && F && Te.alternate === null && t(x, F), R = u(Te, R, ce), Re === null ? I = Te : Re.sibling = Te, Re = Te, F = Ee;
      }
      if (ce === _.length)
        return l(x, F), be && cl(x, ce), I;
      if (F === null) {
        for (; ce < _.length; ce++)
          F = B(x, _[ce], j), F !== null && (R = u(
            F,
            R,
            ce
          ), Re === null ? I = F : Re.sibling = F, Re = F);
        return be && cl(x, ce), I;
      }
      for (F = a(F); ce < _.length; ce++)
        Ee = M(
          F,
          x,
          ce,
          _[ce],
          j
        ), Ee !== null && (e && Ee.alternate !== null && F.delete(
          Ee.key === null ? ce : Ee.key
        ), R = u(
          Ee,
          R,
          ce
        ), Re === null ? I = Ee : Re.sibling = Ee, Re = Ee);
      return e && F.forEach(function(Pl) {
        return t(x, Pl);
      }), be && cl(x, ce), I;
    }
    function ee(x, R, _, j) {
      if (_ == null) throw Error(c(151));
      for (var I = null, Re = null, F = R, ce = R = 0, Ee = null, Te = _.next(); F !== null && !Te.done; ce++, Te = _.next()) {
        F.index > ce ? (Ee = F, F = null) : Ee = F.sibling;
        var Pl = O(x, F, Te.value, j);
        if (Pl === null) {
          F === null && (F = Ee);
          break;
        }
        e && F && Pl.alternate === null && t(x, F), R = u(Pl, R, ce), Re === null ? I = Pl : Re.sibling = Pl, Re = Pl, F = Ee;
      }
      if (Te.done)
        return l(x, F), be && cl(x, ce), I;
      if (F === null) {
        for (; !Te.done; ce++, Te = _.next())
          Te = B(x, Te.value, j), Te !== null && (R = u(Te, R, ce), Re === null ? I = Te : Re.sibling = Te, Re = Te);
        return be && cl(x, ce), I;
      }
      for (F = a(F); !Te.done; ce++, Te = _.next())
        Te = M(F, x, ce, Te.value, j), Te !== null && (e && Te.alternate !== null && F.delete(Te.key === null ? ce : Te.key), R = u(Te, R, ce), Re === null ? I = Te : Re.sibling = Te, Re = Te);
      return e && F.forEach(function(_g) {
        return t(x, _g);
      }), be && cl(x, ce), I;
    }
    function De(x, R, _, j) {
      if (typeof _ == "object" && _ !== null && _.type === U && _.key === null && (_ = _.props.children), typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case C:
            e: {
              for (var I = _.key; R !== null; ) {
                if (R.key === I) {
                  if (I = _.type, I === U) {
                    if (R.tag === 7) {
                      l(
                        x,
                        R.sibling
                      ), j = i(
                        R,
                        _.props.children
                      ), j.return = x, x = j;
                      break e;
                    }
                  } else if (R.elementType === I || typeof I == "object" && I !== null && I.$$typeof === le && ma(I) === R.type) {
                    l(
                      x,
                      R.sibling
                    ), j = i(R, _.props), Kn(j, _), j.return = x, x = j;
                    break e;
                  }
                  l(x, R);
                  break;
                } else t(x, R);
                R = R.sibling;
              }
              _.type === U ? (j = oa(
                _.props.children,
                x.mode,
                j,
                _.key
              ), j.return = x, x = j) : (j = lu(
                _.type,
                _.key,
                _.props,
                null,
                x.mode,
                j
              ), Kn(j, _), j.return = x, x = j);
            }
            return f(x);
          case L:
            e: {
              for (I = _.key; R !== null; ) {
                if (R.key === I)
                  if (R.tag === 4 && R.stateNode.containerInfo === _.containerInfo && R.stateNode.implementation === _.implementation) {
                    l(
                      x,
                      R.sibling
                    ), j = i(R, _.children || []), j.return = x, x = j;
                    break e;
                  } else {
                    l(x, R);
                    break;
                  }
                else t(x, R);
                R = R.sibling;
              }
              j = ns(_, x.mode, j), j.return = x, x = j;
            }
            return f(x);
          case le:
            return _ = ma(_), De(
              x,
              R,
              _,
              j
            );
        }
        if (X(_))
          return J(
            x,
            R,
            _,
            j
          );
        if (Ge(_)) {
          if (I = Ge(_), typeof I != "function") throw Error(c(150));
          return _ = I.call(_), ee(
            x,
            R,
            _,
            j
          );
        }
        if (typeof _.then == "function")
          return De(
            x,
            R,
            ou(_),
            j
          );
        if (_.$$typeof === W)
          return De(
            x,
            R,
            iu(x, _),
            j
          );
        cu(x, _);
      }
      return typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint" ? (_ = "" + _, R !== null && R.tag === 6 ? (l(x, R.sibling), j = i(R, _), j.return = x, x = j) : (l(x, R), j = as(_, x.mode, j), j.return = x, x = j), f(x)) : l(x, R);
    }
    return function(x, R, _, j) {
      try {
        Vn = 0;
        var I = De(
          x,
          R,
          _,
          j
        );
        return Wa = null, I;
      } catch (F) {
        if (F === Fa || F === ru) throw F;
        var Re = Ot(29, F, null, x.mode);
        return Re.lanes = j, Re.return = x, Re;
      }
    };
  }
  var ga = Bf(!0), qf = Bf(!1), jl = !1;
  function gs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ps(e, t) {
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
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = tu(e), Rf(e, null, l), t;
    }
    return eu(e, a, t, l), tu(e);
  }
  function kn(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Oc(e, l);
    }
  }
  function vs(e, t) {
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
  var Es = !1;
  function Qn() {
    if (Es) {
      var e = $a;
      if (e !== null) throw e;
    }
  }
  function Zn(e, t, l, a) {
    Es = !1;
    var i = e.updateQueue;
    jl = !1;
    var u = i.firstBaseUpdate, f = i.lastBaseUpdate, m = i.shared.pending;
    if (m !== null) {
      i.shared.pending = null;
      var S = m, N = S.next;
      S.next = null, f === null ? u = N : f.next = N, f = S;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, m = z.lastBaseUpdate, m !== f && (m === null ? z.firstBaseUpdate = N : m.next = N, z.lastBaseUpdate = S));
    }
    if (u !== null) {
      var B = i.baseState;
      f = 0, z = N = S = null, m = u;
      do {
        var O = m.lane & -536870913, M = O !== m.lane;
        if (M ? (ve & O) === O : (a & O) === O) {
          O !== 0 && O === Ja && (Es = !0), z !== null && (z = z.next = {
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
          }, z === null ? (N = z = M, S = B) : z = z.next = M, f |= O;
        if (m = m.next, m === null) {
          if (m = i.shared.pending, m === null)
            break;
          M = m, m = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      z === null && (S = B), i.baseState = S, i.firstBaseUpdate = N, i.lastBaseUpdate = z, u === null && (i.shared.lanes = 0), Vl |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Gf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Yf(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        Gf(l[e], t);
  }
  var Ia = b(null), fu = b(0);
  function Xf(e, t) {
    e = bl, k(fu, e), k(Ia, t), bl = e | t.baseLanes;
  }
  function Ss() {
    k(fu, bl), k(Ia, Ia.current);
  }
  function bs() {
    bl = fu.current, H(Ia), H(fu);
  }
  var wt = b(null), Xt = null;
  function ql(e) {
    var t = e.alternate;
    k(Je, Je.current & 1), k(wt, e), Xt === null && (t === null || Ia.current !== null || t.memoizedState !== null) && (Xt = e);
  }
  function Rs(e) {
    k(Je, Je.current), k(wt, e), Xt === null && (Xt = e);
  }
  function Vf(e) {
    e.tag === 22 ? (k(Je, Je.current), k(wt, e), Xt === null && (Xt = e)) : Gl();
  }
  function Gl() {
    k(Je, Je.current), k(wt, wt.current);
  }
  function Dt(e) {
    H(wt), Xt === e && (Xt = null), H(Je);
  }
  var Je = b(0);
  function du(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || Oo(l) || wo(l)))
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
  var hl = 0, ue = null, Oe = null, Ie = null, hu = !1, Pa = !1, pa = !1, mu = 0, Jn = 0, en = null, p1 = 0;
  function Ve() {
    throw Error(c(321));
  }
  function Ts(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Nt(e[l], t[l])) return !1;
    return !0;
  }
  function As(e, t, l, a, i, u) {
    return hl = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e === null || e.memoizedState === null ? Cd : qs, pa = !1, u = l(a, i), pa = !1, Pa && (u = kf(
      t,
      l,
      a,
      i
    )), Kf(e), u;
  }
  function Kf(e) {
    G.H = Wn;
    var t = Oe !== null && Oe.next !== null;
    if (hl = 0, Ie = Oe = ue = null, hu = !1, Jn = 0, en = null, t) throw Error(c(300));
    e === null || Pe || (e = e.dependencies, e !== null && nu(e) && (Pe = !0));
  }
  function kf(e, t, l, a) {
    ue = e;
    var i = 0;
    do {
      if (Pa && (en = null), Jn = 0, Pa = !1, 25 <= i) throw Error(c(301));
      if (i += 1, Ie = Oe = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      G.H = _d, u = t(l, a);
    } while (Pa);
    return u;
  }
  function v1() {
    var e = G.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $n(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function xs() {
    var e = mu !== 0;
    return mu = 0, e;
  }
  function Cs(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function _s(e) {
    if (hu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      hu = !1;
    }
    hl = 0, Ie = Oe = ue = null, Pa = !1, Jn = mu = 0, en = null;
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
  function $e() {
    if (Oe === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = Ie === null ? ue.memoizedState : Ie.next;
    if (t !== null)
      Ie = t, Oe = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(c(467)) : Error(c(310));
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
  function yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $n(e) {
    var t = Jn;
    return Jn += 1, en === null && (en = []), e = Lf(en, e, t), t = ue, (Ie === null ? t.memoizedState : Ie.next) === null && (t = t.alternate, G.H = t === null || t.memoizedState === null ? Cd : qs), e;
  }
  function gu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $n(e);
      if (e.$$typeof === W) return st(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ns(e) {
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
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = yu(), ue.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++)
        l[a] = Ue;
    return t.index++, l;
  }
  function ml(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pu(e) {
    var t = $e();
    return Os(t, Oe, e);
  }
  function Os(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
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
      var m = f = null, S = null, N = t, z = !1;
      do {
        var B = N.lane & -536870913;
        if (B !== N.lane ? (ve & B) === B : (hl & B) === B) {
          var O = N.revertLane;
          if (O === 0)
            S !== null && (S = S.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), B === Ja && (z = !0);
          else if ((hl & O) === O) {
            N = N.next, O === Ja && (z = !0);
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
            }, S === null ? (m = S = B, f = u) : S = S.next = B, ue.lanes |= O, Vl |= O;
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
          }, S === null ? (m = S = O, f = u) : S = S.next = O, ue.lanes |= B, Vl |= B;
        N = N.next;
      } while (N !== null && N !== t);
      if (S === null ? f = u : S.next = m, !Nt(u, e.memoizedState) && (Pe = !0, z && (l = $a, l !== null)))
        throw l;
      e.memoizedState = u, e.baseState = f, e.baseQueue = S, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function ws(e) {
    var t = $e(), l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch, i = l.pending, u = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var f = i = i.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== i);
      Nt(u, t.memoizedState) || (Pe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
    }
    return [u, a];
  }
  function Qf(e, t, l) {
    var a = ue, i = $e(), u = be;
    if (u) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = t();
    var f = !Nt(
      (Oe || i).memoizedState,
      l
    );
    if (f && (i.memoizedState = l, Pe = !0), i = i.queue, Ms($f.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || Ie !== null && Ie.memoizedState.tag & 1) {
      if (a.flags |= 2048, tn(
        9,
        { destroy: void 0 },
        Jf.bind(
          null,
          a,
          i,
          l,
          t
        ),
        null
      ), Me === null) throw Error(c(349));
      u || (hl & 127) !== 0 || Zf(a, t, l);
    }
    return l;
  }
  function Zf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ue.updateQueue, t === null ? (t = yu(), ue.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Jf(e, t, l, a) {
    t.value = l, t.getSnapshot = a, Ff(t) && Wf(e);
  }
  function $f(e, t, l) {
    return l(function() {
      Ff(t) && Wf(e);
    });
  }
  function Ff(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !Nt(e, l);
    } catch {
      return !0;
    }
  }
  function Wf(e) {
    var t = sa(e, 2);
    t !== null && bt(t, e, 2);
  }
  function Ds(e) {
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
  function If(e, t, l, a) {
    return e.baseState = l, Os(
      e,
      Oe,
      typeof a == "function" ? a : ml
    );
  }
  function E1(e, t, l, a, i) {
    if (Su(e)) throw Error(c(485));
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
      G.T !== null ? l(!0) : u.isTransition = !1, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Pf(t, u)) : (u.next = l.next, t.pending = l.next = u);
    }
  }
  function Pf(e, t) {
    var l = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = G.T, f = {};
      G.T = f;
      try {
        var m = l(i, a), S = G.S;
        S !== null && S(f, m), ed(e, t, m);
      } catch (N) {
        Us(e, t, N);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), G.T = u;
      }
    } else
      try {
        u = l(i, a), ed(e, t, u);
      } catch (N) {
        Us(e, t, N);
      }
  }
  function ed(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(a) {
        td(e, t, a);
      },
      function(a) {
        return Us(e, t, a);
      }
    ) : td(e, t, l);
  }
  function td(e, t, l) {
    t.status = "fulfilled", t.value = l, ld(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Pf(e, l)));
  }
  function Us(e, t, l) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = l, ld(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function ld(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ad(e, t) {
    return t;
  }
  function nd(e, t) {
    if (be) {
      var l = Me.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (be) {
            if (Le) {
              t: {
                for (var i = Le, u = Yt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = Vt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                Le = Vt(
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
      lastRenderedReducer: ad,
      lastRenderedState: t
    }, l.queue = a, l = Td.bind(
      null,
      ue,
      a
    ), a.dispatch = l, a = Ds(!1), u = Bs.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = mt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, l = E1.bind(
      null,
      ue,
      i,
      u,
      l
    ), i.dispatch = l, a.memoizedState = e, [t, l, !1];
  }
  function id(e) {
    var t = $e();
    return ud(t, Oe, e);
  }
  function ud(e, t, l) {
    if (t = Os(
      e,
      t,
      ad
    )[0], e = pu(ml)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = $n(t);
      } catch (f) {
        throw f === Fa ? ru : f;
      }
    else a = t;
    t = $e();
    var i = t.queue, u = i.dispatch;
    return l !== t.memoizedState && (ue.flags |= 2048, tn(
      9,
      { destroy: void 0 },
      S1.bind(null, i, l),
      null
    )), [a, u, e];
  }
  function S1(e, t) {
    e.action = t;
  }
  function rd(e) {
    var t = $e(), l = Oe;
    if (l !== null)
      return ud(t, l, e);
    $e(), t = t.memoizedState, l = $e();
    var a = l.queue.dispatch;
    return l.memoizedState = e, [t, a, !1];
  }
  function tn(e, t, l, a) {
    return e = { tag: e, create: l, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = yu(), ue.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
  }
  function sd() {
    return $e().memoizedState;
  }
  function vu(e, t, l, a) {
    var i = mt();
    ue.flags |= e, i.memoizedState = tn(
      1 | t,
      { destroy: void 0 },
      l,
      a === void 0 ? null : a
    );
  }
  function Eu(e, t, l, a) {
    var i = $e();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Oe !== null && a !== null && Ts(a, Oe.memoizedState.deps) ? i.memoizedState = tn(t, u, l, a) : (ue.flags |= e, i.memoizedState = tn(
      1 | t,
      u,
      l,
      a
    ));
  }
  function od(e, t) {
    vu(8390656, 8, e, t);
  }
  function Ms(e, t) {
    Eu(2048, 8, e, t);
  }
  function b1(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = yu(), ue.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function cd(e) {
    var t = $e().memoizedState;
    return b1({ ref: t, nextImpl: e }), function() {
      if ((xe & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fd(e, t) {
    return Eu(4, 2, e, t);
  }
  function dd(e, t) {
    return Eu(4, 4, e, t);
  }
  function hd(e, t) {
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
  function md(e, t, l) {
    l = l != null ? l.concat([e]) : null, Eu(4, 4, hd.bind(null, t, e), l);
  }
  function zs() {
  }
  function yd(e, t) {
    var l = $e();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Ts(t, a[1]) ? a[0] : (l.memoizedState = [e, t], e);
  }
  function gd(e, t) {
    var l = $e();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Ts(t, a[1]))
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
  function Ls(e, t, l) {
    return l === void 0 || (hl & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = ph(), ue.lanes |= e, Vl |= e, l);
  }
  function pd(e, t, l, a) {
    return Nt(l, t) ? l : Ia.current !== null ? (e = Ls(e, l, a), Nt(e, t) || (Pe = !0), e) : (hl & 42) === 0 || (hl & 1073741824) !== 0 && (ve & 261930) === 0 ? (Pe = !0, e.memoizedState = l) : (e = ph(), ue.lanes |= e, Vl |= e, t);
  }
  function vd(e, t, l, a, i) {
    var u = V.p;
    V.p = u !== 0 && 8 > u ? u : 8;
    var f = G.T, m = {};
    G.T = m, Bs(e, !1, t, l);
    try {
      var S = i(), N = G.S;
      if (N !== null && N(m, S), S !== null && typeof S == "object" && typeof S.then == "function") {
        var z = g1(
          S,
          a
        );
        Fn(
          e,
          t,
          z,
          zt(e)
        );
      } else
        Fn(
          e,
          t,
          a,
          zt(e)
        );
    } catch (B) {
      Fn(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        zt()
      );
    } finally {
      V.p = u, f !== null && m.types !== null && (f.types = m.types), G.T = f;
    }
  }
  function R1() {
  }
  function js(e, t, l, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Ed(e).queue;
    vd(
      e,
      i,
      t,
      fe,
      l === null ? R1 : function() {
        return Sd(e), l(a);
      }
    );
  }
  function Ed(e) {
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
  function Sd(e) {
    var t = Ed(e);
    t.next === null && (t = e.alternate.memoizedState), Fn(
      e,
      t.next.queue,
      {},
      zt()
    );
  }
  function Hs() {
    return st(hi);
  }
  function bd() {
    return $e().memoizedState;
  }
  function Rd() {
    return $e().memoizedState;
  }
  function T1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = zt();
          e = Hl(l);
          var a = Bl(t, e, l);
          a !== null && (bt(a, t, l), kn(a, t, l)), t = { cache: ds() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function A1(e, t, l) {
    var a = zt();
    l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(e) ? Ad(t, l) : (l = ts(e, t, l, a), l !== null && (bt(l, e, a), xd(l, t, a)));
  }
  function Td(e, t, l) {
    var a = zt();
    Fn(e, t, l, a);
  }
  function Fn(e, t, l, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Su(e)) Ad(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, m = u(f, l);
          if (i.hasEagerState = !0, i.eagerState = m, Nt(m, f))
            return eu(e, t, i, 0), Me === null && Pi(), !1;
        } catch {
        }
      if (l = ts(e, t, i, a), l !== null)
        return bt(l, e, a), xd(l, t, a), !0;
    }
    return !1;
  }
  function Bs(e, t, l, a) {
    if (a = {
      lane: 2,
      revertLane: po(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Su(e)) {
      if (t) throw Error(c(479));
    } else
      t = ts(
        e,
        l,
        a,
        2
      ), t !== null && bt(t, e, 2);
  }
  function Su(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function Ad(e, t) {
    Pa = hu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function xd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, l |= a, t.lanes = l, Oc(e, l);
    }
  }
  var Wn = {
    readContext: st,
    use: gu,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useLayoutEffect: Ve,
    useInsertionEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    useHostTransitionStatus: Ve,
    useFormState: Ve,
    useActionState: Ve,
    useOptimistic: Ve,
    useMemoCache: Ve,
    useCacheRefresh: Ve
  };
  Wn.useEffectEvent = Ve;
  var Cd = {
    readContext: st,
    use: gu,
    useCallback: function(e, t) {
      return mt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: st,
    useEffect: od,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, vu(
        4194308,
        4,
        hd.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return vu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      vu(4, 2, e, t);
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
      }, a.queue = e, e = e.dispatch = A1.bind(
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
      e = Ds(e);
      var t = e.queue, l = Td.bind(null, ue, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var l = mt();
      return Ls(l, e, t);
    },
    useTransition: function() {
      var e = Ds(!1);
      return e = vd.bind(
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
          throw Error(c(407));
        l = l();
      } else {
        if (l = t(), Me === null)
          throw Error(c(349));
        (ve & 127) !== 0 || Zf(a, t, l);
      }
      i.memoizedState = l;
      var u = { value: l, getSnapshot: t };
      return i.queue = u, od($f.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, tn(
        9,
        { destroy: void 0 },
        Jf.bind(
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
      var e = mt(), t = Me.identifierPrefix;
      if (be) {
        var l = ll, a = tl;
        l = (a & ~(1 << 32 - _t(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = mu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = p1++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Hs,
    useFormState: nd,
    useActionState: nd,
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
      return t.queue = l, t = Bs.bind(
        null,
        ue,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Ns,
    useCacheRefresh: function() {
      return mt().memoizedState = T1.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = mt(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((xe & 2) !== 0)
          throw Error(c(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, qs = {
    readContext: st,
    use: gu,
    useCallback: yd,
    useContext: st,
    useEffect: Ms,
    useImperativeHandle: md,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: gd,
    useReducer: pu,
    useRef: sd,
    useState: function() {
      return pu(ml);
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var l = $e();
      return pd(
        l,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = pu(ml)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : $n(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: bd,
    useHostTransitionStatus: Hs,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e, t) {
      var l = $e();
      return If(l, Oe, e, t);
    },
    useMemoCache: Ns,
    useCacheRefresh: Rd
  };
  qs.useEffectEvent = cd;
  var _d = {
    readContext: st,
    use: gu,
    useCallback: yd,
    useContext: st,
    useEffect: Ms,
    useImperativeHandle: md,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: gd,
    useReducer: ws,
    useRef: sd,
    useState: function() {
      return ws(ml);
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var l = $e();
      return Oe === null ? Ls(l, e, t) : pd(
        l,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ws(ml)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : $n(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: bd,
    useHostTransitionStatus: Hs,
    useFormState: rd,
    useActionState: rd,
    useOptimistic: function(e, t) {
      var l = $e();
      return Oe !== null ? If(l, Oe, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Ns,
    useCacheRefresh: Rd
  };
  _d.useEffectEvent = cd;
  function Gs(e, t, l, a) {
    t = e.memoizedState, l = l(a, t), l = l == null ? t : w({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ys = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var a = zt(), i = Hl(a);
      i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (bt(t, e, a), kn(t, e, a));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var a = zt(), i = Hl(a);
      i.tag = 1, i.payload = t, l != null && (i.callback = l), t = Bl(e, i, a), t !== null && (bt(t, e, a), kn(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = zt(), a = Hl(l);
      a.tag = 2, t != null && (a.callback = t), t = Bl(e, a, l), t !== null && (bt(t, e, l), kn(t, e, l));
    }
  };
  function Nd(e, t, l, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Hn(l, a) || !Hn(i, u) : !0;
  }
  function Od(e, t, l, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Ys.enqueueReplaceState(t, t.state, null);
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
  function wd(e) {
    Ii(e);
  }
  function Dd(e) {
    console.error(e);
  }
  function Ud(e) {
    Ii(e);
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
  function Md(e, t, l) {
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
  function Xs(e, t, l) {
    return l = Hl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      bu(e, t);
    }, l;
  }
  function zd(e) {
    return e = Hl(e), e.tag = 3, e;
  }
  function Ld(e, t, l, a) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Md(t, l, a);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Md(t, l, a), typeof i != "function" && (Kl === null ? Kl = /* @__PURE__ */ new Set([this]) : Kl.add(this));
      var m = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function x1(e, t, l, a, i) {
    if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = l.alternate, t !== null && Za(
        t,
        l,
        i,
        !0
      ), l = wt.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Xt === null ? Mu() : l.alternate === null && Ke === 0 && (Ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, a === su ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), mo(e, a, i)), !1;
          case 22:
            return l.flags |= 65536, a === su ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : l.add(a)), mo(e, a, i)), !1;
        }
        throw Error(c(435, l.tag));
      }
      return mo(e, a, i), Mu(), !1;
    }
    if (be)
      return t = wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== rs && (e = Error(c(422), { cause: a }), Gn(Bt(e, l)))) : (a !== rs && (t = Error(c(423), {
        cause: a
      }), Gn(
        Bt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Bt(a, l), i = Xs(
        e.stateNode,
        a,
        i
      ), vs(e, i), Ke !== 4 && (Ke = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Bt(u, l), ii === null ? ii = [u] : ii.push(u), Ke !== 4 && (Ke = 2), t === null) return !0;
    a = Bt(a, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = i & -i, l.lanes |= e, e = Xs(l.stateNode, a, e), vs(l, e), !1;
        case 1:
          if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Kl === null || !Kl.has(u))))
            return l.flags |= 65536, i &= -i, l.lanes |= i, i = zd(i), Ld(
              i,
              e,
              l,
              a
            ), vs(l, i), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Vs = Error(c(461)), Pe = !1;
  function ot(e, t, l, a) {
    t.child = e === null ? qf(t, null, l, a) : ga(
      t,
      e.child,
      l,
      a
    );
  }
  function jd(e, t, l, a, i) {
    l = l.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var m in a)
        m !== "ref" && (f[m] = a[m]);
    } else f = a;
    return da(t), a = As(
      e,
      t,
      l,
      f,
      u,
      i
    ), m = xs(), e !== null && !Pe ? (Cs(e, t, i), yl(e, t, i)) : (be && m && is(t), t.flags |= 1, ot(e, t, a, i), t.child);
  }
  function Hd(e, t, l, a, i) {
    if (e === null) {
      var u = l.type;
      return typeof u == "function" && !ls(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, Bd(
        e,
        t,
        u,
        a,
        i
      )) : (e = lu(
        l.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ws(e, i)) {
      var f = u.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Hn, l(f, a) && e.ref === t.ref)
        return yl(e, t, i);
    }
    return t.flags |= 1, e = ol(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Bd(e, t, l, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Hn(u, a) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = a = u, Ws(e, i))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, yl(e, t, i);
    }
    return Ks(
      e,
      t,
      l,
      a,
      i
    );
  }
  function qd(e, t, l, a) {
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
        return Gd(
          e,
          t,
          u,
          l,
          a
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && uu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Xf(t, u) : Ss(), Vf(t);
      else
        return a = t.lanes = 536870912, Gd(
          e,
          t,
          u !== null ? u.baseLanes | l : l,
          l,
          a
        );
    } else
      u !== null ? (uu(t, u.cachePool), Xf(t, u), Gl(), t.memoizedState = null) : (e !== null && uu(t, null), Ss(), Gl());
    return ot(e, t, i, l), t.child;
  }
  function In(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Gd(e, t, l, a, i) {
    var u = ms();
    return u = u === null ? null : { parent: We._currentValue, pool: u }, t.memoizedState = {
      baseLanes: l,
      cachePool: u
    }, e !== null && uu(t, null), Ss(), Vf(t), e !== null && Za(e, t, a, !0), t.childLanes = i, null;
  }
  function Ru(e, t) {
    return t = Au(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Yd(e, t, l) {
    return ga(t, e.child, null, l), e = Ru(t, t.pendingProps), e.flags |= 2, Dt(t), t.memoizedState = null, e;
  }
  function C1(e, t, l) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (be) {
        if (a.mode === "hidden")
          return e = Ru(t, a), t.lanes = 536870912, In(null, e);
        if (Rs(t), (e = Le) ? (e = Ph(
          e,
          Yt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ul !== null ? { id: tl, overflow: ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Af(e), l.return = t, t.child = l, rt = t, Le = null)) : e = null, e === null) throw zl(t);
        return t.lanes = 536870912, null;
      }
      return Ru(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Rs(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Yd(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Pe || Za(e, t, l, !1), i = (l & e.childLanes) !== 0, Pe || i) {
        if (a = Me, a !== null && (f = wc(a, l), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, sa(e, f), bt(a, e, f), Vs;
        Mu(), t = Yd(
          e,
          t,
          l
        );
      } else
        e = u.treeContext, Le = Vt(f.nextSibling), rt = t, be = !0, Ml = null, Yt = !1, e !== null && _f(t, e), t = Ru(t, a), t.flags |= 4096;
      return t;
    }
    return e = ol(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Tu(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(c(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function Ks(e, t, l, a, i) {
    return da(t), l = As(
      e,
      t,
      l,
      a,
      void 0,
      i
    ), a = xs(), e !== null && !Pe ? (Cs(e, t, i), yl(e, t, i)) : (be && a && is(t), t.flags |= 1, ot(e, t, l, i), t.child);
  }
  function Xd(e, t, l, a, i, u) {
    return da(t), t.updateQueue = null, l = kf(
      t,
      a,
      l,
      i
    ), Kf(e), a = xs(), e !== null && !Pe ? (Cs(e, t, u), yl(e, t, u)) : (be && a && is(t), t.flags |= 1, ot(e, t, l, u), t.child);
  }
  function Vd(e, t, l, a, i) {
    if (da(t), t.stateNode === null) {
      var u = Va, f = l.contextType;
      typeof f == "object" && f !== null && (u = st(f)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ys, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, gs(t), f = l.contextType, u.context = typeof f == "object" && f !== null ? st(f) : Va, u.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Gs(
        t,
        l,
        f,
        a
      ), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Ys.enqueueReplaceState(u, u.state, null), Zn(t, a, u, i), Qn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var m = t.memoizedProps, S = va(l, m);
      u.props = S;
      var N = u.context, z = l.contextType;
      f = Va, typeof z == "object" && z !== null && (f = st(z));
      var B = l.getDerivedStateFromProps;
      z = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", m = t.pendingProps !== m, z || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (m || N !== f) && Od(
        t,
        u,
        a,
        f
      ), jl = !1;
      var O = t.memoizedState;
      u.state = O, Zn(t, a, u, i), Qn(), N = t.memoizedState, m || O !== N || jl ? (typeof B == "function" && (Gs(
        t,
        l,
        B,
        a
      ), N = t.memoizedState), (S = jl || Nd(
        t,
        l,
        S,
        a,
        O,
        N,
        f
      )) ? (z || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), u.props = a, u.state = N, u.context = f, a = S) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, ps(e, t), f = t.memoizedProps, z = va(l, f), u.props = z, B = t.pendingProps, O = u.context, N = l.contextType, S = Va, typeof N == "object" && N !== null && (S = st(N)), m = l.getDerivedStateFromProps, (N = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== S) && Od(
        t,
        u,
        a,
        S
      ), jl = !1, O = t.memoizedState, u.state = O, Zn(t, a, u, i), Qn();
      var M = t.memoizedState;
      f !== B || O !== M || jl || e !== null && e.dependencies !== null && nu(e.dependencies) ? (typeof m == "function" && (Gs(
        t,
        l,
        m,
        a
      ), M = t.memoizedState), (z = jl || Nd(
        t,
        l,
        z,
        a,
        O,
        M,
        S
      ) || e !== null && e.dependencies !== null && nu(e.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, S), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        S
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = S, a = z) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Tu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = ga(
      t,
      e.child,
      null,
      i
    ), t.child = ga(
      t,
      null,
      l,
      i
    )) : ot(e, t, l, i), t.memoizedState = u.state, e = t.child) : e = yl(
      e,
      t,
      i
    ), e;
  }
  function Kd(e, t, l, a) {
    return ca(), t.flags |= 256, ot(e, t, l, a), t.child;
  }
  var ks = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qs(e) {
    return { baseLanes: e, cachePool: Mf() };
  }
  function Zs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Mt), e;
  }
  function kd(e, t, l) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (Je.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (be) {
        if (i ? ql(t) : Gl(), (e = Le) ? (e = Ph(
          e,
          Yt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ul !== null ? { id: tl, overflow: ll } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Af(e), l.return = t, t.child = l, rt = t, Le = null)) : e = null, e === null) throw zl(t);
        return wo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var m = a.children;
      return a = a.fallback, i ? (Gl(), i = t.mode, m = Au(
        { mode: "hidden", children: m },
        i
      ), a = oa(
        a,
        i,
        l,
        null
      ), m.return = t, a.return = t, m.sibling = a, t.child = m, a = t.child, a.memoizedState = Qs(l), a.childLanes = Zs(
        e,
        f,
        l
      ), t.memoizedState = ks, In(null, a)) : (ql(t), Js(t, m));
    }
    var S = e.memoizedState;
    if (S !== null && (m = S.dehydrated, m !== null)) {
      if (u)
        t.flags & 256 ? (ql(t), t.flags &= -257, t = $s(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Gl(), t.child = e.child, t.flags |= 128, t = null) : (Gl(), m = a.fallback, i = t.mode, a = Au(
          { mode: "visible", children: a.children },
          i
        ), m = oa(
          m,
          i,
          l,
          null
        ), m.flags |= 2, a.return = t, m.return = t, a.sibling = m, t.child = a, ga(
          t,
          e.child,
          null,
          l
        ), a = t.child, a.memoizedState = Qs(l), a.childLanes = Zs(
          e,
          f,
          l
        ), t.memoizedState = ks, t = In(null, a));
      else if (ql(t), wo(m)) {
        if (f = m.nextSibling && m.nextSibling.dataset, f) var N = f.dgst;
        f = N, a = Error(c(419)), a.stack = "", a.digest = f, Gn({ value: a, source: null, stack: null }), t = $s(
          e,
          t,
          l
        );
      } else if (Pe || Za(e, t, l, !1), f = (l & e.childLanes) !== 0, Pe || f) {
        if (f = Me, f !== null && (a = wc(f, l), a !== 0 && a !== S.retryLane))
          throw S.retryLane = a, sa(e, a), bt(f, e, a), Vs;
        Oo(m) || Mu(), t = $s(
          e,
          t,
          l
        );
      } else
        Oo(m) ? (t.flags |= 192, t.child = e.child, t = null) : (e = S.treeContext, Le = Vt(
          m.nextSibling
        ), rt = t, be = !0, Ml = null, Yt = !1, e !== null && _f(t, e), t = Js(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Gl(), m = a.fallback, i = t.mode, S = e.child, N = S.sibling, a = ol(S, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = S.subtreeFlags & 65011712, N !== null ? m = ol(
      N,
      m
    ) : (m = oa(
      m,
      i,
      l,
      null
    ), m.flags |= 2), m.return = t, a.return = t, a.sibling = m, t.child = a, In(null, a), a = t.child, m = e.child.memoizedState, m === null ? m = Qs(l) : (i = m.cachePool, i !== null ? (S = We._currentValue, i = i.parent !== S ? { parent: S, pool: S } : i) : i = Mf(), m = {
      baseLanes: m.baseLanes | l,
      cachePool: i
    }), a.memoizedState = m, a.childLanes = Zs(
      e,
      f,
      l
    ), t.memoizedState = ks, In(e.child, a)) : (ql(t), l = e.child, e = l.sibling, l = ol(l, {
      mode: "visible",
      children: a.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Js(e, t) {
    return t = Au(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Au(e, t) {
    return e = Ot(22, e, null, t), e.lanes = 0, e;
  }
  function $s(e, t, l) {
    return ga(t, e.child, null, l), e = Js(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qd(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), cs(e.return, t, l);
  }
  function Fs(e, t, l, a, i, u) {
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
  function Zd(e, t, l) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = Je.current, m = (f & 2) !== 0;
    if (m ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, k(Je, f), ot(e, t, a, l), a = be ? qn : 0, !m && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Qd(e, l, t);
        else if (e.tag === 19)
          Qd(e, l, t);
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
          e = l.alternate, e !== null && du(e) === null && (i = l), l = l.sibling;
        l = i, l === null ? (i = t.child, t.child = null) : (i = l.sibling, l.sibling = null), Fs(
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
          if (e = i.alternate, e !== null && du(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = l, l = i, i = e;
        }
        Fs(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "together":
        Fs(
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
        if (Za(
          e,
          t,
          l,
          !1
        ), (l & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, l = ol(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = ol(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Ws(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && nu(e)));
  }
  function _1(e, t, l) {
    switch (t.tag) {
      case 3:
        Be(t, t.stateNode.containerInfo), Ll(t, We, e.memoizedState.cache), ca();
        break;
      case 27:
      case 5:
        ta(t);
        break;
      case 4:
        Be(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ll(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Rs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (ql(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? kd(e, t, l) : (ql(t), e = yl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        ql(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (l & t.childLanes) !== 0, a || (Za(
          e,
          t,
          l,
          !1
        ), a = (l & t.childLanes) !== 0), i) {
          if (a)
            return Zd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), k(Je, Je.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, qd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Ll(t, We, e.memoizedState.cache);
    }
    return yl(e, t, l);
  }
  function Jd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!Ws(e, l) && (t.flags & 128) === 0)
          return Pe = !1, _1(
            e,
            t,
            l
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, be && (t.flags & 1048576) !== 0 && Cf(t, qn, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ma(t.elementType), t.type = e, typeof e == "function")
            ls(e) ? (a = va(e, a), t.tag = 1, t = Vd(
              null,
              t,
              e,
              a,
              l
            )) : (t.tag = 0, t = Ks(
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
                t.tag = 11, t = jd(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              } else if (i === P) {
                t.tag = 14, t = Hd(
                  null,
                  t,
                  e,
                  a,
                  l
                );
                break e;
              }
            }
            throw t = Fe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ks(
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
        ), Vd(
          e,
          t,
          a,
          i,
          l
        );
      case 3:
        e: {
          if (Be(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, ps(e, t), Zn(t, a, null, l);
          var f = t.memoizedState;
          if (a = f.cache, Ll(t, We, a), a !== u.cache && fs(
            t,
            [We],
            l,
            !0
          ), Qn(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Kd(
                e,
                t,
                a,
                l
              );
              break e;
            } else if (a !== i) {
              i = Bt(
                Error(c(424)),
                t
              ), Gn(i), t = Kd(
                e,
                t,
                a,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Le = Vt(e.firstChild), rt = t, be = !0, Ml = null, Yt = !0, l = qf(
                t,
                null,
                a,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ca(), a === i) {
              t = yl(
                e,
                t,
                l
              );
              break e;
            }
            ot(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Tu(e, t), e === null ? (l = i0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : be || (l = t.type, e = t.pendingProps, a = Gu(
          K.current
        ).createElement(l), a[ut] = t, a[yt] = e, ct(a, l, e), at(a), t.stateNode = a) : t.memoizedState = i0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ta(t), e === null && be && (a = t.stateNode = l0(
          t.type,
          t.pendingProps,
          K.current
        ), rt = t, Yt = !0, i = Le, Jl(t.type) ? (Do = i, Le = Vt(a.firstChild)) : Le = i), ot(
          e,
          t,
          t.pendingProps.children,
          l
        ), Tu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && be && ((i = a = Le) && (a = ag(
          a,
          t.type,
          t.pendingProps,
          Yt
        ), a !== null ? (t.stateNode = a, rt = t, Le = Vt(a.firstChild), Yt = !1, i = !0) : i = !1), i || zl(t)), ta(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Co(i, u) ? a = null : f !== null && Co(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = As(
          e,
          t,
          v1,
          null,
          null,
          l
        ), hi._currentValue = i), Tu(e, t), ot(e, t, a, l), t.child;
      case 6:
        return e === null && be && ((e = l = Le) && (l = ng(
          l,
          t.pendingProps,
          Yt
        ), l !== null ? (t.stateNode = l, rt = t, Le = null, e = !0) : e = !1), e || zl(t)), null;
      case 13:
        return kd(e, t, l);
      case 4:
        return Be(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ga(
          t,
          null,
          a,
          l
        ) : ot(e, t, a, l), t.child;
      case 11:
        return jd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return ot(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return ot(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return ot(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return a = t.pendingProps, Ll(t, t.type, a.value), ot(e, t, a.children, l), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, da(t), i = st(i), a = a(i), t.flags |= 1, ot(e, t, a, l), t.child;
      case 14:
        return Hd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return Bd(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return Zd(e, t, l);
      case 31:
        return C1(e, t, l);
      case 22:
        return qd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return da(t), a = st(We), e === null ? (i = ms(), i === null && (i = Me, u = ds(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= l), i = u), t.memoizedState = { parent: a, cache: i }, gs(t), Ll(t, We, i)) : ((e.lanes & l) !== 0 && (ps(e, t), Zn(t, null, null, l), Qn()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Ll(t, We, a)) : (a = u.cache, Ll(t, We, a), a !== i.cache && fs(
          t,
          [We],
          l,
          !0
        ))), ot(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function gl(e) {
    e.flags |= 4;
  }
  function Is(e, t, l, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (bh()) e.flags |= 8192;
        else
          throw ya = su, ys;
    } else e.flags &= -16777217;
  }
  function $d(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !c0(t))
      if (bh()) e.flags |= 8192;
      else
        throw ya = su, ys;
  }
  function xu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? _c() : 536870912, e.lanes |= t, un |= t);
  }
  function Pn(e, t) {
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
  function N1(e, t, l) {
    var a = t.pendingProps;
    switch (us(t), t.tag) {
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
        return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), dl(We), Ye(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Qa(t) ? gl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), je(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (gl(t), u !== null ? (je(t), $d(t, u)) : (je(t), Is(
          t,
          i,
          null,
          a,
          l
        ))) : u ? u !== e.memoizedState ? (gl(t), je(t), $d(t, u)) : (je(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && gl(t), je(t), Is(
          t,
          i,
          e,
          a,
          l
        )), null;
      case 27:
        if (Oa(t), l = K.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && gl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return je(t), null;
          }
          e = Z.current, Qa(t) ? Nf(t) : (e = l0(i, a, l), t.stateNode = e, gl(t));
        }
        return je(t), null;
      case 5:
        if (Oa(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && gl(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return je(t), null;
          }
          if (u = Z.current, Qa(t))
            Nf(t);
          else {
            var f = Gu(
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
            a && gl(t);
          }
        }
        return je(t), Is(
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
            throw Error(c(166));
          if (e = K.current, Qa(t)) {
            if (e = t.stateNode, l = t.memoizedProps, a = null, i = rt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[ut] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || kh(e.nodeValue, l)), e || zl(t, !0);
          } else
            e = Gu(e).createTextNode(
              a
            ), e[ut] = t, t.stateNode = e;
        }
        return je(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Qa(t), l !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ut] = t;
            } else
              ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), e = !1;
          } else
            l = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return je(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Qa(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[ut] = t;
            } else
              ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            je(t), i = !1;
          } else
            i = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
        }
        return Dt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), xu(t, t.updateQueue), je(t), null);
      case 4:
        return Ye(), e === null && bo(t.stateNode.containerInfo), je(t), null;
      case 10:
        return dl(t.type), je(t), null;
      case 19:
        if (H(Je), a = t.memoizedState, a === null) return je(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) Pn(a, !1);
          else {
            if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = du(e), u !== null) {
                  for (t.flags |= 128, Pn(a, !1), e = u.updateQueue, t.updateQueue = e, xu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Tf(l, e), l = l.sibling;
                  return k(
                    Je,
                    Je.current & 1 | 2
                  ), be && cl(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && xt() > wu && (t.flags |= 128, i = !0, Pn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = du(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, xu(t, e), Pn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !be)
                return je(t), null;
            } else
              2 * xt() - a.renderingStartTime > wu && l !== 536870912 && (t.flags |= 128, i = !0, Pn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = xt(), e.sibling = null, l = Je.current, k(
          Je,
          i ? l & 1 | 2 : l & 1
        ), be && cl(t, a.treeForkCount), e) : (je(t), null);
      case 22:
      case 23:
        return Dt(t), bs(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : je(t), l = t.updateQueue, l !== null && xu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && H(ha), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), dl(We), je(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function O1(e, t) {
    switch (us(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return dl(We), Ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Oa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Dt(t), t.alternate === null)
            throw Error(c(340));
          ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Dt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ca();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Je), null;
      case 4:
        return Ye(), null;
      case 10:
        return dl(t.type), null;
      case 22:
      case 23:
        return Dt(t), bs(), e !== null && H(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return dl(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fd(e, t) {
    switch (us(t), t.tag) {
      case 3:
        dl(We), Ye();
        break;
      case 26:
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        Ye();
        break;
      case 31:
        t.memoizedState !== null && Dt(t);
        break;
      case 13:
        Dt(t);
        break;
      case 19:
        H(Je);
        break;
      case 10:
        dl(t.type);
        break;
      case 22:
      case 23:
        Dt(t), bs(), e !== null && H(ha);
        break;
      case 24:
        dl(We);
    }
  }
  function ei(e, t) {
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
              var S = l, N = m;
              try {
                N();
              } catch (z) {
                Ne(
                  i,
                  S,
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
  function Wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Yf(t, l);
      } catch (a) {
        Ne(e, e.return, a);
      }
    }
  }
  function Id(e, t, l) {
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
  function ti(e, t) {
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
  function Pd(e) {
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
  function Ps(e, t, l) {
    try {
      var a = e.stateNode;
      W1(a, e.type, l, t), a[yt] = t;
    } catch (i) {
      Ne(e, e.return, i);
    }
  }
  function eh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Jl(e.type) || e.tag === 4;
  }
  function eo(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || eh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Jl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function to(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = rl));
    else if (a !== 4 && (a === 27 && Jl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (to(e, t, l), e = e.sibling; e !== null; )
        to(e, t, l), e = e.sibling;
  }
  function Cu(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && (a === 27 && Jl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Cu(e, t, l), e = e.sibling; e !== null; )
        Cu(e, t, l), e = e.sibling;
  }
  function th(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ct(t, a, l), t[ut] = e, t[yt] = l;
    } catch (u) {
      Ne(e, e.return, u);
    }
  }
  var pl = !1, et = !1, lo = !1, lh = typeof WeakSet == "function" ? WeakSet : Set, nt = null;
  function w1(e, t) {
    if (e = e.containerInfo, Ao = Zu, e = mf(e), $r(e)) {
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
            var f = 0, m = -1, S = -1, N = 0, z = 0, B = e, O = null;
            t: for (; ; ) {
              for (var M; B !== l || i !== 0 && B.nodeType !== 3 || (m = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (S = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (M = B.firstChild) !== null; )
                O = B, B = M;
              for (; ; ) {
                if (B === e) break t;
                if (O === l && ++N === i && (m = f), O === u && ++z === a && (S = f), (M = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = M;
            }
            l = m === -1 || S === -1 ? null : { start: m, end: S };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (xo = { focusedElem: e, selectionRange: l }, Zu = !1, nt = t; nt !== null; )
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
                  No(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      No(e);
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
              if ((e & 1024) !== 0) throw Error(c(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, nt = e;
            break;
          }
          nt = t.return;
        }
  }
  function ah(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        El(e, l), a & 4 && ei(5, l);
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
        a & 64 && Wd(l), a & 512 && ti(l, l.return);
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
            Yf(e, t);
          } catch (f) {
            Ne(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && th(l);
      case 26:
      case 5:
        El(e, l), t === null && a & 4 && Pd(l), a & 512 && ti(l, l.return);
        break;
      case 12:
        El(e, l);
        break;
      case 31:
        El(e, l), a & 4 && uh(e, l);
        break;
      case 13:
        El(e, l), a & 4 && rh(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = q1.bind(
          null,
          l
        ), ig(e, l))));
        break;
      case 22:
        if (a = l.memoizedState !== null || pl, !a) {
          t = t !== null && t.memoizedState !== null || et, i = pl;
          var u = et;
          pl = a, (et = t) && !u ? Sl(
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
  function nh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, nh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ur(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, pt = !1;
  function vl(e, t, l) {
    for (l = l.child; l !== null; )
      ih(e, t, l), l = l.sibling;
  }
  function ih(e, t, l) {
    if (Ct && typeof Ct.onCommitFiberUnmount == "function")
      try {
        Ct.onCommitFiberUnmount(xn, l);
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
        var a = qe, i = pt;
        Jl(l.type) && (qe = l.stateNode, pt = !1), vl(
          e,
          t,
          l
        ), ci(l.stateNode), qe = a, pt = i;
        break;
      case 5:
        et || al(l, t);
      case 6:
        if (a = qe, i = pt, qe = null, vl(
          e,
          t,
          l
        ), qe = a, pt = i, qe !== null)
          if (pt)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(l.stateNode);
            } catch (u) {
              Ne(
                l,
                t,
                u
              );
            }
          else
            try {
              qe.removeChild(l.stateNode);
            } catch (u) {
              Ne(
                l,
                t,
                u
              );
            }
        break;
      case 18:
        qe !== null && (pt ? (e = qe, Wh(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), mn(e)) : Wh(qe, l.stateNode));
        break;
      case 4:
        a = qe, i = pt, qe = l.stateNode.containerInfo, pt = !0, vl(
          e,
          t,
          l
        ), qe = a, pt = i;
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
        et || (al(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Id(
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
  function uh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        mn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
    }
  }
  function rh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        mn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
  }
  function D1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new lh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new lh()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function _u(e, t) {
    var l = D1(e);
    t.forEach(function(a) {
      if (!l.has(a)) {
        l.add(a);
        var i = G1.bind(null, e, a);
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
                qe = m.stateNode, pt = !1;
                break e;
              }
              break;
            case 5:
              qe = m.stateNode, pt = !1;
              break e;
            case 3:
            case 4:
              qe = m.stateNode.containerInfo, pt = !0;
              break e;
          }
          m = m.return;
        }
        if (qe === null) throw Error(c(160));
        ih(u, f, i), qe = null, pt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        sh(t, e), t = t.sibling;
  }
  var $t = null;
  function sh(e, t) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vt(t, e), Et(e), a & 4 && (Yl(3, e, e.return), ei(3, e), Yl(5, e, e.return));
        break;
      case 1:
        vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), a & 64 && pl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
        break;
      case 26:
        var i = $t;
        if (vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), a & 4) {
          var u = l !== null ? l.memoizedState : null;
          if (a = e.memoizedState, l === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, l = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Nn] || u[ut] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ct(u, a, l), u[ut] = e, at(u), a = u;
                      break e;
                    case "link":
                      var f = s0(
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
                      if (f = s0(
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
                      throw Error(c(468, a));
                  }
                  u[ut] = e, at(u), a = u;
                }
                e.stateNode = a;
              } else
                o0(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = r0(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? o0(
              i,
              e.type,
              e.stateNode
            ) : r0(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Ps(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), l !== null && a & 4 && Ps(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (vt(t, e), Et(e), a & 512 && (et || l === null || al(l, l.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            ja(i, "");
          } catch (J) {
            Ne(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, Ps(
          e,
          i,
          l !== null ? l.memoizedProps : i
        )), a & 1024 && (lo = !0);
        break;
      case 6:
        if (vt(t, e), Et(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = a;
          } catch (J) {
            Ne(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Vu = null, i = $t, $t = Yu(t.containerInfo), vt(t, e), $t = i, Et(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            mn(t.containerInfo);
          } catch (J) {
            Ne(e, e.return, J);
          }
        lo && (lo = !1, oh(e));
        break;
      case 4:
        a = $t, $t = Yu(
          e.stateNode.containerInfo
        ), vt(t, e), Et(e), $t = a;
        break;
      case 12:
        vt(t, e), Et(e);
        break;
      case 31:
        vt(t, e), Et(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, _u(e, a)));
        break;
      case 13:
        vt(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ou = xt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, _u(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var S = l !== null && l.memoizedState !== null, N = pl, z = et;
        if (pl = N || i, et = z || S, vt(t, e), et = z, pl = N, Et(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || S || pl || et || Ea(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                S = l = t;
                try {
                  if (u = S.stateNode, i)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    m = S.stateNode;
                    var B = S.memoizedProps.style, O = B != null && B.hasOwnProperty("display") ? B.display : null;
                    m.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (J) {
                  Ne(S, S.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                S = t;
                try {
                  S.stateNode.nodeValue = i ? "" : S.memoizedProps;
                } catch (J) {
                  Ne(S, S.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                S = t;
                try {
                  var M = S.stateNode;
                  i ? Ih(M, !0) : Ih(S.stateNode, !1);
                } catch (J) {
                  Ne(S, S.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, _u(e, l))));
        break;
      case 19:
        vt(t, e), Et(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, _u(e, a)));
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
          if (eh(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode, u = eo(e);
            Cu(e, u, i);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (ja(f, ""), l.flags &= -33);
            var m = eo(e);
            Cu(e, m, f);
            break;
          case 3:
          case 4:
            var S = l.stateNode.containerInfo, N = eo(e);
            to(
              e,
              N,
              S
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        Ne(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function oh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        oh(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function El(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        ah(e, t.alternate, t), t = t.sibling;
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
          typeof l.componentWillUnmount == "function" && Id(
            t,
            t.return,
            l
          ), Ea(t);
          break;
        case 27:
          ci(t.stateNode);
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
          ), ei(4, u);
          break;
        case 1:
          if (Sl(
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
              var S = i.shared.hiddenCallbacks;
              if (S !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < S.length; i++)
                  Gf(S[i], m);
            } catch (N) {
              Ne(a, a.return, N);
            }
          }
          l && f & 64 && Wd(u), ti(u, u.return);
          break;
        case 27:
          th(u);
        case 26:
        case 5:
          Sl(
            i,
            u,
            l
          ), l && a === null && f & 4 && Pd(u), ti(u, u.return);
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
          ), l && f & 4 && uh(i, u);
          break;
        case 13:
          Sl(
            i,
            u,
            l
          ), l && f & 4 && rh(i, u);
          break;
        case 22:
          u.memoizedState === null && Sl(
            i,
            u,
            l
          ), ti(u, u.return);
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
  function ao(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Yn(l));
  }
  function no(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yn(e));
  }
  function Ft(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ch(
          e,
          t,
          l,
          a
        ), t = t.sibling;
  }
  function ch(e, t, l, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ft(
          e,
          t,
          l,
          a
        ), i & 2048 && ei(9, t);
        break;
      case 1:
        Ft(
          e,
          t,
          l,
          a
        );
        break;
      case 3:
        Ft(
          e,
          t,
          l,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yn(e)));
        break;
      case 12:
        if (i & 2048) {
          Ft(
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
          } catch (S) {
            Ne(t, t.return, S);
          }
        } else
          Ft(
            e,
            t,
            l,
            a
          );
        break;
      case 31:
        Ft(
          e,
          t,
          l,
          a
        );
        break;
      case 13:
        Ft(
          e,
          t,
          l,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ft(
          e,
          t,
          l,
          a
        ) : li(e, t) : u._visibility & 2 ? Ft(
          e,
          t,
          l,
          a
        ) : (u._visibility |= 2, ln(
          e,
          t,
          l,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && ao(f, t);
        break;
      case 24:
        Ft(
          e,
          t,
          l,
          a
        ), i & 2048 && no(t.alternate, t);
        break;
      default:
        Ft(
          e,
          t,
          l,
          a
        );
    }
  }
  function ln(e, t, l, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, m = l, S = a, N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ln(
            u,
            f,
            m,
            S,
            i
          ), ei(8, f);
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          f.memoizedState !== null ? z._visibility & 2 ? ln(
            u,
            f,
            m,
            S,
            i
          ) : li(
            u,
            f
          ) : (z._visibility |= 2, ln(
            u,
            f,
            m,
            S,
            i
          )), i && N & 2048 && ao(
            f.alternate,
            f
          );
          break;
        case 24:
          ln(
            u,
            f,
            m,
            S,
            i
          ), i && N & 2048 && no(f.alternate, f);
          break;
        default:
          ln(
            u,
            f,
            m,
            S,
            i
          );
      }
      t = t.sibling;
    }
  }
  function li(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            li(l, a), i & 2048 && ao(
              a.alternate,
              a
            );
            break;
          case 24:
            li(l, a), i & 2048 && no(a.alternate, a);
            break;
          default:
            li(l, a);
        }
        t = t.sibling;
      }
  }
  var ai = 8192;
  function an(e, t, l) {
    if (e.subtreeFlags & ai)
      for (e = e.child; e !== null; )
        fh(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function fh(e, t, l) {
    switch (e.tag) {
      case 26:
        an(
          e,
          t,
          l
        ), e.flags & ai && e.memoizedState !== null && pg(
          l,
          $t,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        an(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var a = $t;
        $t = Yu(e.stateNode.containerInfo), an(
          e,
          t,
          l
        ), $t = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ai, ai = 16777216, an(
          e,
          t,
          l
        ), ai = a) : an(
          e,
          t,
          l
        ));
        break;
      default:
        an(
          e,
          t,
          l
        );
    }
  }
  function dh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          nt = a, mh(
            a,
            e
          );
        }
      dh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        hh(e), e = e.sibling;
  }
  function hh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ni(e), e.flags & 2048 && Yl(9, e, e.return);
        break;
      case 3:
        ni(e);
        break;
      case 12:
        ni(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Nu(e)) : ni(e);
        break;
      default:
        ni(e);
    }
  }
  function Nu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          nt = a, mh(
            a,
            e
          );
        }
      dh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Yl(8, t, t.return), Nu(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Nu(t));
          break;
        default:
          Nu(t);
      }
      e = e.sibling;
    }
  }
  function mh(e, t) {
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
          Yn(l.memoizedState.cache);
      }
      if (a = l.child, a !== null) a.return = l, nt = a;
      else
        e: for (l = e; nt !== null; ) {
          a = nt;
          var i = a.sibling, u = a.return;
          if (nh(a), a === l) {
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
  var U1 = {
    getCacheForType: function(e) {
      var t = st(We), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return st(We).controller.signal;
    }
  }, M1 = typeof WeakMap == "function" ? WeakMap : Map, xe = 0, Me = null, de = null, ve = 0, _e = 0, Ut = null, Xl = !1, nn = !1, io = !1, bl = 0, Ke = 0, Vl = 0, Sa = 0, uo = 0, Mt = 0, un = 0, ii = null, St = null, ro = !1, Ou = 0, yh = 0, wu = 1 / 0, Du = null, Kl = null, tt = 0, kl = null, rn = null, Rl = 0, so = 0, oo = null, gh = null, ui = 0, co = null;
  function zt() {
    return (xe & 2) !== 0 && ve !== 0 ? ve & -ve : G.T !== null ? po() : Dc();
  }
  function ph() {
    if (Mt === 0)
      if ((ve & 536870912) === 0 || be) {
        var e = qi;
        qi <<= 1, (qi & 3932160) === 0 && (qi = 262144), Mt = e;
      } else Mt = 536870912;
    return e = wt.current, e !== null && (e.flags |= 32), Mt;
  }
  function bt(e, t, l) {
    (e === Me && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null) && (sn(e, 0), Ql(
      e,
      ve,
      Mt,
      !1
    )), _n(e, l), ((xe & 2) === 0 || e !== Me) && (e === Me && ((xe & 2) === 0 && (Sa |= l), Ke === 4 && Ql(
      e,
      ve,
      Mt,
      !1
    )), nl(e));
  }
  function vh(e, t, l) {
    if ((xe & 6) !== 0) throw Error(c(327));
    var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Cn(e, t), i = a ? j1(e, t) : ho(e, t, !0), u = a;
    do {
      if (i === 0) {
        nn && !a && Ql(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, u && !z1(l)) {
          i = ho(e, t, !1), u = !1;
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
              i = ii;
              var S = m.current.memoizedState.isDehydrated;
              if (S && (sn(m, f).flags |= 256), f = ho(
                m,
                f,
                !1
              ), f !== 2) {
                if (io && !S) {
                  m.errorRecoveryDisabledLanes |= u, Sa |= u, i = 4;
                  break e;
                }
                u = St, St = i, u !== null && (St === null ? St = u : St.push.apply(
                  St,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          sn(e, 0), Ql(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = i, u) {
            case 0:
            case 1:
              throw Error(c(345));
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
              St = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = Ou + 300 - xt(), 10 < i)) {
            if (Ql(
              a,
              t,
              Mt,
              !Xl
            ), Yi(a, 0, !0) !== 0) break e;
            Rl = t, a.timeoutHandle = $h(
              Eh.bind(
                null,
                a,
                l,
                St,
                Du,
                ro,
                t,
                Mt,
                Sa,
                un,
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
          Eh(
            a,
            l,
            St,
            Du,
            ro,
            t,
            Mt,
            Sa,
            un,
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
  function Eh(e, t, l, a, i, u, f, m, S, N, z, B, O, M) {
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
      }, fh(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? Ou - xt() : (u & 4194048) === u ? yh - xt() : 0;
      if (J = vg(
        B,
        J
      ), J !== null) {
        Rl = u, e.cancelPendingCommit = J(
          _h.bind(
            null,
            e,
            t,
            u,
            l,
            a,
            i,
            f,
            m,
            S,
            z,
            B,
            null,
            O,
            M
          )
        ), Ql(e, u, f, !N);
        return;
      }
    }
    _h(
      e,
      t,
      u,
      l,
      a,
      i,
      f,
      m,
      S
    );
  }
  function z1(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var a = 0; a < l.length; a++) {
          var i = l[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!Nt(u(), i)) return !1;
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
    t &= ~uo, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - _t(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    l !== 0 && Nc(e, l, t);
  }
  function Uu() {
    return (xe & 6) === 0 ? (ri(0), !1) : !0;
  }
  function fo() {
    if (de !== null) {
      if (_e === 0)
        var e = de.return;
      else
        e = de, fl = fa = null, _s(e), Wa = null, Vn = 0, e = de;
      for (; e !== null; )
        Fd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function sn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, eg(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Rl = 0, fo(), Me = e, de = l = ol(e.current, null), ve = t, _e = 0, Ut = null, Xl = !1, nn = Cn(e, t), io = !1, un = Mt = uo = Sa = Vl = Ke = 0, St = ii = null, ro = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - _t(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return bl = t, Pi(), l;
  }
  function Sh(e, t) {
    ue = null, G.H = Wn, t === Fa || t === ru ? (t = jf(), _e = 3) : t === ys ? (t = jf(), _e = 4) : _e = t === Vs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ut = t, de === null && (Ke = 1, bu(
      e,
      Bt(t, e.current)
    ));
  }
  function bh() {
    var e = wt.current;
    return e === null ? !0 : (ve & 4194048) === ve ? Xt === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === Xt : !1;
  }
  function Rh() {
    var e = G.H;
    return G.H = Wn, e === null ? Wn : e;
  }
  function Th() {
    var e = G.A;
    return G.A = U1, e;
  }
  function Mu() {
    Ke = 4, Xl || (ve & 4194048) !== ve && wt.current !== null || (nn = !0), (Vl & 134217727) === 0 && (Sa & 134217727) === 0 || Me === null || Ql(
      Me,
      ve,
      Mt,
      !1
    );
  }
  function ho(e, t, l) {
    var a = xe;
    xe |= 2;
    var i = Rh(), u = Th();
    (Me !== e || ve !== t) && (Du = null, sn(e, t)), t = !1;
    var f = Ke;
    e: do
      try {
        if (_e !== 0 && de !== null) {
          var m = de, S = Ut;
          switch (_e) {
            case 8:
              fo(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (t = !0);
              var N = _e;
              if (_e = 0, Ut = null, on(e, m, S, N), l && nn) {
                f = 0;
                break e;
              }
              break;
            default:
              N = _e, _e = 0, Ut = null, on(e, m, S, N);
          }
        }
        L1(), f = Ke;
        break;
      } catch (z) {
        Sh(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, fl = fa = null, xe = a, G.H = i, G.A = u, de === null && (Me = null, ve = 0, Pi()), f;
  }
  function L1() {
    for (; de !== null; ) Ah(de);
  }
  function j1(e, t) {
    var l = xe;
    xe |= 2;
    var a = Rh(), i = Th();
    Me !== e || ve !== t ? (Du = null, wu = xt() + 500, sn(e, t)) : nn = Cn(
      e,
      t
    );
    e: do
      try {
        if (_e !== 0 && de !== null) {
          t = de;
          var u = Ut;
          t: switch (_e) {
            case 1:
              _e = 0, Ut = null, on(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (zf(u)) {
                _e = 0, Ut = null, xh(t);
                break;
              }
              t = function() {
                _e !== 2 && _e !== 9 || Me !== e || (_e = 7), nl(e);
              }, u.then(t, t);
              break e;
            case 3:
              _e = 7;
              break e;
            case 4:
              _e = 5;
              break e;
            case 7:
              zf(u) ? (_e = 0, Ut = null, xh(t)) : (_e = 0, Ut = null, on(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var m = de;
                  if (f ? c0(f) : m.stateNode.complete) {
                    _e = 0, Ut = null;
                    var S = m.sibling;
                    if (S !== null) de = S;
                    else {
                      var N = m.return;
                      N !== null ? (de = N, zu(N)) : de = null;
                    }
                    break t;
                  }
              }
              _e = 0, Ut = null, on(e, t, u, 5);
              break;
            case 6:
              _e = 0, Ut = null, on(e, t, u, 6);
              break;
            case 8:
              fo(), Ke = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        H1();
        break;
      } catch (z) {
        Sh(e, z);
      }
    while (!0);
    return fl = fa = null, G.H = a, G.A = i, xe = l, de !== null ? 0 : (Me = null, ve = 0, Pi(), Ke);
  }
  function H1() {
    for (; de !== null && !uy(); )
      Ah(de);
  }
  function Ah(e) {
    var t = Jd(e.alternate, e, bl);
    e.memoizedProps = e.pendingProps, t === null ? zu(e) : de = t;
  }
  function xh(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Xd(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ve
        );
        break;
      case 11:
        t = Xd(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ve
        );
        break;
      case 5:
        _s(t);
      default:
        Fd(l, t), t = de = Tf(t, bl), t = Jd(l, t, bl);
    }
    e.memoizedProps = e.pendingProps, t === null ? zu(e) : de = t;
  }
  function on(e, t, l, a) {
    fl = fa = null, _s(t), Wa = null, Vn = 0;
    var i = t.return;
    try {
      if (x1(
        e,
        i,
        t,
        l,
        ve
      )) {
        Ke = 1, bu(
          e,
          Bt(l, e.current)
        ), de = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw de = i, u;
      Ke = 1, bu(
        e,
        Bt(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (be || a === 1 ? e = !0 : nn || (ve & 536870912) !== 0 ? e = !1 : (Xl = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = wt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Ch(t, e)) : zu(t);
  }
  function zu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Ch(
          t,
          Xl
        );
        return;
      }
      e = t.return;
      var l = N1(
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
    Ke === 0 && (Ke = 5);
  }
  function Ch(e, t) {
    do {
      var l = O1(e.alternate, e);
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
    Ke = 6, de = null;
  }
  function _h(e, t, l, a, i, u, f, m, S) {
    e.cancelPendingCommit = null;
    do
      Lu();
    while (tt !== 0);
    if ((xe & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= es, gy(
        e,
        l,
        u,
        f,
        m,
        S
      ), e === Me && (de = Me = null, ve = 0), rn = t, kl = e, Rl = l, so = u, oo = i, gh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Y1(Hi, function() {
        return Uh(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = G.T, G.T = null, i = V.p, V.p = 2, f = xe, xe |= 4;
        try {
          w1(e, t, l);
        } finally {
          xe = f, V.p = i, G.T = a;
        }
      }
      tt = 1, Nh(), Oh(), wh();
    }
  }
  function Nh() {
    if (tt === 1) {
      tt = 0;
      var e = kl, t = rn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = G.T, G.T = null;
        var a = V.p;
        V.p = 2;
        var i = xe;
        xe |= 4;
        try {
          sh(t, e);
          var u = xo, f = mf(e.containerInfo), m = u.focusedElem, S = u.selectionRange;
          if (f !== m && m && m.ownerDocument && hf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (S !== null && $r(m)) {
              var N = S.start, z = S.end;
              if (z === void 0 && (z = N), "selectionStart" in m)
                m.selectionStart = N, m.selectionEnd = Math.min(
                  z,
                  m.value.length
                );
              else {
                var B = m.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), J = m.textContent.length, ee = Math.min(S.start, J), De = S.end === void 0 ? ee : Math.min(S.end, J);
                  !M.extend && ee > De && (f = De, De = ee, ee = f);
                  var x = df(
                    m,
                    ee
                  ), R = df(
                    m,
                    De
                  );
                  if (x && R && (M.rangeCount !== 1 || M.anchorNode !== x.node || M.anchorOffset !== x.offset || M.focusNode !== R.node || M.focusOffset !== R.offset)) {
                    var _ = B.createRange();
                    _.setStart(x.node, x.offset), M.removeAllRanges(), ee > De ? (M.addRange(_), M.extend(R.node, R.offset)) : (_.setEnd(R.node, R.offset), M.addRange(_));
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
              var j = B[m];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          Zu = !!Ao, xo = Ao = null;
        } finally {
          xe = i, V.p = a, G.T = l;
        }
      }
      e.current = t, tt = 2;
    }
  }
  function Oh() {
    if (tt === 2) {
      tt = 0;
      var e = kl, t = rn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = G.T, G.T = null;
        var a = V.p;
        V.p = 2;
        var i = xe;
        xe |= 4;
        try {
          ah(e, t.alternate, t);
        } finally {
          xe = i, V.p = a, G.T = l;
        }
      }
      tt = 3;
    }
  }
  function wh() {
    if (tt === 4 || tt === 3) {
      tt = 0, ry();
      var e = kl, t = rn, l = Rl, a = gh;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0, rn = kl = null, Dh(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Kl = null), wr(l), t = t.stateNode, Ct && typeof Ct.onCommitFiberRoot == "function")
        try {
          Ct.onCommitFiberRoot(
            xn,
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
      (Rl & 3) !== 0 && Lu(), nl(e), i = e.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? e === co ? ui++ : (ui = 0, co = e) : ui = 0, ri(0);
    }
  }
  function Dh(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yn(t)));
  }
  function Lu() {
    return Nh(), Oh(), wh(), Uh();
  }
  function Uh() {
    if (tt !== 5) return !1;
    var e = kl, t = so;
    so = 0;
    var l = wr(Rl), a = G.T, i = V.p;
    try {
      V.p = 32 > l ? 32 : l, G.T = null, l = oo, oo = null;
      var u = kl, f = Rl;
      if (tt = 0, rn = kl = null, Rl = 0, (xe & 6) !== 0) throw Error(c(331));
      var m = xe;
      if (xe |= 4, hh(u.current), ch(
        u,
        u.current,
        f,
        l
      ), xe = m, ri(0, !1), Ct && typeof Ct.onPostCommitFiberRoot == "function")
        try {
          Ct.onPostCommitFiberRoot(xn, u);
        } catch {
        }
      return !0;
    } finally {
      V.p = i, G.T = a, Dh(e, t);
    }
  }
  function Mh(e, t, l) {
    t = Bt(l, t), t = Xs(e.stateNode, t, 2), e = Bl(e, t, 2), e !== null && (_n(e, 2), nl(e));
  }
  function Ne(e, t, l) {
    if (e.tag === 3)
      Mh(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mh(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Kl === null || !Kl.has(a))) {
            e = Bt(l, e), l = zd(2), a = Bl(t, l, 2), a !== null && (Ld(
              l,
              a,
              t,
              e
            ), _n(a, 2), nl(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function mo(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new M1();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(l) || (io = !0, i.add(l), e = B1.bind(null, e, t, l), t.then(e, e));
  }
  function B1(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Me === e && (ve & l) === l && (Ke === 4 || Ke === 3 && (ve & 62914560) === ve && 300 > xt() - Ou ? (xe & 2) === 0 && sn(e, 0) : uo |= l, un === ve && (un = 0)), nl(e);
  }
  function zh(e, t) {
    t === 0 && (t = _c()), e = sa(e, t), e !== null && (_n(e, t), nl(e));
  }
  function q1(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), zh(e, l);
  }
  function G1(e, t) {
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
        throw Error(c(314));
    }
    a !== null && a.delete(t), zh(e, l);
  }
  function Y1(e, t) {
    return Cr(e, t);
  }
  var ju = null, cn = null, yo = !1, Hu = !1, go = !1, Zl = 0;
  function nl(e) {
    e !== cn && e.next === null && (cn === null ? ju = cn = e : cn = cn.next = e), Hu = !0, yo || (yo = !0, V1());
  }
  function ri(e, t) {
    if (!go && Hu) {
      go = !0;
      do
        for (var l = !1, a = ju; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, m = a.pingedLanes;
              u = (1 << 31 - _t(42 | e) + 1) - 1, u &= i & ~(f & ~m), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (l = !0, Bh(a, u));
          } else
            u = ve, u = Yi(
              a,
              a === Me ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Cn(a, u) || (l = !0, Bh(a, u));
          a = a.next;
        }
      while (l);
      go = !1;
    }
  }
  function X1() {
    Lh();
  }
  function Lh() {
    Hu = yo = !1;
    var e = 0;
    Zl !== 0 && P1() && (e = Zl);
    for (var t = xt(), l = null, a = ju; a !== null; ) {
      var i = a.next, u = jh(a, t);
      u === 0 ? (a.next = null, l === null ? ju = i : l.next = i, i === null && (cn = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Hu = !0)), a = i;
    }
    tt !== 0 && tt !== 5 || ri(e), Zl !== 0 && (Zl = 0);
  }
  function jh(e, t) {
    for (var l = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - _t(u), m = 1 << f, S = i[f];
      S === -1 ? ((m & l) === 0 || (m & a) !== 0) && (i[f] = yy(m, t)) : S <= t && (e.expiredLanes |= m), u &= ~m;
    }
    if (t = Me, l = ve, l = Yi(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, l === 0 || e === t && (_e === 2 || _e === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && _r(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Cn(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (a !== null && _r(a), wr(l)) {
        case 2:
        case 8:
          l = xc;
          break;
        case 32:
          l = Hi;
          break;
        case 268435456:
          l = Cc;
          break;
        default:
          l = Hi;
      }
      return a = Hh.bind(null, e), l = Cr(l, a), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return a !== null && a !== null && _r(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Hh(e, t) {
    if (tt !== 0 && tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Lu() && e.callbackNode !== l)
      return null;
    var a = ve;
    return a = Yi(
      e,
      e === Me ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (vh(e, a, t), jh(e, xt()), e.callbackNode != null && e.callbackNode === l ? Hh.bind(null, e) : null);
  }
  function Bh(e, t) {
    if (Lu()) return null;
    vh(e, t, !0);
  }
  function V1() {
    tg(function() {
      (xe & 6) !== 0 ? Cr(
        Ac,
        X1
      ) : Lh();
    });
  }
  function po() {
    if (Zl === 0) {
      var e = Ja;
      e === 0 && (e = Bi, Bi <<= 1, (Bi & 261888) === 0 && (Bi = 256)), Zl = e;
    }
    return Zl;
  }
  function qh(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ki("" + e);
  }
  function Gh(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function K1(e, t, l, a, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var u = qh(
        (i[yt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[yt] || null) ? qh(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var m = new $i(
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
                  var S = f ? Gh(i, f) : new FormData(i);
                  js(
                    l,
                    {
                      pending: !0,
                      data: S,
                      method: i.method,
                      action: u
                    },
                    null,
                    S
                  );
                }
              } else
                typeof u == "function" && (m.preventDefault(), S = f ? Gh(i, f) : new FormData(i), js(
                  l,
                  {
                    pending: !0,
                    data: S,
                    method: i.method,
                    action: u
                  },
                  u,
                  S
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var vo = 0; vo < Pr.length; vo++) {
    var Eo = Pr[vo], k1 = Eo.toLowerCase(), Q1 = Eo[0].toUpperCase() + Eo.slice(1);
    Jt(
      k1,
      "on" + Q1
    );
  }
  Jt(pf, "onAnimationEnd"), Jt(vf, "onAnimationIteration"), Jt(Ef, "onAnimationStart"), Jt("dblclick", "onDoubleClick"), Jt("focusin", "onFocus"), Jt("focusout", "onBlur"), Jt(s1, "onTransitionRun"), Jt(o1, "onTransitionStart"), Jt(c1, "onTransitionCancel"), Jt(Sf, "onTransitionEnd"), za("onMouseEnter", ["mouseout", "mouseover"]), za("onMouseLeave", ["mouseout", "mouseover"]), za("onPointerEnter", ["pointerout", "pointerover"]), za("onPointerLeave", ["pointerout", "pointerover"]), na(
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
  var si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Z1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si)
  );
  function Yh(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l], i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var m = a[f], S = m.instance, N = m.currentTarget;
            if (m = m.listener, S !== u && i.isPropagationStopped())
              break e;
            u = m, i.currentTarget = N;
            try {
              u(i);
            } catch (z) {
              Ii(z);
            }
            i.currentTarget = null, u = S;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (m = a[f], S = m.instance, N = m.currentTarget, m = m.listener, S !== u && i.isPropagationStopped())
              break e;
            u = m, i.currentTarget = N;
            try {
              u(i);
            } catch (z) {
              Ii(z);
            }
            i.currentTarget = null, u = S;
          }
      }
    }
  }
  function he(e, t) {
    var l = t[Dr];
    l === void 0 && (l = t[Dr] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    l.has(a) || (Xh(t, e, 2, !1), l.add(a));
  }
  function So(e, t, l) {
    var a = 0;
    t && (a |= 4), Xh(
      l,
      e,
      a,
      t
    );
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function bo(e) {
    if (!e[Bu]) {
      e[Bu] = !0, zc.forEach(function(l) {
        l !== "selectionchange" && (Z1.has(l) || So(l, !1, e), So(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bu] || (t[Bu] = !0, So("selectionchange", !1, t));
    }
  }
  function Xh(e, t, l, a) {
    switch (p0(t)) {
      case 2:
        var i = bg;
        break;
      case 8:
        i = Rg;
        break;
      default:
        i = jo;
    }
    l = i.bind(
      null,
      t,
      l,
      e
    ), i = void 0, !Gr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
      passive: i
    }) : e.addEventListener(t, l, !1);
  }
  function Ro(e, t, l, a, i) {
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
              var S = f.tag;
              if ((S === 3 || S === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; m !== null; ) {
            if (f = Da(m), f === null) return;
            if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) {
              a = u = f;
              continue e;
            }
            m = m.parentNode;
          }
        }
        a = a.return;
      }
    Qc(function() {
      var N = u, z = Br(l), B = [];
      e: {
        var O = bf.get(e);
        if (O !== void 0) {
          var M = $i, J = e;
          switch (e) {
            case "keypress":
              if (Zi(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = Gy;
              break;
            case "focusin":
              J = "focus", M = Kr;
              break;
            case "focusout":
              J = "blur", M = Kr;
              break;
            case "beforeblur":
            case "afterblur":
              M = Kr;
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
              M = $c;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Ny;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Vy;
              break;
            case pf:
            case vf:
            case Ef:
              M = Dy;
              break;
            case Sf:
              M = ky;
              break;
            case "scroll":
            case "scrollend":
              M = Cy;
              break;
            case "wheel":
              M = Zy;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = My;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = Wc;
              break;
            case "toggle":
            case "beforetoggle":
              M = $y;
          }
          var ee = (t & 4) !== 0, De = !ee && (e === "scroll" || e === "scrollend"), x = ee ? O !== null ? O + "Capture" : null : O;
          ee = [];
          for (var R = N, _; R !== null; ) {
            var j = R;
            if (_ = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || _ === null || x === null || (j = wn(R, x), j != null && ee.push(
              oi(R, j, _)
            )), De) break;
            R = R.return;
          }
          0 < ee.length && (O = new M(
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
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && l !== Hr && (J = l.relatedTarget || l.fromElement) && (Da(J) || J[wa]))
            break e;
          if ((M || O) && (O = z.window === z ? z : (O = z.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (J = l.relatedTarget || l.toElement, M = N, J = J ? Da(J) : null, J !== null && (De = h(J), ee = J.tag, J !== De || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (M = null, J = N), M !== J)) {
            if (ee = $c, j = "onMouseLeave", x = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Wc, j = "onPointerLeave", x = "onPointerEnter", R = "pointer"), De = M == null ? O : On(M), _ = J == null ? O : On(J), O = new ee(
              j,
              R + "leave",
              M,
              l,
              z
            ), O.target = De, O.relatedTarget = _, j = null, Da(z) === N && (ee = new ee(
              x,
              R + "enter",
              J,
              l,
              z
            ), ee.target = _, ee.relatedTarget = De, j = ee), De = j, M && J)
              t: {
                for (ee = J1, x = M, R = J, _ = 0, j = x; j; j = ee(j))
                  _++;
                j = 0;
                for (var I = R; I; I = ee(I))
                  j++;
                for (; 0 < _ - j; )
                  x = ee(x), _--;
                for (; 0 < j - _; )
                  R = ee(R), j--;
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
            M !== null && Vh(
              B,
              O,
              M,
              ee,
              !1
            ), J !== null && De !== null && Vh(
              B,
              De,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (O = N ? On(N) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var Re = uf;
          else if (af(O))
            if (rf)
              Re = i1;
            else {
              Re = a1;
              var F = l1;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? N && jr(N.elementType) && (Re = uf) : Re = n1;
          if (Re && (Re = Re(e, N))) {
            nf(
              B,
              Re,
              l,
              z
            );
            break e;
          }
          F && F(e, O, N), e === "focusout" && N && O.type === "number" && N.memoizedProps.value != null && Lr(O, "number", O.value);
        }
        switch (F = N ? On(N) : window, e) {
          case "focusin":
            (af(F) || F.contentEditable === "true") && (Ga = F, Fr = N, Bn = null);
            break;
          case "focusout":
            Bn = Fr = Ga = null;
            break;
          case "mousedown":
            Wr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wr = !1, yf(B, l, z);
            break;
          case "selectionchange":
            if (r1) break;
          case "keydown":
          case "keyup":
            yf(B, l, z);
        }
        var ce;
        if (Qr)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          qa ? tf(e, l) && (Ee = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Ic && l.locale !== "ko" && (qa || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && qa && (ce = Zc()) : (Dl = z, Yr = "value" in Dl ? Dl.value : Dl.textContent, qa = !0)), F = qu(N, Ee), 0 < F.length && (Ee = new Fc(
          Ee,
          e,
          null,
          l,
          z
        ), B.push({ event: Ee, listeners: F }), ce ? Ee.data = ce : (ce = lf(l), ce !== null && (Ee.data = ce)))), (ce = Wy ? Iy(e, l) : Py(e, l)) && (Ee = qu(N, "onBeforeInput"), 0 < Ee.length && (F = new Fc(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          z
        ), B.push({
          event: F,
          listeners: Ee
        }), F.data = ce)), K1(
          B,
          e,
          N,
          l,
          z
        );
      }
      Yh(B, t);
    });
  }
  function oi(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function qu(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = wn(e, l), i != null && a.unshift(
        oi(e, i, u)
      ), i = wn(e, t), i != null && a.push(
        oi(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function J1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Vh(e, t, l, a, i) {
    for (var u = t._reactName, f = []; l !== null && l !== a; ) {
      var m = l, S = m.alternate, N = m.stateNode;
      if (m = m.tag, S !== null && S === a) break;
      m !== 5 && m !== 26 && m !== 27 || N === null || (S = N, i ? (N = wn(l, u), N != null && f.unshift(
        oi(l, N, S)
      )) : i || (N = wn(l, u), N != null && f.push(
        oi(l, N, S)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var $1 = /\r\n?/g, F1 = /\u0000|\uFFFD/g;
  function Kh(e) {
    return (typeof e == "string" ? e : "" + e).replace($1, `
`).replace(F1, "");
  }
  function kh(e, t) {
    return t = Kh(t), Kh(e) === t;
  }
  function we(e, t, l, a, i, u) {
    switch (l) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || ja(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && ja(e, "" + a);
        break;
      case "className":
        Vi(e, "class", a);
        break;
      case "tabIndex":
        Vi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Vi(e, l, a);
        break;
      case "style":
        Kc(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Vi(e, "data", a);
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
        a = ki("" + a), e.setAttribute(l, a);
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
        a = ki("" + a), e.setAttribute(l, a);
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
            throw Error(c(61));
          if (l = a.__html, l != null) {
            if (i.children != null) throw Error(c(60));
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
        l = ki("" + a), e.setAttributeNS(
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
        he("beforetoggle", e), he("toggle", e), Xi(e, "popover", a);
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
        Xi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Ay.get(l) || l, Xi(e, l, a));
    }
  }
  function To(e, t, l, a, i, u) {
    switch (l) {
      case "style":
        Kc(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (l = a.__html, l != null) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string" ? ja(e, a) : (typeof a == "number" || typeof a == "bigint") && ja(e, "" + a);
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
        if (!Lc.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), u = e[yt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, i);
              break e;
            }
            l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : Xi(e, l, a);
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
                  throw Error(c(137, t));
                default:
                  we(e, t, u, f, l, null);
              }
          }
        i && we(e, t, "srcSet", l.srcSet, l, null), a && we(e, t, "src", l.src, l, null);
        return;
      case "input":
        he("invalid", e);
        var m = u = f = i = null, S = null, N = null;
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
                  S = z;
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
                    throw Error(c(137, t));
                  break;
                default:
                  we(e, t, a, z, l, null);
              }
          }
        Gc(
          e,
          u,
          m,
          S,
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
        t = u, l = f, e.multiple = !!a, t != null ? La(e, !!a, t, !1) : l != null && La(e, !!a, l, !0);
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
                if (m != null) throw Error(c(91));
                break;
              default:
                we(e, t, f, m, l, null);
            }
        Xc(e, a, i, u);
        return;
      case "option":
        for (S in l)
          l.hasOwnProperty(S) && (a = l[S], a != null) && (S === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : we(e, t, S, a, l, null));
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
        for (a = 0; a < si.length; a++)
          he(si[a], e);
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
                throw Error(c(137, t));
              default:
                we(e, t, N, a, l, null);
            }
        return;
      default:
        if (jr(t)) {
          for (z in l)
            l.hasOwnProperty(z) && (a = l[z], a !== void 0 && To(
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
  function W1(e, t, l, a) {
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
        var i = null, u = null, f = null, m = null, S = null, N = null, z = null;
        for (M in l) {
          var B = l[M];
          if (l.hasOwnProperty(M) && B != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = B;
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
                N = M;
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
                  throw Error(c(137, t));
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
        zr(
          e,
          f,
          m,
          S,
          N,
          z,
          u,
          i
        );
        return;
      case "select":
        M = f = m = O = null;
        for (u in l)
          if (S = l[u], l.hasOwnProperty(u) && S != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = S;
              default:
                a.hasOwnProperty(u) || we(
                  e,
                  t,
                  u,
                  null,
                  a,
                  S
                );
            }
        for (i in a)
          if (u = a[i], S = l[i], a.hasOwnProperty(i) && (u != null || S != null))
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
                u !== S && we(
                  e,
                  t,
                  i,
                  u,
                  a,
                  S
                );
            }
        t = m, l = f, a = M, O != null ? La(e, !!l, O, !1) : !!a != !!l && (t != null ? La(e, !!l, t, !0) : La(e, !!l, l ? [] : "", !1));
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
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== u && we(e, t, f, i, a, u);
            }
        Yc(e, O, M);
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
        for (S in a)
          O = a[S], M = l[S], a.hasOwnProperty(S) && O !== M && (O != null || M != null) && (S === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : we(
            e,
            t,
            S,
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
        for (N in a)
          if (O = a[N], M = l[N], a.hasOwnProperty(N) && O !== M && (O != null || M != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(c(137, t));
                break;
              default:
                we(
                  e,
                  t,
                  N,
                  O,
                  a,
                  M
                );
            }
        return;
      default:
        if (jr(t)) {
          for (var De in l)
            O = l[De], l.hasOwnProperty(De) && O !== void 0 && !a.hasOwnProperty(De) && To(
              e,
              t,
              De,
              void 0,
              a,
              O
            );
          for (z in a)
            O = a[z], M = l[z], !a.hasOwnProperty(z) || O === M || O === void 0 && M === void 0 || To(
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
  function Qh(e) {
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
  function I1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
        var i = l[a], u = i.transferSize, f = i.initiatorType, m = i.duration;
        if (u && m && Qh(f)) {
          for (f = 0, m = i.responseEnd, a += 1; a < l.length; a++) {
            var S = l[a], N = S.startTime;
            if (N > m) break;
            var z = S.transferSize, B = S.initiatorType;
            z && Qh(B) && (S = S.responseEnd, f += z * (S < m ? 1 : (m - N) / (S - N)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ao = null, xo = null;
  function Gu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Zh(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Jh(e, t) {
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
  function Co(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var _o = null;
  function P1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === _o ? !1 : (_o = e, !0) : (_o = null, !1);
  }
  var $h = typeof setTimeout == "function" ? setTimeout : void 0, eg = typeof clearTimeout == "function" ? clearTimeout : void 0, Fh = typeof Promise == "function" ? Promise : void 0, tg = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fh < "u" ? function(e) {
    return Fh.resolve(null).then(e).catch(lg);
  } : $h;
  function lg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Jl(e) {
    return e === "head";
  }
  function Wh(e, t) {
    var l = t, a = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(i), mn(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          a++;
        else if (l === "html")
          ci(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ci(l);
          for (var u = l.firstChild; u; ) {
            var f = u.nextSibling, m = u.nodeName;
            u[Nn] || m === "SCRIPT" || m === "STYLE" || m === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = f;
          }
        } else
          l === "body" && ci(e.ownerDocument.body);
      l = i;
    } while (l);
    mn(t);
  }
  function Ih(e, t) {
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
  function No(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          No(l), Ur(l);
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
  function ag(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Nn])
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
      if (e = Vt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ng(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Vt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Ph(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Vt(e.nextSibling), e === null)) return null;
    return e;
  }
  function Oo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function wo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ig(e, t) {
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
  function Vt(e) {
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
  var Do = null;
  function e0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Vt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function t0(e) {
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
  function l0(e, t, l) {
    switch (t = Gu(l), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function ci(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Ur(e);
  }
  var Kt = /* @__PURE__ */ new Map(), a0 = /* @__PURE__ */ new Set();
  function Yu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Tl = V.d;
  V.d = {
    f: ug,
    r: rg,
    D: sg,
    C: og,
    L: cg,
    m: fg,
    X: hg,
    S: dg,
    M: mg
  };
  function ug() {
    var e = Tl.f(), t = Uu();
    return e || t;
  }
  function rg(e) {
    var t = Ua(e);
    t !== null && t.tag === 5 && t.type === "form" ? Sd(t) : Tl.r(e);
  }
  var fn = typeof document > "u" ? null : document;
  function n0(e, t, l) {
    var a = fn;
    if (a && typeof t == "string" && t) {
      var i = jt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), a0.has(i) || (a0.add(i), e = { rel: e, crossOrigin: l, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ct(t, "link", e), at(t), a.head.appendChild(t)));
    }
  }
  function sg(e) {
    Tl.D(e), n0("dns-prefetch", e, null);
  }
  function og(e, t) {
    Tl.C(e, t), n0("preconnect", e, t);
  }
  function cg(e, t, l) {
    Tl.L(e, t, l);
    var a = fn;
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
          u = dn(e);
          break;
        case "script":
          u = hn(e);
      }
      Kt.has(u) || (e = w(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Kt.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(fi(u)) || t === "script" && a.querySelector(di(u)) || (t = a.createElement("link"), ct(t, "link", e), at(t), a.head.appendChild(t)));
    }
  }
  function fg(e, t) {
    Tl.m(e, t);
    var l = fn;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + jt(a) + '"][href="' + jt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = hn(e);
      }
      if (!Kt.has(u) && (e = w({ rel: "modulepreload", href: e }, t), Kt.set(u, e), l.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(di(u)))
              return;
        }
        a = l.createElement("link"), ct(a, "link", e), at(a), l.head.appendChild(a);
      }
    }
  }
  function dg(e, t, l) {
    Tl.S(e, t, l);
    var a = fn;
    if (a && e) {
      var i = Ma(a).hoistableStyles, u = dn(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var m = { loading: 0, preload: null };
        if (f = a.querySelector(
          fi(u)
        ))
          m.loading = 5;
        else {
          e = w(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Kt.get(u)) && Uo(e, l);
          var S = f = a.createElement("link");
          at(S), ct(S, "link", e), S._p = new Promise(function(N, z) {
            S.onload = N, S.onerror = z;
          }), S.addEventListener("load", function() {
            m.loading |= 1;
          }), S.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Xu(f, t, a);
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
  function hg(e, t) {
    Tl.X(e, t);
    var l = fn;
    if (l && e) {
      var a = Ma(l).hoistableScripts, i = hn(e), u = a.get(i);
      u || (u = l.querySelector(di(i)), u || (e = w({ src: e, async: !0 }, t), (t = Kt.get(i)) && Mo(e, t), u = l.createElement("script"), at(u), ct(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function mg(e, t) {
    Tl.M(e, t);
    var l = fn;
    if (l && e) {
      var a = Ma(l).hoistableScripts, i = hn(e), u = a.get(i);
      u || (u = l.querySelector(di(i)), u || (e = w({ src: e, async: !0, type: "module" }, t), (t = Kt.get(i)) && Mo(e, t), u = l.createElement("script"), at(u), ct(u, "link", e), l.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function i0(e, t, l, a) {
    var i = (i = K.current) ? Yu(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = dn(l.href), l = Ma(
          i
        ).hoistableStyles, a = l.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = dn(l.href);
          var u = Ma(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            fi(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Kt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Kt.set(e, l), u || yg(
            i,
            e,
            l,
            f.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = hn(l), l = Ma(
          i
        ).hoistableScripts, a = l.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function dn(e) {
    return 'href="' + jt(e) + '"';
  }
  function fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function u0(e) {
    return w({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function yg(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", l), at(t), e.head.appendChild(t));
  }
  function hn(e) {
    return '[src="' + jt(e) + '"]';
  }
  function di(e) {
    return "script[async]" + e;
  }
  function r0(e, t, l) {
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
          ), at(a), ct(a, "style", i), Xu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          i = dn(l.href);
          var u = e.querySelector(
            fi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, at(u), u;
          a = u0(l), (i = Kt.get(i)) && Uo(a, i), u = (e.ownerDocument || e).createElement("link"), at(u);
          var f = u;
          return f._p = new Promise(function(m, S) {
            f.onload = m, f.onerror = S;
          }), ct(u, "link", a), t.state.loading |= 4, Xu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = hn(l.src), (i = e.querySelector(
            di(u)
          )) ? (t.instance = i, at(i), i) : (a = l, (i = Kt.get(u)) && (a = w({}, l), Mo(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), at(i), ct(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Xu(a, l.precedence, e));
    return t.instance;
  }
  function Xu(e, t, l) {
    for (var a = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var m = a[f];
      if (m.dataset.precedence === t) u = m;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Uo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Mo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Vu = null;
  function s0(e, t, l) {
    if (Vu === null) {
      var a = /* @__PURE__ */ new Map(), i = Vu = /* @__PURE__ */ new Map();
      i.set(l, a);
    } else
      i = Vu, a = i.get(l), a || (a = /* @__PURE__ */ new Map(), i.set(l, a));
    if (a.has(e)) return a;
    for (a.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
      var u = l[i];
      if (!(u[Nn] || u[ut] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var m = a.get(f);
        m ? m.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function o0(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function gg(e, t, l) {
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
  function c0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function pg(e, t, l, a) {
    if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var i = dn(a.href), u = t.querySelector(
          fi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ku.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, at(u);
          return;
        }
        u = t.ownerDocument || t, a = u0(a), (i = Kt.get(i)) && Uo(a, i), u = u.createElement("link"), at(u);
        var f = u;
        f._p = new Promise(function(m, S) {
          f.onload = m, f.onerror = S;
        }), ct(u, "link", a), l.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Ku.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var zo = 0;
  function vg(e, t) {
    return e.stylesheets && e.count === 0 && Qu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var a = setTimeout(function() {
        if (e.stylesheets && Qu(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && zo === 0 && (zo = 62500 * I1());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > zo ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Ku() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ku = null;
  function Qu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ku = /* @__PURE__ */ new Map(), t.forEach(Eg, e), ku = null, Ku.call(e));
  }
  function Eg(e, t) {
    if (!(t.state.loading & 4)) {
      var l = ku.get(e);
      if (l) var a = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), ku.set(e, l);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
        }
        a && l.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = l.get(f) || a, u === a && l.set(null, i), l.set(f, i), this.count++, a = Ku.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var hi = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: fe,
    _currentValue2: fe,
    _threadCount: 0
  };
  function Sg(e, t, l, a, i, u, f, m, S) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nr(0), this.hiddenUpdates = Nr(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function f0(e, t, l, a, i, u, f, m, S, N, z, B) {
    return e = new Sg(
      e,
      t,
      l,
      f,
      S,
      N,
      z,
      B,
      m
    ), t = 1, u === !0 && (t |= 24), u = Ot(3, null, null, t), e.current = u, u.stateNode = e, t = ds(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: l,
      cache: t
    }, gs(u), e;
  }
  function d0(e) {
    return e ? (e = Va, e) : Va;
  }
  function h0(e, t, l, a, i, u) {
    i = d0(i), a.context === null ? a.context = i : a.pendingContext = i, a = Hl(t), a.payload = { element: l }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Bl(e, a, t), l !== null && (bt(l, e, t), kn(l, e, t));
  }
  function m0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Lo(e, t) {
    m0(e, t), (e = e.alternate) && m0(e, t);
  }
  function y0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sa(e, 67108864);
      t !== null && bt(t, e, 67108864), Lo(e, 67108864);
    }
  }
  function g0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = Or(t);
      var l = sa(e, t);
      l !== null && bt(l, e, t), Lo(e, t);
    }
  }
  var Zu = !0;
  function bg(e, t, l, a) {
    var i = G.T;
    G.T = null;
    var u = V.p;
    try {
      V.p = 2, jo(e, t, l, a);
    } finally {
      V.p = u, G.T = i;
    }
  }
  function Rg(e, t, l, a) {
    var i = G.T;
    G.T = null;
    var u = V.p;
    try {
      V.p = 8, jo(e, t, l, a);
    } finally {
      V.p = u, G.T = i;
    }
  }
  function jo(e, t, l, a) {
    if (Zu) {
      var i = Ho(a);
      if (i === null)
        Ro(
          e,
          t,
          a,
          Ju,
          l
        ), v0(e, a);
      else if (Ag(
        i,
        e,
        t,
        l,
        a
      ))
        a.stopPropagation();
      else if (v0(e, a), t & 4 && -1 < Tg.indexOf(e)) {
        for (; i !== null; ) {
          var u = Ua(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = aa(u.pendingLanes);
                  if (f !== 0) {
                    var m = u;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; f; ) {
                      var S = 1 << 31 - _t(f);
                      m.entanglements[1] |= S, f &= ~S;
                    }
                    nl(u), (xe & 6) === 0 && (wu = xt() + 500, ri(0));
                  }
                }
                break;
              case 31:
              case 13:
                m = sa(u, 2), m !== null && bt(m, u, 2), Uu(), Lo(u, 2);
            }
          if (u = Ho(a), u === null && Ro(
            e,
            t,
            a,
            Ju,
            l
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        Ro(
          e,
          t,
          a,
          null,
          l
        );
    }
  }
  function Ho(e) {
    return e = Br(e), Bo(e);
  }
  var Ju = null;
  function Bo(e) {
    if (Ju = null, e = Da(e), e !== null) {
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
    return Ju = e, null;
  }
  function p0(e) {
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
        switch (sy()) {
          case Ac:
            return 2;
          case xc:
            return 8;
          case Hi:
          case oy:
            return 32;
          case Cc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qo = !1, $l = null, Fl = null, Wl = null, mi = /* @__PURE__ */ new Map(), yi = /* @__PURE__ */ new Map(), Il = [], Tg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function v0(e, t) {
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
        mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yi.delete(t.pointerId);
    }
  }
  function gi(e, t, l, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Ua(t), t !== null && y0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Ag(e, t, l, a, i) {
    switch (t) {
      case "focusin":
        return $l = gi(
          $l,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "dragenter":
        return Fl = gi(
          Fl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "mouseover":
        return Wl = gi(
          Wl,
          e,
          t,
          l,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return mi.set(
          u,
          gi(
            mi.get(u) || null,
            e,
            t,
            l,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, yi.set(
          u,
          gi(
            yi.get(u) || null,
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
  function E0(e) {
    var t = Da(e.target);
    if (t !== null) {
      var l = h(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, Uc(e.priority, function() {
              g0(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Uc(e.priority, function() {
              g0(l);
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
  function $u(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = Ho(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(
          l.type,
          l
        );
        Hr = a, l.target.dispatchEvent(a), Hr = null;
      } else
        return t = Ua(l), t !== null && y0(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function S0(e, t, l) {
    $u(e) && l.delete(t);
  }
  function xg() {
    qo = !1, $l !== null && $u($l) && ($l = null), Fl !== null && $u(Fl) && (Fl = null), Wl !== null && $u(Wl) && (Wl = null), mi.forEach(S0), yi.forEach(S0);
  }
  function Fu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qo || (qo = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      xg
    )));
  }
  var Wu = null;
  function b0(e) {
    Wu !== e && (Wu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Wu === e && (Wu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Bo(a || l) === null)
              continue;
            break;
          }
          var u = Ua(l);
          u !== null && (e.splice(t, 3), t -= 3, js(
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
  function mn(e) {
    function t(S) {
      return Fu(S, e);
    }
    $l !== null && Fu($l, e), Fl !== null && Fu(Fl, e), Wl !== null && Fu(Wl, e), mi.forEach(t), yi.forEach(t);
    for (var l = 0; l < Il.length; l++) {
      var a = Il[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Il.length && (l = Il[0], l.blockedOn === null); )
      E0(l), l.blockedOn === null && Il.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (a = 0; a < l.length; a += 3) {
        var i = l[a], u = l[a + 1], f = i[yt] || null;
        if (typeof u == "function")
          f || b0(l);
        else if (f) {
          var m = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[yt] || null)
              m = f.formAction;
            else if (Bo(i) !== null) continue;
          } else m = f.action;
          typeof m == "function" ? l[a + 1] = m : (l.splice(a, 3), a -= 3), b0(l);
        }
      }
  }
  function R0() {
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
  function Go(e) {
    this._internalRoot = e;
  }
  Iu.prototype.render = Go.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var l = t.current, a = zt();
    h0(l, a, e, t, null, null);
  }, Iu.prototype.unmount = Go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      h0(e.current, 2, null, e, null, null), Uu(), t[wa] = null;
    }
  };
  function Iu(e) {
    this._internalRoot = e;
  }
  Iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Dc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Il.length && t !== 0 && t < Il[l].priority; l++) ;
      Il.splice(l, 0, e), l === 0 && E0(e);
    }
  };
  var T0 = s.version;
  if (T0 !== "19.2.3")
    throw Error(
      c(
        527,
        T0,
        "19.2.3"
      )
    );
  V.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = E(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Cg = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pu.isDisabled && Pu.supportsFiber)
      try {
        xn = Pu.inject(
          Cg
        ), Ct = Pu;
      } catch {
      }
  }
  return Ei.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var l = !1, a = "", i = wd, u = Dd, f = Ud;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = f0(
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
      R0
    ), e[wa] = t.current, bo(e), new Go(t);
  }, Ei.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(c(299));
    var a = !1, i = "", u = wd, f = Dd, m = Ud, S = null;
    return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (m = l.onRecoverableError), l.formState !== void 0 && (S = l.formState)), t = f0(
      e,
      1,
      !0,
      t,
      l ?? null,
      a,
      i,
      S,
      u,
      f,
      m,
      R0
    ), t.context = d0(null), l = t.current, a = zt(), a = Or(a), i = Hl(a), i.callback = null, Bl(l, i, a), l = a, t.current.lanes = l, _n(t, l), nl(t), e[wa] = t.current, bo(e), new Iu(t);
  }, Ei.version = "19.2.3", Ei;
}
var q0;
function hv() {
  if (q0) return Zo.exports;
  q0 = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Zo.exports = dv(), Zo.exports;
}
var mv = hv(), me = /* @__PURE__ */ ((n) => (n.SUCCESS = "success", n.WARNING = "warning", n.ERROR = "error", n.INFO = "info", n))(me || {}), Wt = /* @__PURE__ */ ((n) => (n.PRIMARY = "primary", n.OUTLINE = "outline", n.LINK = "link", n))(Wt || {}), It = /* @__PURE__ */ ((n) => (n.BUTTON = "button", n.SUBMIT = "submit", n.RESET = "reset", n))(It || {}), kt = /* @__PURE__ */ ((n) => (n.DEV = "dev", n.TEST = "test", n.STAGE = "stage", n.PROD = "prod", n))(kt || {}), pc = /* @__PURE__ */ ((n) => (n.TEST = "TEST", n.WEBCOMPONENT = "WEBCOMPONENT", n))(pc || {}), ea = /* @__PURE__ */ ((n) => (n.ALERT = "alert", n.STATUS = "status", n))(ea || {}), xi = /* @__PURE__ */ ((n) => (n.ASSERTIVE = "assertive", n.POLITE = "polite", n.OFF = "off", n))(xi || {});
const ye = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, He = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, Fo = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, _a = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout",
  GLOBAL_SUBSIDIARIES: "/global/subsidiaries"
}, vr = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, tr = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ti = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, yn = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, G0 = /[!@#$%^&*._-]/, Y0 = /^[A-Za-z0-9!@#$%^&*._-]+$/, Ci = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, yv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Si = {
  COURSES: "/courses"
}, ke = {
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
}, gv = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, pv = {
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
}, vv = {
  EMAIL_NOT_FOUND: "No account found with this email address."
}, Qe = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]"
}, Wo = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, Io = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, Po = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, lr = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Qt = ({
  label: n,
  onClick: r,
  disabled: s,
  type: o = It.BUTTON,
  variant: c = Wt.PRIMARY,
  className: d,
  children: h,
  ariaLabel: g,
  mainButtonStyle: p
}) => {
  const y = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", E = {
    [Wt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [Wt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [Wt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, T = d ? `${y} ${E[c]} ${d}` : `${y} ${E[c]}`;
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      className: T,
      onClick: r,
      disabled: s,
      type: o,
      "aria-label": g || (typeof n == "string" ? n : void 0),
      "aria-disabled": s,
      style: { ...p, borderStyle: "solid !important" },
      children: h || n
    }
  );
}, ba = A.forwardRef((n, r) => {
  const {
    label: s,
    startIcon: o,
    endIcon: c,
    error: d,
    helperText: h,
    optional: g,
    className: p,
    options: y,
    id: E,
    ...T
  } = n, w = !!d || !!h, q = T.type === "select" || !!y, C = E || `input-${Math.random().toString(36).substr(2, 9)}`, L = `${C}-error`, U = `${C}-helper`;
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
      o && /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: o
        }
      ),
      q ? /* @__PURE__ */ v.jsx(
        "select",
        {
          ref: r,
          id: C,
          "aria-label": typeof s == "string" ? s : T["aria-label"],
          "aria-invalid": w,
          "aria-describedby": w ? L : void 0,
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
          "aria-describedby": w ? L : void 0,
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
      c && /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "flex! items-center! justify-center! absolute! right-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: c
        }
      )
    ] }),
    d && typeof d == "string" && /* @__PURE__ */ v.jsx(
      "div",
      {
        id: L,
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
}), Ev = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", pn = ({
  type: n,
  message: r,
  actionText: s,
  onActionClick: o,
  onClose: c,
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
        return /* @__PURE__ */ v.jsx("img", { src: Ev, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g(), E = () => {
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
      role: E(),
      "aria-live": n === me.ERROR ? xi.ASSERTIVE : xi.POLITE,
      "aria-atomic": "true",
      className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`,
      children: [
        /* @__PURE__ */ v.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, "aria-hidden": "true", children: p() }),
        /* @__PURE__ */ v.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
          /* @__PURE__ */ v.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
          s && o && /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              onClick: o,
              "aria-label": s,
              className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
              children: s
            }
          ),
          h
        ] }),
        c && /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: c,
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
}, ic = ({ type: n, message: r, duration: s = 5e3, onClose: o, className: c = "" }) => {
  const [d, h] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => h(!0), Ci.ANIMATION_ENTRANCE_DELAY);
    const C = setTimeout(() => {
      y();
    }, s);
    return () => clearTimeout(C);
  }, [s]);
  const y = () => {
    p(!0), setTimeout(() => {
      h(!1), o && o();
    }, Ci.ANIMATION_EXIT_DURATION);
  }, E = () => {
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
  }, w = E(), q = () => {
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
      "aria-live": n === me.ERROR ? xi.ASSERTIVE : xi.POLITE,
      "aria-atomic": "true",
      className: `fixed! top-4! right-4! z-[${Wo.Z_INDEX}]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: Wo.MAX_WIDTH, width: Wo.WIDTH },
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
}, Um = () => /* @__PURE__ */ v.jsx(
  "span",
  {
    className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { className: "sr-only", children: "Loading..." })
  }
);
class Ri extends Error {
}
Ri.prototype.name = "InvalidTokenError";
function Sv(n) {
  return decodeURIComponent(atob(n).replace(/(.)/g, (r, s) => {
    let o = s.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
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
    return Sv(r);
  } catch {
    return atob(r);
  }
}
function Di(n, r) {
  if (typeof n != "string")
    throw new Ri("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, o = n.split(".")[s];
  if (typeof o != "string")
    throw new Ri(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = bv(o);
  } catch (d) {
    throw new Ri(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ri(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Mm() {
  const n = window.location.hostname;
  if (n === xl.HOSTNAME || n === xl.IP || xl.IP_PATTERN.test(n))
    return "";
  const r = n.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Rv() {
  const n = window.location.hostname;
  return n === xl.HOSTNAME || n === xl.IP || xl.IP_PATTERN.test(n) || n.startsWith(`${ke.DEV}.`) || n.startsWith(`${ke.DEV}-`) ? kt.DEV : n.startsWith(`${ke.TEST}.`) || n.startsWith(`${ke.TEST}-`) ? kt.TEST : n.startsWith(`${ke.STAGE}.`) || n.startsWith(`${ke.STAGE}-`) ? kt.STAGE : kt.PROD;
}
function ar() {
  const n = window.location.href, r = new URL(n), s = r.hostname;
  if (s.startsWith(`${ke.DEV}.`)) {
    const o = s.replace(`${ke.DEV}.`, `${ke.DEV_LEARN}.`);
    return `${r.protocol}//${o}${Si.COURSES}`;
  } else if (s.startsWith(`${ke.TEST}.`)) {
    const o = s.replace(`${ke.TEST}.`, `${ke.TEST_LEARN}.`);
    return `${r.protocol}//${o}${Si.COURSES}`;
  } else if (s.startsWith(`${ke.STAGE}.`)) {
    const o = s.replace(`${ke.STAGE}.`, `${ke.STAGE_LEARN}.`);
    return `${r.protocol}//${o}${Si.COURSES}`;
  } else if (s.split(".").length === 2) {
    const c = `${ke.LEARN}.${s}`;
    return `${r.protocol}//${c}${Si.COURSES}`;
  } else
    return `${r.protocol}//${s}${Si.COURSES}`;
}
function Ra(n, r, s, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + s);
  const d = Mm(), h = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(r) : r;
  document.cookie = `${n}=${p}; expires=${c.toUTCString()}; path=/${h}${g}; SameSite=Strict`;
}
function Rt(n, r = !0) {
  const s = document.cookie.split(";");
  for (const o of s) {
    const c = o.trim();
    if (c.startsWith(`${n}=`)) {
      const d = c.substring(n.length + 1);
      return r ? decodeURIComponent(d) : d;
    }
  }
  return null;
}
function nr(n) {
  const r = Mm(), s = r ? `; domain=${r}` : "";
  document.cookie = `${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function zm(n, r) {
  return function() {
    return n.apply(r, arguments);
  };
}
var X0 = {};
const { toString: Tv } = Object.prototype, { getPrototypeOf: vc } = Object, { iterator: Er, toStringTag: Lm } = Symbol, Sr = /* @__PURE__ */ ((n) => (r) => {
  const s = Tv.call(r);
  return n[s] || (n[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), el = (n) => (n = n.toLowerCase(), (r) => Sr(r) === n), br = (n) => (r) => typeof r === n, { isArray: bn } = Array, vn = br("undefined");
function Ui(n) {
  return n !== null && !vn(n) && n.constructor !== null && !vn(n.constructor) && Tt(n.constructor.isBuffer) && n.constructor.isBuffer(n);
}
const jm = el("ArrayBuffer");
function Av(n) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(n) : r = n && n.buffer && jm(n.buffer), r;
}
const xv = br("string"), Tt = br("function"), Hm = br("number"), Mi = (n) => n !== null && typeof n == "object", Cv = (n) => n === !0 || n === !1, sr = (n) => {
  if (Sr(n) !== "object")
    return !1;
  const r = vc(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Lm in n) && !(Er in n);
}, _v = (n) => {
  if (!Mi(n) || Ui(n))
    return !1;
  try {
    return Object.keys(n).length === 0 && Object.getPrototypeOf(n) === Object.prototype;
  } catch {
    return !1;
  }
}, Nv = el("Date"), Ov = el("File"), wv = el("Blob"), Dv = el("FileList"), Uv = (n) => Mi(n) && Tt(n.pipe), Mv = (n) => {
  let r;
  return n && (typeof FormData == "function" && n instanceof FormData || Tt(n.append) && ((r = Sr(n)) === "formdata" || // detect form-data instance
  r === "object" && Tt(n.toString) && n.toString() === "[object FormData]"));
}, zv = el("URLSearchParams"), [Lv, jv, Hv, Bv] = ["ReadableStream", "Request", "Response", "Headers"].map(el), qv = (n) => n.trim ? n.trim() : n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(n, r, { allOwnKeys: s = !1 } = {}) {
  if (n === null || typeof n > "u")
    return;
  let o, c;
  if (typeof n != "object" && (n = [n]), bn(n))
    for (o = 0, c = n.length; o < c; o++)
      r.call(null, n[o], o, n);
  else {
    if (Ui(n))
      return;
    const d = s ? Object.getOwnPropertyNames(n) : Object.keys(n), h = d.length;
    let g;
    for (o = 0; o < h; o++)
      g = d[o], r.call(null, n[g], g, n);
  }
}
function Bm(n, r) {
  if (Ui(n))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(n);
  let o = s.length, c;
  for (; o-- > 0; )
    if (c = s[o], r === c.toLowerCase())
      return c;
  return null;
}
const Ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, qm = (n) => !vn(n) && n !== Ta;
function uc() {
  const { caseless: n, skipUndefined: r } = qm(this) && this || {}, s = {}, o = (c, d) => {
    const h = n && Bm(s, d) || d;
    sr(s[h]) && sr(c) ? s[h] = uc(s[h], c) : sr(c) ? s[h] = uc({}, c) : bn(c) ? s[h] = c.slice() : (!r || !vn(c)) && (s[h] = c);
  };
  for (let c = 0, d = arguments.length; c < d; c++)
    arguments[c] && zi(arguments[c], o);
  return s;
}
const Gv = (n, r, s, { allOwnKeys: o } = {}) => (zi(r, (c, d) => {
  s && Tt(c) ? n[d] = zm(c, s) : n[d] = c;
}, { allOwnKeys: o }), n), Yv = (n) => (n.charCodeAt(0) === 65279 && (n = n.slice(1)), n), Xv = (n, r, s, o) => {
  n.prototype = Object.create(r.prototype, o), n.prototype.constructor = n, Object.defineProperty(n, "super", {
    value: r.prototype
  }), s && Object.assign(n.prototype, s);
}, Vv = (n, r, s, o) => {
  let c, d, h;
  const g = {};
  if (r = r || {}, n == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(n), d = c.length; d-- > 0; )
      h = c[d], (!o || o(h, n, r)) && !g[h] && (r[h] = n[h], g[h] = !0);
    n = s !== !1 && vc(n);
  } while (n && (!s || s(n, r)) && n !== Object.prototype);
  return r;
}, Kv = (n, r, s) => {
  n = String(n), (s === void 0 || s > n.length) && (s = n.length), s -= r.length;
  const o = n.indexOf(r, s);
  return o !== -1 && o === s;
}, kv = (n) => {
  if (!n) return null;
  if (bn(n)) return n;
  let r = n.length;
  if (!Hm(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = n[r];
  return s;
}, Qv = /* @__PURE__ */ ((n) => (r) => n && r instanceof n)(typeof Uint8Array < "u" && vc(Uint8Array)), Zv = (n, r) => {
  const o = (n && n[Er]).call(n);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const d = c.value;
    r.call(n, d[0], d[1]);
  }
}, Jv = (n, r) => {
  let s;
  const o = [];
  for (; (s = n.exec(r)) !== null; )
    o.push(s);
  return o;
}, $v = el("HTMLFormElement"), Fv = (n) => n.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, c) {
    return o.toUpperCase() + c;
  }
), V0 = (({ hasOwnProperty: n }) => (r, s) => n.call(r, s))(Object.prototype), Wv = el("RegExp"), Gm = (n, r) => {
  const s = Object.getOwnPropertyDescriptors(n), o = {};
  zi(s, (c, d) => {
    let h;
    (h = r(c, d, n)) !== !1 && (o[d] = h || c);
  }), Object.defineProperties(n, o);
}, Iv = (n) => {
  Gm(n, (r, s) => {
    if (Tt(n) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const o = n[s];
    if (Tt(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, Pv = (n, r) => {
  const s = {}, o = (c) => {
    c.forEach((d) => {
      s[d] = !0;
    });
  };
  return bn(n) ? o(n) : o(String(n).split(r)), s;
}, eE = () => {
}, tE = (n, r) => n != null && Number.isFinite(n = +n) ? n : r;
function lE(n) {
  return !!(n && Tt(n.append) && n[Lm] === "FormData" && n[Er]);
}
const aE = (n) => {
  const r = new Array(10), s = (o, c) => {
    if (Mi(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (Ui(o))
        return o;
      if (!("toJSON" in o)) {
        r[c] = o;
        const d = bn(o) ? [] : {};
        return zi(o, (h, g) => {
          const p = s(h, c + 1);
          !vn(p) && (d[g] = p);
        }), r[c] = void 0, d;
      }
    }
    return o;
  };
  return s(n, 0);
}, nE = el("AsyncFunction"), iE = (n) => n && (Mi(n) || Tt(n)) && Tt(n.then) && Tt(n.catch), Ym = ((n, r) => n ? setImmediate : r ? ((s, o) => (Ta.addEventListener("message", ({ source: c, data: d }) => {
  c === Ta && d === s && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), Ta.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Tt(Ta.postMessage)
), uE = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ta) : typeof X0 < "u" && X0.nextTick || Ym, rE = (n) => n != null && Tt(n[Er]), D = {
  isArray: bn,
  isArrayBuffer: jm,
  isBuffer: Ui,
  isFormData: Mv,
  isArrayBufferView: Av,
  isString: xv,
  isNumber: Hm,
  isBoolean: Cv,
  isObject: Mi,
  isPlainObject: sr,
  isEmptyObject: _v,
  isReadableStream: Lv,
  isRequest: jv,
  isResponse: Hv,
  isHeaders: Bv,
  isUndefined: vn,
  isDate: Nv,
  isFile: Ov,
  isBlob: wv,
  isRegExp: Wv,
  isFunction: Tt,
  isStream: Uv,
  isURLSearchParams: zv,
  isTypedArray: Qv,
  isFileList: Dv,
  forEach: zi,
  merge: uc,
  extend: Gv,
  trim: qv,
  stripBOM: Yv,
  inherits: Xv,
  toFlatObject: Vv,
  kindOf: Sr,
  kindOfTest: el,
  endsWith: Kv,
  toArray: kv,
  forEachEntry: Zv,
  matchAll: Jv,
  isHTMLForm: $v,
  hasOwnProperty: V0,
  hasOwnProp: V0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gm,
  freezeMethods: Iv,
  toObjectSet: Pv,
  toCamelCase: Fv,
  noop: eE,
  toFiniteNumber: tE,
  findKey: Bm,
  global: Ta,
  isContextDefined: qm,
  isSpecCompliantForm: lE,
  toJSONObject: aE,
  isAsyncFn: nE,
  isThenable: iE,
  setImmediate: Ym,
  asap: uE,
  isIterable: rE
};
function re(n, r, s, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = n, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
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
const Xm = re.prototype, Vm = {};
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
  Vm[n] = { value: n };
});
Object.defineProperties(re, Vm);
Object.defineProperty(Xm, "isAxiosError", { value: !0 });
re.from = (n, r, s, o, c, d) => {
  const h = Object.create(Xm);
  D.toFlatObject(n, h, function(E) {
    return E !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = n && n.message ? n.message : "Error", p = r == null && n ? n.code : r;
  return re.call(h, g, p, s, o, c), n && h.cause == null && Object.defineProperty(h, "cause", { value: n, configurable: !0 }), h.name = n && n.name || "Error", d && Object.assign(h, d), h;
};
const sE = null;
function rc(n) {
  return D.isPlainObject(n) || D.isArray(n);
}
function Km(n) {
  return D.endsWith(n, "[]") ? n.slice(0, -2) : n;
}
function K0(n, r, s) {
  return n ? n.concat(r).map(function(c, d) {
    return c = Km(c), !s && d ? "[" + c + "]" : c;
  }).join(s ? "." : "") : r;
}
function oE(n) {
  return D.isArray(n) && !n.some(rc);
}
const cE = D.toFlatObject(D, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Rr(n, r, s) {
  if (!D.isObject(n))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = D.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, U) {
    return !D.isUndefined(U[L]);
  });
  const o = s.metaTokens, c = s.visitor || E, d = s.dots, h = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && D.isSpecCompliantForm(r);
  if (!D.isFunction(c))
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
  function E(C, L, U) {
    let Y = C;
    if (C && !U && typeof C == "object") {
      if (D.endsWith(L, "{}"))
        L = o ? L : L.slice(0, -2), C = JSON.stringify(C);
      else if (D.isArray(C) && oE(C) || (D.isFileList(C) || D.endsWith(L, "[]")) && (Y = D.toArray(C)))
        return L = Km(L), Y.forEach(function($, W) {
          !(D.isUndefined($) || $ === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            h === !0 ? K0([L], W, d) : h === null ? L : L + "[]",
            y($)
          );
        }), !1;
    }
    return rc(C) ? !0 : (r.append(K0(U, L, d), y(C)), !1);
  }
  const T = [], w = Object.assign(cE, {
    defaultVisitor: E,
    convertValue: y,
    isVisitable: rc
  });
  function q(C, L) {
    if (!D.isUndefined(C)) {
      if (T.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      T.push(C), D.forEach(C, function(Y, Q) {
        (!(D.isUndefined(Y) || Y === null) && c.call(
          r,
          Y,
          D.isString(Q) ? Q.trim() : Q,
          L,
          w
        )) === !0 && q(Y, L ? L.concat(Q) : [Q]);
      }), T.pop();
    }
  }
  if (!D.isObject(n))
    throw new TypeError("data must be an object");
  return q(n), r;
}
function k0(n) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g, function(o) {
    return r[o];
  });
}
function Ec(n, r) {
  this._pairs = [], n && Rr(n, this, r);
}
const km = Ec.prototype;
km.append = function(r, s) {
  this._pairs.push([r, s]);
};
km.toString = function(r) {
  const s = r ? function(o) {
    return r.call(this, o, k0);
  } : k0;
  return this._pairs.map(function(c) {
    return s(c[0]) + "=" + s(c[1]);
  }, "").join("&");
};
function fE(n) {
  return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Qm(n, r, s) {
  if (!r)
    return n;
  const o = s && s.encode || fE;
  D.isFunction(s) && (s = {
    serialize: s
  });
  const c = s && s.serialize;
  let d;
  if (c ? d = c(r, s) : d = D.isURLSearchParams(r) ? r.toString() : new Ec(r, s).toString(o), d) {
    const h = n.indexOf("#");
    h !== -1 && (n = n.slice(0, h)), n += (n.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return n;
}
class Q0 {
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
  use(r, s, o) {
    return this.handlers.push({
      fulfilled: r,
      rejected: s,
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
    D.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const Zm = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, dE = typeof URLSearchParams < "u" ? URLSearchParams : Ec, hE = typeof FormData < "u" ? FormData : null, mE = typeof Blob < "u" ? Blob : null, yE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: dE,
    FormData: hE,
    Blob: mE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Sc = typeof window < "u" && typeof document < "u", sc = typeof navigator == "object" && navigator || void 0, gE = Sc && (!sc || ["ReactNative", "NativeScript", "NS"].indexOf(sc.product) < 0), pE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", vE = Sc && window.location.href || "http://localhost", EE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Sc,
  hasStandardBrowserEnv: gE,
  hasStandardBrowserWebWorkerEnv: pE,
  navigator: sc,
  origin: vE
}, Symbol.toStringTag, { value: "Module" })), ht = {
  ...EE,
  ...yE
};
function SE(n, r) {
  return Rr(n, new ht.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return ht.isNode && D.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function bE(n) {
  return D.matchAll(/\w+|\[(\w*)]/g, n).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function RE(n) {
  const r = {}, s = Object.keys(n);
  let o;
  const c = s.length;
  let d;
  for (o = 0; o < c; o++)
    d = s[o], r[d] = n[d];
  return r;
}
function Jm(n) {
  function r(s, o, c, d) {
    let h = s[d++];
    if (h === "__proto__") return !0;
    const g = Number.isFinite(+h), p = d >= s.length;
    return h = !h && D.isArray(c) ? c.length : h, p ? (D.hasOwnProp(c, h) ? c[h] = [c[h], o] : c[h] = o, !g) : ((!c[h] || !D.isObject(c[h])) && (c[h] = []), r(s, o, c[h], d) && D.isArray(c[h]) && (c[h] = RE(c[h])), !g);
  }
  if (D.isFormData(n) && D.isFunction(n.entries)) {
    const s = {};
    return D.forEachEntry(n, (o, c) => {
      r(bE(o), c, s, 0);
    }), s;
  }
  return null;
}
function TE(n, r, s) {
  if (D.isString(n))
    try {
      return (r || JSON.parse)(n), D.trim(n);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (s || JSON.stringify)(n);
}
const Li = {
  transitional: Zm,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const o = s.getContentType() || "", c = o.indexOf("application/json") > -1, d = D.isObject(r);
    if (d && D.isHTMLForm(r) && (r = new FormData(r)), D.isFormData(r))
      return c ? JSON.stringify(Jm(r)) : r;
    if (D.isArrayBuffer(r) || D.isBuffer(r) || D.isStream(r) || D.isFile(r) || D.isBlob(r) || D.isReadableStream(r))
      return r;
    if (D.isArrayBufferView(r))
      return r.buffer;
    if (D.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return SE(r, this.formSerializer).toString();
      if ((g = D.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Rr(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || c ? (s.setContentType("application/json", !1), TE(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || Li.transitional, o = s && s.forcedJSONParsing, c = this.responseType === "json";
    if (D.isResponse(r) || D.isReadableStream(r))
      return r;
    if (r && D.isString(r) && (o && !this.responseType || c)) {
      const h = !(s && s.silentJSONParsing) && c;
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
  Li.headers[n] = {};
});
const AE = D.toObjectSet([
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
]), xE = (n) => {
  const r = {};
  let s, o, c;
  return n && n.split(`
`).forEach(function(h) {
    c = h.indexOf(":"), s = h.substring(0, c).trim().toLowerCase(), o = h.substring(c + 1).trim(), !(!s || r[s] && AE[s]) && (s === "set-cookie" ? r[s] ? r[s].push(o) : r[s] = [o] : r[s] = r[s] ? r[s] + ", " + o : o);
  }), r;
}, Z0 = /* @__PURE__ */ Symbol("internals");
function bi(n) {
  return n && String(n).trim().toLowerCase();
}
function or(n) {
  return n === !1 || n == null ? n : D.isArray(n) ? n.map(or) : String(n);
}
function CE(n) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = s.exec(n); )
    r[o[1]] = o[2];
  return r;
}
const _E = (n) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());
function ec(n, r, s, o, c) {
  if (D.isFunction(o))
    return o.call(this, r, s);
  if (c && (r = s), !!D.isString(r)) {
    if (D.isString(o))
      return r.indexOf(o) !== -1;
    if (D.isRegExp(o))
      return o.test(r);
  }
}
function NE(n) {
  return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, o) => s.toUpperCase() + o);
}
function OE(n, r) {
  const s = D.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(n, o + s, {
      value: function(c, d, h) {
        return this[o].call(this, r, c, d, h);
      },
      configurable: !0
    });
  });
}
let At = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, o) {
    const c = this;
    function d(g, p, y) {
      const E = bi(p);
      if (!E)
        throw new Error("header name must be a non-empty string");
      const T = D.findKey(c, E);
      (!T || c[T] === void 0 || y === !0 || y === void 0 && c[T] !== !1) && (c[T || p] = or(g));
    }
    const h = (g, p) => D.forEach(g, (y, E) => d(y, E, p));
    if (D.isPlainObject(r) || r instanceof this.constructor)
      h(r, s);
    else if (D.isString(r) && (r = r.trim()) && !_E(r))
      h(xE(r), s);
    else if (D.isObject(r) && D.isIterable(r)) {
      let g = {}, p, y;
      for (const E of r) {
        if (!D.isArray(E))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = E[0]] = (p = g[y]) ? D.isArray(p) ? [...p, E[1]] : [p, E[1]] : E[1];
      }
      h(g, s);
    } else
      r != null && d(s, r, o);
    return this;
  }
  get(r, s) {
    if (r = bi(r), r) {
      const o = D.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!s)
          return c;
        if (s === !0)
          return CE(c);
        if (D.isFunction(s))
          return s.call(this, c, o);
        if (D.isRegExp(s))
          return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = bi(r), r) {
      const o = D.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!s || ec(this, this[o], o, s)));
    }
    return !1;
  }
  delete(r, s) {
    const o = this;
    let c = !1;
    function d(h) {
      if (h = bi(h), h) {
        const g = D.findKey(o, h);
        g && (!s || ec(o, o[g], g, s)) && (delete o[g], c = !0);
      }
    }
    return D.isArray(r) ? r.forEach(d) : d(r), c;
  }
  clear(r) {
    const s = Object.keys(this);
    let o = s.length, c = !1;
    for (; o--; ) {
      const d = s[o];
      (!r || ec(this, this[d], d, r, !0)) && (delete this[d], c = !0);
    }
    return c;
  }
  normalize(r) {
    const s = this, o = {};
    return D.forEach(this, (c, d) => {
      const h = D.findKey(o, d);
      if (h) {
        s[h] = or(c), delete s[d];
        return;
      }
      const g = r ? NE(d) : String(d).trim();
      g !== d && delete s[d], s[g] = or(c), o[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const s = /* @__PURE__ */ Object.create(null);
    return D.forEach(this, (o, c) => {
      o != null && o !== !1 && (s[c] = r && D.isArray(o) ? o.join(", ") : o);
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
    const o = new this(r);
    return s.forEach((c) => o.set(c)), o;
  }
  static accessor(r) {
    const o = (this[Z0] = this[Z0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function d(h) {
      const g = bi(h);
      o[g] || (OE(c, h), o[g] = !0);
    }
    return D.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
At.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
D.reduceDescriptors(At.prototype, ({ value: n }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => n,
    set(o) {
      this[s] = o;
    }
  };
});
D.freezeMethods(At);
function tc(n, r) {
  const s = this || Li, o = r || s, c = At.from(o.headers);
  let d = o.data;
  return D.forEach(n, function(g) {
    d = g.call(s, d, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), d;
}
function $m(n) {
  return !!(n && n.__CANCEL__);
}
function Rn(n, r, s) {
  re.call(this, n ?? "canceled", re.ERR_CANCELED, r, s), this.name = "CanceledError";
}
D.inherits(Rn, re, {
  __CANCEL__: !0
});
function Fm(n, r, s) {
  const o = s.config.validateStatus;
  !s.status || !o || o(s.status) ? n(s) : r(new re(
    "Request failed with status code " + s.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function wE(n) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
  return r && r[1] || "";
}
function DE(n, r) {
  n = n || 10;
  const s = new Array(n), o = new Array(n);
  let c = 0, d = 0, h;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), E = o[d];
    h || (h = y), s[c] = p, o[c] = y;
    let T = d, w = 0;
    for (; T !== c; )
      w += s[T++], T = T % n;
    if (c = (c + 1) % n, c === d && (d = (d + 1) % n), y - h < r)
      return;
    const q = E && y - E;
    return q ? Math.round(w * 1e3 / q) : void 0;
  };
}
function UE(n, r) {
  let s = 0, o = 1e3 / r, c, d;
  const h = (y, E = Date.now()) => {
    s = E, c = null, d && (clearTimeout(d), d = null), n(...y);
  };
  return [(...y) => {
    const E = Date.now(), T = E - s;
    T >= o ? h(y, E) : (c = y, d || (d = setTimeout(() => {
      d = null, h(c);
    }, o - T)));
  }, () => c && h(c)];
}
const mr = (n, r, s = 3) => {
  let o = 0;
  const c = DE(50, 250);
  return UE((d) => {
    const h = d.loaded, g = d.lengthComputable ? d.total : void 0, p = h - o, y = c(p), E = h <= g;
    o = h;
    const T = {
      loaded: h,
      total: g,
      progress: g ? h / g : void 0,
      bytes: p,
      rate: y || void 0,
      estimated: y && g && E ? (g - h) / y : void 0,
      event: d,
      lengthComputable: g != null,
      [r ? "download" : "upload"]: !0
    };
    n(T);
  }, s);
}, J0 = (n, r) => {
  const s = n != null;
  return [(o) => r[0]({
    lengthComputable: s,
    total: n,
    loaded: o
  }), r[1]];
}, $0 = (n) => (...r) => D.asap(() => n(...r)), ME = ht.hasStandardBrowserEnv ? /* @__PURE__ */ ((n, r) => (s) => (s = new URL(s, ht.origin), n.protocol === s.protocol && n.host === s.host && (r || n.port === s.port)))(
  new URL(ht.origin),
  ht.navigator && /(msie|trident)/i.test(ht.navigator.userAgent)
) : () => !0, zE = ht.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(n, r, s, o, c, d, h) {
      if (typeof document > "u") return;
      const g = [`${n}=${encodeURIComponent(r)}`];
      D.isNumber(s) && g.push(`expires=${new Date(s).toUTCString()}`), D.isString(o) && g.push(`path=${o}`), D.isString(c) && g.push(`domain=${c}`), d === !0 && g.push("secure"), D.isString(h) && g.push(`SameSite=${h}`), document.cookie = g.join("; ");
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
function LE(n) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n);
}
function jE(n, r) {
  return r ? n.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : n;
}
function Wm(n, r, s) {
  let o = !LE(r);
  return n && (o || s == !1) ? jE(n, r) : r;
}
const F0 = (n) => n instanceof At ? { ...n } : n;
function xa(n, r) {
  r = r || {};
  const s = {};
  function o(y, E, T, w) {
    return D.isPlainObject(y) && D.isPlainObject(E) ? D.merge.call({ caseless: w }, y, E) : D.isPlainObject(E) ? D.merge({}, E) : D.isArray(E) ? E.slice() : E;
  }
  function c(y, E, T, w) {
    if (D.isUndefined(E)) {
      if (!D.isUndefined(y))
        return o(void 0, y, T, w);
    } else return o(y, E, T, w);
  }
  function d(y, E) {
    if (!D.isUndefined(E))
      return o(void 0, E);
  }
  function h(y, E) {
    if (D.isUndefined(E)) {
      if (!D.isUndefined(y))
        return o(void 0, y);
    } else return o(void 0, E);
  }
  function g(y, E, T) {
    if (T in r)
      return o(y, E);
    if (T in n)
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
    headers: (y, E, T) => c(F0(y), F0(E), T, !0)
  };
  return D.forEach(Object.keys({ ...n, ...r }), function(E) {
    const T = p[E] || c, w = T(n[E], r[E], E);
    D.isUndefined(w) && T !== g || (s[E] = w);
  }), s;
}
const Im = (n) => {
  const r = xa({}, n);
  let { data: s, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: d, headers: h, auth: g } = r;
  if (r.headers = h = At.from(h), r.url = Qm(Wm(r.baseURL, r.url, r.allowAbsoluteUrls), n.params, n.paramsSerializer), g && h.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), D.isFormData(s)) {
    if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
      h.setContentType(void 0);
    else if (D.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([E, T]) => {
        y.includes(E.toLowerCase()) && h.set(E, T);
      });
    }
  }
  if (ht.hasStandardBrowserEnv && (o && D.isFunction(o) && (o = o(r)), o || o !== !1 && ME(r.url))) {
    const p = c && d && zE.read(d);
    p && h.set(c, p);
  }
  return r;
}, HE = typeof XMLHttpRequest < "u", BE = HE && function(n) {
  return new Promise(function(s, o) {
    const c = Im(n);
    let d = c.data;
    const h = At.from(c.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = c, E, T, w, q, C;
    function L() {
      q && q(), C && C(), c.cancelToken && c.cancelToken.unsubscribe(E), c.signal && c.signal.removeEventListener("abort", E);
    }
    let U = new XMLHttpRequest();
    U.open(c.method.toUpperCase(), c.url, !0), U.timeout = c.timeout;
    function Y() {
      if (!U)
        return;
      const $ = At.from(
        "getAllResponseHeaders" in U && U.getAllResponseHeaders()
      ), te = {
        data: !g || g === "text" || g === "json" ? U.responseText : U.response,
        status: U.status,
        statusText: U.statusText,
        headers: $,
        config: n,
        request: U
      };
      Fm(function(ie) {
        s(ie), L();
      }, function(ie) {
        o(ie), L();
      }, te), U = null;
    }
    "onloadend" in U ? U.onloadend = Y : U.onreadystatechange = function() {
      !U || U.readyState !== 4 || U.status === 0 && !(U.responseURL && U.responseURL.indexOf("file:") === 0) || setTimeout(Y);
    }, U.onabort = function() {
      U && (o(new re("Request aborted", re.ECONNABORTED, n, U)), U = null);
    }, U.onerror = function(W) {
      const te = W && W.message ? W.message : "Network Error", ge = new re(te, re.ERR_NETWORK, n, U);
      ge.event = W || null, o(ge), U = null;
    }, U.ontimeout = function() {
      let W = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const te = c.transitional || Zm;
      c.timeoutErrorMessage && (W = c.timeoutErrorMessage), o(new re(
        W,
        te.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        n,
        U
      )), U = null;
    }, d === void 0 && h.setContentType(null), "setRequestHeader" in U && D.forEach(h.toJSON(), function(W, te) {
      U.setRequestHeader(te, W);
    }), D.isUndefined(c.withCredentials) || (U.withCredentials = !!c.withCredentials), g && g !== "json" && (U.responseType = c.responseType), y && ([w, C] = mr(y, !0), U.addEventListener("progress", w)), p && U.upload && ([T, q] = mr(p), U.upload.addEventListener("progress", T), U.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (E = ($) => {
      U && (o(!$ || $.type ? new Rn(null, n, U) : $), U.abort(), U = null);
    }, c.cancelToken && c.cancelToken.subscribe(E), c.signal && (c.signal.aborted ? E() : c.signal.addEventListener("abort", E)));
    const Q = wE(c.url);
    if (Q && ht.protocols.indexOf(Q) === -1) {
      o(new re("Unsupported protocol " + Q + ":", re.ERR_BAD_REQUEST, n));
      return;
    }
    U.send(d || null);
  });
}, qE = (n, r) => {
  const { length: s } = n = n ? n.filter(Boolean) : [];
  if (r || s) {
    let o = new AbortController(), c;
    const d = function(y) {
      if (!c) {
        c = !0, g();
        const E = y instanceof Error ? y : this.reason;
        o.abort(E instanceof re ? E : new Rn(E instanceof Error ? E.message : E));
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
    const { signal: p } = o;
    return p.unsubscribe = () => D.asap(g), p;
  }
}, GE = function* (n, r) {
  let s = n.byteLength;
  if (s < r) {
    yield n;
    return;
  }
  let o = 0, c;
  for (; o < s; )
    c = o + r, yield n.slice(o, c), o = c;
}, YE = async function* (n, r) {
  for await (const s of XE(n))
    yield* GE(s, r);
}, XE = async function* (n) {
  if (n[Symbol.asyncIterator]) {
    yield* n;
    return;
  }
  const r = n.getReader();
  try {
    for (; ; ) {
      const { done: s, value: o } = await r.read();
      if (s)
        break;
      yield o;
    }
  } finally {
    await r.cancel();
  }
}, W0 = (n, r, s, o) => {
  const c = YE(n, r);
  let d = 0, h, g = (p) => {
    h || (h = !0, o && o(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: y, value: E } = await c.next();
        if (y) {
          g(), p.close();
          return;
        }
        let T = E.byteLength;
        if (s) {
          let w = d += T;
          s(w);
        }
        p.enqueue(new Uint8Array(E));
      } catch (y) {
        throw g(y), y;
      }
    },
    cancel(p) {
      return g(p), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, I0 = 64 * 1024, { isFunction: ir } = D, VE = (({ Request: n, Response: r }) => ({
  Request: n,
  Response: r
}))(D.global), {
  ReadableStream: P0,
  TextEncoder: em
} = D.global, tm = (n, ...r) => {
  try {
    return !!n(...r);
  } catch {
    return !1;
  }
}, KE = (n) => {
  n = D.merge.call({
    skipUndefined: !0
  }, VE, n);
  const { fetch: r, Request: s, Response: o } = n, c = r ? ir(r) : typeof fetch == "function", d = ir(s), h = ir(o);
  if (!c)
    return !1;
  const g = c && ir(P0), p = c && (typeof em == "function" ? /* @__PURE__ */ ((C) => (L) => C.encode(L))(new em()) : async (C) => new Uint8Array(await new s(C).arrayBuffer())), y = d && g && tm(() => {
    let C = !1;
    const L = new s(ht.origin, {
      body: new P0(),
      method: "POST",
      get duplex() {
        return C = !0, "half";
      }
    }).headers.has("Content-Type");
    return C && !L;
  }), E = h && g && tm(() => D.isReadableStream(new o("").body)), T = {
    stream: E && ((C) => C.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((C) => {
    !T[C] && (T[C] = (L, U) => {
      let Y = L && L[C];
      if (Y)
        return Y.call(L);
      throw new re(`Response type '${C}' is not supported`, re.ERR_NOT_SUPPORT, U);
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
  }, q = async (C, L) => {
    const U = D.toFiniteNumber(C.getContentLength());
    return U ?? w(L);
  };
  return async (C) => {
    let {
      url: L,
      method: U,
      data: Y,
      signal: Q,
      cancelToken: $,
      timeout: W,
      onDownloadProgress: te,
      onUploadProgress: ge,
      responseType: ie,
      headers: P,
      withCredentials: le = "same-origin",
      fetchOptions: se
    } = Im(C), Ue = r || fetch;
    ie = ie ? (ie + "").toLowerCase() : "text";
    let pe = qE([Q, $ && $.toAbortSignal()], W), Ge = null;
    const Ze = pe && pe.unsubscribe && (() => {
      pe.unsubscribe();
    });
    let Fe;
    try {
      if (ge && y && U !== "get" && U !== "head" && (Fe = await q(P, Y)) !== 0) {
        let Ce = new s(L, {
          method: "POST",
          body: Y,
          duplex: "half"
        }), b;
        if (D.isFormData(Y) && (b = Ce.headers.get("content-type")) && P.setContentType(b), Ce.body) {
          const [H, k] = J0(
            Fe,
            mr($0(ge))
          );
          Y = W0(Ce.body, I0, H, k);
        }
      }
      D.isString(le) || (le = le ? "include" : "omit");
      const X = d && "credentials" in s.prototype, G = {
        ...se,
        signal: pe,
        method: U.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: Y,
        duplex: "half",
        credentials: X ? le : void 0
      };
      Ge = d && new s(L, G);
      let V = await (d ? Ue(Ge, se) : Ue(L, G));
      const fe = E && (ie === "stream" || ie === "response");
      if (E && (te || fe && Ze)) {
        const Ce = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Ce[Z] = V[Z];
        });
        const b = D.toFiniteNumber(V.headers.get("content-length")), [H, k] = te && J0(
          b,
          mr($0(te), !0)
        ) || [];
        V = new o(
          W0(V.body, I0, H, () => {
            k && k(), Ze && Ze();
          }),
          Ce
        );
      }
      ie = ie || "text";
      let Ae = await T[D.findKey(T, ie) || "text"](V, C);
      return !fe && Ze && Ze(), await new Promise((Ce, b) => {
        Fm(Ce, b, {
          data: Ae,
          headers: At.from(V.headers),
          status: V.status,
          statusText: V.statusText,
          config: C,
          request: Ge
        });
      });
    } catch (X) {
      throw Ze && Ze(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, C, Ge),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, C, Ge);
    }
  };
}, kE = /* @__PURE__ */ new Map(), Pm = (n) => {
  let r = n && n.env || {};
  const { fetch: s, Request: o, Response: c } = r, d = [
    o,
    c,
    s
  ];
  let h = d.length, g = h, p, y, E = kE;
  for (; g--; )
    p = d[g], y = E.get(p), y === void 0 && E.set(p, y = g ? /* @__PURE__ */ new Map() : KE(r)), E = y;
  return y;
};
Pm();
const bc = {
  http: sE,
  xhr: BE,
  fetch: {
    get: Pm
  }
};
D.forEach(bc, (n, r) => {
  if (n) {
    try {
      Object.defineProperty(n, "name", { value: r });
    } catch {
    }
    Object.defineProperty(n, "adapterName", { value: r });
  }
});
const lm = (n) => `- ${n}`, QE = (n) => D.isFunction(n) || n === null || n === !1;
function ZE(n, r) {
  n = D.isArray(n) ? n : [n];
  const { length: s } = n;
  let o, c;
  const d = {};
  for (let h = 0; h < s; h++) {
    o = n[h];
    let g;
    if (c = o, !QE(o) && (c = bc[(g = String(o)).toLowerCase()], c === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (c && (D.isFunction(c) || (c = c.get(r))))
      break;
    d[g || "#" + h] = c;
  }
  if (!c) {
    const h = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = s ? h.length > 1 ? `since :
` + h.map(lm).join(`
`) : " " + lm(h[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const ey = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: ZE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: bc
};
function lc(n) {
  if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted)
    throw new Rn(null, n);
}
function am(n) {
  return lc(n), n.headers = At.from(n.headers), n.data = tc.call(
    n,
    n.transformRequest
  ), ["post", "put", "patch"].indexOf(n.method) !== -1 && n.headers.setContentType("application/x-www-form-urlencoded", !1), ey.getAdapter(n.adapter || Li.adapter, n)(n).then(function(o) {
    return lc(n), o.data = tc.call(
      n,
      n.transformResponse,
      o
    ), o.headers = At.from(o.headers), o;
  }, function(o) {
    return $m(o) || (lc(n), o && o.response && (o.response.data = tc.call(
      n,
      n.transformResponse,
      o.response
    ), o.response.headers = At.from(o.response.headers))), Promise.reject(o);
  });
}
const ty = "1.13.2", Tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((n, r) => {
  Tr[n] = function(o) {
    return typeof o === n || "a" + (r < 1 ? "n " : " ") + n;
  };
});
const nm = {};
Tr.transitional = function(r, s, o) {
  function c(d, h) {
    return "[Axios v" + ty + "] Transitional option '" + d + "'" + h + (o ? ". " + o : "");
  }
  return (d, h, g) => {
    if (r === !1)
      throw new re(
        c(h, " has been removed" + (s ? " in " + s : "")),
        re.ERR_DEPRECATED
      );
    return s && !nm[h] && (nm[h] = !0, console.warn(
      c(
        h,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, h, g) : !0;
  };
};
Tr.spelling = function(r) {
  return (s, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function JE(n, r, s) {
  if (typeof n != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(n);
  let c = o.length;
  for (; c-- > 0; ) {
    const d = o[c], h = r[d];
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
const cr = {
  assertOptions: JE,
  validators: Tr
}, il = cr.validators;
let Aa = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Q0(),
      response: new Q0()
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
    } catch (o) {
      if (o instanceof Error) {
        let c = {};
        Error.captureStackTrace ? Error.captureStackTrace(c) : c = new Error();
        const d = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        try {
          o.stack ? d && !String(o.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (o.stack += `
` + d) : o.stack = d;
        } catch {
        }
      }
      throw o;
    }
  }
  _request(r, s) {
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = xa(this.defaults, s);
    const { transitional: o, paramsSerializer: c, headers: d } = s;
    o !== void 0 && cr.assertOptions(o, {
      silentJSONParsing: il.transitional(il.boolean),
      forcedJSONParsing: il.transitional(il.boolean),
      clarifyTimeoutError: il.transitional(il.boolean)
    }, !1), c != null && (D.isFunction(c) ? s.paramsSerializer = {
      serialize: c
    } : cr.assertOptions(c, {
      encode: il.function,
      serialize: il.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), cr.assertOptions(s, {
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
    ), s.headers = At.concat(h, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(L) {
      typeof L.runWhen == "function" && L.runWhen(s) === !1 || (p = p && L.synchronous, g.unshift(L.fulfilled, L.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(L) {
      y.push(L.fulfilled, L.rejected);
    });
    let E, T = 0, w;
    if (!p) {
      const C = [am.bind(this), void 0];
      for (C.unshift(...g), C.push(...y), w = C.length, E = Promise.resolve(s); T < w; )
        E = E.then(C[T++], C[T++]);
      return E;
    }
    w = g.length;
    let q = s;
    for (; T < w; ) {
      const C = g[T++], L = g[T++];
      try {
        q = C(q);
      } catch (U) {
        L.call(this, U);
        break;
      }
    }
    try {
      E = am.call(this, q);
    } catch (C) {
      return Promise.reject(C);
    }
    for (T = 0, w = y.length; T < w; )
      E = E.then(y[T++], y[T++]);
    return E;
  }
  getUri(r) {
    r = xa(this.defaults, r);
    const s = Wm(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Qm(s, r.params, r.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function(r) {
  Aa.prototype[r] = function(s, o) {
    return this.request(xa(o || {}, {
      method: r,
      url: s,
      data: (o || {}).data
    }));
  };
});
D.forEach(["post", "put", "patch"], function(r) {
  function s(o) {
    return function(d, h, g) {
      return this.request(xa(g || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: h
      }));
    };
  }
  Aa.prototype[r] = s(), Aa.prototype[r + "Form"] = s(!0);
});
let $E = class ly {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let s;
    this.promise = new Promise(function(d) {
      s = d;
    });
    const o = this;
    this.promise.then((c) => {
      if (!o._listeners) return;
      let d = o._listeners.length;
      for (; d-- > 0; )
        o._listeners[d](c);
      o._listeners = null;
    }), this.promise.then = (c) => {
      let d;
      const h = new Promise((g) => {
        o.subscribe(g), d = g;
      }).then(c);
      return h.cancel = function() {
        o.unsubscribe(d);
      }, h;
    }, r(function(d, h, g) {
      o.reason || (o.reason = new Rn(d, h, g), s(o.reason));
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
    const r = new AbortController(), s = (o) => {
      r.abort(o);
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
      token: new ly(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function FE(n) {
  return function(s) {
    return n.apply(null, s);
  };
}
function WE(n) {
  return D.isObject(n) && n.isAxiosError === !0;
}
const oc = {
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
Object.entries(oc).forEach(([n, r]) => {
  oc[r] = n;
});
function ay(n) {
  const r = new Aa(n), s = zm(Aa.prototype.request, r);
  return D.extend(s, Aa.prototype, r, { allOwnKeys: !0 }), D.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(c) {
    return ay(xa(n, c));
  }, s;
}
const ze = ay(Li);
ze.Axios = Aa;
ze.CanceledError = Rn;
ze.CancelToken = $E;
ze.isCancel = $m;
ze.VERSION = ty;
ze.toFormData = Rr;
ze.AxiosError = re;
ze.Cancel = ze.CanceledError;
ze.all = function(r) {
  return Promise.all(r);
};
ze.spread = FE;
ze.isAxiosError = WE;
ze.mergeConfig = xa;
ze.AxiosHeaders = At;
ze.formToJSON = (n) => Jm(D.isHTMLForm(n) ? new FormData(n) : n);
ze.getAdapter = ey.getAdapter;
ze.HttpStatusCode = oc;
ze.default = ze;
const {
  Axios: SS,
  AxiosError: bS,
  CanceledError: RS,
  isCancel: TS,
  CancelToken: AS,
  VERSION: xS,
  all: CS,
  Cancel: _S,
  isAxiosError: NS,
  spread: OS,
  toFormData: wS,
  AxiosHeaders: DS,
  HttpStatusCode: US,
  formToJSON: MS,
  getAdapter: zS,
  mergeConfig: LS
} = ze, ny = "WEBCOMPONENT";
function IE(n) {
  n ? localStorage.setItem(ye.AUTHORITY_OVERRIDE, n) : localStorage.removeItem(ye.AUTHORITY_OVERRIDE);
}
function PE() {
  return localStorage.getItem(ye.AUTHORITY_OVERRIDE);
}
function im() {
  localStorage.removeItem(ye.AUTHORITY_OVERRIDE);
}
function eS() {
  const n = PE();
  if (n && Object.values(kt).includes(n))
    return n;
  const r = window.location.hostname;
  return r === xl.HOSTNAME || r === xl.IP || xl.IP_PATTERN.test(r) || r.startsWith(`${ke.DEV}.`) || r.startsWith(`${ke.DEV}-`) ? kt.DEV : r.startsWith(`${ke.TEST}.`) || r.startsWith(`${ke.TEST}-`) ? kt.TEST : r.startsWith(`${ke.STAGE}.`) || r.startsWith(`${ke.STAGE}-`) ? kt.STAGE : kt.PROD;
}
function tS(n) {
  if (ny === pc.TEST)
    return "";
  const r = eS();
  return n.startsWith("/global") ? pv[r] : gv[r];
}
const Na = (n) => {
  const r = n.startsWith("/") ? n : `/${n}`;
  return ny === pc.TEST ? r : `${tS(r)}${r}`;
}, lS = async (n) => {
  try {
    return (await ze.get(Na(_a.GLOBAL_SUBSIDIARIES)))?.data?.find(
      (o) => o?.siteURL?.includes(n)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function Tn() {
  const n = localStorage.getItem(ye.BRAND_DATA);
  if (!n)
    return {};
  const r = JSON.parse(n), s = await lS(r?.domain);
  return {
    [Fo.X_BRAND_ID]: s?.subsidiaryName,
    [Fo.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [Fo.X_BRAND_DOMAIN]: r?.domain
  };
}
const aS = async (n, r) => {
  const s = Na(_a.AUTH), o = { username: n, password: r };
  try {
    const c = await ze.post(s, o, {
      headers: await Tn()
    }), d = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: d || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === vr.UNAUTHORIZED ? new Error(it.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(it.AUTH_FAILED);
  }
}, nS = async (n) => {
  const r = Na(_a.REGISTER);
  try {
    return (await ze.post(r, n, {
      headers: await Tn()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === vr.INTERNAL_SERVER_ERROR ? new Error(it.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(it.REGISTRATION_FAILED);
  }
}, Rc = async (n) => {
  const r = Na(_a.CHECK_EMAIL);
  try {
    return (await ze.post(
      r,
      { email: n },
      {
        headers: await Tn()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, um = async (n) => {
  const r = Na(_a.FORGOT_PASSWORD), s = { email: n };
  try {
    return (await ze.post(r, s, {
      headers: await Tn()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === vr.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(it.RESET_LINK_FAILED);
  }
}, iS = async (n) => {
  const r = Na(_a.REFRESH_TOKEN), s = { refresh_token: n };
  try {
    const o = await ze.post(r, s, {
      headers: await Tn()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, uS = async (n) => {
  const r = Na(_a.LOGOUT), s = { refresh_token: n };
  try {
    return (await ze.post(r, s, {
      headers: await Tn()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === vr.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, rS = () => {
  try {
    const n = Rt(He.REFRESH_TOKEN, !1);
    if (!n)
      return !0;
    const r = Di(n), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch (n) {
    return console.error(`${Qe.TOKEN} isRefreshTokenExpiredFromCookie Error:`, n), !0;
  }
}, yr = () => Rt(He.REFRESH_TOKEN, !1) || localStorage.getItem(ye.REFRESH_TOKEN), _i = (n) => {
  try {
    const r = Di(n), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch {
    return !0;
  }
}, cc = (n) => !_i(n);
let fr = null;
const gn = () => {
  fr && (clearInterval(fr), fr = null);
}, Tc = async (n) => {
  try {
    const r = n || yr();
    if (!r)
      return !1;
    const s = await iS(r);
    if (!s?.tokens?.access_token)
      return !1;
    const o = s.tokens, c = dr(o.access_token);
    if (!c)
      return !1;
    const d = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    Ra(He.ACCESS_TOKEN, o.access_token, d, !0);
    const h = s.x_credential || c.decoded.x_credentials;
    if (h && Ra(He.X_CREDENTIAL, h, d, !1), localStorage.setItem(ye.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      ye.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(ye.REFRESH_TOKEN, o.refresh_token);
      const g = 720 * 60 * 60;
      Ra(He.REFRESH_TOKEN, o.refresh_token, g, !0), localStorage.getItem(ye.REFRESH_TOKEN_TIME) && localStorage.setItem(ye.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Qe.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, sS = async () => {
  const n = yr();
  if (!(Rt(He.ACCESS_TOKEN, !1) || localStorage.getItem(ye.ACCESS_TOKEN)) || !n || !cc(n))
    return gn(), !0;
  gn();
  const s = 180 * 1e3;
  return fr = setInterval(async () => {
    const o = yr();
    if (!(Rt(He.ACCESS_TOKEN, !1) || localStorage.getItem(ye.ACCESS_TOKEN))) {
      gn();
      return;
    }
    if (!o || !cc(o)) {
      gn();
      return;
    }
    const d = Rt(He.X_CREDENTIAL, !1) || Rt(He.X_CREDENTIAL_OLD, !1), h = Rt(He.ACCESS_TOKEN, !1) || localStorage.getItem(ye.ACCESS_TOKEN);
    (!d || _i(d) || !h || _i(h)) && await Tc(o);
  }, s), () => gn();
}, rm = (n) => {
  try {
    if (!localStorage.getItem(ye.REFRESH_TOKEN_TIME))
      return console.log(
        `${Qe.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Qe.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = Rt(He.X_CREDENTIAL, !1) || Rt(He.X_CREDENTIAL_OLD, !1), o = Rt(He.ACCESS_TOKEN, !1);
    let c = null, d = !1;
    if (o && (c = o), s && (d = !0), c || (c = localStorage.getItem(ye.ACCESS_TOKEN)), !c || !d)
      return !1;
    const h = localStorage.getItem(ye.ACCESS_TOKEN_EXPIRES);
    if (h && Date.now() >= parseInt(h))
      return !1;
    try {
      const g = Di(c), p = Math.floor(Date.now() / 1e3);
      return !(!g.exp || p >= g.exp);
    } catch (g) {
      return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, g), !1;
    }
  } catch (r) {
    return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, oS = async (n) => {
  if (rm(n))
    return !0;
  try {
    if (!localStorage.getItem(ye.REFRESH_TOKEN_TIME))
      return !1;
    const o = yr();
    if (!o || !cc(o))
      return !1;
    const c = Rt(He.X_CREDENTIAL, !1) || Rt(He.X_CREDENTIAL_OLD, !1), d = Rt(He.ACCESS_TOKEN, !1) || localStorage.getItem(ye.ACCESS_TOKEN), h = !c || _i(c), g = !d || _i(d);
    return !h && !g || !await Tc(o) ? !1 : rm(n);
  } catch (s) {
    return console.error(`${Qe.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`, s), !1;
  }
}, cS = () => {
  try {
    const n = localStorage.getItem(ye.REFRESH_TOKEN_TIME);
    return n ? Date.now() - parseInt(n) < yv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (n) {
    return console.error(`${Qe.TOKEN} isRefreshTokenValid Error:`, n), !1;
  }
}, fS = () => {
  nr(He.ACCESS_TOKEN), nr(He.X_CREDENTIAL), nr(He.X_CREDENTIAL_OLD), nr(He.REFRESH_TOKEN), [
    ye.REFRESH_TOKEN,
    ye.REFRESH_TOKEN_TIME,
    ye.ACCESS_TOKEN,
    ye.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Qe.AUTH} All authentication tokens and state cleared`);
}, iy = async (n, r, s = !1) => {
  const o = await aS(n, r), { tokens: c, x_credential: d } = o;
  if (c.access_token) {
    const h = Di(c.access_token), g = (h.exp || 0) - Math.floor(Date.now() / 1e3);
    Ra(He.ACCESS_TOKEN, c.access_token, g, !0);
    const p = d || h.x_credentials;
    p ? (Ra(He.X_CREDENTIAL, p, g, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), p && Ra(He.X_CREDENTIAL, p, g, !1), localStorage.setItem(ye.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      ye.ACCESS_TOKEN_EXPIRES,
      (Date.now() + g * 1e3).toString()
    ), localStorage.setItem(ye.REFRESH_TOKEN, c.refresh_token);
    const y = 720 * 60 * 60;
    Ra(He.REFRESH_TOKEN, c.refresh_token, y, !0), s && c.refresh_token ? (localStorage.setItem(ye.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Qe.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(ye.REFRESH_TOKEN_TIME), console.log(
      `${Qe.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, dr = (n) => {
  try {
    const r = Di(n);
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
      `${Qe.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, Ar = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", dS = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  onSignIn: o,
  title: c = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, E] = A.useState(""), [T, w] = A.useState(""), [q, C] = A.useState(""), [L, U] = A.useState(!1), [Y, Q] = A.useState(""), [$, W] = A.useState(""), [te, ge] = A.useState(!1), [ie, P] = A.useState(!1), [le, se] = A.useState(!1), [Ue, pe] = A.useState(!1), [Ge, Ze] = A.useState(!1), [Fe, X] = A.useState(!1), [G, V] = A.useState(""), [fe, Ae] = A.useState(!1), [Ce, b] = A.useState(""), [H, k] = A.useState(me.INFO), Z = A.useRef(null), ae = A.useRef(null), K = {
    length: q.length >= tr.MIN_LENGTH && q.length <= tr.MAX_LENGTH,
    hasNumber: yn.NUMBER.test(q),
    hasUppercase: yn.UPPERCASE.test(q),
    hasLowercase: yn.LOWERCASE.test(q),
    hasSpecialChar: G0.test(q),
    onlyAllowedChars: Y0.test(q) || q === "",
    differentFromUsername: g ? q !== g && q !== g.split("@")[0] : !0
  }, Be = ((Se) => {
    if (!Se) return { strength: "", color: "", width: lr.EMPTY };
    if (K.length && K.hasNumber && K.hasUppercase && K.hasLowercase && K.hasSpecialChar && K.onlyAllowedChars && K.differentFromUsername)
      return {
        strength: Io.STRONG,
        color: Po.STRONG,
        width: lr.STRONG
      };
    let lt = 0;
    return K.length && lt++, K.hasNumber && lt++, K.hasUppercase && lt++, K.hasLowercase && lt++, K.hasSpecialChar && lt++, K.onlyAllowedChars && lt++, K.differentFromUsername && lt++, lt <= 2 ? {
      strength: Io.WEAK,
      color: Po.WEAK,
      width: lr.WEAK
    } : {
      strength: Io.GOOD,
      color: Po.GOOD,
      width: lr.GOOD
    };
  })(q), Ye = (Se) => Se ? Se.length < tr.MIN_LENGTH || Se.length > tr.MAX_LENGTH ? { isValid: !1, error: it.PASSWORD_LENGTH } : yn.UPPERCASE.test(Se) ? yn.LOWERCASE.test(Se) ? yn.NUMBER.test(Se) ? G0.test(Se) ? Y0.test(Se) ? { isValid: !0, error: "" } : {
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
      se(!1), pe(!1), X(!1), V("");
      return;
    }
    if (!Ti.test(g)) {
      se(!1), pe(!1);
      return;
    }
    return ae.current = setTimeout(async () => {
      Ze(!0);
      try {
        (await Rc(g)).exists ? (pe(!0), se(!0)) : (pe(!1), se(!1));
      } catch (Se) {
        console.error(`${Qe.CREATE_ACCOUNT} Email check failed:`, Se);
        const ft = Se instanceof Error ? Se.message : "Unable to verify email. You can still proceed with registration.";
        X(!0), V(ft), se(!0), pe(!1);
      } finally {
        Ze(!1);
      }
    }, Ci.EMAIL_CHECK_DEBOUNCE), () => {
      ae.current && clearTimeout(ae.current);
    };
  }, [g]);
  const ta = g && Ti.test(g);
  A.useEffect(() => {
    const Se = (ft) => {
      ft.key === "Escape" && s();
    };
    return document.addEventListener("keydown", Se), () => document.removeEventListener("keydown", Se);
  }, [s]);
  const Oa = (Se) => {
    Se.target === Z.current && s();
  }, An = async (Se) => {
    if (Se.preventDefault(), P(!0), !g || !y || !T) {
      r("Please fill in all required fields");
      return;
    }
    const ft = Ye(q);
    if (!ft.isValid) {
      W(ft.error), r(ft.error), U(!1);
      return;
    }
    if (!Ti.test(g)) {
      Q(it.EMAIL_INVALID), r(it.EMAIL_INVALID);
      return;
    }
    U(!0), Q(""), b("");
    try {
      const lt = g.split("@")[0], Nl = await nS({
        username: lt,
        email: g,
        firstName: y,
        lastName: T,
        password: q
      });
      console.log(
        `${Qe.CREATE_ACCOUNT} Registration successful:`,
        Nl.message
      );
      try {
        const la = await iy(g, q, fe);
        n(la);
      } catch (la) {
        console.error(
          `${Qe.CREATE_ACCOUNT} Auto-login failed after registration:`,
          la
        );
        const ji = la instanceof Error ? la.message : "Auto-login failed";
        r(ji);
      }
    } catch (lt) {
      console.error(`${Qe.CREATE_ACCOUNT} Registration failed:`, lt);
      const Nl = lt instanceof Error ? lt.message : it.REGISTRATION_FAILED;
      b(Nl), k(me.ERROR), r(Nl);
    } finally {
      U(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    Ce && /* @__PURE__ */ v.jsx(
      ic,
      {
        type: H,
        message: Ce,
        duration: Ci.TOAST_DEFAULT_DURATION,
        onClose: () => b("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Z,
        onMouseDown: Oa,
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
                Qt,
                {
                  onClick: s,
                  variant: Wt.LINK,
                  className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: It.BUTTON,
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
                    children: c
                  }
                ),
                /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
              ] }),
              /* @__PURE__ */ v.jsxs("form", { onSubmit: An, className: "space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  ba,
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    value: g,
                    onChange: (Se) => {
                      p(Se.target.value), Q("");
                    },
                    placeholder: "Enter email address",
                    disabled: L,
                    className: "w-full!",
                    autoComplete: "email",
                    error: ie && !g ? "Required" : Y || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      Ge && /* @__PURE__ */ v.jsx(Um, {}),
                      !Ge && !Ue && !Fe && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          src: Ar,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                le && Ue && !Fe && /* @__PURE__ */ v.jsx(
                  pn,
                  {
                    type: me.INFO,
                    message: "We found an existing account.",
                    actionText: "Want to sign in instead?",
                    onActionClick: () => {
                      se(!1), o(g);
                    },
                    onClose: () => se(!1),
                    className: "mb-4!"
                  }
                ),
                le && Fe && /* @__PURE__ */ v.jsx(
                  pn,
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
                    ba,
                    {
                      label: "First Name",
                      id: "firstName",
                      type: "text",
                      value: y,
                      onChange: (Se) => E(Se.target.value),
                      placeholder: "First Name",
                      disabled: L,
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
                      onChange: (Se) => w(Se.target.value),
                      placeholder: "Last Name",
                      disabled: L,
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
                    onChange: (Se) => {
                      C(Se.target.value), W("");
                    },
                    placeholder: "Enter Password...",
                    disabled: L,
                    className: "w-full!",
                    autoComplete: "new-password",
                    error: $,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => ge(!te),
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
                          width: Be.width,
                          backgroundColor: Be.color
                        }
                      }
                    ) }),
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        className: "text-sm! font-medium! whitespace-nowrap!",
                        style: { color: Be.color },
                        children: Be.strength
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
                      onChange: (Se) => Ae(Se.target.checked),
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
                  Qt,
                  {
                    type: It.SUBMIT,
                    disabled: L || Ue || !ta,
                    className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: L ? /* @__PURE__ */ v.jsxs("span", { className: "flex! items-center! justify-center!", children: [
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
                  Qt,
                  {
                    type: It.BUTTON,
                    variant: Wt.OUTLINE,
                    onClick: () => o(g),
                    disabled: L,
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
    Ce && /* @__PURE__ */ v.jsx(ic, { message: Ce, type: H, onClose: () => b("") })
  ] });
}, hS = ({
  email: n,
  loading: r,
  onResendLink: s,
  onBack: o,
  onClose: c
}) => {
  const d = A.useRef(null);
  A.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && c();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [c]);
  const h = (g) => {
    g.target === d.current && c();
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
          Qt,
          {
            onClick: c,
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
        /* @__PURE__ */ v.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ v.jsx("img", { src: Ar, alt: "Success", "aria-hidden": "true", className: "w-16! h-16!" }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-success-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: n }),
          /* @__PURE__ */ v.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          Qt,
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
          Qt,
          {
            type: "button",
            variant: "outline",
            onClick: o,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3!",
            children: /* @__PURE__ */ v.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, mS = ({
  email: n,
  onBack: r,
  handleClose: s
}) => {
  const [o, c] = A.useState(n || ""), [d, h] = A.useState(!1), [g, p] = A.useState(!1), [y, E] = A.useState(""), [T, w] = A.useState(!1), [q, C] = A.useState(!1), [L, U] = A.useState(!1), [Y, Q] = A.useState(!1), [$, W] = A.useState(""), te = A.useRef(null);
  A.useEffect(() => {
    const le = (se) => {
      se.key === "Escape" && s();
    };
    return document.addEventListener("keydown", le), () => document.removeEventListener("keydown", le);
  }, [s]), A.useEffect(() => {
    const le = Ti.test(o);
    if (U(le), !le || !o) {
      C(!1), Q(!1), W("");
      return;
    }
    const se = setTimeout(async () => {
      w(!0);
      try {
        const Ue = await Rc(o);
        console.log("[ResetPassword] Email check response:", Ue), C(Ue.exists), console.log("[ResetPassword] Email exists:", Ue.exists);
      } catch (Ue) {
        console.error("[ResetPassword] Error checking email:", Ue);
        const pe = Ue instanceof Error ? Ue.message : "Unable to verify email. Please try again.";
        Q(!0), W(pe), C(!1);
      } finally {
        w(!1);
      }
    }, Ci.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(se);
  }, [o]);
  const ge = (le) => {
    le.target === te.current && s();
  }, ie = async (le) => {
    if (le.preventDefault(), !o) {
      E(it.EMAIL_REQUIRED);
      return;
    }
    h(!0), E("");
    try {
      await um(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
    } catch (se) {
      console.error("[ResetPassword] Failed to send reset link:", se);
      const Ue = se instanceof Error ? se.message : it.RESET_LINK_FAILED;
      E(Ue);
    } finally {
      h(!1);
    }
  }, P = async () => {
    h(!0), E("");
    try {
      await um(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (le) {
      console.error("[ResetPassword] Failed to resend reset link:", le), p(!1);
      const se = le instanceof Error ? le.message : it.RESET_LINK_FAILED;
      E(se);
    } finally {
      h(!1);
    }
  };
  return g ? /* @__PURE__ */ v.jsx(
    hS,
    {
      email: o,
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
      onMouseDown: ge,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Qt,
          {
            onClick: s,
            variant: Wt.LINK,
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: It.BUTTON,
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
              value: o,
              onChange: (le) => {
                c(le.target.value), E("");
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
                !T && q && L && !Y && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    src: Ar,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          Y && /* @__PURE__ */ v.jsx(
            pn,
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
            pn,
            {
              type: me.ERROR,
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => E(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Qt,
            {
              type: It.SUBMIT,
              disabled: d || !o || !L || !q,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", {
                  loading: d,
                  email: o,
                  isEmailValid: L,
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
            Qt,
            {
              type: It.BUTTON,
              variant: Wt.OUTLINE,
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
}, yS = ({
  onSuccess: n,
  onError: r,
  handleClose: s,
  authority: o,
  title: c = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: h = ""
}) => {
  const [g, p] = A.useState(h), [y, E] = A.useState(""), [T, w] = A.useState(!1), [q, C] = A.useState(!1), [L, U] = A.useState(""), [Y, Q] = A.useState(!1), [$, W] = A.useState(!1), [te, ge] = A.useState(!1), [ie, P] = A.useState(!1), [le, se] = A.useState(!1), [Ue, pe] = A.useState(!1), [Ge, Ze] = A.useState(!1), [Fe, X] = A.useState(""), [G, V] = A.useState(""), [fe, Ae] = A.useState(me.INFO), Ce = A.useRef(null), b = A.useRef(null);
  A.useEffect(() => {
    if (b.current && clearTimeout(b.current), !g) {
      P(!1), pe(!1), Ze(!1), X("");
      return;
    }
    if (!g.includes("@")) {
      P(!0), pe(!1);
      return;
    }
    if (!Ti.test(g)) {
      P(!1), pe(!1);
      return;
    }
    return b.current = setTimeout(async () => {
      se(!0);
      try {
        (await Rc(g)).exists ? (P(!0), pe(!1)) : (P(!1), pe(!0));
      } catch (K) {
        console.error("[EmbeddedLogin] Email check failed:", K);
        const oe = K instanceof Error ? K.message : "Unable to verify email. You can still proceed with login.";
        Ze(!0), X(oe), pe(!0), P(!1);
      } finally {
        se(!1);
      }
    }, 500), () => {
      b.current && clearTimeout(b.current);
    };
  }, [g]);
  const k = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const K = (oe) => {
      oe.key === "Escape" && s();
    };
    return document.addEventListener("keydown", K), () => document.removeEventListener("keydown", K);
  }, [s]);
  const Z = (K) => {
    K.target === Ce.current && s();
  }, ae = async (K) => {
    if (K.preventDefault(), !g || !y) {
      U("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    w(!0), U("");
    try {
      const oe = await iy(g, y, Y);
      n(oe);
    } catch (oe) {
      console.error("[EmbeddedLogin] Login failed:", oe);
      const Be = oe instanceof Error ? oe.message : "Authentication failed";
      U(Be), V(Be), Ae(me.ERROR), r(Be);
    } finally {
      w(!1);
    }
  };
  return te ? /* @__PURE__ */ v.jsx(
    mS,
    {
      email: g,
      onBack: () => ge(!1),
      handleClose: s
    }
  ) : $ ? /* @__PURE__ */ v.jsx(
    dS,
    {
      onSuccess: (K) => {
        W(!1), n(K);
      },
      onError: r,
      handleClose: s,
      onSignIn: (K) => {
        W(!1), K && p(K);
      },
      authority: o,
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
            Qt,
            {
              onClick: s,
              variant: Wt.LINK,
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
              type: It.BUTTON,
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
            /* @__PURE__ */ v.jsx("h2", { id: "login-dialog-title", className: "text-2xl! font-bold! text-gray-800! mb-0!", children: c }),
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
                  le && /* @__PURE__ */ v.jsx(Um, {}),
                  !le && ie && k && !Ge && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      src: Ar,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Ue && !ie && k && !Ge && /* @__PURE__ */ v.jsx(
              pn,
              {
                type: me.INFO,
                message: vv.EMAIL_NOT_FOUND,
                actionText: "Let's create one to continue?",
                onActionClick: () => {
                  pe(!1), W(!0);
                },
                onClose: () => pe(!1),
                className: "mb-4!"
              }
            ),
            Ue && Ge && /* @__PURE__ */ v.jsx(
              pn,
              {
                type: me.ERROR,
                message: Fe,
                onClose: () => {
                  pe(!1), Ze(!1), X("");
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
                  E(K.target.value), U("");
                },
                placeholder: "Enter Password...",
                disabled: T,
                className: "w-full!",
                autoComplete: "current-password",
                error: L,
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
                    K.preventDefault(), ge(!0);
                  },
                  children: "Forgot Password?"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              Qt,
              {
                type: It.SUBMIT,
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
              Qt,
              {
                type: It.BUTTON,
                variant: Wt.OUTLINE,
                onClick: () => W(!0),
                disabled: T,
                className: "w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { children: "Create an Account" })
              }
            )
          ] })
        ] }),
        G && /* @__PURE__ */ v.jsx(ic, { message: G, type: fe, onClose: () => V("") })
      ]
    }
  );
}, gS = (n) => {
  const { authority: r, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = n, [d, h] = A.useState(!1);
  A.useEffect(() => (r ? (IE(r), console.log(`${Qe.AUTH} Authority override set to: ${r}`)) : (im(), console.log(`${Qe.AUTH} Using automatic authority detection`)), () => {
    im();
  }), [r]), A.useEffect(() => {
    let E;
    return (async () => {
      const w = await sS();
      typeof w == "function" && (E = w);
    })(), () => {
      E && E();
    };
  }, [d]), A.useEffect(() => {
    (async () => {
      try {
        const T = !rS();
        if (c && c(T), await oS()) {
          h(!0);
          const C = n.redirectUrl || ar();
          if (n.autoRedirection)
            window.location.href = C;
          else if (o && n.redirectUrl) {
            const L = n.redirectUrl || ar(), U = localStorage.getItem(ye.ACCESS_TOKEN);
            if (U) {
              const Y = dr(U);
              Y && o(L, Y);
            }
          }
          return;
        }
        if (cS()) {
          if (await Tc()) {
            const L = localStorage.getItem(ye.ACCESS_TOKEN);
            if (!L)
              return;
            const U = dr(L);
            if (!U)
              return;
            console.log(`${Qe.AUTH} Auto-login successful`), h(!0), c && c(!0);
            const Y = n.redirectUrl || ar();
            o && (console.log(
              `${Qe.AUTH} Triggering onRedirect callback with user session:`,
              U
            ), o(Y, U)), n.autoRedirection && (window.location.href = Y);
          }
        } else
          localStorage.removeItem(ye.REFRESH_TOKEN), localStorage.removeItem(ye.REFRESH_TOKEN_TIME);
      } catch (T) {
        console.error(`${Qe.AUTH} Auto-login failed:`, T), localStorage.removeItem(ye.REFRESH_TOKEN), localStorage.removeItem(ye.REFRESH_TOKEN_TIME);
      }
    })();
  }, [n.redirectUrl, c]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const g = () => {
    n.handleClose && n.handleClose(), h(!0);
    const E = n.redirectUrl || ar();
    if (o) {
      const T = localStorage.getItem(ye.ACCESS_TOKEN);
      if (T) {
        const w = dr(T);
        w && o(E, w);
      }
    }
    n.autoRedirection && setTimeout(() => {
      window.location.href = E;
    }, 100);
  }, p = (E) => {
    console.log(`${Qe.AUTH} Embedded login error:`, E);
  }, y = () => {
    n.handleClose && n.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(Np, { children: /* @__PURE__ */ v.jsx(
    Cm,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(A.Fragment, { children: n.showLogin && !d && /* @__PURE__ */ v.jsx(
        yS,
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
class pS {
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
      const r = await this.getBrands(), s = window.location.hostname, o = r.find(
        (c) => s.includes(c.domain) || c.domain.includes(s)
      );
      return o ? (localStorage.setItem("subsidiary", o.token), o.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${s}`), null);
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
        console.warn(`[ThemeWidget] Brand not found: ${r}. Using default theme.`);
        return;
      }
      localStorage.setItem("subsidiary", o.token), localStorage.setItem(
        "brand_data",
        JSON.stringify({
          id: o.folder,
          // Use folder name (e.g., "elite") instead of token (e.g., "dev-elite")
          domain: o.domain,
          name: o.name
        })
      );
      const c = `${this.cdnBaseUrl}/${o.folder}/theme.json`, d = await fetch(c);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const h = await d.json(), g = document.documentElement;
      h.styles.forEach((p) => {
        let y = p.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), g.style.setProperty(`--${p.name}`, y);
      }), this.currentBrand = o, console.log(`[ThemeWidget] Theme loaded for brand: ${o.name}`);
    } catch (s) {
      throw console.error("[ThemeWidget] Error loading theme:", s), s;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const s = r.styles.map((c) => {
      const d = this.formatStyleValue(c.value);
      return `  --${c.name}: ${d};`;
    }).join(`
`), o = `@theme {
${s}
}

:host {
${s}
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
async function sm(n) {
  const r = new pS(n.cdnBaseUrl, n.shadowRoot), s = n.brandFolder || n.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (n.autoDetect) {
    const o = await r.detectBrandFromDomain();
    o && await r.loadTheme(o);
  }
  return r;
}
const om = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class n extends HTMLElement {
    root = null;
    isLogoutInProgress = !1;
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
      if (om) {
        const d = document.createElement("style");
        d.textContent = om, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const o = this.getAttribute("subsidiary");
      o && o.trim() !== "" ? this.loadTheme(o, s) : this.loadThemeFromDomain(s);
      const c = document.createElement("div");
      s.appendChild(c), this.root = mv.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
    }
    applyCustomPrimaryColor(s) {
      const o = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (o && o.trim() !== "") {
        const c = document.createElement("style");
        let d = o.trim();
        /^[0-9A-Fa-f]{6}$/.test(d) && (d = `#${d}`), c.textContent = `
          :host {
            --color-primary: ${d};
            --color-primary-light: ${d};
            --button-primary-bg: ${d};
            --button-primary-bg-hover: ${d};
            --color-border-focus: ${d};
          }
        `, s.appendChild(c), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(s, o) {
      try {
        await sm({
          brandFolder: s,
          shadowRoot: o
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await sm({
          shadowRoot: s,
          autoDetect: !0
        });
      } catch (o) {
        console.error("[Widget] Failed to auto-detect theme:", o), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(s, o, c) {
      if (o !== c) {
        if (s === "custom-primary-color" || s === "customPrimaryColor") {
          const d = this.shadowRoot;
          d && this.applyCustomPrimaryColor(d);
        }
        this.render();
      }
    }
    disconnectedCallback() {
      this.removeEventListener("logout", this.handleExternalLogoutEvent), this.root && (this.root.unmount(), this.root = null);
    }
    handleExternalLogoutEvent = async (s) => {
      const o = s;
      s.target === this && (o.detail?.initiatedByWidget || await this.executeLogout("event"));
    };
    async executeLogout(s) {
      if (!this.isLogoutInProgress) {
        this.isLogoutInProgress = !0;
        try {
          const o = Rt(He.REFRESH_TOKEN, !0) || localStorage.getItem(ye.REFRESH_TOKEN);
          o ? (await uS(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (o) {
          console.error("[Widget] Logout API call failed:", o);
        } finally {
          fS(), localStorage.clear(), sessionStorage.clear(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
          const o = new CustomEvent("logout", {
            detail: { initiatedByWidget: !0, trigger: s },
            bubbles: !0,
            composed: !0
          });
          this.dispatchEvent(o), this.isLogoutInProgress = !1;
        }
      }
    }
    handleRedirect = (s, o) => {
      this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(s, o));
      const c = new CustomEvent("redirect", {
        detail: {
          url: s,
          userSession: o,
          tokens: { access_token: o?.access_token },
          userInfo: o?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c), console.log("[Widget] Redirect event dispatched");
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
      const o = new CustomEvent("is-token-valid", {
        detail: s,
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o);
    };
    getProps() {
      const o = this.getAttribute("authority") || Rv(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: o,
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
      console.log("[Widget] logout() called"), this.executeLogout("method");
    }
    render() {
      if (!this.root) return;
      const s = this.getProps();
      this.root.render(
        /* @__PURE__ */ v.jsx(Ip, { children: /* @__PURE__ */ v.jsx(A.StrictMode, { children: /* @__PURE__ */ v.jsx(gS, { ...s }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", n);
}
