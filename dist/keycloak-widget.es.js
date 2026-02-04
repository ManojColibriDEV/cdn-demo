
(function(){
  var cssContent="@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:oklch(97.1% .013 17.38);--color-red-100:oklch(93.6% .032 17.717);--color-red-200:oklch(88.5% .062 18.334);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-red-700:oklch(50.5% .213 27.518);--color-red-800:oklch(44.4% .177 26.899);--color-yellow-50:oklch(98.7% .026 102.212);--color-yellow-100:oklch(97.3% .071 103.193);--color-yellow-200:oklch(94.5% .129 101.54);--color-yellow-500:oklch(79.5% .184 86.047);--color-yellow-600:oklch(68.1% .162 75.834);--color-yellow-700:oklch(55.4% .135 66.442);--color-yellow-800:oklch(47.6% .114 61.907);--color-green-50:oklch(98.2% .018 155.826);--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-600:oklch(62.7% .194 149.214);--color-green-700:oklch(52.7% .154 150.069);--color-green-800:oklch(44.8% .119 151.328);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-100:oklch(95.6% .045 203.388);--color-cyan-500:oklch(71.5% .143 215.221);--color-cyan-600:oklch(60.9% .126 221.723);--color-cyan-700:oklch(52% .105 223.128);--color-blue-100:oklch(93.2% .032 255.585);--color-blue-200:oklch(88.2% .059 254.128);--color-blue-500:oklch(62.3% .214 259.815);--color-blue-600:oklch(54.6% .245 262.881);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-800:oklch(27.8% .033 256.848);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-lg:32rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-md:.375rem;--radius-lg:.5rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-auto\\!{pointer-events:auto!important}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.absolute\\!{position:absolute!important}.fixed{position:fixed}.fixed\\!{position:fixed!important}.relative{position:relative}.relative\\!{position:relative!important}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.inset-0\\!{inset:calc(var(--spacing)*0)!important}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2\\!{top:50%!important}.top-4{top:calc(var(--spacing)*4)}.top-4\\!{top:calc(var(--spacing)*4)!important}.right-2{right:calc(var(--spacing)*2)}.right-2\\.5\\!{right:calc(var(--spacing)*2.5)!important}.right-4{right:calc(var(--spacing)*4)}.right-4\\!{right:calc(var(--spacing)*4)!important}.z-2{z-index:2}.z-2\\!{z-index:2!important}.z-2000{z-index:2000}.z-2000\\!{z-index:2000!important}.z-2001{z-index:2001}.z-\\[9999\\]\\!{z-index:9999!important}.container{width:100%}@media(min-width:40rem){.container{max-width:40rem}}@media(min-width:48rem){.container{max-width:48rem}}@media(min-width:64rem){.container{max-width:64rem}}@media(min-width:80rem){.container{max-width:80rem}}@media(min-width:96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing)*0)}.m-0\\!{margin:calc(var(--spacing)*0)!important}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-6{margin-block:calc(var(--spacing)*6)}.mt-0{margin-top:calc(var(--spacing)*0)}.mt-0\\!{margin-top:calc(var(--spacing)*0)!important}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\!{margin-top:calc(var(--spacing)*1)!important}.mt-1\\.5\\!{margin-top:calc(var(--spacing)*1.5)!important}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-4\\!{margin-top:calc(var(--spacing)*4)!important}.mt-5{margin-top:calc(var(--spacing)*5)}.mt-6{margin-top:calc(var(--spacing)*6)}.mt-6\\!{margin-top:calc(var(--spacing)*6)!important}.mt-7{margin-top:calc(var(--spacing)*7)}.mt-7\\!{margin-top:calc(var(--spacing)*7)!important}.mr-0{margin-right:calc(var(--spacing)*0)}.mr-0\\!{margin-right:calc(var(--spacing)*0)!important}.mr-1{margin-right:calc(var(--spacing)*1)}.mr-1\\.5\\!{margin-right:calc(var(--spacing)*1.5)!important}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-2\\!{margin-right:calc(var(--spacing)*2)!important}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-3\\!{margin-right:calc(var(--spacing)*3)!important}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\!{margin-bottom:calc(var(--spacing)*0)!important}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-1\\!{margin-bottom:calc(var(--spacing)*1)!important}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-2\\!{margin-bottom:calc(var(--spacing)*2)!important}.mb-3{margin-bottom:calc(var(--spacing)*3)}.mb-3\\!{margin-bottom:calc(var(--spacing)*3)!important}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-4\\!{margin-bottom:calc(var(--spacing)*4)!important}.mb-5{margin-bottom:calc(var(--spacing)*5)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-6\\!{margin-bottom:calc(var(--spacing)*6)!important}.mb-7{margin-bottom:calc(var(--spacing)*7)}.mb-7\\!{margin-bottom:calc(var(--spacing)*7)!important}.-ml-1{margin-left:calc(var(--spacing)*-1)}.-ml-1\\!{margin-left:calc(var(--spacing)*-1)!important}.ml-0{margin-left:calc(var(--spacing)*0)}.ml-0\\!{margin-left:calc(var(--spacing)*0)!important}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-2\\!{margin-left:calc(var(--spacing)*2)!important}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-3\\!{margin-left:calc(var(--spacing)*3)!important}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-4\\!{margin-left:calc(var(--spacing)*4)!important}.box-border{box-sizing:border-box}.box-border\\!{box-sizing:border-box!important}.block{display:block}.block\\!{display:block!important}.contents{display:contents}.flex{display:flex}.flex\\!{display:flex!important}.grid{display:grid}.grid\\!{display:grid!important}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-flex\\!{display:inline-flex!important}.table{display:table}.h-0{height:calc(var(--spacing)*0)}.h-0\\!{height:calc(var(--spacing)*0)!important}.h-4{height:calc(var(--spacing)*4)}.h-4\\!{height:calc(var(--spacing)*4)!important}.h-5{height:calc(var(--spacing)*5)}.h-5\\!{height:calc(var(--spacing)*5)!important}.h-6{height:calc(var(--spacing)*6)}.h-6\\!{height:calc(var(--spacing)*6)!important}.h-11{height:calc(var(--spacing)*11)}.h-16{height:calc(var(--spacing)*16)}.h-16\\!{height:calc(var(--spacing)*16)!important}.h-\\[1rem\\]\\!{height:1rem!important}.w-4{width:calc(var(--spacing)*4)}.w-4\\!{width:calc(var(--spacing)*4)!important}.w-5{width:calc(var(--spacing)*5)}.w-5\\!{width:calc(var(--spacing)*5)!important}.w-6{width:calc(var(--spacing)*6)}.w-6\\!{width:calc(var(--spacing)*6)!important}.w-16{width:calc(var(--spacing)*16)}.w-16\\!{width:calc(var(--spacing)*16)!important}.w-\\[1rem\\]\\!{width:1rem!important}.w-full{width:100%}.w-full\\!{width:100%!important}.max-w-7xl{max-width:var(--container-7xl)}.max-w-lg{max-width:var(--container-lg)}.max-w-lg\\!{max-width:var(--container-lg)!important}.min-w-0{min-width:calc(var(--spacing)*0)}.flex-1{flex:1}.flex-1\\!{flex:1!important}.flex-shrink-0{flex-shrink:0}.flex-shrink-0\\!{flex-shrink:0!important}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-0\\!{--tw-translate-x:calc(var(--spacing)*0)!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.translate-x-full\\!{--tw-translate-x:100%!important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.-translate-y-1\\/2\\!{--tw-translate-y: -50% !important;translate:var(--tw-translate-x)var(--tw-translate-y)!important}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.animate-spin{animation:var(--animate-spin)}.animate-spin\\!{animation:var(--animate-spin)!important}.cursor-pointer{cursor:pointer}.cursor-pointer\\!{cursor:pointer!important}.resize{resize:both}.appearance-none{appearance:none}.appearance-none\\!{appearance:none!important}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-2\\!{grid-template-columns:repeat(2,minmax(0,1fr))!important}.flex-col{flex-direction:column}.flex-col\\!{flex-direction:column!important}.items-center{align-items:center}.items-center\\!{align-items:center!important}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-between\\!{justify-content:space-between!important}.justify-center{justify-content:center}.justify-center\\!{justify-content:center!important}.gap-2{gap:calc(var(--spacing)*2)}.gap-2\\!{gap:calc(var(--spacing)*2)!important}.gap-3{gap:calc(var(--spacing)*3)}.gap-3\\!{gap:calc(var(--spacing)*3)!important}.gap-4{gap:calc(var(--spacing)*4)}.gap-4\\!{gap:calc(var(--spacing)*4)!important}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))!important}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4\\!>:not(:last-child)){--tw-space-y-reverse:0!important;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse))!important;margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))!important}.rounded{border-radius:.25rem}.rounded\\!{border-radius:.25rem!important}.rounded-full{border-radius:3.40282e38px}.rounded-full\\!{border-radius:3.40282e38px!important}.rounded-lg{border-radius:var(--radius-lg)}.rounded-lg\\!{border-radius:var(--radius-lg)!important}.rounded-md{border-radius:var(--radius-md)}.rounded-md\\!{border-radius:var(--radius-md)!important}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-2\\!{border-style:var(--tw-border-style)!important;border-width:2px!important}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t\\!{border-top-style:var(--tw-border-style)!important;border-top-width:1px!important}.border-b-2{border-bottom-style:var(--tw-border-style);border-bottom-width:2px}.border-b-2\\!{border-bottom-style:var(--tw-border-style)!important;border-bottom-width:2px!important}.border-l-4{border-left-style:var(--tw-border-style);border-left-width:4px}.border-l-4\\!{border-left-style:var(--tw-border-style)!important;border-left-width:4px!important}.border-none{--tw-border-style:none;border-style:none}.border-none\\!{--tw-border-style:none!important;border-style:none!important}.border-solid{--tw-border-style:solid;border-style:solid}.border-solid\\!{--tw-border-style:solid!important;border-style:solid!important}.border-\\[var\\(--button-primary-bg\\)\\]\\!{border-color:var(--button-primary-bg)!important}.border-black{border-color:var(--color-black)}.border-black\\/10{border-color:#0000001a}@supports (color:color-mix(in lab,red,red)){.border-black\\/10{border-color:color-mix(in oklab,var(--color-black)10%,transparent)}}.border-blue-500{border-color:var(--color-blue-500)}.border-blue-500\\!{border-color:var(--color-blue-500)!important}.border-gray-300{border-color:var(--color-gray-300)}.border-gray-300\\!{border-color:var(--color-gray-300)!important}.border-green-200{border-color:var(--color-green-200)}.border-green-200\\!{border-color:var(--color-green-200)!important}.border-red-200{border-color:var(--color-red-200)}.border-red-200\\!{border-color:var(--color-red-200)!important}.border-yellow-200{border-color:var(--color-yellow-200)}.border-yellow-200\\!{border-color:var(--color-yellow-200)!important}.border-t-\\[\\#2b6fd6\\]{border-top-color:#2b6fd6}.border-l-cyan-500{border-left-color:var(--color-cyan-500)}.border-l-cyan-500\\!{border-left-color:var(--color-cyan-500)!important}.bg-\\[\\#0000004f\\]\\!{background-color:#0000004f!important}.bg-\\[var\\(--button-primary-bg\\)\\]\\!{background-color:var(--button-primary-bg)!important}.bg-blue-600{background-color:var(--color-blue-600)}.bg-blue-600\\!{background-color:var(--color-blue-600)!important}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-cyan-50\\!{background-color:var(--color-cyan-50)!important}.bg-cyan-100{background-color:var(--color-cyan-100)}.bg-cyan-100\\!{background-color:var(--color-cyan-100)!important}.bg-green-50{background-color:var(--color-green-50)}.bg-green-50\\!{background-color:var(--color-green-50)!important}.bg-green-100{background-color:var(--color-green-100)}.bg-green-100\\!{background-color:var(--color-green-100)!important}.bg-green-600{background-color:var(--color-green-600)}.bg-green-600\\!{background-color:var(--color-green-600)!important}.bg-red-50{background-color:var(--color-red-50)}.bg-red-50\\!{background-color:var(--color-red-50)!important}.bg-red-100{background-color:var(--color-red-100)}.bg-red-100\\!{background-color:var(--color-red-100)!important}.bg-red-600{background-color:var(--color-red-600)}.bg-red-600\\!{background-color:var(--color-red-600)!important}.bg-transparent{background-color:#0000}.bg-transparent\\!{background-color:#0000!important}.bg-white{background-color:var(--color-white)}.bg-white\\!{background-color:var(--color-white)!important}.bg-yellow-50{background-color:var(--color-yellow-50)}.bg-yellow-50\\!{background-color:var(--color-yellow-50)!important}.bg-yellow-100{background-color:var(--color-yellow-100)}.bg-yellow-100\\!{background-color:var(--color-yellow-100)!important}.bg-yellow-500{background-color:var(--color-yellow-500)}.bg-yellow-500\\!{background-color:var(--color-yellow-500)!important}.p-0{padding:calc(var(--spacing)*0)}.p-0\\!{padding:calc(var(--spacing)*0)!important}.p-4{padding:calc(var(--spacing)*4)}.p-4\\!{padding:calc(var(--spacing)*4)!important}.p-8{padding:calc(var(--spacing)*8)}.p-8\\!{padding:calc(var(--spacing)*8)!important}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\!{padding-inline:calc(var(--spacing)*2)!important}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-4\\!{padding-inline:calc(var(--spacing)*4)!important}.px-6{padding-inline:calc(var(--spacing)*6)}.px-6\\!{padding-inline:calc(var(--spacing)*6)!important}.py-2{padding-block:calc(var(--spacing)*2)}.py-2\\.5{padding-block:calc(var(--spacing)*2.5)}.py-2\\.5\\!{padding-block:calc(var(--spacing)*2.5)!important}.py-3{padding-block:calc(var(--spacing)*3)}.py-3\\!{padding-block:calc(var(--spacing)*3)!important}.pr-11{padding-right:calc(var(--spacing)*11)}.pr-11\\!{padding-right:calc(var(--spacing)*11)!important}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-3\\!{padding-left:calc(var(--spacing)*3)!important}.text-center{text-align:center}.text-center\\!{text-align:center!important}.text-left{text-align:left}.text-left\\!{text-align:left!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-2xl\\!{font-size:var(--text-2xl)!important;line-height:var(--tw-leading,var(--text-2xl--line-height))!important}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-base\\!{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-sm\\!{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-xs\\!{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-\\[13px\\]{font-size:13px}.text-\\[13px\\]\\!{font-size:13px!important}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-bold\\!{--tw-font-weight:var(--font-weight-bold)!important;font-weight:var(--font-weight-bold)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-medium\\!{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.font-semibold\\!{--tw-font-weight:var(--font-weight-semibold)!important;font-weight:var(--font-weight-semibold)!important}.whitespace-nowrap{white-space:nowrap}.whitespace-nowrap\\!{white-space:nowrap!important}.text-\\[\\#d64545\\]{color:#d64545}.text-\\[var\\(--button-link-text\\)\\]\\!{color:var(--button-link-text)!important}.text-\\[var\\(--button-primary-bg\\)\\]\\!{color:var(--button-primary-bg)!important}.text-\\[var\\(--button-primary-text\\)\\]\\!{color:var(--button-primary-text)!important}.text-blue-100{color:var(--color-blue-100)}.text-blue-100\\!{color:var(--color-blue-100)!important}.text-cyan-600{color:var(--color-cyan-600)}.text-cyan-600\\!{color:var(--color-cyan-600)!important}.text-gray-400{color:var(--color-gray-400)}.text-gray-400\\!{color:var(--color-gray-400)!important}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\!{color:var(--color-gray-500)!important}.text-gray-600{color:var(--color-gray-600)}.text-gray-600\\!{color:var(--color-gray-600)!important}.text-gray-700{color:var(--color-gray-700)}.text-gray-700\\!{color:var(--color-gray-700)!important}.text-gray-800{color:var(--color-gray-800)}.text-gray-800\\!{color:var(--color-gray-800)!important}.text-gray-900{color:var(--color-gray-900)}.text-gray-900\\!{color:var(--color-gray-900)!important}.text-green-100{color:var(--color-green-100)}.text-green-100\\!{color:var(--color-green-100)!important}.text-green-600{color:var(--color-green-600)}.text-green-600\\!{color:var(--color-green-600)!important}.text-green-700{color:var(--color-green-700)}.text-green-700\\!{color:var(--color-green-700)!important}.text-green-800{color:var(--color-green-800)}.text-green-800\\!{color:var(--color-green-800)!important}.text-red-100{color:var(--color-red-100)}.text-red-100\\!{color:var(--color-red-100)!important}.text-red-500{color:var(--color-red-500)}.text-red-600{color:var(--color-red-600)}.text-red-600\\!{color:var(--color-red-600)!important}.text-red-700{color:var(--color-red-700)}.text-red-700\\!{color:var(--color-red-700)!important}.text-red-800{color:var(--color-red-800)}.text-red-800\\!{color:var(--color-red-800)!important}.text-white{color:var(--color-white)}.text-white\\!{color:var(--color-white)!important}.text-yellow-100{color:var(--color-yellow-100)}.text-yellow-100\\!{color:var(--color-yellow-100)!important}.text-yellow-600{color:var(--color-yellow-600)}.text-yellow-600\\!{color:var(--color-yellow-600)!important}.text-yellow-700{color:var(--color-yellow-700)}.text-yellow-700\\!{color:var(--color-yellow-700)!important}.text-yellow-800{color:var(--color-yellow-800)}.text-yellow-800\\!{color:var(--color-yellow-800)!important}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.no-underline{text-decoration-line:none}.no-underline\\!{text-decoration-line:none!important}.underline{text-decoration-line:underline}.underline\\!{text-decoration-line:underline!important}.accent-\\[var\\(--button-primary-bg\\)\\]\\!{accent-color:var(--button-primary-bg)!important}.opacity-0{opacity:0}.opacity-0\\!{opacity:0!important}.opacity-25{opacity:.25}.opacity-25\\!{opacity:.25!important}.opacity-50{opacity:.5}.opacity-75{opacity:.75}.opacity-75\\!{opacity:.75!important}.opacity-100{opacity:1}.opacity-100\\!{opacity:1!important}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg\\!{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-md\\!{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-none\\!{--tw-shadow:0 0 #0000!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all\\!{transition-property:all!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors\\!{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity\\!{transition-property:opacity!important;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))!important;transition-duration:var(--tw-duration,var(--default-transition-duration))!important}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-300{--tw-duration:.3s;transition-duration:.3s}.duration-300\\!{--tw-duration:.3s!important;transition-duration:.3s!important}.outline-none{--tw-outline-style:none;outline-style:none}.outline-none\\!{--tw-outline-style:none!important;outline-style:none!important}@media(hover:hover){.hover\\:bg-\\[var\\(--button-primary-bg-hover\\)\\]\\!:hover{background-color:var(--button-primary-bg-hover)!important}.hover\\:bg-gray-50\\!:hover{background-color:var(--color-gray-50)!important}.hover\\:text-\\[var\\(--button-link-text\\)\\]\\!:hover{color:var(--button-link-text)!important}.hover\\:text-cyan-700\\!:hover{color:var(--color-cyan-700)!important}.hover\\:text-gray-600\\!:hover{color:var(--color-gray-600)!important}.hover\\:text-gray-700:hover{color:var(--color-gray-700)}.hover\\:text-green-800\\!:hover{color:var(--color-green-800)!important}.hover\\:text-red-800\\!:hover{color:var(--color-red-800)!important}.hover\\:text-yellow-800\\!:hover{color:var(--color-yellow-800)!important}.hover\\:opacity-75\\!:hover{opacity:.75!important}}.focus\\:border-blue-500:focus{border-color:var(--color-blue-500)}.focus\\:shadow-\\[0_0_0_3px_rgba\\(59\\,130\\,246\\,0\\.08\\)\\]\\!:focus{--tw-shadow:0 0 0 3px var(--tw-shadow-color,#3b82f614)!important;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)!important}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-blue-200:focus{--tw-ring-color:var(--color-blue-200)}.focus\\:outline-none\\!:focus{--tw-outline-style:none!important;outline-style:none!important}.active\\:scale-\\[0\\.98\\]\\!:active{scale:.98!important}.enabled\\:bg-\\[var\\(--button-primary-bg\\)\\]\\!:enabled{background-color:var(--button-primary-bg)!important}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:cursor-not-allowed\\!:disabled{cursor:not-allowed!important}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-70\\!:disabled{opacity:.7!important}@media(min-width:48rem){.md\\:w-1\\/2{width:50%}}@media(min-width:64rem){.lg\\:w-1\\/3{width:33.3333%}}@media(min-width:80rem){.xl\\:w-1\\/4{width:25%}}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@keyframes spin{to{transform:rotate(360deg)}}:root,:host{--button-primary-bg: var(--color-primary);--button-primary-bg-hover: var(--color-primary-light);--button-primary-text: var(--color-neutral-lightest);--button-border-radius: var(--radius-lg);--button-padding-y: .75rem;--button-padding-x: 1.5rem;--button-link-text: var(--color-neutral-dark);--input-border-color: var(--color-border);--input-border-focus: var(--color-border-focus);--input-bg: var(--color-bg-primary);--input-text: var(--color-text);--input-placeholder: var(--color-neutral-light);--input-border-radius: var(--radius-md);--banner-error-bg: var(--color-error-bg);--banner-error-border: var(--color-error-border);--banner-error-text: var(--color-error);--banner-success-bg: var(--color-success-bg);--banner-success-border: var(--color-success-border);--banner-success-text: var(--color-success);--banner-warning-bg: var(--color-warning-bg);--banner-warning-border: var(--color-warning-border);--banner-warning-text: var(--color-warning);--banner-info-bg: var(--color-info-bg);--banner-info-border: var(--color-info-border);--banner-info-text: var(--color-info)}\n";
  
  // Export for shadow DOM usage
  if (typeof window !== 'undefined') {
    window.__widgetStyles = window.__widgetStyles || {};
    window.__widgetStyles['widget'] = cssContent;
  }
  
  // DO NOT inject into document head - this would pollute global scope
  // Shadow DOM provides complete style isolation
})();var rs = { exports: {} }, Ja = {};
var Gm;
function X1() {
  if (Gm) return Ja;
  Gm = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(s, o, d) {
    var m = null;
    if (d !== void 0 && (m = "" + d), o.key !== void 0 && (m = "" + o.key), "key" in o) {
      d = {};
      for (var g in o)
        g !== "key" && (d[g] = o[g]);
    } else d = o;
    return o = d.ref, {
      $$typeof: u,
      type: s,
      key: m,
      ref: o !== void 0 ? o : null,
      props: d
    };
  }
  return Ja.Fragment = r, Ja.jsx = c, Ja.jsxs = c, Ja;
}
var Vm;
function G1() {
  return Vm || (Vm = 1, rs.exports = X1()), rs.exports;
}
var x = G1(), cs = { exports: {} }, ue = {}, Qm;
function V1() {
  if (Qm) return ue;
  Qm = 1;
  var u = {};
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), N = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
  function _(S) {
    return S === null || typeof S != "object" ? null : (S = Y && S[Y] || S["@@iterator"], typeof S == "function" ? S : null);
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
  }, D = Object.assign, V = {};
  function Q(S, H, Z) {
    this.props = S, this.context = H, this.refs = V, this.updater = Z || U;
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
  function K() {
  }
  K.prototype = Q.prototype;
  function te(S, H, Z) {
    this.props = S, this.context = H, this.refs = V, this.updater = Z || U;
  }
  var W = te.prototype = new K();
  W.constructor = te, D(W, Q.prototype), W.isPureReactComponent = !0;
  var ne = Array.isArray;
  function ae() {
  }
  var F = { H: null, A: null, T: null, S: null }, Se = Object.prototype.hasOwnProperty;
  function xe(S, H, Z) {
    var J = Z.ref;
    return {
      $$typeof: r,
      type: S,
      key: H,
      ref: J !== void 0 ? J : null,
      props: Z
    };
  }
  function lt(S, H) {
    return xe(S.type, H, S.props);
  }
  function pe(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }
  function Le(S) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(Z) {
      return H[Z];
    });
  }
  var je = /\/+/g;
  function Je(S, H) {
    return typeof S == "object" && S !== null && S.key != null ? Le("" + S.key) : H.toString(36);
  }
  function X(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(ae, ae) : (S.status = "pending", S.then(
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
  function q(S, H, Z, J, oe) {
    var fe = typeof S;
    (fe === "undefined" || fe === "boolean") && (S = null);
    var P = !1;
    if (S === null) P = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case r:
            case c:
              P = !0;
              break;
            case R:
              return P = S._init, q(
                P(S._payload),
                H,
                Z,
                J,
                oe
              );
          }
      }
    if (P)
      return oe = oe(S), P = J === "" ? "." + Je(S, 0) : J, ne(oe) ? (Z = "", P != null && (Z = P.replace(je, "$&/") + "/"), q(oe, H, Z, "", function(Ht) {
        return Ht;
      })) : oe != null && (pe(oe) && (oe = lt(
        oe,
        Z + (oe.key == null || S && S.key === oe.key ? "" : ("" + oe.key).replace(
          je,
          "$&/"
        ) + "/") + P
      )), H.push(oe)), 1;
    P = 0;
    var ze = J === "" ? "." : J + ":";
    if (ne(S))
      for (var Be = 0; Be < S.length; Be++)
        J = S[Be], fe = ze + Je(J, Be), P += q(
          J,
          H,
          Z,
          fe,
          oe
        );
    else if (Be = _(S), typeof Be == "function")
      for (S = Be.call(S), Be = 0; !(J = S.next()).done; )
        J = J.value, fe = ze + Je(J, Be++), P += q(
          J,
          H,
          Z,
          fe,
          oe
        );
    else if (fe === "object") {
      if (typeof S.then == "function")
        return q(
          X(S),
          H,
          Z,
          J,
          oe
        );
      throw H = String(S), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return P;
  }
  function G(S, H, Z) {
    if (S == null) return S;
    var J = [], oe = 0;
    return q(S, J, "", "", function(fe) {
      return H.call(Z, fe, oe++);
    }), J;
  }
  function I(S) {
    if (S._status === -1) {
      var H = S._result;
      H = H(), H.then(
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = Z);
        },
        function(Z) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = Z);
        }
      ), S._status === -1 && (S._status = 0, S._result = H);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var se = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof u == "object" && typeof u.emit == "function") {
      u.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ae = {
    map: G,
    forEach: function(S, H, Z) {
      G(
        S,
        function() {
          H.apply(this, arguments);
        },
        Z
      );
    },
    count: function(S) {
      var H = 0;
      return G(S, function() {
        H++;
      }), H;
    },
    toArray: function(S) {
      return G(S, function(H) {
        return H;
      }) || [];
    },
    only: function(S) {
      if (!pe(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return ue.Activity = N, ue.Children = Ae, ue.Component = Q, ue.Fragment = s, ue.Profiler = d, ue.PureComponent = te, ue.StrictMode = o, ue.Suspense = y, ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, ue.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return F.H.useMemoCache(S);
    }
  }, ue.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, ue.cacheSignal = function() {
    return null;
  }, ue.cloneElement = function(S, H, Z) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var J = D({}, S.props), oe = S.key;
    if (H != null)
      for (fe in H.key !== void 0 && (oe = "" + H.key), H)
        !Se.call(H, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && H.ref === void 0 || (J[fe] = H[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) J.children = Z;
    else if (1 < fe) {
      for (var P = Array(fe), ze = 0; ze < fe; ze++)
        P[ze] = arguments[ze + 2];
      J.children = P;
    }
    return xe(S.type, oe, J);
  }, ue.createContext = function(S) {
    return S = {
      $$typeof: g,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: m,
      _context: S
    }, S;
  }, ue.createElement = function(S, H, Z) {
    var J, oe = {}, fe = null;
    if (H != null)
      for (J in H.key !== void 0 && (fe = "" + H.key), H)
        Se.call(H, J) && J !== "key" && J !== "__self" && J !== "__source" && (oe[J] = H[J]);
    var P = arguments.length - 2;
    if (P === 1) oe.children = Z;
    else if (1 < P) {
      for (var ze = Array(P), Be = 0; Be < P; Be++)
        ze[Be] = arguments[Be + 2];
      oe.children = ze;
    }
    if (S && S.defaultProps)
      for (J in P = S.defaultProps, P)
        oe[J] === void 0 && (oe[J] = P[J]);
    return xe(S, fe, oe);
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(S) {
    return { $$typeof: p, render: S };
  }, ue.isValidElement = pe, ue.lazy = function(S) {
    return {
      $$typeof: R,
      _payload: { _status: -1, _result: S },
      _init: I
    };
  }, ue.memo = function(S, H) {
    return {
      $$typeof: b,
      type: S,
      compare: H === void 0 ? null : H
    };
  }, ue.startTransition = function(S) {
    var H = F.T, Z = {};
    F.T = Z;
    try {
      var J = S(), oe = F.S;
      oe !== null && oe(Z, J), typeof J == "object" && J !== null && typeof J.then == "function" && J.then(ae, se);
    } catch (fe) {
      se(fe);
    } finally {
      H !== null && Z.types !== null && (H.types = Z.types), F.T = H;
    }
  }, ue.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, ue.use = function(S) {
    return F.H.use(S);
  }, ue.useActionState = function(S, H, Z) {
    return F.H.useActionState(S, H, Z);
  }, ue.useCallback = function(S, H) {
    return F.H.useCallback(S, H);
  }, ue.useContext = function(S) {
    return F.H.useContext(S);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(S, H) {
    return F.H.useDeferredValue(S, H);
  }, ue.useEffect = function(S, H) {
    return F.H.useEffect(S, H);
  }, ue.useEffectEvent = function(S) {
    return F.H.useEffectEvent(S);
  }, ue.useId = function() {
    return F.H.useId();
  }, ue.useImperativeHandle = function(S, H, Z) {
    return F.H.useImperativeHandle(S, H, Z);
  }, ue.useInsertionEffect = function(S, H) {
    return F.H.useInsertionEffect(S, H);
  }, ue.useLayoutEffect = function(S, H) {
    return F.H.useLayoutEffect(S, H);
  }, ue.useMemo = function(S, H) {
    return F.H.useMemo(S, H);
  }, ue.useOptimistic = function(S, H) {
    return F.H.useOptimistic(S, H);
  }, ue.useReducer = function(S, H, Z) {
    return F.H.useReducer(S, H, Z);
  }, ue.useRef = function(S) {
    return F.H.useRef(S);
  }, ue.useState = function(S) {
    return F.H.useState(S);
  }, ue.useSyncExternalStore = function(S, H, Z) {
    return F.H.useSyncExternalStore(
      S,
      H,
      Z
    );
  }, ue.useTransition = function() {
    return F.H.useTransition();
  }, ue.version = "19.2.3", ue;
}
var Zm;
function Cs() {
  return Zm || (Zm = 1, cs.exports = V1()), cs.exports;
}
var A = Cs();
var km = "popstate";
function Q1(u = {}) {
  function r(s, o) {
    let { pathname: d, search: m, hash: g } = s.location;
    return Es(
      "",
      { pathname: d, search: m, hash: g },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function c(s, o) {
    return typeof o == "string" ? o : Pa(o);
  }
  return k1(
    r,
    c,
    null,
    u
  );
}
function He(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function Xt(u, r) {
  if (!u) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Z1() {
  return Math.random().toString(36).substring(2, 10);
}
function Km(u, r) {
  return {
    usr: u.state,
    key: u.key,
    idx: r
  };
}
function Es(u, r, c = null, s) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? In(r) : r,
    state: c,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || s || Z1()
  };
}
function Pa({
  pathname: u = "/",
  search: r = "",
  hash: c = ""
}) {
  return r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r), c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c), u;
}
function In(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && (r.hash = u.substring(c), u = u.substring(0, c));
    let s = u.indexOf("?");
    s >= 0 && (r.search = u.substring(s), u = u.substring(0, s)), u && (r.pathname = u);
  }
  return r;
}
function k1(u, r, c, s = {}) {
  let { window: o = document.defaultView, v5Compat: d = !1 } = s, m = o.history, g = "POP", p = null, y = b();
  y == null && (y = 0, m.replaceState({ ...m.state, idx: y }, ""));
  function b() {
    return (m.state || { idx: null }).idx;
  }
  function R() {
    g = "POP";
    let D = b(), V = D == null ? null : D - y;
    y = D, p && p({ action: g, location: U.location, delta: V });
  }
  function N(D, V) {
    g = "PUSH";
    let Q = Es(U.location, D, V);
    y = b() + 1;
    let K = Km(Q, y), te = U.createHref(Q);
    try {
      m.pushState(K, "", te);
    } catch (W) {
      if (W instanceof DOMException && W.name === "DataCloneError")
        throw W;
      o.location.assign(te);
    }
    d && p && p({ action: g, location: U.location, delta: 1 });
  }
  function Y(D, V) {
    g = "REPLACE";
    let Q = Es(U.location, D, V);
    y = b();
    let K = Km(Q, y), te = U.createHref(Q);
    m.replaceState(K, "", te), d && p && p({ action: g, location: U.location, delta: 0 });
  }
  function _(D) {
    return K1(D);
  }
  let U = {
    get action() {
      return g;
    },
    get location() {
      return u(o, m);
    },
    listen(D) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(km, R), p = D, () => {
        o.removeEventListener(km, R), p = null;
      };
    },
    createHref(D) {
      return r(o, D);
    },
    createURL: _,
    encodeLocation(D) {
      let V = _(D);
      return {
        pathname: V.pathname,
        search: V.search,
        hash: V.hash
      };
    },
    push: N,
    replace: Y,
    go(D) {
      return m.go(D);
    }
  };
  return U;
}
function K1(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" && (c = window.location.origin !== "null" ? window.location.origin : window.location.href), He(c, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : Pa(u);
  return s = s.replace(/ $/, "%20"), !r && s.startsWith("//") && (s = c + s), new URL(s, c);
}
function Th(u, r, c = "/") {
  return J1(u, r, c, !1);
}
function J1(u, r, c, s) {
  let o = typeof r == "string" ? In(r) : r, d = yl(o.pathname || "/", c);
  if (d == null)
    return null;
  let m = Ah(u);
  $1(m);
  let g = null;
  for (let p = 0; g == null && p < m.length; ++p) {
    let y = ig(d);
    g = ag(
      m[p],
      y,
      s
    );
  }
  return g;
}
function Ah(u, r = [], c = [], s = "", o = !1) {
  let d = (m, g, p = o, y) => {
    let b = {
      relativePath: y === void 0 ? m.path || "" : y,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: g,
      route: m
    };
    if (b.relativePath.startsWith("/")) {
      if (!b.relativePath.startsWith(s) && p)
        return;
      He(
        b.relativePath.startsWith(s),
        `Absolute route path "${b.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), b.relativePath = b.relativePath.slice(s.length);
    }
    let R = hl([s, b.relativePath]), N = c.concat(b);
    m.children && m.children.length > 0 && (He(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      m.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${R}".`
    ), Ah(
      m.children,
      r,
      N,
      R,
      p
    )), !(m.path == null && !m.index) && r.push({
      path: R,
      score: lg(R, m.index),
      routesMeta: N
    });
  };
  return u.forEach((m, g) => {
    if (m.path === "" || !m.path?.includes("?"))
      d(m, g);
    else
      for (let p of wh(m.path))
        d(m, g, !0, p);
  }), r;
}
function wh(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...s] = r, o = c.endsWith("?"), d = c.replace(/\?$/, "");
  if (s.length === 0)
    return o ? [d, ""] : [d];
  let m = wh(s.join("/")), g = [];
  return g.push(
    ...m.map(
      (p) => p === "" ? d : [d, p].join("/")
    )
  ), o && g.push(...m), g.map(
    (p) => u.startsWith("/") && p === "" ? "/" : p
  );
}
function $1(u) {
  u.sort(
    (r, c) => r.score !== c.score ? c.score - r.score : ng(
      r.routesMeta.map((s) => s.childrenIndex),
      c.routesMeta.map((s) => s.childrenIndex)
    )
  );
}
var W1 = /^:[\w-]+$/, F1 = 3, I1 = 2, P1 = 1, eg = 10, tg = -2, Jm = (u) => u === "*";
function lg(u, r) {
  let c = u.split("/"), s = c.length;
  return c.some(Jm) && (s += tg), r && (s += I1), c.filter((o) => !Jm(o)).reduce(
    (o, d) => o + (W1.test(d) ? F1 : d === "" ? P1 : eg),
    s
  );
}
function ng(u, r) {
  return u.length === r.length && u.slice(0, -1).every((s, o) => s === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    u[u.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ag(u, r, c = !1) {
  let { routesMeta: s } = u, o = {}, d = "/", m = [];
  for (let g = 0; g < s.length; ++g) {
    let p = s[g], y = g === s.length - 1, b = d === "/" ? r : r.slice(d.length) || "/", R = Di(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: y },
      b
    ), N = p.route;
    if (!R && y && c && !s[s.length - 1].route.index && (R = Di(
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
      pathname: hl([d, R.pathname]),
      pathnameBase: og(
        hl([d, R.pathnameBase])
      ),
      route: N
    }), R.pathnameBase !== "/" && (d = hl([d, R.pathnameBase]));
  }
  return m;
}
function Di(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, s] = ug(
    u.path,
    u.caseSensitive,
    u.end
  ), o = r.match(c);
  if (!o) return null;
  let d = o[0], m = d.replace(/(.)\/+$/, "$1"), g = o.slice(1);
  return {
    params: s.reduce(
      (y, { paramName: b, isOptional: R }, N) => {
        if (b === "*") {
          let _ = g[N] || "";
          m = d.slice(0, d.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const Y = g[N];
        return R && !Y ? y[b] = void 0 : y[b] = (Y || "").replace(/%2F/g, "/"), y;
      },
      {}
    ),
    pathname: d,
    pathnameBase: m,
    pattern: u
  };
}
function ug(u, r = !1, c = !0) {
  Xt(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(/\*$/, "/*")}".`
  );
  let s = [], o = "^" + u.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (m, g, p) => (s.push({ paramName: g, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return u.endsWith("*") ? (s.push({ paramName: "*" }), o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), s];
}
function ig(u) {
  try {
    return u.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Xt(
      !1,
      `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), u;
  }
}
function yl(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length, s = u.charAt(c);
  return s && s !== "/" ? null : u.slice(c) || "/";
}
var Ch = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, rg = (u) => Ch.test(u);
function cg(u, r = "/") {
  let {
    pathname: c,
    search: s = "",
    hash: o = ""
  } = typeof u == "string" ? In(u) : u, d;
  if (c)
    if (rg(c))
      d = c;
    else {
      if (c.includes("//")) {
        let m = c;
        c = c.replace(/\/\/+/g, "/"), Xt(
          !1,
          `Pathnames cannot have embedded double slashes - normalizing ${m} -> ${c}`
        );
      }
      c.startsWith("/") ? d = $m(c.substring(1), "/") : d = $m(c, r);
    }
  else
    d = r;
  return {
    pathname: d,
    search: fg(s),
    hash: dg(o)
  };
}
function $m(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return u.split("/").forEach((o) => {
    o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
  }), c.length > 1 ? c.join("/") : "/";
}
function ss(u, r, c, s) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function sg(u) {
  return u.filter(
    (r, c) => c === 0 || r.route.path && r.route.path.length > 0
  );
}
function _h(u) {
  let r = sg(u);
  return r.map(
    (c, s) => s === r.length - 1 ? c.pathname : c.pathnameBase
  );
}
function Oh(u, r, c, s = !1) {
  let o;
  typeof u == "string" ? o = In(u) : (o = { ...u }, He(
    !o.pathname || !o.pathname.includes("?"),
    ss("?", "pathname", "search", o)
  ), He(
    !o.pathname || !o.pathname.includes("#"),
    ss("#", "pathname", "hash", o)
  ), He(
    !o.search || !o.search.includes("#"),
    ss("#", "search", "hash", o)
  ));
  let d = u === "" || o.pathname === "", m = d ? "/" : o.pathname, g;
  if (m == null)
    g = c;
  else {
    let R = r.length - 1;
    if (!s && m.startsWith("..")) {
      let N = m.split("/");
      for (; N[0] === ".."; )
        N.shift(), R -= 1;
      o.pathname = N.join("/");
    }
    g = R >= 0 ? r[R] : "/";
  }
  let p = cg(o, g), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && c.endsWith("/");
  return !p.pathname.endsWith("/") && (y || b) && (p.pathname += "/"), p;
}
var hl = (u) => u.join("/").replace(/\/\/+/g, "/"), og = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"), fg = (u) => !u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u, dg = (u) => !u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u, mg = class {
  constructor(u, r, c, s = !1) {
    this.status = u, this.statusText = r || "", this.internal = s, c instanceof Error ? (this.data = c.toString(), this.error = c) : this.data = c;
  }
};
function hg(u) {
  return u != null && typeof u.status == "number" && typeof u.statusText == "string" && typeof u.internal == "boolean" && "data" in u;
}
function yg(u) {
  return u.map((r) => r.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/";
}
var zh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Nh(u, r) {
  let c = u;
  if (typeof c != "string" || !Ch.test(c))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: c
    };
  let s = c, o = !1;
  if (zh)
    try {
      let d = new URL(window.location.href), m = c.startsWith("//") ? new URL(d.protocol + c) : new URL(c), g = yl(m.pathname, r);
      m.origin === d.origin && g != null ? c = g + m.search + m.hash : o = !0;
    } catch {
      Xt(
        !1,
        `<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: s,
    isExternal: o,
    to: c
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Mh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Mh
);
var gg = [
  "GET",
  ...Mh
];
new Set(gg);
var Pn = A.createContext(null);
Pn.displayName = "DataRouter";
var Bi = A.createContext(null);
Bi.displayName = "DataRouterState";
var pg = A.createContext(!1), Dh = A.createContext({
  isTransitioning: !1
});
Dh.displayName = "ViewTransition";
var vg = A.createContext(
  /* @__PURE__ */ new Map()
);
vg.displayName = "Fetchers";
var bg = A.createContext(null);
bg.displayName = "Await";
var Bt = A.createContext(
  null
);
Bt.displayName = "Navigation";
var eu = A.createContext(
  null
);
eu.displayName = "Location";
var gl = A.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
gl.displayName = "Route";
var _s = A.createContext(null);
_s.displayName = "RouteError";
var Uh = "REACT_ROUTER_ERROR", Sg = "REDIRECT", Eg = "ROUTE_ERROR_RESPONSE";
function xg(u) {
  if (u.startsWith(`${Uh}:${Sg}:{`))
    try {
      let r = JSON.parse(u.slice(28));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.location == "string" && typeof r.reloadDocument == "boolean" && typeof r.replace == "boolean")
        return r;
    } catch {
    }
}
function Rg(u) {
  if (u.startsWith(
    `${Uh}:${Eg}:{`
  ))
    try {
      let r = JSON.parse(u.slice(40));
      if (typeof r == "object" && r && typeof r.status == "number" && typeof r.statusText == "string")
        return new mg(
          r.status,
          r.statusText,
          r.data
        );
    } catch {
    }
}
function Tg(u, { relative: r } = {}) {
  He(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: s } = A.useContext(Bt), { hash: o, pathname: d, search: m } = lu(u, { relative: r }), g = d;
  return c !== "/" && (g = d === "/" ? c : hl([c, d])), s.createHref({ pathname: g, search: m, hash: o });
}
function tu() {
  return A.useContext(eu) != null;
}
function dn() {
  return He(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), A.useContext(eu).location;
}
var jh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Bh(u) {
  A.useContext(Bt).static || A.useLayoutEffect(u);
}
function Ag() {
  let { isDataRoute: u } = A.useContext(gl);
  return u ? Lg() : wg();
}
function wg() {
  He(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext(Pn), { basename: r, navigator: c } = A.useContext(Bt), { matches: s } = A.useContext(gl), { pathname: o } = dn(), d = JSON.stringify(_h(s)), m = A.useRef(!1);
  return Bh(() => {
    m.current = !0;
  }), A.useCallback(
    (p, y = {}) => {
      if (Xt(m.current, jh), !m.current) return;
      if (typeof p == "number") {
        c.go(p);
        return;
      }
      let b = Oh(
        p,
        JSON.parse(d),
        o,
        y.relative === "path"
      );
      u == null && r !== "/" && (b.pathname = b.pathname === "/" ? r : hl([r, b.pathname])), (y.replace ? c.replace : c.push)(
        b,
        y.state,
        y
      );
    },
    [
      r,
      c,
      d,
      o,
      u
    ]
  );
}
A.createContext(null);
function lu(u, { relative: r } = {}) {
  let { matches: c } = A.useContext(gl), { pathname: s } = dn(), o = JSON.stringify(_h(c));
  return A.useMemo(
    () => Oh(
      u,
      JSON.parse(o),
      s,
      r === "path"
    ),
    [u, o, s, r]
  );
}
function Cg(u, r) {
  return Hh(u, r);
}
function Hh(u, r, c, s, o) {
  He(
    tu(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: d } = A.useContext(Bt), { matches: m } = A.useContext(gl), g = m[m.length - 1], p = g ? g.params : {}, y = g ? g.pathname : "/", b = g ? g.pathnameBase : "/", R = g && g.route;
  {
    let Q = R && R.path || "";
    qh(
      y,
      !R || Q.endsWith("*") || Q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q === "/" ? "*" : `${Q}/*`}">.`
    );
  }
  let N = dn(), Y;
  if (r) {
    let Q = typeof r == "string" ? In(r) : r;
    He(
      b === "/" || Q.pathname?.startsWith(b),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${b}" but pathname "${Q.pathname}" was given in the \`location\` prop.`
    ), Y = Q;
  } else
    Y = N;
  let _ = Y.pathname || "/", U = _;
  if (b !== "/") {
    let Q = b.replace(/^\//, "").split("/");
    U = "/" + _.replace(/^\//, "").split("/").slice(Q.length).join("/");
  }
  let D = Th(u, { pathname: U });
  Xt(
    R || D != null,
    `No routes matched location "${Y.pathname}${Y.search}${Y.hash}" `
  ), Xt(
    D == null || D[D.length - 1].route.element !== void 0 || D[D.length - 1].route.Component !== void 0 || D[D.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${Y.pathname}${Y.search}${Y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let V = Mg(
    D && D.map(
      (Q) => Object.assign({}, Q, {
        params: Object.assign({}, p, Q.params),
        pathname: hl([
          b,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          d.encodeLocation ? d.encodeLocation(
            Q.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : Q.pathname
        ]),
        pathnameBase: Q.pathnameBase === "/" ? b : hl([
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
    m,
    c,
    s,
    o
  );
  return r && V ? /* @__PURE__ */ A.createElement(
    eu.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...Y
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    V
  ) : V;
}
function _g() {
  let u = Hg(), r = hg(u) ? `${u.status} ${u.statusText}` : u instanceof Error ? u.message : JSON.stringify(u), c = u instanceof Error ? u.stack : null, s = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: s }, d = { padding: "2px 4px", backgroundColor: s }, m = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    u
  ), m = /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ A.createElement("code", { style: d }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ A.createElement("code", { style: d }, "errorElement"), " prop on your route.")), /* @__PURE__ */ A.createElement(A.Fragment, null, /* @__PURE__ */ A.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ A.createElement("h3", { style: { fontStyle: "italic" } }, r), c ? /* @__PURE__ */ A.createElement("pre", { style: o }, c) : null, m);
}
var Og = /* @__PURE__ */ A.createElement(_g, null), Lh = class extends A.Component {
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
  static getDerivedStateFromProps(u, r) {
    return r.location !== u.location || r.revalidation !== "idle" && u.revalidation === "idle" ? {
      error: u.error,
      location: u.location,
      revalidation: u.revalidation
    } : {
      error: u.error !== void 0 ? u.error : r.error,
      location: r.location,
      revalidation: u.revalidation || r.revalidation
    };
  }
  componentDidCatch(u, r) {
    this.props.onError ? this.props.onError(u, r) : console.error(
      "React Router caught the following error during render",
      u
    );
  }
  render() {
    let u = this.state.error;
    if (this.context && typeof u == "object" && u && "digest" in u && typeof u.digest == "string") {
      const c = Rg(u.digest);
      c && (u = c);
    }
    let r = u !== void 0 ? /* @__PURE__ */ A.createElement(gl.Provider, { value: this.props.routeContext }, /* @__PURE__ */ A.createElement(
      _s.Provider,
      {
        value: u,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ A.createElement(zg, { error: u }, r) : r;
  }
};
Lh.contextType = pg;
var os = /* @__PURE__ */ new WeakMap();
function zg({
  children: u,
  error: r
}) {
  let { basename: c } = A.useContext(Bt);
  if (typeof r == "object" && r && "digest" in r && typeof r.digest == "string") {
    let s = xg(r.digest);
    if (s) {
      let o = os.get(r);
      if (o) throw o;
      let d = Nh(s.location, c);
      if (zh && !os.get(r))
        if (d.isExternal || s.reloadDocument)
          window.location.href = d.absoluteURL || d.to;
        else {
          const m = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(d.to, {
              replace: s.replace
            })
          );
          throw os.set(r, m), m;
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
  return u;
}
function Ng({ routeContext: u, match: r, children: c }) {
  let s = A.useContext(Pn);
  return s && s.static && s.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ A.createElement(gl.Provider, { value: u }, c);
}
function Mg(u, r = [], c = null, s = null, o = null) {
  if (u == null) {
    if (!c)
      return null;
    if (c.errors)
      u = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0)
      u = c.matches;
    else
      return null;
  }
  let d = u, m = c?.errors;
  if (m != null) {
    let b = d.findIndex(
      (R) => R.route.id && m?.[R.route.id] !== void 0
    );
    He(
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
  if (c)
    for (let b = 0; b < d.length; b++) {
      let R = d[b];
      if ((R.route.HydrateFallback || R.route.hydrateFallbackElement) && (p = b), R.route.id) {
        let { loaderData: N, errors: Y } = c, _ = R.route.loader && !N.hasOwnProperty(R.route.id) && (!Y || Y[R.route.id] === void 0);
        if (R.route.lazy || _) {
          g = !0, p >= 0 ? d = d.slice(0, p + 1) : d = [d[0]];
          break;
        }
      }
    }
  let y = c && s ? (b, R) => {
    s(b, {
      location: c.location,
      params: c.matches?.[0]?.params ?? {},
      unstable_pattern: yg(c.matches),
      errorInfo: R
    });
  } : void 0;
  return d.reduceRight(
    (b, R, N) => {
      let Y, _ = !1, U = null, D = null;
      c && (Y = m && R.route.id ? m[R.route.id] : void 0, U = R.route.errorElement || Og, g && (p < 0 && N === 0 ? (qh(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), _ = !0, D = null) : p === N && (_ = !0, D = R.route.hydrateFallbackElement || null)));
      let V = r.concat(d.slice(0, N + 1)), Q = () => {
        let K;
        return Y ? K = U : _ ? K = D : R.route.Component ? K = /* @__PURE__ */ A.createElement(R.route.Component, null) : R.route.element ? K = R.route.element : K = b, /* @__PURE__ */ A.createElement(
          Ng,
          {
            match: R,
            routeContext: {
              outlet: b,
              matches: V,
              isDataRoute: c != null
            },
            children: K
          }
        );
      };
      return c && (R.route.ErrorBoundary || R.route.errorElement || N === 0) ? /* @__PURE__ */ A.createElement(
        Lh,
        {
          location: c.location,
          revalidation: c.revalidation,
          component: U,
          error: Y,
          children: Q(),
          routeContext: { outlet: null, matches: V, isDataRoute: !0 },
          onError: y
        }
      ) : Q();
    },
    null
  );
}
function Os(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Dg(u) {
  let r = A.useContext(Pn);
  return He(r, Os(u)), r;
}
function Ug(u) {
  let r = A.useContext(Bi);
  return He(r, Os(u)), r;
}
function jg(u) {
  let r = A.useContext(gl);
  return He(r, Os(u)), r;
}
function zs(u) {
  let r = jg(u), c = r.matches[r.matches.length - 1];
  return He(
    c.route.id,
    `${u} can only be used on routes that contain a unique "id"`
  ), c.route.id;
}
function Bg() {
  return zs(
    "useRouteId"
    /* UseRouteId */
  );
}
function Hg() {
  let u = A.useContext(_s), r = Ug(
    "useRouteError"
    /* UseRouteError */
  ), c = zs(
    "useRouteError"
    /* UseRouteError */
  );
  return u !== void 0 ? u : r.errors?.[c];
}
function Lg() {
  let { router: u } = Dg(
    "useNavigate"
    /* UseNavigateStable */
  ), r = zs(
    "useNavigate"
    /* UseNavigateStable */
  ), c = A.useRef(!1);
  return Bh(() => {
    c.current = !0;
  }), A.useCallback(
    async (o, d = {}) => {
      Xt(c.current, jh), c.current && (typeof o == "number" ? await u.navigate(o) : await u.navigate(o, { fromRouteId: r, ...d }));
    },
    [u, r]
  );
}
var Wm = {};
function qh(u, r, c) {
  !r && !Wm[u] && (Wm[u] = !0, Xt(!1, c));
}
A.memo(qg);
function qg({
  routes: u,
  future: r,
  state: c,
  onError: s
}) {
  return Hh(u, void 0, c, s, r);
}
function Yh(u) {
  He(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Yg({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: s = "POP",
  navigator: o,
  static: d = !1,
  unstable_useTransitions: m
}) {
  He(
    !tu(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let g = u.replace(/^\/*/, "/"), p = A.useMemo(
    () => ({
      basename: g,
      navigator: o,
      static: d,
      unstable_useTransitions: m,
      future: {}
    }),
    [g, o, d, m]
  );
  typeof c == "string" && (c = In(c));
  let {
    pathname: y = "/",
    search: b = "",
    hash: R = "",
    state: N = null,
    key: Y = "default"
  } = c, _ = A.useMemo(() => {
    let U = yl(y, g);
    return U == null ? null : {
      location: {
        pathname: U,
        search: b,
        hash: R,
        state: N,
        key: Y
      },
      navigationType: s
    };
  }, [g, y, b, R, N, Y, s]);
  return Xt(
    _ != null,
    `<Router basename="${g}"> is not able to match the URL "${y}${b}${R}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ A.createElement(Bt.Provider, { value: p }, /* @__PURE__ */ A.createElement(eu.Provider, { children: r, value: _ }));
}
function Xg({
  children: u,
  location: r
}) {
  return Cg(xs(u), r);
}
function xs(u, r = []) {
  let c = [];
  return A.Children.forEach(u, (s, o) => {
    if (!A.isValidElement(s))
      return;
    let d = [...r, o];
    if (s.type === A.Fragment) {
      c.push.apply(
        c,
        xs(s.props.children, d)
      );
      return;
    }
    He(
      s.type === Yh,
      `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), He(
      !s.props.index || !s.props.children,
      "An index route cannot have child routes."
    );
    let m = {
      id: s.props.id || d.join("-"),
      caseSensitive: s.props.caseSensitive,
      element: s.props.element,
      Component: s.props.Component,
      index: s.props.index,
      path: s.props.path,
      middleware: s.props.middleware,
      loader: s.props.loader,
      action: s.props.action,
      hydrateFallbackElement: s.props.hydrateFallbackElement,
      HydrateFallback: s.props.HydrateFallback,
      errorElement: s.props.errorElement,
      ErrorBoundary: s.props.ErrorBoundary,
      hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
      shouldRevalidate: s.props.shouldRevalidate,
      handle: s.props.handle,
      lazy: s.props.lazy
    };
    s.props.children && (m.children = xs(
      s.props.children,
      d
    )), c.push(m);
  }), c;
}
var _i = "get", Oi = "application/x-www-form-urlencoded";
function Hi(u) {
  return typeof HTMLElement < "u" && u instanceof HTMLElement;
}
function Gg(u) {
  return Hi(u) && u.tagName.toLowerCase() === "button";
}
function Vg(u) {
  return Hi(u) && u.tagName.toLowerCase() === "form";
}
function Qg(u) {
  return Hi(u) && u.tagName.toLowerCase() === "input";
}
function Zg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function kg(u, r) {
  return u.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Zg(u);
}
var wi = null;
function Kg() {
  if (wi === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), wi = !1;
    } catch {
      wi = !0;
    }
  return wi;
}
var Jg = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function fs(u) {
  return u != null && !Jg.has(u) ? (Xt(
    !1,
    `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Oi}"`
  ), null) : u;
}
function $g(u, r) {
  let c, s, o, d, m;
  if (Vg(u)) {
    let g = u.getAttribute("action");
    s = g ? yl(g, r) : null, c = u.getAttribute("method") || _i, o = fs(u.getAttribute("enctype")) || Oi, d = new FormData(u);
  } else if (Gg(u) || Qg(u) && (u.type === "submit" || u.type === "image")) {
    let g = u.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = u.getAttribute("formaction") || g.getAttribute("action");
    if (s = p ? yl(p, r) : null, c = u.getAttribute("formmethod") || g.getAttribute("method") || _i, o = fs(u.getAttribute("formenctype")) || fs(g.getAttribute("enctype")) || Oi, d = new FormData(g, u), !Kg()) {
      let { name: y, type: b, value: R } = u;
      if (b === "image") {
        let N = y ? `${y}.` : "";
        d.append(`${N}x`, "0"), d.append(`${N}y`, "0");
      } else y && d.append(y, R);
    }
  } else {
    if (Hi(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    c = _i, s = null, o = Oi, m = u;
  }
  return d && o === "text/plain" && (m = d, d = void 0), { action: s, method: c.toLowerCase(), encType: o, formData: d, body: m };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Ns(u, r) {
  if (u === !1 || u === null || typeof u > "u")
    throw new Error(r);
}
function Wg(u, r, c) {
  let s = typeof u == "string" ? new URL(
    u,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : u;
  return s.pathname === "/" ? s.pathname = `_root.${c}` : r && yl(s.pathname, r) === "/" ? s.pathname = `${r.replace(/\/$/, "")}/_root.${c}` : s.pathname = `${s.pathname.replace(/\/$/, "")}.${c}`, s;
}
async function Fg(u, r) {
  if (u.id in r)
    return r[u.id];
  try {
    let c = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      u.module
    );
    return r[u.id] = c, c;
  } catch (c) {
    return console.error(
      `Error loading route module \`${u.module}\`, reloading page...`
    ), console.error(c), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Ig(u) {
  return u == null ? !1 : u.href == null ? u.rel === "preload" && typeof u.imageSrcSet == "string" && typeof u.imageSizes == "string" : typeof u.rel == "string" && typeof u.href == "string";
}
async function Pg(u, r, c) {
  let s = await Promise.all(
    u.map(async (o) => {
      let d = r.routes[o.route.id];
      if (d) {
        let m = await Fg(d, c);
        return m.links ? m.links() : [];
      }
      return [];
    })
  );
  return np(
    s.flat(1).filter(Ig).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function Fm(u, r, c, s, o, d) {
  let m = (p, y) => c[y] ? p.route.id !== c[y].route.id : !0, g = (p, y) => (
    // param change, /users/123 -> /users/456
    c[y].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    c[y].route.path?.endsWith("*") && c[y].params["*"] !== p.params["*"]
  );
  return d === "assets" ? r.filter(
    (p, y) => m(p, y) || g(p, y)
  ) : d === "data" ? r.filter((p, y) => {
    let b = s.routes[p.route.id];
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
        currentParams: c[0]?.params || {},
        nextUrl: new URL(u, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof R == "boolean")
        return R;
    }
    return !0;
  }) : [];
}
function ep(u, r, { includeHydrateFallback: c } = {}) {
  return tp(
    u.map((s) => {
      let o = r.routes[s.route.id];
      if (!o) return [];
      let d = [o.module];
      return o.clientActionModule && (d = d.concat(o.clientActionModule)), o.clientLoaderModule && (d = d.concat(o.clientLoaderModule)), c && o.hydrateFallbackModule && (d = d.concat(o.hydrateFallbackModule)), o.imports && (d = d.concat(o.imports)), d;
    }).flat(1)
  );
}
function tp(u) {
  return [...new Set(u)];
}
function lp(u) {
  let r = {}, c = Object.keys(u).sort();
  for (let s of c)
    r[s] = u[s];
  return r;
}
function np(u, r) {
  let c = /* @__PURE__ */ new Set();
  return new Set(r), u.reduce((s, o) => {
    let d = JSON.stringify(lp(o));
    return c.has(d) || (c.add(d), s.push({ key: d, link: o })), s;
  }, []);
}
function Xh() {
  let u = A.useContext(Pn);
  return Ns(
    u,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), u;
}
function ap() {
  let u = A.useContext(Bi);
  return Ns(
    u,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), u;
}
var Ms = A.createContext(void 0);
Ms.displayName = "FrameworkContext";
function Gh() {
  let u = A.useContext(Ms);
  return Ns(
    u,
    "You must render this element inside a <HydratedRouter> element"
  ), u;
}
function up(u, r) {
  let c = A.useContext(Ms), [s, o] = A.useState(!1), [d, m] = A.useState(!1), { onFocus: g, onBlur: p, onMouseEnter: y, onMouseLeave: b, onTouchStart: R } = r, N = A.useRef(null);
  A.useEffect(() => {
    if (u === "render" && m(!0), u === "viewport") {
      let U = (V) => {
        V.forEach((Q) => {
          m(Q.isIntersecting);
        });
      }, D = new IntersectionObserver(U, { threshold: 0.5 });
      return N.current && D.observe(N.current), () => {
        D.disconnect();
      };
    }
  }, [u]), A.useEffect(() => {
    if (s) {
      let U = setTimeout(() => {
        m(!0);
      }, 100);
      return () => {
        clearTimeout(U);
      };
    }
  }, [s]);
  let Y = () => {
    o(!0);
  }, _ = () => {
    o(!1), m(!1);
  };
  return c ? u !== "intent" ? [d, N, {}] : [
    d,
    N,
    {
      onFocus: $a(g, Y),
      onBlur: $a(p, _),
      onMouseEnter: $a(y, Y),
      onMouseLeave: $a(b, _),
      onTouchStart: $a(R, Y)
    }
  ] : [!1, N, {}];
}
function $a(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function ip({ page: u, ...r }) {
  let { router: c } = Xh(), s = A.useMemo(
    () => Th(c.routes, u, c.basename),
    [c.routes, u, c.basename]
  );
  return s ? /* @__PURE__ */ A.createElement(cp, { page: u, matches: s, ...r }) : null;
}
function rp(u) {
  let { manifest: r, routeModules: c } = Gh(), [s, o] = A.useState([]);
  return A.useEffect(() => {
    let d = !1;
    return Pg(u, r, c).then(
      (m) => {
        d || o(m);
      }
    ), () => {
      d = !0;
    };
  }, [u, r, c]), s;
}
function cp({
  page: u,
  matches: r,
  ...c
}) {
  let s = dn(), { manifest: o, routeModules: d } = Gh(), { basename: m } = Xh(), { loaderData: g, matches: p } = ap(), y = A.useMemo(
    () => Fm(
      u,
      r,
      p,
      o,
      s,
      "data"
    ),
    [u, r, p, o, s]
  ), b = A.useMemo(
    () => Fm(
      u,
      r,
      p,
      o,
      s,
      "assets"
    ),
    [u, r, p, o, s]
  ), R = A.useMemo(() => {
    if (u === s.pathname + s.search + s.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), U = !1;
    if (r.forEach((V) => {
      let Q = o.routes[V.route.id];
      !Q || !Q.hasLoader || (!y.some((K) => K.route.id === V.route.id) && V.route.id in g && d[V.route.id]?.shouldRevalidate || Q.hasClientLoader ? U = !0 : _.add(V.route.id));
    }), _.size === 0)
      return [];
    let D = Wg(u, m, "data");
    return U && _.size > 0 && D.searchParams.set(
      "_routes",
      r.filter((V) => _.has(V.route.id)).map((V) => V.route.id).join(",")
    ), [D.pathname + D.search];
  }, [
    m,
    g,
    s,
    o,
    y,
    r,
    u,
    d
  ]), N = A.useMemo(
    () => ep(b, o),
    [b, o]
  ), Y = rp(b);
  return /* @__PURE__ */ A.createElement(A.Fragment, null, R.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...c })), N.map((_) => /* @__PURE__ */ A.createElement("link", { key: _, rel: "modulepreload", href: _, ...c })), Y.map(({ key: _, link: U }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ A.createElement("link", { key: _, nonce: c.nonce, ...U })
  )));
}
function sp(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var op = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  op && (window.__reactRouterVersion = // @ts-expect-error
  "7.11.0");
} catch {
}
function fp({
  basename: u,
  children: r,
  unstable_useTransitions: c,
  window: s
}) {
  let o = A.useRef();
  o.current == null && (o.current = Q1({ window: s, v5Compat: !0 }));
  let d = o.current, [m, g] = A.useState({
    action: d.action,
    location: d.location
  }), p = A.useCallback(
    (y) => {
      c === !1 ? g(y) : A.startTransition(() => g(y));
    },
    [c]
  );
  return A.useLayoutEffect(() => d.listen(p), [d, p]), /* @__PURE__ */ A.createElement(
    Yg,
    {
      basename: u,
      children: r,
      location: m.location,
      navigationType: m.action,
      navigator: d,
      unstable_useTransitions: c
    }
  );
}
var Vh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Qh = A.forwardRef(
  function({
    onClick: r,
    discover: c = "render",
    prefetch: s = "none",
    relative: o,
    reloadDocument: d,
    replace: m,
    state: g,
    target: p,
    to: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) {
    let { basename: U, unstable_useTransitions: D } = A.useContext(Bt), V = typeof y == "string" && Vh.test(y), Q = Nh(y, U);
    y = Q.to;
    let K = Tg(y, { relative: o }), [te, W, ne] = up(
      s,
      Y
    ), ae = yp(y, {
      replace: m,
      state: g,
      target: p,
      preventScrollReset: b,
      relative: o,
      viewTransition: R,
      unstable_defaultShouldRevalidate: N,
      unstable_useTransitions: D
    });
    function F(xe) {
      r && r(xe), xe.defaultPrevented || ae(xe);
    }
    let Se = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ A.createElement(
        "a",
        {
          ...Y,
          ...ne,
          href: Q.absoluteURL || K,
          onClick: Q.isExternal || d ? r : F,
          ref: sp(_, W),
          target: p,
          "data-discover": !V && c === "render" ? "true" : void 0
        }
      )
    );
    return te && !V ? /* @__PURE__ */ A.createElement(A.Fragment, null, Se, /* @__PURE__ */ A.createElement(ip, { page: K })) : Se;
  }
);
Qh.displayName = "Link";
var dp = A.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: s = "",
    end: o = !1,
    style: d,
    to: m,
    viewTransition: g,
    children: p,
    ...y
  }, b) {
    let R = lu(m, { relative: y.relative }), N = dn(), Y = A.useContext(Bi), { navigator: _, basename: U } = A.useContext(Bt), D = Y != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Sp(R) && g === !0, V = _.encodeLocation ? _.encodeLocation(R).pathname : R.pathname, Q = N.pathname, K = Y && Y.navigation && Y.navigation.location ? Y.navigation.location.pathname : null;
    c || (Q = Q.toLowerCase(), K = K ? K.toLowerCase() : null, V = V.toLowerCase()), K && U && (K = yl(K, U) || K);
    const te = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let W = Q === V || !o && Q.startsWith(V) && Q.charAt(te) === "/", ne = K != null && (K === V || !o && K.startsWith(V) && K.charAt(V.length) === "/"), ae = {
      isActive: W,
      isPending: ne,
      isTransitioning: D
    }, F = W ? r : void 0, Se;
    typeof s == "function" ? Se = s(ae) : Se = [
      s,
      W ? "active" : null,
      ne ? "pending" : null,
      D ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let xe = typeof d == "function" ? d(ae) : d;
    return /* @__PURE__ */ A.createElement(
      Qh,
      {
        ...y,
        "aria-current": F,
        className: Se,
        ref: b,
        style: xe,
        to: m,
        viewTransition: g
      },
      typeof p == "function" ? p(ae) : p
    );
  }
);
dp.displayName = "NavLink";
var mp = A.forwardRef(
  ({
    discover: u = "render",
    fetcherKey: r,
    navigate: c,
    reloadDocument: s,
    replace: o,
    state: d,
    method: m = _i,
    action: g,
    onSubmit: p,
    relative: y,
    preventScrollReset: b,
    viewTransition: R,
    unstable_defaultShouldRevalidate: N,
    ...Y
  }, _) => {
    let { unstable_useTransitions: U } = A.useContext(Bt), D = vp(), V = bp(g, { relative: y }), Q = m.toLowerCase() === "get" ? "get" : "post", K = typeof g == "string" && Vh.test(g), te = (W) => {
      if (p && p(W), W.defaultPrevented) return;
      W.preventDefault();
      let ne = W.nativeEvent.submitter, ae = ne?.getAttribute("formmethod") || m, F = () => D(ne || W.currentTarget, {
        fetcherKey: r,
        method: ae,
        navigate: c,
        replace: o,
        state: d,
        relative: y,
        preventScrollReset: b,
        viewTransition: R,
        unstable_defaultShouldRevalidate: N
      });
      U && c !== !1 ? A.startTransition(() => F()) : F();
    };
    return /* @__PURE__ */ A.createElement(
      "form",
      {
        ref: _,
        method: Q,
        action: V,
        onSubmit: s ? p : te,
        ...Y,
        "data-discover": !K && u === "render" ? "true" : void 0
      }
    );
  }
);
mp.displayName = "Form";
function hp(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zh(u) {
  let r = A.useContext(Pn);
  return He(r, hp(u)), r;
}
function yp(u, {
  target: r,
  replace: c,
  state: s,
  preventScrollReset: o,
  relative: d,
  viewTransition: m,
  unstable_defaultShouldRevalidate: g,
  unstable_useTransitions: p
} = {}) {
  let y = Ag(), b = dn(), R = lu(u, { relative: d });
  return A.useCallback(
    (N) => {
      if (kg(N, r)) {
        N.preventDefault();
        let Y = c !== void 0 ? c : Pa(b) === Pa(R), _ = () => y(u, {
          replace: Y,
          state: s,
          preventScrollReset: o,
          relative: d,
          viewTransition: m,
          unstable_defaultShouldRevalidate: g
        });
        p ? A.startTransition(() => _()) : _();
      }
    },
    [
      b,
      y,
      R,
      c,
      s,
      r,
      u,
      o,
      d,
      m,
      g,
      p
    ]
  );
}
var gp = 0, pp = () => `__${String(++gp)}__`;
function vp() {
  let { router: u } = Zh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = A.useContext(Bt), c = Bg(), s = u.fetch, o = u.navigate;
  return A.useCallback(
    async (d, m = {}) => {
      let { action: g, method: p, encType: y, formData: b, body: R } = $g(
        d,
        r
      );
      if (m.navigate === !1) {
        let N = m.fetcherKey || pp();
        await s(N, c, m.action || g, {
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
          fromRouteId: c,
          flushSync: m.flushSync,
          viewTransition: m.viewTransition
        });
    },
    [s, o, r, c]
  );
}
function bp(u, { relative: r } = {}) {
  let { basename: c } = A.useContext(Bt), s = A.useContext(gl);
  He(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1), d = { ...lu(u || ".", { relative: r }) }, m = dn();
  if (u == null) {
    d.search = m.search;
    let g = new URLSearchParams(d.search), p = g.getAll("index");
    if (p.some((b) => b === "")) {
      g.delete("index"), p.filter((R) => R).forEach((R) => g.append("index", R));
      let b = g.toString();
      d.search = b ? `?${b}` : "";
    }
  }
  return (!u || u === ".") && o.route.index && (d.search = d.search ? d.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (d.pathname = d.pathname === "/" ? c : hl([c, d.pathname])), Pa(d);
}
function Sp(u, { relative: r } = {}) {
  let c = A.useContext(Dh);
  He(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = Zh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = lu(u, { relative: r });
  if (!c.isTransitioning)
    return !1;
  let d = yl(c.currentLocation.pathname, s) || c.currentLocation.pathname, m = yl(c.nextLocation.pathname, s) || c.nextLocation.pathname;
  return Di(o.pathname, m) != null || Di(o.pathname, d) != null;
}
var ds = { exports: {} }, nt = {};
var Im;
function Ep() {
  if (Im) return nt;
  Im = 1;
  var u = Cs();
  function r(p) {
    var y = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        y += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c() {
  }
  var s = {
    d: {
      f: c,
      r: function() {
        throw Error(r(522));
      },
      D: c,
      C: c,
      L: c,
      m: c,
      X: c,
      S: c,
      M: c
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
  var m = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(p, y) {
    if (p === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, nt.createPortal = function(p, y) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(r(299));
    return d(p, y, null, b);
  }, nt.flushSync = function(p) {
    var y = m.T, b = s.p;
    try {
      if (m.T = null, s.p = 2, p) return p();
    } finally {
      m.T = y, s.p = b, s.d.f();
    }
  }, nt.preconnect = function(p, y) {
    typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(p, y));
  }, nt.prefetchDNS = function(p) {
    typeof p == "string" && s.d.D(p);
  }, nt.preinit = function(p, y) {
    if (typeof p == "string" && y && typeof y.as == "string") {
      var b = y.as, R = g(b, y.crossOrigin), N = typeof y.integrity == "string" ? y.integrity : void 0, Y = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      b === "style" ? s.d.S(
        p,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: R,
          integrity: N,
          fetchPriority: Y
        }
      ) : b === "script" && s.d.X(p, {
        crossOrigin: R,
        integrity: N,
        fetchPriority: Y,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, nt.preinitModule = function(p, y) {
    if (typeof p == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var b = g(
            y.as,
            y.crossOrigin
          );
          s.d.M(p, {
            crossOrigin: b,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && s.d.M(p);
  }, nt.preload = function(p, y) {
    if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var b = y.as, R = g(b, y.crossOrigin);
      s.d.L(p, b, {
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
  }, nt.preloadModule = function(p, y) {
    if (typeof p == "string")
      if (y) {
        var b = g(y.as, y.crossOrigin);
        s.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: b,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else s.d.m(p);
  }, nt.requestFormReset = function(p) {
    s.d.r(p);
  }, nt.unstable_batchedUpdates = function(p, y) {
    return p(y);
  }, nt.useFormState = function(p, y, b) {
    return m.H.useFormState(p, y, b);
  }, nt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, nt.version = "19.2.3", nt;
}
var Pm;
function xp() {
  if (Pm) return ds.exports;
  Pm = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), ds.exports = Ep(), ds.exports;
}
var ms = { exports: {} }, Wa = {}, hs = { exports: {} }, ys = {};
var eh;
function Rp() {
  return eh || (eh = 1, (function(u) {
    function r(X, q) {
      var G = X.length;
      X.push(q);
      e: for (; 0 < G; ) {
        var I = G - 1 >>> 1, se = X[I];
        if (0 < o(se, q))
          X[I] = q, X[G] = se, G = I;
        else break e;
      }
    }
    function c(X) {
      return X.length === 0 ? null : X[0];
    }
    function s(X) {
      if (X.length === 0) return null;
      var q = X[0], G = X.pop();
      if (G !== q) {
        X[0] = G;
        e: for (var I = 0, se = X.length, Ae = se >>> 1; I < Ae; ) {
          var S = 2 * (I + 1) - 1, H = X[S], Z = S + 1, J = X[Z];
          if (0 > o(H, G))
            Z < se && 0 > o(J, H) ? (X[I] = J, X[Z] = G, I = Z) : (X[I] = H, X[S] = G, I = S);
          else if (Z < se && 0 > o(J, G))
            X[I] = J, X[Z] = G, I = Z;
          else break e;
        }
      }
      return q;
    }
    function o(X, q) {
      var G = X.sortIndex - q.sortIndex;
      return G !== 0 ? G : X.id - q.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      u.unstable_now = function() {
        return d.now();
      };
    } else {
      var m = Date, g = m.now();
      u.unstable_now = function() {
        return m.now() - g;
      };
    }
    var p = [], y = [], b = 1, R = null, N = 3, Y = !1, _ = !1, U = !1, D = !1, V = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
    function te(X) {
      for (var q = c(y); q !== null; ) {
        if (q.callback === null) s(y);
        else if (q.startTime <= X)
          s(y), q.sortIndex = q.expirationTime, r(p, q);
        else break;
        q = c(y);
      }
    }
    function W(X) {
      if (U = !1, te(X), !_)
        if (c(p) !== null)
          _ = !0, ne || (ne = !0, pe());
        else {
          var q = c(y);
          q !== null && Je(W, q.startTime - X);
        }
    }
    var ne = !1, ae = -1, F = 5, Se = -1;
    function xe() {
      return D ? !0 : !(u.unstable_now() - Se < F);
    }
    function lt() {
      if (D = !1, ne) {
        var X = u.unstable_now();
        Se = X;
        var q = !0;
        try {
          e: {
            _ = !1, U && (U = !1, Q(ae), ae = -1), Y = !0;
            var G = N;
            try {
              t: {
                for (te(X), R = c(p); R !== null && !(R.expirationTime > X && xe()); ) {
                  var I = R.callback;
                  if (typeof I == "function") {
                    R.callback = null, N = R.priorityLevel;
                    var se = I(
                      R.expirationTime <= X
                    );
                    if (X = u.unstable_now(), typeof se == "function") {
                      R.callback = se, te(X), q = !0;
                      break t;
                    }
                    R === c(p) && s(p), te(X);
                  } else s(p);
                  R = c(p);
                }
                if (R !== null) q = !0;
                else {
                  var Ae = c(y);
                  Ae !== null && Je(
                    W,
                    Ae.startTime - X
                  ), q = !1;
                }
              }
              break e;
            } finally {
              R = null, N = G, Y = !1;
            }
            q = void 0;
          }
        } finally {
          q ? pe() : ne = !1;
        }
      }
    }
    var pe;
    if (typeof K == "function")
      pe = function() {
        K(lt);
      };
    else if (typeof MessageChannel < "u") {
      var Le = new MessageChannel(), je = Le.port2;
      Le.port1.onmessage = lt, pe = function() {
        je.postMessage(null);
      };
    } else
      pe = function() {
        V(lt, 0);
      };
    function Je(X, q) {
      ae = V(function() {
        X(u.unstable_now());
      }, q);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, u.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < X ? Math.floor(1e3 / X) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, u.unstable_next = function(X) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = N;
      }
      var G = N;
      N = q;
      try {
        return X();
      } finally {
        N = G;
      }
    }, u.unstable_requestPaint = function() {
      D = !0;
    }, u.unstable_runWithPriority = function(X, q) {
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
      var G = N;
      N = X;
      try {
        return q();
      } finally {
        N = G;
      }
    }, u.unstable_scheduleCallback = function(X, q, G) {
      var I = u.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? I + G : I) : G = I, X) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = G + se, X = {
        id: b++,
        callback: q,
        priorityLevel: X,
        startTime: G,
        expirationTime: se,
        sortIndex: -1
      }, G > I ? (X.sortIndex = G, r(y, X), c(p) === null && X === c(y) && (U ? (Q(ae), ae = -1) : U = !0, Je(W, G - I))) : (X.sortIndex = se, r(p, X), _ || Y || (_ = !0, ne || (ne = !0, pe()))), X;
    }, u.unstable_shouldYield = xe, u.unstable_wrapCallback = function(X) {
      var q = N;
      return function() {
        var G = N;
        N = q;
        try {
          return X.apply(this, arguments);
        } finally {
          N = G;
        }
      };
    };
  })(ys)), ys;
}
var th;
function Tp() {
  return th || (th = 1, hs.exports = Rp()), hs.exports;
}
var lh;
function Ap() {
  if (lh) return Wa;
  lh = 1;
  var u = {};
  var r = Tp(), c = Cs(), s = xp();
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
        throw Error(o(188));
      }
      if (l.return !== n.return) l = a, n = i;
      else {
        for (var f = !1, h = a.child; h; ) {
          if (h === l) {
            f = !0, l = a, n = i;
            break;
          }
          if (h === n) {
            f = !0, n = a, l = i;
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = i.child; h; ) {
            if (h === l) {
              f = !0, l = i, n = a;
              break;
            }
            if (h === n) {
              f = !0, n = i, l = a;
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(o(189));
        }
      }
      if (l.alternate !== n) throw Error(o(190));
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
  var N = Object.assign, Y = /* @__PURE__ */ Symbol.for("react.element"), _ = /* @__PURE__ */ Symbol.for("react.transitional.element"), U = /* @__PURE__ */ Symbol.for("react.portal"), D = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), Q = /* @__PURE__ */ Symbol.for("react.profiler"), K = /* @__PURE__ */ Symbol.for("react.consumer"), te = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), ne = /* @__PURE__ */ Symbol.for("react.suspense"), ae = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), Se = /* @__PURE__ */ Symbol.for("react.lazy"), xe = /* @__PURE__ */ Symbol.for("react.activity"), lt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), pe = Symbol.iterator;
  function Le(e) {
    return e === null || typeof e != "object" ? null : (e = pe && e[pe] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var je = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === je ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case D:
        return "Fragment";
      case Q:
        return "Profiler";
      case V:
        return "StrictMode";
      case ne:
        return "Suspense";
      case ae:
        return "SuspenseList";
      case xe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case U:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case K:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : Je(e.type) || "Memo";
        case Se:
          t = e._payload, e = e._init;
          try {
            return Je(e(t));
          } catch {
          }
      }
    return null;
  }
  var X = Array.isArray, q = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, se = [], Ae = -1;
  function S(e) {
    return { current: e };
  }
  function H(e) {
    0 > Ae || (e.current = se[Ae], se[Ae] = null, Ae--);
  }
  function Z(e, t) {
    Ae++, se[Ae] = e.current, e.current = t;
  }
  var J = S(null), oe = S(null), fe = S(null), P = S(null);
  function ze(e, t) {
    switch (Z(fe, t), Z(oe, e), Z(J, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? fm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = fm(t), e = dm(t, e);
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
    H(J), Z(J, e);
  }
  function Be() {
    H(J), H(oe), H(fe);
  }
  function Ht(e) {
    e.memoizedState !== null && Z(P, e);
    var t = J.current, l = dm(t, e.type);
    t !== l && (Z(oe, e), Z(J, l));
  }
  function Jt(e) {
    oe.current === e && (H(J), H(oe)), P.current === e && (H(P), Qa._currentValue = I);
  }
  var $t, cu;
  function Gl(e) {
    if ($t === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        $t = t && t[1] || "", cu = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + $t + e + cu;
  }
  var Qi = !1;
  function Zi(e, t) {
    if (!e || Qi) return "";
    Qi = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch (M) {
                  var O = M;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (M) {
                  O = M;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (M) {
                O = M;
              }
              (L = e()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (M) {
            if (M && O && typeof M.stack == "string")
              return [M.stack, O.stack];
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
      var i = n.DetermineComponentFrameRoot(), f = i[0], h = i[1];
      if (f && h) {
        var v = f.split(`
`), C = h.split(`
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
                  var j = `
` + v[n].replace(" at new ", " at ");
                  return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), j;
                }
              while (1 <= n && 0 <= a);
            break;
          }
      }
    } finally {
      Qi = !1, Error.prepareStackTrace = l;
    }
    return (l = e ? e.displayName || e.name : "") ? Gl(l) : "";
  }
  function v0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Gl(e.type);
      case 16:
        return Gl("Lazy");
      case 13:
        return e.child !== t && t !== null ? Gl("Suspense Fallback") : Gl("Suspense");
      case 19:
        return Gl("SuspenseList");
      case 0:
      case 15:
        return Zi(e.type, !1);
      case 11:
        return Zi(e.type.render, !1);
      case 1:
        return Zi(e.type, !0);
      case 31:
        return Gl("Activity");
      default:
        return "";
    }
  }
  function Ys(e) {
    try {
      var t = "", l = null;
      do
        t += v0(e, l), l = e, e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  var ki = Object.prototype.hasOwnProperty, Ki = r.unstable_scheduleCallback, Ji = r.unstable_cancelCallback, b0 = r.unstable_shouldYield, S0 = r.unstable_requestPaint, yt = r.unstable_now, E0 = r.unstable_getCurrentPriorityLevel, Xs = r.unstable_ImmediatePriority, Gs = r.unstable_UserBlockingPriority, su = r.unstable_NormalPriority, x0 = r.unstable_LowPriority, Vs = r.unstable_IdlePriority, R0 = r.log, T0 = r.unstable_setDisableYieldValue, la = null, gt = null;
  function pl(e) {
    if (typeof R0 == "function" && T0(e), gt && typeof gt.setStrictMode == "function")
      try {
        gt.setStrictMode(la, e);
      } catch {
      }
  }
  var pt = Math.clz32 ? Math.clz32 : C0, A0 = Math.log, w0 = Math.LN2;
  function C0(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (A0(e) / w0 | 0) | 0;
  }
  var ou = 256, fu = 262144, du = 4194304;
  function Vl(e) {
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
  function mu(e, t, l) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var a = 0, i = e.suspendedLanes, f = e.pingedLanes;
    e = e.warmLanes;
    var h = n & 134217727;
    return h !== 0 ? (n = h & ~i, n !== 0 ? a = Vl(n) : (f &= h, f !== 0 ? a = Vl(f) : l || (l = h & ~e, l !== 0 && (a = Vl(l))))) : (h = n & ~i, h !== 0 ? a = Vl(h) : f !== 0 ? a = Vl(f) : l || (l = n & ~e, l !== 0 && (a = Vl(l)))), a === 0 ? 0 : t !== 0 && t !== a && (t & i) === 0 && (i = a & -a, l = t & -t, i >= l || i === 32 && (l & 4194048) !== 0) ? t : a;
  }
  function na(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _0(e, t) {
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
  function Qs() {
    var e = du;
    return du <<= 1, (du & 62914560) === 0 && (du = 4194304), e;
  }
  function $i(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function aa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function O0(e, t, l, n, a, i) {
    var f = e.pendingLanes;
    e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
    var h = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var j = 31 - pt(l), L = 1 << j;
      h[j] = 0, v[j] = -1;
      var O = C[j];
      if (O !== null)
        for (C[j] = null, j = 0; j < O.length; j++) {
          var M = O[j];
          M !== null && (M.lane &= -536870913);
        }
      l &= ~L;
    }
    n !== 0 && Zs(e, n, 0), i !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function Zs(e, t, l) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var n = 31 - pt(t);
    e.entangledLanes |= t, e.entanglements[n] = e.entanglements[n] | 1073741824 | l & 261930;
  }
  function ks(e, t) {
    var l = e.entangledLanes |= t;
    for (e = e.entanglements; l; ) {
      var n = 31 - pt(l), a = 1 << n;
      a & t | e[n] & t && (e[n] |= t), l &= ~a;
    }
  }
  function Ks(e, t) {
    var l = t & -t;
    return l = (l & 42) !== 0 ? 1 : Wi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
  }
  function Wi(e) {
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
  function Js() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jm(e.type));
  }
  function $s(e, t) {
    var l = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = l;
    }
  }
  var vl = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + vl, it = "__reactProps$" + vl, mn = "__reactContainer$" + vl, Ii = "__reactEvents$" + vl, z0 = "__reactListeners$" + vl, N0 = "__reactHandles$" + vl, Ws = "__reactResources$" + vl, ua = "__reactMarker$" + vl;
  function Pi(e) {
    delete e[Fe], delete e[it], delete e[Ii], delete e[z0], delete e[N0];
  }
  function hn(e) {
    var t = e[Fe];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if (t = l[mn] || l[Fe]) {
        if (l = t.alternate, t.child !== null || l !== null && l.child !== null)
          for (e = bm(e); e !== null; ) {
            if (l = e[Fe]) return l;
            e = bm(e);
          }
        return t;
      }
      e = l, l = e.parentNode;
    }
    return null;
  }
  function yn(e) {
    if (e = e[Fe] || e[mn]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ia(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function gn(e) {
    var t = e[Ws];
    return t || (t = e[Ws] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function $e(e) {
    e[ua] = !0;
  }
  var Fs = /* @__PURE__ */ new Set(), Is = {};
  function Ql(e, t) {
    pn(e, t), pn(e + "Capture", t);
  }
  function pn(e, t) {
    for (Is[e] = t, e = 0; e < t.length; e++)
      Fs.add(t[e]);
  }
  var M0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ps = {}, eo = {};
  function D0(e) {
    return ki.call(eo, e) ? !0 : ki.call(Ps, e) ? !1 : M0.test(e) ? eo[e] = !0 : (Ps[e] = !0, !1);
  }
  function hu(e, t, l) {
    if (D0(t))
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
  function yu(e, t, l) {
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
  function Wt(e, t, l, n) {
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
  function At(e) {
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
  function to(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function U0(e, t, l) {
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
  function er(e) {
    if (!e._valueTracker) {
      var t = to(e) ? "checked" : "value";
      e._valueTracker = U0(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function lo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(), n = "";
    return e && (n = to(e) ? e.checked ? "true" : "false" : e.value), e = n, e !== l ? (t.setValue(e), !0) : !1;
  }
  function gu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var j0 = /[\n"\\]/g;
  function wt(e) {
    return e.replace(
      j0,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function tr(e, t, l, n, a, i, f, h) {
    e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + At(t)) : e.value !== "" + At(t) && (e.value = "" + At(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? lr(e, f, At(t)) : l != null ? lr(e, f, At(l)) : n != null && e.removeAttribute("value"), a == null && i != null && (e.defaultChecked = !!i), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + At(h) : e.removeAttribute("name");
  }
  function no(e, t, l, n, a, i, f, h) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || l != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        er(e);
        return;
      }
      l = l != null ? "" + At(l) : "", t = t != null ? "" + At(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = n ?? a, n = typeof n != "function" && typeof n != "symbol" && !!n, e.checked = h ? e.checked : !!n, e.defaultChecked = !!n, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), er(e);
  }
  function lr(e, t, l) {
    t === "number" && gu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
  }
  function vn(e, t, l, n) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < l.length; a++)
        t["$" + l[a]] = !0;
      for (l = 0; l < e.length; l++)
        a = t.hasOwnProperty("$" + e[l].value), e[l].selected !== a && (e[l].selected = a), a && n && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + At(l), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === l) {
          e[a].selected = !0, n && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ao(e, t, l) {
    if (t != null && (t = "" + At(t), t !== e.value && (e.value = t), l == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + At(l) : "";
  }
  function uo(e, t, l, n) {
    if (t == null) {
      if (n != null) {
        if (l != null) throw Error(o(92));
        if (X(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        l = n;
      }
      l == null && (l = ""), t = l;
    }
    l = At(t), e.defaultValue = l, n = e.textContent, n === l && n !== "" && n !== null && (e.value = n), er(e);
  }
  function bn(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var B0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function io(e, t, l) {
    var n = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === "" ? n ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : n ? e.setProperty(t, l) : typeof l != "number" || l === 0 || B0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
  }
  function ro(e, t, l) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, l != null) {
      for (var n in l)
        !l.hasOwnProperty(n) || t != null && t.hasOwnProperty(n) || (n.indexOf("--") === 0 ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "");
      for (var a in t)
        n = t[a], t.hasOwnProperty(a) && l[a] !== n && io(e, a, n);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && io(e, i, t[i]);
  }
  function nr(e) {
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
  var H0 = /* @__PURE__ */ new Map([
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
  ]), L0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pu(e) {
    return L0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Ft() {
  }
  var ar = null;
  function ur(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Sn = null, En = null;
  function co(e) {
    var t = yn(e);
    if (t && (e = t.stateNode)) {
      var l = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (tr(
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
              'input[name="' + wt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < l.length; t++) {
              var n = l[t];
              if (n !== e && n.form === e.form) {
                var a = n[it] || null;
                if (!a) throw Error(o(90));
                tr(
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
              n = l[t], n.form === e.form && lo(n);
          }
          break e;
        case "textarea":
          ao(e, l.value, l.defaultValue);
          break e;
        case "select":
          t = l.value, t != null && vn(e, !!l.multiple, t, !1);
      }
    }
  }
  var ir = !1;
  function so(e, t, l) {
    if (ir) return e(t, l);
    ir = !0;
    try {
      var n = e(t);
      return n;
    } finally {
      if (ir = !1, (Sn !== null || En !== null) && (ai(), Sn && (t = Sn, e = En, En = Sn = null, co(t), e)))
        for (t = 0; t < e.length; t++) co(e[t]);
    }
  }
  function ra(e, t) {
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
        o(231, t, typeof l)
      );
    return l;
  }
  var It = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rr = !1;
  if (It)
    try {
      var ca = {};
      Object.defineProperty(ca, "passive", {
        get: function() {
          rr = !0;
        }
      }), window.addEventListener("test", ca, ca), window.removeEventListener("test", ca, ca);
    } catch {
      rr = !1;
    }
  var bl = null, cr = null, vu = null;
  function oo() {
    if (vu) return vu;
    var e, t = cr, l = t.length, n, a = "value" in bl ? bl.value : bl.textContent, i = a.length;
    for (e = 0; e < l && t[e] === a[e]; e++) ;
    var f = l - e;
    for (n = 1; n <= f && t[l - n] === a[i - n]; n++) ;
    return vu = a.slice(e, 1 < n ? 1 - n : void 0);
  }
  function bu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Su() {
    return !0;
  }
  function fo() {
    return !1;
  }
  function rt(e) {
    function t(l, n, a, i, f) {
      this._reactName = l, this._targetInst = a, this.type = n, this.nativeEvent = i, this.target = f, this.currentTarget = null;
      for (var h in e)
        e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(i) : i[h]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Su : fo, this.isPropagationStopped = fo, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var l = this.nativeEvent;
        l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = Su);
      },
      stopPropagation: function() {
        var l = this.nativeEvent;
        l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = Su);
      },
      persist: function() {
      },
      isPersistent: Su
    }), t;
  }
  var Zl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Eu = rt(Zl), sa = N({}, Zl, { view: 0, detail: 0 }), q0 = rt(sa), sr, or, oa, xu = N({}, sa, {
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
    getModifierState: dr,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== oa && (oa && e.type === "mousemove" ? (sr = e.screenX - oa.screenX, or = e.screenY - oa.screenY) : or = sr = 0, oa = e), sr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : or;
    }
  }), mo = rt(xu), Y0 = N({}, xu, { dataTransfer: 0 }), X0 = rt(Y0), G0 = N({}, sa, { relatedTarget: 0 }), fr = rt(G0), V0 = N({}, Zl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q0 = rt(V0), Z0 = N({}, Zl, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), k0 = rt(Z0), K0 = N({}, Zl, { data: 0 }), ho = rt(K0), J0 = {
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
  }, $0 = {
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
  }, W0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function F0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = W0[e]) ? !!t[e] : !1;
  }
  function dr() {
    return F0;
  }
  var I0 = N({}, sa, {
    key: function(e) {
      if (e.key) {
        var t = J0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = bu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $0[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: dr,
    charCode: function(e) {
      return e.type === "keypress" ? bu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? bu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), P0 = rt(I0), ey = N({}, xu, {
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
  }), yo = rt(ey), ty = N({}, sa, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: dr
  }), ly = rt(ty), ny = N({}, Zl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ay = rt(ny), uy = N({}, xu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), iy = rt(uy), ry = N({}, Zl, {
    newState: 0,
    oldState: 0
  }), cy = rt(ry), sy = [9, 13, 27, 32], mr = It && "CompositionEvent" in window, fa = null;
  It && "documentMode" in document && (fa = document.documentMode);
  var oy = It && "TextEvent" in window && !fa, go = It && (!mr || fa && 8 < fa && 11 >= fa), po = " ", vo = !1;
  function bo(e, t) {
    switch (e) {
      case "keyup":
        return sy.indexOf(t.keyCode) !== -1;
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
  function So(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function fy(e, t) {
    switch (e) {
      case "compositionend":
        return So(t);
      case "keypress":
        return t.which !== 32 ? null : (vo = !0, po);
      case "textInput":
        return e = t.data, e === po && vo ? null : e;
      default:
        return null;
    }
  }
  function dy(e, t) {
    if (xn)
      return e === "compositionend" || !mr && bo(e, t) ? (e = oo(), vu = cr = bl = null, xn = !1, e) : null;
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
        return go && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var my = {
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
  function Eo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!my[e.type] : t === "textarea";
  }
  function xo(e, t, l, n) {
    Sn ? En ? En.push(n) : En = [n] : Sn = n, t = fi(t, "onChange"), 0 < t.length && (l = new Eu(
      "onChange",
      "change",
      null,
      l,
      n
    ), e.push({ event: l, listeners: t }));
  }
  var da = null, ma = null;
  function hy(e) {
    um(e, 0);
  }
  function Ru(e) {
    var t = ia(e);
    if (lo(t)) return e;
  }
  function Ro(e, t) {
    if (e === "change") return t;
  }
  var To = !1;
  if (It) {
    var hr;
    if (It) {
      var yr = "oninput" in document;
      if (!yr) {
        var Ao = document.createElement("div");
        Ao.setAttribute("oninput", "return;"), yr = typeof Ao.oninput == "function";
      }
      hr = yr;
    } else hr = !1;
    To = hr && (!document.documentMode || 9 < document.documentMode);
  }
  function wo() {
    da && (da.detachEvent("onpropertychange", Co), ma = da = null);
  }
  function Co(e) {
    if (e.propertyName === "value" && Ru(ma)) {
      var t = [];
      xo(
        t,
        ma,
        e,
        ur(e)
      ), so(hy, t);
    }
  }
  function yy(e, t, l) {
    e === "focusin" ? (wo(), da = t, ma = l, da.attachEvent("onpropertychange", Co)) : e === "focusout" && wo();
  }
  function gy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ru(ma);
  }
  function py(e, t) {
    if (e === "click") return Ru(t);
  }
  function vy(e, t) {
    if (e === "input" || e === "change")
      return Ru(t);
  }
  function by(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var vt = typeof Object.is == "function" ? Object.is : by;
  function ha(e, t) {
    if (vt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var l = Object.keys(e), n = Object.keys(t);
    if (l.length !== n.length) return !1;
    for (n = 0; n < l.length; n++) {
      var a = l[n];
      if (!ki.call(t, a) || !vt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function _o(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Oo(e, t) {
    var l = _o(e);
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
      l = _o(l);
    }
  }
  function zo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function No(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = gu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = gu(e.document);
    }
    return t;
  }
  function gr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Sy = It && "documentMode" in document && 11 >= document.documentMode, Rn = null, pr = null, ya = null, vr = !1;
  function Mo(e, t, l) {
    var n = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    vr || Rn == null || Rn !== gu(n) || (n = Rn, "selectionStart" in n && gr(n) ? n = { start: n.selectionStart, end: n.selectionEnd } : (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection(), n = {
      anchorNode: n.anchorNode,
      anchorOffset: n.anchorOffset,
      focusNode: n.focusNode,
      focusOffset: n.focusOffset
    }), ya && ha(ya, n) || (ya = n, n = fi(pr, "onSelect"), 0 < n.length && (t = new Eu(
      "onSelect",
      "select",
      null,
      t,
      l
    ), e.push({ event: t, listeners: n }), t.target = Rn)));
  }
  function kl(e, t) {
    var l = {};
    return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
  }
  var Tn = {
    animationend: kl("Animation", "AnimationEnd"),
    animationiteration: kl("Animation", "AnimationIteration"),
    animationstart: kl("Animation", "AnimationStart"),
    transitionrun: kl("Transition", "TransitionRun"),
    transitionstart: kl("Transition", "TransitionStart"),
    transitioncancel: kl("Transition", "TransitionCancel"),
    transitionend: kl("Transition", "TransitionEnd")
  }, br = {}, Do = {};
  It && (Do = document.createElement("div").style, "AnimationEvent" in window || (delete Tn.animationend.animation, delete Tn.animationiteration.animation, delete Tn.animationstart.animation), "TransitionEvent" in window || delete Tn.transitionend.transition);
  function Kl(e) {
    if (br[e]) return br[e];
    if (!Tn[e]) return e;
    var t = Tn[e], l;
    for (l in t)
      if (t.hasOwnProperty(l) && l in Do)
        return br[e] = t[l];
    return e;
  }
  var Uo = Kl("animationend"), jo = Kl("animationiteration"), Bo = Kl("animationstart"), Ey = Kl("transitionrun"), xy = Kl("transitionstart"), Ry = Kl("transitioncancel"), Ho = Kl("transitionend"), Lo = /* @__PURE__ */ new Map(), Sr = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Sr.push("scrollEnd");
  function Lt(e, t) {
    Lo.set(e, t), Ql(t, [e]);
  }
  var Tu = typeof reportError == "function" ? reportError : function(e) {
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
  }, Ct = [], An = 0, Er = 0;
  function Au() {
    for (var e = An, t = Er = An = 0; t < e; ) {
      var l = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var i = Ct[t];
      if (Ct[t++] = null, n !== null && a !== null) {
        var f = n.pending;
        f === null ? a.next = a : (a.next = f.next, f.next = a), n.pending = a;
      }
      i !== 0 && qo(l, a, i);
    }
  }
  function wu(e, t, l, n) {
    Ct[An++] = e, Ct[An++] = t, Ct[An++] = l, Ct[An++] = n, Er |= n, e.lanes |= n, e = e.alternate, e !== null && (e.lanes |= n);
  }
  function xr(e, t, l, n) {
    return wu(e, t, l, n), Cu(e);
  }
  function Jl(e, t) {
    return wu(e, null, null, t), Cu(e);
  }
  function qo(e, t, l) {
    e.lanes |= l;
    var n = e.alternate;
    n !== null && (n.lanes |= l);
    for (var a = !1, i = e.return; i !== null; )
      i.childLanes |= l, n = i.alternate, n !== null && (n.childLanes |= l), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (a = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, a && t !== null && (a = 31 - pt(l), e = i.hiddenUpdates, n = e[a], n === null ? e[a] = [t] : n.push(t), t.lane = l | 536870912), i) : null;
  }
  function Cu(e) {
    if (50 < Ha)
      throw Ha = 0, Nc = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var wn = {};
  function Ty(e, t, l, n) {
    this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bt(e, t, l, n) {
    return new Ty(e, t, l, n);
  }
  function Rr(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Pt(e, t) {
    var l = e.alternate;
    return l === null ? (l = bt(
      e.tag,
      t,
      e.key,
      e.mode
    ), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
  }
  function Yo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function _u(e, t, l, n, a, i) {
    var f = 0;
    if (n = e, typeof e == "function") Rr(e) && (f = 1);
    else if (typeof e == "string")
      f = O1(
        e,
        l,
        J.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case xe:
          return e = bt(31, l, t, a), e.elementType = xe, e.lanes = i, e;
        case D:
          return $l(l.children, a, i, t);
        case V:
          f = 8, a |= 24;
          break;
        case Q:
          return e = bt(12, l, t, a | 2), e.elementType = Q, e.lanes = i, e;
        case ne:
          return e = bt(13, l, t, a), e.elementType = ne, e.lanes = i, e;
        case ae:
          return e = bt(19, l, t, a), e.elementType = ae, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case te:
                f = 10;
                break e;
              case K:
                f = 9;
                break e;
              case W:
                f = 11;
                break e;
              case F:
                f = 14;
                break e;
              case Se:
                f = 16, n = null;
                break e;
            }
          f = 29, l = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), n = null;
      }
    return t = bt(f, l, t, a), t.elementType = e, t.type = n, t.lanes = i, t;
  }
  function $l(e, t, l, n) {
    return e = bt(7, e, n, t), e.lanes = l, e;
  }
  function Tr(e, t, l) {
    return e = bt(6, e, null, t), e.lanes = l, e;
  }
  function Xo(e) {
    var t = bt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ar(e, t, l) {
    return t = bt(
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
  var Go = /* @__PURE__ */ new WeakMap();
  function _t(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Go.get(e);
      return l !== void 0 ? l : (t = {
        value: e,
        source: t,
        stack: Ys(t)
      }, Go.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ys(t)
    };
  }
  var Cn = [], _n = 0, Ou = null, ga = 0, Ot = [], zt = 0, Sl = null, Vt = 1, Qt = "";
  function el(e, t) {
    Cn[_n++] = ga, Cn[_n++] = Ou, Ou = e, ga = t;
  }
  function Vo(e, t, l) {
    Ot[zt++] = Vt, Ot[zt++] = Qt, Ot[zt++] = Sl, Sl = e;
    var n = Vt;
    e = Qt;
    var a = 32 - pt(n) - 1;
    n &= ~(1 << a), l += 1;
    var i = 32 - pt(t) + a;
    if (30 < i) {
      var f = a - a % 5;
      i = (n & (1 << f) - 1).toString(32), n >>= f, a -= f, Vt = 1 << 32 - pt(t) + a | l << a | n, Qt = i + e;
    } else
      Vt = 1 << i | l << a | n, Qt = e;
  }
  function wr(e) {
    e.return !== null && (el(e, 1), Vo(e, 1, 0));
  }
  function Cr(e) {
    for (; e === Ou; )
      Ou = Cn[--_n], Cn[_n] = null, ga = Cn[--_n], Cn[_n] = null;
    for (; e === Sl; )
      Sl = Ot[--zt], Ot[zt] = null, Qt = Ot[--zt], Ot[zt] = null, Vt = Ot[--zt], Ot[zt] = null;
  }
  function Qo(e, t) {
    Ot[zt++] = Vt, Ot[zt++] = Qt, Ot[zt++] = Sl, Vt = t.id, Qt = t.overflow, Sl = e;
  }
  var Ie = null, Ne = null, ge = !1, El = null, Nt = !1, _r = Error(o(519));
  function xl(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw pa(_t(t, e)), _r;
  }
  function Zo(e) {
    var t = e.stateNode, l = e.type, n = e.memoizedProps;
    switch (t[Fe] = e, t[it] = n, l) {
      case "dialog":
        me("cancel", t), me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        me("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < qa.length; l++)
          me(qa[l], t);
        break;
      case "source":
        me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        me("error", t), me("load", t);
        break;
      case "details":
        me("toggle", t);
        break;
      case "input":
        me("invalid", t), no(
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
        me("invalid", t);
        break;
      case "textarea":
        me("invalid", t), uo(t, n.value, n.defaultValue, n.children);
    }
    l = n.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || n.suppressHydrationWarning === !0 || sm(t.textContent, l) ? (n.popover != null && (me("beforetoggle", t), me("toggle", t)), n.onScroll != null && me("scroll", t), n.onScrollEnd != null && me("scrollend", t), n.onClick != null && (t.onclick = Ft), t = !0) : t = !1, t || xl(e, !0);
  }
  function ko(e) {
    for (Ie = e.return; Ie; )
      switch (Ie.tag) {
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
          Ie = Ie.return;
      }
  }
  function On(e) {
    if (e !== Ie) return !1;
    if (!ge) return ko(e), ge = !0, !1;
    var t = e.tag, l;
    if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || kc(e.type, e.memoizedProps)), l = !l), l && Ne && xl(e), ko(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ne = vm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      Ne = vm(e);
    } else
      t === 27 ? (t = Ne, Bl(e.type) ? (e = Fc, Fc = null, Ne = e) : Ne = t) : Ne = Ie ? Dt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wl() {
    Ne = Ie = null, ge = !1;
  }
  function Or() {
    var e = El;
    return e !== null && (ft === null ? ft = e : ft.push.apply(
      ft,
      e
    ), El = null), e;
  }
  function pa(e) {
    El === null ? El = [e] : El.push(e);
  }
  var zr = S(null), Fl = null, tl = null;
  function Rl(e, t, l) {
    Z(zr, t._currentValue), t._currentValue = l;
  }
  function ll(e) {
    e._currentValue = zr.current, H(zr);
  }
  function Nr(e, t, l) {
    for (; e !== null; ) {
      var n = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === l) break;
      e = e.return;
    }
  }
  function Mr(e, t, l, n) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var i = a.dependencies;
      if (i !== null) {
        var f = a.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var h = i;
          i = a;
          for (var v = 0; v < t.length; v++)
            if (h.context === t[v]) {
              i.lanes |= l, h = i.alternate, h !== null && (h.lanes |= l), Nr(
                i.return,
                l,
                e
              ), n || (f = null);
              break e;
            }
          i = h.next;
        }
      } else if (a.tag === 18) {
        if (f = a.return, f === null) throw Error(o(341));
        f.lanes |= l, i = f.alternate, i !== null && (i.lanes |= l), Nr(f, l, e), f = null;
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
  function zn(e, t, l, n) {
    e = null;
    for (var a = t, i = !1; a !== null; ) {
      if (!i) {
        if ((a.flags & 524288) !== 0) i = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var f = a.alternate;
        if (f === null) throw Error(o(387));
        if (f = f.memoizedProps, f !== null) {
          var h = a.type;
          vt(a.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [h]);
        }
      } else if (a === P.current) {
        if (f = a.alternate, f === null) throw Error(o(387));
        f.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Qa) : e = [Qa]);
      }
      a = a.return;
    }
    e !== null && Mr(
      t,
      e,
      l,
      n
    ), t.flags |= 262144;
  }
  function zu(e) {
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
    Fl = e, tl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pe(e) {
    return Ko(Fl, e);
  }
  function Nu(e, t) {
    return Fl === null && Il(e), Ko(e, t);
  }
  function Ko(e, t) {
    var l = t._currentValue;
    if (t = { context: t, memoizedValue: l, next: null }, tl === null) {
      if (e === null) throw Error(o(308));
      tl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else tl = tl.next = t;
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
  }, wy = r.unstable_scheduleCallback, Cy = r.unstable_NormalPriority, Ve = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Dr() {
    return {
      controller: new Ay(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function va(e) {
    e.refCount--, e.refCount === 0 && wy(Cy, function() {
      e.controller.abort();
    });
  }
  var ba = null, Ur = 0, Nn = 0, Mn = null;
  function _y(e, t) {
    if (ba === null) {
      var l = ba = [];
      Ur = 0, Nn = Hc(), Mn = {
        status: "pending",
        value: void 0,
        then: function(n) {
          l.push(n);
        }
      };
    }
    return Ur++, t.then(Jo, Jo), t;
  }
  function Jo() {
    if (--Ur === 0 && ba !== null) {
      Mn !== null && (Mn.status = "fulfilled");
      var e = ba;
      ba = null, Nn = 0, Mn = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Oy(e, t) {
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
  var $o = q.S;
  q.S = function(e, t) {
    Dd = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && _y(e, t), $o !== null && $o(e, t);
  };
  var Pl = S(null);
  function jr() {
    var e = Pl.current;
    return e !== null ? e : Oe.pooledCache;
  }
  function Mu(e, t) {
    t === null ? Z(Pl, Pl.current) : Z(Pl, t.pool);
  }
  function Wo() {
    var e = jr();
    return e === null ? null : { parent: Ve._currentValue, pool: e };
  }
  var Dn = Error(o(460)), Br = Error(o(474)), Du = Error(o(542)), Uu = { then: function() {
  } };
  function Fo(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Io(e, t, l) {
    switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Ft, Ft), t = l), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ef(e), e;
      default:
        if (typeof t.status == "string") t.then(Ft, Ft);
        else {
          if (e = Oe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
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
            throw e = t.reason, ef(e), e;
        }
        throw tn = t, Dn;
    }
  }
  function en(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function" ? (tn = l, Dn) : l;
    }
  }
  var tn = null;
  function Po() {
    if (tn === null) throw Error(o(459));
    var e = tn;
    return tn = null, e;
  }
  function ef(e) {
    if (e === Dn || e === Du)
      throw Error(o(483));
  }
  var Un = null, Sa = 0;
  function ju(e) {
    var t = Sa;
    return Sa += 1, Un === null && (Un = []), Io(Un, e, t);
  }
  function Ea(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Bu(e, t) {
    throw t.$$typeof === Y ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function tf(e) {
    function t(T, E) {
      if (e) {
        var w = T.deletions;
        w === null ? (T.deletions = [E], T.flags |= 16) : w.push(E);
      }
    }
    function l(T, E) {
      if (!e) return null;
      for (; E !== null; )
        t(T, E), E = E.sibling;
      return null;
    }
    function n(T) {
      for (var E = /* @__PURE__ */ new Map(); T !== null; )
        T.key !== null ? E.set(T.key, T) : E.set(T.index, T), T = T.sibling;
      return E;
    }
    function a(T, E) {
      return T = Pt(T, E), T.index = 0, T.sibling = null, T;
    }
    function i(T, E, w) {
      return T.index = w, e ? (w = T.alternate, w !== null ? (w = w.index, w < E ? (T.flags |= 67108866, E) : w) : (T.flags |= 67108866, E)) : (T.flags |= 1048576, E);
    }
    function f(T) {
      return e && T.alternate === null && (T.flags |= 67108866), T;
    }
    function h(T, E, w, B) {
      return E === null || E.tag !== 6 ? (E = Tr(w, T.mode, B), E.return = T, E) : (E = a(E, w), E.return = T, E);
    }
    function v(T, E, w, B) {
      var ee = w.type;
      return ee === D ? j(
        T,
        E,
        w.props.children,
        B,
        w.key
      ) : E !== null && (E.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Se && en(ee) === E.type) ? (E = a(E, w.props), Ea(E, w), E.return = T, E) : (E = _u(
        w.type,
        w.key,
        w.props,
        null,
        T.mode,
        B
      ), Ea(E, w), E.return = T, E);
    }
    function C(T, E, w, B) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== w.containerInfo || E.stateNode.implementation !== w.implementation ? (E = Ar(w, T.mode, B), E.return = T, E) : (E = a(E, w.children || []), E.return = T, E);
    }
    function j(T, E, w, B, ee) {
      return E === null || E.tag !== 7 ? (E = $l(
        w,
        T.mode,
        B,
        ee
      ), E.return = T, E) : (E = a(E, w), E.return = T, E);
    }
    function L(T, E, w) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Tr(
          "" + E,
          T.mode,
          w
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case _:
            return w = _u(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              w
            ), Ea(w, E), w.return = T, w;
          case U:
            return E = Ar(
              E,
              T.mode,
              w
            ), E.return = T, E;
          case Se:
            return E = en(E), L(T, E, w);
        }
        if (X(E) || Le(E))
          return E = $l(
            E,
            T.mode,
            w,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return L(T, ju(E), w);
        if (E.$$typeof === te)
          return L(
            T,
            Nu(T, E),
            w
          );
        Bu(T, E);
      }
      return null;
    }
    function O(T, E, w, B) {
      var ee = E !== null ? E.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return ee !== null ? null : h(T, E, "" + w, B);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            return w.key === ee ? v(T, E, w, B) : null;
          case U:
            return w.key === ee ? C(T, E, w, B) : null;
          case Se:
            return w = en(w), O(T, E, w, B);
        }
        if (X(w) || Le(w))
          return ee !== null ? null : j(T, E, w, B, null);
        if (typeof w.then == "function")
          return O(
            T,
            E,
            ju(w),
            B
          );
        if (w.$$typeof === te)
          return O(
            T,
            E,
            Nu(T, w),
            B
          );
        Bu(T, w);
      }
      return null;
    }
    function M(T, E, w, B, ee) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return T = T.get(w) || null, h(E, T, "" + B, ee);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _:
            return T = T.get(
              B.key === null ? w : B.key
            ) || null, v(E, T, B, ee);
          case U:
            return T = T.get(
              B.key === null ? w : B.key
            ) || null, C(E, T, B, ee);
          case Se:
            return B = en(B), M(
              T,
              E,
              w,
              B,
              ee
            );
        }
        if (X(B) || Le(B))
          return T = T.get(w) || null, j(E, T, B, ee, null);
        if (typeof B.then == "function")
          return M(
            T,
            E,
            w,
            ju(B),
            ee
          );
        if (B.$$typeof === te)
          return M(
            T,
            E,
            w,
            Nu(E, B),
            ee
          );
        Bu(E, B);
      }
      return null;
    }
    function k(T, E, w, B) {
      for (var ee = null, ve = null, $ = E, ce = E = 0, ye = null; $ !== null && ce < w.length; ce++) {
        $.index > ce ? (ye = $, $ = null) : ye = $.sibling;
        var be = O(
          T,
          $,
          w[ce],
          B
        );
        if (be === null) {
          $ === null && ($ = ye);
          break;
        }
        e && $ && be.alternate === null && t(T, $), E = i(be, E, ce), ve === null ? ee = be : ve.sibling = be, ve = be, $ = ye;
      }
      if (ce === w.length)
        return l(T, $), ge && el(T, ce), ee;
      if ($ === null) {
        for (; ce < w.length; ce++)
          $ = L(T, w[ce], B), $ !== null && (E = i(
            $,
            E,
            ce
          ), ve === null ? ee = $ : ve.sibling = $, ve = $);
        return ge && el(T, ce), ee;
      }
      for ($ = n($); ce < w.length; ce++)
        ye = M(
          $,
          T,
          ce,
          w[ce],
          B
        ), ye !== null && (e && ye.alternate !== null && $.delete(
          ye.key === null ? ce : ye.key
        ), E = i(
          ye,
          E,
          ce
        ), ve === null ? ee = ye : ve.sibling = ye, ve = ye);
      return e && $.forEach(function(Xl) {
        return t(T, Xl);
      }), ge && el(T, ce), ee;
    }
    function le(T, E, w, B) {
      if (w == null) throw Error(o(151));
      for (var ee = null, ve = null, $ = E, ce = E = 0, ye = null, be = w.next(); $ !== null && !be.done; ce++, be = w.next()) {
        $.index > ce ? (ye = $, $ = null) : ye = $.sibling;
        var Xl = O(T, $, be.value, B);
        if (Xl === null) {
          $ === null && ($ = ye);
          break;
        }
        e && $ && Xl.alternate === null && t(T, $), E = i(Xl, E, ce), ve === null ? ee = Xl : ve.sibling = Xl, ve = Xl, $ = ye;
      }
      if (be.done)
        return l(T, $), ge && el(T, ce), ee;
      if ($ === null) {
        for (; !be.done; ce++, be = w.next())
          be = L(T, be.value, B), be !== null && (E = i(be, E, ce), ve === null ? ee = be : ve.sibling = be, ve = be);
        return ge && el(T, ce), ee;
      }
      for ($ = n($); !be.done; ce++, be = w.next())
        be = M($, T, ce, be.value, B), be !== null && (e && be.alternate !== null && $.delete(be.key === null ? ce : be.key), E = i(be, E, ce), ve === null ? ee = be : ve.sibling = be, ve = be);
      return e && $.forEach(function(Y1) {
        return t(T, Y1);
      }), ge && el(T, ce), ee;
    }
    function _e(T, E, w, B) {
      if (typeof w == "object" && w !== null && w.type === D && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case _:
            e: {
              for (var ee = w.key; E !== null; ) {
                if (E.key === ee) {
                  if (ee = w.type, ee === D) {
                    if (E.tag === 7) {
                      l(
                        T,
                        E.sibling
                      ), B = a(
                        E,
                        w.props.children
                      ), B.return = T, T = B;
                      break e;
                    }
                  } else if (E.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Se && en(ee) === E.type) {
                    l(
                      T,
                      E.sibling
                    ), B = a(E, w.props), Ea(B, w), B.return = T, T = B;
                    break e;
                  }
                  l(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              w.type === D ? (B = $l(
                w.props.children,
                T.mode,
                B,
                w.key
              ), B.return = T, T = B) : (B = _u(
                w.type,
                w.key,
                w.props,
                null,
                T.mode,
                B
              ), Ea(B, w), B.return = T, T = B);
            }
            return f(T);
          case U:
            e: {
              for (ee = w.key; E !== null; ) {
                if (E.key === ee)
                  if (E.tag === 4 && E.stateNode.containerInfo === w.containerInfo && E.stateNode.implementation === w.implementation) {
                    l(
                      T,
                      E.sibling
                    ), B = a(E, w.children || []), B.return = T, T = B;
                    break e;
                  } else {
                    l(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              B = Ar(w, T.mode, B), B.return = T, T = B;
            }
            return f(T);
          case Se:
            return w = en(w), _e(
              T,
              E,
              w,
              B
            );
        }
        if (X(w))
          return k(
            T,
            E,
            w,
            B
          );
        if (Le(w)) {
          if (ee = Le(w), typeof ee != "function") throw Error(o(150));
          return w = ee.call(w), le(
            T,
            E,
            w,
            B
          );
        }
        if (typeof w.then == "function")
          return _e(
            T,
            E,
            ju(w),
            B
          );
        if (w.$$typeof === te)
          return _e(
            T,
            E,
            Nu(T, w),
            B
          );
        Bu(T, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, E !== null && E.tag === 6 ? (l(T, E.sibling), B = a(E, w), B.return = T, T = B) : (l(T, E), B = Tr(w, T.mode, B), B.return = T, T = B), f(T)) : l(T, E);
    }
    return function(T, E, w, B) {
      try {
        Sa = 0;
        var ee = _e(
          T,
          E,
          w,
          B
        );
        return Un = null, ee;
      } catch ($) {
        if ($ === Dn || $ === Du) throw $;
        var ve = bt(29, $, null, T.mode);
        return ve.lanes = B, ve.return = T, ve;
      }
    };
  }
  var ln = tf(!0), lf = tf(!1), Tl = !1;
  function Hr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Lr(e, t) {
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
  function wl(e, t, l) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (n = n.shared, (Ee & 2) !== 0) {
      var a = n.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), n.pending = t, t = Cu(e), qo(e, null, l), t;
    }
    return wu(e, n, t, l), Cu(e);
  }
  function xa(e, t, l) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, ks(e, l);
    }
  }
  function qr(e, t) {
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
  var Yr = !1;
  function Ra() {
    if (Yr) {
      var e = Mn;
      if (e !== null) throw e;
    }
  }
  function Ta(e, t, l, n) {
    Yr = !1;
    var a = e.updateQueue;
    Tl = !1;
    var i = a.firstBaseUpdate, f = a.lastBaseUpdate, h = a.shared.pending;
    if (h !== null) {
      a.shared.pending = null;
      var v = h, C = v.next;
      v.next = null, f === null ? i = C : f.next = C, f = v;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, h = j.lastBaseUpdate, h !== f && (h === null ? j.firstBaseUpdate = C : h.next = C, j.lastBaseUpdate = v));
    }
    if (i !== null) {
      var L = a.baseState;
      f = 0, j = C = v = null, h = i;
      do {
        var O = h.lane & -536870913, M = O !== h.lane;
        if (M ? (he & O) === O : (n & O) === O) {
          O !== 0 && O === Nn && (Yr = !0), j !== null && (j = j.next = {
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, le = h;
            O = t;
            var _e = l;
            switch (le.tag) {
              case 1:
                if (k = le.payload, typeof k == "function") {
                  L = k.call(_e, L, O);
                  break e;
                }
                L = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = le.payload, O = typeof k == "function" ? k.call(_e, L, O) : k, O == null) break e;
                L = N({}, L, O);
                break e;
              case 2:
                Tl = !0;
            }
          }
          O = h.callback, O !== null && (e.flags |= 64, M && (e.flags |= 8192), M = a.callbacks, M === null ? a.callbacks = [O] : M.push(O));
        } else
          M = {
            lane: O,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          }, j === null ? (C = j = M, v = L) : j = j.next = M, f |= O;
        if (h = h.next, h === null) {
          if (h = a.shared.pending, h === null)
            break;
          M = h, h = M.next, M.next = null, a.lastBaseUpdate = M, a.shared.pending = null;
        }
      } while (!0);
      j === null && (v = L), a.baseState = v, a.firstBaseUpdate = C, a.lastBaseUpdate = j, i === null && (a.shared.lanes = 0), Nl |= f, e.lanes = f, e.memoizedState = L;
    }
  }
  function nf(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function af(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++)
        nf(l[e], t);
  }
  var jn = S(null), Hu = S(0);
  function uf(e, t) {
    e = fl, Z(Hu, e), Z(jn, t), fl = e | t.baseLanes;
  }
  function Xr() {
    Z(Hu, fl), Z(jn, jn.current);
  }
  function Gr() {
    fl = Hu.current, H(jn), H(Hu);
  }
  var St = S(null), Mt = null;
  function Cl(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(St, e), Mt === null && (t === null || jn.current !== null || t.memoizedState !== null) && (Mt = e);
  }
  function Vr(e) {
    Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e);
  }
  function rf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(St, e), Mt === null && (Mt = e)) : _l();
  }
  function _l() {
    Z(Xe, Xe.current), Z(St, St.current);
  }
  function Et(e) {
    H(St), Mt === e && (Mt = null), H(Xe);
  }
  var Xe = S(0);
  function Lu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || $c(l) || Wc(l)))
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
  var nl = 0, ie = null, we = null, Qe = null, qu = !1, Bn = !1, nn = !1, Yu = 0, Aa = 0, Hn = null, zy = 0;
  function qe() {
    throw Error(o(321));
  }
  function Qr(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!vt(e[l], t[l])) return !1;
    return !0;
  }
  function Zr(e, t, l, n, a, i) {
    return nl = i, ie = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, q.H = e === null || e.memoizedState === null ? Qf : ic, nn = !1, i = l(n, a), nn = !1, Bn && (i = sf(
      t,
      l,
      n,
      a
    )), cf(e), i;
  }
  function cf(e) {
    q.H = _a;
    var t = we !== null && we.next !== null;
    if (nl = 0, Qe = we = ie = null, qu = !1, Aa = 0, Hn = null, t) throw Error(o(300));
    e === null || Ze || (e = e.dependencies, e !== null && zu(e) && (Ze = !0));
  }
  function sf(e, t, l, n) {
    ie = e;
    var a = 0;
    do {
      if (Bn && (Hn = null), Aa = 0, Bn = !1, 25 <= a) throw Error(o(301));
      if (a += 1, Qe = we = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      q.H = Zf, i = t(l, n);
    } while (Bn);
    return i;
  }
  function Ny() {
    var e = q.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? wa(t) : t, e = e.useState()[0], (we !== null ? we.memoizedState : null) !== e && (ie.flags |= 1024), t;
  }
  function kr() {
    var e = Yu !== 0;
    return Yu = 0, e;
  }
  function Kr(e, t, l) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
  }
  function Jr(e) {
    if (qu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      qu = !1;
    }
    nl = 0, Qe = we = ie = null, Bn = !1, Aa = Yu = 0, Hn = null;
  }
  function ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Qe === null ? ie.memoizedState = Qe = e : Qe = Qe.next = e, Qe;
  }
  function Ge() {
    if (we === null) {
      var e = ie.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = we.next;
    var t = Qe === null ? ie.memoizedState : Qe.next;
    if (t !== null)
      Qe = t, we = e;
    else {
      if (e === null)
        throw ie.alternate === null ? Error(o(467)) : Error(o(310));
      we = e, e = {
        memoizedState: we.memoizedState,
        baseState: we.baseState,
        baseQueue: we.baseQueue,
        queue: we.queue,
        next: null
      }, Qe === null ? ie.memoizedState = Qe = e : Qe = Qe.next = e;
    }
    return Qe;
  }
  function Xu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wa(e) {
    var t = Aa;
    return Aa += 1, Hn === null && (Hn = []), e = Io(Hn, e, t), t = ie, (Qe === null ? t.memoizedState : Qe.next) === null && (t = t.alternate, q.H = t === null || t.memoizedState === null ? Qf : ic), e;
  }
  function Gu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return wa(e);
      if (e.$$typeof === te) return Pe(e);
    }
    throw Error(o(438, String(e)));
  }
  function $r(e) {
    var t = null, l = ie.updateQueue;
    if (l !== null && (t = l.memoCache), t == null) {
      var n = ie.alternate;
      n !== null && (n = n.updateQueue, n !== null && (n = n.memoCache, n != null && (t = {
        data: n.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), l === null && (l = Xu(), ie.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0)
      for (l = t.data[t.index] = Array(e), n = 0; n < e; n++)
        l[n] = lt;
    return t.index++, l;
  }
  function al(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Vu(e) {
    var t = Ge();
    return Wr(t, we, e);
  }
  function Wr(e, t, l) {
    var n = e.queue;
    if (n === null) throw Error(o(311));
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
      var h = f = null, v = null, C = t, j = !1;
      do {
        var L = C.lane & -536870913;
        if (L !== C.lane ? (he & L) === L : (nl & L) === L) {
          var O = C.revertLane;
          if (O === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), L === Nn && (j = !0);
          else if ((nl & O) === O) {
            C = C.next, O === Nn && (j = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, v === null ? (h = v = L, f = i) : v = v.next = L, ie.lanes |= O, Nl |= O;
          L = C.action, nn && l(i, L), i = C.hasEagerState ? C.eagerState : l(i, L);
        } else
          O = {
            lane: L,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (h = v = O, f = i) : v = v.next = O, ie.lanes |= L, Nl |= L;
        C = C.next;
      } while (C !== null && C !== t);
      if (v === null ? f = i : v.next = h, !vt(i, e.memoizedState) && (Ze = !0, j && (l = Mn, l !== null)))
        throw l;
      e.memoizedState = i, e.baseState = f, e.baseQueue = v, n.lastRenderedState = i;
    }
    return a === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
  }
  function Fr(e) {
    var t = Ge(), l = t.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = e;
    var n = l.dispatch, a = l.pending, i = t.memoizedState;
    if (a !== null) {
      l.pending = null;
      var f = a = a.next;
      do
        i = e(i, f.action), f = f.next;
      while (f !== a);
      vt(i, t.memoizedState) || (Ze = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), l.lastRenderedState = i;
    }
    return [i, n];
  }
  function of(e, t, l) {
    var n = ie, a = Ge(), i = ge;
    if (i) {
      if (l === void 0) throw Error(o(407));
      l = l();
    } else l = t();
    var f = !vt(
      (we || a).memoizedState,
      l
    );
    if (f && (a.memoizedState = l, Ze = !0), a = a.queue, ec(mf.bind(null, n, a, e), [
      e
    ]), a.getSnapshot !== t || f || Qe !== null && Qe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Ln(
        9,
        { destroy: void 0 },
        df.bind(
          null,
          n,
          a,
          l,
          t
        ),
        null
      ), Oe === null) throw Error(o(349));
      i || (nl & 127) !== 0 || ff(n, t, l);
    }
    return l;
  }
  function ff(e, t, l) {
    e.flags |= 16384, e = { getSnapshot: t, value: l }, t = ie.updateQueue, t === null ? (t = Xu(), ie.updateQueue = t, t.stores = [e]) : (l = t.stores, l === null ? t.stores = [e] : l.push(e));
  }
  function df(e, t, l, n) {
    t.value = l, t.getSnapshot = n, hf(t) && yf(e);
  }
  function mf(e, t, l) {
    return l(function() {
      hf(t) && yf(e);
    });
  }
  function hf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !vt(e, l);
    } catch {
      return !0;
    }
  }
  function yf(e) {
    var t = Jl(e, 2);
    t !== null && dt(t, e, 2);
  }
  function Ir(e) {
    var t = ut();
    if (typeof e == "function") {
      var l = e;
      if (e = l(), nn) {
        pl(!0);
        try {
          l();
        } finally {
          pl(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: al,
      lastRenderedState: e
    }, t;
  }
  function gf(e, t, l, n) {
    return e.baseState = l, Wr(
      e,
      we,
      typeof n == "function" ? n : al
    );
  }
  function My(e, t, l, n, a) {
    if (ku(e)) throw Error(o(485));
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
      q.T !== null ? l(!0) : i.isTransition = !1, n(i), l = t.pending, l === null ? (i.next = t.pending = i, pf(t, i)) : (i.next = l.next, t.pending = l.next = i);
    }
  }
  function pf(e, t) {
    var l = t.action, n = t.payload, a = e.state;
    if (t.isTransition) {
      var i = q.T, f = {};
      q.T = f;
      try {
        var h = l(a, n), v = q.S;
        v !== null && v(f, h), vf(e, t, h);
      } catch (C) {
        Pr(e, t, C);
      } finally {
        i !== null && f.types !== null && (i.types = f.types), q.T = i;
      }
    } else
      try {
        i = l(a, n), vf(e, t, i);
      } catch (C) {
        Pr(e, t, C);
      }
  }
  function vf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(
      function(n) {
        bf(e, t, n);
      },
      function(n) {
        return Pr(e, t, n);
      }
    ) : bf(e, t, l);
  }
  function bf(e, t, l) {
    t.status = "fulfilled", t.value = l, Sf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, pf(e, l)));
  }
  function Pr(e, t, l) {
    var n = e.pending;
    if (e.pending = null, n !== null) {
      n = n.next;
      do
        t.status = "rejected", t.reason = l, Sf(t), t = t.next;
      while (t !== n);
    }
    e.action = null;
  }
  function Sf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Ef(e, t) {
    return t;
  }
  function xf(e, t) {
    if (ge) {
      var l = Oe.formState;
      if (l !== null) {
        e: {
          var n = ie;
          if (ge) {
            if (Ne) {
              t: {
                for (var a = Ne, i = Nt; a.nodeType !== 8; ) {
                  if (!i) {
                    a = null;
                    break t;
                  }
                  if (a = Dt(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                i = a.data, a = i === "F!" || i === "F" ? a : null;
              }
              if (a) {
                Ne = Dt(
                  a.nextSibling
                ), n = a.data === "F!";
                break e;
              }
            }
            xl(n);
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
      lastRenderedReducer: Ef,
      lastRenderedState: t
    }, l.queue = n, l = Xf.bind(
      null,
      ie,
      n
    ), n.dispatch = l, n = Ir(!1), i = uc.bind(
      null,
      ie,
      !1,
      n.queue
    ), n = ut(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, n.queue = a, l = My.bind(
      null,
      ie,
      a,
      i,
      l
    ), a.dispatch = l, n.memoizedState = e, [t, l, !1];
  }
  function Rf(e) {
    var t = Ge();
    return Tf(t, we, e);
  }
  function Tf(e, t, l) {
    if (t = Wr(
      e,
      t,
      Ef
    )[0], e = Vu(al)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var n = wa(t);
      } catch (f) {
        throw f === Dn ? Du : f;
      }
    else n = t;
    t = Ge();
    var a = t.queue, i = a.dispatch;
    return l !== t.memoizedState && (ie.flags |= 2048, Ln(
      9,
      { destroy: void 0 },
      Dy.bind(null, a, l),
      null
    )), [n, i, e];
  }
  function Dy(e, t) {
    e.action = t;
  }
  function Af(e) {
    var t = Ge(), l = we;
    if (l !== null)
      return Tf(t, l, e);
    Ge(), t = t.memoizedState, l = Ge();
    var n = l.queue.dispatch;
    return l.memoizedState = e, [t, n, !1];
  }
  function Ln(e, t, l, n) {
    return e = { tag: e, create: l, deps: n, inst: t, next: null }, t = ie.updateQueue, t === null && (t = Xu(), ie.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (n = l.next, l.next = e, e.next = n, t.lastEffect = e), e;
  }
  function wf() {
    return Ge().memoizedState;
  }
  function Qu(e, t, l, n) {
    var a = ut();
    ie.flags |= e, a.memoizedState = Ln(
      1 | t,
      { destroy: void 0 },
      l,
      n === void 0 ? null : n
    );
  }
  function Zu(e, t, l, n) {
    var a = Ge();
    n = n === void 0 ? null : n;
    var i = a.memoizedState.inst;
    we !== null && n !== null && Qr(n, we.memoizedState.deps) ? a.memoizedState = Ln(t, i, l, n) : (ie.flags |= e, a.memoizedState = Ln(
      1 | t,
      i,
      l,
      n
    ));
  }
  function Cf(e, t) {
    Qu(8390656, 8, e, t);
  }
  function ec(e, t) {
    Zu(2048, 8, e, t);
  }
  function Uy(e) {
    ie.flags |= 4;
    var t = ie.updateQueue;
    if (t === null)
      t = Xu(), ie.updateQueue = t, t.events = [e];
    else {
      var l = t.events;
      l === null ? t.events = [e] : l.push(e);
    }
  }
  function _f(e) {
    var t = Ge().memoizedState;
    return Uy({ ref: t, nextImpl: e }), function() {
      if ((Ee & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Of(e, t) {
    return Zu(4, 2, e, t);
  }
  function zf(e, t) {
    return Zu(4, 4, e, t);
  }
  function Nf(e, t) {
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
  function Mf(e, t, l) {
    l = l != null ? l.concat([e]) : null, Zu(4, 4, Nf.bind(null, t, e), l);
  }
  function tc() {
  }
  function Df(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    return t !== null && Qr(t, n[1]) ? n[0] : (l.memoizedState = [e, t], e);
  }
  function Uf(e, t) {
    var l = Ge();
    t = t === void 0 ? null : t;
    var n = l.memoizedState;
    if (t !== null && Qr(t, n[1]))
      return n[0];
    if (n = e(), nn) {
      pl(!0);
      try {
        e();
      } finally {
        pl(!1);
      }
    }
    return l.memoizedState = [n, t], n;
  }
  function lc(e, t, l) {
    return l === void 0 || (nl & 1073741824) !== 0 && (he & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = jd(), ie.lanes |= e, Nl |= e, l);
  }
  function jf(e, t, l, n) {
    return vt(l, t) ? l : jn.current !== null ? (e = lc(e, l, n), vt(e, t) || (Ze = !0), e) : (nl & 42) === 0 || (nl & 1073741824) !== 0 && (he & 261930) === 0 ? (Ze = !0, e.memoizedState = l) : (e = jd(), ie.lanes |= e, Nl |= e, t);
  }
  function Bf(e, t, l, n, a) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var f = q.T, h = {};
    q.T = h, uc(e, !1, t, l);
    try {
      var v = a(), C = q.S;
      if (C !== null && C(h, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var j = Oy(
          v,
          n
        );
        Ca(
          e,
          t,
          j,
          Tt(e)
        );
      } else
        Ca(
          e,
          t,
          n,
          Tt(e)
        );
    } catch (L) {
      Ca(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        Tt()
      );
    } finally {
      G.p = i, f !== null && h.types !== null && (f.types = h.types), q.T = f;
    }
  }
  function jy() {
  }
  function nc(e, t, l, n) {
    if (e.tag !== 5) throw Error(o(476));
    var a = Hf(e).queue;
    Bf(
      e,
      a,
      t,
      I,
      l === null ? jy : function() {
        return Lf(e), l(n);
      }
    );
  }
  function Hf(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: al,
        lastRenderedState: I
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
        lastRenderedReducer: al,
        lastRenderedState: l
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Lf(e) {
    var t = Hf(e);
    t.next === null && (t = e.alternate.memoizedState), Ca(
      e,
      t.next.queue,
      {},
      Tt()
    );
  }
  function ac() {
    return Pe(Qa);
  }
  function qf() {
    return Ge().memoizedState;
  }
  function Yf() {
    return Ge().memoizedState;
  }
  function By(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = Tt();
          e = Al(l);
          var n = wl(t, e, l);
          n !== null && (dt(n, t, l), xa(n, t, l)), t = { cache: Dr() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Hy(e, t, l) {
    var n = Tt();
    l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ku(e) ? Gf(t, l) : (l = xr(e, t, l, n), l !== null && (dt(l, e, n), Vf(l, t, n)));
  }
  function Xf(e, t, l) {
    var n = Tt();
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
    if (ku(e)) Gf(t, a);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var f = t.lastRenderedState, h = i(f, l);
          if (a.hasEagerState = !0, a.eagerState = h, vt(h, f))
            return wu(e, t, a, 0), Oe === null && Au(), !1;
        } catch {
        }
      if (l = xr(e, t, a, n), l !== null)
        return dt(l, e, n), Vf(l, t, n), !0;
    }
    return !1;
  }
  function uc(e, t, l, n) {
    if (n = {
      lane: 2,
      revertLane: Hc(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ku(e)) {
      if (t) throw Error(o(479));
    } else
      t = xr(
        e,
        l,
        n,
        2
      ), t !== null && dt(t, e, 2);
  }
  function ku(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie;
  }
  function Gf(e, t) {
    Bn = qu = !0;
    var l = e.pending;
    l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
  }
  function Vf(e, t, l) {
    if ((l & 4194048) !== 0) {
      var n = t.lanes;
      n &= e.pendingLanes, l |= n, t.lanes = l, ks(e, l);
    }
  }
  var _a = {
    readContext: Pe,
    use: Gu,
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
  _a.useEffectEvent = qe;
  var Qf = {
    readContext: Pe,
    use: Gu,
    useCallback: function(e, t) {
      return ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Pe,
    useEffect: Cf,
    useImperativeHandle: function(e, t, l) {
      l = l != null ? l.concat([e]) : null, Qu(
        4194308,
        4,
        Nf.bind(null, t, e),
        l
      );
    },
    useLayoutEffect: function(e, t) {
      return Qu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Qu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var l = ut();
      t = t === void 0 ? null : t;
      var n = e();
      if (nn) {
        pl(!0);
        try {
          e();
        } finally {
          pl(!1);
        }
      }
      return l.memoizedState = [n, t], n;
    },
    useReducer: function(e, t, l) {
      var n = ut();
      if (l !== void 0) {
        var a = l(t);
        if (nn) {
          pl(!0);
          try {
            l(t);
          } finally {
            pl(!1);
          }
        }
      } else a = t;
      return n.memoizedState = n.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, n.queue = e, e = e.dispatch = Hy.bind(
        null,
        ie,
        e
      ), [n.memoizedState, e];
    },
    useRef: function(e) {
      var t = ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ir(e);
      var t = e.queue, l = Xf.bind(null, ie, t);
      return t.dispatch = l, [e.memoizedState, l];
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var l = ut();
      return lc(l, e, t);
    },
    useTransition: function() {
      var e = Ir(!1);
      return e = Bf.bind(
        null,
        ie,
        e.queue,
        !0,
        !1
      ), ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, l) {
      var n = ie, a = ut();
      if (ge) {
        if (l === void 0)
          throw Error(o(407));
        l = l();
      } else {
        if (l = t(), Oe === null)
          throw Error(o(349));
        (he & 127) !== 0 || ff(n, t, l);
      }
      a.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return a.queue = i, Cf(mf.bind(null, n, i, e), [
        e
      ]), n.flags |= 2048, Ln(
        9,
        { destroy: void 0 },
        df.bind(
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
      var e = ut(), t = Oe.identifierPrefix;
      if (ge) {
        var l = Qt, n = Vt;
        l = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Yu++, 0 < l && (t += "H" + l.toString(32)), t += "_";
      } else
        l = zy++, t = "_" + t + "r_" + l.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: xf,
    useActionState: xf,
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
      return t.queue = l, t = uc.bind(
        null,
        ie,
        !0,
        l
      ), l.dispatch = t, [e, t];
    },
    useMemoCache: $r,
    useCacheRefresh: function() {
      return ut().memoizedState = By.bind(
        null,
        ie
      );
    },
    useEffectEvent: function(e) {
      var t = ut(), l = { impl: e };
      return t.memoizedState = l, function() {
        if ((Ee & 2) !== 0)
          throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
  }, ic = {
    readContext: Pe,
    use: Gu,
    useCallback: Df,
    useContext: Pe,
    useEffect: ec,
    useImperativeHandle: Mf,
    useInsertionEffect: Of,
    useLayoutEffect: zf,
    useMemo: Uf,
    useReducer: Vu,
    useRef: wf,
    useState: function() {
      return Vu(al);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return jf(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Vu(al)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : wa(e),
        t
      ];
    },
    useSyncExternalStore: of,
    useId: qf,
    useHostTransitionStatus: ac,
    useFormState: Rf,
    useActionState: Rf,
    useOptimistic: function(e, t) {
      var l = Ge();
      return gf(l, we, e, t);
    },
    useMemoCache: $r,
    useCacheRefresh: Yf
  };
  ic.useEffectEvent = _f;
  var Zf = {
    readContext: Pe,
    use: Gu,
    useCallback: Df,
    useContext: Pe,
    useEffect: ec,
    useImperativeHandle: Mf,
    useInsertionEffect: Of,
    useLayoutEffect: zf,
    useMemo: Uf,
    useReducer: Fr,
    useRef: wf,
    useState: function() {
      return Fr(al);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var l = Ge();
      return we === null ? lc(l, e, t) : jf(
        l,
        we.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Fr(al)[0], t = Ge().memoizedState;
      return [
        typeof e == "boolean" ? e : wa(e),
        t
      ];
    },
    useSyncExternalStore: of,
    useId: qf,
    useHostTransitionStatus: ac,
    useFormState: Af,
    useActionState: Af,
    useOptimistic: function(e, t) {
      var l = Ge();
      return we !== null ? gf(l, we, e, t) : (l.baseState = e, [e, l.queue.dispatch]);
    },
    useMemoCache: $r,
    useCacheRefresh: Yf
  };
  Zf.useEffectEvent = _f;
  function rc(e, t, l, n) {
    t = e.memoizedState, l = l(n, t), l = l == null ? t : N({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var cc = {
    enqueueSetState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = Al(n);
      a.payload = t, l != null && (a.callback = l), t = wl(e, a, n), t !== null && (dt(t, e, n), xa(t, e, n));
    },
    enqueueReplaceState: function(e, t, l) {
      e = e._reactInternals;
      var n = Tt(), a = Al(n);
      a.tag = 1, a.payload = t, l != null && (a.callback = l), t = wl(e, a, n), t !== null && (dt(t, e, n), xa(t, e, n));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var l = Tt(), n = Al(l);
      n.tag = 2, t != null && (n.callback = t), t = wl(e, n, l), t !== null && (dt(t, e, l), xa(t, e, l));
    }
  };
  function kf(e, t, l, n, a, i, f) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, i, f) : t.prototype && t.prototype.isPureReactComponent ? !ha(l, n) || !ha(a, i) : !0;
  }
  function Kf(e, t, l, n) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, n), t.state !== e && cc.enqueueReplaceState(t, t.state, null);
  }
  function an(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var n in t)
        n !== "ref" && (l[n] = t[n]);
    }
    if (e = e.defaultProps) {
      l === t && (l = N({}, l));
      for (var a in e)
        l[a] === void 0 && (l[a] = e[a]);
    }
    return l;
  }
  function Jf(e) {
    Tu(e);
  }
  function $f(e) {
    console.error(e);
  }
  function Wf(e) {
    Tu(e);
  }
  function Ku(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Ff(e, t, l) {
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
  function sc(e, t, l) {
    return l = Al(l), l.tag = 3, l.payload = { element: null }, l.callback = function() {
      Ku(e, t);
    }, l;
  }
  function If(e) {
    return e = Al(e), e.tag = 3, e;
  }
  function Pf(e, t, l, n) {
    var a = l.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var i = n.value;
      e.payload = function() {
        return a(i);
      }, e.callback = function() {
        Ff(t, l, n);
      };
    }
    var f = l.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
      Ff(t, l, n), typeof a != "function" && (Ml === null ? Ml = /* @__PURE__ */ new Set([this]) : Ml.add(this));
      var h = n.stack;
      this.componentDidCatch(n.value, {
        componentStack: h !== null ? h : ""
      });
    });
  }
  function Ly(e, t, l, n, a) {
    if (l.flags |= 32768, n !== null && typeof n == "object" && typeof n.then == "function") {
      if (t = l.alternate, t !== null && zn(
        t,
        l,
        a,
        !0
      ), l = St.current, l !== null) {
        switch (l.tag) {
          case 31:
          case 13:
            return Mt === null ? ui() : l.alternate === null && Ye === 0 && (Ye = 3), l.flags &= -257, l.flags |= 65536, l.lanes = a, n === Uu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([n]) : t.add(n), Uc(e, n, a)), !1;
          case 22:
            return l.flags |= 65536, n === Uu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([n])
            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([n]) : l.add(n)), Uc(e, n, a)), !1;
        }
        throw Error(o(435, l.tag));
      }
      return Uc(e, n, a), ui(), !1;
    }
    if (ge)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, n !== _r && (e = Error(o(422), { cause: n }), pa(_t(e, l)))) : (n !== _r && (t = Error(o(423), {
        cause: n
      }), pa(
        _t(t, l)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, n = _t(n, l), a = sc(
        e.stateNode,
        n,
        a
      ), qr(e, a), Ye !== 4 && (Ye = 2)), !1;
    var i = Error(o(520), { cause: n });
    if (i = _t(i, l), Ba === null ? Ba = [i] : Ba.push(i), Ye !== 4 && (Ye = 2), t === null) return !0;
    n = _t(n, l), l = t;
    do {
      switch (l.tag) {
        case 3:
          return l.flags |= 65536, e = a & -a, l.lanes |= e, e = sc(l.stateNode, n, e), qr(l, e), !1;
        case 1:
          if (t = l.type, i = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ml === null || !Ml.has(i))))
            return l.flags |= 65536, a &= -a, l.lanes |= a, a = If(a), Pf(
              a,
              e,
              l,
              n
            ), qr(l, a), !1;
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var oc = Error(o(461)), Ze = !1;
  function et(e, t, l, n) {
    t.child = e === null ? lf(t, null, l, n) : ln(
      t,
      e.child,
      l,
      n
    );
  }
  function ed(e, t, l, n, a) {
    l = l.render;
    var i = t.ref;
    if ("ref" in n) {
      var f = {};
      for (var h in n)
        h !== "ref" && (f[h] = n[h]);
    } else f = n;
    return Il(t), n = Zr(
      e,
      t,
      l,
      f,
      i,
      a
    ), h = kr(), e !== null && !Ze ? (Kr(e, t, a), ul(e, t, a)) : (ge && h && wr(t), t.flags |= 1, et(e, t, n, a), t.child);
  }
  function td(e, t, l, n, a) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" && !Rr(i) && i.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = i, ld(
        e,
        t,
        i,
        n,
        a
      )) : (e = _u(
        l.type,
        null,
        n,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !vc(e, a)) {
      var f = i.memoizedProps;
      if (l = l.compare, l = l !== null ? l : ha, l(f, n) && e.ref === t.ref)
        return ul(e, t, a);
    }
    return t.flags |= 1, e = Pt(i, n), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ld(e, t, l, n, a) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (ha(i, n) && e.ref === t.ref)
        if (Ze = !1, t.pendingProps = n = i, vc(e, a))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else
          return t.lanes = e.lanes, ul(e, t, a);
    }
    return fc(
      e,
      t,
      l,
      n,
      a
    );
  }
  function nd(e, t, l, n) {
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
        return ad(
          e,
          t,
          i,
          l,
          n
        );
      }
      if ((l & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Mu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? uf(t, i) : Xr(), rf(t);
      else
        return n = t.lanes = 536870912, ad(
          e,
          t,
          i !== null ? i.baseLanes | l : l,
          l,
          n
        );
    } else
      i !== null ? (Mu(t, i.cachePool), uf(t, i), _l(), t.memoizedState = null) : (e !== null && Mu(t, null), Xr(), _l());
    return et(e, t, a, l), t.child;
  }
  function Oa(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ad(e, t, l, n, a) {
    var i = jr();
    return i = i === null ? null : { parent: Ve._currentValue, pool: i }, t.memoizedState = {
      baseLanes: l,
      cachePool: i
    }, e !== null && Mu(t, null), Xr(), rf(t), e !== null && zn(e, t, n, !0), t.childLanes = a, null;
  }
  function Ju(e, t) {
    return t = Wu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ud(e, t, l) {
    return ln(t, e.child, null, l), e = Ju(t, t.pendingProps), e.flags |= 2, Et(t), t.memoizedState = null, e;
  }
  function qy(e, t, l) {
    var n = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (n.mode === "hidden")
          return e = Ju(t, n), t.lanes = 536870912, Oa(null, e);
        if (Vr(t), (e = Ne) ? (e = pm(
          e,
          Nt
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sl !== null ? { id: Vt, overflow: Qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Xo(e), l.return = t, t.child = l, Ie = t, Ne = null)) : e = null, e === null) throw xl(t);
        return t.lanes = 536870912, null;
      }
      return Ju(t, n);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (Vr(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = ud(
            e,
            t,
            l
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Ze || zn(e, t, l, !1), a = (l & e.childLanes) !== 0, Ze || a) {
        if (n = Oe, n !== null && (f = Ks(n, l), f !== 0 && f !== i.retryLane))
          throw i.retryLane = f, Jl(e, f), dt(n, e, f), oc;
        ui(), t = ud(
          e,
          t,
          l
        );
      } else
        e = i.treeContext, Ne = Dt(f.nextSibling), Ie = t, ge = !0, El = null, Nt = !1, e !== null && Qo(t, e), t = Ju(t, n), t.flags |= 4096;
      return t;
    }
    return e = Pt(e.child, {
      mode: n.mode,
      children: n.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function $u(e, t) {
    var l = t.ref;
    if (l === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object")
        throw Error(o(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function fc(e, t, l, n, a) {
    return Il(t), l = Zr(
      e,
      t,
      l,
      n,
      void 0,
      a
    ), n = kr(), e !== null && !Ze ? (Kr(e, t, a), ul(e, t, a)) : (ge && n && wr(t), t.flags |= 1, et(e, t, l, a), t.child);
  }
  function id(e, t, l, n, a, i) {
    return Il(t), t.updateQueue = null, l = sf(
      t,
      n,
      l,
      a
    ), cf(e), n = kr(), e !== null && !Ze ? (Kr(e, t, i), ul(e, t, i)) : (ge && n && wr(t), t.flags |= 1, et(e, t, l, i), t.child);
  }
  function rd(e, t, l, n, a) {
    if (Il(t), t.stateNode === null) {
      var i = wn, f = l.contextType;
      typeof f == "object" && f !== null && (i = Pe(f)), i = new l(n, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = cc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = n, i.state = t.memoizedState, i.refs = {}, Hr(t), f = l.contextType, i.context = typeof f == "object" && f !== null ? Pe(f) : wn, i.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (rc(
        t,
        l,
        f,
        n
      ), i.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (f = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), f !== i.state && cc.enqueueReplaceState(i, i.state, null), Ta(t, n, i, a), Ra(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !0;
    } else if (e === null) {
      i = t.stateNode;
      var h = t.memoizedProps, v = an(l, h);
      i.props = v;
      var C = i.context, j = l.contextType;
      f = wn, typeof j == "object" && j !== null && (f = Pe(j));
      var L = l.getDerivedStateFromProps;
      j = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, j || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (h || C !== f) && Kf(
        t,
        i,
        n,
        f
      ), Tl = !1;
      var O = t.memoizedState;
      i.state = O, Ta(t, n, i, a), Ra(), C = t.memoizedState, h || O !== C || Tl ? (typeof L == "function" && (rc(
        t,
        l,
        L,
        n
      ), C = t.memoizedState), (v = Tl || kf(
        t,
        l,
        v,
        n,
        O,
        C,
        f
      )) ? (j || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = n, t.memoizedState = C), i.props = n, i.state = C, i.context = f, n = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), n = !1);
    } else {
      i = t.stateNode, Lr(e, t), f = t.memoizedProps, j = an(l, f), i.props = j, L = t.pendingProps, O = i.context, C = l.contextType, v = wn, typeof C == "object" && C !== null && (v = Pe(C)), h = l.getDerivedStateFromProps, (C = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f !== L || O !== v) && Kf(
        t,
        i,
        n,
        v
      ), Tl = !1, O = t.memoizedState, i.state = O, Ta(t, n, i, a), Ra();
      var M = t.memoizedState;
      f !== L || O !== M || Tl || e !== null && e.dependencies !== null && zu(e.dependencies) ? (typeof h == "function" && (rc(
        t,
        l,
        h,
        n
      ), M = t.memoizedState), (j = Tl || kf(
        t,
        l,
        j,
        n,
        O,
        M,
        v
      ) || e !== null && e.dependencies !== null && zu(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(n, M, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        n,
        M,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = n, t.memoizedState = M), i.props = n, i.state = M, i.context = v, n = j) : (typeof i.componentDidUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), n = !1);
    }
    return i = n, $u(e, t), n = (t.flags & 128) !== 0, i || n ? (i = t.stateNode, l = n && typeof l.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && n ? (t.child = ln(
      t,
      e.child,
      null,
      a
    ), t.child = ln(
      t,
      null,
      l,
      a
    )) : et(e, t, l, a), t.memoizedState = i.state, e = t.child) : e = ul(
      e,
      t,
      a
    ), e;
  }
  function cd(e, t, l, n) {
    return Wl(), t.flags |= 256, et(e, t, l, n), t.child;
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mc(e) {
    return { baseLanes: e, cachePool: Wo() };
  }
  function hc(e, t, l) {
    return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Rt), e;
  }
  function sd(e, t, l) {
    var n = t.pendingProps, a = !1, i = (t.flags & 128) !== 0, f;
    if ((f = i) || (f = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), f && (a = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Cl(t) : _l(), (e = Ne) ? (e = pm(
          e,
          Nt
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Sl !== null ? { id: Vt, overflow: Qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, l = Xo(e), l.return = t, t.child = l, Ie = t, Ne = null)) : e = null, e === null) throw xl(t);
        return Wc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var h = n.children;
      return n = n.fallback, a ? (_l(), a = t.mode, h = Wu(
        { mode: "hidden", children: h },
        a
      ), n = $l(
        n,
        a,
        l,
        null
      ), h.return = t, n.return = t, h.sibling = n, t.child = h, n = t.child, n.memoizedState = mc(l), n.childLanes = hc(
        e,
        f,
        l
      ), t.memoizedState = dc, Oa(null, n)) : (Cl(t), yc(t, h));
    }
    var v = e.memoizedState;
    if (v !== null && (h = v.dehydrated, h !== null)) {
      if (i)
        t.flags & 256 ? (Cl(t), t.flags &= -257, t = gc(
          e,
          t,
          l
        )) : t.memoizedState !== null ? (_l(), t.child = e.child, t.flags |= 128, t = null) : (_l(), h = n.fallback, a = t.mode, n = Wu(
          { mode: "visible", children: n.children },
          a
        ), h = $l(
          h,
          a,
          l,
          null
        ), h.flags |= 2, n.return = t, h.return = t, n.sibling = h, t.child = n, ln(
          t,
          e.child,
          null,
          l
        ), n = t.child, n.memoizedState = mc(l), n.childLanes = hc(
          e,
          f,
          l
        ), t.memoizedState = dc, t = Oa(null, n));
      else if (Cl(t), Wc(h)) {
        if (f = h.nextSibling && h.nextSibling.dataset, f) var C = f.dgst;
        f = C, n = Error(o(419)), n.stack = "", n.digest = f, pa({ value: n, source: null, stack: null }), t = gc(
          e,
          t,
          l
        );
      } else if (Ze || zn(e, t, l, !1), f = (l & e.childLanes) !== 0, Ze || f) {
        if (f = Oe, f !== null && (n = Ks(f, l), n !== 0 && n !== v.retryLane))
          throw v.retryLane = n, Jl(e, n), dt(f, e, n), oc;
        $c(h) || ui(), t = gc(
          e,
          t,
          l
        );
      } else
        $c(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = v.treeContext, Ne = Dt(
          h.nextSibling
        ), Ie = t, ge = !0, El = null, Nt = !1, e !== null && Qo(t, e), t = yc(
          t,
          n.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (_l(), h = n.fallback, a = t.mode, v = e.child, C = v.sibling, n = Pt(v, {
      mode: "hidden",
      children: n.children
    }), n.subtreeFlags = v.subtreeFlags & 65011712, C !== null ? h = Pt(
      C,
      h
    ) : (h = $l(
      h,
      a,
      l,
      null
    ), h.flags |= 2), h.return = t, n.return = t, n.sibling = h, t.child = n, Oa(null, n), n = t.child, h = e.child.memoizedState, h === null ? h = mc(l) : (a = h.cachePool, a !== null ? (v = Ve._currentValue, a = a.parent !== v ? { parent: v, pool: v } : a) : a = Wo(), h = {
      baseLanes: h.baseLanes | l,
      cachePool: a
    }), n.memoizedState = h, n.childLanes = hc(
      e,
      f,
      l
    ), t.memoizedState = dc, Oa(e.child, n)) : (Cl(t), l = e.child, e = l.sibling, l = Pt(l, {
      mode: "visible",
      children: n.children
    }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [e], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
  }
  function yc(e, t) {
    return t = Wu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Wu(e, t) {
    return e = bt(22, e, null, t), e.lanes = 0, e;
  }
  function gc(e, t, l) {
    return ln(t, e.child, null, l), e = yc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function od(e, t, l) {
    e.lanes |= t;
    var n = e.alternate;
    n !== null && (n.lanes |= t), Nr(e.return, t, l);
  }
  function pc(e, t, l, n, a, i) {
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
  function fd(e, t, l) {
    var n = t.pendingProps, a = n.revealOrder, i = n.tail;
    n = n.children;
    var f = Xe.current, h = (f & 2) !== 0;
    if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, Z(Xe, f), et(e, t, n, l), n = ge ? ga : 0, !h && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && od(e, l, t);
        else if (e.tag === 19)
          od(e, l, t);
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
          e = l.alternate, e !== null && Lu(e) === null && (a = l), l = l.sibling;
        l = a, l === null ? (a = t.child, t.child = null) : (a = l.sibling, l.sibling = null), pc(
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
          if (e = a.alternate, e !== null && Lu(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = l, l = a, a = e;
        }
        pc(
          t,
          !0,
          l,
          null,
          i,
          n
        );
        break;
      case "together":
        pc(
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
  function ul(e, t, l) {
    if (e !== null && (t.dependencies = e.dependencies), Nl |= t.lanes, (l & t.childLanes) === 0)
      if (e !== null) {
        if (zn(
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
      for (e = t.child, l = Pt(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; )
        e = e.sibling, l = l.sibling = Pt(e, e.pendingProps), l.return = t;
      l.sibling = null;
    }
    return t.child;
  }
  function vc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && zu(e)));
  }
  function Yy(e, t, l) {
    switch (t.tag) {
      case 3:
        ze(t, t.stateNode.containerInfo), Rl(t, Ve, e.memoizedState.cache), Wl();
        break;
      case 27:
      case 5:
        Ht(t);
        break;
      case 4:
        ze(t, t.stateNode.containerInfo);
        break;
      case 10:
        Rl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Vr(t), null;
        break;
      case 13:
        var n = t.memoizedState;
        if (n !== null)
          return n.dehydrated !== null ? (Cl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? sd(e, t, l) : (Cl(t), e = ul(
            e,
            t,
            l
          ), e !== null ? e.sibling : null);
        Cl(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (n = (l & t.childLanes) !== 0, n || (zn(
          e,
          t,
          l,
          !1
        ), n = (l & t.childLanes) !== 0), a) {
          if (n)
            return fd(
              e,
              t,
              l
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), Z(Xe, Xe.current), n) break;
        return null;
      case 22:
        return t.lanes = 0, nd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        Rl(t, Ve, e.memoizedState.cache);
    }
    return ul(e, t, l);
  }
  function dd(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Ze = !0;
      else {
        if (!vc(e, l) && (t.flags & 128) === 0)
          return Ze = !1, Yy(
            e,
            t,
            l
          );
        Ze = (e.flags & 131072) !== 0;
      }
    else
      Ze = !1, ge && (t.flags & 1048576) !== 0 && Vo(t, ga, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var n = t.pendingProps;
          if (e = en(t.elementType), t.type = e, typeof e == "function")
            Rr(e) ? (n = an(e, n), t.tag = 1, t = rd(
              null,
              t,
              e,
              n,
              l
            )) : (t.tag = 0, t = fc(
              null,
              t,
              e,
              n,
              l
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === W) {
                t.tag = 11, t = ed(
                  null,
                  t,
                  e,
                  n,
                  l
                );
                break e;
              } else if (a === F) {
                t.tag = 14, t = td(
                  null,
                  t,
                  e,
                  n,
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
        return fc(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 1:
        return n = t.type, a = an(
          n,
          t.pendingProps
        ), rd(
          e,
          t,
          n,
          a,
          l
        );
      case 3:
        e: {
          if (ze(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          n = t.pendingProps;
          var i = t.memoizedState;
          a = i.element, Lr(e, t), Ta(t, n, null, l);
          var f = t.memoizedState;
          if (n = f.cache, Rl(t, Ve, n), n !== i.cache && Mr(
            t,
            [Ve],
            l,
            !0
          ), Ra(), n = f.element, i.isDehydrated)
            if (i = {
              element: n,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = cd(
                e,
                t,
                n,
                l
              );
              break e;
            } else if (n !== a) {
              a = _t(
                Error(o(424)),
                t
              ), pa(a), t = cd(
                e,
                t,
                n,
                l
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Ne = Dt(e.firstChild), Ie = t, ge = !0, El = null, Nt = !0, l = lf(
                t,
                null,
                n,
                l
              ), t.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Wl(), n === a) {
              t = ul(
                e,
                t,
                l
              );
              break e;
            }
            et(e, t, n, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return $u(e, t), e === null ? (l = Rm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = l : ge || (l = t.type, e = t.pendingProps, n = di(
          fe.current
        ).createElement(l), n[Fe] = t, n[it] = e, tt(n, l, e), $e(n), t.stateNode = n) : t.memoizedState = Rm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ht(t), e === null && ge && (n = t.stateNode = Sm(
          t.type,
          t.pendingProps,
          fe.current
        ), Ie = t, Nt = !0, a = Ne, Bl(t.type) ? (Fc = a, Ne = Dt(n.firstChild)) : Ne = a), et(
          e,
          t,
          t.pendingProps.children,
          l
        ), $u(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = n = Ne) && (n = g1(
          n,
          t.type,
          t.pendingProps,
          Nt
        ), n !== null ? (t.stateNode = n, Ie = t, Ne = Dt(n.firstChild), Nt = !1, a = !0) : a = !1), a || xl(t)), Ht(t), a = t.type, i = t.pendingProps, f = e !== null ? e.memoizedProps : null, n = i.children, kc(a, i) ? n = null : f !== null && kc(a, f) && (t.flags |= 32), t.memoizedState !== null && (a = Zr(
          e,
          t,
          Ny,
          null,
          null,
          l
        ), Qa._currentValue = a), $u(e, t), et(e, t, n, l), t.child;
      case 6:
        return e === null && ge && ((e = l = Ne) && (l = p1(
          l,
          t.pendingProps,
          Nt
        ), l !== null ? (t.stateNode = l, Ie = t, Ne = null, e = !0) : e = !1), e || xl(t)), null;
      case 13:
        return sd(e, t, l);
      case 4:
        return ze(
          t,
          t.stateNode.containerInfo
        ), n = t.pendingProps, e === null ? t.child = ln(
          t,
          null,
          n,
          l
        ) : et(e, t, n, l), t.child;
      case 11:
        return ed(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 7:
        return et(
          e,
          t,
          t.pendingProps,
          l
        ), t.child;
      case 8:
        return et(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 12:
        return et(
          e,
          t,
          t.pendingProps.children,
          l
        ), t.child;
      case 10:
        return n = t.pendingProps, Rl(t, t.type, n.value), et(e, t, n.children, l), t.child;
      case 9:
        return a = t.type._context, n = t.pendingProps.children, Il(t), a = Pe(a), n = n(a), t.flags |= 1, et(e, t, n, l), t.child;
      case 14:
        return td(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 15:
        return ld(
          e,
          t,
          t.type,
          t.pendingProps,
          l
        );
      case 19:
        return fd(e, t, l);
      case 31:
        return qy(e, t, l);
      case 22:
        return nd(
          e,
          t,
          l,
          t.pendingProps
        );
      case 24:
        return Il(t), n = Pe(Ve), e === null ? (a = jr(), a === null && (a = Oe, i = Dr(), a.pooledCache = i, i.refCount++, i !== null && (a.pooledCacheLanes |= l), a = i), t.memoizedState = { parent: n, cache: a }, Hr(t), Rl(t, Ve, a)) : ((e.lanes & l) !== 0 && (Lr(e, t), Ta(t, null, null, l), Ra()), a = e.memoizedState, i = t.memoizedState, a.parent !== n ? (a = { parent: n, cache: n }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Rl(t, Ve, n)) : (n = i.cache, Rl(t, Ve, n), n !== a.cache && Mr(
          t,
          [Ve],
          l,
          !0
        ))), et(
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
  function il(e) {
    e.flags |= 4;
  }
  function bc(e, t, l, n, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (qd()) e.flags |= 8192;
        else
          throw tn = Uu, Br;
    } else e.flags &= -16777217;
  }
  function md(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !_m(t))
      if (qd()) e.flags |= 8192;
      else
        throw tn = Uu, Br;
  }
  function Fu(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Qs() : 536870912, e.lanes |= t, Gn |= t);
  }
  function za(e, t) {
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
  function Me(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, l = 0, n = 0;
    if (t)
      for (var a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags & 65011712, n |= a.flags & 65011712, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        l |= a.lanes | a.childLanes, n |= a.subtreeFlags, n |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= n, e.childLanes = l, t;
  }
  function Xy(e, t, l) {
    var n = t.pendingProps;
    switch (Cr(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Me(t), null;
      case 1:
        return Me(t), null;
      case 3:
        return l = t.stateNode, n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ll(Ve), Be(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (On(t) ? il(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Or())), Me(t), null;
      case 26:
        var a = t.type, i = t.memoizedState;
        return e === null ? (il(t), i !== null ? (Me(t), md(t, i)) : (Me(t), bc(
          t,
          a,
          null,
          n,
          l
        ))) : i ? i !== e.memoizedState ? (il(t), Me(t), md(t, i)) : (Me(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== n && il(t), Me(t), bc(
          t,
          a,
          e,
          n,
          l
        )), null;
      case 27:
        if (Jt(t), l = fe.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && il(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Me(t), null;
          }
          e = J.current, On(t) ? Zo(t) : (e = Sm(a, n, l), t.stateNode = e, il(t));
        }
        return Me(t), null;
      case 5:
        if (Jt(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== n && il(t);
        else {
          if (!n) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Me(t), null;
          }
          if (i = J.current, On(t))
            Zo(t);
          else {
            var f = di(
              fe.current
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
            i[Fe] = t, i[it] = n;
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
            e: switch (tt(i, a, n), a) {
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
            n && il(t);
          }
        }
        return Me(t), bc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          l
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== n && il(t);
        else {
          if (typeof n != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = fe.current, On(t)) {
            if (e = t.stateNode, l = t.memoizedProps, n = null, a = Ie, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  n = a.memoizedProps;
              }
            e[Fe] = t, e = !!(e.nodeValue === l || n !== null && n.suppressHydrationWarning === !0 || sm(e.nodeValue, l)), e || xl(t, !0);
          } else
            e = di(e).createTextNode(
              n
            ), e[Fe] = t, t.stateNode = e;
        }
        return Me(t), null;
      case 31:
        if (l = t.memoizedState, e === null || e.memoizedState !== null) {
          if (n = On(t), l !== null) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Fe] = t;
            } else
              Wl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), e = !1;
          } else
            l = Or(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
          if (!e)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Me(t), null;
      case 13:
        if (n = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = On(t), n !== null && n.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(o(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(o(317));
              a[Fe] = t;
            } else
              Wl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Me(t), a = !1;
          } else
            a = Or(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Et(t), t) : (Et(t), null);
        }
        return Et(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = n !== null, e = e !== null && e.memoizedState !== null, l && (n = t.child, a = null, n.alternate !== null && n.alternate.memoizedState !== null && n.alternate.memoizedState.cachePool !== null && (a = n.alternate.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== a && (n.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Fu(t, t.updateQueue), Me(t), null);
      case 4:
        return Be(), e === null && Xc(t.stateNode.containerInfo), Me(t), null;
      case 10:
        return ll(t.type), Me(t), null;
      case 19:
        if (H(Xe), n = t.memoizedState, n === null) return Me(t), null;
        if (a = (t.flags & 128) !== 0, i = n.rendering, i === null)
          if (a) za(n, !1);
          else {
            if (Ye !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Lu(e), i !== null) {
                  for (t.flags |= 128, za(n, !1), e = i.updateQueue, t.updateQueue = e, Fu(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; )
                    Yo(l, e), l = l.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && el(t, n.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null && yt() > li && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = Lu(i), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Fu(t, e), za(n, !0), n.tail === null && n.tailMode === "hidden" && !i.alternate && !ge)
                return Me(t), null;
            } else
              2 * yt() - n.renderingStartTime > li && l !== 536870912 && (t.flags |= 128, a = !0, za(n, !1), t.lanes = 4194304);
          n.isBackwards ? (i.sibling = t.child, t.child = i) : (e = n.last, e !== null ? e.sibling = i : t.child = i, n.last = i);
        }
        return n.tail !== null ? (e = n.tail, n.rendering = e, n.tail = e.sibling, n.renderingStartTime = yt(), e.sibling = null, l = Xe.current, Z(
          Xe,
          a ? l & 1 | 2 : l & 1
        ), ge && el(t, n.treeForkCount), e) : (Me(t), null);
      case 22:
      case 23:
        return Et(t), Gr(), n = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== n && (t.flags |= 8192) : n && (t.flags |= 8192), n ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Me(t), l = t.updateQueue, l !== null && Fu(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), n = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== l && (t.flags |= 2048), e !== null && H(Pl), null;
      case 24:
        return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), ll(Ve), Me(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Gy(e, t) {
    switch (Cr(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return ll(Ve), Be(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Jt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Et(t), t.alternate === null)
            throw Error(o(340));
          Wl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Et(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Wl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return H(Xe), null;
      case 4:
        return Be(), null;
      case 10:
        return ll(t.type), null;
      case 22:
      case 23:
        return Et(t), Gr(), e !== null && H(Pl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return ll(Ve), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function hd(e, t) {
    switch (Cr(t), t.tag) {
      case 3:
        ll(Ve), Be();
        break;
      case 26:
      case 27:
      case 5:
        Jt(t);
        break;
      case 4:
        Be();
        break;
      case 31:
        t.memoizedState !== null && Et(t);
        break;
      case 13:
        Et(t);
        break;
      case 19:
        H(Xe);
        break;
      case 10:
        ll(t.type);
        break;
      case 22:
      case 23:
        Et(t), Gr(), e !== null && H(Pl);
        break;
      case 24:
        ll(Ve);
    }
  }
  function Na(e, t) {
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
    } catch (h) {
      Te(t, t.return, h);
    }
  }
  function Ol(e, t, l) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var i = a.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            var f = n.inst, h = f.destroy;
            if (h !== void 0) {
              f.destroy = void 0, a = t;
              var v = l, C = h;
              try {
                C();
              } catch (j) {
                Te(
                  a,
                  v,
                  j
                );
              }
            }
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (j) {
      Te(t, t.return, j);
    }
  }
  function yd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        af(t, l);
      } catch (n) {
        Te(e, e.return, n);
      }
    }
  }
  function gd(e, t, l) {
    l.props = an(
      e.type,
      e.memoizedProps
    ), l.state = e.memoizedState;
    try {
      l.componentWillUnmount();
    } catch (n) {
      Te(e, t, n);
    }
  }
  function Ma(e, t) {
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
      Te(e, t, a);
    }
  }
  function Zt(e, t) {
    var l = e.ref, n = e.refCleanup;
    if (l !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (a) {
          Te(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (a) {
          Te(e, t, a);
        }
      else l.current = null;
  }
  function pd(e) {
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
      Te(e, e.return, a);
    }
  }
  function Sc(e, t, l) {
    try {
      var n = e.stateNode;
      o1(n, e.type, l, t), n[it] = t;
    } catch (a) {
      Te(e, e.return, a);
    }
  }
  function vd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Bl(e.type) || e.tag === 4;
  }
  function Ec(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || vd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Bl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xc(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Ft));
    else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null))
      for (xc(e, t, l), e = e.sibling; e !== null; )
        xc(e, t, l), e = e.sibling;
  }
  function Iu(e, t, l) {
    var n = e.tag;
    if (n === 5 || n === 6)
      e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (n !== 4 && (n === 27 && Bl(e.type) && (l = e.stateNode), e = e.child, e !== null))
      for (Iu(e, t, l), e = e.sibling; e !== null; )
        Iu(e, t, l), e = e.sibling;
  }
  function bd(e) {
    var t = e.stateNode, l = e.memoizedProps;
    try {
      for (var n = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      tt(t, n, l), t[Fe] = e, t[it] = l;
    } catch (i) {
      Te(e, e.return, i);
    }
  }
  var rl = !1, ke = !1, Rc = !1, Sd = typeof WeakSet == "function" ? WeakSet : Set, We = null;
  function Vy(e, t) {
    if (e = e.containerInfo, Qc = bi, e = No(e), gr(e)) {
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
            var f = 0, h = -1, v = -1, C = 0, j = 0, L = e, O = null;
            t: for (; ; ) {
              for (var M; L !== l || a !== 0 && L.nodeType !== 3 || (h = f + a), L !== i || n !== 0 && L.nodeType !== 3 || (v = f + n), L.nodeType === 3 && (f += L.nodeValue.length), (M = L.firstChild) !== null; )
                O = L, L = M;
              for (; ; ) {
                if (L === e) break t;
                if (O === l && ++C === a && (h = f), O === i && ++j === n && (v = f), (M = L.nextSibling) !== null) break;
                L = O, O = L.parentNode;
              }
              L = M;
            }
            l = h === -1 || v === -1 ? null : { start: h, end: v };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zc = { focusedElem: e, selectionRange: l }, bi = !1, We = t; We !== null; )
      if (t = We, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, We = e;
      else
        for (; We !== null; ) {
          switch (t = We, i = t.alternate, e = t.flags, t.tag) {
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
                  var k = an(
                    l.type,
                    a
                  );
                  e = n.getSnapshotBeforeUpdate(
                    k,
                    i
                  ), n.__reactInternalSnapshotBeforeUpdate = e;
                } catch (le) {
                  Te(
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
                  Jc(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Jc(e);
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
  function Ed(e, t, l) {
    var n = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        sl(e, l), n & 4 && Na(5, l);
        break;
      case 1:
        if (sl(e, l), n & 4)
          if (e = l.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (f) {
              Te(l, l.return, f);
            }
          else {
            var a = an(
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
              Te(
                l,
                l.return,
                f
              );
            }
          }
        n & 64 && yd(l), n & 512 && Ma(l, l.return);
        break;
      case 3:
        if (sl(e, l), n & 64 && (e = l.updateQueue, e !== null)) {
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
            af(e, t);
          } catch (f) {
            Te(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && n & 4 && bd(l);
      case 26:
      case 5:
        sl(e, l), t === null && n & 4 && pd(l), n & 512 && Ma(l, l.return);
        break;
      case 12:
        sl(e, l);
        break;
      case 31:
        sl(e, l), n & 4 && Td(e, l);
        break;
      case 13:
        sl(e, l), n & 4 && Ad(e, l), n & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = Iy.bind(
          null,
          l
        ), v1(e, l))));
        break;
      case 22:
        if (n = l.memoizedState !== null || rl, !n) {
          t = t !== null && t.memoizedState !== null || ke, a = rl;
          var i = ke;
          rl = n, (ke = t) && !i ? ol(
            e,
            l,
            (l.subtreeFlags & 8772) !== 0
          ) : sl(e, l), rl = a, ke = i;
        }
        break;
      case 30:
        break;
      default:
        sl(e, l);
    }
  }
  function xd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Pi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ue = null, ct = !1;
  function cl(e, t, l) {
    for (l = l.child; l !== null; )
      Rd(e, t, l), l = l.sibling;
  }
  function Rd(e, t, l) {
    if (gt && typeof gt.onCommitFiberUnmount == "function")
      try {
        gt.onCommitFiberUnmount(la, l);
      } catch {
      }
    switch (l.tag) {
      case 26:
        ke || Zt(l, t), cl(
          e,
          t,
          l
        ), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
        break;
      case 27:
        ke || Zt(l, t);
        var n = Ue, a = ct;
        Bl(l.type) && (Ue = l.stateNode, ct = !1), cl(
          e,
          t,
          l
        ), Xa(l.stateNode), Ue = n, ct = a;
        break;
      case 5:
        ke || Zt(l, t);
      case 6:
        if (n = Ue, a = ct, Ue = null, cl(
          e,
          t,
          l
        ), Ue = n, ct = a, Ue !== null)
          if (ct)
            try {
              (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
            } catch (i) {
              Te(
                l,
                t,
                i
              );
            }
          else
            try {
              Ue.removeChild(l.stateNode);
            } catch (i) {
              Te(
                l,
                t,
                i
              );
            }
        break;
      case 18:
        Ue !== null && (ct ? (e = Ue, ym(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          l.stateNode
        ), Wn(e)) : ym(Ue, l.stateNode));
        break;
      case 4:
        n = Ue, a = ct, Ue = l.stateNode.containerInfo, ct = !0, cl(
          e,
          t,
          l
        ), Ue = n, ct = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ol(2, l, t), ke || Ol(4, l, t), cl(
          e,
          t,
          l
        );
        break;
      case 1:
        ke || (Zt(l, t), n = l.stateNode, typeof n.componentWillUnmount == "function" && gd(
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
        ke = (n = ke) || l.memoizedState !== null, cl(
          e,
          t,
          l
        ), ke = n;
        break;
      default:
        cl(
          e,
          t,
          l
        );
    }
  }
  function Td(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Wn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
    }
  }
  function Ad(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Wn(e);
      } catch (l) {
        Te(t, t.return, l);
      }
  }
  function Qy(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Sd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Sd()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Pu(e, t) {
    var l = Qy(e);
    t.forEach(function(n) {
      if (!l.has(n)) {
        l.add(n);
        var a = Py.bind(null, e, n);
        n.then(a, a);
      }
    });
  }
  function st(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var a = l[n], i = e, f = t, h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (Bl(h.type)) {
                Ue = h.stateNode, ct = !1;
                break e;
              }
              break;
            case 5:
              Ue = h.stateNode, ct = !1;
              break e;
            case 3:
            case 4:
              Ue = h.stateNode.containerInfo, ct = !0;
              break e;
          }
          h = h.return;
        }
        if (Ue === null) throw Error(o(160));
        Rd(i, f, a), Ue = null, ct = !1, i = a.alternate, i !== null && (i.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        wd(t, e), t = t.sibling;
  }
  var qt = null;
  function wd(e, t) {
    var l = e.alternate, n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        st(t, e), ot(e), n & 4 && (Ol(3, e, e.return), Na(3, e), Ol(5, e, e.return));
        break;
      case 1:
        st(t, e), ot(e), n & 512 && (ke || l === null || Zt(l, l.return)), n & 64 && rl && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? n : l.concat(n))));
        break;
      case 26:
        var a = qt;
        if (st(t, e), ot(e), n & 512 && (ke || l === null || Zt(l, l.return)), n & 4) {
          var i = l !== null ? l.memoizedState : null;
          if (n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null) {
                e: {
                  n = e.type, l = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (n) {
                    case "title":
                      i = a.getElementsByTagName("title")[0], (!i || i[ua] || i[Fe] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = a.createElement(n), a.head.insertBefore(
                        i,
                        a.querySelector("head > title")
                      )), tt(i, n, l), i[Fe] = e, $e(i), n = i;
                      break e;
                    case "link":
                      var f = wm(
                        "link",
                        "href",
                        a
                      ).get(n + (l.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (i = f[h], i.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && i.getAttribute("rel") === (l.rel == null ? null : l.rel) && i.getAttribute("title") === (l.title == null ? null : l.title) && i.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), tt(i, n, l), a.head.appendChild(i);
                      break;
                    case "meta":
                      if (f = wm(
                        "meta",
                        "content",
                        a
                      ).get(n + (l.content || ""))) {
                        for (h = 0; h < f.length; h++)
                          if (i = f[h], i.getAttribute("content") === (l.content == null ? null : "" + l.content) && i.getAttribute("name") === (l.name == null ? null : l.name) && i.getAttribute("property") === (l.property == null ? null : l.property) && i.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && i.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      i = a.createElement(n), tt(i, n, l), a.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, n));
                  }
                  i[Fe] = e, $e(i), n = i;
                }
                e.stateNode = n;
              } else
                Cm(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Am(
                a,
                n,
                e.memoizedProps
              );
          else
            i !== n ? (i === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : i.count--, n === null ? Cm(
              a,
              e.type,
              e.stateNode
            ) : Am(
              a,
              n,
              e.memoizedProps
            )) : n === null && e.stateNode !== null && Sc(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        }
        break;
      case 27:
        st(t, e), ot(e), n & 512 && (ke || l === null || Zt(l, l.return)), l !== null && n & 4 && Sc(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (st(t, e), ot(e), n & 512 && (ke || l === null || Zt(l, l.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            bn(a, "");
          } catch (k) {
            Te(e, e.return, k);
          }
        }
        n & 4 && e.stateNode != null && (a = e.memoizedProps, Sc(
          e,
          a,
          l !== null ? l.memoizedProps : a
        )), n & 1024 && (Rc = !0);
        break;
      case 6:
        if (st(t, e), ot(e), n & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, l = e.stateNode;
          try {
            l.nodeValue = n;
          } catch (k) {
            Te(e, e.return, k);
          }
        }
        break;
      case 3:
        if (yi = null, a = qt, qt = mi(t.containerInfo), st(t, e), qt = a, ot(e), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Wn(t.containerInfo);
          } catch (k) {
            Te(e, e.return, k);
          }
        Rc && (Rc = !1, Cd(e));
        break;
      case 4:
        n = qt, qt = mi(
          e.stateNode.containerInfo
        ), st(t, e), ot(e), qt = n;
        break;
      case 12:
        st(t, e), ot(e);
        break;
      case 31:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Pu(e, n)));
        break;
      case 13:
        st(t, e), ot(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (ti = yt()), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Pu(e, n)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var v = l !== null && l.memoizedState !== null, C = rl, j = ke;
        if (rl = C || a, ke = j || v, st(t, e), ke = j, rl = C, ot(e), n & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (l === null || v || rl || ke || un(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                v = l = t;
                try {
                  if (i = v.stateNode, a)
                    f = i.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    h = v.stateNode;
                    var L = v.memoizedProps.style, O = L != null && L.hasOwnProperty("display") ? L.display : null;
                    h.style.display = O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (k) {
                  Te(v, v.return, k);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                v = t;
                try {
                  v.stateNode.nodeValue = a ? "" : v.memoizedProps;
                } catch (k) {
                  Te(v, v.return, k);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                v = t;
                try {
                  var M = v.stateNode;
                  a ? gm(M, !0) : gm(v.stateNode, !1);
                } catch (k) {
                  Te(v, v.return, k);
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
        n & 4 && (n = e.updateQueue, n !== null && (l = n.retryQueue, l !== null && (n.retryQueue = null, Pu(e, l))));
        break;
      case 19:
        st(t, e), ot(e), n & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Pu(e, n)));
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
          if (vd(n)) {
            l = n;
            break;
          }
          n = n.return;
        }
        if (l == null) throw Error(o(160));
        switch (l.tag) {
          case 27:
            var a = l.stateNode, i = Ec(e);
            Iu(e, i, a);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (bn(f, ""), l.flags &= -33);
            var h = Ec(e);
            Iu(e, h, f);
            break;
          case 3:
          case 4:
            var v = l.stateNode.containerInfo, C = Ec(e);
            xc(
              e,
              C,
              v
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        Te(e, e.return, j);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Cd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Cd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function sl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Ed(e, t.alternate, t), t = t.sibling;
  }
  function un(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ol(4, t, t.return), un(t);
          break;
        case 1:
          Zt(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && gd(
            t,
            t.return,
            l
          ), un(t);
          break;
        case 27:
          Xa(t.stateNode);
        case 26:
        case 5:
          Zt(t, t.return), un(t);
          break;
        case 22:
          t.memoizedState === null && un(t);
          break;
        case 30:
          un(t);
          break;
        default:
          un(t);
      }
      e = e.sibling;
    }
  }
  function ol(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var n = t.alternate, a = e, i = t, f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ol(
            a,
            i,
            l
          ), Na(4, i);
          break;
        case 1:
          if (ol(
            a,
            i,
            l
          ), n = i, a = n.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (C) {
              Te(n, n.return, C);
            }
          if (n = i, a = n.updateQueue, a !== null) {
            var h = n.stateNode;
            try {
              var v = a.shared.hiddenCallbacks;
              if (v !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < v.length; a++)
                  nf(v[a], h);
            } catch (C) {
              Te(n, n.return, C);
            }
          }
          l && f & 64 && yd(i), Ma(i, i.return);
          break;
        case 27:
          bd(i);
        case 26:
        case 5:
          ol(
            a,
            i,
            l
          ), l && n === null && f & 4 && pd(i), Ma(i, i.return);
          break;
        case 12:
          ol(
            a,
            i,
            l
          );
          break;
        case 31:
          ol(
            a,
            i,
            l
          ), l && f & 4 && Td(a, i);
          break;
        case 13:
          ol(
            a,
            i,
            l
          ), l && f & 4 && Ad(a, i);
          break;
        case 22:
          i.memoizedState === null && ol(
            a,
            i,
            l
          ), Ma(i, i.return);
          break;
        case 30:
          break;
        default:
          ol(
            a,
            i,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Tc(e, t) {
    var l = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && va(l));
  }
  function Ac(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && va(e));
  }
  function Yt(e, t, l, n) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        _d(
          e,
          t,
          l,
          n
        ), t = t.sibling;
  }
  function _d(e, t, l, n) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Yt(
          e,
          t,
          l,
          n
        ), a & 2048 && Na(9, t);
        break;
      case 1:
        Yt(
          e,
          t,
          l,
          n
        );
        break;
      case 3:
        Yt(
          e,
          t,
          l,
          n
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && va(e)));
        break;
      case 12:
        if (a & 2048) {
          Yt(
            e,
            t,
            l,
            n
          ), e = t.stateNode;
          try {
            var i = t.memoizedProps, f = i.id, h = i.onPostCommit;
            typeof h == "function" && h(
              f,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (v) {
            Te(t, t.return, v);
          }
        } else
          Yt(
            e,
            t,
            l,
            n
          );
        break;
      case 31:
        Yt(
          e,
          t,
          l,
          n
        );
        break;
      case 13:
        Yt(
          e,
          t,
          l,
          n
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, f = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Yt(
          e,
          t,
          l,
          n
        ) : Da(e, t) : i._visibility & 2 ? Yt(
          e,
          t,
          l,
          n
        ) : (i._visibility |= 2, qn(
          e,
          t,
          l,
          n,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && Tc(f, t);
        break;
      case 24:
        Yt(
          e,
          t,
          l,
          n
        ), a & 2048 && Ac(t.alternate, t);
        break;
      default:
        Yt(
          e,
          t,
          l,
          n
        );
    }
  }
  function qn(e, t, l, n, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, f = t, h = l, v = n, C = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          qn(
            i,
            f,
            h,
            v,
            a
          ), Na(8, f);
          break;
        case 23:
          break;
        case 22:
          var j = f.stateNode;
          f.memoizedState !== null ? j._visibility & 2 ? qn(
            i,
            f,
            h,
            v,
            a
          ) : Da(
            i,
            f
          ) : (j._visibility |= 2, qn(
            i,
            f,
            h,
            v,
            a
          )), a && C & 2048 && Tc(
            f.alternate,
            f
          );
          break;
        case 24:
          qn(
            i,
            f,
            h,
            v,
            a
          ), a && C & 2048 && Ac(f.alternate, f);
          break;
        default:
          qn(
            i,
            f,
            h,
            v,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Da(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e, n = t, a = n.flags;
        switch (n.tag) {
          case 22:
            Da(l, n), a & 2048 && Tc(
              n.alternate,
              n
            );
            break;
          case 24:
            Da(l, n), a & 2048 && Ac(n.alternate, n);
            break;
          default:
            Da(l, n);
        }
        t = t.sibling;
      }
  }
  var Ua = 8192;
  function Yn(e, t, l) {
    if (e.subtreeFlags & Ua)
      for (e = e.child; e !== null; )
        Od(
          e,
          t,
          l
        ), e = e.sibling;
  }
  function Od(e, t, l) {
    switch (e.tag) {
      case 26:
        Yn(
          e,
          t,
          l
        ), e.flags & Ua && e.memoizedState !== null && z1(
          l,
          qt,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Yn(
          e,
          t,
          l
        );
        break;
      case 3:
      case 4:
        var n = qt;
        qt = mi(e.stateNode.containerInfo), Yn(
          e,
          t,
          l
        ), qt = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = Ua, Ua = 16777216, Yn(
          e,
          t,
          l
        ), Ua = n) : Yn(
          e,
          t,
          l
        ));
        break;
      default:
        Yn(
          e,
          t,
          l
        );
    }
  }
  function zd(e) {
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
          We = n, Md(
            n,
            e
          );
        }
      zd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Nd(e), e = e.sibling;
  }
  function Nd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ja(e), e.flags & 2048 && Ol(9, e, e.return);
        break;
      case 3:
        ja(e);
        break;
      case 12:
        ja(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, ei(e)) : ja(e);
        break;
      default:
        ja(e);
    }
  }
  function ei(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var n = t[l];
          We = n, Md(
            n,
            e
          );
        }
      zd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ol(8, t, t.return), ei(t);
          break;
        case 22:
          l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, ei(t));
          break;
        default:
          ei(t);
      }
      e = e.sibling;
    }
  }
  function Md(e, t) {
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
            var n = l.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          va(l.memoizedState.cache);
      }
      if (n = l.child, n !== null) n.return = l, We = n;
      else
        e: for (l = e; We !== null; ) {
          n = We;
          var a = n.sibling, i = n.return;
          if (xd(n), n === l) {
            We = null;
            break e;
          }
          if (a !== null) {
            a.return = i, We = a;
            break e;
          }
          We = i;
        }
    }
  }
  var Zy = {
    getCacheForType: function(e) {
      var t = Pe(Ve), l = t.data.get(e);
      return l === void 0 && (l = e(), t.data.set(e, l)), l;
    },
    cacheSignal: function() {
      return Pe(Ve).controller.signal;
    }
  }, ky = typeof WeakMap == "function" ? WeakMap : Map, Ee = 0, Oe = null, de = null, he = 0, Re = 0, xt = null, zl = !1, Xn = !1, wc = !1, fl = 0, Ye = 0, Nl = 0, rn = 0, Cc = 0, Rt = 0, Gn = 0, Ba = null, ft = null, _c = !1, ti = 0, Dd = 0, li = 1 / 0, ni = null, Ml = null, Ke = 0, Dl = null, Vn = null, dl = 0, Oc = 0, zc = null, Ud = null, Ha = 0, Nc = null;
  function Tt() {
    return (Ee & 2) !== 0 && he !== 0 ? he & -he : q.T !== null ? Hc() : Js();
  }
  function jd() {
    if (Rt === 0)
      if ((he & 536870912) === 0 || ge) {
        var e = fu;
        fu <<= 1, (fu & 3932160) === 0 && (fu = 262144), Rt = e;
      } else Rt = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), Rt;
  }
  function dt(e, t, l) {
    (e === Oe && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null) && (Qn(e, 0), Ul(
      e,
      he,
      Rt,
      !1
    )), aa(e, l), ((Ee & 2) === 0 || e !== Oe) && (e === Oe && ((Ee & 2) === 0 && (rn |= l), Ye === 4 && Ul(
      e,
      he,
      Rt,
      !1
    )), kt(e));
  }
  function Bd(e, t, l) {
    if ((Ee & 6) !== 0) throw Error(o(327));
    var n = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || na(e, t), a = n ? $y(e, t) : Dc(e, t, !0), i = n;
    do {
      if (a === 0) {
        Xn && !n && Ul(e, t, 0, !1);
        break;
      } else {
        if (l = e.current.alternate, i && !Ky(l)) {
          a = Dc(e, t, !1), i = !1;
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
              var h = e;
              a = Ba;
              var v = h.current.memoizedState.isDehydrated;
              if (v && (Qn(h, f).flags |= 256), f = Dc(
                h,
                f,
                !1
              ), f !== 2) {
                if (wc && !v) {
                  h.errorRecoveryDisabledLanes |= i, rn |= i, a = 4;
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
          Qn(e, 0), Ul(e, t, 0, !0);
          break;
        }
        e: {
          switch (n = e, i = a, i) {
            case 0:
            case 1:
              throw Error(o(345));
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
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (a = ti + 300 - yt(), 10 < a)) {
            if (Ul(
              n,
              t,
              Rt,
              !zl
            ), mu(n, 0, !0) !== 0) break e;
            dl = t, n.timeoutHandle = mm(
              Hd.bind(
                null,
                n,
                l,
                ft,
                ni,
                _c,
                t,
                Rt,
                rn,
                Gn,
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
          Hd(
            n,
            l,
            ft,
            ni,
            _c,
            t,
            Rt,
            rn,
            Gn,
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
    kt(e);
  }
  function Hd(e, t, l, n, a, i, f, h, v, C, j, L, O, M) {
    if (e.timeoutHandle = -1, L = t.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ft
      }, Od(
        t,
        i,
        L
      );
      var k = (i & 62914560) === i ? ti - yt() : (i & 4194048) === i ? Dd - yt() : 0;
      if (k = N1(
        L,
        k
      ), k !== null) {
        dl = i, e.cancelPendingCommit = k(
          Zd.bind(
            null,
            e,
            t,
            i,
            l,
            n,
            a,
            f,
            h,
            v,
            j,
            L,
            null,
            O,
            M
          )
        ), Ul(e, i, f, !C);
        return;
      }
    }
    Zd(
      e,
      t,
      i,
      l,
      n,
      a,
      f,
      h,
      v
    );
  }
  function Ky(e) {
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
    t &= ~Cc, t &= ~rn, e.suspendedLanes |= t, e.pingedLanes &= ~t, n && (e.warmLanes |= t), n = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var i = 31 - pt(a), f = 1 << i;
      n[i] = -1, a &= ~f;
    }
    l !== 0 && Zs(e, l, t);
  }
  function ai() {
    return (Ee & 6) === 0 ? (La(0), !1) : !0;
  }
  function Mc() {
    if (de !== null) {
      if (Re === 0)
        var e = de.return;
      else
        e = de, tl = Fl = null, Jr(e), Un = null, Sa = 0, e = de;
      for (; e !== null; )
        hd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function Qn(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && (e.timeoutHandle = -1, m1(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), dl = 0, Mc(), Oe = e, de = l = Pt(e.current, null), he = t, Re = 0, xt = null, zl = !1, Xn = na(e, t), wc = !1, Gn = Rt = Cc = rn = Nl = Ye = 0, ft = Ba = null, _c = !1, (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - pt(n), i = 1 << a;
        t |= e[a], n &= ~i;
      }
    return fl = t, Au(), l;
  }
  function Ld(e, t) {
    ie = null, q.H = _a, t === Dn || t === Du ? (t = Po(), Re = 3) : t === Br ? (t = Po(), Re = 4) : Re = t === oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, de === null && (Ye = 1, Ku(
      e,
      _t(t, e.current)
    ));
  }
  function qd() {
    var e = St.current;
    return e === null ? !0 : (he & 4194048) === he ? Mt === null : (he & 62914560) === he || (he & 536870912) !== 0 ? e === Mt : !1;
  }
  function Yd() {
    var e = q.H;
    return q.H = _a, e === null ? _a : e;
  }
  function Xd() {
    var e = q.A;
    return q.A = Zy, e;
  }
  function ui() {
    Ye = 4, zl || (he & 4194048) !== he && St.current !== null || (Xn = !0), (Nl & 134217727) === 0 && (rn & 134217727) === 0 || Oe === null || Ul(
      Oe,
      he,
      Rt,
      !1
    );
  }
  function Dc(e, t, l) {
    var n = Ee;
    Ee |= 2;
    var a = Yd(), i = Xd();
    (Oe !== e || he !== t) && (ni = null, Qn(e, t)), t = !1;
    var f = Ye;
    e: do
      try {
        if (Re !== 0 && de !== null) {
          var h = de, v = xt;
          switch (Re) {
            case 8:
              Mc(), f = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var C = Re;
              if (Re = 0, xt = null, Zn(e, h, v, C), l && Xn) {
                f = 0;
                break e;
              }
              break;
            default:
              C = Re, Re = 0, xt = null, Zn(e, h, v, C);
          }
        }
        Jy(), f = Ye;
        break;
      } catch (j) {
        Ld(e, j);
      }
    while (!0);
    return t && e.shellSuspendCounter++, tl = Fl = null, Ee = n, q.H = a, q.A = i, de === null && (Oe = null, he = 0, Au()), f;
  }
  function Jy() {
    for (; de !== null; ) Gd(de);
  }
  function $y(e, t) {
    var l = Ee;
    Ee |= 2;
    var n = Yd(), a = Xd();
    Oe !== e || he !== t ? (ni = null, li = yt() + 500, Qn(e, t)) : Xn = na(
      e,
      t
    );
    e: do
      try {
        if (Re !== 0 && de !== null) {
          t = de;
          var i = xt;
          t: switch (Re) {
            case 1:
              Re = 0, xt = null, Zn(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Fo(i)) {
                Re = 0, xt = null, Vd(t);
                break;
              }
              t = function() {
                Re !== 2 && Re !== 9 || Oe !== e || (Re = 7), kt(e);
              }, i.then(t, t);
              break e;
            case 3:
              Re = 7;
              break e;
            case 4:
              Re = 5;
              break e;
            case 7:
              Fo(i) ? (Re = 0, xt = null, Vd(t)) : (Re = 0, xt = null, Zn(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (de.tag) {
                case 26:
                  f = de.memoizedState;
                case 5:
                case 27:
                  var h = de;
                  if (f ? _m(f) : h.stateNode.complete) {
                    Re = 0, xt = null;
                    var v = h.sibling;
                    if (v !== null) de = v;
                    else {
                      var C = h.return;
                      C !== null ? (de = C, ii(C)) : de = null;
                    }
                    break t;
                  }
              }
              Re = 0, xt = null, Zn(e, t, i, 5);
              break;
            case 6:
              Re = 0, xt = null, Zn(e, t, i, 6);
              break;
            case 8:
              Mc(), Ye = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Wy();
        break;
      } catch (j) {
        Ld(e, j);
      }
    while (!0);
    return tl = Fl = null, q.H = n, q.A = a, Ee = l, de !== null ? 0 : (Oe = null, he = 0, Au(), Ye);
  }
  function Wy() {
    for (; de !== null && !b0(); )
      Gd(de);
  }
  function Gd(e) {
    var t = dd(e.alternate, e, fl);
    e.memoizedProps = e.pendingProps, t === null ? ii(e) : de = t;
  }
  function Vd(e) {
    var t = e, l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = id(
          l,
          t,
          t.pendingProps,
          t.type,
          void 0,
          he
        );
        break;
      case 11:
        t = id(
          l,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          he
        );
        break;
      case 5:
        Jr(t);
      default:
        hd(l, t), t = de = Yo(t, fl), t = dd(l, t, fl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ii(e) : de = t;
  }
  function Zn(e, t, l, n) {
    tl = Fl = null, Jr(t), Un = null, Sa = 0;
    var a = t.return;
    try {
      if (Ly(
        e,
        a,
        t,
        l,
        he
      )) {
        Ye = 1, Ku(
          e,
          _t(l, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (a !== null) throw de = a, i;
      Ye = 1, Ku(
        e,
        _t(l, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ge || n === 1 ? e = !0 : Xn || (he & 536870912) !== 0 ? e = !1 : (zl = e = !0, (n === 2 || n === 9 || n === 3 || n === 6) && (n = St.current, n !== null && n.tag === 13 && (n.flags |= 16384))), Qd(t, e)) : ii(t);
  }
  function ii(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Qd(
          t,
          zl
        );
        return;
      }
      e = t.return;
      var l = Xy(
        t.alternate,
        t,
        fl
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
    Ye === 0 && (Ye = 5);
  }
  function Qd(e, t) {
    do {
      var l = Gy(e.alternate, e);
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
    Ye = 6, de = null;
  }
  function Zd(e, t, l, n, a, i, f, h, v) {
    e.cancelPendingCommit = null;
    do
      ri();
    while (Ke !== 0);
    if ((Ee & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (i = t.lanes | t.childLanes, i |= Er, O0(
        e,
        l,
        i,
        f,
        h,
        v
      ), e === Oe && (de = Oe = null, he = 0), Vn = t, Dl = e, dl = l, Oc = i, zc = a, Ud = n, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, e1(su, function() {
        return Wd(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), n = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || n) {
        n = q.T, q.T = null, a = G.p, G.p = 2, f = Ee, Ee |= 4;
        try {
          Vy(e, t, l);
        } finally {
          Ee = f, G.p = a, q.T = n;
        }
      }
      Ke = 1, kd(), Kd(), Jd();
    }
  }
  function kd() {
    if (Ke === 1) {
      Ke = 0;
      var e = Dl, t = Vn, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Ee;
        Ee |= 4;
        try {
          wd(t, e);
          var i = Zc, f = No(e.containerInfo), h = i.focusedElem, v = i.selectionRange;
          if (f !== h && h && h.ownerDocument && zo(
            h.ownerDocument.documentElement,
            h
          )) {
            if (v !== null && gr(h)) {
              var C = v.start, j = v.end;
              if (j === void 0 && (j = C), "selectionStart" in h)
                h.selectionStart = C, h.selectionEnd = Math.min(
                  j,
                  h.value.length
                );
              else {
                var L = h.ownerDocument || document, O = L && L.defaultView || window;
                if (O.getSelection) {
                  var M = O.getSelection(), k = h.textContent.length, le = Math.min(v.start, k), _e = v.end === void 0 ? le : Math.min(v.end, k);
                  !M.extend && le > _e && (f = _e, _e = le, le = f);
                  var T = Oo(
                    h,
                    le
                  ), E = Oo(
                    h,
                    _e
                  );
                  if (T && E && (M.rangeCount !== 1 || M.anchorNode !== T.node || M.anchorOffset !== T.offset || M.focusNode !== E.node || M.focusOffset !== E.offset)) {
                    var w = L.createRange();
                    w.setStart(T.node, T.offset), M.removeAllRanges(), le > _e ? (M.addRange(w), M.extend(E.node, E.offset)) : (w.setEnd(E.node, E.offset), M.addRange(w));
                  }
                }
              }
            }
            for (L = [], M = h; M = M.parentNode; )
              M.nodeType === 1 && L.push({
                element: M,
                left: M.scrollLeft,
                top: M.scrollTop
              });
            for (typeof h.focus == "function" && h.focus(), h = 0; h < L.length; h++) {
              var B = L[h];
              B.element.scrollLeft = B.left, B.element.scrollTop = B.top;
            }
          }
          bi = !!Qc, Zc = Qc = null;
        } finally {
          Ee = a, G.p = n, q.T = l;
        }
      }
      e.current = t, Ke = 2;
    }
  }
  function Kd() {
    if (Ke === 2) {
      Ke = 0;
      var e = Dl, t = Vn, l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        l = q.T, q.T = null;
        var n = G.p;
        G.p = 2;
        var a = Ee;
        Ee |= 4;
        try {
          Ed(e, t.alternate, t);
        } finally {
          Ee = a, G.p = n, q.T = l;
        }
      }
      Ke = 3;
    }
  }
  function Jd() {
    if (Ke === 4 || Ke === 3) {
      Ke = 0, S0();
      var e = Dl, t = Vn, l = dl, n = Ud;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ke = 5 : (Ke = 0, Vn = Dl = null, $d(e, e.pendingLanes));
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
        t = q.T, a = G.p, G.p = 2, q.T = null;
        try {
          for (var i = e.onRecoverableError, f = 0; f < n.length; f++) {
            var h = n[f];
            i(h.value, {
              componentStack: h.stack
            });
          }
        } finally {
          q.T = t, G.p = a;
        }
      }
      (dl & 3) !== 0 && ri(), kt(e), a = e.pendingLanes, (l & 261930) !== 0 && (a & 42) !== 0 ? e === Nc ? Ha++ : (Ha = 0, Nc = e) : Ha = 0, La(0);
    }
  }
  function $d(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, va(t)));
  }
  function ri() {
    return kd(), Kd(), Jd(), Wd();
  }
  function Wd() {
    if (Ke !== 5) return !1;
    var e = Dl, t = Oc;
    Oc = 0;
    var l = Fi(dl), n = q.T, a = G.p;
    try {
      G.p = 32 > l ? 32 : l, q.T = null, l = zc, zc = null;
      var i = Dl, f = dl;
      if (Ke = 0, Vn = Dl = null, dl = 0, (Ee & 6) !== 0) throw Error(o(331));
      var h = Ee;
      if (Ee |= 4, Nd(i.current), _d(
        i,
        i.current,
        f,
        l
      ), Ee = h, La(0, !1), gt && typeof gt.onPostCommitFiberRoot == "function")
        try {
          gt.onPostCommitFiberRoot(la, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = a, q.T = n, $d(e, t);
    }
  }
  function Fd(e, t, l) {
    t = _t(l, t), t = sc(e.stateNode, t, 2), e = wl(e, t, 2), e !== null && (aa(e, 2), kt(e));
  }
  function Te(e, t, l) {
    if (e.tag === 3)
      Fd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Fd(
            t,
            e,
            l
          );
          break;
        } else if (t.tag === 1) {
          var n = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof n.componentDidCatch == "function" && (Ml === null || !Ml.has(n))) {
            e = _t(l, e), l = If(2), n = wl(t, l, 2), n !== null && (Pf(
              l,
              n,
              t,
              e
            ), aa(n, 2), kt(n));
            break;
          }
        }
        t = t.return;
      }
  }
  function Uc(e, t, l) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new ky();
      var a = /* @__PURE__ */ new Set();
      n.set(t, a);
    } else
      a = n.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), n.set(t, a));
    a.has(l) || (wc = !0, a.add(l), e = Fy.bind(null, e, t, l), t.then(e, e));
  }
  function Fy(e, t, l) {
    var n = e.pingCache;
    n !== null && n.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Oe === e && (he & l) === l && (Ye === 4 || Ye === 3 && (he & 62914560) === he && 300 > yt() - ti ? (Ee & 2) === 0 && Qn(e, 0) : Cc |= l, Gn === he && (Gn = 0)), kt(e);
  }
  function Id(e, t) {
    t === 0 && (t = Qs()), e = Jl(e, t), e !== null && (aa(e, t), kt(e));
  }
  function Iy(e) {
    var t = e.memoizedState, l = 0;
    t !== null && (l = t.retryLane), Id(e, l);
  }
  function Py(e, t) {
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
        throw Error(o(314));
    }
    n !== null && n.delete(t), Id(e, l);
  }
  function e1(e, t) {
    return Ki(e, t);
  }
  var ci = null, kn = null, jc = !1, si = !1, Bc = !1, jl = 0;
  function kt(e) {
    e !== kn && e.next === null && (kn === null ? ci = kn = e : kn = kn.next = e), si = !0, jc || (jc = !0, l1());
  }
  function La(e, t) {
    if (!Bc && si) {
      Bc = !0;
      do
        for (var l = !1, n = ci; n !== null; ) {
          if (e !== 0) {
            var a = n.pendingLanes;
            if (a === 0) var i = 0;
            else {
              var f = n.suspendedLanes, h = n.pingedLanes;
              i = (1 << 31 - pt(42 | e) + 1) - 1, i &= a & ~(f & ~h), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (l = !0, lm(n, i));
          } else
            i = he, i = mu(
              n,
              n === Oe ? i : 0,
              n.cancelPendingCommit !== null || n.timeoutHandle !== -1
            ), (i & 3) === 0 || na(n, i) || (l = !0, lm(n, i));
          n = n.next;
        }
      while (l);
      Bc = !1;
    }
  }
  function t1() {
    Pd();
  }
  function Pd() {
    si = jc = !1;
    var e = 0;
    jl !== 0 && d1() && (e = jl);
    for (var t = yt(), l = null, n = ci; n !== null; ) {
      var a = n.next, i = em(n, t);
      i === 0 ? (n.next = null, l === null ? ci = a : l.next = a, a === null && (kn = l)) : (l = n, (e !== 0 || (i & 3) !== 0) && (si = !0)), n = a;
    }
    Ke !== 0 && Ke !== 5 || La(e), jl !== 0 && (jl = 0);
  }
  function em(e, t) {
    for (var l = e.suspendedLanes, n = e.pingedLanes, a = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var f = 31 - pt(i), h = 1 << f, v = a[f];
      v === -1 ? ((h & l) === 0 || (h & n) !== 0) && (a[f] = _0(h, t)) : v <= t && (e.expiredLanes |= h), i &= ~h;
    }
    if (t = Oe, l = he, l = mu(
      e,
      e === t ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n = e.callbackNode, l === 0 || e === t && (Re === 2 || Re === 9) || e.cancelPendingCommit !== null)
      return n !== null && n !== null && Ji(n), e.callbackNode = null, e.callbackPriority = 0;
    if ((l & 3) === 0 || na(e, l)) {
      if (t = l & -l, t === e.callbackPriority) return t;
      switch (n !== null && Ji(n), Fi(l)) {
        case 2:
        case 8:
          l = Gs;
          break;
        case 32:
          l = su;
          break;
        case 268435456:
          l = Vs;
          break;
        default:
          l = su;
      }
      return n = tm.bind(null, e), l = Ki(l, n), e.callbackPriority = t, e.callbackNode = l, t;
    }
    return n !== null && n !== null && Ji(n), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function tm(e, t) {
    if (Ke !== 0 && Ke !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var l = e.callbackNode;
    if (ri() && e.callbackNode !== l)
      return null;
    var n = he;
    return n = mu(
      e,
      e === Oe ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), n === 0 ? null : (Bd(e, n, t), em(e, yt()), e.callbackNode != null && e.callbackNode === l ? tm.bind(null, e) : null);
  }
  function lm(e, t) {
    if (ri()) return null;
    Bd(e, t, !0);
  }
  function l1() {
    h1(function() {
      (Ee & 6) !== 0 ? Ki(
        Xs,
        t1
      ) : Pd();
    });
  }
  function Hc() {
    if (jl === 0) {
      var e = Nn;
      e === 0 && (e = ou, ou <<= 1, (ou & 261888) === 0 && (ou = 256)), jl = e;
    }
    return jl;
  }
  function nm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pu("" + e);
  }
  function am(e, t) {
    var l = t.ownerDocument.createElement("input");
    return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
  }
  function n1(e, t, l, n, a) {
    if (t === "submit" && l && l.stateNode === a) {
      var i = nm(
        (a[it] || null).action
      ), f = n.submitter;
      f && (t = (t = f[it] || null) ? nm(t.formAction) : f.getAttribute("formAction"), t !== null && (i = t, f = null));
      var h = new Eu(
        "action",
        "action",
        null,
        n,
        a
      );
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (n.defaultPrevented) {
                if (jl !== 0) {
                  var v = f ? am(a, f) : new FormData(a);
                  nc(
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
                typeof i == "function" && (h.preventDefault(), v = f ? am(a, f) : new FormData(a), nc(
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
  for (var Lc = 0; Lc < Sr.length; Lc++) {
    var qc = Sr[Lc], a1 = qc.toLowerCase(), u1 = qc[0].toUpperCase() + qc.slice(1);
    Lt(
      a1,
      "on" + u1
    );
  }
  Lt(Uo, "onAnimationEnd"), Lt(jo, "onAnimationIteration"), Lt(Bo, "onAnimationStart"), Lt("dblclick", "onDoubleClick"), Lt("focusin", "onFocus"), Lt("focusout", "onBlur"), Lt(Ey, "onTransitionRun"), Lt(xy, "onTransitionStart"), Lt(Ry, "onTransitionCancel"), Lt(Ho, "onTransitionEnd"), pn("onMouseEnter", ["mouseout", "mouseover"]), pn("onMouseLeave", ["mouseout", "mouseover"]), pn("onPointerEnter", ["pointerout", "pointerover"]), pn("onPointerLeave", ["pointerout", "pointerover"]), Ql(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ql(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ql("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ql(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ql(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ql(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qa = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), i1 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa)
  );
  function um(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var n = e[l], a = n.event;
      n = n.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = n.length - 1; 0 <= f; f--) {
            var h = n[f], v = h.instance, C = h.currentTarget;
            if (h = h.listener, v !== i && a.isPropagationStopped())
              break e;
            i = h, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              Tu(j);
            }
            a.currentTarget = null, i = v;
          }
        else
          for (f = 0; f < n.length; f++) {
            if (h = n[f], v = h.instance, C = h.currentTarget, h = h.listener, v !== i && a.isPropagationStopped())
              break e;
            i = h, a.currentTarget = C;
            try {
              i(a);
            } catch (j) {
              Tu(j);
            }
            a.currentTarget = null, i = v;
          }
      }
    }
  }
  function me(e, t) {
    var l = t[Ii];
    l === void 0 && (l = t[Ii] = /* @__PURE__ */ new Set());
    var n = e + "__bubble";
    l.has(n) || (im(t, e, 2, !1), l.add(n));
  }
  function Yc(e, t, l) {
    var n = 0;
    t && (n |= 4), im(
      l,
      e,
      n,
      t
    );
  }
  var oi = "_reactListening" + Math.random().toString(36).slice(2);
  function Xc(e) {
    if (!e[oi]) {
      e[oi] = !0, Fs.forEach(function(l) {
        l !== "selectionchange" && (i1.has(l) || Yc(l, !1, e), Yc(l, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[oi] || (t[oi] = !0, Yc("selectionchange", !1, t));
    }
  }
  function im(e, t, l, n) {
    switch (jm(t)) {
      case 2:
        var a = U1;
        break;
      case 8:
        a = j1;
        break;
      default:
        a = ls;
    }
    l = a.bind(
      null,
      t,
      l,
      e
    ), a = void 0, !rr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), n ? a !== void 0 ? e.addEventListener(t, l, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, l, !0) : a !== void 0 ? e.addEventListener(t, l, {
      passive: a
    }) : e.addEventListener(t, l, !1);
  }
  function Gc(e, t, l, n, a) {
    var i = n;
    if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
      e: for (; ; ) {
        if (n === null) return;
        var f = n.tag;
        if (f === 3 || f === 4) {
          var h = n.stateNode.containerInfo;
          if (h === a) break;
          if (f === 4)
            for (f = n.return; f !== null; ) {
              var v = f.tag;
              if ((v === 3 || v === 4) && f.stateNode.containerInfo === a)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (f = hn(h), f === null) return;
            if (v = f.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              n = i = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        n = n.return;
      }
    so(function() {
      var C = i, j = ur(l), L = [];
      e: {
        var O = Lo.get(e);
        if (O !== void 0) {
          var M = Eu, k = e;
          switch (e) {
            case "keypress":
              if (bu(l) === 0) break e;
            case "keydown":
            case "keyup":
              M = P0;
              break;
            case "focusin":
              k = "focus", M = fr;
              break;
            case "focusout":
              k = "blur", M = fr;
              break;
            case "beforeblur":
            case "afterblur":
              M = fr;
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
              M = mo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              M = X0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              M = ly;
              break;
            case Uo:
            case jo:
            case Bo:
              M = Q0;
              break;
            case Ho:
              M = ay;
              break;
            case "scroll":
            case "scrollend":
              M = q0;
              break;
            case "wheel":
              M = iy;
              break;
            case "copy":
            case "cut":
            case "paste":
              M = k0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              M = yo;
              break;
            case "toggle":
            case "beforetoggle":
              M = cy;
          }
          var le = (t & 4) !== 0, _e = !le && (e === "scroll" || e === "scrollend"), T = le ? O !== null ? O + "Capture" : null : O;
          le = [];
          for (var E = C, w; E !== null; ) {
            var B = E;
            if (w = B.stateNode, B = B.tag, B !== 5 && B !== 26 && B !== 27 || w === null || T === null || (B = ra(E, T), B != null && le.push(
              Ya(E, B, w)
            )), _e) break;
            E = E.return;
          }
          0 < le.length && (O = new M(
            O,
            k,
            null,
            l,
            j
          ), L.push({ event: O, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", M = e === "mouseout" || e === "pointerout", O && l !== ar && (k = l.relatedTarget || l.fromElement) && (hn(k) || k[mn]))
            break e;
          if ((M || O) && (O = j.window === j ? j : (O = j.ownerDocument) ? O.defaultView || O.parentWindow : window, M ? (k = l.relatedTarget || l.toElement, M = C, k = k ? hn(k) : null, k !== null && (_e = m(k), le = k.tag, k !== _e || le !== 5 && le !== 27 && le !== 6) && (k = null)) : (M = null, k = C), M !== k)) {
            if (le = mo, B = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (le = yo, B = "onPointerLeave", T = "onPointerEnter", E = "pointer"), _e = M == null ? O : ia(M), w = k == null ? O : ia(k), O = new le(
              B,
              E + "leave",
              M,
              l,
              j
            ), O.target = _e, O.relatedTarget = w, B = null, hn(j) === C && (le = new le(
              T,
              E + "enter",
              k,
              l,
              j
            ), le.target = w, le.relatedTarget = _e, B = le), _e = B, M && k)
              t: {
                for (le = r1, T = M, E = k, w = 0, B = T; B; B = le(B))
                  w++;
                B = 0;
                for (var ee = E; ee; ee = le(ee))
                  B++;
                for (; 0 < w - B; )
                  T = le(T), w--;
                for (; 0 < B - w; )
                  E = le(E), B--;
                for (; w--; ) {
                  if (T === E || E !== null && T === E.alternate) {
                    le = T;
                    break t;
                  }
                  T = le(T), E = le(E);
                }
                le = null;
              }
            else le = null;
            M !== null && rm(
              L,
              O,
              M,
              le,
              !1
            ), k !== null && _e !== null && rm(
              L,
              _e,
              k,
              le,
              !0
            );
          }
        }
        e: {
          if (O = C ? ia(C) : window, M = O.nodeName && O.nodeName.toLowerCase(), M === "select" || M === "input" && O.type === "file")
            var ve = Ro;
          else if (Eo(O))
            if (To)
              ve = vy;
            else {
              ve = gy;
              var $ = yy;
            }
          else
            M = O.nodeName, !M || M.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? C && nr(C.elementType) && (ve = Ro) : ve = py;
          if (ve && (ve = ve(e, C))) {
            xo(
              L,
              ve,
              l,
              j
            );
            break e;
          }
          $ && $(e, O, C), e === "focusout" && C && O.type === "number" && C.memoizedProps.value != null && lr(O, "number", O.value);
        }
        switch ($ = C ? ia(C) : window, e) {
          case "focusin":
            (Eo($) || $.contentEditable === "true") && (Rn = $, pr = C, ya = null);
            break;
          case "focusout":
            ya = pr = Rn = null;
            break;
          case "mousedown":
            vr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            vr = !1, Mo(L, l, j);
            break;
          case "selectionchange":
            if (Sy) break;
          case "keydown":
          case "keyup":
            Mo(L, l, j);
        }
        var ce;
        if (mr)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          xn ? bo(e, l) && (ye = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ye = "onCompositionStart");
        ye && (go && l.locale !== "ko" && (xn || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && xn && (ce = oo()) : (bl = j, cr = "value" in bl ? bl.value : bl.textContent, xn = !0)), $ = fi(C, ye), 0 < $.length && (ye = new ho(
          ye,
          e,
          null,
          l,
          j
        ), L.push({ event: ye, listeners: $ }), ce ? ye.data = ce : (ce = So(l), ce !== null && (ye.data = ce)))), (ce = oy ? fy(e, l) : dy(e, l)) && (ye = fi(C, "onBeforeInput"), 0 < ye.length && ($ = new ho(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          j
        ), L.push({
          event: $,
          listeners: ye
        }), $.data = ce)), n1(
          L,
          e,
          C,
          l,
          j
        );
      }
      um(L, t);
    });
  }
  function Ya(e, t, l) {
    return {
      instance: e,
      listener: t,
      currentTarget: l
    };
  }
  function fi(e, t) {
    for (var l = t + "Capture", n = []; e !== null; ) {
      var a = e, i = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || i === null || (a = ra(e, l), a != null && n.unshift(
        Ya(e, a, i)
      ), a = ra(e, t), a != null && n.push(
        Ya(e, a, i)
      )), e.tag === 3) return n;
      e = e.return;
    }
    return [];
  }
  function r1(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function rm(e, t, l, n, a) {
    for (var i = t._reactName, f = []; l !== null && l !== n; ) {
      var h = l, v = h.alternate, C = h.stateNode;
      if (h = h.tag, v !== null && v === n) break;
      h !== 5 && h !== 26 && h !== 27 || C === null || (v = C, a ? (C = ra(l, i), C != null && f.unshift(
        Ya(l, C, v)
      )) : a || (C = ra(l, i), C != null && f.push(
        Ya(l, C, v)
      ))), l = l.return;
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var c1 = /\r\n?/g, s1 = /\u0000|\uFFFD/g;
  function cm(e) {
    return (typeof e == "string" ? e : "" + e).replace(c1, `
`).replace(s1, "");
  }
  function sm(e, t) {
    return t = cm(t), cm(e) === t;
  }
  function Ce(e, t, l, n, a, i) {
    switch (l) {
      case "children":
        typeof n == "string" ? t === "body" || t === "textarea" && n === "" || bn(e, n) : (typeof n == "number" || typeof n == "bigint") && t !== "body" && bn(e, "" + n);
        break;
      case "className":
        yu(e, "class", n);
        break;
      case "tabIndex":
        yu(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        yu(e, l, n);
        break;
      case "style":
        ro(e, n, i);
        break;
      case "data":
        if (t !== "object") {
          yu(e, "data", n);
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
        n = pu("" + n), e.setAttribute(l, n);
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
          typeof i == "function" && (l === "formAction" ? (t !== "input" && Ce(e, t, "name", a.name, a, null), Ce(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ce(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ce(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ce(e, t, "encType", a.encType, a, null), Ce(e, t, "method", a.method, a, null), Ce(e, t, "target", a.target, a, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(l);
          break;
        }
        n = pu("" + n), e.setAttribute(l, n);
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
        break;
      case "onScroll":
        n != null && me("scroll", e);
        break;
      case "onScrollEnd":
        n != null && me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(o(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(o(60));
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
        l = pu("" + n), e.setAttributeNS(
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
        me("beforetoggle", e), me("toggle", e), hu(e, "popover", n);
        break;
      case "xlinkActuate":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          n
        );
        break;
      case "xlinkArcrole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          n
        );
        break;
      case "xlinkRole":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          n
        );
        break;
      case "xlinkShow":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          n
        );
        break;
      case "xlinkTitle":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          n
        );
        break;
      case "xlinkType":
        Wt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          n
        );
        break;
      case "xmlBase":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          n
        );
        break;
      case "xmlLang":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          n
        );
        break;
      case "xmlSpace":
        Wt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          n
        );
        break;
      case "is":
        hu(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = H0.get(l) || l, hu(e, l, n));
    }
  }
  function Vc(e, t, l, n, a, i) {
    switch (l) {
      case "style":
        ro(e, n, i);
        break;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n))
            throw Error(o(61));
          if (l = n.__html, l != null) {
            if (a.children != null) throw Error(o(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof n == "string" ? bn(e, n) : (typeof n == "number" || typeof n == "bigint") && bn(e, "" + n);
        break;
      case "onScroll":
        n != null && me("scroll", e);
        break;
      case "onScrollEnd":
        n != null && me("scrollend", e);
        break;
      case "onClick":
        n != null && (e.onclick = Ft);
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
        if (!Is.hasOwnProperty(l))
          e: {
            if (l[0] === "o" && l[1] === "n" && (a = l.endsWith("Capture"), t = l.slice(2, a ? l.length - 7 : void 0), i = e[it] || null, i = i != null ? i[l] : null, typeof i == "function" && e.removeEventListener(t, i, a), typeof n == "function")) {
              typeof i != "function" && i !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, n, a);
              break e;
            }
            l in e ? e[l] = n : n === !0 ? e.setAttribute(l, "") : hu(e, l, n);
          }
    }
  }
  function tt(e, t, l) {
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
        me("error", e), me("load", e);
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
                  throw Error(o(137, t));
                default:
                  Ce(e, t, i, f, l, null);
              }
          }
        a && Ce(e, t, "srcSet", l.srcSet, l, null), n && Ce(e, t, "src", l.src, l, null);
        return;
      case "input":
        me("invalid", e);
        var h = i = f = a = null, v = null, C = null;
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var j = l[n];
            if (j != null)
              switch (n) {
                case "name":
                  a = j;
                  break;
                case "type":
                  f = j;
                  break;
                case "checked":
                  v = j;
                  break;
                case "defaultChecked":
                  C = j;
                  break;
                case "value":
                  i = j;
                  break;
                case "defaultValue":
                  h = j;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (j != null)
                    throw Error(o(137, t));
                  break;
                default:
                  Ce(e, t, n, j, l, null);
              }
          }
        no(
          e,
          i,
          h,
          v,
          C,
          f,
          a,
          !1
        );
        return;
      case "select":
        me("invalid", e), n = f = i = null;
        for (a in l)
          if (l.hasOwnProperty(a) && (h = l[a], h != null))
            switch (a) {
              case "value":
                i = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                n = h;
              default:
                Ce(e, t, a, h, l, null);
            }
        t = i, l = f, e.multiple = !!n, t != null ? vn(e, !!n, t, !1) : l != null && vn(e, !!n, l, !0);
        return;
      case "textarea":
        me("invalid", e), i = a = n = null;
        for (f in l)
          if (l.hasOwnProperty(f) && (h = l[f], h != null))
            switch (f) {
              case "value":
                n = h;
                break;
              case "defaultValue":
                a = h;
                break;
              case "children":
                i = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(o(91));
                break;
              default:
                Ce(e, t, f, h, l, null);
            }
        uo(e, n, a, i);
        return;
      case "option":
        for (v in l)
          l.hasOwnProperty(v) && (n = l[v], n != null) && (v === "selected" ? e.selected = n && typeof n != "function" && typeof n != "symbol" : Ce(e, t, v, n, l, null));
        return;
      case "dialog":
        me("beforetoggle", e), me("toggle", e), me("cancel", e), me("close", e);
        break;
      case "iframe":
      case "object":
        me("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < qa.length; n++)
          me(qa[n], e);
        break;
      case "image":
        me("error", e), me("load", e);
        break;
      case "details":
        me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        me("error", e), me("load", e);
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
                throw Error(o(137, t));
              default:
                Ce(e, t, C, n, l, null);
            }
        return;
      default:
        if (nr(t)) {
          for (j in l)
            l.hasOwnProperty(j) && (n = l[j], n !== void 0 && Vc(
              e,
              t,
              j,
              n,
              l,
              void 0
            ));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && (n = l[h], n != null && Ce(e, t, h, n, l, null));
  }
  function o1(e, t, l, n) {
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
        var a = null, i = null, f = null, h = null, v = null, C = null, j = null;
        for (M in l) {
          var L = l[M];
          if (l.hasOwnProperty(M) && L != null)
            switch (M) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = L;
              default:
                n.hasOwnProperty(M) || Ce(e, t, M, null, n, L);
            }
        }
        for (var O in n) {
          var M = n[O];
          if (L = l[O], n.hasOwnProperty(O) && (M != null || L != null))
            switch (O) {
              case "type":
                i = M;
                break;
              case "name":
                a = M;
                break;
              case "checked":
                C = M;
                break;
              case "defaultChecked":
                j = M;
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
                M !== L && Ce(
                  e,
                  t,
                  O,
                  M,
                  n,
                  L
                );
            }
        }
        tr(
          e,
          f,
          h,
          v,
          C,
          j,
          i,
          a
        );
        return;
      case "select":
        M = f = h = O = null;
        for (i in l)
          if (v = l[i], l.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                M = v;
              default:
                n.hasOwnProperty(i) || Ce(
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
                O = i;
                break;
              case "defaultValue":
                h = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== v && Ce(
                  e,
                  t,
                  a,
                  i,
                  n,
                  v
                );
            }
        t = h, l = f, n = M, O != null ? vn(e, !!l, O, !1) : !!n != !!l && (t != null ? vn(e, !!l, t, !0) : vn(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        M = O = null;
        for (h in l)
          if (a = l[h], l.hasOwnProperty(h) && a != null && !n.hasOwnProperty(h))
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ce(e, t, h, null, n, a);
            }
        for (f in n)
          if (a = n[f], i = l[f], n.hasOwnProperty(f) && (a != null || i != null))
            switch (f) {
              case "value":
                O = a;
                break;
              case "defaultValue":
                M = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(o(91));
                break;
              default:
                a !== i && Ce(e, t, f, a, n, i);
            }
        ao(e, O, M);
        return;
      case "option":
        for (var k in l)
          O = l[k], l.hasOwnProperty(k) && O != null && !n.hasOwnProperty(k) && (k === "selected" ? e.selected = !1 : Ce(
            e,
            t,
            k,
            null,
            n,
            O
          ));
        for (v in n)
          O = n[v], M = l[v], n.hasOwnProperty(v) && O !== M && (O != null || M != null) && (v === "selected" ? e.selected = O && typeof O != "function" && typeof O != "symbol" : Ce(
            e,
            t,
            v,
            O,
            n,
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
        for (var le in l)
          O = l[le], l.hasOwnProperty(le) && O != null && !n.hasOwnProperty(le) && Ce(e, t, le, null, n, O);
        for (C in n)
          if (O = n[C], M = l[C], n.hasOwnProperty(C) && O !== M && (O != null || M != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(o(137, t));
                break;
              default:
                Ce(
                  e,
                  t,
                  C,
                  O,
                  n,
                  M
                );
            }
        return;
      default:
        if (nr(t)) {
          for (var _e in l)
            O = l[_e], l.hasOwnProperty(_e) && O !== void 0 && !n.hasOwnProperty(_e) && Vc(
              e,
              t,
              _e,
              void 0,
              n,
              O
            );
          for (j in n)
            O = n[j], M = l[j], !n.hasOwnProperty(j) || O === M || O === void 0 && M === void 0 || Vc(
              e,
              t,
              j,
              O,
              n,
              M
            );
          return;
        }
    }
    for (var T in l)
      O = l[T], l.hasOwnProperty(T) && O != null && !n.hasOwnProperty(T) && Ce(e, t, T, null, n, O);
    for (L in n)
      O = n[L], M = l[L], !n.hasOwnProperty(L) || O === M || O == null && M == null || Ce(e, t, L, O, n, M);
  }
  function om(e) {
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
  function f1() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), n = 0; n < l.length; n++) {
        var a = l[n], i = a.transferSize, f = a.initiatorType, h = a.duration;
        if (i && h && om(f)) {
          for (f = 0, h = a.responseEnd, n += 1; n < l.length; n++) {
            var v = l[n], C = v.startTime;
            if (C > h) break;
            var j = v.transferSize, L = v.initiatorType;
            j && om(L) && (v = v.responseEnd, f += j * (v < h ? 1 : (h - C) / (v - C)));
          }
          if (--n, t += 8 * (i + f) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Qc = null, Zc = null;
  function di(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function fm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dm(e, t) {
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
  function kc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Kc = null;
  function d1() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Kc ? !1 : (Kc = e, !0) : (Kc = null, !1);
  }
  var mm = typeof setTimeout == "function" ? setTimeout : void 0, m1 = typeof clearTimeout == "function" ? clearTimeout : void 0, hm = typeof Promise == "function" ? Promise : void 0, h1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof hm < "u" ? function(e) {
    return hm.resolve(null).then(e).catch(y1);
  } : mm;
  function y1(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Bl(e) {
    return e === "head";
  }
  function ym(e, t) {
    var l = t, n = 0;
    do {
      var a = l.nextSibling;
      if (e.removeChild(l), a && a.nodeType === 8)
        if (l = a.data, l === "/$" || l === "/&") {
          if (n === 0) {
            e.removeChild(a), Wn(t);
            return;
          }
          n--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&")
          n++;
        else if (l === "html")
          Xa(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Xa(l);
          for (var i = l.firstChild; i; ) {
            var f = i.nextSibling, h = i.nodeName;
            i[ua] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && i.rel.toLowerCase() === "stylesheet" || l.removeChild(i), i = f;
          }
        } else
          l === "body" && Xa(e.ownerDocument.body);
      l = a;
    } while (l);
    Wn(t);
  }
  function gm(e, t) {
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
  function Jc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (t = t.nextSibling, l.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Jc(l), Pi(l);
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
  function g1(e, t, l, n) {
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
      if (e = Dt(e.nextSibling), e === null) break;
    }
    return null;
  }
  function p1(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function pm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
    return e;
  }
  function $c(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Wc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function v1(e, t) {
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
  function Dt(e) {
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
  var Fc = null;
  function vm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "/$" || l === "/&") {
          if (t === 0)
            return Dt(e.nextSibling);
          t--;
        } else
          l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function bm(e) {
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
  function Sm(e, t, l) {
    switch (t = di(l), e) {
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
  function Xa(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Pi(e);
  }
  var Ut = /* @__PURE__ */ new Map(), Em = /* @__PURE__ */ new Set();
  function mi(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ml = G.d;
  G.d = {
    f: b1,
    r: S1,
    D: E1,
    C: x1,
    L: R1,
    m: T1,
    X: w1,
    S: A1,
    M: C1
  };
  function b1() {
    var e = ml.f(), t = ai();
    return e || t;
  }
  function S1(e) {
    var t = yn(e);
    t !== null && t.tag === 5 && t.type === "form" ? Lf(t) : ml.r(e);
  }
  var Kn = typeof document > "u" ? null : document;
  function xm(e, t, l) {
    var n = Kn;
    if (n && typeof t == "string" && t) {
      var a = wt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof l == "string" && (a += '[crossorigin="' + l + '"]'), Em.has(a) || (Em.add(a), e = { rel: e, crossOrigin: l, href: t }, n.querySelector(a) === null && (t = n.createElement("link"), tt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function E1(e) {
    ml.D(e), xm("dns-prefetch", e, null);
  }
  function x1(e, t) {
    ml.C(e, t), xm("preconnect", e, t);
  }
  function R1(e, t, l) {
    ml.L(e, t, l);
    var n = Kn;
    if (n && e && t) {
      var a = 'link[rel="preload"][as="' + wt(t) + '"]';
      t === "image" && l && l.imageSrcSet ? (a += '[imagesrcset="' + wt(
        l.imageSrcSet
      ) + '"]', typeof l.imageSizes == "string" && (a += '[imagesizes="' + wt(
        l.imageSizes
      ) + '"]')) : a += '[href="' + wt(e) + '"]';
      var i = a;
      switch (t) {
        case "style":
          i = Jn(e);
          break;
        case "script":
          i = $n(e);
      }
      Ut.has(i) || (e = N(
        {
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        },
        l
      ), Ut.set(i, e), n.querySelector(a) !== null || t === "style" && n.querySelector(Ga(i)) || t === "script" && n.querySelector(Va(i)) || (t = n.createElement("link"), tt(t, "link", e), $e(t), n.head.appendChild(t)));
    }
  }
  function T1(e, t) {
    ml.m(e, t);
    var l = Kn;
    if (l && e) {
      var n = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + wt(n) + '"][href="' + wt(e) + '"]', i = a;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = $n(e);
      }
      if (!Ut.has(i) && (e = N({ rel: "modulepreload", href: e }, t), Ut.set(i, e), l.querySelector(a) === null)) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Va(i)))
              return;
        }
        n = l.createElement("link"), tt(n, "link", e), $e(n), l.head.appendChild(n);
      }
    }
  }
  function A1(e, t, l) {
    ml.S(e, t, l);
    var n = Kn;
    if (n && e) {
      var a = gn(n).hoistableStyles, i = Jn(e);
      t = t || "default";
      var f = a.get(i);
      if (!f) {
        var h = { loading: 0, preload: null };
        if (f = n.querySelector(
          Ga(i)
        ))
          h.loading = 5;
        else {
          e = N(
            { rel: "stylesheet", href: e, "data-precedence": t },
            l
          ), (l = Ut.get(i)) && Ic(e, l);
          var v = f = n.createElement("link");
          $e(v), tt(v, "link", e), v._p = new Promise(function(C, j) {
            v.onload = C, v.onerror = j;
          }), v.addEventListener("load", function() {
            h.loading |= 1;
          }), v.addEventListener("error", function() {
            h.loading |= 2;
          }), h.loading |= 4, hi(f, t, n);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: h
        }, a.set(i, f);
      }
    }
  }
  function w1(e, t) {
    ml.X(e, t);
    var l = Kn;
    if (l && e) {
      var n = gn(l).hoistableScripts, a = $n(e), i = n.get(a);
      i || (i = l.querySelector(Va(a)), i || (e = N({ src: e, async: !0 }, t), (t = Ut.get(a)) && Pc(e, t), i = l.createElement("script"), $e(i), tt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function C1(e, t) {
    ml.M(e, t);
    var l = Kn;
    if (l && e) {
      var n = gn(l).hoistableScripts, a = $n(e), i = n.get(a);
      i || (i = l.querySelector(Va(a)), i || (e = N({ src: e, async: !0, type: "module" }, t), (t = Ut.get(a)) && Pc(e, t), i = l.createElement("script"), $e(i), tt(i, "link", e), l.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, n.set(a, i));
    }
  }
  function Rm(e, t, l, n) {
    var a = (a = fe.current) ? mi(a) : null;
    if (!a) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Jn(l.href), l = gn(
          a
        ).hoistableStyles, n = l.get(t), n || (n = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
          e = Jn(l.href);
          var i = gn(
            a
          ).hoistableStyles, f = i.get(e);
          if (f || (a = a.ownerDocument || a, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, f), (i = a.querySelector(
            Ga(e)
          )) && !i._p && (f.instance = i, f.state.loading = 5), Ut.has(e) || (l = {
            rel: "preload",
            as: "style",
            href: l.href,
            crossOrigin: l.crossOrigin,
            integrity: l.integrity,
            media: l.media,
            hrefLang: l.hrefLang,
            referrerPolicy: l.referrerPolicy
          }, Ut.set(e, l), i || _1(
            a,
            e,
            l,
            f.state
          ))), t && n === null)
            throw Error(o(528, ""));
          return f;
        }
        if (t && n !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = $n(l), l = gn(
          a
        ).hoistableScripts, n = l.get(t), n || (n = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, l.set(t, n)), n) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function Jn(e) {
    return 'href="' + wt(e) + '"';
  }
  function Ga(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Tm(e) {
    return N({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function _1(e, t, l, n) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? n.loading = 1 : (t = e.createElement("link"), n.preload = t, t.addEventListener("load", function() {
      return n.loading |= 1;
    }), t.addEventListener("error", function() {
      return n.loading |= 2;
    }), tt(t, "link", l), $e(t), e.head.appendChild(t));
  }
  function $n(e) {
    return '[src="' + wt(e) + '"]';
  }
  function Va(e) {
    return "script[async]" + e;
  }
  function Am(e, t, l) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var n = e.querySelector(
            'style[data-href~="' + wt(l.href) + '"]'
          );
          if (n)
            return t.instance = n, $e(n), n;
          var a = N({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return n = (e.ownerDocument || e).createElement(
            "style"
          ), $e(n), tt(n, "style", a), hi(n, l.precedence, e), t.instance = n;
        case "stylesheet":
          a = Jn(l.href);
          var i = e.querySelector(
            Ga(a)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, $e(i), i;
          n = Tm(l), (a = Ut.get(a)) && Ic(n, a), i = (e.ownerDocument || e).createElement("link"), $e(i);
          var f = i;
          return f._p = new Promise(function(h, v) {
            f.onload = h, f.onerror = v;
          }), tt(i, "link", n), t.state.loading |= 4, hi(i, l.precedence, e), t.instance = i;
        case "script":
          return i = $n(l.src), (a = e.querySelector(
            Va(i)
          )) ? (t.instance = a, $e(a), a) : (n = l, (a = Ut.get(i)) && (n = N({}, l), Pc(n, a)), e = e.ownerDocument || e, a = e.createElement("script"), $e(a), tt(a, "link", n), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (n = t.instance, t.state.loading |= 4, hi(n, l.precedence, e));
    return t.instance;
  }
  function hi(e, t, l) {
    for (var n = l.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = n.length ? n[n.length - 1] : null, i = a, f = 0; f < n.length; f++) {
      var h = n[f];
      if (h.dataset.precedence === t) i = h;
      else if (i !== a) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Pc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var yi = null;
  function wm(e, t, l) {
    if (yi === null) {
      var n = /* @__PURE__ */ new Map(), a = yi = /* @__PURE__ */ new Map();
      a.set(l, n);
    } else
      a = yi, n = a.get(l), n || (n = /* @__PURE__ */ new Map(), a.set(l, n));
    if (n.has(e)) return n;
    for (n.set(e, null), l = l.getElementsByTagName(e), a = 0; a < l.length; a++) {
      var i = l[a];
      if (!(i[ua] || i[Fe] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var h = n.get(f);
        h ? h.push(i) : n.set(f, [i]);
      }
    }
    return n;
  }
  function Cm(e, t, l) {
    e = e.ownerDocument || e, e.head.insertBefore(
      l,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function O1(e, t, l) {
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
  function _m(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function z1(e, t, l, n) {
    if (l.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (l.state.loading & 4) === 0) {
      if (l.instance === null) {
        var a = Jn(n.href), i = t.querySelector(
          Ga(a)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = gi.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = i, $e(i);
          return;
        }
        i = t.ownerDocument || t, n = Tm(n), (a = Ut.get(a)) && Ic(n, a), i = i.createElement("link"), $e(i);
        var f = i;
        f._p = new Promise(function(h, v) {
          f.onload = h, f.onerror = v;
        }), tt(i, "link", n), l.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = gi.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
    }
  }
  var es = 0;
  function N1(e, t) {
    return e.stylesheets && e.count === 0 && vi(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
      var n = setTimeout(function() {
        if (e.stylesheets && vi(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && es === 0 && (es = 62500 * f1());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && vi(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > es ? 50 : 800) + t
      );
      return e.unsuspend = l, function() {
        e.unsuspend = null, clearTimeout(n), clearTimeout(a);
      };
    } : null;
  }
  function gi() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) vi(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var pi = null;
  function vi(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, pi = /* @__PURE__ */ new Map(), t.forEach(M1, e), pi = null, gi.call(e));
  }
  function M1(e, t) {
    if (!(t.state.loading & 4)) {
      var l = pi.get(e);
      if (l) var n = l.get(null);
      else {
        l = /* @__PURE__ */ new Map(), pi.set(e, l);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < a.length; i++) {
          var f = a[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), n = f);
        }
        n && l.set(null, n);
      }
      a = t.instance, f = a.getAttribute("data-precedence"), i = l.get(f) || n, i === n && l.set(null, a), l.set(f, a), this.count++, n = gi.bind(this), a.addEventListener("load", n), a.addEventListener("error", n), i ? i.parentNode.insertBefore(a, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Qa = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function D1(e, t, l, n, a, i, f, h, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = $i(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = $i(0), this.hiddenUpdates = $i(null), this.identifierPrefix = n, this.onUncaughtError = a, this.onCaughtError = i, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Om(e, t, l, n, a, i, f, h, v, C, j, L) {
    return e = new D1(
      e,
      t,
      l,
      f,
      v,
      C,
      j,
      L,
      h
    ), t = 1, i === !0 && (t |= 24), i = bt(3, null, null, t), e.current = i, i.stateNode = e, t = Dr(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: n,
      isDehydrated: l,
      cache: t
    }, Hr(i), e;
  }
  function zm(e) {
    return e ? (e = wn, e) : wn;
  }
  function Nm(e, t, l, n, a, i) {
    a = zm(a), n.context === null ? n.context = a : n.pendingContext = a, n = Al(t), n.payload = { element: l }, i = i === void 0 ? null : i, i !== null && (n.callback = i), l = wl(e, n, t), l !== null && (dt(l, e, t), xa(l, e, t));
  }
  function Mm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function ts(e, t) {
    Mm(e, t), (e = e.alternate) && Mm(e, t);
  }
  function Dm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Jl(e, 67108864);
      t !== null && dt(t, e, 67108864), ts(e, 67108864);
    }
  }
  function Um(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tt();
      t = Wi(t);
      var l = Jl(e, t);
      l !== null && dt(l, e, t), ts(e, t);
    }
  }
  var bi = !0;
  function U1(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = G.p;
    try {
      G.p = 2, ls(e, t, l, n);
    } finally {
      G.p = i, q.T = a;
    }
  }
  function j1(e, t, l, n) {
    var a = q.T;
    q.T = null;
    var i = G.p;
    try {
      G.p = 8, ls(e, t, l, n);
    } finally {
      G.p = i, q.T = a;
    }
  }
  function ls(e, t, l, n) {
    if (bi) {
      var a = ns(n);
      if (a === null)
        Gc(
          e,
          t,
          n,
          Si,
          l
        ), Bm(e, n);
      else if (H1(
        a,
        e,
        t,
        l,
        n
      ))
        n.stopPropagation();
      else if (Bm(e, n), t & 4 && -1 < B1.indexOf(e)) {
        for (; a !== null; ) {
          var i = yn(a);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var f = Vl(i.pendingLanes);
                  if (f !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var v = 1 << 31 - pt(f);
                      h.entanglements[1] |= v, f &= ~v;
                    }
                    kt(i), (Ee & 6) === 0 && (li = yt() + 500, La(0));
                  }
                }
                break;
              case 31:
              case 13:
                h = Jl(i, 2), h !== null && dt(h, i, 2), ai(), ts(i, 2);
            }
          if (i = ns(n), i === null && Gc(
            e,
            t,
            n,
            Si,
            l
          ), i === a) break;
          a = i;
        }
        a !== null && n.stopPropagation();
      } else
        Gc(
          e,
          t,
          n,
          null,
          l
        );
    }
  }
  function ns(e) {
    return e = ur(e), as(e);
  }
  var Si = null;
  function as(e) {
    if (Si = null, e = hn(e), e !== null) {
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
    return Si = e, null;
  }
  function jm(e) {
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
        switch (E0()) {
          case Xs:
            return 2;
          case Gs:
            return 8;
          case su:
          case x0:
            return 32;
          case Vs:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var us = !1, Hl = null, Ll = null, ql = null, Za = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Map(), Yl = [], B1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Bm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Hl = null;
        break;
      case "dragenter":
      case "dragleave":
        Ll = null;
        break;
      case "mouseover":
      case "mouseout":
        ql = null;
        break;
      case "pointerover":
      case "pointerout":
        Za.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ka.delete(t.pointerId);
    }
  }
  function Ka(e, t, l, n, a, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: l,
      eventSystemFlags: n,
      nativeEvent: i,
      targetContainers: [a]
    }, t !== null && (t = yn(t), t !== null && Dm(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function H1(e, t, l, n, a) {
    switch (t) {
      case "focusin":
        return Hl = Ka(
          Hl,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "dragenter":
        return Ll = Ka(
          Ll,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "mouseover":
        return ql = Ka(
          ql,
          e,
          t,
          l,
          n,
          a
        ), !0;
      case "pointerover":
        var i = a.pointerId;
        return Za.set(
          i,
          Ka(
            Za.get(i) || null,
            e,
            t,
            l,
            n,
            a
          )
        ), !0;
      case "gotpointercapture":
        return i = a.pointerId, ka.set(
          i,
          Ka(
            ka.get(i) || null,
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
  function Hm(e) {
    var t = hn(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (t = l.tag, t === 13) {
          if (t = g(l), t !== null) {
            e.blockedOn = t, $s(e.priority, function() {
              Um(l);
            });
            return;
          }
        } else if (t === 31) {
          if (t = p(l), t !== null) {
            e.blockedOn = t, $s(e.priority, function() {
              Um(l);
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
  function Ei(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = ns(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var n = new l.constructor(
          l.type,
          l
        );
        ar = n, l.target.dispatchEvent(n), ar = null;
      } else
        return t = yn(l), t !== null && Dm(t), e.blockedOn = l, !1;
      t.shift();
    }
    return !0;
  }
  function Lm(e, t, l) {
    Ei(e) && l.delete(t);
  }
  function L1() {
    us = !1, Hl !== null && Ei(Hl) && (Hl = null), Ll !== null && Ei(Ll) && (Ll = null), ql !== null && Ei(ql) && (ql = null), Za.forEach(Lm), ka.forEach(Lm);
  }
  function xi(e, t) {
    e.blockedOn === t && (e.blockedOn = null, us || (us = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      L1
    )));
  }
  var Ri = null;
  function qm(e) {
    Ri !== e && (Ri = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Ri === e && (Ri = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], n = e[t + 1], a = e[t + 2];
          if (typeof n != "function") {
            if (as(n || l) === null)
              continue;
            break;
          }
          var i = yn(l);
          i !== null && (e.splice(t, 3), t -= 3, nc(
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
  function Wn(e) {
    function t(v) {
      return xi(v, e);
    }
    Hl !== null && xi(Hl, e), Ll !== null && xi(Ll, e), ql !== null && xi(ql, e), Za.forEach(t), ka.forEach(t);
    for (var l = 0; l < Yl.length; l++) {
      var n = Yl[l];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < Yl.length && (l = Yl[0], l.blockedOn === null); )
      Hm(l), l.blockedOn === null && Yl.shift();
    if (l = (e.ownerDocument || e).$$reactFormReplay, l != null)
      for (n = 0; n < l.length; n += 3) {
        var a = l[n], i = l[n + 1], f = a[it] || null;
        if (typeof i == "function")
          f || qm(l);
        else if (f) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (a = i, f = i[it] || null)
              h = f.formAction;
            else if (as(a) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? l[n + 1] = h : (l.splice(n, 3), n -= 3), qm(l);
        }
      }
  }
  function Ym() {
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
  function is(e) {
    this._internalRoot = e;
  }
  Ti.prototype.render = is.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var l = t.current, n = Tt();
    Nm(l, n, e, t, null, null);
  }, Ti.prototype.unmount = is.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Nm(e.current, 2, null, e, null, null), ai(), t[mn] = null;
    }
  };
  function Ti(e) {
    this._internalRoot = e;
  }
  Ti.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Js();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < Yl.length && t !== 0 && t < Yl[l].priority; l++) ;
      Yl.splice(l, 0, e), l === 0 && Hm(e);
    }
  };
  var Xm = c.version;
  if (Xm !== "19.2.3")
    throw Error(
      o(
        527,
        Xm,
        "19.2.3"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = b(t), e = e !== null ? R(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var q1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ai = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ai.isDisabled && Ai.supportsFiber)
      try {
        la = Ai.inject(
          q1
        ), gt = Ai;
      } catch {
      }
  }
  return Wa.createRoot = function(e, t) {
    if (!d(e)) throw Error(o(299));
    var l = !1, n = "", a = Jf, i = $f, f = Wf;
    return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Om(
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
      Ym
    ), e[mn] = t.current, Xc(e), new is(t);
  }, Wa.hydrateRoot = function(e, t, l) {
    if (!d(e)) throw Error(o(299));
    var n = !1, a = "", i = Jf, f = $f, h = Wf, v = null;
    return l != null && (l.unstable_strictMode === !0 && (n = !0), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (i = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (v = l.formState)), t = Om(
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
      h,
      Ym
    ), t.context = zm(null), l = t.current, n = Tt(), n = Wi(n), a = Al(n), a.callback = null, wl(l, a, n), l = n, t.current.lanes = l, aa(t, l), kt(t), e[mn] = t.current, Xc(e), new Ti(t);
  }, Wa.version = "19.2.3", Wa;
}
var nh;
function wp() {
  if (nh) return ms.exports;
  nh = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), ms.exports = Ap(), ms.exports;
}
var Cp = wp();
const jt = ({
  label: u,
  onClick: r,
  disabled: c,
  type: s = "button",
  variant: o = "primary",
  className: d,
  children: m,
  mainButtonStyle: g
}) => {
  const p = "py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! transition-all! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed!", y = {
    primary: "bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! shadow-md!",
    outline: "bg-transparent! border-2! border-solid! border-[var(--button-primary-bg)]! text-[var(--button-primary-bg)]! shadow-md! hover:bg-gray-50!",
    link: "bg-transparent! text-[var(--button-link-text)]! hover:text-[var(--button-link-text)]! border-none! shadow-none! p-0! no-underline!"
  }, b = d ? `${p} ${y[o]} ${d}` : `${p} ${y[o]}`;
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      className: b,
      onClick: r,
      disabled: c,
      type: s,
      style: { ...g, borderStyle: "solid !important" },
      children: m || u
    }
  );
}, cn = A.forwardRef(
  (u, r) => {
    const {
      label: c,
      startIcon: s,
      endIcon: o,
      error: d,
      helperText: m,
      optional: g,
      className: p,
      options: y,
      ...b
    } = u, R = !!d || !!m, N = b.type === "select" || !!y;
    return /* @__PURE__ */ x.jsxs("div", { className: `flex! flex-col! ${p || ""}`, children: [
      c && /* @__PURE__ */ x.jsxs("label", { className: "block! text-sm! font-medium! text-gray-700 mb-1! text-left!", children: [
        c,
        " ",
        g && /* @__PURE__ */ x.jsx("span", { className: "text-gray-500 italic text-[13px]", children: "(Optional)" })
      ] }),
      /* @__PURE__ */ x.jsxs("div", { className: "flex! items-center! relative!", children: [
        s && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! px-2! mr-1.5!",
            "aria-hidden": !0,
            children: s
          }
        ),
        N ? /* @__PURE__ */ x.jsx(
          "select",
          {
            ref: r,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! appearance-none! bg-white focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: R ? "#d64545" : "#cbd5d5",
              ...b.style
            },
            ...b,
            children: y && y.map((Y) => /* @__PURE__ */ x.jsx("option", { value: Y.value, children: Y.label }, Y.value))
          }
        ) : /* @__PURE__ */ x.jsx(
          "input",
          {
            ref: r,
            className: "flex-1! py-2.5! pr-11! pl-3! rounded-md! text-sm! outline-none! box-border! focus:shadow-[0_0_0_3px_rgba(59,130,246,0.08)]!",
            style: {
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: R ? "#d64545" : "#cbd5d5",
              ...b.style
            },
            ...b
          }
        ),
        o && /* @__PURE__ */ x.jsx(
          "span",
          {
            className: "flex! items-center! justify-center! absolute! right-2.5! top-1/2! -translate-y-1/2! pointer-events-auto! z-2!",
            "aria-hidden": !0,
            children: o
          }
        )
      ] }),
      d && typeof d == "string" && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: d }),
      !d && m && /* @__PURE__ */ x.jsx("div", { className: "text-[#d64545] text-[13px]! mt-1.5! text-left!", children: m })
    ] });
  }
), _p = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%201.875C5.50781%201.875%201.875%205.50781%201.875%2010C1.875%2014.4922%205.50781%2018.125%2010%2018.125C14.4922%2018.125%2018.125%2014.4922%2018.125%2010C18.125%205.50781%2014.4922%201.875%2010%201.875ZM10%2020C4.49219%2020%200%2015.5078%200%2010C0%204.49219%204.49219%200%2010%200C15.5078%200%2020%204.49219%2020%2010C20%2015.5078%2015.5078%2020%2010%2020ZM8.4375%2013.125H9.375V10.625H8.4375C7.92969%2010.625%207.5%2010.1953%207.5%209.6875C7.5%209.17969%207.92969%208.75%208.4375%208.75H10.3125C10.8203%208.75%2011.25%209.17969%2011.25%209.6875V13.125H11.5625C12.0703%2013.125%2012.5%2013.5547%2012.5%2014.0625C12.5%2014.5703%2012.0703%2015%2011.5625%2015H8.4375C7.92969%2015%207.5%2014.5703%207.5%2014.0625C7.5%2013.5547%207.92969%2013.125%208.4375%2013.125ZM10%207.5C9.29688%207.5%208.75%206.95312%208.75%206.25C8.75%205.54688%209.29688%205%2010%205C10.7031%205%2011.25%205.54688%2011.25%206.25C11.25%206.95312%2010.7031%207.5%2010%207.5Z'%20fill='%231FBDD2'/%3e%3c/svg%3e", Ds = ({
  type: u,
  message: r,
  actionText: c,
  onActionClick: s,
  onClose: o,
  className: d = "",
  children: m
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
        return /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ x.jsx("img", { src: _p, alt: "info", className: "w-5! h-5!" });
    }
  }, y = g();
  return /* @__PURE__ */ x.jsxs("div", { className: `flex! items-center! py-3! px-4! rounded! ${y.bg} ${y.border} ${d}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${y.iconColor}!`, children: p() }),
    /* @__PURE__ */ x.jsxs("div", { className: "ml-3! flex-1! flex! items-center! gap-2!", children: [
      /* @__PURE__ */ x.jsx("span", { className: `text-sm! font-medium! ${y.text}`, children: r }),
      c && s && /* @__PURE__ */ x.jsx(
        "button",
        {
          type: "button",
          onClick: s,
          className: `text-sm! font-medium! ${y.actionColor} ${y.actionHover} underline! bg-transparent! border-none! cursor-pointer! p-0! whitespace-nowrap! shadow-none!`,
          children: c
        }
      ),
      m
    ] }),
    o && /* @__PURE__ */ x.jsxs(
      "button",
      {
        type: "button",
        onClick: o,
        className: `ml-2! flex-shrink-0! inline-flex! ${y.iconColor} ${y.closeButtonHover} bg-transparent! border-none! cursor-pointer! p-0! shadow-none!`,
        children: [
          /* @__PURE__ */ x.jsx("span", { className: "sr-only", children: "Dismiss" }),
          /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
        ]
      }
    )
  ] });
}, kh = () => /* @__PURE__ */ x.jsx("span", { className: "w-4! h-4! border-2! border-black/10 border-t-[#2b6fd6] rounded-full! animate-spin!" });
class Ia extends Error {
}
Ia.prototype.name = "InvalidTokenError";
function Op(u) {
  return decodeURIComponent(atob(u).replace(/(.)/g, (r, c) => {
    let s = c.charCodeAt(0).toString(16).toUpperCase();
    return s.length < 2 && (s = "0" + s), "%" + s;
  }));
}
function zp(u) {
  let r = u.replace(/-/g, "+").replace(/_/g, "/");
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
function Us(u, r) {
  if (typeof u != "string")
    throw new Ia("Invalid token specified: must be a string");
  r || (r = {});
  const c = r.header === !0 ? 0 : 1, s = u.split(".")[c];
  if (typeof s != "string")
    throw new Ia(`Invalid token specified: missing part #${c + 1}`);
  let o;
  try {
    o = zp(s);
  } catch (d) {
    throw new Ia(`Invalid token specified: invalid base64 for part #${c + 1} (${d.message})`);
  }
  try {
    return JSON.parse(o);
  } catch (d) {
    throw new Ia(`Invalid token specified: invalid json for part #${c + 1} (${d.message})`);
  }
}
function Np() {
  const u = window.location.hostname;
  if (u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u))
    return "";
  const r = u.split(".");
  return r.length >= 2 ? "." + r.slice(-2).join(".") : "";
}
function Mp() {
  const u = window.location.hostname;
  return u === "localhost" || u === "127.0.0.1" || /^\d+\.\d+\.\d+\.\d+$/.test(u) || u.startsWith("dev.") || u.startsWith("dev-") ? "dev" : u.startsWith("test.") || u.startsWith("test-") ? "test" : u.startsWith("stage.") || u.startsWith("stage-") ? "stage" : "prod";
}
function ah() {
  const u = window.location.href, r = new URL(u), c = r.hostname;
  if (c.startsWith("dev.")) {
    const s = c.replace("dev.", "dev-learn.");
    return `${r.protocol}//${s}/courses`;
  } else if (c.startsWith("test.")) {
    const s = c.replace("test.", "test-learn.");
    return `${r.protocol}//${s}/courses`;
  } else if (c.startsWith("stage.")) {
    const s = c.replace("stage.", "stage-learn.");
    return `${r.protocol}//${s}/courses`;
  } else if (c.split(".").length === 2) {
    const o = `learn.${c}`;
    return `${r.protocol}//${o}/courses`;
  } else
    return `${r.protocol}//${c}/courses`;
}
function Ui(u, r, c, s = !0) {
  const o = /* @__PURE__ */ new Date();
  o.setSeconds(o.getSeconds() + c);
  const d = Np(), m = d ? `; domain=${d}` : "", g = window.location.protocol === "https:" ? "; secure" : "", p = s ? encodeURIComponent(r) : r;
  document.cookie = `${u}=${p}; expires=${o.toUTCString()}; path=/${m}${g}; SameSite=Lax`;
}
function Kh(u, r) {
  return function() {
    return u.apply(r, arguments);
  };
}
var uh = {};
const { toString: Dp } = Object.prototype, { getPrototypeOf: js } = Object, { iterator: Li, toStringTag: Jh } = Symbol, qi = /* @__PURE__ */ ((u) => (r) => {
  const c = Dp.call(r);
  return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Gt = (u) => (u = u.toLowerCase(), (r) => qi(r) === u), Yi = (u) => (r) => typeof r === u, { isArray: ea } = Array, Fn = Yi("undefined");
function nu(u) {
  return u !== null && !Fn(u) && u.constructor !== null && !Fn(u.constructor) && mt(u.constructor.isBuffer) && u.constructor.isBuffer(u);
}
const $h = Gt("ArrayBuffer");
function Up(u) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(u) : r = u && u.buffer && $h(u.buffer), r;
}
const jp = Yi("string"), mt = Yi("function"), Wh = Yi("number"), au = (u) => u !== null && typeof u == "object", Bp = (u) => u === !0 || u === !1, zi = (u) => {
  if (qi(u) !== "object")
    return !1;
  const r = js(u);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Jh in u) && !(Li in u);
}, Hp = (u) => {
  if (!au(u) || nu(u))
    return !1;
  try {
    return Object.keys(u).length === 0 && Object.getPrototypeOf(u) === Object.prototype;
  } catch {
    return !1;
  }
}, Lp = Gt("Date"), qp = Gt("File"), Yp = Gt("Blob"), Xp = Gt("FileList"), Gp = (u) => au(u) && mt(u.pipe), Vp = (u) => {
  let r;
  return u && (typeof FormData == "function" && u instanceof FormData || mt(u.append) && ((r = qi(u)) === "formdata" || // detect form-data instance
  r === "object" && mt(u.toString) && u.toString() === "[object FormData]"));
}, Qp = Gt("URLSearchParams"), [Zp, kp, Kp, Jp] = ["ReadableStream", "Request", "Response", "Headers"].map(Gt), $p = (u) => u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function uu(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u")
    return;
  let s, o;
  if (typeof u != "object" && (u = [u]), ea(u))
    for (s = 0, o = u.length; s < o; s++)
      r.call(null, u[s], s, u);
  else {
    if (nu(u))
      return;
    const d = c ? Object.getOwnPropertyNames(u) : Object.keys(u), m = d.length;
    let g;
    for (s = 0; s < m; s++)
      g = d[s], r.call(null, u[g], g, u);
  }
}
function Fh(u, r) {
  if (nu(u))
    return null;
  r = r.toLowerCase();
  const c = Object.keys(u);
  let s = c.length, o;
  for (; s-- > 0; )
    if (o = c[s], r === o.toLowerCase())
      return o;
  return null;
}
const sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ih = (u) => !Fn(u) && u !== sn;
function Rs() {
  const { caseless: u, skipUndefined: r } = Ih(this) && this || {}, c = {}, s = (o, d) => {
    const m = u && Fh(c, d) || d;
    zi(c[m]) && zi(o) ? c[m] = Rs(c[m], o) : zi(o) ? c[m] = Rs({}, o) : ea(o) ? c[m] = o.slice() : (!r || !Fn(o)) && (c[m] = o);
  };
  for (let o = 0, d = arguments.length; o < d; o++)
    arguments[o] && uu(arguments[o], s);
  return c;
}
const Wp = (u, r, c, { allOwnKeys: s } = {}) => (uu(r, (o, d) => {
  c && mt(o) ? u[d] = Kh(o, c) : u[d] = o;
}, { allOwnKeys: s }), u), Fp = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u), Ip = (u, r, c, s) => {
  u.prototype = Object.create(r.prototype, s), u.prototype.constructor = u, Object.defineProperty(u, "super", {
    value: r.prototype
  }), c && Object.assign(u.prototype, c);
}, Pp = (u, r, c, s) => {
  let o, d, m;
  const g = {};
  if (r = r || {}, u == null) return r;
  do {
    for (o = Object.getOwnPropertyNames(u), d = o.length; d-- > 0; )
      m = o[d], (!s || s(m, u, r)) && !g[m] && (r[m] = u[m], g[m] = !0);
    u = c !== !1 && js(u);
  } while (u && (!c || c(u, r)) && u !== Object.prototype);
  return r;
}, ev = (u, r, c) => {
  u = String(u), (c === void 0 || c > u.length) && (c = u.length), c -= r.length;
  const s = u.indexOf(r, c);
  return s !== -1 && s === c;
}, tv = (u) => {
  if (!u) return null;
  if (ea(u)) return u;
  let r = u.length;
  if (!Wh(r)) return null;
  const c = new Array(r);
  for (; r-- > 0; )
    c[r] = u[r];
  return c;
}, lv = /* @__PURE__ */ ((u) => (r) => u && r instanceof u)(typeof Uint8Array < "u" && js(Uint8Array)), nv = (u, r) => {
  const s = (u && u[Li]).call(u);
  let o;
  for (; (o = s.next()) && !o.done; ) {
    const d = o.value;
    r.call(u, d[0], d[1]);
  }
}, av = (u, r) => {
  let c;
  const s = [];
  for (; (c = u.exec(r)) !== null; )
    s.push(c);
  return s;
}, uv = Gt("HTMLFormElement"), iv = (u) => u.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(c, s, o) {
    return s.toUpperCase() + o;
  }
), ih = (({ hasOwnProperty: u }) => (r, c) => u.call(r, c))(Object.prototype), rv = Gt("RegExp"), Ph = (u, r) => {
  const c = Object.getOwnPropertyDescriptors(u), s = {};
  uu(c, (o, d) => {
    let m;
    (m = r(o, d, u)) !== !1 && (s[d] = m || o);
  }), Object.defineProperties(u, s);
}, cv = (u) => {
  Ph(u, (r, c) => {
    if (mt(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
      return !1;
    const s = u[c];
    if (mt(s)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + c + "'");
      });
    }
  });
}, sv = (u, r) => {
  const c = {}, s = (o) => {
    o.forEach((d) => {
      c[d] = !0;
    });
  };
  return ea(u) ? s(u) : s(String(u).split(r)), c;
}, ov = () => {
}, fv = (u, r) => u != null && Number.isFinite(u = +u) ? u : r;
function dv(u) {
  return !!(u && mt(u.append) && u[Jh] === "FormData" && u[Li]);
}
const mv = (u) => {
  const r = new Array(10), c = (s, o) => {
    if (au(s)) {
      if (r.indexOf(s) >= 0)
        return;
      if (nu(s))
        return s;
      if (!("toJSON" in s)) {
        r[o] = s;
        const d = ea(s) ? [] : {};
        return uu(s, (m, g) => {
          const p = c(m, o + 1);
          !Fn(p) && (d[g] = p);
        }), r[o] = void 0, d;
      }
    }
    return s;
  };
  return c(u, 0);
}, hv = Gt("AsyncFunction"), yv = (u) => u && (au(u) || mt(u)) && mt(u.then) && mt(u.catch), e0 = ((u, r) => u ? setImmediate : r ? ((c, s) => (sn.addEventListener("message", ({ source: o, data: d }) => {
  o === sn && d === c && s.length && s.shift()();
}, !1), (o) => {
  s.push(o), sn.postMessage(c, "*");
}))(`axios@${Math.random()}`, []) : (c) => setTimeout(c))(
  typeof setImmediate == "function",
  mt(sn.postMessage)
), gv = typeof queueMicrotask < "u" ? queueMicrotask.bind(sn) : typeof uh < "u" && uh.nextTick || e0, pv = (u) => u != null && mt(u[Li]), z = {
  isArray: ea,
  isArrayBuffer: $h,
  isBuffer: nu,
  isFormData: Vp,
  isArrayBufferView: Up,
  isString: jp,
  isNumber: Wh,
  isBoolean: Bp,
  isObject: au,
  isPlainObject: zi,
  isEmptyObject: Hp,
  isReadableStream: Zp,
  isRequest: kp,
  isResponse: Kp,
  isHeaders: Jp,
  isUndefined: Fn,
  isDate: Lp,
  isFile: qp,
  isBlob: Yp,
  isRegExp: rv,
  isFunction: mt,
  isStream: Gp,
  isURLSearchParams: Qp,
  isTypedArray: lv,
  isFileList: Xp,
  forEach: uu,
  merge: Rs,
  extend: Wp,
  trim: $p,
  stripBOM: Fp,
  inherits: Ip,
  toFlatObject: Pp,
  kindOf: qi,
  kindOfTest: Gt,
  endsWith: ev,
  toArray: tv,
  forEachEntry: nv,
  matchAll: av,
  isHTMLForm: uv,
  hasOwnProperty: ih,
  hasOwnProp: ih,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ph,
  freezeMethods: cv,
  toObjectSet: sv,
  toCamelCase: iv,
  noop: ov,
  toFiniteNumber: fv,
  findKey: Fh,
  global: sn,
  isContextDefined: Ih,
  isSpecCompliantForm: dv,
  toJSONObject: mv,
  isAsyncFn: hv,
  isThenable: yv,
  setImmediate: e0,
  asap: gv,
  isIterable: pv
};
function re(u, r, c, s, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = u, this.name = "AxiosError", r && (this.code = r), c && (this.config = c), s && (this.request = s), o && (this.response = o, this.status = o.status ? o.status : null);
}
z.inherits(re, Error, {
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
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const t0 = re.prototype, l0 = {};
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
  l0[u] = { value: u };
});
Object.defineProperties(re, l0);
Object.defineProperty(t0, "isAxiosError", { value: !0 });
re.from = (u, r, c, s, o, d) => {
  const m = Object.create(t0);
  z.toFlatObject(u, m, function(b) {
    return b !== Error.prototype;
  }, (y) => y !== "isAxiosError");
  const g = u && u.message ? u.message : "Error", p = r == null && u ? u.code : r;
  return re.call(m, g, p, c, s, o), u && m.cause == null && Object.defineProperty(m, "cause", { value: u, configurable: !0 }), m.name = u && u.name || "Error", d && Object.assign(m, d), m;
};
const vv = null;
function Ts(u) {
  return z.isPlainObject(u) || z.isArray(u);
}
function n0(u) {
  return z.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function rh(u, r, c) {
  return u ? u.concat(r).map(function(o, d) {
    return o = n0(o), !c && d ? "[" + o + "]" : o;
  }).join(c ? "." : "") : r;
}
function bv(u) {
  return z.isArray(u) && !u.some(Ts);
}
const Sv = z.toFlatObject(z, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function Xi(u, r, c) {
  if (!z.isObject(u))
    throw new TypeError("target must be an object");
  r = r || new FormData(), c = z.toFlatObject(c, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(U, D) {
    return !z.isUndefined(D[U]);
  });
  const s = c.metaTokens, o = c.visitor || b, d = c.dots, m = c.indexes, p = (c.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(r);
  if (!z.isFunction(o))
    throw new TypeError("visitor must be a function");
  function y(_) {
    if (_ === null) return "";
    if (z.isDate(_))
      return _.toISOString();
    if (z.isBoolean(_))
      return _.toString();
    if (!p && z.isBlob(_))
      throw new re("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(_) || z.isTypedArray(_) ? p && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function b(_, U, D) {
    let V = _;
    if (_ && !D && typeof _ == "object") {
      if (z.endsWith(U, "{}"))
        U = s ? U : U.slice(0, -2), _ = JSON.stringify(_);
      else if (z.isArray(_) && bv(_) || (z.isFileList(_) || z.endsWith(U, "[]")) && (V = z.toArray(_)))
        return U = n0(U), V.forEach(function(K, te) {
          !(z.isUndefined(K) || K === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? rh([U], te, d) : m === null ? U : U + "[]",
            y(K)
          );
        }), !1;
    }
    return Ts(_) ? !0 : (r.append(rh(D, U, d), y(_)), !1);
  }
  const R = [], N = Object.assign(Sv, {
    defaultVisitor: b,
    convertValue: y,
    isVisitable: Ts
  });
  function Y(_, U) {
    if (!z.isUndefined(_)) {
      if (R.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + U.join("."));
      R.push(_), z.forEach(_, function(V, Q) {
        (!(z.isUndefined(V) || V === null) && o.call(
          r,
          V,
          z.isString(Q) ? Q.trim() : Q,
          U,
          N
        )) === !0 && Y(V, U ? U.concat(Q) : [Q]);
      }), R.pop();
    }
  }
  if (!z.isObject(u))
    throw new TypeError("data must be an object");
  return Y(u), r;
}
function ch(u) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function(s) {
    return r[s];
  });
}
function Bs(u, r) {
  this._pairs = [], u && Xi(u, this, r);
}
const a0 = Bs.prototype;
a0.append = function(r, c) {
  this._pairs.push([r, c]);
};
a0.toString = function(r) {
  const c = r ? function(s) {
    return r.call(this, s, ch);
  } : ch;
  return this._pairs.map(function(o) {
    return c(o[0]) + "=" + c(o[1]);
  }, "").join("&");
};
function Ev(u) {
  return encodeURIComponent(u).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
}
function u0(u, r, c) {
  if (!r)
    return u;
  const s = c && c.encode || Ev;
  z.isFunction(c) && (c = {
    serialize: c
  });
  const o = c && c.serialize;
  let d;
  if (o ? d = o(r, c) : d = z.isURLSearchParams(r) ? r.toString() : new Bs(r, c).toString(s), d) {
    const m = u.indexOf("#");
    m !== -1 && (u = u.slice(0, m)), u += (u.indexOf("?") === -1 ? "?" : "&") + d;
  }
  return u;
}
class sh {
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
  use(r, c, s) {
    return this.handlers.push({
      fulfilled: r,
      rejected: c,
      synchronous: s ? s.synchronous : !1,
      runWhen: s ? s.runWhen : null
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
    z.forEach(this.handlers, function(s) {
      s !== null && r(s);
    });
  }
}
const i0 = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xv = typeof URLSearchParams < "u" ? URLSearchParams : Bs, Rv = typeof FormData < "u" ? FormData : null, Tv = typeof Blob < "u" ? Blob : null, Av = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xv,
    FormData: Rv,
    Blob: Tv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Hs = typeof window < "u" && typeof document < "u", As = typeof navigator == "object" && navigator || void 0, wv = Hs && (!As || ["ReactNative", "NativeScript", "NS"].indexOf(As.product) < 0), Cv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", _v = Hs && window.location.href || "http://localhost", Ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Hs,
  hasStandardBrowserEnv: wv,
  hasStandardBrowserWebWorkerEnv: Cv,
  navigator: As,
  origin: _v
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...Ov,
  ...Av
};
function zv(u, r) {
  return Xi(u, new at.classes.URLSearchParams(), {
    visitor: function(c, s, o, d) {
      return at.isNode && z.isBuffer(c) ? (this.append(s, c.toString("base64")), !1) : d.defaultVisitor.apply(this, arguments);
    },
    ...r
  });
}
function Nv(u) {
  return z.matchAll(/\w+|\[(\w*)]/g, u).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Mv(u) {
  const r = {}, c = Object.keys(u);
  let s;
  const o = c.length;
  let d;
  for (s = 0; s < o; s++)
    d = c[s], r[d] = u[d];
  return r;
}
function r0(u) {
  function r(c, s, o, d) {
    let m = c[d++];
    if (m === "__proto__") return !0;
    const g = Number.isFinite(+m), p = d >= c.length;
    return m = !m && z.isArray(o) ? o.length : m, p ? (z.hasOwnProp(o, m) ? o[m] = [o[m], s] : o[m] = s, !g) : ((!o[m] || !z.isObject(o[m])) && (o[m] = []), r(c, s, o[m], d) && z.isArray(o[m]) && (o[m] = Mv(o[m])), !g);
  }
  if (z.isFormData(u) && z.isFunction(u.entries)) {
    const c = {};
    return z.forEachEntry(u, (s, o) => {
      r(Nv(s), o, c, 0);
    }), c;
  }
  return null;
}
function Dv(u, r, c) {
  if (z.isString(u))
    try {
      return (r || JSON.parse)(u), z.trim(u);
    } catch (s) {
      if (s.name !== "SyntaxError")
        throw s;
    }
  return (c || JSON.stringify)(u);
}
const iu = {
  transitional: i0,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(r, c) {
    const s = c.getContentType() || "", o = s.indexOf("application/json") > -1, d = z.isObject(r);
    if (d && z.isHTMLForm(r) && (r = new FormData(r)), z.isFormData(r))
      return o ? JSON.stringify(r0(r)) : r;
    if (z.isArrayBuffer(r) || z.isBuffer(r) || z.isStream(r) || z.isFile(r) || z.isBlob(r) || z.isReadableStream(r))
      return r;
    if (z.isArrayBufferView(r))
      return r.buffer;
    if (z.isURLSearchParams(r))
      return c.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let g;
    if (d) {
      if (s.indexOf("application/x-www-form-urlencoded") > -1)
        return zv(r, this.formSerializer).toString();
      if ((g = z.isFileList(r)) || s.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return Xi(
          g ? { "files[]": r } : r,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return d || o ? (c.setContentType("application/json", !1), Dv(r)) : r;
  }],
  transformResponse: [function(r) {
    const c = this.transitional || iu.transitional, s = c && c.forcedJSONParsing, o = this.responseType === "json";
    if (z.isResponse(r) || z.isReadableStream(r))
      return r;
    if (r && z.isString(r) && (s && !this.responseType || o)) {
      const m = !(c && c.silentJSONParsing) && o;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
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
z.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  iu.headers[u] = {};
});
const Uv = z.toObjectSet([
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
]), jv = (u) => {
  const r = {};
  let c, s, o;
  return u && u.split(`
`).forEach(function(m) {
    o = m.indexOf(":"), c = m.substring(0, o).trim().toLowerCase(), s = m.substring(o + 1).trim(), !(!c || r[c] && Uv[c]) && (c === "set-cookie" ? r[c] ? r[c].push(s) : r[c] = [s] : r[c] = r[c] ? r[c] + ", " + s : s);
  }), r;
}, oh = /* @__PURE__ */ Symbol("internals");
function Fa(u) {
  return u && String(u).trim().toLowerCase();
}
function Ni(u) {
  return u === !1 || u == null ? u : z.isArray(u) ? u.map(Ni) : String(u);
}
function Bv(u) {
  const r = /* @__PURE__ */ Object.create(null), c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = c.exec(u); )
    r[s[1]] = s[2];
  return r;
}
const Hv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function gs(u, r, c, s, o) {
  if (z.isFunction(s))
    return s.call(this, r, c);
  if (o && (r = c), !!z.isString(r)) {
    if (z.isString(s))
      return r.indexOf(s) !== -1;
    if (z.isRegExp(s))
      return s.test(r);
  }
}
function Lv(u) {
  return u.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, c, s) => c.toUpperCase() + s);
}
function qv(u, r) {
  const c = z.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + c, {
      value: function(o, d, m) {
        return this[s].call(this, r, o, d, m);
      },
      configurable: !0
    });
  });
}
let ht = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, c, s) {
    const o = this;
    function d(g, p, y) {
      const b = Fa(p);
      if (!b)
        throw new Error("header name must be a non-empty string");
      const R = z.findKey(o, b);
      (!R || o[R] === void 0 || y === !0 || y === void 0 && o[R] !== !1) && (o[R || p] = Ni(g));
    }
    const m = (g, p) => z.forEach(g, (y, b) => d(y, b, p));
    if (z.isPlainObject(r) || r instanceof this.constructor)
      m(r, c);
    else if (z.isString(r) && (r = r.trim()) && !Hv(r))
      m(jv(r), c);
    else if (z.isObject(r) && z.isIterable(r)) {
      let g = {}, p, y;
      for (const b of r) {
        if (!z.isArray(b))
          throw TypeError("Object iterator must return a key-value pair");
        g[y = b[0]] = (p = g[y]) ? z.isArray(p) ? [...p, b[1]] : [p, b[1]] : b[1];
      }
      m(g, c);
    } else
      r != null && d(c, r, s);
    return this;
  }
  get(r, c) {
    if (r = Fa(r), r) {
      const s = z.findKey(this, r);
      if (s) {
        const o = this[s];
        if (!c)
          return o;
        if (c === !0)
          return Bv(o);
        if (z.isFunction(c))
          return c.call(this, o, s);
        if (z.isRegExp(c))
          return c.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (r = Fa(r), r) {
      const s = z.findKey(this, r);
      return !!(s && this[s] !== void 0 && (!c || gs(this, this[s], s, c)));
    }
    return !1;
  }
  delete(r, c) {
    const s = this;
    let o = !1;
    function d(m) {
      if (m = Fa(m), m) {
        const g = z.findKey(s, m);
        g && (!c || gs(s, s[g], g, c)) && (delete s[g], o = !0);
      }
    }
    return z.isArray(r) ? r.forEach(d) : d(r), o;
  }
  clear(r) {
    const c = Object.keys(this);
    let s = c.length, o = !1;
    for (; s--; ) {
      const d = c[s];
      (!r || gs(this, this[d], d, r, !0)) && (delete this[d], o = !0);
    }
    return o;
  }
  normalize(r) {
    const c = this, s = {};
    return z.forEach(this, (o, d) => {
      const m = z.findKey(s, d);
      if (m) {
        c[m] = Ni(o), delete c[d];
        return;
      }
      const g = r ? Lv(d) : String(d).trim();
      g !== d && delete c[d], c[g] = Ni(o), s[g] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const c = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (s, o) => {
      s != null && s !== !1 && (c[o] = r && z.isArray(s) ? s.join(", ") : s);
    }), c;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, c]) => r + ": " + c).join(`
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
  static concat(r, ...c) {
    const s = new this(r);
    return c.forEach((o) => s.set(o)), s;
  }
  static accessor(r) {
    const s = (this[oh] = this[oh] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function d(m) {
      const g = Fa(m);
      s[g] || (qv(o, m), s[g] = !0);
    }
    return z.isArray(r) ? r.forEach(d) : d(r), this;
  }
};
ht.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(ht.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(s) {
      this[c] = s;
    }
  };
});
z.freezeMethods(ht);
function ps(u, r) {
  const c = this || iu, s = r || c, o = ht.from(s.headers);
  let d = s.data;
  return z.forEach(u, function(g) {
    d = g.call(c, d, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), d;
}
function c0(u) {
  return !!(u && u.__CANCEL__);
}
function ta(u, r, c) {
  re.call(this, u ?? "canceled", re.ERR_CANCELED, r, c), this.name = "CanceledError";
}
z.inherits(ta, re, {
  __CANCEL__: !0
});
function s0(u, r, c) {
  const s = c.config.validateStatus;
  !c.status || !s || s(c.status) ? u(c) : r(new re(
    "Request failed with status code " + c.status,
    [re.ERR_BAD_REQUEST, re.ERR_BAD_RESPONSE][Math.floor(c.status / 100) - 4],
    c.config,
    c.request,
    c
  ));
}
function Yv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return r && r[1] || "";
}
function Xv(u, r) {
  u = u || 10;
  const c = new Array(u), s = new Array(u);
  let o = 0, d = 0, m;
  return r = r !== void 0 ? r : 1e3, function(p) {
    const y = Date.now(), b = s[d];
    m || (m = y), c[o] = p, s[o] = y;
    let R = d, N = 0;
    for (; R !== o; )
      N += c[R++], R = R % u;
    if (o = (o + 1) % u, o === d && (d = (d + 1) % u), y - m < r)
      return;
    const Y = b && y - b;
    return Y ? Math.round(N * 1e3 / Y) : void 0;
  };
}
function Gv(u, r) {
  let c = 0, s = 1e3 / r, o, d;
  const m = (y, b = Date.now()) => {
    c = b, o = null, d && (clearTimeout(d), d = null), u(...y);
  };
  return [(...y) => {
    const b = Date.now(), R = b - c;
    R >= s ? m(y, b) : (o = y, d || (d = setTimeout(() => {
      d = null, m(o);
    }, s - R)));
  }, () => o && m(o)];
}
const ji = (u, r, c = 3) => {
  let s = 0;
  const o = Xv(50, 250);
  return Gv((d) => {
    const m = d.loaded, g = d.lengthComputable ? d.total : void 0, p = m - s, y = o(p), b = m <= g;
    s = m;
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
    u(R);
  }, c);
}, fh = (u, r) => {
  const c = u != null;
  return [(s) => r[0]({
    lengthComputable: c,
    total: u,
    loaded: s
  }), r[1]];
}, dh = (u) => (...r) => z.asap(() => u(...r)), Vv = at.hasStandardBrowserEnv ? /* @__PURE__ */ ((u, r) => (c) => (c = new URL(c, at.origin), u.protocol === c.protocol && u.host === c.host && (r || u.port === c.port)))(
  new URL(at.origin),
  at.navigator && /(msie|trident)/i.test(at.navigator.userAgent)
) : () => !0, Qv = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(u, r, c, s, o, d, m) {
      if (typeof document > "u") return;
      const g = [`${u}=${encodeURIComponent(r)}`];
      z.isNumber(c) && g.push(`expires=${new Date(c).toUTCString()}`), z.isString(s) && g.push(`path=${s}`), z.isString(o) && g.push(`domain=${o}`), d === !0 && g.push("secure"), z.isString(m) && g.push(`SameSite=${m}`), document.cookie = g.join("; ");
    },
    read(u) {
      if (typeof document > "u") return null;
      const r = document.cookie.match(new RegExp("(?:^|; )" + u + "=([^;]*)"));
      return r ? decodeURIComponent(r[1]) : null;
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
function Zv(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function kv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function o0(u, r, c) {
  let s = !Zv(r);
  return u && (s || c == !1) ? kv(u, r) : r;
}
const mh = (u) => u instanceof ht ? { ...u } : u;
function fn(u, r) {
  r = r || {};
  const c = {};
  function s(y, b, R, N) {
    return z.isPlainObject(y) && z.isPlainObject(b) ? z.merge.call({ caseless: N }, y, b) : z.isPlainObject(b) ? z.merge({}, b) : z.isArray(b) ? b.slice() : b;
  }
  function o(y, b, R, N) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return s(void 0, y, R, N);
    } else return s(y, b, R, N);
  }
  function d(y, b) {
    if (!z.isUndefined(b))
      return s(void 0, b);
  }
  function m(y, b) {
    if (z.isUndefined(b)) {
      if (!z.isUndefined(y))
        return s(void 0, y);
    } else return s(void 0, b);
  }
  function g(y, b, R) {
    if (R in r)
      return s(y, b);
    if (R in u)
      return s(void 0, y);
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
    headers: (y, b, R) => o(mh(y), mh(b), R, !0)
  };
  return z.forEach(Object.keys({ ...u, ...r }), function(b) {
    const R = p[b] || o, N = R(u[b], r[b], b);
    z.isUndefined(N) && R !== g || (c[b] = N);
  }), c;
}
const f0 = (u) => {
  const r = fn({}, u);
  let { data: c, withXSRFToken: s, xsrfHeaderName: o, xsrfCookieName: d, headers: m, auth: g } = r;
  if (r.headers = m = ht.from(m), r.url = u0(o0(r.baseURL, r.url, r.allowAbsoluteUrls), u.params, u.paramsSerializer), g && m.set(
    "Authorization",
    "Basic " + btoa((g.username || "") + ":" + (g.password ? unescape(encodeURIComponent(g.password)) : ""))
  ), z.isFormData(c)) {
    if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
      m.setContentType(void 0);
    else if (z.isFunction(c.getHeaders)) {
      const p = c.getHeaders(), y = ["content-type", "content-length"];
      Object.entries(p).forEach(([b, R]) => {
        y.includes(b.toLowerCase()) && m.set(b, R);
      });
    }
  }
  if (at.hasStandardBrowserEnv && (s && z.isFunction(s) && (s = s(r)), s || s !== !1 && Vv(r.url))) {
    const p = o && d && Qv.read(d);
    p && m.set(o, p);
  }
  return r;
}, Kv = typeof XMLHttpRequest < "u", Jv = Kv && function(u) {
  return new Promise(function(c, s) {
    const o = f0(u);
    let d = o.data;
    const m = ht.from(o.headers).normalize();
    let { responseType: g, onUploadProgress: p, onDownloadProgress: y } = o, b, R, N, Y, _;
    function U() {
      Y && Y(), _ && _(), o.cancelToken && o.cancelToken.unsubscribe(b), o.signal && o.signal.removeEventListener("abort", b);
    }
    let D = new XMLHttpRequest();
    D.open(o.method.toUpperCase(), o.url, !0), D.timeout = o.timeout;
    function V() {
      if (!D)
        return;
      const K = ht.from(
        "getAllResponseHeaders" in D && D.getAllResponseHeaders()
      ), W = {
        data: !g || g === "text" || g === "json" ? D.responseText : D.response,
        status: D.status,
        statusText: D.statusText,
        headers: K,
        config: u,
        request: D
      };
      s0(function(ae) {
        c(ae), U();
      }, function(ae) {
        s(ae), U();
      }, W), D = null;
    }
    "onloadend" in D ? D.onloadend = V : D.onreadystatechange = function() {
      !D || D.readyState !== 4 || D.status === 0 && !(D.responseURL && D.responseURL.indexOf("file:") === 0) || setTimeout(V);
    }, D.onabort = function() {
      D && (s(new re("Request aborted", re.ECONNABORTED, u, D)), D = null);
    }, D.onerror = function(te) {
      const W = te && te.message ? te.message : "Network Error", ne = new re(W, re.ERR_NETWORK, u, D);
      ne.event = te || null, s(ne), D = null;
    }, D.ontimeout = function() {
      let te = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const W = o.transitional || i0;
      o.timeoutErrorMessage && (te = o.timeoutErrorMessage), s(new re(
        te,
        W.clarifyTimeoutError ? re.ETIMEDOUT : re.ECONNABORTED,
        u,
        D
      )), D = null;
    }, d === void 0 && m.setContentType(null), "setRequestHeader" in D && z.forEach(m.toJSON(), function(te, W) {
      D.setRequestHeader(W, te);
    }), z.isUndefined(o.withCredentials) || (D.withCredentials = !!o.withCredentials), g && g !== "json" && (D.responseType = o.responseType), y && ([N, _] = ji(y, !0), D.addEventListener("progress", N)), p && D.upload && ([R, Y] = ji(p), D.upload.addEventListener("progress", R), D.upload.addEventListener("loadend", Y)), (o.cancelToken || o.signal) && (b = (K) => {
      D && (s(!K || K.type ? new ta(null, u, D) : K), D.abort(), D = null);
    }, o.cancelToken && o.cancelToken.subscribe(b), o.signal && (o.signal.aborted ? b() : o.signal.addEventListener("abort", b)));
    const Q = Yv(o.url);
    if (Q && at.protocols.indexOf(Q) === -1) {
      s(new re("Unsupported protocol " + Q + ":", re.ERR_BAD_REQUEST, u));
      return;
    }
    D.send(d || null);
  });
}, $v = (u, r) => {
  const { length: c } = u = u ? u.filter(Boolean) : [];
  if (r || c) {
    let s = new AbortController(), o;
    const d = function(y) {
      if (!o) {
        o = !0, g();
        const b = y instanceof Error ? y : this.reason;
        s.abort(b instanceof re ? b : new ta(b instanceof Error ? b.message : b));
      }
    };
    let m = r && setTimeout(() => {
      m = null, d(new re(`timeout ${r} of ms exceeded`, re.ETIMEDOUT));
    }, r);
    const g = () => {
      u && (m && clearTimeout(m), m = null, u.forEach((y) => {
        y.unsubscribe ? y.unsubscribe(d) : y.removeEventListener("abort", d);
      }), u = null);
    };
    u.forEach((y) => y.addEventListener("abort", d));
    const { signal: p } = s;
    return p.unsubscribe = () => z.asap(g), p;
  }
}, Wv = function* (u, r) {
  let c = u.byteLength;
  if (c < r) {
    yield u;
    return;
  }
  let s = 0, o;
  for (; s < c; )
    o = s + r, yield u.slice(s, o), s = o;
}, Fv = async function* (u, r) {
  for await (const c of Iv(u))
    yield* Wv(c, r);
}, Iv = async function* (u) {
  if (u[Symbol.asyncIterator]) {
    yield* u;
    return;
  }
  const r = u.getReader();
  try {
    for (; ; ) {
      const { done: c, value: s } = await r.read();
      if (c)
        break;
      yield s;
    }
  } finally {
    await r.cancel();
  }
}, hh = (u, r, c, s) => {
  const o = Fv(u, r);
  let d = 0, m, g = (p) => {
    m || (m = !0, s && s(p));
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
        if (c) {
          let N = d += R;
          c(N);
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
}, yh = 64 * 1024, { isFunction: Ci } = z, Pv = (({ Request: u, Response: r }) => ({
  Request: u,
  Response: r
}))(z.global), {
  ReadableStream: gh,
  TextEncoder: ph
} = z.global, vh = (u, ...r) => {
  try {
    return !!u(...r);
  } catch {
    return !1;
  }
}, eb = (u) => {
  u = z.merge.call({
    skipUndefined: !0
  }, Pv, u);
  const { fetch: r, Request: c, Response: s } = u, o = r ? Ci(r) : typeof fetch == "function", d = Ci(c), m = Ci(s);
  if (!o)
    return !1;
  const g = o && Ci(gh), p = o && (typeof ph == "function" ? /* @__PURE__ */ ((_) => (U) => _.encode(U))(new ph()) : async (_) => new Uint8Array(await new c(_).arrayBuffer())), y = d && g && vh(() => {
    let _ = !1;
    const U = new c(at.origin, {
      body: new gh(),
      method: "POST",
      get duplex() {
        return _ = !0, "half";
      }
    }).headers.has("Content-Type");
    return _ && !U;
  }), b = m && g && vh(() => z.isReadableStream(new s("").body)), R = {
    stream: b && ((_) => _.body)
  };
  o && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((_) => {
    !R[_] && (R[_] = (U, D) => {
      let V = U && U[_];
      if (V)
        return V.call(U);
      throw new re(`Response type '${_}' is not supported`, re.ERR_NOT_SUPPORT, D);
    });
  });
  const N = async (_) => {
    if (_ == null)
      return 0;
    if (z.isBlob(_))
      return _.size;
    if (z.isSpecCompliantForm(_))
      return (await new c(at.origin, {
        method: "POST",
        body: _
      }).arrayBuffer()).byteLength;
    if (z.isArrayBufferView(_) || z.isArrayBuffer(_))
      return _.byteLength;
    if (z.isURLSearchParams(_) && (_ = _ + ""), z.isString(_))
      return (await p(_)).byteLength;
  }, Y = async (_, U) => {
    const D = z.toFiniteNumber(_.getContentLength());
    return D ?? N(U);
  };
  return async (_) => {
    let {
      url: U,
      method: D,
      data: V,
      signal: Q,
      cancelToken: K,
      timeout: te,
      onDownloadProgress: W,
      onUploadProgress: ne,
      responseType: ae,
      headers: F,
      withCredentials: Se = "same-origin",
      fetchOptions: xe
    } = f0(_), lt = r || fetch;
    ae = ae ? (ae + "").toLowerCase() : "text";
    let pe = $v([Q, K && K.toAbortSignal()], te), Le = null;
    const je = pe && pe.unsubscribe && (() => {
      pe.unsubscribe();
    });
    let Je;
    try {
      if (ne && y && D !== "get" && D !== "head" && (Je = await Y(F, V)) !== 0) {
        let Ae = new c(U, {
          method: "POST",
          body: V,
          duplex: "half"
        }), S;
        if (z.isFormData(V) && (S = Ae.headers.get("content-type")) && F.setContentType(S), Ae.body) {
          const [H, Z] = fh(
            Je,
            ji(dh(ne))
          );
          V = hh(Ae.body, yh, H, Z);
        }
      }
      z.isString(Se) || (Se = Se ? "include" : "omit");
      const X = d && "credentials" in c.prototype, q = {
        ...xe,
        signal: pe,
        method: D.toUpperCase(),
        headers: F.normalize().toJSON(),
        body: V,
        duplex: "half",
        credentials: X ? Se : void 0
      };
      Le = d && new c(U, q);
      let G = await (d ? lt(Le, xe) : lt(U, q));
      const I = b && (ae === "stream" || ae === "response");
      if (b && (W || I && je)) {
        const Ae = {};
        ["status", "statusText", "headers"].forEach((J) => {
          Ae[J] = G[J];
        });
        const S = z.toFiniteNumber(G.headers.get("content-length")), [H, Z] = W && fh(
          S,
          ji(dh(W), !0)
        ) || [];
        G = new s(
          hh(G.body, yh, H, () => {
            Z && Z(), je && je();
          }),
          Ae
        );
      }
      ae = ae || "text";
      let se = await R[z.findKey(R, ae) || "text"](G, _);
      return !I && je && je(), await new Promise((Ae, S) => {
        s0(Ae, S, {
          data: se,
          headers: ht.from(G.headers),
          status: G.status,
          statusText: G.statusText,
          config: _,
          request: Le
        });
      });
    } catch (X) {
      throw je && je(), X && X.name === "TypeError" && /Load failed|fetch/i.test(X.message) ? Object.assign(
        new re("Network Error", re.ERR_NETWORK, _, Le),
        {
          cause: X.cause || X
        }
      ) : re.from(X, X && X.code, _, Le);
    }
  };
}, tb = /* @__PURE__ */ new Map(), d0 = (u) => {
  let r = u && u.env || {};
  const { fetch: c, Request: s, Response: o } = r, d = [
    s,
    o,
    c
  ];
  let m = d.length, g = m, p, y, b = tb;
  for (; g--; )
    p = d[g], y = b.get(p), y === void 0 && b.set(p, y = g ? /* @__PURE__ */ new Map() : eb(r)), b = y;
  return y;
};
d0();
const Ls = {
  http: vv,
  xhr: Jv,
  fetch: {
    get: d0
  }
};
z.forEach(Ls, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {
    }
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const bh = (u) => `- ${u}`, lb = (u) => z.isFunction(u) || u === null || u === !1;
function nb(u, r) {
  u = z.isArray(u) ? u : [u];
  const { length: c } = u;
  let s, o;
  const d = {};
  for (let m = 0; m < c; m++) {
    s = u[m];
    let g;
    if (o = s, !lb(s) && (o = Ls[(g = String(s)).toLowerCase()], o === void 0))
      throw new re(`Unknown adapter '${g}'`);
    if (o && (z.isFunction(o) || (o = o.get(r))))
      break;
    d[g || "#" + m] = o;
  }
  if (!o) {
    const m = Object.entries(d).map(
      ([p, y]) => `adapter ${p} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build")
    );
    let g = c ? m.length > 1 ? `since :
` + m.map(bh).join(`
`) : " " + bh(m[0]) : "as no adapter specified";
    throw new re(
      "There is no suitable adapter to dispatch the request " + g,
      "ERR_NOT_SUPPORT"
    );
  }
  return o;
}
const m0 = {
  /**
   * Resolve an adapter from a list of adapter names or functions.
   * @type {Function}
   */
  getAdapter: nb,
  /**
   * Exposes all known adapters
   * @type {Object<string, Function|Object>}
   */
  adapters: Ls
};
function vs(u) {
  if (u.cancelToken && u.cancelToken.throwIfRequested(), u.signal && u.signal.aborted)
    throw new ta(null, u);
}
function Sh(u) {
  return vs(u), u.headers = ht.from(u.headers), u.data = ps.call(
    u,
    u.transformRequest
  ), ["post", "put", "patch"].indexOf(u.method) !== -1 && u.headers.setContentType("application/x-www-form-urlencoded", !1), m0.getAdapter(u.adapter || iu.adapter, u)(u).then(function(s) {
    return vs(u), s.data = ps.call(
      u,
      u.transformResponse,
      s
    ), s.headers = ht.from(s.headers), s;
  }, function(s) {
    return c0(s) || (vs(u), s && s.response && (s.response.data = ps.call(
      u,
      u.transformResponse,
      s.response
    ), s.response.headers = ht.from(s.response.headers))), Promise.reject(s);
  });
}
const h0 = "1.13.2", Gi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((u, r) => {
  Gi[u] = function(s) {
    return typeof s === u || "a" + (r < 1 ? "n " : " ") + u;
  };
});
const Eh = {};
Gi.transitional = function(r, c, s) {
  function o(d, m) {
    return "[Axios v" + h0 + "] Transitional option '" + d + "'" + m + (s ? ". " + s : "");
  }
  return (d, m, g) => {
    if (r === !1)
      throw new re(
        o(m, " has been removed" + (c ? " in " + c : "")),
        re.ERR_DEPRECATED
      );
    return c && !Eh[m] && (Eh[m] = !0, console.warn(
      o(
        m,
        " has been deprecated since v" + c + " and will be removed in the near future"
      )
    )), r ? r(d, m, g) : !0;
  };
};
Gi.spelling = function(r) {
  return (c, s) => (console.warn(`${s} is likely a misspelling of ${r}`), !0);
};
function ab(u, r, c) {
  if (typeof u != "object")
    throw new re("options must be an object", re.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let o = s.length;
  for (; o-- > 0; ) {
    const d = s[o], m = r[d];
    if (m) {
      const g = u[d], p = g === void 0 || m(g, d, u);
      if (p !== !0)
        throw new re("option " + d + " must be " + p, re.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0)
      throw new re("Unknown option " + d, re.ERR_BAD_OPTION);
  }
}
const Mi = {
  assertOptions: ab,
  validators: Gi
}, Kt = Mi.validators;
let on = class {
  constructor(r) {
    this.defaults = r || {}, this.interceptors = {
      request: new sh(),
      response: new sh()
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
  async request(r, c) {
    try {
      return await this._request(r, c);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const d = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack ? d && !String(s.stack).endsWith(d.replace(/^.+\n.+\n/, "")) && (s.stack += `
` + d) : s.stack = d;
        } catch {
        }
      }
      throw s;
    }
  }
  _request(r, c) {
    typeof r == "string" ? (c = c || {}, c.url = r) : c = r || {}, c = fn(this.defaults, c);
    const { transitional: s, paramsSerializer: o, headers: d } = c;
    s !== void 0 && Mi.assertOptions(s, {
      silentJSONParsing: Kt.transitional(Kt.boolean),
      forcedJSONParsing: Kt.transitional(Kt.boolean),
      clarifyTimeoutError: Kt.transitional(Kt.boolean)
    }, !1), o != null && (z.isFunction(o) ? c.paramsSerializer = {
      serialize: o
    } : Mi.assertOptions(o, {
      encode: Kt.function,
      serialize: Kt.function
    }, !0)), c.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : c.allowAbsoluteUrls = !0), Mi.assertOptions(c, {
      baseUrl: Kt.spelling("baseURL"),
      withXsrfToken: Kt.spelling("withXSRFToken")
    }, !0), c.method = (c.method || this.defaults.method || "get").toLowerCase();
    let m = d && z.merge(
      d.common,
      d[c.method]
    );
    d && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete d[_];
      }
    ), c.headers = ht.concat(m, d);
    const g = [];
    let p = !0;
    this.interceptors.request.forEach(function(U) {
      typeof U.runWhen == "function" && U.runWhen(c) === !1 || (p = p && U.synchronous, g.unshift(U.fulfilled, U.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function(U) {
      y.push(U.fulfilled, U.rejected);
    });
    let b, R = 0, N;
    if (!p) {
      const _ = [Sh.bind(this), void 0];
      for (_.unshift(...g), _.push(...y), N = _.length, b = Promise.resolve(c); R < N; )
        b = b.then(_[R++], _[R++]);
      return b;
    }
    N = g.length;
    let Y = c;
    for (; R < N; ) {
      const _ = g[R++], U = g[R++];
      try {
        Y = _(Y);
      } catch (D) {
        U.call(this, D);
        break;
      }
    }
    try {
      b = Sh.call(this, Y);
    } catch (_) {
      return Promise.reject(_);
    }
    for (R = 0, N = y.length; R < N; )
      b = b.then(y[R++], y[R++]);
    return b;
  }
  getUri(r) {
    r = fn(this.defaults, r);
    const c = o0(r.baseURL, r.url, r.allowAbsoluteUrls);
    return u0(c, r.params, r.paramsSerializer);
  }
};
z.forEach(["delete", "get", "head", "options"], function(r) {
  on.prototype[r] = function(c, s) {
    return this.request(fn(s || {}, {
      method: r,
      url: c,
      data: (s || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(r) {
  function c(s) {
    return function(d, m, g) {
      return this.request(fn(g || {}, {
        method: r,
        headers: s ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: d,
        data: m
      }));
    };
  }
  on.prototype[r] = c(), on.prototype[r + "Form"] = c(!0);
});
let ub = class y0 {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function(d) {
      c = d;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let d = s._listeners.length;
      for (; d-- > 0; )
        s._listeners[d](o);
      s._listeners = null;
    }), this.promise.then = (o) => {
      let d;
      const m = new Promise((g) => {
        s.subscribe(g), d = g;
      }).then(o);
      return m.cancel = function() {
        s.unsubscribe(d);
      }, m;
    }, r(function(d, m, g) {
      s.reason || (s.reason = new ta(d, m, g), c(s.reason));
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
    const c = this._listeners.indexOf(r);
    c !== -1 && this._listeners.splice(c, 1);
  }
  toAbortSignal() {
    const r = new AbortController(), c = (s) => {
      r.abort(s);
    };
    return this.subscribe(c), r.signal.unsubscribe = () => this.unsubscribe(c), r.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new y0(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
};
function ib(u) {
  return function(c) {
    return u.apply(null, c);
  };
}
function rb(u) {
  return z.isObject(u) && u.isAxiosError === !0;
}
const ws = {
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
Object.entries(ws).forEach(([u, r]) => {
  ws[r] = u;
});
function g0(u) {
  const r = new on(u), c = Kh(on.prototype.request, r);
  return z.extend(c, on.prototype, r, { allOwnKeys: !0 }), z.extend(c, r, null, { allOwnKeys: !0 }), c.create = function(o) {
    return g0(fn(u, o));
  }, c;
}
const De = g0(iu);
De.Axios = on;
De.CanceledError = ta;
De.CancelToken = ub;
De.isCancel = c0;
De.VERSION = h0;
De.toFormData = Xi;
De.AxiosError = re;
De.Cancel = De.CanceledError;
De.all = function(r) {
  return Promise.all(r);
};
De.spread = ib;
De.isAxiosError = rb;
De.mergeConfig = fn;
De.AxiosHeaders = ht;
De.formToJSON = (u) => r0(z.isHTMLForm(u) ? new FormData(u) : u);
De.getAdapter = m0.getAdapter;
De.HttpStatusCode = ws;
De.default = De;
const {
  Axios: Rb,
  AxiosError: Tb,
  CanceledError: Ab,
  isCancel: wb,
  CancelToken: Cb,
  VERSION: _b,
  all: Ob,
  Cancel: zb,
  isAxiosError: Nb,
  spread: Mb,
  toFormData: Db,
  AxiosHeaders: Ub,
  HttpStatusCode: jb,
  formToJSON: Bb,
  getAdapter: Hb,
  mergeConfig: Lb
} = De, cb = "https://dev-demo-env.colibrilearning.com", ru = (u) => {
  const r = u.startsWith("/") ? u : `/${u}`;
  return `${cb}${r}`;
}, sb = async (u, r) => {
  const c = ru("api/auth"), s = { username: u, password: r };
  try {
    return (await De.post(c, s)).data;
  } catch (o) {
    throw console.error("Error during auth login:", o), o.response?.data?.error ? new Error(o.response.data.error) : o.response?.data?.message ? new Error(o.response.data.message) : o.response?.status === 401 ? new Error("Invalid credentials") : o.message ? new Error(o.message) : new Error("Authentication failed");
  }
}, ob = async (u) => {
  const r = ru("api/register");
  try {
    return (await De.post(r, u)).data;
  } catch (c) {
    throw console.error("Error during registration:", c), c.response?.data?.details?.errorMessage ? new Error(c.response.data.details.errorMessage) : c.response?.data?.error ? new Error(c.response.data.error) : c.response?.data?.details ? new Error(c.response.data.details) : c.response?.data?.message ? new Error(c.response.data.message) : c.response?.status === 500 ? new Error("Registration failed. Please try again.") : c.message ? new Error(c.message) : new Error("Registration failed");
  }
}, qs = async (u) => {
  const r = ru("api/check-email");
  try {
    return (await De.post(r, { email: u })).data;
  } catch (c) {
    return console.error("Error checking email:", c), c.response?.data ? c.response.data : { exists: !1 };
  }
}, xh = async (u) => {
  const r = ru("api/forgot-password"), c = { email: u };
  try {
    return (await De.post(r, c)).data;
  } catch (s) {
    throw console.error("Error sending password reset:", s), s.response?.data?.error ? new Error(s.response.data.error) : s.response?.data?.message ? new Error(s.response.data.message) : s.response?.status === 404 ? new Error("We couldn't find an account with that email.") : s.message ? new Error(s.message) : new Error("Failed to send password reset link");
  }
}, fb = async (u) => {
  const r = ru("api/refresh"), c = { refresh_token: u };
  try {
    return (await De.post(r, c)).data;
  } catch (s) {
    throw console.error("Error during token refresh:", s), s;
  }
}, bs = (u, r) => {
  if (r || (r = localStorage.getItem("x_credential") || localStorage.getItem("X-Credential")), !r)
    return u;
  try {
    const c = new URL(u);
    return c.searchParams.set("xcred", r), c.toString();
  } catch {
    const s = u.includes("?") ? "&" : "?";
    return `${u}${s}xcred=${encodeURIComponent(r)}`;
  }
}, db = (u) => {
  try {
    const r = document.cookie.split(";").find((m) => m.trim().startsWith("X-Credential=")), c = document.cookie.split(";").find((m) => m.trim().startsWith("access_token="));
    let s = null, o = !1;
    if (c && (s = c.split("=")[1] || null), r && (o = !0), s || (s = localStorage.getItem("access_token")), o || (o = !!localStorage.getItem("x_credential")), !s || !o)
      return !1;
    const d = localStorage.getItem("access_token_expires");
    if (d && Date.now() >= parseInt(d))
      return !1;
    try {
      const m = Us(s), g = Math.floor(Date.now() / 1e3);
      return !(!m.exp || g >= m.exp);
    } catch (m) {
      return console.error("[checkTokenAndRedirect] Token decode error:", m), !1;
    }
  } catch (r) {
    return console.error("[checkTokenAndRedirect] Error:", r), !1;
  }
}, mb = () => {
  try {
    const u = localStorage.getItem("refresh_token"), r = localStorage.getItem("refresh_token_time");
    if (!u || !r)
      return !1;
    const c = 10080 * 60 * 1e3;
    return Date.now() - parseInt(r) < c;
  } catch (u) {
    return console.error("[isRefreshTokenValid] Error:", u), !1;
  }
}, p0 = async (u, r, c = !0) => {
  const s = await sb(u, r), { tokens: o, userinfo: d, x_credential: m } = s;
  if (o.access_token) {
    const g = Us(o.access_token), p = (g.exp || 0) - Math.floor(Date.now() / 1e3);
    Ui("access_token", o.access_token, p, !0);
    const y = m || g.x_credentials;
    y && Ui("X-Credential", y, p, !1), localStorage.setItem("user_state", "authenticated"), localStorage.setItem("access_token", o.access_token), localStorage.setItem("access_token_expires", (Date.now() + p * 1e3).toString()), y && localStorage.setItem("x_credential", y), d && localStorage.setItem("user_info", JSON.stringify({
      email: d.email,
      name: d.name || `${d.given_name || ""} ${d.family_name || ""}`.trim(),
      studentId: d.studentId || d.student_id
    })), c && o.refresh_token ? (localStorage.setItem("refresh_token", o.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())) : (localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"));
  }
  return o;
}, hb = ({
  type: u,
  message: r,
  duration: c = 5e3,
  onClose: s,
  className: o = ""
}) => {
  const [d, m] = A.useState(!1), [g, p] = A.useState(!1);
  A.useEffect(() => {
    setTimeout(() => m(!0), 10);
    const Y = setTimeout(() => {
      y();
    }, c);
    return () => clearTimeout(Y);
  }, [c]);
  const y = () => {
    p(!0), setTimeout(() => {
      m(!1), s();
    }, 300);
  }, b = () => {
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
  }, R = () => {
    switch (u) {
      case "success":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) });
      case "warning":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) });
      case "error":
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) });
      default:
        return /* @__PURE__ */ x.jsx("svg", { className: "w-6! h-6!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z", clipRule: "evenodd" }) });
    }
  }, N = b();
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `fixed! top-4! right-4! z-[9999]! transition-all! duration-300! ${d && !g ? "translate-x-0! opacity-100!" : "translate-x-full! opacity-0!"} ${o}`,
      style: { maxWidth: "90vw", width: "400px" },
      children: /* @__PURE__ */ x.jsxs("div", { className: `flex! items-center! p-4! rounded-lg! shadow-lg! ${N.bg}`, children: [
        /* @__PURE__ */ x.jsx("div", { className: `flex-shrink-0! ${N.icon}`, children: R() }),
        /* @__PURE__ */ x.jsx("div", { className: `ml-3! flex-1! ${N.text}`, children: /* @__PURE__ */ x.jsx("p", { className: "text-sm! font-medium!", children: r }) }),
        /* @__PURE__ */ x.jsxs(
          "button",
          {
            type: "button",
            onClick: y,
            className: `ml-4! flex-shrink-0! inline-flex! ${N.text} hover:opacity-75! bg-transparent! border-none! cursor-pointer! p-0! transition-opacity!`,
            children: [
              /* @__PURE__ */ x.jsx("span", { className: "sr-only", children: "Close" }),
              /* @__PURE__ */ x.jsx("svg", { className: "w-5! h-5!", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ x.jsx("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }) })
            ]
          }
        )
      ] })
    }
  );
}, Vi = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M20%200C22.8906%200%2025.3906%201.64062%2026.6406%203.98438C29.2188%203.20312%2032.1094%203.82812%2034.1406%205.85938C36.1719%207.89062%2036.7969%2010.7812%2036.0156%2013.3594C38.3594%2014.6094%2040%2017.1094%2040%2020C40%2022.8906%2038.3594%2025.3906%2036.0156%2026.6406C36.7969%2029.2188%2036.1719%2032.1094%2034.1406%2034.1406C32.1094%2036.1719%2029.2188%2036.7969%2026.6406%2036.0156C25.3906%2038.3594%2022.8906%2040%2020%2040C17.1094%2040%2014.6094%2038.3594%2013.3594%2036.0156C10.7812%2036.7969%207.89062%2036.1719%205.85938%2034.1406C3.82812%2032.1094%203.20312%2029.2188%203.98438%2026.6406C1.64062%2025.3906%200%2022.8906%200%2020C0%2017.1094%201.64062%2014.6094%203.98438%2013.3594C3.20312%2010.7812%203.82812%207.89062%205.85938%205.85938C7.89062%203.82812%2010.7812%203.20312%2013.3594%203.98438C14.6094%201.64062%2017.1094%200%2020%200ZM26.5625%2015.3906C27.1094%2014.5312%2026.875%2013.3594%2026.0156%2012.8125C25.1562%2012.2656%2023.9844%2012.5%2023.4375%2013.3594L18.5938%2021.0938L16.4844%2018.2812C15.8594%2017.4219%2014.6875%2017.2656%2013.9062%2017.8906C13.0469%2018.5156%2012.8906%2019.6875%2013.5156%2020.4688L17.2656%2025.4688C17.6562%2026.0156%2018.2031%2026.25%2018.8281%2026.25C19.4531%2026.25%2020%2025.8594%2020.3125%2025.3906L26.5625%2015.3906Z'%20fill='%2333A05F'/%3e%3c/svg%3e", yb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  onSignIn: s,
  title: o = "Create your account",
  subtitle: d = "Create an account to continue to checkout",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(m), [y, b] = A.useState(""), [R, N] = A.useState(""), [Y, _] = A.useState(""), [U, D] = A.useState(!1), [V, Q] = A.useState(""), [K, te] = A.useState(""), [W, ne] = A.useState(!1), [ae, F] = A.useState(!1), [Se, xe] = A.useState(!1), [lt, pe] = A.useState(!1), [Le, je] = A.useState(!1), [Je, X] = A.useState(!1), [q, G] = A.useState(""), [I, se] = A.useState("info"), Ae = A.useRef(null), S = A.useRef(null), H = (P) => P ? P.length < 9 || P.length > 15 ? { isValid: !1, error: "Password must be 9-15 characters long" } : /[A-Z]/.test(P) ? /[a-z]/.test(P) ? /[0-9]/.test(P) ? /[!@#$%^&*._-]/.test(P) ? /^[A-Za-z0-9!@#$%^&*._-]+$/.test(P) ? { isValid: !0, error: "" } : {
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
  A.useEffect(() => {
    if (S.current && clearTimeout(S.current), !g) {
      xe(!1), pe(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      xe(!1), pe(!1);
      return;
    }
    return S.current = setTimeout(async () => {
      je(!0);
      try {
        (await qs(g)).exists ? (pe(!0), xe(!0)) : (pe(!1), xe(!1));
      } catch (ze) {
        console.error("[CreateAccount] Email check failed:", ze), pe(!1), xe(!1);
      } finally {
        je(!1);
      }
    }, 500), () => {
      S.current && clearTimeout(S.current);
    };
  }, [g]);
  const J = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const P = (ze) => {
      ze.key === "Escape" && c();
    };
    return document.addEventListener("keydown", P), () => document.removeEventListener("keydown", P);
  }, [c]);
  const oe = (P) => {
    P.target === Ae.current && c();
  }, fe = async (P) => {
    if (P.preventDefault(), F(!0), !g || !y || !R) {
      r("Please fill in all required fields");
      return;
    }
    const ze = H(Y);
    if (!ze.isValid) {
      te(ze.error), r(ze.error), D(!1);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g)) {
      Q("Please enter a valid email address"), r("Please enter a valid email address");
      return;
    }
    D(!0), Q(""), G("");
    try {
      const Ht = g.split("@")[0], Jt = await ob({
        username: Ht,
        email: g,
        firstName: y,
        lastName: R,
        password: Y
      });
      console.log(
        "[CreateAccount] Registration successful:",
        Jt.message
      );
      try {
        const $t = await p0(g, Y, Je);
        u($t);
      } catch ($t) {
        console.error(
          "[CreateAccount] Auto-login failed after registration:",
          $t
        );
        const cu = $t instanceof Error ? $t.message : "Auto-login failed";
        r(cu);
      }
    } catch (Ht) {
      console.error("[CreateAccount] Registration failed:", Ht);
      const Jt = Ht instanceof Error ? Ht.message : "Registration failed";
      G(Jt), se("error"), r(Jt);
    } finally {
      D(!1);
    }
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    q && /* @__PURE__ */ x.jsx(
      hb,
      {
        type: I,
        message: q,
        duration: 5e3,
        onClose: () => G("")
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
        ref: Ae,
        onMouseDown: oe,
        children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
          /* @__PURE__ */ x.jsx(
            jt,
            {
              onClick: c,
              variant: "link",
              className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
              type: "button",
              children: /* @__PURE__ */ x.jsx(
                "svg",
                {
                  className: "w-6! h-6!",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ x.jsx(
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
          /* @__PURE__ */ x.jsxs("div", { className: "mb-6! text-center!", children: [
            /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-1!", children: o }),
            /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
          ] }),
          /* @__PURE__ */ x.jsxs("form", { onSubmit: fe, className: "space-y-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
              cn,
              {
                label: "Email Address",
                id: "email",
                type: "email",
                value: g,
                onChange: (P) => {
                  p(P.target.value), Q("");
                },
                placeholder: "Enter email address",
                disabled: U,
                className: "w-full!",
                autoComplete: "email",
                error: ae && !g ? "Required" : V || "",
                endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                  Le && /* @__PURE__ */ x.jsx(kh, {}),
                  !Le && !lt && g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g) && /* @__PURE__ */ x.jsx(
                    "img",
                    {
                      src: Vi,
                      alt: "available",
                      style: { width: 18, height: 18 }
                    }
                  )
                ] })
              }
            ) }),
            Se && lt && /* @__PURE__ */ x.jsx(
              Ds,
              {
                type: "info",
                message: "We found an existing account.",
                actionText: "Want to sign in instead?",
                onActionClick: () => {
                  xe(!1), s(g);
                },
                onClose: () => xe(!1),
                className: "mb-4!"
              }
            ),
            /* @__PURE__ */ x.jsxs("div", { className: "grid! grid-cols-2! gap-4! mt-0! ml-0! mb-4! mr-0!", children: [
              /* @__PURE__ */ x.jsx(
                cn,
                {
                  label: "First Name",
                  id: "firstName",
                  type: "text",
                  value: y,
                  onChange: (P) => b(P.target.value),
                  placeholder: "First Name",
                  disabled: U,
                  className: "w-full!",
                  autoComplete: "given-name",
                  error: ae && !y ? "Required" : ""
                }
              ),
              /* @__PURE__ */ x.jsx(
                cn,
                {
                  label: "Last Name",
                  id: "lastName",
                  type: "text",
                  value: R,
                  onChange: (P) => N(P.target.value),
                  placeholder: "Last Name",
                  disabled: U,
                  className: "w-full!",
                  autoComplete: "family-name",
                  error: ae && !R ? "Required" : ""
                }
              )
            ] }),
            /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
              cn,
              {
                label: "Password",
                id: "password",
                type: W ? "text" : "password",
                value: Y,
                onChange: (P) => {
                  _(P.target.value), te("");
                },
                placeholder: "Enter Password...",
                disabled: U,
                className: "w-full!",
                autoComplete: "new-password",
                error: K,
                endIcon: /* @__PURE__ */ x.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => ne(!W),
                    className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                    tabIndex: -1,
                    children: W ? /* @__PURE__ */ x.jsx(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /* @__PURE__ */ x.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          }
                        )
                      }
                    ) : /* @__PURE__ */ x.jsxs(
                      "svg",
                      {
                        className: "w-5! h-5!",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                          /* @__PURE__ */ x.jsx(
                            "path",
                            {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              strokeWidth: 2,
                              d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }
                          ),
                          /* @__PURE__ */ x.jsx(
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
            /* @__PURE__ */ x.jsx("div", { className: "flex! items-center! mt-4! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: Je,
                  onChange: (P) => X(P.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx(
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
            /* @__PURE__ */ x.jsx(
              jt,
              {
                type: "submit",
                disabled: U || lt || !J,
                className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
                children: U ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                  /* @__PURE__ */ x.jsxs(
                    "svg",
                    {
                      className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ x.jsx(
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
                        /* @__PURE__ */ x.jsx(
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
            /* @__PURE__ */ x.jsxs("div", { className: "relative! mt-4! mb-4!", children: [
              /* @__PURE__ */ x.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ x.jsx("div", { className: "w-full! border-t! border-solid! border-gray-300!" }) }),
              /* @__PURE__ */ x.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ x.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
            ] }),
            /* @__PURE__ */ x.jsx(
              jt,
              {
                type: "button",
                variant: "outline",
                onClick: () => s(g),
                disabled: U,
                className: "w-full! flex! items-center! justify-center! gap-3!",
                children: /* @__PURE__ */ x.jsx("span", { children: "Sign In" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, gb = ({
  email: u,
  loading: r,
  onResendLink: c,
  onBack: s,
  onClose: o
}) => {
  const d = A.useRef(null);
  A.useEffect(() => {
    const g = (p) => {
      p.key === "Escape" && o();
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, [o]);
  const m = (g) => {
    g.target === d.current && o();
  };
  return /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: d,
      onMouseDown: m,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          jt,
          {
            onClick: o,
            variant: "link",
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: "button",
            children: /* @__PURE__ */ x.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx("div", { className: "flex! justify-center! mb-4!", children: /* @__PURE__ */ x.jsx(
          "img",
          {
            src: Vi,
            alt: "Success",
            className: "w-16! h-16!"
          }
        ) }),
        /* @__PURE__ */ x.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-3!", children: "Check your email" }),
          /* @__PURE__ */ x.jsx("p", { className: "text-base! text-gray-700! mb-2!", children: "We've sent a password reset link to" }),
          /* @__PURE__ */ x.jsx("p", { className: "text-base! font-semibold! text-gray-900! mb-4!", children: u }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-800! mb-2!", children: "Follow the instructions in the email to reset your password and return to checkout." }),
          /* @__PURE__ */ x.jsx("p", { className: "text-xs! text-gray-500!", children: "Didn't receive the email? Check your spam folder or try again in a few minutes." })
        ] }),
        /* @__PURE__ */ x.jsx(
          jt,
          {
            type: "button",
            onClick: c,
            disabled: r,
            className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0! mb-4!",
            children: r ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
              /* @__PURE__ */ x.jsxs(
                "svg",
                {
                  className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  children: [
                    /* @__PURE__ */ x.jsx(
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
                    /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsx(
          jt,
          {
            type: "button",
            variant: "outline",
            onClick: s,
            disabled: r,
            className: "w-full! flex! items-center! justify-center! gap-3!",
            children: /* @__PURE__ */ x.jsx("span", { children: "Back to sign in" })
          }
        )
      ] })
    }
  );
}, pb = ({
  email: u,
  onBack: r,
  handleClose: c
}) => {
  const [s, o] = A.useState(u || ""), [d, m] = A.useState(!1), [g, p] = A.useState(!1), [y, b] = A.useState(""), [R, N] = A.useState(!1), [Y, _] = A.useState(!1), [U, D] = A.useState(!1), V = A.useRef(null);
  A.useEffect(() => {
    const W = (ne) => {
      ne.key === "Escape" && c();
    };
    return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
  }, [c]), A.useEffect(() => {
    const ne = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
    if (D(ne), !ne || !s) {
      _(!1);
      return;
    }
    const ae = setTimeout(async () => {
      N(!0);
      try {
        const F = await qs(s);
        console.log("[ResetPassword] Email check response:", F), _(F.exists), console.log("[ResetPassword] Email exists:", F.exists);
      } catch (F) {
        console.error("[ResetPassword] Error checking email:", F), _(!1);
      } finally {
        N(!1);
      }
    }, 500);
    return () => clearTimeout(ae);
  }, [s]);
  const Q = (W) => {
    W.target === V.current && c();
  }, K = async (W) => {
    if (W.preventDefault(), !s) {
      b("Email is required");
      return;
    }
    m(!0), b("");
    try {
      await xh(s), console.log("[ResetPassword] Reset link sent to:", s), p(!0);
    } catch (ne) {
      console.error("[ResetPassword] Failed to send reset link:", ne);
      const ae = ne instanceof Error ? ne.message : "Failed to send reset link. Please try again.";
      b(ae);
    } finally {
      m(!1);
    }
  }, te = async () => {
    m(!0), b("");
    try {
      await xh(s), console.log("[ResetPassword] Reset link resent to:", s);
    } catch (W) {
      console.error("[ResetPassword] Failed to resend reset link:", W), p(!1);
      const ne = W instanceof Error ? W.message : "Failed to resend reset link. Please try again.";
      b(ne);
    } finally {
      m(!1);
    }
  };
  return g ? /* @__PURE__ */ x.jsx(
    gb,
    {
      email: s,
      loading: d,
      onResendLink: te,
      onBack: r,
      onClose: c
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: V,
      onMouseDown: Q,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          jt,
          {
            onClick: c,
            variant: "link",
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: "button",
            children: /* @__PURE__ */ x.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsxs("div", { className: "mb-6! text-center!", children: [
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-2!", children: "Reset your password" }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600!", children: "Enter your email and we'll send you a link to reset your password." })
        ] }),
        /* @__PURE__ */ x.jsxs("form", { onSubmit: K, className: "space-y-4!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            cn,
            {
              label: "Email Address",
              id: "reset-email",
              type: "email",
              value: s,
              onChange: (W) => {
                o(W.target.value), b("");
              },
              placeholder: "Enter email",
              disabled: d,
              className: "w-full!",
              autoComplete: "email",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                R && /* @__PURE__ */ x.jsx("div", { className: "animate-spin! rounded-full! h-5! w-5! border-b-2! border-blue-500!" }),
                !R && Y && U && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: Vi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          y && /* @__PURE__ */ x.jsx(
            Ds,
            {
              type: "error",
              message: y,
              actionText: "Want to sign in instead?",
              onActionClick: r,
              onClose: () => b(""),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ x.jsx(
            jt,
            {
              type: "submit",
              disabled: d || !s || !U || !Y,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-[var(--button-primary-text)]! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              onClick: () => {
                console.log("[ResetPassword] Button state:", { loading: d, email: s, isEmailValid: U, emailExists: Y });
              },
              children: d ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ x.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ x.jsx(
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
                      /* @__PURE__ */ x.jsx(
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
          /* @__PURE__ */ x.jsx(
            jt,
            {
              type: "button",
              variant: "outline",
              onClick: r,
              disabled: d,
              className: "w-full! flex! items-center! justify-center! gap-3! mt-4!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Back to sign in" })
            }
          )
        ] })
      ] })
    }
  );
}, vb = ({
  onSuccess: u,
  onError: r,
  handleClose: c,
  authority: s,
  title: o = "Continue to login",
  subtitle: d = "Continue by signing in.",
  initialEmail: m = ""
}) => {
  const [g, p] = A.useState(m), [y, b] = A.useState(""), [R, N] = A.useState(!1), [Y, _] = A.useState(!1), [U, D] = A.useState(""), [V, Q] = A.useState(!1), [K, te] = A.useState(!1), [W, ne] = A.useState(!1), [ae, F] = A.useState(!1), [Se, xe] = A.useState(!1), [lt, pe] = A.useState(!1), Le = A.useRef(null), je = A.useRef(null);
  A.useEffect(() => {
    if (je.current && clearTimeout(je.current), !g) {
      F(!1), pe(!1);
      return;
    }
    const I = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!g.includes("@")) {
      F(!0), pe(!1);
      return;
    }
    if (!I.test(g)) {
      F(!1), pe(!1);
      return;
    }
    return je.current = setTimeout(async () => {
      xe(!0);
      try {
        (await qs(g)).exists ? (F(!0), pe(!1)) : (F(!1), pe(!0));
      } catch (se) {
        console.error("[EmbeddedLogin] Email check failed:", se), F(!0), pe(!1);
      } finally {
        xe(!1);
      }
    }, 500), () => {
      je.current && clearTimeout(je.current);
    };
  }, [g]);
  const X = g && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(g);
  A.useEffect(() => {
    const I = (se) => {
      se.key === "Escape" && c();
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [c]);
  const q = (I) => {
    I.target === Le.current && c();
  }, G = async (I) => {
    if (I.preventDefault(), !g || !y) {
      D("Please enter both username/email and password"), r("Please enter both username/email and password");
      return;
    }
    N(!0), D("");
    try {
      const se = await p0(g, y, V);
      u(se);
    } catch (se) {
      console.error("[EmbeddedLogin] Login failed:", se);
      const Ae = se instanceof Error ? se.message : "Authentication failed";
      D(Ae), r(Ae);
    } finally {
      N(!1);
    }
  };
  return W ? /* @__PURE__ */ x.jsx(
    pb,
    {
      email: g,
      onBack: () => ne(!1),
      handleClose: c
    }
  ) : K ? /* @__PURE__ */ x.jsx(
    yb,
    {
      onSuccess: (I) => {
        te(!1), u(I);
      },
      onError: r,
      handleClose: c,
      onSignIn: (I) => {
        te(!1), I && p(I);
      },
      authority: s,
      initialEmail: g
    }
  ) : /* @__PURE__ */ x.jsx(
    "div",
    {
      className: "fixed! inset-0! bg-[#0000004f]! bg-opacity-10! flex! items-center! justify-center! z-2000! p-4",
      ref: Le,
      onMouseDown: q,
      children: /* @__PURE__ */ x.jsxs("div", { className: "bg-white! rounded-lg! p-8! w-full! max-w-lg! relative!", children: [
        /* @__PURE__ */ x.jsx(
          jt,
          {
            onClick: c,
            variant: "link",
            className: "absolute! top-4! right-4! text-gray-400! hover:text-gray-600! transition-colors! bg-transparent! border-none! outline-none! shadow-none! p-0!",
            type: "button",
            children: /* @__PURE__ */ x.jsx(
              "svg",
              {
                className: "w-6! h-6!",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /* @__PURE__ */ x.jsx(
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
        /* @__PURE__ */ x.jsxs("div", { className: "mb-3! text-center!", children: [
          /* @__PURE__ */ x.jsx("h2", { className: "text-2xl! font-bold! text-gray-800! mb-0!", children: o }),
          /* @__PURE__ */ x.jsx("p", { className: "text-sm! text-gray-600! mt-1!", children: d })
        ] }),
        /* @__PURE__ */ x.jsxs("form", { onSubmit: G, className: "space-y-2!", children: [
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-4! mr-0!", children: /* @__PURE__ */ x.jsx(
            cn,
            {
              label: "Email or Username",
              id: "email",
              type: "text",
              value: g,
              onChange: (I) => p(I.target.value),
              placeholder: "Enter email or username",
              disabled: R,
              className: "w-full!",
              autoComplete: "username",
              endIcon: /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
                Se && /* @__PURE__ */ x.jsx(kh, {}),
                !Se && ae && X && /* @__PURE__ */ x.jsx(
                  "img",
                  {
                    src: Vi,
                    alt: "user found",
                    style: { width: 18, height: 18 }
                  }
                )
              ] })
            }
          ) }),
          lt && !ae && X && /* @__PURE__ */ x.jsx(
            Ds,
            {
              type: "info",
              message: "We couldn't find an account with this email.",
              actionText: "Let's create one to continue?",
              onActionClick: () => {
                pe(!1), te(!0);
              },
              onClose: () => pe(!1),
              className: "mb-4!"
            }
          ),
          /* @__PURE__ */ x.jsx("div", { className: "mt-0! ml-0! mb-0! mr-0!", children: /* @__PURE__ */ x.jsx("div", { className: "relative! w-full!", children: /* @__PURE__ */ x.jsx(
            cn,
            {
              label: "Password",
              id: "password",
              type: Y ? "text" : "password",
              value: y,
              onChange: (I) => {
                b(I.target.value), D("");
              },
              placeholder: "Enter Password...",
              disabled: R,
              className: "w-full!",
              autoComplete: "current-password",
              error: U,
              endIcon: /* @__PURE__ */ x.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => _(!Y),
                  className: "text-gray-500! hover:text-gray-700 focus:outline-none! bg-transparent! border-none! p-0! m-0!",
                  tabIndex: -1,
                  children: Y ? /* @__PURE__ */ x.jsx(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: /* @__PURE__ */ x.jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        }
                      )
                    }
                  ) : /* @__PURE__ */ x.jsxs(
                    "svg",
                    {
                      className: "w-5! h-5!",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: [
                        /* @__PURE__ */ x.jsx(
                          "path",
                          {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          }
                        ),
                        /* @__PURE__ */ x.jsx(
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
          /* @__PURE__ */ x.jsxs("div", { className: "flex! items-center! justify-between! text-sm! h-0! mt-7! ml-0! mb-7! mr-0!", children: [
            /* @__PURE__ */ x.jsxs("label", { className: "flex! items-center! m-0!", children: [
              /* @__PURE__ */ x.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: V,
                  onChange: (I) => Q(I.target.checked),
                  className: "mr-2! rounded! border-gray-300! w-[1rem]! h-[1rem]! cursor-pointer! shadow-none! accent-[var(--button-primary-bg)]!"
                }
              ),
              /* @__PURE__ */ x.jsx(
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
            /* @__PURE__ */ x.jsx(
              "a",
              {
                href: "#",
                className: "no-underline!",
                style: {
                  fontWeight: "500",
                  color: "#5F5B7D"
                },
                onClick: (I) => {
                  I.preventDefault(), ne(!0);
                },
                children: "Forgot Password?"
              }
            )
          ] }),
          /* @__PURE__ */ x.jsx(
            jt,
            {
              type: "submit",
              disabled: R || !g,
              className: "w-full! bg-[var(--button-primary-bg)]! enabled:bg-[var(--button-primary-bg)]! hover:bg-[var(--button-primary-bg-hover)]! text-white! border-none! py-3! px-6! text-base! font-bold! rounded-lg! cursor-pointer! shadow-md! transition-colors! duration-300! active:scale-[0.98]! disabled:opacity-70! disabled:cursor-not-allowed! m-0!",
              children: R ? /* @__PURE__ */ x.jsxs("span", { className: "flex! items-center! justify-center!", children: [
                /* @__PURE__ */ x.jsxs(
                  "svg",
                  {
                    className: "animate-spin! -ml-1! mr-3! h-5! w-5! text-white",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [
                      /* @__PURE__ */ x.jsx(
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
                      /* @__PURE__ */ x.jsx(
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
          /* @__PURE__ */ x.jsxs("div", { className: "relative! mt-4! mb-4!", children: [
            /* @__PURE__ */ x.jsx("div", { className: "absolute! inset-0! flex! items-center!", children: /* @__PURE__ */ x.jsx("div", { className: "w-full! border-t! border-solid! border-gray-300!" }) }),
            /* @__PURE__ */ x.jsx("div", { className: "relative! flex! justify-center! text-sm!", children: /* @__PURE__ */ x.jsx("span", { className: "px-2! bg-white text-gray-500", children: "OR" }) })
          ] }),
          /* @__PURE__ */ x.jsx(
            jt,
            {
              type: "button",
              variant: "outline",
              onClick: () => te(!0),
              disabled: R,
              className: "w-full! flex! items-center! justify-center! gap-3! m-0!",
              children: /* @__PURE__ */ x.jsx("span", { children: "Create an Account" })
            }
          )
        ] })
      ] })
    }
  );
}, bb = (u) => {
  const { authority: r, subsidiary: c, onRedirect: s } = u, [o, d] = A.useState(!1);
  A.useEffect(() => {
    (async () => {
      try {
        if (db()) {
          d(!0), u.redirectUrl && u.autoRedirection && (window.location.href = bs(u.redirectUrl));
          return;
        }
        if (mb()) {
          const N = localStorage.getItem("refresh_token");
          if (N) {
            console.log("[App] Attempting auto-login with refresh token");
            const Y = await fb(N);
            if (Y && Y.tokens && Y.tokens.access_token) {
              const _ = Y.tokens, U = Us(_.access_token), D = (U.exp || 0) - Math.floor(Date.now() / 1e3);
              Ui("access_token", _.access_token, D, !0), U.x_credentials && Ui("X-Credential", U.x_credentials, D, !1), _.refresh_token && (localStorage.setItem("refresh_token", _.refresh_token), localStorage.setItem("refresh_token_time", Date.now().toString())), localStorage.setItem("user_state", "authenticated"), d(!0), console.log("[App] Auto-login successful");
              const V = u.redirectUrl || ah();
              if (s) {
                const Q = {
                  access_token: _.access_token,
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
                s(V, Q);
              }
              u.redirectUrl && u.autoRedirection && (window.location.href = bs(u.redirectUrl, U.x_credentials));
            }
          }
        } else
          localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      } catch (b) {
        console.error("[App] Auto-login failed:", b), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time");
      }
    })();
  }, [u.redirectUrl]), A.useEffect(() => {
    r && localStorage.setItem("authority", r), c && localStorage.setItem("subsidiary", c);
  }, [r, c]);
  const m = (y) => {
    u.handleClose && u.handleClose(), d(!0);
    const b = y?.userInfo?.x_credentials || y?.x_credentials, R = u.redirectUrl || ah();
    s && s(R, y), u.redirectUrl && u.autoRedirection && setTimeout(() => {
      window.location.href = bs(u.redirectUrl, b);
    }, 100);
  }, g = (y) => {
    console.log("[App] Embedded login error:", y);
  }, p = () => {
    u.handleClose && u.handleClose();
  };
  return /* @__PURE__ */ x.jsx(Xg, { children: /* @__PURE__ */ x.jsx(Yh, { path: "*", element: /* @__PURE__ */ x.jsx(x.Fragment, { children: !o && u.showLogin && /* @__PURE__ */ x.jsx(
    vb,
    {
      onSuccess: m,
      onError: g,
      handleClose: p,
      authority: r,
      title: u.loginTitle,
      subtitle: u.loginSubtitle
    }
  ) }) }) });
};
class Sb {
  cdnBaseUrl;
  currentBrand = null;
  styleElement = null;
  shadowRoot = null;
  constructor(r = "https://dev-cdn.colibrilearning.com/front-end-assets/brands-compiled", c) {
    this.cdnBaseUrl = r.replace(/\/$/, ""), this.shadowRoot = c || null;
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
      const r = await this.getBrands(), c = window.location.hostname, s = r.find(
        (o) => c.includes(o.domain) || o.domain.includes(c)
      );
      return s ? (console.log(`[ThemeWidget] Auto-detected brand from domain: ${s.name} (${s.token})`), localStorage.setItem("subsidiary", s.token), s.token) : (console.log(`[ThemeWidget] No brand matched for domain: ${c}`), null);
    } catch (r) {
      return console.error("[ThemeWidget] Error detecting brand from domain:", r), null;
    }
  }
  /**
   * Load theme for a specific brand by folder name or token
   */
  async loadTheme(r) {
    try {
      const s = (await this.getBrands()).find(
        (p) => p.folder.toLowerCase() === r.toLowerCase() || p.token.toLowerCase() === r.toLowerCase()
      );
      if (!s) {
        console.warn(
          `[ThemeWidget] Brand not found: ${r}. Using default theme.`
        );
        return;
      }
      localStorage.setItem("subsidiary", s.token);
      const o = `${this.cdnBaseUrl}/${s.folder}/theme.json`, d = await fetch(o);
      if (!d.ok)
        throw new Error(`Failed to fetch theme: ${d.statusText}`);
      const m = await d.json(), g = document.documentElement;
      m.styles.forEach((p) => {
        let y = p.value;
        /^\d+\s\d+\s\d+$/.test(y) && (y = `rgb(${y})`), g.style.setProperty(`--${p.name}`, y);
      }), this.currentBrand = s, console.log(`[ThemeWidget] Theme loaded for brand: ${s.name}`);
    } catch (c) {
      throw console.error("[ThemeWidget] Error loading theme:", c), c;
    }
  }
  /**
   * Apply theme styles by injecting CSS variables
   */
  applyTheme(r) {
    const c = r.styles.map((o) => {
      const d = this.formatStyleValue(o.value);
      return `  --${o.name}: ${d};`;
    }).join(`
`), s = `@theme {
${c}
}

:host {
${c}
}`;
    this.removeTheme(), this.styleElement = document.createElement("style"), this.styleElement.setAttribute("data-theme-widget", "true"), this.styleElement.textContent = s, this.shadowRoot ? this.shadowRoot.appendChild(this.styleElement) : document.head.appendChild(this.styleElement);
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
async function Rh(u) {
  const r = new Sb(u.cdnBaseUrl, u.shadowRoot), c = u.brandFolder || u.brandToken;
  if (c)
    await r.loadTheme(c);
  else if (u.autoDetect) {
    const s = await r.detectBrandFromDomain();
    s && await r.loadTheme(s);
  }
  return r;
}
const Ss = typeof window < "u" && window.__widgetStyles?.widget || "";
{
  class u extends HTMLElement {
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
      const c = this.attachShadow({ mode: "open" });
      if (Ss) {
        const d = document.createElement("style");
        d.textContent = Ss, c.appendChild(d);
      }
      this.applyCustomPrimaryColor(c);
      const s = this.getAttribute("subsidiary");
      s && s.trim() !== "" ? this.loadTheme(s, c) : this.loadThemeFromDomain(c);
      const o = document.createElement("div");
      c.appendChild(o), this.root = Cp.createRoot(o), this.render();
    }
    applyCustomPrimaryColor(c) {
      const s = this.getAttribute("custom-primary-color") || this.getAttribute("customPrimaryColor");
      if (s && s.trim() !== "") {
        console.log(`[Widget] Applying custom primary color: ${s}`);
        const o = document.createElement("style");
        let d = s.trim();
        /^[0-9A-Fa-f]{6}$/.test(d) && (d = `#${d}`), o.textContent = `
          :host {
            --color-primary: ${d};
            --color-primary-light: ${d};
            --button-primary-bg: ${d};
            --button-primary-bg-hover: ${d};
            --color-border-focus: ${d};
          }
        `, c.appendChild(o), console.log("[Widget] Custom primary color applied successfully");
      }
    }
    async loadTheme(c, s) {
      try {
        console.log(`[Widget] Loading theme for subsidiary: ${c}`), await Rh({
          brandFolder: c,
          shadowRoot: s
        }), console.log(`[Widget] Theme loaded successfully for ${c}`);
      } catch (o) {
        console.error("[Widget] Failed to load theme:", o);
      }
    }
    async loadThemeFromDomain(c) {
      try {
        console.log("[Widget] No subsidiary provided, attempting auto-detection from domain"), await Rh({
          shadowRoot: c,
          autoDetect: !0
        });
      } catch (s) {
        console.error("[Widget] Failed to auto-detect theme:", s), console.log("[Widget] Using default colors");
      }
    }
    attributeChangedCallback(c, s, o) {
      if (s !== o) {
        if (c === "custom-primary-color" || c === "customPrimaryColor") {
          const d = this.shadowRoot;
          d && this.applyCustomPrimaryColor(d);
        }
        this.render();
      }
    }
    disconnectedCallback() {
      this.root && (this.root.unmount(), this.root = null);
    }
    handleRedirect = (c, s) => {
      console.log("[Widget] handleRedirect called, url:", c), this.onRedirect && (console.log("[Widget] Calling onRedirect function prop"), this.onRedirect(c, s));
      const o = new CustomEvent("redirect", {
        detail: {
          url: c,
          userSession: s,
          tokens: { access_token: s?.access_token },
          userInfo: s?.userInfo
        },
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(o), console.log("[Widget] Redirect event dispatched"), c && !this.onRedirect && (console.log("[Widget] Will redirect to:", c, "in 200ms"), setTimeout(() => {
        window.location.href = c;
      }, 200));
    };
    handleClose = () => {
      this.onClose && (console.log("[Widget] Calling onClose function prop"), this.onClose());
      const c = new CustomEvent("close", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c), this.removeAttribute("show-login");
    };
    getProps() {
      const s = this.getAttribute("authority") || Mp(), d = (this.getAttribute("auto-redirection") || this.getAttribute("autoRedirection")) === "true";
      return {
        authority: s,
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
      console.log("[Widget] logout() called"), localStorage.removeItem("user_state"), localStorage.removeItem("access_token"), localStorage.removeItem("refresh_token"), localStorage.removeItem("refresh_token_time"), document.cookie.split(";").forEach((s) => {
        document.cookie = s.replace(/^ +/, "").replace(/=.*/, "=;expires=" + (/* @__PURE__ */ new Date()).toUTCString() + ";path=/");
      }), this.removeAttribute("show-login"), this.onLogout && (console.log("[Widget] Calling onLogout function prop"), this.onLogout());
      const c = new CustomEvent("logout", {
        bubbles: !0,
        composed: !0
      });
      this.dispatchEvent(c);
    }
    render() {
      if (!this.root) return;
      const c = this.getProps();
      console.log("[Widget] Rendering with props:", c), this.root.render(
        /* @__PURE__ */ x.jsx(fp, { children: /* @__PURE__ */ x.jsx(A.StrictMode, { children: /* @__PURE__ */ x.jsx(bb, { ...c }) }) })
      );
    }
  }
  customElements.get("keycloak-widget") || (customElements.define("keycloak-widget", u), console.log(
    `✅ keycloak-widget web component defined successfully ${Ss ? "with shadow DOM" : ""}`
  ));
}
