
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-10\\!:disabled{opacity:.1!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media not all and (min-width:500px){.max-\\[500px\\]\\:flex-col\\!{flex-direction:column!important}.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:self-start\\!{align-self:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-cta);--button-primary-bg-hover: var(--color-cta-light);--button-primary-text: var(--color-primary);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function Up(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Vo = { exports: {} }, Si = {};
var N0;
function Mp() {
  if (N0) return Si;
  N0 = 1;
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
  return Si.Fragment = r, Si.jsx = s, Si.jsxs = s, Si;
}
var _0;
function zp() {
  return _0 || (_0 = 1, Vo.exports = Mp()), Vo.exports;
}
var v = zp(), Ko = { exports: {} }, ae = {}, O0;
function Lp() {
  if (O0) return ae;
  O0 = 1;
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
  }, D = Object.assign, k = {};
  function K(S, j, V) {
    this.props = S, this.context = j, this.refs = k, this.updater = V || z;
  }
  K.prototype.isReactComponent = {}, K.prototype.setState = function(S, j) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, j, "setState");
  }, K.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = K.prototype;
  function F(S, j, V) {
    this.props = S, this.context = j, this.refs = k, this.updater = V || z;
  }
  var W = F.prototype = new Z();
  W.constructor = F, D(W, K.prototype), W.isPureReactComponent = !0;
  var he = Array.isArray;
  function le() {
  }
  var P = { H: null, A: null, T: null, S: null }, te = Object.prototype.hasOwnProperty;
  function we(S, j, V) {
    var Q = V.ref;
    return {
      $$typeof: r,
      type: S,
      key: j,
      ref: Q !== void 0 ? Q : null,
      props: V
    };
  }
  function _e(S, j) {
    return we(S.type, j, S.props);
  }
  function Te(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Ve(S) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(V) {
      return j[V];
    });
  }
  var Ke = /\/+/g;
  function Le(S, j) {
    return typeof S == "object" && S !== null && S.key != null ? Ve("" + S.key) : j.toString(36);
  }
  function Y(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(le, le) : (S.status = "pending", S.then(
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
  function G(S, j, V, Q, oe) {
    var ce = typeof S;
    (ce === "undefined" || ce === "boolean") && (S = null);
    var ge = !1;
    if (S === null) ge = !0;
    else
      switch (ce) {
        case "bigint":
        case "string":
        case "number":
          ge = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case s:
              ge = !0;
              break;
            case R:
              return ge = S._init, G(
                ge(S._payload),
                j,
                V,
                Q,
                oe
              );
          }
      }
    if (ge)
      return oe = oe(S), ge = Q === "" ? "." + Le(S, 0) : Q, he(oe) ? (V = "", ge != null && (V = ge.replace(Ke, "$&/") + "/"), G(oe, j, V, "", function(_t) {
        return _t;
      })) : oe != null && (Te(oe) && (oe = _e(
        oe,
        V + (oe.key == null || S && S.key === oe.key ? "" : ("" + oe.key).replace(
          Ke,
          "$&/"
        ) + "/") + ge
      )), j.push(oe)), 1;
    ge = 0;
    var ne = Q === "" ? "." : Q + ":";
    if (he(S))
      for (var Ye = 0; Ye < S.length; Ye++)
        Q = S[Ye], ce = ne + Le(Q, Ye), ge += G(
          Q,
          j,
          V,
          ce,
          oe
        );
    else if (Ye = A(S), typeof Ye == "function")
      for (S = Ye.call(S), Ye = 0; !(Q = S.next()).done; )
        Q = Q.value, ce = ne + Le(Q, Ye++), ge += G(
          Q,
          j,
          V,
          ce,
          oe
        );
    else if (ce === "object") {
      if (typeof S.then == "function")
        return G(
          Y(S),
          j,
          V,
          Q,
          oe
        );
      throw j = String(S), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ge;
  }
  function X(S, j, V) {
    if (S == null) return S;
    var Q = [], oe = 0;
    return G(S, Q, "", "", function(ce) {
      return j.call(V, ce, oe++);
    }), Q;
  }
  function de(S) {
    if (S._status === -1) {
      var j = S._result;
      j = j(), j.then(
        function(V) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = V);
        },
        function(V) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = V);
        }
      ), S._status === -1 && (S._status = 0, S._result = j);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var Re = typeof reportError == "function" ? reportError : function(S) {
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
  }, Ce = {
    map: X,
    forEach: function(S, j, V) {
      X(
        S,
        function() {
          j.apply(this, arguments);
        },
        V
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
      if (!Te(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ae.Activity = C, ae.Children = Ce, ae.Component = K, ae.Fragment = o, ae.Profiler = d, ae.PureComponent = F, ae.StrictMode = c, ae.Suspense = g, ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, ae.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return P.H.useMemoCache(S);
    }
  }, ae.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ae.cacheSignal = function() {
    return null;
  }, ae.cloneElement = function(S, j, V) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var Q = D({}, S.props), oe = S.key;
    if (j != null)
      for (ce in j.key !== void 0 && (oe = "" + j.key), j)
        !te.call(j, ce) || ce === "key" || ce === "__self" || ce === "__source" || ce === "ref" && j.ref === void 0 || (Q[ce] = j[ce]);
    var ce = arguments.length - 2;
    if (ce === 1) Q.children = V;
    else if (1 < ce) {
      for (var ge = Array(ce), ne = 0; ne < ce; ne++)
        ge[ne] = arguments[ne + 2];
      Q.children = ge;
    }
    return we(S.type, oe, Q);
  }, ae.createContext = function(S) {
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
  }, ae.createElement = function(S, j, V) {
    var Q, oe = {}, ce = null;
    if (j != null)
      for (Q in j.key !== void 0 && (ce = "" + j.key), j)
        te.call(j, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (oe[Q] = j[Q]);
    var ge = arguments.length - 2;
    if (ge === 1) oe.children = V;
    else if (1 < ge) {
      for (var ne = Array(ge), Ye = 0; Ye < ge; Ye++)
        ne[Ye] = arguments[Ye + 2];
      oe.children = ne;
    }
    if (S && S.defaultProps)
      for (Q in ge = S.defaultProps, ge)
        oe[Q] === void 0 && (oe[Q] = ge[Q]);
    return we(S, ce, oe);
  }, ae.createRef = function() {
    return { current: null };
  }, ae.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ae.isValidElement = Te, ae.lazy = function(S) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: S },
      _init: de
    };
  }, ae.memo = function(S, j) {
    return {
      $$typeof: b,
      type: S,
      compare: j === void 0 ? null : j
    };
  }, ae.startTransition = function(S) {
    var j = P.T, V = {};
    P.T = V;
    try {
      var Q = S(), oe = P.S;
      oe !== null && oe(V, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(le, Re);
    } catch (ce) {
      Re(ce);
    } finally {
      j !== null && V.types !== null && (j.types = V.types), P.T = j;
    }
  }, ae.unstable_useCacheRefresh = function() {
    return P.H.useCacheRefresh();
  }, ae.use = function(S) {
    return P.H.use(S);
  }, ae.useActionState = function(S, j, V) {
    return P.H.useActionState(S, j, V);
  }, ae.useCallback = function(S, j) {
    return P.H.useCallback(S, j);
  }, ae.useContext = function(S) {
    return P.H.useContext(S);
  }, ae.useDebugValue = function() {
  }, ae.useDeferredValue = function(S, j) {
    return P.H.useDeferredValue(S, j);
  }, ae.useEffect = function(S, j) {
    return P.H.useEffect(S, j);
  }, ae.useEffectEvent = function(S) {
    return P.H.useEffectEvent(S);
  }, ae.useId = function() {
    return P.H.useId();
  }, ae.useImperativeHandle = function(S, j, V) {
    return P.H.useImperativeHandle(S, j, V);
  }, ae.useInsertionEffect = function(S, j) {
    return P.H.useInsertionEffect(S, j);
  }, ae.useLayoutEffect = function(S, j) {
    return P.H.useLayoutEffect(S, j);
  }, ae.useMemo = function(S, j) {
    return P.H.useMemo(S, j);
  }, ae.useOptimistic = function(S, j) {
    return P.H.useOptimistic(S, j);
  }, ae.useReducer = function(S, j, V) {
    return P.H.useReducer(S, j, V);
  }, ae.useRef = function(S) {
    return P.H.useRef(S);
  }, ae.useState = function(S) {
    return P.H.useState(S);
  }, ae.useSyncExternalStore = function(S, j, V) {
    return P.H.useSyncExternalStore(
      S,
      j,
      V
    );
  }, ae.useTransition = function() {
    return P.H.useTransition();
  }, ae.version = "19.2.3", ae;
}
var D0;
function gc() {
  return D0 || (D0 = 1, Ko.exports = Lp()), Ko.exports;
}
var T = gc();
const jp = /* @__PURE__ */ Up(T);
var U0 = "popstate";
function Hp(l = {}) {
  function r(o, c) {
    let { pathname: d, search: m, hash: y } = o.location;
    return rc(
      "",
      { pathname: d, search: m, hash: y },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function s(o, c) {
    return typeof c == "string" ? c : Ni(c);
  }
  return qp(
    r,
    s,
    null,
    l
  );
}
function Qe(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function nn(l, r) {
  if (!l) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Bp() {
  return Math.random().toString(36).substring(2, 10);
}
function M0(l, r) {
  return {
    usr: l.state,
    key: l.key,
    idx: r
  };
}
function rc(l, r, s = null, o) {
  return {
    pathname: typeof l == "string" ? l : l.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Sl(r) : r,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || o || Bp()
  };
}
function Ni({
  pathname: l = "/",
  search: r = "",
  hash: s = ""
}) {
  return r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r), s && s !== "#" && (l += s.charAt(0) === "#" ? s : "#" + s), l;
}
function Sl(l) {
  let r = {};
  if (l) {
    let s = l.indexOf("#");
    s >= 0 && (r.hash = l.substring(s), l = l.substring(0, s));
    let o = l.indexOf("?");
    o >= 0 && (r.search = l.substring(o), l = l.substring(0, o)), l && (r.pathname = l);
  }
  return r;
}
function qp(l, r, s, o = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = o, m = c.history, y = "POP", p = null, g = b();
  g == null && (g = 0, m.replaceState({ ...m.state, idx: g }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function R() {
    y = "POP";
    let D = b(), k = D == null ? null : D - g;
    g = D, p && p({ action: y, location: z.location, delta: k });
  }
  function C(D, k) {
    y = "PUSH";
    let K = rc(z.location, D, k);
    g = b() + 1;
    let Z = M0(K, g), F = z.createHref(K);
    try {
      m.pushState(Z, "", F);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      c.location.assign(F);
    }
    d && p && p({ action: y, location: z.location, delta: 1 });
  }
  function q(D, k) {
    y = "REPLACE";
    let K = rc(z.location, D, k);
    g = b();
    let Z = M0(K, g), F = z.createHref(K);
    m.replaceState(Z, "", F), d && p && p({ action: y, location: z.location, delta: 0 });
  }
  function A(D) {
    return Gp(D);
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
      return c.addEventListener(U0, R), p = D, () => {
        c.removeEventListener(U0, R), p = null;
      };
    },
    createHref(D) {
      return r(c, D);
    },
    createURL: A,
    encodeLocation(D) {
      let k = A(D);
      return {
        pathname: k.pathname,
        search: k.search,
        hash: k.hash
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
function Gp(l, r = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Qe(s, "No window.location.(origin|href) available to create URL");
  let o = typeof l == "string" ? l : Ni(l);
  return o = o.replace(/ $/, "%20"), !r && o.startsWith("//") && (o = s + o), new URL(o, s);
}
function gh(l, r, s = "/") {
  return kp(l, r, s, !1);
}
function kp(l, r, s, o) {
  let c = typeof r == "string" ? Sl(r) : r, d = Dn(c.pathname || "/", s);
  if (d == null)
    return null;
  let m = yh(l);
  Yp(m);
  let y = null;
  for (let p = 0; y == null && p < m.length; ++p) {
    let g = Pp(d);
    y = Wp(
      m[p],
      g,
      o
    );
  }
  return y;
}
function yh(l, r = [], s = [], o = "", c = !1) {
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
      Qe(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(o.length);
    }
    let R = _n([o, b.relativePath]), C = s.concat(b);
    m.children && m.children.length > 0 && (Qe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), yh(
      m.children,
      r,
      C,
      R,
      p
    )), !(m.path == null && !m.index) && r.push({
      path: R,
      score: $p(R, m.index),
      routesMeta: C
    });
  };
  return l.forEach((m, y) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, y);
    else
      for (let p of ph(m.path))
        d(m, y, !0, p);
  }), r;
}
function ph(l) {
  let r = l.split("/");
  if (r.length === 0) return [];
  let [s, ...o] = r, c = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [d, ""] : [d];
  let m = ph(o.join("/")), y = [];
  return y.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), c && y.push(...m), y.map(
    (p) => l.startsWith("/") && p === "" ? "/" : p
  );
}
function Yp(l) {
  l.sort(
    (r, s) => r.score !== s.score ? s.score - r.score : Fp(
      r.routesMeta.map((o) => o.childrenIndex),
      s.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Xp = /^:[\w-]+$/, Vp = 3, Kp = 2, Qp = 1, Zp = 10, Jp = -2, z0 = (l) => l === "*";
function $p(l, r) {
  let s = l.split("/"), o = s.length;
  return s.some(z0) && (o += Jp), r && (o += Kp), s.filter((c) => !z0(c)).reduce(
    (c, d) => c + (Xp.test(d) ? Vp : d === "" ? Qp : Zp),
    o
  );
}
function Fp(l, r) {
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
function Wp(l, r, s = !1) {
  let { routesMeta: o } = l, c = {}, d = "/", m = [];
  for (let y = 0; y < o.length; ++y) {
    let p = o[y], g = y === o.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", R = yu(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
      b
    ), C = p.route;
    if (!R && g && s && !o[o.length - 1].route.index && (R = yu(
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
      pathname: _n([d, R.pathname]),
      pathnameBase: a1(
        _n([d, R.pathnameBase])
      ),
      route: C
    }), R.pathnameBase !== "/" && (d = _n([d, R.pathnameBase]));
  }
  return m;
}
function yu(l, r) {
  typeof l == "string" && (l = { path: l, caseSensitive: !1, end: !0 });
  let [s, o] = Ip(
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
function Ip(l, r = !1, s = !0) {
  nn(
    l === "*" || !l.endsWith("*") || l.endsWith("/*"),
    `Route path "${l}" will be treated as if it were "${l.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + l.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, y, p) => (o.push({ paramName: y, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return l.endsWith("*") ? (o.push({ paramName: "*" }), c += l === "*" || l === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : l !== "" && l !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, r ? void 0 : "i"), o];
}
function Pp(l) {
  try {
    return l.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return nn(
      !1,
      `The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), l;
  }
}
function Dn(l, r) {
  if (r === "/") return l;
  if (!l.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let s = r.endsWith("/") ? r.length - 1 : r.length, o = l.charAt(s);
  return o && o !== "/" ? null : l.slice(s) || "/";
}
var vh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, e1 = (l) => vh.test(l);
function t1(l, r = "/") {
  let {
    pathname: s,
    search: o = "",
    hash: c = ""
  } = typeof l == "string" ? Sl(l) : l, d;
  if (s)
    if (e1(s))
      d = s;
    else {
      if (s.includes("//")) {
        let m = s;
        s = s.replace(/\/\/+/g, "/"), nn(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${s}`
        );
      }
      s.startsWith("/") ? d = L0(s.substring(1), "/") : d = L0(s, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: l1(o),
    hash: i1(c)
  };
}
function L0(l, r) {
  let s = r.replace(/\/+$/, "").split("/");
  return l.split("/").forEach((c) => {
    c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
  }), s.length > 1 ? s.join("/") : "/";
}
function Qo(l, r, s, o) {
  return `Cannot include a '${l}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function n1(l) {
  return l.filter(
    (r, s) => s === 0 || r.route.path && r.route.path.length > 0
  );
}
function bh(l) {
  let r = n1(l);
  return r.map(
    (s, o) => o === r.length - 1 ? s.pathname : s.pathnameBase
  );
}
function Eh(l, r, s, o = !1) {
  let c;
  typeof l == "string" ? c = Sl(l) : (c = { ...l }, Qe(
    !c.pathname || !c.pathname.includes("?"),
    Qo("?", "pathname", "search", c)
  ), Qe(
    !c.pathname || !c.pathname.includes("#"),
    Qo("#", "pathname", "hash", c)
  ), Qe(
    !c.search || !c.search.includes("#"),
    Qo("#", "search", "hash", c)
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
  let p = t1(c, y), g = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (g || b) && (p.pathname += "/"), p;
}
var _n = (l) => l.join("/").replace(/\/\/+/g, "/"), a1 = (l) => l.replace(/\/+$/, "").replace(/^\/*/, "/"), l1 = (l) => !l || l === "?" ? "" : l.startsWith("?") ? l : "?" + l, i1 = (l) => !l || l === "#" ? "" : l.startsWith("#") ? l : "#" + l, r1 = class {
  constructor(l, r, s, o = !1) {
    this.status = l, this.statusText = r || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function u1(l) {
  return l != null && typeof l.status == "number" && typeof l.statusText == "string" && typeof l.internal == "boolean" && "data" in l;
}
function s1(l) {
  return l.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var Sh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function wh(l, r) {
  let s = l;
  if (typeof s != "string" || !vh.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let o = s, c = !1;
  if (Sh)
    try {
      let d = new URL(window.location.href), m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), y = Dn(m.pathname, r);
      m.origin === d.origin && y != null ? s = y + m.search + m.hash : c = !0;
    } catch {
      nn(
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
var Rh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Rh
);
var o1 = [
  "GET",
  ...Rh
];
new Set(o1);
var wl = T.createContext(null);
wl.displayName = "DataRouter";
var Eu = T.createContext(null);
Eu.displayName = "DataRouterState";
var c1 = T.createContext(!1), Th = T.createContext({
  isTransitioning: !1
});
Th.displayName = "ViewTransition";
var f1 = T.createContext(
  /* @__PURE__ */ new Map()
);
f1.displayName = "Fetchers";
var d1 = T.createContext(null);
d1.displayName = "Await";
var It = T.createContext(
  null
);
It.displayName = "Navigation";
var Ui = T.createContext(
  null
);
Ui.displayName = "Location";
var Un = T.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Un.displayName = "Route";
var yc = T.createContext(null);
yc.displayName = "RouteError";
var xh = "REACT_ROUTER_ERROR", m1 = "REDIRECT", h1 = "ROUTE_ERROR_RESPONSE";
function g1(l) {
  if (l.startsWith(`${xh}:${m1}:{`))
    try {
      let r = JSON.parse(l.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function y1(l) {
  if (l.startsWith(
    `${xh}:${h1}:{`
  ))
    try {
      let r = JSON.parse(l.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new r1(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function p1(l, { relative: r } = {}) {
  Qe(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = T.useContext(It), { hash: c, pathname: d, search: m } = zi(l, { relative: r }), y = d;
  return s !== "/" && (y = d === "/" ? s : _n([s, d])), o.createHref({ pathname: y, search: m, hash: c });
}
function Mi() {
  return T.useContext(Ui) != null;
}
function Ua() {
  return Qe(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), T.useContext(Ui).location;
}
var Ah = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Ch(l) {
  T.useContext(It).static || T.useLayoutEffect(l);
}
function v1() {
  let { isDataRoute: l } = T.useContext(Un);
  return l ? D1() : b1();
}
function b1() {
  Qe(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let l = T.useContext(wl), { basename: r, navigator: s } = T.useContext(It), { matches: o } = T.useContext(Un), { pathname: c } = Ua(), d = JSON.stringify(bh(o)), m = T.useRef(!1);
  return Ch(() => {
    m.current = !0;
  }), T.useCallback(
    (p, g = {}) => {
      if (nn(m.current, Ah), !m.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let b = Eh(
        p,
        JSON.parse(d),
        c,
        g.relative === "path"
      );
      l == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : _n([r, b.pathname])), (g.replace ? s.replace : s.push)(
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
function zi(l, { relative: r } = {}) {
  let { matches: s } = T.useContext(Un), { pathname: o } = Ua(), c = JSON.stringify(bh(s));
  return T.useMemo(
    () => Eh(
      l,
      JSON.parse(c),
      o,
      r === "path"
    ),
    [l, c, o, r]
  );
}
function E1(l, r) {
  return Nh(l, r);
}
function Nh(l, r, s, o, c) {
  Qe(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = T.useContext(It), { matches: m } = T.useContext(Un), y = m[m.length - 1], p = y ? y.params : {}, g = y ? y.pathname : "/", b = y ? y.pathnameBase : "/", R = y && y.route;
  {
    let K = R && R.path || "";
    Oh(
      g,
      !R || K.endsWith("*") || K.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K === "/" ? "*" : `${K}/*`}">.`
    );
  }
  let C = Ua(), q;
  if (r) {
    let K = typeof r == "string" ? Sl(r) : r;
    Qe(
      b === "/" || K.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${K.pathname}" was given in the \`location\` prop.`
    ), q = K;
  } else
    q = C;
  let A = q.pathname || "/", z = A;
  if (b !== "/") {
    let K = b.replace(/^\//, "").split("/");
    z = "/" + A.replace(/^\//, "").split("/").slice(K.length).join("/");
  }
  let D = gh(l, { pathname: z });
  nn(
    R || D != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), nn(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let k = x1(
    D && D.map(
      (K) => Object.assign({}, K, {
        params: Object.assign({}, p, K.params),
        pathname: _n([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            K.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : K.pathname
        ]),
        pathnameBase: K.pathnameBase === "/" ? b : _n([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            K.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : K.pathnameBase
        ])
      })
    ),
    m,
    s,
    o,
    c
  );
  return r && k ? /* @__PURE__ */ T.createElement(
    Ui.Provider,
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
    k
  ) : k;
}
function S1() {
  let l = O1(), r = u1(l) ? `${l.status} ${l.statusText}` : l instanceof Error ? l.message : JSON.stringify(l), s = l instanceof Error ? l.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    l
  ), m = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ T.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ T.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", { style: { fontStyle: "italic" } }, r), s ? /* @__PURE__ */ T.createElement("pre", { style: c }, s) : null, m);
}
var w1 = /* @__PURE__ */ T.createElement(S1, null), _h = class extends T.Component {
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
      const s = y1(l.digest);
      s && (l = s);
    }
    let r = l !== void 0 ? /* @__PURE__ */ T.createElement(Un.Provider, { value: this.props.routeContext }, /* @__PURE__ */ T.createElement(
      yc.Provider,
      {
        value: l,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ T.createElement(R1, { error: l }, r) : r;
  }
};
_h.contextType = c1;
var Zo = /* @__PURE__ */ new WeakMap();
function R1({
  children: l,
  error: r
}) {
  let { basename: s } = T.useContext(It);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let o = g1(r.digest);
    if (o) {
      let c = Zo.get(r);
      if (c) throw c;
      let d = wh(o.location, s);
      if (Sh && !Zo.get(r))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw Zo.set(r, m), m;
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
function T1({ routeContext: l, match: r, children: s }) {
  let o = T.useContext(wl);
  return o && o.static && o.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ T.createElement(Un.Provider, { value: l }, s);
}
function x1(l, r = [], s = null, o = null, c = null) {
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
    Qe(
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
      unstable_pattern: s1(s.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (b, R, C) => {
      let q, A = !1, z = null, D = null;
      s && (q = m && R.route.id ? m[R.route.id] : void 0, z = R.route.errorElement || w1, y && (p < 0 && C === 0 ? (Oh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), A = !0, D = null) : p === C && (A = !0, D = R.route.hydrateFallbackElement || null)));
      let k = r.concat(d.slice(0, C + 1)), K = () => {
        let Z;
        return q ? Z = z : A ? Z = D : R.route.Component ? Z = /* @__PURE__ */ T.createElement(R.route.Component, null) : R.route.element ? Z = R.route.element : Z = b, /* @__PURE__ */ T.createElement(
          T1,
          {
            match: R,
            routeContext: {
              outlet: b,
              matches: k,
              isDataRoute: s != null
            },
            children: Z
          }
        );
      };
      return s && (R.route.ErrorBoundary || R.route.errorElement || C === 0) ? /* @__PURE__ */ T.createElement(
        _h,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: z,
          error: q,
          children: K(),
          routeContext: { outlet: null, matches: k, isDataRoute: !0 },
          onError: g
        }
      ) : K();
    },
    null
  );
}
function pc(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function A1(l) {
  let r = T.useContext(wl);
  return Qe(r, pc(l)), r;
}
function C1(l) {
  let r = T.useContext(Eu);
  return Qe(r, pc(l)), r;
}
function N1(l) {
  let r = T.useContext(Un);
  return Qe(r, pc(l)), r;
}
function vc(l) {
  let r = N1(l), s = r.matches[r.matches.length - 1];
  return Qe(
    s.route.id,
    `${l} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function _1() {
  return vc(
    "useRouteId"
    /* UseRouteId */
  );
}
function O1() {
  let l = T.useContext(yc), r = C1(
    "useRouteError"
    /* UseRouteError */
  ), s = vc(
    "useRouteError"
    /* UseRouteError */
  );
  return l !== void 0 ? l : r.errors?.[s];
}
function D1() {
  let { router: l } = A1(
    "useNavigate"
    /* UseNavigateStable */
  ), r = vc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = T.useRef(!1);
  return Ch(() => {
    s.current = !0;
  }), T.useCallback(
    async (c, d = {}) => {
      nn(s.current, Ah), s.current && (typeof c == "number" ? await l.navigate(c) : await l.navigate(c, { fromRouteId: r, ...d }));
    },
    [l, r]
  );
}
var j0 = {};
function Oh(l, r, s) {
  !r && !j0[l] && (j0[l] = !0, nn(!1, s));
}
T.memo(U1);
function U1({
  routes: l,
  future: r,
  state: s,
  onError: o
}) {
  return Nh(l, void 0, s, o, r);
}
function Dh(l) {
  Qe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function M1({
  basename: l = "/",
  children: r = null,
  location: s,
  navigationType: o = "POP",
  navigator: c,
  static: d = !1,
  unstable_useTransitions: m
}) {
  Qe(
    !Mi(),
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
  typeof s == "string" && (s = Sl(s));
  let {
    pathname: g = "/",
    search: b = "",
    hash: R = "",
    state: C = null,
    key: q = "default"
  } = s, A = T.useMemo(() => {
    let z = Dn(g, y);
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
  return nn(
    A != null,
    `<Router basename="${y}"> is not able to match the URL "${g}${b}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), A == null ? null : /* @__PURE__ */ T.createElement(It.Provider, { value: p }, /* @__PURE__ */ T.createElement(Ui.Provider, { children: r, value: A }));
}
function z1({
  children: l,
  location: r
}) {
  return E1(uc(l), r);
}
function uc(l, r = []) {
  let s = [];
  return T.Children.forEach(l, (o, c) => {
    if (!T.isValidElement(o))
      return;
    let d = [...r, c];
    if (o.type === T.Fragment) {
      s.push.apply(
        s,
        uc(o.props.children, d)
      );
      return;
    }
    Qe(
      o.type === Dh,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Qe(
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
    o.props.children && (m.children = uc(
      o.props.children,
      d
    )), s.push(m);
  }), s;
}
var ou = "get", cu = "application/x-www-form-urlencoded";
function Su(l) {
  return typeof HTMLElement < "u" && l instanceof HTMLElement;
}
function L1(l) {
  return Su(l) && l.tagName.toLowerCase() === "button";
}
function j1(l) {
  return Su(l) && l.tagName.toLowerCase() === "form";
}
function H1(l) {
  return Su(l) && l.tagName.toLowerCase() === "input";
}
function B1(l) {
  return !!(l.metaKey || l.altKey || l.ctrlKey || l.shiftKey);
}
function q1(l, r) {
  return l.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !B1(l);
}
var au = null;
function G1() {
  if (au === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), au = !1;
    } catch {
      au = !0;
    }
  return au;
}
var k1 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Jo(l) {
  return l != null && !k1.has(l) ? (nn(
    !1,
    `"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cu}"`
  ), null) : l;
}
function Y1(l, r) {
  let s, o, c, d, m;
  if (j1(l)) {
    let y = l.getAttribute("action");
    o = y ? Dn(y, r) : null, s = l.getAttribute("method") || ou, c = Jo(l.getAttribute("enctype")) || cu, d = new FormData(l);
  } else if (L1(l) || H1(l) && (l.type === "submit" || l.type === "image")) {
    let y = l.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = l.getAttribute("formaction") || y.getAttribute("action");
    if (o = p ? Dn(p, r) : null, s = l.getAttribute("formmethod") || y.getAttribute("method") || ou, c = Jo(l.getAttribute("formenctype")) || Jo(y.getAttribute("enctype")) || cu, d = new FormData(y, l), !G1()) {
      let { name: g, type: b, value: R } = l;
      if (b === "image") {
        let C = g ? `${g}.` : "";
        d.append(`${C}x`, "0"), d.append(`${C}y`, "0");
      } else g && d.append(g, R);
    }
  } else {
    if (Su(l))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = ou, o = null, c = cu, m = l;
  }
  return d && c === "text/plain" && (m = d, d = void 0), { action: o, method: s.toLowerCase(), encType: c, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function bc(l, r) {
  if (l === !1 || l === null || typeof l > "u")
    throw new Error(r);
}
function X1(l, r, s) {
  let o = typeof l == "string" ? new URL(
    l,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : l;
  return o.pathname === "/" ? o.pathname = `_root.${s}` : r && Dn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`, o;
}
async function V1(l, r) {
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
function K1(l) {
  return l == null ? !1 : l.href == null ? l.rel === "preload" && typeof l.imageSrcSet == "string" && typeof l.imageSizes == "string" : typeof l.rel == "string" && typeof l.href == "string";
}
async function Q1(l, r, s) {
  let o = await Promise.all(
    l.map(async (c) => {
      let d = r.routes[c.route.id];
      if (d) {
        let m = await V1(d, s);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return F1(
    o.flat(1).filter(K1).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function H0(l, r, s, o, c, d) {
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
function Z1(l, r, { includeHydrateFallback: s } = {}) {
  return J1(
    l.map((o) => {
      let c = r.routes[o.route.id];
      if (!c) return [];
      let d = [c.module];
      return c.clientActionModule && (d = d.concat(c.clientActionModule)), c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (d = d.concat(c.hydrateFallbackModule)), c.imports && (d = d.concat(c.imports)), d;
    }).flat(1)
  );
}
function J1(l) {
  return [...new Set(l)];
}
function $1(l) {
  let r = {}, s = Object.keys(l).sort();
  for (let o of s)
    r[o] = l[o];
  return r;
}
function F1(l, r) {
  let s = /* @__PURE__ */ new Set();
  return new Set(r), l.reduce((o, c) => {
    let d = JSON.stringify($1(c));
    return s.has(d) || (s.add(d), o.push({ key: d, link: c })), o;
  }, []);
}
function Uh() {
  let l = T.useContext(wl);
  return bc(
    l,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), l;
}
function W1() {
  let l = T.useContext(Eu);
  return bc(
    l,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), l;
}
var Ec = T.createContext(void 0);
Ec.displayName = "FrameworkContext";
function Mh() {
  let l = T.useContext(Ec);
  return bc(
    l,
    "You must render this element inside a <HydratedRouter> element"
  ), l;
}
function I1(l, r) {
  let s = T.useContext(Ec), [o, c] = T.useState(!1), [d, m] = T.useState(!1), { onFocus: y, onBlur: p, onMouseEnter: g, onMouseLeave: b, onTouchStart: R } = r, C = T.useRef(null);
  T.useEffect(() => {
    if (l === "render" && m(!0), l === "viewport") {
      let z = (k) => {
        k.forEach((K) => {
          m(K.isIntersecting);
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
      onFocus: wi(y, q),
      onBlur: wi(p, A),
      onMouseEnter: wi(g, q),
      onMouseLeave: wi(b, A),
      onTouchStart: wi(R, q)
    }
  ] : [!1, C, {}];
}
function wi(l, r) {
  return (s) => {
    l && l(s), s.defaultPrevented || r(s);
  };
}
function P1({ page: l, ...r }) {
  let { router: s } = Uh(), o = T.useMemo(
    () => gh(s.routes, l, s.basename),
    [s.routes, l, s.basename]
  );
  return o ? /* @__PURE__ */ T.createElement(tv, { page: l, matches: o, ...r }) : null;
}
function ev(l) {
  let { manifest: r, routeModules: s } = Mh(), [o, c] = T.useState([]);
  return T.useEffect(() => {
    let d = !1;
    return Q1(l, r, s).then(
      (m) => {
        d || c(m);
      }
    ), () => {
      d = !0;
    };
  }, [l, r, s]), o;
}
function tv({
  page: l,
  matches: r,
  ...s
}) {
  let o = Ua(), { manifest: c, routeModules: d } = Mh(), { basename: m } = Uh(), { loaderData: y, matches: p } = W1(), g = T.useMemo(
    () => H0(
      l,
      r,
      p,
      c,
      o,
      "data"
    ),
    [l, r, p, c, o]
  ), b = T.useMemo(
    () => H0(
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
    if (r.forEach((k) => {
      let K = c.routes[k.route.id];
      !K || !K.hasLoader || (!g.some((Z) => Z.route.id === k.route.id) && k.route.id in y && d[k.route.id]?.shouldRevalidate || K.hasClientLoader ? z = !0 : A.add(k.route.id));
    }), A.size === 0)
      return [];
    let D = X1(l, m, "data");
    return z && A.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((k) => A.has(k.route.id)).map((k) => k.route.id).join(",")
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
    () => Z1(b, c),
    [b, c]
  ), q = ev(b);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, R.map((A) => /* @__PURE__ */ T.createElement("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...s })), C.map((A) => /* @__PURE__ */ T.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })), q.map(({ key: A, link: z }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ T.createElement("link", { key: A, nonce: s.nonce, ...z })
  )));
}
function nv(...l) {
  return (r) => {
    l.forEach((s) => {
      typeof s == "function" ? s(r) : s != null && (s.current = r);
    });
  };
}
var av = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  av && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function lv({
  basename: l,
  children: r,
  unstable_useTransitions: s,
  window: o
}) {
  let c = T.useRef();
  c.current == null && (c.current = Hp({ window: o, v5Compat: !0 }));
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
    M1,
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
var zh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Lh = T.forwardRef(
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
    let { basename: z, unstable_useTransitions: D } = T.useContext(It), k = typeof g == "string" && zh.test(g), K = wh(g, z);
    g = K.to;
    let Z = p1(g, { relative: c }), [F, W, he] = I1(
      o,
      q
    ), le = sv(g, {
      replace: m,
      state: y,
      target: p,
      preventScrollReset: b,
      relative: c,
      viewTransition: R,
      unstable_defaultShouldRevalidate: C,
      unstable_useTransitions: D
    });
    function P(we) {
      r && r(we), we.defaultPrevented || le(we);
    }
    let te = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ T.createElement(
        "a",
        {
          ...q,
          ...he,
          href: K.absoluteURL || Z,
          onClick: K.isExternal || d ? r : P,
          ref: nv(A, W),
          target: p,
          "data-discover": !k && s === "render" ? "true" : void 0
        }
      )
    );
    return F && !k ? /* @__PURE__ */ T.createElement(T.Fragment, null, te, /* @__PURE__ */ T.createElement(P1, { page: Z })) : te;
  }
);
Lh.displayName = "Link";
var iv = T.forwardRef(
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
    let R = zi(m, { relative: g.relative }), C = Ua(), q = T.useContext(Eu), { navigator: A, basename: z } = T.useContext(It), D = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    mv(R) && y === !0, k = A.encodeLocation ? A.encodeLocation(R).pathname : R.pathname, K = C.pathname, Z = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (K = K.toLowerCase(), Z = Z ? Z.toLowerCase() : null, k = k.toLowerCase()), Z && z && (Z = Dn(Z, z) || Z);
    const F = k !== "/" && k.endsWith("/") ? k.length - 1 : k.length;
    let W = K === k || !c && K.startsWith(k) && K.charAt(F) === "/", he = Z != null && (Z === k || !c && Z.startsWith(k) && Z.charAt(k.length) === "/"), le = {
      isActive: W,
      isPending: he,
      isTransitioning: D
    }, P = W ? r : void 0, te;
    typeof o == "function" ? te = o(le) : te = [
      o,
      W ? "active" : null,
      he ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let we = typeof d == "function" ? d(le) : d;
    return /* @__PURE__ */ T.createElement(
      Lh,
      {
        ...g,
        "aria-current": P,
        className: te,
        ref: b,
        style: we,
        to: m,
        viewTransition: y
      },
      typeof p == "function" ? p(le) : p
    );
  }
);
iv.displayName = "NavLink";
var rv = T.forwardRef(
  ({
    discover: l = "render",
    fetcherKey: r,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: d,
    method: m = ou,
    action: y,
    onSubmit: p,
    relative: g,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: C,
    ...q
  }, A) => {
    let { unstable_useTransitions: z } = T.useContext(It), D = fv(), k = dv(y, { relative: g }), K = m.toLowerCase() === "get" ? "get" : "post", Z = typeof y == "string" && zh.test(y), F = (W) => {
      if (p && p(W), W.defaultPrevented) return;
      W.preventDefault();
      let he = W.nativeEvent.submitter, le = he?.getAttribute("formmethod") || m, P = () => D(he || W.currentTarget, {
        fetcherKey: r,
        method: le,
        navigate: s,
        replace: c,
        state: d,
        relative: g,
        preventScrollReset: b,
        viewTransition: R,
        unstable_defaultShouldRevalidate: C
      });
      z && s !== !1 ? T.startTransition(() => P()) : P();
    };
    return /* @__PURE__ */ T.createElement(
      "form",
      {
        ref: A,
        method: K,
        action: k,
        onSubmit: o ? p : F,
        ...q,
        "data-discover": !Z && l === "render" ? "true" : void 0
      }
    );
  }
);
rv.displayName = "Form";
function uv(l) {
  return `${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function jh(l) {
  let r = T.useContext(wl);
  return Qe(r, uv(l)), r;
}
function sv(l, {
  target: r,
  replace: s,
  state: o,
  preventScrollReset: c,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: y,
  unstable_useTransitions: p
} = {}) {
  let g = v1(), b = Ua(), R = zi(l, { relative: d });
  return T.useCallback(
    (C) => {
      if (q1(C, r)) {
        C.preventDefault();
        let q = s !== void 0 ? s : Ni(b) === Ni(R), A = () => g(l, {
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
var ov = 0, cv = () => `__${String(++ov)}__`;
function fv() {
  let { router: l } = jh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = T.useContext(It), s = _1(), o = l.fetch, c = l.navigate;
  return T.useCallback(
    async (d, m = {}) => {
      let { action: y, method: p, encType: g, formData: b, body: R } = Y1(
        d,
        r
      );
      if (m.navigate === !1) {
        let C = m.fetcherKey || cv();
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
function dv(l, { relative: r } = {}) {
  let { basename: s } = T.useContext(It), o = T.useContext(Un);
  Qe(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...zi(l || ".", { relative: r }) }, m = Ua();
  if (l == null) {
    d.search = m.search;
    let y = new URLSearchParams(d.search), p = y.getAll("index");
    if (p.some((b) => b === "")) {
      y.delete("index"), p.filter((R) => R).forEach((R) => y.append("index", R));
      let b = y.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!l || l === ".") && c.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : _n([s, d.pathname])), Ni(d);
}
function mv(l, { relative: r } = {}) {
  let s = T.useContext(Th);
  Qe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = jh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = zi(l, { relative: r });
  if (!s.isTransitioning)
    return !1;
  let d = Dn(s.currentLocation.pathname, o) || s.currentLocation.pathname, m = Dn(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return yu(c.pathname, m) != null || yu(c.pathname, d) != null;
}
var $o = { exports: {} }, mt = {};
var B0;
function hv() {
  if (B0) return mt;
  B0 = 1;
  var l = gc();
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
  return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, mt.createPortal = function(p, g) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return d(p, g, null, b);
  }, mt.flushSync = function(p) {
    var g = m.T, b = o.p;
    try {
      if (m.T = null, o.p = 2, p) return p();
    } finally {
      m.T = g, o.p = b, o.d.f();
    }
  }, mt.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(p, g));
  }, mt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, mt.preinit = function(p, g) {
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
  }, mt.preinitModule = function(p, g) {
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
  }, mt.preload = function(p, g) {
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
  }, mt.preloadModule = function(p, g) {
    if (typeof p == "string")
      if (g) {
        var b = y(g.as, g.crossOrigin);
        o.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else o.d.m(p);
  }, mt.requestFormReset = function(p) {
    o.d.r(p);
  }, mt.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, mt.useFormState = function(p, g, b) {
    return m.H.useFormState(p, g, b);
  }, mt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, mt.version = "19.2.3", mt;
}
var q0;
function gv() {
  if (q0) return $o.exports;
  q0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), $o.exports = hv(), $o.exports;
}
var Fo = { exports: {} }, Ri = {}, Wo = { exports: {} }, Io = {};
var G0;
function yv() {
  return G0 || (G0 = 1, (function(l) {
    function r(Y, G) {
      var X = Y.length;
      Y.push(G);
      e: for (; 0 < X; ) {
        var de = X - 1 >>> 1, Re = Y[de];
        if (0 < c(Re, G))
          Y[de] = G, Y[X] = Re, X = de;
        else break e;
      }
    }
    function s(Y) {
      return Y.length === 0 ? null : Y[0];
    }
    function o(Y) {
      if (Y.length === 0) return null;
      var G = Y[0], X = Y.pop();
      if (X !== G) {
        Y[0] = X;
        e: for (var de = 0, Re = Y.length, Ce = Re >>> 1; de < Ce; ) {
          var S = 2 * (de + 1) - 1, j = Y[S], V = S + 1, Q = Y[V];
          if (0 > c(j, X))
            V < Re && 0 > c(Q, j) ? (Y[de] = Q, Y[V] = X, de = V) : (Y[de] = j, Y[S] = X, de = S);
          else if (V < Re && 0 > c(Q, X))
            Y[de] = Q, Y[V] = X, de = V;
          else break e;
        }
      }
      return G;
    }
    function c(Y, G) {
      var X = Y.sortIndex - G.sortIndex;
      return X !== 0 ? X : Y.id - G.id;
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
    var p = [], g = [], b = 1, R = null, C = 3, q = !1, A = !1, z = !1, D = !1, k = typeof setTimeout == "function" ? setTimeout : null, K = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function F(Y) {
      for (var G = s(g); G !== null; ) {
        if (G.callback === null) o(g);
        else if (G.startTime <= Y)
          o(g), G.sortIndex = G.expirationTime, r(p, G);
        else break;
        G = s(g);
      }
    }
    function W(Y) {
      if (z = !1, F(Y), !A)
        if (s(p) !== null)
          A = !0, he || (he = !0, Te());
        else {
          var G = s(g);
          G !== null && Le(W, G.startTime - Y);
        }
    }
    var he = !1, le = -1, P = 5, te = -1;
    function we() {
      return D ? !0 : !(l.unstable_now() - te < P);
    }
    function _e() {
      if (D = !1, he) {
        var Y = l.unstable_now();
        te = Y;
        var G = !0;
        try {
          e: {
            A = !1, z && (z = !1, K(le), le = -1), q = !0;
            var X = C;
            try {
              t: {
                for (F(Y), R = s(p); R !== null && !(R.expirationTime > Y && we()); ) {
                  var de = R.callback;
                  if (typeof de == "function") {
                    R.callback = null, C = R.priorityLevel;
                    var Re = de(
                      R.expirationTime <= Y
                    );
                    if (Y = l.unstable_now(), typeof Re == "function") {
                      R.callback = Re, F(Y), G = !0;
                      break t;
                    }
                    R === s(p) && o(p), F(Y);
                  } else o(p);
                  R = s(p);
                }
                if (R !== null) G = !0;
                else {
                  var Ce = s(g);
                  Ce !== null && Le(
                    W,
                    Ce.startTime - Y
                  ), G = !1;
                }
              }
              break e;
            } finally {
              R = null, C = X, q = !1;
            }
            G = void 0;
          }
        } finally {
          G ? Te() : he = !1;
        }
      }
    }
    var Te;
    if (typeof Z == "function")
      Te = function() {
        Z(_e);
      };
    else if (typeof MessageChannel < "u") {
      var Ve = new MessageChannel(), Ke = Ve.port2;
      Ve.port1.onmessage = _e, Te = function() {
        Ke.postMessage(null);
      };
    } else
      Te = function() {
        k(_e, 0);
      };
    function Le(Y, G) {
      le = k(function() {
        Y(l.unstable_now());
      }, G);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(Y) {
      Y.callback = null;
    }, l.unstable_forceFrameRate = function(Y) {
      0 > Y || 125 < Y ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : P = 0 < Y ? Math.floor(1e3 / Y) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return C;
    }, l.unstable_next = function(Y) {
      switch (C) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = C;
      }
      var X = C;
      C = G;
      try {
        return Y();
      } finally {
        C = X;
      }
    }, l.unstable_requestPaint = function() {
      D = !0;
    }, l.unstable_runWithPriority = function(Y, G) {
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
      var X = C;
      C = Y;
      try {
        return G();
      } finally {
        C = X;
      }
    }, l.unstable_scheduleCallback = function(Y, G, X) {
      var de = l.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? de + X : de) : X = de, Y) {
        case 1:
          var Re = -1;
          break;
        case 2:
          Re = 250;
          break;
        case 5:
          Re = 1073741823;
          break;
        case 4:
          Re = 1e4;
          break;
        default:
          Re = 5e3;
      }
      return Re = X + Re, Y = {
        id: b++,
        callback: G,
        priorityLevel: Y,
        startTime: X,
        expirationTime: Re,
        sortIndex: -1
      }, X > de ? (Y.sortIndex = X, r(g, Y), s(p) === null && Y === s(g) && (z ? (K(le), le = -1) : z = !0, Le(W, X - de))) : (Y.sortIndex = Re, r(p, Y), A || q || (A = !0, he || (he = !0, Te()))), Y;
    }, l.unstable_shouldYield = we, l.unstable_wrapCallback = function(Y) {
      var G = C;
      return function() {
        var X = C;
        C = G;
        try {
          return Y.apply(this, arguments);
        } finally {
          C = X;
        }
      };
    };
  })(Io)), Io;
}
var k0;
function pv() {
  return k0 || (k0 = 1, Wo.exports = yv()), Wo.exports;
}
var Y0;
function vv() {
  if (Y0) return Ri;
  Y0 = 1;
  var l = {};
  var r = pv(), s = gc(), o = gv();
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
  var C = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), Z = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), he = /* @__PURE__ */ Symbol.for("react.suspense"), le = /* @__PURE__ */ Symbol.for("react.suspense_list"), P = /* @__PURE__ */ Symbol.for("react.memo"), te = /* @__PURE__ */ Symbol.for("react.lazy"), we = /* @__PURE__ */ Symbol.for("react.activity"), _e = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Te = Symbol.iterator;
  function Ve(e) {
    return e === null || typeof e != "object" ? null : (e = Te && e[Te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ke = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Le(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ke ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case K:
        return "Profiler";
      case k:
        return "StrictMode";
      case he:
        return "Suspense";
      case le:
        return "SuspenseList";
      case we:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return "Portal";
        case F:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case P:
          return t = e.displayName || null, t !== null ? t : Le(e.type) || "Memo";
        case te:
          t = e._payload, e = e._init;
          try {
            return Le(e(t));
          } catch {
          }
      }
    return null;
  }
  var Y = Array.isArray, G = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], Ce = -1;
  function S(e) {
    return { current: e };
  }
  function j(e) {
    0 > Ce || (e.current = Re[Ce], Re[Ce] = null, Ce--);
  }
  function V(e, t) {
    Ce++, Re[Ce] = e.current, e.current = t;
  }
  var Q = S(null), oe = S(null), ce = S(null), ge = S(null);
  function ne(e, t) {
    switch (V(ce, t), V(oe, e), V(Q, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Wm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Wm(t), e = Im(t, e);
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
    j(Q), V(Q, e);
  }
  function Ye() {
    j(Q), j(oe), j(ce);
  }
  function _t(e) {
    e.memoizedState !== null && V(ge, e);
    var t = Q.current, n = Im(t, e.type);
    t !== n && (V(oe, e), V(Q, n));
  }
  function Mn(e) {
    oe.current === e && (j(Q), j(oe)), ge.current === e && (j(ge), pi._currentValue = de);
  }
  var ua, ie;
  function je(e) {
    if (ua === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ua = t && t[1] || "", ie = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ua + e + ie;
  }
  var ln = !1;
  function Nl(e, t) {
    if (!e || ln) return "";
    ln = !0;
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
      ln = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? je(n) : "";
  }
  function _u(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return je(e.type);
      case 16:
        return je("Lazy");
      case 13:
        return e.child !== t && t !== null ? je("Suspense Fallback") : je("Suspense");
      case 19:
        return je("SuspenseList");
      case 0:
      case 15:
        return Nl(e.type, !1);
      case 11:
        return Nl(e.type.render, !1);
      case 1:
        return Nl(e.type, !0);
      case 31:
        return je("Activity");
      default:
        return "";
    }
  }
  function re(e) {
    try {
      var t = "", n = null;
      do
        t += _u(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var pt = Object.prototype.hasOwnProperty, lt = r.unstable_scheduleCallback, zn = r.unstable_cancelCallback, sa = r.unstable_shouldYield, Ou = r.unstable_requestPaint, Ot = r.unstable_now, dg = r.unstable_getCurrentPriorityLevel, Nc = r.unstable_ImmediatePriority, _c = r.unstable_UserBlockingPriority, Gi = r.unstable_NormalPriority, mg = r.unstable_LowPriority, Oc = r.unstable_IdlePriority, hg = r.log, gg = r.unstable_setDisableYieldValue, _l = null, Dt = null;
  function Ln(e) {
    if (typeof hg == "function" && gg(e), Dt && typeof Dt.setStrictMode == "function")
      try {
        Dt.setStrictMode(_l, e);
      } catch {
      }
  }
  var Ut = Math.clz32 ? Math.clz32 : vg, yg = Math.log, pg = Math.LN2;
  function vg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yg(e) / pg | 0) | 0;
  }
  var ki = 256, Yi = 262144, Xi = 4194304;
  function oa(e) {
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
  function Vi(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var i = 0, u = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = a & 134217727;
    return h !== 0 ? (a = h & ~u, a !== 0 ? i = oa(a) : (f &= h, f !== 0 ? i = oa(f) : n || (n = h & ~e, n !== 0 && (i = oa(n))))) : (h = a & ~u, h !== 0 ? i = oa(h) : f !== 0 ? i = oa(f) : n || (n = a & ~e, n !== 0 && (i = oa(n)))), i === 0 ? 0 : t !== 0 && t !== i && (t & u) === 0 && (u = i & -i, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : i;
  }
  function Ol(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function bg(e, t) {
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
  function Dc() {
    var e = Xi;
    return Xi <<= 1, (Xi & 62914560) === 0 && (Xi = 4194304), e;
  }
  function Du(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Dl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Eg(e, t, n, a, i, u) {
    var f = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var h = e.entanglements, E = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var L = 31 - Ut(n), B = 1 << L;
      h[L] = 0, E[L] = -1;
      var O = _[L];
      if (O !== null)
        for (_[L] = null, L = 0; L < O.length; L++) {
          var M = O[L];
          M !== null && (M.lane &= -536870913);
        }
      n &= ~B;
    }
    a !== 0 && Uc(e, a, 0), u !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(f & ~t));
  }
  function Uc(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Ut(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Mc(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Ut(n), i = 1 << a;
      i & t | e[a] & t && (e[a] |= t), n &= ~i;
    }
  }
  function zc(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Uu(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Uu(e) {
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
  function Mu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Lc() {
    var e = X.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : S0(e.type));
  }
  function jc(e, t) {
    var n = X.p;
    try {
      return X.p = e, t();
    } finally {
      X.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2), st = "__reactFiber$" + jn, vt = "__reactProps$" + jn, Ma = "__reactContainer$" + jn, zu = "__reactEvents$" + jn, Sg = "__reactListeners$" + jn, wg = "__reactHandles$" + jn, Hc = "__reactResources$" + jn, Ul = "__reactMarker$" + jn;
  function Lu(e) {
    delete e[st], delete e[vt], delete e[zu], delete e[Sg], delete e[wg];
  }
  function za(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ma] || n[st]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = i0(e); e !== null; ) {
            if (n = e[st]) return n;
            e = i0(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function La(e) {
    if (e = e[st] || e[Ma]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Ml(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function ja(e) {
    var t = e[Hc];
    return t || (t = e[Hc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function it(e) {
    e[Ul] = !0;
  }
  var Bc = /* @__PURE__ */ new Set(), qc = {};
  function ca(e, t) {
    Ha(e, t), Ha(e + "Capture", t);
  }
  function Ha(e, t) {
    for (qc[e] = t, e = 0; e < t.length; e++)
      Bc.add(t[e]);
  }
  var Rg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Gc = {}, kc = {};
  function Tg(e) {
    return pt.call(kc, e) ? !0 : pt.call(Gc, e) ? !1 : Rg.test(e) ? kc[e] = !0 : (Gc[e] = !0, !1);
  }
  function Ki(e, t, n) {
    if (Tg(t))
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
  function Qi(e, t, n) {
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
  function fn(e, t, n, a) {
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
  function kt(e) {
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
  function Yc(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xg(e, t, n) {
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
  function ju(e) {
    if (!e._valueTracker) {
      var t = Yc(e) ? "checked" : "value";
      e._valueTracker = xg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Xc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Yc(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ag = /[\n"\\]/g;
  function Yt(e) {
    return e.replace(
      Ag,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Hu(e, t, n, a, i, u, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Bu(e, f, kt(t)) : n != null ? Bu(e, f, kt(n)) : a != null && e.removeAttribute("value"), i == null && u != null && (e.defaultChecked = !!u), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + kt(h) : e.removeAttribute("name");
  }
  function Vc(e, t, n, a, i, u, f, h) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        ju(e);
        return;
      }
      n = n != null ? "" + kt(n) : "", t = t != null ? "" + kt(t) : n, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? i, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), ju(e);
  }
  function Bu(e, t, n) {
    t === "number" && Zi(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ba(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < n.length; i++)
        t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + kt(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = !0, a && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kc(e, t, n) {
    if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + kt(n) : "";
  }
  function Qc(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (Y(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = kt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), ju(e);
  }
  function qa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Zc(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Jc(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var i in t)
        a = t[i], t.hasOwnProperty(i) && n[i] !== a && Zc(e, i, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && Zc(e, u, t[u]);
  }
  function qu(e) {
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
  var Ng = /* @__PURE__ */ new Map([
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
  ]), _g = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ji(e) {
    return _g.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function dn() {
  }
  var Gu = null;
  function ku(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ga = null, ka = null;
  function $c(e) {
    var t = La(e);
    if (t && (e = t.stateNode)) {
      var n = e[vt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Hu(
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
              'input[name="' + Yt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var i = a[vt] || null;
                if (!i) throw Error(c(90));
                Hu(
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
              a = n[t], a.form === e.form && Xc(a);
          }
          break e;
        case "textarea":
          Kc(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ba(e, !!n.multiple, t, !1);
      }
    }
  }
  var Yu = !1;
  function Fc(e, t, n) {
    if (Yu) return e(t, n);
    Yu = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Yu = !1, (Ga !== null || ka !== null) && (Lr(), Ga && (t = Ga, e = ka, ka = Ga = null, $c(t), e)))
        for (t = 0; t < e.length; t++) $c(e[t]);
    }
  }
  function zl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[vt] || null;
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
  var mn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xu = !1;
  if (mn)
    try {
      var Ll = {};
      Object.defineProperty(Ll, "passive", {
        get: function() {
          Xu = !0;
        }
      }), window.addEventListener("test", Ll, Ll), window.removeEventListener("test", Ll, Ll);
    } catch {
      Xu = !1;
    }
  var Hn = null, Vu = null, $i = null;
  function Wc() {
    if ($i) return $i;
    var e, t = Vu, n = t.length, a, i = "value" in Hn ? Hn.value : Hn.textContent, u = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++) ;
    var f = n - e;
    for (a = 1; a <= f && t[n - a] === i[u - a]; a++) ;
    return $i = i.slice(e, 1 < a ? 1 - a : void 0);
  }
  function Fi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Wi() {
    return !0;
  }
  function Ic() {
    return !1;
  }
  function bt(e) {
    function t(n, a, i, u, f) {
      this._reactName = n, this._targetInst = i, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (n = e[h], this[h] = n ? n(u) : u[h]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Wi : Ic, this.isPropagationStopped = Ic, this;
    }
    return C(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wi);
      },
      persist: function() {
      },
      isPersistent: Wi
    }), t;
  }
  var fa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ii = bt(fa), jl = C({}, fa, { view: 0, detail: 0 }), Og = bt(jl), Ku, Qu, Hl, Pi = C({}, jl, {
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
    getModifierState: Ju,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Hl && (Hl && e.type === "mousemove" ? (Ku = e.screenX - Hl.screenX, Qu = e.screenY - Hl.screenY) : Qu = Ku = 0, Hl = e), Ku);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Qu;
    }
  }), Pc = bt(Pi), Dg = C({}, Pi, { dataTransfer: 0 }), Ug = bt(Dg), Mg = C({}, jl, { relatedTarget: 0 }), Zu = bt(Mg), zg = C({}, fa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Lg = bt(zg), jg = C({}, fa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Hg = bt(jg), Bg = C({}, fa, { data: 0 }), ef = bt(Bg), qg = {
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
  }, Gg = {
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
  }, kg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Yg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = kg[e]) ? !!t[e] : !1;
  }
  function Ju() {
    return Yg;
  }
  var Xg = C({}, jl, {
    key: function(e) {
      if (e.key) {
        var t = qg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Fi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ju,
    charCode: function(e) {
      return e.type === "keypress" ? Fi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Fi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Vg = bt(Xg), Kg = C({}, Pi, {
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
  }), tf = bt(Kg), Qg = C({}, jl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ju
  }), Zg = bt(Qg), Jg = C({}, fa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $g = bt(Jg), Fg = C({}, Pi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wg = bt(Fg), Ig = C({}, fa, {
    newState: 0,
    oldState: 0
  }), Pg = bt(Ig), ey = [9, 13, 27, 32], $u = mn && "CompositionEvent" in window, Bl = null;
  mn && "documentMode" in document && (Bl = document.documentMode);
  var ty = mn && "TextEvent" in window && !Bl, nf = mn && (!$u || Bl && 8 < Bl && 11 >= Bl), af = " ", lf = !1;
  function rf(e, t) {
    switch (e) {
      case "keyup":
        return ey.indexOf(t.keyCode) !== -1;
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
  function uf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ya = !1;
  function ny(e, t) {
    switch (e) {
      case "compositionend":
        return uf(t);
      case "keypress":
        return t.which !== 32 ? null : (lf = !0, af);
      case "textInput":
        return e = t.data, e === af && lf ? null : e;
      default:
        return null;
    }
  }
  function ay(e, t) {
    if (Ya)
      return e === "compositionend" || !$u && rf(e, t) ? (e = Wc(), $i = Vu = Hn = null, Ya = !1, e) : null;
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
        return nf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ly = {
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
  function sf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ly[e.type] : t === "textarea";
  }
  function of(e, t, n, a) {
    Ga ? ka ? ka.push(a) : ka = [a] : Ga = a, t = Yr(t, "onChange"), 0 < t.length && (n = new Ii(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ql = null, Gl = null;
  function iy(e) {
    Km(e, 0);
  }
  function er(e) {
    var t = Ml(e);
    if (Xc(t)) return e;
  }
  function cf(e, t) {
    if (e === "change") return t;
  }
  var ff = !1;
  if (mn) {
    var Fu;
    if (mn) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var df = document.createElement("div");
        df.setAttribute("oninput", "return;"), Wu = typeof df.oninput == "function";
      }
      Fu = Wu;
    } else Fu = !1;
    ff = Fu && (!document.documentMode || 9 < document.documentMode);
  }
  function mf() {
    ql && (ql.detachEvent("onpropertychange", hf), Gl = ql = null);
  }
  function hf(e) {
    if (e.propertyName === "value" && er(Gl)) {
      var t = [];
      of(
        t,
        Gl,
        e,
        ku(e)
      ), Fc(iy, t);
    }
  }
  function ry(e, t, n) {
    e === "focusin" ? (mf(), ql = t, Gl = n, ql.attachEvent("onpropertychange", hf)) : e === "focusout" && mf();
  }
  function uy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return er(Gl);
  }
  function sy(e, t) {
    if (e === "click") return er(t);
  }
  function oy(e, t) {
    if (e === "input" || e === "change")
      return er(t);
  }
  function cy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Mt = typeof Object.is == "function" ? Object.is : cy;
  function kl(e, t) {
    if (Mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var i = n[a];
      if (!pt.call(t, i) || !Mt(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  function gf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function yf(e, t) {
    var n = gf(e);
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
      n = gf(n);
    }
  }
  function pf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function vf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Zi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Zi(e.document);
    }
    return t;
  }
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var fy = mn && "documentMode" in document && 11 >= document.documentMode, Xa = null, Pu = null, Yl = null, es = !1;
  function bf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    es || Xa == null || Xa !== Zi(a) || (a = Xa, "selectionStart" in a && Iu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Yl && kl(Yl, a) || (Yl = a, a = Yr(Pu, "onSelect"), 0 < a.length && (t = new Ii(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Xa)));
  }
  function da(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Va = {
    animationend: da("Animation", "AnimationEnd"),
    animationiteration: da("Animation", "AnimationIteration"),
    animationstart: da("Animation", "AnimationStart"),
    transitionrun: da("Transition", "TransitionRun"),
    transitionstart: da("Transition", "TransitionStart"),
    transitioncancel: da("Transition", "TransitionCancel"),
    transitionend: da("Transition", "TransitionEnd")
  }, ts = {}, Ef = {};
  mn && (Ef = document.createElement("div").style, "AnimationEvent" in window || (delete Va.animationend.animation, delete Va.animationiteration.animation, delete Va.animationstart.animation), "TransitionEvent" in window || delete Va.transitionend.transition);
  function ma(e) {
    if (ts[e]) return ts[e];
    if (!Va[e]) return e;
    var t = Va[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Ef)
        return ts[e] = t[n];
    return e;
  }
  var Sf = ma("animationend"), wf = ma("animationiteration"), Rf = ma("animationstart"), dy = ma("transitionrun"), my = ma("transitionstart"), hy = ma("transitioncancel"), Tf = ma("transitionend"), xf = /* @__PURE__ */ new Map(), ns = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ns.push("scrollEnd");
  function Pt(e, t) {
    xf.set(e, t), ca(t, [e]);
  }
  var tr = typeof reportError == "function" ? reportError : function(e) {
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
  }, Xt = [], Ka = 0, as = 0;
  function nr() {
    for (var e = Ka, t = as = Ka = 0; t < e; ) {
      var n = Xt[t];
      Xt[t++] = null;
      var a = Xt[t];
      Xt[t++] = null;
      var i = Xt[t];
      Xt[t++] = null;
      var u = Xt[t];
      if (Xt[t++] = null, a !== null && i !== null) {
        var f = a.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), a.pending = i;
      }
      u !== 0 && Af(n, i, u);
    }
  }
  function ar(e, t, n, a) {
    Xt[Ka++] = e, Xt[Ka++] = t, Xt[Ka++] = n, Xt[Ka++] = a, as |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ls(e, t, n, a) {
    return ar(e, t, n, a), lr(e);
  }
  function ha(e, t) {
    return ar(e, null, null, t), lr(e);
  }
  function Af(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var i = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (i = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, i && t !== null && (i = 31 - Ut(n), e = u.hiddenUpdates, a = e[i], a === null ? e[i] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function lr(e) {
    if (50 < ci)
      throw ci = 0, ho = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Qa = {};
  function gy(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function zt(e, t, n, a) {
    return new gy(e, t, n, a);
  }
  function is(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = zt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Cf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function ir(e, t, n, a, i, u) {
    var f = 0;
    if (a = e, typeof e == "function") is(e) && (f = 1);
    else if (typeof e == "string")
      f = Ep(
        e,
        n,
        Q.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case we:
          return e = zt(31, n, t, i), e.elementType = we, e.lanes = u, e;
        case D:
          return ga(n.children, i, u, t);
        case k:
          f = 8, i |= 24;
          break;
        case K:
          return e = zt(12, n, t, i | 2), e.elementType = K, e.lanes = u, e;
        case he:
          return e = zt(13, n, t, i), e.elementType = he, e.lanes = u, e;
        case le:
          return e = zt(19, n, t, i), e.elementType = le, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case F:
                f = 10;
                break e;
              case Z:
                f = 9;
                break e;
              case W:
                f = 11;
                break e;
              case P:
                f = 14;
                break e;
              case te:
                f = 16, a = null;
                break e;
            }
          f = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = zt(f, n, t, i), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function ga(e, t, n, a) {
    return e = zt(7, e, a, t), e.lanes = n, e;
  }
  function rs(e, t, n) {
    return e = zt(6, e, null, t), e.lanes = n, e;
  }
  function Nf(e) {
    var t = zt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function us(e, t, n) {
    return t = zt(
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
  var _f = /* @__PURE__ */ new WeakMap();
  function Vt(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = _f.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: re(t)
      }, _f.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: re(t)
    };
  }
  var Za = [], Ja = 0, rr = null, Xl = 0, Kt = [], Qt = 0, Bn = null, rn = 1, un = "";
  function gn(e, t) {
    Za[Ja++] = Xl, Za[Ja++] = rr, rr = e, Xl = t;
  }
  function Of(e, t, n) {
    Kt[Qt++] = rn, Kt[Qt++] = un, Kt[Qt++] = Bn, Bn = e;
    var a = rn;
    e = un;
    var i = 32 - Ut(a) - 1;
    a &= ~(1 << i), n += 1;
    var u = 32 - Ut(t) + i;
    if (30 < u) {
      var f = i - i % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, i -= f, rn = 1 << 32 - Ut(t) + i | n << i | a, un = u + e;
    } else
      rn = 1 << u | n << i | a, un = e;
  }
  function ss(e) {
    e.return !== null && (gn(e, 1), Of(e, 1, 0));
  }
  function os(e) {
    for (; e === rr; )
      rr = Za[--Ja], Za[Ja] = null, Xl = Za[--Ja], Za[Ja] = null;
    for (; e === Bn; )
      Bn = Kt[--Qt], Kt[Qt] = null, un = Kt[--Qt], Kt[Qt] = null, rn = Kt[--Qt], Kt[Qt] = null;
  }
  function Df(e, t) {
    Kt[Qt++] = rn, Kt[Qt++] = un, Kt[Qt++] = Bn, rn = t.id, un = t.overflow, Bn = e;
  }
  var ot = null, qe = null, Se = !1, qn = null, Zt = !1, cs = Error(c(519));
  function Gn(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Vl(Vt(t, e)), cs;
  }
  function Uf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[st] = e, t[vt] = a, n) {
      case "dialog":
        pe("cancel", t), pe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        pe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < di.length; n++)
          pe(di[n], t);
        break;
      case "source":
        pe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        pe("error", t), pe("load", t);
        break;
      case "details":
        pe("toggle", t);
        break;
      case "input":
        pe("invalid", t), Vc(
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
        pe("invalid", t);
        break;
      case "textarea":
        pe("invalid", t), Qc(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || $m(t.textContent, n) ? (a.popover != null && (pe("beforetoggle", t), pe("toggle", t)), a.onScroll != null && pe("scroll", t), a.onScrollEnd != null && pe("scrollend", t), a.onClick != null && (t.onclick = dn), t = !0) : t = !1, t || Gn(e, !0);
  }
  function Mf(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          Zt = !1;
          return;
        case 27:
        case 3:
          Zt = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function $a(e) {
    if (e !== ot) return !1;
    if (!Se) return Mf(e), Se = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || _o(e.type, e.memoizedProps)), n = !n), n && qe && Gn(e), Mf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      qe = l0(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      qe = l0(e);
    } else
      t === 27 ? (t = qe, ea(e.type) ? (e = zo, zo = null, qe = e) : qe = t) : qe = ot ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ya() {
    qe = ot = null, Se = !1;
  }
  function fs() {
    var e = qn;
    return e !== null && (Rt === null ? Rt = e : Rt.push.apply(
      Rt,
      e
    ), qn = null), e;
  }
  function Vl(e) {
    qn === null ? qn = [e] : qn.push(e);
  }
  var ds = S(null), pa = null, yn = null;
  function kn(e, t, n) {
    V(ds, t._currentValue), t._currentValue = n;
  }
  function pn(e) {
    e._currentValue = ds.current, j(ds);
  }
  function ms(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function hs(e, t, n, a) {
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
              u.lanes |= n, h = u.alternate, h !== null && (h.lanes |= n), ms(
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
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), ms(f, n, e), f = null;
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
  function Fa(e, t, n, a) {
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
          Mt(i.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (i === ge.current) {
        if (f = i.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(pi) : e = [pi]);
      }
      i = i.return;
    }
    e !== null && hs(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function ur(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Mt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    pa = e, yn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function ct(e) {
    return zf(pa, e);
  }
  function sr(e, t) {
    return pa === null && va(e), zf(e, t);
  }
  function zf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, yn === null) {
      if (e === null) throw Error(c(308));
      yn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else yn = yn.next = t;
    return n;
  }
  var yy = typeof AbortController < "u" ? AbortController : function() {
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
  }, py = r.unstable_scheduleCallback, vy = r.unstable_NormalPriority, Pe = {
    $$typeof: F,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gs() {
    return {
      controller: new yy(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Kl(e) {
    e.refCount--, e.refCount === 0 && py(vy, function() {
      e.controller.abort();
    });
  }
  var Ql = null, ys = 0, Wa = 0, Ia = null;
  function by(e, t) {
    if (Ql === null) {
      var n = Ql = [];
      ys = 0, Wa = Eo(), Ia = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ys++, t.then(Lf, Lf), t;
  }
  function Lf() {
    if (--ys === 0 && Ql !== null) {
      Ia !== null && (Ia.status = "fulfilled");
      var e = Ql;
      Ql = null, Wa = 0, Ia = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ey(e, t) {
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
  var jf = G.S;
  G.S = function(e, t) {
    bm = Ot(), typeof t == "object" && t !== null && typeof t.then == "function" && by(e, t), jf !== null && jf(e, t);
  };
  var ba = S(null);
  function ps() {
    var e = ba.current;
    return e !== null ? e : He.pooledCache;
  }
  function or(e, t) {
    t === null ? V(ba, ba.current) : V(ba, t.pool);
  }
  function Hf() {
    var e = ps();
    return e === null ? null : { parent: Pe._currentValue, pool: e };
  }
  var Pa = Error(c(460)), vs = Error(c(474)), cr = Error(c(542)), fr = { then: function() {
  } };
  function Bf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function qf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(dn, dn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, kf(e), e;
      default:
        if (typeof t.status == "string") t.then(dn, dn);
        else {
          if (e = He, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, kf(e), e;
        }
        throw Sa = t, Pa;
    }
  }
  function Ea(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Sa = n, Pa) : n;
    }
  }
  var Sa = null;
  function Gf() {
    if (Sa === null) throw Error(c(459));
    var e = Sa;
    return Sa = null, e;
  }
  function kf(e) {
    if (e === Pa || e === cr)
      throw Error(c(483));
  }
  var el = null, Zl = 0;
  function dr(e) {
    var t = Zl;
    return Zl += 1, el === null && (el = []), qf(el, e, t);
  }
  function Jl(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function mr(e, t) {
    throw t.$$typeof === q ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Yf(e) {
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
      return x = hn(x, w), x.index = 0, x.sibling = null, x;
    }
    function u(x, w, N) {
      return x.index = N, e ? (N = x.alternate, N !== null ? (N = N.index, N < w ? (x.flags |= 67108866, w) : N) : (x.flags |= 67108866, w)) : (x.flags |= 1048576, w);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function h(x, w, N, H) {
      return w === null || w.tag !== 6 ? (w = rs(N, x.mode, H), w.return = x, w) : (w = i(w, N), w.return = x, w);
    }
    function E(x, w, N, H) {
      var I = N.type;
      return I === D ? L(
        x,
        w,
        N.props.children,
        H,
        N.key
      ) : w !== null && (w.elementType === I || typeof I == "object" && I !== null && I.$$typeof === te && Ea(I) === w.type) ? (w = i(w, N.props), Jl(w, N), w.return = x, w) : (w = ir(
        N.type,
        N.key,
        N.props,
        null,
        x.mode,
        H
      ), Jl(w, N), w.return = x, w);
    }
    function _(x, w, N, H) {
      return w === null || w.tag !== 4 || w.stateNode.containerInfo !== N.containerInfo || w.stateNode.implementation !== N.implementation ? (w = us(N, x.mode, H), w.return = x, w) : (w = i(w, N.children || []), w.return = x, w);
    }
    function L(x, w, N, H, I) {
      return w === null || w.tag !== 7 ? (w = ga(
        N,
        x.mode,
        H,
        I
      ), w.return = x, w) : (w = i(w, N), w.return = x, w);
    }
    function B(x, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return w = rs(
          "" + w,
          x.mode,
          N
        ), w.return = x, w;
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case A:
            return N = ir(
              w.type,
              w.key,
              w.props,
              null,
              x.mode,
              N
            ), Jl(N, w), N.return = x, N;
          case z:
            return w = us(
              w,
              x.mode,
              N
            ), w.return = x, w;
          case te:
            return w = Ea(w), B(x, w, N);
        }
        if (Y(w) || Ve(w))
          return w = ga(
            w,
            x.mode,
            N,
            null
          ), w.return = x, w;
        if (typeof w.then == "function")
          return B(x, dr(w), N);
        if (w.$$typeof === F)
          return B(
            x,
            sr(x, w),
            N
          );
        mr(x, w);
      }
      return null;
    }
    function O(x, w, N, H) {
      var I = w !== null ? w.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return I !== null ? null : h(x, w, "" + N, H);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            return N.key === I ? E(x, w, N, H) : null;
          case z:
            return N.key === I ? _(x, w, N, H) : null;
          case te:
            return N = Ea(N), O(x, w, N, H);
        }
        if (Y(N) || Ve(N))
          return I !== null ? null : L(x, w, N, H, null);
        if (typeof N.then == "function")
          return O(
            x,
            w,
            dr(N),
            H
          );
        if (N.$$typeof === F)
          return O(
            x,
            w,
            sr(x, N),
            H
          );
        mr(x, N);
      }
      return null;
    }
    function M(x, w, N, H, I) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return x = x.get(N) || null, h(w, x, "" + H, I);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            return x = x.get(
              H.key === null ? N : H.key
            ) || null, E(w, x, H, I);
          case z:
            return x = x.get(
              H.key === null ? N : H.key
            ) || null, _(w, x, H, I);
          case te:
            return H = Ea(H), M(
              x,
              w,
              N,
              H,
              I
            );
        }
        if (Y(H) || Ve(H))
          return x = x.get(N) || null, L(w, x, H, I, null);
        if (typeof H.then == "function")
          return M(
            x,
            w,
            N,
            dr(H),
            I
          );
        if (H.$$typeof === F)
          return M(
            x,
            w,
            N,
            sr(w, H),
            I
          );
        mr(w, H);
      }
      return null;
    }
    function J(x, w, N, H) {
      for (var I = null, xe = null, $ = w, fe = w = 0, Ee = null; $ !== null && fe < N.length; fe++) {
        $.index > fe ? (Ee = $, $ = null) : Ee = $.sibling;
        var Ae = O(
          x,
          $,
          N[fe],
          H
        );
        if (Ae === null) {
          $ === null && ($ = Ee);
          break;
        }
        e && $ && Ae.alternate === null && t(x, $), w = u(Ae, w, fe), xe === null ? I = Ae : xe.sibling = Ae, xe = Ae, $ = Ee;
      }
      if (fe === N.length)
        return n(x, $), Se && gn(x, fe), I;
      if ($ === null) {
        for (; fe < N.length; fe++)
          $ = B(x, N[fe], H), $ !== null && (w = u(
            $,
            w,
            fe
          ), xe === null ? I = $ : xe.sibling = $, xe = $);
        return Se && gn(x, fe), I;
      }
      for ($ = a($); fe < N.length; fe++)
        Ee = M(
          $,
          x,
          fe,
          N[fe],
          H
        ), Ee !== null && (e && Ee.alternate !== null && $.delete(
          Ee.key === null ? fe : Ee.key
        ), w = u(
          Ee,
          w,
          fe
        ), xe === null ? I = Ee : xe.sibling = Ee, xe = Ee);
      return e && $.forEach(function(ia) {
        return t(x, ia);
      }), Se && gn(x, fe), I;
    }
    function ee(x, w, N, H) {
      if (N == null) throw Error(c(151));
      for (var I = null, xe = null, $ = w, fe = w = 0, Ee = null, Ae = N.next(); $ !== null && !Ae.done; fe++, Ae = N.next()) {
        $.index > fe ? (Ee = $, $ = null) : Ee = $.sibling;
        var ia = O(x, $, Ae.value, H);
        if (ia === null) {
          $ === null && ($ = Ee);
          break;
        }
        e && $ && ia.alternate === null && t(x, $), w = u(ia, w, fe), xe === null ? I = ia : xe.sibling = ia, xe = ia, $ = Ee;
      }
      if (Ae.done)
        return n(x, $), Se && gn(x, fe), I;
      if ($ === null) {
        for (; !Ae.done; fe++, Ae = N.next())
          Ae = B(x, Ae.value, H), Ae !== null && (w = u(Ae, w, fe), xe === null ? I = Ae : xe.sibling = Ae, xe = Ae);
        return Se && gn(x, fe), I;
      }
      for ($ = a($); !Ae.done; fe++, Ae = N.next())
        Ae = M($, x, fe, Ae.value, H), Ae !== null && (e && Ae.alternate !== null && $.delete(Ae.key === null ? fe : Ae.key), w = u(Ae, w, fe), xe === null ? I = Ae : xe.sibling = Ae, xe = Ae);
      return e && $.forEach(function(Dp) {
        return t(x, Dp);
      }), Se && gn(x, fe), I;
    }
    function ze(x, w, N, H) {
      if (typeof N == "object" && N !== null && N.type === D && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case A:
            e: {
              for (var I = N.key; w !== null; ) {
                if (w.key === I) {
                  if (I = N.type, I === D) {
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
                  } else if (w.elementType === I || typeof I == "object" && I !== null && I.$$typeof === te && Ea(I) === w.type) {
                    n(
                      x,
                      w.sibling
                    ), H = i(w, N.props), Jl(H, N), H.return = x, x = H;
                    break e;
                  }
                  n(x, w);
                  break;
                } else t(x, w);
                w = w.sibling;
              }
              N.type === D ? (H = ga(
                N.props.children,
                x.mode,
                H,
                N.key
              ), H.return = x, x = H) : (H = ir(
                N.type,
                N.key,
                N.props,
                null,
                x.mode,
                H
              ), Jl(H, N), H.return = x, x = H);
            }
            return f(x);
          case z:
            e: {
              for (I = N.key; w !== null; ) {
                if (w.key === I)
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
              H = us(N, x.mode, H), H.return = x, x = H;
            }
            return f(x);
          case te:
            return N = Ea(N), ze(
              x,
              w,
              N,
              H
            );
        }
        if (Y(N))
          return J(
            x,
            w,
            N,
            H
          );
        if (Ve(N)) {
          if (I = Ve(N), typeof I != "function") throw Error(c(150));
          return N = I.call(N), ee(
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
            dr(N),
            H
          );
        if (N.$$typeof === F)
          return ze(
            x,
            w,
            sr(x, N),
            H
          );
        mr(x, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, w !== null && w.tag === 6 ? (n(x, w.sibling), H = i(w, N), H.return = x, x = H) : (n(x, w), H = rs(N, x.mode, H), H.return = x, x = H), f(x)) : n(x, w);
    }
    return function(x, w, N, H) {
      try {
        Zl = 0;
        var I = ze(
          x,
          w,
          N,
          H
        );
        return el = null, I;
      } catch ($) {
        if ($ === Pa || $ === cr) throw $;
        var xe = zt(29, $, null, x.mode);
        return xe.lanes = H, xe.return = x, xe;
      }
    };
  }
  var wa = Yf(!0), Xf = Yf(!1), Yn = !1;
  function bs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Es(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Xn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ne & 2) !== 0) {
      var i = a.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), a.pending = t, t = lr(e), Af(e, null, n), t;
    }
    return ar(e, a, t, n), lr(e);
  }
  function $l(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Mc(e, n);
    }
  }
  function Ss(e, t) {
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
  var ws = !1;
  function Fl() {
    if (ws) {
      var e = Ia;
      if (e !== null) throw e;
    }
  }
  function Wl(e, t, n, a) {
    ws = !1;
    var i = e.updateQueue;
    Yn = !1;
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
        if (M ? (be & O) === O : (a & O) === O) {
          O !== 0 && O === Wa && (ws = !0), L !== null && (L = L.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, ee = h;
            O = t;
            var ze = n;
            switch (ee.tag) {
              case 1:
                if (J = ee.payload, typeof J == "function") {
                  B = J.call(ze, B, O);
                  break e;
                }
                B = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = ee.payload, O = typeof J == "function" ? J.call(ze, B, O) : J, O == null) break e;
                B = C({}, B, O);
                break e;
              case 2:
                Yn = !0;
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
      L === null && (E = B), i.baseState = E, i.firstBaseUpdate = _, i.lastBaseUpdate = L, u === null && (i.shared.lanes = 0), $n |= f, e.lanes = f, e.memoizedState = B;
    }
  }
  function Vf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Kf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Vf(n[e], t);
  }
  var tl = S(null), hr = S(0);
  function Qf(e, t) {
    e = An, V(hr, e), V(tl, t), An = e | t.baseLanes;
  }
  function Rs() {
    V(hr, An), V(tl, tl.current);
  }
  function Ts() {
    An = hr.current, j(tl), j(hr);
  }
  var Lt = S(null), Jt = null;
  function Kn(e) {
    var t = e.alternate;
    V(We, We.current & 1), V(Lt, e), Jt === null && (t === null || tl.current !== null || t.memoizedState !== null) && (Jt = e);
  }
  function xs(e) {
    V(We, We.current), V(Lt, e), Jt === null && (Jt = e);
  }
  function Zf(e) {
    e.tag === 22 ? (V(We, We.current), V(Lt, e), Jt === null && (Jt = e)) : Qn();
  }
  function Qn() {
    V(We, We.current), V(Lt, Lt.current);
  }
  function jt(e) {
    j(Lt), Jt === e && (Jt = null), j(We);
  }
  var We = S(0);
  function gr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Uo(n) || Mo(n)))
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
  var vn = 0, ue = null, Ue = null, et = null, yr = !1, nl = !1, Ra = !1, pr = 0, Il = 0, al = null, Sy = 0;
  function Ze() {
    throw Error(c(321));
  }
  function As(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Cs(e, t, n, a, i, u) {
    return vn = u, ue = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, G.H = e === null || e.memoizedState === null ? Od : Ys, Ra = !1, u = n(a, i), Ra = !1, nl && (u = $f(
      t,
      n,
      a,
      i
    )), Jf(e), u;
  }
  function Jf(e) {
    G.H = ti;
    var t = Ue !== null && Ue.next !== null;
    if (vn = 0, et = Ue = ue = null, yr = !1, Il = 0, al = null, t) throw Error(c(300));
    e === null || tt || (e = e.dependencies, e !== null && ur(e) && (tt = !0));
  }
  function $f(e, t, n, a) {
    ue = e;
    var i = 0;
    do {
      if (nl && (al = null), Il = 0, nl = !1, 25 <= i) throw Error(c(301));
      if (i += 1, et = Ue = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      G.H = Dd, u = t(n, a);
    } while (nl);
    return u;
  }
  function wy() {
    var e = G.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Pl(t) : t, e = e.useState()[0], (Ue !== null ? Ue.memoizedState : null) !== e && (ue.flags |= 1024), t;
  }
  function Ns() {
    var e = pr !== 0;
    return pr = 0, e;
  }
  function _s(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Os(e) {
    if (yr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      yr = !1;
    }
    vn = 0, et = Ue = ue = null, nl = !1, Il = pr = 0, al = null;
  }
  function gt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return et === null ? ue.memoizedState = et = e : et = et.next = e, et;
  }
  function Ie() {
    if (Ue === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = et === null ? ue.memoizedState : et.next;
    if (t !== null)
      et = t, Ue = e;
    else {
      if (e === null)
        throw ue.alternate === null ? Error(c(467)) : Error(c(310));
      Ue = e, e = {
        memoizedState: Ue.memoizedState,
        baseState: Ue.baseState,
        baseQueue: Ue.baseQueue,
        queue: Ue.queue,
        next: null
      }, et === null ? ue.memoizedState = et = e : et = et.next = e;
    }
    return et;
  }
  function vr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pl(e) {
    var t = Il;
    return Il += 1, al === null && (al = []), e = qf(al, e, t), t = ue, (et === null ? t.memoizedState : et.next) === null && (t = t.alternate, G.H = t === null || t.memoizedState === null ? Od : Ys), e;
  }
  function br(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Pl(e);
      if (e.$$typeof === F) return ct(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ds(e) {
    var t = null, n = ue.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = ue.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = vr(), ue.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = _e;
    return t.index++, n;
  }
  function bn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Er(e) {
    var t = Ie();
    return Us(t, Ue, e);
  }
  function Us(e, t, n) {
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
        if (B !== _.lane ? (be & B) === B : (vn & B) === B) {
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
            }), B === Wa && (L = !0);
          else if ((vn & O) === O) {
            _ = _.next, O === Wa && (L = !0);
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
            }, E === null ? (h = E = B, f = u) : E = E.next = B, ue.lanes |= O, $n |= O;
          B = _.action, Ra && n(u, B), u = _.hasEagerState ? _.eagerState : n(u, B);
        } else
          O = {
            lane: B,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, E === null ? (h = E = O, f = u) : E = E.next = O, ue.lanes |= B, $n |= B;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (E === null ? f = u : E.next = h, !Mt(u, e.memoizedState) && (tt = !0, L && (n = Ia, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = f, e.baseQueue = E, a.lastRenderedState = u;
    }
    return i === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Ms(e) {
    var t = Ie(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, i = n.pending, u = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var f = i = i.next;
      do
        u = e(u, f.action), f = f.next;
      while (f !== i);
      Mt(u, t.memoizedState) || (tt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ff(e, t, n) {
    var a = ue, i = Ie(), u = Se;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var f = !Mt(
      (Ue || i).memoizedState,
      n
    );
    if (f && (i.memoizedState = n, tt = !0), i = i.queue, js(Pf.bind(null, a, i, e), [
      e
    ]), i.getSnapshot !== t || f || et !== null && et.memoizedState.tag & 1) {
      if (a.flags |= 2048, ll(
        9,
        { destroy: void 0 },
        If.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), He === null) throw Error(c(349));
      u || (vn & 127) !== 0 || Wf(a, t, n);
    }
    return n;
  }
  function Wf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ue.updateQueue, t === null ? (t = vr(), ue.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function If(e, t, n, a) {
    t.value = n, t.getSnapshot = a, ed(t) && td(e);
  }
  function Pf(e, t, n) {
    return n(function() {
      ed(t) && td(e);
    });
  }
  function ed(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function td(e) {
    var t = ha(e, 2);
    t !== null && Tt(t, e, 2);
  }
  function zs(e) {
    var t = gt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ra) {
        Ln(!0);
        try {
          n();
        } finally {
          Ln(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bn,
      lastRenderedState: e
    }, t;
  }
  function nd(e, t, n, a) {
    return e.baseState = n, Us(
      e,
      Ue,
      typeof a == "function" ? a : bn
    );
  }
  function Ry(e, t, n, a, i) {
    if (Rr(e)) throw Error(c(485));
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
      G.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, ad(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function ad(e, t) {
    var n = t.action, a = t.payload, i = e.state;
    if (t.isTransition) {
      var u = G.T, f = {};
      G.T = f;
      try {
        var h = n(i, a), E = G.S;
        E !== null && E(f, h), ld(e, t, h);
      } catch (_) {
        Ls(e, t, _);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), G.T = u;
      }
    } else
      try {
        u = n(i, a), ld(e, t, u);
      } catch (_) {
        Ls(e, t, _);
      }
  }
  function ld(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        id(e, t, a);
      },
      function(a) {
        return Ls(e, t, a);
      }
    ) : id(e, t, n);
  }
  function id(e, t, n) {
    t.status = "fulfilled", t.value = n, rd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, ad(e, n)));
  }
  function Ls(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, rd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function rd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ud(e, t) {
    return t;
  }
  function sd(e, t) {
    if (Se) {
      var n = He.formState;
      if (n !== null) {
        e: {
          var a = ue;
          if (Se) {
            if (qe) {
              t: {
                for (var i = qe, u = Zt; i.nodeType !== 8; ) {
                  if (!u) {
                    i = null;
                    break t;
                  }
                  if (i = $t(
                    i.nextSibling
                  ), i === null) {
                    i = null;
                    break t;
                  }
                }
                u = i.data, i = u === "F!" || u === "F" ? i : null;
              }
              if (i) {
                qe = $t(
                  i.nextSibling
                ), a = i.data === "F!";
                break e;
              }
            }
            Gn(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = gt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ud,
      lastRenderedState: t
    }, n.queue = a, n = Cd.bind(
      null,
      ue,
      a
    ), a.dispatch = n, a = zs(!1), u = ks.bind(
      null,
      ue,
      !1,
      a.queue
    ), a = gt(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = i, n = Ry.bind(
      null,
      ue,
      i,
      u,
      n
    ), i.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function od(e) {
    var t = Ie();
    return cd(t, Ue, e);
  }
  function cd(e, t, n) {
    if (t = Us(
      e,
      t,
      ud
    )[0], e = Er(bn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Pl(t);
      } catch (f) {
        throw f === Pa ? cr : f;
      }
    else a = t;
    t = Ie();
    var i = t.queue, u = i.dispatch;
    return n !== t.memoizedState && (ue.flags |= 2048, ll(
      9,
      { destroy: void 0 },
      Ty.bind(null, i, n),
      null
    )), [a, u, e];
  }
  function Ty(e, t) {
    e.action = t;
  }
  function fd(e) {
    var t = Ie(), n = Ue;
    if (n !== null)
      return cd(t, n, e);
    Ie(), t = t.memoizedState, n = Ie();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function ll(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = ue.updateQueue, t === null && (t = vr(), ue.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function dd() {
    return Ie().memoizedState;
  }
  function Sr(e, t, n, a) {
    var i = gt();
    ue.flags |= e, i.memoizedState = ll(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function wr(e, t, n, a) {
    var i = Ie();
    a = a === void 0 ? null : a;
    var u = i.memoizedState.inst;
    Ue !== null && a !== null && As(a, Ue.memoizedState.deps) ? i.memoizedState = ll(t, u, n, a) : (ue.flags |= e, i.memoizedState = ll(
      1 | t,
      u,
      n,
      a
    ));
  }
  function md(e, t) {
    Sr(8390656, 8, e, t);
  }
  function js(e, t) {
    wr(2048, 8, e, t);
  }
  function xy(e) {
    ue.flags |= 4;
    var t = ue.updateQueue;
    if (t === null)
      t = vr(), ue.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function hd(e) {
    var t = Ie().memoizedState;
    return xy({ ref: t, nextImpl: e }), function() {
      if ((Ne & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function gd(e, t) {
    return wr(4, 2, e, t);
  }
  function yd(e, t) {
    return wr(4, 4, e, t);
  }
  function pd(e, t) {
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
  function vd(e, t, n) {
    n = n != null ? n.concat([e]) : null, wr(4, 4, pd.bind(null, t, e), n);
  }
  function Hs() {
  }
  function bd(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && As(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Ed(e, t) {
    var n = Ie();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && As(t, a[1]))
      return a[0];
    if (a = e(), Ra) {
      Ln(!0);
      try {
        e();
      } finally {
        Ln(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Bs(e, t, n) {
    return n === void 0 || (vn & 1073741824) !== 0 && (be & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Sm(), ue.lanes |= e, $n |= e, n);
  }
  function Sd(e, t, n, a) {
    return Mt(n, t) ? n : tl.current !== null ? (e = Bs(e, n, a), Mt(e, t) || (tt = !0), e) : (vn & 42) === 0 || (vn & 1073741824) !== 0 && (be & 261930) === 0 ? (tt = !0, e.memoizedState = n) : (e = Sm(), ue.lanes |= e, $n |= e, t);
  }
  function wd(e, t, n, a, i) {
    var u = X.p;
    X.p = u !== 0 && 8 > u ? u : 8;
    var f = G.T, h = {};
    G.T = h, ks(e, !1, t, n);
    try {
      var E = i(), _ = G.S;
      if (_ !== null && _(h, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var L = Ey(
          E,
          a
        );
        ei(
          e,
          t,
          L,
          qt(e)
        );
      } else
        ei(
          e,
          t,
          a,
          qt(e)
        );
    } catch (B) {
      ei(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        qt()
      );
    } finally {
      X.p = u, f !== null && h.types !== null && (f.types = h.types), G.T = f;
    }
  }
  function Ay() {
  }
  function qs(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Rd(e).queue;
    wd(
      e,
      i,
      t,
      de,
      n === null ? Ay : function() {
        return Td(e), n(a);
      }
    );
  }
  function Rd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: de,
      baseState: de,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: bn,
        lastRenderedState: de
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
        lastRenderedReducer: bn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Td(e) {
    var t = Rd(e);
    t.next === null && (t = e.alternate.memoizedState), ei(
      e,
      t.next.queue,
      {},
      qt()
    );
  }
  function Gs() {
    return ct(pi);
  }
  function xd() {
    return Ie().memoizedState;
  }
  function Ad() {
    return Ie().memoizedState;
  }
  function Cy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = qt();
          e = Xn(n);
          var a = Vn(t, e, n);
          a !== null && (Tt(a, t, n), $l(a, t, n)), t = { cache: gs() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ny(e, t, n) {
    var a = qt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rr(e) ? Nd(t, n) : (n = ls(e, t, n, a), n !== null && (Tt(n, e, a), _d(n, t, a)));
  }
  function Cd(e, t, n) {
    var a = qt();
    ei(e, t, n, a);
  }
  function ei(e, t, n, a) {
    var i = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Rr(e)) Nd(t, i);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var f = t.lastRenderedState, h = u(f, n);
          if (i.hasEagerState = !0, i.eagerState = h, Mt(h, f))
            return ar(e, t, i, 0), He === null && nr(), !1;
        } catch {
        }
      if (n = ls(e, t, i, a), n !== null)
        return Tt(n, e, a), _d(n, t, a), !0;
    }
    return !1;
  }
  function ks(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Eo(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Rr(e)) {
      if (t) throw Error(c(479));
    } else
      t = ls(
        e,
        n,
        a,
        2
      ), t !== null && Tt(t, e, 2);
  }
  function Rr(e) {
    var t = e.alternate;
    return e === ue || t !== null && t === ue;
  }
  function Nd(e, t) {
    nl = yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function _d(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Mc(e, n);
    }
  }
  var ti = {
    readContext: ct,
    use: br,
    useCallback: Ze,
    useContext: Ze,
    useEffect: Ze,
    useImperativeHandle: Ze,
    useLayoutEffect: Ze,
    useInsertionEffect: Ze,
    useMemo: Ze,
    useReducer: Ze,
    useRef: Ze,
    useState: Ze,
    useDebugValue: Ze,
    useDeferredValue: Ze,
    useTransition: Ze,
    useSyncExternalStore: Ze,
    useId: Ze,
    useHostTransitionStatus: Ze,
    useFormState: Ze,
    useActionState: Ze,
    useOptimistic: Ze,
    useMemoCache: Ze,
    useCacheRefresh: Ze
  };
  ti.useEffectEvent = Ze;
  var Od = {
    readContext: ct,
    use: br,
    useCallback: function(e, t) {
      return gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: ct,
    useEffect: md,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Sr(
        4194308,
        4,
        pd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Sr(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Sr(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = gt();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ra) {
        Ln(!0);
        try {
          e();
        } finally {
          Ln(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = gt();
      if (n !== void 0) {
        var i = n(t);
        if (Ra) {
          Ln(!0);
          try {
            n(t);
          } finally {
            Ln(!1);
          }
        }
      } else i = t;
      return a.memoizedState = a.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, a.queue = e, e = e.dispatch = Ny.bind(
        null,
        ue,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = zs(e);
      var t = e.queue, n = Cd.bind(null, ue, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Hs,
    useDeferredValue: function(e, t) {
      var n = gt();
      return Bs(n, e, t);
    },
    useTransition: function() {
      var e = zs(!1);
      return e = wd.bind(
        null,
        ue,
        e.queue,
        !0,
        !1
      ), gt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = ue, i = gt();
      if (Se) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), He === null)
          throw Error(c(349));
        (be & 127) !== 0 || Wf(a, t, n);
      }
      i.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return i.queue = u, md(Pf.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, ll(
        9,
        { destroy: void 0 },
        If.bind(
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
      var e = gt(), t = He.identifierPrefix;
      if (Se) {
        var n = un, a = rn;
        n = (a & ~(1 << 32 - Ut(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = pr++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Sy++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Gs,
    useFormState: sd,
    useActionState: sd,
    useOptimistic: function(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ks.bind(
        null,
        ue,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ds,
    useCacheRefresh: function() {
      return gt().memoizedState = Cy.bind(
        null,
        ue
      );
    },
    useEffectEvent: function(e) {
      var t = gt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ne & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Ys = {
    readContext: ct,
    use: br,
    useCallback: bd,
    useContext: ct,
    useEffect: js,
    useImperativeHandle: vd,
    useInsertionEffect: gd,
    useLayoutEffect: yd,
    useMemo: Ed,
    useReducer: Er,
    useRef: dd,
    useState: function() {
      return Er(bn);
    },
    useDebugValue: Hs,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return Sd(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Er(bn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Pl(e),
        t
      ];
    },
    useSyncExternalStore: Ff,
    useId: xd,
    useHostTransitionStatus: Gs,
    useFormState: od,
    useActionState: od,
    useOptimistic: function(e, t) {
      var n = Ie();
      return nd(n, Ue, e, t);
    },
    useMemoCache: Ds,
    useCacheRefresh: Ad
  };
  Ys.useEffectEvent = hd;
  var Dd = {
    readContext: ct,
    use: br,
    useCallback: bd,
    useContext: ct,
    useEffect: js,
    useImperativeHandle: vd,
    useInsertionEffect: gd,
    useLayoutEffect: yd,
    useMemo: Ed,
    useReducer: Ms,
    useRef: dd,
    useState: function() {
      return Ms(bn);
    },
    useDebugValue: Hs,
    useDeferredValue: function(e, t) {
      var n = Ie();
      return Ue === null ? Bs(n, e, t) : Sd(
        n,
        Ue.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ms(bn)[0], t = Ie().memoizedState;
      return [
        typeof e == "boolean" ? e : Pl(e),
        t
      ];
    },
    useSyncExternalStore: Ff,
    useId: xd,
    useHostTransitionStatus: Gs,
    useFormState: fd,
    useActionState: fd,
    useOptimistic: function(e, t) {
      var n = Ie();
      return Ue !== null ? nd(n, Ue, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ds,
    useCacheRefresh: Ad
  };
  Dd.useEffectEvent = hd;
  function Xs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Vs = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Xn(a);
      i.payload = t, n != null && (i.callback = n), t = Vn(e, i, a), t !== null && (Tt(t, e, a), $l(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = qt(), i = Xn(a);
      i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Vn(e, i, a), t !== null && (Tt(t, e, a), $l(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = qt(), a = Xn(n);
      a.tag = 2, t != null && (a.callback = t), t = Vn(e, a, n), t !== null && (Tt(t, e, n), $l(t, e, n));
    }
  };
  function Ud(e, t, n, a, i, u, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, f) : t.prototype && t.prototype.isPureReactComponent ? !kl(n, a) || !kl(i, u) : !0;
  }
  function Md(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Vs.enqueueReplaceState(t, t.state, null);
  }
  function Ta(e, t) {
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
  function zd(e) {
    tr(e);
  }
  function Ld(e) {
    console.error(e);
  }
  function jd(e) {
    tr(e);
  }
  function Tr(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Hd(e, t, n) {
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
  function Ks(e, t, n) {
    return n = Xn(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Tr(e, t);
    }, n;
  }
  function Bd(e) {
    return e = Xn(e), e.tag = 3, e;
  }
  function qd(e, t, n, a) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var u = a.value;
      e.payload = function() {
        return i(u);
      }, e.callback = function() {
        Hd(t, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Hd(t, n, a), typeof i != "function" && (Fn === null ? Fn = /* @__PURE__ */ new Set([this]) : Fn.add(this));
      var h = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function _y(e, t, n, a, i) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Fa(
        t,
        n,
        i,
        !0
      ), n = Lt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Jt === null ? jr() : n.alternate === null && Je === 0 && (Je = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, a === fr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), po(e, a, i)), !1;
          case 22:
            return n.flags |= 65536, a === fr ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), po(e, a, i)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return po(e, a, i), jr(), !1;
    }
    if (Se)
      return t = Lt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, a !== cs && (e = Error(c(422), { cause: a }), Vl(Vt(e, n)))) : (a !== cs && (t = Error(c(423), {
        cause: a
      }), Vl(
        Vt(t, n)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, a = Vt(a, n), i = Ks(
        e.stateNode,
        a,
        i
      ), Ss(e, i), Je !== 4 && (Je = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = Vt(u, n), oi === null ? oi = [u] : oi.push(u), Je !== 4 && (Je = 2), t === null) return !0;
    a = Vt(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = i & -i, n.lanes |= e, e = Ks(n.stateNode, a, e), Ss(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Fn === null || !Fn.has(u))))
            return n.flags |= 65536, i &= -i, n.lanes |= i, i = Bd(i), qd(
              i,
              e,
              n,
              a
            ), Ss(n, i), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Qs = Error(c(461)), tt = !1;
  function ft(e, t, n, a) {
    t.child = e === null ? Xf(t, null, n, a) : wa(
      t,
      e.child,
      n,
      a
    );
  }
  function Gd(e, t, n, a, i) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a)
        h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return va(t), a = Cs(
      e,
      t,
      n,
      f,
      u,
      i
    ), h = Ns(), e !== null && !tt ? (_s(e, t, i), En(e, t, i)) : (Se && h && ss(t), t.flags |= 1, ft(e, t, a, i), t.child);
  }
  function kd(e, t, n, a, i) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !is(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, Yd(
        e,
        t,
        u,
        a,
        i
      )) : (e = ir(
        n.type,
        null,
        a,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !eo(e, i)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : kl, n(f, a) && e.ref === t.ref)
        return En(e, t, i);
    }
    return t.flags |= 1, e = hn(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Yd(e, t, n, a, i) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (kl(u, a) && e.ref === t.ref)
        if (tt = !1, t.pendingProps = a = u, eo(e, i))
          (e.flags & 131072) !== 0 && (tt = !0);
        else
          return t.lanes = e.lanes, En(e, t, i);
    }
    return Zs(
      e,
      t,
      n,
      a,
      i
    );
  }
  function Xd(e, t, n, a) {
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
        return Vd(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && or(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Qf(t, u) : Rs(), Zf(t);
      else
        return a = t.lanes = 536870912, Vd(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (or(t, u.cachePool), Qf(t, u), Qn(), t.memoizedState = null) : (e !== null && or(t, null), Rs(), Qn());
    return ft(e, t, i, n), t.child;
  }
  function ni(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Vd(e, t, n, a, i) {
    var u = ps();
    return u = u === null ? null : { parent: Pe._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && or(t, null), Rs(), Zf(t), e !== null && Fa(e, t, a, !0), t.childLanes = i, null;
  }
  function xr(e, t) {
    return t = Cr(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Kd(e, t, n) {
    return wa(t, e.child, null, n), e = xr(t, t.pendingProps), e.flags |= 2, jt(t), t.memoizedState = null, e;
  }
  function Oy(e, t, n) {
    var a = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (a.mode === "hidden")
          return e = xr(t, a), t.lanes = 536870912, ni(null, e);
        if (xs(t), (e = qe) ? (e = a0(
          e,
          Zt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Bn !== null ? { id: rn, overflow: un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Nf(e), n.return = t, t.child = n, ot = t, qe = null)) : e = null, e === null) throw Gn(t);
        return t.lanes = 536870912, null;
      }
      return xr(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (xs(t), i)
        if (t.flags & 256)
          t.flags &= -257, t = Kd(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (tt || Fa(e, t, n, !1), i = (n & e.childLanes) !== 0, tt || i) {
        if (a = He, a !== null && (f = zc(a, n), f !== 0 && f !== u.retryLane))
          throw u.retryLane = f, ha(e, f), Tt(a, e, f), Qs;
        jr(), t = Kd(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, qe = $t(f.nextSibling), ot = t, Se = !0, qn = null, Zt = !1, e !== null && Df(t, e), t = xr(t, a), t.flags |= 4096;
      return t;
    }
    return e = hn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Ar(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Zs(e, t, n, a, i) {
    return va(t), n = Cs(
      e,
      t,
      n,
      a,
      void 0,
      i
    ), a = Ns(), e !== null && !tt ? (_s(e, t, i), En(e, t, i)) : (Se && a && ss(t), t.flags |= 1, ft(e, t, n, i), t.child);
  }
  function Qd(e, t, n, a, i, u) {
    return va(t), t.updateQueue = null, n = $f(
      t,
      a,
      n,
      i
    ), Jf(e), a = Ns(), e !== null && !tt ? (_s(e, t, u), En(e, t, u)) : (Se && a && ss(t), t.flags |= 1, ft(e, t, n, u), t.child);
  }
  function Zd(e, t, n, a, i) {
    if (va(t), t.stateNode === null) {
      var u = Qa, f = n.contextType;
      typeof f == "object" && f !== null && (u = ct(f)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Vs, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, bs(t), f = n.contextType, u.context = typeof f == "object" && f !== null ? ct(f) : Qa, u.state = t.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (Xs(
        t,
        n,
        f,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && Vs.enqueueReplaceState(u, u.state, null), Wl(t, a, u, i), Fl(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var h = t.memoizedProps, E = Ta(n, h);
      u.props = E;
      var _ = u.context, L = n.contextType;
      f = Qa, typeof L == "object" && L !== null && (f = ct(L));
      var B = n.getDerivedStateFromProps;
      L = typeof B == "function" || typeof u.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, L || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h || _ !== f) && Md(
        t,
        u,
        a,
        f
      ), Yn = !1;
      var O = t.memoizedState;
      u.state = O, Wl(t, a, u, i), Fl(), _ = t.memoizedState, h || O !== _ || Yn ? (typeof B == "function" && (Xs(
        t,
        n,
        B,
        a
      ), _ = t.memoizedState), (E = Yn || Ud(
        t,
        n,
        E,
        a,
        O,
        _,
        f
      )) ? (L || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = f, a = E) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Es(e, t), f = t.memoizedProps, L = Ta(n, f), u.props = L, B = t.pendingProps, O = u.context, _ = n.contextType, E = Qa, typeof _ == "object" && _ !== null && (E = ct(_)), h = n.getDerivedStateFromProps, (_ = typeof h == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== B || O !== E) && Md(
        t,
        u,
        a,
        E
      ), Yn = !1, O = t.memoizedState, u.state = O, Wl(t, a, u, i), Fl();
      var M = t.memoizedState;
      f !== B || O !== M || Yn || e !== null && e.dependencies !== null && ur(e.dependencies) ? (typeof h == "function" && (Xs(
        t,
        n,
        h,
        a
      ), M = t.memoizedState), (L = Yn || Ud(
        t,
        n,
        L,
        a,
        O,
        M,
        E
      ) || e !== null && e.dependencies !== null && ur(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, M, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        M,
        E
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = M), u.props = a, u.state = M, u.context = E, a = L) : (typeof u.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Ar(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = wa(
      t,
      e.child,
      null,
      i
    ), t.child = wa(
      t,
      null,
      n,
      i
    )) : ft(e, t, n, i), t.memoizedState = u.state, e = t.child) : e = En(
      e,
      t,
      i
    ), e;
  }
  function Jd(e, t, n, a) {
    return ya(), t.flags |= 256, ft(e, t, n, a), t.child;
  }
  var Js = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function $s(e) {
    return { baseLanes: e, cachePool: Hf() };
  }
  function Fs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Bt), e;
  }
  function $d(e, t, n) {
    var a = t.pendingProps, i = !1, u = (t.flags & 128) !== 0, f;
    if ((f = u) || (f = e !== null && e.memoizedState === null ? !1 : (We.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (i ? Kn(t) : Qn(), (e = qe) ? (e = a0(
          e,
          Zt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Bn !== null ? { id: rn, overflow: un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Nf(e), n.return = t, t.child = n, ot = t, qe = null)) : e = null, e === null) throw Gn(t);
        return Mo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = a.children;
      return a = a.fallback, i ? (Qn(), i = t.mode, h = Cr(
        { mode: "hidden", children: h },
        i
      ), a = ga(
        a,
        i,
        n,
        null
      ), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = $s(n), a.childLanes = Fs(
        e,
        f,
        n
      ), t.memoizedState = Js, ni(null, a)) : (Kn(t), Ws(t, h));
    }
    var E = e.memoizedState;
    if (E !== null && (h = E.dehydrated, h !== null)) {
      if (u)
        t.flags & 256 ? (Kn(t), t.flags &= -257, t = Is(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (Qn(), t.child = e.child, t.flags |= 128, t = null) : (Qn(), h = a.fallback, i = t.mode, a = Cr(
          { mode: "visible", children: a.children },
          i
        ), h = ga(
          h,
          i,
          n,
          null
        ), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, wa(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = $s(n), a.childLanes = Fs(
          e,
          f,
          n
        ), t.memoizedState = Js, t = ni(null, a));
      else if (Kn(t), Mo(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var _ = f.dgst;
        f = _, a = Error(c(419)), a.stack = "", a.digest = f, Vl({ value: a, source: null, stack: null }), t = Is(
          e,
          t,
          n
        );
      } else if (tt || Fa(e, t, n, !1), f = (n & e.childLanes) !== 0, tt || f) {
        if (f = He, f !== null && (a = zc(f, n), a !== 0 && a !== E.retryLane))
          throw E.retryLane = a, ha(e, a), Tt(f, e, a), Qs;
        Uo(h) || jr(), t = Is(
          e,
          t,
          n
        );
      } else
        Uo(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = E.treeContext, qe = $t(
          h.nextSibling
        ), ot = t, Se = !0, qn = null, Zt = !1, e !== null && Df(t, e), t = Ws(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Qn(), h = a.fallback, i = t.mode, E = e.child, _ = E.sibling, a = hn(E, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = E.subtreeFlags & 65011712, _ !== null ? h = hn(
      _,
      h
    ) : (h = ga(
      h,
      i,
      n,
      null
    ), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, ni(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = $s(n) : (i = h.cachePool, i !== null ? (E = Pe._currentValue, i = i.parent !== E ? { parent: E, pool: E } : i) : i = Hf(), h = {
      baseLanes: h.baseLanes | n,
      cachePool: i
    }), a.memoizedState = h, a.childLanes = Fs(
      e,
      f,
      n
    ), t.memoizedState = Js, ni(e.child, a)) : (Kn(t), n = e.child, e = n.sibling, n = hn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ws(e, t) {
    return t = Cr(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Cr(e, t) {
    return e = zt(22, e, null, t), e.lanes = 0, e;
  }
  function Is(e, t, n) {
    return wa(t, e.child, null, n), e = Ws(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Fd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ms(e.return, t, n);
  }
  function Ps(e, t, n, a, i, u) {
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
  function Wd(e, t, n) {
    var a = t.pendingProps, i = a.revealOrder, u = a.tail;
    a = a.children;
    var f = We.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(We, f), ft(e, t, a, n), a = Se ? Xl : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Fd(e, n, t);
        else if (e.tag === 19)
          Fd(e, n, t);
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
          e = n.alternate, e !== null && gr(e) === null && (i = n), n = n.sibling;
        n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), Ps(
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
          if (e = i.alternate, e !== null && gr(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling, i.sibling = n, n = i, i = e;
        }
        Ps(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Ps(
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
  function En(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), $n |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Fa(
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
      for (e = t.child, n = hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = hn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function eo(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ur(e)));
  }
  function Dy(e, t, n) {
    switch (t.tag) {
      case 3:
        ne(t, t.stateNode.containerInfo), kn(t, Pe, e.memoizedState.cache), ya();
        break;
      case 27:
      case 5:
        _t(t);
        break;
      case 4:
        ne(t, t.stateNode.containerInfo);
        break;
      case 10:
        kn(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, xs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Kn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? $d(e, t, n) : (Kn(t), e = En(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Kn(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Fa(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), i) {
          if (a)
            return Wd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), V(We, We.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Xd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        kn(t, Pe, e.memoizedState.cache);
    }
    return En(e, t, n);
  }
  function Id(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        tt = !0;
      else {
        if (!eo(e, n) && (t.flags & 128) === 0)
          return tt = !1, Dy(
            e,
            t,
            n
          );
        tt = (e.flags & 131072) !== 0;
      }
    else
      tt = !1, Se && (t.flags & 1048576) !== 0 && Of(t, Xl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Ea(t.elementType), t.type = e, typeof e == "function")
            is(e) ? (a = Ta(e, a), t.tag = 1, t = Zd(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = Zs(
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
                t.tag = 11, t = Gd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (i === P) {
                t.tag = 14, t = kd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              }
            }
            throw t = Le(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Zs(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, i = Ta(
          a,
          t.pendingProps
        ), Zd(
          e,
          t,
          a,
          i,
          n
        );
      case 3:
        e: {
          if (ne(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          i = u.element, Es(e, t), Wl(t, a, null, n);
          var f = t.memoizedState;
          if (a = f.cache, kn(t, Pe, a), a !== u.cache && hs(
            t,
            [Pe],
            n,
            !0
          ), Fl(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = Jd(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== i) {
              i = Vt(
                Error(c(424)),
                t
              ), Vl(i), t = Jd(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, qe = $t(e.firstChild), ot = t, Se = !0, qn = null, Zt = !0, n = Xf(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (ya(), a === i) {
              t = En(
                e,
                t,
                n
              );
              break e;
            }
            ft(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Ar(e, t), e === null ? (n = o0(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Se || (n = t.type, e = t.pendingProps, a = Xr(
          ce.current
        ).createElement(n), a[st] = t, a[vt] = e, dt(a, n, e), it(a), t.stateNode = a) : t.memoizedState = o0(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _t(t), e === null && Se && (a = t.stateNode = r0(
          t.type,
          t.pendingProps,
          ce.current
        ), ot = t, Zt = !0, i = qe, ea(t.type) ? (zo = i, qe = $t(a.firstChild)) : qe = i), ft(
          e,
          t,
          t.pendingProps.children,
          n
        ), Ar(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((i = a = qe) && (a = up(
          a,
          t.type,
          t.pendingProps,
          Zt
        ), a !== null ? (t.stateNode = a, ot = t, qe = $t(a.firstChild), Zt = !1, i = !0) : i = !1), i || Gn(t)), _t(t), i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = u.children, _o(i, u) ? a = null : f !== null && _o(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = Cs(
          e,
          t,
          wy,
          null,
          null,
          n
        ), pi._currentValue = i), Ar(e, t), ft(e, t, a, n), t.child;
      case 6:
        return e === null && Se && ((e = n = qe) && (n = sp(
          n,
          t.pendingProps,
          Zt
        ), n !== null ? (t.stateNode = n, ot = t, qe = null, e = !0) : e = !1), e || Gn(t)), null;
      case 13:
        return $d(e, t, n);
      case 4:
        return ne(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = wa(
          t,
          null,
          a,
          n
        ) : ft(e, t, a, n), t.child;
      case 11:
        return Gd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return ft(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return ft(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ft(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return a = t.pendingProps, kn(t, t.type, a.value), ft(e, t, a.children, n), t.child;
      case 9:
        return i = t.type._context, a = t.pendingProps.children, va(t), i = ct(i), a = a(i), t.flags |= 1, ft(e, t, a, n), t.child;
      case 14:
        return kd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Yd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Wd(e, t, n);
      case 31:
        return Oy(e, t, n);
      case 22:
        return Xd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return va(t), a = ct(Pe), e === null ? (i = ps(), i === null && (i = He, u = gs(), i.pooledCache = u, u.refCount++, u !== null && (i.pooledCacheLanes |= n), i = u), t.memoizedState = { parent: a, cache: i }, bs(t), kn(t, Pe, i)) : ((e.lanes & n) !== 0 && (Es(e, t), Wl(t, null, null, n), Fl()), i = e.memoizedState, u = t.memoizedState, i.parent !== a ? (i = { parent: a, cache: a }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), kn(t, Pe, a)) : (a = u.cache, kn(t, Pe, a), a !== i.cache && hs(
          t,
          [Pe],
          n,
          !0
        ))), ft(
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
  function Sn(e) {
    e.flags |= 4;
  }
  function to(e, t, n, a, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (xm()) e.flags |= 8192;
        else
          throw Sa = fr, vs;
    } else e.flags &= -16777217;
  }
  function Pd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !h0(t))
      if (xm()) e.flags |= 8192;
      else
        throw Sa = fr, vs;
  }
  function Nr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Dc() : 536870912, e.lanes |= t, sl |= t);
  }
  function ai(e, t) {
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
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags & 65011712, a |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        n |= i.lanes | i.childLanes, a |= i.subtreeFlags, a |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Uy(e, t, n) {
    var a = t.pendingProps;
    switch (os(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(t), null;
      case 1:
        return Ge(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pn(Pe), Ye(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && ($a(t) ? Sn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, fs())), Ge(t), null;
      case 26:
        var i = t.type, u = t.memoizedState;
        return e === null ? (Sn(t), u !== null ? (Ge(t), Pd(t, u)) : (Ge(t), to(
          t,
          i,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (Sn(t), Ge(t), Pd(t, u)) : (Ge(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Sn(t), Ge(t), to(
          t,
          i,
          e,
          a,
          n
        )), null;
      case 27:
        if (Mn(t), n = ce.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Sn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ge(t), null;
          }
          e = Q.current, $a(t) ? Uf(t) : (e = r0(i, a, n), t.stateNode = e, Sn(t));
        }
        return Ge(t), null;
      case 5:
        if (Mn(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Sn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ge(t), null;
          }
          if (u = Q.current, $a(t))
            Uf(t);
          else {
            var f = Xr(
              ce.current
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
            u[st] = t, u[vt] = a;
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
            e: switch (dt(u, i, a), i) {
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
            a && Sn(t);
          }
        }
        return Ge(t), to(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Sn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = ce.current, $a(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, i = ot, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  a = i.memoizedProps;
              }
            e[st] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || $m(e.nodeValue, n)), e || Gn(t, !0);
          } else
            e = Xr(e).createTextNode(
              a
            ), e[st] = t, t.stateNode = e;
        }
        return Ge(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = $a(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[st] = t;
            } else
              ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), e = !1;
          } else
            n = fs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ge(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = $a(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[st] = t;
            } else
              ya(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ge(t), i = !1;
          } else
            i = fs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (jt(t), t) : (jt(t), null);
        }
        return jt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, i = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (i = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== i && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Nr(t, t.updateQueue), Ge(t), null);
      case 4:
        return Ye(), e === null && To(t.stateNode.containerInfo), Ge(t), null;
      case 10:
        return pn(t.type), Ge(t), null;
      case 19:
        if (j(We), a = t.memoizedState, a === null) return Ge(t), null;
        if (i = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (i) ai(a, !1);
          else {
            if (Je !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = gr(e), u !== null) {
                  for (t.flags |= 128, ai(a, !1), e = u.updateQueue, t.updateQueue = e, Nr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Cf(n, e), n = n.sibling;
                  return V(
                    We,
                    We.current & 1 | 2
                  ), Se && gn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Ot() > Mr && (t.flags |= 128, i = !0, ai(a, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = gr(u), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Nr(t, e), ai(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !Se)
                return Ge(t), null;
            } else
              2 * Ot() - a.renderingStartTime > Mr && n !== 536870912 && (t.flags |= 128, i = !0, ai(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Ot(), e.sibling = null, n = We.current, V(
          We,
          i ? n & 1 | 2 : n & 1
        ), Se && gn(t, a.treeForkCount), e) : (Ge(t), null);
      case 22:
      case 23:
        return jt(t), Ts(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ge(t), n = t.updateQueue, n !== null && Nr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && j(ba), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), pn(Pe), Ge(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function My(e, t) {
    switch (os(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return pn(Pe), Ye(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (jt(t), t.alternate === null)
            throw Error(c(340));
          ya();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (jt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ya();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return j(We), null;
      case 4:
        return Ye(), null;
      case 10:
        return pn(t.type), null;
      case 22:
      case 23:
        return jt(t), Ts(), e !== null && j(ba), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return pn(Pe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function em(e, t) {
    switch (os(t), t.tag) {
      case 3:
        pn(Pe), Ye();
        break;
      case 26:
      case 27:
      case 5:
        Mn(t);
        break;
      case 4:
        Ye();
        break;
      case 31:
        t.memoizedState !== null && jt(t);
        break;
      case 13:
        jt(t);
        break;
      case 19:
        j(We);
        break;
      case 10:
        pn(t.type);
        break;
      case 22:
      case 23:
        jt(t), Ts(), e !== null && j(ba);
        break;
      case 24:
        pn(Pe);
    }
  }
  function li(e, t) {
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
  function Zn(e, t, n) {
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
  function tm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Kf(t, n);
      } catch (a) {
        De(e, e.return, a);
      }
    }
  }
  function nm(e, t, n) {
    n.props = Ta(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      De(e, t, a);
    }
  }
  function ii(e, t) {
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
  function sn(e, t) {
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
  function am(e) {
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
  function no(e, t, n) {
    try {
      var a = e.stateNode;
      tp(a, e.type, n, t), a[vt] = t;
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function lm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ea(e.type) || e.tag === 4;
  }
  function ao(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || lm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = dn));
    else if (a !== 4 && (a === 27 && ea(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (lo(e, t, n), e = e.sibling; e !== null; )
        lo(e, t, n), e = e.sibling;
  }
  function _r(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && ea(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (_r(e, t, n), e = e.sibling; e !== null; )
        _r(e, t, n), e = e.sibling;
  }
  function im(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      dt(t, a, n), t[st] = e, t[vt] = n;
    } catch (u) {
      De(e, e.return, u);
    }
  }
  var wn = !1, nt = !1, io = !1, rm = typeof WeakSet == "function" ? WeakSet : Set, rt = null;
  function zy(e, t) {
    if (e = e.containerInfo, Co = Fr, e = vf(e), Iu(e)) {
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
    for (No = { focusedElem: e, selectionRange: n }, Fr = !1, rt = t; rt !== null; )
      if (t = rt, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, rt = e;
      else
        for (; rt !== null; ) {
          switch (t = rt, u = t.alternate, e = t.flags, t.tag) {
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
                  var J = Ta(
                    n.type,
                    i
                  );
                  e = a.getSnapshotBeforeUpdate(
                    J,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ee) {
                  De(
                    n,
                    n.return,
                    ee
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Do(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Do(e);
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
            e.return = t.return, rt = e;
            break;
          }
          rt = t.return;
        }
  }
  function um(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Tn(e, n), a & 4 && li(5, n);
        break;
      case 1:
        if (Tn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              De(n, n.return, f);
            }
          else {
            var i = Ta(
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
        a & 64 && tm(n), a & 512 && ii(n, n.return);
        break;
      case 3:
        if (Tn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Kf(e, t);
          } catch (f) {
            De(n, n.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && im(n);
      case 26:
      case 5:
        Tn(e, n), t === null && a & 4 && am(n), a & 512 && ii(n, n.return);
        break;
      case 12:
        Tn(e, n);
        break;
      case 31:
        Tn(e, n), a & 4 && cm(e, n);
        break;
      case 13:
        Tn(e, n), a & 4 && fm(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Xy.bind(
          null,
          n
        ), op(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || wn, !a) {
          t = t !== null && t.memoizedState !== null || nt, i = wn;
          var u = nt;
          wn = a, (nt = t) && !u ? xn(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Tn(e, n), wn = i, nt = u;
        }
        break;
      case 30:
        break;
      default:
        Tn(e, n);
    }
  }
  function sm(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, sm(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Lu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Xe = null, Et = !1;
  function Rn(e, t, n) {
    for (n = n.child; n !== null; )
      om(e, t, n), n = n.sibling;
  }
  function om(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(_l, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        nt || sn(n, t), Rn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        nt || sn(n, t);
        var a = Xe, i = Et;
        ea(n.type) && (Xe = n.stateNode, Et = !1), Rn(
          e,
          t,
          n
        ), hi(n.stateNode), Xe = a, Et = i;
        break;
      case 5:
        nt || sn(n, t);
      case 6:
        if (a = Xe, i = Et, Xe = null, Rn(
          e,
          t,
          n
        ), Xe = a, Et = i, Xe !== null)
          if (Et)
            try {
              (Xe.nodeType === 9 ? Xe.body : Xe.nodeName === "HTML" ? Xe.ownerDocument.body : Xe).removeChild(n.stateNode);
            } catch (u) {
              De(
                n,
                t,
                u
              );
            }
          else
            try {
              Xe.removeChild(n.stateNode);
            } catch (u) {
              De(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Xe !== null && (Et ? (e = Xe, t0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), yl(e)) : t0(Xe, n.stateNode));
        break;
      case 4:
        a = Xe, i = Et, Xe = n.stateNode.containerInfo, Et = !0, Rn(
          e,
          t,
          n
        ), Xe = a, Et = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Zn(2, n, t), nt || Zn(4, n, t), Rn(
          e,
          t,
          n
        );
        break;
      case 1:
        nt || (sn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && nm(
          n,
          t,
          a
        )), Rn(
          e,
          t,
          n
        );
        break;
      case 21:
        Rn(
          e,
          t,
          n
        );
        break;
      case 22:
        nt = (a = nt) || n.memoizedState !== null, Rn(
          e,
          t,
          n
        ), nt = a;
        break;
      default:
        Rn(
          e,
          t,
          n
        );
    }
  }
  function cm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        yl(e);
      } catch (n) {
        De(t, t.return, n);
      }
    }
  }
  function fm(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        yl(e);
      } catch (n) {
        De(t, t.return, n);
      }
  }
  function Ly(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new rm()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new rm()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Or(e, t) {
    var n = Ly(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var i = Vy.bind(null, e, a);
        a.then(i, i);
      }
    });
  }
  function St(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var i = n[a], u = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (ea(h.type)) {
                Xe = h.stateNode, Et = !1;
                break e;
              }
              break;
            case 5:
              Xe = h.stateNode, Et = !1;
              break e;
            case 3:
            case 4:
              Xe = h.stateNode.containerInfo, Et = !0;
              break e;
          }
          h = h.return;
        }
        if (Xe === null) throw Error(c(160));
        om(u, f, i), Xe = null, Et = !1, u = i.alternate, u !== null && (u.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        dm(t, e), t = t.sibling;
  }
  var en = null;
  function dm(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        St(t, e), wt(e), a & 4 && (Zn(3, e, e.return), li(3, e), Zn(5, e, e.return));
        break;
      case 1:
        St(t, e), wt(e), a & 512 && (nt || n === null || sn(n, n.return)), a & 64 && wn && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var i = en;
        if (St(t, e), wt(e), a & 512 && (nt || n === null || sn(n, n.return)), a & 4) {
          var u = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (a) {
                    case "title":
                      u = i.getElementsByTagName("title")[0], (!u || u[Ul] || u[st] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = i.createElement(a), i.head.insertBefore(
                        u,
                        i.querySelector("head > title")
                      )), dt(u, a, n), u[st] = e, it(u), a = u;
                      break e;
                    case "link":
                      var f = d0(
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
                      u = i.createElement(a), dt(u, a, n), i.head.appendChild(u);
                      break;
                    case "meta":
                      if (f = d0(
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
                      u = i.createElement(a), dt(u, a, n), i.head.appendChild(u);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  u[st] = e, it(u), a = u;
                }
                e.stateNode = a;
              } else
                m0(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = f0(
                i,
                a,
                e.memoizedProps
              );
          else
            u !== a ? (u === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : u.count--, a === null ? m0(
              i,
              e.type,
              e.stateNode
            ) : f0(
              i,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && no(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        St(t, e), wt(e), a & 512 && (nt || n === null || sn(n, n.return)), n !== null && a & 4 && no(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (St(t, e), wt(e), a & 512 && (nt || n === null || sn(n, n.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            qa(i, "");
          } catch (J) {
            De(e, e.return, J);
          }
        }
        a & 4 && e.stateNode != null && (i = e.memoizedProps, no(
          e,
          i,
          n !== null ? n.memoizedProps : i
        )), a & 1024 && (io = !0);
        break;
      case 6:
        if (St(t, e), wt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (J) {
            De(e, e.return, J);
          }
        }
        break;
      case 3:
        if (Qr = null, i = en, en = Vr(t.containerInfo), St(t, e), en = i, wt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            yl(t.containerInfo);
          } catch (J) {
            De(e, e.return, J);
          }
        io && (io = !1, mm(e));
        break;
      case 4:
        a = en, en = Vr(
          e.stateNode.containerInfo
        ), St(t, e), wt(e), en = a;
        break;
      case 12:
        St(t, e), wt(e);
        break;
      case 31:
        St(t, e), wt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Or(e, a)));
        break;
      case 13:
        St(t, e), wt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Ur = Ot()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Or(e, a)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var E = n !== null && n.memoizedState !== null, _ = wn, L = nt;
        if (wn = _ || i, nt = L || E, St(t, e), nt = L, wn = _, wt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (n === null || E || wn || nt || xa(e)), n = null, t = e; ; ) {
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
                } catch (J) {
                  De(E, E.return, J);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                E = t;
                try {
                  E.stateNode.nodeValue = i ? "" : E.memoizedProps;
                } catch (J) {
                  De(E, E.return, J);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                E = t;
                try {
                  var M = E.stateNode;
                  i ? n0(M, !0) : n0(E.stateNode, !1);
                } catch (J) {
                  De(E, E.return, J);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, Or(e, n))));
        break;
      case 19:
        St(t, e), wt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Or(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        St(t, e), wt(e);
    }
  }
  function wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (lm(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var i = n.stateNode, u = ao(e);
            _r(e, u, i);
            break;
          case 5:
            var f = n.stateNode;
            n.flags & 32 && (qa(f, ""), n.flags &= -33);
            var h = ao(e);
            _r(e, h, f);
            break;
          case 3:
          case 4:
            var E = n.stateNode.containerInfo, _ = ao(e);
            lo(
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
  function mm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        mm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Tn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        um(e, t.alternate, t), t = t.sibling;
  }
  function xa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Zn(4, t, t.return), xa(t);
          break;
        case 1:
          sn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && nm(
            t,
            t.return,
            n
          ), xa(t);
          break;
        case 27:
          hi(t.stateNode);
        case 26:
        case 5:
          sn(t, t.return), xa(t);
          break;
        case 22:
          t.memoizedState === null && xa(t);
          break;
        case 30:
          xa(t);
          break;
        default:
          xa(t);
      }
      e = e.sibling;
    }
  }
  function xn(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, i = e, u = t, f = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xn(
            i,
            u,
            n
          ), li(4, u);
          break;
        case 1:
          if (xn(
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
                  Vf(E[i], h);
            } catch (_) {
              De(a, a.return, _);
            }
          }
          n && f & 64 && tm(u), ii(u, u.return);
          break;
        case 27:
          im(u);
        case 26:
        case 5:
          xn(
            i,
            u,
            n
          ), n && a === null && f & 4 && am(u), ii(u, u.return);
          break;
        case 12:
          xn(
            i,
            u,
            n
          );
          break;
        case 31:
          xn(
            i,
            u,
            n
          ), n && f & 4 && cm(i, u);
          break;
        case 13:
          xn(
            i,
            u,
            n
          ), n && f & 4 && fm(i, u);
          break;
        case 22:
          u.memoizedState === null && xn(
            i,
            u,
            n
          ), ii(u, u.return);
          break;
        case 30:
          break;
        default:
          xn(
            i,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function ro(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Kl(n));
  }
  function uo(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Kl(e));
  }
  function tn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        hm(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function hm(e, t, n, a) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tn(
          e,
          t,
          n,
          a
        ), i & 2048 && li(9, t);
        break;
      case 1:
        tn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        tn(
          e,
          t,
          n,
          a
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Kl(e)));
        break;
      case 12:
        if (i & 2048) {
          tn(
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
          tn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        tn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        tn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, f = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? tn(
          e,
          t,
          n,
          a
        ) : ri(e, t) : u._visibility & 2 ? tn(
          e,
          t,
          n,
          a
        ) : (u._visibility |= 2, il(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && ro(f, t);
        break;
      case 24:
        tn(
          e,
          t,
          n,
          a
        ), i & 2048 && uo(t.alternate, t);
        break;
      default:
        tn(
          e,
          t,
          n,
          a
        );
    }
  }
  function il(e, t, n, a, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, f = t, h = n, E = a, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          il(
            u,
            f,
            h,
            E,
            i
          ), li(8, f);
          break;
        case 23:
          break;
        case 22:
          var L = f.stateNode;
          f.memoizedState !== null ? L._visibility & 2 ? il(
            u,
            f,
            h,
            E,
            i
          ) : ri(
            u,
            f
          ) : (L._visibility |= 2, il(
            u,
            f,
            h,
            E,
            i
          )), i && _ & 2048 && ro(
            f.alternate,
            f
          );
          break;
        case 24:
          il(
            u,
            f,
            h,
            E,
            i
          ), i && _ & 2048 && uo(f.alternate, f);
          break;
        default:
          il(
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
  function ri(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, i = a.flags;
        switch (a.tag) {
          case 22:
            ri(n, a), i & 2048 && ro(
              a.alternate,
              a
            );
            break;
          case 24:
            ri(n, a), i & 2048 && uo(a.alternate, a);
            break;
          default:
            ri(n, a);
        }
        t = t.sibling;
      }
  }
  var ui = 8192;
  function rl(e, t, n) {
    if (e.subtreeFlags & ui)
      for (e = e.child; e !== null; )
        gm(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function gm(e, t, n) {
    switch (e.tag) {
      case 26:
        rl(
          e,
          t,
          n
        ), e.flags & ui && e.memoizedState !== null && Sp(
          n,
          en,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        rl(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = en;
        en = Vr(e.stateNode.containerInfo), rl(
          e,
          t,
          n
        ), en = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ui, ui = 16777216, rl(
          e,
          t,
          n
        ), ui = a) : rl(
          e,
          t,
          n
        ));
        break;
      default:
        rl(
          e,
          t,
          n
        );
    }
  }
  function ym(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function si(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          rt = a, vm(
            a,
            e
          );
        }
      ym(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        pm(e), e = e.sibling;
  }
  function pm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        si(e), e.flags & 2048 && Zn(9, e, e.return);
        break;
      case 3:
        si(e);
        break;
      case 12:
        si(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Dr(e)) : si(e);
        break;
      default:
        si(e);
    }
  }
  function Dr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          rt = a, vm(
            a,
            e
          );
        }
      ym(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Zn(8, t, t.return), Dr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Dr(t));
          break;
        default:
          Dr(t);
      }
      e = e.sibling;
    }
  }
  function vm(e, t) {
    for (; rt !== null; ) {
      var n = rt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Zn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Kl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, rt = a;
      else
        e: for (n = e; rt !== null; ) {
          a = rt;
          var i = a.sibling, u = a.return;
          if (sm(a), a === n) {
            rt = null;
            break e;
          }
          if (i !== null) {
            i.return = u, rt = i;
            break e;
          }
          rt = u;
        }
    }
  }
  var jy = {
    getCacheForType: function(e) {
      var t = ct(Pe), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return ct(Pe).controller.signal;
    }
  }, Hy = typeof WeakMap == "function" ? WeakMap : Map, Ne = 0, He = null, ye = null, be = 0, Oe = 0, Ht = null, Jn = !1, ul = !1, so = !1, An = 0, Je = 0, $n = 0, Aa = 0, oo = 0, Bt = 0, sl = 0, oi = null, Rt = null, co = !1, Ur = 0, bm = 0, Mr = 1 / 0, zr = null, Fn = null, at = 0, Wn = null, ol = null, Cn = 0, fo = 0, mo = null, Em = null, ci = 0, ho = null;
  function qt() {
    return (Ne & 2) !== 0 && be !== 0 ? be & -be : G.T !== null ? Eo() : Lc();
  }
  function Sm() {
    if (Bt === 0)
      if ((be & 536870912) === 0 || Se) {
        var e = Yi;
        Yi <<= 1, (Yi & 3932160) === 0 && (Yi = 262144), Bt = e;
      } else Bt = 536870912;
    return e = Lt.current, e !== null && (e.flags |= 32), Bt;
  }
  function Tt(e, t, n) {
    (e === He && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (cl(e, 0), In(
      e,
      be,
      Bt,
      !1
    )), Dl(e, n), ((Ne & 2) === 0 || e !== He) && (e === He && ((Ne & 2) === 0 && (Aa |= n), Je === 4 && In(
      e,
      be,
      Bt,
      !1
    )), on(e));
  }
  function wm(e, t, n) {
    if ((Ne & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ol(e, t), i = a ? Gy(e, t) : yo(e, t, !0), u = a;
    do {
      if (i === 0) {
        ul && !a && In(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !By(n)) {
          i = yo(e, t, !1), u = !1;
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
              i = oi;
              var E = h.current.memoizedState.isDehydrated;
              if (E && (cl(h, f).flags |= 256), f = yo(
                h,
                f,
                !1
              ), f !== 2) {
                if (so && !E) {
                  h.errorRecoveryDisabledLanes |= u, Aa |= u, i = 4;
                  break e;
                }
                u = Rt, Rt = i, u !== null && (Rt === null ? Rt = u : Rt.push.apply(
                  Rt,
                  u
                ));
              }
              i = f;
            }
            if (u = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          cl(e, 0), In(e, t, 0, !0);
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
              In(
                a,
                t,
                Bt,
                !Jn
              );
              break e;
            case 2:
              Rt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = Ur + 300 - Ot(), 10 < i)) {
            if (In(
              a,
              t,
              Bt,
              !Jn
            ), Vi(a, 0, !0) !== 0) break e;
            Cn = t, a.timeoutHandle = Pm(
              Rm.bind(
                null,
                a,
                n,
                Rt,
                zr,
                co,
                t,
                Bt,
                Aa,
                sl,
                Jn,
                u,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          Rm(
            a,
            n,
            Rt,
            zr,
            co,
            t,
            Bt,
            Aa,
            sl,
            Jn,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    on(e);
  }
  function Rm(e, t, n, a, i, u, f, h, E, _, L, B, O, M) {
    if (e.timeoutHandle = -1, B = t.subtreeFlags, B & 8192 || (B & 16785408) === 16785408) {
      B = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: dn
      }, gm(
        t,
        u,
        B
      );
      var J = (u & 62914560) === u ? Ur - Ot() : (u & 4194048) === u ? bm - Ot() : 0;
      if (J = wp(
        B,
        J
      ), J !== null) {
        Cn = u, e.cancelPendingCommit = J(
          Dm.bind(
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
        ), In(e, u, f, !_);
        return;
      }
    }
    Dm(
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
  function By(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var i = n[a], u = i.getSnapshot;
          i = i.value;
          try {
            if (!Mt(u(), i)) return !1;
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
  function In(e, t, n, a) {
    t &= ~oo, t &= ~Aa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var u = 31 - Ut(i), f = 1 << u;
      a[u] = -1, i &= ~f;
    }
    n !== 0 && Uc(e, n, t);
  }
  function Lr() {
    return (Ne & 6) === 0 ? (fi(0), !1) : !0;
  }
  function go() {
    if (ye !== null) {
      if (Oe === 0)
        var e = ye.return;
      else
        e = ye, yn = pa = null, Os(e), el = null, Zl = 0, e = ye;
      for (; e !== null; )
        em(e.alternate, e), e = e.return;
      ye = null;
    }
  }
  function cl(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, lp(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Cn = 0, go(), He = e, ye = n = hn(e.current, null), be = t, Oe = 0, Ht = null, Jn = !1, ul = Ol(e, t), so = !1, sl = Bt = oo = Aa = $n = Je = 0, Rt = oi = null, co = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var i = 31 - Ut(a), u = 1 << i;
        t |= e[i], a &= ~u;
      }
    return An = t, nr(), n;
  }
  function Tm(e, t) {
    ue = null, G.H = ti, t === Pa || t === cr ? (t = Gf(), Oe = 3) : t === vs ? (t = Gf(), Oe = 4) : Oe = t === Qs ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Ht = t, ye === null && (Je = 1, Tr(
      e,
      Vt(t, e.current)
    ));
  }
  function xm() {
    var e = Lt.current;
    return e === null ? !0 : (be & 4194048) === be ? Jt === null : (be & 62914560) === be || (be & 536870912) !== 0 ? e === Jt : !1;
  }
  function Am() {
    var e = G.H;
    return G.H = ti, e === null ? ti : e;
  }
  function Cm() {
    var e = G.A;
    return G.A = jy, e;
  }
  function jr() {
    Je = 4, Jn || (be & 4194048) !== be && Lt.current !== null || (ul = !0), ($n & 134217727) === 0 && (Aa & 134217727) === 0 || He === null || In(
      He,
      be,
      Bt,
      !1
    );
  }
  function yo(e, t, n) {
    var a = Ne;
    Ne |= 2;
    var i = Am(), u = Cm();
    (He !== e || be !== t) && (zr = null, cl(e, t)), t = !1;
    var f = Je;
    e: do
      try {
        if (Oe !== 0 && ye !== null) {
          var h = ye, E = Ht;
          switch (Oe) {
            case 8:
              go(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Lt.current === null && (t = !0);
              var _ = Oe;
              if (Oe = 0, Ht = null, fl(e, h, E, _), n && ul) {
                f = 0;
                break e;
              }
              break;
            default:
              _ = Oe, Oe = 0, Ht = null, fl(e, h, E, _);
          }
        }
        qy(), f = Je;
        break;
      } catch (L) {
        Tm(e, L);
      }
    while (!0);
    return t && e.shellSuspendCounter++, yn = pa = null, Ne = a, G.H = i, G.A = u, ye === null && (He = null, be = 0, nr()), f;
  }
  function qy() {
    for (; ye !== null; ) Nm(ye);
  }
  function Gy(e, t) {
    var n = Ne;
    Ne |= 2;
    var a = Am(), i = Cm();
    He !== e || be !== t ? (zr = null, Mr = Ot() + 500, cl(e, t)) : ul = Ol(
      e,
      t
    );
    e: do
      try {
        if (Oe !== 0 && ye !== null) {
          t = ye;
          var u = Ht;
          t: switch (Oe) {
            case 1:
              Oe = 0, Ht = null, fl(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Bf(u)) {
                Oe = 0, Ht = null, _m(t);
                break;
              }
              t = function() {
                Oe !== 2 && Oe !== 9 || He !== e || (Oe = 7), on(e);
              }, u.then(t, t);
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              Bf(u) ? (Oe = 0, Ht = null, _m(t)) : (Oe = 0, Ht = null, fl(e, t, u, 7));
              break;
            case 5:
              var f = null;
              switch (ye.tag) {
                case 26:
                  f = ye.memoizedState;
                case 5:
                case 27:
                  var h = ye;
                  if (f ? h0(f) : h.stateNode.complete) {
                    Oe = 0, Ht = null;
                    var E = h.sibling;
                    if (E !== null) ye = E;
                    else {
                      var _ = h.return;
                      _ !== null ? (ye = _, Hr(_)) : ye = null;
                    }
                    break t;
                  }
              }
              Oe = 0, Ht = null, fl(e, t, u, 5);
              break;
            case 6:
              Oe = 0, Ht = null, fl(e, t, u, 6);
              break;
            case 8:
              go(), Je = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        ky();
        break;
      } catch (L) {
        Tm(e, L);
      }
    while (!0);
    return yn = pa = null, G.H = a, G.A = i, Ne = n, ye !== null ? 0 : (He = null, be = 0, nr(), Je);
  }
  function ky() {
    for (; ye !== null && !sa(); )
      Nm(ye);
  }
  function Nm(e) {
    var t = Id(e.alternate, e, An);
    e.memoizedProps = e.pendingProps, t === null ? Hr(e) : ye = t;
  }
  function _m(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Qd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          be
        );
        break;
      case 11:
        t = Qd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          be
        );
        break;
      case 5:
        Os(t);
      default:
        em(n, t), t = ye = Cf(t, An), t = Id(n, t, An);
    }
    e.memoizedProps = e.pendingProps, t === null ? Hr(e) : ye = t;
  }
  function fl(e, t, n, a) {
    yn = pa = null, Os(t), el = null, Zl = 0;
    var i = t.return;
    try {
      if (_y(
        e,
        i,
        t,
        n,
        be
      )) {
        Je = 1, Tr(
          e,
          Vt(n, e.current)
        ), ye = null;
        return;
      }
    } catch (u) {
      if (i !== null) throw ye = i, u;
      Je = 1, Tr(
        e,
        Vt(n, e.current)
      ), ye = null;
      return;
    }
    t.flags & 32768 ? (Se || a === 1 ? e = !0 : ul || (be & 536870912) !== 0 ? e = !1 : (Jn = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Lt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Om(t, e)) : Hr(t);
  }
  function Hr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Om(
          t,
          Jn
        );
        return;
      }
      e = t.return;
      var n = Uy(
        t.alternate,
        t,
        An
      );
      if (n !== null) {
        ye = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    Je === 0 && (Je = 5);
  }
  function Om(e, t) {
    do {
      var n = My(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ye = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ye = e;
        return;
      }
      ye = e = n;
    } while (e !== null);
    Je = 6, ye = null;
  }
  function Dm(e, t, n, a, i, u, f, h, E) {
    e.cancelPendingCommit = null;
    do
      Br();
    while (at !== 0);
    if ((Ne & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (u = t.lanes | t.childLanes, u |= as, Eg(
        e,
        n,
        u,
        f,
        h,
        E
      ), e === He && (ye = He = null, be = 0), ol = t, Wn = e, Cn = n, fo = u, mo = i, Em = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ky(Gi, function() {
        return jm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = G.T, G.T = null, i = X.p, X.p = 2, f = Ne, Ne |= 4;
        try {
          zy(e, t, n);
        } finally {
          Ne = f, X.p = i, G.T = a;
        }
      }
      at = 1, Um(), Mm(), zm();
    }
  }
  function Um() {
    if (at === 1) {
      at = 0;
      var e = Wn, t = ol, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = G.T, G.T = null;
        var a = X.p;
        X.p = 2;
        var i = Ne;
        Ne |= 4;
        try {
          dm(t, e);
          var u = No, f = vf(e.containerInfo), h = u.focusedElem, E = u.selectionRange;
          if (f !== h && h && h.ownerDocument && pf(
            h.ownerDocument.documentElement,
            h
          )) {
            if (E !== null && Iu(h)) {
              var _ = E.start, L = E.end;
              if (L === void 0 && (L = _), "selectionStart" in h)
                h.selectionStart = _, h.selectionEnd = Math.min(
                  L,
                  h.value.length
                );
              else {
                var B = h.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), J = h.textContent.length, ee = Math.min(E.start, J), ze = E.end === void 0 ? ee : Math.min(E.end, J);
                  !M.extend && ee > ze && (f = ze, ze = ee, ee = f);
                  var x = yf(
                    h,
                    ee
                  ), w = yf(
                    h,
                    ze
                  );
                  if (x && w && (M.rangeCount !== 1 || M.anchorNode !== x.node || M.anchorOffset !== x.offset || M.focusNode !== w.node || M.focusOffset !== w.offset)) {
                    var N = B.createRange();
                    N.setStart(x.node, x.offset), M.removeAllRanges(), ee > ze ? (M.addRange(N), M.extend(w.node, w.offset)) : (N.setEnd(w.node, w.offset), M.addRange(N));
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
          Fr = !!Co, No = Co = null;
        } finally {
          Ne = i, X.p = a, G.T = n;
        }
      }
      e.current = t, at = 2;
    }
  }
  function Mm() {
    if (at === 2) {
      at = 0;
      var e = Wn, t = ol, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = G.T, G.T = null;
        var a = X.p;
        X.p = 2;
        var i = Ne;
        Ne |= 4;
        try {
          um(e, t.alternate, t);
        } finally {
          Ne = i, X.p = a, G.T = n;
        }
      }
      at = 3;
    }
  }
  function zm() {
    if (at === 4 || at === 3) {
      at = 0, Ou();
      var e = Wn, t = ol, n = Cn, a = Em;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, ol = Wn = null, Lm(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Fn = null), Mu(n), t = t.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function")
        try {
          Dt.onCommitFiberRoot(
            _l,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = G.T, i = X.p, X.p = 2, G.T = null;
        try {
          for (var u = e.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            u(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          G.T = t, X.p = i;
        }
      }
      (Cn & 3) !== 0 && Br(), on(e), i = e.pendingLanes, (n & 261930) !== 0 && (i & 42) !== 0 ? e === ho ? ci++ : (ci = 0, ho = e) : ci = 0, fi(0);
    }
  }
  function Lm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Kl(t)));
  }
  function Br() {
    return Um(), Mm(), zm(), jm();
  }
  function jm() {
    if (at !== 5) return !1;
    var e = Wn, t = fo;
    fo = 0;
    var n = Mu(Cn), a = G.T, i = X.p;
    try {
      X.p = 32 > n ? 32 : n, G.T = null, n = mo, mo = null;
      var u = Wn, f = Cn;
      if (at = 0, ol = Wn = null, Cn = 0, (Ne & 6) !== 0) throw Error(c(331));
      var h = Ne;
      if (Ne |= 4, pm(u.current), hm(
        u,
        u.current,
        f,
        n
      ), Ne = h, fi(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        try {
          Dt.onPostCommitFiberRoot(_l, u);
        } catch {
        }
      return !0;
    } finally {
      X.p = i, G.T = a, Lm(e, t);
    }
  }
  function Hm(e, t, n) {
    t = Vt(n, t), t = Ks(e.stateNode, t, 2), e = Vn(e, t, 2), e !== null && (Dl(e, 2), on(e));
  }
  function De(e, t, n) {
    if (e.tag === 3)
      Hm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Fn === null || !Fn.has(a))) {
            e = Vt(n, e), n = Bd(2), a = Vn(t, n, 2), a !== null && (qd(
              n,
              a,
              t,
              e
            ), Dl(a, 2), on(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function po(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Hy();
      var i = /* @__PURE__ */ new Set();
      a.set(t, i);
    } else
      i = a.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), a.set(t, i));
    i.has(n) || (so = !0, i.add(n), e = Yy.bind(null, e, t, n), t.then(e, e));
  }
  function Yy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, He === e && (be & n) === n && (Je === 4 || Je === 3 && (be & 62914560) === be && 300 > Ot() - Ur ? (Ne & 2) === 0 && cl(e, 0) : oo |= n, sl === be && (sl = 0)), on(e);
  }
  function Bm(e, t) {
    t === 0 && (t = Dc()), e = ha(e, t), e !== null && (Dl(e, t), on(e));
  }
  function Xy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Bm(e, n);
  }
  function Vy(e, t) {
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
    a !== null && a.delete(t), Bm(e, n);
  }
  function Ky(e, t) {
    return lt(e, t);
  }
  var qr = null, dl = null, vo = !1, Gr = !1, bo = !1, Pn = 0;
  function on(e) {
    e !== dl && e.next === null && (dl === null ? qr = dl = e : dl = dl.next = e), Gr = !0, vo || (vo = !0, Zy());
  }
  function fi(e, t) {
    if (!bo && Gr) {
      bo = !0;
      do
        for (var n = !1, a = qr; a !== null; ) {
          if (e !== 0) {
            var i = a.pendingLanes;
            if (i === 0) var u = 0;
            else {
              var f = a.suspendedLanes, h = a.pingedLanes;
              u = (1 << 31 - Ut(42 | e) + 1) - 1, u &= i & ~(f & ~h), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Ym(a, u));
          } else
            u = be, u = Vi(
              a,
              a === He ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ol(a, u) || (n = !0, Ym(a, u));
          a = a.next;
        }
      while (n);
      bo = !1;
    }
  }
  function Qy() {
    qm();
  }
  function qm() {
    Gr = vo = !1;
    var e = 0;
    Pn !== 0 && ap() && (e = Pn);
    for (var t = Ot(), n = null, a = qr; a !== null; ) {
      var i = a.next, u = Gm(a, t);
      u === 0 ? (a.next = null, n === null ? qr = i : n.next = i, i === null && (dl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (Gr = !0)), a = i;
    }
    at !== 0 && at !== 5 || fi(e), Pn !== 0 && (Pn = 0);
  }
  function Gm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, i = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ut(u), h = 1 << f, E = i[f];
      E === -1 ? ((h & n) === 0 || (h & a) !== 0) && (i[f] = bg(h, t)) : E <= t && (e.expiredLanes |= h), u &= ~h;
    }
    if (t = He, n = be, n = Vi(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && zn(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ol(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && zn(a), Mu(n)) {
        case 2:
        case 8:
          n = _c;
          break;
        case 32:
          n = Gi;
          break;
        case 268435456:
          n = Oc;
          break;
        default:
          n = Gi;
      }
      return a = km.bind(null, e), n = lt(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && zn(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function km(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Br() && e.callbackNode !== n)
      return null;
    var a = be;
    return a = Vi(
      e,
      e === He ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (wm(e, a, t), Gm(e, Ot()), e.callbackNode != null && e.callbackNode === n ? km.bind(null, e) : null);
  }
  function Ym(e, t) {
    if (Br()) return null;
    wm(e, t, !0);
  }
  function Zy() {
    ip(function() {
      (Ne & 6) !== 0 ? lt(
        Nc,
        Qy
      ) : qm();
    });
  }
  function Eo() {
    if (Pn === 0) {
      var e = Wa;
      e === 0 && (e = ki, ki <<= 1, (ki & 261888) === 0 && (ki = 256)), Pn = e;
    }
    return Pn;
  }
  function Xm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ji("" + e);
  }
  function Vm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Jy(e, t, n, a, i) {
    if (t === "submit" && n && n.stateNode === i) {
      var u = Xm(
        (i[vt] || null).action
      ), f = a.submitter;
      f && (t = (t = f[vt] || null) ? Xm(t.formAction) : f.getAttribute("formAction"), t !== null && (u = t, f = null));
      var h = new Ii(
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
                if (Pn !== 0) {
                  var E = f ? Vm(i, f) : new FormData(i);
                  qs(
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
                typeof u == "function" && (h.preventDefault(), E = f ? Vm(i, f) : new FormData(i), qs(
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
  for (var So = 0; So < ns.length; So++) {
    var wo = ns[So], $y = wo.toLowerCase(), Fy = wo[0].toUpperCase() + wo.slice(1);
    Pt(
      $y,
      "on" + Fy
    );
  }
  Pt(Sf, "onAnimationEnd"), Pt(wf, "onAnimationIteration"), Pt(Rf, "onAnimationStart"), Pt("dblclick", "onDoubleClick"), Pt("focusin", "onFocus"), Pt("focusout", "onBlur"), Pt(dy, "onTransitionRun"), Pt(my, "onTransitionStart"), Pt(hy, "onTransitionCancel"), Pt(Tf, "onTransitionEnd"), Ha("onMouseEnter", ["mouseout", "mouseover"]), Ha("onMouseLeave", ["mouseout", "mouseover"]), Ha("onPointerEnter", ["pointerout", "pointerover"]), Ha("onPointerLeave", ["pointerout", "pointerover"]), ca(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ca(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ca("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ca(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ca(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ca(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Wy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(di)
  );
  function Km(e, t) {
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
              tr(L);
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
              tr(L);
            }
            i.currentTarget = null, u = E;
          }
      }
    }
  }
  function pe(e, t) {
    var n = t[zu];
    n === void 0 && (n = t[zu] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Qm(t, e, 2, !1), n.add(a));
  }
  function Ro(e, t, n) {
    var a = 0;
    t && (a |= 4), Qm(
      n,
      e,
      a,
      t
    );
  }
  var kr = "_reactListening" + Math.random().toString(36).slice(2);
  function To(e) {
    if (!e[kr]) {
      e[kr] = !0, Bc.forEach(function(n) {
        n !== "selectionchange" && (Wy.has(n) || Ro(n, !1, e), Ro(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[kr] || (t[kr] = !0, Ro("selectionchange", !1, t));
    }
  }
  function Qm(e, t, n, a) {
    switch (S0(t)) {
      case 2:
        var i = xp;
        break;
      case 8:
        i = Ap;
        break;
      default:
        i = qo;
    }
    n = i.bind(
      null,
      t,
      n,
      e
    ), i = void 0, !Xu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), a ? i !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
      passive: i
    }) : e.addEventListener(t, n, !1);
  }
  function xo(e, t, n, a, i) {
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
            if (f = za(h), f === null) return;
            if (E = f.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = u = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    Fc(function() {
      var _ = u, L = ku(n), B = [];
      e: {
        var O = xf.get(e);
        if (O !== void 0) {
          var M = Ii, J = e;
          switch (e) {
            case "keypress":
              if (Fi(n) === 0) break e;
            case "keydown":
            case "keyup":
              M = Vg;
              break;
            case "focusin":
              J = "focus", M = Zu;
              break;
            case "focusout":
              J = "blur", M = Zu;
              break;
            case "beforeblur":
            case "afterblur":
              M = Zu;
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
              M = Pc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = Ug;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = Zg;
              break;
            case Sf:
            case wf:
            case Rf:
              M = Lg;
              break;
            case Tf:
              M = $g;
              break;
            case "scroll":
            case "scrollend":
              M = Og;
              break;
            case "wheel":
              M = Wg;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = Hg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = tf;
              break;
            case "toggle":
            case "beforetoggle":
              M = Pg;
          }
          var ee = (t & 4) !== 0, ze = !ee && (e === "scroll" || e === "scrollend"), x = ee ? O !== null ? O + "Capture" : null : O;
          ee = [];
          for (var w = _, N; w !== null; ) {
            var H = w;
            if (N = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || N === null || x === null || (H = zl(w, x), H != null && ee.push(
              mi(w, H, N)
            )), ze) break;
            w = w.return;
          }
          0 < ee.length && (O = new M(
            O,
            J,
            null,
            n,
            L
          ), B.push({ event: O, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && n !== Gu && (J = n.relatedTarget || n.fromElement) && (za(J) || J[Ma]))
            break e;
          if ((M || O) && (O = L.window === L ? L : (O = L.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (J = n.relatedTarget || n.toElement, M = _, J = J ? za(J) : null, J !== null && (ze = m(J), ee = J.tag, J !== ze || ee !== 5 && ee !== 27 && ee !== 6) && (J = null)) : (M = null, J = _), M !== J)) {
            if (ee = Pc, H = "onMouseLeave", x = "onMouseEnter", w = "mouse", (e === "pointerout" || e === "pointerover") && (ee = tf, H = "onPointerLeave", x = "onPointerEnter", w = "pointer"), ze = M == null ? O : Ml(M), N = J == null ? O : Ml(J), O = new ee(
              H,
              w + "leave",
              M,
              n,
              L
            ), O.target = ze, O.relatedTarget = N, H = null, za(L) === _ && (ee = new ee(
              x,
              w + "enter",
              J,
              n,
              L
            ), ee.target = N, ee.relatedTarget = ze, H = ee), ze = H, M && J)
              t: {
                for (ee = Iy, x = M, w = J, N = 0, H = x; H; H = ee(H))
                  N++;
                H = 0;
                for (var I = w; I; I = ee(I))
                  H++;
                for (; 0 < N - H; )
                  x = ee(x), N--;
                for (; 0 < H - N; )
                  w = ee(w), H--;
                for (; N--; ) {
                  if (x === w || w !== null && x === w.alternate) {
                    ee = x;
                    break t;
                  }
                  x = ee(x), w = ee(w);
                }
                ee = null;
              }
            else ee = null;
            M !== null && Zm(
              B,
              O,
              M,
              ee,
              !1
            ), J !== null && ze !== null && Zm(
              B,
              ze,
              J,
              ee,
              !0
            );
          }
        }
        e: {
          if (O = _ ? Ml(_) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var xe = cf;
          else if (sf(O))
            if (ff)
              xe = oy;
            else {
              xe = uy;
              var $ = ry;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? _ && qu(_.elementType) && (xe = cf) : xe = sy;
          if (xe && (xe = xe(e, _))) {
            of(
              B,
              xe,
              n,
              L
            );
            break e;
          }
          $ && $(e, O, _), e === "focusout" && _ && O.type === "number" && _.memoizedProps.value != null && Bu(O, "number", O.value);
        }
        switch ($ = _ ? Ml(_) : window, e) {
          case "focusin":
            (sf($) || $.contentEditable === "true") && (Xa = $, Pu = _, Yl = null);
            break;
          case "focusout":
            Yl = Pu = Xa = null;
            break;
          case "mousedown":
            es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            es = !1, bf(B, n, L);
            break;
          case "selectionchange":
            if (fy) break;
          case "keydown":
          case "keyup":
            bf(B, n, L);
        }
        var fe;
        if ($u)
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
          Ya ? rf(e, n) && (Ee = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (nf && n.locale !== "ko" && (Ya || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Ya && (fe = Wc()) : (Hn = L, Vu = "value" in Hn ? Hn.value : Hn.textContent, Ya = !0)), $ = Yr(_, Ee), 0 < $.length && (Ee = new ef(
          Ee,
          e,
          null,
          n,
          L
        ), B.push({ event: Ee, listeners: $ }), fe ? Ee.data = fe : (fe = uf(n), fe !== null && (Ee.data = fe)))), (fe = ty ? ny(e, n) : ay(e, n)) && (Ee = Yr(_, "onBeforeInput"), 0 < Ee.length && ($ = new ef(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          L
        ), B.push({
          event: $,
          listeners: Ee
        }), $.data = fe)), Jy(
          B,
          e,
          _,
          n,
          L
        );
      }
      Km(B, t);
    });
  }
  function mi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Yr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var i = e, u = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || u === null || (i = zl(e, n), i != null && a.unshift(
        mi(e, i, u)
      ), i = zl(e, t), i != null && a.push(
        mi(e, i, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function Iy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Zm(e, t, n, a, i) {
    for (var u = t._reactName, f = []; n !== null && n !== a; ) {
      var h = n, E = h.alternate, _ = h.stateNode;
      if (h = h.tag, E !== null && E === a) break;
      h !== 5 && h !== 26 && h !== 27 || _ === null || (E = _, i ? (_ = zl(n, u), _ != null && f.unshift(
        mi(n, _, E)
      )) : i || (_ = zl(n, u), _ != null && f.push(
        mi(n, _, E)
      ))), n = n.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var Py = /\r\n?/g, ep = /\u0000|\uFFFD/g;
  function Jm(e) {
    return (typeof e == "string" ? e : "" + e).replace(Py, `
`).replace(ep, "");
  }
  function $m(e, t) {
    return t = Jm(t), Jm(e) === t;
  }
  function Me(e, t, n, a, i, u) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || qa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && qa(e, "" + a);
        break;
      case "className":
        Qi(e, "class", a);
        break;
      case "tabIndex":
        Qi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Qi(e, n, a);
        break;
      case "style":
        Jc(e, a, u);
        break;
      case "data":
        if (t !== "object") {
          Qi(e, "data", a);
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
        a = Ji("" + a), e.setAttribute(n, a);
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
        a = Ji("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = dn);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
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
        n = Ji("" + a), e.setAttributeNS(
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
        pe("beforetoggle", e), pe("toggle", e), Ki(e, "popover", a);
        break;
      case "xlinkActuate":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        fn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        fn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ki(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Ng.get(n) || n, Ki(e, n, a));
    }
  }
  function Ao(e, t, n, a, i, u) {
    switch (n) {
      case "style":
        Jc(e, a, u);
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
        typeof a == "string" ? qa(e, a) : (typeof a == "number" || typeof a == "bigint") && qa(e, "" + a);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = dn);
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
        if (!qc.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), t = n.slice(2, i ? n.length - 7 : void 0), u = e[vt] || null, u = u != null ? u[n] : null, typeof u == "function" && e.removeEventListener(t, u, i), typeof a == "function")) {
              typeof u != "function" && u !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, i);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ki(e, n, a);
          }
    }
  }
  function dt(e, t, n) {
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
        pe("error", e), pe("load", e);
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
        pe("invalid", e);
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
        Vc(
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
        pe("invalid", e), a = f = u = null;
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
        t = u, n = f, e.multiple = !!a, t != null ? Ba(e, !!a, t, !1) : n != null && Ba(e, !!a, n, !0);
        return;
      case "textarea":
        pe("invalid", e), u = i = a = null;
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
        Qc(e, a, i, u);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Me(e, t, E, a, n, null));
        return;
      case "dialog":
        pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
        break;
      case "iframe":
      case "object":
        pe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < di.length; a++)
          pe(di[a], e);
        break;
      case "image":
        pe("error", e), pe("load", e);
        break;
      case "details":
        pe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        pe("error", e), pe("load", e);
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
        if (qu(t)) {
          for (L in n)
            n.hasOwnProperty(L) && (a = n[L], a !== void 0 && Ao(
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
  function tp(e, t, n, a) {
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
        Hu(
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
        t = h, n = f, a = M, O != null ? Ba(e, !!n, O, !1) : !!a != !!n && (t != null ? Ba(e, !!n, t, !0) : Ba(e, !!n, n ? [] : "", !1));
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
        Kc(e, O, M);
        return;
      case "option":
        for (var J in n)
          O = n[J], n.hasOwnProperty(J) && O != null && !a.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Me(
            e,
            t,
            J,
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
        for (var ee in n)
          O = n[ee], n.hasOwnProperty(ee) && O != null && !a.hasOwnProperty(ee) && Me(e, t, ee, null, a, O);
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
        if (qu(t)) {
          for (var ze in n)
            O = n[ze], n.hasOwnProperty(ze) && O !== void 0 && !a.hasOwnProperty(ze) && Ao(
              e,
              t,
              ze,
              void 0,
              a,
              O
            );
          for (L in a)
            O = a[L], M = n[L], !a.hasOwnProperty(L) || O === M || O === void 0 && M === void 0 || Ao(
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
  function Fm(e) {
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
  function np() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var i = n[a], u = i.transferSize, f = i.initiatorType, h = i.duration;
        if (u && h && Fm(f)) {
          for (f = 0, h = i.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], _ = E.startTime;
            if (_ > h) break;
            var L = E.transferSize, B = E.initiatorType;
            L && Fm(B) && (E = E.responseEnd, f += L * (E < h ? 1 : (h - _) / (E - _)));
          }
          if (--a, t += 8 * (u + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Co = null, No = null;
  function Xr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Wm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Im(e, t) {
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
  function _o(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Oo = null;
  function ap() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Oo ? !1 : (Oo = e, !0) : (Oo = null, !1);
  }
  var Pm = typeof setTimeout == "function" ? setTimeout : void 0, lp = typeof clearTimeout == "function" ? clearTimeout : void 0, e0 = typeof Promise == "function" ? Promise : void 0, ip = typeof queueMicrotask == "function" ? queueMicrotask : typeof e0 < "u" ? function(e) {
    return e0.resolve(null).then(e).catch(rp);
  } : Pm;
  function rp(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function ea(e) {
    return e === "head";
  }
  function t0(e, t) {
    var n = t, a = 0;
    do {
      var i = n.nextSibling;
      if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(i), yl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          hi(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, hi(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, h = u.nodeName;
            u[Ul] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && hi(e.ownerDocument.body);
      n = i;
    } while (n);
    yl(t);
  }
  function n0(e, t) {
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
  function Do(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Do(n), Lu(n);
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
  function up(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[Ul])
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
      if (e = $t(e.nextSibling), e === null) break;
    }
    return null;
  }
  function sp(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function a0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = $t(e.nextSibling), e === null)) return null;
    return e;
  }
  function Uo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Mo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function op(e, t) {
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
  function $t(e) {
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
  var zo = null;
  function l0(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return $t(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function i0(e) {
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
  function r0(e, t, n) {
    switch (t = Xr(n), e) {
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
  function hi(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Lu(e);
  }
  var Ft = /* @__PURE__ */ new Map(), u0 = /* @__PURE__ */ new Set();
  function Vr(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Nn = X.d;
  X.d = {
    f: cp,
    r: fp,
    D: dp,
    C: mp,
    L: hp,
    m: gp,
    X: pp,
    S: yp,
    M: vp
  };
  function cp() {
    var e = Nn.f(), t = Lr();
    return e || t;
  }
  function fp(e) {
    var t = La(e);
    t !== null && t.tag === 5 && t.type === "form" ? Td(t) : Nn.r(e);
  }
  var ml = typeof document > "u" ? null : document;
  function s0(e, t, n) {
    var a = ml;
    if (a && typeof t == "string" && t) {
      var i = Yt(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof n == "string" && (i += '[crossorigin="' + n + '"]'), u0.has(i) || (u0.add(i), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(i) === null && (t = a.createElement("link"), dt(t, "link", e), it(t), a.head.appendChild(t)));
    }
  }
  function dp(e) {
    Nn.D(e), s0("dns-prefetch", e, null);
  }
  function mp(e, t) {
    Nn.C(e, t), s0("preconnect", e, t);
  }
  function hp(e, t, n) {
    Nn.L(e, t, n);
    var a = ml;
    if (a && e && t) {
      var i = 'link[rel="preload"][as="' + Yt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (i += '[imagesrcset="' + Yt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (i += '[imagesizes="' + Yt(
        n.imageSizes
      ) + '"]')) : i += '[href="' + Yt(e) + '"]';
      var u = i;
      switch (t) {
        case "style":
          u = hl(e);
          break;
        case "script":
          u = gl(e);
      }
      Ft.has(u) || (e = C(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Ft.set(u, e), a.querySelector(i) !== null || t === "style" && a.querySelector(gi(u)) || t === "script" && a.querySelector(yi(u)) || (t = a.createElement("link"), dt(t, "link", e), it(t), a.head.appendChild(t)));
    }
  }
  function gp(e, t) {
    Nn.m(e, t);
    var n = ml;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Yt(a) + '"][href="' + Yt(e) + '"]', u = i;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = gl(e);
      }
      if (!Ft.has(u) && (e = C({ rel: "modulepreload", href: e }, t), Ft.set(u, e), n.querySelector(i) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(yi(u)))
              return;
        }
        a = n.createElement("link"), dt(a, "link", e), it(a), n.head.appendChild(a);
      }
    }
  }
  function yp(e, t, n) {
    Nn.S(e, t, n);
    var a = ml;
    if (a && e) {
      var i = ja(a).hoistableStyles, u = hl(e);
      t = t || "default";
      var f = i.get(u);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = a.querySelector(
          gi(u)
        ))
          h.loading = 5;
        else {
          e = C(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Ft.get(u)) && Lo(e, n);
          var E = f = a.createElement("link");
          it(E), dt(E, "link", e), E._p = new Promise(function(_, L) {
            E.onload = _, E.onerror = L;
          }), E.addEventListener("load", function() {
            h.loading |= 1;
          }), E.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Kr(f, t, a);
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
  function pp(e, t) {
    Nn.X(e, t);
    var n = ml;
    if (n && e) {
      var a = ja(n).hoistableScripts, i = gl(e), u = a.get(i);
      u || (u = n.querySelector(yi(i)), u || (e = C({ src: e, async: !0 }, t), (t = Ft.get(i)) && jo(e, t), u = n.createElement("script"), it(u), dt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function vp(e, t) {
    Nn.M(e, t);
    var n = ml;
    if (n && e) {
      var a = ja(n).hoistableScripts, i = gl(e), u = a.get(i);
      u || (u = n.querySelector(yi(i)), u || (e = C({ src: e, async: !0, type: "module" }, t), (t = Ft.get(i)) && jo(e, t), u = n.createElement("script"), it(u), dt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(i, u));
    }
  }
  function o0(e, t, n, a) {
    var i = (i = ce.current) ? Vr(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = hl(n.href), n = ja(
          i
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = hl(n.href);
          var u = ja(
            i
          ).hoistableStyles, f = u.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, f), (u = i.querySelector(
            gi(e)
          )) && !u._p && (f.instance = u, f.state.loading = 5), Ft.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ft.set(e, n), u || bp(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = gl(n), n = ja(
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
  function hl(e) {
    return 'href="' + Yt(e) + '"';
  }
  function gi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function c0(e) {
    return C({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function bp(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), dt(t, "link", n), it(t), e.head.appendChild(t));
  }
  function gl(e) {
    return '[src="' + Yt(e) + '"]';
  }
  function yi(e) {
    return "script[async]" + e;
  }
  function f0(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Yt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, it(a), a;
          var i = C({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), it(a), dt(a, "style", i), Kr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          i = hl(n.href);
          var u = e.querySelector(
            gi(i)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, it(u), u;
          a = c0(n), (i = Ft.get(i)) && Lo(a, i), u = (e.ownerDocument || e).createElement("link"), it(u);
          var f = u;
          return f._p = new Promise(function(h, E) {
            f.onload = h, f.onerror = E;
          }), dt(u, "link", a), t.state.loading |= 4, Kr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = gl(n.src), (i = e.querySelector(
            yi(u)
          )) ? (t.instance = i, it(i), i) : (a = n, (i = Ft.get(u)) && (a = C({}, n), jo(a, i)), e = e.ownerDocument || e, i = e.createElement("script"), it(i), dt(i, "link", a), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Kr(a, n.precedence, e));
    return t.instance;
  }
  function Kr(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = a.length ? a[a.length - 1] : null, u = i, f = 0; f < a.length; f++) {
      var h = a[f];
      if (h.dataset.precedence === t) u = h;
      else if (u !== i) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Lo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function jo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Qr = null;
  function d0(e, t, n) {
    if (Qr === null) {
      var a = /* @__PURE__ */ new Map(), i = Qr = /* @__PURE__ */ new Map();
      i.set(n, a);
    } else
      i = Qr, a = i.get(n), a || (a = /* @__PURE__ */ new Map(), i.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
      var u = n[i];
      if (!(u[Ul] || u[st] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(t) || "";
        f = e + f;
        var h = a.get(f);
        h ? h.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function m0(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ep(e, t, n) {
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
  function h0(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Sp(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var i = hl(a.href), u = t.querySelector(
          gi(i)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Zr.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, it(u);
          return;
        }
        u = t.ownerDocument || t, a = c0(a), (i = Ft.get(i)) && Lo(a, i), u = u.createElement("link"), it(u);
        var f = u;
        f._p = new Promise(function(h, E) {
          f.onload = h, f.onerror = E;
        }), dt(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Zr.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ho = 0;
  function wp(e, t) {
    return e.stylesheets && e.count === 0 && $r(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && $r(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ho === 0 && (Ho = 62500 * np());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && $r(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ho ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(i);
      };
    } : null;
  }
  function Zr() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) $r(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Jr = null;
  function $r(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Jr = /* @__PURE__ */ new Map(), t.forEach(Rp, e), Jr = null, Zr.call(e));
  }
  function Rp(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Jr.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Jr.set(e, n);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < i.length; u++) {
          var f = i[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, i), n.set(f, i), this.count++, a = Zr.bind(this), i.addEventListener("load", a), i.addEventListener("error", a), u ? u.parentNode.insertBefore(i, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var pi = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: de,
    _currentValue2: de,
    _threadCount: 0
  };
  function Tp(e, t, n, a, i, u, f, h, E) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Du(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Du(0), this.hiddenUpdates = Du(null), this.identifierPrefix = a, this.onUncaughtError = i, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function g0(e, t, n, a, i, u, f, h, E, _, L, B) {
    return e = new Tp(
      e,
      t,
      n,
      f,
      E,
      _,
      L,
      B,
      h
    ), t = 1, u === !0 && (t |= 24), u = zt(3, null, null, t), e.current = u, u.stateNode = e, t = gs(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, bs(u), e;
  }
  function y0(e) {
    return e ? (e = Qa, e) : Qa;
  }
  function p0(e, t, n, a, i, u) {
    i = y0(i), a.context === null ? a.context = i : a.pendingContext = i, a = Xn(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = Vn(e, a, t), n !== null && (Tt(n, e, t), $l(n, e, t));
  }
  function v0(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Bo(e, t) {
    v0(e, t), (e = e.alternate) && v0(e, t);
  }
  function b0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ha(e, 67108864);
      t !== null && Tt(t, e, 67108864), Bo(e, 67108864);
    }
  }
  function E0(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qt();
      t = Uu(t);
      var n = ha(e, t);
      n !== null && Tt(n, e, t), Bo(e, t);
    }
  }
  var Fr = !0;
  function xp(e, t, n, a) {
    var i = G.T;
    G.T = null;
    var u = X.p;
    try {
      X.p = 2, qo(e, t, n, a);
    } finally {
      X.p = u, G.T = i;
    }
  }
  function Ap(e, t, n, a) {
    var i = G.T;
    G.T = null;
    var u = X.p;
    try {
      X.p = 8, qo(e, t, n, a);
    } finally {
      X.p = u, G.T = i;
    }
  }
  function qo(e, t, n, a) {
    if (Fr) {
      var i = Go(a);
      if (i === null)
        xo(
          e,
          t,
          a,
          Wr,
          n
        ), w0(e, a);
      else if (Np(
        i,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (w0(e, a), t & 4 && -1 < Cp.indexOf(e)) {
        for (; i !== null; ) {
          var u = La(i);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = oa(u.pendingLanes);
                  if (f !== 0) {
                    var h = u;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var E = 1 << 31 - Ut(f);
                      h.entanglements[1] |= E, f &= ~E;
                    }
                    on(u), (Ne & 6) === 0 && (Mr = Ot() + 500, fi(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = ha(u, 2), h !== null && Tt(h, u, 2), Lr(), Bo(u, 2);
            }
          if (u = Go(a), u === null && xo(
            e,
            t,
            a,
            Wr,
            n
          ), u === i) break;
          i = u;
        }
        i !== null && a.stopPropagation();
      } else
        xo(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function Go(e) {
    return e = ku(e), ko(e);
  }
  var Wr = null;
  function ko(e) {
    if (Wr = null, e = za(e), e !== null) {
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
    return Wr = e, null;
  }
  function S0(e) {
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
        switch (dg()) {
          case Nc:
            return 2;
          case _c:
            return 8;
          case Gi:
          case mg:
            return 32;
          case Oc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Yo = !1, ta = null, na = null, aa = null, vi = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), la = [], Cp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function w0(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ta = null;
        break;
      case "dragenter":
      case "dragleave":
        na = null;
        break;
      case "mouseover":
      case "mouseout":
        aa = null;
        break;
      case "pointerover":
      case "pointerout":
        vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        bi.delete(t.pointerId);
    }
  }
  function Ei(e, t, n, a, i, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [i]
    }, t !== null && (t = La(t), t !== null && b0(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function Np(e, t, n, a, i) {
    switch (t) {
      case "focusin":
        return ta = Ei(
          ta,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "dragenter":
        return na = Ei(
          na,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "mouseover":
        return aa = Ei(
          aa,
          e,
          t,
          n,
          a,
          i
        ), !0;
      case "pointerover":
        var u = i.pointerId;
        return vi.set(
          u,
          Ei(
            vi.get(u) || null,
            e,
            t,
            n,
            a,
            i
          )
        ), !0;
      case "gotpointercapture":
        return u = i.pointerId, bi.set(
          u,
          Ei(
            bi.get(u) || null,
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
  function R0(e) {
    var t = za(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, jc(e.priority, function() {
              E0(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, jc(e.priority, function() {
              E0(n);
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
  function Ir(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Go(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Gu = a, n.target.dispatchEvent(a), Gu = null;
      } else
        return t = La(n), t !== null && b0(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function T0(e, t, n) {
    Ir(e) && n.delete(t);
  }
  function _p() {
    Yo = !1, ta !== null && Ir(ta) && (ta = null), na !== null && Ir(na) && (na = null), aa !== null && Ir(aa) && (aa = null), vi.forEach(T0), bi.forEach(T0);
  }
  function Pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Yo || (Yo = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      _p
    )));
  }
  var eu = null;
  function x0(e) {
    eu !== e && (eu = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        eu === e && (eu = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], i = e[t + 2];
          if (typeof a != "function") {
            if (ko(a || n) === null)
              continue;
            break;
          }
          var u = La(n);
          u !== null && (e.splice(t, 3), t -= 3, qs(
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
  function yl(e) {
    function t(E) {
      return Pr(E, e);
    }
    ta !== null && Pr(ta, e), na !== null && Pr(na, e), aa !== null && Pr(aa, e), vi.forEach(t), bi.forEach(t);
    for (var n = 0; n < la.length; n++) {
      var a = la[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < la.length && (n = la[0], n.blockedOn === null); )
      R0(n), n.blockedOn === null && la.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var i = n[a], u = n[a + 1], f = i[vt] || null;
        if (typeof u == "function")
          f || x0(n);
        else if (f) {
          var h = null;
          if (u && u.hasAttribute("formAction")) {
            if (i = u, f = u[vt] || null)
              h = f.formAction;
            else if (ko(i) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? n[a + 1] = h : (n.splice(a, 3), a -= 3), x0(n);
        }
      }
  }
  function A0() {
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
  function Xo(e) {
    this._internalRoot = e;
  }
  tu.prototype.render = Xo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = qt();
    p0(n, a, e, t, null, null);
  }, tu.prototype.unmount = Xo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      p0(e.current, 2, null, e, null, null), Lr(), t[Ma] = null;
    }
  };
  function tu(e) {
    this._internalRoot = e;
  }
  tu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Lc();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < la.length && t !== 0 && t < la[n].priority; n++) ;
      la.splice(n, 0, e), n === 0 && R0(e);
    }
  };
  var C0 = s.version;
  if (C0 !== "19.2.3")
    throw Error(
      c(
        527,
        C0,
        "19.2.3"
      )
    );
  X.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = b(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Op = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var nu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!nu.isDisabled && nu.supportsFiber)
      try {
        _l = nu.inject(
          Op
        ), Dt = nu;
      } catch {
      }
  }
  return Ri.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", i = zd, u = Ld, f = jd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = g0(
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
      A0
    ), e[Ma] = t.current, To(e), new Xo(t);
  }, Ri.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, i = "", u = zd, f = Ld, h = jd, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (h = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), t = g0(
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
      A0
    ), t.context = y0(null), n = t.current, a = qt(), a = Uu(a), i = Xn(a), i.callback = null, Vn(n, i, a), n = a, t.current.lanes = n, Dl(t, n), on(t), e[Ma] = t.current, To(e), new tu(t);
  }, Ri.version = "19.2.3", Ri;
}
var X0;
function bv() {
  if (X0) return Fo.exports;
  X0 = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (r) {
        console.error(r);
      }
  }
  return l(), Fo.exports = vv(), Fo.exports;
}
var Ev = bv();
function Sv(l = {}) {
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
const Hh = T.createContext(null);
function wv({ clientId: l, nonce: r, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c, children: d }) {
  const m = Sv({
    nonce: r,
    onScriptLoadSuccess: o,
    onScriptLoadError: c,
    locale: s
  }), y = T.useMemo(() => ({
    locale: s,
    clientId: l,
    scriptLoadedSuccessfully: m
  }), [l, m]);
  return jp.createElement(Hh.Provider, { value: y }, d);
}
function Rv() {
  const l = T.useContext(Hh);
  if (!l)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return l;
}
function Tv({ flow: l = "implicit", scope: r = "", onSuccess: s, onError: o, onNonOAuthError: c, overrideScope: d, state: m, ...y }) {
  const { clientId: p, scriptLoadedSuccessfully: g } = Rv(), b = T.useRef(), R = T.useRef(s);
  R.current = s;
  const C = T.useRef(o);
  C.current = o;
  const q = T.useRef(c);
  q.current = c, T.useEffect(() => {
    var D, k;
    if (!g)
      return;
    const K = l === "implicit" ? "initTokenClient" : "initCodeClient", Z = (k = (D = window?.google) === null || D === void 0 ? void 0 : D.accounts) === null || k === void 0 ? void 0 : k.oauth2[K]({
      client_id: p,
      scope: d ? r : `openid profile email ${r}`,
      callback: (F) => {
        var W, he;
        if (F.error)
          return (W = C.current) === null || W === void 0 ? void 0 : W.call(C, F);
        (he = R.current) === null || he === void 0 || he.call(R, F);
      },
      error_callback: (F) => {
        var W;
        (W = q.current) === null || W === void 0 || W.call(q, F);
      },
      state: m,
      ...y
    });
    b.current = Z;
  }, [p, g, l, r, m]);
  const A = T.useCallback((D) => {
    var k;
    return (k = b.current) === null || k === void 0 ? void 0 : k.requestAccessToken(D);
  }, []), z = T.useCallback(() => {
    var D;
    return (D = b.current) === null || D === void 0 ? void 0 : D.requestCode();
  }, []);
  return l === "implicit" ? A : z;
}
var me = /* @__PURE__ */ ((l) => (l.SUCCESS = "success", l.WARNING = "warning", l.ERROR = "error", l.INFO = "info", l))(me || {}), At = /* @__PURE__ */ ((l) => (l.PRIMARY = "primary", l.OUTLINE = "outline", l.LINK = "link", l))(At || {}), yt = /* @__PURE__ */ ((l) => (l.BUTTON = "button", l.SUBMIT = "submit", l.RESET = "reset", l))(yt || {}), Wt = /* @__PURE__ */ ((l) => (l.DEV = "dev", l.TEST = "test", l.STAGE = "stage", l.PROD = "prod", l))(Wt || {}), Sc = /* @__PURE__ */ ((l) => (l.TEST = "TEST", l.WEBCOMPONENT = "WEBCOMPONENT", l))(Sc || {}), ra = /* @__PURE__ */ ((l) => (l.ALERT = "alert", l.STATUS = "status", l))(ra || {}), _i = /* @__PURE__ */ ((l) => (l.ASSERTIVE = "assertive", l.POLITE = "polite", l.OFF = "off", l))(_i || {});
const ve = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  ACCESS_TOKEN_EXPIRES: "access_token_expires",
  REFRESH_TOKEN_TIME: "refresh_token_time",
  BRAND_DATA: "brand_data",
  AUTHORITY_OVERRIDE: "authority_override"
}, ke = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  X_CREDENTIAL: "X-Credential",
  X_CREDENTIAL_OLD: "x_credential"
  // Legacy cookie name for cleanup
}, Po = {
  X_BRAND_ID: "X-Brand-Id",
  X_SUBSIDIARY_ID: "X-Subsidiary-Id",
  X_BRAND_DOMAIN: "X-Brand-Domain"
}, Rl = {
  AUTH: "/api/auth",
  REGISTER: "/api/register",
  CHECK_EMAIL: "/api/check-email",
  FORGOT_PASSWORD: "/api/forgot-password",
  REFRESH_TOKEN: "/api/refresh",
  LOGOUT: "/api/logout"
}, wu = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}, lu = {
  MIN_LENGTH: 9,
  MAX_LENGTH: 15
}, Ci = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, pl = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, V0 = /[!@#$%^&*._-]/, K0 = /^[A-Za-z0-9!@#$%^&*._-]+$/, Oi = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, xv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, Ti = {
  COURSES: "/courses"
}, $e = {
  DEV: "dev",
  TEST: "test",
  STAGE: "stage",
  DEV_LEARN: "dev-learn",
  TEST_LEARN: "test-learn",
  STAGE_LEARN: "stage-learn",
  LEARN: "learn"
}, On = {
  HOSTNAME: "localhost",
  IP: "127.0.0.1",
  IP_PATTERN: /^\d+\.\d+\.\d+\.\d+$/
}, Av = {
  dev: "https://dev-auth-gateway.colibrilearning.com",
  test: "https://test-auth-gateway.colibrilearning.com",
  stage: "https://stage-auth-gateway.colibrilearning.com",
  prod: "https://auth-gateway.colibrilearning.com"
}, Cv = {
  dev: "https://dev-api-ms.colibrigroup.com",
  test: "https://test-api-ms.colibrigroup.com",
  stage: "https://stage-api-ms.colibrigroup.com",
  prod: "https://api-ms.colibrigroup.com"
}, ut = {
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
}, sc = {
  EMAIL_NOT_FOUND: "No account found with this email address.",
  CAPS_LOCK_ON: "Caps Lock is on"
}, Fe = {
  AUTH: "[Auth]",
  TOKEN: "[Token]",
  EMAIL_CHECK: "[EmailCheck]",
  REGISTRATION: "[Registration]",
  RESET_PASSWORD: "[ResetPassword]",
  EMBEDDED_LOGIN: "[EmbeddedLogin]",
  CREATE_ACCOUNT: "[CreateAccount]",
  COOKIE: "[Cookie]",
  CHECK_TOKEN_AND_REDIRECT: "[checkTokenAndRedirect]"
}, ec = {
  MAX_WIDTH: "90vw",
  WIDTH: "400px",
  Z_INDEX: 9999
}, tc = {
  WEAK: "Weak",
  GOOD: "Good",
  STRONG: "Strong"
}, nc = {
  WEAK: "#EF4444",
  GOOD: "#10B981",
  STRONG: "#10B981"
}, iu = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Gt = ({
  label: l,
  onClick: r,
  disabled: s,
  type: o = yt.BUTTON,
  variant: c = At.PRIMARY,
  part: d,
  className: m,
  children: y,
  ariaLabel: p,
  mainButtonStyle: g
}) => {
  const b = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", R = {
    [At.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [At.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [At.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
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
}, Ca = T.forwardRef((l, r) => {
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
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      part: "identity-widget-input-wrapper",
      className: `identity-widget-input-wrapper flex! flex-col! ${p || ""}`,
      children: [
        s && /* @__PURE__ */ v.jsxs(
          "label",
          {
            htmlFor: A,
            part: "identity-widget-input-label",
            className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
            children: [
              s,
              " ",
              y && /* @__PURE__ */ v.jsx(
                "span",
                {
                  part: "identity-widget-input-optional",
                  className: "identity-widget-input-optional text-gray-500 italic text-[13px]",
                  children: "(Optional)"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            part: "identity-widget-input-container",
            className: "identity-widget-input-container flex! items-center! relative!",
            children: [
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
                  children: g && g.map((k) => /* @__PURE__ */ v.jsx(
                    "option",
                    {
                      part: "identity-widget-input-option",
                      className: "identity-widget-input-option",
                      value: k.value,
                      children: k.label
                    },
                    k.value
                  ))
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
            ]
          }
        ),
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
      ]
    }
  );
}), Nv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", bl = ({
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
    switch (l) {
      case me.SUCCESS:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
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
        );
      case me.WARNING:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ v.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case me.ERROR:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-banner-icon-svg",
            className: "identity-widget-banner-icon-svg w-5! h-5!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ v.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case me.INFO:
      default:
        return /* @__PURE__ */ v.jsx(
          "img",
          {
            part: "identity-widget-banner-icon-image",
            src: Nv,
            alt: "info",
            className: "identity-widget-banner-icon-image w-5! h-5!"
          }
        );
    }
  }, g = y(), b = () => {
    switch (l) {
      case me.ERROR:
        return ra.ALERT;
      case me.WARNING:
      case me.INFO:
        return ra.STATUS;
      case me.SUCCESS:
        return ra.STATUS;
      default:
        return ra.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      part: "identity-widget-banner",
      role: b(),
      "aria-live": l === me.ERROR ? _i.ASSERTIVE : _i.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! items-center! max-[500px]:items-start! py-3! px-4! rounded! ${g.bg} ${g.border} ${d}`,
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            part: "identity-widget-banner-icon",
            className: `identity-widget-banner-icon flex-shrink-0! ${g.iconColor}!`,
            "aria-hidden": "true",
            children: p()
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            part: "identity-widget-banner-content",
            className: "identity-widget-banner-content ml-3! flex-1! flex! items-center! gap-2! max-[500px]:items-start! max-[500px]:flex-col!",
            children: [
              /* @__PURE__ */ v.jsx(
                "span",
                {
                  part: "identity-widget-banner-message",
                  className: `identity-widget-banner-message text-sm! font-medium! ${g.text}`,
                  children: r
                }
              ),
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
            ]
          }
        ),
        c && /* @__PURE__ */ v.jsxs(
          "button",
          {
            part: "identity-widget-banner-close",
            type: "button",
            onClick: c,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${g.iconColor} ${g.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ v.jsx(
                "span",
                {
                  part: "identity-widget-banner-close-text",
                  className: "identity-widget-banner-close-text sr-only",
                  children: "Dismiss"
                }
              ),
              /* @__PURE__ */ v.jsx(
                "svg",
                {
                  part: "identity-widget-banner-close-icon",
                  className: "identity-widget-banner-close-icon w-5! h-5!",
                  fill: "currentColor",
                  viewBox: "0 0 20 20",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ v.jsx(
                    "path",
                    {
                      fillRule: "evenodd",
                      d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                      clipRule: "evenodd"
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}, oc = ({ type: l, message: r, duration: s = 5e3, onClose: o, className: c = "" }) => {
  const [d, m] = T.useState(!1), [y, p] = T.useState(!1);
  T.useEffect(() => {
    setTimeout(() => m(!0), Oi.ANIMATION_ENTRANCE_DELAY);
    const A = setTimeout(() => {
      g();
    }, s);
    return () => clearTimeout(A);
  }, [s]);
  const g = () => {
    p(!0), setTimeout(() => {
      m(!1), o && o();
    }, Oi.ANIMATION_EXIT_DURATION);
  }, b = () => {
    switch (l) {
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
  }, R = () => {
    switch (l) {
      case me.SUCCESS:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
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
        );
      case me.WARNING:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ v.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case me.ERROR:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ v.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                clipRule: "evenodd"
              }
            )
          }
        );
      case me.INFO:
      default:
        return /* @__PURE__ */ v.jsx(
          "svg",
          {
            part: "identity-widget-toast-icon-svg",
            className: "identity-widget-toast-icon-svg w-6! h-6!",
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ v.jsx(
              "path",
              {
                fillRule: "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                clipRule: "evenodd"
              }
            )
          }
        );
    }
  }, C = b(), q = () => {
    switch (l) {
      case me.ERROR:
        return ra.ALERT;
      case me.WARNING:
      case me.INFO:
      case me.SUCCESS:
        return ra.STATUS;
      default:
        return ra.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      part: "identity-widget-toast",
      role: q(),
      "aria-live": l === me.ERROR ? _i.ASSERTIVE : _i.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${ec.Z_INDEX}]! transition-all! duration-300! ${d && !y ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: ec.MAX_WIDTH, width: ec.WIDTH },
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          part: "identity-widget-toast-body",
          className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${C.bg}`,
          children: [
            /* @__PURE__ */ v.jsx(
              "div",
              {
                part: "identity-widget-toast-icon",
                className: `identity-widget-toast-icon flex-shrink-0! ${C.icon}`,
                "aria-hidden": "true",
                children: R()
              }
            ),
            /* @__PURE__ */ v.jsx(
              "div",
              {
                part: "identity-widget-toast-content",
                className: `identity-widget-toast-content ml-3! flex-1! ${C.text}`,
                children: /* @__PURE__ */ v.jsx(
                  "p",
                  {
                    part: "identity-widget-toast-message",
                    className: "identity-widget-toast-message text-sm! font-medium!",
                    children: r
                  }
                )
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "button",
              {
                part: "identity-widget-toast-close",
                type: "button",
                onClick: g,
                "aria-label": "Close notification",
                className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${C.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
                children: [
                  /* @__PURE__ */ v.jsx(
                    "span",
                    {
                      part: "identity-widget-toast-close-text",
                      className: "identity-widget-toast-close-text sr-only",
                      children: "Close"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "svg",
                    {
                      part: "identity-widget-toast-close-icon",
                      className: "identity-widget-toast-close-icon w-5! h-5!",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      "aria-hidden": "true",
                      children: /* @__PURE__ */ v.jsx(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}, Bh = () => /* @__PURE__ */ v.jsx(
  "span",
  {
    part: "identity-widget-loader",
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { part: "identity-widget-loader-text", className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class Ai extends Error {
}
Ai.prototype.name = "InvalidTokenError";
function _v(l) {
  return decodeURIComponent(atob(l).replace(/(.)/g, (r, s) => {
    let o = s.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function Ov(l) {
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
    return _v(r);
  } catch {
    return atob(r);
  }
}
function Li(l, r) {
  if (typeof l != "string")
    throw new Ai("Invalid token specified: must be a string");
  r || (r = {});
  const s = r.header === !0 ? 0 : 1, o = l.split(".")[s];
  if (typeof o != "string")
    throw new Ai(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = Ov(o);
  } catch (d) {
    throw new Ai(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ai(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function qh() {
  const l = window.location.hostname;
  if (l === On.HOSTNAME || l === On.IP || On.IP_PATTERN.test(l))
    return "";
  const r = l.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Dv() {
  const l = window.location.hostname;
  return l === On.HOSTNAME || l === On.IP || On.IP_PATTERN.test(l) || l.startsWith(`${$e.DEV}.`) || l.startsWith(`${$e.DEV}-`) ? Wt.DEV : l.startsWith(`${$e.TEST}.`) || l.startsWith(`${$e.TEST}-`) ? Wt.TEST : l.startsWith(`${$e.STAGE}.`) || l.startsWith(`${$e.STAGE}-`) ? Wt.STAGE : Wt.PROD;
}
function ru() {
  const l = window.location.href, r = new URL(l), s = r.hostname;
  if (s.startsWith(`${$e.DEV}.`)) {
    const o = s.replace(`${$e.DEV}.`, `${$e.DEV_LEARN}.`);
    return `${r.protocol}//${o}${Ti.COURSES}`;
  } else if (s.startsWith(`${$e.TEST}.`)) {
    const o = s.replace(`${$e.TEST}.`, `${$e.TEST_LEARN}.`);
    return `${r.protocol}//${o}${Ti.COURSES}`;
  } else if (s.startsWith(`${$e.STAGE}.`)) {
    const o = s.replace(`${$e.STAGE}.`, `${$e.STAGE_LEARN}.`);
    return `${r.protocol}//${o}${Ti.COURSES}`;
  } else if (s.split(".").length === 2) {
    const c = `${$e.LEARN}.${s}`;
    return `${r.protocol}//${c}${Ti.COURSES}`;
  } else
    return `${r.protocol}//${s}${Ti.COURSES}`;
}
function Na(l, r, s, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + s);
  const d = qh(), m = d ? `; domain=${d}` : "", y = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(r) : r;
  document.cookie = `${l}=${p}; expires=${c.toUTCString()}; path=/${m}${y}; SameSite=Strict`;
}
function xt(l, r = !0) {
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
function uu(l) {
  const r = qh(), s = r ? `; domain=${r}` : "";
  document.cookie = `${l}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function Gh(l, r) {
  return function() {
    return l.apply(r, arguments);
  };
}
var Q0 = {};
const { toString: Uv } = Object.prototype, { getPrototypeOf: wc } = Object, { iterator: Ru, toStringTag: kh } = Symbol, Tu = /* @__PURE__ */ ((l) => (r) => {
  const s = Uv.call(r);
  return l[s] || (l[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), an = (l) => (l = l.toLowerCase(), (r) => Tu(r) === l), xu = (l) => (r) => typeof r === l, { isArray: Tl } = Array, El = xu("undefined");
function ji(l) {
  return l !== null && !El(l) && l.constructor !== null && !El(l.constructor) && Ct(l.constructor.isBuffer) && l.constructor.isBuffer(l);
}
const Yh = an("ArrayBuffer");
function Mv(l) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(l) : r = l && l.buffer && Yh(l.buffer), r;
}
const zv = xu("string"), Ct = xu("function"), Xh = xu("number"), Hi = (l) => l !== null && typeof l == "object", Lv = (l) => l === !0 || l === !1, fu = (l) => {
  if (Tu(l) !== "object")
    return !1;
  const r = wc(l);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(kh in l) && !(Ru in l);
}, jv = (l) => {
  if (!Hi(l) || ji(l))
    return !1;
  try {
    return Object.keys(l).length === 0 && Object.getPrototypeOf(l) === Object.prototype;
  } catch {
    return !1;
  }
}, Hv = an("Date"), Bv = an("File"), qv = an("Blob"), Gv = an("FileList"), kv = (l) => Hi(l) && Ct(l.pipe), Yv = (l) => {
  let r;
  return l && (typeof FormData == "function" && l instanceof FormData || Ct(l.append) && ((r = Tu(l)) === "formdata" || // detect form-data instance
  r === "object" && Ct(l.toString) && l.toString() === "[object FormData]"));
}, Xv = an("URLSearchParams"), [Vv, Kv, Qv, Zv] = ["ReadableStream", "Request", "Response", "Headers"].map(an), Jv = (l) => l.trim ? l.trim() : l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Bi(l, r, { allOwnKeys: s = !1 } = {}) {
  if (l === null || typeof l > "u")
    return;
  let o, c;
  if (typeof l != "object" && (l = [l]), Tl(l))
    for (o = 0, c = l.length; o < c; o++)
      r.call(null, l[o], o, l);
  else {
    if (ji(l))
      return;
    const d = s ? Object.getOwnPropertyNames(l) : Object.keys(l), m = d.length;
    let y;
    for (o = 0; o < m; o++)
      y = d[o], r.call(null, l[y], y, l);
  }
}
function Vh(l, r) {
  if (ji(l))
    return null;
  r = r.toLowerCase();
  const s = Object.keys(l);
  let o = s.length, c;
  for (; o-- > 0; )
    if (c = s[o], r === c.toLowerCase())
      return c;
  return null;
}
const _a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Kh = (l) => !El(l) && l !== _a;
function cc() {
  const { caseless: l, skipUndefined: r } = Kh(this) && this || {}, s = {}, o = (c, d) => {
    const m = l && Vh(s, d) || d;
    fu(s[m]) && fu(c) ? s[m] = cc(s[m], c) : fu(c) ? s[m] = cc({}, c) : Tl(c) ? s[m] = c.slice() : (!r || !El(c)) && (s[m] = c);
  };
  for (let c = 0, d = arguments.length; c < d; c++)
    arguments[c] && Bi(arguments[c], o);
  return s;
}
const $v = (l, r, s, { allOwnKeys: o } = {}) => (Bi(r, (c, d) => {
  s && Ct(c) ? l[d] = Gh(c, s) : l[d] = c;
}, { allOwnKeys: o }), l), Fv = (l) => (l.charCodeAt(0) === 65279 && (l = l.slice(1)), l), Wv = (l, r, s, o) => {
  l.prototype = Object.create(r.prototype, o), l.prototype.constructor = l, Object.defineProperty(l, "super", {
    value: r.prototype
  }), s && Object.assign(l.prototype, s);
}, Iv = (l, r, s, o) => {
  let c, d, m;
  const y = {};
  if (r = r || {}, l == null) return r;
  do {
    for (c = Object.getOwnPropertyNames(l), d = c.length; d-- > 0; )
      m = c[d], (!o || o(m, l, r)) && !y[m] && (r[m] = l[m], y[m] = !0);
    l = s !== !1 && wc(l);
  } while (l && (!s || s(l, r)) && l !== Object.prototype);
  return r;
}, Pv = (l, r, s) => {
  l = String(l), (s === void 0 || s > l.length) && (s = l.length), s -= r.length;
  const o = l.indexOf(r, s);
  return o !== -1 && o === s;
}, eb = (l) => {
  if (!l) return null;
  if (Tl(l)) return l;
  let r = l.length;
  if (!Xh(r)) return null;
  const s = new Array(r);
  for (; r-- > 0; )
    s[r] = l[r];
  return s;
}, tb = /* @__PURE__ */ ((l) => (r) => l && r instanceof l)(typeof Uint8Array < "u" && wc(Uint8Array)), nb = (l, r) => {
  const o = (l && l[Ru]).call(l);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const d = c.value;
    r.call(l, d[0], d[1]);
  }
}, ab = (l, r) => {
  let s;
  const o = [];
  for (; (s = l.exec(r)) !== null; )
    o.push(s);
  return o;
}, lb = an("HTMLFormElement"), ib = (l) => l.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, c) {
    return o.toUpperCase() + c;
  }
), Z0 = (({ hasOwnProperty: l }) => (r, s) => l.call(r, s))(Object.prototype), rb = an("RegExp"), Qh = (l, r) => {
  const s = Object.getOwnPropertyDescriptors(l), o = {};
  Bi(s, (c, d) => {
    let m;
    (m = r(c, d, l)) !== !1 && (o[d] = m || c);
  }), Object.defineProperties(l, o);
}, ub = (l) => {
  Qh(l, (r, s) => {
    if (Ct(l) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const o = l[s];
    if (Ct(o)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, sb = (l, r) => {
  const s = {}, o = (c) => {
    c.forEach((d) => {
      s[d] = !0;
    });
  };
  return Tl(l) ? o(l) : o(String(l).split(r)), s;
}, ob = () => {
}, cb = (l, r) => l != null && Number.isFinite(l = +l) ? l : r;
function fb(l) {
  return !!(l && Ct(l.append) && l[kh] === "FormData" && l[Ru]);
}
const db = (l) => {
  const r = new Array(10), s = (o, c) => {
    if (Hi(o)) {
      if (r.indexOf(o) >= 0)
        return;
      if (ji(o))
        return o;
      if (!("toJSON" in o)) {
        r[c] = o;
        const d = Tl(o) ? [] : {};
        return Bi(o, (m, y) => {
          const p = s(m, c + 1);
          !El(p) && (d[y] = p);
        }), r[c] = void 0, d;
      }
    }
    return o;
  };
  return s(l, 0);
}, mb = an("AsyncFunction"), hb = (l) => l && (Hi(l) || Ct(l)) && Ct(l.then) && Ct(l.catch), Zh = ((l, r) => l ? setImmediate : r ? ((s, o) => (_a.addEventListener("message", ({ source: c, data: d }) => {
  c === _a && d === s && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), _a.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Ct(_a.postMessage)
), gb = typeof queueMicrotask < "u" ? queueMicrotask.bind(_a) : typeof Q0 < "u" && Q0.nextTick || Zh, yb = (l) => l != null && Ct(l[Ru]), U = {
  isArray: Tl,
  isArrayBuffer: Yh,
  isBuffer: ji,
  isFormData: Yv,
  isArrayBufferView: Mv,
  isString: zv,
  isNumber: Xh,
  isBoolean: Lv,
  isObject: Hi,
  isPlainObject: fu,
  isEmptyObject: jv,
  isReadableStream: Vv,
  isRequest: Kv,
  isResponse: Qv,
  isHeaders: Zv,
  isUndefined: El,
  isDate: Hv,
  isFile: Bv,
  isBlob: qv,
  isRegExp: rb,
  isFunction: Ct,
  isStream: kv,
  isURLSearchParams: Xv,
  isTypedArray: tb,
  isFileList: Gv,
  forEach: Bi,
  merge: cc,
  extend: $v,
  trim: Jv,
  stripBOM: Fv,
  inherits: Wv,
  toFlatObject: Iv,
  kindOf: Tu,
  kindOfTest: an,
  endsWith: Pv,
  toArray: eb,
  forEachEntry: nb,
  matchAll: ab,
  isHTMLForm: lb,
  hasOwnProperty: Z0,
  hasOwnProp: Z0,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Qh,
  freezeMethods: ub,
  toObjectSet: sb,
  toCamelCase: ib,
  noop: ob,
  toFiniteNumber: cb,
  findKey: Vh,
  global: _a,
  isContextDefined: Kh,
  isSpecCompliantForm: fb,
  toJSONObject: db,
  isAsyncFn: mb,
  isThenable: hb,
  setImmediate: Zh,
  asap: gb,
  isIterable: yb
};
function se(l, r, s, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = l, this.name = "AxiosError", r && (this.code = r), s && (this.config = s), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
}
U.inherits(se, Error, {
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
const Jh = se.prototype, $h = {};
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
  $h[l] = { value: l };
});
Object.defineProperties(se, $h);
Object.defineProperty(Jh, "isAxiosError", { value: !0 });
se.from = (l, r, s, o, c, d) => {
  const m = Object.create(Jh);
  U.toFlatObject(l, m, function(b) {
    return b !== Error.prototype;
  }, (g) => g !== "isAxiosError");
  const y = l && l.message ? l.message : "Error", p = r == null && l ? l.code : r;
  return se.call(m, y, p, s, o, c), l && m.cause == null && Object.defineProperty(m, "cause", { value: l, configurable: !0 }), m.name = l && l.name || "Error", d && Object.assign(m, d), m;
};
const pb = null;
function fc(l) {
  return U.isPlainObject(l) || U.isArray(l);
}
function Fh(l) {
  return U.endsWith(l, "[]") ? l.slice(0, -2) : l;
}
function J0(l, r, s) {
  return l ? l.concat(r).map(function(c, d) {
    return c = Fh(c), !s && d ? "[" + c + "]" : c;
  }).join(s ? "." : "") : r;
}
function vb(l) {
  return U.isArray(l) && !l.some(fc);
}
const bb = U.toFlatObject(U, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Au(l, r, s) {
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
      throw new se("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(A) || U.isTypedArray(A) ? p && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function b(A, z, D) {
    let k = A;
    if (A && !D && typeof A == "object") {
      if (U.endsWith(z, "{}"))
        z = o ? z : z.slice(0, -2), A = JSON.stringify(A);
      else if (U.isArray(A) && vb(A) || (U.isFileList(A) || U.endsWith(z, "[]")) && (k = U.toArray(A)))
        return z = Fh(z), k.forEach(function(Z, F) {
          !(U.isUndefined(Z) || Z === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? J0([z], F, d) : m === null ? z : z + "[]",
            g(Z)
          );
        }), !1;
    }
    return fc(A) ? !0 : (r.append(J0(D, z, d), g(A)), !1);
  }
  const R = [], C = Object.assign(bb, {
    defaultVisitor: b,
    convertValue: g,
    isVisitable: fc
  });
  function q(A, z) {
    if (!U.isUndefined(A)) {
      if (R.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + z.join("."));
      R.push(A), U.forEach(A, function(k, K) {
        (!(U.isUndefined(k) || k === null) && c.call(
          r,
          k,
          U.isString(K) ? K.trim() : K,
          z,
          C
        )) === !0 && q(k, z ? z.concat(K) : [K]);
      }), R.pop();
    }
  }
  if (!U.isObject(l))
    throw new TypeError("data must be an object");
  return q(l), r;
}
function $0(l) {
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
function Rc(l, r) {
  this._pairs = [], l && Au(l, this, r);
}
const Wh = Rc.prototype;
Wh.append = function(r, s) {
  this._pairs.push([r, s]);
};
Wh.toString = function(r) {
  const s = r ? function(o) {
    return r.call(this, o, $0);
  } : $0;
  return this._pairs.map(function(c) {
    return s(c[0]) + "=" + s(c[1]);
  }, "").join("&");
};
function Eb(l) {
  return encodeURIComponent(l).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Ih(l, r, s) {
  if (!r)
    return l;
  const o = s && s.encode || Eb;
  U.isFunction(s) && (s = {
    serialize: s
  });
  const c = s && s.serialize;
  let d;
  if (c ? d = c(r, s) : d = U.isURLSearchParams(r) ? r.toString() : new Rc(r, s).toString(o), d) {
    const m = l.indexOf("#");
    m !== -1 && (l = l.slice(0, m)), l += (l.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return l;
}
class F0 {
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
const Ph = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Sb = typeof URLSearchParams < "u" ? URLSearchParams : Rc, wb = typeof FormData < "u" ? FormData : null, Rb = typeof Blob < "u" ? Blob : null, Tb = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Sb,
    FormData: wb,
    Blob: Rb
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Tc = typeof window < "u" && typeof document < "u", dc = typeof navigator == "object" && navigator || void 0, xb = Tc && (!dc || ["ReactNative", "NativeScript", "NS"].indexOf(dc.product) < 0), Ab = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Cb = Tc && window.location.href || "http://localhost", Nb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tc,
  hasStandardBrowserEnv: xb,
  hasStandardBrowserWebWorkerEnv: Ab,
  navigator: dc,
  origin: Cb
}, Symbol.toStringTag, { value: "Module" })), ht = {
  ...Nb,
  ...Tb
};
function _b(l, r) {
  return Au(l, new ht.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return ht.isNode && U.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Ob(l) {
  return U.matchAll(/\w+|\[(\w*)]/g, l).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Db(l) {
  const r = {}, s = Object.keys(l);
  let o;
  const c = s.length;
  let d;
  for (o = 0; o < c; o++)
    d = s[o], r[d] = l[d];
  return r;
}
function eg(l) {
  function r(s, o, c, d) {
    let m = s[d++];
    if (m === "__proto__") return !0;
    const y = Number.isFinite(+m), p = d >= s.length;
    return m = !m && U.isArray(c) ? c.length : m, p ? (U.hasOwnProp(c, m) ? c[m] = [c[m], o] : c[m] = o, !y) : ((!c[m] || !U.isObject(c[m])) && (c[m] = []), r(s, o, c[m], d) && U.isArray(c[m]) && (c[m] = Db(c[m])), !y);
  }
  if (U.isFormData(l) && U.isFunction(l.entries)) {
    const s = {};
    return U.forEachEntry(l, (o, c) => {
      r(Ob(o), c, s, 0);
    }), s;
  }
  return null;
}
function Ub(l, r, s) {
  if (U.isString(l))
    try {
      return (r || JSON.parse)(l), U.trim(l);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (s || JSON.stringify)(l);
}
const qi = {
  transitional: Ph,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, s) {
    const o = s.getContentType() || "", c = o.indexOf("application/json") > -1, d = U.isObject(r);
    if (d && U.isHTMLForm(r) && (r = new FormData(r)), U.isFormData(r))
      return c ? JSON.stringify(eg(r)) : r;
    if (U.isArrayBuffer(r) || U.isBuffer(r) || U.isStream(r) || U.isFile(r) || U.isBlob(r) || U.isReadableStream(r))
      return r;
    if (U.isArrayBufferView(r))
      return r.buffer;
    if (U.isURLSearchParams(r))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let y;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return _b(r, this.formSerializer).toString();
      if ((y = U.isFileList(r)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Au(
          y ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || c ? (s.setContentType("application/json", !1), Ub(r)) : r;
  }],
  transformResponse: [function(r) {
    const s = this.transitional || qi.transitional, o = s && s.forcedJSONParsing, c = this.responseType === "json";
    if (U.isResponse(r) || U.isReadableStream(r))
      return r;
    if (r && U.isString(r) && (o && !this.responseType || c)) {
      const m = !(s && s.silentJSONParsing) && c;
      try {
        return JSON.parse(r, this.parseReviver);
      } catch (y) {
        if (m)
          throw y.name === "SyntaxError" ? se.from(y, se.ERR_BAD_RESPONSE, this, null, this.response) : y;
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
U.forEach(["delete", "get", "head", "post", "put", "patch"], (l) => {
  qi.headers[l] = {};
});
const Mb = U.toObjectSet([
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
]), zb = (l) => {
  const r = {};
  let s, o, c;
  return l && l.split(`
`).forEach(function(m) {
    c = m.indexOf(":"), s = m.substring(0, c).trim().toLowerCase(), o = m.substring(c + 1).trim(), !(!s || r[s] && Mb[s]) && (s === "set-cookie" ? r[s] ? r[s].push(o) : r[s] = [o] : r[s] = r[s] ? r[s] + ", " + o : o);
  }), r;
}, W0 = /* @__PURE__ */ Symbol("internals");
function xi(l) {
  return l && String(l).trim().toLowerCase();
}
function du(l) {
  return l === !1 || l == null ? l : U.isArray(l) ? l.map(du) : String(l);
}
function Lb(l) {
  const r = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = s.exec(l); )
    r[o[1]] = o[2];
  return r;
}
const jb = (l) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(l.trim());
function ac(l, r, s, o, c) {
  if (U.isFunction(o))
    return o.call(this, r, s);
  if (c && (r = s), !!U.isString(r)) {
    if (U.isString(o))
      return r.indexOf(o) !== -1;
    if (U.isRegExp(o))
      return o.test(r);
  }
}
function Hb(l) {
  return l.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, s, o) => s.toUpperCase() + o);
}
function Bb(l, r) {
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
let Nt = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, s, o) {
    const c = this;
    function d(y, p, g) {
      const b = xi(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const R = U.findKey(c, b);
      (!R || c[R] === void 0 || g === !0 || g === void 0 && c[R] !== !1) && (c[R || p] = du(y));
    }
    const m = (y, p) => U.forEach(y, (g, b) => d(g, b, p));
    if (U.isPlainObject(r) || r instanceof this.constructor)
      m(r, s);
    else if (U.isString(r) && (r = r.trim()) && !jb(r))
      m(zb(r), s);
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
    if (r = xi(r), r) {
      const o = U.findKey(this, r);
      if (o) {
        const c = this[o];
        if (!s)
          return c;
        if (s === !0)
          return Lb(c);
        if (U.isFunction(s))
          return s.call(this, c, o);
        if (U.isRegExp(s))
          return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, s) {
    if (r = xi(r), r) {
      const o = U.findKey(this, r);
      return !!(o && this[o] !== void 0 && (!s || ac(this, this[o], o, s)));
    }
    return !1;
  }
  delete(r, s) {
    const o = this;
    let c = !1;
    function d(m) {
      if (m = xi(m), m) {
        const y = U.findKey(o, m);
        y && (!s || ac(o, o[y], y, s)) && (delete o[y], c = !0);
      }
    }
    return U.isArray(r) ? r.forEach(d) : d(r), c;
  }
  clear(r) {
    const s = Object.keys(this);
    let o = s.length, c = !1;
    for (; o--; ) {
      const d = s[o];
      (!r || ac(this, this[d], d, r, !0)) && (delete this[d], c = !0);
    }
    return c;
  }
  normalize(r) {
    const s = this, o = {};
    return U.forEach(this, (c, d) => {
      const m = U.findKey(o, d);
      if (m) {
        s[m] = du(c), delete s[d];
        return;
      }
      const y = r ? Hb(d) : String(d).trim();
      y !== d && delete s[d], s[y] = du(c), o[y] = !0;
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
    const o = (this[W0] = this[W0] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function d(m) {
      const y = xi(m);
      o[y] || (Bb(c, m), o[y] = !0);
    }
    return U.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
Nt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Nt.prototype, ({ value: l }, r) => {
  let s = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => l,
    set(o) {
      this[s] = o;
    }
  };
});
U.freezeMethods(Nt);
function lc(l, r) {
  const s = this || qi, o = r || s, c = Nt.from(o.headers);
  let d = o.data;
  return U.forEach(l, function(y) {
    d = y.call(s, d, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), d;
}
function tg(l) {
  return !!(l && l.__CANCEL__);
}
function xl(l, r, s) {
  se.call(this, l ?? "canceled", se.ERR_CANCELED, r, s), this.name = "CanceledError";
}
U.inherits(xl, se, {
  __CANCEL__: !0
});
function ng(l, r, s) {
  const o = s.config.validateStatus;
  !s.status || !o || o(s.status) ? l(s) : r(new se(
    "Request failed with status code " + s.status,
    [se.ERR_BAD_REQUEST, se.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function qb(l) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(l);
  return r && r[1] || "";
}
function Gb(l, r) {
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
function kb(l, r) {
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
const pu = (l, r, s = 3) => {
  let o = 0;
  const c = Gb(50, 250);
  return kb((d) => {
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
}, I0 = (l, r) => {
  const s = l != null;
  return [(o) => r[0]({
    lengthComputable: s,
    total: l,
    loaded: o
  }), r[1]];
}, P0 = (l) => (...r) => U.asap(() => l(...r)), Yb = ht.hasStandardBrowserEnv ? /* @__PURE__ */ ((l, r) => (s) => (s = new URL(s, ht.origin), l.protocol === s.protocol && l.host === s.host && (r || l.port === s.port)))(
  new URL(ht.origin),
  ht.navigator && /(msie|trident)/i.test(ht.navigator.userAgent)
) : () => !0, Xb = ht.hasStandardBrowserEnv ? (
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
function Vb(l) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(l);
}
function Kb(l, r) {
  return r ? l.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : l;
}
function ag(l, r, s) {
  let o = !Vb(r);
  return l && (o || s == !1) ? Kb(l, r) : r;
}
const eh = (l) => l instanceof Nt ? { ...l } : l;
function Da(l, r) {
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
    headers: (g, b, R) => c(eh(g), eh(b), R, !0)
  };
  return U.forEach(Object.keys({ ...l, ...r }), function(b) {
    const R = p[b] || c, C = R(l[b], r[b], b);
    U.isUndefined(C) && R !== y || (s[b] = C);
  }), s;
}
const lg = (l) => {
  const r = Da({}, l);
  let { data: s, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: d, headers: m, auth: y } = r;
  if (r.headers = m = Nt.from(m), r.url = Ih(ag(r.baseURL, r.url, r.allowAbsoluteUrls), l.params, l.paramsSerializer), y && m.set(
    "Authorization",
    "Basic " + btoa((y.username || "") + ":" + (y.password ? unescape(encodeURIComponent(y.password)) : ""))
  ), U.isFormData(s)) {
    if (ht.hasStandardBrowserEnv || ht.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (U.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), g = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, R]) => {
        g.includes(b.toLowerCase()) && m.set(b, R);
      });
    }
  }
  if (ht.hasStandardBrowserEnv && (o && U.isFunction(o) && (o = o(r)), o || o !== !1 && Yb(r.url))) {
    const p = c && d && Xb.read(d);
    p && m.set(c, p);
  }
  return r;
}, Qb = typeof XMLHttpRequest < "u", Zb = Qb && function(l) {
  return new Promise(function(s, o) {
    const c = lg(l);
    let d = c.data;
    const m = Nt.from(c.headers).normalize();
    let { responseType: y, onUploadProgress: p, onDownloadProgress: g } = c, b, R, C, q, A;
    function z() {
      q && q(), A && A(), c.cancelToken && c.cancelToken.unsubscribe(b), c.signal && c.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(c.method.toUpperCase(), c.url, !0), D.timeout = c.timeout;
    function k() {
      if (!D)
        return;
      const Z = Nt.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), W = {
        data: !y || y === "text" || y === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: Z,
        config: l,
        request: D
      };
      ng(function(le) {
        s(le), z();
      }, function(le) {
        o(le), z();
      }, W), D = null;
    }
    "onloadend" in D ? D.onloadend = k : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, D.onabort = function() {
      D && (o(new se("Request aborted", se.ECONNABORTED, l, D)), D = null);
    }, D.onerror = function(F) {
      const W = F && F.message ? F.message : "Network Error", he = new se(W, se.ERR_NETWORK, l, D);
      he.event = F || null, o(he), D = null;
    }, D.ontimeout = function() {
      let F = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const W = c.transitional || Ph;
      c.timeoutErrorMessage && (F = c.timeoutErrorMessage), o(new se(
        F,
        W.clarifyTimeoutError ? se.ETIMEDOUT : se.ECONNABORTED,
        l,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && U.forEach(m.toJSON(), function(F, W) {
      D.setRequestHeader(W, F);
    }), U.isUndefined(c.withCredentials) || (D.withCredentials = !!c.withCredentials), y && y !== "json" && (D.responseType = c.responseType), g && ([C, A] = pu(g, !0), D.addEventListener("progress", C)), p && D.upload && ([R, q] = pu(p), D.upload.addEventListener("progress", R), D.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (b = (Z) => {
      D && (o(!Z || Z.type ? new xl(null, l, D) : Z), D.abort(), D = null);
    }, c.cancelToken && c.cancelToken.subscribe(b), c.signal && (c.signal.aborted ? b() : c.signal.addEventListener("abort", b)));
    const K = qb(c.url);
    if (K && ht.protocols.indexOf(K) === -1) {
      o(new se("Unsupported protocol " + K + ":", se.ERR_BAD_REQUEST, l));
      return;
    }
    D.send(d || null);
  });
}, Jb = (l, r) => {
  const { length: s } = l = l ? l.filter(Boolean) : [];
  if (r || s) {
    let o = new AbortController(), c;
    const d = function(g) {
      if (!c) {
        c = !0, y();
        const b = g instanceof Error ? g : this.reason;
        o.abort(b instanceof se ? b : new xl(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new se(`timeout ${r} of ms exceeded`, se.ETIMEDOUT));
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
}, $b = function* (l, r) {
  let s = l.byteLength;
  if (s < r) {
    yield l;
    return;
  }
  let o = 0, c;
  for (; o < s; )
    c = o + r, yield l.slice(o, c), o = c;
}, Fb = async function* (l, r) {
  for await (const s of Wb(l))
    yield* $b(s, r);
}, Wb = async function* (l) {
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
}, th = (l, r, s, o) => {
  const c = Fb(l, r);
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
}, nh = 64 * 1024, { isFunction: su } = U, Ib = (({ Request: l, Response: r }) => ({
  Request: l,
  Response: r
}))(U.global), {
  ReadableStream: ah,
  TextEncoder: lh
} = U.global, ih = (l, ...r) => {
  try {
    return !!l(...r);
  } catch {
    return !1;
  }
}, Pb = (l) => {
  l = U.merge.call({
    skipUndefined: !0
  }, Ib, l);
  const { fetch: r, Request: s, Response: o } = l, c = r ? su(r) : typeof fetch == "function", d = su(s), m = su(o);
  if (!c)
    return !1;
  const y = c && su(ah), p = c && (typeof lh == "function" ? /* @__PURE__ */ ((A) => (z) => A.encode(z))(new lh()) : async (A) => new Uint8Array(await new s(A).arrayBuffer())), g = d && y && ih(() => {
    let A = !1;
    const z = new s(ht.origin, {
      body: new ah(),
      method: "POST",
      get duplex() {
        return A = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !z;
  }), b = m && y && ih(() => U.isReadableStream(new o("").body)), R = {
    stream: b && ((A) => A.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
    !R[A] && (R[A] = (z, D) => {
      let k = z && z[A];
      if (k)
        return k.call(z);
      throw new se(`Response type '${A}' is not supported`, se.ERR_NOT_SUPPORT, D);
    });
  });
  const C = async (A) => {
    if (A == null)
      return 0;
    if (U.isBlob(A))
      return A.size;
    if (U.isSpecCompliantForm(A))
      return (await new s(ht.origin, {
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
      data: k,
      signal: K,
      cancelToken: Z,
      timeout: F,
      onDownloadProgress: W,
      onUploadProgress: he,
      responseType: le,
      headers: P,
      withCredentials: te = "same-origin",
      fetchOptions: we
    } = lg(A), _e = r || fetch;
    le = le ? (le + "").toLowerCase() : "text";
    let Te = Jb([K, Z && Z.toAbortSignal()], F), Ve = null;
    const Ke = Te && Te.unsubscribe && (() => {
      Te.unsubscribe();
    });
    let Le;
    try {
      if (he && g && D !== "get" && D !== "head" && (Le = await q(P, k)) !== 0) {
        let Ce = new s(z, {
          method: "POST",
          body: k,
          duplex: "half"
        }), S;
        if (U.isFormData(k) && (S = Ce.headers.get("content-type")) && P.setContentType(S), Ce.body) {
          const [j, V] = I0(
            Le,
            pu(P0(he))
          );
          k = th(Ce.body, nh, j, V);
        }
      }
      U.isString(te) || (te = te ? "include" : "omit");
      const Y = d && "credentials" in s.prototype, G = {
        ...we,
        signal: Te,
        method: D.toUpperCase(),
        headers: P.normalize().toJSON(),
        body: k,
        duplex: "half",
        credentials: Y ? te : void 0
      };
      Ve = d && new s(z, G);
      let X = await (d ? _e(Ve, we) : _e(z, G));
      const de = b && (le === "stream" || le === "response");
      if (b && (W || de && Ke)) {
        const Ce = {};
        ["status", "statusText", "headers"].forEach((Q) => {
          Ce[Q] = X[Q];
        });
        const S = U.toFiniteNumber(X.headers.get("content-length")), [j, V] = W && I0(
          S,
          pu(P0(W), !0)
        ) || [];
        X = new o(
          th(X.body, nh, j, () => {
            V && V(), Ke && Ke();
          }),
          Ce
        );
      }
      le = le || "text";
      let Re = await R[U.findKey(R, le) || "text"](X, A);
      return !de && Ke && Ke(), await new Promise((Ce, S) => {
        ng(Ce, S, {
          data: Re,
          headers: Nt.from(X.headers),
          status: X.status,
          statusText: X.statusText,
          config: A,
          request: Ve
        });
      });
    } catch (Y) {
      throw Ke && Ke(), Y && Y.name === "TypeError" && /Load failed|fetch/i.test(Y.message) ? Object.assign(
        new se("Network Error", se.ERR_NETWORK, A, Ve),
        {
          cause: Y.cause || Y
        }
      ) : se.from(Y, Y && Y.code, A, Ve);
    }
  };
}, eE = /* @__PURE__ */ new Map(), ig = (l) => {
  let r = l && l.env || {};
  const { fetch: s, Request: o, Response: c } = r, d = [
    o,
    c,
    s
  ];
  let m = d.length, y = m, p, g, b = eE;
  for (; y--; )
    p = d[y], g = b.get(p), g === void 0 && b.set(p, g = y ? /* @__PURE__ */ new Map() : Pb(r)), b = g;
  return g;
};
ig();
const xc = {
  http: pb,
  xhr: Zb,
  fetch: {
    get: ig
  }
};
U.forEach(xc, (l, r) => {
  if (l) {
    try {
      Object.defineProperty(l, "name", { value: r });
    } catch {
    }
    Object.defineProperty(l, "adapterName", { value: r });
  }
});
const rh = (l) => `- ${l}`, tE = (l) => U.isFunction(l) || l === null || l === !1;
function nE(l, r) {
  l = U.isArray(l) ? l : [l];
  const { length: s } = l;
  let o, c;
  const d = {};
  for (let m = 0; m < s; m++) {
    o = l[m];
    let y;
    if (c = o, !tE(o) && (c = xc[(y = String(o)).toLowerCase()], c === void 0))
      throw new se(`Unknown adapter '${y}'`);
    if (c && (U.isFunction(c) || (c = c.get(r))))
      break;
    d[y || "#" + m] = c;
  }
  if (!c) {
    const m = Object.entries(d).map(
      ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let y = s ? m.length > 1 ? `since :
` + m.map(rh).join(`
`) : " " + rh(m[0]) : "as no adapter specified";
    throw new se(
      "There is no suitable adapter to dispatch the request " + y,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const rg = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: nE,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: xc
};
function ic(l) {
  if (l.cancelToken && l.cancelToken.throwIfRequested(), l.signal && l.signal.aborted)
    throw new xl(null, l);
}
function uh(l) {
  return ic(l), l.headers = Nt.from(l.headers), l.data = lc.call(
    l,
    l.transformRequest
  ), ["post", "put", "patch"].indexOf(l.method) !== -1 && l.headers.setContentType("application/x-www-form-urlencoded", !1), rg.getAdapter(l.adapter || qi.adapter, l)(l).then(function(o) {
    return ic(l), o.data = lc.call(
      l,
      l.transformResponse,
      o
    ), o.headers = Nt.from(o.headers), o;
  }, function(o) {
    return tg(o) || (ic(l), o && o.response && (o.response.data = lc.call(
      l,
      l.transformResponse,
      o.response
    ), o.response.headers = Nt.from(o.response.headers))), Promise.reject(o);
  });
}
const ug = "1.13.2", Cu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((l, r) => {
  Cu[l] = function(o) {
    return typeof o === l || "a" + (r < 1 ? "n " : " ") + l;
  };
});
const sh = {};
Cu.transitional = function(r, s, o) {
  function c(d, m) {
    return "[Axios v" + ug + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, y) => {
    if (r === !1)
      throw new se(
        c(m, " has been removed" + (s ? " in " + s : "")),
        se.ERR_DEPRECATED
      );
    return s && !sh[m] && (sh[m] = !0, console.warn(
      c(
        m,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), r ? r(d, m, y) : !0;
  };
};
Cu.spelling = function(r) {
  return (s, o) => (console.warn(`${o} is likely a misspelling of ${r}`), !0);
};
function aE(l, r, s) {
  if (typeof l != "object")
    throw new se("options must be an object", se.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(l);
  let c = o.length;
  for (; c-- > 0; ) {
    const d = o[c], m = r[d];
    if (m) {
      const y = l[d], p = y === void 0 || m(y, d, l);
      if (p !== !0)
        throw new se("option " + d + " must be " + p, se.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new se("Unknown option " + d, se.ERR_BAD_OPTION);
  }
}
const mu = {
  assertOptions: aE,
  validators: Cu
}, cn = mu.validators;
let Oa = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new F0(),
      response: new F0()
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
    typeof r == "string" ? (s = s || {}, s.url = r) : s = r || {}, s = Da(this.defaults, s);
    const { transitional: o, paramsSerializer: c, headers: d } = s;
    o !== void 0 && mu.assertOptions(o, {
      silentJSONParsing: cn.transitional(cn.boolean),
      forcedJSONParsing: cn.transitional(cn.boolean),
      clarifyTimeoutError: cn.transitional(cn.boolean)
    }, !1), c != null && (U.isFunction(c) ? s.paramsSerializer = {
      serialize: c
    } : mu.assertOptions(c, {
      encode: cn.function,
      serialize: cn.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), mu.assertOptions(s, {
      baseUrl: cn.spelling("baseURL"),
      withXsrfToken: cn.spelling("withXSRFToken")
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
    ), s.headers = Nt.concat(m, d);
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
      const A = [uh.bind(this), void 0];
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
      b = uh.call(this, q);
    } catch (A) {
      return Promise.reject(A);
    }
    for (R = 0, C = g.length; R < C; )
      b = b.then(g[R++], g[R++]);
    return b;
  }
  getUri(r) {
    r = Da(this.defaults, r);
    const s = ag(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Ih(s, r.params, r.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(r) {
  Oa.prototype[r] = function(s, o) {
    return this.request(Da(o || {}, {
      method: r,
      url: s,
      data: (o || {}).data
    }));
  };
});
U.forEach(["post", "put", "patch"], function(r) {
  function s(o) {
    return function(d, m, y) {
      return this.request(Da(y || {}, {
        method: r,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  Oa.prototype[r] = s(), Oa.prototype[r + "Form"] = s(!0);
});
let lE = class sg {
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
      o.reason || (o.reason = new xl(d, m, y), s(o.reason));
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
      token: new sg(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
};
function iE(l) {
  return function(s) {
    return l.apply(null, s);
  };
}
function rE(l) {
  return U.isObject(l) && l.isAxiosError === !0;
}
const mc = {
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
Object.entries(mc).forEach(([l, r]) => {
  mc[r] = l;
});
function og(l) {
  const r = new Oa(l), s = Gh(Oa.prototype.request, r);
  return U.extend(s, Oa.prototype, r, { allOwnKeys: !0 }), U.extend(s, r, null, { allOwnKeys: !0 }), s.create = function(c) {
    return og(Da(l, c));
  }, s;
}
const Be = og(qi);
Be.Axios = Oa;
Be.CanceledError = xl;
Be.CancelToken = lE;
Be.isCancel = tg;
Be.VERSION = ug;
Be.toFormData = Au;
Be.AxiosError = se;
Be.Cancel = Be.CanceledError;
Be.all = function(r) {
  return Promise.all(r);
};
Be.spread = iE;
Be.isAxiosError = rE;
Be.mergeConfig = Da;
Be.AxiosHeaders = Nt;
Be.formToJSON = (l) => eg(U.isHTMLForm(l) ? new FormData(l) : l);
Be.getAdapter = rg.getAdapter;
Be.HttpStatusCode = mc;
Be.default = Be;
const {
  Axios: DE,
  AxiosError: UE,
  CanceledError: ME,
  isCancel: zE,
  CancelToken: LE,
  VERSION: jE,
  all: HE,
  Cancel: BE,
  isAxiosError: qE,
  spread: GE,
  toFormData: kE,
  AxiosHeaders: YE,
  HttpStatusCode: XE,
  formToJSON: VE,
  getAdapter: KE,
  mergeConfig: QE
} = Be, uE = [
  {
    subsidiaryId: 1,
    subsidiaryName: "McKissock LP",
    siteURL: "www.mckissock.com"
  },
  {
    subsidiaryId: 2,
    subsidiaryName: "Elite Professional Education LLC",
    siteURL: "www.elitelearning.com"
  },
  {
    subsidiaryId: 3,
    subsidiaryName: "Colibri Real Estate LLC",
    siteURL: "www.colibrirealestate.com"
  },
  {
    subsidiaryId: 16,
    subsidiaryName: "Superior School of Real Estate Ed",
    siteURL: "www.superiorschoolnc.com"
  },
  {
    subsidiaryId: 20,
    subsidiaryName: "Allied School LLC",
    siteURL: "www.alliedschools.com"
  },
  {
    subsidiaryId: 21,
    subsidiaryName: "Xcel Solutions LLC",
    siteURL: "www.xceltesting.com"
  },
  {
    subsidiaryId: 22,
    subsidiaryName: "Western",
    siteURL: "www.westernschools.com"
  },
  {
    subsidiaryId: 23,
    subsidiaryName: "CE Express",
    siteURL: "www.ce-express.com"
  },
  {
    subsidiaryId: 25,
    subsidiaryName: "Fitzgerald",
    siteURL: "www.fhea.com"
  },
  {
    subsidiaryId: 29,
    subsidiaryName: "Hondros Learning",
    siteURL: "www.hondroslearning.com"
  },
  {
    subsidiaryId: 31,
    subsidiaryName: "CompuCram",
    siteURL: "www.compucram.com"
  },
  {
    subsidiaryId: 34,
    subsidiaryName: "HomeCEU",
    siteURL: null
  },
  {
    subsidiaryId: 35,
    subsidiaryName: "Rockwell Publishing Company LLC",
    siteURL: "www.rockwellinstitute.com"
  },
  {
    subsidiaryId: 36,
    subsidiaryName: "Gold Coast Professional Schools LLC",
    siteURL: "www.goldcoastschools.com"
  },
  {
    subsidiaryId: 58,
    subsidiaryName: "NetCEBuyer Inc",
    siteURL: "www.netce.com"
  },
  {
    subsidiaryId: 136,
    subsidiaryName: "Informed",
    siteURL: null
  },
  {
    subsidiaryId: 137,
    subsidiaryName: "Securities Training Corporation",
    siteURL: "www.stcusa.com"
  },
  {
    subsidiaryId: 138,
    subsidiaryName: "STC School of Insurance",
    siteURL: "www.stcusa.com"
  },
  {
    subsidiaryId: 142,
    subsidiaryName: "Internal Employees",
    siteURL: "www.colibrigroup.com"
  }
], cg = "WEBCOMPONENT";
function sE(l) {
  l ? localStorage.setItem(ve.AUTHORITY_OVERRIDE, l) : localStorage.removeItem(ve.AUTHORITY_OVERRIDE);
}
function oE() {
  return localStorage.getItem(ve.AUTHORITY_OVERRIDE);
}
function oh() {
  localStorage.removeItem(ve.AUTHORITY_OVERRIDE);
}
function cE() {
  const l = oE();
  if (l && Object.values(Wt).includes(l))
    return l;
  const r = window.location.hostname;
  return r === On.HOSTNAME || r === On.IP || On.IP_PATTERN.test(r) || r.startsWith(`${$e.DEV}.`) || r.startsWith(`${$e.DEV}-`) ? Wt.DEV : r.startsWith(`${$e.TEST}.`) || r.startsWith(`${$e.TEST}-`) ? Wt.TEST : r.startsWith(`${$e.STAGE}.`) || r.startsWith(`${$e.STAGE}-`) ? Wt.STAGE : Wt.PROD;
}
function fE(l) {
  if (cg === Sc.TEST)
    return "";
  const r = cE();
  return l.startsWith("/global") ? Cv[r] : Av[r];
}
const Al = (l) => {
  const r = l.startsWith("/") ? l : `/${l}`;
  return cg === Sc.TEST ? r : `${fE(r)}${r}`;
}, dE = async (l) => {
  try {
    return uE?.find(
      (s) => s?.siteURL?.includes(l)
    );
  } catch (r) {
    console.error("Error fetching subsidiaries:", r);
  }
};
async function Cl() {
  const l = localStorage.getItem(ve.BRAND_DATA);
  if (!l)
    return {};
  const r = JSON.parse(l), s = await dE(r?.domain);
  return {
    [Po.X_BRAND_ID]: s?.subsidiaryName,
    [Po.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [Po.X_BRAND_DOMAIN]: r?.domain
  };
}
const mE = async (l, r) => {
  const s = Al(Rl.AUTH), o = { username: l, password: r };
  try {
    const c = await Be.post(s, o, {
      headers: await Cl()
    }), d = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: d || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === wu.UNAUTHORIZED ? new Error(ut.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(ut.AUTH_FAILED);
  }
}, hE = async (l) => {
  const r = Al(Rl.REGISTER);
  try {
    return (await Be.post(r, l, {
      headers: await Cl()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === wu.INTERNAL_SERVER_ERROR ? new Error(ut.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(ut.REGISTRATION_FAILED);
  }
}, Ac = async (l) => {
  const r = Al(Rl.CHECK_EMAIL);
  try {
    return (await Be.post(
      r,
      { email: l },
      {
        headers: await Cl()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, ch = async (l) => {
  const r = Al(Rl.FORGOT_PASSWORD), s = { email: l };
  try {
    return (await Be.post(r, s, {
      headers: await Cl()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === wu.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(ut.RESET_LINK_FAILED);
  }
}, gE = async (l) => {
  const r = Al(Rl.REFRESH_TOKEN), s = { refresh_token: l };
  try {
    const o = await Be.post(r, s, {
      headers: await Cl()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, yE = async (l) => {
  const r = Al(Rl.LOGOUT), s = { refresh_token: l };
  try {
    return (await Be.post(r, s, {
      headers: await Cl()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === wu.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, pE = () => {
  try {
    const l = xt(ke.REFRESH_TOKEN, !1);
    if (!l)
      return !0;
    const r = Li(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch (l) {
    return console.error(`${Fe.TOKEN} isRefreshTokenExpiredFromCookie Error:`, l), !0;
  }
}, vu = () => xt(ke.REFRESH_TOKEN, !1) || localStorage.getItem(ve.REFRESH_TOKEN), Di = (l) => {
  try {
    const r = Li(l), s = Math.floor(Date.now() / 1e3);
    return !r.exp || s >= r.exp;
  } catch {
    return !0;
  }
}, hc = (l) => !Di(l);
let hu = null;
const vl = () => {
  hu && (clearInterval(hu), hu = null);
}, Cc = async (l) => {
  try {
    const r = l || vu();
    if (!r)
      return !1;
    const s = await gE(r);
    if (!s?.tokens?.access_token)
      return !1;
    const o = s.tokens, c = gu(o.access_token);
    if (!c)
      return !1;
    const d = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    Na(ke.ACCESS_TOKEN, o.access_token, d, !0);
    const m = s.x_credential || c.decoded.x_credentials;
    if (m && Na(ke.X_CREDENTIAL, m, d, !1), localStorage.setItem(ve.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      ve.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(ve.REFRESH_TOKEN, o.refresh_token);
      const y = 720 * 60 * 60;
      Na(ke.REFRESH_TOKEN, o.refresh_token, y, !0), localStorage.getItem(ve.REFRESH_TOKEN_TIME) && localStorage.setItem(ve.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (r) {
    return console.error(`${Fe.TOKEN} refreshAuthenticationState Error:`, r), !1;
  }
}, vE = async () => {
  const l = vu();
  if (!(xt(ke.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN)) || !l || !hc(l))
    return vl(), !0;
  vl();
  const s = 180 * 1e3;
  return hu = setInterval(async () => {
    const o = vu();
    if (!(xt(ke.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN))) {
      vl();
      return;
    }
    if (!o || !hc(o)) {
      vl();
      return;
    }
    const d = xt(ke.X_CREDENTIAL, !1) || xt(ke.X_CREDENTIAL_OLD, !1), m = xt(ke.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN);
    (!d || Di(d) || !m || Di(m)) && await Cc(o);
  }, s), () => vl();
}, fh = (l) => {
  try {
    if (!localStorage.getItem(ve.REFRESH_TOKEN_TIME))
      return console.log(
        `${Fe.CHECK_TOKEN_AND_REDIRECT} Remember Me not enabled - requires manual login`
      ), !1;
    console.log(`${Fe.CHECK_TOKEN_AND_REDIRECT} Remember Me enabled - validating tokens`);
    const s = xt(ke.X_CREDENTIAL, !1) || xt(ke.X_CREDENTIAL_OLD, !1), o = xt(ke.ACCESS_TOKEN, !1);
    let c = null, d = !1;
    if (o && (c = o), s && (d = !0), c || (c = localStorage.getItem(ve.ACCESS_TOKEN)), !c || !d)
      return !1;
    const m = localStorage.getItem(ve.ACCESS_TOKEN_EXPIRES);
    if (m && Date.now() >= parseInt(m))
      return !1;
    try {
      const y = Li(c), p = Math.floor(Date.now() / 1e3);
      return !(!y.exp || p >= y.exp);
    } catch (y) {
      return console.error(`${Fe.CHECK_TOKEN_AND_REDIRECT} Token decode error:`, y), !1;
    }
  } catch (r) {
    return console.error(`${Fe.CHECK_TOKEN_AND_REDIRECT} Error:`, r), !1;
  }
}, bE = async (l) => {
  if (fh(l))
    return !0;
  try {
    if (!localStorage.getItem(ve.REFRESH_TOKEN_TIME))
      return !1;
    const o = vu();
    if (!o || !hc(o))
      return !1;
    const c = xt(ke.X_CREDENTIAL, !1) || xt(ke.X_CREDENTIAL_OLD, !1), d = xt(ke.ACCESS_TOKEN, !1) || localStorage.getItem(ve.ACCESS_TOKEN), m = !c || Di(c), y = !d || Di(d);
    return !m && !y || !await Cc(o) ? !1 : fh(l);
  } catch (s) {
    return console.error(
      `${Fe.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`,
      s
    ), !1;
  }
}, EE = () => {
  try {
    const l = localStorage.getItem(ve.REFRESH_TOKEN_TIME);
    return l ? Date.now() - parseInt(l) < xv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (l) {
    return console.error(`${Fe.TOKEN} isRefreshTokenValid Error:`, l), !1;
  }
}, SE = () => {
  uu(ke.ACCESS_TOKEN), uu(ke.X_CREDENTIAL), uu(ke.X_CREDENTIAL_OLD), uu(ke.REFRESH_TOKEN), [
    ve.REFRESH_TOKEN,
    ve.REFRESH_TOKEN_TIME,
    ve.ACCESS_TOKEN,
    ve.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((r) => {
    localStorage.removeItem(r);
  }), console.log(`${Fe.AUTH} All authentication tokens and state cleared`);
}, fg = async (l, r, s = !1) => {
  const o = await mE(l, r), { tokens: c, x_credential: d } = o;
  if (c.access_token) {
    const m = Li(c.access_token), y = (m.exp || 0) - Math.floor(Date.now() / 1e3);
    Na(ke.ACCESS_TOKEN, c.access_token, y, !0);
    const p = d || m.x_credentials;
    p ? (Na(ke.X_CREDENTIAL, p, y, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), p && Na(ke.X_CREDENTIAL, p, y, !1), localStorage.setItem(ve.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      ve.ACCESS_TOKEN_EXPIRES,
      (Date.now() + y * 1e3).toString()
    ), localStorage.setItem(ve.REFRESH_TOKEN, c.refresh_token);
    const g = 720 * 60 * 60;
    Na(ke.REFRESH_TOKEN, c.refresh_token, g, !0), s && c.refresh_token ? (localStorage.setItem(ve.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Fe.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(ve.REFRESH_TOKEN_TIME), console.log(
      `${Fe.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, gu = (l) => {
  try {
    const r = Li(l);
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
      `${Fe.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      r
    ), null;
  }
}, Nu = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", bu = (l) => {
  if (!l || typeof l != "object")
    return !1;
  const r = l;
  return typeof r.getModifierState != "function" ? !1 : r.getModifierState("CapsLock");
}, wE = ({
  onSuccess: l,
  onError: r,
  handleClose: s,
  onSignIn: o,
  title: c = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [y, p] = T.useState(m), [g, b] = T.useState(""), [R, C] = T.useState(""), [q, A] = T.useState(""), [z, D] = T.useState(!1), [k, K] = T.useState(""), [Z, F] = T.useState(""), [W, he] = T.useState(!1), [le, P] = T.useState(!1), [te, we] = T.useState(!1), [_e, Te] = T.useState(!1), [Ve, Ke] = T.useState(!1), [Le, Y] = T.useState(!1), [G, X] = T.useState(!1), [de, Re] = T.useState(""), [Ce, S] = T.useState(!1), [j, V] = T.useState(""), [Q, oe] = T.useState(me.INFO), ce = T.useRef(null), ge = T.useRef(null), ne = {
    length: q.length >= lu.MIN_LENGTH && q.length <= lu.MAX_LENGTH,
    hasNumber: pl.NUMBER.test(q),
    hasUppercase: pl.UPPERCASE.test(q),
    hasLowercase: pl.LOWERCASE.test(q),
    hasSpecialChar: V0.test(q),
    onlyAllowedChars: K0.test(q) || q === "",
    differentFromUsername: y ? q !== y && q !== y.split("@")[0] : !0
  }, _t = ((re) => {
    if (!re) return { strength: "", color: "", width: iu.EMPTY };
    if (ne.length && ne.hasNumber && ne.hasUppercase && ne.hasLowercase && ne.hasSpecialChar && ne.onlyAllowedChars && ne.differentFromUsername)
      return {
        strength: tc.STRONG,
        color: nc.STRONG,
        width: iu.STRONG
      };
    let lt = 0;
    return ne.length && lt++, ne.hasNumber && lt++, ne.hasUppercase && lt++, ne.hasLowercase && lt++, ne.hasSpecialChar && lt++, ne.onlyAllowedChars && lt++, ne.differentFromUsername && lt++, lt <= 2 ? {
      strength: tc.WEAK,
      color: nc.WEAK,
      width: iu.WEAK
    } : {
      strength: tc.GOOD,
      color: nc.GOOD,
      width: iu.GOOD
    };
  })(q), Mn = (re) => re ? re.length < lu.MIN_LENGTH || re.length > lu.MAX_LENGTH ? { isValid: !1, error: ut.PASSWORD_LENGTH } : pl.UPPERCASE.test(re) ? pl.LOWERCASE.test(re) ? pl.NUMBER.test(re) ? V0.test(re) ? K0.test(re) ? { isValid: !0, error: "" } : {
    isValid: !1,
    error: ut.PASSWORD_INVALID_CHARS
  } : {
    isValid: !1,
    error: ut.PASSWORD_SPECIAL_CHAR
  } : {
    isValid: !1,
    error: ut.PASSWORD_NUMBER
  } : {
    isValid: !1,
    error: ut.PASSWORD_LOWERCASE
  } : {
    isValid: !1,
    error: ut.PASSWORD_UPPERCASE
  } : { isValid: !1, error: ut.PASSWORD_REQUIRED };
  T.useEffect(() => {
    if (ge.current && clearTimeout(ge.current), !y) {
      Te(!1), Ke(!1), X(!1), Re("");
      return;
    }
    if (!Ci.test(y)) {
      Te(!1), Ke(!1);
      return;
    }
    return ge.current = setTimeout(async () => {
      Y(!0);
      try {
        (await Ac(y)).exists ? (Ke(!0), Te(!0)) : (Ke(!1), Te(!1));
      } catch (re) {
        console.error(`${Fe.CREATE_ACCOUNT} Email check failed:`, re);
        const pt = re instanceof Error ? re.message : "Unable to verify email. You can still proceed with registration.";
        X(!0), Re(pt), Te(!0), Ke(!1);
      } finally {
        Y(!1);
      }
    }, Oi.EMAIL_CHECK_DEBOUNCE), () => {
      ge.current && clearTimeout(ge.current);
    };
  }, [y]);
  const ua = y && Ci.test(y);
  T.useEffect(() => {
    const re = (pt) => {
      pt.key === "Escape" && s();
    };
    return document.addEventListener("keydown", re), () => document.removeEventListener("keydown", re);
  }, [s]);
  const ie = (re) => {
    re.target === ce.current && s();
  }, je = async (re) => {
    if (re.preventDefault(), we(!0), !y || !g || !R) {
      r("Please fill in all required fields");
      return;
    }
    const pt = Mn(q);
    if (!pt.isValid) {
      F(pt.error), r(pt.error), D(!1);
      return;
    }
    if (!Ci.test(y)) {
      K(ut.EMAIL_INVALID), r(ut.EMAIL_INVALID);
      return;
    }
    D(!0), K(""), V("");
    try {
      const lt = y.split("@")[0], zn = await hE({
        username: lt,
        email: y,
        firstName: g,
        lastName: R,
        password: q
      });
      console.log(
        `${Fe.CREATE_ACCOUNT} Registration successful:`,
        zn.message
      );
      try {
        const sa = await fg(y, q, Ce);
        l(sa);
      } catch (sa) {
        console.error(
          `${Fe.CREATE_ACCOUNT} Auto-login failed after registration:`,
          sa
        );
        const Ou = sa instanceof Error ? sa.message : "Auto-login failed";
        r(Ou);
      }
    } catch (lt) {
      console.error(`${Fe.CREATE_ACCOUNT} Registration failed:`, lt);
      const zn = lt instanceof Error ? lt.message : ut.REGISTRATION_FAILED;
      V(zn), oe(me.ERROR), r(zn);
    } finally {
      D(!1);
    }
  }, ln = (re) => {
    if (re.key === "CapsLock" && re.type === "keydown") {
      P((pt) => !pt);
      return;
    }
    re.key !== "CapsLock" && P(bu(re));
  }, Nl = (re) => {
    P(bu(re));
  }, _u = () => {
    P(!1);
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    j && /* @__PURE__ */ v.jsx(
      oc,
      {
        type: Q,
        message: j,
        duration: Oi.TOAST_DEFAULT_DURATION,
        onClose: () => V("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        part: "identity-widget-create-account-overlay",
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: ce,
        onMouseDown: ie,
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
                Gt,
                {
                  onClick: s,
                  variant: At.LINK,
                  part: "identity-widget-create-account-close-button",
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: yt.BUTTON,
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
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  part: "identity-widget-create-account-header",
                  className: "identity-widget-create-account-header mb-6! text-center!",
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "h2",
                      {
                        id: "create-account-dialog-title",
                        part: "identity-widget-create-account-title",
                        className: "identity-widget-create-account-title text-2xl! font-bold! text-gray-800! mb-1!",
                        children: c
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "p",
                      {
                        part: "identity-widget-create-account-subtitle",
                        className: "identity-widget-create-account-subtitle text-sm! text-gray-600! mt-1!",
                        children: d
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "form",
                {
                  part: "identity-widget-create-account-form",
                  onSubmit: je,
                  className: "identity-widget-create-account-form space-y-4!",
                  "aria-label": "Create account form",
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-email-field",
                        className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ v.jsx(
                          Ca,
                          {
                            label: "Email Address",
                            id: "email",
                            type: "email",
                            value: y,
                            onChange: (re) => {
                              p(re.target.value), K("");
                            },
                            placeholder: "Enter email address",
                            disabled: z,
                            className: "identity-widget-create-account-email-input w-full!",
                            autoComplete: "email",
                            error: te && !y ? "Required" : k || "",
                            endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                              Le && /* @__PURE__ */ v.jsx(Bh, {}),
                              !Le && !Ve && !G && y && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y) && /* @__PURE__ */ v.jsx(
                                "img",
                                {
                                  part: "identity-widget-create-account-email-available-icon",
                                  className: "identity-widget-create-account-email-available-icon",
                                  src: Nu,
                                  alt: "Email available",
                                  "aria-label": "Email is available",
                                  style: { width: 18, height: 18 }
                                }
                              )
                            ] })
                          }
                        )
                      }
                    ),
                    _e && Ve && !G && /* @__PURE__ */ v.jsx(
                      bl,
                      {
                        type: me.INFO,
                        message: "We found an existing account.",
                        actionText: "Want to sign in instead?",
                        onActionClick: () => {
                          Te(!1), o(y);
                        },
                        onClose: () => Te(!1),
                        className: "identity-widget-create-account-existing-banner mb-4!"
                      }
                    ),
                    _e && G && /* @__PURE__ */ v.jsx(
                      bl,
                      {
                        type: me.ERROR,
                        message: de,
                        onClose: () => {
                          Te(!1), X(!1), Re("");
                        },
                        className: "identity-widget-create-account-error-banner mb-4!"
                      }
                    ),
                    /* @__PURE__ */ v.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-name-row",
                        className: "identity-widget-create-account-name-row flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0",
                        children: [
                          /* @__PURE__ */ v.jsx(
                            Ca,
                            {
                              label: "First Name",
                              id: "firstName",
                              type: "text",
                              value: g,
                              onChange: (re) => b(re.target.value),
                              placeholder: "First Name",
                              disabled: z,
                              className: "identity-widget-create-account-firstname-input w-full!",
                              autoComplete: "given-name",
                              error: te && !g ? "Required" : ""
                            }
                          ),
                          /* @__PURE__ */ v.jsx(
                            Ca,
                            {
                              label: "Last Name",
                              id: "lastName",
                              type: "text",
                              value: R,
                              onChange: (re) => C(re.target.value),
                              placeholder: "Last Name",
                              disabled: z,
                              className: "identity-widget-create-account-lastname-input w-full!",
                              autoComplete: "family-name",
                              error: te && !R ? "Required" : ""
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-password-field",
                        className: "identity-widget-create-account-password-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ v.jsxs(
                          "div",
                          {
                            part: "identity-widget-create-account-password-input-wrap",
                            className: "identity-widget-create-account-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ v.jsx(
                                Ca,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: W ? "text" : "password",
                                  value: q,
                                  onChange: (re) => {
                                    A(re.target.value), F("");
                                  },
                                  onKeyDown: ln,
                                  onKeyUp: ln,
                                  onFocus: Nl,
                                  onBlur: _u,
                                  placeholder: "Enter Password...",
                                  disabled: z,
                                  className: "identity-widget-create-account-password-input w-full!",
                                  autoComplete: "new-password",
                                  error: Z,
                                  endIcon: /* @__PURE__ */ v.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      part: "identity-widget-create-account-password-toggle",
                                      onClick: () => he(!W),
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
                              ),
                              le && /* @__PURE__ */ v.jsx(
                                "p",
                                {
                                  part: "identity-widget-create-account-password-capslock",
                                  className: "identity-widget-create-account-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: sc.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    q && /* @__PURE__ */ v.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-strength",
                        className: "identity-widget-create-account-strength mt-2! mb-4!",
                        children: [
                          /* @__PURE__ */ v.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-strength-row",
                              className: "identity-widget-create-account-strength-row flex! items-center! justify-between! mb-2!",
                              children: [
                                /* @__PURE__ */ v.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-create-account-strength-track",
                                    className: "identity-widget-create-account-strength-track w-full! bg-gray-200! rounded-full! h-2! mr-3!",
                                    children: /* @__PURE__ */ v.jsx(
                                      "div",
                                      {
                                        part: "identity-widget-create-account-strength-fill",
                                        className: "identity-widget-create-account-strength-fill h-2! rounded-full! transition-all! duration-300!",
                                        style: {
                                          width: _t.width,
                                          backgroundColor: _t.color
                                        }
                                      }
                                    )
                                  }
                                ),
                                /* @__PURE__ */ v.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-create-account-strength-label",
                                    className: "identity-widget-create-account-strength-label text-sm! font-medium! whitespace-nowrap!",
                                    style: { color: _t.color },
                                    children: _t.strength
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ v.jsxs(
                            "div",
                            {
                              part: "identity-widget-create-account-requirements",
                              className: "identity-widget-create-account-requirements mt-3!",
                              children: [
                                /* @__PURE__ */ v.jsx(
                                  "p",
                                  {
                                    part: "identity-widget-create-account-requirements-title",
                                    className: "identity-widget-create-account-requirements-title text-sm! font-medium! text-gray-700! mb-2!",
                                    children: "Password must:"
                                  }
                                ),
                                /* @__PURE__ */ v.jsxs(
                                  "ul",
                                  {
                                    part: "identity-widget-create-account-requirements-list",
                                    className: "identity-widget-create-account-requirements-list space-y-1!",
                                    children: [
                                      /* @__PURE__ */ v.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            ne.length ? /* @__PURE__ */ v.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${ne.length ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "be 9-15 characters"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ v.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            ne.hasNumber ? /* @__PURE__ */ v.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${ne.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one number"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ v.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            ne.hasUppercase ? /* @__PURE__ */ v.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${ne.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one uppercase letter"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ v.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            ne.hasSpecialChar ? /* @__PURE__ */ v.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${ne.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "have at least one special character"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ v.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            ne.onlyAllowedChars ? /* @__PURE__ */ v.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${ne.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "use only the following special characters !@#$%^&*._-"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ v.jsxs(
                                        "li",
                                        {
                                          part: "identity-widget-create-account-requirement-item",
                                          className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!",
                                          children: [
                                            ne.differentFromUsername ? /* @__PURE__ */ v.jsx(
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
                                                className: `identity-widget-create-account-requirement-text ${ne.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
                                                children: "be different from username"
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        part: "identity-widget-create-account-remember-row",
                        className: "identity-widget-create-account-remember-row flex! items-center! mt-4! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ v.jsxs(
                          "label",
                          {
                            part: "identity-widget-create-account-remember-label",
                            className: "identity-widget-create-account-remember-label flex! items-center! m-0!",
                            children: [
                              /* @__PURE__ */ v.jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  part: "identity-widget-create-account-remember-checkbox",
                                  checked: Ce,
                                  onChange: (re) => S(re.target.checked),
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
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Gt,
                      {
                        type: yt.SUBMIT,
                        disabled: z || Ve || !ua,
                        part: "identity-widget-submit-button identity-widget-create-account-submit-button",
                        className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                        children: z ? /* @__PURE__ */ v.jsxs(
                          "span",
                          {
                            part: "identity-widget-create-account-submit-loading",
                            className: "identity-widget-create-account-submit-loading flex! items-center! justify-center!",
                            children: [
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
                            ]
                          }
                        ) : "Create Account"
                      }
                    ),
                    /* @__PURE__ */ v.jsxs(
                      "div",
                      {
                        part: "identity-widget-create-account-divider",
                        className: "identity-widget-create-account-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ v.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-line-wrap",
                              className: "identity-widget-create-account-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ v.jsx(
                                "div",
                                {
                                  part: "identity-widget-create-account-divider-line",
                                  className: "identity-widget-create-account-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ v.jsx(
                            "div",
                            {
                              part: "identity-widget-create-account-divider-text-wrap",
                              className: "identity-widget-create-account-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ v.jsx(
                                "span",
                                {
                                  part: "identity-widget-create-account-divider-text",
                                  className: "identity-widget-create-account-divider-text px-2! bg-white text-gray-500",
                                  children: "OR"
                                }
                              )
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Gt,
                      {
                        type: yt.BUTTON,
                        variant: At.OUTLINE,
                        onClick: () => o(y),
                        disabled: z,
                        part: "identity-widget-create-account-signin-button",
                        className: "identity-widget-create-account-signin-button w-full! flex! items-center! justify-center! gap-3!",
                        children: /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            part: "identity-widget-create-account-signin-text",
                            className: "identity-widget-create-account-signin-text",
                            children: "Sign In"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      }
    ),
    j && /* @__PURE__ */ v.jsx(oc, { message: j, type: Q, onClose: () => V("") })
  ] });
}, RE = ({
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
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          part: "identity-widget-reset-success-modal",
          className: "identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ v.jsx(
              Gt,
              {
                onClick: c,
                variant: At.LINK,
                part: "identity-widget-reset-success-close-button",
                className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: yt.BUTTON,
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
            /* @__PURE__ */ v.jsx(
              "div",
              {
                part: "identity-widget-reset-success-icon-wrap",
                className: "identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!",
                children: /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    part: "identity-widget-reset-success-icon",
                    src: Nu,
                    alt: "Success",
                    "aria-hidden": "true",
                    className: "identity-widget-reset-success-icon w-16! h-16!"
                  }
                )
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "div",
              {
                part: "identity-widget-reset-success-header",
                className: "identity-widget-reset-success-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ v.jsx(
                    "h2",
                    {
                      part: "identity-widget-reset-success-title",
                      id: "reset-success-dialog-title",
                      className: "identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!",
                      children: "Check your email"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-subtitle",
                      className: "identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!",
                      children: "We've sent a password reset link to"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-email",
                      className: "identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!",
                      children: l
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-copy",
                      className: "identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!",
                      children: "Follow the instructions in the email to reset your password and return to checkout."
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-success-note",
                      className: "identity-widget-reset-success-note text-xs! text-gray-500!",
                      children: "Didn't receive the email? Check your spam folder or try again in a few minutes."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ v.jsx(
              Gt,
              {
                type: yt.BUTTON,
                onClick: s,
                disabled: r,
                ariaLabel: "Resend password reset link",
                part: "identity-widget-submit-button identity-widget-reset-success-resend-button",
                className: "identity-widget-submit-button identity-widget-reset-success-resend-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
                children: r ? /* @__PURE__ */ v.jsxs(
                  "span",
                  {
                    part: "identity-widget-reset-success-resend-loading",
                    className: "identity-widget-reset-success-resend-loading flex! items-center! justify-center!",
                    children: [
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
                    ]
                  }
                ) : "Resend link"
              }
            ),
            /* @__PURE__ */ v.jsx(
              Gt,
              {
                type: yt.BUTTON,
                variant: At.OUTLINE,
                onClick: o,
                disabled: r,
                part: "identity-widget-reset-success-back-button",
                className: "identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ v.jsx(
                  "span",
                  {
                    part: "identity-widget-reset-success-back-text",
                    className: "identity-widget-reset-success-back-text",
                    children: "Back to sign in"
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}, TE = ({
  email: l,
  onBack: r,
  handleClose: s
}) => {
  const [o, c] = T.useState(l || ""), [d, m] = T.useState(!1), [y, p] = T.useState(!1), [g, b] = T.useState(""), [R, C] = T.useState(!1), [q, A] = T.useState(!1), [z, D] = T.useState(!1), [k, K] = T.useState(!1), [Z, F] = T.useState(""), W = T.useRef(null);
  T.useEffect(() => {
    const te = (we) => {
      we.key === "Escape" && s();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [s]), T.useEffect(() => {
    const te = Ci.test(o);
    if (D(te), !te || !o) {
      A(!1), K(!1), F("");
      return;
    }
    const we = setTimeout(async () => {
      C(!0);
      try {
        const _e = await Ac(o);
        console.log("[ResetPassword] Email check response:", _e), A(_e.exists), console.log("[ResetPassword] Email exists:", _e.exists);
      } catch (_e) {
        console.error("[ResetPassword] Error checking email:", _e);
        const Te = _e instanceof Error ? _e.message : "Unable to verify email. Please try again.";
        K(!0), F(Te), A(!1);
      } finally {
        C(!1);
      }
    }, Oi.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(we);
  }, [o]);
  const he = (te) => {
    te.target === W.current && s();
  }, le = async (te) => {
    if (te.preventDefault(), !o) {
      b(ut.EMAIL_REQUIRED);
      return;
    }
    m(!0), b("");
    try {
      await ch(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
    } catch (we) {
      console.error("[ResetPassword] Failed to send reset link:", we);
      const _e = we instanceof Error ? we.message : ut.RESET_LINK_FAILED;
      b(_e);
    } finally {
      m(!1);
    }
  }, P = async () => {
    m(!0), b("");
    try {
      await ch(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (te) {
      console.error("[ResetPassword] Failed to resend reset link:", te), p(!1);
      const we = te instanceof Error ? te.message : ut.RESET_LINK_FAILED;
      b(we);
    } finally {
      m(!1);
    }
  };
  return y ? /* @__PURE__ */ v.jsx(
    RE,
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
      part: "identity-widget-reset-password-overlay",
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: W,
      onMouseDown: he,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs(
        "div",
        {
          part: "identity-widget-reset-password-modal",
          className: "identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
          role: "document",
          children: [
            /* @__PURE__ */ v.jsx(
              Gt,
              {
                onClick: s,
                variant: At.LINK,
                part: "identity-widget-reset-password-close-button",
                className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                type: yt.BUTTON,
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
            /* @__PURE__ */ v.jsxs(
              "div",
              {
                part: "identity-widget-reset-password-header",
                className: "identity-widget-reset-password-header mb-6! text-center!",
                children: [
                  /* @__PURE__ */ v.jsx(
                    "h2",
                    {
                      id: "reset-password-dialog-title",
                      part: "identity-widget-reset-password-title",
                      className: "identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!",
                      children: "Reset your password"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "p",
                    {
                      part: "identity-widget-reset-password-subtitle",
                      className: "identity-widget-reset-password-subtitle text-sm! text-gray-600!",
                      children: "Enter your email and we'll send you a link to reset your password."
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ v.jsxs(
              "form",
              {
                part: "identity-widget-reset-password-form",
                onSubmit: le,
                className: "identity-widget-reset-password-form space-y-4!",
                "aria-label": "Reset password form",
                children: [
                  /* @__PURE__ */ v.jsx(
                    "div",
                    {
                      part: "identity-widget-reset-password-email-field",
                      className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!",
                      children: /* @__PURE__ */ v.jsx(
                        Ca,
                        {
                          label: "Email Address",
                          id: "reset-email",
                          type: "email",
                          value: o,
                          onChange: (te) => {
                            c(te.target.value), b("");
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
                            !R && q && z && !k && /* @__PURE__ */ v.jsx(
                              "img",
                              {
                                part: "identity-widget-reset-password-email-verified-icon",
                                className: "identity-widget-reset-password-email-verified-icon",
                                src: Nu,
                                alt: "User found",
                                "aria-label": "User found",
                                style: { width: 18, height: 18 }
                              }
                            )
                          ] })
                        }
                      )
                    }
                  ),
                  k && /* @__PURE__ */ v.jsx(
                    bl,
                    {
                      type: me.ERROR,
                      message: Z,
                      onClose: () => {
                        K(!1), F("");
                      },
                      className: "identity-widget-reset-password-email-check-error-banner mb-4!"
                    }
                  ),
                  g && /* @__PURE__ */ v.jsx(
                    bl,
                    {
                      type: me.ERROR,
                      message: g,
                      actionText: "Want to sign in instead?",
                      onActionClick: r,
                      onClose: () => b(""),
                      className: "identity-widget-reset-password-submit-error-banner mb-4!"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    Gt,
                    {
                      type: yt.SUBMIT,
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
                      children: d ? /* @__PURE__ */ v.jsxs(
                        "span",
                        {
                          part: "identity-widget-reset-password-submit-loading",
                          className: "identity-widget-reset-password-submit-loading flex! items-center! justify-center!",
                          children: [
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
                          ]
                        }
                      ) : "Send reset link"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    Gt,
                    {
                      type: yt.BUTTON,
                      variant: At.OUTLINE,
                      onClick: r,
                      disabled: d,
                      part: "identity-widget-reset-password-back-button",
                      className: "identity-widget-reset-password-back-button w-full! flex! items-center! justify-center! gap-3! mt-4!",
                      children: /* @__PURE__ */ v.jsx(
                        "span",
                        {
                          part: "identity-widget-reset-password-back-text",
                          className: "identity-widget-reset-password-back-text",
                          children: "Back to sign in"
                        }
                      )
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}, xE = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", AE = ({
  onSuccess: l,
  onError: r,
  handleClose: s,
  authority: o,
  title: c = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = "",
  enableGoogleLogin: y = !1
}) => {
  const [p, g] = T.useState(m), [b, R] = T.useState(""), [C, q] = T.useState(!1), [A, z] = T.useState(!1), [D, k] = T.useState(!1), [K, Z] = T.useState(""), [F, W] = T.useState(!1), [he, le] = T.useState(!1), [P, te] = T.useState(!1), [we, _e] = T.useState(!1), [Te, Ve] = T.useState(!1), [Ke, Le] = T.useState(!1), [Y, G] = T.useState(!1), [X, de] = T.useState(""), [Re, Ce] = T.useState(""), [S, j] = T.useState(me.INFO), V = T.useRef(null), Q = T.useRef(null), oe = Tv({
    flow: "auth-code",
    onSuccess: (ie) => {
      console.log("[EmbeddedLogin] Google auth-code response received", ie), Ce(
        "Google sign-in completed. Connect this credential to your backend login flow."
      ), j(me.INFO), Z("");
    },
    onError: (ie) => {
      const je = ie.error_description || ie.error || "Google sign-in failed.";
      Ce(je), j(me.ERROR), r(je);
    },
    onNonOAuthError: (ie) => {
      const je = `Google sign-in failed: ${ie.type}`;
      Ce(je), j(me.ERROR), r(je);
    }
  });
  T.useEffect(() => {
    if (Q.current && clearTimeout(Q.current), !p) {
      _e(!1), Le(!1), G(!1), de("");
      return;
    }
    if (!p.includes("@")) {
      _e(!0), Le(!1);
      return;
    }
    if (!Ci.test(p)) {
      _e(!1), Le(!1);
      return;
    }
    return Q.current = setTimeout(async () => {
      Ve(!0);
      try {
        (await Ac(p)).exists ? (_e(!0), Le(!1)) : (_e(!1), Le(!0));
      } catch (ie) {
        console.error("[EmbeddedLogin] Email check failed:", ie);
        const je = ie instanceof Error ? ie.message : "Unable to verify email. You can still proceed with login.";
        G(!0), de(je), Le(!0), _e(!1);
      } finally {
        Ve(!1);
      }
    }, 500), () => {
      Q.current && clearTimeout(Q.current);
    };
  }, [p]);
  const ge = p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p);
  T.useEffect(() => {
    const ie = (je) => {
      je.key === "Escape" && s();
    };
    return document.addEventListener("keydown", ie), () => document.removeEventListener("keydown", ie);
  }, [s]);
  const ne = (ie) => {
    ie.target === V.current && s();
  }, Ye = async (ie) => {
    if (ie.preventDefault(), !p || !b) {
      Z("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    q(!0), Z("");
    try {
      const je = await fg(p, b, F);
      l(je);
    } catch (je) {
      console.error("[EmbeddedLogin] Login failed:", je);
      const ln = je instanceof Error ? je.message : "Authentication failed";
      Z(ln), Ce(ln), j(me.ERROR), r(ln);
    } finally {
      q(!1);
    }
  }, _t = (ie) => {
    if (ie.key === "CapsLock" && ie.type === "keydown") {
      k((je) => !je);
      return;
    }
    ie.key !== "CapsLock" && k(bu(ie));
  }, Mn = (ie) => {
    k(bu(ie));
  }, ua = () => {
    k(!1);
  };
  return P ? /* @__PURE__ */ v.jsx(
    TE,
    {
      email: p,
      onBack: () => te(!1),
      handleClose: s
    }
  ) : he ? /* @__PURE__ */ v.jsx(
    wE,
    {
      onSuccess: (ie) => {
        le(!1), l(ie);
      },
      onError: r,
      handleClose: s,
      onSignIn: (ie) => {
        le(!1), ie && g(ie);
      },
      authority: o,
      initialEmail: p
    }
  ) : /* @__PURE__ */ v.jsxs(
    "div",
    {
      part: "identity-widget-login-overlay",
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: V,
      onMouseDown: ne,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            part: "identity-widget-login-modal",
            className: "identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!",
            role: "document",
            children: [
              /* @__PURE__ */ v.jsx(
                Gt,
                {
                  onClick: s,
                  variant: At.LINK,
                  part: "identity-widget-login-close-button",
                  className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
                  type: yt.BUTTON,
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
              /* @__PURE__ */ v.jsxs(
                "div",
                {
                  part: "identity-widget-login-header",
                  className: "identity-widget-login-header mb-3! text-center!",
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "h2",
                      {
                        part: "identity-widget-login-title",
                        id: "login-dialog-title",
                        className: "identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!",
                        children: c
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "p",
                      {
                        part: "identity-widget-login-subtitle",
                        className: "identity-widget-login-subtitle text-sm! text-gray-600! mt-1!",
                        children: d
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ v.jsxs(
                "form",
                {
                  part: "identity-widget-login-form",
                  onSubmit: Ye,
                  className: "identity-widget-login-form space-y-2!",
                  "aria-label": "Login form",
                  children: [
                    y && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      /* @__PURE__ */ v.jsx(
                        "div",
                        {
                          part: "identity-widget-google-section",
                          className: "identity-widget-google-section mt-0! mb-4! hidden! justify-center!",
                          children: /* @__PURE__ */ v.jsxs(
                            Gt,
                            {
                              type: yt.BUTTON,
                              variant: At.OUTLINE,
                              part: "identity-widget-google-button",
                              onClick: () => oe(),
                              disabled: C,
                              className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                              children: [
                                /* @__PURE__ */ v.jsx(
                                  "img",
                                  {
                                    part: "identity-widget-google-icon",
                                    src: xE,
                                    alt: "Google",
                                    className: "identity-widget-google-icon w-[18px]! h-[18px]!"
                                  }
                                ),
                                /* @__PURE__ */ v.jsx("span", { part: "identity-widget-google-text", className: "identity-widget-google-text", children: "Sign in with Google" })
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ v.jsxs(
                        "div",
                        {
                          part: "identity-widget-login-divider",
                          className: "identity-widget-login-divider relative! mt-2! mb-4! hidden!",
                          children: [
                            /* @__PURE__ */ v.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-line-wrap",
                                className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!",
                                children: /* @__PURE__ */ v.jsx(
                                  "div",
                                  {
                                    part: "identity-widget-login-divider-line",
                                    className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!"
                                  }
                                )
                              }
                            ),
                            /* @__PURE__ */ v.jsx(
                              "div",
                              {
                                part: "identity-widget-login-divider-text-wrap",
                                className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!",
                                children: /* @__PURE__ */ v.jsx(
                                  "span",
                                  {
                                    part: "identity-widget-login-divider-text",
                                    className: "identity-widget-login-divider-text px-2! bg-white text-gray-500",
                                    children: "OR"
                                  }
                                )
                              }
                            )
                          ]
                        }
                      )
                    ] }),
                    /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        part: "identity-widget-login-email-field",
                        className: "identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!",
                        children: /* @__PURE__ */ v.jsx(
                          Ca,
                          {
                            label: "Email or Username",
                            id: "email",
                            type: "text",
                            value: p,
                            onChange: (ie) => g(ie.target.value),
                            placeholder: "Enter email or username",
                            disabled: C,
                            className: "w-full!",
                            autoComplete: "username",
                            endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                              Te && /* @__PURE__ */ v.jsx(Bh, {}),
                              !Te && we && ge && !Y && /* @__PURE__ */ v.jsx(
                                "img",
                                {
                                  part: "identity-widget-login-email-verified-icon",
                                  className: "identity-widget-login-email-verified-icon",
                                  src: Nu,
                                  alt: "User verified",
                                  "aria-label": "User found",
                                  style: { width: 18, height: 18 }
                                }
                              )
                            ] })
                          }
                        )
                      }
                    ),
                    Ke && !we && ge && !Y && /* @__PURE__ */ v.jsx(
                      bl,
                      {
                        type: me.INFO,
                        message: sc.EMAIL_NOT_FOUND,
                        actionText: "Let's create one to continue?",
                        onActionClick: () => {
                          Le(!1), le(!0);
                        },
                        onClose: () => Le(!1),
                        className: "mb-4!"
                      }
                    ),
                    Ke && Y && /* @__PURE__ */ v.jsx(
                      bl,
                      {
                        type: me.ERROR,
                        message: X,
                        onClose: () => {
                          Le(!1), G(!1), de("");
                        },
                        className: "mb-4!"
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      "div",
                      {
                        part: "identity-widget-login-password-field",
                        className: "identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!",
                        children: /* @__PURE__ */ v.jsxs(
                          "div",
                          {
                            part: "identity-widget-login-password-input-wrap",
                            className: "identity-widget-login-password-input-wrap relative! w-full!",
                            children: [
                              /* @__PURE__ */ v.jsx(
                                Ca,
                                {
                                  label: "Password",
                                  id: "password",
                                  type: A ? "text" : "password",
                                  value: b,
                                  onChange: (ie) => {
                                    R(ie.target.value), Z("");
                                  },
                                  onKeyDown: _t,
                                  onKeyUp: _t,
                                  onFocus: Mn,
                                  onBlur: ua,
                                  placeholder: "Enter Password...",
                                  disabled: C,
                                  className: "w-full!",
                                  autoComplete: "current-password",
                                  error: K,
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
                              ),
                              D && /* @__PURE__ */ v.jsx(
                                "p",
                                {
                                  part: "identity-widget-login-password-capslock",
                                  className: "identity-widget-login-password-capslock mt-1! text-sm! text-gray-600!",
                                  role: "status",
                                  "aria-live": "polite",
                                  children: sc.CAPS_LOCK_ON
                                }
                              )
                            ]
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ v.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-meta-row",
                        className: "identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!",
                        children: [
                          /* @__PURE__ */ v.jsxs(
                            "label",
                            {
                              part: "identity-widget-login-remember-label",
                              className: "identity-widget-login-remember-label flex! items-center! m-0!",
                              children: [
                                /* @__PURE__ */ v.jsx(
                                  "input",
                                  {
                                    type: "checkbox",
                                    part: "identity-widget-login-remember-checkbox",
                                    checked: F,
                                    onChange: (ie) => W(ie.target.checked),
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
                              ]
                            }
                          ),
                          /* @__PURE__ */ v.jsx(
                            "a",
                            {
                              href: "#",
                              part: "identity-widget-login-forgot-link",
                              className: "identity-widget-login-forgot-link no-underline! --button-primary-text!",
                              style: {
                                fontWeight: "500"
                              },
                              onClick: (ie) => {
                                ie.preventDefault(), te(!0);
                              },
                              children: "Forgot Password?"
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Gt,
                      {
                        type: yt.SUBMIT,
                        part: "identity-widget-submit-button identity-widget-login-submit-button",
                        disabled: C || !p,
                        className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-10! disabled:cursor-not-allowed! m-0!",
                        children: C ? /* @__PURE__ */ v.jsxs(
                          "span",
                          {
                            part: "identity-widget-login-submit-loading",
                            className: "identity-widget-login-submit-loading flex! items-center! justify-center!",
                            children: [
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
                            ]
                          }
                        ) : "Sign In"
                      }
                    ),
                    /* @__PURE__ */ v.jsxs(
                      "div",
                      {
                        part: "identity-widget-login-bottom-divider",
                        className: "identity-widget-login-bottom-divider relative! mt-4! mb-4!",
                        children: [
                          /* @__PURE__ */ v.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-line-wrap",
                              className: "identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!",
                              children: /* @__PURE__ */ v.jsx(
                                "div",
                                {
                                  part: "identity-widget-login-bottom-divider-line",
                                  className: "identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!"
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ v.jsx(
                            "div",
                            {
                              part: "identity-widget-login-bottom-divider-text-wrap",
                              className: "identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!",
                              children: /* @__PURE__ */ v.jsx(
                                "span",
                                {
                                  part: "identity-widget-login-bottom-divider-text",
                                  className: "identity-widget-login-bottom-divider-text px-2! bg-white text-gray-500",
                                  children: "OR"
                                }
                              )
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ v.jsx(
                      Gt,
                      {
                        type: yt.BUTTON,
                        variant: At.OUTLINE,
                        part: "identity-widget-login-create-account-button",
                        onClick: () => le(!0),
                        disabled: C,
                        className: "identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!",
                        children: /* @__PURE__ */ v.jsx(
                          "span",
                          {
                            part: "identity-widget-login-create-account-text",
                            className: "identity-widget-login-create-account-text",
                            children: "Create an Account"
                          }
                        )
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        Re && /* @__PURE__ */ v.jsx(oc, { message: Re, type: S, onClose: () => Ce("") })
      ]
    }
  );
}, CE = (l) => {
  const { authority: r, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = l, [d, m] = T.useState(!1);
  T.useEffect(() => (r ? (sE(r), console.log(`${Fe.AUTH} Authority override set to: ${r}`)) : (oh(), console.log(`${Fe.AUTH} Using automatic authority detection`)), () => {
    oh();
  }), [r]), T.useEffect(() => {
    let b;
    return (async () => {
      const C = await vE();
      typeof C == "function" && (b = C);
    })(), () => {
      b && b();
    };
  }, [d]), T.useEffect(() => {
    (async () => {
      try {
        const R = !pE();
        if (c && c(R), await bE()) {
          m(!0);
          const A = l.redirectUrl || ru();
          if (l.autoRedirection)
            window.location.href = A;
          else if (o && l.redirectUrl) {
            const z = l.redirectUrl || ru(), D = localStorage.getItem(ve.ACCESS_TOKEN);
            if (D) {
              const k = gu(D);
              k && o(z, k);
            }
          }
          return;
        }
        if (EE()) {
          if (await Cc()) {
            const z = localStorage.getItem(ve.ACCESS_TOKEN);
            if (!z)
              return;
            const D = gu(z);
            if (!D)
              return;
            console.log(`${Fe.AUTH} Auto-login successful`), m(!0), c && c(!0);
            const k = l.redirectUrl || ru();
            o && (console.log(
              `${Fe.AUTH} Triggering onRedirect callback with user session:`,
              D
            ), o(k, D)), l.autoRedirection && (window.location.href = k);
          }
        } else
          localStorage.removeItem(ve.REFRESH_TOKEN), localStorage.removeItem(ve.REFRESH_TOKEN_TIME);
      } catch (R) {
        console.error(`${Fe.AUTH} Auto-login failed:`, R), localStorage.removeItem(ve.REFRESH_TOKEN), localStorage.removeItem(ve.REFRESH_TOKEN_TIME);
      }
    })();
  }, [l.redirectUrl, c]), T.useEffect(() => {
    r && localStorage.setItem("authority", r), s && localStorage.setItem("subsidiary", s);
  }, [r, s]);
  const y = () => {
    l.handleClose && l.handleClose(), m(!0);
    const b = l.redirectUrl || ru();
    if (o) {
      const R = localStorage.getItem(ve.ACCESS_TOKEN);
      if (R) {
        const C = gu(R);
        C && o(b, C);
      }
    }
    l.autoRedirection && setTimeout(() => {
      window.location.href = b;
    }, 100);
  }, p = (b) => {
    console.log(`${Fe.AUTH} Embedded login error:`, b);
  }, g = () => {
    l.handleClose && l.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(z1, { children: /* @__PURE__ */ v.jsx(
    Dh,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(T.Fragment, { children: l.showLogin && !d && /* @__PURE__ */ v.jsx(
        AE,
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
class NE {
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
async function dh(l) {
  const r = new NE(l.cdnBaseUrl, l.shadowRoot), s = l.brandFolder || l.brandToken;
  if (s)
    await r.loadTheme(s);
  else if (l.autoDetect) {
    const o = await r.detectBrandFromDomain();
    o && await r.loadTheme(o);
  }
  return r;
}
const mh = "832956972051-o6rtl5uehltu7di3cmrvao44mdh54911.apps.googleusercontent.com", hh = typeof window < "u" && window.__widgetStyles?.widget || "";
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
      if (hh) {
        const d = document.createElement("style");
        d.textContent = hh, s.appendChild(d);
      }
      this.applyCustomPrimaryColor(s);
      const o = this.getAttribute("subsidiary");
      o && o.trim() !== "" ? this.loadTheme(o, s) : this.loadThemeFromDomain(s);
      const c = document.createElement("div");
      s.appendChild(c), this.root = Ev.createRoot(c), this.render(), this.addEventListener("logout", this.handleExternalLogoutEvent);
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
        await dh({
          brandFolder: s,
          shadowRoot: o
        });
      } catch (c) {
        console.error("[Widget] Failed to load theme:", c);
      }
    }
    async loadThemeFromDomain(s) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await dh({
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
          const o = xt(ke.REFRESH_TOKEN, !0) || localStorage.getItem(ve.REFRESH_TOKEN);
          o ? (await yE(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (o) {
          console.error("[Widget] Logout API call failed:", o);
        } finally {
          SE(), localStorage.clear(), sessionStorage.clear(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
      const o = this.getAttribute("authority") || Dv(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) !== "false";
      return {
        authority: o,
        subsidiary: this.getAttribute("subsidiary") || void 0,
        redirectUrl: this.getAttribute("redirectUrl") || void 0,
        loginTitle: this.getAttribute("loginTitle") || void 0,
        loginSubtitle: this.getAttribute("loginSubtitle") || void 0,
        showLogin: this.getAttribute("show-login") === "true",
        customPrimaryColor: this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor") || void 0,
        autoRedirection: d,
        googleClientId: this.getAttribute("google-client-id") || this.getAttribute("googleClientId") || mh,
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
        /* @__PURE__ */ v.jsx(wv, { clientId: s.googleClientId || mh, children: /* @__PURE__ */ v.jsx(lv, { children: /* @__PURE__ */ v.jsx(T.StrictMode, { children: /* @__PURE__ */ v.jsx(CE, { ...s }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", l);
}
