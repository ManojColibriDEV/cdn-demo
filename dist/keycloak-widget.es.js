
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media not all and (min-width:500px){.max-\\[500px\\]\\:flex-col\\!{flex-direction:column!important}.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:self-start\\!{align-self:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function Op(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Yo = { exports: {} }, pi = {};
var Tm;
function Dp() {
  if (Tm) return pi;
  Tm = 1;
  var l = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(o, c, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      d = {};
      for (var y in c)
        y !== "key" && (d[y] = c[y]);
    } else d = c;
    return c = d.ref, {
      $$typeof: l,
      type: o,
      key: m,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return pi.Fragment = r, pi.jsx = s, pi.jsxs = s, pi;
}
var xm;
function Up() {
  return xm || (xm = 1, Yo.exports = Dp()), Yo.exports;
}
var v = Up(), ko = { exports: {} }, ie = {}, Am;
function Mp() {
  if (Am) return ie;
  Am = 1;
  var l = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), y = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function A(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, D = Object.assign, G = {};
  function V(S, j, K) {
    this.props = S, this.context = j, this.refs = G, this.updater = K || z;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(S, j) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, j, "setState");
  }, V.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = V.prototype;
  function I(S, j, K) {
    this.props = S, this.context = j, this.refs = G, this.updater = K || z;
  }
  var W = I.prototype = new Q();
  W.constructor = I, D(W, V.prototype), W.isPureReactComponent = !0;
  var me = Array.isArray;
  function re() {
  }
  var ae = { H: null, A: null, T: null, S: null }, ee = Object.prototype.hasOwnProperty;
  function ce(S, j, K) {
    var Z = K.ref;
    return {
      $$typeof: r,
      type: S,
      key: j,
      ref: Z !== void 0 ? Z : null,
      props: K
    };
  }
  function Le(S, j) {
    return ce(S.type, j, S.props);
  }
  function Ne(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function _e(S) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(K) {
      return j[K];
    });
  }
  var Je = /\/+/g;
  function Xe(S, j) {
    return typeof S == "object" && S !== null && S.key != null ? _e("" + S.key) : j.toString(36);
  }
  function k(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(re, re) : (S.status = "pending", S.then(
          function(j) {
            S.status === "pending" && (S.status = "fulfilled", S.value = j);
          },
          function(j) {
            S.status === "pending" && (S.status = "rejected", S.reason = j);
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
  function Y(S, j, K, Z, le) {
    var J = typeof S;
    (J === "undefined" || J === "boolean") && (S = null);
    var we = !1;
    if (S === null) we = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case s:
              we = !0;
              break;
            case R:
              return we = S._init, Y(
                we(S._payload),
                j,
                K,
                Z,
                le
              );
          }
      }
    if (we)
      return le = le(S), we = Z === "" ? "." + Xe(S, 0) : Z, me(le) ? (K = "", we != null && (K = we.replace(Je, "$&/") + "/"), Y(le, j, K, "", function(Ft) {
        return Ft;
      })) : le != null && (Ne(le) && (le = Le(
        le,
        K + (le.key == null || S && S.key === le.key ? "" : ("" + le.key).replace(
          Je,
          "$&/"
        ) + "/") + we
      )), j.push(le)), 1;
    we = 0;
    var te = Z === "" ? "." : Z + ":";
    if (me(S))
      for (var he = 0; he < S.length; he++)
        Z = S[he], J = te + Xe(Z, he), we += Y(
          Z,
          j,
          K,
          J,
          le
        );
    else if (he = A(S), typeof he == "function")
      for (S = he.call(S), he = 0; !(Z = S.next()).done; )
        Z = Z.value, J = te + Xe(Z, he++), we += Y(
          Z,
          j,
          K,
          J,
          le
        );
    else if (J === "object") {
      if (typeof S.then == "function")
        return Y(
          k(S),
          j,
          K,
          Z,
          le
        );
      throw j = String(S), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function X(S, j, K) {
    if (S == null) return S;
    var Z = [], le = 0;
    return Y(S, Z, "", "", function(J) {
      return j.call(K, J, le++);
    }), Z;
  }
  function ue(S) {
    if (S._status === -1) {
      var j = S._result;
      j = j(), j.then(
        function(K) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = K);
        },
        function(K) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = K);
        }
      ), S._status === -1 && (S._status = 0, S._result = j);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Ae = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var j = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(j)) return;
    } else if (typeof l == "object" && typeof l.emit == "function") {
      l.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Re = {
    map: X,
    forEach: function(S, j, K) {
      X(
        S,
        function() {
          j.apply(this, arguments);
        },
        K
      );
    },
    count: function(S) {
      var j = 0;
      return X(S, function() {
        j++;
      }), j;
    },
    toArray: function(S) {
      return X(S, function(j) {
        return j;
      }) || [];
    },
    only: function(S) {
      if (!Ne(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ie.Activity = C, ie.Children = Re, ie.Component = V, ie.Fragment = o, ie.Profiler = d, ie.PureComponent = I, ie.StrictMode = c, ie.Suspense = g, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return ae.H.useMemoCache(S);
    }
  }, ie.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ie.cacheSignal = function() {
    return null;
  }, ie.cloneElement = function(S, j, K) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var Z = D({}, S.props), le = S.key;
    if (j != null)
      for (J in j.key !== void 0 && (le = "" + j.key), j)
        !ee.call(j, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && j.ref === void 0 || (Z[J] = j[J]);
    var J = arguments.length - 2;
    if (J === 1) Z.children = K;
    else if (1 < J) {
      for (var we = Array(J), te = 0; te < J; te++)
        we[te] = arguments[te + 2];
      Z.children = we;
    }
    return ce(S.type, le, Z);
  }, ie.createContext = function(S) {
    return S = {
      $$typeof: y,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: m,
      _context: S
    }, S;
  }, ie.createElement = function(S, j, K) {
    var Z, le = {}, J = null;
    if (j != null)
      for (Z in j.key !== void 0 && (J = "" + j.key), j)
        ee.call(j, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (le[Z] = j[Z]);
    var we = arguments.length - 2;
    if (we === 1) le.children = K;
    else if (1 < we) {
      for (var te = Array(we), he = 0; he < we; he++)
        te[he] = arguments[he + 2];
      le.children = te;
    }
    if (S && S.defaultProps)
      for (Z in we = S.defaultProps, we)
        le[Z] === void 0 && (le[Z] = we[Z]);
    return ce(S, J, le);
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ie.isValidElement = Ne, ie.lazy = function(S) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: S },
      _init: ue
    };
  }, ie.memo = function(S, j) {
    return {
      $$typeof: b,
      type: S,
      compare: j === void 0 ? null : j
    };
  }, ie.startTransition = function(S) {
    var j = ae.T, K = {};
    ae.T = K;
    try {
      var Z = S(), le = ae.S;
      le !== null && le(K, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(re, Ae);
    } catch (J) {
      Ae(J);
    } finally {
      j !== null && K.types !== null && (j.types = K.types), ae.T = j;
    }
  }, ie.unstable_useCacheRefresh = function() {
    return ae.H.useCacheRefresh();
  }, ie.use = function(S) {
    return ae.H.use(S);
  }, ie.useActionState = function(S, j, K) {
    return ae.H.useActionState(S, j, K);
  }, ie.useCallback = function(S, j) {
    return ae.H.useCallback(S, j);
  }, ie.useContext = function(S) {
    return ae.H.useContext(S);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(S, j) {
    return ae.H.useDeferredValue(S, j);
  }, ie.useEffect = function(S, j) {
    return ae.H.useEffect(S, j);
  }, ie.useEffectEvent = function(S) {
    return ae.H.useEffectEvent(S);
  }, ie.useId = function() {
    return ae.H.useId();
  }, ie.useImperativeHandle = function(S, j, K) {
    return ae.H.useImperativeHandle(S, j, K);
  }, ie.useInsertionEffect = function(S, j) {
    return ae.H.useInsertionEffect(S, j);
  }, ie.useLayoutEffect = function(S, j) {
    return ae.H.useLayoutEffect(S, j);
  }, ie.useMemo = function(S, j) {
    return ae.H.useMemo(S, j);
  }, ie.useOptimistic = function(S, j) {
    return ae.H.useOptimistic(S, j);
  }, ie.useReducer = function(S, j, K) {
    return ae.H.useReducer(S, j, K);
  }, ie.useRef = function(S) {
    return ae.H.useRef(S);
  }, ie.useState = function(S) {
    return ae.H.useState(S);
  }, ie.useSyncExternalStore = function(S, j, K) {
    return ae.H.useSyncExternalStore(
      S,
      j,
      K
    );
  }, ie.useTransition = function() {
    return ae.H.useTransition();
  }, ie.version = "19.2.3", ie;
}
var Cm;
function fc() {
  return Cm || (Cm = 1, ko.exports = Mp()), ko.exports;
}
var T = fc();
const zp = /* @__PURE__ */ Op(T);
var Nm = "popstate";
function Lp(l = {}) {
  function r(o, c) {
    let { pathname: d, search: m, hash: y } = o.location;
    return ac(
      "",
      { pathname: d, search: m, hash: y },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function s(o, c) {
    return typeof c == "string" ? c : Ti(c);
  }
  return Hp(
    r,
    s,
    null,
    l
  );
}
function ke(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function en(l, r) {
  if (!l) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function jp() {
  return Math.random().toString(36).substring(2, 10);
}
function _m(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r
  };
}
function ac(l, r, s = null, o) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? bl(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || jp()
  };
}
function Ti({
  pathname: l = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function bl(l) {
  let r = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (r.hash = l.substring(s), l = l.substring(0, s));
    let o = l.indexOf("?");
    o >= 0 && (r.search = l.substring(o), l = l.substring(0, o)), l && (r.pathname = l);
  }
  return r;
}
function Hp(l, r, s, o = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = o, m = c.history, y = "POP", p = null, g = b();
  g == null && (g = 0, m.replaceState({ ...m.state, idx: g }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function R() {
    y = "POP";
    let D = b(), G = D == null ? null : D - g;
    g = D, p && p({ action: y, location: z.location, delta: G });
  }
  function C(D, G) {
    y = "PUSH";
    let V = ac(z.location, D, G);
    g = b() + 1;
    let Q = _m(V, g), I = z.createHref(V);
    try {
      m.pushState(Q, "", I);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      c.location.assign(I);
    }
    d && p && p({ action: y, location: z.location, delta: 1 });
  }
  function q(D, G) {
    y = "REPLACE";
    let V = ac(z.location, D, G);
    g = b();
    let Q = _m(V, g), I = z.createHref(V);
    m.replaceState(Q, "", I), d && p && p({ action: y, location: z.location, delta: 0 });
  }
  function A(D) {
    return Bp(D);
  }
  let z = {
    get action() {
      return y;
    },
    get location() {
      return l(c, m);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(Nm, R), p = D, () => {
        c.removeEventListener(Nm, R), p = null;
      };
    },
    createHref(D) {
      return r(c, D);
    },
    createURL: A,
    encodeLocation(D) {
      let G = A(D);
      return {
        pathname: G.pathname,
        search: G.search,
        hash: G.hash
      };
    },
    push: C,
    replace: q,
    go(D) {
      return m.go(D);
    }
  };
  return z;
}
function Bp(l, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), ke(s, "No window.location.(origin|href) available to create URL");
  let o = typeof l == "string" ? l : Ti(l);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = s + o), new URL(o, s);
}
function fh(l, r, s = "/") {
  return qp(l, r, s, !1);
}
function qp(l, r, s, o) {
  let c = typeof r == "string" ? bl(r) : r, d = Nn(c.pathname || "/", s);
  if (d == null)
    return null;
  let m = dh(l);
  Gp(m);
  let y = null;
  for (let p = 0; y == null && p < m.length; ++p) {
    let g = Wp(d);
    y = $p(
      m[p],
      g,
      o
    );
  }
  return y;
}
function dh(l, r = [], s = [], o = "", c = !1) {
  let d = (m, y, p = c, g) => {
    let b = {
      relativePath: g === void 0 ? m.path || "" : g,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: y,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(o) && p)
        return;
      ke(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(o.length);
    }
    let R = An([o, b.relativePath]), C = s.concat(b);
    m.children && m.children.length > 0 && (ke(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), dh(
      m.children,
      r,
      C,
      R,
      p
    )), !(m.path == null && !m.index) && r.push({
      path: R,
      score: Zp(R, m.index),
      routesMeta: C
    });
  };
  return l.forEach((m, y) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, y);
    else
      for (let p of mh(m.path))
        d(m, y, !0, p);
  }), r;
}
function mh(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [s, ...o] = r, c = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [d, ""] : [d];
  let m = mh(o.join("/")), y = [];
  return y.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), c && y.push(...m), y.map(
    (p) => l.startsWith("/") && p === "" ? "/" : p
  );
}
function Gp(l) {
  l.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Jp(
      r.routesMeta.map((o) => o.childrenIndex),
      s.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Yp = /^:[\w-]+$/, kp = 3, Xp = 2, Vp = 1, Kp = 10, Qp = -2, Om = (l) => l === "*";
function Zp(l, r) {
  let s = l.split("/"), o = s.length;
  return s.some(Om) && (o += Qp), r && (o += Xp), s.filter((c) => !Om(c)).reduce(
    (c, d) => c + (Yp.test(d) ? kp : d === "" ? Vp : Kp),
    o
  );
}
function Jp(l, r) {
  return l.length === r.length && l.slice(0, -1).every((o, c) => o === r[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    l[l.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function $p(l, r, s = !1) {
  let { routesMeta: o } = l, c = {}, d = "/", m = [];
  for (let y = 0; y < o.length; ++y) {
    let p = o[y], g = y === o.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", R = mu(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
      b
    ), C = p.route;
    if (!R && g && s && !o[o.length - 1].route.index && (R = mu(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      b
    )), !R)
      return null;
    Object.assign(c, R.params), m.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: An([d, R.pathname]),
      pathnameBase: t1(
        An([d, R.pathnameBase])
      ),
      route: C
    }), R.pathnameBase !== "/" && (d = An([d, R.pathnameBase]));
  }
  return m;
}
function mu(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, o] = Fp(
    l.path,
    l.caseSensitive,
    l.end
  ), c = r.match(s);
  if (!c) return null;
  let d = c[0], m = d.replace(/(.)\/+$/, "$1"), y = c.slice(1);
  return {
    params: o.reduce(
      (g, { paramName: b, isOptional: R }, C) => {
        if (b === "*") {
          let A = y[C] || "";
          m = d.slice(0, d.length - A.length).replace(/(.)\/+$/, "$1");
        }
        const q = y[C];
        return R && !q ? g[b] = void 0 : g[b] = (q || "").replace(/%2F/g, "/"), g;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: l
  };
}
function Fp(l, r = !1, s = !0) {
  en(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, y, p) => (o.push({ paramName: y, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (o.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function Wp(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return en(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function Nn(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, o = l.charAt(s);
  return o && o !== "/" ? null : l.slice(s) || "/";
}
var hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ip = (l) => hh.test(l);
function Pp(l, r = "/") {
  let {
    pathname: s,
    search: o = "",
    hash: c = ""
  } = typeof l == "string" ? bl(l) : l, d;
  if (s)
    if (Ip(s))
      d = s;
    else {
      if (s.includes("//")) {
        let m = s;
        s = s.replace(/\/\/+/g, "/"), en(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${s}`
        );
      }
      s.startsWith("/") ? d = Dm(s.substring(1), "/") : d = Dm(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: n1(o),
    hash: a1(c)
  };
}
function Dm(l, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
  }), s.length > 1 ? s.join("/") : "/";
}
function Xo(l, r, s, o) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function e1(l) {
  return l.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function gh(l) {
  let r = e1(l);
  return r.map(
    (s, o) => o === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function yh(l, r, s, o = !1) {
  let c;
  typeof l == "string" ? c = bl(l) : (c = { ...l }, ke(
    !c.pathname || !c.pathname.includes("?"),
    Xo("?", "pathname", "search", c)
  ), ke(
    !c.pathname || !c.pathname.includes("#"),
    Xo("#", "pathname", "hash", c)
  ), ke(
    !c.search || !c.search.includes("#"),
    Xo("#", "search", "hash", c)
  ));
  let d = l === "" || c.pathname === "", m = d ? "/" : c.pathname, y;
  if (m == null)
    y = s;
  else {
    let R = r.length - 1;
    if (!o && m.startsWith("..")) {
      let C = m.split("/");
      for (; C[0] === ".."; )
        C.shift(), R -= 1;
      c.pathname = C.join("/");
    }
    y = R >= 0 ? r[R] : "/";
  }
  let p = Pp(c, y), g = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (g || b) && (p.pathname += "/"), p;
}
var An = (l) => l.join("/").replace(/\/\/+/g, "/"), t1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), n1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, a1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, l1 = class {
  constructor(l, r, s, o = !1) {
    this.status = l, this.statusText = r || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function i1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function r1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ph = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function vh(l, r) {
  let s = l;
  if (typeof s != "string" || !hh.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let o = s, c = !1;
  if (ph)
    try {
      let d = new URL(window.location.href), m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), y = Nn(m.pathname, r);
      m.origin === d.origin && y != null ? s = y + m.search + m.hash : c = !0;
    } catch {
      en(
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
var bh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  bh
);
var u1 = [
  "GET",
  ...bh
];
new Set(u1);
var El = T.createContext(null);
El.displayName = "DataRouter";
var yu = T.createContext(null);
yu.displayName = "DataRouterState";
var s1 = T.createContext(!1), Eh = T.createContext({
  isTransitioning: !1
});
Eh.displayName = "ViewTransition";
var o1 = T.createContext(
  /* @__PURE__ */ new Map()
);
o1.displayName = "Fetchers";
var c1 = T.createContext(null);
c1.displayName = "Await";
var $t = T.createContext(
  null
);
$t.displayName = "Navigation";
var Ni = T.createContext(
  null
);
Ni.displayName = "Location";
var _n = T.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
_n.displayName = "Route";
var dc = T.createContext(null);
dc.displayName = "RouteError";
var Sh = "REACT_ROUTER_ERROR", f1 = "REDIRECT", d1 = "ROUTE_ERROR_RESPONSE";
function m1(l) {
  if (l.startsWith(`${Sh}:${f1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function h1(l) {
  if (l.startsWith(
    `${Sh}:${d1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new l1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function g1(l, { relative: r } = {}) {
  ke(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = T.useContext($t), { hash: c, pathname: d, search: m } = Oi(l, { relative: r }), y = d;
  return s !== "/" && (y = d === "/" ? s : An([s, d])), o.createHref({ pathname: y, search: m, hash: c });
}
function _i() {
  return T.useContext(Ni) != null;
}
function Ca() {
  return ke(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), T.useContext(Ni).location;
}
var wh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Rh(l) {
  T.useContext($t).static || T.useLayoutEffect(l);
}
function y1() {
  let { isDataRoute: l } = T.useContext(_n);
  return l ? _1() : p1();
}
function p1() {
  ke(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = T.useContext(El), { basename: r, navigator: s } = T.useContext($t), { matches: o } = T.useContext(_n), { pathname: c } = Ca(), d = JSON.stringify(gh(o)), m = T.useRef(!1);
  return Rh(() => {
    m.current = !0;
  }), T.useCallback(
    (p, g = {}) => {
      if (en(m.current, wh), !m.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let b = yh(
        p,
        JSON.parse(d),
        c,
        g.relative === "path"
      );
      l == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : An([r, b.pathname])), (g.replace ? s.replace : s.push)(
        b,
        g.state,
        g
      );
    },
    [
      r,
      s,
      d,
      c,
      l
    ]
  );
}
T.createContext(null);
function Oi(l, { relative: r } = {}) {
  let { matches: s } = T.useContext(_n), { pathname: o } = Ca(), c = JSON.stringify(gh(s));
  return T.useMemo(
    () => yh(
      l,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [l, c, o, r]
  );
}
function v1(l, r) {
  return Th(l, r);
}
function Th(l, r, s, o, c) {
  ke(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = T.useContext($t), { matches: m } = T.useContext(_n), y = m[m.length - 1], p = y ? y.params : {}, g = y ? y.pathname : "/", b = y ? y.pathnameBase : "/", R = y && y.route;
  {
    let V = R && R.path || "";
    Ah(
      g,
      !R || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let C = Ca(), q;
  if (r) {
    let V = typeof r == "string" ? bl(r) : r;
    ke(
      b === "/" || V.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), q = V;
  } else
    q = C;
  let A = q.pathname || "/", z = A;
  if (b !== "/") {
    let V = b.replace(/^\//, "").split("/");
    z = "/" + A.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let D = fh(l, { pathname: z });
  en(
    R || D != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), en(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let G = R1(
    D && D.map(
      (V) => Object.assign({}, V, {
        params: Object.assign({}, p, V.params),
        pathname: An([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathname
        ]),
        pathnameBase: V.pathnameBase === "/" ? b : An([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathnameBase
        ])
      })
    ),
    m,
    s,
    o,
    c
  );
  return r && G ? /* @__PURE__ */ T.createElement(
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
    G
  ) : G;
}
function b1() {
  let l = N1(), r = i1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), m = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ T.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ T.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ T.createElement("pre", { style: c }, s) : null, m);
}
var E1 = /* @__PURE__ */ T.createElement(b1, null), xh = class extends T.Component {
  constructor(l) {
    super(l), this.state = {
      location: l.location,
      revalidation: l.revalidation,
      error: l.error
    };
  }
  static getDerivedStateFromError(l) {
    return { error: l };
  }
  static getDerivedStateFromProps(l, r) {
    return r.location !== l.location || r.revalidation !== "idle" && l.revalidation === "idle" ? {
      error: l.error,
      location: l.location,
      revalidation: l.revalidation
    } : {
      error: l.error !== void 0 ? l.error : r.error,
      location: r.location,
      revalidation: l.revalidation || r.revalidation
    };
  }
  componentDidCatch(l, r) {
    this.props.onError ? this.props.onError(l, r) : console.error(
      "React Router caught the following error during render",
      l
    );
  }
  render() {
    let l = this.state.error;
    if (this.context && typeof l == "object" && l && "digest" in l && typeof l.digest == "string") {
      const s = h1(l.digest);
      s && (l = s);
    }
    let r = l !== void 0 ? /* @__PURE__ */ T.createElement(_n.Provider, { value: this.props.routeContext }, /* @__PURE__ */ T.createElement(
      dc.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ T.createElement(S1, { error: l }, r) : r;
  }
};
xh.contextType = s1;
var Vo = /* @__PURE__ */ new WeakMap();
function S1({
  children: l,
  error: r
}) {
  let { basename: s } = T.useContext($t);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = m1(r.digest);
    if (o) {
      let c = Vo.get(r);
      if (c) throw c;
      let d = vh(o.location, s);
      if (ph && !Vo.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw Vo.set(r, m), m;
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
  return l;
}
function w1({ routeContext: l, match: r, children: s }) {
  let o = T.useContext(El);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ T.createElement(_n.Provider, { value: l }, s);
}
function R1(l, r = [], s = null, o = null, c = null) {
  if (l == null) {
    if (!s)
      return null;
    if (s.errors)
      l = s.matches;
    else if (r.length === 0 && !s.initialized && s.matches.length > 0)
      l = s.matches;
    else
      return null;
  }
  let d = l, m = s?.errors;
  if (m != null) {
    let b = d.findIndex(
      (R) => R.route.id && m?.[R.route.id] !== void 0
    );
    ke(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, b + 1)
    );
  }
  let y = !1, p = -1;
  if (s)
    for (let b = 0; b < d.length; b++) {
      let R = d[b];
      if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (p = b), R.route.id) {
        let { loaderData: C, errors: q } = s, A = R.route.loader && !C.hasOwnProperty(R.route.id) && (!q || q[R.route.id] === void 0);
        if (R.route.lazy || A) {
          y = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let g = s && o ? (b, R) => {
    o(b, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: r1(s.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (b, R, C) => {
      let q, A = !1, z = null, D = null;
      s && (q = m && R.route.id ? m[R.route.id] : void 0, z = R.route.errorElement || E1, y && (p < 0 && C === 0 ? (Ah(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), A = !0, D = null) : p === C && (A = !0, D = R.route.hydrateFallbackElement || null)));
      let G = r.concat(d.slice(0, C + 1)), V = () => {
        let Q;
        return q ? Q = z : A ? Q = D : R.route.Component ? Q = /* @__PURE__ */ T.createElement(R.route.Component, null) : R.route.element ? Q = R.route.element : Q = b, /* @__PURE__ */ T.createElement(
          w1,
          {
            match: R,
            routeContext: {
              outlet: b,
              matches: G,
              isDataRoute: s != null
            },
            children: Q
          }
        );
      };
      return s && (R.route.ErrorBoundary || R.route.errorElement || C === 0) ? /* @__PURE__ */ T.createElement(
        xh,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: z,
          error: q,
          children: V(),
          routeContext: { outlet: null, matches: G, isDataRoute: !0 },
          onError: g
        }
      ) : V();
    },
    null
  );
}
function mc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function T1(l) {
  let r = T.useContext(El);
  return ke(r, mc(l)), r;
}
function x1(l) {
  let r = T.useContext(yu);
  return ke(r, mc(l)), r;
}
function A1(l) {
  let r = T.useContext(_n);
  return ke(r, mc(l)), r;
}
function hc(l) {
  let r = A1(l), s = r.matches[r.matches.length - 1];
  return ke(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function C1() {
  return hc(
    "useRouteId"
    /* UseRouteId */
  );
}
function N1() {
  let l = T.useContext(dc), r = x1(
    "useRouteError"
    /* UseRouteError */
  ), s = hc(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[s];
}
function _1() {
  let { router: l } = T1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = hc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = T.useRef(!1);
  return Rh(() => {
    s.current = !0;
  }), T.useCallback(
    async (c, d = {}) => {
      en(s.current, wh), s.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...d }));
    },
    [l, r]
  );
}
var Um = {};
function Ah(l, r, s) {
  !r && !Um[l] && (Um[l] = !0, en(!1, s));
}
T.memo(O1);
function O1({
  routes: l,
  future: r,
  state: s,
  onError: o
}) {
  return Th(l, void 0, s, o, r);
}
function Ch(l) {
  ke(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function D1({
  basename: l = "/",
  children: r = null,
  location: s,
  navigationType: o = "POP",
  navigator: c,
  static: d = !1,
  unstable_useTransitions: m
}) {
  ke(
    !_i(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let y = l.replace(/^\/*/, "/"), p = T.useMemo(
    () => ({
      basename: y,
      navigator: c,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [y, c, d, m]
  );
  typeof s == "string" && (s = bl(s));
  let {
    pathname: g = "/",
    search: b = "",
    hash: R = "",
    state: C = null,
    key: q = "default"
  } = s, A = T.useMemo(() => {
    let z = Nn(g, y);
    return z == null ? null : {
      location: {
        pathname: z,
        search: b,
        hash: R,
        state: C,
        key: q
      },
      navigationType: o
    };
  }, [y, g, b, R, C, q, o]);
  return en(
    A != null,
    `<Router basename="${y}"> is not able to match the URL "${g}${b}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), A == null ? null : /* @__PURE__ */ T.createElement($t.Provider, { value: p }, /* @__PURE__ */ T.createElement(Ni.Provider, { children: r, value: A }));
}
function U1({
  children: l,
  location: r
}) {
  return v1(lc(l), r);
}
function lc(l, r = []) {
  let s = [];
  return T.Children.forEach(l, (o, c) => {
    if (!T.isValidElement(o))
      return;
    let d = [...r, c];
    if (o.type === T.Fragment) {
      s.push.apply(
        s,
        lc(o.props.children, d)
      );
      return;
    }
    ke(
      o.type === Ch,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ke(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let m = {
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
    o.props.children && (m.children = lc(
      o.props.children,
      d
    )), s.push(m);
  }), s;
}
var ru = "get", uu = "application/x-www-form-urlencoded";
function pu(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function M1(l) {
  return pu(l) && l.tagName.toLowerCase() === "button";
}
function z1(l) {
  return pu(l) && l.tagName.toLowerCase() === "form";
}
function L1(l) {
  return pu(l) && l.tagName.toLowerCase() === "input";
}
function j1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function H1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !j1(l);
}
var eu = null;
function B1() {
  if (eu === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), eu = !1;
    } catch {
      eu = !0;
    }
  return eu;
}
var q1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Ko(l) {
  return l != null && !q1.has(l) ? (en(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`
  ), null) : l;
}
function G1(l, r) {
  let s, o, c, d, m;
  if (z1(l)) {
    let y = l.getAttribute("action");
    o = y ? Nn(y, r) : null, s = l.getAttribute("method") || ru, c = Ko(l.getAttribute("enctype")) || uu, d = new FormData(l);
  } else if (M1(l) || L1(l) && (l.type === "submit" || l.type === "image")) {
    let y = l.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = l.getAttribute("formaction") || y.getAttribute("action");
    if (o = p ? Nn(p, r) : null, s = l.getAttribute("formmethod") || y.getAttribute("method") || ru, c = Ko(l.getAttribute("formenctype")) || Ko(y.getAttribute("enctype")) || uu, d = new FormData(y, l), !B1()) {
      let { name: g, type: b, value: R } = l;
      if (b === "image") {
        let C = g ? `${g}.` : "";
        d.append(`${C}x`, "0"), d.append(`${C}y`, "0");
      } else g && d.append(g, R);
    }
  } else {
    if (pu(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = ru, o = null, c = uu, m = l;
  }
  return d && c === "text/plain" && (m = d, d = void 0), { action: o, method: s.toLowerCase(), encType: c, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function gc(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function Y1(l, r, s) {
  let o = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return o.pathname === "/" ? o.pathname = `_root.${s}` : r && Nn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`, o;
}
async function k1(l, r) {
  if (l.id in r)
    return r[l.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      l.module
    );
    return r[l.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${l.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function X1(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function V1(l, r, s) {
  let o = await Promise.all(
    l.map(async (c) => {
      let d = r.routes[c.route.id];
      if (d) {
        let m = await k1(d, s);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return J1(
    o.flat(1).filter(X1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function Mm(l, r, s, o, c, d) {
  let m = (p, g) => s[g] ? p.route.id !== s[g].route.id : !0, y = (p, g) => (
    // param change, /users/123 -> /users/456
    s[g].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[g].route.path?.endsWith("*") && s[g].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, g) => m(p, g) || y(p, g)
  ) : d === "data" ? r.filter((p, g) => {
    let b = o.routes[p.route.id];
    if (!b || !b.hasLoader)
      return !1;
    if (m(p, g) || y(p, g))
      return !0;
    if (p.route.shouldRevalidate) {
      let R = p.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(l, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof R == "boolean")
        return R;
    }
    return !0;
  }) : [];
}
function K1(l, r, { includeHydrateFallback: s } = {}) {
  return Q1(
    l.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let d = [c.module];
      return c.clientActionModule && (d = d.concat(c.clientActionModule)), c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (d = d.concat(c.hydrateFallbackModule)), c.imports && (d = d.concat(c.imports)), d;
    }).flat(1)
  );
}
function Q1(l) {
  return [...new Set(l)];
}
function Z1(l) {
  let r = {}, s = Object.keys(l).sort();
  for (let o of s)
    r[o] = l[o];
  return r;
}
function J1(l, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((o, c) => {
    let d = JSON.stringify(Z1(c));
    return s.has(d) || (s.add(d), o.push({ key: d, link: c })), o;
  }, []);
}
function Nh() {
  let l = T.useContext(El);
  return gc(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function $1() {
  let l = T.useContext(yu);
  return gc(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var yc = T.createContext(void 0);
yc.displayName = "FrameworkContext";
function _h() {
  let l = T.useContext(yc);
  return gc(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function F1(l, r) {
  let s = T.useContext(yc), [o, c] = T.useState(!1), [d, m] = T.useState(!1), { onFocus: y, onBlur: p, onMouseEnter: g, onMouseLeave: b, onTouchStart: R } = r, C = T.useRef(null);
  T.useEffect(() => {
    if (l === "render" && m(!0), l === "viewport") {
      let z = (G) => {
        G.forEach((V) => {
          m(V.isIntersecting);
        });
      }, D = new IntersectionObserver(z, { threshold: 0.5 });
      return C.current && D.observe(C.current), () => {
        D.disconnect();
      };
    }
  }, [l]), T.useEffect(() => {
    if (o) {
      let z = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(z);
      };
    }
  }, [o]);
  let q = () => {
    c(!0);
  }, A = () => {
    c(!1), m(!1);
  };
  return s ? l !== "intent" ? [d, C, {}] : [
    d,
    C,
    {
      onFocus: vi(y, q),
      onBlur: vi(p, A),
      onMouseEnter: vi(g, q),
      onMouseLeave: vi(b, A),
      onTouchStart: vi(R, q)
    }
  ] : [!1, C, {}];
}
function vi(l, r) {
  return (s) => {
    l && l(s), s.defaultPrevented || r(s);
  };
}
function W1({ page: l, ...r }) {
  let { router: s } = Nh(), o = T.useMemo(
    () => fh(s.routes, l, s.basename),
    [s.routes, l, s.basename]
  );
  return o ? /* @__PURE__ */ T.createElement(P1, { page: l, matches: o, ...r }) : null;
}
function I1(l) {
  let { manifest: r, routeModules: s } = _h(), [o, c] = T.useState([]);
  return T.useEffect(() => {
    let d = !1;
    return V1(l, r, s).then(
      (m) => {
        d || c(m);
      }
    ), () => {
      d = !0;
    };
  }, [l, r, s]), o;
}
function P1({
  page: l,
  matches: r,
  ...s
}) {
  let o = Ca(), { manifest: c, routeModules: d } = _h(), { basename: m } = Nh(), { loaderData: y, matches: p } = $1(), g = T.useMemo(
    () => Mm(
      l,
      r,
      p,
      c,
      o,
      "data"
    ),
    [l, r, p, c, o]
  ), b = T.useMemo(
    () => Mm(
      l,
      r,
      p,
      c,
      o,
      "assets"
    ),
    [l, r, p, c, o]
  ), R = T.useMemo(() => {
    if (l === o.pathname + o.search + o.hash)
      return [];
    let A = /* @__PURE__ */ new Set(), z = !1;
    if (r.forEach((G) => {
      let V = c.routes[G.route.id];
      !V || !V.hasLoader || (!g.some((Q) => Q.route.id === G.route.id) && G.route.id in y && d[G.route.id]?.shouldRevalidate || V.hasClientLoader ? z = !0 : A.add(G.route.id));
    }), A.size === 0)
      return [];
    let D = Y1(l, m, "data");
    return z && A.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((G) => A.has(G.route.id)).map((G) => G.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    y,
    o,
    c,
    g,
    r,
    l,
    d
  ]), C = T.useMemo(
    () => K1(b, c),
    [b, c]
  ), q = I1(b);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, R.map((A) => /* @__PURE__ */ T.createElement("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...s })), C.map((A) => /* @__PURE__ */ T.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })), q.map(({ key: A, link: z }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ T.createElement("link", { key: A, nonce: s.nonce, ...z })
  )));
}
function ev(...l) {
  return (r) => {
    l.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var tv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  tv && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function nv({
  basename: l,
  children: r,
  unstable_useTransitions: s,
  window: o
}) {
  let c = T.useRef();
  c.current == null && (c.current = Lp({ window: o, v5Compat: !0 }));
  let d = c.current, [m, y] = T.useState({
    action: d.action,
    location: d.location
  }), p = T.useCallback(
    (g) => {
      s === !1 ? y(g) : T.startTransition(() => y(g));
    },
    [s]
  );
  return T.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ T.createElement(
    D1,
    {
      basename: l,
      children: r,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: s
    }
  );
}
var Oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Dh = T.forwardRef(
  function({
    onClick: r,
    discover: s = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: d,
    replace: m,
    state: y,
    target: p,
    to: g,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: C,
    ...q
  }, A) {
    let { basename: z, unstable_useTransitions: D } = T.useContext($t), G = typeof g == "string" && Oh.test(g), V = vh(g, z);
    g = V.to;
    let Q = g1(g, { relative: c }), [I, W, me] = F1(
      o,
      q
    ), re = rv(g, {
      replace: m,
      state: y,
      target: p,
      preventScrollReset: b,
      relative: c,
      viewTransition: R,
      unstable_defaultShouldRevalidate: C,
      unstable_useTransitions: D
    });
    function ae(ce) {
      r && r(ce), ce.defaultPrevented || re(ce);
    }
    let ee = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ T.createElement(
        "a",
        {
          ...q,
          ...me,
          href: V.absoluteURL || Q,
          onClick: V.isExternal || d ? r : ae,
          ref: ev(A, W),
          target: p,
          "data-discover": !G && s === "render" ? "true" : void 0
        }
      )
    );
    return I && !G ? /* @__PURE__ */ T.createElement(T.Fragment, null, ee, /* @__PURE__ */ T.createElement(W1, { page: Q })) : ee;
  }
);
Dh.displayName = "Link";
var av = T.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: c = !1,
    style: d,
    to: m,
    viewTransition: y,
    children: p,
    ...g
  }, b) {
    let R = Oi(m, { relative: g.relative }), C = Ca(), q = T.useContext(yu), { navigator: A, basename: z } = T.useContext($t), D = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fv(R) && y === !0, G = A.encodeLocation ? A.encodeLocation(R).pathname : R.pathname, V = C.pathname, Q = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (V = V.toLowerCase(), Q = Q ? Q.toLowerCase() : null, G = G.toLowerCase()), Q && z && (Q = Nn(Q, z) || Q);
    const I = G !== "/" && G.endsWith("/") ? G.length - 1 : G.length;
    let W = V === G || !c && V.startsWith(G) && V.charAt(I) === "/", me = Q != null && (Q === G || !c && Q.startsWith(G) && Q.charAt(G.length) === "/"), re = {
      isActive: W,
      isPending: me,
      isTransitioning: D
    }, ae = W ? r : void 0, ee;
    typeof o == "function" ? ee = o(re) : ee = [
      o,
      W ? "active" : null,
      me ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ce = typeof d == "function" ? d(re) : d;
    return /* @__PURE__ */ T.createElement(
      Dh,
      {
        ...g,
        "aria-current": ae,
        className: ee,
        ref: b,
        style: ce,
        to: m,
        viewTransition: y
      },
      typeof p == "function" ? p(re) : p
    );
  }
);
av.displayName = "NavLink";
var lv = T.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: d,
    method: m = ru,
    action: y,
    onSubmit: p,
    relative: g,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: C,
    ...q
  }, A) => {
    let { unstable_useTransitions: z } = T.useContext($t), D = ov(), G = cv(y, { relative: g }), V = m.toLowerCase() === "get" ? "get" : "post", Q = typeof y == "string" && Oh.test(y), I = (W) => {
      if (p && p(W), W.defaultPrevented) return;
      W.preventDefault();
      let me = W.nativeEvent.submitter, re = me?.getAttribute("formmethod") || m, ae = () => D(me || W.currentTarget, {
        fetcherKey: r,
        method: re,
        navigate: s,
        replace: c,
        state: d,
        relative: g,
        preventScrollReset: b,
        viewTransition: R,
        unstable_defaultShouldRevalidate: C
      });
      z && s !== !1 ? T.startTransition(() => ae()) : ae();
    };
    return /* @__PURE__ */ T.createElement(
      "form",
      {
        ref: A,
        method: V,
        action: G,
        onSubmit: o ? p : I,
        ...q,
        "data-discover": !Q && l === "render" ? "true" : void 0
      }
    );
  }
);
lv.displayName = "Form";
function iv(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Uh(l) {
  let r = T.useContext(El);
  return ke(r, iv(l)), r;
}
function rv(l, {
  target: r,
  replace: s,
  state: o,
  preventScrollReset: c,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: y,
  unstable_useTransitions: p
} = {}) {
  let g = y1(), b = Ca(), R = Oi(l, { relative: d });
  return T.useCallback(
    (C) => {
      if (H1(C, r)) {
        C.preventDefault();
        let q = s !== void 0 ? s : Ti(b) === Ti(R), A = () => g(l, {
          replace: q,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: y
        });
        p ? T.startTransition(() => A()) : A();
      }
    },
    [
      b,
      g,
      R,
      s,
      o,
      r,
      l,
      c,
      d,
      m,
      y,
      p
    ]
  );
}
var uv = 0, sv = () => `__${String(++uv)}__`;
function ov() {
  let { router: l } = Uh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = T.useContext($t), s = C1(), o = l.fetch, c = l.navigate;
  return T.useCallback(
    async (d, m = {}) => {
      let { action: y, method: p, encType: g, formData: b, body: R } = G1(
        d,
        r
      );
      if (m.navigate === !1) {
        let C = m.fetcherKey || sv();
        await o(C, s, m.action || y, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || p,
          formEncType: m.encType || g,
          flushSync: m.flushSync
        });
      } else
        await c(m.action || y, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: b,
          body: R,
          formMethod: m.method || p,
          formEncType: m.encType || g,
          replace: m.replace,
          state: m.state,
          fromRouteId: s,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [o, c, r, s]
  );
}
function cv(l, { relative: r } = {}) {
  let { basename: s } = T.useContext($t), o = T.useContext(_n);
  ke(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...Oi(l || ".", { relative: r }) }, m = Ca();
  if (l == null) {
    d.search = m.search;
    let y = new URLSearchParams(d.search), p = y.getAll("index");
    if (p.some((b) => b === "")) {
      y.delete("index"), p.filter((R) => R).forEach((R) => y.append("index", R));
      let b = y.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : An([s, d.pathname])), Ti(d);
}
function fv(l, { relative: r } = {}) {
  let s = T.useContext(Eh);
  ke(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Uh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = Oi(l, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = Nn(s.currentLocation.pathname, o) || s.currentLocation.pathname, m = Nn(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return mu(c.pathname, m) != null || mu(c.pathname, d) != null;
}
var Qo = { exports: {} }, dt = {};
var zm;
function dv() {
  if (zm) return dt;
  zm = 1;
  var l = fc();
  function r(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function d(p, g, b) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: R == null ? null : "" + R,
      children: p,
      containerInfo: g,
      implementation: b
    };
  }
  var m = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(p, g) {
    if (p === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, dt.createPortal = function(p, g) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return d(p, g, null, b);
  }, dt.flushSync = function(p) {
    var g = m.T, b = o.p;
    try {
      if (m.T = null, o.p = 2, p) return p();
    } finally {
      m.T = g, o.p = b, o.d.f();
    }
  }, dt.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(p, g));
  }, dt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, dt.preinit = function(p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var b = g.as, R = y(b, g.crossOrigin), C = typeof g.integrity == "string" ? g.integrity : void 0, q = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      b === "style" ? o.d.S(
        p,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: R,
          integrity: C,
          fetchPriority: q
        }
      ) : b === "script" && o.d.X(p, {
        crossOrigin: R,
        integrity: C,
        fetchPriority: q,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, dt.preinitModule = function(p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var b = y(
            g.as,
            g.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && o.d.M(p);
  }, dt.preload = function(p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var b = g.as, R = y(b, g.crossOrigin);
      o.d.L(p, b, {
        crossOrigin: R,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, dt.preloadModule = function(p, g) {
    if (typeof p == "string")
      if (g) {
        var b = y(g.as, g.crossOrigin);
        o.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else o.d.m(p);
  }, dt.requestFormReset = function(p) {
    o.d.r(p);
  }, dt.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, dt.useFormState = function(p, g, b) {
    return m.H.useFormState(p, g, b);
  }, dt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, dt.version = "19.2.3", dt;
}
var Lm;
function mv() {
  if (Lm) return Qo.exports;
  Lm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Qo.exports = dv(), Qo.exports;
}
var Zo = { exports: {} }, bi = {}, Jo = { exports: {} }, $o = {};
var jm;
function hv() {
  return jm || (jm = 1, (function(l) {
    function r(k, Y) {
      var X = k.length;
      k.push(Y);
      e: for (; 0 < X; ) {
        var ue = X - 1 >>> 1, Ae = k[ue];
        if (0 < c(Ae, Y))
          k[ue] = Y, k[X] = Ae, X = ue;
        else break e;
      }
    }
    function s(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var Y = k[0], X = k.pop();
      if (X !== Y) {
        k[0] = X;
        e: for (var ue = 0, Ae = k.length, Re = Ae >>> 1; ue < Re; ) {
          var S = 2 * (ue + 1) - 1, j = k[S], K = S + 1, Z = k[K];
          if (0 > c(j, X))
            K < Ae && 0 > c(Z, j) ? (k[ue] = Z, k[K] = X, ue = K) : (k[ue] = j, k[S] = X, ue = S);
          else if (K < Ae && 0 > c(Z, X))
            k[ue] = Z, k[K] = X, ue = K;
          else break e;
        }
      }
      return Y;
    }
    function c(k, Y) {
      var X = k.sortIndex - Y.sortIndex;
      return X !== 0 ? X : k.id - Y.id;
    }
    if (l.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      l.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, y = m.now();
      l.unstable_now = function() {
        return m.now() - y;
      };
    }
    var p = [], g = [], b = 1, R = null, C = 3, q = !1, A = !1, z = !1, D = !1, G = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function I(k) {
      for (var Y = s(g); Y !== null; ) {
        if (Y.callback === null) o(g);
        else if (Y.startTime <= k)
          o(g), Y.sortIndex = Y.expirationTime, r(p, Y);
        else break;
        Y = s(g);
      }
    }
    function W(k) {
      if (z = !1, I(k), !A)
        if (s(p) !== null)
          A = !0, me || (me = !0, Ne());
        else {
          var Y = s(g);
          Y !== null && Xe(W, Y.startTime - k);
        }
    }
    var me = !1, re = -1, ae = 5, ee = -1;
    function ce() {
      return D ? !0 : !(l.unstable_now() - ee < ae);
    }
    function Le() {
      if (D = !1, me) {
        var k = l.unstable_now();
        ee = k;
        var Y = !0;
        try {
          e: {
            A = !1, z && (z = !1, V(re), re = -1), q = !0;
            var X = C;
            try {
              t: {
                for (I(k), R = s(p); R !== null && !(R.expirationTime > k && ce()); ) {
                  var ue = R.callback;
                  if (typeof ue == "function") {
                    R.callback = null, C = R.priorityLevel;
                    var Ae = ue(
                      R.expirationTime <= k
                    );
                    if (k = l.unstable_now(), typeof Ae == "function") {
                      R.callback = Ae, I(k), Y = !0;
                      break t;
                    }
                    R === s(p) && o(p), I(k);
                  } else o(p);
                  R = s(p);
                }
                if (R !== null) Y = !0;
                else {
                  var Re = s(g);
                  Re !== null && Xe(
                    W,
                    Re.startTime - k
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              R = null, C = X, q = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? Ne() : me = !1;
        }
      }
    }
    var Ne;
    if (typeof Q == "function")
      Ne = function() {
        Q(Le);
      };
    else if (typeof MessageChannel < "u") {
      var _e = new MessageChannel(), Je = _e.port2;
      _e.port1.onmessage = Le, Ne = function() {
        Je.postMessage(null);
      };
    } else
      Ne = function() {
        G(Le, 0);
      };
    function Xe(k, Y) {
      re = G(function() {
        k(l.unstable_now());
      }, Y);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, l.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ae = 0 < k ? Math.floor(1e3 / k) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_next = function(k) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = C;
      }
      var X = C;
      C = Y;
      try {
        return k();
      } finally {
        C = X;
      }
    }, l.unstable_requestPaint = function() {
      D = !0;
    }, l.unstable_runWithPriority = function(k, Y) {
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
      var X = C;
      C = k;
      try {
        return Y();
      } finally {
        C = X;
      }
    }, l.unstable_scheduleCallback = function(k, Y, X) {
      var ue = l.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? ue + X : ue) : X = ue, k) {
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
      return Ae = X + Ae, k = {
        id: b++,
        callback: Y,
        priorityLevel: k,
        startTime: X,
        expirationTime: Ae,
        sortIndex: -1
      }, X > ue ? (k.sortIndex = X, r(g, k), s(p) === null && k === s(g) && (z ? (V(re), re = -1) : z = !0, Xe(W, X - ue))) : (k.sortIndex = Ae, r(p, k), A || q || (A = !0, me || (me = !0, Ne()))), k;
    }, l.unstable_shouldYield = ce, l.unstable_wrapCallback = function(k) {
      var Y = C;
      return function() {
        var X = C;
        C = Y;
        try {
          return k.apply(this, arguments);
        } finally {
          C = X;
        }
      };
    };
  })($o)), $o;
}
var Hm;
function gv() {
  return Hm || (Hm = 1, Jo.exports = hv()), Jo.exports;
}
var Bm;
function yv() {
  if (Bm) return bi;
  Bm = 1;
  var l = {};
  var r = gv(), s = fc(), o = mv();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function y(e) {
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
  function g(e) {
    if (m(e) !== e)
      throw Error(c(188));
  }
  function b(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var u = i.alternate;
      if (u === null) {
        if (a = i.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (i.child === u.child) {
        for (u = i.child; u; ) {
          if (u === n) return g(i), e;
          if (u === a) return g(i), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = i, a = u;
      else {
        for (var f = !1, h = i.child; h; ) {
          if (h === n) {
            f = !0, n = i, a = u;
            break;
          }
          if (h === a) {
            f = !0, a = i, n = u;
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = u.child; h; ) {
            if (h === n) {
              f = !0, n = u, a = i;
              break;
            }
            if (h === a) {
              f = !0, a = u, n = i;
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
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
  var C = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), me = /* @__PURE__ */ Symbol.for("react.suspense"), re = /* @__PURE__ */ Symbol.for("react.suspense_list"), ae = /* @__PURE__ */ Symbol.for("react.memo"), ee = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.activity"), Le = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ne = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = Ne && e[Ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Xe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Je ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case V:
        return "Profiler";
      case G:
        return "StrictMode";
      case me:
        return "Suspense";
      case re:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case I:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ae:
          return t = e.displayName || null, t !== null ? t : Xe(e.type) || "Memo";
        case ee:
          t = e._payload, e = e._init;
          try {
            return Xe(e(t));
          } catch {
          }
      }
    return null;
  }
  var k = Array.isArray, Y = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ae = [], Re = -1;
  function S(e) {
    return { current: e };
  }
  function j(e) {
    0 > Re || (e.current = Ae[Re], Ae[Re] = null, Re--);
  }
  function K(e, t) {
    Re++, Ae[Re] = e.current, e.current = t;
  }
  var Z = S(null), le = S(null), J = S(null), we = S(null);
  function te(e, t) {
    switch (K(J, t), K(le, e), K(Z, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Z0(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Z0(t), e = J0(t, e);
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
    j(Z), K(Z, e);
  }
  function he() {
    j(Z), j(le), j(J);
  }
  function Ft(e) {
    e.memoizedState !== null && K(we, e);
    var t = Z.current, n = J0(t, e.type);
    t !== n && (K(le, e), K(Z, n));
  }
  function Oa(e) {
    le.current === e && (j(Z), j(le)), we.current === e && (j(we), mi._currentValue = ue);
  }
  var Tl, Ee;
  function ft(e) {
    if (Tl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Tl = t && t[1] || "", Ee = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Tl + e + Ee;
  }
  var nt = !1;
  function On(e, t) {
    if (!e || nt) return "";
    nt = !0;
    var n = Error.prepareStackTrace;
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
      var u = a.DetermineComponentFrameRoot(), f = u[0], h = u[1];
      if (f && h) {
        var E = f.split(`
`), _ = h.split(`
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
                  var L = `
` + E[a].replace(" at new ", " at ");
                  return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), L;
                }
              while (1 <= a && 0 <= i);
            break;
          }
      }
    } finally {
      nt = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? ft(n) : "";
  }
  function aa(e, t) {
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
        return On(e.type, !1);
      case 11:
        return On(e.type.render, !1);
      case 1:
        return On(e.type, !0);
      case 31:
        return ft("Activity");
      default:
        return "";
    }
  }
  function ji(e) {
    try {
      var t = "", n = null;
      do
        t += aa(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var xu = Object.prototype.hasOwnProperty, Au = r.unstable_scheduleCallback, Cu = r.unstable_cancelCallback, sg = r.unstable_shouldYield, og = r.unstable_requestPaint, Ct = r.unstable_now, cg = r.unstable_getCurrentPriorityLevel, Tc = r.unstable_ImmediatePriority, xc = r.unstable_UserBlockingPriority, Hi = r.unstable_NormalPriority, fg = r.unstable_LowPriority, Ac = r.unstable_IdlePriority, dg = r.log, mg = r.unstable_setDisableYieldValue, xl = null, Nt = null;
  function Dn(e) {
    if (typeof dg == "function" && mg(e), Nt && typeof Nt.setStrictMode == "function")
      try {
        Nt.setStrictMode(xl, e);
      } catch {
      }
  }
  var _t = Math.clz32 ? Math.clz32 : yg, hg = Math.log, gg = Math.LN2;
  function yg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hg(e) / gg | 0) | 0;
  }
  var Bi = 256, qi = 262144, Gi = 4194304;
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
  function Yi(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = a & 134217727;
    return h !== 0 ? (a = h & ~u, a !== 0 ? i = la(a) : (f &= h, f !== 0 ? i = la(f) : n || (n = h & ~e, n !== 0 && (i = la(n))))) : (h = a & ~u, h !== 0 ? i = la(h) : f !== 0 ? i = la(f) : n || (n = a & ~e, n !== 0 && (i = la(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function Al(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function pg(e, t) {
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
  function Cc() {
    var e = Gi;
    return Gi <<= 1, (Gi & 62914560) === 0 && (Gi = 4194304), e;
  }
  function Nu(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Cl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function vg(e, t, n, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var h = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var L = 31 - _t(n), B = 1 << L;
      h[L] = 0, E[L] = -1;
      var O = _[L];
      if (O !== null)
        for (_[L] = null, L = 0; L < O.length; L++) {
          var M = O[L];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~B;
    }
    a !== 0 && Nc(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Nc(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - _t(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function _c(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - _t(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function Oc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : _u(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function _u(e) {
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
  function Ou(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Dc() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : pm(e.type));
  }
  function Uc(e, t) {
    var n = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = n;
    }
  }
  var Un = Math.random().toString(36).slice(2), rt = "__reactFiber$" + Un, yt = "__reactProps$" + Un, Da = "__reactContainer$" + Un, Du = "__reactEvents$" + Un, bg = "__reactListeners$" + Un, Eg = "__reactHandles$" + Un, Mc = "__reactResources$" + Un, Nl = "__reactMarker$" + Un;
  function Uu(e) {
    delete e[rt], delete e[yt], delete e[Du], delete e[bg], delete e[Eg];
  }
  function Ua(e) {
    var t = e[rt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Da] || n[rt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = tm(e); e !== null; ) {
            if (n = e[rt]) return n;
            e = tm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ma(e) {
    if (e = e[rt] || e[Da]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function _l(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function za(e) {
    var t = e[Mc];
    return t || (t = e[Mc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function at(e) {
    e[Nl] = !0;
  }
  var zc = /* @__PURE__ */ new Set(), Lc = {};
  function ia(e, t) {
    La(e, t), La(e + "Capture", t);
  }
  function La(e, t) {
    for (Lc[e] = t, e = 0; e < t.length; e++)
      zc.add(t[e]);
  }
  var Sg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jc = {}, Hc = {};
  function wg(e) {
    return xu.call(Hc, e) ? !0 : xu.call(jc, e) ? !1 : Sg.test(e) ? Hc[e] = !0 : (jc[e] = !0, !1);
  }
  function ki(e, t, n) {
    if (wg(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
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
        e.setAttribute(t, "" + n);
      }
  }
  function Xi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function sn(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + a);
    }
  }
  function Bt(e) {
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
  function Rg(e, t, n) {
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
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Mu(e) {
    if (!e._valueTracker) {
      var t = Bc(e) ? "checked" : "value";
      e._valueTracker = Rg(
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
    var n = t.getValue(), a = "";
    return e && (a = Bc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Vi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Tg = /[\n"\\]/g;
  function qt(e) {
    return e.replace(
      Tg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zu(e, t, n, a, i, u, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Bt(t)) : e.value !== "" + Bt(t) && (e.value = "" + Bt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Lu(e, f, Bt(t)) : n != null ? Lu(e, f, Bt(n)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + Bt(h) : e.removeAttribute("name");
  }
  function Gc(e, t, n, a, i, u, f, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Mu(e);
        return;
      }
      n = n != null ? "" + Bt(n) : "", t = t != null ? "" + Bt(t) : n, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Mu(e);
  }
  function Lu(e, t, n) {
    t === "number" && Vi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function ja(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Bt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yc(e, t, n) {
    if (t != null && (t = "" + Bt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Bt(n) : "";
  }
  function kc(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (k(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Bt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Mu(e);
  }
  function Ha(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Xc(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || xg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Vc(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && Xc(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Xc(e, u, t[u]);
  }
  function ju(e) {
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
  var Ag = /* @__PURE__ */ new Map([
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
  ]), Cg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ki(e) {
    return Cg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function on() {
  }
  var Hu = null;
  function Bu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ba = null, qa = null;
  function Kc(e) {
    var t = Ma(e);
    if (t && (e = t.stateNode)) {
      var n = e[yt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (zu(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + qt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[yt] || null;
                if (!i) throw Error(c(90));
                zu(
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
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && qc(a);
          }
          break e;
        case "textarea":
          Yc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ja(e, !!n.multiple, t, !1);
      }
    }
  }
  var qu = !1;
  function Qc(e, t, n) {
    if (qu) return e(t, n);
    qu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (qu = !1, (Ba !== null || qa !== null) && (Ur(), Ba && (t = Ba, e = qa, qa = Ba = null, Kc(t), e)))
        for (t = 0; t < e.length; t++) Kc(e[t]);
    }
  }
  function Ol(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[yt] || null;
    if (a === null) return null;
    n = a[t];
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
    if (n && typeof n != "function")
      throw Error(
        c(231, t, typeof n)
      );
    return n;
  }
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gu = !1;
  if (cn)
    try {
      var Dl = {};
      Object.defineProperty(Dl, "passive", {
        get: function() {
          Gu = !0;
        }
      }), window.addEventListener("test", Dl, Dl), window.removeEventListener("test", Dl, Dl);
    } catch {
      Gu = !1;
    }
  var Mn = null, Yu = null, Qi = null;
  function Zc() {
    if (Qi) return Qi;
    var e, t = Yu, n = t.length, a, i = "value" in Mn ? Mn.value : Mn.textContent, u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var f = n - e;
    for (a = 1; a <= f && t[n - a] === i[u - a]; a++) ;
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
  function pt(e) {
    function t(n, a, i, u, f) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Ji : Jc, this.isPropagationStopped = Jc, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ji);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ji);
      },
      persist: function() {
      },
      isPersistent: Ji
    }), t;
  }
  var ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $i = pt(ra), Ul = C({}, ra, { view: 0, detail: 0 }), Ng = pt(Ul), ku, Xu, Ml, Fi = C({}, Ul, {
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
    getModifierState: Ku,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ml && (Ml && e.type === "mousemove" ? (ku = e.screenX - Ml.screenX, Xu = e.screenY - Ml.screenY) : Xu = ku = 0, Ml = e), ku);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Xu;
    }
  }), $c = pt(Fi), _g = C({}, Fi, { dataTransfer: 0 }), Og = pt(_g), Dg = C({}, Ul, { relatedTarget: 0 }), Vu = pt(Dg), Ug = C({}, ra, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mg = pt(Ug), zg = C({}, ra, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lg = pt(zg), jg = C({}, ra, { data: 0 }), Fc = pt(jg), Hg = {
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
  }, Bg = {
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
  }, qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qg[e]) ? !!t[e] : !1;
  }
  function Ku() {
    return Gg;
  }
  var Yg = C({}, Ul, {
    key: function(e) {
      if (e.key) {
        var t = Hg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Zi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ku,
    charCode: function(e) {
      return e.type === "keypress" ? Zi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), kg = pt(Yg), Xg = C({}, Fi, {
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
  }), Wc = pt(Xg), Vg = C({}, Ul, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ku
  }), Kg = pt(Vg), Qg = C({}, ra, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zg = pt(Qg), Jg = C({}, Fi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $g = pt(Jg), Fg = C({}, ra, {
    newState: 0,
    oldState: 0
  }), Wg = pt(Fg), Ig = [9, 13, 27, 32], Qu = cn && "CompositionEvent" in window, zl = null;
  cn && "documentMode" in document && (zl = document.documentMode);
  var Pg = cn && "TextEvent" in window && !zl, Ic = cn && (!Qu || zl && 8 < zl && 11 >= zl), Pc = " ", ef = !1;
  function tf(e, t) {
    switch (e) {
      case "keyup":
        return Ig.indexOf(t.keyCode) !== -1;
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
  function nf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ga = !1;
  function ey(e, t) {
    switch (e) {
      case "compositionend":
        return nf(t);
      case "keypress":
        return t.which !== 32 ? null : (ef = !0, Pc);
      case "textInput":
        return e = t.data, e === Pc && ef ? null : e;
      default:
        return null;
    }
  }
  function ty(e, t) {
    if (Ga)
      return e === "compositionend" || !Qu && tf(e, t) ? (e = Zc(), Qi = Yu = Mn = null, Ga = !1, e) : null;
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
  var ny = {
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
    return t === "input" ? !!ny[e.type] : t === "textarea";
  }
  function lf(e, t, n, a) {
    Ba ? qa ? qa.push(a) : qa = [a] : Ba = a, t = qr(t, "onChange"), 0 < t.length && (n = new $i(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Ll = null, jl = null;
  function ay(e) {
    Y0(e, 0);
  }
  function Wi(e) {
    var t = _l(e);
    if (qc(t)) return e;
  }
  function rf(e, t) {
    if (e === "change") return t;
  }
  var uf = !1;
  if (cn) {
    var Zu;
    if (cn) {
      var Ju = "oninput" in document;
      if (!Ju) {
        var sf = document.createElement("div");
        sf.setAttribute("oninput", "return;"), Ju = typeof sf.oninput == "function";
      }
      Zu = Ju;
    } else Zu = !1;
    uf = Zu && (!document.documentMode || 9 < document.documentMode);
  }
  function of() {
    Ll && (Ll.detachEvent("onpropertychange", cf), jl = Ll = null);
  }
  function cf(e) {
    if (e.propertyName === "value" && Wi(jl)) {
      var t = [];
      lf(
        t,
        jl,
        e,
        Bu(e)
      ), Qc(ay, t);
    }
  }
  function ly(e, t, n) {
    e === "focusin" ? (of(), Ll = t, jl = n, Ll.attachEvent("onpropertychange", cf)) : e === "focusout" && of();
  }
  function iy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wi(jl);
  }
  function ry(e, t) {
    if (e === "click") return Wi(t);
  }
  function uy(e, t) {
    if (e === "input" || e === "change")
      return Wi(t);
  }
  function sy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ot = typeof Object.is == "function" ? Object.is : sy;
  function Hl(e, t) {
    if (Ot(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!xu.call(t, i) || !Ot(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function ff(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function df(e, t) {
    var n = ff(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ff(n);
    }
  }
  function mf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function hf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Vi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Vi(e.document);
    }
    return t;
  }
  function $u(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var oy = cn && "documentMode" in document && 11 >= document.documentMode, Ya = null, Fu = null, Bl = null, Wu = !1;
  function gf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wu || Ya == null || Ya !== Vi(a) || (a = Ya, "selectionStart" in a && $u(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Bl && Hl(Bl, a) || (Bl = a, a = qr(Fu, "onSelect"), 0 < a.length && (t = new $i(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ya)));
  }
  function ua(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var ka = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, Iu = {}, yf = {};
  cn && (yf = document.createElement("div").style, "AnimationEvent" in window || (delete ka.animationend.animation, delete ka.animationiteration.animation, delete ka.animationstart.animation), "TransitionEvent" in window || delete ka.transitionend.transition);
  function sa(e) {
    if (Iu[e]) return Iu[e];
    if (!ka[e]) return e;
    var t = ka[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in yf)
        return Iu[e] = t[n];
    return e;
  }
  var pf = sa("animationend"), vf = sa("animationiteration"), bf = sa("animationstart"), cy = sa("transitionrun"), fy = sa("transitionstart"), dy = sa("transitioncancel"), Ef = sa("transitionend"), Sf = /* @__PURE__ */ new Map(), Pu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Pu.push("scrollEnd");
  function Wt(e, t) {
    Sf.set(e, t), ia(t, [e]);
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
    } else if (typeof l == "object" && typeof l.emit == "function") {
      l.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Gt = [], Xa = 0, es = 0;
  function Pi() {
    for (var e = Xa, t = es = Xa = 0; t < e; ) {
      var n = Gt[t];
      Gt[t++] = null;
      var a = Gt[t];
      Gt[t++] = null;
      var i = Gt[t];
      Gt[t++] = null;
      var u = Gt[t];
      if (Gt[t++] = null, a !== null && i !== null) {
        var f = a.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
      }
      u !== 0 && wf(n, i, u);
    }
  }
  function er(e, t, n, a) {
    Gt[Xa++] = e, Gt[Xa++] = t, Gt[Xa++] = n, Gt[Xa++] = a, es |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ts(e, t, n, a) {
    return er(e, t, n, a), tr(e);
  }
  function oa(e, t) {
    return er(e, null, null, t), tr(e);
  }
  function wf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - _t(n), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function tr(e) {
    if (50 < ri)
      throw ri = 0, co = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Va = {};
  function my(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Dt(e, t, n, a) {
    return new my(e, t, n, a);
  }
  function ns(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function fn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Dt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Rf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function nr(e, t, n, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") ns(e) && (f = 1);
    else if (typeof e == "string")
      f = vp(
        e,
        n,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ce:
          return e = Dt(31, n, t, i), e.elementType = ce, e.lanes = u, e;
        case D:
          return ca(n.children, i, u, t);
        case G:
          f = 8, i |= 24;
          break;
        case V:
          return e = Dt(12, n, t, i | 2), e.elementType = V, e.lanes = u, e;
        case me:
          return e = Dt(13, n, t, i), e.elementType = me, e.lanes = u, e;
        case re:
          return e = Dt(19, n, t, i), e.elementType = re, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case I:
                f = 10;
                break e;
              case Q:
                f = 9;
                break e;
              case W:
                f = 11;
                break e;
              case ae:
                f = 14;
                break e;
              case ee:
                f = 16, a = null;
                break e;
            }
          f = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Dt(f, n, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function ca(e, t, n, a) {
    return e = Dt(7, e, a, t), e.lanes = n, e;
  }
  function as(e, t, n) {
    return e = Dt(6, e, null, t), e.lanes = n, e;
  }
  function Tf(e) {
    var t = Dt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ls(e, t, n) {
    return t = Dt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var xf = /* @__PURE__ */ new WeakMap();
  function Yt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = xf.get(e);
      return n !== void 0 ? n : (t = {
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
  var Ka = [], Qa = 0, ar = null, ql = 0, kt = [], Xt = 0, zn = null, nn = 1, an = "";
  function dn(e, t) {
    Ka[Qa++] = ql, Ka[Qa++] = ar, ar = e, ql = t;
  }
  function Af(e, t, n) {
    kt[Xt++] = nn, kt[Xt++] = an, kt[Xt++] = zn, zn = e;
    var a = nn;
    e = an;
    var i = 32 - _t(a) - 1;
    a &= ~(1 << i), n += 1;
    var u = 32 - _t(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, nn = 1 << 32 - _t(t) + i | n << i | a, an = u + e;
    } else
      nn = 1 << u | n << i | a, an = e;
  }
  function is(e) {
    e.return !== null && (dn(e, 1), Af(e, 1, 0));
  }
  function rs(e) {
    for (; e === ar; )
      ar = Ka[--Qa], Ka[Qa] = null, ql = Ka[--Qa], Ka[Qa] = null;
    for (; e === zn; )
      zn = kt[--Xt], kt[Xt] = null, an = kt[--Xt], kt[Xt] = null, nn = kt[--Xt], kt[Xt] = null;
  }
  function Cf(e, t) {
    kt[Xt++] = nn, kt[Xt++] = an, kt[Xt++] = zn, nn = t.id, an = t.overflow, zn = e;
  }
  var ut = null, Be = null, Se = !1, Ln = null, Vt = !1, us = Error(c(519));
  function jn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Gl(Yt(t, e)), us;
  }
  function Nf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[rt] = e, t[yt] = a, n) {
      case "dialog":
        ye("cancel", t), ye("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < si.length; n++)
          ye(si[n], t);
        break;
      case "source":
        ye("error", t);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", t), ye("load", t);
        break;
      case "details":
        ye("toggle", t);
        break;
      case "input":
        ye("invalid", t), Gc(
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
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), kc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || K0(t.textContent, n) ? (a.popover != null && (ye("beforetoggle", t), ye("toggle", t)), a.onScroll != null && ye("scroll", t), a.onScrollEnd != null && ye("scrollend", t), a.onClick != null && (t.onclick = on), t = !0) : t = !1, t || jn(e, !0);
  }
  function _f(e) {
    for (ut = e.return; ut; )
      switch (ut.tag) {
        case 5:
        case 31:
        case 13:
          Vt = !1;
          return;
        case 27:
        case 3:
          Vt = !0;
          return;
        default:
          ut = ut.return;
      }
  }
  function Za(e) {
    if (e !== ut) return !1;
    if (!Se) return _f(e), Se = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ao(e.type, e.memoizedProps)), n = !n), n && Be && jn(e), _f(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Be = em(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Be = em(e);
    } else
      t === 27 ? (t = Be, Fn(e.type) ? (e = Do, Do = null, Be = e) : Be = t) : Be = ut ? Qt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fa() {
    Be = ut = null, Se = !1;
  }
  function ss() {
    var e = Ln;
    return e !== null && (St === null ? St = e : St.push.apply(
      St,
      e
    ), Ln = null), e;
  }
  function Gl(e) {
    Ln === null ? Ln = [e] : Ln.push(e);
  }
  var os = S(null), da = null, mn = null;
  function Hn(e, t, n) {
    K(os, t._currentValue), t._currentValue = n;
  }
  function hn(e) {
    e._currentValue = os.current, j(os);
  }
  function cs(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function fs(e, t, n, a) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var u = i.dependencies;
      if (u !== null) {
        var f = i.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var h = u;
          u = i;
          for (var E = 0; E < t.length; E++)
            if (h.context === t[E]) {
              u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), cs(
                u.return,
                n,
                e
              ), a || (f = null);
              break e;
            }
          u = h.next;
        }
      } else if (i.tag === 18) {
        if (f = i.return, f === null) throw Error(c(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), cs(f, n, e), f = null;
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
  function Ja(e, t, n, a) {
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
          var h = i.type;
          Ot(i.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (i === we.current) {
        if (f = i.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(mi) : e = [mi]);
      }
      i = i.return;
    }
    e !== null && fs(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function lr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ot(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ma(e) {
    da = e, mn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function st(e) {
    return Of(da, e);
  }
  function ir(e, t) {
    return da === null && ma(e), Of(e, t);
  }
  function Of(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, mn === null) {
      if (e === null) throw Error(c(308));
      mn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else mn = mn.next = t;
    return n;
  }
  var hy = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, gy = r.unstable_scheduleCallback, yy = r.unstable_NormalPriority, We = {
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ds() {
    return {
      controller: new hy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yl(e) {
    e.refCount--, e.refCount === 0 && gy(yy, function() {
      e.controller.abort();
    });
  }
  var kl = null, ms = 0, $a = 0, Fa = null;
  function py(e, t) {
    if (kl === null) {
      var n = kl = [];
      ms = 0, $a = po(), Fa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ms++, t.then(Df, Df), t;
  }
  function Df() {
    if (--ms === 0 && kl !== null) {
      Fa !== null && (Fa.status = "fulfilled");
      var e = kl;
      kl = null, $a = 0, Fa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function vy(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        n.push(i);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var i = 0; i < n.length; i++) (0, n[i])(t);
      },
      function(i) {
        for (a.status = "rejected", a.reason = i, i = 0; i < n.length; i++)
          (0, n[i])(void 0);
      }
    ), a;
  }
  var Uf = Y.S;
  Y.S = function(e, t) {
    g0 = Ct(), typeof t == "object" && t !== null && typeof t.then == "function" && py(e, t), Uf !== null && Uf(e, t);
  };
  var ha = S(null);
  function hs() {
    var e = ha.current;
    return e !== null ? e : je.pooledCache;
  }
  function rr(e, t) {
    t === null ? K(ha, ha.current) : K(ha, t.pool);
  }
  function Mf() {
    var e = hs();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var Wa = Error(c(460)), gs = Error(c(474)), ur = Error(c(542)), sr = { then: function() {
  } };
  function zf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Lf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(on, on), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Hf(e), e;
      default:
        if (typeof t.status == "string") t.then(on, on);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
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
        throw ya = t, Wa;
    }
  }
  function ga(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ya = n, Wa) : n;
    }
  }
  var ya = null;
  function jf() {
    if (ya === null) throw Error(c(459));
    var e = ya;
    return ya = null, e;
  }
  function Hf(e) {
    if (e === Wa || e === ur)
      throw Error(c(483));
  }
  var Ia = null, Xl = 0;
  function or(e) {
    var t = Xl;
    return Xl += 1, Ia === null && (Ia = []), Lf(Ia, e, t);
  }
  function Vl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function cr(e, t) {
    throw t.$$typeof === q ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Bf(e) {
    function t(x, w) {
      if (e) {
        var N = x.deletions;
        N === null ? (x.deletions = [w], x.flags |= 16) : N.push(w);
      }
    }
    function n(x, w) {
      if (!e) return null;
      for (; w !== null; )
        t(x, w), w = w.sibling;
      return null;
    }
    function a(x) {
      for (var w = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? w.set(x.key, x) : w.set(x.index, x), x = x.sibling;
      return w;
    }
    function i(x, w) {
      return x = fn(x, w), x.index = 0, x.sibling = null, x;
    }
    function u(x, w, N) {
      return x.index = N, e ? (N = x.alternate, N !== null ? (N = N.index, N < w ? (x.flags |= 67108866, w) : N) : (x.flags |= 67108866, w)) : (x.flags |= 1048576, w);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function h(x, w, N, H) {
      return w === null || w.tag !== 6 ? (w = as(N, x.mode, H), w.return = x, w) : (w = i(w, N), w.return = x, w);
    }
    function E(x, w, N, H) {
      var P = N.type;
      return P === D ? L(
        x,
        w,
        N.props.children,
        H,
        N.key
      ) : w !== null && (w.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ee && ga(P) === w.type) ? (w = i(w, N.props), Vl(w, N), w.return = x, w) : (w = nr(
        N.type,
        N.key,
        N.props,
        null,
        x.mode,
        H
      ), Vl(w, N), w.return = x, w);
    }
    function _(x, w, N, H) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = ls(N, x.mode, H), w.return = x, w) : (w = i(w, N.children || []), w.return = x, w);
    }
    function L(x, w, N, H, P) {
      return w === null || w.tag !== 7 ? (w = ca(
        N,
        x.mode,
        H,
        P
      ), w.return = x, w) : (w = i(w, N), w.return = x, w);
    }
    function B(x, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = as(
          "" + w,
          x.mode,
          N
        ), w.return = x, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case A:
            return N = nr(
              w.type,
              w.key,
              w.props,
              null,
              x.mode,
              N
            ), Vl(N, w), N.return = x, N;
          case z:
            return w = ls(
              w,
              x.mode,
              N
            ), w.return = x, w;
          case ee:
            return w = ga(w), B(x, w, N);
        }
        if (k(w) || _e(w))
          return w = ca(
            w,
            x.mode,
            N,
            null
          ), w.return = x, w;
        if (typeof w.then == "function")
          return B(x, or(w), N);
        if (w.$$typeof === I)
          return B(
            x,
            ir(x, w),
            N
          );
        cr(x, w);
      }
      return null;
    }
    function O(x, w, N, H) {
      var P = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return P !== null ? null : h(x, w, "" + N, H);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            return N.key === P ? E(x, w, N, H) : null;
          case z:
            return N.key === P ? _(x, w, N, H) : null;
          case ee:
            return N = ga(N), O(x, w, N, H);
        }
        if (k(N) || _e(N))
          return P !== null ? null : L(x, w, N, H, null);
        if (typeof N.then == "function")
          return O(
            x,
            w,
            or(N),
            H
          );
        if (N.$$typeof === I)
          return O(
            x,
            w,
            ir(x, N),
            H
          );
        cr(x, N);
      }
      return null;
    }
    function M(x, w, N, H, P) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return x = x.get(N) || null, h(w, x, "" + H, P);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            return x = x.get(
              H.key === null ? N : H.key
            ) || null, E(w, x, H, P);
          case z:
            return x = x.get(
              H.key === null ? N : H.key
            ) || null, _(w, x, H, P);
          case ee:
            return H = ga(H), M(
              x,
              w,
              N,
              H,
              P
            );
        }
        if (k(H) || _e(H))
          return x = x.get(N) || null, L(w, x, H, P, null);
        if (typeof H.then == "function")
          return M(
            x,
            w,
            N,
            or(H),
            P
          );
        if (H.$$typeof === I)
          return M(
            x,
            w,
            N,
            ir(w, H),
            P
          );
        cr(w, H);
      }
      return null;
    }
    function $(x, w, N, H) {
      for (var P = null, Te = null, F = w, fe = w = 0, be = null; F !== null && fe < N.length; fe++) {
        F.index > fe ? (be = F, F = null) : be = F.sibling;
        var xe = O(
          x,
          F,
          N[fe],
          H
        );
        if (xe === null) {
          F === null && (F = be);
          break;
        }
        e && F && xe.alternate === null && t(x, F), w = u(xe, w, fe), Te === null ? P = xe : Te.sibling = xe, Te = xe, F = be;
      }
      if (fe === N.length)
        return n(x, F), Se && dn(x, fe), P;
      if (F === null) {
        for (; fe < N.length; fe++)
          F = B(x, N[fe], H), F !== null && (w = u(
            F,
            w,
            fe
          ), Te === null ? P = F : Te.sibling = F, Te = F);
        return Se && dn(x, fe), P;
      }
      for (F = a(F); fe < N.length; fe++)
        be = M(
          F,
          x,
          fe,
          N[fe],
          H
        ), be !== null && (e && be.alternate !== null && F.delete(
          be.key === null ? fe : be.key
        ), w = u(
          be,
          w,
          fe
        ), Te === null ? P = be : Te.sibling = be, Te = be);
      return e && F.forEach(function(ta) {
        return t(x, ta);
      }), Se && dn(x, fe), P;
    }
    function ne(x, w, N, H) {
      if (N == null) throw Error(c(151));
      for (var P = null, Te = null, F = w, fe = w = 0, be = null, xe = N.next(); F !== null && !xe.done; fe++, xe = N.next()) {
        F.index > fe ? (be = F, F = null) : be = F.sibling;
        var ta = O(x, F, xe.value, H);
        if (ta === null) {
          F === null && (F = be);
          break;
        }
        e && F && ta.alternate === null && t(x, F), w = u(ta, w, fe), Te === null ? P = ta : Te.sibling = ta, Te = ta, F = be;
      }
      if (xe.done)
        return n(x, F), Se && dn(x, fe), P;
      if (F === null) {
        for (; !xe.done; fe++, xe = N.next())
          xe = B(x, xe.value, H), xe !== null && (w = u(xe, w, fe), Te === null ? P = xe : Te.sibling = xe, Te = xe);
        return Se && dn(x, fe), P;
      }
      for (F = a(F); !xe.done; fe++, xe = N.next())
        xe = M(F, x, fe, xe.value, H), xe !== null && (e && xe.alternate !== null && F.delete(xe.key === null ? fe : xe.key), w = u(xe, w, fe), Te === null ? P = xe : Te.sibling = xe, Te = xe);
      return e && F.forEach(function(_p) {
        return t(x, _p);
      }), Se && dn(x, fe), P;
    }
    function ze(x, w, N, H) {
      if (typeof N == "object" && N !== null && N.type === D && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            e: {
              for (var P = N.key; w !== null; ) {
                if (w.key === P) {
                  if (P = N.type, P === D) {
                    if (w.tag === 7) {
                      n(
                        x,
                        w.sibling
                      ), H = i(
                        w,
                        N.props.children
                      ), H.return = x, x = H;
                      break e;
                    }
                  } else if (w.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ee && ga(P) === w.type) {
                    n(
                      x,
                      w.sibling
                    ), H = i(w, N.props), Vl(H, N), H.return = x, x = H;
                    break e;
                  }
                  n(x, w);
                  break;
                } else t(x, w);
                w = w.sibling;
              }
              N.type === D ? (H = ca(
                N.props.children,
                x.mode,
                H,
                N.key
              ), H.return = x, x = H) : (H = nr(
                N.type,
                N.key,
                N.props,
                null,
                x.mode,
                H
              ), Vl(H, N), H.return = x, x = H);
            }
            return f(x);
          case z:
            e: {
              for (P = N.key; w !== null; ) {
                if (w.key === P)
                  if (w.tag === 4 && w.stateNode.containerInfo === N.containerInfo && w.stateNode.implementation === N.implementation) {
                    n(
                      x,
                      w.sibling
                    ), H = i(w, N.children || []), H.return = x, x = H;
                    break e;
                  } else {
                    n(x, w);
                    break;
                  }
                else t(x, w);
                w = w.sibling;
              }
              H = ls(N, x.mode, H), H.return = x, x = H;
            }
            return f(x);
          case ee:
            return N = ga(N), ze(
              x,
              w,
              N,
              H
            );
        }
        if (k(N))
          return $(
            x,
            w,
            N,
            H
          );
        if (_e(N)) {
          if (P = _e(N), typeof P != "function") throw Error(c(150));
          return N = P.call(N), ne(
            x,
            w,
            N,
            H
          );
        }
        if (typeof N.then == "function")
          return ze(
            x,
            w,
            or(N),
            H
          );
        if (N.$$typeof === I)
          return ze(
            x,
            w,
            ir(x, N),
            H
          );
        cr(x, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, w !== null && w.tag === 6 ? (n(x, w.sibling), H = i(w, N), H.return = x, x = H) : (n(x, w), H = as(N, x.mode, H), H.return = x, x = H), f(x)) : n(x, w);
    }
    return function(x, w, N, H) {
      try {
        Xl = 0;
        var P = ze(
          x,
          w,
          N,
          H
        );
        return Ia = null, P;
      } catch (F) {
        if (F === Wa || F === ur) throw F;
        var Te = Dt(29, F, null, x.mode);
        return Te.lanes = H, Te.return = x, Te;
      }
    };
  }
  var pa = Bf(!0), qf = Bf(!1), Bn = !1;
  function ys(e) {
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
  function qn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Gn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ce & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = tr(e), wf(e, null, n), t;
    }
    return er(e, a, t, n), tr(e);
  }
  function Kl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, _c(e, n);
    }
  }
  function vs(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var i = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? i = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? i = u = t : u = u.next = t;
      } else i = u = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var bs = !1;
  function Ql() {
    if (bs) {
      var e = Fa;
      if (e !== null) throw e;
    }
  }
  function Zl(e, t, n, a) {
    bs = !1;
    var i = e.updateQueue;
    Bn = !1;
    var u = i.firstBaseUpdate, f = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var E = h, _ = E.next;
      E.next = null, f === null ? u = _ : f.next = _, f = E;
      var L = e.alternate;
      L !== null && (L = L.updateQueue, h = L.lastBaseUpdate, h !== f && (h === null ? L.firstBaseUpdate = _ : h.next = _, L.lastBaseUpdate = E));
    }
    if (u !== null) {
      var B = i.baseState;
      f = 0, L = _ = E = null, h = u;
      do {
        var O = h.lane & -536870913, M = O !== h.lane;
        if (M ? (ve & O) === O : (a & O) === O) {
          O !== 0 && O === $a && (bs = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, ne = h;
            O = t;
            var ze = n;
            switch (ne.tag) {
              case 1:
                if ($ = ne.payload, typeof $ == "function") {
                  B = $.call(ze, B, O);
                  break e;
                }
                B = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ne.payload, O = typeof $ == "function" ? $.call(ze, B, O) : $, O == null) break e;
                B = C({}, B, O);
                break e;
              case 2:
                Bn = !0;
            }
          }
          O = h.callback, O !== null && (e.flags |= 64, M && (e.flags |= 8192), M = i.callbacks, M === null ? i.callbacks = [O] : M.push(O));
        } else
          M = {
            lane: O,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, L === null ? (_ = L = M, E = B) : L = L.next = M, f |= O;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, i.lastBaseUpdate = M, i.shared.pending = null;
        }
      } while (!0);
      L === null && (E = B), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = L, u === null && (i.shared.lanes = 0), Kn |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Gf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Yf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Gf(n[e], t);
  }
  var Pa = S(null), fr = S(0);
  function kf(e, t) {
    e = Rn, K(fr, e), K(Pa, t), Rn = e | t.baseLanes;
  }
  function Es() {
    K(fr, Rn), K(Pa, Pa.current);
  }
  function Ss() {
    Rn = fr.current, j(Pa), j(fr);
  }
  var Ut = S(null), Kt = null;
  function Yn(e) {
    var t = e.alternate;
    K($e, $e.current & 1), K(Ut, e), Kt === null && (t === null || Pa.current !== null || t.memoizedState !== null) && (Kt = e);
  }
  function ws(e) {
    K($e, $e.current), K(Ut, e), Kt === null && (Kt = e);
  }
  function Xf(e) {
    e.tag === 22 ? (K($e, $e.current), K(Ut, e), Kt === null && (Kt = e)) : kn();
  }
  function kn() {
    K($e, $e.current), K(Ut, Ut.current);
  }
  function Mt(e) {
    j(Ut), Kt === e && (Kt = null), j($e);
  }
  var $e = S(0);
  function dr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || _o(n) || Oo(n)))
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
  var gn = 0, se = null, Ue = null, Ie = null, mr = !1, el = !1, va = !1, hr = 0, Jl = 0, tl = null, by = 0;
  function Ve() {
    throw Error(c(321));
  }
  function Rs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ot(e[n], t[n])) return !1;
    return !0;
  }
  function Ts(e, t, n, a, i, u) {
    return gn = u, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Ad : qs, va = !1, u = n(a, i), va = !1, el && (u = Kf(
      t,
      n,
      a,
      i
    )), Vf(e), u;
  }
  function Vf(e) {
    Y.H = Wl;
    var t = Ue !== null && Ue.next !== null;
    if (gn = 0, Ie = Ue = se = null, mr = !1, Jl = 0, tl = null, t) throw Error(c(300));
    e === null || Pe || (e = e.dependencies, e !== null && lr(e) && (Pe = !0));
  }
  function Kf(e, t, n, a) {
    se = e;
    var i = 0;
    do {
      if (el && (tl = null), Jl = 0, el = !1, 25 <= i) throw Error(c(301));
      if (i += 1, Ie = Ue = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      Y.H = Cd, u = t(n, a);
    } while (el);
    return u;
  }
  function Ey() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $l(t) : t, e = e.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== e && (se.flags |= 1024), t;
  }
  function xs() {
    var e = hr !== 0;
    return hr = 0, e;
  }
  function As(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Cs(e) {
    if (mr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      mr = !1;
    }
    gn = 0, Ie = Ue = se = null, el = !1, Jl = hr = 0, tl = null;
  }
  function ht() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ie === null ? se.memoizedState = Ie = e : Ie = Ie.next = e, Ie;
  }
  function Fe() {
    if (Ue === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = Ie === null ? se.memoizedState : Ie.next;
    if (t !== null)
      Ie = t, Ue = e;
    else {
      if (e === null)
        throw se.alternate === null ? Error(c(467)) : Error(c(310));
      Ue = e, e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }, Ie === null ? se.memoizedState = Ie = e : Ie = Ie.next = e;
    }
    return Ie;
  }
  function gr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $l(e) {
    var t = Jl;
    return Jl += 1, tl === null && (tl = []), e = Lf(tl, e, t), t = se, (Ie === null ? t.memoizedState : Ie.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Ad : qs), e;
  }
  function yr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $l(e);
      if (e.$$typeof === I) return st(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ns(e) {
    var t = null, n = se.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = se.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = gr(), se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Le;
    return t.index++, n;
  }
  function yn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pr(e) {
    var t = Fe();
    return _s(t, Ue, e);
  }
  function _s(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
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
      var h = f = null, E = null, _ = t, L = !1;
      do {
        var B = _.lane & -536870913;
        if (B !== _.lane ? (ve & B) === B : (gn & B) === B) {
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
            }), B === $a && (L = !0);
          else if ((gn & O) === O) {
            _ = _.next, O === $a && (L = !0);
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
            }, E === null ? (h = E = B, f = u) : E = E.next = B, se.lanes |= O, Kn |= O;
          B = _.action, va && n(u, B), u = _.hasEagerState ? _.eagerState : n(u, B);
        } else
          O = {
            lane: B,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (h = E = O, f = u) : E = E.next = O, se.lanes |= B, Kn |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = h, !Ot(u, e.memoizedState) && (Pe = !0, L && (n = Fa, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = f, e.baseQueue = E, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Os(e) {
    var t = Fe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = i = i.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== i);
      Ot(u, t.memoizedState) || (Pe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Qf(e, t, n) {
    var a = se, i = Fe(), u = Se;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var f = !Ot(
      (Ue || i).memoizedState,
      n
    );
    if (f && (i.memoizedState = n, Pe = !0), i = i.queue, Ms($f.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || Ie !== null && Ie.memoizedState.tag & 1) {
      if (a.flags |= 2048, nl(
        9,
        { destroy: void 0 },
        Jf.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), je === null) throw Error(c(349));
      u || (gn & 127) !== 0 || Zf(a, t, n);
    }
    return n;
  }
  function Zf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = se.updateQueue, t === null ? (t = gr(), se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Jf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Ff(t) && Wf(e);
  }
  function $f(e, t, n) {
    return n(function() {
      Ff(t) && Wf(e);
    });
  }
  function Ff(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ot(e, n);
    } catch {
      return !0;
    }
  }
  function Wf(e) {
    var t = oa(e, 2);
    t !== null && wt(t, e, 2);
  }
  function Ds(e) {
    var t = ht();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), va) {
        Dn(!0);
        try {
          n();
        } finally {
          Dn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: yn,
      lastRenderedState: e
    }, t;
  }
  function If(e, t, n, a) {
    return e.baseState = n, _s(
      e,
      Ue,
      typeof a == "function" ? a : yn
    );
  }
  function Sy(e, t, n, a, i) {
    if (Er(e)) throw Error(c(485));
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
      Y.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, Pf(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function Pf(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = Y.T, f = {};
      Y.T = f;
      try {
        var h = n(i, a), E = Y.S;
        E !== null && E(f, h), ed(e, t, h);
      } catch (_) {
        Us(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), Y.T = u;
      }
    } else
      try {
        u = n(i, a), ed(e, t, u);
      } catch (_) {
        Us(e, t, _);
      }
  }
  function ed(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        td(e, t, a);
      },
      function(a) {
        return Us(e, t, a);
      }
    ) : td(e, t, n);
  }
  function td(e, t, n) {
    t.status = "fulfilled", t.value = n, nd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Pf(e, n)));
  }
  function Us(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, nd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function nd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ad(e, t) {
    return t;
  }
  function ld(e, t) {
    if (Se) {
      var n = je.formState;
      if (n !== null) {
        e: {
          var a = se;
          if (Se) {
            if (Be) {
              t: {
                for (var i = Be, u = Vt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = Qt(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                Be = Qt(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            jn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = ht(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ad,
      lastRenderedState: t
    }, n.queue = a, n = Rd.bind(
      null,
      se,
      a
    ), a.dispatch = n, a = Ds(!1), u = Bs.bind(
      null,
      se,
      !1,
      a.queue
    ), a = ht(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = Sy.bind(
      null,
      se,
      i,
      u,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function id(e) {
    var t = Fe();
    return rd(t, Ue, e);
  }
  function rd(e, t, n) {
    if (t = _s(
      e,
      t,
      ad
    )[0], e = pr(yn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = $l(t);
      } catch (f) {
        throw f === Wa ? ur : f;
      }
    else a = t;
    t = Fe();
    var i = t.queue, u = i.dispatch;
    return n !== t.memoizedState && (se.flags |= 2048, nl(
      9,
      { destroy: void 0 },
      wy.bind(null, i, n),
      null
    )), [a, u, e];
  }
  function wy(e, t) {
    e.action = t;
  }
  function ud(e) {
    var t = Fe(), n = Ue;
    if (n !== null)
      return rd(t, n, e);
    Fe(), t = t.memoizedState, n = Fe();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function nl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = se.updateQueue, t === null && (t = gr(), se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function sd() {
    return Fe().memoizedState;
  }
  function vr(e, t, n, a) {
    var i = ht();
    se.flags |= e, i.memoizedState = nl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function br(e, t, n, a) {
    var i = Fe();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Ue !== null && a !== null && Rs(a, Ue.memoizedState.deps) ? i.memoizedState = nl(t, u, n, a) : (se.flags |= e, i.memoizedState = nl(
      1 | t,
      u,
      n,
      a
    ));
  }
  function od(e, t) {
    vr(8390656, 8, e, t);
  }
  function Ms(e, t) {
    br(2048, 8, e, t);
  }
  function Ry(e) {
    se.flags |= 4;
    var t = se.updateQueue;
    if (t === null)
      t = gr(), se.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function cd(e) {
    var t = Fe().memoizedState;
    return Ry({ ref: t, nextImpl: e }), function() {
      if ((Ce & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fd(e, t) {
    return br(4, 2, e, t);
  }
  function dd(e, t) {
    return br(4, 4, e, t);
  }
  function md(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function hd(e, t, n) {
    n = n != null ? n.concat([e]) : null, br(4, 4, md.bind(null, t, e), n);
  }
  function zs() {
  }
  function gd(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Rs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function yd(e, t) {
    var n = Fe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Rs(t, a[1]))
      return a[0];
    if (a = e(), va) {
      Dn(!0);
      try {
        e();
      } finally {
        Dn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Ls(e, t, n) {
    return n === void 0 || (gn & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = p0(), se.lanes |= e, Kn |= e, n);
  }
  function pd(e, t, n, a) {
    return Ot(n, t) ? n : Pa.current !== null ? (e = Ls(e, n, a), Ot(e, t) || (Pe = !0), e) : (gn & 42) === 0 || (gn & 1073741824) !== 0 && (ve & 261930) === 0 ? (Pe = !0, e.memoizedState = n) : (e = p0(), se.lanes |= e, Kn |= e, t);
  }
  function vd(e, t, n, a, i) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var f = Y.T, h = {};
    Y.T = h, Bs(e, !1, t, n);
    try {
      var E = i(), _ = Y.S;
      if (_ !== null && _(h, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var L = vy(
          E,
          a
        );
        Fl(
          e,
          t,
          L,
          jt(e)
        );
      } else
        Fl(
          e,
          t,
          a,
          jt(e)
        );
    } catch (B) {
      Fl(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        jt()
      );
    } finally {
      X.p = u, f !== null && h.types !== null && (f.types = h.types), Y.T = f;
    }
  }
  function Ty() {
  }
  function js(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = bd(e).queue;
    vd(
      e,
      i,
      t,
      ue,
      n === null ? Ty : function() {
        return Ed(e), n(a);
      }
    );
  }
  function bd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: ue
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Ed(e) {
    var t = bd(e);
    t.next === null && (t = e.alternate.memoizedState), Fl(
      e,
      t.next.queue,
      {},
      jt()
    );
  }
  function Hs() {
    return st(mi);
  }
  function Sd() {
    return Fe().memoizedState;
  }
  function wd() {
    return Fe().memoizedState;
  }
  function xy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = jt();
          e = qn(n);
          var a = Gn(t, e, n);
          a !== null && (wt(a, t, n), Kl(a, t, n)), t = { cache: ds() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ay(e, t, n) {
    var a = jt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Er(e) ? Td(t, n) : (n = ts(e, t, n, a), n !== null && (wt(n, e, a), xd(n, t, a)));
  }
  function Rd(e, t, n) {
    var a = jt();
    Fl(e, t, n, a);
  }
  function Fl(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Er(e)) Td(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, h = u(f, n);
          if (i.hasEagerState = !0, i.eagerState = h, Ot(h, f))
            return er(e, t, i, 0), je === null && Pi(), !1;
        } catch {
        }
      if (n = ts(e, t, i, a), n !== null)
        return wt(n, e, a), xd(n, t, a), !0;
    }
    return !1;
  }
  function Bs(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: po(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Er(e)) {
      if (t) throw Error(c(479));
    } else
      t = ts(
        e,
        n,
        a,
        2
      ), t !== null && wt(t, e, 2);
  }
  function Er(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se;
  }
  function Td(e, t) {
    el = mr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function xd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, _c(e, n);
    }
  }
  var Wl = {
    readContext: st,
    use: yr,
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
  Wl.useEffectEvent = Ve;
  var Ad = {
    readContext: st,
    use: yr,
    useCallback: function(e, t) {
      return ht().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: st,
    useEffect: od,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, vr(
        4194308,
        4,
        md.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return vr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      vr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = ht();
      t = t === void 0 ? null : t;
      var a = e();
      if (va) {
        Dn(!0);
        try {
          e();
        } finally {
          Dn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = ht();
      if (n !== void 0) {
        var i = n(t);
        if (va) {
          Dn(!0);
          try {
            n(t);
          } finally {
            Dn(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = Ay.bind(
        null,
        se,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = ht();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ds(e);
      var t = e.queue, n = Rd.bind(null, se, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var n = ht();
      return Ls(n, e, t);
    },
    useTransition: function() {
      var e = Ds(!1);
      return e = vd.bind(
        null,
        se,
        e.queue,
        !0,
        !1
      ), ht().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = se, i = ht();
      if (Se) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), je === null)
          throw Error(c(349));
        (ve & 127) !== 0 || Zf(a, t, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return i.queue = u, od($f.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, nl(
        9,
        { destroy: void 0 },
        Jf.bind(
          null,
          a,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = ht(), t = je.identifierPrefix;
      if (Se) {
        var n = an, a = nn;
        n = (a & ~(1 << 32 - _t(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = hr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = by++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Hs,
    useFormState: ld,
    useActionState: ld,
    useOptimistic: function(e) {
      var t = ht();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Bs.bind(
        null,
        se,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ns,
    useCacheRefresh: function() {
      return ht().memoizedState = xy.bind(
        null,
        se
      );
    },
    useEffectEvent: function(e) {
      var t = ht(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ce & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, qs = {
    readContext: st,
    use: yr,
    useCallback: gd,
    useContext: st,
    useEffect: Ms,
    useImperativeHandle: hd,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: yd,
    useReducer: pr,
    useRef: sd,
    useState: function() {
      return pr(yn);
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var n = Fe();
      return pd(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = pr(yn)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : $l(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: Sd,
    useHostTransitionStatus: Hs,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e, t) {
      var n = Fe();
      return If(n, Ue, e, t);
    },
    useMemoCache: Ns,
    useCacheRefresh: wd
  };
  qs.useEffectEvent = cd;
  var Cd = {
    readContext: st,
    use: yr,
    useCallback: gd,
    useContext: st,
    useEffect: Ms,
    useImperativeHandle: hd,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: yd,
    useReducer: Os,
    useRef: sd,
    useState: function() {
      return Os(yn);
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var n = Fe();
      return Ue === null ? Ls(n, e, t) : pd(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Os(yn)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : $l(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: Sd,
    useHostTransitionStatus: Hs,
    useFormState: ud,
    useActionState: ud,
    useOptimistic: function(e, t) {
      var n = Fe();
      return Ue !== null ? If(n, Ue, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ns,
    useCacheRefresh: wd
  };
  Cd.useEffectEvent = cd;
  function Gs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ys = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = jt(), i = qn(a);
      i.payload = t, n != null && (i.callback = n), t = Gn(e, i, a), t !== null && (wt(t, e, a), Kl(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = jt(), i = qn(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Gn(e, i, a), t !== null && (wt(t, e, a), Kl(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = jt(), a = qn(n);
      a.tag = 2, t != null && (a.callback = t), t = Gn(e, a, n), t !== null && (wt(t, e, n), Kl(t, e, n));
    }
  };
  function Nd(e, t, n, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !Hl(n, a) || !Hl(i, u) : !0;
  }
  function _d(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ys.enqueueReplaceState(t, t.state, null);
  }
  function ba(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = C({}, n));
      for (var i in e)
        n[i] === void 0 && (n[i] = e[i]);
    }
    return n;
  }
  function Od(e) {
    Ii(e);
  }
  function Dd(e) {
    console.error(e);
  }
  function Ud(e) {
    Ii(e);
  }
  function Sr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Md(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function ks(e, t, n) {
    return n = qn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Sr(e, t);
    }, n;
  }
  function zd(e) {
    return e = qn(e), e.tag = 3, e;
  }
  function Ld(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Md(t, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Md(t, n, a), typeof i != "function" && (Qn === null ? Qn = /* @__PURE__ */ new Set([this]) : Qn.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Cy(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Ja(
        t,
        n,
        i,
        !0
      ), n = Ut.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Kt === null ? Mr() : n.alternate === null && Ke === 0 && (Ke = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === sr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), ho(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === sr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), ho(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return ho(e, a, i), Mr(), !1;
    }
    if (Se)
      return t = Ut.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== us && (e = Error(c(422), { cause: a }), Gl(Yt(e, n)))) : (a !== us && (t = Error(c(423), {
        cause: a
      }), Gl(
        Yt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Yt(a, n), i = ks(
        e.stateNode,
        a,
        i
      ), vs(e, i), Ke !== 4 && (Ke = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Yt(u, n), ii === null ? ii = [u] : ii.push(u), Ke !== 4 && (Ke = 2), t === null) return !0;
    a = Yt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = ks(n.stateNode, a, e), vs(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Qn === null || !Qn.has(u))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = zd(i), Ld(
              i,
              e,
              n,
              a
            ), vs(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Xs = Error(c(461)), Pe = !1;
  function ot(e, t, n, a) {
    t.child = e === null ? qf(t, null, n, a) : pa(
      t,
      e.child,
      n,
      a
    );
  }
  function jd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a)
        h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return ma(t), a = Ts(
      e,
      t,
      n,
      f,
      u,
      i
    ), h = xs(), e !== null && !Pe ? (As(e, t, i), pn(e, t, i)) : (Se && h && is(t), t.flags |= 1, ot(e, t, a, i), t.child);
  }
  function Hd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !ns(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Bd(
        e,
        t,
        u,
        a,
        i
      )) : (e = nr(
        n.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !Ws(e, i)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Hl, n(f, a) && e.ref === t.ref)
        return pn(e, t, i);
    }
    return t.flags |= 1, e = fn(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Bd(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Hl(u, a) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = a = u, Ws(e, i))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, pn(e, t, i);
    }
    return Vs(
      e,
      t,
      n,
      a,
      i
    );
  }
  function qd(e, t, n, a) {
    var i = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, i = 0; a !== null; )
            i = i | a.lanes | a.childLanes, a = a.sibling;
          a = i & ~u;
        } else a = 0, t.child = null;
        return Gd(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && rr(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? kf(t, u) : Es(), Xf(t);
      else
        return a = t.lanes = 536870912, Gd(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (rr(t, u.cachePool), kf(t, u), kn(), t.memoizedState = null) : (e !== null && rr(t, null), Es(), kn());
    return ot(e, t, i, n), t.child;
  }
  function Il(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Gd(e, t, n, a, i) {
    var u = hs();
    return u = u === null ? null : { parent: We._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && rr(t, null), Es(), Xf(t), e !== null && Ja(e, t, a, !0), t.childLanes = i, null;
  }
  function wr(e, t) {
    return t = Tr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Yd(e, t, n) {
    return pa(t, e.child, null, n), e = wr(t, t.pendingProps), e.flags |= 2, Mt(t), t.memoizedState = null, e;
  }
  function Ny(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (a.mode === "hidden")
          return e = wr(t, a), t.lanes = 536870912, Il(null, e);
        if (ws(t), (e = Be) ? (e = P0(
          e,
          Vt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: zn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Tf(e), n.return = t, t.child = n, ut = t, Be = null)) : e = null, e === null) throw jn(t);
        return t.lanes = 536870912, null;
      }
      return wr(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (ws(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Yd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Pe || Ja(e, t, n, !1), i = (n & e.childLanes) !== 0, Pe || i) {
        if (a = je, a !== null && (f = Oc(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, oa(e, f), wt(a, e, f), Xs;
        Mr(), t = Yd(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Be = Qt(f.nextSibling), ut = t, Se = !0, Ln = null, Vt = !1, e !== null && Cf(t, e), t = wr(t, a), t.flags |= 4096;
      return t;
    }
    return e = fn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Rr(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Vs(e, t, n, a, i) {
    return ma(t), n = Ts(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = xs(), e !== null && !Pe ? (As(e, t, i), pn(e, t, i)) : (Se && a && is(t), t.flags |= 1, ot(e, t, n, i), t.child);
  }
  function kd(e, t, n, a, i, u) {
    return ma(t), t.updateQueue = null, n = Kf(
      t,
      a,
      n,
      i
    ), Vf(e), a = xs(), e !== null && !Pe ? (As(e, t, u), pn(e, t, u)) : (Se && a && is(t), t.flags |= 1, ot(e, t, n, u), t.child);
  }
  function Xd(e, t, n, a, i) {
    if (ma(t), t.stateNode === null) {
      var u = Va, f = n.contextType;
      typeof f == "object" && f !== null && (u = st(f)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ys, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, ys(t), f = n.contextType, u.context = typeof f == "object" && f !== null ? st(f) : Va, u.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Gs(
        t,
        n,
        f,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Ys.enqueueReplaceState(u, u.state, null), Zl(t, a, u, i), Ql(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps, E = ba(n, h);
      u.props = E;
      var _ = u.context, L = n.contextType;
      f = Va, typeof L == "object" && L !== null && (f = st(L));
      var B = n.getDerivedStateFromProps;
      L = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, L || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || _ !== f) && _d(
        t,
        u,
        a,
        f
      ), Bn = !1;
      var O = t.memoizedState;
      u.state = O, Zl(t, a, u, i), Ql(), _ = t.memoizedState, h || O !== _ || Bn ? (typeof B == "function" && (Gs(
        t,
        n,
        B,
        a
      ), _ = t.memoizedState), (E = Bn || Nd(
        t,
        n,
        E,
        a,
        O,
        _,
        f
      )) ? (L || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, ps(e, t), f = t.memoizedProps, L = ba(n, f), u.props = L, B = t.pendingProps, O = u.context, _ = n.contextType, E = Va, typeof _ == "object" && _ !== null && (E = st(_)), h = n.getDerivedStateFromProps, (_ = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && _d(
        t,
        u,
        a,
        E
      ), Bn = !1, O = t.memoizedState, u.state = O, Zl(t, a, u, i), Ql();
      var M = t.memoizedState;
      f !== B || O !== M || Bn || e !== null && e.dependencies !== null && lr(e.dependencies) ? (typeof h == "function" && (Gs(
        t,
        n,
        h,
        a
      ), M = t.memoizedState), (L = Bn || Nd(
        t,
        n,
        L,
        a,
        O,
        M,
        E
      ) || e !== null && e.dependencies !== null && lr(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = E, a = L) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Rr(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = pa(
      t,
      e.child,
      null,
      i
    ), t.child = pa(
      t,
      null,
      n,
      i
    )) : ot(e, t, n, i), t.memoizedState = u.state, e = t.child) : e = pn(
      e,
      t,
      i
    ), e;
  }
  function Vd(e, t, n, a) {
    return fa(), t.flags |= 256, ot(e, t, n, a), t.child;
  }
  var Ks = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qs(e) {
    return { baseLanes: e, cachePool: Mf() };
  }
  function Zs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Lt), e;
  }
  function Kd(e, t, n) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (i ? Yn(t) : kn(), (e = Be) ? (e = P0(
          e,
          Vt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: zn !== null ? { id: nn, overflow: an } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Tf(e), n.return = t, t.child = n, ut = t, Be = null)) : e = null, e === null) throw jn(t);
        return Oo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = a.children;
      return a = a.fallback, i ? (kn(), i = t.mode, h = Tr(
        { mode: "hidden", children: h },
        i
      ), a = ca(
        a,
        i,
        n,
        null
      ), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = Qs(n), a.childLanes = Zs(
        e,
        f,
        n
      ), t.memoizedState = Ks, Il(null, a)) : (Yn(t), Js(t, h));
    }
    var E = e.memoizedState;
    if (E !== null && (h = E.dehydrated, h !== null)) {
      if (u)
        t.flags & 256 ? (Yn(t), t.flags &= -257, t = $s(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (kn(), t.child = e.child, t.flags |= 128, t = null) : (kn(), h = a.fallback, i = t.mode, a = Tr(
          { mode: "visible", children: a.children },
          i
        ), h = ca(
          h,
          i,
          n,
          null
        ), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, pa(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = Qs(n), a.childLanes = Zs(
          e,
          f,
          n
        ), t.memoizedState = Ks, t = Il(null, a));
      else if (Yn(t), Oo(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(c(419)), a.stack = "", a.digest = f, Gl({ value: a, source: null, stack: null }), t = $s(
          e,
          t,
          n
        );
      } else if (Pe || Ja(e, t, n, !1), f = (n & e.childLanes) !== 0, Pe || f) {
        if (f = je, f !== null && (a = Oc(f, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, oa(e, a), wt(f, e, a), Xs;
        _o(h) || Mr(), t = $s(
          e,
          t,
          n
        );
      } else
        _o(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, Be = Qt(
          h.nextSibling
        ), ut = t, Se = !0, Ln = null, Vt = !1, e !== null && Cf(t, e), t = Js(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (kn(), h = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = fn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? h = fn(
      _,
      h
    ) : (h = ca(
      h,
      i,
      n,
      null
    ), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, Il(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = Qs(n) : (i = h.cachePool, i !== null ? (E = We._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Mf(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: i
    }), a.memoizedState = h, a.childLanes = Zs(
      e,
      f,
      n
    ), t.memoizedState = Ks, Il(e.child, a)) : (Yn(t), n = e.child, e = n.sibling, n = fn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Js(e, t) {
    return t = Tr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Tr(e, t) {
    return e = Dt(22, e, null, t), e.lanes = 0, e;
  }
  function $s(e, t, n) {
    return pa(t, e.child, null, n), e = Js(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), cs(e.return, t, n);
  }
  function Fs(e, t, n, a, i, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: i,
      treeForkCount: u
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = i, f.treeForkCount = u);
  }
  function Zd(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = $e.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, K($e, f), ot(e, t, a, n), a = Se ? ql : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Qd(e, n, t);
        else if (e.tag === 19)
          Qd(e, n, t);
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
        for (n = t.child, i = null; n !== null; )
          e = n.alternate, e !== null && dr(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Fs(
          t,
          !1,
          i,
          n,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (e = i.alternate, e !== null && dr(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Fs(
          t,
          !0,
          n,
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
  function pn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Kn |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ja(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = fn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = fn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ws(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && lr(e)));
  }
  function _y(e, t, n) {
    switch (t.tag) {
      case 3:
        te(t, t.stateNode.containerInfo), Hn(t, We, e.memoizedState.cache), fa();
        break;
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        te(t, t.stateNode.containerInfo);
        break;
      case 10:
        Hn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, ws(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Yn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Kd(e, t, n) : (Yn(t), e = pn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Ja(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return Zd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K($e, $e.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, qd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Hn(t, We, e.memoizedState.cache);
    }
    return pn(e, t, n);
  }
  function Jd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!Ws(e, n) && (t.flags & 128) === 0)
          return Pe = !1, _y(
            e,
            t,
            n
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, Se && (t.flags & 1048576) !== 0 && Af(t, ql, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = ga(t.elementType), t.type = e, typeof e == "function")
            ns(e) ? (a = ba(e, a), t.tag = 1, t = Xd(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Vs(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === W) {
                t.tag = 11, t = jd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === ae) {
                t.tag = 14, t = Hd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Xe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Vs(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = ba(
          a,
          t.pendingProps
        ), Xd(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (te(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, ps(e, t), Zl(t, a, null, n);
          var f = t.memoizedState;
          if (a = f.cache, Hn(t, We, a), a !== u.cache && fs(
            t,
            [We],
            n,
            !0
          ), Ql(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Vd(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Yt(
                Error(c(424)),
                t
              ), Gl(i), t = Vd(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Be = Qt(e.firstChild), ut = t, Se = !0, Ln = null, Vt = !0, n = qf(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (fa(), a === i) {
              t = pn(
                e,
                t,
                n
              );
              break e;
            }
            ot(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Rr(e, t), e === null ? (n = im(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Se || (n = t.type, e = t.pendingProps, a = Gr(
          J.current
        ).createElement(n), a[rt] = t, a[yt] = e, ct(a, n, e), at(a), t.stateNode = a) : t.memoizedState = im(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ft(t), e === null && Se && (a = t.stateNode = nm(
          t.type,
          t.pendingProps,
          J.current
        ), ut = t, Vt = !0, i = Be, Fn(t.type) ? (Do = i, Be = Qt(a.firstChild)) : Be = i), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), Rr(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((i = a = Be) && (a = ip(
          a,
          t.type,
          t.pendingProps,
          Vt
        ), a !== null ? (t.stateNode = a, ut = t, Be = Qt(a.firstChild), Vt = !1, i = !0) : i = !1), i || jn(t)), Ft(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, Ao(i, u) ? a = null : f !== null && Ao(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = Ts(
          e,
          t,
          Ey,
          null,
          null,
          n
        ), mi._currentValue = i), Rr(e, t), ot(e, t, a, n), t.child;
      case 6:
        return e === null && Se && ((e = n = Be) && (n = rp(
          n,
          t.pendingProps,
          Vt
        ), n !== null ? (t.stateNode = n, ut = t, Be = null, e = !0) : e = !1), e || jn(t)), null;
      case 13:
        return Kd(e, t, n);
      case 4:
        return te(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = pa(
          t,
          null,
          a,
          n
        ) : ot(e, t, a, n), t.child;
      case 11:
        return jd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return ot(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, Hn(t, t.type, a.value), ot(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, ma(t), i = st(i), a = a(i), t.flags |= 1, ot(e, t, a, n), t.child;
      case 14:
        return Hd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Bd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Zd(e, t, n);
      case 31:
        return Ny(e, t, n);
      case 22:
        return qd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ma(t), a = st(We), e === null ? (i = hs(), i === null && (i = je, u = ds(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), t.memoizedState = { parent: a, cache: i }, ys(t), Hn(t, We, i)) : ((e.lanes & n) !== 0 && (ps(e, t), Zl(t, null, null, n), Ql()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), Hn(t, We, a)) : (a = u.cache, Hn(t, We, a), a !== i.cache && fs(
          t,
          [We],
          n,
          !0
        ))), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function vn(e) {
    e.flags |= 4;
  }
  function Is(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (S0()) e.flags |= 8192;
        else
          throw ya = sr, gs;
    } else e.flags &= -16777217;
  }
  function $d(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !cm(t))
      if (S0()) e.flags |= 8192;
      else
        throw ya = sr, gs;
  }
  function xr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Cc() : 536870912, e.lanes |= t, rl |= t);
  }
  function Pl(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
  }
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Oy(e, t, n) {
    var a = t.pendingProps;
    switch (rs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return qe(t), null;
      case 1:
        return qe(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), hn(We), he(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Za(t) ? vn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), qe(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (vn(t), u !== null ? (qe(t), $d(t, u)) : (qe(t), Is(
          t,
          i,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (vn(t), qe(t), $d(t, u)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && vn(t), qe(t), Is(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (Oa(t), n = J.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && vn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return qe(t), null;
          }
          e = Z.current, Za(t) ? Nf(t) : (e = nm(i, a, n), t.stateNode = e, vn(t));
        }
        return qe(t), null;
      case 5:
        if (Oa(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && vn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return qe(t), null;
          }
          if (u = Z.current, Za(t))
            Nf(t);
          else {
            var f = Gr(
              J.current
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
            u[rt] = t, u[yt] = a;
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
            a && vn(t);
          }
        }
        return qe(t), Is(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && vn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = J.current, Za(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = ut, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[rt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || K0(e.nodeValue, n)), e || jn(t, !0);
          } else
            e = Gr(e).createTextNode(
              a
            ), e[rt] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Za(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[rt] = t;
            } else
              fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = !1;
          } else
            n = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return qe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Za(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[rt] = t;
            } else
              fa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), i = !1;
          } else
            i = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Mt(t), t) : (Mt(t), null);
        }
        return Mt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), xr(t, t.updateQueue), qe(t), null);
      case 4:
        return he(), e === null && So(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return hn(t.type), qe(t), null;
      case 19:
        if (j($e), a = t.memoizedState, a === null) return qe(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) Pl(a, !1);
          else {
            if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = dr(e), u !== null) {
                  for (t.flags |= 128, Pl(a, !1), e = u.updateQueue, t.updateQueue = e, xr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Rf(n, e), n = n.sibling;
                  return K(
                    $e,
                    $e.current & 1 | 2
                  ), Se && dn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ct() > Or && (t.flags |= 128, i = !0, Pl(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = dr(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, xr(t, e), Pl(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Se)
                return qe(t), null;
            } else
              2 * Ct() - a.renderingStartTime > Or && n !== 536870912 && (t.flags |= 128, i = !0, Pl(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ct(), e.sibling = null, n = $e.current, K(
          $e,
          i ? n & 1 | 2 : n & 1
        ), Se && dn(t, a.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return Mt(t), Ss(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), n = t.updateQueue, n !== null && xr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && j(ha), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), hn(We), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Dy(e, t) {
    switch (rs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return hn(We), he(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Oa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Mt(t), t.alternate === null)
            throw Error(c(340));
          fa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Mt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          fa();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return j($e), null;
      case 4:
        return he(), null;
      case 10:
        return hn(t.type), null;
      case 22:
      case 23:
        return Mt(t), Ss(), e !== null && j(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return hn(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fd(e, t) {
    switch (rs(t), t.tag) {
      case 3:
        hn(We), he();
        break;
      case 26:
      case 27:
      case 5:
        Oa(t);
        break;
      case 4:
        he();
        break;
      case 31:
        t.memoizedState !== null && Mt(t);
        break;
      case 13:
        Mt(t);
        break;
      case 19:
        j($e);
        break;
      case 10:
        hn(t.type);
        break;
      case 22:
      case 23:
        Mt(t), Ss(), e !== null && j(ha);
        break;
      case 24:
        hn(We);
    }
  }
  function ei(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (h) {
      De(t, t.return, h);
    }
  }
  function Xn(e, t, n) {
    try {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst, h = f.destroy;
            if (h !== void 0) {
              f.destroy = void 0, i = t;
              var E = n, _ = h;
              try {
                _();
              } catch (L) {
                De(
                  i,
                  E,
                  L
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (L) {
      De(t, t.return, L);
    }
  }
  function Wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Yf(t, n);
      } catch (a) {
        De(e, e.return, a);
      }
    }
  }
  function Id(e, t, n) {
    n.props = ba(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      De(e, t, a);
    }
  }
  function ti(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
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
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (i) {
      De(e, t, i);
    }
  }
  function ln(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (i) {
          De(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          De(e, t, i);
        }
      else n.current = null;
  }
  function Pd(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function Ps(e, t, n) {
    try {
      var a = e.stateNode;
      Py(a, e.type, n, t), a[yt] = t;
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function e0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fn(e.type) || e.tag === 4;
  }
  function eo(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || e0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function to(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = on));
    else if (a !== 4 && (a === 27 && Fn(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (to(e, t, n), e = e.sibling; e !== null; )
        to(e, t, n), e = e.sibling;
  }
  function Ar(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Fn(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (Ar(e, t, n), e = e.sibling; e !== null; )
        Ar(e, t, n), e = e.sibling;
  }
  function t0(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ct(t, a, n), t[rt] = e, t[yt] = n;
    } catch (u) {
      De(e, e.return, u);
    }
  }
  var bn = !1, et = !1, no = !1, n0 = typeof WeakSet == "function" ? WeakSet : Set, lt = null;
  function Uy(e, t) {
    if (e = e.containerInfo, To = Zr, e = hf(e), $u(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var i = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              n.nodeType, u.nodeType;
            } catch {
              n = null;
              break e;
            }
            var f = 0, h = -1, E = -1, _ = 0, L = 0, B = e, O = null;
            t: for (; ; ) {
              for (var M; B !== n || i !== 0 && B.nodeType !== 3 || (h = f + i), B !== u || a !== 0 && B.nodeType !== 3 || (E = f + a), B.nodeType === 3 && (f += B.nodeValue.length), (M = B.firstChild) !== null; )
                O = B, B = M;
              for (; ; ) {
                if (B === e) break t;
                if (O === n && ++_ === i && (h = f), O === u && ++L === a && (E = f), (M = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = M;
            }
            n = h === -1 || E === -1 ? null : { start: h, end: E };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (xo = { focusedElem: e, selectionRange: n }, Zr = !1, lt = t; lt !== null; )
      if (t = lt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, lt = e;
      else
        for (; lt !== null; ) {
          switch (t = lt, u = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  i = e[n], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                e = void 0, n = t, i = u.memoizedProps, u = u.memoizedState, a = n.stateNode;
                try {
                  var $ = ba(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    $,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ne) {
                  De(
                    n,
                    n.return,
                    ne
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  No(e);
                else if (n === 1)
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
            e.return = t.return, lt = e;
            break;
          }
          lt = t.return;
        }
  }
  function a0(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Sn(e, n), a & 4 && ei(5, n);
        break;
      case 1:
        if (Sn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              De(n, n.return, f);
            }
          else {
            var i = ba(
              n.type,
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
              De(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && Wd(n), a & 512 && ti(n, n.return);
        break;
      case 3:
        if (Sn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Yf(e, t);
          } catch (f) {
            De(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && t0(n);
      case 26:
      case 5:
        Sn(e, n), t === null && a & 4 && Pd(n), a & 512 && ti(n, n.return);
        break;
      case 12:
        Sn(e, n);
        break;
      case 31:
        Sn(e, n), a & 4 && r0(e, n);
        break;
      case 13:
        Sn(e, n), a & 4 && u0(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Yy.bind(
          null,
          n
        ), up(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || bn, !a) {
          t = t !== null && t.memoizedState !== null || et, i = bn;
          var u = et;
          bn = a, (et = t) && !u ? wn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Sn(e, n), bn = i, et = u;
        }
        break;
      case 30:
        break;
      default:
        Sn(e, n);
    }
  }
  function l0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, l0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Uu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, vt = !1;
  function En(e, t, n) {
    for (n = n.child; n !== null; )
      i0(e, t, n), n = n.sibling;
  }
  function i0(e, t, n) {
    if (Nt && typeof Nt.onCommitFiberUnmount == "function")
      try {
        Nt.onCommitFiberUnmount(xl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        et || ln(n, t), En(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || ln(n, t);
        var a = Ye, i = vt;
        Fn(n.type) && (Ye = n.stateNode, vt = !1), En(
          e,
          t,
          n
        ), ci(n.stateNode), Ye = a, vt = i;
        break;
      case 5:
        et || ln(n, t);
      case 6:
        if (a = Ye, i = vt, Ye = null, En(
          e,
          t,
          n
        ), Ye = a, vt = i, Ye !== null)
          if (vt)
            try {
              (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(n.stateNode);
            } catch (u) {
              De(
                n,
                t,
                u
              );
            }
          else
            try {
              Ye.removeChild(n.stateNode);
            } catch (u) {
              De(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Ye !== null && (vt ? (e = Ye, W0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), hl(e)) : W0(Ye, n.stateNode));
        break;
      case 4:
        a = Ye, i = vt, Ye = n.stateNode.containerInfo, vt = !0, En(
          e,
          t,
          n
        ), Ye = a, vt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xn(2, n, t), et || Xn(4, n, t), En(
          e,
          t,
          n
        );
        break;
      case 1:
        et || (ln(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Id(
          n,
          t,
          a
        )), En(
          e,
          t,
          n
        );
        break;
      case 21:
        En(
          e,
          t,
          n
        );
        break;
      case 22:
        et = (a = et) || n.memoizedState !== null, En(
          e,
          t,
          n
        ), et = a;
        break;
      default:
        En(
          e,
          t,
          n
        );
    }
  }
  function r0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        hl(e);
      } catch (n) {
        De(t, t.return, n);
      }
    }
  }
  function u0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        hl(e);
      } catch (n) {
        De(t, t.return, n);
      }
  }
  function My(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new n0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new n0()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Cr(e, t) {
    var n = My(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = ky.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], u = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Fn(h.type)) {
                Ye = h.stateNode, vt = !1;
                break e;
              }
              break;
            case 5:
              Ye = h.stateNode, vt = !1;
              break e;
            case 3:
            case 4:
              Ye = h.stateNode.containerInfo, vt = !0;
              break e;
          }
          h = h.return;
        }
        if (Ye === null) throw Error(c(160));
        i0(u, f, i), Ye = null, vt = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        s0(t, e), t = t.sibling;
  }
  var It = null;
  function s0(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        bt(t, e), Et(e), a & 4 && (Xn(3, e, e.return), ei(3, e), Xn(5, e, e.return));
        break;
      case 1:
        bt(t, e), Et(e), a & 512 && (et || n === null || ln(n, n.return)), a & 64 && bn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = It;
        if (bt(t, e), Et(e), a & 512 && (et || n === null || ln(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Nl] || u[rt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), ct(u, a, n), u[rt] = e, at(u), a = u;
                      break e;
                    case "link":
                      var f = sm(
                        "link",
                        "href",
                        i
                      ).get(a + (n.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (u = f[h], u.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && u.getAttribute("rel") === (n.rel == null ? null : n.rel) && u.getAttribute("title") === (n.title == null ? null : n.title) && u.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      u = i.createElement(a), ct(u, a, n), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = sm(
                        "meta",
                        "content",
                        i
                      ).get(a + (n.content || ""))) {
                        for (h = 0; h < f.length; h++)
                          if (u = f[h], u.getAttribute("content") === (n.content == null ? null : "" + n.content) && u.getAttribute("name") === (n.name == null ? null : n.name) && u.getAttribute("property") === (n.property == null ? null : n.property) && u.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && u.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      u = i.createElement(a), ct(u, a, n), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  u[rt] = e, at(u), a = u;
                }
                e.stateNode = a;
              } else
                om(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = um(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? om(
              i,
              e.type,
              e.stateNode
            ) : um(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && Ps(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        bt(t, e), Et(e), a & 512 && (et || n === null || ln(n, n.return)), n !== null && a & 4 && Ps(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (bt(t, e), Et(e), a & 512 && (et || n === null || ln(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Ha(i, "");
          } catch ($) {
            De(e, e.return, $);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, Ps(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (no = !0);
        break;
      case 6:
        if (bt(t, e), Et(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch ($) {
            De(e, e.return, $);
          }
        }
        break;
      case 3:
        if (Xr = null, i = It, It = Yr(t.containerInfo), bt(t, e), It = i, Et(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            hl(t.containerInfo);
          } catch ($) {
            De(e, e.return, $);
          }
        no && (no = !1, o0(e));
        break;
      case 4:
        a = It, It = Yr(
          e.stateNode.containerInfo
        ), bt(t, e), Et(e), It = a;
        break;
      case 12:
        bt(t, e), Et(e);
        break;
      case 31:
        bt(t, e), Et(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Cr(e, a)));
        break;
      case 13:
        bt(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (_r = Ct()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Cr(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = bn, L = et;
        if (bn = _ || i, et = L || E, bt(t, e), et = L, bn = _, Et(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || bn || et || Ea(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                E = n = t;
                try {
                  if (u = E.stateNode, i)
                    f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    h = E.stateNode;
                    var B = E.memoizedProps.style, O = B != null && B.hasOwnProperty("display") ? B.display : null;
                    h.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch ($) {
                  De(E, E.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch ($) {
                  De(E, E.return, $);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var M = E.stateNode;
                  i ? I0(M, !0) : I0(E.stateNode, !1);
                } catch ($) {
                  De(E, E.return, $);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Cr(e, n))));
        break;
      case 19:
        bt(t, e), Et(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Cr(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        bt(t, e), Et(e);
    }
  }
  function Et(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (e0(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, u = eo(e);
            Ar(e, u, i);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (Ha(f, ""), n.flags &= -33);
            var h = eo(e);
            Ar(e, h, f);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, _ = eo(e);
            to(
              e,
              _,
              E
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (L) {
        De(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function o0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        o0(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Sn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        a0(e, t.alternate, t), t = t.sibling;
  }
  function Ea(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xn(4, t, t.return), Ea(t);
          break;
        case 1:
          ln(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Id(
            t,
            t.return,
            n
          ), Ea(t);
          break;
        case 27:
          ci(t.stateNode);
        case 26:
        case 5:
          ln(t, t.return), Ea(t);
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
  function wn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          wn(
            i,
            u,
            n
          ), ei(4, u);
          break;
        case 1:
          if (wn(
            i,
            u,
            n
          ), a = u, i = a.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (_) {
              De(a, a.return, _);
            }
          if (a = u, i = a.updateQueue, i !== null) {
            var h = a.stateNode;
            try {
              var E = i.shared.hiddenCallbacks;
              if (E !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < E.length; i++)
                  Gf(E[i], h);
            } catch (_) {
              De(a, a.return, _);
            }
          }
          n && f & 64 && Wd(u), ti(u, u.return);
          break;
        case 27:
          t0(u);
        case 26:
        case 5:
          wn(
            i,
            u,
            n
          ), n && a === null && f & 4 && Pd(u), ti(u, u.return);
          break;
        case 12:
          wn(
            i,
            u,
            n
          );
          break;
        case 31:
          wn(
            i,
            u,
            n
          ), n && f & 4 && r0(i, u);
          break;
        case 13:
          wn(
            i,
            u,
            n
          ), n && f & 4 && u0(i, u);
          break;
        case 22:
          u.memoizedState === null && wn(
            i,
            u,
            n
          ), ti(u, u.return);
          break;
        case 30:
          break;
        default:
          wn(
            i,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ao(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Yl(n));
  }
  function lo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yl(e));
  }
  function Pt(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        c0(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function c0(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          e,
          t,
          n,
          a
        ), i & 2048 && ei(9, t);
        break;
      case 1:
        Pt(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        Pt(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yl(e)));
        break;
      case 12:
        if (i & 2048) {
          Pt(
            e,
            t,
            n,
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
          } catch (E) {
            De(t, t.return, E);
          }
        } else
          Pt(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        Pt(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        Pt(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Pt(
          e,
          t,
          n,
          a
        ) : ni(e, t) : u._visibility & 2 ? Pt(
          e,
          t,
          n,
          a
        ) : (u._visibility |= 2, al(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && ao(f, t);
        break;
      case 24:
        Pt(
          e,
          t,
          n,
          a
        ), i & 2048 && lo(t.alternate, t);
        break;
      default:
        Pt(
          e,
          t,
          n,
          a
        );
    }
  }
  function al(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, h = n, E = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          al(
            u,
            f,
            h,
            E,
            i
          ), ei(8, f);
          break;
        case 23:
          break;
        case 22:
          var L = f.stateNode;
          f.memoizedState !== null ? L._visibility & 2 ? al(
            u,
            f,
            h,
            E,
            i
          ) : ni(
            u,
            f
          ) : (L._visibility |= 2, al(
            u,
            f,
            h,
            E,
            i
          )), i && _ & 2048 && ao(
            f.alternate,
            f
          );
          break;
        case 24:
          al(
            u,
            f,
            h,
            E,
            i
          ), i && _ & 2048 && lo(f.alternate, f);
          break;
        default:
          al(
            u,
            f,
            h,
            E,
            i
          );
      }
      t = t.sibling;
    }
  }
  function ni(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            ni(n, a), i & 2048 && ao(
              a.alternate,
              a
            );
            break;
          case 24:
            ni(n, a), i & 2048 && lo(a.alternate, a);
            break;
          default:
            ni(n, a);
        }
        t = t.sibling;
      }
  }
  var ai = 8192;
  function ll(e, t, n) {
    if (e.subtreeFlags & ai)
      for (e = e.child; e !== null; )
        f0(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function f0(e, t, n) {
    switch (e.tag) {
      case 26:
        ll(
          e,
          t,
          n
        ), e.flags & ai && e.memoizedState !== null && bp(
          n,
          It,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ll(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = It;
        It = Yr(e.stateNode.containerInfo), ll(
          e,
          t,
          n
        ), It = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ai, ai = 16777216, ll(
          e,
          t,
          n
        ), ai = a) : ll(
          e,
          t,
          n
        ));
        break;
      default:
        ll(
          e,
          t,
          n
        );
    }
  }
  function d0(e) {
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
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          lt = a, h0(
            a,
            e
          );
        }
      d0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        m0(e), e = e.sibling;
  }
  function m0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        li(e), e.flags & 2048 && Xn(9, e, e.return);
        break;
      case 3:
        li(e);
        break;
      case 12:
        li(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Nr(e)) : li(e);
        break;
      default:
        li(e);
    }
  }
  function Nr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          lt = a, h0(
            a,
            e
          );
        }
      d0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, t, t.return), Nr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Nr(t));
          break;
        default:
          Nr(t);
      }
      e = e.sibling;
    }
  }
  function h0(e, t) {
    for (; lt !== null; ) {
      var n = lt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Xn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Yl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, lt = a;
      else
        e: for (n = e; lt !== null; ) {
          a = lt;
          var i = a.sibling, u = a.return;
          if (l0(a), a === n) {
            lt = null;
            break e;
          }
          if (i !== null) {
            i.return = u, lt = i;
            break e;
          }
          lt = u;
        }
    }
  }
  var zy = {
    getCacheForType: function(e) {
      var t = st(We), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return st(We).controller.signal;
    }
  }, Ly = typeof WeakMap == "function" ? WeakMap : Map, Ce = 0, je = null, ge = null, ve = 0, Oe = 0, zt = null, Vn = !1, il = !1, io = !1, Rn = 0, Ke = 0, Kn = 0, Sa = 0, ro = 0, Lt = 0, rl = 0, ii = null, St = null, uo = !1, _r = 0, g0 = 0, Or = 1 / 0, Dr = null, Qn = null, tt = 0, Zn = null, ul = null, Tn = 0, so = 0, oo = null, y0 = null, ri = 0, co = null;
  function jt() {
    return (Ce & 2) !== 0 && ve !== 0 ? ve & -ve : Y.T !== null ? po() : Dc();
  }
  function p0() {
    if (Lt === 0)
      if ((ve & 536870912) === 0 || Se) {
        var e = qi;
        qi <<= 1, (qi & 3932160) === 0 && (qi = 262144), Lt = e;
      } else Lt = 536870912;
    return e = Ut.current, e !== null && (e.flags |= 32), Lt;
  }
  function wt(e, t, n) {
    (e === je && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (sl(e, 0), Jn(
      e,
      ve,
      Lt,
      !1
    )), Cl(e, n), ((Ce & 2) === 0 || e !== je) && (e === je && ((Ce & 2) === 0 && (Sa |= n), Ke === 4 && Jn(
      e,
      ve,
      Lt,
      !1
    )), rn(e));
  }
  function v0(e, t, n) {
    if ((Ce & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Al(e, t), i = a ? By(e, t) : mo(e, t, !0), u = a;
    do {
      if (i === 0) {
        il && !a && Jn(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !jy(n)) {
          i = mo(e, t, !1), u = !1;
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
              var h = e;
              i = ii;
              var E = h.current.memoizedState.isDehydrated;
              if (E && (sl(h, f).flags |= 256), f = mo(
                h,
                f,
                !1
              ), f !== 2) {
                if (io && !E) {
                  h.errorRecoveryDisabledLanes |= u, Sa |= u, i = 4;
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
          sl(e, 0), Jn(e, t, 0, !0);
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
              Jn(
                a,
                t,
                Lt,
                !Vn
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
          if ((t & 62914560) === t && (i = _r + 300 - Ct(), 10 < i)) {
            if (Jn(
              a,
              t,
              Lt,
              !Vn
            ), Yi(a, 0, !0) !== 0) break e;
            Tn = t, a.timeoutHandle = $0(
              b0.bind(
                null,
                a,
                n,
                St,
                Dr,
                uo,
                t,
                Lt,
                Sa,
                rl,
                Vn,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          b0(
            a,
            n,
            St,
            Dr,
            uo,
            t,
            Lt,
            Sa,
            rl,
            Vn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    rn(e);
  }
  function b0(e, t, n, a, i, u, f, h, E, _, L, B, O, M) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: on
      }, f0(
        t,
        u,
        B
      );
      var $ = (u & 62914560) === u ? _r - Ct() : (u & 4194048) === u ? g0 - Ct() : 0;
      if ($ = Ep(
        B,
        $
      ), $ !== null) {
        Tn = u, e.cancelPendingCommit = $(
          C0.bind(
            null,
            e,
            t,
            u,
            n,
            a,
            i,
            f,
            h,
            E,
            L,
            B,
            null,
            O,
            M
          )
        ), Jn(e, u, f, !_);
        return;
      }
    }
    C0(
      e,
      t,
      u,
      n,
      a,
      i,
      f,
      h,
      E
    );
  }
  function jy(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!Ot(u(), i)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
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
  function Jn(e, t, n, a) {
    t &= ~ro, t &= ~Sa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - _t(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    n !== 0 && Nc(e, n, t);
  }
  function Ur() {
    return (Ce & 6) === 0 ? (ui(0), !1) : !0;
  }
  function fo() {
    if (ge !== null) {
      if (Oe === 0)
        var e = ge.return;
      else
        e = ge, mn = da = null, Cs(e), Ia = null, Xl = 0, e = ge;
      for (; e !== null; )
        Fd(e.alternate, e), e = e.return;
      ge = null;
    }
  }
  function sl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, np(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Tn = 0, fo(), je = e, ge = n = fn(e.current, null), ve = t, Oe = 0, zt = null, Vn = !1, il = Al(e, t), io = !1, rl = Lt = ro = Sa = Kn = Ke = 0, St = ii = null, uo = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - _t(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return Rn = t, Pi(), n;
  }
  function E0(e, t) {
    se = null, Y.H = Wl, t === Wa || t === ur ? (t = jf(), Oe = 3) : t === gs ? (t = jf(), Oe = 4) : Oe = t === Xs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, zt = t, ge === null && (Ke = 1, Sr(
      e,
      Yt(t, e.current)
    ));
  }
  function S0() {
    var e = Ut.current;
    return e === null ? !0 : (ve & 4194048) === ve ? Kt === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === Kt : !1;
  }
  function w0() {
    var e = Y.H;
    return Y.H = Wl, e === null ? Wl : e;
  }
  function R0() {
    var e = Y.A;
    return Y.A = zy, e;
  }
  function Mr() {
    Ke = 4, Vn || (ve & 4194048) !== ve && Ut.current !== null || (il = !0), (Kn & 134217727) === 0 && (Sa & 134217727) === 0 || je === null || Jn(
      je,
      ve,
      Lt,
      !1
    );
  }
  function mo(e, t, n) {
    var a = Ce;
    Ce |= 2;
    var i = w0(), u = R0();
    (je !== e || ve !== t) && (Dr = null, sl(e, t)), t = !1;
    var f = Ke;
    e: do
      try {
        if (Oe !== 0 && ge !== null) {
          var h = ge, E = zt;
          switch (Oe) {
            case 8:
              fo(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ut.current === null && (t = !0);
              var _ = Oe;
              if (Oe = 0, zt = null, ol(e, h, E, _), n && il) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = Oe, Oe = 0, zt = null, ol(e, h, E, _);
          }
        }
        Hy(), f = Ke;
        break;
      } catch (L) {
        E0(e, L);
      }
    while (!0);
    return t && e.shellSuspendCounter++, mn = da = null, Ce = a, Y.H = i, Y.A = u, ge === null && (je = null, ve = 0, Pi()), f;
  }
  function Hy() {
    for (; ge !== null; ) T0(ge);
  }
  function By(e, t) {
    var n = Ce;
    Ce |= 2;
    var a = w0(), i = R0();
    je !== e || ve !== t ? (Dr = null, Or = Ct() + 500, sl(e, t)) : il = Al(
      e,
      t
    );
    e: do
      try {
        if (Oe !== 0 && ge !== null) {
          t = ge;
          var u = zt;
          t: switch (Oe) {
            case 1:
              Oe = 0, zt = null, ol(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (zf(u)) {
                Oe = 0, zt = null, x0(t);
                break;
              }
              t = function() {
                Oe !== 2 && Oe !== 9 || je !== e || (Oe = 7), rn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              zf(u) ? (Oe = 0, zt = null, x0(t)) : (Oe = 0, zt = null, ol(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (ge.tag) {
                case 26:
                  f = ge.memoizedState;
                case 5:
                case 27:
                  var h = ge;
                  if (f ? cm(f) : h.stateNode.complete) {
                    Oe = 0, zt = null;
                    var E = h.sibling;
                    if (E !== null) ge = E;
                    else {
                      var _ = h.return;
                      _ !== null ? (ge = _, zr(_)) : ge = null;
                    }
                    break t;
                  }
              }
              Oe = 0, zt = null, ol(e, t, u, 5);
              break;
            case 6:
              Oe = 0, zt = null, ol(e, t, u, 6);
              break;
            case 8:
              fo(), Ke = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        qy();
        break;
      } catch (L) {
        E0(e, L);
      }
    while (!0);
    return mn = da = null, Y.H = a, Y.A = i, Ce = n, ge !== null ? 0 : (je = null, ve = 0, Pi(), Ke);
  }
  function qy() {
    for (; ge !== null && !sg(); )
      T0(ge);
  }
  function T0(e) {
    var t = Jd(e.alternate, e, Rn);
    e.memoizedProps = e.pendingProps, t === null ? zr(e) : ge = t;
  }
  function x0(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = kd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ve
        );
        break;
      case 11:
        t = kd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ve
        );
        break;
      case 5:
        Cs(t);
      default:
        Fd(n, t), t = ge = Rf(t, Rn), t = Jd(n, t, Rn);
    }
    e.memoizedProps = e.pendingProps, t === null ? zr(e) : ge = t;
  }
  function ol(e, t, n, a) {
    mn = da = null, Cs(t), Ia = null, Xl = 0;
    var i = t.return;
    try {
      if (Cy(
        e,
        i,
        t,
        n,
        ve
      )) {
        Ke = 1, Sr(
          e,
          Yt(n, e.current)
        ), ge = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw ge = i, u;
      Ke = 1, Sr(
        e,
        Yt(n, e.current)
      ), ge = null;
      return;
    }
    t.flags & 32768 ? (Se || a === 1 ? e = !0 : il || (ve & 536870912) !== 0 ? e = !1 : (Vn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Ut.current, a !== null && a.tag === 13 && (a.flags |= 16384))), A0(t, e)) : zr(t);
  }
  function zr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        A0(
          t,
          Vn
        );
        return;
      }
      e = t.return;
      var n = Oy(
        t.alternate,
        t,
        Rn
      );
      if (n !== null) {
        ge = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    Ke === 0 && (Ke = 5);
  }
  function A0(e, t) {
    do {
      var n = Dy(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ge = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ge = e;
        return;
      }
      ge = e = n;
    } while (e !== null);
    Ke = 6, ge = null;
  }
  function C0(e, t, n, a, i, u, f, h, E) {
    e.cancelPendingCommit = null;
    do
      Lr();
    while (tt !== 0);
    if ((Ce & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= es, vg(
        e,
        n,
        u,
        f,
        h,
        E
      ), e === je && (ge = je = null, ve = 0), ul = t, Zn = e, Tn = n, so = u, oo = i, y0 = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Xy(Hi, function() {
        return U0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = Y.T, Y.T = null, i = X.p, X.p = 2, f = Ce, Ce |= 4;
        try {
          Uy(e, t, n);
        } finally {
          Ce = f, X.p = i, Y.T = a;
        }
      }
      tt = 1, N0(), _0(), O0();
    }
  }
  function N0() {
    if (tt === 1) {
      tt = 0;
      var e = Zn, t = ul, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = Y.T, Y.T = null;
        var a = X.p;
        X.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          s0(t, e);
          var u = xo, f = hf(e.containerInfo), h = u.focusedElem, E = u.selectionRange;
          if (f !== h && h && h.ownerDocument && mf(
            h.ownerDocument.documentElement,
            h
          )) {
            if (E !== null && $u(h)) {
              var _ = E.start, L = E.end;
              if (L === void 0 && (L = _), "selectionStart" in h)
                h.selectionStart = _, h.selectionEnd = Math.min(
                  L,
                  h.value.length
                );
              else {
                var B = h.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), $ = h.textContent.length, ne = Math.min(E.start, $), ze = E.end === void 0 ? ne : Math.min(E.end, $);
                  !M.extend && ne > ze && (f = ze, ze = ne, ne = f);
                  var x = df(
                    h,
                    ne
                  ), w = df(
                    h,
                    ze
                  );
                  if (x && w && (M.rangeCount !== 1 || M.anchorNode !== x.node || M.anchorOffset !== x.offset || M.focusNode !== w.node || M.focusOffset !== w.offset)) {
                    var N = B.createRange();
                    N.setStart(x.node, x.offset), M.removeAllRanges(), ne > ze ? (M.addRange(N), M.extend(w.node, w.offset)) : (N.setEnd(w.node, w.offset), M.addRange(N));
                  }
                }
              }
            }
            for (B = [], M = h; M = M.parentNode; )
              M.nodeType === 1 && B.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < B.length; h++) {
              var H = B[h];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Zr = !!To, xo = To = null;
        } finally {
          Ce = i, X.p = a, Y.T = n;
        }
      }
      e.current = t, tt = 2;
    }
  }
  function _0() {
    if (tt === 2) {
      tt = 0;
      var e = Zn, t = ul, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = Y.T, Y.T = null;
        var a = X.p;
        X.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          a0(e, t.alternate, t);
        } finally {
          Ce = i, X.p = a, Y.T = n;
        }
      }
      tt = 3;
    }
  }
  function O0() {
    if (tt === 4 || tt === 3) {
      tt = 0, og();
      var e = Zn, t = ul, n = Tn, a = y0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0, ul = Zn = null, D0(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Qn = null), Ou(n), t = t.stateNode, Nt && typeof Nt.onCommitFiberRoot == "function")
        try {
          Nt.onCommitFiberRoot(
            xl,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = Y.T, i = X.p, X.p = 2, Y.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          Y.T = t, X.p = i;
        }
      }
      (Tn & 3) !== 0 && Lr(), rn(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === co ? ri++ : (ri = 0, co = e) : ri = 0, ui(0);
    }
  }
  function D0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yl(t)));
  }
  function Lr() {
    return N0(), _0(), O0(), U0();
  }
  function U0() {
    if (tt !== 5) return !1;
    var e = Zn, t = so;
    so = 0;
    var n = Ou(Tn), a = Y.T, i = X.p;
    try {
      X.p = 32 > n ? 32 : n, Y.T = null, n = oo, oo = null;
      var u = Zn, f = Tn;
      if (tt = 0, ul = Zn = null, Tn = 0, (Ce & 6) !== 0) throw Error(c(331));
      var h = Ce;
      if (Ce |= 4, m0(u.current), c0(
        u,
        u.current,
        f,
        n
      ), Ce = h, ui(0, !1), Nt && typeof Nt.onPostCommitFiberRoot == "function")
        try {
          Nt.onPostCommitFiberRoot(xl, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = i, Y.T = a, D0(e, t);
    }
  }
  function M0(e, t, n) {
    t = Yt(n, t), t = ks(e.stateNode, t, 2), e = Gn(e, t, 2), e !== null && (Cl(e, 2), rn(e));
  }
  function De(e, t, n) {
    if (e.tag === 3)
      M0(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          M0(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Qn === null || !Qn.has(a))) {
            e = Yt(n, e), n = zd(2), a = Gn(t, n, 2), a !== null && (Ld(
              n,
              a,
              t,
              e
            ), Cl(a, 2), rn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function ho(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Ly();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (io = !0, i.add(n), e = Gy.bind(null, e, t, n), t.then(e, e));
  }
  function Gy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, je === e && (ve & n) === n && (Ke === 4 || Ke === 3 && (ve & 62914560) === ve && 300 > Ct() - _r ? (Ce & 2) === 0 && sl(e, 0) : ro |= n, rl === ve && (rl = 0)), rn(e);
  }
  function z0(e, t) {
    t === 0 && (t = Cc()), e = oa(e, t), e !== null && (Cl(e, t), rn(e));
  }
  function Yy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), z0(e, n);
  }
  function ky(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
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
    a !== null && a.delete(t), z0(e, n);
  }
  function Xy(e, t) {
    return Au(e, t);
  }
  var jr = null, cl = null, go = !1, Hr = !1, yo = !1, $n = 0;
  function rn(e) {
    e !== cl && e.next === null && (cl === null ? jr = cl = e : cl = cl.next = e), Hr = !0, go || (go = !0, Ky());
  }
  function ui(e, t) {
    if (!yo && Hr) {
      yo = !0;
      do
        for (var n = !1, a = jr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, h = a.pingedLanes;
              u = (1 << 31 - _t(42 | e) + 1) - 1, u &= i & ~(f & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, B0(a, u));
          } else
            u = ve, u = Yi(
              a,
              a === je ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Al(a, u) || (n = !0, B0(a, u));
          a = a.next;
        }
      while (n);
      yo = !1;
    }
  }
  function Vy() {
    L0();
  }
  function L0() {
    Hr = go = !1;
    var e = 0;
    $n !== 0 && tp() && (e = $n);
    for (var t = Ct(), n = null, a = jr; a !== null; ) {
      var i = a.next, u = j0(a, t);
      u === 0 ? (a.next = null, n === null ? jr = i : n.next = i, i === null && (cl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (Hr = !0)), a = i;
    }
    tt !== 0 && tt !== 5 || ui(e), $n !== 0 && ($n = 0);
  }
  function j0(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - _t(u), h = 1 << f, E = i[f];
      E === -1 ? ((h & n) === 0 || (h & a) !== 0) && (i[f] = pg(h, t)) : E <= t && (e.expiredLanes |= h), u &= ~h;
    }
    if (t = je, n = ve, n = Yi(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Cu(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Al(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Cu(a), Ou(n)) {
        case 2:
        case 8:
          n = xc;
          break;
        case 32:
          n = Hi;
          break;
        case 268435456:
          n = Ac;
          break;
        default:
          n = Hi;
      }
      return a = H0.bind(null, e), n = Au(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Cu(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function H0(e, t) {
    if (tt !== 0 && tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Lr() && e.callbackNode !== n)
      return null;
    var a = ve;
    return a = Yi(
      e,
      e === je ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (v0(e, a, t), j0(e, Ct()), e.callbackNode != null && e.callbackNode === n ? H0.bind(null, e) : null);
  }
  function B0(e, t) {
    if (Lr()) return null;
    v0(e, t, !0);
  }
  function Ky() {
    ap(function() {
      (Ce & 6) !== 0 ? Au(
        Tc,
        Vy
      ) : L0();
    });
  }
  function po() {
    if ($n === 0) {
      var e = $a;
      e === 0 && (e = Bi, Bi <<= 1, (Bi & 261888) === 0 && (Bi = 256)), $n = e;
    }
    return $n;
  }
  function q0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ki("" + e);
  }
  function G0(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Qy(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var u = q0(
        (i[yt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[yt] || null) ? q0(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var h = new $i(
        "action",
        "action",
        null,
        a,
        i
      );
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if ($n !== 0) {
                  var E = f ? G0(i, f) : new FormData(i);
                  js(
                    n,
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
                typeof u == "function" && (h.preventDefault(), E = f ? G0(i, f) : new FormData(i), js(
                  n,
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
  for (var vo = 0; vo < Pu.length; vo++) {
    var bo = Pu[vo], Zy = bo.toLowerCase(), Jy = bo[0].toUpperCase() + bo.slice(1);
    Wt(
      Zy,
      "on" + Jy
    );
  }
  Wt(pf, "onAnimationEnd"), Wt(vf, "onAnimationIteration"), Wt(bf, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(cy, "onTransitionRun"), Wt(fy, "onTransitionStart"), Wt(dy, "onTransitionCancel"), Wt(Ef, "onTransitionEnd"), La("onMouseEnter", ["mouseout", "mouseover"]), La("onMouseLeave", ["mouseout", "mouseover"]), La("onPointerEnter", ["pointerout", "pointerover"]), La("onPointerLeave", ["pointerout", "pointerover"]), ia(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ia(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ia("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ia(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ia(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var si = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $y = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(si)
  );
  function Y0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], i = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var h = a[f], E = h.instance, _ = h.currentTarget;
            if (h = h.listener, E !== u && i.isPropagationStopped())
              break e;
            u = h, i.currentTarget = _;
            try {
              u(i);
            } catch (L) {
              Ii(L);
            }
            i.currentTarget = null, u = E;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (h = a[f], E = h.instance, _ = h.currentTarget, h = h.listener, E !== u && i.isPropagationStopped())
              break e;
            u = h, i.currentTarget = _;
            try {
              u(i);
            } catch (L) {
              Ii(L);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function ye(e, t) {
    var n = t[Du];
    n === void 0 && (n = t[Du] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (k0(t, e, 2, !1), n.add(a));
  }
  function Eo(e, t, n) {
    var a = 0;
    t && (a |= 4), k0(
      n,
      e,
      a,
      t
    );
  }
  var Br = "_reactListening" + Math.random().toString(36).slice(2);
  function So(e) {
    if (!e[Br]) {
      e[Br] = !0, zc.forEach(function(n) {
        n !== "selectionchange" && ($y.has(n) || Eo(n, !1, e), Eo(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Br] || (t[Br] = !0, Eo("selectionchange", !1, t));
    }
  }
  function k0(e, t, n, a) {
    switch (pm(t)) {
      case 2:
        var i = Rp;
        break;
      case 8:
        i = Tp;
        break;
      default:
        i = jo;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Gu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function wo(e, t, n, a, i) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var h = a.stateNode.containerInfo;
          if (h === i) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var E = f.tag;
              if ((E === 3 || E === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (f = Ua(h), f === null) return;
            if (E = f.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = u = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    Qc(function() {
      var _ = u, L = Bu(n), B = [];
      e: {
        var O = Sf.get(e);
        if (O !== void 0) {
          var M = $i, $ = e;
          switch (e) {
            case "keypress":
              if (Zi(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = kg;
              break;
            case "focusin":
              $ = "focus", M = Vu;
              break;
            case "focusout":
              $ = "blur", M = Vu;
              break;
            case "beforeblur":
            case "afterblur":
              M = Vu;
              break;
            case "click":
              if (n.button === 2) break e;
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
              M = Og;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Kg;
              break;
            case pf:
            case vf:
            case bf:
              M = Mg;
              break;
            case Ef:
              M = Zg;
              break;
            case "scroll":
            case "scrollend":
              M = Ng;
              break;
            case "wheel":
              M = $g;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Lg;
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
              M = Wg;
          }
          var ne = (t & 4) !== 0, ze = !ne && (e === "scroll" || e === "scrollend"), x = ne ? O !== null ? O + "Capture" : null : O;
          ne = [];
          for (var w = _, N; w !== null; ) {
            var H = w;
            if (N = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || N === null || x === null || (H = Ol(w, x), H != null && ne.push(
              oi(w, H, N)
            )), ze) break;
            w = w.return;
          }
          0 < ne.length && (O = new M(
            O,
            $,
            null,
            n,
            L
          ), B.push({ event: O, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && n !== Hu && ($ = n.relatedTarget || n.fromElement) && (Ua($) || $[Da]))
            break e;
          if ((M || O) && (O = L.window === L ? L : (O = L.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? ($ = n.relatedTarget || n.toElement, M = _, $ = $ ? Ua($) : null, $ !== null && (ze = m($), ne = $.tag, $ !== ze || ne !== 5 && ne !== 27 && ne !== 6) && ($ = null)) : (M = null, $ = _), M !== $)) {
            if (ne = $c, H = "onMouseLeave", x = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (ne = Wc, H = "onPointerLeave", x = "onPointerEnter", w = "pointer"), ze = M == null ? O : _l(M), N = $ == null ? O : _l($), O = new ne(
              H,
              w + "leave",
              M,
              n,
              L
            ), O.target = ze, O.relatedTarget = N, H = null, Ua(L) === _ && (ne = new ne(
              x,
              w + "enter",
              $,
              n,
              L
            ), ne.target = N, ne.relatedTarget = ze, H = ne), ze = H, M && $)
              t: {
                for (ne = Fy, x = M, w = $, N = 0, H = x; H; H = ne(H))
                  N++;
                H = 0;
                for (var P = w; P; P = ne(P))
                  H++;
                for (; 0 < N - H; )
                  x = ne(x), N--;
                for (; 0 < H - N; )
                  w = ne(w), H--;
                for (; N--; ) {
                  if (x === w || w !== null && x === w.alternate) {
                    ne = x;
                    break t;
                  }
                  x = ne(x), w = ne(w);
                }
                ne = null;
              }
            else ne = null;
            M !== null && X0(
              B,
              O,
              M,
              ne,
              !1
            ), $ !== null && ze !== null && X0(
              B,
              ze,
              $,
              ne,
              !0
            );
          }
        }
        e: {
          if (O = _ ? _l(_) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var Te = rf;
          else if (af(O))
            if (uf)
              Te = uy;
            else {
              Te = iy;
              var F = ly;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? _ && ju(_.elementType) && (Te = rf) : Te = ry;
          if (Te && (Te = Te(e, _))) {
            lf(
              B,
              Te,
              n,
              L
            );
            break e;
          }
          F && F(e, O, _), e === "focusout" && _ && O.type === "number" && _.memoizedProps.value != null && Lu(O, "number", O.value);
        }
        switch (F = _ ? _l(_) : window, e) {
          case "focusin":
            (af(F) || F.contentEditable === "true") && (Ya = F, Fu = _, Bl = null);
            break;
          case "focusout":
            Bl = Fu = Ya = null;
            break;
          case "mousedown":
            Wu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wu = !1, gf(B, n, L);
            break;
          case "selectionchange":
            if (oy) break;
          case "keydown":
          case "keyup":
            gf(B, n, L);
        }
        var fe;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Ga ? tf(e, n) && (be = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (be = "onCompositionStart");
        be && (Ic && n.locale !== "ko" && (Ga || be !== "onCompositionStart" ? be === "onCompositionEnd" && Ga && (fe = Zc()) : (Mn = L, Yu = "value" in Mn ? Mn.value : Mn.textContent, Ga = !0)), F = qr(_, be), 0 < F.length && (be = new Fc(
          be,
          e,
          null,
          n,
          L
        ), B.push({ event: be, listeners: F }), fe ? be.data = fe : (fe = nf(n), fe !== null && (be.data = fe)))), (fe = Pg ? ey(e, n) : ty(e, n)) && (be = qr(_, "onBeforeInput"), 0 < be.length && (F = new Fc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          L
        ), B.push({
          event: F,
          listeners: be
        }), F.data = fe)), Qy(
          B,
          e,
          _,
          n,
          L
        );
      }
      Y0(B, t);
    });
  }
  function oi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function qr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = Ol(e, n), i != null && a.unshift(
        oi(e, i, u)
      ), i = Ol(e, t), i != null && a.push(
        oi(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Fy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function X0(e, t, n, a, i) {
    for (var u = t._reactName, f = []; n !== null && n !== a; ) {
      var h = n, E = h.alternate, _ = h.stateNode;
      if (h = h.tag, E !== null && E === a) break;
      h !== 5 && h !== 26 && h !== 27 || _ === null || (E = _, i ? (_ = Ol(n, u), _ != null && f.unshift(
        oi(n, _, E)
      )) : i || (_ = Ol(n, u), _ != null && f.push(
        oi(n, _, E)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Wy = /\r\n?/g, Iy = /\u0000|\uFFFD/g;
  function V0(e) {
    return (typeof e == "string" ? e : "" + e).replace(Wy, `
`).replace(Iy, "");
  }
  function K0(e, t) {
    return t = V0(t), V0(e) === t;
  }
  function Me(e, t, n, a, i, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Ha(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Ha(e, "" + a);
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
        Xi(e, n, a);
        break;
      case "style":
        Vc(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Xi(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Ki("" + a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Me(e, t, "name", i.name, i, null), Me(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Me(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Me(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Me(e, t, "encType", i.encType, i, null), Me(e, t, "method", i.method, i, null), Me(e, t, "target", i.target, i, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = Ki("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = on);
        break;
      case "onScroll":
        a != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = n;
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
        n = Ki("" + a), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
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
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "" + a) : e.removeAttribute(n);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        ye("beforetoggle", e), ye("toggle", e), ki(e, "popover", a);
        break;
      case "xlinkActuate":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        sn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        sn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        ki(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ag.get(n) || n, ki(e, n, a));
    }
  }
  function Ro(e, t, n, a, i, u) {
    switch (n) {
      case "style":
        Vc(e, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Ha(e, a) : (typeof a == "number" || typeof a == "bigint") && Ha(e, "" + a);
        break;
      case "onScroll":
        a != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        a != null && ye("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = on);
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
        if (!Lc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), u = e[yt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : ki(e, n, a);
          }
    }
  }
  function ct(e, t, n) {
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
        ye("error", e), ye("load", e);
        var a = !1, i = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
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
                  Me(e, t, u, f, n, null);
              }
          }
        i && Me(e, t, "srcSet", n.srcSet, n, null), a && Me(e, t, "src", n.src, n, null);
        return;
      case "input":
        ye("invalid", e);
        var h = u = f = i = null, E = null, _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var L = n[a];
            if (L != null)
              switch (a) {
                case "name":
                  i = L;
                  break;
                case "type":
                  f = L;
                  break;
                case "checked":
                  E = L;
                  break;
                case "defaultChecked":
                  _ = L;
                  break;
                case "value":
                  u = L;
                  break;
                case "defaultValue":
                  h = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Me(e, t, a, L, n, null);
              }
          }
        Gc(
          e,
          u,
          h,
          E,
          _,
          f,
          i,
          !1
        );
        return;
      case "select":
        ye("invalid", e), a = f = u = null;
        for (i in n)
          if (n.hasOwnProperty(i) && (h = n[i], h != null))
            switch (i) {
              case "value":
                u = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                a = h;
              default:
                Me(e, t, i, h, n, null);
            }
        t = u, n = f, e.multiple = !!a, t != null ? ja(e, !!a, t, !1) : n != null && ja(e, !!a, n, !0);
        return;
      case "textarea":
        ye("invalid", e), u = i = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (h = n[f], h != null))
            switch (f) {
              case "value":
                a = h;
                break;
              case "defaultValue":
                i = h;
                break;
              case "children":
                u = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(c(91));
                break;
              default:
                Me(e, t, f, h, n, null);
            }
        kc(e, a, i, u);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Me(e, t, E, a, n, null));
        return;
      case "dialog":
        ye("beforetoggle", e), ye("toggle", e), ye("cancel", e), ye("close", e);
        break;
      case "iframe":
      case "object":
        ye("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < si.length; a++)
          ye(si[a], e);
        break;
      case "image":
        ye("error", e), ye("load", e);
        break;
      case "details":
        ye("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", e), ye("load", e);
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
        for (_ in n)
          if (n.hasOwnProperty(_) && (a = n[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Me(e, t, _, a, n, null);
            }
        return;
      default:
        if (ju(t)) {
          for (L in n)
            n.hasOwnProperty(L) && (a = n[L], a !== void 0 && Ro(
              e,
              t,
              L,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (h in n)
      n.hasOwnProperty(h) && (a = n[h], a != null && Me(e, t, h, a, n, null));
  }
  function Py(e, t, n, a) {
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
        var i = null, u = null, f = null, h = null, E = null, _ = null, L = null;
        for (M in n) {
          var B = n[M];
          if (n.hasOwnProperty(M) && B != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = B;
              default:
                a.hasOwnProperty(M) || Me(e, t, M, null, a, B);
            }
        }
        for (var O in a) {
          var M = a[O];
          if (B = n[O], a.hasOwnProperty(O) && (M != null || B != null))
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
                L = M;
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
                  throw Error(c(137, t));
                break;
              default:
                M !== B && Me(
                  e,
                  t,
                  O,
                  M,
                  a,
                  B
                );
            }
        }
        zu(
          e,
          f,
          h,
          E,
          _,
          L,
          u,
          i
        );
        return;
      case "select":
        M = f = h = O = null;
        for (u in n)
          if (E = n[u], n.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                M = E;
              default:
                a.hasOwnProperty(u) || Me(
                  e,
                  t,
                  u,
                  null,
                  a,
                  E
                );
            }
        for (i in a)
          if (u = a[i], E = n[i], a.hasOwnProperty(i) && (u != null || E != null))
            switch (i) {
              case "value":
                O = u;
                break;
              case "defaultValue":
                h = u;
                break;
              case "multiple":
                f = u;
              default:
                u !== E && Me(
                  e,
                  t,
                  i,
                  u,
                  a,
                  E
                );
            }
        t = h, n = f, a = M, O != null ? ja(e, !!n, O, !1) : !!a != !!n && (t != null ? ja(e, !!n, t, !0) : ja(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        M = O = null;
        for (h in n)
          if (i = n[h], n.hasOwnProperty(h) && i != null && !a.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Me(e, t, h, null, a, i);
            }
        for (f in a)
          if (i = a[f], u = n[f], a.hasOwnProperty(f) && (i != null || u != null))
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
                i !== u && Me(e, t, f, i, a, u);
            }
        Yc(e, O, M);
        return;
      case "option":
        for (var $ in n)
          O = n[$], n.hasOwnProperty($) && O != null && !a.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : Me(
            e,
            t,
            $,
            null,
            a,
            O
          ));
        for (E in a)
          O = a[E], M = n[E], a.hasOwnProperty(E) && O !== M && (O != null || M != null) && (E === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Me(
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
        for (var ne in n)
          O = n[ne], n.hasOwnProperty(ne) && O != null && !a.hasOwnProperty(ne) && Me(e, t, ne, null, a, O);
        for (_ in a)
          if (O = a[_], M = n[_], a.hasOwnProperty(_) && O !== M && (O != null || M != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(c(137, t));
                break;
              default:
                Me(
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
        if (ju(t)) {
          for (var ze in n)
            O = n[ze], n.hasOwnProperty(ze) && O !== void 0 && !a.hasOwnProperty(ze) && Ro(
              e,
              t,
              ze,
              void 0,
              a,
              O
            );
          for (L in a)
            O = a[L], M = n[L], !a.hasOwnProperty(L) || O === M || O === void 0 && M === void 0 || Ro(
              e,
              t,
              L,
              O,
              a,
              M
            );
          return;
        }
    }
    for (var x in n)
      O = n[x], n.hasOwnProperty(x) && O != null && !a.hasOwnProperty(x) && Me(e, t, x, null, a, O);
    for (B in a)
      O = a[B], M = n[B], !a.hasOwnProperty(B) || O === M || O == null && M == null || Me(e, t, B, O, a, M);
  }
  function Q0(e) {
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
  function ep() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], u = i.transferSize, f = i.initiatorType, h = i.duration;
        if (u && h && Q0(f)) {
          for (f = 0, h = i.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], _ = E.startTime;
            if (_ > h) break;
            var L = E.transferSize, B = E.initiatorType;
            L && Q0(B) && (E = E.responseEnd, f += L * (E < h ? 1 : (h - _) / (E - _)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var To = null, xo = null;
  function Gr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Z0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function J0(e, t) {
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
  function Ao(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Co = null;
  function tp() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Co ? !1 : (Co = e, !0) : (Co = null, !1);
  }
  var $0 = typeof setTimeout == "function" ? setTimeout : void 0, np = typeof clearTimeout == "function" ? clearTimeout : void 0, F0 = typeof Promise == "function" ? Promise : void 0, ap = typeof queueMicrotask == "function" ? queueMicrotask : typeof F0 < "u" ? function(e) {
    return F0.resolve(null).then(e).catch(lp);
  } : $0;
  function lp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fn(e) {
    return e === "head";
  }
  function W0(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), hl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ci(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ci(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, h = u.nodeName;
            u[Nl] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && ci(e.ownerDocument.body);
      n = i;
    } while (n);
    hl(t);
  }
  function I0(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function No(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          No(n), Uu(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function ip(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Nl])
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
      if (e = Qt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function rp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Qt(e.nextSibling), e === null)) return null;
    return e;
  }
  function P0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Qt(e.nextSibling), e === null)) return null;
    return e;
  }
  function _o(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Oo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function up(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function Qt(e) {
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
  function em(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Qt(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function tm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function nm(e, t, n) {
    switch (t = Gr(n), e) {
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
    Uu(e);
  }
  var Zt = /* @__PURE__ */ new Map(), am = /* @__PURE__ */ new Set();
  function Yr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var xn = X.d;
  X.d = {
    f: sp,
    r: op,
    D: cp,
    C: fp,
    L: dp,
    m: mp,
    X: gp,
    S: hp,
    M: yp
  };
  function sp() {
    var e = xn.f(), t = Ur();
    return e || t;
  }
  function op(e) {
    var t = Ma(e);
    t !== null && t.tag === 5 && t.type === "form" ? Ed(t) : xn.r(e);
  }
  var fl = typeof document > "u" ? null : document;
  function lm(e, t, n) {
    var a = fl;
    if (a && typeof t == "string" && t) {
      var i = qt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), am.has(i) || (am.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), ct(t, "link", e), at(t), a.head.appendChild(t)));
    }
  }
  function cp(e) {
    xn.D(e), lm("dns-prefetch", e, null);
  }
  function fp(e, t) {
    xn.C(e, t), lm("preconnect", e, t);
  }
  function dp(e, t, n) {
    xn.L(e, t, n);
    var a = fl;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + qt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + qt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + qt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + qt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = dl(e);
          break;
        case "script":
          u = ml(e);
      }
      Zt.has(u) || (e = C(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Zt.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(fi(u)) || t === "script" && a.querySelector(di(u)) || (t = a.createElement("link"), ct(t, "link", e), at(t), a.head.appendChild(t)));
    }
  }
  function mp(e, t) {
    xn.m(e, t);
    var n = fl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + qt(a) + '"][href="' + qt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ml(e);
      }
      if (!Zt.has(u) && (e = C({ rel: "modulepreload", href: e }, t), Zt.set(u, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(di(u)))
              return;
        }
        a = n.createElement("link"), ct(a, "link", e), at(a), n.head.appendChild(a);
      }
    }
  }
  function hp(e, t, n) {
    xn.S(e, t, n);
    var a = fl;
    if (a && e) {
      var i = za(a).hoistableStyles, u = dl(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = a.querySelector(
          fi(u)
        ))
          h.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Zt.get(u)) && Uo(e, n);
          var E = f = a.createElement("link");
          at(E), ct(E, "link", e), E._p = new Promise(function(_, L) {
            E.onload = _, E.onerror = L;
          }), E.addEventListener("load", function() {
            h.loading |= 1;
          }), E.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, kr(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: h
        }, i.set(u, f);
      }
    }
  }
  function gp(e, t) {
    xn.X(e, t);
    var n = fl;
    if (n && e) {
      var a = za(n).hoistableScripts, i = ml(e), u = a.get(i);
      u || (u = n.querySelector(di(i)), u || (e = C({ src: e, async: !0 }, t), (t = Zt.get(i)) && Mo(e, t), u = n.createElement("script"), at(u), ct(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function yp(e, t) {
    xn.M(e, t);
    var n = fl;
    if (n && e) {
      var a = za(n).hoistableScripts, i = ml(e), u = a.get(i);
      u || (u = n.querySelector(di(i)), u || (e = C({ src: e, async: !0, type: "module" }, t), (t = Zt.get(i)) && Mo(e, t), u = n.createElement("script"), at(u), ct(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function im(e, t, n, a) {
    var i = (i = J.current) ? Yr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = dl(n.href), n = za(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = dl(n.href);
          var u = za(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            fi(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Zt.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Zt.set(e, n), u || pp(
            i,
            e,
            n,
            f.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ml(n), n = za(
          i
        ).hoistableScripts, a = n.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function dl(e) {
    return 'href="' + qt(e) + '"';
  }
  function fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function rm(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function pp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ct(t, "link", n), at(t), e.head.appendChild(t));
  }
  function ml(e) {
    return '[src="' + qt(e) + '"]';
  }
  function di(e) {
    return "script[async]" + e;
  }
  function um(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + qt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, at(a), a;
          var i = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), at(a), ct(a, "style", i), kr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = dl(n.href);
          var u = e.querySelector(
            fi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, at(u), u;
          a = rm(n), (i = Zt.get(i)) && Uo(a, i), u = (e.ownerDocument || e).createElement("link"), at(u);
          var f = u;
          return f._p = new Promise(function(h, E) {
            f.onload = h, f.onerror = E;
          }), ct(u, "link", a), t.state.loading |= 4, kr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = ml(n.src), (i = e.querySelector(
            di(u)
          )) ? (t.instance = i, at(i), i) : (a = n, (i = Zt.get(u)) && (a = C({}, n), Mo(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), at(i), ct(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, kr(a, n.precedence, e));
    return t.instance;
  }
  function kr(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var h = a[f];
      if (h.dataset.precedence === t) u = h;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Uo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Mo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Xr = null;
  function sm(e, t, n) {
    if (Xr === null) {
      var a = /* @__PURE__ */ new Map(), i = Xr = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Xr, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[Nl] || u[rt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var h = a.get(f);
        h ? h.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function om(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function vp(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
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
  function cm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function bp(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = dl(a.href), u = t.querySelector(
          fi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Vr.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, at(u);
          return;
        }
        u = t.ownerDocument || t, a = rm(a), (i = Zt.get(i)) && Uo(a, i), u = u.createElement("link"), at(u);
        var f = u;
        f._p = new Promise(function(h, E) {
          f.onload = h, f.onerror = E;
        }), ct(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Vr.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var zo = 0;
  function Ep(e, t) {
    return e.stylesheets && e.count === 0 && Qr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Qr(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && zo === 0 && (zo = 62500 * ep());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qr(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > zo ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Vr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Kr = null;
  function Qr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Kr = /* @__PURE__ */ new Map(), t.forEach(Sp, e), Kr = null, Vr.call(e));
  }
  function Sp(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Kr.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Kr.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, i), n.set(f, i), this.count++, a = Vr.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var mi = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function wp(e, t, n, a, i, u, f, h, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nu(0), this.hiddenUpdates = Nu(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fm(e, t, n, a, i, u, f, h, E, _, L, B) {
    return e = new wp(
      e,
      t,
      n,
      f,
      E,
      _,
      L,
      B,
      h
    ), t = 1, u === !0 && (t |= 24), u = Dt(3, null, null, t), e.current = u, u.stateNode = e, t = ds(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, ys(u), e;
  }
  function dm(e) {
    return e ? (e = Va, e) : Va;
  }
  function mm(e, t, n, a, i, u) {
    i = dm(i), a.context === null ? a.context = i : a.pendingContext = i, a = qn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Gn(e, a, t), n !== null && (wt(n, e, t), Kl(n, e, t));
  }
  function hm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Lo(e, t) {
    hm(e, t), (e = e.alternate) && hm(e, t);
  }
  function gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = oa(e, 67108864);
      t !== null && wt(t, e, 67108864), Lo(e, 67108864);
    }
  }
  function ym(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = jt();
      t = _u(t);
      var n = oa(e, t);
      n !== null && wt(n, e, t), Lo(e, t);
    }
  }
  var Zr = !0;
  function Rp(e, t, n, a) {
    var i = Y.T;
    Y.T = null;
    var u = X.p;
    try {
      X.p = 2, jo(e, t, n, a);
    } finally {
      X.p = u, Y.T = i;
    }
  }
  function Tp(e, t, n, a) {
    var i = Y.T;
    Y.T = null;
    var u = X.p;
    try {
      X.p = 8, jo(e, t, n, a);
    } finally {
      X.p = u, Y.T = i;
    }
  }
  function jo(e, t, n, a) {
    if (Zr) {
      var i = Ho(a);
      if (i === null)
        wo(
          e,
          t,
          a,
          Jr,
          n
        ), vm(e, a);
      else if (Ap(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (vm(e, a), t & 4 && -1 < xp.indexOf(e)) {
        for (; i !== null; ) {
          var u = Ma(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = la(u.pendingLanes);
                  if (f !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var E = 1 << 31 - _t(f);
                      h.entanglements[1] |= E, f &= ~E;
                    }
                    rn(u), (Ce & 6) === 0 && (Or = Ct() + 500, ui(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = oa(u, 2), h !== null && wt(h, u, 2), Ur(), Lo(u, 2);
            }
          if (u = Ho(a), u === null && wo(
            e,
            t,
            a,
            Jr,
            n
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        wo(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Ho(e) {
    return e = Bu(e), Bo(e);
  }
  var Jr = null;
  function Bo(e) {
    if (Jr = null, e = Ua(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Jr = e, null;
  }
  function pm(e) {
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
        switch (cg()) {
          case Tc:
            return 2;
          case xc:
            return 8;
          case Hi:
          case fg:
            return 32;
          case Ac:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var qo = !1, Wn = null, In = null, Pn = null, hi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), ea = [], xp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Wn = null;
        break;
      case "dragenter":
      case "dragleave":
        In = null;
        break;
      case "mouseover":
      case "mouseout":
        Pn = null;
        break;
      case "pointerover":
      case "pointerout":
        hi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        gi.delete(t.pointerId);
    }
  }
  function yi(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = Ma(t), t !== null && gm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Ap(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return Wn = yi(
          Wn,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return In = yi(
          In,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return Pn = yi(
          Pn,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return hi.set(
          u,
          yi(
            hi.get(u) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, gi.set(
          u,
          yi(
            gi.get(u) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
    }
    return !1;
  }
  function bm(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Uc(e.priority, function() {
              ym(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Uc(e.priority, function() {
              ym(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function $r(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ho(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Hu = a, n.target.dispatchEvent(a), Hu = null;
      } else
        return t = Ma(n), t !== null && gm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Em(e, t, n) {
    $r(e) && n.delete(t);
  }
  function Cp() {
    qo = !1, Wn !== null && $r(Wn) && (Wn = null), In !== null && $r(In) && (In = null), Pn !== null && $r(Pn) && (Pn = null), hi.forEach(Em), gi.forEach(Em);
  }
  function Fr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qo || (qo = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Cp
    )));
  }
  var Wr = null;
  function Sm(e) {
    Wr !== e && (Wr = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Wr === e && (Wr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (Bo(a || n) === null)
              continue;
            break;
          }
          var u = Ma(n);
          u !== null && (e.splice(t, 3), t -= 3, js(
            u,
            {
              pending: !0,
              data: i,
              method: n.method,
              action: a
            },
            a,
            i
          ));
        }
      }
    ));
  }
  function hl(e) {
    function t(E) {
      return Fr(E, e);
    }
    Wn !== null && Fr(Wn, e), In !== null && Fr(In, e), Pn !== null && Fr(Pn, e), hi.forEach(t), gi.forEach(t);
    for (var n = 0; n < ea.length; n++) {
      var a = ea[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < ea.length && (n = ea[0], n.blockedOn === null); )
      bm(n), n.blockedOn === null && ea.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], u = n[a + 1], f = i[yt] || null;
        if (typeof u == "function")
          f || Sm(n);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[yt] || null)
              h = f.formAction;
            else if (Bo(i) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? n[a + 1] = h : (n.splice(a, 3), a -= 3), Sm(n);
        }
      }
  }
  function wm() {
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
      i !== null && (i(), i = null), a || setTimeout(n, 20);
    }
    function n() {
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
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
      };
    }
  }
  function Go(e) {
    this._internalRoot = e;
  }
  Ir.prototype.render = Go.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = jt();
    mm(n, a, e, t, null, null);
  }, Ir.prototype.unmount = Go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      mm(e.current, 2, null, e, null, null), Ur(), t[Da] = null;
    }
  };
  function Ir(e) {
    this._internalRoot = e;
  }
  Ir.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Dc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ea.length && t !== 0 && t < ea[n].priority; n++) ;
      ea.splice(n, 0, e), n === 0 && bm(e);
    }
  };
  var Rm = s.version;
  if (Rm !== "19.2.3")
    throw Error(
      c(
        527,
        Rm,
        "19.2.3"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = b(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Np = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pr.isDisabled && Pr.supportsFiber)
      try {
        xl = Pr.inject(
          Np
        ), Nt = Pr;
      } catch {
      }
  }
  return bi.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", i = Od, u = Dd, f = Ud;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = fm(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      i,
      u,
      f,
      wm
    ), e[Da] = t.current, So(e), new Go(t);
  }, bi.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, i = "", u = Od, f = Dd, h = Ud, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), t = fm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      i,
      E,
      u,
      f,
      h,
      wm
    ), t.context = dm(null), n = t.current, a = jt(), a = _u(a), i = qn(a), i.callback = null, Gn(n, i, a), n = a, t.current.lanes = n, Cl(t, n), rn(t), e[Da] = t.current, So(e), new Ir(t);
  }, bi.version = "19.2.3", bi;
}
var qm;
function pv() {
  if (qm) return Zo.exports;
  qm = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Zo.exports = yv(), Zo.exports;
}
var vv = pv();
function bv(l = {}) {
  const { nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c } = l, [d, m] = T.useState(!1), y = T.useRef(o);
  y.current = o;
  const p = T.useRef(c);
  return p.current = c, T.useEffect(() => {
    const g = document.createElement("script");
    return g.src = "https://accounts.google.com/gsi/client", s && (g.src += `?hl=${s}`), g.async = !0, g.defer = !0, g.nonce = r, g.onload = () => {
      var b;
      m(!0), (b = y.current) === null || b === void 0 || b.call(y);
    }, g.onerror = () => {
      var b;
      m(!1), (b = p.current) === null || b === void 0 || b.call(p);
    }, document.body.appendChild(g), () => {
      document.body.removeChild(g);
    };
  }, [r]), d;
}
const Mh = T.createContext(null);
function Ev({ clientId: l, nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c, children: d }) {
  const m = bv({
    nonce: r,
    onScriptLoadSuccess: o,
    onScriptLoadError: c,
    locale: s
  }), y = T.useMemo(() => ({
    locale: s,
    clientId: l,
    scriptLoadedSuccessfully: m
  }), [l, m]);
  return zp.createElement(Mh.Provider, { value: y }, d);
}
function Sv() {
  const l = T.useContext(Mh);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function wv({ flow: l = "implicit", scope: r = "", onSuccess: s, onError: o, onNonOAuthError: c, overrideScope: d, state: m, ...y }) {
  const { clientId: p, scriptLoadedSuccessfully: g } = Sv(), b = T.useRef(), R = T.useRef(s);
  R.current = s;
  const C = T.useRef(o);
  C.current = o;
  const q = T.useRef(c);
  q.current = c, T.useEffect(() => {
    var D, G;
    if (!g)
      return;
    const V = l === "implicit" ? "initTokenClient" : "initCodeClient", Q = (G = (D = window?.google) === null || D === void 0 ? void 0 : D.accounts) === null || G === void 0 ? void 0 : G.oauth2[V]({
      client_id: p,
      scope: d ? r : `openid profile email ${r}`,
      callback: (I) => {
        var W, me;
        if (I.error)
          return (W = C.current) === null || W === void 0 ? void 0 : W.call(C, I);
        (me = R.current) === null || me === void 0 || me.call(R, I);
      },
      error_callback: (I) => {
        var W;
        (W = q.current) === null || W === void 0 || W.call(q, I);
      },
      state: m,
      ...y
    });
    b.current = Q;
  }, [p, g, l, r, m]);
  const A = T.useCallback((D) => {
    var G;
    return (G = b.current) === null || G === void 0 ? void 0 : G.requestAccessToken(D);
  }, []), z = T.useCallback(() => {
    var D;
    return (D = b.current) === null || D === void 0 ? void 0 : D.requestCode();
  }, []);
  return l === "implicit" ? A : z;
}
var de = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(de || {}), Tt = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(Tt || {}), gt = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(gt || {}), Jt = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(Jt || {}), pc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(pc || {}), na = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(na || {}), xi = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(xi || {});
const pe = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, Ge = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, Fo = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, Na = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout",
  GLOBAL_SUBSIDIARIES: "/global/subsidiaries"
}, vu = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, tu = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ri = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, gl = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Gm = /[!@#$%^&*._-]/, Ym = /^[A-Za-z0-9!@#$%^&*._-]+$/, Ai = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, Rv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Ei = {
  COURSES: "/courses"
}, Qe = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, Cn = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, Tv = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, xv = {
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
}, Av = {
  EMAIL_NOT_FOUND: "No account found with this email address."
}, Ze = {
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
}, nu = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Ht = ({
  label: l,
  onClick: r,
  disabled: s,
  type: o = gt.BUTTON,
  variant: c = Tt.PRIMARY,
  part: d,
  className: m,
  children: y,
  ariaLabel: p,
  mainButtonStyle: g
}) => {
  const b = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", R = {
    [Tt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [Tt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [Tt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, C = m ? `identity-widget-button ${b} ${R[c]} ${m}` : `identity-widget-button ${b} ${R[c]}`, q = Array.from(
    new Set(
      [
        "identity-widget-button",
        ...m ? m.split(/\s+/).map((z) => z.trim()).filter((z) => z.startsWith("identity-widget-")) : []
      ].filter(Boolean)
    )
  ).join(" "), A = d || q;
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      className: C,
      onClick: r,
      disabled: s,
      type: o,
      part: A,
      "aria-label": p || (typeof l == "string" ? l : void 0),
      "aria-disabled": s,
      style: { ...g, borderStyle: "solid !important" },
      children: y || l
    }
  );
}, wa = T.forwardRef((l, r) => {
  const {
    label: s,
    startIcon: o,
    endIcon: c,
    error: d,
    helperText: m,
    optional: y,
    className: p,
    options: g,
    id: b,
    ...R
  } = l, C = !!d || !!m, q = R.type === "select" || !!g, A = b || `input-${Math.random().toString(36).substr(2, 9)}`, z = `${A}-error`, D = `${A}-helper`;
  return /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-input-wrapper", className: `identity-widget-input-wrapper flex! flex-col! ${p || ""}`, children: [
    s && /* @__PURE__ */ v.jsxs(
      "label",
      {
        htmlFor: A,
        part: "identity-widget-input-label",
        className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
        children: [
          s,
          " ",
          y && /* @__PURE__ */ v.jsx("span", { part: "identity-widget-input-optional", className: "identity-widget-input-optional text-gray-500 italic text-[13px]", children: "(Optional)" })
        ]
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-input-container", className: "identity-widget-input-container flex! items-center! relative!", children: [
      o && /* @__PURE__ */ v.jsx(
        "span",
        {
          part: "identity-widget-input-start-icon",
          className: "identity-widget-input-start-icon flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: o
        }
      ),
      q ? /* @__PURE__ */ v.jsx(
        "select",
        {
          ref: r,
          id: A,
          part: "identity-widget-input-select",
          "aria-label": typeof s == "string" ? s : R["aria-label"],
          "aria-invalid": C,
          "aria-describedby": C ? z : void 0,
          "aria-required": R.required,
          className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: C ? "#d64545" : "#cbd5d5",
            ...R.style
          },
          ...R,
          children: g && g.map((G) => /* @__PURE__ */ v.jsx("option", { part: "identity-widget-input-option", className: "identity-widget-input-option", value: G.value, children: G.label }, G.value))
        }
      ) : /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: r,
          id: A,
          part: "identity-widget-input-field",
          "aria-label": typeof s == "string" ? s : R["aria-label"],
          "aria-invalid": C,
          "aria-describedby": C ? z : void 0,
          "aria-required": R.required,
          className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: C ? "#d64545" : "#cbd5d5",
            ...R.style
          },
          ...R
        }
      ),
      c && /* @__PURE__ */ v.jsx(
        "span",
        {
          part: "identity-widget-input-end-icon",
          className: "identity-widget-input-end-icon flex! items-center! justify-center! absolute! right-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: c
        }
      )
    ] }),
    d && typeof d == "string" && /* @__PURE__ */ v.jsx(
      "div",
      {
        id: z,
        role: "alert",
        "aria-live": "polite",
        part: "identity-widget-input-error",
        className: "identity-widget-input-error text-[#d64545] text-[13px]! mt-1.5! text-left!",
        children: d
      }
    ),
    !d && m && /* @__PURE__ */ v.jsx(
      "div",
      {
        id: D,
        role: "status",
        "aria-live": "polite",
        part: "identity-widget-input-helper",
        className: "identity-widget-input-helper text-[#d64545] text-[13px]! mt-1.5! text-left!",
        children: m
      }
    )
  ] });
}), Cv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", pl = ({
  type: l,
  message: r,
  actionText: s,
  onActionClick: o,
  onClose: c,
  className: d = "",
  children: m
}) => {
  const y = () => {
    switch (l) {
      case de.SUCCESS:
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
      case de.WARNING:
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
      case de.ERROR:
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
      case de.INFO:
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
    switch (l) {
      case de.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-banner-icon-svg", className: "identity-widget-banner-icon-svg w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
          }
        ) });
      case de.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-banner-icon-svg", className: "identity-widget-banner-icon-svg w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) });
      case de.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-banner-icon-svg", className: "identity-widget-banner-icon-svg w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd"
          }
        ) });
      case de.INFO:
      default:
        return /* @__PURE__ */ v.jsx("img", { part: "identity-widget-banner-icon-image", src: Cv, alt: "info", className: "identity-widget-banner-icon-image w-5! h-5!" });
    }
  }, g = y(), b = () => {
    switch (l) {
      case de.ERROR:
        return na.ALERT;
      case de.WARNING:
      case de.INFO:
        return na.STATUS;
      case de.SUCCESS:
        return na.STATUS;
      default:
        return na.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: b(),
      "aria-live": l === de.ERROR ? xi.ASSERTIVE : xi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! items-center! max-[500px]:items-start! py-3! px-4! rounded! ${g.bg} ${g.border} ${d}`,
      children: [
        /* @__PURE__ */ v.jsx("div", { part: "identity-widget-banner-icon", className: `identity-widget-banner-icon flex-shrink-0! ${g.iconColor}!`, "aria-hidden": "true", children: p() }),
        /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-banner-content", className: "identity-widget-banner-content ml-3! flex-1! flex! items-center! gap-2! max-[500px]:items-start! max-[500px]:flex-col!", children: [
          /* @__PURE__ */ v.jsx("span", { part: "identity-widget-banner-message", className: `identity-widget-banner-message text-sm! font-medium! ${g.text}`, children: r }),
          s && o && /* @__PURE__ */ v.jsx(
            "button",
            {
              part: "identity-widget-banner-action",
              type: "button",
              onClick: o,
              "aria-label": s,
              className: `identity-widget-banner-action text-sm! font-medium! ${g.actionColor} ${g.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! max-[500px]:whitespace-normal! max-[500px]:self-start! shadow-none!`,
              children: s
            }
          ),
          m
        ] }),
        c && /* @__PURE__ */ v.jsxs(
          "button",
          {
            part: "identity-widget-banner-close",
            type: "button",
            onClick: c,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${g.iconColor} ${g.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { part: "identity-widget-banner-close-text", className: "identity-widget-banner-close-text sr-only", children: "Dismiss" }),
              /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-banner-close-icon", className: "identity-widget-banner-close-icon w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx(
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
}, ic = ({ type: l, message: r, duration: s = 5e3, onClose: o, className: c = "" }) => {
  const [d, m] = T.useState(!1), [y, p] = T.useState(!1);
  T.useEffect(() => {
    setTimeout(() => m(!0), Ai.ANIMATION_ENTRANCE_DELAY);
    const A = setTimeout(() => {
      g();
    }, s);
    return () => clearTimeout(A);
  }, [s]);
  const g = () => {
    p(!0), setTimeout(() => {
      m(!1), o && o();
    }, Ai.ANIMATION_EXIT_DURATION);
  }, b = () => {
    switch (l) {
      case de.SUCCESS:
        return {
          bg: "bg-green-600!",
          icon: "text-green-100!",
          text: "text-white!"
        };
      case de.WARNING:
        return {
          bg: "bg-yellow-500!",
          icon: "text-yellow-100!",
          text: "text-white!"
        };
      case de.ERROR:
        return {
          bg: "bg-red-600!",
          icon: "text-red-100!",
          text: "text-white!"
        };
      case de.INFO:
      default:
        return {
          bg: "bg-blue-600!",
          icon: "text-blue-100!",
          text: "text-white!"
        };
    }
  }, R = () => {
    switch (l) {
      case de.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-toast-icon-svg", className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
          }
        ) });
      case de.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-toast-icon-svg", className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) });
      case de.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-toast-icon-svg", className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd"
          }
        ) });
      case de.INFO:
      default:
        return /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-toast-icon-svg", className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
            clipRule: "evenodd"
          }
        ) });
    }
  }, C = b(), q = () => {
    switch (l) {
      case de.ERROR:
        return na.ALERT;
      case de.WARNING:
      case de.INFO:
      case de.SUCCESS:
        return na.STATUS;
      default:
        return na.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: q(),
      "aria-live": l === de.ERROR ? xi.ASSERTIVE : xi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${Wo.Z_INDEX}]! transition-all! duration-300! ${d && !y ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: Wo.MAX_WIDTH, width: Wo.WIDTH },
      children: /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-toast-body", className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${C.bg}`, children: [
        /* @__PURE__ */ v.jsx("div", { part: "identity-widget-toast-icon", className: `identity-widget-toast-icon flex-shrink-0! ${C.icon}`, "aria-hidden": "true", children: R() }),
        /* @__PURE__ */ v.jsx("div", { part: "identity-widget-toast-content", className: `identity-widget-toast-content ml-3! flex-1! ${C.text}`, children: /* @__PURE__ */ v.jsx("p", { part: "identity-widget-toast-message", className: "identity-widget-toast-message text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            part: "identity-widget-toast-close",
            type: "button",
            onClick: g,
            "aria-label": "Close notification",
            className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${C.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { part: "identity-widget-toast-close-text", className: "identity-widget-toast-close-text sr-only", children: "Close" }),
              /* @__PURE__ */ v.jsx("svg", { part: "identity-widget-toast-close-icon", className: "identity-widget-toast-close-icon w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx(
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
}, zh = () => /* @__PURE__ */ v.jsx(
  "span",
  {
    part: "identity-widget-loader",
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-loader-text", className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class wi extends Error {
}
wi.prototype.name = "InvalidTokenError";
function Nv(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, s) => {
    let o = s.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function _v(l) {
  let r = l.replace(/-/g, "+").replace(/_/g, "/");
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
    return Nv(r);
  } catch {
    return atob(r);
  }
}
function Di(l, r) {
  if (typeof l != "string")
    throw new wi("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, o = l.split(".")[s];
  if (typeof o != "string")
    throw new wi(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = _v(o);
  } catch (d) {
    throw new wi(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new wi(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Lh() {
  const l = window.location.hostname;
  if (l === Cn.HOSTNAME || l === Cn.IP || Cn.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Ov() {
  const l = window.location.hostname;
  return l === Cn.HOSTNAME || l === Cn.IP || Cn.IP_PATTERN.test(l) || l.startsWith(`${Qe.DEV}.`) || l.startsWith(`${Qe.DEV}-`) ? Jt.DEV : l.startsWith(`${Qe.TEST}.`) || l.startsWith(`${Qe.TEST}-`) ? Jt.TEST : l.startsWith(`${Qe.STAGE}.`) || l.startsWith(`${Qe.STAGE}-`) ? Jt.STAGE : Jt.PROD;
}
function au() {
  const l = window.location.href, r = new URL(l), s = r.hostname;
  if (s.startsWith(`${Qe.DEV}.`)) {
    const o = s.replace(`${Qe.DEV}.`, `${Qe.DEV_LEARN}.`);
    return `${r.protocol}//${o}${Ei.COURSES}`;
  } else if (s.startsWith(`${Qe.TEST}.`)) {
    const o = s.replace(`${Qe.TEST}.`, `${Qe.TEST_LEARN}.`);
    return `${r.protocol}//${o}${Ei.COURSES}`;
  } else if (s.startsWith(`${Qe.STAGE}.`)) {
    const o = s.replace(`${Qe.STAGE}.`, `${Qe.STAGE_LEARN}.`);
    return `${r.protocol}//${o}${Ei.COURSES}`;
  } else if (s.split(".").length === 2) {
    const c = `${Qe.LEARN}.${s}`;
    return `${r.protocol}//${c}${Ei.COURSES}`;
  } else
    return `${r.protocol}//${s}${Ei.COURSES}`;
}
function Ra(l, r, s, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + s);
  const d = Lh(), m = d ? `; domain=${d}` : "", y = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${p}; expires=${c.toUTCString()}; path=/${m}${y}; SameSite=Strict`;
}
function Rt(l, r = !0) {
  const s = document.cookie.split(";");
  for (const o of s) {
    const c = o.trim();
    if (c.startsWith(`${l}=`)) {
      const d = c.substring(l.length + 1);
      return r ? decodeURIComponent(d) : d;
    }
  }
  return null;
}
function lu(l) {
  const r = Lh(), s = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function jh(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var km = {};
const { toString: Dv } = Object.prototype, { getPrototypeOf: vc } = Object, { iterator: bu, toStringTag: Hh } = Symbol, Eu = /* @__PURE__ */ ((l) => (r) => {
  const s = Dv.call(r);
  return l[s] || (l[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tn = (l) => (l = l.toLowerCase(), (r) => Eu(r) === l), Su = (l) => (r) => typeof r === l, { isArray: Sl } = Array, vl = Su("undefined");
function Ui(l) {
  return l !== null && !vl(l) && l.constructor !== null && !vl(l.constructor) && xt(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const Bh = tn("ArrayBuffer");
function Uv(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Bh(l.buffer), r;
}
const Mv = Su("string"), xt = Su("function"), qh = Su("number"), Mi = (l) => l !== null && typeof l == "object", zv = (l) => l === !0 || l === !1, su = (l) => {
  if (Eu(l) !== "object")
    return !1;
  const r = vc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Hh in l) && !(bu in l);
}, Lv = (l) => {
  if (!Mi(l) || Ui(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, jv = tn("Date"), Hv = tn("File"), Bv = tn("Blob"), qv = tn("FileList"), Gv = (l) => Mi(l) && xt(l.pipe), Yv = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || xt(l.append) && ((r = Eu(l)) === "formdata" || // detect form-data instance
  r === "object" && xt(l.toString) && l.toString() === "[object FormData]"));
}, kv = tn("URLSearchParams"), [Xv, Vv, Kv, Qv] = ["ReadableStream", "Request", "Response", "Headers"].map(tn), Zv = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(l, r, { allOwnKeys: s = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let o, c;
  if (typeof l != "object" && (l = [l]), Sl(l))
    for (o = 0, c = l.length; o < c; o++)
      r.call(null, l[o], o, l);
  else {
    if (Ui(l))
      return;
    const d = s ? Object.getOwnPropertyNames(l) : Object.keys(l), m = d.length;
    let y;
    for (o = 0; o < m; o++)
      y = d[o], r.call(null, l[y], y, l);
  }
}
function Gh(l, r) {
  if (Ui(l))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(l);
  let o = s.length, c;
  for (; o-- > 0; )
    if (c = s[o], r === c.toLowerCase())
      return c;
  return null;
}
const Ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yh = (l) => !vl(l) && l !== Ta;
function rc() {
  const { caseless: l, skipUndefined: r } = Yh(this) && this || {}, s = {}, o = (c, d) => {
    const m = l && Gh(s, d) || d;
    su(s[m]) && su(c) ? s[m] = rc(s[m], c) : su(c) ? s[m] = rc({}, c) : Sl(c) ? s[m] = c.slice() : (!r || !vl(c)) && (s[m] = c);
  };
  for (let c = 0, d = arguments.length; c < d; c++)
    arguments[c] && zi(arguments[c], o);
  return s;
}
const Jv = (l, r, s, { allOwnKeys: o } = {}) => (zi(r, (c, d) => {
  s && xt(c) ? l[d] = jh(c, s) : l[d] = c;
}, { allOwnKeys: o }), l), $v = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), Fv = (l, r, s, o) => {
  l.prototype = Object.create(r.prototype, o), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: r.prototype
  }), s && Object.assign(l.prototype, s);
}, Wv = (l, r, s, o) => {
  let c, d, m;
  const y = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), d = c.length; d-- > 0; )
      m = c[d], (!o || o(m, l, r)) && !y[m] && (r[m] = l[m], y[m] = !0);
    l = s !== !1 && vc(l);
  } while (l && (!s || s(l, r)) && l !== Object.prototype);
  return r;
}, Iv = (l, r, s) => {
  l = String(l), (s === void 0 || s > l.length) && (s = l.length), s -= r.length;
  const o = l.indexOf(r, s);
  return o !== -1 && o === s;
}, Pv = (l) => {
  if (!l) return null;
  if (Sl(l)) return l;
  let r = l.length;
  if (!qh(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = l[r];
  return s;
}, eb = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && vc(Uint8Array)), tb = (l, r) => {
  const o = (l && l[bu]).call(l);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const d = c.value;
    r.call(l, d[0], d[1]);
  }
}, nb = (l, r) => {
  let s;
  const o = [];
  for (; (s = l.exec(r)) !== null; )
    o.push(s);
  return o;
}, ab = tn("HTMLFormElement"), lb = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, c) {
    return o.toUpperCase() + c;
  }
), Xm = (({ hasOwnProperty: l }) => (r, s) => l.call(r, s))(Object.prototype), ib = tn("RegExp"), kh = (l, r) => {
  const s = Object.getOwnPropertyDescriptors(l), o = {};
  zi(s, (c, d) => {
    let m;
    (m = r(c, d, l)) !== !1 && (o[d] = m || c);
  }), Object.defineProperties(l, o);
}, rb = (l) => {
  kh(l, (r, s) => {
    if (xt(l) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const o = l[s];
    if (xt(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, ub = (l, r) => {
  const s = {}, o = (c) => {
    c.forEach((d) => {
      s[d] = !0;
    });
  };
  return Sl(l) ? o(l) : o(String(l).split(r)), s;
}, sb = () => {
}, ob = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function cb(l) {
  return !!(l && xt(l.append) && l[Hh] === "FormData" && l[bu]);
}
const fb = (l) => {
  const r = new Array(10), s = (o, c) => {
    if (Mi(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (Ui(o))
        return o;
      if (!("toJSON" in o)) {
        r[c] = o;
        const d = Sl(o) ? [] : {};
        return zi(o, (m, y) => {
          const p = s(m, c + 1);
          !vl(p) && (d[y] = p);
        }), r[c] = void 0, d;
      }
    }
    return o;
  };
  return s(l, 0);
}, db = tn("AsyncFunction"), mb = (l) => l && (Mi(l) || xt(l)) && xt(l.then) && xt(l.catch), Xh = ((l, r) => l ? setImmediate : r ? ((s, o) => (Ta.addEventListener("message", ({ source: c, data: d }) => {
  c === Ta && d === s && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), Ta.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  xt(Ta.postMessage)
), hb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Ta) : typeof km < "u" && km.nextTick || Xh, gb = (l) => l != null && xt(l[bu]), U = {
  isArray: Sl,
  isArrayBuffer: Bh,
  isBuffer: Ui,
  isFormData: Yv,
  isArrayBufferView: Uv,
  isString: Mv,
  isNumber: qh,
  isBoolean: zv,
  isObject: Mi,
  isPlainObject: su,
  isEmptyObject: Lv,
  isReadableStream: Xv,
  isRequest: Vv,
  isResponse: Kv,
  isHeaders: Qv,
  isUndefined: vl,
  isDate: jv,
  isFile: Hv,
  isBlob: Bv,
  isRegExp: ib,
  isFunction: xt,
  isStream: Gv,
  isURLSearchParams: kv,
  isTypedArray: eb,
  isFileList: qv,
  forEach: zi,
  merge: rc,
  extend: Jv,
  trim: Zv,
  stripBOM: $v,
  inherits: Fv,
  toFlatObject: Wv,
  kindOf: Eu,
  kindOfTest: tn,
  endsWith: Iv,
  toArray: Pv,
  forEachEntry: tb,
  matchAll: nb,
  isHTMLForm: ab,
  hasOwnProperty: Xm,
  hasOwnProp: Xm,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: kh,
  freezeMethods: rb,
  toObjectSet: ub,
  toCamelCase: lb,
  noop: sb,
  toFiniteNumber: ob,
  findKey: Gh,
  global: Ta,
  isContextDefined: Yh,
  isSpecCompliantForm: cb,
  toJSONObject: fb,
  isAsyncFn: db,
  isThenable: mb,
  setImmediate: Xh,
  asap: hb,
  isIterable: gb
};
function oe(l, r, s, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
}
U.inherits(oe, Error, {
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
const Vh = oe.prototype, Kh = {};
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
].forEach((l) => {
  Kh[l] = { value: l };
});
Object.defineProperties(oe, Kh);
Object.defineProperty(Vh, "isAxiosError", { value: !0 });
oe.from = (l, r, s, o, c, d) => {
  const m = Object.create(Vh);
  U.toFlatObject(l, m, function(b) {
    return b !== Error.prototype;
  }, (g) => g !== "isAxiosError");
  const y = l && l.message ? l.message : "Error", p = r == null && l ? l.code : r;
  return oe.call(m, y, p, s, o, c), l && m.cause == null && Object.defineProperty(m, "cause", { value: l, configurable: !0 }), m.name = l && l.name || "Error", d && Object.assign(m, d), m;
};
const yb = null;
function uc(l) {
  return U.isPlainObject(l) || U.isArray(l);
}
function Qh(l) {
  return U.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function Vm(l, r, s) {
  return l ? l.concat(r).map(function(c, d) {
    return c = Qh(c), !s && d ? "[" + c + "]" : c;
  }).join(s ? "." : "") : r;
}
function pb(l) {
  return U.isArray(l) && !l.some(uc);
}
const vb = U.toFlatObject(U, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function wu(l, r, s) {
  if (!U.isObject(l))
    throw new TypeError("target must be an object");
  r = r || new FormData(), s = U.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(z, D) {
    return !U.isUndefined(D[z]);
  });
  const o = s.metaTokens, c = s.visitor || b, d = s.dots, m = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(r);
  if (!U.isFunction(c))
    throw new TypeError("visitor must be a function");
  function g(A) {
    if (A === null) return "";
    if (U.isDate(A))
      return A.toISOString();
    if (U.isBoolean(A))
      return A.toString();
    if (!p && U.isBlob(A))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(A) || U.isTypedArray(A) ? p && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function b(A, z, D) {
    let G = A;
    if (A && !D && typeof A == "object") {
      if (U.endsWith(z, "{}"))
        z = o ? z : z.slice(0, -2), A = JSON.stringify(A);
      else if (U.isArray(A) && pb(A) || (U.isFileList(A) || U.endsWith(z, "[]")) && (G = U.toArray(A)))
        return z = Qh(z), G.forEach(function(Q, I) {
          !(U.isUndefined(Q) || Q === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? Vm([z], I, d) : m === null ? z : z + "[]",
            g(Q)
          );
        }), !1;
    }
    return uc(A) ? !0 : (r.append(Vm(D, z, d), g(A)), !1);
  }
  const R = [], C = Object.assign(vb, {
    defaultVisitor: b,
    convertValue: g,
    isVisitable: uc
  });
  function q(A, z) {
    if (!U.isUndefined(A)) {
      if (R.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + z.join("."));
      R.push(A), U.forEach(A, function(G, V) {
        (!(U.isUndefined(G) || G === null) && c.call(
          r,
          G,
          U.isString(V) ? V.trim() : V,
          z,
          C
        )) === !0 && q(G, z ? z.concat(V) : [V]);
      }), R.pop();
    }
  }
  if (!U.isObject(l))
    throw new TypeError("data must be an object");
  return q(l), r;
}
function Km(l) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g, function(o) {
    return r[o];
  });
}
function bc(l, r) {
  this._pairs = [], l && wu(l, this, r);
}
const Zh = bc.prototype;
Zh.append = function(r, s) {
  this._pairs.push([r, s]);
};
Zh.toString = function(r) {
  const s = r ? function(o) {
    return r.call(this, o, Km);
  } : Km;
  return this._pairs.map(function(c) {
    return s(c[0]) + "=" + s(c[1]);
  }, "").join("&");
};
function bb(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Jh(l, r, s) {
  if (!r)
    return l;
  const o = s && s.encode || bb;
  U.isFunction(s) && (s = {
    serialize: s
  });
  const c = s && s.serialize;
  let d;
  if (c ? d = c(r, s) : d = U.isURLSearchParams(r) ? r.toString() : new bc(r, s).toString(o), d) {
    const m = l.indexOf("#");
    m !== -1 && (l = l.slice(0, m)), l += (l.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return l;
}
class Qm {
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
    U.forEach(this.handlers, function(o) {
      o !== null && r(o);
    });
  }
}
const $h = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Eb = typeof URLSearchParams < "u" ? URLSearchParams : bc, Sb = typeof FormData < "u" ? FormData : null, wb = typeof Blob < "u" ? Blob : null, Rb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Eb,
    FormData: Sb,
    Blob: wb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ec = typeof window < "u" && typeof document < "u", sc = typeof navigator == "object" && navigator || void 0, Tb = Ec && (!sc || ["ReactNative", "NativeScript", "NS"].indexOf(sc.product) < 0), xb = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ab = Ec && window.location.href || "http://localhost", Cb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ec,
  hasStandardBrowserEnv: Tb,
  hasStandardBrowserWebWorkerEnv: xb,
  navigator: sc,
  origin: Ab
}, Symbol.toStringTag, { value: "Module" })), mt = {
  ...Cb,
  ...Rb
};
function Nb(l, r) {
  return wu(l, new mt.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return mt.isNode && U.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function _b(l) {
  return U.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Ob(l) {
  const r = {}, s = Object.keys(l);
  let o;
  const c = s.length;
  let d;
  for (o = 0; o < c; o++)
    d = s[o], r[d] = l[d];
  return r;
}
function Fh(l) {
  function r(s, o, c, d) {
    let m = s[d++];
    if (m === "__proto__") return !0;
    const y = Number.isFinite(+m), p = d >= s.length;
    return m = !m && U.isArray(c) ? c.length : m, p ? (U.hasOwnProp(c, m) ? c[m] = [c[m], o] : c[m] = o, !y) : ((!c[m] || !U.isObject(c[m])) && (c[m] = []), r(s, o, c[m], d) && U.isArray(c[m]) && (c[m] = Ob(c[m])), !y);
  }
  if (U.isFormData(l) && U.isFunction(l.entries)) {
    const s = {};
    return U.forEachEntry(l, (o, c) => {
      r(_b(o), c, s, 0);
    }), s;
  }
  return null;
}
function Db(l, r, s) {
  if (U.isString(l))
    try {
      return (r || JSON.parse)(l), U.trim(l);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (s || JSON.stringify)(l);
}
const Li = {
  transitional: $h,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const o = s.getContentType() || "", c = o.indexOf("application/json") > -1, d = U.isObject(r);
    if (d && U.isHTMLForm(r) && (r = new FormData(r)), U.isFormData(r))
      return c ? JSON.stringify(Fh(r)) : r;
    if (U.isArrayBuffer(r) || U.isBuffer(r) || U.isStream(r) || U.isFile(r) || U.isBlob(r) || U.isReadableStream(r))
      return r;
    if (U.isArrayBufferView(r))
      return r.buffer;
    if (U.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let y;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return Nb(r, this.formSerializer).toString();
      if ((y = U.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return wu(
          y ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || c ? (s.setContentType("application/json", !1), Db(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || Li.transitional, o = s && s.forcedJSONParsing, c = this.responseType === "json";
    if (U.isResponse(r) || U.isReadableStream(r))
      return r;
    if (r && U.isString(r) && (o && !this.responseType || c)) {
      const m = !(s && s.silentJSONParsing) && c;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (y) {
        if (m)
          throw y.name === "SyntaxError" ? oe.from(y, oe.ERR_BAD_RESPONSE, this, null, this.response) : y;
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
    FormData: mt.classes.FormData,
    Blob: mt.classes.Blob
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
U.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  Li.headers[l] = {};
});
const Ub = U.toObjectSet([
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
]), Mb = (l) => {
  const r = {};
  let s, o, c;
  return l && l.split(`
`).forEach(function(m) {
    c = m.indexOf(":"), s = m.substring(0, c).trim().toLowerCase(), o = m.substring(c + 1).trim(), !(!s || r[s] && Ub[s]) && (s === "set-cookie" ? r[s] ? r[s].push(o) : r[s] = [o] : r[s] = r[s] ? r[s] + ", " + o : o);
  }), r;
}, Zm = /* @__PURE__ */ Symbol("internals");
function Si(l) {
  return l && String(l).trim().toLowerCase();
}
function ou(l) {
  return l === !1 || l == null ? l : U.isArray(l) ? l.map(ou) : String(l);
}
function zb(l) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = s.exec(l); )
    r[o[1]] = o[2];
  return r;
}
const Lb = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function ec(l, r, s, o, c) {
  if (U.isFunction(o))
    return o.call(this, r, s);
  if (c && (r = s), !!U.isString(r)) {
    if (U.isString(o))
      return r.indexOf(o) !== -1;
    if (U.isRegExp(o))
      return o.test(r);
  }
}
function jb(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, o) => s.toUpperCase() + o);
}
function Hb(l, r) {
  const s = U.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(l, o + s, {
      value: function(c, d, m) {
        return this[o].call(this, r, c, d, m);
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
    function d(y, p, g) {
      const b = Si(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const R = U.findKey(c, b);
      (!R || c[R] === void 0 || g === !0 || g === void 0 && c[R] !== !1) && (c[R || p] = ou(y));
    }
    const m = (y, p) => U.forEach(y, (g, b) => d(g, b, p));
    if (U.isPlainObject(r) || r instanceof this.constructor)
      m(r, s);
    else if (U.isString(r) && (r = r.trim()) && !Lb(r))
      m(Mb(r), s);
    else if (U.isObject(r) && U.isIterable(r)) {
      let y = {}, p, g;
      for (const b of r) {
        if (!U.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        y[g = b[0]] = (p = y[g]) ? U.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      m(y, s);
    } else
      r != null && d(s, r, o);
    return this;
  }
  get(r, s) {
    if (r = Si(r), r) {
      const o = U.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!s)
          return c;
        if (s === !0)
          return zb(c);
        if (U.isFunction(s))
          return s.call(this, c, o);
        if (U.isRegExp(s))
          return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = Si(r), r) {
      const o = U.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!s || ec(this, this[o], o, s)));
    }
    return !1;
  }
  delete(r, s) {
    const o = this;
    let c = !1;
    function d(m) {
      if (m = Si(m), m) {
        const y = U.findKey(o, m);
        y && (!s || ec(o, o[y], y, s)) && (delete o[y], c = !0);
      }
    }
    return U.isArray(r) ? r.forEach(d) : d(r), c;
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
    return U.forEach(this, (c, d) => {
      const m = U.findKey(o, d);
      if (m) {
        s[m] = ou(c), delete s[d];
        return;
      }
      const y = r ? jb(d) : String(d).trim();
      y !== d && delete s[d], s[y] = ou(c), o[y] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const s = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (o, c) => {
      o != null && o !== !1 && (s[c] = r && U.isArray(o) ? o.join(", ") : o);
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
    const o = (this[Zm] = this[Zm] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function d(m) {
      const y = Si(m);
      o[y] || (Hb(c, m), o[y] = !0);
    }
    return U.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
At.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(At.prototype, ({ value: l }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(o) {
      this[s] = o;
    }
  };
});
U.freezeMethods(At);
function tc(l, r) {
  const s = this || Li, o = r || s, c = At.from(o.headers);
  let d = o.data;
  return U.forEach(l, function(y) {
    d = y.call(s, d, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), d;
}
function Wh(l) {
  return !!(l && l.__CANCEL__);
}
function wl(l, r, s) {
  oe.call(this, l ?? "canceled", oe.ERR_CANCELED, r, s), this.name = "CanceledError";
}
U.inherits(wl, oe, {
  __CANCEL__: !0
});
function Ih(l, r, s) {
  const o = s.config.validateStatus;
  !s.status || !o || o(s.status) ? l(s) : r(new oe(
    "Request failed with status code " + s.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function Bb(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function qb(l, r) {
  l = l || 10;
  const s = new Array(l), o = new Array(l);
  let c = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const g = Date.now(), b = o[d];
    m || (m = g), s[c] = p, o[c] = g;
    let R = d, C = 0;
    for (; R !== c; )
      C += s[R++], R = R % l;
    if (c = (c + 1) % l, c === d && (d = (d + 1) % l), g - m < r)
      return;
    const q = b && g - b;
    return q ? Math.round(C * 1e3 / q) : void 0;
  };
}
function Gb(l, r) {
  let s = 0, o = 1e3 / r, c, d;
  const m = (g, b = Date.now()) => {
    s = b, c = null, d && (clearTimeout(d), d = null), l(...g);
  };
  return [(...g) => {
    const b = Date.now(), R = b - s;
    R >= o ? m(g, b) : (c = g, d || (d = setTimeout(() => {
      d = null, m(c);
    }, o - R)));
  }, () => c && m(c)];
}
const hu = (l, r, s = 3) => {
  let o = 0;
  const c = qb(50, 250);
  return Gb((d) => {
    const m = d.loaded, y = d.lengthComputable ? d.total : void 0, p = m - o, g = c(p), b = m <= y;
    o = m;
    const R = {
      loaded: m,
      total: y,
      progress: y ? m / y : void 0,
      bytes: p,
      rate: g || void 0,
      estimated: g && y && b ? (y - m) / g : void 0,
      event: d,
      lengthComputable: y != null,
      [r ? "download" : "upload"]: !0
    };
    l(R);
  }, s);
}, Jm = (l, r) => {
  const s = l != null;
  return [(o) => r[0]({
    lengthComputable: s,
    total: l,
    loaded: o
  }), r[1]];
}, $m = (l) => (...r) => U.asap(() => l(...r)), Yb = mt.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (s) => (s = new URL(s, mt.origin), l.protocol === s.protocol && l.host === s.host && (r || l.port === s.port)))(
  new URL(mt.origin),
  mt.navigator && /(msie|trident)/i.test(mt.navigator.userAgent)
) : () => !0, kb = mt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(l, r, s, o, c, d, m) {
      if (typeof document > "u") return;
      const y = [`${l}=${encodeURIComponent(r)}`];
      U.isNumber(s) && y.push(`expires=${new Date(s).toUTCString()}`), U.isString(o) && y.push(`path=${o}`), U.isString(c) && y.push(`domain=${c}`), d === !0 && y.push("secure"), U.isString(m) && y.push(`SameSite=${m}`), document.cookie = y.join("; ");
    },
    read(l) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + l + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
    },
    remove(l) {
      this.write(l, "", Date.now() - 864e5, "/");
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
function Xb(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Vb(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function Ph(l, r, s) {
  let o = !Xb(r);
  return l && (o || s == !1) ? Vb(l, r) : r;
}
const Fm = (l) => l instanceof At ? { ...l } : l;
function Aa(l, r) {
  r = r || {};
  const s = {};
  function o(g, b, R, C) {
    return U.isPlainObject(g) && U.isPlainObject(b) ? U.merge.call({ caseless: C }, g, b) : U.isPlainObject(b) ? U.merge({}, b) : U.isArray(b) ? b.slice() : b;
  }
  function c(g, b, R, C) {
    if (U.isUndefined(b)) {
      if (!U.isUndefined(g))
        return o(void 0, g, R, C);
    } else return o(g, b, R, C);
  }
  function d(g, b) {
    if (!U.isUndefined(b))
      return o(void 0, b);
  }
  function m(g, b) {
    if (U.isUndefined(b)) {
      if (!U.isUndefined(g))
        return o(void 0, g);
    } else return o(void 0, b);
  }
  function y(g, b, R) {
    if (R in r)
      return o(g, b);
    if (R in l)
      return o(void 0, g);
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
    validateStatus: y,
    headers: (g, b, R) => c(Fm(g), Fm(b), R, !0)
  };
  return U.forEach(Object.keys({ ...l, ...r }), function(b) {
    const R = p[b] || c, C = R(l[b], r[b], b);
    U.isUndefined(C) && R !== y || (s[b] = C);
  }), s;
}
const eg = (l) => {
  const r = Aa({}, l);
  let { data: s, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: d, headers: m, auth: y } = r;
  if (r.headers = m = At.from(m), r.url = Jh(Ph(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), y && m.set(
    "Authorization",
    "Basic " + btoa((y.username || "") + ":" + (y.password ? unescape(encodeURIComponent(y.password)) : ""))
  ), U.isFormData(s)) {
    if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (U.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), g = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, R]) => {
        g.includes(b.toLowerCase()) && m.set(b, R);
      });
    }
  }
  if (mt.hasStandardBrowserEnv && (o && U.isFunction(o) && (o = o(r)), o || o !== !1 && Yb(r.url))) {
    const p = c && d && kb.read(d);
    p && m.set(c, p);
  }
  return r;
}, Kb = typeof XMLHttpRequest < "u", Qb = Kb && function(l) {
  return new Promise(function(s, o) {
    const c = eg(l);
    let d = c.data;
    const m = At.from(c.headers).normalize();
    let { responseType: y, onUploadProgress: p, onDownloadProgress: g } = c, b, R, C, q, A;
    function z() {
      q && q(), A && A(), c.cancelToken && c.cancelToken.unsubscribe(b), c.signal && c.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(c.method.toUpperCase(), c.url, !0), D.timeout = c.timeout;
    function G() {
      if (!D)
        return;
      const Q = At.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), W = {
        data: !y || y === "text" || y === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: Q,
        config: l,
        request: D
      };
      Ih(function(re) {
        s(re), z();
      }, function(re) {
        o(re), z();
      }, W), D = null;
    }
    "onloadend" in D ? D.onloadend = G : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, D.onabort = function() {
      D && (o(new oe("Request aborted", oe.ECONNABORTED, l, D)), D = null);
    }, D.onerror = function(I) {
      const W = I && I.message ? I.message : "Network Error", me = new oe(W, oe.ERR_NETWORK, l, D);
      me.event = I || null, o(me), D = null;
    }, D.ontimeout = function() {
      let I = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const W = c.transitional || $h;
      c.timeoutErrorMessage && (I = c.timeoutErrorMessage), o(new oe(
        I,
        W.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        l,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && U.forEach(m.toJSON(), function(I, W) {
      D.setRequestHeader(W, I);
    }), U.isUndefined(c.withCredentials) || (D.withCredentials = !!c.withCredentials), y && y !== "json" && (D.responseType = c.responseType), g && ([C, A] = hu(g, !0), D.addEventListener("progress", C)), p && D.upload && ([R, q] = hu(p), D.upload.addEventListener("progress", R), D.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (b = (Q) => {
      D && (o(!Q || Q.type ? new wl(null, l, D) : Q), D.abort(), D = null);
    }, c.cancelToken && c.cancelToken.subscribe(b), c.signal && (c.signal.aborted ? b() : c.signal.addEventListener("abort", b)));
    const V = Bb(c.url);
    if (V && mt.protocols.indexOf(V) === -1) {
      o(new oe("Unsupported protocol " + V + ":", oe.ERR_BAD_REQUEST, l));
      return;
    }
    D.send(d || null);
  });
}, Zb = (l, r) => {
  const { length: s } = l = l ? l.filter(Boolean) : [];
  if (r || s) {
    let o = new AbortController(), c;
    const d = function(g) {
      if (!c) {
        c = !0, y();
        const b = g instanceof Error ? g : this.reason;
        o.abort(b instanceof oe ? b : new wl(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new oe(`timeout ${r} of ms exceeded`, oe.ETIMEDOUT));
    }, r);
    const y = () => {
      l && (m && clearTimeout(m), m = null, l.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(d) : g.removeEventListener("abort", d);
      }), l = null);
    };
    l.forEach((g) => g.addEventListener("abort", d));
    const { signal: p } = o;
    return p.unsubscribe = () => U.asap(y), p;
  }
}, Jb = function* (l, r) {
  let s = l.byteLength;
  if (s < r) {
    yield l;
    return;
  }
  let o = 0, c;
  for (; o < s; )
    c = o + r, yield l.slice(o, c), o = c;
}, $b = async function* (l, r) {
  for await (const s of Fb(l))
    yield* Jb(s, r);
}, Fb = async function* (l) {
  if (l[Symbol.asyncIterator]) {
    yield* l;
    return;
  }
  const r = l.getReader();
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
}, Wm = (l, r, s, o) => {
  const c = $b(l, r);
  let d = 0, m, y = (p) => {
    m || (m = !0, o && o(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: g, value: b } = await c.next();
        if (g) {
          y(), p.close();
          return;
        }
        let R = b.byteLength;
        if (s) {
          let C = d += R;
          s(C);
        }
        p.enqueue(new Uint8Array(b));
      } catch (g) {
        throw y(g), g;
      }
    },
    cancel(p) {
      return y(p), c.return();
    }
  }, {
    highWaterMark: 2
  });
}, Im = 64 * 1024, { isFunction: iu } = U, Wb = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(U.global), {
  ReadableStream: Pm,
  TextEncoder: eh
} = U.global, th = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, Ib = (l) => {
  l = U.merge.call({
    skipUndefined: !0
  }, Wb, l);
  const { fetch: r, Request: s, Response: o } = l, c = r ? iu(r) : typeof fetch == "function", d = iu(s), m = iu(o);
  if (!c)
    return !1;
  const y = c && iu(Pm), p = c && (typeof eh == "function" ? /* @__PURE__ */ ((A) => (z) => A.encode(z))(new eh()) : async (A) => new Uint8Array(await new s(A).arrayBuffer())), g = d && y && th(() => {
    let A = !1;
    const z = new s(mt.origin, {
      body: new Pm(),
      method: "POST",
      get duplex() {
        return A = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !z;
  }), b = m && y && th(() => U.isReadableStream(new o("").body)), R = {
    stream: b && ((A) => A.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
    !R[A] && (R[A] = (z, D) => {
      let G = z && z[A];
      if (G)
        return G.call(z);
      throw new oe(`Response type '${A}' is not supported`, oe.ERR_NOT_SUPPORT, D);
    });
  });
  const C = async (A) => {
    if (A == null)
      return 0;
    if (U.isBlob(A))
      return A.size;
    if (U.isSpecCompliantForm(A))
      return (await new s(mt.origin, {
        method: "POST",
        body: A
      }).arrayBuffer()).byteLength;
    if (U.isArrayBufferView(A) || U.isArrayBuffer(A))
      return A.byteLength;
    if (U.isURLSearchParams(A) && (A = A + ""), U.isString(A))
      return (await p(A)).byteLength;
  }, q = async (A, z) => {
    const D = U.toFiniteNumber(A.getContentLength());
    return D ?? C(z);
  };
  return async (A) => {
    let {
      url: z,
      method: D,
      data: G,
      signal: V,
      cancelToken: Q,
      timeout: I,
      onDownloadProgress: W,
      onUploadProgress: me,
      responseType: re,
      headers: ae,
      withCredentials: ee = "same-origin",
      fetchOptions: ce
    } = eg(A), Le = r || fetch;
    re = re ? (re + "").toLowerCase() : "text";
    let Ne = Zb([V, Q && Q.toAbortSignal()], I), _e = null;
    const Je = Ne && Ne.unsubscribe && (() => {
      Ne.unsubscribe();
    });
    let Xe;
    try {
      if (me && g && D !== "get" && D !== "head" && (Xe = await q(ae, G)) !== 0) {
        let Re = new s(z, {
          method: "POST",
          body: G,
          duplex: "half"
        }), S;
        if (U.isFormData(G) && (S = Re.headers.get("content-type")) && ae.setContentType(S), Re.body) {
          const [j, K] = Jm(
            Xe,
            hu($m(me))
          );
          G = Wm(Re.body, Im, j, K);
        }
      }
      U.isString(ee) || (ee = ee ? "include" : "omit");
      const k = d && "credentials" in s.prototype, Y = {
        ...ce,
        signal: Ne,
        method: D.toUpperCase(),
        headers: ae.normalize().toJSON(),
        body: G,
        duplex: "half",
        credentials: k ? ee : void 0
      };
      _e = d && new s(z, Y);
      let X = await (d ? Le(_e, ce) : Le(z, Y));
      const ue = b && (re === "stream" || re === "response");
      if (b && (W || ue && Je)) {
        const Re = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Re[Z] = X[Z];
        });
        const S = U.toFiniteNumber(X.headers.get("content-length")), [j, K] = W && Jm(
          S,
          hu($m(W), !0)
        ) || [];
        X = new o(
          Wm(X.body, Im, j, () => {
            K && K(), Je && Je();
          }),
          Re
        );
      }
      re = re || "text";
      let Ae = await R[U.findKey(R, re) || "text"](X, A);
      return !ue && Je && Je(), await new Promise((Re, S) => {
        Ih(Re, S, {
          data: Ae,
          headers: At.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: A,
          request: _e
        });
      });
    } catch (k) {
      throw Je && Je(), k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message) ? Object.assign(
        new oe("Network Error", oe.ERR_NETWORK, A, _e),
        {
          cause: k.cause || k
        }
      ) : oe.from(k, k && k.code, A, _e);
    }
  };
}, Pb = /* @__PURE__ */ new Map(), tg = (l) => {
  let r = l && l.env || {};
  const { fetch: s, Request: o, Response: c } = r, d = [
    o,
    c,
    s
  ];
  let m = d.length, y = m, p, g, b = Pb;
  for (; y--; )
    p = d[y], g = b.get(p), g === void 0 && b.set(p, g = y ? /* @__PURE__ */ new Map() : Ib(r)), b = g;
  return g;
};
tg();
const Sc = {
  http: yb,
  xhr: Qb,
  fetch: {
    get: tg
  }
};
U.forEach(Sc, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const nh = (l) => `- ${l}`, eE = (l) => U.isFunction(l) || l === null || l === !1;
function tE(l, r) {
  l = U.isArray(l) ? l : [l];
  const { length: s } = l;
  let o, c;
  const d = {};
  for (let m = 0; m < s; m++) {
    o = l[m];
    let y;
    if (c = o, !eE(o) && (c = Sc[(y = String(o)).toLowerCase()], c === void 0))
      throw new oe(`Unknown adapter '${y}'`);
    if (c && (U.isFunction(c) || (c = c.get(r))))
      break;
    d[y || "#" + m] = c;
  }
  if (!c) {
    const m = Object.entries(d).map(
      ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let y = s ? m.length > 1 ? `since :
` + m.map(nh).join(`
`) : " " + nh(m[0]) : "as no adapter specified";
    throw new oe(
      "There is no suitable adapter to dispatch the request " + y,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const ng = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: tE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Sc
};
function nc(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new wl(null, l);
}
function ah(l) {
  return nc(l), l.headers = At.from(l.headers), l.data = tc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), ng.getAdapter(l.adapter || Li.adapter, l)(l).then(function(o) {
    return nc(l), o.data = tc.call(
      l,
      l.transformResponse,
      o
    ), o.headers = At.from(o.headers), o;
  }, function(o) {
    return Wh(o) || (nc(l), o && o.response && (o.response.data = tc.call(
      l,
      l.transformResponse,
      o.response
    ), o.response.headers = At.from(o.response.headers))), Promise.reject(o);
  });
}
const ag = "1.13.2", Ru = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  Ru[l] = function(o) {
    return typeof o === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const lh = {};
Ru.transitional = function(r, s, o) {
  function c(d, m) {
    return "[Axios v" + ag + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, y) => {
    if (r === !1)
      throw new oe(
        c(m, " has been removed" + (s ? " in " + s : "")),
        oe.ERR_DEPRECATED
      );
    return s && !lh[m] && (lh[m] = !0, console.warn(
      c(
        m,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, m, y) : !0;
  };
};
Ru.spelling = function(r) {
  return (s, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function nE(l, r, s) {
  if (typeof l != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(l);
  let c = o.length;
  for (; c-- > 0; ) {
    const d = o[c], m = r[d];
    if (m) {
      const y = l[d], p = y === void 0 || m(y, d, l);
      if (p !== !0)
        throw new oe("option " + d + " must be " + p, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new oe("Unknown option " + d, oe.ERR_BAD_OPTION);
  }
}
const cu = {
  assertOptions: nE,
  validators: Ru
}, un = cu.validators;
let xa = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new Qm(),
      response: new Qm()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = Aa(this.defaults, s);
    const { transitional: o, paramsSerializer: c, headers: d } = s;
    o !== void 0 && cu.assertOptions(o, {
      silentJSONParsing: un.transitional(un.boolean),
      forcedJSONParsing: un.transitional(un.boolean),
      clarifyTimeoutError: un.transitional(un.boolean)
    }, !1), c != null && (U.isFunction(c) ? s.paramsSerializer = {
      serialize: c
    } : cu.assertOptions(c, {
      encode: un.function,
      serialize: un.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), cu.assertOptions(s, {
      baseUrl: un.spelling("baseURL"),
      withXsrfToken: un.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let m = d && U.merge(
      d.common,
      d[s.method]
    );
    d && U.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete d[A];
      }
    ), s.headers = At.concat(m, d);
    const y = [];
    let p = !0;
    this.interceptors.request.forEach(function(z) {
      typeof z.runWhen == "function" && z.runWhen(s) === !1 || (p = p && z.synchronous, y.unshift(z.fulfilled, z.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(z) {
      g.push(z.fulfilled, z.rejected);
    });
    let b, R = 0, C;
    if (!p) {
      const A = [ah.bind(this), void 0];
      for (A.unshift(...y), A.push(...g), C = A.length, b = Promise.resolve(s); R < C; )
        b = b.then(A[R++], A[R++]);
      return b;
    }
    C = y.length;
    let q = s;
    for (; R < C; ) {
      const A = y[R++], z = y[R++];
      try {
        q = A(q);
      } catch (D) {
        z.call(this, D);
        break;
      }
    }
    try {
      b = ah.call(this, q);
    } catch (A) {
      return Promise.reject(A);
    }
    for (R = 0, C = g.length; R < C; )
      b = b.then(g[R++], g[R++]);
    return b;
  }
  getUri(r) {
    r = Aa(this.defaults, r);
    const s = Ph(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Jh(s, r.params, r.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(r) {
  xa.prototype[r] = function(s, o) {
    return this.request(Aa(o || {}, {
      method: r,
      url: s,
      data: (o || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(r) {
  function s(o) {
    return function(d, m, y) {
      return this.request(Aa(y || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  xa.prototype[r] = s(), xa.prototype[r + "Form"] = s(!0);
});
let aE = class lg {
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
      const m = new Promise((y) => {
        o.subscribe(y), d = y;
      }).then(c);
      return m.cancel = function() {
        o.unsubscribe(d);
      }, m;
    }, r(function(d, m, y) {
      o.reason || (o.reason = new wl(d, m, y), s(o.reason));
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
      token: new lg(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function lE(l) {
  return function(s) {
    return l.apply(null, s);
  };
}
function iE(l) {
  return U.isObject(l) && l.isAxiosError === !0;
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
Object.entries(oc).forEach(([l, r]) => {
  oc[r] = l;
});
function ig(l) {
  const r = new xa(l), s = jh(xa.prototype.request, r);
  return U.extend(s, xa.prototype, r, { allOwnKeys: !0 }), U.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(c) {
    return ig(Aa(l, c));
  }, s;
}
const He = ig(Li);
He.Axios = xa;
He.CanceledError = wl;
He.CancelToken = aE;
He.isCancel = Wh;
He.VERSION = ag;
He.toFormData = wu;
He.AxiosError = oe;
He.Cancel = He.CanceledError;
He.all = function(r) {
  return Promise.all(r);
};
He.spread = lE;
He.isAxiosError = iE;
He.mergeConfig = Aa;
He.AxiosHeaders = At;
He.formToJSON = (l) => Fh(U.isHTMLForm(l) ? new FormData(l) : l);
He.getAdapter = ng.getAdapter;
He.HttpStatusCode = oc;
He.default = He;
const {
  Axios: _E,
  AxiosError: OE,
  CanceledError: DE,
  isCancel: UE,
  CancelToken: ME,
  VERSION: zE,
  all: LE,
  Cancel: jE,
  isAxiosError: HE,
  spread: BE,
  toFormData: qE,
  AxiosHeaders: GE,
  HttpStatusCode: YE,
  formToJSON: kE,
  getAdapter: XE,
  mergeConfig: VE
} = He, rg = "WEBCOMPONENT";
function rE(l) {
  l ? localStorage.setItem(pe.AUTHORITY_OVERRIDE, l) : localStorage.removeItem(pe.AUTHORITY_OVERRIDE);
}
function uE() {
  return localStorage.getItem(pe.AUTHORITY_OVERRIDE);
}
function ih() {
  localStorage.removeItem(pe.AUTHORITY_OVERRIDE);
}
function sE() {
  const l = uE();
  if (l && Object.values(Jt).includes(l))
    return l;
  const r = window.location.hostname;
  return r === Cn.HOSTNAME || r === Cn.IP || Cn.IP_PATTERN.test(r) || r.startsWith(`${Qe.DEV}.`) || r.startsWith(`${Qe.DEV}-`) ? Jt.DEV : r.startsWith(`${Qe.TEST}.`) || r.startsWith(`${Qe.TEST}-`) ? Jt.TEST : r.startsWith(`${Qe.STAGE}.`) || r.startsWith(`${Qe.STAGE}-`) ? Jt.STAGE : Jt.PROD;
}
function oE(l) {
  if (rg === pc.TEST)
    return "";
  const r = sE();
  return l.startsWith("/global") ? xv[r] : Tv[r];
}
const _a = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return rg === pc.TEST ? r : `${oE(r)}${r}`;
}, cE = async (l) => {
  try {
    return (await He.get(_a(Na.GLOBAL_SUBSIDIARIES)))?.data?.find(
      (o) => o?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function Rl() {
  const l = localStorage.getItem(pe.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), s = await cE(r?.domain);
  return {
    [Fo.X_BRAND_ID]: s?.subsidiaryName,
    [Fo.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [Fo.X_BRAND_DOMAIN]: r?.domain
  };
}
const fE = async (l, r) => {
  const s = _a(Na.AUTH), o = { username: l, password: r };
  try {
    const c = await He.post(s, o, {
      headers: await Rl()
    }), d = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: d || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === vu.UNAUTHORIZED ? new Error(it.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(it.AUTH_FAILED);
  }
}, dE = async (l) => {
  const r = _a(Na.REGISTER);
  try {
    return (await He.post(r, l, {
      headers: await Rl()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === vu.INTERNAL_SERVER_ERROR ? new Error(it.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(it.REGISTRATION_FAILED);
  }
}, wc = async (l) => {
  const r = _a(Na.CHECK_EMAIL);
  try {
    return (await He.post(
      r,
      { email: l },
      {
        headers: await Rl()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, rh = async (l) => {
  const r = _a(Na.FORGOT_PASSWORD), s = { email: l };
  try {
    return (await He.post(r, s, {
      headers: await Rl()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === vu.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(it.RESET_LINK_FAILED);
  }
}, mE = async (l) => {
  const r = _a(Na.REFRESH_TOKEN), s = { refresh_token: l };
  try {
    const o = await He.post(r, s, {
      headers: await Rl()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, hE = async (l) => {
  const r = _a(Na.LOGOUT), s = { refresh_token: l };
  try {
    return (await He.post(r, s, {
      headers: await Rl()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === vu.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, gE = () => {
  try {
    const l = Rt(Ge.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = Di(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch (l) {
    return console.error(`${Ze.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, gu = () => Rt(Ge.REFRESH_TOKEN, !1) || localStorage.getItem(pe.REFRESH_TOKEN), Ci = (l) => {
  try {
    const r = Di(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch {
    return !0;
  }
}, cc = (l) => !Ci(l);
let fu = null;
const yl = () => {
  fu && (clearInterval(fu), fu = null);
}, Rc = async (l) => {
  try {
    const r = l || gu();
    if (!r)
      return !1;
    const s = await mE(r);
    if (!s?.tokens?.access_token)
      return !1;
    const o = s.tokens, c = du(o.access_token);
    if (!c)
      return !1;
    const d = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    Ra(Ge.ACCESS_TOKEN, o.access_token, d, !0);
    const m = s.x_credential || c.decoded.x_credentials;
    if (m && Ra(Ge.X_CREDENTIAL, m, d, !1), localStorage.setItem(pe.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      pe.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(pe.REFRESH_TOKEN, o.refresh_token);
      const y = 720 * 60 * 60;
      Ra(Ge.REFRESH_TOKEN, o.refresh_token, y, !0), localStorage.getItem(pe.REFRESH_TOKEN_TIME) && localStorage.setItem(pe.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Ze.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, yE = async () => {
  const l = gu();
  if (!(Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN)) || !l || !cc(l))
    return yl(), !0;
  yl();
  const s = 180 * 1e3;
  return fu = setInterval(async () => {
    const o = gu();
    if (!(Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN))) {
      yl();
      return;
    }
    if (!o || !cc(o)) {
      yl();
      return;
    }
    const d = Rt(Ge.X_CREDENTIAL, !1) || Rt(Ge.X_CREDENTIAL_OLD, !1), m = Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN);
    (!d || Ci(d) || !m || Ci(m)) && await Rc(o);
  }, s), () => yl();
}, uh = (l) => {
  try {
    if (!localStorage.getItem(pe.REFRESH_TOKEN_TIME))
      return console.log(
        `${Ze.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Ze.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = Rt(Ge.X_CREDENTIAL, !1) || Rt(Ge.X_CREDENTIAL_OLD, !1), o = Rt(Ge.ACCESS_TOKEN, !1);
    let c = null, d = !1;
    if (o && (c = o), s && (d = !0), c || (c = localStorage.getItem(pe.ACCESS_TOKEN)), !c || !d)
      return !1;
    const m = localStorage.getItem(pe.ACCESS_TOKEN_EXPIRES);
    if (m && Date.now() >= parseInt(m))
      return !1;
    try {
      const y = Di(c), p = Math.floor(Date.now() / 1e3);
      return !(!y.exp || p >= y.exp);
    } catch (y) {
      return console.error(`${Ze.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, y), !1;
    }
  } catch (r) {
    return console.error(`${Ze.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, pE = async (l) => {
  if (uh(l))
    return !0;
  try {
    if (!localStorage.getItem(pe.REFRESH_TOKEN_TIME))
      return !1;
    const o = gu();
    if (!o || !cc(o))
      return !1;
    const c = Rt(Ge.X_CREDENTIAL, !1) || Rt(Ge.X_CREDENTIAL_OLD, !1), d = Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN), m = !c || Ci(c), y = !d || Ci(d);
    return !m && !y || !await Rc(o) ? !1 : uh(l);
  } catch (s) {
    return console.error(`${Ze.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`, s), !1;
  }
}, vE = () => {
  try {
    const l = localStorage.getItem(pe.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < Rv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${Ze.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, bE = () => {
  lu(Ge.ACCESS_TOKEN), lu(Ge.X_CREDENTIAL), lu(Ge.X_CREDENTIAL_OLD), lu(Ge.REFRESH_TOKEN), [
    pe.REFRESH_TOKEN,
    pe.REFRESH_TOKEN_TIME,
    pe.ACCESS_TOKEN,
    pe.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Ze.AUTH} All authentication tokens and state cleared`);
}, ug = async (l, r, s = !1) => {
  const o = await fE(l, r), { tokens: c, x_credential: d } = o;
  if (c.access_token) {
    const m = Di(c.access_token), y = (m.exp || 0) - Math.floor(Date.now() / 1e3);
    Ra(Ge.ACCESS_TOKEN, c.access_token, y, !0);
    const p = d || m.x_credentials;
    p ? (Ra(Ge.X_CREDENTIAL, p, y, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), p && Ra(Ge.X_CREDENTIAL, p, y, !1), localStorage.setItem(pe.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      pe.ACCESS_TOKEN_EXPIRES,
      (Date.now() + y * 1e3).toString()
    ), localStorage.setItem(pe.REFRESH_TOKEN, c.refresh_token);
    const g = 720 * 60 * 60;
    Ra(Ge.REFRESH_TOKEN, c.refresh_token, g, !0), s && c.refresh_token ? (localStorage.setItem(pe.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Ze.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(pe.REFRESH_TOKEN_TIME), console.log(
      `${Ze.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, du = (l) => {
  try {
    const r = Di(l);
    return {
      access_token: l,
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
      `${Ze.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, Tu = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", EE = ({
  onSuccess: l,
  onError: r,
  handleClose: s,
  onSignIn: o,
  title: c = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [y, p] = T.useState(m), [g, b] = T.useState(""), [R, C] = T.useState(""), [q, A] = T.useState(""), [z, D] = T.useState(!1), [G, V] = T.useState(""), [Q, I] = T.useState(""), [W, me] = T.useState(!1), [re, ae] = T.useState(!1), [ee, ce] = T.useState(!1), [Le, Ne] = T.useState(!1), [_e, Je] = T.useState(!1), [Xe, k] = T.useState(!1), [Y, X] = T.useState(""), [ue, Ae] = T.useState(!1), [Re, S] = T.useState(""), [j, K] = T.useState(de.INFO), Z = T.useRef(null), le = T.useRef(null), J = {
    length: q.length >= tu.MIN_LENGTH && q.length <= tu.MAX_LENGTH,
    hasNumber: gl.NUMBER.test(q),
    hasUppercase: gl.UPPERCASE.test(q),
    hasLowercase: gl.LOWERCASE.test(q),
    hasSpecialChar: Gm.test(q),
    onlyAllowedChars: Ym.test(q) || q === "",
    differentFromUsername: y ? q !== y && q !== y.split("@")[0] : !0
  }, te = ((Ee) => {
    if (!Ee) return { strength: "", color: "", width: nu.EMPTY };
    if (J.length && J.hasNumber && J.hasUppercase && J.hasLowercase && J.hasSpecialChar && J.onlyAllowedChars && J.differentFromUsername)
      return {
        strength: Io.STRONG,
        color: Po.STRONG,
        width: nu.STRONG
      };
    let nt = 0;
    return J.length && nt++, J.hasNumber && nt++, J.hasUppercase && nt++, J.hasLowercase && nt++, J.hasSpecialChar && nt++, J.onlyAllowedChars && nt++, J.differentFromUsername && nt++, nt <= 2 ? {
      strength: Io.WEAK,
      color: Po.WEAK,
      width: nu.WEAK
    } : {
      strength: Io.GOOD,
      color: Po.GOOD,
      width: nu.GOOD
    };
  })(q), he = (Ee) => Ee ? Ee.length < tu.MIN_LENGTH || Ee.length > tu.MAX_LENGTH ? { isValid: !1, error: it.PASSWORD_LENGTH } : gl.UPPERCASE.test(Ee) ? gl.LOWERCASE.test(Ee) ? gl.NUMBER.test(Ee) ? Gm.test(Ee) ? Ym.test(Ee) ? { isValid: !0, error: "" } : {
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
  T.useEffect(() => {
    if (le.current && clearTimeout(le.current), !y) {
      ce(!1), Ne(!1), k(!1), X("");
      return;
    }
    if (!Ri.test(y)) {
      ce(!1), Ne(!1);
      return;
    }
    return le.current = setTimeout(async () => {
      Je(!0);
      try {
        (await wc(y)).exists ? (Ne(!0), ce(!0)) : (Ne(!1), ce(!1));
      } catch (Ee) {
        console.error(`${Ze.CREATE_ACCOUNT} Email check failed:`, Ee);
        const ft = Ee instanceof Error ? Ee.message : "Unable to verify email. You can still proceed with registration.";
        k(!0), X(ft), ce(!0), Ne(!1);
      } finally {
        Je(!1);
      }
    }, Ai.EMAIL_CHECK_DEBOUNCE), () => {
      le.current && clearTimeout(le.current);
    };
  }, [y]);
  const Ft = y && Ri.test(y);
  T.useEffect(() => {
    const Ee = (ft) => {
      ft.key === "Escape" && s();
    };
    return document.addEventListener("keydown", Ee), () => document.removeEventListener("keydown", Ee);
  }, [s]);
  const Oa = (Ee) => {
    Ee.target === Z.current && s();
  }, Tl = async (Ee) => {
    if (Ee.preventDefault(), ae(!0), !y || !g || !R) {
      r("Please fill in all required fields");
      return;
    }
    const ft = he(q);
    if (!ft.isValid) {
      I(ft.error), r(ft.error), D(!1);
      return;
    }
    if (!Ri.test(y)) {
      V(it.EMAIL_INVALID), r(it.EMAIL_INVALID);
      return;
    }
    D(!0), V(""), S("");
    try {
      const nt = y.split("@")[0], On = await dE({
        username: nt,
        email: y,
        firstName: g,
        lastName: R,
        password: q
      });
      console.log(
        `${Ze.CREATE_ACCOUNT} Registration successful:`,
        On.message
      );
      try {
        const aa = await ug(y, q, ue);
        l(aa);
      } catch (aa) {
        console.error(
          `${Ze.CREATE_ACCOUNT} Auto-login failed after registration:`,
          aa
        );
        const ji = aa instanceof Error ? aa.message : "Auto-login failed";
        r(ji);
      }
    } catch (nt) {
      console.error(`${Ze.CREATE_ACCOUNT} Registration failed:`, nt);
      const On = nt instanceof Error ? nt.message : it.REGISTRATION_FAILED;
      S(On), K(de.ERROR), r(On);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    Re && /* @__PURE__ */ v.jsx(
      ic,
      {
        type: j,
        message: Re,
        duration: Ai.TOAST_DEFAULT_DURATION,
        onClose: () => S("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Z,
        onMouseDown: Oa,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "create-account-dialog-title",
        children: /* @__PURE__ */ v.jsxs(
          "div",
          {
            part: "identity-widget-create-account-modal",
            className: "identity-widget-create-account-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative! max-h-[90vh]! overflow-y-auto! [&::-webkit-scrollbar]:w-2! [&::-webkit-scrollbar-track]:bg-gray-100! [&::-webkit-scrollbar-thumb]:bg-gray-300! [&::-webkit-scrollbar-thumb]:rounded-full! [&::-webkit-scrollbar-thumb:hover]:bg-gray-400!",
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
                  variant: Tt.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: gt.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ v.jsx(
                    "svg",
                    {
                      part: "identity-widget-create-account-close-icon",
                      className: "identity-widget-create-account-close-icon w-6! h-6!",
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
              /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-create-account-header", className: "identity-widget-create-account-header mb-6! text-center!", children: [
                /* @__PURE__ */ v.jsx(
                  "h2",
                  {
                    id: "create-account-dialog-title",
                    part: "identity-widget-create-account-title",
                    className: "identity-widget-create-account-title text-2xl! font-bold! text-gray-800! mb-1!",
                    children: c
                  }
                ),
                /* @__PURE__ */ v.jsx("p", { part: "identity-widget-create-account-subtitle", className: "identity-widget-create-account-subtitle text-sm! text-gray-600! mt-1!", children: d })
              ] }),
              /* @__PURE__ */ v.jsxs("form", { part: "identity-widget-create-account-form", onSubmit: Tl, className: "identity-widget-create-account-form space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-email-field", className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  wa,
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    value: y,
                    onChange: (Ee) => {
                      p(Ee.target.value), V("");
                    },
                    placeholder: "Enter email address",
                    disabled: z,
                    className: "identity-widget-create-account-email-input w-full!",
                    autoComplete: "email",
                    error: re && !y ? "Required" : G || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      _e && /* @__PURE__ */ v.jsx(zh, {}),
                      !_e && !Le && !Xe && y && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          part: "identity-widget-create-account-email-available-icon",
                          className: "identity-widget-create-account-email-available-icon",
                          src: Tu,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                ee && Le && !Xe && /* @__PURE__ */ v.jsx(
                  pl,
                  {
                    type: de.INFO,
                    message: "We found an existing account.",
                    actionText: "Want to sign in instead?",
                    onActionClick: () => {
                      ce(!1), o(y);
                    },
                    onClose: () => ce(!1),
                    className: "identity-widget-create-account-existing-banner mb-4!"
                  }
                ),
                ee && Xe && /* @__PURE__ */ v.jsx(
                  pl,
                  {
                    type: de.ERROR,
                    message: Y,
                    onClose: () => {
                      ce(!1), k(!1), X("");
                    },
                    className: "identity-widget-create-account-error-banner mb-4!"
                  }
                ),
                /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-create-account-name-row", className: "identity-widget-create-account-name-row flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0", children: [
                  /* @__PURE__ */ v.jsx(
                    wa,
                    {
                      label: "First Name",
                      id: "firstName",
                      type: "text",
                      value: g,
                      onChange: (Ee) => b(Ee.target.value),
                      placeholder: "First Name",
                      disabled: z,
                      className: "identity-widget-create-account-firstname-input w-full!",
                      autoComplete: "given-name",
                      error: re && !g ? "Required" : ""
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    wa,
                    {
                      label: "Last Name",
                      id: "lastName",
                      type: "text",
                      value: R,
                      onChange: (Ee) => C(Ee.target.value),
                      placeholder: "Last Name",
                      disabled: z,
                      className: "identity-widget-create-account-lastname-input w-full!",
                      autoComplete: "family-name",
                      error: re && !R ? "Required" : ""
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-password-field", className: "identity-widget-create-account-password-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-password-input-wrap", className: "identity-widget-create-account-password-input-wrap relative! w-full!", children: /* @__PURE__ */ v.jsx(
                  wa,
                  {
                    label: "Password",
                    id: "password",
                    type: W ? "text" : "password",
                    value: q,
                    onChange: (Ee) => {
                      A(Ee.target.value), I("");
                    },
                    placeholder: "Enter Password...",
                    disabled: z,
                    className: "identity-widget-create-account-password-input w-full!",
                    autoComplete: "new-password",
                    error: Q,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        part: "identity-widget-create-account-password-toggle",
                        onClick: () => me(!W),
                        className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                        tabIndex: -1,
                        "aria-label": W ? "Hide password" : "Show password",
                        children: W ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-password-hide-icon",
                            className: "identity-widget-create-account-password-hide-icon w-5! h-5!",
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
                            part: "identity-widget-create-account-password-show-icon",
                            className: "identity-widget-create-account-password-show-icon w-5! h-5!",
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
                q && /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-create-account-strength", className: "identity-widget-create-account-strength mt-2! mb-4!", children: [
                  /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-create-account-strength-row", className: "identity-widget-create-account-strength-row flex! items-center! justify-between! mb-2!", children: [
                    /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-strength-track", className: "identity-widget-create-account-strength-track w-full! bg-gray-200! rounded-full! h-2! mr-3!", children: /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-strength-fill",
                        className: "identity-widget-create-account-strength-fill h-2! rounded-full! transition-all! duration-300!",
                        style: {
                          width: te.width,
                          backgroundColor: te.color
                        }
                      }
                    ) }),
                    /* @__PURE__ */ v.jsx(
                      "span",
                      {
                        part: "identity-widget-create-account-strength-label",
                        className: "identity-widget-create-account-strength-label text-sm! font-medium! whitespace-nowrap!",
                        style: { color: te.color },
                        children: te.strength
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-create-account-requirements", className: "identity-widget-create-account-requirements mt-3!", children: [
                    /* @__PURE__ */ v.jsx("p", { part: "identity-widget-create-account-requirements-title", className: "identity-widget-create-account-requirements-title text-sm! font-medium! text-gray-700! mb-2!", children: "Password must:" }),
                    /* @__PURE__ */ v.jsxs("ul", { part: "identity-widget-create-account-requirements-list", className: "identity-widget-create-account-requirements-list space-y-1!", children: [
                      /* @__PURE__ */ v.jsxs("li", { part: "identity-widget-create-account-requirement-item", className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.length ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
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
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
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
                            part: "identity-widget-create-account-requirement-text",
                            className: `identity-widget-create-account-requirement-text ${J.length ? "text-green-600!" : "text-gray-500!"}`,
                            children: "be 9-15 characters"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { part: "identity-widget-create-account-requirement-item", className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.hasNumber ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
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
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
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
                            part: "identity-widget-create-account-requirement-text",
                            className: `identity-widget-create-account-requirement-text ${J.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
                            children: "have at least one number"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { part: "identity-widget-create-account-requirement-item", className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.hasUppercase ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
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
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
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
                            part: "identity-widget-create-account-requirement-text",
                            className: `identity-widget-create-account-requirement-text ${J.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
                            children: "have at least one uppercase letter"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { part: "identity-widget-create-account-requirement-item", className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.hasSpecialChar ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
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
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
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
                            part: "identity-widget-create-account-requirement-text",
                            className: `identity-widget-create-account-requirement-text ${J.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
                            children: "have at least one special character"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { part: "identity-widget-create-account-requirement-item", className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.onlyAllowedChars ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
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
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
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
                            part: "identity-widget-create-account-requirement-text",
                            className: `identity-widget-create-account-requirement-text ${J.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
                            children: "use only the following special characters !@#$%^&*._-"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { part: "identity-widget-create-account-requirement-item", className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.differentFromUsername ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-green-500!",
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
                            part: "identity-widget-create-account-requirement-icon",
                            className: "identity-widget-create-account-requirement-icon w-4! h-4! mr-2! text-gray-400!",
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
                            part: "identity-widget-create-account-requirement-text",
                            className: `identity-widget-create-account-requirement-text ${J.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
                            children: "be different from username"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-remember-row", className: "identity-widget-create-account-remember-row flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsxs("label", { part: "identity-widget-create-account-remember-label", className: "identity-widget-create-account-remember-label flex! items-center! m-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      type: "checkbox",
                      part: "identity-widget-create-account-remember-checkbox",
                      checked: ue,
                      onChange: (Ee) => Ae(Ee.target.checked),
                      className: "identity-widget-create-account-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                      "aria-label": "Remember me"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "span",
                    {
                      part: "identity-widget-create-account-remember-text",
                      className: "identity-widget-create-account-remember-text text-gray-600! text-sm!",
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
                    type: gt.SUBMIT,
                    disabled: z || Le || !Ft,
                    part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                    className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: z ? /* @__PURE__ */ v.jsxs("span", { part: "identity-widget-create-account-submit-loading", className: "identity-widget-create-account-submit-loading flex! items-center! justify-center!", children: [
                      /* @__PURE__ */ v.jsxs(
                        "svg",
                        {
                          part: "identity-widget-create-account-submit-spinner",
                          className: "identity-widget-create-account-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                            /* @__PURE__ */ v.jsx(
                              "circle",
                              {
                                part: "identity-widget-create-account-submit-spinner-track",
                                className: "identity-widget-create-account-submit-spinner-track opacity-25!",
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
                                part: "identity-widget-create-account-submit-spinner-fill",
                                className: "identity-widget-create-account-submit-spinner-fill opacity-75!",
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
                /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-create-account-divider", className: "identity-widget-create-account-divider relative! mt-4! mb-4!", children: [
                  /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-divider-line-wrap", className: "identity-widget-create-account-divider-line-wrap absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-divider-line", className: "identity-widget-create-account-divider-line w-full! border-t! border-solid! border-gray-300!" }) }),
                  /* @__PURE__ */ v.jsx("div", { part: "identity-widget-create-account-divider-text-wrap", className: "identity-widget-create-account-divider-text-wrap relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-create-account-divider-text", className: "identity-widget-create-account-divider-text px-2! bg-white text-gray-500", children: "OR" }) })
                ] }),
                /* @__PURE__ */ v.jsx(
                  Ht,
                  {
                    type: gt.BUTTON,
                    variant: Tt.OUTLINE,
                    onClick: () => o(y),
                    disabled: z,
                    part: "identity-widget-create-account-signin-button",
                    className: "identity-widget-create-account-signin-button w-full! flex! items-center! justify-center! gap-3!",
                    children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-create-account-signin-text", className: "identity-widget-create-account-signin-text", children: "Sign In" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    Re && /* @__PURE__ */ v.jsx(ic, { message: Re, type: j, onClose: () => S("") })
  ] });
}, SE = ({
  email: l,
  loading: r,
  onResendLink: s,
  onBack: o,
  onClose: c
}) => {
  const d = T.useRef(null);
  T.useEffect(() => {
    const y = (p) => {
      p.key === "Escape" && c();
    };
    return document.addEventListener("keydown", y), () => document.removeEventListener("keydown", y);
  }, [c]);
  const m = (y) => {
    y.target === d.current && c();
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      part: "identity-widget-reset-success-overlay",
      className: "identity-widget-reset-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-reset-success-modal", className: "identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Ht,
          {
            onClick: c,
            variant: Tt.LINK,
            part: "identity-widget-reset-success-close-button",
            className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: gt.BUTTON,
            ariaLabel: "Close dialog",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                part: "identity-widget-reset-success-close-icon",
                className: "identity-widget-reset-success-close-icon w-6! h-6!",
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
        /* @__PURE__ */ v.jsx("div", { part: "identity-widget-reset-success-icon-wrap", className: "identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!", children: /* @__PURE__ */ v.jsx("img", { part: "identity-widget-reset-success-icon", src: Tu, alt: "Success", "aria-hidden": "true", className: "identity-widget-reset-success-icon w-16! h-16!" }) }),
        /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-reset-success-header", className: "identity-widget-reset-success-header mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { part: "identity-widget-reset-success-title", id: "reset-success-dialog-title", className: "identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { part: "identity-widget-reset-success-subtitle", className: "identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { part: "identity-widget-reset-success-email", className: "identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!", children: l }),
          /* @__PURE__ */ v.jsx("p", { part: "identity-widget-reset-success-copy", className: "identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { part: "identity-widget-reset-success-note", className: "identity-widget-reset-success-note text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          Ht,
          {
            type: gt.BUTTON,
            onClick: s,
            disabled: r,
            ariaLabel: "Resend password reset link",
            part: "identity-widget-submit-button identity-widget-reset-success-resend-button",
            className: "identity-widget-submit-button identity-widget-reset-success-resend-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
            children: r ? /* @__PURE__ */ v.jsxs("span", { part: "identity-widget-reset-success-resend-loading", className: "identity-widget-reset-success-resend-loading flex! items-center! justify-center!", children: [
              /* @__PURE__ */ v.jsxs(
                "svg",
                {
                  part: "identity-widget-reset-success-resend-spinner",
                  className: "identity-widget-reset-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "circle",
                      {
                        part: "identity-widget-reset-success-resend-spinner-track",
                        className: "identity-widget-reset-success-resend-spinner-track opacity-25!",
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
                        part: "identity-widget-reset-success-resend-spinner-fill",
                        className: "identity-widget-reset-success-resend-spinner-fill opacity-75!",
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
            type: gt.BUTTON,
            variant: Tt.OUTLINE,
            onClick: o,
            disabled: r,
            part: "identity-widget-reset-success-back-button",
            className: "identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!",
            children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-reset-success-back-text", className: "identity-widget-reset-success-back-text", children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, wE = ({
  email: l,
  onBack: r,
  handleClose: s
}) => {
  const [o, c] = T.useState(l || ""), [d, m] = T.useState(!1), [y, p] = T.useState(!1), [g, b] = T.useState(""), [R, C] = T.useState(!1), [q, A] = T.useState(!1), [z, D] = T.useState(!1), [G, V] = T.useState(!1), [Q, I] = T.useState(""), W = T.useRef(null);
  T.useEffect(() => {
    const ee = (ce) => {
      ce.key === "Escape" && s();
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [s]), T.useEffect(() => {
    const ee = Ri.test(o);
    if (D(ee), !ee || !o) {
      A(!1), V(!1), I("");
      return;
    }
    const ce = setTimeout(async () => {
      C(!0);
      try {
        const Le = await wc(o);
        console.log("[ResetPassword] Email check response:", Le), A(Le.exists), console.log("[ResetPassword] Email exists:", Le.exists);
      } catch (Le) {
        console.error("[ResetPassword] Error checking email:", Le);
        const Ne = Le instanceof Error ? Le.message : "Unable to verify email. Please try again.";
        V(!0), I(Ne), A(!1);
      } finally {
        C(!1);
      }
    }, Ai.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(ce);
  }, [o]);
  const me = (ee) => {
    ee.target === W.current && s();
  }, re = async (ee) => {
    if (ee.preventDefault(), !o) {
      b(it.EMAIL_REQUIRED);
      return;
    }
    m(!0), b("");
    try {
      await rh(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
    } catch (ce) {
      console.error("[ResetPassword] Failed to send reset link:", ce);
      const Le = ce instanceof Error ? ce.message : it.RESET_LINK_FAILED;
      b(Le);
    } finally {
      m(!1);
    }
  }, ae = async () => {
    m(!0), b("");
    try {
      await rh(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (ee) {
      console.error("[ResetPassword] Failed to resend reset link:", ee), p(!1);
      const ce = ee instanceof Error ? ee.message : it.RESET_LINK_FAILED;
      b(ce);
    } finally {
      m(!1);
    }
  };
  return y ? /* @__PURE__ */ v.jsx(
    SE,
    {
      email: o,
      loading: d,
      onResendLink: ae,
      onBack: r,
      onClose: s
    }
  ) : /* @__PURE__ */ v.jsx(
    "div",
    {
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: W,
      onMouseDown: me,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-reset-password-modal", className: "identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Ht,
          {
            onClick: s,
            variant: Tt.LINK,
            part: "identity-widget-reset-password-close-button",
            className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: gt.BUTTON,
            ariaLabel: "Close dialog",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
                part: "identity-widget-reset-password-close-icon",
                className: "identity-widget-reset-password-close-icon w-6! h-6!",
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
        /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-reset-password-header", className: "identity-widget-reset-password-header mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx(
            "h2",
            {
              id: "reset-password-dialog-title",
              part: "identity-widget-reset-password-title",
              className: "identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!",
              children: "Reset your password"
            }
          ),
          /* @__PURE__ */ v.jsx("p", { part: "identity-widget-reset-password-subtitle", className: "identity-widget-reset-password-subtitle text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ v.jsxs("form", { part: "identity-widget-reset-password-form", onSubmit: re, className: "identity-widget-reset-password-form space-y-4!", "aria-label": "Reset password form", children: [
          /* @__PURE__ */ v.jsx("div", { part: "identity-widget-reset-password-email-field", className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
            wa,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: o,
              onChange: (ee) => {
                c(ee.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "identity-widget-reset-password-email-input w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                R && /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    part: "identity-widget-reset-password-email-loading",
                    className: "identity-widget-reset-password-email-loading animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!",
                    role: "status",
                    "aria-label": "Checking email"
                  }
                ),
                !R && q && z && !G && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    part: "identity-widget-reset-password-email-verified-icon",
                    className: "identity-widget-reset-password-email-verified-icon",
                    src: Tu,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          G && /* @__PURE__ */ v.jsx(
            pl,
            {
              type: de.ERROR,
              message: Q,
              onClose: () => {
                V(!1), I("");
              },
              className: "identity-widget-reset-password-email-check-error-banner mb-4!"
            }
          ),
          g && /* @__PURE__ */ v.jsx(
            pl,
            {
              type: de.ERROR,
              message: g,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "identity-widget-reset-password-submit-error-banner mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Ht,
            {
              type: gt.SUBMIT,
              part: "identity-widget-submit-button identity-widget-reset-password-submit-button",
              disabled: d || !o || !z || !q,
              className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", {
                  loading: d,
                  email: o,
                  isEmailValid: z,
                  emailExists: q
                });
              },
              children: d ? /* @__PURE__ */ v.jsxs("span", { part: "identity-widget-reset-password-submit-loading", className: "identity-widget-reset-password-submit-loading flex! items-center! justify-center!", children: [
                /* @__PURE__ */ v.jsxs(
                  "svg",
                  {
                    part: "identity-widget-reset-password-submit-spinner",
                    className: "identity-widget-reset-password-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ v.jsx(
                        "circle",
                        {
                          part: "identity-widget-reset-password-submit-spinner-track",
                          className: "identity-widget-reset-password-submit-spinner-track opacity-25!",
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
                          part: "identity-widget-reset-password-submit-spinner-fill",
                          className: "identity-widget-reset-password-submit-spinner-fill opacity-75!",
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
              type: gt.BUTTON,
              variant: Tt.OUTLINE,
              onClick: r,
              disabled: d,
              part: "identity-widget-reset-password-back-button",
              className: "identity-widget-reset-password-back-button w-full! flex! items-center! justify-center! gap-3! mt-4!",
              children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-reset-password-back-text", className: "identity-widget-reset-password-back-text", children: "Back to sign in" })
            }
          )
        ] })
      ] })
    }
  );
}, RE = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", TE = ({
  onSuccess: l,
  onError: r,
  handleClose: s,
  authority: o,
  title: c = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = "",
  enableGoogleLogin: y = !1
}) => {
  const [p, g] = T.useState(m), [b, R] = T.useState(""), [C, q] = T.useState(!1), [A, z] = T.useState(!1), [D, G] = T.useState(""), [V, Q] = T.useState(!1), [I, W] = T.useState(!1), [me, re] = T.useState(!1), [ae, ee] = T.useState(!1), [ce, Le] = T.useState(!1), [Ne, _e] = T.useState(!1), [Je, Xe] = T.useState(!1), [k, Y] = T.useState(""), [X, ue] = T.useState(""), [Ae, Re] = T.useState(de.INFO), S = T.useRef(null), j = T.useRef(null), K = wv({
    flow: "auth-code",
    onSuccess: (te) => {
      console.log("[EmbeddedLogin] Google auth-code response received", te), ue(
        "Google sign-in completed. Connect this credential to your backend login flow."
      ), Re(de.INFO), G("");
    },
    onError: (te) => {
      const he = te.error_description || te.error || "Google sign-in failed.";
      ue(he), Re(de.ERROR), r(he);
    },
    onNonOAuthError: (te) => {
      const he = `Google sign-in failed: ${te.type}`;
      ue(he), Re(de.ERROR), r(he);
    }
  });
  T.useEffect(() => {
    if (j.current && clearTimeout(j.current), !p) {
      ee(!1), _e(!1), Xe(!1), Y("");
      return;
    }
    if (!p.includes("@")) {
      ee(!0), _e(!1);
      return;
    }
    if (!Ri.test(p)) {
      ee(!1), _e(!1);
      return;
    }
    return j.current = setTimeout(async () => {
      Le(!0);
      try {
        (await wc(p)).exists ? (ee(!0), _e(!1)) : (ee(!1), _e(!0));
      } catch (te) {
        console.error("[EmbeddedLogin] Email check failed:", te);
        const he = te instanceof Error ? te.message : "Unable to verify email. You can still proceed with login.";
        Xe(!0), Y(he), _e(!0), ee(!1);
      } finally {
        Le(!1);
      }
    }, 500), () => {
      j.current && clearTimeout(j.current);
    };
  }, [p]);
  const le = p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p);
  T.useEffect(() => {
    const te = (he) => {
      he.key === "Escape" && s();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [s]);
  const J = (te) => {
    te.target === S.current && s();
  }, we = async (te) => {
    if (te.preventDefault(), !p || !b) {
      G("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    q(!0), G("");
    try {
      const he = await ug(p, b, V);
      l(he);
    } catch (he) {
      console.error("[EmbeddedLogin] Login failed:", he);
      const Ft = he instanceof Error ? he.message : "Authentication failed";
      G(Ft), ue(Ft), Re(de.ERROR), r(Ft);
    } finally {
      q(!1);
    }
  };
  return me ? /* @__PURE__ */ v.jsx(
    wE,
    {
      email: p,
      onBack: () => re(!1),
      handleClose: s
    }
  ) : I ? /* @__PURE__ */ v.jsx(
    EE,
    {
      onSuccess: (te) => {
        W(!1), l(te);
      },
      onError: r,
      handleClose: s,
      onSignIn: (te) => {
        W(!1), te && g(te);
      },
      authority: o,
      initialEmail: p
    }
  ) : /* @__PURE__ */ v.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: S,
      onMouseDown: J,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-login-modal", className: "identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
          /* @__PURE__ */ v.jsx(
            Ht,
            {
              onClick: s,
              variant: Tt.LINK,
              part: "identity-widget-login-close-button",
              className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
              type: gt.BUTTON,
              ariaLabel: "Close dialog",
              children: /* @__PURE__ */ v.jsx(
                "svg",
                {
                  part: "identity-widget-login-close-icon",
                  className: "identity-widget-login-close-icon w-6! h-6!",
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
          /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-login-header", className: "identity-widget-login-header mb-3! text-center!", children: [
            /* @__PURE__ */ v.jsx("h2", { part: "identity-widget-login-title", id: "login-dialog-title", className: "identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!", children: c }),
            /* @__PURE__ */ v.jsx("p", { part: "identity-widget-login-subtitle", className: "identity-widget-login-subtitle text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ v.jsxs("form", { part: "identity-widget-login-form", onSubmit: we, className: "identity-widget-login-form space-y-2!", "aria-label": "Login form", children: [
            y && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
              /* @__PURE__ */ v.jsx("div", { part: "identity-widget-google-section", className: "identity-widget-google-section mt-0! mb-4! hidden! justify-center!", children: /* @__PURE__ */ v.jsxs(
                Ht,
                {
                  type: gt.BUTTON,
                  variant: Tt.OUTLINE,
                  part: "identity-widget-google-button",
                  onClick: () => K(),
                  disabled: C,
                  className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                  children: [
                    /* @__PURE__ */ v.jsx("img", { part: "identity-widget-google-icon", src: RE, alt: "Google", className: "identity-widget-google-icon w-[18px]! h-[18px]!" }),
                    /* @__PURE__ */ v.jsx("span", { part: "identity-widget-google-text", className: "identity-widget-google-text", children: "Sign in with Google" })
                  ]
                }
              ) }),
              /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-login-divider", className: "identity-widget-login-divider relative! mt-2! mb-4! hidden!", children: [
                /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-divider-line-wrap", className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-divider-line", className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!" }) }),
                /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-divider-text-wrap", className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-login-divider-text", className: "identity-widget-login-divider-text px-2! bg-white text-gray-500", children: "OR" }) })
              ] })
            ] }),
            /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-email-field", className: "identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
              wa,
              {
                label: "Email or Username",
                id: "email",
                type: "text",
                value: p,
                onChange: (te) => g(te.target.value),
                placeholder: "Enter email or username",
                disabled: C,
                className: "w-full!",
                autoComplete: "username",
                endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  ce && /* @__PURE__ */ v.jsx(zh, {}),
                  !ce && ae && le && !Je && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      part: "identity-widget-login-email-verified-icon",
                      className: "identity-widget-login-email-verified-icon",
                      src: Tu,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Ne && !ae && le && !Je && /* @__PURE__ */ v.jsx(
              pl,
              {
                type: de.INFO,
                message: Av.EMAIL_NOT_FOUND,
                actionText: "Let's create one to continue?",
                onActionClick: () => {
                  _e(!1), W(!0);
                },
                onClose: () => _e(!1),
                className: "mb-4!"
              }
            ),
            Ne && Je && /* @__PURE__ */ v.jsx(
              pl,
              {
                type: de.ERROR,
                message: k,
                onClose: () => {
                  _e(!1), Xe(!1), Y("");
                },
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-password-field", className: "identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-password-input-wrap", className: "identity-widget-login-password-input-wrap relative! w-full!", children: /* @__PURE__ */ v.jsx(
              wa,
              {
                label: "Password",
                id: "password",
                type: A ? "text" : "password",
                value: b,
                onChange: (te) => {
                  R(te.target.value), G("");
                },
                placeholder: "Enter Password...",
                disabled: C,
                className: "w-full!",
                autoComplete: "current-password",
                error: D,
                endIcon: /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    type: "button",
                    part: "identity-widget-login-password-toggle",
                    onClick: () => z(!A),
                    className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    "aria-label": A ? "Hide password" : "Show password",
                    children: A ? /* @__PURE__ */ v.jsx(
                      "svg",
                      {
                        part: "identity-widget-login-password-hide-icon",
                        className: "identity-widget-login-password-hide-icon w-5! h-5!",
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
                        part: "identity-widget-login-password-show-icon",
                        className: "identity-widget-login-password-show-icon w-5! h-5!",
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
            /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-login-meta-row", className: "identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
              /* @__PURE__ */ v.jsxs("label", { part: "identity-widget-login-remember-label", className: "identity-widget-login-remember-label flex! items-center! m-0!", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    part: "identity-widget-login-remember-checkbox",
                    checked: V,
                    onChange: (te) => Q(te.target.checked),
                    className: "identity-widget-login-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                    "aria-label": "Remember me"
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  "span",
                  {
                    part: "identity-widget-login-remember-text",
                    className: "identity-widget-login-remember-text text-gray-600!",
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
                  part: "identity-widget-login-forgot-link",
                  className: "identity-widget-login-forgot-link no-underline!",
                  style: {
                    fontWeight: "500",
                    color: "#5F5B7D"
                  },
                  onClick: (te) => {
                    te.preventDefault(), re(!0);
                  },
                  children: "Forgot Password?"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              Ht,
              {
                type: gt.SUBMIT,
                part: "identity-widget-submit-button identity-widget-login-submit-button",
                disabled: C || !p,
                className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: C ? /* @__PURE__ */ v.jsxs("span", { part: "identity-widget-login-submit-loading", className: "identity-widget-login-submit-loading flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ v.jsxs(
                    "svg",
                    {
                      part: "identity-widget-login-submit-spinner",
                      className: "identity-widget-login-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
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
            /* @__PURE__ */ v.jsxs("div", { part: "identity-widget-login-bottom-divider", className: "identity-widget-login-bottom-divider relative! mt-4! mb-4!", children: [
              /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-bottom-divider-line-wrap", className: "identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-bottom-divider-line", className: "identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!" }) }),
              /* @__PURE__ */ v.jsx("div", { part: "identity-widget-login-bottom-divider-text-wrap", className: "identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-login-bottom-divider-text", className: "identity-widget-login-bottom-divider-text px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ v.jsx(
              Ht,
              {
                type: gt.BUTTON,
                variant: Tt.OUTLINE,
                part: "identity-widget-login-create-account-button",
                onClick: () => W(!0),
                disabled: C,
                className: "identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-login-create-account-text", className: "identity-widget-login-create-account-text", children: "Create an Account" })
              }
            )
          ] })
        ] }),
        X && /* @__PURE__ */ v.jsx(ic, { message: X, type: Ae, onClose: () => ue("") })
      ]
    }
  );
}, xE = (l) => {
  const { authority: r, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = l, [d, m] = T.useState(!1);
  T.useEffect(() => (r ? (rE(r), console.log(`${Ze.AUTH} Authority override set to: ${r}`)) : (ih(), console.log(`${Ze.AUTH} Using automatic authority detection`)), () => {
    ih();
  }), [r]), T.useEffect(() => {
    let b;
    return (async () => {
      const C = await yE();
      typeof C == "function" && (b = C);
    })(), () => {
      b && b();
    };
  }, [d]), T.useEffect(() => {
    (async () => {
      try {
        const R = !gE();
        if (c && c(R), await pE()) {
          m(!0);
          const A = l.redirectUrl || au();
          if (l.autoRedirection)
            window.location.href = A;
          else if (o && l.redirectUrl) {
            const z = l.redirectUrl || au(), D = localStorage.getItem(pe.ACCESS_TOKEN);
            if (D) {
              const G = du(D);
              G && o(z, G);
            }
          }
          return;
        }
        if (vE()) {
          if (await Rc()) {
            const z = localStorage.getItem(pe.ACCESS_TOKEN);
            if (!z)
              return;
            const D = du(z);
            if (!D)
              return;
            console.log(`${Ze.AUTH} Auto-login successful`), m(!0), c && c(!0);
            const G = l.redirectUrl || au();
            o && (console.log(
              `${Ze.AUTH} Triggering onRedirect callback with user session:`,
              D
            ), o(G, D)), l.autoRedirection && (window.location.href = G);
          }
        } else
          localStorage.removeItem(pe.REFRESH_TOKEN), localStorage.removeItem(pe.REFRESH_TOKEN_TIME);
      } catch (R) {
        console.error(`${Ze.AUTH} Auto-login failed:`, R), localStorage.removeItem(pe.REFRESH_TOKEN), localStorage.removeItem(pe.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), T.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const y = () => {
    l.handleClose && l.handleClose(), m(!0);
    const b = l.redirectUrl || au();
    if (o) {
      const R = localStorage.getItem(pe.ACCESS_TOKEN);
      if (R) {
        const C = du(R);
        C && o(b, C);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = b;
    }, 100);
  }, p = (b) => {
    console.log(`${Ze.AUTH} Embedded login error:`, b);
  }, g = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(U1, { children: /* @__PURE__ */ v.jsx(
    Ch,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(T.Fragment, { children: l.showLogin && !d && /* @__PURE__ */ v.jsx(
        TE,
        {
          onSuccess: y,
          onError: p,
          handleClose: g,
          authority: r,
          title: l.loginTitle,
          subtitle: l.loginSubtitle,
          enableGoogleLogin: !!l.googleClientId
        }
      ) })
    }
  ) }) });
};
class AE {
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
      const m = await d.json(), y = document.documentElement;
      m.styles.forEach((p) => {
        let g = p.value;
        /^\d+\s\d+\s\d+$/.test(g) && (g = `rgb(${g})`), y.style.setProperty(`--${p.name}`, g);
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
async function sh(l) {
  const r = new AE(l.cdnBaseUrl, l.shadowRoot), s = l.brandFolder || l.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (l.autoDetect) {
    const o = await r.detectBrandFromDomain();
    o && await r.loadTheme(o);
  }
  return r;
}
const oh = "832956972051-o6rtl5uehltu7di3cmrvao44mdh54911.apps.googleusercontent.com", ch = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class l extends HTMLElement {
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
        "autoRedirection",
        "google-client-id",
        "googleClientId"
      ];
    }
    // Store function props
    onRedirect;
    onClose;
    onLogout;
    onTokenValidityCheck;
    connectedCallback() {
      const s = this.attachShadow({ mode: "open" });
      if (ch) {
        const d = document.createElement("style");
        d.textContent = ch, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const o = this.getAttribute("subsidiary");
      o && o.trim() !== "" ? this.loadTheme(o, s) : this.loadThemeFromDomain(s);
      const c = document.createElement("div");
      s.appendChild(c), this.root = vv.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
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
        await sh({
          brandFolder: s,
          shadowRoot: o
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await sh({
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
          const o = Rt(Ge.REFRESH_TOKEN, !0) || localStorage.getItem(pe.REFRESH_TOKEN);
          o ? (await hE(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (o) {
          console.error("[Widget] Logout API call failed:", o);
        } finally {
          bE(), localStorage.clear(), sessionStorage.clear(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
      const o = this.getAttribute("authority") || Ov(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: o,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: d,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || oh,
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
        /* @__PURE__ */ v.jsx(Ev, { clientId: s.googleClientId || oh, children: /* @__PURE__ */ v.jsx(nv, { children: /* @__PURE__ */ v.jsx(T.StrictMode, { children: /* @__PURE__ */ v.jsx(xE, { ...s }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
