
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-500:oklch(72.3% .219 149.579);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.left-2{left:calc(var(--spacing)*2)}.left-2\\.5\\!{left:calc(var(--spacing)*2.5)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-10{z-index:10}.z-10\\!{z-index:10!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-2\\!{margin-top:calc(var(--spacing)*2)!important}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-3\\!{margin-top:calc(var(--spacing)*3)!important}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.hidden{display:none}.hidden\\!{display:none!important}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-2{height:calc(var(--spacing)*2)}.h-2\\!{height:calc(var(--spacing)*2)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.h-\\[18px\\]\\!{height:18px!important}.max-h-\\[90vh\\]\\!{max-height:90vh!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-\\[18px\\]\\!{width:18px!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-full{max-width:100%}.max-w-full\\!{max-width:100%!important}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.overflow-y-auto{overflow-y:auto}.overflow-y-auto\\!{overflow-y:auto!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border\\!{border-style:var(--tw-border-style)!important;border-width:1px!important}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-200\\!{background-color:var(--color-gray-200)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-500{color:var(--color-green-500)}.text-green-500\\!{color:var(--color-green-500)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media not all and (min-width:500px){.max-\\[500px\\]\\:flex-col\\!{flex-direction:column!important}.max-\\[500px\\]\\:items-start\\!{align-items:flex-start!important}.max-\\[500px\\]\\:self-start\\!{align-self:flex-start!important}.max-\\[500px\\]\\:whitespace-normal\\!{white-space:normal!important}}@media(min-width:40rem){.sm\\:flex-row{flex-direction:row}.sm\\:gap-4{gap:calc(var(--spacing)*4)}}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-2\\!::-webkit-scrollbar{width:calc(var(--spacing)*2)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-full\\!::-webkit-scrollbar-thumb{border-radius:3.40282e38px!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-gray-300\\!::-webkit-scrollbar-thumb{background-color:var(--color-gray-300)!important}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\:hover\\]\\:bg-gray-400\\!::-webkit-scrollbar-thumb:hover{background-color:var(--color-gray-400)!important}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-gray-100\\!::-webkit-scrollbar-track{background-color:var(--color-gray-100)!important}}.identity-widget-input-field[type=password]::-ms-reveal{display:none}.identity-widget-input-field[type=password]::-ms-clear{display:none}.identity-widget-input-field[type=password]::-webkit-credentials-auto-fill-button{visibility:hidden;pointer-events:none}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--color-primary: #2563eb;--color-primary-light: #3b82f6;--color-neutral-lightest: #ffffff;--color-neutral-dark: #374151;--color-neutral-light: #9ca3af;--color-border: #d1d5db;--color-border-focus: #2563eb;--color-bg-primary: #ffffff;--color-text: #1f2937;--color-error-bg: #fee2e2;--color-error-border: #fecaca;--color-error: #dc2626;--color-success-bg: #d1fae5;--color-success-border: #a7f3d0;--color-success: #059669;--color-warning-bg: #fef3c7;--color-warning-border: #fde68a;--color-warning: #d97706;--color-info-bg: #dbeafe;--color-info-border: #bfdbfe;--color-info: #2563eb;--radius-lg: .5rem;--radius-md: .375rem;--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();function O1(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Yo = { exports: {} }, pi = {};
var wm;
function D1() {
  if (wm) return pi;
  wm = 1;
  var a = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(o, c, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), c.key !== void 0 && (m = "" + c.key), "key" in c) {
      d = {};
      for (var y in c)
        y !== "key" && (d[y] = c[y]);
    } else d = c;
    return c = d.ref, {
      $$typeof: a,
      type: o,
      key: m,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return pi.Fragment = u, pi.jsx = s, pi.jsxs = s, pi;
}
var xm;
function M1() {
  return xm || (xm = 1, Yo.exports = D1()), Yo.exports;
}
var v = M1(), Xo = { exports: {} }, ie = {}, Am;
function U1() {
  if (Am) return ie;
  Am = 1;
  var a = {};
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), y = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), _ = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
  function A(S) {
    return S === null || typeof S != "object" ? null : (S = q && S[q] || S["@@iterator"], typeof S == "function" ? S : null);
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
  }, D = Object.assign, G = {};
  function V(S, j, K) {
    this.props = S, this.context = j, this.refs = G, this.updater = K || L;
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
    this.props = S, this.context = j, this.refs = G, this.updater = K || L;
  }
  var W = I.prototype = new Q();
  W.constructor = I, D(W, V.prototype), W.isPureReactComponent = !0;
  var me = Array.isArray;
  function ue() {
  }
  var ne = { H: null, A: null, T: null, S: null }, ee = Object.prototype.hasOwnProperty;
  function ce(S, j, K) {
    var Z = K.ref;
    return {
      $$typeof: u,
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
    return typeof S == "object" && S !== null && S.$$typeof === u;
  }
  function _e(S) {
    var j = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(K) {
      return j[K];
    });
  }
  var Je = /\/+/g;
  function ke(S, j) {
    return typeof S == "object" && S !== null && S.key != null ? _e("" + S.key) : j.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ue, ue) : (S.status = "pending", S.then(
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
  function Y(S, j, K, Z, ae) {
    var J = typeof S;
    (J === "undefined" || J === "boolean") && (S = null);
    var Re = !1;
    if (S === null) Re = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          Re = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case u:
            case s:
              Re = !0;
              break;
            case T:
              return Re = S._init, Y(
                Re(S._payload),
                j,
                K,
                Z,
                ae
              );
          }
      }
    if (Re)
      return ae = ae(S), Re = Z === "" ? "." + ke(S, 0) : Z, me(ae) ? (K = "", Re != null && (K = Re.replace(Je, "$&/") + "/"), Y(ae, j, K, "", function(Ft) {
        return Ft;
      })) : ae != null && (Ne(ae) && (ae = Le(
        ae,
        K + (ae.key == null || S && S.key === ae.key ? "" : ("" + ae.key).replace(
          Je,
          "$&/"
        ) + "/") + Re
      )), j.push(ae)), 1;
    Re = 0;
    var te = Z === "" ? "." : Z + ":";
    if (me(S))
      for (var he = 0; he < S.length; he++)
        Z = S[he], J = te + ke(Z, he), Re += Y(
          Z,
          j,
          K,
          J,
          ae
        );
    else if (he = A(S), typeof he == "function")
      for (S = he.call(S), he = 0; !(Z = S.next()).done; )
        Z = Z.value, J = te + ke(Z, he++), Re += Y(
          Z,
          j,
          K,
          J,
          ae
        );
    else if (J === "object") {
      if (typeof S.then == "function")
        return Y(
          X(S),
          j,
          K,
          Z,
          ae
        );
      throw j = String(S), Error(
        "Objects are not valid as a React child (found: " + (j === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : j) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Re;
  }
  function k(S, j, K) {
    if (S == null) return S;
    var Z = [], ae = 0;
    return Y(S, Z, "", "", function(J) {
      return j.call(K, J, ae++);
    }), Z;
  }
  function re(S) {
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
    } else if (typeof a == "object" && typeof a.emit == "function") {
      a.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Te = {
    map: k,
    forEach: function(S, j, K) {
      k(
        S,
        function() {
          j.apply(this, arguments);
        },
        K
      );
    },
    count: function(S) {
      var j = 0;
      return k(S, function() {
        j++;
      }), j;
    },
    toArray: function(S) {
      return k(S, function(j) {
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
  return ie.Activity = _, ie.Children = Te, ie.Component = V, ie.Fragment = o, ie.Profiler = d, ie.PureComponent = I, ie.StrictMode = c, ie.Suspense = g, ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne, ie.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return ne.H.useMemoCache(S);
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
    var Z = D({}, S.props), ae = S.key;
    if (j != null)
      for (J in j.key !== void 0 && (ae = "" + j.key), j)
        !ee.call(j, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && j.ref === void 0 || (Z[J] = j[J]);
    var J = arguments.length - 2;
    if (J === 1) Z.children = K;
    else if (1 < J) {
      for (var Re = Array(J), te = 0; te < J; te++)
        Re[te] = arguments[te + 2];
      Z.children = Re;
    }
    return ce(S.type, ae, Z);
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
    var Z, ae = {}, J = null;
    if (j != null)
      for (Z in j.key !== void 0 && (J = "" + j.key), j)
        ee.call(j, Z) && Z !== "key" && Z !== "__self" && Z !== "__source" && (ae[Z] = j[Z]);
    var Re = arguments.length - 2;
    if (Re === 1) ae.children = K;
    else if (1 < Re) {
      for (var te = Array(Re), he = 0; he < Re; he++)
        te[he] = arguments[he + 2];
      ae.children = te;
    }
    if (S && S.defaultProps)
      for (Z in Re = S.defaultProps, Re)
        ae[Z] === void 0 && (ae[Z] = Re[Z]);
    return ce(S, J, ae);
  }, ie.createRef = function() {
    return { current: null };
  }, ie.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ie.isValidElement = Ne, ie.lazy = function(S) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: S },
      _init: re
    };
  }, ie.memo = function(S, j) {
    return {
      $$typeof: E,
      type: S,
      compare: j === void 0 ? null : j
    };
  }, ie.startTransition = function(S) {
    var j = ne.T, K = {};
    ne.T = K;
    try {
      var Z = S(), ae = ne.S;
      ae !== null && ae(K, Z), typeof Z == "object" && Z !== null && typeof Z.then == "function" && Z.then(ue, Ae);
    } catch (J) {
      Ae(J);
    } finally {
      j !== null && K.types !== null && (j.types = K.types), ne.T = j;
    }
  }, ie.unstable_useCacheRefresh = function() {
    return ne.H.useCacheRefresh();
  }, ie.use = function(S) {
    return ne.H.use(S);
  }, ie.useActionState = function(S, j, K) {
    return ne.H.useActionState(S, j, K);
  }, ie.useCallback = function(S, j) {
    return ne.H.useCallback(S, j);
  }, ie.useContext = function(S) {
    return ne.H.useContext(S);
  }, ie.useDebugValue = function() {
  }, ie.useDeferredValue = function(S, j) {
    return ne.H.useDeferredValue(S, j);
  }, ie.useEffect = function(S, j) {
    return ne.H.useEffect(S, j);
  }, ie.useEffectEvent = function(S) {
    return ne.H.useEffectEvent(S);
  }, ie.useId = function() {
    return ne.H.useId();
  }, ie.useImperativeHandle = function(S, j, K) {
    return ne.H.useImperativeHandle(S, j, K);
  }, ie.useInsertionEffect = function(S, j) {
    return ne.H.useInsertionEffect(S, j);
  }, ie.useLayoutEffect = function(S, j) {
    return ne.H.useLayoutEffect(S, j);
  }, ie.useMemo = function(S, j) {
    return ne.H.useMemo(S, j);
  }, ie.useOptimistic = function(S, j) {
    return ne.H.useOptimistic(S, j);
  }, ie.useReducer = function(S, j, K) {
    return ne.H.useReducer(S, j, K);
  }, ie.useRef = function(S) {
    return ne.H.useRef(S);
  }, ie.useState = function(S) {
    return ne.H.useState(S);
  }, ie.useSyncExternalStore = function(S, j, K) {
    return ne.H.useSyncExternalStore(
      S,
      j,
      K
    );
  }, ie.useTransition = function() {
    return ne.H.useTransition();
  }, ie.version = "19.2.3", ie;
}
var Cm;
function fc() {
  return Cm || (Cm = 1, Xo.exports = U1()), Xo.exports;
}
var w = fc();
const z1 = /* @__PURE__ */ O1(w);
var Nm = "popstate";
function L1(a = {}) {
  function u(o, c) {
    let { pathname: d, search: m, hash: y } = o.location;
    return nc(
      "",
      { pathname: d, search: m, hash: y },
      // state defaults to `null` because `window.history.state` does
      c.state && c.state.usr || null,
      c.state && c.state.key || "default"
    );
  }
  function s(o, c) {
    return typeof c == "string" ? c : wi(c);
  }
  return H1(
    u,
    s,
    null,
    a
  );
}
function Xe(a, u) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(u);
}
function el(a, u) {
  if (!a) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {
    }
  }
}
function j1() {
  return Math.random().toString(36).substring(2, 10);
}
function _m(a, u) {
  return {
    usr: a.state,
    key: a.key,
    idx: u
  };
}
function nc(a, u, s = null, o) {
  return {
    pathname: typeof a == "string" ? a : a.pathname,
    search: "",
    hash: "",
    ...typeof u == "string" ? Ea(u) : u,
    state: s,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: u && u.key || o || j1()
  };
}
function wi({
  pathname: a = "/",
  search: u = "",
  hash: s = ""
}) {
  return u && u !== "?" && (a += u.charAt(0) === "?" ? u : "?" + u), s && s !== "#" && (a += s.charAt(0) === "#" ? s : "#" + s), a;
}
function Ea(a) {
  let u = {};
  if (a) {
    let s = a.indexOf("#");
    s >= 0 && (u.hash = a.substring(s), a = a.substring(0, s));
    let o = a.indexOf("?");
    o >= 0 && (u.search = a.substring(o), a = a.substring(0, o)), a && (u.pathname = a);
  }
  return u;
}
function H1(a, u, s, o = {}) {
  let { window: c = document.defaultView, v5Compat: d = !1 } = o, m = c.history, y = "POP", p = null, g = E();
  g == null && (g = 0, m.replaceState({ ...m.state, idx: g }, ""));
  function E() {
    return (m.state || { idx: null }).idx;
  }
  function T() {
    y = "POP";
    let D = E(), G = D == null ? null : D - g;
    g = D, p && p({ action: y, location: L.location, delta: G });
  }
  function _(D, G) {
    y = "PUSH";
    let V = nc(L.location, D, G);
    g = E() + 1;
    let Q = _m(V, g), I = L.createHref(V);
    try {
      m.pushState(Q, "", I);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      c.location.assign(I);
    }
    d && p && p({ action: y, location: L.location, delta: 1 });
  }
  function q(D, G) {
    y = "REPLACE";
    let V = nc(L.location, D, G);
    g = E();
    let Q = _m(V, g), I = L.createHref(V);
    m.replaceState(Q, "", I), d && p && p({ action: y, location: L.location, delta: 0 });
  }
  function A(D) {
    return B1(D);
  }
  let L = {
    get action() {
      return y;
    },
    get location() {
      return a(c, m);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return c.addEventListener(Nm, T), p = D, () => {
        c.removeEventListener(Nm, T), p = null;
      };
    },
    createHref(D) {
      return u(c, D);
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
    push: _,
    replace: q,
    go(D) {
      return m.go(D);
    }
  };
  return L;
}
function B1(a, u = !1) {
  let s = "http://localhost";
  typeof window < "u" && (s = window.location.origin !== "null" ? window.location.origin : window.location.href), Xe(s, "No window.location.(origin|href) available to create URL");
  let o = typeof a == "string" ? a : wi(a);
  return o = o.replace(/ $/, "%20"), !u && o.startsWith("//") && (o = s + o), new URL(o, s);
}
function fh(a, u, s = "/") {
  return q1(a, u, s, !1);
}
function q1(a, u, s, o) {
  let c = typeof u == "string" ? Ea(u) : u, d = Cl(c.pathname || "/", s);
  if (d == null)
    return null;
  let m = dh(a);
  G1(m);
  let y = null;
  for (let p = 0; y == null && p < m.length; ++p) {
    let g = W1(d);
    y = $1(
      m[p],
      g,
      o
    );
  }
  return y;
}
function dh(a, u = [], s = [], o = "", c = !1) {
  let d = (m, y, p = c, g) => {
    let E = {
      relativePath: g === void 0 ? m.path || "" : g,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: y,
      route: m
    };
    if (E.relativePath.startsWith("/")) {
      if (!E.relativePath.startsWith(o) && p)
        return;
      Xe(
        E.relativePath.startsWith(o),
        `Absolute route path "${E.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), E.relativePath = E.relativePath.slice(o.length);
    }
    let T = xl([o, E.relativePath]), _ = s.concat(E);
    m.children && m.children.length > 0 && (Xe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${T}".`
    ), dh(
      m.children,
      u,
      _,
      T,
      p
    )), !(m.path == null && !m.index) && u.push({
      path: T,
      score: Z1(T, m.index),
      routesMeta: _
    });
  };
  return a.forEach((m, y) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, y);
    else
      for (let p of mh(m.path))
        d(m, y, !0, p);
  }), u;
}
function mh(a) {
  let u = a.split("/");
  if (u.length === 0) return [];
  let [s, ...o] = u, c = s.endsWith("?"), d = s.replace(/\?$/, "");
  if (o.length === 0)
    return c ? [d, ""] : [d];
  let m = mh(o.join("/")), y = [];
  return y.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), c && y.push(...m), y.map(
    (p) => a.startsWith("/") && p === "" ? "/" : p
  );
}
function G1(a) {
  a.sort(
    (u, s) => u.score !== s.score ? s.score - u.score : J1(
      u.routesMeta.map((o) => o.childrenIndex),
      s.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Y1 = /^:[\w-]+$/, X1 = 3, k1 = 2, V1 = 1, K1 = 10, Q1 = -2, Om = (a) => a === "*";
function Z1(a, u) {
  let s = a.split("/"), o = s.length;
  return s.some(Om) && (o += Q1), u && (o += k1), s.filter((c) => !Om(c)).reduce(
    (c, d) => c + (Y1.test(d) ? X1 : d === "" ? V1 : K1),
    o
  );
}
function J1(a, u) {
  return a.length === u.length && a.slice(0, -1).every((o, c) => o === u[c]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - u[u.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function $1(a, u, s = !1) {
  let { routesMeta: o } = a, c = {}, d = "/", m = [];
  for (let y = 0; y < o.length; ++y) {
    let p = o[y], g = y === o.length - 1, E = d === "/" ? u : u.slice(d.length) || "/", T = mr(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
      E
    ), _ = p.route;
    if (!T && g && s && !o[o.length - 1].route.index && (T = mr(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      E
    )), !T)
      return null;
    Object.assign(c, T.params), m.push({
      // TODO: Can this as be avoided?
      params: c,
      pathname: xl([d, T.pathname]),
      pathnameBase: tp(
        xl([d, T.pathnameBase])
      ),
      route: _
    }), T.pathnameBase !== "/" && (d = xl([d, T.pathnameBase]));
  }
  return m;
}
function mr(a, u) {
  typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
  let [s, o] = F1(
    a.path,
    a.caseSensitive,
    a.end
  ), c = u.match(s);
  if (!c) return null;
  let d = c[0], m = d.replace(/(.)\/+$/, "$1"), y = c.slice(1);
  return {
    params: o.reduce(
      (g, { paramName: E, isOptional: T }, _) => {
        if (E === "*") {
          let A = y[_] || "";
          m = d.slice(0, d.length - A.length).replace(/(.)\/+$/, "$1");
        }
        const q = y[_];
        return T && !q ? g[E] = void 0 : g[E] = (q || "").replace(/%2F/g, "/"), g;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: a
  };
}
function F1(a, u = !1, s = !0) {
  el(
    a === "*" || !a.endsWith("*") || a.endsWith("/*"),
    `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`
  );
  let o = [], c = "^" + a.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, y, p) => (o.push({ paramName: y, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return a.endsWith("*") ? (o.push({ paramName: "*" }), c += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? c += "\\/*$" : a !== "" && a !== "/" && (c += "(?:(?=\\/|$))"), [new RegExp(c, u ? void 0 : "i"), o];
}
function W1(a) {
  try {
    return a.split("/").map((u) => decodeURIComponent(u).replace(/\//g, "%2F")).join("/");
  } catch (u) {
    return el(
      !1,
      `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`
    ), a;
  }
}
function Cl(a, u) {
  if (u === "/") return a;
  if (!a.toLowerCase().startsWith(u.toLowerCase()))
    return null;
  let s = u.endsWith("/") ? u.length - 1 : u.length, o = a.charAt(s);
  return o && o !== "/" ? null : a.slice(s) || "/";
}
var hh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, I1 = (a) => hh.test(a);
function P1(a, u = "/") {
  let {
    pathname: s,
    search: o = "",
    hash: c = ""
  } = typeof a == "string" ? Ea(a) : a, d;
  if (s)
    if (I1(s))
      d = s;
    else {
      if (s.includes("//")) {
        let m = s;
        s = s.replace(/\/\/+/g, "/"), el(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${s}`
        );
      }
      s.startsWith("/") ? d = Dm(s.substring(1), "/") : d = Dm(s, u);
    }
  else
    d = u;
  return {
    pathname: d,
    search: lp(o),
    hash: np(c)
  };
}
function Dm(a, u) {
  let s = u.replace(/\/+$/, "").split("/");
  return a.split("/").forEach((c) => {
    c === ".." ? s.length > 1 && s.pop() : c !== "." && s.push(c);
  }), s.length > 1 ? s.join("/") : "/";
}
function ko(a, u, s, o) {
  return `Cannot include a '${a}' character in a manually specified \`to.${u}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ep(a) {
  return a.filter(
    (u, s) => s === 0 || u.route.path && u.route.path.length > 0
  );
}
function gh(a) {
  let u = ep(a);
  return u.map(
    (s, o) => o === u.length - 1 ? s.pathname : s.pathnameBase
  );
}
function yh(a, u, s, o = !1) {
  let c;
  typeof a == "string" ? c = Ea(a) : (c = { ...a }, Xe(
    !c.pathname || !c.pathname.includes("?"),
    ko("?", "pathname", "search", c)
  ), Xe(
    !c.pathname || !c.pathname.includes("#"),
    ko("#", "pathname", "hash", c)
  ), Xe(
    !c.search || !c.search.includes("#"),
    ko("#", "search", "hash", c)
  ));
  let d = a === "" || c.pathname === "", m = d ? "/" : c.pathname, y;
  if (m == null)
    y = s;
  else {
    let T = u.length - 1;
    if (!o && m.startsWith("..")) {
      let _ = m.split("/");
      for (; _[0] === ".."; )
        _.shift(), T -= 1;
      c.pathname = _.join("/");
    }
    y = T >= 0 ? u[T] : "/";
  }
  let p = P1(c, y), g = m && m !== "/" && m.endsWith("/"), E = (d || m === ".") && s.endsWith("/");
  return !p.pathname.endsWith("/") && (g || E) && (p.pathname += "/"), p;
}
var xl = (a) => a.join("/").replace(/\/\/+/g, "/"), tp = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"), lp = (a) => !a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a, np = (a) => !a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a, ap = class {
  constructor(a, u, s, o = !1) {
    this.status = a, this.statusText = u || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
  }
};
function ip(a) {
  return a != null && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.internal == "boolean" && "data" in a;
}
function up(a) {
  return a.map((u) => u.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var ph = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function vh(a, u) {
  let s = a;
  if (typeof s != "string" || !hh.test(s))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: s
    };
  let o = s, c = !1;
  if (ph)
    try {
      let d = new URL(window.location.href), m = s.startsWith("//") ? new URL(d.protocol + s) : new URL(s), y = Cl(m.pathname, u);
      m.origin === d.origin && y != null ? s = y + m.search + m.hash : c = !0;
    } catch {
      el(
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
var Eh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Eh
);
var rp = [
  "GET",
  ...Eh
];
new Set(rp);
var ba = w.createContext(null);
ba.displayName = "DataRouter";
var yr = w.createContext(null);
yr.displayName = "DataRouterState";
var sp = w.createContext(!1), bh = w.createContext({
  isTransitioning: !1
});
bh.displayName = "ViewTransition";
var op = w.createContext(
  /* @__PURE__ */ new Map()
);
op.displayName = "Fetchers";
var cp = w.createContext(null);
cp.displayName = "Await";
var $t = w.createContext(
  null
);
$t.displayName = "Navigation";
var Ni = w.createContext(
  null
);
Ni.displayName = "Location";
var Nl = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
Nl.displayName = "Route";
var dc = w.createContext(null);
dc.displayName = "RouteError";
var Sh = "REACT_ROUTER_ERROR", fp = "REDIRECT", dp = "ROUTE_ERROR_RESPONSE";
function mp(a) {
  if (a.startsWith(`${Sh}:${fp}:{`))
    try {
      let u = JSON.parse(a.slice(28));
      if (typeof u == "object" && u && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.location == "string" && typeof u.reloadDocument == "boolean" && typeof u.replace == "boolean")
        return u;
    } catch {
    }
}
function hp(a) {
  if (a.startsWith(
    `${Sh}:${dp}:{`
  ))
    try {
      let u = JSON.parse(a.slice(40));
      if (typeof u == "object" && u && typeof u.status == "number" && typeof u.statusText == "string")
        return new ap(
          u.status,
          u.statusText,
          u.data
        );
    } catch {
    }
}
function gp(a, { relative: u } = {}) {
  Xe(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: s, navigator: o } = w.useContext($t), { hash: c, pathname: d, search: m } = Oi(a, { relative: u }), y = d;
  return s !== "/" && (y = d === "/" ? s : xl([s, d])), o.createHref({ pathname: y, search: m, hash: c });
}
function _i() {
  return w.useContext(Ni) != null;
}
function Cn() {
  return Xe(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), w.useContext(Ni).location;
}
var Rh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Th(a) {
  w.useContext($t).static || w.useLayoutEffect(a);
}
function yp() {
  let { isDataRoute: a } = w.useContext(Nl);
  return a ? _p() : pp();
}
function pp() {
  Xe(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let a = w.useContext(ba), { basename: u, navigator: s } = w.useContext($t), { matches: o } = w.useContext(Nl), { pathname: c } = Cn(), d = JSON.stringify(gh(o)), m = w.useRef(!1);
  return Th(() => {
    m.current = !0;
  }), w.useCallback(
    (p, g = {}) => {
      if (el(m.current, Rh), !m.current) return;
      if (typeof p == "number") {
        s.go(p);
        return;
      }
      let E = yh(
        p,
        JSON.parse(d),
        c,
        g.relative === "path"
      );
      a == null && u !== "/" && (E.pathname = E.pathname === "/" ? u : xl([u, E.pathname])), (g.replace ? s.replace : s.push)(
        E,
        g.state,
        g
      );
    },
    [
      u,
      s,
      d,
      c,
      a
    ]
  );
}
w.createContext(null);
function Oi(a, { relative: u } = {}) {
  let { matches: s } = w.useContext(Nl), { pathname: o } = Cn(), c = JSON.stringify(gh(s));
  return w.useMemo(
    () => yh(
      a,
      JSON.parse(c),
      o,
      u === "path"
    ),
    [a, c, o, u]
  );
}
function vp(a, u) {
  return wh(a, u);
}
function wh(a, u, s, o, c) {
  Xe(
    _i(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = w.useContext($t), { matches: m } = w.useContext(Nl), y = m[m.length - 1], p = y ? y.params : {}, g = y ? y.pathname : "/", E = y ? y.pathnameBase : "/", T = y && y.route;
  {
    let V = T && T.path || "";
    Ah(
      g,
      !T || V.endsWith("*") || V.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${V}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${V}"> to <Route path="${V === "/" ? "*" : `${V}/*`}">.`
    );
  }
  let _ = Cn(), q;
  if (u) {
    let V = typeof u == "string" ? Ea(u) : u;
    Xe(
      E === "/" || V.pathname?.startsWith(E),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${V.pathname}" was given in the \`location\` prop.`
    ), q = V;
  } else
    q = _;
  let A = q.pathname || "/", L = A;
  if (E !== "/") {
    let V = E.replace(/^\//, "").split("/");
    L = "/" + A.replace(/^\//, "").split("/").slice(V.length).join("/");
  }
  let D = fh(a, { pathname: L });
  el(
    T || D != null,
    `No routes matched location "${q.pathname}${q.search}${q.hash}" `
  ), el(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${q.pathname}${q.search}${q.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let G = Tp(
    D && D.map(
      (V) => Object.assign({}, V, {
        params: Object.assign({}, p, V.params),
        pathname: xl([
          E,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            V.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : V.pathname
        ]),
        pathnameBase: V.pathnameBase === "/" ? E : xl([
          E,
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
  return u && G ? /* @__PURE__ */ w.createElement(
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
function Ep() {
  let a = Np(), u = ip(a) ? `${a.status} ${a.statusText}` : a instanceof Error ? a.message : JSON.stringify(a), s = a instanceof Error ? a.stack : null, o = "rgba(200,200,200, 0.5)", c = { padding: "0.5rem", backgroundColor: o }, d = { padding: "2px 4px", backgroundColor: o }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    a
  ), m = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ w.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ w.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ w.createElement("h3", { style: { fontStyle: "italic" } }, u), s ? /* @__PURE__ */ w.createElement("pre", { style: c }, s) : null, m);
}
var bp = /* @__PURE__ */ w.createElement(Ep, null), xh = class extends w.Component {
  constructor(a) {
    super(a), this.state = {
      location: a.location,
      revalidation: a.revalidation,
      error: a.error
    };
  }
  static getDerivedStateFromError(a) {
    return { error: a };
  }
  static getDerivedStateFromProps(a, u) {
    return u.location !== a.location || u.revalidation !== "idle" && a.revalidation === "idle" ? {
      error: a.error,
      location: a.location,
      revalidation: a.revalidation
    } : {
      error: a.error !== void 0 ? a.error : u.error,
      location: u.location,
      revalidation: a.revalidation || u.revalidation
    };
  }
  componentDidCatch(a, u) {
    this.props.onError ? this.props.onError(a, u) : console.error(
      "React Router caught the following error during render",
      a
    );
  }
  render() {
    let a = this.state.error;
    if (this.context && typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
      const s = hp(a.digest);
      s && (a = s);
    }
    let u = a !== void 0 ? /* @__PURE__ */ w.createElement(Nl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ w.createElement(
      dc.Provider,
      {
        value: a,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ w.createElement(Sp, { error: a }, u) : u;
  }
};
xh.contextType = sp;
var Vo = /* @__PURE__ */ new WeakMap();
function Sp({
  children: a,
  error: u
}) {
  let { basename: s } = w.useContext($t);
  if (typeof u == "object" && u && "digest" in u && typeof u.digest == "string") {
    let o = mp(u.digest);
    if (o) {
      let c = Vo.get(u);
      if (c) throw c;
      let d = vh(o.location, s);
      if (ph && !Vo.get(u))
        if (d.isExternal || o.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: o.replace
            })
          );
          throw Vo.set(u, m), m;
        }
      return /* @__PURE__ */ w.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${d.absoluteURL || d.to}`
        }
      );
    }
  }
  return a;
}
function Rp({ routeContext: a, match: u, children: s }) {
  let o = w.useContext(ba);
  return o && o.static && o.staticContext && (u.route.errorElement || u.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = u.route.id), /* @__PURE__ */ w.createElement(Nl.Provider, { value: a }, s);
}
function Tp(a, u = [], s = null, o = null, c = null) {
  if (a == null) {
    if (!s)
      return null;
    if (s.errors)
      a = s.matches;
    else if (u.length === 0 && !s.initialized && s.matches.length > 0)
      a = s.matches;
    else
      return null;
  }
  let d = a, m = s?.errors;
  if (m != null) {
    let E = d.findIndex(
      (T) => T.route.id && m?.[T.route.id] !== void 0
    );
    Xe(
      E >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ), d = d.slice(
      0,
      Math.min(d.length, E + 1)
    );
  }
  let y = !1, p = -1;
  if (s)
    for (let E = 0; E < d.length; E++) {
      let T = d[E];
      if ((T.route.HydrateFallback || T.route.hydrateFallbackElement) && (p = E), T.route.id) {
        let { loaderData: _, errors: q } = s, A = T.route.loader && !_.hasOwnProperty(T.route.id) && (!q || q[T.route.id] === void 0);
        if (T.route.lazy || A) {
          y = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let g = s && o ? (E, T) => {
    o(E, {
      location: s.location,
      params: s.matches?.[0]?.params ?? {},
      unstable_pattern: up(s.matches),
      errorInfo: T
    });
  } : void 0;
  return d.reduceRight(
    (E, T, _) => {
      let q, A = !1, L = null, D = null;
      s && (q = m && T.route.id ? m[T.route.id] : void 0, L = T.route.errorElement || bp, y && (p < 0 && _ === 0 ? (Ah(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), A = !0, D = null) : p === _ && (A = !0, D = T.route.hydrateFallbackElement || null)));
      let G = u.concat(d.slice(0, _ + 1)), V = () => {
        let Q;
        return q ? Q = L : A ? Q = D : T.route.Component ? Q = /* @__PURE__ */ w.createElement(T.route.Component, null) : T.route.element ? Q = T.route.element : Q = E, /* @__PURE__ */ w.createElement(
          Rp,
          {
            match: T,
            routeContext: {
              outlet: E,
              matches: G,
              isDataRoute: s != null
            },
            children: Q
          }
        );
      };
      return s && (T.route.ErrorBoundary || T.route.errorElement || _ === 0) ? /* @__PURE__ */ w.createElement(
        xh,
        {
          location: s.location,
          revalidation: s.revalidation,
          component: L,
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
function mc(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function wp(a) {
  let u = w.useContext(ba);
  return Xe(u, mc(a)), u;
}
function xp(a) {
  let u = w.useContext(yr);
  return Xe(u, mc(a)), u;
}
function Ap(a) {
  let u = w.useContext(Nl);
  return Xe(u, mc(a)), u;
}
function hc(a) {
  let u = Ap(a), s = u.matches[u.matches.length - 1];
  return Xe(
    s.route.id,
    `${a} can only be used on routes that contain a unique "id"`
  ), s.route.id;
}
function Cp() {
  return hc(
    "useRouteId"
    /* UseRouteId */
  );
}
function Np() {
  let a = w.useContext(dc), u = xp(
    "useRouteError"
    /* UseRouteError */
  ), s = hc(
    "useRouteError"
    /* UseRouteError */
  );
  return a !== void 0 ? a : u.errors?.[s];
}
function _p() {
  let { router: a } = wp(
    "useNavigate"
    /* UseNavigateStable */
  ), u = hc(
    "useNavigate"
    /* UseNavigateStable */
  ), s = w.useRef(!1);
  return Th(() => {
    s.current = !0;
  }), w.useCallback(
    async (c, d = {}) => {
      el(s.current, Rh), s.current && (typeof c == "number" ? await a.navigate(c) : await a.navigate(c, { fromRouteId: u, ...d }));
    },
    [a, u]
  );
}
var Mm = {};
function Ah(a, u, s) {
  !u && !Mm[a] && (Mm[a] = !0, el(!1, s));
}
w.memo(Op);
function Op({
  routes: a,
  future: u,
  state: s,
  onError: o
}) {
  return wh(a, void 0, s, o, u);
}
function Ch(a) {
  Xe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Dp({
  basename: a = "/",
  children: u = null,
  location: s,
  navigationType: o = "POP",
  navigator: c,
  static: d = !1,
  unstable_useTransitions: m
}) {
  Xe(
    !_i(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let y = a.replace(/^\/*/, "/"), p = w.useMemo(
    () => ({
      basename: y,
      navigator: c,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [y, c, d, m]
  );
  typeof s == "string" && (s = Ea(s));
  let {
    pathname: g = "/",
    search: E = "",
    hash: T = "",
    state: _ = null,
    key: q = "default"
  } = s, A = w.useMemo(() => {
    let L = Cl(g, y);
    return L == null ? null : {
      location: {
        pathname: L,
        search: E,
        hash: T,
        state: _,
        key: q
      },
      navigationType: o
    };
  }, [y, g, E, T, _, q, o]);
  return el(
    A != null,
    `<Router basename="${y}"> is not able to match the URL "${g}${E}${T}" because it does not start with the basename, so the <Router> won't render anything.`
  ), A == null ? null : /* @__PURE__ */ w.createElement($t.Provider, { value: p }, /* @__PURE__ */ w.createElement(Ni.Provider, { children: u, value: A }));
}
function Mp({
  children: a,
  location: u
}) {
  return vp(ac(a), u);
}
function ac(a, u = []) {
  let s = [];
  return w.Children.forEach(a, (o, c) => {
    if (!w.isValidElement(o))
      return;
    let d = [...u, c];
    if (o.type === w.Fragment) {
      s.push.apply(
        s,
        ac(o.props.children, d)
      );
      return;
    }
    Xe(
      o.type === Ch,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Xe(
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
    o.props.children && (m.children = ac(
      o.props.children,
      d
    )), s.push(m);
  }), s;
}
var ur = "get", rr = "application/x-www-form-urlencoded";
function pr(a) {
  return typeof HTMLElement < "u" && a instanceof HTMLElement;
}
function Up(a) {
  return pr(a) && a.tagName.toLowerCase() === "button";
}
function zp(a) {
  return pr(a) && a.tagName.toLowerCase() === "form";
}
function Lp(a) {
  return pr(a) && a.tagName.toLowerCase() === "input";
}
function jp(a) {
  return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
}
function Hp(a, u) {
  return a.button === 0 && // Ignore everything but left clicks
  (!u || u === "_self") && // Let browser handle "target=_blank" etc.
  !jp(a);
}
var er = null;
function Bp() {
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
var qp = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Ko(a) {
  return a != null && !qp.has(a) ? (el(
    !1,
    `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rr}"`
  ), null) : a;
}
function Gp(a, u) {
  let s, o, c, d, m;
  if (zp(a)) {
    let y = a.getAttribute("action");
    o = y ? Cl(y, u) : null, s = a.getAttribute("method") || ur, c = Ko(a.getAttribute("enctype")) || rr, d = new FormData(a);
  } else if (Up(a) || Lp(a) && (a.type === "submit" || a.type === "image")) {
    let y = a.form;
    if (y == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = a.getAttribute("formaction") || y.getAttribute("action");
    if (o = p ? Cl(p, u) : null, s = a.getAttribute("formmethod") || y.getAttribute("method") || ur, c = Ko(a.getAttribute("formenctype")) || Ko(y.getAttribute("enctype")) || rr, d = new FormData(y, a), !Bp()) {
      let { name: g, type: E, value: T } = a;
      if (E === "image") {
        let _ = g ? `${g}.` : "";
        d.append(`${_}x`, "0"), d.append(`${_}y`, "0");
      } else g && d.append(g, T);
    }
  } else {
    if (pr(a))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    s = ur, o = null, c = rr, m = a;
  }
  return d && c === "text/plain" && (m = d, d = void 0), { action: o, method: s.toLowerCase(), encType: c, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function gc(a, u) {
  if (a === !1 || a === null || typeof a > "u")
    throw new Error(u);
}
function Yp(a, u, s) {
  let o = typeof a == "string" ? new URL(
    a,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : a;
  return o.pathname === "/" ? o.pathname = `_root.${s}` : u && Cl(o.pathname, u) === "/" ? o.pathname = `${u.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`, o;
}
async function Xp(a, u) {
  if (a.id in u)
    return u[a.id];
  try {
    let s = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      a.module
    );
    return u[a.id] = s, s;
  } catch (s) {
    return console.error(
      `Error loading route module \`${a.module}\`, reloading page...`
    ), console.error(s), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function kp(a) {
  return a == null ? !1 : a.href == null ? a.rel === "preload" && typeof a.imageSrcSet == "string" && typeof a.imageSizes == "string" : typeof a.rel == "string" && typeof a.href == "string";
}
async function Vp(a, u, s) {
  let o = await Promise.all(
    a.map(async (c) => {
      let d = u.routes[c.route.id];
      if (d) {
        let m = await Xp(d, s);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return Jp(
    o.flat(1).filter(kp).filter((c) => c.rel === "stylesheet" || c.rel === "preload").map(
      (c) => c.rel === "stylesheet" ? { ...c, rel: "prefetch", as: "style" } : { ...c, rel: "prefetch" }
    )
  );
}
function Um(a, u, s, o, c, d) {
  let m = (p, g) => s[g] ? p.route.id !== s[g].route.id : !0, y = (p, g) => (
    // param change, /users/123 -> /users/456
    s[g].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    s[g].route.path?.endsWith("*") && s[g].params["*"] !== p.params["*"]
  );
  return d === "assets" ? u.filter(
    (p, g) => m(p, g) || y(p, g)
  ) : d === "data" ? u.filter((p, g) => {
    let E = o.routes[p.route.id];
    if (!E || !E.hasLoader)
      return !1;
    if (m(p, g) || y(p, g))
      return !0;
    if (p.route.shouldRevalidate) {
      let T = p.route.shouldRevalidate({
        currentUrl: new URL(
          c.pathname + c.search + c.hash,
          window.origin
        ),
        currentParams: s[0]?.params || {},
        nextUrl: new URL(a, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof T == "boolean")
        return T;
    }
    return !0;
  }) : [];
}
function Kp(a, u, { includeHydrateFallback: s } = {}) {
  return Qp(
    a.map((o) => {
      let c = u.routes[o.route.id];
      if (!c) return [];
      let d = [c.module];
      return c.clientActionModule && (d = d.concat(c.clientActionModule)), c.clientLoaderModule && (d = d.concat(c.clientLoaderModule)), s && c.hydrateFallbackModule && (d = d.concat(c.hydrateFallbackModule)), c.imports && (d = d.concat(c.imports)), d;
    }).flat(1)
  );
}
function Qp(a) {
  return [...new Set(a)];
}
function Zp(a) {
  let u = {}, s = Object.keys(a).sort();
  for (let o of s)
    u[o] = a[o];
  return u;
}
function Jp(a, u) {
  let s = /* @__PURE__ */ new Set();
  return new Set(u), a.reduce((o, c) => {
    let d = JSON.stringify(Zp(c));
    return s.has(d) || (s.add(d), o.push({ key: d, link: c })), o;
  }, []);
}
function Nh() {
  let a = w.useContext(ba);
  return gc(
    a,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), a;
}
function $p() {
  let a = w.useContext(yr);
  return gc(
    a,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), a;
}
var yc = w.createContext(void 0);
yc.displayName = "FrameworkContext";
function _h() {
  let a = w.useContext(yc);
  return gc(
    a,
    "You must render this element inside a <HydratedRouter> element"
  ), a;
}
function Fp(a, u) {
  let s = w.useContext(yc), [o, c] = w.useState(!1), [d, m] = w.useState(!1), { onFocus: y, onBlur: p, onMouseEnter: g, onMouseLeave: E, onTouchStart: T } = u, _ = w.useRef(null);
  w.useEffect(() => {
    if (a === "render" && m(!0), a === "viewport") {
      let L = (G) => {
        G.forEach((V) => {
          m(V.isIntersecting);
        });
      }, D = new IntersectionObserver(L, { threshold: 0.5 });
      return _.current && D.observe(_.current), () => {
        D.disconnect();
      };
    }
  }, [a]), w.useEffect(() => {
    if (o) {
      let L = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(L);
      };
    }
  }, [o]);
  let q = () => {
    c(!0);
  }, A = () => {
    c(!1), m(!1);
  };
  return s ? a !== "intent" ? [d, _, {}] : [
    d,
    _,
    {
      onFocus: vi(y, q),
      onBlur: vi(p, A),
      onMouseEnter: vi(g, q),
      onMouseLeave: vi(E, A),
      onTouchStart: vi(T, q)
    }
  ] : [!1, _, {}];
}
function vi(a, u) {
  return (s) => {
    a && a(s), s.defaultPrevented || u(s);
  };
}
function Wp({ page: a, ...u }) {
  let { router: s } = Nh(), o = w.useMemo(
    () => fh(s.routes, a, s.basename),
    [s.routes, a, s.basename]
  );
  return o ? /* @__PURE__ */ w.createElement(Pp, { page: a, matches: o, ...u }) : null;
}
function Ip(a) {
  let { manifest: u, routeModules: s } = _h(), [o, c] = w.useState([]);
  return w.useEffect(() => {
    let d = !1;
    return Vp(a, u, s).then(
      (m) => {
        d || c(m);
      }
    ), () => {
      d = !0;
    };
  }, [a, u, s]), o;
}
function Pp({
  page: a,
  matches: u,
  ...s
}) {
  let o = Cn(), { manifest: c, routeModules: d } = _h(), { basename: m } = Nh(), { loaderData: y, matches: p } = $p(), g = w.useMemo(
    () => Um(
      a,
      u,
      p,
      c,
      o,
      "data"
    ),
    [a, u, p, c, o]
  ), E = w.useMemo(
    () => Um(
      a,
      u,
      p,
      c,
      o,
      "assets"
    ),
    [a, u, p, c, o]
  ), T = w.useMemo(() => {
    if (a === o.pathname + o.search + o.hash)
      return [];
    let A = /* @__PURE__ */ new Set(), L = !1;
    if (u.forEach((G) => {
      let V = c.routes[G.route.id];
      !V || !V.hasLoader || (!g.some((Q) => Q.route.id === G.route.id) && G.route.id in y && d[G.route.id]?.shouldRevalidate || V.hasClientLoader ? L = !0 : A.add(G.route.id));
    }), A.size === 0)
      return [];
    let D = Yp(a, m, "data");
    return L && A.size > 0 && D.searchParams.set(
      "_routes",
      u.filter((G) => A.has(G.route.id)).map((G) => G.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    y,
    o,
    c,
    g,
    u,
    a,
    d
  ]), _ = w.useMemo(
    () => Kp(E, c),
    [E, c]
  ), q = Ip(E);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, T.map((A) => /* @__PURE__ */ w.createElement("link", { key: A, rel: "prefetch", as: "fetch", href: A, ...s })), _.map((A) => /* @__PURE__ */ w.createElement("link", { key: A, rel: "modulepreload", href: A, ...s })), q.map(({ key: A, link: L }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ w.createElement("link", { key: A, nonce: s.nonce, ...L })
  )));
}
function ev(...a) {
  return (u) => {
    a.forEach((s) => {
      typeof s == "function" ? s(u) : s != null && (s.current = u);
    });
  };
}
var tv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  tv && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function lv({
  basename: a,
  children: u,
  unstable_useTransitions: s,
  window: o
}) {
  let c = w.useRef();
  c.current == null && (c.current = L1({ window: o, v5Compat: !0 }));
  let d = c.current, [m, y] = w.useState({
    action: d.action,
    location: d.location
  }), p = w.useCallback(
    (g) => {
      s === !1 ? y(g) : w.startTransition(() => y(g));
    },
    [s]
  );
  return w.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ w.createElement(
    Dp,
    {
      basename: a,
      children: u,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: s
    }
  );
}
var Oh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Dh = w.forwardRef(
  function({
    onClick: u,
    discover: s = "render",
    prefetch: o = "none",
    relative: c,
    reloadDocument: d,
    replace: m,
    state: y,
    target: p,
    to: g,
    preventScrollReset: E,
    viewTransition: T,
    unstable_defaultShouldRevalidate: _,
    ...q
  }, A) {
    let { basename: L, unstable_useTransitions: D } = w.useContext($t), G = typeof g == "string" && Oh.test(g), V = vh(g, L);
    g = V.to;
    let Q = gp(g, { relative: c }), [I, W, me] = Fp(
      o,
      q
    ), ue = uv(g, {
      replace: m,
      state: y,
      target: p,
      preventScrollReset: E,
      relative: c,
      viewTransition: T,
      unstable_defaultShouldRevalidate: _,
      unstable_useTransitions: D
    });
    function ne(ce) {
      u && u(ce), ce.defaultPrevented || ue(ce);
    }
    let ee = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ w.createElement(
        "a",
        {
          ...q,
          ...me,
          href: V.absoluteURL || Q,
          onClick: V.isExternal || d ? u : ne,
          ref: ev(A, W),
          target: p,
          "data-discover": !G && s === "render" ? "true" : void 0
        }
      )
    );
    return I && !G ? /* @__PURE__ */ w.createElement(w.Fragment, null, ee, /* @__PURE__ */ w.createElement(Wp, { page: Q })) : ee;
  }
);
Dh.displayName = "Link";
var nv = w.forwardRef(
  function({
    "aria-current": u = "page",
    caseSensitive: s = !1,
    className: o = "",
    end: c = !1,
    style: d,
    to: m,
    viewTransition: y,
    children: p,
    ...g
  }, E) {
    let T = Oi(m, { relative: g.relative }), _ = Cn(), q = w.useContext(yr), { navigator: A, basename: L } = w.useContext($t), D = q != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    fv(T) && y === !0, G = A.encodeLocation ? A.encodeLocation(T).pathname : T.pathname, V = _.pathname, Q = q && q.navigation && q.navigation.location ? q.navigation.location.pathname : null;
    s || (V = V.toLowerCase(), Q = Q ? Q.toLowerCase() : null, G = G.toLowerCase()), Q && L && (Q = Cl(Q, L) || Q);
    const I = G !== "/" && G.endsWith("/") ? G.length - 1 : G.length;
    let W = V === G || !c && V.startsWith(G) && V.charAt(I) === "/", me = Q != null && (Q === G || !c && Q.startsWith(G) && Q.charAt(G.length) === "/"), ue = {
      isActive: W,
      isPending: me,
      isTransitioning: D
    }, ne = W ? u : void 0, ee;
    typeof o == "function" ? ee = o(ue) : ee = [
      o,
      W ? "active" : null,
      me ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let ce = typeof d == "function" ? d(ue) : d;
    return /* @__PURE__ */ w.createElement(
      Dh,
      {
        ...g,
        "aria-current": ne,
        className: ee,
        ref: E,
        style: ce,
        to: m,
        viewTransition: y
      },
      typeof p == "function" ? p(ue) : p
    );
  }
);
nv.displayName = "NavLink";
var av = w.forwardRef(
  ({
    discover: a = "render",
    fetcherKey: u,
    navigate: s,
    reloadDocument: o,
    replace: c,
    state: d,
    method: m = ur,
    action: y,
    onSubmit: p,
    relative: g,
    preventScrollReset: E,
    viewTransition: T,
    unstable_defaultShouldRevalidate: _,
    ...q
  }, A) => {
    let { unstable_useTransitions: L } = w.useContext($t), D = ov(), G = cv(y, { relative: g }), V = m.toLowerCase() === "get" ? "get" : "post", Q = typeof y == "string" && Oh.test(y), I = (W) => {
      if (p && p(W), W.defaultPrevented) return;
      W.preventDefault();
      let me = W.nativeEvent.submitter, ue = me?.getAttribute("formmethod") || m, ne = () => D(me || W.currentTarget, {
        fetcherKey: u,
        method: ue,
        navigate: s,
        replace: c,
        state: d,
        relative: g,
        preventScrollReset: E,
        viewTransition: T,
        unstable_defaultShouldRevalidate: _
      });
      L && s !== !1 ? w.startTransition(() => ne()) : ne();
    };
    return /* @__PURE__ */ w.createElement(
      "form",
      {
        ref: A,
        method: V,
        action: G,
        onSubmit: o ? p : I,
        ...q,
        "data-discover": !Q && a === "render" ? "true" : void 0
      }
    );
  }
);
av.displayName = "Form";
function iv(a) {
  return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Mh(a) {
  let u = w.useContext(ba);
  return Xe(u, iv(a)), u;
}
function uv(a, {
  target: u,
  replace: s,
  state: o,
  preventScrollReset: c,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: y,
  unstable_useTransitions: p
} = {}) {
  let g = yp(), E = Cn(), T = Oi(a, { relative: d });
  return w.useCallback(
    (_) => {
      if (Hp(_, u)) {
        _.preventDefault();
        let q = s !== void 0 ? s : wi(E) === wi(T), A = () => g(a, {
          replace: q,
          state: o,
          preventScrollReset: c,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: y
        });
        p ? w.startTransition(() => A()) : A();
      }
    },
    [
      E,
      g,
      T,
      s,
      o,
      u,
      a,
      c,
      d,
      m,
      y,
      p
    ]
  );
}
var rv = 0, sv = () => `__${String(++rv)}__`;
function ov() {
  let { router: a } = Mh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: u } = w.useContext($t), s = Cp(), o = a.fetch, c = a.navigate;
  return w.useCallback(
    async (d, m = {}) => {
      let { action: y, method: p, encType: g, formData: E, body: T } = Gp(
        d,
        u
      );
      if (m.navigate === !1) {
        let _ = m.fetcherKey || sv();
        await o(_, s, m.action || y, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: E,
          body: T,
          formMethod: m.method || p,
          formEncType: m.encType || g,
          flushSync: m.flushSync
        });
      } else
        await c(m.action || y, {
          unstable_defaultShouldRevalidate: m.unstable_defaultShouldRevalidate,
          preventScrollReset: m.preventScrollReset,
          formData: E,
          body: T,
          formMethod: m.method || p,
          formEncType: m.encType || g,
          replace: m.replace,
          state: m.state,
          fromRouteId: s,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [o, c, u, s]
  );
}
function cv(a, { relative: u } = {}) {
  let { basename: s } = w.useContext($t), o = w.useContext(Nl);
  Xe(o, "useFormAction must be used inside a RouteContext");
  let [c] = o.matches.slice(-1), d = { ...Oi(a || ".", { relative: u }) }, m = Cn();
  if (a == null) {
    d.search = m.search;
    let y = new URLSearchParams(d.search), p = y.getAll("index");
    if (p.some((E) => E === "")) {
      y.delete("index"), p.filter((T) => T).forEach((T) => y.append("index", T));
      let E = y.toString();
      d.search = E ? `?${E}` : "";
    }
  }
  return (!a || a === ".") && c.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), s !== "/" && (d.pathname = d.pathname === "/" ? s : xl([s, d.pathname])), wi(d);
}
function fv(a, { relative: u } = {}) {
  let s = w.useContext(bh);
  Xe(
    s != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Mh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), c = Oi(a, { relative: u });
  if (!s.isTransitioning)
    return !1;
  let d = Cl(s.currentLocation.pathname, o) || s.currentLocation.pathname, m = Cl(s.nextLocation.pathname, o) || s.nextLocation.pathname;
  return mr(c.pathname, m) != null || mr(c.pathname, d) != null;
}
var Qo = { exports: {} }, dt = {};
var zm;
function dv() {
  if (zm) return dt;
  zm = 1;
  var a = fc();
  function u(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        g += "&args[]=" + encodeURIComponent(arguments[E]);
    }
    return "Minified React error #" + p + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var o = {
    d: {
      f: s,
      r: function() {
        throw Error(u(522));
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
  function d(p, g, E) {
    var T = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: T == null ? null : "" + T,
      children: p,
      containerInfo: g,
      implementation: E
    };
  }
  var m = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(p, g) {
    if (p === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, dt.createPortal = function(p, g) {
    var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(u(299));
    return d(p, g, null, E);
  }, dt.flushSync = function(p) {
    var g = m.T, E = o.p;
    try {
      if (m.T = null, o.p = 2, p) return p();
    } finally {
      m.T = g, o.p = E, o.d.f();
    }
  }, dt.preconnect = function(p, g) {
    typeof p == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(p, g));
  }, dt.prefetchDNS = function(p) {
    typeof p == "string" && o.d.D(p);
  }, dt.preinit = function(p, g) {
    if (typeof p == "string" && g && typeof g.as == "string") {
      var E = g.as, T = y(E, g.crossOrigin), _ = typeof g.integrity == "string" ? g.integrity : void 0, q = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      E === "style" ? o.d.S(
        p,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: T,
          integrity: _,
          fetchPriority: q
        }
      ) : E === "script" && o.d.X(p, {
        crossOrigin: T,
        integrity: _,
        fetchPriority: q,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, dt.preinitModule = function(p, g) {
    if (typeof p == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var E = y(
            g.as,
            g.crossOrigin
          );
          o.d.M(p, {
            crossOrigin: E,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && o.d.M(p);
  }, dt.preload = function(p, g) {
    if (typeof p == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var E = g.as, T = y(E, g.crossOrigin);
      o.d.L(p, E, {
        crossOrigin: T,
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
        var E = y(g.as, g.crossOrigin);
        o.d.m(p, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: E,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else o.d.m(p);
  }, dt.requestFormReset = function(p) {
    o.d.r(p);
  }, dt.unstable_batchedUpdates = function(p, g) {
    return p(g);
  }, dt.useFormState = function(p, g, E) {
    return m.H.useFormState(p, g, E);
  }, dt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, dt.version = "19.2.3", dt;
}
var Lm;
function mv() {
  if (Lm) return Qo.exports;
  Lm = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (u) {
        console.error(u);
      }
  }
  return a(), Qo.exports = dv(), Qo.exports;
}
var Zo = { exports: {} }, Ei = {}, Jo = { exports: {} }, $o = {};
var jm;
function hv() {
  return jm || (jm = 1, (function(a) {
    function u(X, Y) {
      var k = X.length;
      X.push(Y);
      e: for (; 0 < k; ) {
        var re = k - 1 >>> 1, Ae = X[re];
        if (0 < c(Ae, Y))
          X[re] = Y, X[k] = Ae, k = re;
        else break e;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function o(X) {
      if (X.length === 0) return null;
      var Y = X[0], k = X.pop();
      if (k !== Y) {
        X[0] = k;
        e: for (var re = 0, Ae = X.length, Te = Ae >>> 1; re < Te; ) {
          var S = 2 * (re + 1) - 1, j = X[S], K = S + 1, Z = X[K];
          if (0 > c(j, k))
            K < Ae && 0 > c(Z, j) ? (X[re] = Z, X[K] = k, re = K) : (X[re] = j, X[S] = k, re = S);
          else if (K < Ae && 0 > c(Z, k))
            X[re] = Z, X[K] = k, re = K;
          else break e;
        }
      }
      return Y;
    }
    function c(X, Y) {
      var k = X.sortIndex - Y.sortIndex;
      return k !== 0 ? k : X.id - Y.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, y = m.now();
      a.unstable_now = function() {
        return m.now() - y;
      };
    }
    var p = [], g = [], E = 1, T = null, _ = 3, q = !1, A = !1, L = !1, D = !1, G = typeof setTimeout == "function" ? setTimeout : null, V = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function I(X) {
      for (var Y = s(g); Y !== null; ) {
        if (Y.callback === null) o(g);
        else if (Y.startTime <= X)
          o(g), Y.sortIndex = Y.expirationTime, u(p, Y);
        else break;
        Y = s(g);
      }
    }
    function W(X) {
      if (L = !1, I(X), !A)
        if (s(p) !== null)
          A = !0, me || (me = !0, Ne());
        else {
          var Y = s(g);
          Y !== null && ke(W, Y.startTime - X);
        }
    }
    var me = !1, ue = -1, ne = 5, ee = -1;
    function ce() {
      return D ? !0 : !(a.unstable_now() - ee < ne);
    }
    function Le() {
      if (D = !1, me) {
        var X = a.unstable_now();
        ee = X;
        var Y = !0;
        try {
          e: {
            A = !1, L && (L = !1, V(ue), ue = -1), q = !0;
            var k = _;
            try {
              t: {
                for (I(X), T = s(p); T !== null && !(T.expirationTime > X && ce()); ) {
                  var re = T.callback;
                  if (typeof re == "function") {
                    T.callback = null, _ = T.priorityLevel;
                    var Ae = re(
                      T.expirationTime <= X
                    );
                    if (X = a.unstable_now(), typeof Ae == "function") {
                      T.callback = Ae, I(X), Y = !0;
                      break t;
                    }
                    T === s(p) && o(p), I(X);
                  } else o(p);
                  T = s(p);
                }
                if (T !== null) Y = !0;
                else {
                  var Te = s(g);
                  Te !== null && ke(
                    W,
                    Te.startTime - X
                  ), Y = !1;
                }
              }
              break e;
            } finally {
              T = null, _ = k, q = !1;
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
    function ke(X, Y) {
      ue = G(function() {
        X(a.unstable_now());
      }, Y);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, a.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ne = 0 < X ? Math.floor(1e3 / X) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return _;
    }, a.unstable_next = function(X) {
      switch (_) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = _;
      }
      var k = _;
      _ = Y;
      try {
        return X();
      } finally {
        _ = k;
      }
    }, a.unstable_requestPaint = function() {
      D = !0;
    }, a.unstable_runWithPriority = function(X, Y) {
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
      var k = _;
      _ = X;
      try {
        return Y();
      } finally {
        _ = k;
      }
    }, a.unstable_scheduleCallback = function(X, Y, k) {
      var re = a.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? re + k : re) : k = re, X) {
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
      return Ae = k + Ae, X = {
        id: E++,
        callback: Y,
        priorityLevel: X,
        startTime: k,
        expirationTime: Ae,
        sortIndex: -1
      }, k > re ? (X.sortIndex = k, u(g, X), s(p) === null && X === s(g) && (L ? (V(ue), ue = -1) : L = !0, ke(W, k - re))) : (X.sortIndex = Ae, u(p, X), A || q || (A = !0, me || (me = !0, Ne()))), X;
    }, a.unstable_shouldYield = ce, a.unstable_wrapCallback = function(X) {
      var Y = _;
      return function() {
        var k = _;
        _ = Y;
        try {
          return X.apply(this, arguments);
        } finally {
          _ = k;
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
  if (Bm) return Ei;
  Bm = 1;
  var a = {};
  var u = gv(), s = fc(), o = mv();
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
  function E(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var l = e, n = t; ; ) {
      var i = l.return;
      if (i === null) break;
      var r = i.alternate;
      if (r === null) {
        if (n = i.return, n !== null) {
          l = n;
          continue;
        }
        break;
      }
      if (i.child === r.child) {
        for (r = i.child; r; ) {
          if (r === l) return g(i), e;
          if (r === n) return g(i), t;
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (l.return !== n.return) l = i, n = r;
      else {
        for (var f = !1, h = i.child; h; ) {
          if (h === l) {
            f = !0, l = i, n = r;
            break;
          }
          if (h === n) {
            f = !0, n = i, l = r;
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = r.child; h; ) {
            if (h === l) {
              f = !0, l = r, n = i;
              break;
            }
            if (h === n) {
              f = !0, n = r, l = i;
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(c(189));
        }
      }
      if (l.alternate !== n) throw Error(c(190));
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
  var _ = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), A = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), V = /* @__PURE__ */ Symbol.for("react.profiler"), Q = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), me = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), ne = /* @__PURE__ */ Symbol.for("react.memo"), ee = /* @__PURE__ */ Symbol.for("react.lazy"), ce = /* @__PURE__ */ Symbol.for("react.activity"), Le = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ne = Symbol.iterator;
  function _e(e) {
    return e === null || typeof e != "object" ? null : (e = Ne && e[Ne] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ke(e) {
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
      case ue:
        return "SuspenseList";
      case ce:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case I:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ne:
          return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
        case ee:
          t = e._payload, e = e._init;
          try {
            return ke(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, Y = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, k = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ae = [], Te = -1;
  function S(e) {
    return { current: e };
  }
  function j(e) {
    0 > Te || (e.current = Ae[Te], Ae[Te] = null, Te--);
  }
  function K(e, t) {
    Te++, Ae[Te] = e.current, e.current = t;
  }
  var Z = S(null), ae = S(null), J = S(null), Re = S(null);
  function te(e, t) {
    switch (K(J, t), K(ae, e), K(Z, null), t.nodeType) {
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
    j(Z), j(ae), j(J);
  }
  function Ft(e) {
    e.memoizedState !== null && K(Re, e);
    var t = Z.current, l = J0(t, e.type);
    t !== l && (K(ae, e), K(Z, l));
  }
  function On(e) {
    ae.current === e && (j(Z), j(ae)), Re.current === e && (j(Re), mi._currentValue = re);
  }
  var wa, be;
  function ft(e) {
    if (wa === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        wa = t && t[1] || "", be = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + wa + e + be;
  }
  var lt = !1;
  function _l(e, t) {
    if (!e || lt) return "";
    lt = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
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
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var i = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name"
      );
      i && i.configurable && Object.defineProperty(
        n.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = n.DetermineComponentFrameRoot(), f = r[0], h = r[1];
      if (f && h) {
        var b = f.split(`
`), N = h.split(`
`);
        for (i = n = 0; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); )
          n++;
        for (; i < N.length && !N[i].includes(
          "DetermineComponentFrameRoot"
        ); )
          i++;
        if (n === b.length || i === N.length)
          for (n = b.length - 1, i = N.length - 1; 1 <= n && 0 <= i && b[n] !== N[i]; )
            i--;
        for (; 1 <= n && 0 <= i; n--, i--)
          if (b[n] !== N[i]) {
            if (n !== 1 || i !== 1)
              do
                if (n--, i--, 0 > i || b[n] !== N[i]) {
                  var z = `
` + b[n].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= n && 0 <= i);
            break;
          }
      }
    } finally {
      lt = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? ft(l) : "";
  }
  function ln(e, t) {
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
        return _l(e.type, !1);
      case 11:
        return _l(e.type.render, !1);
      case 1:
        return _l(e.type, !0);
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
        t += ln(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var xr = Object.prototype.hasOwnProperty, Ar = u.unstable_scheduleCallback, Cr = u.unstable_cancelCallback, sg = u.unstable_shouldYield, og = u.unstable_requestPaint, xt = u.unstable_now, cg = u.unstable_getCurrentPriorityLevel, wc = u.unstable_ImmediatePriority, xc = u.unstable_UserBlockingPriority, Hi = u.unstable_NormalPriority, fg = u.unstable_LowPriority, Ac = u.unstable_IdlePriority, dg = u.log, mg = u.unstable_setDisableYieldValue, xa = null, At = null;
  function Ol(e) {
    if (typeof dg == "function" && mg(e), At && typeof At.setStrictMode == "function")
      try {
        At.setStrictMode(xa, e);
      } catch {
      }
  }
  var Ct = Math.clz32 ? Math.clz32 : yg, hg = Math.log, gg = Math.LN2;
  function yg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hg(e) / gg | 0) | 0;
  }
  var Bi = 256, qi = 262144, Gi = 4194304;
  function nn(e) {
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
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0, r = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = n & 134217727;
    return h !== 0 ? (n = h & ~r, n !== 0 ? i = nn(n) : (f &= h, f !== 0 ? i = nn(f) : l || (l = h & ~e, l !== 0 && (i = nn(l))))) : (h = n & ~r, h !== 0 ? i = nn(h) : f !== 0 ? i = nn(f) : l || (l = n & ~e, l !== 0 && (i = nn(l)))), i === 0 ? 0 : t !== 0 && t !== i && (t & r) === 0 && (r = i & -i, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : i;
  }
  function Aa(e, t) {
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
  function Nr(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function Ca(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function vg(e, t, l, n, i, r) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var h = e.entanglements, b = e.expirationTimes, N = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var z = 31 - Ct(l), B = 1 << z;
      h[z] = 0, b[z] = -1;
      var O = N[z];
      if (O !== null)
        for (N[z] = null, z = 0; z < O.length; z++) {
          var U = O[z];
          U !== null && (U.lane &= -536870913);
        }
      l &= ~B;
    }
    n !== 0 && Nc(e, n, 0), r !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t));
  }
  function Nc(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - Ct(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function _c(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - Ct(l), i = 1 << n;
      i & t | e[n] & t && (e[n] |= t), l &= ~i;
    }
  }
  function Oc(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : _r(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function _r(e) {
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
  function Or(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Dc() {
    var e = k.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : pm(e.type));
  }
  function Mc(e, t) {
    var l = k.p;
    try {
      return k.p = e, t();
    } finally {
      k.p = l;
    }
  }
  var Dl = Math.random().toString(36).slice(2), ut = "__reactFiber$" + Dl, gt = "__reactProps$" + Dl, Dn = "__reactContainer$" + Dl, Dr = "__reactEvents$" + Dl, Eg = "__reactListeners$" + Dl, bg = "__reactHandles$" + Dl, Uc = "__reactResources$" + Dl, Na = "__reactMarker$" + Dl;
  function Mr(e) {
    delete e[ut], delete e[gt], delete e[Dr], delete e[Eg], delete e[bg];
  }
  function Mn(e) {
    var t = e[ut];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[Dn] || l[ut]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = tm(e); e !== null; ) {
            if (l = e[ut]) return l;
            e = tm(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function Un(e) {
    if (e = e[ut] || e[Dn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function _a(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function zn(e) {
    var t = e[Uc];
    return t || (t = e[Uc] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function nt(e) {
    e[Na] = !0;
  }
  var zc = /* @__PURE__ */ new Set(), Lc = {};
  function an(e, t) {
    Ln(e, t), Ln(e + "Capture", t);
  }
  function Ln(e, t) {
    for (Lc[e] = t, e = 0; e < t.length; e++)
      zc.add(t[e]);
  }
  var Sg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jc = {}, Hc = {};
  function Rg(e) {
    return xr.call(Hc, e) ? !0 : xr.call(jc, e) ? !1 : Sg.test(e) ? Hc[e] = !0 : (jc[e] = !0, !1);
  }
  function Xi(e, t, l) {
    if (Rg(t))
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
  function ki(e, t, l) {
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
  function rl(e, t, l, n) {
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
  function jt(e) {
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
  function Tg(e, t, l) {
    var n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var i = n.get, r = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return i.call(this);
        },
        set: function(f) {
          l = "" + f, r.call(this, f);
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
  function Ur(e) {
    if (!e._valueTracker) {
      var t = Bc(e) ? "checked" : "value";
      e._valueTracker = Tg(
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
    var l = t.getValue(), n = "";
    return e && (n = Bc(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function Vi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var wg = /[\n"\\]/g;
  function Ht(e) {
    return e.replace(
      wg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function zr(e, t, l, n, i, r, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? Lr(e, f, jt(t)) : l != null ? Lr(e, f, jt(l)) : n != null && e.removeAttribute("value"), i == null && r != null && (e.defaultChecked = !!r), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + jt(h) : e.removeAttribute("name");
  }
  function Gc(e, t, l, n, i, r, f, h) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        Ur(e);
        return;
      }
      l = l != null ? "" + jt(l) : "", t = t != null ? "" + jt(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? i, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = h ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Ur(e);
  }
  function Lr(e, t, l) {
    t === "number" && Vi(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function jn(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var i = 0; i < l.length; i++)
        t["$" + l[i]] = !0;
      for (l = 0; l < e.length; l++)
        i = t.hasOwnProperty("$" + e[l].value), e[l].selected !== i && (e[l].selected = i), i && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + jt(l), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === l) {
          e[i].selected = !0, n && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Yc(e, t, l) {
    if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + jt(l) : "";
  }
  function Xc(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(c(92));
        if (X(n)) {
          if (1 < n.length) throw Error(c(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = jt(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), Ur(e);
  }
  function Hn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
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
  function kc(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || xg.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function Vc(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var i in t)
        n = t[i], t.hasOwnProperty(i) && l[i] !== n && kc(e, i, n);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && kc(e, r, t[r]);
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
  function sl() {
  }
  var Hr = null;
  function Br(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Bn = null, qn = null;
  function Kc(e) {
    var t = Un(e);
    if (t && (e = t.stateNode)) {
      var l = e[gt] || null;
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
              'input[name="' + Ht(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var i = n[gt] || null;
                if (!i) throw Error(c(90));
                zr(
                  n,
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
              n = l[t], n.form === e.form && qc(n);
          }
          break e;
        case "textarea":
          Yc(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && jn(e, !!l.multiple, t, !1);
      }
    }
  }
  var qr = !1;
  function Qc(e, t, l) {
    if (qr) return e(t, l);
    qr = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (qr = !1, (Bn !== null || qn !== null) && (Mu(), Bn && (t = Bn, e = qn, qn = Bn = null, Kc(t), e)))
        for (t = 0; t < e.length; t++) Kc(e[t]);
    }
  }
  function Oa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var n = l[gt] || null;
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
        c(231, t, typeof l)
      );
    return l;
  }
  var ol = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Gr = !1;
  if (ol)
    try {
      var Da = {};
      Object.defineProperty(Da, "passive", {
        get: function() {
          Gr = !0;
        }
      }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
    } catch {
      Gr = !1;
    }
  var Ml = null, Yr = null, Qi = null;
  function Zc() {
    if (Qi) return Qi;
    var e, t = Yr, l = t.length, n, i = "value" in Ml ? Ml.value : Ml.textContent, r = i.length;
    for (e = 0; e < l && t[e] === i[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === i[r - n]; n++) ;
    return Qi = i.slice(e, 1 < n ? 1 - n : void 0);
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
  function yt(e) {
    function t(l, n, i, r, f) {
      this._reactName = l, this._targetInst = i, this.type = n, this.nativeEvent = r, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(r) : r[h]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ji : Jc, this.isPropagationStopped = Jc, this;
    }
    return _(t.prototype, {
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
  var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, $i = yt(un), Ma = _({}, un, { view: 0, detail: 0 }), Ng = yt(Ma), Xr, kr, Ua, Fi = _({}, Ma, {
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
    getModifierState: Kr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ua && (Ua && e.type === "mousemove" ? (Xr = e.screenX - Ua.screenX, kr = e.screenY - Ua.screenY) : kr = Xr = 0, Ua = e), Xr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : kr;
    }
  }), $c = yt(Fi), _g = _({}, Fi, { dataTransfer: 0 }), Og = yt(_g), Dg = _({}, Ma, { relatedTarget: 0 }), Vr = yt(Dg), Mg = _({}, un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ug = yt(Mg), zg = _({}, un, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lg = yt(zg), jg = _({}, un, { data: 0 }), Fc = yt(jg), Hg = {
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
  function Kr() {
    return Gg;
  }
  var Yg = _({}, Ma, {
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
    getModifierState: Kr,
    charCode: function(e) {
      return e.type === "keypress" ? Zi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Zi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Xg = yt(Yg), kg = _({}, Fi, {
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
  }), Wc = yt(kg), Vg = _({}, Ma, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Kr
  }), Kg = yt(Vg), Qg = _({}, un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zg = yt(Qg), Jg = _({}, Fi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $g = yt(Jg), Fg = _({}, un, {
    newState: 0,
    oldState: 0
  }), Wg = yt(Fg), Ig = [9, 13, 27, 32], Qr = ol && "CompositionEvent" in window, za = null;
  ol && "documentMode" in document && (za = document.documentMode);
  var Pg = ol && "TextEvent" in window && !za, Ic = ol && (!Qr || za && 8 < za && 11 >= za), Pc = " ", ef = !1;
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
  function lf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Gn = !1;
  function ey(e, t) {
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
  function ty(e, t) {
    if (Gn)
      return e === "compositionend" || !Qr && tf(e, t) ? (e = Zc(), Qi = Yr = Ml = null, Gn = !1, e) : null;
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
  function nf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ly[e.type] : t === "textarea";
  }
  function af(e, t, l, n) {
    Bn ? qn ? qn.push(n) : qn = [n] : Bn = n, t = qu(t, "onChange"), 0 < t.length && (l = new $i(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var La = null, ja = null;
  function ny(e) {
    Y0(e, 0);
  }
  function Wi(e) {
    var t = _a(e);
    if (qc(t)) return e;
  }
  function uf(e, t) {
    if (e === "change") return t;
  }
  var rf = !1;
  if (ol) {
    var Zr;
    if (ol) {
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
    La && (La.detachEvent("onpropertychange", cf), ja = La = null);
  }
  function cf(e) {
    if (e.propertyName === "value" && Wi(ja)) {
      var t = [];
      af(
        t,
        ja,
        e,
        Br(e)
      ), Qc(ny, t);
    }
  }
  function ay(e, t, l) {
    e === "focusin" ? (of(), La = t, ja = l, La.attachEvent("onpropertychange", cf)) : e === "focusout" && of();
  }
  function iy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Wi(ja);
  }
  function uy(e, t) {
    if (e === "click") return Wi(t);
  }
  function ry(e, t) {
    if (e === "input" || e === "change")
      return Wi(t);
  }
  function sy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Nt = typeof Object.is == "function" ? Object.is : sy;
  function Ha(e, t) {
    if (Nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var i = l[n];
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
      l = ff(l);
    }
  }
  function mf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function hf(e) {
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
  function $r(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var oy = ol && "documentMode" in document && 11 >= document.documentMode, Yn = null, Fr = null, Ba = null, Wr = !1;
  function gf(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Wr || Yn == null || Yn !== Vi(n) || (n = Yn, "selectionStart" in n && $r(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), Ba && Ha(Ba, n) || (Ba = n, n = qu(Fr, "onSelect"), 0 < n.length && (t = new $i(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = Yn)));
  }
  function rn(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Xn = {
    animationend: rn("Animation", "AnimationEnd"),
    animationiteration: rn("Animation", "AnimationIteration"),
    animationstart: rn("Animation", "AnimationStart"),
    transitionrun: rn("Transition", "TransitionRun"),
    transitionstart: rn("Transition", "TransitionStart"),
    transitioncancel: rn("Transition", "TransitionCancel"),
    transitionend: rn("Transition", "TransitionEnd")
  }, Ir = {}, yf = {};
  ol && (yf = document.createElement("div").style, "AnimationEvent" in window || (delete Xn.animationend.animation, delete Xn.animationiteration.animation, delete Xn.animationstart.animation), "TransitionEvent" in window || delete Xn.transitionend.transition);
  function sn(e) {
    if (Ir[e]) return Ir[e];
    if (!Xn[e]) return e;
    var t = Xn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in yf)
        return Ir[e] = t[l];
    return e;
  }
  var pf = sn("animationend"), vf = sn("animationiteration"), Ef = sn("animationstart"), cy = sn("transitionrun"), fy = sn("transitionstart"), dy = sn("transitioncancel"), bf = sn("transitionend"), Sf = /* @__PURE__ */ new Map(), Pr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Pr.push("scrollEnd");
  function Wt(e, t) {
    Sf.set(e, t), an(t, [e]);
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
    } else if (typeof a == "object" && typeof a.emit == "function") {
      a.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Bt = [], kn = 0, es = 0;
  function Pi() {
    for (var e = kn, t = es = kn = 0; t < e; ) {
      var l = Bt[t];
      Bt[t++] = null;
      var n = Bt[t];
      Bt[t++] = null;
      var i = Bt[t];
      Bt[t++] = null;
      var r = Bt[t];
      if (Bt[t++] = null, n !== null && i !== null) {
        var f = n.pending;
        f === null ? i.next = i : (i.next = f.next, f.next = i), n.pending = i;
      }
      r !== 0 && Rf(l, i, r);
    }
  }
  function eu(e, t, l, n) {
    Bt[kn++] = e, Bt[kn++] = t, Bt[kn++] = l, Bt[kn++] = n, es |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function ts(e, t, l, n) {
    return eu(e, t, l, n), tu(e);
  }
  function on(e, t) {
    return eu(e, null, null, t), tu(e);
  }
  function Rf(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var i = !1, r = e.return; r !== null; )
      r.childLanes |= l, n = r.alternate, n !== null && (n.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (i = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, i && t !== null && (i = 31 - Ct(l), e = r.hiddenUpdates, n = e[i], n === null ? e[i] = [t] : n.push(t), t.lane = l | 536870912), r) : null;
  }
  function tu(e) {
    if (50 < ui)
      throw ui = 0, co = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Vn = {};
  function my(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _t(e, t, l, n) {
    return new my(e, t, l, n);
  }
  function ls(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function cl(e, t) {
    var l = e.alternate;
    return l === null ? (l = _t(
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
  function lu(e, t, l, n, i, r) {
    var f = 0;
    if (n = e, typeof e == "function") ls(e) && (f = 1);
    else if (typeof e == "string")
      f = v1(
        e,
        l,
        Z.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ce:
          return e = _t(31, l, t, i), e.elementType = ce, e.lanes = r, e;
        case D:
          return cn(l.children, i, r, t);
        case G:
          f = 8, i |= 24;
          break;
        case V:
          return e = _t(12, l, t, i | 2), e.elementType = V, e.lanes = r, e;
        case me:
          return e = _t(13, l, t, i), e.elementType = me, e.lanes = r, e;
        case ue:
          return e = _t(19, l, t, i), e.elementType = ue, e.lanes = r, e;
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
              case ne:
                f = 14;
                break e;
              case ee:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = _t(f, l, t, i), t.elementType = e, t.type = n, t.lanes = r, t;
  }
  function cn(e, t, l, n) {
    return e = _t(7, e, n, t), e.lanes = l, e;
  }
  function ns(e, t, l) {
    return e = _t(6, e, null, t), e.lanes = l, e;
  }
  function wf(e) {
    var t = _t(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function as(e, t, l) {
    return t = _t(
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
  function qt(e, t) {
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
  var Kn = [], Qn = 0, nu = null, qa = 0, Gt = [], Yt = 0, Ul = null, ll = 1, nl = "";
  function fl(e, t) {
    Kn[Qn++] = qa, Kn[Qn++] = nu, nu = e, qa = t;
  }
  function Af(e, t, l) {
    Gt[Yt++] = ll, Gt[Yt++] = nl, Gt[Yt++] = Ul, Ul = e;
    var n = ll;
    e = nl;
    var i = 32 - Ct(n) - 1;
    n &= ~(1 << i), l += 1;
    var r = 32 - Ct(t) + i;
    if (30 < r) {
      var f = i - i % 5;
      r = (n & (1 << f) - 1).toString(32), n >>= f, i -= f, ll = 1 << 32 - Ct(t) + i | l << i | n, nl = r + e;
    } else
      ll = 1 << r | l << i | n, nl = e;
  }
  function is(e) {
    e.return !== null && (fl(e, 1), Af(e, 1, 0));
  }
  function us(e) {
    for (; e === nu; )
      nu = Kn[--Qn], Kn[Qn] = null, qa = Kn[--Qn], Kn[Qn] = null;
    for (; e === Ul; )
      Ul = Gt[--Yt], Gt[Yt] = null, nl = Gt[--Yt], Gt[Yt] = null, ll = Gt[--Yt], Gt[Yt] = null;
  }
  function Cf(e, t) {
    Gt[Yt++] = ll, Gt[Yt++] = nl, Gt[Yt++] = Ul, ll = t.id, nl = t.overflow, Ul = e;
  }
  var rt = null, Be = null, Se = !1, zl = null, Xt = !1, rs = Error(c(519));
  function Ll(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ga(qt(t, e)), rs;
  }
  function Nf(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[ut] = e, t[gt] = n, l) {
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
        for (l = 0; l < si.length; l++)
          ye(si[l], t);
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
        ye("invalid", t);
        break;
      case "textarea":
        ye("invalid", t), Xc(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || K0(t.textContent, l) ? (n.popover != null && (ye("beforetoggle", t), ye("toggle", t)), n.onScroll != null && ye("scroll", t), n.onScrollEnd != null && ye("scrollend", t), n.onClick != null && (t.onclick = sl), t = !0) : t = !1, t || Ll(e, !0);
  }
  function _f(e) {
    for (rt = e.return; rt; )
      switch (rt.tag) {
        case 5:
        case 31:
        case 13:
          Xt = !1;
          return;
        case 27:
        case 3:
          Xt = !0;
          return;
        default:
          rt = rt.return;
      }
  }
  function Zn(e) {
    if (e !== rt) return !1;
    if (!Se) return _f(e), Se = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ao(e.type, e.memoizedProps)), l = !l), l && Be && Ll(e), _f(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Be = em(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Be = em(e);
    } else
      t === 27 ? (t = Be, $l(e.type) ? (e = Do, Do = null, Be = e) : Be = t) : Be = rt ? Vt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fn() {
    Be = rt = null, Se = !1;
  }
  function ss() {
    var e = zl;
    return e !== null && (bt === null ? bt = e : bt.push.apply(
      bt,
      e
    ), zl = null), e;
  }
  function Ga(e) {
    zl === null ? zl = [e] : zl.push(e);
  }
  var os = S(null), dn = null, dl = null;
  function jl(e, t, l) {
    K(os, t._currentValue), t._currentValue = l;
  }
  function ml(e) {
    e._currentValue = os.current, j(os);
  }
  function cs(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function fs(e, t, l, n) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null; ) {
      var r = i.dependencies;
      if (r !== null) {
        var f = i.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var h = r;
          r = i;
          for (var b = 0; b < t.length; b++)
            if (h.context === t[b]) {
              r.lanes |= l, h = r.alternate, h !== null && (h.lanes |= l), cs(
                r.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          r = h.next;
        }
      } else if (i.tag === 18) {
        if (f = i.return, f === null) throw Error(c(341));
        f.lanes |= l, r = f.alternate, r !== null && (r.lanes |= l), cs(f, l, e), f = null;
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
  function Jn(e, t, l, n) {
    e = null;
    for (var i = t, r = !1; i !== null; ) {
      if (!r) {
        if ((i.flags & 524288) !== 0) r = !0;
        else if ((i.flags & 262144) !== 0) break;
      }
      if (i.tag === 10) {
        var f = i.alternate;
        if (f === null) throw Error(c(387));
        if (f = f.memoizedProps, f !== null) {
          var h = i.type;
          Nt(i.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (i === Re.current) {
        if (f = i.alternate, f === null) throw Error(c(387));
        f.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e !== null ? e.push(mi) : e = [mi]);
      }
      i = i.return;
    }
    e !== null && fs(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function au(e) {
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
  function mn(e) {
    dn = e, dl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function st(e) {
    return Of(dn, e);
  }
  function iu(e, t) {
    return dn === null && mn(e), Of(e, t);
  }
  function Of(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, dl === null) {
      if (e === null) throw Error(c(308));
      dl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else dl = dl.next = t;
    return l;
  }
  var hy = typeof AbortController < "u" ? AbortController : function() {
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
  }, gy = u.unstable_scheduleCallback, yy = u.unstable_NormalPriority, We = {
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
  function Ya(e) {
    e.refCount--, e.refCount === 0 && gy(yy, function() {
      e.controller.abort();
    });
  }
  var Xa = null, ms = 0, $n = 0, Fn = null;
  function py(e, t) {
    if (Xa === null) {
      var l = Xa = [];
      ms = 0, $n = po(), Fn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return ms++, t.then(Df, Df), t;
  }
  function Df() {
    if (--ms === 0 && Xa !== null) {
      Fn !== null && (Fn.status = "fulfilled");
      var e = Xa;
      Xa = null, $n = 0, Fn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function vy(e, t) {
    var l = [], n = {
      status: "pending",
      value: null,
      reason: null,
      then: function(i) {
        l.push(i);
      }
    };
    return e.then(
      function() {
        n.status = "fulfilled", n.value = t;
        for (var i = 0; i < l.length; i++) (0, l[i])(t);
      },
      function(i) {
        for (n.status = "rejected", n.reason = i, i = 0; i < l.length; i++)
          (0, l[i])(void 0);
      }
    ), n;
  }
  var Mf = Y.S;
  Y.S = function(e, t) {
    g0 = xt(), typeof t == "object" && t !== null && typeof t.then == "function" && py(e, t), Mf !== null && Mf(e, t);
  };
  var hn = S(null);
  function hs() {
    var e = hn.current;
    return e !== null ? e : je.pooledCache;
  }
  function uu(e, t) {
    t === null ? K(hn, hn.current) : K(hn, t.pool);
  }
  function Uf() {
    var e = hs();
    return e === null ? null : { parent: We._currentValue, pool: e };
  }
  var Wn = Error(c(460)), gs = Error(c(474)), ru = Error(c(542)), su = { then: function() {
  } };
  function zf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Lf(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(sl, sl), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Hf(e), e;
      default:
        if (typeof t.status == "string") t.then(sl, sl);
        else {
          if (e = je, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
          e = t, e.status = "pending", e.then(
            function(n) {
              if (t.status === "pending") {
                var i = t;
                i.status = "fulfilled", i.value = n;
              }
            },
            function(n) {
              if (t.status === "pending") {
                var i = t;
                i.status = "rejected", i.reason = n;
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
        throw yn = t, Wn;
    }
  }
  function gn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (yn = l, Wn) : l;
    }
  }
  var yn = null;
  function jf() {
    if (yn === null) throw Error(c(459));
    var e = yn;
    return yn = null, e;
  }
  function Hf(e) {
    if (e === Wn || e === ru)
      throw Error(c(483));
  }
  var In = null, ka = 0;
  function ou(e) {
    var t = ka;
    return ka += 1, In === null && (In = []), Lf(In, e, t);
  }
  function Va(e, t) {
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
        var C = x.deletions;
        C === null ? (x.deletions = [R], x.flags |= 16) : C.push(R);
      }
    }
    function l(x, R) {
      if (!e) return null;
      for (; R !== null; )
        t(x, R), R = R.sibling;
      return null;
    }
    function n(x) {
      for (var R = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? R.set(x.key, x) : R.set(x.index, x), x = x.sibling;
      return R;
    }
    function i(x, R) {
      return x = cl(x, R), x.index = 0, x.sibling = null, x;
    }
    function r(x, R, C) {
      return x.index = C, e ? (C = x.alternate, C !== null ? (C = C.index, C < R ? (x.flags |= 67108866, R) : C) : (x.flags |= 67108866, R)) : (x.flags |= 1048576, R);
    }
    function f(x) {
      return e && x.alternate === null && (x.flags |= 67108866), x;
    }
    function h(x, R, C, H) {
      return R === null || R.tag !== 6 ? (R = ns(C, x.mode, H), R.return = x, R) : (R = i(R, C), R.return = x, R);
    }
    function b(x, R, C, H) {
      var P = C.type;
      return P === D ? z(
        x,
        R,
        C.props.children,
        H,
        C.key
      ) : R !== null && (R.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ee && gn(P) === R.type) ? (R = i(R, C.props), Va(R, C), R.return = x, R) : (R = lu(
        C.type,
        C.key,
        C.props,
        null,
        x.mode,
        H
      ), Va(R, C), R.return = x, R);
    }
    function N(x, R, C, H) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== C.containerInfo || R.stateNode.implementation !== C.implementation ? (R = as(C, x.mode, H), R.return = x, R) : (R = i(R, C.children || []), R.return = x, R);
    }
    function z(x, R, C, H, P) {
      return R === null || R.tag !== 7 ? (R = cn(
        C,
        x.mode,
        H,
        P
      ), R.return = x, R) : (R = i(R, C), R.return = x, R);
    }
    function B(x, R, C) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return R = ns(
          "" + R,
          x.mode,
          C
        ), R.return = x, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case A:
            return C = lu(
              R.type,
              R.key,
              R.props,
              null,
              x.mode,
              C
            ), Va(C, R), C.return = x, C;
          case L:
            return R = as(
              R,
              x.mode,
              C
            ), R.return = x, R;
          case ee:
            return R = gn(R), B(x, R, C);
        }
        if (X(R) || _e(R))
          return R = cn(
            R,
            x.mode,
            C,
            null
          ), R.return = x, R;
        if (typeof R.then == "function")
          return B(x, ou(R), C);
        if (R.$$typeof === I)
          return B(
            x,
            iu(x, R),
            C
          );
        cu(x, R);
      }
      return null;
    }
    function O(x, R, C, H) {
      var P = R !== null ? R.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return P !== null ? null : h(x, R, "" + C, H);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case A:
            return C.key === P ? b(x, R, C, H) : null;
          case L:
            return C.key === P ? N(x, R, C, H) : null;
          case ee:
            return C = gn(C), O(x, R, C, H);
        }
        if (X(C) || _e(C))
          return P !== null ? null : z(x, R, C, H, null);
        if (typeof C.then == "function")
          return O(
            x,
            R,
            ou(C),
            H
          );
        if (C.$$typeof === I)
          return O(
            x,
            R,
            iu(x, C),
            H
          );
        cu(x, C);
      }
      return null;
    }
    function U(x, R, C, H, P) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return x = x.get(C) || null, h(R, x, "" + H, P);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case A:
            return x = x.get(
              H.key === null ? C : H.key
            ) || null, b(R, x, H, P);
          case L:
            return x = x.get(
              H.key === null ? C : H.key
            ) || null, N(R, x, H, P);
          case ee:
            return H = gn(H), U(
              x,
              R,
              C,
              H,
              P
            );
        }
        if (X(H) || _e(H))
          return x = x.get(C) || null, z(R, x, H, P, null);
        if (typeof H.then == "function")
          return U(
            x,
            R,
            C,
            ou(H),
            P
          );
        if (H.$$typeof === I)
          return U(
            x,
            R,
            C,
            iu(R, H),
            P
          );
        cu(R, H);
      }
      return null;
    }
    function $(x, R, C, H) {
      for (var P = null, we = null, F = R, fe = R = 0, Ee = null; F !== null && fe < C.length; fe++) {
        F.index > fe ? (Ee = F, F = null) : Ee = F.sibling;
        var xe = O(
          x,
          F,
          C[fe],
          H
        );
        if (xe === null) {
          F === null && (F = Ee);
          break;
        }
        e && F && xe.alternate === null && t(x, F), R = r(xe, R, fe), we === null ? P = xe : we.sibling = xe, we = xe, F = Ee;
      }
      if (fe === C.length)
        return l(x, F), Se && fl(x, fe), P;
      if (F === null) {
        for (; fe < C.length; fe++)
          F = B(x, C[fe], H), F !== null && (R = r(
            F,
            R,
            fe
          ), we === null ? P = F : we.sibling = F, we = F);
        return Se && fl(x, fe), P;
      }
      for (F = n(F); fe < C.length; fe++)
        Ee = U(
          F,
          x,
          fe,
          C[fe],
          H
        ), Ee !== null && (e && Ee.alternate !== null && F.delete(
          Ee.key === null ? fe : Ee.key
        ), R = r(
          Ee,
          R,
          fe
        ), we === null ? P = Ee : we.sibling = Ee, we = Ee);
      return e && F.forEach(function(en) {
        return t(x, en);
      }), Se && fl(x, fe), P;
    }
    function le(x, R, C, H) {
      if (C == null) throw Error(c(151));
      for (var P = null, we = null, F = R, fe = R = 0, Ee = null, xe = C.next(); F !== null && !xe.done; fe++, xe = C.next()) {
        F.index > fe ? (Ee = F, F = null) : Ee = F.sibling;
        var en = O(x, F, xe.value, H);
        if (en === null) {
          F === null && (F = Ee);
          break;
        }
        e && F && en.alternate === null && t(x, F), R = r(en, R, fe), we === null ? P = en : we.sibling = en, we = en, F = Ee;
      }
      if (xe.done)
        return l(x, F), Se && fl(x, fe), P;
      if (F === null) {
        for (; !xe.done; fe++, xe = C.next())
          xe = B(x, xe.value, H), xe !== null && (R = r(xe, R, fe), we === null ? P = xe : we.sibling = xe, we = xe);
        return Se && fl(x, fe), P;
      }
      for (F = n(F); !xe.done; fe++, xe = C.next())
        xe = U(F, x, fe, xe.value, H), xe !== null && (e && xe.alternate !== null && F.delete(xe.key === null ? fe : xe.key), R = r(xe, R, fe), we === null ? P = xe : we.sibling = xe, we = xe);
      return e && F.forEach(function(_1) {
        return t(x, _1);
      }), Se && fl(x, fe), P;
    }
    function ze(x, R, C, H) {
      if (typeof C == "object" && C !== null && C.type === D && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case A:
            e: {
              for (var P = C.key; R !== null; ) {
                if (R.key === P) {
                  if (P = C.type, P === D) {
                    if (R.tag === 7) {
                      l(
                        x,
                        R.sibling
                      ), H = i(
                        R,
                        C.props.children
                      ), H.return = x, x = H;
                      break e;
                    }
                  } else if (R.elementType === P || typeof P == "object" && P !== null && P.$$typeof === ee && gn(P) === R.type) {
                    l(
                      x,
                      R.sibling
                    ), H = i(R, C.props), Va(H, C), H.return = x, x = H;
                    break e;
                  }
                  l(x, R);
                  break;
                } else t(x, R);
                R = R.sibling;
              }
              C.type === D ? (H = cn(
                C.props.children,
                x.mode,
                H,
                C.key
              ), H.return = x, x = H) : (H = lu(
                C.type,
                C.key,
                C.props,
                null,
                x.mode,
                H
              ), Va(H, C), H.return = x, x = H);
            }
            return f(x);
          case L:
            e: {
              for (P = C.key; R !== null; ) {
                if (R.key === P)
                  if (R.tag === 4 && R.stateNode.containerInfo === C.containerInfo && R.stateNode.implementation === C.implementation) {
                    l(
                      x,
                      R.sibling
                    ), H = i(R, C.children || []), H.return = x, x = H;
                    break e;
                  } else {
                    l(x, R);
                    break;
                  }
                else t(x, R);
                R = R.sibling;
              }
              H = as(C, x.mode, H), H.return = x, x = H;
            }
            return f(x);
          case ee:
            return C = gn(C), ze(
              x,
              R,
              C,
              H
            );
        }
        if (X(C))
          return $(
            x,
            R,
            C,
            H
          );
        if (_e(C)) {
          if (P = _e(C), typeof P != "function") throw Error(c(150));
          return C = P.call(C), le(
            x,
            R,
            C,
            H
          );
        }
        if (typeof C.then == "function")
          return ze(
            x,
            R,
            ou(C),
            H
          );
        if (C.$$typeof === I)
          return ze(
            x,
            R,
            iu(x, C),
            H
          );
        cu(x, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, R !== null && R.tag === 6 ? (l(x, R.sibling), H = i(R, C), H.return = x, x = H) : (l(x, R), H = ns(C, x.mode, H), H.return = x, x = H), f(x)) : l(x, R);
    }
    return function(x, R, C, H) {
      try {
        ka = 0;
        var P = ze(
          x,
          R,
          C,
          H
        );
        return In = null, P;
      } catch (F) {
        if (F === Wn || F === ru) throw F;
        var we = _t(29, F, null, x.mode);
        return we.lanes = H, we.return = x, we;
      }
    };
  }
  var pn = Bf(!0), qf = Bf(!1), Hl = !1;
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
  function Bl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ql(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ce & 2) !== 0) {
      var i = n.pending;
      return i === null ? t.next = t : (t.next = i.next, i.next = t), n.pending = t, t = tu(e), Rf(e, null, l), t;
    }
    return eu(e, n, t, l), tu(e);
  }
  function Ka(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, _c(e, l);
    }
  }
  function vs(e, t) {
    var l = e.updateQueue, n = e.alternate;
    if (n !== null && (n = n.updateQueue, l === n)) {
      var i = null, r = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null
          };
          r === null ? i = r = f : r = r.next = f, l = l.next;
        } while (l !== null);
        r === null ? i = r = t : r = r.next = t;
      } else i = r = t;
      l = {
        baseState: n.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: r,
        shared: n.shared,
        callbacks: n.callbacks
      }, e.updateQueue = l;
      return;
    }
    e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
  }
  var Es = !1;
  function Qa() {
    if (Es) {
      var e = Fn;
      if (e !== null) throw e;
    }
  }
  function Za(e, t, l, n) {
    Es = !1;
    var i = e.updateQueue;
    Hl = !1;
    var r = i.firstBaseUpdate, f = i.lastBaseUpdate, h = i.shared.pending;
    if (h !== null) {
      i.shared.pending = null;
      var b = h, N = b.next;
      b.next = null, f === null ? r = N : f.next = N, f = b;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, h = z.lastBaseUpdate, h !== f && (h === null ? z.firstBaseUpdate = N : h.next = N, z.lastBaseUpdate = b));
    }
    if (r !== null) {
      var B = i.baseState;
      f = 0, z = N = b = null, h = r;
      do {
        var O = h.lane & -536870913, U = O !== h.lane;
        if (U ? (ve & O) === O : (n & O) === O) {
          O !== 0 && O === $n && (Es = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, le = h;
            O = t;
            var ze = l;
            switch (le.tag) {
              case 1:
                if ($ = le.payload, typeof $ == "function") {
                  B = $.call(ze, B, O);
                  break e;
                }
                B = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = le.payload, O = typeof $ == "function" ? $.call(ze, B, O) : $, O == null) break e;
                B = _({}, B, O);
                break e;
              case 2:
                Hl = !0;
            }
          }
          O = h.callback, O !== null && (e.flags |= 64, U && (e.flags |= 8192), U = i.callbacks, U === null ? i.callbacks = [O] : U.push(O));
        } else
          U = {
            lane: O,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, z === null ? (N = z = U, b = B) : z = z.next = U, f |= O;
        if (h = h.next, h === null) {
          if (h = i.shared.pending, h === null)
            break;
          U = h, h = U.next, U.next = null, i.lastBaseUpdate = U, i.shared.pending = null;
        }
      } while (!0);
      z === null && (b = B), i.baseState = b, i.firstBaseUpdate = N, i.lastBaseUpdate = z, r === null && (i.shared.lanes = 0), Vl |= f, e.lanes = f, e.memoizedState = B;
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
  var Pn = S(null), fu = S(0);
  function Xf(e, t) {
    e = Rl, K(fu, e), K(Pn, t), Rl = e | t.baseLanes;
  }
  function bs() {
    K(fu, Rl), K(Pn, Pn.current);
  }
  function Ss() {
    Rl = fu.current, j(Pn), j(fu);
  }
  var Ot = S(null), kt = null;
  function Gl(e) {
    var t = e.alternate;
    K($e, $e.current & 1), K(Ot, e), kt === null && (t === null || Pn.current !== null || t.memoizedState !== null) && (kt = e);
  }
  function Rs(e) {
    K($e, $e.current), K(Ot, e), kt === null && (kt = e);
  }
  function kf(e) {
    e.tag === 22 ? (K($e, $e.current), K(Ot, e), kt === null && (kt = e)) : Yl();
  }
  function Yl() {
    K($e, $e.current), K(Ot, Ot.current);
  }
  function Dt(e) {
    j(Ot), kt === e && (kt = null), j($e);
  }
  var $e = S(0);
  function du(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || _o(l) || Oo(l)))
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
  var hl = 0, se = null, Me = null, Ie = null, mu = !1, ea = !1, vn = !1, hu = 0, Ja = 0, ta = null, Ey = 0;
  function Ve() {
    throw Error(c(321));
  }
  function Ts(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!Nt(e[l], t[l])) return !1;
    return !0;
  }
  function ws(e, t, l, n, i, r) {
    return hl = r, se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Y.H = e === null || e.memoizedState === null ? Ad : qs, vn = !1, r = l(n, i), vn = !1, ea && (r = Kf(
      t,
      l,
      n,
      i
    )), Vf(e), r;
  }
  function Vf(e) {
    Y.H = Wa;
    var t = Me !== null && Me.next !== null;
    if (hl = 0, Ie = Me = se = null, mu = !1, Ja = 0, ta = null, t) throw Error(c(300));
    e === null || Pe || (e = e.dependencies, e !== null && au(e) && (Pe = !0));
  }
  function Kf(e, t, l, n) {
    se = e;
    var i = 0;
    do {
      if (ea && (ta = null), Ja = 0, ea = !1, 25 <= i) throw Error(c(301));
      if (i += 1, Ie = Me = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      Y.H = Cd, r = t(l, n);
    } while (ea);
    return r;
  }
  function by() {
    var e = Y.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $a(t) : t, e = e.useState()[0], (Me !== null ? Me.memoizedState : null) !== e && (se.flags |= 1024), t;
  }
  function xs() {
    var e = hu !== 0;
    return hu = 0, e;
  }
  function As(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Cs(e) {
    if (mu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      mu = !1;
    }
    hl = 0, Ie = Me = se = null, ea = !1, Ja = hu = 0, ta = null;
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
    if (Me === null) {
      var e = se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Me.next;
    var t = Ie === null ? se.memoizedState : Ie.next;
    if (t !== null)
      Ie = t, Me = e;
    else {
      if (e === null)
        throw se.alternate === null ? Error(c(467)) : Error(c(310));
      Me = e, e = {
        memoizedState: Me.memoizedState,
        baseState: Me.baseState,
        baseQueue: Me.baseQueue,
        queue: Me.queue,
        next: null
      }, Ie === null ? se.memoizedState = Ie = e : Ie = Ie.next = e;
    }
    return Ie;
  }
  function gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $a(e) {
    var t = Ja;
    return Ja += 1, ta === null && (ta = []), e = Lf(ta, e, t), t = se, (Ie === null ? t.memoizedState : Ie.next) === null && (t = t.alternate, Y.H = t === null || t.memoizedState === null ? Ad : qs), e;
  }
  function yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $a(e);
      if (e.$$typeof === I) return st(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ns(e) {
    var t = null, l = se.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = se.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(i) {
          return i.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = gu(), se.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = Le;
    return t.index++, l;
  }
  function gl(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function pu(e) {
    var t = Fe();
    return _s(t, Me, e);
  }
  function _s(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = l;
    var i = e.baseQueue, r = n.pending;
    if (r !== null) {
      if (i !== null) {
        var f = i.next;
        i.next = r.next, r.next = f;
      }
      t.baseQueue = i = r, n.pending = null;
    }
    if (r = e.baseState, i === null) e.memoizedState = r;
    else {
      t = i.next;
      var h = f = null, b = null, N = t, z = !1;
      do {
        var B = N.lane & -536870913;
        if (B !== N.lane ? (ve & B) === B : (hl & B) === B) {
          var O = N.revertLane;
          if (O === 0)
            b !== null && (b = b.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), B === $n && (z = !0);
          else if ((hl & O) === O) {
            N = N.next, O === $n && (z = !0);
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
            }, b === null ? (h = b = B, f = r) : b = b.next = B, se.lanes |= O, Vl |= O;
          B = N.action, vn && l(r, B), r = N.hasEagerState ? N.eagerState : l(r, B);
        } else
          O = {
            lane: B,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, b === null ? (h = b = O, f = r) : b = b.next = O, se.lanes |= B, Vl |= B;
        N = N.next;
      } while (N !== null && N !== t);
      if (b === null ? f = r : b.next = h, !Nt(r, e.memoizedState) && (Pe = !0, z && (l = Fn, l !== null)))
        throw l;
      e.memoizedState = r, e.baseState = f, e.baseQueue = b, n.lastRenderedState = r;
    }
    return i === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Os(e) {
    var t = Fe(), l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, i = l.pending, r = t.memoizedState;
    if (i !== null) {
      l.pending = null;
      var f = i = i.next;
      do
        r = e(r, f.action), f = f.next;
      while (f !== i);
      Nt(r, t.memoizedState) || (Pe = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
    }
    return [r, n];
  }
  function Qf(e, t, l) {
    var n = se, i = Fe(), r = Se;
    if (r) {
      if (l === void 0) throw Error(c(407));
      l = l();
    } else l = t();
    var f = !Nt(
      (Me || i).memoizedState,
      l
    );
    if (f && (i.memoizedState = l, Pe = !0), i = i.queue, Us($f.bind(null, n, i, e), [
      e
    ]), i.getSnapshot !== t || f || Ie !== null && Ie.memoizedState.tag & 1) {
      if (n.flags |= 2048, la(
        9,
        { destroy: void 0 },
        Jf.bind(
          null,
          n,
          i,
          l,
          t
        ),
        null
      ), je === null) throw Error(c(349));
      r || (hl & 127) !== 0 || Zf(n, t, l);
    }
    return l;
  }
  function Zf(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = se.updateQueue, t === null ? (t = gu(), se.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function Jf(e, t, l, n) {
    t.value = l, t.getSnapshot = n, Ff(t) && Wf(e);
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
    var t = on(e, 2);
    t !== null && St(t, e, 2);
  }
  function Ds(e) {
    var t = ht();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), vn) {
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
      lastRenderedReducer: gl,
      lastRenderedState: e
    }, t;
  }
  function If(e, t, l, n) {
    return e.baseState = l, _s(
      e,
      Me,
      typeof n == "function" ? n : gl
    );
  }
  function Sy(e, t, l, n, i) {
    if (bu(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var r = {
        payload: i,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          r.listeners.push(f);
        }
      };
      Y.T !== null ? l(!0) : r.isTransition = !1, n(r), l = t.pending, l === null ? (r.next = t.pending = r, Pf(t, r)) : (r.next = l.next, t.pending = l.next = r);
    }
  }
  function Pf(e, t) {
    var l = t.action, n = t.payload, i = e.state;
    if (t.isTransition) {
      var r = Y.T, f = {};
      Y.T = f;
      try {
        var h = l(i, n), b = Y.S;
        b !== null && b(f, h), ed(e, t, h);
      } catch (N) {
        Ms(e, t, N);
      } finally {
        r !== null && f.types !== null && (r.types = f.types), Y.T = r;
      }
    } else
      try {
        r = l(i, n), ed(e, t, r);
      } catch (N) {
        Ms(e, t, N);
      }
  }
  function ed(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        td(e, t, n);
      },
      function(n) {
        return Ms(e, t, n);
      }
    ) : td(e, t, l);
  }
  function td(e, t, l) {
    t.status = "fulfilled", t.value = l, ld(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Pf(e, l)));
  }
  function Ms(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, ld(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function ld(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function nd(e, t) {
    return t;
  }
  function ad(e, t) {
    if (Se) {
      var l = je.formState;
      if (l !== null) {
        e: {
          var n = se;
          if (Se) {
            if (Be) {
              t: {
                for (var i = Be, r = Xt; i.nodeType !== 8; ) {
                  if (!r) {
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
                r = i.data, i = r === "F!" || r === "F" ? i : null;
              }
              if (i) {
                Be = Vt(
                  i.nextSibling
                ), n = i.data === "F!";
                break e;
              }
            }
            Ll(n);
          }
          n = !1;
        }
        n && (t = l[0]);
      }
    }
    return l = ht(), l.memoizedState = l.baseState = t, n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nd,
      lastRenderedState: t
    }, l.queue = n, l = Td.bind(
      null,
      se,
      n
    ), n.dispatch = l, n = Ds(!1), r = Bs.bind(
      null,
      se,
      !1,
      n.queue
    ), n = ht(), i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = i, l = Sy.bind(
      null,
      se,
      i,
      r,
      l
    ), i.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function id(e) {
    var t = Fe();
    return ud(t, Me, e);
  }
  function ud(e, t, l) {
    if (t = _s(
      e,
      t,
      nd
    )[0], e = pu(gl)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = $a(t);
      } catch (f) {
        throw f === Wn ? ru : f;
      }
    else n = t;
    t = Fe();
    var i = t.queue, r = i.dispatch;
    return l !== t.memoizedState && (se.flags |= 2048, la(
      9,
      { destroy: void 0 },
      Ry.bind(null, i, l),
      null
    )), [n, r, e];
  }
  function Ry(e, t) {
    e.action = t;
  }
  function rd(e) {
    var t = Fe(), l = Me;
    if (l !== null)
      return ud(t, l, e);
    Fe(), t = t.memoizedState, l = Fe();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function la(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = se.updateQueue, t === null && (t = gu(), se.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function sd() {
    return Fe().memoizedState;
  }
  function vu(e, t, l, n) {
    var i = ht();
    se.flags |= e, i.memoizedState = la(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Eu(e, t, l, n) {
    var i = Fe();
    n = n === void 0 ? null : n;
    var r = i.memoizedState.inst;
    Me !== null && n !== null && Ts(n, Me.memoizedState.deps) ? i.memoizedState = la(t, r, l, n) : (se.flags |= e, i.memoizedState = la(
      1 | t,
      r,
      l,
      n
    ));
  }
  function od(e, t) {
    vu(8390656, 8, e, t);
  }
  function Us(e, t) {
    Eu(2048, 8, e, t);
  }
  function Ty(e) {
    se.flags |= 4;
    var t = se.updateQueue;
    if (t === null)
      t = gu(), se.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function cd(e) {
    var t = Fe().memoizedState;
    return Ty({ ref: t, nextImpl: e }), function() {
      if ((Ce & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function fd(e, t) {
    return Eu(4, 2, e, t);
  }
  function dd(e, t) {
    return Eu(4, 4, e, t);
  }
  function md(e, t) {
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
  function hd(e, t, l) {
    l = l != null ? l.concat([e]) : null, Eu(4, 4, md.bind(null, t, e), l);
  }
  function zs() {
  }
  function gd(e, t) {
    var l = Fe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Ts(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function yd(e, t) {
    var l = Fe();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Ts(t, n[1]))
      return n[0];
    if (n = e(), vn) {
      Ol(!0);
      try {
        e();
      } finally {
        Ol(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function Ls(e, t, l) {
    return l === void 0 || (hl & 1073741824) !== 0 && (ve & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = p0(), se.lanes |= e, Vl |= e, l);
  }
  function pd(e, t, l, n) {
    return Nt(l, t) ? l : Pn.current !== null ? (e = Ls(e, l, n), Nt(e, t) || (Pe = !0), e) : (hl & 42) === 0 || (hl & 1073741824) !== 0 && (ve & 261930) === 0 ? (Pe = !0, e.memoizedState = l) : (e = p0(), se.lanes |= e, Vl |= e, t);
  }
  function vd(e, t, l, n, i) {
    var r = k.p;
    k.p = r !== 0 && 8 > r ? r : 8;
    var f = Y.T, h = {};
    Y.T = h, Bs(e, !1, t, l);
    try {
      var b = i(), N = Y.S;
      if (N !== null && N(h, b), b !== null && typeof b == "object" && typeof b.then == "function") {
        var z = vy(
          b,
          n
        );
        Fa(
          e,
          t,
          z,
          zt(e)
        );
      } else
        Fa(
          e,
          t,
          n,
          zt(e)
        );
    } catch (B) {
      Fa(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: B },
        zt()
      );
    } finally {
      k.p = r, f !== null && h.types !== null && (f.types = h.types), Y.T = f;
    }
  }
  function wy() {
  }
  function js(e, t, l, n) {
    if (e.tag !== 5) throw Error(c(476));
    var i = Ed(e).queue;
    vd(
      e,
      i,
      t,
      re,
      l === null ? wy : function() {
        return bd(e), l(n);
      }
    );
  }
  function Ed(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: re,
      baseState: re,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gl,
        lastRenderedState: re
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
        lastRenderedReducer: gl,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function bd(e) {
    var t = Ed(e);
    t.next === null && (t = e.alternate.memoizedState), Fa(
      e,
      t.next.queue,
      {},
      zt()
    );
  }
  function Hs() {
    return st(mi);
  }
  function Sd() {
    return Fe().memoizedState;
  }
  function Rd() {
    return Fe().memoizedState;
  }
  function xy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = zt();
          e = Bl(l);
          var n = ql(t, e, l);
          n !== null && (St(n, t, l), Ka(n, t, l)), t = { cache: ds() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ay(e, t, l) {
    var n = zt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bu(e) ? wd(t, l) : (l = ts(e, t, l, n), l !== null && (St(l, e, n), xd(l, t, n)));
  }
  function Td(e, t, l) {
    var n = zt();
    Fa(e, t, l, n);
  }
  function Fa(e, t, l, n) {
    var i = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (bu(e)) wd(t, i);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var f = t.lastRenderedState, h = r(f, l);
          if (i.hasEagerState = !0, i.eagerState = h, Nt(h, f))
            return eu(e, t, i, 0), je === null && Pi(), !1;
        } catch {
        }
      if (l = ts(e, t, i, n), l !== null)
        return St(l, e, n), xd(l, t, n), !0;
    }
    return !1;
  }
  function Bs(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: po(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, bu(e)) {
      if (t) throw Error(c(479));
    } else
      t = ts(
        e,
        l,
        n,
        2
      ), t !== null && St(t, e, 2);
  }
  function bu(e) {
    var t = e.alternate;
    return e === se || t !== null && t === se;
  }
  function wd(e, t) {
    ea = mu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function xd(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, _c(e, l);
    }
  }
  var Wa = {
    readContext: st,
    use: yu,
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
  Wa.useEffectEvent = Ve;
  var Ad = {
    readContext: st,
    use: yu,
    useCallback: function(e, t) {
      return ht().memoizedState = [
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
        md.bind(null, t, e),
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
      var l = ht();
      t = t === void 0 ? null : t;
      var n = e();
      if (vn) {
        Ol(!0);
        try {
          e();
        } finally {
          Ol(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ht();
      if (l !== void 0) {
        var i = l(t);
        if (vn) {
          Ol(!0);
          try {
            l(t);
          } finally {
            Ol(!1);
          }
        }
      } else i = t;
      return n.memoizedState = n.baseState = i, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      }, n.queue = e, e = e.dispatch = Ay.bind(
        null,
        se,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ht();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ds(e);
      var t = e.queue, l = Td.bind(null, se, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var l = ht();
      return Ls(l, e, t);
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
    useSyncExternalStore: function(e, t, l) {
      var n = se, i = ht();
      if (Se) {
        if (l === void 0)
          throw Error(c(407));
        l = l();
      } else {
        if (l = t(), je === null)
          throw Error(c(349));
        (ve & 127) !== 0 || Zf(n, t, l);
      }
      i.memoizedState = l;
      var r = { value: l, getSnapshot: t };
      return i.queue = r, od($f.bind(null, n, r, e), [
        e
      ]), n.flags |= 2048, la(
        9,
        { destroy: void 0 },
        Jf.bind(
          null,
          n,
          r,
          l,
          t
        ),
        null
      ), l;
    },
    useId: function() {
      var e = ht(), t = je.identifierPrefix;
      if (Se) {
        var l = nl, n = ll;
        l = (n & ~(1 << 32 - Ct(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = hu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = Ey++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Hs,
    useFormState: ad,
    useActionState: ad,
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
      return t.queue = l, t = Bs.bind(
        null,
        se,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: Ns,
    useCacheRefresh: function() {
      return ht().memoizedState = xy.bind(
        null,
        se
      );
    },
    useEffectEvent: function(e) {
      var t = ht(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ce & 2) !== 0)
          throw Error(c(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, qs = {
    readContext: st,
    use: yu,
    useCallback: gd,
    useContext: st,
    useEffect: Us,
    useImperativeHandle: hd,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: yd,
    useReducer: pu,
    useRef: sd,
    useState: function() {
      return pu(gl);
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var l = Fe();
      return pd(
        l,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = pu(gl)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : $a(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: Sd,
    useHostTransitionStatus: Hs,
    useFormState: id,
    useActionState: id,
    useOptimistic: function(e, t) {
      var l = Fe();
      return If(l, Me, e, t);
    },
    useMemoCache: Ns,
    useCacheRefresh: Rd
  };
  qs.useEffectEvent = cd;
  var Cd = {
    readContext: st,
    use: yu,
    useCallback: gd,
    useContext: st,
    useEffect: Us,
    useImperativeHandle: hd,
    useInsertionEffect: fd,
    useLayoutEffect: dd,
    useMemo: yd,
    useReducer: Os,
    useRef: sd,
    useState: function() {
      return Os(gl);
    },
    useDebugValue: zs,
    useDeferredValue: function(e, t) {
      var l = Fe();
      return Me === null ? Ls(l, e, t) : pd(
        l,
        Me.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Os(gl)[0], t = Fe().memoizedState;
      return [
        typeof e == "boolean" ? e : $a(e),
        t
      ];
    },
    useSyncExternalStore: Qf,
    useId: Sd,
    useHostTransitionStatus: Hs,
    useFormState: rd,
    useActionState: rd,
    useOptimistic: function(e, t) {
      var l = Fe();
      return Me !== null ? If(l, Me, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: Ns,
    useCacheRefresh: Rd
  };
  Cd.useEffectEvent = cd;
  function Gs(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : _({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ys = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = zt(), i = Bl(n);
      i.payload = t, l != null && (i.callback = l), t = ql(e, i, n), t !== null && (St(t, e, n), Ka(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = zt(), i = Bl(n);
      i.tag = 1, i.payload = t, l != null && (i.callback = l), t = ql(e, i, n), t !== null && (St(t, e, n), Ka(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = zt(), n = Bl(l);
      n.tag = 2, t != null && (n.callback = t), t = ql(e, n, l), t !== null && (St(t, e, l), Ka(t, e, l));
    }
  };
  function Nd(e, t, l, n, i, r, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, r, f) : t.prototype && t.prototype.isPureReactComponent ? !Ha(l, n) || !Ha(i, r) : !0;
  }
  function _d(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && Ys.enqueueReplaceState(t, t.state, null);
  }
  function En(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = _({}, l));
      for (var i in e)
        l[i] === void 0 && (l[i] = e[i]);
    }
    return l;
  }
  function Od(e) {
    Ii(e);
  }
  function Dd(e) {
    console.error(e);
  }
  function Md(e) {
    Ii(e);
  }
  function Su(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ud(e, t, l) {
    try {
      var n = e.onCaughtError;
      n(l.value, {
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
    return l = Bl(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Su(e, t);
    }, l;
  }
  function zd(e) {
    return e = Bl(e), e.tag = 3, e;
  }
  function Ld(e, t, l, n) {
    var i = l.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var r = n.value;
      e.payload = function() {
        return i(r);
      }, e.callback = function() {
        Ud(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Ud(t, l, n), typeof i != "function" && (Kl === null ? Kl = /* @__PURE__ */ new Set([this]) : Kl.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Cy(e, t, l, n, i) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && Jn(
        t,
        l,
        i,
        !0
      ), l = Ot.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return kt === null ? Uu() : l.alternate === null && Ke === 0 && (Ke = 3), l.flags &= -257, l.flags |= 65536, l.lanes = i, n === su ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), ho(e, n, i)), !1;
          case 22:
            return l.flags |= 65536, n === su ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), ho(e, n, i)), !1;
        }
        throw Error(c(435, l.tag));
      }
      return ho(e, n, i), Uu(), !1;
    }
    if (Se)
      return t = Ot.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = i, n !== rs && (e = Error(c(422), { cause: n }), Ga(qt(e, l)))) : (n !== rs && (t = Error(c(423), {
        cause: n
      }), Ga(
        qt(t, l)
      )), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, n = qt(n, l), i = Xs(
        e.stateNode,
        n,
        i
      ), vs(e, i), Ke !== 4 && (Ke = 2)), !1;
    var r = Error(c(520), { cause: n });
    if (r = qt(r, l), ii === null ? ii = [r] : ii.push(r), Ke !== 4 && (Ke = 2), t === null) return !0;
    n = qt(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = i & -i, l.lanes |= e, e = Xs(l.stateNode, n, e), vs(l, e), !1;
        case 1:
          if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Kl === null || !Kl.has(r))))
            return l.flags |= 65536, i &= -i, l.lanes |= i, i = zd(i), Ld(
              i,
              e,
              l,
              n
            ), vs(l, i), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var ks = Error(c(461)), Pe = !1;
  function ot(e, t, l, n) {
    t.child = e === null ? qf(t, null, l, n) : pn(
      t,
      e.child,
      l,
      n
    );
  }
  function jd(e, t, l, n, i) {
    l = l.render;
    var r = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var h in n)
        h !== "ref" && (f[h] = n[h]);
    } else f = n;
    return mn(t), n = ws(
      e,
      t,
      l,
      f,
      r,
      i
    ), h = xs(), e !== null && !Pe ? (As(e, t, i), yl(e, t, i)) : (Se && h && is(t), t.flags |= 1, ot(e, t, n, i), t.child);
  }
  function Hd(e, t, l, n, i) {
    if (e === null) {
      var r = l.type;
      return typeof r == "function" && !ls(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, Bd(
        e,
        t,
        r,
        n,
        i
      )) : (e = lu(
        l.type,
        null,
        n,
        t,
        t.mode,
        i
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !Ws(e, i)) {
      var f = r.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Ha, l(f, n) && e.ref === t.ref)
        return yl(e, t, i);
    }
    return t.flags |= 1, e = cl(r, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Bd(e, t, l, n, i) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Ha(r, n) && e.ref === t.ref)
        if (Pe = !1, t.pendingProps = n = r, Ws(e, i))
          (e.flags & 131072) !== 0 && (Pe = !0);
        else
          return t.lanes = e.lanes, yl(e, t, i);
    }
    return Vs(
      e,
      t,
      l,
      n,
      i
    );
  }
  function qd(e, t, l, n) {
    var i = n.children, r = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | l : l, e !== null) {
          for (n = t.child = e.child, i = 0; n !== null; )
            i = i | n.lanes | n.childLanes, n = n.sibling;
          n = i & ~r;
        } else n = 0, t.child = null;
        return Gd(
          e,
          t,
          r,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && uu(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Xf(t, r) : bs(), kf(t);
      else
        return n = t.lanes = 536870912, Gd(
          e,
          t,
          r !== null ? r.baseLanes | l : l,
          l,
          n
        );
    } else
      r !== null ? (uu(t, r.cachePool), Xf(t, r), Yl(), t.memoizedState = null) : (e !== null && uu(t, null), bs(), Yl());
    return ot(e, t, i, l), t.child;
  }
  function Ia(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Gd(e, t, l, n, i) {
    var r = hs();
    return r = r === null ? null : { parent: We._currentValue, pool: r }, t.memoizedState = {
      baseLanes: l,
      cachePool: r
    }, e !== null && uu(t, null), bs(), kf(t), e !== null && Jn(e, t, n, !0), t.childLanes = i, null;
  }
  function Ru(e, t) {
    return t = wu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Yd(e, t, l) {
    return pn(t, e.child, null, l), e = Ru(t, t.pendingProps), e.flags |= 2, Dt(t), t.memoizedState = null, e;
  }
  function Ny(e, t, l) {
    var n = t.pendingProps, i = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Se) {
        if (n.mode === "hidden")
          return e = Ru(t, n), t.lanes = 536870912, Ia(null, e);
        if (Rs(t), (e = Be) ? (e = P0(
          e,
          Xt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ul !== null ? { id: ll, overflow: nl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = wf(e), l.return = t, t.child = l, rt = t, Be = null)) : e = null, e === null) throw Ll(t);
        return t.lanes = 536870912, null;
      }
      return Ru(t, n);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var f = r.dehydrated;
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
      else if (Pe || Jn(e, t, l, !1), i = (l & e.childLanes) !== 0, Pe || i) {
        if (n = je, n !== null && (f = Oc(n, l), f !== 0 && f !== r.retryLane))
          throw r.retryLane = f, on(e, f), St(n, e, f), ks;
        Uu(), t = Yd(
          e,
          t,
          l
        );
      } else
        e = r.treeContext, Be = Vt(f.nextSibling), rt = t, Se = !0, zl = null, Xt = !1, e !== null && Cf(t, e), t = Ru(t, n), t.flags |= 4096;
      return t;
    }
    return e = cl(e.child, {
      mode: n.mode,
      children: n.children
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
  function Vs(e, t, l, n, i) {
    return mn(t), l = ws(
      e,
      t,
      l,
      n,
      void 0,
      i
    ), n = xs(), e !== null && !Pe ? (As(e, t, i), yl(e, t, i)) : (Se && n && is(t), t.flags |= 1, ot(e, t, l, i), t.child);
  }
  function Xd(e, t, l, n, i, r) {
    return mn(t), t.updateQueue = null, l = Kf(
      t,
      n,
      l,
      i
    ), Vf(e), n = xs(), e !== null && !Pe ? (As(e, t, r), yl(e, t, r)) : (Se && n && is(t), t.flags |= 1, ot(e, t, l, r), t.child);
  }
  function kd(e, t, l, n, i) {
    if (mn(t), t.stateNode === null) {
      var r = Vn, f = l.contextType;
      typeof f == "object" && f !== null && (r = st(f)), r = new l(n, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ys, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = n, r.state = t.memoizedState, r.refs = {}, ys(t), f = l.contextType, r.context = typeof f == "object" && f !== null ? st(f) : Vn, r.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Gs(
        t,
        l,
        f,
        n
      ), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && Ys.enqueueReplaceState(r, r.state, null), Za(t, n, r, i), Qa(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      r = t.stateNode;
      var h = t.memoizedProps, b = En(l, h);
      r.props = b;
      var N = r.context, z = l.contextType;
      f = Vn, typeof z == "object" && z !== null && (f = st(z));
      var B = l.getDerivedStateFromProps;
      z = typeof B == "function" || typeof r.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, z || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h || N !== f) && _d(
        t,
        r,
        n,
        f
      ), Hl = !1;
      var O = t.memoizedState;
      r.state = O, Za(t, n, r, i), Qa(), N = t.memoizedState, h || O !== N || Hl ? (typeof B == "function" && (Gs(
        t,
        l,
        B,
        n
      ), N = t.memoizedState), (b = Hl || Nd(
        t,
        l,
        b,
        n,
        O,
        N,
        f
      )) ? (z || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = N), r.props = n, r.state = N, r.context = f, n = b) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      r = t.stateNode, ps(e, t), f = t.memoizedProps, z = En(l, f), r.props = z, B = t.pendingProps, O = r.context, N = l.contextType, b = Vn, typeof N == "object" && N !== null && (b = st(N)), h = l.getDerivedStateFromProps, (N = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== B || O !== b) && _d(
        t,
        r,
        n,
        b
      ), Hl = !1, O = t.memoizedState, r.state = O, Za(t, n, r, i), Qa();
      var U = t.memoizedState;
      f !== B || O !== U || Hl || e !== null && e.dependencies !== null && au(e.dependencies) ? (typeof h == "function" && (Gs(
        t,
        l,
        h,
        n
      ), U = t.memoizedState), (z = Hl || Nd(
        t,
        l,
        z,
        n,
        O,
        U,
        b
      ) || e !== null && e.dependencies !== null && au(e.dependencies)) ? (N || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(n, U, b), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        n,
        U,
        b
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = U), r.props = n, r.state = U, r.context = b, n = z) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return r = n, Tu(e, t), n = (t.flags & 128) !== 0, r || n ? (r = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && n ? (t.child = pn(
      t,
      e.child,
      null,
      i
    ), t.child = pn(
      t,
      null,
      l,
      i
    )) : ot(e, t, l, i), t.memoizedState = r.state, e = t.child) : e = yl(
      e,
      t,
      i
    ), e;
  }
  function Vd(e, t, l, n) {
    return fn(), t.flags |= 256, ot(e, t, l, n), t.child;
  }
  var Ks = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qs(e) {
    return { baseLanes: e, cachePool: Uf() };
  }
  function Zs(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Ut), e;
  }
  function Kd(e, t, l) {
    var n = t.pendingProps, i = !1, r = (t.flags & 128) !== 0, f;
    if ((f = r) || (f = e !== null && e.memoizedState === null ? !1 : ($e.current & 2) !== 0), f && (i = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Se) {
        if (i ? Gl(t) : Yl(), (e = Be) ? (e = P0(
          e,
          Xt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Ul !== null ? { id: ll, overflow: nl } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = wf(e), l.return = t, t.child = l, rt = t, Be = null)) : e = null, e === null) throw Ll(t);
        return Oo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = n.children;
      return n = n.fallback, i ? (Yl(), i = t.mode, h = wu(
        { mode: "hidden", children: h },
        i
      ), n = cn(
        n,
        i,
        l,
        null
      ), h.return = t, n.return = t, h.sibling = n, t.child = h, n = t.child, n.memoizedState = Qs(l), n.childLanes = Zs(
        e,
        f,
        l
      ), t.memoizedState = Ks, Ia(null, n)) : (Gl(t), Js(t, h));
    }
    var b = e.memoizedState;
    if (b !== null && (h = b.dehydrated, h !== null)) {
      if (r)
        t.flags & 256 ? (Gl(t), t.flags &= -257, t = $s(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (Yl(), t.child = e.child, t.flags |= 128, t = null) : (Yl(), h = n.fallback, i = t.mode, n = wu(
          { mode: "visible", children: n.children },
          i
        ), h = cn(
          h,
          i,
          l,
          null
        ), h.flags |= 2, n.return = t, h.return = t, n.sibling = h, t.child = n, pn(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = Qs(l), n.childLanes = Zs(
          e,
          f,
          l
        ), t.memoizedState = Ks, t = Ia(null, n));
      else if (Gl(t), Oo(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var N = f.dgst;
        f = N, n = Error(c(419)), n.stack = "", n.digest = f, Ga({ value: n, source: null, stack: null }), t = $s(
          e,
          t,
          l
        );
      } else if (Pe || Jn(e, t, l, !1), f = (l & e.childLanes) !== 0, Pe || f) {
        if (f = je, f !== null && (n = Oc(f, l), n !== 0 && n !== b.retryLane))
          throw b.retryLane = n, on(e, n), St(f, e, n), ks;
        _o(h) || Uu(), t = $s(
          e,
          t,
          l
        );
      } else
        _o(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = b.treeContext, Be = Vt(
          h.nextSibling
        ), rt = t, Se = !0, zl = null, Xt = !1, e !== null && Cf(t, e), t = Js(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return i ? (Yl(), h = n.fallback, i = t.mode, b = e.child, N = b.sibling, n = cl(b, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = b.subtreeFlags & 65011712, N !== null ? h = cl(
      N,
      h
    ) : (h = cn(
      h,
      i,
      l,
      null
    ), h.flags |= 2), h.return = t, n.return = t, n.sibling = h, t.child = n, Ia(null, n), n = t.child, h = e.child.memoizedState, h === null ? h = Qs(l) : (i = h.cachePool, i !== null ? (b = We._currentValue, i = i.parent !== b ? { parent: b, pool: b } : i) : i = Uf(), h = {
      baseLanes: h.baseLanes | l,
      cachePool: i
    }), n.memoizedState = h, n.childLanes = Zs(
      e,
      f,
      l
    ), t.memoizedState = Ks, Ia(e.child, n)) : (Gl(t), l = e.child, e = l.sibling, l = cl(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function Js(e, t) {
    return t = wu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function wu(e, t) {
    return e = _t(22, e, null, t), e.lanes = 0, e;
  }
  function $s(e, t, l) {
    return pn(t, e.child, null, l), e = Js(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qd(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), cs(e.return, t, l);
  }
  function Fs(e, t, l, n, i, r) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: n,
      tail: l,
      tailMode: i,
      treeForkCount: r
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = n, f.tail = l, f.tailMode = i, f.treeForkCount = r);
  }
  function Zd(e, t, l) {
    var n = t.pendingProps, i = n.revealOrder, r = n.tail;
    n = n.children;
    var f = $e.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, K($e, f), ot(e, t, n, l), n = Se ? qa : 0, !h && e !== null && (e.flags & 128) !== 0)
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
          r,
          n
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
          r,
          n
        );
        break;
      case "together":
        Fs(
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
  function yl(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Vl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (Jn(
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
      for (e = t.child, l = cl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = cl(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function Ws(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && au(e)));
  }
  function _y(e, t, l) {
    switch (t.tag) {
      case 3:
        te(t, t.stateNode.containerInfo), jl(t, We, e.memoizedState.cache), fn();
        break;
      case 27:
      case 5:
        Ft(t);
        break;
      case 4:
        te(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Rs(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Gl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? Kd(e, t, l) : (Gl(t), e = yl(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Gl(t);
        break;
      case 19:
        var i = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (Jn(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), i) {
          if (n)
            return Zd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), K($e, $e.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, qd(
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
  function Jd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Pe = !0;
      else {
        if (!Ws(e, l) && (t.flags & 128) === 0)
          return Pe = !1, _y(
            e,
            t,
            l
          );
        Pe = (e.flags & 131072) !== 0;
      }
    else
      Pe = !1, Se && (t.flags & 1048576) !== 0 && Af(t, qa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = gn(t.elementType), t.type = e, typeof e == "function")
            ls(e) ? (n = En(e, n), t.tag = 1, t = kd(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = Vs(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === W) {
                t.tag = 11, t = jd(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (i === ne) {
                t.tag = 14, t = Hd(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              }
            }
            throw t = ke(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return Vs(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, i = En(
          n,
          t.pendingProps
        ), kd(
          e,
          t,
          n,
          i,
          l
        );
      case 3:
        e: {
          if (te(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          n = t.pendingProps;
          var r = t.memoizedState;
          i = r.element, ps(e, t), Za(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, jl(t, We, n), n !== r.cache && fs(
            t,
            [We],
            l,
            !0
          ), Qa(), n = f.element, r.isDehydrated)
            if (r = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
              t = Vd(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== i) {
              i = qt(
                Error(c(424)),
                t
              ), Ga(i), t = Vd(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Be = Vt(e.firstChild), rt = t, Se = !0, zl = null, Xt = !0, l = qf(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (fn(), n === i) {
              t = yl(
                e,
                t,
                l
              );
              break e;
            }
            ot(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Tu(e, t), e === null ? (l = im(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : Se || (l = t.type, e = t.pendingProps, n = Gu(
          J.current
        ).createElement(l), n[ut] = t, n[gt] = e, ct(n, l, e), nt(n), t.stateNode = n) : t.memoizedState = im(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ft(t), e === null && Se && (n = t.stateNode = lm(
          t.type,
          t.pendingProps,
          J.current
        ), rt = t, Xt = !0, i = Be, $l(t.type) ? (Do = i, Be = Vt(n.firstChild)) : Be = i), ot(
          e,
          t,
          t.pendingProps.children,
          l
        ), Tu(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Se && ((i = n = Be) && (n = i1(
          n,
          t.type,
          t.pendingProps,
          Xt
        ), n !== null ? (t.stateNode = n, rt = t, Be = Vt(n.firstChild), Xt = !1, i = !0) : i = !1), i || Ll(t)), Ft(t), i = t.type, r = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = r.children, Ao(i, r) ? n = null : f !== null && Ao(i, f) && (t.flags |= 32), t.memoizedState !== null && (i = ws(
          e,
          t,
          by,
          null,
          null,
          l
        ), mi._currentValue = i), Tu(e, t), ot(e, t, n, l), t.child;
      case 6:
        return e === null && Se && ((e = l = Be) && (l = u1(
          l,
          t.pendingProps,
          Xt
        ), l !== null ? (t.stateNode = l, rt = t, Be = null, e = !0) : e = !1), e || Ll(t)), null;
      case 13:
        return Kd(e, t, l);
      case 4:
        return te(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = pn(
          t,
          null,
          n,
          l
        ) : ot(e, t, n, l), t.child;
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
        return n = t.pendingProps, jl(t, t.type, n.value), ot(e, t, n.children, l), t.child;
      case 9:
        return i = t.type._context, n = t.pendingProps.children, mn(t), i = st(i), n = n(i), t.flags |= 1, ot(e, t, n, l), t.child;
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
        return Ny(e, t, l);
      case 22:
        return qd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return mn(t), n = st(We), e === null ? (i = hs(), i === null && (i = je, r = ds(), i.pooledCache = r, r.refCount++, r !== null && (i.pooledCacheLanes |= l), i = r), t.memoizedState = { parent: n, cache: i }, ys(t), jl(t, We, i)) : ((e.lanes & l) !== 0 && (ps(e, t), Za(t, null, null, l), Qa()), i = e.memoizedState, r = t.memoizedState, i.parent !== n ? (i = { parent: n, cache: n }, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), jl(t, We, n)) : (n = r.cache, jl(t, We, n), n !== i.cache && fs(
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
  function pl(e) {
    e.flags |= 4;
  }
  function Is(e, t, l, n, i) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (i & 335544128) === i)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (S0()) e.flags |= 8192;
        else
          throw yn = su, gs;
    } else e.flags &= -16777217;
  }
  function $d(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !cm(t))
      if (S0()) e.flags |= 8192;
      else
        throw yn = su, gs;
  }
  function xu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Cc() : 536870912, e.lanes |= t, ua |= t);
  }
  function Pa(e, t) {
    if (!Se)
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
  function qe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var i = e.child; i !== null; )
        l |= i.lanes | i.childLanes, n |= i.subtreeFlags & 65011712, n |= i.flags & 65011712, i.return = e, i = i.sibling;
    else
      for (i = e.child; i !== null; )
        l |= i.lanes | i.childLanes, n |= i.subtreeFlags, n |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function Oy(e, t, l) {
    var n = t.pendingProps;
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
        return qe(t), null;
      case 1:
        return qe(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ml(We), he(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (Zn(t) ? pl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ss())), qe(t), null;
      case 26:
        var i = t.type, r = t.memoizedState;
        return e === null ? (pl(t), r !== null ? (qe(t), $d(t, r)) : (qe(t), Is(
          t,
          i,
          null,
          n,
          l
        ))) : r ? r !== e.memoizedState ? (pl(t), qe(t), $d(t, r)) : (qe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && pl(t), qe(t), Is(
          t,
          i,
          e,
          n,
          l
        )), null;
      case 27:
        if (On(t), l = J.current, i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && pl(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(c(166));
            return qe(t), null;
          }
          e = Z.current, Zn(t) ? Nf(t) : (e = lm(i, n, l), t.stateNode = e, pl(t));
        }
        return qe(t), null;
      case 5:
        if (On(t), i = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && pl(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(c(166));
            return qe(t), null;
          }
          if (r = Z.current, Zn(t))
            Nf(t);
          else {
            var f = Gu(
              J.current
            );
            switch (r) {
              case 1:
                r = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  i
                );
                break;
              case 2:
                r = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  i
                );
                break;
              default:
                switch (i) {
                  case "svg":
                    r = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      i
                    );
                    break;
                  case "math":
                    r = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      i
                    );
                    break;
                  case "script":
                    r = f.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof n.is == "string" ? f.createElement("select", {
                      is: n.is
                    }) : f.createElement("select"), n.multiple ? r.multiple = !0 : n.size && (r.size = n.size);
                    break;
                  default:
                    r = typeof n.is == "string" ? f.createElement(i, { is: n.is }) : f.createElement(i);
                }
            }
            r[ut] = t, r[gt] = n;
            e: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                r.appendChild(f.stateNode);
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
            t.stateNode = r;
            e: switch (ct(r, i, n), i) {
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
            n && pl(t);
          }
        }
        return qe(t), Is(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && pl(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = J.current, Zn(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, i = rt, i !== null)
              switch (i.tag) {
                case 27:
                case 5:
                  n = i.memoizedProps;
              }
            e[ut] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || K0(e.nodeValue, l)), e || Ll(t, !0);
          } else
            e = Gu(e).createTextNode(
              n
            ), e[ut] = t, t.stateNode = e;
        }
        return qe(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = Zn(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[ut] = t;
            } else
              fn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), e = !1;
          } else
            l = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return qe(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (i = Zn(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!i) throw Error(c(318));
              if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(c(317));
              i[ut] = t;
            } else
              fn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            qe(t), i = !1;
          } else
            i = ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
          if (!i)
            return t.flags & 256 ? (Dt(t), t) : (Dt(t), null);
        }
        return Dt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, i = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (i = n.alternate.memoizedState.cachePool.pool), r = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (r = n.memoizedState.cachePool.pool), r !== i && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), xu(t, t.updateQueue), qe(t), null);
      case 4:
        return he(), e === null && So(t.stateNode.containerInfo), qe(t), null;
      case 10:
        return ml(t.type), qe(t), null;
      case 19:
        if (j($e), n = t.memoizedState, n === null) return qe(t), null;
        if (i = (t.flags & 128) !== 0, r = n.rendering, r === null)
          if (i) Pa(n, !1);
          else {
            if (Ke !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = du(e), r !== null) {
                  for (t.flags |= 128, Pa(n, !1), e = r.updateQueue, t.updateQueue = e, xu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Tf(l, e), l = l.sibling;
                  return K(
                    $e,
                    $e.current & 1 | 2
                  ), Se && fl(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && xt() > Ou && (t.flags |= 128, i = !0, Pa(n, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = du(r), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, xu(t, e), Pa(n, !0), n.tail === null && n.tailMode === "hidden" && !r.alternate && !Se)
                return qe(t), null;
            } else
              2 * xt() - n.renderingStartTime > Ou && l !== 536870912 && (t.flags |= 128, i = !0, Pa(n, !1), t.lanes = 4194304);
          n.isBackwards ? (r.sibling = t.child, t.child = r) : (e = n.last, e !== null ? e.sibling = r : t.child = r, n.last = r);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = xt(), e.sibling = null, l = $e.current, K(
          $e,
          i ? l & 1 | 2 : l & 1
        ), Se && fl(t, n.treeForkCount), e) : (qe(t), null);
      case 22:
      case 23:
        return Dt(t), Ss(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (qe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : qe(t), l = t.updateQueue, l !== null && xu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && j(hn), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ml(We), qe(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Dy(e, t) {
    switch (us(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ml(We), he(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return On(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Dt(t), t.alternate === null)
            throw Error(c(340));
          fn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Dt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          fn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return j($e), null;
      case 4:
        return he(), null;
      case 10:
        return ml(t.type), null;
      case 22:
      case 23:
        return Dt(t), Ss(), e !== null && j(hn), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ml(We), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fd(e, t) {
    switch (us(t), t.tag) {
      case 3:
        ml(We), he();
        break;
      case 26:
      case 27:
      case 5:
        On(t);
        break;
      case 4:
        he();
        break;
      case 31:
        t.memoizedState !== null && Dt(t);
        break;
      case 13:
        Dt(t);
        break;
      case 19:
        j($e);
        break;
      case 10:
        ml(t.type);
        break;
      case 22:
      case 23:
        Dt(t), Ss(), e !== null && j(hn);
        break;
      case 24:
        ml(We);
    }
  }
  function ei(e, t) {
    try {
      var l = t.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            n = void 0;
            var r = l.create, f = l.inst;
            n = r(), f.destroy = n;
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (h) {
      De(t, t.return, h);
    }
  }
  function Xl(e, t, l) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var r = i.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, h = f.destroy;
            if (h !== void 0) {
              f.destroy = void 0, i = t;
              var b = l, N = h;
              try {
                N();
              } catch (z) {
                De(
                  i,
                  b,
                  z
                );
              }
            }
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (z) {
      De(t, t.return, z);
    }
  }
  function Wd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Yf(t, l);
      } catch (n) {
        De(e, e.return, n);
      }
    }
  }
  function Id(e, t, l) {
    l.props = En(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      De(e, t, n);
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
    } catch (i) {
      De(e, t, i);
    }
  }
  function al(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (i) {
          De(e, t, i);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (i) {
          De(e, t, i);
        }
      else l.current = null;
  }
  function Pd(e) {
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
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function Ps(e, t, l) {
    try {
      var n = e.stateNode;
      Py(n, e.type, l, t), n[gt] = t;
    } catch (i) {
      De(e, e.return, i);
    }
  }
  function e0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && $l(e.type) || e.tag === 4;
  }
  function eo(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || e0(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && $l(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function to(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = sl));
    else if (n !== 4 && (n === 27 && $l(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (to(e, t, l), e = e.sibling; e !== null; )
        to(e, t, l), e = e.sibling;
  }
  function Au(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && $l(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Au(e, t, l), e = e.sibling; e !== null; )
        Au(e, t, l), e = e.sibling;
  }
  function t0(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, i = t.attributes; i.length; )
        t.removeAttributeNode(i[0]);
      ct(t, n, l), t[ut] = e, t[gt] = l;
    } catch (r) {
      De(e, e.return, r);
    }
  }
  var vl = !1, et = !1, lo = !1, l0 = typeof WeakSet == "function" ? WeakSet : Set, at = null;
  function My(e, t) {
    if (e = e.containerInfo, wo = Zu, e = hf(e), $r(e)) {
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
            var i = n.anchorOffset, r = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, r.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, h = -1, b = -1, N = 0, z = 0, B = e, O = null;
            t: for (; ; ) {
              for (var U; B !== l || i !== 0 && B.nodeType !== 3 || (h = f + i), B !== r || n !== 0 && B.nodeType !== 3 || (b = f + n), B.nodeType === 3 && (f += B.nodeValue.length), (U = B.firstChild) !== null; )
                O = B, B = U;
              for (; ; ) {
                if (B === e) break t;
                if (O === l && ++N === i && (h = f), O === r && ++z === n && (b = f), (U = B.nextSibling) !== null) break;
                B = O, O = B.parentNode;
              }
              B = U;
            }
            l = h === -1 || b === -1 ? null : { start: h, end: b };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (xo = { focusedElem: e, selectionRange: l }, Zu = !1, at = t; at !== null; )
      if (t = at, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, at = e;
      else
        for (; at !== null; ) {
          switch (t = at, r = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (l = 0; l < e.length; l++)
                  i = e[l], i.ref.impl = i.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && r !== null) {
                e = void 0, l = t, i = r.memoizedProps, r = r.memoizedState, n = l.stateNode;
                try {
                  var $ = En(
                    l.type,
                    i
                  );
                  e = n.getSnapshotBeforeUpdate(
                    $,
                    r
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  De(
                    l,
                    l.return,
                    le
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
            e.return = t.return, at = e;
            break;
          }
          at = t.return;
        }
  }
  function n0(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        bl(e, l), n & 4 && ei(5, l);
        break;
      case 1:
        if (bl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              De(l, l.return, f);
            }
          else {
            var i = En(
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
              De(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && Wd(l), n & 512 && ti(l, l.return);
        break;
      case 3:
        if (bl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
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
            De(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && t0(l);
      case 26:
      case 5:
        bl(e, l), t === null && n & 4 && Pd(l), n & 512 && ti(l, l.return);
        break;
      case 12:
        bl(e, l);
        break;
      case 31:
        bl(e, l), n & 4 && u0(e, l);
        break;
      case 13:
        bl(e, l), n & 4 && r0(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Yy.bind(
          null,
          l
        ), r1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || vl, !n) {
          t = t !== null && t.memoizedState !== null || et, i = vl;
          var r = et;
          vl = n, (et = t) && !r ? Sl(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : bl(e, l), vl = i, et = r;
        }
        break;
      case 30:
        break;
      default:
        bl(e, l);
    }
  }
  function a0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, a0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Mr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ye = null, pt = !1;
  function El(e, t, l) {
    for (l = l.child; l !== null; )
      i0(e, t, l), l = l.sibling;
  }
  function i0(e, t, l) {
    if (At && typeof At.onCommitFiberUnmount == "function")
      try {
        At.onCommitFiberUnmount(xa, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        et || al(l, t), El(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        et || al(l, t);
        var n = Ye, i = pt;
        $l(l.type) && (Ye = l.stateNode, pt = !1), El(
          e,
          t,
          l
        ), ci(l.stateNode), Ye = n, pt = i;
        break;
      case 5:
        et || al(l, t);
      case 6:
        if (n = Ye, i = pt, Ye = null, El(
          e,
          t,
          l
        ), Ye = n, pt = i, Ye !== null)
          if (pt)
            try {
              (Ye.nodeType === 9 ? Ye.body : Ye.nodeName === "HTML" ? Ye.ownerDocument.body : Ye).removeChild(l.stateNode);
            } catch (r) {
              De(
                l,
                t,
                r
              );
            }
          else
            try {
              Ye.removeChild(l.stateNode);
            } catch (r) {
              De(
                l,
                t,
                r
              );
            }
        break;
      case 18:
        Ye !== null && (pt ? (e = Ye, W0(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), ha(e)) : W0(Ye, l.stateNode));
        break;
      case 4:
        n = Ye, i = pt, Ye = l.stateNode.containerInfo, pt = !0, El(
          e,
          t,
          l
        ), Ye = n, pt = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xl(2, l, t), et || Xl(4, l, t), El(
          e,
          t,
          l
        );
        break;
      case 1:
        et || (al(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && Id(
          l,
          t,
          n
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
        et = (n = et) || l.memoizedState !== null, El(
          e,
          t,
          l
        ), et = n;
        break;
      default:
        El(
          e,
          t,
          l
        );
    }
  }
  function u0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ha(e);
      } catch (l) {
        De(t, t.return, l);
      }
    }
  }
  function r0(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ha(e);
      } catch (l) {
        De(t, t.return, l);
      }
  }
  function Uy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new l0()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new l0()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function Cu(e, t) {
    var l = Uy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var i = Xy.bind(null, e, n);
        n.then(i, i);
      }
    });
  }
  function vt(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var i = l[n], r = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if ($l(h.type)) {
                Ye = h.stateNode, pt = !1;
                break e;
              }
              break;
            case 5:
              Ye = h.stateNode, pt = !1;
              break e;
            case 3:
            case 4:
              Ye = h.stateNode.containerInfo, pt = !0;
              break e;
          }
          h = h.return;
        }
        if (Ye === null) throw Error(c(160));
        i0(r, f, i), Ye = null, pt = !1, r = i.alternate, r !== null && (r.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        s0(t, e), t = t.sibling;
  }
  var It = null;
  function s0(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        vt(t, e), Et(e), n & 4 && (Xl(3, e, e.return), ei(3, e), Xl(5, e, e.return));
        break;
      case 1:
        vt(t, e), Et(e), n & 512 && (et || l === null || al(l, l.return)), n & 64 && vl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var i = It;
        if (vt(t, e), Et(e), n & 512 && (et || l === null || al(l, l.return)), n & 4) {
          var r = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, i = i.ownerDocument || i;
                  t: switch (n) {
                    case "title":
                      r = i.getElementsByTagName("title")[0], (!r || r[Na] || r[ut] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = i.createElement(n), i.head.insertBefore(
                        r,
                        i.querySelector("head > title")
                      )), ct(r, n, l), r[ut] = e, nt(r), n = r;
                      break e;
                    case "link":
                      var f = sm(
                        "link",
                        "href",
                        i
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (r = f[h], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      r = i.createElement(n), ct(r, n, l), i.head.appendChild(r);
                      break;
                    case "meta":
                      if (f = sm(
                        "meta",
                        "content",
                        i
                      ).get(n + (l.content || ""))) {
                        for (h = 0; h < f.length; h++)
                          if (r = f[h], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      r = i.createElement(n), ct(r, n, l), i.head.appendChild(r);
                      break;
                    default:
                      throw Error(c(468, n));
                  }
                  r[ut] = e, nt(r), n = r;
                }
                e.stateNode = n;
              } else
                om(
                  i,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = rm(
                i,
                n,
                e.memoizedProps
              );
          else
            r !== n ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, n === null ? om(
              i,
              e.type,
              e.stateNode
            ) : rm(
              i,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Ps(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        vt(t, e), Et(e), n & 512 && (et || l === null || al(l, l.return)), l !== null && n & 4 && Ps(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (vt(t, e), Et(e), n & 512 && (et || l === null || al(l, l.return)), e.flags & 32) {
          i = e.stateNode;
          try {
            Hn(i, "");
          } catch ($) {
            De(e, e.return, $);
          }
        }
        n & 4 && e.stateNode != null && (i = e.memoizedProps, Ps(
          e,
          i,
          l !== null ? l.memoizedProps : i
        )), n & 1024 && (lo = !0);
        break;
      case 6:
        if (vt(t, e), Et(e), n & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch ($) {
            De(e, e.return, $);
          }
        }
        break;
      case 3:
        if (ku = null, i = It, It = Yu(t.containerInfo), vt(t, e), It = i, Et(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ha(t.containerInfo);
          } catch ($) {
            De(e, e.return, $);
          }
        lo && (lo = !1, o0(e));
        break;
      case 4:
        n = It, It = Yu(
          e.stateNode.containerInfo
        ), vt(t, e), Et(e), It = n;
        break;
      case 12:
        vt(t, e), Et(e);
        break;
      case 31:
        vt(t, e), Et(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Cu(e, n)));
        break;
      case 13:
        vt(t, e), Et(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (_u = xt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Cu(e, n)));
        break;
      case 22:
        i = e.memoizedState !== null;
        var b = l !== null && l.memoizedState !== null, N = vl, z = et;
        if (vl = N || i, et = z || b, vt(t, e), et = z, vl = N, Et(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, i && (l === null || b || vl || et || bn(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                b = l = t;
                try {
                  if (r = b.stateNode, i)
                    f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    h = b.stateNode;
                    var B = b.memoizedProps.style, O = B != null && B.hasOwnProperty("display") ? B.display : null;
                    h.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch ($) {
                  De(b, b.return, $);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                b = t;
                try {
                  b.stateNode.nodeValue = i ? "" : b.memoizedProps;
                } catch ($) {
                  De(b, b.return, $);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                b = t;
                try {
                  var U = b.stateNode;
                  i ? I0(U, !0) : I0(b.stateNode, !1);
                } catch ($) {
                  De(b, b.return, $);
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
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Cu(e, l))));
        break;
      case 19:
        vt(t, e), Et(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Cu(e, n)));
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
        for (var l, n = e.return; n !== null; ) {
          if (e0(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(c(160));
        switch (l.tag) {
          case 27:
            var i = l.stateNode, r = eo(e);
            Au(e, r, i);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (Hn(f, ""), l.flags &= -33);
            var h = eo(e);
            Au(e, h, f);
            break;
          case 3:
          case 4:
            var b = l.stateNode.containerInfo, N = eo(e);
            to(
              e,
              N,
              b
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (z) {
        De(e, e.return, z);
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
  function bl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        n0(e, t.alternate, t), t = t.sibling;
  }
  function bn(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xl(4, t, t.return), bn(t);
          break;
        case 1:
          al(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Id(
            t,
            t.return,
            l
          ), bn(t);
          break;
        case 27:
          ci(t.stateNode);
        case 26:
        case 5:
          al(t, t.return), bn(t);
          break;
        case 22:
          t.memoizedState === null && bn(t);
          break;
        case 30:
          bn(t);
          break;
        default:
          bn(t);
      }
      e = e.sibling;
    }
  }
  function Sl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, i = e, r = t, f = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Sl(
            i,
            r,
            l
          ), ei(4, r);
          break;
        case 1:
          if (Sl(
            i,
            r,
            l
          ), n = r, i = n.stateNode, typeof i.componentDidMount == "function")
            try {
              i.componentDidMount();
            } catch (N) {
              De(n, n.return, N);
            }
          if (n = r, i = n.updateQueue, i !== null) {
            var h = n.stateNode;
            try {
              var b = i.shared.hiddenCallbacks;
              if (b !== null)
                for (i.shared.hiddenCallbacks = null, i = 0; i < b.length; i++)
                  Gf(b[i], h);
            } catch (N) {
              De(n, n.return, N);
            }
          }
          l && f & 64 && Wd(r), ti(r, r.return);
          break;
        case 27:
          t0(r);
        case 26:
        case 5:
          Sl(
            i,
            r,
            l
          ), l && n === null && f & 4 && Pd(r), ti(r, r.return);
          break;
        case 12:
          Sl(
            i,
            r,
            l
          );
          break;
        case 31:
          Sl(
            i,
            r,
            l
          ), l && f & 4 && u0(i, r);
          break;
        case 13:
          Sl(
            i,
            r,
            l
          ), l && f & 4 && r0(i, r);
          break;
        case 22:
          r.memoizedState === null && Sl(
            i,
            r,
            l
          ), ti(r, r.return);
          break;
        case 30:
          break;
        default:
          Sl(
            i,
            r,
            l
          );
      }
      t = t.sibling;
    }
  }
  function no(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && Ya(l));
  }
  function ao(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ya(e));
  }
  function Pt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        c0(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function c0(e, t, l, n) {
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pt(
          e,
          t,
          l,
          n
        ), i & 2048 && ei(9, t);
        break;
      case 1:
        Pt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Pt(
          e,
          t,
          l,
          n
        ), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Ya(e)));
        break;
      case 12:
        if (i & 2048) {
          Pt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var r = t.memoizedProps, f = r.id, h = r.onPostCommit;
            typeof h == "function" && h(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (b) {
            De(t, t.return, b);
          }
        } else
          Pt(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Pt(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Pt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, f = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? Pt(
          e,
          t,
          l,
          n
        ) : li(e, t) : r._visibility & 2 ? Pt(
          e,
          t,
          l,
          n
        ) : (r._visibility |= 2, na(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), i & 2048 && no(f, t);
        break;
      case 24:
        Pt(
          e,
          t,
          l,
          n
        ), i & 2048 && ao(t.alternate, t);
        break;
      default:
        Pt(
          e,
          t,
          l,
          n
        );
    }
  }
  function na(e, t, l, n, i) {
    for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, f = t, h = l, b = n, N = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          na(
            r,
            f,
            h,
            b,
            i
          ), ei(8, f);
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          f.memoizedState !== null ? z._visibility & 2 ? na(
            r,
            f,
            h,
            b,
            i
          ) : li(
            r,
            f
          ) : (z._visibility |= 2, na(
            r,
            f,
            h,
            b,
            i
          )), i && N & 2048 && no(
            f.alternate,
            f
          );
          break;
        case 24:
          na(
            r,
            f,
            h,
            b,
            i
          ), i && N & 2048 && ao(f.alternate, f);
          break;
        default:
          na(
            r,
            f,
            h,
            b,
            i
          );
      }
      t = t.sibling;
    }
  }
  function li(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, i = n.flags;
        switch (n.tag) {
          case 22:
            li(l, n), i & 2048 && no(
              n.alternate,
              n
            );
            break;
          case 24:
            li(l, n), i & 2048 && ao(n.alternate, n);
            break;
          default:
            li(l, n);
        }
        t = t.sibling;
      }
  }
  var ni = 8192;
  function aa(e, t, l) {
    if (e.subtreeFlags & ni)
      for (e = e.child; e !== null; )
        f0(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function f0(e, t, l) {
    switch (e.tag) {
      case 26:
        aa(
          e,
          t,
          l
        ), e.flags & ni && e.memoizedState !== null && E1(
          l,
          It,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        aa(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = It;
        It = Yu(e.stateNode.containerInfo), aa(
          e,
          t,
          l
        ), It = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = ni, ni = 16777216, aa(
          e,
          t,
          l
        ), ni = n) : aa(
          e,
          t,
          l
        ));
        break;
      default:
        aa(
          e,
          t,
          l
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
  function ai(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          at = n, h0(
            n,
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
        ai(e), e.flags & 2048 && Xl(9, e, e.return);
        break;
      case 3:
        ai(e);
        break;
      case 12:
        ai(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Nu(e)) : ai(e);
        break;
      default:
        ai(e);
    }
  }
  function Nu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          at = n, h0(
            n,
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
          Xl(8, t, t.return), Nu(t);
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
  function h0(e, t) {
    for (; at !== null; ) {
      var l = at;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Xl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Ya(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, at = n;
      else
        e: for (l = e; at !== null; ) {
          n = at;
          var i = n.sibling, r = n.return;
          if (a0(n), n === l) {
            at = null;
            break e;
          }
          if (i !== null) {
            i.return = r, at = i;
            break e;
          }
          at = r;
        }
    }
  }
  var zy = {
    getCacheForType: function(e) {
      var t = st(We), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return st(We).controller.signal;
    }
  }, Ly = typeof WeakMap == "function" ? WeakMap : Map, Ce = 0, je = null, ge = null, ve = 0, Oe = 0, Mt = null, kl = !1, ia = !1, io = !1, Rl = 0, Ke = 0, Vl = 0, Sn = 0, uo = 0, Ut = 0, ua = 0, ii = null, bt = null, ro = !1, _u = 0, g0 = 0, Ou = 1 / 0, Du = null, Kl = null, tt = 0, Ql = null, ra = null, Tl = 0, so = 0, oo = null, y0 = null, ui = 0, co = null;
  function zt() {
    return (Ce & 2) !== 0 && ve !== 0 ? ve & -ve : Y.T !== null ? po() : Dc();
  }
  function p0() {
    if (Ut === 0)
      if ((ve & 536870912) === 0 || Se) {
        var e = qi;
        qi <<= 1, (qi & 3932160) === 0 && (qi = 262144), Ut = e;
      } else Ut = 536870912;
    return e = Ot.current, e !== null && (e.flags |= 32), Ut;
  }
  function St(e, t, l) {
    (e === je && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null) && (sa(e, 0), Zl(
      e,
      ve,
      Ut,
      !1
    )), Ca(e, l), ((Ce & 2) === 0 || e !== je) && (e === je && ((Ce & 2) === 0 && (Sn |= l), Ke === 4 && Zl(
      e,
      ve,
      Ut,
      !1
    )), il(e));
  }
  function v0(e, t, l) {
    if ((Ce & 6) !== 0) throw Error(c(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Aa(e, t), i = n ? By(e, t) : mo(e, t, !0), r = n;
    do {
      if (i === 0) {
        ia && !n && Zl(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, r && !jy(l)) {
          i = mo(e, t, !1), r = !1;
          continue;
        }
        if (i === 2) {
          if (r = t, e.errorRecoveryDisabledLanes & r)
            var f = 0;
          else
            f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            e: {
              var h = e;
              i = ii;
              var b = h.current.memoizedState.isDehydrated;
              if (b && (sa(h, f).flags |= 256), f = mo(
                h,
                f,
                !1
              ), f !== 2) {
                if (io && !b) {
                  h.errorRecoveryDisabledLanes |= r, Sn |= r, i = 4;
                  break e;
                }
                r = bt, bt = i, r !== null && (bt === null ? bt = r : bt.push.apply(
                  bt,
                  r
                ));
              }
              i = f;
            }
            if (r = !1, i !== 2) continue;
          }
        }
        if (i === 1) {
          sa(e, 0), Zl(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, r = i, r) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Zl(
                n,
                t,
                Ut,
                !kl
              );
              break e;
            case 2:
              bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (i = _u + 300 - xt(), 10 < i)) {
            if (Zl(
              n,
              t,
              Ut,
              !kl
            ), Yi(n, 0, !0) !== 0) break e;
            Tl = t, n.timeoutHandle = $0(
              E0.bind(
                null,
                n,
                l,
                bt,
                Du,
                ro,
                t,
                Ut,
                Sn,
                ua,
                kl,
                r,
                "Throttled",
                -0,
                0
              ),
              i
            );
            break e;
          }
          E0(
            n,
            l,
            bt,
            Du,
            ro,
            t,
            Ut,
            Sn,
            ua,
            kl,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    il(e);
  }
  function E0(e, t, l, n, i, r, f, h, b, N, z, B, O, U) {
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
      }, f0(
        t,
        r,
        B
      );
      var $ = (r & 62914560) === r ? _u - xt() : (r & 4194048) === r ? g0 - xt() : 0;
      if ($ = b1(
        B,
        $
      ), $ !== null) {
        Tl = r, e.cancelPendingCommit = $(
          C0.bind(
            null,
            e,
            t,
            r,
            l,
            n,
            i,
            f,
            h,
            b,
            z,
            B,
            null,
            O,
            U
          )
        ), Zl(e, r, f, !N);
        return;
      }
    }
    C0(
      e,
      t,
      r,
      l,
      n,
      i,
      f,
      h,
      b
    );
  }
  function jy(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null)))
        for (var n = 0; n < l.length; n++) {
          var i = l[n], r = i.getSnapshot;
          i = i.value;
          try {
            if (!Nt(r(), i)) return !1;
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
  function Zl(e, t, l, n) {
    t &= ~uo, t &= ~Sn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var i = t; 0 < i; ) {
      var r = 31 - Ct(i), f = 1 << r;
      n[r] = -1, i &= ~f;
    }
    l !== 0 && Nc(e, l, t);
  }
  function Mu() {
    return (Ce & 6) === 0 ? (ri(0), !1) : !0;
  }
  function fo() {
    if (ge !== null) {
      if (Oe === 0)
        var e = ge.return;
      else
        e = ge, dl = dn = null, Cs(e), In = null, ka = 0, e = ge;
      for (; e !== null; )
        Fd(e.alternate, e), e = e.return;
      ge = null;
    }
  }
  function sa(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, l1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Tl = 0, fo(), je = e, ge = l = cl(e.current, null), ve = t, Oe = 0, Mt = null, kl = !1, ia = Aa(e, t), io = !1, ua = Ut = uo = Sn = Vl = Ke = 0, bt = ii = null, ro = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var i = 31 - Ct(n), r = 1 << i;
        t |= e[i], n &= ~r;
      }
    return Rl = t, Pi(), l;
  }
  function b0(e, t) {
    se = null, Y.H = Wa, t === Wn || t === ru ? (t = jf(), Oe = 3) : t === gs ? (t = jf(), Oe = 4) : Oe = t === ks ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Mt = t, ge === null && (Ke = 1, Su(
      e,
      qt(t, e.current)
    ));
  }
  function S0() {
    var e = Ot.current;
    return e === null ? !0 : (ve & 4194048) === ve ? kt === null : (ve & 62914560) === ve || (ve & 536870912) !== 0 ? e === kt : !1;
  }
  function R0() {
    var e = Y.H;
    return Y.H = Wa, e === null ? Wa : e;
  }
  function T0() {
    var e = Y.A;
    return Y.A = zy, e;
  }
  function Uu() {
    Ke = 4, kl || (ve & 4194048) !== ve && Ot.current !== null || (ia = !0), (Vl & 134217727) === 0 && (Sn & 134217727) === 0 || je === null || Zl(
      je,
      ve,
      Ut,
      !1
    );
  }
  function mo(e, t, l) {
    var n = Ce;
    Ce |= 2;
    var i = R0(), r = T0();
    (je !== e || ve !== t) && (Du = null, sa(e, t)), t = !1;
    var f = Ke;
    e: do
      try {
        if (Oe !== 0 && ge !== null) {
          var h = ge, b = Mt;
          switch (Oe) {
            case 8:
              fo(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ot.current === null && (t = !0);
              var N = Oe;
              if (Oe = 0, Mt = null, oa(e, h, b, N), l && ia) {
                f = 0;
                break e;
              }
              break;
            default:
              N = Oe, Oe = 0, Mt = null, oa(e, h, b, N);
          }
        }
        Hy(), f = Ke;
        break;
      } catch (z) {
        b0(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, dl = dn = null, Ce = n, Y.H = i, Y.A = r, ge === null && (je = null, ve = 0, Pi()), f;
  }
  function Hy() {
    for (; ge !== null; ) w0(ge);
  }
  function By(e, t) {
    var l = Ce;
    Ce |= 2;
    var n = R0(), i = T0();
    je !== e || ve !== t ? (Du = null, Ou = xt() + 500, sa(e, t)) : ia = Aa(
      e,
      t
    );
    e: do
      try {
        if (Oe !== 0 && ge !== null) {
          t = ge;
          var r = Mt;
          t: switch (Oe) {
            case 1:
              Oe = 0, Mt = null, oa(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (zf(r)) {
                Oe = 0, Mt = null, x0(t);
                break;
              }
              t = function() {
                Oe !== 2 && Oe !== 9 || je !== e || (Oe = 7), il(e);
              }, r.then(t, t);
              break e;
            case 3:
              Oe = 7;
              break e;
            case 4:
              Oe = 5;
              break e;
            case 7:
              zf(r) ? (Oe = 0, Mt = null, x0(t)) : (Oe = 0, Mt = null, oa(e, t, r, 7));
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
                    Oe = 0, Mt = null;
                    var b = h.sibling;
                    if (b !== null) ge = b;
                    else {
                      var N = h.return;
                      N !== null ? (ge = N, zu(N)) : ge = null;
                    }
                    break t;
                  }
              }
              Oe = 0, Mt = null, oa(e, t, r, 5);
              break;
            case 6:
              Oe = 0, Mt = null, oa(e, t, r, 6);
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
      } catch (z) {
        b0(e, z);
      }
    while (!0);
    return dl = dn = null, Y.H = n, Y.A = i, Ce = l, ge !== null ? 0 : (je = null, ve = 0, Pi(), Ke);
  }
  function qy() {
    for (; ge !== null && !sg(); )
      w0(ge);
  }
  function w0(e) {
    var t = Jd(e.alternate, e, Rl);
    e.memoizedProps = e.pendingProps, t === null ? zu(e) : ge = t;
  }
  function x0(e) {
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
        Cs(t);
      default:
        Fd(l, t), t = ge = Tf(t, Rl), t = Jd(l, t, Rl);
    }
    e.memoizedProps = e.pendingProps, t === null ? zu(e) : ge = t;
  }
  function oa(e, t, l, n) {
    dl = dn = null, Cs(t), In = null, ka = 0;
    var i = t.return;
    try {
      if (Cy(
        e,
        i,
        t,
        l,
        ve
      )) {
        Ke = 1, Su(
          e,
          qt(l, e.current)
        ), ge = null;
        return;
      }
    } catch (r) {
      if (i !== null) throw ge = i, r;
      Ke = 1, Su(
        e,
        qt(l, e.current)
      ), ge = null;
      return;
    }
    t.flags & 32768 ? (Se || n === 1 ? e = !0 : ia || (ve & 536870912) !== 0 ? e = !1 : (kl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = Ot.current, n !== null && n.tag === 13 && (n.flags |= 16384))), A0(t, e)) : zu(t);
  }
  function zu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        A0(
          t,
          kl
        );
        return;
      }
      e = t.return;
      var l = Oy(
        t.alternate,
        t,
        Rl
      );
      if (l !== null) {
        ge = l;
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
      var l = Dy(e.alternate, e);
      if (l !== null) {
        l.flags &= 32767, ge = l;
        return;
      }
      if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
        ge = e;
        return;
      }
      ge = e = l;
    } while (e !== null);
    Ke = 6, ge = null;
  }
  function C0(e, t, l, n, i, r, f, h, b) {
    e.cancelPendingCommit = null;
    do
      Lu();
    while (tt !== 0);
    if ((Ce & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (r = t.lanes | t.childLanes, r |= es, vg(
        e,
        l,
        r,
        f,
        h,
        b
      ), e === je && (ge = je = null, ve = 0), ra = t, Ql = e, Tl = l, so = r, oo = i, y0 = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ky(Hi, function() {
        return M0(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = Y.T, Y.T = null, i = k.p, k.p = 2, f = Ce, Ce |= 4;
        try {
          My(e, t, l);
        } finally {
          Ce = f, k.p = i, Y.T = n;
        }
      }
      tt = 1, N0(), _0(), O0();
    }
  }
  function N0() {
    if (tt === 1) {
      tt = 0;
      var e = Ql, t = ra, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = Y.T, Y.T = null;
        var n = k.p;
        k.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          s0(t, e);
          var r = xo, f = hf(e.containerInfo), h = r.focusedElem, b = r.selectionRange;
          if (f !== h && h && h.ownerDocument && mf(
            h.ownerDocument.documentElement,
            h
          )) {
            if (b !== null && $r(h)) {
              var N = b.start, z = b.end;
              if (z === void 0 && (z = N), "selectionStart" in h)
                h.selectionStart = N, h.selectionEnd = Math.min(
                  z,
                  h.value.length
                );
              else {
                var B = h.ownerDocument || document, O = B && B.defaultView || window;
                if (O.getSelection) {
                  var U = O.getSelection(), $ = h.textContent.length, le = Math.min(b.start, $), ze = b.end === void 0 ? le : Math.min(b.end, $);
                  !U.extend && le > ze && (f = ze, ze = le, le = f);
                  var x = df(
                    h,
                    le
                  ), R = df(
                    h,
                    ze
                  );
                  if (x && R && (U.rangeCount !== 1 || U.anchorNode !== x.node || U.anchorOffset !== x.offset || U.focusNode !== R.node || U.focusOffset !== R.offset)) {
                    var C = B.createRange();
                    C.setStart(x.node, x.offset), U.removeAllRanges(), le > ze ? (U.addRange(C), U.extend(R.node, R.offset)) : (C.setEnd(R.node, R.offset), U.addRange(C));
                  }
                }
              }
            }
            for (B = [], U = h; U = U.parentNode; )
              U.nodeType === 1 && B.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < B.length; h++) {
              var H = B[h];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Zu = !!wo, xo = wo = null;
        } finally {
          Ce = i, k.p = n, Y.T = l;
        }
      }
      e.current = t, tt = 2;
    }
  }
  function _0() {
    if (tt === 2) {
      tt = 0;
      var e = Ql, t = ra, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = Y.T, Y.T = null;
        var n = k.p;
        k.p = 2;
        var i = Ce;
        Ce |= 4;
        try {
          n0(e, t.alternate, t);
        } finally {
          Ce = i, k.p = n, Y.T = l;
        }
      }
      tt = 3;
    }
  }
  function O0() {
    if (tt === 4 || tt === 3) {
      tt = 0, og();
      var e = Ql, t = ra, l = Tl, n = y0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? tt = 5 : (tt = 0, ra = Ql = null, D0(e, e.pendingLanes));
      var i = e.pendingLanes;
      if (i === 0 && (Kl = null), Or(l), t = t.stateNode, At && typeof At.onCommitFiberRoot == "function")
        try {
          At.onCommitFiberRoot(
            xa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        t = Y.T, i = k.p, k.p = 2, Y.T = null;
        try {
          for (var r = e.onRecoverableError, f = 0; f < n.length; f++) {
            var h = n[f];
            r(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          Y.T = t, k.p = i;
        }
      }
      (Tl & 3) !== 0 && Lu(), il(e), i = e.pendingLanes, (l & 261930) !== 0 && (i & 42) !== 0 ? e === co ? ui++ : (ui = 0, co = e) : ui = 0, ri(0);
    }
  }
  function D0(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Ya(t)));
  }
  function Lu() {
    return N0(), _0(), O0(), M0();
  }
  function M0() {
    if (tt !== 5) return !1;
    var e = Ql, t = so;
    so = 0;
    var l = Or(Tl), n = Y.T, i = k.p;
    try {
      k.p = 32 > l ? 32 : l, Y.T = null, l = oo, oo = null;
      var r = Ql, f = Tl;
      if (tt = 0, ra = Ql = null, Tl = 0, (Ce & 6) !== 0) throw Error(c(331));
      var h = Ce;
      if (Ce |= 4, m0(r.current), c0(
        r,
        r.current,
        f,
        l
      ), Ce = h, ri(0, !1), At && typeof At.onPostCommitFiberRoot == "function")
        try {
          At.onPostCommitFiberRoot(xa, r);
        } catch {
        }
      return !0;
    } finally {
      k.p = i, Y.T = n, D0(e, t);
    }
  }
  function U0(e, t, l) {
    t = qt(l, t), t = Xs(e.stateNode, t, 2), e = ql(e, t, 2), e !== null && (Ca(e, 2), il(e));
  }
  function De(e, t, l) {
    if (e.tag === 3)
      U0(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          U0(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Kl === null || !Kl.has(n))) {
            e = qt(l, e), l = zd(2), n = ql(t, l, 2), n !== null && (Ld(
              l,
              n,
              t,
              e
            ), Ca(n, 2), il(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function ho(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Ly();
      var i = /* @__PURE__ */ new Set();
      n.set(t, i);
    } else
      i = n.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), n.set(t, i));
    i.has(l) || (io = !0, i.add(l), e = Gy.bind(null, e, t, l), t.then(e, e));
  }
  function Gy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, je === e && (ve & l) === l && (Ke === 4 || Ke === 3 && (ve & 62914560) === ve && 300 > xt() - _u ? (Ce & 2) === 0 && sa(e, 0) : uo |= l, ua === ve && (ua = 0)), il(e);
  }
  function z0(e, t) {
    t === 0 && (t = Cc()), e = on(e, t), e !== null && (Ca(e, t), il(e));
  }
  function Yy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), z0(e, l);
  }
  function Xy(e, t) {
    var l = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode, i = e.memoizedState;
        i !== null && (l = i.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    n !== null && n.delete(t), z0(e, l);
  }
  function ky(e, t) {
    return Ar(e, t);
  }
  var ju = null, ca = null, go = !1, Hu = !1, yo = !1, Jl = 0;
  function il(e) {
    e !== ca && e.next === null && (ca === null ? ju = ca = e : ca = ca.next = e), Hu = !0, go || (go = !0, Ky());
  }
  function ri(e, t) {
    if (!yo && Hu) {
      yo = !0;
      do
        for (var l = !1, n = ju; n !== null; ) {
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var r = 0;
            else {
              var f = n.suspendedLanes, h = n.pingedLanes;
              r = (1 << 31 - Ct(42 | e) + 1) - 1, r &= i & ~(f & ~h), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (l = !0, B0(n, r));
          } else
            r = ve, r = Yi(
              n,
              n === je ? r : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (r & 3) === 0 || Aa(n, r) || (l = !0, B0(n, r));
          n = n.next;
        }
      while (l);
      yo = !1;
    }
  }
  function Vy() {
    L0();
  }
  function L0() {
    Hu = go = !1;
    var e = 0;
    Jl !== 0 && t1() && (e = Jl);
    for (var t = xt(), l = null, n = ju; n !== null; ) {
      var i = n.next, r = j0(n, t);
      r === 0 ? (n.next = null, l === null ? ju = i : l.next = i, i === null && (ca = l)) : (l = n, (e !== 0 || (r & 3) !== 0) && (Hu = !0)), n = i;
    }
    tt !== 0 && tt !== 5 || ri(e), Jl !== 0 && (Jl = 0);
  }
  function j0(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, i = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var f = 31 - Ct(r), h = 1 << f, b = i[f];
      b === -1 ? ((h & l) === 0 || (h & n) !== 0) && (i[f] = pg(h, t)) : b <= t && (e.expiredLanes |= h), r &= ~h;
    }
    if (t = je, l = ve, l = Yi(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Oe === 2 || Oe === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Cr(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || Aa(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Cr(n), Or(l)) {
        case 2:
        case 8:
          l = xc;
          break;
        case 32:
          l = Hi;
          break;
        case 268435456:
          l = Ac;
          break;
        default:
          l = Hi;
      }
      return n = H0.bind(null, e), l = Ar(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Cr(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function H0(e, t) {
    if (tt !== 0 && tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (Lu() && e.callbackNode !== l)
      return null;
    var n = ve;
    return n = Yi(
      e,
      e === je ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (v0(e, n, t), j0(e, xt()), e.callbackNode != null && e.callbackNode === l ? H0.bind(null, e) : null);
  }
  function B0(e, t) {
    if (Lu()) return null;
    v0(e, t, !0);
  }
  function Ky() {
    n1(function() {
      (Ce & 6) !== 0 ? Ar(
        wc,
        Vy
      ) : L0();
    });
  }
  function po() {
    if (Jl === 0) {
      var e = $n;
      e === 0 && (e = Bi, Bi <<= 1, (Bi & 261888) === 0 && (Bi = 256)), Jl = e;
    }
    return Jl;
  }
  function q0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ki("" + e);
  }
  function G0(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function Qy(e, t, l, n, i) {
    if (t === "submit" && l && l.stateNode === i) {
      var r = q0(
        (i[gt] || null).action
      ), f = n.submitter;
      f && (t = (t = f[gt] || null) ? q0(t.formAction) : f.getAttribute("formAction"), t !== null && (r = t, f = null));
      var h = new $i(
        "action",
        "action",
        null,
        n,
        i
      );
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (Jl !== 0) {
                  var b = f ? G0(i, f) : new FormData(i);
                  js(
                    l,
                    {
                      pending: !0,
                      data: b,
                      method: i.method,
                      action: r
                    },
                    null,
                    b
                  );
                }
              } else
                typeof r == "function" && (h.preventDefault(), b = f ? G0(i, f) : new FormData(i), js(
                  l,
                  {
                    pending: !0,
                    data: b,
                    method: i.method,
                    action: r
                  },
                  r,
                  b
                ));
            },
            currentTarget: i
          }
        ]
      });
    }
  }
  for (var vo = 0; vo < Pr.length; vo++) {
    var Eo = Pr[vo], Zy = Eo.toLowerCase(), Jy = Eo[0].toUpperCase() + Eo.slice(1);
    Wt(
      Zy,
      "on" + Jy
    );
  }
  Wt(pf, "onAnimationEnd"), Wt(vf, "onAnimationIteration"), Wt(Ef, "onAnimationStart"), Wt("dblclick", "onDoubleClick"), Wt("focusin", "onFocus"), Wt("focusout", "onBlur"), Wt(cy, "onTransitionRun"), Wt(fy, "onTransitionStart"), Wt(dy, "onTransitionCancel"), Wt(bf, "onTransitionEnd"), Ln("onMouseEnter", ["mouseout", "mouseover"]), Ln("onMouseLeave", ["mouseout", "mouseover"]), Ln("onPointerEnter", ["pointerout", "pointerover"]), Ln("onPointerLeave", ["pointerout", "pointerover"]), an(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), an(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), an("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), an(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), an(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), an(
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
    for (var l = 0; l < e.length; l++) {
      var n = e[l], i = n.event;
      n = n.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var h = n[f], b = h.instance, N = h.currentTarget;
            if (h = h.listener, b !== r && i.isPropagationStopped())
              break e;
            r = h, i.currentTarget = N;
            try {
              r(i);
            } catch (z) {
              Ii(z);
            }
            i.currentTarget = null, r = b;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (h = n[f], b = h.instance, N = h.currentTarget, h = h.listener, b !== r && i.isPropagationStopped())
              break e;
            r = h, i.currentTarget = N;
            try {
              r(i);
            } catch (z) {
              Ii(z);
            }
            i.currentTarget = null, r = b;
          }
      }
    }
  }
  function ye(e, t) {
    var l = t[Dr];
    l === void 0 && (l = t[Dr] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (X0(t, e, 2, !1), l.add(n));
  }
  function bo(e, t, l) {
    var n = 0;
    t && (n |= 4), X0(
      l,
      e,
      n,
      t
    );
  }
  var Bu = "_reactListening" + Math.random().toString(36).slice(2);
  function So(e) {
    if (!e[Bu]) {
      e[Bu] = !0, zc.forEach(function(l) {
        l !== "selectionchange" && ($y.has(l) || bo(l, !1, e), bo(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Bu] || (t[Bu] = !0, bo("selectionchange", !1, t));
    }
  }
  function X0(e, t, l, n) {
    switch (pm(t)) {
      case 2:
        var i = T1;
        break;
      case 8:
        i = w1;
        break;
      default:
        i = jo;
    }
    l = i.bind(
      null,
      t,
      l,
      e
    ), i = void 0, !Gr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), n ? i !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: i
    }) : e.addEventListener(t, l, !0) : i !== void 0 ? e.addEventListener(t, l, {
      passive: i
    }) : e.addEventListener(t, l, !1);
  }
  function Ro(e, t, l, n, i) {
    var r = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var h = n.stateNode.containerInfo;
          if (h === i) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var b = f.tag;
              if ((b === 3 || b === 4) && f.stateNode.containerInfo === i)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (f = Mn(h), f === null) return;
            if (b = f.tag, b === 5 || b === 6 || b === 26 || b === 27) {
              n = r = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        n = n.return;
      }
    Qc(function() {
      var N = r, z = Br(l), B = [];
      e: {
        var O = Sf.get(e);
        if (O !== void 0) {
          var U = $i, $ = e;
          switch (e) {
            case "keypress":
              if (Zi(l) === 0) break e;
            case "keydown":
            case "keyup":
              U = Xg;
              break;
            case "focusin":
              $ = "focus", U = Vr;
              break;
            case "focusout":
              $ = "blur", U = Vr;
              break;
            case "beforeblur":
            case "afterblur":
              U = Vr;
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
              U = $c;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Og;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Kg;
              break;
            case pf:
            case vf:
            case Ef:
              U = Ug;
              break;
            case bf:
              U = Zg;
              break;
            case "scroll":
            case "scrollend":
              U = Ng;
              break;
            case "wheel":
              U = $g;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Lg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Wc;
              break;
            case "toggle":
            case "beforetoggle":
              U = Wg;
          }
          var le = (t & 4) !== 0, ze = !le && (e === "scroll" || e === "scrollend"), x = le ? O !== null ? O + "Capture" : null : O;
          le = [];
          for (var R = N, C; R !== null; ) {
            var H = R;
            if (C = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || C === null || x === null || (H = Oa(R, x), H != null && le.push(
              oi(R, H, C)
            )), ze) break;
            R = R.return;
          }
          0 < le.length && (O = new U(
            O,
            $,
            null,
            l,
            z
          ), B.push({ event: O, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", O && l !== Hr && ($ = l.relatedTarget || l.fromElement) && (Mn($) || $[Dn]))
            break e;
          if ((U || O) && (O = z.window === z ? z : (O = z.ownerDocument) ? O.defaultView || O.parentWindow : window, U ? ($ = l.relatedTarget || l.toElement, U = N, $ = $ ? Mn($) : null, $ !== null && (ze = m($), le = $.tag, $ !== ze || le !== 5 && le !== 27 && le !== 6) && ($ = null)) : (U = null, $ = N), U !== $)) {
            if (le = $c, H = "onMouseLeave", x = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (le = Wc, H = "onPointerLeave", x = "onPointerEnter", R = "pointer"), ze = U == null ? O : _a(U), C = $ == null ? O : _a($), O = new le(
              H,
              R + "leave",
              U,
              l,
              z
            ), O.target = ze, O.relatedTarget = C, H = null, Mn(z) === N && (le = new le(
              x,
              R + "enter",
              $,
              l,
              z
            ), le.target = C, le.relatedTarget = ze, H = le), ze = H, U && $)
              t: {
                for (le = Fy, x = U, R = $, C = 0, H = x; H; H = le(H))
                  C++;
                H = 0;
                for (var P = R; P; P = le(P))
                  H++;
                for (; 0 < C - H; )
                  x = le(x), C--;
                for (; 0 < H - C; )
                  R = le(R), H--;
                for (; C--; ) {
                  if (x === R || R !== null && x === R.alternate) {
                    le = x;
                    break t;
                  }
                  x = le(x), R = le(R);
                }
                le = null;
              }
            else le = null;
            U !== null && k0(
              B,
              O,
              U,
              le,
              !1
            ), $ !== null && ze !== null && k0(
              B,
              ze,
              $,
              le,
              !0
            );
          }
        }
        e: {
          if (O = N ? _a(N) : window, U = O.nodeName && O.nodeName.toLowerCase(), U === "select" || U === "input" && O.type === "file")
            var we = uf;
          else if (nf(O))
            if (rf)
              we = ry;
            else {
              we = iy;
              var F = ay;
            }
          else
            U = O.nodeName, !U || U.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? N && jr(N.elementType) && (we = uf) : we = uy;
          if (we && (we = we(e, N))) {
            af(
              B,
              we,
              l,
              z
            );
            break e;
          }
          F && F(e, O, N), e === "focusout" && N && O.type === "number" && N.memoizedProps.value != null && Lr(O, "number", O.value);
        }
        switch (F = N ? _a(N) : window, e) {
          case "focusin":
            (nf(F) || F.contentEditable === "true") && (Yn = F, Fr = N, Ba = null);
            break;
          case "focusout":
            Ba = Fr = Yn = null;
            break;
          case "mousedown":
            Wr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wr = !1, gf(B, l, z);
            break;
          case "selectionchange":
            if (oy) break;
          case "keydown":
          case "keyup":
            gf(B, l, z);
        }
        var fe;
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
          Gn ? tf(e, l) && (Ee = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (Ic && l.locale !== "ko" && (Gn || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && Gn && (fe = Zc()) : (Ml = z, Yr = "value" in Ml ? Ml.value : Ml.textContent, Gn = !0)), F = qu(N, Ee), 0 < F.length && (Ee = new Fc(
          Ee,
          e,
          null,
          l,
          z
        ), B.push({ event: Ee, listeners: F }), fe ? Ee.data = fe : (fe = lf(l), fe !== null && (Ee.data = fe)))), (fe = Pg ? ey(e, l) : ty(e, l)) && (Ee = qu(N, "onBeforeInput"), 0 < Ee.length && (F = new Fc(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          z
        ), B.push({
          event: F,
          listeners: Ee
        }), F.data = fe)), Qy(
          B,
          e,
          N,
          l,
          z
        );
      }
      Y0(B, t);
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
    for (var l = t + "Capture", n = []; e !== null; ) {
      var i = e, r = i.stateNode;
      if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || r === null || (i = Oa(e, l), i != null && n.unshift(
        oi(e, i, r)
      ), i = Oa(e, t), i != null && n.push(
        oi(e, i, r)
      )), e.tag === 3) return n;
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
  function k0(e, t, l, n, i) {
    for (var r = t._reactName, f = []; l !== null && l !== n; ) {
      var h = l, b = h.alternate, N = h.stateNode;
      if (h = h.tag, b !== null && b === n) break;
      h !== 5 && h !== 26 && h !== 27 || N === null || (b = N, i ? (N = Oa(l, r), N != null && f.unshift(
        oi(l, N, b)
      )) : i || (N = Oa(l, r), N != null && f.push(
        oi(l, N, b)
      ))), l = l.return;
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
  function Ue(e, t, l, n, i, r) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || Hn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && Hn(e, "" + n);
        break;
      case "className":
        ki(e, "class", n);
        break;
      case "tabIndex":
        ki(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ki(e, l, n);
        break;
      case "style":
        Vc(e, n, r);
        break;
      case "data":
        if (t !== "object") {
          ki(e, "data", n);
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
        n = Ki("" + n), e.setAttribute(l, n);
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
          typeof r == "function" && (l === "formAction" ? (t !== "input" && Ue(e, t, "name", i.name, i, null), Ue(
            e,
            t,
            "formEncType",
            i.formEncType,
            i,
            null
          ), Ue(
            e,
            t,
            "formMethod",
            i.formMethod,
            i,
            null
          ), Ue(
            e,
            t,
            "formTarget",
            i.formTarget,
            i,
            null
          )) : (Ue(e, t, "encType", i.encType, i, null), Ue(e, t, "method", i.method, i, null), Ue(e, t, "target", i.target, i, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = Ki("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = sl);
        break;
      case "onScroll":
        n != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ye("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(c(61));
          if (l = n.__html, l != null) {
            if (i.children != null) throw Error(c(60));
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
        l = Ki("" + n), e.setAttributeNS(
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
        ye("beforetoggle", e), ye("toggle", e), Xi(e, "popover", n);
        break;
      case "xlinkActuate":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        rl(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        rl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        rl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        rl(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        Xi(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Ag.get(l) || l, Xi(e, l, n));
    }
  }
  function To(e, t, l, n, i, r) {
    switch (l) {
      case "style":
        Vc(e, n, r);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(c(61));
          if (l = n.__html, l != null) {
            if (i.children != null) throw Error(c(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? Hn(e, n) : (typeof n == "number" || typeof n == "bigint") && Hn(e, "" + n);
        break;
      case "onScroll":
        n != null && ye("scroll", e);
        break;
      case "onScrollEnd":
        n != null && ye("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = sl);
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
            if (l[0] === "o" && l[1] === "n" && (i = l.endsWith("Capture"), t = l.slice(2, i ? l.length - 7 : void 0), r = e[gt] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, i), typeof n == "function")) {
              typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, i);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : Xi(e, l, n);
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
        ye("error", e), ye("load", e);
        var n = !1, i = !1, r;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var f = l[r];
            if (f != null)
              switch (r) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  i = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ue(e, t, r, f, l, null);
              }
          }
        i && Ue(e, t, "srcSet", l.srcSet, l, null), n && Ue(e, t, "src", l.src, l, null);
        return;
      case "input":
        ye("invalid", e);
        var h = r = f = i = null, b = null, N = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var z = l[n];
            if (z != null)
              switch (n) {
                case "name":
                  i = z;
                  break;
                case "type":
                  f = z;
                  break;
                case "checked":
                  b = z;
                  break;
                case "defaultChecked":
                  N = z;
                  break;
                case "value":
                  r = z;
                  break;
                case "defaultValue":
                  h = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ue(e, t, n, z, l, null);
              }
          }
        Gc(
          e,
          r,
          h,
          b,
          N,
          f,
          i,
          !1
        );
        return;
      case "select":
        ye("invalid", e), n = f = r = null;
        for (i in l)
          if (l.hasOwnProperty(i) && (h = l[i], h != null))
            switch (i) {
              case "value":
                r = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                n = h;
              default:
                Ue(e, t, i, h, l, null);
            }
        t = r, l = f, e.multiple = !!n, t != null ? jn(e, !!n, t, !1) : l != null && jn(e, !!n, l, !0);
        return;
      case "textarea":
        ye("invalid", e), r = i = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (h = l[f], h != null))
            switch (f) {
              case "value":
                n = h;
                break;
              case "defaultValue":
                i = h;
                break;
              case "children":
                r = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(c(91));
                break;
              default:
                Ue(e, t, f, h, l, null);
            }
        Xc(e, n, i, r);
        return;
      case "option":
        for (b in l)
          l.hasOwnProperty(b) && (n = l[b], n != null) && (b === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ue(e, t, b, n, l, null));
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
        for (n = 0; n < si.length; n++)
          ye(si[n], e);
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
        for (N in l)
          if (l.hasOwnProperty(N) && (n = l[N], n != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ue(e, t, N, n, l, null);
            }
        return;
      default:
        if (jr(t)) {
          for (z in l)
            l.hasOwnProperty(z) && (n = l[z], n !== void 0 && To(
              e,
              t,
              z,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && (n = l[h], n != null && Ue(e, t, h, n, l, null));
  }
  function Py(e, t, l, n) {
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
        var i = null, r = null, f = null, h = null, b = null, N = null, z = null;
        for (U in l) {
          var B = l[U];
          if (l.hasOwnProperty(U) && B != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = B;
              default:
                n.hasOwnProperty(U) || Ue(e, t, U, null, n, B);
            }
        }
        for (var O in n) {
          var U = n[O];
          if (B = l[O], n.hasOwnProperty(O) && (U != null || B != null))
            switch (O) {
              case "type":
                r = U;
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
                h = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(c(137, t));
                break;
              default:
                U !== B && Ue(
                  e,
                  t,
                  O,
                  U,
                  n,
                  B
                );
            }
        }
        zr(
          e,
          f,
          h,
          b,
          N,
          z,
          r,
          i
        );
        return;
      case "select":
        U = f = h = O = null;
        for (r in l)
          if (b = l[r], l.hasOwnProperty(r) && b != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                U = b;
              default:
                n.hasOwnProperty(r) || Ue(
                  e,
                  t,
                  r,
                  null,
                  n,
                  b
                );
            }
        for (i in n)
          if (r = n[i], b = l[i], n.hasOwnProperty(i) && (r != null || b != null))
            switch (i) {
              case "value":
                O = r;
                break;
              case "defaultValue":
                h = r;
                break;
              case "multiple":
                f = r;
              default:
                r !== b && Ue(
                  e,
                  t,
                  i,
                  r,
                  n,
                  b
                );
            }
        t = h, l = f, n = U, O != null ? jn(e, !!l, O, !1) : !!n != !!l && (t != null ? jn(e, !!l, t, !0) : jn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        U = O = null;
        for (h in l)
          if (i = l[h], l.hasOwnProperty(h) && i != null && !n.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ue(e, t, h, null, n, i);
            }
        for (f in n)
          if (i = n[f], r = l[f], n.hasOwnProperty(f) && (i != null || r != null))
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
                if (i != null) throw Error(c(91));
                break;
              default:
                i !== r && Ue(e, t, f, i, n, r);
            }
        Yc(e, O, U);
        return;
      case "option":
        for (var $ in l)
          O = l[$], l.hasOwnProperty($) && O != null && !n.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : Ue(
            e,
            t,
            $,
            null,
            n,
            O
          ));
        for (b in n)
          O = n[b], U = l[b], n.hasOwnProperty(b) && O !== U && (O != null || U != null) && (b === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Ue(
            e,
            t,
            b,
            O,
            n,
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
        for (var le in l)
          O = l[le], l.hasOwnProperty(le) && O != null && !n.hasOwnProperty(le) && Ue(e, t, le, null, n, O);
        for (N in n)
          if (O = n[N], U = l[N], n.hasOwnProperty(N) && O !== U && (O != null || U != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(c(137, t));
                break;
              default:
                Ue(
                  e,
                  t,
                  N,
                  O,
                  n,
                  U
                );
            }
        return;
      default:
        if (jr(t)) {
          for (var ze in l)
            O = l[ze], l.hasOwnProperty(ze) && O !== void 0 && !n.hasOwnProperty(ze) && To(
              e,
              t,
              ze,
              void 0,
              n,
              O
            );
          for (z in n)
            O = n[z], U = l[z], !n.hasOwnProperty(z) || O === U || O === void 0 && U === void 0 || To(
              e,
              t,
              z,
              O,
              n,
              U
            );
          return;
        }
    }
    for (var x in l)
      O = l[x], l.hasOwnProperty(x) && O != null && !n.hasOwnProperty(x) && Ue(e, t, x, null, n, O);
    for (B in n)
      O = n[B], U = l[B], !n.hasOwnProperty(B) || O === U || O == null && U == null || Ue(e, t, B, O, n, U);
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
  function e1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var i = l[n], r = i.transferSize, f = i.initiatorType, h = i.duration;
        if (r && h && Q0(f)) {
          for (f = 0, h = i.responseEnd, n += 1; n < l.length; n++) {
            var b = l[n], N = b.startTime;
            if (N > h) break;
            var z = b.transferSize, B = b.initiatorType;
            z && Q0(B) && (b = b.responseEnd, f += z * (b < h ? 1 : (h - N) / (b - N)));
          }
          if (--n, t += 8 * (r + f) / (i.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var wo = null, xo = null;
  function Gu(e) {
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
  function t1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Co ? !1 : (Co = e, !0) : (Co = null, !1);
  }
  var $0 = typeof setTimeout == "function" ? setTimeout : void 0, l1 = typeof clearTimeout == "function" ? clearTimeout : void 0, F0 = typeof Promise == "function" ? Promise : void 0, n1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof F0 < "u" ? function(e) {
    return F0.resolve(null).then(e).catch(a1);
  } : $0;
  function a1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $l(e) {
    return e === "head";
  }
  function W0(e, t) {
    var l = t, n = 0;
    do {
      var i = l.nextSibling;
      if (e.removeChild(l), i && i.nodeType === 8)
        if (l = i.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(i), ha(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          ci(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, ci(l);
          for (var r = l.firstChild; r; ) {
            var f = r.nextSibling, h = r.nodeName;
            r[Na] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && r.rel.toLowerCase() === "stylesheet" || l.removeChild(r), r = f;
          }
        } else
          l === "body" && ci(e.ownerDocument.body);
      l = i;
    } while (l);
    ha(t);
  }
  function I0(e, t) {
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
  function No(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          No(l), Mr(l);
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
  function i1(e, t, l, n) {
    for (; e.nodeType === 1; ) {
      var i = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (n) {
        if (!e[Na])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (r !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (r = e.getAttribute("src"), (r !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var r = i.name == null ? null : "" + i.name;
        if (i.type === "hidden" && e.getAttribute("name") === r)
          return e;
      } else return e;
      if (e = Vt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function u1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Vt(e.nextSibling), e === null)) return null;
    return e;
  }
  function P0(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Vt(e.nextSibling), e === null)) return null;
    return e;
  }
  function _o(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Oo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function r1(e, t) {
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
  function em(e) {
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
  function tm(e) {
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
  function lm(e, t, l) {
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
    Mr(e);
  }
  var Kt = /* @__PURE__ */ new Map(), nm = /* @__PURE__ */ new Set();
  function Yu(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var wl = k.d;
  k.d = {
    f: s1,
    r: o1,
    D: c1,
    C: f1,
    L: d1,
    m: m1,
    X: g1,
    S: h1,
    M: y1
  };
  function s1() {
    var e = wl.f(), t = Mu();
    return e || t;
  }
  function o1(e) {
    var t = Un(e);
    t !== null && t.tag === 5 && t.type === "form" ? bd(t) : wl.r(e);
  }
  var fa = typeof document > "u" ? null : document;
  function am(e, t, l) {
    var n = fa;
    if (n && typeof t == "string" && t) {
      var i = Ht(t);
      i = 'link[rel="' + e + '"][href="' + i + '"]', typeof l == "string" && (i += '[crossorigin="' + l + '"]'), nm.has(i) || (nm.add(i), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(i) === null && (t = n.createElement("link"), ct(t, "link", e), nt(t), n.head.appendChild(t)));
    }
  }
  function c1(e) {
    wl.D(e), am("dns-prefetch", e, null);
  }
  function f1(e, t) {
    wl.C(e, t), am("preconnect", e, t);
  }
  function d1(e, t, l) {
    wl.L(e, t, l);
    var n = fa;
    if (n && e && t) {
      var i = 'link[rel="preload"][as="' + Ht(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (i += '[imagesrcset="' + Ht(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (i += '[imagesizes="' + Ht(
        l.imageSizes
      ) + '"]')) : i += '[href="' + Ht(e) + '"]';
      var r = i;
      switch (t) {
        case "style":
          r = da(e);
          break;
        case "script":
          r = ma(e);
      }
      Kt.has(r) || (e = _(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Kt.set(r, e), n.querySelector(i) !== null || t === "style" && n.querySelector(fi(r)) || t === "script" && n.querySelector(di(r)) || (t = n.createElement("link"), ct(t, "link", e), nt(t), n.head.appendChild(t)));
    }
  }
  function m1(e, t) {
    wl.m(e, t);
    var l = fa;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", i = 'link[rel="modulepreload"][as="' + Ht(n) + '"][href="' + Ht(e) + '"]', r = i;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = ma(e);
      }
      if (!Kt.has(r) && (e = _({ rel: "modulepreload", href: e }, t), Kt.set(r, e), l.querySelector(i) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(di(r)))
              return;
        }
        n = l.createElement("link"), ct(n, "link", e), nt(n), l.head.appendChild(n);
      }
    }
  }
  function h1(e, t, l) {
    wl.S(e, t, l);
    var n = fa;
    if (n && e) {
      var i = zn(n).hoistableStyles, r = da(e);
      t = t || "default";
      var f = i.get(r);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = n.querySelector(
          fi(r)
        ))
          h.loading = 5;
        else {
          e = _(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Kt.get(r)) && Mo(e, l);
          var b = f = n.createElement("link");
          nt(b), ct(b, "link", e), b._p = new Promise(function(N, z) {
            b.onload = N, b.onerror = z;
          }), b.addEventListener("load", function() {
            h.loading |= 1;
          }), b.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, Xu(f, t, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: h
        }, i.set(r, f);
      }
    }
  }
  function g1(e, t) {
    wl.X(e, t);
    var l = fa;
    if (l && e) {
      var n = zn(l).hoistableScripts, i = ma(e), r = n.get(i);
      r || (r = l.querySelector(di(i)), r || (e = _({ src: e, async: !0 }, t), (t = Kt.get(i)) && Uo(e, t), r = l.createElement("script"), nt(r), ct(r, "link", e), l.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, n.set(i, r));
    }
  }
  function y1(e, t) {
    wl.M(e, t);
    var l = fa;
    if (l && e) {
      var n = zn(l).hoistableScripts, i = ma(e), r = n.get(i);
      r || (r = l.querySelector(di(i)), r || (e = _({ src: e, async: !0, type: "module" }, t), (t = Kt.get(i)) && Uo(e, t), r = l.createElement("script"), nt(r), ct(r, "link", e), l.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, n.set(i, r));
    }
  }
  function im(e, t, l, n) {
    var i = (i = J.current) ? Yu(i) : null;
    if (!i) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = da(l.href), l = zn(
          i
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = da(l.href);
          var r = zn(
            i
          ).hoistableStyles, f = r.get(e);
          if (f || (i = i.ownerDocument || i, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, f), (r = i.querySelector(
            fi(e)
          )) && !r._p && (f.instance = r, f.state.loading = 5), Kt.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Kt.set(e, l), r || p1(
            i,
            e,
            l,
            f.state
          ))), t && n === null)
            throw Error(c(528, ""));
          return f;
        }
        if (t && n !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ma(l), l = zn(
          i
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function da(e) {
    return 'href="' + Ht(e) + '"';
  }
  function fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function um(e) {
    return _({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function p1(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), ct(t, "link", l), nt(t), e.head.appendChild(t));
  }
  function ma(e) {
    return '[src="' + Ht(e) + '"]';
  }
  function di(e) {
    return "script[async]" + e;
  }
  function rm(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + Ht(l.href) + '"]'
          );
          if (n)
            return t.instance = n, nt(n), n;
          var i = _({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), nt(n), ct(n, "style", i), Xu(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          i = da(l.href);
          var r = e.querySelector(
            fi(i)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, nt(r), r;
          n = um(l), (i = Kt.get(i)) && Mo(n, i), r = (e.ownerDocument || e).createElement("link"), nt(r);
          var f = r;
          return f._p = new Promise(function(h, b) {
            f.onload = h, f.onerror = b;
          }), ct(r, "link", n), t.state.loading |= 4, Xu(r, l.precedence, e), t.instance = r;
        case "script":
          return r = ma(l.src), (i = e.querySelector(
            di(r)
          )) ? (t.instance = i, nt(i), i) : (n = l, (i = Kt.get(r)) && (n = _({}, l), Uo(n, i)), e = e.ownerDocument || e, i = e.createElement("script"), nt(i), ct(i, "link", n), e.head.appendChild(i), t.instance = i);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, Xu(n, l.precedence, e));
    return t.instance;
  }
  function Xu(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), i = n.length ? n[n.length - 1] : null, r = i, f = 0; f < n.length; f++) {
      var h = n[f];
      if (h.dataset.precedence === t) r = h;
      else if (r !== i) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Mo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Uo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var ku = null;
  function sm(e, t, l) {
    if (ku === null) {
      var n = /* @__PURE__ */ new Map(), i = ku = /* @__PURE__ */ new Map();
      i.set(l, n);
    } else
      i = ku, n = i.get(l), n || (n = /* @__PURE__ */ new Map(), i.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), i = 0; i < l.length; i++) {
      var r = l[i];
      if (!(r[Na] || r[ut] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = r.getAttribute(t) || "";
        f = e + f;
        var h = n.get(f);
        h ? h.push(r) : n.set(f, [r]);
      }
    }
    return n;
  }
  function om(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function v1(e, t, l) {
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
  function cm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function E1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var i = da(n.href), r = t.querySelector(
          fi(i)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Vu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = r, nt(r);
          return;
        }
        r = t.ownerDocument || t, n = um(n), (i = Kt.get(i)) && Mo(n, i), r = r.createElement("link"), nt(r);
        var f = r;
        f._p = new Promise(function(h, b) {
          f.onload = h, f.onerror = b;
        }), ct(r, "link", n), l.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Vu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var zo = 0;
  function b1(e, t) {
    return e.stylesheets && e.count === 0 && Qu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && Qu(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && zo === 0 && (zo = 62500 * e1());
      var i = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Qu(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > zo ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(i);
      };
    } : null;
  }
  function Vu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Qu(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ku = null;
  function Qu(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ku = /* @__PURE__ */ new Map(), t.forEach(S1, e), Ku = null, Vu.call(e));
  }
  function S1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = Ku.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), Ku.set(e, l);
        for (var i = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < i.length; r++) {
          var f = i[r];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      i = t.instance, f = i.getAttribute("data-precedence"), r = l.get(f) || n, r === n && l.set(null, i), l.set(f, i), this.count++, n = Vu.bind(this), i.addEventListener("load", n), i.addEventListener("error", n), r ? r.parentNode.insertBefore(i, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
    }
  }
  var mi = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: re,
    _currentValue2: re,
    _threadCount: 0
  };
  function R1(e, t, l, n, i, r, f, h, b) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Nr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Nr(0), this.hiddenUpdates = Nr(null), this.identifierPrefix = n, this.onUncaughtError = i, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = b, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function fm(e, t, l, n, i, r, f, h, b, N, z, B) {
    return e = new R1(
      e,
      t,
      l,
      f,
      b,
      N,
      z,
      B,
      h
    ), t = 1, r === !0 && (t |= 24), r = _t(3, null, null, t), e.current = r, r.stateNode = e, t = ds(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, ys(r), e;
  }
  function dm(e) {
    return e ? (e = Vn, e) : Vn;
  }
  function mm(e, t, l, n, i, r) {
    i = dm(i), n.context === null ? n.context = i : n.pendingContext = i, n = Bl(t), n.payload = { element: l }, r = r === void 0 ? null : r, r !== null && (n.callback = r), l = ql(e, n, t), l !== null && (St(l, e, t), Ka(l, e, t));
  }
  function hm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Lo(e, t) {
    hm(e, t), (e = e.alternate) && hm(e, t);
  }
  function gm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = on(e, 67108864);
      t !== null && St(t, e, 67108864), Lo(e, 67108864);
    }
  }
  function ym(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zt();
      t = _r(t);
      var l = on(e, t);
      l !== null && St(l, e, t), Lo(e, t);
    }
  }
  var Zu = !0;
  function T1(e, t, l, n) {
    var i = Y.T;
    Y.T = null;
    var r = k.p;
    try {
      k.p = 2, jo(e, t, l, n);
    } finally {
      k.p = r, Y.T = i;
    }
  }
  function w1(e, t, l, n) {
    var i = Y.T;
    Y.T = null;
    var r = k.p;
    try {
      k.p = 8, jo(e, t, l, n);
    } finally {
      k.p = r, Y.T = i;
    }
  }
  function jo(e, t, l, n) {
    if (Zu) {
      var i = Ho(n);
      if (i === null)
        Ro(
          e,
          t,
          n,
          Ju,
          l
        ), vm(e, n);
      else if (A1(
        i,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (vm(e, n), t & 4 && -1 < x1.indexOf(e)) {
        for (; i !== null; ) {
          var r = Un(i);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var f = nn(r.pendingLanes);
                  if (f !== 0) {
                    var h = r;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var b = 1 << 31 - Ct(f);
                      h.entanglements[1] |= b, f &= ~b;
                    }
                    il(r), (Ce & 6) === 0 && (Ou = xt() + 500, ri(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = on(r, 2), h !== null && St(h, r, 2), Mu(), Lo(r, 2);
            }
          if (r = Ho(n), r === null && Ro(
            e,
            t,
            n,
            Ju,
            l
          ), r === i) break;
          i = r;
        }
        i !== null && n.stopPropagation();
      } else
        Ro(
          e,
          t,
          n,
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
    if (Ju = null, e = Mn(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (e = y(t), e !== null) return e;
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
          case wc:
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
  var qo = !1, Fl = null, Wl = null, Il = null, hi = /* @__PURE__ */ new Map(), gi = /* @__PURE__ */ new Map(), Pl = [], x1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Fl = null;
        break;
      case "dragenter":
      case "dragleave":
        Wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Il = null;
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
  function yi(e, t, l, n, i, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: r,
      targetContainers: [i]
    }, t !== null && (t = Un(t), t !== null && gm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
  }
  function A1(e, t, l, n, i) {
    switch (t) {
      case "focusin":
        return Fl = yi(
          Fl,
          e,
          t,
          l,
          n,
          i
        ), !0;
      case "dragenter":
        return Wl = yi(
          Wl,
          e,
          t,
          l,
          n,
          i
        ), !0;
      case "mouseover":
        return Il = yi(
          Il,
          e,
          t,
          l,
          n,
          i
        ), !0;
      case "pointerover":
        var r = i.pointerId;
        return hi.set(
          r,
          yi(
            hi.get(r) || null,
            e,
            t,
            l,
            n,
            i
          )
        ), !0;
      case "gotpointercapture":
        return r = i.pointerId, gi.set(
          r,
          yi(
            gi.get(r) || null,
            e,
            t,
            l,
            n,
            i
          )
        ), !0;
    }
    return !1;
  }
  function Em(e) {
    var t = Mn(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = y(l), t !== null) {
            e.blockedOn = t, Mc(e.priority, function() {
              ym(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, Mc(e.priority, function() {
              ym(l);
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
        var n = new l.constructor(
          l.type,
          l
        );
        Hr = n, l.target.dispatchEvent(n), Hr = null;
      } else
        return t = Un(l), t !== null && gm(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function bm(e, t, l) {
    $u(e) && l.delete(t);
  }
  function C1() {
    qo = !1, Fl !== null && $u(Fl) && (Fl = null), Wl !== null && $u(Wl) && (Wl = null), Il !== null && $u(Il) && (Il = null), hi.forEach(bm), gi.forEach(bm);
  }
  function Fu(e, t) {
    e.blockedOn === t && (e.blockedOn = null, qo || (qo = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      C1
    )));
  }
  var Wu = null;
  function Sm(e) {
    Wu !== e && (Wu = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        Wu === e && (Wu = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], i = e[t + 2];
          if (typeof n != "function") {
            if (Bo(n || l) === null)
              continue;
            break;
          }
          var r = Un(l);
          r !== null && (e.splice(t, 3), t -= 3, js(
            r,
            {
              pending: !0,
              data: i,
              method: l.method,
              action: n
            },
            n,
            i
          ));
        }
      }
    ));
  }
  function ha(e) {
    function t(b) {
      return Fu(b, e);
    }
    Fl !== null && Fu(Fl, e), Wl !== null && Fu(Wl, e), Il !== null && Fu(Il, e), hi.forEach(t), gi.forEach(t);
    for (var l = 0; l < Pl.length; l++) {
      var n = Pl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Pl.length && (l = Pl[0], l.blockedOn === null); )
      Em(l), l.blockedOn === null && Pl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var i = l[n], r = l[n + 1], f = i[gt] || null;
        if (typeof r == "function")
          f || Sm(l);
        else if (f) {
          var h = null;
          if (r && r.hasAttribute("formAction")) {
            if (i = r, f = r[gt] || null)
              h = f.formAction;
            else if (Bo(i) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), Sm(l);
        }
      }
  }
  function Rm() {
    function e(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
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
      i !== null && (i(), i = null), n || setTimeout(l, 20);
    }
    function l() {
      if (!n && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var n = !1, i = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
        n = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
      };
    }
  }
  function Go(e) {
    this._internalRoot = e;
  }
  Iu.prototype.render = Go.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var l = t.current, n = zt();
    mm(l, n, e, t, null, null);
  }, Iu.prototype.unmount = Go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      mm(e.current, 2, null, e, null, null), Mu(), t[Dn] = null;
    }
  };
  function Iu(e) {
    this._internalRoot = e;
  }
  Iu.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Dc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Pl.length && t !== 0 && t < Pl[l].priority; l++) ;
      Pl.splice(l, 0, e), l === 0 && Em(e);
    }
  };
  var Tm = s.version;
  if (Tm !== "19.2.3")
    throw Error(
      c(
        527,
        Tm,
        "19.2.3"
      )
    );
  k.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = E(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var N1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pu.isDisabled && Pu.supportsFiber)
      try {
        xa = Pu.inject(
          N1
        ), At = Pu;
      } catch {
      }
  }
  return Ei.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var l = !1, n = "", i = Od, r = Dd, f = Md;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = fm(
      e,
      1,
      !1,
      null,
      null,
      l,
      n,
      null,
      i,
      r,
      f,
      Rm
    ), e[Dn] = t.current, So(e), new Go(t);
  }, Ei.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(c(299));
    var n = !1, i = "", r = Od, f = Dd, h = Md, b = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (i = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (b = l.formState)), t = fm(
      e,
      1,
      !0,
      t,
      l ?? null,
      n,
      i,
      b,
      r,
      f,
      h,
      Rm
    ), t.context = dm(null), l = t.current, n = zt(), n = _r(n), i = Bl(n), i.callback = null, ql(l, i, n), l = n, t.current.lanes = l, Ca(t, l), il(t), e[Dn] = t.current, So(e), new Iu(t);
  }, Ei.version = "19.2.3", Ei;
}
var qm;
function pv() {
  if (qm) return Zo.exports;
  qm = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (u) {
        console.error(u);
      }
  }
  return a(), Zo.exports = yv(), Zo.exports;
}
var vv = pv();
function Ev(a = {}) {
  const { nonce: u, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c } = a, [d, m] = w.useState(!1), y = w.useRef(o);
  y.current = o;
  const p = w.useRef(c);
  return p.current = c, w.useEffect(() => {
    const g = document.createElement("script");
    return g.src = "https://accounts.google.com/gsi/client", s && (g.src += `?hl=${s}`), g.async = !0, g.defer = !0, g.nonce = u, g.onload = () => {
      var E;
      m(!0), (E = y.current) === null || E === void 0 || E.call(y);
    }, g.onerror = () => {
      var E;
      m(!1), (E = p.current) === null || E === void 0 || E.call(p);
    }, document.body.appendChild(g), () => {
      document.body.removeChild(g);
    };
  }, [u]), d;
}
const Uh = w.createContext(null);
function bv({ clientId: a, nonce: u, locale: s, onScriptLoadSuccess: o, onScriptLoadError: c, children: d }) {
  const m = Ev({
    nonce: u,
    onScriptLoadSuccess: o,
    onScriptLoadError: c,
    locale: s
  }), y = w.useMemo(() => ({
    locale: s,
    clientId: a,
    scriptLoadedSuccessfully: m
  }), [a, m]);
  return z1.createElement(Uh.Provider, { value: y }, d);
}
function Sv() {
  const a = w.useContext(Uh);
  if (!a)
    throw new Error("Google OAuth components must be used within GoogleOAuthProvider");
  return a;
}
function Rv({ flow: a = "implicit", scope: u = "", onSuccess: s, onError: o, onNonOAuthError: c, overrideScope: d, state: m, ...y }) {
  const { clientId: p, scriptLoadedSuccessfully: g } = Sv(), E = w.useRef(), T = w.useRef(s);
  T.current = s;
  const _ = w.useRef(o);
  _.current = o;
  const q = w.useRef(c);
  q.current = c, w.useEffect(() => {
    var D, G;
    if (!g)
      return;
    const V = a === "implicit" ? "initTokenClient" : "initCodeClient", Q = (G = (D = window?.google) === null || D === void 0 ? void 0 : D.accounts) === null || G === void 0 ? void 0 : G.oauth2[V]({
      client_id: p,
      scope: d ? u : `openid profile email ${u}`,
      callback: (I) => {
        var W, me;
        if (I.error)
          return (W = _.current) === null || W === void 0 ? void 0 : W.call(_, I);
        (me = T.current) === null || me === void 0 || me.call(T, I);
      },
      error_callback: (I) => {
        var W;
        (W = q.current) === null || W === void 0 || W.call(q, I);
      },
      state: m,
      ...y
    });
    E.current = Q;
  }, [p, g, a, u, m]);
  const A = w.useCallback((D) => {
    var G;
    return (G = E.current) === null || G === void 0 ? void 0 : G.requestAccessToken(D);
  }, []), L = w.useCallback(() => {
    var D;
    return (D = E.current) === null || D === void 0 ? void 0 : D.requestCode();
  }, []);
  return a === "implicit" ? A : L;
}
var de = /* @__PURE__ */ ((a) => (a.SUCCESS = "success", a.WARNING = "warning", a.ERROR = "error", a.INFO = "info", a))(de || {}), Zt = /* @__PURE__ */ ((a) => (a.PRIMARY = "primary", a.OUTLINE = "outline", a.LINK = "link", a))(Zt || {}), Jt = /* @__PURE__ */ ((a) => (a.BUTTON = "button", a.SUBMIT = "submit", a.RESET = "reset", a))(Jt || {}), Qt = /* @__PURE__ */ ((a) => (a.DEV = "dev", a.TEST = "test", a.STAGE = "stage", a.PROD = "prod", a))(Qt || {}), pc = /* @__PURE__ */ ((a) => (a.TEST = "TEST", a.WEBCOMPONENT = "WEBCOMPONENT", a))(pc || {}), tn = /* @__PURE__ */ ((a) => (a.ALERT = "alert", a.STATUS = "status", a))(tn || {}), xi = /* @__PURE__ */ ((a) => (a.ASSERTIVE = "assertive", a.POLITE = "polite", a.OFF = "off", a))(xi || {});
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
}, Nn = {
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
}, Ti = /^[^\s@]+@[^\s@]+\.[^\s@]+$/, ga = {
  UPPERCASE: /[A-Z]/,
  LOWERCASE: /[a-z]/,
  NUMBER: /[0-9]/
}, Gm = /[!@#$%^&*._-]/, Ym = /^[A-Za-z0-9!@#$%^&*._-]+$/, Ai = {
  EMAIL_CHECK_DEBOUNCE: 500,
  TOAST_DEFAULT_DURATION: 5e3,
  ANIMATION_ENTRANCE_DELAY: 10,
  ANIMATION_EXIT_DURATION: 300
}, Tv = {
  REFRESH_TOKEN_MAX_AGE_MS: 10080 * 60 * 1e3,
  // 7 days in milliseconds
  REFRESH_TOKEN_MAX_AGE_DAYS: 7
}, bi = {
  COURSES: "/courses"
}, Qe = {
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
}, wv = {
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
}, lr = {
  EMPTY: "0%",
  WEAK: "25%",
  GOOD: "60%",
  STRONG: "100%"
}, Lt = ({
  label: a,
  onClick: u,
  disabled: s,
  type: o = Jt.BUTTON,
  variant: c = Zt.PRIMARY,
  className: d,
  children: m,
  ariaLabel: y,
  mainButtonStyle: p
}) => {
  const g = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", E = {
    [Zt.PRIMARY]: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    [Zt.OUTLINE]: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    [Zt.LINK]: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, T = d ? `identity-widget-button ${g} ${E[c]} ${d}` : `identity-widget-button ${g} ${E[c]}`;
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      className: T,
      onClick: u,
      disabled: s,
      type: o,
      "aria-label": y || (typeof a == "string" ? a : void 0),
      "aria-disabled": s,
      style: { ...p, borderStyle: "solid !important" },
      children: m || a
    }
  );
}, Rn = w.forwardRef((a, u) => {
  const {
    label: s,
    startIcon: o,
    endIcon: c,
    error: d,
    helperText: m,
    optional: y,
    className: p,
    options: g,
    id: E,
    ...T
  } = a, _ = !!d || !!m, q = T.type === "select" || !!g, A = E || `input-${Math.random().toString(36).substr(2, 9)}`, L = `${A}-error`, D = `${A}-helper`;
  return /* @__PURE__ */ v.jsxs("div", { className: `identity-widget-input-wrapper flex! flex-col! ${p || ""}`, children: [
    s && /* @__PURE__ */ v.jsxs(
      "label",
      {
        htmlFor: A,
        className: "identity-widget-input-label block! text-sm! font-medium! text-gray-700 mb-1! text-left!",
        children: [
          s,
          " ",
          y && /* @__PURE__ */ v.jsx("span", { className: "identity-widget-input-optional text-gray-500 italic text-[13px]", children: "(Optional)" })
        ]
      }
    ),
    /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-input-container flex! items-center! relative!", children: [
      o && /* @__PURE__ */ v.jsx(
        "span",
        {
          className: "identity-widget-input-start-icon flex! items-center! justify-center! absolute! left-2.5! pointer-events-auto! z-2!",
          style: { top: "50%", transform: "translateY(-50%)" },
          "aria-hidden": !0,
          children: o
        }
      ),
      q ? /* @__PURE__ */ v.jsx(
        "select",
        {
          ref: u,
          id: A,
          "aria-label": typeof s == "string" ? s : T["aria-label"],
          "aria-invalid": _,
          "aria-describedby": _ ? L : void 0,
          "aria-required": T.required,
          className: "identity-widget-input-select flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: _ ? "#d64545" : "#cbd5d5",
            ...T.style
          },
          ...T,
          children: g && g.map((G) => /* @__PURE__ */ v.jsx("option", { className: "identity-widget-input-option", value: G.value, children: G.label }, G.value))
        }
      ) : /* @__PURE__ */ v.jsx(
        "input",
        {
          ref: u,
          id: A,
          "aria-label": typeof s == "string" ? s : T["aria-label"],
          "aria-invalid": _,
          "aria-describedby": _ ? L : void 0,
          "aria-required": T.required,
          className: "identity-widget-input-field flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
          style: {
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: _ ? "#d64545" : "#cbd5d5",
            ...T.style
          },
          ...T
        }
      ),
      c && /* @__PURE__ */ v.jsx(
        "span",
        {
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
        id: L,
        role: "alert",
        "aria-live": "polite",
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
        className: "identity-widget-input-helper text-[#d64545] text-[13px]! mt-1.5! text-left!",
        children: m
      }
    )
  ] });
}), Cv = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", pa = ({
  type: a,
  message: u,
  actionText: s,
  onActionClick: o,
  onClose: c,
  className: d = "",
  children: m
}) => {
  const y = () => {
    switch (a) {
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
    switch (a) {
      case de.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-banner-icon-svg w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
          }
        ) });
      case de.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-banner-icon-svg w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) });
      case de.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-banner-icon-svg w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd"
          }
        ) });
      case de.INFO:
      default:
        return /* @__PURE__ */ v.jsx("img", { src: Cv, alt: "info", className: "identity-widget-banner-icon-image w-5! h-5!" });
    }
  }, g = y(), E = () => {
    switch (a) {
      case de.ERROR:
        return tn.ALERT;
      case de.WARNING:
      case de.INFO:
        return tn.STATUS;
      case de.SUCCESS:
        return tn.STATUS;
      default:
        return tn.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      role: E(),
      "aria-live": a === de.ERROR ? xi.ASSERTIVE : xi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-banner flex! items-center! max-[500px]:items-start! py-3! px-4! rounded! ${g.bg} ${g.border} ${d}`,
      children: [
        /* @__PURE__ */ v.jsx("div", { className: `identity-widget-banner-icon flex-shrink-0! ${g.iconColor}!`, "aria-hidden": "true", children: p() }),
        /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-banner-content ml-3! flex-1! flex! items-center! gap-2! max-[500px]:items-start! max-[500px]:flex-col!", children: [
          /* @__PURE__ */ v.jsx("span", { className: `identity-widget-banner-message text-sm! font-medium! ${g.text}`, children: u }),
          s && o && /* @__PURE__ */ v.jsx(
            "button",
            {
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
            type: "button",
            onClick: c,
            "aria-label": "Dismiss banner",
            className: `identity-widget-banner-close ml-2! flex-shrink-0! inline-flex! ${g.iconColor} ${g.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "identity-widget-banner-close-text sr-only", children: "Dismiss" }),
              /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-banner-close-icon w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx(
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
}, ic = ({ type: a, message: u, duration: s = 5e3, onClose: o, className: c = "" }) => {
  const [d, m] = w.useState(!1), [y, p] = w.useState(!1);
  w.useEffect(() => {
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
  }, E = () => {
    switch (a) {
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
  }, T = () => {
    switch (a) {
      case de.SUCCESS:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
            clipRule: "evenodd"
          }
        ) });
      case de.WARNING:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
            clipRule: "evenodd"
          }
        ) });
      case de.ERROR:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
            clipRule: "evenodd"
          }
        ) });
      case de.INFO:
      default:
        return /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-toast-icon-svg w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ v.jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
            clipRule: "evenodd"
          }
        ) });
    }
  }, _ = E(), q = () => {
    switch (a) {
      case de.ERROR:
        return tn.ALERT;
      case de.WARNING:
      case de.INFO:
      case de.SUCCESS:
        return tn.STATUS;
      default:
        return tn.STATUS;
    }
  };
  return /* @__PURE__ */ v.jsx(
    "div",
    {
      role: q(),
      "aria-live": a === de.ERROR ? xi.ASSERTIVE : xi.POLITE,
      "aria-atomic": "true",
      className: `identity-widget-toast fixed! top-4! right-4! z-[${Wo.Z_INDEX}]! transition-all! duration-300! ${d && !y ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${c}`,
      style: { maxWidth: Wo.MAX_WIDTH, width: Wo.WIDTH },
      children: /* @__PURE__ */ v.jsxs("div", { className: `identity-widget-toast-body flex! items-center! p-4! rounded-lg! shadow-lg! ${_.bg}`, children: [
        /* @__PURE__ */ v.jsx("div", { className: `identity-widget-toast-icon flex-shrink-0! ${_.icon}`, "aria-hidden": "true", children: T() }),
        /* @__PURE__ */ v.jsx("div", { className: `identity-widget-toast-content ml-3! flex-1! ${_.text}`, children: /* @__PURE__ */ v.jsx("p", { className: "identity-widget-toast-message text-sm! font-medium!", children: u }) }),
        /* @__PURE__ */ v.jsxs(
          "button",
          {
            type: "button",
            onClick: g,
            "aria-label": "Close notification",
            className: `identity-widget-toast-close ml-4! flex-shrink-0! inline-flex! ${_.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ v.jsx("span", { className: "identity-widget-toast-close-text sr-only", children: "Close" }),
              /* @__PURE__ */ v.jsx("svg", { className: "identity-widget-toast-close-icon w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", "aria-hidden": "true", children: /* @__PURE__ */ v.jsx(
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
    className: "identity-widget-loader w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!",
    role: "status",
    "aria-label": "Loading",
    children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-loader-text sr-only", children: "Loading..." })
  }
);
class Ri extends Error {
}
Ri.prototype.name = "InvalidTokenError";
function Nv(a) {
  return decodeURIComponent(atob(a).replace(/(.)/g, (u, s) => {
    let o = s.charCodeAt(0).toString(16).toUpperCase();
    return o.length < 2 && (o = "0" + o), "%" + o;
  }));
}
function _v(a) {
  let u = a.replace(/-/g, "+").replace(/_/g, "/");
  switch (u.length % 4) {
    case 0:
      break;
    case 2:
      u += "==";
      break;
    case 3:
      u += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return Nv(u);
  } catch {
    return atob(u);
  }
}
function Di(a, u) {
  if (typeof a != "string")
    throw new Ri("Invalid token specified: must be a string");
  u || (u = {});
  const s = u.header === !0 ? 0 : 1, o = a.split(".")[s];
  if (typeof o != "string")
    throw new Ri(`Invalid token specified: missing part #${s + 1}`);
  let c;
  try {
    c = _v(o);
  } catch (d) {
    throw new Ri(`Invalid token specified: invalid base64 for part #${s + 1} (${d.message})`);
  }
  try {
    return JSON.parse(c);
  } catch (d) {
    throw new Ri(`Invalid token specified: invalid json for part #${s + 1} (${d.message})`);
  }
}
function Lh() {
  const a = window.location.hostname;
  if (a === Al.HOSTNAME || a === Al.IP || Al.IP_PATTERN.test(a))
    return "";
  const u = a.split(".");
  return u.length >= 2 ? "." + u.slice(-2).join(".") : "";
}
function Ov() {
  const a = window.location.hostname;
  return a === Al.HOSTNAME || a === Al.IP || Al.IP_PATTERN.test(a) || a.startsWith(`${Qe.DEV}.`) || a.startsWith(`${Qe.DEV}-`) ? Qt.DEV : a.startsWith(`${Qe.TEST}.`) || a.startsWith(`${Qe.TEST}-`) ? Qt.TEST : a.startsWith(`${Qe.STAGE}.`) || a.startsWith(`${Qe.STAGE}-`) ? Qt.STAGE : Qt.PROD;
}
function nr() {
  const a = window.location.href, u = new URL(a), s = u.hostname;
  if (s.startsWith(`${Qe.DEV}.`)) {
    const o = s.replace(`${Qe.DEV}.`, `${Qe.DEV_LEARN}.`);
    return `${u.protocol}//${o}${bi.COURSES}`;
  } else if (s.startsWith(`${Qe.TEST}.`)) {
    const o = s.replace(`${Qe.TEST}.`, `${Qe.TEST_LEARN}.`);
    return `${u.protocol}//${o}${bi.COURSES}`;
  } else if (s.startsWith(`${Qe.STAGE}.`)) {
    const o = s.replace(`${Qe.STAGE}.`, `${Qe.STAGE_LEARN}.`);
    return `${u.protocol}//${o}${bi.COURSES}`;
  } else if (s.split(".").length === 2) {
    const c = `${Qe.LEARN}.${s}`;
    return `${u.protocol}//${c}${bi.COURSES}`;
  } else
    return `${u.protocol}//${s}${bi.COURSES}`;
}
function Tn(a, u, s, o = !0) {
  const c = /* @__PURE__ */ new Date();
  c.setSeconds(c.getSeconds() + s);
  const d = Lh(), m = d ? `; domain=${d}` : "", y = window.location.protocol === "https:" ? "; secure" : "", p = o ? encodeURIComponent(u) : u;
  document.cookie = `${a}=${p}; expires=${c.toUTCString()}; path=/${m}${y}; SameSite=Strict`;
}
function Rt(a, u = !0) {
  const s = document.cookie.split(";");
  for (const o of s) {
    const c = o.trim();
    if (c.startsWith(`${a}=`)) {
      const d = c.substring(a.length + 1);
      return u ? decodeURIComponent(d) : d;
    }
  }
  return null;
}
function ar(a) {
  const u = Lh(), s = u ? `; domain=${u}` : "";
  document.cookie = `${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${s}`;
}
function jh(a, u) {
  return function() {
    return a.apply(u, arguments);
  };
}
var Xm = {};
const { toString: Dv } = Object.prototype, { getPrototypeOf: vc } = Object, { iterator: Er, toStringTag: Hh } = Symbol, br = /* @__PURE__ */ ((a) => (u) => {
  const s = Dv.call(u);
  return a[s] || (a[s] = s.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), tl = (a) => (a = a.toLowerCase(), (u) => br(u) === a), Sr = (a) => (u) => typeof u === a, { isArray: Sa } = Array, va = Sr("undefined");
function Mi(a) {
  return a !== null && !va(a) && a.constructor !== null && !va(a.constructor) && Tt(a.constructor.isBuffer) && a.constructor.isBuffer(a);
}
const Bh = tl("ArrayBuffer");
function Mv(a) {
  let u;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? u = ArrayBuffer.isView(a) : u = a && a.buffer && Bh(a.buffer), u;
}
const Uv = Sr("string"), Tt = Sr("function"), qh = Sr("number"), Ui = (a) => a !== null && typeof a == "object", zv = (a) => a === !0 || a === !1, sr = (a) => {
  if (br(a) !== "object")
    return !1;
  const u = vc(a);
  return (u === null || u === Object.prototype || Object.getPrototypeOf(u) === null) && !(Hh in a) && !(Er in a);
}, Lv = (a) => {
  if (!Ui(a) || Mi(a))
    return !1;
  try {
    return Object.keys(a).length === 0 && Object.getPrototypeOf(a) === Object.prototype;
  } catch {
    return !1;
  }
}, jv = tl("Date"), Hv = tl("File"), Bv = tl("Blob"), qv = tl("FileList"), Gv = (a) => Ui(a) && Tt(a.pipe), Yv = (a) => {
  let u;
  return a && (typeof FormData == "function" && a instanceof FormData || Tt(a.append) && ((u = br(a)) === "formdata" || // detect form-data instance
  u === "object" && Tt(a.toString) && a.toString() === "[object FormData]"));
}, Xv = tl("URLSearchParams"), [kv, Vv, Kv, Qv] = ["ReadableStream", "Request", "Response", "Headers"].map(tl), Zv = (a) => a.trim ? a.trim() : a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zi(a, u, { allOwnKeys: s = !1 } = {}) {
  if (a === null || typeof a > "u")
    return;
  let o, c;
  if (typeof a != "object" && (a = [a]), Sa(a))
    for (o = 0, c = a.length; o < c; o++)
      u.call(null, a[o], o, a);
  else {
    if (Mi(a))
      return;
    const d = s ? Object.getOwnPropertyNames(a) : Object.keys(a), m = d.length;
    let y;
    for (o = 0; o < m; o++)
      y = d[o], u.call(null, a[y], y, a);
  }
}
function Gh(a, u) {
  if (Mi(a))
    return null;
  u = u.toLowerCase();
  const s = Object.keys(a);
  let o = s.length, c;
  for (; o-- > 0; )
    if (c = s[o], u === c.toLowerCase())
      return c;
  return null;
}
const wn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Yh = (a) => !va(a) && a !== wn;
function uc() {
  const { caseless: a, skipUndefined: u } = Yh(this) && this || {}, s = {}, o = (c, d) => {
    const m = a && Gh(s, d) || d;
    sr(s[m]) && sr(c) ? s[m] = uc(s[m], c) : sr(c) ? s[m] = uc({}, c) : Sa(c) ? s[m] = c.slice() : (!u || !va(c)) && (s[m] = c);
  };
  for (let c = 0, d = arguments.length; c < d; c++)
    arguments[c] && zi(arguments[c], o);
  return s;
}
const Jv = (a, u, s, { allOwnKeys: o } = {}) => (zi(u, (c, d) => {
  s && Tt(c) ? a[d] = jh(c, s) : a[d] = c;
}, { allOwnKeys: o }), a), $v = (a) => (a.charCodeAt(0) === 65279 && (a = a.slice(1)), a), Fv = (a, u, s, o) => {
  a.prototype = Object.create(u.prototype, o), a.prototype.constructor = a, Object.defineProperty(a, "super", {
    value: u.prototype
  }), s && Object.assign(a.prototype, s);
}, Wv = (a, u, s, o) => {
  let c, d, m;
  const y = {};
  if (u = u || {}, a == null) return u;
  do {
    for (c = Object.getOwnPropertyNames(a), d = c.length; d-- > 0; )
      m = c[d], (!o || o(m, a, u)) && !y[m] && (u[m] = a[m], y[m] = !0);
    a = s !== !1 && vc(a);
  } while (a && (!s || s(a, u)) && a !== Object.prototype);
  return u;
}, Iv = (a, u, s) => {
  a = String(a), (s === void 0 || s > a.length) && (s = a.length), s -= u.length;
  const o = a.indexOf(u, s);
  return o !== -1 && o === s;
}, Pv = (a) => {
  if (!a) return null;
  if (Sa(a)) return a;
  let u = a.length;
  if (!qh(u)) return null;
  const s = new Array(u);
  for (; u-- > 0; )
    s[u] = a[u];
  return s;
}, eE = /* @__PURE__ */ ((a) => (u) => a && u instanceof a)(typeof Uint8Array < "u" && vc(Uint8Array)), tE = (a, u) => {
  const o = (a && a[Er]).call(a);
  let c;
  for (; (c = o.next()) && !c.done; ) {
    const d = c.value;
    u.call(a, d[0], d[1]);
  }
}, lE = (a, u) => {
  let s;
  const o = [];
  for (; (s = a.exec(u)) !== null; )
    o.push(s);
  return o;
}, nE = tl("HTMLFormElement"), aE = (a) => a.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(s, o, c) {
    return o.toUpperCase() + c;
  }
), km = (({ hasOwnProperty: a }) => (u, s) => a.call(u, s))(Object.prototype), iE = tl("RegExp"), Xh = (a, u) => {
  const s = Object.getOwnPropertyDescriptors(a), o = {};
  zi(s, (c, d) => {
    let m;
    (m = u(c, d, a)) !== !1 && (o[d] = m || c);
  }), Object.defineProperties(a, o);
}, uE = (a) => {
  Xh(a, (u, s) => {
    if (Tt(a) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
      return !1;
    const o = a[s];
    if (Tt(o)) {
      if (u.enumerable = !1, "writable" in u) {
        u.writable = !1;
        return;
      }
      u.set || (u.set = () => {
        throw Error("Can not rewrite read-only method '" + s + "'");
      });
    }
  });
}, rE = (a, u) => {
  const s = {}, o = (c) => {
    c.forEach((d) => {
      s[d] = !0;
    });
  };
  return Sa(a) ? o(a) : o(String(a).split(u)), s;
}, sE = () => {
}, oE = (a, u) => a != null && Number.isFinite(a = +a) ? a : u;
function cE(a) {
  return !!(a && Tt(a.append) && a[Hh] === "FormData" && a[Er]);
}
const fE = (a) => {
  const u = new Array(10), s = (o, c) => {
    if (Ui(o)) {
      if (u.indexOf(o) >= 0)
        return;
      if (Mi(o))
        return o;
      if (!("toJSON" in o)) {
        u[c] = o;
        const d = Sa(o) ? [] : {};
        return zi(o, (m, y) => {
          const p = s(m, c + 1);
          !va(p) && (d[y] = p);
        }), u[c] = void 0, d;
      }
    }
    return o;
  };
  return s(a, 0);
}, dE = tl("AsyncFunction"), mE = (a) => a && (Ui(a) || Tt(a)) && Tt(a.then) && Tt(a.catch), kh = ((a, u) => a ? setImmediate : u ? ((s, o) => (wn.addEventListener("message", ({ source: c, data: d }) => {
  c === wn && d === s && o.length && o.shift()();
}, !1), (c) => {
  o.push(c), wn.postMessage(s, "*");
}))(`axios@${Math.random()}`, []) : (s) => setTimeout(s))(
  typeof setImmediate == "function",
  Tt(wn.postMessage)
), hE = typeof queueMicrotask < "u" ? queueMicrotask.bind(wn) : typeof Xm < "u" && Xm.nextTick || kh, gE = (a) => a != null && Tt(a[Er]), M = {
  isArray: Sa,
  isArrayBuffer: Bh,
  isBuffer: Mi,
  isFormData: Yv,
  isArrayBufferView: Mv,
  isString: Uv,
  isNumber: qh,
  isBoolean: zv,
  isObject: Ui,
  isPlainObject: sr,
  isEmptyObject: Lv,
  isReadableStream: kv,
  isRequest: Vv,
  isResponse: Kv,
  isHeaders: Qv,
  isUndefined: va,
  isDate: jv,
  isFile: Hv,
  isBlob: Bv,
  isRegExp: iE,
  isFunction: Tt,
  isStream: Gv,
  isURLSearchParams: Xv,
  isTypedArray: eE,
  isFileList: qv,
  forEach: zi,
  merge: uc,
  extend: Jv,
  trim: Zv,
  stripBOM: $v,
  inherits: Fv,
  toFlatObject: Wv,
  kindOf: br,
  kindOfTest: tl,
  endsWith: Iv,
  toArray: Pv,
  forEachEntry: tE,
  matchAll: lE,
  isHTMLForm: nE,
  hasOwnProperty: km,
  hasOwnProp: km,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Xh,
  freezeMethods: uE,
  toObjectSet: rE,
  toCamelCase: aE,
  noop: sE,
  toFiniteNumber: oE,
  findKey: Gh,
  global: wn,
  isContextDefined: Yh,
  isSpecCompliantForm: cE,
  toJSONObject: fE,
  isAsyncFn: dE,
  isThenable: mE,
  setImmediate: kh,
  asap: hE,
  isIterable: gE
};
function oe(a, u, s, o, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = a, this.name = "AxiosError", u && (this.code = u), s && (this.config = s), o && (this.request = o), c && (this.response = c, this.status = c.status ? c.status : null);
}
M.inherits(oe, Error, {
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
].forEach((a) => {
  Kh[a] = { value: a };
});
Object.defineProperties(oe, Kh);
Object.defineProperty(Vh, "isAxiosError", { value: !0 });
oe.from = (a, u, s, o, c, d) => {
  const m = Object.create(Vh);
  M.toFlatObject(a, m, function(E) {
    return E !== Error.prototype;
  }, (g) => g !== "isAxiosError");
  const y = a && a.message ? a.message : "Error", p = u == null && a ? a.code : u;
  return oe.call(m, y, p, s, o, c), a && m.cause == null && Object.defineProperty(m, "cause", { value: a, configurable: !0 }), m.name = a && a.name || "Error", d && Object.assign(m, d), m;
};
const yE = null;
function rc(a) {
  return M.isPlainObject(a) || M.isArray(a);
}
function Qh(a) {
  return M.endsWith(a, "[]") ? a.slice(0, -2) : a;
}
function Vm(a, u, s) {
  return a ? a.concat(u).map(function(c, d) {
    return c = Qh(c), !s && d ? "[" + c + "]" : c;
  }).join(s ? "." : "") : u;
}
function pE(a) {
  return M.isArray(a) && !a.some(rc);
}
const vE = M.toFlatObject(M, {}, null, function(u) {
  return /^is[A-Z]/.test(u);
});
function Rr(a, u, s) {
  if (!M.isObject(a))
    throw new TypeError("target must be an object");
  u = u || new FormData(), s = M.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(L, D) {
    return !M.isUndefined(D[L]);
  });
  const o = s.metaTokens, c = s.visitor || E, d = s.dots, m = s.indexes, p = (s.Blob || typeof Blob < "u" && Blob) && M.isSpecCompliantForm(u);
  if (!M.isFunction(c))
    throw new TypeError("visitor must be a function");
  function g(A) {
    if (A === null) return "";
    if (M.isDate(A))
      return A.toISOString();
    if (M.isBoolean(A))
      return A.toString();
    if (!p && M.isBlob(A))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return M.isArrayBuffer(A) || M.isTypedArray(A) ? p && typeof Blob == "function" ? new Blob([A]) : Buffer.from(A) : A;
  }
  function E(A, L, D) {
    let G = A;
    if (A && !D && typeof A == "object") {
      if (M.endsWith(L, "{}"))
        L = o ? L : L.slice(0, -2), A = JSON.stringify(A);
      else if (M.isArray(A) && pE(A) || (M.isFileList(A) || M.endsWith(L, "[]")) && (G = M.toArray(A)))
        return L = Qh(L), G.forEach(function(Q, I) {
          !(M.isUndefined(Q) || Q === null) && u.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? Vm([L], I, d) : m === null ? L : L + "[]",
            g(Q)
          );
        }), !1;
    }
    return rc(A) ? !0 : (u.append(Vm(D, L, d), g(A)), !1);
  }
  const T = [], _ = Object.assign(vE, {
    defaultVisitor: E,
    convertValue: g,
    isVisitable: rc
  });
  function q(A, L) {
    if (!M.isUndefined(A)) {
      if (T.indexOf(A) !== -1)
        throw Error("Circular reference detected in " + L.join("."));
      T.push(A), M.forEach(A, function(G, V) {
        (!(M.isUndefined(G) || G === null) && c.call(
          u,
          G,
          M.isString(V) ? V.trim() : V,
          L,
          _
        )) === !0 && q(G, L ? L.concat(V) : [V]);
      }), T.pop();
    }
  }
  if (!M.isObject(a))
    throw new TypeError("data must be an object");
  return q(a), u;
}
function Km(a) {
  const u = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(a).replace(/[!'()~]|%20|%00/g, function(o) {
    return u[o];
  });
}
function Ec(a, u) {
  this._pairs = [], a && Rr(a, this, u);
}
const Zh = Ec.prototype;
Zh.append = function(u, s) {
  this._pairs.push([u, s]);
};
Zh.toString = function(u) {
  const s = u ? function(o) {
    return u.call(this, o, Km);
  } : Km;
  return this._pairs.map(function(c) {
    return s(c[0]) + "=" + s(c[1]);
  }, "").join("&");
};
function EE(a) {
  return encodeURIComponent(a).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function Jh(a, u, s) {
  if (!u)
    return a;
  const o = s && s.encode || EE;
  M.isFunction(s) && (s = {
    serialize: s
  });
  const c = s && s.serialize;
  let d;
  if (c ? d = c(u, s) : d = M.isURLSearchParams(u) ? u.toString() : new Ec(u, s).toString(o), d) {
    const m = a.indexOf("#");
    m !== -1 && (a = a.slice(0, m)), a += (a.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return a;
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
  use(u, s, o) {
    return this.handlers.push({
      fulfilled: u,
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
  eject(u) {
    this.handlers[u] && (this.handlers[u] = null);
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
  forEach(u) {
    M.forEach(this.handlers, function(o) {
      o !== null && u(o);
    });
  }
}
const $h = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bE = typeof URLSearchParams < "u" ? URLSearchParams : Ec, SE = typeof FormData < "u" ? FormData : null, RE = typeof Blob < "u" ? Blob : null, TE = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bE,
    FormData: SE,
    Blob: RE
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, bc = typeof window < "u" && typeof document < "u", sc = typeof navigator == "object" && navigator || void 0, wE = bc && (!sc || ["ReactNative", "NativeScript", "NS"].indexOf(sc.product) < 0), xE = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", AE = bc && window.location.href || "http://localhost", CE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: bc,
  hasStandardBrowserEnv: wE,
  hasStandardBrowserWebWorkerEnv: xE,
  navigator: sc,
  origin: AE
}, Symbol.toStringTag, { value: "Module" })), mt = {
  ...CE,
  ...TE
};
function NE(a, u) {
  return Rr(a, new mt.classes.URLSearchParams(), {
    visitor: function(s, o, c, d) {
      return mt.isNode && M.isBuffer(s) ? (this.append(o, s.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...u
  });
}
function _E(a) {
  return M.matchAll(/\w+|\[(\w*)]/g, a).map((u) => u[0] === "[]" ? "" : u[1] || u[0]);
}
function OE(a) {
  const u = {}, s = Object.keys(a);
  let o;
  const c = s.length;
  let d;
  for (o = 0; o < c; o++)
    d = s[o], u[d] = a[d];
  return u;
}
function Fh(a) {
  function u(s, o, c, d) {
    let m = s[d++];
    if (m === "__proto__") return !0;
    const y = Number.isFinite(+m), p = d >= s.length;
    return m = !m && M.isArray(c) ? c.length : m, p ? (M.hasOwnProp(c, m) ? c[m] = [c[m], o] : c[m] = o, !y) : ((!c[m] || !M.isObject(c[m])) && (c[m] = []), u(s, o, c[m], d) && M.isArray(c[m]) && (c[m] = OE(c[m])), !y);
  }
  if (M.isFormData(a) && M.isFunction(a.entries)) {
    const s = {};
    return M.forEachEntry(a, (o, c) => {
      u(_E(o), c, s, 0);
    }), s;
  }
  return null;
}
function DE(a, u, s) {
  if (M.isString(a))
    try {
      return (u || JSON.parse)(a), M.trim(a);
    } catch (o) {
      if (o.name !== "SyntaxError")
        throw o;
    }
  return (s || JSON.stringify)(a);
}
const Li = {
  transitional: $h,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(u, s) {
    const o = s.getContentType() || "", c = o.indexOf("application/json") > -1, d = M.isObject(u);
    if (d && M.isHTMLForm(u) && (u = new FormData(u)), M.isFormData(u))
      return c ? JSON.stringify(Fh(u)) : u;
    if (M.isArrayBuffer(u) || M.isBuffer(u) || M.isStream(u) || M.isFile(u) || M.isBlob(u) || M.isReadableStream(u))
      return u;
    if (M.isArrayBufferView(u))
      return u.buffer;
    if (M.isURLSearchParams(u))
      return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), u.toString();
    let y;
    if (d) {
      if (o.indexOf("application/x-www-form-urlencoded") > -1)
        return NE(u, this.formSerializer).toString();
      if ((y = M.isFileList(u)) || o.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Rr(
          y ? { "files[]": u } : u,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || c ? (s.setContentType("application/json", !1), DE(u)) : u;
  }],
  transformResponse: [function(u) {
    const s = this.transitional || Li.transitional, o = s && s.forcedJSONParsing, c = this.responseType === "json";
    if (M.isResponse(u) || M.isReadableStream(u))
      return u;
    if (u && M.isString(u) && (o && !this.responseType || c)) {
      const m = !(s && s.silentJSONParsing) && c;
      try {
        return JSON.parse(u, this.parseReviver);
      } catch (y) {
        if (m)
          throw y.name === "SyntaxError" ? oe.from(y, oe.ERR_BAD_RESPONSE, this, null, this.response) : y;
      }
    }
    return u;
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
  validateStatus: function(u) {
    return u >= 200 && u < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
M.forEach(["delete", "get", "head", "post", "put", "patch"], (a) => {
  Li.headers[a] = {};
});
const ME = M.toObjectSet([
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
]), UE = (a) => {
  const u = {};
  let s, o, c;
  return a && a.split(`
`).forEach(function(m) {
    c = m.indexOf(":"), s = m.substring(0, c).trim().toLowerCase(), o = m.substring(c + 1).trim(), !(!s || u[s] && ME[s]) && (s === "set-cookie" ? u[s] ? u[s].push(o) : u[s] = [o] : u[s] = u[s] ? u[s] + ", " + o : o);
  }), u;
}, Zm = /* @__PURE__ */ Symbol("internals");
function Si(a) {
  return a && String(a).trim().toLowerCase();
}
function or(a) {
  return a === !1 || a == null ? a : M.isArray(a) ? a.map(or) : String(a);
}
function zE(a) {
  const u = /* @__PURE__ */ Object.create(null), s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let o;
  for (; o = s.exec(a); )
    u[o[1]] = o[2];
  return u;
}
const LE = (a) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(a.trim());
function ec(a, u, s, o, c) {
  if (M.isFunction(o))
    return o.call(this, u, s);
  if (c && (u = s), !!M.isString(u)) {
    if (M.isString(o))
      return u.indexOf(o) !== -1;
    if (M.isRegExp(o))
      return o.test(u);
  }
}
function jE(a) {
  return a.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (u, s, o) => s.toUpperCase() + o);
}
function HE(a, u) {
  const s = M.toCamelCase(" " + u);
  ["get", "set", "has"].forEach((o) => {
    Object.defineProperty(a, o + s, {
      value: function(c, d, m) {
        return this[o].call(this, u, c, d, m);
      },
      configurable: !0
    });
  });
}
let wt = class {
  constructor(u) {
    u && this.set(u);
  }
  set(u, s, o) {
    const c = this;
    function d(y, p, g) {
      const E = Si(p);
      if (!E)
        throw new Error("header name must be a non-empty string");
      const T = M.findKey(c, E);
      (!T || c[T] === void 0 || g === !0 || g === void 0 && c[T] !== !1) && (c[T || p] = or(y));
    }
    const m = (y, p) => M.forEach(y, (g, E) => d(g, E, p));
    if (M.isPlainObject(u) || u instanceof this.constructor)
      m(u, s);
    else if (M.isString(u) && (u = u.trim()) && !LE(u))
      m(UE(u), s);
    else if (M.isObject(u) && M.isIterable(u)) {
      let y = {}, p, g;
      for (const E of u) {
        if (!M.isArray(E))
          throw TypeError("Object iterator must return a key-value pair");
        y[g = E[0]] = (p = y[g]) ? M.isArray(p) ? [...p, E[1]] : [p, E[1]] : E[1];
      }
      m(y, s);
    } else
      u != null && d(s, u, o);
    return this;
  }
  get(u, s) {
    if (u = Si(u), u) {
      const o = M.findKey(this, u);
      if (o) {
        const c = this[o];
        if (!s)
          return c;
        if (s === !0)
          return zE(c);
        if (M.isFunction(s))
          return s.call(this, c, o);
        if (M.isRegExp(s))
          return s.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(u, s) {
    if (u = Si(u), u) {
      const o = M.findKey(this, u);
      return !!(o && this[o] !== void 0 && (!s || ec(this, this[o], o, s)));
    }
    return !1;
  }
  delete(u, s) {
    const o = this;
    let c = !1;
    function d(m) {
      if (m = Si(m), m) {
        const y = M.findKey(o, m);
        y && (!s || ec(o, o[y], y, s)) && (delete o[y], c = !0);
      }
    }
    return M.isArray(u) ? u.forEach(d) : d(u), c;
  }
  clear(u) {
    const s = Object.keys(this);
    let o = s.length, c = !1;
    for (; o--; ) {
      const d = s[o];
      (!u || ec(this, this[d], d, u, !0)) && (delete this[d], c = !0);
    }
    return c;
  }
  normalize(u) {
    const s = this, o = {};
    return M.forEach(this, (c, d) => {
      const m = M.findKey(o, d);
      if (m) {
        s[m] = or(c), delete s[d];
        return;
      }
      const y = u ? jE(d) : String(d).trim();
      y !== d && delete s[d], s[y] = or(c), o[y] = !0;
    }), this;
  }
  concat(...u) {
    return this.constructor.concat(this, ...u);
  }
  toJSON(u) {
    const s = /* @__PURE__ */ Object.create(null);
    return M.forEach(this, (o, c) => {
      o != null && o !== !1 && (s[c] = u && M.isArray(o) ? o.join(", ") : o);
    }), s;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([u, s]) => u + ": " + s).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(u) {
    return u instanceof this ? u : new this(u);
  }
  static concat(u, ...s) {
    const o = new this(u);
    return s.forEach((c) => o.set(c)), o;
  }
  static accessor(u) {
    const o = (this[Zm] = this[Zm] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function d(m) {
      const y = Si(m);
      o[y] || (HE(c, m), o[y] = !0);
    }
    return M.isArray(u) ? u.forEach(d) : d(u), this;
  }
};
wt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
M.reduceDescriptors(wt.prototype, ({ value: a }, u) => {
  let s = u[0].toUpperCase() + u.slice(1);
  return {
    get: () => a,
    set(o) {
      this[s] = o;
    }
  };
});
M.freezeMethods(wt);
function tc(a, u) {
  const s = this || Li, o = u || s, c = wt.from(o.headers);
  let d = o.data;
  return M.forEach(a, function(y) {
    d = y.call(s, d, c.normalize(), u ? u.status : void 0);
  }), c.normalize(), d;
}
function Wh(a) {
  return !!(a && a.__CANCEL__);
}
function Ra(a, u, s) {
  oe.call(this, a ?? "canceled", oe.ERR_CANCELED, u, s), this.name = "CanceledError";
}
M.inherits(Ra, oe, {
  __CANCEL__: !0
});
function Ih(a, u, s) {
  const o = s.config.validateStatus;
  !s.status || !o || o(s.status) ? a(s) : u(new oe(
    "Request failed with status code " + s.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],
    s.config,
    s.request,
    s
  ));
}
function BE(a) {
  const u = /^([-+\w]{1,25})(:?\/\/|:)/.exec(a);
  return u && u[1] || "";
}
function qE(a, u) {
  a = a || 10;
  const s = new Array(a), o = new Array(a);
  let c = 0, d = 0, m;
  return u = u !== void 0 ? u : 1e3, function(p) {
    const g = Date.now(), E = o[d];
    m || (m = g), s[c] = p, o[c] = g;
    let T = d, _ = 0;
    for (; T !== c; )
      _ += s[T++], T = T % a;
    if (c = (c + 1) % a, c === d && (d = (d + 1) % a), g - m < u)
      return;
    const q = E && g - E;
    return q ? Math.round(_ * 1e3 / q) : void 0;
  };
}
function GE(a, u) {
  let s = 0, o = 1e3 / u, c, d;
  const m = (g, E = Date.now()) => {
    s = E, c = null, d && (clearTimeout(d), d = null), a(...g);
  };
  return [(...g) => {
    const E = Date.now(), T = E - s;
    T >= o ? m(g, E) : (c = g, d || (d = setTimeout(() => {
      d = null, m(c);
    }, o - T)));
  }, () => c && m(c)];
}
const hr = (a, u, s = 3) => {
  let o = 0;
  const c = qE(50, 250);
  return GE((d) => {
    const m = d.loaded, y = d.lengthComputable ? d.total : void 0, p = m - o, g = c(p), E = m <= y;
    o = m;
    const T = {
      loaded: m,
      total: y,
      progress: y ? m / y : void 0,
      bytes: p,
      rate: g || void 0,
      estimated: g && y && E ? (y - m) / g : void 0,
      event: d,
      lengthComputable: y != null,
      [u ? "download" : "upload"]: !0
    };
    a(T);
  }, s);
}, Jm = (a, u) => {
  const s = a != null;
  return [(o) => u[0]({
    lengthComputable: s,
    total: a,
    loaded: o
  }), u[1]];
}, $m = (a) => (...u) => M.asap(() => a(...u)), YE = mt.hasStandardBrowserEnv ? /* @__PURE__ */ ((a, u) => (s) => (s = new URL(s, mt.origin), a.protocol === s.protocol && a.host === s.host && (u || a.port === s.port)))(
  new URL(mt.origin),
  mt.navigator && /(msie|trident)/i.test(mt.navigator.userAgent)
) : () => !0, XE = mt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(a, u, s, o, c, d, m) {
      if (typeof document > "u") return;
      const y = [`${a}=${encodeURIComponent(u)}`];
      M.isNumber(s) && y.push(`expires=${new Date(s).toUTCString()}`), M.isString(o) && y.push(`path=${o}`), M.isString(c) && y.push(`domain=${c}`), d === !0 && y.push("secure"), M.isString(m) && y.push(`SameSite=${m}`), document.cookie = y.join("; ");
    },
    read(a) {
      if (typeof document > "u") return null;
      const u = document.cookie.match(new RegExp("(?:^|; )" + a + "=([^;]*)"));
      return u ? decodeURIComponent(u[1]) : null;
    },
    remove(a) {
      this.write(a, "", Date.now() - 864e5, "/");
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
function kE(a) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(a);
}
function VE(a, u) {
  return u ? a.replace(/\/?\/$/, "") + "/" + u.replace(/^\/+/, "") : a;
}
function Ph(a, u, s) {
  let o = !kE(u);
  return a && (o || s == !1) ? VE(a, u) : u;
}
const Fm = (a) => a instanceof wt ? { ...a } : a;
function An(a, u) {
  u = u || {};
  const s = {};
  function o(g, E, T, _) {
    return M.isPlainObject(g) && M.isPlainObject(E) ? M.merge.call({ caseless: _ }, g, E) : M.isPlainObject(E) ? M.merge({}, E) : M.isArray(E) ? E.slice() : E;
  }
  function c(g, E, T, _) {
    if (M.isUndefined(E)) {
      if (!M.isUndefined(g))
        return o(void 0, g, T, _);
    } else return o(g, E, T, _);
  }
  function d(g, E) {
    if (!M.isUndefined(E))
      return o(void 0, E);
  }
  function m(g, E) {
    if (M.isUndefined(E)) {
      if (!M.isUndefined(g))
        return o(void 0, g);
    } else return o(void 0, E);
  }
  function y(g, E, T) {
    if (T in u)
      return o(g, E);
    if (T in a)
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
    headers: (g, E, T) => c(Fm(g), Fm(E), T, !0)
  };
  return M.forEach(Object.keys({ ...a, ...u }), function(E) {
    const T = p[E] || c, _ = T(a[E], u[E], E);
    M.isUndefined(_) && T !== y || (s[E] = _);
  }), s;
}
const eg = (a) => {
  const u = An({}, a);
  let { data: s, withXSRFToken: o, xsrfHeaderName: c, xsrfCookieName: d, headers: m, auth: y } = u;
  if (u.headers = m = wt.from(m), u.url = Jh(Ph(u.baseURL, u.url, u.allowAbsoluteUrls), a.params, a.paramsSerializer), y && m.set(
    "Authorization",
    "Basic " + btoa((y.username || "") + ":" + (y.password ? unescape(encodeURIComponent(y.password)) : ""))
  ), M.isFormData(s)) {
    if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (M.isFunction(s.getHeaders)) {
      const p = s.getHeaders(), g = ["content-type", "content-length"];
      Object.entries(p).forEach(([E, T]) => {
        g.includes(E.toLowerCase()) && m.set(E, T);
      });
    }
  }
  if (mt.hasStandardBrowserEnv && (o && M.isFunction(o) && (o = o(u)), o || o !== !1 && YE(u.url))) {
    const p = c && d && XE.read(d);
    p && m.set(c, p);
  }
  return u;
}, KE = typeof XMLHttpRequest < "u", QE = KE && function(a) {
  return new Promise(function(s, o) {
    const c = eg(a);
    let d = c.data;
    const m = wt.from(c.headers).normalize();
    let { responseType: y, onUploadProgress: p, onDownloadProgress: g } = c, E, T, _, q, A;
    function L() {
      q && q(), A && A(), c.cancelToken && c.cancelToken.unsubscribe(E), c.signal && c.signal.removeEventListener("abort", E);
    }
    let D = new XMLHttpRequest();
    D.open(c.method.toUpperCase(), c.url, !0), D.timeout = c.timeout;
    function G() {
      if (!D)
        return;
      const Q = wt.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), W = {
        data: !y || y === "text" || y === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: Q,
        config: a,
        request: D
      };
      Ih(function(ue) {
        s(ue), L();
      }, function(ue) {
        o(ue), L();
      }, W), D = null;
    }
    "onloadend" in D ? D.onloadend = G : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(G);
    }, D.onabort = function() {
      D && (o(new oe("Request aborted", oe.ECONNABORTED, a, D)), D = null);
    }, D.onerror = function(I) {
      const W = I && I.message ? I.message : "Network Error", me = new oe(W, oe.ERR_NETWORK, a, D);
      me.event = I || null, o(me), D = null;
    }, D.ontimeout = function() {
      let I = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded";
      const W = c.transitional || $h;
      c.timeoutErrorMessage && (I = c.timeoutErrorMessage), o(new oe(
        I,
        W.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        a,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && M.forEach(m.toJSON(), function(I, W) {
      D.setRequestHeader(W, I);
    }), M.isUndefined(c.withCredentials) || (D.withCredentials = !!c.withCredentials), y && y !== "json" && (D.responseType = c.responseType), g && ([_, A] = hr(g, !0), D.addEventListener("progress", _)), p && D.upload && ([T, q] = hr(p), D.upload.addEventListener("progress", T), D.upload.addEventListener("loadend", q)), (c.cancelToken || c.signal) && (E = (Q) => {
      D && (o(!Q || Q.type ? new Ra(null, a, D) : Q), D.abort(), D = null);
    }, c.cancelToken && c.cancelToken.subscribe(E), c.signal && (c.signal.aborted ? E() : c.signal.addEventListener("abort", E)));
    const V = BE(c.url);
    if (V && mt.protocols.indexOf(V) === -1) {
      o(new oe("Unsupported protocol " + V + ":", oe.ERR_BAD_REQUEST, a));
      return;
    }
    D.send(d || null);
  });
}, ZE = (a, u) => {
  const { length: s } = a = a ? a.filter(Boolean) : [];
  if (u || s) {
    let o = new AbortController(), c;
    const d = function(g) {
      if (!c) {
        c = !0, y();
        const E = g instanceof Error ? g : this.reason;
        o.abort(E instanceof oe ? E : new Ra(E instanceof Error ? E.message : E));
      }
    };
    let m = u && setTimeout(() => {
      m = null, d(new oe(`timeout ${u} of ms exceeded`, oe.ETIMEDOUT));
    }, u);
    const y = () => {
      a && (m && clearTimeout(m), m = null, a.forEach((g) => {
        g.unsubscribe ? g.unsubscribe(d) : g.removeEventListener("abort", d);
      }), a = null);
    };
    a.forEach((g) => g.addEventListener("abort", d));
    const { signal: p } = o;
    return p.unsubscribe = () => M.asap(y), p;
  }
}, JE = function* (a, u) {
  let s = a.byteLength;
  if (s < u) {
    yield a;
    return;
  }
  let o = 0, c;
  for (; o < s; )
    c = o + u, yield a.slice(o, c), o = c;
}, $E = async function* (a, u) {
  for await (const s of FE(a))
    yield* JE(s, u);
}, FE = async function* (a) {
  if (a[Symbol.asyncIterator]) {
    yield* a;
    return;
  }
  const u = a.getReader();
  try {
    for (; ; ) {
      const { done: s, value: o } = await u.read();
      if (s)
        break;
      yield o;
    }
  } finally {
    await u.cancel();
  }
}, Wm = (a, u, s, o) => {
  const c = $E(a, u);
  let d = 0, m, y = (p) => {
    m || (m = !0, o && o(p));
  };
  return new ReadableStream({
    async pull(p) {
      try {
        const { done: g, value: E } = await c.next();
        if (g) {
          y(), p.close();
          return;
        }
        let T = E.byteLength;
        if (s) {
          let _ = d += T;
          s(_);
        }
        p.enqueue(new Uint8Array(E));
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
}, Im = 64 * 1024, { isFunction: ir } = M, WE = (({ Request: a, Response: u }) => ({
  Request: a,
  Response: u
}))(M.global), {
  ReadableStream: Pm,
  TextEncoder: eh
} = M.global, th = (a, ...u) => {
  try {
    return !!a(...u);
  } catch {
    return !1;
  }
}, IE = (a) => {
  a = M.merge.call({
    skipUndefined: !0
  }, WE, a);
  const { fetch: u, Request: s, Response: o } = a, c = u ? ir(u) : typeof fetch == "function", d = ir(s), m = ir(o);
  if (!c)
    return !1;
  const y = c && ir(Pm), p = c && (typeof eh == "function" ? /* @__PURE__ */ ((A) => (L) => A.encode(L))(new eh()) : async (A) => new Uint8Array(await new s(A).arrayBuffer())), g = d && y && th(() => {
    let A = !1;
    const L = new s(mt.origin, {
      body: new Pm(),
      method: "POST",
      get duplex() {
        return A = !0, "half";
      }
    }).headers.has("Content-Type");
    return A && !L;
  }), E = m && y && th(() => M.isReadableStream(new o("").body)), T = {
    stream: E && ((A) => A.body)
  };
  c && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((A) => {
    !T[A] && (T[A] = (L, D) => {
      let G = L && L[A];
      if (G)
        return G.call(L);
      throw new oe(`Response type '${A}' is not supported`, oe.ERR_NOT_SUPPORT, D);
    });
  });
  const _ = async (A) => {
    if (A == null)
      return 0;
    if (M.isBlob(A))
      return A.size;
    if (M.isSpecCompliantForm(A))
      return (await new s(mt.origin, {
        method: "POST",
        body: A
      }).arrayBuffer()).byteLength;
    if (M.isArrayBufferView(A) || M.isArrayBuffer(A))
      return A.byteLength;
    if (M.isURLSearchParams(A) && (A = A + ""), M.isString(A))
      return (await p(A)).byteLength;
  }, q = async (A, L) => {
    const D = M.toFiniteNumber(A.getContentLength());
    return D ?? _(L);
  };
  return async (A) => {
    let {
      url: L,
      method: D,
      data: G,
      signal: V,
      cancelToken: Q,
      timeout: I,
      onDownloadProgress: W,
      onUploadProgress: me,
      responseType: ue,
      headers: ne,
      withCredentials: ee = "same-origin",
      fetchOptions: ce
    } = eg(A), Le = u || fetch;
    ue = ue ? (ue + "").toLowerCase() : "text";
    let Ne = ZE([V, Q && Q.toAbortSignal()], I), _e = null;
    const Je = Ne && Ne.unsubscribe && (() => {
      Ne.unsubscribe();
    });
    let ke;
    try {
      if (me && g && D !== "get" && D !== "head" && (ke = await q(ne, G)) !== 0) {
        let Te = new s(L, {
          method: "POST",
          body: G,
          duplex: "half"
        }), S;
        if (M.isFormData(G) && (S = Te.headers.get("content-type")) && ne.setContentType(S), Te.body) {
          const [j, K] = Jm(
            ke,
            hr($m(me))
          );
          G = Wm(Te.body, Im, j, K);
        }
      }
      M.isString(ee) || (ee = ee ? "include" : "omit");
      const X = d && "credentials" in s.prototype, Y = {
        ...ce,
        signal: Ne,
        method: D.toUpperCase(),
        headers: ne.normalize().toJSON(),
        body: G,
        duplex: "half",
        credentials: X ? ee : void 0
      };
      _e = d && new s(L, Y);
      let k = await (d ? Le(_e, ce) : Le(L, Y));
      const re = E && (ue === "stream" || ue === "response");
      if (E && (W || re && Je)) {
        const Te = {};
        ["status", "statusText", "headers"].forEach((Z) => {
          Te[Z] = k[Z];
        });
        const S = M.toFiniteNumber(k.headers.get("content-length")), [j, K] = W && Jm(
          S,
          hr($m(W), !0)
        ) || [];
        k = new o(
          Wm(k.body, Im, j, () => {
            K && K(), Je && Je();
          }),
          Te
        );
      }
      ue = ue || "text";
      let Ae = await T[M.findKey(T, ue) || "text"](k, A);
      return !re && Je && Je(), await new Promise((Te, S) => {
        Ih(Te, S, {
          data: Ae,
          headers: wt.from(k.headers),
          status: k.status,
          statusText: k.statusText,
          config: A,
          request: _e
        });
      });
    } catch (X) {
      throw Je && Je(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new oe("Network Error", oe.ERR_NETWORK, A, _e),
        {
          cause: X.cause || X
        }
      ) : oe.from(X, X && X.code, A, _e);
    }
  };
}, PE = /* @__PURE__ */ new Map(), tg = (a) => {
  let u = a && a.env || {};
  const { fetch: s, Request: o, Response: c } = u, d = [
    o,
    c,
    s
  ];
  let m = d.length, y = m, p, g, E = PE;
  for (; y--; )
    p = d[y], g = E.get(p), g === void 0 && E.set(p, g = y ? /* @__PURE__ */ new Map() : IE(u)), E = g;
  return g;
};
tg();
const Sc = {
  http: yE,
  xhr: QE,
  fetch: {
    get: tg
  }
};
M.forEach(Sc, (a, u) => {
  if (a) {
    try {
      Object.defineProperty(a, "name", { value: u });
    } catch {
    }
    Object.defineProperty(a, "adapterName", { value: u });
  }
});
const lh = (a) => `- ${a}`, eb = (a) => M.isFunction(a) || a === null || a === !1;
function tb(a, u) {
  a = M.isArray(a) ? a : [a];
  const { length: s } = a;
  let o, c;
  const d = {};
  for (let m = 0; m < s; m++) {
    o = a[m];
    let y;
    if (c = o, !eb(o) && (c = Sc[(y = String(o)).toLowerCase()], c === void 0))
      throw new oe(`Unknown adapter '${y}'`);
    if (c && (M.isFunction(c) || (c = c.get(u))))
      break;
    d[y || "#" + m] = c;
  }
  if (!c) {
    const m = Object.entries(d).map(
      ([p, g]) => `adapter ${p} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let y = s ? m.length > 1 ? `since :
` + m.map(lh).join(`
`) : " " + lh(m[0]) : "as no adapter specified";
    throw new oe(
      "There is no suitable adapter to dispatch the request " + y,
      "ERR_NOT_SUPPORT"
    );
  }
  return c;
}
const lg = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: tb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Sc
};
function lc(a) {
  if (a.cancelToken && a.cancelToken.throwIfRequested(), a.signal && a.signal.aborted)
    throw new Ra(null, a);
}
function nh(a) {
  return lc(a), a.headers = wt.from(a.headers), a.data = tc.call(
    a,
    a.transformRequest
  ), ["post", "put", "patch"].indexOf(a.method) !== -1 && a.headers.setContentType("application/x-www-form-urlencoded", !1), lg.getAdapter(a.adapter || Li.adapter, a)(a).then(function(o) {
    return lc(a), o.data = tc.call(
      a,
      a.transformResponse,
      o
    ), o.headers = wt.from(o.headers), o;
  }, function(o) {
    return Wh(o) || (lc(a), o && o.response && (o.response.data = tc.call(
      a,
      a.transformResponse,
      o.response
    ), o.response.headers = wt.from(o.response.headers))), Promise.reject(o);
  });
}
const ng = "1.13.2", Tr = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((a, u) => {
  Tr[a] = function(o) {
    return typeof o === a || "a" + (u < 1 ? "n " : " ") + a;
  };
});
const ah = {};
Tr.transitional = function(u, s, o) {
  function c(d, m) {
    return "[Axios v" + ng + "] Transitional option '" + d + "'" + m + (o ? ". " + o : "");
  }
  return (d, m, y) => {
    if (u === !1)
      throw new oe(
        c(m, " has been removed" + (s ? " in " + s : "")),
        oe.ERR_DEPRECATED
      );
    return s && !ah[m] && (ah[m] = !0, console.warn(
      c(
        m,
        " has been deprecated since v" + s + " and will be removed in the near future"
      )
    )), u ? u(d, m, y) : !0;
  };
};
Tr.spelling = function(u) {
  return (s, o) => (console.warn(`${o} is likely a misspelling of ${u}`), !0);
};
function lb(a, u, s) {
  if (typeof a != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const o = Object.keys(a);
  let c = o.length;
  for (; c-- > 0; ) {
    const d = o[c], m = u[d];
    if (m) {
      const y = a[d], p = y === void 0 || m(y, d, a);
      if (p !== !0)
        throw new oe("option " + d + " must be " + p, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (s !== !0)
      throw new oe("Unknown option " + d, oe.ERR_BAD_OPTION);
  }
}
const cr = {
  assertOptions: lb,
  validators: Tr
}, ul = cr.validators;
let xn = class {
  constructor(u) {
    this.defaults = u || {}, this.interceptors = {
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
  async request(u, s) {
    try {
      return await this._request(u, s);
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
  _request(u, s) {
    typeof u == "string" ? (s = s || {}, s.url = u) : s = u || {}, s = An(this.defaults, s);
    const { transitional: o, paramsSerializer: c, headers: d } = s;
    o !== void 0 && cr.assertOptions(o, {
      silentJSONParsing: ul.transitional(ul.boolean),
      forcedJSONParsing: ul.transitional(ul.boolean),
      clarifyTimeoutError: ul.transitional(ul.boolean)
    }, !1), c != null && (M.isFunction(c) ? s.paramsSerializer = {
      serialize: c
    } : cr.assertOptions(c, {
      encode: ul.function,
      serialize: ul.function
    }, !0)), s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0), cr.assertOptions(s, {
      baseUrl: ul.spelling("baseURL"),
      withXsrfToken: ul.spelling("withXSRFToken")
    }, !0), s.method = (s.method || this.defaults.method || "get").toLowerCase();
    let m = d && M.merge(
      d.common,
      d[s.method]
    );
    d && M.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (A) => {
        delete d[A];
      }
    ), s.headers = wt.concat(m, d);
    const y = [];
    let p = !0;
    this.interceptors.request.forEach(function(L) {
      typeof L.runWhen == "function" && L.runWhen(s) === !1 || (p = p && L.synchronous, y.unshift(L.fulfilled, L.rejected));
    });
    const g = [];
    this.interceptors.response.forEach(function(L) {
      g.push(L.fulfilled, L.rejected);
    });
    let E, T = 0, _;
    if (!p) {
      const A = [nh.bind(this), void 0];
      for (A.unshift(...y), A.push(...g), _ = A.length, E = Promise.resolve(s); T < _; )
        E = E.then(A[T++], A[T++]);
      return E;
    }
    _ = y.length;
    let q = s;
    for (; T < _; ) {
      const A = y[T++], L = y[T++];
      try {
        q = A(q);
      } catch (D) {
        L.call(this, D);
        break;
      }
    }
    try {
      E = nh.call(this, q);
    } catch (A) {
      return Promise.reject(A);
    }
    for (T = 0, _ = g.length; T < _; )
      E = E.then(g[T++], g[T++]);
    return E;
  }
  getUri(u) {
    u = An(this.defaults, u);
    const s = Ph(u.baseURL, u.url, u.allowAbsoluteUrls);
    return Jh(s, u.params, u.paramsSerializer);
  }
};
M.forEach(["delete", "get", "head", "options"], function(u) {
  xn.prototype[u] = function(s, o) {
    return this.request(An(o || {}, {
      method: u,
      url: s,
      data: (o || {}).data
    }));
  };
});
M.forEach(["post", "put", "patch"], function(u) {
  function s(o) {
    return function(d, m, y) {
      return this.request(An(y || {}, {
        method: u,
        headers: o ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  xn.prototype[u] = s(), xn.prototype[u + "Form"] = s(!0);
});
let nb = class ag {
  constructor(u) {
    if (typeof u != "function")
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
    }, u(function(d, m, y) {
      o.reason || (o.reason = new Ra(d, m, y), s(o.reason));
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
  subscribe(u) {
    if (this.reason) {
      u(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(u) : this._listeners = [u];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(u) {
    if (!this._listeners)
      return;
    const s = this._listeners.indexOf(u);
    s !== -1 && this._listeners.splice(s, 1);
  }
  toAbortSignal() {
    const u = new AbortController(), s = (o) => {
      u.abort(o);
    };
    return this.subscribe(s), u.signal.unsubscribe = () => this.unsubscribe(s), u.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let u;
    return {
      token: new ag(function(c) {
        u = c;
      }),
      cancel: u
    };
  }
};
function ab(a) {
  return function(s) {
    return a.apply(null, s);
  };
}
function ib(a) {
  return M.isObject(a) && a.isAxiosError === !0;
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
Object.entries(oc).forEach(([a, u]) => {
  oc[u] = a;
});
function ig(a) {
  const u = new xn(a), s = jh(xn.prototype.request, u);
  return M.extend(s, xn.prototype, u, { allOwnKeys: !0 }), M.extend(s, u, null, { allOwnKeys: !0 }), s.create = function(c) {
    return ig(An(a, c));
  }, s;
}
const He = ig(Li);
He.Axios = xn;
He.CanceledError = Ra;
He.CancelToken = nb;
He.isCancel = Wh;
He.VERSION = ng;
He.toFormData = Rr;
He.AxiosError = oe;
He.Cancel = He.CanceledError;
He.all = function(u) {
  return Promise.all(u);
};
He.spread = ab;
He.isAxiosError = ib;
He.mergeConfig = An;
He.AxiosHeaders = wt;
He.formToJSON = (a) => Fh(M.isHTMLForm(a) ? new FormData(a) : a);
He.getAdapter = lg.getAdapter;
He.HttpStatusCode = oc;
He.default = He;
const {
  Axios: _b,
  AxiosError: Ob,
  CanceledError: Db,
  isCancel: Mb,
  CancelToken: Ub,
  VERSION: zb,
  all: Lb,
  Cancel: jb,
  isAxiosError: Hb,
  spread: Bb,
  toFormData: qb,
  AxiosHeaders: Gb,
  HttpStatusCode: Yb,
  formToJSON: Xb,
  getAdapter: kb,
  mergeConfig: Vb
} = He, ug = "WEBCOMPONENT";
function ub(a) {
  a ? localStorage.setItem(pe.AUTHORITY_OVERRIDE, a) : localStorage.removeItem(pe.AUTHORITY_OVERRIDE);
}
function rb() {
  return localStorage.getItem(pe.AUTHORITY_OVERRIDE);
}
function ih() {
  localStorage.removeItem(pe.AUTHORITY_OVERRIDE);
}
function sb() {
  const a = rb();
  if (a && Object.values(Qt).includes(a))
    return a;
  const u = window.location.hostname;
  return u === Al.HOSTNAME || u === Al.IP || Al.IP_PATTERN.test(u) || u.startsWith(`${Qe.DEV}.`) || u.startsWith(`${Qe.DEV}-`) ? Qt.DEV : u.startsWith(`${Qe.TEST}.`) || u.startsWith(`${Qe.TEST}-`) ? Qt.TEST : u.startsWith(`${Qe.STAGE}.`) || u.startsWith(`${Qe.STAGE}-`) ? Qt.STAGE : Qt.PROD;
}
function ob(a) {
  if (ug === pc.TEST)
    return "";
  const u = sb();
  return a.startsWith("/global") ? xv[u] : wv[u];
}
const _n = (a) => {
  const u = a.startsWith("/") ? a : `/${a}`;
  return ug === pc.TEST ? u : `${ob(u)}${u}`;
}, cb = async (a) => {
  try {
    return (await He.get(_n(Nn.GLOBAL_SUBSIDIARIES)))?.data?.find(
      (o) => o?.siteURL?.includes(a)
    );
  } catch (u) {
    console.error("Error fetching subsidiaries:", u);
  }
};
async function Ta() {
  const a = localStorage.getItem(pe.BRAND_DATA);
  if (!a)
    return {};
  const u = JSON.parse(a), s = await cb(u?.domain);
  return {
    [Fo.X_BRAND_ID]: s?.subsidiaryName,
    [Fo.X_SUBSIDIARY_ID]: s?.subsidiaryId?.toString(),
    [Fo.X_BRAND_DOMAIN]: u?.domain
  };
}
const fb = async (a, u) => {
  const s = _n(Nn.AUTH), o = { username: a, password: u };
  try {
    const c = await He.post(s, o, {
      headers: await Ta()
    }), d = c.headers["x-credential"] || c.headers["X-Credential"];
    return {
      ...c.data,
      x_credential: d || c.data.x_credential
    };
  } catch (c) {
    throw console.error("Error during auth login:", c), c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === vr.UNAUTHORIZED ? new Error(it.INVALID_CREDENTIALS) : c.message ? new Error(c.message) : new Error(it.AUTH_FAILED);
  }
}, db = async (a) => {
  const u = _n(Nn.REGISTER);
  try {
    return (await He.post(u, a, {
      headers: await Ta()
    })).data;
  } catch (s) {
    throw console.error("Error during registration:", s), s.response?.data?.details?.errorMessage ? new Error(s.response.data.details.errorMessage) : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.details ? new Error(s.response.data.details) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === vr.INTERNAL_SERVER_ERROR ? new Error(it.REGISTRATION_FAILED_RETRY) : s.message ? new Error(s.message) : new Error(it.REGISTRATION_FAILED);
  }
}, Rc = async (a) => {
  const u = _n(Nn.CHECK_EMAIL);
  try {
    return (await He.post(
      u,
      { email: a },
      {
        headers: await Ta()
      }
    )).data;
  } catch (s) {
    throw console.error("Error checking email:", s), s.response?.status === 405 ? new Error("Email verification service is temporarily unavailable (Method Not Allowed)") : s.response?.status === 403 ? new Error("Access denied to email verification service") : s.response?.status === 500 ? new Error("Email verification service encountered an error") : s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.message ? new Error(`Email verification failed: ${s.message}`) : new Error("Unable to verify email. Please try again.");
  }
}, uh = async (a) => {
  const u = _n(Nn.FORGOT_PASSWORD), s = { email: a };
  try {
    return (await He.post(u, s, {
      headers: await Ta()
    })).data;
  } catch (o) {
    throw console.error("Error sending password reset:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === vr.NOT_FOUND ? new Error("We couldn't find an account with that email.") : o.message ? new Error(o.message) : new Error(it.RESET_LINK_FAILED);
  }
}, mb = async (a) => {
  const u = _n(Nn.REFRESH_TOKEN), s = { refresh_token: a };
  try {
    const o = await He.post(u, s, {
      headers: await Ta()
    }), c = o.headers["x-credential"] || o.headers["X-Credential"];
    return {
      ...o.data,
      x_credential: c || o.data.x_credential
    };
  } catch (o) {
    throw console.error("Error during token refresh:", o), o;
  }
}, hb = async (a) => {
  const u = _n(Nn.LOGOUT), s = { refresh_token: a };
  try {
    return (await He.post(u, s, {
      headers: await Ta()
    })).data;
  } catch (o) {
    throw console.error("Error during logout:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === vr.UNAUTHORIZED ? new Error("Logout failed: session is already expired") : o.message ? new Error(o.message) : new Error("Logout failed");
  }
}, gb = () => {
  try {
    const a = Rt(Ge.REFRESH_TOKEN, !1);
    if (!a)
      return !0;
    const u = Di(a), s = Math.floor(Date.now() / 1e3);
    return !u.exp || s >= u.exp;
  } catch (a) {
    return console.error(`${Ze.TOKEN} isRefreshTokenExpiredFromCookie Error:`, a), !0;
  }
}, gr = () => Rt(Ge.REFRESH_TOKEN, !1) || localStorage.getItem(pe.REFRESH_TOKEN), Ci = (a) => {
  try {
    const u = Di(a), s = Math.floor(Date.now() / 1e3);
    return !u.exp || s >= u.exp;
  } catch {
    return !0;
  }
}, cc = (a) => !Ci(a);
let fr = null;
const ya = () => {
  fr && (clearInterval(fr), fr = null);
}, Tc = async (a) => {
  try {
    const u = a || gr();
    if (!u)
      return !1;
    const s = await mb(u);
    if (!s?.tokens?.access_token)
      return !1;
    const o = s.tokens, c = dr(o.access_token);
    if (!c)
      return !1;
    const d = (c.decoded.exp || 0) - Math.floor(Date.now() / 1e3);
    if (d <= 0)
      return !1;
    Tn(Ge.ACCESS_TOKEN, o.access_token, d, !0);
    const m = s.x_credential || c.decoded.x_credentials;
    if (m && Tn(Ge.X_CREDENTIAL, m, d, !1), localStorage.setItem(pe.ACCESS_TOKEN, o.access_token), localStorage.setItem(
      pe.ACCESS_TOKEN_EXPIRES,
      (Date.now() + d * 1e3).toString()
    ), o.refresh_token) {
      localStorage.setItem(pe.REFRESH_TOKEN, o.refresh_token);
      const y = 720 * 60 * 60;
      Tn(Ge.REFRESH_TOKEN, o.refresh_token, y, !0), localStorage.getItem(pe.REFRESH_TOKEN_TIME) && localStorage.setItem(pe.REFRESH_TOKEN_TIME, Date.now().toString());
    }
    return !0;
  } catch (u) {
    return console.error(`${Ze.TOKEN} refreshAuthenticationState Error:`, u), !1;
  }
}, yb = async () => {
  const a = gr();
  if (!(Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN)) || !a || !cc(a))
    return ya(), !0;
  ya();
  const s = 180 * 1e3;
  return fr = setInterval(async () => {
    const o = gr();
    if (!(Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN))) {
      ya();
      return;
    }
    if (!o || !cc(o)) {
      ya();
      return;
    }
    const d = Rt(Ge.X_CREDENTIAL, !1) || Rt(Ge.X_CREDENTIAL_OLD, !1), m = Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN);
    (!d || Ci(d) || !m || Ci(m)) && await Tc(o);
  }, s), () => ya();
}, rh = (a) => {
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
  } catch (u) {
    return console.error(`${Ze.CHECK_TOKEN_AND_REDIRECT} Error:`, u), !1;
  }
}, pb = async (a) => {
  if (rh(a))
    return !0;
  try {
    if (!localStorage.getItem(pe.REFRESH_TOKEN_TIME))
      return !1;
    const o = gr();
    if (!o || !cc(o))
      return !1;
    const c = Rt(Ge.X_CREDENTIAL, !1) || Rt(Ge.X_CREDENTIAL_OLD, !1), d = Rt(Ge.ACCESS_TOKEN, !1) || localStorage.getItem(pe.ACCESS_TOKEN), m = !c || Ci(c), y = !d || Ci(d);
    return !m && !y || !await Tc(o) ? !1 : rh(a);
  } catch (s) {
    return console.error(`${Ze.CHECK_TOKEN_AND_REDIRECT} checkTokenAndRedirectWithRefresh Error:`, s), !1;
  }
}, vb = () => {
  try {
    const a = localStorage.getItem(pe.REFRESH_TOKEN_TIME);
    return a ? Date.now() - parseInt(a) < Tv.REFRESH_TOKEN_MAX_AGE_MS : !1;
  } catch (a) {
    return console.error(`${Ze.TOKEN} isRefreshTokenValid Error:`, a), !1;
  }
}, Eb = () => {
  ar(Ge.ACCESS_TOKEN), ar(Ge.X_CREDENTIAL), ar(Ge.X_CREDENTIAL_OLD), ar(Ge.REFRESH_TOKEN), [
    pe.REFRESH_TOKEN,
    pe.REFRESH_TOKEN_TIME,
    pe.ACCESS_TOKEN,
    pe.ACCESS_TOKEN_EXPIRES,
    "user_info",
    "authority",
    "subsidiary"
  ].forEach((u) => {
    localStorage.removeItem(u);
  }), console.log(`${Ze.AUTH} All authentication tokens and state cleared`);
}, rg = async (a, u, s = !1) => {
  const o = await fb(a, u), { tokens: c, x_credential: d } = o;
  if (c.access_token) {
    const m = Di(c.access_token), y = (m.exp || 0) - Math.floor(Date.now() / 1e3);
    Tn(Ge.ACCESS_TOKEN, c.access_token, y, !0);
    const p = d || m.x_credentials;
    p ? (Tn(Ge.X_CREDENTIAL, p, y, !1), console.log("✅ X-Credential cookie set successfully")) : console.warn("⚠️ No x_credential found in response or JWT"), p && Tn(Ge.X_CREDENTIAL, p, y, !1), localStorage.setItem(pe.ACCESS_TOKEN, c.access_token), localStorage.setItem(
      pe.ACCESS_TOKEN_EXPIRES,
      (Date.now() + y * 1e3).toString()
    ), localStorage.setItem(pe.REFRESH_TOKEN, c.refresh_token);
    const g = 720 * 60 * 60;
    Tn(Ge.REFRESH_TOKEN, c.refresh_token, g, !0), s && c.refresh_token ? (localStorage.setItem(pe.REFRESH_TOKEN_TIME, Date.now().toString()), console.log(`${Ze.AUTH} Remember Me enabled - auto-login will work on page revisit`)) : (localStorage.removeItem(pe.REFRESH_TOKEN_TIME), console.log(
      `${Ze.AUTH} Remember Me disabled - manual login required on page revisit`
    ));
  }
  return c;
}, dr = (a) => {
  try {
    const u = Di(a);
    return {
      access_token: a,
      userInfo: {
        studentId: u.studentId,
        sub: u.sub,
        email_verified: u.email_verified,
        x_credentials: u.x_credentials,
        name: u.name,
        preferred_username: u.preferred_username,
        given_name: u.given_name,
        family_name: u.family_name,
        email: u.email
      },
      // Include token metadata for operations like cookie expiry
      decoded: {
        exp: u.exp,
        x_credentials: u.x_credentials
      }
    };
  } catch (u) {
    return console.error(
      `${Ze.TOKEN} createUserSessionFromToken - Failed to decode access token:`,
      u
    ), null;
  }
}, wr = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", bb = ({
  onSuccess: a,
  onError: u,
  handleClose: s,
  onSignIn: o,
  title: c = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [y, p] = w.useState(m), [g, E] = w.useState(""), [T, _] = w.useState(""), [q, A] = w.useState(""), [L, D] = w.useState(!1), [G, V] = w.useState(""), [Q, I] = w.useState(""), [W, me] = w.useState(!1), [ue, ne] = w.useState(!1), [ee, ce] = w.useState(!1), [Le, Ne] = w.useState(!1), [_e, Je] = w.useState(!1), [ke, X] = w.useState(!1), [Y, k] = w.useState(""), [re, Ae] = w.useState(!1), [Te, S] = w.useState(""), [j, K] = w.useState(de.INFO), Z = w.useRef(null), ae = w.useRef(null), J = {
    length: q.length >= tr.MIN_LENGTH && q.length <= tr.MAX_LENGTH,
    hasNumber: ga.NUMBER.test(q),
    hasUppercase: ga.UPPERCASE.test(q),
    hasLowercase: ga.LOWERCASE.test(q),
    hasSpecialChar: Gm.test(q),
    onlyAllowedChars: Ym.test(q) || q === "",
    differentFromUsername: y ? q !== y && q !== y.split("@")[0] : !0
  }, te = ((be) => {
    if (!be) return { strength: "", color: "", width: lr.EMPTY };
    if (J.length && J.hasNumber && J.hasUppercase && J.hasLowercase && J.hasSpecialChar && J.onlyAllowedChars && J.differentFromUsername)
      return {
        strength: Io.STRONG,
        color: Po.STRONG,
        width: lr.STRONG
      };
    let lt = 0;
    return J.length && lt++, J.hasNumber && lt++, J.hasUppercase && lt++, J.hasLowercase && lt++, J.hasSpecialChar && lt++, J.onlyAllowedChars && lt++, J.differentFromUsername && lt++, lt <= 2 ? {
      strength: Io.WEAK,
      color: Po.WEAK,
      width: lr.WEAK
    } : {
      strength: Io.GOOD,
      color: Po.GOOD,
      width: lr.GOOD
    };
  })(q), he = (be) => be ? be.length < tr.MIN_LENGTH || be.length > tr.MAX_LENGTH ? { isValid: !1, error: it.PASSWORD_LENGTH } : ga.UPPERCASE.test(be) ? ga.LOWERCASE.test(be) ? ga.NUMBER.test(be) ? Gm.test(be) ? Ym.test(be) ? { isValid: !0, error: "" } : {
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
  w.useEffect(() => {
    if (ae.current && clearTimeout(ae.current), !y) {
      ce(!1), Ne(!1), X(!1), k("");
      return;
    }
    if (!Ti.test(y)) {
      ce(!1), Ne(!1);
      return;
    }
    return ae.current = setTimeout(async () => {
      Je(!0);
      try {
        (await Rc(y)).exists ? (Ne(!0), ce(!0)) : (Ne(!1), ce(!1));
      } catch (be) {
        console.error(`${Ze.CREATE_ACCOUNT} Email check failed:`, be);
        const ft = be instanceof Error ? be.message : "Unable to verify email. You can still proceed with registration.";
        X(!0), k(ft), ce(!0), Ne(!1);
      } finally {
        Je(!1);
      }
    }, Ai.EMAIL_CHECK_DEBOUNCE), () => {
      ae.current && clearTimeout(ae.current);
    };
  }, [y]);
  const Ft = y && Ti.test(y);
  w.useEffect(() => {
    const be = (ft) => {
      ft.key === "Escape" && s();
    };
    return document.addEventListener("keydown", be), () => document.removeEventListener("keydown", be);
  }, [s]);
  const On = (be) => {
    be.target === Z.current && s();
  }, wa = async (be) => {
    if (be.preventDefault(), ne(!0), !y || !g || !T) {
      u("Please fill in all required fields");
      return;
    }
    const ft = he(q);
    if (!ft.isValid) {
      I(ft.error), u(ft.error), D(!1);
      return;
    }
    if (!Ti.test(y)) {
      V(it.EMAIL_INVALID), u(it.EMAIL_INVALID);
      return;
    }
    D(!0), V(""), S("");
    try {
      const lt = y.split("@")[0], _l = await db({
        username: lt,
        email: y,
        firstName: g,
        lastName: T,
        password: q
      });
      console.log(
        `${Ze.CREATE_ACCOUNT} Registration successful:`,
        _l.message
      );
      try {
        const ln = await rg(y, q, re);
        a(ln);
      } catch (ln) {
        console.error(
          `${Ze.CREATE_ACCOUNT} Auto-login failed after registration:`,
          ln
        );
        const ji = ln instanceof Error ? ln.message : "Auto-login failed";
        u(ji);
      }
    } catch (lt) {
      console.error(`${Ze.CREATE_ACCOUNT} Registration failed:`, lt);
      const _l = lt instanceof Error ? lt.message : it.REGISTRATION_FAILED;
      S(_l), K(de.ERROR), u(_l);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    Te && /* @__PURE__ */ v.jsx(
      ic,
      {
        type: j,
        message: Te,
        duration: Ai.TOAST_DEFAULT_DURATION,
        onClose: () => S("")
      }
    ),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "identity-widget-create-account-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Z,
        onMouseDown: On,
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "create-account-dialog-title",
        children: /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: "identity-widget-create-account-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative! max-h-[90vh]! overflow-y-auto! [&::-webkit-scrollbar]:w-2! [&::-webkit-scrollbar-track]:bg-gray-100! [&::-webkit-scrollbar-thumb]:bg-gray-300! [&::-webkit-scrollbar-thumb]:rounded-full! [&::-webkit-scrollbar-thumb:hover]:bg-gray-400!",
            role: "document",
            style: {
              scrollbarWidth: "thin",
              scrollbarColor: "#d1d5db #f3f4f6"
            },
            children: [
              /* @__PURE__ */ v.jsx(
                Lt,
                {
                  onClick: s,
                  variant: Zt.LINK,
                  className: "identity-widget-create-account-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0! z-10!",
                  type: Jt.BUTTON,
                  ariaLabel: "Close dialog",
                  children: /* @__PURE__ */ v.jsx(
                    "svg",
                    {
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
              /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-create-account-header mb-6! text-center!", children: [
                /* @__PURE__ */ v.jsx(
                  "h2",
                  {
                    id: "create-account-dialog-title",
                    className: "identity-widget-create-account-title text-2xl! font-bold! text-gray-800! mb-1!",
                    children: c
                  }
                ),
                /* @__PURE__ */ v.jsx("p", { className: "identity-widget-create-account-subtitle text-sm! text-gray-600! mt-1!", children: d })
              ] }),
              /* @__PURE__ */ v.jsxs("form", { onSubmit: wa, className: "identity-widget-create-account-form space-y-4!", "aria-label": "Create account form", children: [
                /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-email-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
                  Rn,
                  {
                    label: "Email Address",
                    id: "email",
                    type: "email",
                    value: y,
                    onChange: (be) => {
                      p(be.target.value), V("");
                    },
                    placeholder: "Enter email address",
                    disabled: L,
                    className: "identity-widget-create-account-email-input w-full!",
                    autoComplete: "email",
                    error: ue && !y ? "Required" : G || "",
                    endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                      _e && /* @__PURE__ */ v.jsx(zh, {}),
                      !_e && !Le && !ke && y && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y) && /* @__PURE__ */ v.jsx(
                        "img",
                        {
                          className: "identity-widget-create-account-email-available-icon",
                          src: wr,
                          alt: "Email available",
                          "aria-label": "Email is available",
                          style: { width: 18, height: 18 }
                        }
                      )
                    ] })
                  }
                ) }),
                ee && Le && !ke && /* @__PURE__ */ v.jsx(
                  pa,
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
                ee && ke && /* @__PURE__ */ v.jsx(
                  pa,
                  {
                    type: de.ERROR,
                    message: Y,
                    onClose: () => {
                      ce(!1), X(!1), k("");
                    },
                    className: "identity-widget-create-account-error-banner mb-4!"
                  }
                ),
                /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-create-account-name-row flex flex-col sm:flex-row gap-2 sm:gap-4 mt-0 ml-0 mb-4 mr-0", children: [
                  /* @__PURE__ */ v.jsx(
                    Rn,
                    {
                      label: "First Name",
                      id: "firstName",
                      type: "text",
                      value: g,
                      onChange: (be) => E(be.target.value),
                      placeholder: "First Name",
                      disabled: L,
                      className: "identity-widget-create-account-firstname-input w-full!",
                      autoComplete: "given-name",
                      error: ue && !g ? "Required" : ""
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    Rn,
                    {
                      label: "Last Name",
                      id: "lastName",
                      type: "text",
                      value: T,
                      onChange: (be) => _(be.target.value),
                      placeholder: "Last Name",
                      disabled: L,
                      className: "identity-widget-create-account-lastname-input w-full!",
                      autoComplete: "family-name",
                      error: ue && !T ? "Required" : ""
                    }
                  )
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-password-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-password-input-wrap relative! w-full!", children: /* @__PURE__ */ v.jsx(
                  Rn,
                  {
                    label: "Password",
                    id: "password",
                    type: W ? "text" : "password",
                    value: q,
                    onChange: (be) => {
                      A(be.target.value), I("");
                    },
                    placeholder: "Enter Password...",
                    disabled: L,
                    className: "identity-widget-create-account-password-input w-full!",
                    autoComplete: "new-password",
                    error: Q,
                    endIcon: /* @__PURE__ */ v.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: () => me(!W),
                        className: "identity-widget-create-account-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                        tabIndex: -1,
                        "aria-label": W ? "Hide password" : "Show password",
                        children: W ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                q && /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-create-account-strength mt-2! mb-4!", children: [
                  /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-create-account-strength-row flex! items-center! justify-between! mb-2!", children: [
                    /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-strength-track w-full! bg-gray-200! rounded-full! h-2! mr-3!", children: /* @__PURE__ */ v.jsx(
                      "div",
                      {
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
                        className: "identity-widget-create-account-strength-label text-sm! font-medium! whitespace-nowrap!",
                        style: { color: te.color },
                        children: te.strength
                      }
                    )
                  ] }),
                  /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-create-account-requirements mt-3!", children: [
                    /* @__PURE__ */ v.jsx("p", { className: "identity-widget-create-account-requirements-title text-sm! font-medium! text-gray-700! mb-2!", children: "Password must:" }),
                    /* @__PURE__ */ v.jsxs("ul", { className: "identity-widget-create-account-requirements-list space-y-1!", children: [
                      /* @__PURE__ */ v.jsxs("li", { className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.length ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                            className: `identity-widget-create-account-requirement-text ${J.length ? "text-green-600!" : "text-gray-500!"}`,
                            children: "be 9-15 characters"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.hasNumber ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                            className: `identity-widget-create-account-requirement-text ${J.hasNumber ? "text-green-600!" : "text-gray-500!"}`,
                            children: "have at least one number"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.hasUppercase ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                            className: `identity-widget-create-account-requirement-text ${J.hasUppercase ? "text-green-600!" : "text-gray-500!"}`,
                            children: "have at least one uppercase letter"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.hasSpecialChar ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                            className: `identity-widget-create-account-requirement-text ${J.hasSpecialChar ? "text-green-600!" : "text-gray-500!"}`,
                            children: "have at least one special character"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.onlyAllowedChars ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                            className: `identity-widget-create-account-requirement-text ${J.onlyAllowedChars ? "text-green-600!" : "text-gray-500!"}`,
                            children: "use only the following special characters !@#$%^&*._-"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ v.jsxs("li", { className: "identity-widget-create-account-requirement-item flex! items-center! text-sm!", children: [
                        J.differentFromUsername ? /* @__PURE__ */ v.jsx(
                          "svg",
                          {
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
                            className: `identity-widget-create-account-requirement-text ${J.differentFromUsername ? "text-green-600!" : "text-gray-500!"}`,
                            children: "be different from username"
                          }
                        )
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-remember-row flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsxs("label", { className: "identity-widget-create-account-remember-label flex! items-center! m-0!", children: [
                  /* @__PURE__ */ v.jsx(
                    "input",
                    {
                      type: "checkbox",
                      checked: re,
                      onChange: (be) => Ae(be.target.checked),
                      className: "identity-widget-create-account-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                      "aria-label": "Remember me"
                    }
                  ),
                  /* @__PURE__ */ v.jsx(
                    "span",
                    {
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
                  Lt,
                  {
                    type: Jt.SUBMIT,
                    disabled: L || Le || !Ft,
                    className: "identity-widget-submit-button identity-widget-create-account-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                    children: L ? /* @__PURE__ */ v.jsxs("span", { className: "identity-widget-create-account-submit-loading flex! items-center! justify-center!", children: [
                      /* @__PURE__ */ v.jsxs(
                        "svg",
                        {
                          className: "identity-widget-create-account-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          children: [
                            /* @__PURE__ */ v.jsx(
                              "circle",
                              {
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
                /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-create-account-divider relative! mt-4! mb-4!", children: [
                  /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-divider-line-wrap absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-divider-line w-full! border-t! border-solid! border-gray-300!" }) }),
                  /* @__PURE__ */ v.jsx("div", { className: "identity-widget-create-account-divider-text-wrap relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-create-account-divider-text px-2! bg-white text-gray-500", children: "OR" }) })
                ] }),
                /* @__PURE__ */ v.jsx(
                  Lt,
                  {
                    type: Jt.BUTTON,
                    variant: Zt.OUTLINE,
                    onClick: () => o(y),
                    disabled: L,
                    className: "identity-widget-create-account-signin-button w-full! flex! items-center! justify-center! gap-3!",
                    children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-create-account-signin-text", children: "Sign In" })
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    Te && /* @__PURE__ */ v.jsx(ic, { message: Te, type: j, onClose: () => S("") })
  ] });
}, Sb = ({
  email: a,
  loading: u,
  onResendLink: s,
  onBack: o,
  onClose: c
}) => {
  const d = w.useRef(null);
  w.useEffect(() => {
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
      className: "identity-widget-reset-success-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: m,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-success-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-reset-success-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: c,
            variant: "link",
            className: "identity-widget-reset-success-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: "button",
            ariaLabel: "Close dialog",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
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
        /* @__PURE__ */ v.jsx("div", { className: "identity-widget-reset-success-icon-wrap flex! justify-center! mb-4!", children: /* @__PURE__ */ v.jsx("img", { src: wr, alt: "Success", "aria-hidden": "true", className: "identity-widget-reset-success-icon w-16! h-16!" }) }),
        /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-reset-success-header mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx("h2", { id: "reset-success-dialog-title", className: "identity-widget-reset-success-title text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ v.jsx("p", { className: "identity-widget-reset-success-subtitle text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ v.jsx("p", { className: "identity-widget-reset-success-email text-base! font-semibold! text-gray-900! mb-4!", children: a }),
          /* @__PURE__ */ v.jsx("p", { className: "identity-widget-reset-success-copy text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ v.jsx("p", { className: "identity-widget-reset-success-note text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            type: "button",
            onClick: s,
            disabled: u,
            ariaLabel: "Resend password reset link",
            className: "identity-widget-submit-button identity-widget-reset-success-resend-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
            children: u ? /* @__PURE__ */ v.jsxs("span", { className: "identity-widget-reset-success-resend-loading flex! items-center! justify-center!", children: [
              /* @__PURE__ */ v.jsxs(
                "svg",
                {
                  className: "identity-widget-reset-success-resend-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: [
                    /* @__PURE__ */ v.jsx(
                      "circle",
                      {
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
          Lt,
          {
            type: "button",
            variant: "outline",
            onClick: o,
            disabled: u,
            className: "identity-widget-reset-success-back-button w-full! flex! items-center! justify-center! gap-3!",
            children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-reset-success-back-text", children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, Rb = ({
  email: a,
  onBack: u,
  handleClose: s
}) => {
  const [o, c] = w.useState(a || ""), [d, m] = w.useState(!1), [y, p] = w.useState(!1), [g, E] = w.useState(""), [T, _] = w.useState(!1), [q, A] = w.useState(!1), [L, D] = w.useState(!1), [G, V] = w.useState(!1), [Q, I] = w.useState(""), W = w.useRef(null);
  w.useEffect(() => {
    const ee = (ce) => {
      ce.key === "Escape" && s();
    };
    return document.addEventListener("keydown", ee), () => document.removeEventListener("keydown", ee);
  }, [s]), w.useEffect(() => {
    const ee = Ti.test(o);
    if (D(ee), !ee || !o) {
      A(!1), V(!1), I("");
      return;
    }
    const ce = setTimeout(async () => {
      _(!0);
      try {
        const Le = await Rc(o);
        console.log("[ResetPassword] Email check response:", Le), A(Le.exists), console.log("[ResetPassword] Email exists:", Le.exists);
      } catch (Le) {
        console.error("[ResetPassword] Error checking email:", Le);
        const Ne = Le instanceof Error ? Le.message : "Unable to verify email. Please try again.";
        V(!0), I(Ne), A(!1);
      } finally {
        _(!1);
      }
    }, Ai.EMAIL_CHECK_DEBOUNCE);
    return () => clearTimeout(ce);
  }, [o]);
  const me = (ee) => {
    ee.target === W.current && s();
  }, ue = async (ee) => {
    if (ee.preventDefault(), !o) {
      E(it.EMAIL_REQUIRED);
      return;
    }
    m(!0), E("");
    try {
      await uh(o), console.log("[ResetPassword] Reset link sent to:", o), p(!0);
    } catch (ce) {
      console.error("[ResetPassword] Failed to send reset link:", ce);
      const Le = ce instanceof Error ? ce.message : it.RESET_LINK_FAILED;
      E(Le);
    } finally {
      m(!1);
    }
  }, ne = async () => {
    m(!0), E("");
    try {
      await uh(o), console.log("[ResetPassword] Reset link resent to:", o);
    } catch (ee) {
      console.error("[ResetPassword] Failed to resend reset link:", ee), p(!1);
      const ce = ee instanceof Error ? ee.message : it.RESET_LINK_FAILED;
      E(ce);
    } finally {
      m(!1);
    }
  };
  return y ? /* @__PURE__ */ v.jsx(
    Sb,
    {
      email: o,
      loading: d,
      onResendLink: ne,
      onBack: u,
      onClose: s
    }
  ) : /* @__PURE__ */ v.jsx(
    "div",
    {
      className: "identity-widget-reset-password-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: W,
      onMouseDown: me,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "reset-password-dialog-title",
      children: /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-reset-password-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
        /* @__PURE__ */ v.jsx(
          Lt,
          {
            onClick: s,
            variant: Zt.LINK,
            className: "identity-widget-reset-password-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: Jt.BUTTON,
            ariaLabel: "Close dialog",
            children: /* @__PURE__ */ v.jsx(
              "svg",
              {
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
        /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-reset-password-header mb-6! text-center!", children: [
          /* @__PURE__ */ v.jsx(
            "h2",
            {
              id: "reset-password-dialog-title",
              className: "identity-widget-reset-password-title text-2xl! font-bold! text-gray-800! mb-2!",
              children: "Reset your password"
            }
          ),
          /* @__PURE__ */ v.jsx("p", { className: "identity-widget-reset-password-subtitle text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ v.jsxs("form", { onSubmit: ue, className: "identity-widget-reset-password-form space-y-4!", "aria-label": "Reset password form", children: [
          /* @__PURE__ */ v.jsx("div", { className: "identity-widget-reset-password-email-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
            Rn,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: o,
              onChange: (ee) => {
                c(ee.target.value), E("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "identity-widget-reset-password-email-input w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                T && /* @__PURE__ */ v.jsx(
                  "div",
                  {
                    className: "identity-widget-reset-password-email-loading animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!",
                    role: "status",
                    "aria-label": "Checking email"
                  }
                ),
                !T && q && L && !G && /* @__PURE__ */ v.jsx(
                  "img",
                  {
                    className: "identity-widget-reset-password-email-verified-icon",
                    src: wr,
                    alt: "User found",
                    "aria-label": "User found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          G && /* @__PURE__ */ v.jsx(
            pa,
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
            pa,
            {
              type: de.ERROR,
              message: g,
              actionText: "Want to sign in instead?",
              onActionClick: u,
              onClose: () => E(""),
              className: "identity-widget-reset-password-submit-error-banner mb-4!"
            }
          ),
          /* @__PURE__ */ v.jsx(
            Lt,
            {
              type: Jt.SUBMIT,
              disabled: d || !o || !L || !q,
              className: "identity-widget-submit-button identity-widget-reset-password-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", {
                  loading: d,
                  email: o,
                  isEmailValid: L,
                  emailExists: q
                });
              },
              children: d ? /* @__PURE__ */ v.jsxs("span", { className: "identity-widget-reset-password-submit-loading flex! items-center! justify-center!", children: [
                /* @__PURE__ */ v.jsxs(
                  "svg",
                  {
                    className: "identity-widget-reset-password-submit-spinner animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ v.jsx(
                        "circle",
                        {
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
            Lt,
            {
              type: Jt.BUTTON,
              variant: Zt.OUTLINE,
              onClick: u,
              disabled: d,
              className: "identity-widget-reset-password-back-button w-full! flex! items-center! justify-center! gap-3! mt-4!",
              children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-reset-password-back-text", children: "Back to sign in" })
            }
          )
        ] })
      ] })
    }
  );
}, Tb = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_21254_78867)'%3e%3cpath%20d='M17.64%209.20419C17.64%208.56601%2017.5827%207.95237%2017.4764%207.36328H9V10.8447H13.8436C13.635%2011.9697%2013.0009%2012.9228%2012.0477%2013.561V15.8192H14.9564C16.6582%2014.2524%2017.64%2011.9451%2017.64%209.20419Z'%20fill='%234285F4'/%3e%3cpath%20d='M9.00366%2018C11.4337%2018%2013.471%2017.1941%2014.9601%2015.8195L12.0514%2013.5613C11.2455%2014.1013%2010.2146%2014.4204%209.00366%2014.4204C6.65957%2014.4204%204.67548%2012.8372%203.96775%2010.71H0.960938V13.0418C2.44184%2015.9831%205.48548%2018%209.00366%2018Z'%20fill='%2334A853'/%3e%3cpath%20d='M3.96409%2010.7098C3.78409%2010.1698%203.68182%209.59301%203.68182%208.99983C3.68182%208.40665%203.78409%207.82983%203.96409%207.28983V4.95801H0.957275C0.347727%206.17301%200%207.54755%200%208.99983C0%2010.4521%200.347727%2011.8266%200.957275%2013.0416L3.96409%2010.7098Z'%20fill='%23FBBC04'/%3e%3cpath%20d='M9.00366%203.57955C10.3251%203.57955%2011.5114%204.03364%2012.4442%204.92545L15.0255%202.34409C13.4669%200.891818%2011.4296%200%209.00366%200C5.48548%200%202.44184%202.01682%200.960938%204.95818L3.96775%207.29C4.67548%205.16273%206.65957%203.57955%209.00366%203.57955Z'%20fill='%23EA4335'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_21254_78867'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", wb = ({
  onSuccess: a,
  onError: u,
  handleClose: s,
  authority: o,
  title: c = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = "",
  enableGoogleLogin: y = !1
}) => {
  const [p, g] = w.useState(m), [E, T] = w.useState(""), [_, q] = w.useState(!1), [A, L] = w.useState(!1), [D, G] = w.useState(""), [V, Q] = w.useState(!1), [I, W] = w.useState(!1), [me, ue] = w.useState(!1), [ne, ee] = w.useState(!1), [ce, Le] = w.useState(!1), [Ne, _e] = w.useState(!1), [Je, ke] = w.useState(!1), [X, Y] = w.useState(""), [k, re] = w.useState(""), [Ae, Te] = w.useState(de.INFO), S = w.useRef(null), j = w.useRef(null), K = Rv({
    flow: "auth-code",
    onSuccess: (te) => {
      console.log("[EmbeddedLogin] Google auth-code response received", te), re(
        "Google sign-in completed. Connect this credential to your backend login flow."
      ), Te(de.INFO), G("");
    },
    onError: (te) => {
      const he = te.error_description || te.error || "Google sign-in failed.";
      re(he), Te(de.ERROR), u(he);
    },
    onNonOAuthError: (te) => {
      const he = `Google sign-in failed: ${te.type}`;
      re(he), Te(de.ERROR), u(he);
    }
  });
  w.useEffect(() => {
    if (j.current && clearTimeout(j.current), !p) {
      ee(!1), _e(!1), ke(!1), Y("");
      return;
    }
    if (!p.includes("@")) {
      ee(!0), _e(!1);
      return;
    }
    if (!Ti.test(p)) {
      ee(!1), _e(!1);
      return;
    }
    return j.current = setTimeout(async () => {
      Le(!0);
      try {
        (await Rc(p)).exists ? (ee(!0), _e(!1)) : (ee(!1), _e(!0));
      } catch (te) {
        console.error("[EmbeddedLogin] Email check failed:", te);
        const he = te instanceof Error ? te.message : "Unable to verify email. You can still proceed with login.";
        ke(!0), Y(he), _e(!0), ee(!1);
      } finally {
        Le(!1);
      }
    }, 500), () => {
      j.current && clearTimeout(j.current);
    };
  }, [p]);
  const ae = p && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p);
  w.useEffect(() => {
    const te = (he) => {
      he.key === "Escape" && s();
    };
    return document.addEventListener("keydown", te), () => document.removeEventListener("keydown", te);
  }, [s]);
  const J = (te) => {
    te.target === S.current && s();
  }, Re = async (te) => {
    if (te.preventDefault(), !p || !E) {
      G("Please enter both username/email and password"), u("Please enter both username/email and password");
      return;
    }
    q(!0), G("");
    try {
      const he = await rg(p, E, V);
      a(he);
    } catch (he) {
      console.error("[EmbeddedLogin] Login failed:", he);
      const Ft = he instanceof Error ? he.message : "Authentication failed";
      G(Ft), re(Ft), Te(de.ERROR), u(Ft);
    } finally {
      q(!1);
    }
  };
  return me ? /* @__PURE__ */ v.jsx(
    Rb,
    {
      email: p,
      onBack: () => ue(!1),
      handleClose: s
    }
  ) : I ? /* @__PURE__ */ v.jsx(
    bb,
    {
      onSuccess: (te) => {
        W(!1), a(te);
      },
      onError: u,
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
      className: "identity-widget-login-overlay fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: S,
      onMouseDown: J,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "login-dialog-title",
      children: [
        /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-login-modal bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", role: "document", children: [
          /* @__PURE__ */ v.jsx(
            Lt,
            {
              onClick: s,
              variant: Zt.LINK,
              className: "identity-widget-login-close-button absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
              type: Jt.BUTTON,
              ariaLabel: "Close dialog",
              children: /* @__PURE__ */ v.jsx(
                "svg",
                {
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
          /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-login-header mb-3! text-center!", children: [
            /* @__PURE__ */ v.jsx("h2", { id: "login-dialog-title", className: "identity-widget-login-title text-2xl! font-bold! text-gray-800! mb-0!", children: c }),
            /* @__PURE__ */ v.jsx("p", { className: "identity-widget-login-subtitle text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ v.jsxs("form", { onSubmit: Re, className: "identity-widget-login-form space-y-2!", "aria-label": "Login form", children: [
            y && /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
              /* @__PURE__ */ v.jsx("div", { className: "identity-widget-google-section mt-0! mb-4! hidden! justify-center!", children: /* @__PURE__ */ v.jsxs(
                Lt,
                {
                  type: Jt.BUTTON,
                  variant: Zt.OUTLINE,
                  onClick: () => K(),
                  disabled: _,
                  className: "identity-widget-google-button w-full! max-w-full! flex! items-center! justify-center! gap-3! m-0! bg-white! border! border-solid! border-gray-300! text-gray-700! shadow-none! font-medium! text-base!",
                  children: [
                    /* @__PURE__ */ v.jsx("img", { src: Tb, alt: "Google", className: "identity-widget-google-icon w-[18px]! h-[18px]!" }),
                    /* @__PURE__ */ v.jsx("span", { className: "identity-widget-google-text", children: "Sign in with Google" })
                  ]
                }
              ) }),
              /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-login-divider relative! mt-2! mb-4! hidden!", children: [
                /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-divider-line-wrap absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-divider-line w-full! border-t! border-solid! border-gray-300!" }) }),
                /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-divider-text-wrap relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-login-divider-text px-2! bg-white text-gray-500", children: "OR" }) })
              ] })
            ] }),
            /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-email-field mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ v.jsx(
              Rn,
              {
                label: "Email or Username",
                id: "email",
                type: "text",
                value: p,
                onChange: (te) => g(te.target.value),
                placeholder: "Enter email or username",
                disabled: _,
                className: "w-full!",
                autoComplete: "username",
                endIcon: /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
                  ce && /* @__PURE__ */ v.jsx(zh, {}),
                  !ce && ne && ae && !Je && /* @__PURE__ */ v.jsx(
                    "img",
                    {
                      className: "identity-widget-login-email-verified-icon",
                      src: wr,
                      alt: "User verified",
                      "aria-label": "User found",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Ne && !ne && ae && !Je && /* @__PURE__ */ v.jsx(
              pa,
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
              pa,
              {
                type: de.ERROR,
                message: X,
                onClose: () => {
                  _e(!1), ke(!1), Y("");
                },
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-password-field mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-password-input-wrap relative! w-full!", children: /* @__PURE__ */ v.jsx(
              Rn,
              {
                label: "Password",
                id: "password",
                type: A ? "text" : "password",
                value: E,
                onChange: (te) => {
                  T(te.target.value), G("");
                },
                placeholder: "Enter Password...",
                disabled: _,
                className: "w-full!",
                autoComplete: "current-password",
                error: D,
                endIcon: /* @__PURE__ */ v.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => L(!A),
                    className: "identity-widget-login-password-toggle text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    "aria-label": A ? "Hide password" : "Show password",
                    children: A ? /* @__PURE__ */ v.jsx(
                      "svg",
                      {
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
            /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-login-meta-row flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
              /* @__PURE__ */ v.jsxs("label", { className: "identity-widget-login-remember-label flex! items-center! m-0!", children: [
                /* @__PURE__ */ v.jsx(
                  "input",
                  {
                    type: "checkbox",
                    checked: V,
                    onChange: (te) => Q(te.target.checked),
                    className: "identity-widget-login-remember-checkbox mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!",
                    "aria-label": "Remember me"
                  }
                ),
                /* @__PURE__ */ v.jsx(
                  "span",
                  {
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
                  className: "identity-widget-login-forgot-link no-underline!",
                  style: {
                    fontWeight: "500",
                    color: "#5F5B7D"
                  },
                  onClick: (te) => {
                    te.preventDefault(), ue(!0);
                  },
                  children: "Forgot Password?"
                }
              )
            ] }),
            /* @__PURE__ */ v.jsx(
              Lt,
              {
                type: Jt.SUBMIT,
                disabled: _ || !p,
                className: "identity-widget-submit-button identity-widget-login-submit-button w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: _ ? /* @__PURE__ */ v.jsxs("span", { className: "identity-widget-login-submit-loading flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ v.jsxs(
                    "svg",
                    {
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
            /* @__PURE__ */ v.jsxs("div", { className: "identity-widget-login-bottom-divider relative! mt-4! mb-4!", children: [
              /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-bottom-divider-line-wrap absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-bottom-divider-line w-full! border-t! border-solid! border-gray-300!" }) }),
              /* @__PURE__ */ v.jsx("div", { className: "identity-widget-login-bottom-divider-text-wrap relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-login-bottom-divider-text px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ v.jsx(
              Lt,
              {
                type: Jt.BUTTON,
                variant: Zt.OUTLINE,
                onClick: () => W(!0),
                disabled: _,
                className: "identity-widget-login-create-account-button w-full! flex! items-center! justify-center! gap-3! m-0!",
                children: /* @__PURE__ */ v.jsx("span", { className: "identity-widget-login-create-account-text", children: "Create an Account" })
              }
            )
          ] })
        ] }),
        k && /* @__PURE__ */ v.jsx(ic, { message: k, type: Ae, onClose: () => re("") })
      ]
    }
  );
}, xb = (a) => {
  const { authority: u, subsidiary: s, onRedirect: o, onTokenValidityCheck: c } = a, [d, m] = w.useState(!1);
  w.useEffect(() => (u ? (ub(u), console.log(`${Ze.AUTH} Authority override set to: ${u}`)) : (ih(), console.log(`${Ze.AUTH} Using automatic authority detection`)), () => {
    ih();
  }), [u]), w.useEffect(() => {
    let E;
    return (async () => {
      const _ = await yb();
      typeof _ == "function" && (E = _);
    })(), () => {
      E && E();
    };
  }, [d]), w.useEffect(() => {
    (async () => {
      try {
        const T = !gb();
        if (c && c(T), await pb()) {
          m(!0);
          const A = a.redirectUrl || nr();
          if (a.autoRedirection)
            window.location.href = A;
          else if (o && a.redirectUrl) {
            const L = a.redirectUrl || nr(), D = localStorage.getItem(pe.ACCESS_TOKEN);
            if (D) {
              const G = dr(D);
              G && o(L, G);
            }
          }
          return;
        }
        if (vb()) {
          if (await Tc()) {
            const L = localStorage.getItem(pe.ACCESS_TOKEN);
            if (!L)
              return;
            const D = dr(L);
            if (!D)
              return;
            console.log(`${Ze.AUTH} Auto-login successful`), m(!0), c && c(!0);
            const G = a.redirectUrl || nr();
            o && (console.log(
              `${Ze.AUTH} Triggering onRedirect callback with user session:`,
              D
            ), o(G, D)), a.autoRedirection && (window.location.href = G);
          }
        } else
          localStorage.removeItem(pe.REFRESH_TOKEN), localStorage.removeItem(pe.REFRESH_TOKEN_TIME);
      } catch (T) {
        console.error(`${Ze.AUTH} Auto-login failed:`, T), localStorage.removeItem(pe.REFRESH_TOKEN), localStorage.removeItem(pe.REFRESH_TOKEN_TIME);
      }
    })();
  }, [a.redirectUrl, c]), w.useEffect(() => {
    u && localStorage.setItem("authority", u), s && localStorage.setItem("subsidiary", s);
  }, [u, s]);
  const y = () => {
    a.handleClose && a.handleClose(), m(!0);
    const E = a.redirectUrl || nr();
    if (o) {
      const T = localStorage.getItem(pe.ACCESS_TOKEN);
      if (T) {
        const _ = dr(T);
        _ && o(E, _);
      }
    }
    a.autoRedirection && setTimeout(() => {
      window.location.href = E;
    }, 100);
  }, p = (E) => {
    console.log(`${Ze.AUTH} Embedded login error:`, E);
  }, g = () => {
    a.handleClose && a.handleClose();
  };
  return /* @__PURE__ */ v.jsx("div", { role: "application", "aria-label": "Authentication Widget", children: /* @__PURE__ */ v.jsx(Mp, { children: /* @__PURE__ */ v.jsx(
    Ch,
    {
      path: "*",
      element: /* @__PURE__ */ v.jsx(w.Fragment, { children: a.showLogin && !d && /* @__PURE__ */ v.jsx(
        wb,
        {
          onSuccess: y,
          onError: p,
          handleClose: g,
          authority: u,
          title: a.loginTitle,
          subtitle: a.loginSubtitle,
          enableGoogleLogin: !!a.googleClientId
        }
      ) })
    }
  ) }) });
};
class Ab {
  cdnBaseUrl;
  currentBrand = null;
  styleElement = null;
  shadowRoot = null;
  constructor(u = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", s) {
    this.cdnBaseUrl = u.replace(/\/$/, ""), this.shadowRoot = s || null;
  }
  /**
   * Fetch all available brands from CDN
   */
  async getBrands() {
    try {
      const u = await fetch(`${this.cdnBaseUrl}/brands.json`);
      if (!u.ok)
        throw new Error(`Failed to fetch brands: ${u.statusText}`);
      return await u.json();
    } catch (u) {
      throw console.error("[ThemeWidget] Error fetching brands:", u), u;
    }
  }
  /**
   * Auto-detect brand based on current URL domain
   */
  async detectBrandFromDomain() {
    try {
      const u = await this.getBrands(), s = window.location.hostname, o = u.find(
        (c) => s.includes(c.domain) || c.domain.includes(s)
      );
      return o ? (localStorage.setItem("subsidiary", o.token), o.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${s}`), null);
    } catch (u) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", u), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(u) {
    try {
      const o = (await this.getBrands()).find(
        (p) => p.folder.toLowerCase() === u.toLowerCase() || p.token.toLowerCase() === u.toLowerCase()
      );
      if (!o) {
        console.warn(`[ThemeWidget] Brand not found: ${u}. Using default theme.`);
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
  applyTheme(u) {
    const s = u.styles.map((c) => {
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
  formatStyleValue(u) {
    return /^#?[0-9A-Fa-f]{6}$/.test(u) ? u.startsWith("#") ? u : `#${u}` : /^\d+\s+\d+\s+\d+$/.test(u) ? `rgba(${u.replace(/\s+/g, ", ")}, 1)` : u;
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
async function sh(a) {
  const u = new Ab(a.cdnBaseUrl, a.shadowRoot), s = a.brandFolder || a.brandToken;
  if (s)
    await u.loadTheme(s);
  else if (a.autoDetect) {
    const o = await u.detectBrandFromDomain();
    o && await u.loadTheme(o);
  }
  return u;
}
const oh = "832956972051-o6rtl5uehltu7di3cmrvao44mdh54911.apps.googleusercontent.com", ch = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class a extends HTMLElement {
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
          o ? (await hb(o), console.log("[Widget] Logout API call completed")) : console.warn("[Widget] No refresh token found, skipping logout API call");
        } catch (o) {
          console.error("[Widget] Logout API call failed:", o);
        } finally {
          Eb(), localStorage.clear(), sessionStorage.clear(), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
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
        /* @__PURE__ */ v.jsx(bv, { clientId: s.googleClientId || oh, children: /* @__PURE__ */ v.jsx(lv, { children: /* @__PURE__ */ v.jsx(w.StrictMode, { children: /* @__PURE__ */ v.jsx(xb, { ...s }) }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || customElements.define("keycloak-widget", a);
}
